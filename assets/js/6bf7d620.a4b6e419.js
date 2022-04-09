"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4765],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6138:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],s={date:new Date("2017-01-14T00:00:00.000Z"),tags:["mysql"]},i="\u91cd\u7f6e MySQL root \u5bc6\u7801",u={permalink:"/blog/reset-mysql-root-password",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/reset-mysql-root-password.md",source:"@site/blog/reset-mysql-root-password.md",title:"\u91cd\u7f6e MySQL root \u5bc6\u7801",description:"\u524d\u8a00",date:"2017-01-14T00:00:00.000Z",formattedDate:"2017\u5e741\u670814\u65e5",tags:[{label:"mysql",permalink:"/blog/tags/mysql"}],truncated:!0,authors:[],frontMatter:{date:"2017-01-14T00:00:00.000Z",tags:["mysql"]},prevItem:{title:"\u83b7\u53d6\u5929\u7ffc\u5149\u732b F412 \u8d85\u7ea7\u7ba1\u7406\u5458\u5e10\u53f7\u5bc6\u7801",permalink:"/blog/get-super-admin-password-of-f412"},nextItem:{title:"CentOS \u7f51\u7edc\u914d\u7f6e",permalink:"/blog/configuring-centos-network"}},p={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u65b9\u6cd5\u4e00\uff1a\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u65b9\u6cd5\u4e00\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u5f00\u542f\u5b89\u5168\u6a21\u5f0f",id:"\u5f00\u542f\u5b89\u5168\u6a21\u5f0f",level:3},{value:"\u91cd\u65b0\u542f\u52a8 MySQL",id:"\u91cd\u65b0\u542f\u52a8-mysql",level:3},{value:"\u4fee\u6539\u5bc6\u7801",id:"\u4fee\u6539\u5bc6\u7801",level:3},{value:"\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",id:"\u5173\u95ed\u5b89\u5168\u6a21\u5f0f",level:3},{value:"\u5b8c\u6210",id:"\u5b8c\u6210",level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012\u53c2\u6570",id:"\u65b9\u6cd5\u4e8c\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012\u53c2\u6570",level:2},{value:"\u505c\u6b62 MySQL",id:"\u505c\u6b62-mysql",level:3},{value:"\u4ee5\u4e0d\u68c0\u67e5\u6743\u9650\u7684\u65b9\u5f0f\u542f\u52a8 MySQL",id:"\u4ee5\u4e0d\u68c0\u67e5\u6743\u9650\u7684\u65b9\u5f0f\u542f\u52a8-mysql",level:3},{value:"\u4fee\u6539\u5bc6\u7801",id:"\u4fee\u6539\u5bc6\u7801-1",level:3},{value:"\u5b8c\u6210",id:"\u5b8c\u6210-1",level:3}],m={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u7684\u6570\u636e\u5e93\u4e2d\u5b58\u6709\u91cd\u8981\u6570\u636e\uff0c\u8bf7\u5728\u4fdd\u8bc1\u673a\u5668\u79bb\u7ebf\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u4ee5\u4e0b\u7684\u64cd\u4f5c\uff0c\u6700\u7a33\u59a5\u7684\u529e\u6cd5\u5c31\u662f\u62d4\u6389\u7f51\u7ebf\uff01"),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e00\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u65b9\u6cd5\u4e00\uff1a\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("h3",{id:"\u5f00\u542f\u5b89\u5168\u6a21\u5f0f"},"\u5f00\u542f\u5b89\u5168\u6a21\u5f0f"),(0,l.kt)("p",null,"\u4fee\u6539 MySQL \u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vi /etc/my.cnf\n")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"[mysqld]"),"\u6bb5\u91cc\u52a0\u4e0a\u4e00\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"skip-grant-tables"),"\uff0c\u4fdd\u5b58\u5e76\u9000\u51fa\u3002"),(0,l.kt)("h3",{id:"\u91cd\u65b0\u542f\u52a8-mysql"},"\u91cd\u65b0\u542f\u52a8 MySQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"service mysqld restart\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u5bc6\u7801"},"\u4fee\u6539\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -uroot\nuse mysql;\nupdate user set Password=password('newpass') where User='root';\nflush privileges;\nexit;\n")),(0,l.kt)("h3",{id:"\u5173\u95ed\u5b89\u5168\u6a21\u5f0f"},"\u5173\u95ed\u5b89\u5168\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5c06\u7b2c\u4e00\u6b65\u5728 MySQL \u914d\u7f6e\u6587\u4ef6\u91cc\u52a0\u5165\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"skip-grant-tables"),"\u5220\u6389\u3002"),(0,l.kt)("h3",{id:"\u5b8c\u6210"},"\u5b8c\u6210"),(0,l.kt)("p",null,"\u91cd\u542f MySQL \u4e4b\u540e\u5c31\u53ef\u4ee5\u7528\u65b0\u5bc6\u7801\u767b\u5f55\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"service mysqld restart\n")),(0,l.kt)("h2",{id:"\u65b9\u6cd5\u4e8c\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012\u53c2\u6570"},"\u65b9\u6cd5\u4e8c\uff1a\u901a\u8fc7\u547d\u4ee4\u884c\u4f20\u9012\u53c2\u6570"),(0,l.kt)("h3",{id:"\u505c\u6b62-mysql"},"\u505c\u6b62 MySQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"service mysqld stop\n")),(0,l.kt)("h3",{id:"\u4ee5\u4e0d\u68c0\u67e5\u6743\u9650\u7684\u65b9\u5f0f\u542f\u52a8-mysql"},"\u4ee5\u4e0d\u68c0\u67e5\u6743\u9650\u7684\u65b9\u5f0f\u542f\u52a8 MySQL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysqld --skip-grant-tables &\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u5bc6\u7801-1"},"\u4fee\u6539\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mysql -uroot\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"use mysql;\nupdate user set Password=password('newpass') where User='root';\nflush privileges;\nexit;\n")),(0,l.kt)("h3",{id:"\u5b8c\u6210-1"},"\u5b8c\u6210"),(0,l.kt)("p",null,"\u7528\u6b63\u5e38\u7684\u65b9\u5f0f\u91cd\u542f MySQL \u4e4b\u540e\u5c31\u53ef\u4ee5\u7528\u65b0\u5bc6\u7801\u767b\u5f55\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"service mysqld restart\n")))}d.isMDXComponent=!0}}]);