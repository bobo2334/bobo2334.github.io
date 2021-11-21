(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.4.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.4.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.4.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.4.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _ extends class{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(_.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:i||t})),t&&r){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==_.copyRedirectedCacheableResponsesPlugin&&(a===_.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(_.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}_.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},_.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class v{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new _({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"5b787bbcc8ce2b409f772d5d8692fd8e","url":"404.html"},{"revision":"798140b81e7468f53b7a5decc572b929","url":"assets/css/styles.4698d912.css"},{"revision":"d027387cf35a67a38b894df57e716643","url":"assets/js/0716df97.94f36e7e.js"},{"revision":"6d136d615a8ae919d744899ab1af87f6","url":"assets/js/17896441.52b5864d.js"},{"revision":"d27433d2b7209581a67d54765f3c8d2b","url":"assets/js/1a4e3797.381aa469.js"},{"revision":"100683bb3655ddf78bd2371667eed1fa","url":"assets/js/1ae8a2af.519664cb.js"},{"revision":"7ec2a8c4cf253324b3f90ee69bd493ff","url":"assets/js/1be78505.d6013749.js"},{"revision":"5774cd1f0432503ed1ffbd636d23c5da","url":"assets/js/23374ca6.048c8904.js"},{"revision":"40c117968005fb2fa91cb2a3ff100684","url":"assets/js/27967709.e689f0b2.js"},{"revision":"cf74d057f5ee69b6496424b7787b7243","url":"assets/js/2a91a627.62024bbd.js"},{"revision":"b76fb296d7c93a57db3141d9c1a2632b","url":"assets/js/2b0fb738.436885c2.js"},{"revision":"a2e582a88bb4273ec15e563882087fdc","url":"assets/js/3545.fd267701.js"},{"revision":"0a63179327c65f9989406a6e799ae0a4","url":"assets/js/3829.978b2533.js"},{"revision":"efa270bcb451f04f98f6cd6f74b4eb93","url":"assets/js/387ca7fb.63c6e067.js"},{"revision":"bd3bef2c5968cd8cc1171763e596a7e9","url":"assets/js/41e5aa94.748a4d7d.js"},{"revision":"1e432e1938ab1df8ade8cadd63099de6","url":"assets/js/43c1da57.a182d36e.js"},{"revision":"49d737625bded0a085f4b755e6d4ed0f","url":"assets/js/4ecc16b9.57718b04.js"},{"revision":"51a91e1267829941ef81efa1a56214f7","url":"assets/js/5131.4591e5b8.js"},{"revision":"6f37a27e3bd7c4a80d7de27930fedba0","url":"assets/js/5266d329.3b19bb42.js"},{"revision":"2f29b43da03890059c9792c1a3a0b8ad","url":"assets/js/5525.65ce248a.js"},{"revision":"ce5bf9f3bf967b3fab18b237e14dc244","url":"assets/js/5a138f85.d1150c70.js"},{"revision":"43c481bdd3c47abe76d5bc7076519776","url":"assets/js/6167.e31890cb.js"},{"revision":"3f854361d38adbfc7d9e37fb6ddbb386","url":"assets/js/6444.94cbd67f.js"},{"revision":"4caea17557f4af6c9d9c78c20660c386","url":"assets/js/814f3328.516a916c.js"},{"revision":"3549eb79ebbc56c962600237520cf8ab","url":"assets/js/8443.5d5542b6.js"},{"revision":"c818d0608e16faa76b6c0c920556ca17","url":"assets/js/8624.df1c81b5.js"},{"revision":"91ef5775ccd7b6c45a42005882da0b94","url":"assets/js/8bd3bfbb.bd38807a.js"},{"revision":"c31f62513a5c5c0822fb397c947e7a84","url":"assets/js/923.89dd1a7f.js"},{"revision":"10b81892980abcc0ad61f81ef3a417db","url":"assets/js/935f2afb.63b62413.js"},{"revision":"b8ccce89adbb82dc0a8689c81958d8de","url":"assets/js/98baea5b.f8734839.js"},{"revision":"71d36df1a86b85e1c56442face309c0a","url":"assets/js/9c2e1a36.ec635d89.js"},{"revision":"fbdcbd99f8b985887c2ede792c4b7562","url":"assets/js/9e4087bc.db53a367.js"},{"revision":"cf4a02d4f640d50fa36c18b91a03e20a","url":"assets/js/9e806fce.92db1ac0.js"},{"revision":"6a0508047f16d95eb60074a4f68ea2ab","url":"assets/js/9ebb2784.51a4981b.js"},{"revision":"6e20b3ad55b3826909c6f8538659dcf4","url":"assets/js/a66a5fc7.06e3b3dc.js"},{"revision":"8109773ee40c9a99cf218d975bfb3dab","url":"assets/js/a6aa9e1f.18c4ad4d.js"},{"revision":"6f4aa591f46cc7350b64ff8c25e467fe","url":"assets/js/ab304fd8.3f3f7583.js"},{"revision":"aeca5580b44fdab34c7fe948b2f9117d","url":"assets/js/b2b675dd.0b0f3e7a.js"},{"revision":"72c4dc70465f75f0ac81ade258e085cd","url":"assets/js/b2f554cd.251a9823.js"},{"revision":"1dce15ffa6a2b4f3f62ddcb15d9ee9ff","url":"assets/js/b30f6bf2.b5212290.js"},{"revision":"9da6175ba48983d04f92751f4f34f0d9","url":"assets/js/b4900b38.7f228b14.js"},{"revision":"bf0b7c85936ad2fa1fd12ddc2e65c391","url":"assets/js/b6a81d80.f6534097.js"},{"revision":"c76a9c9bb12989a23f4dddff8621d1ba","url":"assets/js/c06aca79.0c48871f.js"},{"revision":"a27dc6501a92afc5cd6c44e0a2ab95e7","url":"assets/js/ca8cdcc1.5c4570d0.js"},{"revision":"a1af6a7d5700adfa9708550714ce2a3f","url":"assets/js/cb8f95e2.e36ee6f4.js"},{"revision":"aeae004ed489151a55a7625ad755a221","url":"assets/js/ccc49370.c65d8cde.js"},{"revision":"684de325ce73477881684c3b54acabb9","url":"assets/js/d5072a11.8631dd26.js"},{"revision":"c900aa00f2b7f5899558867a5303e783","url":"assets/js/e5762f21.dabb8f33.js"},{"revision":"ce514c23b4775c3c0c81aa20d4d22883","url":"assets/js/eb50ce5c.0baba3c7.js"},{"revision":"d497fe1bbec4ba22290b62b7dd9e430a","url":"assets/js/ebd84c8f.d680d777.js"},{"revision":"b734f06cf3556bdf02e74f20166c6037","url":"assets/js/ec9c7c6f.f98351f4.js"},{"revision":"ff7867220a0d423706181ac0b43fd17e","url":"assets/js/f6b7a6c7.a705d882.js"},{"revision":"f5262b3f688a774b363aa3a8f764bf74","url":"assets/js/fe985717.f1222fca.js"},{"revision":"5a64088e0b6615600ad5d517d61b4bf6","url":"assets/js/main.338ced93.js"},{"revision":"ac13d5f7d1be50478e3311c31ac7f991","url":"assets/js/runtime~main.e7e2a03a.js"},{"revision":"86c1efd911008c4fb93e685e0f09262f","url":"blog/archive/index.html"},{"revision":"c09dfb843c7cab59ee252d5de788ace8","url":"blog/build-a-decent-terminal-with-windows-terminal-and-oh-my-posh/index.html"},{"revision":"a19fc39573d4d875a3d26e055df3202e","url":"blog/customize-wechat-mini-program-tabbar-with-vant-weapp/index.html"},{"revision":"30c11cd56c70462a25518c23aacbc9c5","url":"blog/deploy-vuepress-project-to-github-pages-with-github-actions/index.html"},{"revision":"4023e990e13f53b35430ff5a225a0237","url":"blog/enable-docker-remote-api-with-tls-protection-via-container/index.html"},{"revision":"f361c3eca1656819d1459ecb9de9123c","url":"blog/enable-docker-remote-api-with-tls-protection/index.html"},{"revision":"2879a438c44dc4399cabd8d98bc3bc50","url":"blog/index.html"},{"revision":"06e3937e1f32f2fde06ff2684eb0e501","url":"blog/making-dynamic-spray-paint-for-left-4-dead-2/index.html"},{"revision":"cd2d4e79f6ab13bb7ea634ac61048307","url":"blog/solve-the-problem-of-tomcat-log-output-messy-code-in-intellij-idea/index.html"},{"revision":"5eafc7ebe3c2473f57f0af93b7f05ff9","url":"blog/ssh-certificate-authentication/index.html"},{"revision":"da96294fd7cd96ec216266d09fe38131","url":"bookmarks/macos-software-list/index.html"},{"revision":"60acef58bafa36075937f20417edd8e7","url":"bookmarks/movies-and-series/index.html"},{"revision":"5baa7b766edffc5e3f0fab85cdae80ff","url":"bookmarks/useful-websites/index.html"},{"revision":"7b7c1885e83a37c5985eb1c5193c6626","url":"bookmarks/windows-software-list/index.html"},{"revision":"be6a923905663001be3bc31cc868bb5e","url":"drafts/site-generator-requirements/index.html"},{"revision":"87d694f5f242a83bada94ea48279d5c7","url":"drafts/todo/index.html"},{"revision":"cfa4773ec4c87f855ba6c38b67d5ffe5","url":"drafts/中英文间插入空格/index.html"},{"revision":"f40845a91168420a252af1c0edd98ef3","url":"drafts/相对路径修复/index.html"},{"revision":"7e039abd314b24bf4c3545ed9cfc1002","url":"index.html"},{"revision":"bbbeef0d1257b460c66a35f1cb173dd3","url":"manifest.json"},{"revision":"34df4cc5a74424c5df51cf7e46c086e8","url":"notes/java/java/index.html"},{"revision":"e063abab4ee9632d4e29e9a44ef2f0df","url":"notes/javascript/typescript/index.html"},{"revision":"cacc48d03f617c82f3bda5f8797aed4e","url":"notes/javascript/vue.js/index.html"},{"revision":"52b4f316b904d58d20111c2e17d5fa0b","url":"notes/javascript/weapp/index.html"},{"revision":"268f94ec2bcf154c02d8f0d0b2b7acba","url":"notes/message-queuing/rocketmq/index.html"},{"revision":"fcd74837d27adf89a67a2a9fe5dd455f","url":"notes/utilities/editorconfig/index.html"},{"revision":"e2db4f4514f340990fcfb6c00c515763","url":"search-index.json"},{"revision":"4ea87cec4d6796037a134abbf23150be","url":"search/index.html"},{"revision":"2ef7d74b03161358d5634e1f95ca8595","url":"tests/markdown-extension/index.html"},{"revision":"2f447bc681d22abe39995962ef2343e1","url":"android-chrome-192x192.png"},{"revision":"b0bb505a6390872bfb9b293d89fa55f7","url":"android-chrome-512x512.png"},{"revision":"8b0555dcebd967e033a3b5bc7ef52fec","url":"apple-touch-icon.png"},{"revision":"7d93c0eaf2d733021387545c184b9064","url":"assets/images/image-1-4c4cf99100f55fa8e26e0e8485b506de.png"},{"revision":"25931f1e3a9cd747c52b6c3503201dd3","url":"assets/images/image-1024x475-778a1eb93aebfc2d64eca83b87a29dbf.png"},{"revision":"ea5a3d22ed7f57e5eb7ac4d3e8557657","url":"assets/images/image-2-ac642cf664ccaca6b8e3983e4fd051d5.png"},{"revision":"fa366b1815bae508eeed4dcbf2ebbaa0","url":"assets/images/image-20200706020124070-9d82ad322fcf574bbc8dd18a3eb990b8.png"},{"revision":"854dabf041b8e97d99e13e650c87e68b","url":"assets/images/image-20210528143719017-2ff4e58e562a48f210e81ca2e37a07d5.png"},{"revision":"7ade81d93aef9abd51ba8b7706b49acb","url":"assets/images/image-20210528144150033-d8885331a11319ca936df28b34e0cd41.png"},{"revision":"a73d775740226197abefb00a67a6f048","url":"assets/images/image-20210808203938656-16284263806451-7f89deb7e411d26cee0f7df6201228d8.png"},{"revision":"dd1deac78b17d3ea54815d78834ab98c","url":"assets/images/image-20210808210014135-b1531c7018ce5af37f983e4f3d4116fe.png"},{"revision":"c25af4b8e55ed5383a33d0dbca144c48","url":"assets/images/image-20210816222131111-16291236956091-ba65ff370246e82306b56935a27bed2c.png"},{"revision":"f7556e3e1a4278f84af0a935480e9d82","url":"assets/images/image-20210816222434122-16291238760702-44ce2afe0e7f335aa9bb115c4c7cff40.png"},{"revision":"6fdce3b90b1f6575b9827342a185e805","url":"assets/images/image-20210816222600935-16291239626163-553b178f7586fc8a90c65e3eedb03eed.png"},{"revision":"09ab36e4e84c7fcf6773019850f102f5","url":"assets/images/image-20210816222733033-16291240547284-a48b6576bf253c03858fa23a69261598.png"},{"revision":"55376a3fc3a7f3f296c60da6a2bf39a4","url":"assets/images/image-20210816230720070-15944bde6bd9af87fb39e289a31152b7.png"},{"revision":"665c79e6e4b81646091c744894db46e0","url":"assets/images/image-20210824225724791-d9a5076a4c7e7d30acd7b66923cfafd4.png"},{"revision":"08e1e9556f2fa2dd9b4b5e5d0d6d0c72","url":"assets/images/image-20210824230246146-7eacbfb52f2e810ef9697fb110c2960a.png"},{"revision":"24d5a8e70638656b65e70f3fb450f732","url":"assets/images/image-20211028110720639-1db0de44b0c49dfbcc64d34e70a14ba9.png"},{"revision":"ec0ce250f47db50cceef59ba9af6449d","url":"assets/images/image-20211028110750021-136438e761c60eca5e8372f9aed8748d.png"},{"revision":"1425d18e0dbacd8282da4922206a755f","url":"assets/images/image-20211028152547834-8519f2137cc2522b020ad2890fbc50f6.png"},{"revision":"5cf6b20a5d39eda1c979e7637b4052d7","url":"assets/images/image-20211028154406433-ac637296c735930be37b19ecf0c3936d.png"},{"revision":"f1dd4e7daab81dd8eb2bbe921f584fd4","url":"assets/images/image-20211113165801911-203bdd536d6cd026e972b4b469be6744.png"},{"revision":"71b178b2fff3aee6e1f1a3e763e20e10","url":"assets/images/image-20211113171839022-2e6e7fb7fe66d4a82c734e8e3ecc56ea.png"},{"revision":"88d04a61fb4c4b521fcdb5c377c08ffe","url":"assets/images/image-20211114013104263-68470b89f586bbf78cb4df4585b4cbc6.png"},{"revision":"d2cdf31529475d605e49a3db9b51f7d2","url":"assets/images/image-20211115002653156-4bb261339460423498a276b93ae94eb9.png"},{"revision":"44fa04e2a914c4fed6043f3ba6b527b0","url":"assets/images/image-20211115003035328-3332ec2cd13e667a9ca04be7b51ff3ac.png"},{"revision":"8a25751658a93543e2d7472e964bf8af","url":"assets/images/image-20211115003527762-850d67719e467f1ab50351b376a590af.png"},{"revision":"62efe5b0f72a098996fa6a6263ebad38","url":"assets/images/image-20211115004040238-adca1280d847ba1515fd641d779ccfc9.png"},{"revision":"349d0e6c16c207110d61866a567653d5","url":"assets/images/image-20211115175020615-a21c10a143774739abbe09f67f4a6c40.png"},{"revision":"08182fe10857771afa80287aec752dd9","url":"assets/images/image-3-1024x491-8febe7982adc31318ef988652e62d08a.png"},{"revision":"113f96f34ac7c537e3d12c6a94e54964","url":"assets/images/image-4-1024x907-72aac836eb47bb63e3d3751b0a05079a.png"},{"revision":"e30f723aa367273a39f42b9f0146393a","url":"assets/images/image-5-2a1b9ebb370903e61d8a3845837ba07b.png"},{"revision":"b935305d5c0998fd6a1318a4d918a3ff","url":"assets/images/image-6-668x1024-b2e7c63ae44c86975ab555f88e15ab5d.png"},{"revision":"04cb2f63edac288cd60a7112ba4b7509","url":"assets/images/import-to-game-bfc8213ec5528a2180dc747957a0e3e7.png"},{"revision":"d4ef940ae7d4a9dca6cc5142e6271434","url":"assets/images/kana-a4807e5a830c4c0c92aed5fd06019c30.gif"},{"revision":"79cc74c7f78a3212f08d78c7125acc7a","url":"assets/images/sA8iXJPC2j-f28c467468a57825f9272ddd98063021.png"},{"revision":"ba8ced216afc551a22238c1dde5ef6b9","url":"assets/images/SI7S9fkaKG-1024x523-e44b17f15112629b60b8ab1345d51598.png"},{"revision":"312d03d0287ca00bfe218c6c5165b7c9","url":"assets/images/vjPXgPO7AB-1024x523-83e56a02d8071a76974865cb56eaf68e.png"},{"revision":"9c888c4e3941591a902a23a6771be600","url":"assets/images/vMcBOyiREC-1024x523-be89bd67db5756110207e9baa7b0bfb1.png"},{"revision":"aeb40804b3b58c752e4eb175ca02a2db","url":"favicon-16x16.png"},{"revision":"dca5e7303ad869433354c0c5dc13ba61","url":"favicon-32x32.png"},{"revision":"108ca13c00b4415e532ef5ca66c80442","url":"favicon.ico"},{"revision":"48e7420f94bed8a07ad44ff975ede5d7","url":"mstile-150x150.png"},{"revision":"c9cb351aaba3b9cc4b61d8fbf3cb47fc","url":"safari-pinned-tab.svg"}],s=new v({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=[],s=new URL(e,self.location.href);return s.origin!==self.location.origin||(s.search="",s.hash="",t.push(s.href),s.pathname.endsWith("/")?t.push(`${s.href}index.html`):t.push(`${s.href}/index.html`)),t}(a);for(let i=0;i<n.length;i+=1){const r=n[i],c=s.getCacheKeyForURL(r);if(c){const s=caches.match(c);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:r,possibleURLs:n,cacheKey:c,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});"SKIP_WAITING"===(t.data&&t.data.type)&&self.skipWaiting()}))})()})()})();