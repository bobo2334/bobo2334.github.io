"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9579],{3905:function(e,t,r){r.d(t,{Zo:function(){return v},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},v=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,v=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||l;return r?n.createElement(m,i(i({ref:t},v),{},{components:r})):n.createElement(m,i({ref:t},v))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},75484:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),i=["components"],o={},p="Java Web",s={unversionedId:"notes/java/java-web",id:"notes/java/java-web",title:"Java Web",description:"\u53c2\u8003\u8d44\u6599",source:"@site/docs/notes/java/java-web.md",sourceDirName:"notes/java",slug:"/notes/java/java-web",permalink:"/docs/notes/java/java-web",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/notes/java/"},next:{title:"JDBC",permalink:"/docs/notes/java/jdbc"}},v={},c=[{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2},{value:"Tomcat",id:"tomcat",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"Servlet",id:"servlet",level:2},{value:"Servlet \u7248\u672c",id:"servlet-\u7248\u672c",level:3},{value:"Servlet \u57fa\u672c\u4f7f\u7528",id:"servlet-\u57fa\u672c\u4f7f\u7528",level:3},{value:"Servlet \u751f\u547d\u5468\u671f",id:"servlet-\u751f\u547d\u5468\u671f",level:3},{value:"Application",id:"application",level:3},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Session",id:"session",level:3},{value:"\u8f6c\u53d1",id:"\u8f6c\u53d1",level:3},{value:"\u91cd\u5b9a\u5411",id:"\u91cd\u5b9a\u5411",level:3},{value:"Filter",id:"filter",level:2},{value:"Filter \u7b80\u4ecb",id:"filter-\u7b80\u4ecb",level:3},{value:"Filter \u57fa\u672c\u4f7f\u7528",id:"filter-\u57fa\u672c\u4f7f\u7528",level:3},{value:"web.xml \u4e2d\u914d\u7f6e Filter",id:"webxml-\u4e2d\u914d\u7f6e-filter",level:4},{value:"\u6ce8\u89e3\u914d\u7f6e Filter",id:"\u6ce8\u89e3\u914d\u7f6e-filter",level:4}],u={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"java-web"},"Java Web"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1AS4y177xJ"},"\u5c1a\u7845\u8c37\u4e28 2022 \u7248 JavaWeb \u6559\u7a0b (\u5168\u65b0\u6280\u672f\u6808\uff0c\u5168\u7a0b\u5b9e\u6218)","_","\u54d4\u54e9\u54d4\u54e9","_","bilibili")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://heavy_code_industry.gitee.io/code_heavy_industry/pro001-javaweb/"},"JavaWeb | \u4ee3\u7801\u91cd\u5de5")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.wolai.com/518LcmX2Ruo7c7SKaVbrNz"},"Web \u9636\u6bb5 [\u8fd8\u6ca1\u5f00\u59cb\u5199]"))),(0,l.kt)("h2",{id:"tomcat"},"Tomcat"),(0,l.kt)("p",null,"Servlet \u5bb9\u5668\uff0c\u5b9e\u73b0\u4e86 Servlet \u6807\u51c6\u3002"),(0,l.kt)("h3",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,l.kt)("h2",{id:"servlet"},"Servlet"),(0,l.kt)("h3",{id:"servlet-\u7248\u672c"},"Servlet \u7248\u672c"),(0,l.kt)("p",null,"Servlet \u5c5e\u4e8e Java EE \u6807\u51c6\uff0c\u7528\u4e8e\u4f01\u4e1a\u7ea7 Web \u5f00\u53d1\uff0c\u540e\u6539\u540d\u4e3a Jakarta EE\u3002"),(0,l.kt)("p",null,"Servlet\u3001Tomcat \u548c Java \u7248\u672c\u9009\u62e9\u8bf7\u53c2\u8003 ",(0,l.kt)("em",{parentName:"p"},"Tomcat \u7f51\u7ad9")," ",(0,l.kt)("sup",{parentName:"p",id:"fnref-1"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002\u5173\u4e8e Servlet \u540d\u79f0\u5386\u53f2\u53ca\u7248\u672c\u5386\u53f2\u53ef\u4ee5\u53c2\u8003\u5176 ",(0,l.kt)("em",{parentName:"p"},"\u7ef4\u57fa\u767e\u79d1\u9875\u9762")," ",(0,l.kt)("sup",{parentName:"p",id:"fnref-2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u3002"),(0,l.kt)("p",null,"4.0.1 \u53ca\u4e4b\u524d\u4f7f\u7528\u6b64 Maven \u5750\u6807\uff0c\u642d\u914d Tomcat 9 \u53ca\u4e4b\u524d\u7248\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/javax.servlet/javax.servlet-api --\x3e\n<dependency>\n    <groupId>javax.servlet</groupId>\n    <artifactId>javax.servlet-api</artifactId>\n    <version>4.0.1</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,l.kt)("p",null,"4.0.2 \u53ca\u4e4b\u540e\u4f7f\u7528\u6b64\u5750\u6807\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/jakarta.servlet/jakarta.servlet-api --\x3e\n<dependency>\n    <groupId>jakarta.servlet</groupId>\n    <artifactId>jakarta.servlet-api</artifactId>\n    <version>4.0.4</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,l.kt)("p",null,"5.0 \u4e4b\u540e\u4f7f\u7528\u6b64\u5750\u6807\uff0c\u642d\u914d Tomcat 10 \u4f7f\u7528\u3002\u4ece 5 \u5f00\u59cb\u540e\u5305\u540d\u6539\u53d8\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- https://mvnrepository.com/artifact/jakarta.servlet/jakarta.servlet-api --\x3e\n<dependency>\n    <groupId>jakarta.servlet</groupId>\n    <artifactId>jakarta.servlet-api</artifactId>\n    <version>6.0.0</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,l.kt)("h3",{id:"servlet-\u57fa\u672c\u4f7f\u7528"},"Servlet \u57fa\u672c\u4f7f\u7528"),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e00\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"web.xml"),"\u6587\u4ef6\u914d\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class EchoServlet extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {\n        req.setCharacterEncoding("UTF-8");\n        resp.setCharacterEncoding("UTF-8");\n        Map<String, String[]> parameterMap = req.getParameterMap();\n        PrintWriter writer = resp.getWriter();\n        parameterMap.forEach((s, strings) -> {\n            String params = String.format("%s: %s<br/>", s, String.join(", ", strings));\n            System.out.println(params);\n            writer.write(params);\n            writer.flush();\n        });\n    }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<!DOCTYPE web-app PUBLIC\n        "-//Sun Microsystems, Inc.//DTD Web Application 2.3//EN"\n        "http://java.sun.com/dtd/web-app_2_3.dtd" >\n<web-app>\n    <servlet>\n        <servlet-name>EchoServlet</servlet-name>\n        <servlet-class>o.e.servlet.EchoServlet</servlet-class>\n        <load-on-startup>1</load-on-startup>\n    </servlet>\n    <servlet-mapping>\n        <servlet-name>EchoServlet</servlet-name>\n        <url-pattern>/echo</url-pattern>\n    </servlet-mapping>\n</web-app>\n')),(0,l.kt)("p",null,"\u65b9\u5f0f\u4e8c\uff0c\u4f7f\u7528\u6ce8\u89e3\u914d\u7f6e\uff0c\u4ece Servlet 3.0 \u5f00\u59cb\u652f\u6301\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@WebServlet(name = "EmployeeServlet", value = "/employee", loadOnStartup = 1)\npublic class EmployeeServlet extends HttpServlet {\n    @Override\n    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n        // ...\n    }\n}\n')),(0,l.kt)("h3",{id:"servlet-\u751f\u547d\u5468\u671f"},"Servlet \u751f\u547d\u5468\u671f"),(0,l.kt)("p",null,"\u6bcf\u4e2a Servlet \u90fd\u662f\u5355\u4f8b\u7684\uff0c\u7531\u5bb9\u5668\u901a\u8fc7\u53cd\u5c04\u8fdb\u884c\u521b\u5efa\uff0c\u6240\u4ee5\u8981\u6c42\u6bcf\u4e2a Servlet \u7c7b\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"public"),"\u4fee\u9970\u7684\u65e0\u53c2\u6570\u6784\u9020\u65b9\u6cd5\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u65f6\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"init()"),"\u65b9\u6cd5\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u7b2c\u4e00\u6b21\u6536\u5230\u8bf7\u6c42\u65f6\u521d\u59cb\u5316\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"li"},"loadOnStartup"),"\u5728\u5bb9\u5668\u542f\u52a8\u540e\u7acb\u5373\u521d\u59cb\u5316\uff0c\u8be5\u503c\u6700\u5c0f\u4e3a 0\uff0c\u8d8a\u5c0f\u8868\u793a\u521d\u59cb\u5316\u987a\u5e8f\u8d8a\u9760\u524d\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6536\u5230\u5ba2\u6237\u7aef\u8bf7\u6c42\u65f6\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"service()"),"\u65b9\u6cd5\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u9500\u6bc1\u4e4b\u524d\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"destory()"),"\u65b9\u6cd5\u3002")),(0,l.kt)("h3",{id:"application"},"Application"),(0,l.kt)("p",null,"\u6574\u4e2a Servlet \u8303\u56f4\u7684\u4f5c\u7528\u57df\uff0c\u53ef\u4ee5\u7528\u6765\u5171\u4eab\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ServletContext servletContext = getServletContext();\nservletContext.setAttribute("a", "a");\n')),(0,l.kt)("h3",{id:"request"},"Request"),(0,l.kt)("p",null,"\u8bf7\u6c42\u5c01\u88c5\u7684\u5bf9\u8c61\u3002\u5305\u542b\u4e86\u5ba2\u6237\u7aef\u53d1\u6765\u7684\u4fe1\u606f\u3002\u5176\u4e2d\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u6570\u636e\uff0c\u7528\u4e8e\u5728\u5904\u7406\u8bf7\u6c42\u7684\u5404\u4e2a\u9636\u6bb5\u5171\u4eab\u6570\u636e\u3002"),(0,l.kt)("h3",{id:"response"},"Response"),(0,l.kt)("p",null,"\u54cd\u5e94\u5c01\u88c5\u7684\u5bf9\u8c61\uff0c\u7528\u4e8e\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002"),(0,l.kt)("h3",{id:"session"},"Session"),(0,l.kt)("p",null,"Session \u662f\u670d\u52a1\u7aef\u4f1a\u8bdd\u6280\u672f\uff0c\u4f9d\u8d56 Cookie \u8fd0\u884c\uff0c\u5728 Cookie \u4e2d\u7684\u540d\u5b57\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"JSESSIONID"),"\u3002\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u83b7\u53d6\u6216\u8005\u521b\u5efa\u4e00\u4e2a Session\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"HttpSession session = request.getSession(true);\n")),(0,l.kt)("p",null,"Session \u4e2d\u53ef\u4ee5\u4fdd\u5b58\u6570\u636e\uff0c\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u4f1a\u8bdd\u4e2d\u8fdb\u884c\u8bbf\u95ee\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String s = reader.readLine();\nsession.setAttribute("value", s);\n\nObject value = session.getAttribute("value");\nwriter.write((String) value);\n')),(0,l.kt)("h3",{id:"\u8f6c\u53d1"},"\u8f6c\u53d1"),(0,l.kt)("p",null,"\u8f6c\u53d1\u53d1\u751f\u5728\u670d\u52a1\u5668\u5185\u90e8\uff0c\u5ba2\u6237\u7aef\u65e0\u611f\u77e5\u3002\u7528\u4e8e\u5c06\u4e00\u4e2a Servlet \u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u5bf9\u8c61\u4ea4\u7ed9\u5176\u5b83 Servlet \u5904\u7406\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'req.getRequestDispatcher("/session").forward(req, resp);\n')),(0,l.kt)("p",null,"\u8f6c\u53d1\u4e0d\u4f1a\u8986\u76d6 ContextRoot \u8def\u5f84\u3002"),(0,l.kt)("h3",{id:"\u91cd\u5b9a\u5411"},"\u91cd\u5b9a\u5411"),(0,l.kt)("p",null,"\u91cd\u5b9a\u5411\u662f\u7ed9\u5ba2\u6237\u7aef\u53d1\u9001 302 \u54cd\u5e94\u6d88\u606f\uff0c\u544a\u8bc9\u5ba2\u6237\u7aef\u53bb\u8bf7\u6c42\u53e6\u4e00\u4e2a\u5730\u5740\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"301\uff0c\u6c38\u4e45\u91cd\u5b9a\u5411"),(0,l.kt)("li",{parentName:"ul"},"302\uff0c\u4e34\u65f6\u91cd\u5b9a\u5411")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'resp.sendRedirect("employee");\n')),(0,l.kt)("p",null,"\u91cd\u5b9a\u5411\u4f1a\u8986\u76d6 ContextRoot \u8def\u5f84\u3002"),(0,l.kt)("h2",{id:"filter"},"Filter"),(0,l.kt)("h3",{id:"filter-\u7b80\u4ecb"},"Filter \u7b80\u4ecb"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u62e6\u622a\u3002\u8fc7\u6ee4\u5668\u4e4b\u6240\u4ee5\u80fd\u591f\u5bf9\u8bf7\u6c42\u8fdb\u884c\u9884\u5904\u7406\uff0c\u5173\u952e\u662f\u5bf9\u8bf7\u6c42\u8fdb\u884c\u62e6\u622a\uff0c\u628a\u8bf7\u6c42\u62e6\u622a\u4e0b\u6765\u624d\u80fd\u591f\u505a\u540e\u7eed\u7684\u64cd\u4f5c\u3002\u800c\u4e14\u5bf9\u4e8e\u4e00\u4e2a\u5177\u4f53\u7684\u8fc7\u6ee4\u5668\uff0c\u5b83\u5fc5\u987b\u660e\u786e\u5b83\u8981\u62e6\u622a\u7684\u8bf7\u6c42\uff0c\u800c\u4e0d\u662f\u6240\u6709\u8bf7\u6c42\u90fd\u62e6\u622a\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u8fc7\u6ee4\u3002\u6839\u636e\u4e1a\u52a1\u529f\u80fd\u5b9e\u9645\u7684\u9700\u6c42\uff0c\u770b\u770b\u5728\u628a\u8bf7\u6c42\u62e6\u622a\u5230\u4e4b\u540e\uff0c\u9700\u8981\u505a\u4ec0\u4e48\u68c0\u67e5\u6216\u4ec0\u4e48\u64cd\u4f5c\uff0c\u5199\u5bf9\u5e94\u7684\u4ee3\u7801\u5373\u53ef\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u653e\u884c\u3002\u8fc7\u6ee4\u5668\u5b8c\u6210\u81ea\u5df1\u7684\u4efb\u52a1\u6216\u8005\u662f\u68c0\u6d4b\u5230\u5f53\u524d\u8bf7\u6c42\u7b26\u5408\u8fc7\u6ee4\u89c4\u5219\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06\u8bf7\u6c42\u653e\u884c\u3002\u6240\u8c13\u653e\u884c\uff0c\u5c31\u662f\u8ba9\u8bf7\u6c42\u7ee7\u7eed\u53bb\u8bbf\u95ee\u5b83\u539f\u672c\u8981\u8bbf\u95ee\u7684\u8d44\u6e90\u3002")),(0,l.kt)("h3",{id:"filter-\u57fa\u672c\u4f7f\u7528"},"Filter \u57fa\u672c\u4f7f\u7528"),(0,l.kt)("h4",{id:"webxml-\u4e2d\u914d\u7f6e-filter"},"web.xml \u4e2d\u914d\u7f6e Filter"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Filter \u914d\u7f6e\u8981\u5199\u5728 Servlet \u914d\u7f6e\u4e4b\u524d\uff1b"),(0,l.kt)("li",{parentName:"ol"},"Filter \u7684\u987a\u5e8f\u6309\u7167\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4e66\u5199\u7684\u987a\u5e8f\u6267\u884c\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<web-app>\n    <filter>\n        <filter-name>XmlFilter</filter-name>\n        <filter-class>o.e.filter.XmlFilter</filter-class>\n    </filter>\n    <filter-mapping>\n        <filter-name>XmlFilter</filter-name>\n        <url-pattern>*</url-pattern>\n    </filter-mapping>\n\n    <servlet>\n        <servlet-name>EchoServlet</servlet-name>\n        <servlet-class>o.e.servlet.EchoServlet</servlet-class>\n        <load-on-startup>1</load-on-startup>\n    </servlet>\n    <servlet-mapping>\n        <servlet-name>EchoServlet</servlet-name>\n        <url-pattern>/echo</url-pattern>\n    </servlet-mapping>\n</web-app>\n")),(0,l.kt)("h4",{id:"\u6ce8\u89e3\u914d\u7f6e-filter"},"\u6ce8\u89e3\u914d\u7f6e Filter"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Filter \u7684\u987a\u5e8f\u6309\u7167\u5168\u7c7b\u540d\u6392\u5e8f\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@WebFilter("*")\npublic class HelloFilter implements Filter {\n\n    @Override\n    public void init(FilterConfig filterConfig) throws ServletException {\n        log.debug("HelloFilter \u521d\u59cb\u5316");\n    }\n\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {\n        log.debug("HelloFilter \u524d");\n        chain.doFilter(request, response);\n        log.debug("HelloFilter \u540e");\n    }\n\n    @Override\n    public void destroy() {\n        log.debug("HelloFilter \u9500\u6bc1");\n    }\n\n}\n')),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1"},(0,l.kt)("a",{parentName:"li",href:"https://tomcat.apache.org/whichversion.html"},"Apache Tomcat\xae - Which Version Do I Want?"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2"},(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Jakarta_Servlet#History"},"Jakarta Servlet - Wikipedia"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);