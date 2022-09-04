# Spring Boot 原理

## 自动配置原理

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

## 自定义 starter

// TODO
