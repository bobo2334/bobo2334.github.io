# 优雅地重载 Caddyfile

## 前言

修改 Caddyfile 之后不需要重新启动 Caddy 服务，Caddy 提供了`caddy reload`命令可以重新加载配置文件。

记录两个脚本用于格式化 Caddyfile 并重载配置文件。脚本的内容可能需要根据实际情况作某些修改。

## Docker

如果你使用`docker`命令启动 Caddy 容器，可以使用下面的脚本来让 Caddy 重新加载配置文件。该脚本内容参考于 Caddy Docker 镜像文档 [^1]。

```bash
#!bin/bash
caddy_container_id=$(docker ps | grep caddy | awk '{print $1;}')
docker exec -w /etc/caddy $caddy_container_id caddy fmt --overwrite Caddyfile
docker exec -w /etc/caddy $caddy_container_id caddy reload
```

## Docker Compose

如果你使用`docker-compose`命令启动 Caddy 容器，可以使用下面的脚本来让 Caddy 重新加载配置文件。该脚本需要和`docker-compose.yml`位于同一目录下，并在该目录下执行此脚本。

```bash
#!bin/bash
docker-compose exec -w /etc/caddy caddy caddy fmt --overwrite Caddyfile
docker-compose exec -w /etc/caddy caddy caddy reload
```

[^1]: [Caddy - Official Image | Docker Hub](https://hub.docker.com/_/caddy)
