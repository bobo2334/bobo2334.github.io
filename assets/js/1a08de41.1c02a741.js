"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5140],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,g=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(g,l(l({ref:t},m),{},{components:n})):r.createElement(g,l({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},72742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={date:new Date("2021-12-23T00:00:00.000Z"),tags:["zerotier","vpn"]},p="Zerotier \u5f02\u5730\u7ec4\u7f51",c={permalink:"/blog/zerotier",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/zerotier.md",source:"@site/blog/zerotier.md",title:"Zerotier \u5f02\u5730\u7ec4\u7f51",description:"\u524d\u8a00",date:"2021-12-23T00:00:00.000Z",formattedDate:"2021\u5e7412\u670823\u65e5",tags:[{label:"zerotier",permalink:"/blog/tags/zerotier"},{label:"vpn",permalink:"/blog/tags/vpn"}],truncated:!0,authors:[],frontMatter:{date:"2021-12-23T00:00:00.000Z",tags:["zerotier","vpn"]},prevItem:{title:"iterm2 \u5bf9 tmux \u7684\u7279\u6b8a\u652f\u6301",permalink:"/blog/tmux-integration-in-iterm2"},nextItem:{title:"tmux \u7ec8\u7aef\u590d\u7528",permalink:"/blog/tmux"}},m={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u63a7\u5236\u53f0",id:"\u63a7\u5236\u53f0",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"\u81ea\u52a8 NAT",id:"\u81ea\u52a8-nat",level:2}],s={toc:u};function f(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"Zerotier",(0,i.kt)("sup",{parentName:"p",id:"fnref-1-a834a9"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1-a834a9",className:"footnote-ref"},"1"))," \u662f\u4e00\u4e2a\u4f18\u79c0\u7684\u5f02\u5730\u7ec4\u7f51\u89e3\u51b3\u65b9\u6848\u3002\u5176\u4f18\u70b9\u662f\u7ec4\u7f51\u7075\u6d3b\u3001\u4e0d\u9700\u8981\u66f4\u6539\u73b0\u6709\u7f51\u7edc\u7ed3\u6784\uff0c\u652f\u6301 P2P \u548c\u8f6c\u53d1\u3002"),(0,i.kt)("p",null,"Zerotier \u4f7f\u7528\u4e5f\u4e0d\u662f\u6ca1\u6709\u9650\u5236\uff0c\u514d\u8d39\u7248\u672c\u7684\u6700\u591a\u52a0\u5165 50 \u4e2a\u5ba2\u6237\u7aef\uff0c\u4e0d\u8fc7\u5bf9\u4e8e\u4e2a\u4eba\u6765\u8bf4\u80af\u5b9a\u591f\u7528\u4e86\u3002"),(0,i.kt)("h2",{id:"\u63a7\u5236\u53f0"},"\u63a7\u5236\u53f0"),(0,i.kt)("p",null,"\u5728\u63a7\u5236\u53f0 ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2-a834a9"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2-a834a9",className:"footnote-ref"},"2"))," \u6ce8\u518c\u5e76\u767b\u9646\u3002"),(0,i.kt)("p",null,"\u5728\u521b\u5efa\u7f51\u7edc\u540e\u4f1a\u5f97\u5230\u4e00\u4e2a Network ID\uff0c\u6b64 ID \u662f\u552f\u4e00\u7684\uff0c\u662f\u5ba2\u6237\u7aef\u52a0\u5165\u6b64\u7f51\u7edc\u6240\u9700\u7684\u552f\u4e00\u53c2\u6570\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223012353090",src:n(74228).Z,width:"1602",height:"202"})),(0,i.kt)("p",null,"\u5728\u7f51\u7edc\u7ba1\u7406\u9875\u9762\u4e2d\uff0cAccess Control \u63a7\u5236\u5ba2\u6237\u7aef\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u5982\u679c\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"p"},"PRIVATE"),"\u5219\u6bcf\u4e2a\u5ba2\u6237\u7aef\u7684\u52a0\u5165\u90fd\u9700\u8981\u5728\u6b64\u9875\u9762\u7ecf\u7531\u4f60\u5141\u8bb8\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223012418452",src:n(30782).Z,width:"1556",height:"440"})),(0,i.kt)("p",null,"\u5728 IPv4 Auto-Assign \u4e2d\uff0c\u53ef\u4ee5\u5bf9\u5ba2\u6237\u7aef\u7684 IP \u6bb5\u8fdb\u884c\u914d\u7f6e\uff0c\u4e0d\u548c\u4f60\u539f\u6765\u7684\u7f51\u7edc\u5730\u5740\u51b2\u7a81\u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223012631035",src:n(7934).Z,width:"1858",height:"936"})),(0,i.kt)("p",null,"\u5728 Members \u4e2d\u4f60\u53ef\u4ee5\u7ba1\u7406\u8be5\u7f51\u7edc\u4e0b\u7684\u6240\u6709\u5ba2\u6237\u7aef\uff0c\u52fe\u9009\u5ba2\u6237\u7aef\u5bf9\u5e94\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Auth?"),"\u9009\u6846\u5373\u53ef\u8ba9\u5ba2\u6237\u7aef\u52a0\u5165\u6b64\u7f51\u7edc\u3002\u6bcf\u4e2a\u5ba2\u6237\u7aef\u5728\u52a0\u5165\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5206\u914d\u4e00\u4e2a IP \u5730\u5740\uff0c\u4f60\u8fd8\u53ef\u4ee5\u624b\u52a8\u5206\u914d\u5ba2\u6237\u7aef\u7684 IP \u5730\u5740\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223012842109",src:n(15222).Z,width:"3656",height:"404"})),(0,i.kt)("p",null,"\u5728\u591a\u4e2a\u5ba2\u6237\u7aef\u52a0\u5165\u7f51\u7edc\u540e\uff0c\u5373\u4f7f\u5904\u4e8e\u4e0d\u540c\u7684\u7f51\u7edc\u73af\u5883\u4e0b\uff0c\u5ba2\u6237\u7aef\u90fd\u53ef\u4ee5\u901a\u8fc7\u5206\u914d\u5230\u7684 IP \u4e92\u76f8\u8bbf\u95ee\u3002"),(0,i.kt)("h2",{id:"\u5ba2\u6237\u7aef"},"\u5ba2\u6237\u7aef"),(0,i.kt)("p",null,"Zerotier \u5728\u5e38\u7528\u5e73\u53f0\u4e0a\u90fd\u6709\u5ba2\u6237\u7aef\uff0c\u6709\u56fe\u5f62\u5316\u7684\u6709\u547d\u4ee4\u884c\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223011629303",src:n(28772).Z,width:"1122",height:"434"})),(0,i.kt)("h2",{id:"\u81ea\u52a8-nat"},"\u81ea\u52a8 NAT"),(0,i.kt)("p",null,"\u5728\u524d\u9762\u7684\u65b9\u6848\u4e2d\uff0c\u5982\u679c\u591a\u4e2a\u673a\u5668\u4e92\u76f8\u8bbf\u95ee\u5c31\u9700\u8981\u6bcf\u4e2a\u673a\u5668\u90fd\u5b89\u88c5 Zerotier \u5ba2\u6237\u7aef\u5e76\u52a0\u5165\u540c\u4e00\u4e2a\u7f51\u7edc\u3002"),(0,i.kt)("p",null,"\u501f\u52a9 OpenWrt \u548c Zerotier \u53ef\u4ee5\u66b4\u9732\u6574\u4e2a\u5c40\u57df\u7f51\u5230 Zerotier \u7f51\u7edc\u4e2d\uff0c\u53ea\u9700\u8981 OpenWrt \u4e2d\u7684 Zerotier \u52a0\u5165\u7f51\u7edc\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u52fe\u9009\u300c\u81ea\u52a8\u5141\u8bb8\u5ba2\u6237\u7aef NAT\u300d\u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223014114997",src:n(76691).Z,width:"2148",height:"740"})),(0,i.kt)("p",null,"\u8bb8\u591a OpenWrt \u7684\u53d1\u884c\u7248\u90fd\u96c6\u6210\u4e86\u6b64\u8f6f\u4ef6\u5305\u3002\u53ef\u4ee5\u53c2\u8003\u5982\u4e0b Telegram \u9891\u9053\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/OpenWRTcn"},"Telegram: Contact @OpenWRTcn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/aixiaoshao"},"Telegram: Contact @aixiaoshao")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://t.me/passwallOpenWRT233"},"Telegram: Contact @passwallOpenWRT233"))),(0,i.kt)("p",null,"OpenWrt \u4e0d\u9700\u8981\u4f5c\u4e3a\u4f60\u7684\u4e3b\u8def\u7531\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7 LAN \u53e3\u63a5\u5165\u4f60\u73b0\u6709\u7684\u5c40\u57df\u7f51\uff0c\u5173\u95ed LAN \u53e3\u7684 DHCP \u670d\u52a1\uff0c\u4f5c\u4e3a\u65c1\u8def\u7531\u4f7f\u7528\u3002"),(0,i.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u5728 Zerotier \u63a7\u5236\u53f0\u4e2d\u914d\u7f6e\u9759\u6001\u8def\u7531\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223014932675",src:n(4940).Z,width:"1922",height:"884"})),(0,i.kt)("p",null,"\u5728\u6dfb\u52a0\u9759\u6001\u8def\u7531\u7684\u65f6\u5019",(0,i.kt)("inlineCode",{parentName:"p"},"Destination"),"\u586b\u5c40\u57df\u7f51\u7684\u7f51\u7edc\u5730\u5740\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"(Via)"),"\u4e3a\u4e0b\u4e00\u8df3\u5730\u5740\uff0c\u5373 OpenWrt \u8def\u7531\u5668\u7684 Zerotier \u5730\u5740\u3002"),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u9759\u6001\u8def\u7531\u914d\u7f6e\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.10.0/24"),"\u5c40\u57df\u7f51\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.11.0/24"),"\u5c40\u57df\u7f51\u66b4\u9732\u5728 Zerotier \u7f51\u7edc\u4e2d\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"172.22.39.15"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"172.22.105.60"),"\u5206\u522b\u662f\u4e24\u4e2a OpenWrt \u8def\u7531\u5668\u5728 Zerotier \u7f51\u7edc\u4e2d\u7684\u5730\u5740\uff0c\u8fd9\u4e24\u4e2a\u8def\u7531\u5668\u5747\u914d\u7f6e\u4e86\u81ea\u52a8\u5141\u8bb8\u5ba2\u6237\u7aef NAT\u3002"),(0,i.kt)("p",null,"\u8fd9\u6837\u505a\u7684\u4f18\u70b9\u662f\u7ba1\u7406\u65b9\u4fbf\uff0c\u4e0d\u9700\u8981\u5728\u6bcf\u4e2a\u673a\u5668\u4e0a\u5b89\u88c5\u5ba2\u6237\u7aef\u5e76\u4e14\u52a0\u5165\u7f51\u7edc\u3002\u5e76\u4e14\u5373\u4f7f\u4f60\u5728\u4f7f\u7528\u79fb\u52a8\u7f51\u7edc\u7684\u65f6\u5019\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u5230\u5bb6\u91cc\u5c40\u57df\u7f51\u7684 IP\uff0c\u5e76\u4e14\u8fd8\u662f\u901a\u8fc7\u5c40\u57df\u7f51 IP \u8bbf\u95ee\uff0c\u5e76\u4e0d\u9700\u8981\u4fee\u6539\u8f6f\u4ef6\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5927\u81f4\u7684\u7f51\u7edc\u62d3\u6251\u56fe\u5982\u4e0b\u3002\u5728\u5916\u4f7f\u7528\u79fb\u52a8\u7f51\u7edc\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.10.0/24"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.11.0/24"),"\u7f51\u6bb5\u7684\u5185\u7f51\u5730\u5740\u8bbf\u95ee\u5c40\u57df\u7f51 A \u6216\u5c40\u57df\u7f51 B \u5185\u7684\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5c40\u57df\u7f51 A \u4e2d\u7684\u67d0\u53f0\u8bbe\u5907\u9700\u8981\u8bbf\u95ee\u5c40\u57df\u7f51 B \u4e2d\u7684\u8d44\u6e90\uff0c\u8fd8\u662f\u9700\u8981\u5728\u8be5\u8bbe\u5907\u4e0a\u5b89\u88c5 Zerotier \u5ba2\u6237\u7aef\uff0c\u5e76\u4e14\u52a0\u5165\u7edf\u4e00 Zerotier \u7f51\u7edc\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.11.0/24"),"\u7684\u5185\u7f51  IP \u5730\u5740\u6765\u8bbf\u95ee\u5c40\u57df\u7f51 B \u4e2d\u7684\u8d44\u6e90\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20211223022539047",src:n(64067).Z,width:"2396",height:"1704"})),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1-a834a9"},(0,i.kt)("a",{parentName:"li",href:"https://www.zerotier.com/"},"ZeroTier \u2013 Global Area Networking"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1-a834a9",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2-a834a9"},(0,i.kt)("a",{parentName:"li",href:"https://my.zerotier.com/network"},"ZeroTier Central"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2-a834a9",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},28772:function(e,t,n){t.Z=n.p+"assets/images/image-20211223011629303-eb5bc4e16196fdebc074c8072ca60b28.png"},74228:function(e,t,n){t.Z=n.p+"assets/images/image-20211223012353090-f66b6298b4845e2b8ea660753d22a22d.png"},30782:function(e,t,n){t.Z=n.p+"assets/images/image-20211223012418452-5f56b187abcce817cf7e122b54a960d1.png"},7934:function(e,t,n){t.Z=n.p+"assets/images/image-20211223012631035-c023abb570c9ca5dddf411309a308191.png"},15222:function(e,t,n){t.Z=n.p+"assets/images/image-20211223012842109-615ba0c4130a256ea4176001ed394216.png"},76691:function(e,t,n){t.Z=n.p+"assets/images/image-20211223014114997-1f83cbe18f0ac74a3d521337358adf6d.png"},4940:function(e,t,n){t.Z=n.p+"assets/images/image-20211223014932675-7afd169b6f4a1c98445f5313362e8ed5.png"},64067:function(e,t,n){t.Z=n.p+"assets/images/image-20211223022539047-c73b731df31998d6081db4b45fbf7669.png"}}]);