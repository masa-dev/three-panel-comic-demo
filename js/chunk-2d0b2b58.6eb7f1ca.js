(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2b58"],{"24ee":function(e,t,n){"use strict";var r=n("7ded"),s=n("589b"),o=n("1fd5"),i=n("22e5");
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
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;class h extends o["c"]{constructor(e,t){super(d(e),`Firebase Storage: ${t} (${d(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(e){return d(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(e){return"storage/"+e}function _(){const e="An unknown error occurred, please check the error payload for server response.";return new h("unknown",e)}function p(e){return new h("object-not-found","Object '"+e+"' does not exist.")}function f(e){return new h("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",e)}function m(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function b(e){return new h("unauthorized","User does not have permission to access '"+e+"'.")}function w(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function k(){return new h("canceled","User canceled the upload/download.")}function R(e){return new h("invalid-url","Invalid URL '"+e+"'.")}function v(e){return new h("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function y(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function T(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function x(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function U(){return new h("no-download-url","The given file does not have any download URLs.")}function O(e){return new h("invalid-argument",e)}function S(){return new h("app-deleted","The Firebase app was deleted.")}function C(e){return new h("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function P(e,t){return new h("invalid-format","String does not match format '"+e+"': "+t)}function E(e){throw new h("internal-error","Internal error: "+e)}
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
 */class A{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=A.makeFromUrl(e,t)}catch(r){return new A(e,"")}if(""===n.path)return n;throw v(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function s(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",i=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",_=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},f=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",m=new RegExp(`^https?://${f}/${r}/${g}`,"i"),b={bucket:1,path:2},w=[{regex:i,indices:c,postModify:s},{regex:_,indices:p,postModify:u},{regex:m,indices:b,postModify:u}];for(let a=0;a<w.length;a++){const t=w[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let s=r[t.indices.path];s||(s=""),n=new A(e,s),t.postModify(n);break}}if(null==n)throw R(e);return n}}class I{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
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
 */function q(e,t,n){let r=1,s=null,o=!1,i=0;function a(){return 2===i}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function l(t){s=setTimeout(()=>{s=null,e(h,a())},t)}function h(e,...t){if(c)return;if(e)return void u.call(null,e,...t);const n=a()||o;if(n)return void u.call(null,e,...t);let s;r<64&&(r*=2),1===i?(i=2,s=0):s=1e3*(r+Math.random()),l(s)}let d=!1;function _(e){d||(d=!0,c||(null!==s?(e||(i=2),clearTimeout(s),l(0)):e||(i=1)))}return l(0),setTimeout(()=>{o=!0,_(!0)},n),_}function L(e){e(!1)}
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
 */function B(e){return void 0!==e}function M(e){return"function"===typeof e}function N(e){return"object"===typeof e&&!Array.isArray(e)}function j(e){return"string"===typeof e||e instanceof String}function F(e){return z()&&e instanceof Blob}function z(){return"undefined"!==typeof Blob}function D(e,t,n,r){if(r<t)throw O(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw O(`Invalid value for '${e}'. Expected ${n} or less.`)}
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
 */function H(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function $(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const s=t(r)+"="+t(e[r]);n=n+s+"&"}return n=n.slice(0,-1),n}
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
 */var G;(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(G||(G={}));
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
class W{constructor(e,t,n,r,s,o,i,a,c,u,l){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=i,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=(e,t)=>{if(t)return void e(!1,new X(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===G.NO_ERROR,s=n.getStatus();if(!t||this.isRetryStatusCode_(s)){const t=n.getErrorCode()===G.ABORT;return void e(!1,new X(!1,null,t))}const o=-1!==this.successCodes_.indexOf(s);e(!0,new X(o,n))})},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponseText());B(e)?n(e):n()}catch(o){r(o)}else if(null!==s){const e=_();e.serverResponse=s.getResponseText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){const e=this.appDelete_?S():k();r(e)}else{const e=w();r(e)}};this.canceled_?t(!1,new X(!1,null,!0)):this.backoffId_=q(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),s=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||s}}class X{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function V(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function K(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function J(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Z(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function Y(e,t,n,r,s,o){const i=$(e.urlParams),a=e.url+i,c=Object.assign({},e.headers);return J(c,t),V(c,n),K(c,o),Z(c,r),new W(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s)}
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
 */function Q(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ee(...e){const t=Q();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(z())return new Blob(e);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function te(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
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
 */function ne(e){return atob(e)}
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
 */const re={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class se{constructor(e,t){this.data=e,this.contentType=t||null}}function oe(e,t){switch(e){case re.RAW:return new se(ie(t));case re.BASE64:case re.BASE64URL:return new se(ce(e,t));case re.DATA_URL:return new se(le(t),he(t))}throw _()}function ie(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const s=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(s){const s=r,o=e.charCodeAt(++n);r=65536|(1023&s)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function ae(e){let t;try{t=decodeURIComponent(e)}catch(n){throw P(re.DATA_URL,"Malformed data URL.")}return ie(t)}function ce(e,t){switch(e){case re.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw P(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case re.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw P(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ne(t)}catch(s){throw P(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class ue{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw P(re.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=de(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function le(e){const t=new ue(e);return t.base64?ce(re.BASE64,t.rest):ae(t.rest)}function he(e){const t=new ue(e);return t.contentType}function de(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
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
 */class _e{constructor(e,t){let n=0,r="";F(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(F(this.data_)){const n=this.data_,r=te(n,e,t);return null===r?null:new _e(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new _e(n,!0)}}static getBlob(...e){if(z()){const t=e.map(e=>e instanceof _e?e.data_:e);return new _e(ee.apply(null,t))}{const t=e.map(e=>j(e)?oe(re.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let s=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]}),new _e(r,!0)}}uploadData(){return this.data_}}
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
 */function pe(e){let t;try{t=JSON.parse(e)}catch(n){return null}return N(t)?t:null}
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
 */function fe(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ge(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function me(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
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
 */function be(e,t){return t}class we{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||be}}let ke=null;function Re(e){return!j(e)||e.length<2?e:me(e)}function ve(){if(ke)return ke;const e=[];function t(e,t){return Re(t)}e.push(new we("bucket")),e.push(new we("generation")),e.push(new we("metageneration")),e.push(new we("name","fullPath",!0));const n=new we("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const s=new we("size");return s.xform=r,e.push(s),e.push(new we("timeCreated")),e.push(new we("updated")),e.push(new we("md5Hash",null,!0)),e.push(new we("cacheControl",null,!0)),e.push(new we("contentDisposition",null,!0)),e.push(new we("contentEncoding",null,!0)),e.push(new we("contentLanguage",null,!0)),e.push(new we("contentType",null,!0)),e.push(new we("metadata","customMetadata",!0)),ke=e,ke}function ye(e,t){function n(){const n=e["bucket"],r=e["fullPath"],s=new A(n,r);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function Te(e,t,n){const r={type:"file"},s=n.length;for(let o=0;o<s;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return ye(r,e),r}function xe(e,t,n){const r=pe(t);if(null===r)return null;const s=r;return Te(e,s,n)}function Ue(e,t,n,r){const s=pe(t);if(null===s)return null;if(!j(s["downloadTokens"]))return null;const o=s["downloadTokens"];if(0===o.length)return null;const i=encodeURIComponent,a=o.split(","),c=a.map(t=>{const s=e["bucket"],o=e["fullPath"],a="/b/"+i(s)+"/o/"+i(o),c=H(a,n,r),u=$({alt:"media",token:t});return c+u});return c[0]}function Oe(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
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
 */const Se="prefixes",Ce="items";function Pe(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Se])for(const s of n[Se]){const n=s.replace(/\/$/,""),o=e._makeStorageReference(new A(t,n));r.prefixes.push(o)}if(n[Ce])for(const s of n[Ce]){const n=e._makeStorageReference(new A(t,s["name"]));r.items.push(n)}return r}function Ee(e,t,n){const r=pe(n);if(null===r)return null;const s=r;return Pe(e,t,s)}class Ae{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function Ie(e){if(!e)throw _()}function qe(e,t){function n(n,r){const s=xe(e,r,t);return Ie(null!==s),s}return n}function Le(e,t){function n(n,r){const s=Ee(e,t,r);return Ie(null!==s),s}return n}function Be(e,t){function n(n,r){const s=xe(e,r,t);return Ie(null!==s),Ue(s,r,e.host,e._protocol)}return n}function Me(e){function t(t,n){let r;return r=401===t.getStatus()?t.getResponseText().includes("Firebase App Check token is invalid")?m():g():402===t.getStatus()?f(e.bucket):403===t.getStatus()?b(e.path):n,r.serverResponse=n.serverResponse,r}return t}function Ne(e){const t=Me(e);function n(n,r){let s=t(n,r);return 404===n.getStatus()&&(s=p(e.path)),s.serverResponse=r.serverResponse,s}return n}function je(e,t,n){const r=t.fullServerUrl(),s=H(r,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new Ae(s,o,qe(e,n),i);return a.errorHandler=Ne(t),a}function Fe(e,t,n,r,s){const o={};t.isRoot?o["prefix"]="":o["prefix"]=t.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),s&&(o["maxResults"]=s);const i=t.bucketOnlyServerUrl(),a=H(i,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new Ae(a,c,Le(e,t.bucket),u);return l.urlParams=o,l.errorHandler=Me(t),l}function ze(e,t,n){const r=t.fullServerUrl(),s=H(r,e.host,e._protocol),o="GET",i=e.maxOperationRetryTime,a=new Ae(s,o,Be(e,n),i);return a.errorHandler=Ne(t),a}function De(e,t,n,r){const s=t.fullServerUrl(),o=H(s,e.host,e._protocol),i="PATCH",a=Oe(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new Ae(o,i,qe(e,r),u);return l.headers=c,l.body=a,l.errorHandler=Ne(t),l}function He(e,t){const n=t.fullServerUrl(),r=H(n,e.host,e._protocol),s="DELETE",o=e.maxOperationRetryTime;function i(e,t){}const a=new Ae(r,s,i,o);return a.successCodes=[200,204],a.errorHandler=Ne(t),a}function $e(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ge(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=$e(null,t)),r}function We(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const u=Ge(t,r,s),l=Oe(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",_=_e.getBlob(h,r,d);if(null===_)throw T();const p={name:u["fullPath"]},f=H(o,e.host,e._protocol),g="POST",m=e.maxUploadRetryTime,b=new Ae(f,g,qe(e,n),m);return b.urlParams=p,b.headers=i,b.body=_.uploadData(),b.errorHandler=Me(t),b}class Xe{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Ve(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(s){Ie(!1)}const r=t||["active"];return Ie(!!n&&-1!==r.indexOf(n)),n}function Ke(e,t,n,r,s){const o=t.bucketOnlyServerUrl(),i=Ge(t,r,s),a={name:i["fullPath"]},c=H(o,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":i["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Oe(i,n),d=e.maxUploadRetryTime;function _(e){let t;Ve(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Ie(!1)}return Ie(j(t)),t}const p=new Ae(c,u,_,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Me(t),p}function Je(e,t,n,r){const s={"X-Goog-Upload-Command":"query"};function o(e){const t=Ve(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){Ie(!1)}n||Ie(!1);const s=Number(n);return Ie(!isNaN(s)),new Xe(s,r.size(),"final"===t)}const i="POST",a=e.maxUploadRetryTime,c=new Ae(n,i,o,a);return c.headers=s,c.errorHandler=Me(t),c}const Ze=262144;function Ye(e,t,n,r,s,o,i,a){const c=new Xe(0,0);if(i?(c.current=i.current,c.total=i.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw x();const u=c.total-c.current;let l=u;s>0&&(l=Math.min(l,s));const h=c.current,d=h+l,_=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":_,"X-Goog-Upload-Offset":""+c.current},f=r.slice(h,d);if(null===f)throw T();function g(e,n){const s=Ve(e,["active","final"]),i=c.current+l,a=r.size();let u;return u="final"===s?qe(t,o)(e,n):null,new Xe(i,a,"final"===s,u)}const m="POST",b=t.maxUploadRetryTime,w=new Ae(n,m,g,b);return w.headers=p,w.body=f.uploadData(),w.progressCallback=a||null,w.errorHandler=Me(e),w}
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
 */const Qe={STATE_CHANGED:"state_changed"},et={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function tt(e){switch(e){case"running":case"pausing":case"canceling":return et.RUNNING;case"paused":return et.PAUSED;case"success":return et.SUCCESS;case"canceled":return et.CANCELED;case"error":return et.ERROR;default:return et.ERROR}}
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
 */class nt{constructor(e,t,n){const r=M(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
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
 */function rt(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
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
 */let st=null;class ot{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=G.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=G.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=G.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw E("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw E("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw E("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw E("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function it(){return st?st():new ot}
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
 */class at{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ve(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Ke(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,it,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=Je(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(r,it,t,n);this._request=s,s.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ze*this._chunkMultiplier,t=new Xe(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,s)=>{let o;try{o=Ye(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const i=this._ref.storage._makeRequest(o,it,r,s);this._request=i,i.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=Ze*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=je(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,it,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=We(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,it,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=k(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=tt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const s=new nt(t||void 0,n||void 0,r||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(tt(this._state)){case et.SUCCESS:rt(this._resolve.bind(null,this.snapshot))();break;case et.CANCELED:case et.ERROR:const t=this._reject;rt(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=tt(this._state);switch(t){case et.RUNNING:case et.PAUSED:e.next&&rt(e.next.bind(e,this.snapshot))();break;case et.SUCCESS:e.complete&&rt(e.complete.bind(e))();break;case et.CANCELED:case et.ERROR:e.error&&rt(e.error.bind(e,this._error))();break;default:e.error&&rt(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
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
 */class ct{constructor(e,t){this._service=e,this._location=t instanceof A?t:A.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ct(e,t)}get root(){const e=new A(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return me(this._location.path)}get storage(){return this._service}get parent(){const e=fe(this._location.path);if(null===e)return null;const t=new A(this._location.bucket,e);return new ct(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw C(e)}}function ut(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new at(e,new _e(t),n)}function lt(e){const t={prefixes:[],items:[]};return ht(e,t).then(()=>t)}async function ht(e,t,n){const r={pageToken:n},s=await dt(e,r);t.prefixes.push(...s.prefixes),t.items.push(...s.items),null!=s.nextPageToken&&await ht(e,t,s.nextPageToken)}function dt(e,t){null!=t&&"number"===typeof t.maxResults&&D("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Fe(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,it)}function _t(e){e._throwIfRoot("getMetadata");const t=je(e.storage,e._location,ve());return e.storage.makeRequestWithTokens(t,it)}function pt(e,t){e._throwIfRoot("updateMetadata");const n=De(e.storage,e._location,t,ve());return e.storage.makeRequestWithTokens(n,it)}function ft(e){e._throwIfRoot("getDownloadURL");const t=ze(e.storage,e._location,ve());return e.storage.makeRequestWithTokens(t,it).then(e=>{if(null===e)throw U();return e})}function gt(e){e._throwIfRoot("deleteObject");const t=He(e.storage,e._location);return e.storage.makeRequestWithTokens(t,it)}function mt(e,t){const n=ge(e._location.path,t),r=new A(e._location.bucket,n);return new ct(e.storage,r)}
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
 */function bt(e){return/^[A-Za-z]+:\/\//.test(e)}function wt(e,t){return new ct(e,t)}function kt(e,t){if(e instanceof Tt){const n=e;if(null==n._bucket)throw y();const r=new ct(n,n._bucket);return null!=t?kt(r,t):r}return void 0!==t?mt(e,t):e}function Rt(e,t){if(t&&bt(t)){if(e instanceof Tt)return wt(e,t);throw O("To use ref(service, url), the first argument must be a Storage instance.")}return kt(e,t)}function vt(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:A.makeFromBucketSpec(n,e)}function yt(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:Object(o["f"])(s,e.app.options.projectId))}class Tt{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=r?A.makeFromBucketSpec(r,this._host):vt(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=A.makeFromBucketSpec(this._url,e):this._bucket=vt(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){D("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){D("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ct(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new I(S());{const s=Y(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const xt="@firebase/storage",Ut="0.8.6",Ot="storage";function St(e,t,n){return e=Object(o["k"])(e),ut(e,t,n)}function Ct(e){return e=Object(o["k"])(e),_t(e)}function Pt(e,t){return e=Object(o["k"])(e),pt(e,t)}function Et(e,t){return e=Object(o["k"])(e),dt(e,t)}function At(e){return e=Object(o["k"])(e),lt(e)}function It(e){return e=Object(o["k"])(e),ft(e)}function qt(e){return e=Object(o["k"])(e),gt(e)}function Lt(e,t){return e=Object(o["k"])(e),Rt(e,t)}function Bt(e,t){return mt(e,t)}function Mt(e,t,n,r={}){yt(e,t,n,r)}function Nt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Tt(n,r,o,t,s["SDK_VERSION"])}function jt(){Object(s["_registerComponent"])(new i["a"](Ot,Nt,"PUBLIC").setMultipleInstances(!0)),Object(s["registerVersion"])(xt,Ut,""),Object(s["registerVersion"])(xt,Ut,"esm2017")}jt();
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
class Ft{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
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
 */class zt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ft(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new Ft(t,this,this._ref))},t)}on(e,t,n,r){let s=void 0;return t&&(s="function"===typeof t?e=>t(new Ft(e,this,this._ref)):{next:t.next?e=>t.next(new Ft(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,s,n||void 0,r||void 0)}}class Dt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Ht(e,this._service))}get items(){return this._delegate.items.map(e=>new Ht(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Bt(this._delegate,e);return new Ht(t,this.storage)}get root(){return new Ht(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Ht(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new zt(St(this._delegate,e,t),this)}putString(e,t=re.RAW,n){this._throwIfRoot("putString");const r=oe(t,e),s=Object.assign({},n);return null==s["contentType"]&&null!=r.contentType&&(s["contentType"]=r.contentType),new zt(new at(this._delegate,new _e(r.data,!0),s),this)}listAll(){return At(this._delegate).then(e=>new Dt(e,this.storage))}list(e){return Et(this._delegate,e||void 0).then(e=>new Dt(e,this.storage))}getMetadata(){return Ct(this._delegate)}updateMetadata(e){return Pt(this._delegate,e)}getDownloadURL(){return It(this._delegate)}delete(){return this._throwIfRoot("delete"),qt(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw C(e)}}
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
 */class $t{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Gt(e))throw O("ref() expected a child path but got a URL, use refFromURL instead.");return new Ht(Lt(this._delegate,e),this)}refFromURL(e){if(!Gt(e))throw O("refFromURL() expected a full URL but got a child path, use ref() instead.");try{A.makeFromUrl(e,this._delegate.host)}catch(t){throw O("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ht(Lt(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){Mt(this._delegate,e,t,n)}}function Gt(e){return/^[A-Za-z]+:\/\//.test(e)}const Wt="@firebase/storage-compat",Xt="0.1.6",Vt="storage-compat";function Kt(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),s=new $t(n,r);return s}function Jt(e){const t={TaskState:et,TaskEvent:Qe,StringFormat:re,Storage:$t,Reference:Ht};e.INTERNAL.registerComponent(new i["a"](Vt,Kt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Wt,Xt)}Jt(r["a"])}}]);
//# sourceMappingURL=chunk-2d0b2b58.6eb7f1ca.js.map