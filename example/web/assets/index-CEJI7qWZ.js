(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Ud=()=>{};var pl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(n,e){if(!n)throw zn(e)},zn=function(n){return new Error("Firebase Database ("+Gc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Vd=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=n[t++],o=n[t++],l=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ao={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){const s=n[r],o=r+1<n.length,l=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,h=u&63;c||(h=64,o||(f=64)),i.push(t[d],t[p],t[f],t[h])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($c(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){const s=t[n.charAt(r++)],l=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||l==null||u==null||p==null)throw new Bd;const f=s<<2|l>>4;if(i.push(f),u!==64){const h=l<<4&240|u>>2;if(i.push(h),p!==64){const m=u<<6&192|p;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zc=function(n){const e=$c(n);return Ao.encodeByteArray(e,!0)},Rs=function(n){return zc(n).replace(/\./g,"")},ks=function(n){try{return Ao.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){return Kc(void 0,n)}function Kc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Wd(t)||(n[t]=Kc(n[t],e[t]));return n}function Wd(n){return n!=="__proto__"}/**
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
 */function jd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gd=()=>jd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof pl>"u")return;const n=pl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ks(n[1]);return e&&JSON.parse(e)},Po=()=>{try{return Ud()||Gd()||$d()||zd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qc=n=>Po()?.emulatorHosts?.[n],Yc=n=>{const e=qc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Jc=()=>Po()?.config,Xc=n=>Po()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Qc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Rs(JSON.stringify(t)),Rs(JSON.stringify(o)),""].join(".")}const Si={};function Kd(){const n={prod:[],emulator:[]};for(const e of Object.keys(Si))Si[e]?n.emulator.push(e):n.prod.push(e);return n}function qd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let gl=!1;function Ro(n,e){if(typeof window>"u"||typeof document>"u"||!gn(window.location.host)||Si[n]===e||Si[n]||gl)return;Si[n]=e;function t(f){return`__firebase__banner__${f}`}const i="__firebase__banner",s=Kd().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function c(f,h){f.setAttribute("width","24"),f.setAttribute("id",h),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{gl=!0,o()},f}function d(f,h){f.setAttribute("id",h),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=qd(i),h=t("text"),m=document.getElementById(h)||document.createElement("span"),_=t("learnmore"),w=document.getElementById(_)||document.createElement("a"),R=t("preprendIcon"),k=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const N=f.element;l(N),d(w,_);const D=u();c(k,R),N.append(k,m,w,D),document.body.appendChild(N)}s?(m.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",h)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ko(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Yd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xd(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Qd(){return Gc.NODE_ADMIN===!0}function Zd(){try{return typeof indexedDB=="object"}catch{return!1}}function ef(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="FirebaseError";class vt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=tf,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ji.prototype.create)}}class ji{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?nf(s,i):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new vt(r,l,i)}}function nf(n,e){return n.replace(sf,(t,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const sf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){return JSON.parse(n)}function ye(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=function(n){let e={},t={},i={},r="";try{const s=n.split(".");e=Ni(ks(s[0])||""),t=Ni(ks(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}},rf=function(n){const e=eh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},of=function(n){const e=eh(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Fn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ns(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ds(n,e,t){const i={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function Vt(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const r of t){if(!i.includes(r))return!1;const s=n[r],o=e[r];if(ml(s)&&ml(o)){if(!Vt(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!t.includes(r))return!1;return!0}function ml(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)i[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)i[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const f=i[p-3]^i[p-8]^i[p-14]^i[p-16];i[p]=(f<<1|f>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],u,d;for(let p=0;p<80;p++){p<40?p<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):p<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(r<<5|r>>>27)+u+c+d+i[p]&4294967295;c=l,l=o,o=(s<<30|s>>>2)&4294967295,s=r,r=f}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function lf(n,e){const t=new cf(n,e);return t.subscribe.bind(t)}class cf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");hf(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=Br),r.error===void 0&&(r.error=Br),r.complete===void 0&&(r.complete=Br);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Br(){}function Un(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,V(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},nr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Fe(n){return n&&n._delegate?n._delegate:n}class Bt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class df{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new nt;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(pf(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);i===l&&o.resolve(r)}return r}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(i)??new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ff(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ff(n){return n===Qt?void 0:n}function pf(n){return n.instantiationMode==="EAGER"}/**
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
 */class gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new df(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ne||(ne={}));const mf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},_f=ne.INFO,vf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},yf=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),r=vf[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ir{constructor(e){this.name=e,this._logLevel=_f,this._logHandler=yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const wf=(n,e)=>e.some(t=>n instanceof t);let _l,vl;function If(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sf(){return vl||(vl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const th=new WeakMap,so=new WeakMap,nh=new WeakMap,Hr=new WeakMap,No=new WeakMap;function Ef(n){const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Mt(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&th.set(t,n)}).catch(()=>{}),No.set(e,n),e}function Cf(n){if(so.has(n))return;const e=new Promise((t,i)=>{const r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});so.set(n,e)}let ro={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return so.get(n);if(e==="objectStoreNames")return n.objectStoreNames||nh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tf(n){ro=n(ro)}function xf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Wr(this),e,...t);return nh.set(i,e.sort?e.sort():[e]),Mt(i)}:Sf().includes(n)?function(...e){return n.apply(Wr(this),e),Mt(th.get(this))}:function(...e){return Mt(n.apply(Wr(this),e))}}function Af(n){return typeof n=="function"?xf(n):(n instanceof IDBTransaction&&Cf(n),wf(n,If())?new Proxy(n,ro):n)}function Mt(n){if(n instanceof IDBRequest)return Ef(n);if(Hr.has(n))return Hr.get(n);const e=Af(n);return e!==n&&(Hr.set(n,e),No.set(e,n)),e}const Wr=n=>No.get(n);function Pf(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(n,e),l=Mt(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Mt(o.result),c.oldVersion,c.newVersion,Mt(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const bf=["get","getKey","getAll","getAllKeys","count"],Rf=["put","add","delete","clear"],jr=new Map;function yl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jr.get(e))return jr.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,r=Rf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||bf.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[t](...l),r&&c.done]))[0]};return jr.set(e,s),s}Tf(n=>({...n,get:(e,t,i)=>yl(e,t)||n.get(e,t,i),has:(e,t)=>!!yl(e,t)||n.has(e,t)}));/**
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
 */class kf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Nf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Nf(n){return n.getComponent()?.type==="VERSION"}const oo="@firebase/app",wl="0.14.4";/**
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
 */const pt=new ir("@firebase/app"),Df="@firebase/app-compat",Mf="@firebase/analytics-compat",Of="@firebase/analytics",Lf="@firebase/app-check-compat",Ff="@firebase/app-check",Uf="@firebase/auth",Vf="@firebase/auth-compat",Bf="@firebase/database",Hf="@firebase/data-connect",Wf="@firebase/database-compat",jf="@firebase/functions",Gf="@firebase/functions-compat",$f="@firebase/installations",zf="@firebase/installations-compat",Kf="@firebase/messaging",qf="@firebase/messaging-compat",Yf="@firebase/performance",Jf="@firebase/performance-compat",Xf="@firebase/remote-config",Qf="@firebase/remote-config-compat",Zf="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/ai",ip="@firebase/firestore-compat",sp="firebase",rp="12.4.0";/**
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
 */const ao="[DEFAULT]",op={[oo]:"fire-core",[Df]:"fire-core-compat",[Of]:"fire-analytics",[Mf]:"fire-analytics-compat",[Ff]:"fire-app-check",[Lf]:"fire-app-check-compat",[Uf]:"fire-auth",[Vf]:"fire-auth-compat",[Bf]:"fire-rtdb",[Hf]:"fire-data-connect",[Wf]:"fire-rtdb-compat",[jf]:"fire-fn",[Gf]:"fire-fn-compat",[$f]:"fire-iid",[zf]:"fire-iid-compat",[Kf]:"fire-fcm",[qf]:"fire-fcm-compat",[Yf]:"fire-perf",[Jf]:"fire-perf-compat",[Xf]:"fire-rc",[Qf]:"fire-rc-compat",[Zf]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[ip]:"fire-fst-compat",[np]:"fire-vertex","fire-js":"fire-js",[sp]:"fire-js-all"};/**
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
 */const Ms=new Map,ap=new Map,lo=new Map;function Il(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ln(n){const e=n.name;if(lo.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;lo.set(e,n);for(const t of Ms.values())Il(t,n);for(const t of ap.values())Il(t,n);return!0}function sr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
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
 */const lp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new ji("app","Firebase",lp);/**
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
 */class cp{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Bt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const mn=rp;function ih(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ao,automaticDataCollectionEnabled:!0,...e},r=i.name;if(typeof r!="string"||!r)throw Ot.create("bad-app-name",{appName:String(r)});if(t||(t=Jc()),!t)throw Ot.create("no-options");const s=Ms.get(r);if(s){if(Vt(t,s.options)&&Vt(i,s.config))return s;throw Ot.create("duplicate-app",{appName:r})}const o=new gf(r);for(const c of lo.values())o.addComponent(c);const l=new cp(t,i,o);return Ms.set(r,l),l}function Do(n=ao){const e=Ms.get(n);if(!e&&n===ao&&Jc())return ih();if(!e)throw Ot.create("no-app",{appName:n});return e}function st(n,e,t){let i=op[n]??n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(o.join(" "));return}ln(new Bt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hp="firebase-heartbeat-database",up=1,Di="firebase-heartbeat-store";let Gr=null;function sh(){return Gr||(Gr=Pf(hp,up,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Di)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ot.create("idb-open",{originalErrorMessage:n.message})})),Gr}async function dp(n){try{const t=(await sh()).transaction(Di),i=await t.objectStore(Di).get(rh(n));return await t.done,i}catch(e){if(e instanceof vt)pt.warn(e.message);else{const t=Ot.create("idb-get",{originalErrorMessage:e?.message});pt.warn(t.message)}}}async function Sl(n,e){try{const i=(await sh()).transaction(Di,"readwrite");await i.objectStore(Di).put(e,rh(n)),await i.done}catch(t){if(t instanceof vt)pt.warn(t.message);else{const i=Ot.create("idb-set",{originalErrorMessage:t?.message});pt.warn(i.message)}}}function rh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fp=1024,pp=30;class gp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _p(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=El();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats.length>pp){const r=vp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){pt.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=El(),{heartbeatsToSend:t,unsentEntries:i}=mp(this._heartbeatsCache.heartbeats),r=Rs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return pt.warn(e),""}}}function El(){return new Date().toISOString().substring(0,10)}function mp(n,e=fp){const t=[];let i=n.slice();for(const r of n){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Cl(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Cl(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class _p{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zd()?ef().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Sl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Sl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cl(n){return Rs(JSON.stringify({version:2,heartbeats:n})).length}function vp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function yp(n){ln(new Bt("platform-logger",e=>new kf(e),"PRIVATE")),ln(new Bt("heartbeat",e=>new gp(e),"PRIVATE")),st(oo,wl,n),st(oo,wl,"esm2020"),st("fire-js","")}yp("");var wp="firebase",Ip="12.4.0";/**
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
 */st(wp,Ip,"app");function oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sp=oh,ah=new ji("auth","Firebase",oh());/**
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
 */const Os=new ir("@firebase/auth");function Ep(n,...e){Os.logLevel<=ne.WARN&&Os.warn(`Auth (${mn}): ${n}`,...e)}function Es(n,...e){Os.logLevel<=ne.ERROR&&Os.error(`Auth (${mn}): ${n}`,...e)}/**
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
 */function gt(n,...e){throw Mo(n,...e)}function rt(n,...e){return Mo(n,...e)}function lh(n,e,t){const i={...Sp(),[e]:t};return new ji("auth","Firebase",i).create(e,{appName:n.name})}function Lt(n){return lh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mo(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ah.create(n,...e)}function G(n,e,...t){if(!n)throw Mo(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Es(e),new Error(e)}function mt(n,e){n||ht(e)}/**
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
 */function co(){return typeof self<"u"&&self.location?.href||""}function Cp(){return Tl()==="http:"||Tl()==="https:"}function Tl(){return typeof self<"u"&&self.location?.protocol||null}/**
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
 */function Tp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Cp()||Jd()||"connection"in navigator)?navigator.onLine:!0}function xp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gi{constructor(e,t){this.shortDelay=e,this.longDelay=t,mt(t>e,"Short delay should be less than long delay!"),this.isMobile=ko()||Zc()}get(){return Tp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oo(n,e){mt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class ch{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ap={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Pp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bp=new Gi(3e4,6e4);function rr(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qn(n,e,t,i,r={}){return hh(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const l=Kn({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const u={method:e,headers:c,...s};return Yd()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&gn(n.emulatorConfig.host)&&(u.credentials="include"),ch.fetch()(await dh(n,n.config.apiHost,t,l),u)})}async function hh(n,e,t){n._canInitEmulator=!1;const i={...Ap,...e};try{const r=new Rp(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fs(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fs(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw fs(n,"user-disabled",o);const d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw lh(n,d,u);gt(n,d)}}catch(r){if(r instanceof vt)throw r;gt(n,"network-request-failed",{message:String(r)})}}async function uh(n,e,t,i,r={}){const s=await qn(n,e,t,i,r);return"mfaPendingCredential"in s&&gt(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function dh(n,e,t,i){const r=`${e}${t}?${i}`,s=n,o=s.config.emulator?Oo(n.config,r):`${n.config.apiScheme}://${r}`;return Pp.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Rp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rt(this.auth,"network-request-failed")),bp.get())})}}function fs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const r=rt(n,e,i);return r.customData._tokenResponse=t,r}/**
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
 */async function kp(n,e){return qn(n,"POST","/v1/accounts:delete",e)}async function Ls(n,e){return qn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ei(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Np(n,e=!1){const t=Fe(n),i=await t.getIdToken(e),r=Lo(i);G(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:Ei($r(r.auth_time)),issuedAtTime:Ei($r(r.iat)),expirationTime:Ei($r(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function $r(n){return Number(n)*1e3}function Lo(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Es("JWT malformed, contained fewer than 3 sections"),null;try{const r=ks(t);return r?JSON.parse(r):(Es("Failed to decode base64 JWT payload"),null)}catch(r){return Es("Caught error parsing JWT payload as JSON",r?.toString()),null}}function xl(n){const e=Lo(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof vt&&Dp(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Dp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Mp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ho{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fs(n){const e=n.auth,t=await n.getIdToken(),i=await Mi(n,Ls(e,{idToken:t}));G(i?.users.length,e,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const s=r.providerUserInfo?.length?fh(r.providerUserInfo):[],o=Lp(n.providerData,s),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!o?.length,u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ho(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Op(n){const e=Fe(n);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lp(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function fh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function Fp(n,e){const t=await hh(n,{},async()=>{const i=Kn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=await dh(n,r,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:i};return n.emulatorConfig&&gn(n.emulatorConfig.host)&&(c.credentials="include"),ch.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Up(n,e){return qn(n,"POST","/v2/accounts:revokeToken",rr(n,e))}/**
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
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=xl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:r,expiresIn:s}=await Fp(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new kn;return i&&(G(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function Pt(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor({uid:e,auth:t,stsTokenManager:i,...r}){this.providerId="firebase",this.proactiveRefresh=new Mp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ho(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Mi(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Np(this,e)}reload(){return Op(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await Mi(this,kp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,u=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:h,providerData:m,stsTokenManager:_}=t;G(p&&_,e,"internal-error");const w=kn.fromJSON(this.name,_);G(typeof p=="string",e,"internal-error"),Pt(i,e.name),Pt(r,e.name),G(typeof f=="boolean",e,"internal-error"),G(typeof h=="boolean",e,"internal-error"),Pt(s,e.name),Pt(o,e.name),Pt(l,e.name),Pt(c,e.name),Pt(u,e.name),Pt(d,e.name);const R=new qe({uid:p,auth:e,email:r,emailVerified:f,displayName:i,isAnonymous:h,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:w,createdAt:u,lastLoginAt:d});return m&&Array.isArray(m)&&(R.providerData=m.map(k=>({...k}))),c&&(R._redirectEventId=c),R}static async _fromIdTokenResponse(e,t,i=!1){const r=new kn;r.updateFromServerResponse(t);const s=new qe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Fs(s),s}static async _fromGetAccountInfoResponse(e,t,i){const r=t.users[0];G(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?fh(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!s?.length,l=new kn;l.updateFromIdToken(i);const c=new qe({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ho(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(c,u),c}}/**
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
 */const Al=new Map;function ut(n){mt(n instanceof Function,"Expected a class definition");let e=Al.get(n);return e?(mt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Al.set(n,e),e)}/**
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
 */function Cs(n,e,t){return`firebase:${n}:${e}:${t}`}class Nn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,s),this.fullPersistenceKey=Cs("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ls(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Nn(ut(Pl),e,i);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||ut(Pl);const o=Cs(i,e.config.apiKey,e.name);let l=null;for(const u of t)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const f=await Ls(e,{idToken:d}).catch(()=>{});if(!f)break;p=await qe._fromGetAccountInfoResponse(e,f,d)}else p=qe._fromJSON(e,d);u!==s&&(l=p),s=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Nn(s,e,i):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Nn(s,e,i))}}/**
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
 */function bl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wh(e))return"Blackberry";if(Ih(e))return"Webos";if(mh(e))return"Safari";if((e.includes("chrome/")||_h(e))&&!e.includes("edge/"))return"Chrome";if(yh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function gh(n=Le()){return/firefox\//i.test(n)}function mh(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _h(n=Le()){return/crios\//i.test(n)}function vh(n=Le()){return/iemobile/i.test(n)}function yh(n=Le()){return/android/i.test(n)}function wh(n=Le()){return/blackberry/i.test(n)}function Ih(n=Le()){return/webos/i.test(n)}function Fo(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vp(n=Le()){return Fo(n)&&!!window.navigator?.standalone}function Bp(){return Xd()&&document.documentMode===10}function Sh(n=Le()){return Fo(n)||yh(n)||Ih(n)||wh(n)||/windows phone/i.test(n)||vh(n)}/**
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
 */function Eh(n,e=[]){let t;switch(n){case"Browser":t=bl(Le());break;case"Worker":t=`${bl(Le())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${i}`}/**
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
 */class Hp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function Wp(n,e={}){return qn(n,"GET","/v2/passwordPolicy",rr(n,e))}/**
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
 */const jp=6;class Gp{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??jp,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class $p{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rl(this),this.idTokenSubscription=new Rl(this),this.beforeStateQueue=new Hp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ah,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ut(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Nn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ls(this,{idToken:e}),i=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(je(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=i?._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===o)&&l?.user&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(Lt(this));const t=e?Fe(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wp(this),t=new Gp(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ji("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Up(this,i)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ut(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await Nn.create(this,[ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ep(`Error while retrieving App Check token: ${e.error}`),e?.token}}function or(n){return Fe(n)}class Rl{constructor(e){this.auth=e,this.observer=null,this.addObserver=lf(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zp(n){Uo=n}function Kp(n){return Uo.loadJS(n)}function qp(){return Uo.gapiScript}function Yp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Jp(n,e){const t=sr(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if(Vt(s,e??{}))return r;gt(r,"already-initialized")}return t.initialize({options:e})}function Xp(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(ut);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function Ch(n,e,t){const i=or(n);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!1,s=Th(e),{host:o,port:l}=Qp(e),c=l===null?"":`:${l}`,u={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Vt(u,i.config.emulator)&&Vt(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,gn(o)?(bo(`${s}//${o}${c}`),Ro("Auth",!0)):Zp()}function Th(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qp(n){const e=Th(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:kl(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:kl(o)}}}function kl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zp(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class xh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}/**
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
 */async function Dn(n,e){return uh(n,"POST","/v1/accounts:signInWithIdp",rr(n,e))}/**
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
 */const eg="http://localhost";class cn extends xh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,...s}=t;if(!i||!r)return null;const o=new cn(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Dn(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Dn(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dn(e,t)}buildRequest(){const e={requestUri:eg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Kn(t)}return e}}/**
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
 */async function tg(n,e){return uh(n,"POST","/v1/accounts:signUp",rr(n,e))}/**
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
 */class Ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){const s=await qe._fromIdTokenResponse(e,i,r),o=Nl(i);return new Ht({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const r=Nl(i);return new Ht({user:e,providerId:r,_tokenResponse:i,operationType:t})}}function Nl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function ng(n){if(je(n.app))return Promise.reject(Lt(n));const e=or(n);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new Ht({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await tg(e,{returnSecureToken:!0}),i=await Ht._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(i.user),i}/**
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
 */class Us extends vt{constructor(e,t,i,r){super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Us.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new Us(e,t,i,r)}}function Ph(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Us._fromErrorAndOperation(n,s,e,i):s})}async function ig(n,e,t=!1){const i=await Mi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ht._forOperation(n,"link",i)}/**
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
 */async function sg(n,e,t=!1){const{auth:i}=n;if(je(i.app))return Promise.reject(Lt(i));const r="reauthenticate";try{const s=await Mi(n,Ph(i,r,e,n),t);G(s.idToken,i,"internal-error");const o=Lo(s.idToken);G(o,i,"internal-error");const{sub:l}=o;return G(n.uid===l,i,"user-mismatch"),Ht._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&gt(i,"user-mismatch"),s}}/**
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
 */async function rg(n,e,t=!1){if(je(n.app))return Promise.reject(Lt(n));const i="signIn",r=await Ph(n,i,e),s=await Ht._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function og(n,e,t,i){return Fe(n).onIdTokenChanged(e,t,i)}function ag(n,e,t){return Fe(n).beforeAuthStateChanged(e,t)}function lg(n,e,t,i){return Fe(n).onAuthStateChanged(e,t,i)}const Vs="__sak";/**
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
 */class bh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vs,"1"),this.storage.removeItem(Vs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cg=1e3,hg=10;class Rh extends bh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Bp()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,hg):r()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rh.type="LOCAL";const ug=Rh;/**
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
 */function dg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const i=new ar(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const l=Array.from(o).map(async u=>u(t.origin,s)),c=await dg(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ar.receivers=[];/**
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
 */class fg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=Vo("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const f=p;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(f.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ot(){return window}function pg(n){ot().location.href=n}/**
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
 */function Dh(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function gg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mg(){return navigator?.serviceWorker?.controller||null}function _g(){return Dh()?self:null}/**
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
 */const Mh="firebaseLocalStorageDb",vg=1,Bs="firebaseLocalStorage",Oh="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function lr(n,e){return n.transaction([Bs],e?"readwrite":"readonly").objectStore(Bs)}function yg(){const n=indexedDB.deleteDatabase(Mh);return new zi(n).toPromise()}function uo(){const n=indexedDB.open(Mh,vg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Bs,{keyPath:Oh})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Bs)?e(i):(i.close(),await yg(),e(await uo()))})})}async function Dl(n,e,t){const i=lr(n,!0).put({[Oh]:e,value:t});return new zi(i).toPromise()}async function wg(n,e){const t=lr(n,!1).get(e),i=await new zi(t).toPromise();return i===void 0?null:i.value}function Ml(n,e){const t=lr(n,!0).delete(e);return new zi(t).toPromise()}const Ig=800,Sg=3;class Lh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await uo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Sg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ar._getInstance(_g()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await gg(),!this.activeServiceWorker)return;this.sender=new fg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await uo();return await Dl(e,Vs,"1"),await Ml(e,Vs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Dl(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>wg(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ml(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=lr(r,!1).getAll();return new zi(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Lh.type="LOCAL";const Eg=Lh;new Gi(3e4,6e4);/**
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
 */function Cg(n,e){return e?ut(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Bo extends xh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Tg(n){return rg(n.auth,new Bo(n),n.bypassAuthState)}function xg(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),sg(t,new Bo(n),n.bypassAuthState)}async function Ag(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),ig(t,new Bo(n),n.bypassAuthState)}/**
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
 */class Fh{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tg;case"linkViaPopup":case"linkViaRedirect":return Ag;case"reauthViaPopup":case"reauthViaRedirect":return xg;default:gt(this.auth,"internal-error")}}resolve(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Pg=new Gi(2e3,1e4);class bn extends Fh{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,bn.currentPopupAction&&bn.currentPopupAction.cancel(),bn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){mt(this.filter.length===1,"Popup operations only handle one event");const e=Vo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bn.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pg.get())};e()}}bn.currentPopupAction=null;/**
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
 */const bg="pendingRedirect",Ts=new Map;class Rg extends Fh{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ts.get(this.auth._key());if(!e){try{const i=await kg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ts.set(this.auth._key(),e)}return this.bypassAuthState||Ts.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kg(n,e){const t=Mg(e),i=Dg(n);if(!await i._isAvailable())return!1;const r=await i._get(t)==="true";return await i._remove(t),r}function Ng(n,e){Ts.set(n._key(),e)}function Dg(n){return ut(n._redirectPersistence)}function Mg(n){return Cs(bg,n.config.apiKey,n.name)}async function Og(n,e,t=!1){if(je(n.app))return Promise.reject(Lt(n));const i=or(n),r=Cg(i,e),o=await new Rg(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Lg=600*1e3;class Fg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ug(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Uh(e)){const i=e.error.code?.split("auth/")[1]||"internal-error";t.onError(rt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ol(e))}saveEventToCache(e){this.cachedEventUids.add(Ol(e)),this.lastProcessedEventTime=Date.now()}}function Ol(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Ug(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uh(n);default:return!1}}/**
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
 */async function Vg(n,e={}){return qn(n,"GET","/v1/projects",e)}/**
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
 */const Bg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hg=/^https?/;async function Wg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vg(n);for(const t of e)try{if(jg(t))return}catch{}gt(n,"unauthorized-domain")}function jg(n){const e=co(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Hg.test(t))return!1;if(Bg.test(n))return i===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Gg=new Gi(3e4,6e4);function Ll(){const n=ot().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $g(n){return new Promise((e,t)=>{function i(){Ll(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ll(),t(rt(n,"network-request-failed"))},timeout:Gg.get()})}if(ot().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ot().gapi?.load)i();else{const r=Yp("iframefcb");return ot()[r]=()=>{gapi.load?i():t(rt(n,"network-request-failed"))},Kp(`${qp()}?onload=${r}`).catch(s=>t(s))}}).catch(e=>{throw xs=null,e})}let xs=null;function zg(n){return xs=xs||$g(n),xs}/**
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
 */const Kg=new Gi(5e3,15e3),qg="__/auth/iframe",Yg="emulator/auth/iframe",Jg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qg(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Oo(e,Yg):`https://${n.config.authDomain}/${qg}`,i={apiKey:e.apiKey,appName:n.name,v:mn},r=Xg.get(n.config.apiHost);r&&(i.eid=r);const s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${Kn(i).slice(1)}`}async function Zg(n){const e=await zg(n),t=ot().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:Qg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jg,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=rt(n,"network-request-failed"),l=ot().setTimeout(()=>{s(o)},Kg.get());function c(){ot().clearTimeout(l),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const em={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tm=500,nm=600,im="_blank",sm="http://localhost";class Fl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rm(n,e,t,i=tm,r=nm){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c={...em,width:i.toString(),height:r.toString(),top:s,left:o},u=Le().toLowerCase();t&&(l=_h(u)?im:t),gh(u)&&(e=e||sm,c.scrollbars="yes");const d=Object.entries(c).reduce((f,[h,m])=>`${f}${h}=${m},`,"");if(Vp(u)&&l!=="_self")return om(e||"",l),new Fl(null);const p=window.open(e||"",l,d);G(p,n,"popup-blocked");try{p.focus()}catch{}return new Fl(p)}function om(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const am="__/auth/handler",lm="emulator/auth/handler",cm=encodeURIComponent("fac");async function Ul(n,e,t,i,r,s){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:mn,eventId:r};if(e instanceof Ah){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ns(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof $i){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),u=c?`#${cm}=${encodeURIComponent(c)}`:"";return`${hm(n)}?${Kn(l).slice(1)}${u}`}function hm({config:n}){return n.emulator?Oo(n,lm):`https://${n.authDomain}/${am}`}/**
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
 */const zr="webStorageSupport";class um{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nh,this._completeRedirectFn=Og,this._overrideRedirectResult=Ng}async _openPopup(e,t,i,r){mt(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await Ul(e,t,i,co(),r);return rm(e,s,Vo())}async _openRedirect(e,t,i,r){await this._originValidation(e);const s=await Ul(e,t,i,co(),r);return pg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(mt(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Zg(e),i=new Fg(e);return t.register("authEvent",r=>(G(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zr,{type:zr},r=>{const s=r?.[0]?.[zr];s!==void 0&&t(!!s),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Wg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sh()||mh()||Fo()}}const dm=um;var Vl="@firebase/auth",Bl="1.11.0";/**
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
 */class fm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function pm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gm(n){ln(new Bt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eh(n)},u=new $p(i,r,s,c);return Xp(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ln(new Bt("auth-internal",e=>{const t=or(e.getProvider("auth").getImmediate());return(i=>new fm(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(Vl,Bl,pm(n)),st(Vl,Bl,"esm2020")}/**
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
 */const mm=300,_m=Xc("authIdTokenMaxAge")||mm;let Hl=null;const vm=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>_m)return;const r=t?.token;Hl!==r&&(Hl=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ym(n=Do()){const e=sr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Jp(n,{popupRedirectResolver:dm,persistence:[Eg,ug,Nh]}),i=Xc("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const o=vm(s.toString());ag(t,o,()=>o(t.currentUser)),og(t,l=>o(l))}}const r=qc("auth");return r&&Ch(t,`http://${r}`),t}function wm(){return document.getElementsByTagName("head")?.[0]??document}zp({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{const s=rt("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",wm().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gm("Browser");var Wl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ho;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function S(){}S.prototype=v.prototype,I.F=v.prototype,I.prototype=new S,I.prototype.constructor=I,I.D=function(E,T,x){for(var A=Array(arguments.length-2),L=2;L<arguments.length;L++)A[L-2]=arguments[L];return v.prototype[T].apply(E,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,v,S){S||(S=0);const E=Array(16);if(typeof v=="string")for(var T=0;T<16;++T)E[T]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(T=0;T<16;++T)E[T]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=I.g[0],S=I.g[1],T=I.g[2];let x=I.g[3],A;A=v+(x^S&(T^x))+E[0]+3614090360&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(T^v&(S^T))+E[1]+3905402710&4294967295,x=v+(A<<12&4294967295|A>>>20),A=T+(S^x&(v^S))+E[2]+606105819&4294967295,T=x+(A<<17&4294967295|A>>>15),A=S+(v^T&(x^v))+E[3]+3250441966&4294967295,S=T+(A<<22&4294967295|A>>>10),A=v+(x^S&(T^x))+E[4]+4118548399&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(T^v&(S^T))+E[5]+1200080426&4294967295,x=v+(A<<12&4294967295|A>>>20),A=T+(S^x&(v^S))+E[6]+2821735955&4294967295,T=x+(A<<17&4294967295|A>>>15),A=S+(v^T&(x^v))+E[7]+4249261313&4294967295,S=T+(A<<22&4294967295|A>>>10),A=v+(x^S&(T^x))+E[8]+1770035416&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(T^v&(S^T))+E[9]+2336552879&4294967295,x=v+(A<<12&4294967295|A>>>20),A=T+(S^x&(v^S))+E[10]+4294925233&4294967295,T=x+(A<<17&4294967295|A>>>15),A=S+(v^T&(x^v))+E[11]+2304563134&4294967295,S=T+(A<<22&4294967295|A>>>10),A=v+(x^S&(T^x))+E[12]+1804603682&4294967295,v=S+(A<<7&4294967295|A>>>25),A=x+(T^v&(S^T))+E[13]+4254626195&4294967295,x=v+(A<<12&4294967295|A>>>20),A=T+(S^x&(v^S))+E[14]+2792965006&4294967295,T=x+(A<<17&4294967295|A>>>15),A=S+(v^T&(x^v))+E[15]+1236535329&4294967295,S=T+(A<<22&4294967295|A>>>10),A=v+(T^x&(S^T))+E[1]+4129170786&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^T&(v^S))+E[6]+3225465664&4294967295,x=v+(A<<9&4294967295|A>>>23),A=T+(v^S&(x^v))+E[11]+643717713&4294967295,T=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(T^x))+E[0]+3921069994&4294967295,S=T+(A<<20&4294967295|A>>>12),A=v+(T^x&(S^T))+E[5]+3593408605&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^T&(v^S))+E[10]+38016083&4294967295,x=v+(A<<9&4294967295|A>>>23),A=T+(v^S&(x^v))+E[15]+3634488961&4294967295,T=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(T^x))+E[4]+3889429448&4294967295,S=T+(A<<20&4294967295|A>>>12),A=v+(T^x&(S^T))+E[9]+568446438&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^T&(v^S))+E[14]+3275163606&4294967295,x=v+(A<<9&4294967295|A>>>23),A=T+(v^S&(x^v))+E[3]+4107603335&4294967295,T=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(T^x))+E[8]+1163531501&4294967295,S=T+(A<<20&4294967295|A>>>12),A=v+(T^x&(S^T))+E[13]+2850285829&4294967295,v=S+(A<<5&4294967295|A>>>27),A=x+(S^T&(v^S))+E[2]+4243563512&4294967295,x=v+(A<<9&4294967295|A>>>23),A=T+(v^S&(x^v))+E[7]+1735328473&4294967295,T=x+(A<<14&4294967295|A>>>18),A=S+(x^v&(T^x))+E[12]+2368359562&4294967295,S=T+(A<<20&4294967295|A>>>12),A=v+(S^T^x)+E[5]+4294588738&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^T)+E[8]+2272392833&4294967295,x=v+(A<<11&4294967295|A>>>21),A=T+(x^v^S)+E[11]+1839030562&4294967295,T=x+(A<<16&4294967295|A>>>16),A=S+(T^x^v)+E[14]+4259657740&4294967295,S=T+(A<<23&4294967295|A>>>9),A=v+(S^T^x)+E[1]+2763975236&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^T)+E[4]+1272893353&4294967295,x=v+(A<<11&4294967295|A>>>21),A=T+(x^v^S)+E[7]+4139469664&4294967295,T=x+(A<<16&4294967295|A>>>16),A=S+(T^x^v)+E[10]+3200236656&4294967295,S=T+(A<<23&4294967295|A>>>9),A=v+(S^T^x)+E[13]+681279174&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^T)+E[0]+3936430074&4294967295,x=v+(A<<11&4294967295|A>>>21),A=T+(x^v^S)+E[3]+3572445317&4294967295,T=x+(A<<16&4294967295|A>>>16),A=S+(T^x^v)+E[6]+76029189&4294967295,S=T+(A<<23&4294967295|A>>>9),A=v+(S^T^x)+E[9]+3654602809&4294967295,v=S+(A<<4&4294967295|A>>>28),A=x+(v^S^T)+E[12]+3873151461&4294967295,x=v+(A<<11&4294967295|A>>>21),A=T+(x^v^S)+E[15]+530742520&4294967295,T=x+(A<<16&4294967295|A>>>16),A=S+(T^x^v)+E[2]+3299628645&4294967295,S=T+(A<<23&4294967295|A>>>9),A=v+(T^(S|~x))+E[0]+4096336452&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~T))+E[7]+1126891415&4294967295,x=v+(A<<10&4294967295|A>>>22),A=T+(v^(x|~S))+E[14]+2878612391&4294967295,T=x+(A<<15&4294967295|A>>>17),A=S+(x^(T|~v))+E[5]+4237533241&4294967295,S=T+(A<<21&4294967295|A>>>11),A=v+(T^(S|~x))+E[12]+1700485571&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~T))+E[3]+2399980690&4294967295,x=v+(A<<10&4294967295|A>>>22),A=T+(v^(x|~S))+E[10]+4293915773&4294967295,T=x+(A<<15&4294967295|A>>>17),A=S+(x^(T|~v))+E[1]+2240044497&4294967295,S=T+(A<<21&4294967295|A>>>11),A=v+(T^(S|~x))+E[8]+1873313359&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~T))+E[15]+4264355552&4294967295,x=v+(A<<10&4294967295|A>>>22),A=T+(v^(x|~S))+E[6]+2734768916&4294967295,T=x+(A<<15&4294967295|A>>>17),A=S+(x^(T|~v))+E[13]+1309151649&4294967295,S=T+(A<<21&4294967295|A>>>11),A=v+(T^(S|~x))+E[4]+4149444226&4294967295,v=S+(A<<6&4294967295|A>>>26),A=x+(S^(v|~T))+E[11]+3174756917&4294967295,x=v+(A<<10&4294967295|A>>>22),A=T+(v^(x|~S))+E[2]+718787259&4294967295,T=x+(A<<15&4294967295|A>>>17),A=S+(x^(T|~v))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(T+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+x&4294967295}i.prototype.v=function(I,v){v===void 0&&(v=I.length);const S=v-this.blockSize,E=this.C;let T=this.h,x=0;for(;x<v;){if(T==0)for(;x<=S;)r(this,I,x),x+=this.blockSize;if(typeof I=="string"){for(;x<v;)if(E[T++]=I.charCodeAt(x++),T==this.blockSize){r(this,E),T=0;break}}else for(;x<v;)if(E[T++]=I[x++],T==this.blockSize){r(this,E),T=0;break}}this.h=T,this.o+=v},i.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var S=I.length-8;S<I.length;++S)I[S]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,S=0;S<4;++S)for(let E=0;E<32;E+=8)I[v++]=this.g[S]>>>E&255;return I};function s(I,v){var S=l;return Object.prototype.hasOwnProperty.call(S,I)?S[I]:S[I]=v(I)}function o(I,v){this.h=v;const S=[];let E=!0;for(let T=I.length-1;T>=0;T--){const x=I[T]|0;E&&x==v||(S[T]=x,E=!1)}this.g=S}var l={};function c(I){return-128<=I&&I<128?s(I,function(v){return new o([v|0],v<0?-1:0)}):new o([I|0],I<0?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return w(u(-I));const v=[];let S=1;for(let E=0;I>=S;E++)v[E]=I/S|0,S*=4294967296;return new o(v,0)}function d(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return w(d(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=u(Math.pow(v,8));let E=p;for(let x=0;x<I.length;x+=8){var T=Math.min(8,I.length-x);const A=parseInt(I.substring(x,x+T),v);T<8?(T=u(Math.pow(v,T)),E=E.j(T).add(u(A))):(E=E.j(S),E=E.add(u(A)))}return E}var p=c(0),f=c(1),h=c(16777216);n=o.prototype,n.m=function(){if(_(this))return-w(this).m();let I=0,v=1;for(let S=0;S<this.g.length;S++){const E=this.i(S);I+=(E>=0?E:4294967296+E)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(m(this))return"0";if(_(this))return"-"+w(this).toString(I);const v=u(Math.pow(I,6));var S=this;let E="";for(;;){const T=D(S,v).g;S=R(S,T.j(v));let x=((S.g.length>0?S.g[0]:S.h)>>>0).toString(I);if(S=T,m(S))return x+E;for(;x.length<6;)x="0"+x;E=x+E}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function m(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function _(I){return I.h==-1}n.l=function(I){return I=R(this,I),_(I)?-1:m(I)?0:1};function w(I){const v=I.g.length,S=[];for(let E=0;E<v;E++)S[E]=~I.g[E];return new o(S,~I.h).add(f)}n.abs=function(){return _(this)?w(this):this},n.add=function(I){const v=Math.max(this.g.length,I.g.length),S=[];let E=0;for(let T=0;T<=v;T++){let x=E+(this.i(T)&65535)+(I.i(T)&65535),A=(x>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);E=A>>>16,x&=65535,A&=65535,S[T]=A<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function R(I,v){return I.add(w(v))}n.j=function(I){if(m(this)||m(I))return p;if(_(this))return _(I)?w(this).j(w(I)):w(w(this).j(I));if(_(I))return w(this.j(w(I)));if(this.l(h)<0&&I.l(h)<0)return u(this.m()*I.m());const v=this.g.length+I.g.length,S=[];for(var E=0;E<2*v;E++)S[E]=0;for(E=0;E<this.g.length;E++)for(let T=0;T<I.g.length;T++){const x=this.i(E)>>>16,A=this.i(E)&65535,L=I.i(T)>>>16,F=I.i(T)&65535;S[2*E+2*T]+=A*F,k(S,2*E+2*T),S[2*E+2*T+1]+=x*F,k(S,2*E+2*T+1),S[2*E+2*T+1]+=A*L,k(S,2*E+2*T+1),S[2*E+2*T+2]+=x*L,k(S,2*E+2*T+2)}for(I=0;I<v;I++)S[I]=S[2*I+1]<<16|S[2*I];for(I=v;I<2*v;I++)S[I]=0;return new o(S,0)};function k(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function N(I,v){this.g=I,this.h=v}function D(I,v){if(m(v))throw Error("division by zero");if(m(I))return new N(p,p);if(_(I))return v=D(w(I),v),new N(w(v.g),w(v.h));if(_(v))return v=D(I,w(v)),new N(w(v.g),v.h);if(I.g.length>30){if(_(I)||_(v))throw Error("slowDivide_ only works with positive integers.");for(var S=f,E=v;E.l(I)<=0;)S=C(S),E=C(E);var T=b(S,1),x=b(E,1);for(E=b(E,2),S=b(S,2);!m(E);){var A=x.add(E);A.l(I)<=0&&(T=T.add(S),x=A),E=b(E,1),S=b(S,1)}return v=R(I,T.j(v)),new N(T,v)}for(T=p;I.l(v)>=0;){for(S=Math.max(1,Math.floor(I.m()/v.m())),E=Math.ceil(Math.log(S)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),x=u(S),A=x.j(v);_(A)||A.l(I)>0;)S-=E,x=u(S),A=x.j(v);m(x)&&(x=f),T=T.add(x),I=R(I,A)}return new N(T,I)}n.B=function(I){return D(this,I).h},n.and=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let E=0;E<v;E++)S[E]=this.i(E)&I.i(E);return new o(S,this.h&I.h)},n.or=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let E=0;E<v;E++)S[E]=this.i(E)|I.i(E);return new o(S,this.h|I.h)},n.xor=function(I){const v=Math.max(this.g.length,I.g.length),S=[];for(let E=0;E<v;E++)S[E]=this.i(E)^I.i(E);return new o(S,this.h^I.h)};function C(I){const v=I.g.length+1,S=[];for(let E=0;E<v;E++)S[E]=I.i(E)<<1|I.i(E-1)>>>31;return new o(S,I.h)}function b(I,v){const S=v>>5;v%=32;const E=I.g.length-S,T=[];for(let x=0;x<E;x++)T[x]=v>0?I.i(x+S)>>>v|I.i(x+S+1)<<32-v:I.i(x+S);return new o(T,I.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Ho=o}).apply(typeof Wl<"u"?Wl:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var g=0;g<a.length;++g){var y=a[g];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var i=t(this);function r(a,g){if(g)e:{var y=i;a=a.split(".");for(var P=0;P<a.length-1;P++){var M=a[P];if(!(M in y))break e;y=y[M]}a=a[a.length-1],P=y[a],g=g(P),g!=P&&g!=null&&e(y,a,{configurable:!0,writable:!0,value:g})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(g){var y=[],P;for(P in g)Object.prototype.hasOwnProperty.call(g,P)&&y.push([P,g[P]]);return y}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var g=typeof a;return g=="object"&&a!=null||g=="function"}function c(a,g,y){return a.call.apply(a.bind,arguments)}function u(a,g,y){return u=c,u.apply(null,arguments)}function d(a,g){var y=Array.prototype.slice.call(arguments,1);return function(){var P=y.slice();return P.push.apply(P,arguments),a.apply(this,P)}}function p(a,g){function y(){}y.prototype=g.prototype,a.Z=g.prototype,a.prototype=new y,a.prototype.constructor=a,a.Ob=function(P,M,O){for(var B=Array(arguments.length-2),z=2;z<arguments.length;z++)B[z-2]=arguments[z];return g.prototype[M].apply(P,B)}}var f=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function h(a){const g=a.length;if(g>0){const y=Array(g);for(let P=0;P<g;P++)y[P]=a[P];return y}return[]}function m(a,g){for(let P=1;P<arguments.length;P++){const M=arguments[P];var y=typeof M;if(y=y!="object"?y:M?Array.isArray(M)?"array":y:"null",y=="array"||y=="object"&&typeof M.length=="number"){y=a.length||0;const O=M.length||0;a.length=y+O;for(let B=0;B<O;B++)a[y+B]=M[B]}else a.push(M)}}class _{constructor(g,y){this.i=g,this.j=y,this.h=0,this.g=null}get(){let g;return this.h>0?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function w(a){o.setTimeout(()=>{throw a},0)}function R(){var a=I;let g=null;return a.g&&(g=a.g,a.g=a.g.next,a.g||(a.h=null),g.next=null),g}class k{constructor(){this.h=this.g=null}add(g,y){const P=N.get();P.set(g,y),this.h?this.h.next=P:this.g=P,this.h=P}}var N=new _(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(g,y){this.h=g,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let C,b=!1,I=new k,v=()=>{const a=Promise.resolve(void 0);C=()=>{a.then(S)}};function S(){for(var a;a=R();){try{a.h.call(a.g)}catch(y){w(y)}var g=N;g.j(a),g.h<100&&(g.h++,a.next=g.g,g.g=a)}b=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,g){this.type=a,this.g=this.target=g,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var x=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,g=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const y=()=>{};o.addEventListener("test",y,g),o.removeEventListener("test",y,g)}catch{}return a})();function A(a){return/^[\s\xa0]*$/.test(a)}function L(a,g){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,g)}p(L,T),L.prototype.init=function(a,g){const y=this.type=a.type,P=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=g,g=a.relatedTarget,g||(y=="mouseover"?g=a.fromElement:y=="mouseout"&&(g=a.toElement)),this.relatedTarget=g,P?(this.clientX=P.clientX!==void 0?P.clientX:P.pageX,this.clientY=P.clientY!==void 0?P.clientY:P.pageY,this.screenX=P.screenX||0,this.screenY=P.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&L.Z.h.call(this)},L.prototype.h=function(){L.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(Math.random()*1e6|0),W=0;function H(a,g,y,P,M){this.listener=a,this.proxy=null,this.src=g,this.type=y,this.capture=!!P,this.ha=M,this.key=++W,this.da=this.fa=!1}function $(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function J(a,g,y){for(const P in a)g.call(y,a[P],P,a)}function ue(a,g){for(const y in a)g.call(void 0,a[y],y,a)}function pe(a){const g={};for(const y in a)g[y]=a[y];return g}const ge="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function we(a,g){let y,P;for(let M=1;M<arguments.length;M++){P=arguments[M];for(y in P)a[y]=P[y];for(let O=0;O<ge.length;O++)y=ge[O],Object.prototype.hasOwnProperty.call(P,y)&&(a[y]=P[y])}}function Ve(a){this.src=a,this.g={},this.h=0}Ve.prototype.add=function(a,g,y,P,M){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=X(a,g,P,M);return B>-1?(g=a[B],y||(g.fa=!1)):(g=new H(g,this.src,O,!!P,M),g.fa=y,a.push(g)),g};function Pe(a,g){const y=g.type;if(y in a.g){var P=a.g[y],M=Array.prototype.indexOf.call(P,g,void 0),O;(O=M>=0)&&Array.prototype.splice.call(P,M,1),O&&($(g),a.g[y].length==0&&(delete a.g[y],a.h--))}}function X(a,g,y,P){for(let M=0;M<a.length;++M){const O=a[M];if(!O.da&&O.listener==g&&O.capture==!!y&&O.ha==P)return M}return-1}var be="closure_lm_"+(Math.random()*1e6|0),me={};function yt(a,g,y,P,M){if(Array.isArray(g)){for(let O=0;O<g.length;O++)yt(a,g[O],y,P,M);return null}return y=In(y),a&&a[F]?a.J(g,y,l(P)?!!P.capture:!1,M):Be(a,g,y,!1,P,M)}function Be(a,g,y,P,M,O){if(!g)throw Error("Invalid event type");const B=l(M)?!!M.capture:!!M;let z=yn(a);if(z||(a[be]=z=new Ve(a)),y=z.add(g,y,P,B,O),y.proxy)return y;if(P=He(),y.proxy=P,P.src=a,P.listener=y,a.addEventListener)x||(M=B),M===void 0&&(M=!1),a.addEventListener(g.toString(),P,M);else if(a.attachEvent)a.attachEvent(ts(g.toString()),P);else if(a.addListener&&a.removeListener)a.addListener(P);else throw Error("addEventListener and attachEvent are unavailable.");return y}function He(){function a(y){return g.call(a.src,a.listener,y)}const g=Ir;return a}function Ae(a,g,y,P,M){if(Array.isArray(g))for(var O=0;O<g.length;O++)Ae(a,g[O],y,P,M);else P=l(P)?!!P.capture:!!P,y=In(y),a&&a[F]?(a=a.i,O=String(g).toString(),O in a.g&&(g=a.g[O],y=X(g,y,P,M),y>-1&&($(g[y]),Array.prototype.splice.call(g,y,1),g.length==0&&(delete a.g[O],a.h--)))):a&&(a=yn(a))&&(g=a.g[g.toString()],a=-1,g&&(a=X(g,y,P,M)),(y=a>-1?g[a]:null)&&Zn(y))}function Zn(a){if(typeof a!="number"&&a&&!a.da){var g=a.src;if(g&&g[F])Pe(g.i,a);else{var y=a.type,P=a.proxy;g.removeEventListener?g.removeEventListener(y,P,a.capture):g.detachEvent?g.detachEvent(ts(y),P):g.addListener&&g.removeListener&&g.removeListener(P),(y=yn(g))?(Pe(y,a),y.h==0&&(y.src=null,g[be]=null)):$(a)}}}function ts(a){return a in me?me[a]:me[a]="on"+a}function Ir(a,g){if(a.da)a=!0;else{g=new L(g,this);const y=a.listener,P=a.ha||a.src;a.fa&&Zn(a),a=y.call(P,g)}return a}function yn(a){return a=a[be],a instanceof Ve?a:null}var wn="__closure_events_fn_"+(Math.random()*1e9>>>0);function In(a){return typeof a=="function"?a:(a[wn]||(a[wn]=function(g){return a.handleEvent(g)}),a[wn])}function oe(){E.call(this),this.i=new Ve(this),this.M=this,this.G=null}p(oe,E),oe.prototype[F]=!0,oe.prototype.removeEventListener=function(a,g,y,P){Ae(this,a,g,y,P)};function Ie(a,g){var y,P=a.G;if(P)for(y=[];P;P=P.G)y.push(P);if(a=a.M,P=g.type||g,typeof g=="string")g=new T(g,a);else if(g instanceof T)g.target=g.target||a;else{var M=g;g=new T(P,a),we(g,M)}M=!0;let O,B;if(y)for(B=y.length-1;B>=0;B--)O=g.g=y[B],M=wt(O,P,!0,g)&&M;if(O=g.g=a,M=wt(O,P,!0,g)&&M,M=wt(O,P,!1,g)&&M,y)for(B=0;B<y.length;B++)O=g.g=y[B],M=wt(O,P,!1,g)&&M}oe.prototype.N=function(){if(oe.Z.N.call(this),this.i){var a=this.i;for(const g in a.g){const y=a.g[g];for(let P=0;P<y.length;P++)$(y[P]);delete a.g[g],a.h--}}this.G=null},oe.prototype.J=function(a,g,y,P){return this.i.add(String(a),g,!1,y,P)},oe.prototype.K=function(a,g,y,P){return this.i.add(String(a),g,!0,y,P)};function wt(a,g,y,P){if(g=a.i.g[String(g)],!g)return!0;g=g.concat();let M=!0;for(let O=0;O<g.length;++O){const B=g[O];if(B&&!B.da&&B.capture==y){const z=B.listener,ve=B.ha||B.src;B.fa&&Pe(a.i,B),M=z.call(ve,P)!==!1&&M}}return M&&!P.defaultPrevented}function ns(a,g){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(g)>2147483647?-1:o.setTimeout(a,g||0)}function ei(a){a.g=ns(()=>{a.g=null,a.i&&(a.i=!1,ei(a))},a.l);const g=a.h;a.h=null,a.m.apply(null,g)}class is extends E{constructor(g,y){super(),this.m=g,this.l=y,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ei(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function It(a){E.call(this),this.h=a,this.g={}}p(It,E);var Kt=[];function ss(a){J(a.g,function(g,y){this.g.hasOwnProperty(y)&&Zn(g)},a),a.g={}}It.prototype.N=function(){It.Z.N.call(this),ss(this)},It.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=o.JSON.stringify,Sn=o.JSON.parse,En=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Ta(){}function pd(){}var ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Sr(){T.call(this,"d")}p(Sr,T);function Er(){T.call(this,"c")}p(Er,T);var Cn={},xa=null;function Cr(){return xa=xa||new oe}Cn.Ia="serverreachability";function Aa(a){T.call(this,Cn.Ia,a)}p(Aa,T);function ii(a){const g=Cr();Ie(g,new Aa(g))}Cn.STAT_EVENT="statevent";function Pa(a,g){T.call(this,Cn.STAT_EVENT,a),this.stat=g}p(Pa,T);function Re(a){const g=Cr();Ie(g,new Pa(g,a))}Cn.Ja="timingevent";function ba(a,g){T.call(this,Cn.Ja,a),this.size=g}p(ba,T);function si(a,g){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},g)}function ri(){this.g=!0}ri.prototype.ua=function(){this.g=!1};function gd(a,g,y,P,M,O){a.info(function(){if(a.g)if(O){var B="",z=O.split("&");for(let se=0;se<z.length;se++){var ve=z[se].split("=");if(ve.length>1){const Se=ve[0];ve=ve[1];const Ze=Se.split("_");B=Ze.length>=2&&Ze[1]=="type"?B+(Se+"="+ve+"&"):B+(Se+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+P+") [attempt "+M+"]: "+g+`
`+y+`
`+B})}function md(a,g,y,P,M,O,B){a.info(function(){return"XMLHTTP RESP ("+P+") [ attempt "+M+"]: "+g+`
`+y+`
`+O+" "+B})}function Tn(a,g,y,P){a.info(function(){return"XMLHTTP TEXT ("+g+"): "+vd(a,y)+(P?" "+P:"")})}function _d(a,g){a.info(function(){return"TIMEOUT: "+g})}ri.prototype.info=function(){};function vd(a,g){if(!a.g)return g;if(!g)return null;try{const O=JSON.parse(g);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var y=O[a];if(!(y.length<2)){var P=y[1];if(Array.isArray(P)&&!(P.length<1)){var M=P[0];if(M!="noop"&&M!="stop"&&M!="close")for(let B=1;B<P.length;B++)P[B]=""}}}}return ti(O)}catch{return g}}var Tr={NO_ERROR:0,TIMEOUT:8},yd={},Ra;function xr(){}p(xr,Ta),xr.prototype.g=function(){return new XMLHttpRequest},Ra=new xr;function oi(a){return encodeURIComponent(String(a))}function wd(a){var g=1;a=a.split(":");const y=[];for(;g>0&&a.length;)y.push(a.shift()),g--;return a.length&&y.push(a.join(":")),y}function St(a,g,y,P){this.j=a,this.i=g,this.l=y,this.S=P||1,this.V=new It(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ka}function ka(){this.i=null,this.g="",this.h=!1}var Na={},Ar={};function Pr(a,g,y){a.M=1,a.A=os(Qe(g)),a.u=y,a.R=!0,Da(a,null)}function Da(a,g){a.F=Date.now(),rs(a),a.B=Qe(a.A);var y=a.B,P=a.S;Array.isArray(P)||(P=[String(P)]),za(y.i,"t",P),a.C=0,y=a.j.L,a.h=new ka,a.g=hl(a.j,y?g:null,!a.u),a.P>0&&(a.O=new is(u(a.Y,a,a.g),a.P)),g=a.V,y=a.g,P=a.ba;var M="readystatechange";Array.isArray(M)||(M&&(Kt[0]=M.toString()),M=Kt);for(let O=0;O<M.length;O++){const B=yt(y,M[O],P||g.handleEvent,!1,g.h||g);if(!B)break;g.g[B.key]=B}g=a.J?pe(a.J):{},a.u?(a.v||(a.v="POST"),g["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,g)):(a.v="GET",a.g.ea(a.B,a.v,null,g)),ii(),gd(a.i,a.v,a.B,a.l,a.S,a.u)}St.prototype.ba=function(a){a=a.target;const g=this.O;g&&Tt(a)==3?g.j():this.Y(a)},St.prototype.Y=function(a){try{if(a==this.g)e:{const z=Tt(this.g),ve=this.g.ya(),se=this.g.ca();if(!(z<3)&&(z!=3||this.g&&(this.h.h||this.g.la()||Za(this.g)))){this.K||z!=4||ve==7||(ve==8||se<=0?ii(3):ii(2)),br(this);var g=this.g.ca();this.X=g;var y=Id(this);if(this.o=g==200,md(this.i,this.v,this.B,this.l,this.S,z,g),this.o){if(this.U&&!this.L){t:{if(this.g){var P,M=this.g;if((P=M.g?M.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(P)){var O=P;break t}}O=null}if(a=O)Tn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Rr(this,a);else{this.o=!1,this.m=3,Re(12),qt(this),ai(this);break e}}if(this.R){a=!0;let Se;for(;!this.K&&this.C<y.length;)if(Se=Sd(this,y),Se==Ar){z==4&&(this.m=4,Re(14),a=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(Se==Na){this.m=4,Re(15),Tn(this.i,this.l,y,"[Invalid Chunk]"),a=!1;break}else Tn(this.i,this.l,Se,null),Rr(this,Se);if(Ma(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),z!=4||y.length!=0||this.h.h||(this.m=1,Re(16),a=!1),this.o=this.o&&a,!a)Tn(this.i,this.l,y,"[Invalid Chunked Response]"),qt(this),ai(this);else if(y.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+y.length),Ur(B),B.P=!0,Re(11))}}else Tn(this.i,this.l,y,null),Rr(this,y);z==4&&qt(this),this.o&&!this.K&&(z==4?ol(this.j,this):(this.o=!1,rs(this)))}else Ld(this.g),g==400&&y.indexOf("Unknown SID")>0?(this.m=3,Re(12)):(this.m=0,Re(13)),qt(this),ai(this)}}}catch{}finally{}};function Id(a){if(!Ma(a))return a.g.la();const g=Za(a.g);if(g==="")return"";let y="";const P=g.length,M=Tt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return qt(a),ai(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<P;O++)a.h.h=!0,y+=a.h.i.decode(g[O],{stream:!(M&&O==P-1)});return g.length=0,a.h.g+=y,a.C=0,a.h.g}function Ma(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Sd(a,g){var y=a.C,P=g.indexOf(`
`,y);return P==-1?Ar:(y=Number(g.substring(y,P)),isNaN(y)?Na:(P+=1,P+y>g.length?Ar:(g=g.slice(P,P+y),a.C=P+y,g)))}St.prototype.cancel=function(){this.K=!0,qt(this)};function rs(a){a.T=Date.now()+a.H,Oa(a,a.H)}function Oa(a,g){if(a.D!=null)throw Error("WatchDog timer not null");a.D=si(u(a.aa,a),g)}function br(a){a.D&&(o.clearTimeout(a.D),a.D=null)}St.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(_d(this.i,this.B),this.M!=2&&(ii(),Re(17)),qt(this),this.m=2,ai(this)):Oa(this,this.T-a)};function ai(a){a.j.I==0||a.K||ol(a.j,a)}function qt(a){br(a);var g=a.O;g&&typeof g.dispose=="function"&&g.dispose(),a.O=null,ss(a.V),a.g&&(g=a.g,a.g=null,g.abort(),g.dispose())}function Rr(a,g){try{var y=a.j;if(y.I!=0&&(y.g==a||kr(y.h,a))){if(!a.L&&kr(y.h,a)&&y.I==3){try{var P=y.Ba.g.parse(g)}catch{P=null}if(Array.isArray(P)&&P.length==3){var M=P;if(M[0]==0){e:if(!y.v){if(y.g)if(y.g.F+3e3<a.F)us(y),cs(y);else break e;Fr(y),Re(18)}}else y.xa=M[1],0<y.xa-y.K&&M[2]<37500&&y.F&&y.A==0&&!y.C&&(y.C=si(u(y.Va,y),6e3));Ua(y.h)<=1&&y.ta&&(y.ta=void 0)}else Jt(y,11)}else if((a.L||y.g==a)&&us(y),!A(g))for(M=y.Ba.g.parse(g),g=0;g<M.length;g++){let se=M[g];const Se=se[0];if(!(Se<=y.K))if(y.K=Se,se=se[1],y.I==2)if(se[0]=="c"){y.M=se[1],y.ba=se[2];const Ze=se[3];Ze!=null&&(y.ka=Ze,y.j.info("VER="+y.ka));const Xt=se[4];Xt!=null&&(y.za=Xt,y.j.info("SVER="+y.za));const xt=se[5];xt!=null&&typeof xt=="number"&&xt>0&&(P=1.5*xt,y.O=P,y.j.info("backChannelRequestTimeoutMs_="+P)),P=y;const At=a.g;if(At){const ds=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ds){var O=P.h;O.g||ds.indexOf("spdy")==-1&&ds.indexOf("quic")==-1&&ds.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Nr(O,O.h),O.h=null))}if(P.G){const Vr=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Vr&&(P.wa=Vr,le(P.J,P.G,Vr))}}y.I=3,y.l&&y.l.ra(),y.aa&&(y.T=Date.now()-a.F,y.j.info("Handshake RTT: "+y.T+"ms")),P=y;var B=a;if(P.na=cl(P,P.L?P.ba:null,P.W),B.L){Va(P.h,B);var z=B,ve=P.O;ve&&(z.H=ve),z.D&&(br(z),rs(z)),P.g=B}else sl(P);y.i.length>0&&hs(y)}else se[0]!="stop"&&se[0]!="close"||Jt(y,7);else y.I==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?Jt(y,7):Lr(y):se[0]!="noop"&&y.l&&y.l.qa(se),y.A=0)}}ii(4)}catch{}}var Ed=class{constructor(a,g){this.g=a,this.map=g}};function La(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Fa(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ua(a){return a.h?1:a.g?a.g.size:0}function kr(a,g){return a.h?a.h==g:a.g?a.g.has(g):!1}function Nr(a,g){a.g?a.g.add(g):a.h=g}function Va(a,g){a.h&&a.h==g?a.h=null:a.g&&a.g.has(g)&&a.g.delete(g)}La.prototype.cancel=function(){if(this.i=Ba(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ba(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let g=a.i;for(const y of a.g.values())g=g.concat(y.G);return g}return h(a.i)}var Ha=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cd(a,g){if(a){a=a.split("&");for(let y=0;y<a.length;y++){const P=a[y].indexOf("=");let M,O=null;P>=0?(M=a[y].substring(0,P),O=a[y].substring(P+1)):M=a[y],g(M,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Et(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let g;a instanceof Et?(this.l=a.l,li(this,a.j),this.o=a.o,this.g=a.g,ci(this,a.u),this.h=a.h,Dr(this,Ka(a.i)),this.m=a.m):a&&(g=String(a).match(Ha))?(this.l=!1,li(this,g[1]||"",!0),this.o=hi(g[2]||""),this.g=hi(g[3]||"",!0),ci(this,g[4]),this.h=hi(g[5]||"",!0),Dr(this,g[6]||"",!0),this.m=hi(g[7]||"")):(this.l=!1,this.i=new di(null,this.l))}Et.prototype.toString=function(){const a=[];var g=this.j;g&&a.push(ui(g,Wa,!0),":");var y=this.g;return(y||g=="file")&&(a.push("//"),(g=this.o)&&a.push(ui(g,Wa,!0),"@"),a.push(oi(y).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.u,y!=null&&a.push(":",String(y))),(y=this.h)&&(this.g&&y.charAt(0)!="/"&&a.push("/"),a.push(ui(y,y.charAt(0)=="/"?Ad:xd,!0))),(y=this.i.toString())&&a.push("?",y),(y=this.m)&&a.push("#",ui(y,bd)),a.join("")},Et.prototype.resolve=function(a){const g=Qe(this);let y=!!a.j;y?li(g,a.j):y=!!a.o,y?g.o=a.o:y=!!a.g,y?g.g=a.g:y=a.u!=null;var P=a.h;if(y)ci(g,a.u);else if(y=!!a.h){if(P.charAt(0)!="/")if(this.g&&!this.h)P="/"+P;else{var M=g.h.lastIndexOf("/");M!=-1&&(P=g.h.slice(0,M+1)+P)}if(M=P,M==".."||M==".")P="";else if(M.indexOf("./")!=-1||M.indexOf("/.")!=-1){P=M.lastIndexOf("/",0)==0,M=M.split("/");const O=[];for(let B=0;B<M.length;){const z=M[B++];z=="."?P&&B==M.length&&O.push(""):z==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),P&&B==M.length&&O.push("")):(O.push(z),P=!0)}P=O.join("/")}else P=M}return y?g.h=P:y=a.i.toString()!=="",y?Dr(g,Ka(a.i)):y=!!a.m,y&&(g.m=a.m),g};function Qe(a){return new Et(a)}function li(a,g,y){a.j=y?hi(g,!0):g,a.j&&(a.j=a.j.replace(/:$/,""))}function ci(a,g){if(g){if(g=Number(g),isNaN(g)||g<0)throw Error("Bad port number "+g);a.u=g}else a.u=null}function Dr(a,g,y){g instanceof di?(a.i=g,Rd(a.i,a.l)):(y||(g=ui(g,Pd)),a.i=new di(g,a.l))}function le(a,g,y){a.i.set(g,y)}function os(a){return le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hi(a,g){return a?g?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ui(a,g,y){return typeof a=="string"?(a=encodeURI(a).replace(g,Td),y&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Td(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Wa=/[#\/\?@]/g,xd=/[#\?:]/g,Ad=/[#\?]/g,Pd=/[#\?@]/g,bd=/#/g;function di(a,g){this.h=this.g=null,this.i=a||null,this.j=!!g}function Yt(a){a.g||(a.g=new Map,a.h=0,a.i&&Cd(a.i,function(g,y){a.add(decodeURIComponent(g.replace(/\+/g," ")),y)}))}n=di.prototype,n.add=function(a,g){Yt(this),this.i=null,a=xn(this,a);let y=this.g.get(a);return y||this.g.set(a,y=[]),y.push(g),this.h+=1,this};function ja(a,g){Yt(a),g=xn(a,g),a.g.has(g)&&(a.i=null,a.h-=a.g.get(g).length,a.g.delete(g))}function Ga(a,g){return Yt(a),g=xn(a,g),a.g.has(g)}n.forEach=function(a,g){Yt(this),this.g.forEach(function(y,P){y.forEach(function(M){a.call(g,M,P,this)},this)},this)};function $a(a,g){Yt(a);let y=[];if(typeof g=="string")Ga(a,g)&&(y=y.concat(a.g.get(xn(a,g))));else for(a=Array.from(a.g.values()),g=0;g<a.length;g++)y=y.concat(a[g]);return y}n.set=function(a,g){return Yt(this),this.i=null,a=xn(this,a),Ga(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[g]),this.h+=1,this},n.get=function(a,g){return a?(a=$a(this,a),a.length>0?String(a[0]):g):g};function za(a,g,y){ja(a,g),y.length>0&&(a.i=null,a.g.set(xn(a,g),h(y)),a.h+=y.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],g=Array.from(this.g.keys());for(let P=0;P<g.length;P++){var y=g[P];const M=oi(y);y=$a(this,y);for(let O=0;O<y.length;O++){let B=M;y[O]!==""&&(B+="="+oi(y[O])),a.push(B)}}return this.i=a.join("&")};function Ka(a){const g=new di;return g.i=a.i,a.g&&(g.g=new Map(a.g),g.h=a.h),g}function xn(a,g){return g=String(g),a.j&&(g=g.toLowerCase()),g}function Rd(a,g){g&&!a.j&&(Yt(a),a.i=null,a.g.forEach(function(y,P){const M=P.toLowerCase();P!=M&&(ja(this,P),za(this,M,y))},a)),a.j=g}function kd(a,g){const y=new ri;if(o.Image){const P=new Image;P.onload=d(Ct,y,"TestLoadImage: loaded",!0,g,P),P.onerror=d(Ct,y,"TestLoadImage: error",!1,g,P),P.onabort=d(Ct,y,"TestLoadImage: abort",!1,g,P),P.ontimeout=d(Ct,y,"TestLoadImage: timeout",!1,g,P),o.setTimeout(function(){P.ontimeout&&P.ontimeout()},1e4),P.src=a}else g(!1)}function Nd(a,g){const y=new ri,P=new AbortController,M=setTimeout(()=>{P.abort(),Ct(y,"TestPingServer: timeout",!1,g)},1e4);fetch(a,{signal:P.signal}).then(O=>{clearTimeout(M),O.ok?Ct(y,"TestPingServer: ok",!0,g):Ct(y,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(M),Ct(y,"TestPingServer: error",!1,g)})}function Ct(a,g,y,P,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),P(y)}catch{}}function Dd(){this.g=new En}function Mr(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Mr,Ta),Mr.prototype.g=function(){return new as(this.i,this.h)};function as(a,g){oe.call(this),this.H=a,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(as,oe),n=as.prototype,n.open=function(a,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=g,this.readyState=1,pi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const g={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(g.body=a),(this.H||o).fetch(new Request(this.D,g)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pi(this)),this.g&&(this.readyState=3,pi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;qa(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function qa(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var g=a.value?a.value:new Uint8Array(0);(g=this.B.decode(g,{stream:!a.done}))&&(this.response=this.responseText+=g)}a.done?fi(this):pi(this),this.readyState==3&&qa(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,fi(this))},n.Na=function(a){this.g&&(this.response=a,fi(this))},n.ga=function(){this.g&&fi(this)};function fi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,pi(a)}n.setRequestHeader=function(a,g){this.A.append(a,g)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],g=this.h.entries();for(var y=g.next();!y.done;)y=y.value,a.push(y[0]+": "+y[1]),y=g.next();return a.join(`\r
`)};function pi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Ya(a){let g="";return J(a,function(y,P){g+=P,g+=":",g+=y,g+=`\r
`}),g}function Or(a,g,y){e:{for(P in y){var P=!1;break e}P=!0}P||(y=Ya(y),typeof a=="string"?y!=null&&oi(y):le(a,g,y))}function fe(a){oe.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(fe,oe);var Md=/^https?$/i,Od=["POST","PUT"];n=fe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,g,y,P){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);g=g?g.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ra.g(),this.g.onreadystatechange=f(u(this.Ca,this));try{this.B=!0,this.g.open(g,String(a),!0),this.B=!1}catch(O){Ja(this,O);return}if(a=y||"",y=new Map(this.headers),P)if(Object.getPrototypeOf(P)===Object.prototype)for(var M in P)y.set(M,P[M]);else if(typeof P.keys=="function"&&typeof P.get=="function")for(const O of P.keys())y.set(O,P.get(O));else throw Error("Unknown input type for opt_headers: "+String(P));P=Array.from(y.keys()).find(O=>O.toLowerCase()=="content-type"),M=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Od,g,void 0)>=0)||P||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of y)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Ja(this,O)}};function Ja(a,g){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=g,a.o=5,Xa(a),ls(a)}function Xa(a){a.A||(a.A=!0,Ie(a,"complete"),Ie(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ie(this,"complete"),Ie(this,"abort"),ls(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ls(this,!0)),fe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Qa(this):this.Xa())},n.Xa=function(){Qa(this)};function Qa(a){if(a.h&&typeof s<"u"){if(a.v&&Tt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ie(a,"readystatechange"),Tt(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var y;if(!(y=g)){var P;if(P=O===0){let B=String(a.D).match(Ha)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),P=!Md.test(B?B.toLowerCase():"")}y=P}if(y)Ie(a,"complete"),Ie(a,"success");else{a.o=6;try{var M=Tt(a)>2?a.g.statusText:""}catch{M=""}a.l=M+" ["+a.ca()+"]",Xa(a)}}finally{ls(a)}}}}function ls(a,g){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const y=a.g;a.g=null,g||Ie(a,"ready");try{y.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Tt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Tt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var g=this.g.responseText;return a&&g.indexOf(a)==0&&(g=g.substring(a.length)),Sn(g)}};function Za(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Ld(a){const g={};a=(a.g&&Tt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let P=0;P<a.length;P++){if(A(a[P]))continue;var y=wd(a[P]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const O=g[M]||[];g[M]=O,O.push(y)}ue(g,function(P){return P.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gi(a,g,y){return y&&y.internalChannelParams&&y.internalChannelParams[a]||g}function el(a){this.za=0,this.i=[],this.j=new ri,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gi("baseRetryDelayMs",5e3,a),this.Za=gi("retryDelaySeedMs",1e4,a),this.Ta=gi("forwardChannelMaxRetries",2,a),this.va=gi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new La(a&&a.concurrentRequestLimit),this.Ba=new Dd,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=el.prototype,n.ka=8,n.I=1,n.connect=function(a,g,y,P){Re(0),this.W=a,this.H=g||{},y&&P!==void 0&&(this.H.OSID=y,this.H.OAID=P),this.F=this.X,this.J=cl(this,null,this.W),hs(this)};function Lr(a){if(tl(a),a.I==3){var g=a.V++,y=Qe(a.J);if(le(y,"SID",a.M),le(y,"RID",g),le(y,"TYPE","terminate"),mi(a,y),g=new St(a,a.j,g),g.M=2,g.A=os(Qe(y)),y=!1,o.navigator&&o.navigator.sendBeacon)try{y=o.navigator.sendBeacon(g.A.toString(),"")}catch{}!y&&o.Image&&(new Image().src=g.A,y=!0),y||(g.g=hl(g.j,null),g.g.ea(g.A)),g.F=Date.now(),rs(g)}ll(a)}function cs(a){a.g&&(Ur(a),a.g.cancel(),a.g=null)}function tl(a){cs(a),a.v&&(o.clearTimeout(a.v),a.v=null),us(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function hs(a){if(!Fa(a.h)&&!a.m){a.m=!0;var g=a.Ea;C||v(),b||(C(),b=!0),I.add(g,a),a.D=0}}function Fd(a,g){return Ua(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=g.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=si(u(a.Ea,a,g),al(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const M=new St(this,this.j,a);let O=this.o;if(this.U&&(O?(O=pe(O),we(O,this.U)):O=this.U),this.u!==null||this.R||(M.J=O,O=null),this.S)e:{for(var g=0,y=0;y<this.i.length;y++){t:{var P=this.i[y];if("__data__"in P.map&&(P=P.map.__data__,typeof P=="string")){P=P.length;break t}P=void 0}if(P===void 0)break;if(g+=P,g>4096){g=y;break e}if(g===4096||y===this.i.length-1){g=y+1;break e}}g=1e3}else g=1e3;g=il(this,M,g),y=Qe(this.J),le(y,"RID",a),le(y,"CVER",22),this.G&&le(y,"X-HTTP-Session-Id",this.G),mi(this,y),O&&(this.R?g="headers="+oi(Ya(O))+"&"+g:this.u&&Or(y,this.u,O)),Nr(this.h,M),this.Ra&&le(y,"TYPE","init"),this.S?(le(y,"$req",g),le(y,"SID","null"),M.U=!0,Pr(M,y,null)):Pr(M,y,g),this.I=2}}else this.I==3&&(a?nl(this,a):this.i.length==0||Fa(this.h)||nl(this))};function nl(a,g){var y;g?y=g.l:y=a.V++;const P=Qe(a.J);le(P,"SID",a.M),le(P,"RID",y),le(P,"AID",a.K),mi(a,P),a.u&&a.o&&Or(P,a.u,a.o),y=new St(a,a.j,y,a.D+1),a.u===null&&(y.J=a.o),g&&(a.i=g.G.concat(a.i)),g=il(a,y,1e3),y.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Nr(a.h,y),Pr(y,P,g)}function mi(a,g){a.H&&J(a.H,function(y,P){le(g,P,y)}),a.l&&J({},function(y,P){le(g,P,y)})}function il(a,g,y){y=Math.min(a.i.length,y);const P=a.l?u(a.l.Ka,a.l,a):null;e:{var M=a.i;let z=-1;for(;;){const ve=["count="+y];z==-1?y>0?(z=M[0].g,ve.push("ofs="+z)):z=0:ve.push("ofs="+z);let se=!0;for(let Se=0;Se<y;Se++){var O=M[Se].g;const Ze=M[Se].map;if(O-=z,O<0)z=Math.max(0,M[Se].g-100),se=!1;else try{O="req"+O+"_"||"";try{var B=Ze instanceof Map?Ze:Object.entries(Ze);for(const[Xt,xt]of B){let At=xt;l(xt)&&(At=ti(xt)),ve.push(O+Xt+"="+encodeURIComponent(At))}}catch(Xt){throw ve.push(O+"type="+encodeURIComponent("_badmap")),Xt}}catch{P&&P(Ze)}}if(se){B=ve.join("&");break e}}B=void 0}return a=a.i.splice(0,y),g.G=a,B}function sl(a){if(!a.g&&!a.v){a.Y=1;var g=a.Da;C||v(),b||(C(),b=!0),I.add(g,a),a.A=0}}function Fr(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=si(u(a.Da,a),al(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,rl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=si(u(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Re(10),cs(this),rl(this))};function Ur(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function rl(a){a.g=new St(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var g=Qe(a.na);le(g,"RID","rpc"),le(g,"SID",a.M),le(g,"AID",a.K),le(g,"CI",a.F?"0":"1"),!a.F&&a.ia&&le(g,"TO",a.ia),le(g,"TYPE","xmlhttp"),mi(a,g),a.u&&a.o&&Or(g,a.u,a.o),a.O&&(a.g.H=a.O);var y=a.g;a=a.ba,y.M=1,y.A=os(Qe(g)),y.u=null,y.R=!0,Da(y,a)}n.Va=function(){this.C!=null&&(this.C=null,cs(this),Fr(this),Re(19))};function us(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function ol(a,g){var y=null;if(a.g==g){us(a),Ur(a),a.g=null;var P=2}else if(kr(a.h,g))y=g.G,Va(a.h,g),P=1;else return;if(a.I!=0){if(g.o)if(P==1){y=g.u?g.u.length:0,g=Date.now()-g.F;var M=a.D;P=Cr(),Ie(P,new ba(P,y)),hs(a)}else sl(a);else if(M=g.m,M==3||M==0&&g.X>0||!(P==1&&Fd(a,g)||P==2&&Fr(a)))switch(y&&y.length>0&&(g=a.h,g.i=g.i.concat(y)),M){case 1:Jt(a,5);break;case 4:Jt(a,10);break;case 3:Jt(a,6);break;default:Jt(a,2)}}}function al(a,g){let y=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(y*=2),y*g}function Jt(a,g){if(a.j.info("Error code "+g),g==2){var y=u(a.bb,a),P=a.Ua;const M=!P;P=new Et(P||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||li(P,"https"),os(P),M?kd(P.toString(),y):Nd(P.toString(),y)}else Re(2);a.I=0,a.l&&a.l.pa(g),ll(a),tl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function ll(a){if(a.I=0,a.ja=[],a.l){const g=Ba(a.h);(g.length!=0||a.i.length!=0)&&(m(a.ja,g),m(a.ja,a.i),a.h.i.length=0,h(a.i),a.i.length=0),a.l.oa()}}function cl(a,g,y){var P=y instanceof Et?Qe(y):new Et(y);if(P.g!="")g&&(P.g=g+"."+P.g),ci(P,P.u);else{var M=o.location;P=M.protocol,g=g?g+"."+M.hostname:M.hostname,M=+M.port;const O=new Et(null);P&&li(O,P),g&&(O.g=g),M&&ci(O,M),y&&(O.h=y),P=O}return y=a.G,g=a.wa,y&&g&&le(P,y,g),le(P,"VER",a.ka),mi(a,P),P}function hl(a,g,y){if(g&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return g=a.Aa&&!a.ma?new fe(new Mr({ab:y})):new fe(a.ma),g.Fa(a.L),g}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ul(){}n=ul.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function We(a,g){oe.call(this),this.g=new el(g),this.l=a,this.h=g&&g.messageUrlParams||null,a=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(a?a["X-WebChannel-Content-Type"]=g.messageContentType:a={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.sa&&(a?a["X-WebChannel-Client-Profile"]=g.sa:a={"X-WebChannel-Client-Profile":g.sa}),this.g.U=a,(a=g&&g.Qb)&&!A(a)&&(this.g.u=a),this.A=g&&g.supportsCrossDomainXhr||!1,this.v=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!A(g)&&(this.g.G=g,a=this.h,a!==null&&g in a&&(a=this.h,g in a&&delete a[g])),this.j=new An(this)}p(We,oe),We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Lr(this.g)},We.prototype.o=function(a){var g=this.g;if(typeof a=="string"){var y={};y.__data__=a,a=y}else this.v&&(y={},y.__data__=ti(a),a=y);g.i.push(new Ed(g.Ya++,a)),g.I==3&&hs(g)},We.prototype.N=function(){this.g.l=null,delete this.j,Lr(this.g),delete this.g,We.Z.N.call(this)};function dl(a){Sr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var g=a.__sm__;if(g){e:{for(const y in g){a=y;break e}a=void 0}(this.i=a)&&(a=this.i,g=g!==null&&a in g?g[a]:void 0),this.data=g}else this.data=a}p(dl,Sr);function fl(){Er.call(this),this.status=1}p(fl,Er);function An(a){this.g=a}p(An,ul),An.prototype.ra=function(){Ie(this.g,"a")},An.prototype.qa=function(a){Ie(this.g,new dl(a))},An.prototype.pa=function(a){Ie(this.g,new fl)},An.prototype.oa=function(){Ie(this.g,"b")},We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,Tr.NO_ERROR=0,Tr.TIMEOUT=8,Tr.HTTP_ERROR=6,yd.COMPLETE="complete",pd.EventType=ni,ni.OPEN="a",ni.CLOSE="b",ni.ERROR="c",ni.MESSAGE="d",oe.prototype.listen=oe.prototype.J,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});const jl="@firebase/firestore",Gl="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new ir("@firebase/firestore");function Ye(n,...e){if(Vn.logLevel<=ne.DEBUG){const t=e.map(Wo);Vn.debug(`Firestore (${Ki}): ${n}`,...t)}}function Vh(n,...e){if(Vn.logLevel<=ne.ERROR){const t=e.map(Wo);Vn.error(`Firestore (${Ki}): ${n}`,...t)}}function Im(n,...e){if(Vn.logLevel<=ne.WARN){const t=e.map(Wo);Vn.warn(`Firestore (${Ki}): ${n}`,...t)}}function Wo(n){if(typeof n=="string")return n;try{/**
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
 */function Oi(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Bh(n,i,t)}function Bh(n,e,t){let i=`FIRESTORE (${Ki}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Vh(i),new Error(i)}function Ci(n,e,t,i){let r="Unexpected state";typeof t=="string"?r=t:i=t,n||Bh(e,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ee extends vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ne.UNAUTHENTICATED)))}shutdown(){}}class Em{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Cm{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ci(this.o===void 0,42304);let i=this.i;const r=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let s=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ti,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=s;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},l=c=>{Ye("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Ye("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ti)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(Ye("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Ci(typeof i.accessToken=="string",31837,{l:i}),new Hh(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ci(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class Tm{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xm{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Tm(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ne.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $l{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Am{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ci(this.o===void 0,3512);const i=s=>{s.error!=null&&Ye("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Ye("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>i(s)))};const r=s=>{Ye("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>r(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):Ye("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $l(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ci(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new $l(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Pm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const r=Pm(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<t&&(i+=e.charAt(r[s]%62))}return i}}function Wt(n,e){return n<e?-1:n>e?1:0}function Rm(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const r=n.charAt(i),s=e.charAt(i);if(r!==s)return Kr(r)===Kr(s)?Wt(r,s):Kr(r)?1:-1}return Wt(n.length,e.length)}const km=55296,Nm=57343;function Kr(n){const e=n.charCodeAt(0);return e>=km&&e<=Nm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="__name__";class et{constructor(e,t,i){t===void 0?t=0:t>e.length&&Oi(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Oi(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return et.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof et?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let r=0;r<i;r++){const s=et.compareSegments(e.get(r),t.get(r));if(s!==0)return s}return Wt(e.length,t.length)}static compareSegments(e,t){const i=et.isNumericId(e),r=et.isNumericId(t);return i&&!r?-1:!i&&r?1:i&&r?et.extractNumericId(e).compare(et.extractNumericId(t)):Rm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ho.fromString(e.substring(4,e.length-2))}}class ze extends et{construct(e,t,i){return new ze(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(Z.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((r=>r.length>0)))}return new ze(t)}static emptyPath(){return new ze([])}}const Dm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends et{construct(e,t,i){return new tn(e,t,i)}static isValidIdentifier(e){return Dm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zl}static keyField(){return new tn([zl])}static fromServerFormat(e){const t=[];let i="",r=0;const s=()=>{if(i.length===0)throw new ee(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new ee(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ee(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(i+=l,r++):(s(),r++)}if(s(),o)throw new ee(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.path=e}static fromPath(e){return new nn(ze.fromString(e))}static fromName(e){return new nn(ze.fromString(e).popFirst(5))}static empty(){return new nn(ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new nn(new ze(e.slice()))}}function Mm(n,e,t,i){if(e===!0&&i===!0)throw new ee(Z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Om(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lm(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Oi(12329,{type:typeof n})}function Fm(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lm(n);throw new ee(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function _e(n,e){const t={typeString:n};return e&&(t.value=e),t}function qi(n,e){if(!Om(n))throw new ee(Z.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(r&&typeof o!==r){t=`JSON field '${i}' must be a ${r}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${i}' field to equal '${s.value}'`;break}}if(t)throw new ee(Z.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=-62135596800,ql=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*ql);return new tt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Kl)throw new ee(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ql}_compareTo(e){return this.seconds===e.seconds?Wt(this.nanoseconds,e.nanoseconds):Wt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(qi(e,tt._jsonSchema))return new tt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kl;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}tt._jsonSchemaVersion="firestore/timestamp/1.0",tt._jsonSchema={type:_e("string",tt._jsonSchemaVersion),seconds:_e("number"),nanoseconds:_e("number")};function Um(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Vm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class hn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Vm("Invalid base64 string: "+s):s}})(e);return new hn(t)}static fromUint8Array(e){const t=(function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s})(e);return new hn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Wt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}hn.EMPTY_BYTE_STRING=new hn("");const fo="(default)";class Hs{constructor(e,t){this.projectId=e,this.database=t||fo}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database===fo}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,t=null,i=[],r=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Hm(n){return new Bm(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Wm=41943040;/**
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
 */const jm=1048576;function qr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t,i=1e3,r=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=i,this.A_=r,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),i=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-i);r>0&&Ye("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,i,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,r,s){const o=Date.now()+i,l=new jo(e,t,o,r,s);return l.start(i),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Jl,Xl;(Xl=Jl||(Jl={})).Ma="default",Xl.Cache="cache";/**
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
 */function $m(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Wh="firestore.googleapis.com",Zl=!0;class ec{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wh,this.ssl=Zl}else this.host=e.host,this.ssl=e.ssl??Zl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Wm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jm)throw new ee(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Mm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$m(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ee(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,r){return i.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class jh{constructor(e,t,i,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Sm;switch(i.type){case"firstParty":return new xm(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Ql.get(t);i&&(Ye("ComponentProvider","Removing Datastore"),Ql.delete(t),i.terminate())})(this),Promise.resolve()}}function Gh(n,e,t,i={}){n=Fm(n,jh);const r=gn(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;r&&(bo(`https://${l}`),Ro("Firestore",!0)),s.host!==Wh&&s.host!==l&&Im("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...s,host:l,ssl:r,emulatorOptions:i};if(!Vt(c,o)&&(n._setSettings(c),i.mockUserToken)){let u,d;if(typeof i.mockUserToken=="string")u=i.mockUserToken,d=Ne.MOCK_USER;else{u=Qc(i.mockUserToken,n._app?.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new ee(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ne(p)}n._authCredentials=new Em(new Hh(u,d))}}/**
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
 */class Go{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Go(this.firestore,e,this._query)}}class it{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $o(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(qi(t,it._jsonSchema))return new it(e,i||null,new nn(ze.fromString(t.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:_e("string",it._jsonSchemaVersion),referencePath:_e("string")};class $o extends Go{constructor(e,t,i){super(e,t,Hm(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new nn(e))}withConverter(e){return new $o(this.firestore,e,this._path)}}/**
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
 */const tc="AsyncQueue";class nc{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gm(this,"async_queue_retry"),this._c=()=>{const i=qr();i&&Ye(tc,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=qr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=qr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ti;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Um(e))throw e;Ye(tc,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Vh("INTERNAL UNHANDLED ERROR: ",ic(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=jo.createAndSchedule(this,e,t,i,(s=>this.hc(s)));return this.tc.push(r),r}uc(){this.nc&&Oi(47125,{Pc:ic(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ic(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class zm extends jh{constructor(e,t,i,r){super(e,t,i,r),this.type="firestore",this._queue=new nc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new nc(e),this._firestoreClient=void 0,await e}}}function Km(n,e){const t=typeof n=="object"?n:Do(),i=typeof n=="string"?n:fo,r=sr(t,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Yc("firestore");s&&Gh(r,...s)}return r}/**
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
 */class ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ct(hn.fromBase64String(e))}catch(t){throw new ee(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ct(hn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(qi(e,ct._jsonSchema))return ct.fromBase64String(e.bytes)}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:_e("string",ct._jsonSchemaVersion),bytes:_e("string")};/**
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
 */class $h{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class an{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,r){if(i.length!==r.length)return!1;for(let s=0;s<i.length;++s)if(i[s]!==r[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(qi(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new an(e.vectorValues);throw new ee(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:_e("string",an._jsonSchemaVersion),vectorValues:_e("object")};const qm=new RegExp("[~\\*/\\[\\]]");function Ym(n,e,t){if(e.search(qm)>=0)throw sc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new $h(...e.split("."))._internalPath}catch{throw sc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function sc(n,e,t,i,r){let s=`Function ${e}() called with invalid data`;s+=". ";let o="";return new ee(Z.INVALID_ARGUMENT,s+n+o)}/**
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
 */class zh{constructor(e,t,i,r,s){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kh("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Jm extends zh{data(){return super.data()}}function Kh(n,e){return typeof e=="string"?Ym(n,e):e instanceof $h?e._internalPath:e._delegate._internalPath}class gs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends zh{constructor(e,t,i,r,s,o){super(e,t,i,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new As(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Kh("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mn._jsonSchema={type:_e("string",Mn._jsonSchemaVersion),bundleSource:_e("string","DocumentSnapshot"),bundleName:_e("string"),bundle:_e("string")};class As extends Mn{data(e={}){return super.data(e)}}class xi{constructor(e,t,i,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new gs(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new As(this._firestore,this._userDataWriter,i.key,i,new gs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((l=>{const c=new As(r._firestore,r._userDataWriter,l.doc.key,l.doc,new gs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new As(r._firestore,r._userDataWriter,l.doc.key,l.doc,new gs(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:Xm(l.type),doc:c,oldIndex:u,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=xi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=bm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],r=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),i.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Xm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Oi(61501,{type:n})}}xi._jsonSchemaVersion="firestore/querySnapshot/1.0",xi._jsonSchema={type:_e("string",xi._jsonSchemaVersion),bundleSource:_e("string","QuerySnapshot"),bundleName:_e("string"),bundle:_e("string")};(function(e,t=!0){(function(r){Ki=r})(mn),ln(new Bt("firestore",((i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),l=new zm(new Cm(i.getProvider("auth-internal")),new Am(o,i.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ee(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(u.options.projectId,d)})(o,r),o);return s={useFetchStreams:t,...s},l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),st(jl,Gl,e),st(jl,Gl,"esm2020")})();var rc={};const oc="@firebase/database",ac="1.1.0";/**
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
 */let qh="";function Qm(n){qh=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ye(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ni(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return at(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Zm(e)}}catch{}return new e_},sn=Yh("localStorage"),t_=Yh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new ir("@firebase/database"),n_=(function(){let n=1;return function(){return n++}})(),Jh=function(n){const e=uf(n),t=new af;t.update(e);const i=t.digest();return Ao.encodeByteArray(i)},Yi=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Yi.apply(null,i):typeof i=="object"?e+=ye(i):e+=i,e+=" "}return e};let Ai=null,lc=!0;const i_=function(n,e){V(!0,"Can't turn on custom loggers persistently."),On.logLevel=ne.VERBOSE,Ai=On.log.bind(On)},Te=function(...n){if(lc===!0&&(lc=!1,Ai===null&&t_.get("logging_enabled")===!0&&i_()),Ai){const e=Yi.apply(null,n);Ai(e)}},Ji=function(n){return function(...e){Te(n,...e)}},po=function(...n){const e="FIREBASE INTERNAL ERROR: "+Yi(...n);On.error(e)},_t=function(...n){const e=`FIREBASE FATAL ERROR: ${Yi(...n)}`;throw On.error(e),new Error(e)},Oe=function(...n){const e="FIREBASE WARNING: "+Yi(...n);On.warn(e)},s_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Oe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},r_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Bn="[MIN_NAME]",un="[MAX_NAME]",_n=function(n,e){if(n===e)return 0;if(n===Bn||e===un)return-1;if(e===Bn||n===un)return 1;{const t=cc(n),i=cc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},o_=function(n,e){return n===e?0:n<e?-1:1},_i=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+ye(e))},zo=function(n){if(typeof n!="object"||n===null)return ye(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=ye(e[i]),t+=":",t+=zo(n[e[i]]);return t+="}",t},Xh=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function xe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Qh=function(n){V(!cr(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let r,s,o,l,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=l+i,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));const u=[];for(c=t;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const d=u.join("");let p="";for(c=0;c<64;c+=8){let f=parseInt(d.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),p=p+f}return p.toLowerCase()},a_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},l_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function c_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const h_=new RegExp("^-?(0*)\\d{1,10}$"),u_=-2147483648,d_=2147483647,cc=function(n){if(h_.test(n)){const e=Number(n);if(e>=u_&&e<=d_)return e}return null},Yn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Oe("Exception was thrown by user callback.",t),e},Math.floor(0))}},f_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class p_{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,je(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){Oe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Oe(e)}}class Ps{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ps.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="5",Zh="v",eu="s",tu="r",nu="f",iu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,su="ls",ru="p",go="ac",ou="websocket",au="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,t,i,r,s=!1,o="",l=!1,c=!1,u=null){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function m_(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function cu(n,e,t){V(typeof e=="string","typeof type must == string"),V(typeof t=="object","typeof params must == object");let i;if(e===ou)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===au)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);m_(n)&&(t.ns=n.namespace);const r=[];return xe(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.counters_={}}incrementCounter(e,t=1){at(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Hd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr={},Jr={};function qo(n){const e=n.toString();return Yr[e]||(Yr[e]=new __),Yr[e]}function v_(n,e){const t=n.toString();return Jr[t]||(Jr[t]=e()),Jr[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Yn(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="start",w_="close",I_="pLPCommand",S_="pRTLPCB",hu="id",uu="pw",du="ser",E_="cb",C_="seg",T_="ts",x_="d",A_="dframe",fu=1870,pu=30,P_=fu-pu,b_=25e3,R_=3e4;class Rn{constructor(e,t,i,r,s,o,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ji(e),this.stats_=qo(t),this.urlFn=c=>(this.appCheckToken&&(c[go]=this.appCheckToken),cu(t,au,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new y_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(R_)),r_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yo((...s)=>{const[o,l,c,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hc)this.id=l,this.password=c;else if(o===w_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[hc]="t",i[du]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[E_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Zh]=Ko,this.transportSessionId&&(i[eu]=this.transportSessionId),this.lastSessionId&&(i[su]=this.lastSessionId),this.applicationId&&(i[ru]=this.applicationId),this.appCheckToken&&(i[go]=this.appCheckToken),typeof location<"u"&&location.hostname&&iu.test(location.hostname)&&(i[tu]=nu);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rn.forceAllow_=!0}static forceDisallow(){Rn.forceDisallow_=!0}static isAvailable(){return Rn.forceAllow_?!0:!Rn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!a_()&&!l_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=zc(t),r=Xh(i,P_);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[A_]="t",i[hu]=e,i[uu]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ye(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Yo{constructor(e,t,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=n_(),window[I_+this.uniqueCallbackIdentifier]=e,window[S_+this.uniqueCallbackIdentifier]=t,this.myIFrame=Yo.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Te("frame writing exception"),l.stack&&Te(l.stack),Te(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hu]=this.myID,e[uu]=this.myPW,e[du]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pu+i.length<=fu;){const o=this.pendingSegs.shift();i=i+"&"+C_+r+"="+o.seg+"&"+T_+r+"="+o.ts+"&"+x_+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(b_)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=16384,N_=45e3;let Ws=null;typeof MozWebSocket<"u"?Ws=MozWebSocket:typeof WebSocket<"u"&&(Ws=WebSocket);class Ke{constructor(e,t,i,r,s,o,l){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ji(this.connId),this.stats_=qo(t),this.connURL=Ke.connectionURL_(t,o,l,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){const o={};return o[Zh]=Ko,typeof location<"u"&&location.hostname&&iu.test(location.hostname)&&(o[tu]=nu),t&&(o[eu]=t),i&&(o[su]=i),r&&(o[go]=r),s&&(o[ru]=s),cu(e,ou,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sn.set("previous_websocket_failure",!0);try{let i;Qd(),this.mySock=new Ws(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ws!==null&&!Ke.forceDisallow_}static previouslyFailed(){return sn.isInMemoryStorage||sn.get("previous_websocket_failure")===!0}markConnectionHealthy(){sn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Ni(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=ye(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xh(t,k_);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(N_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{static get ALL_TRANSPORTS(){return[Rn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ke&&Ke.isAvailable();let i=t&&!Ke.previouslyFailed();if(e.webSocketOnly&&(t||Oe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Ke];else{const r=this.transports_=[];for(const s of Li.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);Li.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Li.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=6e4,M_=5e3,O_=10*1024,L_=100*1024,Xr="t",uc="d",F_="s",dc="r",U_="e",fc="o",pc="a",gc="n",mc="p",V_="h";class B_{constructor(e,t,i,r,s,o,l,c,u,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ji("c:"+this.id+":"),this.transportManager_=new Li(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>L_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>O_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Xr in e){const t=e[Xr];t===pc?this.upgradeIfSecondaryHealthy_():t===dc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===fc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=_i("t",e),i=_i("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:mc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=_i("t",e),i=_i("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=_i(Xr,e);if(uc in e){const i=e[uc];if(t===V_){const r={...i};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===gc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===F_?this.onConnectionShutdown_(i):t===dc?this.onReset_(i):t===U_?po("Server Error: "+i):t===fc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):po("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ko!==i&&Oe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(D_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(M_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:mc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class js extends mu{static getInstance(){return new js}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ko()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=32,vc=768;class ie{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function te(){return new ie("")}function K(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function jt(n){return n.pieces_.length-n.pieceNum_}function re(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ie(n.pieces_,e)}function Jo(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function H_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Fi(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function _u(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ie(e,0)}function ce(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof ie)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new ie(t,0)}function q(n){return n.pieceNum_>=n.pieces_.length}function Me(n,e){const t=K(n),i=K(e);if(t===null)return e;if(t===i)return Me(re(n),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function W_(n,e){const t=Fi(n,0),i=Fi(e,0);for(let r=0;r<t.length&&r<i.length;r++){const s=_n(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function Xo(n,e){if(jt(n)!==jt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Ge(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(jt(n)>jt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class j_{constructor(e,t){this.errorPrefix_=t,this.parts_=Fi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=nr(this.parts_[i]);vu(this)}}function G_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=nr(e),vu(n)}function $_(n){const e=n.parts_.pop();n.byteLength_-=nr(e),n.parts_.length>0&&(n.byteLength_-=1)}function vu(n){if(n.byteLength_>vc)throw new Error(n.errorPrefix_+"has a key path longer than "+vc+" bytes ("+n.byteLength_+").");if(n.parts_.length>_c)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_c+") or object contains a cycle "+Zt(n))}function Zt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const vi=1e3,z_=300*1e3,yc=30*1e3,K_=1.3,q_=3e4,Y_="server_kill",wc=3;class ft extends gu{constructor(e,t,i,r,s,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ft.nextPersistentConnectionId_++,this.log_=Ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vi,this.maxReconnectDelay_=z_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&js.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(ye(s)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const t=new nt,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const c=l.d,u=l.s;ft.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&at(e,"w")){const i=Fn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Oe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||of(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=rf(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){const s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();const o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ye(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):po("Unrecognized action received from server: "+ye(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>q_&&(this.reconnectDelay_=vi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*K_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ft.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,i())},u=function(p){V(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(p)};this.realtime_={close:c,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=f&&f.token,l=new B_(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,h=>{Oe(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Y_)},s))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&Oe(p),c())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ns(this.interruptReasons_)&&(this.reconnectDelay_=vi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>zo(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const i=new ie(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){Te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wc&&(this.reconnectDelay_=yc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+qh.replace(/\./g,"-")]=1,ko()?e["framework.cordova"]=1:Zc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=js.getInstance().currentlyOnline();return Ns(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class hr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Y(Bn,e),r=new Y(Bn,t);return this.compare(i,r)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms;class yu extends hr{static get __EMPTY_NODE(){return ms}static set __EMPTY_NODE(e){ms=e}compare(e,t){return _n(e.name,t.name)}isDefinedOn(e){throw zn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Y.MIN}maxPost(){return new Y(un,ms)}makePost(e,t){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,ms)}toString(){return".key"}}const Ln=new yu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??Ce.RED,this.left=r??Ue.EMPTY_NODE,this.right=s??Ue.EMPTY_NODE}copy(e,t,i,r,s){return new Ce(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class J_{copy(e,t,i,r,s){return this}insert(e,t,i){return new Ce(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,t=Ue.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ue(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new _s(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new _s(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new J_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n,e){return _n(n.name,e.name)}function Zo(n,e){return _n(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mo;function Q_(n){mo=n}const wu=function(n){return typeof n=="number"?"number:"+Qh(n):"string:"+n},Iu=function(n){if(n.isLeafNode()){const e=n.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&at(e,".sv"),"Priority must be a string or number.")}else V(n===mo||n.isEmpty(),"priority of unexpected type.");V(n===mo||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic;class Ee{static set __childrenNodeConstructor(e){Ic=e}static get __childrenNodeConstructor(){return Ic}constructor(e,t=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Iu(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:K(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=K(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(V(i!==".priority"||jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wu(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Qh(this.value_):e+=this.value_,this.lazyHash_=Jh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,r=Ee.VALUE_TYPE_ORDER.indexOf(t),s=Ee.VALUE_TYPE_ORDER.indexOf(i);return V(r>=0,"Unknown leaf type: "+t),V(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su,Eu;function Z_(n){Su=n}function ev(n){Eu=n}class tv extends hr{compare(e,t){const i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?_n(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(un,new Ee("[PRIORITY-POST]",Eu))}makePost(e,t){const i=Su(e);return new Y(t,new Ee("[PRIORITY-POST]",i))}toString(){return".priority"}}const he=new tv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=Math.log(2);class iv{constructor(e){const t=s=>parseInt(Math.log(s)/nv,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gs=function(n,e,t,i){n.sort(e);const r=function(c,u){const d=u-c;let p,f;if(d===0)return null;if(d===1)return p=n[c],f=t?t(p):p,new Ce(f,p.node,Ce.BLACK,null,null);{const h=parseInt(d/2,10)+c,m=r(c,h),_=r(h+1,u);return p=n[h],f=t?t(p):p,new Ce(f,p.node,Ce.BLACK,m,_)}},s=function(c){let u=null,d=null,p=n.length;const f=function(m,_){const w=p-m,R=p;p-=m;const k=r(w+1,R),N=n[w],D=t?t(N):N;h(new Ce(D,N.node,_,null,k))},h=function(m){u?(u.left=m,u=m):(d=m,u=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),w=Math.pow(2,c.count-(m+1));_?f(w,Ce.BLACK):(f(w,Ce.BLACK),f(w,Ce.RED))}return d},o=new iv(n.length),l=s(o);return new Ue(i||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qr;const Pn={};class dt{static get Default(){return V(Pn&&he,"ChildrenNode.ts has not been loaded"),Qr=Qr||new dt({".priority":Pn},{".priority":he}),Qr}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Fn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ue?t:null}hasIndex(e){return at(this.indexSet_,e.toString())}addIndex(e,t){V(e!==Ln,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=t.getIterator(Y.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let l;r?l=Gs(i,e.getCompare()):l=Pn;const c=e.toString(),u={...this.indexSet_};u[c]=e;const d={...this.indexes_};return d[c]=l,new dt(d,u)}addToIndexes(e,t){const i=Ds(this.indexes_,(r,s)=>{const o=Fn(this.indexSet_,s);if(V(o,"Missing index implementation for "+s),r===Pn)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(Y.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&l.push(u),u=c.getNext();return l.push(e),Gs(l,o.getCompare())}else return Pn;else{const l=t.get(e.name);let c=r;return l&&(c=c.remove(new Y(e.name,l))),c.insert(e,e.node)}});return new dt(i,this.indexSet_)}removeFromIndexes(e,t){const i=Ds(this.indexes_,r=>{if(r===Pn)return r;{const s=t.get(e.name);return s?r.remove(new Y(e.name,s)):r}});return new dt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class j{static get EMPTY_NODE(){return yi||(yi=new j(new Ue(Zo),null,dt.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Iu(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||yi}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?yi:t}}getChild(e){const t=K(e);return t===null?this:this.getImmediateChild(t).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(V(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Y(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?yi:this.priorityNode_;return new j(r,o,s)}}updateChild(e,t){const i=K(e);if(i===null)return t;{V(K(e)!==".priority"||jt(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(re(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,r=0,s=!0;if(this.forEachChild(he,(o,l)=>{t[o]=l.val(e),i++,s&&j.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wu(this.getPriority().val())+":"),this.forEachChild(he,(t,i)=>{const r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Jh(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new Y(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Y(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xi?-1:0}withIndex(e){if(e===Ln||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ln||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(he),r=t.getIterator(he);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ln?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sv extends j{constructor(){super(new Ue(Zo),j.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const Xi=new sv;Object.defineProperties(Y,{MIN:{value:new Y(Bn,j.EMPTY_NODE)},MAX:{value:new Y(un,Xi)}});yu.__EMPTY_NODE=j.EMPTY_NODE;Ee.__childrenNodeConstructor=j;Q_(Xi);ev(Xi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=!0;function de(n,e=null){if(n===null)return j.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ee(t,de(e))}if(!(n instanceof Array)&&rv){const t=[];let i=!1;if(xe(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=de(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new Y(o,c)))}}),t.length===0)return j.EMPTY_NODE;const s=Gs(t,X_,o=>o.name,Zo);if(i){const o=Gs(t,he.getCompare());return new j(s,de(e),new dt({".priority":o},{".priority":he}))}else return new j(s,de(e),dt.Default)}else{let t=j.EMPTY_NODE;return xe(n,(i,r)=>{if(at(n,i)&&i.substring(0,1)!=="."){const s=de(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(de(e))}}Z_(de);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends hr{constructor(e){super(),this.indexPath_=e,V(!q(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?_n(e.name,t.name):s}makePost(e,t){const i=de(e),r=j.EMPTY_NODE.updateChild(this.indexPath_,i);return new Y(t,r)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,Xi);return new Y(un,e)}toString(){return Fi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av extends hr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?_n(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,t){const i=de(e);return new Y(t,i)}toString(){return".value"}}const lv=new av;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(n){return{type:"value",snapshotNode:n}}function Hn(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Ui(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Vi(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function cv(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(r).equals(i.getChild(r))&&l.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Ui(t,l)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Hn(t,i)):o.trackChildChange(Vi(t,i,l))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(he,(r,s)=>{t.hasChild(r)||i.trackChildChange(Ui(r,s))}),t.isLeafNode()||t.forEachChild(he,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(Vi(r,s,o))}else i.trackChildChange(Hn(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.indexedFilter_=new ea(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bi.getStartPost_(e),this.endPost_=Bi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new Y(t,i))||(i=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=j.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(j.EMPTY_NODE);const s=this;return t.forEachChild(he,(o,l)=>{s.matches(new Y(o,l))||(r=r.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Bi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new Y(t,i))||(i=j.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))r=r.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:r=r.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){const p=this.index_.getCompare();o=(f,h)=>p(h,f)}else o=this.index_.getCompare();const l=e;V(l.numChildren()===this.limit_,"");const c=new Y(t,i),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(l.hasChild(t)){const p=l.getImmediateChild(t);let f=r.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===t||l.hasChild(f.name));)f=r.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,c);if(d&&!i.isEmpty()&&h>=0)return s?.trackChildChange(Vi(t,i,p)),l.updateImmediateChild(t,i);{s?.trackChildChange(Ui(t,p));const _=l.updateImmediateChild(t,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s?.trackChildChange(Hn(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return i.isEmpty()?e:d&&o(u,c)>=0?(s!=null&&(s.trackChildChange(Ui(u.name,u.node)),s.trackChildChange(Hn(t,i))),l.updateImmediateChild(t,i).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=he}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bn}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:un}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===he}copy(){const e=new ta;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uv(n){return n.loadsAllData()?new ea(n.getIndex()):n.hasLimit()?new hv(n):new Bi(n)}function Sc(n){const e={};if(n.isDefault())return e;let t;if(n.index_===he?t="$priority":n.index_===lv?t="$value":n.index_===Ln?t="$key":(V(n.index_ instanceof ov,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=ye(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=ye(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+ye(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=ye(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+ye(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ec(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==he&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends gu{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Ji("p:rest:"),this.listens_={}}listen(e,t,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=$s.getListenId_(e,i),l={};this.listens_[o]=l;const c=Sc(e._queryParams);this.restRequest_(s+".json",c,(u,d)=>{let p=d;if(u===404&&(p=null,u=null),u===null&&this.onDataUpdate_(s,p,!1,i),Fn(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",r(f,null)}})}unlisten(e,t){const i=$s.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Sc(e._queryParams),i=e._path.toString(),r=new nt;return this.restRequest_(i+".json",t,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(i,l,!1,null),r.resolve(l)):r.reject(new Error(l))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Kn(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Ni(l.responseText)}catch{Oe("Failed to parse JSON response for "+o+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&Oe("Got unsuccessful REST response for "+o+" Status: "+l.status),i(l.status);i=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(){return{value:null,children:new Map}}function Jn(n,e,t){if(q(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=K(e);n.children.has(i)||n.children.set(i,zs());const r=n.children.get(i);e=re(e),Jn(r,e,t)}}function _o(n,e){if(q(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{const t=n.value;return n.value=null,t.forEachChild(he,(i,r)=>{Jn(n,new ie(i),r)}),_o(n,e)}}else if(n.children.size>0){const t=K(e);return e=re(e),n.children.has(t)&&_o(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function vo(n,e,t){n.value!==null?t(e,n.value):fv(n,(i,r)=>{const s=new ie(e.toString()+"/"+i);vo(r,s,t)})}function fv(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&xe(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=10*1e3,gv=30*1e3,mv=300*1e3;class _v{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pv(e);const i=Cc+(gv-Cc)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;xe(e,(r,s)=>{s>0&&at(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*mv))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Je||(Je={}));function na(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ia(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sa(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Je.ACK_USER_WRITE,this.source=na()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ie(e));return new Ks(te(),t,this.revert)}}else return V(K(this.path)===e,"operationForChild called for unrelated child."),new Ks(re(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.source=e,this.path=t,this.type=Je.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Hi(this.source,te()):new Hi(this.source,re(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Je.OVERWRITE}operationForChild(e){return q(this.path)?new dn(this.source,te(),this.snap.getImmediateChild(e)):new dn(this.source,re(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Je.MERGE}operationForChild(e){if(q(this.path)){const t=this.children.subtree(new ie(e));return t.isEmpty()?null:t.value?new dn(this.source,te(),t.value):new Wn(this.source,te(),t)}else return V(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wn(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const t=K(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yv(n,e,t,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(cv(o.childName,o.snapshotNode))}),wi(n,r,"child_removed",e,i,t),wi(n,r,"child_added",e,i,t),wi(n,r,"child_moved",s,i,t),wi(n,r,"child_changed",e,i,t),wi(n,r,"value",e,i,t),r}function wi(n,e,t,i,r,s){const o=i.filter(l=>l.type===t);o.sort((l,c)=>Iv(n,l,c)),o.forEach(l=>{const c=wv(n,l,s);r.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(c,n.query_))})})}function wv(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Iv(n,e,t){if(e.childName==null||t.childName==null)throw zn("Should only compare child_ events.");const i=new Y(e.childName,e.snapshotNode),r=new Y(t.childName,t.snapshotNode);return n.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n,e){return{eventCache:n,serverCache:e}}function bi(n,e,t,i){return ur(new Gt(e,t,i),n.serverCache)}function Tu(n,e,t,i){return ur(n.eventCache,new Gt(e,t,i))}function qs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function fn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr;const Sv=()=>(Zr||(Zr=new Ue(o_)),Zr);class ae{static fromObject(e){let t=new ae(null);return xe(e,(i,r)=>{t=t.set(new ie(i),r)}),t}constructor(e,t=Sv()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:te(),value:this.value};if(q(e))return null;{const i=K(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(re(e),t);return s!=null?{path:ce(new ie(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const t=K(e),i=this.children.get(t);return i!==null?i.subtree(re(e)):new ae(null)}}set(e,t){if(q(e))return new ae(t,this.children);{const i=K(e),s=(this.children.get(i)||new ae(null)).set(re(e),t),o=this.children.insert(i,s);return new ae(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const t=K(e),i=this.children.get(t);if(i){const r=i.remove(re(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const t=K(e),i=this.children.get(t);return i?i.get(re(e)):null}}setTree(e,t){if(q(e))return t;{const i=K(e),s=(this.children.get(i)||new ae(null)).setTree(re(e),t);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new ae(this.value,o)}}fold(e){return this.fold_(te(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(ce(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,te(),t)}findOnPath_(e,t,i){const r=this.value?i(t,this.value):!1;if(r)return r;if(q(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(re(e),ce(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,te(),t)}foreachOnPath_(e,t,i){if(q(e))return this;{this.value&&i(t,this.value);const r=K(e),s=this.children.get(r);return s?s.foreachOnPath_(re(e),ce(t,r),i):new ae(null)}}foreach(e){this.foreach_(te(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(ce(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ae(null))}}function Ri(n,e,t){if(q(e))return new Xe(new ae(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Me(r,e);return s=s.updateChild(o,t),new Xe(n.writeTree_.set(r,s))}else{const r=new ae(t),s=n.writeTree_.setTree(e,r);return new Xe(s)}}}function yo(n,e,t){let i=n;return xe(t,(r,s)=>{i=Ri(i,ce(e,r),s)}),i}function Tc(n,e){if(q(e))return Xe.empty();{const t=n.writeTree_.setTree(e,new ae(null));return new Xe(t)}}function wo(n,e){return vn(n,e)!=null}function vn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Me(t.path,e)):null}function xc(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(he,(i,r)=>{e.push(new Y(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new Y(i,r.value))}),e}function Ft(n,e){if(q(e))return n;{const t=vn(n,e);return t!=null?new Xe(new ae(t)):new Xe(n.writeTree_.subtree(e))}}function Io(n){return n.writeTree_.isEmpty()}function jn(n,e){return xu(te(),n.writeTree_,e)}function xu(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(V(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=xu(ce(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ce(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n,e){return Ru(e,n)}function Ev(n,e,t,i,r){V(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=Ri(n.visibleWrites,e,t)),n.lastWriteId=i}function Cv(n,e,t,i){V(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=yo(n.visibleWrites,e,t),n.lastWriteId=i}function Tv(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function xv(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);V(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&Av(l,i.path)?r=!1:Ge(i.path,l.path)&&(s=!0)),o--}if(r){if(s)return Pv(n),!0;if(i.snap)n.visibleWrites=Tc(n.visibleWrites,i.path);else{const l=i.children;xe(l,c=>{n.visibleWrites=Tc(n.visibleWrites,ce(i.path,c))})}return!0}else return!1}function Av(n,e){if(n.snap)return Ge(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ge(ce(n.path,t),e))return!0;return!1}function Pv(n){n.visibleWrites=Au(n.allWrites,bv,te()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function bv(n){return n.visible}function Au(n,e,t){let i=Xe.empty();for(let r=0;r<n.length;++r){const s=n[r];if(e(s)){const o=s.path;let l;if(s.snap)Ge(t,o)?(l=Me(t,o),i=Ri(i,l,s.snap)):Ge(o,t)&&(l=Me(o,t),i=Ri(i,te(),s.snap.getChild(l)));else if(s.children){if(Ge(t,o))l=Me(t,o),i=yo(i,l,s.children);else if(Ge(o,t))if(l=Me(o,t),q(l))i=yo(i,te(),s.children);else{const c=Fn(s.children,K(l));if(c){const u=c.getChild(re(l));i=Ri(i,te(),u)}}}else throw zn("WriteRecord should have .snap or .children")}}return i}function Pu(n,e,t,i,r){if(!i&&!r){const s=vn(n.visibleWrites,e);if(s!=null)return s;{const o=Ft(n.visibleWrites,e);if(Io(o))return t;if(t==null&&!wo(o,te()))return null;{const l=t||j.EMPTY_NODE;return jn(o,l)}}}else{const s=Ft(n.visibleWrites,e);if(!r&&Io(s))return t;if(!r&&t==null&&!wo(s,te()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Ge(u.path,e)||Ge(e,u.path))},l=Au(n.allWrites,o,e),c=t||j.EMPTY_NODE;return jn(l,c)}}}function Rv(n,e,t){let i=j.EMPTY_NODE;const r=vn(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(he,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){const s=Ft(n.visibleWrites,e);return t.forEachChild(he,(o,l)=>{const c=jn(Ft(s,new ie(o)),l);i=i.updateImmediateChild(o,c)}),xc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Ft(n.visibleWrites,e);return xc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function kv(n,e,t,i,r){V(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,t);if(wo(n.visibleWrites,s))return null;{const o=Ft(n.visibleWrites,s);return Io(o)?r.getChild(t):jn(o,r.getChild(t))}}function Nv(n,e,t,i){const r=ce(e,t),s=vn(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){const o=Ft(n.visibleWrites,r);return jn(o,i.getNode().getImmediateChild(t))}else return null}function Dv(n,e){return vn(n.visibleWrites,e)}function Mv(n,e,t,i,r,s,o){let l;const c=Ft(n.visibleWrites,e),u=vn(c,te());if(u!=null)l=u;else if(t!=null)l=jn(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],p=o.getCompare(),f=s?l.getReverseIteratorFrom(i,o):l.getIteratorFrom(i,o);let h=f.getNext();for(;h&&d.length<r;)p(h,i)!==0&&d.push(h),h=f.getNext();return d}else return[]}function Ov(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function Ys(n,e,t,i){return Pu(n.writeTree,n.treePath,e,t,i)}function ra(n,e){return Rv(n.writeTree,n.treePath,e)}function Ac(n,e,t,i){return kv(n.writeTree,n.treePath,e,t,i)}function Js(n,e){return Dv(n.writeTree,ce(n.treePath,e))}function Lv(n,e,t,i,r,s){return Mv(n.writeTree,n.treePath,e,t,i,r,s)}function oa(n,e,t){return Nv(n.writeTree,n.treePath,e,t)}function bu(n,e){return Ru(ce(n.treePath,e),n.writeTree)}function Ru(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;V(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),V(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,Vi(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,Ui(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,Hn(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,Vi(i,e.snapshotNode,r.oldSnap));else throw zn("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const ku=new Uv;class aa{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return oa(this.writes_,e,i)}}getChildAfterChild(e,t,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fn(this.viewCache_),s=Lv(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n){return{filter:n}}function Bv(n,e){V(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Hv(n,e,t,i,r){const s=new Fv;let o,l;if(t.type===Je.OVERWRITE){const u=t;u.source.fromUser?o=So(n,e,u.path,u.snap,i,r,s):(V(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!q(u.path),o=Xs(n,e,u.path,u.snap,i,r,l,s))}else if(t.type===Je.MERGE){const u=t;u.source.fromUser?o=jv(n,e,u.path,u.children,i,r,s):(V(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Eo(n,e,u.path,u.children,i,r,l,s))}else if(t.type===Je.ACK_USER_WRITE){const u=t;u.revert?o=zv(n,e,u.path,i,r,s):o=Gv(n,e,u.path,u.affectedTree,i,r,s)}else if(t.type===Je.LISTEN_COMPLETE)o=$v(n,e,t.path,i,s);else throw zn("Unknown operation type: "+t.type);const c=s.getChanges();return Wv(e,o,c),{viewCache:o,changes:c}}function Wv(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=qs(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Cu(qs(e)))}}function Nu(n,e,t,i,r,s){const o=e.eventCache;if(Js(i,t)!=null)return e;{let l,c;if(q(t))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=fn(e),d=u instanceof j?u:j.EMPTY_NODE,p=ra(i,d);l=n.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const u=Ys(i,fn(e));l=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(t);if(u===".priority"){V(jt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const p=Ac(i,t,d,c);p!=null?l=n.filter.updatePriority(d,p):l=o.getNode()}else{const d=re(t);let p;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const f=Ac(i,t,o.getNode(),c);f!=null?p=o.getNode().getImmediateChild(u).updateChild(d,f):p=o.getNode().getImmediateChild(u)}else p=oa(i,u,e.serverCache);p!=null?l=n.filter.updateChild(o.getNode(),u,p,d,r,s):l=o.getNode()}}return bi(e,l,o.isFullyInitialized()||q(t),n.filter.filtersNodes())}}function Xs(n,e,t,i,r,s,o,l){const c=e.serverCache;let u;const d=o?n.filter:n.filter.getIndexedFilter();if(q(t))u=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){const h=c.getNode().updateChild(t,i);u=d.updateFullNode(c.getNode(),h,null)}else{const h=K(t);if(!c.isCompleteForPath(t)&&jt(t)>1)return e;const m=re(t),w=c.getNode().getImmediateChild(h).updateChild(m,i);h===".priority"?u=d.updatePriority(c.getNode(),w):u=d.updateChild(c.getNode(),h,w,m,ku,null)}const p=Tu(e,u,c.isFullyInitialized()||q(t),d.filtersNodes()),f=new aa(r,p,s);return Nu(n,p,t,r,f,l)}function So(n,e,t,i,r,s,o){const l=e.eventCache;let c,u;const d=new aa(r,e,s);if(q(t))u=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=bi(e,u,!0,n.filter.filtersNodes());else{const p=K(t);if(p===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),i),c=bi(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=re(t),h=l.getNode().getImmediateChild(p);let m;if(q(f))m=i;else{const _=d.getCompleteChild(p);_!=null?Jo(f)===".priority"&&_.getChild(_u(f)).isEmpty()?m=_:m=_.updateChild(f,i):m=j.EMPTY_NODE}if(h.equals(m))c=e;else{const _=n.filter.updateChild(l.getNode(),p,m,f,d,o);c=bi(e,_,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Pc(n,e){return n.eventCache.isCompleteForChild(e)}function jv(n,e,t,i,r,s,o){let l=e;return i.foreach((c,u)=>{const d=ce(t,c);Pc(e,K(d))&&(l=So(n,l,d,u,r,s,o))}),i.foreach((c,u)=>{const d=ce(t,c);Pc(e,K(d))||(l=So(n,l,d,u,r,s,o))}),l}function bc(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function Eo(n,e,t,i,r,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;q(t)?u=i:u=new ae(null).setTree(t,i);const d=e.serverCache.getNode();return u.children.inorderTraversal((p,f)=>{if(d.hasChild(p)){const h=e.serverCache.getNode().getImmediateChild(p),m=bc(n,h,f);c=Xs(n,c,new ie(p),m,r,s,o,l)}}),u.children.inorderTraversal((p,f)=>{const h=!e.serverCache.isCompleteForChild(p)&&f.value===null;if(!d.hasChild(p)&&!h){const m=e.serverCache.getNode().getImmediateChild(p),_=bc(n,m,f);c=Xs(n,c,new ie(p),_,r,s,o,l)}}),c}function Gv(n,e,t,i,r,s,o){if(Js(r,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(q(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Xs(n,e,t,c.getNode().getChild(t),r,s,l,o);if(q(t)){let u=new ae(null);return c.getNode().forEachChild(Ln,(d,p)=>{u=u.set(new ie(d),p)}),Eo(n,e,t,u,r,s,l,o)}else return e}else{let u=new ae(null);return i.foreach((d,p)=>{const f=ce(t,d);c.isCompleteForPath(f)&&(u=u.set(d,c.getNode().getChild(f)))}),Eo(n,e,t,u,r,s,l,o)}}function $v(n,e,t,i,r){const s=e.serverCache,o=Tu(e,s.getNode(),s.isFullyInitialized()||q(t),s.isFiltered());return Nu(n,o,t,i,ku,r)}function zv(n,e,t,i,r,s){let o;if(Js(i,t)!=null)return e;{const l=new aa(i,e,r),c=e.eventCache.getNode();let u;if(q(t)||K(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Ys(i,fn(e));else{const p=e.serverCache.getNode();V(p instanceof j,"serverChildren would be complete if leaf node"),d=ra(i,p)}d=d,u=n.filter.updateFullNode(c,d,s)}else{const d=K(t);let p=oa(i,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=c.getImmediateChild(d)),p!=null?u=n.filter.updateChild(c,d,p,re(t),l,s):e.eventCache.getNode().hasChild(d)?u=n.filter.updateChild(c,d,j.EMPTY_NODE,re(t),l,s):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ys(i,fn(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Js(i,te())!=null,bi(e,u,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new ea(i.getIndex()),s=uv(i);this.processor_=Vv(s);const o=t.serverCache,l=t.eventCache,c=r.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,l.getNode(),null),d=new Gt(c,o.isFullyInitialized(),r.filtersNodes()),p=new Gt(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ur(p,d),this.eventGenerator_=new vv(this.query_)}get query(){return this.query_}}function qv(n){return n.viewCache_.serverCache.getNode()}function Yv(n){return qs(n.viewCache_)}function Jv(n,e){const t=fn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!q(e)&&!t.getImmediateChild(K(e)).isEmpty())?t.getChild(e):null}function Rc(n){return n.eventRegistrations_.length===0}function Xv(n,e){n.eventRegistrations_.push(e)}function kc(n,e,t){const i=[];if(t){V(e==null,"A cancel should cancel all event registrations.");const r=n.query._path;n.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){const o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Nc(n,e,t,i){e.type===Je.MERGE&&e.source.queryId!==null&&(V(fn(n.viewCache_),"We should always have a full cache before handling merges"),V(qs(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,s=Hv(n.processor_,r,e,t,i);return Bv(n.processor_,s.viewCache),V(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,Du(n,s.changes,s.viewCache.eventCache.getNode(),null)}function Qv(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(he,(s,o)=>{i.push(Hn(s,o))}),t.isFullyInitialized()&&i.push(Cu(t.getNode())),Du(n,i,t.getNode(),e)}function Du(n,e,t,i){const r=i?[i]:n.eventRegistrations_;return yv(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;class Mu{constructor(){this.views=new Map}}function Zv(n){V(!Qs,"__referenceConstructor has already been defined"),Qs=n}function ey(){return V(Qs,"Reference.ts has not been loaded"),Qs}function ty(n){return n.views.size===0}function la(n,e,t,i){const r=e.source.queryId;if(r!==null){const s=n.views.get(r);return V(s!=null,"SyncTree gave us an op for an invalid query."),Nc(s,e,t,i)}else{let s=[];for(const o of n.views.values())s=s.concat(Nc(o,e,t,i));return s}}function Ou(n,e,t,i,r){const s=e._queryIdentifier,o=n.views.get(s);if(!o){let l=Ys(t,r?i:null),c=!1;l?c=!0:i instanceof j?(l=ra(t,i),c=!1):(l=j.EMPTY_NODE,c=!1);const u=ur(new Gt(l,c,!1),new Gt(i,r,!1));return new Kv(e,u)}return o}function ny(n,e,t,i,r,s){const o=Ou(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Xv(o,t),Qv(o,t)}function iy(n,e,t,i){const r=e._queryIdentifier,s=[];let o=[];const l=$t(n);if(r==="default")for(const[c,u]of n.views.entries())o=o.concat(kc(u,t,i)),Rc(u)&&(n.views.delete(c),u.query._queryParams.loadsAllData()||s.push(u.query));else{const c=n.views.get(r);c&&(o=o.concat(kc(c,t,i)),Rc(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return l&&!$t(n)&&s.push(new(ey())(e._repo,e._path)),{removed:s,events:o}}function Lu(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ut(n,e){let t=null;for(const i of n.views.values())t=t||Jv(i,e);return t}function Fu(n,e){if(e._queryParams.loadsAllData())return fr(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Uu(n,e){return Fu(n,e)!=null}function $t(n){return fr(n)!=null}function fr(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;function sy(n){V(!Zs,"__referenceConstructor has already been defined"),Zs=n}function ry(){return V(Zs,"Reference.ts has not been loaded"),Zs}let oy=1;class Dc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ae(null),this.pendingWriteTree_=Ov(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Vu(n,e,t,i,r){return Ev(n.pendingWriteTree_,e,t,i,r),r?Xn(n,new dn(na(),e,t)):[]}function ay(n,e,t,i){Cv(n.pendingWriteTree_,e,t,i);const r=ae.fromObject(t);return Xn(n,new Wn(na(),e,r))}function Dt(n,e,t=!1){const i=Tv(n.pendingWriteTree_,e);if(xv(n.pendingWriteTree_,e)){let s=new ae(null);return i.snap!=null?s=s.set(te(),!0):xe(i.children,o=>{s=s.set(new ie(o),!0)}),Xn(n,new Ks(i.path,s,t))}else return[]}function Qi(n,e,t){return Xn(n,new dn(ia(),e,t))}function ly(n,e,t){const i=ae.fromObject(t);return Xn(n,new Wn(ia(),e,i))}function cy(n,e){return Xn(n,new Hi(ia(),e))}function hy(n,e,t){const i=ha(n,t);if(i){const r=ua(i),s=r.path,o=r.queryId,l=Me(s,e),c=new Hi(sa(o),l);return da(n,s,c)}else return[]}function er(n,e,t,i,r=!1){const s=e._path,o=n.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Uu(o,e))){const c=iy(o,e,t,i);ty(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));const u=c.removed;if(l=c.events,!r){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,p=n.syncPointTree_.findOnPath(s,(f,h)=>$t(h));if(d&&!p){const f=n.syncPointTree_.subtree(s);if(!f.isEmpty()){const h=fy(f);for(let m=0;m<h.length;++m){const _=h[m],w=_.query,R=ju(n,_);n.listenProvider_.startListening(ki(w),Wi(n,w),R.hashFn,R.onComplete)}}}!p&&u.length>0&&!i&&(d?n.listenProvider_.stopListening(ki(e),null):u.forEach(f=>{const h=n.queryToTagMap.get(pr(f));n.listenProvider_.stopListening(ki(f),h)}))}py(n,u)}return l}function Bu(n,e,t,i){const r=ha(n,i);if(r!=null){const s=ua(r),o=s.path,l=s.queryId,c=Me(o,e),u=new dn(sa(l),c,t);return da(n,o,u)}else return[]}function uy(n,e,t,i){const r=ha(n,i);if(r){const s=ua(r),o=s.path,l=s.queryId,c=Me(o,e),u=ae.fromObject(t),d=new Wn(sa(l),c,u);return da(n,o,d)}else return[]}function Co(n,e,t,i=!1){const r=e._path;let s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(f,h)=>{const m=Me(f,r);s=s||Ut(h,m),o=o||$t(h)});let l=n.syncPointTree_.get(r);l?(o=o||$t(l),s=s||Ut(l,te())):(l=new Mu,n.syncPointTree_=n.syncPointTree_.set(r,l));let c;s!=null?c=!0:(c=!1,s=j.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((h,m)=>{const _=Ut(m,te());_&&(s=s.updateImmediateChild(h,_))}));const u=Uu(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=pr(e);V(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=gy();n.queryToTagMap.set(f,h),n.tagToQueryMap.set(h,f)}const d=dr(n.pendingWriteTree_,r);let p=ny(l,e,t,d,s,c);if(!u&&!o&&!i){const f=Fu(l,e);p=p.concat(my(n,e,f))}return p}function ca(n,e,t){const r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Me(o,e),u=Ut(l,c);if(u)return u});return Pu(r,e,s,t,!0)}function dy(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(u,d)=>{const p=Me(u,t);i=i||Ut(d,p)});let r=n.syncPointTree_.get(t);r?i=i||Ut(r,te()):(r=new Mu,n.syncPointTree_=n.syncPointTree_.set(t,r));const s=i!=null,o=s?new Gt(i,!0,!1):null,l=dr(n.pendingWriteTree_,e._path),c=Ou(r,e,l,s?o.getNode():j.EMPTY_NODE,s);return Yv(c)}function Xn(n,e){return Hu(e,n.syncPointTree_,null,dr(n.pendingWriteTree_,te()))}function Hu(n,e,t,i){if(q(n.path))return Wu(n,e,t,i);{const r=e.get(te());t==null&&r!=null&&(t=Ut(r,te()));let s=[];const o=K(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const u=t?t.getImmediateChild(o):null,d=bu(i,o);s=s.concat(Hu(l,c,u,d))}return r&&(s=s.concat(la(r,n,i,t))),s}}function Wu(n,e,t,i){const r=e.get(te());t==null&&r!=null&&(t=Ut(r,te()));let s=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,u=bu(i,o),d=n.operationForChild(o);d&&(s=s.concat(Wu(d,l,c,u)))}),r&&(s=s.concat(la(r,n,i,t))),s}function ju(n,e){const t=e.query,i=Wi(n,t);return{hashFn:()=>(qv(e)||j.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?hy(n,t._path,i):cy(n,t._path);{const s=c_(r,t);return er(n,t,null,s)}}}}function Wi(n,e){const t=pr(e);return n.queryToTagMap.get(t)}function pr(n){return n._path.toString()+"$"+n._queryIdentifier}function ha(n,e){return n.tagToQueryMap.get(e)}function ua(n){const e=n.indexOf("$");return V(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ie(n.substr(0,e))}}function da(n,e,t){const i=n.syncPointTree_.get(e);V(i,"Missing sync point for query tag that we're tracking");const r=dr(n.pendingWriteTree_,e);return la(i,t,r,null)}function fy(n){return n.fold((e,t,i)=>{if(t&&$t(t))return[fr(t)];{let r=[];return t&&(r=Lu(t)),xe(i,(s,o)=>{r=r.concat(o)}),r}})}function ki(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ry())(n._repo,n._path):n}function py(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const r=pr(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function gy(){return oy++}function my(n,e,t){const i=e._path,r=Wi(n,e),s=ju(n,t),o=n.listenProvider_.startListening(ki(e),r,s.hashFn,s.onComplete),l=n.syncPointTree_.subtree(i);if(r)V(!$t(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((u,d,p)=>{if(!q(u)&&d&&$t(d))return[fr(d).query];{let f=[];return d&&(f=f.concat(Lu(d).map(h=>h.query))),xe(p,(h,m)=>{f=f.concat(m)}),f}});for(let u=0;u<c.length;++u){const d=c[u];n.listenProvider_.stopListening(ki(d),Wi(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fa(t)}node(){return this.node_}}class pa{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ce(this.path_,e);return new pa(this.syncTree_,t)}node(){return ca(this.syncTree_,this.path_)}}const _y=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Mc=function(n,e,t){if(!n||typeof n!="object")return n;if(V(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return vy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return yy(n[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},vy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:V(!1,"Unexpected server value: "+n)}},yy=function(n,e,t){n.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&V(!1,"Unexpected increment value: "+i);const r=e.node();if(V(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},Gu=function(n,e,t,i){return ga(e,new pa(t,n),i)},$u=function(n,e,t){return ga(n,new fa(e),t)};function ga(n,e,t){const i=n.getPriority().val(),r=Mc(i,e.getImmediateChild(".priority"),t);let s;if(n.isLeafNode()){const o=n,l=Mc(o.getValue(),e,t);return l!==o.getValue()||r!==o.getPriority().val()?new Ee(l,de(r)):n}else{const o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Ee(r))),o.forEachChild(he,(l,c)=>{const u=ga(c,e.getImmediateChild(l),t);u!==c&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function _a(n,e){let t=e instanceof ie?e:new ie(e),i=n,r=K(t);for(;r!==null;){const s=Fn(i.node.children,r)||{children:{},childCount:0};i=new ma(r,i,s),t=re(t),r=K(t)}return i}function Qn(n){return n.node.value}function zu(n,e){n.node.value=e,To(n)}function Ku(n){return n.node.childCount>0}function wy(n){return Qn(n)===void 0&&!Ku(n)}function gr(n,e){xe(n.node.children,(t,i)=>{e(new ma(t,n,i))})}function qu(n,e,t,i){t&&e(n),gr(n,r=>{qu(r,e,!0)})}function Iy(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Zi(n){return new ie(n.parent===null?n.name:Zi(n.parent)+"/"+n.name)}function To(n){n.parent!==null&&Sy(n.parent,n.name,n)}function Sy(n,e,t){const i=wy(t),r=at(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,To(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,To(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=/[\[\].#$\/\u0000-\u001F\u007F]/,Cy=/[\[\].#$\u0000-\u001F\u007F]/,eo=10*1024*1024,va=function(n){return typeof n=="string"&&n.length!==0&&!Ey.test(n)},Yu=function(n){return typeof n=="string"&&n.length!==0&&!Cy.test(n)},Ty=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yu(n)},Ju=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!cr(n)||n&&typeof n=="object"&&at(n,".sv")},tr=function(n,e,t,i){i&&e===void 0||mr(Un(n,"value"),e,t)},mr=function(n,e,t){const i=t instanceof ie?new j_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Zt(i));if(typeof e=="function")throw new Error(n+"contains a function "+Zt(i)+" with contents = "+e.toString());if(cr(e))throw new Error(n+"contains "+e.toString()+" "+Zt(i));if(typeof e=="string"&&e.length>eo/3&&nr(e)>eo)throw new Error(n+"contains a string greater than "+eo+" utf8 bytes "+Zt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(xe(e,(o,l)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!va(o)))throw new Error(n+" contains an invalid key ("+o+") "+Zt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);G_(i,o),mr(n,l,i),$_(i)}),r&&s)throw new Error(n+' contains ".value" child '+Zt(i)+" in addition to actual children.")}},xy=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const s=Fi(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!va(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(W_);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&Ge(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Xu=function(n,e,t,i){const r=Un(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];xe(e,(o,l)=>{const c=new ie(o);if(mr(r,l,ce(t,c)),Jo(c)===".priority"&&!Ju(l))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),xy(r,s)},Ay=function(n,e,t){if(cr(e))throw new Error(Un(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ju(e))throw new Error(Un(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Qu=function(n,e,t,i){if(!Yu(t))throw new Error(Un(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Py=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Qu(n,e,t)},rn=function(n,e){if(K(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},by=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!va(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Ty(t))throw new Error(Un(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function _r(n,e){let t=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();t!==null&&!Xo(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function Zu(n,e,t){_r(n,t),ed(n,i=>Xo(i,e))}function $e(n,e,t){_r(n,t),ed(n,i=>Ge(i,e)||Ge(e,i))}function ed(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const r=n.eventLists_[i];if(r){const s=r.path;e(s)?(ky(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function ky(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ai&&Te("event: "+t.toString()),Yn(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="repo_interrupt",Dy=25;class My{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ry,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zs(),this.transactionQueueTree_=new ma,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Oy(n,e,t){if(n.stats_=qo(n.repoInfo_),n.forceRestClient_||f_())n.server_=new $s(n.repoInfo_,(i,r,s,o)=>{Oc(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Lc(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ye(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ft(n.repoInfo_,e,(i,r,s,o)=>{Oc(n,i,r,s,o)},i=>{Lc(n,i)},i=>{Ly(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=v_(n.repoInfo_,()=>new _v(n.stats_,n.server_)),n.infoData_=new dv,n.infoSyncTree_=new Dc({startListening:(i,r,s,o)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=Qi(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ya(n,"connected",!1),n.serverSyncTree_=new Dc({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(l,c)=>{const u=o(l,c);$e(n.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function td(n){const t=n.infoData_.getNode(new ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function vr(n){return _y({timestamp:td(n)})}function Oc(n,e,t,i,r){n.dataUpdateCount++;const s=new ie(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){const c=Ds(t,u=>de(u));o=uy(n.serverSyncTree_,s,c,r)}else{const c=de(t);o=Bu(n.serverSyncTree_,s,c,r)}else if(i){const c=Ds(t,u=>de(u));o=ly(n.serverSyncTree_,s,c)}else{const c=de(t);o=Qi(n.serverSyncTree_,s,c)}let l=s;o.length>0&&(l=Gn(n,s)),$e(n.eventQueue_,l,o)}function Lc(n,e){ya(n,"connected",e),e===!1&&By(n)}function Ly(n,e){xe(e,(t,i)=>{ya(n,t,i)})}function ya(n,e,t){const i=new ie("/.info/"+e),r=de(t);n.infoData_.updateSnapshot(i,r);const s=Qi(n.infoSyncTree_,i,r);$e(n.eventQueue_,i,s)}function wa(n){return n.nextWriteId_++}function Fy(n,e,t){const i=dy(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(r=>{const s=de(r).withIndex(e._queryParams.getIndex());Co(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Qi(n.serverSyncTree_,e._path,s);else{const l=Wi(n.serverSyncTree_,e);o=Bu(n.serverSyncTree_,e._path,s,l)}return $e(n.eventQueue_,e._path,o),er(n.serverSyncTree_,e,t,null,!0),s},r=>(es(n,"get for query "+ye(e)+" failed: "+r),Promise.reject(new Error(r))))}function Uy(n,e,t,i,r){es(n,"set",{path:e.toString(),value:t,priority:i});const s=vr(n),o=de(t,i),l=ca(n.serverSyncTree_,e),c=$u(o,l,s),u=wa(n),d=Vu(n.serverSyncTree_,e,c,u,!0);_r(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,h)=>{const m=f==="ok";m||Oe("set at "+e+" failed: "+f);const _=Dt(n.serverSyncTree_,u,!m);$e(n.eventQueue_,e,_),zt(n,r,f,h)});const p=Sa(n,e);Gn(n,p),$e(n.eventQueue_,p,[])}function Vy(n,e,t,i){es(n,"update",{path:e.toString(),value:t});let r=!0;const s=vr(n),o={};if(xe(t,(l,c)=>{r=!1,o[l]=Gu(ce(e,l),de(c),n.serverSyncTree_,s)}),r)Te("update() called with empty data.  Don't do anything."),zt(n,i,"ok",void 0);else{const l=wa(n),c=ay(n.serverSyncTree_,e,o,l);_r(n.eventQueue_,c),n.server_.merge(e.toString(),t,(u,d)=>{const p=u==="ok";p||Oe("update at "+e+" failed: "+u);const f=Dt(n.serverSyncTree_,l,!p),h=f.length>0?Gn(n,e):e;$e(n.eventQueue_,h,f),zt(n,i,u,d)}),xe(t,u=>{const d=Sa(n,ce(e,u));Gn(n,d)}),$e(n.eventQueue_,e,[])}}function By(n){es(n,"onDisconnectEvents");const e=vr(n),t=zs();vo(n.onDisconnect_,te(),(r,s)=>{const o=Gu(r,s,n.serverSyncTree_,e);Jn(t,r,o)});let i=[];vo(t,te(),(r,s)=>{i=i.concat(Qi(n.serverSyncTree_,r,s));const o=Sa(n,r);Gn(n,o)}),n.onDisconnect_=zs(),$e(n.eventQueue_,te(),i)}function Hy(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&_o(n.onDisconnect_,e),zt(n,t,i,r)})}function Fc(n,e,t,i){const r=de(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Jn(n.onDisconnect_,e,r),zt(n,i,s,o)})}function Wy(n,e,t,i,r){const s=de(t,i);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,l)=>{o==="ok"&&Jn(n.onDisconnect_,e,s),zt(n,r,o,l)})}function jy(n,e,t,i){if(Ns(t)){Te("onDisconnect().update() called with empty data.  Don't do anything."),zt(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,s)=>{r==="ok"&&xe(t,(o,l)=>{const c=de(l);Jn(n.onDisconnect_,ce(e,o),c)}),zt(n,i,r,s)})}function Gy(n,e,t){let i;K(e._path)===".info"?i=Co(n.infoSyncTree_,e,t):i=Co(n.serverSyncTree_,e,t),Zu(n.eventQueue_,e._path,i)}function $y(n,e,t){let i;K(e._path)===".info"?i=er(n.infoSyncTree_,e,t):i=er(n.serverSyncTree_,e,t),Zu(n.eventQueue_,e._path,i)}function zy(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Ny)}function es(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Te(t,...e)}function zt(n,e,t,i){e&&Yn(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function nd(n,e,t){return ca(n.serverSyncTree_,e,t)||j.EMPTY_NODE}function Ia(n,e=n.transactionQueueTree_){if(e||yr(n,e),Qn(e)){const t=sd(n,e);V(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&Ky(n,Zi(e),t)}else Ku(e)&&gr(e,t=>{Ia(n,t)})}function Ky(n,e,t){const i=t.map(u=>u.currentWriteId),r=nd(n,e,i);let s=r;const o=r.hash();for(let u=0;u<t.length;u++){const d=t[u];V(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=Me(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const l=s.val(!0),c=e;n.server_.put(c.toString(),l,u=>{es(n,"transaction put response",{path:c.toString(),status:u});let d=[];if(u==="ok"){const p=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(Dt(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&p.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();yr(n,_a(n.transactionQueueTree_,e)),Ia(n,n.transactionQueueTree_),$e(n.eventQueue_,e,d);for(let f=0;f<p.length;f++)Yn(p[f])}else{if(u==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Oe("transaction at "+c.toString()+" failed: "+u);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=u}Gn(n,e)}},o)}function Gn(n,e){const t=id(n,e),i=Zi(t),r=sd(n,t);return qy(n,r,i),i}function qy(n,e,t){if(e.length===0)return;const i=[];let r=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],u=Me(t,c.path);let d=!1,p;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,p=c.abortReason,r=r.concat(Dt(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Dy)d=!0,p="maxretry",r=r.concat(Dt(n.serverSyncTree_,c.currentWriteId,!0));else{const f=nd(n,c.path,o);c.currentInputSnapshot=f;const h=e[l].update(f.val());if(h!==void 0){mr("transaction failed: Data returned ",h,c.path);let m=de(h);typeof h=="object"&&h!=null&&at(h,".priority")||(m=m.updatePriority(f.getPriority()));const w=c.currentWriteId,R=vr(n),k=$u(m,f,R);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=k,c.currentWriteId=wa(n),o.splice(o.indexOf(w),1),r=r.concat(Vu(n.serverSyncTree_,c.path,k,c.currentWriteId,c.applyLocally)),r=r.concat(Dt(n.serverSyncTree_,w,!0))}else d=!0,p="nodata",r=r.concat(Dt(n.serverSyncTree_,c.currentWriteId,!0))}$e(n.eventQueue_,t,r),r=[],d&&(e[l].status=2,(function(f){setTimeout(f,Math.floor(0))})(e[l].unwatcher),e[l].onComplete&&(p==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(p),!1,null))))}yr(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)Yn(i[l]);Ia(n,n.transactionQueueTree_)}function id(n,e){let t,i=n.transactionQueueTree_;for(t=K(e);t!==null&&Qn(i)===void 0;)i=_a(i,t),e=re(e),t=K(e);return i}function sd(n,e){const t=[];return rd(n,e,t),t.sort((i,r)=>i.order-r.order),t}function rd(n,e,t){const i=Qn(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);gr(e,r=>{rd(n,r,t)})}function yr(n,e){const t=Qn(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,zu(e,t.length>0?t:void 0)}gr(e,i=>{yr(n,i)})}function Sa(n,e){const t=Zi(id(n,e)),i=_a(n.transactionQueueTree_,e);return Iy(i,r=>{to(n,r)}),to(n,i),qu(i,r=>{to(n,r)}),t}function to(n,e){const t=Qn(e);if(t){const i=[];let r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(V(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(V(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Dt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zu(e,void 0):t.length=s+1,$e(n.eventQueue_,Zi(e),r);for(let o=0;o<i.length;o++)Yn(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function Jy(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Oe(`Invalid query segment '${t}' in query '${n}'`)}return e}const Uc=function(n,e){const t=Xy(n),i=t.namespace;t.domain==="firebase.com"&&_t(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&_t("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||s_();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new lu(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new ie(t.pathString)}},Xy=function(n){let e="",t="",i="",r="",s="",o=!0,l="https",c=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(l=n.substring(0,u-1),n=n.substring(u+2));let d=n.indexOf("/");d===-1&&(d=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(d,p)),d<p&&(r=Yy(n.substring(d,p)));const f=Jy(n.substring(Math.min(n.length,p)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const h=e.slice(0,u);if(h.toLowerCase()==="localhost")t="localhost";else if(h.split(".").length<=2)t=h;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),s=i}"ns"in f&&(s=f.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:l,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Qy=(function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Vc.charAt(t%64),t=Math.floor(t/64);V(t===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Vc.charAt(e[r]);return V(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ye(this.snapshot.exportVal())}}class ad{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Zy{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new nt;return Hy(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){rn("OnDisconnect.remove",this._path);const e=new nt;return Fc(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){rn("OnDisconnect.set",this._path),tr("OnDisconnect.set",e,this._path,!1);const t=new nt;return Fc(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){rn("OnDisconnect.setWithPriority",this._path),tr("OnDisconnect.setWithPriority",e,this._path,!1),Ay("OnDisconnect.setWithPriority",t);const i=new nt;return Wy(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){rn("OnDisconnect.update",this._path),Xu("OnDisconnect.update",e,this._path);const t=new nt;return jy(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}}/**
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
 */class Ea{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return q(this._path)?null:Jo(this._path)}get ref(){return new lt(this._repo,this._path)}get _queryIdentifier(){const e=Ec(this._queryParams),t=zo(e);return t==="{}"?"default":t}get _queryObject(){return Ec(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof Ea))return!1;const t=this._repo===e._repo,i=Xo(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+H_(this._path)}}class lt extends Ea{constructor(e,t){super(e,t,new ta,!1)}get parent(){const e=_u(this._path);return e===null?null:new lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ie(e),i=pn(this.ref,e);return new $n(this._node.getChild(t),i,he)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new $n(r,pn(this.ref,i),he)))}hasChild(e){const t=new ie(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Bc(n,e){return n=Fe(n),n._checkNotDeleted("ref"),e!==void 0?pn(n._root,e):n._root}function pn(n,e){return n=Fe(n),K(n._path)===null?Py("child","path",e):Qu("child","path",e),new lt(n._repo,ce(n._path,e))}function no(n){return n=Fe(n),new Zy(n._repo,n._path)}function ew(n,e){n=Fe(n),rn("push",n._path),tr("push",e,n._path,!0);const t=td(n._repo),i=Qy(t),r=pn(n,i),s=pn(n,i);let o;return o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function vs(n){return rn("remove",n._path),en(n,null)}function en(n,e){n=Fe(n),rn("set",n._path),tr("set",e,n._path,!1);const t=new nt;return Uy(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function io(n,e){Xu("update",e,n._path);const t=new nt;return Vy(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function ys(n){n=Fe(n);const e=new ld(()=>{}),t=new wr(e);return Fy(n._repo,n,t).then(i=>new $n(i,new lt(n._repo,n._path),n._queryParams.getIndex()))}class wr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new od("value",this,new $n(e.snapshotNode,new lt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ad(this,e,t):null}matches(e){return e instanceof wr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ca{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ad(this,e,t):null}createEvent(e,t){V(e.childName!=null,"Child events should have a childName.");const i=pn(new lt(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new od(e.type,this,new $n(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ca?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function cd(n,e,t,i,r){const s=new ld(t,void 0),o=e==="value"?new wr(s):new Ca(e,s);return Gy(n._repo,n,o),()=>$y(n._repo,n,o)}function ws(n,e,t,i){return cd(n,"value",e)}function tw(n,e,t,i){return cd(n,"child_added",e)}Zv(lt);sy(lt);/**
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
 */const nw="FIREBASE_DATABASE_EMULATOR_HOST",xo={};let iw=!1;function sw(n,e,t,i){const r=e.lastIndexOf(":"),s=e.substring(0,r),o=gn(s);n.repoInfo_=new lu(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function rw(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||_t("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Uc(s,r),l=o.repoInfo,c;typeof process<"u"&&rc&&(c=rc[nw]),c?(s=`http://${c}?ns=${l.namespace}`,o=Uc(s,r),l=o.repoInfo):o.repoInfo.secure;const u=new g_(n.name,n.options,e);by("Invalid Firebase Database URL",o),q(o.path)||_t("Database URL must point to the root of a Firebase Database (not including a child path).");const d=aw(l,n,u,new p_(n,t));return new lw(d,n)}function ow(n,e){const t=xo[e];(!t||t[n.key]!==n)&&_t(`Database ${e}(${n.repoInfo_}) has already been deleted.`),zy(n),delete t[n.key]}function aw(n,e,t,i){let r=xo[e.name];r||(r={},xo[e.name]=r);let s=r[n.toURLString()];return s&&_t("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new My(n,iw,t,i),r[n.toURLString()]=s,s}class lw{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Oy(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lt(this._repo,te())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ow(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_t("Cannot call "+e+" on a deleted database.")}}function cw(n=Do(),e){const t=sr(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Yc("database");i&&hd(t,...i)}return t}function hd(n,e,t,i={}){n=Fe(n),n._checkNotDeleted("useEmulator");const r=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&Vt(i,s.repoInfo_.emulatorOptions))return;_t("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&_t('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ps(Ps.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:Qc(i.mockUserToken,n.app.options.projectId);o=new Ps(l)}gn(e)&&(bo(e),Ro("Database",!0)),sw(s,r,i,o)}/**
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
 */function hw(n){Qm(mn),ln(new Bt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rw(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),st(oc,ac,n),st(oc,ac,"esm2020")}/**
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
 */const uw={".sv":"timestamp"};function Is(){return uw}ft.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ft.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};hw();const dw=(n,e=!1)=>{const t=ih(n,`app-${Math.random().toString(36).slice(2)}`),i=ym(t),r=Km(t),s=cw(t);return e&&(Gh(r,"localhost",8080),Ch(i,"http://localhost:9099"),hd(s,"localhost",9e3)),console.log("Firebase initialized",{isDev:e}),{app:t,db:r,rtdb:s,auth:i}},fw={VITE_FIREBASE_API_KEY:"AIzaSyB2j6UfZB3li9Dbe0XsLO72askyXq2Qg4M",VITE_FIREBASE_APP_ID:"1:61953534595:web:cb822598005187469889b6",VITE_FIREBASE_AUTH_DOMAIN:"ducks-833f0.firebaseapp.com",VITE_FIREBASE_DATABASE_URL:"https://ducks-833f0-default-rtdb.europe-west1.firebasedatabase.app",VITE_FIREBASE_MESSAGING_SENDER_ID:"61953534595",VITE_FIREBASE_PROJECT_ID:"ducks-833f0",VITE_FIREBASE_STORAGE_BUCKET:"ducks-833f0.firebasestorage.app"},De=fw||{},pw={apiKey:De.VITE_FIREBASE_API_KEY,authDomain:De.VITE_FIREBASE_AUTH_DOMAIN,databaseURL:De.VITE_FIREBASE_DATABASE_URL,projectId:De.VITE_FIREBASE_PROJECT_ID,storageBucket:De.VITE_FIREBASE_STORAGE_BUCKET,messagingSenderId:De.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:De.VITE_FIREBASE_APP_ID},ud={enableInterpolation:De.VITE_NET_INTERP_ENABLE?De.VITE_NET_INTERP_ENABLE==="true":!0,sendHz:Number(De.VITE_NET_SEND_HZ??20),renderDelayMs:Number(De.VITE_NET_RENDER_DELAY_MS??120),maxExtrapolationMs:Number(De.VITE_NET_MAX_EXTRAP_MS??100),warpDistancePx:Number(De.VITE_NET_WARP_PX??120),springK:Number(De.VITE_NET_SPRING_K??.04),dampingC:Number(De.VITE_NET_DAMPING_C??6)},dd={centerForce:3e-6,separationForce:.0025,groupForce:2e-6,wolfForce:.005};window.netconfig=ud;window.gameConfig=dd;const ke={isDev:!1,firebase:pw,net:ud,game:dd};var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bs={exports:{}};/*!
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
 */var gw=bs.exports,Wc;function mw(){return Wc||(Wc=1,(function(n,e){(function(i,r){n.exports=r()})(gw,function(){return(function(t){var i={};function r(s){if(i[s])return i[s].exports;var o=i[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=i,r.d=function(s,o,l){r.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:l})},r.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},r.t=function(s,o){if(o&1&&(s=r(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var c in s)r.d(l,c,(function(u){return s[u]}).bind(null,c));return l},r.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return r.d(o,"a",o),o},r.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},r.p="",r(r.s=20)})([(function(t,i){var r={};t.exports=r,(function(){r._baseDelta=1e3/60,r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(o,l){var c,u;typeof l=="boolean"?(c=2,u=l):(c=1,u=!0);for(var d=c;d<arguments.length;d++){var p=arguments[d];if(p)for(var f in p)u&&p[f]&&p[f].constructor===Object&&(!o[f]||o[f].constructor===Object)?(o[f]=o[f]||{},r.extend(o[f],u,p[f])):o[f]=p[f]}return o},r.clone=function(o,l){return r.extend({},l,o)},r.keys=function(o){if(Object.keys)return Object.keys(o);var l=[];for(var c in o)l.push(c);return l},r.values=function(o){var l=[];if(Object.keys){for(var c=Object.keys(o),u=0;u<c.length;u++)l.push(o[c[u]]);return l}for(var d in o)l.push(o[d]);return l},r.get=function(o,l,c,u){l=l.split(".").slice(c,u);for(var d=0;d<l.length;d+=1)o=o[l[d]];return o},r.set=function(o,l,c,u,d){var p=l.split(".").slice(u,d);return r.get(o,l,0,-1)[p[p.length-1]]=c,c},r.shuffle=function(o){for(var l=o.length-1;l>0;l--){var c=Math.floor(r.random()*(l+1)),u=o[l];o[l]=o[c],o[c]=u}return o},r.choose=function(o){return o[Math.floor(r.random()*o.length)]},r.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},r.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},r.isFunction=function(o){return typeof o=="function"},r.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},r.isString=function(o){return toString.call(o)==="[object String]"},r.clamp=function(o,l,c){return o<l?l:o>c?c:o},r.sign=function(o){return o<0?-1:1},r.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(o,l){return o=typeof o<"u"?o:0,l=typeof l<"u"?l:1,o+s()*(l-o)};var s=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[o]||(r.warn(o),r._warnedOnce[o]=!0)},r.deprecated=function(o,l,c){o[l]=r.chain(function(){r.warnOnce("🔅 deprecated 🔅",c)},o[l])},r.nextId=function(){return r._nextId++},r.indexOf=function(o,l){if(o.indexOf)return o.indexOf(l);for(var c=0;c<o.length;c++)if(o[c]===l)return c;return-1},r.map=function(o,l){if(o.map)return o.map(l);for(var c=[],u=0;u<o.length;u+=1)c.push(l(o[u]));return c},r.topologicalSort=function(o){var l=[],c=[],u=[];for(var d in o)!c[d]&&!u[d]&&r._topologicalSort(d,c,u,o,l);return l},r._topologicalSort=function(o,l,c,u,d){var p=u[o]||[];c[o]=!0;for(var f=0;f<p.length;f+=1){var h=p[f];c[h]||l[h]||r._topologicalSort(h,l,c,u,d)}c[o]=!1,l[o]=!0,d.push(o)},r.chain=function(){for(var o=[],l=0;l<arguments.length;l+=1){var c=arguments[l];c._chained?o.push.apply(o,c._chained):o.push(c)}var u=function(){for(var d,p=new Array(arguments.length),f=0,h=arguments.length;f<h;f++)p[f]=arguments[f];for(f=0;f<o.length;f+=1){var m=o[f].apply(d,p);typeof m<"u"&&(d=m)}return d};return u._chained=o,u},r.chainPathBefore=function(o,l,c){return r.set(o,l,r.chain(c,r.get(o,l)))},r.chainPathAfter=function(o,l,c){return r.set(o,l,r.chain(r.get(o,l),c))},r.setDecomp=function(o){r._decomp=o},r.getDecomp=function(){var o=r._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof Hc<"u"&&(o=Hc.decomp)}catch{o=null}return o}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(s){var o={min:{x:0,y:0},max:{x:0,y:0}};return s&&r.update(o,s),o},r.update=function(s,o,l){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var c=0;c<o.length;c++){var u=o[c];u.x>s.max.x&&(s.max.x=u.x),u.x<s.min.x&&(s.min.x=u.x),u.y>s.max.y&&(s.max.y=u.y),u.y<s.min.y&&(s.min.y=u.y)}l&&(l.x>0?s.max.x+=l.x:s.min.x+=l.x,l.y>0?s.max.y+=l.y:s.min.y+=l.y)},r.contains=function(s,o){return o.x>=s.min.x&&o.x<=s.max.x&&o.y>=s.min.y&&o.y<=s.max.y},r.overlaps=function(s,o){return s.min.x<=o.max.x&&s.max.x>=o.min.x&&s.max.y>=o.min.y&&s.min.y<=o.max.y},r.translate=function(s,o){s.min.x+=o.x,s.max.x+=o.x,s.min.y+=o.y,s.max.y+=o.y},r.shift=function(s,o){var l=s.max.x-s.min.x,c=s.max.y-s.min.y;s.min.x=o.x,s.max.x=o.x+l,s.min.y=o.y,s.max.y=o.y+c}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(s,o){return{x:s||0,y:o||0}},r.clone=function(s){return{x:s.x,y:s.y}},r.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},r.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},r.rotate=function(s,o,l){var c=Math.cos(o),u=Math.sin(o);l||(l={});var d=s.x*c-s.y*u;return l.y=s.x*u+s.y*c,l.x=d,l},r.rotateAbout=function(s,o,l,c){var u=Math.cos(o),d=Math.sin(o);c||(c={});var p=l.x+((s.x-l.x)*u-(s.y-l.y)*d);return c.y=l.y+((s.x-l.x)*d+(s.y-l.y)*u),c.x=p,c},r.normalise=function(s){var o=r.magnitude(s);return o===0?{x:0,y:0}:{x:s.x/o,y:s.y/o}},r.dot=function(s,o){return s.x*o.x+s.y*o.y},r.cross=function(s,o){return s.x*o.y-s.y*o.x},r.cross3=function(s,o,l){return(o.x-s.x)*(l.y-s.y)-(o.y-s.y)*(l.x-s.x)},r.add=function(s,o,l){return l||(l={}),l.x=s.x+o.x,l.y=s.y+o.y,l},r.sub=function(s,o,l){return l||(l={}),l.x=s.x-o.x,l.y=s.y-o.y,l},r.mult=function(s,o){return{x:s.x*o,y:s.y*o}},r.div=function(s,o){return{x:s.x/o,y:s.y/o}},r.perp=function(s,o){return o=o===!0?-1:1,{x:o*-s.y,y:o*s.x}},r.neg=function(s){return{x:-s.x,y:-s.y}},r.angle=function(s,o){return Math.atan2(o.y-s.y,o.x-s.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]})()}),(function(t,i,r){var s={};t.exports=s;var o=r(2),l=r(0);(function(){s.create=function(c,u){for(var d=[],p=0;p<c.length;p++){var f=c[p],h={x:f.x,y:f.y,index:p,body:u,isInternal:!1};d.push(h)}return d},s.fromPath=function(c,u){var d=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,p=[];return c.replace(d,function(f,h,m){p.push({x:parseFloat(h),y:parseFloat(m)})}),s.create(p,u)},s.centre=function(c){for(var u=s.area(c,!0),d={x:0,y:0},p,f,h,m=0;m<c.length;m++)h=(m+1)%c.length,p=o.cross(c[m],c[h]),f=o.mult(o.add(c[m],c[h]),p),d=o.add(d,f);return o.div(d,6*u)},s.mean=function(c){for(var u={x:0,y:0},d=0;d<c.length;d++)u.x+=c[d].x,u.y+=c[d].y;return o.div(u,c.length)},s.area=function(c,u){for(var d=0,p=c.length-1,f=0;f<c.length;f++)d+=(c[p].x-c[f].x)*(c[p].y+c[f].y),p=f;return u?d/2:Math.abs(d)/2},s.inertia=function(c,u){for(var d=0,p=0,f=c,h,m,_=0;_<f.length;_++)m=(_+1)%f.length,h=Math.abs(o.cross(f[m],f[_])),d+=h*(o.dot(f[m],f[m])+o.dot(f[m],f[_])+o.dot(f[_],f[_])),p+=h;return u/6*(d/p)},s.translate=function(c,u,d){d=typeof d<"u"?d:1;var p=c.length,f=u.x*d,h=u.y*d,m;for(m=0;m<p;m++)c[m].x+=f,c[m].y+=h;return c},s.rotate=function(c,u,d){if(u!==0){var p=Math.cos(u),f=Math.sin(u),h=d.x,m=d.y,_=c.length,w,R,k,N;for(N=0;N<_;N++)w=c[N],R=w.x-h,k=w.y-m,w.x=h+(R*p-k*f),w.y=m+(R*f+k*p);return c}},s.contains=function(c,u){for(var d=u.x,p=u.y,f=c.length,h=c[f-1],m,_=0;_<f;_++){if(m=c[_],(d-h.x)*(m.y-h.y)+(p-h.y)*(h.x-m.x)>0)return!1;h=m}return!0},s.scale=function(c,u,d,p){if(u===1&&d===1)return c;p=p||s.centre(c);for(var f,h,m=0;m<c.length;m++)f=c[m],h=o.sub(f,p),c[m].x=p.x+h.x*u,c[m].y=p.y+h.y*d;return c},s.chamfer=function(c,u,d,p,f){typeof u=="number"?u=[u]:u=u||[8],d=typeof d<"u"?d:-1,p=p||2,f=f||14;for(var h=[],m=0;m<c.length;m++){var _=c[m-1>=0?m-1:c.length-1],w=c[m],R=c[(m+1)%c.length],k=u[m<u.length?m:u.length-1];if(k===0){h.push(w);continue}var N=o.normalise({x:w.y-_.y,y:_.x-w.x}),D=o.normalise({x:R.y-w.y,y:w.x-R.x}),C=Math.sqrt(2*Math.pow(k,2)),b=o.mult(l.clone(N),k),I=o.normalise(o.mult(o.add(N,D),.5)),v=o.sub(w,o.mult(I,C)),S=d;d===-1&&(S=Math.pow(k,.32)*1.75),S=l.clamp(S,p,f),S%2===1&&(S+=1);for(var E=Math.acos(o.dot(N,D)),T=E/S,x=0;x<S;x++)h.push(o.add(o.rotate(b,T*x),v))}return h},s.clockwiseSort=function(c){var u=s.mean(c);return c.sort(function(d,p){return o.angle(u,d)-o.angle(u,p)}),c},s.isConvex=function(c){var u=0,d=c.length,p,f,h,m;if(d<3)return null;for(p=0;p<d;p++)if(f=(p+1)%d,h=(p+2)%d,m=(c[f].x-c[p].x)*(c[h].y-c[f].y),m-=(c[f].y-c[p].y)*(c[h].x-c[f].x),m<0?u|=1:m>0&&(u|=2),u===3)return!1;return u!==0?!0:null},s.hull=function(c){var u=[],d=[],p,f;for(c=c.slice(0),c.sort(function(h,m){var _=h.x-m.x;return _!==0?_:h.y-m.y}),f=0;f<c.length;f+=1){for(p=c[f];d.length>=2&&o.cross3(d[d.length-2],d[d.length-1],p)<=0;)d.pop();d.push(p)}for(f=c.length-1;f>=0;f-=1){for(p=c[f];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],p)<=0;)u.pop();u.push(p)}return u.pop(),d.pop(),u.concat(d)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(2),c=r(7),u=r(0),d=r(1),p=r(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(h){var m={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},_=u.extend(m,h);return f(_,h),_},s.nextGroup=function(h){return h?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var f=function(h,m){m=m||{},s.set(h,{bounds:h.bounds||d.create(h.vertices),positionPrev:h.positionPrev||l.clone(h.position),anglePrev:h.anglePrev||h.angle,vertices:h.vertices,parts:h.parts||[h],isStatic:h.isStatic,isSleeping:h.isSleeping,parent:h.parent||h}),o.rotate(h.vertices,h.angle,h.position),p.rotate(h.axes,h.angle),d.update(h.bounds,h.vertices,h.velocity),s.set(h,{axes:m.axes||h.axes,area:m.area||h.area,mass:m.mass||h.mass,inertia:m.inertia||h.inertia});var _=h.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),w=h.isStatic?"#555":"#ccc",R=h.isStatic&&h.render.fillStyle===null?1:0;h.render.fillStyle=h.render.fillStyle||_,h.render.strokeStyle=h.render.strokeStyle||w,h.render.lineWidth=h.render.lineWidth||R,h.render.sprite.xOffset+=-(h.bounds.min.x-h.position.x)/(h.bounds.max.x-h.bounds.min.x),h.render.sprite.yOffset+=-(h.bounds.min.y-h.position.y)/(h.bounds.max.y-h.bounds.min.y)};s.set=function(h,m,_){var w;typeof m=="string"&&(w=m,m={},m[w]=_);for(w in m)if(Object.prototype.hasOwnProperty.call(m,w))switch(_=m[w],w){case"isStatic":s.setStatic(h,_);break;case"isSleeping":c.set(h,_);break;case"mass":s.setMass(h,_);break;case"density":s.setDensity(h,_);break;case"inertia":s.setInertia(h,_);break;case"vertices":s.setVertices(h,_);break;case"position":s.setPosition(h,_);break;case"angle":s.setAngle(h,_);break;case"velocity":s.setVelocity(h,_);break;case"angularVelocity":s.setAngularVelocity(h,_);break;case"speed":s.setSpeed(h,_);break;case"angularSpeed":s.setAngularSpeed(h,_);break;case"parts":s.setParts(h,_);break;case"centre":s.setCentre(h,_);break;default:h[w]=_}},s.setStatic=function(h,m){for(var _=0;_<h.parts.length;_++){var w=h.parts[_];m?(w.isStatic||(w._original={restitution:w.restitution,friction:w.friction,mass:w.mass,inertia:w.inertia,density:w.density,inverseMass:w.inverseMass,inverseInertia:w.inverseInertia}),w.restitution=0,w.friction=1,w.mass=w.inertia=w.density=1/0,w.inverseMass=w.inverseInertia=0,w.positionPrev.x=w.position.x,w.positionPrev.y=w.position.y,w.anglePrev=w.angle,w.angularVelocity=0,w.speed=0,w.angularSpeed=0,w.motion=0):w._original&&(w.restitution=w._original.restitution,w.friction=w._original.friction,w.mass=w._original.mass,w.inertia=w._original.inertia,w.density=w._original.density,w.inverseMass=w._original.inverseMass,w.inverseInertia=w._original.inverseInertia,w._original=null),w.isStatic=m}},s.setMass=function(h,m){var _=h.inertia/(h.mass/6);h.inertia=_*(m/6),h.inverseInertia=1/h.inertia,h.mass=m,h.inverseMass=1/h.mass,h.density=h.mass/h.area},s.setDensity=function(h,m){s.setMass(h,m*h.area),h.density=m},s.setInertia=function(h,m){h.inertia=m,h.inverseInertia=1/h.inertia},s.setVertices=function(h,m){m[0].body===h?h.vertices=m:h.vertices=o.create(m,h),h.axes=p.fromVertices(h.vertices),h.area=o.area(h.vertices),s.setMass(h,h.density*h.area);var _=o.centre(h.vertices);o.translate(h.vertices,_,-1),s.setInertia(h,s._inertiaScale*o.inertia(h.vertices,h.mass)),o.translate(h.vertices,h.position),d.update(h.bounds,h.vertices,h.velocity)},s.setParts=function(h,m,_){var w;for(m=m.slice(0),h.parts.length=0,h.parts.push(h),h.parent=h,w=0;w<m.length;w++){var R=m[w];R!==h&&(R.parent=h,h.parts.push(R))}if(h.parts.length!==1){if(_=typeof _<"u"?_:!0,_){var k=[];for(w=0;w<m.length;w++)k=k.concat(m[w].vertices);o.clockwiseSort(k);var N=o.hull(k),D=o.centre(N);s.setVertices(h,N),o.translate(h.vertices,D)}var C=s._totalProperties(h);h.area=C.area,h.parent=h,h.position.x=C.centre.x,h.position.y=C.centre.y,h.positionPrev.x=C.centre.x,h.positionPrev.y=C.centre.y,s.setMass(h,C.mass),s.setInertia(h,C.inertia),s.setPosition(h,C.centre)}},s.setCentre=function(h,m,_){_?(h.positionPrev.x+=m.x,h.positionPrev.y+=m.y,h.position.x+=m.x,h.position.y+=m.y):(h.positionPrev.x=m.x-(h.position.x-h.positionPrev.x),h.positionPrev.y=m.y-(h.position.y-h.positionPrev.y),h.position.x=m.x,h.position.y=m.y)},s.setPosition=function(h,m,_){var w=l.sub(m,h.position);_?(h.positionPrev.x=h.position.x,h.positionPrev.y=h.position.y,h.velocity.x=w.x,h.velocity.y=w.y,h.speed=l.magnitude(w)):(h.positionPrev.x+=w.x,h.positionPrev.y+=w.y);for(var R=0;R<h.parts.length;R++){var k=h.parts[R];k.position.x+=w.x,k.position.y+=w.y,o.translate(k.vertices,w),d.update(k.bounds,k.vertices,h.velocity)}},s.setAngle=function(h,m,_){var w=m-h.angle;_?(h.anglePrev=h.angle,h.angularVelocity=w,h.angularSpeed=Math.abs(w)):h.anglePrev+=w;for(var R=0;R<h.parts.length;R++){var k=h.parts[R];k.angle+=w,o.rotate(k.vertices,w,h.position),p.rotate(k.axes,w),d.update(k.bounds,k.vertices,h.velocity),R>0&&l.rotateAbout(k.position,w,h.position,k.position)}},s.setVelocity=function(h,m){var _=h.deltaTime/s._baseDelta;h.positionPrev.x=h.position.x-m.x*_,h.positionPrev.y=h.position.y-m.y*_,h.velocity.x=(h.position.x-h.positionPrev.x)/_,h.velocity.y=(h.position.y-h.positionPrev.y)/_,h.speed=l.magnitude(h.velocity)},s.getVelocity=function(h){var m=s._baseDelta/h.deltaTime;return{x:(h.position.x-h.positionPrev.x)*m,y:(h.position.y-h.positionPrev.y)*m}},s.getSpeed=function(h){return l.magnitude(s.getVelocity(h))},s.setSpeed=function(h,m){s.setVelocity(h,l.mult(l.normalise(s.getVelocity(h)),m))},s.setAngularVelocity=function(h,m){var _=h.deltaTime/s._baseDelta;h.anglePrev=h.angle-m*_,h.angularVelocity=(h.angle-h.anglePrev)/_,h.angularSpeed=Math.abs(h.angularVelocity)},s.getAngularVelocity=function(h){return(h.angle-h.anglePrev)*s._baseDelta/h.deltaTime},s.getAngularSpeed=function(h){return Math.abs(s.getAngularVelocity(h))},s.setAngularSpeed=function(h,m){s.setAngularVelocity(h,u.sign(s.getAngularVelocity(h))*m)},s.translate=function(h,m,_){s.setPosition(h,l.add(h.position,m),_)},s.rotate=function(h,m,_,w){if(!_)s.setAngle(h,h.angle+m,w);else{var R=Math.cos(m),k=Math.sin(m),N=h.position.x-_.x,D=h.position.y-_.y;s.setPosition(h,{x:_.x+(N*R-D*k),y:_.y+(N*k+D*R)},w),s.setAngle(h,h.angle+m,w)}},s.scale=function(h,m,_,w){var R=0,k=0;w=w||h.position;for(var N=0;N<h.parts.length;N++){var D=h.parts[N];o.scale(D.vertices,m,_,w),D.axes=p.fromVertices(D.vertices),D.area=o.area(D.vertices),s.setMass(D,h.density*D.area),o.translate(D.vertices,{x:-D.position.x,y:-D.position.y}),s.setInertia(D,s._inertiaScale*o.inertia(D.vertices,D.mass)),o.translate(D.vertices,{x:D.position.x,y:D.position.y}),N>0&&(R+=D.area,k+=D.inertia),D.position.x=w.x+(D.position.x-w.x)*m,D.position.y=w.y+(D.position.y-w.y)*_,d.update(D.bounds,D.vertices,h.velocity)}h.parts.length>1&&(h.area=R,h.isStatic||(s.setMass(h,h.density*R),s.setInertia(h,k))),h.circleRadius&&(m===_?h.circleRadius*=m:h.circleRadius=null)},s.update=function(h,m){m=(typeof m<"u"?m:1e3/60)*h.timeScale;var _=m*m,w=s._timeCorrection?m/(h.deltaTime||m):1,R=1-h.frictionAir*(m/u._baseDelta),k=(h.position.x-h.positionPrev.x)*w,N=(h.position.y-h.positionPrev.y)*w;h.velocity.x=k*R+h.force.x/h.mass*_,h.velocity.y=N*R+h.force.y/h.mass*_,h.positionPrev.x=h.position.x,h.positionPrev.y=h.position.y,h.position.x+=h.velocity.x,h.position.y+=h.velocity.y,h.deltaTime=m,h.angularVelocity=(h.angle-h.anglePrev)*R*w+h.torque/h.inertia*_,h.anglePrev=h.angle,h.angle+=h.angularVelocity;for(var D=0;D<h.parts.length;D++){var C=h.parts[D];o.translate(C.vertices,h.velocity),D>0&&(C.position.x+=h.velocity.x,C.position.y+=h.velocity.y),h.angularVelocity!==0&&(o.rotate(C.vertices,h.angularVelocity,h.position),p.rotate(C.axes,h.angularVelocity),D>0&&l.rotateAbout(C.position,h.angularVelocity,h.position,C.position)),d.update(C.bounds,C.vertices,h.velocity)}},s.updateVelocities=function(h){var m=s._baseDelta/h.deltaTime,_=h.velocity;_.x=(h.position.x-h.positionPrev.x)*m,_.y=(h.position.y-h.positionPrev.y)*m,h.speed=Math.sqrt(_.x*_.x+_.y*_.y),h.angularVelocity=(h.angle-h.anglePrev)*m,h.angularSpeed=Math.abs(h.angularVelocity)},s.applyForce=function(h,m,_){var w={x:m.x-h.position.x,y:m.y-h.position.y};h.force.x+=_.x,h.force.y+=_.y,h.torque+=w.x*_.y-w.y*_.x},s._totalProperties=function(h){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},_=h.parts.length===1?0:1;_<h.parts.length;_++){var w=h.parts[_],R=w.mass!==1/0?w.mass:1;m.mass+=R,m.area+=w.area,m.inertia+=w.inertia,m.centre=l.add(m.centre,l.mult(w.position,R))}return m.centre=l.div(m.centre,m.mass),m}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0);(function(){s.on=function(l,c,u){for(var d=c.split(" "),p,f=0;f<d.length;f++)p=d[f],l.events=l.events||{},l.events[p]=l.events[p]||[],l.events[p].push(u);return u},s.off=function(l,c,u){if(!c){l.events={};return}typeof c=="function"&&(u=c,c=o.keys(l.events).join(" "));for(var d=c.split(" "),p=0;p<d.length;p++){var f=l.events[d[p]],h=[];if(u&&f)for(var m=0;m<f.length;m++)f[m]!==u&&h.push(f[m]);l.events[d[p]]=h}},s.trigger=function(l,c,u){var d,p,f,h,m=l.events;if(m&&o.keys(m).length>0){u||(u={}),d=c.split(" ");for(var _=0;_<d.length;_++)if(p=d[_],f=m[p],f){h=o.clone(u,!1),h.name=p,h.source=l;for(var w=0;w<f.length;w++)f[w].apply(l,[h])}}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(5),l=r(0),c=r(1),u=r(4);(function(){s.create=function(d){return l.extend({id:l.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},d)},s.setModified=function(d,p,f,h){if(d.isModified=p,p&&d.cache&&(d.cache.allBodies=null,d.cache.allConstraints=null,d.cache.allComposites=null),f&&d.parent&&s.setModified(d.parent,p,f,h),h)for(var m=0;m<d.composites.length;m++){var _=d.composites[m];s.setModified(_,p,f,h)}},s.add=function(d,p){var f=[].concat(p);o.trigger(d,"beforeAdd",{object:p});for(var h=0;h<f.length;h++){var m=f[h];switch(m.type){case"body":if(m.parent!==m){l.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(d,m);break;case"constraint":s.addConstraint(d,m);break;case"composite":s.addComposite(d,m);break;case"mouseConstraint":s.addConstraint(d,m.constraint);break}}return o.trigger(d,"afterAdd",{object:p}),d},s.remove=function(d,p,f){var h=[].concat(p);o.trigger(d,"beforeRemove",{object:p});for(var m=0;m<h.length;m++){var _=h[m];switch(_.type){case"body":s.removeBody(d,_,f);break;case"constraint":s.removeConstraint(d,_,f);break;case"composite":s.removeComposite(d,_,f);break;case"mouseConstraint":s.removeConstraint(d,_.constraint);break}}return o.trigger(d,"afterRemove",{object:p}),d},s.addComposite=function(d,p){return d.composites.push(p),p.parent=d,s.setModified(d,!0,!0,!1),d},s.removeComposite=function(d,p,f){var h=l.indexOf(d.composites,p);if(h!==-1){var m=s.allBodies(p);s.removeCompositeAt(d,h);for(var _=0;_<m.length;_++)m[_].sleepCounter=0}if(f)for(var _=0;_<d.composites.length;_++)s.removeComposite(d.composites[_],p,!0);return d},s.removeCompositeAt=function(d,p){return d.composites.splice(p,1),s.setModified(d,!0,!0,!1),d},s.addBody=function(d,p){return d.bodies.push(p),s.setModified(d,!0,!0,!1),d},s.removeBody=function(d,p,f){var h=l.indexOf(d.bodies,p);if(h!==-1&&(s.removeBodyAt(d,h),p.sleepCounter=0),f)for(var m=0;m<d.composites.length;m++)s.removeBody(d.composites[m],p,!0);return d},s.removeBodyAt=function(d,p){return d.bodies.splice(p,1),s.setModified(d,!0,!0,!1),d},s.addConstraint=function(d,p){return d.constraints.push(p),s.setModified(d,!0,!0,!1),d},s.removeConstraint=function(d,p,f){var h=l.indexOf(d.constraints,p);if(h!==-1&&s.removeConstraintAt(d,h),f)for(var m=0;m<d.composites.length;m++)s.removeConstraint(d.composites[m],p,!0);return d},s.removeConstraintAt=function(d,p){return d.constraints.splice(p,1),s.setModified(d,!0,!0,!1),d},s.clear=function(d,p,f){if(f)for(var h=0;h<d.composites.length;h++)s.clear(d.composites[h],p,!0);return p?d.bodies=d.bodies.filter(function(m){return m.isStatic}):d.bodies.length=0,d.constraints.length=0,d.composites.length=0,s.setModified(d,!0,!0,!1),d},s.allBodies=function(d){if(d.cache&&d.cache.allBodies)return d.cache.allBodies;for(var p=[].concat(d.bodies),f=0;f<d.composites.length;f++)p=p.concat(s.allBodies(d.composites[f]));return d.cache&&(d.cache.allBodies=p),p},s.allConstraints=function(d){if(d.cache&&d.cache.allConstraints)return d.cache.allConstraints;for(var p=[].concat(d.constraints),f=0;f<d.composites.length;f++)p=p.concat(s.allConstraints(d.composites[f]));return d.cache&&(d.cache.allConstraints=p),p},s.allComposites=function(d){if(d.cache&&d.cache.allComposites)return d.cache.allComposites;for(var p=[].concat(d.composites),f=0;f<d.composites.length;f++)p=p.concat(s.allComposites(d.composites[f]));return d.cache&&(d.cache.allComposites=p),p},s.get=function(d,p,f){var h,m;switch(f){case"body":h=s.allBodies(d);break;case"constraint":h=s.allConstraints(d);break;case"composite":h=s.allComposites(d).concat(d);break}return h?(m=h.filter(function(_){return _.id.toString()===p.toString()}),m.length===0?null:m[0]):null},s.move=function(d,p,f){return s.remove(d,p),s.add(f,p),d},s.rebase=function(d){for(var p=s.allBodies(d).concat(s.allConstraints(d)).concat(s.allComposites(d)),f=0;f<p.length;f++)p[f].id=l.nextId();return d},s.translate=function(d,p,f){for(var h=f?s.allBodies(d):d.bodies,m=0;m<h.length;m++)u.translate(h[m],p);return d},s.rotate=function(d,p,f,h){for(var m=Math.cos(p),_=Math.sin(p),w=h?s.allBodies(d):d.bodies,R=0;R<w.length;R++){var k=w[R],N=k.position.x-f.x,D=k.position.y-f.y;u.setPosition(k,{x:f.x+(N*m-D*_),y:f.y+(N*_+D*m)}),u.rotate(k,p)}return d},s.scale=function(d,p,f,h,m){for(var _=m?s.allBodies(d):d.bodies,w=0;w<_.length;w++){var R=_[w],k=R.position.x-h.x,N=R.position.y-h.y;u.setPosition(R,{x:h.x+k*p,y:h.y+N*f}),u.scale(R,p,f)}return d},s.bounds=function(d){for(var p=s.allBodies(d),f=[],h=0;h<p.length;h+=1){var m=p[h];f.push(m.bounds.min,m.bounds.max)}return c.create(f)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(4),l=r(5),c=r(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(u,d){for(var p=d/c._baseDelta,f=s._motionSleepThreshold,h=0;h<u.length;h++){var m=u[h],_=o.getSpeed(m),w=o.getAngularSpeed(m),R=_*_+w*w;if(m.force.x!==0||m.force.y!==0){s.set(m,!1);continue}var k=Math.min(m.motion,R),N=Math.max(m.motion,R);m.motion=s._minBias*k+(1-s._minBias)*N,m.sleepThreshold>0&&m.motion<f?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/p&&s.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},s.afterCollisions=function(u){for(var d=s._motionSleepThreshold,p=0;p<u.length;p++){var f=u[p];if(f.isActive){var h=f.collision,m=h.bodyA.parent,_=h.bodyB.parent;if(!(m.isSleeping&&_.isSleeping||m.isStatic||_.isStatic)&&(m.isSleeping||_.isSleeping)){var w=m.isSleeping&&!m.isStatic?m:_,R=w===m?_:m;!w.isStatic&&R.motion>d&&s.set(w,!1)}}}},s.set=function(u,d){var p=u.isSleeping;d?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,p||l.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,p&&l.trigger(u,"sleepEnd"))}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(9);(function(){var c=[],u={overlap:0,axis:null},d={overlap:0,axis:null};s.create=function(p,f){return{pair:null,collided:!1,bodyA:p,bodyB:f,parentA:p.parent,parentB:f.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(p,f,h){if(s._overlapAxes(u,p.vertices,f.vertices,p.axes),u.overlap<=0||(s._overlapAxes(d,f.vertices,p.vertices,f.axes),d.overlap<=0))return null;var m=h&&h.table[l.id(p,f)],_;m?_=m.collision:(_=s.create(p,f),_.collided=!0,_.bodyA=p.id<f.id?p:f,_.bodyB=p.id<f.id?f:p,_.parentA=_.bodyA.parent,_.parentB=_.bodyB.parent),p=_.bodyA,f=_.bodyB;var w;u.overlap<d.overlap?w=u:w=d;var R=_.normal,k=_.tangent,N=_.penetration,D=_.supports,C=w.overlap,b=w.axis,I=b.x,v=b.y,S=f.position.x-p.position.x,E=f.position.y-p.position.y;I*S+v*E>=0&&(I=-I,v=-v),R.x=I,R.y=v,k.x=-v,k.y=I,N.x=I*C,N.y=v*C,_.depth=C;var T=s._findSupports(p,f,R,1),x=0;if(o.contains(p.vertices,T[0])&&(D[x++]=T[0]),o.contains(p.vertices,T[1])&&(D[x++]=T[1]),x<2){var A=s._findSupports(f,p,R,-1);o.contains(f.vertices,A[0])&&(D[x++]=A[0]),x<2&&o.contains(f.vertices,A[1])&&(D[x++]=A[1])}return x===0&&(D[x++]=T[0]),_.supportCount=x,_},s._overlapAxes=function(p,f,h,m){var _=f.length,w=h.length,R=f[0].x,k=f[0].y,N=h[0].x,D=h[0].y,C=m.length,b=Number.MAX_VALUE,I=0,v,S,E,T,x,A;for(x=0;x<C;x++){var L=m[x],F=L.x,W=L.y,H=R*F+k*W,$=N*F+D*W,J=H,ue=$;for(A=1;A<_;A+=1)T=f[A].x*F+f[A].y*W,T>J?J=T:T<H&&(H=T);for(A=1;A<w;A+=1)T=h[A].x*F+h[A].y*W,T>ue?ue=T:T<$&&($=T);if(S=J-$,E=ue-H,v=S<E?S:E,v<b&&(b=v,I=x,v<=0))break}p.axis=m[I],p.overlap=b},s._findSupports=function(p,f,h,m){var _=f.vertices,w=_.length,R=p.position.x,k=p.position.y,N=h.x*m,D=h.y*m,C=_[0],b=C,I=N*(R-b.x)+D*(k-b.y),v,S,E;for(E=1;E<w;E+=1)b=_[E],S=N*(R-b.x)+D*(k-b.y),S<I&&(I=S,C=b);return v=_[(w+C.index-1)%w],I=N*(R-v.x)+D*(k-v.y),b=_[(C.index+1)%w],N*(R-b.x)+D*(k-b.y)<I?(c[0]=C,c[1]=b,c):(c[0]=C,c[1]=v,c)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(16);(function(){s.create=function(l,c){var u=l.bodyA,d=l.bodyB,p={id:s.id(u,d),bodyA:u,bodyB:d,collision:l,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||d.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(p,l,c),p},s.update=function(l,c,u){var d=c.supports,p=c.supportCount,f=l.contacts,h=c.parentA,m=c.parentB;l.isActive=!0,l.timeUpdated=u,l.collision=c,l.separation=c.depth,l.inverseMass=h.inverseMass+m.inverseMass,l.friction=h.friction<m.friction?h.friction:m.friction,l.frictionStatic=h.frictionStatic>m.frictionStatic?h.frictionStatic:m.frictionStatic,l.restitution=h.restitution>m.restitution?h.restitution:m.restitution,l.slop=h.slop>m.slop?h.slop:m.slop,l.contactCount=p,c.pair=l;var _=d[0],w=f[0],R=d[1],k=f[1];(k.vertex===_||w.vertex===R)&&(f[1]=w,f[0]=w=k,k=f[1]),w.vertex=_,k.vertex=R},s.setActive=function(l,c,u){c?(l.isActive=!0,l.timeUpdated=u):(l.isActive=!1,l.contactCount=0)},s.id=function(l,c){return l.id<c.id?l.id.toString(36)+":"+c.id.toString(36):c.id.toString(36)+":"+l.id.toString(36)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(2),c=r(7),u=r(1),d=r(11),p=r(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(f){var h=f;h.bodyA&&!h.pointA&&(h.pointA={x:0,y:0}),h.bodyB&&!h.pointB&&(h.pointB={x:0,y:0});var m=h.bodyA?l.add(h.bodyA.position,h.pointA):h.pointA,_=h.bodyB?l.add(h.bodyB.position,h.pointB):h.pointB,w=l.magnitude(l.sub(m,_));h.length=typeof h.length<"u"?h.length:w,h.id=h.id||p.nextId(),h.label=h.label||"Constraint",h.type="constraint",h.stiffness=h.stiffness||(h.length>0?1:.7),h.damping=h.damping||0,h.angularStiffness=h.angularStiffness||0,h.angleA=h.bodyA?h.bodyA.angle:h.angleA,h.angleB=h.bodyB?h.bodyB.angle:h.angleB,h.plugin={};var R={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return h.length===0&&h.stiffness>.1?(R.type="pin",R.anchors=!1):h.stiffness<.9&&(R.type="spring"),h.render=p.extend(R,h.render),h},s.preSolveAll=function(f){for(var h=0;h<f.length;h+=1){var m=f[h],_=m.constraintImpulse;m.isStatic||_.x===0&&_.y===0&&_.angle===0||(m.position.x+=_.x,m.position.y+=_.y,m.angle+=_.angle)}},s.solveAll=function(f,h){for(var m=p.clamp(h/p._baseDelta,0,1),_=0;_<f.length;_+=1){var w=f[_],R=!w.bodyA||w.bodyA&&w.bodyA.isStatic,k=!w.bodyB||w.bodyB&&w.bodyB.isStatic;(R||k)&&s.solve(f[_],m)}for(_=0;_<f.length;_+=1)w=f[_],R=!w.bodyA||w.bodyA&&w.bodyA.isStatic,k=!w.bodyB||w.bodyB&&w.bodyB.isStatic,!R&&!k&&s.solve(f[_],m)},s.solve=function(f,h){var m=f.bodyA,_=f.bodyB,w=f.pointA,R=f.pointB;if(!(!m&&!_)){m&&!m.isStatic&&(l.rotate(w,m.angle-f.angleA,w),f.angleA=m.angle),_&&!_.isStatic&&(l.rotate(R,_.angle-f.angleB,R),f.angleB=_.angle);var k=w,N=R;if(m&&(k=l.add(m.position,w)),_&&(N=l.add(_.position,R)),!(!k||!N)){var D=l.sub(k,N),C=l.magnitude(D);C<s._minLength&&(C=s._minLength);var b=(C-f.length)/C,I=f.stiffness>=1||f.length===0,v=I?f.stiffness*h:f.stiffness*h*h,S=f.damping*h,E=l.mult(D,b*v),T=(m?m.inverseMass:0)+(_?_.inverseMass:0),x=(m?m.inverseInertia:0)+(_?_.inverseInertia:0),A=T+x,L,F,W,H,$;if(S>0){var J=l.create();W=l.div(D,C),$=l.sub(_&&l.sub(_.position,_.positionPrev)||J,m&&l.sub(m.position,m.positionPrev)||J),H=l.dot(W,$)}m&&!m.isStatic&&(F=m.inverseMass/T,m.constraintImpulse.x-=E.x*F,m.constraintImpulse.y-=E.y*F,m.position.x-=E.x*F,m.position.y-=E.y*F,S>0&&(m.positionPrev.x-=S*W.x*H*F,m.positionPrev.y-=S*W.y*H*F),L=l.cross(w,E)/A*s._torqueDampen*m.inverseInertia*(1-f.angularStiffness),m.constraintImpulse.angle-=L,m.angle-=L),_&&!_.isStatic&&(F=_.inverseMass/T,_.constraintImpulse.x+=E.x*F,_.constraintImpulse.y+=E.y*F,_.position.x+=E.x*F,_.position.y+=E.y*F,S>0&&(_.positionPrev.x+=S*W.x*H*F,_.positionPrev.y+=S*W.y*H*F),L=l.cross(R,E)/A*s._torqueDampen*_.inverseInertia*(1-f.angularStiffness),_.constraintImpulse.angle+=L,_.angle+=L)}}},s.postSolveAll=function(f){for(var h=0;h<f.length;h++){var m=f[h],_=m.constraintImpulse;if(!(m.isStatic||_.x===0&&_.y===0&&_.angle===0)){c.set(m,!1);for(var w=0;w<m.parts.length;w++){var R=m.parts[w];o.translate(R.vertices,_),w>0&&(R.position.x+=_.x,R.position.y+=_.y),_.angle!==0&&(o.rotate(R.vertices,_.angle,m.position),d.rotate(R.axes,_.angle),w>0&&l.rotateAbout(R.position,_.angle,m.position,R.position)),u.update(R.bounds,R.vertices,m.velocity)}_.angle*=s._warming,_.x*=s._warming,_.y*=s._warming}}},s.pointAWorld=function(f){return{x:(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),y:(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0)}},s.pointBWorld=function(f){return{x:(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),y:(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0)}},s.currentLength=function(f){var h=(f.bodyA?f.bodyA.position.x:0)+(f.pointA?f.pointA.x:0),m=(f.bodyA?f.bodyA.position.y:0)+(f.pointA?f.pointA.y:0),_=(f.bodyB?f.bodyB.position.x:0)+(f.pointB?f.pointB.x:0),w=(f.bodyB?f.bodyB.position.y:0)+(f.pointB?f.pointB.y:0),R=h-_,k=m-w;return Math.sqrt(R*R+k*k)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(2),l=r(0);(function(){s.fromVertices=function(c){for(var u={},d=0;d<c.length;d++){var p=(d+1)%c.length,f=o.normalise({x:c[p].y-c[d].y,y:c[d].x-c[p].x}),h=f.y===0?1/0:f.x/f.y;h=h.toFixed(3).toString(),u[h]=f}return l.values(u)},s.rotate=function(c,u){if(u!==0)for(var d=Math.cos(u),p=Math.sin(u),f=0;f<c.length;f++){var h=c[f],m;m=h.x*d-h.y*p,h.y=h.x*p+h.y*d,h.x=m}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(0),c=r(4),u=r(1),d=r(2);(function(){s.rectangle=function(p,f,h,m,_){_=_||{};var w={label:"Rectangle Body",position:{x:p,y:f},vertices:o.fromPath("L 0 0 L "+h+" 0 L "+h+" "+m+" L 0 "+m)};if(_.chamfer){var R=_.chamfer;w.vertices=o.chamfer(w.vertices,R.radius,R.quality,R.qualityMin,R.qualityMax),delete _.chamfer}return c.create(l.extend({},w,_))},s.trapezoid=function(p,f,h,m,_,w){w=w||{},_>=1&&l.warn("Bodies.trapezoid: slope parameter must be < 1."),_*=.5;var R=(1-_*2)*h,k=h*_,N=k+R,D=N+k,C;_<.5?C="L 0 0 L "+k+" "+-m+" L "+N+" "+-m+" L "+D+" 0":C="L 0 0 L "+N+" "+-m+" L "+D+" 0";var b={label:"Trapezoid Body",position:{x:p,y:f},vertices:o.fromPath(C)};if(w.chamfer){var I=w.chamfer;b.vertices=o.chamfer(b.vertices,I.radius,I.quality,I.qualityMin,I.qualityMax),delete w.chamfer}return c.create(l.extend({},b,w))},s.circle=function(p,f,h,m,_){m=m||{};var w={label:"Circle Body",circleRadius:h};_=_||25;var R=Math.ceil(Math.max(10,Math.min(_,h)));return R%2===1&&(R+=1),s.polygon(p,f,R,h,l.extend({},w,m))},s.polygon=function(p,f,h,m,_){if(_=_||{},h<3)return s.circle(p,f,m,_);for(var w=2*Math.PI/h,R="",k=w*.5,N=0;N<h;N+=1){var D=k+N*w,C=Math.cos(D)*m,b=Math.sin(D)*m;R+="L "+C.toFixed(3)+" "+b.toFixed(3)+" "}var I={label:"Polygon Body",position:{x:p,y:f},vertices:o.fromPath(R)};if(_.chamfer){var v=_.chamfer;I.vertices=o.chamfer(I.vertices,v.radius,v.quality,v.qualityMin,v.qualityMax),delete _.chamfer}return c.create(l.extend({},I,_))},s.fromVertices=function(p,f,h,m,_,w,R,k){var N=l.getDecomp(),D,C,b,I,v,S,E,T,x,A,L;for(D=!!(N&&N.quickDecomp),m=m||{},b=[],_=typeof _<"u"?_:!1,w=typeof w<"u"?w:.01,R=typeof R<"u"?R:10,k=typeof k<"u"?k:.01,l.isArray(h[0])||(h=[h]),A=0;A<h.length;A+=1)if(S=h[A],I=o.isConvex(S),v=!I,v&&!D&&l.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),I||!D)I?S=o.clockwiseSort(S):S=o.hull(S),b.push({position:{x:p,y:f},vertices:S});else{var F=S.map(function(X){return[X.x,X.y]});N.makeCCW(F),w!==!1&&N.removeCollinearPoints(F,w),k!==!1&&N.removeDuplicatePoints&&N.removeDuplicatePoints(F,k);var W=N.quickDecomp(F);for(E=0;E<W.length;E++){var H=W[E],$=H.map(function(X){return{x:X[0],y:X[1]}});R>0&&o.area($)<R||b.push({position:o.centre($),vertices:$})}}for(E=0;E<b.length;E++)b[E]=c.create(l.extend(b[E],m));if(_){var J=5;for(E=0;E<b.length;E++){var ue=b[E];for(T=E+1;T<b.length;T++){var pe=b[T];if(u.overlaps(ue.bounds,pe.bounds)){var ge=ue.vertices,we=pe.vertices;for(x=0;x<ue.vertices.length;x++)for(L=0;L<pe.vertices.length;L++){var Ve=d.magnitudeSquared(d.sub(ge[(x+1)%ge.length],we[L])),Pe=d.magnitudeSquared(d.sub(ge[x],we[(L+1)%we.length]));Ve<J&&Pe<J&&(ge[x].isInternal=!0,we[L].isInternal=!0)}}}}}return b.length>1?(C=c.create(l.extend({parts:b.slice(0)},m)),c.setPosition(C,{x:p,y:f}),C):b[0]}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0),l=r(8);(function(){s.create=function(c){var u={bodies:[],collisions:[],pairs:null};return o.extend(u,c)},s.setBodies=function(c,u){c.bodies=u.slice(0)},s.clear=function(c){c.bodies=[],c.collisions=[]},s.collisions=function(c){var u=c.pairs,d=c.bodies,p=d.length,f=s.canCollide,h=l.collides,m=c.collisions,_=0,w,R;for(d.sort(s._compareBoundsX),w=0;w<p;w++){var k=d[w],N=k.bounds,D=k.bounds.max.x,C=k.bounds.max.y,b=k.bounds.min.y,I=k.isStatic||k.isSleeping,v=k.parts.length,S=v===1;for(R=w+1;R<p;R++){var E=d[R],T=E.bounds;if(T.min.x>D)break;if(!(C<T.min.y||b>T.max.y)&&!(I&&(E.isStatic||E.isSleeping))&&f(k.collisionFilter,E.collisionFilter)){var x=E.parts.length;if(S&&x===1){var A=h(k,E,u);A&&(m[_++]=A)}else for(var L=v>1?1:0,F=x>1?1:0,W=L;W<v;W++)for(var H=k.parts[W],N=H.bounds,$=F;$<x;$++){var J=E.parts[$],T=J.bounds;if(!(N.min.x>T.max.x||N.max.x<T.min.x||N.max.y<T.min.y||N.min.y>T.max.y)){var A=h(H,J,u);A&&(m[_++]=A)}}}}}return m.length!==_&&(m.length=_),m},s.canCollide=function(c,u){return c.group===u.group&&c.group!==0?c.group>0:(c.mask&u.category)!==0&&(u.mask&c.category)!==0},s._compareBoundsX=function(c,u){return c.bounds.min.x-u.bounds.min.x}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0);(function(){s.create=function(l){var c={};return l||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=l||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(u){var d=s._getRelativeMousePosition(u,c.element,c.pixelRatio),p=u.changedTouches;p&&(c.button=0,u.preventDefault()),c.absolute.x=d.x,c.absolute.y=d.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=u},c.mousedown=function(u){var d=s._getRelativeMousePosition(u,c.element,c.pixelRatio),p=u.changedTouches;p?(c.button=0,u.preventDefault()):c.button=u.button,c.absolute.x=d.x,c.absolute.y=d.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=u},c.mouseup=function(u){var d=s._getRelativeMousePosition(u,c.element,c.pixelRatio),p=u.changedTouches;p&&u.preventDefault(),c.button=-1,c.absolute.x=d.x,c.absolute.y=d.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=u},c.mousewheel=function(u){c.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),c.sourceEvents.mousewheel=u},s.setElement(c,c.element),c},s.setElement=function(l,c){l.element=c,c.addEventListener("mousemove",l.mousemove,{passive:!0}),c.addEventListener("mousedown",l.mousedown,{passive:!0}),c.addEventListener("mouseup",l.mouseup,{passive:!0}),c.addEventListener("wheel",l.mousewheel,{passive:!1}),c.addEventListener("touchmove",l.mousemove,{passive:!1}),c.addEventListener("touchstart",l.mousedown,{passive:!1}),c.addEventListener("touchend",l.mouseup,{passive:!1})},s.clearSourceEvents=function(l){l.sourceEvents.mousemove=null,l.sourceEvents.mousedown=null,l.sourceEvents.mouseup=null,l.sourceEvents.mousewheel=null,l.wheelDelta=0},s.setOffset=function(l,c){l.offset.x=c.x,l.offset.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y},s.setScale=function(l,c){l.scale.x=c.x,l.scale.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y},s._getRelativeMousePosition=function(l,c,u){var d=c.getBoundingClientRect(),p=document.documentElement||document.body.parentNode||document.body,f=window.pageXOffset!==void 0?window.pageXOffset:p.scrollLeft,h=window.pageYOffset!==void 0?window.pageYOffset:p.scrollTop,m=l.changedTouches,_,w;return m?(_=m[0].pageX-d.left-f,w=m[0].pageY-d.top-h):(_=l.pageX-d.left-f,w=l.pageY-d.top-h),{x:_/(c.clientWidth/(c.width||c.clientWidth)*u),y:w/(c.clientHeight/(c.height||c.clientHeight)*u)}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(0);(function(){s._registry={},s.register=function(l){if(s.isPlugin(l)||o.warn("Plugin.register:",s.toString(l),"does not implement all required fields."),l.name in s._registry){var c=s._registry[l.name],u=s.versionParse(l.version).number,d=s.versionParse(c.version).number;u>d?(o.warn("Plugin.register:",s.toString(c),"was upgraded to",s.toString(l)),s._registry[l.name]=l):u<d?o.warn("Plugin.register:",s.toString(c),"can not be downgraded to",s.toString(l)):l!==c&&o.warn("Plugin.register:",s.toString(l),"is already registered to different plugin object")}else s._registry[l.name]=l;return l},s.resolve=function(l){return s._registry[s.dependencyParse(l).name]},s.toString=function(l){return typeof l=="string"?l:(l.name||"anonymous")+"@"+(l.version||l.range||"0.0.0")},s.isPlugin=function(l){return l&&l.name&&l.version&&l.install},s.isUsed=function(l,c){return l.used.indexOf(c)>-1},s.isFor=function(l,c){var u=l.for&&s.dependencyParse(l.for);return!l.for||c.name===u.name&&s.versionSatisfies(c.version,u.range)},s.use=function(l,c){if(l.uses=(l.uses||[]).concat(c||[]),l.uses.length===0){o.warn("Plugin.use:",s.toString(l),"does not specify any dependencies to install.");return}for(var u=s.dependencies(l),d=o.topologicalSort(u),p=[],f=0;f<d.length;f+=1)if(d[f]!==l.name){var h=s.resolve(d[f]);if(!h){p.push("❌ "+d[f]);continue}s.isUsed(l,h.name)||(s.isFor(h,l)||(o.warn("Plugin.use:",s.toString(h),"is for",h.for,"but installed on",s.toString(l)+"."),h._warned=!0),h.install?h.install(l):(o.warn("Plugin.use:",s.toString(h),"does not specify an install function."),h._warned=!0),h._warned?(p.push("🔶 "+s.toString(h)),delete h._warned):p.push("✅ "+s.toString(h)),l.used.push(h.name))}p.length>0&&o.info(p.join("  "))},s.dependencies=function(l,c){var u=s.dependencyParse(l),d=u.name;if(c=c||{},!(d in c)){l=s.resolve(l)||l,c[d]=o.map(l.uses||[],function(f){s.isPlugin(f)&&s.register(f);var h=s.dependencyParse(f),m=s.resolve(f);return m&&!s.versionSatisfies(m.version,h.range)?(o.warn("Plugin.dependencies:",s.toString(m),"does not satisfy",s.toString(h),"used by",s.toString(u)+"."),m._warned=!0,l._warned=!0):m||(o.warn("Plugin.dependencies:",s.toString(f),"used by",s.toString(u),"could not be resolved."),l._warned=!0),h.name});for(var p=0;p<c[d].length;p+=1)s.dependencies(c[d][p],c);return c}},s.dependencyParse=function(l){if(o.isString(l)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(l)||o.warn("Plugin.dependencyParse:",l,"is not a valid dependency string."),{name:l.split("@")[0],range:l.split("@")[1]||"*"}}return{name:l.name,range:l.range||l.version}},s.versionParse=function(l){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(l)||o.warn("Plugin.versionParse:",l,"is not a valid version or range.");var u=c.exec(l),d=Number(u[4]),p=Number(u[5]),f=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:l,operator:u[1]||u[2]||"",major:d,minor:p,patch:f,parts:[d,p,f],prerelease:u[7],number:d*1e8+p*1e4+f}},s.versionSatisfies=function(l,c){c=c||"*";var u=s.versionParse(c),d=s.versionParse(l);if(u.isRange){if(u.operator==="*"||l==="*")return!0;if(u.operator===">")return d.number>u.number;if(u.operator===">=")return d.number>=u.number;if(u.operator==="~")return d.major===u.major&&d.minor===u.minor&&d.patch>=u.patch;if(u.operator==="^")return u.major>0?d.major===u.major&&d.number>=u.number:u.minor>0?d.minor===u.minor&&d.patch>=u.patch:d.patch===u.patch}return l===c||l==="*"}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(7),l=r(18),c=r(13),u=r(19),d=r(5),p=r(6),f=r(10),h=r(0),m=r(4);(function(){s._deltaMax=1e3/60,s.create=function(_){_=_||{};var w={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},R=h.extend(w,_);return R.world=_.world||p.create({label:"World"}),R.pairs=_.pairs||u.create(),R.detector=_.detector||c.create(),R.detector.pairs=R.pairs,R.grid={buckets:[]},R.world.gravity=R.gravity,R.broadphase=R.grid,R.metrics={},R},s.update=function(_,w){var R=h.now(),k=_.world,N=_.detector,D=_.pairs,C=_.timing,b=C.timestamp,I;w>s._deltaMax&&h.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),w=typeof w<"u"?w:h._baseDelta,w*=C.timeScale,C.timestamp+=w,C.lastDelta=w;var v={timestamp:C.timestamp,delta:w};d.trigger(_,"beforeUpdate",v);var S=p.allBodies(k),E=p.allConstraints(k);for(k.isModified&&(c.setBodies(N,S),p.setModified(k,!1,!1,!0)),_.enableSleeping&&o.update(S,w),s._bodiesApplyGravity(S,_.gravity),w>0&&s._bodiesUpdate(S,w),d.trigger(_,"beforeSolve",v),f.preSolveAll(S),I=0;I<_.constraintIterations;I++)f.solveAll(E,w);f.postSolveAll(S);var T=c.collisions(N);u.update(D,T,b),_.enableSleeping&&o.afterCollisions(D.list),D.collisionStart.length>0&&d.trigger(_,"collisionStart",{pairs:D.collisionStart,timestamp:C.timestamp,delta:w});var x=h.clamp(20/_.positionIterations,0,1);for(l.preSolvePosition(D.list),I=0;I<_.positionIterations;I++)l.solvePosition(D.list,w,x);for(l.postSolvePosition(S),f.preSolveAll(S),I=0;I<_.constraintIterations;I++)f.solveAll(E,w);for(f.postSolveAll(S),l.preSolveVelocity(D.list),I=0;I<_.velocityIterations;I++)l.solveVelocity(D.list,w);return s._bodiesUpdateVelocities(S),D.collisionActive.length>0&&d.trigger(_,"collisionActive",{pairs:D.collisionActive,timestamp:C.timestamp,delta:w}),D.collisionEnd.length>0&&d.trigger(_,"collisionEnd",{pairs:D.collisionEnd,timestamp:C.timestamp,delta:w}),s._bodiesClearForces(S),d.trigger(_,"afterUpdate",v),_.timing.lastElapsed=h.now()-R,_},s.merge=function(_,w){if(h.extend(_,w),w.world){_.world=w.world,s.clear(_);for(var R=p.allBodies(_.world),k=0;k<R.length;k++){var N=R[k];o.set(N,!1),N.id=h.nextId()}}},s.clear=function(_){u.clear(_.pairs),c.clear(_.detector)},s._bodiesClearForces=function(_){for(var w=_.length,R=0;R<w;R++){var k=_[R];k.force.x=0,k.force.y=0,k.torque=0}},s._bodiesApplyGravity=function(_,w){var R=typeof w.scale<"u"?w.scale:.001,k=_.length;if(!(w.x===0&&w.y===0||R===0))for(var N=0;N<k;N++){var D=_[N];D.isStatic||D.isSleeping||(D.force.y+=D.mass*w.y*R,D.force.x+=D.mass*w.x*R)}},s._bodiesUpdate=function(_,w){for(var R=_.length,k=0;k<R;k++){var N=_[k];N.isStatic||N.isSleeping||m.update(N,w)}},s._bodiesUpdateVelocities=function(_){for(var w=_.length,R=0;R<w;R++)m.updateVelocities(_[R])}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(0),c=r(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(u){var d,p,f,h=u.length;for(d=0;d<h;d++)p=u[d],p.isActive&&(f=p.contactCount,p.collision.parentA.totalContacts+=f,p.collision.parentB.totalContacts+=f)},s.solvePosition=function(u,d,p){var f,h,m,_,w,R,k,N,D=s._positionDampen*(p||1),C=l.clamp(d/l._baseDelta,0,1),b=u.length;for(f=0;f<b;f++)h=u[f],!(!h.isActive||h.isSensor)&&(m=h.collision,_=m.parentA,w=m.parentB,R=m.normal,h.separation=m.depth+R.x*(w.positionImpulse.x-_.positionImpulse.x)+R.y*(w.positionImpulse.y-_.positionImpulse.y));for(f=0;f<b;f++)h=u[f],!(!h.isActive||h.isSensor)&&(m=h.collision,_=m.parentA,w=m.parentB,R=m.normal,N=h.separation-h.slop*C,(_.isStatic||w.isStatic)&&(N*=2),_.isStatic||_.isSleeping||(k=D/_.totalContacts,_.positionImpulse.x+=R.x*N*k,_.positionImpulse.y+=R.y*N*k),w.isStatic||w.isSleeping||(k=D/w.totalContacts,w.positionImpulse.x-=R.x*N*k,w.positionImpulse.y-=R.y*N*k))},s.postSolvePosition=function(u){for(var d=s._positionWarming,p=u.length,f=o.translate,h=c.update,m=0;m<p;m++){var _=u[m],w=_.positionImpulse,R=w.x,k=w.y,N=_.velocity;if(_.totalContacts=0,R!==0||k!==0){for(var D=0;D<_.parts.length;D++){var C=_.parts[D];f(C.vertices,w),h(C.bounds,C.vertices,N),C.position.x+=R,C.position.y+=k}_.positionPrev.x+=R,_.positionPrev.y+=k,R*N.x+k*N.y<0?(w.x=0,w.y=0):(w.x*=d,w.y*=d)}}},s.preSolveVelocity=function(u){var d=u.length,p,f;for(p=0;p<d;p++){var h=u[p];if(!(!h.isActive||h.isSensor)){var m=h.contacts,_=h.contactCount,w=h.collision,R=w.parentA,k=w.parentB,N=w.normal,D=w.tangent;for(f=0;f<_;f++){var C=m[f],b=C.vertex,I=C.normalImpulse,v=C.tangentImpulse;if(I!==0||v!==0){var S=N.x*I+D.x*v,E=N.y*I+D.y*v;R.isStatic||R.isSleeping||(R.positionPrev.x+=S*R.inverseMass,R.positionPrev.y+=E*R.inverseMass,R.anglePrev+=R.inverseInertia*((b.x-R.position.x)*E-(b.y-R.position.y)*S)),k.isStatic||k.isSleeping||(k.positionPrev.x-=S*k.inverseMass,k.positionPrev.y-=E*k.inverseMass,k.anglePrev-=k.inverseInertia*((b.x-k.position.x)*E-(b.y-k.position.y)*S))}}}}},s.solveVelocity=function(u,d){var p=d/l._baseDelta,f=p*p,h=f*p,m=-s._restingThresh*p,_=s._restingThreshTangent,w=s._frictionNormalMultiplier*p,R=s._frictionMaxStatic,k=u.length,N,D,C,b;for(C=0;C<k;C++){var I=u[C];if(!(!I.isActive||I.isSensor)){var v=I.collision,S=v.parentA,E=v.parentB,T=v.normal.x,x=v.normal.y,A=v.tangent.x,L=v.tangent.y,F=I.inverseMass,W=I.friction*I.frictionStatic*w,H=I.contacts,$=I.contactCount,J=1/$,ue=S.position.x-S.positionPrev.x,pe=S.position.y-S.positionPrev.y,ge=S.angle-S.anglePrev,we=E.position.x-E.positionPrev.x,Ve=E.position.y-E.positionPrev.y,Pe=E.angle-E.anglePrev;for(b=0;b<$;b++){var X=H[b],be=X.vertex,me=be.x-S.position.x,yt=be.y-S.position.y,Be=be.x-E.position.x,He=be.y-E.position.y,Ae=ue-yt*ge,Zn=pe+me*ge,ts=we-He*Pe,Ir=Ve+Be*Pe,yn=Ae-ts,wn=Zn-Ir,In=T*yn+x*wn,oe=A*yn+L*wn,Ie=I.separation+In,wt=Math.min(Ie,1);wt=Ie<0?0:wt;var ns=wt*W;oe<-ns||oe>ns?(D=oe>0?oe:-oe,N=I.friction*(oe>0?1:-1)*h,N<-D?N=-D:N>D&&(N=D)):(N=oe,D=R);var ei=me*x-yt*T,is=Be*x-He*T,It=J/(F+S.inverseInertia*ei*ei+E.inverseInertia*is*is),Kt=(1+I.restitution)*In*It;if(N*=It,In<m)X.normalImpulse=0;else{var ss=X.normalImpulse;X.normalImpulse+=Kt,X.normalImpulse>0&&(X.normalImpulse=0),Kt=X.normalImpulse-ss}if(oe<-_||oe>_)X.tangentImpulse=0;else{var ti=X.tangentImpulse;X.tangentImpulse+=N,X.tangentImpulse<-D&&(X.tangentImpulse=-D),X.tangentImpulse>D&&(X.tangentImpulse=D),N=X.tangentImpulse-ti}var Sn=T*Kt+A*N,En=x*Kt+L*N;S.isStatic||S.isSleeping||(S.positionPrev.x+=Sn*S.inverseMass,S.positionPrev.y+=En*S.inverseMass,S.anglePrev+=(me*En-yt*Sn)*S.inverseInertia),E.isStatic||E.isSleeping||(E.positionPrev.x-=Sn*E.inverseMass,E.positionPrev.y-=En*E.inverseMass,E.anglePrev-=(Be*En-He*Sn)*E.inverseInertia)}}}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(9),l=r(0);(function(){s.create=function(c){return l.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},s.update=function(c,u,d){var p=o.update,f=o.create,h=o.setActive,m=c.table,_=c.list,w=_.length,R=w,k=c.collisionStart,N=c.collisionEnd,D=c.collisionActive,C=u.length,b=0,I=0,v=0,S,E,T;for(T=0;T<C;T++)S=u[T],E=S.pair,E?(E.isActive&&(D[v++]=E),p(E,S,d)):(E=f(S,d),m[E.id]=E,k[b++]=E,_[R++]=E);for(R=0,w=_.length,T=0;T<w;T++)E=_[T],E.timeUpdated>=d?_[R++]=E:(h(E,!1,d),E.collision.bodyA.sleepCounter>0&&E.collision.bodyB.sleepCounter>0?_[R++]=E:(N[I++]=E,delete m[E.id]));_.length!==R&&(_.length=R),k.length!==b&&(k.length=b),N.length!==I&&(N.length=I),D.length!==v&&(D.length=v)},s.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()}),(function(t,i,r){var s=t.exports=r(21);s.Axes=r(11),s.Bodies=r(12),s.Body=r(4),s.Bounds=r(1),s.Collision=r(8),s.Common=r(0),s.Composite=r(6),s.Composites=r(22),s.Constraint=r(10),s.Contact=r(16),s.Detector=r(13),s.Engine=r(17),s.Events=r(5),s.Grid=r(23),s.Mouse=r(14),s.MouseConstraint=r(24),s.Pair=r(9),s.Pairs=r(19),s.Plugin=r(15),s.Query=r(25),s.Render=r(26),s.Resolver=r(18),s.Runner=r(27),s.SAT=r(28),s.Sleeping=r(7),s.Svg=r(29),s.Vector=r(2),s.Vertices=r(3),s.World=r(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(t,i,r){var s={};t.exports=s;var o=r(15),l=r(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){o.use(s,Array.prototype.slice.call(arguments))},s.before=function(c,u){return c=c.replace(/^Matter./,""),l.chainPathBefore(s,c,u)},s.after=function(c,u){return c=c.replace(/^Matter./,""),l.chainPathAfter(s,c,u)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(6),l=r(10),c=r(0),u=r(4),d=r(12),p=c.deprecated;(function(){s.stack=function(f,h,m,_,w,R,k){for(var N=o.create({label:"Stack"}),D=f,C=h,b,I=0,v=0;v<_;v++){for(var S=0,E=0;E<m;E++){var T=k(D,C,E,v,b,I);if(T){var x=T.bounds.max.y-T.bounds.min.y,A=T.bounds.max.x-T.bounds.min.x;x>S&&(S=x),u.translate(T,{x:A*.5,y:x*.5}),D=T.bounds.max.x+w,o.addBody(N,T),b=T,I+=1}else D+=w}C+=S+R,D=f}return N},s.chain=function(f,h,m,_,w,R){for(var k=f.bodies,N=1;N<k.length;N++){var D=k[N-1],C=k[N],b=D.bounds.max.y-D.bounds.min.y,I=D.bounds.max.x-D.bounds.min.x,v=C.bounds.max.y-C.bounds.min.y,S=C.bounds.max.x-C.bounds.min.x,E={bodyA:D,pointA:{x:I*h,y:b*m},bodyB:C,pointB:{x:S*_,y:v*w}},T=c.extend(E,R);o.addConstraint(f,l.create(T))}return f.label+=" Chain",f},s.mesh=function(f,h,m,_,w){var R=f.bodies,k,N,D,C,b;for(k=0;k<m;k++){for(N=1;N<h;N++)D=R[N-1+k*h],C=R[N+k*h],o.addConstraint(f,l.create(c.extend({bodyA:D,bodyB:C},w)));if(k>0)for(N=0;N<h;N++)D=R[N+(k-1)*h],C=R[N+k*h],o.addConstraint(f,l.create(c.extend({bodyA:D,bodyB:C},w))),_&&N>0&&(b=R[N-1+(k-1)*h],o.addConstraint(f,l.create(c.extend({bodyA:b,bodyB:C},w)))),_&&N<h-1&&(b=R[N+1+(k-1)*h],o.addConstraint(f,l.create(c.extend({bodyA:b,bodyB:C},w))))}return f.label+=" Mesh",f},s.pyramid=function(f,h,m,_,w,R,k){return s.stack(f,h,m,_,w,R,function(N,D,C,b,I,v){var S=Math.min(_,Math.ceil(m/2)),E=I?I.bounds.max.x-I.bounds.min.x:0;if(!(b>S)){b=S-b;var T=b,x=m-1-b;if(!(C<T||C>x)){v===1&&u.translate(I,{x:(C+(m%2===1?1:-1))*E,y:0});var A=I?C*E:0;return k(f+A+C*w,D,C,b,I,v)}}})},s.newtonsCradle=function(f,h,m,_,w){for(var R=o.create({label:"Newtons Cradle"}),k=0;k<m;k++){var N=1.9,D=d.circle(f+k*(_*N),h+w,_,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),C=l.create({pointA:{x:f+k*(_*N),y:h},bodyB:D});o.addBody(R,D),o.addConstraint(R,C)}return R},p(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(f,h,m,_,w){var R=u.nextGroup(!0),k=20,N=-m*.5+k,D=m*.5-k,C=0,b=o.create({label:"Car"}),I=d.rectangle(f,h,m,_,{collisionFilter:{group:R},chamfer:{radius:_*.5},density:2e-4}),v=d.circle(f+N,h+C,w,{collisionFilter:{group:R},friction:.8}),S=d.circle(f+D,h+C,w,{collisionFilter:{group:R},friction:.8}),E=l.create({bodyB:I,pointB:{x:N,y:C},bodyA:v,stiffness:1,length:0}),T=l.create({bodyB:I,pointB:{x:D,y:C},bodyA:S,stiffness:1,length:0});return o.addBody(b,I),o.addBody(b,v),o.addBody(b,S),o.addConstraint(b,E),o.addConstraint(b,T),b},p(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(f,h,m,_,w,R,k,N,D,C){D=c.extend({inertia:1/0},D),C=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},C);var b=s.stack(f,h,m,_,w,R,function(I,v){return d.circle(I,v,N,D)});return s.mesh(b,m,_,k,C),b.label="Soft Body",b},p(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(t,i,r){var s={};t.exports=s;var o=r(9),l=r(0),c=l.deprecated;(function(){s.create=function(u){var d={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return l.extend(d,u)},s.update=function(u,d,p,f){var h,m,_,w=p.world,R=u.buckets,k,N,D=!1;for(h=0;h<d.length;h++){var C=d[h];if(!(C.isSleeping&&!f)&&!(w.bounds&&(C.bounds.max.x<w.bounds.min.x||C.bounds.min.x>w.bounds.max.x||C.bounds.max.y<w.bounds.min.y||C.bounds.min.y>w.bounds.max.y))){var b=s._getRegion(u,C);if(!C.region||b.id!==C.region.id||f){(!C.region||f)&&(C.region=b);var I=s._regionUnion(b,C.region);for(m=I.startCol;m<=I.endCol;m++)for(_=I.startRow;_<=I.endRow;_++){N=s._getBucketId(m,_),k=R[N];var v=m>=b.startCol&&m<=b.endCol&&_>=b.startRow&&_<=b.endRow,S=m>=C.region.startCol&&m<=C.region.endCol&&_>=C.region.startRow&&_<=C.region.endRow;!v&&S&&S&&k&&s._bucketRemoveBody(u,k,C),(C.region===b||v&&!S||f)&&(k||(k=s._createBucket(R,N)),s._bucketAddBody(u,k,C))}C.region=b,D=!0}}}D&&(u.pairsList=s._createActivePairsList(u))},c(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},c(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(u,d){var p=Math.min(u.startCol,d.startCol),f=Math.max(u.endCol,d.endCol),h=Math.min(u.startRow,d.startRow),m=Math.max(u.endRow,d.endRow);return s._createRegion(p,f,h,m)},s._getRegion=function(u,d){var p=d.bounds,f=Math.floor(p.min.x/u.bucketWidth),h=Math.floor(p.max.x/u.bucketWidth),m=Math.floor(p.min.y/u.bucketHeight),_=Math.floor(p.max.y/u.bucketHeight);return s._createRegion(f,h,m,_)},s._createRegion=function(u,d,p,f){return{id:u+","+d+","+p+","+f,startCol:u,endCol:d,startRow:p,endRow:f}},s._getBucketId=function(u,d){return"C"+u+"R"+d},s._createBucket=function(u,d){var p=u[d]=[];return p},s._bucketAddBody=function(u,d,p){var f=u.pairs,h=o.id,m=d.length,_;for(_=0;_<m;_++){var w=d[_];if(!(p.id===w.id||p.isStatic&&w.isStatic)){var R=h(p,w),k=f[R];k?k[2]+=1:f[R]=[p,w,1]}}d.push(p)},s._bucketRemoveBody=function(u,d,p){var f=u.pairs,h=o.id,m;d.splice(l.indexOf(d,p),1);var _=d.length;for(m=0;m<_;m++){var w=f[h(p,d[m])];w&&(w[2]-=1)}},s._createActivePairsList=function(u){var d,p=u.pairs,f=l.keys(p),h=f.length,m=[],_;for(_=0;_<h;_++)d=p[f[_]],d[2]>0?m.push(d):delete p[f[_]];return m}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(3),l=r(7),c=r(14),u=r(5),d=r(13),p=r(10),f=r(6),h=r(0),m=r(1);(function(){s.create=function(_,w){var R=(_?_.mouse:null)||(w?w.mouse:null);R||(_&&_.render&&_.render.canvas?R=c.create(_.render.canvas):w&&w.element?R=c.create(w.element):(R=c.create(),h.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var k=p.create({label:"Mouse Constraint",pointA:R.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),N={type:"mouseConstraint",mouse:R,element:null,body:null,constraint:k,collisionFilter:{category:1,mask:4294967295,group:0}},D=h.extend(N,w);return u.on(_,"beforeUpdate",function(){var C=f.allBodies(_.world);s.update(D,C),s._triggerEvents(D)}),D},s.update=function(_,w){var R=_.mouse,k=_.constraint,N=_.body;if(R.button===0){if(k.bodyB)l.set(k.bodyB,!1),k.pointA=R.position;else for(var D=0;D<w.length;D++)if(N=w[D],m.contains(N.bounds,R.position)&&d.canCollide(N.collisionFilter,_.collisionFilter))for(var C=N.parts.length>1?1:0;C<N.parts.length;C++){var b=N.parts[C];if(o.contains(b.vertices,R.position)){k.pointA=R.position,k.bodyB=_.body=N,k.pointB={x:R.position.x-N.position.x,y:R.position.y-N.position.y},k.angleB=N.angle,l.set(N,!1),u.trigger(_,"startdrag",{mouse:R,body:N});break}}}else k.bodyB=_.body=null,k.pointB=null,N&&u.trigger(_,"enddrag",{mouse:R,body:N})},s._triggerEvents=function(_){var w=_.mouse,R=w.sourceEvents;R.mousemove&&u.trigger(_,"mousemove",{mouse:w}),R.mousedown&&u.trigger(_,"mousedown",{mouse:w}),R.mouseup&&u.trigger(_,"mouseup",{mouse:w}),c.clearSourceEvents(w)}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(2),l=r(8),c=r(1),u=r(12),d=r(3);(function(){s.collides=function(p,f){for(var h=[],m=f.length,_=p.bounds,w=l.collides,R=c.overlaps,k=0;k<m;k++){var N=f[k],D=N.parts.length,C=D===1?0:1;if(R(N.bounds,_))for(var b=C;b<D;b++){var I=N.parts[b];if(R(I.bounds,_)){var v=w(I,p);if(v){h.push(v);break}}}}return h},s.ray=function(p,f,h,m){m=m||1e-100;for(var _=o.angle(f,h),w=o.magnitude(o.sub(f,h)),R=(h.x+f.x)*.5,k=(h.y+f.y)*.5,N=u.rectangle(R,k,w,m,{angle:_}),D=s.collides(N,p),C=0;C<D.length;C+=1){var b=D[C];b.body=b.bodyB=b.bodyA}return D},s.region=function(p,f,h){for(var m=[],_=0;_<p.length;_++){var w=p[_],R=c.overlaps(w.bounds,f);(R&&!h||!R&&h)&&m.push(w)}return m},s.point=function(p,f){for(var h=[],m=0;m<p.length;m++){var _=p[m];if(c.contains(_.bounds,f))for(var w=_.parts.length===1?0:1;w<_.parts.length;w++){var R=_.parts[w];if(c.contains(R.bounds,f)&&d.contains(R.vertices,f)){h.push(_);break}}}return h}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(4),l=r(0),c=r(6),u=r(1),d=r(5),p=r(2),f=r(14);(function(){var h,m;typeof window<"u"&&(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(C){window.setTimeout(function(){C(l.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(C){var b={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!C.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},I=l.extend(b,C);return I.canvas&&(I.canvas.width=I.options.width||I.canvas.width,I.canvas.height=I.options.height||I.canvas.height),I.mouse=C.mouse,I.engine=C.engine,I.canvas=I.canvas||R(I.options.width,I.options.height),I.context=I.canvas.getContext("2d"),I.textures={},I.bounds=I.bounds||{min:{x:0,y:0},max:{x:I.canvas.width,y:I.canvas.height}},I.controller=s,I.options.showBroadphase=!1,I.options.pixelRatio!==1&&s.setPixelRatio(I,I.options.pixelRatio),l.isElement(I.element)&&I.element.appendChild(I.canvas),I},s.run=function(C){(function b(I){C.frameRequestId=h(b),_(C,I),s.world(C,I),C.context.setTransform(C.options.pixelRatio,0,0,C.options.pixelRatio,0,0),(C.options.showStats||C.options.showDebug)&&s.stats(C,C.context,I),(C.options.showPerformance||C.options.showDebug)&&s.performance(C,C.context,I),C.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(C){m(C.frameRequestId)},s.setPixelRatio=function(C,b){var I=C.options,v=C.canvas;b==="auto"&&(b=k(v)),I.pixelRatio=b,v.setAttribute("data-pixel-ratio",b),v.width=I.width*b,v.height=I.height*b,v.style.width=I.width+"px",v.style.height=I.height+"px"},s.setSize=function(C,b,I){C.options.width=b,C.options.height=I,C.bounds.max.x=C.bounds.min.x+b,C.bounds.max.y=C.bounds.min.y+I,C.options.pixelRatio!==1?s.setPixelRatio(C,C.options.pixelRatio):(C.canvas.width=b,C.canvas.height=I)},s.lookAt=function(C,b,I,v){v=typeof v<"u"?v:!0,b=l.isArray(b)?b:[b],I=I||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},E=0;E<b.length;E+=1){var T=b[E],x=T.bounds?T.bounds.min:T.min||T.position||T,A=T.bounds?T.bounds.max:T.max||T.position||T;x&&A&&(x.x<S.min.x&&(S.min.x=x.x),A.x>S.max.x&&(S.max.x=A.x),x.y<S.min.y&&(S.min.y=x.y),A.y>S.max.y&&(S.max.y=A.y))}var L=S.max.x-S.min.x+2*I.x,F=S.max.y-S.min.y+2*I.y,W=C.canvas.height,H=C.canvas.width,$=H/W,J=L/F,ue=1,pe=1;J>$?pe=J/$:ue=$/J,C.options.hasBounds=!0,C.bounds.min.x=S.min.x,C.bounds.max.x=S.min.x+L*ue,C.bounds.min.y=S.min.y,C.bounds.max.y=S.min.y+F*pe,v&&(C.bounds.min.x+=L*.5-L*ue*.5,C.bounds.max.x+=L*.5-L*ue*.5,C.bounds.min.y+=F*.5-F*pe*.5,C.bounds.max.y+=F*.5-F*pe*.5),C.bounds.min.x-=I.x,C.bounds.max.x-=I.x,C.bounds.min.y-=I.y,C.bounds.max.y-=I.y,C.mouse&&(f.setScale(C.mouse,{x:(C.bounds.max.x-C.bounds.min.x)/C.canvas.width,y:(C.bounds.max.y-C.bounds.min.y)/C.canvas.height}),f.setOffset(C.mouse,C.bounds.min))},s.startViewTransform=function(C){var b=C.bounds.max.x-C.bounds.min.x,I=C.bounds.max.y-C.bounds.min.y,v=b/C.options.width,S=I/C.options.height;C.context.setTransform(C.options.pixelRatio/v,0,0,C.options.pixelRatio/S,0,0),C.context.translate(-C.bounds.min.x,-C.bounds.min.y)},s.endViewTransform=function(C){C.context.setTransform(C.options.pixelRatio,0,0,C.options.pixelRatio,0,0)},s.world=function(C,b){var I=l.now(),v=C.engine,S=v.world,E=C.canvas,T=C.context,x=C.options,A=C.timing,L=c.allBodies(S),F=c.allConstraints(S),W=x.wireframes?x.wireframeBackground:x.background,H=[],$=[],J,ue={timestamp:v.timing.timestamp};if(d.trigger(C,"beforeRender",ue),C.currentBackground!==W&&D(C,W),T.globalCompositeOperation="source-in",T.fillStyle="transparent",T.fillRect(0,0,E.width,E.height),T.globalCompositeOperation="source-over",x.hasBounds){for(J=0;J<L.length;J++){var pe=L[J];u.overlaps(pe.bounds,C.bounds)&&H.push(pe)}for(J=0;J<F.length;J++){var ge=F[J],we=ge.bodyA,Ve=ge.bodyB,Pe=ge.pointA,X=ge.pointB;we&&(Pe=p.add(we.position,ge.pointA)),Ve&&(X=p.add(Ve.position,ge.pointB)),!(!Pe||!X)&&(u.contains(C.bounds,Pe)||u.contains(C.bounds,X))&&$.push(ge)}s.startViewTransform(C),C.mouse&&(f.setScale(C.mouse,{x:(C.bounds.max.x-C.bounds.min.x)/C.options.width,y:(C.bounds.max.y-C.bounds.min.y)/C.options.height}),f.setOffset(C.mouse,C.bounds.min))}else $=F,H=L,C.options.pixelRatio!==1&&C.context.setTransform(C.options.pixelRatio,0,0,C.options.pixelRatio,0,0);!x.wireframes||v.enableSleeping&&x.showSleeping?s.bodies(C,H,T):(x.showConvexHulls&&s.bodyConvexHulls(C,H,T),s.bodyWireframes(C,H,T)),x.showBounds&&s.bodyBounds(C,H,T),(x.showAxes||x.showAngleIndicator)&&s.bodyAxes(C,H,T),x.showPositions&&s.bodyPositions(C,H,T),x.showVelocity&&s.bodyVelocity(C,H,T),x.showIds&&s.bodyIds(C,H,T),x.showSeparations&&s.separations(C,v.pairs.list,T),x.showCollisions&&s.collisions(C,v.pairs.list,T),x.showVertexNumbers&&s.vertexNumbers(C,H,T),x.showMousePosition&&s.mousePosition(C,C.mouse,T),s.constraints($,T),x.hasBounds&&s.endViewTransform(C),d.trigger(C,"afterRender",ue),A.lastElapsed=l.now()-I},s.stats=function(C,b,I){for(var v=C.engine,S=v.world,E=c.allBodies(S),T=0,x=55,A=44,L=0,F=0,W=0;W<E.length;W+=1)T+=E[W].parts.length;var H={Part:T,Body:E.length,Cons:c.allConstraints(S).length,Comp:c.allComposites(S).length,Pair:v.pairs.list.length};b.fillStyle="#0e0f19",b.fillRect(L,F,x*5.5,A),b.font="12px Arial",b.textBaseline="top",b.textAlign="right";for(var $ in H){var J=H[$];b.fillStyle="#aaa",b.fillText($,L+x,F+8),b.fillStyle="#eee",b.fillText(J,L+x,F+26),L+=x}},s.performance=function(C,b){var I=C.engine,v=C.timing,S=v.deltaHistory,E=v.elapsedHistory,T=v.timestampElapsedHistory,x=v.engineDeltaHistory,A=v.engineUpdatesHistory,L=v.engineElapsedHistory,F=I.timing.lastUpdatesPerFrame,W=I.timing.lastDelta,H=w(S),$=w(E),J=w(x),ue=w(A),pe=w(L),ge=w(T),we=ge/H||0,Ve=Math.round(H/W),Pe=1e3/H||0,X=4,be=12,me=60,yt=34,Be=10,He=69;b.fillStyle="#0e0f19",b.fillRect(0,50,be*5+me*6+22,yt),s.status(b,Be,He,me,X,S.length,Math.round(Pe)+" fps",Pe/s._goodFps,function(Ae){return S[Ae]/H-1}),s.status(b,Be+be+me,He,me,X,x.length,W.toFixed(2)+" dt",s._goodDelta/W,function(Ae){return x[Ae]/J-1}),s.status(b,Be+(be+me)*2,He,me,X,A.length,F+" upf",Math.pow(l.clamp(ue/Ve||1,0,1),4),function(Ae){return A[Ae]/ue-1}),s.status(b,Be+(be+me)*3,He,me,X,L.length,pe.toFixed(2)+" ut",1-F*pe/s._goodFps,function(Ae){return L[Ae]/pe-1}),s.status(b,Be+(be+me)*4,He,me,X,E.length,$.toFixed(2)+" rt",1-$/s._goodFps,function(Ae){return E[Ae]/$-1}),s.status(b,Be+(be+me)*5,He,me,X,T.length,we.toFixed(2)+" x",we*we*we,function(Ae){return(T[Ae]/S[Ae]/we||0)-1})},s.status=function(C,b,I,v,S,E,T,x,A){C.strokeStyle="#888",C.fillStyle="#444",C.lineWidth=1,C.fillRect(b,I+7,v,1),C.beginPath(),C.moveTo(b,I+7-S*l.clamp(.4*A(0),-2,2));for(var L=0;L<v;L+=1)C.lineTo(b+L,I+7-(L<E?S*l.clamp(.4*A(L),-2,2):0));C.stroke(),C.fillStyle="hsl("+l.clamp(25+95*x,0,120)+",100%,60%)",C.fillRect(b,I-7,4,4),C.font="12px Arial",C.textBaseline="middle",C.textAlign="right",C.fillStyle="#eee",C.fillText(T,b+v,I-5)},s.constraints=function(C,b){for(var I=b,v=0;v<C.length;v++){var S=C[v];if(!(!S.render.visible||!S.pointA||!S.pointB)){var E=S.bodyA,T=S.bodyB,x,A;if(E?x=p.add(E.position,S.pointA):x=S.pointA,S.render.type==="pin")I.beginPath(),I.arc(x.x,x.y,3,0,2*Math.PI),I.closePath();else{if(T?A=p.add(T.position,S.pointB):A=S.pointB,I.beginPath(),I.moveTo(x.x,x.y),S.render.type==="spring")for(var L=p.sub(A,x),F=p.perp(p.normalise(L)),W=Math.ceil(l.clamp(S.length/5,12,20)),H,$=1;$<W;$+=1)H=$%2===0?1:-1,I.lineTo(x.x+L.x*($/W)+F.x*H*4,x.y+L.y*($/W)+F.y*H*4);I.lineTo(A.x,A.y)}S.render.lineWidth&&(I.lineWidth=S.render.lineWidth,I.strokeStyle=S.render.strokeStyle,I.stroke()),S.render.anchors&&(I.fillStyle=S.render.strokeStyle,I.beginPath(),I.arc(x.x,x.y,3,0,2*Math.PI),I.arc(A.x,A.y,3,0,2*Math.PI),I.closePath(),I.fill())}}},s.bodies=function(C,b,I){var v=I;C.engine;var S=C.options,E=S.showInternalEdges||!S.wireframes,T,x,A,L;for(A=0;A<b.length;A++)if(T=b[A],!!T.render.visible){for(L=T.parts.length>1?1:0;L<T.parts.length;L++)if(x=T.parts[L],!!x.render.visible){if(S.showSleeping&&T.isSleeping?v.globalAlpha=.5*x.render.opacity:x.render.opacity!==1&&(v.globalAlpha=x.render.opacity),x.render.sprite&&x.render.sprite.texture&&!S.wireframes){var F=x.render.sprite,W=N(C,F.texture);v.translate(x.position.x,x.position.y),v.rotate(x.angle),v.drawImage(W,W.width*-F.xOffset*F.xScale,W.height*-F.yOffset*F.yScale,W.width*F.xScale,W.height*F.yScale),v.rotate(-x.angle),v.translate(-x.position.x,-x.position.y)}else{if(x.circleRadius)v.beginPath(),v.arc(x.position.x,x.position.y,x.circleRadius,0,2*Math.PI);else{v.beginPath(),v.moveTo(x.vertices[0].x,x.vertices[0].y);for(var H=1;H<x.vertices.length;H++)!x.vertices[H-1].isInternal||E?v.lineTo(x.vertices[H].x,x.vertices[H].y):v.moveTo(x.vertices[H].x,x.vertices[H].y),x.vertices[H].isInternal&&!E&&v.moveTo(x.vertices[(H+1)%x.vertices.length].x,x.vertices[(H+1)%x.vertices.length].y);v.lineTo(x.vertices[0].x,x.vertices[0].y),v.closePath()}S.wireframes?(v.lineWidth=1,v.strokeStyle=C.options.wireframeStrokeStyle,v.stroke()):(v.fillStyle=x.render.fillStyle,x.render.lineWidth&&(v.lineWidth=x.render.lineWidth,v.strokeStyle=x.render.strokeStyle,v.stroke()),v.fill())}v.globalAlpha=1}}},s.bodyWireframes=function(C,b,I){var v=I,S=C.options.showInternalEdges,E,T,x,A,L;for(v.beginPath(),x=0;x<b.length;x++)if(E=b[x],!!E.render.visible)for(L=E.parts.length>1?1:0;L<E.parts.length;L++){for(T=E.parts[L],v.moveTo(T.vertices[0].x,T.vertices[0].y),A=1;A<T.vertices.length;A++)!T.vertices[A-1].isInternal||S?v.lineTo(T.vertices[A].x,T.vertices[A].y):v.moveTo(T.vertices[A].x,T.vertices[A].y),T.vertices[A].isInternal&&!S&&v.moveTo(T.vertices[(A+1)%T.vertices.length].x,T.vertices[(A+1)%T.vertices.length].y);v.lineTo(T.vertices[0].x,T.vertices[0].y)}v.lineWidth=1,v.strokeStyle=C.options.wireframeStrokeStyle,v.stroke()},s.bodyConvexHulls=function(C,b,I){var v=I,S,E,T;for(v.beginPath(),E=0;E<b.length;E++)if(S=b[E],!(!S.render.visible||S.parts.length===1)){for(v.moveTo(S.vertices[0].x,S.vertices[0].y),T=1;T<S.vertices.length;T++)v.lineTo(S.vertices[T].x,S.vertices[T].y);v.lineTo(S.vertices[0].x,S.vertices[0].y)}v.lineWidth=1,v.strokeStyle="rgba(255,255,255,0.2)",v.stroke()},s.vertexNumbers=function(C,b,I){var v=I,S,E,T;for(S=0;S<b.length;S++){var x=b[S].parts;for(T=x.length>1?1:0;T<x.length;T++){var A=x[T];for(E=0;E<A.vertices.length;E++)v.fillStyle="rgba(255,255,255,0.2)",v.fillText(S+"_"+E,A.position.x+(A.vertices[E].x-A.position.x)*.8,A.position.y+(A.vertices[E].y-A.position.y)*.8)}}},s.mousePosition=function(C,b,I){var v=I;v.fillStyle="rgba(255,255,255,0.8)",v.fillText(b.position.x+"  "+b.position.y,b.position.x+5,b.position.y-5)},s.bodyBounds=function(C,b,I){var v=I;C.engine;var S=C.options;v.beginPath();for(var E=0;E<b.length;E++){var T=b[E];if(T.render.visible)for(var x=b[E].parts,A=x.length>1?1:0;A<x.length;A++){var L=x[A];v.rect(L.bounds.min.x,L.bounds.min.y,L.bounds.max.x-L.bounds.min.x,L.bounds.max.y-L.bounds.min.y)}}S.wireframes?v.strokeStyle="rgba(255,255,255,0.08)":v.strokeStyle="rgba(0,0,0,0.1)",v.lineWidth=1,v.stroke()},s.bodyAxes=function(C,b,I){var v=I;C.engine;var S=C.options,E,T,x,A;for(v.beginPath(),T=0;T<b.length;T++){var L=b[T],F=L.parts;if(L.render.visible)if(S.showAxes)for(x=F.length>1?1:0;x<F.length;x++)for(E=F[x],A=0;A<E.axes.length;A++){var W=E.axes[A];v.moveTo(E.position.x,E.position.y),v.lineTo(E.position.x+W.x*20,E.position.y+W.y*20)}else for(x=F.length>1?1:0;x<F.length;x++)for(E=F[x],A=0;A<E.axes.length;A++)v.moveTo(E.position.x,E.position.y),v.lineTo((E.vertices[0].x+E.vertices[E.vertices.length-1].x)/2,(E.vertices[0].y+E.vertices[E.vertices.length-1].y)/2)}S.wireframes?(v.strokeStyle="indianred",v.lineWidth=1):(v.strokeStyle="rgba(255, 255, 255, 0.4)",v.globalCompositeOperation="overlay",v.lineWidth=2),v.stroke(),v.globalCompositeOperation="source-over"},s.bodyPositions=function(C,b,I){var v=I;C.engine;var S=C.options,E,T,x,A;for(v.beginPath(),x=0;x<b.length;x++)if(E=b[x],!!E.render.visible)for(A=0;A<E.parts.length;A++)T=E.parts[A],v.arc(T.position.x,T.position.y,3,0,2*Math.PI,!1),v.closePath();for(S.wireframes?v.fillStyle="indianred":v.fillStyle="rgba(0,0,0,0.5)",v.fill(),v.beginPath(),x=0;x<b.length;x++)E=b[x],E.render.visible&&(v.arc(E.positionPrev.x,E.positionPrev.y,2,0,2*Math.PI,!1),v.closePath());v.fillStyle="rgba(255,165,0,0.8)",v.fill()},s.bodyVelocity=function(C,b,I){var v=I;v.beginPath();for(var S=0;S<b.length;S++){var E=b[S];if(E.render.visible){var T=o.getVelocity(E);v.moveTo(E.position.x,E.position.y),v.lineTo(E.position.x+T.x,E.position.y+T.y)}}v.lineWidth=3,v.strokeStyle="cornflowerblue",v.stroke()},s.bodyIds=function(C,b,I){var v=I,S,E;for(S=0;S<b.length;S++)if(b[S].render.visible){var T=b[S].parts;for(E=T.length>1?1:0;E<T.length;E++){var x=T[E];v.font="12px Arial",v.fillStyle="rgba(255,255,255,0.5)",v.fillText(x.id,x.position.x+10,x.position.y-10)}}},s.collisions=function(C,b,I){var v=I,S=C.options,E,T,x,A;for(v.beginPath(),x=0;x<b.length;x++)if(E=b[x],!!E.isActive)for(T=E.collision,A=0;A<E.contactCount;A++){var L=E.contacts[A],F=L.vertex;v.rect(F.x-1.5,F.y-1.5,3.5,3.5)}for(S.wireframes?v.fillStyle="rgba(255,255,255,0.7)":v.fillStyle="orange",v.fill(),v.beginPath(),x=0;x<b.length;x++)if(E=b[x],!!E.isActive&&(T=E.collision,E.contactCount>0)){var W=E.contacts[0].vertex.x,H=E.contacts[0].vertex.y;E.contactCount===2&&(W=(E.contacts[0].vertex.x+E.contacts[1].vertex.x)/2,H=(E.contacts[0].vertex.y+E.contacts[1].vertex.y)/2),T.bodyB===T.supports[0].body||T.bodyA.isStatic===!0?v.moveTo(W-T.normal.x*8,H-T.normal.y*8):v.moveTo(W+T.normal.x*8,H+T.normal.y*8),v.lineTo(W,H)}S.wireframes?v.strokeStyle="rgba(255,165,0,0.7)":v.strokeStyle="orange",v.lineWidth=1,v.stroke()},s.separations=function(C,b,I){var v=I,S=C.options,E,T,x,A,L;for(v.beginPath(),L=0;L<b.length;L++)if(E=b[L],!!E.isActive){T=E.collision,x=T.bodyA,A=T.bodyB;var F=1;!A.isStatic&&!x.isStatic&&(F=.5),A.isStatic&&(F=0),v.moveTo(A.position.x,A.position.y),v.lineTo(A.position.x-T.penetration.x*F,A.position.y-T.penetration.y*F),F=1,!A.isStatic&&!x.isStatic&&(F=.5),x.isStatic&&(F=0),v.moveTo(x.position.x,x.position.y),v.lineTo(x.position.x+T.penetration.x*F,x.position.y+T.penetration.y*F)}S.wireframes?v.strokeStyle="rgba(255,165,0,0.5)":v.strokeStyle="orange",v.stroke()},s.inspector=function(C,b){C.engine;var I=C.selected,v=C.render,S=v.options,E;if(S.hasBounds){var T=v.bounds.max.x-v.bounds.min.x,x=v.bounds.max.y-v.bounds.min.y,A=T/v.options.width,L=x/v.options.height;b.scale(1/A,1/L),b.translate(-v.bounds.min.x,-v.bounds.min.y)}for(var F=0;F<I.length;F++){var W=I[F].data;switch(b.translate(.5,.5),b.lineWidth=1,b.strokeStyle="rgba(255,165,0,0.9)",b.setLineDash([1,2]),W.type){case"body":E=W.bounds,b.beginPath(),b.rect(Math.floor(E.min.x-3),Math.floor(E.min.y-3),Math.floor(E.max.x-E.min.x+6),Math.floor(E.max.y-E.min.y+6)),b.closePath(),b.stroke();break;case"constraint":var H=W.pointA;W.bodyA&&(H=W.pointB),b.beginPath(),b.arc(H.x,H.y,10,0,2*Math.PI),b.closePath(),b.stroke();break}b.setLineDash([]),b.translate(-.5,-.5)}C.selectStart!==null&&(b.translate(.5,.5),b.lineWidth=1,b.strokeStyle="rgba(255,165,0,0.6)",b.fillStyle="rgba(255,165,0,0.1)",E=C.selectBounds,b.beginPath(),b.rect(Math.floor(E.min.x),Math.floor(E.min.y),Math.floor(E.max.x-E.min.x),Math.floor(E.max.y-E.min.y)),b.closePath(),b.stroke(),b.fill(),b.translate(-.5,-.5)),S.hasBounds&&b.setTransform(1,0,0,1,0,0)};var _=function(C,b){var I=C.engine,v=C.timing,S=v.historySize,E=I.timing.timestamp;v.delta=b-v.lastTime||s._goodDelta,v.lastTime=b,v.timestampElapsed=E-v.lastTimestamp||0,v.lastTimestamp=E,v.deltaHistory.unshift(v.delta),v.deltaHistory.length=Math.min(v.deltaHistory.length,S),v.engineDeltaHistory.unshift(I.timing.lastDelta),v.engineDeltaHistory.length=Math.min(v.engineDeltaHistory.length,S),v.timestampElapsedHistory.unshift(v.timestampElapsed),v.timestampElapsedHistory.length=Math.min(v.timestampElapsedHistory.length,S),v.engineUpdatesHistory.unshift(I.timing.lastUpdatesPerFrame),v.engineUpdatesHistory.length=Math.min(v.engineUpdatesHistory.length,S),v.engineElapsedHistory.unshift(I.timing.lastElapsed),v.engineElapsedHistory.length=Math.min(v.engineElapsedHistory.length,S),v.elapsedHistory.unshift(v.lastElapsed),v.elapsedHistory.length=Math.min(v.elapsedHistory.length,S)},w=function(C){for(var b=0,I=0;I<C.length;I+=1)b+=C[I];return b/C.length||0},R=function(C,b){var I=document.createElement("canvas");return I.width=C,I.height=b,I.oncontextmenu=function(){return!1},I.onselectstart=function(){return!1},I},k=function(C){var b=C.getContext("2d"),I=window.devicePixelRatio||1,v=b.webkitBackingStorePixelRatio||b.mozBackingStorePixelRatio||b.msBackingStorePixelRatio||b.oBackingStorePixelRatio||b.backingStorePixelRatio||1;return I/v},N=function(C,b){var I=C.textures[b];return I||(I=C.textures[b]=new Image,I.src=b,I)},D=function(C,b){var I=b;/(jpg|gif|png)$/.test(b)&&(I="url("+b+")"),C.canvas.style.background=I,C.canvas.style.backgroundSize="contain",C.currentBackground=b}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(5),l=r(17),c=r(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(d){var p={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},f=c.extend(p,d);return f.fps=0,f},s.run=function(d,p){return d.timeBuffer=s._frameDeltaFallback,(function f(h){d.frameRequestId=s._onNextFrame(d,f),h&&d.enabled&&s.tick(d,p,h)})(),d},s.tick=function(d,p,f){var h=c.now(),m=d.delta,_=0,w=f-d.timeLastTick;if((!w||!d.timeLastTick||w>Math.max(s._maxFrameDelta,d.maxFrameTime))&&(w=d.frameDelta||s._frameDeltaFallback),d.frameDeltaSmoothing){d.frameDeltaHistory.push(w),d.frameDeltaHistory=d.frameDeltaHistory.slice(-d.frameDeltaHistorySize);var R=d.frameDeltaHistory.slice(0).sort(),k=d.frameDeltaHistory.slice(R.length*s._smoothingLowerBound,R.length*s._smoothingUpperBound),N=u(k);w=N||w}d.frameDeltaSnapping&&(w=1e3/Math.round(1e3/w)),d.frameDelta=w,d.timeLastTick=f,d.timeBuffer+=d.frameDelta,d.timeBuffer=c.clamp(d.timeBuffer,0,d.frameDelta+m*s._timeBufferMargin),d.lastUpdatesDeferred=0;var D=d.maxUpdates||Math.ceil(d.maxFrameTime/m),C={timestamp:p.timing.timestamp};o.trigger(d,"beforeTick",C),o.trigger(d,"tick",C);for(var b=c.now();m>0&&d.timeBuffer>=m*s._timeBufferMargin;){o.trigger(d,"beforeUpdate",C),l.update(p,m),o.trigger(d,"afterUpdate",C),d.timeBuffer-=m,_+=1;var I=c.now()-h,v=c.now()-b,S=I+s._elapsedNextEstimate*v/_;if(_>=D||S>d.maxFrameTime){d.lastUpdatesDeferred=Math.round(Math.max(0,d.timeBuffer/m-s._timeBufferMargin));break}}p.timing.lastUpdatesPerFrame=_,o.trigger(d,"afterTick",C),d.frameDeltaHistory.length>=100&&(d.lastUpdatesDeferred&&Math.round(d.frameDelta/m)>D?c.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):d.lastUpdatesDeferred&&c.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof d.isFixed<"u"&&c.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(d.deltaMin||d.deltaMax)&&c.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),d.fps!==0&&c.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(d){s._cancelNextFrame(d)},s._onNextFrame=function(d,p){if(typeof window<"u"&&window.requestAnimationFrame)d.frameRequestId=window.requestAnimationFrame(p);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return d.frameRequestId},s._cancelNextFrame=function(d){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(d.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(d){for(var p=0,f=d.length,h=0;h<f;h+=1)p+=d[h];return p/f||0}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(8),l=r(0),c=l.deprecated;(function(){s.collides=function(u,d){return o.collides(u,d)},c(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(t,i,r){var s={};t.exports=s,r(1);var o=r(0);(function(){s.pathToVertices=function(l,c){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,d,p,f,h,m,_,w,R,k,N=[],D,C,b=0,I=0,v=0;c=c||15;var S=function(T,x,A){var L=A%2===1&&A>1;if(!R||T!=R.x||x!=R.y){R&&L?(D=R.x,C=R.y):(D=0,C=0);var F={x:D+T,y:C+x};(L||!R)&&(R=F),N.push(F),I=D+T,v=C+x}},E=function(T){var x=T.pathSegTypeAsLetter.toUpperCase();if(x!=="Z"){switch(x){case"M":case"L":case"T":case"C":case"S":case"Q":I=T.x,v=T.y;break;case"H":I=T.x;break;case"V":v=T.y;break}S(I,v,T.pathSegType)}};for(s._svgPathToAbsolute(l),p=l.getTotalLength(),m=[],u=0;u<l.pathSegList.numberOfItems;u+=1)m.push(l.pathSegList.getItem(u));for(_=m.concat();b<p;){if(k=l.getPathSegAtLength(b),h=m[k],h!=w){for(;_.length&&_[0]!=h;)E(_.shift());w=h}switch(h.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":f=l.getPointAtLength(b),S(f.x,f.y,0);break}b+=c}for(u=0,d=_.length;u<d;++u)E(_[u]);return N},s._svgPathToAbsolute=function(l){for(var c,u,d,p,f,h,m=l.pathSegList,_=0,w=0,R=m.numberOfItems,k=0;k<R;++k){var N=m.getItem(k),D=N.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(D))"x"in N&&(_=N.x),"y"in N&&(w=N.y);else switch("x1"in N&&(d=_+N.x1),"x2"in N&&(f=_+N.x2),"y1"in N&&(p=w+N.y1),"y2"in N&&(h=w+N.y2),"x"in N&&(_+=N.x),"y"in N&&(w+=N.y),D){case"m":m.replaceItem(l.createSVGPathSegMovetoAbs(_,w),k);break;case"l":m.replaceItem(l.createSVGPathSegLinetoAbs(_,w),k);break;case"h":m.replaceItem(l.createSVGPathSegLinetoHorizontalAbs(_),k);break;case"v":m.replaceItem(l.createSVGPathSegLinetoVerticalAbs(w),k);break;case"c":m.replaceItem(l.createSVGPathSegCurvetoCubicAbs(_,w,d,p,f,h),k);break;case"s":m.replaceItem(l.createSVGPathSegCurvetoCubicSmoothAbs(_,w,f,h),k);break;case"q":m.replaceItem(l.createSVGPathSegCurvetoQuadraticAbs(_,w,d,p),k);break;case"t":m.replaceItem(l.createSVGPathSegCurvetoQuadraticSmoothAbs(_,w),k);break;case"a":m.replaceItem(l.createSVGPathSegArcAbs(_,w,N.r1,N.r2,N.angle,N.largeArcFlag,N.sweepFlag),k);break;case"z":case"Z":_=c,w=u;break}(D=="M"||D=="m")&&(c=_,u=w)}}})()}),(function(t,i,r){var s={};t.exports=s;var o=r(6);r(0),(function(){s.create=o.create,s.add=o.add,s.remove=o.remove,s.clear=o.clear,s.addComposite=o.addComposite,s.addBody=o.addBody,s.addConstraint=o.addConstraint})()})])})})(bs)),bs.exports}var U=mw();class _w{constructor(e=vw()){this.seed=e,this.resetRandom()}randomFn;setSeed(e){this.seed!==e&&(this.seed=e,this.resetRandom())}getRandomNumber(){return this.randomFn?this.randomFn():Math.random()}resetRandom(){this.randomFn=ww(yw(this.seed))}}function vw(){const n=new Date,e=n.getFullYear().toString().slice(-2),t=(n.getMonth()+1).toString().padStart(2,"0"),i=n.getDate().toString().padStart(2,"0");return`${e}${t}${i}`}function jc(){return Math.random().toString(36).substring(2,15)}const yw=n=>{let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);e=(e<<5)-e+i,e=e&e}return e},ww=n=>()=>{let e=n+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296};class Iw{constructor(e,t){this.engine=e,this.seedService=t}ducksCountPerColor=4;colors=["#00ffff","#ff00ff","#ffff00"];duckRadius=12;wolfRadius=16;spawnRadius=200;maxWolves=4;wolfIdLocal="local";wolfRingColors=["#ff5555","#55ff55","#5555ff","#ffaa00"];wolves=new Map;ducks=[];isHost=!0;duckTargets=new Map;snapBuffer=[];clockSkewMs=0;warpCount=0;stats={bufDepth:0,lastAlpha:0,lastExtrapMs:0};startedAt=null;finishedAt=null;onWinCallback=null;onStart(){this.upsertWolf(this.wolfIdLocal,!0);for(const e of this.colors)for(let t=0;t<this.ducksCountPerColor;t++){const i=this.getRandomPosition();console.debug("Spawning duck at",i);const r=this.instantiate(i,this.duckRadius,e);this.ducks.push(r)}U.World.add(this.engine.world,Array.from(this.wolves.values()).map(e=>e.body)),U.World.add(this.engine.world,this.ducks),this.startedAt==null&&(this.startedAt=performance.now())}onBeforeUpdate(e){const t=ke.game.centerForce,i=ke.game.separationForce,r=ke.game.groupForce,s=ke.game.wolfForce;this.ducks.forEach((p,f)=>{if(!this.isHost&&ke.net.enableInterpolation){const C=performance.now()+this.clockSkewMs-ke.net.renderDelayMs,b=this.sampleInterpolatedDuck(f,C);if(b){this.correctBodyTowards(p,b.position,b.velocity,e.delta/1e3);return}const I=this.duckTargets.get(f);if(I){const{position:v,velocity:S}=I,E=.2,T=U.Vector.add(U.Vector.mult(p.position,1-E),U.Vector.mult(v,E)),x=U.Vector.add(U.Vector.mult(p.velocity,1-E),U.Vector.mult(S,E));U.Body.setPosition(p,T),U.Body.setVelocity(p,x)}return}else if(!this.isHost){const D=this.duckTargets.get(f);if(D){const{position:C,velocity:b}=D,I=.2,v=U.Vector.add(U.Vector.mult(p.position,1-I),U.Vector.mult(C,I)),S=U.Vector.add(U.Vector.mult(p.velocity,1-I),U.Vector.mult(b,I));U.Body.setPosition(p,v),U.Body.setVelocity(p,S)}return}let h={x:0,y:0};const m=this.getCenterPosition();h=U.Vector.add(h,U.Vector.mult(U.Vector.sub(m,p.position),t));let _=null,w=1/0;for(const D of this.ducks){if(D===p)continue;const C=U.Vector.magnitude(U.Vector.sub(D.position,p.position));C<w&&(w=C,_=D)}if(_&&w>1e-4){const D=U.Vector.normalise(U.Vector.sub(_.position,p.position)),C=1/(w+1);h=U.Vector.add(h,U.Vector.mult(D,-i*C))}const N=this.ducks.filter(D=>D!==p).sort((D,C)=>{const b=U.Vector.magnitude(U.Vector.sub(D.position,p.position)),I=U.Vector.magnitude(U.Vector.sub(C.position,p.position));return b-I}).slice(0,2);if(N.length){let D={x:0,y:0};for(const b of N)D=U.Vector.add(D,b.position);const C=U.Vector.mult(D,1/N.length);h=U.Vector.add(h,U.Vector.mult(U.Vector.sub(C,p.position),r))}for(const{body:D}of this.wolves.values()){const C=U.Vector.sub(D.position,p.position),b=U.Vector.magnitude(C);if(b>1e-4){const I=U.Vector.normalise(C),v=1/(b/7+1);h=U.Vector.add(h,U.Vector.mult(I,-s*v))}}U.Body.applyForce(p,p.position,U.Vector.mult(h,p.mass))});const o=9,l=.02,c=6,u=e.delta/1e3,d=this.engine.render.mouse;for(const[,p]of this.wolves){const f=p.body,h=f.velocity,m=f.position,_=p.isLocal?d.position:p.target??m,w=U.Vector.sub(_,m);if(U.Vector.magnitude(w)<c){U.Body.setVelocity(f,{x:0,y:0}),U.Body.setAngularVelocity(f,0),p.isLocal&&U.Body.setPosition(f,_);continue}const k=Math.sqrt(o),N=o*(_.x-m.x)-2*k*h.x,D=o*(_.y-m.y)-2*k*h.y;let C={x:f.mass*N*u*u,y:f.mass*D*u*u};U.Vector.magnitude(C)>l&&(C=U.Vector.mult(U.Vector.normalise(C),l)),U.Body.applyForce(f,m,C)}if(this.isHost&&this.finishedAt==null){const p=this.checkWinConditionHost();if(p!=null){this.finishedAt=p;const f=this.startedAt??p,h=p-f;this.onWinCallback?.(h)}}}checkWinConditionHost(){if(!this.isHost)return null;const e=new Map;for(const s of this.ducks){const o=s.render.fillStyle||"#fff",l=e.get(o)??[];l.push(s),e.set(o,l)}const t=[];for(const[s,o]of e){let l={x:0,y:0};for(const d of o)l=U.Vector.add(l,d.position);const c=U.Vector.mult(l,1/o.length);let u=0;for(const d of o)u=Math.max(u,U.Vector.magnitude(U.Vector.sub(d.position,c)));t.push({color:s,center:c,radius:u})}if(!t.length)return null;const i=80;if(t.some(s=>s.radius>i))return null;const r=40;for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++){const l=t[s],c=t[o];if(U.Vector.magnitude(U.Vector.sub(l.center,c.center))<l.radius+c.radius+r)return null}return performance.now()}instantiate(e,t=5,i="#ffffff"){return U.Bodies.circle(e.x,e.y,t,{frictionAir:.06,restitution:.2,density:.02,render:{fillStyle:i}})}getWorldSize(){const e=this.engine.world.bounds;return{width:e.max.x-e.min.x,height:e.max.y-e.min.y}}getCenterPosition(){const{width:e,height:t}=this.getWorldSize();return U.Vector.create(e/2,t/2)}getRandomPosition(){const e=this.seedService.getRandomNumber.bind(this.seedService),t=e()*Math.PI*2,i=Math.sqrt(e()),r=i*Math.cos(t),s=i*Math.sin(t);return U.Vector.add(this.getCenterPosition(),U.Vector.mult(U.Vector.create(r,s),this.spawnRadius))}upsertWolf(e,t,i){if(this.wolves.has(e))return;if(!this.wolves.has(e)&&this.wolves.size>=this.maxWolves)throw new Error("Max wolves reached");const r="#ffffff",s=this.wolves.size%this.wolfRingColors.length,o=i??this.wolfRingColors[s],l=this.instantiate(this.getCenterPosition(),this.wolfRadius,r);l.render.strokeStyle=o,l.render.lineWidth=10,this.wolves.set(e,{body:l,isLocal:t,ringColor:o}),U.World.addBody(this.engine.world,l)}removeWolf(e){const t=this.wolves.get(e);t&&(U.World.remove(this.engine.world,t.body),this.wolves.delete(e))}setRemoteTarget(e,t){let i=this.wolves.get(e);i||(this.upsertWolf(e,!1),i=this.wolves.get(e)),!i.isLocal&&(i.target={x:t.x,y:t.y})}setIsHost(e){this.isHost=e}getDuckSnapshots(){return this.ducks.map((e,t)=>({id:String(t),x:e.position.x,y:e.position.y,vx:e.velocity.x,vy:e.velocity.y}))}setDuckTargets(e){for(const t of e){const i=Number(t.id);Number.isFinite(i)&&this.duckTargets.set(i,{position:U.Vector.create(t.x,t.y),velocity:U.Vector.create(t.vx,t.vy)})}}setDuckBatch(e){if(this.isHost)return;const t=performance.now(),i=e.tHost-t,r=.1;this.clockSkewMs=this.clockSkewMs===0?i:this.clockSkewMs*(1-r)+i*r;const s=e.snaps.map(c=>({id:Number(c.id),x:c.x,y:c.y,vx:c.vx,vy:c.vy,a:c.a,av:c.av}));this.snapBuffer.push({tHost:e.tHost,snaps:s});const o=ke.net.renderDelayMs+2*ke.net.maxExtrapolationMs,l=performance.now()+this.clockSkewMs-o;for(;this.snapBuffer.length>2&&this.snapBuffer[1].tHost<l;)this.snapBuffer.shift();this.stats.bufDepth=this.snapBuffer.length}sampleInterpolatedDuck(e,t){if(this.snapBuffer.length===0)return null;let i=this.snapBuffer[0],r=this.snapBuffer[this.snapBuffer.length-1];for(let h=0;h<this.snapBuffer.length;h++){const m=this.snapBuffer[h];if(m.tHost<=t&&(i=m),m.tHost>=t){r=m;break}}const s=i.snaps.find(h=>h.id===e),o=r.snaps.find(h=>h.id===e);if(!s&&!o)return null;if(i.tHost===r.tHost||!o){const m=Math.min(ke.net.maxExtrapolationMs,Math.max(0,t-i.tHost))/1e3,_=s??o;return{position:U.Vector.create(_.x+_.vx*m,_.y+_.vy*m),velocity:U.Vector.create(_.vx,_.vy)}}const l=r.tHost-i.tHost,c=Math.max(0,Math.min(1,(t-i.tHost)/l));this.stats.lastAlpha=c;const u=s??o,d=o??s,p=U.Vector.create(u.x+(d.x-u.x)*c,u.y+(d.y-u.y)*c),f=U.Vector.create(u.vx+(d.vx-u.vx)*c,u.vy+(d.vy-u.vy)*c);return{position:p,velocity:f}}correctBodyTowards(e,t,i,r){const s=U.Vector.sub(t,e.position);if(U.Vector.magnitude(s)>ke.net.warpDistancePx){U.Body.setPosition(e,t),U.Body.setVelocity(e,i),this.warpCount++;return}const l=ke.net.springK,c={x:i.x+s.x*l,y:i.y+s.y*l},u=Math.max(0,ke.net.dampingC),d=Math.max(0,Math.min(1,1-Math.exp(-u*r))),p={x:e.velocity.x+(c.x-e.velocity.x)*d,y:e.velocity.y+(c.y-e.velocity.y)*d},f=800,h=Math.hypot(p.x,p.y);if(h>f){const m=f/h;p.x*=m,p.y*=m}U.Body.setVelocity(e,p)}onWin(e){this.onWinCallback=e}getElapsedMs(e=performance.now()){return this.startedAt==null?0:this.finishedAt!=null?Math.max(0,this.finishedAt-this.startedAt):Math.max(0,e-this.startedAt)}resetRound(){for(const e of this.ducks)U.World.remove(this.engine.world,e);this.ducks=[];for(const e of this.colors)for(let t=0;t<this.ducksCountPerColor;t++){const i=this.getRandomPosition(),r=this.instantiate(i,this.duckRadius,e);this.ducks.push(r)}U.World.add(this.engine.world,this.ducks),this.duckTargets.clear(),this.startedAt=performance.now(),this.finishedAt=null}}class Sw{constructor(e,t){this.canvas=e,this.engine=U.Engine.create({gravity:{x:0,y:0}}),this.engine.world.bounds={min:{x:0,y:0},max:{x:800,y:800}},this.runner=U.Runner.create(),this.render=U.Render.create({canvas:this.canvas,engine:this.engine,options:{width:this.canvas.parentElement?.clientWidth||window.innerWidth,height:this.canvas.parentElement?.clientHeight||window.innerHeight,pixelRatio:"auto",wireframes:!1,background:this.canvas.parentElement?.computedStyleMap()?.get("background-color")?.toString()||"#2e2e2e"}}),this.mouse=U.Mouse.create(this.render.canvas),this.engine.render=this.render,this.render.mouse=this.mouse;const i=new _w(t);this.gameBehaviour=new Iw(this.engine,i)}engine;render;runner;mouse;gameBehaviour;start(){this.gameBehaviour.onStart(),U.Events.on(this.engine,"beforeUpdate",e=>{this.gameBehaviour.onBeforeUpdate(e)}),U.Render.run(this.render),U.Runner.run(this.runner,this.engine)}stop(){U.Render.stop(this.render),U.Runner.stop(this.runner)}resize(){const e=this.render.canvas.parentElement?.clientWidth||window.innerWidth,t=this.render.canvas.parentElement?.clientHeight||window.innerHeight,i=Math.max(1,Math.floor(window.devicePixelRatio||1));U.Render.setSize(this.render,e,t),console.debug("Resized: ",{targetW:e,targetH:t,dpr:i,actualW:this.render.canvas.width,actualH:this.render.canvas.height}),U.Render.lookAt(this.render,this.engine.world.bounds)}onWin(e){this.gameBehaviour.onWin(e)}setHost(e){this.gameBehaviour.setIsHost(e)}getDuckSnapshots(){return this.gameBehaviour.getDuckSnapshots()}setDuckTargets(e){this.gameBehaviour.setDuckTargets(e.snaps),this.gameBehaviour.setDuckBatch(e)}addRemoteWolf(e,t){this.gameBehaviour.upsertWolf(e,!1,t)}removeRemoteWolf(e){this.gameBehaviour.removeWolf(e)}setRemoteWolfTarget(e,t){this.gameBehaviour.setRemoteTarget(e,t)}getMousePosition(){return{x:this.mouse.position.x,y:this.mouse.position.y}}getElapsedMs(){return this.gameBehaviour.getElapsedMs()}resetRound(){this.gameBehaviour.resetRound()}}class Ew{constructor(e){this.db=e}userId;_refs;_subscriptions=[];async start(e,t){const i=k=>Bc(this.db,k),r=k=>(...N)=>Bc(this.db,k(...N)),s=`rooms/${e}`,o=`${s}/hostId`,l=`${s}/createdAt`,c=`${s}/state`,u=`${s}/peers`,d=`${u}/${t}`,p=`${s}/cursors`,f=`${p}/${t}`,h=`${s}/signals`,m=`${h}/${t}`,_=(k,N)=>`${h}/${k}/${N}`,w=k=>_(k,t),R=k=>_(t,k);this.userId=t,this._refs={room:i(s),hostId:i(o),createdAt:i(l),state:i(c),peers:i(u),presence:i(d),cursors:i(p),cursor:i(f),signals:i(h),outbox:i(m),getInboxFrom:r(w),getOutboxTo:r(R),getChannel:r(_)},await this.updatePresence();try{await no(this._refs.presence).remove()}catch(k){throw new Error("Failed to setup onDisconnect for presence: "+k.message)}try{await no(this._refs.cursor).remove()}catch(k){throw new Error("Failed to setup onDisconnect for cursor: "+k.message)}try{await no(this._refs.outbox).remove()}catch(k){throw new Error("Failed to setup onDisconnect for outbox: "+k.message)}}async dispose(){this._subscriptions.forEach(e=>e()),this._subscriptions=[];try{await vs(this._refs.presence)}catch{console.error("Failed to remove presence on dispose")}try{await vs(this._refs.cursor)}catch{console.error("Failed to remove cursor on dispose")}try{await vs(this._refs.outbox)}catch{console.error("Failed to remove outbox on dispose")}}async updateStateToActive(){await this.updateState({status:"active"})}async updateStateToFinished(e){await this.updateState({status:"finished",finishedAt:Is(),winnerTimeMs:e})}async updateStateToIdle(){await this.updateState({status:"idle"})}async getHostId(){try{return(await ys(this._refs.hostId)).val()}catch(e){throw new Error("Failed to get host ID from Firebase: "+e.message)}}async getOnlinePeers(){try{const t=(await ys(this._refs.peers)).val()||{};return Object.keys(t)}catch(e){throw new Error("Failed to get online peers from Firebase: "+e.message)}}async updateHostId(e){try{await en(this._refs.hostId,e)}catch(t){throw new Error("Failed to update host ID in Firebase: "+t.message)}}async saveCreatedAt(){try{await en(this._refs.createdAt,Is())}catch(e){throw new Error("Failed to save createdAt in Firebase: "+e.message)}}async updatePresence(){try{await en(this._refs.presence,!0)}catch(e){throw new Error("Failed to update presence in Firebase: "+e.message)}}async updateCursor(e,t){try{const i={x:e,y:t,t:Is()};await en(this._refs.cursor,i)}catch(i){throw new Error("Failed to update cursor in Firebase: "+i.message)}}async sendSignal(e,t,i){try{const r=this._refs.getOutboxTo(e),s=i?pn(r,i):ew(r);await en(s,{...t,t:Is()})}catch(r){throw new Error("Failed to send signal in Firebase: "+r.message)}}async removeInboxSignals(e,...t){try{if(!t.length)return;const i=this._refs.getInboxFrom(e);await io(i,t.reduce((r,s)=>({...r,[s]:null}),{}))}catch(i){throw new Error("Failed to remove incoming signal in Firebase: "+i.message)}}subscribeCursors(e){const t=ws(this._refs.cursors,i=>{const r=i.val();e(r||{})});return this._subscriptions.push(t),t}subscribePeers(e){const t=ws(this._refs.peers,i=>{const r=i.val()||{},s=Object.keys(r);e(s)});return this._subscriptions.push(t),t}subscribePeerSignals(e,t){const i=tw(this._refs.getInboxFrom(e),r=>{const s=r.key;if(s===null)return;const o=r.val()||{};t({[s]:o})});return this._subscriptions.push(i),i}subscribeState(e){const t=ws(this._refs.state,i=>{const r=i.val();e(r)});return this._subscriptions.push(t),t}subscribeHostId(e){const t=ws(this._refs.hostId,i=>{const r=i.val();e(r)});return this._subscriptions.push(t),t}async removeChannel(e,t){try{await vs(this._refs.getChannel(e,t))}catch(i){throw new Error(`Failed to remove channel (${e} -> ${t}) in Firebase: `+i.message)}}async pruneChannelsFor(e){await this.pruneChannels((t,i)=>t===this.userId&&i===e||t===e&&i===this.userId)}async pruneChannelsForOffline(e){const t=new Set(e);await this.pruneChannels((i,r)=>!t.has(i)||!t.has(r))}async pruneStaleSignals(e){const t=Date.now();await this.pruneSignals(i=>typeof i.t!="number"?!1:t-i.t>e)}async pruneChannels(e){const t=await ys(this._refs.signals);if(!t.exists())return;const i={},r=t.val();for(const[s,o]of Object.entries(r))for(const l of Object.keys(o))e(s,l)&&(i[`${s}/${l}`]=null);Object.keys(i).length&&await io(this._refs.signals,i)}async pruneSignals(e){const t=await ys(this._refs.signals);if(!t.exists())return;const i={},r=t.val();for(const[s,o]of Object.entries(r))for(const[l,c]of Object.entries(o))for(const[u,d]of Object.entries(c||{}))e(d,u,s,l)&&(i[`${s}/${l}/${u}`]=null);Object.keys(i).length&&await io(this._refs.signals,i)}async updateState(e){try{await en(this._refs.state,e)}catch(t){throw new Error("Failed to update room state in Firebase: "+t.message+" "+JSON.stringify(e))}}}const fd=(n,e)=>{let t,i,r;return(...s)=>{if(!t){n(...s),r=performance.now(),t=!0;return}clearTimeout(i),i=setTimeout(()=>{performance.now()-r>=e&&(n(...s),r=performance.now())},e-(performance.now()-r))}},Cw=(n,e,t)=>{let i;const r=()=>{i=setInterval(n,t)},s=setTimeout(()=>{n(),r()},e);return()=>{clearTimeout(s),clearInterval(i)}};class Tw{constructor(e,t,i){this.channel=e,this.handler=t,this.options=i,this.options={openTimeoutMs:2e4,waitingDcTimeoutMs:5e3,graceMs:1e4,logStatsIntervalMs:1e3,logStatsDelayMs:5e3,logMessagesThrottleMs:1e3,bufferedAmountLowThreshold:1e6,...this.options},this.pc=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]})}pc;dc;pendingRemoteCandidates=[];unsubscribeSignal;_closeTimer;_isReady=!1;get isReady(){return this._isReady}withHandler(e){return this.handler=e,this}async open(e){this.unsubscribeSignal=this.channel.subscribe(async o=>{await this.receiveMessage(o)}),this.pc.onicecandidate=async o=>{if(!o.candidate)return;const l=o.candidate.toJSON();await this.channel.send(l)};const t=()=>this.scheduleClose(()=>this.pc.connectionState==="connected"||this.pc.iceConnectionState==="connected"),i=()=>this.cancelScheduledClose(),r=o=>{console.debug("Peer connection",o,"for peer",this.channel.id),o==="disconnected"||o==="failed"?t():(o==="connected"||o==="completed")&&i()};this.pc.onconnectionstatechange=()=>r(this.pc.connectionState),this.pc.oniceconnectionstatechange=()=>r(this.pc.iceConnectionState),this.dc=e?this.pc.createDataChannel("game",{ordered:!1,maxRetransmits:0}):await this.waitForDataChannel(this.pc,"game",this.options?.waitingDcTimeoutMs),this.wideDataChannel(this.dc),e&&await this.initializeConnection();const s=Cw(()=>{console.warn("Peer connection not established yet for peer",this.channel.id),this.logStats()},this.options.logStatsDelayMs,this.options.logStatsIntervalMs);try{await this.waitForReady(this.options?.openTimeoutMs),console.debug("Peer connection established for peer",this.channel.id),this._isReady=!0}catch(o){console.error("Failed to establish peer connection for peer",this.channel.id,o),await this.logStats(),this.close()}finally{s()}}close(){console.debug("Closing peer connection for peer",this.channel.id),this.cancelScheduledClose();try{this.unsubscribeSignal?.()}catch(e){console.error("Failed to unsubscribe from signal channel for peer",this.channel.id,e)}this.pendingRemoteCandidates=[];try{this.dc?.close()}catch(e){console.error("Failed to close data channel for peer",this.channel.id,e)}try{this.pc.getSenders().forEach(e=>{try{e.track?.stop()}catch(t){console.error("Failed to stop sender track for peer",this.channel.id,t)}}),this.pc.getReceivers().forEach(e=>{try{e.track.stop()}catch(t){console.error("Failed to stop receiver track for peer",this.channel.id,t)}})}catch(e){console.error("Failed to stop tracks for peer",this.channel.id,e)}try{this.pc.close()}catch(e){console.error("Failed to close peer connection for peer",this.channel.id,e)}this.handler?.onClosed?.()}scheduleClose(e){this._closeTimer||(console.debug("Scheduling peer connection close in",this.options.graceMs,"ms for peer",this.channel.id),this._closeTimer=window.setTimeout(()=>{this._closeTimer=void 0,!(e&&e())&&(console.debug("Closing peer connection after grace period for peer",this.channel.id),this.close())},this.options.graceMs))}cancelScheduledClose(){this._closeTimer&&(window.clearTimeout(this._closeTimer),this._closeTimer=void 0)}send(e){if(this.dc?.readyState!=="open")throw new Error("Data channel is not open");if(this.dc.bufferedAmount>this.options.bufferedAmountLowThreshold)throw console.warn("Data channel buffered amount is too high, dropping message"),new Error("Data channel buffered amount is too high");this.dc.send(typeof e=="string"?e:JSON.stringify(e))}trySend(e){try{return this.send(e),!0}catch(t){return console.error("Failed to send data channel for peer",this.channel.id,t),!1}}async waitForReady(e=2e4){if(this.dc?.readyState!=="open")return new Promise((t,i)=>{const r=setTimeout(()=>i(new Error("DC open timeout")),e),s=()=>{clearTimeout(r),d(),t(null)},o=p=>{clearTimeout(r),d(),i(p??new Error("DC failed"))},l=()=>{(this.pc.iceConnectionState==="connected"||this.pc.iceConnectionState==="completed")&&s()},c=()=>{this.dc?.readyState==="open"&&(this.pc.iceConnectionState==="connected"||this.pc.iceConnectionState==="completed")&&s()},u=()=>o(new Error("ICE failed/disconnected")),d=()=>{this.dc?.removeEventListener("open",l),this.pc.removeEventListener("iceconnectionstatechange",c),this.pc.removeEventListener("connectionstatechange",c),this.pc.removeEventListener("iceconnectionstatechange",u)};this.dc?.addEventListener("open",l),this.pc.addEventListener("iceconnectionstatechange",c),this.pc.addEventListener("connectionstatechange",c),this.pc.addEventListener("iceconnectionstatechange",()=>{const p=this.pc.iceConnectionState;(p==="failed"||p==="disconnected")&&u()})})}waitForDataChannel(e,t,i=2e4){return console.debug("Waiting for data channel for peer",this.channel.id),new Promise((r,s)=>{const o=setTimeout(()=>s(new Error("Data channel timeout")),i),l=c=>{console.debug("Data channel event received:",c.channel.label),c.channel.label===t&&(clearTimeout(o),e.removeEventListener("datachannel",l),r(c.channel))};e.addEventListener("datachannel",l)})}wideDataChannel(e){const t=fd(i=>{console.debug("Received data channel message from peer",this.channel.id,i)},this.options.logMessagesThrottleMs);e.onmessage=i=>{const r=typeof i.data=="string"?JSON.parse(i.data):i.data;t(r),this.handler?.onMessage(r)},e.onopen=()=>{this._isReady=!0,this.handler?.onOpen?.()},e.onerror=i=>{console.error("Data channel error:",i)}}async initializeConnection(){console.debug("Creating offer for peer",this.channel.id);const e=await this.pc.createOffer();await this.pc.setLocalDescription(e),console.debug("Sending offer to peer",this.channel.id),await this.channel.send(e),console.debug("Offer sent to peer",this.channel.id)}async receiveMessage(e){switch(!0){case("type"in e&&e.type==="offer"):await this.receiveOffer(e);break;case("type"in e&&e.type==="answer"):await this.receiveAnswer(e);break;case"candidate"in e:await this.receiveIceCandidate(e);break;default:console.warn("Unknown peer message type:",e)}}async receiveOffer(e){try{switch(this.pc.signalingState){case"have-local-offer":case"stable":{this.pc.signalingState==="have-local-offer"&&(console.debug("Rolling back local offer before setting new remote offer"),await this.pc.setLocalDescription({type:"rollback"})),console.debug("Received offer, setting remote description and creating answer"),await this.pc.setRemoteDescription(new RTCSessionDescription(e)),console.debug("Remote description set, flushing pending ICE candidates"),await this.flushPendingCandidates(),console.debug("Creating and sending answer");const t=await this.pc.createAnswer();await this.pc.setLocalDescription(t),await this.channel.send(t),console.debug("Answer sent");break}default:console.warn("Unexpected signaling state on offer reception:",this.pc.signalingState)}}catch(t){console.error("Error handling received offer:",t)}}async receiveAnswer(e){try{if(this.pc.signalingState!=="have-local-offer"){console.warn("Unexpected signaling state on answer reception:",this.pc.signalingState);return}console.debug("Received answer, setting remote description"),await this.pc.setRemoteDescription(new RTCSessionDescription(e)),console.debug("Remote description set, flushing pending ICE candidates"),await this.flushPendingCandidates(),console.debug("Answer processed")}catch(t){console.error("Error handling received answer:",t)}}async receiveIceCandidate(e){try{if(!this.pc.remoteDescription){console.debug("Remote description not set yet, queuing ICE candidate"),this.pendingRemoteCandidates.push(e);return}console.debug("Adding received ICE candidate"),await this.pc.addIceCandidate(new RTCIceCandidate(e)),console.debug("ICE candidate added")}catch(t){console.error("Error adding received ICE candidate:",t)}}async flushPendingCandidates(){if(!this.pendingRemoteCandidates.length)return;const e=this.pendingRemoteCandidates.splice(0);console.debug("Flushing",e.length,"pending ICE candidates");for(const t of e)try{await this.pc.addIceCandidate(new RTCIceCandidate(t))}catch(i){console.error("Error adding pending ICE candidate:",i)}console.debug("Finished flushing pending ICE candidates")}async logStats(){const e=await this.pc.getStats();let t,i;e.forEach(r=>{r.type==="candidate-pair"&&r.nominated&&(t=r),r.type==="sctp-transport"&&(i=r)}),console.table({ice:this.pc.iceConnectionState,conn:this.pc.connectionState,pair:t?.state,sctp:i?.state,dc:this.dc?.readyState,buf:this.dc?.bufferedAmount})}}class xw{constructor(e,t,i=3e4){this.session=e,this.peerId=t,this.staleMs=i}get id(){return this.peerId}async send(e){return this.session.sendSignal(this.peerId,e)}subscribe(e){return this.session.subscribePeerSignals(this.peerId,async t=>{await this.consumeBatch(t,e)})}async consumeBatch(e,t){const i=Date.now();for(const[r,s]of Object.entries(e)){if(typeof s.t=="number"&&i-s.t>this.staleMs){try{await this.session.removeInboxSignals(this.peerId,r)}catch(o){console.error("Failed to clean up stale signaling message for peer",this.peerId,o)}continue}try{console.debug("Handling signaling message for peer",{peerId:this.peerId,signalId:r,msg:s}),await t(s);try{await this.session.removeInboxSignals(this.peerId,r)}catch(o){console.error("Failed to clean up handled signaling message for peer",this.peerId,o)}}catch(o){console.error("Failed to handle signaling message for peer",this.peerId,o)}}}}class Aw{constructor(e,t,i,r,s=Math.floor(1e3/ke.net.sendHz),o=50,l=5e3,c=3e4){this.rtdb=e,this.auth=t,this.roomId=i,this.remoteHandler=r,this.throttleDucksMs=s,this.throttleCursorMs=o,this.cleanupIntervalMs=l,this.staleSignalMs=c}onlinePeers=new Set;peers=new Map;_userId=null;_session=null;hostId=null;lastCursorAt=0;lastDucksAt=0;lastSignalsCleanupAt=0;get userId(){return this._userId}get isHost(){return this.hostId===this.userId}async init(){if(await this.authorize(),!this._userId)throw new Error("Failed to authenticate");this._session=new Ew(this.rtdb),await this._session.start(this.roomId,this._userId),await this.electNewHostIfNeeded(await this._session.getOnlinePeers(),await this._session.getHostId(),!0);const e=fd(()=>{console.warn("Received cursor update from offline peer, ignoring.")},5e3);this._session.subscribeCursors(t=>{for(const[i,r]of Object.entries(t))if(i!==this._userId){if(!this.onlinePeers.has(i)){e();continue}this.remoteHandler.onUpdateRemoteCursor(i,r)}}),this._session.subscribeState(t=>this.remoteHandler.onRoomStateChange?.(t)),this._session.subscribeHostId(t=>{t!==this.hostId&&(this.hostId=t,this.remoteHandler.onHostChange?.(t,this.isHost))}),this._session.subscribePeers(t=>{console.debug("Detected peers update: ",t),t.length||console.warn("No peers online in the room. This should not happen as we are online ourselves."),this.electNewHostIfNeeded(t,this.hostId);const i=t.filter(s=>s!==this.userId&&!this.onlinePeers.has(s));[...this.onlinePeers].filter(s=>s!==this.userId&&!t.includes(s)).forEach(s=>{console.debug("Detected peer leave: ",s),this.remoteHandler.onPlayerLeave?.(s),this.closePeer(s),this.onlinePeers.delete(s)}),i.forEach(s=>{console.debug("Detected new peer: ",s),this.remoteHandler.onPlayerJoin?.(s),this.connectToPeer(s),this.onlinePeers.add(s)}),this.cleanupPeers(t)}),setInterval(()=>{this.isHost&&this.publishDucks()},this.throttleDucksMs),setInterval(async()=>{if(!this._session)return;const t=await this._session.getOnlinePeers();await this.cleanupPeers(t)},this.cleanupIntervalMs),setInterval(async()=>{this._session&&await this._session.pruneStaleSignals(this.staleSignalMs)},this.staleSignalMs)}async authorize(){await ng(this.auth),this._userId=await new Promise((e,t)=>{const i=lg(this.auth,r=>{r&&(e(r.uid),i())},r=>{t(r),i()})}),console.debug("Signed in as",this._userId)}async publishCursor(e){if(!this._userId)return;const t=performance.now();if(!(t-this.lastCursorAt<this.throttleCursorMs)){this.lastCursorAt=t;try{await this._session?.updateCursor(e.x,e.y)}catch(i){console.error("Failed to publish cursor position",i)}}}async publishDucks(){if(!this._userId||!this.isHost||!this.remoteHandler.getDucks)return;const e=performance.now(),t=this.throttleDucksMs;if(e-this.lastDucksAt<t)return;this.lastDucksAt=e;const i=this.remoteHandler.getDucks(),r={type:"ducks",tHost:performance.now(),snaps:i};this.peers.forEach((s,o)=>{if(!this.onlinePeers.has(o)){console.warn("Peer not online, skipping ducks publish",o,s);return}s.isReady&&s.trySend(r)})}async cleanup(){try{await this._session?.dispose(),this.peers.forEach(e=>{e.close()})}catch(e){console.error("Failed to clean up player presence",e)}}async setRoomActive(){!this.isHost||!this._session||await this._session.updateStateToActive()}async setRoomFinished(e){!this.isHost||!this._session||await this._session.updateStateToFinished(e)}async resetRoomToIdle(){!this.isHost||!this._session||await this._session.updateStateToIdle()}async electNewHostIfNeeded(e,t,i=!1){if(!this._userId||!this._session||t&&e.includes(t))return;const r=e.length?[...e].sort()[0]:this._userId;if(r===this._userId&&(console.debug("Becoming the new host for the room"),await this._session.updateHostId(this._userId),console.debug("Updated room hostId to self:",this._userId),!t))try{await this._session.saveCreatedAt()}catch(s){console.error("Failed to set createdAt for new room. Maybe simultaneous creation?",s)}this.hostId=r,!i&&this.remoteHandler.onHostChange?.(this.hostId,this.isHost)}async connectToPeer(e){if(!this._userId||!this._session)return;const t=new Tw(new xw(this._session,e,this.staleSignalMs),{onOpen:async()=>{console.debug("Peer connection opened with",e),this.isHost&&this._session?.pruneChannelsFor(e)},onMessage:async r=>this.onMessage(e,r),onClosed:()=>{this.peers.delete(e),this.onlinePeers.delete(e)}}),i=this._userId===this.hostId;console.debug("Connecting to Peer ",{peerId:e,isInitiator:i,hostId:this.hostId}),await t.open(i),this.peers.set(e,t)}async closePeer(e){const t=this.peers.get(e);if(t)try{t?.close()}catch(i){console.error("Failed to close peer connection for peer",e,i)}}onMessage(e,t){try{switch(t.type){case"ducks":this.remoteHandler.receiveDucks?.({tHost:t.tHost,snaps:t.snaps});break;case"cursor":this.remoteHandler.onUpdateRemoteCursor(e,{x:t.x,y:t.y});break}}catch{console.warn("Failed to parse RTC data channel message",t)}}async cleanupPeers(e){if(!this._session||!this.isHost)return;const t=performance.now();if(!(!this.lastSignalsCleanupAt&&t-this.lastSignalsCleanupAt<=this.cleanupIntervalMs))try{await this._session.pruneChannelsForOffline(e),this.lastSignalsCleanupAt=t}catch(i){console.error("Failed to cleanup peers signaling",i)}}}const Ii=(...n)=>(e,...t)=>{console.error(...n.map(i=>typeof i=="string"?i:i(...t)),e)},Ss=(n,e)=>(...t)=>{try{return n(...t)}catch(i){e(i,...t)}},Pw=(n,e,t)=>((...i)=>{try{return n(...i)}catch(r){return e(r,...i),t}}),bw=(n=document)=>{const e=n.getElementById("hud-room"),t=n.getElementById("hud-players"),i=n.getElementById("hud-timer"),r=n.getElementById("win-overlay"),s=n.getElementById("win-time"),o=n.getElementById("btn-new-room"),l=n.getElementById("btn-retry");let c,u=null;const d=f=>{const h=Math.max(0,Math.floor(f)),m=Math.floor(h/6e4),_=Math.floor(h%6e4/1e3),w=Math.floor(h%1e3/10),R=String(m).padStart(2,"0"),k=String(_).padStart(2,"0"),N=String(w).padStart(2,"0");return`${R}:${k}.${N}`};return{setRoomId:f=>{e&&(e.textContent=f)},setPlayersCount:f=>{t&&(t.textContent=String(f))},startTimer:f=>{u=f,c&&window.clearInterval(c),c=window.setInterval(()=>{!i||!u||(i.textContent=d(u()))},50)},stopTimer:()=>{c&&window.clearInterval(c),c=void 0,u=null},showWin:f=>{r&&(r.style.display="flex"),s&&(s.textContent=d(f))},hideWin:()=>{r&&(r.style.display="none")},onNewRoom:f=>{o?.addEventListener("click",f)},onRetry:f=>{l?.addEventListener("click",f)}}},Rw=async()=>{if(!document.getElementById("app")){console.error("App element not found");return}const e=document.getElementById("game");if(!e){console.error("Canvas element not found");return}const t=()=>{const p="room",f=new URL(window.location.href);let h=f.searchParams.get(p)||"",m=!1;return h||(h=jc(),f.searchParams.set(p,h),m=!0),m&&window.history.replaceState({},"",f.toString()),h},{rtdb:i,auth:r}=dw(ke.firebase,ke.isDev),s=t(),o=bw();o.setRoomId(s);const l=new Sw(e,s);window.addEventListener("resize",()=>l.resize()),l.resize();let c=1;const u=new Aw(i,r,s,{onUpdateRemoteCursor:Ss((p,f)=>l.setRemoteWolfTarget(p,f),Ii("Failed to update remote cursor",(p,f)=>({playerId:p,pos:f}))),onPlayerJoin:Ss(p=>{l.addRemoteWolf(p),c++,o.setPlayersCount(c)},Ii("Failed to add remote player",p=>({playerId:p}))),onPlayerLeave:Ss(p=>{l.removeRemoteWolf(p),c--,o.setPlayersCount(c)},Ii("Failed to remove remote player",p=>({playerId:p}))),getDucks:Pw(()=>l.getDuckSnapshots(),Ii("Failed to get duck snapshots"),[]),receiveDucks:Ss(p=>l.setDuckTargets(p),Ii("Failed to receive duck snapshots",p=>({snaps:p}))),onHostChange:(p,f)=>l.setHost(f),onRoomStateChange:p=>{p?.status==="finished"&&typeof p.winnerTimeMs=="number"&&o.showWin(p.winnerTimeMs)}});try{await u.init()}catch(p){console.error("Failed to initialize multiplayer",p),alert("Failed to initialize multiplayer");return}if(l.setHost(u.isHost),console.debug("Is host:",u.isHost),u.isHost)try{await u.setRoomActive(),console.debug("Room set to active by host")}catch(p){console.error("Failed to set room active",p)}const d=()=>u.publishCursor(l.getMousePosition());window.addEventListener("mousemove",d),window.addEventListener("touchmove",d,{passive:!0}),window.addEventListener("beforeunload",()=>u.cleanup()),l.onWin(async p=>{if(u.isHost)try{await u.setRoomFinished(p)}catch(f){console.error("Failed to set room finished",f)}o.showWin(p)}),o.startTimer(()=>l.getElapsedMs()),o.onNewRoom(async()=>{const p=new URL(window.location.href),f=jc();p.searchParams.set("room",f),window.location.href=p.toString()}),o.onRetry(async()=>{if(u.isHost){try{await u.resetRoomToIdle()}catch(p){console.error("Failed to reset room to idle",p)}l.resetRound();try{await u.setRoomActive()}catch(p){console.error("Failed to set room active",p)}}o.hideWin()}),l.start()};Rw().catch(n=>{console.error("Failed to bootstrap the game",n)});
