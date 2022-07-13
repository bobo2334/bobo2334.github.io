"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13120:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],i={date:new Date("2021-12-23T00:00:00.000Z"),tags:["docker"]},c="Docker \u7a7f\u900f\u9632\u706b\u5899\u7684\u95ee\u9898",p={permalink:"/blog/docker-and-system-firewall",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/docker-and-system-firewall.md",source:"@site/blog/docker-and-system-firewall.md",title:"Docker \u7a7f\u900f\u9632\u706b\u5899\u7684\u95ee\u9898",description:"\u524d\u8a00",date:"2021-12-23T00:00:00.000Z",formattedDate:"2021\u5e7412\u670823\u65e5",tags:[{label:"docker",permalink:"/blog/tags/docker"}],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2021-12-23T00:00:00.000Z",tags:["docker"]},prevItem:{title:"Debian \u914d\u7f6e\u5907\u4efd",permalink:"/blog/debian-environment-backup"},nextItem:{title:"\u901a\u8fc7\u4ee3\u7406\u8fde\u63a5 SSH \u670d\u52a1\u5668",permalink:"/blog/ssh-under-proxy"}},u={authorsImageUrls:[]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u6709\u4e9b\u670d\u52a1\u53ea\u9700\u8981\u5728\u672c\u5730\u8bbf\u95ee\uff0c\u4e0d\u9700\u8981\u5411\u5916\u66b4\u9732\u7aef\u53e3\uff0c\u4e0d\u7136\u4f1a\u6709\u5b89\u5168\u9690\u60a3\uff0c\u603b\u6709\u4e00\u5927\u5806\u673a\u5668\u626b\u63cf\u4f60\u7684\u7aef\u53e3\uff0c\u5c1d\u8bd5\u63a5\u5165\u4f60\u7684\u670d\u52a1\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7 Docker \u66b4\u9732\u7684\u7aef\u53e3\uff0c\u5373\u4f7f\u6ca1\u6709\u5728\u9632\u706b\u5899\u4e2d\u624b\u52a8\u653e\u884c\uff0c\u5728\u5916\u90e8\u8fd8\u662f\u53ef\u4ee5\u8bbf\u95ee\u5230\u3002"),(0,o.kt)("h2",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5"),(0,o.kt)("p",null,"\u5728\u8fdb\u884c\u7aef\u53e3\u6620\u5c04\u7684\u65f6\u5019\u6307\u5b9a\u76d1\u542c\u5730\u5740\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:3000:80"),"\u3002\u5728\u6ca1\u6307\u5b9a\u7684\u60c5\u51b5\u4e0b\uff0c\u5982",(0,o.kt)("inlineCode",{parentName:"p"},"3000:80"),"\uff0c\u76d1\u542c\u5730\u5740\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0"),"\u3002"),(0,o.kt)("p",null,"\u8fd9\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),"\u547d\u4ee4\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u547d\u4ee4\u7684\u65f6\u5019\u90fd\u53ef\u4ee5\u751f\u6548\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"docker run"),"\u547d\u4ee4\u793a\u4f8b\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 127.0.0.1:80:80 nginx\n")),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u547d\u4ee4\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u5185\u5bb9\u793a\u4f8b\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.3'\nservices:\n    nginx:\n        ports:\n            - '127.0.0.1:80:80'\n        image: nginx\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.binss.me/blog/docker-pass-through-system-firewall/"},"\u65e0\u89c6\u7cfb\u7edf\u9632\u706b\u5899\u7684 docker - \u535a\u5ba2 - binsite")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://icharle.com/dockeriptables.html"},"docker \u65e0\u89c6\u9632\u706b\u5899\u95ee\u9898\u603b\u7ed3 - Icharle | Don't forget your first thoughts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.zhihu.com/question/64616650"},"docker \u5f00\u653e\u7684\u7aef\u53e3\u662f\u5982\u4f55\u5b9e\u73b0\u7ed5\u8fc7\u9632\u706b\u5899\u7684\uff1f - \u77e5\u4e4e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/69d3ab177655"},"Docker \u4e0e IPtables - \u7b80\u4e66"))))}d.isMDXComponent=!0}}]);