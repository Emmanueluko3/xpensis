if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let c={};const r=e=>a(e,n),o={module:{uri:n},exports:c,require:r};s[n]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Xpensis.png",revision:"0f24c3c02776b36b2ee5297a2e9d1f75"},{url:"/_next/app-build-manifest.json",revision:"62219e15c316291ed160532811f65b98"},{url:"/_next/static/2hXZbt6ZaZbwiWBMotpjz/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/2hXZbt6ZaZbwiWBMotpjz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/131.cb782b3fbd3addd2.js",revision:"cb782b3fbd3addd2"},{url:"/_next/static/chunks/359-26d52669819e249c.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/3975359d.e492dc6a533525ab.js",revision:"e492dc6a533525ab"},{url:"/_next/static/chunks/430-040022c5a286f19a.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/459-ebbcdb875f82a47d.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/596-4493c47ace7561d5.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/736-5f68ab89ee4ed105.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/749-da02b1a1f2e14e33.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/887-72aa9c22feb27cae.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/app/auth/page-45ebdc52a643e1bf.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/app/bills/page-4249c098ac84a36f.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/app/goals/page-22f81fe879fd009e.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/app/layout-d6d2c21898e30898.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/app/page-0157216008b9fee7.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/app/profile/page-85ad113290f97ea1.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/dc112a36-3b53e071b07ef314.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/fd9d1056-00df726648d3953b.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/main-app-58135b9d7bcddd52.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/main-ec82d41cb8dda648.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-fbfed44fb6e0fa38.js",revision:"2hXZbt6ZaZbwiWBMotpjz"},{url:"/_next/static/css/056e89893d3ff0a4.css",revision:"056e89893d3ff0a4"},{url:"/_next/static/css/2aa199ae6265e4c0.css",revision:"2aa199ae6265e4c0"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/ProfilePics.1b983fe8.webp",revision:"b6cdf71a1e476f0328cdea6e4aa53253"},{url:"/_next/static/media/ProfilePics.f0a3c3b7.svg",revision:"ff4f57d4e56a75915b29b0499dd58a34"},{url:"/_next/static/media/Xpensis.379b8471.svg",revision:"0aff87e03f754ec4d96397fa5047e3be"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/goal.9234b8d3.jpg",revision:"ae882b37964e9a4ff1dda32e2b89434c"},{url:"/assets/images/CardOverlay.png",revision:"5edd1037d67a7d8e4ea88530c2b440c5"},{url:"/assets/images/CardOverlay.svg",revision:"8e9340e7ef998a5f54ef03b1d0cc7aa4"},{url:"/assets/images/Iphone12.webp",revision:"49f57f368622c6361a11dbca8d7d7512"},{url:"/assets/images/ProfilePics.svg",revision:"ff4f57d4e56a75915b29b0499dd58a34"},{url:"/assets/images/ProfilePics.webp",revision:"b6cdf71a1e476f0328cdea6e4aa53253"},{url:"/assets/images/Xpensis.svg",revision:"0aff87e03f754ec4d96397fa5047e3be"},{url:"/assets/images/Xpensis1.svg",revision:"bcebe90e918f0a4697419a7c837a2774"},{url:"/assets/images/goal.jpg",revision:"ae882b37964e9a4ff1dda32e2b89434c"},{url:"/assets/images/mee2.jpg",revision:"45c3464f49300a8fb06a3709c0e4f191"},{url:"/assets/images/notificationIcon.gif",revision:"620533c260ddf9edb33db307b319638c"},{url:"/assets/lotties/Error.json",revision:"383235ddaf95b3846c9be2d85548c220"},{url:"/assets/lotties/lottieNotification.json",revision:"97014b04622c0a5173fbe1de6eba19b3"},{url:"/assets/lotties/lottieSuccess.json",revision:"14a616d7193c55d692b68babae271929"},{url:"/assets/lotties/spinner.json",revision:"9eca84142d54adac3ab3ad276486f1ea"},{url:"/icon-192x192.png",revision:"7d8e5e5d1414ad985f16cae1fa2212fb"},{url:"/icon-256x256.png",revision:"39b9b6574c332f1655766f5171a43a6b"},{url:"/icon-384x384.png",revision:"d04ea28fa204d908cce6fc7424f5b578"},{url:"/icon-512x512.png",revision:"584401eb7d9fee974c5e09a91e3438af"},{url:"/manifest.json",revision:"1ae159bb8fbf7ebb0229af54496fd5bc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/xpensis.svg",revision:"e08e8cf4828a2cb6c0aed55ca6a1d6bb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
