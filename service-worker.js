if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let n={};const d=e=>s(e,a),b={module:{uri:a},exports:n,require:d};i[a]=Promise.all(c.map((e=>b[e]||d(e)))).then((e=>(r(...e),n)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/11/08/hello-world/index.html",revision:"dfe9f5e607b584e567f83ef15a2d0c05"},{url:"archives/2023/11/index.html",revision:"ff930d4868661829617bc61ef17744b8"},{url:"archives/2023/index.html",revision:"c6573dc1825b2335bd7b5c5573e9b7fc"},{url:"archives/index.html",revision:"0551d4f071b0e82a9e5c685b2cabb160"},{url:"css/images/banner.jpg",revision:"0394d7ba5b310b5037d2a139bef63fa4"},{url:"css/index.css",revision:"32fe7cdc748f19310b2296049fac724b"},{url:"css/style.css",revision:"bb2872d0bdd8c37e982c4eb2112451c8"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fancybox/jquery.fancybox.min.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"fancybox/jquery.fancybox.min.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/moke_avatar.jpg",revision:"9b8021568b273c5363e6675732939828"},{url:"img/moke_favicon.jpg",revision:"ebc1608472b60438ceaa18f25e3cded6"},{url:"index.html",revision:"a24155d07679d948c3aeaebc449e48ab"},{url:"js/jquery-3.6.4.min.js",revision:"641dd14370106e992d352166f5a07e99"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/script.js",revision:"539104aee8c85909dca6e2be6817dcd7"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"}],{})}));
//# sourceMappingURL=service-worker.js.map
