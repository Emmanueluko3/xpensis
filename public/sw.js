if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>a(e,n),d={module:{uri:n},exports:t,require:r};s[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Xpensis.png",revision:"0f24c3c02776b36b2ee5297a2e9d1f75"},{url:"/_next/app-build-manifest.json",revision:"8515cda3b6202c842b5e58dec7df6e7c"},{url:"/_next/static/chunks/3975359d-5bb0d22e64b4e0ae.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/596-b73cd7b2648ddce9.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/942-d5050a134f0ee39a.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/99-5bdc86426e8a6ab0.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/app/bills/page-2bb0030efa0bf720.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/app/dashboard/page-8cdcc48281ec7d53.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/app/goals/page-b1c4480a487b91a2.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/app/layout-eb2b50a80614035f.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/app/page-f88e6cc4da6f9d80.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/app/profile/page-9cadce32dce3767a.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/fd9d1056-149d907368260f5a.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/main-app-58135b9d7bcddd52.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/main-dcaacbbda2e30ee8.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c5574c1fad4363d1.js",revision:"f7Gdc5hd4M0iclSdxrnG9"},{url:"/_next/static/css/2aa199ae6265e4c0.css",revision:"2aa199ae6265e4c0"},{url:"/_next/static/css/3839465e8718a432.css",revision:"3839465e8718a432"},{url:"/_next/static/f7Gdc5hd4M0iclSdxrnG9/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/f7Gdc5hd4M0iclSdxrnG9/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/2aaf0723e720e8b9-s.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca-s.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ProfilePics.f0a3c3b7.svg",revision:"ff4f57d4e56a75915b29b0499dd58a34"},{url:"/_next/static/media/Xpensis.379b8471.svg",revision:"0aff87e03f754ec4d96397fa5047e3be"},{url:"/_next/static/media/ae9ae6716d4f8bf8-s.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a-s.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb-s.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7-s.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127-s.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/assets/images/CardOverlay.png",revision:"5edd1037d67a7d8e4ea88530c2b440c5"},{url:"/assets/images/CardOverlay.svg",revision:"8e9340e7ef998a5f54ef03b1d0cc7aa4"},{url:"/assets/images/ProfilePics.svg",revision:"ff4f57d4e56a75915b29b0499dd58a34"},{url:"/assets/images/Xpensis.svg",revision:"0aff87e03f754ec4d96397fa5047e3be"},{url:"/assets/images/Xpensis1.svg",revision:"bcebe90e918f0a4697419a7c837a2774"},{url:"/icon-192x192.png",revision:"7d8e5e5d1414ad985f16cae1fa2212fb"},{url:"/icon-256x256.png",revision:"39b9b6574c332f1655766f5171a43a6b"},{url:"/icon-384x384.png",revision:"d04ea28fa204d908cce6fc7424f5b578"},{url:"/icon-512x512.png",revision:"584401eb7d9fee974c5e09a91e3438af"},{url:"/manifest.json",revision:"1ae159bb8fbf7ebb0229af54496fd5bc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/xpensis.svg",revision:"e08e8cf4828a2cb6c0aed55ca6a1d6bb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
