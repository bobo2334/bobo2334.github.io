# Mybatis-Plus

## 参考资料

- [MyBatis-Plus](https://baomidou.com/)
- [【尚硅谷】2022 版 MyBatisPlus 教程（一套玩转 mybatis-plus）\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV12R4y157Be)

## Mapper CRUD 接口

```java
public interface UserMapper extends BaseMapper<User> {}
```

## Service CRUD 接口

```java
public interface UserService extends IService<User> {}
```

```java
@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements UserService {}
```

## 常用注解

- `@TableName`
- `@TableId`
- `@TableField`

## 主键类型

Mybatis-Plus 约定每张表都有一个主键列名为`id`，不要使用联合主键。

如果主键列名不为`id`，使用注解`@TableId`来标注主键列对应属性。

`com.baomidou.mybatisplus.annotation.IdType`中定义了主键类型。

1. AUTO，不填充主键，依赖数据库自增；
2. NONE，跟随全局配置；
3. INPUT，为不支持自增的数据库生成主键，配合`@KeySequence`注解和`IKeyGenerator`的实现类使用；
4. ASSIGN_ID，使用雪花算法，默认没有配置机器 ID 和机房 ID，所以多个实例生成的 ID 部分前缀相同；
5. ASSIGN_UUID，使用 UUID，去掉短横线。

## 分页查询

配置插件。

```java
@Bean
public MybatisPlusInterceptor mybatisPlusInterceptor(){
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    //添加分页插件
    interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
    return interceptor;
}
```

## 通用枚举

有两种方式。从 3.5.2 版本开始，不需要配置`typeEnumsPackage`了。

### @EnumValue

```java
public enum GradeEnum {

    PRIMARY(1, "小学"),  SECONDORY(2, "中学"),  HIGH(3, "高中");

    GradeEnum(int code, String descp) {
        this.code = code;
        this.descp = descp;
    }

    //标记数据库存的值是 code
    @EnumValue
    private final int code;
}
```

### IEnum

```java
public enum AgeEnum implements IEnum<Integer> {
    ONE(1, "一岁"),
    TWO(2, "二岁"),
    THREE(3, "三岁");

    private int value;
    private String desc;

    @Override
    public Integer getValue() {
        return this.value;
    }
}
```

## 字段类型处理器

用于 JavaType 与 JdbcType 之间的转换。

```java
// 必须开启映射注解
@TableName(autoResultMap = true)
public class User {
    private Long id;

    // ...

    @TableField(typeHandler = JacksonTypeHandler.class)
    private OtherInfo otherInfo;
}
```

## 自动填充

1. 标记填充字段；

    ```java
    public class User {
        @TableField(fill = FieldFill.INSERT)
        private String fillField;
    }
    ```

2. 实现`MetaObjectHandler`接口，将实现类放入 Spring 容器中；

    ```java
    @Component
    public class MyMetaObjectHandler implements MetaObjectHandler {
        @Override
        public void insertFill(MetaObject metaObject) {
            this.strictInsertFill(metaObject, "createTime", LocalDateTime.class, LocalDateTime.now());
        }

        @Override
        public void updateFill(MetaObject metaObject) {
            this.strictUpdateFill(metaObject, "updateTime", LocalDateTime.class, LocalDateTime.now());
        }
    }
    ```

## 逻辑删除

在标记逻辑删除的属性上使用`@TableLogic`注解标注。

逻辑已删除值默认为 1，逻辑未删除值默认为 0，可以通过配置修改。

```yaml
mybatis-plus:
  global-config:
    db-config:
      # 全局逻辑删除的实体字段名 (配置后可以不配置 @TableLogic)
      logic-delete-field: deleted
      logic-delete-value: 1
      logic-not-delete-value: 0
```

## 乐观锁

- 仅支持`updateById(id)`与`update(entity, wrapper)`方法；
- 在`update(entity, wrapper)`方法下，`wrapper`不能复用。

1. 配置插件；

    ```java
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
        return interceptor;
    }
    ```

2. 在表示版本的字段上增加`@Version`注解。
