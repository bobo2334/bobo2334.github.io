if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return i[s]||(e=new Promise((async e=>{if("document"in self){const i=document.createElement("script");i.src=s,document.head.appendChild(i),i.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!i[s])throw new Error(`Module ${s} didn’t register its module`);return i[s]}))},e=(e,i)=>{Promise.all(e.map(s)).then((s=>i(1===s.length?s[0]:s)))},i={require:Promise.resolve(e)};self.define=(e,l,r)=>{i[e]||(i[e]=Promise.resolve().then((()=>{let i={};const t={uri:location.origin+e.slice(1)};return Promise.all(l.map((e=>{switch(e){case"exports":return i;case"module":return t;default:return s(e)}}))).then((s=>{const e=r(...s);return i.default||(i.default=e),i}))})))}}define("./service-worker.js",["./workbox-2fdebd44"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"ad87231d4b302dbdeab6c35abf6dafeb"},{url:"android-chrome-192x192.png",revision:"2f447bc681d22abe39995962ef2343e1"},{url:"android-chrome-512x512.png",revision:"b0bb505a6390872bfb9b293d89fa55f7"},{url:"apple-touch-icon.png",revision:"8b0555dcebd967e033a3b5bc7ef52fec"},{url:"articles/deploy-vuepress-project-to-github-pages-with-github-actions.html",revision:"0e4958e64685d46105d8daf9c354443a"},{url:"articles/index.html",revision:"67652d749ef35aad277fd704c1ab5668"},{url:"assets/404.14bc9b0c.js",revision:null},{url:"assets/404.html.7caa4353.js",revision:null},{url:"assets/404.html.c3886853.js",revision:null},{url:"assets/app.c5cba7ed.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/deploy-vuepress-project-to-github-pages-with-github-actions.html.6a41ab71.js",revision:null},{url:"assets/deploy-vuepress-project-to-github-pages-with-github-actions.html.fa02ac00.js",revision:null},{url:"assets/editorconfig.html.71289899.js",revision:null},{url:"assets/editorconfig.html.845a04bd.js",revision:null},{url:"assets/image-20210824225724791.e3e482cb.png",revision:null},{url:"assets/image-20210824230246146.ae98c08e.png",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.001472e4.js",revision:null},{url:"assets/index.html.033eb280.js",revision:null},{url:"assets/index.html.082a78f7.js",revision:null},{url:"assets/index.html.27413e45.js",revision:null},{url:"assets/index.html.28d434bb.js",revision:null},{url:"assets/index.html.44aecac3.js",revision:null},{url:"assets/index.html.46e4481c.js",revision:null},{url:"assets/index.html.71b42943.js",revision:null},{url:"assets/index.html.7db89d12.js",revision:null},{url:"assets/index.html.a9e887d2.js",revision:null},{url:"assets/Layout.5ca3561b.js",revision:null},{url:"assets/plantuml.html.549e30e1.js",revision:null},{url:"assets/plantuml.html.56c7e774.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.f85b56c0.css",revision:null},{url:"assets/todo.html.75c2be8f.js",revision:null},{url:"assets/todo.html.f7753ee4.js",revision:null},{url:"assets/typescript.html.0c1b6b43.js",revision:null},{url:"assets/typescript.html.ba1225c0.js",revision:null},{url:"assets/vue.js.html.50e2705c.js",revision:null},{url:"assets/vue.js.html.e38e3ce2.js",revision:null},{url:"favicon-16x16.png",revision:"aeb40804b3b58c752e4eb175ca02a2db"},{url:"favicon-32x32.png",revision:"dca5e7303ad869433354c0c5dc13ba61"},{url:"index.html",revision:"26902d9fa67a971efb91618054283a8b"},{url:"mstile-150x150.png",revision:"48e7420f94bed8a07ad44ff975ede5d7"},{url:"notes/index.html",revision:"376d6649f3702640cfa6aa35b833825a"},{url:"notes/javascript/typescript.html",revision:"c5334b2d5c0c7a8239ed85463cc79fff"},{url:"notes/javascript/vue.js.html",revision:"d143bf235b0525e9668a84b9ccf8c918"},{url:"notes/utilities/editorconfig.html",revision:"490cc9932661af8c828c650317784091"},{url:"readings/index.html",revision:"85b24c1c2c31c9b0a2f435ed5a698c15"},{url:"safari-pinned-tab.svg",revision:"c9cb351aaba3b9cc4b61d8fbf3cb47fc"},{url:"tests/index.html",revision:"66f5dc29a30ce1fba0f76bcc383ef5b0"},{url:"tests/plantuml.html",revision:"b303b4106ef983834206ba0a26ec544c"},{url:"tests/todo.html",revision:"e643eb406599fa2cd387e8e3fa39d765"}],{})}));
