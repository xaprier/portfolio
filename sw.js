if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),f={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-1ab968a5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BW4bWoqX.css",revision:null},{url:"assets/index-Ct92TzXh.js",revision:null},{url:"index.html",revision:"16a31a91f79f02103a731f51c2720ce7"},{url:"registerSW.js",revision:"5f081f2da882f5e44f5272984db4d416"},{url:"logo.png",revision:"1775867b9de0206eaaf3bee90fc842d3"},{url:"manifest.webmanifest",revision:"3b8637713ec63be90a3c04960e412aac"}],{}),e.cleanupOutdatedCaches()}));
