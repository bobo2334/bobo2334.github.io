---
date: 2021-09-10
---

# 以容器的方式暴露 Docker Remote API 并启用 TLS

## 前言

之前在“开启 Docker Remote API 并启用 TLS”[^1]中记录过Docker暴露Remote API并配置TLS支持，虽然其中引用了别人的脚本来简化证书的签发步骤，但是在证书签发完成之后还是需要对Docker的启动命令进行修改，还是一个比较繁琐的步骤。

后来我发现了docker-remote-api-tls[^2]项目，它提供了一个镜像，在运行镜像之后它会自动完成证书签发和API转发步骤。

## 部署

可以通过Docker Compose方便地启动这个容器，下面是`docker-compose.yml`文件的内容。

```yaml
version: "3"
services:
  api:
    image: kekru/docker-remote-api-tls:v0.3.0
    ports:
      - 2376:443
    environment:
      - CREATE_CERTS_WITH_PW=dockercompose
      - CERT_EXPIRATION_DAYS=3650
      - CA_EXPIRATION_DAYS=36500
      - CERT_HOSTNAME=192.168.229.129.nip.io
    volumes:
      - /root/compose/docker-remote-api-with-tls/certs:/data/certs
      - /var/run/docker.sock:/var/run/docker.sock:ro
    restart: unless-stopped
```

有以下几点需要注意：

1. 第6行，容器内的端口是443，需要映射到容器外2376端口；
2. 第8行，`CREATE_CERTS_WITH_PW`设置证书密码；
3. 第9行，`CERT_EXPIRATION_DAYS`设置证书过期时间，默认365天；
4. 第10行，`CA_EXPIRATION_DAYS`设置CA证书过期时间，默认900天；
5. 第11行，`CERT_HOSTNAME`设置域名，如果没有域名可以用nip.io[^3]来得到一个可以解析到任意IP的域名。形如`192.168.229.129.nip.io`的域名会被解析至`192.168.229.129`；还有其他形式的域名可以在nip.io网站中查看；
6. 第13行，挂载证书目录，首次启动时证书会被自动创建并存放在此目录中；
7. 第14行，挂载`docker.sock`。

通过`docker compose up -d`启动容器。根据配置，证书会被自动创建在`/root/compose/docker-remote-api-with-tls/certs`目录中。

该目录的结构如下：

```
certs/
├── ca-cert.pem
├── ca-key.pem
├── client
│   ├── ca.pem
│   ├── cert.pem
│   └── key.pem
├── server-cert.pem
└── server-key.pem
```

其中，客户端需要的证书文件存放在`client`目录中。此时Docker Remote API已经暴露在2376端口，客户端可以使用证书文件来通过认证。

如果需要重新签发证书文件，只需要清空`certs`文件夹即可。

[^1]: [开启 Docker Remote API 并启用 TLS](./enable-docker-remote-api-with-tls-protection.md)
[^2]: [kekru/docker-remote-api-tls: Docker Image that forwards to the Docker API Socket and requires TLS Client authentication](https://github.com/kekru/docker-remote-api-tls)
[^3]: [nip.io - wildcard DNS for any IP Address](https://nip.io/)



