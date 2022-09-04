# Spring Boot 基础

## 参考资料

- [【尚硅谷】SpringBoot2 零基础入门教程（spring boot2 干货满满）\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV19K4y1L7MT)
- [SpringBoot2 核心技术与响应式编程 · 语雀](https://www.yuque.com/atguigu/springboot)
- [Spring Boot](https://spring.io/projects/spring-boot#learn)
- [Spring Boot 中文文档 参考手册 中文版](https://www.springcloud.cc/spring-boot.html)
- [What are microservices?](https://microservices.io/)

## 概述

Spring Boot 是 Spring 框架的再封装，简化 Spring 应用开发。入门容易，精通难。是 J2EE 的一站式解决方案。

## Spring Initializer

快速生成工程。

- [Spring Initializr](https://start.spring.io/)
- [Aliyun Java Initializr](https://start.aliyun.com/)

## 配置文件

### 文件格式

- `.properties`
- `.yml`

### 占位符

- `${random.uuid}`，生成一些随机值
- `${person.name}`，引用其他值
- `${person.name:default}`，冒号后面可以跟默认值

### YAML 语法

- `key: value`，冒号之后有空格。
- 大小写敏感；
- 使用缩进表示层级关系；
- 缩进不允许使用 tab，只允许空格；
- 缩进的空格数不重要，只要相同层级的元素左对齐即可；
- `#`表示注释；
- 字符串无需加引号，也可以加。单引号中的内容会被转义；双引号中的内容不会被转义。

### Profile

#### 多文件

`application-{profile}.properties/yml`，可以编写多个配置文件，不带后缀的是默认配置文件。

#### YAML 多文档块

`---`，用三个横线在一个文档里分隔不同的文档快。在每个文档快里设置 `spring.prifiles` 来给不同的文档快命名。

#### 指定配置文件

1. 对于多文件方式，在主配置文件中设置 `spring.profiles.active={profile}` ，来指定使用的文件；
2. 对于 YAML 多文档块方式，在第一个文档快里设置 `spring.profiles.active` 来选择使用对应的文档；
3. 启动命令行参数指定配置文件：`--spring.profiles.active=dev`；
4. 虚拟机参数指定配置文件：`-Dspring.profiles.active=dev`；
5. 使用命令行参数指定外部配置文件：`--spring.config.location=`。

### 加载顺序

1. `flie: ./config/`
2. `file: ./`
3. `classpath: ./config/`
4. `classpath: ./`

## 自动配置

### 自动配置原理

主配置类上标注了`@SpringBootApplication`注解，这是个复合注解。

- `@SpringBootApplication`
  - `@SpringBootConfiguration`：Spring Boot 配置类
    - `@Configuration`：用在 Spring 中的注解配置
      - `@Component`：配置类也是一个组件
  - `@EnableAutoConfiguration`
    - `@AutoConfigurationPackage`
      - `@Import(AutoConfigurationPackages.Registrar.class)`：将主配置类（@SpringBootApplication 标注的类）的所在包及下面所有子包里面的所有组件扫描到 Spring 容器；
    - `@Import(AutoConfigurationImportSelector.class)`：导入哪些组件的选择器，会给容器中导入非常多的自动配置类（xxxAutoConfiguration）；就是给容器中导入这个场景需要的所有组件，并配置好这些组件；Spring Boot 在启动的时候从类路径下的 `META-INF/spring.factories` 中获取 EnableAutoConfiguration 指定的值，将这些值作为自动配置类导入到容器中，自动配置类就生效，帮我们进行自动配置工作
  - `@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),      @Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })`

### 配置文件绑定

在类上加注解`@ConfigurationProperties`，Spring Boot 会把对应的配置文件内容和类中的属性映射。

仅仅使用`@ConfigurationProperties`是不生效的，只有在该类被加载进入 Spring 容器中才生效。

1. 可以使用`@Component`注解将配置类加入容器；
2. 或者在其它需要使用配置类的类上使用`@EnableConfigurationProperties(*.class)`来把对应的配置类加入容器，此注解的作用类似于`@Import`；
3. 或者使用`@ConfigurationPropertiesScan`配置扫描包路径下的所有配置类，并将其加入应用容器中。

```java
@Component
@ConfigurationProperties(prefix = "spring.datasource")
```

`spring‐boot‐configuration‐processor`可以自动生成配置类的元信息，存储在`META-INF/spring-configuration-metadata.json`中，用于给 IDE 配置文件的语法提示功能提供支持。导入依赖，运行一次程序，IDE 就能自动提示自定义的配置属性。

```xml
<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring‐boot‐configuration‐processor</artifactId>
        <optional>true</optional>
</dependency>
```

### 条件加载

使用`@Conditional`注解，参数是一个`org.springframework.context.annotation.Condition`实现类，通过该接口中的`match`方法判断是否满足条件，从而是否加载`@Conditional`注解标注的类或者方法。

`@Conditional`有许多现成的子注解可以使用，Spring Boot 给你写好了`Condition`实现类。

- `@Profile`
- `@ConditionalOnBean`
- `@ConditionalOnMissingBean`
- `@ConditionalOnClass`
- `@ConditionalOnMissingClass`
- `@ConditionalOnWebApplication`
- `@ConditionalOnNotWebApplication`
- `@ConditionalOnCloudPlatform`
- `@ConditionalOnExpression`
- `@ConditionalOnJava`
- `@ConditionalOnJndi`
- `@ConditionalOnProperty`
- `@ConditionalOnResource`
- `@ConditionalOnSingleCandidate`
- `@ConditionalOnWarDeployment`

### 自定义 starter

## 使用传统配置文件

使用`@ImportResource`注解，标注在配置类上，导入 Spring 配置文件，让配置文件里的内容生效。

## Web 开发

### 静态资源访问

starter 自动配置了`ResourceHttpRequestHandler`。默认配置下，以下这些文件夹中的静态资源都能被访问到。

- `/static/`
- `/public/`
- `/resources/`
- `/META-INF/resources/`

### 自动配置

`org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration`是自动配置类。

### HiddenHttpMethodFilter

默认不配置，需要设置`spring.mvc.hiddenmethod.filter.enabled`才会开启。

### RequestMappingHandlerMapping

- HandlerMapping
  - RequestMappingHandlerMapping
- HandlerAdapter
- HandlerExecutionChain

### 控制器方法参数注入

各种类型的参数是通过`org.springframework.web.method.support.HandlerMethodArgumentResolver`实现类完成封装的。

1. 注解
    - `@Value`
    - `@PathVariable`
    - `@RequestParam`
    - `@RequestHeader`
    - `@CookieValue`
    - `@RequestBody`
    - `@ModelAttribute`
    - `@MatrixVariable`
2. Servlet API：`ServletRequestMethodArgumentResolver`
    - `WebRequest`
    - `ServletRequest`
    - `MultipartRequest`
    - `HttpSession`
    - `javax.servlet.http.PushBuilder`
    - `Principal`
    - `InputStream`
    - `Reader`
    - `HttpMethod`
    - `Locale`
    - `TimeZone`
    - `ZoneId`
3. 复杂参数
    - `Map`
    - `Model`
    - `Errors`
    - `BindingResult`
    - `RedirectAttributes`
    - `ServletResponse`
    - `SessionStatus`
    - `UriComponentsBuilder`
    - `ServletUriComponentsBuilder`
4. pojo：`ServletModelAttributeMethodProcessor`

### 数据验证

## 测试

## 注解

### @Validated

用在配置属性类中 `@ConfigurationProperties`，启用 JSR 303 数据校验，在变量上标注类似 `@Email` 的注解就能自动配置文件属性了。

### @PropertySource

配合 `@ConfigurationProperties` ，指定配置文件获取属性值。

## 整合

### Junit 5

```java
@SpringBootTest
```

### Thymeleaf

#### 引入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

#### 默认模板位置

`classpath:/templates/*.html`

```java
public class ThymeleafProperties {

private static final Charset DEFAULT_ENCODING = StandardCharsets.UTF_8;

public static final String DEFAULT_PREFIX = "classpath:/templates/";

public static final String DEFAULT_SUFFIX = ".html";

// ...

}
```

#### 使用

1. 在 HTML 页面上加命名空间，有语法提示；

   ```xml
   <html xmlns:th="<http://www.thymeleaf.org>">
   ```

2. 在请求域中加入数据；

   ```java
   (Map<String, Object> map){
       map.put();
   }
   // 或者使用 Model 也行
   ```

3. 之后就可以在 HTML 页面使用 Thymeleaf 的语法了。

   ```html
   <p th:text="#{home.welcome}">Welcome to our grocery store!</p>
   ```

### SpringMVC

#### 静态资源映射

静态资源被映射为 `/**` ，都会去这些目录中寻找静态资源返回。

1. classpath:/META-INF/resources/
2. classpath:/resources/
3. classpath:/static/
4. classpath:/public/

欢迎页被映射为 `/**` ，返回静态资源目录下 `/index.html`。

#### 增强配置

在容器中加入组件，继承 WebMvcConfigurerAdapter，并重写对应方法，所有的 WebMvcConfigurerAdapter 都会一起生效，包括默认已经配置的。

```java
@Configuration
public class MvcConfigurer implements WebMvcConfigurer {

}
```

#### 视图解析器

```java
@Override
public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/hello").setViewName("view");
}
```

#### 拦截器

是 SpringMVC 的组件而不是 Servlet 的。

```java
public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return false;
    }
}
@Override
public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(new LoginInterceptor()).addPathPatterns("/**").excludePathPatterns("index.html", "/", "/user/login");
}
```

#### Servlet

// TODO

#### Filter

// TODO

#### Listener

// TODO

### Druid

// TODO

### Servlet 容器

// TODO

