if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const n=e=>r(e,s),b={module:{uri:s},exports:d,require:n};i[s]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(c(...e),d)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e02c3bff847efff2cae8f8d9daf767c3"},{url:"archives/2023/11/index.html",revision:"c9e3760532a6bdcefb4db06eabe5ee08"},{url:"archives/2023/index.html",revision:"4d3b77e18bc72d7376458c107f9443c1"},{url:"archives/index.html",revision:"830c00d2fd61600530d681d95569c7b2"},{url:"categories/index.html",revision:"dabdc0989ab157220531a1043f9e517f"},{url:"categories/参考文档/index.html",revision:"eb41e0339e8b4c434c8ce570a73b8cc6"},{url:"categories/闲聊/index.html",revision:"8371900799369ddfe13c7238983c36c1"},{url:"css/images/banner.jpg",revision:"0394d7ba5b310b5037d2a139bef63fa4"},{url:"css/index.css",revision:"c9eaf7b38c22ab6c48cae5290f56330a"},{url:"css/style.css",revision:"360109d1df29b180987eec9ad55a8114"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"fancybox/jquery.fancybox.min.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"fancybox/jquery.fancybox.min.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"img/post/first_blog.png",revision:"2d48f0879b49871d4c882236b8aae709"},{url:"img/post/Typora.jpg",revision:"acb6accccfbde480e643ea9dc12a9a63"},{url:"img/web/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/web/404.png",revision:"2bea4f51d8201638e993f64cb8202aa3"},{url:"img/web/alipay.jpg",revision:"e7dfbb8fc55fe66ae3f287635c64470d"},{url:"img/web/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/web/moke_avatar.jpg",revision:"9b8021568b273c5363e6675732939828"},{url:"img/web/moke_favicon.jpg",revision:"ebc1608472b60438ceaa18f25e3cded6"},{url:"img/web/wechat.png",revision:"5334c40a9d5ac746390c045bd43e5e5f"},{url:"index.html",revision:"6b18ee20dfb315fcb03d8340070cab12"},{url:"js/jquery-3.6.4.min.js",revision:"641dd14370106e992d352166f5a07e99"},{url:"js/main.js",revision:"83ea4e2ab7b0c8206a90aa557cd491c3"},{url:"js/script.js",revision:"539104aee8c85909dca6e2be6817dcd7"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"0ba1e400c3aa5bd7dbc0cf22f7d00721"},{url:"tags/index.html",revision:"93d0361f4fb765aece180147315b6ddc"},{url:"tags/文档/index.html",revision:"a5bba52e565f345abc6f29fdd346b293"},{url:"tags/生活/index.html",revision:"3784a52d9f646697a4d86ee6f4c5b23d"},{url:"参考文档/Markdown语法参考/index.html",revision:"99d1ec013e0710571a990f7385268d10"},{url:"闲聊/hello-world/index.html",revision:"f16a4156d8e626f3e1269a4ba2256ded"}],{})}));
//# sourceMappingURL=service-worker.js.map
