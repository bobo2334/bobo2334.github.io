"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4371],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=l,y=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(83117),l=n(80102),a=(n(67294),n(3905)),o=["components"],i={},p="Thymeleaf",c={unversionedId:"notes/java/thymeleaf",id:"notes/java/thymeleaf",title:"Thymeleaf",description:"\u53c2\u8003\u8d44\u6599",source:"@site/docs/notes/java/thymeleaf.md",sourceDirName:"notes/java",slug:"/notes/java/thymeleaf",permalink:"/docs/notes/java/thymeleaf",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSM",permalink:"/docs/notes/java/ssm"},next:{title:"Linux",permalink:"/docs/notes/linux/"}},s={},u=[{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2},{value:"Thymeleaf \u7b80\u4ecb",id:"thymeleaf-\u7b80\u4ecb",level:2},{value:"\u914d\u7f6e Thymeleaf",id:"\u914d\u7f6e-thymeleaf",level:2},{value:"\u7ea6\u675f",id:"\u7ea6\u675f",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"thymeleaf"},"Thymeleaf"),(0,a.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.thymeleaf.org/"},"Thymeleaf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1AS4y177xJ?p=30"},"30-\u5c1a\u7845\u8c37-servlet-thymeleaf \u5feb\u901f\u5165\u95e8","_","\u54d4\u54e9\u54d4\u54e9","_","bilibili")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://heavy_code_industry.gitee.io/code_heavy_industry/pro001-javaweb/lecture/chapter08/"},"\u7b2c\u516b\u7ae0 Thymeleaf | \u4ee3\u7801\u91cd\u5de5"))),(0,a.kt)("h2",{id:"thymeleaf-\u7b80\u4ecb"},"Thymeleaf \u7b80\u4ecb"),(0,a.kt)("p",null,"Thymeleaf \u662f\u670d\u52a1\u7aef\u6a21\u677f\u6280\u672f\uff0c\u53ef\u7528\u4e8e\u66ff\u6362 JSP\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e-thymeleaf"},"\u914d\u7f6e Thymeleaf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@WebServlet(name = "EmployeeViewServlet", value = "/employee.html", loadOnStartup = 0)\npublic class EmployeeViewServlet extends HttpServlet {\n\n    private TemplateEngine templateEngine;\n\n    @Override\n    public void init() throws ServletException {\n        ServletContextTemplateResolver resolver = new ServletContextTemplateResolver(getServletContext());\n        resolver.setPrefix("/WEB-INF/view/");\n        resolver.setSuffix(".html");\n        templateEngine = new TemplateEngine();\n        templateEngine.setTemplateResolver(resolver);\n    }\n\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        try {\n            List<Employee> list = GenericQuery.getList(Employee.class, "select * from employees");\n            req.setAttribute("employees", list);\n        } catch (SQLException e) {\n            e.printStackTrace();\n            req.setAttribute("err", e.getMessage());\n        }\n        templateEngine.process("employee", new WebContext(req, resp, getServletContext()), resp.getWriter());\n    }\n\n}\n')),(0,a.kt)("h2",{id:"\u7ea6\u675f"},"\u7ea6\u675f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en" xmlns:th="http://www.thymeleaf.org">\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n</head>\n<body>\n\n</body>\n</html>\n')))}f.isMDXComponent=!0}}]);