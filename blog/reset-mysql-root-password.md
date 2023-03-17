---
date: 2017-01-14
tags:
    - mysql
---

# 重置 MySQL root 密码

## 前言

注意：如果你的数据库中存有重要数据，请在保证机器离线的情况下进行以下的操作，最稳妥的办法就是拔掉网线！

## 方法一：修改配置文件

### 开启安全模式

修改 MySQL 的配置文件。

```bash
vi /etc/my.cnf
```

在`[mysqld]`段里加上一行`skip-grant-tables`，保存并退出。

### 重新启动 MySQL

```bash
service mysqld restart
```

### 修改密码

```bash
mysql -uroot
use mysql;
update user set Password=password('newpass') where User='root';
flush privileges;
exit;
```

### 关闭安全模式

将第一步在 MySQL 配置文件里加入的`skip-grant-tables`删掉。

### 完成

重启 MySQL 之后就可以用新密码登录了。

```bash
service mysqld restart
```

## 方法二：通过命令行传递参数

### 停止 MySQL

```bash
service mysqld stop
```

### 以不检查权限的方式启动 MySQL

```bash
mysqld --skip-grant-tables &
```

### 修改密码

```bash
mysql -uroot
```

```sql
use mysql;
update user set Password=password('newpass') where User='root';
flush privileges;
exit;
```

### 完成

用正常的方式重启 MySQL 之后就可以用新密码登录了。

```bash
service mysqld restart
```
