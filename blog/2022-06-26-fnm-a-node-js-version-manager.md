---
tags: [node-js]
---

# fnm：Node.js 版本管理器

## 前言

Node.js 版本管理器有很多。

下表列出我体验过的 Node.js 版本管理器。

| Node.js 版本管理器 | 开发语言   | 运行平台              |
| ------------------ | ---------- | --------------------- |
| *n* [^1]           | Shell      | macOS、Linux          |
| *nvm* [^2]         | Shell      | macOS、Linux          |
| *nodebrew* [^3]    | Perl       | macOS、Linux          |
| *fnm* [^4]         | Rust       | macOS、Linux、Windows |
| *nvs* [^5]         | JavaScript | macos、Linux、Windows |

其中：

- n，不好，要 root 权限；
- nvm，严重拖慢 Shell 的启动速度；
- nodebrew，还不错，但是需要 Perl；
- fnm，个人感觉最好的；
- nvs，安装不方便。

本文介绍其中的 fnm。fnm 有以下优势：

1. Rust 编写，直接运行二进制文件即可；
2. 没有其他依赖，不需要安装解释器；
3. 不会过多影响 Shell 启动速度；
4. 兼容`.nvmrc`配置文件。

## 在 macOS 上安装

你可以使用 Homebrew 安装。

```bash
brew install fnm
```

安装完成之后在 Shell 启动文件里加入初始化命令，如`~/.zshrc`。

```bash
# echo "eval $(fnm env)" >> ~/.zshrc
eval $(fnm env)
```

## 在 Linux 上安装

你可以使用 Homebrew 安装。

```bash
brew install fnm
```

安装完成之后在 Shell 启动文件里加入初始化命令，如`~/.bashrc`。

```bash
# echo "eval $(fnm env)" >> ~/.bashrc
eval $(fnm env)
```

## 在 Windows 上安装

你可以使用 Scoop 或者 Chocolatey 安装。

```powershell
scoop install fnm
# choco install fnm
```

安装完成之后在 Shell 启动文件里加入初始化命令。

以下命令用于创建并用记事本打开 Shell 启动文件。

```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```

之后在其中加入下面命令并保存。

```powershell
fnm env | Out-String | Invoke-Expression
```

## 使用

```bash
# 列出可以下载的版本
fnm list-remote

# 下载最新 lts 版本
fnm install --lts

# 列出已安装版本
fnm list

# 使用某个版本
fnm use v16.15.1

# 用某个版本运行命令
fnm exec --using=v16.15.1 node --version

# 卸载某个版本
fnm uninstall v16.15.1
```

[^1]: [tj/n: Node version management](https://github.com/tj/n)
[^2]: [nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)
[^3]: [hokaccha/nodebrew: Node.js version manager](https://github.com/hokaccha/nodebrew)
[^4]: [Schniz/fnm: 🚀 Fast and simple Node.js version manager, built in Rust](https://github.com/Schniz/fnm)
[^5]: [jasongin/nvs: Node Version Switcher - A cross-platform tool for switching between versions and forks of Node.js](https://github.com/jasongin/nvs)
