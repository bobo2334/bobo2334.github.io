---
date: 2022-02-24
tags:
    - linux
    - homebrew
---

# 在 Linux 中安装 Homebrew

## 前言

*Homebrew* [^1] 是一款用 Ruby 编写的、针对 macOS 系统的包管理器。后来又更新了对 Linux 的支持，现在你可以在你的 Linux 系统中引入一个新的包管理器。

Homebrew 可以是对系统中默认包管理器的补充。有些需要的软件包并不收录在官方的软件仓库中，这种情况下就需要你自己下载或编译二进制文件，自己安装。Homebrew 的软件包收录范围广、更新快，可以简化你安装软件包的过程。

## 安装依赖

Homebrew 的安装和使用的过程依赖 Git。Homebrew 在安装软件包时可能会从源码在本机上编译二进制文件，所以需要用到 GCC 和 glibc。

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

这些安装命令参考自 Homebrew 文档中的 *Homebrew on Linux 部分* [^2]。

## 安装 Homebrew

Homebrew 本身和其安装的软件包都存放在用户目录下，所以安装和使用 Homebrew 不要求 root 权限。实际上出于安全考虑，Homebrew 禁止你用 root 权限运行它，因为软件包的安装脚本在 root 权限下可能会破坏你的系统（不管是有意还是无意的）。

Homebrew 推荐你将它安装在 linuxbrew 的用户目录下，该目录位于`/home/linuxbrew/.linuxbrew`，Homebrew 本身和它所安装的软件包都会存放于此目录中。

首先创建一个名为 linuxbrew 的用户，并配置其用户目录。

```bash
useradd -s /bin/bash linuxbrew
mkdir /home/linuxbrew
chown linuxbrew /home/linuxbrew
```

切换到 linuxbrew 用户执行安装脚本。

```bash
su - linuxbrew -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

配置环境变量。创建文件`/etc/profile.d/homebrew.sh`，并把以下代码加入该文件中。

```bash
nano /etc/profile.d/homebrew.sh
```

```bash
HOMEBREW_PREFIX="/home/linuxbrew/.linuxbrew"
eval $(${HOMEBREW_PREFIX}/bin/brew shellenv)
if [[ -r "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh" ]]
then
    source "${HOMEBREW_PREFIX}/etc/profile.d/bash_completion.sh"
else
    for COMPLETION in "${HOMEBREW_PREFIX}/etc/bash_completion.d/"*
    do
        [[ -r "${COMPLETION}" ]] && source "${COMPLETION}"
    done
fi
```

重启 Shell 后测试。运行下面的命令来测试 Homebrew 是否能正常工作，如果得到「Your system is ready to brew.」的提示则证明你的安装过程如期完成。如果你的 Homebrew 不能正常运行，它应该会给你提示。brew 要求用非 root 权限运行，所以你需要在使用 brew 命令的时候先切换到 Homebrew 用户。其安装的软件包可以在 root 用户下运行。

```bash
su - linuxbrew -c "brew doctor"
```

## 安装软件包

在使用`brew`命令之前你需要先切换到 linuxbrew 用户，但是通过 Homebrew 安装的软件包是可以供所有用户使用的。

下面的命令用于安装一个名为 hello 的软件包，其提供了一个名为`hello`的可执行文件，用于在控制台输出「Hello, world!」。

```bash
su - linuxbrew -c "brew install hello"
```

你可以使用`brew search`命令来搜索软件包；或者在网页 *Homebrew Formulae* [^3] 中搜索软件包，但是并不是所有软件包都适用于 Linux。

## 进阶使用

Homebrew 在 Linux 中的用法和其在 macOS 中一样。如果你没有用过 Homebrew，你可以参考一下`brew help`命令和`brew commands`命令的帮助以及 *Homebrew 的官方文档* [^4]。

[^1]: [The Missing Package Manager for macOS (or Linux) — Homebrew](https://brew.sh/)
[^2]: [Homebrew on Linux — Homebrew Documentation](https://docs.brew.sh/Homebrew-on-Linux)
[^3]: [homebrew-core — Homebrew Formulae](https://formulae.brew.sh/formula/)
[^4]: [Documentation — Homebrew Documentation](https://docs.brew.sh/)
