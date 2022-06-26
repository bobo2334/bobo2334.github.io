---
date: 2022-02-25
tags:
    - node-js
---

# Nodebrew：Node.js 安装以及版本切换

## 前言

在许多 Linux 包管理器中 Node.js 的版本比较混乱，或者在官方软件仓库中不存在 Node.js 软件包；自己动手安装又比较繁琐；在某些情况下需要切换 Node.js 版本就更麻烦了，这时 Nodebrew 就派上用场了。

Nodebrew 是 Node.js 版本管理器，用 Perl 编写，可以简化你关于 Node.js 安装、卸载、版本管理等过程。

Nodebrew 没有为 Windows 而设计，不支持在 Windows 使用。

<!-- more -->

## 安装

*Nodebrew* [^1] 的安装过程就是把 Perl 脚本下载到本地，然后将其所在的目录加入`PATH`环境变量中。

### 安装位置

你可以通过设置环境变量`NODEBREW_ROOT`来指定 Nodebrew 的安装位置。当然你也可以省略这一步骤，如果没有这个环境变量，Nodebrew 会默认安装在`$HOME/.nodebrew`。

### 通过安装脚本安装

执行下面的命令来下载 Nodebrew 到本地。

```bash
curl -L git.io/nodebrew | perl - setup
```

之后你还需要将其加入到`PATH`中。你需要将下面的命令（二选一）加入到你的 Shell 配置文件中，例如`/etc/profile`、`~/.profile`或`~/.bashrc`等文件。

```bash
# Node.js 安装在用户目录，每个用户独立
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

```bash
# Node.js 安装在统一目录，所有用户共用
# 请修改 NODEBREW_ROOT 为你期望的安装位置
export NODEBREW_ROOT=/somewhere
export PATH=$NODEBREW_ROOT/current/bin:$PATH
```

使用下面的命令重载配置文件，配置文件的路径就是你上一步骤中修改的配置文件的路径。或者你也可以直接重新登录终端来使配置生效。

```bash
source /etc/profile
```

使用下面的命令来初始化 Nodebrew 文件夹。

```bash
nodebrew setup_dirs
```

### 通过 Homebrew 来安装

*Homebrew* [^2] 是一个包管理器，由 Ruby 编写，可以在 macOS 或 Linux 平台上运行。

使用下面的命令来通过`brew`命令安装 Nodebrew。

```bash
brew install nodebrew
```

之后你还需要将其加入到`PATH`中。你需要将下面的命令（二选一）加入到你的 Shell 配置文件中，例如`/etc/profile`、`~/.profile`或`~/.bashrc`等文件。

```bash
# Node.js 安装在用户目录，每个用户独立
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

```bash
# Node.js 安装在统一目录，所有用户共用
export NODEBREW_ROOT=$HOMEBREW_PREFIX/var/nodebrew
export PATH=$NODEBREW_ROOT/current/bin:$PATH
```

使用下面的命令重载配置文件，配置文件的路径就是你上一步骤中修改的配置文件的路径。或者你也可以直接重新登录终端来使配置生效。

```bash
source /etc/profile
```

使用下面的命令来初始化 Nodebrew 文件夹。

```bash
nodebrew setup_dirs
```

## 使用

使用下面的命令来安装并使用最新稳定版的 Node.js。之后`node`和`npm`命令就可以用了。

```bash
nodebrew install stable
nodebrew use stable
```

更多使用帮助请参考其 *Github 仓库页面* [^1] 和命令行中提供的说明信息。

[^1]: [hokaccha/nodebrew: Node.js version manager](https://github.com/hokaccha/nodebrew)
[^2]: [The Missing Package Manager for macOS (or Linux) — Homebrew](https://brew.sh/)
