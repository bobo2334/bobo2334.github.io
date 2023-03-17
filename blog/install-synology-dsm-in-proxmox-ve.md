---
date: 2022-06-18
tags:
    - proxmox-ve
    - synology
---

# 在 Proxmox VE 中安装群晖 DSM 6

## 前言

感觉比在 ESXi 中安装要简单不少。本文中使用 DS918+ 型号对应的引导和系统。

## 文中从互联网上下载的文件备份

文中有一些文件是从互联网上下载的，为了防止其中的某些资源在某些时刻时效，这里做一个[备份](https://zfile.iuok.me/1/articles/install-synology-dsm-in-proxmox-ve)。

## 下载引导

在 *XPEnology Community[^1]* 下载 DS918+ v1.04b 引导文件，得到`synoboot.img`。

![image-20220618113024071](install-synology-dsm-in-proxmox-ve.assets/image-20220618113024071.png)

## 下载系统

v1.04b 支持 DSM 6.2 或 6.2.1 系统，去 *群晖网站 [^2]* 下载系统；首先选择系统版本，这里选择 6.2.1 的第一个版本 `6.2.1-23824`，得到`DSM_DS918+_23739.pat`。

![image-20220618201311930](install-synology-dsm-in-proxmox-ve.assets/image-20220618201311930.png)

![image-20220618201409606](install-synology-dsm-in-proxmox-ve.assets/image-20220618201409606.png)

## 创建虚拟机

在 PVE 的 Web 控制台中创建虚拟机。

1. 常规。需要注意一下 VM ID，后面导入引导磁盘的时候用的到；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_45_57](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_45_57.png)
2. 操作系统。不使用任何介质；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_46_38](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_46_38.png)
3. 系统。没什么需要更改的，保持默认设置即可；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_47_25](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_47_25.png)
4. 磁盘。删除默认的磁盘；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_47_47](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_47_47.png)
5. CPU。根据需要设置；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_48_11](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_48_11.png)
6. 内存。根据需要设置；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_48_22](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_48_22.png)
7. 网络。网卡模型选择 Intel E1000，取消勾选防火墙；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_48_37](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_48_37.png)
8. 确认；
  ![screenshot-192.168.10.200_8006-2022.06.18-11_48_56](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-11_48_56.png)
9. 删除 CD/DVD 驱动器；
  ![image-20220618182642048](install-synology-dsm-in-proxmox-ve.assets/image-20220618182642048.png)
10. 添加一个串行端口，可以在控制台上看到引导日志，对于排查错误很有帮助。
  ![image-20220618194623034](install-synology-dsm-in-proxmox-ve.assets/image-20220618194623034.png)

## 导入引导磁盘

`img`格式的镜像是不能直接作为磁盘使用的，需要你手动把它转换为`qcow2`格式并导入到虚拟机中。

首先需要上传`synoboot.img`到 PVE 主机内，可以通过 SFTP 上传，存放位置没有要求，临时用用，用完可以在 PVE 上删除。

使用 SSH 连接上 PVE 主机，执行命令。

执行下面的命令来转换磁盘格式。

```bash
qemu-img convert -f raw -O qcow2 synoboot.img synoboot.qcow2
```

执行下面的命令来导入磁盘。其中`104`是虚拟机 ID，`local-lvm`是存储位置的名称；你可能要根据你的情况对命令进行一些修改。

```bash
qm importdisk 104 synoboot.qcow2 local-lvm
```

命令执行完毕之后可以在 PVE Web 控制台中查看到一个未使用的磁盘。

![image-20220618121759934](install-synology-dsm-in-proxmox-ve.assets/image-20220618121759934.png)

双击该磁盘或点击「编辑」即可添加这个磁盘到虚拟机。总线选择 SATA。

![screenshot-192.168.10.200_8006-2022.06.18-12_19_03](install-synology-dsm-in-proxmox-ve.assets/screenshot-192.168.10.200_8006-2022.06.18-12_19_03.png)

## 硬盘直通

这里直接直通 SATA/SAS 控制器，要确保你的 PVE 操作系统没有安装在该控制器上的硬盘内，不然会导致 PVE 无法正常启动。

如果你没有其他硬盘控制器（如 NVME）用来安装 PVE 的话就不要选择直通硬盘控制器，你可以选择其他方法来直通硬盘。

直通硬盘控制器的优点是 DSM 可以读取到硬盘的 *S.M.A.R.T.[^3]* 信息。

使用 SSH 连接上 PVE 主机，执行命令。

编辑`/etc/default/grub`文件。

```bash
nano /etc/default/grub
```

```ini
# 在里面找到
# GRUB_CMDLINE_LINUX_DEFAULT="quiet"
# 如果是 intel cpu 请改为
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt"
# 如果是 amd cpu 请改为
GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on iommu=pt"
```

更新 grub。

```bash
update-grub
```

重启主机。

```bash
reboot
```

在 Web 控制台中向虚拟机添加 PCI 设备。

![image-20220618123347893](install-synology-dsm-in-proxmox-ve.assets/image-20220618123347893.png)

## 设置引导顺序

在「选项」->「引导顺序」中设置引导顺序。勾选从`sata0`启动，把其他启动项都去掉。

![image-20220618172735749](install-synology-dsm-in-proxmox-ve.assets/image-20220618172735749.png)

## 启动和安装系统

在 Web 控制台中启动虚拟机。

通过串口控制台查看 IP。在启动虚拟机后需要快速打开串口控制台，要不然可能会错过一些日志信息。

![image-20220618194830834](install-synology-dsm-in-proxmox-ve.assets/image-20220618194830834.png)

![image-20220618194814526](install-synology-dsm-in-proxmox-ve.assets/image-20220618194814526.png)

或是通过路由器的管理页面查看 DSM 的 IP 地址；

![image-20220618172958405](install-synology-dsm-in-proxmox-ve.assets/image-20220618172958405.png)

再或者使用 *Synology Assistant[^4]* 寻找 DSM 的 IP 地址；

![image-20220618183659193](install-synology-dsm-in-proxmox-ve.assets/image-20220618183659193.png)

访问该 IP 地址即可看见 DSM 安装向导。点击「设置」开始安装向导；

![image-20220618180330535](install-synology-dsm-in-proxmox-ve.assets/image-20220618180330535.png)

点击「手动安装」，不要点「立即安装」，不然会安装最新的系统导致无法启动；

![image-20220618180434695](install-synology-dsm-in-proxmox-ve.assets/image-20220618180434695.png)

点击「浏览」，上传自己下载的系统文件`DSM_DS918+_23824.pat`，之后再点击「立即安装」；

![image-20220618180552646](install-synology-dsm-in-proxmox-ve.assets/image-20220618180552646.png)

![image-20220618180651460](install-synology-dsm-in-proxmox-ve.assets/image-20220618180651460.png)

系统安装完毕。

![image-20220618195821760](install-synology-dsm-in-proxmox-ve.assets/image-20220618195821760.png)

可以去串口控制台看日志，日志打印完毕就代表启动成功了；并且在串口控制台内还可以看到 IP 地址。如果网页没有自动刷新的话你可以手动刷新一下网页。

![image-20220618200154164](install-synology-dsm-in-proxmox-ve.assets/image-20220618200154164.png)

## DSM 设置

设置用户名和密码。

![image-20220618200229776](install-synology-dsm-in-proxmox-ve.assets/image-20220618200229776.png)

关闭自动更新。

![image-20220618200321484](install-synology-dsm-in-proxmox-ve.assets/image-20220618200321484.png)

不要使用 QuickConnect，正版群晖可以使用，黑群晖就不要用了。

![image-20220618200348349](install-synology-dsm-in-proxmox-ve.assets/image-20220618200348349.png)

搞定。

![image-20220618200436543](install-synology-dsm-in-proxmox-ve.assets/image-20220618200436543.png)

## 创建存储空间

在「存储空间管理员」套件中创建存储空间。注意在创建存储空间的时候不要勾选使用引导盘。

![image-20220618200732971](install-synology-dsm-in-proxmox-ve.assets/image-20220618200732971.png)

系统工作正常。

![image-20220618201922750](install-synology-dsm-in-proxmox-ve.assets/image-20220618201922750.png)

![image-20220618201713478](install-synology-dsm-in-proxmox-ve.assets/image-20220618201713478.png)

## 参考资料

以下是在编写本文时使用到的、但未在文中明确引用的参考资料，希望对你有帮助。

- [笔记本上 PVE 虚拟机安装黑群晖并设置硬盘直通_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Ut411A7wQ)
- [PVE7.安装黑群晖（记录）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1c5411D7tP)
- [Proxmox VE(PVE) 系统开启 IOMMU 功能实现硬件直通 - NAS 阁](https://www.nasge.com/archives/137.html)
- [佛西博客 - Proxmox VE pve 硬盘直通](https://foxi.buduanwang.vip/virtualization/1754.html/)

[^1]: [DSM 6.2 Loader - Loaders - XPEnology Community](https://xpenology.com/forum/topic/12952-dsm-62-loader/)
[^2]: [Synology Archive Download Site - Index of /download/Os/DSM](https://archive.synology.com/download/Os/DSM)
[^3]: [S.M.A.R.T. - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/S.M.A.R.T.)
[^4]: [下载中心 - DS918+ | Synology 群晖科技](https://www.synology.cn/zh-cn/support/download/DS918+?version=7.0#utilities)
