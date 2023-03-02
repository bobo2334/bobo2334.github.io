"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6266],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(a),u=i,d=g["".concat(o,".").concat(u)]||g[u]||m[u]||l;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},95953:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var n=a(83117),i=a(80102),l=(a(67294),a(3905)),r=["components"],s={date:new Date("2022-06-18T00:00:00.000Z"),tags:["proxmox-ve","synology"]},o="\u5728 Proxmox VE \u4e2d\u5b89\u88c5\u7fa4\u6656 DSM 6",p={permalink:"/blog/install-synology-dsm-in-proxmox-ve",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/install-synology-dsm-in-proxmox-ve.md",source:"@site/blog/install-synology-dsm-in-proxmox-ve.md",title:"\u5728 Proxmox VE \u4e2d\u5b89\u88c5\u7fa4\u6656 DSM 6",description:"\u524d\u8a00",date:"2022-06-18T00:00:00.000Z",formattedDate:"2022\u5e746\u670818\u65e5",tags:[{label:"proxmox-ve",permalink:"/blog/tags/proxmox-ve"},{label:"synology",permalink:"/blog/tags/synology"}],readingTime:6.58,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-06-18T00:00:00.000Z",tags:["proxmox-ve","synology"]},prevItem:{title:"fnm\uff1aNode.js \u7248\u672c\u7ba1\u7406\u5668",permalink:"/blog/fnm-the-node-js-version-manager"},nextItem:{title:"\u4f7f\u7528 s3fs \u6302\u8f7d\u817e\u8baf\u4e91 COS \u4e2d\u7684\u5185\u5bb9",permalink:"/blog/mount-tencent-cos-using-s3fs"}},c={authorsImageUrls:[]},m=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u6587\u4e2d\u4ece\u4e92\u8054\u7f51\u4e0a\u4e0b\u8f7d\u7684\u6587\u4ef6\u5907\u4efd",id:"\u6587\u4e2d\u4ece\u4e92\u8054\u7f51\u4e0a\u4e0b\u8f7d\u7684\u6587\u4ef6\u5907\u4efd",level:2},{value:"\u4e0b\u8f7d\u5f15\u5bfc",id:"\u4e0b\u8f7d\u5f15\u5bfc",level:2},{value:"\u4e0b\u8f7d\u7cfb\u7edf",id:"\u4e0b\u8f7d\u7cfb\u7edf",level:2},{value:"\u521b\u5efa\u865a\u62df\u673a",id:"\u521b\u5efa\u865a\u62df\u673a",level:2},{value:"\u5bfc\u5165\u5f15\u5bfc\u78c1\u76d8",id:"\u5bfc\u5165\u5f15\u5bfc\u78c1\u76d8",level:2},{value:"\u786c\u76d8\u76f4\u901a",id:"\u786c\u76d8\u76f4\u901a",level:2},{value:"\u8bbe\u7f6e\u5f15\u5bfc\u987a\u5e8f",id:"\u8bbe\u7f6e\u5f15\u5bfc\u987a\u5e8f",level:2},{value:"\u542f\u52a8\u548c\u5b89\u88c5\u7cfb\u7edf",id:"\u542f\u52a8\u548c\u5b89\u88c5\u7cfb\u7edf",level:2},{value:"DSM \u8bbe\u7f6e",id:"dsm-\u8bbe\u7f6e",level:2},{value:"\u521b\u5efa\u5b58\u50a8\u7a7a\u95f4",id:"\u521b\u5efa\u5b58\u50a8\u7a7a\u95f4",level:2},{value:"\u53c2\u8003\u8d44\u6599",id:"\u53c2\u8003\u8d44\u6599",level:2}],g={toc:m};function u(e){var t=e.components,s=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,l.kt)("p",null,"\u611f\u89c9\u6bd4\u5728 ESXi \u4e2d\u5b89\u88c5\u8981\u7b80\u5355\u4e0d\u5c11\u3002\u672c\u6587\u4e2d\u4f7f\u7528 DS918+ \u578b\u53f7\u5bf9\u5e94\u7684\u5f15\u5bfc\u548c\u7cfb\u7edf\u3002"),(0,l.kt)("h2",{id:"\u6587\u4e2d\u4ece\u4e92\u8054\u7f51\u4e0a\u4e0b\u8f7d\u7684\u6587\u4ef6\u5907\u4efd"},"\u6587\u4e2d\u4ece\u4e92\u8054\u7f51\u4e0a\u4e0b\u8f7d\u7684\u6587\u4ef6\u5907\u4efd"),(0,l.kt)("p",null,"\u6587\u4e2d\u6709\u4e00\u4e9b\u6587\u4ef6\u662f\u4ece\u4e92\u8054\u7f51\u4e0a\u4e0b\u8f7d\u7684\uff0c\u4e3a\u4e86\u9632\u6b62\u5176\u4e2d\u7684\u67d0\u4e9b\u8d44\u6e90\u5728\u67d0\u4e9b\u65f6\u523b\u65f6\u6548\uff0c\u8fd9\u91cc\u505a\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"https://zfile.iuok.me/1/articles/install-synology-dsm-in-proxmox-ve"},"\u5907\u4efd"),"\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u5f15\u5bfc"},"\u4e0b\u8f7d\u5f15\u5bfc"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("em",{parentName:"p"},"XPEnology Community",(0,l.kt)("sup",{parentName:"em",id:"fnref-1-fd64cb"},(0,l.kt)("a",{parentName:"sup",href:"#fn-1-fd64cb",className:"footnote-ref"},"1")))," \u4e0b\u8f7d DS918+ v1.04b \u5f15\u5bfc\u6587\u4ef6\uff0c\u5f97\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"synoboot.img"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618113024071",src:a(54869).Z,width:"1218",height:"290"})),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u7cfb\u7edf"},"\u4e0b\u8f7d\u7cfb\u7edf"),(0,l.kt)("p",null,"v1.04b \u652f\u6301 DSM 6.2 \u6216 6.2.1 \u7cfb\u7edf\uff0c\u53bb ",(0,l.kt)("em",{parentName:"p"},"\u7fa4\u6656\u7f51\u7ad9 ",(0,l.kt)("sup",{parentName:"em",id:"fnref-2-fd64cb"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-fd64cb",className:"footnote-ref"},"2")))," \u4e0b\u8f7d\u7cfb\u7edf\uff1b\u9996\u5148\u9009\u62e9\u7cfb\u7edf\u7248\u672c\uff0c\u8fd9\u91cc\u9009\u62e9 6.2.1 \u7684\u7b2c\u4e00\u4e2a\u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"p"},"6.2.1-23824"),"\uff0c\u5f97\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"DSM_DS918+_23739.pat"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618201311930",src:a(81992).Z,width:"408",height:"470"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618201409606",src:a(67858).Z,width:"512",height:"394"})),(0,l.kt)("h2",{id:"\u521b\u5efa\u865a\u62df\u673a"},"\u521b\u5efa\u865a\u62df\u673a"),(0,l.kt)("p",null,"\u5728 PVE \u7684 Web \u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u865a\u62df\u673a\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5e38\u89c4\u3002\u9700\u8981\u6ce8\u610f\u4e00\u4e0b VM ID\uff0c\u540e\u9762\u5bfc\u5165\u5f15\u5bfc\u78c1\u76d8\u7684\u65f6\u5019\u7528\u7684\u5230\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_45_57",src:a(53586).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"\u64cd\u4f5c\u7cfb\u7edf\u3002\u4e0d\u4f7f\u7528\u4efb\u4f55\u4ecb\u8d28\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_46_38",src:a(76561).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"\u7cfb\u7edf\u3002\u6ca1\u4ec0\u4e48\u9700\u8981\u66f4\u6539\u7684\uff0c\u4fdd\u6301\u9ed8\u8ba4\u8bbe\u7f6e\u5373\u53ef\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_47_25",src:a(73759).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"\u78c1\u76d8\u3002\u5220\u9664\u9ed8\u8ba4\u7684\u78c1\u76d8\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_47_47",src:a(62455).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"CPU\u3002\u6839\u636e\u9700\u8981\u8bbe\u7f6e\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_48_11",src:a(89243).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"\u5185\u5b58\u3002\u6839\u636e\u9700\u8981\u8bbe\u7f6e\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_48_22",src:a(78423).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"\u7f51\u7edc\u3002\u7f51\u5361\u6a21\u578b\u9009\u62e9 Intel E1000\uff0c\u53d6\u6d88\u52fe\u9009\u9632\u706b\u5899\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_48_37",src:a(49249).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"\u786e\u8ba4\uff1b\n",(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-11_48_56",src:a(37977).Z,width:"1440",height:"1020"})),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664 CD/DVD \u9a71\u52a8\u5668\uff1b\n",(0,l.kt)("img",{alt:"image-20220618182642048",src:a(2514).Z,width:"902",height:"756"})),(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a\u4e32\u884c\u7aef\u53e3\uff0c\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e0a\u770b\u5230\u5f15\u5bfc\u65e5\u5fd7\uff0c\u5bf9\u4e8e\u6392\u67e5\u9519\u8bef\u5f88\u6709\u5e2e\u52a9\u3002\n",(0,l.kt)("img",{alt:"image-20220618194623034",src:a(20007).Z,width:"1238",height:"752"}))),(0,l.kt)("h2",{id:"\u5bfc\u5165\u5f15\u5bfc\u78c1\u76d8"},"\u5bfc\u5165\u5f15\u5bfc\u78c1\u76d8"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"img"),"\u683c\u5f0f\u7684\u955c\u50cf\u662f\u4e0d\u80fd\u76f4\u63a5\u4f5c\u4e3a\u78c1\u76d8\u4f7f\u7528\u7684\uff0c\u9700\u8981\u4f60\u624b\u52a8\u628a\u5b83\u8f6c\u6362\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"qcow2"),"\u683c\u5f0f\u5e76\u5bfc\u5165\u5230\u865a\u62df\u673a\u4e2d\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u9700\u8981\u4e0a\u4f20",(0,l.kt)("inlineCode",{parentName:"p"},"synoboot.img"),"\u5230 PVE \u4e3b\u673a\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7 SFTP \u4e0a\u4f20\uff0c\u5b58\u653e\u4f4d\u7f6e\u6ca1\u6709\u8981\u6c42\uff0c\u4e34\u65f6\u7528\u7528\uff0c\u7528\u5b8c\u53ef\u4ee5\u5728 PVE \u4e0a\u5220\u9664\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 SSH \u8fde\u63a5\u4e0a PVE \u4e3b\u673a\uff0c\u6267\u884c\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u8f6c\u6362\u78c1\u76d8\u683c\u5f0f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"qemu-img convert -f raw -O qcow2 synoboot.img synoboot.qcow2\n")),(0,l.kt)("p",null,"\u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u6765\u5bfc\u5165\u78c1\u76d8\u3002\u5176\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"104"),"\u662f\u865a\u62df\u673a ID\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"local-lvm"),"\u662f\u5b58\u50a8\u4f4d\u7f6e\u7684\u540d\u79f0\uff1b\u4f60\u53ef\u80fd\u8981\u6839\u636e\u4f60\u7684\u60c5\u51b5\u5bf9\u547d\u4ee4\u8fdb\u884c\u4e00\u4e9b\u4fee\u6539\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"qm importdisk 104 synoboot.qcow2 local-lvm\n")),(0,l.kt)("p",null,"\u547d\u4ee4\u6267\u884c\u5b8c\u6bd5\u4e4b\u540e\u53ef\u4ee5\u5728 PVE Web \u63a7\u5236\u53f0\u4e2d\u67e5\u770b\u5230\u4e00\u4e2a\u672a\u4f7f\u7528\u7684\u78c1\u76d8\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618121759934",src:a(91626).Z,width:"1098",height:"562"})),(0,l.kt)("p",null,"\u53cc\u51fb\u8be5\u78c1\u76d8\u6216\u70b9\u51fb\u300c\u7f16\u8f91\u300d\u5373\u53ef\u6dfb\u52a0\u8fd9\u4e2a\u78c1\u76d8\u5230\u865a\u62df\u673a\u3002\u603b\u7ebf\u9009\u62e9 SATA\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"screenshot-192.168.10.200_8006-2022.06.18-12_19_03",src:a(60034).Z,width:"1200",height:"378"})),(0,l.kt)("h2",{id:"\u786c\u76d8\u76f4\u901a"},"\u786c\u76d8\u76f4\u901a"),(0,l.kt)("p",null,"\u8fd9\u91cc\u76f4\u63a5\u76f4\u901a SATA/SAS \u63a7\u5236\u5668\uff0c\u8981\u786e\u4fdd\u4f60\u7684 PVE \u64cd\u4f5c\u7cfb\u7edf\u6ca1\u6709\u5b89\u88c5\u5728\u8be5\u63a7\u5236\u5668\u4e0a\u7684\u786c\u76d8\u5185\uff0c\u4e0d\u7136\u4f1a\u5bfc\u81f4 PVE \u65e0\u6cd5\u6b63\u5e38\u542f\u52a8\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u5176\u4ed6\u786c\u76d8\u63a7\u5236\u5668\uff08\u5982 NVME\uff09\u7528\u6765\u5b89\u88c5 PVE \u7684\u8bdd\u5c31\u4e0d\u8981\u9009\u62e9\u76f4\u901a\u786c\u76d8\u63a7\u5236\u5668\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u5176\u4ed6\u65b9\u6cd5\u6765\u76f4\u901a\u786c\u76d8\u3002"),(0,l.kt)("p",null,"\u76f4\u901a\u786c\u76d8\u63a7\u5236\u5668\u7684\u4f18\u70b9\u662f DSM \u53ef\u4ee5\u8bfb\u53d6\u5230\u786c\u76d8\u7684 ",(0,l.kt)("em",{parentName:"p"},"S.M.A.R.T.",(0,l.kt)("sup",{parentName:"em",id:"fnref-3-fd64cb"},(0,l.kt)("a",{parentName:"sup",href:"#fn-3-fd64cb",className:"footnote-ref"},"3")))," \u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528 SSH \u8fde\u63a5\u4e0a PVE \u4e3b\u673a\uff0c\u6267\u884c\u547d\u4ee4\u3002"),(0,l.kt)("p",null,"\u7f16\u8f91",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/default/grub"),"\u6587\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/default/grub\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},'# \u5728\u91cc\u9762\u627e\u5230\n# GRUB_CMDLINE_LINUX_DEFAULT="quiet"\n# \u5982\u679c\u662f intel cpu \u8bf7\u6539\u4e3a\nGRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on iommu=pt"\n# \u5982\u679c\u662f amd cpu \u8bf7\u6539\u4e3a\nGRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on iommu=pt"\n')),(0,l.kt)("p",null,"\u66f4\u65b0 grub\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"update-grub\n")),(0,l.kt)("p",null,"\u91cd\u542f\u4e3b\u673a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"reboot\n")),(0,l.kt)("p",null,"\u5728 Web \u63a7\u5236\u53f0\u4e2d\u5411\u865a\u62df\u673a\u6dfb\u52a0 PCI \u8bbe\u5907\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618123347893",src:a(31607).Z,width:"1856",height:"724"})),(0,l.kt)("h2",{id:"\u8bbe\u7f6e\u5f15\u5bfc\u987a\u5e8f"},"\u8bbe\u7f6e\u5f15\u5bfc\u987a\u5e8f"),(0,l.kt)("p",null,"\u5728\u300c\u9009\u9879\u300d->\u300c\u5f15\u5bfc\u987a\u5e8f\u300d\u4e2d\u8bbe\u7f6e\u5f15\u5bfc\u987a\u5e8f\u3002\u52fe\u9009\u4ece",(0,l.kt)("inlineCode",{parentName:"p"},"sata0"),"\u542f\u52a8\uff0c\u628a\u5176\u4ed6\u542f\u52a8\u9879\u90fd\u53bb\u6389\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618172735749",src:a(71837).Z,width:"1536",height:"680"})),(0,l.kt)("h2",{id:"\u542f\u52a8\u548c\u5b89\u88c5\u7cfb\u7edf"},"\u542f\u52a8\u548c\u5b89\u88c5\u7cfb\u7edf"),(0,l.kt)("p",null,"\u5728 Web \u63a7\u5236\u53f0\u4e2d\u542f\u52a8\u865a\u62df\u673a\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4e32\u53e3\u63a7\u5236\u53f0\u67e5\u770b IP\u3002\u5728\u542f\u52a8\u865a\u62df\u673a\u540e\u9700\u8981\u5feb\u901f\u6253\u5f00\u4e32\u53e3\u63a7\u5236\u53f0\uff0c\u8981\u4e0d\u7136\u53ef\u80fd\u4f1a\u9519\u8fc7\u4e00\u4e9b\u65e5\u5fd7\u4fe1\u606f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618194830834",src:a(69174).Z,width:"584",height:"232"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618194814526",src:a(99258).Z,width:"1600",height:"952"})),(0,l.kt)("p",null,"\u6216\u662f\u901a\u8fc7\u8def\u7531\u5668\u7684\u7ba1\u7406\u9875\u9762\u67e5\u770b DSM \u7684 IP \u5730\u5740\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618172958405",src:a(75269).Z,width:"1342",height:"878"})),(0,l.kt)("p",null,"\u518d\u6216\u8005\u4f7f\u7528 ",(0,l.kt)("em",{parentName:"p"},"Synology Assistant",(0,l.kt)("sup",{parentName:"em",id:"fnref-4-fd64cb"},(0,l.kt)("a",{parentName:"sup",href:"#fn-4-fd64cb",className:"footnote-ref"},"4")))," \u5bfb\u627e DSM \u7684 IP \u5730\u5740\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618183659193",src:a(34574).Z,width:"1386",height:"1204"})),(0,l.kt)("p",null,"\u8bbf\u95ee\u8be5 IP \u5730\u5740\u5373\u53ef\u770b\u89c1 DSM \u5b89\u88c5\u5411\u5bfc\u3002\u70b9\u51fb\u300c\u8bbe\u7f6e\u300d\u5f00\u59cb\u5b89\u88c5\u5411\u5bfc\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618180330535",src:a(37990).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,"\u70b9\u51fb\u300c\u624b\u52a8\u5b89\u88c5\u300d\uff0c\u4e0d\u8981\u70b9\u300c\u7acb\u5373\u5b89\u88c5\u300d\uff0c\u4e0d\u7136\u4f1a\u5b89\u88c5\u6700\u65b0\u7684\u7cfb\u7edf\u5bfc\u81f4\u65e0\u6cd5\u542f\u52a8\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618180434695",src:a(98379).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,"\u70b9\u51fb\u300c\u6d4f\u89c8\u300d\uff0c\u4e0a\u4f20\u81ea\u5df1\u4e0b\u8f7d\u7684\u7cfb\u7edf\u6587\u4ef6",(0,l.kt)("inlineCode",{parentName:"p"},"DSM_DS918+_23824.pat"),"\uff0c\u4e4b\u540e\u518d\u70b9\u51fb\u300c\u7acb\u5373\u5b89\u88c5\u300d\uff1b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618180552646",src:a(16140).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618180651460",src:a(54162).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,"\u7cfb\u7edf\u5b89\u88c5\u5b8c\u6bd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618195821760",src:a(20657).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,"\u53ef\u4ee5\u53bb\u4e32\u53e3\u63a7\u5236\u53f0\u770b\u65e5\u5fd7\uff0c\u65e5\u5fd7\u6253\u5370\u5b8c\u6bd5\u5c31\u4ee3\u8868\u542f\u52a8\u6210\u529f\u4e86\uff1b\u5e76\u4e14\u5728\u4e32\u53e3\u63a7\u5236\u53f0\u5185\u8fd8\u53ef\u4ee5\u770b\u5230 IP \u5730\u5740\u3002\u5982\u679c\u7f51\u9875\u6ca1\u6709\u81ea\u52a8\u5237\u65b0\u7684\u8bdd\u4f60\u53ef\u4ee5\u624b\u52a8\u5237\u65b0\u4e00\u4e0b\u7f51\u9875\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618200154164",src:a(24806).Z,width:"1600",height:"952"})),(0,l.kt)("h2",{id:"dsm-\u8bbe\u7f6e"},"DSM \u8bbe\u7f6e"),(0,l.kt)("p",null,"\u8bbe\u7f6e\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618200229776",src:a(46425).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,"\u5173\u95ed\u81ea\u52a8\u66f4\u65b0\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618200321484",src:a(63631).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,"\u4e0d\u8981\u4f7f\u7528 QuickConnect\uff0c\u6b63\u7248\u7fa4\u6656\u53ef\u4ee5\u4f7f\u7528\uff0c\u9ed1\u7fa4\u6656\u5c31\u4e0d\u8981\u7528\u4e86\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618200348349",src:a(13930).Z,width:"1778",height:"1548"})),(0,l.kt)("p",null,"\u641e\u5b9a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618200436543",src:a(8389).Z,width:"1778",height:"1548"})),(0,l.kt)("h2",{id:"\u521b\u5efa\u5b58\u50a8\u7a7a\u95f4"},"\u521b\u5efa\u5b58\u50a8\u7a7a\u95f4"),(0,l.kt)("p",null,"\u5728\u300c\u5b58\u50a8\u7a7a\u95f4\u7ba1\u7406\u5458\u300d\u5957\u4ef6\u4e2d\u521b\u5efa\u5b58\u50a8\u7a7a\u95f4\u3002\u6ce8\u610f\u5728\u521b\u5efa\u5b58\u50a8\u7a7a\u95f4\u7684\u65f6\u5019\u4e0d\u8981\u52fe\u9009\u4f7f\u7528\u5f15\u5bfc\u76d8\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618200732971",src:a(48225).Z,width:"2588",height:"1638"})),(0,l.kt)("p",null,"\u7cfb\u7edf\u5de5\u4f5c\u6b63\u5e38\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618201922750",src:a(36646).Z,width:"2588",height:"1638"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20220618201713478",src:a(92755).Z,width:"2588",height:"1638"})),(0,l.kt)("h2",{id:"\u53c2\u8003\u8d44\u6599"},"\u53c2\u8003\u8d44\u6599"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5728\u7f16\u5199\u672c\u6587\u65f6\u4f7f\u7528\u5230\u7684\u3001\u4f46\u672a\u5728\u6587\u4e2d\u660e\u786e\u5f15\u7528\u7684\u53c2\u8003\u8d44\u6599\uff0c\u5e0c\u671b\u5bf9\u4f60\u6709\u5e2e\u52a9\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1Ut411A7wQ"},"\u7b14\u8bb0\u672c\u4e0a PVE \u865a\u62df\u673a\u5b89\u88c5\u9ed1\u7fa4\u6656\u5e76\u8bbe\u7f6e\u786c\u76d8\u76f4\u901a_\u54d4\u54e9\u54d4\u54e9_bilibili")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1c5411D7tP"},"PVE7.\u5b89\u88c5\u9ed1\u7fa4\u6656\uff08\u8bb0\u5f55\uff09_\u54d4\u54e9\u54d4\u54e9_bilibili")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.nasge.com/archives/137.html"},"Proxmox VE(PVE) \u7cfb\u7edf\u5f00\u542f IOMMU \u529f\u80fd\u5b9e\u73b0\u786c\u4ef6\u76f4\u901a - NAS \u9601")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://foxi.buduanwang.vip/virtualization/1754.html/"},"\u4f5b\u897f\u535a\u5ba2 - Proxmox VE pve \u786c\u76d8\u76f4\u901a"))),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-1-fd64cb"},(0,l.kt)("a",{parentName:"li",href:"https://xpenology.com/forum/topic/12952-dsm-62-loader/"},"DSM 6.2 Loader - Loaders - XPEnology Community"),(0,l.kt)("a",{parentName:"li",href:"#fnref-1-fd64cb",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-2-fd64cb"},(0,l.kt)("a",{parentName:"li",href:"https://archive.synology.com/download/Os/DSM"},"Synology Archive Download Site - Index of /download/Os/DSM"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2-fd64cb",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-3-fd64cb"},(0,l.kt)("a",{parentName:"li",href:"https://zh.wikipedia.org/wiki/S.M.A.R.T."},"S.M.A.R.T. - \u7ef4\u57fa\u767e\u79d1\uff0c\u81ea\u7531\u7684\u767e\u79d1\u5168\u4e66"),(0,l.kt)("a",{parentName:"li",href:"#fnref-3-fd64cb",className:"footnote-backref"},"\u21a9")),(0,l.kt)("li",{parentName:"ol",id:"fn-4-fd64cb"},(0,l.kt)("a",{parentName:"li",href:"https://www.synology.cn/zh-cn/support/download/DS918+?version=7.0#utilities"},"\u4e0b\u8f7d\u4e2d\u5fc3 - DS918+ | Synology \u7fa4\u6656\u79d1\u6280"),(0,l.kt)("a",{parentName:"li",href:"#fnref-4-fd64cb",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},54869:function(e,t,a){t.Z=a.p+"assets/images/image-20220618113024071-7c847192f0bfa01032ceb9640ddcf362.png"},91626:function(e,t,a){t.Z=a.p+"assets/images/image-20220618121759934-2f8932ccf9fcd0b7db25c32f2463b5a2.png"},31607:function(e,t,a){t.Z=a.p+"assets/images/image-20220618123347893-92b470188ee5b1d09b41f8e41cf8e4fd.png"},71837:function(e,t,a){t.Z=a.p+"assets/images/image-20220618172735749-17ce635dc5439338a5c75e95bea22a84.png"},75269:function(e,t,a){t.Z=a.p+"assets/images/image-20220618172958405-42b94da143929d07841975c19c179793.png"},37990:function(e,t,a){t.Z=a.p+"assets/images/image-20220618180330535-57245b881a5e2149ad33900befe81f36.png"},98379:function(e,t,a){t.Z=a.p+"assets/images/image-20220618180434695-db675c0ae4431164689b710d19b21496.png"},16140:function(e,t,a){t.Z=a.p+"assets/images/image-20220618180552646-e59c8965e3deca5b20f8c5ded88a890e.png"},54162:function(e,t,a){t.Z=a.p+"assets/images/image-20220618180651460-c208b900e7420dff248f906e534a76b7.png"},2514:function(e,t,a){t.Z=a.p+"assets/images/image-20220618182642048-d57f18f209d312b05fc86acff0f422b8.png"},34574:function(e,t,a){t.Z=a.p+"assets/images/image-20220618183659193-d95a9c853ead4031a96d43358d03dcd9.png"},20007:function(e,t,a){t.Z=a.p+"assets/images/image-20220618194623034-3e78be698366234c25d99ae4c6b56b5e.png"},99258:function(e,t,a){t.Z=a.p+"assets/images/image-20220618194814526-329351dcd6cf58a0c278262587b2cc1f.png"},69174:function(e,t,a){t.Z=a.p+"assets/images/image-20220618194830834-f810854fa4cf330a05b4992894801f29.png"},20657:function(e,t,a){t.Z=a.p+"assets/images/image-20220618195821760-43cdc3d3c400cb013202343e0c615554.png"},24806:function(e,t,a){t.Z=a.p+"assets/images/image-20220618200154164-f13ea4d7b3e8166bf244799384f7152c.png"},46425:function(e,t,a){t.Z=a.p+"assets/images/image-20220618200229776-79085556d403c4ea73f6f4791fc74991.png"},63631:function(e,t,a){t.Z=a.p+"assets/images/image-20220618200321484-eab65134bbccbdc856bcd8bc8a9f1285.png"},13930:function(e,t,a){t.Z=a.p+"assets/images/image-20220618200348349-533097061066c809d43aa62f57abdbba.png"},8389:function(e,t,a){t.Z=a.p+"assets/images/image-20220618200436543-92daad08790dae3307af293af962fd7b.png"},48225:function(e,t,a){t.Z=a.p+"assets/images/image-20220618200732971-2d80bc4ac165a4719b43fae0c6382760.png"},81992:function(e,t,a){t.Z=a.p+"assets/images/image-20220618201311930-c5123527634c9addd0ef8042d08c01a6.png"},67858:function(e,t,a){t.Z=a.p+"assets/images/image-20220618201409606-b7b05a7a6c10103b4a140d03d67de64b.png"},92755:function(e,t,a){t.Z=a.p+"assets/images/image-20220618201713478-1a002ce5167bf34b5708fdc97a82fd56.png"},36646:function(e,t,a){t.Z=a.p+"assets/images/image-20220618201922750-9d241913bcc79e05ee1cfdd7ec8bb5d5.png"},53586:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_45_57-7471cb9e3e4ca3b724ee76fd45c36551.png"},76561:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_46_38-3e65b6b6958fb514cb8c3b3c714d5e50.png"},73759:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_47_25-82233aa4c8cfdb83a2d8c75440d0b936.png"},62455:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_47_47-db1c3ea2dad879dc8d24e9e1c6fbc568.png"},89243:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_48_11-e60a0510a88a1910d86e1a9f31413051.png"},78423:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_48_22-61cb428f9e2cb6ba79c62b101d2abbb1.png"},49249:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_48_37-66284872604c92c708a3d313f1cc602a.png"},37977:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-11_48_56-6477ecd05c0ac7ae8c56977d8f993311.png"},60034:function(e,t,a){t.Z=a.p+"assets/images/screenshot-192.168.10.200_8006-2022.06.18-12_19_03-4eed6b3e96cd6ae860603e0f0846cfb5.png"}}]);