---
date: 2022-05-22
tags:
    - restic
---

# restic：轻量、跨平台的增量备份工具

## 前言

restic 是一款用 Go 语言实现的备份工具，具有跨平台运行、增量备份和历史版本备份的特性。

restic 可以使用本地位置或网络位置作为存储库。

有很多情况会导致数据丢失，比如 VPS 提供商跑路、机房失火、设备丢失以及人员误操作等，所以数据备份是一项很重要的工作。重要数据必须要备份。

<!-- more -->

## 概念介绍

restic 不直接备份文件，它会把文件分为固定大小的块，把这些文件块存入存储库。

restic 的每次备份都称为一个快照，快照里保存了对一个或多个文件块的引用。当多次备份相同文件的时候可以引用相同的文件块，不会占用很多空间；当文件变化不大的时候，也不需要对变化后的文件再完整备份一次，只需要在存储库中加入变化的文件块即可。

所以 restic 可以做到增量备份和多版本备份，并且空间占用也不多。

restic 在 Github[^1] 开源。

## 安装 restic

restic 是一个单文件的可执行程序，没有其它依赖。你可以手动从其 Github Releases[^2] 页下载可执行程序；你也可以通过包管理器安装 restic；restic 也可以通过 Docker 运行。安装细节可以参考其官方文档中的 Installation[^3] 部分 。

在 restic 正确安装后，你可以得到一个`restic`命令。

```
➜ ~ restic

restic is a backup program which allows saving multiple revisions of files and
directories in an encrypted repository stored on different backends.

Usage:
  restic [command]

Available Commands:
  backup        Create a new backup of files and/or directories
  cache         Operate on local cache directories
  cat           Print internal objects to stdout
  check         Check the repository for errors
  copy          Copy snapshots from one repository to another
  diff          Show differences between two snapshots
  dump          Print a backed-up file to stdout
  find          Find a file, a directory or restic IDs
  forget        Remove snapshots from the repository
  generate      Generate manual pages and auto-completion files (bash, fish, zsh)
  help          Help about any command
  init          Initialize a new repository
  key           Manage keys (passwords)
  list          List objects in the repository
  ls            List files in a snapshot
  migrate       Apply migrations
  mount         Mount the repository
  prune         Remove unneeded data from the repository
  rebuild-index Build a new index
  recover       Recover data from the repository not referenced by snapshots
  restore       Extract the data from a snapshot
  self-update   Update the restic binary
  snapshots     List all snapshots
  stats         Scan the repository and show basic statistics
  tag           Modify tags on snapshots
  unlock        Remove locks other processes created
  version       Print version information

Flags:
      --cacert file                file to load root certificates from (default: use system certificates)
      --cache-dir directory        set the cache directory. (default: use system default cache directory)
      --cleanup-cache              auto remove old cache directories
  -h, --help                       help for restic
      --insecure-tls               skip TLS certificate verification when connecting to the repo (insecure)
      --json                       set output mode to JSON for commands that support it
      --key-hint key               key ID of key to try decrypting first (default: $RESTIC_KEY_HINT)
      --limit-download int         limits downloads to a maximum rate in KiB/s. (default: unlimited)
      --limit-upload int           limits uploads to a maximum rate in KiB/s. (default: unlimited)
      --no-cache                   do not use a local cache
      --no-lock                    do not lock the repository, this allows some operations on read-only repositories
  -o, --option key=value           set extended option (key=value, can be specified multiple times)
      --password-command command   shell command to obtain the repository password from (default: $RESTIC_PASSWORD_COMMAND)
  -p, --password-file file         file to read the repository password from (default: $RESTIC_PASSWORD_FILE)
  -q, --quiet                      do not output comprehensive progress report
  -r, --repo repository            repository to backup to or restore from (default: $RESTIC_REPOSITORY)
      --repository-file file       file to read the repository location from (default: $RESTIC_REPOSITORY_FILE)
      --tls-client-cert file       path to a file containing PEM encoded TLS client certificate and private key
  -v, --verbose n                  be verbose (specify multiple times or a level using --verbose=n, max level/times is 3)

Use "restic [command] --help" for more information about a command.
```

## 查看命令帮助

在使用`restic`及其子命令时，可以通过使用`--help`参数来获取一些帮助文档。

```bash
restic --help
restic backup --help
restic ls --help
restic snapshots --help
```

在学习和使用 restic 的过程中，你也可以查看其线上文档 [^4] 来获取帮助。

## 初始化存储库

resitc 不使用配置文件，它会从环境变量中获取配置项。所以你可以通过`export`命令把配置项放入当前 Shell 会话的环境变量中。

在使用 restic 进行数据备份之前你需要先确定一个目录作为存储库，并用 restic 初始化这个目录。

这里需要使用两个配置项。

- `RESTIC_REPOSITORY`：存储库位置。可以是本地位置，也可以是网络位置；
- `RESTIC_PASSWORD`：存储库密码。

下面是使用本地存储库的例子。

```bash
export RESTIC_REPOSITORY="/Volumes/extra/restic"
export RESTIC_PASSWORD="pass"
```

需要注意的是，使用`export`暴露的环境变量只在当前 Shell 会话生效，当你重启 Shell 后这些环境变量就不存在了。

```bash
# 初始化存储库
restic init
```

存储库只需初始化一次，并且 restic 对存储库相关的操作都需要存储库的密码，你要保管好存储库密码。

## 备份数据

使用`restic backup`命令来备份数据。

```bash
restic backup [flags] FILE/DIR [FILE/DIR] ...
```

```bash
# 下面的命令用于把 /data 目录下的文件做备份。每次备份都会生成一个快照。
restic backup ~/data
```

## 查询快照记录

使用`restic snapshots`命令来查看快照记录，每个快照都有一个 ID。

```bash
restic snapshots [flags] [snapshotID ...]
```

## 查看快照内容

使用`restic ls`命令来查看快照中的内容。

```bash
restic ls [flags] snapshotID [dir...]
```

```bash
# 列出快照中的所有目录和文件，会递归列出目录中的内容
restic ls 9e73578b

# 可以用`latest`代替最新的快照 ID，列出最近的一次快照中的内容
restic ls latest

# 列出快照中`/`目录下的内容，不会递归子文件夹
restic ls 9e73578b /

# 列出快照中`/data`目录下的内容，不会递归子文件夹
restic ls 9e73578b /data
```

## 恢复数据

使用`restic restore`命令来从快照恢复数据。

```bash
restic restore [flags] snapshotID
```

```bash
# 恢复快照里的内容至 ~/restore-target 目录
restic restore -t ~/restore-target 9e73578b

# 恢复快照里的内容至 ~/restore-target 目录，只恢复快照中的 /data/file1 内容
restic restore -t ~/restore-target -i /data/file1 9e73578b
```

## 删除快照

使用`restic forget`命令来删除快照。

```bash
restic forget [flags] [snapshot ID] [...]
```

```bash
# 删除 ID 为 9e73578b 的快照
restic forget 9e73578b
```

可以设置淘汰策略来批量删除历史快照。

```bash
# 使用淘汰策略批量删除快照
restic forget --keep-last 12 --keep-hourly 24 --keep-daily 7 --keep-weekly 4 --keep-monthly 12
```

上面的命令定义了一些淘汰策略，不满足此策略的快照会被删除。

- 永远保留最新的 12 个快照；
- 对于过去 24 小时的快照，每个小时都保留一个最新的快照；
- 对于过去的 7 天，每天都保留一个最新的快照；
- 对于过去的 4 周，每周都保留一个最新的快照；
- 对于过去的 12 个月，每个月都保留一个最新的快照。

删除快照并不会释放存储库的存储空间，因为删除快照只是删除了对文件块的引用，文件块是不会被删除的。

使用`restic prune`命令来检查所有的文件块并删除没有被任何快照引用的文件块，从而释放存储库的空间。也可以在使用`restic forget`命令时加上`--prune`参数，restic 在删除快照之后会紧跟着执行`prune`命令。

```bash
# 扫描所有文件块，删除没有被任何一个快照引用的文件块
restic prune

# 在 forget 之后自动执行 prune 命令来释放空间
restic forget --prune --keep-last 12 --keep-hourly 24 --keep-daily 7 --keep-weekly 4 --keep-monthly 12
```

## 多机器共用存储库

如果你有多个机器需要备份数据，可以共用一个存储库。

每个快照都有一个 Host 属性，对应着实施备份操作的主机名（Hostname）。默认情况下 restic 直接读取系统中的 Hostname，你也可以通过`--host`或`-H`参数手动指定主机名。该参数可用于许多命令，如`backup`、`snapshots`或`forget`等命令中。

快照和快照之间是没有继承关系的，你删除之前的快照不会影响到之后的快照。

在使用`restic forget`命令使用淘汰策略删除快照时，如果不指定主机名会对分别对所有主机下的快照分别执行淘汰策略；如果指定了主机名则只会对对应主机名的快照执行淘汰策略。

## 后记

做了备份也不是一劳永逸的。你可能还需要异地多备份，仅仅备份在本地是不方便也是不安全的。

使用对象存储服作为存储库是一个不错的选择，基本上所有的对象存储服务器都兼容 Amazon S3 的 API，都可以作为 restic 的存储库使用。

对象存储的收费项目有下载流量费用、API 调用费用和存储空间费用。上传流量一般是不收费的，同时 API 调用费用和存储空间费用都不高。下载流量费用收费较高，但是在进行备份的时候没有多少下载流量，在紧急情况下恢复文件的时候可以买限时流量包包来降低下载流量的费用。花点钱赎回自己的数据总比数据都消失了要好。

有些对象存储在内网的下载流量也不收费，比如腾讯云的对象存储在腾讯云服务器中使用的话，下载流量就不计费，只收 API 调用的费用，你可以通过腾讯云的服务器来中转对象存储中的内容。关于此内容可以参考「挂载腾讯云 COS 到本地文件夹」[^5]。

在数据备份到对象存储之后，可以定期从对象存储中下载数据到本地的移动硬盘中，达成异地备份。存储库迁移可以使用`rclone`工具，把对象存储中的所有内容复制到本地即可完成迁移，`rclone`可以只复制有变化的内容并且删除多余的内容。

要定期做数据恢复测试，检查备份是否正常，是否能按期望恢复数据。备份不测试，等于没备份。

[^1]: [restic/restic: Fast, secure, efficient backup program](https://github.com/restic/restic)
[^2]: [Releases · restic/restic](https://github.com/restic/restic/releases)
[^3]: [Installation — restic 0.13.1 documentation](https://restic.readthedocs.io/en/stable/020_installation.html)
[^4]: [Restic Documentation — restic 0.13.1 documentation](https://restic.readthedocs.io/en/stable/index.html)
[^5]: [挂载腾讯云 COS 到本地文件夹](./mount-tencent-cos-on-local-file-system.md)
