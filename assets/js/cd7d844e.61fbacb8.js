"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4349],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39356:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),l=["components"],p={date:new Date("2022-07-03T00:00:00.000Z"),tags:["ssh"]},i="SSH \u7aef\u53e3\u8f6c\u53d1",s={permalink:"/blog/ssh-port-forwarding",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/ssh-port-forwarding.md",source:"@site/blog/ssh-port-forwarding.md",title:"SSH \u7aef\u53e3\u8f6c\u53d1",description:"\u524d\u8a00",date:"2022-07-03T00:00:00.000Z",formattedDate:"2022\u5e747\u67083\u65e5",tags:[{label:"ssh",permalink:"/blog/tags/ssh"}],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-07-03T00:00:00.000Z",tags:["ssh"]},prevItem:{title:"\u4e3a SSH \u767b\u5f55\u542f\u7528\u591a\u91cd\u8981\u7d20\u9a8c\u8bc1",permalink:"/blog/ssh-2fa"},nextItem:{title:"\u4f7f\u7528 SDKMAN \u5728 M1 Mac \u4e0a\u5b89\u88c5 JDK",permalink:"/blog/using-sdkman-to-install-jdk-on-m1-mac"}},u={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u52a8\u6001\u8f6c\u53d1",id:"\u52a8\u6001\u8f6c\u53d1",level:2},{value:"\u672c\u5730\u8f6c\u53d1",id:"\u672c\u5730\u8f6c\u53d1",level:2},{value:"\u8fdc\u7a0b\u8f6c\u53d1",id:"\u8fdc\u7a0b\u8f6c\u53d1",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"SSH \u9664\u4e86\u80fd\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\u5916\uff0c\u8fd8\u53ef\u4ee5\u505a\u7aef\u53e3\u8f6c\u53d1\u7684\u5de5\u4f5c\uff0c\u5e76\u4e14\u5229\u7528\u5b89\u5168\u96a7\u9053\u6765\u4fdd\u969c\u901a\u4fe1\u5b89\u5168\u3002"),(0,o.kt)("h2",{id:"\u52a8\u6001\u8f6c\u53d1"},"\u52a8\u6001\u8f6c\u53d1"),(0,o.kt)("p",null,"\u52a8\u6001\u8f6c\u53d1\u6307\u7684\u662f SSH \u5728\u672c\u673a\u66b4\u9732\u4e00\u4e2a SOCKS5 \u7aef\u53e3\uff0c\u901a\u8fc7\u6b64\u7aef\u53e3\u8fdb\u884c\u7684\u6240\u6709\u901a\u4fe1\u90fd\u8f6c\u53d1\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u901a\u8fc7\u8fdc\u7a0b\u670d\u52a1\u5668\u8bbf\u95ee\u5916\u7f51\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u7b80\u6613\u4ee3\u7406\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -D local-port tunnel-host -N\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-D"),"\uff0c\u52a8\u6001\u8f6c\u53d1\uff1b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-N"),"\uff0c\u4e0d\u6253\u5f00 Shell\uff0c\u53ea\u8fdb\u884c\u7aef\u53e3\u8f6c\u53d1\u3002")),(0,o.kt)("p",null,"\u4e0b\u9762\u8fd9\u6761\u547d\u4ee4\u7684\u7528\u9014\u662f\u901a\u8fc7\u672c\u673a",(0,o.kt)("inlineCode",{parentName:"p"},"2121"),"\u7aef\u53e3\u7684\u6d41\u91cf\u90fd\u4f1a\u88ab\u8f6c\u53d1\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel-host"),"\uff0c\u7136\u540e\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel-host"),"\u518d\u53d1\u9001\u8be5\u6d41\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -D 2121 tunnel-host -N\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u5199\u5728 ssh_config\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),"\uff09\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DynamicForward <tunnel-host>:<local-port>\n")),(0,o.kt)("h2",{id:"\u672c\u5730\u8f6c\u53d1"},"\u672c\u5730\u8f6c\u53d1"),(0,o.kt)("p",null,"\u672c\u5730\u8f6c\u53d1\u6307\u7684\u662f SSH \u5728\u672c\u673a\u66b4\u9732\u4e00\u4e2a\u7aef\u53e3\uff0c\u901a\u8fc7\u6b64\u7aef\u53e3\u7684\u8bf7\u6c42\u90fd\u4f1a\u8f6c\u53d1\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u7136\u540e\u8fdc\u7a0b\u670d\u52a1\u5668\u4f1a\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u76ee\u6807\u670d\u52a1\u5668\u7684\u76ee\u6807\u7aef\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -L local-port:target-host:target-port tunnel-host\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u8fd9\u6761\u547d\u4ee4\u7684\u7528\u9014\u662f\uff0c\u5f53\u8bbf\u95ee\u672c\u5730",(0,o.kt)("inlineCode",{parentName:"p"},"2121"),"\u7aef\u53e3\u65f6\uff0c\u6d41\u91cf\u4f1a\u88ab\u8f6c\u53d1\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel-host"),"\uff0c\u518d\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"tunnel-host"),"\u628a\u6d41\u91cf\u53d1\u9001\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"www.example.com:80"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -L 2121:www.example.com:80 tunnel-host -N\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u5199\u5728 ssh_config\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),"\uff09\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Host test.example.com\nLocalForward client-IP:client-port server-IP:server-port\n")),(0,o.kt)("h2",{id:"\u8fdc\u7a0b\u8f6c\u53d1"},"\u8fdc\u7a0b\u8f6c\u53d1"),(0,o.kt)("p",null,"\u8fdc\u7a0b\u8f6c\u53d1\u6307\u7684\u662f\u5728\u8fdc\u7a0b\u4e3b\u673a\u76d1\u542c\u67d0\u4e2a\u7aef\u53e3\uff0c\u901a\u8fc7\u8be5\u7aef\u53e3\u7684\u6d41\u91cf\u90fd\u8f6c\u53d1\u5230\u672c\u673a\uff0c\u518d\u901a\u8fc7\u672c\u673a\u53d1\u9001\u8be5\u6d41\u91cf\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -R remote-port:target-host:target-port -N remotehost\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u8fd9\u6761\u547d\u4ee4\u7684\u4f5c\u7528\u662f\u901a\u8fc7\u8fdc\u7a0b\u4e3b\u673a",(0,o.kt)("inlineCode",{parentName:"p"},"8080"),"\u7aef\u53e3\u7684\u6d41\u91cf\u90fd\u8f6c\u53d1\u5230\u672c\u5730\u4e3b\u673a\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"80"),"\u7aef\u53e3\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -R 8080:localhost:80 -N my.public.server\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u5199\u5728 ssh_config\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/config"),"\uff09\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Host remote-forward\n  HostName test.example.com\n  RemoteForward remote-port target-host:target-port\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wangdoc.com/ssh/port-forwarding.html"},"SSH \u7aef\u53e3\u8f6c\u53d1 - SSH \u6559\u7a0b - \u7f51\u9053"))))}d.isMDXComponent=!0}}]);