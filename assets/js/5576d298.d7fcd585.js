"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3249],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||i[f]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52003:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return i}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),o=["components"],c={date:new Date("2022-01-10T00:00:00.000Z"),tags:["tencent-cos"]},s="\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939",u={permalink:"/blog/mount-tencent-cos-on-local-file-system",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/mount-tencent-cos-on-local-file-system.md",source:"@site/blog/mount-tencent-cos-on-local-file-system.md",title:"\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939",description:"\u524d\u8a00",date:"2022-01-10T00:00:00.000Z",formattedDate:"2022\u5e741\u670810\u65e5",tags:[{label:"tencent-cos",permalink:"/blog/tags/tencent-cos"}],readingTime:3.4,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-01-10T00:00:00.000Z",tags:["tencent-cos"]},prevItem:{title:"\u4f7f\u7528 Caddy \u81ea\u52a8\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66",permalink:"/blog/wildcard-certificates-with-caddy"},nextItem:{title:"ztncui\uff1a\u81ea\u5efa Zerotier \u7f51\u9875\u63a7\u5236\u5668",permalink:"/blog/self-hosted-zerotier-controller"}},p={authorsImageUrls:[]},i=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b89\u88c5\u8f6f\u4ef6",id:"\u5b89\u88c5\u8f6f\u4ef6",level:2},{value:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u6302\u8f7d",id:"\u6302\u8f7d",level:2},{value:"\u53d6\u6d88\u6302\u8f7d",id:"\u53d6\u6d88\u6302\u8f7d",level:2},{value:"\u5c40\u9650\u6027",id:"\u5c40\u9650\u6027",level:2}],m={toc:i};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"2022-06-18 \u66f4\u65b0\uff1a\u672c\u6587\u4e2d\u7684\u89e3\u51b3\u529e\u6cd5\u6709\u66f4\u597d\u7684\u65b9\u6848\uff0c\u8bf7\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"/blog/mount-tencent-cos-using-s3fs"},"\u4f7f\u7528 s3fs \u6302\u8f7d\u817e\u8baf\u4e91 COS \u4e2d\u7684\u5185\u5bb9"),"\u3002")),(0,l.kt)("p",null,"\u817e\u8baf\u4e91\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f6f\u4ef6 cosfs \u7528\u4e8e\u6302\u8f7d COS \u5230\u672c\u5730\uff0c\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u7684\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4\u6765\u64cd\u4f5c COS \u4e2d\u7684\u5185\u5bb9\u3002\u7531\u4e8e\u540e\u7aef\u662f\u4e91\u5b58\u50a8\u800c\u4e0d\u662f\u771f\u6b63\u7684\u672c\u5730\u5b58\u50a8\uff0c\u6240\u4ee5\u6709\u4e9b\u64cd\u4f5c\u7684\u6027\u80fd\u6bd4\u8f83\u4f4e\u3002\u4e0d\u63a8\u8350\u901a\u8fc7\u6b64\u79cd\u65b9\u5f0f\u5728\u5176\u4e2d\u4fee\u6539\u6587\u4ef6\u5185\u5bb9\u6216\u6587\u4ef6\u540d\u79f0\uff0c\u4ec5\u4ec5\u4e0b\u8f7d\u6587\u4ef6\u548c\u4e0a\u4f20\u65b0\u6587\u4ef6\u7684\u64cd\u4f5c\u8fd8\u662f\u53ef\u4ee5\u7684\u3002"),(0,l.kt)("p",null,"\u817e\u8baf\u4e91\u540c\u5730\u57df\u5185\u7f51\u8bbf\u95ee COS \u7684\u4e0b\u8f7d\u6d41\u91cf\u4e0d\u8ba1\u8d39\uff0c\u53ef\u4ee5\u901a\u8fc7\u817e\u8baf\u4e91\u670d\u52a1\u5668\u628a COS \u5185\u5bb9\u6302\u8f7d\u5230\u670d\u52a1\u5668\uff0c\u7136\u540e\u901a\u8fc7\u522b\u7684\u9014\u5f84\u5728\u5916\u7f51\u4e0b\u8f7d\uff0c\u4f8b\u5982\u7528 Rclone \u901a\u8fc7 SFTP \u628a COS \u7684\u5185\u5bb9\u590d\u5236\u5230\u5916\u7f51\u7684\u673a\u5668\uff0c\u8fd9\u6837\u5c31\u4e0d\u8ba1\u4e0b\u8f7d\u6d41\u91cf\u7684\u8d39\u7528\u4e86\uff0c\u4f46\u662f API \u8c03\u7528\u6b21\u6570\u8fd8\u662f\u8981\u6536\u8d39\u7684\u3002"),(0,l.kt)("p",null,"\u6587\u4e2d\u6240\u6d89\u53ca\u7684\u64cd\u4f5c\u7cfb\u7edf\u662f Debian\uff0c\u5e94\u8be5\u4e5f\u9002\u7528\u4e8e\u5176\u4ed6 Debian \u7cfb\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u8f6f\u4ef6"},"\u5b89\u88c5\u8f6f\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"cosfs",(0,l.kt)("sup",{parentName:"em",id:"fnref-1-d8f9a2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-d8f9a2",className:"footnote-ref"},"1")))," \u4f9d\u8d56\u4e8e fuse\uff0c\u9996\u5148\u5b89\u88c5 fuse\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install fuse\n")),(0,l.kt)("p",null,"\u5b89\u88c5 cosfs\uff0c\u5b98\u65b9\u63d0\u4f9b\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"deb"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"rpm"),"\u683c\u5f0f\u7684\u5b89\u88c5\u5305\uff0cDebian \u7cfb\u7edf\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"deb"),"\u683c\u5f0f\u7684\uff0c\u4e0b\u8f7d\u5b89\u88c5\u5305\u4e4b\u524d\u53ef\u4ee5\u5148\u53bb ",(0,l.kt)("em",{parentName:"p"},"\u53d1\u5e03\u9875\u9762 ",(0,l.kt)("sup",{parentName:"em",id:"fnref-2-d8f9a2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-d8f9a2",className:"footnote-ref"},"2")))," \u68c0\u67e5\u4e00\u4e0b\u662f\u5426\u6709\u65b0\u7248\u672c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# wget https://ghproxy.com/https://github.com/tencentyun/cosfs/releases/download/v1.0.19/cosfs_1.0.19-ubuntu20.04_amd64.deb\nwget https://github.com/tencentyun/cosfs/releases/download/v1.0.19/cosfs_1.0.19-ubuntu20.04_amd64.deb\ndpkg -i cosfs_1.0.19-ubuntu20.04_amd64.deb\n")),(0,l.kt)("h2",{id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5e94\u8be5\u5b58\u653e\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/passwd-cosfs"),"\u4e2d\u3002\u5176\u4e2d\u53ef\u4ee5\u6709\u591a\u884c\uff0c\u6bcf\u884c\u7684\u683c\u5f0f\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"<BucketName-APPID>:<SecretId>:<SecretKey>\n")),(0,l.kt)("p",null,"\u4f8b\u5982\u4f60\u53ef\u4ee5\u8fd9\u6837\u5199\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"examplebucket-1250000000:AKIDHTVVaVR6e3****:PdkhT9e2rZCfy6****\n")),(0,l.kt)("p",null,"\u540c\u65f6\u9700\u8981\u66f4\u6539\u8be5\u6587\u4ef6\u7684\u6743\u9650\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 640 /etc/passwd-cosfs\n")),(0,l.kt)("h2",{id:"\u6302\u8f7d"},"\u6302\u8f7d"),(0,l.kt)("p",null,"\u5148\u521b\u5efa\u4e00\u4e2a\u6302\u8f7d\u70b9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /mnt/cos\n")),(0,l.kt)("p",null,"\u6302\u8f7d\uff0c\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"ourl"),"\u6307\u5b9a\u4e86\u5730\u57df\u94fe\u63a5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cosfs examplebucket-1250000000 /mnt/ -ourl=http://cos.ap-guangzhou.myqcloud.com\n")),(0,l.kt)("p",null,"\u6302\u8f7d\u4e4b\u540e\u5c31\u53ef\u4ee5\u50cf\u5bf9\u5f85\u666e\u901a\u6587\u4ef6\u7cfb\u7edf\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c COS \u4e2d\u7684\u6587\u4ef6\u4e86\u3002"),(0,l.kt)("h2",{id:"\u53d6\u6d88\u6302\u8f7d"},"\u53d6\u6d88\u6302\u8f7d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"umount /mnt/cos\n")),(0,l.kt)("h2",{id:"\u5c40\u9650\u6027"},"\u5c40\u9650\u6027"),(0,l.kt)("p",null,"\u8be5\u65b9\u6cd5\u6709\u4e00\u5b9a ",(0,l.kt)("em",{parentName:"p"},"\u5c40\u9650\u6027 ",(0,l.kt)("sup",{parentName:"em",id:"fnref-3-d8f9a2"},(0,l.kt)("a",{parentName:"sup",href:"#fn-3-d8f9a2",className:"footnote-ref"},"3"))),"\uff0c\u53ea\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u597d\u7528\uff0c\u4f7f\u7528\u65f6\u8981\u8003\u8651\u6027\u80fd\u95ee\u9898\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u968f\u673a\u6216\u8005\u8ffd\u52a0\u5199\u6587\u4ef6\u4f1a\u5bfc\u81f4\u6574\u4e2a\u6587\u4ef6\u7684\u91cd\u5199\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u64cd\u4f5c\uff0c\u4f8b\u5982 list directory\uff0c\u6027\u80fd\u8f83\u5dee\uff0c\u56e0\u4e3a\u9700\u8981\u8fdc\u7a0b\u8bbf\u95ee COS \u670d\u52a1\u5668\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u4ef6/\u6587\u4ef6\u5939\u7684 rename \u64cd\u4f5c\u4e0d\u662f\u539f\u5b50\u7684\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u5ba2\u6237\u7aef\u6302\u8f7d\u540c\u4e00\u4e2a COS bucket \u65f6\uff0c\u4f9d\u8d56\u7528\u6237\u81ea\u884c\u534f\u8c03\u5404\u4e2a\u5ba2\u6237\u7aef\u7684\u884c\u4e3a\u3002\u4f8b\u5982\u907f\u514d\u591a\u4e2a\u5ba2\u6237\u7aef\u5199\u540c\u4e00\u4e2a\u6587\u4ef6\u7b49\u7b49\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 hard link\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u9002\u5408\u7528\u5728\u9ad8\u5e76\u53d1\u8bfb/\u5199\u7684\u573a\u666f\uff0c\u8fd9\u6837\u4f1a\u8ba9\u7cfb\u7edf\u7684 load \u5347\u9ad8\u3002")),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-d8f9a2"},(0,l.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/436/6883"},"\u5bf9\u8c61\u5b58\u50a8 COSFS \u5de5\u5177 - \u5de5\u5177\u6307\u5357 - \u6587\u6863\u4e2d\u5fc3 - \u817e\u8baf\u4e91"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1-d8f9a2",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2-d8f9a2"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tencentyun/cosfs/releases"},"Releases \xb7 tencentyun/cosfs"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2-d8f9a2",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-3-d8f9a2"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tencentyun/cosfs#%E5%B1%80%E9%99%90%E6%80%A7"},"tencentyun/cosfs"),(0,l.kt)("a",{parentName:"li",href:"#fnref-3-d8f9a2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);