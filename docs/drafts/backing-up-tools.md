# 备份工具

## 对比𐄂

| 项目         | 编程语言 | Docker | 增量备份 | 加密 | 多版本 | 备份到本地 | S3   | One Drive |
| ------------ | -------- | ------ | -------- | ---- | ------ | ---------- | ---- | --------- |
| duplicati    | C#       | ✓      | ✓        | ✓    | ✓      | ✓          | ✓    | ✓         |
| restic       | Go       | ✓      |          |      | ✓      | ✓          | ✓    | 𐄂         |
| autorestic   | Go       | ✓      |          |      | ✓      | ✓          | ✓    |           |
| duplicacy    | Go       |        |          |      |        |            |      |           |
| duplicity    | Python   |        |          |      |        |            |      |           |
| backup       | Ruby     |        |          |      |        |            |      |           |
| attic        | Python   |        |          |      |        |            |      |           |
| rdiff-backup | Python   |        |          |      |        |            |      |           |
| borg         | Python   |        |          |      |        |            |      |           |
| kopia        | Go       | ✓      | ✓        | ✓    | ✓      | ✓          | ✓    | 𐄂         |
| gobackup     | Go       | ✓      | 𐄂        | ✓    | ✓      | ✓          | ✓    | 𐄂         |

## restic

- 仓库：[restic/restic: Fast, secure, efficient backup program](https://github.com/restic/restic)
- 文档：[restic · Backups done right!](https://restic.net/)
- 工具：[cupcakearmy/autorestic: Config driven, easy backup cli for restic.](https://github.com/cupcakearmy/autorestic)

## borg

- 仓库：[borgbackup/borg: Deduplicating archiver with compression and authenticated encryption.](https://github.com/borgbackup/borg)
- 文档：[Borg Documentation — Borg - Deduplicating Archiver 1.1.17 documentation](https://borgbackup.readthedocs.io/en/stable/)
- 工具：[borgmatic-collective/borgmatic: Simple, configuration-driven backup software for servers and workstations](https://github.com/borgmatic-collective/borgmatic)

## duplicati

- 仓库：[duplicati/duplicati: Store securely encrypted backups in the cloud!](https://github.com/duplicati/duplicati)
- 文档：[Duplicati 2 User's Manual](https://duplicati.readthedocs.io/en/latest/)

好用，但是内存占用高。备份任务基于`.json`配置文件。备份目的地多样，支持 S3 API，但是在使用阿里云 OOS 时出错；支持腾讯云 COS。

## bup

- 仓库：[bup/bup: Very efficient backup system based on the git packfile format, providing fast incremental saves and global deduplication (among and within files, including virtual machine images). Current release is 0.31, and the development branch is master. Please post problems or patches to the mailing list for discussion (see the end of the README below).](https://github.com/bup/bup)
- 工具：[tobru/bupper: bupper - a bup backup profile manager](https://github.com/tobru/bupper)

## backup

- 仓库：[backup/backup: Easy full stack backup operations on UNIX-like systems.](https://github.com/backup/backup)
- 文档：[Overview · Backup Documentation](https://backup.github.io/backup/v4/)

## duplicacy

- 仓库：[gilbertchen/duplicacy: A new generation cloud backup tool](https://github.com/gilbertchen/duplicacy)https://github.com/duplicati/duplicati)
- 文档：[Home · gilbertchen/duplicacy Wiki](https://github.com/gilbertchen/duplicacy/wiki)

## duplicity

- 仓库：[duplicity / duplicity · GitLab](https://gitlab.com/duplicity/duplicity)
- 文档：[duplicity: Main](https://duplicity.gitlab.io/duplicity-web/index.html)

## kopia

- 仓库：[kopia/kopia: Cross-platform backup tool for Windows, macOS & Linux with fast, incremental backups, client-side end-to-end encryption, compression and data deduplication. CLI and GUI included.](https://github.com/kopia/kopia)
- 文档：

## attic

- 仓库：[jborg/attic: Deduplicating backup program](https://github.com/jborg/attic)
- 文档：

## rdiff-backup

- 仓库：[rdiff-backup/rdiff-backup: Reverse differential backup tool, over a network or locally.](https://github.com/rdiff-backup/rdiff-backup)
- 文档：

## gobackup

- 仓库：[huacnlee/gobackup: 🗄 Simple tool for backup your databases, files to FTP / SCP / S3 storages.](https://github.com/huacnlee/gobackup)
- 文档：
