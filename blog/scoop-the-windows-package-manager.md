---
date: 2021-11-24
tags:
    - scoop
---

# Scoop：Windows 包管理器

## 引入 Scoop

包管理器用于管理软件的生命周期：安装软件及其依赖，配置软件环境变量、更新软件和卸载软件。

Scoop[^1] 是 Windows 上的一款包管理器，它是用 PowerShell 编写的，它可以帮助使用者特别是开发人员管理软件环境，快速构建开发环境。常用的开发工具都可以通过 Scoop 安装和管理。

<!-- more -->

Scoop 的本质是一系列 PowerShell 脚本的集合，所以运行 Scoop 需要 PowerShell 环境。并且它是针对 Windows 系统设计的，不具有跨平台性。

Scoop 对软件的管理功能依赖于提前定义好的针对每个软件包的配置文件，这些文件为 JSON 格式，称为 **Manifest**，由众多开发者维护，并托管在 Github。一个 Manifest 对应一个软件，其中包含了该软件的下载地址、安装/卸载脚本和其它必要信息。存放 Manifest 的仓库被称为 **Bucket**，对应一个 Git 仓库。Manifest 和 Bucket 是 Scoop 中的核心概念。

Scoop 对 Manifest 和 Bucket 的管理依赖于 Git。目前 Scoop 的官方 Bucket 托管在 GitHub。

Scoop 安装软件的过程依赖于 7-zip 和其它类型的解包软件如 innounp，Scoop 会将安装包里的文件解压至软件安装目录。`.zip`、`.7z`、`.msi`和大部分的`.exe`文件都能解包，软件的安装过程都是自动的，并不是传统的可视化界面方式，不需要人工干预，都由 Scoop 自动管理，程序文件放在统一的位置。软件开发者并不需要专门为 Scoop 制作专门的安装包，通用的软件安装程序都可以通过 Scoop 安装。

通过 Scoop 安装的软件大多是「绿色软件」，即不会写入注册表、不会创建桌面快捷方式，软件单独运行，不会有过多的依赖。Scoop 会根据 Manifest 中的信息为软件创建开始菜单中的快捷方式、创建命令链接、配置环境变量，通过 Scoop 安装软件不会污染系统环境。

## 安装前准备

Scoop 的安装和使用都需要访问到 Github，考虑到国内网络情况的特殊性，请你自备代理软件以确保能正常访问 GitHub。

大部分的命令行应用不会读取系统代理设置，所以有些情况下及时你启动了代理软件命令行应用也不会通过代理软件访问网络，你可能需要手动设置命令行环境的代理。

在 PowerShell 中，你可以执行以下命令来设置代理，请酌情替换其中的地址和端口号。

```powershell
$Env:http_proxy="http://127.0.0.1:11223"
$Env:https_proxy="http://127.0.0.1:11223"
```

该命令只在当前会话生效，当你关闭了 PowerShell 再次打开一个新的会话时则你需要再次执行该命令才能让代理设置生效。

你可以将这些命令写入`$PROFILE`文件来避免在每次新会话中重复执行命令的工作。PowerShell 在每次会话启动之后都会执行一次`$PROFILE`配置文件中的命令。

以下命令用于创建并用记事本打开`$PROFILE`文件。

```powershell
if (!(Test-Path -Path $PROFILE )) { New-Item -Type File -Path $PROFILE -Force }
notepad $PROFILE
```

在打开的记事本中写入设置代理的命令，保存该文件，并重新打开 PowerShell 即可生效。

```powershell
$Env:http_proxy="http://127.0.0.1:11223"
$Env:https_proxy="http://127.0.0.1:11223"
```

## 前提

Scoop 依赖以下系统环境才能正常工作。

1. PowerShell 5+
2. .NET Framework 4.5+

对于现代的 Windows 10 系统来说，这些条件已自动满足，对于较为古老的 Windows 7 系统用户来说，你可能需要手动升级 PowerShell 到`PowerShell 5`，并安装`.NET Framework 4.5`。

Scoop 依赖 Git 和 7-zip 来完成基本的工作，但是你不需要手动安装这些软件。你只需要确保良好的网络环境。

## 设置安装位置

// TODO 补充此章节，还有各个步骤的截图

## 安装 Scoop

接下来的命令都在 PowerShell 中执行。

下面的命令用于允许执行外部 PowerShell 脚本。你可能看到提示信息，请输入「Y」并按下回车键。

```powershell
Set-ExecutionPolicy RemoteSigned -scope CurrentUser
```

下面的命令用于安装 Scoop。

```powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```

在安装完成之后你将得到一个新的可执行命令`scoop`。下面的命令用于安装 7-zip 和 Git。

```powershell
scoop install 7zip git
```

等待命令执行完毕之后你就可以在命令行中使用`7z`和`git`命令，Scoop 已经为你配置好了环境变量和命令链接。

在安装好 Git 之后你需要为 Git 设置代理，以下命令用来为 Git 设置代理，请酌情替换其中的地址和端口号。

```bash
git config --global http.proxy http://127.0.0.1:11223
git config --global https.proxy http://127.0.0.1:11223
```

对 Git 的设置是永久性的，以下命令用于取消为 Git 设置代理，使用时请去掉注释前缀。

```bash
# git config --global --unset http.proxy
# git config --global --unset https.proxy
```

下面的命令用于添加`extras`软件仓库。

```powershell
scoop bucket add extras
```

## Scoop 的目录结构

// TODO 补充此章节，还有各个步骤的截图

## Scoop 软件管理命令

| 命令                     | 示例                                      | 备注                                                       |
| ------------------------ | ----------------------------------------- | ---------------------------------------------------------- |
| `scoop search <关键词>`  | `scoop search firefox`                    | 搜索和关键词相关的软件包                                   |
| `scoop info <包名>`      | `scoop info firefox`                      | 查看软件包信息                                             |
| `scoop install <包名>`   | `scoop install nodejs-lts adopt8-hotspot` | 安装指定软件，可以一次性安装多个软件，用空格分割这些软件名 |
| `scoop uninstall <包名>` | `scoop uninstall nodejs-lts`              | 卸载指定软件                                               |
| `scoop reinstall <包名>` | `scoop reinstall nodejs-lts`              | 重新安装指定软件                                           |
| `scoop reset <包名>`     | `scoop reset python`                      | 重新执行软件安装后脚本，以解决冲突                         |
| `scoop list`             |                                           | 列出所有已安装软件                                         |
| `scoop list <关键词>`    | `scoop list node`                         | 列出和关键词相关的已安装软件                               |
| `scoop status`           |                                           | 查询更新信息                                               |
| `scoop update <包名>`    | `scoop update vscode`                     | 更新指定的软件                                             |
| `scoop update`           |                                           | 更新 Scoop 和所有仓库信息                                  |

## Scoop 仓库管理命令

仓库相关命令均以`scoop bucket`开始。

| 命令                                 | 示例                                                         | 备注                               |
| ------------------------------------ | ------------------------------------------------------------ | ---------------------------------- |
| `scoop bucket known`                 |                                                              | 列出知名软件仓库                   |
| `scoop bucket add <知名仓库名>`      | `scoop bucket add jetbrains`                                 | 添加知名软件仓库，不用输入仓库地址 |
| `scoop bucket add <别名> <仓库地址>` | `scoop bucket add bobo2334 https://github.com/bobo2334/scoop-bucket.git` | 添加第三方软件仓库                 |
| `scoop bucket rm <别名>`             | `scoop bucket rm nerd-fonts`                                 | 移除软件仓库                       |
| `scoop bucket list`                  |                                                              | 列出所有已添加的软件仓库           |

## 卸载 Scoop

如果 Scoop 不能让你满意的话，你可以用下面的命令来移除 Scoop。这将会删除所有你用 Scoop 安装的软件，最后删除 Scoop 它自身。

```powershell
scoop uninstall scoop
```

[^1]: [Scoop](https://scoop.sh/)
