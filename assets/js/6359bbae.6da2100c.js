"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[229],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),k=a,d=m["".concat(p,".").concat(k)]||m[k]||s[k]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},230:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return k}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={date:new Date("2021-12-31T00:00:00.000Z"),tags:["zerotier"]},p="\u81ea\u5efa Zerotier \u884c\u661f\u8282\u70b9",c={permalink:"/blog/self-hosted-zerotier-controller",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/self-hosted-zerotier-controller.md",source:"@site/blog/self-hosted-zerotier-controller.md",title:"\u81ea\u5efa Zerotier \u884c\u661f\u8282\u70b9",description:"\u524d\u8a00",date:"2021-12-31T00:00:00.000Z",formattedDate:"2021\u5e7412\u670831\u65e5",tags:[{label:"zerotier",permalink:"/blog/tags/zerotier"}],truncated:!0,authors:[],prevItem:{title:"\u7528 KMS \u6fc0\u6d3b Windows \u548c Office",permalink:"/blog/activate-windows-and-office-with-kms"},nextItem:{title:"UFW\uff1a\u7b80\u5355\u6613\u4e0a\u624b\u7684\u9632\u706b\u5899\u89c4\u5219\u7ba1\u7406\u5de5\u5177",permalink:"/blog/ufw"}},u={authorsImageUrls:[]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u8fd0\u884c\u9879\u76ee",id:"\u8fd0\u884c\u9879\u76ee",children:[],level:2},{value:"\u7f51\u7edc\u914d\u7f6e",id:"\u7f51\u7edc\u914d\u7f6e",children:[],level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],m={toc:s};function k(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u81ea\u5efa ZeroTier Planet \u884c\u661f\u670d\u52a1\u5668\u53ef\u4ee5\u89e3\u51b3\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"\u5b98\u65b9\u514d\u8d39\u7248\u672c\u6709 50 \u4e2a\u8bbe\u5907\u8fde\u63a5\u6570\u7684\u9650\u5236"),(0,i.kt)("li",{parentName:"ol"},"\u63d0\u5347\u7f51\u7edc\u7a33\u5b9a\u6027"))),(0,i.kt)("h2",{id:"\u8fd0\u884c\u9879\u76ee"},"\u8fd0\u884c\u9879\u76ee"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose"),"\u53ef\u4ee5\u5feb\u901f\u8fd0\u884c\u9879\u76ee\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u7684\u5185\u5bb9\u5982\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  ztncui:\n    image: keynetworks/ztncui\n    restart: unless-stopped\n    ports:\n      - '3000:3000'\n    environment:\n      MYADDR: 172.38.38.38\n      HTTP_ALL_INTERFACES: \"yes\"\n      ZTNCUI_PASSWD: PASS\n      TZ: Asia/Shanghai\n    volumes:\n      - ztncui:/opt/key-networks/ztncui/etc/\n      - zerotier-one:/var/lib/zerotier-one/\nvolumes:\n  ztncui: null\n  zerotier-one: null\n")),(0,i.kt)("p",null,"\u5176\u4e2d\u4e00\u4e9b\u73af\u5883\u53d8\u91cf\u9700\u8981\u8bbe\u7f6e\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MYADDR"),"\uff1a\u673a\u5668\u7684\u516c\u7f51 IP \u5730\u5740"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP_ALL_INTERFACES"),"\uff1a\u76d1\u542c\u6240\u6709\u7f51\u7edc\u63a5\u53e3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZTNCUI_PASSWD"),"\uff1a\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"admin"),"\u7528\u6237\u7684\u5bc6\u7801\u3002")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ztncui"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"zerotier-one"),"\u4e24\u4e2a Volume \u6301\u4e45\u5316\u914d\u7f6e\u4fe1\u606f\uff0c\u9632\u6b62\u91cd\u65b0\u521b\u5efa\u5bb9\u5668\u540e\u4e22\u5931\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d"),"\u542f\u52a8\u5bb9\u5668\u3002"),(0,i.kt)("p",null,"\u9632\u706b\u5899\u9700\u8981\u653e\u884c",(0,i.kt)("inlineCode",{parentName:"p"},"3000"),"\u7aef\u53e3\u3002"),(0,i.kt)("h2",{id:"\u7f51\u7edc\u914d\u7f6e"},"\u7f51\u7edc\u914d\u7f6e"),(0,i.kt)("p",null,"\u8bbf\u95ee",(0,i.kt)("inlineCode",{parentName:"p"},"IP:3000"),"\u53ef\u4ee5\u8fdb\u5165\u7f51\u9875\u7ba1\u7406 UI\uff0c\u4e5f\u53ef\u4ee5\u7528\u53cd\u54cd\u4ee3\u7406\u670d\u52a1\u5668\u6765\u8f6c\u53d1\u6b64\u7aef\u53e3\u7684\u6d41\u91cf\uff0c\u5e76\u7528\u57df\u540d\u548c HTTPS \u8bbf\u95ee\u3002\u7528\u6237\u540d\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"admin"),"\uff0c\u5bc6\u7801\u662f\u4f60\u4e4b\u524d\u914d\u7f6e\u7684\u73af\u5883\u53d8\u91cf",(0,i.kt)("inlineCode",{parentName:"p"},"ZTNCUI_PASSWD"),"\u7684\u503c\u3002"),(0,i.kt)("p",null,"\u63a7\u5236\u9762\u677f\u7684\u4f7f\u7528\u65b9\u6cd5\u548c\u64cd\u4f5c\u903b\u8f91\u548c\u5b98\u65b9\u63a7\u5236\u9762\u677f\u5dee\u4e0d\u591a\u3002"),(0,i.kt)("p",null,"\u5728\u5e95\u90e8\u7684\u5bfc\u822a\u680f\u4e2d\u70b9\u51fb\u300cNetworks\u300d\uff0c\u518d\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"p"},"Add network"),"\u521b\u5efa\u4e00\u4e2a\u7f51\u7edc\u3002\u7ed9\u7f51\u7edc\u8d77\u4e00\u4e2a\u540d\u5b57\u4e4b\u540e\u4f60\u5c31\u80fd\u5728\u300cNetworks\u300d\u4e2d\u770b\u89c1\u4f60\u521a\u521a\u521b\u5efa\u7684\u7f51\u7edc\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211231150656489",src:n(392).Z})),(0,i.kt)("p",null,"\u70b9\u51fb\u8be5\u7f51\u7edc\u540d\u5c31\u80fd\u8fdb\u5165\u8be5\u7f51\u7edc\u8bbe\u7f6e\u7684\u8bbe\u7f6e\u9875\u9762\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211231152132452",src:n(7988).Z})),(0,i.kt)("p",null,"\u70b9\u51fb\u300cEasy setup\u300d\u6309\u94ae\u4e3a\u7f51\u7edc\u8bbe\u7f6e\u7f51\u6bb5\u3002\u5728\u8be5\u9875\u9762\u4e2d\u70b9\u51fb\u300cGenerate network address\u300d\u6309\u94ae\u53ef\u4ee5\u968f\u673a\u751f\u6210\u7f51\u6bb5\uff0c\u70b9\u51fb\u300cSubmit\u300d\u6309\u94ae\u4fdd\u5b58\u4fe1\u606f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211231152152226",src:n(8951).Z})),(0,i.kt)("p",null,"\u70b9\u51fb\u300cPrivate\u300d\u6309\u94ae\u8bbe\u7f6e\u79c1\u6709\u7f51\u7edc/\u516c\u5f00\u7f51\u7edc\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211231152400238",src:n(777).Z})),(0,i.kt)("p",null,"\u70b9\u51fb\u300cRoutes\u300d\u6309\u94ae\u8bbe\u7f6e\u9759\u6001\u8def\u7531\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211231152422204",src:n(7326).Z})),(0,i.kt)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,i.kt)("p",null,"\u4f7f\u7528\u5404\u4e2a\u5e73\u53f0\u7684\u539f\u751f\u5ba2\u6237\u7aef\u76f4\u63a5\u53ef\u4ee5\u8fde\u63a5\u5230\u81ea\u5efa\u7f51\u7edc\u3002Network ID \u586b\u81ea\u5df1\u7684\u5c31\u884c\u4e86\u3002"),(0,i.kt)("p",null,"\u5ba2\u6237\u7aef\u5728\u52a0\u5165\u79c1\u6709\u7f51\u7edc\u7684\u65f6\u5019\u9700\u8981\u5728\u7f51\u7edc\u7ba1\u7406\u9875\u9762\u624b\u52a8\u6279\u51c6\u8ba4\u8bc1\uff1b\u52fe\u9009\u5bf9\u5e94\u7684\u300cAuthorized\u300d\u5217\u9009\u6846\u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211231152823640",src:n(730).Z})),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.appinn.com/zerotier-planet-server-docker-install/"},"ZeroTier Planet \u884c\u661f\u670d\u52a1\u5668\uff0c\u4e00\u952e\u79c1\u6709\u90e8\u7f72\uff0c\u53ef\u7a81\u7834 50 \u53f0\u8bbe\u5907\u9650\u5236 - \u5c0f\u4f17\u8f6f\u4ef6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Jonnyan404/zerotier-planet"},"Jonnyan404/zerotier-planet: \u4e00\u5206\u949f\u81ea\u5efa zerotier-planet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/key-networks/ztncui"},"key-networks/ztncui: ZeroTier network controller UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/key-networks/ztncui-containerized"},"key-networks/ztncui-containerized: A Docker image that contains ZeroTier One and ztncui to set up a standalone ZeroTier network controller with a web user interface in a container."))))}k.isMDXComponent=!0},392:function(e,t,n){t.Z=n.p+"assets/images/image-20211231150656489-1b908dc41ccb791fa037039a04a21022.png"},7988:function(e,t,n){t.Z=n.p+"assets/images/image-20211231152132452-f0658ac026fa76ca6563c39f7bd14e5d.png"},8951:function(e,t,n){t.Z=n.p+"assets/images/image-20211231152152226-db17902cc3692c8be1fa37991f1ab2e3.png"},777:function(e,t,n){t.Z=n.p+"assets/images/image-20211231152400238-b9bad821f68f2ee01a60cb6f792caa86.png"},7326:function(e,t,n){t.Z=n.p+"assets/images/image-20211231152422204-ea6b81c9f6b86fdef0502337659c7d70.png"},730:function(e,t,n){t.Z=n.p+"assets/images/image-20211231152823640-280c2b5ee7a773cb4a8032ba282351f7.png"}}]);