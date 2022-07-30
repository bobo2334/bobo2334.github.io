# Thymeleaf

## 参考资料

- [Thymeleaf](https://www.thymeleaf.org/)
- [30-尚硅谷-servlet-thymeleaf 快速入门\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1AS4y177xJ?p=30)
- [第八章 Thymeleaf | 代码重工](https://heavy_code_industry.gitee.io/code_heavy_industry/pro001-javaweb/lecture/chapter08/)

## Thymeleaf 简介

Thymeleaf 是服务端模板技术，可用于替换 JSP。

## 配置 Thymeleaf

```java
@WebServlet(name = "EmployeeViewServlet", value = "/employee.html", loadOnStartup = 0)
public class EmployeeViewServlet extends HttpServlet {

    private TemplateEngine templateEngine;

    @Override
    public void init() throws ServletException {
        ServletContextTemplateResolver resolver = new ServletContextTemplateResolver(getServletContext());
        resolver.setPrefix("/WEB-INF/view/");
        resolver.setSuffix(".html");
        templateEngine = new TemplateEngine();
        templateEngine.setTemplateResolver(resolver);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            List<Employee> list = GenericQuery.getList(Employee.class, "select * from employees");
            req.setAttribute("employees", list);
        } catch (SQLException e) {
            e.printStackTrace();
            req.setAttribute("err", e.getMessage());
        }
        templateEngine.process("employee", new WebContext(req, resp, getServletContext()), resp.getWriter());
    }

}
```
