"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2499],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={tags:["linux"]},s="Debian \u5b89\u88c5\u540e\u914d\u7f6e",c={permalink:"/blog/2021/12/24/debian-post-installation-configuration",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/2021-12-24-debian-post-installation-configuration.md",source:"@site/blog/2021-12-24-debian-post-installation-configuration.md",title:"Debian \u5b89\u88c5\u540e\u914d\u7f6e",description:"\u8f6f\u4ef6\u6e90",date:"2021-12-24T00:00:00.000Z",formattedDate:"2021\u5e7412\u670824\u65e5",tags:[{label:"linux",permalink:"/blog/tags/linux"}],readingTime:1.795,hasTruncateMarker:!0,authors:[],frontMatter:{tags:["linux"]},prevItem:{title:"ztncui\uff1a\u81ea\u5efa Zerotier \u7f51\u9875\u63a7\u5236\u5668",permalink:"/blog/2021/12/31/ztncui-a-self-hosted-zerotier-web-controller"},nextItem:{title:"\u901a\u8fc7\u4ee3\u7406\u8fde\u63a5 SSH \u670d\u52a1\u5668",permalink:"/blog/2021/12/23/connecting-to-an-ssh-server-through-a-proxy"}},u={authorsImageUrls:[]},p=[{value:"\u8f6f\u4ef6\u6e90",id:"\u8f6f\u4ef6\u6e90",level:2},{value:"\u66f4\u65b0\u7cfb\u7edf",id:"\u66f4\u65b0\u7cfb\u7edf",level:2},{value:"\u5b89\u88c5\u5c0f\u5de5\u5177",id:"\u5b89\u88c5\u5c0f\u5de5\u5177",level:2},{value:"\u914d\u7f6e\u522b\u540d",id:"\u914d\u7f6e\u522b\u540d",level:2},{value:"docker",id:"docker",level:2},{value:"<em>docker-compose</em>",id:"docker-compose",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8f6f\u4ef6\u6e90"},"\u8f6f\u4ef6\u6e90"),(0,o.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt edit-sources\n")),(0,o.kt)("p",null,"\u66ff\u6362\u5185\u5bb9\uff0c\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,o.kt)("em",{parentName:"p"},"\u6e05\u534e\u5927\u5b66\u5f00\u6e90\u8f6f\u4ef6\u955c\u50cf\u7ad9 ",(0,o.kt)("sup",{parentName:"em",id:"fnref-1-fde3fe"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1-fde3fe",className:"footnote-ref"},"1"))),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"# \u9ed8\u8ba4\u6ce8\u91ca\u4e86\u6e90\u7801\u955c\u50cf\u4ee5\u63d0\u9ad8 apt update \u901f\u5ea6\uff0c\u5982\u6709\u9700\u8981\u53ef\u81ea\u884c\u53d6\u6d88\u6ce8\u91ca\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n")),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528 ",(0,o.kt)("em",{parentName:"p"},"\u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u955c\u50cf\u7ad9\u70b9 ",(0,o.kt)("sup",{parentName:"em",id:"fnref-2-fde3fe"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2-fde3fe",className:"footnote-ref"},"2")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"deb http://mirrors.aliyun.com/debian/ bullseye main non-free contrib\n# deb-src http://mirrors.aliyun.com/debian/ bullseye main non-free contrib\ndeb http://mirrors.aliyun.com/debian-security/ bullseye-security main\n# deb-src http://mirrors.aliyun.com/debian-security/ bullseye-security main\ndeb http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib\n# deb-src http://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib\ndeb http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib\n# deb-src http://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib\n")),(0,o.kt)("h2",{id:"\u66f4\u65b0\u7cfb\u7edf"},"\u66f4\u65b0\u7cfb\u7edf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt upgrade\n")),(0,o.kt)("h2",{id:"\u5b89\u88c5\u5c0f\u5de5\u5177"},"\u5b89\u88c5\u5c0f\u5de5\u5177"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install curl wget tmux bat htop btop exa neofetch trash-cli croc\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e\u522b\u540d"},"\u914d\u7f6e\u522b\u540d"),(0,o.kt)("p",null,"\u6267\u884c\u547d\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano .profile\n")),(0,o.kt)("p",null,"\u52a0\u5165\u5185\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alias ll='ls -alFGh'\nalias l='exa -lha --modified --created --time-style long-iso --group-directories-first'\nalias dc='docker-compose'\nalias ..='cd ..'\nalias ...='cd ../..'\nalias bat='batcat'\n")),(0,o.kt)("h2",{id:"docker"},"docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.docker.com/ -O get-docker.sh\n# sh get-docker.sh --mirror Aliyun\nsh get-docker.sh\nsystemctl enable docker\ndocker run --rm hello-world\n")),(0,o.kt)("h2",{id:"docker-compose"},(0,o.kt)("em",{parentName:"h2"},"docker-compose",(0,o.kt)("sup",{parentName:"em",id:"fnref-3-fde3fe"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3-fde3fe",className:"footnote-ref"},"3")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# wget https://ghproxy.com/https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose\nwget https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose\nchmod u+x /opt/docker-compose\nln -s /opt/docker-compose /usr/local/sbin/docker-compose\n")),(0,o.kt)("p",null,"\u6216\u8005\u901a\u8fc7 ",(0,o.kt)("em",{parentName:"p"},"Linuxbrew")," ",(0,o.kt)("sup",{parentName:"p",id:"fnref-4-fde3fe"},(0,o.kt)("a",{parentName:"sup",href:"#fn-4-fde3fe",className:"footnote-ref"},"4"))," \u5b89\u88c5\u3002"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1-fde3fe"},(0,o.kt)("a",{parentName:"li",href:"https://mirrors.tuna.tsinghua.edu.cn/help/debian/"},"debian | \u955c\u50cf\u7ad9\u4f7f\u7528\u5e2e\u52a9 | \u6e05\u534e\u5927\u5b66\u5f00\u6e90\u8f6f\u4ef6\u955c\u50cf\u7ad9 | Tsinghua Open Source Mirror"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1-fde3fe",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2-fde3fe"},(0,o.kt)("a",{parentName:"li",href:"https://developer.aliyun.com/mirror/debian"},"debian \u955c\u50cf-debian \u4e0b\u8f7d\u5730\u5740-debian \u5b89\u88c5\u6559\u7a0b - \u963f\u91cc\u5df4\u5df4\u5f00\u6e90\u955c\u50cf\u7ad9"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2-fde3fe",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3-fde3fe"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker/compose/releases"},"Releases \xb7 docker/compose"),(0,o.kt)("a",{parentName:"li",href:"#fnref-3-fde3fe",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-4-fde3fe"},(0,o.kt)("a",{parentName:"li",href:"/blog/2022/02/24/linuxbrew-the-homebrew-on-linux"},"Linuxbrew\uff1aLinux \u4e0a\u7684 Homebrew"),(0,o.kt)("a",{parentName:"li",href:"#fnref-4-fde3fe",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);