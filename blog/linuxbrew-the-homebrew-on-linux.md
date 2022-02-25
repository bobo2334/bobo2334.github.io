---
date: 2022-02-24
tags:
    - linux
---

# Linuxbrew：Linux 上的 Homebrew

## 前言

Homebrew[^1] 是一款用 Ruby 编写的、针对 macOS 系统的包管理器。后来又更新了对 Linux 的支持，现在你可以在你的 Linux 系统中引入一个新的包管理器 Linuxbrew。

Linuxbrew 可以是对系统中默认包管理器的补充。有些需要的软件包并不收录在官方的软件仓库中，这种情况下就需要你自己下载或编译二进制文件，自己安装。Linuxbrew/Homebrew 的软件包收录范围广、更新频率高，可以简化你安装软件包的过程。

<!-- more -->

## 安装依赖

Linuxbrew 的安装和使用的过程依赖 Git。Linuxbrew 在安装软件包时可能会从源码在本机上编译二进制文件，所以需要用到 GCC 和 glibc。

如果你的操作系统是`Debian`或其派生的发行版，可以用`apt`来安装这些软件包。

```bash
apt install build-essential procps curl file git
```

如果你使用的操作系统是 Red Hat 系的，你可以使用`yum`来安装这些软件包。

```bash
sudo yum groupinstall 'Development Tools'
sudo yum install procps-ng curl file git
sudo yum install libxcrypt-compat # needed by Fedora 30 and up
```

这些安装命令参考自 Homebrew 文档中的 Homebrew on Linux 部分 [^2]。

## 安装 Linuxbrew

Linuxbrew 本身和其安装的软件包都存放在用户目录下，所以安装和使用 Linuxbrew 不要求 root 权限。实际上出于安全考虑，Linuxbrew 禁止你用 root 权限运行它，因为软件包的安装脚本在 root 权限下可能会破坏你的系统（不管是有意还是无意的）。

Linuxbrew 推荐你将它安装在 linuxbrew 的用户目录下，该目录位于`/home/linuxbrew/.linuxbrew`，Linuxbrew 本身和它所安装的软件包都会存放于此目录中。

首先创建一个名为 linuxbrew 的用户，并配置其用户目录。

```bash
useradd -s /bin/bash linuxbrew
mkdir /home/linuxbrew
chown linuxbrew /home/linuxbrew
```

切换到 linuxbrew 用户，安装 Linuxbrew。

```bash
su - linuxbrew
```

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

配置环境变量。将 Linuxbrew 的可执行文件目录加入`PATH`，并配置一些和 Linuxbrew 相关的环境变量。修改`/etc/profile`需要 root 权限，你需要退出到 root 用户。

```bash
exit
```

```bash
echo $(/home/linuxbrew/.linuxbrew/bin/brew shellenv) >> /etc/profile
source /etc/profile
```

测试。运行下面的命令来测试 Linuxbrew 是否能正常工作，如果得到「Your system is ready to brew.」的提示则证明你的安装过程如期完成。如果你的 Linuxbrew 不能正常运行，它应该会给你提示。brew 要求用非 root 权限运行，所以你需要在使用 brew 命令的时候先切换到 linuxbrew 用户。其安装的软件包可以在 root 用户下运行。

```bash
su - linuxbrew
```

```bash
brew doctor
```

## 安装软件包

Linuxbrew 仅在 linuxbrew 用户中可用，所以在使用`brew`命令之前你需要先切换到

下面的命令用于安装一个名为 hello 的软件包，其提供了一个名为`hello`的可执行文件，用于在控制台输出「Hello, world!」。

```bash
brew install hello
```

你可以使用`brew search`命令来搜索软件包；或者在网页 Homebrew Formulae[^3] 中搜索软件包，但是并不是所有软件包都适用于 Linux。

## 进阶使用

Linuxbrew 其实就是 Homebrew，如果你使用过 Homebrew，那么你可以直接使用 Linuxbrew，就像在 macOS 上一样。

如果你没有用过 Homebrew，你可以参考一下`brew help`命令和`brew commands`命令的帮助以及 Homebrew 的官方文档 [^4]。

[^1]: [The Missing Package Manager for macOS (or Linux) — Homebrew](https://brew.sh/)
[^2]: [Homebrew on Linux — Homebrew Documentation](https://docs.brew.sh/Homebrew-on-Linux)
[^3]: [homebrew-core — Homebrew Formulae](https://formulae.brew.sh/formula/)
[^4]: [Documentation — Homebrew Documentation](https://docs.brew.sh/)
