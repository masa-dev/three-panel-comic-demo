(function(e){function t(t){for(var o,r,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2b926439":"aadca986","chunk-2d0af7b0":"c49e061e","chunk-2d0b2b58":"6eb7f1ca","chunk-585ce6e7":"1af783a2","chunk-715fbb49":"48e0cb69","chunk-2d0bce45":"181475dd","chunk-2d0ccbaa":"a6b6ad0e","chunk-76ebecf2":"9e2bb695"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2b926439":1,"chunk-585ce6e7":1,"chunk-715fbb49":1,"chunk-76ebecf2":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-2b926439":"3a1f0193","chunk-2d0af7b0":"31d6cfe0","chunk-2d0b2b58":"31d6cfe0","chunk-585ce6e7":"ae2a6829","chunk-715fbb49":"86502a91","chunk-2d0bce45":"31d6cfe0","chunk-2d0ccbaa":"31d6cfe0","chunk-76ebecf2":"90098b96"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],h.parentNode.removeChild(h),n(i)},h.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var h=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/three-panel-comic-demo/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f7":function(e,t,n){},"17f2":function(e,t,n){"use strict";n("9a00")},"53d7":function(e,t,n){"use strict";n("01f7")},5452:function(e,t,n){"use strict";n("af35")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main"),n("Footer")],1)},a=[],i=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"header-div"},[n("div",{staticClass:"title-bar"},[n("router-link",{attrs:{to:"/"}},[n("h1",[e._v("3コマ漫画アプリ")])])],1),n("div",{staticClass:"user-bar"},[e.isLogin?n("div",{staticClass:"user-link"},[n("button",{staticClass:"header-user-photo",on:{click:e.openModal}},[n("img",{attrs:{src:e.photoURL,alt:""}})]),n("button",{staticClass:"header-user-name",on:{click:e.openModal}},[e._v(" "+e._s(e.userName)+" ")]),e.modalSeen?n("div",{staticClass:"modal-portal"},[n("div",{staticClass:"portal-backdrop",on:{click:e.closeModal}}),n("div",{staticClass:"portal-popover",style:e.modalPosition,on:{click:e.closeModal}},[n("router-link",{attrs:{to:"/"}},[e._v("トップページ")]),n("router-link",{attrs:{to:"/user"}},[e._v("ユーザー設定")]),n("router-link",{attrs:{to:"/group"}},[e._v("グループ設定")]),n("router-link",{attrs:{to:"/about"}},[e._v("このサイトについて")])],1)]):e._e()]):e._e(),e.isLogin?e._e():n("div",{staticClass:"login-link"},[n("router-link",{attrs:{to:"/login"}},[n("button",[e._v("ログイン")])])],1)])])])}),c=[],u=n("fe4b"),s=n("4f60"),l=(n("256a"),{data:function(){return{isLogin:!1,userName:"",modalSeen:!1,modalPosition:{top:"0px",right:"0px"}}},methods:{openModal:function(){this.modalSeen=!0,this.changeModalStyle()},closeModal:function(){this.modalSeen=!1},changeModalStyle:function(){if(this.modalSeen){var e=document.getElementsByClassName("user-link")[0].getBoundingClientRect();this.modalPosition.top=e.bottom+5+"px",this.modalPosition.right=window.innerWidth-e.right+"px"}}},computed:{photoURL:function(){return this.$store.state.user.photoURL}},mounted:function(){var e=this;window.addEventListener("resize",this.changeModalStyle),this.changeModalStyle(),s["a"].initializeApp(u["a"]),s["a"].auth().onAuthStateChanged((function(t){if(t&&0!==t.providerData.length)return e.isLogin=!0,void(e.userName=t.displayName);e.isLogin=!1}))},beforeDestroy:function(){window.addEventListener("resize",this.changeModalStyle)},watch:{$route:function(){this.modalSeen=!1}}}),d=l,h=(n("5452"),n("2877")),f=Object(h["a"])(d,i,c,!1,null,null,null),p=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("router-view")],1)},b=[],g=(n("17f2"),{}),v=Object(h["a"])(g,m,b,!1,null,null,null),k=v.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"footer-container"},[n("div",{staticClass:"footer-col"},[n("h4",[e._v("使用ライブラリ")]),n("ul",[n("li",[n("a",{attrs:{href:"https://naver.github.io/egjs-flicking/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flicking")])]),n("li",[n("a",{attrs:{href:"https://github.com/naver/egjs-flicking-plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flicking Plugins")])])])]),n("div",{staticClass:"footer-col"},[n("h4",[e._v("使用フォント")]),n("ul",[n("li",[n("a",{attrs:{href:"https://fonts.google.com/specimen/Kosugi+Maru",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kosugi Maru")])])])]),n("div",{staticClass:"footer-col"},[n("h4",[e._v("研究室サイトリンク")]),n("ul",[n("li",[n("a",{attrs:{href:"https://buturi.heteml.net/student/2021/"}},[e._v("2021研究室")])]),n("li",[n("a",{attrs:{href:"https://buturi.heteml.net/student/2021/toda/"}},[e._v("戸田の卒研サイト")])])])])]),n("p",[e._v("2021年 卒業研究進捗")])])}],w=(n("53d7"),{}),C=Object(h["a"])(w,y,_,!1,null,null,null),S=C.exports;s["a"].initializeApp(u["a"]);var L={components:{Header:p,Main:k,Footer:S},mounted:function(){var e=this;s["a"].auth().onAuthStateChanged((function(t){t?(e.$store.commit("setAuth",!0),e.$store.commit("updatePhotoURL",t.photoURL),e.$store.commit("updateUserName",t.displayName)):(e.$store.commit("setAuth",!1),e.$store.commit("updatePhotoURL"),e.$store.commit("updateUserName"),"Login"!==e.$router.currentRoute.name&&e.$router.push({path:"login"}))}))},watch:{$route:function(e){var t=this;this.$store.state.auth.isAuth||e&&"Login"!==e.name&&s["a"].auth().onAuthStateChanged((function(e){e||t.$router.push({path:"/login"})}))}}},j=L,A=(n("5c0b"),Object(h["a"])(j,r,a,!1,null,null,null)),P=A.exports,M=n("9483");Object(M["a"])("".concat("/three-panel-comic-demo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7"),n("3ca3"),n("ddb0");var N=n("8c4f");o["a"].use(N["a"]);var $=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d0af7b0").then(n.bind(null,"0f04"))},children:[{path:"",name:"ComicHome",component:function(){return n.e("chunk-76ebecf2").then(n.bind(null,"3a0c"))}}]},{path:"/comics",component:function(){return n.e("chunk-2d0af7b0").then(n.bind(null,"0f04"))},children:[{path:"",name:"ComicHome",component:function(){return n.e("chunk-76ebecf2").then(n.bind(null,"3a0c"))}},{path:":id",name:"ComicContent",component:function(){return Promise.all([n.e("chunk-2d0b2b58"),n.e("chunk-585ce6e7")]).then(n.bind(null,"a2b2"))}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-2b926439").then(n.bind(null,"a55b"))}},{path:"/about",name:"About Site",component:function(){return n.e("chunk-2d0bce45").then(n.bind(null,"2a55"))}},{path:"/user",name:"User",component:function(){return Promise.all([n.e("chunk-2d0b2b58"),n.e("chunk-715fbb49")]).then(n.bind(null,"1511"))}},{path:"/group",name:"Group",component:function(){return n.e("chunk-2d0ccbaa").then(n.bind(null,"4ebe"))}}],E=new N["a"]({routes:$}),O=E,x=n("2f62");o["a"].use(x["a"]),s["a"].initializeApp(u["a"]);var U=new x["a"].Store({state:{auth:{isAuth:null},user:{userName:null,photoURL:n("5869")}},mutations:{setAuth:function(e,t){e.auth.isAuth=t},updatePhotoURL:function(e,t){e.user.photoURL=t||null},updateUserName:function(e,t){e.user.userName=t||null}},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:O,store:U,render:function(e){return e(P)}}).$mount("#app")},5869:function(e,t,n){e.exports=n.p+"img/no_user.0bbdbbd1.png"},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9a00":function(e,t,n){},"9c0c":function(e,t,n){},af35:function(e,t,n){},fe4b:function(e,t,n){"use strict";var o={apiKey:"AIzaSyBpGctSAbaR9u9H_lfCaGuuDy--v0OKJI8",authDomain:"my-test-project-c235b.firebaseapp.com",databaseURL:"https://my-test-project-c235b-default-rtdb.firebaseio.com",projectId:"my-test-project-c235b",storageBucket:"my-test-project-c235b.appspot.com",messagingSenderId:"1093453348161",appId:"1:1093453348161:web:9eafa826bffab090f675c0",measurementId:"G-PW6XR4M65Q"};t["a"]=o}});
//# sourceMappingURL=app.7f9ae1c6.js.map