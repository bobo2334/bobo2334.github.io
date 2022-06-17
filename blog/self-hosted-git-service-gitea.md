---
date: 2022-05-21
tags:
    - git
    - docker
---

# Gitea：轻量级自建 Git 服务

## 前言

最近发生了一些事件：Github 封禁某些国家用户的账号；Gitee 公开仓库变私有，公开需通过审核。

这些大平台提供的服务看起来也不是那么可靠。这时候你可以自建一个 Git 服务平台自用，自己保管数据。

<!-- more -->

## 为什么选择 Gitea

下面列出了 Gitea[^1] 的优点。

1. Gitea 占用资源低，300MB 内存足以满足个人使用，其在官方网页上的介绍说明在树莓派上足以运行；
2. 用 Go 语言实现，可以部署在很多平台上，并且不会有依赖问题；
3. 安装方便，使用 Docker 可以直接部署；
4. 外部依赖少，可以使用 SQLite 作为数据库，个人使用完全足够，数据迁移也方便；
5. 开源；
6. 功能丰富，仓库有 Issues、Pull Requests、Projects、Releases、Wiki 以及 Activity 等板块；并且可以设置 Webhooks、Push Mirrow、镜像仓库等。
7. 用户界面模仿 Github，学习成本低，使用体验良好；
8. 有完整的用户和组织系统。

Gitea 没有集成 CI/CD 工具，因为 CI/CD 工具比较耗资源。

## 安装

可以使用 Docker Compose 快速部署 Gitea 实例。

以下是`docker-compose.yml`的内容示例。

```yml
version: "3"
services:
  server:
    image: gitea/gitea
    restart: unless-stopped
    ports:
      - 127.0.0.1:13000:3000
      - 127.0.0.1:2222:22
    volumes:
      - data:/data
volumes:
  data:
```

以下是对`docker-compose.yml`文件的简短说明。

- `ports`：容器的 3000 端口为 Web UI 的监听端口；容器的 22 端口为 SSH 端口，用于 SSH 方式访问 Git 仓库；
- `volumes`：Gitea 的数据都保存在容器内的`/data`目录中，包括所有 Git 仓库的文件都保存在此目录中。

## 反向代理以及 HTTPS 配置

可以使用 Web 服务器对 Gitea 的 Web UI 进行反向代理，通过域名暴露在公网中。

下面是使用 Caddy 进行反向代理的示例，这是 Caddyfile 的部分内容。Caddy 会自动申请域名证书并配置 HTTPS。

```caddyfile
*.iuok.me {
	tls {
		dns cloudflare xxxxxx
	}

	@gitea host gitea.iuok.me
	handle @gitea {
		reverse_proxy localhost:13000
		import hsts
	}

	handle {
		abort
	}
}
```

## 初次设置

在浏览器中输入你的 Gitea 域名进行访问，初次访问的时候会进入设置页面。

可以选择是否开启 SSH，如果把 SSH 端口设置为 0 则意味关闭 SSH 访问。

完成安装后如果再需要更改某些设置需要手动在配置文件中更改，配置文件位于容器中的`/data/gitea/conf/app.ini`。配置文件的配置细节可以参考其官方文档 [^2]。

## 使用

如果你只想自己一个人用的话需要设置不允许新用户注册，并且把自己的账号和仓库都设置为私有的；公共的仓库可以在主页被访客浏览。

使用体验和 Github 差不多。

## 双因素认证

为了提高账户的安全性，可以设置账户的双因素认证。

在「Settings」->「Security」->「Two-Factor Authentication」中可以开启双因素认证。使用支持 TOTP 的令牌软件都可以生成登录令牌；如 Authy、Google Authenticator 或 Bitwarden 等软件。

开启之后在登录时除了输入密码之外，还会要求你输入一个动态验证码，该验证码随时间变化。

开了双因素认证之后在使用 HTTPS 方式访问 Git 仓库时就不能用原来的密码了，需要你单独生成一个 Access Token 来访问仓库。Access Token 需要在「Settings」->「Applications」->「Manage Access Tokens
」中创建。

## 镜像仓库

在 Gitea 中可以创建镜像仓库，用于定时从源仓库中同步内容。

在创建仓库的时候选择迁移仓库，在迁移选项中勾选「This repository will be a mirror」即可创建一个镜像仓库。

只有创建仓库的时候可以选择创建镜像仓库，不可以把现有仓库改为镜像仓库；镜像仓库之后可以改为普通仓库。

## 数据备份

自建的服务要做好数据备份工作，因为 VPS 提供商也不一定可靠，也有可能发生意外事故，导致数据丢失。

Gitea 的数据文件结构比较简单，直接备份 Docker Volume 对应的目录即可。

默认情况下，Docker Volume 位于`/var/lib/docker/volume`下，备份`docker-compose.yml`中对应的数据卷中的内容即可。

可以使用 restic 备份到其它服务商提供的对象存储中；注意要异地备份，备份在本机无意义。

恢复数据的时候手动创建 Volume，把备份内容还原，然后再启动 Gitea 容器即可。


[^1]: [Gitea](https://gitea.io/en-us/)
[^2]: [Documentation - Docs](https://docs.gitea.io/en-us/)
