---
draft: true
---

# Spring Boot

## 参考资料

- [【尚硅谷】SpringBoot2 零基础入门教程（spring boot2 干货满满）\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV19K4y1L7MT)
- [SpringBoot2 核心技术与响应式编程 · 语雀](https://www.yuque.com/atguigu/springboot)
- [Spring Boot](https://spring.io/projects/spring-boot#learn)
- [Spring Boot 中文文档 参考手册 中文版](https://www.springcloud.cc/spring-boot.html)
- [What are microservices?](https://microservices.io/)

## 概述

Spring Boot 是 Spring 框架的再封装，简化 Spring 应用开发。入门容易，精通难。是 J2EE 的一站式解决方案。

## 配置文件

### 文件格式

- `.properties`
- `.yml`

### 占位符

- `${random.uuid}` 生成一些随机值
- `${person.name}` 引用其他值
- `${person.name:default}` 冒号后面可以跟默认值

### Profile

#### 多文件

`application-{profile}.properties/yml`，可以编写多个配置文件，不带后缀的是默认配置文件。

#### YAML 多文档块

`---`，用三个横线在一个文档里分隔不同的文档快。在每个文档快里设置 `spring.prifiles` 来给不同的文档快命名。

#### 指定配置文件

1. 对于多文件方式，在主配置文件中设置 `spring.profiles.active={profile}` ，来指定使用的文件；
2. 对于 YAML 多文档块方式，在第一个文档快里设置 `spring.profiles.active` 来选择使用对应的文档；
3. 启动命令行参数指定配置文件；

   ```bash
   --spring.profiles.active=dev
   ```

4. 虚拟机参数指定配置文件；

   ```bash
   -Dspring.profiles.active=dev
   ```

5. 使用命令行参数指定外部配置文件。

   ```bash
   --spring.config.location=
   ```

### 加载顺序

1. `flie: ./config/`
2. `file: ./`
3. `classpath: ./config/`
4. `classpath: ./`

## 自动配置

- `@SpringBootApplication`
  - `@SpringBootConfiguration`：Spring Boot 配置类
    - `@Configuration`：用在 Spring 中的注解配置
      - `@Component`：配置类也是一个组件
  - `@EnableAutoConfiguration`
    - `@AutoConfigurationPackage`
      - `@Import(AutoConfigurationPackages.Registrar.class)`：将主配置类（@SpringBootApplication 标注的类）的所在包及下面所有子包里面的所有组件扫描到 Spring 容器；
    - `@Import(AutoConfigurationImportSelector.class)`：导入哪些组件的选择器，会给容器中导入非常多的自动配置类（xxxAutoConfiguration）；就是给容器中导入这个场景需要的所有组件，并配置好这些组件；Spring Boot 在启动的时候从类路径下的 `META-INF/spring.factories` 中获取 EnableAutoConfiguration 指定的值，将 这些值作为自动配置类导入到容器中，自动配置类就生效，帮我们进行自动配置工作
  - `@ComponentScan(excludeFilters = { @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),      @Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })`

### 自定义自动配置类

在类上加注解，Spring Boot 会把对应的配置文件内容和类中的属性映射。在容器中才生效，默认的 `org.springframework.boot.autoconfigure` 下的所有自动配置类都在容器中，如果需要自定义的话需要加上 `@Component`

```java
@Component
@ConfigurationProperties(prefix = "spring.datasource")
```

再导入依赖，IDE 就能自动提示自定义的配置属性。

```xml
<!‐‐导入配置文件处理器，配置文件进行绑定就会有提示‐‐>
<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring‐boot‐configuration‐processor</artifactId>
        <optional>true</optional>
</dependency>
```

## 注解

### @RestController

```java
@Controller
@ResponseBody
```

### @ConfigurationProperties

注入配置文件中的配置项到类中。

### @Value

来自 Spring，注入基本数据类型和 String，支持 SpEL 表达式。

### @Validated

用在配置属性类中 `@ConfigurationProperties`，启用 JSR 303 数据校验，在变量上标注类似 `@Email` 的注解就能自动配置文件属性了。

### @PropertySource

配合 `@ConfigurationProperties` ，指定配置文件获取属性值。

### @ImportResource

标注在配置类上，导入 Spring 配置文件，让配置文件里的内容生效。

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

## 自定义 starter

// TODO
