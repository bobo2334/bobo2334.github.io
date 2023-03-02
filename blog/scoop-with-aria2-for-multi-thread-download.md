---
date: 2022-03-09
tags:
    - scoop
    - aria2
---

# Scoop：用 aria2 加速下载

## 前言

aria2[^1] 是一款流行的多线程下载器。Scoop 在默认情况下使用单线程下载，你可以通过安装 aria2 来让 Scoop 支持多线程下载。

## 安装 aria2

在 PowerShell 中执行用下面的命令来安装 aria2。

```powershell
scoop install aria2
```

不需要多余配置，Scoop 在执行下载动作前会检测你是否安装了 aria2，如果检测到你已经安装了 aria2 则自动调用其进行多线程下载。

## 配置 aria2

在 Scoop 中有一些关于 aria2 的配置 [^2]，在某些情况下你可能想了解。

| 配置项                            | 默认值 | 说明                                                         |
| --------------------------------- | ------ | ------------------------------------------------------------ |
| `aria2-enabled`                   | `true` | 是否启用 aria2                                                |
| `aria2-warning-enabled`           | `true` | 是否在每次下载之前输出提示信息，内容为 aria2 下载的说明        |
| `aria2-retry-wait`                | `2`    | aria2 重试等待时间，单位为秒                                  |
| `aria2-split`                     | `5`    | 下载时使用的链接数                                           |
| `aria2-max-connection-per-server` | `5`    | 每个服务器的最大连接数                                       |
| `aria2-min-split-size`            | `5M`   | 最小分段大小，如果将要下载的文件大小小于该参数的 2 倍，则下载的过程中不会对文件进行分段 |
| `aria2-options`                   |        | 其它需要传递给 aria2 的参数，可以参考 aria2 的文档 [^3]           |

你可以通过`scoop config`命令来更改这些配置项的值。

例如你想停止使用 aria2 进行多线程下载，你可以通过执行下面的命令实现。

```powershell
scoop config aria2-enabled false
```

[^1]: [aria2/aria2: aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.](https://github.com/aria2/aria2)
[^2]: [ScoopInstaller/Scoop: A command-line installer for Windows.](https://github.com/ScoopInstaller/scoop#multi-connection-downloads-with-aria2)
[^3]: [aria2c(1) — aria2 1.36.0 documentation](https://aria2.github.io/manual/en/html/aria2c.html#options)
