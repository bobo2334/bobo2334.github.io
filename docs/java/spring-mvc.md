# Spring MVC

## 参考资料

- [Maven Repository: org.springframework » spring-web](https://mvnrepository.com/artifact/org.springframework/spring-web)
- [spring-web 5.2.7.RELEASE javadoc (org.springframework)](https://javadoc.io/doc/org.springframework/spring-web/latest/index.html)
- [spring-webmvc 5.2.7.RELEASE javadoc (org.springframework)](https://javadoc.io/doc/org.springframework/spring-webmvc/latest/index.html)

## 快速开始

1. 创建 Maven 工程，导入依赖
2. 配置`web.xml`，在 Tomcat 容器开始运行时加载 SpringMVC 的 Servlet。并且使用初始化参数设置 Spring 配置文件的位置。之后再把`DispatcherServlet`映射到所有请求上，所有请求都经过此 Servlet 处理。如果没有设置配置文件路径，则默认路径为`/WEB-INF/springMVC-{servlet-name}.xml`，其中`servlet-name`是在`web.xml`中配置的`<servlet-name>`的值。

    ```xml title="web.xml"
    <servlet>
        <servlet-name>dispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:mvc.xml</param-value>
        </init-param>
        <load-on-startup>0</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>dispatcherServlet</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
    ```

3. 配置 Spring，开启包扫描，开启注解支持，并配置一个视图解析器，注入参数

    ```xml title="applicationContext.xml"
    <context:component-scan base-package="me.iuok"/>

    <!--    注解支持-->
    <mvc:annotation-driven/>

    <!--    视图解析器-->
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/pages/"/>
        <property name="suffix" value=".jsp"/>
    </bean>
    ```

4. 编写 Controller，处理业务逻辑

    ```java title="HelloController.java"
    @Slf4j
    @Controller
    public class HelloController {

        @RequestMapping("/hello")
        public String sayHello() {
            log.info("HelloController.sayHello");
            return "success";
        }

    }
    ```

5. 当访问 `/hello` 的时候就会显示 `/WEB-INF/pages/success.jsp` 里的内容了。

## 配置文件配置项

- `<mvc:default-servlet-handler/>`会在`web.xml`中定义一个`DefaultServletHttpRequestHandler`，路径是`/`。用户配置的`DispatcherServlet`的优先级更高，当收到请求时首先交给用户配置的 Servlet 进行处理，如果处理不了再交给默认的。所以这个 Servlet 能处理静态资源。
- `<mvc:annotation-driven/>`开启注解扫描。不然注解不生效。

## 注解

### @RequestMapping

可以标注在类上也可以标注在方法上，如果标注在类上则所有的方法上的映射继承类上的映射。

| 属性名    | 说明                                | 示例                                                         |
| --------- | ----------------------------------- | ------------------------------------------------------------ |
| `value`   | `path`的别名                        |                                                              |
| `path`    | 用于建立请求 URL 和方法之间的关系。 |                                                              |
| `method`  | 限制请求方式                        |                                                              |
| `params`  | 限制参数                            | `username`必须出现参数；`!username`不能出现此参数；`username=who`限制参数取值 |
| `headers` | 限制请求头，和 params 类似          |                                                              |

Ant 风格资源地址匹配：

1. `?`匹配任意一个字符；
2. `*`匹配单层路径；
3. `**`匹配多层路径。

### @RequestParam

只能标注在方法参数上，把 request 中的表单参数绑定到方法参数上。用于在自动注入不好使的情况下，方法参数名称可以和表单参数名称不相同。

| 属性名         | 说明                                    |
| -------------- | --------------------------------------- |
| `value`        | `name`的别名                            |
| `name`         | 参数名                                  |
| `required`     | 是否必须有，默认为 true，不提供就会异常 |
| `defaultValue` | 默认值                                  |

### @RequestBody

标注在方法参数上，用于获取请求体的内容，比如以 JSON 格式传入数据的时候。GET 方法没有请求体，所以不适用。

### @RequestHeader

标注在方法参数上，用于绑定 request 中的 header 值。

### @PathVariable

标注在方法参数上，用于绑定 @RequestMapping 路径里的变量。

```java
@RequestMapping("/param/{id}")
public void pathVariable(@PathVariable("id") String id) {}
```

### @CookieValue

标注在方法参数上，用于绑定 Cookie 值。

### @ResponseBody

可以标注在类上和方法上，可以把方法的返回值直接输出到 response。

如果返回值是对象可以自动转为 json 格式输出，需要导入 [Jackson](https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-databind) 的依赖。

## 请求参数绑定

在控制器方法参数列表里写上参数，MVC 就会自动注入参数。

### 原生 Servlet 类型

1. HttpServletRequest
2. HttpServletResponse
3. HttpSession
4. java.security.Principal
5. Locale
6. InputStream
7. OutputStream
8. Reader
9. Writer

### 基本数据类型和 String 类型

### 实体类型

- `HttpEntity<>`
- `ResponseEntity<>`
- `RequestEntity<>`

## 数据共享

### ModelAndView

```java
@RequestMapping("/hello")
public ModelAndView test() {
    ModelAndView modelAndView = new ModelAndView();
    log.info("test 方法被执行");
    modelAndView.addObject("msg", "你好");
    modelAndView.setViewName("test");
    return modelAndView;
}
```

### Map

```java
@RequestMapping("/map")
public String map(Map<String, Object> map) {
    map.put("msg", "hello");
    return "test";
}
```

### Model

```java
@RequestMapping("/model")
public String map(String username, String password, Model model) {
    model.addAttribute("username", username);
    model.addAttribute("password", password);
    return "charset";
}
```

### ModelMap

```java
@RequestMapping("/model")
public String map(String username, String password, ModelMap model) {
    model.addAttribute("username", username);
    model.addAttribute("password", password);
    return "charset";
}
```

## 转发与重定向

```java
return "forward:/hello"
```

```java
return "redirect:/index.jsp";
```

## 视图控制器

```xml title="applicationContext.xml"
<mvc:annotation-driven />

<!-- 只设置下面这一行的话，通过注解设置的路由都会失效 -->
<mvc:view-controller path="/testView" view-name="success" />
```

## HttpMessageConveter

![img](spring-mvc.assets/wpsuwWczF.jpg)

负责将请求信息转为对象，将对象输出为响应信息。

使用`HttpEntity<T>`/`ResponseEntity<T>`作为处理方法的入参或返回值。

## 文件下载

返回值类型`ResponseEntity<byte []>`。

```java
@RequestMapping("/testResponseEntity")
public ResponseEntity<byte[]> testResponseEntity(HttpSession session) throws IOException {
    ServletContext servletContext = session.getServletContext();
    InputStream resourceAsStream = servletContext.getResourceAsStream("/files/abc.txt");
    byte[] body = new byte[resourceAsStream.available()];
    resourceAsStream.read(body);
    MultiValueMap<String, String> headers = new HttpHeaders();
    headers.add("Content-Disposition", "attachment;filename=abc.txt");
    HttpStatus statusCode = HttpStatus.OK;
    return new ResponseEntity<byte[]>(body, headers, statusCode);
}
```

## 文件上传

1. 上传表单要求`method="post"`，`enctype="multipart/form-data"`

    ```html
    <form action="testUpload" method="post" enctype="multipart/form-data">
        文件：<input type="file" name="file"/><br><br>
        描述：<input type="text" name="desc"/><br><br>
        <input type="submit" value="提交"/>
    </form>
    ```

2. 导入依赖

    [Maven Repository: commons-fileupload » commons-fileupload](https://mvnrepository.com/artifact/commons-fileupload/commons-fileupload)

3. 配置`multipartResolver`，id 必须是这个

    ```xml title="applicationContext.xml"
    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
        <property name="defaultEncoding" value="utf-8"/>
        <property name="maxUploadSize" value="8888"/>
    </bean>
    ```

4. 处理

    ```java
    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public String upload(String desc, MultipartFile file) throws IOException {
        file.transferTo(Paths.get(""));
        return "test";
    }
    ```

5. 多文件上传，表单改成多个同名的上传域

    ```java
    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public String upload(String desc, @RequestParam("file") MultipartFile[] files) throws IOException {
        for (MultipartFile file : files) {
            file.transferTo(Paths.get(""));
        }
        return "test";
    }
    ```

## 过滤器

### CharacterEncodingFilter

这个过滤器用于设置 request 和 response 的字符编码。必须防止在所有其它过滤器之前。不然在 request 被访问之后再设置就没意义了。

- `forceEncoding`设置为`false`的时候，如果 request 未设置字符集才会对 request 设置字符集，不会对 response 设置字符集；
- `forceEncoding`设置为`true`的时候，任何时候都会对 request 和 response 设置字符集。

```xml title="web.xml"
<filter>
    <filter-name>CharacterEncodingFilter</filter-name>
    <filter-
class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>CharacterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

### HiddenHttpMethodFilter

这个过滤器处理请求参数中的`_method`字段。有些客户端只能发送 GET 和 POST 请求，不能发送 DELETE 或 PUT 请求，这个字段用于告知 Spring MVC 模拟请求方法。

```xml title="web.xml"
<filter>
    <filter-name>HiddenHttpMethodFilter</filter-name>
    <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-
class>
</filter>
<filter-mapping>
    <filter-name>HiddenHttpMethodFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

## 拦截器

类似于 Servlet 中的过滤器，对处理进行预处理和后处理。

1. 新类，实现`HandlerIntercepter`接口，或者继承`HandlerInterceptorAdapter`，重写方法；
2. 配置文件；

    ```xml title="applicationContext.xml"
    <!--    拦截器-->
    <mvc:interceptors>
        <mvc:interceptor>
            <!--        要拦截的路径-->
            <mvc:mapping path=""/>
            <!--        不拦截的路径-->
            <mvc:exclude-mapping path=""/>
            <!--            拦截器 Bean-->
            <bean class="" />
        </mvc:interceptor>
    </mvc:interceptors>
    ```

拦截器的执行顺序。

![img](spring-mvc.assets/wpsCwUu8t.jpg)

1. pre()
2. controller
3. post()
4. xxx.jsp
5. afterCompletion()

![img](spring-mvc.assets/wpsOCuYKk.jpg)

对于多个拦截器的执行顺序。`preHandle`是顺序执行；`postHandle`是倒序执行；`afterCompletion`也是倒序执行。

在执行`preHandle`时，只要遇到一个返回`false`，剩下的拦截器都不会执行了，`postHandle`都不会执行。但是返回`false`之前的其它拦截器的`afterCompletion`还是会继续执行。

## 异常处理

### HandlerExceptionResolver

Controller 调用 Service，Service 调用 DAO，异常都是向上抛出的，最终交由 DispatcherServlet 进行处理。

1. 新类，实现 HandlerExceptionResolver；
2. 重写方法
3. 在配置文件里配置 bean

### SimpleMappingExceptionResolver

或者有个更简单的办法，自带的有个`SimpleMappingExceptionResolver`。可以快捷地将异常与视图名对应，发生异常时自动跳转到对应视图，带上异常信息，key 是`exception`。可以把所有异常作一个通用处理。

```xml title="applicationContext.xml"
<bean
class="org.springframework.web.servlet.handler.SimpleMappingExceptionResolver">
    <property name="exceptionMappings">
        <props>
<!-- properties 的键表示处理器方法执行过程中出现的异常 properties 的值表示若出现指定异常时，设置一个新的视图名称，跳转到指定页面 -->
            <prop key="java.lang.ArithmeticException">error</prop>
        </props>
</property>
<!-- exceptionAttribute 属性设置一个属性名，将出现的异常信息在请求域中进行共享 -->
    <property name="exceptionAttribute" value="ex"></property>
</bean>
```

### @ControllerAdvice

```java title="ExceptionController.java"
@ControllerAdvice
public class ExceptionController {
//@ExceptionHandler 用于设置所标识方法处理的异常
@ExceptionHandler(ArithmeticException.class)
//ex 表示当前请求处理中出现的异常对象
public String handleArithmeticException(Exception ex, Model model){
        model.addAttribute("ex", ex);
        return "error";
    }
}
```

## 注解配置 Spring MVC

在 Servlet 3.0 环境中，容器会在类路径中查找实现`javax.servlet.ServletContainerInitializer`接口的类，如果找到的话就用它来配置 Servlet 容器。Spring 提供了这个接口的实现，名为`SpringServletContainerInitializer`，这个类反过来又会查找实现`WebApplicationInitializer`的类并将配置的任务交给它们来完成。Spring 3.2 引入了一个便利的`WebApplicationInitializer`基础实现，名为`AbstractAnnotationConfigDispatcherServletInitializer`，当我们的类扩展了`AbstractAnnotationConfigDispatcherServletInitializer`并将其部署到 Servlet 3.0 容器的时候，容器会自动发现它，并用它来配置 Servlet 上下文。

## Spring MVC 运行流程

![image-20200712161734488](spring-mvc.assets/image-20200712161734488.png)

1. 用户向服务器发送请求，请求被 SpringMVC 前端控制器 DispatcherServlet 捕获。
2. DispatcherServlet 对请求 URL 进行解析，得到请求资源标识符 (URI)，判断请求 URI 对应的映射：
    1. 不存在
        1. 再判断是否配置了 mvc:default-servlet-handler
        2. 如果没配置，则控制台报映射查找不到，客户端展示 404 错误
        3. 如果有配置，则访问目标资源 (一般为静态资源，如:JS、CSS、HTML)，找不到客户端也会展示 404 错误
    2. 存在则执行下面的流程
3. 根据该 URI，调用 HandlerMapping 获得该 Handler 配置的所有相关的对象 (包括 Handler 对象以及 Handler 对象对应的拦截器)，最后以 HandlerExecutionChain 执行链对象的形式返回。
4. DispatcherServlet 根据获得的 Handler，选择一个合适的 HandlerAdapter。
5. 如果成功获得 HandlerAdapter，此时将开始执行拦截器的 preHandler(...) 方法【正向】
6. 提取 Request 中的模型数据，填充 Handler 入参，开始执行 Handler(Controller) 方法，处理请求。在填充 Handler 的入参过程中，根据你的配置，Spring 将帮你做一些额外的工作：
    1. HttpMessageConveter: 将请求消息 (如 Json、xml 等数据) 转换成一个对象，将对象转换为指定 的响应信息
    2. 数据转换：对请求消息进行数据转换。如 String 转换成 Integer、Double 等
    3. 数据格式化：对请求消息进行数据格式化。如将字符串转换成格式化数字或格式化日期等 d) 数据验证：验证数据的有效性 (长度、格式等)，验证结果存储到 BindingResult 或 Error 中
7. Handler 执行完成后，向 DispatcherServlet 返回一个 ModelAndView 对象。
8. 此时将开始执行拦截器的 postHandle(...) 方法【逆向】。
9. 根据返回的 ModelAndView(此时会判断是否存在异常：如果存在异常，则执行 HandlerExceptionResolver 进行异常处理) 选择一个适合的 ViewResolver 进行视图解析，根据 Model 和 View，来渲染视图。
10. 渲染视图完毕执行拦截器的 afterCompletion(...) 方法【逆向】。
11. 将渲染结果返回给客户端。

## 异步请求

Servlet 3.0 中的异步请求在 SpringMVC 里也作了支持。有两种方式实现异步请求。

### Callable

控制器返回一个`Callable`对象。

```java
@GetMapping("/callable")
public Callable<String> callable() {
    log.info(Thread.currentThread().getName());

    return () -> {
        log.info(Thread.currentThread().getName());
        return "你好";
    };
}
```

### DeferredResult

控制器返回一个`DeferredResult`对象，然后在其他线程中等待任务完成的时候调用`setResult()`方法。

```java
@GetMapping("/deferredResult")
public DeferredResult<String> deferredResult() {
    DeferredResult<String> deferredResult = new DeferredResult<>();
    processDeferredResult(deferredResult);
    log.info("AsyncController.deferredResult");
    log.info(Thread.currentThread().getName());
    return deferredResult;
}

private void processDeferredResult(DeferredResult<String> deferredResult) {
    new Thread(() -> {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        deferredResult.setResult("Hello");
        log.info("AsyncController.processDeferredResult");
        log.info(Thread.currentThread().getName());
    }).start();
}
```
