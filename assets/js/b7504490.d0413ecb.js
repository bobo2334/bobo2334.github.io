"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4157],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21657:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),l=["components"],o={date:new Date("2016-12-21T00:00:00.000Z"),tags:["linux","centos"]},c="CentOS \u7f51\u7edc\u914d\u7f6e",p={permalink:"/blog/configuring-centos-network",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/configuring-centos-network.md",source:"@site/blog/configuring-centos-network.md",title:"CentOS \u7f51\u7edc\u914d\u7f6e",description:"\u524d\u8a00",date:"2016-12-21T00:00:00.000Z",formattedDate:"2016\u5e7412\u670821\u65e5",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"centos",permalink:"/blog/tags/centos"}],readingTime:1.345,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2016-12-21T00:00:00.000Z",tags:["linux","centos"]},prevItem:{title:"\u91cd\u7f6e MySQL root \u5bc6\u7801",permalink:"/blog/reset-mysql-root-password"}},u={authorsImageUrls:[]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u542f\u7528\u7f51\u5361",id:"\u542f\u7528\u7f51\u5361",level:2},{value:"\u7f16\u8f91\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u8f91\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u4e24\u79cd\u83b7\u53d6 IP \u7684\u65b9\u5f0f",id:"\u4e24\u79cd\u83b7\u53d6-ip-\u7684\u65b9\u5f0f",level:2},{value:"\u52a8\u6001\u83b7\u53d6 IP\uff08dhcp\uff09",id:"\u52a8\u6001\u83b7\u53d6-ipdhcp",level:3},{value:"\u9759\u6001\u83b7\u53d6 IP\uff08static\uff09",id:"\u9759\u6001\u83b7\u53d6-ipstatic",level:3},{value:"\u91cd\u542f\u7f51\u7edc\u670d\u52a1",id:"\u91cd\u542f\u7f51\u7edc\u670d\u52a1",level:2}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u6bcf\u6b21\u88c5 CentOS \u540e\u65e0\u6cd5\u4e0a\u7f51\u90fd\u8981\u53bb\u641c\u6559\u7a0b\uff0c\u73b0\u5728\u8bb0\u4e0b\u6765\u4ee5\u540e\u5c31\u4e0d\u7528\u5230\u5904\u53bb\u641c\u4e86\uff08\u6ed1\u7a3d\uff09\u3002"),(0,i.kt)("h2",{id:"\u542f\u7528\u7f51\u5361"},"\u542f\u7528\u7f51\u5361"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ifconfig eth0 up\n")),(0,i.kt)("p",null,"\u987a\u4fbf\u4e00\u63d0\uff0c\u5173\u95ed\u7f51\u5361\u7684\u547d\u4ee4\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"ifconfig eth0 down"),"\u3002"),(0,i.kt)("h2",{id:"\u7f16\u8f91\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u8f91\u7f51\u7edc\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vi /etc/sysconfig/network-scripts/ifcfg-eth0\n")),(0,i.kt)("p",null,"\u6309",(0,i.kt)("kbd",null,"i"),"\u8fdb\u5165\u7f16\u8f91\u6a21\u5f0f\uff0c\u6309",(0,i.kt)("kbd",null,"ESC"),"\u8fdb\u5165\u547d\u4ee4\u6a21\u5f0f\u3002\u547d\u4ee4\u6a21\u5f0f\u4e2d\u8f93\u5165",(0,i.kt)("inlineCode",{parentName:"p"},":w"),"\u4fdd\u5b58\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},":q"),"\u9000\u51fa\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},":wq"),"\u5373\u4e3a\u9000\u51fa\u5e76\u4fdd\u5b58\u3002"),(0,i.kt)("p",null,"\u6253\u5f00\u5e94\u8be5\u662f\u4e0b\u9762\u8fd9\u4e2a\u6837\u5b50\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"DEVICE=eth0\nHWADDR=08:00:27:A6:5D:89\nTYPE=Ethernet\nUUID=db391271-1cdf-4df2-b040-12f259d5e361\nONBOOT=no\nNM_CONTROLLED=yes\nBOOTPROTO=dhcp\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ONBOOT"),"\u4e3a\u662f\u5426\u5f00\u673a\u542f\u52a8\uff0c\u503c\u53ef\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"yse"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"no"),"\uff1b"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BOOTPROTO"),"\u4e3a\u83b7\u53d6 IP \u5730\u5740\u7684\u65b9\u5f0f\uff0c\u503c\u53ef\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"dhcp"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"static"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"bootp"),"\uff1b")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ONBOOT"),"\u4fee\u6539\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"yes"),"\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"BOOTPROTO"),"\u6309\u9700\u4fee\u6539\uff0c\u5176\u4ed6\u7684\u4e0d\u9700\u8981\u4fee\u6539\uff0c\u4e0b\u9762\u662f\u793a\u4f8b\u3002"),(0,i.kt)("h2",{id:"\u4e24\u79cd\u83b7\u53d6-ip-\u7684\u65b9\u5f0f"},"\u4e24\u79cd\u83b7\u53d6 IP \u7684\u65b9\u5f0f"),(0,i.kt)("h3",{id:"\u52a8\u6001\u83b7\u53d6-ipdhcp"},"\u52a8\u6001\u83b7\u53d6 IP\uff08dhcp\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"DEVICE=eth0\nHWADDR=08:00:27:A6:5D:89\nTYPE=Ethernet\nUUID=db391271-1cdf-4df2-b040-12f259d5e361\nONBOOT=yes #\u5f00\u673a\u542f\u52a8\nNM_CONTROLLED=yes\nBOOTPROTO=dhcp #\u52a8\u6001\n")),(0,i.kt)("h3",{id:"\u9759\u6001\u83b7\u53d6-ipstatic"},"\u9759\u6001\u83b7\u53d6 IP\uff08static\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"DEVICE=eth0\nHWADDR=08:00:27:A6:5D:89\nTYPE=Ethernet\nUUID=db391271-1cdf-4df2-b040-12f259d5e361\nONBOOT=yes #\u5f00\u673a\u542f\u52a8\nNM_CONTROLLED=yes\nBOOTPROTO=static #\u9759\u6001\nIPADDR=192.168.233.234 #IP \u5730\u5740\nNETMASK=255.255.255.0 #\u5b50\u7f51\u63a9\u7801\nGATEWAY=192.168.233.1 #\u7f51\u5173\n")),(0,i.kt)("p",null,"static \u65b9\u5f0f\u8fd8\u8981\u624b\u52a8\u8bbe\u7f6e DNS\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"vi /etc/resolv.conf\n")),(0,i.kt)("h2",{id:"\u91cd\u542f\u7f51\u7edc\u670d\u52a1"},"\u91cd\u542f\u7f51\u7edc\u670d\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"service network restart\n")))}f.isMDXComponent=!0}}]);