---
date: 2023-03-02
---

# 使用 vackup 备份 Docker Volume

## 简介

**vackup**[^1] 是一个 Shell 脚本，用于备份 Docker 卷中的数据，它会将卷中的数据用`tar`命令打包。

vackup 目前已成为 Docker Desktop 的官方插件，如果你使用 Docker Desktop 的话可以很方便地使用它，它在插件中心名为 **Volumes Backup & Share**[^2]。

## 安装

vackup 是一个 Shell 脚本，放在任意位置皆可。你可以使用`curl`命令将其下载到本地，然后赋予其执行权限。

```bash
curl -sSL https://raw.githubusercontent.com/BretFisher/docker-vackup/main/vackup > /usr/local/bin/vackup
chmod +x /usr/local/bin/vackup
```

如果你访问 Github 时有网络问题，你可以使用 Github 镜像服务下载此脚本。

```bash
curl -sSL  https://ghproxy.com/https://raw.githubusercontent.com/BretFisher/docker-vackup/main/vackup > /usr/local/bin/vackup
chmod +x /usr/local/bin/vackup
```

## 使用

```bash
# 导出
# vackup export VOLUME FILE
./vackup export xxx_data xxx_data.tgz
```

```bash
# 导入
# vackup import FILE VOLUME
./vackup import xxx_data.tgz xxx_data
```

## 原理

脚本内容并不多，通过阅读脚本我们可以知道它的工作原理。

在导出时使用此命令创建了一个 busybox 容器，挂载了当前文件夹到容器中，使用其中的 tar 命令来创建归档文件。

下面命令中`$VOLUME_NAME`是数据卷名称，`$FILE_NAME`是导出的归档文件名称。

```bash
docker run --rm \
      -v "$VOLUME_NAME":/vackup-volume \
      -v "$(pwd)":/vackup \
      busybox \
      tar -zcvf /vackup/"$FILE_NAME" /vackup-volume
```

导入的原理和导出差不多，只不过是`tar`命令的参数变了。

```bash
docker run --rm \
      -v "$VOLUME_NAME":/vackup-volume \
      -v "$(pwd)":/vackup \
      busybox \
      tar -xvzf /vackup/"$FILE_NAME" -C /;
```

[^1]: [BretFisher/docker-vackup: Script to easily backup and restore docker volumes](https://github.com/BretFisher/docker-vackup)
[^2]: [Volumes Backup & Share - Official Extension | Docker Hub](https://hub.docker.com/extensions/docker/volumes-backup-extension)
