---
date: 2022-01-10
tags:
    - tencent-cos
---

# 挂载腾讯云 COS 到本地文件夹

## 前言

> 2022-06-18 更新：本文中的解决办法有更好的方案，请查看 [使用 s3fs 挂载腾讯云 COS 中的内容](./mount-tencent-cos-using-s3fs.md)。

腾讯云提供了一个软件 cosfs 用于挂载 COS 到本地，可以使用标准的文件操作命令来操作 COS 中的内容。由于后端是云存储而不是真正的本地存储，所以有些操作的性能比较低。不推荐通过此种方式在其中修改文件内容或文件名称，仅仅下载文件和上传新文件的操作还是可以的。

腾讯云同地域内网访问 COS 的下载流量不计费，可以通过腾讯云服务器把 COS 内容挂载到服务器，然后通过别的途径在外网下载，例如用 Rclone 通过 SFTP 把 COS 的内容复制到外网的机器，这样就不计下载流量的费用了，但是 API 调用次数还是要收费的。

文中所涉及的操作系统是 Debian，应该也适用于其他 Debian 系的操作系统。

<!-- more -->

## 安装软件

*cosfs[^1]* 依赖于 fuse，首先安装 fuse。

```bash
apt install fuse
```

安装 cosfs，官方提供了`deb`和`rpm`格式的安装包，Debian 系统用`deb`格式的，下载安装包之前可以先去 *发布页面 [^2]* 检查一下是否有新版本。

```bash
# wget https://ghproxy.com/https://github.com/tencentyun/cosfs/releases/download/v1.0.19/cosfs_1.0.19-ubuntu20.04_amd64.deb
wget https://github.com/tencentyun/cosfs/releases/download/v1.0.19/cosfs_1.0.19-ubuntu20.04_amd64.deb
dpkg -i cosfs_1.0.19-ubuntu20.04_amd64.deb
```

## 编写配置文件

配置文件应该存放在`/etc/passwd-cosfs`中。其中可以有多行，每行的格式如下。

```
<BucketName-APPID>:<SecretId>:<SecretKey>
```

例如你可以这样写。

```
examplebucket-1250000000:AKIDHTVVaVR6e3****:PdkhT9e2rZCfy6****
```

同时需要更改该文件的权限。

```bash
chmod 640 /etc/passwd-cosfs
```

## 挂载

先创建一个挂载点。

```bash
mkdir /mnt/cos
```

挂载，其中`ourl`指定了地域链接。

```bash
cosfs examplebucket-1250000000 /mnt/ -ourl=http://cos.ap-guangzhou.myqcloud.com
```

挂载之后就可以像对待普通文件系统的方式来操作 COS 中的文件了。

## 取消挂载

```bash
umount /mnt/cos
```

## 局限性

该方法有一定 *局限性 [^3]*，只在特定情况下好用，使用时要考虑性能问题。

- 随机或者追加写文件会导致整个文件的重写；
- 元数据操作，例如 list directory，性能较差，因为需要远程访问 COS 服务器；
- 文件/文件夹的 rename 操作不是原子的；
- 多个客户端挂载同一个 COS bucket 时，依赖用户自行协调各个客户端的行为。例如避免多个客户端写同一个文件等等；
- 不支持 hard link；
- 不适合用在高并发读/写的场景，这样会让系统的 load 升高。

[^1]: [对象存储 COSFS 工具 - 工具指南 - 文档中心 - 腾讯云](https://cloud.tencent.com/document/product/436/6883)
[^2]: [Releases · tencentyun/cosfs](https://github.com/tencentyun/cosfs/releases)
[^3]: [tencentyun/cosfs](https://github.com/tencentyun/cosfs#%E5%B1%80%E9%99%90%E6%80%A7)
