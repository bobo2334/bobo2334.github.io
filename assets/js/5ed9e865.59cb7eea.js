"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4579],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58644:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(83117),a=t(80102),l=(t(67294),t(3905)),i=["components"],o={date:new Date("2023-04-03T00:00:00.000Z")},s="\u5728 Windows \u4e2d\u4f7f\u7528\u5b89\u5168 DNS",p={permalink:"/blog/using-secure-dns-in-windows",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/using-secure-dns-in-windows.md",source:"@site/blog/using-secure-dns-in-windows.md",title:"\u5728 Windows \u4e2d\u4f7f\u7528\u5b89\u5168 DNS",description:"\u524d\u8a00",date:"2023-04-03T00:00:00.000Z",formattedDate:"2023\u5e744\u67083\u65e5",tags:[],readingTime:4.23,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-04-03T00:00:00.000Z"},prevItem:{title:"\u4f7f\u7528 .gitattributes \u6765\u7edf\u4e00\u6362\u884c\u7b26\u98ce\u683c",permalink:"/blog/using-.gitattributes-to-standardize-line-break-styles"},nextItem:{title:"\u4f7f\u7528 Windows Terminal",permalink:"/blog/using-the-windows-terminal"}},d={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88c5 dnsproxy",id:"\u5b89\u88c5-dnsproxy",level:2},{value:"dnsproxy \u914d\u7f6e\u6587\u4ef6",id:"dnsproxy-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u8bd5\u8fd0\u884c",id:"\u8bd5\u8fd0\u884c",level:2},{value:"\u5b89\u88c5 WinSW",id:"\u5b89\u88c5-winsw",level:2},{value:"WinSW \u914d\u7f6e\u6587\u4ef6",id:"winsw-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u6ce8\u518c\u5e76\u542f\u52a8\u670d\u52a1",id:"\u6ce8\u518c\u5e76\u542f\u52a8\u670d\u52a1",level:2},{value:"\u4fee\u6539\u7f51\u5361 DNS \u670d\u52a1\u5668\u5730\u5740",id:"\u4fee\u6539\u7f51\u5361-dns-\u670d\u52a1\u5668\u5730\u5740",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],u={toc:c};function m(e){var n=e.components,o=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u5728 Windows 10 \u53ca\u4ee5\u4e0b\u7684\u7cfb\u7edf\u7248\u672c\u4e2d\u5e76\u6ca1\u6709\u539f\u751f\u7684 DoH \u548c DoT \u652f\u6301\u3002\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9\u8f6f\u4ef6\u4ee3\u7406\u4e0a\u6e38\u5b89\u5168 DNS\uff0c\u5728\u672c\u5730\u542f\u52a8\u4e00\u4e2a DNS \u670d\u52a1\u5668\u4f9b\u672c\u673a\u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u672c\u6587\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/dnsproxy"},"dnsproxy")," \u4f5c\u4e3a DNS \u4ee3\u7406\u670d\u52a1\u5668\uff0c\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/winsw/winsw"},"WinSW")," \u628a dnsproxy \u6ce8\u518c\u4e3a Windows \u670d\u52a1\u4ee5\u786e\u4fdd dnsproxy \u81ea\u52a8\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-dnsproxy"},"\u5b89\u88c5 dnsproxy"),(0,l.kt)("p",null,"dnsproxy \u662f AdguardTeam \u7ec4\u7ec7\u4e0b\u7684\u9879\u76ee\uff0c\u8d28\u91cf\u5e94\u8be5\u4e0d\u9519\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 Scoop \u5feb\u901f\u5b89\u88c5 dnsproxy\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"scoop install dnsproxy\n")),(0,l.kt)("h2",{id:"dnsproxy-\u914d\u7f6e\u6587\u4ef6"},"dnsproxy \u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff0c\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"C:\\Users\\gem\\.config\\dnsproxy\\config.yml"),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u60c5\u51b5\u628a\u914d\u7f6e\u6587\u4ef6\u5b89\u6392\u5728\u5408\u9002\u7684\u4f4d\u7f6e\uff1b\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"bootstrap:\n  - https://1.12.12.12/dns-query\n  - https://120.53.53.53/dns-query\n  - tls://1.12.12.12\n  - tls://120.53.53.53\nupstream:\n  - https://doh.pub/dns-query\n  - tls://dot.pub\n  - https://dns.alidns.com/dns-query\n  - tls://dns.alidns.com\n  - https://do.360.cn\n  - tls://dot.360.cn\n")),(0,l.kt)("h2",{id:"\u8bd5\u8fd0\u884c"},"\u8bd5\u8fd0\u884c"),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8 dnsproxy\uff0c\u8fd0\u884c\u6210\u529f\u4e4b\u540e dnsproxy \u4f1a\u9ed8\u8ba4\u76d1\u542c\u672c\u673a\u7684 53 \u7aef\u53e3\u5e76\u63d0\u4f9b DNS \u89e3\u6790\u670d\u52a1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'dnsproxy --config-path="C:\\Users\\gem\\.config\\dnsproxy\\config.yml" --all-servers --cache --cache-size=1024000\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u8fd0\u884c dnsproxy",src:t(2518).Z,width:"2166",height:"918"})),(0,l.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"nslookup"),"\u67e5\u8be2 DNS \u8bb0\u5f55\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cmd"},"nslookup 360.cn 127.0.0.1\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u4f7f\u7528 nslookup \u67e5\u8be2 DNS \u8bb0\u5f55",src:t(16728).Z,width:"2174",height:"493"})),(0,l.kt)("p",null,"\u624b\u52a8\u8fd0\u884c\u6ca1\u95ee\u9898\u4e4b\u540e\u5c31\u53ef\u4ee5\u505a\u4e0b\u9762\u7684\u6b65\u9aa4\u4e86\uff1a\u628a dnsproxy \u6ce8\u518c\u4e3a Windows \u670d\u52a1\uff0c\u5f00\u673a\u81ea\u52a8\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5-winsw"},"\u5b89\u88c5 WinSW"),(0,l.kt)("p",null,"WinSW \u662f\u4e00\u4e2a Windows \u670d\u52a1\u5305\u88c5\u5668\u3002\u5b83\u8d1f\u8d23\u628a\u5176\u4ed6\u7a0b\u5e8f\u5305\u88c5\u4e3a\u670d\u52a1\uff0c\u5e76\u7ba1\u7406\u7a0b\u5e8f\u7684\u65e5\u5fd7\u548c\u751f\u547d\u5468\u671f\u3002"),(0,l.kt)("p",null,"dnsproxy \u76f4\u63a5\u6ce8\u518c\u4e3a\u670d\u52a1\u65f6\u4e0d\u80fd\u542f\u52a8\uff0c\u56e0\u4e3a dnsproxy \u6ca1\u6709\u5b9e\u73b0 Windows \u670d\u52a1\u6807\u51c6\uff0c\u542f\u52a8\u4e4b\u540e\u4e0d\u54cd\u5e94\uff0c\u7ed3\u679c\u5c31\u662f\u8d85\u65f6\u4e4b\u540e\u88ab\u7ed3\u675f\u6389\u4e86\u3002\u6240\u4ee5\u9700\u8981\u4f7f\u7528 WinSW \u5305\u88c5\u4e00\u4e0b\u3002"),(0,l.kt)("p",null,"\u7528 Scoop \u5b89\u88c5\u7684 WinSW \u4f7f\u7528\u7684\u65f6\u5019\u6709\u95ee\u9898\uff0c\u6240\u4ee5\u4e0d\u7528 Scoop \u5b89\u88c5\u4e86\u3002"),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u5728",(0,l.kt)("a",{parentName:"p",href:"https://github.com/winsw/winsw/releases"},"\u53d1\u5e03\u9875"),"\u624b\u52a8\u4e0b\u8f7d WinSW \u7684\u53ef\u6267\u884c\u6587\u4ef6\uff0c\u6bd4\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"WinSW-x86.exe"),"\u3002\u5c06\u5176\u66f4\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"WinSW.exe"),"\u5e76\u5c06\u5176\u548c dnsproxy \u7684\u914d\u7f6e\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"config.yml"),"\u653e\u4e8e\u540c\u4e00\u76ee\u5f55\u4e0b\u3002"),(0,l.kt)("h2",{id:"winsw-\u914d\u7f6e\u6587\u4ef6"},"WinSW \u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"WinSW.exe"),"\u540c\u76ee\u5f55\u4e0b\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff0c\u547d\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"WinSW.xml"),"\u3002\u8bf7\u6ce8\u610f\u914d\u7f6e\u6587\u4ef6\u7684\u540d\u79f0\u548c WinSW \u53ef\u6267\u884c\u6587\u4ef6\u7684\u540d\u79f0\u4fdd\u6301\u4e00\u81f4\uff0c\u540e\u7f00\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"xml"),"\u3002\u5176\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<service>\n  <id>dnsproxy</id>\n  <name>dnsproxy</name>\n  <description>dnsproxy service</description>\n  <executable>D:\\Personal\\scoop\\apps\\dnsproxy\\current\\dnsproxy.exe</executable>\n  <arguments>--config-path="C:\\Users\\gem\\.config\\dnsproxy\\config.yml" --all-servers --cache --cache-size=1024000</arguments>\n  <log mode="reset"/>\n  <onfailure action="restart" />\n</service>\n')),(0,l.kt)("h2",{id:"\u6ce8\u518c\u5e76\u542f\u52a8\u670d\u52a1"},"\u6ce8\u518c\u5e76\u542f\u52a8\u670d\u52a1"),(0,l.kt)("p",null,"\u6b64\u65f6\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"..\\dnsproxy\\\n\u251c\u2500\u2500 config.yml\n\u251c\u2500\u2500 WinSW.exe\n\u2514\u2500\u2500 WinSW.xml\n")),(0,l.kt)("p",null,"\u5728\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"p"},"dnsproxy"),"\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"# \u6ce8\u518c\u670d\u52a1\n.\\WinSW.exe install\n# \u542f\u52a8\u670d\u52a1\n.\\WinSW.exe start\n# \u67e5\u770b\u670d\u52a1\u72b6\u6001\n.\\WinSW.exe status\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u4f7f\u7528 WinSW \u547d\u4ee4",src:t(8477).Z,width:"1731",height:"403"})),(0,l.kt)("p",null,"\u8fd0\u884c\u4e4b\u540e WinSW \u4f1a\u5728\u540c\u7ea7\u76ee\u5f55\u4e0b\u751f\u6210\u65e5\u5fd7\u6587\u4ef6\uff0c\u4f60\u53ef\u4ee5\u68c0\u67e5\u65e5\u5fd7\u6587\u4ef6\u6765\u786e\u5b9a dnsproxy \u662f\u5426\u542f\u52a8\u6210\u529f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"..\\dnsproxy\\\n\u251c\u2500\u2500 config.yml\n\u251c\u2500\u2500 WinSW.err.log       # dnsproxy \u7684\u9519\u8bef\u8f93\u51fa\n\u251c\u2500\u2500 WinSW.exe\n\u251c\u2500\u2500 WinSW.out.log       # dnsproxy \u7684\u6807\u51c6\u8f93\u51fa\n\u251c\u2500\u2500 WinSW.wrapper.log   # WinSW \u672c\u8eab\u7684\u65e5\u5fd7\n\u2514\u2500\u2500 WinSW.xml\n")),(0,l.kt)("h2",{id:"\u4fee\u6539\u7f51\u5361-dns-\u670d\u52a1\u5668\u5730\u5740"},"\u4fee\u6539\u7f51\u5361 DNS \u670d\u52a1\u5668\u5730\u5740"),(0,l.kt)("p",null,"\u627e\u5230\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u7f51\u5361\uff0c\u628a IPv4 DNS \u670d\u52a1\u5668\u7684\u5730\u5740\u66f4\u6539\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"\uff0c\u5e76\u4fdd\u5b58\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"\u4fee\u6539\u7f51\u5361 DNS \u670d\u52a1\u5668\u5730\u5740",src:t(56170).Z,width:"930",height:"1162"})),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 IPv6 \u5730\u5740\uff0c\u5c31\u628a IPv6 \u5173\u4e86\uff0c\u76ee\u524d\u914d\u5408 IPv6 \u4f7f\u7528\u6709\u95ee\u9898\u3002"),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.dnspod.cn/Products/publicdns"},"Public DNS+\u2014\u2014DNSPod \u63a8\u51fa\u7684\u57df\u540d\u9012\u5f52\u89e3\u6790\u670d\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://alidns.com/"},"\u963f\u91cc\u516c\u5171 DNS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://sdns.360.net/"},"360 \u5b89\u5168 DNS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dns.icoa.cn/"},"\u514d\u8d39\u516c\u5171 IPv4/IPv6/DoT/DoH DNS \u670d\u52a1\u5668\u5927\u5168 Public DNS Server - DNS.iCoA.CN")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.all-tool.cn/Tools/dnstest/?&rand=a0b6e8ca42ca48f4822ecf574d137c4d"},"Dns \u68c0\u6d4b - \u5728\u7ebf\u5de5\u5177")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/weixin_49393427/article/details/112948712"},"\u5982\u4f55\u4e3a Win10 \u5f00\u542f DoH(DNS over HTTPS)","_","\u82cf\u6253\u5440\u7684\u535a\u5ba2-CSDN \u535a\u5ba2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/netgc/article/details/113599321"},"PowerShell \u4e2d\u5220\u9664 Windows \u670d\u52a1\u7684\u6b63\u786e\u65b9\u6cd5","_","sysin.org \u7684\u535a\u5ba2-CSDN \u535a\u5ba2"))))}m.isMDXComponent=!0},16728:function(e,n,t){n.Z=t.p+"assets/images/2023-04-03-23-12-29-image-4a0b6b07632955db50ddac3718875455.png"},2518:function(e,n,t){n.Z=t.p+"assets/images/2023-04-03-23-16-17-image-540639ec2f89d17573ef3f0c19be2afb.png"},8477:function(e,n,t){n.Z=t.p+"assets/images/2023-04-04-00-09-46-image-f64ebfd5e4e14473dc5a5f1ee4f4e06a.png"},56170:function(e,n,t){n.Z=t.p+"assets/images/2023-04-04-00-13-34-image-5aef59689953bdbc33e6e370d0107780.png"}}]);