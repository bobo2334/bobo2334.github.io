# Mybaitis

## 参考资料

- [【尚硅谷】SSM 框架全套教程，MyBatis+Spring+SpringMVC+SSM 整合一套通关\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1Ya411S7aT)
- [mybatis – MyBatis 3 | 简介](https://mybatis.org/mybatis-3/zh/index.html)
- [mybatis 3.5.5 javadoc (org.mybatis)](https://javadoc.io/doc/org.mybatis/mybatis/latest/index.html)

## 简介

Mybaitis 是一个持久层框架，用于简化 JDBC 操作。

## 开发步骤

1. 导入 Mybatis 依赖；

```xml
<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.20</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.5</version>
</dependency>
```

2. 创建数据库和表；
3. 编写实体类；
4. 编写 XML 映射文件 UserMapper.xml；

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="userMapper">

    <select id="findAll" resultType="me.iuok.domain.User">
        select * from user
    </select>

</mapper>
```

5. 编写 XML 配置文件 SqlMapConfig.xml；

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql:///blog"/>
                <property name="username" value="root"/>
                <property name="password" value="root"/>
            </dataSource>
        </environment>
    </environments>

    <mappers>
        <mapper resource="me/iuok/mapper/UserMapper.xml"/>
    </mappers>
</configuration>
```

6. 测试。

```java
@Test
public void quickStart() throws IOException {
    InputStream resource = Resources.getResourceAsStream("mybatis-config.xml");
    SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(resource);
    SqlSession sqlSession = sqlSessionFactory.openSession();
    List<User> list = sqlSession.selectList("userMapper.findAll");

    for (User user : list) {
        log.info(user.toString());
    }

    sqlSession.close();
}
```

## 传统 CRUD 案例

每个业务中的使用的 SqlSession 都应该是新获取的，因为每个 SqlSession 里面都有一个独立的事务。

### select

```xml
<select id="findAll" resultType="me.iuok.domain.User">
    select * from user
</select>
```

```java
@Test
public void selectList() {
    List<User> list = sqlSession.selectList("userMapper.findAll");

    Assert.assertNotEquals(0, list.size());

    for (User user : list) {
        log.info(user.toString());
    }
}
```

### insert

```xml
<insert id="save" parameterType="me.iuok.domain.User">
    insert into user (username, password) values (#{username}, #{password})
</insert>
```

```java
@Test
public void insert() {
    User user = new User();
    user.setUsername("Mybaitis insert test");
    user.setPassword("no password");
    int result = sqlSession.insert("userMapper.save", user);
    sqlSession.commit();
    log.info(String.valueOf(result));
    Assert.assertEquals(1, result);
}
```

1. 在映射文件中要指定参数类型 `parameterType`；
2. SQL 语句中使用 `#{属性名}` 来引用实体中的属性值；
3. sqlSession.insert 的返回值是受影响的行数；
4. 涉及数据改动，要手动提交事务 `sqlSession.commit()`。

### update

```xml
<update id="update" parameterType="me.iuok.domain.User">
    update user set username = #{username}, password = #{password} where id = #{id}
</update>
```

```java
@Test
public void update() {
    User user = new User(6, "mybatis update", "new password");
    int rows = sqlSession.update("userMapper.update", user);
    sqlSession.commit();
    log.info(String.valueOf(rows));
    Assert.assertEquals(1, rows);
}
```

### delete

```xml
<delete id="deleteById" parameterType="java.lang.Integer">
    delete from user where id = #{id}
</delete>
```

```java
@Test
public void delete() {
    int rows = sqlSession.delete("userMapper.deleteById", 7);
    sqlSession.commit();
    log.info(String.valueOf(rows));
}
```

1. `parameterType` 将会传入这条语句的参数的类全限定名或别名。这个属性是可选的，因为 MyBatis 可以通过类型处理器（TypeHandler）推断出具体传入语句的参数，默认值为未设置（unset）；
2. 只有一个参数并且是基本数据类型时，占位符里面的属性名可以随便写。

## 代理 DAO 案例

1. XML 映射文件中的 `namespace` 应该和接口的全限定类名相同；
2. 接口中的方法名应该和映射文件中每一个 SQL 语句的 `id` 相同；
3. 接口中方法的参数应该与 `parameterType` 相同；
4. 接口中方法的返回值应该与 `resultType` 相同。

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="me.iuok.mapper.UserMapper">

    <select id="findAll" resultType="user">
        select * from user
    </select>

    <select id="findById" parameterType="int" resultType="user">
        select * from user where id = #{id}
    </select>

    <insert id="save" parameterType="user">
        insert into user (username, password) values (#{username}, #{password})
    </insert>

    <update id="update" parameterType="user">
        update user set username = #{username}, password = #{password} where id = #{id}
    </update>

    <delete id="deleteById" parameterType="int">
        delete from user where id = #{id}
    </delete>

</mapper>
```

```java
public interface UserMapper {

    List<User> findAll();

    User findById(int id);

    int save(User user);

    int update(User user);

    int deleteById(int id);

}
```

```java
public class UserMapperTest {

    private static InputStream resource;

    private static SqlSessionFactory sqlSessionFactory;

    private static SqlSession sqlSession;

    private static UserMapper userMapper;

    @BeforeClass
    public static void beforeClass() throws Exception {
        resource = Resources.getResourceAsStream("mybatis-config.xml");
        sqlSessionFactory = new SqlSessionFactoryBuilder().build(resource);
    }

    @AfterClass
    public static void afterClass() throws Exception {
        resource.close();
    }

    @Before
    public void setUp() throws Exception {
        sqlSession = sqlSessionFactory.openSession();
        userMapper = sqlSession.getMapper(UserMapper.class);
    }

    @After
    public void tearDown() throws Exception {
        sqlSession.close();
    }

    @Test
    public void findAll() {
        List<User> users = userMapper.findAll();
        Assert.assertNotEquals(0, users.size());

        for (User user : users) {
            log.info(user.toString());
        }
    }

    @Test
    public void findById() {
        User user = userMapper.findById(2);
        Assert.assertNotNull(user);
        log.info(user.toString());
    }
}
```

## Java API

### Resources

```java
URL getResourceURL(String resource)
URL getResourceURL(ClassLoader loader, String resource)
InputStream getResourceAsStream(String resource)
InputStream getResourceAsStream(ClassLoader loader, String resource)
Properties getResourceAsProperties(String resource)
Properties getResourceAsProperties(ClassLoader loader, String resource)
Reader getResourceAsReader(String resource)
Reader getResourceAsReader(ClassLoader loader, String resource)
File getResourceAsFile(String resource)
File getResourceAsFile(ClassLoader loader, String resource)
InputStream getUrlAsStream(String urlString)
Reader getUrlAsReader(String urlString)
Properties getUrlAsProperties(String urlString)
Class classForName(String className)
```

### SqlSession

```java
<T> T selectOne(String statement, Object parameter)
<E> List<E> selectList(String statement, Object parameter)
<T> Cursor<T> selectCursor(String statement, Object parameter)
<K,V> Map<K,V> selectMap(String statement, Object parameter, String mapKey)
int insert(String statement, Object parameter)
int update(String statement, Object parameter)
int delete(String statement, Object parameter)
```

## 核心配置文件.xml

- configuration
  - properties
  - settings
  - typeAliases
  - typeHandlers
  - objectFactory
  - plugins
  - environments
    - environment
      - transactionManager
      - dataSource
  - databaseProvider
  - mappers

### properties

引入外部`properties`文件中的属性，或者自己在此区域中定义属性，可以在后文中使用`${name}`引用这些属性。

```xml
<properties resource="jdbc.properties">
    <property name="a" value="b"/>
</properties>
```

### typeAliases

定义类型别名，为某个类型设置简短的名字，不需要写全类名了，`alias`可以省略，默认别名就是类名，不区分大小写。

也可以设置扫描某个包路径，其下的所有类都设置别名，别名就是类名，不区分大小写。

```xml
<typeAliases>
    <typeAlias type="o.e.entity.TUser" alias="User"/>
    <package name="o.e.entity"/>
</typeAliases>
```

Mybatis 默认定义了一些常用的类型别名，如`_int`对应`int`，`int`对应`Integer`。完整的默认别名列表可以参考 *[mybatis – MyBatis 3 | Configuration](https://mybatis.org/mybatis-3/configuration.html#typealiases)*。

### typeHandlers

1. 新类，继承 `BaseTypeHandler<>`；
2. 实现方法；
3. 在配置文件中注册。

### plugins

#### PageHelper

1. 导入依赖；

```xml
<!-- https://mvnrepository.com/artifact/com.github.pagehelper/pagehelper -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.1.10</version>
</dependency>
```

2. 在配置文件中配置；

```xml
<plugins>
    <plugin interceptor="com.github.pagehelper.PageInterceptor"/>
</plugins>
```

3. 在你需要进行分页的 MyBatis 查询方法前调用 `PageHelper.startPage` 静态方法即可，紧跟在这个方法后的第一个 MyBatis 查询方法会被进行分页。

```java
@Test
public void pageHelper() {
    PageHelper.startPage(1, 2);

    List<User> users = userMapper.findAll();
    Assert.assertNotEquals(0, users.size());

    for (User user : users) {
        log.info(user.toString());
    }
}
```

4. 获取分页相关参数。

```java
PageInfo<User> pageInfo = new PageInfo<>(users);
```

### environments

可以配置多个环境，初始化时可以选择某个环境进行初始化。

- `transactionManager.type`，设置事务管理器
    - `JDBC`，原生事务管理方式，自己手动提交
    - `MANAGEd`，被管理的，例如 Spring
- `dataSource.type`，设置数据源
    - `POOLED`，使用数据库连接池
    - `UNPOOLED`，不适用数据库连接池
    - `JNDI`，使用上下文的数据源

```xml
<environments default="development">
    <environment id="development">
        <transactionManager type="JDBC"/>
        <dataSource type="POOLED">
            <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
            <property name="url" value="jdbc:mysql:///ssm"/>
            <property name="username" value="root"/>
            <property name="password" value="root"/>
        </dataSource>
    </environment>
</environments>
```

```java
Reader config = Resources.getResourceAsReader("mybatis-config.xml");
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
sqlSessionFactory = builder.build(config, "development");
```

### mappers

引入 Mybatsi 映射文件。

1. 使用相对于类路径的资源引用

```xml
<mapper resource="org/mybatis/builder/AuthorMapper.xml"/>
```

2. 使用完全限定资源定位符（URL）

```xml
<mapper url="file:///var/mappers/AuthorMapper.xml"/>
```

3. 将包内的映射器接口实现全部注册为映射器；要求 XML 文件和接口都在同一个包下，并且文件名也相同。

```xml
<package name="org.mybatis.builder"/>
```

## 映射文件.xml

### 参数

原始类型或简单数据类型（比如 `Integer` 和 `String`）因为没有其它属性，会用它们的值来作为参数。这个参数可以随意命名。

默认情况下，使用 `#{}` 参数语法时，MyBatis 会创建 `PreparedStatement` 参数占位符，并通过占位符安全地设置参数（就像使用 ? 一样）。

在有直接替换字符串需求的情况下，可以使用`${}`，该值不会被预编译。<del>使用该方法获取原始类型或简单数据类型参数时需要使用`value`或`_parameter`作为参数名，不能随意命名。不然会当做通用对象处理，通过对应的 getter 方法获取属性值。</del>Mybatis 3.5 版本之后使用`${}`获取字面量变量的时候可以随意命名。

1. 当传入参数为单个原始类型或简单数据类型时，`#{}`可以随意命名；
2. 当传入单个 JavaBean 时，`#{}`和`${}`都可以通过属性名获取属性，使用的是 getter 方法；
3. 当传入多个参数时，`#{}`可以使用`arg0`、`arg1`或`param1`、`param2`这样的命名；`${}`只能使用`param1`、`param2`这样的命名；
4. 可以手动传入`Map<String, Object>`，然后直接通过键名来获取参数值；
5. 可以在参数上用`@Param`注解，手动指定该参数的名字，然后通过此名字获取对应值；
6. 当传入的参数类型为 List 时，则它对应的键值就叫`list`，Array 对应`array`。

### 获取自动生成的主键

设置下面两个属性来获取自动生成的主键，在插入完成之后主键值会自动设置到实体类的对应属性上。

- `useGeneratedKeys`
- `keyProperty`

```xml
<insert id="insert" useGeneratedKeys="true" keyProperty="id">
    insert
    ignore into t_user (username, passcode, age, gender, email)
    values (
    #{username},
    #{passcode},
    #{age},
    #{gender},
    #{email}
    );
</insert>
```

### parameterType

可以不用写，Mybatis 会自动进行类型推断。

### resultType

期望从这条语句中返回结果的类全限定名或别名。如果返回的是集合，那应该设置为集合包含的类型，而不是集合本身的类型。

### resultMap

处理实体类属性和数据库字段的映射关系。

### sql

可重用 SQL 语句段，定义后用 `include` 标签引入。

## 接口编写

### 方法返回值

1. 字面量类型
2. Java Bean
3. `List`、`Map`

当查询多条结果放入 Map 时，可以使用 `List<Map<String, Object>>` 声明返回值类型；或者使用`Map<String, Object>`并配合`@MapKey("id")`注解。前者是 List 中放 Map，后者是 Map 中放 Map。

### 模糊查询

1. 使用`LIKE '%${param1}%'`，有 SQL 注入风险；
2. 使用`LIKE CONCAT('%', '${param1}', '%')`，索引失效；
3. 使用`LIKE #{param1}`，在传递参数的时候自己手动拼接通配符。

## 动态 SQL

### if

```xml
<select id="findByCondition" resultType="user">
    select * from user
    <where>
        <if test="id!=null">
            and id = #{id}
        </if>
        <if test="username!=null">
            and username = #{username}
        </if>
        <if test="password!=null">
            and password = #{password}
        </if>
    </where>
</select>
```

```java
@Test
public void findByCondition() {
    User condition = new User();
    condition.setUsername("Roddy");
    condition.setPassword("Whoever");

    List<User> users = userMapper.findByCondition(condition);
    Assert.assertNotEquals(0, users.size());

    for (User user : users) {
        log.info(user.toString());
    }
}
```

1. 如果属性值为 `null`，if 分支不生效；
2. 如果传入的 User 为 `null`，所有分支都不生效，就会查询所有。

### where

根据条件判断是否加`where`，并且去掉多余的`and`或者`or`。

### set

```xml
<update id="updateAuthorIfNecessary">
  update Author
    <set>
      <if test="username != null">username=#{username},</if>
      <if test="password != null">password=#{password},</if>
      <if test="email != null">email=#{email},</if>
      <if test="bio != null">bio=#{bio}</if>
    </set>
  where id=#{id}
</update>
```

`set`元素会动态地在行首插入 SET 关键字，并会删掉额外的逗号（这些逗号是在使用条件语句给列赋值时引入的）

### trim

```xml
<trim prefix="WHERE" prefixOverrides="AND |OR ">
  ...
</trim>
<trim prefix="SET" suffixOverrides=",">
  ...
</trim>
```

`prefixOverrides`属性会忽略通过管道符分隔的文本序列（注意此例中的空格是必要的）。上述例子会移除所有`prefixOverrides`属性中指定的内容，并且插入 *prefix* 属性中指定的内容。

### choose

```xml
<select id="findActiveBlogLike"
     resultType="Blog">
  SELECT * FROM BLOG WHERE state = ‘ACTIVE’
  <choose>
    <when test="title != null">
      AND title like #{title}
    </when>
    <when test="author != null and author.name != null">
      AND author_name like #{author.name}
    </when>
    <otherwise>
      AND featured = 1
    </otherwise>
  </choose>
</select>
```

### foreach

```xml
<select id="findByIds" parameterType="list" resultType="user">
    select * from user
    <where>
        <foreach collection="list" item="id" open="id in (" close=")" separator=", ">
            #{id}
        </foreach>
    </where>
</select>
```

```java
@Test
public void findByIds() {
    List<User> users = userMapper.findByIds(Arrays.asList(2, 3));
    Assert.assertNotEquals(0, users.size());

    for (User user : users) {
        log.info(user.toString());
    }
}
```

## 多表操作

### 一对一 XML 查询

```java
public class Article {

    private Integer id;

    private String content;

    private Date createdAt;

    private Date updatedAt;

    private User user;

}
```

```xml
<sql id="selectArticle">
    select *, a.id as aid, u.id as uid
    from article as a
    join user as u on a.user_id = u.id
</sql>

<resultMap id="articleMap" type="article">
    <id column="aid" property="id"/>
    <result column="content" property="content"/>
    <result column="created_at" property="createdAt"/>
    <result column="updated_at" property="updatedAt"/>
    <!--        <result column="uid" property="user.id"/>-->
    <!--        <result column="username" property="user.username"/>-->
    <!--        <result column="password" property="user.password"/>-->
    <association property="user" javaType="user">
        <id column="uid" property="id"/>
        <result column="username" property="username"/>
        <result column="password" property="password"/>
    </association>
</resultMap>

<select id="findAll" resultMap="articleMap">
    <include refid="selectArticle"/>
</select>
```

### 一对多 XML 查询

```java
public class User {

    private Integer id;

    private String username;

    private String password;

    private List<Article> articles;

}
```

```xml
<sql id="selectUser">
    select *, u.id uid, a.id aid
    from user u
    left join article a on u.id = a.user_id
</sql>

<resultMap id="userMap" type="user">
    <id column="uid" property="id"/>
    <result column="username" property="username"/>
    <result column="password" property="password"/>
    <collection property="articles" ofType="article">
        <id column="aid" property="id"/>
        <result column="content" property="content"/>
        <result column="created_at" property="createdAt"/>
        <result column="updated_at" property="updatedAt"/>
    </collection>
</resultMap>

<select id="findAll" resultMap="userMap">
    <include refid="selectUser"/>
</select>
```

### 分步查询

```xml
<resultMap id="articleMap" type="article">
    <id column="aid" property="id"/>
    <result column="content" property="content"/>
    <result column="created_at" property="createdAt"/>
    <result column="updated_at" property="updatedAt"/>
    <association property="user" select="me.iuok.UserMapper.selectUserById" column="user_id"/>
</resultMap>
```

如果在全局配置文件中设置了`lazyLoadingEnabled`就可以开启关联对象的懒加载。

## 缓存

Mybatis 中有两级缓存。默认情况下只有一级缓存开启（SqlSession 级别的缓存）。

二级缓存需要手动配置开启，是基于 namespace 级别的缓存。

可以通过实现`Cache`接口来自定义缓存实现。

### 一级缓存失效

- 不同的 SqlSession 有不同缓存
- 同一个 SqlSession 查询条件不同
- 同一个 SqlSession 两次查询期间执行了增删改操作
- 手动清空缓存

### 二级缓存

- 二级缓存是全局作用域的，需要手动开启
- 要求 POJO 实现`Serializable`接口
- 二级缓存在 SqlSession 关闭或提交后才会生效
- 在需要使用二级缓存的地方使用`<cache/>`配置
- 映射语句文件中的所有 select 语句的结果将会被缓存
- 映射语句文件中的所有 insert、update 和 delete 语句会刷新缓存

## 注解开发

### 基本查询

```java
public interface UserMapper {

    @Select("select * from user")
    List<User> findAll();

    @Select("select * from user where id = #{id}")
    User findById(int id);

    @Insert("insert into user (username, password) values (#{username}, #{password})")
    int save(User user);

    @Update("update user set username = #{username}, password = #{password} where id = #{id}")
    int update(User user);

    @Delete("delete from user where id = #{id}")
    int deleteById(int id);

}
```

### 复杂查询

#### 一对一注解查询

```java
public interface ArticleMapper {

    @Select("select *, a.id as aid, u.id as uid from article as a join user as u on a.user_id = u.id")
    @Results({
            @Result(column = "aid", property = "id"),
            @Result(column = "content", property = "content"),
            @Result(column = "created_at", property = "createdAt"),
            @Result(column = "updated_at", property = "updatedAt"),
            @Result(column = "uid", property = "user.id"),
            @Result(column = "username", property = "user.username"),
            @Result(column = "password", property = "user.password")
    })
    List<Article> findAll();

    @Select("select * from article")
    @Results({
            @Result(column = "aid", property = "id"),
            @Result(column = "content", property = "content"),
            @Result(column = "created_at", property = "createdAt"),
            @Result(column = "updated_at", property = "updatedAt"),
            @Result(column = "user_id",
                    property = "user",
                    javaType = User.class,
                    one = @One(select = "me.iuok.mapper.UserMapper.findById"))
    })
    List<Article> findAll2();
}
```

#### 一对多注解查询

```java
public interface ArticleMapper {
    @Select("select * from article where user_id = #{id}")
    List<Article> findByUserId(int id);
}
```

```java
public interface UserMapper {
    @Select("select * from user")
    @Results({
            @Result(column = "id", property = "id", id = true),
            @Result(column = "username", property = "username"),
            @Result(column = "password", property = "password"),
            @Result(column = "id",
                    property = "articles",
                    javaType = List.class,
                    many = @Many(select = "me.iuok.mapper.ArticleMapper.findByUserId")
            )
    })
    List<User> findAll();
}
```

## MyBatis Generator
