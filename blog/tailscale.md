---
date: 2022-07-04
tags:
    - tailscale
    - vpn
---

# Tailscale 异地组网

## 前言

Zerotier 使用体验并不好，配置复杂，P2P 打洞耗时长，成功率低。最近体验了一下 Tailscale，感觉不错。

Tailscale 客户端配置简单；子网路由更简单，不需要配置客户端防火墙；打洞速度快，成功率高。

但 Tailscale 也有缺点：

1. 免费版限制 20 台设备，1 个子网路由；
2. 不能自定义虚拟网络网段。

## 官网注册

在 *Tailscale* [^1] 官方网站可以注册并登录。登录之后可以看到网页控制台。

## 接入客户端

在 *Tailscale 下载页面* [^2] 可以下载各个平台的客户端。支持 macOS、iOS、Windows、Linux 和 Android。

使用客户端登录同一账号之后即可加入网络。

或者是在网页控制台中的设置里，找到「Keys」->「Auth keys」，创建一个有时限的密钥，客户端可以凭此密钥登录，而不用使用账号登录。

此方法适用于命令行界面，用法如下。

```bash
sudo tailscale up --authkey tskey-abcdef1432341818
```

## 子网路由

客户端可以将自己所在局域网暴露给其他客户端。

```bash
sudo tailscale up --advertise-routes=192.168.123.0/24
```

之后在网页控制台中开启该客户端建议的子网路由即可。其它客户端就能直接访问该局域网的资源，就跟物理连接在该局域网一样。

## 开源替代品

*headscale* [^3] 是 Tailscale 服务端的开源实现。

headscale 兼容 Tailscale 的客户端，除了 iOS 设备之外，你可以使用 Tailscale 的客户端连接上 headscale 控制器。

## 参考资料

- [Docs · Tailscale](https://tailscale.com/kb/)
- [Tailscale 基础教程：Headscale 的部署方法和使用教程 – 云原生实验室 - Kubernetes|Docker|Istio|Envoy|Hugo|Golang|云原生](https://icloudnative.io/posts/how-to-set-up-or-migrate-headscale/)

[^1]: [Tailscale · Best VPN Service for Secure Networks](https://tailscale.com/)
[^2]: [Download · Tailscale](https://tailscale.com/download)
[^3]: [juanfont/headscale: An open source, self-hosted implementation of the Tailscale control server](https://github.com/juanfont/headscale)
