---
date: 2022-06-18
tags:
    - tencent-cos
    - docker
    - s3fs
---

# 使用 s3fs 挂载腾讯云 COS 中的内容

## 前言

之前写过一篇文章关于挂载腾讯云 COS 内容到本地，其中使用到了一款名为 cosfs 的软件，后来我发现该软件是 s3fs 的一个分支。并且腾讯云 COS 兼容 S3 的 API，所以索性直接用 s3fs 算了。

之前那篇文章中也缺失了开机自动挂载的部分，我最近发现了一个内含 s3fs 的 Docker 镜像，可以通过 Docker 容器自动启动来实现开机自动挂载。

<!-- more -->

## 项目介绍

*docker-s3fs-client[^1]* 提供了内嵌 s3fs 的 Docker 镜像，该镜像可以把远程的 Amazon S3 仓库的内容挂载到容器中。

腾讯云 COS 兼容 Amazon S3 的 API，所以可以使用 s3fs 挂载腾讯云 COS 中的内容。

## 使用示例

接下来使用 Docker Compose 来配置并部署 docker-s3fs-client 容器。

```yaml title="s3fs/docker-compose.yml"
version: '3.8'
services:
  s3fs:
    image: efrecon/s3fs
    restart: unless-stopped
    cap_add:
      - SYS_ADMIN
    security_opt:
      - 'apparmor:unconfined'
    devices:
      - /dev/fuse
    volumes:
      - /mnt/s3fs:/opt/s3fs/bucket:rshared
    environment:
      AWS_S3_BUCKET: xxxx-xxxxxx
      AWS_S3_ACCESS_KEY_ID: xxxxxxxxxxxxxxxxxx
      AWS_S3_SECRET_ACCESS_KEY: xxxxxxxxxxxxxxxxxx
      AWS_S3_URL: https://cos.ap-shanghai.myqcloud.com
```

在`docker-compose.yml`的`volumes`部分中，`/mnt/s3fs:/opt/s3fs/bucket:rshared`意味把宿主机`mnt/s3fs`文件夹挂载到容器里，你可能需要提前手动创建该文件夹；`/opt/s3fs/bucket`是固定的，并且`rshared`也是必不可少的。

`docker-compose.yml`中配置的环境变量看名称一般都知道什么意思，在挂载腾讯云 COS 的时候可以参考其 *相关文档 [^2]*。

执行以下命令来启动容器，注意在包含`docker-compose.yml`的`s3fs`文件夹中执行。

```bash
docker-compose up -d
```

如果配置正确的话，容器正常启动后就能在宿主机中正常访问腾讯云 COS 的内容了。

根据上面的配置，可以在宿主机的`mnt/s3fs`目录中访问被挂载的腾讯云 COS 的内容。如果不能正确访问请查看容器日志排查错误。

[^1]: [efrecon/docker-s3fs-client: Alpine-based s3fs client: mount from container, make available to other containers](https://github.com/efrecon/docker-s3fs-client)
[^2]: [对象存储 在兼容 S3 的第三方应用中使用 COS 的通用配置 - 最佳实践 - 文档中心 - 腾讯云](https://cloud.tencent.com/document/product/436/41284)
