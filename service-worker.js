if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>a(e,d),l={module:{uri:d},exports:s,require:n};i[d]=Promise.all(r.map((e=>l[e]||n(e)))).then((e=>(c(...e),s)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e33246998969b697a02eac7b14effeb0"},{url:"archives/2023/11/index.html",revision:"9a6c31ba5737fee916e7363cfedcdcf2"},{url:"archives/2023/index.html",revision:"7cff5113967cb02fcb8f215c3764141f"},{url:"archives/index.html",revision:"4e49098aea9b23215bb379101e446a81"},{url:"categories/index.html",revision:"9e5a996b67c6ca1af0859ebdeea383c0"},{url:"categories/参考文档/index.html",revision:"2e9bb200d3af3252bad44471f9839216"},{url:"categories/闲聊/index.html",revision:"ceb19666dd360a0ef90d1898e21d9d6f"},{url:"css/index.css",revision:"6fd7b9edc50000c2632719af73d014ce"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/post/first_blog.png",revision:"2d48f0879b49871d4c882236b8aae709"},{url:"img/post/Typora.jpg",revision:"acb6accccfbde480e643ea9dc12a9a63"},{url:"img/web/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/web/404.png",revision:"2bea4f51d8201638e993f64cb8202aa3"},{url:"img/web/alipay.jpg",revision:"e7dfbb8fc55fe66ae3f287635c64470d"},{url:"img/web/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/web/moke_avatar.jpg",revision:"9b8021568b273c5363e6675732939828"},{url:"img/web/moke_favicon.jpg",revision:"ebc1608472b60438ceaa18f25e3cded6"},{url:"img/web/wechat.png",revision:"5334c40a9d5ac746390c045bd43e5e5f"},{url:"index.html",revision:"1bb3425b3d2a394695439aa53ca23e18"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"fcc6a95da6f30160e074d767ec76468e"},{url:"tags/index.html",revision:"69e2e17ca4dd8b5560dc39bbbd8af979"},{url:"tags/文档/index.html",revision:"27638dce20e0f032296f3c996833f1b7"},{url:"tags/生活/index.html",revision:"f0d5e8bea5708971b052d3d0700d0dd9"},{url:"参考文档/Markdown语法参考/index.html",revision:"6f782c3ebe636f350ae0df258a30f9e8"},{url:"闲聊/hello-world/index.html",revision:"78468dc416fdec53ab0a36c40dd4baa6"}],{})}));
//# sourceMappingURL=service-worker.js.map
