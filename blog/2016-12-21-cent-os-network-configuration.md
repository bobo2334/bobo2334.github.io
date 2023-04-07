# CentOS 网络配置

## 前言

每次装 CentOS 后无法上网都要去搜教程，现在记下来以后就不用到处去搜了（滑稽）。

## 启用网卡

```bash
ifconfig eth0 up
```

顺便一提，关闭网卡的命令是`ifconfig eth0 down`。

## 编辑网络配置文件

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

按`i`进入编辑模式，按`ESC`进入命令模式。命令模式中输入`:w`保存，`:q`退出，`:wq`即为退出并保存。

打开应该是下面这个样子。

```ini
DEVICE=eth0
HWADDR=08:00:27:A6:5D:89
TYPE=Ethernet
UUID=db391271-1cdf-4df2-b040-12f259d5e361
ONBOOT=no
NM_CONTROLLED=yes
BOOTPROTO=dhcp
```

- `ONBOOT`为是否开机启动，值可为 `yse`/`no`；
- `BOOTPROTO`为获取 IP 地址的方式，值可为 `dhcp`/`static`/`bootp`；

`ONBOOT`修改为`yes`，`BOOTPROTO`按需修改，其他的不需要修改，下面是示例。

## 两种获取 IP 的方式

### 动态获取 IP（dhcp）

```ini
DEVICE=eth0
HWADDR=08:00:27:A6:5D:89
TYPE=Ethernet
UUID=db391271-1cdf-4df2-b040-12f259d5e361
ONBOOT=yes #开机启动
NM_CONTROLLED=yes
BOOTPROTO=dhcp #动态
```

### 静态获取 IP（static）

```ini
DEVICE=eth0
HWADDR=08:00:27:A6:5D:89
TYPE=Ethernet
UUID=db391271-1cdf-4df2-b040-12f259d5e361
ONBOOT=yes #开机启动
NM_CONTROLLED=yes
BOOTPROTO=static #静态
IPADDR=192.168.233.234 #IP 地址
NETMASK=255.255.255.0 #子网掩码
GATEWAY=192.168.233.1 #网关
```

static 方式还要手动设置 DNS。

```bash
vi /etc/resolv.conf
```

## 重启网络服务

```bash
service network restart
```
