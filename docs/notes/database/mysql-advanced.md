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
# 改名
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
# 1 只要有权限就可以改
ALTER USER USER() IDENTIFIED BY 'new_password';
alter user 'root'@'localhost' identified by 'abc123';

# 2，只能使用 root 用户改
SET PASSWORD='new_password';
SET PASSWORD FOR 'username'@'hostname'='new_password';
```

### 权限管理

```sql
show privileges;
```

```sql
GRANT 权限1,权限2,...权限n ON 数据库名称.表名称 TO 用户名@用户地址 [IDENTIFIED BY ‘密码口令’];

GRANT SELECT,INSERT,DELETE,UPDATE ON atguigudb.* TO li4@localhost ;
# 赋予所有权限，但是不包括 grant 权限
GRANT ALL PRIVILEGES ON *.* TO joe@'%' IDENTIFIED BY '123';
# WITH GRANT OPTION 这个选项表示该用户可以将自己拥有的权限授权给别人
GRANT ALL PRIVILEGES ON *.* TO joe@'%' IDENTIFIED BY '123' with grant option;
```

```sql
SHOW GRANTS;
SHOW GRANTS FOR CURRENT_USER;
SHOW GRANTS FOR CURRENT_USER();
SHOW GRANTS FOR 'user'@'主机地址' ;
```

```sql
REVOKE 权限1,权限2,...权限n ON 数据库名称.表名称 FROM 用户名@用户地址;

REVOKE ALL PRIVILEGES ON *.* FROM joe@'%';
REVOKE SELECT,INSERT,UPDATE,DELETE ON mysql.* FROM joe@localhost;
```

### 角色管理

```sql
CREATE ROLE 'role_name'[@'host_name'] [,'role_name'[@'host_name']]...


CREATE ROLE 'manager'@'localhost';
```

```sql
GRANT privileges ON table_name TO 'role_name'[@'host_name'];

GRANT SELECT ON demo.settlement TO 'manager';
```

```sql
SHOW GRANTS FOR 'manager';
```

```sql
REVOKE privileges ON tablename FROM 'rolename';
```

```sql
DROP ROLE 'school_read';
```

```sql
GRANT role [,role2,...] TO user [,user2,...];

GRANT 'school_read' TO 'kangshifu'@'localhost';
# 要手动激活角色
SET DEFAULT ROLE ALL TO 'kangshifu'@'localhost';
SELECT CURRENT_ROLE();
```

```sql
REVOKE role FROM user;
```
