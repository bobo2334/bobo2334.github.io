---
date: 2021-12-24
tags:
    - debian
    - linux
---

# Debian 配置备份

<!-- more -->

## 软件源

执行命令。

```bash
apt edit-sources
```

替换内容，这里使用了 *清华大学开源软件镜像站 [^1]*。

```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free

deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
```

或者使用 *阿里巴巴开源镜像站点 [^2]*

```
deb http://mirrors.aliyun.com/debian/ bullseye main non-free contrib
# deb-src http://mirrors.aliyun.com/debian/ bullseye main non-free contrib
deb http://mirrors.aliyun.com/debian-security/ bullseye-security main
# deb-src http://mirrors.aliyun.com/debian-security/ bullseye-security main
deb http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
# deb-src http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
deb http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
# deb-src http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
```

## 更新系统

```bash
apt update
apt upgrade
```

## 安装小工具

```bash
apt install curl wget tmux bat htop btop exa neofetch trash-cli
apt install croc
```

## 配置别名

执行命令。

```
nano .profile
```

加入内容。

```bash
alias bat='batcat'
alias ll='exa -lha --modified --created --time-style long-iso --group-directories-first'
alias dc='docker-compose'
```

## docker

```bash
wget https://get.docker.com/ -O get-docker.sh
# sh get-docker.sh --mirror Aliyun
sh get-docker.sh
systemctl enable docker
```

## *docker-compose[^3]*

```bash
# wget https://ghproxy.com/https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose
wget https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose
chmod u+x /opt/docker-compose
ln -s /opt/docker-compose /usr/local/sbin/docker-compose
```

或者通过 Linuxbrew[^4] 安装。

[^1]: [debian | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/debian/)
[^2]: [debian 镜像-debian 下载地址-debian 安装教程 - 阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/debian)
[^3]: [Releases · docker/compose](https://github.com/docker/compose/releases)
[^4]: [Linuxbrew：Linux 上的 Homebrew](./linuxbrew-the-homebrew-on-linux.md)
