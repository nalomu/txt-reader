if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const l=e=>s(e,t),c={module:{uri:t},exports:o,require:l};i[t]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-16df40c6.css",revision:null},{url:"assets/index-223319a2.js",revision:null},{url:"index.html",revision:"0e9bee1df993e09816e8067a801bfc4c"},{url:"registerSW.js",revision:"63e7a48da906636714a87625087cb59e"},{url:"logo.png",revision:"77084d8eae12b77036b2bac8b9a8e50f"},{url:"manifest.webmanifest",revision:"331b050f693b33fc27cd0cbd97cf8007"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
