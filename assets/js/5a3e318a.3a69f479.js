"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4387],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return s}});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},f=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),f=p(n),s=l,k=f["".concat(i,".").concat(s)]||f[s]||m[s]||r;return n?t.createElement(k,o(o({ref:a},c),{},{components:n})):t.createElement(k,o({ref:a},c))}));function s(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=f;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d.mdxType="string"==typeof e?e:l,o[1]=d;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3177:function(e,a,n){n.r(a),n.d(a,{assets:function(){return c},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var t=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],d={date:new Date("2022-01-22T00:00:00.000Z"),tags:["caddy"]},i="\u4f7f\u7528 Caddy \u81ea\u52a8\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66",p={permalink:"/blog/wildcard-certificates-with-caddy",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/wildcard-certificates-with-caddy.md",source:"@site/blog/wildcard-certificates-with-caddy.md",title:"\u4f7f\u7528 Caddy \u81ea\u52a8\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66",description:"\u6cdb\u57df\u540d\u8bc1\u4e66",date:"2022-01-22T00:00:00.000Z",formattedDate:"2022\u5e741\u670822\u65e5",tags:[{label:"caddy",permalink:"/blog/tags/caddy"}],truncated:!0,authors:[],frontMatter:{date:"2022-01-22T00:00:00.000Z",tags:["caddy"]},prevItem:{title:"\u4f18\u96c5\u5730\u91cd\u8f7d Caddyfile",permalink:"/blog/reload-caddyfile-gracefully"},nextItem:{title:"\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939",permalink:"/blog/mount-tencent-cos-on-local-file-system"}},c={authorsImageUrls:[]},m=[{value:"\u6cdb\u57df\u540d\u8bc1\u4e66",id:"\u6cdb\u57df\u540d\u8bc1\u4e66",level:2},{value:"\u9700\u8981\u505a\u7684\u4e8b\u60c5",id:"\u9700\u8981\u505a\u7684\u4e8b\u60c5",level:2},{value:"Cloudflare \u4f8b\u5b50",id:"cloudflare-\u4f8b\u5b50",level:2},{value:"\u7f16\u5199 Dockerfile",id:"\u7f16\u5199-dockerfile",level:3},{value:"\u83b7\u53d6 Cloudflare Token",id:"\u83b7\u53d6-cloudflare-token",level:3},{value:"\u7f16\u5199 Caddyfile",id:"\u7f16\u5199-caddyfile",level:3},{value:"\u4f7f\u7528 Docker Compose \u8fd0\u884c",id:"\u4f7f\u7528-docker-compose-\u8fd0\u884c",level:3},{value:"DNSPod \u4f8b\u5b50",id:"dnspod-\u4f8b\u5b50",level:2},{value:"\u7f16\u5199 Dockerfile",id:"\u7f16\u5199-dockerfile-1",level:3},{value:"\u83b7\u53d6 DNSPod Token",id:"\u83b7\u53d6-dnspod-token",level:3},{value:"\u7f16\u5199 Caddyfile",id:"\u7f16\u5199-caddyfile-1",level:3},{value:"\u4f7f\u7528 Docker Compose \u8fd0\u884c",id:"\u4f7f\u7528-docker-compose-\u8fd0\u884c-1",level:3},{value:"\u540e\u8bb0",id:"\u540e\u8bb0",level:2}],f={toc:m};function s(e){var a=e.components,d=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},f,d,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u6cdb\u57df\u540d\u8bc1\u4e66"},"\u6cdb\u57df\u540d\u8bc1\u4e66"),(0,r.kt)("p",null,"\u5728 Caddy \u4e2d\u4e66\u5199 Matcher \u65f6\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\uff0cCaddy \u4f1a\u81ea\u52a8\u4e3a\u4f60\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66\uff0c\u4f46\u662f\u9700\u8981\u5408\u9002\u7684\u914d\u7f6e\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\u5305\u62ec",(0,r.kt)("inlineCode",{parentName:"p"},"foo.example.com"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"bar.example.com"),"\u7b49\u5176\u5b83\u4e8c\u7ea7\u57df\u540d\uff0c\u4f46\u662f\u4e0d\u5305\u62ec\u9876\u7ea7\u57df\u540d",(0,r.kt)("inlineCode",{parentName:"p"},"example.com"),"\uff1b\u540c\u65f6\u4e0d\u5305\u62ec\u5176\u5b83\u7b49\u7ea7\u7684\u57df\u540d\uff0c\u53ea\u5305\u62ec\u540c\u7b49\u7ea7\u57df\u540d\u3002"),(0,r.kt)("p",null,"\u901a\u914d\u7b26",(0,r.kt)("inlineCode",{parentName:"p"},"*"),"\u53ea\u80fd\u653e\u5728\u6700\u5de6\u8fb9\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"*.example.com"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"*.foo.example.com"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"*.bar.example.com"),"\u7b49\uff1b\u4e0d\u80fd\u5199\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"foo.*.example.com"),"\u3002"),(0,r.kt)("h2",{id:"\u9700\u8981\u505a\u7684\u4e8b\u60c5"},"\u9700\u8981\u505a\u7684\u4e8b\u60c5"),(0,r.kt)("p",null,"\u4e0d\u50cf\u5355\u57df\u540d\u8bc1\u4e66\u53ef\u4ee5\u4f7f\u7528\u6587\u4ef6\u9a8c\u8bc1\u7684\u65b9\u5f0f\u6765\u5b8c\u6210\u7533\u8bf7\uff0c\u6cdb\u57df\u540d\u8bc1\u4e66\u8981\u6c42 DNS \u9a8c\u8bc1\uff0c\u8fd9\u8981\u6c42\u4f60\u5f97\u6709\u6743\u9650\u4fee\u6539\u8be5\u57df\u540d\u7684 DNS \u8bb0\u5f55\uff0c\u5e76\u4e14\u4f60\u7684 DNS \u670d\u52a1\u5546\u8981\u88ab Caddy \u652f\u6301\u624d\u53ef\u4ee5\u3002"),(0,r.kt)("p",null,"Caddy \u5bf9 DNS \u7684\u4fee\u6539\u529f\u80fd\u662f\u7531 Caddy \u7684 DNS \u6a21\u7ec4\u5b9e\u73b0\u7684\uff0c\u4f7f\u7528\u6a21\u7ec4\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u6269\u5c55 Caddy\u3002\u4f60\u53ef\u4ee5\u5728 caddy-dns \u7684\u4ed3\u5e93\u5217\u8868 ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u4e2d\u67e5\u770b\u4f60\u7684 DNS \u670d\u52a1\u5546\u662f\u5426\u53d7\u652f\u6301\u3002"),(0,r.kt)("p",null,"Caddy \u7684\u5b98\u65b9 Docker \u955c\u50cf ",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u5e76\u4e0d\u5305\u62ec\u4efb\u4f55\u6a21\u7ec4\uff0c\u53ea\u6709\u539f\u7248\u7684 Caddy\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u5e26\u6a21\u7ec4\u7684\u955c\u50cf\u8bdd\u9700\u8981\u81ea\u5df1\u6784\u5efa\u3002Caddy \u63d0\u4f9b\u4e86 xcaddy",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," \u5de5\u5177\u6765\u5e2e\u52a9\u4f60\u7f16\u8bd1\u5e26\u6a21\u7ec4\u7684 Caddy\uff0c\u5e76\u4e14\u4e5f\u63d0\u4f9b\u4e86\u4f7f\u7528\u793a\u4f8b ",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\uff0c\u53c2\u8003\u8fd9\u4e9b\u8bf4\u660e\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u6784\u5efa\u81ea\u5df1\u7684 Caddy \u955c\u50cf\u3002"),(0,r.kt)("p",null,"\u4e0b\u6587\u4e2d\u8bb0\u5f55\u4e86\u6211\u7528\u8fc7\u7684\u4e24\u4e2a DNS \u670d\u52a1\u5546\u6a21\u7ec4\uff0c\u5206\u522b\u662f Cloudflare \u548c DNSPod\u3002"),(0,r.kt)("h2",{id:"cloudflare-\u4f8b\u5b50"},"Cloudflare \u4f8b\u5b50"),(0,r.kt)("h3",{id:"\u7f16\u5199-dockerfile"},"\u7f16\u5199 Dockerfile"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff0c\u7528\u4e8e\u6784\u5efa Docker \u955c\u50cf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM caddy:builder AS builder\nRUN xcaddy build --with github.com/caddy-dns/cloudflare\nFROM caddy\nCOPY --from=builder /usr/bin/caddy /usr/bin/caddy\n")),(0,r.kt)("p",null,"\u6bcf\u884c\u547d\u4ee4\u7684\u89e3\u91ca\u5982\u4e0b\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"caddy:builder"),"\u955c\u50cf\uff0c\u8d77\u522b\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"builder"),"\uff0c\u8be5\u955c\u50cf\u4e2d\u5305\u542b\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"go"),"\u73af\u5883\u548c",(0,r.kt)("inlineCode",{parentName:"li"},"xcaddy"),"\u5de5\u5177\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"xcaddy"),"\u6765\u7f16\u8bd1",(0,r.kt)("inlineCode",{parentName:"li"},"caddy"),"\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"--with"),"\u53c2\u6570\u6307\u5b9a\u9644\u52a0\u7684\u6a21\u7ec4\uff0c\u8be5\u53c2\u6570\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\uff0c\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u9644\u52a0\u591a\u4e2a\u6a21\u7ec4\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"github.com/caddy-dns/cloudflare"),(0,r.kt)("sup",{parentName:"li",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u539f\u7248\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"caddy"),"\u955c\u50cf\uff1b"),(0,r.kt)("li",{parentName:"ol"},"\u590d\u5236\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"builder"),"\u955c\u50cf\u4e2d\u4f60\u81ea\u5df1\u7f16\u8bd1\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"caddy"),"\u8986\u76d6\u6389\u539f\u7248",(0,r.kt)("inlineCode",{parentName:"li"},"caddy"),"\uff0c\u5e76\u4f7f\u7528\u6b64\u955c\u50cf\u4f5c\u4e3a\u6700\u7ec8\u955c\u50cf\u3002")),(0,r.kt)("h3",{id:"\u83b7\u53d6-cloudflare-token"},"\u83b7\u53d6 Cloudflare Token"),(0,r.kt)("p",null,"\u5728 Cloudflare \u7684 API Tokens",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))," \u9875\u9762\u4e2d\u521b\u5efa\u4e00\u4e2a API Token\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220123001758949",src:n(5875).Z,width:"2204",height:"434"})),(0,r.kt)("p",null,"\u9009\u62e9\u4f7f\u7528\u7f16\u8f91 DNS \u6a21\u677f\u6765\u521b\u5efa API Token\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220123001847246",src:n(237).Z,width:"1476",height:"1238"})),(0,r.kt)("p",null,"\u5728 Zone Resources \u4e2d\u9009\u62e9\u76ee\u6807\u57df\u540d\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220123002105447",src:n(645).Z,width:"1866",height:"1678"})),(0,r.kt)("p",null,"\u786e\u8ba4\u4e4b\u540e\u4f1a\u7ed9\u4f60\u751f\u6210\u4e00\u4e2a Token\uff0c\u4f60\u9700\u8981\u4fdd\u5b58\u5b83\u3002"),(0,r.kt)("h3",{id:"\u7f16\u5199-caddyfile"},"\u7f16\u5199 Caddyfile"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Caddyfile"),"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff0c\u4f5c\u4e3a Caddy \u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-caddyfile"},"{\n    email example@gmail.com\n}\n\n*.example.com {\n    tls {\n        dns cloudflare <CF_API_TOKEN>\n    }\n\n    @foo host foo.example.com\n    handle @foo {\n        reverse_proxy localhost:1000\n    }\n\n    @bar host bar.example.com\n    handle @bar {\n        reverse_proxy localhost:2000\n    }\n\n    handle {\n        abort\n    }\n}\n\nexample.com {\n    reverse_proxy localhost:3000\n}\n\nfoo.bar.example.com {\n    reverse_proxy localhost:4000\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1-3\uff1a\u5168\u5c40\u914d\u7f6e\u533a\u5757\uff0c\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"email"),"\u6307\u5b9a\u7533\u8bf7\u8bc1\u4e66\u65f6\u7528\u7684\u90ae\u7bb1\uff0c\u5199\u4f60\u81ea\u5df1\u7684\u90ae\u7bb1\uff1b"),(0,r.kt)("li",{parentName:"ul"},"5-23\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"*.example.com"),"\u6cdb\u57df\u540d\u914d\u7f6e\uff1b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"7\uff1a\u6307\u5b9a DNS \u670d\u52a1\u5546\u4e3a Cloudflare \u5e76\u4e14\u914d\u7f6e Cloudflare \u7684 API Token\uff0c\u66ff\u6362",(0,r.kt)("inlineCode",{parentName:"li"},"<CF_API_TOKEN>"),"\u4e3a\u4f60\u81ea\u5df1\u7684\uff1b"),(0,r.kt)("li",{parentName:"ul"},"10-18\uff1a\u4f7f\u7528\u5177\u540d Matcher \u548c",(0,r.kt)("inlineCode",{parentName:"li"},"handle"),"\u6307\u4ee4\u6765\u914d\u7f6e\u6bcf\u4e2a\u4f7f\u7528\u6cdb\u57df\u540d\u8bc1\u4e66\u7684\u7ad9\u70b9\uff1b"),(0,r.kt)("li",{parentName:"ul"},"20-22\uff1a\u5176\u5b83\u672a\u5b9a\u4e49\u7684\u57df\u540d\u76f4\u63a5\u4e22\u5f03\u8fde\u63a5\uff0c\u8fd9\u9700\u8981\u5199\u5728\u6240\u6709\u7ad9\u70b9\u540e\u9762\u3002"))),(0,r.kt)("li",{parentName:"ul"},"25-31\uff1a\u5176\u5b83\u4e0d\u5339\u914d\u6cdb\u57df\u540d\u7684\u57df\u540d\u914d\u7f6e\uff0c\u8fd8\u548c\u6b63\u5e38\u4f7f\u7528\u4e00\u6837\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528-docker-compose-\u8fd0\u884c"},"\u4f7f\u7528 Docker Compose \u8fd0\u884c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff0c\u7528\u4e8e\u5feb\u901f\u8fd0\u884c\u5bb9\u5668\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3"\nservices:\n  caddy:\n    build: .\n    restart: unless-stopped\n    network_mode: host\n    volumes:\n      - data:/data\n      - ./Caddyfile:/etc/caddy/Caddyfile\nvolumes:\n  data:\n')),(0,r.kt)("p",null,"\u5f53\u524d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"caddy\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 Caddyfile\n\u2514\u2500\u2500 docker-compose.yml\n")),(0,r.kt)("p",null,"\u5728 caddy \u76ee\u5f55\u4e0b\u8fd0\u884c\u547d\u4ee4\u3002Docker Compose \u4f1a\u6839\u636e Dockerfile \u6784\u5efa\u955c\u50cf\u5e76\u8fd0\u884c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up --build -d\n")),(0,r.kt)("h2",{id:"dnspod-\u4f8b\u5b50"},"DNSPod \u4f8b\u5b50"),(0,r.kt)("p",null,"\u548c\u4f7f\u7528 Cloudflare \u5dee\u4e0d\u591a\u3002"),(0,r.kt)("h3",{id:"\u7f16\u5199-dockerfile-1"},"\u7f16\u5199 Dockerfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM caddy:builder AS builder\nRUN go env -w GOPROXY=https://goproxy.cn,direct\nRUN xcaddy build --with github.com/caddy-dns/dnspod\nFROM caddy\nCOPY --from=builder /usr/bin/caddy /usr/bin/caddy\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a Dockerfile \u6587\u4ef6\u7684\u5185\u5bb9\u548c\u4f7f\u7528 Cloudfalre \u65f6 Dockerfile \u7684\u5185\u5bb9\u6709\u4e9b\u8bb8\u4e0d\u540c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b2c 2 \u884c\u6307\u5b9a\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"go get"),"\u4f7f\u7528\u56fd\u5185\u4ee3\u7406\uff0c\u56e0\u4e3a\u6211\u7684\u8fd9\u53f0\u670d\u52a1\u5668\u5728\u56fd\u5185\uff0c\u5728\u4e0b\u8f7d\u4f9d\u8d56\u7684\u65f6\u5019\u9047\u5230\u4e86\u4e00\u4e9b\u7f51\u7edc\u95ee\u9898\uff0c\u5982\u679c\u4f60\u5728\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"go get"),"\u7684\u65f6\u5019\u4e5f\u9047\u5230\u4e86\u7f51\u7edc\u95ee\u9898\u53ef\u4ee5\u8bd5\u8bd5\u6dfb\u52a0\u8fd9\u884c\u547d\u4ee4\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"li"},"xcaddy build"),"\u547d\u4ee4\u4e4b\u524d\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u7b2c 3 \u884c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"xcaddy"),"\u6765\u7f16\u8bd1",(0,r.kt)("inlineCode",{parentName:"li"},"caddy"),"\uff0c\u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"--with"),"\u53c2\u6570\u6307\u5b9a\u9644\u52a0\u7684\u6a21\u7ec4\uff0c\u8be5\u53c2\u6570\u53ef\u4ee5\u91cd\u590d\u4f7f\u7528\uff0c\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u9644\u52a0\u591a\u4e2a\u6a21\u7ec4\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"li"},"github.com/caddy-dns/dnspod"),(0,r.kt)("sup",{parentName:"li",id:"fnref-6"},(0,r.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")),"\uff1b")),(0,r.kt)("h3",{id:"\u83b7\u53d6-dnspod-token"},"\u83b7\u53d6 DNSPod Token"),(0,r.kt)("p",null,"\u5728 DNSPod API \u5bc6\u94a5\u9875\u9762 ",(0,r.kt)("sup",{parentName:"p",id:"fnref-7"},(0,r.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7"))," \u4e2d\u751f\u6210\u4e00\u4e2a Token\uff0c\u5728\u751f\u6210 Token \u4e4b\u540e\u4f60\u9700\u8981\u4fdd\u5b58\u4e0b\u6765\uff0c\u5b83\u53ea\u4f1a\u5b8c\u6574\u5730\u663e\u793a\u4e00\u6b21\uff0c\u4ee5\u540e\u90fd\u4e0d\u80fd\u5b8c\u6574\u5730\u67e5\u770b\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220123003832951",src:n(9354).Z,width:"3166",height:"640"})),(0,r.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f DNSPod Token \u4f7f\u7528\u65f6\u6709\u4e9b\u4e0d\u4e00\u6837\uff0c\u4f60\u7533\u8bf7\u7684\u5bc6\u94a5\u6709 ID \u548c Token\uff0c\u5728\u4f7f\u7528\u65f6\u9700\u8981\u628a\u4e24\u8005\u7ec4\u5408\u8d77\u6765\uff0c\u4e2d\u95f4\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\uff0c\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"<id>,<token>"),"\uff0c\u5728\u4f7f\u7528\u65f6\u4f60\u9700\u8981\u5c06\u5185\u5bb9\u66ff\u6362\u4e3a\u81ea\u5df1\u7684 ID \u548c Token\uff0c\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003 DNSPod \u7684 API \u4f7f\u7528\u6587\u6863 ",(0,r.kt)("sup",{parentName:"p",id:"fnref-8"},(0,r.kt)("a",{parentName:"sup",href:"#fn-8",className:"footnote-ref"},"8")),"\u3002"),(0,r.kt)("h3",{id:"\u7f16\u5199-caddyfile-1"},"\u7f16\u5199 Caddyfile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{\n    email example@gmail.com\n}\n\n*.example.com {\n    tls {\n        dns dnspod <DNSPOD_TOKEN>\n    }\n\n    @foo host foo.example.com\n    handle @foo {\n        reverse_proxy localhost:1000\n    }\n\n    @bar host bar.example.com\n    handle @bar {\n        reverse_proxy localhost:2000\n    }\n\n    handle {\n        abort\n    }\n}\n\nexample.com {\n    reverse_proxy localhost:3000\n}\n\nfoo.bar.example.com {\n    reverse_proxy localhost:4000\n}\n")),(0,r.kt)("p",null,"\u7b2c 7 \u884c\u4e0d\u4e00\u6837\uff0c\u6307\u5b9a\u4e86 DNS \u670d\u52a1\u5546\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"dnspod"),"\uff0c\u5e76\u4e14\u4f60\u9700\u8981\u66ff\u6362\u6389",(0,r.kt)("inlineCode",{parentName:"p"},"<DNSPOD_TOKEN>"),"\u4e3a\u4f60\u81ea\u5df1\u7684\u3002\u9700\u8981\u6ce8\u610f DNSPod \u7684 API Token \u683c\u5f0f\u7279\u6b8a\uff0c\u662f\u7531 ID \u548c Token \u7ec4\u5408\u5728\u4e00\u8d77\uff0c\u5e76\u7528\u82f1\u6587\u9017\u53f7\u5206\u9694\u3002"),(0,r.kt)("p",null,"\u5176\u5b83\u5185\u5bb9\u548c\u4f7f\u7528 Cloudflare \u65f6\u4e00\u6837\uff0c\u8bf7\u53c2\u8003\u4e0a\u6587\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-docker-compose-\u8fd0\u884c-1"},"\u4f7f\u7528 Docker Compose \u8fd0\u884c"),(0,r.kt)("p",null,"\u548c\u4f7f\u7528 Cloudflare \u65f6\u4e00\u6837\uff0c\u8bf7\u53c2\u8003\u4e0a\u6587\u3002"),(0,r.kt)("h2",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),(0,r.kt)("p",null,"\u66f4\u591a\u4f7f\u7528\u5e2e\u52a9\u8bf7\u53c2\u8003\u5176\u5b98\u65b9\u6587\u6863 ",(0,r.kt)("sup",{parentName:"p",id:"fnref-9"},(0,r.kt)("a",{parentName:"sup",href:"#fn-9",className:"footnote-ref"},"9")),"\uff0c\u955c\u50cf\u6784\u5efa\u51fa\u9519\u8bf7\u67e5\u770b\u6784\u5efa\u65e5\u5fd7\uff0cCaddy \u8fd0\u884c\u65f6\u51fa\u9519\u8bf7\u67e5\u770b Caddy \u955c\u50cf\u7684\u65e5\u5fd7\u3002"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/caddy-dns"},"caddy-dns"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/caddy"},"Caddy - Official Image | Docker Hub"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/caddyserver/xcaddy"},"caddyserver/xcaddy: Build Caddy with plugins"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/caddy-dns/cloudflare"},"caddy-dns/cloudflare: Caddy module: dns.providers.cloudflare"),(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},(0,r.kt)("a",{parentName:"li",href:"https://dash.cloudflare.com/profile/api-tokens"},"API Tokens | Cloudflare"),(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-6"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/caddy-dns/dnspod"},"caddy-dns/dnspod"),(0,r.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-7"},(0,r.kt)("a",{parentName:"li",href:"https://console.dnspod.cn/account/token/token"},"API \u5bc6\u94a5 - DNSPod-\u514d\u8d39\u667a\u80fd DNS \u89e3\u6790\u670d\u52a1\u5546 - \u7535\u4fe1",(0,r.kt)("em",{parentName:"a"},"\u7f51\u901a"),"\u6559\u80b2\u7f51\uff0c\u667a\u80fd DNS"),(0,r.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-8"},(0,r.kt)("a",{parentName:"li",href:"https://docs.dnspod.cn/account/5f2d466de8320f1a740d9ff3/"},"\u5bc6\u94a5\u7ba1\u7406 - DNSPod \u670d\u52a1\u4e0e\u652f\u6301"),(0,r.kt)("a",{parentName:"li",href:"#fnref-8",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-9"},(0,r.kt)("a",{parentName:"li",href:"https://caddyserver.com/docs/caddyfile/patterns#wildcard-certificates"},"Common Caddyfile Patterns \u2014 Caddy Documentation"),(0,r.kt)("a",{parentName:"li",href:"#fnref-9",className:"footnote-backref"},"\u21a9")))))}s.isMDXComponent=!0},5875:function(e,a,n){a.Z=n.p+"assets/images/image-20220123001758949-ce74c7b0467b8a749c0b3a13d5ad77e3.png"},237:function(e,a,n){a.Z=n.p+"assets/images/image-20220123001847246-5a2cc4ab12bfb9156f9ff0b159f2f219.png"},645:function(e,a,n){a.Z=n.p+"assets/images/image-20220123002105447-363ec42b463cb88be054fba5bbc94b39.png"},9354:function(e,a,n){a.Z=n.p+"assets/images/image-20220123003832951-9150b513dab141de3e1156a1e2dc08ca.png"}}]);