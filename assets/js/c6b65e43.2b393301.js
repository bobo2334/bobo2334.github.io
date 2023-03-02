"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[690],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1428:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),l=["components"],i={date:new Date("2022-07-03T00:00:00.000Z"),tags:["ssh"]},s="\u4e3a SSH \u767b\u5f55\u542f\u7528\u591a\u91cd\u8981\u7d20\u9a8c\u8bc1",u={permalink:"/blog/ssh-2fa",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/ssh-2fa.md",source:"@site/blog/ssh-2fa.md",title:"\u4e3a SSH \u767b\u5f55\u542f\u7528\u591a\u91cd\u8981\u7d20\u9a8c\u8bc1",description:"\u524d\u8a00",date:"2022-07-03T00:00:00.000Z",formattedDate:"2022\u5e747\u67083\u65e5",tags:[{label:"ssh",permalink:"/blog/tags/ssh"}],readingTime:3.385,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-07-03T00:00:00.000Z",tags:["ssh"]},prevItem:{title:"OpenWrt \u5b89\u88c5\u540e\u914d\u7f6e",permalink:"/blog/openwrt-post-installation"},nextItem:{title:"SSH \u7aef\u53e3\u8f6c\u53d1",permalink:"/blog/ssh-port-forwarding"}},p={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88c5 libpam-google-authenticator",id:"\u5b89\u88c5-libpam-google-authenticator",level:2},{value:"\u914d\u7f6e SSH \u670d\u52a1\u5668",id:"\u914d\u7f6e-ssh-\u670d\u52a1\u5668",level:2},{value:"SSH \u670d\u52a1\u5668\u542f\u52a8\u9519\u8bef\u6392\u67e5",id:"ssh-\u670d\u52a1\u5668\u542f\u52a8\u9519\u8bef\u6392\u67e5",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u901a\u8fc7 libpam-google-authenticator \u4e3a SSH \u542f\u7528\u591a\u91cd\u8981\u7d20\u9a8c\u8bc1\uff0c\u5728\u4f7f\u7528\u5bc6\u7801\u6216\u8005\u79d8\u94a5\u767b\u5f55\u4e4b\u540e\u8fd8\u8981\u8f93\u5165\u4e00\u4e2a\u57fa\u4e8e\u65f6\u95f4\u53d8\u5316\u7684\u5bc6\u7801\u624d\u80fd\u767b\u5f55\uff0c\u589e\u52a0\u670d\u52a1\u5668\u5b89\u5168\u6027\u3002"),(0,o.kt)("p",null,"\u672c\u6587\u4e2d\u4f7f\u7528 Debian 11 \u7cfb\u7edf\u4f5c\u4e3a\u4f8b\u5b50\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5-libpam-google-authenticator"},"\u5b89\u88c5 libpam-google-authenticator"),(0,o.kt)("p",null,"\u5b89\u88c5 libpam-google-authenticator\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt update\napt install libpam-google-authenticator -y\n")),(0,o.kt)("p",null,"\u8fd0\u884c\u8bbe\u7f6e\u5411\u5bfc\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"google-authenticator\n")),(0,o.kt)("p",null,"\u8bb0\u4f4f secret key\uff0c\u5bfc\u5165\u5230\u652f\u6301 TOTP \u7684\u8f6f\u4ef6\u91cc\u751f\u6210\u5bc6\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Do you want authentication tokens to be time-based (y/n) y\nYour new secret key is: ****************\n")),(0,o.kt)("p",null,"\u5728\u4e0b\u4e00\u6b65\u4e2d\u9a8c\u8bc1\u5bc6\u7801\uff0c\u5bc6\u7801\u662f\u4ece\u5bc6\u7801\u751f\u6210\u5668\u4e2d\u5f97\u5230\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Enter code from app (-1 to skip): *******\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u6709\u5907\u7528\u5bc6\u7801\uff0c\u8bb0\u5f55\u4e0b\u6765\uff0c\u5f53\u4f60\u7684\u5bc6\u7801\u751f\u6210\u5668\u4e22\u5931\u7684\u65f6\u5019\u6709\u7528\uff0c\u6bcf\u4e2a\u5bc6\u7801\u53ef\u4ee5\u7528\u4e00\u6b21\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"Your emergency scratch codes are:\n  ********\n  ********\n  ********\n  ********\n  ********\n")),(0,o.kt)("p",null,"\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'Do you want me to update your "/root/.google_authenticator" file? (y/n) y\n')),(0,o.kt)("p",null,"\u8bbe\u7f6e\u6700\u5927\u65f6\u95f4\u8bef\u5dee 30 \u79d2\uff0c\u9ed8\u8ba4\u53ef\u4ee5\u4f7f\u7528\u524d\u4e00\u4e2a\u3001\u73b0\u5728\u7684\u548c\u540e\u4e00\u4e2a\u9a8c\u8bc1\u7801\u901a\u8fc7\u8ba4\u8bc1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"By default, a new token is generated every 30 seconds by the mobile app.\nIn order to compensate for possible time-skew between the client and the server,\nwe allow an extra token before and after the current time. This allows for a\ntime skew of up to 30 seconds between authentication server and client. If you\nexperience problems with poor time synchronization, you can increase the window\nfrom its default size of 3 permitted codes (one previous code, the current\ncode, the next code) to 17 permitted codes (the 8 previous codes, the current\ncode, and the 8 next codes). This will permit for a time skew of up to 4 minutes\nbetween client and server.\nDo you want to do so? (y/n) y\n")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u6bcf 30 \u79d2\u6700\u591a\u91cd\u8bd5 3 \u6b21\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"If the computer that you are logging into isn't hardened against brute-force\nlogin attempts, you can enable rate-limiting for the authentication module.\nBy default, this limits attackers to no more than 3 login attempts every 30s.\nDo you want to enable rate-limiting? (y/n) y\n")),(0,o.kt)("h2",{id:"\u914d\u7f6e-ssh-\u670d\u52a1\u5668"},"\u914d\u7f6e SSH \u670d\u52a1\u5668"),(0,o.kt)("p",null,"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/pam.d/sshd"),"\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/pam.d/sshd\n")),(0,o.kt)("p",null,"\u6ce8\u91ca\u6389",(0,o.kt)("inlineCode",{parentName:"p"},"@include common-auth"),"\uff0c\u5e76\u52a0\u5165\u65b0\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Standard Un*x authentication.\n# @include common-auth\nauth required pam_google_authenticator.so\n")),(0,o.kt)("p",null,"\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),"\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/ssh/sshd_config\n")),(0,o.kt)("p",null,"\u4fee\u6539\u4ee5\u4e0b\u51e0\u9879\u3002\u5176\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"AuthenticationMethods"),"\u6307\u5b9a\u4e86\u5148\u4f7f\u7528\u79d8\u94a5\u65b9\u5f0f\u767b\u5f55\uff0c\u518d\u8981\u6c42\u9a8c\u8bc1\u989d\u5916\u5bc6\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"ChallengeResponseAuthentication yes\nPasswordAuthentication no\nAuthenticationMethods publickey,keyboard-interactive\n")),(0,o.kt)("p",null,"\u91cd\u542f ssh \u670d\u52a1\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart sshd\n")),(0,o.kt)("h2",{id:"ssh-\u670d\u52a1\u5668\u542f\u52a8\u9519\u8bef\u6392\u67e5"},"SSH \u670d\u52a1\u5668\u542f\u52a8\u9519\u8bef\u6392\u67e5"),(0,o.kt)("p",null,"\u9996\u5148\u505c\u6b62 sshd \u670d\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl stop sshd\n")),(0,o.kt)("p",null,"\u624b\u52a8\u542f\u52a8 sshd\uff0c\u6307\u5b9a",(0,o.kt)("inlineCode",{parentName:"p"},"-d"),"\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u4f1a\u8ba9 sshd \u6253\u5370\u51fa\u66f4\u591a\u9519\u8bef\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/bin/sshd -d\n")),(0,o.kt)("p",null,"\u6839\u636e\u6253\u5370\u51fa\u7684\u4fe1\u606f\u6392\u67e5\u9519\u8bef\u3002\u9519\u8bef\u4fee\u590d\u4e4b\u540e\u518d\u901a\u8fc7\u670d\u52a1\u542f\u52a8 sshd\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl start sshd\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/%E5%A4%9A%E9%87%8D%E8%A6%81%E7%B4%A0%E9%A9%97%E8%AD%89"},"\u591a\u91cd\u8981\u7d20\u9a8c\u8bc1 - \u7ef4\u57fa\u767e\u79d1\uff0c\u81ea\u7531\u7684\u767e\u79d1\u5168\u4e66")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.vultr.com/docs/how-to-setup-two-factor-authentication-2fa-for-ssh-on-debian-9-using-google-authenticator/"},"How to Setup Two-Factor Authentication (2FA) for SSH on Debian 9 Using Google Authenticator - Vultr.com")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bbs.archlinux.org/viewtopic.php?id=227787"},"[","SOLVED","]"," SSH Service Failed to Start / Networking, Server, and Protection / Arch Linux Forums"))))}d.isMDXComponent=!0}}]);