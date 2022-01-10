---
date: 2022-1-10
---

# 挂载腾讯云 COS 到本地文件夹

## 前言

腾讯云提供了一个软件 cosfs[^1] 用于挂载 COS 到本地，可以使用标准的文件操作命令来操作 COS 中的内容。由于后端是云存储而不是真正的本地存储，所以有些操作的性能比较低。不推荐通过此种方式在其中修改文件内容或文件名称，仅仅下载文件和上传新文件的操作还是可以的。

文中所涉及的操作系统是 Debian，Debian 系的系统操作应该都差不多。

## 安装软件

cosfs 的挂载依赖 fuse，先安装 fuse。

```bash
apt install fuse
```

安装 cosfs，官方提供了`deb`和`rpm`格式的安装包，Debian 系统用`deb`格式的，下载安装包之前可以先去发布页面 [^2] 检查一下是否有新版本。

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
cosfs examplebucket-1250000000 /mnt/cos -ourl=http://cos.shanghai.myqcloud.com
```

挂载之后就可以像对待普通文件系统的方式来操作 COS 中的文件了。

## 取消挂载

```bash
umount /mnt/cos
```

## 开机自动挂载

// TODO

[^1]: [对象存储 COSFS 工具 - 工具指南 - 文档中心 - 腾讯云](https://cloud.tencent.com/document/product/436/6883)
[^2]: [Releases · tencentyun/cosfs](https://github.com/tencentyun/cosfs/releases)
