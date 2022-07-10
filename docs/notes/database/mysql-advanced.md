# MySQL 进阶

## 参考资料

- [MySQL 数据库教程天花板，mysql 安装到 mysql 高级，强！硬！\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1iq4y1u7vj?p=96)

## 用户与权限管理

### 用户管理

#### 登录服务器

```bash
mysql –h hostname|hostIP –P port –u username –p DatabaseName –e "SQL语句"
```

#### 创建用户

```sql
CREATE USER 用户名 [IDENTIFIED BY '密码'][,用户名 [IDENTIFIED BY '密码']];

CREATE USER zhang3 IDENTIFIED BY '123123'; # 默认host是 %
CREATE USER 'kangshifu'@'localhost' IDENTIFIED BY '123456';
```

#### 修改用户

```sql
UPDATE mysql.user SET USER='li4' WHERE USER='wang5';
FLUSH PRIVILEGES;
```

#### 删除用户

```sql
DROP USER user[,user]...;

DROP USER li4 ; # 默认删除host为%的用户
DROP USER 'kangshifu'@'localhost';
```

#### 修改密码

```sql
# 1
ALTER USER USER() IDENTIFIED BY 'new_password';
alter user 'root'@'localhost' identified by 'abc123';

# 2
SET PASSWORD='new_password';
SET PASSWORD FOR 'username'@'hostname'='new_password';
```



### 权限管理

### 角色管理

