"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87330:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={tags:["ssh"]},s="\u4f7f\u7528 SSH \u5bc6\u94a5\u8ba4\u8bc1\u65b9\u5f0f\u767b\u5f55\u670d\u52a1\u5668",p={permalink:"/blog/2021/09/08/key-based-ssh-authentication",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/2021-09-08-key-based-ssh-authentication.md",source:"@site/blog/2021-09-08-key-based-ssh-authentication.md",title:"\u4f7f\u7528 SSH \u5bc6\u94a5\u8ba4\u8bc1\u65b9\u5f0f\u767b\u5f55\u670d\u52a1\u5668",description:"\u524d\u8a00",date:"2021-09-08T00:00:00.000Z",formattedDate:"2021\u5e749\u67088\u65e5",tags:[{label:"ssh",permalink:"/blog/tags/ssh"}],readingTime:2.1,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["ssh"]},prevItem:{title:"\u5f00\u542f Docker Remote API \u5e76\u542f\u7528 TLS",permalink:"/blog/2021/09/09/enabling-the-docker-remote-api-with-tls"},nextItem:{title:"\u5229\u7528 Github Actions \u90e8\u7f72 Vuepress \u9879\u76ee\u5230 Github Pages",permalink:"/blog/2021/08/24/deploying-vuepress-projects-to-github-pages-with-github-actions"}},u={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u751f\u6210\u5bc6\u94a5",id:"\u751f\u6210\u5bc6\u94a5",level:2},{value:"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a",id:"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a",level:2},{value:"\u5173\u95ed\u5bc6\u7801\u767b\u5f55",id:"\u5173\u95ed\u5bc6\u7801\u767b\u5f55",level:2},{value:"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548",id:"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SSH \u9ed8\u8ba4\u91c7\u7528\u5bc6\u7801\u767b\u5f55\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6709\u5f88\u591a\u7f3a\u70b9\uff0c\u7b80\u5355\u7684\u5bc6\u7801\u4e0d\u5b89\u5168\uff0c\u590d\u6742\u7684\u5bc6\u7801\u4e0d\u5bb9\u6613\u8bb0\u5fc6\uff0c\u6bcf\u6b21\u624b\u52a8\u8f93\u5165\u4e5f\u5f88\u9ebb\u70e6\u3002\u5bc6\u94a5\u767b\u5f55\u662f\u6bd4\u5bc6\u7801\u767b\u5f55\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\u3002",(0,o.kt)("sup",{parentName:"p",id:"fnref-1-137ff4"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-137ff4",className:"footnote-ref"},"1")))),(0,o.kt)("h2",{id:"\u751f\u6210\u5bc6\u94a5"},"\u751f\u6210\u5bc6\u94a5"),(0,o.kt)("p",null,"\u53ef\u4ee5\u7528 OpenSSH \u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-keygen"),"\u547d\u4ee4\u884c\u5de5\u5177\u6765\u751f\u6210\u5bc6\u94a5\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"-t"),"\u53c2\u6570\u6307\u5b9a\u4e86\u52a0\u5bc6\u65b9\u5f0f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"rsa"),"\u52a0\u5bc6\u5df2\u7ecf\u4e0d\u5b89\u5168\uff0c\u5728\u8f83\u65b0\u7248\u672c\u7684 OpenSSH \u4e2d\u9ed8\u8ba4\u5df2\u88ab\u5173\u95ed\uff0c\u63a8\u8350\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519"),"\u52a0\u5bc6\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u751f\u6210 SSH \u5bc6\u94a5\u5bf9\uff0c\u8bf7\u628a\u4e0b\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"your_email@example.com"),"\u66ff\u6362\u4e3a\u4f60\u7684\u90ae\u7bb1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ssh-keygen -t ed25519 -C "your_email@example.com"\n')),(0,o.kt)("p",null,"\u751f\u6210\u7684\u5bc6\u94a5\u6587\u4ef6\u9ed8\u8ba4\u4f4d\u4e8e",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_ed25519"),"\uff08\u79c1\u94a5\uff09\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_ed25519.pub"),"\uff08\u516c\u94a5\uff09\u3002"),(0,o.kt)("h2",{id:"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a"},"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a"),(0,o.kt)("p",null,"\u7528\u6237\u516c\u94a5\u4fdd\u5b58\u5728\u670d\u52a1\u5668\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),"\u6587\u4ef6\u4e2d\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\u4e00\u4e2a\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u5c06\u516c\u94a5\u7684\u6587\u672c\u5185\u5bb9\u653e\u5165\u5176\u4e2d\uff0c\u6bcf\u884c\u4e00\u4e2a\u3002"),(0,o.kt)("h2",{id:"\u5173\u95ed\u5bc6\u7801\u767b\u5f55"},"\u5173\u95ed\u5bc6\u7801\u767b\u5f55"),(0,o.kt)("p",null,"\u7f16\u8f91",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"\u6587\u4ef6\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\u5e76\u4fee\u6539\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# \u4e0d\u5141\u8bb8\u5bc6\u7801\u76f4\u63a5\u767b\u5f55\nPasswordAuthentication no\n# \u4e0d\u5141\u8bb8\u7a7a\u5bc6\u7801\u767b\u5f55\nPermitEmptyPasswords no\n# \u4e0d\u5141\u8bb8\u4ea4\u4e92\u5f0f\u5bc6\u7801\u767b\u5f55\nChallengeResponseAuthentication no\n# \u4e0d\u5141\u8bb8 root \u7528\u6237\u4f7f\u7528\u5bc6\u7801\u767b\u5f55\nPermitRootLogin prohibit-password\n# \u4f7f\u7528\u5bc6\u94a5\u767b\u5f55\nPubkeyAuthentication yes\n")),(0,o.kt)("p",null,"\u91cd\u542f",(0,o.kt)("inlineCode",{parentName:"p"},"sshd"),"\uff0c\u8ba9\u914d\u7f6e\u751f\u6548\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart sshd\n")),(0,o.kt)("h2",{id:"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548"},"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548"),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),"\u547d\u4ee4\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"-i"),"\u53c2\u6570\u4f20\u9012\u79c1\u94a5\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i .\\centos7\\.vagrant\\machines\\default\\virtualbox\\private_key vagrant@192.168.33.12\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server"},"How To Configure SSH Key-Based Authentication on a Linux Server | DigitalOcean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/sec-using_openssh_certificate_authentication"},"14.3. Using OpenSSH Certificate Authentication Red Hat Enterprise Linux 6 | Red Hat Customer Portal"))),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-137ff4"},(0,o.kt)("a",{parentName:"li",href:"https://wangdoc.com/ssh/key.html"},"SSH \u5bc6\u94a5\u767b\u5f55 - SSH \u6559\u7a0b - \u7f51\u9053"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-137ff4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);