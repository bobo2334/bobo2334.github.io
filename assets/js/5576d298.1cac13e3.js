"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3249],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=i(n),m=a,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return i},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={date:new Date("2022-01-10T00:00:00.000Z")},s="\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939",i={permalink:"/blog/mount-tencent-cos-on-local-file-system",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/mount-tencent-cos-on-local-file-system.md",source:"@site/blog/mount-tencent-cos-on-local-file-system.md",title:"\u6302\u8f7d\u817e\u8baf\u4e91 COS \u5230\u672c\u5730\u6587\u4ef6\u5939",description:"\u524d\u8a00",date:"2022-01-10T00:00:00.000Z",formattedDate:"2022\u5e741\u670810\u65e5",tags:[],truncated:!0,authors:[],frontMatter:{date:"2022-01-10T00:00:00.000Z"},prevItem:{title:"\u4f7f\u7528 Caddy \u81ea\u52a8\u7533\u8bf7\u6cdb\u57df\u540d\u8bc1\u4e66",permalink:"/blog/wildcard-certificates-with-caddy"},nextItem:{title:"\u7528 KMS \u6fc0\u6d3b Windows \u548c Office",permalink:"/blog/activate-windows-and-office-with-kms"}},u={authorsImageUrls:[]},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u5b89\u88c5\u8f6f\u4ef6",id:"\u5b89\u88c5\u8f6f\u4ef6",children:[],level:2},{value:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6",children:[],level:2},{value:"\u6302\u8f7d",id:"\u6302\u8f7d",children:[],level:2},{value:"\u53d6\u6d88\u6302\u8f7d",id:"\u53d6\u6d88\u6302\u8f7d",children:[],level:2},{value:"\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",id:"\u5f00\u673a\u81ea\u52a8\u6302\u8f7d",children:[],level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u817e\u8baf\u4e91\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8f6f\u4ef6 cosfs",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u7528\u4e8e\u6302\u8f7d COS \u5230\u672c\u5730\uff0c\u53ef\u4ee5\u4f7f\u7528\u6807\u51c6\u7684\u6587\u4ef6\u64cd\u4f5c\u547d\u4ee4\u6765\u64cd\u4f5c COS \u4e2d\u7684\u5185\u5bb9\u3002\u7531\u4e8e\u540e\u7aef\u662f\u4e91\u5b58\u50a8\u800c\u4e0d\u662f\u771f\u6b63\u7684\u672c\u5730\u5b58\u50a8\uff0c\u6240\u4ee5\u6709\u4e9b\u64cd\u4f5c\u7684\u6027\u80fd\u6bd4\u8f83\u4f4e\u3002\u4e0d\u63a8\u8350\u901a\u8fc7\u6b64\u79cd\u65b9\u5f0f\u5728\u5176\u4e2d\u4fee\u6539\u6587\u4ef6\u5185\u5bb9\u6216\u6587\u4ef6\u540d\u79f0\uff0c\u4ec5\u4ec5\u4e0b\u8f7d\u6587\u4ef6\u548c\u4e0a\u4f20\u65b0\u6587\u4ef6\u7684\u64cd\u4f5c\u8fd8\u662f\u53ef\u4ee5\u7684\u3002"),(0,o.kt)("p",null,"\u817e\u8baf\u4e91\u5185\u7f51\u8bbf\u95ee COS \u7684\u4e0b\u8f7d\u6d41\u91cf\u4e0d\u8ba1\u8d39\uff0c\u53ef\u4ee5\u901a\u8fc7\u817e\u8baf\u4e91\u670d\u52a1\u5668\u628a COS \u5185\u5bb9\u6302\u8f7d\u5230\u670d\u52a1\u5668\uff0c\u7136\u540e\u901a\u8fc7\u522b\u7684\u9014\u5f84\u5728\u5916\u7f51\u4e0b\u8f7d\uff0c\u4f8b\u5982\u7528 Rclone \u901a\u8fc7 SFTP \u628a COS \u7684\u5185\u5bb9\u590d\u5236\u5230\u5916\u7f51\u7684\u673a\u5668\uff0c\u8fd9\u6837\u5c31\u4e0d\u8ba1\u4e0b\u8f7d\u6d41\u91cf\u7684\u8d39\u7528\u4e86\uff0c\u4f46\u662f API \u8c03\u7528\u6b21\u6570\u8fd8\u662f\u8981\u6536\u8d39\u7684\u3002"),(0,o.kt)("p",null,"\u6587\u4e2d\u6240\u6d89\u53ca\u7684\u64cd\u4f5c\u7cfb\u7edf\u662f Debian\uff0cDebian \u7cfb\u7684\u7cfb\u7edf\u64cd\u4f5c\u5e94\u8be5\u90fd\u5dee\u4e0d\u591a\u3002"),(0,o.kt)("h2",{id:"\u5b89\u88c5\u8f6f\u4ef6"},"\u5b89\u88c5\u8f6f\u4ef6"),(0,o.kt)("p",null,"cosfs \u7684\u6302\u8f7d\u4f9d\u8d56 fuse\uff0c\u5148\u5b89\u88c5 fuse\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install fuse\n")),(0,o.kt)("p",null,"\u5b89\u88c5 cosfs\uff0c\u5b98\u65b9\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"deb"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"rpm"),"\u683c\u5f0f\u7684\u5b89\u88c5\u5305\uff0cDebian \u7cfb\u7edf\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"deb"),"\u683c\u5f0f\u7684\uff0c\u4e0b\u8f7d\u5b89\u88c5\u5305\u4e4b\u524d\u53ef\u4ee5\u5148\u53bb\u53d1\u5e03\u9875\u9762 ",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," \u68c0\u67e5\u4e00\u4e0b\u662f\u5426\u6709\u65b0\u7248\u672c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# wget https://ghproxy.com/https://github.com/tencentyun/cosfs/releases/download/v1.0.19/cosfs_1.0.19-ubuntu20.04_amd64.deb\nwget https://github.com/tencentyun/cosfs/releases/download/v1.0.19/cosfs_1.0.19-ubuntu20.04_amd64.deb\ndpkg -i cosfs_1.0.19-ubuntu20.04_amd64.deb\n")),(0,o.kt)("h2",{id:"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"},"\u7f16\u5199\u914d\u7f6e\u6587\u4ef6"),(0,o.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5e94\u8be5\u5b58\u653e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/passwd-cosfs"),"\u4e2d\u3002\u5176\u4e2d\u53ef\u4ee5\u6709\u591a\u884c\uff0c\u6bcf\u884c\u7684\u683c\u5f0f\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<BucketName-APPID>:<SecretId>:<SecretKey>\n")),(0,o.kt)("p",null,"\u4f8b\u5982\u4f60\u53ef\u4ee5\u8fd9\u6837\u5199\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"examplebucket-1250000000:AKIDHTVVaVR6e3****:PdkhT9e2rZCfy6****\n")),(0,o.kt)("p",null,"\u540c\u65f6\u9700\u8981\u66f4\u6539\u8be5\u6587\u4ef6\u7684\u6743\u9650\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 640 /etc/passwd-cosfs\n")),(0,o.kt)("h2",{id:"\u6302\u8f7d"},"\u6302\u8f7d"),(0,o.kt)("p",null,"\u5148\u521b\u5efa\u4e00\u4e2a\u6302\u8f7d\u70b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /mnt/cos\n")),(0,o.kt)("p",null,"\u6302\u8f7d\uff0c\u5176\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"ourl"),"\u6307\u5b9a\u4e86\u5730\u57df\u94fe\u63a5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cosfs examplebucket-1250000000 /mnt/cos -ourl=http://cos.shanghai.myqcloud.com\n")),(0,o.kt)("p",null,"\u6302\u8f7d\u4e4b\u540e\u5c31\u53ef\u4ee5\u50cf\u5bf9\u5f85\u666e\u901a\u6587\u4ef6\u7cfb\u7edf\u7684\u65b9\u5f0f\u6765\u64cd\u4f5c COS \u4e2d\u7684\u6587\u4ef6\u4e86\u3002"),(0,o.kt)("h2",{id:"\u53d6\u6d88\u6302\u8f7d"},"\u53d6\u6d88\u6302\u8f7d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"umount /mnt/cos\n")),(0,o.kt)("h2",{id:"\u5f00\u673a\u81ea\u52a8\u6302\u8f7d"},"\u5f00\u673a\u81ea\u52a8\u6302\u8f7d"),(0,o.kt)("p",null,"// TODO"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.tencent.com/document/product/436/6883"},"\u5bf9\u8c61\u5b58\u50a8 COSFS \u5de5\u5177 - \u5de5\u5177\u6307\u5357 - \u6587\u6863\u4e2d\u5fc3 - \u817e\u8baf\u4e91"),(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tencentyun/cosfs/releases"},"Releases \xb7 tencentyun/cosfs"),(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);