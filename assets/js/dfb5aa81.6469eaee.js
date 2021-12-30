"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8360],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=i(r),m=a,b=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6198:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},assets:function(){return u},toc:function(){return d},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],c={date:new Date("2021-12-24T00:00:00.000Z")},s="Debian \u914d\u7f6e\u5907\u4efd",i={permalink:"/blog/debian-environment-backup",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/debian-environment-backup.md",source:"@site/blog/debian-environment-backup.md",title:"Debian \u914d\u7f6e\u5907\u4efd",description:"\u8f6f\u4ef6\u6e90",date:"2021-12-24T00:00:00.000Z",formattedDate:"2021\u5e7412\u670824\u65e5",tags:[],truncated:!1,authors:[],prevItem:{title:"\u81ea\u5efa Zerotier \u884c\u661f\u8282\u70b9",permalink:"/blog/self-hosted-zerotier-controller"},nextItem:{title:"Docker \u7a7f\u900f\u9632\u706b\u5899\u7684\u95ee\u9898",permalink:"/blog/docker-and-system-firewall"}},u={authorsImageUrls:[]},d=[{value:"\u8f6f\u4ef6\u6e90",id:"\u8f6f\u4ef6\u6e90",children:[],level:2},{value:"\u5c0f\u5de5\u5177",id:"\u5c0f\u5de5\u5177",children:[],level:2},{value:"alias",id:"alias",children:[],level:2},{value:"docker",id:"docker",children:[],level:2},{value:"docker-compose",id:"docker-compose",children:[],level:2},{value:"lazydocker",id:"lazydocker",children:[],level:2},{value:"croc",id:"croc",children:[],level:2},{value:"bat",id:"bat",children:[],level:2}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8f6f\u4ef6\u6e90"},"\u8f6f\u4ef6\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mirrors.tuna.tsinghua.edu.cn/help/debian/"},"debian | \u955c\u50cf\u7ad9\u4f7f\u7528\u5e2e\u52a9 | \u6e05\u534e\u5927\u5b66\u5f00\u6e90\u8f6f\u4ef6\u955c\u50cf\u7ad9 | Tsinghua Open Source Mirror"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt edit-sources\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u9ed8\u8ba4\u6ce8\u91ca\u4e86\u6e90\u7801\u955c\u50cf\u4ee5\u63d0\u9ad8 apt update \u901f\u5ea6\uff0c\u5982\u6709\u9700\u8981\u53ef\u81ea\u884c\u53d6\u6d88\u6ce8\u91ca\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free\n\ndeb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\n")),(0,o.kt)("h2",{id:"\u5c0f\u5de5\u5177"},"\u5c0f\u5de5\u5177"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install curl wget tmux bat htop exa neofetch trash-cli\n")),(0,o.kt)("h2",{id:"alias"},"alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alias bat='batcat'\nalias ll='exa -lha --modified --created --time-style long-iso --group-directories-first'\nalias dc='docker-compose'\nalias lzd='lazydocker'\nalias rm='echo \"please use trash-put\"'\n")),(0,o.kt)("h2",{id:"docker"},"docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://get.docker.com/ -O get-docker.sh\n# sh get-docker.sh --mirror Aliyun\nsh get-docker.sh\nsystemctl enable docker\n")),(0,o.kt)("h2",{id:"docker-compose"},"docker-compose"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/docker/compose/releases"},"Releases \xb7 docker/compose"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# wget https://ghproxy.com/https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose\nwget https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-linux-x86_64 -O /opt/docker-compose\nchmod u+x /opt/docker-compose\nln -s /opt/docker-compose /usr/local/sbin/docker-compose\n")),(0,o.kt)("h2",{id:"lazydocker"},"lazydocker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/jesseduffield/lazydocker/releases"},"Releases \xb7 jesseduffield/lazydocker"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# wget https://ghproxy.com/https://github.com/jesseduffield/lazydocker/releases/download/v0.12/lazydocker_0.12_Linux_x86_64.tar.gz\nwget https://github.com/jesseduffield/lazydocker/releases/download/v0.12/lazydocker_0.12_Linux_x86_64.tar.gz\nmkdir ~/lazydocker\ntar -zxvf lazydocker_0.12_Linux_x86_64.tar.gz -C ~/lazydocker\nmv ~/lazydocker/lazydocker /opt/lazydocker\nchmod u+x /opt/lazydocker\nln -s /opt/lazydocker /usr/local/sbin/lazydocker\ntrash-put ~/lazydocker\n# rm -rf ~/lazydocker\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ~/.config/jesseduffield/lazydocker/config.yml\nreporting: \"off\"\ngui:\n  returnImmediately: true\ncommandTemplates:\n  serviceLogs: '{{ .DockerCompose }} logs --timestamps --follow --tail 500 {{ .Service.Name }}'\n  viewServiceLogs: '{{ .DockerCompose }} logs --tail 500 --follow {{ .Service.Name }}'\n  containerLogs: docker logs --timestamps --follow --tail 500 {{ .Container.ID }}\n  viewContainerLogs: docker logs --timestamps --follow --tail 500 {{ .Container.ID}}\n")),(0,o.kt)("h2",{id:"croc"},"croc"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/schollz/croc/releases"},"Releases \xb7 schollz/croc"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# wget https://ghproxy.com/https://github.com/schollz/croc/releases/download/v9.5.0/croc_9.5.0_Linux-64bit.deb\nwget https://github.com/schollz/croc/releases/download/v9.5.0/croc_9.5.0_Linux-64bit.deb\ndpkg -i croc_9.5.0_Linux-64bit.deb\n")),(0,o.kt)("h2",{id:"bat"},"bat"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/sharkdp/bat/releases"},"Releases \xb7 sharkdp/bat"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# wget https://ghproxy.com/https://github.com/sharkdp/bat/releases/download/v0.18.3/bat_0.18.3_amd64.deb\nwget https://github.com/sharkdp/bat/releases/download/v0.18.3/bat_0.18.3_amd64.deb\ndpkg -i bat_0.18.3_amd64.deb\n")))}m.isMDXComponent=!0}}]);