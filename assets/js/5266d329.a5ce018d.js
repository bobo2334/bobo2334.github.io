"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6104],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=i,b=f["".concat(l,".").concat(d)]||f[d]||c[d]||r;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32979:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={date:new Date("2021-08-24T00:00:00.000Z"),tags:["github","node-js"]},l="\u5229\u7528 Github Actions \u90e8\u7f72 Vuepress \u9879\u76ee\u5230 Github Pages",p={permalink:"/blog/deploy-vuepress-project-to-github-pages-with-github-actions",editUrl:"https://github.com/bobo2334/bobo2334.github.io/edit/master/blog/deploy-vuepress-project-to-github-pages-with-github-actions.md",source:"@site/blog/deploy-vuepress-project-to-github-pages-with-github-actions.md",title:"\u5229\u7528 Github Actions \u90e8\u7f72 Vuepress \u9879\u76ee\u5230 Github Pages",description:"\u524d\u8a00",date:"2021-08-24T00:00:00.000Z",formattedDate:"2021\u5e748\u670824\u65e5",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"node-js",permalink:"/blog/tags/node-js"}],truncated:!0,authors:[],frontMatter:{date:"2021-08-24T00:00:00.000Z",tags:["github","node-js"]},prevItem:{title:"SSH \u5bc6\u94a5\u767b\u5f55",permalink:"/blog/ssh-certificate-authentication"},nextItem:{title:"EditorConfig \u7edf\u4e00\u7f16\u7801\u98ce\u683c",permalink:"/blog/editorconfig"}},u={authorsImageUrls:[]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u521b\u5efa Github \u4ed3\u5e93",id:"\u521b\u5efa-github-\u4ed3\u5e93",level:2},{value:"\u914d\u7f6e Github Actions",id:"\u914d\u7f6e-github-actions",level:2},{value:"\u914d\u7f6e Github Pages",id:"\u914d\u7f6e-github-pages",level:2}],f={toc:c};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"Vuepress",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-223df5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-223df5",className:"footnote-ref"},"1"))," \u662f\u4e00\u4e2a\u57fa\u4e8e Vue \u7684\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\uff1bGithub Pages",(0,r.kt)("sup",{parentName:"p",id:"fnref-2-223df5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2-223df5",className:"footnote-ref"},"2"))," \u662f Github \u63d0\u4f9b\u7684\u514d\u8d39\u7684\u9759\u6001\u7f51\u7ad9\u6258\u7ba1\u670d\u52a1\uff1bGithub Actions",(0,r.kt)("sup",{parentName:"p",id:"fnref-3-223df5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3-223df5",className:"footnote-ref"},"3"))," \u662f Github \u4ed3\u5e93\u4e2d\u96c6\u6210\u7684 CI/CD",(0,r.kt)("sup",{parentName:"p",id:"fnref-4-223df5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4-223df5",className:"footnote-ref"},"4"))," \u670d\u52a1\u3002"),(0,r.kt)("p",null,"Vuepress \u662f\u4e00\u4e2a Node.js \u9879\u76ee\uff0c\u5b83\u53ef\u4ee5\u6839\u636e\u914d\u7f6e\u5c06 Markdown \u6587\u4ef6\u8f6c\u4e3a HTML \u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u5c06\u8f93\u51fa\u7684\u9759\u6001\u6587\u4ef6\u6258\u7ba1\u5728 Github Pages \u4e2d\uff0c\u8fd9\u6837\u4f60\u5c31\u5f97\u5230\u4e86\u4e00\u4e2a\u53ef\u4ee5\u8bbf\u95ee\u7684\u57df\u540d\u6765\u5c55\u793a\u8fd9\u4e9b\u9759\u6001\u7684 HTML \u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u4f20\u7edf\u7684\u505a\u6cd5\u662f\u5728\u672c\u5730\u5b89\u88c5\u597d Noed.js \u73af\u5883\uff0c\u81ea\u5df1\u624b\u52a8\u6784\u5efa\u9879\u76ee\u4e4b\u540e\u5c06\u6784\u5efa\u4ea7\u7269\u4e0a\u4f20\u5230 Github \u4ed3\u5e93\uff0c\u4ece\u800c\u89e6\u53d1 Github Pages \u7684\u6784\u5efa\u3002\u73b0\u5728\u53ef\u4ee5\u5229\u7528 Github Actions \u6765\u4ee3\u66ff\u624b\u5de5\u52b3\u52a8\uff0cGithub Actions \u53ef\u4ee5\u81ea\u52a8\u88ab\u89e6\u53d1\uff0c\u5b83\u8fd0\u884c\u5728 Github \u63d0\u4f9b\u7684\u865a\u62df\u73af\u5883\u4e2d\uff0c\u53ef\u4ee5\u6267\u884c\u4e00\u7cfb\u5217\u4efb\u52a1\u4ece\u800c\u4ee3\u66ff\u91cd\u590d\u67af\u71e5\u7684\u624b\u52a8\u6784\u5efa\u548c\u90e8\u7f72\u7684\u6b65\u9aa4\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa-github-\u4ed3\u5e93"},"\u521b\u5efa Github \u4ed3\u5e93"),(0,r.kt)("p",null,"\u5728\u521b\u5efa\u7684 Github \u4ed3\u5e93\u65f6\u8981\u6ce8\u610f\u4ed3\u5e93\u540d\u79f0\uff0c\u5047\u5982\u4f60\u7684\u7528\u6237\u540d\u662f foo\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u521b\u5efa\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"foo.github.io"),"\u7684\u4ed3\u5e93\uff0c\u4f60\u5c06\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"https://foo.github.io"),"\u6765\u8bbf\u95ee\u6b64\u4ed3\u5e93\u7684 Github Pages \u5185\u5bb9\uff1b"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u521b\u5efa\u5176\u4ed6\u540d\u79f0\u7684\u4ed3\u5e93\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"bar"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"https://foo.github.io/bar/"),"\u6765\u8bbf\u95ee\u6b64\u4ed3\u5e93\u7684 Github Pages \u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u4f60\u671f\u671b\u7684\u8bbf\u95ee\u65b9\u5f0f\u6765\u9009\u62e9\u4ed3\u5e93\u540d\u79f0\u3002"),(0,r.kt)("h2",{id:"\u914d\u7f6e-github-actions"},"\u914d\u7f6e Github Actions"),(0,r.kt)("p",null,"Github Actions \u7684\u914d\u7f6e\u6587\u4ef6\u5e94\u8be5\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},".github/workflows/"),"\u6587\u4ef6\u5939\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u9879\u76ee\u4e2d\u914d\u7f6e\u591a\u4e2a Actions\u3002\u914d\u7f6e\u6587\u4ef6\u662f YAML \u683c\u5f0f\uff0c\u6587\u4ef6\u540d\u5f62\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"*.yml"),"\u3002"),(0,r.kt)("p",null,"\u6bcf\u4e00\u4e2a Action \u4e2d\u53ef\u4ee5\u5305\u62ec\u591a\u4e2a job\uff0c\u6bcf\u4e2a job \u53ef\u4ee5\u5305\u62ec\u591a\u4e2a step\u3002\u5728 step \u4e2d\u4f60\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u547d\u4ee4\uff0c\u6216\u8005\u5f15\u7528\u5176\u4ed6\u4eba\u7f16\u5199\u597d\u7684 Action \u811a\u672c\u3002\u5728\u672c\u6587\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u5f15\u7528\u4e86 github-pages-deploy-action",(0,r.kt)("sup",{parentName:"p",id:"fnref-5-223df5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5-223df5",className:"footnote-ref"},"5"))," \u6765\u5b8c\u6210 Github Pages \u90e8\u7f72\uff0c\u800c\u4e0d\u7528\u5173\u7cfb\u5176\u5b9e\u73b0\u7ec6\u8282\u3002"),(0,r.kt)("p",null,"\u5b8c\u6210\u672c\u6587\u76ee\u6807\u7684 Github Actions \u914d\u7f6e\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: "github actions build and deploy gh-pages"\non:\n  push:\n    branches:\n      - master\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2.3.1\n        with:\n          persist-credentials: false\n      - name: install and build\n        run: |\n          npm install\n          npm run build\n      - name: Deploy\n        uses: JamesIves/github-pages-deploy-action@4.1.4\n        with:\n          BRANCH: gh-pages\n          FOLDER: docs/.vuepress/dist\n')),(0,r.kt)("p",null,"\u5176\u4e2d\u7684\u4e00\u4e9b\u5173\u952e\u914d\u7f6e\u89e3\u91ca\u5982\u4e0b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"on.push.branches"),"\uff0c\u5728\u63a8\u9001\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"master"),"\u5206\u652f\u65f6\u89e6\u53d1\u6b64 Action\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jobs.build-and-deploy"),"\uff0c\u5728\u4e00\u4e2a Action \u4e2d\u53ef\u4ee5\u6709\u591a\u4e2a job\uff0c\u8fd9\u662f\u5176\u4e2d\u7684\u4e00\u4e2a\uff0c\u540d\u79f0\u662f\u81ea\u5df1\u53d6\u7684\uff1b\u6bcf\u4e2a\u4efb\u52a1\u53ef\u4ee5\u6709\u591a\u4e2a step\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jobs.build-and-deploy.steps[0]"),"\uff0c\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"actions/checkout"),"\u68c0\u51fa\u4ed3\u5e93\u5185\u5bb9\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jobs.build-and-deploy.steps[1]"),"\uff0c\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"npm"),"\u547d\u4ee4\u5b89\u88c5\u5f00\u53d1\u73af\u5883\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jobs.build-and-deploy.steps[2]"),"\uff0c\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"JamesIves/github-pages-deploy-action"),"\u90e8\u7f72",(0,r.kt)("inlineCode",{parentName:"li"},"docs/.vuepress/dist"),"\u6587\u4ef6\u5939\u4e2d\u7684\u5185\u5bb9\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"gh-pages"),"\u5206\u652f\u4e2d\u3002")),(0,r.kt)("p",null,"\u5728\u7f16\u5199\u597d\u914d\u7f6e\u6587\u4ef6\u540e\u53ef\u4ee5\u63d0\u4ea4\u5e76\u63a8\u9001\u6587\u4ef6\u81f3 master \u5206\u652f\uff0c\u8fd9\u4f1a\u81ea\u52a8\u89e6\u53d1 Action \u7684\u6267\u884c\uff0c\u5e76\u4e14\u4f60\u53ef\u4ee5\u5728 Actions \u680f\u76ee\u4e2d\u67e5\u770b\u6267\u884c\u65e5\u5fd7\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210824225724791",src:n(8024).Z,width:"1872",height:"591"})),(0,r.kt)("h2",{id:"\u914d\u7f6e-github-pages"},"\u914d\u7f6e Github Pages"),(0,r.kt)("p",null,"\u6211\u4eec\u7684\u6784\u5efa\u4ea7\u7269\u653e\u5728 gh-pages \u5206\u652f\uff0c\u6211\u4eec\u9700\u8981\u544a\u8bc9 Github Pages \u6e90\u6587\u4ef6\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5728 Github \u4ed3\u5e93\u7684 Settings \u680f\u76ee\u4e2d\uff0c\u4ece\u5de6\u4fa7\u7684\u8bbe\u7f6e\u5bfc\u822a\u680f\u627e\u5230 Pages \u8bbe\u7f6e\u3002\u5728\u8fd9\u91cc\u4f60\u53ef\u4ee5\u8bbe\u7f6e gh-pages \u4e3a\u6570\u636e\u6e90\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210824230246146",src:n(13283).Z,width:"1569",height:"788"})),(0,r.kt)("p",null,"\u5982\u679c\u6ca1\u51fa\u9519\u7684\u8bdd\uff0c\u5728\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7 Github Pages \u7ed9\u4f60\u63d0\u4f9b\u7684\u57df\u540d\u6765\u8bbf\u95ee\u4f60\u7684\u9759\u6001\u7f51\u7ad9\u4e86\u3002"),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1-223df5"},(0,r.kt)("a",{parentName:"li",href:"https://v2.vuepress.vuejs.org/zh/"},"\u9996\u9875 | VuePress"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1-223df5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2-223df5"},(0,r.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"GitHub Pages | Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live."),(0,r.kt)("a",{parentName:"li",href:"#fnref-2-223df5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3-223df5"},(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/learn-github-actions"},"Learn GitHub Actions - GitHub Docs"),(0,r.kt)("a",{parentName:"li",href:"#fnref-3-223df5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4-223df5"},(0,r.kt)("a",{parentName:"li",href:"https://www.redhat.com/zh/topics/devops/what-is-ci-cd"},"\u4ec0\u4e48\u662f CI/CD\uff1f\u4e00\u6587\u5e26\u4f60\u7406\u89e3 CI \u6301\u7eed\u96c6\u6210\u548c CD \u6301\u7eed\u4ea4\u4ed8/\u90e8\u7f72 - \u7ea2\u5e3d"),(0,r.kt)("a",{parentName:"li",href:"#fnref-4-223df5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5-223df5"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JamesIves/github-pages-deploy-action"},"JamesIves/github-pages-deploy-action: Automatically deploy your project to GitHub Pages using GitHub Actions. This action can be configured to push your production-ready code into any branch you'd like."),(0,r.kt)("a",{parentName:"li",href:"#fnref-5-223df5",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},8024:function(e,t,n){t.Z=n.p+"assets/images/image-20210824225724791-d9a5076a4c7e7d30acd7b66923cfafd4.png"},13283:function(e,t,n){t.Z=n.p+"assets/images/image-20210824230246146-7eacbfb52f2e810ef9697fb110c2960a.png"}}]);