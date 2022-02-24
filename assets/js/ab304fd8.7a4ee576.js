"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2156],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5205:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={date:new Date("2021-09-08T00:00:00.000Z"),tags:["ssh"]},s="SSH \u5bc6\u94a5\u767b\u5f55",p={permalink:"/blog/ssh-certificate-authentication",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/ssh-certificate-authentication.md",source:"@site/blog/ssh-certificate-authentication.md",title:"SSH \u5bc6\u94a5\u767b\u5f55",description:"\u524d\u8a00",date:"2021-09-08T00:00:00.000Z",formattedDate:"2021\u5e749\u67088\u65e5",tags:[{label:"ssh",permalink:"/blog/tags/ssh"}],truncated:!0,authors:[],frontMatter:{date:"2021-09-08T00:00:00.000Z",tags:["ssh"]},prevItem:{title:"\u5f00\u542f Docker Remote API \u5e76\u542f\u7528 TLS",permalink:"/blog/enable-docker-remote-api-with-tls-protection"},nextItem:{title:"\u5229\u7528 Github Actions \u90e8\u7f72 Vuepress \u9879\u76ee\u5230 Github Pages",permalink:"/blog/deploy-vuepress-project-to-github-pages-with-github-actions"}},c={authorsImageUrls:[]},u=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u751f\u6210\u79d8\u94a5",id:"\u751f\u6210\u79d8\u94a5",children:[],level:2},{value:"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a",id:"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a",children:[],level:2},{value:"\u5173\u95ed\u5bc6\u7801\u767b\u5f55",id:"\u5173\u95ed\u5bc6\u7801\u767b\u5f55",children:[],level:2},{value:"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548",id:"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548",children:[],level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",children:[],level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SSH \u9ed8\u8ba4\u91c7\u7528\u5bc6\u7801\u767b\u5f55\uff0c\u8fd9\u79cd\u65b9\u6cd5\u6709\u5f88\u591a\u7f3a\u70b9\uff0c\u7b80\u5355\u7684\u5bc6\u7801\u4e0d\u5b89\u5168\uff0c\u590d\u6742\u7684\u5bc6\u7801\u4e0d\u5bb9\u6613\u8bb0\u5fc6\uff0c\u6bcf\u6b21\u624b\u52a8\u8f93\u5165\u4e5f\u5f88\u9ebb\u70e6\u3002\u5bc6\u94a5\u767b\u5f55\u662f\u6bd4\u5bc6\u7801\u767b\u5f55\u66f4\u597d\u7684\u89e3\u51b3\u65b9\u6848\u3002",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,i.kt)("h2",{id:"\u751f\u6210\u79d8\u94a5"},"\u751f\u6210\u79d8\u94a5"),(0,i.kt)("p",null,"\u53ef\u4ee5\u7528 OpenSSH \u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"ssh-keygen"),"\u547d\u4ee4\u884c\u5de5\u5177\u6765\u751f\u6210\u79d8\u94a5\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"-t"),"\u53c2\u6570\u6307\u5b9a\u4e86\u52a0\u5bc6\u65b9\u5f0f\uff0c\u901a\u5e38\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"rsa"),"\u6216",(0,i.kt)("inlineCode",{parentName:"p"},"dsa"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -t rsa\n")),(0,i.kt)("p",null,"\u751f\u6210\u7684\u5bc6\u94a5\u6587\u4ef6\u9ed8\u8ba4\u5c31\u4f1a\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),"\uff08\u79c1\u94a5\uff09\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa.pub"),"\uff08\u516c\u94a5\uff09\u3002"),(0,i.kt)("p",null,"\u4e5f\u53ef\u4ee5\u7528 PuTTY \u4e2d\u63d0\u4f9b\u7684 PuTTY Key Generator\uff08puttygen.exe\uff09",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u6765\u7528\u53ef\u89c6\u5316\u7528\u6237\u754c\u9762\u6765\u751f\u6210\u79d8\u94a5\u6587\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20210816230720070",src:n(6361).Z,width:"638",height:"579"})),(0,i.kt)("h2",{id:"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a"},"\u628a\u516c\u94a5\u653e\u5728\u670d\u52a1\u5668\u4e0a"),(0,i.kt)("p",null,"\u7528\u6237\u516c\u94a5\u4fdd\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/authorized_keys"),"\u6587\u4ef6\u4e2d\uff0c\u5982\u679c\u8be5\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\u4e00\u4e2a\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u5c06\u516c\u94a5\u7684\u6587\u672c\u5185\u5bb9\u653e\u5165\u5176\u4e2d\uff0c\u6bcf\u884c\u4e00\u4e2a\u3002"),(0,i.kt)("h2",{id:"\u5173\u95ed\u5bc6\u7801\u767b\u5f55"},"\u5173\u95ed\u5bc6\u7801\u767b\u5f55"),(0,i.kt)("p",null,"\u7f16\u8f91",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"\u6587\u4ef6\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u914d\u7f6e\u9879\u5e76\u4fee\u6539\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# \u4e0d\u5141\u8bb8\u5bc6\u7801\u76f4\u63a5\u767b\u5f55\nPasswordAuthentication no\n# \u4e0d\u5141\u8bb8\u7a7a\u5bc6\u7801\u767b\u5f55\nPermitEmptyPasswords no\n# \u4e0d\u5141\u8bb8\u4ea4\u4e92\u5f0f\u5bc6\u7801\u767b\u5f55\nChallengeResponseAuthentication no\n# \u4e0d\u5141\u8bb8 root \u7528\u6237\u4f7f\u7528\u5bc6\u7801\u767b\u5f55\nPermitRootLogin prohibit-password\n# \u4f7f\u7528\u79d8\u94a5\u767b\u5f55\nPubkeyAuthentication yes\n")),(0,i.kt)("p",null,"\u91cd\u542f",(0,i.kt)("inlineCode",{parentName:"p"},"sshd"),"\uff0c\u8ba9\u914d\u7f6e\u751f\u6548\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl restart sshd\n")),(0,i.kt)("h2",{id:"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548"},"\u6d4b\u8bd5\u914d\u7f6e\u662f\u5426\u751f\u6548"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"ssh"),"\u547d\u4ee4\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"-i"),"\u53c2\u6570\u4f20\u9012\u79c1\u94a5\u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -i .\\centos7\\.vagrant\\machines\\default\\virtualbox\\private_key vagrant@192.168.33.12\n")),(0,i.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-configure-ssh-key-based-authentication-on-a-linux-server"},"How To Configure SSH Key-Based Authentication on a Linux Server | DigitalOcean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/sec-using_openssh_certificate_authentication"},"14.3. Using OpenSSH Certificate Authentication Red Hat Enterprise Linux 6 | Red Hat Customer Portal"))),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("a",{parentName:"li",href:"https://wangdoc.com/ssh/key.html"},"SSH \u5bc6\u94a5\u767b\u5f55 - SSH \u6559\u7a0b - \u7f51\u9053"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},(0,i.kt)("a",{parentName:"li",href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"},"Download PuTTY: latest release (0.76)"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},6361:function(e,t,n){t.Z=n.p+"assets/images/image-20210816230720070-15944bde6bd9af87fb39e289a31152b7.png"}}]);