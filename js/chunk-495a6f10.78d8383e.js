(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-495a6f10"],{"1da1":function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));e("d3b7");function n(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"3a0c":function(t,r,e){"use strict";e.r(r);var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"comic-list"},[e("h2",[t._v("漫画一覧")]),e("ul",{staticClass:"comic-link-list"},t._l(t.links,(function(r,n){return e("li",{key:n},[e("router-link",{attrs:{to:r}},[e("div",{staticClass:"comic-link"},[t._v(t._s(t.titles[n]))])])],1)})),0)])},o=[],i=e("1da1"),a=(e("96cf"),e("d3b7"),e("99af"),{data:function(){return{originalPath:"https://buturi.heteml.net/student/2021/toda/comics/",comicLength:0,links:[],titles:[]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var e,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,fetch("".concat(t.originalPath,"countComic.php")).then((function(t){return t.json()})).then((function(r){t.comicLength=r.count})).catch((function(t){return console.error(t)}));case 2:e=[],n=[],o=1;case 5:if(!(o<=t.comicLength)){r.next=12;break}return e.push("comics/".concat(o)),r.next=9,fetch("".concat(t.originalPath,"getData.php?num=").concat(o)).then((function(t){return t.json()})).then((function(t){!1===t.status?console.error("fetch error: getData file throw error"):n.push(t.title)})).catch((function(t){return console.error(t)}));case 9:o++,r.next=5;break;case 12:t.links=e,t.titles=n;case 14:case"end":return r.stop()}}),r)})))()}}),c=a,u=(e("987a"),e("2877")),s=Object(u["a"])(c,n,o,!1,null,"794e32b3",null);r["default"]=s.exports},"96cf":function(t,r,e){var n=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(S){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=_(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var f="suspendedStart",l="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var w={};u(w,i,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var L=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function _(t,r,e){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return T()}e.method=o,e.arg=i;while(1){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?v:l,u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=v,e.method="throw",e.arg=u.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){while(++o<t.length)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:T}}function T(){return{value:r,done:!0}}return g.prototype=m,u(L,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(k.prototype),u(k.prototype,a,(function(){return this})),t.AsyncIterator=k,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new k(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),u(L,c,"Generator"),u(L,i,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){while(r.length){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),P(e),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;P(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"987a":function(t,r,e){"use strict";e("e0e2")},"99af":function(t,r,e){"use strict";var n=e("23e7"),o=e("da84"),i=e("d039"),a=e("e8b5"),c=e("861d"),u=e("7b0b"),s=e("07fa"),h=e("8418"),f=e("65f0"),l=e("1dde"),p=e("b622"),v=e("2d00"),d=p("isConcatSpreadable"),y=9007199254740991,g="Maximum allowed index exceeded",m=o.TypeError,w=v>=51||!i((function(){var t=[];return t[d]=!1,t.concat()[0]!==t})),b=l("concat"),x=function(t){if(!c(t))return!1;var r=t[d];return void 0!==r?!!r:a(t)},L=!w||!b;n({target:"Array",proto:!0,forced:L},{concat:function(t){var r,e,n,o,i,a=u(this),c=f(a,0),l=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?a:arguments[r],x(i)){if(o=s(i),l+o>y)throw m(g);for(e=0;e<o;e++,l++)e in i&&h(c,l,i[e])}else{if(l>=y)throw m(g);h(c,l++,i)}return c.length=l,c}})},e0e2:function(t,r,e){}}]);
//# sourceMappingURL=chunk-495a6f10.78d8383e.js.map