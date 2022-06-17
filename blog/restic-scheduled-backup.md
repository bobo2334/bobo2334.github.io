---
date: 2022-06-18
tags:
    - restic
    - docker
    - tencent cos
---

# 使用 restic 定时备份文件

## 前言

restic 不会在后台运行，没有定时备份的功能。如果你有定时备份文件的需求，你可以使用 lobaro/restic-backup-docker 项目，这个项目提供了一个 Docker 镜像，可以很方便地使用 restic 定时进行文件备份。

<!-- more -->

## 项目介绍

*lobaro/restic-backup-docker[^1]* 是一个 Docker 镜像，镜像中包含 *restic[^2]* 和 cron，可以通过 cron 来定时执行 restic 的备份任务。容器的配置都可以通过设置环境变量来完成。你需要进行如下配置，正确配置后就可以定期执行 restic 的备份任务了。

1. 把要备份的文件和目录挂载到容器中`/data`目录下；
2. 配置好 restic 相关的环境变量；
3. 配置 cron 表达式。

## 使用示例

下面演示使用 Docker Compose 配置运行 restic-backup-docker 容器，定时备份文件到腾讯云 COS 中。

```yaml title="restic-backup-docker/docker-compose.yml" showLineNumbers
version: '3'
services:
  restic:
    image: lobaro/restic-backup-docker
    hostname: a-computer.local
    restart: unless-stopped
    volumes:
      - ./excludes.txt:/var/excludes.txt:ro
      - caddy_data:/data/caddy_data:ro
      - mysql_data:/data/mysql_data:ro
    environment:
      TZ: Asia/Shanghai
      BACKUP_CRON: 0 */6 * * *
      RESTIC_REPOSITORY: s3:https://cos.ap-shanghai.myqcloud.com/xxxxx-xxxxxxxxxx
      AWS_ACCESS_KEY_ID: xxxxxxxxxx
      AWS_SECRET_ACCESS_KEY: xxxxxxxxxx
      RESTIC_PASSWORD: xxxxxxxxxx
      RESTIC_JOB_ARGS: --limit-upload 5000 --exclude-file /var/excludes.txt
      RESTIC_FORGET_ARGS: --prune --keep-last 12 --keep-hourly 24 --keep-daily 7 --keep-weekly 4 --keep-monthly 12
volumes:
  caddy_data:
    external: true
  mysql_data:
    external: true
```

创建`excludes.txt`文本文件，作为 restic 的`--exclude-file`参数内容。restic 在备份过程中会忽略掉匹配这些规则的文件。

注意以`#`开头的行会被视为注释，如果你想排除某个以`#`开头的文件或文件夹，请使用`\#`来转义。

```txt title="restic-backup-docker/excludes.txt"
*log*
*cache*
tmp
\#recycle
```

`docker-compose.yml`文件中的`hostname`设置容器的主机名，restic 在进行备份的时候会用上主机名，表名此次备份是从哪台主机上创建的。

接下来对`docker-compose.yml`文件中的`environment`部分进行说明：

1. `TZ`，设置容器内的时区，格式为 *IANA time zone[^3]*；
2. `BACKUP_CRON`，执行备份任务的 cron 表达式，`0 */6 * * *`表示每 6 小时执行一次。可以使用一些 *在线工具 [^4]* 来验证 cron 表达式；
3. `RESTIC_REPOSITORY`，restic 备份目的地，这里备份到腾讯云的 COS 中，腾讯云 COS 兼容 Amazon S3 协议。具体可以参考 *腾讯云 COS 文档 [^5]* 和 *restic 文档 [^6]*。容器在启动时候会检测该仓库是否用 restic 初始化过，如果没有的话则会自动初始化仓库；
4. `AWS_ACCESS_KEY_ID`，腾讯云 COS 相关配置；
5. `AWS_SECRET_ACCESS_KEY`，腾讯云 COS 相关配置；
6. `RESTIC_PASSWORD`，restic 仓库的密码；
7. `RESTIC_JOB_ARGS`，执行`restic backup`命令时附加的额外参数，详情可参考 *restic 文档 [^7]*；
8. `RESTIC_FORGET_ARGS`，执行`restic forget`命令时附加的额外参数，详情可参考 *restic 文档 [^8]*。

接下来对`docker-compose.yml`文件中的`volumes`部分进行说明：

1. `./excludes.txt:/var/excludes.txt:ro`，挂载`excludes.txt`；
2. `caddy_data:/data/caddy_data:ro`，挂载`caddy_data`卷到容器内`/data`目录下；
3. `mysql_data:/data/mysql_data:ro`，挂载`mysql_data`卷到容器内`/data`目录下；
4. `/root:/data/root:ro`，挂载`/root`目录到容器内`/data`目录下。

## 启动容器

在`restic-backup-docker`目录下执行命令。

```bash
# 验证 docker-compose.yml 文件的格式是否正确
docker-compose config

# 启动容器
docker-compose up -d
```

## 测试配置

```bash
# 手动执行一次备份任务
docker-compose exec restic backup

# 查看 restic 的备份历史
docker-compose exec restic restic snapshots

# 查看上一次`restic backup`命令的结果
docker-compose exec restic cat /var/log/backup-last.log

# 查看最近一次失败的`restic backup`命令的结果
docker-compose exec restic cat /var/log/backup-error-last.log

# 查看 cron 日志
docker-compose logs -f
docker-compose exec restic cat /var/log/cron.log

# 在容器内启动一个 Shell，方面执行其他命令
docker-compose exec restic sh
```

## 更多用法

lobaro/restic-backup-docker 还有很多其他用法，例如：

1. 在容器内自动挂载 NFS 目录；
2. 在容器内使用`restic mount`命令；
3. 在备份前后执行自定义脚本。

本文中并没有涵盖所有的用法说明，关于更多用法请参考 *lobaro/restic-backup-docker[^9]*。

[^1]: [lobaro/restic-backup-docker - Docker Image | Docker Hub](https://hub.docker.com/r/lobaro/restic-backup-docker)
[^2]: [restic：轻量、跨平台的增量备份工具](./restic-backup-tool.md)
[^3]: [Noda Time | Time zones](https://nodatime.org/TimeZones)
[^4]: [Crontab.guru - The cron schedule expression editor](https://crontab.guru)
[^5]: [对象存储 在兼容 S3 的第三方应用中使用 COS 的通用配置 - 最佳实践 - 文档中心 - 腾讯云](https://cloud.tencent.com/document/product/436/41284)
[^6]: [Preparing a new repository — restic 0.13.1 documentation](https://restic.readthedocs.io/en/stable/030_preparing_a_new_repo.html)
[^7]: [Backing up — restic 0.13.1 documentation](https://restic.readthedocs.io/en/stable/040_backup.html)
[^8]: [Removing backup snapshots — restic 0.13.1 documentation](https://restic.readthedocs.io/en/stable/060_forget.html)
[^9]: [lobaro/restic-backup-docker: A docker container to automate backups with restic](https://github.com/lobaro/restic-backup-docker)
