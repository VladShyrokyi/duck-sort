(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Lf=()=>{};var pl={};/**
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
 */const $c={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const V=function(n,e){if(!n)throw zn(e)},zn=function(n){return new Error("Firebase Database ("+$c.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Gc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ff=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],l=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,l=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,h=u&63;c||(h=64,o||(d=64)),i.push(t[f],t[g],t[d],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Gc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ff(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const g=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||u==null||g==null)throw new Uf;const d=s<<2|l>>4;if(i.push(d),u!==64){const h=l<<4&240|u>>2;if(i.push(h),g!==64){const m=u<<6&192|g;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zc=function(n){const e=Gc(n);return Ao.encodeByteArray(e,!0)},bs=function(n){return zc(n).replace(/\./g,"")},Rs=function(n){try{return Ao.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vf(n){return qc(void 0,n)}function qc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Bf(t)||(n[t]=qc(n[t],e[t]));return n}function Bf(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=()=>Hf().__FIREBASE_DEFAULTS__,jf=()=>{if(typeof process>"u"||typeof pl>"u")return;const n=pl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$f=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rs(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return Lf()||Wf()||jf()||$f()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Kc=n=>Po()?.emulatorHosts?.[n],Yc=n=>{const e=Kc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Jc=()=>Po()?.config,Xc=n=>Po()?.[`_${n}`];/**
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
 */class tt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Qc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[bs(JSON.stringify(t)),bs(JSON.stringify(o)),""].join(".")}const Ii={};function Gf(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ii))Ii[e]?n.emulator.push(e):n.prod.push(e);return n}function zf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let gl=!1;function Ro(n,e){if(typeof window>"u"||typeof document>"u"||!gn(window.location.host)||Ii[n]===e||Ii[n]||gl)return;Ii[n]=e;function t(d){return`__firebase__banner__${d}`}const i="__firebase__banner",s=Gf().prod.length>0;function o(){const d=document.getElementById(i);d&&d.remove()}function l(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function c(d,h){d.setAttribute("width","24"),d.setAttribute("id",h),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function u(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{gl=!0,o()},d}function f(d,h){d.setAttribute("id",h),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function g(){const d=zf(i),h=t("text"),m=document.getElementById(h)||document.createElement("span"),_=t("learnmore"),w=document.getElementById(_)||document.createElement("a"),R=t("preprendIcon"),P=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const N=d.element;l(N),f(w,_);const D=u();c(P,R),N.append(P,m,w,D),document.body.appendChild(N)}s?(m.innerText="Preview backend disconnected.",P.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(P.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ko(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function qf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yf(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Jf(){return $c.NODE_ADMIN===!0}function Xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Qf(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
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
 */const Zf="FirebaseError";class _t extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Zf,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wi.prototype.create)}}class Wi{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?ed(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new _t(r,l,i)}}function ed(n,e){return n.replace(td,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const td=/\{\$([^}]+)}/g;/**
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
 */function ki(n){return JSON.parse(n)}function ye(n){return JSON.stringify(n)}/**
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
 */const eh=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=ki(Rs(s[0])||""),t=ki(Rs(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},nd=function(n){const e=eh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},id=function(n){const e=eh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ot(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Fn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ks(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ns(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Vt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(ml(s)&&ml(o)){if(!Vt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function ml(n){return n!==null&&typeof n=="object"}/**
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
 */function qn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class sd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)i[g]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let g=0;g<16;g++)i[g]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let g=16;g<80;g++){const d=i[g-3]^i[g-8]^i[g-14]^i[g-16];i[g]=(d<<1|d>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,f;for(let g=0;g<80;g++){g<40?g<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):g<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(r<<5|r>>>27)+u+c+f+i[g]&4294967295;c=l,l=o,o=(s<<30|s>>>2)&4294967295,s=r,r=d}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function rd(n,e){const t=new od(n,e);return t.subscribe.bind(t)}class od{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");ad(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Vr),r.error===void 0&&(r.error=Vr),r.complete===void 0&&(r.complete=Vr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ad(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vr(){}function Un(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ld=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,V(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},tr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Oe(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class cd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new tt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ud(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:hd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hd(n){return n===Qt?void 0:n}function ud(n){return n.instantiationMode==="EAGER"}/**
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
 */class fd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const dd={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},pd=ne.INFO,gd={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},md=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=gd[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nr{constructor(e){this.name=e,this._logLevel=pd,this._logHandler=md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const _d=(n,e)=>e.some(t=>n instanceof t);let _l,vl;function vd(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yd(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const th=new WeakMap,so=new WeakMap,nh=new WeakMap,Br=new WeakMap,No=new WeakMap;function wd(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Mt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&th.set(t,n)}).catch(()=>{}),No.set(e,n),e}function Id(n){if(so.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});so.set(n,e)}let ro={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return so.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Sd(n){ro=n(ro)}function Cd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Hr(this),e,...t);return nh.set(i,e.sort?e.sort():[e]),Mt(i)}:yd().includes(n)?function(...e){return n.apply(Hr(this),e),Mt(th.get(this))}:function(...e){return Mt(n.apply(Hr(this),e))}}function Ed(n){return typeof n=="function"?Cd(n):(n instanceof IDBTransaction&&Id(n),_d(n,vd())?new Proxy(n,ro):n)}function Mt(n){if(n instanceof IDBRequest)return wd(n);if(Br.has(n))return Br.get(n);const e=Ed(n);return e!==n&&(Br.set(n,e),No.set(e,n)),e}const Hr=n=>No.get(n);function Td(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),l=Mt(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const xd=["get","getKey","getAll","getAllKeys","count"],Ad=["put","add","delete","clear"],Wr=new Map;function yl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wr.get(e))return Wr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Ad.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||xd.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),r&&c.done]))[0]};return Wr.set(e,s),s}Sd(n=>({...n,get:(e,t,i)=>yl(e,t)||n.get(e,t,i),has:(e,t)=>!!yl(e,t)||n.has(e,t)}));/**
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
 */class Pd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function bd(n){return n.getComponent()?.type==="VERSION"}const oo="@firebase/app",wl="0.14.4";/**
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
 */const dt=new nr("@firebase/app"),Rd="@firebase/app-compat",kd="@firebase/analytics-compat",Nd="@firebase/analytics",Dd="@firebase/app-check-compat",Md="@firebase/app-check",Od="@firebase/auth",Ld="@firebase/auth-compat",Fd="@firebase/database",Ud="@firebase/data-connect",Vd="@firebase/database-compat",Bd="@firebase/functions",Hd="@firebase/functions-compat",Wd="@firebase/installations",jd="@firebase/installations-compat",$d="@firebase/messaging",Gd="@firebase/messaging-compat",zd="@firebase/performance",qd="@firebase/performance-compat",Kd="@firebase/remote-config",Yd="@firebase/remote-config-compat",Jd="@firebase/storage",Xd="@firebase/storage-compat",Qd="@firebase/firestore",Zd="@firebase/ai",ep="@firebase/firestore-compat",tp="firebase",np="12.4.0";/**
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
 */const ao="[DEFAULT]",ip={[oo]:"fire-core",[Rd]:"fire-core-compat",[Nd]:"fire-analytics",[kd]:"fire-analytics-compat",[Md]:"fire-app-check",[Dd]:"fire-app-check-compat",[Od]:"fire-auth",[Ld]:"fire-auth-compat",[Fd]:"fire-rtdb",[Ud]:"fire-data-connect",[Vd]:"fire-rtdb-compat",[Bd]:"fire-fn",[Hd]:"fire-fn-compat",[Wd]:"fire-iid",[jd]:"fire-iid-compat",[$d]:"fire-fcm",[Gd]:"fire-fcm-compat",[zd]:"fire-perf",[qd]:"fire-perf-compat",[Kd]:"fire-rc",[Yd]:"fire-rc-compat",[Jd]:"fire-gcs",[Xd]:"fire-gcs-compat",[Qd]:"fire-fst",[ep]:"fire-fst-compat",[Zd]:"fire-vertex","fire-js":"fire-js",[tp]:"fire-js-all"};/**
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
 */const Ds=new Map,sp=new Map,lo=new Map;function Il(n,e){try{n.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ln(n){const e=n.name;if(lo.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;lo.set(e,n);for(const t of Ds.values())Il(t,n);for(const t of sp.values())Il(t,n);return!0}function ir(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function He(n){return n==null?!1:n.settings!==void 0}/**
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
 */const rp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new Wi("app","Firebase",rp);/**
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
 */class op{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const mn=np;function ih(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ao,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw Ot.create("bad-app-name",{appName:String(r)});if(t||(t=Jc()),!t)throw Ot.create("no-options");const s=Ds.get(r);if(s){if(Vt(t,s.options)&&Vt(i,s.config))return s;throw Ot.create("duplicate-app",{appName:r})}const o=new fd(r);for(const c of lo.values())o.addComponent(c);const l=new op(t,i,o);return Ds.set(r,l),l}function Do(n=ao){const e=Ds.get(n);if(!e&&n===ao&&Jc())return ih();if(!e)throw Ot.create("no-app",{appName:n});return e}function it(n,e,t){let i=ip[n]??n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(o.join(" "));return}ln(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ap="firebase-heartbeat-database",lp=1,Ni="firebase-heartbeat-store";let jr=null;function sh(){return jr||(jr=Td(ap,lp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ni)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ot.create("idb-open",{originalErrorMessage:n.message})})),jr}async function cp(n){try{const t=(await sh()).transaction(Ni),i=await t.objectStore(Ni).get(rh(n));return await t.done,i}catch(e){if(e instanceof _t)dt.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e?.message});dt.warn(t.message)}}}async function Sl(n,e){try{const i=(await sh()).transaction(Ni,"readwrite");await i.objectStore(Ni).put(e,rh(n)),await i.done}catch(t){if(t instanceof _t)dt.warn(t.message);else{const i=Ot.create("idb-set",{originalErrorMessage:t?.message});dt.warn(i.message)}}}function rh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hp=1024,up=30;class fp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pp(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cl();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>up){const r=gp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){dt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cl(),{heartbeatsToSend:t,unsentEntries:i}=dp(this._heartbeatsCache.heartbeats),r=bs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return dt.warn(e),""}}}function Cl(){return new Date().toISOString().substring(0,10)}function dp(n,e=hp){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),El(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),El(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class pp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xf()?Qf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Sl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Sl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function El(n){return bs(JSON.stringify({version:2,heartbeats:n})).length}function gp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function mp(n){ln(new Bt("platform-logger",e=>new Pd(e),"PRIVATE")),ln(new Bt("heartbeat",e=>new fp(e),"PRIVATE")),it(oo,wl,n),it(oo,wl,"esm2020"),it("fire-js","")}mp("");var _p="firebase",vp="12.4.0";/**
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
 */it(_p,vp,"app");function oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yp=oh,ah=new Wi("auth","Firebase",oh());/**
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
 */const Ms=new nr("@firebase/auth");function wp(n,...e){Ms.logLevel<=ne.WARN&&Ms.warn(`Auth (${mn}): ${n}`,...e)}function Ss(n,...e){Ms.logLevel<=ne.ERROR&&Ms.error(`Auth (${mn}): ${n}`,...e)}/**
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
 */function pt(n,...e){throw Mo(n,...e)}function st(n,...e){return Mo(n,...e)}function lh(n,e,t){const i={...yp(),[e]:t};return new Wi("auth","Firebase",i).create(e,{appName:n.name})}function Lt(n){return lh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mo(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ah.create(n,...e)}function $(n,e,...t){if(!n)throw Mo(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ss(e),new Error(e)}function gt(n,e){n||ct(e)}/**
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
 */function co(){return typeof self<"u"&&self.location?.href||""}function Ip(){return Tl()==="http:"||Tl()==="https:"}function Tl(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Sp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ip()||Kf()||"connection"in navigator)?navigator.onLine:!0}function Cp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ji{constructor(e,t){this.shortDelay=e,this.longDelay=t,gt(t>e,"Short delay should be less than long delay!"),this.isMobile=ko()||Zc()}get(){return Sp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oo(n,e){gt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ch{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ep={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xp=new ji(3e4,6e4);function sr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Kn(n,e,t,i,r={}){return hh(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const l=qn({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...s};return qf()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&gn(n.emulatorConfig.host)&&(u.credentials="include"),ch.fetch()(await fh(n,n.config.apiHost,t,l),u)})}async function hh(n,e,t){n._canInitEmulator=!1;const i={...Ep,...e};try{const r=new Ap(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fs(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fs(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw fs(n,"user-disabled",o);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lh(n,f,u);pt(n,f)}}catch(r){if(r instanceof _t)throw r;pt(n,"network-request-failed",{message:String(r)})}}async function uh(n,e,t,i,r={}){const s=await Kn(n,e,t,i,r);return"mfaPendingCredential"in s&&pt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function fh(n,e,t,i){const r=`${e}${t}?${i}`,s=n,o=s.config.emulator?Oo(n.config,r):`${n.config.apiScheme}://${r}`;return Tp.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Ap{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(st(this.auth,"network-request-failed")),xp.get())})}}function fs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=st(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function Pp(n,e){return Kn(n,"POST","/v1/accounts:delete",e)}async function Os(n,e){return Kn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Si(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bp(n,e=!1){const t=Oe(n),i=await t.getIdToken(e),r=Lo(i);$(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:Si($r(r.auth_time)),issuedAtTime:Si($r(r.iat)),expirationTime:Si($r(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function $r(n){return Number(n)*1e3}function Lo(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const r=Rs(t);return r?JSON.parse(r):(Ss("Failed to decode base64 JWT payload"),null)}catch(r){return Ss("Caught error parsing JWT payload as JSON",r?.toString()),null}}function xl(n){const e=Lo(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Di(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof _t&&Rp(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Rp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class kp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ho{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ls(n){const e=n.auth,t=await n.getIdToken(),i=await Di(n,Os(e,{idToken:t}));$(i?.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const s=r.providerUserInfo?.length?dh(r.providerUserInfo):[],o=Dp(n.providerData,s),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!o?.length,u=l?c:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ho(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,f)}async function Np(n){const e=Oe(n);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Dp(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function dh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Mp(n,e){const t=await hh(n,{},async()=>{const i=qn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=await fh(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:i};return n.emulatorConfig&&gn(n.emulatorConfig.host)&&(c.credentials="include"),ch.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Op(n,e){return Kn(n,"POST","/v2/accounts:revokeToken",sr(n,e))}/**
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
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=xl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Mp(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new kn;return i&&($(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function At(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ze{constructor({uid:e,auth:t,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new kp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ho(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Di(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bp(this,e)}reload(){return Np(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ls(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await Di(this,Pp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:g,emailVerified:d,isAnonymous:h,providerData:m,stsTokenManager:_}=t;$(g&&_,e,"internal-error");const w=kn.fromJSON(this.name,_);$(typeof g=="string",e,"internal-error"),At(i,e.name),At(r,e.name),$(typeof d=="boolean",e,"internal-error"),$(typeof h=="boolean",e,"internal-error"),At(s,e.name),At(o,e.name),At(l,e.name),At(c,e.name),At(u,e.name),At(f,e.name);const R=new ze({uid:g,auth:e,email:r,emailVerified:d,displayName:i,isAnonymous:h,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:w,createdAt:u,lastLoginAt:f});return m&&Array.isArray(m)&&(R.providerData=m.map(P=>({...P}))),c&&(R._redirectEventId=c),R}static async _fromIdTokenResponse(e,t,i=!1){const r=new kn;r.updateFromServerResponse(t);const s=new ze({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ls(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];$(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?dh(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!s?.length,l=new kn;l.updateFromIdToken(i);const c=new ze({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ho(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(c,u),c}}/**
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
 */const Al=new Map;function ht(n){gt(n instanceof Function,"Expected a class definition");let e=Al.get(n);return e?(gt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Al.set(n,e),e)}/**
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
 */class ph{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ph.type="NONE";const Pl=ph;/**
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
 */function Cs(n,e,t){return`firebase:${n}:${e}:${t}`}class Nn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,s),this.fullPersistenceKey=Cs("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Os(this.auth,{idToken:e}).catch(()=>{});return t?ze._fromGetAccountInfoResponse(this.auth,t,e):null}return ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Nn(ht(Pl),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||ht(Pl);const o=Cs(i,e.config.apiKey,e.name);let l=null;for(const u of t)try{const f=await u._get(o);if(f){let g;if(typeof f=="string"){const d=await Os(e,{idToken:f}).catch(()=>{});if(!d)break;g=await ze._fromGetAccountInfoResponse(e,d,f)}else g=ze._fromJSON(e,f);u!==s&&(l=g),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Nn(s,e,i):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Nn(s,e,i))}}/**
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
 */function bl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(Ih(e))return"Webos";if(mh(e))return"Safari";if((e.includes("chrome/")||_h(e))&&!e.includes("edge/"))return"Chrome";if(yh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function gh(n=Me()){return/firefox\//i.test(n)}function mh(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _h(n=Me()){return/crios\//i.test(n)}function vh(n=Me()){return/iemobile/i.test(n)}function yh(n=Me()){return/android/i.test(n)}function wh(n=Me()){return/blackberry/i.test(n)}function Ih(n=Me()){return/webos/i.test(n)}function Fo(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Lp(n=Me()){return Fo(n)&&!!window.navigator?.standalone}function Fp(){return Yf()&&document.documentMode===10}function Sh(n=Me()){return Fo(n)||yh(n)||Ih(n)||wh(n)||/windows phone/i.test(n)||vh(n)}/**
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
 */function Ch(n,e=[]){let t;switch(n){case"Browser":t=bl(Me());break;case"Worker":t=`${bl(Me())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(n,e={}){return Kn(n,"GET","/v2/passwordPolicy",sr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=6;class Hp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Bp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Wp{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rl(this),this.idTokenSubscription=new Rl(this),this.beforeStateQueue=new Up(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ah,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Nn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Os(this,{idToken:e}),i=await ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(He(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===o)&&l?.user&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ls(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(Lt(this));const t=e?Oe(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Vp(this),t=new Hp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wi("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Op(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ch(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&wp(`Error while retrieving App Check token: ${e.error}`),e?.token}}function rr(n){return Oe(n)}class Rl{constructor(e){this.auth=e,this.observer=null,this.addObserver=rd(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jp(n){Uo=n}function $p(n){return Uo.loadJS(n)}function Gp(){return Uo.gapiScript}function zp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qp(n,e){const t=ir(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Vt(s,e??{}))return r;pt(r,"already-initialized")}return t.initialize({options:e})}function Kp(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(ht);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Eh(n,e,t){const i=rr(n);$(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Th(e),{host:o,port:l}=Yp(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){$(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),$(Vt(u,i.config.emulator)&&Vt(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,gn(o)?(bo(`${s}//${o}${c}`),Ro("Auth",!0)):Jp()}function Th(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yp(n){const e=Th(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:kl(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:kl(o)}}}function kl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class xh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
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
 */async function Dn(n,e){return uh(n,"POST","/v1/accounts:signInWithIdp",sr(n,e))}/**
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
 */const Xp="http://localhost";class cn extends xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=t;if(!i||!r)return null;const o=new cn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Dn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Dn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dn(e,t)}buildRequest(){const e={requestUri:Xp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qn(t)}return e}}/**
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
 */class Ah{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class $i extends Ah{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends $i{constructor(){super("facebook.com")}static credential(e){return cn._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Rt.credential(t,i)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class kt extends $i{constructor(){super("github.com")}static credential(e){return cn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Nt extends $i{constructor(){super("twitter.com")}static credential(e,t){return cn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Nt.credential(t,i)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */async function Qp(n,e){return uh(n,"POST","/v1/accounts:signUp",sr(n,e))}/**
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
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await ze._fromIdTokenResponse(e,i,r),o=Nl(i);return new Ht({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Nl(i);return new Ht({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Nl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function Zp(n){if(He(n.app))return Promise.reject(Lt(n));const e=rr(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Ht({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Qp(e,{returnSecureToken:!0}),i=await Ht._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class Fs extends _t{constructor(e,t,i,r){super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Fs(e,t,i,r)}}function Ph(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(n,s,e,i):s})}async function eg(n,e,t=!1){const i=await Di(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ht._forOperation(n,"link",i)}/**
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
 */async function tg(n,e,t=!1){const{auth:i}=n;if(He(i.app))return Promise.reject(Lt(i));const r="reauthenticate";try{const s=await Di(n,Ph(i,r,e,n),t);$(s.idToken,i,"internal-error");const o=Lo(s.idToken);$(o,i,"internal-error");const{sub:l}=o;return $(n.uid===l,i,"user-mismatch"),Ht._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&pt(i,"user-mismatch"),s}}/**
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
 */async function ng(n,e,t=!1){if(He(n.app))return Promise.reject(Lt(n));const i="signIn",r=await Ph(n,i,e),s=await Ht._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function ig(n,e,t,i){return Oe(n).onIdTokenChanged(e,t,i)}function sg(n,e,t){return Oe(n).beforeAuthStateChanged(e,t)}function rg(n,e,t,i){return Oe(n).onAuthStateChanged(e,t,i)}const Us="__sak";/**
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
 */class bh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Us,"1"),this.storage.removeItem(Us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const og=1e3,ag=10;class Rh extends bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Fp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ag):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rh.type="LOCAL";const lg=Rh;/**
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
 */class kh extends bh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kh.type="SESSION";const Nh=kh;/**
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
 */function cg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new or(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async u=>u(t.origin,s)),c=await cg(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}or.receivers=[];/**
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
 */function Vo(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=Vo("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(g){const d=g;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rt(){return window}function ug(n){rt().location.href=n}/**
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
 */function Dh(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function fg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dg(){return navigator?.serviceWorker?.controller||null}function pg(){return Dh()?self:null}/**
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
 */const Mh="firebaseLocalStorageDb",gg=1,Vs="firebaseLocalStorage",Oh="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ar(n,e){return n.transaction([Vs],e?"readwrite":"readonly").objectStore(Vs)}function mg(){const n=indexedDB.deleteDatabase(Mh);return new Gi(n).toPromise()}function uo(){const n=indexedDB.open(Mh,gg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Vs,{keyPath:Oh})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Vs)?e(i):(i.close(),await mg(),e(await uo()))})})}async function Dl(n,e,t){const i=ar(n,!0).put({[Oh]:e,value:t});return new Gi(i).toPromise()}async function _g(n,e){const t=ar(n,!1).get(e),i=await new Gi(t).toPromise();return i===void 0?null:i.value}function Ml(n,e){const t=ar(n,!0).delete(e);return new Gi(t).toPromise()}const vg=800,yg=3;class Lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>yg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=or._getInstance(pg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await fg(),!this.activeServiceWorker)return;this.sender=new hg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uo();return await Dl(e,Us,"1"),await Ml(e,Us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Dl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>_g(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ml(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ar(r,!1).getAll();return new Gi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lh.type="LOCAL";const wg=Lh;new ji(3e4,6e4);/**
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
 */function Ig(n,e){return e?ht(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Bo extends xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sg(n){return ng(n.auth,new Bo(n),n.bypassAuthState)}function Cg(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),tg(t,new Bo(n),n.bypassAuthState)}async function Eg(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),eg(t,new Bo(n),n.bypassAuthState)}/**
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
 */class Fh{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sg;case"linkViaPopup":case"linkViaRedirect":return Eg;case"reauthViaPopup":case"reauthViaRedirect":return Cg;default:pt(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tg=new ji(2e3,1e4);class bn extends Fh{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Vo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tg.get())};e()}}bn.currentPopupAction=null;/**
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
 */const xg="pendingRedirect",Es=new Map;class Ag extends Fh{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Es.get(this.auth._key());if(!e){try{const i=await Pg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Es.set(this.auth._key(),e)}return this.bypassAuthState||Es.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pg(n,e){const t=kg(e),i=Rg(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function bg(n,e){Es.set(n._key(),e)}function Rg(n){return ht(n._redirectPersistence)}function kg(n){return Cs(xg,n.config.apiKey,n.name)}async function Ng(n,e,t=!1){if(He(n.app))return Promise.reject(Lt(n));const i=rr(n),r=Ig(i,e),o=await new Ag(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Dg=600*1e3;class Mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Og(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Uh(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(st(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ol(e))}saveEventToCache(e){this.cachedEventUids.add(Ol(e)),this.lastProcessedEventTime=Date.now()}}function Ol(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Og(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uh(n);default:return!1}}/**
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
 */async function Lg(n,e={}){return Kn(n,"GET","/v1/projects",e)}/**
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
 */const Fg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ug=/^https?/;async function Vg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Lg(n);for(const t of e)try{if(Bg(t))return}catch{}pt(n,"unauthorized-domain")}function Bg(n){const e=co(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Ug.test(t))return!1;if(Fg.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Hg=new ji(3e4,6e4);function Ll(){const n=rt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Wg(n){return new Promise((e,t)=>{function i(){Ll(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ll(),t(st(n,"network-request-failed"))},timeout:Hg.get()})}if(rt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(rt().gapi?.load)i();else{const r=zp("iframefcb");return rt()[r]=()=>{gapi.load?i():t(st(n,"network-request-failed"))},$p(`${Gp()}?onload=${r}`).catch(s=>t(s))}}).catch(e=>{throw Ts=null,e})}let Ts=null;function jg(n){return Ts=Ts||Wg(n),Ts}/**
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
 */const $g=new ji(5e3,15e3),Gg="__/auth/iframe",zg="emulator/auth/iframe",qg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yg(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Oo(e,zg):`https://${n.config.authDomain}/${Gg}`,i={apiKey:e.apiKey,appName:n.name,v:mn},r=Kg.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${qn(i).slice(1)}`}async function Jg(n){const e=await jg(n),t=rt().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:Yg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qg,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=st(n,"network-request-failed"),l=rt().setTimeout(()=>{s(o)},$g.get());function c(){rt().clearTimeout(l),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qg=500,Zg=600,em="_blank",tm="http://localhost";class Fl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nm(n,e,t,i=Qg,r=Zg){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c={...Xg,width:i.toString(),height:r.toString(),top:s,left:o},u=Me().toLowerCase();t&&(l=_h(u)?em:t),gh(u)&&(e=e||tm,c.scrollbars="yes");const f=Object.entries(c).reduce((d,[h,m])=>`${d}${h}=${m},`,"");if(Lp(u)&&l!=="_self")return im(e||"",l),new Fl(null);const g=window.open(e||"",l,f);$(g,n,"popup-blocked");try{g.focus()}catch{}return new Fl(g)}function im(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const sm="__/auth/handler",rm="emulator/auth/handler",om=encodeURIComponent("fac");async function Ul(n,e,t,i,r,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:mn,eventId:r};if(e instanceof Ah){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ks(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof $i){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),u=c?`#${om}=${encodeURIComponent(c)}`:"";return`${am(n)}?${qn(l).slice(1)}${u}`}function am({config:n}){return n.emulator?Oo(n,rm):`https://${n.authDomain}/${sm}`}/**
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
 */const Gr="webStorageSupport";class lm{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nh,this._completeRedirectFn=Ng,this._overrideRedirectResult=bg}async _openPopup(e,t,i,r){gt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Ul(e,t,i,co(),r);return nm(e,s,Vo())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Ul(e,t,i,co(),r);return ug(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(gt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Jg(e),i=new Mg(e);return t.register("authEvent",r=>($(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gr,{type:Gr},r=>{const s=r?.[0]?.[Gr];s!==void 0&&t(!!s),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Vg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sh()||mh()||Fo()}}const cm=lm;var Vl="@firebase/auth",Bl="1.11.0";/**
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
 */class hm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function um(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fm(n){ln(new Bt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ch(n)},u=new Wp(i,r,s,c);return Kp(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ln(new Bt("auth-internal",e=>{const t=rr(e.getProvider("auth").getImmediate());return(i=>new hm(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(Vl,Bl,um(n)),it(Vl,Bl,"esm2020")}/**
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
 */const dm=300,pm=Xc("authIdTokenMaxAge")||dm;let Hl=null;const gm=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>pm)return;const r=t?.token;Hl!==r&&(Hl=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function mm(n=Do()){const e=ir(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qp(n,{popupRedirectResolver:cm,persistence:[wg,lg,Nh]}),i=Xc("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=gm(s.toString());sg(t,o,()=>o(t.currentUser)),ig(t,l=>o(l))}}const r=Kc("auth");return r&&Eh(t,`http://${r}`),t}function _m(){return document.getElementsByTagName("head")?.[0]??document}jp({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=st("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",_m().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fm("Browser");var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ho;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function S(){}S.prototype=v.prototype,I.F=v.prototype,I.prototype=new S,I.prototype.constructor=I,I.D=function(C,E,x){for(var A=Array(arguments.length-2),L=2;L<arguments.length;L++)A[L-2]=arguments[L];return v.prototype[E].apply(C,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,v,S){S||(S=0);const C=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)C[E]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(E=0;E<16;++E)C[E]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=I.g[0],S=I.g[1],E=I.g[2];let x=I.g[3],A;A=v+(x^S&(E^x))+C[0]+3614090360&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(E^v&(S^E))+C[1]+3905402710&4294967295,x=v+(A<<12&4294967295|A>>>20),A=E+(S^x&(v^S))+C[2]+606105819&4294967295,E=x+(A<<17&4294967295|A>>>15),A=S+(v^E&(x^v))+C[3]+3250441966&4294967295,S=E+(A<<22&4294967295|A>>>10),A=v+(x^S&(E^x))+C[4]+4118548399&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(E^v&(S^E))+C[5]+1200080426&4294967295,x=v+(A<<12&4294967295|A>>>20),A=E+(S^x&(v^S))+C[6]+2821735955&4294967295,E=x+(A<<17&4294967295|A>>>15),A=S+(v^E&(x^v))+C[7]+4249261313&4294967295,S=E+(A<<22&4294967295|A>>>10),A=v+(x^S&(E^x))+C[8]+1770035416&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(E^v&(S^E))+C[9]+2336552879&4294967295,x=v+(A<<12&4294967295|A>>>20),A=E+(S^x&(v^S))+C[10]+4294925233&4294967295,E=x+(A<<17&4294967295|A>>>15),A=S+(v^E&(x^v))+C[11]+2304563134&4294967295,S=E+(A<<22&4294967295|A>>>10),A=v+(x^S&(E^x))+C[12]+1804603682&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(E^v&(S^E))+C[13]+4254626195&4294967295,x=v+(A<<12&4294967295|A>>>20),A=E+(S^x&(v^S))+C[14]+2792965006&4294967295,E=x+(A<<17&4294967295|A>>>15),A=S+(v^E&(x^v))+C[15]+1236535329&4294967295,S=E+(A<<22&4294967295|A>>>10),A=v+(E^x&(S^E))+C[1]+4129170786&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^E&(v^S))+C[6]+3225465664&4294967295,x=v+(A<<9&4294967295|A>>>23),A=E+(v^S&(x^v))+C[11]+643717713&4294967295,E=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(E^x))+C[0]+3921069994&4294967295,S=E+(A<<20&4294967295|A>>>12),A=v+(E^x&(S^E))+C[5]+3593408605&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^E&(v^S))+C[10]+38016083&4294967295,x=v+(A<<9&4294967295|A>>>23),A=E+(v^S&(x^v))+C[15]+3634488961&4294967295,E=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(E^x))+C[4]+3889429448&4294967295,S=E+(A<<20&4294967295|A>>>12),A=v+(E^x&(S^E))+C[9]+568446438&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^E&(v^S))+C[14]+3275163606&4294967295,x=v+(A<<9&4294967295|A>>>23),A=E+(v^S&(x^v))+C[3]+4107603335&4294967295,E=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(E^x))+C[8]+1163531501&4294967295,S=E+(A<<20&4294967295|A>>>12),A=v+(E^x&(S^E))+C[13]+2850285829&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^E&(v^S))+C[2]+4243563512&4294967295,x=v+(A<<9&4294967295|A>>>23),A=E+(v^S&(x^v))+C[7]+1735328473&4294967295,E=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(E^x))+C[12]+2368359562&4294967295,S=E+(A<<20&4294967295|A>>>12),A=v+(S^E^x)+C[5]+4294588738&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^E)+C[8]+2272392833&4294967295,x=v+(A<<11&4294967295|A>>>21),A=E+(x^v^S)+C[11]+1839030562&4294967295,E=x+(A<<16&4294967295|A>>>16),A=S+(E^x^v)+C[14]+4259657740&4294967295,S=E+(A<<23&4294967295|A>>>9),A=v+(S^E^x)+C[1]+2763975236&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^E)+C[4]+1272893353&4294967295,x=v+(A<<11&4294967295|A>>>21),A=E+(x^v^S)+C[7]+4139469664&4294967295,E=x+(A<<16&4294967295|A>>>16),A=S+(E^x^v)+C[10]+3200236656&4294967295,S=E+(A<<23&4294967295|A>>>9),A=v+(S^E^x)+C[13]+681279174&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^E)+C[0]+3936430074&4294967295,x=v+(A<<11&4294967295|A>>>21),A=E+(x^v^S)+C[3]+3572445317&4294967295,E=x+(A<<16&4294967295|A>>>16),A=S+(E^x^v)+C[6]+76029189&4294967295,S=E+(A<<23&4294967295|A>>>9),A=v+(S^E^x)+C[9]+3654602809&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^E)+C[12]+3873151461&4294967295,x=v+(A<<11&4294967295|A>>>21),A=E+(x^v^S)+C[15]+530742520&4294967295,E=x+(A<<16&4294967295|A>>>16),A=S+(E^x^v)+C[2]+3299628645&4294967295,S=E+(A<<23&4294967295|A>>>9),A=v+(E^(S|~x))+C[0]+4096336452&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~E))+C[7]+1126891415&4294967295,x=v+(A<<10&4294967295|A>>>22),A=E+(v^(x|~S))+C[14]+2878612391&4294967295,E=x+(A<<15&4294967295|A>>>17),A=S+(x^(E|~v))+C[5]+4237533241&4294967295,S=E+(A<<21&4294967295|A>>>11),A=v+(E^(S|~x))+C[12]+1700485571&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~E))+C[3]+2399980690&4294967295,x=v+(A<<10&4294967295|A>>>22),A=E+(v^(x|~S))+C[10]+4293915773&4294967295,E=x+(A<<15&4294967295|A>>>17),A=S+(x^(E|~v))+C[1]+2240044497&4294967295,S=E+(A<<21&4294967295|A>>>11),A=v+(E^(S|~x))+C[8]+1873313359&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~E))+C[15]+4264355552&4294967295,x=v+(A<<10&4294967295|A>>>22),A=E+(v^(x|~S))+C[6]+2734768916&4294967295,E=x+(A<<15&4294967295|A>>>17),A=S+(x^(E|~v))+C[13]+1309151649&4294967295,S=E+(A<<21&4294967295|A>>>11),A=v+(E^(S|~x))+C[4]+4149444226&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~E))+C[11]+3174756917&4294967295,x=v+(A<<10&4294967295|A>>>22),A=E+(v^(x|~S))+C[2]+718787259&4294967295,E=x+(A<<15&4294967295|A>>>17),A=S+(x^(E|~v))+C[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(E+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+x&4294967295}i.prototype.v=function(I,v){v===void 0&&(v=I.length);const S=v-this.blockSize,C=this.C;let E=this.h,x=0;for(;x<v;){if(E==0)for(;x<=S;)r(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<v;)if(C[E++]=I.charCodeAt(x++),E==this.blockSize){r(this,C),E=0;break}}else for(;x<v;)if(C[E++]=I[x++],E==this.blockSize){r(this,C),E=0;break}}this.h=E,this.o+=v},i.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var S=I.length-8;S<I.length;++S)I[S]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,S=0;S<4;++S)for(let C=0;C<32;C+=8)I[v++]=this.g[S]>>>C&255;return I};function s(I,v){var S=l;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=v(I)}function o(I,v){this.h=v;const S=[];let C=!0;for(let E=I.length-1;E>=0;E--){const x=I[E]|0;C&&x==v||(S[E]=x,C=!1)}this.g=S}var l={};function c(I){return-128<=I&&I<128?s(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return w(u(-I));const v=[];let S=1;for(let C=0;I>=S;C++)v[C]=I/S|0,S*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return w(f(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=u(Math.pow(v,8));let C=g;for(let x=0;x<I.length;x+=8){var E=Math.min(8,I.length-x);const A=parseInt(I.substring(x,x+E),v);E<8?(E=u(Math.pow(v,E)),C=C.j(E).add(u(A))):(C=C.j(S),C=C.add(u(A)))}return C}var g=c(0),d=c(1),h=c(16777216);n=o.prototype,n.m=function(){if(_(this))return-w(this).m();let I=0,v=1;for(let S=0;S<this.g.length;S++){const C=this.i(S);I+=(C>=0?C:4294967296+C)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(m(this))return"0";if(_(this))return"-"+w(this).toString(I);const v=u(Math.pow(I,6));var S=this;let C="";for(;;){const E=D(S,v).g;S=R(S,E.j(v));let x=((S.g.length>0?S.g[0]:S.h)>>>0).toString(I);if(S=E,m(S))return x+C;for(;x.length<6;)x="0"+x;C=x+C}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function m(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function _(I){return I.h==-1}n.l=function(I){return I=R(this,I),_(I)?-1:m(I)?0:1};function w(I){const v=I.g.length,S=[];for(let C=0;C<v;C++)S[C]=~I.g[C];return new o(S,~I.h).add(d)}n.abs=function(){return _(this)?w(this):this},n.add=function(I){const v=Math.max(this.g.length,I.g.length),S=[];let C=0;for(let E=0;E<=v;E++){let x=C+(this.i(E)&65535)+(I.i(E)&65535),A=(x>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);C=A>>>16,x&=65535,A&=65535,S[E]=A<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function R(I,v){return I.add(w(v))}n.j=function(I){if(m(this)||m(I))return g;if(_(this))return _(I)?w(this).j(w(I)):w(w(this).j(I));if(_(I))return w(this.j(w(I)));if(this.l(h)<0&&I.l(h)<0)return u(this.m()*I.m());const v=this.g.length+I.g.length,S=[];for(var C=0;C<2*v;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(let E=0;E<I.g.length;E++){const x=this.i(C)>>>16,A=this.i(C)&65535,L=I.i(E)>>>16,U=I.i(E)&65535;S[2*C+2*E]+=A*U,P(S,2*C+2*E),S[2*C+2*E+1]+=x*U,P(S,2*C+2*E+1),S[2*C+2*E+1]+=A*L,P(S,2*C+2*E+1),S[2*C+2*E+2]+=x*L,P(S,2*C+2*E+2)}for(I=0;I<v;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=v;I<2*v;I++)S[I]=0;return new o(S,0)};function P(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function N(I,v){this.g=I,this.h=v}function D(I,v){if(m(v))throw Error("division by zero");if(m(I))return new N(g,g);if(_(I))return v=D(w(I),v),new N(w(v.g),w(v.h));if(_(v))return v=D(I,w(v)),new N(w(v.g),v.h);if(I.g.length>30){if(_(I)||_(v))throw Error("slowDivide_ only works with positive integers.");for(var S=d,C=v;C.l(I)<=0;)S=T(S),C=T(C);var E=k(S,1),x=k(C,1);for(C=k(C,2),S=k(S,2);!m(C);){var A=x.add(C);A.l(I)<=0&&(E=E.add(S),x=A),C=k(C,1),S=k(S,1)}return v=R(I,E.j(v)),new N(E,v)}for(E=g;I.l(v)>=0;){for(S=Math.max(1,Math.floor(I.m()/v.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=C<=48?1:Math.pow(2,C-48),x=u(S),A=x.j(v);_(A)||A.l(I)>0;)S-=C,x=u(S),A=x.j(v);m(x)&&(x=d),E=E.add(x),I=R(I,A)}return new N(E,I)}n.B=function(I){return D(this,I).h},n.and=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)&I.i(C);return new o(S,this.h&I.h)},n.or=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)|I.i(C);return new o(S,this.h|I.h)},n.xor=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let C=0;C<v;C++)S[C]=this.i(C)^I.i(C);return new o(S,this.h^I.h)};function T(I){const v=I.g.length+1,S=[];for(let C=0;C<v;C++)S[C]=I.i(C)<<1|I.i(C-1)>>>31;return new o(S,I.h)}function k(I,v){const S=v>>5;v%=32;const C=I.g.length-S,E=[];for(let x=0;x<C;x++)E[x]=v>0?I.i(x+S)>>>v|I.i(x+S+1)<<32-v:I.i(x+S);return new o(E,I.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Ho=o}).apply(typeof Wl<"u"?Wl:typeof self<"u"?self:typeof window<"u"?window:{});var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ds=="object"&&ds];for(var p=0;p<a.length;++p){var y=a[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function r(a,p){if(p)e:{var y=i;a=a.split(".");for(var b=0;b<a.length-1;b++){var M=a[b];if(!(M in y))break e;y=y[M]}a=a[a.length-1],b=y[a],p=p(b),p!=b&&p!=null&&e(y,a,{configurable:!0,writable:!0,value:p})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(p){var y=[],b;for(b in p)Object.prototype.hasOwnProperty.call(p,b)&&y.push([b,p[b]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var p=typeof a;return p=="object"&&a!=null||p=="function"}function c(a,p,y){return a.call.apply(a.bind,arguments)}function u(a,p,y){return u=c,u.apply(null,arguments)}function f(a,p){var y=Array.prototype.slice.call(arguments,1);return function(){var b=y.slice();return b.push.apply(b,arguments),a.apply(this,b)}}function g(a,p){function y(){}y.prototype=p.prototype,a.Z=p.prototype,a.prototype=new y,a.prototype.constructor=a,a.Ob=function(b,M,O){for(var B=Array(arguments.length-2),z=2;z<arguments.length;z++)B[z-2]=arguments[z];return p.prototype[M].apply(b,B)}}var d=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function h(a){const p=a.length;if(p>0){const y=Array(p);for(let b=0;b<p;b++)y[b]=a[b];return y}return[]}function m(a,p){for(let b=1;b<arguments.length;b++){const M=arguments[b];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=a.length||0;const O=M.length||0;a.length=y+O;for(let B=0;B<O;B++)a[y+B]=M[B]}else a.push(M)}}class _{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function w(a){o.setTimeout(()=>{throw a},0)}function R(){var a=I;let p=null;return a.g&&(p=a.g,a.g=a.g.next,a.g||(a.h=null),p.next=null),p}class P{constructor(){this.h=this.g=null}add(p,y){const b=N.get();b.set(p,y),this.h?this.h.next=b:this.g=b,this.h=b}}var N=new _(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let T,k=!1,I=new P,v=()=>{const a=Promise.resolve(void 0);T=()=>{a.then(S)}};function S(){for(var a;a=R();){try{a.h.call(a.g)}catch(y){w(y)}var p=N;p.j(a),p.h<100&&(p.h++,a.next=p.g,p.g=a)}k=!1}function C(){this.u=this.u,this.C=this.C}C.prototype.u=!1,C.prototype.dispose=function(){this.u||(this.u=!0,this.N())},C.prototype[Symbol.dispose]=function(){this.dispose()},C.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,p){this.type=a,this.g=this.target=p,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var x=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,p=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const y=()=>{};o.addEventListener("test",y,p),o.removeEventListener("test",y,p)}catch{}return a})();function A(a){return/^[\s\xa0]*$/.test(a)}function L(a,p){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,p)}g(L,E),L.prototype.init=function(a,p){const y=this.type=a.type,b=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=p,p=a.relatedTarget,p||(y=="mouseover"?p=a.fromElement:y=="mouseout"&&(p=a.toElement)),this.relatedTarget=p,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&L.Z.h.call(this)},L.prototype.h=function(){L.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var U="closure_listenable_"+(Math.random()*1e6|0),W=0;function H(a,p,y,b,M){this.listener=a,this.proxy=null,this.src=p,this.type=y,this.capture=!!b,this.ha=M,this.key=++W,this.da=this.fa=!1}function G(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function J(a,p,y){for(const b in a)p.call(y,a[b],b,a)}function ue(a,p){for(const y in a)p.call(void 0,a[y],y,a)}function pe(a){const p={};for(const y in a)p[y]=a[y];return p}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(a,p){let y,b;for(let M=1;M<arguments.length;M++){b=arguments[M];for(y in b)a[y]=b[y];for(let O=0;O<ge.length;O++)y=ge[O],Object.prototype.hasOwnProperty.call(b,y)&&(a[y]=b[y])}}function Fe(a){this.src=a,this.g={},this.h=0}Fe.prototype.add=function(a,p,y,b,M){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=X(a,p,b,M);return B>-1?(p=a[B],y||(p.fa=!1)):(p=new H(p,this.src,O,!!b,M),p.fa=y,a.push(p)),p};function Pe(a,p){const y=p.type;if(y in a.g){var b=a.g[y],M=Array.prototype.indexOf.call(b,p,void 0),O;(O=M>=0)&&Array.prototype.splice.call(b,M,1),O&&(G(p),a.g[y].length==0&&(delete a.g[y],a.h--))}}function X(a,p,y,b){for(let M=0;M<a.length;++M){const O=a[M];if(!O.da&&O.listener==p&&O.capture==!!y&&O.ha==b)return M}return-1}var be="closure_lm_"+(Math.random()*1e6|0),me={};function vt(a,p,y,b,M){if(Array.isArray(p)){for(let O=0;O<p.length;O++)vt(a,p[O],y,b,M);return null}return y=In(y),a&&a[U]?a.J(p,y,l(b)?!!b.capture:!1,M):Ue(a,p,y,!1,b,M)}function Ue(a,p,y,b,M,O){if(!p)throw Error("Invalid event type");const B=l(M)?!!M.capture:!!M;let z=yn(a);if(z||(a[be]=z=new Fe(a)),y=z.add(p,y,b,B,O),y.proxy)return y;if(b=Ve(),y.proxy=b,b.src=a,b.listener=y,a.addEventListener)x||(M=B),M===void 0&&(M=!1),a.addEventListener(p.toString(),b,M);else if(a.attachEvent)a.attachEvent(es(p.toString()),b);else if(a.addListener&&a.removeListener)a.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Ve(){function a(y){return p.call(a.src,a.listener,y)}const p=wr;return a}function Ae(a,p,y,b,M){if(Array.isArray(p))for(var O=0;O<p.length;O++)Ae(a,p[O],y,b,M);else b=l(b)?!!b.capture:!!b,y=In(y),a&&a[U]?(a=a.i,O=String(p).toString(),O in a.g&&(p=a.g[O],y=X(p,y,b,M),y>-1&&(G(p[y]),Array.prototype.splice.call(p,y,1),p.length==0&&(delete a.g[O],a.h--)))):a&&(a=yn(a))&&(p=a.g[p.toString()],a=-1,p&&(a=X(p,y,b,M)),(y=a>-1?p[a]:null)&&Zn(y))}function Zn(a){if(typeof a!="number"&&a&&!a.da){var p=a.src;if(p&&p[U])Pe(p.i,a);else{var y=a.type,b=a.proxy;p.removeEventListener?p.removeEventListener(y,b,a.capture):p.detachEvent?p.detachEvent(es(y),b):p.addListener&&p.removeListener&&p.removeListener(b),(y=yn(p))?(Pe(y,a),y.h==0&&(y.src=null,p[be]=null)):G(a)}}}function es(a){return a in me?me[a]:me[a]="on"+a}function wr(a,p){if(a.da)a=!0;else{p=new L(p,this);const y=a.listener,b=a.ha||a.src;a.fa&&Zn(a),a=y.call(b,p)}return a}function yn(a){return a=a[be],a instanceof Fe?a:null}var wn="__closure_events_fn_"+(Math.random()*1e9>>>0);function In(a){return typeof a=="function"?a:(a[wn]||(a[wn]=function(p){return a.handleEvent(p)}),a[wn])}function oe(){C.call(this),this.i=new Fe(this),this.M=this,this.G=null}g(oe,C),oe.prototype[U]=!0,oe.prototype.removeEventListener=function(a,p,y,b){Ae(this,a,p,y,b)};function Ie(a,p){var y,b=a.G;if(b)for(y=[];b;b=b.G)y.push(b);if(a=a.M,b=p.type||p,typeof p=="string")p=new E(p,a);else if(p instanceof E)p.target=p.target||a;else{var M=p;p=new E(b,a),we(p,M)}M=!0;let O,B;if(y)for(B=y.length-1;B>=0;B--)O=p.g=y[B],M=yt(O,b,!0,p)&&M;if(O=p.g=a,M=yt(O,b,!0,p)&&M,M=yt(O,b,!1,p)&&M,y)for(B=0;B<y.length;B++)O=p.g=y[B],M=yt(O,b,!1,p)&&M}oe.prototype.N=function(){if(oe.Z.N.call(this),this.i){var a=this.i;for(const p in a.g){const y=a.g[p];for(let b=0;b<y.length;b++)G(y[b]);delete a.g[p],a.h--}}this.G=null},oe.prototype.J=function(a,p,y,b){return this.i.add(String(a),p,!1,y,b)},oe.prototype.K=function(a,p,y,b){return this.i.add(String(a),p,!0,y,b)};function yt(a,p,y,b){if(p=a.i.g[String(p)],!p)return!0;p=p.concat();let M=!0;for(let O=0;O<p.length;++O){const B=p[O];if(B&&!B.da&&B.capture==y){const z=B.listener,ve=B.ha||B.src;B.fa&&Pe(a.i,B),M=z.call(ve,b)!==!1&&M}}return M&&!b.defaultPrevented}function ts(a,p){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(a,p||0)}function ei(a){a.g=ts(()=>{a.g=null,a.i&&(a.i=!1,ei(a))},a.l);const p=a.h;a.h=null,a.m.apply(null,p)}class ns extends C{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:ei(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(a){C.call(this),this.h=a,this.g={}}g(wt,C);var qt=[];function is(a){J(a.g,function(p,y){this.g.hasOwnProperty(y)&&Zn(p)},a),a.g={}}wt.prototype.N=function(){wt.Z.N.call(this),is(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=o.JSON.stringify,Sn=o.JSON.parse,Cn=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ta(){}function ff(){}var ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ir(){E.call(this,"d")}g(Ir,E);function Sr(){E.call(this,"c")}g(Sr,E);var En={},xa=null;function Cr(){return xa=xa||new oe}En.Ia="serverreachability";function Aa(a){E.call(this,En.Ia,a)}g(Aa,E);function ii(a){const p=Cr();Ie(p,new Aa(p))}En.STAT_EVENT="statevent";function Pa(a,p){E.call(this,En.STAT_EVENT,a),this.stat=p}g(Pa,E);function Re(a){const p=Cr();Ie(p,new Pa(p,a))}En.Ja="timingevent";function ba(a,p){E.call(this,En.Ja,a),this.size=p}g(ba,E);function si(a,p){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},p)}function ri(){this.g=!0}ri.prototype.ua=function(){this.g=!1};function df(a,p,y,b,M,O){a.info(function(){if(a.g)if(O){var B="",z=O.split("&");for(let se=0;se<z.length;se++){var ve=z[se].split("=");if(ve.length>1){const Se=ve[0];ve=ve[1];const Xe=Se.split("_");B=Xe.length>=2&&Xe[1]=="type"?B+(Se+"="+ve+"&"):B+(Se+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+b+") [attempt "+M+"]: "+p+`
`+y+`
`+B})}function pf(a,p,y,b,M,O,B){a.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+M+"]: "+p+`
`+y+`
`+O+" "+B})}function Tn(a,p,y,b){a.info(function(){return"XMLHTTP TEXT ("+p+"): "+mf(a,y)+(b?" "+b:"")})}function gf(a,p){a.info(function(){return"TIMEOUT: "+p})}ri.prototype.info=function(){};function mf(a,p){if(!a.g)return p;if(!p)return null;try{const O=JSON.parse(p);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var y=O[a];if(!(y.length<2)){var b=y[1];if(Array.isArray(b)&&!(b.length<1)){var M=b[0];if(M!="noop"&&M!="stop"&&M!="close")for(let B=1;B<b.length;B++)b[B]=""}}}}return ti(O)}catch{return p}}var Er={NO_ERROR:0,TIMEOUT:8},_f={},Ra;function Tr(){}g(Tr,Ta),Tr.prototype.g=function(){return new XMLHttpRequest},Ra=new Tr;function oi(a){return encodeURIComponent(String(a))}function vf(a){var p=1;a=a.split(":");const y=[];for(;p>0&&a.length;)y.push(a.shift()),p--;return a.length&&y.push(a.join(":")),y}function It(a,p,y,b){this.j=a,this.i=p,this.l=y,this.S=b||1,this.V=new wt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ka}function ka(){this.i=null,this.g="",this.h=!1}var Na={},xr={};function Ar(a,p,y){a.M=1,a.A=rs(Je(p)),a.u=y,a.R=!0,Da(a,null)}function Da(a,p){a.F=Date.now(),ss(a),a.B=Je(a.A);var y=a.B,b=a.S;Array.isArray(b)||(b=[String(b)]),za(y.i,"t",b),a.C=0,y=a.j.L,a.h=new ka,a.g=hl(a.j,y?p:null,!a.u),a.P>0&&(a.O=new ns(u(a.Y,a,a.g),a.P)),p=a.V,y=a.g,b=a.ba;var M="readystatechange";Array.isArray(M)||(M&&(qt[0]=M.toString()),M=qt);for(let O=0;O<M.length;O++){const B=vt(y,M[O],b||p.handleEvent,!1,p.h||p);if(!B)break;p.g[B.key]=B}p=a.J?pe(a.J):{},a.u?(a.v||(a.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,p)):(a.v="GET",a.g.ea(a.B,a.v,null,p)),ii(),df(a.i,a.v,a.B,a.l,a.S,a.u)}It.prototype.ba=function(a){a=a.target;const p=this.O;p&&Et(a)==3?p.j():this.Y(a)},It.prototype.Y=function(a){try{if(a==this.g)e:{const z=Et(this.g),ve=this.g.ya(),se=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||Za(this.g)))){this.K||z!=4||ve==7||(ve==8||se<=0?ii(3):ii(2)),Pr(this);var p=this.g.ca();this.X=p;var y=yf(this);if(this.o=p==200,pf(this.i,this.v,this.B,this.l,this.S,z,p),this.o){if(this.U&&!this.L){t:{if(this.g){var b,M=this.g;if((b=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(b)){var O=b;break t}}O=null}if(a=O)Tn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,br(this,a);else{this.o=!1,this.m=3,Re(12),Kt(this),ai(this);break e}}if(this.R){a=!0;let Se;for(;!this.K&&this.C<y.length;)if(Se=wf(this,y),Se==xr){z==4&&(this.m=4,Re(14),a=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Na){this.m=4,Re(15),Tn(this.i,this.l,y,"[Invalid Chunk]"),a=!1;break}else Tn(this.i,this.l,Se,null),br(this,Se);if(Ma(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||y.length!=0||this.h.h||(this.m=1,Re(16),a=!1),this.o=this.o&&a,!a)Tn(this.i,this.l,y,"[Invalid Chunked Response]"),Kt(this),ai(this);else if(y.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Fr(B),B.P=!0,Re(11))}}else Tn(this.i,this.l,y,null),br(this,y);z==4&&Kt(this),this.o&&!this.K&&(z==4?ol(this.j,this):(this.o=!1,ss(this)))}else Mf(this.g),p==400&&y.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),Kt(this),ai(this)}}}catch{}finally{}};function yf(a){if(!Ma(a))return a.g.la();const p=Za(a.g);if(p==="")return"";let y="";const b=p.length,M=Et(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Kt(a),ai(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<b;O++)a.h.h=!0,y+=a.h.i.decode(p[O],{stream:!(M&&O==b-1)});return p.length=0,a.h.g+=y,a.C=0,a.h.g}function Ma(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function wf(a,p){var y=a.C,b=p.indexOf(`
`,y);return b==-1?xr:(y=Number(p.substring(y,b)),isNaN(y)?Na:(b+=1,b+y>p.length?xr:(p=p.slice(b,b+y),a.C=b+y,p)))}It.prototype.cancel=function(){this.K=!0,Kt(this)};function ss(a){a.T=Date.now()+a.H,Oa(a,a.H)}function Oa(a,p){if(a.D!=null)throw Error("WatchDog timer not null");a.D=si(u(a.aa,a),p)}function Pr(a){a.D&&(o.clearTimeout(a.D),a.D=null)}It.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(gf(this.i,this.B),this.M!=2&&(ii(),Re(17)),Kt(this),this.m=2,ai(this)):Oa(this,this.T-a)};function ai(a){a.j.I==0||a.K||ol(a.j,a)}function Kt(a){Pr(a);var p=a.O;p&&typeof p.dispose=="function"&&p.dispose(),a.O=null,is(a.V),a.g&&(p=a.g,a.g=null,p.abort(),p.dispose())}function br(a,p){try{var y=a.j;if(y.I!=0&&(y.g==a||Rr(y.h,a))){if(!a.L&&Rr(y.h,a)&&y.I==3){try{var b=y.Ba.g.parse(p)}catch{b=null}if(Array.isArray(b)&&b.length==3){var M=b;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<a.F)hs(y),ls(y);else break e;Lr(y),Re(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=si(u(y.Va,y),6e3));Ua(y.h)<=1&&y.ta&&(y.ta=void 0)}else Jt(y,11)}else if((a.L||y.g==a)&&hs(y),!A(p))for(M=y.Ba.g.parse(p),p=0;p<M.length;p++){let se=M[p];const Se=se[0];if(!(Se<=y.K))if(y.K=Se,se=se[1],y.I==2)if(se[0]=="c"){y.M=se[1],y.ba=se[2];const Xe=se[3];Xe!=null&&(y.ka=Xe,y.j.info("VER="+y.ka));const Xt=se[4];Xt!=null&&(y.za=Xt,y.j.info("SVER="+y.za));const Tt=se[5];Tt!=null&&typeof Tt=="number"&&Tt>0&&(b=1.5*Tt,y.O=b,y.j.info("backChannelRequestTimeoutMs_="+b)),b=y;const xt=a.g;if(xt){const us=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var O=b.h;O.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(kr(O,O.h),O.h=null))}if(b.G){const Ur=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ur&&(b.wa=Ur,le(b.J,b.G,Ur))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-a.F,y.j.info("Handshake RTT: "+y.T+"ms")),b=y;var B=a;if(b.na=cl(b,b.L?b.ba:null,b.W),B.L){Va(b.h,B);var z=B,ve=b.O;ve&&(z.H=ve),z.D&&(Pr(z),ss(z)),b.g=B}else sl(b);y.i.length>0&&cs(y)}else se[0]!="stop"&&se[0]!="close"||Jt(y,7);else y.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Jt(y,7):Or(y):se[0]!="noop"&&y.l&&y.l.qa(se),y.A=0)}}ii(4)}catch{}}var If=class{constructor(a,p){this.g=a,this.map=p}};function La(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fa(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ua(a){return a.h?1:a.g?a.g.size:0}function Rr(a,p){return a.h?a.h==p:a.g?a.g.has(p):!1}function kr(a,p){a.g?a.g.add(p):a.h=p}function Va(a,p){a.h&&a.h==p?a.h=null:a.g&&a.g.has(p)&&a.g.delete(p)}La.prototype.cancel=function(){if(this.i=Ba(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ba(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let p=a.i;for(const y of a.g.values())p=p.concat(y.G);return p}return h(a.i)}var Ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sf(a,p){if(a){a=a.split("&");for(let y=0;y<a.length;y++){const b=a[y].indexOf("=");let M,O=null;b>=0?(M=a[y].substring(0,b),O=a[y].substring(b+1)):M=a[y],p(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function St(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;a instanceof St?(this.l=a.l,li(this,a.j),this.o=a.o,this.g=a.g,ci(this,a.u),this.h=a.h,Nr(this,qa(a.i)),this.m=a.m):a&&(p=String(a).match(Ha))?(this.l=!1,li(this,p[1]||"",!0),this.o=hi(p[2]||""),this.g=hi(p[3]||"",!0),ci(this,p[4]),this.h=hi(p[5]||"",!0),Nr(this,p[6]||"",!0),this.m=hi(p[7]||"")):(this.l=!1,this.i=new fi(null,this.l))}St.prototype.toString=function(){const a=[];var p=this.j;p&&a.push(ui(p,Wa,!0),":");var y=this.g;return(y||p=="file")&&(a.push("//"),(p=this.o)&&a.push(ui(p,Wa,!0),"@"),a.push(oi(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&a.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&a.push("/"),a.push(ui(y,y.charAt(0)=="/"?Tf:Ef,!0))),(y=this.i.toString())&&a.push("?",y),(y=this.m)&&a.push("#",ui(y,Af)),a.join("")},St.prototype.resolve=function(a){const p=Je(this);let y=!!a.j;y?li(p,a.j):y=!!a.o,y?p.o=a.o:y=!!a.g,y?p.g=a.g:y=a.u!=null;var b=a.h;if(y)ci(p,a.u);else if(y=!!a.h){if(b.charAt(0)!="/")if(this.g&&!this.h)b="/"+b;else{var M=p.h.lastIndexOf("/");M!=-1&&(b=p.h.slice(0,M+1)+b)}if(M=b,M==".."||M==".")b="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){b=M.lastIndexOf("/",0)==0,M=M.split("/");const O=[];for(let B=0;B<M.length;){const z=M[B++];z=="."?b&&B==M.length&&O.push(""):z==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),b&&B==M.length&&O.push("")):(O.push(z),b=!0)}b=O.join("/")}else b=M}return y?p.h=b:y=a.i.toString()!=="",y?Nr(p,qa(a.i)):y=!!a.m,y&&(p.m=a.m),p};function Je(a){return new St(a)}function li(a,p,y){a.j=y?hi(p,!0):p,a.j&&(a.j=a.j.replace(/:$/,""))}function ci(a,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);a.u=p}else a.u=null}function Nr(a,p,y){p instanceof fi?(a.i=p,Pf(a.i,a.l)):(y||(p=ui(p,xf)),a.i=new fi(p,a.l))}function le(a,p,y){a.i.set(p,y)}function rs(a){return le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hi(a,p){return a?p?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ui(a,p,y){return typeof a=="string"?(a=encodeURI(a).replace(p,Cf),y&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Cf(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wa=/[#\/\?@]/g,Ef=/[#\?:]/g,Tf=/[#\?]/g,xf=/[#\?@]/g,Af=/#/g;function fi(a,p){this.h=this.g=null,this.i=a||null,this.j=!!p}function Yt(a){a.g||(a.g=new Map,a.h=0,a.i&&Sf(a.i,function(p,y){a.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}n=fi.prototype,n.add=function(a,p){Yt(this),this.i=null,a=xn(this,a);let y=this.g.get(a);return y||this.g.set(a,y=[]),y.push(p),this.h+=1,this};function ja(a,p){Yt(a),p=xn(a,p),a.g.has(p)&&(a.i=null,a.h-=a.g.get(p).length,a.g.delete(p))}function $a(a,p){return Yt(a),p=xn(a,p),a.g.has(p)}n.forEach=function(a,p){Yt(this),this.g.forEach(function(y,b){y.forEach(function(M){a.call(p,M,b,this)},this)},this)};function Ga(a,p){Yt(a);let y=[];if(typeof p=="string")$a(a,p)&&(y=y.concat(a.g.get(xn(a,p))));else for(a=Array.from(a.g.values()),p=0;p<a.length;p++)y=y.concat(a[p]);return y}n.set=function(a,p){return Yt(this),this.i=null,a=xn(this,a),$a(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[p]),this.h+=1,this},n.get=function(a,p){return a?(a=Ga(this,a),a.length>0?String(a[0]):p):p};function za(a,p,y){ja(a,p),y.length>0&&(a.i=null,a.g.set(xn(a,p),h(y)),a.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],p=Array.from(this.g.keys());for(let b=0;b<p.length;b++){var y=p[b];const M=oi(y);y=Ga(this,y);for(let O=0;O<y.length;O++){let B=M;y[O]!==""&&(B+="="+oi(y[O])),a.push(B)}}return this.i=a.join("&")};function qa(a){const p=new fi;return p.i=a.i,a.g&&(p.g=new Map(a.g),p.h=a.h),p}function xn(a,p){return p=String(p),a.j&&(p=p.toLowerCase()),p}function Pf(a,p){p&&!a.j&&(Yt(a),a.i=null,a.g.forEach(function(y,b){const M=b.toLowerCase();b!=M&&(ja(this,b),za(this,M,y))},a)),a.j=p}function bf(a,p){const y=new ri;if(o.Image){const b=new Image;b.onload=f(Ct,y,"TestLoadImage: loaded",!0,p,b),b.onerror=f(Ct,y,"TestLoadImage: error",!1,p,b),b.onabort=f(Ct,y,"TestLoadImage: abort",!1,p,b),b.ontimeout=f(Ct,y,"TestLoadImage: timeout",!1,p,b),o.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=a}else p(!1)}function Rf(a,p){const y=new ri,b=new AbortController,M=setTimeout(()=>{b.abort(),Ct(y,"TestPingServer: timeout",!1,p)},1e4);fetch(a,{signal:b.signal}).then(O=>{clearTimeout(M),O.ok?Ct(y,"TestPingServer: ok",!0,p):Ct(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),Ct(y,"TestPingServer: error",!1,p)})}function Ct(a,p,y,b,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),b(y)}catch{}}function kf(){this.g=new Cn}function Dr(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Dr,Ta),Dr.prototype.g=function(){return new os(this.i,this.h)};function os(a,p){oe.call(this),this.H=a,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(os,oe),n=os.prototype,n.open=function(a,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=p,this.readyState=1,pi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(p.body=a),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,di(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ka(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ka(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var p=a.value?a.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!a.done}))&&(this.response=this.responseText+=p)}a.done?di(this):pi(this),this.readyState==3&&Ka(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,di(this))},n.Na=function(a){this.g&&(this.response=a,di(this))},n.ga=function(){this.g&&di(this)};function di(a){a.readyState=4,a.l=null,a.j=null,a.B=null,pi(a)}n.setRequestHeader=function(a,p){this.A.append(a,p)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,a.push(y[0]+": "+y[1]),y=p.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(os.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ya(a){let p="";return J(a,function(y,b){p+=b,p+=":",p+=y,p+=`\r
`}),p}function Mr(a,p,y){e:{for(b in y){var b=!1;break e}b=!0}b||(y=Ya(y),typeof a=="string"?y!=null&&oi(y):le(a,p,y))}function de(a){oe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(de,oe);var Nf=/^https?$/i,Df=["POST","PUT"];n=de.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,p,y,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);p=p?p.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ra.g(),this.g.onreadystatechange=d(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(a),!0),this.B=!1}catch(O){Ja(this,O);return}if(a=y||"",y=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var M in b)y.set(M,b[M]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const O of b.keys())y.set(O,b.get(O));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(y.keys()).find(O=>O.toLowerCase()=="content-type"),M=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Df,p,void 0)>=0)||b||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of y)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Ja(this,O)}};function Ja(a,p){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=p,a.o=5,Xa(a),as(a)}function Xa(a){a.A||(a.A=!0,Ie(a,"complete"),Ie(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ie(this,"complete"),Ie(this,"abort"),as(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),as(this,!0)),de.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Qa(this):this.Xa())},n.Xa=function(){Qa(this)};function Qa(a){if(a.h&&typeof s<"u"){if(a.v&&Et(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ie(a,"readystatechange"),Et(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var b;if(b=O===0){let B=String(a.D).match(Ha)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),b=!Nf.test(B?B.toLowerCase():"")}y=b}if(y)Ie(a,"complete"),Ie(a,"success");else{a.o=6;try{var M=Et(a)>2?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.ca()+"]",Xa(a)}}finally{as(a)}}}}function as(a,p){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const y=a.g;a.g=null,p||Ie(a,"ready");try{y.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Et(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Et(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var p=this.g.responseText;return a&&p.indexOf(a)==0&&(p=p.substring(a.length)),Sn(p)}};function Za(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Mf(a){const p={};a=(a.g&&Et(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<a.length;b++){if(A(a[b]))continue;var y=vf(a[b]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const O=p[M]||[];p[M]=O,O.push(y)}ue(p,function(b){return b.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(a,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[a]||p}function el(a){this.za=0,this.i=[],this.j=new ri,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gi("baseRetryDelayMs",5e3,a),this.Za=gi("retryDelaySeedMs",1e4,a),this.Ta=gi("forwardChannelMaxRetries",2,a),this.va=gi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new La(a&&a.concurrentRequestLimit),this.Ba=new kf,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=el.prototype,n.ka=8,n.I=1,n.connect=function(a,p,y,b){Re(0),this.W=a,this.H=p||{},y&&b!==void 0&&(this.H.OSID=y,this.H.OAID=b),this.F=this.X,this.J=cl(this,null,this.W),cs(this)};function Or(a){if(tl(a),a.I==3){var p=a.V++,y=Je(a.J);if(le(y,"SID",a.M),le(y,"RID",p),le(y,"TYPE","terminate"),mi(a,y),p=new It(a,a.j,p),p.M=2,p.A=rs(Je(y)),y=!1,o.navigator&&o.navigator.sendBeacon)try{y=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!y&&o.Image&&(new Image().src=p.A,y=!0),y||(p.g=hl(p.j,null),p.g.ea(p.A)),p.F=Date.now(),ss(p)}ll(a)}function ls(a){a.g&&(Fr(a),a.g.cancel(),a.g=null)}function tl(a){ls(a),a.v&&(o.clearTimeout(a.v),a.v=null),hs(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function cs(a){if(!Fa(a.h)&&!a.m){a.m=!0;var p=a.Ea;T||v(),k||(T(),k=!0),I.add(p,a),a.D=0}}function Of(a,p){return Ua(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=p.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=si(u(a.Ea,a,p),al(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const M=new It(this,this.j,a);let O=this.o;if(this.U&&(O?(O=pe(O),we(O,this.U)):O=this.U),this.u!==null||this.R||(M.J=O,O=null),this.S)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var b=this.i[y];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(p+=b,p>4096){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=il(this,M,p),y=Je(this.J),le(y,"RID",a),le(y,"CVER",22),this.G&&le(y,"X-HTTP-Session-Id",this.G),mi(this,y),O&&(this.R?p="headers="+oi(Ya(O))+"&"+p:this.u&&Mr(y,this.u,O)),kr(this.h,M),this.Ra&&le(y,"TYPE","init"),this.S?(le(y,"$req",p),le(y,"SID","null"),M.U=!0,Ar(M,y,null)):Ar(M,y,p),this.I=2}}else this.I==3&&(a?nl(this,a):this.i.length==0||Fa(this.h)||nl(this))};function nl(a,p){var y;p?y=p.l:y=a.V++;const b=Je(a.J);le(b,"SID",a.M),le(b,"RID",y),le(b,"AID",a.K),mi(a,b),a.u&&a.o&&Mr(b,a.u,a.o),y=new It(a,a.j,y,a.D+1),a.u===null&&(y.J=a.o),p&&(a.i=p.G.concat(a.i)),p=il(a,y,1e3),y.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),kr(a.h,y),Ar(y,b,p)}function mi(a,p){a.H&&J(a.H,function(y,b){le(p,b,y)}),a.l&&J({},function(y,b){le(p,b,y)})}function il(a,p,y){y=Math.min(a.i.length,y);const b=a.l?u(a.l.Ka,a.l,a):null;e:{var M=a.i;let z=-1;for(;;){const ve=["count="+y];z==-1?y>0?(z=M[0].g,ve.push("ofs="+z)):z=0:ve.push("ofs="+z);let se=!0;for(let Se=0;Se<y;Se++){var O=M[Se].g;const Xe=M[Se].map;if(O-=z,O<0)z=Math.max(0,M[Se].g-100),se=!1;else try{O="req"+O+"_"||"";try{var B=Xe instanceof Map?Xe:Object.entries(Xe);for(const[Xt,Tt]of B){let xt=Tt;l(Tt)&&(xt=ti(Tt)),ve.push(O+Xt+"="+encodeURIComponent(xt))}}catch(Xt){throw ve.push(O+"type="+encodeURIComponent("_badmap")),Xt}}catch{b&&b(Xe)}}if(se){B=ve.join("&");break e}}B=void 0}return a=a.i.splice(0,y),p.G=a,B}function sl(a){if(!a.g&&!a.v){a.Y=1;var p=a.Da;T||v(),k||(T(),k=!0),I.add(p,a),a.A=0}}function Lr(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=si(u(a.Da,a),al(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,rl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=si(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),ls(this),rl(this))};function Fr(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function rl(a){a.g=new It(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var p=Je(a.na);le(p,"RID","rpc"),le(p,"SID",a.M),le(p,"AID",a.K),le(p,"CI",a.F?"0":"1"),!a.F&&a.ia&&le(p,"TO",a.ia),le(p,"TYPE","xmlhttp"),mi(a,p),a.u&&a.o&&Mr(p,a.u,a.o),a.O&&(a.g.H=a.O);var y=a.g;a=a.ba,y.M=1,y.A=rs(Je(p)),y.u=null,y.R=!0,Da(y,a)}n.Va=function(){this.C!=null&&(this.C=null,ls(this),Lr(this),Re(19))};function hs(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ol(a,p){var y=null;if(a.g==p){hs(a),Fr(a),a.g=null;var b=2}else if(Rr(a.h,p))y=p.G,Va(a.h,p),b=1;else return;if(a.I!=0){if(p.o)if(b==1){y=p.u?p.u.length:0,p=Date.now()-p.F;var M=a.D;b=Cr(),Ie(b,new ba(b,y)),cs(a)}else sl(a);else if(M=p.m,M==3||M==0&&p.X>0||!(b==1&&Of(a,p)||b==2&&Lr(a)))switch(y&&y.length>0&&(p=a.h,p.i=p.i.concat(y)),M){case 1:Jt(a,5);break;case 4:Jt(a,10);break;case 3:Jt(a,6);break;default:Jt(a,2)}}}function al(a,p){let y=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(y*=2),y*p}function Jt(a,p){if(a.j.info("Error code "+p),p==2){var y=u(a.bb,a),b=a.Ua;const M=!b;b=new St(b||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||li(b,"https"),rs(b),M?bf(b.toString(),y):Rf(b.toString(),y)}else Re(2);a.I=0,a.l&&a.l.pa(p),ll(a),tl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function ll(a){if(a.I=0,a.ja=[],a.l){const p=Ba(a.h);(p.length!=0||a.i.length!=0)&&(m(a.ja,p),m(a.ja,a.i),a.h.i.length=0,h(a.i),a.i.length=0),a.l.oa()}}function cl(a,p,y){var b=y instanceof St?Je(y):new St(y);if(b.g!="")p&&(b.g=p+"."+b.g),ci(b,b.u);else{var M=o.location;b=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;const O=new St(null);b&&li(O,b),p&&(O.g=p),M&&ci(O,M),y&&(O.h=y),b=O}return y=a.G,p=a.wa,y&&p&&le(b,y,p),le(b,"VER",a.ka),mi(a,b),b}function hl(a,p,y){if(p&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=a.Aa&&!a.ma?new de(new Dr({ab:y})):new de(a.ma),p.Fa(a.L),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ul(){}n=ul.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Be(a,p){oe.call(this),this.g=new el(p),this.l=a,this.h=p&&p.messageUrlParams||null,a=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(a?a["X-WebChannel-Content-Type"]=p.messageContentType:a={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(a?a["X-WebChannel-Client-Profile"]=p.sa:a={"X-WebChannel-Client-Profile":p.sa}),this.g.U=a,(a=p&&p.Qb)&&!A(a)&&(this.g.u=a),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!A(p)&&(this.g.G=p,a=this.h,a!==null&&p in a&&(a=this.h,p in a&&delete a[p])),this.j=new An(this)}g(Be,oe),Be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){Or(this.g)},Be.prototype.o=function(a){var p=this.g;if(typeof a=="string"){var y={};y.__data__=a,a=y}else this.v&&(y={},y.__data__=ti(a),a=y);p.i.push(new If(p.Ya++,a)),p.I==3&&cs(p)},Be.prototype.N=function(){this.g.l=null,delete this.j,Or(this.g),delete this.g,Be.Z.N.call(this)};function fl(a){Ir.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var p=a.__sm__;if(p){e:{for(const y in p){a=y;break e}a=void 0}(this.i=a)&&(a=this.i,p=p!==null&&a in p?p[a]:void 0),this.data=p}else this.data=a}g(fl,Ir);function dl(){Sr.call(this),this.status=1}g(dl,Sr);function An(a){this.g=a}g(An,ul),An.prototype.ra=function(){Ie(this.g,"a")},An.prototype.qa=function(a){Ie(this.g,new fl(a))},An.prototype.pa=function(a){Ie(this.g,new dl)},An.prototype.oa=function(){Ie(this.g,"b")},Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,Er.NO_ERROR=0,Er.TIMEOUT=8,Er.HTTP_ERROR=6,_f.COMPLETE="complete",ff.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",oe.prototype.listen=oe.prototype.J,de.prototype.listenOnce=de.prototype.K,de.prototype.getLastError=de.prototype.Ha,de.prototype.getLastErrorCode=de.prototype.ya,de.prototype.getStatus=de.prototype.ca,de.prototype.getResponseJson=de.prototype.La,de.prototype.getResponseText=de.prototype.la,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Fa}).apply(typeof ds<"u"?ds:typeof self<"u"?self:typeof window<"u"?window:{});const jl="@firebase/firestore",$l="4.9.2";/**
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
 */class ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ke.UNAUTHENTICATED=new ke(null),ke.GOOGLE_CREDENTIALS=new ke("google-credentials-uid"),ke.FIRST_PARTY=new ke("first-party-uid"),ke.MOCK_USER=new ke("mock-user");/**
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
 */let zi="12.3.0";/**
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
 */const Vn=new nr("@firebase/firestore");function qe(n,...e){if(Vn.logLevel<=ne.DEBUG){const t=e.map(Wo);Vn.debug(`Firestore (${zi}): ${n}`,...t)}}function Vh(n,...e){if(Vn.logLevel<=ne.ERROR){const t=e.map(Wo);Vn.error(`Firestore (${zi}): ${n}`,...t)}}function vm(n,...e){if(Vn.logLevel<=ne.WARN){const t=e.map(Wo);Vn.warn(`Firestore (${zi}): ${n}`,...t)}}function Wo(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Mi(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Bh(n,i,t)}function Bh(n,e,t){let i=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Vh(i),new Error(i)}function Ci(n,e,t,i){let r="Unexpected state";typeof t=="string"?r=t:i=t,n||Bh(e,r,i)}/**
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
 */const Z={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ee extends _t{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ei{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ym{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ke.UNAUTHENTICATED)))}shutdown(){}}class wm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Im{constructor(e){this.t=e,this.currentUser=ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ci(this.o===void 0,42304);let i=this.i;const r=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let s=new Ei;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ei,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{qe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(qe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ei)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(qe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ci(typeof i.accessToken=="string",31837,{l:i}),new Hh(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ci(e===null||typeof e=="string",2055,{h:e}),new ke(e)}}class Sm{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=ke.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Cm{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Sm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ke.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Em{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,He(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ci(this.o===void 0,3512);const i=s=>{s.error!=null&&qe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,qe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>i(s)))};const r=s=>{qe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>r(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):qe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ci(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Tm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class xm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=Tm(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%62))}return i}}function Wt(n,e){return n<e?-1:n>e?1:0}function Am(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const r=n.charAt(i),s=e.charAt(i);if(r!==s)return zr(r)===zr(s)?Wt(r,s):zr(r)?1:-1}return Wt(n.length,e.length)}const Pm=55296,bm=57343;function zr(n){const e=n.charCodeAt(0);return e>=Pm&&e<=bm}/**
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
 */const zl="__name__";class Ze{constructor(e,t,i){t===void 0?t=0:t>e.length&&Mi(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Mi(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=Ze.compareSegments(e.get(r),t.get(r));if(s!==0)return s}return Wt(e.length,t.length)}static compareSegments(e,t){const i=Ze.isNumericId(e),r=Ze.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):Am(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ho.fromString(e.substring(4,e.length-2))}}class $e extends Ze{construct(e,t,i){return new $e(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(Z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((r=>r.length>0)))}return new $e(t)}static emptyPath(){return new $e([])}}const Rm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Ze{construct(e,t,i){return new tn(e,t,i)}static isValidIdentifier(e){return Rm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zl}static keyField(){return new tn([zl])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new ee(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new ee(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(i+=l,r++):(s(),r++)}if(s(),o)throw new ee(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
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
 */class nn{constructor(e){this.path=e}static fromPath(e){return new nn($e.fromString(e))}static fromName(e){return new nn($e.fromString(e).popFirst(5))}static empty(){return new nn($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return $e.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nn(new $e(e.slice()))}}function km(n,e,t,i){if(e===!0&&i===!0)throw new ee(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Nm(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Dm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Mi(12329,{type:typeof n})}function Mm(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Dm(n);throw new ee(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n,e){const t={typeString:n};return e&&(t.value=e),t}function qi(n,e){if(!Nm(n))throw new ee(Z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(r&&typeof o!==r){t=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${i}' field to equal '${s.value}'`;break}}if(t)throw new ee(Z.INVALID_ARGUMENT,t);return!0}/**
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
 */const ql=-62135596800,Kl=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Kl);return new et(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ql)throw new ee(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kl}_compareTo(e){return this.seconds===e.seconds?Wt(this.nanoseconds,e.nanoseconds):Wt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:et._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qi(e,et._jsonSchema))return new et(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ql;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}et._jsonSchemaVersion="firestore/timestamp/1.0",et._jsonSchema={type:_e("string",et._jsonSchemaVersion),seconds:_e("number"),nanoseconds:_e("number")};function Om(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Lm("Invalid base64 string: "+s):s}})(e);return new hn(t)}static fromUint8Array(e){const t=(function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s})(e);return new hn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Wt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const fo="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||fo}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===fo}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */class Fm{constructor(e,t=null,i=[],r=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Um(n){return new Fm(n)}/**
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
 */var Yl,Q;(Q=Yl||(Yl={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ho([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=41943040;/**
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
 */const Bm=1048576;function qr(){return typeof document<"u"?document:null}/**
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
 */class Hm{constructor(e,t,i=1e3,r=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=r,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-i);r>0&&qe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */class jo{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ei,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,l=new jo(e,t,o,r,s);return l.start(i),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Jl,Xl;(Xl=Jl||(Jl={})).Ma="default",Xl.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ql=new Map;/**
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
 */const Wh="firestore.googleapis.com",Zl=!0;class ec{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wh,this.ssl=Zl}else this.host=e.host,this.ssl=e.ssl??Zl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Vm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bm)throw new ee(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}km("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,r){return i.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new ym;switch(i.type){case"firstParty":return new Cm(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Ql.get(t);i&&(qe("ComponentProvider","Removing Datastore"),Ql.delete(t),i.terminate())})(this),Promise.resolve()}}function $h(n,e,t,i={}){n=Mm(n,jh);const r=gn(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(bo(`https://${l}`),Ro("Firestore",!0)),s.host!==Wh&&s.host!==l&&vm("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:r,emulatorOptions:i};if(!Vt(c,o)&&(n._setSettings(c),i.mockUserToken)){let u,f;if(typeof i.mockUserToken=="string")u=i.mockUserToken,f=ke.MOCK_USER;else{u=Qc(i.mockUserToken,n._app?.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new ee(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new ke(g)}n._authCredentials=new wm(new Hh(u,f))}}/**
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
 */class $o{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new $o(this.firestore,e,this._query)}}class nt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Go(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nt(this.firestore,e,this._key)}toJSON(){return{type:nt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(qi(t,nt._jsonSchema))return new nt(e,i||null,new nn($e.fromString(t.referencePath)))}}nt._jsonSchemaVersion="firestore/documentReference/1.0",nt._jsonSchema={type:_e("string",nt._jsonSchemaVersion),referencePath:_e("string")};class Go extends $o{constructor(e,t,i){super(e,t,Um(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nt(this.firestore,null,new nn(e))}withConverter(e){return new Go(this.firestore,e,this._path)}}/**
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
 */const tc="AsyncQueue";class nc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Hm(this,"async_queue_retry"),this._c=()=>{const i=qr();i&&qe(tc,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=qr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ei;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Om(e))throw e;qe(tc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Vh("INTERNAL UNHANDLED ERROR: ",ic(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=jo.createAndSchedule(this,e,t,i,(s=>this.hc(s)));return this.tc.push(r),r}uc(){this.nc&&Mi(47125,{Pc:ic(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ic(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class jm extends jh{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new nc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nc(e),this._firestoreClient=void 0,await e}}}function $m(n,e){const t=typeof n=="object"?n:Do(),i=typeof n=="string"?n:fo,r=ir(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Yc("firestore");s&&$h(r,...s)}return r}/**
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
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt(hn.fromBase64String(e))}catch(t){throw new ee(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lt(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qi(e,lt._jsonSchema))return lt.fromBase64String(e.bytes)}}lt._jsonSchemaVersion="firestore/bytes/1.0",lt._jsonSchema={type:_e("string",lt._jsonSchemaVersion),bytes:_e("string")};/**
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
 */class Gh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Wt(this._lat,e._lat)||Wt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(qi(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:_e("string",on._jsonSchemaVersion),latitude:_e("number"),longitude:_e("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qi(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new an(e.vectorValues);throw new ee(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:_e("string",an._jsonSchemaVersion),vectorValues:_e("object")};const Gm=new RegExp("[~\\*/\\[\\]]");function zm(n,e,t){if(e.search(Gm)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Gh(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function sc(n,e,t,i,r){let s=`Function ${e}() called with invalid data`;s+=". ";let o="";return new ee(Z.INVALID_ARGUMENT,s+n+o)}/**
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
 */class zh{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new nt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(qh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class qm extends zh{data(){return super.data()}}function qh(n,e){return typeof e=="string"?zm(n,e):e instanceof Gh?e._internalPath:e._delegate._internalPath}class ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends zh{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(qh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mn._jsonSchema={type:_e("string",Mn._jsonSchemaVersion),bundleSource:_e("string","DocumentSnapshot"),bundleName:_e("string"),bundle:_e("string")};class xs extends Mn{data(e={}){return super.data(e)}}class Ti{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ps(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new xs(this._firestore,this._userDataWriter,i.key,i,new ps(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new xs(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ps(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new xs(r._firestore,r._userDataWriter,l.doc.key,l.doc,new ps(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Km(l.type),doc:c,oldIndex:u,newIndex:f}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ti._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],r=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),i.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Km(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Mi(61501,{type:n})}}Ti._jsonSchemaVersion="firestore/querySnapshot/1.0",Ti._jsonSchema={type:_e("string",Ti._jsonSchemaVersion),bundleSource:_e("string","QuerySnapshot"),bundleName:_e("string"),bundle:_e("string")};(function(e,t=!0){(function(r){zi=r})(mn),ln(new Bt("firestore",((i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),l=new jm(new Im(i.getProvider("auth-internal")),new Em(o,i.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(u.options.projectId,f)})(o,r),o);return s={useFetchStreams:t,...s},l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),it(jl,$l,e),it(jl,$l,"esm2020")})();var rc={};const oc="@firebase/database",ac="1.1.0";/**
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
 */let Kh="";function Ym(n){Kh=n}/**
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
 */class Jm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ki(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Xm{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Yh=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Jm(e)}}catch{}return new Xm},sn=Yh("localStorage"),Qm=Yh("sessionStorage");/**
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
 */const On=new nr("@firebase/database"),Zm=(function(){let n=1;return function(){return n++}})(),Jh=function(n){const e=ld(n),t=new sd;t.update(e);const i=t.digest();return Ao.encodeByteArray(i)},Ki=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ki.apply(null,i):typeof i=="object"?e+=ye(i):e+=i,e+=" "}return e};let xi=null,lc=!0;const e_=function(n,e){V(!0,"Can't turn on custom loggers persistently."),On.logLevel=ne.VERBOSE,xi=On.log.bind(On)},Te=function(...n){if(lc===!0&&(lc=!1,xi===null&&Qm.get("logging_enabled")===!0&&e_()),xi){const e=Ki.apply(null,n);xi(e)}},Yi=function(n){return function(...e){Te(n,...e)}},po=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ki(...n);On.error(e)},mt=function(...n){const e=`FIREBASE FATAL ERROR: ${Ki(...n)}`;throw On.error(e),new Error(e)},De=function(...n){const e="FIREBASE WARNING: "+Ki(...n);On.warn(e)},t_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&De("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},n_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Bn="[MIN_NAME]",un="[MAX_NAME]",_n=function(n,e){if(n===e)return 0;if(n===Bn||e===un)return-1;if(e===Bn||n===un)return 1;{const t=cc(n),i=cc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},i_=function(n,e){return n===e?0:n<e?-1:1},_i=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ye(e))},zo=function(n){if(typeof n!="object"||n===null)return ye(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ye(e[i]),t+=":",t+=zo(n[e[i]]);return t+="}",t},Xh=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function xe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Qh=function(n){V(!lr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,l,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const f=u.join("");let g="";for(c=0;c<64;c+=8){let d=parseInt(f.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),g=g+d}return g.toLowerCase()},s_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},r_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function o_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const a_=new RegExp("^-?(0*)\\d{1,10}$"),l_=-2147483648,c_=2147483647,cc=function(n){if(a_.test(n)){const e=Number(n);if(e>=l_&&e<=c_)return e}return null},Yn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw De("Exception was thrown by user callback.",t),e},Math.floor(0))}},h_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ai=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class u_{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,He(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){De(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class f_{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',De(e)}}class As{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}As.OWNER="owner";/**
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
 */const qo="5",Zh="v",eu="s",tu="r",nu="f",iu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,su="ls",ru="p",go="ac",ou="websocket",au="long_polling";/**
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
 */class lu{constructor(e,t,i,r,s=!1,o="",l=!1,c=!1,u=null){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function d_(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function cu(n,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let i;if(e===ou)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===au)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);d_(n)&&(t.ns=n.namespace);const r=[];return xe(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class p_{constructor(){this.counters_={}}incrementCounter(e,t=1){ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Vf(this.counters_)}}/**
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
 */const Kr={},Yr={};function Ko(n){const e=n.toString();return Kr[e]||(Kr[e]=new p_),Kr[e]}function g_(n,e){const t=n.toString();return Yr[t]||(Yr[t]=e()),Yr[t]}/**
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
 */class m_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Yn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hc="start",__="close",v_="pLPCommand",y_="pRTLPCB",hu="id",uu="pw",fu="ser",w_="cb",I_="seg",S_="ts",C_="d",E_="dframe",du=1870,pu=30,T_=du-pu,x_=25e3,A_=3e4;class Rn{constructor(e,t,i,r,s,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yi(e),this.stats_=Ko(t),this.urlFn=c=>(this.appCheckToken&&(c[go]=this.appCheckToken),cu(t,au,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new m_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(A_)),n_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yo((...s)=>{const[o,l,c,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hc)this.id=l,this.password=c;else if(o===__)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[hc]="t",i[fu]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[w_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Zh]=qo,this.transportSessionId&&(i[eu]=this.transportSessionId),this.lastSessionId&&(i[su]=this.lastSessionId),this.applicationId&&(i[ru]=this.applicationId),this.appCheckToken&&(i[go]=this.appCheckToken),typeof location<"u"&&location.hostname&&iu.test(location.hostname)&&(i[tu]=nu);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rn.forceAllow_=!0}static forceDisallow(){Rn.forceDisallow_=!0}static isAvailable(){return Rn.forceAllow_?!0:!Rn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!s_()&&!r_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=zc(t),r=Xh(i,T_);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[E_]="t",i[hu]=e,i[uu]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ye(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yo{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Zm(),window[v_+this.uniqueCallbackIdentifier]=e,window[y_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yo.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hu]=this.myID,e[uu]=this.myPW,e[fu]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pu+i.length<=du;){const o=this.pendingSegs.shift();i=i+"&"+I_+r+"="+o.seg+"&"+S_+r+"="+o.ts+"&"+C_+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(x_)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const P_=16384,b_=45e3;let Hs=null;typeof MozWebSocket<"u"?Hs=MozWebSocket:typeof WebSocket<"u"&&(Hs=WebSocket);class Ge{constructor(e,t,i,r,s,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yi(this.connId),this.stats_=Ko(t),this.connURL=Ge.connectionURL_(t,o,l,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[Zh]=qo,typeof location<"u"&&location.hostname&&iu.test(location.hostname)&&(o[tu]=nu),t&&(o[eu]=t),i&&(o[su]=i),r&&(o[go]=r),s&&(o[ru]=s),cu(e,ou,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let i;Jf(),this.mySock=new Hs(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Hs!==null&&!Ge.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ki(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xh(t,P_);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(b_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ge.responsesRequiredToBeHealthy=2;Ge.healthyTimeout=3e4;/**
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
 */class Oi{static get ALL_TRANSPORTS(){return[Rn,Ge]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ge&&Ge.isAvailable();let i=t&&!Ge.previouslyFailed();if(e.webSocketOnly&&(t||De("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ge];else{const r=this.transports_=[];for(const s of Oi.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Oi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Oi.globalTransportInitialized_=!1;/**
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
 */const R_=6e4,k_=5e3,N_=10*1024,D_=100*1024,Jr="t",uc="d",M_="s",fc="r",O_="e",dc="o",pc="a",gc="n",mc="p",L_="h";class F_{constructor(e,t,i,r,s,o,l,c,u,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yi("c:"+this.id+":"),this.transportManager_=new Oi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>D_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>N_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jr in e){const t=e[Jr];t===pc?this.upgradeIfSecondaryHealthy_():t===fc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===dc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_i("t",e),i=_i("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_i("t",e),i=_i("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_i(Jr,e);if(uc in e){const i=e[uc];if(t===L_){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===gc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===M_?this.onConnectionShutdown_(i):t===fc?this.onReset_(i):t===O_?po("Server Error: "+i):t===dc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):po("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qo!==i&&De("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(k_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class gu{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class mu{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){V(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ws extends mu{static getInstance(){return new Ws}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ko()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _c=32,vc=768;class ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function te(){return new ie("")}function q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function jt(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ie(n.pieces_,e)}function Jo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function U_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Li(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function _u(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ie(e,0)}function ce(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new ie(t,0)}function K(n){return n.pieceNum_>=n.pieces_.length}function Ne(n,e){const t=q(n),i=q(e);if(t===null)return e;if(t===i)return Ne(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function V_(n,e){const t=Li(n,0),i=Li(e,0);for(let r=0;r<t.length&&r<i.length;r++){const s=_n(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function Xo(n,e){if(jt(n)!==jt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function We(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(jt(n)>jt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class B_{constructor(e,t){this.errorPrefix_=t,this.parts_=Li(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=tr(this.parts_[i]);vu(this)}}function H_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=tr(e),vu(n)}function W_(n){const e=n.parts_.pop();n.byteLength_-=tr(e),n.parts_.length>0&&(n.byteLength_-=1)}function vu(n){if(n.byteLength_>vc)throw new Error(n.errorPrefix_+"has a key path longer than "+vc+" bytes ("+n.byteLength_+").");if(n.parts_.length>_c)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_c+") or object contains a cycle "+Zt(n))}function Zt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Qo extends mu{static getInstance(){return new Qo}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const vi=1e3,j_=300*1e3,yc=30*1e3,$_=1.3,G_=3e4,z_="server_kill",wc=3;class ft extends gu{constructor(e,t,i,r,s,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ft.nextPersistentConnectionId_++,this.log_=Yi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vi,this.maxReconnectDelay_=j_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ws.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(ye(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new tt,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const c=l.d,u=l.s;ft.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ot(e,"w")){const i=Fn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();De(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||id(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=nd(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):po("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>G_&&(this.reconnectDelay_=vi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ft.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(g){V(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(g)};this.realtime_={close:c,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=d&&d.token,l=new F_(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,h=>{De(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(z_)},s))}catch(g){this.log_("Failed to get token: "+g),o||(this.repoInfo_.nodeAdmin&&De(g),c())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ks(this.interruptReasons_)&&(this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>zo(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new ie(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){Te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wc&&(this.reconnectDelay_=yc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Kh.replace(/\./g,"-")]=1,ko()?e["framework.cordova"]=1:Zc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ws.getInstance().currentlyOnline();return ks(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
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
 */class Y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Y(e,t)}}/**
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
 */class cr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Y(Bn,e),r=new Y(Bn,t);return this.compare(i,r)!==0}minPost(){return Y.MIN}}/**
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
 */let gs;class yu extends cr{static get __EMPTY_NODE(){return gs}static set __EMPTY_NODE(e){gs=e}compare(e,t){return _n(e.name,t.name)}isDefinedOn(e){throw zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Y.MIN}maxPost(){return new Y(un,gs)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,gs)}toString(){return".key"}}const Ln=new yu;/**
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
 */class ms{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??Ee.RED,this.left=r??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,t,i,r,s){return new Ee(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Le.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class q_{copy(e,t,i,r,s){return this}insert(e,t,i){return new Ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,t=Le.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Le(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ms(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ms(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ms(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new q_;/**
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
 */function K_(n,e){return _n(n.name,e.name)}function Zo(n,e){return _n(n,e)}/**
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
 */let mo;function Y_(n){mo=n}const wu=function(n){return typeof n=="number"?"number:"+Qh(n):"string:"+n},Iu=function(n){if(n.isLeafNode()){const e=n.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ot(e,".sv"),"Priority must be a string or number.")}else V(n===mo||n.isEmpty(),"priority of unexpected type.");V(n===mo||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ic;class Ce{static set __childrenNodeConstructor(e){Ic=e}static get __childrenNodeConstructor(){return Ic}constructor(e,t=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:q(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=q(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(V(i!==".priority"||jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Qh(this.value_):e+=this.value_,this.lazyHash_=Jh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=Ce.VALUE_TYPE_ORDER.indexOf(t),s=Ce.VALUE_TYPE_ORDER.indexOf(i);return V(r>=0,"Unknown leaf type: "+t),V(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Su,Cu;function J_(n){Su=n}function X_(n){Cu=n}class Q_ extends cr{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?_n(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(un,new Ce("[PRIORITY-POST]",Cu))}makePost(e,t){const i=Su(e);return new Y(t,new Ce("[PRIORITY-POST]",i))}toString(){return".priority"}}const he=new Q_;/**
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
 */const Z_=Math.log(2);class ev{constructor(e){const t=s=>parseInt(Math.log(s)/Z_,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const js=function(n,e,t,i){n.sort(e);const r=function(c,u){const f=u-c;let g,d;if(f===0)return null;if(f===1)return g=n[c],d=t?t(g):g,new Ee(d,g.node,Ee.BLACK,null,null);{const h=parseInt(f/2,10)+c,m=r(c,h),_=r(h+1,u);return g=n[h],d=t?t(g):g,new Ee(d,g.node,Ee.BLACK,m,_)}},s=function(c){let u=null,f=null,g=n.length;const d=function(m,_){const w=g-m,R=g;g-=m;const P=r(w+1,R),N=n[w],D=t?t(N):N;h(new Ee(D,N.node,_,null,P))},h=function(m){u?(u.left=m,u=m):(f=m,u=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),w=Math.pow(2,c.count-(m+1));_?d(w,Ee.BLACK):(d(w,Ee.BLACK),d(w,Ee.RED))}return f},o=new ev(n.length),l=s(o);return new Le(i||e,l)};/**
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
 */let Xr;const Pn={};class ut{static get Default(){return V(Pn&&he,"ChildrenNode.ts has not been loaded"),Xr=Xr||new ut({".priority":Pn},{".priority":he}),Xr}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Fn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Le?t:null}hasIndex(e){return ot(this.indexSet_,e.toString())}addIndex(e,t){V(e!==Ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(Y.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let l;r?l=js(i,e.getCompare()):l=Pn;const c=e.toString(),u={...this.indexSet_};u[c]=e;const f={...this.indexes_};return f[c]=l,new ut(f,u)}addToIndexes(e,t){const i=Ns(this.indexes_,(r,s)=>{const o=Fn(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),r===Pn)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(Y.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),js(l,o.getCompare())}else return Pn;else{const l=t.get(e.name);let c=r;return l&&(c=c.remove(new Y(e.name,l))),c.insert(e,e.node)}});return new ut(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ns(this.indexes_,r=>{if(r===Pn)return r;{const s=t.get(e.name);return s?r.remove(new Y(e.name,s)):r}});return new ut(i,this.indexSet_)}}/**
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
 */let yi;class j{static get EMPTY_NODE(){return yi||(yi=new j(new Le(Zo),null,ut.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Iu(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yi}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?yi:t}}getChild(e){const t=q(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Y(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?yi:this.priorityNode_;return new j(r,o,s)}}updateChild(e,t){const i=q(e);if(i===null)return t;{V(q(e)!==".priority"||jt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(re(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(he,(o,l)=>{t[o]=l.val(e),i++,s&&j.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wu(this.getPriority().val())+":"),this.forEachChild(he,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Jh(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Y(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Y(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ji?-1:0}withIndex(e){if(e===Ln||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(he),r=t.getIterator(he);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ln?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tv extends j{constructor(){super(new Le(Zo),j.EMPTY_NODE,ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Ji=new tv;Object.defineProperties(Y,{MIN:{value:new Y(Bn,j.EMPTY_NODE)},MAX:{value:new Y(un,Ji)}});yu.__EMPTY_NODE=j.EMPTY_NODE;Ce.__childrenNodeConstructor=j;Y_(Ji);X_(Ji);/**
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
 */const nv=!0;function fe(n,e=null){if(n===null)return j.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ce(t,fe(e))}if(!(n instanceof Array)&&nv){const t=[];let i=!1;if(xe(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=fe(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new Y(o,c)))}}),t.length===0)return j.EMPTY_NODE;const s=js(t,K_,o=>o.name,Zo);if(i){const o=js(t,he.getCompare());return new j(s,fe(e),new ut({".priority":o},{".priority":he}))}else return new j(s,fe(e),ut.Default)}else{let t=j.EMPTY_NODE;return xe(n,(i,r)=>{if(ot(n,i)&&i.substring(0,1)!=="."){const s=fe(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(fe(e))}}J_(fe);/**
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
 */class iv extends cr{constructor(e){super(),this.indexPath_=e,V(!K(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?_n(e.name,t.name):s}makePost(e,t){const i=fe(e),r=j.EMPTY_NODE.updateChild(this.indexPath_,i);return new Y(t,r)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Ji);return new Y(un,e)}toString(){return Li(this.indexPath_,0).join("/")}}/**
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
 */class sv extends cr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?_n(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,t){const i=fe(e);return new Y(t,i)}toString(){return".value"}}const rv=new sv;/**
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
 */function Eu(n){return{type:"value",snapshotNode:n}}function Hn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Fi(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ui(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function ov(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ea{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(r).equals(i.getChild(r))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Fi(t,l)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Hn(t,i)):o.trackChildChange(Ui(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(he,(r,s)=>{t.hasChild(r)||i.trackChildChange(Fi(r,s))}),t.isLeafNode()||t.forEachChild(he,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Ui(r,s,o))}else i.trackChildChange(Hn(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Vi{constructor(e){this.indexedFilter_=new ea(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Vi.getStartPost_(e),this.endPost_=Vi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new Y(t,i))||(i=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=j.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(j.EMPTY_NODE);const s=this;return t.forEachChild(he,(o,l)=>{s.matches(new Y(o,l))||(r=r.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class av{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Vi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new Y(t,i))||(i=j.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))r=r.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:r=r.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const g=this.index_.getCompare();o=(d,h)=>g(h,d)}else o=this.index_.getCompare();const l=e;V(l.numChildren()===this.limit_,"");const c=new Y(t,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(t)){const g=l.getImmediateChild(t);let d=r.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===t||l.hasChild(d.name));)d=r.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,c);if(f&&!i.isEmpty()&&h>=0)return s?.trackChildChange(Ui(t,i,g)),l.updateImmediateChild(t,i);{s?.trackChildChange(Fi(t,g));const _=l.updateImmediateChild(t,j.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s?.trackChildChange(Hn(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return i.isEmpty()?e:f&&o(u,c)>=0?(s!=null&&(s.trackChildChange(Fi(u.name,u.node)),s.trackChildChange(Hn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class ta{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bn}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new ta;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function lv(n){return n.loadsAllData()?new ea(n.getIndex()):n.hasLimit()?new av(n):new Vi(n)}function Sc(n){const e={};if(n.isDefault())return e;let t;if(n.index_===he?t="$priority":n.index_===rv?t="$value":n.index_===Ln?t="$key":(V(n.index_ instanceof iv,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ye(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ye(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ye(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ye(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ye(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Cc(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==he&&(e.i=n.index_.toString()),e}/**
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
 */class $s extends gu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Yi("p:rest:"),this.listens_={}}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=$s.getListenId_(e,i),l={};this.listens_[o]=l;const c=Sc(e._queryParams);this.restRequest_(s+".json",c,(u,f)=>{let g=f;if(u===404&&(g=null,u=null),u===null&&this.onDataUpdate_(s,g,!1,i),Fn(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",r(d,null)}})}unlisten(e,t){const i=$s.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Sc(e._queryParams),i=e._path.toString(),r=new tt;return this.restRequest_(i+".json",t,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qn(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ki(l.responseText)}catch{De("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&De("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class cv{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Gs(){return{value:null,children:new Map}}function Jn(n,e,t){if(K(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=q(e);n.children.has(i)||n.children.set(i,Gs());const r=n.children.get(i);e=re(e),Jn(r,e,t)}}function _o(n,e){if(K(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(he,(i,r)=>{Jn(n,new ie(i),r)}),_o(n,e)}}else if(n.children.size>0){const t=q(e);return e=re(e),n.children.has(t)&&_o(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function vo(n,e,t){n.value!==null?t(e,n.value):hv(n,(i,r)=>{const s=new ie(e.toString()+"/"+i);vo(r,s,t)})}function hv(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class uv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&xe(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
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
 */const Ec=10*1e3,fv=30*1e3,dv=300*1e3;class pv{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new uv(e);const i=Ec+(fv-Ec)*Math.random();Ai(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;xe(e,(r,s)=>{s>0&&ot(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),Ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*dv))}}/**
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
 */var Ke;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ke||(Ke={}));function na(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ia(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sa(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class zs{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Ke.ACK_USER_WRITE,this.source=na()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ie(e));return new zs(te(),t,this.revert)}}else return V(q(this.path)===e,"operationForChild called for unrelated child."),new zs(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class Bi{constructor(e,t){this.source=e,this.path=t,this.type=Ke.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new Bi(this.source,te()):new Bi(this.source,re(this.path))}}/**
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
 */class fn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Ke.OVERWRITE}operationForChild(e){return K(this.path)?new fn(this.source,te(),this.snap.getImmediateChild(e)):new fn(this.source,re(this.path),this.snap)}}/**
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
 */class Wn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Ke.MERGE}operationForChild(e){if(K(this.path)){const t=this.children.subtree(new ie(e));return t.isEmpty()?null:t.value?new fn(this.source,te(),t.value):new Wn(this.source,te(),t)}else return V(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $t{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const t=q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mv(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ov(o.childName,o.snapshotNode))}),wi(n,r,"child_removed",e,i,t),wi(n,r,"child_added",e,i,t),wi(n,r,"child_moved",s,i,t),wi(n,r,"child_changed",e,i,t),wi(n,r,"value",e,i,t),r}function wi(n,e,t,i,r,s){const o=i.filter(l=>l.type===t);o.sort((l,c)=>vv(n,l,c)),o.forEach(l=>{const c=_v(n,l,s);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function _v(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function vv(n,e,t){if(e.childName==null||t.childName==null)throw zn("Should only compare child_ events.");const i=new Y(e.childName,e.snapshotNode),r=new Y(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
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
 */function hr(n,e){return{eventCache:n,serverCache:e}}function Pi(n,e,t,i){return hr(new $t(e,t,i),n.serverCache)}function Tu(n,e,t,i){return hr(n.eventCache,new $t(e,t,i))}function qs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function dn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Qr;const yv=()=>(Qr||(Qr=new Le(i_)),Qr);class ae{static fromObject(e){let t=new ae(null);return xe(e,(i,r)=>{t=t.set(new ie(i),r)}),t}constructor(e,t=yv()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:te(),value:this.value};if(K(e))return null;{const i=q(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(re(e),t);return s!=null?{path:ce(new ie(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const t=q(e),i=this.children.get(t);return i!==null?i.subtree(re(e)):new ae(null)}}set(e,t){if(K(e))return new ae(t,this.children);{const i=q(e),s=(this.children.get(i)||new ae(null)).set(re(e),t),o=this.children.insert(i,s);return new ae(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const t=q(e),i=this.children.get(t);if(i){const r=i.remove(re(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(K(e))return this.value;{const t=q(e),i=this.children.get(t);return i?i.get(re(e)):null}}setTree(e,t){if(K(e))return t;{const i=q(e),s=(this.children.get(i)||new ae(null)).setTree(re(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ae(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ce(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,te(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(K(e))return null;{const s=q(e),o=this.children.get(s);return o?o.findOnPath_(re(e),ce(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,te(),t)}foreachOnPath_(e,t,i){if(K(e))return this;{this.value&&i(t,this.value);const r=q(e),s=this.children.get(r);return s?s.foreachOnPath_(re(e),ce(t,r),i):new ae(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(ce(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Ye{constructor(e){this.writeTree_=e}static empty(){return new Ye(new ae(null))}}function bi(n,e,t){if(K(e))return new Ye(new ae(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Ne(r,e);return s=s.updateChild(o,t),new Ye(n.writeTree_.set(r,s))}else{const r=new ae(t),s=n.writeTree_.setTree(e,r);return new Ye(s)}}}function yo(n,e,t){let i=n;return xe(t,(r,s)=>{i=bi(i,ce(e,r),s)}),i}function Tc(n,e){if(K(e))return Ye.empty();{const t=n.writeTree_.setTree(e,new ae(null));return new Ye(t)}}function wo(n,e){return vn(n,e)!=null}function vn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ne(t.path,e)):null}function xc(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(he,(i,r)=>{e.push(new Y(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Y(i,r.value))}),e}function Ft(n,e){if(K(e))return n;{const t=vn(n,e);return t!=null?new Ye(new ae(t)):new Ye(n.writeTree_.subtree(e))}}function Io(n){return n.writeTree_.isEmpty()}function jn(n,e){return xu(te(),n.writeTree_,e)}function xu(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=xu(ce(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ce(n,".priority"),i)),t}}/**
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
 */function ur(n,e){return Ru(e,n)}function wv(n,e,t,i,r){V(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=bi(n.visibleWrites,e,t)),n.lastWriteId=i}function Iv(n,e,t,i){V(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=yo(n.visibleWrites,e,t),n.lastWriteId=i}function Sv(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Cv(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Ev(l,i.path)?r=!1:We(i.path,l.path)&&(s=!0)),o--}if(r){if(s)return Tv(n),!0;if(i.snap)n.visibleWrites=Tc(n.visibleWrites,i.path);else{const l=i.children;xe(l,c=>{n.visibleWrites=Tc(n.visibleWrites,ce(i.path,c))})}return!0}else return!1}function Ev(n,e){if(n.snap)return We(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&We(ce(n.path,t),e))return!0;return!1}function Tv(n){n.visibleWrites=Au(n.allWrites,xv,te()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function xv(n){return n.visible}function Au(n,e,t){let i=Ye.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let l;if(s.snap)We(t,o)?(l=Ne(t,o),i=bi(i,l,s.snap)):We(o,t)&&(l=Ne(o,t),i=bi(i,te(),s.snap.getChild(l)));else if(s.children){if(We(t,o))l=Ne(t,o),i=yo(i,l,s.children);else if(We(o,t))if(l=Ne(o,t),K(l))i=yo(i,te(),s.children);else{const c=Fn(s.children,q(l));if(c){const u=c.getChild(re(l));i=bi(i,te(),u)}}}else throw zn("WriteRecord should have .snap or .children")}}return i}function Pu(n,e,t,i,r){if(!i&&!r){const s=vn(n.visibleWrites,e);if(s!=null)return s;{const o=Ft(n.visibleWrites,e);if(Io(o))return t;if(t==null&&!wo(o,te()))return null;{const l=t||j.EMPTY_NODE;return jn(o,l)}}}else{const s=Ft(n.visibleWrites,e);if(!r&&Io(s))return t;if(!r&&t==null&&!wo(s,te()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(We(u.path,e)||We(e,u.path))},l=Au(n.allWrites,o,e),c=t||j.EMPTY_NODE;return jn(l,c)}}}function Av(n,e,t){let i=j.EMPTY_NODE;const r=vn(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(he,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=Ft(n.visibleWrites,e);return t.forEachChild(he,(o,l)=>{const c=jn(Ft(s,new ie(o)),l);i=i.updateImmediateChild(o,c)}),xc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Ft(n.visibleWrites,e);return xc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Pv(n,e,t,i,r){V(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,t);if(wo(n.visibleWrites,s))return null;{const o=Ft(n.visibleWrites,s);return Io(o)?r.getChild(t):jn(o,r.getChild(t))}}function bv(n,e,t,i){const r=ce(e,t),s=vn(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=Ft(n.visibleWrites,r);return jn(o,i.getNode().getImmediateChild(t))}else return null}function Rv(n,e){return vn(n.visibleWrites,e)}function kv(n,e,t,i,r,s,o){let l;const c=Ft(n.visibleWrites,e),u=vn(c,te());if(u!=null)l=u;else if(t!=null)l=jn(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],g=o.getCompare(),d=s?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let h=d.getNext();for(;h&&f.length<r;)g(h,i)!==0&&f.push(h),h=d.getNext();return f}else return[]}function Nv(){return{visibleWrites:Ye.empty(),allWrites:[],lastWriteId:-1}}function Ks(n,e,t,i){return Pu(n.writeTree,n.treePath,e,t,i)}function ra(n,e){return Av(n.writeTree,n.treePath,e)}function Ac(n,e,t,i){return Pv(n.writeTree,n.treePath,e,t,i)}function Ys(n,e){return Rv(n.writeTree,ce(n.treePath,e))}function Dv(n,e,t,i,r,s){return kv(n.writeTree,n.treePath,e,t,i,r,s)}function oa(n,e,t){return bv(n.writeTree,n.treePath,e,t)}function bu(n,e){return Ru(ce(n.treePath,e),n.writeTree)}function Ru(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Mv{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,Ui(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,Fi(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,Hn(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ui(i,e.snapshotNode,r.oldSnap));else throw zn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Ov{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ku=new Ov;class aa{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new $t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oa(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:dn(this.viewCache_),s=Dv(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
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
 */function Lv(n){return{filter:n}}function Fv(n,e){V(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Uv(n,e,t,i,r){const s=new Mv;let o,l;if(t.type===Ke.OVERWRITE){const u=t;u.source.fromUser?o=So(n,e,u.path,u.snap,i,r,s):(V(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!K(u.path),o=Js(n,e,u.path,u.snap,i,r,l,s))}else if(t.type===Ke.MERGE){const u=t;u.source.fromUser?o=Bv(n,e,u.path,u.children,i,r,s):(V(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Co(n,e,u.path,u.children,i,r,l,s))}else if(t.type===Ke.ACK_USER_WRITE){const u=t;u.revert?o=jv(n,e,u.path,i,r,s):o=Hv(n,e,u.path,u.affectedTree,i,r,s)}else if(t.type===Ke.LISTEN_COMPLETE)o=Wv(n,e,t.path,i,s);else throw zn("Unknown operation type: "+t.type);const c=s.getChanges();return Vv(e,o,c),{viewCache:o,changes:c}}function Vv(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=qs(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Eu(qs(e)))}}function Nu(n,e,t,i,r,s){const o=e.eventCache;if(Ys(i,t)!=null)return e;{let l,c;if(K(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=dn(e),f=u instanceof j?u:j.EMPTY_NODE,g=ra(i,f);l=n.filter.updateFullNode(e.eventCache.getNode(),g,s)}else{const u=Ks(i,dn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=q(t);if(u===".priority"){V(jt(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const g=Ac(i,t,f,c);g!=null?l=n.filter.updatePriority(f,g):l=o.getNode()}else{const f=re(t);let g;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const d=Ac(i,t,o.getNode(),c);d!=null?g=o.getNode().getImmediateChild(u).updateChild(f,d):g=o.getNode().getImmediateChild(u)}else g=oa(i,u,e.serverCache);g!=null?l=n.filter.updateChild(o.getNode(),u,g,f,r,s):l=o.getNode()}}return Pi(e,l,o.isFullyInitialized()||K(t),n.filter.filtersNodes())}}function Js(n,e,t,i,r,s,o,l){const c=e.serverCache;let u;const f=o?n.filter:n.filter.getIndexedFilter();if(K(t))u=f.updateFullNode(c.getNode(),i,null);else if(f.filtersNodes()&&!c.isFiltered()){const h=c.getNode().updateChild(t,i);u=f.updateFullNode(c.getNode(),h,null)}else{const h=q(t);if(!c.isCompleteForPath(t)&&jt(t)>1)return e;const m=re(t),w=c.getNode().getImmediateChild(h).updateChild(m,i);h===".priority"?u=f.updatePriority(c.getNode(),w):u=f.updateChild(c.getNode(),h,w,m,ku,null)}const g=Tu(e,u,c.isFullyInitialized()||K(t),f.filtersNodes()),d=new aa(r,g,s);return Nu(n,g,t,r,d,l)}function So(n,e,t,i,r,s,o){const l=e.eventCache;let c,u;const f=new aa(r,e,s);if(K(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Pi(e,u,!0,n.filter.filtersNodes());else{const g=q(t);if(g===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),c=Pi(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=re(t),h=l.getNode().getImmediateChild(g);let m;if(K(d))m=i;else{const _=f.getCompleteChild(g);_!=null?Jo(d)===".priority"&&_.getChild(_u(d)).isEmpty()?m=_:m=_.updateChild(d,i):m=j.EMPTY_NODE}if(h.equals(m))c=e;else{const _=n.filter.updateChild(l.getNode(),g,m,d,f,o);c=Pi(e,_,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Pc(n,e){return n.eventCache.isCompleteForChild(e)}function Bv(n,e,t,i,r,s,o){let l=e;return i.foreach((c,u)=>{const f=ce(t,c);Pc(e,q(f))&&(l=So(n,l,f,u,r,s,o))}),i.foreach((c,u)=>{const f=ce(t,c);Pc(e,q(f))||(l=So(n,l,f,u,r,s,o))}),l}function bc(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Co(n,e,t,i,r,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;K(t)?u=i:u=new ae(null).setTree(t,i);const f=e.serverCache.getNode();return u.children.inorderTraversal((g,d)=>{if(f.hasChild(g)){const h=e.serverCache.getNode().getImmediateChild(g),m=bc(n,h,d);c=Js(n,c,new ie(g),m,r,s,o,l)}}),u.children.inorderTraversal((g,d)=>{const h=!e.serverCache.isCompleteForChild(g)&&d.value===null;if(!f.hasChild(g)&&!h){const m=e.serverCache.getNode().getImmediateChild(g),_=bc(n,m,d);c=Js(n,c,new ie(g),_,r,s,o,l)}}),c}function Hv(n,e,t,i,r,s,o){if(Ys(r,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(K(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Js(n,e,t,c.getNode().getChild(t),r,s,l,o);if(K(t)){let u=new ae(null);return c.getNode().forEachChild(Ln,(f,g)=>{u=u.set(new ie(f),g)}),Co(n,e,t,u,r,s,l,o)}else return e}else{let u=new ae(null);return i.foreach((f,g)=>{const d=ce(t,f);c.isCompleteForPath(d)&&(u=u.set(f,c.getNode().getChild(d)))}),Co(n,e,t,u,r,s,l,o)}}function Wv(n,e,t,i,r){const s=e.serverCache,o=Tu(e,s.getNode(),s.isFullyInitialized()||K(t),s.isFiltered());return Nu(n,o,t,i,ku,r)}function jv(n,e,t,i,r,s){let o;if(Ys(i,t)!=null)return e;{const l=new aa(i,e,r),c=e.eventCache.getNode();let u;if(K(t)||q(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ks(i,dn(e));else{const g=e.serverCache.getNode();V(g instanceof j,"serverChildren would be complete if leaf node"),f=ra(i,g)}f=f,u=n.filter.updateFullNode(c,f,s)}else{const f=q(t);let g=oa(i,f,e.serverCache);g==null&&e.serverCache.isCompleteForChild(f)&&(g=c.getImmediateChild(f)),g!=null?u=n.filter.updateChild(c,f,g,re(t),l,s):e.eventCache.getNode().hasChild(f)?u=n.filter.updateChild(c,f,j.EMPTY_NODE,re(t),l,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ks(i,dn(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ys(i,te())!=null,Pi(e,u,o,n.filter.filtersNodes())}}/**
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
 */class $v{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new ea(i.getIndex()),s=lv(i);this.processor_=Lv(s);const o=t.serverCache,l=t.eventCache,c=r.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,l.getNode(),null),f=new $t(c,o.isFullyInitialized(),r.filtersNodes()),g=new $t(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=hr(g,f),this.eventGenerator_=new gv(this.query_)}get query(){return this.query_}}function Gv(n){return n.viewCache_.serverCache.getNode()}function zv(n){return qs(n.viewCache_)}function qv(n,e){const t=dn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!K(e)&&!t.getImmediateChild(q(e)).isEmpty())?t.getChild(e):null}function Rc(n){return n.eventRegistrations_.length===0}function Kv(n,e){n.eventRegistrations_.push(e)}function kc(n,e,t){const i=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Nc(n,e,t,i){e.type===Ke.MERGE&&e.source.queryId!==null&&(V(dn(n.viewCache_),"We should always have a full cache before handling merges"),V(qs(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=Uv(n.processor_,r,e,t,i);return Fv(n.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,Du(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Yv(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(he,(s,o)=>{i.push(Hn(s,o))}),t.isFullyInitialized()&&i.push(Eu(t.getNode())),Du(n,i,t.getNode(),e)}function Du(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return mv(n.eventGenerator_,e,t,r)}/**
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
 */let Xs;class Mu{constructor(){this.views=new Map}}function Jv(n){V(!Xs,"__referenceConstructor has already been defined"),Xs=n}function Xv(){return V(Xs,"Reference.ts has not been loaded"),Xs}function Qv(n){return n.views.size===0}function la(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return V(s!=null,"SyncTree gave us an op for an invalid query."),Nc(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Nc(o,e,t,i));return s}}function Ou(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let l=Ks(t,r?i:null),c=!1;l?c=!0:i instanceof j?(l=ra(t,i),c=!1):(l=j.EMPTY_NODE,c=!1);const u=hr(new $t(l,c,!1),new $t(i,r,!1));return new $v(e,u)}return o}function Zv(n,e,t,i,r,s){const o=Ou(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Kv(o,t),Yv(o,t)}function ey(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const l=Gt(n);if(r==="default")for(const[c,u]of n.views.entries())o=o.concat(kc(u,t,i)),Rc(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||s.push(u.query));else{const c=n.views.get(r);c&&(o=o.concat(kc(c,t,i)),Rc(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return l&&!Gt(n)&&s.push(new(Xv())(e._repo,e._path)),{removed:s,events:o}}function Lu(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ut(n,e){let t=null;for(const i of n.views.values())t=t||qv(i,e);return t}function Fu(n,e){if(e._queryParams.loadsAllData())return fr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Uu(n,e){return Fu(n,e)!=null}function Gt(n){return fr(n)!=null}function fr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qs;function ty(n){V(!Qs,"__referenceConstructor has already been defined"),Qs=n}function ny(){return V(Qs,"Reference.ts has not been loaded"),Qs}let iy=1;class Dc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Nv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vu(n,e,t,i,r){return wv(n.pendingWriteTree_,e,t,i,r),r?Xn(n,new fn(na(),e,t)):[]}function sy(n,e,t,i){Iv(n.pendingWriteTree_,e,t,i);const r=ae.fromObject(t);return Xn(n,new Wn(na(),e,r))}function Dt(n,e,t=!1){const i=Sv(n.pendingWriteTree_,e);if(Cv(n.pendingWriteTree_,e)){let s=new ae(null);return i.snap!=null?s=s.set(te(),!0):xe(i.children,o=>{s=s.set(new ie(o),!0)}),Xn(n,new zs(i.path,s,t))}else return[]}function Xi(n,e,t){return Xn(n,new fn(ia(),e,t))}function ry(n,e,t){const i=ae.fromObject(t);return Xn(n,new Wn(ia(),e,i))}function oy(n,e){return Xn(n,new Bi(ia(),e))}function ay(n,e,t){const i=ha(n,t);if(i){const r=ua(i),s=r.path,o=r.queryId,l=Ne(s,e),c=new Bi(sa(o),l);return fa(n,s,c)}else return[]}function Zs(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Uu(o,e))){const c=ey(o,e,t,i);Qv(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const u=c.removed;if(l=c.events,!r){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,g=n.syncPointTree_.findOnPath(s,(d,h)=>Gt(h));if(f&&!g){const d=n.syncPointTree_.subtree(s);if(!d.isEmpty()){const h=hy(d);for(let m=0;m<h.length;++m){const _=h[m],w=_.query,R=ju(n,_);n.listenProvider_.startListening(Ri(w),Hi(n,w),R.hashFn,R.onComplete)}}}!g&&u.length>0&&!i&&(f?n.listenProvider_.stopListening(Ri(e),null):u.forEach(d=>{const h=n.queryToTagMap.get(dr(d));n.listenProvider_.stopListening(Ri(d),h)}))}uy(n,u)}return l}function Bu(n,e,t,i){const r=ha(n,i);if(r!=null){const s=ua(r),o=s.path,l=s.queryId,c=Ne(o,e),u=new fn(sa(l),c,t);return fa(n,o,u)}else return[]}function ly(n,e,t,i){const r=ha(n,i);if(r){const s=ua(r),o=s.path,l=s.queryId,c=Ne(o,e),u=ae.fromObject(t),f=new Wn(sa(l),c,u);return fa(n,o,f)}else return[]}function Eo(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(d,h)=>{const m=Ne(d,r);s=s||Ut(h,m),o=o||Gt(h)});let l=n.syncPointTree_.get(r);l?(o=o||Gt(l),s=s||Ut(l,te())):(l=new Mu,n.syncPointTree_=n.syncPointTree_.set(r,l));let c;s!=null?c=!0:(c=!1,s=j.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((h,m)=>{const _=Ut(m,te());_&&(s=s.updateImmediateChild(h,_))}));const u=Uu(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=dr(e);V(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=fy();n.queryToTagMap.set(d,h),n.tagToQueryMap.set(h,d)}const f=ur(n.pendingWriteTree_,r);let g=Zv(l,e,t,f,s,c);if(!u&&!o&&!i){const d=Fu(l,e);g=g.concat(dy(n,e,d))}return g}function ca(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ne(o,e),u=Ut(l,c);if(u)return u});return Pu(r,e,s,t,!0)}function cy(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(u,f)=>{const g=Ne(u,t);i=i||Ut(f,g)});let r=n.syncPointTree_.get(t);r?i=i||Ut(r,te()):(r=new Mu,n.syncPointTree_=n.syncPointTree_.set(t,r));const s=i!=null,o=s?new $t(i,!0,!1):null,l=ur(n.pendingWriteTree_,e._path),c=Ou(r,e,l,s?o.getNode():j.EMPTY_NODE,s);return zv(c)}function Xn(n,e){return Hu(e,n.syncPointTree_,null,ur(n.pendingWriteTree_,te()))}function Hu(n,e,t,i){if(K(n.path))return Wu(n,e,t,i);{const r=e.get(te());t==null&&r!=null&&(t=Ut(r,te()));let s=[];const o=q(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,f=bu(i,o);s=s.concat(Hu(l,c,u,f))}return r&&(s=s.concat(la(r,n,i,t))),s}}function Wu(n,e,t,i){const r=e.get(te());t==null&&r!=null&&(t=Ut(r,te()));let s=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=bu(i,o),f=n.operationForChild(o);f&&(s=s.concat(Wu(f,l,c,u)))}),r&&(s=s.concat(la(r,n,i,t))),s}function ju(n,e){const t=e.query,i=Hi(n,t);return{hashFn:()=>(Gv(e)||j.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?ay(n,t._path,i):oy(n,t._path);{const s=o_(r,t);return Zs(n,t,null,s)}}}}function Hi(n,e){const t=dr(e);return n.queryToTagMap.get(t)}function dr(n){return n._path.toString()+"$"+n._queryIdentifier}function ha(n,e){return n.tagToQueryMap.get(e)}function ua(n){const e=n.indexOf("$");return V(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ie(n.substr(0,e))}}function fa(n,e,t){const i=n.syncPointTree_.get(e);V(i,"Missing sync point for query tag that we're tracking");const r=ur(n.pendingWriteTree_,e);return la(i,t,r,null)}function hy(n){return n.fold((e,t,i)=>{if(t&&Gt(t))return[fr(t)];{let r=[];return t&&(r=Lu(t)),xe(i,(s,o)=>{r=r.concat(o)}),r}})}function Ri(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ny())(n._repo,n._path):n}function uy(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=dr(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function fy(){return iy++}function dy(n,e,t){const i=e._path,r=Hi(n,e),s=ju(n,t),o=n.listenProvider_.startListening(Ri(e),r,s.hashFn,s.onComplete),l=n.syncPointTree_.subtree(i);if(r)V(!Gt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,f,g)=>{if(!K(u)&&f&&Gt(f))return[fr(f).query];{let d=[];return f&&(d=d.concat(Lu(f).map(h=>h.query))),xe(g,(h,m)=>{d=d.concat(m)}),d}});for(let u=0;u<c.length;++u){const f=c[u];n.listenProvider_.stopListening(Ri(f),Hi(n,f))}}return o}/**
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
 */class da{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new da(t)}node(){return this.node_}}class pa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ce(this.path_,e);return new pa(this.syncTree_,t)}node(){return ca(this.syncTree_,this.path_)}}const py=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mc=function(n,e,t){if(!n||typeof n!="object")return n;if(V(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return gy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return my(n[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},gy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+n)}},my=function(n,e,t){n.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&V(!1,"Unexpected increment value: "+i);const r=e.node();if(V(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},$u=function(n,e,t,i){return ga(e,new pa(t,n),i)},Gu=function(n,e,t){return ga(n,new da(e),t)};function ga(n,e,t){const i=n.getPriority().val(),r=Mc(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,l=Mc(o.getValue(),e,t);return l!==o.getValue()||r!==o.getPriority().val()?new Ce(l,fe(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ce(r))),o.forEachChild(he,(l,c)=>{const u=ga(c,e.getImmediateChild(l),t);u!==c&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class ma{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function _a(n,e){let t=e instanceof ie?e:new ie(e),i=n,r=q(t);for(;r!==null;){const s=Fn(i.node.children,r)||{children:{},childCount:0};i=new ma(r,i,s),t=re(t),r=q(t)}return i}function Qn(n){return n.node.value}function zu(n,e){n.node.value=e,To(n)}function qu(n){return n.node.childCount>0}function _y(n){return Qn(n)===void 0&&!qu(n)}function pr(n,e){xe(n.node.children,(t,i)=>{e(new ma(t,n,i))})}function Ku(n,e,t,i){t&&e(n),pr(n,r=>{Ku(r,e,!0)})}function vy(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Qi(n){return new ie(n.parent===null?n.name:Qi(n.parent)+"/"+n.name)}function To(n){n.parent!==null&&yy(n.parent,n.name,n)}function yy(n,e,t){const i=_y(t),r=ot(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,To(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,To(n))}/**
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
 */const wy=/[\[\].#$\/\u0000-\u001F\u007F]/,Iy=/[\[\].#$\u0000-\u001F\u007F]/,Zr=10*1024*1024,va=function(n){return typeof n=="string"&&n.length!==0&&!wy.test(n)},Yu=function(n){return typeof n=="string"&&n.length!==0&&!Iy.test(n)},Sy=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yu(n)},Ju=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!lr(n)||n&&typeof n=="object"&&ot(n,".sv")},er=function(n,e,t,i){i&&e===void 0||gr(Un(n,"value"),e,t)},gr=function(n,e,t){const i=t instanceof ie?new B_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Zt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Zt(i)+" with contents = "+e.toString());if(lr(e))throw new Error(n+"contains "+e.toString()+" "+Zt(i));if(typeof e=="string"&&e.length>Zr/3&&tr(e)>Zr)throw new Error(n+"contains a string greater than "+Zr+" utf8 bytes "+Zt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(xe(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!va(o)))throw new Error(n+" contains an invalid key ("+o+") "+Zt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);H_(i,o),gr(n,l,i),W_(i)}),r&&s)throw new Error(n+' contains ".value" child '+Zt(i)+" in addition to actual children.")}},Cy=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const s=Li(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!va(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(V_);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&We(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Xu=function(n,e,t,i){const r=Un(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];xe(e,(o,l)=>{const c=new ie(o);if(gr(r,l,ce(t,c)),Jo(c)===".priority"&&!Ju(l))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),Cy(r,s)},Ey=function(n,e,t){if(lr(e))throw new Error(Un(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ju(e))throw new Error(Un(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Qu=function(n,e,t,i){if(!Yu(t))throw new Error(Un(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ty=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qu(n,e,t)},rn=function(n,e){if(q(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},xy=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!va(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Sy(t))throw new Error(Un(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Ay{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mr(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!Xo(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function Zu(n,e,t){mr(n,t),ef(n,i=>Xo(i,e))}function je(n,e,t){mr(n,t),ef(n,i=>We(i,e)||We(e,i))}function ef(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(Py(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Py(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();xi&&Te("event: "+t.toString()),Yn(i)}}}/**
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
 */const by="repo_interrupt",Ry=25;class ky{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ay,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Gs(),this.transactionQueueTree_=new ma,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ny(n,e,t){if(n.stats_=Ko(n.repoInfo_),n.forceRestClient_||h_())n.server_=new $s(n.repoInfo_,(i,r,s,o)=>{Oc(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Lc(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ft(n.repoInfo_,e,(i,r,s,o)=>{Oc(n,i,r,s,o)},i=>{Lc(n,i)},i=>{Dy(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=g_(n.repoInfo_,()=>new pv(n.stats_,n.server_)),n.infoData_=new cv,n.infoSyncTree_=new Dc({startListening:(i,r,s,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=Xi(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ya(n,"connected",!1),n.serverSyncTree_=new Dc({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(l,c)=>{const u=o(l,c);je(n.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function tf(n){const t=n.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function _r(n){return py({timestamp:tf(n)})}function Oc(n,e,t,i,r){n.dataUpdateCount++;const s=new ie(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=Ns(t,u=>fe(u));o=ly(n.serverSyncTree_,s,c,r)}else{const c=fe(t);o=Bu(n.serverSyncTree_,s,c,r)}else if(i){const c=Ns(t,u=>fe(u));o=ry(n.serverSyncTree_,s,c)}else{const c=fe(t);o=Xi(n.serverSyncTree_,s,c)}let l=s;o.length>0&&(l=$n(n,s)),je(n.eventQueue_,l,o)}function Lc(n,e){ya(n,"connected",e),e===!1&&Fy(n)}function Dy(n,e){xe(e,(t,i)=>{ya(n,t,i)})}function ya(n,e,t){const i=new ie("/.info/"+e),r=fe(t);n.infoData_.updateSnapshot(i,r);const s=Xi(n.infoSyncTree_,i,r);je(n.eventQueue_,i,s)}function wa(n){return n.nextWriteId_++}function My(n,e,t){const i=cy(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(r=>{const s=fe(r).withIndex(e._queryParams.getIndex());Eo(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Xi(n.serverSyncTree_,e._path,s);else{const l=Hi(n.serverSyncTree_,e);o=Bu(n.serverSyncTree_,e._path,s,l)}return je(n.eventQueue_,e._path,o),Zs(n.serverSyncTree_,e,t,null,!0),s},r=>(Zi(n,"get for query "+ye(e)+" failed: "+r),Promise.reject(new Error(r))))}function Oy(n,e,t,i,r){Zi(n,"set",{path:e.toString(),value:t,priority:i});const s=_r(n),o=fe(t,i),l=ca(n.serverSyncTree_,e),c=Gu(o,l,s),u=wa(n),f=Vu(n.serverSyncTree_,e,c,u,!0);mr(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(d,h)=>{const m=d==="ok";m||De("set at "+e+" failed: "+d);const _=Dt(n.serverSyncTree_,u,!m);je(n.eventQueue_,e,_),zt(n,r,d,h)});const g=Sa(n,e);$n(n,g),je(n.eventQueue_,g,[])}function Ly(n,e,t,i){Zi(n,"update",{path:e.toString(),value:t});let r=!0;const s=_r(n),o={};if(xe(t,(l,c)=>{r=!1,o[l]=$u(ce(e,l),fe(c),n.serverSyncTree_,s)}),r)Te("update() called with empty data.  Don't do anything."),zt(n,i,"ok",void 0);else{const l=wa(n),c=sy(n.serverSyncTree_,e,o,l);mr(n.eventQueue_,c),n.server_.merge(e.toString(),t,(u,f)=>{const g=u==="ok";g||De("update at "+e+" failed: "+u);const d=Dt(n.serverSyncTree_,l,!g),h=d.length>0?$n(n,e):e;je(n.eventQueue_,h,d),zt(n,i,u,f)}),xe(t,u=>{const f=Sa(n,ce(e,u));$n(n,f)}),je(n.eventQueue_,e,[])}}function Fy(n){Zi(n,"onDisconnectEvents");const e=_r(n),t=Gs();vo(n.onDisconnect_,te(),(r,s)=>{const o=$u(r,s,n.serverSyncTree_,e);Jn(t,r,o)});let i=[];vo(t,te(),(r,s)=>{i=i.concat(Xi(n.serverSyncTree_,r,s));const o=Sa(n,r);$n(n,o)}),n.onDisconnect_=Gs(),je(n.eventQueue_,te(),i)}function Uy(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&_o(n.onDisconnect_,e),zt(n,t,i,r)})}function Fc(n,e,t,i){const r=fe(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Jn(n.onDisconnect_,e,r),zt(n,i,s,o)})}function Vy(n,e,t,i,r){const s=fe(t,i);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,l)=>{o==="ok"&&Jn(n.onDisconnect_,e,s),zt(n,r,o,l)})}function By(n,e,t,i){if(ks(t)){Te("onDisconnect().update() called with empty data.  Don't do anything."),zt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,s)=>{r==="ok"&&xe(t,(o,l)=>{const c=fe(l);Jn(n.onDisconnect_,ce(e,o),c)}),zt(n,i,r,s)})}function Hy(n,e,t){let i;q(e._path)===".info"?i=Eo(n.infoSyncTree_,e,t):i=Eo(n.serverSyncTree_,e,t),Zu(n.eventQueue_,e._path,i)}function Wy(n,e,t){let i;q(e._path)===".info"?i=Zs(n.infoSyncTree_,e,t):i=Zs(n.serverSyncTree_,e,t),Zu(n.eventQueue_,e._path,i)}function jy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(by)}function Zi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Te(t,...e)}function zt(n,e,t,i){e&&Yn(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function nf(n,e,t){return ca(n.serverSyncTree_,e,t)||j.EMPTY_NODE}function Ia(n,e=n.transactionQueueTree_){if(e||vr(n,e),Qn(e)){const t=rf(n,e);V(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&$y(n,Qi(e),t)}else qu(e)&&pr(e,t=>{Ia(n,t)})}function $y(n,e,t){const i=t.map(u=>u.currentWriteId),r=nf(n,e,i);let s=r;const o=r.hash();for(let u=0;u<t.length;u++){const f=t[u];V(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const g=Ne(e,f.path);s=s.updateChild(g,f.currentOutputSnapshotRaw)}const l=s.val(!0),c=e;n.server_.put(c.toString(),l,u=>{Zi(n,"transaction put response",{path:c.toString(),status:u});let f=[];if(u==="ok"){const g=[];for(let d=0;d<t.length;d++)t[d].status=2,f=f.concat(Dt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&g.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();vr(n,_a(n.transactionQueueTree_,e)),Ia(n,n.transactionQueueTree_),je(n.eventQueue_,e,f);for(let d=0;d<g.length;d++)Yn(g[d])}else{if(u==="datastale")for(let g=0;g<t.length;g++)t[g].status===3?t[g].status=4:t[g].status=0;else{De("transaction at "+c.toString()+" failed: "+u);for(let g=0;g<t.length;g++)t[g].status=4,t[g].abortReason=u}$n(n,e)}},o)}function $n(n,e){const t=sf(n,e),i=Qi(t),r=rf(n,t);return Gy(n,r,i),i}function Gy(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Ne(t,c.path);let f=!1,g;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,g=c.abortReason,r=r.concat(Dt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Ry)f=!0,g="maxretry",r=r.concat(Dt(n.serverSyncTree_,c.currentWriteId,!0));else{const d=nf(n,c.path,o);c.currentInputSnapshot=d;const h=e[l].update(d.val());if(h!==void 0){gr("transaction failed: Data returned ",h,c.path);let m=fe(h);typeof h=="object"&&h!=null&&ot(h,".priority")||(m=m.updatePriority(d.getPriority()));const w=c.currentWriteId,R=_r(n),P=Gu(m,d,R);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=P,c.currentWriteId=wa(n),o.splice(o.indexOf(w),1),r=r.concat(Vu(n.serverSyncTree_,c.path,P,c.currentWriteId,c.applyLocally)),r=r.concat(Dt(n.serverSyncTree_,w,!0))}else f=!0,g="nodata",r=r.concat(Dt(n.serverSyncTree_,c.currentWriteId,!0))}je(n.eventQueue_,t,r),r=[],f&&(e[l].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[l].unwatcher),e[l].onComplete&&(g==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(g),!1,null))))}vr(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Yn(i[l]);Ia(n,n.transactionQueueTree_)}function sf(n,e){let t,i=n.transactionQueueTree_;for(t=q(e);t!==null&&Qn(i)===void 0;)i=_a(i,t),e=re(e),t=q(e);return i}function rf(n,e){const t=[];return of(n,e,t),t.sort((i,r)=>i.order-r.order),t}function of(n,e,t){const i=Qn(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);pr(e,r=>{of(n,r,t)})}function vr(n,e){const t=Qn(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,zu(e,t.length>0?t:void 0)}pr(e,i=>{vr(n,i)})}function Sa(n,e){const t=Qi(sf(n,e)),i=_a(n.transactionQueueTree_,e);return vy(i,r=>{eo(n,r)}),eo(n,i),Ku(i,r=>{eo(n,r)}),t}function eo(n,e){const t=Qn(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Dt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zu(e,void 0):t.length=s+1,je(n.eventQueue_,Qi(e),r);for(let o=0;o<i.length;o++)Yn(i[o])}}/**
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
 */function zy(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function qy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):De(`Invalid query segment '${t}' in query '${n}'`)}return e}const Uc=function(n,e){const t=Ky(n),i=t.namespace;t.domain==="firebase.com"&&mt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&mt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||t_();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lu(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new ie(t.pathString)}},Ky=function(n){let e="",t="",i="",r="",s="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let f=n.indexOf("/");f===-1&&(f=n.length);let g=n.indexOf("?");g===-1&&(g=n.length),e=n.substring(0,Math.min(f,g)),f<g&&(r=zy(n.substring(f,g)));const d=qy(n.substring(Math.min(n.length,g)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),s=i}"ns"in d&&(s=d.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:r,namespace:s}};/**
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
 */const Vc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Yy=(function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Vc.charAt(t%64),t=Math.floor(t/64);V(t===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Vc.charAt(e[r]);return V(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class af{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class lf{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class cf{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Jy{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new tt;return Uy(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rn("OnDisconnect.remove",this._path);const e=new tt;return Fc(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rn("OnDisconnect.set",this._path),er("OnDisconnect.set",e,this._path,!1);const t=new tt;return Fc(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){rn("OnDisconnect.setWithPriority",this._path),er("OnDisconnect.setWithPriority",e,this._path,!1),Ey("OnDisconnect.setWithPriority",t);const i=new tt;return Vy(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){rn("OnDisconnect.update",this._path),Xu("OnDisconnect.update",e,this._path);const t=new tt;return By(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Ca{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return K(this._path)?null:Jo(this._path)}get ref(){return new at(this._repo,this._path)}get _queryIdentifier(){const e=Cc(this._queryParams),t=zo(e);return t==="{}"?"default":t}get _queryObject(){return Cc(this._queryParams)}isEqual(e){if(e=Oe(e),!(e instanceof Ca))return!1;const t=this._repo===e._repo,i=Xo(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+U_(this._path)}}class at extends Ca{constructor(e,t){super(e,t,new ta,!1)}get parent(){const e=_u(this._path);return e===null?null:new at(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Gn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ie(e),i=pn(this.ref,e);return new Gn(this._node.getChild(t),i,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Gn(r,pn(this.ref,i),he)))}hasChild(e){const t=new ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bc(n,e){return n=Oe(n),n._checkNotDeleted("ref"),e!==void 0?pn(n._root,e):n._root}function pn(n,e){return n=Oe(n),q(n._path)===null?Ty("child","path",e):Qu("child","path",e),new at(n._repo,ce(n._path,e))}function to(n){return n=Oe(n),new Jy(n._repo,n._path)}function Xy(n,e){n=Oe(n),rn("push",n._path),er("push",e,n._path,!0);const t=tf(n._repo),i=Yy(t),r=pn(n,i),s=pn(n,i);let o;return o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function _s(n){return rn("remove",n._path),en(n,null)}function en(n,e){n=Oe(n),rn("set",n._path),er("set",e,n._path,!1);const t=new tt;return Oy(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function no(n,e){Xu("update",e,n._path);const t=new tt;return Ly(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function vs(n){n=Oe(n);const e=new cf(()=>{}),t=new yr(e);return My(n._repo,n,t).then(i=>new Gn(i,new at(n._repo,n._path),n._queryParams.getIndex()))}class yr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new af("value",this,new Gn(e.snapshotNode,new at(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new lf(this,e,t):null}matches(e){return e instanceof yr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ea{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new lf(this,e,t):null}createEvent(e,t){V(e.childName!=null,"Child events should have a childName.");const i=pn(new at(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new af(e.type,this,new Gn(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ea?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hf(n,e,t,i,r){const s=new cf(t,void 0),o=e==="value"?new yr(s):new Ea(e,s);return Hy(n._repo,n,o),()=>Wy(n._repo,n,o)}function ys(n,e,t,i){return hf(n,"value",e)}function Qy(n,e,t,i){return hf(n,"child_added",e)}Jv(at);ty(at);/**
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
 */const Zy="FIREBASE_DATABASE_EMULATOR_HOST",xo={};let ew=!1;function tw(n,e,t,i){const r=e.lastIndexOf(":"),s=e.substring(0,r),o=gn(s);n.repoInfo_=new lu(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function nw(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||mt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Uc(s,r),l=o.repoInfo,c;typeof process<"u"&&rc&&(c=rc[Zy]),c?(s=`http://${c}?ns=${l.namespace}`,o=Uc(s,r),l=o.repoInfo):o.repoInfo.secure;const u=new f_(n.name,n.options,e);xy("Invalid Firebase Database URL",o),K(o.path)||mt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=sw(l,n,u,new u_(n,t));return new rw(f,n)}function iw(n,e){const t=xo[e];(!t||t[n.key]!==n)&&mt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),jy(n),delete t[n.key]}function sw(n,e,t,i){let r=xo[e.name];r||(r={},xo[e.name]=r);let s=r[n.toURLString()];return s&&mt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ky(n,ew,t,i),r[n.toURLString()]=s,s}class rw{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ny(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new at(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mt("Cannot call "+e+" on a deleted database.")}}function ow(n=Do(),e){const t=ir(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Yc("database");i&&uf(t,...i)}return t}function uf(n,e,t,i={}){n=Oe(n),n._checkNotDeleted("useEmulator");const r=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&Vt(i,s.repoInfo_.emulatorOptions))return;mt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&mt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new As(As.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:Qc(i.mockUserToken,n.app.options.projectId);o=new As(l)}gn(e)&&(bo(e),Ro("Database",!0)),tw(s,r,i,o)}/**
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
 */function aw(n){Ym(mn),ln(new Bt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return nw(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),it(oc,ac,n),it(oc,ac,"esm2020")}/**
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
 */const lw={".sv":"timestamp"};function ws(){return lw}ft.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ft.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};aw();const cw=(n,e=!1)=>{const t=ih(n,`app-${Math.random().toString(36).slice(2)}`),i=mm(t),r=$m(t),s=ow(t);return e&&($h(r,"localhost",8080),Eh(i,"http://localhost:9099"),uf(s,"localhost",9e3)),console.log("Firebase initialized",{isDev:e}),{app:t,db:r,rtdb:s,auth:i}},hw={apiKey:"AIzaSyB2j6UfZB3li9Dbe0XsLO72askyXq2Qg4M",authDomain:"ducks-833f0.firebaseapp.com",databaseURL:"https://ducks-833f0-default-rtdb.europe-west1.firebasedatabase.app",projectId:"ducks-833f0",storageBucket:"ducks-833f0.firebasestorage.app",messagingSenderId:"61953534595",appId:"1:61953534595:web:cb822598005187469889b6"},Hc={isDev:!1,firebase:hw};var Wc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ps={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var uw=Ps.exports,jc;function fw(){return jc||(jc=1,(function(n,e){(function(i,r){n.exports=r()})(uw,function(){return(function(t){var i={};function r(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=i,r.d=function(s,o,l){r.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:l})},r.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,o){if(o&1&&(s=r(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var c in s)r.d(l,c,(function(u){return s[u]}).bind(null,c));return l},r.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(o,"a",o),o},r.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},r.p="",r(r.s=20)})([(function(t,i){var r={};t.exports=r,(function(){r._baseDelta=1e3/60,r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(o,l){var c,u;typeof l=="boolean"?(c=2,u=l):(c=1,u=!0);for(var f=c;f<arguments.length;f++){var g=arguments[f];if(g)for(var d in g)u&&g[d]&&g[d].constructor===Object&&(!o[d]||o[d].constructor===Object)?(o[d]=o[d]||{},r.extend(o[d],u,g[d])):o[d]=g[d]}return o},r.clone=function(o,l){return r.extend({},l,o)},r.keys=function(o){if(Object.keys)return Object.keys(o);var l=[];for(var c in o)l.push(c);return l},r.values=function(o){var l=[];if(Object.keys){for(var c=Object.keys(o),u=0;u<c.length;u++)l.push(o[c[u]]);return l}for(var f in o)l.push(o[f]);return l},r.get=function(o,l,c,u){l=l.split(".").slice(c,u);for(var f=0;f<l.length;f+=1)o=o[l[f]];return o},r.set=function(o,l,c,u,f){var g=l.split(".").slice(u,f);return r.get(o,l,0,-1)[g[g.length-1]]=c,c},r.shuffle=function(o){for(var l=o.length-1;l>0;l--){var c=Math.floor(r.random()*(l+1)),u=o[l];o[l]=o[c],o[c]=u}return o},r.choose=function(o){return o[Math.floor(r.random()*o.length)]},r.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},r.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},r.isFunction=function(o){return typeof o=="function"},r.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},r.isString=function(o){return toString.call(o)==="[object String]"},r.clamp=function(o,l,c){return o<l?l:o>c?c:o},r.sign=function(o){return o<0?-1:1},r.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(o,l){return o=typeof o<"u"?o:0,l=typeof l<"u"?l:1,o+s()*(l-o)};var s=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[o]||(r.warn(o),r._warnedOnce[o]=!0)},r.deprecated=function(o,l,c){o[l]=r.chain(function(){r.warnOnce("🔅 deprecated 🔅",c)},o[l])},r.nextId=function(){return r._nextId++},r.indexOf=function(o,l){if(o.indexOf)return o.indexOf(l);for(var c=0;c<o.length;c++)if(o[c]===l)return c;return-1},r.map=function(o,l){if(o.map)return o.map(l);for(var c=[],u=0;u<o.length;u+=1)c.push(l(o[u]));return c},r.topologicalSort=function(o){var l=[],c=[],u=[];for(var f in o)!c[f]&&!u[f]&&r._topologicalSort(f,c,u,o,l);return l},r._topologicalSort=function(o,l,c,u,f){var g=u[o]||[];c[o]=!0;for(var d=0;d<g.length;d+=1){var h=g[d];c[h]||l[h]||r._topologicalSort(h,l,c,u,f)}c[o]=!1,l[o]=!0,f.push(o)},r.chain=function(){for(var o=[],l=0;l<arguments.length;l+=1){var c=arguments[l];c._chained?o.push.apply(o,c._chained):o.push(c)}var u=function(){for(var f,g=new Array(arguments.length),d=0,h=arguments.length;d<h;d++)g[d]=arguments[d];for(d=0;d<o.length;d+=1){var m=o[d].apply(f,g);typeof m<"u"&&(f=m)}return f};return u._chained=o,u},r.chainPathBefore=function(o,l,c){return r.set(o,l,r.chain(c,r.get(o,l)))},r.chainPathAfter=function(o,l,c){return r.set(o,l,r.chain(r.get(o,l),c))},r.setDecomp=function(o){r._decomp=o},r.getDecomp=function(){var o=r._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof Wc<"u"&&(o=Wc.decomp)}catch{o=null}return o}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(s){var o={min:{x:0,y:0},max:{x:0,y:0}};return s&&r.update(o,s),o},r.update=function(s,o,l){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var c=0;c<o.length;c++){var u=o[c];u.x>s.max.x&&(s.max.x=u.x),u.x<s.min.x&&(s.min.x=u.x),u.y>s.max.y&&(s.max.y=u.y),u.y<s.min.y&&(s.min.y=u.y)}l&&(l.x>0?s.max.x+=l.x:s.min.x+=l.x,l.y>0?s.max.y+=l.y:s.min.y+=l.y)},r.contains=function(s,o){return o.x>=s.min.x&&o.x<=s.max.x&&o.y>=s.min.y&&o.y<=s.max.y},r.overlaps=function(s,o){return s.min.x<=o.max.x&&s.max.x>=o.min.x&&s.max.y>=o.min.y&&s.min.y<=o.max.y},r.translate=function(s,o){s.min.x+=o.x,s.max.x+=o.x,s.min.y+=o.y,s.max.y+=o.y},r.shift=function(s,o){var l=s.max.x-s.min.x,c=s.max.y-s.min.y;s.min.x=o.x,s.max.x=o.x+l,s.min.y=o.y,s.max.y=o.y+c}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(s,o){return{x:s||0,y:o||0}},r.clone=function(s){return{x:s.x,y:s.y}},r.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},r.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},r.rotate=function(s,o,l){var c=Math.cos(o),u=Math.sin(o);l||(l={});var f=s.x*c-s.y*u;return l.y=s.x*u+s.y*c,l.x=f,l},r.rotateAbout=function(s,o,l,c){var u=Math.cos(o),f=Math.sin(o);c||(c={});var g=l.x+((s.x-l.x)*u-(s.y-l.y)*f);return c.y=l.y+((s.x-l.x)*f+(s.y-l.y)*u),c.x=g,c},r.normalise=function(s){var o=r.magnitude(s);return o===0?{x:0,y:0}:{x:s.x/o,y:s.y/o}},r.dot=function(s,o){return s.x*o.x+s.y*o.y},r.cross=function(s,o){return s.x*o.y-s.y*o.x},r.cross3=function(s,o,l){return(o.x-s.x)*(l.y-s.y)-(o.y-s.y)*(l.x-s.x)},r.add=function(s,o,l){return l||(l={}),l.x=s.x+o.x,l.y=s.y+o.y,l},r.sub=function(s,o,l){return l||(l={}),l.x=s.x-o.x,l.y=s.y-o.y,l},r.mult=function(s,o){return{x:s.x*o,y:s.y*o}},r.div=function(s,o){return{x:s.x/o,y:s.y/o}},r.perp=function(s,o){return o=o===!0?-1:1,{x:o*-s.y,y:o*s.x}},r.neg=function(s){return{x:-s.x,y:-s.y}},r.angle=function(s,o){return Math.atan2(o.y-s.y,o.x-s.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]})()}),(function(t,i,r){var s={};t.exports=s;var o=r(2),l=r(0);(function(){s.create=function(c,u){for(var f=[],g=0;g<c.length;g++){var d=c[g],h={x:d.x,y:d.y,index:g,body:u,isInternal:!1};f.push(h)}return f},s.fromPath=function(c,u){var f=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,g=[];return c.replace(f,function(d,h,m){g.push({x:parseFloat(h),y:parseFloat(m)})}),s.create(g,u)},s.centre=function(c){for(var u=s.area(c,!0),f={x:0,y:0},g,d,h,m=0;m<c.length;m++)h=(m+1)%c.length,g=o.cross(c[m],c[h]),d=o.mult(o.add(c[m],c[h]),g),f=o.add(f,d);return o.div(f,6*u)},s.mean=function(c){for(var u={x:0,y:0},f=0;f<c.length;f++)u.x+=c[f].x,u.y+=c[f].y;return o.div(u,c.length)},s.area=function(c,u){for(var f=0,g=c.length-1,d=0;d<c.length;d++)f+=(c[g].x-c[d].x)*(c[g].y+c[d].y),g=d;return u?f/2:Math.abs(f)/2},s.inertia=function(c,u){for(var f=0,g=0,d=c,h,m,_=0;_<d.length;_++)m=(_+1)%d.length,h=Math.abs(o.cross(d[m],d[_])),f+=h*(o.dot(d[m],d[m])+o.dot(d[m],d[_])+o.dot(d[_],d[_])),g+=h;return u/6*(f/g)},s.translate=function(c,u,f){f=typeof f<"u"?f:1;var g=c.length,d=u.x*f,h=u.y*f,m;for(m=0;m<g;m++)c[m].x+=d,c[m].y+=h;return c},s.rotate=function(c,u,f){if(u!==0){var g=Math.cos(u),d=Math.sin(u),h=f.x,m=f.y,_=c.length,w,R,P,N;for(N=0;N<_;N++)w=c[N],R=w.x-h,P=w.y-m,w.x=h+(R*g-P*d),w.y=m+(R*d+P*g);return c}},s.contains=function(c,u){for(var f=u.x,g=u.y,d=c.length,h=c[d-1],m,_=0;_<d;_++){if(m=c[_],(f-h.x)*(m.y-h.y)+(g-h.y)*(h.x-m.x)>0)return!1;h=m}return!0},s.scale=function(c,u,f,g){if(u===1&&f===1)return c;g=g||s.centre(c);for(var d,h,m=0;m<c.length;m++)d=c[m],h=o.sub(d,g),c[m].x=g.x+h.x*u,c[m].y=g.y+h.y*f;return c},s.chamfer=function(c,u,f,g,d){typeof u=="number"?u=[u]:u=u||[8],f=typeof f<"u"?f:-1,g=g||2,d=d||14;for(var h=[],m=0;m<c.length;m++){var _=c[m-1>=0?m-1:c.length-1],w=c[m],R=c[(m+1)%c.length],P=u[m<u.length?m:u.length-1];if(P===0){h.push(w);continue}var N=o.normalise({x:w.y-_.y,y:_.x-w.x}),D=o.normalise({x:R.y-w.y,y:w.x-R.x}),T=Math.sqrt(2*Math.pow(P,2)),k=o.mult(l.clone(N),P),I=o.normalise(o.mult(o.add(N,D),.5)),v=o.sub(w,o.mult(I,T)),S=f;f===-1&&(S=Math.pow(P,.32)*1.75),S=l.clamp(S,g,d),S%2===1&&(S+=1);for(var C=Math.acos(o.dot(N,D)),E=C/S,x=0;x<S;x++)h.push(o.add(o.rotate(k,E*x),v))}return h},s.clockwiseSort=function(c){var u=s.mean(c);return c.sort(function(f,g){return o.angle(u,f)-o.angle(u,g)}),c},s.isConvex=function(c){var u=0,f=c.length,g,d,h,m;if(f<3)return null;for(g=0;g<f;g++)if(d=(g+1)%f,h=(g+2)%f,m=(c[d].x-c[g].x)*(c[h].y-c[d].y),m-=(c[d].y-c[g].y)*(c[h].x-c[d].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},s.hull=function(c){var u=[],f=[],g,d;for(c=c.slice(0),c.sort(function(h,m){var _=h.x-m.x;return _!==0?_:h.y-m.y}),d=0;d<c.length;d+=1){for(g=c[d];f.length>=2&&o.cross3(f[f.length-2],f[f.length-1],g)<=0;)f.pop();f.push(g)}for(d=c.length-1;d>=0;d-=1){for(g=c[d];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],g)<=0;)u.pop();u.push(g)}return u.pop(),f.pop(),u.concat(f)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(2),c=r(7),u=r(0),f=r(1),g=r(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(h){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},_=u.extend(m,h);return d(_,h),_},s.nextGroup=function(h){return h?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var d=function(h,m){m=m||{},s.set(h,{bounds:h.bounds||f.create(h.vertices),positionPrev:h.positionPrev||l.clone(h.position),anglePrev:h.anglePrev||h.angle,vertices:h.vertices,parts:h.parts||[h],isStatic:h.isStatic,isSleeping:h.isSleeping,parent:h.parent||h}),o.rotate(h.vertices,h.angle,h.position),g.rotate(h.axes,h.angle),f.update(h.bounds,h.vertices,h.velocity),s.set(h,{axes:m.axes||h.axes,area:m.area||h.area,mass:m.mass||h.mass,inertia:m.inertia||h.inertia});var _=h.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),w=h.isStatic?"#555":"#ccc",R=h.isStatic&&h.render.fillStyle===null?1:0;h.render.fillStyle=h.render.fillStyle||_,h.render.strokeStyle=h.render.strokeStyle||w,h.render.lineWidth=h.render.lineWidth||R,h.render.sprite.xOffset+=-(h.bounds.min.x-h.position.x)/(h.bounds.max.x-h.bounds.min.x),h.render.sprite.yOffset+=-(h.bounds.min.y-h.position.y)/(h.bounds.max.y-h.bounds.min.y)};s.set=function(h,m,_){var w;typeof m=="string"&&(w=m,m={},m[w]=_);for(w in m)if(Object.prototype.hasOwnProperty.call(m,w))switch(_=m[w],w){case"isStatic":s.setStatic(h,_);break;case"isSleeping":c.set(h,_);break;case"mass":s.setMass(h,_);break;case"density":s.setDensity(h,_);break;case"inertia":s.setInertia(h,_);break;case"vertices":s.setVertices(h,_);break;case"position":s.setPosition(h,_);break;case"angle":s.setAngle(h,_);break;case"velocity":s.setVelocity(h,_);break;case"angularVelocity":s.setAngularVelocity(h,_);break;case"speed":s.setSpeed(h,_);break;case"angularSpeed":s.setAngularSpeed(h,_);break;case"parts":s.setParts(h,_);break;case"centre":s.setCentre(h,_);break;default:h[w]=_}},s.setStatic=function(h,m){for(var _=0;_<h.parts.length;_++){var w=h.parts[_];m?(w.isStatic||(w._original={restitution:w.restitution,friction:w.friction,mass:w.mass,inertia:w.inertia,density:w.density,inverseMass:w.inverseMass,inverseInertia:w.inverseInertia}),w.restitution=0,w.friction=1,w.mass=w.inertia=w.density=1/0,w.inverseMass=w.inverseInertia=0,w.positionPrev.x=w.position.x,w.positionPrev.y=w.position.y,w.anglePrev=w.angle,w.angularVelocity=0,w.speed=0,w.angularSpeed=0,w.motion=0):w._original&&(w.restitution=w._original.restitution,w.friction=w._original.friction,w.mass=w._original.mass,w.inertia=w._original.inertia,w.density=w._original.density,w.inverseMass=w._original.inverseMass,w.inverseInertia=w._original.inverseInertia,w._original=null),w.isStatic=m}},s.setMass=function(h,m){var _=h.inertia/(h.mass/6);h.inertia=_*(m/6),h.inverseInertia=1/h.inertia,h.mass=m,h.inverseMass=1/h.mass,h.density=h.mass/h.area},s.setDensity=function(h,m){s.setMass(h,m*h.area),h.density=m},s.setInertia=function(h,m){h.inertia=m,h.inverseInertia=1/h.inertia},s.setVertices=function(h,m){m[0].body===h?h.vertices=m:h.vertices=o.create(m,h),h.axes=g.fromVertices(h.vertices),h.area=o.area(h.vertices),s.setMass(h,h.density*h.area);var _=o.centre(h.vertices);o.translate(h.vertices,_,-1),s.setInertia(h,s._inertiaScale*o.inertia(h.vertices,h.mass)),o.translate(h.vertices,h.position),f.update(h.bounds,h.vertices,h.velocity)},s.setParts=function(h,m,_){var w;for(m=m.slice(0),h.parts.length=0,h.parts.push(h),h.parent=h,w=0;w<m.length;w++){var R=m[w];R!==h&&(R.parent=h,h.parts.push(R))}if(h.parts.length!==1){if(_=typeof _<"u"?_:!0,_){var P=[];for(w=0;w<m.length;w++)P=P.concat(m[w].vertices);o.clockwiseSort(P);var N=o.hull(P),D=o.centre(N);s.setVertices(h,N),o.translate(h.vertices,D)}var T=s._totalProperties(h);h.area=T.area,h.parent=h,h.position.x=T.centre.x,h.position.y=T.centre.y,h.positionPrev.x=T.centre.x,h.positionPrev.y=T.centre.y,s.setMass(h,T.mass),s.setInertia(h,T.inertia),s.setPosition(h,T.centre)}},s.setCentre=function(h,m,_){_?(h.positionPrev.x+=m.x,h.positionPrev.y+=m.y,h.position.x+=m.x,h.position.y+=m.y):(h.positionPrev.x=m.x-(h.position.x-h.positionPrev.x),h.positionPrev.y=m.y-(h.position.y-h.positionPrev.y),h.position.x=m.x,h.position.y=m.y)},s.setPosition=function(h,m,_){var w=l.sub(m,h.position);_?(h.positionPrev.x=h.position.x,h.positionPrev.y=h.position.y,h.velocity.x=w.x,h.velocity.y=w.y,h.speed=l.magnitude(w)):(h.positionPrev.x+=w.x,h.positionPrev.y+=w.y);for(var R=0;R<h.parts.length;R++){var P=h.parts[R];P.position.x+=w.x,P.position.y+=w.y,o.translate(P.vertices,w),f.update(P.bounds,P.vertices,h.velocity)}},s.setAngle=function(h,m,_){var w=m-h.angle;_?(h.anglePrev=h.angle,h.angularVelocity=w,h.angularSpeed=Math.abs(w)):h.anglePrev+=w;for(var R=0;R<h.parts.length;R++){var P=h.parts[R];P.angle+=w,o.rotate(P.vertices,w,h.position),g.rotate(P.axes,w),f.update(P.bounds,P.vertices,h.velocity),R>0&&l.rotateAbout(P.position,w,h.position,P.position)}},s.setVelocity=function(h,m){var _=h.deltaTime/s._baseDelta;h.positionPrev.x=h.position.x-m.x*_,h.positionPrev.y=h.position.y-m.y*_,h.velocity.x=(h.position.x-h.positionPrev.x)/_,h.velocity.y=(h.position.y-h.positionPrev.y)/_,h.speed=l.magnitude(h.velocity)},s.getVelocity=function(h){var m=s._baseDelta/h.deltaTime;return{x:(h.position.x-h.positionPrev.x)*m,y:(h.position.y-h.positionPrev.y)*m}},s.getSpeed=function(h){return l.magnitude(s.getVelocity(h))},s.setSpeed=function(h,m){s.setVelocity(h,l.mult(l.normalise(s.getVelocity(h)),m))},s.setAngularVelocity=function(h,m){var _=h.deltaTime/s._baseDelta;h.anglePrev=h.angle-m*_,h.angularVelocity=(h.angle-h.anglePrev)/_,h.angularSpeed=Math.abs(h.angularVelocity)},s.getAngularVelocity=function(h){return(h.angle-h.anglePrev)*s._baseDelta/h.deltaTime},s.getAngularSpeed=function(h){return Math.abs(s.getAngularVelocity(h))},s.setAngularSpeed=function(h,m){s.setAngularVelocity(h,u.sign(s.getAngularVelocity(h))*m)},s.translate=function(h,m,_){s.setPosition(h,l.add(h.position,m),_)},s.rotate=function(h,m,_,w){if(!_)s.setAngle(h,h.angle+m,w);else{var R=Math.cos(m),P=Math.sin(m),N=h.position.x-_.x,D=h.position.y-_.y;s.setPosition(h,{x:_.x+(N*R-D*P),y:_.y+(N*P+D*R)},w),s.setAngle(h,h.angle+m,w)}},s.scale=function(h,m,_,w){var R=0,P=0;w=w||h.position;for(var N=0;N<h.parts.length;N++){var D=h.parts[N];o.scale(D.vertices,m,_,w),D.axes=g.fromVertices(D.vertices),D.area=o.area(D.vertices),s.setMass(D,h.density*D.area),o.translate(D.vertices,{x:-D.position.x,y:-D.position.y}),s.setInertia(D,s._inertiaScale*o.inertia(D.vertices,D.mass)),o.translate(D.vertices,{x:D.position.x,y:D.position.y}),N>0&&(R+=D.area,P+=D.inertia),D.position.x=w.x+(D.position.x-w.x)*m,D.position.y=w.y+(D.position.y-w.y)*_,f.update(D.bounds,D.vertices,h.velocity)}h.parts.length>1&&(h.area=R,h.isStatic||(s.setMass(h,h.density*R),s.setInertia(h,P))),h.circleRadius&&(m===_?h.circleRadius*=m:h.circleRadius=null)},s.update=function(h,m){m=(typeof m<"u"?m:1e3/60)*h.timeScale;var _=m*m,w=s._timeCorrection?m/(h.deltaTime||m):1,R=1-h.frictionAir*(m/u._baseDelta),P=(h.position.x-h.positionPrev.x)*w,N=(h.position.y-h.positionPrev.y)*w;h.velocity.x=P*R+h.force.x/h.mass*_,h.velocity.y=N*R+h.force.y/h.mass*_,h.positionPrev.x=h.position.x,h.positionPrev.y=h.position.y,h.position.x+=h.velocity.x,h.position.y+=h.velocity.y,h.deltaTime=m,h.angularVelocity=(h.angle-h.anglePrev)*R*w+h.torque/h.inertia*_,h.anglePrev=h.angle,h.angle+=h.angularVelocity;for(var D=0;D<h.parts.length;D++){var T=h.parts[D];o.translate(T.vertices,h.velocity),D>0&&(T.position.x+=h.velocity.x,T.position.y+=h.velocity.y),h.angularVelocity!==0&&(o.rotate(T.vertices,h.angularVelocity,h.position),g.rotate(T.axes,h.angularVelocity),D>0&&l.rotateAbout(T.position,h.angularVelocity,h.position,T.position)),f.update(T.bounds,T.vertices,h.velocity)}},s.updateVelocities=function(h){var m=s._baseDelta/h.deltaTime,_=h.velocity;_.x=(h.position.x-h.positionPrev.x)*m,_.y=(h.position.y-h.positionPrev.y)*m,h.speed=Math.sqrt(_.x*_.x+_.y*_.y),h.angularVelocity=(h.angle-h.anglePrev)*m,h.angularSpeed=Math.abs(h.angularVelocity)},s.applyForce=function(h,m,_){var w={x:m.x-h.position.x,y:m.y-h.position.y};h.force.x+=_.x,h.force.y+=_.y,h.torque+=w.x*_.y-w.y*_.x},s._totalProperties=function(h){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},_=h.parts.length===1?0:1;_<h.parts.length;_++){var w=h.parts[_],R=w.mass!==1/0?w.mass:1;m.mass+=R,m.area+=w.area,m.inertia+=w.inertia,m.centre=l.add(m.centre,l.mult(w.position,R))}return m.centre=l.div(m.centre,m.mass),m}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0);(function(){s.on=function(l,c,u){for(var f=c.split(" "),g,d=0;d<f.length;d++)g=f[d],l.events=l.events||{},l.events[g]=l.events[g]||[],l.events[g].push(u);return u},s.off=function(l,c,u){if(!c){l.events={};return}typeof c=="function"&&(u=c,c=o.keys(l.events).join(" "));for(var f=c.split(" "),g=0;g<f.length;g++){var d=l.events[f[g]],h=[];if(u&&d)for(var m=0;m<d.length;m++)d[m]!==u&&h.push(d[m]);l.events[f[g]]=h}},s.trigger=function(l,c,u){var f,g,d,h,m=l.events;if(m&&o.keys(m).length>0){u||(u={}),f=c.split(" ");for(var _=0;_<f.length;_++)if(g=f[_],d=m[g],d){h=o.clone(u,!1),h.name=g,h.source=l;for(var w=0;w<d.length;w++)d[w].apply(l,[h])}}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(5),l=r(0),c=r(1),u=r(4);(function(){s.create=function(f){return l.extend({id:l.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},f)},s.setModified=function(f,g,d,h){if(f.isModified=g,g&&f.cache&&(f.cache.allBodies=null,f.cache.allConstraints=null,f.cache.allComposites=null),d&&f.parent&&s.setModified(f.parent,g,d,h),h)for(var m=0;m<f.composites.length;m++){var _=f.composites[m];s.setModified(_,g,d,h)}},s.add=function(f,g){var d=[].concat(g);o.trigger(f,"beforeAdd",{object:g});for(var h=0;h<d.length;h++){var m=d[h];switch(m.type){case"body":if(m.parent!==m){l.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(f,m);break;case"constraint":s.addConstraint(f,m);break;case"composite":s.addComposite(f,m);break;case"mouseConstraint":s.addConstraint(f,m.constraint);break}}return o.trigger(f,"afterAdd",{object:g}),f},s.remove=function(f,g,d){var h=[].concat(g);o.trigger(f,"beforeRemove",{object:g});for(var m=0;m<h.length;m++){var _=h[m];switch(_.type){case"body":s.removeBody(f,_,d);break;case"constraint":s.removeConstraint(f,_,d);break;case"composite":s.removeComposite(f,_,d);break;case"mouseConstraint":s.removeConstraint(f,_.constraint);break}}return o.trigger(f,"afterRemove",{object:g}),f},s.addComposite=function(f,g){return f.composites.push(g),g.parent=f,s.setModified(f,!0,!0,!1),f},s.removeComposite=function(f,g,d){var h=l.indexOf(f.composites,g);if(h!==-1){var m=s.allBodies(g);s.removeCompositeAt(f,h);for(var _=0;_<m.length;_++)m[_].sleepCounter=0}if(d)for(var _=0;_<f.composites.length;_++)s.removeComposite(f.composites[_],g,!0);return f},s.removeCompositeAt=function(f,g){return f.composites.splice(g,1),s.setModified(f,!0,!0,!1),f},s.addBody=function(f,g){return f.bodies.push(g),s.setModified(f,!0,!0,!1),f},s.removeBody=function(f,g,d){var h=l.indexOf(f.bodies,g);if(h!==-1&&(s.removeBodyAt(f,h),g.sleepCounter=0),d)for(var m=0;m<f.composites.length;m++)s.removeBody(f.composites[m],g,!0);return f},s.removeBodyAt=function(f,g){return f.bodies.splice(g,1),s.setModified(f,!0,!0,!1),f},s.addConstraint=function(f,g){return f.constraints.push(g),s.setModified(f,!0,!0,!1),f},s.removeConstraint=function(f,g,d){var h=l.indexOf(f.constraints,g);if(h!==-1&&s.removeConstraintAt(f,h),d)for(var m=0;m<f.composites.length;m++)s.removeConstraint(f.composites[m],g,!0);return f},s.removeConstraintAt=function(f,g){return f.constraints.splice(g,1),s.setModified(f,!0,!0,!1),f},s.clear=function(f,g,d){if(d)for(var h=0;h<f.composites.length;h++)s.clear(f.composites[h],g,!0);return g?f.bodies=f.bodies.filter(function(m){return m.isStatic}):f.bodies.length=0,f.constraints.length=0,f.composites.length=0,s.setModified(f,!0,!0,!1),f},s.allBodies=function(f){if(f.cache&&f.cache.allBodies)return f.cache.allBodies;for(var g=[].concat(f.bodies),d=0;d<f.composites.length;d++)g=g.concat(s.allBodies(f.composites[d]));return f.cache&&(f.cache.allBodies=g),g},s.allConstraints=function(f){if(f.cache&&f.cache.allConstraints)return f.cache.allConstraints;for(var g=[].concat(f.constraints),d=0;d<f.composites.length;d++)g=g.concat(s.allConstraints(f.composites[d]));return f.cache&&(f.cache.allConstraints=g),g},s.allComposites=function(f){if(f.cache&&f.cache.allComposites)return f.cache.allComposites;for(var g=[].concat(f.composites),d=0;d<f.composites.length;d++)g=g.concat(s.allComposites(f.composites[d]));return f.cache&&(f.cache.allComposites=g),g},s.get=function(f,g,d){var h,m;switch(d){case"body":h=s.allBodies(f);break;case"constraint":h=s.allConstraints(f);break;case"composite":h=s.allComposites(f).concat(f);break}return h?(m=h.filter(function(_){return _.id.toString()===g.toString()}),m.length===0?null:m[0]):null},s.move=function(f,g,d){return s.remove(f,g),s.add(d,g),f},s.rebase=function(f){for(var g=s.allBodies(f).concat(s.allConstraints(f)).concat(s.allComposites(f)),d=0;d<g.length;d++)g[d].id=l.nextId();return f},s.translate=function(f,g,d){for(var h=d?s.allBodies(f):f.bodies,m=0;m<h.length;m++)u.translate(h[m],g);return f},s.rotate=function(f,g,d,h){for(var m=Math.cos(g),_=Math.sin(g),w=h?s.allBodies(f):f.bodies,R=0;R<w.length;R++){var P=w[R],N=P.position.x-d.x,D=P.position.y-d.y;u.setPosition(P,{x:d.x+(N*m-D*_),y:d.y+(N*_+D*m)}),u.rotate(P,g)}return f},s.scale=function(f,g,d,h,m){for(var _=m?s.allBodies(f):f.bodies,w=0;w<_.length;w++){var R=_[w],P=R.position.x-h.x,N=R.position.y-h.y;u.setPosition(R,{x:h.x+P*g,y:h.y+N*d}),u.scale(R,g,d)}return f},s.bounds=function(f){for(var g=s.allBodies(f),d=[],h=0;h<g.length;h+=1){var m=g[h];d.push(m.bounds.min,m.bounds.max)}return c.create(d)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(4),l=r(5),c=r(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(u,f){for(var g=f/c._baseDelta,d=s._motionSleepThreshold,h=0;h<u.length;h++){var m=u[h],_=o.getSpeed(m),w=o.getAngularSpeed(m),R=_*_+w*w;if(m.force.x!==0||m.force.y!==0){s.set(m,!1);continue}var P=Math.min(m.motion,R),N=Math.max(m.motion,R);m.motion=s._minBias*P+(1-s._minBias)*N,m.sleepThreshold>0&&m.motion<d?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/g&&s.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},s.afterCollisions=function(u){for(var f=s._motionSleepThreshold,g=0;g<u.length;g++){var d=u[g];if(d.isActive){var h=d.collision,m=h.bodyA.parent,_=h.bodyB.parent;if(!(m.isSleeping&&_.isSleeping||m.isStatic||_.isStatic)&&(m.isSleeping||_.isSleeping)){var w=m.isSleeping&&!m.isStatic?m:_,R=w===m?_:m;!w.isStatic&&R.motion>f&&s.set(w,!1)}}}},s.set=function(u,f){var g=u.isSleeping;f?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,g||l.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,g&&l.trigger(u,"sleepEnd"))}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(9);(function(){var c=[],u={overlap:0,axis:null},f={overlap:0,axis:null};s.create=function(g,d){return{pair:null,collided:!1,bodyA:g,bodyB:d,parentA:g.parent,parentB:d.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(g,d,h){if(s._overlapAxes(u,g.vertices,d.vertices,g.axes),u.overlap<=0||(s._overlapAxes(f,d.vertices,g.vertices,d.axes),f.overlap<=0))return null;var m=h&&h.table[l.id(g,d)],_;m?_=m.collision:(_=s.create(g,d),_.collided=!0,_.bodyA=g.id<d.id?g:d,_.bodyB=g.id<d.id?d:g,_.parentA=_.bodyA.parent,_.parentB=_.bodyB.parent),g=_.bodyA,d=_.bodyB;var w;u.overlap<f.overlap?w=u:w=f;var R=_.normal,P=_.tangent,N=_.penetration,D=_.supports,T=w.overlap,k=w.axis,I=k.x,v=k.y,S=d.position.x-g.position.x,C=d.position.y-g.position.y;I*S+v*C>=0&&(I=-I,v=-v),R.x=I,R.y=v,P.x=-v,P.y=I,N.x=I*T,N.y=v*T,_.depth=T;var E=s._findSupports(g,d,R,1),x=0;if(o.contains(g.vertices,E[0])&&(D[x++]=E[0]),o.contains(g.vertices,E[1])&&(D[x++]=E[1]),x<2){var A=s._findSupports(d,g,R,-1);o.contains(d.vertices,A[0])&&(D[x++]=A[0]),x<2&&o.contains(d.vertices,A[1])&&(D[x++]=A[1])}return x===0&&(D[x++]=E[0]),_.supportCount=x,_},s._overlapAxes=function(g,d,h,m){var _=d.length,w=h.length,R=d[0].x,P=d[0].y,N=h[0].x,D=h[0].y,T=m.length,k=Number.MAX_VALUE,I=0,v,S,C,E,x,A;for(x=0;x<T;x++){var L=m[x],U=L.x,W=L.y,H=R*U+P*W,G=N*U+D*W,J=H,ue=G;for(A=1;A<_;A+=1)E=d[A].x*U+d[A].y*W,E>J?J=E:E<H&&(H=E);for(A=1;A<w;A+=1)E=h[A].x*U+h[A].y*W,E>ue?ue=E:E<G&&(G=E);if(S=J-G,C=ue-H,v=S<C?S:C,v<k&&(k=v,I=x,v<=0))break}g.axis=m[I],g.overlap=k},s._findSupports=function(g,d,h,m){var _=d.vertices,w=_.length,R=g.position.x,P=g.position.y,N=h.x*m,D=h.y*m,T=_[0],k=T,I=N*(R-k.x)+D*(P-k.y),v,S,C;for(C=1;C<w;C+=1)k=_[C],S=N*(R-k.x)+D*(P-k.y),S<I&&(I=S,T=k);return v=_[(w+T.index-1)%w],I=N*(R-v.x)+D*(P-v.y),k=_[(T.index+1)%w],N*(R-k.x)+D*(P-k.y)<I?(c[0]=T,c[1]=k,c):(c[0]=T,c[1]=v,c)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(16);(function(){s.create=function(l,c){var u=l.bodyA,f=l.bodyB,g={id:s.id(u,f),bodyA:u,bodyB:f,collision:l,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||f.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(g,l,c),g},s.update=function(l,c,u){var f=c.supports,g=c.supportCount,d=l.contacts,h=c.parentA,m=c.parentB;l.isActive=!0,l.timeUpdated=u,l.collision=c,l.separation=c.depth,l.inverseMass=h.inverseMass+m.inverseMass,l.friction=h.friction<m.friction?h.friction:m.friction,l.frictionStatic=h.frictionStatic>m.frictionStatic?h.frictionStatic:m.frictionStatic,l.restitution=h.restitution>m.restitution?h.restitution:m.restitution,l.slop=h.slop>m.slop?h.slop:m.slop,l.contactCount=g,c.pair=l;var _=f[0],w=d[0],R=f[1],P=d[1];(P.vertex===_||w.vertex===R)&&(d[1]=w,d[0]=w=P,P=d[1]),w.vertex=_,P.vertex=R},s.setActive=function(l,c,u){c?(l.isActive=!0,l.timeUpdated=u):(l.isActive=!1,l.contactCount=0)},s.id=function(l,c){return l.id<c.id?l.id.toString(36)+":"+c.id.toString(36):c.id.toString(36)+":"+l.id.toString(36)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(2),c=r(7),u=r(1),f=r(11),g=r(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(d){var h=d;h.bodyA&&!h.pointA&&(h.pointA={x:0,y:0}),h.bodyB&&!h.pointB&&(h.pointB={x:0,y:0});var m=h.bodyA?l.add(h.bodyA.position,h.pointA):h.pointA,_=h.bodyB?l.add(h.bodyB.position,h.pointB):h.pointB,w=l.magnitude(l.sub(m,_));h.length=typeof h.length<"u"?h.length:w,h.id=h.id||g.nextId(),h.label=h.label||"Constraint",h.type="constraint",h.stiffness=h.stiffness||(h.length>0?1:.7),h.damping=h.damping||0,h.angularStiffness=h.angularStiffness||0,h.angleA=h.bodyA?h.bodyA.angle:h.angleA,h.angleB=h.bodyB?h.bodyB.angle:h.angleB,h.plugin={};var R={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return h.length===0&&h.stiffness>.1?(R.type="pin",R.anchors=!1):h.stiffness<.9&&(R.type="spring"),h.render=g.extend(R,h.render),h},s.preSolveAll=function(d){for(var h=0;h<d.length;h+=1){var m=d[h],_=m.constraintImpulse;m.isStatic||_.x===0&&_.y===0&&_.angle===0||(m.position.x+=_.x,m.position.y+=_.y,m.angle+=_.angle)}},s.solveAll=function(d,h){for(var m=g.clamp(h/g._baseDelta,0,1),_=0;_<d.length;_+=1){var w=d[_],R=!w.bodyA||w.bodyA&&w.bodyA.isStatic,P=!w.bodyB||w.bodyB&&w.bodyB.isStatic;(R||P)&&s.solve(d[_],m)}for(_=0;_<d.length;_+=1)w=d[_],R=!w.bodyA||w.bodyA&&w.bodyA.isStatic,P=!w.bodyB||w.bodyB&&w.bodyB.isStatic,!R&&!P&&s.solve(d[_],m)},s.solve=function(d,h){var m=d.bodyA,_=d.bodyB,w=d.pointA,R=d.pointB;if(!(!m&&!_)){m&&!m.isStatic&&(l.rotate(w,m.angle-d.angleA,w),d.angleA=m.angle),_&&!_.isStatic&&(l.rotate(R,_.angle-d.angleB,R),d.angleB=_.angle);var P=w,N=R;if(m&&(P=l.add(m.position,w)),_&&(N=l.add(_.position,R)),!(!P||!N)){var D=l.sub(P,N),T=l.magnitude(D);T<s._minLength&&(T=s._minLength);var k=(T-d.length)/T,I=d.stiffness>=1||d.length===0,v=I?d.stiffness*h:d.stiffness*h*h,S=d.damping*h,C=l.mult(D,k*v),E=(m?m.inverseMass:0)+(_?_.inverseMass:0),x=(m?m.inverseInertia:0)+(_?_.inverseInertia:0),A=E+x,L,U,W,H,G;if(S>0){var J=l.create();W=l.div(D,T),G=l.sub(_&&l.sub(_.position,_.positionPrev)||J,m&&l.sub(m.position,m.positionPrev)||J),H=l.dot(W,G)}m&&!m.isStatic&&(U=m.inverseMass/E,m.constraintImpulse.x-=C.x*U,m.constraintImpulse.y-=C.y*U,m.position.x-=C.x*U,m.position.y-=C.y*U,S>0&&(m.positionPrev.x-=S*W.x*H*U,m.positionPrev.y-=S*W.y*H*U),L=l.cross(w,C)/A*s._torqueDampen*m.inverseInertia*(1-d.angularStiffness),m.constraintImpulse.angle-=L,m.angle-=L),_&&!_.isStatic&&(U=_.inverseMass/E,_.constraintImpulse.x+=C.x*U,_.constraintImpulse.y+=C.y*U,_.position.x+=C.x*U,_.position.y+=C.y*U,S>0&&(_.positionPrev.x+=S*W.x*H*U,_.positionPrev.y+=S*W.y*H*U),L=l.cross(R,C)/A*s._torqueDampen*_.inverseInertia*(1-d.angularStiffness),_.constraintImpulse.angle+=L,_.angle+=L)}}},s.postSolveAll=function(d){for(var h=0;h<d.length;h++){var m=d[h],_=m.constraintImpulse;if(!(m.isStatic||_.x===0&&_.y===0&&_.angle===0)){c.set(m,!1);for(var w=0;w<m.parts.length;w++){var R=m.parts[w];o.translate(R.vertices,_),w>0&&(R.position.x+=_.x,R.position.y+=_.y),_.angle!==0&&(o.rotate(R.vertices,_.angle,m.position),f.rotate(R.axes,_.angle),w>0&&l.rotateAbout(R.position,_.angle,m.position,R.position)),u.update(R.bounds,R.vertices,m.velocity)}_.angle*=s._warming,_.x*=s._warming,_.y*=s._warming}}},s.pointAWorld=function(d){return{x:(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),y:(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0)}},s.pointBWorld=function(d){return{x:(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),y:(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0)}},s.currentLength=function(d){var h=(d.bodyA?d.bodyA.position.x:0)+(d.pointA?d.pointA.x:0),m=(d.bodyA?d.bodyA.position.y:0)+(d.pointA?d.pointA.y:0),_=(d.bodyB?d.bodyB.position.x:0)+(d.pointB?d.pointB.x:0),w=(d.bodyB?d.bodyB.position.y:0)+(d.pointB?d.pointB.y:0),R=h-_,P=m-w;return Math.sqrt(R*R+P*P)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(2),l=r(0);(function(){s.fromVertices=function(c){for(var u={},f=0;f<c.length;f++){var g=(f+1)%c.length,d=o.normalise({x:c[g].y-c[f].y,y:c[f].x-c[g].x}),h=d.y===0?1/0:d.x/d.y;h=h.toFixed(3).toString(),u[h]=d}return l.values(u)},s.rotate=function(c,u){if(u!==0)for(var f=Math.cos(u),g=Math.sin(u),d=0;d<c.length;d++){var h=c[d],m;m=h.x*f-h.y*g,h.y=h.x*g+h.y*f,h.x=m}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(0),c=r(4),u=r(1),f=r(2);(function(){s.rectangle=function(g,d,h,m,_){_=_||{};var w={label:"Rectangle Body",position:{x:g,y:d},vertices:o.fromPath("L 0 0 L "+h+" 0 L "+h+" "+m+" L 0 "+m)};if(_.chamfer){var R=_.chamfer;w.vertices=o.chamfer(w.vertices,R.radius,R.quality,R.qualityMin,R.qualityMax),delete _.chamfer}return c.create(l.extend({},w,_))},s.trapezoid=function(g,d,h,m,_,w){w=w||{},_>=1&&l.warn("Bodies.trapezoid: slope parameter must be < 1."),_*=.5;var R=(1-_*2)*h,P=h*_,N=P+R,D=N+P,T;_<.5?T="L 0 0 L "+P+" "+-m+" L "+N+" "+-m+" L "+D+" 0":T="L 0 0 L "+N+" "+-m+" L "+D+" 0";var k={label:"Trapezoid Body",position:{x:g,y:d},vertices:o.fromPath(T)};if(w.chamfer){var I=w.chamfer;k.vertices=o.chamfer(k.vertices,I.radius,I.quality,I.qualityMin,I.qualityMax),delete w.chamfer}return c.create(l.extend({},k,w))},s.circle=function(g,d,h,m,_){m=m||{};var w={label:"Circle Body",circleRadius:h};_=_||25;var R=Math.ceil(Math.max(10,Math.min(_,h)));return R%2===1&&(R+=1),s.polygon(g,d,R,h,l.extend({},w,m))},s.polygon=function(g,d,h,m,_){if(_=_||{},h<3)return s.circle(g,d,m,_);for(var w=2*Math.PI/h,R="",P=w*.5,N=0;N<h;N+=1){var D=P+N*w,T=Math.cos(D)*m,k=Math.sin(D)*m;R+="L "+T.toFixed(3)+" "+k.toFixed(3)+" "}var I={label:"Polygon Body",position:{x:g,y:d},vertices:o.fromPath(R)};if(_.chamfer){var v=_.chamfer;I.vertices=o.chamfer(I.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete _.chamfer}return c.create(l.extend({},I,_))},s.fromVertices=function(g,d,h,m,_,w,R,P){var N=l.getDecomp(),D,T,k,I,v,S,C,E,x,A,L;for(D=!!(N&&N.quickDecomp),m=m||{},k=[],_=typeof _<"u"?_:!1,w=typeof w<"u"?w:.01,R=typeof R<"u"?R:10,P=typeof P<"u"?P:.01,l.isArray(h[0])||(h=[h]),A=0;A<h.length;A+=1)if(S=h[A],I=o.isConvex(S),v=!I,v&&!D&&l.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),I||!D)I?S=o.clockwiseSort(S):S=o.hull(S),k.push({position:{x:g,y:d},vertices:S});else{var U=S.map(function(X){return[X.x,X.y]});N.makeCCW(U),w!==!1&&N.removeCollinearPoints(U,w),P!==!1&&N.removeDuplicatePoints&&N.removeDuplicatePoints(U,P);var W=N.quickDecomp(U);for(C=0;C<W.length;C++){var H=W[C],G=H.map(function(X){return{x:X[0],y:X[1]}});R>0&&o.area(G)<R||k.push({position:o.centre(G),vertices:G})}}for(C=0;C<k.length;C++)k[C]=c.create(l.extend(k[C],m));if(_){var J=5;for(C=0;C<k.length;C++){var ue=k[C];for(E=C+1;E<k.length;E++){var pe=k[E];if(u.overlaps(ue.bounds,pe.bounds)){var ge=ue.vertices,we=pe.vertices;for(x=0;x<ue.vertices.length;x++)for(L=0;L<pe.vertices.length;L++){var Fe=f.magnitudeSquared(f.sub(ge[(x+1)%ge.length],we[L])),Pe=f.magnitudeSquared(f.sub(ge[x],we[(L+1)%we.length]));Fe<J&&Pe<J&&(ge[x].isInternal=!0,we[L].isInternal=!0)}}}}}return k.length>1?(T=c.create(l.extend({parts:k.slice(0)},m)),c.setPosition(T,{x:g,y:d}),T):k[0]}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0),l=r(8);(function(){s.create=function(c){var u={bodies:[],collisions:[],pairs:null};return o.extend(u,c)},s.setBodies=function(c,u){c.bodies=u.slice(0)},s.clear=function(c){c.bodies=[],c.collisions=[]},s.collisions=function(c){var u=c.pairs,f=c.bodies,g=f.length,d=s.canCollide,h=l.collides,m=c.collisions,_=0,w,R;for(f.sort(s._compareBoundsX),w=0;w<g;w++){var P=f[w],N=P.bounds,D=P.bounds.max.x,T=P.bounds.max.y,k=P.bounds.min.y,I=P.isStatic||P.isSleeping,v=P.parts.length,S=v===1;for(R=w+1;R<g;R++){var C=f[R],E=C.bounds;if(E.min.x>D)break;if(!(T<E.min.y||k>E.max.y)&&!(I&&(C.isStatic||C.isSleeping))&&d(P.collisionFilter,C.collisionFilter)){var x=C.parts.length;if(S&&x===1){var A=h(P,C,u);A&&(m[_++]=A)}else for(var L=v>1?1:0,U=x>1?1:0,W=L;W<v;W++)for(var H=P.parts[W],N=H.bounds,G=U;G<x;G++){var J=C.parts[G],E=J.bounds;if(!(N.min.x>E.max.x||N.max.x<E.min.x||N.max.y<E.min.y||N.min.y>E.max.y)){var A=h(H,J,u);A&&(m[_++]=A)}}}}}return m.length!==_&&(m.length=_),m},s.canCollide=function(c,u){return c.group===u.group&&c.group!==0?c.group>0:(c.mask&u.category)!==0&&(u.mask&c.category)!==0},s._compareBoundsX=function(c,u){return c.bounds.min.x-u.bounds.min.x}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0);(function(){s.create=function(l){var c={};return l||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=l||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(u){var f=s._getRelativeMousePosition(u,c.element,c.pixelRatio),g=u.changedTouches;g&&(c.button=0,u.preventDefault()),c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=u},c.mousedown=function(u){var f=s._getRelativeMousePosition(u,c.element,c.pixelRatio),g=u.changedTouches;g?(c.button=0,u.preventDefault()):c.button=u.button,c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=u},c.mouseup=function(u){var f=s._getRelativeMousePosition(u,c.element,c.pixelRatio),g=u.changedTouches;g&&u.preventDefault(),c.button=-1,c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=u},c.mousewheel=function(u){c.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),c.sourceEvents.mousewheel=u},s.setElement(c,c.element),c},s.setElement=function(l,c){l.element=c,c.addEventListener("mousemove",l.mousemove,{passive:!0}),c.addEventListener("mousedown",l.mousedown,{passive:!0}),c.addEventListener("mouseup",l.mouseup,{passive:!0}),c.addEventListener("wheel",l.mousewheel,{passive:!1}),c.addEventListener("touchmove",l.mousemove,{passive:!1}),c.addEventListener("touchstart",l.mousedown,{passive:!1}),c.addEventListener("touchend",l.mouseup,{passive:!1})},s.clearSourceEvents=function(l){l.sourceEvents.mousemove=null,l.sourceEvents.mousedown=null,l.sourceEvents.mouseup=null,l.sourceEvents.mousewheel=null,l.wheelDelta=0},s.setOffset=function(l,c){l.offset.x=c.x,l.offset.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y},s.setScale=function(l,c){l.scale.x=c.x,l.scale.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y},s._getRelativeMousePosition=function(l,c,u){var f=c.getBoundingClientRect(),g=document.documentElement||document.body.parentNode||document.body,d=window.pageXOffset!==void 0?window.pageXOffset:g.scrollLeft,h=window.pageYOffset!==void 0?window.pageYOffset:g.scrollTop,m=l.changedTouches,_,w;return m?(_=m[0].pageX-f.left-d,w=m[0].pageY-f.top-h):(_=l.pageX-f.left-d,w=l.pageY-f.top-h),{x:_/(c.clientWidth/(c.width||c.clientWidth)*u),y:w/(c.clientHeight/(c.height||c.clientHeight)*u)}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0);(function(){s._registry={},s.register=function(l){if(s.isPlugin(l)||o.warn("Plugin.register:",s.toString(l),"does not implement all required fields."),l.name in s._registry){var c=s._registry[l.name],u=s.versionParse(l.version).number,f=s.versionParse(c.version).number;u>f?(o.warn("Plugin.register:",s.toString(c),"was upgraded to",s.toString(l)),s._registry[l.name]=l):u<f?o.warn("Plugin.register:",s.toString(c),"can not be downgraded to",s.toString(l)):l!==c&&o.warn("Plugin.register:",s.toString(l),"is already registered to different plugin object")}else s._registry[l.name]=l;return l},s.resolve=function(l){return s._registry[s.dependencyParse(l).name]},s.toString=function(l){return typeof l=="string"?l:(l.name||"anonymous")+"@"+(l.version||l.range||"0.0.0")},s.isPlugin=function(l){return l&&l.name&&l.version&&l.install},s.isUsed=function(l,c){return l.used.indexOf(c)>-1},s.isFor=function(l,c){var u=l.for&&s.dependencyParse(l.for);return!l.for||c.name===u.name&&s.versionSatisfies(c.version,u.range)},s.use=function(l,c){if(l.uses=(l.uses||[]).concat(c||[]),l.uses.length===0){o.warn("Plugin.use:",s.toString(l),"does not specify any dependencies to install.");return}for(var u=s.dependencies(l),f=o.topologicalSort(u),g=[],d=0;d<f.length;d+=1)if(f[d]!==l.name){var h=s.resolve(f[d]);if(!h){g.push("❌ "+f[d]);continue}s.isUsed(l,h.name)||(s.isFor(h,l)||(o.warn("Plugin.use:",s.toString(h),"is for",h.for,"but installed on",s.toString(l)+"."),h._warned=!0),h.install?h.install(l):(o.warn("Plugin.use:",s.toString(h),"does not specify an install function."),h._warned=!0),h._warned?(g.push("🔶 "+s.toString(h)),delete h._warned):g.push("✅ "+s.toString(h)),l.used.push(h.name))}g.length>0&&o.info(g.join("  "))},s.dependencies=function(l,c){var u=s.dependencyParse(l),f=u.name;if(c=c||{},!(f in c)){l=s.resolve(l)||l,c[f]=o.map(l.uses||[],function(d){s.isPlugin(d)&&s.register(d);var h=s.dependencyParse(d),m=s.resolve(d);return m&&!s.versionSatisfies(m.version,h.range)?(o.warn("Plugin.dependencies:",s.toString(m),"does not satisfy",s.toString(h),"used by",s.toString(u)+"."),m._warned=!0,l._warned=!0):m||(o.warn("Plugin.dependencies:",s.toString(d),"used by",s.toString(u),"could not be resolved."),l._warned=!0),h.name});for(var g=0;g<c[f].length;g+=1)s.dependencies(c[f][g],c);return c}},s.dependencyParse=function(l){if(o.isString(l)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(l)||o.warn("Plugin.dependencyParse:",l,"is not a valid dependency string."),{name:l.split("@")[0],range:l.split("@")[1]||"*"}}return{name:l.name,range:l.range||l.version}},s.versionParse=function(l){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(l)||o.warn("Plugin.versionParse:",l,"is not a valid version or range.");var u=c.exec(l),f=Number(u[4]),g=Number(u[5]),d=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:l,operator:u[1]||u[2]||"",major:f,minor:g,patch:d,parts:[f,g,d],prerelease:u[7],number:f*1e8+g*1e4+d}},s.versionSatisfies=function(l,c){c=c||"*";var u=s.versionParse(c),f=s.versionParse(l);if(u.isRange){if(u.operator==="*"||l==="*")return!0;if(u.operator===">")return f.number>u.number;if(u.operator===">=")return f.number>=u.number;if(u.operator==="~")return f.major===u.major&&f.minor===u.minor&&f.patch>=u.patch;if(u.operator==="^")return u.major>0?f.major===u.major&&f.number>=u.number:u.minor>0?f.minor===u.minor&&f.patch>=u.patch:f.patch===u.patch}return l===c||l==="*"}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(7),l=r(18),c=r(13),u=r(19),f=r(5),g=r(6),d=r(10),h=r(0),m=r(4);(function(){s._deltaMax=1e3/60,s.create=function(_){_=_||{};var w={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},R=h.extend(w,_);return R.world=_.world||g.create({label:"World"}),R.pairs=_.pairs||u.create(),R.detector=_.detector||c.create(),R.detector.pairs=R.pairs,R.grid={buckets:[]},R.world.gravity=R.gravity,R.broadphase=R.grid,R.metrics={},R},s.update=function(_,w){var R=h.now(),P=_.world,N=_.detector,D=_.pairs,T=_.timing,k=T.timestamp,I;w>s._deltaMax&&h.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),w=typeof w<"u"?w:h._baseDelta,w*=T.timeScale,T.timestamp+=w,T.lastDelta=w;var v={timestamp:T.timestamp,delta:w};f.trigger(_,"beforeUpdate",v);var S=g.allBodies(P),C=g.allConstraints(P);for(P.isModified&&(c.setBodies(N,S),g.setModified(P,!1,!1,!0)),_.enableSleeping&&o.update(S,w),s._bodiesApplyGravity(S,_.gravity),w>0&&s._bodiesUpdate(S,w),f.trigger(_,"beforeSolve",v),d.preSolveAll(S),I=0;I<_.constraintIterations;I++)d.solveAll(C,w);d.postSolveAll(S);var E=c.collisions(N);u.update(D,E,k),_.enableSleeping&&o.afterCollisions(D.list),D.collisionStart.length>0&&f.trigger(_,"collisionStart",{pairs:D.collisionStart,timestamp:T.timestamp,delta:w});var x=h.clamp(20/_.positionIterations,0,1);for(l.preSolvePosition(D.list),I=0;I<_.positionIterations;I++)l.solvePosition(D.list,w,x);for(l.postSolvePosition(S),d.preSolveAll(S),I=0;I<_.constraintIterations;I++)d.solveAll(C,w);for(d.postSolveAll(S),l.preSolveVelocity(D.list),I=0;I<_.velocityIterations;I++)l.solveVelocity(D.list,w);return s._bodiesUpdateVelocities(S),D.collisionActive.length>0&&f.trigger(_,"collisionActive",{pairs:D.collisionActive,timestamp:T.timestamp,delta:w}),D.collisionEnd.length>0&&f.trigger(_,"collisionEnd",{pairs:D.collisionEnd,timestamp:T.timestamp,delta:w}),s._bodiesClearForces(S),f.trigger(_,"afterUpdate",v),_.timing.lastElapsed=h.now()-R,_},s.merge=function(_,w){if(h.extend(_,w),w.world){_.world=w.world,s.clear(_);for(var R=g.allBodies(_.world),P=0;P<R.length;P++){var N=R[P];o.set(N,!1),N.id=h.nextId()}}},s.clear=function(_){u.clear(_.pairs),c.clear(_.detector)},s._bodiesClearForces=function(_){for(var w=_.length,R=0;R<w;R++){var P=_[R];P.force.x=0,P.force.y=0,P.torque=0}},s._bodiesApplyGravity=function(_,w){var R=typeof w.scale<"u"?w.scale:.001,P=_.length;if(!(w.x===0&&w.y===0||R===0))for(var N=0;N<P;N++){var D=_[N];D.isStatic||D.isSleeping||(D.force.y+=D.mass*w.y*R,D.force.x+=D.mass*w.x*R)}},s._bodiesUpdate=function(_,w){for(var R=_.length,P=0;P<R;P++){var N=_[P];N.isStatic||N.isSleeping||m.update(N,w)}},s._bodiesUpdateVelocities=function(_){for(var w=_.length,R=0;R<w;R++)m.updateVelocities(_[R])}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(0),c=r(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(u){var f,g,d,h=u.length;for(f=0;f<h;f++)g=u[f],g.isActive&&(d=g.contactCount,g.collision.parentA.totalContacts+=d,g.collision.parentB.totalContacts+=d)},s.solvePosition=function(u,f,g){var d,h,m,_,w,R,P,N,D=s._positionDampen*(g||1),T=l.clamp(f/l._baseDelta,0,1),k=u.length;for(d=0;d<k;d++)h=u[d],!(!h.isActive||h.isSensor)&&(m=h.collision,_=m.parentA,w=m.parentB,R=m.normal,h.separation=m.depth+R.x*(w.positionImpulse.x-_.positionImpulse.x)+R.y*(w.positionImpulse.y-_.positionImpulse.y));for(d=0;d<k;d++)h=u[d],!(!h.isActive||h.isSensor)&&(m=h.collision,_=m.parentA,w=m.parentB,R=m.normal,N=h.separation-h.slop*T,(_.isStatic||w.isStatic)&&(N*=2),_.isStatic||_.isSleeping||(P=D/_.totalContacts,_.positionImpulse.x+=R.x*N*P,_.positionImpulse.y+=R.y*N*P),w.isStatic||w.isSleeping||(P=D/w.totalContacts,w.positionImpulse.x-=R.x*N*P,w.positionImpulse.y-=R.y*N*P))},s.postSolvePosition=function(u){for(var f=s._positionWarming,g=u.length,d=o.translate,h=c.update,m=0;m<g;m++){var _=u[m],w=_.positionImpulse,R=w.x,P=w.y,N=_.velocity;if(_.totalContacts=0,R!==0||P!==0){for(var D=0;D<_.parts.length;D++){var T=_.parts[D];d(T.vertices,w),h(T.bounds,T.vertices,N),T.position.x+=R,T.position.y+=P}_.positionPrev.x+=R,_.positionPrev.y+=P,R*N.x+P*N.y<0?(w.x=0,w.y=0):(w.x*=f,w.y*=f)}}},s.preSolveVelocity=function(u){var f=u.length,g,d;for(g=0;g<f;g++){var h=u[g];if(!(!h.isActive||h.isSensor)){var m=h.contacts,_=h.contactCount,w=h.collision,R=w.parentA,P=w.parentB,N=w.normal,D=w.tangent;for(d=0;d<_;d++){var T=m[d],k=T.vertex,I=T.normalImpulse,v=T.tangentImpulse;if(I!==0||v!==0){var S=N.x*I+D.x*v,C=N.y*I+D.y*v;R.isStatic||R.isSleeping||(R.positionPrev.x+=S*R.inverseMass,R.positionPrev.y+=C*R.inverseMass,R.anglePrev+=R.inverseInertia*((k.x-R.position.x)*C-(k.y-R.position.y)*S)),P.isStatic||P.isSleeping||(P.positionPrev.x-=S*P.inverseMass,P.positionPrev.y-=C*P.inverseMass,P.anglePrev-=P.inverseInertia*((k.x-P.position.x)*C-(k.y-P.position.y)*S))}}}}},s.solveVelocity=function(u,f){var g=f/l._baseDelta,d=g*g,h=d*g,m=-s._restingThresh*g,_=s._restingThreshTangent,w=s._frictionNormalMultiplier*g,R=s._frictionMaxStatic,P=u.length,N,D,T,k;for(T=0;T<P;T++){var I=u[T];if(!(!I.isActive||I.isSensor)){var v=I.collision,S=v.parentA,C=v.parentB,E=v.normal.x,x=v.normal.y,A=v.tangent.x,L=v.tangent.y,U=I.inverseMass,W=I.friction*I.frictionStatic*w,H=I.contacts,G=I.contactCount,J=1/G,ue=S.position.x-S.positionPrev.x,pe=S.position.y-S.positionPrev.y,ge=S.angle-S.anglePrev,we=C.position.x-C.positionPrev.x,Fe=C.position.y-C.positionPrev.y,Pe=C.angle-C.anglePrev;for(k=0;k<G;k++){var X=H[k],be=X.vertex,me=be.x-S.position.x,vt=be.y-S.position.y,Ue=be.x-C.position.x,Ve=be.y-C.position.y,Ae=ue-vt*ge,Zn=pe+me*ge,es=we-Ve*Pe,wr=Fe+Ue*Pe,yn=Ae-es,wn=Zn-wr,In=E*yn+x*wn,oe=A*yn+L*wn,Ie=I.separation+In,yt=Math.min(Ie,1);yt=Ie<0?0:yt;var ts=yt*W;oe<-ts||oe>ts?(D=oe>0?oe:-oe,N=I.friction*(oe>0?1:-1)*h,N<-D?N=-D:N>D&&(N=D)):(N=oe,D=R);var ei=me*x-vt*E,ns=Ue*x-Ve*E,wt=J/(U+S.inverseInertia*ei*ei+C.inverseInertia*ns*ns),qt=(1+I.restitution)*In*wt;if(N*=wt,In<m)X.normalImpulse=0;else{var is=X.normalImpulse;X.normalImpulse+=qt,X.normalImpulse>0&&(X.normalImpulse=0),qt=X.normalImpulse-is}if(oe<-_||oe>_)X.tangentImpulse=0;else{var ti=X.tangentImpulse;X.tangentImpulse+=N,X.tangentImpulse<-D&&(X.tangentImpulse=-D),X.tangentImpulse>D&&(X.tangentImpulse=D),N=X.tangentImpulse-ti}var Sn=E*qt+A*N,Cn=x*qt+L*N;S.isStatic||S.isSleeping||(S.positionPrev.x+=Sn*S.inverseMass,S.positionPrev.y+=Cn*S.inverseMass,S.anglePrev+=(me*Cn-vt*Sn)*S.inverseInertia),C.isStatic||C.isSleeping||(C.positionPrev.x-=Sn*C.inverseMass,C.positionPrev.y-=Cn*C.inverseMass,C.anglePrev-=(Ue*Cn-Ve*Sn)*C.inverseInertia)}}}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(9),l=r(0);(function(){s.create=function(c){return l.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},s.update=function(c,u,f){var g=o.update,d=o.create,h=o.setActive,m=c.table,_=c.list,w=_.length,R=w,P=c.collisionStart,N=c.collisionEnd,D=c.collisionActive,T=u.length,k=0,I=0,v=0,S,C,E;for(E=0;E<T;E++)S=u[E],C=S.pair,C?(C.isActive&&(D[v++]=C),g(C,S,f)):(C=d(S,f),m[C.id]=C,P[k++]=C,_[R++]=C);for(R=0,w=_.length,E=0;E<w;E++)C=_[E],C.timeUpdated>=f?_[R++]=C:(h(C,!1,f),C.collision.bodyA.sleepCounter>0&&C.collision.bodyB.sleepCounter>0?_[R++]=C:(N[I++]=C,delete m[C.id]));_.length!==R&&(_.length=R),P.length!==k&&(P.length=k),N.length!==I&&(N.length=I),D.length!==v&&(D.length=v)},s.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()}),(function(t,i,r){var s=t.exports=r(21);s.Axes=r(11),s.Bodies=r(12),s.Body=r(4),s.Bounds=r(1),s.Collision=r(8),s.Common=r(0),s.Composite=r(6),s.Composites=r(22),s.Constraint=r(10),s.Contact=r(16),s.Detector=r(13),s.Engine=r(17),s.Events=r(5),s.Grid=r(23),s.Mouse=r(14),s.MouseConstraint=r(24),s.Pair=r(9),s.Pairs=r(19),s.Plugin=r(15),s.Query=r(25),s.Render=r(26),s.Resolver=r(18),s.Runner=r(27),s.SAT=r(28),s.Sleeping=r(7),s.Svg=r(29),s.Vector=r(2),s.Vertices=r(3),s.World=r(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(t,i,r){var s={};t.exports=s;var o=r(15),l=r(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){o.use(s,Array.prototype.slice.call(arguments))},s.before=function(c,u){return c=c.replace(/^Matter./,""),l.chainPathBefore(s,c,u)},s.after=function(c,u){return c=c.replace(/^Matter./,""),l.chainPathAfter(s,c,u)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(6),l=r(10),c=r(0),u=r(4),f=r(12),g=c.deprecated;(function(){s.stack=function(d,h,m,_,w,R,P){for(var N=o.create({label:"Stack"}),D=d,T=h,k,I=0,v=0;v<_;v++){for(var S=0,C=0;C<m;C++){var E=P(D,T,C,v,k,I);if(E){var x=E.bounds.max.y-E.bounds.min.y,A=E.bounds.max.x-E.bounds.min.x;x>S&&(S=x),u.translate(E,{x:A*.5,y:x*.5}),D=E.bounds.max.x+w,o.addBody(N,E),k=E,I+=1}else D+=w}T+=S+R,D=d}return N},s.chain=function(d,h,m,_,w,R){for(var P=d.bodies,N=1;N<P.length;N++){var D=P[N-1],T=P[N],k=D.bounds.max.y-D.bounds.min.y,I=D.bounds.max.x-D.bounds.min.x,v=T.bounds.max.y-T.bounds.min.y,S=T.bounds.max.x-T.bounds.min.x,C={bodyA:D,pointA:{x:I*h,y:k*m},bodyB:T,pointB:{x:S*_,y:v*w}},E=c.extend(C,R);o.addConstraint(d,l.create(E))}return d.label+=" Chain",d},s.mesh=function(d,h,m,_,w){var R=d.bodies,P,N,D,T,k;for(P=0;P<m;P++){for(N=1;N<h;N++)D=R[N-1+P*h],T=R[N+P*h],o.addConstraint(d,l.create(c.extend({bodyA:D,bodyB:T},w)));if(P>0)for(N=0;N<h;N++)D=R[N+(P-1)*h],T=R[N+P*h],o.addConstraint(d,l.create(c.extend({bodyA:D,bodyB:T},w))),_&&N>0&&(k=R[N-1+(P-1)*h],o.addConstraint(d,l.create(c.extend({bodyA:k,bodyB:T},w)))),_&&N<h-1&&(k=R[N+1+(P-1)*h],o.addConstraint(d,l.create(c.extend({bodyA:k,bodyB:T},w))))}return d.label+=" Mesh",d},s.pyramid=function(d,h,m,_,w,R,P){return s.stack(d,h,m,_,w,R,function(N,D,T,k,I,v){var S=Math.min(_,Math.ceil(m/2)),C=I?I.bounds.max.x-I.bounds.min.x:0;if(!(k>S)){k=S-k;var E=k,x=m-1-k;if(!(T<E||T>x)){v===1&&u.translate(I,{x:(T+(m%2===1?1:-1))*C,y:0});var A=I?T*C:0;return P(d+A+T*w,D,T,k,I,v)}}})},s.newtonsCradle=function(d,h,m,_,w){for(var R=o.create({label:"Newtons Cradle"}),P=0;P<m;P++){var N=1.9,D=f.circle(d+P*(_*N),h+w,_,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),T=l.create({pointA:{x:d+P*(_*N),y:h},bodyB:D});o.addBody(R,D),o.addConstraint(R,T)}return R},g(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(d,h,m,_,w){var R=u.nextGroup(!0),P=20,N=-m*.5+P,D=m*.5-P,T=0,k=o.create({label:"Car"}),I=f.rectangle(d,h,m,_,{collisionFilter:{group:R},chamfer:{radius:_*.5},density:2e-4}),v=f.circle(d+N,h+T,w,{collisionFilter:{group:R},friction:.8}),S=f.circle(d+D,h+T,w,{collisionFilter:{group:R},friction:.8}),C=l.create({bodyB:I,pointB:{x:N,y:T},bodyA:v,stiffness:1,length:0}),E=l.create({bodyB:I,pointB:{x:D,y:T},bodyA:S,stiffness:1,length:0});return o.addBody(k,I),o.addBody(k,v),o.addBody(k,S),o.addConstraint(k,C),o.addConstraint(k,E),k},g(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(d,h,m,_,w,R,P,N,D,T){D=c.extend({inertia:1/0},D),T=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},T);var k=s.stack(d,h,m,_,w,R,function(I,v){return f.circle(I,v,N,D)});return s.mesh(k,m,_,P,T),k.label="Soft Body",k},g(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(t,i,r){var s={};t.exports=s;var o=r(9),l=r(0),c=l.deprecated;(function(){s.create=function(u){var f={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return l.extend(f,u)},s.update=function(u,f,g,d){var h,m,_,w=g.world,R=u.buckets,P,N,D=!1;for(h=0;h<f.length;h++){var T=f[h];if(!(T.isSleeping&&!d)&&!(w.bounds&&(T.bounds.max.x<w.bounds.min.x||T.bounds.min.x>w.bounds.max.x||T.bounds.max.y<w.bounds.min.y||T.bounds.min.y>w.bounds.max.y))){var k=s._getRegion(u,T);if(!T.region||k.id!==T.region.id||d){(!T.region||d)&&(T.region=k);var I=s._regionUnion(k,T.region);for(m=I.startCol;m<=I.endCol;m++)for(_=I.startRow;_<=I.endRow;_++){N=s._getBucketId(m,_),P=R[N];var v=m>=k.startCol&&m<=k.endCol&&_>=k.startRow&&_<=k.endRow,S=m>=T.region.startCol&&m<=T.region.endCol&&_>=T.region.startRow&&_<=T.region.endRow;!v&&S&&S&&P&&s._bucketRemoveBody(u,P,T),(T.region===k||v&&!S||d)&&(P||(P=s._createBucket(R,N)),s._bucketAddBody(u,P,T))}T.region=k,D=!0}}}D&&(u.pairsList=s._createActivePairsList(u))},c(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},c(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(u,f){var g=Math.min(u.startCol,f.startCol),d=Math.max(u.endCol,f.endCol),h=Math.min(u.startRow,f.startRow),m=Math.max(u.endRow,f.endRow);return s._createRegion(g,d,h,m)},s._getRegion=function(u,f){var g=f.bounds,d=Math.floor(g.min.x/u.bucketWidth),h=Math.floor(g.max.x/u.bucketWidth),m=Math.floor(g.min.y/u.bucketHeight),_=Math.floor(g.max.y/u.bucketHeight);return s._createRegion(d,h,m,_)},s._createRegion=function(u,f,g,d){return{id:u+","+f+","+g+","+d,startCol:u,endCol:f,startRow:g,endRow:d}},s._getBucketId=function(u,f){return"C"+u+"R"+f},s._createBucket=function(u,f){var g=u[f]=[];return g},s._bucketAddBody=function(u,f,g){var d=u.pairs,h=o.id,m=f.length,_;for(_=0;_<m;_++){var w=f[_];if(!(g.id===w.id||g.isStatic&&w.isStatic)){var R=h(g,w),P=d[R];P?P[2]+=1:d[R]=[g,w,1]}}f.push(g)},s._bucketRemoveBody=function(u,f,g){var d=u.pairs,h=o.id,m;f.splice(l.indexOf(f,g),1);var _=f.length;for(m=0;m<_;m++){var w=d[h(g,f[m])];w&&(w[2]-=1)}},s._createActivePairsList=function(u){var f,g=u.pairs,d=l.keys(g),h=d.length,m=[],_;for(_=0;_<h;_++)f=g[d[_]],f[2]>0?m.push(f):delete g[d[_]];return m}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(7),c=r(14),u=r(5),f=r(13),g=r(10),d=r(6),h=r(0),m=r(1);(function(){s.create=function(_,w){var R=(_?_.mouse:null)||(w?w.mouse:null);R||(_&&_.render&&_.render.canvas?R=c.create(_.render.canvas):w&&w.element?R=c.create(w.element):(R=c.create(),h.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var P=g.create({label:"Mouse Constraint",pointA:R.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),N={type:"mouseConstraint",mouse:R,element:null,body:null,constraint:P,collisionFilter:{category:1,mask:4294967295,group:0}},D=h.extend(N,w);return u.on(_,"beforeUpdate",function(){var T=d.allBodies(_.world);s.update(D,T),s._triggerEvents(D)}),D},s.update=function(_,w){var R=_.mouse,P=_.constraint,N=_.body;if(R.button===0){if(P.bodyB)l.set(P.bodyB,!1),P.pointA=R.position;else for(var D=0;D<w.length;D++)if(N=w[D],m.contains(N.bounds,R.position)&&f.canCollide(N.collisionFilter,_.collisionFilter))for(var T=N.parts.length>1?1:0;T<N.parts.length;T++){var k=N.parts[T];if(o.contains(k.vertices,R.position)){P.pointA=R.position,P.bodyB=_.body=N,P.pointB={x:R.position.x-N.position.x,y:R.position.y-N.position.y},P.angleB=N.angle,l.set(N,!1),u.trigger(_,"startdrag",{mouse:R,body:N});break}}}else P.bodyB=_.body=null,P.pointB=null,N&&u.trigger(_,"enddrag",{mouse:R,body:N})},s._triggerEvents=function(_){var w=_.mouse,R=w.sourceEvents;R.mousemove&&u.trigger(_,"mousemove",{mouse:w}),R.mousedown&&u.trigger(_,"mousedown",{mouse:w}),R.mouseup&&u.trigger(_,"mouseup",{mouse:w}),c.clearSourceEvents(w)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(2),l=r(8),c=r(1),u=r(12),f=r(3);(function(){s.collides=function(g,d){for(var h=[],m=d.length,_=g.bounds,w=l.collides,R=c.overlaps,P=0;P<m;P++){var N=d[P],D=N.parts.length,T=D===1?0:1;if(R(N.bounds,_))for(var k=T;k<D;k++){var I=N.parts[k];if(R(I.bounds,_)){var v=w(I,g);if(v){h.push(v);break}}}}return h},s.ray=function(g,d,h,m){m=m||1e-100;for(var _=o.angle(d,h),w=o.magnitude(o.sub(d,h)),R=(h.x+d.x)*.5,P=(h.y+d.y)*.5,N=u.rectangle(R,P,w,m,{angle:_}),D=s.collides(N,g),T=0;T<D.length;T+=1){var k=D[T];k.body=k.bodyB=k.bodyA}return D},s.region=function(g,d,h){for(var m=[],_=0;_<g.length;_++){var w=g[_],R=c.overlaps(w.bounds,d);(R&&!h||!R&&h)&&m.push(w)}return m},s.point=function(g,d){for(var h=[],m=0;m<g.length;m++){var _=g[m];if(c.contains(_.bounds,d))for(var w=_.parts.length===1?0:1;w<_.parts.length;w++){var R=_.parts[w];if(c.contains(R.bounds,d)&&f.contains(R.vertices,d)){h.push(_);break}}}return h}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(4),l=r(0),c=r(6),u=r(1),f=r(5),g=r(2),d=r(14);(function(){var h,m;typeof window<"u"&&(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(T){window.setTimeout(function(){T(l.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(T){var k={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!T.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},I=l.extend(k,T);return I.canvas&&(I.canvas.width=I.options.width||I.canvas.width,I.canvas.height=I.options.height||I.canvas.height),I.mouse=T.mouse,I.engine=T.engine,I.canvas=I.canvas||R(I.options.width,I.options.height),I.context=I.canvas.getContext("2d"),I.textures={},I.bounds=I.bounds||{min:{x:0,y:0},max:{x:I.canvas.width,y:I.canvas.height}},I.controller=s,I.options.showBroadphase=!1,I.options.pixelRatio!==1&&s.setPixelRatio(I,I.options.pixelRatio),l.isElement(I.element)&&I.element.appendChild(I.canvas),I},s.run=function(T){(function k(I){T.frameRequestId=h(k),_(T,I),s.world(T,I),T.context.setTransform(T.options.pixelRatio,0,0,T.options.pixelRatio,0,0),(T.options.showStats||T.options.showDebug)&&s.stats(T,T.context,I),(T.options.showPerformance||T.options.showDebug)&&s.performance(T,T.context,I),T.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(T){m(T.frameRequestId)},s.setPixelRatio=function(T,k){var I=T.options,v=T.canvas;k==="auto"&&(k=P(v)),I.pixelRatio=k,v.setAttribute("data-pixel-ratio",k),v.width=I.width*k,v.height=I.height*k,v.style.width=I.width+"px",v.style.height=I.height+"px"},s.setSize=function(T,k,I){T.options.width=k,T.options.height=I,T.bounds.max.x=T.bounds.min.x+k,T.bounds.max.y=T.bounds.min.y+I,T.options.pixelRatio!==1?s.setPixelRatio(T,T.options.pixelRatio):(T.canvas.width=k,T.canvas.height=I)},s.lookAt=function(T,k,I,v){v=typeof v<"u"?v:!0,k=l.isArray(k)?k:[k],I=I||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},C=0;C<k.length;C+=1){var E=k[C],x=E.bounds?E.bounds.min:E.min||E.position||E,A=E.bounds?E.bounds.max:E.max||E.position||E;x&&A&&(x.x<S.min.x&&(S.min.x=x.x),A.x>S.max.x&&(S.max.x=A.x),x.y<S.min.y&&(S.min.y=x.y),A.y>S.max.y&&(S.max.y=A.y))}var L=S.max.x-S.min.x+2*I.x,U=S.max.y-S.min.y+2*I.y,W=T.canvas.height,H=T.canvas.width,G=H/W,J=L/U,ue=1,pe=1;J>G?pe=J/G:ue=G/J,T.options.hasBounds=!0,T.bounds.min.x=S.min.x,T.bounds.max.x=S.min.x+L*ue,T.bounds.min.y=S.min.y,T.bounds.max.y=S.min.y+U*pe,v&&(T.bounds.min.x+=L*.5-L*ue*.5,T.bounds.max.x+=L*.5-L*ue*.5,T.bounds.min.y+=U*.5-U*pe*.5,T.bounds.max.y+=U*.5-U*pe*.5),T.bounds.min.x-=I.x,T.bounds.max.x-=I.x,T.bounds.min.y-=I.y,T.bounds.max.y-=I.y,T.mouse&&(d.setScale(T.mouse,{x:(T.bounds.max.x-T.bounds.min.x)/T.canvas.width,y:(T.bounds.max.y-T.bounds.min.y)/T.canvas.height}),d.setOffset(T.mouse,T.bounds.min))},s.startViewTransform=function(T){var k=T.bounds.max.x-T.bounds.min.x,I=T.bounds.max.y-T.bounds.min.y,v=k/T.options.width,S=I/T.options.height;T.context.setTransform(T.options.pixelRatio/v,0,0,T.options.pixelRatio/S,0,0),T.context.translate(-T.bounds.min.x,-T.bounds.min.y)},s.endViewTransform=function(T){T.context.setTransform(T.options.pixelRatio,0,0,T.options.pixelRatio,0,0)},s.world=function(T,k){var I=l.now(),v=T.engine,S=v.world,C=T.canvas,E=T.context,x=T.options,A=T.timing,L=c.allBodies(S),U=c.allConstraints(S),W=x.wireframes?x.wireframeBackground:x.background,H=[],G=[],J,ue={timestamp:v.timing.timestamp};if(f.trigger(T,"beforeRender",ue),T.currentBackground!==W&&D(T,W),E.globalCompositeOperation="source-in",E.fillStyle="transparent",E.fillRect(0,0,C.width,C.height),E.globalCompositeOperation="source-over",x.hasBounds){for(J=0;J<L.length;J++){var pe=L[J];u.overlaps(pe.bounds,T.bounds)&&H.push(pe)}for(J=0;J<U.length;J++){var ge=U[J],we=ge.bodyA,Fe=ge.bodyB,Pe=ge.pointA,X=ge.pointB;we&&(Pe=g.add(we.position,ge.pointA)),Fe&&(X=g.add(Fe.position,ge.pointB)),!(!Pe||!X)&&(u.contains(T.bounds,Pe)||u.contains(T.bounds,X))&&G.push(ge)}s.startViewTransform(T),T.mouse&&(d.setScale(T.mouse,{x:(T.bounds.max.x-T.bounds.min.x)/T.options.width,y:(T.bounds.max.y-T.bounds.min.y)/T.options.height}),d.setOffset(T.mouse,T.bounds.min))}else G=U,H=L,T.options.pixelRatio!==1&&T.context.setTransform(T.options.pixelRatio,0,0,T.options.pixelRatio,0,0);!x.wireframes||v.enableSleeping&&x.showSleeping?s.bodies(T,H,E):(x.showConvexHulls&&s.bodyConvexHulls(T,H,E),s.bodyWireframes(T,H,E)),x.showBounds&&s.bodyBounds(T,H,E),(x.showAxes||x.showAngleIndicator)&&s.bodyAxes(T,H,E),x.showPositions&&s.bodyPositions(T,H,E),x.showVelocity&&s.bodyVelocity(T,H,E),x.showIds&&s.bodyIds(T,H,E),x.showSeparations&&s.separations(T,v.pairs.list,E),x.showCollisions&&s.collisions(T,v.pairs.list,E),x.showVertexNumbers&&s.vertexNumbers(T,H,E),x.showMousePosition&&s.mousePosition(T,T.mouse,E),s.constraints(G,E),x.hasBounds&&s.endViewTransform(T),f.trigger(T,"afterRender",ue),A.lastElapsed=l.now()-I},s.stats=function(T,k,I){for(var v=T.engine,S=v.world,C=c.allBodies(S),E=0,x=55,A=44,L=0,U=0,W=0;W<C.length;W+=1)E+=C[W].parts.length;var H={Part:E,Body:C.length,Cons:c.allConstraints(S).length,Comp:c.allComposites(S).length,Pair:v.pairs.list.length};k.fillStyle="#0e0f19",k.fillRect(L,U,x*5.5,A),k.font="12px Arial",k.textBaseline="top",k.textAlign="right";for(var G in H){var J=H[G];k.fillStyle="#aaa",k.fillText(G,L+x,U+8),k.fillStyle="#eee",k.fillText(J,L+x,U+26),L+=x}},s.performance=function(T,k){var I=T.engine,v=T.timing,S=v.deltaHistory,C=v.elapsedHistory,E=v.timestampElapsedHistory,x=v.engineDeltaHistory,A=v.engineUpdatesHistory,L=v.engineElapsedHistory,U=I.timing.lastUpdatesPerFrame,W=I.timing.lastDelta,H=w(S),G=w(C),J=w(x),ue=w(A),pe=w(L),ge=w(E),we=ge/H||0,Fe=Math.round(H/W),Pe=1e3/H||0,X=4,be=12,me=60,vt=34,Ue=10,Ve=69;k.fillStyle="#0e0f19",k.fillRect(0,50,be*5+me*6+22,vt),s.status(k,Ue,Ve,me,X,S.length,Math.round(Pe)+" fps",Pe/s._goodFps,function(Ae){return S[Ae]/H-1}),s.status(k,Ue+be+me,Ve,me,X,x.length,W.toFixed(2)+" dt",s._goodDelta/W,function(Ae){return x[Ae]/J-1}),s.status(k,Ue+(be+me)*2,Ve,me,X,A.length,U+" upf",Math.pow(l.clamp(ue/Fe||1,0,1),4),function(Ae){return A[Ae]/ue-1}),s.status(k,Ue+(be+me)*3,Ve,me,X,L.length,pe.toFixed(2)+" ut",1-U*pe/s._goodFps,function(Ae){return L[Ae]/pe-1}),s.status(k,Ue+(be+me)*4,Ve,me,X,C.length,G.toFixed(2)+" rt",1-G/s._goodFps,function(Ae){return C[Ae]/G-1}),s.status(k,Ue+(be+me)*5,Ve,me,X,E.length,we.toFixed(2)+" x",we*we*we,function(Ae){return(E[Ae]/S[Ae]/we||0)-1})},s.status=function(T,k,I,v,S,C,E,x,A){T.strokeStyle="#888",T.fillStyle="#444",T.lineWidth=1,T.fillRect(k,I+7,v,1),T.beginPath(),T.moveTo(k,I+7-S*l.clamp(.4*A(0),-2,2));for(var L=0;L<v;L+=1)T.lineTo(k+L,I+7-(L<C?S*l.clamp(.4*A(L),-2,2):0));T.stroke(),T.fillStyle="hsl("+l.clamp(25+95*x,0,120)+",100%,60%)",T.fillRect(k,I-7,4,4),T.font="12px Arial",T.textBaseline="middle",T.textAlign="right",T.fillStyle="#eee",T.fillText(E,k+v,I-5)},s.constraints=function(T,k){for(var I=k,v=0;v<T.length;v++){var S=T[v];if(!(!S.render.visible||!S.pointA||!S.pointB)){var C=S.bodyA,E=S.bodyB,x,A;if(C?x=g.add(C.position,S.pointA):x=S.pointA,S.render.type==="pin")I.beginPath(),I.arc(x.x,x.y,3,0,2*Math.PI),I.closePath();else{if(E?A=g.add(E.position,S.pointB):A=S.pointB,I.beginPath(),I.moveTo(x.x,x.y),S.render.type==="spring")for(var L=g.sub(A,x),U=g.perp(g.normalise(L)),W=Math.ceil(l.clamp(S.length/5,12,20)),H,G=1;G<W;G+=1)H=G%2===0?1:-1,I.lineTo(x.x+L.x*(G/W)+U.x*H*4,x.y+L.y*(G/W)+U.y*H*4);I.lineTo(A.x,A.y)}S.render.lineWidth&&(I.lineWidth=S.render.lineWidth,I.strokeStyle=S.render.strokeStyle,I.stroke()),S.render.anchors&&(I.fillStyle=S.render.strokeStyle,I.beginPath(),I.arc(x.x,x.y,3,0,2*Math.PI),I.arc(A.x,A.y,3,0,2*Math.PI),I.closePath(),I.fill())}}},s.bodies=function(T,k,I){var v=I;T.engine;var S=T.options,C=S.showInternalEdges||!S.wireframes,E,x,A,L;for(A=0;A<k.length;A++)if(E=k[A],!!E.render.visible){for(L=E.parts.length>1?1:0;L<E.parts.length;L++)if(x=E.parts[L],!!x.render.visible){if(S.showSleeping&&E.isSleeping?v.globalAlpha=.5*x.render.opacity:x.render.opacity!==1&&(v.globalAlpha=x.render.opacity),x.render.sprite&&x.render.sprite.texture&&!S.wireframes){var U=x.render.sprite,W=N(T,U.texture);v.translate(x.position.x,x.position.y),v.rotate(x.angle),v.drawImage(W,W.width*-U.xOffset*U.xScale,W.height*-U.yOffset*U.yScale,W.width*U.xScale,W.height*U.yScale),v.rotate(-x.angle),v.translate(-x.position.x,-x.position.y)}else{if(x.circleRadius)v.beginPath(),v.arc(x.position.x,x.position.y,x.circleRadius,0,2*Math.PI);else{v.beginPath(),v.moveTo(x.vertices[0].x,x.vertices[0].y);for(var H=1;H<x.vertices.length;H++)!x.vertices[H-1].isInternal||C?v.lineTo(x.vertices[H].x,x.vertices[H].y):v.moveTo(x.vertices[H].x,x.vertices[H].y),x.vertices[H].isInternal&&!C&&v.moveTo(x.vertices[(H+1)%x.vertices.length].x,x.vertices[(H+1)%x.vertices.length].y);v.lineTo(x.vertices[0].x,x.vertices[0].y),v.closePath()}S.wireframes?(v.lineWidth=1,v.strokeStyle=T.options.wireframeStrokeStyle,v.stroke()):(v.fillStyle=x.render.fillStyle,x.render.lineWidth&&(v.lineWidth=x.render.lineWidth,v.strokeStyle=x.render.strokeStyle,v.stroke()),v.fill())}v.globalAlpha=1}}},s.bodyWireframes=function(T,k,I){var v=I,S=T.options.showInternalEdges,C,E,x,A,L;for(v.beginPath(),x=0;x<k.length;x++)if(C=k[x],!!C.render.visible)for(L=C.parts.length>1?1:0;L<C.parts.length;L++){for(E=C.parts[L],v.moveTo(E.vertices[0].x,E.vertices[0].y),A=1;A<E.vertices.length;A++)!E.vertices[A-1].isInternal||S?v.lineTo(E.vertices[A].x,E.vertices[A].y):v.moveTo(E.vertices[A].x,E.vertices[A].y),E.vertices[A].isInternal&&!S&&v.moveTo(E.vertices[(A+1)%E.vertices.length].x,E.vertices[(A+1)%E.vertices.length].y);v.lineTo(E.vertices[0].x,E.vertices[0].y)}v.lineWidth=1,v.strokeStyle=T.options.wireframeStrokeStyle,v.stroke()},s.bodyConvexHulls=function(T,k,I){var v=I,S,C,E;for(v.beginPath(),C=0;C<k.length;C++)if(S=k[C],!(!S.render.visible||S.parts.length===1)){for(v.moveTo(S.vertices[0].x,S.vertices[0].y),E=1;E<S.vertices.length;E++)v.lineTo(S.vertices[E].x,S.vertices[E].y);v.lineTo(S.vertices[0].x,S.vertices[0].y)}v.lineWidth=1,v.strokeStyle="rgba(255,255,255,0.2)",v.stroke()},s.vertexNumbers=function(T,k,I){var v=I,S,C,E;for(S=0;S<k.length;S++){var x=k[S].parts;for(E=x.length>1?1:0;E<x.length;E++){var A=x[E];for(C=0;C<A.vertices.length;C++)v.fillStyle="rgba(255,255,255,0.2)",v.fillText(S+"_"+C,A.position.x+(A.vertices[C].x-A.position.x)*.8,A.position.y+(A.vertices[C].y-A.position.y)*.8)}}},s.mousePosition=function(T,k,I){var v=I;v.fillStyle="rgba(255,255,255,0.8)",v.fillText(k.position.x+"  "+k.position.y,k.position.x+5,k.position.y-5)},s.bodyBounds=function(T,k,I){var v=I;T.engine;var S=T.options;v.beginPath();for(var C=0;C<k.length;C++){var E=k[C];if(E.render.visible)for(var x=k[C].parts,A=x.length>1?1:0;A<x.length;A++){var L=x[A];v.rect(L.bounds.min.x,L.bounds.min.y,L.bounds.max.x-L.bounds.min.x,L.bounds.max.y-L.bounds.min.y)}}S.wireframes?v.strokeStyle="rgba(255,255,255,0.08)":v.strokeStyle="rgba(0,0,0,0.1)",v.lineWidth=1,v.stroke()},s.bodyAxes=function(T,k,I){var v=I;T.engine;var S=T.options,C,E,x,A;for(v.beginPath(),E=0;E<k.length;E++){var L=k[E],U=L.parts;if(L.render.visible)if(S.showAxes)for(x=U.length>1?1:0;x<U.length;x++)for(C=U[x],A=0;A<C.axes.length;A++){var W=C.axes[A];v.moveTo(C.position.x,C.position.y),v.lineTo(C.position.x+W.x*20,C.position.y+W.y*20)}else for(x=U.length>1?1:0;x<U.length;x++)for(C=U[x],A=0;A<C.axes.length;A++)v.moveTo(C.position.x,C.position.y),v.lineTo((C.vertices[0].x+C.vertices[C.vertices.length-1].x)/2,(C.vertices[0].y+C.vertices[C.vertices.length-1].y)/2)}S.wireframes?(v.strokeStyle="indianred",v.lineWidth=1):(v.strokeStyle="rgba(255, 255, 255, 0.4)",v.globalCompositeOperation="overlay",v.lineWidth=2),v.stroke(),v.globalCompositeOperation="source-over"},s.bodyPositions=function(T,k,I){var v=I;T.engine;var S=T.options,C,E,x,A;for(v.beginPath(),x=0;x<k.length;x++)if(C=k[x],!!C.render.visible)for(A=0;A<C.parts.length;A++)E=C.parts[A],v.arc(E.position.x,E.position.y,3,0,2*Math.PI,!1),v.closePath();for(S.wireframes?v.fillStyle="indianred":v.fillStyle="rgba(0,0,0,0.5)",v.fill(),v.beginPath(),x=0;x<k.length;x++)C=k[x],C.render.visible&&(v.arc(C.positionPrev.x,C.positionPrev.y,2,0,2*Math.PI,!1),v.closePath());v.fillStyle="rgba(255,165,0,0.8)",v.fill()},s.bodyVelocity=function(T,k,I){var v=I;v.beginPath();for(var S=0;S<k.length;S++){var C=k[S];if(C.render.visible){var E=o.getVelocity(C);v.moveTo(C.position.x,C.position.y),v.lineTo(C.position.x+E.x,C.position.y+E.y)}}v.lineWidth=3,v.strokeStyle="cornflowerblue",v.stroke()},s.bodyIds=function(T,k,I){var v=I,S,C;for(S=0;S<k.length;S++)if(k[S].render.visible){var E=k[S].parts;for(C=E.length>1?1:0;C<E.length;C++){var x=E[C];v.font="12px Arial",v.fillStyle="rgba(255,255,255,0.5)",v.fillText(x.id,x.position.x+10,x.position.y-10)}}},s.collisions=function(T,k,I){var v=I,S=T.options,C,E,x,A;for(v.beginPath(),x=0;x<k.length;x++)if(C=k[x],!!C.isActive)for(E=C.collision,A=0;A<C.contactCount;A++){var L=C.contacts[A],U=L.vertex;v.rect(U.x-1.5,U.y-1.5,3.5,3.5)}for(S.wireframes?v.fillStyle="rgba(255,255,255,0.7)":v.fillStyle="orange",v.fill(),v.beginPath(),x=0;x<k.length;x++)if(C=k[x],!!C.isActive&&(E=C.collision,C.contactCount>0)){var W=C.contacts[0].vertex.x,H=C.contacts[0].vertex.y;C.contactCount===2&&(W=(C.contacts[0].vertex.x+C.contacts[1].vertex.x)/2,H=(C.contacts[0].vertex.y+C.contacts[1].vertex.y)/2),E.bodyB===E.supports[0].body||E.bodyA.isStatic===!0?v.moveTo(W-E.normal.x*8,H-E.normal.y*8):v.moveTo(W+E.normal.x*8,H+E.normal.y*8),v.lineTo(W,H)}S.wireframes?v.strokeStyle="rgba(255,165,0,0.7)":v.strokeStyle="orange",v.lineWidth=1,v.stroke()},s.separations=function(T,k,I){var v=I,S=T.options,C,E,x,A,L;for(v.beginPath(),L=0;L<k.length;L++)if(C=k[L],!!C.isActive){E=C.collision,x=E.bodyA,A=E.bodyB;var U=1;!A.isStatic&&!x.isStatic&&(U=.5),A.isStatic&&(U=0),v.moveTo(A.position.x,A.position.y),v.lineTo(A.position.x-E.penetration.x*U,A.position.y-E.penetration.y*U),U=1,!A.isStatic&&!x.isStatic&&(U=.5),x.isStatic&&(U=0),v.moveTo(x.position.x,x.position.y),v.lineTo(x.position.x+E.penetration.x*U,x.position.y+E.penetration.y*U)}S.wireframes?v.strokeStyle="rgba(255,165,0,0.5)":v.strokeStyle="orange",v.stroke()},s.inspector=function(T,k){T.engine;var I=T.selected,v=T.render,S=v.options,C;if(S.hasBounds){var E=v.bounds.max.x-v.bounds.min.x,x=v.bounds.max.y-v.bounds.min.y,A=E/v.options.width,L=x/v.options.height;k.scale(1/A,1/L),k.translate(-v.bounds.min.x,-v.bounds.min.y)}for(var U=0;U<I.length;U++){var W=I[U].data;switch(k.translate(.5,.5),k.lineWidth=1,k.strokeStyle="rgba(255,165,0,0.9)",k.setLineDash([1,2]),W.type){case"body":C=W.bounds,k.beginPath(),k.rect(Math.floor(C.min.x-3),Math.floor(C.min.y-3),Math.floor(C.max.x-C.min.x+6),Math.floor(C.max.y-C.min.y+6)),k.closePath(),k.stroke();break;case"constraint":var H=W.pointA;W.bodyA&&(H=W.pointB),k.beginPath(),k.arc(H.x,H.y,10,0,2*Math.PI),k.closePath(),k.stroke();break}k.setLineDash([]),k.translate(-.5,-.5)}T.selectStart!==null&&(k.translate(.5,.5),k.lineWidth=1,k.strokeStyle="rgba(255,165,0,0.6)",k.fillStyle="rgba(255,165,0,0.1)",C=T.selectBounds,k.beginPath(),k.rect(Math.floor(C.min.x),Math.floor(C.min.y),Math.floor(C.max.x-C.min.x),Math.floor(C.max.y-C.min.y)),k.closePath(),k.stroke(),k.fill(),k.translate(-.5,-.5)),S.hasBounds&&k.setTransform(1,0,0,1,0,0)};var _=function(T,k){var I=T.engine,v=T.timing,S=v.historySize,C=I.timing.timestamp;v.delta=k-v.lastTime||s._goodDelta,v.lastTime=k,v.timestampElapsed=C-v.lastTimestamp||0,v.lastTimestamp=C,v.deltaHistory.unshift(v.delta),v.deltaHistory.length=Math.min(v.deltaHistory.length,S),v.engineDeltaHistory.unshift(I.timing.lastDelta),v.engineDeltaHistory.length=Math.min(v.engineDeltaHistory.length,S),v.timestampElapsedHistory.unshift(v.timestampElapsed),v.timestampElapsedHistory.length=Math.min(v.timestampElapsedHistory.length,S),v.engineUpdatesHistory.unshift(I.timing.lastUpdatesPerFrame),v.engineUpdatesHistory.length=Math.min(v.engineUpdatesHistory.length,S),v.engineElapsedHistory.unshift(I.timing.lastElapsed),v.engineElapsedHistory.length=Math.min(v.engineElapsedHistory.length,S),v.elapsedHistory.unshift(v.lastElapsed),v.elapsedHistory.length=Math.min(v.elapsedHistory.length,S)},w=function(T){for(var k=0,I=0;I<T.length;I+=1)k+=T[I];return k/T.length||0},R=function(T,k){var I=document.createElement("canvas");return I.width=T,I.height=k,I.oncontextmenu=function(){return!1},I.onselectstart=function(){return!1},I},P=function(T){var k=T.getContext("2d"),I=window.devicePixelRatio||1,v=k.webkitBackingStorePixelRatio||k.mozBackingStorePixelRatio||k.msBackingStorePixelRatio||k.oBackingStorePixelRatio||k.backingStorePixelRatio||1;return I/v},N=function(T,k){var I=T.textures[k];return I||(I=T.textures[k]=new Image,I.src=k,I)},D=function(T,k){var I=k;/(jpg|gif|png)$/.test(k)&&(I="url("+k+")"),T.canvas.style.background=I,T.canvas.style.backgroundSize="contain",T.currentBackground=k}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(5),l=r(17),c=r(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(f){var g={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},d=c.extend(g,f);return d.fps=0,d},s.run=function(f,g){return f.timeBuffer=s._frameDeltaFallback,(function d(h){f.frameRequestId=s._onNextFrame(f,d),h&&f.enabled&&s.tick(f,g,h)})(),f},s.tick=function(f,g,d){var h=c.now(),m=f.delta,_=0,w=d-f.timeLastTick;if((!w||!f.timeLastTick||w>Math.max(s._maxFrameDelta,f.maxFrameTime))&&(w=f.frameDelta||s._frameDeltaFallback),f.frameDeltaSmoothing){f.frameDeltaHistory.push(w),f.frameDeltaHistory=f.frameDeltaHistory.slice(-f.frameDeltaHistorySize);var R=f.frameDeltaHistory.slice(0).sort(),P=f.frameDeltaHistory.slice(R.length*s._smoothingLowerBound,R.length*s._smoothingUpperBound),N=u(P);w=N||w}f.frameDeltaSnapping&&(w=1e3/Math.round(1e3/w)),f.frameDelta=w,f.timeLastTick=d,f.timeBuffer+=f.frameDelta,f.timeBuffer=c.clamp(f.timeBuffer,0,f.frameDelta+m*s._timeBufferMargin),f.lastUpdatesDeferred=0;var D=f.maxUpdates||Math.ceil(f.maxFrameTime/m),T={timestamp:g.timing.timestamp};o.trigger(f,"beforeTick",T),o.trigger(f,"tick",T);for(var k=c.now();m>0&&f.timeBuffer>=m*s._timeBufferMargin;){o.trigger(f,"beforeUpdate",T),l.update(g,m),o.trigger(f,"afterUpdate",T),f.timeBuffer-=m,_+=1;var I=c.now()-h,v=c.now()-k,S=I+s._elapsedNextEstimate*v/_;if(_>=D||S>f.maxFrameTime){f.lastUpdatesDeferred=Math.round(Math.max(0,f.timeBuffer/m-s._timeBufferMargin));break}}g.timing.lastUpdatesPerFrame=_,o.trigger(f,"afterTick",T),f.frameDeltaHistory.length>=100&&(f.lastUpdatesDeferred&&Math.round(f.frameDelta/m)>D?c.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):f.lastUpdatesDeferred&&c.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof f.isFixed<"u"&&c.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(f.deltaMin||f.deltaMax)&&c.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),f.fps!==0&&c.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(f){s._cancelNextFrame(f)},s._onNextFrame=function(f,g){if(typeof window<"u"&&window.requestAnimationFrame)f.frameRequestId=window.requestAnimationFrame(g);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return f.frameRequestId},s._cancelNextFrame=function(f){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(f.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(f){for(var g=0,d=f.length,h=0;h<d;h+=1)g+=f[h];return g/d||0}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(8),l=r(0),c=l.deprecated;(function(){s.collides=function(u,f){return o.collides(u,f)},c(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(t,i,r){var s={};t.exports=s,r(1);var o=r(0);(function(){s.pathToVertices=function(l,c){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,f,g,d,h,m,_,w,R,P,N=[],D,T,k=0,I=0,v=0;c=c||15;var S=function(E,x,A){var L=A%2===1&&A>1;if(!R||E!=R.x||x!=R.y){R&&L?(D=R.x,T=R.y):(D=0,T=0);var U={x:D+E,y:T+x};(L||!R)&&(R=U),N.push(U),I=D+E,v=T+x}},C=function(E){var x=E.pathSegTypeAsLetter.toUpperCase();if(x!=="Z"){switch(x){case"M":case"L":case"T":case"C":case"S":case"Q":I=E.x,v=E.y;break;case"H":I=E.x;break;case"V":v=E.y;break}S(I,v,E.pathSegType)}};for(s._svgPathToAbsolute(l),g=l.getTotalLength(),m=[],u=0;u<l.pathSegList.numberOfItems;u+=1)m.push(l.pathSegList.getItem(u));for(_=m.concat();k<g;){if(P=l.getPathSegAtLength(k),h=m[P],h!=w){for(;_.length&&_[0]!=h;)C(_.shift());w=h}switch(h.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":d=l.getPointAtLength(k),S(d.x,d.y,0);break}k+=c}for(u=0,f=_.length;u<f;++u)C(_[u]);return N},s._svgPathToAbsolute=function(l){for(var c,u,f,g,d,h,m=l.pathSegList,_=0,w=0,R=m.numberOfItems,P=0;P<R;++P){var N=m.getItem(P),D=N.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(D))"x"in N&&(_=N.x),"y"in N&&(w=N.y);else switch("x1"in N&&(f=_+N.x1),"x2"in N&&(d=_+N.x2),"y1"in N&&(g=w+N.y1),"y2"in N&&(h=w+N.y2),"x"in N&&(_+=N.x),"y"in N&&(w+=N.y),D){case"m":m.replaceItem(l.createSVGPathSegMovetoAbs(_,w),P);break;case"l":m.replaceItem(l.createSVGPathSegLinetoAbs(_,w),P);break;case"h":m.replaceItem(l.createSVGPathSegLinetoHorizontalAbs(_),P);break;case"v":m.replaceItem(l.createSVGPathSegLinetoVerticalAbs(w),P);break;case"c":m.replaceItem(l.createSVGPathSegCurvetoCubicAbs(_,w,f,g,d,h),P);break;case"s":m.replaceItem(l.createSVGPathSegCurvetoCubicSmoothAbs(_,w,d,h),P);break;case"q":m.replaceItem(l.createSVGPathSegCurvetoQuadraticAbs(_,w,f,g),P);break;case"t":m.replaceItem(l.createSVGPathSegCurvetoQuadraticSmoothAbs(_,w),P);break;case"a":m.replaceItem(l.createSVGPathSegArcAbs(_,w,N.r1,N.r2,N.angle,N.largeArcFlag,N.sweepFlag),P);break;case"z":case"Z":_=c,w=u;break}(D=="M"||D=="m")&&(c=_,u=w)}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(6);r(0),(function(){s.create=o.create,s.add=o.add,s.remove=o.remove,s.clear=o.clear,s.addComposite=o.addComposite,s.addBody=o.addBody,s.addConstraint=o.addConstraint})()})])})})(Ps)),Ps.exports}var F=fw();class dw{constructor(e=pw()){this.seed=e,this.resetRandom()}randomFn;setSeed(e){this.seed!==e&&(this.seed=e,this.resetRandom())}getRandomNumber(){return this.randomFn?this.randomFn():Math.random()}resetRandom(){this.randomFn=mw(gw(this.seed))}}function pw(){const n=new Date,e=n.getFullYear().toString().slice(-2),t=(n.getMonth()+1).toString().padStart(2,"0"),i=n.getDate().toString().padStart(2,"0");return`${e}${t}${i}`}const gw=n=>{let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);e=(e<<5)-e+i,e=e&e}return e},mw=n=>()=>{let e=n+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296},_w={},Pt=_w||{},Qe={enableInterpolation:Pt.VITE_NET_INTERP_ENABLE?Pt.VITE_NET_INTERP_ENABLE==="true":!0,sendHz:Number(Pt.VITE_NET_SEND_HZ??20),renderDelayMs:Number(Pt.VITE_NET_RENDER_DELAY_MS??120),maxExtrapolationMs:Number(Pt.VITE_NET_MAX_EXTRAP_MS??100),warpDistancePx:Number(Pt.VITE_NET_WARP_PX??120),springK:Number(Pt.VITE_NET_SPRING_K??.04),dampingC:Number(Pt.VITE_NET_DAMPING_C??6)};window.netconfig=Qe;class vw{constructor(e,t){this.engine=e,this.seedService=t}ducksCountPerColor=4;colors=["#00ffff","#ff00ff","#ffff00"];duckRadius=12;wolfRadius=16;spawnRadius=200;maxWolves=4;wolfIdLocal="local";wolfRingColors=["#ff5555","#55ff55","#5555ff","#ffaa00"];walls=[];wolves=new Map;ducks=[];isHost=!0;duckTargets=new Map;snapBuffer=[];clockSkewMs=0;warpCount=0;stats={bufDepth:0,lastAlpha:0,lastExtrapMs:0};startedAt=null;finishedAt=null;onWinCallback=null;onStart(){this.walls=this.instantiateWalls(),this.upsertWolf(this.wolfIdLocal,!0);for(const e of this.colors)for(let t=0;t<this.ducksCountPerColor;t++){const i=this.getRandomPosition();console.debug("Spawning duck at",i);const r=this.instantiate(i,this.duckRadius,e);this.ducks.push(r)}F.World.add(this.engine.world,this.walls),F.World.add(this.engine.world,Array.from(this.wolves.values()).map(e=>e.body)),F.World.add(this.engine.world,this.ducks),this.startedAt==null&&(this.startedAt=performance.now())}onBeforeUpdate(e){this.ducks.forEach((u,f)=>{if(!this.isHost&&Qe.enableInterpolation){const N=performance.now()+this.clockSkewMs-Qe.renderDelayMs,D=this.sampleInterpolatedDuck(f,N);if(D){this.correctBodyTowards(u,D.position,D.velocity,e.delta/1e3);return}const T=this.duckTargets.get(f);if(T){const{position:k,velocity:I}=T,v=.2,S=F.Vector.add(F.Vector.mult(u.position,1-v),F.Vector.mult(k,v)),C=F.Vector.add(F.Vector.mult(u.velocity,1-v),F.Vector.mult(I,v));F.Body.setPosition(u,S),F.Body.setVelocity(u,C)}return}else if(!this.isHost){const P=this.duckTargets.get(f);if(P){const{position:N,velocity:D}=P,T=.2,k=F.Vector.add(F.Vector.mult(u.position,1-T),F.Vector.mult(N,T)),I=F.Vector.add(F.Vector.mult(u.velocity,1-T),F.Vector.mult(D,T));F.Body.setPosition(u,k),F.Body.setVelocity(u,I)}return}let g={x:0,y:0};const d=this.getCenterPosition();g=F.Vector.add(g,F.Vector.mult(F.Vector.sub(d,u.position),5e-7));let h=null,m=1/0;for(const P of this.ducks){if(P===u)continue;const N=F.Vector.magnitude(F.Vector.sub(P.position,u.position));N<m&&(m=N,h=P)}if(h&&m>1e-4){const P=F.Vector.normalise(F.Vector.sub(h.position,u.position)),N=1/(m+1);g=F.Vector.add(g,F.Vector.mult(P,-5e-7*N))}const R=this.ducks.filter(P=>P!==u).sort((P,N)=>{const D=F.Vector.magnitude(F.Vector.sub(P.position,u.position)),T=F.Vector.magnitude(F.Vector.sub(N.position,u.position));return D-T}).slice(0,2);if(R.length){let P={x:0,y:0};for(const D of R)P=F.Vector.add(P,D.position);const N=F.Vector.mult(P,1/R.length);g=F.Vector.add(g,F.Vector.mult(F.Vector.sub(N,u.position),5e-7))}for(const{body:P}of this.wolves.values()){const N=F.Vector.sub(P.position,u.position),D=F.Vector.magnitude(N);if(D>1e-4){const T=F.Vector.normalise(N),k=1/(D/7+1);g=F.Vector.add(g,F.Vector.mult(T,-.005*k))}}F.Body.applyForce(u,u.position,F.Vector.mult(g,u.mass))});const r=9,s=.02,o=6,l=e.delta/1e3,c=this.engine.render.mouse;for(const[,u]of this.wolves){const f=u.body,g=f.velocity,d=f.position,h=u.isLocal?c.position:u.target??d,m=F.Vector.sub(h,d);if(F.Vector.magnitude(m)<o){F.Body.setVelocity(f,{x:0,y:0}),F.Body.setAngularVelocity(f,0),u.isLocal&&F.Body.setPosition(f,h);continue}const w=Math.sqrt(r),R=r*(h.x-d.x)-2*w*g.x,P=r*(h.y-d.y)-2*w*g.y;let N={x:f.mass*R*l*l,y:f.mass*P*l*l};F.Vector.magnitude(N)>s&&(N=F.Vector.mult(F.Vector.normalise(N),s)),F.Body.applyForce(f,d,N)}if(this.isHost&&this.finishedAt==null){const u=this.checkWinConditionHost();if(u!=null){this.finishedAt=u;const f=this.startedAt??u,g=u-f;this.onWinCallback?.(g)}}}checkWinConditionHost(){if(!this.isHost)return null;const e=new Map;for(const s of this.ducks){const o=s.render.fillStyle||"#fff",l=e.get(o)??[];l.push(s),e.set(o,l)}const t=[];for(const[s,o]of e){let l={x:0,y:0};for(const f of o)l=F.Vector.add(l,f.position);const c=F.Vector.mult(l,1/o.length);let u=0;for(const f of o)u=Math.max(u,F.Vector.magnitude(F.Vector.sub(f.position,c)));t.push({color:s,center:c,radius:u})}if(!t.length)return null;const i=80;if(t.some(s=>s.radius>i))return null;const r=40;for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++){const l=t[s],c=t[o];if(F.Vector.magnitude(F.Vector.sub(l.center,c.center))<l.radius+c.radius+r)return null}return performance.now()}instantiateWalls(){const e=this.getBounds(),t=100;return[F.Bodies.rectangle(e.x/2,-t/2,e.x+t*2,t,{isStatic:!0}),F.Bodies.rectangle(e.x/2,e.y+t/2,e.x+t*2,t,{isStatic:!0}),F.Bodies.rectangle(-t/2,e.y/2,t,e.y+t*2,{isStatic:!0}),F.Bodies.rectangle(e.x+t/2,e.y/2,t,e.y+t*2,{isStatic:!0})]}instantiate(e,t=5,i="#ffffff"){return F.Bodies.circle(e.x,e.y,t,{frictionAir:.06,restitution:.2,density:.02,render:{fillStyle:i}})}getBounds(){return F.Vector.create(this.engine.render.canvas.width,this.engine.render.canvas.height)}getCenterPosition(){return F.Vector.div(this.getBounds(),2)}getRandomPosition(){const e=this.seedService.getRandomNumber.bind(this.seedService),t=e()*Math.PI*2,i=Math.sqrt(e()),r=i*Math.cos(t),s=i*Math.sin(t);return F.Vector.add(this.getCenterPosition(),F.Vector.mult(F.Vector.create(r,s),this.spawnRadius))}upsertWolf(e,t,i){if(this.wolves.has(e))return;if(!this.wolves.has(e)&&this.wolves.size>=this.maxWolves)throw new Error("Max wolves reached");const r="#ffffff",s=this.wolves.size%this.wolfRingColors.length,o=i??this.wolfRingColors[s],l=this.instantiate(this.getCenterPosition(),this.wolfRadius,r);l.render.strokeStyle=o,l.render.lineWidth=3,this.wolves.set(e,{body:l,isLocal:t,ringColor:o}),F.World.addBody(this.engine.world,l)}removeWolf(e){const t=this.wolves.get(e);t&&(F.World.remove(this.engine.world,t.body),this.wolves.delete(e))}setRemoteTarget(e,t){let i=this.wolves.get(e);i||(this.upsertWolf(e,!1),i=this.wolves.get(e)),!i.isLocal&&(i.target={x:t.x,y:t.y})}setIsHost(e){this.isHost=e}getDuckSnapshots(){return this.ducks.map((e,t)=>({id:String(t),x:e.position.x,y:e.position.y,vx:e.velocity.x,vy:e.velocity.y}))}setDuckTargets(e){for(const t of e){const i=Number(t.id);Number.isFinite(i)&&this.duckTargets.set(i,{position:F.Vector.create(t.x,t.y),velocity:F.Vector.create(t.vx,t.vy)})}}setDuckBatch(e){if(this.isHost)return;const t=performance.now(),i=e.tHost-t,r=.1;this.clockSkewMs=this.clockSkewMs===0?i:this.clockSkewMs*(1-r)+i*r;const s=e.snaps.map(c=>({id:Number(c.id),x:c.x,y:c.y,vx:c.vx,vy:c.vy,a:c.a,av:c.av}));this.snapBuffer.push({tHost:e.tHost,snaps:s});const o=Qe.renderDelayMs+2*Qe.maxExtrapolationMs,l=performance.now()+this.clockSkewMs-o;for(;this.snapBuffer.length>2&&this.snapBuffer[1].tHost<l;)this.snapBuffer.shift();this.stats.bufDepth=this.snapBuffer.length}sampleInterpolatedDuck(e,t){if(this.snapBuffer.length===0)return null;let i=this.snapBuffer[0],r=this.snapBuffer[this.snapBuffer.length-1];for(let h=0;h<this.snapBuffer.length;h++){const m=this.snapBuffer[h];if(m.tHost<=t&&(i=m),m.tHost>=t){r=m;break}}const s=i.snaps.find(h=>h.id===e),o=r.snaps.find(h=>h.id===e);if(!s&&!o)return null;if(i.tHost===r.tHost||!o){const m=Math.min(Qe.maxExtrapolationMs,Math.max(0,t-i.tHost))/1e3,_=s??o;return{position:F.Vector.create(_.x+_.vx*m,_.y+_.vy*m),velocity:F.Vector.create(_.vx,_.vy)}}const l=r.tHost-i.tHost,c=Math.max(0,Math.min(1,(t-i.tHost)/l));this.stats.lastAlpha=c;const u=s??o,f=o??s,g=F.Vector.create(u.x+(f.x-u.x)*c,u.y+(f.y-u.y)*c),d=F.Vector.create(u.vx+(f.vx-u.vx)*c,u.vy+(f.vy-u.vy)*c);return{position:g,velocity:d}}correctBodyTowards(e,t,i,r){const s=F.Vector.sub(t,e.position);if(F.Vector.magnitude(s)>Qe.warpDistancePx){F.Body.setPosition(e,t),F.Body.setVelocity(e,i),this.warpCount++;return}const l=Qe.springK,c={x:i.x+s.x*l,y:i.y+s.y*l},u=Math.max(0,Qe.dampingC),f=Math.max(0,Math.min(1,1-Math.exp(-u*r))),g={x:e.velocity.x+(c.x-e.velocity.x)*f,y:e.velocity.y+(c.y-e.velocity.y)*f},d=800,h=Math.hypot(g.x,g.y);if(h>d){const m=d/h;g.x*=m,g.y*=m}F.Body.setVelocity(e,g)}onWin(e){this.onWinCallback=e}getElapsedMs(e=performance.now()){return this.startedAt==null?0:this.finishedAt!=null?Math.max(0,this.finishedAt-this.startedAt):Math.max(0,e-this.startedAt)}resetRound(){for(const e of this.ducks)F.World.remove(this.engine.world,e);this.ducks=[];for(const e of this.colors)for(let t=0;t<this.ducksCountPerColor;t++){const i=this.getRandomPosition(),r=this.instantiate(i,this.duckRadius,e);this.ducks.push(r)}F.World.add(this.engine.world,this.ducks),this.duckTargets.clear(),this.startedAt=performance.now(),this.finishedAt=null}}class yw{constructor(e,t){this.canvas=e,this.engine=F.Engine.create({gravity:{x:0,y:0}}),this.runner=F.Runner.create(),this.render=F.Render.create({canvas:this.canvas,engine:this.engine,options:{width:this.canvas.width,height:this.canvas.height,wireframes:!1,background:"#0b0e13"}}),this.mouse=F.Mouse.create(this.render.canvas),this.engine.render=this.render,this.render.mouse=this.mouse;const i=new dw(t);this.gameBehaviour=new vw(this.engine,i)}engine;render;runner;mouse;gameBehaviour;start(){this.gameBehaviour.onStart(),F.Events.on(this.engine,"beforeUpdate",e=>{this.gameBehaviour.onBeforeUpdate(e)}),F.Render.run(this.render),F.Runner.run(this.runner,this.engine)}stop(){F.Render.stop(this.render),F.Runner.stop(this.runner)}resize(e,t){this.canvas.width=e,this.canvas.height=t,this.render.options.width=e,this.render.options.height=t}onWin(e){this.gameBehaviour.onWin(e)}setHost(e){this.gameBehaviour.setIsHost(e)}getDuckSnapshots(){return this.gameBehaviour.getDuckSnapshots()}setDuckTargets(e){this.gameBehaviour.setDuckTargets(e.snaps),this.gameBehaviour.setDuckBatch(e)}addRemoteWolf(e,t){this.gameBehaviour.upsertWolf(e,!1,t)}removeRemoteWolf(e){this.gameBehaviour.removeWolf(e)}setRemoteWolfTarget(e,t){this.gameBehaviour.setRemoteTarget(e,t)}getMousePosition(){return{x:this.mouse.position.x,y:this.mouse.position.y}}getElapsedMs(){return this.gameBehaviour.getElapsedMs()}resetRound(){this.gameBehaviour.resetRound()}}class ww{constructor(e){this.db=e}userId;_refs;_subscriptions=[];async start(e,t){const i=P=>Bc(this.db,P),r=P=>(...N)=>Bc(this.db,P(...N)),s=`rooms/${e}`,o=`${s}/hostId`,l=`${s}/createdAt`,c=`${s}/state`,u=`${s}/peers`,f=`${u}/${t}`,g=`${s}/cursors`,d=`${g}/${t}`,h=`${s}/signals`,m=`${h}/${t}`,_=(P,N)=>`${h}/${P}/${N}`,w=P=>_(P,t),R=P=>_(t,P);this.userId=t,this._refs={room:i(s),hostId:i(o),createdAt:i(l),state:i(c),peers:i(u),presence:i(f),cursors:i(g),cursor:i(d),signals:i(h),outbox:i(m),getInboxFrom:r(w),getOutboxTo:r(R),getChannel:r(_)},await this.updatePresence();try{await to(this._refs.presence).remove()}catch(P){throw new Error("Failed to setup onDisconnect for presence: "+P.message)}try{await to(this._refs.cursor).remove()}catch(P){throw new Error("Failed to setup onDisconnect for cursor: "+P.message)}try{await to(this._refs.outbox).remove()}catch(P){throw new Error("Failed to setup onDisconnect for outbox: "+P.message)}}async dispose(){this._subscriptions.forEach(e=>e()),this._subscriptions=[];try{await _s(this._refs.presence)}catch{console.error("Failed to remove presence on dispose")}try{await _s(this._refs.cursor)}catch{console.error("Failed to remove cursor on dispose")}try{await _s(this._refs.outbox)}catch{console.error("Failed to remove outbox on dispose")}}async updateStateToActive(){await this.updateState({status:"active"})}async updateStateToFinished(e){await this.updateState({status:"finished",finishedAt:ws(),winnerTimeMs:e})}async updateStateToIdle(){await this.updateState({status:"idle"})}async getHostId(){try{return(await vs(this._refs.hostId)).val()}catch(e){throw new Error("Failed to get host ID from Firebase: "+e.message)}}async getOnlinePeers(){try{const t=(await vs(this._refs.peers)).val()||{};return Object.keys(t)}catch(e){throw new Error("Failed to get online peers from Firebase: "+e.message)}}async updateHostId(e){try{await en(this._refs.hostId,e)}catch(t){throw new Error("Failed to update host ID in Firebase: "+t.message)}}async saveCreatedAt(){try{await en(this._refs.createdAt,ws())}catch(e){throw new Error("Failed to save createdAt in Firebase: "+e.message)}}async updatePresence(){try{await en(this._refs.presence,!0)}catch(e){throw new Error("Failed to update presence in Firebase: "+e.message)}}async updateCursor(e,t){try{const i={x:e,y:t,t:ws()};await en(this._refs.cursor,i)}catch(i){throw new Error("Failed to update cursor in Firebase: "+i.message)}}async sendSignal(e,t,i){try{const r=this._refs.getOutboxTo(e),s=i?pn(r,i):Xy(r);await en(s,{...t,t:ws()})}catch(r){throw new Error("Failed to send signal in Firebase: "+r.message)}}async removeInboxSignals(e,...t){try{if(!t.length)return;const i=this._refs.getInboxFrom(e);await no(i,t.reduce((r,s)=>({...r,[s]:null}),{}))}catch(i){throw new Error("Failed to remove incoming signal in Firebase: "+i.message)}}subscribeCursors(e){const t=ys(this._refs.cursors,i=>{const r=i.val();e(r||{})});return this._subscriptions.push(t),t}subscribePeers(e){const t=ys(this._refs.peers,i=>{const r=i.val()||{},s=Object.keys(r);e(s)});return this._subscriptions.push(t),t}subscribePeerSignals(e,t){const i=Qy(this._refs.getInboxFrom(e),r=>{const s=r.key;if(s===null)return;const o=r.val()||{};t({[s]:o})});return this._subscriptions.push(i),i}subscribeState(e){const t=ys(this._refs.state,i=>{const r=i.val();e(r)});return this._subscriptions.push(t),t}subscribeHostId(e){const t=ys(this._refs.hostId,i=>{const r=i.val();e(r)});return this._subscriptions.push(t),t}async removeChannel(e,t){try{await _s(this._refs.getChannel(e,t))}catch(i){throw new Error(`Failed to remove channel (${e} -> ${t}) in Firebase: `+i.message)}}async pruneChannelsFor(e){await this.pruneChannels((t,i)=>t===this.userId&&i===e||t===e&&i===this.userId)}async pruneChannelsForOffline(e){const t=new Set(e);await this.pruneChannels((i,r)=>!t.has(i)||!t.has(r))}async pruneStaleSignals(e){const t=Date.now();await this.pruneSignals(i=>typeof i.t!="number"?!1:t-i.t>e)}async pruneChannels(e){const t=await vs(this._refs.signals);if(!t.exists())return;const i={},r=t.val();for(const[s,o]of Object.entries(r))for(const l of Object.keys(o))e(s,l)&&(i[`${s}/${l}`]=null);Object.keys(i).length&&await no(this._refs.signals,i)}async pruneSignals(e){const t=await vs(this._refs.signals);if(!t.exists())return;const i={},r=t.val();for(const[s,o]of Object.entries(r))for(const[l,c]of Object.entries(o))for(const[u,f]of Object.entries(c||{}))e(f,u,s,l)&&(i[`${s}/${l}/${u}`]=null);Object.keys(i).length&&await no(this._refs.signals,i)}async updateState(e){try{await en(this._refs.state,e)}catch(t){throw new Error("Failed to update room state in Firebase: "+t.message+" "+JSON.stringify(e))}}}class Iw{constructor(e,t,i=5e3){this.channel=e,this.handler=t,this.graceMs=i,this.pc=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]}),this.dc=this.pc.createDataChannel("game",{negotiated:!0,id:0,ordered:!1,maxRetransmits:0}),this.dc.onmessage=r=>{const s=typeof r.data=="string"?JSON.parse(r.data):r.data;this.handler?.onMessage(s)},this.dc.onopen=()=>{this._isReady=!0,this.handler?.onOpen?.()},this.dc.onerror=r=>{console.error("Data channel error:",r)}}pc;dc;pendingRemoteCandidates=[];unsubscribeSignal;_closeTimer;_isReady=!1;get isReady(){return this._isReady}withHandler(e){return this.handler=e,this}async open(e){this.unsubscribeSignal=this.channel.subscribe(async s=>{await this.receiveMessage(s)}),this.pc.onicecandidate=async s=>{if(!s.candidate)return;const o=s.candidate.toJSON();await this.channel.send(o)};const t=()=>this.scheduleClose(()=>this.pc.connectionState==="connected"||this.pc.iceConnectionState==="connected"),i=()=>this.cancelScheduledClose(),r=s=>{console.debug("Peer connection",s,"for peer",this.channel.id),s==="disconnected"||s==="failed"?t():(s==="connected"||s==="completed")&&i()};if(this.pc.onconnectionstatechange=()=>r(this.pc.connectionState),this.pc.oniceconnectionstatechange=()=>r(this.pc.iceConnectionState),e){console.debug("Creating offer for peer",this.channel.id);const s=await this.pc.createOffer();await this.pc.setLocalDescription(s),console.debug("Sending offer to peer",this.channel.id),await this.channel.send(s),console.debug("Offer sent to peer",this.channel.id)}}close(){console.debug("Closing peer connection for peer",this.channel.id),this.cancelScheduledClose();try{this.unsubscribeSignal?.()}catch(e){console.error("Failed to unsubscribe from signal channel for peer",this.channel.id,e)}this.pendingRemoteCandidates=[];try{this.dc.close()}catch(e){console.error("Failed to close data channel for peer",this.channel.id,e)}try{this.pc.getSenders().forEach(e=>{try{e.track?.stop()}catch(t){console.error("Failed to stop sender track for peer",this.channel.id,t)}}),this.pc.getReceivers().forEach(e=>{try{e.track.stop()}catch(t){console.error("Failed to stop receiver track for peer",this.channel.id,t)}})}catch(e){console.error("Failed to stop tracks for peer",this.channel.id,e)}try{this.pc.close()}catch(e){console.error("Failed to close peer connection for peer",this.channel.id,e)}this.handler?.onClosed?.()}scheduleClose(e){this._closeTimer||(console.debug("Scheduling peer connection close in",this.graceMs,"ms for peer",this.channel.id),this._closeTimer=window.setTimeout(()=>{this._closeTimer=void 0,!(e&&e())&&(console.debug("Closing peer connection after grace period for peer",this.channel.id),this.close())},this.graceMs))}cancelScheduledClose(){this._closeTimer&&(window.clearTimeout(this._closeTimer),this._closeTimer=void 0)}send(e){if(this.dc.readyState!=="open")throw new Error("Data channel is not open");if(this.dc.bufferedAmount>1e6)throw console.warn("Data channel buffered amount is too high, dropping message"),new Error("Data channel buffered amount is too high");this.dc.send(typeof e=="string"?e:JSON.stringify(e))}trySend(e){try{return this.send(e),!0}catch(t){return console.error("Failed to send data channel for peer",this.channel.id,t),!1}}async receiveMessage(e){switch(!0){case("type"in e&&e.type==="offer"):await this.receiveOffer(e);break;case("type"in e&&e.type==="answer"):await this.receiveAnswer(e);break;case"candidate"in e:await this.receiveIceCandidate(e);break;default:console.warn("Unknown peer message type:",e)}}async receiveOffer(e){try{switch(this.pc.signalingState){case"have-local-offer":case"stable":{this.pc.signalingState==="have-local-offer"&&(console.debug("Rolling back local offer before setting new remote offer"),await this.pc.setLocalDescription({type:"rollback"})),console.debug("Received offer, setting remote description and creating answer"),await this.pc.setRemoteDescription(new RTCSessionDescription(e)),console.debug("Remote description set, flushing pending ICE candidates"),await this.flushPendingCandidates(),console.debug("Creating and sending answer");const t=await this.pc.createAnswer();await this.pc.setLocalDescription(t),await this.channel.send(t),console.debug("Answer sent");break}default:console.warn("Unexpected signaling state on offer reception:",this.pc.signalingState)}}catch(t){console.error("Error handling received offer:",t)}}async receiveAnswer(e){try{switch(this.pc.signalingState){case"have-local-offer":console.debug("Received answer, setting remote description"),await this.pc.setRemoteDescription(new RTCSessionDescription(e)),console.debug("Remote description set, flushing pending ICE candidates"),await this.flushPendingCandidates(),console.debug("Answer processed");break;default:console.warn("Unexpected signaling state on answer reception:",this.pc.signalingState)}}catch(t){console.error("Error handling received answer:",t)}}async receiveIceCandidate(e){try{if(!this.pc.remoteDescription){console.debug("Remote description not set yet, queuing ICE candidate"),this.pendingRemoteCandidates.push(e);return}console.debug("Adding received ICE candidate"),await this.pc.addIceCandidate(new RTCIceCandidate(e)),console.debug("ICE candidate added")}catch(t){console.error("Error adding received ICE candidate:",t)}}async flushPendingCandidates(){if(!this.pendingRemoteCandidates.length)return;const e=this.pendingRemoteCandidates.splice(0);console.debug("Flushing",e.length,"pending ICE candidates");for(const t of e)try{await this.pc.addIceCandidate(new RTCIceCandidate(t))}catch(i){console.error("Error adding pending ICE candidate:",i)}console.debug("Finished flushing pending ICE candidates")}}class Sw{constructor(e,t,i=3e4){this.session=e,this.peerId=t,this.staleMs=i}get id(){return this.peerId}async send(e){return this.session.sendSignal(this.peerId,e)}subscribe(e){return this.session.subscribePeerSignals(this.peerId,async t=>{await this.consumeBatch(t,e)})}async consumeBatch(e,t){const i=Date.now();for(const[r,s]of Object.entries(e)){if(typeof s.t=="number"&&i-s.t>this.staleMs){try{await this.session.removeInboxSignals(this.peerId,r)}catch(o){console.error("Failed to clean up stale signaling message for peer",this.peerId,o)}continue}try{console.debug("Handling signaling message for peer",{peerId:this.peerId,signalId:r,msg:s}),await t(s);try{await this.session.removeInboxSignals(this.peerId,r)}catch(o){console.error("Failed to clean up handled signaling message for peer",this.peerId,o)}}catch(o){console.error("Failed to handle signaling message for peer",this.peerId,o)}}}}class Cw{constructor(e,t,i,r,s=Math.floor(1e3/Qe.sendHz),o=50,l=5e3,c=3e4){this.rtdb=e,this.auth=t,this.roomId=i,this.remoteHandler=r,this.throttleDucksMs=s,this.throttleCursorMs=o,this.cleanupIntervalMs=l,this.staleSignalMs=c}peers=new Map;_userId=null;_session=null;hostId=null;lastCursorAt=0;lastDucksAt=0;lastSignalsCleanupAt=0;get userId(){return this._userId}get isHost(){return this.hostId===this.userId}async init(){if(await this.authorize(),!this._userId)throw new Error("Failed to authenticate");this._session=new ww(this.rtdb),await this._session.start(this.roomId,this._userId),await this.electNewHostIfNeeded(await this._session.getOnlinePeers(),await this._session.getHostId(),!0),this._session.subscribeCursors(e=>{for(const[t,i]of Object.entries(e))if(t!==this._userId){if(!this.peers.has(t)){console.warn("Ignoring cursor update from unknown peer",t);continue}this.remoteHandler.onUpdateRemoteCursor(t,i)}}),this._session.subscribeState(e=>this.remoteHandler.onRoomStateChange?.(e)),this._session.subscribeHostId(e=>{e!==this.hostId&&(this.hostId=e,this.remoteHandler.onHostChange?.(e,this.isHost))}),this._session.subscribePeers(e=>{console.debug("Detected peers update: ",e),e.length||console.warn("No peers online in the room. This should not happen as we are online ourselves."),this.electNewHostIfNeeded(e,this.hostId),e.forEach(t=>{t!==this._userId&&(this.peers.has(t)||(console.debug("Detected new peer: ",t),this.connectToPeer(t),this.remoteHandler.onPlayerJoin?.(t)))}),this.peers.forEach((t,i)=>{e.includes(i)||(console.debug("Detected peer leave: ",i),this.closePeer(i),this.remoteHandler.onPlayerLeave?.(i))}),this.cleanupPeers(e)}),setInterval(()=>{this.isHost&&this.publishDucks()},this.throttleDucksMs),setInterval(async()=>{if(!this._session)return;const e=await this._session.getOnlinePeers();await this.cleanupPeers(e)},this.cleanupIntervalMs),setInterval(async()=>{this._session&&await this._session.pruneStaleSignals(this.staleSignalMs)},this.staleSignalMs)}async authorize(){await Zp(this.auth),this._userId=await new Promise((e,t)=>{const i=rg(this.auth,r=>{r&&(e(r.uid),i())},r=>{t(r),i()})}),console.debug("Signed in as",this._userId)}async publishCursor(e){if(!this._userId)return;const t=performance.now(),i=this.throttleCursorMs;if(!(t-this.lastCursorAt<i)){this.lastCursorAt=t;try{await this._session?.updateCursor(e.x,e.y)}catch(r){console.error("Failed to publish cursor position",r)}}}async publishDucks(){if(!this._userId||!this.isHost||!this.remoteHandler.getDucks)return;const e=performance.now(),t=this.throttleDucksMs;if(e-this.lastDucksAt<t)return;this.lastDucksAt=e;const i=this.remoteHandler.getDucks(),r=performance.now(),s=JSON.stringify({type:"ducks",tHost:r,snaps:i});this.peers.forEach(o=>{o.isReady&&o.trySend(s)})}async cleanup(){try{await this._session?.dispose()}catch(e){console.error("Failed to clean up player presence",e)}}async setRoomActive(){!this.isHost||!this._session||await this._session.updateStateToActive()}async setRoomFinished(e){!this.isHost||!this._session||await this._session.updateStateToFinished(e)}async resetRoomToIdle(){!this.isHost||!this._session||await this._session.updateStateToIdle()}async electNewHostIfNeeded(e,t,i=!1){if(!this._userId||!this._session||t&&e.includes(t))return;const r=e.length?[...e].sort()[0]:this._userId;if(r===this._userId&&(console.debug("Becoming the new host for the room"),await this._session.updateHostId(this._userId),console.debug("Updated room hostId to self:",this._userId),!t))try{await this._session.saveCreatedAt()}catch(s){console.error("Failed to set createdAt for new room. Maybe simultaneous creation?",s)}this.hostId=r,!i&&this.remoteHandler.onHostChange?.(this.hostId,this.isHost)}async connectToPeer(e){if(!this._userId||!this._session)return;const t=new Iw(new Sw(this._session,e,this.staleSignalMs),{onOpen:async()=>{console.debug("Peer connection opened with",e),this.isHost&&this._session?.pruneChannelsFor(e)},onMessage:async r=>this.onMessage(e,r),onClosed:async()=>this.peers.delete(e)}),i=this._userId===this.hostId;console.debug("Connecting to Peer ",{peerId:e,isInitiator:i,hostId:this.hostId}),await t.open(i),this.peers.set(e,t)}async closePeer(e){const t=this.peers.get(e);try{t?.close()}catch(i){console.error("Failed to close peer connection for peer",e,i)}this.peers.delete(e)}onMessage(e,t){try{const i=typeof t=="string"?JSON.parse(t):t;if(i.type==="ducks"&&this.remoteHandler.receiveDucks)typeof i.tHost=="number"?this.remoteHandler.receiveDucks({tHost:i.tHost,snaps:i.snaps}):this.remoteHandler.receiveDucks({tHost:performance.now(),snaps:i.snaps});else if(i.type==="cursor"){const{x:r,y:s}=i;this.remoteHandler.onUpdateRemoteCursor(e,{x:r,y:s})}}catch{console.warn("Failed to parse RTC data channel message",t)}}async cleanupPeers(e){if(!this._session||!this.isHost)return;const t=performance.now();if(!(!this.lastSignalsCleanupAt&&t-this.lastSignalsCleanupAt<=this.cleanupIntervalMs))try{await this._session.pruneChannelsForOffline(e),this.lastSignalsCleanupAt=t}catch(i){console.error("Failed to cleanup peers signaling",i)}}}const Is=(...n)=>(e,...t)=>{console.error(...n.map(i=>typeof i=="string"?i:i(...t)),e)},io=(n,e)=>(...t)=>{try{return n(...t)}catch(i){e(i,...t)}},Ew=(n,e,t)=>((...i)=>{try{return n(...i)}catch(r){return e(r,...i),t}}),Tw=async()=>{const n=document.getElementById("app");if(!n){console.error("App element not found");return}const e=document.getElementById("game"),t=document.getElementById("hud-room"),i=document.getElementById("hud-players"),r=document.getElementById("hud-timer"),s=document.getElementById("win-overlay"),o=document.getElementById("win-time"),l=document.getElementById("btn-new-room"),c=document.getElementById("btn-retry");if(!e){console.error("Canvas element not found");return}const u=()=>{const P="room",N=new URL(window.location.href);let D=N.searchParams.get(P)||"",T=!1;return D||(D=`duck-${Math.random().toString(36).slice(2,8)}`,N.searchParams.set(P,D),T=!0),T&&window.history.replaceState({},"",N.toString()),D},f=()=>Hc.isDev,{rtdb:g,auth:d}=cw(Hc.firebase,f()),h=u();t&&(t.textContent=h);const m=new yw(e,h);window.addEventListener("resize",()=>m.resize(n.clientWidth,n.clientHeight)),m.resize(n.clientWidth,n.clientHeight);const _=new Cw(g,d,u(),{onUpdateRemoteCursor:io((P,N)=>{m.addRemoteWolf(P),m.setRemoteWolfTarget(P,N)},Is("Failed to update remote cursor",(P,N)=>({playerId:P,pos:N}))),onPlayerLeave:io(P=>{m.removeRemoteWolf(P);const N=(document.querySelectorAll("canvas").length,1);i&&(i.textContent=String(N))},Is("Failed to remove remote player",P=>({playerId:P}))),getDucks:Ew(()=>m.getDuckSnapshots(),Is("Failed to get duck snapshots"),[]),receiveDucks:io(P=>m.setDuckTargets(P),Is("Failed to receive duck snapshots",P=>({snaps:P}))),onHostChange:(P,N)=>m.setHost(N),onRoomStateChange:P=>{P?.status==="finished"&&(s&&(s.style.display="flex"),o&&typeof P.winnerTimeMs=="number"&&(o.textContent=R(P.winnerTimeMs)))}});try{await _.init()}catch(P){console.error("Failed to initialize multiplayer",P),alert("Failed to initialize multiplayer");return}if(m.setHost(_.isHost),console.debug("Is host:",_.isHost),_.isHost)try{await _.setRoomActive(),console.debug("Room set to active by host")}catch(P){console.error("Failed to set room active",P)}const w=()=>_.publishCursor(m.getMousePosition());window.addEventListener("mousemove",w),window.addEventListener("touchmove",w,{passive:!0}),window.addEventListener("beforeunload",()=>_.cleanup()),m.onWin(async P=>{if(_.isHost)try{await _.setRoomFinished(P)}catch(N){console.error("Failed to set room finished",N)}s&&(s.style.display="flex"),o&&(o.textContent=R(P))}),window.setInterval(()=>{r&&(r.textContent=R(m.getElapsedMs()))},50),l?.addEventListener("click",async()=>{const P=new URL(window.location.href),N=`duck-${Math.random().toString(36).slice(2,8)}`;P.searchParams.set("room",N),window.location.href=P.toString()}),c?.addEventListener("click",async()=>{if(_.isHost){try{await _.resetRoomToIdle()}catch(P){console.error("Failed to reset room to idle",P)}m.resetRound();try{await _.setRoomActive()}catch(P){console.error("Failed to set room active",P)}}s&&(s.style.display="none")}),m.start();function R(P){const N=Math.max(0,Math.floor(P)),D=Math.floor(N/6e4),T=Math.floor(N%6e4/1e3),k=Math.floor(N%1e3/10),I=String(D).padStart(2,"0"),v=String(T).padStart(2,"0"),S=String(k).padStart(2,"0");return`${I}:${v}.${S}`}};Tw().catch(n=>{console.error("Failed to bootstrap the game",n)});
