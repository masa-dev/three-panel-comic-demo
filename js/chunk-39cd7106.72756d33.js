(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39cd7106"],{4362:function(e,t,n){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,i="/";t.cwd=function(){return i},t.chdir=function(t){e||(e=n("df7c")),i=e.resolve(t,i)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"4ebe":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"group"}},[e.group.isJoin?n("div",[n("h2",[e._v("所属グループ")])]):e._e(),e.group.isJoin?e._e():n("div",[n("h2",[e._v("グループ")]),n("p",[e._v("現在、グループに所属していません。")])])])},r=[],s=n("fe4b"),o=n("4f60"),a=n("7ded"),l=n("22e5"),c=n("51b0"),h=n("1fd5"),u=n("e691");const d="@firebase/database-compat",_="0.1.4",p=new u["b"]("@firebase/database-compat"),f=function(e){const t="FIREBASE WARNING: "+e;p.warn(t)},g=function(e,t,n,i){if((!i||void 0!==n)&&"boolean"!==typeof n)throw new Error(Object(h["p"])(e,t)+"must be a boolean.")},m=function(e,t,n){if(!n||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(h["p"])(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(e){this._delegate=e}cancel(e){Object(h["M"])("OnDisconnect.cancel",0,1,arguments.length),Object(h["N"])("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(h["M"])("OnDisconnect.remove",0,1,arguments.length),Object(h["N"])("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(h["M"])("OnDisconnect.set",1,2,arguments.length),Object(h["N"])("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(h["M"])("OnDisconnect.setWithPriority",2,3,arguments.length),Object(h["N"])("OnDisconnect.setWithPriority","onComplete",n,!0);const i=this._delegate.setWithPriority(e,t);return n&&i.then(()=>n(null),e=>n(e)),i}update(e,t){if(Object(h["M"])("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,f("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(h["N"])("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),e=>t(e)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(h["M"])("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(h["M"])("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(h["M"])("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(h["M"])("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(h["M"])("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(h["M"])("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(c["g"])("DataSnapshot.child","path",e,!1),new b(this._database,this._delegate.child(e))}hasChild(e){return Object(h["M"])("DataSnapshot.hasChild",1,1,arguments.length),Object(c["g"])("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(h["M"])("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(h["M"])("DataSnapshot.forEach",1,1,arguments.length),Object(h["N"])("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new b(this._database,t)))}hasChildren(){return Object(h["M"])("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(h["M"])("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(h["M"])("DataSnapshot.ref",0,0,arguments.length),new C(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class w{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,i){var r;Object(h["M"])("Query.on",2,4,arguments.length),Object(h["N"])("Query.on","callback",t,!1);const s=w.getCancelAndContextArgs_("Query.on",n,i),o=(e,n)=>{t.call(s.context,new b(this.database,e),n)};o.userCallback=t,o.context=s.context;const a=null===(r=s.cancel)||void 0===r?void 0:r.bind(s.context);switch(e){case"value":return Object(c["z"])(this._delegate,o,a),t;case"child_added":return Object(c["v"])(this._delegate,o,a),t;case"child_removed":return Object(c["y"])(this._delegate,o,a),t;case"child_changed":return Object(c["w"])(this._delegate,o,a),t;case"child_moved":return Object(c["x"])(this._delegate,o,a),t;default:throw new Error(Object(h["p"])("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if(Object(h["M"])("Query.off",0,3,arguments.length),m("Query.off",e,!0),Object(h["N"])("Query.off","callback",t,!0),Object(h["O"])("Query.off","context",n,!0),t){const i=()=>{};i.userCallback=t,i.context=n,Object(c["u"])(this._delegate,e,i)}else Object(c["u"])(this._delegate,e)}get(){return Object(c["o"])(this._delegate).then(e=>new b(this.database,e))}once(e,t,n,i){Object(h["M"])("Query.once",1,4,arguments.length),Object(h["N"])("Query.once","callback",t,!0);const r=w.getCancelAndContextArgs_("Query.once",n,i),s=new h["a"],o=(e,n)=>{const i=new b(this.database,e);t&&t.call(r.context,i,n),s.resolve(i)};o.userCallback=t,o.context=r.context;const a=e=>{r.cancel&&r.cancel.call(r.context,e),s.reject(e)};switch(e){case"value":Object(c["z"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_added":Object(c["v"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_removed":Object(c["y"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_changed":Object(c["w"])(this._delegate,o,a,{onlyOnce:!0});break;case"child_moved":Object(c["x"])(this._delegate,o,a,{onlyOnce:!0});break;default:throw new Error(Object(h["p"])("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(e){return Object(h["M"])("Query.limitToFirst",1,1,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["s"])(e)))}limitToLast(e){return Object(h["M"])("Query.limitToLast",1,1,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["t"])(e)))}orderByChild(e){return Object(h["M"])("Query.orderByChild",1,1,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["A"])(e)))}orderByKey(){return Object(h["M"])("Query.orderByKey",0,0,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["B"])()))}orderByPriority(){return Object(h["M"])("Query.orderByPriority",0,0,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["C"])()))}orderByValue(){return Object(h["M"])("Query.orderByValue",0,0,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["D"])()))}startAt(e=null,t){return Object(h["M"])("Query.startAt",0,2,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["P"])(e,t)))}startAfter(e=null,t){return Object(h["M"])("Query.startAfter",0,2,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["O"])(e,t)))}endAt(e=null,t){return Object(h["M"])("Query.endAt",0,2,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["l"])(e,t)))}endBefore(e=null,t){return Object(h["M"])("Query.endBefore",0,2,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["m"])(e,t)))}equalTo(e,t){return Object(h["M"])("Query.equalTo",1,2,arguments.length),new w(this.database,Object(c["F"])(this._delegate,Object(c["n"])(e,t)))}toString(){return Object(h["M"])("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(h["M"])("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(h["M"])("Query.isEqual",1,1,arguments.length),!(e instanceof w)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const i={cancel:void 0,context:void 0};if(t&&n)i.cancel=t,Object(h["N"])(e,"cancel",i.cancel,!0),i.context=n,Object(h["O"])(e,"context",i.context,!0);else if(t)if("object"===typeof t&&null!==t)i.context=t;else{if("function"!==typeof t)throw new Error(Object(h["p"])(e,"cancelOrContext")+" must either be a cancel callback or a context object.");i.cancel=t}return i}get ref(){return new C(this.database,new c["d"](this._delegate._repo,this._delegate._path))}}class C extends w{constructor(e,t){super(e,new c["b"](t._repo,t._path,new c["c"],!1)),this.database=e,this._delegate=t}getKey(){return Object(h["M"])("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(h["M"])("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new C(this.database,Object(c["i"])(this._delegate,e))}getParent(){Object(h["M"])("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new C(this.database,e):null}getRoot(){return Object(h["M"])("Reference.root",0,0,arguments.length),new C(this.database,this._delegate.root)}set(e,t){Object(h["M"])("Reference.set",1,2,arguments.length),Object(h["N"])("Reference.set","onComplete",t,!0);const n=Object(c["L"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}update(e,t){if(Object(h["M"])("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let n=0;n<e.length;++n)t[""+n]=e[n];e=t,f("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(c["h"])("Reference.update",this._delegate._path),Object(h["N"])("Reference.update","onComplete",t,!0);const n=Object(c["Q"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}setWithPriority(e,t,n){Object(h["M"])("Reference.setWithPriority",2,3,arguments.length),Object(h["N"])("Reference.setWithPriority","onComplete",n,!0);const i=Object(c["N"])(this._delegate,e,t);return n&&i.then(()=>n(null),e=>n(e)),i}remove(e){Object(h["M"])("Reference.remove",0,1,arguments.length),Object(h["N"])("Reference.remove","onComplete",e,!0);const t=Object(c["I"])(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,n){Object(h["M"])("Reference.transaction",1,3,arguments.length),Object(h["N"])("Reference.transaction","transactionUpdate",e,!1),Object(h["N"])("Reference.transaction","onComplete",t,!0),g("Reference.transaction","applyLocally",n,!0);const i=Object(c["J"])(this._delegate,e,{applyLocally:n}).then(e=>new v(e.committed,new b(this.database,e.snapshot)));return t&&i.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),i}setPriority(e,t){Object(h["M"])("Reference.setPriority",1,2,arguments.length),Object(h["N"])("Reference.setPriority","onComplete",t,!0);const n=Object(c["M"])(this._delegate,e);return t&&n.then(()=>t(null),e=>t(e)),n}push(e,t){Object(h["M"])("Reference.push",0,2,arguments.length),Object(h["N"])("Reference.push","onComplete",t,!0);const n=Object(c["E"])(this._delegate,e),i=n.then(e=>new C(this.database,e));t&&i.then(()=>t(null),e=>t(e));const r=new C(this.database,n);return r.then=i.then.bind(i),r.catch=i.catch.bind(i,void 0),r}onDisconnect(){return Object(c["h"])("Reference.onDisconnect",this._delegate._path),new y(new c["a"](this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,t,n={}){Object(c["j"])(this._delegate,e,t,n)}ref(e){if(Object(h["M"])("database.ref",0,1,arguments.length),e instanceof C){const t=Object(c["H"])(this._delegate,e.toString());return new C(this,t)}{const t=Object(c["G"])(this._delegate,e);return new C(this,t)}}refFromURL(e){const t="database.refFromURL";Object(h["M"])(t,1,1,arguments.length);const n=Object(c["H"])(this._delegate,e);return new C(this,n)}goOffline(){return Object(h["M"])("database.goOffline",0,0,arguments.length),Object(c["p"])(this._delegate)}goOnline(){return Object(h["M"])("database.goOnline",0,0,arguments.length),Object(c["q"])(this._delegate)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T({app:e,url:t,version:n,customAuthImpl:i,namespace:r,nodeAdmin:s=!1}){Object(c["f"])(n);const o=new l["c"]("auth-internal",new l["b"]("database-standalone"));return o.setComponent(new l["a"]("auth-internal",()=>i,"PRIVATE")),{instance:new O(Object(c["e"])(e,o,void 0,t,s),e),namespace:r}}O.ServerValue={TIMESTAMP:Object(c["K"])(),increment:e=>Object(c["r"])(e)};var k=Object.freeze({__proto__:null,initStandalone:T});
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=O.ServerValue;function E(e){e.INTERNAL.registerComponent(new l["a"]("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:t});return new O(i,n)},"PUBLIC").setServiceProps({Reference:C,Query:w,Database:O,DataSnapshot:b,enableLogging:c["k"],INTERNAL:k,ServerValue:I}).setMultipleInstances(!0)),e.registerVersion(d,_)}E(a["a"]);var S={data:function(){return{group:{isJoin:!1,name:""}}},mounted:function(){var e=this;o["a"].initializeApp(s["a"]);var t=o["a"].auth().onAuthStateChanged((function(n){if(n){var i=o["a"].auth().currentUser,r=o["a"].database().ref("users/".concat(i.uid,"/group"));r.on("value",(function(t){var n=t.val();n?(console.log(n),e.group.isJoin=!0):e.group.isJoin=!1})),console.log(i,r,i.uid)}t()}))}},N=S,P=n("2877"),x=Object(P["a"])(N,i,r,!1,null,null,null);t["default"]=x.exports},"51b0":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return _a})),n.d(t,"b",(function(){return pa})),n.d(t,"c",(function(){return qn})),n.d(t,"d",(function(){return ya})),n.d(t,"e",(function(){return _l})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return _o})),n.d(t,"h",(function(){return fo})),n.d(t,"i",(function(){return Ca})),n.d(t,"j",(function(){return ml})),n.d(t,"k",(function(){return bl})),n.d(t,"l",(function(){return Ua})),n.d(t,"m",(function(){return Va})),n.d(t,"n",(function(){return al})),n.d(t,"o",(function(){return Na})),n.d(t,"p",(function(){return yl})),n.d(t,"q",(function(){return vl})),n.d(t,"r",(function(){return Tl})),n.d(t,"s",(function(){return Ga})),n.d(t,"t",(function(){return Ja})),n.d(t,"u",(function(){return La})),n.d(t,"v",(function(){return Da})),n.d(t,"w",(function(){return Ma})),n.d(t,"x",(function(){return Aa})),n.d(t,"y",(function(){return Fa})),n.d(t,"z",(function(){return Ra})),n.d(t,"A",(function(){return Za})),n.d(t,"B",(function(){return tl})),n.d(t,"C",(function(){return il})),n.d(t,"D",(function(){return sl})),n.d(t,"E",(function(){return Oa})),n.d(t,"F",(function(){return ll})),n.d(t,"G",(function(){return ba})),n.d(t,"H",(function(){return wa})),n.d(t,"I",(function(){return Ta})),n.d(t,"J",(function(){return Il})),n.d(t,"K",(function(){return Ol})),n.d(t,"L",(function(){return ka})),n.d(t,"M",(function(){return Ia})),n.d(t,"N",(function(){return Ea})),n.d(t,"O",(function(){return Ya})),n.d(t,"P",(function(){return za})),n.d(t,"Q",(function(){return Sa}));var i=n("589b"),r=n("22e5"),s=n("1fd5"),o=n("e691");const a="@firebase/database",l="0.12.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="";function h(e){c=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(s["L"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(s["E"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(s["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(t){}return new d},p=_("localStorage"),f=_("sessionStorage"),g=new o["b"]("@firebase/database"),m=function(){let e=1;return function(){return e++}}(),y=function(e){const t=Object(s["K"])(e),n=new s["d"];n.update(t);const i=n.digest();return s["g"].encodeByteArray(i)},v=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=v.apply(null,i):t+="object"===typeof i?Object(s["L"])(i):i,t+=" "}return t};let b=null,w=!0;const C=function(e,t){Object(s["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(g.logLevel=o["a"].VERBOSE,b=g.log.bind(g),t&&f.set("logging_enabled",!0)):"function"===typeof e?b=e:(b=null,f.remove("logging_enabled"))},O=function(...e){if(!0===w&&(w=!1,null===b&&!0===f.get("logging_enabled")&&C(!0)),b){const t=v.apply(null,e);b(t)}},T=function(e){return function(...t){O(e,...t)}},k=function(...e){const t="FIREBASE INTERNAL ERROR: "+v(...e);g.error(t)},I=function(...e){const t="FIREBASE FATAL ERROR: "+v(...e);throw g.error(t),new Error(t)},E=function(...e){const t="FIREBASE WARNING: "+v(...e);g.warn(t)},S=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&E("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},N=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P=function(e){if(Object(s["B"])()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&n()}),window.attachEvent("onload",n))}},x="[MIN_NAME]",j="[MAX_NAME]",R=function(e,t){if(e===t)return 0;if(e===x||t===j)return-1;if(t===x||e===j)return 1;{const n=H(e),i=H(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},D=function(e,t){return e===t?0:e<t?-1:1},M=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(s["L"])(t))},A=function(e){if("object"!==typeof e||null===e)return Object(s["L"])(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Object(s["L"])(t[i]),n+=":",n+=A(e[t[i]]);return n+="}",n},F=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function L(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){Object(s["e"])(!N(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,o,a,l,c;0===e?(o=0,a=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),i),o=l+i,a=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(o=0,a=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(c=n;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(r?1:0),h.reverse();const u=h.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(u.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},W=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},U=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function B(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const V=new RegExp("^-?(0*)\\d{1,10}$"),Q=-2147483648,z=2147483647,H=function(e){if(V.test(e)){const t=Number(e);if(t>=Q&&t<=z)return t}return null},Y=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw E("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},G=function(e,t){const n=setTimeout(e,t);return"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){E(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(O("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',E(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="5",ee="v",te="s",ne="r",ie="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,se="ls",oe="p",ae="ac",le="websocket",ce="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=p.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&p.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,n){let i;if(Object(s["e"])("string"===typeof t,"typeof type must == string"),Object(s["e"])("object"===typeof n,"typeof params must == object"),t===le)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(n["ns"]=e.namespace);const r=[];return L(n,(e,t)=>{r.push(e+"="+t)}),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(s["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(s["m"])(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe={},fe={};function ge(e){const t=e.toString();return pe[t]||(pe[t]=new _e),pe[t]}function me(e,t){const n=e.toString();return fe[n]||(fe[n]=t()),fe[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Y(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="start",be="close",we="pLPCommand",Ce="pRTLPCB",Oe="id",Te="pw",ke="ser",Ie="cb",Ee="seg",Se="ts",Ne="d",Pe="dframe",xe=1870,je=30,Re=xe-je,De=25e3,Me=3e4;class Ae{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=ge(t),this.urlFn=e=>(this.appCheckToken&&(e[ae]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ye(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Me)),P(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fe((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ve)this.id=n,this.password=i;else{if(t!==be)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)},()=>{this.onClosed_()},this.urlFn);const e={};e[ve]="t",e[ke]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[Ie]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[se]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[ae]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ne]=ie);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ae.forceAllow_=!0}static forceDisallow(){Ae.forceDisallow_=!0}static isAvailable(){return!Object(s["B"])()&&(!!Ae.forceAllow_||!Ae.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!W()&&!U())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(s["L"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Object(s["i"])(t),i=F(n,Re);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(s["B"])())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pe]="t",n[Oe]=e,n[Te]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(s["L"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(s["B"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=m(),window[we+this.uniqueCallbackIdentifier]=e,window[Ce+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){O("frame writing exception"),r.stack&&O(r.stack),O(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||O("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Oe]=this.myID,e[Te]=this.myPW,e[ke]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+je+n.length<=xe))break;{const e=this.pendingSegs.shift();n=n+"&"+Ee+i+"="+e.seg+"&"+Se+i+"="+e.ts+"&"+Ne+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(De)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){Object(s["B"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{O("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}},Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=16384,qe=45e3;let We=null;"undefined"!==typeof MozWebSocket?We=MozWebSocket:"undefined"!==typeof WebSocket&&(We=WebSocket);class Ue{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=ge(t),this.connURL=Ue.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={};return r[ee]=Z,!Object(s["B"])()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(r[ne]=ie),t&&(r[te]=t),n&&(r[se]=n),i&&(r[ae]=i),de(e,le,r)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,p.set("previous_websocket_failure",!0);try{if(Object(s["B"])()){const t=this.nodeAdmin?"AdminNode":"Node",n={headers:{"User-Agent":`Firebase/${Z}/${c}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(n.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(n.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i=Object({NODE_ENV:"production",BASE_URL:"/three-panel-comic-demo/"}),r=0===this.connURL.indexOf("wss://")?i["HTTPS_PROXY"]||i["https_proxy"]:i["HTTP_PROXY"]||i["http_proxy"];r&&(n["proxy"]={origin:r}),this.mySock=new We(this.connURL,[],n)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new We(this.connURL,[],e)}}catch(i){this.log_("Error instantiating WebSocket.");const e=i.message||i.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==We&&!Ue.forceDisallow_}static previouslyFailed(){return p.isInMemoryStorage||!0===p.get("previous_websocket_failure")}markConnectionHealthy(){p.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(s["E"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(s["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(s["L"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=F(t,Le);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(qe))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2,Ue.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Be{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ae,Ue]}initTransports_(e){const t=Ue&&Ue["isAvailable"]();let n=t&&!Ue.previouslyFailed();if(e.webSocketOnly&&(t||E("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ue];else{const e=this.transports_=[];for(const t of Be.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=6e4,Qe=5e3,ze=10240,He=102400,Ye="t",Ke="d",Ge="s",$e="r",Je="e",Xe="o",Ze="a",et="n",tt="p",nt="h";class it{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new Be(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=G(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>He?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ze?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ye in e){const t=e[Ye];t===Ze?this.upgradeIfSecondaryHealthy_():t===$e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=M("t",e),n=M("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=M("t",e),n=M("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=M(Ye,e);if(Ke in e){const n=e[Ke];if(t===nt)this.onHandshake_(n);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Ge?this.onConnectionShutdown_(n):t===$e?this.onReset_(n):t===Je?k("Server Error: "+n):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):k("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==n&&E("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),G(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ve))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):G(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qe))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(p.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(s["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){Object(s["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends st{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(s["z"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(s["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new ct("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function _t(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function pt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ft(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function gt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function mt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ct(t,0)}function yt(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof ct)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ct(n,0)}function vt(e){return e.pieceNum_>=e.pieces_.length}function bt(e,t){const n=ut(e),i=ut(t);if(null===n)return t;if(n===i)return bt(_t(e),_t(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function wt(e,t){const n=gt(e,0),i=gt(t,0);for(let r=0;r<n.length&&r<i.length;r++){const e=R(n[r],i[r]);if(0!==e)return e}return n.length===i.length?0:n.length<i.length?-1:1}function Ct(e,t){if(dt(e)!==dt(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ot(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(dt(e)>dt(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Tt{constructor(e,t){this.errorPrefix_=t,this.parts_=gt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Object(s["J"])(this.parts_[n]);Et(this)}}function kt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(s["J"])(t),Et(e)}function It(e){const t=e.parts_.pop();e.byteLength_-=Object(s["J"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Et(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>at)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+at+") or object contains a cycle "+St(e))}function St(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends st{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Nt}getInitialEvent(e){return Object(s["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=1e3,xt=3e5,jt=3e3,Rt=3e4,Dt=1.3,Mt=3e4,At="server_kill",Ft=3;class Lt extends rt{constructor(e,t,n,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Lt.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pt,this.maxReconnectDelay_=xt,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Object(s["B"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Object(s["L"])(r)),Object(s["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new s["a"],n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e["d"];"ok"===e["s"]?(this.onDataUpdate_(n["p"],i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},jt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(s["e"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,r=>{const s=r["d"],o=r["s"];Lt.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(s["j"])(e,"w")){const n=Object(s["I"])(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();E(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+n+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(s["t"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rt)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(s["D"])(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),Object(s["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{i&&setTimeout(()=>{i(e["s"],e["d"])},Math.floor(0))})}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(s["L"])(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):k("Unrecognized action received from server: "+Object(s["L"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(s["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Mt&&(this.reconnectDelay_=Pt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dt)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,n())},c=function(e){Object(s["e"])(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[s,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?O("getToken() completed but was canceled"):(O("getToken() completed. Creating connection."),this.authToken_=s&&s.accessToken,this.appCheckToken_=l&&l.token,a=new it(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,e=>{E(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(At)},r))}catch(k){this.log_("Failed to get token: "+k),o||(this.repoInfo_.nodeAdmin&&E(k),l())}}}interrupt(e){O("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){O("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(s["w"])(this.interruptReasons_)&&(this.reconnectDelay_=Pt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map(e=>A(e)).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ct(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){O("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ft&&(this.reconnectDelay_=Rt,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){O("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ft&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(s["B"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,Object(s["z"])()?e["framework.cordova"]=1:Object(s["C"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(s["w"])(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0,Lt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new qt(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new qt(x,e),i=new qt(x,t);return 0!==this.compare(n,i)}minPost(){return qt.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut;class Bt extends Wt{static get __EMPTY_NODE(){return Ut}static set __EMPTY_NODE(e){Ut=e}compare(e,t){return R(e.name,t.name)}isDefinedOn(e){throw Object(s["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qt.MIN}maxPost(){return new qt(j,Ut)}makePost(e,t){return Object(s["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new qt(e,Ut)}toString(){return".key"}}const Vt=new Bt;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class zt{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:zt.RED,this.left=null!=i?i:Yt.EMPTY_NODE,this.right=null!=r?r:Yt.EMPTY_NODE}copy(e,t,n,i,r){return new zt(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Yt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}zt.RED=!0,zt.BLACK=!1;class Ht{copy(e,t,n,i,r){return this}insert(e,t,n){return new zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Yt{constructor(e,t=Yt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Yt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,zt.BLACK,null,null))}remove(e){return new Yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,zt.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Qt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Qt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Qt(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(e,t){return R(e.name,t.name)}function Gt(e,t){return R(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t;function Jt(e){$t=e}Yt.EMPTY_NODE=new Ht;const Xt=function(e){return"number"===typeof e?"number:"+q(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();Object(s["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(s["j"])(t,".sv"),"Priority must be a string or number.")}else Object(s["e"])(e===$t||e.isEmpty(),"priority of unexpected type.");Object(s["e"])(e===$t||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let en,tn,nn;class rn{constructor(e,t=rn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(s["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){en=e}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new rn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return vt(e)?this:".priority"===ut(e)?this.priorityNode_:rn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:rn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Object(s["e"])(".priority"!==n||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(n,rn.__childrenNodeConstructor.EMPTY_NODE.updateChild(_t(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=y(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===rn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof rn.__childrenNodeConstructor?-1:(Object(s["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=rn.VALUE_TYPE_ORDER.indexOf(t),r=rn.VALUE_TYPE_ORDER.indexOf(n);return Object(s["e"])(i>=0,"Unknown leaf type: "+t),Object(s["e"])(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function sn(e){tn=e}function on(e){nn=e}rn.VALUE_TYPE_ORDER=["object","boolean","number","string"];class an extends Wt{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?R(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qt.MIN}maxPost(){return new qt(j,new rn("[PRIORITY-POST]",nn))}makePost(e,t){const n=tn(e);return new qt(t,new rn("[PRIORITY-POST]",n))}toString(){return".priority"}}const ln=new an,cn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){const t=e=>parseInt(Math.log(e)/cn,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const un=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new zt(a,o.node,zt.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),h=r(l+1,i);return o=e[l],a=n?n(o):o,new zt(a,o.node,zt.BLACK,c,h)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),h=e[s],u=n?n(h):h;l(new zt(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,zt.BLACK):(a(i,zt.BLACK),a(i,zt.RED))}return s},o=new hn(e.length),a=s(o);return new Yt(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn;const _n={};class pn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(s["e"])(_n&&ln,"ChildrenNode.ts has not been loaded"),dn=dn||new pn({".priority":_n},{".priority":ln}),dn}get(e){const t=Object(s["I"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Yt?t:null}hasIndex(e){return Object(s["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(s["e"])(e!==Vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(qt.Wrap);let o,a=r.getNext();while(a)i=i||e.isDefinedOn(a.node),n.push(a),a=r.getNext();o=i?un(n,e.getCompare()):_n;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=o,new pn(h,c)}addToIndexes(e,t){const n=Object(s["F"])(this.indexes_,(n,i)=>{const r=Object(s["I"])(this.indexSet_,i);if(Object(s["e"])(r,"Missing index implementation for "+i),n===_n){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(qt.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),un(n,r.getCompare())}return _n}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new qt(e.name,i))),r.insert(e,e.node)}});return new pn(n,this.indexSet_)}removeFromIndexes(e,t){const n=Object(s["F"])(this.indexes_,n=>{if(n===_n)return n;{const i=t.get(e.name);return i?n.remove(new qt(e.name,i)):n}});return new pn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn;class gn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&Object(s["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fn||(fn=new gn(new Yt(Gt),null,pn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fn}updatePriority(e){return this.children_.isEmpty()?this:new gn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?fn:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(_t(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(s["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new qt(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?fn:this.priorityNode_;return new gn(i,s,r)}}updateChild(e,t){const n=ut(e);if(null===n)return t;{Object(s["e"])(".priority"!==ut(e)||1===dt(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(_t(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(ln,(s,o)=>{t[s]=o.val(e),n++,r&&gn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1}),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(ln,(t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)}),this.lazyHash_=""===e?"":y(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new qt(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,e=>e);{const n=this.children_.getIteratorFrom(e.name,qt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,e=>e);{const n=this.children_.getReverseIteratorFrom(e.name,qt.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yn?-1:0}withIndex(e){if(e===Vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new gn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(ln),n=t.getIterator(ln);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Vt?null:this.indexMap_.get(e.toString())}}gn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mn extends gn{constructor(){super(new Yt(Gt),gn.EMPTY_NODE,pn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return gn.EMPTY_NODE}isEmpty(){return!1}}const yn=new mn;Object.defineProperties(qt,{MIN:{value:new qt(x,gn.EMPTY_NODE)},MAX:{value:new qt(j,yn)}}),Bt.__EMPTY_NODE=gn.EMPTY_NODE,rn.__childrenNodeConstructor=gn,Jt(yn),on(yn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=!0;function bn(e,t=null){if(null===e)return gn.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(s["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new rn(n,bn(t))}if(e instanceof Array||!vn){let n=gn.EMPTY_NODE;return L(e,(t,i)=>{if(Object(s["j"])(e,t)&&"."!==t.substring(0,1)){const e=bn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}}),n.updatePriority(bn(t))}{const n=[];let i=!1;const r=e;if(L(r,(e,t)=>{if("."!==e.substring(0,1)){const r=bn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new qt(e,r)))}}),0===n.length)return gn.EMPTY_NODE;const s=un(n,Kt,e=>e.name,Gt);if(i){const e=un(n,ln.getCompare());return new gn(s,bn(t),new pn({".priority":e},{".priority":ln}))}return new gn(s,bn(t),pn.Default)}}sn(bn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn extends Wt{constructor(e){super(),this.indexPath_=e,Object(s["e"])(!vt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?R(e.name,t.name):r}makePost(e,t){const n=bn(e),i=gn.EMPTY_NODE.updateChild(this.indexPath_,n);return new qt(t,i)}maxPost(){const e=gn.EMPTY_NODE.updateChild(this.indexPath_,yn);return new qt(j,e)}toString(){return gt(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Wt{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?R(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qt.MIN}maxPost(){return qt.MAX}makePost(e,t){const n=bn(e);return new qt(t,n)}toString(){return".value"}}const On=new Cn,Tn="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",kn="-",In="z",En=786,Sn=function(){let e=0;const t=[];return function(n){const i=n===e;let r;e=n;const o=new Array(8);for(r=7;r>=0;r--)o[r]=Tn.charAt(n%64),n=Math.floor(n/64);Object(s["e"])(0===n,"Cannot push at time == 0");let a=o.join("");if(i){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)a+=Tn.charAt(t[r]);return Object(s["e"])(20===a.length,"nextPushId: Length should be 20."),a}}(),Nn=function(e){if(e===""+z)return kn;const t=H(e);if(null!=t)return""+(t+1);const n=new Array(e.length);for(let o=0;o<n.length;o++)n[o]=e.charAt(o);if(n.length<En)return n.push(kn),n.join("");let i=n.length-1;while(i>=0&&n[i]===In)i--;if(-1===i)return j;const r=n[i],s=Tn.charAt(Tn.indexOf(r)+1);return n[i]=s,n.slice(0,i+1).join("")},Pn=function(e){if(e===""+Q)return x;const t=H(e);if(null!=t)return""+(t-1);const n=new Array(e.length);for(let i=0;i<n.length;i++)n[i]=e.charAt(i);return n[n.length-1]===kn?1===n.length?""+z:(delete n[n.length-1],n.join("")):(n[n.length-1]=Tn.charAt(Tn.indexOf(n[n.length-1])-1),n.join("")+In.repeat(En-n.length))};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e){return{type:"value",snapshotNode:e}}function jn(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Rn(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Dn(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Mn(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.index_=e}updateChild(e,t,n,i,r,o){Object(s["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Rn(t,a)):Object(s["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(jn(t,n)):o.trackChildChange(Dn(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(ln,(e,i)=>{t.hasChild(e)||n.trackChildChange(Rn(e,i))}),t.isLeafNode()||t.forEachChild(ln,(t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Dn(t,i,r))}else n.trackChildChange(jn(t,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?gn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.indexedFilter_=new An(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fn.getStartPost_(e),this.endPost_=Fn.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new qt(t,n))||(n=gn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=gn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(gn.EMPTY_NODE);const r=this;return t.forEachChild(ln,(e,t)=>{r.matches(new qt(e,t))||(i=i.updateImmediateChild(e,gn.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.rangedFilter_=new Fn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new qt(t,n))||(n=gn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=gn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=gn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(gn.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;while(s.hasNext()){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);const l=a&&o<this.limit_&&r(t,n)<=0;l?o++:i=i.updateImmediateChild(t.name,gn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;Object(s["e"])(a.numChildren()===this.limit_,"");const l=new qt(t,n),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let s=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=s&&(s.name===t||a.hasChild(s.name)))s=i.getChildAfterChild(this.index_,s,this.reverse_);const u=null==s?1:o(s,l),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=r&&r.trackChildChange(Dn(t,n,e)),a.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Rn(t,e));const n=a.updateImmediateChild(t,gn.EMPTY_NODE),i=null!=s&&this.rangedFilter_.matches(s);return i?(null!=r&&r.trackChildChange(jn(s.name,s.node)),n.updateImmediateChild(s.name,s.node)):n}}return n.isEmpty()?e:h&&o(c,l)>=0?(null!=r&&(r.trackChildChange(Rn(c.name,c.node)),r.trackChildChange(jn(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(c.name,gn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ln}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(s["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:x}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(s["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:j}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(s["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ln}copy(){const e=new qn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wn(e){return e.loadsAllData()?new An(e.getIndex()):e.hasLimit()?new Ln(e):new Fn(e)}function Un(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="l",n}function Bn(e,t){const n=e.copy();return n.limitSet_=!0,n.limit_=t,n.viewFrom_="r",n}function Vn(e,t,n){const i=e.copy();return i.startSet_=!0,void 0===t&&(t=null),i.indexStartValue_=t,null!=n?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function Qn(e,t,n){let i;if(e.index_===Vt)"string"===typeof t&&(t=Nn(t)),i=Vn(e,t,n);else{let r;r=null==n?j:Nn(n),i=Vn(e,t,r)}return i.startAfterSet_=!0,i}function zn(e,t,n){const i=e.copy();return i.endSet_=!0,void 0===t&&(t=null),i.indexEndValue_=t,void 0!==n?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function Hn(e,t,n){let i,r;return e.index_===Vt?("string"===typeof t&&(t=Pn(t)),r=zn(e,t,n)):(i=null==n?x:Pn(n),r=zn(e,t,i)),r.endBeforeSet_=!0,r}function Yn(e,t){const n=e.copy();return n.index_=t,n}function Kn(e){const t={};if(e.isDefault())return t;let n;return e.index_===ln?n="$priority":e.index_===On?n="$value":e.index_===Vt?n="$key":(Object(s["e"])(e.index_ instanceof wn,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=Object(s["L"])(n),e.startSet_&&(t["startAt"]=Object(s["L"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(s["L"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(s["L"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(s["L"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Gn(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==ln&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends rt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(s["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$n.getListenId_(e,n),a={};this.listens_[o]=a;const l=Kn(e._queryParams);this.restRequest_(r+".json",l,(e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,n),Object(s["I"])(this.listens_,o)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}})}unlisten(e,t){const n=$n.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Kn(e._queryParams),n=e._path.toString(),i=new s["a"];return this.restRequest_(n+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(s["G"])(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let t=null;if(a.status>=200&&a.status<300){try{t=Object(s["E"])(a.responseText)}catch(e){E("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,t)}else 401!==a.status&&404!==a.status&&E("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.rootNode_=gn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return{value:null,children:new Map}}function Zn(e,t,n){if(vt(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ut(t);e.children.has(i)||e.children.set(i,Xn());const r=e.children.get(i);t=_t(t),Zn(r,t,n)}}function ei(e,t){if(vt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const n=e.value;return e.value=null,n.forEachChild(ln,(t,n)=>{Zn(e,new ct(t),n)}),ei(e,t)}}if(e.children.size>0){const n=ut(t);if(t=_t(t),e.children.has(n)){const i=ei(e.children.get(n),t);i&&e.children.delete(n)}return 0===e.children.size}return!0}function ti(e,t,n){null!==e.value?n(t,e.value):ni(e,(e,i)=>{const r=new ct(t.toString()+"/"+e);ti(i,r,n)})}function ni(e,t){e.children.forEach((e,n)=>{t(n,e)})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&L(this.last_,(e,n)=>{t[e]=t[e]-n}),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=1e4,si=3e4,oi=3e5;class ai{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new ii(e);const n=ri+(si-ri)*Math.random();G(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;L(e,(e,i)=>{i>0&&Object(s["j"])(this.statsToReport_,e)&&(t[e]=i,n=!0)}),n&&this.server_.reportStats(t),G(this.reportStats_.bind(this),Math.floor(2*Math.random()*oi))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var li;function ci(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ui(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(li||(li={}));class di{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=li.ACK_USER_WRITE,this.source=ci()}operationForChild(e){if(vt(this.path)){if(null!=this.affectedTree.value)return Object(s["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new di(ht(),t,this.revert)}}return Object(s["e"])(ut(this.path)===e,"operationForChild called for unrelated child."),new di(_t(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this.source=e,this.path=t,this.type=li.LISTEN_COMPLETE}operationForChild(e){return vt(this.path)?new _i(this.source,ht()):new _i(this.source,_t(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=li.OVERWRITE}operationForChild(e){return vt(this.path)?new pi(this.source,ht(),this.snap.getImmediateChild(e)):new pi(this.source,_t(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=li.MERGE}operationForChild(e){if(vt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new pi(this.source,ht(),t.value):new fi(this.source,ht(),t)}return Object(s["e"])(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fi(this.source,_t(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(vt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yi(e,t,n,i){const r=[],s=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Mn(t.childName,t.snapshotNode))}),vi(e,r,"child_removed",t,i,n),vi(e,r,"child_added",t,i,n),vi(e,r,"child_moved",s,i,n),vi(e,r,"child_changed",t,i,n),vi(e,r,"value",t,i,n),r}function vi(e,t,n,i,r,s){const o=i.filter(e=>e.type===n);o.sort((t,n)=>wi(e,t,n)),o.forEach(n=>{const i=bi(e,n,s);r.forEach(r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))})})}function bi(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function wi(e,t,n){if(null==t.childName||null==n.childName)throw Object(s["f"])("Should only compare child_ events.");const i=new qt(t.childName,t.snapshotNode),r=new qt(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e,t){return{eventCache:e,serverCache:t}}function Oi(e,t,n,i){return Ci(new gi(t,n,i),e.serverCache)}function Ti(e,t,n,i){return Ci(e.eventCache,new gi(t,n,i))}function ki(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ii(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei;const Si=()=>(Ei||(Ei=new Yt(D)),Ei);class Ni{constructor(e,t=Si()){this.value=e,this.children=t}static fromObject(e){let t=new Ni(null);return L(e,(e,n)=>{t=t.set(new ct(e),n)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(vt(e))return null;{const n=ut(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(_t(e),t);if(null!=r){const e=yt(new ct(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(vt(e))return this;{const t=ut(e),n=this.children.get(t);return null!==n?n.subtree(_t(e)):new Ni(null)}}set(e,t){if(vt(e))return new Ni(t,this.children);{const n=ut(e),i=this.children.get(n)||new Ni(null),r=i.set(_t(e),t),s=this.children.insert(n,r);return new Ni(this.value,s)}}remove(e){if(vt(e))return this.children.isEmpty()?new Ni(null):new Ni(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const i=n.remove(_t(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ni(null):new Ni(this.value,r)}return this}}get(e){if(vt(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(_t(e)):null}}setTree(e,t){if(vt(e))return t;{const n=ut(e),i=this.children.get(n)||new Ni(null),r=i.setTree(_t(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Ni(this.value,s)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((i,r)=>{n[i]=r.fold_(yt(e,i),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(vt(e))return null;{const i=ut(e),r=this.children.get(i);return r?r.findOnPath_(_t(e),yt(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,n){if(vt(e))return this;{this.value&&n(t,this.value);const i=ut(e),r=this.children.get(i);return r?r.foreachOnPath_(_t(e),yt(t,i),n):new Ni(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal((n,i)=>{i.foreach_(yt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e){this.writeTree_=e}static empty(){return new Pi(new Ni(null))}}function xi(e,t,n){if(vt(t))return new Pi(new Ni(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=bt(r,t);return s=s.updateChild(o,n),new Pi(e.writeTree_.set(r,s))}{const i=new Ni(n),r=e.writeTree_.setTree(t,i);return new Pi(r)}}}function ji(e,t,n){let i=e;return L(n,(e,n)=>{i=xi(i,yt(t,e),n)}),i}function Ri(e,t){if(vt(t))return Pi.empty();{const n=e.writeTree_.setTree(t,new Ni(null));return new Pi(n)}}function Di(e,t){return null!=Mi(e,t)}function Mi(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(bt(n.path,t)):null}function Ai(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(ln,(e,n)=>{t.push(new qt(e,n))}):e.writeTree_.children.inorderTraversal((e,n)=>{null!=n.value&&t.push(new qt(e,n.value))}),t}function Fi(e,t){if(vt(t))return e;{const n=Mi(e,t);return new Pi(null!=n?new Ni(n):e.writeTree_.subtree(t))}}function Li(e){return e.writeTree_.isEmpty()}function qi(e,t){return Wi(ht(),e.writeTree_,t)}function Wi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((t,r)=>{".priority"===t?(Object(s["e"])(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Wi(yt(e,t),r,n)}),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(yt(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(e,t){return hr(t,e)}function Bi(e,t,n,i,r){Object(s["e"])(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=xi(e.visibleWrites,t,n)),e.lastWriteId=i}function Vi(e,t,n,i){Object(s["e"])(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=ji(e.visibleWrites,t,n),e.lastWriteId=i}function Qi(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function zi(e,t){const n=e.allWrites.findIndex(e=>e.writeId===t);Object(s["e"])(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,o=!1,a=e.allWrites.length-1;while(r&&a>=0){const t=e.allWrites[a];t.visible&&(a>=n&&Hi(t,i.path)?r=!1:Ot(i.path,t.path)&&(o=!0)),a--}if(r){if(o)return Yi(e),!0;if(i.snap)e.visibleWrites=Ri(e.visibleWrites,i.path);else{const t=i.children;L(t,t=>{e.visibleWrites=Ri(e.visibleWrites,yt(i.path,t))})}return!0}return!1}function Hi(e,t){if(e.snap)return Ot(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ot(yt(e.path,n),t))return!0;return!1}function Yi(e){e.visibleWrites=Gi(e.allWrites,Ki,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Ki(e){return e.visible}function Gi(e,t,n){let i=Pi.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)Ot(n,e)?(t=bt(n,e),i=xi(i,t,o.snap)):Ot(e,n)&&(t=bt(e,n),i=xi(i,ht(),o.snap.getChild(t)));else{if(!o.children)throw Object(s["f"])("WriteRecord should have .snap or .children");if(Ot(n,e))t=bt(n,e),i=ji(i,t,o.children);else if(Ot(e,n))if(t=bt(e,n),vt(t))i=ji(i,ht(),o.children);else{const e=Object(s["I"])(o.children,ut(t));if(e){const n=e.getChild(_t(t));i=xi(i,ht(),n)}}}}}return i}function $i(e,t,n,i,r){if(i||r){const s=Fi(e.visibleWrites,t);if(!r&&Li(s))return n;if(r||null!=n||Di(s,ht())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ot(e.path,t)||Ot(t,e.path))},o=Gi(e.allWrites,s,t),a=n||gn.EMPTY_NODE;return qi(o,a)}return null}{const i=Mi(e.visibleWrites,t);if(null!=i)return i;{const i=Fi(e.visibleWrites,t);if(Li(i))return n;if(null!=n||Di(i,ht())){const e=n||gn.EMPTY_NODE;return qi(i,e)}return null}}}function Ji(e,t,n){let i=gn.EMPTY_NODE;const r=Mi(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(ln,(e,t)=>{i=i.updateImmediateChild(e,t)}),i;if(n){const r=Fi(e.visibleWrites,t);return n.forEachChild(ln,(e,t)=>{const n=qi(Fi(r,new ct(e)),t);i=i.updateImmediateChild(e,n)}),Ai(r).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}{const n=Fi(e.visibleWrites,t);return Ai(n).forEach(e=>{i=i.updateImmediateChild(e.name,e.node)}),i}}function Xi(e,t,n,i,r){Object(s["e"])(i||r,"Either existingEventSnap or existingServerSnap must exist");const o=yt(t,n);if(Di(e.visibleWrites,o))return null;{const t=Fi(e.visibleWrites,o);return Li(t)?r.getChild(n):qi(t,r.getChild(n))}}function Zi(e,t,n,i){const r=yt(t,n),s=Mi(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=Fi(e.visibleWrites,r);return qi(t,i.getNode().getImmediateChild(n))}return null}function er(e,t){return Mi(e.visibleWrites,t)}function tr(e,t,n,i,r,s,o){let a;const l=Fi(e.visibleWrites,t),c=Mi(l,ht());if(null!=c)a=c;else{if(null==n)return[];a=qi(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();while(l&&e.length<r)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}function nr(){return{visibleWrites:Pi.empty(),allWrites:[],lastWriteId:-1}}function ir(e,t,n,i){return $i(e.writeTree,e.treePath,t,n,i)}function rr(e,t){return Ji(e.writeTree,e.treePath,t)}function sr(e,t,n,i){return Xi(e.writeTree,e.treePath,t,n,i)}function or(e,t){return er(e.writeTree,yt(e.treePath,t))}function ar(e,t,n,i,r,s){return tr(e.writeTree,e.treePath,t,n,i,r,s)}function lr(e,t,n){return Zi(e.writeTree,e.treePath,t,n)}function cr(e,t){return hr(yt(e.treePath,t),e.writeTree)}function hr(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Object(s["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(s["e"])(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Dn(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Rn(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,jn(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(s["f"])("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Dn(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const _r=new dr;class pr{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new gi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ii(this.viewCache_),r=ar(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e){return{filter:e}}function gr(e,t){Object(s["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(s["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function mr(e,t,n,i,r){const o=new ur;let a,l;if(n.type===li.OVERWRITE){const c=n;c.source.fromUser?a=wr(e,t,c.path,c.snap,i,r,o):(Object(s["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!vt(c.path),a=br(e,t,c.path,c.snap,i,r,l,o))}else if(n.type===li.MERGE){const c=n;c.source.fromUser?a=Or(e,t,c.path,c.children,i,r,o):(Object(s["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),a=kr(e,t,c.path,c.children,i,r,l,o))}else if(n.type===li.ACK_USER_WRITE){const s=n;a=s.revert?Sr(e,t,s.path,i,r,o):Ir(e,t,s.path,s.affectedTree,i,r,o)}else{if(n.type!==li.LISTEN_COMPLETE)throw Object(s["f"])("Unknown operation type: "+n.type);a=Er(e,t,n.path,i,o)}const c=o.getChanges();return yr(t,a,c),{viewCache:a,changes:c}}function yr(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ki(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(xn(ki(t)))}}function vr(e,t,n,i,r,o){const a=t.eventCache;if(null!=or(i,n))return t;{let l,c;if(vt(n))if(Object(s["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ii(t),r=n instanceof gn?n:gn.EMPTY_NODE,s=rr(i,r);l=e.filter.updateFullNode(t.eventCache.getNode(),s,o)}else{const n=ir(i,Ii(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const h=ut(n);if(".priority"===h){Object(s["e"])(1===dt(n),"Can't have a priority with additional path components");const r=a.getNode();c=t.serverCache.getNode();const o=sr(i,n,r,c);l=null!=o?e.filter.updatePriority(r,o):a.getNode()}else{const s=_t(n);let u;if(a.isCompleteForChild(h)){c=t.serverCache.getNode();const e=sr(i,n,a.getNode(),c);u=null!=e?a.getNode().getImmediateChild(h).updateChild(s,e):a.getNode().getImmediateChild(h)}else u=lr(i,h,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),h,u,s,r,o):a.getNode()}}return Oi(t,l,a.isFullyInitialized()||vt(n),e.filter.filtersNodes())}}function br(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(vt(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=ut(n);if(!l.isCompleteForPath(n)&&dt(n)>1)return t;const r=_t(n),s=l.getNode().getImmediateChild(e),o=s.updateChild(r,i);c=".priority"===e?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),e,o,r,_r,null)}const u=Ti(t,c,l.isFullyInitialized()||vt(n),h.filtersNodes()),d=new pr(r,u,s);return vr(e,u,n,r,d,a)}function wr(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const h=new pr(r,t,s);if(vt(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Oi(t,c,!0,e.filter.filtersNodes());else{const r=ut(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Oi(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=_t(n),c=a.getNode().getImmediateChild(r);let u;if(vt(s))u=i;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===pt(s)&&e.getChild(mt(s)).isEmpty()?e:e.updateChild(s,i):gn.EMPTY_NODE}if(c.equals(u))l=t;else{const n=e.filter.updateChild(a.getNode(),r,u,s,h,o);l=Oi(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Cr(e,t){return e.eventCache.isCompleteForChild(t)}function Or(e,t,n,i,r,s,o){let a=t;return i.foreach((i,l)=>{const c=yt(n,i);Cr(t,ut(c))&&(a=wr(e,a,c,l,r,s,o))}),i.foreach((i,l)=>{const c=yt(n,i);Cr(t,ut(c))||(a=wr(e,a,c,l,r,s,o))}),a}function Tr(e,t,n){return n.foreach((e,n)=>{t=t.updateChild(e,n)}),t}function kr(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=vt(n)?i:new Ni(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal((n,i)=>{if(h.hasChild(n)){const l=t.serverCache.getNode().getImmediateChild(n),h=Tr(e,l,i);c=br(e,c,new ct(n),h,r,s,o,a)}}),l.children.inorderTraversal((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!l){const l=t.serverCache.getNode().getImmediateChild(n),h=Tr(e,l,i);c=br(e,c,new ct(n),h,r,s,o,a)}}),c}function Ir(e,t,n,i,r,s,o){if(null!=or(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(vt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return br(e,t,n,l.getNode().getChild(n),r,s,a,o);if(vt(n)){let i=new Ni(null);return l.getNode().forEachChild(Vt,(e,t)=>{i=i.set(new ct(e),t)}),kr(e,t,n,i,r,s,a,o)}return t}{let c=new Ni(null);return i.foreach((e,t)=>{const i=yt(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))}),kr(e,t,n,c,r,s,a,o)}}function Er(e,t,n,i,r){const s=t.serverCache,o=Ti(t,s.getNode(),s.isFullyInitialized()||vt(n),s.isFiltered());return vr(e,o,n,i,_r,r)}function Sr(e,t,n,i,r,o){let a;if(null!=or(i,n))return t;{const l=new pr(i,t,r),c=t.eventCache.getNode();let h;if(vt(n)||".priority"===ut(n)){let n;if(t.serverCache.isFullyInitialized())n=ir(i,Ii(t));else{const e=t.serverCache.getNode();Object(s["e"])(e instanceof gn,"serverChildren would be complete if leaf node"),n=rr(i,e)}n=n,h=e.filter.updateFullNode(c,n,o)}else{const r=ut(n);let s=lr(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=c.getImmediateChild(r)),h=null!=s?e.filter.updateChild(c,r,s,_t(n),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,gn.EMPTY_NODE,_t(n),l,o):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=ir(i,Ii(t)),a.isLeafNode()&&(h=e.filter.updateFullNode(h,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=or(i,ht()),Oi(t,h,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new An(n.getIndex()),r=Wn(n);this.processor_=fr(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(gn.EMPTY_NODE,s.getNode(),null),l=r.updateFullNode(gn.EMPTY_NODE,o.getNode(),null),c=new gi(a,s.isFullyInitialized(),i.filtersNodes()),h=new gi(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ci(h,c),this.eventGenerator_=new mi(this.query_)}get query(){return this.query_}}function Pr(e){return e.viewCache_.serverCache.getNode()}function xr(e){return ki(e.viewCache_)}function jr(e,t){const n=Ii(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!vt(t)&&!n.getImmediateChild(ut(t)).isEmpty())?n.getChild(t):null}function Rr(e){return 0===e.eventRegistrations_.length}function Dr(e,t){e.eventRegistrations_.push(t)}function Mr(e,t,n){const i=[];if(n){Object(s["e"])(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)})}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Ar(e,t,n,i){t.type===li.MERGE&&null!==t.source.queryId&&(Object(s["e"])(Ii(e.viewCache_),"We should always have a full cache before handling merges"),Object(s["e"])(ki(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=mr(e.processor_,r,t,n,i);return gr(e.processor_,o.viewCache),Object(s["e"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,Lr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Fr(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(ln,(e,t)=>{i.push(jn(e,t))})}return n.isFullyInitialized()&&i.push(xn(n.getNode())),Lr(e,i,n.getNode(),t)}function Lr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return yi(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr,Wr;class Ur{constructor(){this.views=new Map}}function Br(e){Object(s["e"])(!qr,"__referenceConstructor has already been defined"),qr=e}function Vr(){return Object(s["e"])(qr,"Reference.ts has not been loaded"),qr}function Qr(e){return 0===e.views.size}function zr(e,t,n,i){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(s["e"])(null!=o,"SyncTree gave us an op for an invalid query."),Ar(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Ar(s,t,n,i));return r}}function Hr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=ir(n,r?i:null),s=!1;e?s=!0:i instanceof gn?(e=rr(n,i),s=!1):(e=gn.EMPTY_NODE,s=!1);const o=Ci(new gi(e,s,!1),new gi(i,r,!1));return new Nr(t,o)}return o}function Yr(e,t,n,i,r,s){const o=Hr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Dr(o,n),Fr(o,n)}function Kr(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Zr(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(Mr(c,n,i)),Rr(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(Mr(t,n,i)),Rr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Zr(e)&&s.push(new(Vr())(t._repo,t._path)),{removed:s,events:o}}function Gr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function $r(e,t){let n=null;for(const i of e.views.values())n=n||jr(i,t);return n}function Jr(e,t){const n=t._queryParams;if(n.loadsAllData())return es(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Xr(e,t){return null!=Jr(e,t)}function Zr(e){return null!=es(e)}function es(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(e){Object(s["e"])(!Wr,"__referenceConstructor has already been defined"),Wr=e}function ns(){return Object(s["e"])(Wr,"Reference.ts has not been loaded"),Wr}let is=1;class rs{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ni(null),this.pendingWriteTree_=nr(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ss(e,t,n,i,r){return Bi(e.pendingWriteTree_,t,n,i,r),r?ys(e,new pi(ci(),t,n)):[]}function os(e,t,n,i){Vi(e.pendingWriteTree_,t,n,i);const r=Ni.fromObject(n);return ys(e,new fi(ci(),t,r))}function as(e,t,n=!1){const i=Qi(e.pendingWriteTree_,t),r=zi(e.pendingWriteTree_,t);if(r){let t=new Ni(null);return null!=i.snap?t=t.set(ht(),!0):L(i.children,e=>{t=t.set(new ct(e),!0)}),ys(e,new di(i.path,t,n))}return[]}function ls(e,t,n){return ys(e,new pi(hi(),t,n))}function cs(e,t,n){const i=Ni.fromObject(n);return ys(e,new fi(hi(),t,i))}function hs(e,t){return ys(e,new _i(hi(),t))}function us(e,t,n){const i=Ts(e,n);if(i){const n=ks(i),r=n.path,s=n.queryId,o=bt(r,t),a=new _i(ui(s),o);return Is(e,r,a)}return[]}function ds(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Xr(s,t))){const a=Kr(s,t,n,i);Qr(s)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),h=e.syncPointTree_.findOnPath(r,(e,t)=>Zr(t));if(c&&!h){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=Es(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=ws(e,i);e.listenProvider_.startListening(Ss(r),Cs(e,r),s.hashFn,s.onComplete)}}}if(!h&&l.length>0&&!i)if(c){const n=null;e.listenProvider_.stopListening(Ss(t),n)}else l.forEach(t=>{const n=e.queryToTagMap.get(Os(t));e.listenProvider_.stopListening(Ss(t),n)});Ns(e,l)}return o}function _s(e,t,n,i){const r=Ts(e,i);if(null!=r){const i=ks(r),s=i.path,o=i.queryId,a=bt(s,t),l=new pi(ui(o),a,n);return Is(e,s,l)}return[]}function ps(e,t,n,i){const r=Ts(e,i);if(r){const i=ks(r),s=i.path,o=i.queryId,a=bt(s,t),l=Ni.fromObject(n),c=new fi(ui(o),a,l);return Is(e,s,c)}return[]}function fs(e,t,n){const i=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(i,(e,t)=>{const n=bt(e,i);r=r||$r(t,n),o=o||Zr(t)});let a,l=e.syncPointTree_.get(i);if(l?(o=o||Zr(l),r=r||$r(l,ht())):(l=new Ur,e.syncPointTree_=e.syncPointTree_.set(i,l)),null!=r)a=!0;else{a=!1,r=gn.EMPTY_NODE;const t=e.syncPointTree_.subtree(i);t.foreachChild((e,t)=>{const n=$r(t,ht());n&&(r=r.updateImmediateChild(e,n))})}const c=Xr(l,t);if(!c&&!t._queryParams.loadsAllData()){const n=Os(t);Object(s["e"])(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Ps();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const h=Ui(e.pendingWriteTree_,i);let u=Yr(l,t,n,h,r,a);if(!c&&!o){const n=Jr(l,t);u=u.concat(xs(e,t,n))}return u}function gs(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(e,n)=>{const i=bt(e,t),r=$r(n,i);if(r)return r});return $i(r,t,s,n,i)}function ms(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const r=bt(e,n);i=i||$r(t,r)});let r=e.syncPointTree_.get(n);r?i=i||$r(r,ht()):(r=new Ur,e.syncPointTree_=e.syncPointTree_.set(n,r));const s=null!=i,o=s?new gi(i,!0,!1):null,a=Ui(e.pendingWriteTree_,t._path),l=Hr(r,t,a,s?o.getNode():gn.EMPTY_NODE,s);return xr(l)}function ys(e,t){return vs(t,e.syncPointTree_,null,Ui(e.pendingWriteTree_,ht()))}function vs(e,t,n,i){if(vt(e.path))return bs(e,t,n,i);{const r=t.get(ht());null==n&&null!=r&&(n=$r(r,ht()));let s=[];const o=ut(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=cr(i,o);s=s.concat(vs(a,l,e,t))}return r&&(s=s.concat(zr(r,e,i,n))),s}}function bs(e,t,n,i){const r=t.get(ht());null==n&&null!=r&&(n=$r(r,ht()));let s=[];return t.children.inorderTraversal((t,r)=>{const o=n?n.getImmediateChild(t):null,a=cr(i,t),l=e.operationForChild(t);l&&(s=s.concat(bs(l,r,o,a)))}),r&&(s=s.concat(zr(r,e,i,n))),s}function ws(e,t){const n=t.query,i=Cs(e,n);return{hashFn:()=>{const e=Pr(t)||gn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?us(e,n._path,i):hs(e,n._path);{const i=B(t,n);return ds(e,n,null,i)}}}}function Cs(e,t){const n=Os(t);return e.queryToTagMap.get(n)}function Os(e){return e._path.toString()+"$"+e._queryIdentifier}function Ts(e,t){return e.tagToQueryMap.get(t)}function ks(e){const t=e.indexOf("$");return Object(s["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function Is(e,t,n){const i=e.syncPointTree_.get(t);Object(s["e"])(i,"Missing sync point for query tag that we're tracking");const r=Ui(e.pendingWriteTree_,t);return zr(i,n,r,null)}function Es(e){return e.fold((e,t,n)=>{if(t&&Zr(t)){const e=es(t);return[e]}{let e=[];return t&&(e=Gr(t)),L(n,(t,n)=>{e=e.concat(n)}),e}})}function Ss(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ns())(e._repo,e._path):e}function Ns(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Os(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function Ps(){return is++}function xs(e,t,n){const i=t._path,r=Cs(e,t),o=ws(e,n),a=e.listenProvider_.startListening(Ss(t),r,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(i);if(r)Object(s["e"])(!Zr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold((e,t,n)=>{if(!vt(e)&&t&&Zr(t))return[es(t).query];{let e=[];return t&&(e=e.concat(Gr(t).map(e=>e.query))),L(n,(t,n)=>{e=e.concat(n)}),e}});for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Ss(i),Cs(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new js(t)}node(){return this.node_}}class Rs{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=yt(this.path_,e);return new Rs(this.syncTree_,t)}node(){return gs(this.syncTree_,this.path_)}}const Ds=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Ms=function(e,t,n){return e&&"object"===typeof e?(Object(s["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?As(e[".sv"],t,n):"object"===typeof e[".sv"]?Fs(e[".sv"],t):void Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},As=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:Object(s["e"])(!1,"Unexpected server value: "+e)}},Fs=function(e,t,n){e.hasOwnProperty("increment")||Object(s["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&Object(s["e"])(!1,"Unexpected increment value: "+i);const r=t.node();if(Object(s["e"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r,a=o.getValue();return"number"!==typeof a?i:a+i},Ls=function(e,t,n,i){return Ws(t,new Rs(n,e),i)},qs=function(e,t,n){return Ws(e,new js(t),n)};function Ws(e,t,n){const i=e.getPriority().val(),r=Ms(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=Ms(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new rn(s,bn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new rn(r))),i.forEachChild(ln,(e,i)=>{const r=Ws(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))}),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Bs(e,t){let n=t instanceof ct?t:new ct(t),i=e,r=ut(n);while(null!==r){const e=Object(s["I"])(i.node.children,r)||{children:{},childCount:0};i=new Us(r,i,e),n=_t(n),r=ut(n)}return i}function Vs(e){return e.node.value}function Qs(e,t){e.node.value=t,Js(e)}function zs(e){return e.node.childCount>0}function Hs(e){return void 0===Vs(e)&&!zs(e)}function Ys(e,t){L(e.node.children,(n,i)=>{t(new Us(n,e,i))})}function Ks(e,t,n,i){n&&!i&&t(e),Ys(e,e=>{Ks(e,t,!0,i)}),n&&i&&t(e)}function Gs(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function $s(e){return new ct(null===e.parent?e.name:$s(e.parent)+"/"+e.name)}function Js(e){null!==e.parent&&Xs(e.parent,e.name,e)}function Xs(e,t,n){const i=Hs(n),r=Object(s["j"])(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Js(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Js(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=/[\[\].#$\/\u0000-\u001F\u007F]/,eo=/[\[\].#$\u0000-\u001F\u007F]/,to=10485760,no=function(e){return"string"===typeof e&&0!==e.length&&!Zs.test(e)},io=function(e){return"string"===typeof e&&0!==e.length&&!eo.test(e)},ro=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),io(e)},so=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!N(e)||e&&"object"===typeof e&&Object(s["j"])(e,".sv")},oo=function(e,t,n,i){i&&void 0===t||ao(Object(s["p"])(e,"value"),t,n)},ao=function(e,t,n){const i=n instanceof ct?new Tt(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+St(i));if("function"===typeof t)throw new Error(e+"contains a function "+St(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+St(i));if("string"===typeof t&&t.length>to/3&&Object(s["J"])(t)>to)throw new Error(e+"contains a string greater than "+to+" utf8 bytes "+St(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(L(t,(t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!no(t)))throw new Error(e+" contains an invalid key ("+t+") "+St(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');kt(i,t),ao(e,s,i),It(i)}),n&&r)throw new Error(e+' contains ".value" child '+St(i)+" in addition to actual children.")}},lo=function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const r=gt(i);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!no(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(wt);let r=null;for(n=0;n<t.length;n++){if(i=t[n],null!==r&&Ot(r,i))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},co=function(e,t,n,i){if(i&&void 0===t)return;const r=Object(s["p"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];L(t,(e,t)=>{const i=new ct(e);if(ao(r,t,yt(n,i)),".priority"===pt(i)&&!so(t))throw new Error(r+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(i)}),lo(r,o)},ho=function(e,t,n){if(!n||void 0!==t){if(N(t))throw new Error(Object(s["p"])(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!so(t))throw new Error(Object(s["p"])(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},uo=function(e,t,n,i){if((!i||void 0!==n)&&!no(n))throw new Error(Object(s["p"])(e,t)+'was an invalid key = "'+n+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},_o=function(e,t,n,i){if((!i||void 0!==n)&&!io(n))throw new Error(Object(s["p"])(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},po=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_o(e,t,n,i)},fo=function(e,t){if(".info"===ut(t))throw new Error(e+" failed = Can't modify data under /.info/")},go=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!no(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!ro(n))throw new Error(Object(s["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yo(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ct(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function vo(e,t,n){yo(e,n),wo(e,e=>Ct(e,t))}function bo(e,t,n){yo(e,n),wo(e,e=>Ot(e,t)||Ot(t,e))}function wo(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Co(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Co(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();b&&O("event: "+n.toString()),Y(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="repo_interrupt",To=25;class ko{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new mo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xn(),this.transactionQueueTree_=new Us,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Io(e,t,n){if(e.stats_=ge(e.repoInfo_),e.forceRestClient_||K())e.server_=new $n(e.repoInfo_,(t,n,i,r)=>{No(e,t,n,i,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Po(e,!0),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(s["L"])(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Lt(e.repoInfo_,t,(t,n,i,r)=>{No(e,t,n,i,r)},t=>{Po(e,t)},t=>{xo(e,t)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=me(e.repoInfo_,()=>new ai(e.stats_,e.server_)),e.infoData_=new Jn,e.infoSyncTree_=new rs({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=ls(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),s},stopListening:()=>{}}),jo(e,"connected",!1),e.serverSyncTree_=new rs({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,(n,i)=>{const s=r(n,i);bo(e.eventQueue_,t._path,s)}),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Eo(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function So(e){return Ds({timestamp:Eo(e)})}function No(e,t,n,i,r){e.dataUpdateCount++;const o=new ct(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(r)if(i){const t=Object(s["F"])(n,e=>bn(e));a=ps(e.serverSyncTree_,o,t,r)}else{const t=bn(n);a=_s(e.serverSyncTree_,o,t,r)}else if(i){const t=Object(s["F"])(n,e=>bn(e));a=cs(e.serverSyncTree_,o,t)}else{const t=bn(n);a=ls(e.serverSyncTree_,o,t)}let l=o;a.length>0&&(l=Xo(e,o)),bo(e.eventQueue_,l,a)}function Po(e,t){jo(e,"connected",t),!1===t&&Fo(e)}function xo(e,t){L(t,(t,n)=>{jo(e,t,n)})}function jo(e,t,n){const i=new ct("/.info/"+t),r=bn(n);e.infoData_.updateSnapshot(i,r);const s=ls(e.infoSyncTree_,i,r);bo(e.eventQueue_,i,s)}function Ro(e){return e.nextWriteId_++}function Do(e,t){const n=ms(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then(n=>{const i=bn(n).withIndex(t._queryParams.getIndex()),r=ls(e.serverSyncTree_,t._path,i);return vo(e.eventQueue_,t._path,r),Promise.resolve(i)},n=>(Ho(e,"get for query "+Object(s["L"])(t)+" failed: "+n),Promise.reject(new Error(n))))}function Mo(e,t,n,i,r){Ho(e,"set",{path:t.toString(),value:n,priority:i});const s=So(e),o=bn(n,i),a=gs(e.serverSyncTree_,t),l=qs(o,a,s),c=Ro(e),h=ss(e.serverSyncTree_,t,l,c,!0);yo(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(n,i)=>{const s="ok"===n;s||E("set at "+t+" failed: "+n);const o=as(e.serverSyncTree_,c,!s);bo(e.eventQueue_,t,o),Yo(e,r,n,i)});const u=ra(e,t);Xo(e,u),bo(e.eventQueue_,u,[])}function Ao(e,t,n,i){Ho(e,"update",{path:t.toString(),value:n});let r=!0;const s=So(e),o={};if(L(n,(n,i)=>{r=!1,o[n]=Ls(yt(t,n),bn(i),e.serverSyncTree_,s)}),r)O("update() called with empty data.  Don't do anything."),Yo(e,i,"ok",void 0);else{const r=Ro(e),s=os(e.serverSyncTree_,t,o,r);yo(e.eventQueue_,s),e.server_.merge(t.toString(),n,(n,s)=>{const o="ok"===n;o||E("update at "+t+" failed: "+n);const a=as(e.serverSyncTree_,r,!o),l=a.length>0?Xo(e,t):t;bo(e.eventQueue_,l,a),Yo(e,i,n,s)}),L(n,n=>{const i=ra(e,yt(t,n));Xo(e,i)}),bo(e.eventQueue_,t,[])}}function Fo(e){Ho(e,"onDisconnectEvents");const t=So(e),n=Xn();ti(e.onDisconnect_,ht(),(i,r)=>{const s=Ls(i,r,e.serverSyncTree_,t);Zn(n,i,s)});let i=[];ti(n,ht(),(t,n)=>{i=i.concat(ls(e.serverSyncTree_,t,n));const r=ra(e,t);Xo(e,r)}),e.onDisconnect_=Xn(),bo(e.eventQueue_,ht(),i)}function Lo(e,t,n){e.server_.onDisconnectCancel(t.toString(),(i,r)=>{"ok"===i&&ei(e.onDisconnect_,t),Yo(e,n,i,r)})}function qo(e,t,n,i){const r=bn(n);e.server_.onDisconnectPut(t.toString(),r.val(!0),(n,s)=>{"ok"===n&&Zn(e.onDisconnect_,t,r),Yo(e,i,n,s)})}function Wo(e,t,n,i,r){const s=bn(n,i);e.server_.onDisconnectPut(t.toString(),s.val(!0),(n,i)=>{"ok"===n&&Zn(e.onDisconnect_,t,s),Yo(e,r,n,i)})}function Uo(e,t,n,i){if(Object(s["w"])(n))return O("onDisconnect().update() called with empty data.  Don't do anything."),void Yo(e,i,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),n,(r,s)=>{"ok"===r&&L(n,(n,i)=>{const r=bn(i);Zn(e.onDisconnect_,yt(t,n),r)}),Yo(e,i,r,s)})}function Bo(e,t,n){let i;i=".info"===ut(t._path)?fs(e.infoSyncTree_,t,n):fs(e.serverSyncTree_,t,n),vo(e.eventQueue_,t._path,i)}function Vo(e,t,n){let i;i=".info"===ut(t._path)?ds(e.infoSyncTree_,t,n):ds(e.serverSyncTree_,t,n),vo(e.eventQueue_,t._path,i)}function Qo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Oo)}function zo(e){e.persistentConnection_&&e.persistentConnection_.resume(Oo)}function Ho(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),O(n,...t)}function Yo(e,t,n,i){t&&Y(()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}})}function Ko(e,t,n,i,r,o){Ho(e,"transaction on "+t);const a={path:t,update:n,onComplete:i,status:null,order:m(),applyLocally:o,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Go(e,t,void 0);a.currentInputSnapshot=l;const c=a.update(l.val());if(void 0===c)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{ao("transaction failed: Data returned ",c,a.path),a.status=0;const n=Bs(e.transactionQueueTree_,t),i=Vs(n)||[];let r;if(i.push(a),Qs(n,i),"object"===typeof c&&null!==c&&Object(s["j"])(c,".priority"))r=Object(s["I"])(c,".priority"),Object(s["e"])(so(r),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const n=gs(e.serverSyncTree_,t)||gn.EMPTY_NODE;r=n.getPriority().val()}const o=So(e),h=bn(c,r),u=qs(h,l,o);a.currentOutputSnapshotRaw=h,a.currentOutputSnapshotResolved=u,a.currentWriteId=Ro(e);const d=ss(e.serverSyncTree_,t,u,a.currentWriteId,a.applyLocally);bo(e.eventQueue_,t,d),$o(e,e.transactionQueueTree_)}}function Go(e,t,n){return gs(e.serverSyncTree_,t,n)||gn.EMPTY_NODE}function $o(e,t=e.transactionQueueTree_){if(t||ia(e,t),Vs(t)){const n=ta(e,t);Object(s["e"])(n.length>0,"Sending zero length transaction queue");const i=n.every(e=>0===e.status);i&&Jo(e,$s(t),n)}else zs(t)&&Ys(t,t=>{$o(e,t)})}function Jo(e,t,n){const i=n.map(e=>e.currentWriteId),r=Go(e,t,i);let o=r;const a=r.hash();for(let h=0;h<n.length;h++){const e=n[h];Object(s["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=bt(t,e.path);o=o.updateChild(i,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,i=>{Ho(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(as(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push(()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)),n[t].unwatcher();ia(e,Bs(e.transactionQueueTree_,t)),$o(e,e.transactionQueueTree_),bo(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Y(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{E("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Xo(e,t)}},a)}function Xo(e,t){const n=ea(e,t),i=$s(n),r=ta(e,n);return Zo(e,r,i),i}function Zo(e,t,n){if(0===t.length)return;const i=[];let r=[];const o=t.filter(e=>0===e.status),a=o.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){const o=t[l],c=bt(n,o.path);let h,u=!1;if(Object(s["e"])(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=To)u=!0,h="maxretry",r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0));else{const n=Go(e,o.path,a);o.currentInputSnapshot=n;const i=t[l].update(n.val());if(void 0!==i){ao("transaction failed: Data returned ",i,o.path);let t=bn(i);const l="object"===typeof i&&null!=i&&Object(s["j"])(i,".priority");l||(t=t.updatePriority(n.getPriority()));const c=o.currentWriteId,h=So(e),u=qs(t,n,h);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=u,o.currentWriteId=Ro(e),a.splice(a.indexOf(c),1),r=r.concat(ss(e.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),r=r.concat(as(e.serverSyncTree_,c,!0))}else u=!0,h="nodata",r=r.concat(as(e.serverSyncTree_,o.currentWriteId,!0))}bo(e.eventQueue_,n,r),r=[],u&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===h?i.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):i.push(()=>t[l].onComplete(new Error(h),!1,null))))}ia(e,e.transactionQueueTree_);for(let s=0;s<i.length;s++)Y(i[s]);$o(e,e.transactionQueueTree_)}function ea(e,t){let n,i=e.transactionQueueTree_;n=ut(t);while(null!==n&&void 0===Vs(i))i=Bs(i,n),t=_t(t),n=ut(t);return i}function ta(e,t){const n=[];return na(e,t,n),n.sort((e,t)=>e.order-t.order),n}function na(e,t,n){const i=Vs(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Ys(t,t=>{na(e,t,n)})}function ia(e,t){const n=Vs(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Qs(t,n.length>0?n:void 0)}Ys(t,t=>{ia(e,t)})}function ra(e,t){const n=$s(ea(e,t)),i=Bs(e.transactionQueueTree_,t);return Gs(i,t=>{sa(e,t)}),sa(e,i),Ks(i,t=>{sa(e,t)}),n}function sa(e,t){const n=Vs(t);if(n){const i=[];let r=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Object(s["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(Object(s["e"])(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(as(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Qs(t,void 0):n.length=o+1,bo(e.eventQueue_,$s(t),r);for(let e=0;e<i.length;e++)Y(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function aa(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):E(`Invalid query segment '${n}' in query '${e}'`)}return t}const la=function(e,t){const n=ca(e),i=n.namespace;"firebase.com"===n.domain&&I(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||I("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||S();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new he(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new ct(n.pathString)}},ca=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=oa(e.substring(h,u)));const d=aa(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const _=t.slice(0,c);if("localhost"===_.toLowerCase())n="localhost";else if(_.split(".").length<=2)n=_;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(s["L"])(this.snapshot.exportVal())}}class ua{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(s["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new s["a"];return Lo(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){fo("OnDisconnect.remove",this._path);const e=new s["a"];return qo(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){fo("OnDisconnect.set",this._path),oo("OnDisconnect.set",e,this._path,!1);const t=new s["a"];return qo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){fo("OnDisconnect.setWithPriority",this._path),oo("OnDisconnect.setWithPriority",e,this._path,!1),ho("OnDisconnect.setWithPriority",t,!1);const n=new s["a"];return Wo(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){fo("OnDisconnect.update",this._path),co("OnDisconnect.update",e,this._path,!1);const t=new s["a"];return Uo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return vt(this._path)?null:pt(this._path)}get ref(){return new ya(this._repo,this._path)}get _queryIdentifier(){const e=Gn(this._queryParams),t=A(e);return"{}"===t?"default":t}get _queryObject(){return Gn(this._queryParams)}isEqual(e){if(e=Object(s["r"])(e),!(e instanceof pa))return!1;const t=this._repo===e._repo,n=Ct(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ft(this._path)}}function fa(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ga(e){let t=null,n=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(n=e.getIndexEndValue()),e.getIndex()===Vt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const n=e.getIndexStartName();if(n!==x)throw new Error(i);if("string"!==typeof t)throw new Error(r)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==j)throw new Error(i);if("string"!==typeof n)throw new Error(r)}}else if(e.getIndex()===ln){if(null!=t&&!so(t)||null!=n&&!so(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(s["e"])(e.getIndex()instanceof wn||e.getIndex()===On,"unknown index type."),null!=t&&"object"===typeof t||null!=n&&"object"===typeof n)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function ma(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class ya extends pa{constructor(e,t){super(e,t,new qn,!1)}get parent(){const e=mt(this._path);return null===e?null:new ya(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class va{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),n=Ca(this.ref,e);return new va(this._node.getChild(t),n,ln)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,n)=>e(new va(n,Ca(this.ref,t),ln)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ba(e,t){return e=Object(s["r"])(e),e._checkNotDeleted("ref"),void 0!==t?Ca(e._root,t):e._root}function wa(e,t){e=Object(s["r"])(e),e._checkNotDeleted("refFromURL");const n=la(t,e._repo.repoInfo_.nodeAdmin);go("refFromURL",n);const i=n.repoInfo;return e._repo.repoInfo_.isCustomHost()||i.host===e._repo.repoInfo_.host||I("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+e._repo.repoInfo_.host+")"),ba(e,n.path.toString())}function Ca(e,t){return e=Object(s["r"])(e),null===ut(e._path)?po("child","path",t,!1):_o("child","path",t,!1),new ya(e._repo,yt(e._path,t))}function Oa(e,t){e=Object(s["r"])(e),fo("push",e._path),oo("push",t,e._path,!0);const n=Eo(e._repo),i=Sn(n),r=Ca(e,i),o=Ca(e,i);let a;return a=null!=t?ka(o,t).then(()=>o):Promise.resolve(o),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function Ta(e){return fo("remove",e._path),ka(e,null)}function ka(e,t){e=Object(s["r"])(e),fo("set",e._path),oo("set",t,e._path,!1);const n=new s["a"];return Mo(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}function Ia(e,t){e=Object(s["r"])(e),fo("setPriority",e._path),ho("setPriority",t,!1);const n=new s["a"];return Mo(e._repo,yt(e._path,".priority"),t,null,n.wrapCallback(()=>{})),n.promise}function Ea(e,t,n){if(fo("setWithPriority",e._path),oo("setWithPriority",t,e._path,!1),ho("setWithPriority",n,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const i=new s["a"];return Mo(e._repo,e._path,t,n,i.wrapCallback(()=>{})),i.promise}function Sa(e,t){co("update",t,e._path,!1);const n=new s["a"];return Ao(e._repo,e._path,t,n.wrapCallback(()=>{})),n.promise}function Na(e){return e=Object(s["r"])(e),Do(e._repo,e).then(t=>new va(t,new ya(e._repo,e._path),e._queryParams.getIndex()))}class Pa{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ha("value",this,new va(e.snapshotNode,new ya(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ua(this,e,t):null}matches(e){return e instanceof Pa&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class xa{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ua(this,e,t):null}createEvent(e,t){Object(s["e"])(null!=e.childName,"Child events should have a childName.");const n=Ca(new ya(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ha(e.type,this,new va(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof xa&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ja(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{Vo(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new da(n,s||void 0),a="value"===t?new Pa(o):new xa(t,o);return Bo(e._repo,e,a),()=>Vo(e._repo,e,a)}function Ra(e,t,n,i){return ja(e,"value",t,n,i)}function Da(e,t,n,i){return ja(e,"child_added",t,n,i)}function Ma(e,t,n,i){return ja(e,"child_changed",t,n,i)}function Aa(e,t,n,i){return ja(e,"child_moved",t,n,i)}function Fa(e,t,n,i){return ja(e,"child_removed",t,n,i)}function La(e,t,n){let i=null;const r=n?new da(n):null;"value"===t?i=new Pa(r):t&&(i=new xa(t,r)),Vo(e._repo,e,i)}class qa{}class Wa extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endAt",this._value,e._path,!0);const t=zn(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ua(e,t){return uo("endAt","key",t,!0),new Wa(e,t)}class Ba extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endBefore",this._value,e._path,!1);const t=Hn(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Va(e,t){return uo("endBefore","key",t,!0),new Ba(e,t)}class Qa extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAt",this._value,e._path,!0);const t=Vn(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function za(e=null,t){return uo("startAt","key",t,!0),new Qa(e,t)}class Ha extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAfter",this._value,e._path,!1);const t=Qn(e._queryParams,this._value,this._key);if(ma(t),ga(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new pa(e._repo,e._path,t,e._orderByCalled)}}function Ya(e,t){return uo("startAfter","key",t,!0),new Ha(e,t)}class Ka extends qa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,Un(e._queryParams,this._limit),e._orderByCalled)}}function Ga(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Ka(e)}class $a extends qa{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new pa(e._repo,e._path,Bn(e._queryParams,this._limit),e._orderByCalled)}}function Ja(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new $a(e)}class Xa extends qa{constructor(e){super(),this._path=e}_apply(e){fa(e,"orderByChild");const t=new ct(this._path);if(vt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new wn(t),i=Yn(e._queryParams,n);return ga(i),new pa(e._repo,e._path,i,!0)}}function Za(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return _o("orderByChild","path",e,!1),new Xa(e)}class el extends qa{_apply(e){fa(e,"orderByKey");const t=Yn(e._queryParams,Vt);return ga(t),new pa(e._repo,e._path,t,!0)}}function tl(){return new el}class nl extends qa{_apply(e){fa(e,"orderByPriority");const t=Yn(e._queryParams,ln);return ga(t),new pa(e._repo,e._path,t,!0)}}function il(){return new nl}class rl extends qa{_apply(e){fa(e,"orderByValue");const t=Yn(e._queryParams,On);return ga(t),new pa(e._repo,e._path,t,!0)}}function sl(){return new rl}class ol extends qa{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(oo("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Wa(this._value,this._key)._apply(new Qa(this._value,this._key)._apply(e))}}function al(e,t){return uo("equalTo","key",t,!0),new ol(e,t)}function ll(e,...t){let n=Object(s["r"])(e);for(const i of t)n=i._apply(n);return n}Br(ya),ts(ya);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cl="FIREBASE_DATABASE_EMULATOR_HOST",hl={};let ul=!1;function dl(e,t,n,i){e.repoInfo_=new he(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),i&&(e.authTokenProvider_=i)}function _l(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||I("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),O("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let a,l=la(o,s),c=l.repoInfo,h=void 0;"undefined"!==typeof e&&(h=Object({NODE_ENV:"production",BASE_URL:"/three-panel-comic-demo/"})[cl]),h?(a=!0,o=`http://${h}?ns=${c.namespace}`,l=la(o,s),c=l.repoInfo):a=!l.repoInfo.secure;const u=s&&a?new X(X.OWNER):new J(t.name,t.options,n);go("Invalid Firebase Database URL",l),vt(l.path)||I("Database URL must point to the root of a Firebase Database (not including a child path).");const d=fl(c,t,u,new $(t.name,i));return new gl(d,t)}function pl(e,t){const n=hl[t];n&&n[e.key]===e||I(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Qo(e),delete n[e.key]}function fl(e,t,n,i){let r=hl[t.name];r||(r={},hl[t.name]=r);let s=r[e.toURLString()];return s&&I("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ko(e,ul,n,i),r[e.toURLString()]=s,s}class gl{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Io(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ya(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(pl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&I("Cannot call "+e+" on a deleted database.")}}function ml(e,t,n,i={}){e=Object(s["r"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&I("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o=void 0;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&I('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:Object(s["k"])(i.mockUserToken,e.app.options.projectId);o=new X(t)}dl(r,t,n,o)}function yl(e){e=Object(s["r"])(e),e._checkNotDeleted("goOffline"),Qo(e._repo)}function vl(e){e=Object(s["r"])(e),e._checkNotDeleted("goOnline"),zo(e._repo)}function bl(e,t){C(e,t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e){h(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return _l(n,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Object(i["registerVersion"])(a,l,e),Object(i["registerVersion"])(a,l,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl={".sv":"timestamp"};function Ol(){return Cl}function Tl(e){return{".sv":{increment:e}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Il(e,t,n){var i;if(e=Object(s["r"])(e),fo("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const r=null===(i=null===n||void 0===n?void 0:n.applyLocally)||void 0===i||i,o=new s["a"],a=(t,n,i)=>{let r=null;t?o.reject(t):(r=new va(i,new ya(e._repo,e._path),ln),o.resolve(new kl(n,r)))},l=Ra(e,()=>{});return Ko(e._repo,e._path,t,a,l,r),o.promise}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Lt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};wl()}).call(this,n("4362"))},df7c:function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e){"string"!==typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",i=!1,s=arguments.length-1;s>=-1&&!i;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,i="/"===o.charAt(0))}return t=n(r(t.split("/"),(function(e){return!!e})),!i).join("/"),(i?"/":"")+t||"."},t.normalize=function(e){var i=t.isAbsolute(e),o="/"===s(e,-1);return e=n(r(e.split("/"),(function(e){return!!e})),!i).join("/"),e||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var n=e.length-1;n>=0;n--)if(""!==e[n])break;return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,l=0;l<o;l++)if(r[l]!==s[l]){a=l;break}var c=[];for(l=a;l<r.length;l++)c.push("..");return c=c.concat(s.slice(a)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),47===t){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=i(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var s="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("4362"))}}]);
//# sourceMappingURL=chunk-39cd7106.72756d33.js.map