---
date: 2021-12-24
---
# Debian 配置备份

## 软件源

- [debian | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/debian/)

```bash
apt edit-sources
```

```bash
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

```bash
apt update
```

## 小工具

```bash
apt install curl wget tmux bat htop exa neofetch trash-cli
```

## alias

```bash
alias bat='batcat'
alias ll='exa -lha --modified --created --time-style long-iso --group-directories-first'
alias dc='docker-compose'
alias lzd='lazydocker'
alias rm='echo "please use trash-put"'
```

## docker

```bash
wget https://get.docker.com/ -O get-docker.sh
# sh get-docker.sh --mirror Aliyun
sh get-docker.sh
systemctl enable docker
```

## docker-compose

- [Releases · docker/compose](https://github.com/docker/compose/releases)

```bash
# wget https://ghproxy.com/https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose
wget https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose
chmod u+x /opt/docker-compose
ln -s /opt/docker-compose /usr/local/sbin/docker-compose
```

## lazydocker

- [Releases · jesseduffield/lazydocker](https://github.com/jesseduffield/lazydocker/releases)

```bash
# wget https://ghproxy.com/https://github.com/jesseduffield/lazydocker/releases/download/v0.12/lazydocker_0.12_Linux_x86_64.tar.gz
wget https://github.com/jesseduffield/lazydocker/releases/download/v0.12/lazydocker_0.12_Linux_x86_64.tar.gz
mkdir ~/lazydocker
tar -zxvf lazydocker_0.12_Linux_x86_64.tar.gz -C ~/lazydocker
mv ~/lazydocker/lazydocker /opt/lazydocker
chmod u+x /opt/lazydocker
ln -s /opt/lazydocker /usr/local/sbin/lazydocker
trash-put ~/lazydocker
# rm -rf ~/lazydocker
```

```yaml
# ~/.config/jesseduffield/lazydocker/config.yml
reporting: "off"
gui:
  returnImmediately: true
commandTemplates:
  serviceLogs: '{{ .DockerCompose }} logs --timestamps --follow --tail 500 {{ .Service.Name }}'
  viewServiceLogs: '{{ .DockerCompose }} logs --tail 500 --follow {{ .Service.Name }}'
  containerLogs: docker logs --timestamps --follow --tail 500 {{ .Container.ID }}
  viewContainerLogs: docker logs --timestamps --follow --tail 500 {{ .Container.ID}}
```

## croc

- [Releases · schollz/croc](https://github.com/schollz/croc/releases)

```bash
# wget https://ghproxy.com/https://github.com/schollz/croc/releases/download/v9.5.0/croc_9.5.0_Linux-64bit.deb
wget https://github.com/schollz/croc/releases/download/v9.5.0/croc_9.5.0_Linux-64bit.deb
dpkg -i croc_9.5.0_Linux-64bit.deb
```

## bat

- [Releases · sharkdp/bat](https://github.com/sharkdp/bat/releases)

```bash
# wget https://ghproxy.com/https://github.com/sharkdp/bat/releases/download/v0.18.3/bat_0.18.3_amd64.deb
wget https://github.com/sharkdp/bat/releases/download/v0.18.3/bat_0.18.3_amd64.deb
dpkg -i bat_0.18.3_amd64.deb
```

