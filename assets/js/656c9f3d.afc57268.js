"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1178],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=u(n),d=r,m=k["".concat(p,".").concat(d)]||k[d]||c[d]||l;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},10577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=["components"],o={date:new Date("2022-05-21T00:00:00.000Z"),tags:["git","docker","gitea"]},p="Gitea\uff1a\u8f7b\u91cf\u7ea7\u81ea\u5efa Git \u670d\u52a1",u={permalink:"/blog/self-hosted-git-service-gitea",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/self-hosted-git-service-gitea.md",source:"@site/blog/self-hosted-git-service-gitea.md",title:"Gitea\uff1a\u8f7b\u91cf\u7ea7\u81ea\u5efa Git \u670d\u52a1",description:"\u524d\u8a00",date:"2022-05-21T00:00:00.000Z",formattedDate:"2022\u5e745\u670821\u65e5",tags:[{label:"git",permalink:"/blog/tags/git"},{label:"docker",permalink:"/blog/tags/docker"},{label:"gitea",permalink:"/blog/tags/gitea"}],readingTime:5.755,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-05-21T00:00:00.000Z",tags:["git","docker","gitea"]},prevItem:{title:"restic\uff1a\u8f7b\u91cf\u3001\u8de8\u5e73\u53f0\u7684\u589e\u91cf\u5907\u4efd\u5de5\u5177",permalink:"/blog/restic-backup-tool"},nextItem:{title:"Scoop\uff1a\u7528 aria2 \u52a0\u901f\u4e0b\u8f7d",permalink:"/blog/scoop-with-aria2-for-multi-thread-download"}},s={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Gitea",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-gitea",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u53cd\u5411\u4ee3\u7406\u4ee5\u53ca HTTPS \u914d\u7f6e",id:"\u53cd\u5411\u4ee3\u7406\u4ee5\u53ca-https-\u914d\u7f6e",level:2},{value:"\u521d\u6b21\u8bbe\u7f6e",id:"\u521d\u6b21\u8bbe\u7f6e",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u53cc\u56e0\u7d20\u8ba4\u8bc1",id:"\u53cc\u56e0\u7d20\u8ba4\u8bc1",level:2},{value:"\u955c\u50cf\u4ed3\u5e93",id:"\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u6570\u636e\u5907\u4efd",id:"\u6570\u636e\u5907\u4efd",level:2}],k={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u6700\u8fd1\u53d1\u751f\u4e86\u4e00\u4e9b\u4e8b\u4ef6\uff1aGithub \u5c01\u7981\u67d0\u4e9b\u56fd\u5bb6\u7528\u6237\u7684\u8d26\u53f7\uff1bGitee \u516c\u5f00\u4ed3\u5e93\u53d8\u79c1\u6709\uff0c\u516c\u5f00\u9700\u901a\u8fc7\u5ba1\u6838\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u5927\u5e73\u53f0\u63d0\u4f9b\u7684\u670d\u52a1\u770b\u8d77\u6765\u4e5f\u4e0d\u662f\u90a3\u4e48\u53ef\u9760\u3002\u8fd9\u65f6\u5019\u4f60\u53ef\u4ee5\u81ea\u5efa\u4e00\u4e2a Git \u670d\u52a1\u5e73\u53f0\u81ea\u7528\uff0c\u81ea\u5df1\u4fdd\u7ba1\u6570\u636e\u3002"),(0,l.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-gitea"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Gitea"),(0,l.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u4e86 Gitea",(0,l.kt)("sup",{parentName:"p",id:"fnref-1-70bad4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-70bad4",className:"footnote-ref"},"1"))," \u7684\u4f18\u70b9\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Gitea \u5360\u7528\u8d44\u6e90\u4f4e\uff0c300MB \u5185\u5b58\u8db3\u4ee5\u6ee1\u8db3\u4e2a\u4eba\u4f7f\u7528\uff0c\u5176\u5728\u5b98\u65b9\u7f51\u9875\u4e0a\u7684\u4ecb\u7ecd\u8bf4\u660e\u5728\u6811\u8393\u6d3e\u4e0a\u8db3\u4ee5\u8fd0\u884c\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7528 Go \u8bed\u8a00\u5b9e\u73b0\uff0c\u53ef\u4ee5\u90e8\u7f72\u5728\u5f88\u591a\u5e73\u53f0\u4e0a\uff0c\u5e76\u4e14\u4e0d\u4f1a\u6709\u4f9d\u8d56\u95ee\u9898\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u65b9\u4fbf\uff0c\u4f7f\u7528 Docker \u53ef\u4ee5\u76f4\u63a5\u90e8\u7f72\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5916\u90e8\u4f9d\u8d56\u5c11\uff0c\u53ef\u4ee5\u4f7f\u7528 SQLite \u4f5c\u4e3a\u6570\u636e\u5e93\uff0c\u4e2a\u4eba\u4f7f\u7528\u5b8c\u5168\u8db3\u591f\uff0c\u6570\u636e\u8fc1\u79fb\u4e5f\u65b9\u4fbf\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5f00\u6e90\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u529f\u80fd\u4e30\u5bcc\uff0c\u4ed3\u5e93\u6709 Issues\u3001Pull Requests\u3001Projects\u3001Releases\u3001Wiki \u4ee5\u53ca Activity \u7b49\u677f\u5757\uff1b\u5e76\u4e14\u53ef\u4ee5\u8bbe\u7f6e Webhooks\u3001Push Mirrow\u3001\u955c\u50cf\u4ed3\u5e93\u7b49\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7528\u6237\u754c\u9762\u6a21\u4eff Github\uff0c\u5b66\u4e60\u6210\u672c\u4f4e\uff0c\u4f7f\u7528\u4f53\u9a8c\u826f\u597d\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u6709\u5b8c\u6574\u7684\u7528\u6237\u548c\u7ec4\u7ec7\u7cfb\u7edf\u3002")),(0,l.kt)("p",null,"Gitea \u6ca1\u6709\u96c6\u6210 CI/CD \u5de5\u5177\uff0c\u56e0\u4e3a CI/CD \u5de5\u5177\u6bd4\u8f83\u8017\u8d44\u6e90\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 Docker Compose \u5feb\u901f\u90e8\u7f72 Gitea \u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u7684\u5185\u5bb9\u793a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  server:\n    image: gitea/gitea\n    restart: unless-stopped\n    ports:\n      - 127.0.0.1:13000:3000\n      - 127.0.0.1:2222:22\n    volumes:\n      - data:/data\nvolumes:\n  data:\n')),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u7684\u7b80\u77ed\u8bf4\u660e\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ports"),"\uff1a\u5bb9\u5668\u7684 3000 \u7aef\u53e3\u4e3a Web UI \u7684\u76d1\u542c\u7aef\u53e3\uff1b\u5bb9\u5668\u7684 22 \u7aef\u53e3\u4e3a SSH \u7aef\u53e3\uff0c\u7528\u4e8e SSH \u65b9\u5f0f\u8bbf\u95ee Git \u4ed3\u5e93\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"volumes"),"\uff1aGitea \u7684\u6570\u636e\u90fd\u4fdd\u5b58\u5728\u5bb9\u5668\u5185\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"/data"),"\u76ee\u5f55\u4e2d\uff0c\u5305\u62ec\u6240\u6709 Git \u4ed3\u5e93\u7684\u6587\u4ef6\u90fd\u4fdd\u5b58\u5728\u6b64\u76ee\u5f55\u4e2d\u3002")),(0,l.kt)("h2",{id:"\u53cd\u5411\u4ee3\u7406\u4ee5\u53ca-https-\u914d\u7f6e"},"\u53cd\u5411\u4ee3\u7406\u4ee5\u53ca HTTPS \u914d\u7f6e"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 Web \u670d\u52a1\u5668\u5bf9 Gitea \u7684 Web UI \u8fdb\u884c\u53cd\u5411\u4ee3\u7406\uff0c\u901a\u8fc7\u57df\u540d\u66b4\u9732\u5728\u516c\u7f51\u4e2d\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u4f7f\u7528 Caddy \u8fdb\u884c\u53cd\u5411\u4ee3\u7406\u7684\u793a\u4f8b\uff0c\u8fd9\u662f Caddyfile \u7684\u90e8\u5206\u5185\u5bb9\u3002Caddy \u4f1a\u81ea\u52a8\u7533\u8bf7\u57df\u540d\u8bc1\u4e66\u5e76\u914d\u7f6e HTTPS\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-caddyfile"},"*.iuok.me {\n  tls {\n    dns cloudflare xxxxxx\n  }\n\n  @gitea host gitea.iuok.me\n  handle @gitea {\n    reverse_proxy localhost:13000\n    import hsts\n  }\n\n  handle {\n    abort\n  }\n}\n")),(0,l.kt)("h2",{id:"\u521d\u6b21\u8bbe\u7f6e"},"\u521d\u6b21\u8bbe\u7f6e"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165\u4f60\u7684 Gitea \u57df\u540d\u8fdb\u884c\u8bbf\u95ee\uff0c\u521d\u6b21\u8bbf\u95ee\u7684\u65f6\u5019\u4f1a\u8fdb\u5165\u8bbe\u7f6e\u9875\u9762\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u5f00\u542f SSH\uff0c\u5982\u679c\u628a SSH \u7aef\u53e3\u8bbe\u7f6e\u4e3a 0 \u5219\u610f\u5473\u5173\u95ed SSH \u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210\u5b89\u88c5\u540e\u5982\u679c\u518d\u9700\u8981\u66f4\u6539\u67d0\u4e9b\u8bbe\u7f6e\u9700\u8981\u624b\u52a8\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u66f4\u6539\uff0c\u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e\u5bb9\u5668\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"/data/gitea/conf/app.ini"),"\u3002\u914d\u7f6e\u6587\u4ef6\u7684\u914d\u7f6e\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u5176\u5b98\u65b9\u6587\u6863 ",(0,l.kt)("sup",{parentName:"p",id:"fnref-2-70bad4"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-70bad4",className:"footnote-ref"},"2")),"\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u53ea\u60f3\u81ea\u5df1\u4e00\u4e2a\u4eba\u7528\u7684\u8bdd\u9700\u8981\u8bbe\u7f6e\u4e0d\u5141\u8bb8\u65b0\u7528\u6237\u6ce8\u518c\uff0c\u5e76\u4e14\u628a\u81ea\u5df1\u7684\u8d26\u53f7\u548c\u4ed3\u5e93\u90fd\u8bbe\u7f6e\u4e3a\u79c1\u6709\u7684\uff1b\u516c\u5171\u7684\u4ed3\u5e93\u53ef\u4ee5\u5728\u4e3b\u9875\u88ab\u8bbf\u5ba2\u6d4f\u89c8\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u4f53\u9a8c\u548c Github \u5dee\u4e0d\u591a\u3002"),(0,l.kt)("h2",{id:"\u53cc\u56e0\u7d20\u8ba4\u8bc1"},"\u53cc\u56e0\u7d20\u8ba4\u8bc1"),(0,l.kt)("p",null,"\u4e3a\u4e86\u63d0\u9ad8\u8d26\u6237\u7684\u5b89\u5168\u6027\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8d26\u6237\u7684\u53cc\u56e0\u7d20\u8ba4\u8bc1\u3002"),(0,l.kt)("p",null,"\u5728\u300cSettings\u300d->\u300cSecurity\u300d->\u300cTwo-Factor Authentication\u300d\u4e2d\u53ef\u4ee5\u5f00\u542f\u53cc\u56e0\u7d20\u8ba4\u8bc1\u3002\u4f7f\u7528\u652f\u6301 TOTP \u7684\u4ee4\u724c\u8f6f\u4ef6\u90fd\u53ef\u4ee5\u751f\u6210\u767b\u5f55\u4ee4\u724c\uff1b\u5982 Authy\u3001Google Authenticator \u6216 Bitwarden \u7b49\u8f6f\u4ef6\u3002"),(0,l.kt)("p",null,"\u5f00\u542f\u4e4b\u540e\u5728\u767b\u5f55\u65f6\u9664\u4e86\u8f93\u5165\u5bc6\u7801\u4e4b\u5916\uff0c\u8fd8\u4f1a\u8981\u6c42\u4f60\u8f93\u5165\u4e00\u4e2a\u52a8\u6001\u9a8c\u8bc1\u7801\uff0c\u8be5\u9a8c\u8bc1\u7801\u968f\u65f6\u95f4\u53d8\u5316\u3002"),(0,l.kt)("p",null,"\u5f00\u4e86\u53cc\u56e0\u7d20\u8ba4\u8bc1\u4e4b\u540e\u5728\u4f7f\u7528 HTTPS \u65b9\u5f0f\u8bbf\u95ee Git \u4ed3\u5e93\u65f6\u5c31\u4e0d\u80fd\u7528\u539f\u6765\u7684\u5bc6\u7801\u4e86\uff0c\u9700\u8981\u4f60\u5355\u72ec\u751f\u6210\u4e00\u4e2a Access Token \u6765\u8bbf\u95ee\u4ed3\u5e93\u3002Access Token \u9700\u8981\u5728\u300cSettings\u300d->\u300cApplications\u300d->\u300cManage Access Tokens\n\u300d\u4e2d\u521b\u5efa\u3002"),(0,l.kt)("h2",{id:"\u955c\u50cf\u4ed3\u5e93"},"\u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("p",null,"\u5728 Gitea \u4e2d\u53ef\u4ee5\u521b\u5efa\u955c\u50cf\u4ed3\u5e93\uff0c\u7528\u4e8e\u5b9a\u65f6\u4ece\u6e90\u4ed3\u5e93\u4e2d\u540c\u6b65\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u5728\u521b\u5efa\u4ed3\u5e93\u7684\u65f6\u5019\u9009\u62e9\u8fc1\u79fb\u4ed3\u5e93\uff0c\u5728\u8fc1\u79fb\u9009\u9879\u4e2d\u52fe\u9009\u300cThis repository will be a mirror\u300d\u5373\u53ef\u521b\u5efa\u4e00\u4e2a\u955c\u50cf\u4ed3\u5e93\u3002"),(0,l.kt)("p",null,"\u53ea\u6709\u521b\u5efa\u4ed3\u5e93\u7684\u65f6\u5019\u53ef\u4ee5\u9009\u62e9\u521b\u5efa\u955c\u50cf\u4ed3\u5e93\uff0c\u4e0d\u53ef\u4ee5\u628a\u73b0\u6709\u4ed3\u5e93\u6539\u4e3a\u955c\u50cf\u4ed3\u5e93\uff1b\u955c\u50cf\u4ed3\u5e93\u4e4b\u540e\u53ef\u4ee5\u6539\u4e3a\u666e\u901a\u4ed3\u5e93\u3002"),(0,l.kt)("h2",{id:"\u6570\u636e\u5907\u4efd"},"\u6570\u636e\u5907\u4efd"),(0,l.kt)("p",null,"\u81ea\u5efa\u7684\u670d\u52a1\u8981\u505a\u597d\u6570\u636e\u5907\u4efd\u5de5\u4f5c\uff0c\u56e0\u4e3a VPS \u63d0\u4f9b\u5546\u4e5f\u4e0d\u4e00\u5b9a\u53ef\u9760\uff0c\u4e5f\u6709\u53ef\u80fd\u53d1\u751f\u610f\u5916\u4e8b\u6545\uff0c\u5bfc\u81f4\u6570\u636e\u4e22\u5931\u3002"),(0,l.kt)("p",null,"Gitea \u7684\u6570\u636e\u6587\u4ef6\u7ed3\u6784\u6bd4\u8f83\u7b80\u5355\uff0c\u76f4\u63a5\u5907\u4efd Docker Volume \u5bf9\u5e94\u7684\u76ee\u5f55\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDocker Volume \u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/volume"),"\u4e0b\uff0c\u5907\u4efd",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u4e2d\u5bf9\u5e94\u7684\u6570\u636e\u5377\u4e2d\u7684\u5185\u5bb9\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 restic \u5907\u4efd\u5230\u5176\u5b83\u670d\u52a1\u5546\u63d0\u4f9b\u7684\u5bf9\u8c61\u5b58\u50a8\u4e2d\uff1b\u6ce8\u610f\u8981\u5f02\u5730\u5907\u4efd\uff0c\u5907\u4efd\u5728\u672c\u673a\u65e0\u610f\u4e49\u3002"),(0,l.kt)("p",null,"\u6062\u590d\u6570\u636e\u7684\u65f6\u5019\u624b\u52a8\u521b\u5efa Volume\uff0c\u628a\u5907\u4efd\u5185\u5bb9\u8fd8\u539f\uff0c\u7136\u540e\u518d\u542f\u52a8 Gitea \u5bb9\u5668\u5373\u53ef\u3002"),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-70bad4"},(0,l.kt)("a",{parentName:"li",href:"https://gitea.io/en-us/"},"Gitea"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1-70bad4",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2-70bad4"},(0,l.kt)("a",{parentName:"li",href:"https://docs.gitea.io/en-us/"},"Documentation - Docs"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2-70bad4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);