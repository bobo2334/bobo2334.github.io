# MySQL

## 参考资料

- [【宋红康】MySQL 数据库（mysql 安装/基础/高级/优化）_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1iq4y1u7vj)

## 数据库的作用

1. 实现数据持久化
2. 使用完整的管理系统统一管理

## 名词解释

- DB（Database），数据库，它保存了一系列有组织的数据
- DBMS（Database Management System），数据库管理系统，简称数据库软件，可以对数据库进行操作
- DBA（Database Administrator），数据库管理员
- SQL（Structure Query Language），结构化查询语言

## 关系型数据库

### 概念

- 关系型数据库的典型数据结构就是`数据表`，这些数据表的组成都是结构化的（Structured）。

- 将数据放到表中，表再放到库中。

### 关系

- 一对一
- 一对多
- 多对多
- 自我引用

## 命令行

```bash
mysql -h localhost -P 3306 -u root -proot
```

- `-P`指定端口
- `-p`指定密码，密码可以不写在命令中，只指定参数而不写密码的话会在交互式命令行中输入密码，不会在密码历史或屏幕中暴露密码

## 默认数据库

// TODO Mysql 默认带的几个数据库的作用

## SQL

### SQL 概念

结构化查询语言（Structured Query Language），是一种规范，用来操作关系型数据库。但是每种数据库在实现上有略微不同，称为「方言」；

### 分类

1. DDL（Data Definition Language）数据定义语言：用于操作数据库对象，如数据库、表、字段等。关键字：`create`、`drop`、`alter`、`rename`、`truncate` ；
2. DML（Data Manipulation Language）数据操作语言：用于操作数据本身。关键字 `insert`、`delete`、`update`、`select` ；
3. DCL（Data Control Language）数据控制语言：用户操作数据库 的访问权限和安全级别，以及管理用户，关键字 `grant`、`revoke`、`commit`、`rollback`、`savepoint`。

### 规则

- SQL 可以写在一行或者多行。为了提高可读性，各子句分行写，必要时使用缩进
- 每条命令以`;`或 `\g`或`\G`结束
  - `\g`和`\G`只能在命令行中使用
  - `\g`和`;`的效果一样
  - `\G`会将结果表转置，行列转换

- 关键字不能被缩写也不能分行
- 关于标点符号
  - 必须保证所有的`()`、`单引号`、`双引号`是成对结束的
  - 必须使用**英文**状态下的**半角**输入方式
  - 字符串型和日期时间类型的数据可以使用单引号表示
  - 列的别名，尽量使用双引号，而且不建议省略`as`

### 规范

这是建议遵守的，不强制。

- MySQL 在 Windows 环境下是大小写不敏感的
- MySQL 在 Linux 环境下是大小写敏感的
  - 数据库名、表名、表的别名、变量名是严格区分大小写的
  - 关键字、函数名、列名（或字段名）、列的别名（字段的别名）是忽略大小写的。
- 推荐采用统一的书写规范
  - 数据库名、表名、表别名、字段名、字段别名等都小写
  - SQL 关键字、函数名、绑定变量等都大写

### 注释

```sql
-- 单行注释
# 单行注释
/*
  多行注释
 */
```

## SELECT 语句

```sql
select [distinct | ] 字段列表
from 表名列表
where 条件列表
group by 分组条件
having 分组之后的条件
order by 排序
limit 分页条件
escape '转义字符'
```

### 去除重复行

使用关键字`DISTINCT`去除重复行。

1. `DISTINCT`需要放到所有列名的前面
2. `DISTINCT`是对后面所有列名的组合进行去重

### 字段名和关键字冲突

在表名或字段名和关键字冲突时可能会造成歧义，这是使用着重号包裹字段名来避免歧义。

```sql
SELECT * FROM `ORDER`;
```

### 转义字符

默认的转义字符是`\`。

比如在使用`like`进行模糊查询的时候使用`_`作为单个字符的通配符，如果此时就是需要查询含有下划线的行，则需对其进行转义，如`_\__`，中间的下划线就被转义了。

使用`ESCAPE`来自定义转义字符，如`ESCAPE '&'`，意为使用`$`作为转义字符，此查询语句中的转义字符不再是`\`了。

## 运算符

### 算数运算符

![image-20220403174226537](mysql.assets/image-20220403174226537.png)

### 比较运算符

![image-20220403174250419](mysql.assets/image-20220403174250419.png)

![image-20220403174256832](mysql.assets/image-20220403174256832.png)

- 如果等号两边的值、字符串或表达式都为字符串，则 MySQL 会按照字符串进行比较，其比较的是每个字符串中字符的 ANSI 编码是否相等。
- 如果等号两边的值一个是整数，另一个是字符串，则 MySQL 会将字符串转化为数字进行比较。
- 如果等号两边的值、字符串或表达式中有一个为 NULL，则比较结果为 NULL。

![image-20220403174433605](mysql.assets/image-20220403174433605.png)

![image-20220403174441243](mysql.assets/image-20220403174441243.png)

LIKE 运算符通常使用如下通配符。

- `%`匹配 0 个或多个字符。
- `_`只能匹配一个字符。

`REGEXP`和`RLIKE`均表示用正则表达式进行匹配。

### 逻辑运算符

![image-20220403174952781](mysql.assets/image-20220403174952781.png)

### 位运算符

![image-20220403175006134](mysql.assets/image-20220403175006134.png)

### 运算符的优先级

下图中数字编号越大，优先级越高。

![image-20220403175025333](mysql.assets/image-20220403175025333.png)

![image-20220403175029538](mysql.assets/image-20220403175029538.png)

### `NULL`参与运算

所有运算符或列值遇到`null`值，运算的结果都为`null`。

使用下面的方法安全处理`null`值。

1. `<=>`
2. `is null`
3. `is not null`
4. `isnull()`
5. `ifnull()`

## 排序

使用`ORDER BY`子句排序。

```sql
select * from 表 order by 字段 1 [, 字段 2, ...] [asc | desc];
```

- `ASC`（Ascend），升序，默认排序方式
- `DESC`（Descend），降序

可以多字段同时排序，在前面字段相同的情况下会比较后面的字段。

## 分页

使用`LIMIT`进行分页。

```sql
select * from 表 limit [offset,] rows;
```

- `offset`表示从第几行之后开始，最小值为`0`，可省略，默认为`0`
- `rows`表示查询出多少行

## 多表查询

### 内连接

```sql
select * from a [inner] join b on a.id = b.id;
```

只会显示两表的交集，结果集的行必须出现在两个表中。

### 外连接

```sql
select * from a left | right [outer] join b on a.id = b.id;
```

- 左外连接：结果集中的行不仅包含符合连接条件的行，同时还包括左表中的不符合连接条件的行，这些行中来自副表的字段内容都是`NULL`。
- 右外连接：同理。

### 全链接

MySQL 没有全连接，可以使用`UNION`来实现。

- `UNION`操作符返回两个查询的结果集的并集，去除重复记录。
- `UNION ALL`不除重复记录。

### SQL99 语法新特性

#### 自然连接

使用`NATURAL JOIN`来简化多表查询操作，此时会自动将两表中所有同名字段进行等值连接。

#### `USING`连接

使用`USING`来简化`ON`子句，如果连接条件中的字段名称相同的话可以使用。

```sql
select * from a join b on a.id = b.id;
select * from a join b using (id);
```

## 单行函数

### 数值函数

| 函数                | 用法                                                         |
| ------------------- | ------------------------------------------------------------ |
| ABS(x)              | 返回 x 的绝对值                                                |
| SIGN(X)             | 返回 X 的符号。正数返回 1，负数返回-1，0 返回 0                   |
| PI()                | 返回圆周率的值                                               |
| CEIL(x)，CEILING(x) | 返回大于或等于某个值的最小整数                               |
| FLOOR(x)            | 返回小于或等于某个值的最大整数                               |
| LEAST(e1,e2,e3…)    | 返回列表中的最小值                                           |
| GREATEST(e1,e2,e3…) | 返回列表中的最大值                                           |
| MOD(x,y)            | 返回 X 除以 Y 后的余数                                           |
| RAND()              | 返回 0~1 的随机值                                              |
| RAND(x)             | 返回 0~1 的随机值，其中 x 的值用作种子值，相同的 X 值会产生相同的随机数 |
| ROUND(x)            | 返回一个对 x 的值进行四舍五入后，最接近于 X 的整数               |
| ROUND(x,y)          | 返回一个对 x 的值进行四舍五入后最接近 X 的值，并保留到小数点后面 Y 位 |
| TRUNCATE(x,y)       | 返回数字 x 截断为 y 位小数的结果                                 |
| SQRT(x)             | 返回 x 的平方根。当 X 的值为负数时，返回 NULL                     |

#### 角度与弧度互换函数

| 函数       | 用法                                  |
| ---------- | ------------------------------------- |
| RADIANS(x) | 将角度转化为弧度，其中，参数 x 为角度值 |
| DEGREES(x) | 将弧度转化为角度，其中，参数 x 为弧度值 |

#### 三角函数

| 函数       | 用法                                                         |
| ---------- | ------------------------------------------------------------ |
| SIN(x)     | 返回 x 的正弦值，其中，参数 x 为弧度值                           |
| ASIN(x)    | 返回 x 的反正弦值，即获取正弦为 x 的值。如果 x 的值不在-1 到 1 之间，则返回 NULL |
| COS(x)     | 返回 x 的余弦值，其中，参数 x 为弧度值                           |
| ACOS(x)    | 返回 x 的反余弦值，即获取余弦为 x 的值。如果 x 的值不在-1 到 1 之间，则返回 NULL |
| TAN(x)     | 返回 x 的正切值，其中，参数 x 为弧度值                           |
| ATAN(x)    | 返回 x 的反正切值，即返回正切值为 x 的值                         |
| ATAN2(m,n) | 返回两个参数的反正切值                                       |
| COT(x)     | 返回 x 的余切值，其中，X 为弧度值                               |

#### 指数与对数

| 函数                 | 用法                                                 |
| -------------------- | ---------------------------------------------------- |
| POW(x,y)，POWER(X,Y) | 返回 x 的 y 次方                                         |
| EXP(X)               | 返回 e 的 X 次方，其中 e 是一个常数，2.718281828459045     |
| LN(X)，LOG(X)        | 返回以 e 为底的 X 的对数，当 X <= 0 时，返回的结果为 NULL  |
| LOG10(X)             | 返回以 10 为底的 X 的对数，当 X <= 0 时，返回的结果为 NULL |
| LOG2(X)              | 返回以 2 为底的 X 的对数，当 X <= 0 时，返回 NULL          |

#### 进制间的转换

| 函数          | 用法                     |
| ------------- | ------------------------ |
| BIN(x)        | 返回 x 的二进制编码        |
| HEX(x)        | 返回 x 的十六进制编码      |
| OCT(x)        | 返回 x 的八进制编码        |
| CONV(x,f1,f2) | 返回 f1 进制数变成 f2 进制数 |

### 字符串函数

MySQL 中，字符串的位置是从 1 开始的。

| 函数                              | 用法                                                         |
| --------------------------------- | ------------------------------------------------------------ |
| ASCII(S)                          | 返回字符串 S 中的第一个字符的 ASCII 码值                         |
| CHAR_LENGTH(s)                    | 返回字符串 s 的字符数。作用与 CHARACTER_LENGTH(s) 相同           |
| LENGTH(s)                         | 返回字符串 s 的字节数，和字符集有关                            |
| CONCAT(s1,s2,......,sn)           | 连接 s1,s2,......,sn 为一个字符串                              |
| CONCAT_WS(x, s1,s2,......,sn)     | 同 CONCAT(s1,s2,...) 函数，但是每个字符串之间要加上 x           |
| INSERT(str, idx, len, replacestr) | 将字符串 str 从第 idx 位置开始，len 个字符长的子串替换为字符串 replacestr |
| REPLACE(str, a, b)                | 用字符串 b 替换字符串 str 中所有出现的字符串 a                    |
| UPPER(s) 或 UCASE(s)              | 将字符串 s 的所有字母转成大写字母                              |
| LOWER(s)  或 LCASE(s)              | 将字符串 s 的所有字母转成小写字母                              |
| LEFT(str,n)                       | 返回字符串 str 最左边的 n 个字符                                 |
| RIGHT(str,n)                      | 返回字符串 str 最右边的 n 个字符                                 |
| LPAD(str, len, pad)               | 用字符串 pad 对 str 最左边进行填充，直到 str 的长度为 len 个字符     |
| RPAD(str ,len, pad)               | 用字符串 pad 对 str 最右边进行填充，直到 str 的长度为 len 个字符     |
| LTRIM(s)                          | 去掉字符串 s 左侧的空格                                        |
| RTRIM(s)                          | 去掉字符串 s 右侧的空格                                        |
| TRIM(s)                           | 去掉字符串 s 开始与结尾的空格                                  |
| TRIM(s1 FROM s)                   | 去掉字符串 s 开始与结尾的 s1                                    |
| TRIM(LEADING s1 FROM s)           | 去掉字符串 s 开始处的 s1                                        |
| TRIM(TRAILING s1 FROM s)          | 去掉字符串 s 结尾处的 s1                                        |
| REPEAT(str, n)                    | 返回 str 重复 n 次的结果                                         |
| SPACE(n)                          | 返回 n 个空格                                                  |
| STRCMP(s1,s2)                     | 比较字符串 s1,s2 的 ASCII 码值的大小                             |
| SUBSTR(s,index,len)               | 返回从字符串 s 的 index 位置其 len 个字符，作用与 SUBSTRING(s,n,len)、MID(s,n,len) 相同 |
| LOCATE(substr,str)                | 返回字符串 substr 在字符串 str 中首次出现的位置，作用于 POSITION(substr IN str)、INSTR(str,substr) 相同。未找到，返回 0 |
| ELT(m,s1,s2,…,sn)                 | 返回指定位置的字符串，如果 m=1，则返回 s1，如果 m=2，则返回 s2，如果 m=n，则返回 sn |
| FIELD(s,s1,s2,…,sn)               | 返回字符串 s 在字符串列表中第一次出现的位置                    |
| FIND_IN_SET(s1,s2)                | 返回字符串 s1 在字符串 s2 中出现的位置。其中，字符串 s2 是一个以逗号分隔的字符串 |
| REVERSE(s)                        | 返回 s 反转后的字符串                                          |
| NULLIF(value1,value2)             | 比较两个字符串，如果 value1 与 value2 相等，则返回 NULL，否则返回 value1 |

### 日期和时间函数

### 流程控制函数

| 函数                                                         | 用法                                            |
| ------------------------------------------------------------ | ----------------------------------------------- |
| IF(value,value1,value2)                                      | 如果 value 的值为 TRUE，返回 value1，否则返回 value2 |
| IFNULL(value1, value2)                                       | 如果 value1 不为 NULL，返回 value1，否则返回 value2  |
| CASE WHEN 条件 1 THEN 结果 1 WHEN 条件 2 THEN 结果 2 .... [ELSE resultn] END | 相当于 Java 的 if...else if...else...              |
| CASE  expr WHEN 常量值 1 THEN 值 1 WHEN 常量值 1 THEN 值 1 .... [ELSE 值 n] END | 相当于 Java 的 switch...case...                    |

### 加密与解密函数

| 函数                        | 用法                                                         |
| --------------------------- | ------------------------------------------------------------ |
| PASSWORD(str)               | 返回字符串 str 的加密版本，41 位长的字符串。加密结果`不可逆`，常用于用户的密码加密 |
| MD5(str)                    | 返回字符串 str 的 md5 加密后的值，也是一种加密方式。若参数为 NULL，则会返回 NULL |
| SHA(str)                    | 从原明文密码 str 计算并返回加密后的密码字符串，当参数为 NULL 时，返回 NULL。`SHA 加密算法比 MD5 更加安全`。 |
| ENCODE(value,password_seed) | 返回使用 password_seed 作为加密密码加密 value                   |
| DECODE(value,password_seed) | 返回使用 password_seed 作为加密密码解密 value                   |

### MySQL 信息函数

| 函数                                                  | 用法                                                     |
| ----------------------------------------------------- | -------------------------------------------------------- |
| VERSION()                                             | 返回当前 MySQL 的版本号                                    |
| CONNECTION_ID()                                       | 返回当前 MySQL 服务器的连接数                              |
| DATABASE()，SCHEMA()                                  | 返回 MySQL 命令行当前所在的数据库                          |
| USER()，CURRENT_USER()、SYSTEM_USER()，SESSION_USER() | 返回当前连接 MySQL 的用户名，返回结果格式为“主机名 @用户名” |
| CHARSET(value)                                        | 返回字符串 value 自变量的字符集                            |
| COLLATION(value)                                      | 返回字符串 value 的比较规则                                |

### 其他函数

| 函数                           | 用法                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| FORMAT(value,n)                | 返回对数字 value 进行格式化后的结果数据。n 表示`四舍五入`后保留到小数点后 n 位 |
| INET_ATON(ipvalue)             | 将以点分隔的 IP 地址转化为一个数字                             |
| INET_NTOA(value)               | 将数字形式的 IP 地址转化为以点分隔的 IP 地址                     |
| BENCHMARK(n,expr)              | 将表达式 expr 重复执行 n 次。用于测试 MySQL 处理 expr 表达式所耗费的时间 |
| CONVERT(value USING char_code) | 将 value 所使用的字符编码修改为 char_code                       |

## 聚合函数

聚合函数作用于一组数据，并对一组数据返回一个值。

### AVG 和 SUM 函数

可以对**数值型数据**使用`AVG`和`SUM`函数。

### MIN 和 MAX 函数

可以对**任意数据类型**的数据使用`MIN`和`MAX`函数。

### COUNT 函数

- `COUNT(*)`返回表中记录总数，适用于**任意数据类型**。
- `COUNT(expr)`返回**expr 不为空**的记录总数。

- **问题：用`count(*)`，`count(1)`，`count(列名)`谁好呢？**

  其实，对于 MyISAM 引擎的表是没有区别的。这种引擎内部有一计数器在维护着行数。

  Innodb 引擎的表用`count(*)`,`count(1)`直接读行数，复杂度是 O(n)，因为 innodb 真的要去数一遍。但好于具体的`count(列名)`。

- **问题：能不能使用`count(列名)`替换`count(*)`?**

  不要使用 count(列名) 来替代 `count(*)`，`count(*)`是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 NULL 和非 NULL 无关。

  说明：`count(*)`会统计值为 NULL 的行，而`count(列名)`不会统计此列为 NULL 值的行。

### GROUP BY

可以使用`GROUP BY`子句将表中的数据分成若干组。

在`SELECT`列表中的字段都必须出现在`GROUP BY`子句中，除了在聚合函数中的字段。如果不遵守的话在 MySQL 中不会提示错误，但是这个字段在行中是无意义的。

```sql
SELECT   department_id, AVG(salary)
FROM     employees
GROUP BY department_id ;
```

包含在`GROUP BY`子句中的列不必包含在`SELECT`列表中。

```sql
SELECT   AVG(salary)
FROM     employees
GROUP BY department_id ;
```

`GROUP BY`后可以有多个列，此时按这些列的各个组合进行分组。

使用`WITH ROLLUP`关键字之后，在所有查询出的分组记录之后增加一条记录，就是将所有组的数据代入到聚合函数中。没有使用聚合函数的列显示为 NULL。

### HAVING

1. `HAVING`不能单独使用，必须要跟`GROUP BY`一起使用。
2. 用来过滤分组结果，满足条件的分组行才会被查询出来。
3. 在之后可以使用聚合函数。

`WHERE`和`HAVING`的对比。

1. `WHERE`跟在`FROM`后面，`HAVING`跟在`GROUP BY`后面；
2. `WHERE`后面不能使用聚合函数，`HAVING`可以；
3. `WHERE`在分组前筛选，`HAVING`在分组后筛选；
4. 在多表查询中`WHERE`的效率更高，所以不涉及到聚合函数的条件写在`WHERE`中更好。

## SELECT 的执行过程

在 SELECT 语句执行这些步骤的时候，每个步骤都会产生一个`虚拟表`，然后将这个虚拟表传入下一个步骤中作为输入。需要注意的是，这些步骤隐含在 SQL 的执行过程中，对于我们来说是不可见的。

```sql
SELECT DISTINCT player_id, player_name, count(*) as num # 顺序 5
FROM player JOIN team ON player.team_id = team.team_id # 顺序 1
WHERE height > 1.80 # 顺序 2
GROUP BY player.team_id # 顺序 3
HAVING num > 2 # 顺序 4
ORDER BY num DESC # 顺序 6
LIMIT 2 # 顺序 7
```

