# Java Web

## 参考资料

- [尚硅谷丨 2022 版 JavaWeb 教程 (全新技术栈，全程实战)\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1AS4y177xJ)
- [JavaWeb | 代码重工](https://heavy_code_industry.gitee.io/code_heavy_industry/pro001-javaweb/)
- [Web 阶段 [还没开始写]](https://www.wolai.com/518LcmX2Ruo7c7SKaVbrNz)

## Tomcat

Servlet 容器，实现了 Servlet 标准。

### 目录结构

## Servlet

### Servlet 版本

Servlet 属于 Java EE 标准，用于企业级 Web 开发，后改名为 Jakarta EE。

Servlet、Tomcat 和 Java 版本选择请参考 *Tomcat 网站* [^1]。关于 Servlet 名称历史及版本历史可以参考其 *维基百科页面* [^2]。

4.0.1 及之前使用此 Maven 坐标，搭配 Tomcat 9 及之前版本。

```xml
<!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api -->
<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>javax.servlet-api</artifactId>
    <version>4.0.1</version>
    <scope>provided</scope>
</dependency>
```

4.0.2 及之后使用此坐标。

```xml
<!-- https://mvnrepository.com/artifact/jakarta.servlet/jakarta.servlet-api -->
<dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>4.0.4</version>
    <scope>provided</scope>
</dependency>
```

5.0 之后使用此坐标，搭配 Tomcat 10 使用。从 5 开始后包名改变了。

```xml
<!-- https://mvnrepository.com/artifact/jakarta.servlet/jakarta.servlet-api -->
<dependency>
    <groupId>jakarta.servlet</groupId>
    <artifactId>jakarta.servlet-api</artifactId>
    <version>6.0.0</version>
    <scope>provided</scope>
</dependency>
```

### Servlet 基本使用

方式一，使用`web.xml`文件配置。

```java
public class EchoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");
        Map<String, String[]> parameterMap = req.getParameterMap();
        PrintWriter writer = resp.getWriter();
        parameterMap.forEach((s, strings) -> {
            String params = String.format("%s: %s<br/>", s, String.join(", ", strings));
            System.out.println(params);
            writer.write(params);
            writer.flush();
        });
    }
}
```

```xml
<!DOCTYPE web-app PUBLIC
        "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"
        "http://java.sun.com/dtd/web-app_2_3.dtd" >
<web-app>
    <servlet>
        <servlet-name>EchoServlet</servlet-name>
        <servlet-class>o.e.servlet.EchoServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>EchoServlet</servlet-name>
        <url-pattern>/echo</url-pattern>
    </servlet-mapping>
</web-app>
```

方式二，使用注解配置，从 Servlet 3.0 开始支持。

```java
@WebServlet(name = "EmployeeServlet", value = "/employee", loadOnStartup = 1)
public class EmployeeServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // ...
    }
}
```

### Servlet 生命周期

每个 Servlet 都是单例的，由容器通过反射进行创建，所以要求每个 Servlet 类有一个`public`修饰的无参数构造方法。

1. 初始化时调用`init()`方法，默认情况下第一次收到请求时初始化，可以设置参数`loadOnStartup`在容器启动后立即初始化，该值最小为 0，越小表示初始化顺序越靠前；
2. 收到客户端请求时调用`service()`方法；
3. 销毁之前调用`destory()`方法。

### Application

整个 Servlet 范围的作用域，可以用来共享数据。

```java
ServletContext servletContext = getServletContext();
servletContext.setAttribute("a", "a");
```

### Request

请求封装的对象。包含了客户端发来的信息。其中也可以保存数据，用于在处理请求的各个阶段共享数据。

### Response

响应封装的对象，用于返回给客户端。

### Cookie

Cookie 是客户端会话技术。设置 Cookie 的时候服务器返回的响应头中包含有`set-cookie`信息，浏览器会根据此信息保存 Cookie，并且在之后的每次请求中带上此 Cookie。

```java
@WebServlet("/cookie")
public class CookieServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Cookie[] cookies = req.getCookies();
        PrintWriter writer = resp.getWriter();
        for (Cookie cookie : cookies) {
            writer.println(String.format("%s: %s", cookie.getName(), cookie.getValue()));
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        BufferedReader reader = req.getReader();
        String s = reader.readLine();
        Cookie cookie = new Cookie("hello", s);
        resp.addCookie(cookie);
    }

}
```

### Session

Session 是服务端会话技术，依赖 Cookie 运行，在 Cookie 中的名字是`JSESSIONID`。使用下面的命令来获取或者创建一个 Session。

```java
HttpSession session = request.getSession(true);
```

Session 中可以保存数据，可以在同一个会话中进行访问。

```java
String s = reader.readLine();
session.setAttribute("value", s);

Object value = session.getAttribute("value");
writer.write((String) value);
```

### 转发

转发发生在服务器内部，客户端无感知。用于将一个 Servlet 的请求和响应对象交给其它 Servlet 处理。

```java
req.getRequestDispatcher("/session").forward(req, resp);
```

转发不会覆盖 ContextRoot 路径。

### 重定向

重定向是给客户端发送 302 响应消息，告诉客户端去请求另一个地址。

- 301，永久重定向
- 302，临时重定向

```java
resp.sendRedirect("employee");
```

重定向会覆盖 ContextRoot 路径。

## Filter

### Filter 简介

1. 拦截。过滤器之所以能够对请求进行预处理，关键是对请求进行拦截，把请求拦截下来才能够做后续的操作。而且对于一个具体的过滤器，它必须明确它要拦截的请求，而不是所有请求都拦截；
2. 过滤。根据业务功能实际的需求，看看在把请求拦截到之后，需要做什么检查或什么操作，写对应的代码即可；
3. 放行。过滤器完成自己的任务或者是检测到当前请求符合过滤规则，那么可以将请求放行。所谓放行，就是让请求继续去访问它原本要访问的资源。

### Filter 基本使用

#### web.xml 中配置 Filter

1. Filter 配置要写在 Servlet 配置之前；
2. Filter 的顺序按照在配置文件中书写的顺序执行。

```xml
<web-app>
    <filter>
        <filter-name>XmlFilter</filter-name>
        <filter-class>o.e.filter.XmlFilter</filter-class>
    </filter>
    <filter-mapping>
        <filter-name>XmlFilter</filter-name>
        <url-pattern>*</url-pattern>
    </filter-mapping>

    <servlet>
        <servlet-name>EchoServlet</servlet-name>
        <servlet-class>o.e.servlet.EchoServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>EchoServlet</servlet-name>
        <url-pattern>/echo</url-pattern>
    </servlet-mapping>
</web-app>
```

#### 注解配置 Filter

1. Filter 的顺序按照全类名排序。

```java
@Slf4j
@WebFilter("*")
public class HelloFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        log.debug("HelloFilter 初始化");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        log.debug("HelloFilter 前");
        chain.doFilter(request, response);
        log.debug("HelloFilter 后");
    }

    @Override
    public void destroy() {
        log.debug("HelloFilter 销毁");
    }

}
```

## Listener

### 监听器列表

1. `ServletContextListener`，监听 ServletContext 对象的创建与销毁；
2. `HttpSessionListener`，监听 HttpSession 对象的创建与销毁；
3. `ServletRequestListener`，监听 ServletRequest 对象的创建与销毁；
4. `ServletContextAttributeListener`，监听 ServletContext 中属性的创建、修改和销毁；
5. `HttpSessionAttributeListener`，监听 HttpSession 中属性的创建、修改和销毁；
6. `ServletRequestAttributeListener`，监听 ServletRequest 中属性的创建、修改和销毁；
7. `HttpSessionBindingListener`，监听某个对象在 Session 域中的创建与移除；
8. `HttpSessionActivationListener`，监听某个对象在 Session 中的序列化与反序列化。

[^1]: [Apache Tomcat® - Which Version Do I Want?](https://tomcat.apache.org/whichversion.html)
[^2]: [Jakarta Servlet - Wikipedia](https://en.wikipedia.org/wiki/Jakarta_Servlet#History)
