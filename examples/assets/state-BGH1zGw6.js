import{f as u,u as l}from"./lit-element-BOuWA2QR.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:u},d=(t=p,o,e)=>{const{kind:s,metadata:a}=e;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),n.set(e.name,t),s==="accessor"){const{name:r}=e;return{set(i){const c=o.get.call(this);o.set.call(this,i),this.requestUpdate(r,c,t)},init(i){return i!==void 0&&this.P(r,void 0,t),i}}}if(s==="setter"){const{name:r}=e;return function(i){const c=this[r];o.call(this,i),this.requestUpdate(r,c,t)}}throw Error("Unsupported decorator location: "+s)};function h(t){return(o,e)=>typeof e=="object"?d(t,o,e):((s,a,n)=>{const r=a.hasOwnProperty(n);return a.constructor.createProperty(n,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(a,n):void 0})(t,o,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(t){return h({...t,state:!0,attribute:!1})}export{h as n,g as r};
