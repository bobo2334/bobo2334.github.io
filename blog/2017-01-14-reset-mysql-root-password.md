# 重置 MySQL root 密码

## 前言

注意：如果你的数据库中存有重要数据，请在保证机器离线的情况下进行以下的操作，最稳妥的办法就是拔掉网线！

## 方法一：修改配置文件

### 1.1 开启安全模式

修改 MySQL 的配置文件。

```bash
vi /etc/my.cnf
```

在`[mysqld]`段里加上一行`skip-grant-tables`，保存并退出。

### 1.2 重新启动 MySQL

```bash
service mysqld restart
```

### 1.3 修改密码

```bash
mysql -uroot
use mysql;
update user set Password=password('newpass') where User='root';
flush privileges;
exit;
```

### 1.4 关闭安全模式

将第一步在 MySQL 配置文件里加入的`skip-grant-tables`删掉。

### 1.5 完成

重启 MySQL 之后就可以用新密码登录了。

```bash
service mysqld restart
```

## 方法二：通过命令行传递参数

### 2.1 停止 MySQL

```bash
service mysqld stop
```

### 2.2 以不检查权限的方式启动 MySQL

```bash
mysqld --skip-grant-tables &
```

### 2.3 修改密码

```bash
mysql -uroot
```

```sql
use mysql;
update user set Password=password('newpass') where User='root';
flush privileges;
exit;
```

### 2.4 完成

用正常的方式重启 MySQL 之后就可以用新密码登录了。

```bash
service mysqld restart
```
