# SSM

SpringMVC 与 Spring 整合是为了分工明确。两个容器同时存在情况下，Spring 容器作为父容器，SpringMVC 容器作为子容器。SpringMVC 容器中的 Bean 可以引用 Spring 容器中的 Bean，反过来则不行。

## 配置文件版

### 工程结构

```
src
├── main
│   ├── java
│   │   └── o
│   │       └── e
│   │           ├── controller
│   │           │   └── EmployeeController.java
│   │           ├── mapper
│   │           │   └── EmployeesMapper.java
│   │           ├── model
│   │           │   ├── Employees.java
│   │           │   ├── EmployeesExample.java
│   │           │   ├── request
│   │           │   │   └── PageRequestParam.java
│   │           │   └── response
│   │           │       └── PageResponseScheme.java
│   │           └── service
│   │               ├── EmployeeService.java
│   │               └── impl
│   │                   └── EmployeeServiceImpl.java
│   ├── resources
│   │   ├── generatorConfig.xml
│   │   ├── jdbc.properties
│   │   ├── mybatis-config.xml
│   │   ├── o
│   │   │   └── e
│   │   │       └── mapper
│   │   │           └── EmployeesMapper.xml
│   │   ├── rootApplicationContext.xml
│   │   └── servletApplicationContext.xml
│   └── webapp
│       ├── WEB-INF
│       │   └── web.xml
│       └── templates
│           └── index.html
└── test
    └── java
        └── o
            └── e
                └── service
                    └── impl
                        └── EmployeeServiceImplTest.java
```

### 初始化 RootApplicationContext

`ContextLoaderListener`是`javax.servlet.ServletContextListener`的实现类，用于监听 ServletContext 的创建事件，在 ServletContext 创建之后初始化 RootApplicationContext，并放入 ServletContext 域中，对应的属性名是`org.springframework.web.context.WebApplicationContext.ROOT`；

```xml title="web.xml"
<listener>
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
</listener>

<context-param>
    <param-name>contextConfigLocation</param-name>
    <param-value>classpath:rootApplicationContext.xml</param-value>
</context-param>
```

### 初始化 ServletApplicationContext

在 DispatcherServlet 初始化的时候会再创建一个 Spring 容器，我们称之为 ServletApplicationContext，在容器创建完毕之后如果在 ServletContext 域中发现了 RootApplicationContext，则会将其设置为 ServletApplicationContext 的父容器；

```xml title="web.xml"
<servlet>
    <servlet-name>DispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:servletApplicationContext.xml</param-value>
    </init-param>
    <load-on-startup>0</load-on-startup>
</servlet>

<servlet-mapping>
    <servlet-name>DispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```

### web.xml

```xml title="web.xml"
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
        version="4.0">

    <filter>
        <filter-name>CharacterEncodingFilter</filter-name>
        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
        <init-param>
            <param-name>encoding</param-name>
            <param-value>UTF-8</param-value>
        </init-param>
        <init-param>
            <param-name>forceEncoding</param-name>
            <param-value>true</param-value>
        </init-param>
    </filter>
    <filter>
        <filter-name>HiddenHttpMethodFilter</filter-name>
        <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
    </filter>

    <filter-mapping>
        <filter-name>CharacterEncodingFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>
    <filter-mapping>
        <filter-name>HiddenHttpMethodFilter</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>

    <servlet>
        <servlet-name>DispatcherServlet</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:servletApplicationContext.xml</param-value>
        </init-param>
        <load-on-startup>0</load-on-startup>
    </servlet>

    <servlet-mapping>
        <servlet-name>DispatcherServlet</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>

    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>

    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:rootApplicationContext.xml</param-value>
    </context-param>

</web-app>
```

### rootApplicationContext.xml

```xml title="rootApplicationContext.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:context="http://www.springframework.org/schema/context" xmlns:tx="http://www.springframework.org/schema/tx"
    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd   http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd">

    <context:component-scan base-package="o.e.service"/>

    <context:property-placeholder location="classpath:jdbc.properties"/>

    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driverClassName" value="${jdbc.driver}"/>
        <property name="url" value="${jdbc.url}"/>
        <property name="username" value="${jdbc.username}"/>
        <property name="password" value="${jdbc.password}"/>
    </bean>

    <tx:annotation-driven/>

    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"/>
    </bean>

    <bean class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <property name="configLocation" value="classpath:mybatis-config.xml"/>
    </bean>

    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="o.e.mapper"/>
    </bean>

</beans>
```

### servletApplicationContext.xml

```xml title="servletApplicationContext.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">

    <context:component-scan base-package="o.e.controller"/>

    <mvc:annotation-driven/>

    <mvc:default-servlet-handler/>

    <mvc:view-controller path="/" view-name="index"/>

    <bean id="viewResolver" class="org.thymeleaf.spring5.view.ThymeleafViewResolver">
        <!--        <property name="order" value="1"/>-->
        <property name="characterEncoding" value="UTF-8"/>
        <property name="templateEngine">
            <bean class="org.thymeleaf.spring5.SpringTemplateEngine">
                <property name="templateResolver">
                    <bean class="org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver">
                        <property name="prefix" value="/templates/"/>
                        <property name="suffix" value=".html"/>
                        <property name="templateMode" value="HTML"/>
                        <property name="characterEncoding" value="UTF-8"/>
                    </bean>
                </property>
            </bean>
        </property>
    </bean>

    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver"/>

</beans>
```

## 注解版

### 工程结构

```
src
├── main
│   ├── java
│   │   └── o
│   │       └── e
│   │           ├── configuration
│   │           │   ├── mvc
│   │           │   │   ├── CommonsMultipartResolverConfigurer.java
│   │           │   │   ├── SpringServletContextConfigurer.java
│   │           │   │   └── ThymeleafConfigurer.java
│   │           │   ├── root
│   │           │   │   ├── DataSourceConfigurer.java
│   │           │   │   ├── MybatisConfigurer.java
│   │           │   │   └── SpringRootContextConfigurer.java
│   │           │   └── servlet
│   │           │       ├── ApplicationContextInitializer.java
│   │           │       └── FilterInitializer.java
│   │           ├── controller
│   │           │   └── EmployeeController.java
│   │           ├── mapper
│   │           │   └── EmployeesMapper.java
│   │           ├── model
│   │           │   ├── Employees.java
│   │           │   ├── EmployeesExample.java
│   │           │   ├── request
│   │           │   │   └── PageRequestParam.java
│   │           │   └── response
│   │           │       └── PageResponseScheme.java
│   │           └── service
│   │               ├── EmployeeService.java
│   │               └── impl
│   │                   └── EmployeeServiceImpl.java
│   ├── resources
│   │   ├── generatorConfig.xml
│   │   ├── mybatis-config.xml
│   │   └── o
│   │       └── e
│   │           └── mapper
│   │               └── EmployeesMapper.xml
│   └── webapp
│       ├── META-INF
│       │   └── services
│       │       └── javax.servlet.ServletContainerInitializer
│       └── templates
│           └── index.html
└── test
    └── java
        └── o
            └── e
                └── service
                    └── impl
                        └── EmployeeServiceImplTest.java
```

### 核心原理

Servlet 3.0 之后可以丢弃 web.xml，完全使用代码的方式初始化 Web 容器。

在 ServletContext 初始化之后，Web 容器会自动调用`javax.servlet.ServletContainerInitializer`接口的实现类，你可以在其中设置监听器、过滤器或者完成其它操作，比如初始化 Spring 容器。

该实现类的发现方式是通过`ServiceLoader`完成的，所以在你实现该接口之后，还需将实现类的全限定类名写入`/META-INF/services/javax.servlet.ServletContainerInitializer`文件中。

### maven-war-plugin

maven-war-plugin 的版本要高于 3，不然在构建 war 产物的时候会提示缺少 web.xml 文件。

```xml title="pom.xml"
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-war-plugin</artifactId>
    <version>3.3.2</version>
</plugin>
```

### 初始化父子容器

通过继承`org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer`来完成父子容器的初始化工作。

该类实现了`org.springframework.web.WebApplicationInitializer`接口，该接口的实现类会在`org.springframework.web.SpringServletContainerInitializer`中进行调用。

为什么`SpringServletContainerInitializer`会被调用呢，因为该类的全限定类名被写入在`/spring-web-*.jar/META-INF/services/javax.servlet.ServletContainerInitializer`文件中，根据 Servlet 标准，Web 容器会通过 ServiceLoader 来调用该类。

`SpringServletContainerInitializer`类实现了`javax.servlet.ServletContainerInitializer`接口，并且子类中使用了`@HandlesTypes(WebApplicationInitializer.class)`注解，在 ServletContext 初始化完毕之后，Web 容器会将`WebApplicationInitializer`的实现类都注入到`SpringServletContainerInitializer#onStartup()`方法的`Set<Class<?>> webAppInitializerClasses`参数中，此方法会调用`WebApplicationInitializer#onStartup()`方法，从而完成父子容器的初始化过程。

```java title="ApplicationContextInitializer.java"
package o.e.configuration.servlet;

public class ApplicationContextInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {

    /**
     * 指定 Spring 配置类
     */
    @Override
    protected Class<?>[] getRootConfigClasses() {
        return new Class[]{SpringRootContextConfigurer.class};
    }

    /**
     * 指定 Spring MVC 配置类
     */
    @Override
    protected Class<?>[] getServletConfigClasses() {
        return new Class[]{SpringServletContextConfigurer.class};
    }

    /**
     * 设置 DispatcherServlet 的 URL 映射
     */
    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }

}
```

```java title="SpringRootContextConfigurer.class"
package o.e.configuration.mvc;

@ComponentScan({
        "o.e.configuration.root",
        "o.e.service"
})
@Configuration
public class SpringRootContextConfigurer {
}
```

```java title="SpringServletContextConfigurer.class"
package o.e.configuration.mvc;

@ComponentScan({"o.e.configuration.mvc", "o.e.controller"})
@EnableWebMvc
@Configuration
public class SpringServletContextConfigurer implements WebMvcConfigurer {

    /**
     * 使用默认的 servlet 处理静态资源
     */
    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }

    /**
     * 配置视图控制器
     */
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
    }

}
```

### RootApplicationContext 扫描的配置类

```java title="DataSourceConfigurer.java"
package o.e.configuration.root;

@Configuration
public class DataSourceConfigurer {

    @Bean(destroyMethod = "close")
    public DruidDataSource dataSource() {
        DruidDataSource druidDataSource = new DruidDataSource();
        druidDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        druidDataSource.setUrl("jdbc:mysql:///atguigudb");
        druidDataSource.setUsername("root");
        druidDataSource.setPassword("root");
        return druidDataSource;
    }

    @Bean
    public DataSourceTransactionManager dataSourceTransactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }

}
```

```java title="MybatisConfigurer.java"
package o.e.configuration.root;

@Configuration
public class MybatisConfigurer {

    @Bean
    public SqlSessionFactoryBean sqlSessionFactoryBean(DataSource dataSource) {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setConfigLocation(new ClassPathResource("mybatis-config.xml"));
        factoryBean.setDataSource(dataSource);
        return factoryBean;
    }

    @Bean
    public MapperScannerConfigurer mapperScannerConfigurer() {
        MapperScannerConfigurer configurer = new MapperScannerConfigurer();
        configurer.setBasePackage("o.e.mapper");
        return configurer;
    }

}
```

### ServletApplicationContext 扫描的配置类

```java title="CommonsMultipartResolverConfigurer.java"
package o.e.configuration.mvc;

@Configuration
public class CommonsMultipartResolverConfigurer {

    @Bean
    public CommonsMultipartResolver commonsMultipartResolver() {
        return new CommonsMultipartResolver();
    }

}
```

```java title="ThymeleafConfigurer.java"
package o.e.configuration.mvc;

@Configuration
public class ThymeleafConfigurer {

    @Bean
    public ITemplateResolver templateResolver() {
        WebApplicationContext applicationContext = ContextLoader.getCurrentWebApplicationContext();
        ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver(applicationContext.getServletContext());
        templateResolver.setPrefix("/templates/");
        templateResolver.setSuffix(".html");
        templateResolver.setCharacterEncoding("UTF-8");
        templateResolver.setTemplateMode(TemplateMode.HTML);
        return templateResolver;
    }

    @Bean
    public SpringTemplateEngine templateEngine(ITemplateResolver templateResolver) {
        SpringTemplateEngine templateEngine = new SpringTemplateEngine();
        templateEngine.setTemplateResolver(templateResolver);
        return templateEngine;
    }

    @Bean
    public ViewResolver viewResolver(SpringTemplateEngine templateEngine) {
        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();
        viewResolver.setCharacterEncoding("UTF-8");
        viewResolver.setTemplateEngine(templateEngine);
        return viewResolver;
    }

}
```

### 注册 Filter

Listener 和 Servlet 也可以通过此方法注册。

不要忘了需要把此类的全限定类名写入`/META-INF/services/javax.servlet.ServletContainerInitializer`文件中。

```java title="FilterInitializer.java"
package o.e.configuration.servlet;

public class FilterInitializer implements ServletContainerInitializer {

    private Map<Filter, String> filterStringMap = new LinkedHashMap<>();

    public FilterInitializer() {
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter("UTF-8", true);
        filterStringMap.put(characterEncodingFilter, "/*");

        HiddenHttpMethodFilter hiddenHttpMethodFilter = new HiddenHttpMethodFilter();
        filterStringMap.put(hiddenHttpMethodFilter, "/*");
    }

    @Override
    public void onStartup(Set<Class<?>> c, ServletContext ctx) throws ServletException {
        for (Map.Entry<Filter, String> entry : filterStringMap.entrySet()) {
            ctx.addFilter(entry.getClass().getSimpleName(), entry.getKey())
                    .addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, entry.getValue());
        }
    }

}
```
