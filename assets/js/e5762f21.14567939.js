"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4109],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),k=c(n),u=o,f=k["".concat(p,".").concat(u)]||k[u]||s[u]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},28415:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return s},default:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={date:new Date("2021-09-10T00:00:00.000Z")},p="\u4ee5\u5bb9\u5668\u7684\u65b9\u5f0f\u66b4\u9732 Docker Remote API \u5e76\u542f\u7528 TLS",c={permalink:"/blog/enable-docker-remote-api-with-tls-protection-via-container",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/enable-docker-remote-api-with-tls-protection-via-container.md",source:"@site/blog/enable-docker-remote-api-with-tls-protection-via-container.md",title:"\u4ee5\u5bb9\u5668\u7684\u65b9\u5f0f\u66b4\u9732 Docker Remote API \u5e76\u542f\u7528 TLS",description:"\u524d\u8a00",date:"2021-09-10T00:00:00.000Z",formattedDate:"2021\u5e749\u670810\u65e5",tags:[],truncated:!1,authors:[],prevItem:{title:"Windows Terminal + pwsh + oh my posh3 + PSReadLine \u6253\u9020\u4e00\u4e2a\u597d\u7528\u7684\u7ec8\u7aef",permalink:"/blog/use-pwsh-and-oh-my-posh3-on-windows"},nextItem:{title:"\u5f00\u542f Docker Remote API \u5e76\u542f\u7528 TLS",permalink:"/blog/enable-docker-remote-api-with-tls-protection"}},m={authorsImageUrls:[]},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[],level:2},{value:"\u8865\u5145",id:"\u8865\u5145",children:[],level:2}],k={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u4e4b\u524d\u5728\u201c\u5f00\u542f Docker Remote API \u5e76\u542f\u7528 TLS\u201d",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u4e2d\u8bb0\u5f55\u8fc7 Docker \u66b4\u9732 Remote API \u5e76\u914d\u7f6e TLS \u652f\u6301\uff0c\u867d\u7136\u5176\u4e2d\u5f15\u7528\u4e86\u522b\u4eba\u7684\u811a\u672c\u6765\u7b80\u5316\u8bc1\u4e66\u7684\u7b7e\u53d1\u6b65\u9aa4\uff0c\u4f46\u662f\u5728\u8bc1\u4e66\u7b7e\u53d1\u5b8c\u6210\u4e4b\u540e\u8fd8\u662f\u9700\u8981\u5bf9 Docker \u7684\u542f\u52a8\u547d\u4ee4\u8fdb\u884c\u4fee\u6539\uff0c\u8fd8\u662f\u4e00\u4e2a\u6bd4\u8f83\u7e41\u7410\u7684\u6b65\u9aa4\u3002"),(0,a.kt)("p",null,"\u540e\u6765\u6211\u53d1\u73b0\u4e86 docker-remote-api-tls",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u9879\u76ee\uff0c\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a Docker \u955c\u50cf\uff0c\u5728\u8fd0\u884c\u955c\u50cf\u4e4b\u540e\u5b83\u4f1a\u81ea\u52a8\u5b8c\u6210\u8bc1\u4e66\u7b7e\u53d1\u548c API \u8f6c\u53d1\u6b65\u9aa4\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 Docker Compose \u65b9\u4fbf\u5730\u542f\u52a8\u8fd9\u4e2a\u5bb9\u5668\uff0c\u4e0b\u9762\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\nservices:\n  api:\n    image: kekru/docker-remote-api-tls:v0.3.0\n    ports:\n      - 2376:443\n    environment:\n      - CREATE_CERTS_WITH_PW=dockercompose\n      - CERT_EXPIRATION_DAYS=3650\n      - CA_EXPIRATION_DAYS=36500\n      - CERT_HOSTNAME=192.168.229.129.nip.io\n    volumes:\n      - /root/compose/docker-remote-api-with-tls/certs:/data/certs\n      - /var/run/docker.sock:/var/run/docker.sock:ro\n    restart: unless-stopped\n')),(0,a.kt)("p",null,"\u6709\u4ee5\u4e0b\u51e0\u70b9\u9700\u8981\u6ce8\u610f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7b2c 6 \u884c\uff0c\u5bb9\u5668\u5185\u7684\u7aef\u53e3\u662f 443\uff0c\u9700\u8981\u6620\u5c04\u5230\u5bb9\u5668\u5916 2376 \u7aef\u53e3\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c 8 \u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"CREATE_CERTS_WITH_PW"),"\u8bbe\u7f6e\u8bc1\u4e66\u5bc6\u7801\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c 9 \u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"CERT_EXPIRATION_DAYS"),"\u8bbe\u7f6e\u8bc1\u4e66\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba4 365 \u5929\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c 10 \u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"CA_EXPIRATION_DAYS"),"\u8bbe\u7f6e CA \u8bc1\u4e66\u8fc7\u671f\u65f6\u95f4\uff0c\u9ed8\u8ba4 900 \u5929\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c 11 \u884c\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"CERT_HOSTNAME"),"\u8bbe\u7f6e\u57df\u540d\uff0c\u5982\u679c\u6ca1\u6709\u57df\u540d\u53ef\u4ee5\u7528 nip.io",(0,a.kt)("sup",{parentName:"li",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," \u6765\u5f97\u5230\u4e00\u4e2a\u53ef\u4ee5\u89e3\u6790\u5230\u4efb\u610f IP \u7684\u57df\u540d\u3002\u5f62\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.229.129.nip.io"),"\u7684\u57df\u540d\u4f1a\u88ab\u89e3\u6790\u81f3",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.229.129"),"\uff1b\u8fd8\u6709\u5176\u4ed6\u5f62\u5f0f\u7684\u57df\u540d\u53ef\u4ee5\u5728 nip.io \u7f51\u7ad9\u4e2d\u67e5\u770b\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c 13 \u884c\uff0c\u6302\u8f7d\u8bc1\u4e66\u76ee\u5f55\uff0c\u9996\u6b21\u542f\u52a8\u65f6\u8bc1\u4e66\u4f1a\u88ab\u81ea\u52a8\u521b\u5efa\u5e76\u5b58\u653e\u5728\u6b64\u76ee\u5f55\u4e2d\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c 14 \u884c\uff0c\u6302\u8f7d",(0,a.kt)("inlineCode",{parentName:"li"},"docker.sock"),"\u3002")),(0,a.kt)("p",null,"\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose up -d"),"\u542f\u52a8\u5bb9\u5668\u3002\u6839\u636e\u914d\u7f6e\uff0c\u8bc1\u4e66\u4f1a\u88ab\u81ea\u52a8\u521b\u5efa\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"/root/compose/docker-remote-api-with-tls/certs"),"\u76ee\u5f55\u4e2d\u3002"),(0,a.kt)("p",null,"\u8be5\u76ee\u5f55\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"certs/\n\u251c\u2500\u2500 ca-cert.pem\n\u251c\u2500\u2500 ca-key.pem\n\u251c\u2500\u2500 client\n\u2502\xa0\xa0 \u251c\u2500\u2500 ca.pem\n\u2502\xa0\xa0 \u251c\u2500\u2500 cert.pem\n\u2502\xa0\xa0 \u2514\u2500\u2500 key.pem\n\u251c\u2500\u2500 server-cert.pem\n\u2514\u2500\u2500 server-key.pem\n")),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c\u5ba2\u6237\u7aef\u9700\u8981\u7684\u8bc1\u4e66\u6587\u4ef6\u5b58\u653e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"client"),"\u76ee\u5f55\u4e2d\u3002\u6b64\u65f6 Docker Remote API \u5df2\u7ecf\u66b4\u9732\u5728 2376 \u7aef\u53e3\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528\u8bc1\u4e66\u6587\u4ef6\u6765\u901a\u8fc7\u8ba4\u8bc1\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u91cd\u65b0\u7b7e\u53d1\u8bc1\u4e66\u6587\u4ef6\uff0c\u53ea\u9700\u8981\u6e05\u7a7a",(0,a.kt)("inlineCode",{parentName:"p"},"certs"),"\u6587\u4ef6\u5939\u5e76\u91cd\u542f\u5bb9\u5668\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"\u8865\u5145"},"\u8865\u5145"),(0,a.kt)("p",null,"\u56fd\u5185\u7684 IP \u8bf7\u4f7f\u7528\u5df2\u5907\u6848\u57df\u540d\uff0c\u4e0d\u7136\u53ef\u80fd\u4f1a\u88ab\u963b\u65ad\uff0c\u5bfc\u81f4\u8fde\u63a5\u4e0d\u4e0a\u3002"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},(0,a.kt)("a",{parentName:"li",href:"/blog/enable-docker-remote-api-with-tls-protection"},"\u5f00\u542f Docker Remote API \u5e76\u542f\u7528 TLS"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kekru/docker-remote-api-tls"},"kekru/docker-remote-api-tls: Docker Image that forwards to the Docker API Socket and requires TLS Client authentication"),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},(0,a.kt)("a",{parentName:"li",href:"https://nip.io/"},"nip.io - wildcard DNS for any IP Address"),(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);