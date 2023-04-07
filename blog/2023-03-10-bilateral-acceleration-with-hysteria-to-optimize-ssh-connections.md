# 使用 Hysteria 实现双边加速，优化 SSH 连接

## 前言

租了一个国外小鸡，网络情况挺差。SSH 连接稳定性堪忧：时常连接不上；或者连接上之后频繁断线。此时可以使用双边加速工具来提高 SSH 连接的稳定性和速度。

## Hysteria 简介

> Hysteria 是一个功能丰富的，专为恶劣网络环境（如卫星网络、拥挤的公共 Wi-Fi、从中国连接境外服务器等）进行优化的双边加速工具，基于修改版的 QUIC 协议。

## Hysteria 服务器端

可以使用 Docker Compose 快速启动 Hysteria 服务器端。

编写配置文件，以下是`hysteria.json`文件的内容。Hysteria 服务端 必须要 一个 TLS 证书，它可以使用 ACME 协议自动为你申请 TLS 证书。除了在下面的配置文件中填写你的域名和邮箱之外，你还需要正确配置域名解析，你需要在你的 DNS 服务商处将配置文件中指定的域名正确地解析到你机器的 IP 地址上。

```json
{
  "listen": ":36712",
  "obfs": "xxxxxxxxxxxx",
  "acme": {
    "domains": [
      "your.domain.com"
    ],
    "email": "your@email.com"
  }
}
```

使用 Docker 运行服务器端。以下是`docker-compose.yml`文件的内容。注意`network_mode`使用 host 模式，这样在端口转发的时候填写`127.0.0.1`才能指向本地地址，不然`127.0.0.1`会指向容器本身，这样做是没意义的。

```yaml
version: "3"
services:
  hysteria:
    image: tobyxdd/hysteria
    container_name: hysteria
    command: [ "server", "--config", "/etc/hysteria.json" ]
    restart: unless-stopped
    network_mode: host
    volumes:
      - ./hysteria.json:/etc/hysteria.json
```

将`hysteria.json`和`docker-compose.yml`放在同一目录下。可以是如下的目录结构。

```text
.\hysteria\
├── docker-compose.yml
└── hysteria.json
```

在`hysteria`目录下运行下面的命令来启动容器。

```bash
docker-compose up -d
```

## Hysteria 客户端

Windows 用户可以使用 Scoop 快速安装 Hysteria。或者你可以手动在其 Github 仓库页面中下载编译好的可执行程序。

```powershell
scoop install hysteria
```

客户端也需要编写配置文件。

配置文件内容如下，其中`relay_tcps`部分定义了 TCP 端口转发配置。如下的配置指明将本地主机的 22221 端口转发到远程主机的 22 端口。`socks5`部分定义了一个 SOCKS5 代理端口，将通过本机 10801 端口的流量全都通过远程主机代理。

```json
{
  "server": "your.domain.com:36712",
  "obfs": "xxxxxxxxxxxx",
  "up_mbps": 20,
  "down_mbps": 100,
  "socks5": {
    "listen": "127.0.0.1:10801"
  },
  "relay_tcps": [
    {
      "listen": "127.0.0.1:22221",
      "remote": "127.0.0.1:22"
    }
  ]
}
```

运行下面的命令来启动 Hysteria 客户端。

```powershell
hysteria client -c .\config.json
```

## 测试 SSH 连接

在 Hysteria 正确运行后，你可以通过本地的 22221 端口使用 SSH 连接上远程的机器。

```bash
ssh root@127.0.0.1 -p 22221
```

## 作为代理软件使用

在客户端的配置文件中还指定了 SOCKS5 代理端口，在其他软件中配置代理时可以使用这个端口，让 Hysteria 作为一个代理软件使用。

## 参考资料

- [apernet/hysteria: Hysteria is a feature-packed proxy & relay tool optimized for lossy, unstable connections (e.g. satellite networks, congested public Wi-Fi, connecting to foreign servers from China)](https://github.com/apernet/hysteria)
- [主页 | Hysteria](https://hysteria.network/zh/)
