(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(e,t,a){"use strict";a("ac1f");var n=a("23e7"),r=a("da84"),i=a("c65b"),o=a("e330"),s=a("1626"),l=a("861d"),c=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),h=r.Error,u=o(/./.test);n({target:"RegExp",proto:!0,forced:!c},{test:function(e){var t=this.exec;if(!s(t))return u(this,e);var a=i(t,this,e);if(null!==a&&!l(a))throw new h("RegExp exec method returned something other than an Object or null");return!!a}})},"00ee":function(e,t,a){var n=a("b622"),r=n("toStringTag"),i={};i[r]="z",e.exports="[object z]"===String(i)},"0366":function(e,t,a){var n=a("e330"),r=a("59ed"),i=n(n.bind);e.exports=function(e,t){return r(e),void 0===t?e:i?i(e,t):function(){return e.apply(t,arguments)}}},"057f":function(e,t,a){var n=a("c6b6"),r=a("fc6a"),i=a("241c").f,o=a("f36a"),s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],l=function(e){try{return i(e)}catch(t){return o(s)}};e.exports.f=function(e){return s&&"Window"==n(e)?l(e):i(r(e))}},"06cf":function(e,t,a){var n=a("83ab"),r=a("c65b"),i=a("d1e7"),o=a("5c6c"),s=a("fc6a"),l=a("a04b"),c=a("1a2d"),h=a("0cfb"),u=Object.getOwnPropertyDescriptor;t.f=n?u:function(e,t){if(e=s(e),t=l(t),h)try{return u(e,t)}catch(a){}if(c(e,t))return o(!r(i.f,e,t),e[t])}},"07fa":function(e,t,a){var n=a("50c4");e.exports=function(e){return n(e.length)}},"0b42":function(e,t,a){var n=a("da84"),r=a("e8b5"),i=a("68ee"),o=a("861d"),s=a("b622"),l=s("species"),c=n.Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===c||r(t.prototype))?t=void 0:o(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?c:t}},"0cfb":function(e,t,a){var n=a("83ab"),r=a("d039"),i=a("cc12");e.exports=!n&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,a){var n=a("da84"),r=n.String;e.exports=function(e){try{return r(e)}catch(t){return"Object"}}},"107c":function(e,t,a){var n=a("d039"),r=a("da84"),i=r.RegExp;e.exports=n((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,a){var n=a("da84"),r=a("3a9b"),i=n.TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},"1a2d":function(e,t,a){var n=a("e330"),r=a("7b0b"),i=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(r(e),t)}},"1be4":function(e,t,a){var n=a("d066");e.exports=n("document","documentElement")},"1c7e":function(e,t,a){var n=a("b622"),r=n("iterator"),i=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){i=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!i)return!1;var a=!1;try{var n={};n[r]=function(){return{next:function(){return{done:a=!0}}}},e(n)}catch(l){}return a}},"1cdc":function(e,t,a){var n=a("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},"1d80":function(e,t,a){var n=a("da84"),r=n.TypeError;e.exports=function(e){if(void 0==e)throw r("Can't call method on "+e);return e}},"1dde":function(e,t,a){var n=a("d039"),r=a("b622"),i=a("2d00"),o=r("species");e.exports=function(e){return i>=51||!n((function(){var t=[],a=t.constructor={};return a[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1f5a":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return xe})),a.d(t,"c",(function(){return ct})),a.d(t,"d",(function(){return pt})),a.d(t,"e",(function(){return ft})),a.d(t,"f",(function(){return vt})),a.d(t,"g",(function(){return Ze})),a.d(t,"h",(function(){return dt})),a.d(t,"i",(function(){return Bn})),a.d(t,"j",(function(){return Wr})),a.d(t,"k",(function(){return l})),a.d(t,"l",(function(){return In})),a.d(t,"m",(function(){return zt})),a.d(t,"n",(function(){return yt})),a.d(t,"o",(function(){return _t})),a.d(t,"p",(function(){return A})),a.d(t,"q",(function(){return Se})),a.d(t,"r",(function(){return z})),a.d(t,"s",(function(){return Ea})),a.d(t,"t",(function(){return w})),a.d(t,"u",(function(){return ir})),a.d(t,"v",(function(){return pe})),a.d(t,"x",(function(){return Ut})),a.d(t,"y",(function(){return La})),a.d(t,"z",(function(){return Ur})),a.d(t,"A",(function(){return Sa})),a.d(t,"B",(function(){return qt})),a.d(t,"C",(function(){return Dt})),a.d(t,"D",(function(){return Fe})),a.d(t,"F",(function(){return Wt})),a.d(t,"G",(function(){return d})),a.d(t,"H",(function(){return Xt})),a.d(t,"I",(function(){return pa})),a.d(t,"J",(function(){return ma})),a.d(t,"K",(function(){return rr})),a.d(t,"L",(function(){return de})),a.d(t,"M",(function(){return an})),a.d(t,"N",(function(){return Jt})),a.d(t,"O",(function(){return Et})),a.d(t,"P",(function(){return Hn})),a.d(t,"Q",(function(){return Dn})),a.d(t,"R",(function(){return ar})),a.d(t,"S",(function(){return Aa})),a.d(t,"T",(function(){return Ot})),a.d(t,"U",(function(){return Ln})),a.d(t,"V",(function(){return jn})),a.d(t,"W",(function(){return er})),a.d(t,"X",(function(){return Zt})),a.d(t,"Y",(function(){return jt})),a.d(t,"Z",(function(){return Kt})),a.d(t,"ab",(function(){return It})),a.d(t,"bb",(function(){return Ft})),a.d(t,"cb",(function(){return Pt})),a.d(t,"db",(function(){return Gt})),a.d(t,"eb",(function(){return Qt})),a.d(t,"fb",(function(){return Cn})),a.d(t,"gb",(function(){return Nn})),a.d(t,"hb",(function(){return Xn})),a.d(t,"ib",(function(){return Ht})),a.d(t,"jb",(function(){return na})),a.d(t,"kb",(function(){return ra})),a.d(t,"lb",(function(){return Sn})),a.d(t,"mb",(function(){return aa})),a.d(t,"nb",(function(){return ea})),a.d(t,"ob",(function(){return $t})),a.d(t,"w",(function(){return bi})),a.d(t,"E",(function(){return Mi}));var n=a("1fd5"),r=a("589b");function i(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}Object.create;Object.create;var o=a("e691"),s=a("22e5");
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
const l={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},c={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
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
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function u(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=h,p=u,v=new n["b"]("auth","Firebase",u()),f=new o["b"]("@firebase/auth");function m(e,...t){f.logLevel<=o["a"].ERROR&&f.error(`Auth (${r["SDK_VERSION"]}): ${e}`,...t)}
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
 */function z(e,...t){throw M(e,...t)}function g(e,...t){return M(e,...t)}function y(e,t,a){const r=Object.assign(Object.assign({},p()),{[t]:a}),i=new n["b"]("auth","Firebase",r);return i.create(t,{appName:e.name})}function _(e,t,a){const n=a;if(!(t instanceof n))throw n.name!==t.constructor.name&&z(e,"argument-error"),y(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function M(e,...t){if("string"!==typeof e){const a=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(a,...n)}return v.create(e,...t)}function A(e,t,...a){if(!e)throw M(t,...a)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw m(t),new Error(t)}function I(e,t){e||b(t)}
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
 */const V=new Map;function w(e){I(e instanceof Function,"Expected a class definition");let t=V.get(e);return t?(I(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,V.set(e,t),t)}
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
 */function C(e,t){const a=(null===t||void 0===t?void 0:t.persistence)||[],n=(Array.isArray(a)?a:[a]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function H(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function L(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(L()||Object(n["v"])()||"connection"in navigator))||navigator.onLine}function B(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class F{constructor(e,t){this.shortDelay=e,this.longDelay=t,I(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(n["z"])()||Object(n["C"])()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function E(e,t){I(e.emulator,"Emulator should always be set here");const{url:a}=e.emulator;return t?`${a}${t.startsWith("/")?t.slice(1):t}`:a}
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
 */class O{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const T={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new F(3e4,6e4);
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
 */function x(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,a,r,i={}){return N(e,i,()=>{let i={},o={};r&&("GET"===t?o=r:i={body:JSON.stringify(r)});const s=Object(n["G"])(Object.assign({key:e.config.apiKey},o)).slice(1),l=new(O.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&l.set("X-Firebase-Locale",e.languageCode),O.fetch()(D(e,e.config.apiHost,a,s),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))})}async function N(e,t,a){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},T),t);try{const t=new U(e),n=await Promise.race([a(),t.promise]);t.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw q(e,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const t=n.ok?i.errorMessage:i.error.message,[a,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===a)throw q(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===a)throw q(e,"email-already-in-use",i);const s=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw y(e,s,o);z(e,s)}}catch(i){if(i instanceof n["c"])throw i;z(e,"network-request-failed")}}async function j(e,t,a,n,r={}){const i=await R(e,t,a,n,r);return"mfaPendingCredential"in i&&z(e,"multi-factor-auth-required",{_serverResponse:i}),i}function D(e,t,a,n){const r=`${t}${a}?${n}`;return e.config.emulator?E(e.config,r):`${e.config.apiScheme}://${r}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(g(this.auth,"timeout")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function q(e,t,a){const n={appName:e.name};a.email&&(n.email=a.email),a.phoneNumber&&(n.phoneNumber=a.phoneNumber);const r=g(e,t,n);return r.customData._tokenResponse=a,r}
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
 */async function $(e,t){return R(e,"POST","/v1/accounts:delete",t)}async function W(e,t){return R(e,"POST","/v1/accounts:update",t)}async function G(e,t){return R(e,"POST","/v1/accounts:lookup",t)}
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
 */function K(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function J(e,t=!1){const a=Object(n["r"])(e),r=await a.getIdToken(t),i=Y(r);A(i&&i.exp&&i.auth_time&&i.iat,a.auth,"internal-error");const o="object"===typeof i.firebase?i.firebase:void 0,s=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:i,token:r,authTime:K(Q(i.auth_time)),issuedAtTime:K(Q(i.iat)),expirationTime:K(Q(i.exp)),signInProvider:s||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Q(e){return 1e3*Number(e)}function Y(e){const[t,a,r]=e.split(".");if(void 0===t||void 0===a||void 0===r)return m("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(n["h"])(a);return e?JSON.parse(e):(m("Failed to decode base64 JWT payload"),null)}catch(i){return m("Caught error parsing JWT payload as JSON",i),null}}function X(e){const t=Y(e);return A(t,"internal-error"),A("undefined"!==typeof t.exp,"internal-error"),A("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Z(e,t,a=!1){if(a)return t;try{return await t}catch(r){throw r instanceof n["c"]&&ee(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ee({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class te{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,a=e-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class ae{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ne(e){var t;const a=e.auth,n=await e.getIdToken(),r=await Z(e,G(a,{idToken:n}));A(null===r||void 0===r?void 0:r.users.length,a,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?oe(i.providerUserInfo):[],s=ie(e.providerData,o),l=e.isAnonymous,c=!(e.email&&i.passwordHash)&&!(null===s||void 0===s?void 0:s.length),h=!!l&&c,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ae(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(e,u)}async function re(e){const t=Object(n["r"])(e);await ne(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ie(e,t){const a=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...a,...t]}function oe(e){return e.map(e=>{var{providerId:t}=e,a=i(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}
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
 */async function se(e,t){const a=await N(e,{},()=>{const a=Object(n["G"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=D(e,r,"/v1/token","key="+i);return O.fetch()(o,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:a})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}
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
 */class le{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A("undefined"!==typeof e.idToken,"internal-error"),A("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):X(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return A(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:n,expiresIn:r}=await se(e,t);this.updateTokensAndExpiration(a,n,Number(r))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*a}static fromJSON(e,t){const{refreshToken:a,accessToken:n,expirationTime:r}=t,i=new le;return a&&(A("string"===typeof a,"internal-error",{appName:e}),i.refreshToken=a),n&&(A("string"===typeof n,"internal-error",{appName:e}),i.accessToken=n),r&&(A("number"===typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new le,this.toJSON())}_performRefresh(){return b("not implemented")}}
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
 */function ce(e,t){A("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:a,stsTokenManager:n}=e,r=i(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new te(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new ae(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Z(this,this.stsTokenManager.getToken(this.auth,e));return A(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return J(this,e)}reload(){return re(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await ne(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Z(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,n,r,i,o,s,l,c;const h=null!==(a=t.displayName)&&void 0!==a?a:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(i=t.photoURL)&&void 0!==i?i:void 0,v=null!==(o=t.tenantId)&&void 0!==o?o:void 0,f=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,z=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:g,emailVerified:y,isAnonymous:_,providerData:M,stsTokenManager:b}=t;A(g&&b,e,"internal-error");const I=le.fromJSON(this.name,b);A("string"===typeof g,e,"internal-error"),ce(h,e.name),ce(u,e.name),A("boolean"===typeof y,e,"internal-error"),A("boolean"===typeof _,e,"internal-error"),ce(d,e.name),ce(p,e.name),ce(v,e.name),ce(f,e.name),ce(m,e.name),ce(z,e.name);const V=new he({uid:g,auth:e,email:u,emailVerified:y,displayName:h,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:I,createdAt:m,lastLoginAt:z});return M&&Array.isArray(M)&&(V.providerData=M.map(e=>Object.assign({},e))),f&&(V._redirectEventId=f),V}static async _fromIdTokenResponse(e,t,a=!1){const n=new le;n.updateFromServerResponse(t);const r=new he({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:a});return await ne(r),r}}
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
 */class ue{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ue.type="NONE";const de=ue;
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
 */function pe(e,t,a){return`firebase:${e}:${t}:${a}`}class ve{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:n,name:r}=this.auth;this.fullUserKey=pe(this.userKey,n.apiKey,r),this.fullPersistenceKey=pe("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new ve(w(de),e,a);const n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let r=n[0]||w(de);const i=pe(a,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(i);if(t){const a=he._fromJSON(e,t);c!==r&&(o=a),r=c;break}}catch(l){}const s=n.filter(e=>e._shouldAllowMigration);return r._shouldAllowMigration&&s.length?(r=s[0],o&&await r._set(i,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==r)try{await e._remove(i)}catch(l){}})),new ve(r,e,a)):new ve(r,e,a)}}
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
 */function fe(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ye(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(me(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Me(t))return"Blackberry";if(Ae(t))return"Webos";if(ze(t))return"Safari";if((t.includes("chrome/")||ge(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=e.match(t);if(2===(null===a||void 0===a?void 0:a.length))return a[1]}return"Other"}function me(e=Object(n["s"])()){return/firefox\//i.test(e)}function ze(e=Object(n["s"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ge(e=Object(n["s"])()){return/crios\//i.test(e)}function ye(e=Object(n["s"])()){return/iemobile/i.test(e)}function _e(e=Object(n["s"])()){return/android/i.test(e)}function Me(e=Object(n["s"])()){return/blackberry/i.test(e)}function Ae(e=Object(n["s"])()){return/webos/i.test(e)}function be(e=Object(n["s"])()){return/iphone|ipad|ipod/i.test(e)}function Ie(e=Object(n["s"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Ve(e=Object(n["s"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function we(){return Object(n["x"])()&&10===document.documentMode}function Ce(e=Object(n["s"])()){return be(e)||_e(e)||Ae(e)||Me(e)||/windows phone/i.test(e)||ye(e)}function He(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Le(e,t=[]){let a;switch(e){case"Browser":a=fe(Object(n["s"])());break;case"Worker":a=`${fe(Object(n["s"])())}-${e}`;break;default:a=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${a}/JsCore/${r["SDK_VERSION"]}/${i}`}
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
 */class ke{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Be(this),this.idTokenSubscription=new Be(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=v,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var a,n;this._deleted||(this.persistenceManager=await ve.create(this,e),this._deleted||((null===(a=this._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let a=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null===a||void 0===a?void 0:a._redirectEventId,i=await this.tryRedirectSignIn(e);n&&n!==r||!(null===i||void 0===i?void 0:i.user)||(a=i.user)}return a?a._redirectEventId?(A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)):this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(a){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ne(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(n["r"])(e):null;return t&&A(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new n["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return null===e?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;A(t,this,"argument-error"),this.redirectPersistenceManager=await ve.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(a=this.redirectUser)||void 0===a?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,n){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return A(i,this,"internal-error"),i.then(()=>r(this.currentUser)),"function"===typeof t?e.addObserver(t,a,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Le(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Se(e){return Object(n["r"])(e)}class Be{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(n["l"])(e=>this.observer=e)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Fe(e,t,a){const n=Se(e);A(n._canInitEmulator,n,"emulator-config-failed"),A(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!!(null===a||void 0===a?void 0:a.disableWarnings),i=Ee(t),{host:o,port:s}=Oe(t),l=null===s?"":":"+s;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:s,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Pe()}function Ee(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oe(e){const t=Ee(e),a=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!a)return{host:"",port:null};const n=a[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const e=r[1];return{host:e,port:Te(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Te(t)}}}function Te(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Pe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
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
 */async function Re(e,t){return R(e,"POST","/v1/accounts:resetPassword",x(e,t))}async function Ne(e,t){return R(e,"POST","/v1/accounts:update",t)}async function je(e,t){return R(e,"POST","/v1/accounts:update",x(e,t))}
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
 */async function De(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",x(e,t))}async function Ue(e,t){return R(e,"POST","/v1/accounts:sendOobCode",x(e,t))}async function qe(e,t){return Ue(e,t)}async function $e(e,t){return Ue(e,t)}async function We(e,t){return Ue(e,t)}async function Ge(e,t){return Ue(e,t)}
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
 */async function Ke(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}async function Je(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",x(e,t))}
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
 */class Qe extends xe{constructor(e,t,a,n=null){super("password",a),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Qe(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new Qe(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return De(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ke(e,{email:this._email,oobCode:this._password});default:z(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ne(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:z(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ye(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",x(e,t))}
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
 */const Xe="http://localhost";class Ze extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):z("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:a,signInMethod:n}=t,r=i(t,["providerId","signInMethod"]);if(!a||!n)return null;const o=new Ze(a,n);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,Ye(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}buildRequest(){const e={requestUri:Xe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(n["G"])(t)}return e}}
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
 */async function et(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",x(e,t))}async function tt(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t))}async function at(e,t){const a=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,t));if(a.temporaryProof)throw q(e,"account-exists-with-different-credential",a);return a}const nt={["USER_NOT_FOUND"]:"user-not-found"};async function rt(e,t){const a=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",x(e,a),nt)}
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
 */class it extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new it({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new it({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return tt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return at(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return rt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:a,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:a,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:a,phoneNumber:n,temporaryProof:r}=e;return a||t||n||r?new it({verificationId:t,verificationCode:a,phoneNumber:n,temporaryProof:r}):null}}
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
 */function ot(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function st(e){const t=Object(n["H"])(Object(n["q"])(e))["link"],a=t?Object(n["H"])(Object(n["q"])(t))["deep_link_id"]:null,r=Object(n["H"])(Object(n["q"])(e))["deep_link_id"],i=r?Object(n["H"])(Object(n["q"])(r))["link"]:null;return i||r||a||t||e}class lt{constructor(e){var t,a,r,i,o,s;const l=Object(n["H"])(Object(n["q"])(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,h=null!==(a=l["oobCode"])&&void 0!==a?a:null,u=ot(null!==(r=l["mode"])&&void 0!==r?r:null);A(c&&h&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=h,this.continueUrl=null!==(i=l["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(s=l["tenantId"])&&void 0!==s?s:null}static parseLink(e){const t=st(e);try{return new lt(t)}catch(a){return null}}}
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
class ct{constructor(){this.providerId=ct.PROVIDER_ID}static credential(e,t){return Qe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=lt.parseLink(t);return A(a,"argument-error"),Qe._fromEmailAndCode(e,a.code,a.tenantId)}}ct.PROVIDER_ID="password",ct.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ct.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ht{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class ut extends ht{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class dt extends ut{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return A("providerId"in t&&"signInMethod"in t,"argument-error"),Ze._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return A(e.idToken||e.accessToken,"argument-error"),Ze._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return dt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return dt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a,oauthTokenSecret:n,pendingToken:r,nonce:i,providerId:o}=e;if(!a&&!n&&!t&&!r)return null;if(!o)return null;try{return new dt(o)._credential({idToken:t,accessToken:a,nonce:i,pendingToken:r})}catch(s){return null}}}
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
 */class pt extends ut{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch(t){return null}}}pt.FACEBOOK_SIGN_IN_METHOD="facebook.com",pt.PROVIDER_ID="facebook.com";
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
class vt extends ut{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return vt.credential(t,a)}catch(n){return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com",vt.PROVIDER_ID="google.com";
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
class ft extends ut{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch(t){return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com",ft.PROVIDER_ID="github.com";
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
const mt="http://localhost";class zt extends xe{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ye(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,Ye(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ye(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:a,signInMethod:n,pendingToken:r}=t;return a&&n&&r&&a===n?new zt(a,r):null}static _create(e,t){return new zt(e,t)}buildRequest(){return{requestUri:mt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */const gt="saml.";class yt extends ht{constructor(e){A(e.startsWith(gt),"argument-error"),super(e)}static credentialFromResult(e){return yt.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return yt.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=zt.fromJSON(e);return A(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:a}=e;if(!t||!a)return null;try{return zt._create(a,t)}catch(n){return null}}}
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
 */class _t extends ut{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return _t.credential(t,a)}catch(n){return null}}}
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
async function Mt(e,t){return j(e,"POST","/v1/accounts:signUp",x(e,t))}
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
 */_t.TWITTER_SIGN_IN_METHOD="twitter.com",_t.PROVIDER_ID="twitter.com";class At{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,n=!1){const r=await he._fromIdTokenResponse(e,a,n),i=bt(a),o=new At({user:r,providerId:i,_tokenResponse:a,operationType:t});return o}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const n=bt(a);return new At({user:e,providerId:n,_tokenResponse:a,operationType:t})}}function bt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */async function It(e){var t;const a=Se(e);if(await a._initializationPromise,null===(t=a.currentUser)||void 0===t?void 0:t.isAnonymous)return new At({user:a.currentUser,providerId:null,operationType:"signIn"});const n=await Mt(a,{returnSecureToken:!0}),r=await At._fromIdTokenResponse(a,"signIn",n,!0);return await a._updateCurrentUser(r.user),r}
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
 */class Vt extends n["c"]{constructor(e,t,a,n){var r;super(t.code,t.message),this.operationType=a,this.user=n,Object.setPrototypeOf(this,Vt.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,n){return new Vt(e,t,a,n)}}function wt(e,t,a,n){const r="reauthenticate"===t?a._getReauthenticationResolver(e):a._getIdTokenResponse(e);return r.catch(a=>{if("auth/multi-factor-auth-required"===a.code)throw Vt._fromErrorAndOperation(e,a,t,n);throw a})}
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
 */function Ct(e){return new Set(e.map(({providerId:e})=>e).filter(e=>!!e))}
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
 */async function Ht(e,t){const a=Object(n["r"])(e);await kt(!0,a,t);const{providerUserInfo:r}=await W(a.auth,{idToken:await a.getIdToken(),deleteProvider:[t]}),i=Ct(r||[]);return a.providerData=a.providerData.filter(e=>i.has(e.providerId)),i.has("phone")||(a.phoneNumber=null),await a.auth._persistUserIfCurrent(a),a}async function Lt(e,t,a=!1){const n=await Z(e,t._linkToIdToken(e.auth,await e.getIdToken()),a);return At._forOperation(e,"link",n)}async function kt(e,t,a){await ne(t);const n=Ct(t.providerData),r=!1===e?"provider-already-linked":"no-such-provider";A(n.has(a)===e,t.auth,r)}
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
 */async function St(e,t,a=!1){const{auth:n}=e,r="reauthenticate";try{const i=await Z(e,wt(n,r,t,e),a);A(i.idToken,n,"internal-error");const o=Y(i.idToken);A(o,n,"internal-error");const{sub:s}=o;return A(e.uid===s,n,"user-mismatch"),At._forOperation(e,r,i)}catch(i){throw"auth/user-not-found"===(null===i||void 0===i?void 0:i.code)&&z(n,"user-mismatch"),i}}
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
 */async function Bt(e,t,a=!1){const n="signIn",r=await wt(e,n,t),i=await At._fromIdTokenResponse(e,n,r);return a||await e._updateCurrentUser(i.user),i}async function Ft(e,t){return Bt(Se(e),t)}async function Et(e,t){const a=Object(n["r"])(e);return await kt(!1,a,t.providerId),Lt(a,t)}async function Ot(e,t){return St(Object(n["r"])(e),t)}
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
 */async function Tt(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",x(e,t))}
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
 */async function Pt(e,t){const a=Se(e),n=await Tt(a,{token:t,returnSecureToken:!0}),r=await At._fromIdTokenResponse(a,"signIn",n);return await a._updateCurrentUser(r.user),r}
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
 */class xt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Rt._fromServerResponse(e,t):z(e,"internal-error")}}class Rt extends xt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Rt(t)}}
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
 */function Nt(e,t,a){var n;A((null===(n=a.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),A("undefined"===typeof a.dynamicLinkDomain||a.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=a.url,t.dynamicLinkDomain=a.dynamicLinkDomain,t.canHandleCodeInApp=a.handleCodeInApp,a.iOS&&(A(a.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=a.iOS.bundleId),a.android&&(A(a.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=a.android.installApp,t.androidMinimumVersionCode=a.android.minimumVersion,t.androidPackageName=a.android.packageName)}
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
 */async function jt(e,t,a){const r=Object(n["r"])(e),i={requestType:"PASSWORD_RESET",email:t};a&&Nt(r,i,a),await $e(r,i)}async function Dt(e,t,a){await Re(Object(n["r"])(e),{oobCode:t,newPassword:a})}async function Ut(e,t){await je(Object(n["r"])(e),{oobCode:t})}async function qt(e,t){const a=Object(n["r"])(e),r=await Re(a,{oobCode:t}),i=r.requestType;switch(A(i,a,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":A(r.newEmail,a,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":A(r.mfaInfo,a,"internal-error");default:A(r.email,a,"internal-error")}let o=null;return r.mfaInfo&&(o=xt._fromServerResponse(Se(a),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function $t(e,t){const{data:a}=await qt(Object(n["r"])(e),t);return a.email}async function Wt(e,t,a){const n=Se(e),r=await Mt(n,{returnSecureToken:!0,email:t,password:a}),i=await At._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function Gt(e,t,a){return Ft(Object(n["r"])(e),ct.credential(t,a))}
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
 */async function Kt(e,t,a){const r=Object(n["r"])(e),i={requestType:"EMAIL_SIGNIN",email:t};A(a.handleCodeInApp,r,"argument-error"),a&&Nt(r,i,a),await We(r,i)}function Jt(e,t){const a=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===a||void 0===a?void 0:a.operation)}async function Qt(e,t,a){const r=Object(n["r"])(e),i=ct.credentialWithLink(t,a||H());return A(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ft(r,i)}
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
 */async function Yt(e,t){return R(e,"POST","/v1/accounts:createAuthUri",x(e,t))}
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
 */async function Xt(e,t){const a=L()?H():"http://localhost",r={identifier:t,continueUri:a},{signinMethods:i}=await Yt(Object(n["r"])(e),r);return i||[]}async function Zt(e,t){const a=Object(n["r"])(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&Nt(a.auth,i,t);const{email:o}=await qe(a.auth,i);o!==e.email&&await e.reload()}async function ea(e,t,a){const r=Object(n["r"])(e),i=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};a&&Nt(r.auth,o,a);const{email:s}=await Ge(r.auth,o);s!==e.email&&await e.reload()}
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
 */async function ta(e,t){return R(e,"POST","/v1/accounts:update",t)}
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
 */async function aa(e,{displayName:t,photoURL:a}){if(void 0===t&&void 0===a)return;const r=Object(n["r"])(e),i=await r.getIdToken(),o={idToken:i,displayName:t,photoUrl:a,returnSecureToken:!0},s=await Z(r,ta(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const l=r.providerData.find(({providerId:e})=>"password"===e);l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function na(e,t){return ia(Object(n["r"])(e),t,null)}function ra(e,t){return ia(Object(n["r"])(e),null,t)}async function ia(e,t,a){const{auth:n}=e,r=await e.getIdToken(),i={idToken:r,returnSecureToken:!0};t&&(i.email=t),a&&(i.password=a);const o=await Z(e,Ne(n,i));await e._updateTokensIfNecessary(o,!0)}
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
 */function oa(e){var t,a;if(!e)return null;const{providerId:n}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},i=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null===e||void 0===e?void 0:e.idToken)){const n=null===(a=null===(t=Y(e.idToken))||void 0===t?void 0:t.firebase)||void 0===a?void 0:a["sign_in_provider"];if(n){const e="anonymous"!==n&&"custom"!==n?n:null;return new sa(i,e)}}if(!n)return null;switch(n){case"facebook.com":return new ca(i,r);case"github.com":return new ha(i,r);case"google.com":return new ua(i,r);case"twitter.com":return new da(i,r,e.screenName||null);case"custom":case"anonymous":return new sa(i,null);default:return new sa(i,n,r)}}class sa{constructor(e,t,a={}){this.isNewUser=e,this.providerId=t,this.profile=a}}class la extends sa{constructor(e,t,a,n){super(e,t,a),this.username=n}}class ca extends sa{constructor(e,t){super(e,"facebook.com",t)}}class ha extends la{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class ua extends sa{constructor(e,t){super(e,"google.com",t)}}class da extends la{constructor(e,t,a){super(e,"twitter.com",t,a)}}function pa(e){const{user:t,_tokenResponse:a}=e;return t.isAnonymous&&!a?{providerId:null,isNewUser:!1,profile:null}:oa(a)}
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
 */class va{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new va("enroll",e)}static _fromMfaPendingCredential(e){return new va("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,a;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return va._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(a=e.multiFactorSession)||void 0===a?void 0:a.idToken)return va._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class fa{constructor(e,t,a){this.session=e,this.hints=t,this.signInResolver=a}static _fromError(e,t){const a=Se(e),n=t.customData._serverResponse,r=(n.mfaInfo||[]).map(e=>xt._fromServerResponse(a,e));A(n.mfaPendingCredential,a,"internal-error");const i=va._fromMfaPendingCredential(n.mfaPendingCredential);return new fa(i,r,async e=>{const r=await e._process(a,i);delete n.mfaInfo,delete n.mfaPendingCredential;const o=Object.assign(Object.assign({},n),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await At._fromIdTokenResponse(a,t.operationType,o);return await a._updateCurrentUser(e.user),e;case"reauthenticate":return A(t.user,a,"internal-error"),At._forOperation(t.user,t.operationType,o);default:z(a,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function ma(e,t){var a;const r=Object(n["r"])(e),i=t;return A(t.customData.operationType,r,"argument-error"),A(null===(a=i.customData._serverResponse)||void 0===a?void 0:a.mfaPendingCredential,r,"argument-error"),fa._fromError(r,i)}
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
 */function za(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",x(e,t))}function ga(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:finalize",x(e,t))}function ya(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:withdraw",x(e,t))}class _a{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>xt._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new _a(e)}async getSession(){return va._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const a=e,n=await this.getSession(),r=await Z(this.user,a._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,a=await this.user.getIdToken(),n=await Z(this.user,ya(this.user.auth,{idToken:a,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(n);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const Ma=new WeakMap;function Aa(e){const t=Object(n["r"])(e);return Ma.has(t)||Ma.set(t,_a._fromUser(t)),Ma.get(t)}const ba="__sak";
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
 */class Ia{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ba,"1"),this.storage.removeItem(ba),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function Va(){const e=Object(n["s"])();return ze(e)||be(e)}const wa=1e3,Ca=10;class Ha extends Ia{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Va()&&He(),this.fallbackToPolling=Ce(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),n=this.localCache[t];a!==n&&e(t,n,a)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,a)=>{this.notifyListeners(e,a)});const a=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(a);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(a);(t||this.localCache[a]!==e)&&this.notifyListeners(a,e)},r=this.storage.getItem(a);we()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Ca):n()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},wa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ha.type="LOCAL";const La=Ha;
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
 */class ka extends Ia{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ka.type="SESSION";const Sa=ka;
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
 */function Ba(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const a=new Fa(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:n,data:r}=t.data,i=this.handlersMap[n];if(!(null===i||void 0===i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:n});const o=Array.from(i).map(async e=>e(t.origin,r)),s=await Ba(o);t.ports[0].postMessage({status:"done",eventId:a,eventType:n,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ea(e="",t=10){let a="";for(let n=0;n<t;n++)a+=Math.floor(10*Math.random());return e+a}
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
 */Fa.receivers=[];class Oa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const n="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,i;return new Promise((o,s)=>{const l=Ea("",20);n.port1.start();const c=setTimeout(()=>{s(new Error("unsupported_event"))},a);i={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout(()=>{s(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),s(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}
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
 */function Ta(){return window}function Pa(e){Ta().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function xa(){return"undefined"!==typeof Ta()["WorkerGlobalScope"]&&"function"===typeof Ta()["importScripts"]}async function Ra(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Na(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function ja(){return xa()?self:null}
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
 */const Da="firebaseLocalStorageDb",Ua=1,qa="firebaseLocalStorage",$a="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ga(e,t){return e.transaction([qa],t?"readwrite":"readonly").objectStore(qa)}function Ka(){const e=indexedDB.deleteDatabase(Da);return new Wa(e).toPromise()}function Ja(){const e=indexedDB.open(Da,Ua);return new Promise((t,a)=>{e.addEventListener("error",()=>{a(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(qa,{keyPath:$a})}catch(n){a(n)}}),e.addEventListener("success",async()=>{const a=e.result;a.objectStoreNames.contains(qa)?t(a):(a.close(),await Ka(),t(await Ja()))})})}async function Qa(e,t,a){const n=Ga(e,!0).put({[$a]:t,value:a});return new Wa(n).toPromise()}async function Ya(e,t){const a=Ga(e,!1).get(t),n=await new Wa(a).toPromise();return void 0===n?null:n.value}function Xa(e,t){const a=Ga(e,!0).delete(t);return new Wa(a).toPromise()}const Za=800,en=3;class tn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ja()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(a){if(t++>en)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(ja()),this.receiver._subscribe("keyChanged",async(e,t)=>{const a=await this._poll();return{keyProcessed:a.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ra(),!this.activeServiceWorker)return;this.sender=new Oa(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&(null===(e=a[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=a[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Na()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ja();return await Qa(e,ba,"1"),await Xa(e,ba),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>Qa(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>Ya(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Ga(e,!1).getAll();return new Wa(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],a=new Set;for(const{fbase_key:n,value:r}of e)a.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!a.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const n of Array.from(a))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Za)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tn.type="LOCAL";const an=tn;
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
 */function nn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:start",x(e,t))}function rn(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:finalize",x(e,t))}
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
 */async function on(e){return(await R(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
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
 */function sn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function ln(e){return new Promise((t,a)=>{const n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=g("internal-error");t.customData=e,a(t)},n.type="text/javascript",n.charset="UTF-8",sn().appendChild(n)})}function cn(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
 */const hn=500,un=6e4,dn=1e12;class pn{constructor(e){this.auth=e,this.counter=dn,this._widgets=new Map}render(e,t){const a=this.counter;return this._widgets.set(a,new vn(e,this.auth.name,t||{})),this.counter++,a}reset(e){var t;const a=e||dn;null===(t=this._widgets.get(a))||void 0===t||t.delete(),this._widgets.delete(a)}getResponse(e){var t;const a=e||dn;return(null===(t=this._widgets.get(a))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const a=e||dn;return null===(t=this._widgets.get(a))||void 0===t||t.execute(),""}}class vn{constructor(e,t,a){this.params=a,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"===typeof e?document.getElementById(e):e;A(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=fn(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(a){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(a){}this.isVisible&&this.execute()},un)},hn))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function fn(e){const t=[],a="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<e;n++)t.push(a.charAt(Math.floor(Math.random()*a.length)));return t.join("")}
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
 */const mn=cn("rcb"),zn=new F(3e4,6e4),gn="https://www.google.com/recaptcha/api.js?";class yn{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Ta().grecaptcha}load(e,t=""){return A(_n(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Ta().grecaptcha):new Promise((a,r)=>{const i=Ta().setTimeout(()=>{r(g(e,"network-request-failed"))},zn.get());Ta()[mn]=()=>{Ta().clearTimeout(i),delete Ta()[mn];const n=Ta().grecaptcha;if(!n)return void r(g(e,"internal-error"));const o=n.render;n.render=(e,t)=>{const a=o(e,t);return this.counter++,a},this.hostLanguage=t,a(n)};const o=`${gn}?${Object(n["G"])({onload:mn,render:"explicit",hl:t})}`;ln(o).catch(()=>{clearTimeout(i),r(g(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!Ta().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _n(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Mn{async load(e){return new pn(e)}clearedOneInstance(){}}
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
 */const An="recaptcha",bn={theme:"light",type:"image"};class In{constructor(e,t=Object.assign({},bn),a){this.parameters=t,this.type=An,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Se(a),this.isInvisible="invisible"===this.parameters.size,A("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"===typeof e?document.getElementById(e):e;A(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Mn:new yn,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),a=t.getResponse(e);return a||new Promise(a=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),a(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){A(!this.parameters.sitekey,this.auth,"argument-error"),A(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),A("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(e=>e(t)),"function"===typeof e)e(t);else if("string"===typeof e){const a=Ta()[e];"function"===typeof a&&a(t)}}}assertNotDestroyed(){A(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){A(L()&&!xa(),this.auth,"internal-error"),await Vn(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await on(this.auth);A(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return A(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Vn(){let e=null;return new Promise(t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()}).catch(t=>{throw e&&window.removeEventListener("load",e),t})}
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
 */class wn{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=it._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Cn(e,t,a){const r=Se(e),i=await kn(r,t,Object(n["r"])(a));return new wn(i,e=>Ft(r,e))}async function Hn(e,t,a){const r=Object(n["r"])(e);await kt(!1,r,"phone");const i=await kn(r.auth,t,Object(n["r"])(a));return new wn(i,e=>Et(r,e))}async function Ln(e,t,a){const r=Object(n["r"])(e),i=await kn(r.auth,t,Object(n["r"])(a));return new wn(i,e=>Ot(r,e))}async function kn(e,t,a){var n;const r=await a.verify();try{let i;if(A("string"===typeof r,e,"argument-error"),A(a.type===An,e,"argument-error"),i="string"===typeof t?{phoneNumber:t}:t,"session"in i){const t=i.session;if("phoneNumber"in i){A("enroll"===t.type,e,"internal-error");const a=await za(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:r}});return a.phoneSessionInfo.sessionInfo}{A("signin"===t.type,e,"internal-error");const a=(null===(n=i.multiFactorHint)||void 0===n?void 0:n.uid)||i.multiFactorUid;A(a,e,"missing-multi-factor-info");const o=await nn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await et(e,{phoneNumber:i.phoneNumber,recaptchaToken:r});return t}}finally{a._reset()}}async function Sn(e,t){await Lt(Object(n["r"])(e),t)}
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
 */class Bn{constructor(e){this.providerId=Bn.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return kn(this.auth,e,Object(n["r"])(t))}static credential(e,t){return it._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Bn.credentialFromTaggedObject(t)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:a}=e;return t&&a?it._fromTokenResponse(t,a):null}}
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
function Fn(e,t){return t?w(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Bn.PROVIDER_ID="phone",Bn.PHONE_SIGN_IN_METHOD="phone";class En extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ye(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ye(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ye(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function On(e){return Bt(e.auth,new En(e),e.bypassAuthState)}function Tn(e){const{auth:t,user:a}=e;return A(a,t,"internal-error"),St(a,new En(e),e.bypassAuthState)}async function Pn(e){const{auth:t,user:a}=e;return A(a,t,"internal-error"),Lt(a,new En(e),e.bypassAuthState)}
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
 */class xn{constructor(e,t,a,n,r=!1){this.auth=e,this.resolver=a,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:n,tenantId:r,error:i,type:o}=e;if(i)return void this.reject(i);const s={auth:this.auth,requestUri:t,sessionId:a,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(s))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return On;case"linkViaPopup":case"linkViaRedirect":return Pn;case"reauthViaPopup":case"reauthViaRedirect":return Tn;default:z(this.auth,"internal-error")}}resolve(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){I(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Rn=new F(2e3,1e4);async function Nn(e,t,a){const n=Se(e);_(e,t,ht);const r=Fn(n,a),i=new Un(n,"signInViaPopup",t,r);return i.executeNotNull()}async function jn(e,t,a){const r=Object(n["r"])(e);_(r.auth,t,ht);const i=Fn(r.auth,a),o=new Un(r.auth,"reauthViaPopup",t,i,r);return o.executeNotNull()}async function Dn(e,t,a){const r=Object(n["r"])(e);_(r.auth,t,ht);const i=Fn(r.auth,a),o=new Un(r.auth,"linkViaPopup",t,i,r);return o.executeNotNull()}class Un extends xn{constructor(e,t,a,n,r){super(e,t,n,r),this.provider=a,this.authWindow=null,this.pollId=null,Un.currentPopupAction&&Un.currentPopupAction.cancel(),Un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){I(1===this.filter.length,"Popup operations only handle one event");const e=Ea();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;(null===(a=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===a?void 0:a.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,Rn.get())};e()}}Un.currentPopupAction=null;
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
const qn="pendingRedirect",$n=new Map;class Wn extends xn{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const t=await Gn(this.resolver,this.auth),a=t?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gn(e,t){const a=Yn(t),n=Qn(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(a);return await n._remove(a),r}async function Kn(e,t){return Qn(e)._set(Yn(t),"true")}function Jn(){$n.clear()}function Qn(e){return w(e._redirectPersistence)}function Yn(e){return pe(qn,e.config.apiKey,e.name)}
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
 */function Xn(e,t,a){return Zn(e,t,a)}async function Zn(e,t,a){const n=Se(e);_(e,t,ht);const r=Fn(n,a);return await Kn(r,n),r._openRedirect(n,t,"signInViaRedirect")}function er(e,t,a){return tr(e,t,a)}async function tr(e,t,a){const r=Object(n["r"])(e);_(r.auth,t,ht);const i=Fn(r.auth,a);await Kn(i,r.auth);const o=await or(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",o)}function ar(e,t,a){return nr(e,t,a)}async function nr(e,t,a){const r=Object(n["r"])(e);_(r.auth,t,ht);const i=Fn(r.auth,a);await kt(!1,r,t.providerId),await Kn(i,r.auth);const o=await or(r);return i._openRedirect(r.auth,t,"linkViaRedirect",o)}async function rr(e,t){return await Se(e)._initializationPromise,ir(e,t,!1)}async function ir(e,t,a=!1){const n=Se(e),r=Fn(n,t),i=new Wn(n,r,a),o=await i.execute();return o&&!a&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}async function or(e){const t=Ea(e.uid+":::");return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */const sr=6e5;class lr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ur(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!hr(e)){const n=(null===(a=e.error.code)||void 0===a?void 0:a.split("auth/")[1])||"internal-error";t.onError(g(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sr&&this.cachedEventUids.clear(),this.cachedEventUids.has(cr(e))}saveEventToCache(e){this.cachedEventUids.add(cr(e)),this.lastProcessedEventTime=Date.now()}}function cr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function hr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ur(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hr(e);default:return!1}}
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
 */async function dr(e,t={}){return R(e,"GET","/v1/projects",t)}
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
 */const pr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vr=/^https?/;async function fr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await dr(e);for(const n of t)try{if(mr(n))return}catch(a){}z(e,"unauthorized-domain")}function mr(e){const t=H(),{protocol:a,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===a&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===a&&r.hostname===n}if(!vr.test(a))return!1;if(pr.test(e))return n===e;const r=e.replace(/\./g,"\\."),i=new RegExp("^(.+\\."+r+"|"+r+")$","i");return i.test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const zr=new F(3e4,6e4);function gr(){const e=Ta().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let a=0;a<e.CP.length;a++)e.CP[a]=null}function yr(e){return new Promise((t,a)=>{var n,r,i;function o(){gr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{gr(),a(g(e,"network-request-failed"))},timeout:zr.get()})}if(null===(r=null===(n=Ta().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=Ta().gapi)||void 0===i?void 0:i.load)){const t=cn("iframefcb");return Ta()[t]=()=>{gapi.load?o():a(g(e,"network-request-failed"))},ln("https://apis.google.com/js/api.js?onload="+t)}o()}}).catch(e=>{throw _r=null,e})}let _r=null;function Mr(e){return _r=_r||yr(e),_r}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Ar=new F(5e3,15e3),br="__/auth/iframe",Ir="emulator/auth/iframe",Vr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cr(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const a=t.emulator?E(t,Ir):`https://${e.config.authDomain}/${br}`,i={apiKey:t.apiKey,appName:e.name,v:r["SDK_VERSION"]},o=wr.get(e.config.apiHost);o&&(i.eid=o);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${a}?${Object(n["G"])(i).slice(1)}`}async function Hr(e){const t=await Mr(e),a=Ta().gapi;return A(a,e,"internal-error"),t.open({where:document.body,url:Cr(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vr,dontclear:!0},t=>new Promise(async(a,n)=>{await t.restyle({setHideOnLeave:!1});const r=g(e,"network-request-failed"),i=Ta().setTimeout(()=>{n(r)},Ar.get());function o(){Ta().clearTimeout(i),a(t)}t.ping(o).then(o,()=>{n(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Lr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kr=500,Sr=600,Br="_blank",Fr="http://localhost";class Er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Or(e,t,a,r=kr,i=Sr){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Lr),{width:r.toString(),height:i.toString(),top:o,left:s}),h=Object(n["s"])().toLowerCase();a&&(l=ge(h)?Br:a),me(h)&&(t=t||Fr,c.scrollbars="yes");const u=Object.entries(c).reduce((e,[t,a])=>`${e}${t}=${a},`,"");if(Ve(h)&&"_self"!==l)return Tr(t||"",l),new Er(null);const d=window.open(t||"",l,u);A(d,e,"popup-blocked");try{d.focus()}catch(p){}return new Er(d)}function Tr(e,t){const a=document.createElement("a");a.href=e,a.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(n)}
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
 */const Pr="__/auth/handler",xr="emulator/auth/handler";function Rr(e,t,a,i,o,s){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:a,redirectUrl:i,v:r["SDK_VERSION"],eventId:o};if(t instanceof ht){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",Object(n["w"])(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))l[e]=t}if(t instanceof ut){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const n of Object.keys(c))void 0===c[n]&&delete c[n];return`${Nr(e)}?${Object(n["G"])(c).slice(1)}`}function Nr({config:e}){return e.emulator?E(e,xr):`https://${e.authDomain}/${Pr}`}
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
 */const jr="webStorageSupport";class Dr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sa,this._completeRedirectFn=ir}async _openPopup(e,t,a,n){var r;I(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const i=Rr(e,t,a,H(),n);return Or(e,i,Ea())}async _openRedirect(e,t,a,n){return await this._originValidation(e),Pa(Rr(e,t,a,H(),n)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:a}=this.eventManagers[t];return e?Promise.resolve(e):(I(a,"If manager is not set, promise should be"),a)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a}async initAndGetManager(e){const t=await Hr(e),a=new lr(e);return t.register("authEvent",t=>{A(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const n=a.onEvent(t.authEvent);return{status:n?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){const a=this.iframes[e._key()];a.send(jr,{type:jr},a=>{var n;const r=null===(n=null===a||void 0===a?void 0:a[0])||void 0===n?void 0:n[jr];void 0!==r&&t(!!r),z(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ce()||ze()||be()}}const Ur=Dr;class qr{constructor(e){this.factorId=e}_process(e,t,a){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,a);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class $r extends qr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new $r(e)}_finalizeEnroll(e,t,a){return ga(e,{idToken:t,displayName:a,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return rn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wr{constructor(){}static assertion(e){return $r._fromCredential(e)}}Wr.FACTOR_ID="phone";var Gr="@firebase/auth",Kr="0.19.2";
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
class Jr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var a;e((null===(a=t)||void 0===a?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function Qr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yr(e){Object(r["_registerComponent"])(new s["a"]("auth",(t,{options:a})=>{const n=t.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(t=>{A(r&&!r.includes(":"),"invalid-api-key",{appName:t.name}),A(!(null===i||void 0===i?void 0:i.includes(":")),"argument-error",{appName:t.name});const n={apiKey:r,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Le(e)},o=new ke(t,n);return C(o,a),o})(n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{const n=e.getProvider("auth-internal");n.initialize()})),Object(r["_registerComponent"])(new s["a"]("auth-internal",e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new Jr(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["registerVersion"])(Gr,Kr,Qr(e)),Object(r["registerVersion"])(Gr,Kr,"esm2017")}
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
function Xr(){return window}
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
 */Yr("Browser");const Zr=2e3;async function ei(e,t,a){var n;const{BuildInfo:r}=Xr();I(t.sessionId,"AuthEvent did not contain a session ID");const i=await ii(t.sessionId),o={};return be()?o["ibi"]=r.packageName:_e()?o["apn"]=r.packageName:z(e,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=i,Rr(e,a,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,o)}async function ti(e){const{BuildInfo:t}=Xr(),a={};be()?a.iosBundleId=t.packageName:_e()?a.androidPackageName=t.packageName:z(e,"operation-not-supported-in-this-environment"),await dr(e,a)}function ai(e){const{cordova:t}=Xr();return new Promise(a=>{t.plugins.browsertab.isAvailable(n=>{let r=null;n?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,Ie()?"_blank":"_system","location=yes"),a(r)})})}async function ni(e,t,a){const{cordova:n}=Xr();let r=()=>{};try{await new Promise((i,o)=>{let s=null;function l(){var e;i();const t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===a||void 0===a?void 0:a.close)&&a.close()}function c(){s||(s=window.setTimeout(()=>{o(g(e,"redirect-cancelled-by-user"))},Zr))}function h(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&c()}t.addPassiveListener(l),document.addEventListener("resume",c,!1),_e()&&document.addEventListener("visibilitychange",h,!1),r=()=>{t.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),s&&window.clearTimeout(s)}})}finally{r()}}function ri(e){var t,a,n,r,i,o,s,l,c,h;const u=Xr();A("function"===typeof(null===(t=null===u||void 0===u?void 0:u.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),A("undefined"!==typeof(null===(a=null===u||void 0===u?void 0:u.BuildInfo)||void 0===a?void 0:a.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),A("function"===typeof(null===(i=null===(r=null===(n=null===u||void 0===u?void 0:u.cordova)||void 0===n?void 0:n.plugins)||void 0===r?void 0:r.browsertab)||void 0===i?void 0:i.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A("function"===typeof(null===(l=null===(s=null===(o=null===u||void 0===u?void 0:u.cordova)||void 0===o?void 0:o.plugins)||void 0===s?void 0:s.browsertab)||void 0===l?void 0:l.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),A("function"===typeof(null===(h=null===(c=null===u||void 0===u?void 0:u.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ii(e){const t=oi(e),a=await crypto.subtle.digest("SHA-256",t),n=Array.from(new Uint8Array(a));return n.map(e=>e.toString(16).padStart(2,"0")).join("")}function oi(e){if(I(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),a=new Uint8Array(t);for(let n=0;n<e.length;n++)a[n]=e.charCodeAt(n);return a}
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
 */const si=20;class li extends lr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function ci(e,t,a=null){return{type:t,eventId:a,urlResponse:null,sessionId:pi(),postBody:null,tenantId:e.tenantId,error:g(e,"no-auth-event")}}function hi(e,t){return vi()._set(fi(e),t)}async function ui(e){const t=await vi()._get(fi(e));return t&&await vi()._remove(fi(e)),t}function di(e,t){var a,n;const r=zi(t);if(r.includes("/__/auth/callback")){const t=gi(r),i=t["firebaseError"]?mi(decodeURIComponent(t["firebaseError"])):null,o=null===(n=null===(a=null===i||void 0===i?void 0:i["code"])||void 0===a?void 0:a.split("auth/"))||void 0===n?void 0:n[1],s=o?g(o):null;return s?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:s,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function pi(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let a=0;a<si;a++){const a=Math.floor(Math.random()*t.length);e.push(t.charAt(a))}return e.join("")}function vi(){return w(La)}function fi(e){return pe("authEvent",e.config.apiKey,e.name)}function mi(e){try{return JSON.parse(e)}catch(t){return null}}function zi(e){const t=gi(e),a=t["link"]?decodeURIComponent(t["link"]):void 0,n=gi(a)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,i=gi(r)["link"];return i||r||n||a||e}function gi(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...a]=e.split("?");return Object(n["H"])(a.join("?"))}
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
 */const yi=500;class _i{constructor(){this._redirectPersistence=Sa,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ir}async _initialize(e){const t=e._key();let a=this.eventManagers.get(t);return a||(a=new li(e),this.eventManagers.set(t,a),this.attachCallbackListeners(e,a)),a}_openPopup(e){z(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,a,n){ri(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),Jn(),await this._originValidation(e);const i=ci(e,a,n);await hi(e,i);const o=await ei(e,i,t),s=await ai(o);return ni(e,r,s)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ti(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:a,handleOpenURL:n,BuildInfo:r}=Xr(),i=setTimeout(async()=>{await ui(e),t.onEvent(Ai())},yi),o=async a=>{clearTimeout(i);const n=await ui(e);let r=null;n&&(null===a||void 0===a?void 0:a["url"])&&(r=di(n,a["url"])),t.onEvent(r||Ai())};"undefined"!==typeof a&&"function"===typeof a.subscribe&&a.subscribe(null,o);const s=n,l=r.packageName.toLowerCase()+"://";Xr().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(l)&&o({url:e}),"function"===typeof s)try{s(e)}catch(t){console.error(t)}}}}const Mi=_i;function Ai(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:g("no-auth-event")}}
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
 */function bi(e,t){Se(e)._logFramework(t)}},"1fd5":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return H})),a.d(t,"c",(function(){return C})),a.d(t,"d",(function(){return $})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"h",(function(){return u})),a.d(t,"i",(function(){return c})),a.d(t,"j",(function(){return T})),a.d(t,"k",(function(){return m})),a.d(t,"l",(function(){return W})),a.d(t,"m",(function(){return d})),a.d(t,"n",(function(){return N})),a.d(t,"o",(function(){return p})),a.d(t,"p",(function(){return Y})),a.d(t,"q",(function(){return q})),a.d(t,"r",(function(){return ae})),a.d(t,"s",(function(){return z})),a.d(t,"t",(function(){return O})),a.d(t,"u",(function(){return _})),a.d(t,"v",(function(){return M})),a.d(t,"w",(function(){return x})),a.d(t,"x",(function(){return b})),a.d(t,"y",(function(){return V})),a.d(t,"z",(function(){return g})),a.d(t,"A",(function(){return y})),a.d(t,"B",(function(){return I})),a.d(t,"C",(function(){return A})),a.d(t,"D",(function(){return E})),a.d(t,"E",(function(){return S})),a.d(t,"F",(function(){return R})),a.d(t,"G",(function(){return D})),a.d(t,"H",(function(){return U})),a.d(t,"I",(function(){return P})),a.d(t,"J",(function(){return te})),a.d(t,"K",(function(){return ee})),a.d(t,"L",(function(){return B})),a.d(t,"M",(function(){return Q})),a.d(t,"N",(function(){return X})),a.d(t,"O",(function(){return Z}));
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
const n={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},r=function(e,t){if(!e)throw i(t)},i=function(e){return new Error("Firebase Database ("+n.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let a=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[a++]=r:r<2048?(t[a++]=r>>6|192,t[a++]=63&r|128):55296===(64512&r)&&n+1<e.length&&56320===(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[a++]=r>>18|240,t[a++]=r>>12&63|128,t[a++]=r>>6&63|128,t[a++]=63&r|128):(t[a++]=r>>12|224,t[a++]=r>>6&63|128,t[a++]=63&r|128)}return t},s=function(e){const t=[];let a=0,n=0;while(a<e.length){const r=e[a++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[a++];t[n++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=e[a++],o=e[a++],s=e[a++],l=((7&r)<<18|(63&i)<<12|(63&o)<<6|63&s)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(1023&l))}else{const i=e[a++],o=e[a++];t[n++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")},l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<e.length;r+=3){const t=e[r],i=r+1<e.length,o=i?e[r+1]:0,s=r+2<e.length,l=s?e[r+2]:0,c=t>>2,h=(3&t)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;s||(d=64,i||(u=64)),n.push(a[c],a[h],a[u],a[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):s(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const a=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<e.length;){const t=a[e.charAt(r++)],i=r<e.length,o=i?a[e.charAt(r)]:0;++r;const s=r<e.length,l=s?a[e.charAt(r)]:64;++r;const c=r<e.length,h=c?a[e.charAt(r)]:64;if(++r,null==t||null==o||null==l||null==h)throw Error();const u=t<<2|o>>4;if(n.push(u),64!==l){const e=o<<4&240|l>>2;if(n.push(e),64!==h){const e=l<<6&192|h;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},c=function(e){const t=o(e);return l.encodeByteArray(t,!0)},h=function(e){return c(e).replace(/\./g,"")},u=function(e){try{return l.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function d(e){return p(void 0,e)}function p(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const a=t;return new Date(a.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const a in t)t.hasOwnProperty(a)&&v(a)&&(e[a]=p(e[a],t[a]));return e}function v(e){return"__proto__"!==e}
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
 */class f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,a))}}}
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
 */function m(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+n,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),s="";return[h(JSON.stringify(a)),h(JSON.stringify(o)),s].join(".")}
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
 */function z(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function g(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function y(){try{return"[object process]"===Object.prototype.toString.call(e.process)}catch(t){return!1}}function _(){return"object"===typeof self&&self.self===self}function M(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){const e=z();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function I(){return!0===n.NODE_CLIENT||!0===n.NODE_ADMIN}function V(){return"object"===typeof indexedDB}
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
const w="FirebaseError";class C extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=w,Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],i=r?L(r,a):"Error",o=`${this.serviceName}: ${i} (${n}).`,s=new C(n,o,a);return s}}function L(e,t){return e.replace(k,(e,a)=>{const n=t[a];return null!=n?String(n):`<${a}?>`})}const k=/\{\$([^}]+)}/g;
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
 */function S(e){return JSON.parse(e)}function B(e){return JSON.stringify(e)}
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
 */const F=function(e){let t={},a={},n={},r="";try{const i=e.split(".");t=S(u(i[0])||""),a=S(u(i[1])||""),r=i[2],n=a["d"]||{},delete a["d"]}catch(i){}return{header:t,claims:a,data:n,signature:r}},E=function(e){const t=F(e),a=t.claims;return!!a&&"object"===typeof a&&a.hasOwnProperty("iat")},O=function(e){const t=F(e).claims;return"object"===typeof t&&!0===t["admin"]};
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
function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function P(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function x(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function R(e,t,a){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=t.call(a,e[r],r,e));return n}function N(e,t){if(e===t)return!0;const a=Object.keys(e),n=Object.keys(t);for(const r of a){if(!n.includes(r))return!1;const a=e[r],i=t[r];if(j(a)&&j(i)){if(!N(a,i))return!1}else if(a!==i)return!1}for(const r of n)if(!a.includes(r))return!1;return!0}function j(e){return null!==e&&"object"===typeof e}
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
 */function D(e){const t=[];for(const[a,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(a)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(a)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function U(e){const t={},a=e.replace(/^\?/,"").split("&");return a.forEach(e=>{if(e){const[a,n]=e.split("=");t[decodeURIComponent(a)]=decodeURIComponent(n)}}),t}function q(e){const t=e.indexOf("?");if(!t)return"";const a=e.indexOf("#",t);return e.substring(t,a>0?a:void 0)}
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
 */class ${constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const a=this.W_;if("string"===typeof e)for(let h=0;h<16;h++)a[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)a[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const e=a[h-3]^a[h-8]^a[h-14]^a[h-16];a[h]=4294967295&(e<<1|e>>>31)}let n,r,i=this.chain_[0],o=this.chain_[1],s=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let h=0;h<80;h++){h<40?h<20?(n=l^o&(s^l),r=1518500249):(n=o^s^l,r=1859775393):h<60?(n=o&s|l&(o|s),r=2400959708):(n=o^s^l,r=3395469782);const e=(i<<5|i>>>27)+n+c+r+a[h]&4294967295;c=l,l=s,s=4294967295&(o<<30|o>>>2),o=i,i=e}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+s&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const a=t-this.blockSize;let n=0;const r=this.buf_;let i=this.inbuf_;while(n<t){if(0===i)while(n<=a)this.compress_(e,n),n+=this.blockSize;if("string"===typeof e){while(n<t)if(r[i]=e.charCodeAt(n),++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}else while(n<t)if(r[i]=e[n],++i,++n,i===this.blockSize){this.compress_(r),i=0;break}}this.inbuf_=i,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);let a=0;for(let n=0;n<5;n++)for(let t=24;t>=0;t-=8)e[a]=this.chain_[n]>>t&255,++a;return e}}function W(e,t){const a=new G(e,t);return a.subscribe.bind(a)}class G{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let n;if(void 0===e&&void 0===t&&void 0===a)throw new Error("Missing Observer.");n=K(e,["next","error","complete"])?e:{next:e,error:t,complete:a},void 0===n.next&&(n.next=J),void 0===n.error&&(n.error=J),void 0===n.complete&&(n.complete=J);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(a){"undefined"!==typeof console&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K(e,t){if("object"!==typeof e||null===e)return!1;for(const a of t)if(a in e&&"function"===typeof e[a])return!0;return!1}function J(){}
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
 */const Q=function(e,t,a,n){let r;if(n<t?r="at least "+t:n>a&&(r=0===a?"none":"no more than "+a),r){const t=e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+r+".";throw new Error(t)}};function Y(e,t){return`${e} failed: ${t} argument `}function X(e,t,a,n){if((!n||a)&&"function"!==typeof a)throw new Error(Y(e,t)+"must be a valid function.")}function Z(e,t,a,n){if((!n||a)&&("object"!==typeof a||null===a))throw new Error(Y(e,t)+"must be a valid context object.")}
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
 */const ee=function(e){const t=[];let a=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i>=55296&&i<=56319){const t=i-55296;n++,r(n<e.length,"Surrogate pair missing trail surrogate.");const a=e.charCodeAt(n)-56320;i=65536+(t<<10)+a}i<128?t[a++]=i:i<2048?(t[a++]=i>>6|192,t[a++]=63&i|128):i<65536?(t[a++]=i>>12|224,t[a++]=i>>6&63|128,t[a++]=63&i|128):(t[a++]=i>>18|240,t[a++]=i>>12&63|128,t[a++]=i>>6&63|128,t[a++]=63&i|128)}return t},te=function(e){let t=0;for(let a=0;a<e.length;a++){const n=e.charCodeAt(a);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,a++):t+=3}return t};
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
function ae(e){return e&&e._delegate?e._delegate:e}}).call(this,a("c8ba"))},2266:function(e,t,a){var n=a("da84"),r=a("0366"),i=a("c65b"),o=a("825a"),s=a("0d51"),l=a("e95a"),c=a("07fa"),h=a("3a9b"),u=a("9a1f"),d=a("35a1"),p=a("2a62"),v=n.TypeError,f=function(e,t){this.stopped=e,this.result=t},m=f.prototype;e.exports=function(e,t,a){var n,z,g,y,_,M,A,b=a&&a.that,I=!(!a||!a.AS_ENTRIES),V=!(!a||!a.IS_ITERATOR),w=!(!a||!a.INTERRUPTED),C=r(t,b),H=function(e){return n&&p(n,"normal",e),new f(!0,e)},L=function(e){return I?(o(e),w?C(e[0],e[1],H):C(e[0],e[1])):w?C(e,H):C(e)};if(V)n=e;else{if(z=d(e),!z)throw v(s(e)+" is not iterable");if(l(z)){for(g=0,y=c(e);y>g;g++)if(_=L(e[g]),_&&h(m,_))return _;return new f(!1)}n=u(e,z)}M=n.next;while(!(A=i(M,n)).done){try{_=L(A.value)}catch(k){p(n,"throw",k)}if("object"==typeof _&&_&&h(m,_))return _}return new f(!1)}},"22e5":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return o}));var n=a("1fd5");class r{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const i="[DEFAULT]";
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new n["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&e.resolve(a)}catch(a){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),n=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(a)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:a})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:i})}catch(t){}for(const[e,a]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});a.resolve(e)}catch(t){}}}}clearInstance(e=i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=i){return this.instances.has(e)}getOptions(e=i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[r,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);a===e&&i.resolve(n)}return n}onInit(e,t){var a;const n=this.normalizeInstanceIdentifier(t),r=null!==(a=this.onInitCallbacks.get(n))&&void 0!==a?a:new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const r of a)try{r(e,t)}catch(n){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:s(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch(n){}return a||null}normalizeInstanceIdentifier(e=i){return this.component?this.component.multipleInstances?e:i:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function s(e){return e===i?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
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
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,a){var n=a("5926"),r=Math.max,i=Math.min;e.exports=function(e,t){var a=n(e);return a<0?r(a+t,0):i(a,t)}},"23e7":function(e,t,a){var n=a("da84"),r=a("06cf").f,i=a("9112"),o=a("6eeb"),s=a("ce4e"),l=a("e893"),c=a("94ca");e.exports=function(e,t){var a,h,u,d,p,v,f=e.target,m=e.global,z=e.stat;if(h=m?n:z?n[f]||s(f,{}):(n[f]||{}).prototype,h)for(u in t){if(p=t[u],e.noTargetGet?(v=r(h,u),d=v&&v.value):d=h[u],a=c(m?u:f+(z?".":"#")+u,e.forced),!a&&void 0!==d){if(typeof p==typeof d)continue;l(p,d)}(e.sham||d&&d.sham)&&i(p,"sham",!0),o(h,u,p,e)}}},"241c":function(e,t,a){var n=a("ca84"),r=a("7839"),i=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},"256a":function(e,t,a){"use strict";a("5994")},2626:function(e,t,a){"use strict";var n=a("d066"),r=a("9bf2"),i=a("b622"),o=a("83ab"),s=i("species");e.exports=function(e){var t=n(e),a=r.f;o&&t&&!t[s]&&a(t,s,{configurable:!0,get:function(){return this}})}},2877:function(e,t,a){"use strict";function n(e,t,a,n,r,i,o,s){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=a,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),o?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(e,t){return l.call(t),h(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}a.d(t,"a",(function(){return n}))},2979:function(e,t,a){"use strict";var n=a("7ded"),r=a("22e5"),i=a("51b0"),o=a("1fd5"),s=a("e691");const l="@firebase/database-compat",c="0.1.4",h=new s["b"]("@firebase/database-compat"),u=function(e){const t="FIREBASE WARNING: "+e;h.warn(t)},d=function(e,t,a,n){if((!n||void 0!==a)&&"boolean"!==typeof a)throw new Error(Object(o["p"])(e,t)+"must be a boolean.")},p=function(e,t,a){if(!a||void 0!==t)switch(t){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(Object(o["p"])(e,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};
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
class v{constructor(e){this._delegate=e}cancel(e){Object(o["M"])("OnDisconnect.cancel",0,1,arguments.length),Object(o["N"])("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),t=>e(t)),t}remove(e){Object(o["M"])("OnDisconnect.remove",0,1,arguments.length),Object(o["N"])("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),t=>e(t)),t}set(e,t){Object(o["M"])("OnDisconnect.set",1,2,arguments.length),Object(o["N"])("OnDisconnect.set","onComplete",t,!0);const a=this._delegate.set(e);return t&&a.then(()=>t(null),e=>t(e)),a}setWithPriority(e,t,a){Object(o["M"])("OnDisconnect.setWithPriority",2,3,arguments.length),Object(o["N"])("OnDisconnect.setWithPriority","onComplete",a,!0);const n=this._delegate.setWithPriority(e,t);return a&&n.then(()=>a(null),e=>a(e)),n}update(e,t){if(Object(o["M"])("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let a=0;a<e.length;++a)t[""+a]=e[a];e=t,u("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(o["N"])("OnDisconnect.update","onComplete",t,!0);const a=this._delegate.update(e);return t&&a.then(()=>t(null),e=>t(e)),a}}
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
 */class f{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return Object(o["M"])("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}
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
 */class m{constructor(e,t){this._database=e,this._delegate=t}val(){return Object(o["M"])("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return Object(o["M"])("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return Object(o["M"])("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return Object(o["M"])("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return Object(o["M"])("DataSnapshot.child",0,1,arguments.length),e=String(e),Object(i["g"])("DataSnapshot.child","path",e,!1),new m(this._database,this._delegate.child(e))}hasChild(e){return Object(o["M"])("DataSnapshot.hasChild",1,1,arguments.length),Object(i["g"])("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return Object(o["M"])("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return Object(o["M"])("DataSnapshot.forEach",1,1,arguments.length),Object(o["N"])("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new m(this._database,t)))}hasChildren(){return Object(o["M"])("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return Object(o["M"])("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return Object(o["M"])("DataSnapshot.ref",0,0,arguments.length),new g(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class z{constructor(e,t){this.database=e,this._delegate=t}on(e,t,a,n){var r;Object(o["M"])("Query.on",2,4,arguments.length),Object(o["N"])("Query.on","callback",t,!1);const s=z.getCancelAndContextArgs_("Query.on",a,n),l=(e,a)=>{t.call(s.context,new m(this.database,e),a)};l.userCallback=t,l.context=s.context;const c=null===(r=s.cancel)||void 0===r?void 0:r.bind(s.context);switch(e){case"value":return Object(i["z"])(this._delegate,l,c),t;case"child_added":return Object(i["v"])(this._delegate,l,c),t;case"child_removed":return Object(i["y"])(this._delegate,l,c),t;case"child_changed":return Object(i["w"])(this._delegate,l,c),t;case"child_moved":return Object(i["x"])(this._delegate,l,c),t;default:throw new Error(Object(o["p"])("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,a){if(Object(o["M"])("Query.off",0,3,arguments.length),p("Query.off",e,!0),Object(o["N"])("Query.off","callback",t,!0),Object(o["O"])("Query.off","context",a,!0),t){const n=()=>{};n.userCallback=t,n.context=a,Object(i["u"])(this._delegate,e,n)}else Object(i["u"])(this._delegate,e)}get(){return Object(i["o"])(this._delegate).then(e=>new m(this.database,e))}once(e,t,a,n){Object(o["M"])("Query.once",1,4,arguments.length),Object(o["N"])("Query.once","callback",t,!0);const r=z.getCancelAndContextArgs_("Query.once",a,n),s=new o["a"],l=(e,a)=>{const n=new m(this.database,e);t&&t.call(r.context,n,a),s.resolve(n)};l.userCallback=t,l.context=r.context;const c=e=>{r.cancel&&r.cancel.call(r.context,e),s.reject(e)};switch(e){case"value":Object(i["z"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_added":Object(i["v"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_removed":Object(i["y"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_changed":Object(i["w"])(this._delegate,l,c,{onlyOnce:!0});break;case"child_moved":Object(i["x"])(this._delegate,l,c,{onlyOnce:!0});break;default:throw new Error(Object(o["p"])("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return s.promise}limitToFirst(e){return Object(o["M"])("Query.limitToFirst",1,1,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["s"])(e)))}limitToLast(e){return Object(o["M"])("Query.limitToLast",1,1,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["t"])(e)))}orderByChild(e){return Object(o["M"])("Query.orderByChild",1,1,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["A"])(e)))}orderByKey(){return Object(o["M"])("Query.orderByKey",0,0,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["B"])()))}orderByPriority(){return Object(o["M"])("Query.orderByPriority",0,0,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["C"])()))}orderByValue(){return Object(o["M"])("Query.orderByValue",0,0,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["D"])()))}startAt(e=null,t){return Object(o["M"])("Query.startAt",0,2,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["P"])(e,t)))}startAfter(e=null,t){return Object(o["M"])("Query.startAfter",0,2,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["O"])(e,t)))}endAt(e=null,t){return Object(o["M"])("Query.endAt",0,2,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["l"])(e,t)))}endBefore(e=null,t){return Object(o["M"])("Query.endBefore",0,2,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["m"])(e,t)))}equalTo(e,t){return Object(o["M"])("Query.equalTo",1,2,arguments.length),new z(this.database,Object(i["F"])(this._delegate,Object(i["n"])(e,t)))}toString(){return Object(o["M"])("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return Object(o["M"])("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(Object(o["M"])("Query.isEqual",1,1,arguments.length),!(e instanceof z)){const e="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(e)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,a){const n={cancel:void 0,context:void 0};if(t&&a)n.cancel=t,Object(o["N"])(e,"cancel",n.cancel,!0),n.context=a,Object(o["O"])(e,"context",n.context,!0);else if(t)if("object"===typeof t&&null!==t)n.context=t;else{if("function"!==typeof t)throw new Error(Object(o["p"])(e,"cancelOrContext")+" must either be a cancel callback or a context object.");n.cancel=t}return n}get ref(){return new g(this.database,new i["d"](this._delegate._repo,this._delegate._path))}}class g extends z{constructor(e,t){super(e,new i["b"](t._repo,t._path,new i["c"],!1)),this.database=e,this._delegate=t}getKey(){return Object(o["M"])("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return Object(o["M"])("Reference.child",1,1,arguments.length),"number"===typeof e&&(e=String(e)),new g(this.database,Object(i["i"])(this._delegate,e))}getParent(){Object(o["M"])("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new g(this.database,e):null}getRoot(){return Object(o["M"])("Reference.root",0,0,arguments.length),new g(this.database,this._delegate.root)}set(e,t){Object(o["M"])("Reference.set",1,2,arguments.length),Object(o["N"])("Reference.set","onComplete",t,!0);const a=Object(i["L"])(this._delegate,e);return t&&a.then(()=>t(null),e=>t(e)),a}update(e,t){if(Object(o["M"])("Reference.update",1,2,arguments.length),Array.isArray(e)){const t={};for(let a=0;a<e.length;++a)t[""+a]=e[a];e=t,u("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Object(i["h"])("Reference.update",this._delegate._path),Object(o["N"])("Reference.update","onComplete",t,!0);const a=Object(i["Q"])(this._delegate,e);return t&&a.then(()=>t(null),e=>t(e)),a}setWithPriority(e,t,a){Object(o["M"])("Reference.setWithPriority",2,3,arguments.length),Object(o["N"])("Reference.setWithPriority","onComplete",a,!0);const n=Object(i["N"])(this._delegate,e,t);return a&&n.then(()=>a(null),e=>a(e)),n}remove(e){Object(o["M"])("Reference.remove",0,1,arguments.length),Object(o["N"])("Reference.remove","onComplete",e,!0);const t=Object(i["I"])(this._delegate);return e&&t.then(()=>e(null),t=>e(t)),t}transaction(e,t,a){Object(o["M"])("Reference.transaction",1,3,arguments.length),Object(o["N"])("Reference.transaction","transactionUpdate",e,!1),Object(o["N"])("Reference.transaction","onComplete",t,!0),d("Reference.transaction","applyLocally",a,!0);const n=Object(i["J"])(this._delegate,e,{applyLocally:a}).then(e=>new f(e.committed,new m(this.database,e.snapshot)));return t&&n.then(e=>t(null,e.committed,e.snapshot),e=>t(e,!1,null)),n}setPriority(e,t){Object(o["M"])("Reference.setPriority",1,2,arguments.length),Object(o["N"])("Reference.setPriority","onComplete",t,!0);const a=Object(i["M"])(this._delegate,e);return t&&a.then(()=>t(null),e=>t(e)),a}push(e,t){Object(o["M"])("Reference.push",0,2,arguments.length),Object(o["N"])("Reference.push","onComplete",t,!0);const a=Object(i["E"])(this._delegate,e),n=a.then(e=>new g(this.database,e));t&&n.then(()=>t(null),e=>t(e));const r=new g(this.database,a);return r.then=n.then.bind(n),r.catch=n.catch.bind(n,void 0),r}onDisconnect(){return Object(i["h"])("Reference.onDisconnect",this._delegate._path),new v(new i["a"](this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}
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
 */class y{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,t,a={}){Object(i["j"])(this._delegate,e,t,a)}ref(e){if(Object(o["M"])("database.ref",0,1,arguments.length),e instanceof g){const t=Object(i["H"])(this._delegate,e.toString());return new g(this,t)}{const t=Object(i["G"])(this._delegate,e);return new g(this,t)}}refFromURL(e){const t="database.refFromURL";Object(o["M"])(t,1,1,arguments.length);const a=Object(i["H"])(this._delegate,e);return new g(this,a)}goOffline(){return Object(o["M"])("database.goOffline",0,0,arguments.length),Object(i["p"])(this._delegate)}goOnline(){return Object(o["M"])("database.goOnline",0,0,arguments.length),Object(i["q"])(this._delegate)}}
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
function _({app:e,url:t,version:a,customAuthImpl:n,namespace:o,nodeAdmin:s=!1}){Object(i["f"])(a);const l=new r["c"]("auth-internal",new r["b"]("database-standalone"));return l.setComponent(new r["a"]("auth-internal",()=>n,"PRIVATE")),{instance:new y(Object(i["e"])(e,l,void 0,t,s),e),namespace:o}}y.ServerValue={TIMESTAMP:Object(i["K"])(),increment:e=>Object(i["r"])(e)};var M=Object.freeze({__proto__:null,initStandalone:_});
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
 */const A=y.ServerValue;function b(e){e.INTERNAL.registerComponent(new r["a"]("database-compat",(e,{instanceIdentifier:t})=>{const a=e.getProvider("app-compat").getImmediate(),n=e.getProvider("database").getImmediate({identifier:t});return new y(n,a)},"PUBLIC").setServiceProps({Reference:g,Query:z,Database:y,DataSnapshot:m,enableLogging:i["k"],INTERNAL:M,ServerValue:A}).setMultipleInstances(!0)),e.registerVersion(l,c)}b(n["a"])},"2a62":function(e,t,a){var n=a("c65b"),r=a("825a"),i=a("dc4a");e.exports=function(e,t,a){var o,s;r(e);try{if(o=i(e,"return"),!o){if("throw"===t)throw a;return a}o=n(o,e)}catch(l){s=!0,o=l}if("throw"===t)throw a;if(s)throw o;return r(o),a}},"2b0e":function(e,t,a){"use strict";(function(e){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function n(e){return void 0===e||null===e}function r(e){return void 0!==e&&null!==e}function i(e){return!0===e}function o(e){return!1===e}function s(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return null!==e&&"object"===typeof e}var c=Object.prototype.toString;function h(e){return"[object Object]"===c.call(e)}function u(e){return"[object RegExp]"===c.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return r(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||h(e)&&e.toString===c?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function m(e,t){for(var a=Object.create(null),n=e.split(","),r=0;r<n.length;r++)a[n[r]]=!0;return t?function(e){return a[e.toLowerCase()]}:function(e){return a[e]}}m("slot,component",!0);var z=m("key,ref,slot,slot-scope,is");function g(e,t){if(e.length){var a=e.indexOf(t);if(a>-1)return e.splice(a,1)}}var y=Object.prototype.hasOwnProperty;function _(e,t){return y.call(e,t)}function M(e){var t=Object.create(null);return function(a){var n=t[a];return n||(t[a]=e(a))}}var A=/-(\w)/g,b=M((function(e){return e.replace(A,(function(e,t){return t?t.toUpperCase():""}))})),I=M((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),V=/\B([A-Z])/g,w=M((function(e){return e.replace(V,"-$1").toLowerCase()}));function C(e,t){function a(a){var n=arguments.length;return n?n>1?e.apply(t,arguments):e.call(t,a):e.call(t)}return a._length=e.length,a}function H(e,t){return e.bind(t)}var L=Function.prototype.bind?H:C;function k(e,t){t=t||0;var a=e.length-t,n=new Array(a);while(a--)n[a]=e[a+t];return n}function S(e,t){for(var a in t)e[a]=t[a];return e}function B(e){for(var t={},a=0;a<e.length;a++)e[a]&&S(t,e[a]);return t}function F(e,t,a){}var E=function(e,t,a){return!1},O=function(e){return e};function T(e,t){if(e===t)return!0;var a=l(e),n=l(t);if(!a||!n)return!a&&!n&&String(e)===String(t);try{var r=Array.isArray(e),i=Array.isArray(t);if(r&&i)return e.length===t.length&&e.every((function(e,a){return T(e,t[a])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||i)return!1;var o=Object.keys(e),s=Object.keys(t);return o.length===s.length&&o.every((function(a){return T(e[a],t[a])}))}catch(c){return!1}}function P(e,t){for(var a=0;a<e.length;a++)if(T(e[a],t))return a;return-1}function x(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var R="data-server-rendered",N=["component","directive","filter"],j=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],D={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:E,isReservedAttr:E,isUnknownElement:E,getTagNamespace:F,parsePlatformTagName:O,mustUseProp:E,async:!0,_lifecycleHooks:j},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function $(e,t,a,n){Object.defineProperty(e,t,{value:a,enumerable:!!n,writable:!0,configurable:!0})}var W=new RegExp("[^"+U.source+".$_\\d]");function G(e){if(!W.test(e)){var t=e.split(".");return function(e){for(var a=0;a<t.length;a++){if(!e)return;e=e[t[a]]}return e}}}var K,J="__proto__"in{},Q="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,X=Y&&WXEnvironment.platform.toLowerCase(),Z=Q&&window.navigator.userAgent.toLowerCase(),ee=Z&&/msie|trident/.test(Z),te=Z&&Z.indexOf("msie 9.0")>0,ae=Z&&Z.indexOf("edge/")>0,ne=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===X),re=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),ie={}.watch,oe=!1;if(Q)try{var se={};Object.defineProperty(se,"passive",{get:function(){oe=!0}}),window.addEventListener("test-passive",null,se)}catch(Io){}var le=function(){return void 0===K&&(K=!Q&&!Y&&"undefined"!==typeof e&&(e["process"]&&"server"===e["process"].env.VUE_ENV)),K},ce=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function he(e){return"function"===typeof e&&/native code/.test(e.toString())}var ue,de="undefined"!==typeof Symbol&&he(Symbol)&&"undefined"!==typeof Reflect&&he(Reflect.ownKeys);ue="undefined"!==typeof Set&&he(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var pe=F,ve=0,fe=function(){this.id=ve++,this.subs=[]};fe.prototype.addSub=function(e){this.subs.push(e)},fe.prototype.removeSub=function(e){g(this.subs,e)},fe.prototype.depend=function(){fe.target&&fe.target.addDep(this)},fe.prototype.notify=function(){var e=this.subs.slice();for(var t=0,a=e.length;t<a;t++)e[t].update()},fe.target=null;var me=[];function ze(e){me.push(e),fe.target=e}function ge(){me.pop(),fe.target=me[me.length-1]}var ye=function(e,t,a,n,r,i,o,s){this.tag=e,this.data=t,this.children=a,this.text=n,this.elm=r,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_e={child:{configurable:!0}};_e.child.get=function(){return this.componentInstance},Object.defineProperties(ye.prototype,_e);var Me=function(e){void 0===e&&(e="");var t=new ye;return t.text=e,t.isComment=!0,t};function Ae(e){return new ye(void 0,void 0,void 0,String(e))}function be(e){var t=new ye(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var Ie=Array.prototype,Ve=Object.create(Ie),we=["push","pop","shift","unshift","splice","sort","reverse"];we.forEach((function(e){var t=Ie[e];$(Ve,e,(function(){var a=[],n=arguments.length;while(n--)a[n]=arguments[n];var r,i=t.apply(this,a),o=this.__ob__;switch(e){case"push":case"unshift":r=a;break;case"splice":r=a.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),i}))}));var Ce=Object.getOwnPropertyNames(Ve),He=!0;function Le(e){He=e}var ke=function(e){this.value=e,this.dep=new fe,this.vmCount=0,$(e,"__ob__",this),Array.isArray(e)?(J?Se(e,Ve):Be(e,Ve,Ce),this.observeArray(e)):this.walk(e)};function Se(e,t){e.__proto__=t}function Be(e,t,a){for(var n=0,r=a.length;n<r;n++){var i=a[n];$(e,i,t[i])}}function Fe(e,t){var a;if(l(e)&&!(e instanceof ye))return _(e,"__ob__")&&e.__ob__ instanceof ke?a=e.__ob__:He&&!le()&&(Array.isArray(e)||h(e))&&Object.isExtensible(e)&&!e._isVue&&(a=new ke(e)),t&&a&&a.vmCount++,a}function Ee(e,t,a,n,r){var i=new fe,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(a=e[t]);var c=!r&&Fe(a);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):a;return fe.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(t)&&Pe(t))),t},set:function(t){var n=s?s.call(e):a;t===n||t!==t&&n!==n||s&&!l||(l?l.call(e,t):a=t,c=!r&&Fe(t),i.notify())}})}}function Oe(e,t,a){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,a),a;if(t in e&&!(t in Object.prototype))return e[t]=a,a;var n=e.__ob__;return e._isVue||n&&n.vmCount?a:n?(Ee(n.value,t,a),n.dep.notify(),a):(e[t]=a,a)}function Te(e,t){if(Array.isArray(e)&&d(t))e.splice(t,1);else{var a=e.__ob__;e._isVue||a&&a.vmCount||_(e,t)&&(delete e[t],a&&a.dep.notify())}}function Pe(e){for(var t=void 0,a=0,n=e.length;a<n;a++)t=e[a],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&Pe(t)}ke.prototype.walk=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)Ee(e,t[a])},ke.prototype.observeArray=function(e){for(var t=0,a=e.length;t<a;t++)Fe(e[t])};var xe=D.optionMergeStrategies;function Re(e,t){if(!t)return e;for(var a,n,r,i=de?Reflect.ownKeys(t):Object.keys(t),o=0;o<i.length;o++)a=i[o],"__ob__"!==a&&(n=e[a],r=t[a],_(e,a)?n!==r&&h(n)&&h(r)&&Re(n,r):Oe(e,a,r));return e}function Ne(e,t,a){return a?function(){var n="function"===typeof t?t.call(a,a):t,r="function"===typeof e?e.call(a,a):e;return n?Re(n,r):r}:t?e?function(){return Re("function"===typeof t?t.call(this,this):t,"function"===typeof e?e.call(this,this):e)}:t:e}function je(e,t){var a=t?e?e.concat(t):Array.isArray(t)?t:[t]:e;return a?De(a):a}function De(e){for(var t=[],a=0;a<e.length;a++)-1===t.indexOf(e[a])&&t.push(e[a]);return t}function Ue(e,t,a,n){var r=Object.create(e||null);return t?S(r,t):r}xe.data=function(e,t,a){return a?Ne(e,t,a):t&&"function"!==typeof t?e:Ne(e,t)},j.forEach((function(e){xe[e]=je})),N.forEach((function(e){xe[e+"s"]=Ue})),xe.watch=function(e,t,a,n){if(e===ie&&(e=void 0),t===ie&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var r={};for(var i in S(r,e),t){var o=r[i],s=t[i];o&&!Array.isArray(o)&&(o=[o]),r[i]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},xe.props=xe.methods=xe.inject=xe.computed=function(e,t,a,n){if(!e)return t;var r=Object.create(null);return S(r,e),t&&S(r,t),r},xe.provide=Ne;var qe=function(e,t){return void 0===t?e:t};function $e(e,t){var a=e.props;if(a){var n,r,i,o={};if(Array.isArray(a)){n=a.length;while(n--)r=a[n],"string"===typeof r&&(i=b(r),o[i]={type:null})}else if(h(a))for(var s in a)r=a[s],i=b(s),o[i]=h(r)?r:{type:r};else 0;e.props=o}}function We(e,t){var a=e.inject;if(a){var n=e.inject={};if(Array.isArray(a))for(var r=0;r<a.length;r++)n[a[r]]={from:a[r]};else if(h(a))for(var i in a){var o=a[i];n[i]=h(o)?S({from:i},o):{from:o}}else 0}}function Ge(e){var t=e.directives;if(t)for(var a in t){var n=t[a];"function"===typeof n&&(t[a]={bind:n,update:n})}}function Ke(e,t,a){if("function"===typeof t&&(t=t.options),$e(t,a),We(t,a),Ge(t),!t._base&&(t.extends&&(e=Ke(e,t.extends,a)),t.mixins))for(var n=0,r=t.mixins.length;n<r;n++)e=Ke(e,t.mixins[n],a);var i,o={};for(i in e)s(i);for(i in t)_(e,i)||s(i);function s(n){var r=xe[n]||qe;o[n]=r(e[n],t[n],a,n)}return o}function Je(e,t,a,n){if("string"===typeof a){var r=e[t];if(_(r,a))return r[a];var i=b(a);if(_(r,i))return r[i];var o=I(i);if(_(r,o))return r[o];var s=r[a]||r[i]||r[o];return s}}function Qe(e,t,a,n){var r=t[e],i=!_(a,e),o=a[e],s=tt(Boolean,r.type);if(s>-1)if(i&&!_(r,"default"))o=!1;else if(""===o||o===w(e)){var l=tt(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Ye(n,r,e);var c=He;Le(!0),Fe(o),Le(c)}return o}function Ye(e,t,a){if(_(t,"default")){var n=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[a]&&void 0!==e._props[a]?e._props[a]:"function"===typeof n&&"Function"!==Ze(t.type)?n.call(e):n}}var Xe=/^\s*function (\w+)/;function Ze(e){var t=e&&e.toString().match(Xe);return t?t[1]:""}function et(e,t){return Ze(e)===Ze(t)}function tt(e,t){if(!Array.isArray(t))return et(t,e)?0:-1;for(var a=0,n=t.length;a<n;a++)if(et(t[a],e))return a;return-1}function at(e,t,a){ze();try{if(t){var n=t;while(n=n.$parent){var r=n.$options.errorCaptured;if(r)for(var i=0;i<r.length;i++)try{var o=!1===r[i].call(n,e,t,a);if(o)return}catch(Io){rt(Io,n,"errorCaptured hook")}}}rt(e,t,a)}finally{ge()}}function nt(e,t,a,n,r){var i;try{i=a?e.apply(t,a):e.call(t),i&&!i._isVue&&p(i)&&!i._handled&&(i.catch((function(e){return at(e,n,r+" (Promise/async)")})),i._handled=!0)}catch(Io){at(Io,n,r)}return i}function rt(e,t,a){if(D.errorHandler)try{return D.errorHandler.call(null,e,t,a)}catch(Io){Io!==e&&it(Io,null,"config.errorHandler")}it(e,t,a)}function it(e,t,a){if(!Q&&!Y||"undefined"===typeof console)throw e;console.error(e)}var ot,st=!1,lt=[],ct=!1;function ht(){ct=!1;var e=lt.slice(0);lt.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&he(Promise)){var ut=Promise.resolve();ot=function(){ut.then(ht),ne&&setTimeout(F)},st=!0}else if(ee||"undefined"===typeof MutationObserver||!he(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ot="undefined"!==typeof setImmediate&&he(setImmediate)?function(){setImmediate(ht)}:function(){setTimeout(ht,0)};else{var dt=1,pt=new MutationObserver(ht),vt=document.createTextNode(String(dt));pt.observe(vt,{characterData:!0}),ot=function(){dt=(dt+1)%2,vt.data=String(dt)},st=!0}function ft(e,t){var a;if(lt.push((function(){if(e)try{e.call(t)}catch(Io){at(Io,t,"nextTick")}else a&&a(t)})),ct||(ct=!0,ot()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){a=e}))}var mt=new ue;function zt(e){gt(e,mt),mt.clear()}function gt(e,t){var a,n,r=Array.isArray(e);if(!(!r&&!l(e)||Object.isFrozen(e)||e instanceof ye)){if(e.__ob__){var i=e.__ob__.dep.id;if(t.has(i))return;t.add(i)}if(r){a=e.length;while(a--)gt(e[a],t)}else{n=Object.keys(e),a=n.length;while(a--)gt(e[n[a]],t)}}}var yt=M((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var a="~"===e.charAt(0);e=a?e.slice(1):e;var n="!"===e.charAt(0);return e=n?e.slice(1):e,{name:e,once:a,capture:n,passive:t}}));function _t(e,t){function a(){var e=arguments,n=a.fns;if(!Array.isArray(n))return nt(n,null,arguments,t,"v-on handler");for(var r=n.slice(),i=0;i<r.length;i++)nt(r[i],null,e,t,"v-on handler")}return a.fns=e,a}function Mt(e,t,a,r,o,s){var l,c,h,u;for(l in e)c=e[l],h=t[l],u=yt(l),n(c)||(n(h)?(n(c.fns)&&(c=e[l]=_t(c,s)),i(u.once)&&(c=e[l]=o(u.name,c,u.capture)),a(u.name,c,u.capture,u.passive,u.params)):c!==h&&(h.fns=c,e[l]=h));for(l in t)n(e[l])&&(u=yt(l),r(u.name,t[l],u.capture))}function At(e,t,a){var o;e instanceof ye&&(e=e.data.hook||(e.data.hook={}));var s=e[t];function l(){a.apply(this,arguments),g(o.fns,l)}n(s)?o=_t([l]):r(s.fns)&&i(s.merged)?(o=s,o.fns.push(l)):o=_t([s,l]),o.merged=!0,e[t]=o}function bt(e,t,a){var i=t.options.props;if(!n(i)){var o={},s=e.attrs,l=e.props;if(r(s)||r(l))for(var c in i){var h=w(c);It(o,l,c,h,!0)||It(o,s,c,h,!1)}return o}}function It(e,t,a,n,i){if(r(t)){if(_(t,a))return e[a]=t[a],i||delete t[a],!0;if(_(t,n))return e[a]=t[n],i||delete t[n],!0}return!1}function Vt(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function wt(e){return s(e)?[Ae(e)]:Array.isArray(e)?Ht(e):void 0}function Ct(e){return r(e)&&r(e.text)&&o(e.isComment)}function Ht(e,t){var a,o,l,c,h=[];for(a=0;a<e.length;a++)o=e[a],n(o)||"boolean"===typeof o||(l=h.length-1,c=h[l],Array.isArray(o)?o.length>0&&(o=Ht(o,(t||"")+"_"+a),Ct(o[0])&&Ct(c)&&(h[l]=Ae(c.text+o[0].text),o.shift()),h.push.apply(h,o)):s(o)?Ct(c)?h[l]=Ae(c.text+o):""!==o&&h.push(Ae(o)):Ct(o)&&Ct(c)?h[l]=Ae(c.text+o.text):(i(e._isVList)&&r(o.tag)&&n(o.key)&&r(t)&&(o.key="__vlist"+t+"_"+a+"__"),h.push(o)));return h}function Lt(e){var t=e.$options.provide;t&&(e._provided="function"===typeof t?t.call(e):t)}function kt(e){var t=St(e.$options.inject,e);t&&(Le(!1),Object.keys(t).forEach((function(a){Ee(e,a,t[a])})),Le(!0))}function St(e,t){if(e){for(var a=Object.create(null),n=de?Reflect.ownKeys(e):Object.keys(e),r=0;r<n.length;r++){var i=n[r];if("__ob__"!==i){var o=e[i].from,s=t;while(s){if(s._provided&&_(s._provided,o)){a[i]=s._provided[o];break}s=s.$parent}if(!s)if("default"in e[i]){var l=e[i].default;a[i]="function"===typeof l?l.call(t):l}else 0}}return a}}function Bt(e,t){if(!e||!e.length)return{};for(var a={},n=0,r=e.length;n<r;n++){var i=e[n],o=i.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,i.context!==t&&i.fnContext!==t||!o||null==o.slot)(a.default||(a.default=[])).push(i);else{var s=o.slot,l=a[s]||(a[s]=[]);"template"===i.tag?l.push.apply(l,i.children||[]):l.push(i)}}for(var c in a)a[c].every(Ft)&&delete a[c];return a}function Ft(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Et(e){return e.isComment&&e.asyncFactory}function Ot(e,t,n){var r,i=Object.keys(t).length>0,o=e?!!e.$stable:!i,s=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(o&&n&&n!==a&&s===n.$key&&!i&&!n.$hasNormal)return n;for(var l in r={},e)e[l]&&"$"!==l[0]&&(r[l]=Tt(t,l,e[l]))}else r={};for(var c in t)c in r||(r[c]=Pt(t,c));return e&&Object.isExtensible(e)&&(e._normalized=r),$(r,"$stable",o),$(r,"$key",s),$(r,"$hasNormal",i),r}function Tt(e,t,a){var n=function(){var e=arguments.length?a.apply(null,arguments):a({});e=e&&"object"===typeof e&&!Array.isArray(e)?[e]:wt(e);var t=e&&e[0];return e&&(!t||1===e.length&&t.isComment&&!Et(t))?void 0:e};return a.proxy&&Object.defineProperty(e,t,{get:n,enumerable:!0,configurable:!0}),n}function Pt(e,t){return function(){return e[t]}}function xt(e,t){var a,n,i,o,s;if(Array.isArray(e)||"string"===typeof e)for(a=new Array(e.length),n=0,i=e.length;n<i;n++)a[n]=t(e[n],n);else if("number"===typeof e)for(a=new Array(e),n=0;n<e;n++)a[n]=t(n+1,n);else if(l(e))if(de&&e[Symbol.iterator]){a=[];var c=e[Symbol.iterator](),h=c.next();while(!h.done)a.push(t(h.value,a.length)),h=c.next()}else for(o=Object.keys(e),a=new Array(o.length),n=0,i=o.length;n<i;n++)s=o[n],a[n]=t(e[s],s,n);return r(a)||(a=[]),a._isVList=!0,a}function Rt(e,t,a,n){var r,i=this.$scopedSlots[e];i?(a=a||{},n&&(a=S(S({},n),a)),r=i(a)||("function"===typeof t?t():t)):r=this.$slots[e]||("function"===typeof t?t():t);var o=a&&a.slot;return o?this.$createElement("template",{slot:o},r):r}function Nt(e){return Je(this.$options,"filters",e,!0)||O}function jt(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Dt(e,t,a,n,r){var i=D.keyCodes[t]||a;return r&&n&&!D.keyCodes[t]?jt(r,n):i?jt(i,e):n?w(n)!==t:void 0===e}function Ut(e,t,a,n,r){if(a)if(l(a)){var i;Array.isArray(a)&&(a=B(a));var o=function(o){if("class"===o||"style"===o||z(o))i=e;else{var s=e.attrs&&e.attrs.type;i=n||D.mustUseProp(t,s,o)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var l=b(o),c=w(o);if(!(l in i)&&!(c in i)&&(i[o]=a[o],r)){var h=e.on||(e.on={});h["update:"+o]=function(e){a[o]=e}}};for(var s in a)o(s)}else;return e}function qt(e,t){var a=this._staticTrees||(this._staticTrees=[]),n=a[e];return n&&!t||(n=a[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),Wt(n,"__static__"+e,!1)),n}function $t(e,t,a){return Wt(e,"__once__"+t+(a?"_"+a:""),!0),e}function Wt(e,t,a){if(Array.isArray(e))for(var n=0;n<e.length;n++)e[n]&&"string"!==typeof e[n]&&Gt(e[n],t+"_"+n,a);else Gt(e,t,a)}function Gt(e,t,a){e.isStatic=!0,e.key=t,e.isOnce=a}function Kt(e,t){if(t)if(h(t)){var a=e.on=e.on?S({},e.on):{};for(var n in t){var r=a[n],i=t[n];a[n]=r?[].concat(r,i):i}}else;return e}function Jt(e,t,a,n){t=t||{$stable:!a};for(var r=0;r<e.length;r++){var i=e[r];Array.isArray(i)?Jt(i,t,a):i&&(i.proxy&&(i.fn.proxy=!0),t[i.key]=i.fn)}return n&&(t.$key=n),t}function Qt(e,t){for(var a=0;a<t.length;a+=2){var n=t[a];"string"===typeof n&&n&&(e[t[a]]=t[a+1])}return e}function Yt(e,t){return"string"===typeof e?t+e:e}function Xt(e){e._o=$t,e._n=f,e._s=v,e._l=xt,e._t=Rt,e._q=T,e._i=P,e._m=qt,e._f=Nt,e._k=Dt,e._b=Ut,e._v=Ae,e._e=Me,e._u=Jt,e._g=Kt,e._d=Qt,e._p=Yt}function Zt(e,t,n,r,o){var s,l=this,c=o.options;_(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var h=i(c._compiled),u=!h;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||a,this.injections=St(c.inject,r),this.slots=function(){return l.$slots||Ot(e.scopedSlots,l.$slots=Bt(n,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ot(e.scopedSlots,this.slots())}}),h&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Ot(e.scopedSlots,this.$slots)),c._scopeId?this._c=function(e,t,a,n){var i=da(s,e,t,a,n,u);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=r),i}:this._c=function(e,t,a,n){return da(s,e,t,a,n,u)}}function ea(e,t,n,i,o){var s=e.options,l={},c=s.props;if(r(c))for(var h in c)l[h]=Qe(h,c,t||a);else r(n.attrs)&&aa(l,n.attrs),r(n.props)&&aa(l,n.props);var u=new Zt(n,l,o,i,e),d=s.render.call(null,u._c,u);if(d instanceof ye)return ta(d,n,u.parent,s,u);if(Array.isArray(d)){for(var p=wt(d)||[],v=new Array(p.length),f=0;f<p.length;f++)v[f]=ta(p[f],n,u.parent,s,u);return v}}function ta(e,t,a,n,r){var i=be(e);return i.fnContext=a,i.fnOptions=n,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function aa(e,t){for(var a in t)e[b(a)]=t[a]}Xt(Zt.prototype);var na={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var a=e;na.prepatch(a,a)}else{var n=e.componentInstance=oa(e,ka);n.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var a=t.componentOptions,n=t.componentInstance=e.componentInstance;Oa(n,a.propsData,a.listeners,t,a.children)},insert:function(e){var t=e.context,a=e.componentInstance;a._isMounted||(a._isMounted=!0,Ra(a,"mounted")),e.data.keepAlive&&(t._isMounted?Xa(a):Pa(a,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?xa(t,!0):t.$destroy())}},ra=Object.keys(na);function ia(e,t,a,o,s){if(!n(e)){var c=a.$options._base;if(l(e)&&(e=c.extend(e)),"function"===typeof e){var h;if(n(e.cid)&&(h=e,e=Aa(h,c),void 0===e))return Ma(h,t,a,o,s);t=t||{},An(e),r(t.model)&&ca(e.options,t);var u=bt(t,e,s);if(i(e.options.functional))return ea(e,u,t,a,o);var d=t.on;if(t.on=t.nativeOn,i(e.options.abstract)){var p=t.slot;t={},p&&(t.slot=p)}sa(t);var v=e.options.name||s,f=new ye("vue-component-"+e.cid+(v?"-"+v:""),t,void 0,void 0,void 0,a,{Ctor:e,propsData:u,listeners:d,tag:s,children:o},h);return f}}}function oa(e,t){var a={_isComponent:!0,_parentVnode:e,parent:t},n=e.data.inlineTemplate;return r(n)&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),new e.componentOptions.Ctor(a)}function sa(e){for(var t=e.hook||(e.hook={}),a=0;a<ra.length;a++){var n=ra[a],r=t[n],i=na[n];r===i||r&&r._merged||(t[n]=r?la(i,r):i)}}function la(e,t){var a=function(a,n){e(a,n),t(a,n)};return a._merged=!0,a}function ca(e,t){var a=e.model&&e.model.prop||"value",n=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[a]=t.model.value;var i=t.on||(t.on={}),o=i[n],s=t.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(i[n]=[s].concat(o)):i[n]=s}var ha=1,ua=2;function da(e,t,a,n,r,o){return(Array.isArray(a)||s(a))&&(r=n,n=a,a=void 0),i(o)&&(r=ua),pa(e,t,a,n,r)}function pa(e,t,a,n,i){if(r(a)&&r(a.__ob__))return Me();if(r(a)&&r(a.is)&&(t=a.is),!t)return Me();var o,s,l;(Array.isArray(n)&&"function"===typeof n[0]&&(a=a||{},a.scopedSlots={default:n[0]},n.length=0),i===ua?n=wt(n):i===ha&&(n=Vt(n)),"string"===typeof t)?(s=e.$vnode&&e.$vnode.ns||D.getTagNamespace(t),o=D.isReservedTag(t)?new ye(D.parsePlatformTagName(t),a,n,void 0,void 0,e):a&&a.pre||!r(l=Je(e.$options,"components",t))?new ye(t,a,n,void 0,void 0,e):ia(l,a,e,n,t)):o=ia(t,a,e,n);return Array.isArray(o)?o:r(o)?(r(s)&&va(o,s),r(a)&&fa(a),o):Me()}function va(e,t,a){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,a=!0),r(e.children))for(var o=0,s=e.children.length;o<s;o++){var l=e.children[o];r(l.tag)&&(n(l.ns)||i(a)&&"svg"!==l.tag)&&va(l,t,a)}}function fa(e){l(e.style)&&zt(e.style),l(e.class)&&zt(e.class)}function ma(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=Bt(t._renderChildren,r),e.$scopedSlots=a,e._c=function(t,a,n,r){return da(e,t,a,n,r,!1)},e.$createElement=function(t,a,n,r){return da(e,t,a,n,r,!0)};var i=n&&n.data;Ee(e,"$attrs",i&&i.attrs||a,null,!0),Ee(e,"$listeners",t._parentListeners||a,null,!0)}var za,ga=null;function ya(e){Xt(e.prototype),e.prototype.$nextTick=function(e){return ft(e,this)},e.prototype._render=function(){var e,t=this,a=t.$options,n=a.render,r=a._parentVnode;r&&(t.$scopedSlots=Ot(r.data.scopedSlots,t.$slots,t.$scopedSlots)),t.$vnode=r;try{ga=t,e=n.call(t._renderProxy,t.$createElement)}catch(Io){at(Io,t,"render"),e=t._vnode}finally{ga=null}return Array.isArray(e)&&1===e.length&&(e=e[0]),e instanceof ye||(e=Me()),e.parent=r,e}}function _a(e,t){return(e.__esModule||de&&"Module"===e[Symbol.toStringTag])&&(e=e.default),l(e)?t.extend(e):e}function Ma(e,t,a,n,r){var i=Me();return i.asyncFactory=e,i.asyncMeta={data:t,context:a,children:n,tag:r},i}function Aa(e,t){if(i(e.error)&&r(e.errorComp))return e.errorComp;if(r(e.resolved))return e.resolved;var a=ga;if(a&&r(e.owners)&&-1===e.owners.indexOf(a)&&e.owners.push(a),i(e.loading)&&r(e.loadingComp))return e.loadingComp;if(a&&!r(e.owners)){var o=e.owners=[a],s=!0,c=null,h=null;a.$on("hook:destroyed",(function(){return g(o,a)}));var u=function(e){for(var t=0,a=o.length;t<a;t++)o[t].$forceUpdate();e&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==h&&(clearTimeout(h),h=null))},d=x((function(a){e.resolved=_a(a,t),s?o.length=0:u(!0)})),v=x((function(t){r(e.errorComp)&&(e.error=!0,u(!0))})),f=e(d,v);return l(f)&&(p(f)?n(e.resolved)&&f.then(d,v):p(f.component)&&(f.component.then(d,v),r(f.error)&&(e.errorComp=_a(f.error,t)),r(f.loading)&&(e.loadingComp=_a(f.loading,t),0===f.delay?e.loading=!0:c=setTimeout((function(){c=null,n(e.resolved)&&n(e.error)&&(e.loading=!0,u(!1))}),f.delay||200)),r(f.timeout)&&(h=setTimeout((function(){h=null,n(e.resolved)&&v(null)}),f.timeout)))),s=!1,e.loading?e.loadingComp:e.resolved}}function ba(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var a=e[t];if(r(a)&&(r(a.componentOptions)||Et(a)))return a}}function Ia(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Ha(e,t)}function Va(e,t){za.$on(e,t)}function wa(e,t){za.$off(e,t)}function Ca(e,t){var a=za;return function n(){var r=t.apply(null,arguments);null!==r&&a.$off(e,n)}}function Ha(e,t,a){za=e,Mt(t,a||{},Va,wa,Ca,e),za=void 0}function La(e){var t=/^hook:/;e.prototype.$on=function(e,a){var n=this;if(Array.isArray(e))for(var r=0,i=e.length;r<i;r++)n.$on(e[r],a);else(n._events[e]||(n._events[e]=[])).push(a),t.test(e)&&(n._hasHookEvent=!0);return n},e.prototype.$once=function(e,t){var a=this;function n(){a.$off(e,n),t.apply(a,arguments)}return n.fn=t,a.$on(e,n),a},e.prototype.$off=function(e,t){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(e)){for(var n=0,r=e.length;n<r;n++)a.$off(e[n],t);return a}var i,o=a._events[e];if(!o)return a;if(!t)return a._events[e]=null,a;var s=o.length;while(s--)if(i=o[s],i===t||i.fn===t){o.splice(s,1);break}return a},e.prototype.$emit=function(e){var t=this,a=t._events[e];if(a){a=a.length>1?k(a):a;for(var n=k(arguments,1),r='event handler for "'+e+'"',i=0,o=a.length;i<o;i++)nt(a[i],t,n,t,r)}return t}}var ka=null;function Sa(e){var t=ka;return ka=e,function(){ka=t}}function Ba(e){var t=e.$options,a=t.parent;if(a&&!t.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(e)}e.$parent=a,e.$root=a?a.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Fa(e){e.prototype._update=function(e,t){var a=this,n=a.$el,r=a._vnode,i=Sa(a);a._vnode=e,a.$el=r?a.__patch__(r,e):a.__patch__(a.$el,e,t,!1),i(),n&&(n.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Ra(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||g(t.$children,e),e._watcher&&e._watcher.teardown();var a=e._watchers.length;while(a--)e._watchers[a].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Ra(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function Ea(e,t,a){var n;return e.$el=t,e.$options.render||(e.$options.render=Me),Ra(e,"beforeMount"),n=function(){e._update(e._render(),a)},new an(e,n,F,{before:function(){e._isMounted&&!e._isDestroyed&&Ra(e,"beforeUpdate")}},!0),a=!1,null==e.$vnode&&(e._isMounted=!0,Ra(e,"mounted")),e}function Oa(e,t,n,r,i){var o=r.data.scopedSlots,s=e.$scopedSlots,l=!!(o&&!o.$stable||s!==a&&!s.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),c=!!(i||e.$options._renderChildren||l);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data.attrs||a,e.$listeners=n||a,t&&e.$options.props){Le(!1);for(var h=e._props,u=e.$options._propKeys||[],d=0;d<u.length;d++){var p=u[d],v=e.$options.props;h[p]=Qe(p,v,t,e)}Le(!0),e.$options.propsData=t}n=n||a;var f=e.$options._parentListeners;e.$options._parentListeners=n,Ha(e,n,f),c&&(e.$slots=Bt(i,r.context),e.$forceUpdate())}function Ta(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Pa(e,t){if(t){if(e._directInactive=!1,Ta(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var a=0;a<e.$children.length;a++)Pa(e.$children[a]);Ra(e,"activated")}}function xa(e,t){if((!t||(e._directInactive=!0,!Ta(e)))&&!e._inactive){e._inactive=!0;for(var a=0;a<e.$children.length;a++)xa(e.$children[a]);Ra(e,"deactivated")}}function Ra(e,t){ze();var a=e.$options[t],n=t+" hook";if(a)for(var r=0,i=a.length;r<i;r++)nt(a[r],e,null,e,n);e._hasHookEvent&&e.$emit("hook:"+t),ge()}var Na=[],ja=[],Da={},Ua=!1,qa=!1,$a=0;function Wa(){$a=Na.length=ja.length=0,Da={},Ua=qa=!1}var Ga=0,Ka=Date.now;if(Q&&!ee){var Ja=window.performance;Ja&&"function"===typeof Ja.now&&Ka()>document.createEvent("Event").timeStamp&&(Ka=function(){return Ja.now()})}function Qa(){var e,t;for(Ga=Ka(),qa=!0,Na.sort((function(e,t){return e.id-t.id})),$a=0;$a<Na.length;$a++)e=Na[$a],e.before&&e.before(),t=e.id,Da[t]=null,e.run();var a=ja.slice(),n=Na.slice();Wa(),Za(a),Ya(n),ce&&D.devtools&&ce.emit("flush")}function Ya(e){var t=e.length;while(t--){var a=e[t],n=a.vm;n._watcher===a&&n._isMounted&&!n._isDestroyed&&Ra(n,"updated")}}function Xa(e){e._inactive=!1,ja.push(e)}function Za(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Pa(e[t],!0)}function en(e){var t=e.id;if(null==Da[t]){if(Da[t]=!0,qa){var a=Na.length-1;while(a>$a&&Na[a].id>e.id)a--;Na.splice(a+1,0,e)}else Na.push(e);Ua||(Ua=!0,ft(Qa))}}var tn=0,an=function(e,t,a,n,r){this.vm=e,r&&(e._watcher=this),e._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++tn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ue,this.newDepIds=new ue,this.expression="","function"===typeof t?this.getter=t:(this.getter=G(t),this.getter||(this.getter=F)),this.value=this.lazy?void 0:this.get()};an.prototype.get=function(){var e;ze(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Io){if(!this.user)throw Io;at(Io,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&zt(e),ge(),this.cleanupDeps()}return e},an.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},an.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},an.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():en(this)},an.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||l(e)||this.deep){var t=this.value;if(this.value=e,this.user){var a='callback for watcher "'+this.expression+'"';nt(this.cb,this.vm,[e,t],this.vm,a)}else this.cb.call(this.vm,e,t)}}},an.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},an.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},an.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1}};var nn={enumerable:!0,configurable:!0,get:F,set:F};function rn(e,t,a){nn.get=function(){return this[t][a]},nn.set=function(e){this[t][a]=e},Object.defineProperty(e,a,nn)}function on(e){e._watchers=[];var t=e.$options;t.props&&sn(e,t.props),t.methods&&fn(e,t.methods),t.data?ln(e):Fe(e._data={},!0),t.computed&&un(e,t.computed),t.watch&&t.watch!==ie&&mn(e,t.watch)}function sn(e,t){var a=e.$options.propsData||{},n=e._props={},r=e.$options._propKeys=[],i=!e.$parent;i||Le(!1);var o=function(i){r.push(i);var o=Qe(i,t,a,e);Ee(n,i,o),i in e||rn(e,"_props",i)};for(var s in t)o(s);Le(!0)}function ln(e){var t=e.$options.data;t=e._data="function"===typeof t?cn(t,e):t||{},h(t)||(t={});var a=Object.keys(t),n=e.$options.props,r=(e.$options.methods,a.length);while(r--){var i=a[r];0,n&&_(n,i)||q(i)||rn(e,"_data",i)}Fe(t,!0)}function cn(e,t){ze();try{return e.call(t,t)}catch(Io){return at(Io,t,"data()"),{}}finally{ge()}}var hn={lazy:!0};function un(e,t){var a=e._computedWatchers=Object.create(null),n=le();for(var r in t){var i=t[r],o="function"===typeof i?i:i.get;0,n||(a[r]=new an(e,o||F,F,hn)),r in e||dn(e,r,i)}}function dn(e,t,a){var n=!le();"function"===typeof a?(nn.get=n?pn(t):vn(a),nn.set=F):(nn.get=a.get?n&&!1!==a.cache?pn(t):vn(a.get):F,nn.set=a.set||F),Object.defineProperty(e,t,nn)}function pn(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),fe.target&&t.depend(),t.value}}function vn(e){return function(){return e.call(this,this)}}function fn(e,t){e.$options.props;for(var a in t)e[a]="function"!==typeof t[a]?F:L(t[a],e)}function mn(e,t){for(var a in t){var n=t[a];if(Array.isArray(n))for(var r=0;r<n.length;r++)zn(e,a,n[r]);else zn(e,a,n)}}function zn(e,t,a,n){return h(a)&&(n=a,a=a.handler),"string"===typeof a&&(a=e[a]),e.$watch(t,a,n)}function gn(e){var t={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",a),e.prototype.$set=Oe,e.prototype.$delete=Te,e.prototype.$watch=function(e,t,a){var n=this;if(h(t))return zn(n,e,t,a);a=a||{},a.user=!0;var r=new an(n,e,t,a);if(a.immediate){var i='callback for immediate watcher "'+r.expression+'"';ze(),nt(t,n,[r.value],n,i),ge()}return function(){r.teardown()}}}var yn=0;function _n(e){e.prototype._init=function(e){var t=this;t._uid=yn++,t._isVue=!0,e&&e._isComponent?Mn(t,e):t.$options=Ke(An(t.constructor),e||{},t),t._renderProxy=t,t._self=t,Ba(t),Ia(t),ma(t),Ra(t,"beforeCreate"),kt(t),on(t),Lt(t),Ra(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Mn(e,t){var a=e.$options=Object.create(e.constructor.options),n=t._parentVnode;a.parent=t.parent,a._parentVnode=n;var r=n.componentOptions;a.propsData=r.propsData,a._parentListeners=r.listeners,a._renderChildren=r.children,a._componentTag=r.tag,t.render&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns)}function An(e){var t=e.options;if(e.super){var a=An(e.super),n=e.superOptions;if(a!==n){e.superOptions=a;var r=bn(e);r&&S(e.extendOptions,r),t=e.options=Ke(a,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function bn(e){var t,a=e.options,n=e.sealedOptions;for(var r in a)a[r]!==n[r]&&(t||(t={}),t[r]=a[r]);return t}function In(e){this._init(e)}function Vn(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var a=k(arguments,1);return a.unshift(this),"function"===typeof e.install?e.install.apply(e,a):"function"===typeof e&&e.apply(null,a),t.push(e),this}}function wn(e){e.mixin=function(e){return this.options=Ke(this.options,e),this}}function Cn(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var a=this,n=a.cid,r=e._Ctor||(e._Ctor={});if(r[n])return r[n];var i=e.name||a.options.name;var o=function(e){this._init(e)};return o.prototype=Object.create(a.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ke(a.options,e),o["super"]=a,o.options.props&&Hn(o),o.options.computed&&Ln(o),o.extend=a.extend,o.mixin=a.mixin,o.use=a.use,N.forEach((function(e){o[e]=a[e]})),i&&(o.options.components[i]=o),o.superOptions=a.options,o.extendOptions=e,o.sealedOptions=S({},o.options),r[n]=o,o}}function Hn(e){var t=e.options.props;for(var a in t)rn(e.prototype,"_props",a)}function Ln(e){var t=e.options.computed;for(var a in t)dn(e.prototype,a,t[a])}function kn(e){N.forEach((function(t){e[t]=function(e,a){return a?("component"===t&&h(a)&&(a.name=a.name||e,a=this.options._base.extend(a)),"directive"===t&&"function"===typeof a&&(a={bind:a,update:a}),this.options[t+"s"][e]=a,a):this.options[t+"s"][e]}}))}function Sn(e){return e&&(e.Ctor.options.name||e.tag)}function Bn(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!u(e)&&e.test(t)}function Fn(e,t){var a=e.cache,n=e.keys,r=e._vnode;for(var i in a){var o=a[i];if(o){var s=o.name;s&&!t(s)&&En(a,i,n,r)}}}function En(e,t,a,n){var r=e[t];!r||n&&r.tag===n.tag||r.componentInstance.$destroy(),e[t]=null,g(a,t)}_n(In),gn(In),La(In),Fa(In),ya(In);var On=[String,RegExp,Array],Tn={name:"keep-alive",abstract:!0,props:{include:On,exclude:On,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,a=e.keys,n=e.vnodeToCache,r=e.keyToCache;if(n){var i=n.tag,o=n.componentInstance,s=n.componentOptions;t[r]={name:Sn(s),tag:i,componentInstance:o},a.push(r),this.max&&a.length>parseInt(this.max)&&En(t,a[0],a,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)En(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){Fn(e,(function(e){return Bn(t,e)}))})),this.$watch("exclude",(function(t){Fn(e,(function(e){return!Bn(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=ba(e),a=t&&t.componentOptions;if(a){var n=Sn(a),r=this,i=r.include,o=r.exclude;if(i&&(!n||!Bn(i,n))||o&&n&&Bn(o,n))return t;var s=this,l=s.cache,c=s.keys,h=null==t.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):t.key;l[h]?(t.componentInstance=l[h].componentInstance,g(c,h),c.push(h)):(this.vnodeToCache=t,this.keyToCache=h),t.data.keepAlive=!0}return t||e&&e[0]}},Pn={KeepAlive:Tn};function xn(e){var t={get:function(){return D}};Object.defineProperty(e,"config",t),e.util={warn:pe,extend:S,mergeOptions:Ke,defineReactive:Ee},e.set=Oe,e.delete=Te,e.nextTick=ft,e.observable=function(e){return Fe(e),e},e.options=Object.create(null),N.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,S(e.options.components,Pn),Vn(e),wn(e),Cn(e),kn(e)}xn(In),Object.defineProperty(In.prototype,"$isServer",{get:le}),Object.defineProperty(In.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(In,"FunctionalRenderContext",{value:Zt}),In.version="2.6.14";var Rn=m("style,class"),Nn=m("input,textarea,option,select,progress"),jn=function(e,t,a){return"value"===a&&Nn(e)&&"button"!==t||"selected"===a&&"option"===e||"checked"===a&&"input"===e||"muted"===a&&"video"===e},Dn=m("contenteditable,draggable,spellcheck"),Un=m("events,caret,typing,plaintext-only"),qn=function(e,t){return Jn(t)||"false"===t?"false":"contenteditable"===e&&Un(t)?t:"true"},$n=m("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wn="http://www.w3.org/1999/xlink",Gn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Kn=function(e){return Gn(e)?e.slice(6,e.length):""},Jn=function(e){return null==e||!1===e};function Qn(e){var t=e.data,a=e,n=e;while(r(n.componentInstance))n=n.componentInstance._vnode,n&&n.data&&(t=Yn(n.data,t));while(r(a=a.parent))a&&a.data&&(t=Yn(t,a.data));return Xn(t.staticClass,t.class)}function Yn(e,t){return{staticClass:Zn(e.staticClass,t.staticClass),class:r(e.class)?[e.class,t.class]:t.class}}function Xn(e,t){return r(e)||r(t)?Zn(e,er(t)):""}function Zn(e,t){return e?t?e+" "+t:e:t||""}function er(e){return Array.isArray(e)?tr(e):l(e)?ar(e):"string"===typeof e?e:""}function tr(e){for(var t,a="",n=0,i=e.length;n<i;n++)r(t=er(e[n]))&&""!==t&&(a&&(a+=" "),a+=t);return a}function ar(e){var t="";for(var a in e)e[a]&&(t&&(t+=" "),t+=a);return t}var nr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=m("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),ir=m("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),or=function(e){return rr(e)||ir(e)};function sr(e){return ir(e)?"svg":"math"===e?"math":void 0}var lr=Object.create(null);function cr(e){if(!Q)return!0;if(or(e))return!1;if(e=e.toLowerCase(),null!=lr[e])return lr[e];var t=document.createElement(e);return e.indexOf("-")>-1?lr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:lr[e]=/HTMLUnknownElement/.test(t.toString())}var hr=m("text,number,password,search,email,tel,url");function ur(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function dr(e,t){var a=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&a.setAttribute("multiple","multiple"),a}function pr(e,t){return document.createElementNS(nr[e],t)}function vr(e){return document.createTextNode(e)}function fr(e){return document.createComment(e)}function mr(e,t,a){e.insertBefore(t,a)}function zr(e,t){e.removeChild(t)}function gr(e,t){e.appendChild(t)}function yr(e){return e.parentNode}function _r(e){return e.nextSibling}function Mr(e){return e.tagName}function Ar(e,t){e.textContent=t}function br(e,t){e.setAttribute(t,"")}var Ir=Object.freeze({createElement:dr,createElementNS:pr,createTextNode:vr,createComment:fr,insertBefore:mr,removeChild:zr,appendChild:gr,parentNode:yr,nextSibling:_r,tagName:Mr,setTextContent:Ar,setStyleScope:br}),Vr={create:function(e,t){wr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(wr(e,!0),wr(t))},destroy:function(e){wr(e,!0)}};function wr(e,t){var a=e.data.ref;if(r(a)){var n=e.context,i=e.componentInstance||e.elm,o=n.$refs;t?Array.isArray(o[a])?g(o[a],i):o[a]===i&&(o[a]=void 0):e.data.refInFor?Array.isArray(o[a])?o[a].indexOf(i)<0&&o[a].push(i):o[a]=[i]:o[a]=i}}var Cr=new ye("",{},[]),Hr=["create","activate","update","remove","destroy"];function Lr(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&r(e.data)===r(t.data)&&kr(e,t)||i(e.isAsyncPlaceholder)&&n(t.asyncFactory.error))}function kr(e,t){if("input"!==e.tag)return!0;var a,n=r(a=e.data)&&r(a=a.attrs)&&a.type,i=r(a=t.data)&&r(a=a.attrs)&&a.type;return n===i||hr(n)&&hr(i)}function Sr(e,t,a){var n,i,o={};for(n=t;n<=a;++n)i=e[n].key,r(i)&&(o[i]=n);return o}function Br(e){var t,a,o={},l=e.modules,c=e.nodeOps;for(t=0;t<Hr.length;++t)for(o[Hr[t]]=[],a=0;a<l.length;++a)r(l[a][Hr[t]])&&o[Hr[t]].push(l[a][Hr[t]]);function h(e){return new ye(c.tagName(e).toLowerCase(),{},[],void 0,e)}function u(e,t){function a(){0===--a.listeners&&d(e)}return a.listeners=t,a}function d(e){var t=c.parentNode(e);r(t)&&c.removeChild(t,e)}function p(e,t,a,n,o,s,l){if(r(e.elm)&&r(s)&&(e=s[l]=be(e)),e.isRootInsert=!o,!v(e,t,a,n)){var h=e.data,u=e.children,d=e.tag;r(d)?(e.elm=e.ns?c.createElementNS(e.ns,d):c.createElement(d,e),A(e),y(e,u,t),r(h)&&M(e,t),g(a,e.elm,n)):i(e.isComment)?(e.elm=c.createComment(e.text),g(a,e.elm,n)):(e.elm=c.createTextNode(e.text),g(a,e.elm,n))}}function v(e,t,a,n){var o=e.data;if(r(o)){var s=r(e.componentInstance)&&o.keepAlive;if(r(o=o.hook)&&r(o=o.init)&&o(e,!1),r(e.componentInstance))return f(e,t),g(a,e.elm,n),i(s)&&z(e,t,a,n),!0}}function f(e,t){r(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(M(e,t),A(e)):(wr(e),t.push(e))}function z(e,t,a,n){var i,s=e;while(s.componentInstance)if(s=s.componentInstance._vnode,r(i=s.data)&&r(i=i.transition)){for(i=0;i<o.activate.length;++i)o.activate[i](Cr,s);t.push(s);break}g(a,e.elm,n)}function g(e,t,a){r(e)&&(r(a)?c.parentNode(a)===e&&c.insertBefore(e,t,a):c.appendChild(e,t))}function y(e,t,a){if(Array.isArray(t)){0;for(var n=0;n<t.length;++n)p(t[n],a,e.elm,null,!0,t,n)}else s(e.text)&&c.appendChild(e.elm,c.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return r(e.tag)}function M(e,a){for(var n=0;n<o.create.length;++n)o.create[n](Cr,e);t=e.data.hook,r(t)&&(r(t.create)&&t.create(Cr,e),r(t.insert)&&a.push(e))}function A(e){var t;if(r(t=e.fnScopeId))c.setStyleScope(e.elm,t);else{var a=e;while(a)r(t=a.context)&&r(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t),a=a.parent}r(t=ka)&&t!==e.context&&t!==e.fnContext&&r(t=t.$options._scopeId)&&c.setStyleScope(e.elm,t)}function b(e,t,a,n,r,i){for(;n<=r;++n)p(a[n],i,e,t,!1,a,n)}function I(e){var t,a,n=e.data;if(r(n))for(r(t=n.hook)&&r(t=t.destroy)&&t(e),t=0;t<o.destroy.length;++t)o.destroy[t](e);if(r(t=e.children))for(a=0;a<e.children.length;++a)I(e.children[a])}function V(e,t,a){for(;t<=a;++t){var n=e[t];r(n)&&(r(n.tag)?(w(n),I(n)):d(n.elm))}}function w(e,t){if(r(t)||r(e.data)){var a,n=o.remove.length+1;for(r(t)?t.listeners+=n:t=u(e.elm,n),r(a=e.componentInstance)&&r(a=a._vnode)&&r(a.data)&&w(a,t),a=0;a<o.remove.length;++a)o.remove[a](e,t);r(a=e.data.hook)&&r(a=a.remove)?a(e,t):t()}else d(e.elm)}function C(e,t,a,i,o){var s,l,h,u,d=0,v=0,f=t.length-1,m=t[0],z=t[f],g=a.length-1,y=a[0],_=a[g],M=!o;while(d<=f&&v<=g)n(m)?m=t[++d]:n(z)?z=t[--f]:Lr(m,y)?(L(m,y,i,a,v),m=t[++d],y=a[++v]):Lr(z,_)?(L(z,_,i,a,g),z=t[--f],_=a[--g]):Lr(m,_)?(L(m,_,i,a,g),M&&c.insertBefore(e,m.elm,c.nextSibling(z.elm)),m=t[++d],_=a[--g]):Lr(z,y)?(L(z,y,i,a,v),M&&c.insertBefore(e,z.elm,m.elm),z=t[--f],y=a[++v]):(n(s)&&(s=Sr(t,d,f)),l=r(y.key)?s[y.key]:H(y,t,d,f),n(l)?p(y,i,e,m.elm,!1,a,v):(h=t[l],Lr(h,y)?(L(h,y,i,a,v),t[l]=void 0,M&&c.insertBefore(e,h.elm,m.elm)):p(y,i,e,m.elm,!1,a,v)),y=a[++v]);d>f?(u=n(a[g+1])?null:a[g+1].elm,b(e,u,a,v,g,i)):v>g&&V(t,d,f)}function H(e,t,a,n){for(var i=a;i<n;i++){var o=t[i];if(r(o)&&Lr(e,o))return i}}function L(e,t,a,s,l,h){if(e!==t){r(t.elm)&&r(s)&&(t=s[l]=be(t));var u=t.elm=e.elm;if(i(e.isAsyncPlaceholder))r(t.asyncFactory.resolved)?B(e.elm,t,a):t.isAsyncPlaceholder=!0;else if(i(t.isStatic)&&i(e.isStatic)&&t.key===e.key&&(i(t.isCloned)||i(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,p=t.data;r(p)&&r(d=p.hook)&&r(d=d.prepatch)&&d(e,t);var v=e.children,f=t.children;if(r(p)&&_(t)){for(d=0;d<o.update.length;++d)o.update[d](e,t);r(d=p.hook)&&r(d=d.update)&&d(e,t)}n(t.text)?r(v)&&r(f)?v!==f&&C(u,v,f,a,h):r(f)?(r(e.text)&&c.setTextContent(u,""),b(u,null,f,0,f.length-1,a)):r(v)?V(v,0,v.length-1):r(e.text)&&c.setTextContent(u,""):e.text!==t.text&&c.setTextContent(u,t.text),r(p)&&r(d=p.hook)&&r(d=d.postpatch)&&d(e,t)}}}function k(e,t,a){if(i(a)&&r(e.parent))e.parent.data.pendingInsert=t;else for(var n=0;n<t.length;++n)t[n].data.hook.insert(t[n])}var S=m("attrs,class,staticClass,staticStyle,key");function B(e,t,a,n){var o,s=t.tag,l=t.data,c=t.children;if(n=n||l&&l.pre,t.elm=e,i(t.isComment)&&r(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(r(l)&&(r(o=l.hook)&&r(o=o.init)&&o(t,!0),r(o=t.componentInstance)))return f(t,a),!0;if(r(s)){if(r(c))if(e.hasChildNodes())if(r(o=l)&&r(o=o.domProps)&&r(o=o.innerHTML)){if(o!==e.innerHTML)return!1}else{for(var h=!0,u=e.firstChild,d=0;d<c.length;d++){if(!u||!B(u,c[d],a,n)){h=!1;break}u=u.nextSibling}if(!h||u)return!1}else y(t,c,a);if(r(l)){var p=!1;for(var v in l)if(!S(v)){p=!0,M(t,a);break}!p&&l["class"]&&zt(l["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,a,s){if(!n(t)){var l=!1,u=[];if(n(e))l=!0,p(t,u);else{var d=r(e.nodeType);if(!d&&Lr(e,t))L(e,t,u,null,null,s);else{if(d){if(1===e.nodeType&&e.hasAttribute(R)&&(e.removeAttribute(R),a=!0),i(a)&&B(e,t,u))return k(t,u,!0),e;e=h(e)}var v=e.elm,f=c.parentNode(v);if(p(t,u,v._leaveCb?null:f,c.nextSibling(v)),r(t.parent)){var m=t.parent,z=_(t);while(m){for(var g=0;g<o.destroy.length;++g)o.destroy[g](m);if(m.elm=t.elm,z){for(var y=0;y<o.create.length;++y)o.create[y](Cr,m);var M=m.data.hook.insert;if(M.merged)for(var A=1;A<M.fns.length;A++)M.fns[A]()}else wr(m);m=m.parent}}r(f)?V([e],0,0):r(e.tag)&&I(e)}}return k(t,u,l),t.elm}r(e)&&I(e)}}var Fr={create:Er,update:Er,destroy:function(e){Er(e,Cr)}};function Er(e,t){(e.data.directives||t.data.directives)&&Or(e,t)}function Or(e,t){var a,n,r,i=e===Cr,o=t===Cr,s=Pr(e.data.directives,e.context),l=Pr(t.data.directives,t.context),c=[],h=[];for(a in l)n=s[a],r=l[a],n?(r.oldValue=n.value,r.oldArg=n.arg,Rr(r,"update",t,e),r.def&&r.def.componentUpdated&&h.push(r)):(Rr(r,"bind",t,e),r.def&&r.def.inserted&&c.push(r));if(c.length){var u=function(){for(var a=0;a<c.length;a++)Rr(c[a],"inserted",t,e)};i?At(t,"insert",u):u()}if(h.length&&At(t,"postpatch",(function(){for(var a=0;a<h.length;a++)Rr(h[a],"componentUpdated",t,e)})),!i)for(a in s)l[a]||Rr(s[a],"unbind",e,e,o)}var Tr=Object.create(null);function Pr(e,t){var a,n,r=Object.create(null);if(!e)return r;for(a=0;a<e.length;a++)n=e[a],n.modifiers||(n.modifiers=Tr),r[xr(n)]=n,n.def=Je(t.$options,"directives",n.name,!0);return r}function xr(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Rr(e,t,a,n,r){var i=e.def&&e.def[t];if(i)try{i(a.elm,e,a,n,r)}catch(Io){at(Io,a.context,"directive "+e.name+" "+t+" hook")}}var Nr=[Vr,Fr];function jr(e,t){var a=t.componentOptions;if((!r(a)||!1!==a.Ctor.options.inheritAttrs)&&(!n(e.data.attrs)||!n(t.data.attrs))){var i,o,s,l=t.elm,c=e.data.attrs||{},h=t.data.attrs||{};for(i in r(h.__ob__)&&(h=t.data.attrs=S({},h)),h)o=h[i],s=c[i],s!==o&&Dr(l,i,o,t.data.pre);for(i in(ee||ae)&&h.value!==c.value&&Dr(l,"value",h.value),c)n(h[i])&&(Gn(i)?l.removeAttributeNS(Wn,Kn(i)):Dn(i)||l.removeAttribute(i))}}function Dr(e,t,a,n){n||e.tagName.indexOf("-")>-1?Ur(e,t,a):$n(t)?Jn(a)?e.removeAttribute(t):(a="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,a)):Dn(t)?e.setAttribute(t,qn(t,a)):Gn(t)?Jn(a)?e.removeAttributeNS(Wn,Kn(t)):e.setAttributeNS(Wn,t,a):Ur(e,t,a)}function Ur(e,t,a){if(Jn(a))e.removeAttribute(t);else{if(ee&&!te&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==a&&!e.__ieph){var n=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",n)};e.addEventListener("input",n),e.__ieph=!0}e.setAttribute(t,a)}}var qr={create:jr,update:jr};function $r(e,t){var a=t.elm,i=t.data,o=e.data;if(!(n(i.staticClass)&&n(i.class)&&(n(o)||n(o.staticClass)&&n(o.class)))){var s=Qn(t),l=a._transitionClasses;r(l)&&(s=Zn(s,er(l))),s!==a._prevClass&&(a.setAttribute("class",s),a._prevClass=s)}}var Wr,Gr={create:$r,update:$r},Kr="__r",Jr="__c";function Qr(e){if(r(e[Kr])){var t=ee?"change":"input";e[t]=[].concat(e[Kr],e[t]||[]),delete e[Kr]}r(e[Jr])&&(e.change=[].concat(e[Jr],e.change||[]),delete e[Jr])}function Yr(e,t,a){var n=Wr;return function r(){var i=t.apply(null,arguments);null!==i&&ei(e,r,a,n)}}var Xr=st&&!(re&&Number(re[1])<=53);function Zr(e,t,a,n){if(Xr){var r=Ga,i=t;t=i._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return i.apply(this,arguments)}}Wr.addEventListener(e,t,oe?{capture:a,passive:n}:a)}function ei(e,t,a,n){(n||Wr).removeEventListener(e,t._wrapper||t,a)}function ti(e,t){if(!n(e.data.on)||!n(t.data.on)){var a=t.data.on||{},r=e.data.on||{};Wr=t.elm,Qr(a),Mt(a,r,Zr,ei,Yr,t.context),Wr=void 0}}var ai,ni={create:ti,update:ti};function ri(e,t){if(!n(e.data.domProps)||!n(t.data.domProps)){var a,i,o=t.elm,s=e.data.domProps||{},l=t.data.domProps||{};for(a in r(l.__ob__)&&(l=t.data.domProps=S({},l)),s)a in l||(o[a]="");for(a in l){if(i=l[a],"textContent"===a||"innerHTML"===a){if(t.children&&(t.children.length=0),i===s[a])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===a&&"PROGRESS"!==o.tagName){o._value=i;var c=n(i)?"":String(i);ii(o,c)&&(o.value=c)}else if("innerHTML"===a&&ir(o.tagName)&&n(o.innerHTML)){ai=ai||document.createElement("div"),ai.innerHTML="<svg>"+i+"</svg>";var h=ai.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(h.firstChild)o.appendChild(h.firstChild)}else if(i!==s[a])try{o[a]=i}catch(Io){}}}}function ii(e,t){return!e.composing&&("OPTION"===e.tagName||oi(e,t)||si(e,t))}function oi(e,t){var a=!0;try{a=document.activeElement!==e}catch(Io){}return a&&e.value!==t}function si(e,t){var a=e.value,n=e._vModifiers;if(r(n)){if(n.number)return f(a)!==f(t);if(n.trim)return a.trim()!==t.trim()}return a!==t}var li={create:ri,update:ri},ci=M((function(e){var t={},a=/;(?![^(]*\))/g,n=/:(.+)/;return e.split(a).forEach((function(e){if(e){var a=e.split(n);a.length>1&&(t[a[0].trim()]=a[1].trim())}})),t}));function hi(e){var t=ui(e.style);return e.staticStyle?S(e.staticStyle,t):t}function ui(e){return Array.isArray(e)?B(e):"string"===typeof e?ci(e):e}function di(e,t){var a,n={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(a=hi(r.data))&&S(n,a)}(a=hi(e.data))&&S(n,a);var i=e;while(i=i.parent)i.data&&(a=hi(i.data))&&S(n,a);return n}var pi,vi=/^--/,fi=/\s*!important$/,mi=function(e,t,a){if(vi.test(t))e.style.setProperty(t,a);else if(fi.test(a))e.style.setProperty(w(t),a.replace(fi,""),"important");else{var n=gi(t);if(Array.isArray(a))for(var r=0,i=a.length;r<i;r++)e.style[n]=a[r];else e.style[n]=a}},zi=["Webkit","Moz","ms"],gi=M((function(e){if(pi=pi||document.createElement("div").style,e=b(e),"filter"!==e&&e in pi)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),a=0;a<zi.length;a++){var n=zi[a]+t;if(n in pi)return n}}));function yi(e,t){var a=t.data,i=e.data;if(!(n(a.staticStyle)&&n(a.style)&&n(i.staticStyle)&&n(i.style))){var o,s,l=t.elm,c=i.staticStyle,h=i.normalizedStyle||i.style||{},u=c||h,d=ui(t.data.style)||{};t.data.normalizedStyle=r(d.__ob__)?S({},d):d;var p=di(t,!0);for(s in u)n(p[s])&&mi(l,s,"");for(s in p)o=p[s],o!==u[s]&&mi(l,s,null==o?"":o)}}var _i={create:yi,update:yi},Mi=/\s+/;function Ai(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Mi).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var a=" "+(e.getAttribute("class")||"")+" ";a.indexOf(" "+t+" ")<0&&e.setAttribute("class",(a+t).trim())}}function bi(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Mi).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var a=" "+(e.getAttribute("class")||"")+" ",n=" "+t+" ";while(a.indexOf(n)>=0)a=a.replace(n," ");a=a.trim(),a?e.setAttribute("class",a):e.removeAttribute("class")}}function Ii(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&S(t,Vi(e.name||"v")),S(t,e),t}return"string"===typeof e?Vi(e):void 0}}var Vi=M((function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}})),wi=Q&&!te,Ci="transition",Hi="animation",Li="transition",ki="transitionend",Si="animation",Bi="animationend";wi&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Li="WebkitTransition",ki="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Si="WebkitAnimation",Bi="webkitAnimationEnd"));var Fi=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function Ei(e){Fi((function(){Fi(e)}))}function Oi(e,t){var a=e._transitionClasses||(e._transitionClasses=[]);a.indexOf(t)<0&&(a.push(t),Ai(e,t))}function Ti(e,t){e._transitionClasses&&g(e._transitionClasses,t),bi(e,t)}function Pi(e,t,a){var n=Ri(e,t),r=n.type,i=n.timeout,o=n.propCount;if(!r)return a();var s=r===Ci?ki:Bi,l=0,c=function(){e.removeEventListener(s,h),a()},h=function(t){t.target===e&&++l>=o&&c()};setTimeout((function(){l<o&&c()}),i+1),e.addEventListener(s,h)}var xi=/\b(transform|all)(,|$)/;function Ri(e,t){var a,n=window.getComputedStyle(e),r=(n[Li+"Delay"]||"").split(", "),i=(n[Li+"Duration"]||"").split(", "),o=Ni(r,i),s=(n[Si+"Delay"]||"").split(", "),l=(n[Si+"Duration"]||"").split(", "),c=Ni(s,l),h=0,u=0;t===Ci?o>0&&(a=Ci,h=o,u=i.length):t===Hi?c>0&&(a=Hi,h=c,u=l.length):(h=Math.max(o,c),a=h>0?o>c?Ci:Hi:null,u=a?a===Ci?i.length:l.length:0);var d=a===Ci&&xi.test(n[Li+"Property"]);return{type:a,timeout:h,propCount:u,hasTransform:d}}function Ni(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,a){return ji(t)+ji(e[a])})))}function ji(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Di(e,t){var a=e.elm;r(a._leaveCb)&&(a._leaveCb.cancelled=!0,a._leaveCb());var i=Ii(e.data.transition);if(!n(i)&&!r(a._enterCb)&&1===a.nodeType){var o=i.css,s=i.type,c=i.enterClass,h=i.enterToClass,u=i.enterActiveClass,d=i.appearClass,p=i.appearToClass,v=i.appearActiveClass,m=i.beforeEnter,z=i.enter,g=i.afterEnter,y=i.enterCancelled,_=i.beforeAppear,M=i.appear,A=i.afterAppear,b=i.appearCancelled,I=i.duration,V=ka,w=ka.$vnode;while(w&&w.parent)V=w.context,w=w.parent;var C=!V._isMounted||!e.isRootInsert;if(!C||M||""===M){var H=C&&d?d:c,L=C&&v?v:u,k=C&&p?p:h,S=C&&_||m,B=C&&"function"===typeof M?M:z,F=C&&A||g,E=C&&b||y,O=f(l(I)?I.enter:I);0;var T=!1!==o&&!te,P=$i(B),R=a._enterCb=x((function(){T&&(Ti(a,k),Ti(a,L)),R.cancelled?(T&&Ti(a,H),E&&E(a)):F&&F(a),a._enterCb=null}));e.data.show||At(e,"insert",(function(){var t=a.parentNode,n=t&&t._pending&&t._pending[e.key];n&&n.tag===e.tag&&n.elm._leaveCb&&n.elm._leaveCb(),B&&B(a,R)})),S&&S(a),T&&(Oi(a,H),Oi(a,L),Ei((function(){Ti(a,H),R.cancelled||(Oi(a,k),P||(qi(O)?setTimeout(R,O):Pi(a,s,R)))}))),e.data.show&&(t&&t(),B&&B(a,R)),T||P||R()}}}function Ui(e,t){var a=e.elm;r(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var i=Ii(e.data.transition);if(n(i)||1!==a.nodeType)return t();if(!r(a._leaveCb)){var o=i.css,s=i.type,c=i.leaveClass,h=i.leaveToClass,u=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,v=i.afterLeave,m=i.leaveCancelled,z=i.delayLeave,g=i.duration,y=!1!==o&&!te,_=$i(p),M=f(l(g)?g.leave:g);0;var A=a._leaveCb=x((function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[e.key]=null),y&&(Ti(a,h),Ti(a,u)),A.cancelled?(y&&Ti(a,c),m&&m(a)):(t(),v&&v(a)),a._leaveCb=null}));z?z(b):b()}function b(){A.cancelled||(!e.data.show&&a.parentNode&&((a.parentNode._pending||(a.parentNode._pending={}))[e.key]=e),d&&d(a),y&&(Oi(a,c),Oi(a,u),Ei((function(){Ti(a,c),A.cancelled||(Oi(a,h),_||(qi(M)?setTimeout(A,M):Pi(a,s,A)))}))),p&&p(a,A),y||_||A())}}function qi(e){return"number"===typeof e&&!isNaN(e)}function $i(e){if(n(e))return!1;var t=e.fns;return r(t)?$i(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function Wi(e,t){!0!==t.data.show&&Di(t)}var Gi=Q?{create:Wi,activate:Wi,remove:function(e,t){!0!==e.data.show?Ui(e,t):t()}}:{},Ki=[qr,Gr,ni,li,_i,Gi],Ji=Ki.concat(Nr),Qi=Br({nodeOps:Ir,modules:Ji});te&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&ro(e,"input")}));var Yi={inserted:function(e,t,a,n){"select"===a.tag?(n.elm&&!n.elm._vOptions?At(a,"postpatch",(function(){Yi.componentUpdated(e,t,a)})):Xi(e,t,a.context),e._vOptions=[].map.call(e.options,to)):("textarea"===a.tag||hr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",ao),e.addEventListener("compositionend",no),e.addEventListener("change",no),te&&(e.vmodel=!0)))},componentUpdated:function(e,t,a){if("select"===a.tag){Xi(e,t,a.context);var n=e._vOptions,r=e._vOptions=[].map.call(e.options,to);if(r.some((function(e,t){return!T(e,n[t])}))){var i=e.multiple?t.value.some((function(e){return eo(e,r)})):t.value!==t.oldValue&&eo(t.value,r);i&&ro(e,"change")}}}};function Xi(e,t,a){Zi(e,t,a),(ee||ae)&&setTimeout((function(){Zi(e,t,a)}),0)}function Zi(e,t,a){var n=t.value,r=e.multiple;if(!r||Array.isArray(n)){for(var i,o,s=0,l=e.options.length;s<l;s++)if(o=e.options[s],r)i=P(n,to(o))>-1,o.selected!==i&&(o.selected=i);else if(T(to(o),n))return void(e.selectedIndex!==s&&(e.selectedIndex=s));r||(e.selectedIndex=-1)}}function eo(e,t){return t.every((function(t){return!T(t,e)}))}function to(e){return"_value"in e?e._value:e.value}function ao(e){e.target.composing=!0}function no(e){e.target.composing&&(e.target.composing=!1,ro(e.target,"input"))}function ro(e,t){var a=document.createEvent("HTMLEvents");a.initEvent(t,!0,!0),e.dispatchEvent(a)}function io(e){return!e.componentInstance||e.data&&e.data.transition?e:io(e.componentInstance._vnode)}var oo={bind:function(e,t,a){var n=t.value;a=io(a);var r=a.data&&a.data.transition,i=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;n&&r?(a.data.show=!0,Di(a,(function(){e.style.display=i}))):e.style.display=n?i:"none"},update:function(e,t,a){var n=t.value,r=t.oldValue;if(!n!==!r){a=io(a);var i=a.data&&a.data.transition;i?(a.data.show=!0,n?Di(a,(function(){e.style.display=e.__vOriginalDisplay})):Ui(a,(function(){e.style.display="none"}))):e.style.display=n?e.__vOriginalDisplay:"none"}},unbind:function(e,t,a,n,r){r||(e.style.display=e.__vOriginalDisplay)}},so={model:Yi,show:oo},lo={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function co(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?co(ba(t.children)):e}function ho(e){var t={},a=e.$options;for(var n in a.propsData)t[n]=e[n];var r=a._parentListeners;for(var i in r)t[b(i)]=r[i];return t}function uo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function po(e){while(e=e.parent)if(e.data.transition)return!0}function vo(e,t){return t.key===e.key&&t.tag===e.tag}var fo=function(e){return e.tag||Et(e)},mo=function(e){return"show"===e.name},zo={name:"transition",props:lo,abstract:!0,render:function(e){var t=this,a=this.$slots.default;if(a&&(a=a.filter(fo),a.length)){0;var n=this.mode;0;var r=a[0];if(po(this.$vnode))return r;var i=co(r);if(!i)return r;if(this._leaving)return uo(e,r);var o="__transition-"+this._uid+"-";i.key=null==i.key?i.isComment?o+"comment":o+i.tag:s(i.key)?0===String(i.key).indexOf(o)?i.key:o+i.key:i.key;var l=(i.data||(i.data={})).transition=ho(this),c=this._vnode,h=co(c);if(i.data.directives&&i.data.directives.some(mo)&&(i.data.show=!0),h&&h.data&&!vo(i,h)&&!Et(h)&&(!h.componentInstance||!h.componentInstance._vnode.isComment)){var u=h.data.transition=S({},l);if("out-in"===n)return this._leaving=!0,At(u,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),uo(e,r);if("in-out"===n){if(Et(i))return c;var d,p=function(){d()};At(l,"afterEnter",p),At(l,"enterCancelled",p),At(u,"delayLeave",(function(e){d=e}))}}return r}}},go=S({tag:String,moveClass:String},lo);delete go.mode;var yo={props:go,beforeMount:function(){var e=this,t=this._update;this._update=function(a,n){var r=Sa(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,a,n)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",a=Object.create(null),n=this.prevChildren=this.children,r=this.$slots.default||[],i=this.children=[],o=ho(this),s=0;s<r.length;s++){var l=r[s];if(l.tag)if(null!=l.key&&0!==String(l.key).indexOf("__vlist"))i.push(l),a[l.key]=l,(l.data||(l.data={})).transition=o;else;}if(n){for(var c=[],h=[],u=0;u<n.length;u++){var d=n[u];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),a[d.key]?c.push(d):h.push(d)}this.kept=e(t,null,c),this.removed=h}return e(t,null,i)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(_o),e.forEach(Mo),e.forEach(Ao),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var a=e.elm,n=a.style;Oi(a,t),n.transform=n.WebkitTransform=n.transitionDuration="",a.addEventListener(ki,a._moveCb=function e(n){n&&n.target!==a||n&&!/transform$/.test(n.propertyName)||(a.removeEventListener(ki,e),a._moveCb=null,Ti(a,t))})}})))},methods:{hasMove:function(e,t){if(!wi)return!1;if(this._hasMove)return this._hasMove;var a=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){bi(a,e)})),Ai(a,t),a.style.display="none",this.$el.appendChild(a);var n=Ri(a);return this.$el.removeChild(a),this._hasMove=n.hasTransform}}};function _o(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Mo(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ao(e){var t=e.data.pos,a=e.data.newPos,n=t.left-a.left,r=t.top-a.top;if(n||r){e.data.moved=!0;var i=e.elm.style;i.transform=i.WebkitTransform="translate("+n+"px,"+r+"px)",i.transitionDuration="0s"}}var bo={Transition:zo,TransitionGroup:yo};In.config.mustUseProp=jn,In.config.isReservedTag=or,In.config.isReservedAttr=Rn,In.config.getTagNamespace=sr,In.config.isUnknownElement=cr,S(In.options.directives,so),S(In.options.components,bo),In.prototype.__patch__=Q?Qi:F,In.prototype.$mount=function(e,t){return e=e&&Q?ur(e):void 0,Ea(this,e,t)},Q&&setTimeout((function(){D.devtools&&ce&&ce.emit("init",In)}),0),t["a"]=In}).call(this,a("c8ba"))},"2ba4":function(e,t){var a=Function.prototype,n=a.apply,r=a.bind,i=a.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?i.bind(n):function(){return i.apply(n,arguments)})},"2cf4":function(e,t,a){var n,r,i,o,s=a("da84"),l=a("2ba4"),c=a("0366"),h=a("1626"),u=a("1a2d"),d=a("d039"),p=a("1be4"),v=a("f36a"),f=a("cc12"),m=a("1cdc"),z=a("605d"),g=s.setImmediate,y=s.clearImmediate,_=s.process,M=s.Dispatch,A=s.Function,b=s.MessageChannel,I=s.String,V=0,w={},C="onreadystatechange";try{n=s.location}catch(B){}var H=function(e){if(u(w,e)){var t=w[e];delete w[e],t()}},L=function(e){return function(){H(e)}},k=function(e){H(e.data)},S=function(e){s.postMessage(I(e),n.protocol+"//"+n.host)};g&&y||(g=function(e){var t=v(arguments,1);return w[++V]=function(){l(h(e)?e:A(e),void 0,t)},r(V),V},y=function(e){delete w[e]},z?r=function(e){_.nextTick(L(e))}:M&&M.now?r=function(e){M.now(L(e))}:b&&!m?(i=new b,o=i.port2,i.port1.onmessage=k,r=c(o.postMessage,o)):s.addEventListener&&h(s.postMessage)&&!s.importScripts&&n&&"file:"!==n.protocol&&!d(S)?(r=S,s.addEventListener("message",k,!1)):r=C in f("script")?function(e){p.appendChild(f("script"))[C]=function(){p.removeChild(this),H(e)}}:function(e){setTimeout(L(e),0)}),e.exports={set:g,clear:y}},"2d00":function(e,t,a){var n,r,i=a("da84"),o=a("342f"),s=i.process,l=i.Deno,c=s&&s.versions||l&&l.version,h=c&&c.v8;h&&(n=h.split("."),r=n[0]>0&&n[0]<4?1:+(n[0]+n[1])),!r&&o&&(n=o.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=o.match(/Chrome\/(\d+)/),n&&(r=+n[1]))),e.exports=r},"2f62":function(e,t,a){"use strict";(function(e){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function a(e){var t=Number(e.version.split(".")[0]);if(t>=2)e.mixin({beforeCreate:n});else{var a=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={}),e.init=e.init?[n].concat(e.init):n,a.call(this,e)}}function n(){var e=this.$options;e.store?this.$store="function"===typeof e.store?e.store():e.store:e.parent&&e.parent.$store&&(this.$store=e.parent.$store)}}var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},r=n.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(e){r&&(e._devtoolHook=r,r.emit("vuex:init",e),r.on("vuex:travel-to-state",(function(t){e.replaceState(t)})),e.subscribe((function(e,t){r.emit("vuex:mutation",e,t)}),{prepend:!0}),e.subscribeAction((function(e,t){r.emit("vuex:action",e,t)}),{prepend:!0}))}function o(e,t){return e.filter(t)[0]}function s(e,t){if(void 0===t&&(t=[]),null===e||"object"!==typeof e)return e;var a=o(t,(function(t){return t.original===e}));if(a)return a.copy;var n=Array.isArray(e)?[]:{};return t.push({original:e,copy:n}),Object.keys(e).forEach((function(a){n[a]=s(e[a],t)})),n}function l(e,t){Object.keys(e).forEach((function(a){return t(e[a],a)}))}function c(e){return null!==e&&"object"===typeof e}function h(e){return e&&"function"===typeof e.then}function u(e,t){return function(){return e(t)}}var d=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var a=e.state;this.state=("function"===typeof a?a():a)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},d.prototype.addChild=function(e,t){this._children[e]=t},d.prototype.removeChild=function(e){delete this._children[e]},d.prototype.getChild=function(e){return this._children[e]},d.prototype.hasChild=function(e){return e in this._children},d.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},d.prototype.forEachChild=function(e){l(this._children,e)},d.prototype.forEachGetter=function(e){this._rawModule.getters&&l(this._rawModule.getters,e)},d.prototype.forEachAction=function(e){this._rawModule.actions&&l(this._rawModule.actions,e)},d.prototype.forEachMutation=function(e){this._rawModule.mutations&&l(this._rawModule.mutations,e)},Object.defineProperties(d.prototype,p);var v=function(e){this.register([],e,!1)};function f(e,t,a){if(t.update(a),a.modules)for(var n in a.modules){if(!t.getChild(n))return void 0;f(e.concat(n),t.getChild(n),a.modules[n])}}v.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},v.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,a){return t=t.getChild(a),e+(t.namespaced?a+"/":"")}),"")},v.prototype.update=function(e){f([],this.root,e)},v.prototype.register=function(e,t,a){var n=this;void 0===a&&(a=!0);var r=new d(t,a);if(0===e.length)this.root=r;else{var i=this.get(e.slice(0,-1));i.addChild(e[e.length-1],r)}t.modules&&l(t.modules,(function(t,r){n.register(e.concat(r),t,a)}))},v.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),a=e[e.length-1],n=t.getChild(a);n&&n.runtime&&t.removeChild(a)},v.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),a=e[e.length-1];return!!t&&t.hasChild(a)};var m;var z=function(e){var t=this;void 0===e&&(e={}),!m&&"undefined"!==typeof window&&window.Vue&&S(window.Vue);var a=e.plugins;void 0===a&&(a=[]);var n=e.strict;void 0===n&&(n=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new v(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new m,this._makeLocalGettersCache=Object.create(null);var r=this,o=this,s=o.dispatch,l=o.commit;this.dispatch=function(e,t){return s.call(r,e,t)},this.commit=function(e,t,a){return l.call(r,e,t,a)},this.strict=n;var c=this._modules.root.state;A(this,c,[],this._modules.root),M(this,c),a.forEach((function(e){return e(t)}));var h=void 0!==e.devtools?e.devtools:m.config.devtools;h&&i(this)},g={state:{configurable:!0}};function y(e,t,a){return t.indexOf(e)<0&&(a&&a.prepend?t.unshift(e):t.push(e)),function(){var a=t.indexOf(e);a>-1&&t.splice(a,1)}}function _(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var a=e.state;A(e,a,[],e._modules.root,!0),M(e,a,t)}function M(e,t,a){var n=e._vm;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,i={};l(r,(function(t,a){i[a]=u(t,e),Object.defineProperty(e.getters,a,{get:function(){return e._vm[a]},enumerable:!0})}));var o=m.config.silent;m.config.silent=!0,e._vm=new m({data:{$$state:t},computed:i}),m.config.silent=o,e.strict&&H(e),n&&(a&&e._withCommit((function(){n._data.$$state=null})),m.nextTick((function(){return n.$destroy()})))}function A(e,t,a,n,r){var i=!a.length,o=e._modules.getNamespace(a);if(n.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=n),!i&&!r){var s=L(t,a.slice(0,-1)),l=a[a.length-1];e._withCommit((function(){m.set(s,l,n.state)}))}var c=n.context=b(e,o,a);n.forEachMutation((function(t,a){var n=o+a;V(e,n,t,c)})),n.forEachAction((function(t,a){var n=t.root?a:o+a,r=t.handler||t;w(e,n,r,c)})),n.forEachGetter((function(t,a){var n=o+a;C(e,n,t,c)})),n.forEachChild((function(n,i){A(e,t,a.concat(i),n,r)}))}function b(e,t,a){var n=""===t,r={dispatch:n?e.dispatch:function(a,n,r){var i=k(a,n,r),o=i.payload,s=i.options,l=i.type;return s&&s.root||(l=t+l),e.dispatch(l,o)},commit:n?e.commit:function(a,n,r){var i=k(a,n,r),o=i.payload,s=i.options,l=i.type;s&&s.root||(l=t+l),e.commit(l,o,s)}};return Object.defineProperties(r,{getters:{get:n?function(){return e.getters}:function(){return I(e,t)}},state:{get:function(){return L(e.state,a)}}}),r}function I(e,t){if(!e._makeLocalGettersCache[t]){var a={},n=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,n)===t){var i=r.slice(n);Object.defineProperty(a,i,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=a}return e._makeLocalGettersCache[t]}function V(e,t,a,n){var r=e._mutations[t]||(e._mutations[t]=[]);r.push((function(t){a.call(e,n.state,t)}))}function w(e,t,a,n){var r=e._actions[t]||(e._actions[t]=[]);r.push((function(t){var r=a.call(e,{dispatch:n.dispatch,commit:n.commit,getters:n.getters,state:n.state,rootGetters:e.getters,rootState:e.state},t);return h(r)||(r=Promise.resolve(r)),e._devtoolHook?r.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):r}))}function C(e,t,a,n){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return a(n.state,n.getters,e.state,e.getters)})}function H(e){e._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function L(e,t){return t.reduce((function(e,t){return e[t]}),e)}function k(e,t,a){return c(e)&&e.type&&(a=t,t=e,e=e.type),{type:e,payload:t,options:a}}function S(e){m&&e===m||(m=e,a(m))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(e){0},z.prototype.commit=function(e,t,a){var n=this,r=k(e,t,a),i=r.type,o=r.payload,s=(r.options,{type:i,payload:o}),l=this._mutations[i];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(s,n.state)})))},z.prototype.dispatch=function(e,t){var a=this,n=k(e,t),r=n.type,i=n.payload,o={type:r,payload:i},s=this._actions[r];if(s){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,a.state)}))}catch(c){0}var l=s.length>1?Promise.all(s.map((function(e){return e(i)}))):s[0](i);return new Promise((function(e,t){l.then((function(t){try{a._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,a.state)}))}catch(c){0}e(t)}),(function(e){try{a._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,a.state,e)}))}catch(c){0}t(e)}))}))}},z.prototype.subscribe=function(e,t){return y(e,this._subscribers,t)},z.prototype.subscribeAction=function(e,t){var a="function"===typeof e?{before:e}:e;return y(a,this._actionSubscribers,t)},z.prototype.watch=function(e,t,a){var n=this;return this._watcherVM.$watch((function(){return e(n.state,n.getters)}),t,a)},z.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._vm._data.$$state=e}))},z.prototype.registerModule=function(e,t,a){void 0===a&&(a={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),A(this,this.state,e,this._modules.get(e),a.preserveState),M(this,this.state)},z.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var a=L(t.state,e.slice(0,-1));m.delete(a,e[e.length-1])})),_(this)},z.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},z.prototype.hotUpdate=function(e){this._modules.update(e),_(this,!0)},z.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(z.prototype,g);var B=R((function(e,t){var a={};return P(t).forEach((function(t){var n=t.key,r=t.val;a[n]=function(){var t=this.$store.state,a=this.$store.getters;if(e){var n=N(this.$store,"mapState",e);if(!n)return;t=n.context.state,a=n.context.getters}return"function"===typeof r?r.call(this,t,a):t[r]},a[n].vuex=!0})),a})),F=R((function(e,t){var a={};return P(t).forEach((function(t){var n=t.key,r=t.val;a[n]=function(){var t=[],a=arguments.length;while(a--)t[a]=arguments[a];var n=this.$store.commit;if(e){var i=N(this.$store,"mapMutations",e);if(!i)return;n=i.context.commit}return"function"===typeof r?r.apply(this,[n].concat(t)):n.apply(this.$store,[r].concat(t))}})),a})),E=R((function(e,t){var a={};return P(t).forEach((function(t){var n=t.key,r=t.val;r=e+r,a[n]=function(){if(!e||N(this.$store,"mapGetters",e))return this.$store.getters[r]},a[n].vuex=!0})),a})),O=R((function(e,t){var a={};return P(t).forEach((function(t){var n=t.key,r=t.val;a[n]=function(){var t=[],a=arguments.length;while(a--)t[a]=arguments[a];var n=this.$store.dispatch;if(e){var i=N(this.$store,"mapActions",e);if(!i)return;n=i.context.dispatch}return"function"===typeof r?r.apply(this,[n].concat(t)):n.apply(this.$store,[r].concat(t))}})),a})),T=function(e){return{mapState:B.bind(null,e),mapGetters:E.bind(null,e),mapMutations:F.bind(null,e),mapActions:O.bind(null,e)}};function P(e){return x(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function x(e){return Array.isArray(e)||c(e)}function R(e){return function(t,a){return"string"!==typeof t?(a=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,a)}}function N(e,t,a){var n=e._modulesNamespaceMap[a];return n}function j(e){void 0===e&&(e={});var t=e.collapsed;void 0===t&&(t=!0);var a=e.filter;void 0===a&&(a=function(e,t,a){return!0});var n=e.transformer;void 0===n&&(n=function(e){return e});var r=e.mutationTransformer;void 0===r&&(r=function(e){return e});var i=e.actionFilter;void 0===i&&(i=function(e,t){return!0});var o=e.actionTransformer;void 0===o&&(o=function(e){return e});var l=e.logMutations;void 0===l&&(l=!0);var c=e.logActions;void 0===c&&(c=!0);var h=e.logger;return void 0===h&&(h=console),function(e){var u=s(e.state);"undefined"!==typeof h&&(l&&e.subscribe((function(e,i){var o=s(i);if(a(e,u,o)){var l=q(),c=r(e),d="mutation "+e.type+l;D(h,d,t),h.log("%c prev state","color: #9E9E9E; font-weight: bold",n(u)),h.log("%c mutation","color: #03A9F4; font-weight: bold",c),h.log("%c next state","color: #4CAF50; font-weight: bold",n(o)),U(h)}u=o})),c&&e.subscribeAction((function(e,a){if(i(e,a)){var n=q(),r=o(e),s="action "+e.type+n;D(h,s,t),h.log("%c action","color: #03A9F4; font-weight: bold",r),U(h)}})))}}function D(e,t,a){var n=a?e.groupCollapsed:e.group;try{n.call(e,t)}catch(r){e.log(t)}}function U(e){try{e.groupEnd()}catch(t){e.log("—— log end ——")}}function q(){var e=new Date;return" @ "+W(e.getHours(),2)+":"+W(e.getMinutes(),2)+":"+W(e.getSeconds(),2)+"."+W(e.getMilliseconds(),3)}function $(e,t){return new Array(t+1).join(e)}function W(e,t){return $("0",t-e.toString().length)+e}var G={Store:z,install:S,version:"3.6.2",mapState:B,mapMutations:F,mapGetters:E,mapActions:O,createNamespacedHelpers:T,createLogger:j};t["a"]=G}).call(this,a("c8ba"))},"342f":function(e,t,a){var n=a("d066");e.exports=n("navigator","userAgent")||""},"35a1":function(e,t,a){var n=a("f5df"),r=a("dc4a"),i=a("3f8c"),o=a("b622"),s=o("iterator");e.exports=function(e){if(void 0!=e)return r(e,s)||r(e,"@@iterator")||i[n(e)]}},"37e8":function(e,t,a){var n=a("83ab"),r=a("9bf2"),i=a("825a"),o=a("fc6a"),s=a("df75");e.exports=n?Object.defineProperties:function(e,t){i(e);var a,n=o(t),l=s(t),c=l.length,h=0;while(c>h)r.f(e,a=l[h++],n[a]);return e}},"3a9b":function(e,t,a){var n=a("e330");e.exports=n({}.isPrototypeOf)},"3bbe":function(e,t,a){var n=a("da84"),r=a("1626"),i=n.String,o=n.TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw o("Can't set "+i(e)+" as a prototype")}},"3ca3":function(e,t,a){"use strict";var n=a("6547").charAt,r=a("577e"),i=a("69f3"),o=a("7dd0"),s="String Iterator",l=i.set,c=i.getterFor(s);o(String,"String",(function(e){l(this,{type:s,string:r(e),index:0})}),(function(){var e,t=c(this),a=t.string,r=t.index;return r>=a.length?{value:void 0,done:!0}:(e=n(a,r),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,a){var n=a("da84");e.exports=n},4362:function(e,t,a){t.nextTick=function(e){var t=Array.prototype.slice.call(arguments);t.shift(),setTimeout((function(){e.apply(null,t)}),0)},t.platform=t.arch=t.execPath=t.title="browser",t.pid=1,t.browser=!0,t.env={},t.argv=[],t.binding=function(e){throw new Error("No such module. (Possibly not yet loaded)")},function(){var e,n="/";t.cwd=function(){return n},t.chdir=function(t){e||(e=a("df7c")),n=e.resolve(t,n)}}(),t.exit=t.kill=t.umask=t.dlopen=t.uptime=t.memoryUsage=t.uvCounters=function(){},t.features={}},"44ad":function(e,t,a){var n=a("da84"),r=a("e330"),i=a("d039"),o=a("c6b6"),s=n.Object,l=r("".split);e.exports=i((function(){return!s("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?l(e,""):s(e)}:s},"44d2":function(e,t,a){var n=a("b622"),r=a("7c73"),i=a("9bf2"),o=n("unscopables"),s=Array.prototype;void 0==s[o]&&i.f(s,o,{configurable:!0,value:r(null)}),e.exports=function(e){s[o][e]=!0}},"44de":function(e,t,a){var n=a("da84");e.exports=function(e,t){var a=n.console;a&&a.error&&(1==arguments.length?a.error(e):a.error(e,t))}},4840:function(e,t,a){var n=a("825a"),r=a("5087"),i=a("b622"),o=i("species");e.exports=function(e,t){var a,i=n(e).constructor;return void 0===i||void 0==(a=n(i)[o])?t:r(a)}},"485a":function(e,t,a){var n=a("da84"),r=a("c65b"),i=a("1626"),o=a("861d"),s=n.TypeError;e.exports=function(e,t){var a,n;if("string"===t&&i(a=e.toString)&&!o(n=r(a,e)))return n;if(i(a=e.valueOf)&&!o(n=r(a,e)))return n;if("string"!==t&&i(a=e.toString)&&!o(n=r(a,e)))return n;throw s("Can't convert object to primitive value")}},4930:function(e,t,a){var n=a("2d00"),r=a("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},"4d64":function(e,t,a){var n=a("fc6a"),r=a("23cb"),i=a("07fa"),o=function(e){return function(t,a,o){var s,l=n(t),c=i(l),h=r(o,c);if(e&&a!=a){while(c>h)if(s=l[h++],s!=s)return!0}else for(;c>h;h++)if((e||h in l)&&l[h]===a)return e||h||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},"4df4":function(e,t,a){"use strict";var n=a("da84"),r=a("0366"),i=a("c65b"),o=a("7b0b"),s=a("9bdd"),l=a("e95a"),c=a("68ee"),h=a("07fa"),u=a("8418"),d=a("9a1f"),p=a("35a1"),v=n.Array;e.exports=function(e){var t=o(e),a=c(this),n=arguments.length,f=n>1?arguments[1]:void 0,m=void 0!==f;m&&(f=r(f,n>2?arguments[2]:void 0));var z,g,y,_,M,A,b=p(t),I=0;if(!b||this==v&&l(b))for(z=h(t),g=a?new this(z):v(z);z>I;I++)A=m?f(t[I],I):t[I],u(g,I,A);else for(_=d(t,b),M=_.next,g=a?new this:[];!(y=i(M,_)).done;I++)A=m?s(_,f,[y.value,I],!0):y.value,u(g,I,A);return g.length=I,g}},"4f60":function(e,t,a){"use strict";var n=a("7ded");a.d(t,"a",(function(){return n["a"]}));var r="firebase",i="9.4.0";
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
n["a"].registerVersion(r,i,"app-compat")},5087:function(e,t,a){var n=a("da84"),r=a("68ee"),i=a("0d51"),o=n.TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a constructor")}},"50c4":function(e,t,a){var n=a("5926"),r=Math.min;e.exports=function(e){return e>0?r(n(e),9007199254740991):0}},"51b0":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return ps})),a.d(t,"b",(function(){return vs})),a.d(t,"c",(function(){return xa})),a.d(t,"d",(function(){return gs})),a.d(t,"e",(function(){return pl})),a.d(t,"f",(function(){return h})),a.d(t,"g",(function(){return po})),a.d(t,"h",(function(){return fo})),a.d(t,"i",(function(){return As})),a.d(t,"j",(function(){return zl})),a.d(t,"k",(function(){return _l})),a.d(t,"l",(function(){return js})),a.d(t,"m",(function(){return Us})),a.d(t,"n",(function(){return sl})),a.d(t,"o",(function(){return Ls})),a.d(t,"p",(function(){return gl})),a.d(t,"q",(function(){return yl})),a.d(t,"r",(function(){return Il})),a.d(t,"s",(function(){return Js})),a.d(t,"t",(function(){return Ys})),a.d(t,"u",(function(){return xs})),a.d(t,"v",(function(){return Es})),a.d(t,"w",(function(){return Os})),a.d(t,"x",(function(){return Ts})),a.d(t,"y",(function(){return Ps})),a.d(t,"z",(function(){return Fs})),a.d(t,"A",(function(){return Zs})),a.d(t,"B",(function(){return tl})),a.d(t,"C",(function(){return nl})),a.d(t,"D",(function(){return il})),a.d(t,"E",(function(){return bs})),a.d(t,"F",(function(){return ll})),a.d(t,"G",(function(){return _s})),a.d(t,"H",(function(){return Ms})),a.d(t,"I",(function(){return Is})),a.d(t,"J",(function(){return wl})),a.d(t,"K",(function(){return bl})),a.d(t,"L",(function(){return Vs})),a.d(t,"M",(function(){return ws})),a.d(t,"N",(function(){return Cs})),a.d(t,"O",(function(){return Gs})),a.d(t,"P",(function(){return $s})),a.d(t,"Q",(function(){return Hs}));var n=a("589b"),r=a("22e5"),i=a("1fd5"),o=a("e691");const s="@firebase/database",l="0.12.4";
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
 */class u{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Object(i["L"])(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Object(i["E"])(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class d{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Object(i["j"])(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const p=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new u(t)}}catch(t){}return new d},v=p("localStorage"),f=p("sessionStorage"),m=new o["b"]("@firebase/database"),z=function(){let e=1;return function(){return e++}}(),g=function(e){const t=Object(i["K"])(e),a=new i["d"];a.update(t);const n=a.digest();return i["g"].encodeByteArray(n)},y=function(...e){let t="";for(let a=0;a<e.length;a++){const n=e[a];Array.isArray(n)||n&&"object"===typeof n&&"number"===typeof n.length?t+=y.apply(null,n):t+="object"===typeof n?Object(i["L"])(n):n,t+=" "}return t};let _=null,M=!0;const A=function(e,t){Object(i["e"])(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=o["a"].VERBOSE,_=m.log.bind(m),t&&f.set("logging_enabled",!0)):"function"===typeof e?_=e:(_=null,f.remove("logging_enabled"))},b=function(...e){if(!0===M&&(M=!1,null===_&&!0===f.get("logging_enabled")&&A(!0)),_){const t=y.apply(null,e);_(t)}},I=function(e){return function(...t){b(e,...t)}},V=function(...e){const t="FIREBASE INTERNAL ERROR: "+y(...e);m.error(t)},w=function(...e){const t="FIREBASE FATAL ERROR: "+y(...e);throw m.error(t),new Error(t)},C=function(...e){const t="FIREBASE WARNING: "+y(...e);m.warn(t)},H=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&C("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},L=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},k=function(e){if(Object(i["B"])()||"complete"===document.readyState)e();else{let t=!1;const a=function(){document.body?t||(t=!0,e()):setTimeout(a,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&a()}),window.attachEvent("onload",a))}},S="[MIN_NAME]",B="[MAX_NAME]",F=function(e,t){if(e===t)return 0;if(e===S||t===B)return-1;if(t===S||e===B)return 1;{const a=W(e),n=W(t);return null!==a?null!==n?a-n===0?e.length-t.length:a-n:-1:null!==n?1:e<t?-1:1}},E=function(e,t){return e===t?0:e<t?-1:1},O=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Object(i["L"])(t))},T=function(e){if("object"!==typeof e||null===e)return Object(i["L"])(e);const t=[];for(const n in e)t.push(n);t.sort();let a="{";for(let n=0;n<t.length;n++)0!==n&&(a+=","),a+=Object(i["L"])(t[n]),a+=":",a+=T(e[t[n]]);return a+="}",a},P=function(e,t){const a=e.length;if(a<=t)return[e];const n=[];for(let r=0;r<a;r+=t)r+t>a?n.push(e.substring(r,a)):n.push(e.substring(r,r+t));return n};function x(e,t){for(const a in e)e.hasOwnProperty(a)&&t(a,e[a])}const R=function(e){Object(i["e"])(!L(e),"Invalid JSON number");const t=11,a=52,n=(1<<t-1)-1;let r,o,s,l,c;0===e?(o=0,s=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-n)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),n),o=l+n,s=Math.round(e*Math.pow(2,a-l)-Math.pow(2,a))):(o=0,s=Math.round(e/Math.pow(2,1-n-a))));const h=[];for(c=a;c;c-=1)h.push(s%2?1:0),s=Math.floor(s/2);for(c=t;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);h.push(r?1:0),h.reverse();const u=h.join("");let d="";for(c=0;c<64;c+=8){let e=parseInt(u.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),d+=e}return d.toLowerCase()},N=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},j=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function D(e,t){let a="Unknown Error";"too_big"===e?a="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?a="Client doesn't have permission to access the desired data.":"unavailable"===e&&(a="The service is unavailable");const n=new Error(e+" at "+t._path.toString()+": "+a);return n.code=e.toUpperCase(),n}const U=new RegExp("^-?(0*)\\d{1,10}$"),q=-2147483648,$=2147483647,W=function(e){if(U.test(e)){const t=Number(e);if(t>=q&&t<=$)return t}return null},G=function(e){try{e()}catch(t){setTimeout(()=>{const e=t.stack||"";throw C("Exception was thrown by user callback.",e),t},Math.floor(0))}},K=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},J=function(e,t){const a=setTimeout(e,t);return"object"===typeof a&&a["unref"]&&a["unref"](),a};
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
class Q{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then(e=>this.appCheck=e)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,a)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,a):t(null)},0)})}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){C(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class Y{constructor(e,t,a){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=a,this.auth_=null,this.auth_=a.getImmediate({optional:!0}),this.auth_||a.onInit(e=>this.auth_=e)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(e=>e&&"auth/token-not-initialized"===e.code?(b("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)):new Promise((t,a)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,a):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',C(e)}}class X{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}X.OWNER="owner";
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
const Z="5",ee="v",te="s",ae="r",ne="f",re=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ie="ls",oe="p",se="ac",le="websocket",ce="long_polling";
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
class he{constructor(e,t,a,n,r=!1,i="",o=!1){this.secure=t,this.namespace=a,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=i,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=v.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&v.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns="+this.namespace:"";return`${e}${this.host}/${t}`}}function ue(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function de(e,t,a){let n;if(Object(i["e"])("string"===typeof t,"typeof type must == string"),Object(i["e"])("object"===typeof a,"typeof params must == object"),t===le)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ce)throw new Error("Unknown connection type: "+t);n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}ue(e)&&(a["ns"]=e.namespace);const r=[];return x(a,(e,t)=>{r.push(e+"="+t)}),n+r.join("&")}
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
 */class pe{constructor(){this.counters_={}}incrementCounter(e,t=1){Object(i["j"])(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Object(i["m"])(this.counters_)}}
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
 */const ve={},fe={};function me(e){const t=e.toString();return ve[t]||(ve[t]=new pe),ve[t]}function ze(e,t){const a=e.toString();return fe[a]||(fe[a]=t()),fe[a]}
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
 */class ge{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&G(()=>{this.onMessage_(e[t])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */const ye="start",_e="close",Me="pLPCommand",Ae="pRTLPCB",be="id",Ie="pw",Ve="ser",we="cb",Ce="seg",He="ts",Le="d",ke="dframe",Se=1870,Be=30,Fe=Se-Be,Ee=25e3,Oe=3e4;class Te{constructor(e,t,a,n,r,i,o){this.connId=e,this.repoInfo=t,this.applicationId=a,this.appCheckToken=n,this.authToken=r,this.transportSessionId=i,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=I(e),this.stats_=me(t),this.urlFn=e=>(this.appCheckToken&&(e[se]=this.appCheckToken),de(t,ce,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ge(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Oe)),k(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pe((...e)=>{const[t,a,n,r,i]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===ye)this.id=a,this.password=n;else{if(t!==_e)throw new Error("Unrecognized command received: "+t);a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_()}},(...e)=>{const[t,a]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,a)},()=>{this.onClosed_()},this.urlFn);const e={};e[ye]="t",e[Ve]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[we]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ee]=Z,this.transportSessionId&&(e[te]=this.transportSessionId),this.lastSessionId&&(e[ie]=this.lastSessionId),this.applicationId&&(e[oe]=this.applicationId),this.appCheckToken&&(e[se]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(e[ae]=ne);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Te.forceAllow_=!0}static forceDisallow(){Te.forceDisallow_=!0}static isAvailable(){return!Object(i["B"])()&&(!!Te.forceAllow_||!Te.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!N()&&!j())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Object(i["L"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const a=Object(i["i"])(t),n=P(a,Fe);for(let r=0;r<n.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(Object(i["B"])())return;this.myDisconnFrame=document.createElement("iframe");const a={};a[ke]="t",a[be]=e,a[Ie]=t,this.myDisconnFrame.src=this.urlFn(a),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Object(i["L"])(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Pe{constructor(e,t,a,n){if(this.onDisconnect=a,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Object(i["B"])())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=z(),window[Me+this.uniqueCallbackIdentifier]=e,window[Ae+this.uniqueCallbackIdentifier]=t,this.myIFrame=Pe.createIFrame_();let a="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){const e=document.domain;a='<script>document.domain="'+e+'";<\/script>'}const n="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(r){b("frame writing exception"),r.stack&&b(r.stack),b(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||b("No IE domain setting required")}catch(t){const a=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+a+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[be]=this.myID,e[Ie]=this.myPW,e[Ve]=this.currentSerial;let t=this.urlFn(e),a="",n=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Be+a.length<=Se))break;{const e=this.pendingSegs.shift();a=a+"&"+Ce+n+"="+e.seg+"&"+He+n+"="+e.ts+"&"+Le+n+"="+e.d,n++}}return t+=a,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,a){this.pendingSegs.push({seg:e,ts:t,d:a}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const a=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(a,Math.floor(Ee)),r=()=>{clearTimeout(n),a()};this.addTag(e,r)}addTag(e,t){Object(i["B"])()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;const a=this.myIFrame.doc.createElement("script");a.type="text/javascript",a.async=!0,a.src=e,a.onload=a.onreadystatechange=function(){const e=a.readyState;e&&"loaded"!==e&&"complete"!==e||(a.onload=a.onreadystatechange=null,a.parentNode&&a.parentNode.removeChild(a),t())},a.onerror=()=>{b("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(a)}catch(a){}},Math.floor(1))}}
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
 */const xe=16384,Re=45e3;let Ne=null;"undefined"!==typeof MozWebSocket?Ne=MozWebSocket:"undefined"!==typeof WebSocket&&(Ne=WebSocket);class je{constructor(e,t,a,n,r,i,o){this.connId=e,this.applicationId=a,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=I(this.connId),this.stats_=me(t),this.connURL=je.connectionURL_(t,i,o,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,a,n){const r={};return r[ee]=Z,!Object(i["B"])()&&"undefined"!==typeof location&&location.hostname&&re.test(location.hostname)&&(r[ae]=ne),t&&(r[te]=t),a&&(r[ie]=a),n&&(r[se]=n),de(e,le,r)}open(t,a){this.onDisconnect=a,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,v.set("previous_websocket_failure",!0);try{if(Object(i["B"])()){const t=this.nodeAdmin?"AdminNode":"Node",a={headers:{"User-Agent":`Firebase/${Z}/${c}/${e.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(a.headers["Authorization"]="Bearer "+this.authToken),this.appCheckToken&&(a.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n=Object({NODE_ENV:"production",BASE_URL:"/three-panel-comic-demo/"}),r=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];r&&(a["proxy"]={origin:r}),this.mySock=new Ne(this.connURL,[],a)}else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ne(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){je.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,a=navigator.userAgent.match(t);a&&a.length>1&&parseFloat(a[1])<4.4&&(e=!0)}return!e&&null!==Ne&&!je.forceDisallow_}static previouslyFailed(){return v.isInMemoryStorage||!0===v.get("previous_websocket_failure")}markConnectionHealthy(){v.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Object(i["E"])(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Object(i["e"])(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Object(i["L"])(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const a=P(t,xe);a.length>1&&this.sendString_(String(a.length));for(let n=0;n<a.length;n++)this.sendString_(a[n])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Re))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}je.responsesRequiredToBeHealthy=2,je.healthyTimeout=3e4;
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
class De{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Te,je]}initTransports_(e){const t=je&&je["isAvailable"]();let a=t&&!je.previouslyFailed();if(e.webSocketOnly&&(t||C("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),a=!0),a)this.transports_=[je];else{const e=this.transports_=[];for(const t of De.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
 */const Ue=6e4,qe=5e3,$e=10240,We=102400,Ge="t",Ke="d",Je="s",Qe="r",Ye="e",Xe="o",Ze="a",et="n",tt="p",at="h";class nt{constructor(e,t,a,n,r,i,o,s,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=a,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=i,this.onReady_=o,this.onDisconnect_=s,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=I("c:"+this.id+":"),this.transportManager_=new De(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),a=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,a)},Math.floor(0));const n=e["healthyTimeout"]||0;n>0&&(this.healthyTimeout_=J(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>We?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$e?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ge in e){const t=e[Ge];t===Ze?this.upgradeIfSecondaryHealthy_():t===Qe?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Xe&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=O("t",e),a=O("d",e);if("c"===t)this.onSecondaryControl_(a);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(a)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tt,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ze,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:et,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=O("t",e),a=O("d",e);"c"===t?this.onControl_(a):"d"===t&&this.onDataMessage_(a)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=O(Ge,e);if(Ke in e){const a=e[Ke];if(t===at)this.onHandshake_(a);else if(t===et){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Je?this.onConnectionShutdown_(a):t===Qe?this.onReset_(a):t===Ye?V("Server Error: "+a):t===Xe?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):V("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,a=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Z!==a&&C("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),a=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,a),J(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ue))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):J(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qe))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tt,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(v.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class rt{put(e,t,a,n){}merge(e,t,a,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,a){}onDisconnectMerge(e,t,a){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class it{constructor(e){this.allowedEvents_=e,this.listeners_={},Object(i["e"])(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const a=[...this.listeners_[e]];for(let e=0;e<a.length;e++)a[e].callback.apply(a[e].context,t)}}on(e,t,a){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:a});const n=this.getInitialEvent(e);n&&t.apply(a,n)}off(e,t,a){this.validateEventType_(e);const n=this.listeners_[e]||[];for(let r=0;r<n.length;r++)if(n[r].callback===t&&(!a||a===n[r].context))return void n.splice(r,1)}validateEventType_(e){Object(i["e"])(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}
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
 */class ot extends it{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||Object(i["z"])()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ot}getInitialEvent(e){return Object(i["e"])("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const st=32,lt=768;class ct{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ht(){return new ct("")}function ut(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function dt(e){return e.pieces_.length-e.pieceNum_}function pt(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ct(e.pieces_,t)}function vt(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function ft(e){let t="";for(let a=e.pieceNum_;a<e.pieces_.length;a++)""!==e.pieces_[a]&&(t+="/"+encodeURIComponent(String(e.pieces_[a])));return t||"/"}function mt(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function zt(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let a=e.pieceNum_;a<e.pieces_.length-1;a++)t.push(e.pieces_[a]);return new ct(t,0)}function gt(e,t){const a=[];for(let n=e.pieceNum_;n<e.pieces_.length;n++)a.push(e.pieces_[n]);if(t instanceof ct)for(let n=t.pieceNum_;n<t.pieces_.length;n++)a.push(t.pieces_[n]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&a.push(e[t])}return new ct(a,0)}function yt(e){return e.pieceNum_>=e.pieces_.length}function _t(e,t){const a=ut(e),n=ut(t);if(null===a)return t;if(a===n)return _t(pt(e),pt(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Mt(e,t){const a=mt(e,0),n=mt(t,0);for(let r=0;r<a.length&&r<n.length;r++){const e=F(a[r],n[r]);if(0!==e)return e}return a.length===n.length?0:a.length<n.length?-1:1}function At(e,t){if(dt(e)!==dt(t))return!1;for(let a=e.pieceNum_,n=t.pieceNum_;a<=e.pieces_.length;a++,n++)if(e.pieces_[a]!==t.pieces_[n])return!1;return!0}function bt(e,t){let a=e.pieceNum_,n=t.pieceNum_;if(dt(e)>dt(t))return!1;while(a<e.pieces_.length){if(e.pieces_[a]!==t.pieces_[n])return!1;++a,++n}return!0}class It{constructor(e,t){this.errorPrefix_=t,this.parts_=mt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let a=0;a<this.parts_.length;a++)this.byteLength_+=Object(i["J"])(this.parts_[a]);Ct(this)}}function Vt(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Object(i["J"])(t),Ct(e)}function wt(e){const t=e.parts_.pop();e.byteLength_-=Object(i["J"])(t),e.parts_.length>0&&(e.byteLength_-=1)}function Ct(e){if(e.byteLength_>lt)throw new Error(e.errorPrefix_+"has a key path longer than "+lt+" bytes ("+e.byteLength_+").");if(e.parts_.length>st)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+st+") or object contains a cycle "+Ht(e))}function Ht(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class Lt extends it{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))},!1)}static getInstance(){return new Lt}getInitialEvent(e){return Object(i["e"])("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const kt=1e3,St=3e5,Bt=3e3,Ft=3e4,Et=1.3,Ot=3e4,Tt="server_kill",Pt=3;class xt extends rt{constructor(e,t,a,n,r,o,s,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=a,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=l,this.id=xt.nextPersistentConnectionId_++,this.log_=I("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=kt,this.maxReconnectDelay_=St,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Object(i["B"])())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lt.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,a){const n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_(Object(i["L"])(r)),Object(i["e"])(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),a&&(this.requestCBHash_[n]=a)}get(e){this.initConnection_();const t=new i["a"],a={p:e._path.toString(),q:e._queryObject},n={action:"g",request:a,onComplete:e=>{const n=e["d"];"ok"===e["s"]?(this.onDataUpdate_(a["p"],n,!1,null),t.resolve(n)):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const e=this.outstandingGets_[r];void 0!==e&&n===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))},Bt),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,a,n){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),Object(i["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Object(i["e"])(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const s={onComplete:n,hashFn:t,query:e,tag:a};this.listens.get(o).set(r,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,a=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(a)})}sendListen_(e){const t=e.query,a=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+a+" for "+n);const r={p:a},i="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(i,r,r=>{const i=r["d"],o=r["s"];xt.warnOnListenWarnings_(i,t);const s=this.listens.get(a)&&this.listens.get(a).get(n);s===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(a,n),e.onComplete&&e.onComplete(o,i))})}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&Object(i["j"])(e,"w")){const a=Object(i["I"])(e,"w");if(Array.isArray(a)&&~a.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();C(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at `+a+" to your security rules for better performance.")}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||Object(i["t"])(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ft)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Object(i["D"])(e)?"auth":"gauth",a={cred:e};null===this.authOverride_?a["noauth"]=!0:"object"===typeof this.authOverride_&&(a["authvar"]=this.authOverride_),this.sendRequest(t,a,t=>{const a=t["s"],n=t["d"]||"error";this.authToken_===e&&("ok"===a?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,n))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e["s"],a=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,a)})}unlisten(e,t){const a=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+a+" "+n),Object(i["e"])(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(a,n);r&&this.connected_&&this.sendUnlisten_(a,n,e._queryObject,t)}sendUnlisten_(e,t,a,n){this.log_("Unlisten on "+e+" for "+t);const r={p:e},i="n";n&&(r["q"]=a,r["t"]=n),this.sendRequest(i,r)}onDisconnectPut(e,t,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:a})}onDisconnectMerge(e,t,a){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,a):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:a})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,a,n){const r={p:t,d:a};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,e=>{n&&setTimeout(()=>{n(e["s"],e["d"])},Math.floor(0))})}put(e,t,a,n){this.putInternal("p",e,t,a,n)}merge(e,t,a,n){this.putInternal("m",e,t,a,n)}putInternal(e,t,a,n,r){this.initConnection_();const i={p:t,d:a};void 0!==r&&(i["h"]=r),this.outstandingPuts_.push({action:e,request:i,onComplete:n}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,a=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,a,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(a["s"],a["d"])})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Object(i["L"])(e));const t=e["r"],a=this.requestCBHash_[t];a&&(delete this.requestCBHash_[t],a(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):V("Unrecognized action received from server: "+Object(i["L"])(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Object(i["e"])(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Ot&&(this.reconnectDelay_=kt),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Et)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),a=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+xt.nextConnectionId_++,r=this.lastSessionId;let o=!1,s=null;const l=function(){s?s.close():(o=!0,a())},c=function(e){Object(i["e"])(s,"sendRequest call when we're not connected not allowed."),s.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[i,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?b("getToken() completed but was canceled"):(b("getToken() completed. Creating connection."),this.authToken_=i&&i.accessToken,this.appCheckToken_=l&&l.token,s=new nt(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,a,e=>{C(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Tt)},r))}catch(V){this.log_("Failed to get token: "+V),o||(this.repoInfo_.nodeAdmin&&C(V),l())}}}interrupt(e){b("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){b("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Object(i["w"])(this.interruptReasons_)&&(this.reconnectDelay_=kt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let a;a=t?t.map(e=>T(e)).join("$"):"default";const n=this.removeListen_(e,a);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){const a=new ct(e).toString();let n;if(this.listens.has(a)){const e=this.listens.get(a);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(a)}else n=void 0;return n}onAuthRevoked_(e,t){b("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pt&&(this.reconnectDelay_=Ft,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){b("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pt&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";Object(i["B"])()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+c.replace(/\./g,"-")]=1,Object(i["z"])()?e["framework.cordova"]=1:Object(i["C"])()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ot.getInstance().currentlyOnline();return Object(i["w"])(this.interruptReasons_)&&e}}xt.nextPersistentConnectionId_=0,xt.nextConnectionId_=0;
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
class Rt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Rt(e,t)}}
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
 */class Nt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const a=new Rt(S,e),n=new Rt(S,t);return 0!==this.compare(a,n)}minPost(){return Rt.MIN}}
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
 */let jt;class Dt extends Nt{static get __EMPTY_NODE(){return jt}static set __EMPTY_NODE(e){jt=e}compare(e,t){return F(e.name,t.name)}isDefinedOn(e){throw Object(i["f"])("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Rt.MIN}maxPost(){return new Rt(B,jt)}makePost(e,t){return Object(i["e"])("string"===typeof e,"KeyIndex indexValue must always be a string."),new Rt(e,jt)}toString(){return".key"}}const Ut=new Dt;
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
 */class qt{constructor(e,t,a,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let i=1;while(!e.isEmpty())if(e=e,i=t?a(e.key,t):1,n&&(i*=-1),i<0)e=this.isReverse_?e.left:e.right;else{if(0===i){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $t{constructor(e,t,a,n,r){this.key=e,this.value=t,this.color=null!=a?a:$t.RED,this.left=null!=n?n:Gt.EMPTY_NODE,this.right=null!=r?r:Gt.EMPTY_NODE}copy(e,t,a,n,r){return new $t(null!=e?e:this.key,null!=t?t:this.value,null!=a?a:this.color,null!=n?n:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let n=this;const r=a(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,t,a),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,a)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gt.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let a,n;if(a=this,t(e,a.key)<0)a.left.isEmpty()||a.left.isRed_()||a.left.left.isRed_()||(a=a.moveRedLeft_()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed_()&&(a=a.rotateRight_()),a.right.isEmpty()||a.right.isRed_()||a.right.left.isRed_()||(a=a.moveRedRight_()),0===t(e,a.key)){if(a.right.isEmpty())return Gt.EMPTY_NODE;n=a.right.min_(),a=a.copy(n.key,n.value,null,null,a.right.removeMin_())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$t.RED=!0,$t.BLACK=!1;class Wt{copy(e,t,a,n,r){return this}insert(e,t,a){return new $t(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gt{constructor(e,t=Gt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$t.BLACK,null,null))}remove(e){return new Gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$t.BLACK,null,null))}get(e){let t,a=this.root_;while(!a.isEmpty()){if(t=this.comparator_(e,a.key),0===t)return a.value;t<0?a=a.left:t>0&&(a=a.right)}return null}getPredecessorKey(e){let t,a=this.root_,n=null;while(!a.isEmpty()){if(t=this.comparator_(e,a.key),0===t){if(a.left.isEmpty())return n?n.key:null;a=a.left;while(!a.right.isEmpty())a=a.right;return a.key}t<0?a=a.left:t>0&&(n=a,a=a.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new qt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new qt(this.root_,null,this.comparator_,!0,e)}}
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
function Kt(e,t){return F(e.name,t.name)}function Jt(e,t){return F(e,t)}
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
 */let Qt;function Yt(e){Qt=e}Gt.EMPTY_NODE=new Wt;const Xt=function(e){return"number"===typeof e?"number:"+R(e):"string:"+e},Zt=function(e){if(e.isLeafNode()){const t=e.val();Object(i["e"])("string"===typeof t||"number"===typeof t||"object"===typeof t&&Object(i["j"])(t,".sv"),"Priority must be a string or number.")}else Object(i["e"])(e===Qt||e.isEmpty(),"priority of unexpected type.");Object(i["e"])(e===Qt||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let ea,ta,aa;class na{constructor(e,t=na.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Object(i["e"])(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Zt(this.priorityNode_)}static set __childrenNodeConstructor(e){ea=e}static get __childrenNodeConstructor(){return ea}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new na(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:na.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return yt(e)?this:".priority"===ut(e)?this.priorityNode_:na.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:na.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const a=ut(e);return null===a?t:t.isEmpty()&&".priority"!==a?this:(Object(i["e"])(".priority"!==a||1===dt(e),".priority must be the last token in a path"),this.updateImmediateChild(a,na.__childrenNodeConstructor.EMPTY_NODE.updateChild(pt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xt(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?R(this.value_):this.value_,this.lazyHash_=g(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===na.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof na.__childrenNodeConstructor?-1:(Object(i["e"])(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,a=typeof this.value_,n=na.VALUE_TYPE_ORDER.indexOf(t),r=na.VALUE_TYPE_ORDER.indexOf(a);return Object(i["e"])(n>=0,"Unknown leaf type: "+t),Object(i["e"])(r>=0,"Unknown leaf type: "+a),n===r?"object"===a?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function ra(e){ta=e}function ia(e){aa=e}na.VALUE_TYPE_ORDER=["object","boolean","number","string"];class oa extends Nt{compare(e,t){const a=e.node.getPriority(),n=t.node.getPriority(),r=a.compareTo(n);return 0===r?F(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Rt.MIN}maxPost(){return new Rt(B,new na("[PRIORITY-POST]",aa))}makePost(e,t){const a=ta(e);return new Rt(t,new na("[PRIORITY-POST]",a))}toString(){return".priority"}}const sa=new oa,la=Math.log(2);
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
 */class ca{constructor(e){const t=e=>parseInt(Math.log(e)/la,10),a=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const n=a(this.count);this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ha=function(e,t,a,n){e.sort(t);const r=function(t,n){const i=n-t;let o,s;if(0===i)return null;if(1===i)return o=e[t],s=a?a(o):o,new $t(s,o.node,$t.BLACK,null,null);{const l=parseInt(i/2,10)+t,c=r(t,l),h=r(l+1,n);return o=e[l],s=a?a(o):o,new $t(s,o.node,$t.BLACK,c,h)}},i=function(t){let n=null,i=null,o=e.length;const s=function(t,n){const i=o-t,s=o;o-=t;const c=r(i+1,s),h=e[i],u=a?a(h):h;l(new $t(u,h.node,n,null,c))},l=function(e){n?(n.left=e,n=e):(i=e,n=e)};for(let e=0;e<t.count;++e){const a=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));a?s(n,$t.BLACK):(s(n,$t.BLACK),s(n,$t.RED))}return i},o=new ca(e.length),s=i(o);return new Gt(n||t,s)};
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
 */let ua;const da={};class pa{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Object(i["e"])(da&&sa,"ChildrenNode.ts has not been loaded"),ua=ua||new pa({".priority":da},{".priority":sa}),ua}get(e){const t=Object(i["I"])(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gt?t:null}hasIndex(e){return Object(i["j"])(this.indexSet_,e.toString())}addIndex(e,t){Object(i["e"])(e!==Ut,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const a=[];let n=!1;const r=t.getIterator(Rt.Wrap);let o,s=r.getNext();while(s)n=n||e.isDefinedOn(s.node),a.push(s),s=r.getNext();o=n?ha(a,e.getCompare()):da;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=o,new pa(h,c)}addToIndexes(e,t){const a=Object(i["F"])(this.indexes_,(a,n)=>{const r=Object(i["I"])(this.indexSet_,n);if(Object(i["e"])(r,"Missing index implementation for "+n),a===da){if(r.isDefinedOn(e.node)){const a=[],n=t.getIterator(Rt.Wrap);let i=n.getNext();while(i)i.name!==e.name&&a.push(i),i=n.getNext();return a.push(e),ha(a,r.getCompare())}return da}{const n=t.get(e.name);let r=a;return n&&(r=r.remove(new Rt(e.name,n))),r.insert(e,e.node)}});return new pa(a,this.indexSet_)}removeFromIndexes(e,t){const a=Object(i["F"])(this.indexes_,a=>{if(a===da)return a;{const n=t.get(e.name);return n?a.remove(new Rt(e.name,n)):a}});return new pa(a,this.indexSet_)}}
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
 */let va;class fa{constructor(e,t,a){this.children_=e,this.priorityNode_=t,this.indexMap_=a,this.lazyHash_=null,this.priorityNode_&&Zt(this.priorityNode_),this.children_.isEmpty()&&Object(i["e"])(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return va||(va=new fa(new Gt(Jt),null,pa.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||va}updatePriority(e){return this.children_.isEmpty()?this:new fa(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?va:t}}getChild(e){const t=ut(e);return null===t?this:this.getImmediateChild(t).getChild(pt(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Object(i["e"])(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const a=new Rt(e,t);let n,r;t.isEmpty()?(n=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(a,this.children_)):(n=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(a,this.children_));const i=n.isEmpty()?va:this.priorityNode_;return new fa(n,i,r)}}updateChild(e,t){const a=ut(e);if(null===a)return t;{Object(i["e"])(".priority"!==ut(e)||1===dt(e),".priority must be the last token in a path");const n=this.getImmediateChild(a).updateChild(pt(e),t);return this.updateImmediateChild(a,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let a=0,n=0,r=!0;if(this.forEachChild(sa,(i,o)=>{t[i]=o.val(e),a++,r&&fa.INTEGER_REGEXP_.test(i)?n=Math.max(n,Number(i)):r=!1}),!e&&r&&n<2*a){const e=[];for(const a in t)e[a]=t[a];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xt(this.getPriority().val())+":"),this.forEachChild(sa,(t,a)=>{const n=a.hash();""!==n&&(e+=":"+t+":"+n)}),this.lazyHash_=""===e?"":g(e)}return this.lazyHash_}getPredecessorChildName(e,t,a){const n=this.resolveIndex_(a);if(n){const a=n.getPredecessorKey(new Rt(e,t));return a?a.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Rt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Rt(t,this.children_.get(t)):null}forEachChild(e,t){const a=this.resolveIndex_(e);return a?a.inorderTraversal(e=>t(e.name,e.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const a=this.resolveIndex_(t);if(a)return a.getIteratorFrom(e,e=>e);{const a=this.children_.getIteratorFrom(e.name,Rt.Wrap);let n=a.peek();while(null!=n&&t.compare(n,e)<0)a.getNext(),n=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const a=this.resolveIndex_(t);if(a)return a.getReverseIteratorFrom(e,e=>e);{const a=this.children_.getReverseIteratorFrom(e.name,Rt.Wrap);let n=a.peek();while(null!=n&&t.compare(n,e)>0)a.getNext(),n=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===za?-1:0}withIndex(e){if(e===Ut||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fa(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ut||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(sa),a=t.getIterator(sa);let n=e.getNext(),r=a.getNext();while(n&&r){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=e.getNext(),r=a.getNext()}return null===n&&null===r}return!1}return!1}}resolveIndex_(e){return e===Ut?null:this.indexMap_.get(e.toString())}}fa.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ma extends fa{constructor(){super(new Gt(Jt),fa.EMPTY_NODE,pa.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fa.EMPTY_NODE}isEmpty(){return!1}}const za=new ma;Object.defineProperties(Rt,{MIN:{value:new Rt(S,fa.EMPTY_NODE)},MAX:{value:new Rt(B,za)}}),Dt.__EMPTY_NODE=fa.EMPTY_NODE,na.__childrenNodeConstructor=fa,Yt(za),ia(za);
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
const ga=!0;function ya(e,t=null){if(null===e)return fa.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),Object(i["e"])(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const a=e;return new na(a,ya(t))}if(e instanceof Array||!ga){let a=fa.EMPTY_NODE;return x(e,(t,n)=>{if(Object(i["j"])(e,t)&&"."!==t.substring(0,1)){const e=ya(n);!e.isLeafNode()&&e.isEmpty()||(a=a.updateImmediateChild(t,e))}}),a.updatePriority(ya(t))}{const a=[];let n=!1;const r=e;if(x(r,(e,t)=>{if("."!==e.substring(0,1)){const r=ya(t);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),a.push(new Rt(e,r)))}}),0===a.length)return fa.EMPTY_NODE;const i=ha(a,Kt,e=>e.name,Jt);if(n){const e=ha(a,sa.getCompare());return new fa(i,ya(t),new pa({".priority":e},{".priority":sa}))}return new fa(i,ya(t),pa.Default)}}ra(ya);
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
class _a extends Nt{constructor(e){super(),this.indexPath_=e,Object(i["e"])(!yt(e)&&".priority"!==ut(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const a=this.extractChild(e.node),n=this.extractChild(t.node),r=a.compareTo(n);return 0===r?F(e.name,t.name):r}makePost(e,t){const a=ya(e),n=fa.EMPTY_NODE.updateChild(this.indexPath_,a);return new Rt(t,n)}maxPost(){const e=fa.EMPTY_NODE.updateChild(this.indexPath_,za);return new Rt(B,e)}toString(){return mt(this.indexPath_,0).join("/")}}
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
 */class Ma extends Nt{compare(e,t){const a=e.node.compareTo(t.node);return 0===a?F(e.name,t.name):a}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Rt.MIN}maxPost(){return Rt.MAX}makePost(e,t){const a=ya(e);return new Rt(t,a)}toString(){return".value"}}const Aa=new Ma,ba="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ia="-",Va="z",wa=786,Ca=function(){let e=0;const t=[];return function(a){const n=a===e;let r;e=a;const o=new Array(8);for(r=7;r>=0;r--)o[r]=ba.charAt(a%64),a=Math.floor(a/64);Object(i["e"])(0===a,"Cannot push at time == 0");let s=o.join("");if(n){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)s+=ba.charAt(t[r]);return Object(i["e"])(20===s.length,"nextPushId: Length should be 20."),s}}(),Ha=function(e){if(e===""+$)return Ia;const t=W(e);if(null!=t)return""+(t+1);const a=new Array(e.length);for(let o=0;o<a.length;o++)a[o]=e.charAt(o);if(a.length<wa)return a.push(Ia),a.join("");let n=a.length-1;while(n>=0&&a[n]===Va)n--;if(-1===n)return B;const r=a[n],i=ba.charAt(ba.indexOf(r)+1);return a[n]=i,a.slice(0,n+1).join("")},La=function(e){if(e===""+q)return S;const t=W(e);if(null!=t)return""+(t-1);const a=new Array(e.length);for(let n=0;n<a.length;n++)a[n]=e.charAt(n);return a[a.length-1]===Ia?1===a.length?""+$:(delete a[a.length-1],a.join("")):(a[a.length-1]=ba.charAt(ba.indexOf(a[a.length-1])-1),a.join("")+Va.repeat(wa-a.length))};
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
function ka(e){return{type:"value",snapshotNode:e}}function Sa(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ba(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Fa(e,t,a){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:a}}function Ea(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
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
 */class Oa{constructor(e){this.index_=e}updateChild(e,t,a,n,r,o){Object(i["e"])(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(t);return s.getChild(n).equals(a.getChild(n))&&s.isEmpty()===a.isEmpty()?e:(null!=o&&(a.isEmpty()?e.hasChild(t)?o.trackChildChange(Ba(t,s)):Object(i["e"])(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(Sa(t,a)):o.trackChildChange(Fa(t,a,s))),e.isLeafNode()&&a.isEmpty()?e:e.updateImmediateChild(t,a).withIndex(this.index_))}updateFullNode(e,t,a){return null!=a&&(e.isLeafNode()||e.forEachChild(sa,(e,n)=>{t.hasChild(e)||a.trackChildChange(Ba(e,n))}),t.isLeafNode()||t.forEachChild(sa,(t,n)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(n)||a.trackChildChange(Fa(t,n,r))}else a.trackChildChange(Sa(t,n))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?fa.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class Ta{constructor(e){this.indexedFilter_=new Oa(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ta.getStartPost_(e),this.endPost_=Ta.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,a,n,r,i){return this.matches(new Rt(t,a))||(a=fa.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,a,n,r,i)}updateFullNode(e,t,a){t.isLeafNode()&&(t=fa.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(fa.EMPTY_NODE);const r=this;return t.forEachChild(sa,(e,t)=>{r.matches(new Rt(e,t))||(n=n.updateImmediateChild(e,fa.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,n,a)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class Pa{constructor(e){this.rangedFilter_=new Ta(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,a,n,r,i){return this.rangedFilter_.matches(new Rt(t,a))||(a=fa.EMPTY_NODE),e.getImmediateChild(t).equals(a)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,a,n,r,i):this.fullLimitUpdateChild_(e,t,a,r,i)}updateFullNode(e,t,a){let n;if(t.isLeafNode()||t.isEmpty())n=fa.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;n=fa.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;while(e.hasNext()&&a<this.limit_){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;n=n.updateImmediateChild(t.name,t.node),a++}}else{let e,a,r,i;if(n=t.withIndex(this.index_),n=n.updatePriority(fa.EMPTY_NODE),this.reverse_){i=n.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),a=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,a)=>t(a,e)}else i=n.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),a=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,s=!1;while(i.hasNext()){const t=i.getNext();!s&&r(e,t)<=0&&(s=!0);const l=s&&o<this.limit_&&r(t,a)<=0;l?o++:n=n.updateImmediateChild(t.name,fa.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,n,a)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,a,n,r){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,a)=>e(a,t)}else o=this.index_.getCompare();const s=e;Object(i["e"])(s.numChildren()===this.limit_,"");const l=new Rt(t,a),c=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(s.hasChild(t)){const e=s.getImmediateChild(t);let i=n.getChildAfterChild(this.index_,c,this.reverse_);while(null!=i&&(i.name===t||s.hasChild(i.name)))i=n.getChildAfterChild(this.index_,i,this.reverse_);const u=null==i?1:o(i,l),d=h&&!a.isEmpty()&&u>=0;if(d)return null!=r&&r.trackChildChange(Fa(t,a,e)),s.updateImmediateChild(t,a);{null!=r&&r.trackChildChange(Ba(t,e));const a=s.updateImmediateChild(t,fa.EMPTY_NODE),n=null!=i&&this.rangedFilter_.matches(i);return n?(null!=r&&r.trackChildChange(Sa(i.name,i.node)),a.updateImmediateChild(i.name,i.node)):a}}return a.isEmpty()?e:h&&o(c,l)>=0?(null!=r&&(r.trackChildChange(Ba(c.name,c.node)),r.trackChildChange(Sa(t,a))),s.updateImmediateChild(t,a).updateImmediateChild(c.name,fa.EMPTY_NODE)):e}}
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
 */class xa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=sa}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Object(i["e"])(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Object(i["e"])(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:S}hasEnd(){return this.endSet_}getIndexEndValue(){return Object(i["e"])(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Object(i["e"])(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:B}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Object(i["e"])(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===sa}copy(){const e=new xa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ra(e){return e.loadsAllData()?new Oa(e.getIndex()):e.hasLimit()?new Pa(e):new Ta(e)}function Na(e,t){const a=e.copy();return a.limitSet_=!0,a.limit_=t,a.viewFrom_="l",a}function ja(e,t){const a=e.copy();return a.limitSet_=!0,a.limit_=t,a.viewFrom_="r",a}function Da(e,t,a){const n=e.copy();return n.startSet_=!0,void 0===t&&(t=null),n.indexStartValue_=t,null!=a?(n.startNameSet_=!0,n.indexStartName_=a):(n.startNameSet_=!1,n.indexStartName_=""),n}function Ua(e,t,a){let n;if(e.index_===Ut)"string"===typeof t&&(t=Ha(t)),n=Da(e,t,a);else{let r;r=null==a?B:Ha(a),n=Da(e,t,r)}return n.startAfterSet_=!0,n}function qa(e,t,a){const n=e.copy();return n.endSet_=!0,void 0===t&&(t=null),n.indexEndValue_=t,void 0!==a?(n.endNameSet_=!0,n.indexEndName_=a):(n.endNameSet_=!1,n.indexEndName_=""),n}function $a(e,t,a){let n,r;return e.index_===Ut?("string"===typeof t&&(t=La(t)),r=qa(e,t,a)):(n=null==a?S:La(a),r=qa(e,t,n)),r.endBeforeSet_=!0,r}function Wa(e,t){const a=e.copy();return a.index_=t,a}function Ga(e){const t={};if(e.isDefault())return t;let a;return e.index_===sa?a="$priority":e.index_===Aa?a="$value":e.index_===Ut?a="$key":(Object(i["e"])(e.index_ instanceof _a,"Unrecognized index type!"),a=e.index_.toString()),t["orderBy"]=Object(i["L"])(a),e.startSet_&&(t["startAt"]=Object(i["L"])(e.indexStartValue_),e.startNameSet_&&(t["startAt"]+=","+Object(i["L"])(e.indexStartName_))),e.endSet_&&(t["endAt"]=Object(i["L"])(e.indexEndValue_),e.endNameSet_&&(t["endAt"]+=","+Object(i["L"])(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function Ka(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_)),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_)),e.limitSet_){t["l"]=e.limit_;let a=e.viewFrom_;""===a&&(a=e.isViewFromLeft()?"l":"r"),t["vf"]=a}return e.index_!==sa&&(t["i"]=e.index_.toString()),t}
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
 */class Ja extends rt{constructor(e,t,a,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=a,this.appCheckTokenProvider_=n,this.log_=I("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Object(i["e"])(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,a,n){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ja.getListenId_(e,a),s={};this.listens_[o]=s;const l=Ga(e._queryParams);this.restRequest_(r+".json",l,(e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(r,l,!1,a),Object(i["I"])(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",n(t,null)}})}unlisten(e,t){const a=Ja.getListenId_(e,t);delete this.listens_[a]}get(e){const t=Ga(e._queryParams),a=e._path.toString(),n=new i["a"];return this.restRequest_(a+".json",t,(e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(a,r,!1,null),n.resolve(r)):n.reject(new Error(r))}),n.promise}refreshAuthToken(e){}restRequest_(e,t={},a){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([n,r])=>{n&&n.accessToken&&(t["auth"]=n.accessToken),r&&r.token&&(t["ac"]=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Object(i["G"])(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(a&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let t=null;if(s.status>=200&&s.status<300){try{t=Object(i["E"])(s.responseText)}catch(e){C("Failed to parse JSON response for "+o+": "+s.responseText)}a(null,t)}else 401!==s.status&&404!==s.status&&C("Got unsuccessful REST response for "+o+" Status: "+s.status),a(s.status);a=null}},s.open("GET",o,!0),s.send()})}}
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
 */class Qa{constructor(){this.rootNode_=fa.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function Ya(){return{value:null,children:new Map}}function Xa(e,t,a){if(yt(t))e.value=a,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,a);else{const n=ut(t);e.children.has(n)||e.children.set(n,Ya());const r=e.children.get(n);t=pt(t),Xa(r,t,a)}}function Za(e,t){if(yt(t))return e.value=null,e.children.clear(),!0;if(null!==e.value){if(e.value.isLeafNode())return!1;{const a=e.value;return e.value=null,a.forEachChild(sa,(t,a)=>{Xa(e,new ct(t),a)}),Za(e,t)}}if(e.children.size>0){const a=ut(t);if(t=pt(t),e.children.has(a)){const n=Za(e.children.get(a),t);n&&e.children.delete(a)}return 0===e.children.size}return!0}function en(e,t,a){null!==e.value?a(t,e.value):tn(e,(e,n)=>{const r=new ct(t.toString()+"/"+e);en(n,r,a)})}function tn(e,t){e.children.forEach((e,a)=>{t(a,e)})}
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
 */class an{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&x(this.last_,(e,a)=>{t[e]=t[e]-a}),this.last_=e,t}}
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
 */const nn=1e4,rn=3e4,on=3e5;class sn{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new an(e);const a=nn+(rn-nn)*Math.random();J(this.reportStats_.bind(this),Math.floor(a))}reportStats_(){const e=this.statsListener_.get(),t={};let a=!1;x(e,(e,n)=>{n>0&&Object(i["j"])(this.statsToReport_,e)&&(t[e]=n,a=!0)}),a&&this.server_.reportStats(t),J(this.reportStats_.bind(this),Math.floor(2*Math.random()*on))}}
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
 */var ln;function cn(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function un(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(ln||(ln={}));class dn{constructor(e,t,a){this.path=e,this.affectedTree=t,this.revert=a,this.type=ln.ACK_USER_WRITE,this.source=cn()}operationForChild(e){if(yt(this.path)){if(null!=this.affectedTree.value)return Object(i["e"])(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new dn(ht(),t,this.revert)}}return Object(i["e"])(ut(this.path)===e,"operationForChild called for unrelated child."),new dn(pt(this.path),this.affectedTree,this.revert)}}
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
 */class pn{constructor(e,t){this.source=e,this.path=t,this.type=ln.LISTEN_COMPLETE}operationForChild(e){return yt(this.path)?new pn(this.source,ht()):new pn(this.source,pt(this.path))}}
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
 */class vn{constructor(e,t,a){this.source=e,this.path=t,this.snap=a,this.type=ln.OVERWRITE}operationForChild(e){return yt(this.path)?new vn(this.source,ht(),this.snap.getImmediateChild(e)):new vn(this.source,pt(this.path),this.snap)}}
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
 */class fn{constructor(e,t,a){this.source=e,this.path=t,this.children=a,this.type=ln.MERGE}operationForChild(e){if(yt(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new vn(this.source,ht(),t.value):new fn(this.source,ht(),t)}return Object(i["e"])(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new fn(this.source,pt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class mn{constructor(e,t,a){this.node_=e,this.fullyInitialized_=t,this.filtered_=a}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(yt(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class zn{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gn(e,t,a,n){const r=[],i=[];return t.forEach(t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&i.push(Ea(t.childName,t.snapshotNode))}),yn(e,r,"child_removed",t,n,a),yn(e,r,"child_added",t,n,a),yn(e,r,"child_moved",i,n,a),yn(e,r,"child_changed",t,n,a),yn(e,r,"value",t,n,a),r}function yn(e,t,a,n,r,i){const o=n.filter(e=>e.type===a);o.sort((t,a)=>Mn(e,t,a)),o.forEach(a=>{const n=_n(e,a,i);r.forEach(r=>{r.respondsTo(a.type)&&t.push(r.createEvent(n,e.query_))})})}function _n(e,t,a){return"value"===t.type||"child_removed"===t.type||(t.prevName=a.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Mn(e,t,a){if(null==t.childName||null==a.childName)throw Object(i["f"])("Should only compare child_ events.");const n=new Rt(t.childName,t.snapshotNode),r=new Rt(a.childName,a.snapshotNode);return e.index_.compare(n,r)}
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
 */function An(e,t){return{eventCache:e,serverCache:t}}function bn(e,t,a,n){return An(new mn(t,a,n),e.serverCache)}function In(e,t,a,n){return An(e.eventCache,new mn(t,a,n))}function Vn(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function wn(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Cn;const Hn=()=>(Cn||(Cn=new Gt(E)),Cn);class Ln{constructor(e,t=Hn()){this.value=e,this.children=t}static fromObject(e){let t=new Ln(null);return x(e,(e,a)=>{t=t.set(new ct(e),a)}),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ht(),value:this.value};if(yt(e))return null;{const a=ut(e),n=this.children.get(a);if(null!==n){const r=n.findRootMostMatchingPathAndValue(pt(e),t);if(null!=r){const e=gt(new ct(a),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(yt(e))return this;{const t=ut(e),a=this.children.get(t);return null!==a?a.subtree(pt(e)):new Ln(null)}}set(e,t){if(yt(e))return new Ln(t,this.children);{const a=ut(e),n=this.children.get(a)||new Ln(null),r=n.set(pt(e),t),i=this.children.insert(a,r);return new Ln(this.value,i)}}remove(e){if(yt(e))return this.children.isEmpty()?new Ln(null):new Ln(null,this.children);{const t=ut(e),a=this.children.get(t);if(a){const n=a.remove(pt(e));let r;return r=n.isEmpty()?this.children.remove(t):this.children.insert(t,n),null===this.value&&r.isEmpty()?new Ln(null):new Ln(this.value,r)}return this}}get(e){if(yt(e))return this.value;{const t=ut(e),a=this.children.get(t);return a?a.get(pt(e)):null}}setTree(e,t){if(yt(e))return t;{const a=ut(e),n=this.children.get(a)||new Ln(null),r=n.setTree(pt(e),t);let i;return i=r.isEmpty()?this.children.remove(a):this.children.insert(a,r),new Ln(this.value,i)}}fold(e){return this.fold_(ht(),e)}fold_(e,t){const a={};return this.children.inorderTraversal((n,r)=>{a[n]=r.fold_(gt(e,n),t)}),t(e,this.value,a)}findOnPath(e,t){return this.findOnPath_(e,ht(),t)}findOnPath_(e,t,a){const n=!!this.value&&a(t,this.value);if(n)return n;if(yt(e))return null;{const n=ut(e),r=this.children.get(n);return r?r.findOnPath_(pt(e),gt(t,n),a):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ht(),t)}foreachOnPath_(e,t,a){if(yt(e))return this;{this.value&&a(t,this.value);const n=ut(e),r=this.children.get(n);return r?r.foreachOnPath_(pt(e),gt(t,n),a):new Ln(null)}}foreach(e){this.foreach_(ht(),e)}foreach_(e,t){this.children.inorderTraversal((a,n)=>{n.foreach_(gt(e,a),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,a)=>{a.value&&e(t,a.value)})}}
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
 */class kn{constructor(e){this.writeTree_=e}static empty(){return new kn(new Ln(null))}}function Sn(e,t,a){if(yt(t))return new kn(new Ln(a));{const n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){const r=n.path;let i=n.value;const o=_t(r,t);return i=i.updateChild(o,a),new kn(e.writeTree_.set(r,i))}{const n=new Ln(a),r=e.writeTree_.setTree(t,n);return new kn(r)}}}function Bn(e,t,a){let n=e;return x(a,(e,a)=>{n=Sn(n,gt(t,e),a)}),n}function Fn(e,t){if(yt(t))return kn.empty();{const a=e.writeTree_.setTree(t,new Ln(null));return new kn(a)}}function En(e,t){return null!=On(e,t)}function On(e,t){const a=e.writeTree_.findRootMostValueAndPath(t);return null!=a?e.writeTree_.get(a.path).getChild(_t(a.path,t)):null}function Tn(e){const t=[],a=e.writeTree_.value;return null!=a?a.isLeafNode()||a.forEachChild(sa,(e,a)=>{t.push(new Rt(e,a))}):e.writeTree_.children.inorderTraversal((e,a)=>{null!=a.value&&t.push(new Rt(e,a.value))}),t}function Pn(e,t){if(yt(t))return e;{const a=On(e,t);return new kn(null!=a?new Ln(a):e.writeTree_.subtree(t))}}function xn(e){return e.writeTree_.isEmpty()}function Rn(e,t){return Nn(ht(),e.writeTree_,t)}function Nn(e,t,a){if(null!=t.value)return a.updateChild(e,t.value);{let n=null;return t.children.inorderTraversal((t,r)=>{".priority"===t?(Object(i["e"])(null!==r.value,"Priority writes must always be leaf nodes"),n=r.value):a=Nn(gt(e,t),r,a)}),a.getChild(e).isEmpty()||null===n||(a=a.updateChild(gt(e,".priority"),n)),a}}
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
 */function jn(e,t){return hr(t,e)}function Dn(e,t,a,n,r){Object(i["e"])(n>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:a,writeId:n,visible:r}),r&&(e.visibleWrites=Sn(e.visibleWrites,t,a)),e.lastWriteId=n}function Un(e,t,a,n){Object(i["e"])(n>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:a,writeId:n,visible:!0}),e.visibleWrites=Bn(e.visibleWrites,t,a),e.lastWriteId=n}function qn(e,t){for(let a=0;a<e.allWrites.length;a++){const n=e.allWrites[a];if(n.writeId===t)return n}return null}function $n(e,t){const a=e.allWrites.findIndex(e=>e.writeId===t);Object(i["e"])(a>=0,"removeWrite called with nonexistent writeId.");const n=e.allWrites[a];e.allWrites.splice(a,1);let r=n.visible,o=!1,s=e.allWrites.length-1;while(r&&s>=0){const t=e.allWrites[s];t.visible&&(s>=a&&Wn(t,n.path)?r=!1:bt(n.path,t.path)&&(o=!0)),s--}if(r){if(o)return Gn(e),!0;if(n.snap)e.visibleWrites=Fn(e.visibleWrites,n.path);else{const t=n.children;x(t,t=>{e.visibleWrites=Fn(e.visibleWrites,gt(n.path,t))})}return!0}return!1}function Wn(e,t){if(e.snap)return bt(e.path,t);for(const a in e.children)if(e.children.hasOwnProperty(a)&&bt(gt(e.path,a),t))return!0;return!1}function Gn(e){e.visibleWrites=Jn(e.allWrites,Kn,ht()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Kn(e){return e.visible}function Jn(e,t,a){let n=kn.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)bt(a,e)?(t=_t(a,e),n=Sn(n,t,o.snap)):bt(e,a)&&(t=_t(e,a),n=Sn(n,ht(),o.snap.getChild(t)));else{if(!o.children)throw Object(i["f"])("WriteRecord should have .snap or .children");if(bt(a,e))t=_t(a,e),n=Bn(n,t,o.children);else if(bt(e,a))if(t=_t(e,a),yt(t))n=Bn(n,ht(),o.children);else{const e=Object(i["I"])(o.children,ut(t));if(e){const a=e.getChild(pt(t));n=Sn(n,ht(),a)}}}}}return n}function Qn(e,t,a,n,r){if(n||r){const i=Pn(e.visibleWrites,t);if(!r&&xn(i))return a;if(r||null!=a||En(i,ht())){const i=function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(bt(e.path,t)||bt(t,e.path))},o=Jn(e.allWrites,i,t),s=a||fa.EMPTY_NODE;return Rn(o,s)}return null}{const n=On(e.visibleWrites,t);if(null!=n)return n;{const n=Pn(e.visibleWrites,t);if(xn(n))return a;if(null!=a||En(n,ht())){const e=a||fa.EMPTY_NODE;return Rn(n,e)}return null}}}function Yn(e,t,a){let n=fa.EMPTY_NODE;const r=On(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(sa,(e,t)=>{n=n.updateImmediateChild(e,t)}),n;if(a){const r=Pn(e.visibleWrites,t);return a.forEachChild(sa,(e,t)=>{const a=Rn(Pn(r,new ct(e)),t);n=n.updateImmediateChild(e,a)}),Tn(r).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}{const a=Pn(e.visibleWrites,t);return Tn(a).forEach(e=>{n=n.updateImmediateChild(e.name,e.node)}),n}}function Xn(e,t,a,n,r){Object(i["e"])(n||r,"Either existingEventSnap or existingServerSnap must exist");const o=gt(t,a);if(En(e.visibleWrites,o))return null;{const t=Pn(e.visibleWrites,o);return xn(t)?r.getChild(a):Rn(t,r.getChild(a))}}function Zn(e,t,a,n){const r=gt(t,a),i=On(e.visibleWrites,r);if(null!=i)return i;if(n.isCompleteForChild(a)){const t=Pn(e.visibleWrites,r);return Rn(t,n.getNode().getImmediateChild(a))}return null}function er(e,t){return On(e.visibleWrites,t)}function tr(e,t,a,n,r,i,o){let s;const l=Pn(e.visibleWrites,t),c=On(l,ht());if(null!=c)s=c;else{if(null==a)return[];s=Rn(l,a)}if(s=s.withIndex(o),s.isEmpty()||s.isLeafNode())return[];{const e=[],t=o.getCompare(),a=i?s.getReverseIteratorFrom(n,o):s.getIteratorFrom(n,o);let l=a.getNext();while(l&&e.length<r)0!==t(l,n)&&e.push(l),l=a.getNext();return e}}function ar(){return{visibleWrites:kn.empty(),allWrites:[],lastWriteId:-1}}function nr(e,t,a,n){return Qn(e.writeTree,e.treePath,t,a,n)}function rr(e,t){return Yn(e.writeTree,e.treePath,t)}function ir(e,t,a,n){return Xn(e.writeTree,e.treePath,t,a,n)}function or(e,t){return er(e.writeTree,gt(e.treePath,t))}function sr(e,t,a,n,r,i){return tr(e.writeTree,e.treePath,t,a,n,r,i)}function lr(e,t,a){return Zn(e.writeTree,e.treePath,t,a)}function cr(e,t){return hr(gt(e.treePath,t),e.writeTree)}function hr(e,t){return{treePath:e,writeTree:t}}
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
 */class ur{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,a=e.childName;Object(i["e"])("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Object(i["e"])(".priority"!==a,"Only non-priority child changes can be tracked.");const n=this.changeMap.get(a);if(n){const r=n.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(a,Fa(a,e.snapshotNode,n.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(a);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(a,Ba(a,n.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(a,Sa(a,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw Object(i["f"])("Illegal combination of changes: "+e+" occurred after "+n);this.changeMap.set(a,Fa(a,e.snapshotNode,n.oldSnap))}}else this.changeMap.set(a,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */class dr{getCompleteChild(e){return null}getChildAfterChild(e,t,a){return null}}const pr=new dr;class vr{constructor(e,t,a=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=a}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new mn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lr(this.writes_,e,t)}}getChildAfterChild(e,t,a){const n=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:wn(this.viewCache_),r=sr(this.writes_,n,t,1,a,e);return 0===r.length?null:r[0]}}
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
 */function fr(e){return{filter:e}}function mr(e,t){Object(i["e"])(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),Object(i["e"])(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function zr(e,t,a,n,r){const o=new ur;let s,l;if(a.type===ln.OVERWRITE){const c=a;c.source.fromUser?s=Mr(e,t,c.path,c.snap,n,r,o):(Object(i["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered()&&!yt(c.path),s=_r(e,t,c.path,c.snap,n,r,l,o))}else if(a.type===ln.MERGE){const c=a;c.source.fromUser?s=br(e,t,c.path,c.children,n,r,o):(Object(i["e"])(c.source.fromServer,"Unknown source."),l=c.source.tagged||t.serverCache.isFiltered(),s=Vr(e,t,c.path,c.children,n,r,l,o))}else if(a.type===ln.ACK_USER_WRITE){const i=a;s=i.revert?Hr(e,t,i.path,n,r,o):wr(e,t,i.path,i.affectedTree,n,r,o)}else{if(a.type!==ln.LISTEN_COMPLETE)throw Object(i["f"])("Unknown operation type: "+a.type);s=Cr(e,t,a.path,n,o)}const c=o.getChanges();return gr(t,s,c),{viewCache:s,changes:c}}function gr(e,t,a){const n=t.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=Vn(e);(a.length>0||!e.eventCache.isFullyInitialized()||r&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&a.push(ka(Vn(t)))}}function yr(e,t,a,n,r,o){const s=t.eventCache;if(null!=or(n,a))return t;{let l,c;if(yt(a))if(Object(i["e"])(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const a=wn(t),r=a instanceof fa?a:fa.EMPTY_NODE,i=rr(n,r);l=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const a=nr(n,wn(t));l=e.filter.updateFullNode(t.eventCache.getNode(),a,o)}else{const h=ut(a);if(".priority"===h){Object(i["e"])(1===dt(a),"Can't have a priority with additional path components");const r=s.getNode();c=t.serverCache.getNode();const o=ir(n,a,r,c);l=null!=o?e.filter.updatePriority(r,o):s.getNode()}else{const i=pt(a);let u;if(s.isCompleteForChild(h)){c=t.serverCache.getNode();const e=ir(n,a,s.getNode(),c);u=null!=e?s.getNode().getImmediateChild(h).updateChild(i,e):s.getNode().getImmediateChild(h)}else u=lr(n,h,t.serverCache);l=null!=u?e.filter.updateChild(s.getNode(),h,u,i,r,o):s.getNode()}}return bn(t,l,s.isFullyInitialized()||yt(a),e.filter.filtersNodes())}}function _r(e,t,a,n,r,i,o,s){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(yt(a))c=h.updateFullNode(l.getNode(),n,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(a,n);c=h.updateFullNode(l.getNode(),e,null)}else{const e=ut(a);if(!l.isCompleteForPath(a)&&dt(a)>1)return t;const r=pt(a),i=l.getNode().getImmediateChild(e),o=i.updateChild(r,n);c=".priority"===e?h.updatePriority(l.getNode(),o):h.updateChild(l.getNode(),e,o,r,pr,null)}const u=In(t,c,l.isFullyInitialized()||yt(a),h.filtersNodes()),d=new vr(r,u,i);return yr(e,u,a,r,d,s)}function Mr(e,t,a,n,r,i,o){const s=t.eventCache;let l,c;const h=new vr(r,t,i);if(yt(a))c=e.filter.updateFullNode(t.eventCache.getNode(),n,o),l=bn(t,c,!0,e.filter.filtersNodes());else{const r=ut(a);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),n),l=bn(t,c,s.isFullyInitialized(),s.isFiltered());else{const i=pt(a),c=s.getNode().getImmediateChild(r);let u;if(yt(i))u=n;else{const e=h.getCompleteChild(r);u=null!=e?".priority"===vt(i)&&e.getChild(zt(i)).isEmpty()?e:e.updateChild(i,n):fa.EMPTY_NODE}if(c.equals(u))l=t;else{const a=e.filter.updateChild(s.getNode(),r,u,i,h,o);l=bn(t,a,s.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Ar(e,t){return e.eventCache.isCompleteForChild(t)}function br(e,t,a,n,r,i,o){let s=t;return n.foreach((n,l)=>{const c=gt(a,n);Ar(t,ut(c))&&(s=Mr(e,s,c,l,r,i,o))}),n.foreach((n,l)=>{const c=gt(a,n);Ar(t,ut(c))||(s=Mr(e,s,c,l,r,i,o))}),s}function Ir(e,t,a){return a.foreach((e,a)=>{t=t.updateChild(e,a)}),t}function Vr(e,t,a,n,r,i,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=yt(a)?n:new Ln(null).setTree(a,n);const h=t.serverCache.getNode();return l.children.inorderTraversal((a,n)=>{if(h.hasChild(a)){const l=t.serverCache.getNode().getImmediateChild(a),h=Ir(e,l,n);c=_r(e,c,new ct(a),h,r,i,o,s)}}),l.children.inorderTraversal((a,n)=>{const l=!t.serverCache.isCompleteForChild(a)&&void 0===n.value;if(!h.hasChild(a)&&!l){const l=t.serverCache.getNode().getImmediateChild(a),h=Ir(e,l,n);c=_r(e,c,new ct(a),h,r,i,o,s)}}),c}function wr(e,t,a,n,r,i,o){if(null!=or(r,a))return t;const s=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){if(yt(a)&&l.isFullyInitialized()||l.isCompleteForPath(a))return _r(e,t,a,l.getNode().getChild(a),r,i,s,o);if(yt(a)){let n=new Ln(null);return l.getNode().forEachChild(Ut,(e,t)=>{n=n.set(new ct(e),t)}),Vr(e,t,a,n,r,i,s,o)}return t}{let c=new Ln(null);return n.foreach((e,t)=>{const n=gt(a,e);l.isCompleteForPath(n)&&(c=c.set(e,l.getNode().getChild(n)))}),Vr(e,t,a,c,r,i,s,o)}}function Cr(e,t,a,n,r){const i=t.serverCache,o=In(t,i.getNode(),i.isFullyInitialized()||yt(a),i.isFiltered());return yr(e,o,a,n,pr,r)}function Hr(e,t,a,n,r,o){let s;if(null!=or(n,a))return t;{const l=new vr(n,t,r),c=t.eventCache.getNode();let h;if(yt(a)||".priority"===ut(a)){let a;if(t.serverCache.isFullyInitialized())a=nr(n,wn(t));else{const e=t.serverCache.getNode();Object(i["e"])(e instanceof fa,"serverChildren would be complete if leaf node"),a=rr(n,e)}a=a,h=e.filter.updateFullNode(c,a,o)}else{const r=ut(a);let i=lr(n,r,t.serverCache);null==i&&t.serverCache.isCompleteForChild(r)&&(i=c.getImmediateChild(r)),h=null!=i?e.filter.updateChild(c,r,i,pt(a),l,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,fa.EMPTY_NODE,pt(a),l,o):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=nr(n,wn(t)),s.isLeafNode()&&(h=e.filter.updateFullNode(h,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=or(n,ht()),bn(t,h,s,e.filter.filtersNodes())}}
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
 */class Lr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const a=this.query_._queryParams,n=new Oa(a.getIndex()),r=Ra(a);this.processor_=fr(r);const i=t.serverCache,o=t.eventCache,s=n.updateFullNode(fa.EMPTY_NODE,i.getNode(),null),l=r.updateFullNode(fa.EMPTY_NODE,o.getNode(),null),c=new mn(s,i.isFullyInitialized(),n.filtersNodes()),h=new mn(l,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=An(h,c),this.eventGenerator_=new zn(this.query_)}get query(){return this.query_}}function kr(e){return e.viewCache_.serverCache.getNode()}function Sr(e){return Vn(e.viewCache_)}function Br(e,t){const a=wn(e.viewCache_);return a&&(e.query._queryParams.loadsAllData()||!yt(t)&&!a.getImmediateChild(ut(t)).isEmpty())?a.getChild(t):null}function Fr(e){return 0===e.eventRegistrations_.length}function Er(e,t){e.eventRegistrations_.push(t)}function Or(e,t,a){const n=[];if(a){Object(i["e"])(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach(e=>{const t=e.createCancelEvent(a,r);t&&n.push(t)})}if(t){let a=[];for(let n=0;n<e.eventRegistrations_.length;++n){const r=e.eventRegistrations_[n];if(r.matches(t)){if(t.hasAnyCallback()){a=a.concat(e.eventRegistrations_.slice(n+1));break}}else a.push(r)}e.eventRegistrations_=a}else e.eventRegistrations_=[];return n}function Tr(e,t,a,n){t.type===ln.MERGE&&null!==t.source.queryId&&(Object(i["e"])(wn(e.viewCache_),"We should always have a full cache before handling merges"),Object(i["e"])(Vn(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,o=zr(e.processor_,r,t,a,n);return mr(e.processor_,o.viewCache),Object(i["e"])(o.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,xr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function Pr(e,t){const a=e.viewCache_.eventCache,n=[];if(!a.getNode().isLeafNode()){const e=a.getNode();e.forEachChild(sa,(e,t)=>{n.push(Sa(e,t))})}return a.isFullyInitialized()&&n.push(ka(a.getNode())),xr(e,n,a.getNode(),t)}function xr(e,t,a,n){const r=n?[n]:e.eventRegistrations_;return gn(e.eventGenerator_,t,a,r)}
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
 */let Rr,Nr;class jr{constructor(){this.views=new Map}}function Dr(e){Object(i["e"])(!Rr,"__referenceConstructor has already been defined"),Rr=e}function Ur(){return Object(i["e"])(Rr,"Reference.ts has not been loaded"),Rr}function qr(e){return 0===e.views.size}function $r(e,t,a,n){const r=t.source.queryId;if(null!==r){const o=e.views.get(r);return Object(i["e"])(null!=o,"SyncTree gave us an op for an invalid query."),Tr(o,t,a,n)}{let r=[];for(const i of e.views.values())r=r.concat(Tr(i,t,a,n));return r}}function Wr(e,t,a,n,r){const i=t._queryIdentifier,o=e.views.get(i);if(!o){let e=nr(a,r?n:null),i=!1;e?i=!0:n instanceof fa?(e=rr(a,n),i=!1):(e=fa.EMPTY_NODE,i=!1);const o=An(new mn(e,i,!1),new mn(n,r,!1));return new Lr(t,o)}return o}function Gr(e,t,a,n,r,i){const o=Wr(e,t,n,r,i);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Er(o,a),Pr(o,a)}function Kr(e,t,a,n){const r=t._queryIdentifier,i=[];let o=[];const s=Zr(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(Or(c,a,n)),Fr(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(Or(t,a,n)),Fr(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||i.push(t.query)))}return s&&!Zr(e)&&i.push(new(Ur())(t._repo,t._path)),{removed:i,events:o}}function Jr(e){const t=[];for(const a of e.views.values())a.query._queryParams.loadsAllData()||t.push(a);return t}function Qr(e,t){let a=null;for(const n of e.views.values())a=a||Br(n,t);return a}function Yr(e,t){const a=t._queryParams;if(a.loadsAllData())return ei(e);{const a=t._queryIdentifier;return e.views.get(a)}}function Xr(e,t){return null!=Yr(e,t)}function Zr(e){return null!=ei(e)}function ei(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */function ti(e){Object(i["e"])(!Nr,"__referenceConstructor has already been defined"),Nr=e}function ai(){return Object(i["e"])(Nr,"Reference.ts has not been loaded"),Nr}let ni=1;class ri{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ln(null),this.pendingWriteTree_=ar(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ii(e,t,a,n,r){return Dn(e.pendingWriteTree_,t,a,n,r),r?gi(e,new vn(cn(),t,a)):[]}function oi(e,t,a,n){Un(e.pendingWriteTree_,t,a,n);const r=Ln.fromObject(a);return gi(e,new fn(cn(),t,r))}function si(e,t,a=!1){const n=qn(e.pendingWriteTree_,t),r=$n(e.pendingWriteTree_,t);if(r){let t=new Ln(null);return null!=n.snap?t=t.set(ht(),!0):x(n.children,e=>{t=t.set(new ct(e),!0)}),gi(e,new dn(n.path,t,a))}return[]}function li(e,t,a){return gi(e,new vn(hn(),t,a))}function ci(e,t,a){const n=Ln.fromObject(a);return gi(e,new fn(hn(),t,n))}function hi(e,t){return gi(e,new pn(hn(),t))}function ui(e,t,a){const n=Ii(e,a);if(n){const a=Vi(n),r=a.path,i=a.queryId,o=_t(r,t),s=new pn(un(i),o);return wi(e,r,s)}return[]}function di(e,t,a,n){const r=t._path,i=e.syncPointTree_.get(r);let o=[];if(i&&("default"===t._queryIdentifier||Xr(i,t))){const s=Kr(i,t,a,n);qr(i)&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=s.removed;o=s.events;const c=-1!==l.findIndex(e=>e._queryParams.loadsAllData()),h=e.syncPointTree_.findOnPath(r,(e,t)=>Zr(t));if(c&&!h){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const a=Ci(t);for(let t=0;t<a.length;++t){const n=a[t],r=n.query,i=Mi(e,n);e.listenProvider_.startListening(Hi(r),Ai(e,r),i.hashFn,i.onComplete)}}}if(!h&&l.length>0&&!n)if(c){const a=null;e.listenProvider_.stopListening(Hi(t),a)}else l.forEach(t=>{const a=e.queryToTagMap.get(bi(t));e.listenProvider_.stopListening(Hi(t),a)});Li(e,l)}return o}function pi(e,t,a,n){const r=Ii(e,n);if(null!=r){const n=Vi(r),i=n.path,o=n.queryId,s=_t(i,t),l=new vn(un(o),s,a);return wi(e,i,l)}return[]}function vi(e,t,a,n){const r=Ii(e,n);if(r){const n=Vi(r),i=n.path,o=n.queryId,s=_t(i,t),l=Ln.fromObject(a),c=new fn(un(o),s,l);return wi(e,i,c)}return[]}function fi(e,t,a){const n=t._path;let r=null,o=!1;e.syncPointTree_.foreachOnPath(n,(e,t)=>{const a=_t(e,n);r=r||Qr(t,a),o=o||Zr(t)});let s,l=e.syncPointTree_.get(n);if(l?(o=o||Zr(l),r=r||Qr(l,ht())):(l=new jr,e.syncPointTree_=e.syncPointTree_.set(n,l)),null!=r)s=!0;else{s=!1,r=fa.EMPTY_NODE;const t=e.syncPointTree_.subtree(n);t.foreachChild((e,t)=>{const a=Qr(t,ht());a&&(r=r.updateImmediateChild(e,a))})}const c=Xr(l,t);if(!c&&!t._queryParams.loadsAllData()){const a=bi(t);Object(i["e"])(!e.queryToTagMap.has(a),"View does not exist, but we have a tag");const n=ki();e.queryToTagMap.set(a,n),e.tagToQueryMap.set(n,a)}const h=jn(e.pendingWriteTree_,n);let u=Gr(l,t,a,h,r,s);if(!c&&!o){const a=Yr(l,t);u=u.concat(Si(e,t,a))}return u}function mi(e,t,a){const n=!0,r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(e,a)=>{const n=_t(e,t),r=Qr(a,n);if(r)return r});return Qn(r,t,i,a,n)}function zi(e,t){const a=t._path;let n=null;e.syncPointTree_.foreachOnPath(a,(e,t)=>{const r=_t(e,a);n=n||Qr(t,r)});let r=e.syncPointTree_.get(a);r?n=n||Qr(r,ht()):(r=new jr,e.syncPointTree_=e.syncPointTree_.set(a,r));const i=null!=n,o=i?new mn(n,!0,!1):null,s=jn(e.pendingWriteTree_,t._path),l=Wr(r,t,s,i?o.getNode():fa.EMPTY_NODE,i);return Sr(l)}function gi(e,t){return yi(t,e.syncPointTree_,null,jn(e.pendingWriteTree_,ht()))}function yi(e,t,a,n){if(yt(e.path))return _i(e,t,a,n);{const r=t.get(ht());null==a&&null!=r&&(a=Qr(r,ht()));let i=[];const o=ut(e.path),s=e.operationForChild(o),l=t.children.get(o);if(l&&s){const e=a?a.getImmediateChild(o):null,t=cr(n,o);i=i.concat(yi(s,l,e,t))}return r&&(i=i.concat($r(r,e,n,a))),i}}function _i(e,t,a,n){const r=t.get(ht());null==a&&null!=r&&(a=Qr(r,ht()));let i=[];return t.children.inorderTraversal((t,r)=>{const o=a?a.getImmediateChild(t):null,s=cr(n,t),l=e.operationForChild(t);l&&(i=i.concat(_i(l,r,o,s)))}),r&&(i=i.concat($r(r,e,n,a))),i}function Mi(e,t){const a=t.query,n=Ai(e,a);return{hashFn:()=>{const e=kr(t)||fa.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return n?ui(e,a._path,n):hi(e,a._path);{const n=D(t,a);return di(e,a,null,n)}}}}function Ai(e,t){const a=bi(t);return e.queryToTagMap.get(a)}function bi(e){return e._path.toString()+"$"+e._queryIdentifier}function Ii(e,t){return e.tagToQueryMap.get(t)}function Vi(e){const t=e.indexOf("$");return Object(i["e"])(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ct(e.substr(0,t))}}function wi(e,t,a){const n=e.syncPointTree_.get(t);Object(i["e"])(n,"Missing sync point for query tag that we're tracking");const r=jn(e.pendingWriteTree_,t);return $r(n,a,r,null)}function Ci(e){return e.fold((e,t,a)=>{if(t&&Zr(t)){const e=ei(t);return[e]}{let e=[];return t&&(e=Jr(t)),x(a,(t,a)=>{e=e.concat(a)}),e}})}function Hi(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ai())(e._repo,e._path):e}function Li(e,t){for(let a=0;a<t.length;++a){const n=t[a];if(!n._queryParams.loadsAllData()){const t=bi(n),a=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(a)}}}function ki(){return ni++}function Si(e,t,a){const n=t._path,r=Ai(e,t),o=Mi(e,a),s=e.listenProvider_.startListening(Hi(t),r,o.hashFn,o.onComplete),l=e.syncPointTree_.subtree(n);if(r)Object(i["e"])(!Zr(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold((e,t,a)=>{if(!yt(e)&&t&&Zr(t))return[ei(t).query];{let e=[];return t&&(e=e.concat(Jr(t).map(e=>e.query))),x(a,(t,a)=>{e=e.concat(a)}),e}});for(let a=0;a<t.length;++a){const n=t[a];e.listenProvider_.stopListening(Hi(n),Ai(e,n))}}return s}
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
 */class Bi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Bi(t)}node(){return this.node_}}class Fi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=gt(this.path_,e);return new Fi(this.syncTree_,t)}node(){return mi(this.syncTree_,this.path_)}}const Ei=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},Oi=function(e,t,a){return e&&"object"===typeof e?(Object(i["e"])(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?Ti(e[".sv"],t,a):"object"===typeof e[".sv"]?Pi(e[".sv"],t):void Object(i["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ti=function(e,t,a){switch(e){case"timestamp":return a["timestamp"];default:Object(i["e"])(!1,"Unexpected server value: "+e)}},Pi=function(e,t,a){e.hasOwnProperty("increment")||Object(i["e"])(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const n=e["increment"];"number"!==typeof n&&Object(i["e"])(!1,"Unexpected increment value: "+n);const r=t.node();if(Object(i["e"])(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r,s=o.getValue();return"number"!==typeof s?n:s+n},xi=function(e,t,a,n){return Ni(t,new Fi(a,e),n)},Ri=function(e,t,a){return Ni(e,new Bi(t),a)};function Ni(e,t,a){const n=e.getPriority().val(),r=Oi(n,t.getImmediateChild(".priority"),a);let i;if(e.isLeafNode()){const n=e,i=Oi(n.getValue(),t,a);return i!==n.getValue()||r!==n.getPriority().val()?new na(i,ya(r)):e}{const n=e;return i=n,r!==n.getPriority().val()&&(i=i.updatePriority(new na(r))),n.forEachChild(sa,(e,n)=>{const r=Ni(n,t.getImmediateChild(e),a);r!==n&&(i=i.updateImmediateChild(e,r))}),i}}
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
 */class ji{constructor(e="",t=null,a={children:{},childCount:0}){this.name=e,this.parent=t,this.node=a}}function Di(e,t){let a=t instanceof ct?t:new ct(t),n=e,r=ut(a);while(null!==r){const e=Object(i["I"])(n.node.children,r)||{children:{},childCount:0};n=new ji(r,n,e),a=pt(a),r=ut(a)}return n}function Ui(e){return e.node.value}function qi(e,t){e.node.value=t,Yi(e)}function $i(e){return e.node.childCount>0}function Wi(e){return void 0===Ui(e)&&!$i(e)}function Gi(e,t){x(e.node.children,(a,n)=>{t(new ji(a,e,n))})}function Ki(e,t,a,n){a&&!n&&t(e),Gi(e,e=>{Ki(e,t,!0,n)}),a&&n&&t(e)}function Ji(e,t,a){let n=a?e:e.parent;while(null!==n){if(t(n))return!0;n=n.parent}return!1}function Qi(e){return new ct(null===e.parent?e.name:Qi(e.parent)+"/"+e.name)}function Yi(e){null!==e.parent&&Xi(e.parent,e.name,e)}function Xi(e,t,a){const n=Wi(a),r=Object(i["j"])(e.node.children,t);n&&r?(delete e.node.children[t],e.node.childCount--,Yi(e)):n||r||(e.node.children[t]=a.node,e.node.childCount++,Yi(e))}
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
 */const Zi=/[\[\].#$\/\u0000-\u001F\u007F]/,eo=/[\[\].#$\u0000-\u001F\u007F]/,to=10485760,ao=function(e){return"string"===typeof e&&0!==e.length&&!Zi.test(e)},no=function(e){return"string"===typeof e&&0!==e.length&&!eo.test(e)},ro=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),no(e)},io=function(e){return null===e||"string"===typeof e||"number"===typeof e&&!L(e)||e&&"object"===typeof e&&Object(i["j"])(e,".sv")},oo=function(e,t,a,n){n&&void 0===t||so(Object(i["p"])(e,"value"),t,a)},so=function(e,t,a){const n=a instanceof ct?new It(a,e):a;if(void 0===t)throw new Error(e+"contains undefined "+Ht(n));if("function"===typeof t)throw new Error(e+"contains a function "+Ht(n)+" with contents = "+t.toString());if(L(t))throw new Error(e+"contains "+t.toString()+" "+Ht(n));if("string"===typeof t&&t.length>to/3&&Object(i["J"])(t)>to)throw new Error(e+"contains a string greater than "+to+" utf8 bytes "+Ht(n)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let a=!1,r=!1;if(x(t,(t,i)=>{if(".value"===t)a=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!ao(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ht(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Vt(n,t),so(e,i,n),wt(n)}),a&&r)throw new Error(e+' contains ".value" child '+Ht(n)+" in addition to actual children.")}},lo=function(e,t){let a,n;for(a=0;a<t.length;a++){n=t[a];const r=mt(n);for(let t=0;t<r.length;t++)if(".priority"===r[t]&&t===r.length-1);else if(!ao(r[t]))throw new Error(e+"contains an invalid key ("+r[t]+") in path "+n.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(Mt);let r=null;for(a=0;a<t.length;a++){if(n=t[a],null!==r&&bt(r,n))throw new Error(e+"contains a path "+r.toString()+" that is ancestor of another path "+n.toString());r=n}},co=function(e,t,a,n){if(n&&void 0===t)return;const r=Object(i["p"])(e,"values");if(!t||"object"!==typeof t||Array.isArray(t))throw new Error(r+" must be an object containing the children to replace.");const o=[];x(t,(e,t)=>{const n=new ct(e);if(so(r,t,gt(a,n)),".priority"===vt(n)&&!io(t))throw new Error(r+"contains an invalid value for '"+n.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(n)}),lo(r,o)},ho=function(e,t,a){if(!a||void 0!==t){if(L(t))throw new Error(Object(i["p"])(e,"priority")+"is "+t.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!io(t))throw new Error(Object(i["p"])(e,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},uo=function(e,t,a,n){if((!n||void 0!==a)&&!ao(a))throw new Error(Object(i["p"])(e,t)+'was an invalid key = "'+a+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')},po=function(e,t,a,n){if((!n||void 0!==a)&&!no(a))throw new Error(Object(i["p"])(e,t)+'was an invalid path = "'+a+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},vo=function(e,t,a,n){a&&(a=a.replace(/^\/*\.info(\/|$)/,"/")),po(e,t,a,n)},fo=function(e,t){if(".info"===ut(t))throw new Error(e+" failed = Can't modify data under /.info/")},mo=function(e,t){const a=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!ao(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==a.length&&!ro(a))throw new Error(Object(i["p"])(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class zo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function go(e,t){let a=null;for(let n=0;n<t.length;n++){const r=t[n],i=r.getPath();null===a||At(i,a.path)||(e.eventLists_.push(a),a=null),null===a&&(a={events:[],path:i}),a.events.push(r)}a&&e.eventLists_.push(a)}function yo(e,t,a){go(e,a),Mo(e,e=>At(e,t))}function _o(e,t,a){go(e,a),Mo(e,e=>bt(e,t)||bt(t,e))}function Mo(e,t){e.recursionDepth_++;let a=!0;for(let n=0;n<e.eventLists_.length;n++){const r=e.eventLists_[n];if(r){const i=r.path;t(i)?(Ao(e.eventLists_[n]),e.eventLists_[n]=null):a=!1}}a&&(e.eventLists_=[]),e.recursionDepth_--}function Ao(e){for(let t=0;t<e.events.length;t++){const a=e.events[t];if(null!==a){e.events[t]=null;const n=a.getEventRunner();_&&b("event: "+a.toString()),G(n)}}}
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
 */const bo="repo_interrupt",Io=25;class Vo{constructor(e,t,a,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=a,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ya(),this.transactionQueueTree_=new ji,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function wo(e,t,a){if(e.stats_=me(e.repoInfo_),e.forceRestClient_||K())e.server_=new Ja(e.repoInfo_,(t,a,n,r)=>{Lo(e,t,a,n,r)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>ko(e,!0),0);else{if("undefined"!==typeof a&&null!==a){if("object"!==typeof a)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Object(i["L"])(a)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}e.persistentConnection_=new xt(e.repoInfo_,t,(t,a,n,r)=>{Lo(e,t,a,n,r)},t=>{ko(e,t)},t=>{So(e,t)},e.authTokenProvider_,e.appCheckProvider_,a),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(t=>{e.server_.refreshAuthToken(t)}),e.appCheckProvider_.addTokenChangeListener(t=>{e.server_.refreshAppCheckToken(t.token)}),e.statsReporter_=ze(e.repoInfo_,()=>new sn(e.stats_,e.server_)),e.infoData_=new Qa,e.infoSyncTree_=new ri({startListening:(t,a,n,r)=>{let i=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(i=li(e.infoSyncTree_,t._path,o),setTimeout(()=>{r("ok")},0)),i},stopListening:()=>{}}),Bo(e,"connected",!1),e.serverSyncTree_=new ri({startListening:(t,a,n,r)=>(e.server_.listen(t,n,a,(a,n)=>{const i=r(a,n);_o(e.eventQueue_,t._path,i)}),[]),stopListening:(t,a)=>{e.server_.unlisten(t,a)}})}function Co(e){const t=e.infoData_.getNode(new ct(".info/serverTimeOffset")),a=t.val()||0;return(new Date).getTime()+a}function Ho(e){return Ei({timestamp:Co(e)})}function Lo(e,t,a,n,r){e.dataUpdateCount++;const o=new ct(t);a=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,a):a;let s=[];if(r)if(n){const t=Object(i["F"])(a,e=>ya(e));s=vi(e.serverSyncTree_,o,t,r)}else{const t=ya(a);s=pi(e.serverSyncTree_,o,t,r)}else if(n){const t=Object(i["F"])(a,e=>ya(e));s=ci(e.serverSyncTree_,o,t)}else{const t=ya(a);s=li(e.serverSyncTree_,o,t)}let l=o;s.length>0&&(l=Xo(e,o)),_o(e.eventQueue_,l,s)}function ko(e,t){Bo(e,"connected",t),!1===t&&Po(e)}function So(e,t){x(t,(t,a)=>{Bo(e,t,a)})}function Bo(e,t,a){const n=new ct("/.info/"+t),r=ya(a);e.infoData_.updateSnapshot(n,r);const i=li(e.infoSyncTree_,n,r);_o(e.eventQueue_,n,i)}function Fo(e){return e.nextWriteId_++}function Eo(e,t){const a=zi(e.serverSyncTree_,t);return null!=a?Promise.resolve(a):e.server_.get(t).then(a=>{const n=ya(a).withIndex(t._queryParams.getIndex()),r=li(e.serverSyncTree_,t._path,n);return yo(e.eventQueue_,t._path,r),Promise.resolve(n)},a=>(Wo(e,"get for query "+Object(i["L"])(t)+" failed: "+a),Promise.reject(new Error(a))))}function Oo(e,t,a,n,r){Wo(e,"set",{path:t.toString(),value:a,priority:n});const i=Ho(e),o=ya(a,n),s=mi(e.serverSyncTree_,t),l=Ri(o,s,i),c=Fo(e),h=ii(e.serverSyncTree_,t,l,c,!0);go(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),(a,n)=>{const i="ok"===a;i||C("set at "+t+" failed: "+a);const o=si(e.serverSyncTree_,c,!i);_o(e.eventQueue_,t,o),Go(e,r,a,n)});const u=rs(e,t);Xo(e,u),_o(e.eventQueue_,u,[])}function To(e,t,a,n){Wo(e,"update",{path:t.toString(),value:a});let r=!0;const i=Ho(e),o={};if(x(a,(a,n)=>{r=!1,o[a]=xi(gt(t,a),ya(n),e.serverSyncTree_,i)}),r)b("update() called with empty data.  Don't do anything."),Go(e,n,"ok",void 0);else{const r=Fo(e),i=oi(e.serverSyncTree_,t,o,r);go(e.eventQueue_,i),e.server_.merge(t.toString(),a,(a,i)=>{const o="ok"===a;o||C("update at "+t+" failed: "+a);const s=si(e.serverSyncTree_,r,!o),l=s.length>0?Xo(e,t):t;_o(e.eventQueue_,l,s),Go(e,n,a,i)}),x(a,a=>{const n=rs(e,gt(t,a));Xo(e,n)}),_o(e.eventQueue_,t,[])}}function Po(e){Wo(e,"onDisconnectEvents");const t=Ho(e),a=Ya();en(e.onDisconnect_,ht(),(n,r)=>{const i=xi(n,r,e.serverSyncTree_,t);Xa(a,n,i)});let n=[];en(a,ht(),(t,a)=>{n=n.concat(li(e.serverSyncTree_,t,a));const r=rs(e,t);Xo(e,r)}),e.onDisconnect_=Ya(),_o(e.eventQueue_,ht(),n)}function xo(e,t,a){e.server_.onDisconnectCancel(t.toString(),(n,r)=>{"ok"===n&&Za(e.onDisconnect_,t),Go(e,a,n,r)})}function Ro(e,t,a,n){const r=ya(a);e.server_.onDisconnectPut(t.toString(),r.val(!0),(a,i)=>{"ok"===a&&Xa(e.onDisconnect_,t,r),Go(e,n,a,i)})}function No(e,t,a,n,r){const i=ya(a,n);e.server_.onDisconnectPut(t.toString(),i.val(!0),(a,n)=>{"ok"===a&&Xa(e.onDisconnect_,t,i),Go(e,r,a,n)})}function jo(e,t,a,n){if(Object(i["w"])(a))return b("onDisconnect().update() called with empty data.  Don't do anything."),void Go(e,n,"ok",void 0);e.server_.onDisconnectMerge(t.toString(),a,(r,i)=>{"ok"===r&&x(a,(a,n)=>{const r=ya(n);Xa(e.onDisconnect_,gt(t,a),r)}),Go(e,n,r,i)})}function Do(e,t,a){let n;n=".info"===ut(t._path)?fi(e.infoSyncTree_,t,a):fi(e.serverSyncTree_,t,a),yo(e.eventQueue_,t._path,n)}function Uo(e,t,a){let n;n=".info"===ut(t._path)?di(e.infoSyncTree_,t,a):di(e.serverSyncTree_,t,a),yo(e.eventQueue_,t._path,n)}function qo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(bo)}function $o(e){e.persistentConnection_&&e.persistentConnection_.resume(bo)}function Wo(e,...t){let a="";e.persistentConnection_&&(a=e.persistentConnection_.id+":"),b(a,...t)}function Go(e,t,a,n){t&&G(()=>{if("ok"===a)t(null);else{const e=(a||"error").toUpperCase();let r=e;n&&(r+=": "+n);const i=new Error(r);i.code=e,t(i)}})}function Ko(e,t,a,n,r,o){Wo(e,"transaction on "+t);const s={path:t,update:a,onComplete:n,status:null,order:z(),applyLocally:o,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Jo(e,t,void 0);s.currentInputSnapshot=l;const c=s.update(l.val());if(void 0===c)s.unwatcher(),s.currentOutputSnapshotRaw=null,s.currentOutputSnapshotResolved=null,s.onComplete&&s.onComplete(null,!1,s.currentInputSnapshot);else{so("transaction failed: Data returned ",c,s.path),s.status=0;const a=Di(e.transactionQueueTree_,t),n=Ui(a)||[];let r;if(n.push(s),qi(a,n),"object"===typeof c&&null!==c&&Object(i["j"])(c,".priority"))r=Object(i["I"])(c,".priority"),Object(i["e"])(io(r),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.");else{const a=mi(e.serverSyncTree_,t)||fa.EMPTY_NODE;r=a.getPriority().val()}const o=Ho(e),h=ya(c,r),u=Ri(h,l,o);s.currentOutputSnapshotRaw=h,s.currentOutputSnapshotResolved=u,s.currentWriteId=Fo(e);const d=ii(e.serverSyncTree_,t,u,s.currentWriteId,s.applyLocally);_o(e.eventQueue_,t,d),Qo(e,e.transactionQueueTree_)}}function Jo(e,t,a){return mi(e.serverSyncTree_,t,a)||fa.EMPTY_NODE}function Qo(e,t=e.transactionQueueTree_){if(t||ns(e,t),Ui(t)){const a=ts(e,t);Object(i["e"])(a.length>0,"Sending zero length transaction queue");const n=a.every(e=>0===e.status);n&&Yo(e,Qi(t),a)}else $i(t)&&Gi(t,t=>{Qo(e,t)})}function Yo(e,t,a){const n=a.map(e=>e.currentWriteId),r=Jo(e,t,n);let o=r;const s=r.hash();for(let h=0;h<a.length;h++){const e=a[h];Object(i["e"])(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const n=_t(t,e.path);o=o.updateChild(n,e.currentOutputSnapshotRaw)}const l=o.val(!0),c=t;e.server_.put(c.toString(),l,n=>{Wo(e,"transaction put response",{path:c.toString(),status:n});let r=[];if("ok"===n){const n=[];for(let t=0;t<a.length;t++)a[t].status=2,r=r.concat(si(e.serverSyncTree_,a[t].currentWriteId)),a[t].onComplete&&n.push(()=>a[t].onComplete(null,!0,a[t].currentOutputSnapshotResolved)),a[t].unwatcher();ns(e,Di(e.transactionQueueTree_,t)),Qo(e,e.transactionQueueTree_),_o(e.eventQueue_,t,r);for(let e=0;e<n.length;e++)G(n[e])}else{if("datastale"===n)for(let e=0;e<a.length;e++)3===a[e].status?a[e].status=4:a[e].status=0;else{C("transaction at "+c.toString()+" failed: "+n);for(let e=0;e<a.length;e++)a[e].status=4,a[e].abortReason=n}Xo(e,t)}},s)}function Xo(e,t){const a=es(e,t),n=Qi(a),r=ts(e,a);return Zo(e,r,n),n}function Zo(e,t,a){if(0===t.length)return;const n=[];let r=[];const o=t.filter(e=>0===e.status),s=o.map(e=>e.currentWriteId);for(let l=0;l<t.length;l++){const o=t[l],c=_t(a,o.path);let h,u=!1;if(Object(i["e"])(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===o.status)u=!0,h=o.abortReason,r=r.concat(si(e.serverSyncTree_,o.currentWriteId,!0));else if(0===o.status)if(o.retryCount>=Io)u=!0,h="maxretry",r=r.concat(si(e.serverSyncTree_,o.currentWriteId,!0));else{const a=Jo(e,o.path,s);o.currentInputSnapshot=a;const n=t[l].update(a.val());if(void 0!==n){so("transaction failed: Data returned ",n,o.path);let t=ya(n);const l="object"===typeof n&&null!=n&&Object(i["j"])(n,".priority");l||(t=t.updatePriority(a.getPriority()));const c=o.currentWriteId,h=Ho(e),u=Ri(t,a,h);o.currentOutputSnapshotRaw=t,o.currentOutputSnapshotResolved=u,o.currentWriteId=Fo(e),s.splice(s.indexOf(c),1),r=r.concat(ii(e.serverSyncTree_,o.path,u,o.currentWriteId,o.applyLocally)),r=r.concat(si(e.serverSyncTree_,c,!0))}else u=!0,h="nodata",r=r.concat(si(e.serverSyncTree_,o.currentWriteId,!0))}_o(e.eventQueue_,a,r),r=[],u&&(t[l].status=2,function(e){setTimeout(e,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&("nodata"===h?n.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):n.push(()=>t[l].onComplete(new Error(h),!1,null))))}ns(e,e.transactionQueueTree_);for(let i=0;i<n.length;i++)G(n[i]);Qo(e,e.transactionQueueTree_)}function es(e,t){let a,n=e.transactionQueueTree_;a=ut(t);while(null!==a&&void 0===Ui(n))n=Di(n,a),t=pt(t),a=ut(t);return n}function ts(e,t){const a=[];return as(e,t,a),a.sort((e,t)=>e.order-t.order),a}function as(e,t,a){const n=Ui(t);if(n)for(let r=0;r<n.length;r++)a.push(n[r]);Gi(t,t=>{as(e,t,a)})}function ns(e,t){const a=Ui(t);if(a){let e=0;for(let t=0;t<a.length;t++)2!==a[t].status&&(a[e]=a[t],e++);a.length=e,qi(t,a.length>0?a:void 0)}Gi(t,t=>{ns(e,t)})}function rs(e,t){const a=Qi(es(e,t)),n=Di(e.transactionQueueTree_,t);return Ji(n,t=>{is(e,t)}),is(e,n),Ki(n,t=>{is(e,t)}),a}function is(e,t){const a=Ui(t);if(a){const n=[];let r=[],o=-1;for(let t=0;t<a.length;t++)3===a[t].status||(1===a[t].status?(Object(i["e"])(o===t-1,"All SENT items should be at beginning of queue."),o=t,a[t].status=3,a[t].abortReason="set"):(Object(i["e"])(0===a[t].status,"Unexpected transaction status in abort"),a[t].unwatcher(),r=r.concat(si(e.serverSyncTree_,a[t].currentWriteId,!0)),a[t].onComplete&&n.push(a[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?qi(t,void 0):a.length=o+1,_o(e.eventQueue_,Qi(t),r);for(let e=0;e<n.length;e++)G(n[e])}}
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
 */function os(e){let t="";const a=e.split("/");for(let r=0;r<a.length;r++)if(a[r].length>0){let e=a[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(n){}t+="/"+e}return t}function ss(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const a of e.split("&")){if(0===a.length)continue;const n=a.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):C(`Invalid query segment '${a}' in query '${e}'`)}return t}const ls=function(e,t){const a=cs(e),n=a.namespace;"firebase.com"===a.domain&&w(a.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===a.domain||w("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),a.secure||H();const r="ws"===a.scheme||"wss"===a.scheme;return{repoInfo:new he(a.host,a.secure,n,t,r,"",n!==a.subdomain),path:new ct(a.pathString)}},cs=function(e){let t="",a="",n="",r="",i="",o=!0,s="https",l=443;if("string"===typeof e){let c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(r=os(e.substring(h,u)));const d=ss(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===s||"wss"===s,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())a="localhost";else if(p.split(".").length<=2)a=p;else{const e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),a=t.substring(e+1),i=n}"ns"in d&&(i=d["ns"])}return{host:t,port:l,domain:a,subdomain:n,secure:o,scheme:s,pathString:r,namespace:i}};
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
class hs{constructor(e,t,a,n){this.eventType=e,this.eventRegistration=t,this.snapshot=a,this.prevName=n}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Object(i["L"])(this.snapshot.exportVal())}}class us{constructor(e,t,a){this.eventRegistration=e,this.error=t,this.path=a}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class ds{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Object(i["e"])(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class ps{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new i["a"];return xo(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){fo("OnDisconnect.remove",this._path);const e=new i["a"];return Ro(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){fo("OnDisconnect.set",this._path),oo("OnDisconnect.set",e,this._path,!1);const t=new i["a"];return Ro(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){fo("OnDisconnect.setWithPriority",this._path),oo("OnDisconnect.setWithPriority",e,this._path,!1),ho("OnDisconnect.setWithPriority",t,!1);const a=new i["a"];return No(this._repo,this._path,e,t,a.wrapCallback(()=>{})),a.promise}update(e){fo("OnDisconnect.update",this._path),co("OnDisconnect.update",e,this._path,!1);const t=new i["a"];return jo(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}
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
 */class vs{constructor(e,t,a,n){this._repo=e,this._path=t,this._queryParams=a,this._orderByCalled=n}get key(){return yt(this._path)?null:vt(this._path)}get ref(){return new gs(this._repo,this._path)}get _queryIdentifier(){const e=Ka(this._queryParams),t=T(e);return"{}"===t?"default":t}get _queryObject(){return Ka(this._queryParams)}isEqual(e){if(e=Object(i["r"])(e),!(e instanceof vs))return!1;const t=this._repo===e._repo,a=At(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&a&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+ft(this._path)}}function fs(e,t){if(!0===e._orderByCalled)throw new Error(t+": You can't combine multiple orderBy calls.")}function ms(e){let t=null,a=null;if(e.hasStart()&&(t=e.getIndexStartValue()),e.hasEnd()&&(a=e.getIndexEndValue()),e.getIndex()===Ut){const n="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(e.hasStart()){const a=e.getIndexStartName();if(a!==S)throw new Error(n);if("string"!==typeof t)throw new Error(r)}if(e.hasEnd()){const t=e.getIndexEndName();if(t!==B)throw new Error(n);if("string"!==typeof a)throw new Error(r)}}else if(e.getIndex()===sa){if(null!=t&&!io(t)||null!=a&&!io(a))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Object(i["e"])(e.getIndex()instanceof _a||e.getIndex()===Aa,"unknown index type."),null!=t&&"object"===typeof t||null!=a&&"object"===typeof a)throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function zs(e){if(e.hasStart()&&e.hasEnd()&&e.hasLimit()&&!e.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class gs extends vs{constructor(e,t){super(e,t,new xa,!1)}get parent(){const e=zt(this._path);return null===e?null:new gs(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class ys{constructor(e,t,a){this._node=e,this.ref=t,this._index=a}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ct(e),a=As(this.ref,e);return new ys(this._node.getChild(t),a,sa)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,(t,a)=>e(new ys(a,As(this.ref,t),sa)))}hasChild(e){const t=new ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _s(e,t){return e=Object(i["r"])(e),e._checkNotDeleted("ref"),void 0!==t?As(e._root,t):e._root}function Ms(e,t){e=Object(i["r"])(e),e._checkNotDeleted("refFromURL");const a=ls(t,e._repo.repoInfo_.nodeAdmin);mo("refFromURL",a);const n=a.repoInfo;return e._repo.repoInfo_.isCustomHost()||n.host===e._repo.repoInfo_.host||w("refFromURL: Host name does not match the current database: (found "+n.host+" but expected "+e._repo.repoInfo_.host+")"),_s(e,a.path.toString())}function As(e,t){return e=Object(i["r"])(e),null===ut(e._path)?vo("child","path",t,!1):po("child","path",t,!1),new gs(e._repo,gt(e._path,t))}function bs(e,t){e=Object(i["r"])(e),fo("push",e._path),oo("push",t,e._path,!0);const a=Co(e._repo),n=Ca(a),r=As(e,n),o=As(e,n);let s;return s=null!=t?Vs(o,t).then(()=>o):Promise.resolve(o),r.then=s.then.bind(s),r.catch=s.then.bind(s,void 0),r}function Is(e){return fo("remove",e._path),Vs(e,null)}function Vs(e,t){e=Object(i["r"])(e),fo("set",e._path),oo("set",t,e._path,!1);const a=new i["a"];return Oo(e._repo,e._path,t,null,a.wrapCallback(()=>{})),a.promise}function ws(e,t){e=Object(i["r"])(e),fo("setPriority",e._path),ho("setPriority",t,!1);const a=new i["a"];return Oo(e._repo,gt(e._path,".priority"),t,null,a.wrapCallback(()=>{})),a.promise}function Cs(e,t,a){if(fo("setWithPriority",e._path),oo("setWithPriority",t,e._path,!1),ho("setWithPriority",a,!1),".length"===e.key||".keys"===e.key)throw"setWithPriority failed: "+e.key+" is a read-only object.";const n=new i["a"];return Oo(e._repo,e._path,t,a,n.wrapCallback(()=>{})),n.promise}function Hs(e,t){co("update",t,e._path,!1);const a=new i["a"];return To(e._repo,e._path,t,a.wrapCallback(()=>{})),a.promise}function Ls(e){return e=Object(i["r"])(e),Eo(e._repo,e).then(t=>new ys(t,new gs(e._repo,e._path),e._queryParams.getIndex()))}class ks{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const a=t._queryParams.getIndex();return new hs("value",this,new ys(e.snapshotNode,new gs(t._repo,t._path),a))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new us(this,e,t):null}matches(e){return e instanceof ks&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Ss{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new us(this,e,t):null}createEvent(e,t){Object(i["e"])(null!=e.childName,"Child events should have a childName.");const a=As(new gs(t._repo,t._path),e.childName),n=t._queryParams.getIndex();return new hs(e.type,this,new ys(e.snapshotNode,a,n),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ss&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Bs(e,t,a,n,r){let i;if("object"===typeof n&&(i=void 0,r=n),"function"===typeof n&&(i=n),r&&r.onlyOnce){const t=a,n=(a,n)=>{Uo(e._repo,e,s),t(a,n)};n.userCallback=a.userCallback,n.context=a.context,a=n}const o=new ds(a,i||void 0),s="value"===t?new ks(o):new Ss(t,o);return Do(e._repo,e,s),()=>Uo(e._repo,e,s)}function Fs(e,t,a,n){return Bs(e,"value",t,a,n)}function Es(e,t,a,n){return Bs(e,"child_added",t,a,n)}function Os(e,t,a,n){return Bs(e,"child_changed",t,a,n)}function Ts(e,t,a,n){return Bs(e,"child_moved",t,a,n)}function Ps(e,t,a,n){return Bs(e,"child_removed",t,a,n)}function xs(e,t,a){let n=null;const r=a?new ds(a):null;"value"===t?n=new ks(r):t&&(n=new Ss(t,r)),Uo(e._repo,e,n)}class Rs{}class Ns extends Rs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endAt",this._value,e._path,!0);const t=qa(e._queryParams,this._value,this._key);if(zs(t),ms(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new vs(e._repo,e._path,t,e._orderByCalled)}}function js(e,t){return uo("endAt","key",t,!0),new Ns(e,t)}class Ds extends Rs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("endBefore",this._value,e._path,!1);const t=$a(e._queryParams,this._value,this._key);if(zs(t),ms(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new vs(e._repo,e._path,t,e._orderByCalled)}}function Us(e,t){return uo("endBefore","key",t,!0),new Ds(e,t)}class qs extends Rs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAt",this._value,e._path,!0);const t=Da(e._queryParams,this._value,this._key);if(zs(t),ms(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new vs(e._repo,e._path,t,e._orderByCalled)}}function $s(e=null,t){return uo("startAt","key",t,!0),new qs(e,t)}class Ws extends Rs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){oo("startAfter",this._value,e._path,!1);const t=Ua(e._queryParams,this._value,this._key);if(zs(t),ms(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new vs(e._repo,e._path,t,e._orderByCalled)}}function Gs(e,t){return uo("startAfter","key",t,!0),new Ws(e,t)}class Ks extends Rs{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new vs(e._repo,e._path,Na(e._queryParams,this._limit),e._orderByCalled)}}function Js(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new Ks(e)}class Qs extends Rs{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new vs(e._repo,e._path,ja(e._queryParams,this._limit),e._orderByCalled)}}function Ys(e){if("number"!==typeof e||Math.floor(e)!==e||e<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Qs(e)}class Xs extends Rs{constructor(e){super(),this._path=e}_apply(e){fs(e,"orderByChild");const t=new ct(this._path);if(yt(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const a=new _a(t),n=Wa(e._queryParams,a);return ms(n),new vs(e._repo,e._path,n,!0)}}function Zs(e){if("$key"===e)throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if("$priority"===e)throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if("$value"===e)throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return po("orderByChild","path",e,!1),new Xs(e)}class el extends Rs{_apply(e){fs(e,"orderByKey");const t=Wa(e._queryParams,Ut);return ms(t),new vs(e._repo,e._path,t,!0)}}function tl(){return new el}class al extends Rs{_apply(e){fs(e,"orderByPriority");const t=Wa(e._queryParams,sa);return ms(t),new vs(e._repo,e._path,t,!0)}}function nl(){return new al}class rl extends Rs{_apply(e){fs(e,"orderByValue");const t=Wa(e._queryParams,Aa);return ms(t),new vs(e._repo,e._path,t,!0)}}function il(){return new rl}class ol extends Rs{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(oo("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Ns(this._value,this._key)._apply(new qs(this._value,this._key)._apply(e))}}function sl(e,t){return uo("equalTo","key",t,!0),new ol(e,t)}function ll(e,...t){let a=Object(i["r"])(e);for(const n of t)a=n._apply(a);return a}Dr(gs),ti(gs);
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
const cl="FIREBASE_DATABASE_EMULATOR_HOST",hl={};let ul=!1;function dl(e,t,a,n){e.repoInfo_=new he(`${t}:${a}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams),n&&(e.authTokenProvider_=n)}function pl(t,a,n,r,i){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||w("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),b("Using default host for project ",t.options.projectId),o=t.options.projectId+"-default-rtdb.firebaseio.com");let s,l=ls(o,i),c=l.repoInfo,h=void 0;"undefined"!==typeof e&&(h=Object({NODE_ENV:"production",BASE_URL:"/three-panel-comic-demo/"})[cl]),h?(s=!0,o=`http://${h}?ns=${c.namespace}`,l=ls(o,i),c=l.repoInfo):s=!l.repoInfo.secure;const u=i&&s?new X(X.OWNER):new Y(t.name,t.options,a);mo("Invalid Firebase Database URL",l),yt(l.path)||w("Database URL must point to the root of a Firebase Database (not including a child path).");const d=fl(c,t,u,new Q(t.name,n));return new ml(d,t)}function vl(e,t){const a=hl[t];a&&a[e.key]===e||w(`Database ${t}(${e.repoInfo_}) has already been deleted.`),qo(e),delete a[e.key]}function fl(e,t,a,n){let r=hl[t.name];r||(r={},hl[t.name]=r);let i=r[e.toURLString()];return i&&w("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new Vo(e,ul,a,n),r[e.toURLString()]=i,i}class ml{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(wo(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new gs(this._repo,ht())),this._rootInternal}_delete(){return null!==this._rootInternal&&(vl(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&w("Cannot call "+e+" on a deleted database.")}}function zl(e,t,a,n={}){e=Object(i["r"])(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&w("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let o=void 0;if(r.repoInfo_.nodeAdmin)n.mockUserToken&&w('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new X(X.OWNER);else if(n.mockUserToken){const t="string"===typeof n.mockUserToken?n.mockUserToken:Object(i["k"])(n.mockUserToken,e.app.options.projectId);o=new X(t)}dl(r,t,a,o)}function gl(e){e=Object(i["r"])(e),e._checkNotDeleted("goOffline"),qo(e._repo)}function yl(e){e=Object(i["r"])(e),e._checkNotDeleted("goOnline"),$o(e._repo)}function _l(e,t){A(e,t)}
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
 */function Ml(e){h(n["SDK_VERSION"]),Object(n["_registerComponent"])(new r["a"]("database",(e,{instanceIdentifier:t})=>{const a=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pl(a,n,r,t)},"PUBLIC").setMultipleInstances(!0)),Object(n["registerVersion"])(s,l,e),Object(n["registerVersion"])(s,l,"esm2017")}
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
 */const Al={".sv":"timestamp"};function bl(){return Al}function Il(e){return{".sv":{increment:e}}}
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
 */class Vl{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function wl(e,t,a){var n;if(e=Object(i["r"])(e),fo("Reference.transaction",e._path),".length"===e.key||".keys"===e.key)throw"Reference.transaction failed: "+e.key+" is a read-only object.";const r=null===(n=null===a||void 0===a?void 0:a.applyLocally)||void 0===n||n,o=new i["a"],s=(t,a,n)=>{let r=null;t?o.reject(t):(r=new ys(n,new gs(e._repo,e._path),sa),o.resolve(new Vl(a,r)))},l=Fs(e,()=>{});return Ko(e._repo,e._path,t,s,l,r),o.promise}
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
 */xt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},xt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};Ml()}).call(this,a("4362"))},5692:function(e,t,a){var n=a("c430"),r=a("c6cd");(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.19.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,a){var n=a("d066"),r=a("e330"),i=a("241c"),o=a("7418"),s=a("825a"),l=r([].concat);e.exports=n("Reflect","ownKeys")||function(e){var t=i.f(s(e)),a=o.f;return a?l(t,a(e)):t}},"577e":function(e,t,a){var n=a("da84"),r=a("f5df"),i=n.String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},"589b":function(e,t,a){"use strict";a.r(t),a.d(t,"SDK_VERSION",(function(){return J})),a.d(t,"_DEFAULT_ENTRY_NAME",(function(){return T})),a.d(t,"_addComponent",(function(){return N})),a.d(t,"_addOrOverwriteComponent",(function(){return j})),a.d(t,"_apps",(function(){return x})),a.d(t,"_clearComponents",(function(){return $})),a.d(t,"_components",(function(){return R})),a.d(t,"_getProvider",(function(){return U})),a.d(t,"_registerComponent",(function(){return D})),a.d(t,"_removeServiceInstance",(function(){return q})),a.d(t,"deleteApp",(function(){return Z})),a.d(t,"getApp",(function(){return Y})),a.d(t,"getApps",(function(){return X})),a.d(t,"initializeApp",(function(){return Q})),a.d(t,"onLog",(function(){return te})),a.d(t,"registerVersion",(function(){return ee})),a.d(t,"setLogLevel",(function(){return ae}));var n=a("22e5"),r=a("e691"),i=a("1fd5");a.d(t,"FirebaseError",(function(){return i["c"]}));
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
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(s(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function s(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",c="0.7.7",h=new r["b"]("@firebase/app"),u="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",v="@firebase/app-check-compat",f="@firebase/app-check",m="@firebase/auth",z="@firebase/auth-compat",g="@firebase/database",y="@firebase/database-compat",_="@firebase/functions",M="@firebase/functions-compat",A="@firebase/installations",b="@firebase/installations-compat",I="@firebase/messaging",V="@firebase/messaging-compat",w="@firebase/performance",C="@firebase/performance-compat",H="@firebase/remote-config",L="@firebase/remote-config-compat",k="@firebase/storage",S="@firebase/storage-compat",B="@firebase/firestore",F="@firebase/firestore-compat",E="firebase",O="9.4.0",T="[DEFAULT]",P={[l]:"fire-core",[u]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[f]:"fire-app-check",[v]:"fire-app-check-compat",[m]:"fire-auth",[z]:"fire-auth-compat",[g]:"fire-rtdb",[y]:"fire-rtdb-compat",[_]:"fire-fn",[M]:"fire-fn-compat",[A]:"fire-iid",[b]:"fire-iid-compat",[I]:"fire-fcm",[V]:"fire-fcm-compat",[w]:"fire-perf",[C]:"fire-perf-compat",[H]:"fire-rc",[L]:"fire-rc-compat",[k]:"fire-gcs",[S]:"fire-gcs-compat",[B]:"fire-fst",[F]:"fire-fst-compat","fire-js":"fire-js",[E]:"fire-js-all"},x=new Map,R=new Map;function N(e,t){try{e.container.addComponent(t)}catch(a){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,a)}}function j(e,t){e.container.addOrOverwriteComponent(t)}function D(e){const t=e.name;if(R.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;R.set(t,e);for(const a of x.values())N(a,e);return!0}function U(e,t){return e.container.getProvider(t)}function q(e,t,a=T){U(e,t).clearInstance(a)}function $(){R.clear()}
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
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new i["b"]("app","Firebase",W);
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
class K{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new n["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
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
 */const J=O;function Q(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const a=Object.assign({name:T,automaticDataCollectionEnabled:!1},t),r=a.name;if("string"!==typeof r||!r)throw G.create("bad-app-name",{appName:String(r)});const o=x.get(r);if(o){if(Object(i["n"])(e,o.options)&&Object(i["n"])(a,o.config))return o;throw G.create("duplicate-app",{appName:r})}const s=new n["b"](r);for(const n of R.values())s.addComponent(n);const l=new K(e,a,s);return x.set(r,l),l}function Y(e=T){const t=x.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function X(){return Array.from(x.values())}async function Z(e){const t=e.name;x.has(t)&&(x.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,a){var r;let i=null!==(r=P[e])&&void 0!==r?r:e;a&&(i+="-"+a);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}D(new n["a"](i+"-version",()=>({library:i,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");Object(r["d"])(e,t)}function ae(e){Object(r["c"])(e)}
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
 */function ne(e){D(new n["a"]("platform-logger",e=>new o(e),"PRIVATE")),ee(l,c,e),ee(l,c,"esm2017"),ee("fire-js","")}ne("")},5926:function(e,t){var a=Math.ceil,n=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?n:a)(t)}},5994:function(e,t,a){"use strict";(function(e){var t=a("7ded"),n=a("1f5a"),r=a("22e5"),i=a("1fd5"),o="@firebase/auth-compat",s="0.2.2";
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
const l=1e3;function c(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function h(){return"http:"===c()||"https:"===c()}function u(e=Object(i["s"])()){return!("file:"!==c()&&"ionic:"!==c()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(i["C"])()||Object(i["A"])()}function p(){return Object(i["x"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function v(e=Object(i["s"])()){return/Edge\/\d+/.test(e)}function f(e=Object(i["s"])()){return p()||v(e)}function m(){try{const e=self.localStorage,t=n["s"]();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!f()||Object(i["y"])()}catch(e){return z()&&Object(i["y"])()}return!1}function z(){return"undefined"!==typeof e&&"WorkerGlobalScope"in e&&"importScripts"in e}function g(){return(h()||Object(i["v"])()||u())&&!d()&&m()&&!z()}function y(){return u()&&"undefined"!==typeof document}async function _(){return!!y()&&new Promise(e=>{const t=setTimeout(()=>{e(!1)},l);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}
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
 */const M={LOCAL:"local",NONE:"none",SESSION:"session"},A=n["p"],b="persistence";function I(e,t){A(Object.values(M).includes(t),e,"invalid-persistence-type"),Object(i["C"])()?A(t!==M.SESSION,e,"unsupported-persistence-type"):Object(i["A"])()?A(t===M.NONE,e,"unsupported-persistence-type"):z()?A(t===M.NONE||t===M.LOCAL&&Object(i["y"])(),e,"unsupported-persistence-type"):A(t===M.NONE||m(),e,"unsupported-persistence-type")}async function V(e){await e._initializationPromise;const t=C(),a=n["v"](b,e.config.apiKey,e.name);(null===t||void 0===t?void 0:t.sessionStorage)&&t.sessionStorage.setItem(a,e._getPersistence())}function w(e,t){const a=C();if(!(null===a||void 0===a?void 0:a.sessionStorage))return[];const r=n["v"](b,e,t),i=a.sessionStorage.getItem(r);switch(i){case M.NONE:return[n["L"]];case M.LOCAL:return[n["M"],n["A"]];case M.SESSION:return[n["A"]];default:return[]}}function C(){return"undefined"!==typeof window?window:null}
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
 */const H=n["p"];class L{constructor(){this.browserResolver=n["t"](n["z"]),this.cordovaResolver=n["t"](n["E"]),this.underlyingResolver=null,this._redirectPersistence=n["A"],this._completeRedirectFn=n["u"]}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,a,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,a,n)}async _openRedirect(e,t,a,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,a,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return y()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return H(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await _();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function k(e){return e.unwrap()}function S(e){return e.wrapped()}
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
 */function B(e){return E(e)}function F(e,t){var a;const r=null===(a=t.customData)||void 0===a?void 0:a._tokenResponse;if("auth/multi-factor-auth-required"===t.code){const a=t;a.resolver=new P(e,n["J"](e,t))}else if(r){const e=E(t),a=t;e&&(a.credential=e,a.tenantId=r.tenantId||void 0,a.email=r.email||void 0,a.phoneNumber=r.phoneNumber||void 0)}}function E(e){const{_tokenResponse:t}=e instanceof i["c"]?e.customData:e;if(!t)return null;if(!(e instanceof i["c"])&&"temporaryProof"in t&&"phoneNumber"in t)return n["i"].credentialFromResult(e);const a=t.providerId;if(!a||a===n["k"].PASSWORD)return null;let r;switch(a){case n["k"].GOOGLE:r=n["f"];break;case n["k"].FACEBOOK:r=n["d"];break;case n["k"].GITHUB:r=n["e"];break;case n["k"].TWITTER:r=n["o"];break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:s,nonce:l}=t;return i||o||e||s?s?a.startsWith("saml.")?n["m"]._create(a,s):n["g"]._fromParams({providerId:a,signInMethod:a,pendingToken:s,idToken:e,accessToken:i}):new n["h"](a).credential({idToken:e,accessToken:i,rawNonce:l}):null}return e instanceof i["c"]?r.credentialFromError(e):r.credentialFromResult(e)}function O(e,t){return t.catch(t=>{throw t instanceof i["c"]&&F(e,t),t}).then(e=>{const t=e.operationType,a=e.user;return{operationType:t,credential:B(e),additionalUserInfo:n["I"](e),user:x.getOrCreate(a)}})}async function T(e,t){const a=await t;return{verificationId:a.verificationId,confirm:t=>O(e,a.confirm(t))}}class P{constructor(e,t){this.resolver=t,this.auth=S(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return O(k(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class x{constructor(e){this._delegate=e,this.multiFactor=n["S"](e)}static getOrCreate(e){return x.USER_MAP.has(e)||x.USER_MAP.set(e,new x(e)),x.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return O(this.auth,n["O"](this._delegate,e))}async linkWithPhoneNumber(e,t){return T(this.auth,n["P"](this._delegate,e,t))}async linkWithPopup(e){return O(this.auth,n["Q"](this._delegate,e,L))}async linkWithRedirect(e){return await V(n["q"](this.auth)),n["R"](this._delegate,e,L)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return O(this.auth,n["T"](this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return T(this.auth,n["U"](this._delegate,e,t))}reauthenticateWithPopup(e){return O(this.auth,n["V"](this._delegate,e,L))}async reauthenticateWithRedirect(e){return await V(n["q"](this.auth)),n["W"](this._delegate,e,L)}sendEmailVerification(e){return n["X"](this._delegate,e)}async unlink(e){return await n["ib"](this._delegate,e),this}updateEmail(e){return n["jb"](this._delegate,e)}updatePassword(e){return n["kb"](this._delegate,e)}updatePhoneNumber(e){return n["lb"](this._delegate,e)}updateProfile(e){return n["mb"](this._delegate,e)}verifyBeforeUpdateEmail(e,t){return n["nb"](this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}x.USER_MAP=new WeakMap;
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
const R=n["p"];class N{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:a}=e.options;R(a,"invalid-api-key",{appName:e.name});let r=[n["L"]];if("undefined"!==typeof window){r=w(a,e.name);for(const e of[n["M"],n["y"],n["A"]])r.includes(e)||r.push(e)}R(a,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?L:void 0;this._delegate=t.initialize({options:{persistence:r,popupRedirectResolver:i}}),this._delegate._updateErrorMap(n["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?x.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){n["D"](this._delegate,e,t)}applyActionCode(e){return n["x"](this._delegate,e)}checkActionCode(e){return n["B"](this._delegate,e)}confirmPasswordReset(e,t){return n["C"](this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return O(this._delegate,n["F"](this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return n["H"](this._delegate,e)}isSignInWithEmailLink(e){return n["N"](this._delegate,e)}async getRedirectResult(){R(g(),this._delegate,"operation-not-supported-in-this-environment");const e=await n["K"](this._delegate,L);return e?O(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){n["w"](this._delegate,e)}onAuthStateChanged(e,t,a){const{next:n,error:r,complete:i}=j(e,t,a);return this._delegate.onAuthStateChanged(n,r,i)}onIdTokenChanged(e,t,a){const{next:n,error:r,complete:i}=j(e,t,a);return this._delegate.onIdTokenChanged(n,r,i)}sendSignInLinkToEmail(e,t){return n["Z"](this._delegate,e,t)}sendPasswordResetEmail(e,t){return n["Y"](this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(I(this._delegate,e),e){case M.SESSION:t=n["A"];break;case M.LOCAL:const e=await n["t"](n["M"])._isAvailable();t=e?n["M"]:n["y"];break;case M.NONE:t=n["L"];break;default:return n["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return O(this._delegate,n["ab"](this._delegate))}signInWithCredential(e){return O(this._delegate,n["bb"](this._delegate,e))}signInWithCustomToken(e){return O(this._delegate,n["cb"](this._delegate,e))}signInWithEmailAndPassword(e,t){return O(this._delegate,n["db"](this._delegate,e,t))}signInWithEmailLink(e,t){return O(this._delegate,n["eb"](this._delegate,e,t))}signInWithPhoneNumber(e,t){return T(this._delegate,n["fb"](this._delegate,e,t))}async signInWithPopup(e){return R(g(),this._delegate,"operation-not-supported-in-this-environment"),O(this._delegate,n["gb"](this._delegate,e,L))}async signInWithRedirect(e){return R(g(),this._delegate,"operation-not-supported-in-this-environment"),await V(this._delegate),n["hb"](this._delegate,e,L)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return n["ob"](this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function j(e,t,a){let n=e;"function"!==typeof e&&({next:n,error:t,complete:a}=e);const r=n,i=e=>r(e&&x.getOrCreate(e));return{next:i,error:t,complete:a}}
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
 */N.Persistence=M;class D{constructor(){this.providerId="phone",this._delegate=new n["i"](k(t["a"].auth()))}static credential(e,t){return n["i"].credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}D.PHONE_SIGN_IN_METHOD=n["i"].PHONE_SIGN_IN_METHOD,D.PROVIDER_ID=n["i"].PROVIDER_ID;
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
const U=n["p"];class q{constructor(e,a,r=t["a"].app()){var i;U(null===(i=r.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new n["l"](e,a,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */const $="auth-compat";function W(e){e.INTERNAL.registerComponent(new r["a"]($,e=>{const t=e.getProvider("app-compat").getImmediate(),a=e.getProvider("auth");return new N(t,a)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:n["a"].EMAIL_SIGNIN,PASSWORD_RESET:n["a"].PASSWORD_RESET,RECOVER_EMAIL:n["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:n["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:n["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:n["a"].VERIFY_EMAIL}},EmailAuthProvider:n["c"],FacebookAuthProvider:n["d"],GithubAuthProvider:n["e"],GoogleAuthProvider:n["f"],OAuthProvider:n["h"],SAMLAuthProvider:n["n"],PhoneAuthProvider:D,PhoneMultiFactorGenerator:n["j"],RecaptchaVerifier:q,TwitterAuthProvider:n["o"],Auth:N,AuthCredential:n["b"],Error:i["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(o,s)}W(t["a"])}).call(this,a("c8ba"))},"59ed":function(e,t,a){var n=a("da84"),r=a("1626"),i=a("0d51"),o=n.TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5df9":function(e,t,a){},"5e77":function(e,t,a){var n=a("83ab"),r=a("1a2d"),i=Function.prototype,o=n&&Object.getOwnPropertyDescriptor,s=r(i,"name"),l=s&&"something"===function(){}.name,c=s&&(!n||n&&o(i,"name").configurable);e.exports={EXISTS:s,PROPER:l,CONFIGURABLE:c}},"605d":function(e,t,a){var n=a("c6b6"),r=a("da84");e.exports="process"==n(r.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,a){"use strict";var n=a("83ab"),r=a("e330"),i=a("c65b"),o=a("d039"),s=a("df75"),l=a("7418"),c=a("d1e7"),h=a("7b0b"),u=a("44ad"),d=Object.assign,p=Object.defineProperty,v=r([].concat);e.exports=!d||o((function(){if(n&&1!==d({b:1},d(p({},"a",{enumerable:!0,get:function(){p(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},a=Symbol(),r="abcdefghijklmnopqrst";return e[a]=7,r.split("").forEach((function(e){t[e]=e})),7!=d({},e)[a]||s(d({},t)).join("")!=r}))?function(e,t){var a=h(e),r=arguments.length,o=1,d=l.f,p=c.f;while(r>o){var f,m=u(arguments[o++]),z=d?v(s(m),d(m)):s(m),g=z.length,y=0;while(g>y)f=z[y++],n&&!i(p,m,f)||(a[f]=m[f])}return a}:d},6547:function(e,t,a){var n=a("e330"),r=a("5926"),i=a("577e"),o=a("1d80"),s=n("".charAt),l=n("".charCodeAt),c=n("".slice),h=function(e){return function(t,a){var n,h,u=i(o(t)),d=r(a),p=u.length;return d<0||d>=p?e?"":void 0:(n=l(u,d),n<55296||n>56319||d+1===p||(h=l(u,d+1))<56320||h>57343?e?s(u,d):n:e?c(u,d,d+2):h-56320+(n-55296<<10)+65536)}};e.exports={codeAt:h(!1),charAt:h(!0)}},"65f0":function(e,t,a){var n=a("0b42");e.exports=function(e,t){return new(n(e))(0===t?0:t)}},"68ee":function(e,t,a){var n=a("e330"),r=a("d039"),i=a("1626"),o=a("f5df"),s=a("d066"),l=a("8925"),c=function(){},h=[],u=s("Reflect","construct"),d=/^\s*(?:class|function)\b/,p=n(d.exec),v=!d.exec(c),f=function(e){if(!i(e))return!1;try{return u(c,h,e),!0}catch(t){return!1}},m=function(e){if(!i(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return v||!!p(d,l(e))};e.exports=!u||r((function(){var e;return f(f.call)||!f(Object)||!f((function(){e=!0}))||e}))?m:f},"69f3":function(e,t,a){var n,r,i,o=a("7f9a"),s=a("da84"),l=a("e330"),c=a("861d"),h=a("9112"),u=a("1a2d"),d=a("c6cd"),p=a("f772"),v=a("d012"),f="Object already initialized",m=s.TypeError,z=s.WeakMap,g=function(e){return i(e)?r(e):n(e,{})},y=function(e){return function(t){var a;if(!c(t)||(a=r(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return a}};if(o||d.state){var _=d.state||(d.state=new z),M=l(_.get),A=l(_.has),b=l(_.set);n=function(e,t){if(A(_,e))throw new m(f);return t.facade=e,b(_,e,t),t},r=function(e){return M(_,e)||{}},i=function(e){return A(_,e)}}else{var I=p("state");v[I]=!0,n=function(e,t){if(u(e,I))throw new m(f);return t.facade=e,h(e,I,t),t},r=function(e){return u(e,I)?e[I]:{}},i=function(e){return u(e,I)}}e.exports={set:n,get:r,has:i,enforce:g,getterFor:y}},"6eeb":function(e,t,a){var n=a("da84"),r=a("1626"),i=a("1a2d"),o=a("9112"),s=a("ce4e"),l=a("8925"),c=a("69f3"),h=a("5e77").CONFIGURABLE,u=c.get,d=c.enforce,p=String(String).split("String");(e.exports=function(e,t,a,l){var c,u=!!l&&!!l.unsafe,v=!!l&&!!l.enumerable,f=!!l&&!!l.noTargetGet,m=l&&void 0!==l.name?l.name:t;r(a)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(a,"name")||h&&a.name!==m)&&o(a,"name",m),c=d(a),c.source||(c.source=p.join("string"==typeof m?m:""))),e!==n?(u?!f&&e[t]&&(v=!0):delete e[t],v?e[t]=a:o(e,t,a)):v?e[t]=a:s(t,a)})(Function.prototype,"toString",(function(){return r(this)&&u(this).source||l(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,a){var n=a("428f"),r=a("1a2d"),i=a("e538"),o=a("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});r(t,e)||o(t,e,{value:i.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,a){var n=a("cc12"),r=n("span").classList,i=r&&r.constructor&&r.constructor.prototype;e.exports=i===Object.prototype?void 0:i},"7b0b":function(e,t,a){var n=a("da84"),r=a("1d80"),i=n.Object;e.exports=function(e){return i(r(e))}},"7c73":function(e,t,a){var n,r=a("825a"),i=a("37e8"),o=a("7839"),s=a("d012"),l=a("1be4"),c=a("cc12"),h=a("f772"),u=">",d="<",p="prototype",v="script",f=h("IE_PROTO"),m=function(){},z=function(e){return d+v+u+e+d+"/"+v+u},g=function(e){e.write(z("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=c("iframe"),a="java"+v+":";return t.style.display="none",l.appendChild(t),t.src=String(a),e=t.contentWindow.document,e.open(),e.write(z("document.F=Object")),e.close(),e.F},_=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&n?g(n):y():g(n);var e=o.length;while(e--)delete _[p][o[e]];return _()};s[f]=!0,e.exports=Object.create||function(e,t){var a;return null!==e?(m[p]=r(e),a=new m,m[p]=null,a[f]=e):a=_(),void 0===t?a:i(a,t)}},"7dd0":function(e,t,a){"use strict";var n=a("23e7"),r=a("c65b"),i=a("c430"),o=a("5e77"),s=a("1626"),l=a("9ed3"),c=a("e163"),h=a("d2bb"),u=a("d44e"),d=a("9112"),p=a("6eeb"),v=a("b622"),f=a("3f8c"),m=a("ae93"),z=o.PROPER,g=o.CONFIGURABLE,y=m.IteratorPrototype,_=m.BUGGY_SAFARI_ITERATORS,M=v("iterator"),A="keys",b="values",I="entries",V=function(){return this};e.exports=function(e,t,a,o,v,m,w){l(a,t,o);var C,H,L,k=function(e){if(e===v&&O)return O;if(!_&&e in F)return F[e];switch(e){case A:return function(){return new a(this,e)};case b:return function(){return new a(this,e)};case I:return function(){return new a(this,e)}}return function(){return new a(this)}},S=t+" Iterator",B=!1,F=e.prototype,E=F[M]||F["@@iterator"]||v&&F[v],O=!_&&E||k(v),T="Array"==t&&F.entries||E;if(T&&(C=c(T.call(new e)),C!==Object.prototype&&C.next&&(i||c(C)===y||(h?h(C,y):s(C[M])||p(C,M,V)),u(C,S,!0,!0),i&&(f[S]=V))),z&&v==b&&E&&E.name!==b&&(!i&&g?d(F,"name",b):(B=!0,O=function(){return r(E,this)})),v)if(H={values:k(b),keys:m?O:k(A),entries:k(I)},w)for(L in H)(_||B||!(L in F))&&p(F,L,H[L]);else n({target:t,proto:!0,forced:_||B},H);return i&&!w||F[M]===O||p(F,M,O,{name:v}),f[t]=O,H}},"7ded":function(e,t,a){"use strict";a.d(t,"a",(function(){return z}));var n=a("1fd5"),r=a("22e5"),i=a("589b"),o=a("e691");
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
class s{constructor(e,t){this._delegate=e,this.firebase=t,Object(i["_addComponent"])(e,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(i["deleteApp"])(this._delegate)))}_getService(e,t=i["_DEFAULT_ENTRY_NAME"]){var a;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(a=n.getComponent())||void 0===a?void 0:a.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=i["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(i["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(i["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const l={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},c=new n["b"]("app-compat","Firebase",l);
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
function h(e){const t={},a={__esModule:!0,initializeApp:s,app:o,registerVersion:i["registerVersion"],setLogLevel:i["setLogLevel"],onLog:i["onLog"],apps:null,SDK_VERSION:i["SDK_VERSION"],INTERNAL:{registerComponent:h,removeApp:r,useAsService:u,modularAPIs:i}};function r(e){delete t[e]}function o(e){if(e=e||i["_DEFAULT_ENTRY_NAME"],!Object(n["j"])(t,e))throw c.create("no-app",{appName:e});return t[e]}function s(r,o={}){const s=i["initializeApp"](r,o);if(Object(n["j"])(t,s.name))return t[s.name];const l=new e(s,a);return t[s.name]=l,l}function l(){return Object.keys(t).map(e=>t[e])}function h(t){const r=t.name,s=r.replace("-compat","");if(i["_registerComponent"](t)&&"PUBLIC"===t.type){const i=(e=o())=>{if("function"!==typeof e[s])throw c.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&Object(n["o"])(i,t.serviceProps),a[s]=i,e.prototype[s]=function(...e){const a=this._getService.bind(this,r);return a.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?a[s]:null}function u(e,t){if("serverAuth"===t)return null;const a=t;return a}return a["default"]=a,Object.defineProperty(a,"apps",{get:l}),o["App"]=e,a}
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
 */function u(){const e=h(s);function t(t){Object(n["o"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:u,extendNamespace:t,createSubscribe:n["l"],ErrorFactory:n["b"],deepExtend:n["o"]}),e}const d=u(),p=new o["b"]("@firebase/app-compat"),v="@firebase/app-compat",f="0.1.8";
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
function m(e){Object(i["registerVersion"])(v,f,e)}
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
 */if(Object(n["u"])()&&void 0!==self.firebase){p.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&p.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const z=d;m()},"7f9a":function(e,t,a){var n=a("da84"),r=a("1626"),i=a("8925"),o=n.WeakMap;e.exports=r(o)&&/native code/.test(i(o))},"825a":function(e,t,a){var n=a("da84"),r=a("861d"),i=n.String,o=n.TypeError;e.exports=function(e){if(r(e))return e;throw o(i(e)+" is not an object")}},"83ab":function(e,t,a){var n=a("d039");e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,a){"use strict";var n=a("a04b"),r=a("9bf2"),i=a("5c6c");e.exports=function(e,t,a){var o=n(t);o in e?r.f(e,o,i(0,a)):e[o]=a}},"861d":function(e,t,a){var n=a("1626");e.exports=function(e){return"object"==typeof e?null!==e:n(e)}},8925:function(e,t,a){var n=a("e330"),r=a("1626"),i=a("c6cd"),o=n(Function.toString);r(i.inspectSource)||(i.inspectSource=function(e){return o(e)}),e.exports=i.inspectSource},"8c4f":function(e,t,a){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
/*!
 * BootstrapVue Icons, generated from Bootstrap Icons 1.2.2
 *
 * @link https://icons.getbootstrap.com/
 * @license MIT
 * https://github.com/twbs/icons/blob/master/LICENSE.md
 */function Ab(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function bb(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ab(Object(a),!0).forEach((function(t){Ib(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ab(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function Ib(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Vb=function e(t,a){if(!t)return null;var n=(t.$options||{}).components,r=n[a];return r||e(t.$parent,a)},wb=$(Ze,["content"]),Cb=Ge(W(bb(bb({},wb),{},{icon:qe(He)})),Ae),Hb=n["a"].extend({name:Ae,functional:!0,props:Cb,render:function(e,t){var a=t.data,n=t.props,r=t.parent,i=xe(Ne(n.icon||"")).replace(z,"");return e(i&&Vb(r,"BIcon".concat(i))||it,Me(a,{props:$e(wb,n)}))}}),Lb=Ge($(Ze,["content","stacked"]),be),kb=n["a"].extend({name:be,functional:!0,props:Lb,render:function(e,t){var a=t.data,n=t.props,r=t.children;return e(et,Me(a,{staticClass:"b-iconstack",props:n}),r)}}),Sb=ue({components:{BIcon:Hb,BIconstack:kb,BIconBlank:it,BIconAlarm:ot,BIconAlarmFill:st,BIconAlignBottom:lt,BIconAlignCenter:ct,BIconAlignEnd:ht,BIconAlignMiddle:ut,BIconAlignStart:dt,BIconAlignTop:pt,BIconAlt:vt,BIconApp:ft,BIconAppIndicator:mt,BIconArchive:zt,BIconArchiveFill:gt,BIconArrow90degDown:yt,BIconArrow90degLeft:_t,BIconArrow90degRight:Mt,BIconArrow90degUp:At,BIconArrowBarDown:bt,BIconArrowBarLeft:It,BIconArrowBarRight:Vt,BIconArrowBarUp:wt,BIconArrowClockwise:Ct,BIconArrowCounterclockwise:Ht,BIconArrowDown:Lt,BIconArrowDownCircle:kt,BIconArrowDownCircleFill:St,BIconArrowDownLeft:Bt,BIconArrowDownLeftCircle:Ft,BIconArrowDownLeftCircleFill:Et,BIconArrowDownLeftSquare:Ot,BIconArrowDownLeftSquareFill:Tt,BIconArrowDownRight:Pt,BIconArrowDownRightCircle:xt,BIconArrowDownRightCircleFill:Rt,BIconArrowDownRightSquare:Nt,BIconArrowDownRightSquareFill:jt,BIconArrowDownShort:Dt,BIconArrowDownSquare:Ut,BIconArrowDownSquareFill:qt,BIconArrowDownUp:$t,BIconArrowLeft:Wt,BIconArrowLeftCircle:Gt,BIconArrowLeftCircleFill:Kt,BIconArrowLeftRight:Jt,BIconArrowLeftShort:Qt,BIconArrowLeftSquare:Yt,BIconArrowLeftSquareFill:Xt,BIconArrowRepeat:Zt,BIconArrowReturnLeft:ea,BIconArrowReturnRight:ta,BIconArrowRight:aa,BIconArrowRightCircle:na,BIconArrowRightCircleFill:ra,BIconArrowRightShort:ia,BIconArrowRightSquare:oa,BIconArrowRightSquareFill:sa,BIconArrowUp:la,BIconArrowUpCircle:ca,BIconArrowUpCircleFill:ha,BIconArrowUpLeft:ua,BIconArrowUpLeftCircle:da,BIconArrowUpLeftCircleFill:pa,BIconArrowUpLeftSquare:va,BIconArrowUpLeftSquareFill:fa,BIconArrowUpRight:ma,BIconArrowUpRightCircle:za,BIconArrowUpRightCircleFill:ga,BIconArrowUpRightSquare:ya,BIconArrowUpRightSquareFill:_a,BIconArrowUpShort:Ma,BIconArrowUpSquare:Aa,BIconArrowUpSquareFill:ba,BIconArrowsAngleContract:Ia,BIconArrowsAngleExpand:Va,BIconArrowsCollapse:wa,BIconArrowsExpand:Ca,BIconArrowsFullscreen:Ha,BIconArrowsMove:La,BIconAspectRatio:ka,BIconAspectRatioFill:Sa,BIconAsterisk:Ba,BIconAt:Fa,BIconAward:Ea,BIconAwardFill:Oa,BIconBack:Ta,BIconBackspace:Pa,BIconBackspaceFill:xa,BIconBackspaceReverse:Ra,BIconBackspaceReverseFill:Na,BIconBadge4k:ja,BIconBadge4kFill:Da,BIconBadge8k:Ua,BIconBadge8kFill:qa,BIconBadgeAd:$a,BIconBadgeAdFill:Wa,BIconBadgeCc:Ga,BIconBadgeCcFill:Ka,BIconBadgeHd:Ja,BIconBadgeHdFill:Qa,BIconBadgeTm:Ya,BIconBadgeTmFill:Xa,BIconBadgeVo:Za,BIconBadgeVoFill:en,BIconBag:tn,BIconBagCheck:an,BIconBagCheckFill:nn,BIconBagDash:rn,BIconBagDashFill:on,BIconBagFill:sn,BIconBagPlus:ln,BIconBagPlusFill:cn,BIconBagX:hn,BIconBagXFill:un,BIconBarChart:dn,BIconBarChartFill:pn,BIconBarChartLine:vn,BIconBarChartLineFill:fn,BIconBarChartSteps:mn,BIconBasket:zn,BIconBasket2:gn,BIconBasket2Fill:yn,BIconBasket3:_n,BIconBasket3Fill:Mn,BIconBasketFill:An,BIconBattery:bn,BIconBatteryCharging:In,BIconBatteryFull:Vn,BIconBatteryHalf:wn,BIconBell:Cn,BIconBellFill:Hn,BIconBezier:Ln,BIconBezier2:kn,BIconBicycle:Sn,BIconBinoculars:Bn,BIconBinocularsFill:Fn,BIconBlockquoteLeft:En,BIconBlockquoteRight:On,BIconBook:Tn,BIconBookFill:Pn,BIconBookHalf:xn,BIconBookmark:Rn,BIconBookmarkCheck:Nn,BIconBookmarkCheckFill:jn,BIconBookmarkDash:Dn,BIconBookmarkDashFill:Un,BIconBookmarkFill:qn,BIconBookmarkHeart:$n,BIconBookmarkHeartFill:Wn,BIconBookmarkPlus:Gn,BIconBookmarkPlusFill:Kn,BIconBookmarkStar:Jn,BIconBookmarkStarFill:Qn,BIconBookmarkX:Yn,BIconBookmarkXFill:Xn,BIconBookmarks:Zn,BIconBookmarksFill:er,BIconBookshelf:tr,BIconBootstrap:ar,BIconBootstrapFill:nr,BIconBootstrapReboot:rr,BIconBorderStyle:ir,BIconBorderWidth:or,BIconBoundingBox:sr,BIconBoundingBoxCircles:lr,BIconBox:cr,BIconBoxArrowDown:hr,BIconBoxArrowDownLeft:ur,BIconBoxArrowDownRight:dr,BIconBoxArrowInDown:pr,BIconBoxArrowInDownLeft:vr,BIconBoxArrowInDownRight:fr,BIconBoxArrowInLeft:mr,BIconBoxArrowInRight:zr,BIconBoxArrowInUp:gr,BIconBoxArrowInUpLeft:yr,BIconBoxArrowInUpRight:_r,BIconBoxArrowLeft:Mr,BIconBoxArrowRight:Ar,BIconBoxArrowUp:br,BIconBoxArrowUpLeft:Ir,BIconBoxArrowUpRight:Vr,BIconBoxSeam:wr,BIconBraces:Cr,BIconBricks:Hr,BIconBriefcase:Lr,BIconBriefcaseFill:kr,BIconBrightnessAltHigh:Sr,BIconBrightnessAltHighFill:Br,BIconBrightnessAltLow:Fr,BIconBrightnessAltLowFill:Er,BIconBrightnessHigh:Or,BIconBrightnessHighFill:Tr,BIconBrightnessLow:Pr,BIconBrightnessLowFill:xr,BIconBroadcast:Rr,BIconBroadcastPin:Nr,BIconBrush:jr,BIconBrushFill:Dr,BIconBucket:Ur,BIconBucketFill:qr,BIconBug:$r,BIconBugFill:Wr,BIconBuilding:Gr,BIconBullseye:Kr,BIconCalculator:Jr,BIconCalculatorFill:Qr,BIconCalendar:Yr,BIconCalendar2:Xr,BIconCalendar2Check:Zr,BIconCalendar2CheckFill:ei,BIconCalendar2Date:ti,BIconCalendar2DateFill:ai,BIconCalendar2Day:ni,BIconCalendar2DayFill:ri,BIconCalendar2Event:ii,BIconCalendar2EventFill:oi,BIconCalendar2Fill:si,BIconCalendar2Minus:li,BIconCalendar2MinusFill:ci,BIconCalendar2Month:hi,BIconCalendar2MonthFill:ui,BIconCalendar2Plus:di,BIconCalendar2PlusFill:pi,BIconCalendar2Range:vi,BIconCalendar2RangeFill:fi,BIconCalendar2Week:mi,BIconCalendar2WeekFill:zi,BIconCalendar2X:gi,BIconCalendar2XFill:yi,BIconCalendar3:_i,BIconCalendar3Event:Mi,BIconCalendar3EventFill:Ai,BIconCalendar3Fill:bi,BIconCalendar3Range:Ii,BIconCalendar3RangeFill:Vi,BIconCalendar3Week:wi,BIconCalendar3WeekFill:Ci,BIconCalendar4:Hi,BIconCalendar4Event:Li,BIconCalendar4Range:ki,BIconCalendar4Week:Si,BIconCalendarCheck:Bi,BIconCalendarCheckFill:Fi,BIconCalendarDate:Ei,BIconCalendarDateFill:Oi,BIconCalendarDay:Ti,BIconCalendarDayFill:Pi,BIconCalendarEvent:xi,BIconCalendarEventFill:Ri,BIconCalendarFill:Ni,BIconCalendarMinus:ji,BIconCalendarMinusFill:Di,BIconCalendarMonth:Ui,BIconCalendarMonthFill:qi,BIconCalendarPlus:$i,BIconCalendarPlusFill:Wi,BIconCalendarRange:Gi,BIconCalendarRangeFill:Ki,BIconCalendarWeek:Ji,BIconCalendarWeekFill:Qi,BIconCalendarX:Yi,BIconCalendarXFill:Xi,BIconCamera:Zi,BIconCamera2:eo,BIconCameraFill:to,BIconCameraReels:ao,BIconCameraReelsFill:no,BIconCameraVideo:ro,BIconCameraVideoFill:io,BIconCameraVideoOff:oo,BIconCameraVideoOffFill:so,BIconCapslock:lo,BIconCapslockFill:co,BIconCardChecklist:ho,BIconCardHeading:uo,BIconCardImage:po,BIconCardList:vo,BIconCardText:fo,BIconCaretDown:mo,BIconCaretDownFill:zo,BIconCaretDownSquare:go,BIconCaretDownSquareFill:yo,BIconCaretLeft:_o,BIconCaretLeftFill:Mo,BIconCaretLeftSquare:Ao,BIconCaretLeftSquareFill:bo,BIconCaretRight:Io,BIconCaretRightFill:Vo,BIconCaretRightSquare:wo,BIconCaretRightSquareFill:Co,BIconCaretUp:Ho,BIconCaretUpFill:Lo,BIconCaretUpSquare:ko,BIconCaretUpSquareFill:So,BIconCart:Bo,BIconCart2:Fo,BIconCart3:Eo,BIconCart4:Oo,BIconCartCheck:To,BIconCartCheckFill:Po,BIconCartDash:xo,BIconCartDashFill:Ro,BIconCartFill:No,BIconCartPlus:jo,BIconCartPlusFill:Do,BIconCartX:Uo,BIconCartXFill:qo,BIconCash:$o,BIconCashStack:Wo,BIconCast:Go,BIconChat:Ko,BIconChatDots:Jo,BIconChatDotsFill:Qo,BIconChatFill:Yo,BIconChatLeft:Xo,BIconChatLeftDots:Zo,BIconChatLeftDotsFill:es,BIconChatLeftFill:ts,BIconChatLeftQuote:as,BIconChatLeftQuoteFill:ns,BIconChatLeftText:rs,BIconChatLeftTextFill:is,BIconChatQuote:os,BIconChatQuoteFill:ss,BIconChatRight:ls,BIconChatRightDots:cs,BIconChatRightDotsFill:hs,BIconChatRightFill:us,BIconChatRightQuote:ds,BIconChatRightQuoteFill:ps,BIconChatRightText:vs,BIconChatRightTextFill:fs,BIconChatSquare:ms,BIconChatSquareDots:zs,BIconChatSquareDotsFill:gs,BIconChatSquareFill:ys,BIconChatSquareQuote:_s,BIconChatSquareQuoteFill:Ms,BIconChatSquareText:As,BIconChatSquareTextFill:bs,BIconChatText:Is,BIconChatTextFill:Vs,BIconCheck:ws,BIconCheck2:Cs,BIconCheck2All:Hs,BIconCheck2Circle:Ls,BIconCheck2Square:ks,BIconCheckAll:Ss,BIconCheckCircle:Bs,BIconCheckCircleFill:Fs,BIconCheckSquare:Es,BIconCheckSquareFill:Os,BIconChevronBarContract:Ts,BIconChevronBarDown:Ps,BIconChevronBarExpand:xs,BIconChevronBarLeft:Rs,BIconChevronBarRight:Ns,BIconChevronBarUp:js,BIconChevronCompactDown:Ds,BIconChevronCompactLeft:Us,BIconChevronCompactRight:qs,BIconChevronCompactUp:$s,BIconChevronContract:Ws,BIconChevronDoubleDown:Gs,BIconChevronDoubleLeft:Ks,BIconChevronDoubleRight:Js,BIconChevronDoubleUp:Qs,BIconChevronDown:Ys,BIconChevronExpand:Xs,BIconChevronLeft:Zs,BIconChevronRight:el,BIconChevronUp:tl,BIconCircle:al,BIconCircleFill:nl,BIconCircleHalf:rl,BIconCircleSquare:il,BIconClipboard:ol,BIconClipboardCheck:sl,BIconClipboardData:ll,BIconClipboardMinus:cl,BIconClipboardPlus:hl,BIconClipboardX:ul,BIconClock:dl,BIconClockFill:pl,BIconClockHistory:vl,BIconCloud:fl,BIconCloudArrowDown:ml,BIconCloudArrowDownFill:zl,BIconCloudArrowUp:gl,BIconCloudArrowUpFill:yl,BIconCloudCheck:_l,BIconCloudCheckFill:Ml,BIconCloudDownload:Al,BIconCloudDownloadFill:bl,BIconCloudFill:Il,BIconCloudMinus:Vl,BIconCloudMinusFill:wl,BIconCloudPlus:Cl,BIconCloudPlusFill:Hl,BIconCloudSlash:Ll,BIconCloudSlashFill:kl,BIconCloudUpload:Sl,BIconCloudUploadFill:Bl,BIconCode:Fl,BIconCodeSlash:El,BIconCodeSquare:Ol,BIconCollection:Tl,BIconCollectionFill:Pl,BIconCollectionPlay:xl,BIconCollectionPlayFill:Rl,BIconColumns:Nl,BIconColumnsGap:jl,BIconCommand:Dl,BIconCompass:Ul,BIconCompassFill:ql,BIconCone:$l,BIconConeStriped:Wl,BIconController:Gl,BIconCpu:Kl,BIconCpuFill:Jl,BIconCreditCard:Ql,BIconCreditCard2Back:Yl,BIconCreditCard2BackFill:Xl,BIconCreditCard2Front:Zl,BIconCreditCard2FrontFill:ec,BIconCreditCardFill:tc,BIconCrop:ac,BIconCup:nc,BIconCupFill:rc,BIconCupStraw:ic,BIconCursor:oc,BIconCursorFill:sc,BIconCursorText:lc,BIconDash:cc,BIconDashCircle:hc,BIconDashCircleFill:uc,BIconDashSquare:dc,BIconDashSquareFill:pc,BIconDiagram2:vc,BIconDiagram2Fill:fc,BIconDiagram3:mc,BIconDiagram3Fill:zc,BIconDiamond:gc,BIconDiamondFill:yc,BIconDiamondHalf:_c,BIconDice1:Mc,BIconDice1Fill:Ac,BIconDice2:bc,BIconDice2Fill:Ic,BIconDice3:Vc,BIconDice3Fill:wc,BIconDice4:Cc,BIconDice4Fill:Hc,BIconDice5:Lc,BIconDice5Fill:kc,BIconDice6:Sc,BIconDice6Fill:Bc,BIconDisc:Fc,BIconDiscFill:Ec,BIconDiscord:Oc,BIconDisplay:Tc,BIconDisplayFill:Pc,BIconDistributeHorizontal:xc,BIconDistributeVertical:Rc,BIconDoorClosed:Nc,BIconDoorClosedFill:jc,BIconDoorOpen:Dc,BIconDoorOpenFill:Uc,BIconDot:qc,BIconDownload:$c,BIconDroplet:Wc,BIconDropletFill:Gc,BIconDropletHalf:Kc,BIconEarbuds:Jc,BIconEasel:Qc,BIconEaselFill:Yc,BIconEgg:Xc,BIconEggFill:Zc,BIconEggFried:eh,BIconEject:th,BIconEjectFill:ah,BIconEmojiAngry:nh,BIconEmojiAngryFill:rh,BIconEmojiDizzy:ih,BIconEmojiDizzyFill:oh,BIconEmojiExpressionless:sh,BIconEmojiExpressionlessFill:lh,BIconEmojiFrown:ch,BIconEmojiFrownFill:hh,BIconEmojiHeartEyes:uh,BIconEmojiHeartEyesFill:dh,BIconEmojiLaughing:ph,BIconEmojiLaughingFill:vh,BIconEmojiNeutral:fh,BIconEmojiNeutralFill:mh,BIconEmojiSmile:zh,BIconEmojiSmileFill:gh,BIconEmojiSmileUpsideDown:yh,BIconEmojiSmileUpsideDownFill:_h,BIconEmojiSunglasses:Mh,BIconEmojiSunglassesFill:Ah,BIconEmojiWink:bh,BIconEmojiWinkFill:Ih,BIconEnvelope:Vh,BIconEnvelopeFill:wh,BIconEnvelopeOpen:Ch,BIconEnvelopeOpenFill:Hh,BIconExclamation:Lh,BIconExclamationCircle:kh,BIconExclamationCircleFill:Sh,BIconExclamationDiamond:Bh,BIconExclamationDiamondFill:Fh,BIconExclamationOctagon:Eh,BIconExclamationOctagonFill:Oh,BIconExclamationSquare:Th,BIconExclamationSquareFill:Ph,BIconExclamationTriangle:xh,BIconExclamationTriangleFill:Rh,BIconExclude:Nh,BIconEye:jh,BIconEyeFill:Dh,BIconEyeSlash:Uh,BIconEyeSlashFill:qh,BIconEyeglasses:$h,BIconFacebook:Wh,BIconFile:Gh,BIconFileArrowDown:Kh,BIconFileArrowDownFill:Jh,BIconFileArrowUp:Qh,BIconFileArrowUpFill:Yh,BIconFileBarGraph:Xh,BIconFileBarGraphFill:Zh,BIconFileBinary:eu,BIconFileBinaryFill:tu,BIconFileBreak:au,BIconFileBreakFill:nu,BIconFileCheck:ru,BIconFileCheckFill:iu,BIconFileCode:ou,BIconFileCodeFill:su,BIconFileDiff:lu,BIconFileDiffFill:cu,BIconFileEarmark:hu,BIconFileEarmarkArrowDown:uu,BIconFileEarmarkArrowDownFill:du,BIconFileEarmarkArrowUp:pu,BIconFileEarmarkArrowUpFill:vu,BIconFileEarmarkBarGraph:fu,BIconFileEarmarkBarGraphFill:mu,BIconFileEarmarkBinary:zu,BIconFileEarmarkBinaryFill:gu,BIconFileEarmarkBreak:yu,BIconFileEarmarkBreakFill:_u,BIconFileEarmarkCheck:Mu,BIconFileEarmarkCheckFill:Au,BIconFileEarmarkCode:bu,BIconFileEarmarkCodeFill:Iu,BIconFileEarmarkDiff:Vu,BIconFileEarmarkDiffFill:wu,BIconFileEarmarkEasel:Cu,BIconFileEarmarkEaselFill:Hu,BIconFileEarmarkExcel:Lu,BIconFileEarmarkExcelFill:ku,BIconFileEarmarkFill:Su,BIconFileEarmarkFont:Bu,BIconFileEarmarkFontFill:Fu,BIconFileEarmarkImage:Eu,BIconFileEarmarkImageFill:Ou,BIconFileEarmarkLock:Tu,BIconFileEarmarkLock2:Pu,BIconFileEarmarkLock2Fill:xu,BIconFileEarmarkLockFill:Ru,BIconFileEarmarkMedical:Nu,BIconFileEarmarkMedicalFill:ju,BIconFileEarmarkMinus:Du,BIconFileEarmarkMinusFill:Uu,BIconFileEarmarkMusic:qu,BIconFileEarmarkMusicFill:$u,BIconFileEarmarkPerson:Wu,BIconFileEarmarkPersonFill:Gu,BIconFileEarmarkPlay:Ku,BIconFileEarmarkPlayFill:Ju,BIconFileEarmarkPlus:Qu,BIconFileEarmarkPlusFill:Yu,BIconFileEarmarkPost:Xu,BIconFileEarmarkPostFill:Zu,BIconFileEarmarkPpt:ed,BIconFileEarmarkPptFill:td,BIconFileEarmarkRichtext:ad,BIconFileEarmarkRichtextFill:nd,BIconFileEarmarkRuled:rd,BIconFileEarmarkRuledFill:id,BIconFileEarmarkSlides:od,BIconFileEarmarkSlidesFill:sd,BIconFileEarmarkSpreadsheet:ld,BIconFileEarmarkSpreadsheetFill:cd,BIconFileEarmarkText:hd,BIconFileEarmarkTextFill:ud,BIconFileEarmarkWord:dd,BIconFileEarmarkWordFill:pd,BIconFileEarmarkX:vd,BIconFileEarmarkXFill:fd,BIconFileEarmarkZip:md,BIconFileEarmarkZipFill:zd,BIconFileEasel:gd,BIconFileEaselFill:yd,BIconFileExcel:_d,BIconFileExcelFill:Md,BIconFileFill:Ad,BIconFileFont:bd,BIconFileFontFill:Id,BIconFileImage:Vd,BIconFileImageFill:wd,BIconFileLock:Cd,BIconFileLock2:Hd,BIconFileLock2Fill:Ld,BIconFileLockFill:kd,BIconFileMedical:Sd,BIconFileMedicalFill:Bd,BIconFileMinus:Fd,BIconFileMinusFill:Ed,BIconFileMusic:Od,BIconFileMusicFill:Td,BIconFilePerson:Pd,BIconFilePersonFill:xd,BIconFilePlay:Rd,BIconFilePlayFill:Nd,BIconFilePlus:jd,BIconFilePlusFill:Dd,BIconFilePost:Ud,BIconFilePostFill:qd,BIconFilePpt:$d,BIconFilePptFill:Wd,BIconFileRichtext:Gd,BIconFileRichtextFill:Kd,BIconFileRuled:Jd,BIconFileRuledFill:Qd,BIconFileSlides:Yd,BIconFileSlidesFill:Xd,BIconFileSpreadsheet:Zd,BIconFileSpreadsheetFill:ep,BIconFileText:tp,BIconFileTextFill:ap,BIconFileWord:np,BIconFileWordFill:rp,BIconFileX:ip,BIconFileXFill:op,BIconFileZip:sp,BIconFileZipFill:lp,BIconFiles:cp,BIconFilesAlt:hp,BIconFilm:up,BIconFilter:dp,BIconFilterCircle:pp,BIconFilterCircleFill:vp,BIconFilterLeft:fp,BIconFilterRight:mp,BIconFilterSquare:zp,BIconFilterSquareFill:gp,BIconFlag:yp,BIconFlagFill:_p,BIconFlower1:Mp,BIconFlower2:Ap,BIconFlower3:bp,BIconFolder:Ip,BIconFolder2:Vp,BIconFolder2Open:wp,BIconFolderCheck:Cp,BIconFolderFill:Hp,BIconFolderMinus:Lp,BIconFolderPlus:kp,BIconFolderSymlink:Sp,BIconFolderSymlinkFill:Bp,BIconFolderX:Fp,BIconFonts:Ep,BIconForward:Op,BIconForwardFill:Tp,BIconFront:Pp,BIconFullscreen:xp,BIconFullscreenExit:Rp,BIconFunnel:Np,BIconFunnelFill:jp,BIconGear:Dp,BIconGearFill:Up,BIconGearWide:qp,BIconGearWideConnected:$p,BIconGem:Wp,BIconGeo:Gp,BIconGeoAlt:Kp,BIconGeoAltFill:Jp,BIconGeoFill:Qp,BIconGift:Yp,BIconGiftFill:Xp,BIconGithub:Zp,BIconGlobe:ev,BIconGlobe2:tv,BIconGoogle:av,BIconGraphDown:nv,BIconGraphUp:rv,BIconGrid:iv,BIconGrid1x2:ov,BIconGrid1x2Fill:sv,BIconGrid3x2:lv,BIconGrid3x2Gap:cv,BIconGrid3x2GapFill:hv,BIconGrid3x3:uv,BIconGrid3x3Gap:dv,BIconGrid3x3GapFill:pv,BIconGridFill:vv,BIconGripHorizontal:fv,BIconGripVertical:mv,BIconHammer:zv,BIconHandIndex:gv,BIconHandIndexThumb:yv,BIconHandThumbsDown:_v,BIconHandThumbsUp:Mv,BIconHandbag:Av,BIconHandbagFill:bv,BIconHash:Iv,BIconHdd:Vv,BIconHddFill:wv,BIconHddNetwork:Cv,BIconHddNetworkFill:Hv,BIconHddRack:Lv,BIconHddRackFill:kv,BIconHddStack:Sv,BIconHddStackFill:Bv,BIconHeadphones:Fv,BIconHeadset:Ev,BIconHeart:Ov,BIconHeartFill:Tv,BIconHeartHalf:Pv,BIconHeptagon:xv,BIconHeptagonFill:Rv,BIconHeptagonHalf:Nv,BIconHexagon:jv,BIconHexagonFill:Dv,BIconHexagonHalf:Uv,BIconHourglass:qv,BIconHourglassBottom:$v,BIconHourglassSplit:Wv,BIconHourglassTop:Gv,BIconHouse:Kv,BIconHouseDoor:Jv,BIconHouseDoorFill:Qv,BIconHouseFill:Yv,BIconHr:Xv,BIconImage:Zv,BIconImageAlt:ef,BIconImageFill:tf,BIconImages:af,BIconInbox:nf,BIconInboxFill:rf,BIconInboxes:of,BIconInboxesFill:sf,BIconInfo:lf,BIconInfoCircle:cf,BIconInfoCircleFill:hf,BIconInfoSquare:uf,BIconInfoSquareFill:df,BIconInputCursor:pf,BIconInputCursorText:vf,BIconInstagram:ff,BIconIntersect:mf,BIconJournal:zf,BIconJournalAlbum:gf,BIconJournalArrowDown:yf,BIconJournalArrowUp:_f,BIconJournalBookmark:Mf,BIconJournalBookmarkFill:Af,BIconJournalCheck:bf,BIconJournalCode:If,BIconJournalMedical:Vf,BIconJournalMinus:wf,BIconJournalPlus:Cf,BIconJournalRichtext:Hf,BIconJournalText:Lf,BIconJournalX:kf,BIconJournals:Sf,BIconJoystick:Bf,BIconJustify:Ff,BIconJustifyLeft:Ef,BIconJustifyRight:Of,BIconKanban:Tf,BIconKanbanFill:Pf,BIconKey:xf,BIconKeyFill:Rf,BIconKeyboard:Nf,BIconKeyboardFill:jf,BIconLadder:Df,BIconLamp:Uf,BIconLampFill:qf,BIconLaptop:$f,BIconLaptopFill:Wf,BIconLayers:Gf,BIconLayersFill:Kf,BIconLayersHalf:Jf,BIconLayoutSidebar:Qf,BIconLayoutSidebarInset:Yf,BIconLayoutSidebarInsetReverse:Xf,BIconLayoutSidebarReverse:Zf,BIconLayoutSplit:em,BIconLayoutTextSidebar:tm,BIconLayoutTextSidebarReverse:am,BIconLayoutTextWindow:nm,BIconLayoutTextWindowReverse:rm,BIconLayoutThreeColumns:im,BIconLayoutWtf:om,BIconLifePreserver:sm,BIconLightning:lm,BIconLightningFill:cm,BIconLink:hm,BIconLink45deg:um,BIconLinkedin:dm,BIconList:pm,BIconListCheck:vm,BIconListNested:fm,BIconListOl:mm,BIconListStars:zm,BIconListTask:gm,BIconListUl:ym,BIconLock:_m,BIconLockFill:Mm,BIconMailbox:Am,BIconMailbox2:bm,BIconMap:Im,BIconMapFill:Vm,BIconMarkdown:wm,BIconMarkdownFill:Cm,BIconMenuApp:Hm,BIconMenuAppFill:Lm,BIconMenuButton:km,BIconMenuButtonFill:Sm,BIconMenuButtonWide:Bm,BIconMenuButtonWideFill:Fm,BIconMenuDown:Em,BIconMenuUp:Om,BIconMic:Tm,BIconMicFill:Pm,BIconMicMute:xm,BIconMicMuteFill:Rm,BIconMinecart:Nm,BIconMinecartLoaded:jm,BIconMoon:Dm,BIconMouse:Um,BIconMouse2:qm,BIconMouse3:$m,BIconMusicNote:Wm,BIconMusicNoteBeamed:Gm,BIconMusicNoteList:Km,BIconMusicPlayer:Jm,BIconMusicPlayerFill:Qm,BIconNewspaper:Ym,BIconNodeMinus:Xm,BIconNodeMinusFill:Zm,BIconNodePlus:ez,BIconNodePlusFill:tz,BIconNut:az,BIconNutFill:nz,BIconOctagon:rz,BIconOctagonFill:iz,BIconOctagonHalf:oz,BIconOption:sz,BIconOutlet:lz,BIconPaperclip:cz,BIconParagraph:hz,BIconPatchCheck:uz,BIconPatchCheckFill:dz,BIconPatchExclamation:pz,BIconPatchExclamationFill:vz,BIconPatchMinus:fz,BIconPatchMinusFill:mz,BIconPatchPlus:zz,BIconPatchPlusFill:gz,BIconPatchQuestion:yz,BIconPatchQuestionFill:_z,BIconPause:Mz,BIconPauseBtn:Az,BIconPauseBtnFill:bz,BIconPauseCircle:Iz,BIconPauseCircleFill:Vz,BIconPauseFill:wz,BIconPeace:Cz,BIconPeaceFill:Hz,BIconPen:Lz,BIconPenFill:kz,BIconPencil:Sz,BIconPencilFill:Bz,BIconPencilSquare:Fz,BIconPentagon:Ez,BIconPentagonFill:Oz,BIconPentagonHalf:Tz,BIconPeople:Pz,BIconPeopleFill:xz,BIconPercent:Rz,BIconPerson:Nz,BIconPersonBadge:jz,BIconPersonBadgeFill:Dz,BIconPersonBoundingBox:Uz,BIconPersonCheck:qz,BIconPersonCheckFill:$z,BIconPersonCircle:Wz,BIconPersonDash:Gz,BIconPersonDashFill:Kz,BIconPersonFill:Jz,BIconPersonLinesFill:Qz,BIconPersonPlus:Yz,BIconPersonPlusFill:Xz,BIconPersonSquare:Zz,BIconPersonX:eg,BIconPersonXFill:tg,BIconPhone:ag,BIconPhoneFill:ng,BIconPhoneLandscape:rg,BIconPhoneLandscapeFill:ig,BIconPhoneVibrate:og,BIconPieChart:sg,BIconPieChartFill:lg,BIconPip:cg,BIconPipFill:hg,BIconPlay:ug,BIconPlayBtn:dg,BIconPlayBtnFill:pg,BIconPlayCircle:vg,BIconPlayCircleFill:fg,BIconPlayFill:mg,BIconPlug:zg,BIconPlugFill:gg,BIconPlus:yg,BIconPlusCircle:_g,BIconPlusCircleFill:Mg,BIconPlusSquare:Ag,BIconPlusSquareFill:bg,BIconPower:Ig,BIconPrinter:Vg,BIconPrinterFill:wg,BIconPuzzle:Cg,BIconPuzzleFill:Hg,BIconQuestion:Lg,BIconQuestionCircle:kg,BIconQuestionCircleFill:Sg,BIconQuestionDiamond:Bg,BIconQuestionDiamondFill:Fg,BIconQuestionOctagon:Eg,BIconQuestionOctagonFill:Og,BIconQuestionSquare:Tg,BIconQuestionSquareFill:Pg,BIconReceipt:xg,BIconReceiptCutoff:Rg,BIconReception0:Ng,BIconReception1:jg,BIconReception2:Dg,BIconReception3:Ug,BIconReception4:qg,BIconRecord:$g,BIconRecord2:Wg,BIconRecord2Fill:Gg,BIconRecordBtn:Kg,BIconRecordBtnFill:Jg,BIconRecordCircle:Qg,BIconRecordCircleFill:Yg,BIconRecordFill:Xg,BIconReply:Zg,BIconReplyAll:ey,BIconReplyAllFill:ty,BIconReplyFill:ay,BIconRss:ny,BIconRssFill:ry,BIconScissors:iy,BIconScrewdriver:oy,BIconSearch:sy,BIconSegmentedNav:ly,BIconServer:cy,BIconShare:hy,BIconShareFill:uy,BIconShield:dy,BIconShieldCheck:py,BIconShieldExclamation:vy,BIconShieldFill:fy,BIconShieldFillCheck:my,BIconShieldFillExclamation:zy,BIconShieldFillMinus:gy,BIconShieldFillPlus:yy,BIconShieldFillX:_y,BIconShieldLock:My,BIconShieldLockFill:Ay,BIconShieldMinus:by,BIconShieldPlus:Iy,BIconShieldShaded:Vy,BIconShieldSlash:wy,BIconShieldSlashFill:Cy,BIconShieldX:Hy,BIconShift:Ly,BIconShiftFill:ky,BIconShop:Sy,BIconShopWindow:By,BIconShuffle:Fy,BIconSignpost:Ey,BIconSignpost2:Oy,BIconSignpost2Fill:Ty,BIconSignpostFill:Py,BIconSignpostSplit:xy,BIconSignpostSplitFill:Ry,BIconSim:Ny,BIconSimFill:jy,BIconSkipBackward:Dy,BIconSkipBackwardBtn:Uy,BIconSkipBackwardBtnFill:qy,BIconSkipBackwardCircle:$y,BIconSkipBackwardCircleFill:Wy,BIconSkipBackwardFill:Gy,BIconSkipEnd:Ky,BIconSkipEndBtn:Jy,BIconSkipEndBtnFill:Qy,BIconSkipEndCircle:Yy,BIconSkipEndCircleFill:Xy,BIconSkipEndFill:Zy,BIconSkipForward:e_,BIconSkipForwardBtn:t_,BIconSkipForwardBtnFill:a_,BIconSkipForwardCircle:n_,BIconSkipForwardCircleFill:r_,BIconSkipForwardFill:i_,BIconSkipStart:o_,BIconSkipStartBtn:s_,BIconSkipStartBtnFill:l_,BIconSkipStartCircle:c_,BIconSkipStartCircleFill:h_,BIconSkipStartFill:u_,BIconSlack:d_,BIconSlash:p_,BIconSlashCircle:v_,BIconSlashCircleFill:f_,BIconSlashSquare:m_,BIconSlashSquareFill:z_,BIconSliders:g_,BIconSmartwatch:y_,BIconSortAlphaDown:__,BIconSortAlphaDownAlt:M_,BIconSortAlphaUp:A_,BIconSortAlphaUpAlt:b_,BIconSortDown:I_,BIconSortDownAlt:V_,BIconSortNumericDown:w_,BIconSortNumericDownAlt:C_,BIconSortNumericUp:H_,BIconSortNumericUpAlt:L_,BIconSortUp:k_,BIconSortUpAlt:S_,BIconSoundwave:B_,BIconSpeaker:F_,BIconSpeakerFill:E_,BIconSpellcheck:O_,BIconSquare:T_,BIconSquareFill:P_,BIconSquareHalf:x_,BIconStar:R_,BIconStarFill:N_,BIconStarHalf:j_,BIconStickies:D_,BIconStickiesFill:U_,BIconSticky:q_,BIconStickyFill:$_,BIconStop:W_,BIconStopBtn:G_,BIconStopBtnFill:K_,BIconStopCircle:J_,BIconStopCircleFill:Q_,BIconStopFill:Y_,BIconStoplights:X_,BIconStoplightsFill:Z_,BIconStopwatch:eM,BIconStopwatchFill:tM,BIconSubtract:aM,BIconSuitClub:nM,BIconSuitClubFill:rM,BIconSuitDiamond:iM,BIconSuitDiamondFill:oM,BIconSuitHeart:sM,BIconSuitHeartFill:lM,BIconSuitSpade:cM,BIconSuitSpadeFill:hM,BIconSun:uM,BIconSunglasses:dM,BIconTable:pM,BIconTablet:vM,BIconTabletFill:fM,BIconTabletLandscape:mM,BIconTabletLandscapeFill:zM,BIconTag:gM,BIconTagFill:yM,BIconTags:_M,BIconTagsFill:MM,BIconTelephone:AM,BIconTelephoneFill:bM,BIconTelephoneForward:IM,BIconTelephoneForwardFill:VM,BIconTelephoneInbound:wM,BIconTelephoneInboundFill:CM,BIconTelephoneMinus:HM,BIconTelephoneMinusFill:LM,BIconTelephoneOutbound:kM,BIconTelephoneOutboundFill:SM,BIconTelephonePlus:BM,BIconTelephonePlusFill:FM,BIconTelephoneX:EM,BIconTelephoneXFill:OM,BIconTerminal:TM,BIconTerminalFill:PM,BIconTextCenter:xM,BIconTextIndentLeft:RM,BIconTextIndentRight:NM,BIconTextLeft:jM,BIconTextParagraph:DM,BIconTextRight:UM,BIconTextarea:qM,BIconTextareaResize:$M,BIconTextareaT:WM,BIconThermometer:GM,BIconThermometerHalf:KM,BIconThreeDots:JM,BIconThreeDotsVertical:QM,BIconToggle2Off:YM,BIconToggle2On:XM,BIconToggleOff:ZM,BIconToggleOn:eA,BIconToggles:tA,BIconToggles2:aA,BIconTools:nA,BIconTrash:rA,BIconTrash2:iA,BIconTrash2Fill:oA,BIconTrashFill:sA,BIconTree:lA,BIconTreeFill:cA,BIconTriangle:hA,BIconTriangleFill:uA,BIconTriangleHalf:dA,BIconTrophy:pA,BIconTrophyFill:vA,BIconTruck:fA,BIconTruckFlatbed:mA,BIconTv:zA,BIconTvFill:gA,BIconTwitch:yA,BIconTwitter:_A,BIconType:MA,BIconTypeBold:AA,BIconTypeH1:bA,BIconTypeH2:IA,BIconTypeH3:VA,BIconTypeItalic:wA,BIconTypeStrikethrough:CA,BIconTypeUnderline:HA,BIconUiChecks:LA,BIconUiChecksGrid:kA,BIconUiRadios:SA,BIconUiRadiosGrid:BA,BIconUnion:FA,BIconUnlock:EA,BIconUnlockFill:OA,BIconUpc:TA,BIconUpcScan:PA,BIconUpload:xA,BIconVectorPen:RA,BIconViewList:NA,BIconViewStacked:jA,BIconVinyl:DA,BIconVinylFill:UA,BIconVoicemail:qA,BIconVolumeDown:$A,BIconVolumeDownFill:WA,BIconVolumeMute:GA,BIconVolumeMuteFill:KA,BIconVolumeOff:JA,BIconVolumeOffFill:QA,BIconVolumeUp:YA,BIconVolumeUpFill:XA,BIconVr:ZA,BIconWallet:eb,BIconWallet2:tb,BIconWalletFill:ab,BIconWatch:nb,BIconWifi:rb,BIconWifi1:ib,BIconWifi2:ob,BIconWifiOff:sb,BIconWindow:lb,BIconWrench:cb,BIconX:hb,BIconXCircle:ub,BIconXCircleFill:db,BIconXDiamond:pb,BIconXDiamondFill:vb,BIconXOctagon:fb,BIconXOctagonFill:mb,BIconXSquare:zb,BIconXSquareFill:gb,BIconYoutube:yb,BIconZoomIn:_b,BIconZoomOut:Mb}}),Bb=ue({plugins:{IconsPlugin:Sb}},{NAME:"BootstrapVueIcons"})},b575:function(e,t,a){var n,r,i,o,s,l,c,h,u=a("da84"),d=a("0366"),p=a("06cf").f,v=a("2cf4").set,f=a("1cdc"),m=a("d4c3"),z=a("a4b4"),g=a("605d"),y=u.MutationObserver||u.WebKitMutationObserver,_=u.document,M=u.process,A=u.Promise,b=p(u,"queueMicrotask"),I=b&&b.value;I||(n=function(){var e,t;g&&(e=M.domain)&&e.exit();while(r){t=r.fn,r=r.next;try{t()}catch(a){throw r?o():i=void 0,a}}i=void 0,e&&e.enter()},f||g||z||!y||!_?!m&&A&&A.resolve?(c=A.resolve(void 0),c.constructor=A,h=d(c.then,c),o=function(){h(n)}):g?o=function(){M.nextTick(n)}:(v=d(v,u),o=function(){v(n)}):(s=!0,l=_.createTextNode(""),new y(n).observe(l,{characterData:!0}),o=function(){l.data=s=!s})),e.exports=I||function(e){var t={fn:e,next:void 0};i&&(i.next=t),r||(r=t,o()),i=t}},b622:function(e,t,a){var n=a("da84"),r=a("5692"),i=a("1a2d"),o=a("90e3"),s=a("4930"),l=a("fdbf"),c=r("wks"),h=n.Symbol,u=h&&h["for"],d=l?h:h&&h.withoutSetter||o;e.exports=function(e){if(!i(c,e)||!s&&"string"!=typeof c[e]){var t="Symbol."+e;s&&i(h,e)?c[e]=h[e]:c[e]=l&&u?u(t):d(t)}return c[e]}},b727:function(e,t,a){var n=a("0366"),r=a("e330"),i=a("44ad"),o=a("7b0b"),s=a("07fa"),l=a("65f0"),c=r([].push),h=function(e){var t=1==e,a=2==e,r=3==e,h=4==e,u=6==e,d=7==e,p=5==e||u;return function(v,f,m,z){for(var g,y,_=o(v),M=i(_),A=n(f,m),b=s(M),I=0,V=z||l,w=t?V(v,b):a||d?V(v,0):void 0;b>I;I++)if((p||I in M)&&(g=M[I],y=A(g,I,_),e))if(t)w[I]=y;else if(y)switch(e){case 3:return!0;case 5:return g;case 6:return I;case 2:c(w,g)}else switch(e){case 4:return!1;case 7:c(w,g)}return u?-1:r||h?h:w}};e.exports={forEach:h(0),map:h(1),filter:h(2),some:h(3),every:h(4),find:h(5),findIndex:h(6),filterReject:h(7)}},b85c:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("fb6a"),a("b0c0"),a("a630"),a("ac1f"),a("00b4");function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function r(e,t){if(e){if("string"===typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}function i(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=r(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==a["return"]||a["return"]()}finally{if(l)throw o}}}}},c04e:function(e,t,a){var n=a("da84"),r=a("c65b"),i=a("861d"),o=a("d9b5"),s=a("dc4a"),l=a("485a"),c=a("b622"),h=n.TypeError,u=c("toPrimitive");e.exports=function(e,t){if(!i(e)||o(e))return e;var a,n=s(e,u);if(n){if(void 0===t&&(t="default"),a=r(n,e,t),!i(a)||o(a))return a;throw h("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var a=Function.prototype.call;e.exports=a.bind?a.bind(a):function(){return a.apply(a,arguments)}},c6b6:function(e,t,a){var n=a("e330"),r=n({}.toString),i=n("".slice);e.exports=function(e){return i(r(e),8,-1)}},c6cd:function(e,t,a){var n=a("da84"),r=a("ce4e"),i="__core-js_shared__",o=n[i]||r(i,{});e.exports=o},c8ba:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"===typeof window&&(a=window)}e.exports=a},ca84:function(e,t,a){var n=a("e330"),r=a("1a2d"),i=a("fc6a"),o=a("4d64").indexOf,s=a("d012"),l=n([].push);e.exports=function(e,t){var a,n=i(e),c=0,h=[];for(a in n)!r(s,a)&&r(n,a)&&l(h,a);while(t.length>c)r(n,a=t[c++])&&(~o(h,a)||l(h,a));return h}},cc12:function(e,t,a){var n=a("da84"),r=a("861d"),i=n.document,o=r(i)&&r(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},cca6:function(e,t,a){var n=a("23e7"),r=a("60da");n({target:"Object",stat:!0,forced:Object.assign!==r},{assign:r})},cdf9:function(e,t,a){var n=a("825a"),r=a("861d"),i=a("f069");e.exports=function(e,t){if(n(e),r(t)&&t.constructor===e)return t;var a=i.f(e),o=a.resolve;return o(t),a.promise}},ce4e:function(e,t,a){var n=a("da84"),r=Object.defineProperty;e.exports=function(e,t){try{r(n,e,{value:t,configurable:!0,writable:!0})}catch(a){n[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,a){var n=a("da84"),r=a("1626"),i=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(n[e]):n[e]&&n[e][t]}},d1e7:function(e,t,a){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},d28b:function(e,t,a){var n=a("746f");n("iterator")},d2bb:function(e,t,a){var n=a("e330"),r=a("825a"),i=a("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,a={};try{e=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(a,[]),t=a instanceof Array}catch(o){}return function(a,n){return r(a),i(n),t?e(a,n):a.__proto__=n,a}}():void 0)},d3b7:function(e,t,a){var n=a("00ee"),r=a("6eeb"),i=a("b041");n||r(Object.prototype,"toString",i,{unsafe:!0})},d44e:function(e,t,a){var n=a("9bf2").f,r=a("1a2d"),i=a("b622"),o=i("toStringTag");e.exports=function(e,t,a){e&&!r(e=a?e:e.prototype,o)&&n(e,o,{configurable:!0,value:t})}},d4c3:function(e,t,a){var n=a("342f"),r=a("da84");e.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==r.Pebble},d9b5:function(e,t,a){var n=a("da84"),r=a("d066"),i=a("1626"),o=a("3a9b"),s=a("fdbf"),l=n.Object;e.exports=s?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&o(t.prototype,l(e))}},da84:function(e,t,a){(function(t){var a=function(e){return e&&e.Math==Math&&e};e.exports=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,a("c8ba"))},dc4a:function(e,t,a){var n=a("59ed");e.exports=function(e,t){var a=e[t];return null==a?void 0:n(a)}},ddb0:function(e,t,a){var n=a("da84"),r=a("fdbc"),i=a("785a"),o=a("e260"),s=a("9112"),l=a("b622"),c=l("iterator"),h=l("toStringTag"),u=o.values,d=function(e,t){if(e){if(e[c]!==u)try{s(e,c,u)}catch(n){e[c]=u}if(e[h]||s(e,h,t),r[t])for(var a in o)if(e[a]!==o[a])try{s(e,a,o[a])}catch(n){e[a]=o[a]}}};for(var p in r)d(n[p]&&n[p].prototype,p);d(i,"DOMTokenList")},df75:function(e,t,a){var n=a("ca84"),r=a("7839");e.exports=Object.keys||function(e){return n(e,r)}},df7c:function(e,t,a){(function(e){function a(e,t){for(var a=0,n=e.length-1;n>=0;n--){var r=e[n];"."===r?e.splice(n,1):".."===r?(e.splice(n,1),a++):a&&(e.splice(n,1),a--)}if(t)for(;a--;a)e.unshift("..");return e}function n(e){"string"!==typeof e&&(e+="");var t,a=0,n=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){a=t+1;break}}else-1===n&&(r=!1,n=t+1);return-1===n?"":e.slice(a,n)}function r(e,t){if(e.filter)return e.filter(t);for(var a=[],n=0;n<e.length;n++)t(e[n],n,e)&&a.push(e[n]);return a}t.resolve=function(){for(var t="",n=!1,i=arguments.length-1;i>=-1&&!n;i--){var o=i>=0?arguments[i]:e.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,n="/"===o.charAt(0))}return t=a(r(t.split("/"),(function(e){return!!e})),!n).join("/"),(n?"/":"")+t||"."},t.normalize=function(e){var n=t.isAbsolute(e),o="/"===i(e,-1);return e=a(r(e.split("/"),(function(e){return!!e})),!n).join("/"),e||n||(e="."),e&&o&&(e+="/"),(n?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,a){function n(e){for(var t=0;t<e.length;t++)if(""!==e[t])break;for(var a=e.length-1;a>=0;a--)if(""!==e[a])break;return t>a?[]:e.slice(t,a-t+1)}e=t.resolve(e).substr(1),a=t.resolve(a).substr(1);for(var r=n(e.split("/")),i=n(a.split("/")),o=Math.min(r.length,i.length),s=o,l=0;l<o;l++)if(r[l]!==i[l]){s=l;break}var c=[];for(l=s;l<r.length;l++)c.push("..");return c=c.concat(i.slice(s)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,r=!0,i=e.length-1;i>=1;--i)if(t=e.charCodeAt(i),47===t){if(!r){n=i;break}}else r=!1;return-1===n?a?"/":".":a&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var a=n(e);return t&&a.substr(-1*t.length)===t&&(a=a.substr(0,a.length-t.length)),a},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,a=0,n=-1,r=!0,i=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47!==s)-1===n&&(r=!1,n=o+1),46===s?-1===t?t=o:1!==i&&(i=1):-1!==t&&(i=-1);else if(!r){a=o+1;break}}return-1===t||-1===n||0===i||1===i&&t===n-1&&t===a+1?"":e.slice(t,n)};var i="b"==="ab".substr(-1)?function(e,t,a){return e.substr(t,a)}:function(e,t,a){return t<0&&(t=e.length+t),e.substr(t,a)}}).call(this,a("4362"))},e01a:function(e,t,a){"use strict";var n=a("23e7"),r=a("83ab"),i=a("da84"),o=a("e330"),s=a("1a2d"),l=a("1626"),c=a("3a9b"),h=a("577e"),u=a("9bf2").f,d=a("e893"),p=i.Symbol,v=p&&p.prototype;if(r&&l(p)&&(!("description"in v)||void 0!==p().description)){var f={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:h(arguments[0]),t=c(v,this)?new p(e):void 0===e?p():p(e);return""===e&&(f[t]=!0),t};d(m,p),m.prototype=v,v.constructor=m;var z="Symbol(test)"==String(p("test")),g=o(v.toString),y=o(v.valueOf),_=/^Symbol\((.*)\)[^)]+$/,M=o("".replace),A=o("".slice);u(v,"description",{configurable:!0,get:function(){var e=y(this),t=g(e);if(s(f,e))return"";var a=z?A(t,7,-1):M(t,_,"$1");return""===a?void 0:a}}),n({global:!0,forced:!0},{Symbol:m})}},e163:function(e,t,a){var n=a("da84"),r=a("1a2d"),i=a("1626"),o=a("7b0b"),s=a("f772"),l=a("e177"),c=s("IE_PROTO"),h=n.Object,u=h.prototype;e.exports=l?h.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var a=t.constructor;return i(a)&&t instanceof a?a.prototype:t instanceof h?u:null}},e177:function(e,t,a){var n=a("d039");e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,a){"use strict";var n=a("fc6a"),r=a("44d2"),i=a("3f8c"),o=a("69f3"),s=a("7dd0"),l="Array Iterator",c=o.set,h=o.getterFor(l);e.exports=s(Array,"Array",(function(e,t){c(this,{type:l,target:n(e),index:0,kind:t})}),(function(){var e=h(this),t=e.target,a=e.kind,n=e.index++;return!t||n>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==a?{value:n,done:!1}:"values"==a?{value:t[n],done:!1}:{value:[n,t[n]],done:!1}}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},e2cc:function(e,t,a){var n=a("6eeb");e.exports=function(e,t,a){for(var r in t)n(e,r,t[r],a);return e}},e330:function(e,t){var a=Function.prototype,n=a.bind,r=a.call,i=n&&n.bind(r);e.exports=n?function(e){return e&&i(r,e)}:function(e){return e&&function(){return r.apply(e,arguments)}}},e538:function(e,t,a){var n=a("b622");t.f=n},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return u}));
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
const n=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const i={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,s={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},l=(e,t,...a)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=s[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...a)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,n.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?i[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function h(e){n.forEach(t=>{t.setLogLevel(e)})}function u(e,t){for(const a of n){let n=null;t&&t.level&&(n=i[t.level]),a.userLogHandler=null===e?null:(t,a,...i)=>{const o=i.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");a>=(null!==n&&void 0!==n?n:t.logLevel)&&e({level:r[a].toLowerCase(),message:o,args:i,type:t.name})}}}},e6cf:function(e,t,a){"use strict";var n,r,i,o,s=a("23e7"),l=a("c430"),c=a("da84"),h=a("d066"),u=a("c65b"),d=a("fea9"),p=a("6eeb"),v=a("e2cc"),f=a("d2bb"),m=a("d44e"),z=a("2626"),g=a("59ed"),y=a("1626"),_=a("861d"),M=a("19aa"),A=a("8925"),b=a("2266"),I=a("1c7e"),V=a("4840"),w=a("2cf4").set,C=a("b575"),H=a("cdf9"),L=a("44de"),k=a("f069"),S=a("e667"),B=a("69f3"),F=a("94ca"),E=a("b622"),O=a("6069"),T=a("605d"),P=a("2d00"),x=E("species"),R="Promise",N=B.get,j=B.set,D=B.getterFor(R),U=d&&d.prototype,q=d,$=U,W=c.TypeError,G=c.document,K=c.process,J=k.f,Q=J,Y=!!(G&&G.createEvent&&c.dispatchEvent),X=y(c.PromiseRejectionEvent),Z="unhandledrejection",ee="rejectionhandled",te=0,ae=1,ne=2,re=1,ie=2,oe=!1,se=F(R,(function(){var e=A(q),t=e!==String(q);if(!t&&66===P)return!0;if(l&&!$["finally"])return!0;if(P>=51&&/native code/.test(e))return!1;var a=new q((function(e){e(1)})),n=function(e){e((function(){}),(function(){}))},r=a.constructor={};return r[x]=n,oe=a.then((function(){}))instanceof n,!oe||!t&&O&&!X})),le=se||!I((function(e){q.all(e)["catch"]((function(){}))})),ce=function(e){var t;return!(!_(e)||!y(t=e.then))&&t},he=function(e,t){if(!e.notified){e.notified=!0;var a=e.reactions;C((function(){var n=e.value,r=e.state==ae,i=0;while(a.length>i){var o,s,l,c=a[i++],h=r?c.ok:c.fail,d=c.resolve,p=c.reject,v=c.domain;try{h?(r||(e.rejection===ie&&ve(e),e.rejection=re),!0===h?o=n:(v&&v.enter(),o=h(n),v&&(v.exit(),l=!0)),o===c.promise?p(W("Promise-chain cycle")):(s=ce(o))?u(s,o,d,p):d(o)):p(n)}catch(f){v&&!l&&v.exit(),p(f)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&de(e)}))}},ue=function(e,t,a){var n,r;Y?(n=G.createEvent("Event"),n.promise=t,n.reason=a,n.initEvent(e,!1,!0),c.dispatchEvent(n)):n={promise:t,reason:a},!X&&(r=c["on"+e])?r(n):e===Z&&L("Unhandled promise rejection",a)},de=function(e){u(w,c,(function(){var t,a=e.facade,n=e.value,r=pe(e);if(r&&(t=S((function(){T?K.emit("unhandledRejection",n,a):ue(Z,a,n)})),e.rejection=T||pe(e)?ie:re,t.error))throw t.value}))},pe=function(e){return e.rejection!==re&&!e.parent},ve=function(e){u(w,c,(function(){var t=e.facade;T?K.emit("rejectionHandled",t):ue(ee,t,e.value)}))},fe=function(e,t,a){return function(n){e(t,n,a)}},me=function(e,t,a){e.done||(e.done=!0,a&&(e=a),e.value=t,e.state=ne,he(e,!0))},ze=function(e,t,a){if(!e.done){e.done=!0,a&&(e=a);try{if(e.facade===t)throw W("Promise can't be resolved itself");var n=ce(t);n?C((function(){var a={done:!1};try{u(n,t,fe(ze,a,e),fe(me,a,e))}catch(r){me(a,r,e)}})):(e.value=t,e.state=ae,he(e,!1))}catch(r){me({done:!1},r,e)}}};if(se&&(q=function(e){M(this,$),g(e),u(n,this);var t=N(this);try{e(fe(ze,t),fe(me,t))}catch(a){me(t,a)}},$=q.prototype,n=function(e){j(this,{type:R,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:te,value:void 0})},n.prototype=v($,{then:function(e,t){var a=D(this),n=a.reactions,r=J(V(this,q));return r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=T?K.domain:void 0,a.parent=!0,n[n.length]=r,a.state!=te&&he(a,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),r=function(){var e=new n,t=N(e);this.promise=e,this.resolve=fe(ze,t),this.reject=fe(me,t)},k.f=J=function(e){return e===q||e===i?new r(e):Q(e)},!l&&y(d)&&U!==Object.prototype)){o=U.then,oe||(p(U,"then",(function(e,t){var a=this;return new q((function(e,t){u(o,a,e,t)})).then(e,t)}),{unsafe:!0}),p(U,"catch",$["catch"],{unsafe:!0}));try{delete U.constructor}catch(ge){}f&&f(U,$)}s({global:!0,wrap:!0,forced:se},{Promise:q}),m(q,R,!1,!0),z(R),i=h(R),s({target:R,stat:!0,forced:se},{reject:function(e){var t=J(this);return u(t.reject,void 0,e),t.promise}}),s({target:R,stat:!0,forced:l||se},{resolve:function(e){return H(l&&this===i?q:this,e)}}),s({target:R,stat:!0,forced:le},{all:function(e){var t=this,a=J(t),n=a.resolve,r=a.reject,i=S((function(){var a=g(t.resolve),i=[],o=0,s=1;b(e,(function(e){var l=o++,c=!1;s++,u(a,t,e).then((function(e){c||(c=!0,i[l]=e,--s||n(i))}),r)})),--s||n(i)}));return i.error&&r(i.value),a.promise},race:function(e){var t=this,a=J(t),n=a.reject,r=S((function(){var r=g(t.resolve);b(e,(function(e){u(r,t,e).then(a.resolve,n)}))}));return r.error&&n(r.value),a.promise}})},e893:function(e,t,a){var n=a("1a2d"),r=a("56ef"),i=a("06cf"),o=a("9bf2");e.exports=function(e,t){for(var a=r(t),s=o.f,l=i.f,c=0;c<a.length;c++){var h=a[c];n(e,h)||s(e,h,l(t,h))}}},e8b5:function(e,t,a){var n=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}},e95a:function(e,t,a){var n=a("b622"),r=a("3f8c"),i=n("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(r.Array===e||o[i]===e)}},f069:function(e,t,a){"use strict";var n=a("59ed"),r=function(e){var t,a;this.promise=new e((function(e,n){if(void 0!==t||void 0!==a)throw TypeError("Bad Promise constructor");t=e,a=n})),this.resolve=n(t),this.reject=n(a)};e.exports.f=function(e){return new r(e)}},f36a:function(e,t,a){var n=a("e330");e.exports=n([].slice)},f5df:function(e,t,a){var n=a("da84"),r=a("00ee"),i=a("1626"),o=a("c6b6"),s=a("b622"),l=s("toStringTag"),c=n.Object,h="Arguments"==o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(a){}};e.exports=r?o:function(e){var t,a,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=u(t=c(e),l))?a:h?o(t):"Object"==(n=o(t))&&i(t.callee)?"Arguments":n}},f772:function(e,t,a){var n=a("5692"),r=a("90e3"),i=n("keys");e.exports=function(e){return i[e]||(i[e]=r(e))}},fb6a:function(e,t,a){"use strict";var n=a("23e7"),r=a("da84"),i=a("e8b5"),o=a("68ee"),s=a("861d"),l=a("23cb"),c=a("07fa"),h=a("fc6a"),u=a("8418"),d=a("b622"),p=a("1dde"),v=a("f36a"),f=p("slice"),m=d("species"),z=r.Array,g=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(e,t){var a,n,r,d=h(this),p=c(d),f=l(e,p),y=l(void 0===t?p:t,p);if(i(d)&&(a=d.constructor,o(a)&&(a===z||i(a.prototype))?a=void 0:s(a)&&(a=a[m],null===a&&(a=void 0)),a===z||void 0===a))return v(d,f,y);for(n=new(void 0===a?z:a)(g(y-f,0)),r=0;f<y;f++,r++)f in d&&u(n,r,d[f]);return n.length=r,n}})},fc6a:function(e,t,a){var n=a("44ad"),r=a("1d80");e.exports=function(e){return n(r(e))}},fce3:function(e,t,a){var n=a("d039"),r=a("da84"),i=r.RegExp;e.exports=n((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,a){var n=a("4930");e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,a){var n=a("da84");e.exports=n.Promise}}]);
//# sourceMappingURL=chunk-vendors.bde58f49.js.map