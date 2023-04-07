"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6762],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(t),v=a,u=g["".concat(p,".").concat(v)]||g[v]||m[v]||i;return t?r.createElement(u,l(l({ref:n},c),{},{components:t})):r.createElement(u,l({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},81971:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=["components"],o={},p="SSM",s={unversionedId:"java/ssm",id:"java/ssm",title:"SSM",description:"SpringMVC \u4e0e Spring \u6574\u5408\u662f\u4e3a\u4e86\u5206\u5de5\u660e\u786e\u3002\u4e24\u4e2a\u5bb9\u5668\u540c\u65f6\u5b58\u5728\u60c5\u51b5\u4e0b\uff0cSpring \u5bb9\u5668\u4f5c\u4e3a\u7236\u5bb9\u5668\uff0cSpringMVC \u5bb9\u5668\u4f5c\u4e3a\u5b50\u5bb9\u5668\u3002SpringMVC \u5bb9\u5668\u4e2d\u7684 Bean \u53ef\u4ee5\u5f15\u7528 Spring \u5bb9\u5668\u4e2d\u7684 Bean\uff0c\u53cd\u8fc7\u6765\u5219\u4e0d\u884c\u3002",source:"@site/docs/java/ssm.md",sourceDirName:"java",slug:"/java/ssm",permalink:"/docs/java/ssm",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Spring",permalink:"/docs/java/spring"},next:{title:"Thymeleaf",permalink:"/docs/java/thymeleaf"}},c={},m=[{value:"\u914d\u7f6e\u6587\u4ef6\u7248",id:"\u914d\u7f6e\u6587\u4ef6\u7248",level:2},{value:"\u5de5\u7a0b\u7ed3\u6784",id:"\u5de5\u7a0b\u7ed3\u6784",level:3},{value:"\u521d\u59cb\u5316 RootApplicationContext",id:"\u521d\u59cb\u5316-rootapplicationcontext",level:3},{value:"\u521d\u59cb\u5316 ServletApplicationContext",id:"\u521d\u59cb\u5316-servletapplicationcontext",level:3},{value:"web.xml",id:"webxml",level:3},{value:"rootApplicationContext.xml",id:"rootapplicationcontextxml",level:3},{value:"servletApplicationContext.xml",id:"servletapplicationcontextxml",level:3},{value:"\u6ce8\u89e3\u7248",id:"\u6ce8\u89e3\u7248",level:2},{value:"\u5de5\u7a0b\u7ed3\u6784",id:"\u5de5\u7a0b\u7ed3\u6784-1",level:3},{value:"\u6838\u5fc3\u539f\u7406",id:"\u6838\u5fc3\u539f\u7406",level:3},{value:"maven-war-plugin",id:"maven-war-plugin",level:3},{value:"\u521d\u59cb\u5316\u7236\u5b50\u5bb9\u5668",id:"\u521d\u59cb\u5316\u7236\u5b50\u5bb9\u5668",level:3},{value:"RootApplicationContext \u626b\u63cf\u7684\u914d\u7f6e\u7c7b",id:"rootapplicationcontext-\u626b\u63cf\u7684\u914d\u7f6e\u7c7b",level:3},{value:"ServletApplicationContext \u626b\u63cf\u7684\u914d\u7f6e\u7c7b",id:"servletapplicationcontext-\u626b\u63cf\u7684\u914d\u7f6e\u7c7b",level:3},{value:"\u6ce8\u518c Filter",id:"\u6ce8\u518c-filter",level:3}],g={toc:m};function v(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ssm"},"SSM"),(0,i.kt)("p",null,"SpringMVC \u4e0e Spring \u6574\u5408\u662f\u4e3a\u4e86\u5206\u5de5\u660e\u786e\u3002\u4e24\u4e2a\u5bb9\u5668\u540c\u65f6\u5b58\u5728\u60c5\u51b5\u4e0b\uff0cSpring \u5bb9\u5668\u4f5c\u4e3a\u7236\u5bb9\u5668\uff0cSpringMVC \u5bb9\u5668\u4f5c\u4e3a\u5b50\u5bb9\u5668\u3002SpringMVC \u5bb9\u5668\u4e2d\u7684 Bean \u53ef\u4ee5\u5f15\u7528 Spring \u5bb9\u5668\u4e2d\u7684 Bean\uff0c\u53cd\u8fc7\u6765\u5219\u4e0d\u884c\u3002"),(0,i.kt)("h2",{id:"\u914d\u7f6e\u6587\u4ef6\u7248"},"\u914d\u7f6e\u6587\u4ef6\u7248"),(0,i.kt)("h3",{id:"\u5de5\u7a0b\u7ed3\u6784"},"\u5de5\u7a0b\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"src\n\u251c\u2500\u2500 main\n\u2502\xa0\xa0 \u251c\u2500\u2500 java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 o\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 e\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 controller\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 EmployeeController.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 mapper\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 EmployeesMapper.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 model\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 Employees.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 EmployeesExample.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 request\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 PageRequestParam.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 response\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u2514\u2500\u2500 PageResponseScheme.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 service\n\u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 EmployeeService.java\n\u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 impl\n\u2502\xa0\xa0 \u2502\xa0\xa0                 \u2514\u2500\u2500 EmployeeServiceImpl.java\n\u2502\xa0\xa0 \u251c\u2500\u2500 resources\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 generatorConfig.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 jdbc.properties\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mybatis-config.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 o\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 e\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 mapper\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 EmployeesMapper.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 rootApplicationContext.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 servletApplicationContext.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 webapp\n\u2502\xa0\xa0     \u251c\u2500\u2500 WEB-INF\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 web.xml\n\u2502\xa0\xa0     \u2514\u2500\u2500 templates\n\u2502\xa0\xa0         \u2514\u2500\u2500 index.html\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 java\n        \u2514\u2500\u2500 o\n            \u2514\u2500\u2500 e\n                \u2514\u2500\u2500 service\n                    \u2514\u2500\u2500 impl\n                        \u2514\u2500\u2500 EmployeeServiceImplTest.java\n")),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316-rootapplicationcontext"},"\u521d\u59cb\u5316 RootApplicationContext"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ContextLoaderListener"),"\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"javax.servlet.ServletContextListener"),"\u7684\u5b9e\u73b0\u7c7b\uff0c\u7528\u4e8e\u76d1\u542c ServletContext \u7684\u521b\u5efa\u4e8b\u4ef6\uff0c\u5728 ServletContext \u521b\u5efa\u4e4b\u540e\u521d\u59cb\u5316 RootApplicationContext\uff0c\u5e76\u653e\u5165 ServletContext \u57df\u4e2d\uff0c\u5bf9\u5e94\u7684\u5c5e\u6027\u540d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.web.context.WebApplicationContext.ROOT"),"\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="web.xml"',title:'"web.xml"'},"<listener>\n    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>\n</listener>\n\n<context-param>\n    <param-name>contextConfigLocation</param-name>\n    <param-value>classpath:rootApplicationContext.xml</param-value>\n</context-param>\n")),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316-servletapplicationcontext"},"\u521d\u59cb\u5316 ServletApplicationContext"),(0,i.kt)("p",null,"\u5728 DispatcherServlet \u521d\u59cb\u5316\u7684\u65f6\u5019\u4f1a\u518d\u521b\u5efa\u4e00\u4e2a Spring \u5bb9\u5668\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a ServletApplicationContext\uff0c\u5728\u5bb9\u5668\u521b\u5efa\u5b8c\u6bd5\u4e4b\u540e\u5982\u679c\u5728 ServletContext \u57df\u4e2d\u53d1\u73b0\u4e86 RootApplicationContext\uff0c\u5219\u4f1a\u5c06\u5176\u8bbe\u7f6e\u4e3a ServletApplicationContext \u7684\u7236\u5bb9\u5668\uff1b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="web.xml"',title:'"web.xml"'},"<servlet>\n    <servlet-name>DispatcherServlet</servlet-name>\n    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n    <init-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath:servletApplicationContext.xml</param-value>\n    </init-param>\n    <load-on-startup>0</load-on-startup>\n</servlet>\n\n<servlet-mapping>\n    <servlet-name>DispatcherServlet</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n")),(0,i.kt)("h3",{id:"webxml"},"web.xml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="web.xml"',title:'"web.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"\n        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"\n        version="4.0">\n\n    <filter>\n        <filter-name>CharacterEncodingFilter</filter-name>\n        <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>\n        <init-param>\n            <param-name>encoding</param-name>\n            <param-value>UTF-8</param-value>\n        </init-param>\n        <init-param>\n            <param-name>forceEncoding</param-name>\n            <param-value>true</param-value>\n        </init-param>\n    </filter>\n    <filter>\n        <filter-name>HiddenHttpMethodFilter</filter-name>\n        <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>\n    </filter>\n\n    <filter-mapping>\n        <filter-name>CharacterEncodingFilter</filter-name>\n        <url-pattern>/*</url-pattern>\n    </filter-mapping>\n    <filter-mapping>\n        <filter-name>HiddenHttpMethodFilter</filter-name>\n        <url-pattern>/*</url-pattern>\n    </filter-mapping>\n\n    <servlet>\n        <servlet-name>DispatcherServlet</servlet-name>\n        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>\n        <init-param>\n            <param-name>contextConfigLocation</param-name>\n            <param-value>classpath:servletApplicationContext.xml</param-value>\n        </init-param>\n        <load-on-startup>0</load-on-startup>\n    </servlet>\n\n    <servlet-mapping>\n        <servlet-name>DispatcherServlet</servlet-name>\n        <url-pattern>/</url-pattern>\n    </servlet-mapping>\n\n    <listener>\n        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>\n    </listener>\n\n    <context-param>\n        <param-name>contextConfigLocation</param-name>\n        <param-value>classpath:rootApplicationContext.xml</param-value>\n    </context-param>\n\n</web-app>\n')),(0,i.kt)("h3",{id:"rootapplicationcontextxml"},"rootApplicationContext.xml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="rootApplicationContext.xml"',title:'"rootApplicationContext.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xmlns:context="http://www.springframework.org/schema/context" xmlns:tx="http://www.springframework.org/schema/tx"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd   http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd http://www.springframework.org/schema/tx http://www.springframework.org/schema/tx/spring-tx.xsd">\n\n    <context:component-scan base-package="o.e.service"/>\n\n    <context:property-placeholder location="classpath:jdbc.properties"/>\n\n    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">\n        <property name="driverClassName" value="${jdbc.driver}"/>\n        <property name="url" value="${jdbc.url}"/>\n        <property name="username" value="${jdbc.username}"/>\n        <property name="password" value="${jdbc.password}"/>\n    </bean>\n\n    <tx:annotation-driven/>\n\n    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">\n        <property name="dataSource" ref="dataSource"/>\n    </bean>\n\n    <bean class="org.mybatis.spring.SqlSessionFactoryBean">\n        <property name="dataSource" ref="dataSource"/>\n        <property name="configLocation" value="classpath:mybatis-config.xml"/>\n    </bean>\n\n    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">\n        <property name="basePackage" value="o.e.mapper"/>\n    </bean>\n\n</beans>\n')),(0,i.kt)("h3",{id:"servletapplicationcontextxml"},"servletApplicationContext.xml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="servletApplicationContext.xml"',title:'"servletApplicationContext.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:mvc="http://www.springframework.org/schema/mvc"\n    xmlns:context="http://www.springframework.org/schema/context"\n    xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://www.springframework.org/schema/mvc https://www.springframework.org/schema/mvc/spring-mvc.xsd http://www.springframework.org/schema/context https://www.springframework.org/schema/context/spring-context.xsd">\n\n    <context:component-scan base-package="o.e.controller"/>\n\n    <mvc:annotation-driven/>\n\n    <mvc:default-servlet-handler/>\n\n    <mvc:view-controller path="/" view-name="index"/>\n\n    <bean id="viewResolver" class="org.thymeleaf.spring5.view.ThymeleafViewResolver">\n        \x3c!--        <property name="order" value="1"/>--\x3e\n        <property name="characterEncoding" value="UTF-8"/>\n        <property name="templateEngine">\n            <bean class="org.thymeleaf.spring5.SpringTemplateEngine">\n                <property name="templateResolver">\n                    <bean class="org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver">\n                        <property name="prefix" value="/templates/"/>\n                        <property name="suffix" value=".html"/>\n                        <property name="templateMode" value="HTML"/>\n                        <property name="characterEncoding" value="UTF-8"/>\n                    </bean>\n                </property>\n            </bean>\n        </property>\n    </bean>\n\n    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver"/>\n\n</beans>\n')),(0,i.kt)("h2",{id:"\u6ce8\u89e3\u7248"},"\u6ce8\u89e3\u7248"),(0,i.kt)("h3",{id:"\u5de5\u7a0b\u7ed3\u6784-1"},"\u5de5\u7a0b\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"src\n\u251c\u2500\u2500 main\n\u2502\xa0\xa0 \u251c\u2500\u2500 java\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 o\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 e\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 configuration\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 mvc\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 CommonsMultipartResolverConfigurer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 SpringServletContextConfigurer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 ThymeleafConfigurer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 root\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 DataSourceConfigurer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 MybatisConfigurer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 SpringRootContextConfigurer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 servlet\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u251c\u2500\u2500 ApplicationContextInitializer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u2514\u2500\u2500 FilterInitializer.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 controller\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 EmployeeController.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 mapper\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 EmployeesMapper.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u251c\u2500\u2500 model\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 Employees.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 EmployeesExample.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u251c\u2500\u2500 request\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 PageRequestParam.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0 \u2514\u2500\u2500 response\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2502\xa0\xa0     \u2514\u2500\u2500 PageResponseScheme.java\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 service\n\u2502\xa0\xa0 \u2502\xa0\xa0             \u251c\u2500\u2500 EmployeeService.java\n\u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 impl\n\u2502\xa0\xa0 \u2502\xa0\xa0                 \u2514\u2500\u2500 EmployeeServiceImpl.java\n\u2502\xa0\xa0 \u251c\u2500\u2500 resources\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 generatorConfig.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 mybatis-config.xml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 o\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 e\n\u2502\xa0\xa0 \u2502\xa0\xa0         \u2514\u2500\u2500 mapper\n\u2502\xa0\xa0 \u2502\xa0\xa0             \u2514\u2500\u2500 EmployeesMapper.xml\n\u2502\xa0\xa0 \u2514\u2500\u2500 webapp\n\u2502\xa0\xa0     \u251c\u2500\u2500 META-INF\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 services\n\u2502\xa0\xa0     \u2502\xa0\xa0     \u2514\u2500\u2500 javax.servlet.ServletContainerInitializer\n\u2502\xa0\xa0     \u2514\u2500\u2500 templates\n\u2502\xa0\xa0         \u2514\u2500\u2500 index.html\n\u2514\u2500\u2500 test\n    \u2514\u2500\u2500 java\n        \u2514\u2500\u2500 o\n            \u2514\u2500\u2500 e\n                \u2514\u2500\u2500 service\n                    \u2514\u2500\u2500 impl\n                        \u2514\u2500\u2500 EmployeeServiceImplTest.java\n")),(0,i.kt)("h3",{id:"\u6838\u5fc3\u539f\u7406"},"\u6838\u5fc3\u539f\u7406"),(0,i.kt)("p",null,"Servlet 3.0 \u4e4b\u540e\u53ef\u4ee5\u4e22\u5f03 web.xml\uff0c\u5b8c\u5168\u4f7f\u7528\u4ee3\u7801\u7684\u65b9\u5f0f\u521d\u59cb\u5316 Web \u5bb9\u5668\u3002"),(0,i.kt)("p",null,"\u5728 ServletContext \u521d\u59cb\u5316\u4e4b\u540e\uff0cWeb \u5bb9\u5668\u4f1a\u81ea\u52a8\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"javax.servlet.ServletContainerInitializer"),"\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u8bbe\u7f6e\u76d1\u542c\u5668\u3001\u8fc7\u6ee4\u5668\u6216\u8005\u5b8c\u6210\u5176\u5b83\u64cd\u4f5c\uff0c\u6bd4\u5982\u521d\u59cb\u5316 Spring \u5bb9\u5668\u3002"),(0,i.kt)("p",null,"\u8be5\u5b9e\u73b0\u7c7b\u7684\u53d1\u73b0\u65b9\u5f0f\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceLoader"),"\u5b8c\u6210\u7684\uff0c\u6240\u4ee5\u5728\u4f60\u5b9e\u73b0\u8be5\u63a5\u53e3\u4e4b\u540e\uff0c\u8fd8\u9700\u5c06\u5b9e\u73b0\u7c7b\u7684\u5168\u9650\u5b9a\u7c7b\u540d\u5199\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"/META-INF/services/javax.servlet.ServletContainerInitializer"),"\u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("h3",{id:"maven-war-plugin"},"maven-war-plugin"),(0,i.kt)("p",null,"maven-war-plugin \u7684\u7248\u672c\u8981\u9ad8\u4e8e 3\uff0c\u4e0d\u7136\u5728\u6784\u5efa war \u4ea7\u7269\u7684\u65f6\u5019\u4f1a\u63d0\u793a\u7f3a\u5c11 web.xml \u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-war-plugin</artifactId>\n    <version>3.3.2</version>\n</plugin>\n")),(0,i.kt)("h3",{id:"\u521d\u59cb\u5316\u7236\u5b50\u5bb9\u5668"},"\u521d\u59cb\u5316\u7236\u5b50\u5bb9\u5668"),(0,i.kt)("p",null,"\u901a\u8fc7\u7ee7\u627f",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer"),"\u6765\u5b8c\u6210\u7236\u5b50\u5bb9\u5668\u7684\u521d\u59cb\u5316\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u8be5\u7c7b\u5b9e\u73b0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.web.WebApplicationInitializer"),"\u63a5\u53e3\uff0c\u8be5\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\u4f1a\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.web.SpringServletContainerInitializer"),"\u4e2d\u8fdb\u884c\u8c03\u7528\u3002"),(0,i.kt)("p",null,"\u4e3a\u4ec0\u4e48",(0,i.kt)("inlineCode",{parentName:"p"},"SpringServletContainerInitializer"),"\u4f1a\u88ab\u8c03\u7528\u5462\uff0c\u56e0\u4e3a\u8be5\u7c7b\u7684\u5168\u9650\u5b9a\u7c7b\u540d\u88ab\u5199\u5165\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"/spring-web-*.jar/META-INF/services/javax.servlet.ServletContainerInitializer"),"\u6587\u4ef6\u4e2d\uff0c\u6839\u636e Servlet \u6807\u51c6\uff0cWeb \u5bb9\u5668\u4f1a\u901a\u8fc7 ServiceLoader \u6765\u8c03\u7528\u8be5\u7c7b\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SpringServletContainerInitializer"),"\u7c7b\u5b9e\u73b0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"javax.servlet.ServletContainerInitializer"),"\u63a5\u53e3\uff0c\u5e76\u4e14\u5b50\u7c7b\u4e2d\u4f7f\u7528\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"@HandlesTypes(WebApplicationInitializer.class)"),"\u6ce8\u89e3\uff0c\u5728 ServletContext \u521d\u59cb\u5316\u5b8c\u6bd5\u4e4b\u540e\uff0cWeb \u5bb9\u5668\u4f1a\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplicationInitializer"),"\u7684\u5b9e\u73b0\u7c7b\u90fd\u6ce8\u5165\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"SpringServletContainerInitializer#onStartup()"),"\u65b9\u6cd5\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Set<Class<?>> webAppInitializerClasses"),"\u53c2\u6570\u4e2d\uff0c\u6b64\u65b9\u6cd5\u4f1a\u8c03\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplicationInitializer#onStartup()"),"\u65b9\u6cd5\uff0c\u4ece\u800c\u5b8c\u6210\u7236\u5b50\u5bb9\u5668\u7684\u521d\u59cb\u5316\u8fc7\u7a0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ApplicationContextInitializer.java"',title:'"ApplicationContextInitializer.java"'},'package o.e.configuration.servlet;\n\npublic class ApplicationContextInitializer extends AbstractAnnotationConfigDispatcherServletInitializer {\n\n    /**\n     * \u6307\u5b9a Spring \u914d\u7f6e\u7c7b\n     */\n    @Override\n    protected Class<?>[] getRootConfigClasses() {\n        return new Class[]{SpringRootContextConfigurer.class};\n    }\n\n    /**\n     * \u6307\u5b9a Spring MVC \u914d\u7f6e\u7c7b\n     */\n    @Override\n    protected Class<?>[] getServletConfigClasses() {\n        return new Class[]{SpringServletContextConfigurer.class};\n    }\n\n    /**\n     * \u8bbe\u7f6e DispatcherServlet \u7684 URL \u6620\u5c04\n     */\n    @Override\n    protected String[] getServletMappings() {\n        return new String[]{"/"};\n    }\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SpringRootContextConfigurer.class"',title:'"SpringRootContextConfigurer.class"'},'package o.e.configuration.mvc;\n\n@ComponentScan({\n        "o.e.configuration.root",\n        "o.e.service"\n})\n@Configuration\npublic class SpringRootContextConfigurer {\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SpringServletContextConfigurer.class"',title:'"SpringServletContextConfigurer.class"'},'package o.e.configuration.mvc;\n\n@ComponentScan({"o.e.configuration.mvc", "o.e.controller"})\n@EnableWebMvc\n@Configuration\npublic class SpringServletContextConfigurer implements WebMvcConfigurer {\n\n    /**\n     * \u4f7f\u7528\u9ed8\u8ba4\u7684 servlet \u5904\u7406\u9759\u6001\u8d44\u6e90\n     */\n    @Override\n    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {\n        configurer.enable();\n    }\n\n    /**\n     * \u914d\u7f6e\u89c6\u56fe\u63a7\u5236\u5668\n     */\n    @Override\n    public void addViewControllers(ViewControllerRegistry registry) {\n        registry.addViewController("/").setViewName("index");\n    }\n\n}\n')),(0,i.kt)("h3",{id:"rootapplicationcontext-\u626b\u63cf\u7684\u914d\u7f6e\u7c7b"},"RootApplicationContext \u626b\u63cf\u7684\u914d\u7f6e\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="DataSourceConfigurer.java"',title:'"DataSourceConfigurer.java"'},'package o.e.configuration.root;\n\n@Configuration\npublic class DataSourceConfigurer {\n\n    @Bean(destroyMethod = "close")\n    public DruidDataSource dataSource() {\n        DruidDataSource druidDataSource = new DruidDataSource();\n        druidDataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");\n        druidDataSource.setUrl("jdbc:mysql:///atguigudb");\n        druidDataSource.setUsername("root");\n        druidDataSource.setPassword("root");\n        return druidDataSource;\n    }\n\n    @Bean\n    public DataSourceTransactionManager dataSourceTransactionManager(DataSource dataSource) {\n        return new DataSourceTransactionManager(dataSource);\n    }\n\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MybatisConfigurer.java"',title:'"MybatisConfigurer.java"'},'package o.e.configuration.root;\n\n@Configuration\npublic class MybatisConfigurer {\n\n    @Bean\n    public SqlSessionFactoryBean sqlSessionFactoryBean(DataSource dataSource) {\n        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();\n        factoryBean.setConfigLocation(new ClassPathResource("mybatis-config.xml"));\n        factoryBean.setDataSource(dataSource);\n        return factoryBean;\n    }\n\n    @Bean\n    public MapperScannerConfigurer mapperScannerConfigurer() {\n        MapperScannerConfigurer configurer = new MapperScannerConfigurer();\n        configurer.setBasePackage("o.e.mapper");\n        return configurer;\n    }\n\n}\n')),(0,i.kt)("h3",{id:"servletapplicationcontext-\u626b\u63cf\u7684\u914d\u7f6e\u7c7b"},"ServletApplicationContext \u626b\u63cf\u7684\u914d\u7f6e\u7c7b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="CommonsMultipartResolverConfigurer.java"',title:'"CommonsMultipartResolverConfigurer.java"'},"package o.e.configuration.mvc;\n\n@Configuration\npublic class CommonsMultipartResolverConfigurer {\n\n    @Bean\n    public CommonsMultipartResolver commonsMultipartResolver() {\n        return new CommonsMultipartResolver();\n    }\n\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ThymeleafConfigurer.java"',title:'"ThymeleafConfigurer.java"'},'package o.e.configuration.mvc;\n\n@Configuration\npublic class ThymeleafConfigurer {\n\n    @Bean\n    public ITemplateResolver templateResolver() {\n        WebApplicationContext applicationContext = ContextLoader.getCurrentWebApplicationContext();\n        ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver(applicationContext.getServletContext());\n        templateResolver.setPrefix("/templates/");\n        templateResolver.setSuffix(".html");\n        templateResolver.setCharacterEncoding("UTF-8");\n        templateResolver.setTemplateMode(TemplateMode.HTML);\n        return templateResolver;\n    }\n\n    @Bean\n    public SpringTemplateEngine templateEngine(ITemplateResolver templateResolver) {\n        SpringTemplateEngine templateEngine = new SpringTemplateEngine();\n        templateEngine.setTemplateResolver(templateResolver);\n        return templateEngine;\n    }\n\n    @Bean\n    public ViewResolver viewResolver(SpringTemplateEngine templateEngine) {\n        ThymeleafViewResolver viewResolver = new ThymeleafViewResolver();\n        viewResolver.setCharacterEncoding("UTF-8");\n        viewResolver.setTemplateEngine(templateEngine);\n        return viewResolver;\n    }\n\n}\n')),(0,i.kt)("h3",{id:"\u6ce8\u518c-filter"},"\u6ce8\u518c Filter"),(0,i.kt)("p",null,"Listener \u548c Servlet \u4e5f\u53ef\u4ee5\u901a\u8fc7\u6b64\u65b9\u6cd5\u6ce8\u518c\u3002"),(0,i.kt)("p",null,"\u4e0d\u8981\u5fd8\u4e86\u9700\u8981\u628a\u6b64\u7c7b\u7684\u5168\u9650\u5b9a\u7c7b\u540d\u5199\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"/META-INF/services/javax.servlet.ServletContainerInitializer"),"\u6587\u4ef6\u4e2d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="FilterInitializer.java"',title:'"FilterInitializer.java"'},'package o.e.configuration.servlet;\n\npublic class FilterInitializer implements ServletContainerInitializer {\n\n    private Map<Filter, String> filterStringMap = new LinkedHashMap<>();\n\n    public FilterInitializer() {\n        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter("UTF-8", true);\n        filterStringMap.put(characterEncodingFilter, "/*");\n\n        HiddenHttpMethodFilter hiddenHttpMethodFilter = new HiddenHttpMethodFilter();\n        filterStringMap.put(hiddenHttpMethodFilter, "/*");\n    }\n\n    @Override\n    public void onStartup(Set<Class<?>> c, ServletContext ctx) throws ServletException {\n        for (Map.Entry<Filter, String> entry : filterStringMap.entrySet()) {\n            ctx.addFilter(entry.getClass().getSimpleName(), entry.getKey())\n                    .addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, entry.getValue());\n        }\n    }\n\n}\n')))}v.isMDXComponent=!0}}]);