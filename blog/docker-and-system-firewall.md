---
date: 2021-12-23
tags:
    - docker
---
# Docker 穿透防火墙的问题

## 前言

有些服务只需要在本地访问，不需要向外暴露端口，不然会有安全隐患，总有一大堆机器扫描你的端口，尝试接入你的服务。

通过 Docker 暴露的端口，即使没有在防火墙中手动放行，在外部还是可以访问到。

<!-- more -->

## 解决办法

在进行端口映射的时候指定监听地址为`127.0.0.1`，如`127.0.0.1:3000:80`。在没指定的情况下，如`3000:80`，监听地址为`0.0.0.0`。

这在使用`docker run`命令和`docker-compose`命令的时候都可以生效。

`docker run`命令示例如下。

```bash
docker run -p 127.0.0.1:80:80 nginx
```

使用`docker-compose`命令时，`docker-compose.yml`内容示例如下。

```yml
version: '3.3'
services:
    nginx:
        ports:
            - '127.0.0.1:80:80'
        image: nginx
```

## 参考资料

- [无视系统防火墙的 docker - 博客 - binsite](https://www.binss.me/blog/docker-pass-through-system-firewall/)
- [docker 无视防火墙问题总结 - Icharle | Don't forget your first thoughts](https://icharle.com/dockeriptables.html)
- [docker 开放的端口是如何实现绕过防火墙的？ - 知乎](https://www.zhihu.com/question/64616650)
- [Docker 与 IPtables - 简书](https://www.jianshu.com/p/69d3ab177655)
