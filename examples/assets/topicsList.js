import{x as ut}from"./lit-element-CToom8Wf.js";import{M as Pi,d as Sn,W as Ge,S as kn,j as ca,O as Ko,i as P,G as Tn,k as pe,F as Wt,l as mt,m as qe,p as Li,e as Zn,f as da,L as ua,B as Kn,g as ha,h as pa,I as ts,H as es,q as ma,r as ba,s as fa,t as li,u as Ae,v as ga,D as va,A as ya,c as _a,V as wa,w as gi,x as xa,y as _t,R as $a,z as is,E as ns,J as Ca,K as os,N as Aa,Q as Ea,U as ss,X as rs,Y as Sa,Z as ka,P as Ta,C as Oa,a as Ia,b as Na,T as Ye}from"./index-rdG5sBXa.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pi=globalThis,On=pi.ShadowRoot&&(pi.ShadyCSS===void 0||pi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,In=Symbol(),to=new WeakMap;let as=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==In)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(On&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=to.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&to.set(t,e))}return e}toString(){return this.cssText}};const Ma=e=>new as(typeof e=="string"?e:e+"",void 0,In),O=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new as(i,e,In)},Pa=(e,t)=>{if(On)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=pi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},eo=On?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Ma(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:La,defineProperty:Ra,getOwnPropertyDescriptor:ja,getOwnPropertyNames:za,getOwnPropertySymbols:Da,getPrototypeOf:Fa}=Object,ee=globalThis,io=ee.trustedTypes,Ha=io?io.emptyScript:"",no=ee.reactiveElementPolyfillSupport,Ie=(e,t)=>e,vi={toAttribute(e,t){switch(t){case Boolean:e=e?Ha:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Nn=(e,t)=>!La(e,t),oo={attribute:!0,type:String,converter:vi,reflect:!1,hasChanged:Nn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ee.litPropertyMetadata??(ee.litPropertyMetadata=new WeakMap);class Jt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=oo){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&Ra(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=ja(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const a=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??oo}static _$Ei(){if(this.hasOwnProperty(Ie("elementProperties")))return;const t=Fa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ie("properties"))){const i=this.properties,n=[...za(i),...Da(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(eo(o))}else t!==void 0&&i.push(eo(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pa(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:vi).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:vi;this._$Em=s,this[s]=a.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Nn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Jt[Ie("elementProperties")]=new Map,Jt[Ie("finalized")]=new Map,no==null||no({ReactiveElement:Jt}),(ee.reactiveElementVersions??(ee.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=globalThis,_i=yi.trustedTypes,so=_i?_i.createPolicy("lit-html",{createHTML:e=>e}):void 0,ls="$lit$",$t=`lit$${Math.random().toFixed(9).slice(2)}$`,cs="?"+$t,Ba=`<${cs}>`,Bt=document,je=()=>Bt.createComment(""),ze=e=>e===null||typeof e!="object"&&typeof e!="function",Mn=Array.isArray,Ua=e=>Mn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",tn=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ro=/-->/g,ao=/>/g,Lt=RegExp(`>|${tn}(?:([^\\s"'>=/]+)(${tn}*=${tn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lo=/'/g,co=/"/g,ds=/^(?:script|style|textarea|title)$/i,Va=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),m=Va(1),ie=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),uo=new WeakMap,zt=Bt.createTreeWalker(Bt,129);function us(e,t){if(!Mn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return so!==void 0?so.createHTML(t):t}const Wa=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=Ee;for(let a=0;a<i;a++){const l=e[a];let d,u,c=-1,h=0;for(;h<l.length&&(r.lastIndex=h,u=r.exec(l),u!==null);)h=r.lastIndex,r===Ee?u[1]==="!--"?r=ro:u[1]!==void 0?r=ao:u[2]!==void 0?(ds.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=Lt):u[3]!==void 0&&(r=Lt):r===Lt?u[0]===">"?(r=o??Ee,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?Lt:u[3]==='"'?co:lo):r===co||r===lo?r=Lt:r===ro||r===ao?r=Ee:(r=Lt,o=void 0);const p=r===Lt&&e[a+1].startsWith("/>")?" ":"";s+=r===Ee?l+Ba:c>=0?(n.push(d),l.slice(0,c)+ls+l.slice(c)+$t+p):l+$t+(c===-2?a:p)}return[us(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};let cn=class hs{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[d,u]=Wa(t,i);if(this.el=hs.createElement(d,n),zt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=zt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(ls)){const h=u[r++],p=o.getAttribute(c).split($t),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?qa:f[1]==="?"?Ya:f[1]==="@"?Xa:Ri}),o.removeAttribute(c)}else c.startsWith($t)&&(l.push({type:6,index:s}),o.removeAttribute(c));if(ds.test(o.tagName)){const c=o.textContent.split($t),h=c.length-1;if(h>0){o.textContent=_i?_i.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],je()),zt.nextNode(),l.push({type:2,index:++s});o.append(c[h],je())}}}else if(o.nodeType===8)if(o.data===cs)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf($t,c+1))!==-1;)l.push({type:7,index:s}),c+=$t.length-1}s++}}static createElement(t,i){const n=Bt.createElement("template");return n.innerHTML=t,n}};function ne(e,t,i=e,n){var o,s;if(t===ie)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const a=ze(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),a===void 0?r=void 0:(r=new a(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=ne(e,r._$AS(e,t.values),r,n)),t}let Ga=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=((e==null?void 0:e.creationScope)??Bt).importNode(t,!0);zt.currentNode=n;let o=zt.nextNode(),s=0,r=0,a=i[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new Pn(o,o.nextSibling,this,e):a.type===1?l=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(l=new Ja(o,this,e)),this._$AV.push(l),a=i[++r]}s!==(a==null?void 0:a.index)&&(o=zt.nextNode(),s++)}return zt.currentNode=Bt,n}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Pn=class ps{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=ne(this,t,i),ze(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==ie&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ua(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&ze(this._$AH)?this._$AA.nextSibling.data=t:this.T(Bt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=cn.createElement(us(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new Ga(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let i=uo.get(t.strings);return i===void 0&&uo.set(t.strings,i=new cn(t)),i}k(t){Mn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new ps(this.O(je()),this.O(je()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}},Ri=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}_$AI(e,t=this,i,n){const o=this.strings;let s=!1;if(o===void 0)e=ne(this,e,t,0),s=!ze(e)||e!==this._$AH&&e!==ie,s&&(this._$AH=e);else{const r=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=ne(this,r[i+a],t,a),l===ie&&(l=this._$AH[a]),s||(s=!ze(l)||l!==this._$AH[a]),l===j?e=j:e!==j&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}s&&!n&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},qa=class extends Ri{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},Ya=class extends Ri{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}};class Xa extends Ri{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=ne(this,t,i,0)??j)===ie)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}let Ja=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}};const ho=yi.litHtmlPolyfillSupport;ho==null||ho(cn,Pn),(yi.litHtmlVersions??(yi.litHtmlVersions=[])).push("3.2.1");const oe=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new Pn(t.insertBefore(je(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=class extends Jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ie}};var po;k._$litElement$=!0,k.finalized=!0,(po=globalThis.litElementHydrateSupport)==null||po.call(globalThis,{LitElement:k});const mo=globalThis.litElementPolyfillSupport;mo==null||mo({LitElement:k});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");var Qa=Object.defineProperty,Za=(e,t,i)=>t in e?Qa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Rt=(e,t,i)=>(Za(e,typeof t!="symbol"?t+"":t,i),i);const se=Math.min,ft=Math.max,wi=Math.round,At=e=>({x:e,y:e}),Ka={left:"right",right:"left",bottom:"top",top:"bottom"},tl={start:"end",end:"start"};function bo(e,t,i){return ft(e,se(t,i))}function Xe(e,t){return typeof e=="function"?e(t):e}function gt(e){return e.split("-")[0]}function ji(e){return e.split("-")[1]}function ms(e){return e==="x"?"y":"x"}function bs(e){return e==="y"?"height":"width"}function Ut(e){return["top","bottom"].includes(gt(e))?"y":"x"}function fs(e){return ms(Ut(e))}function el(e,t,i){i===void 0&&(i=!1);const n=ji(e),o=fs(e),s=bs(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=xi(r)),[r,xi(r)]}function il(e){const t=xi(e);return[dn(e),t,dn(t)]}function dn(e){return e.replace(/start|end/g,t=>tl[t])}function nl(e,t,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?t?o:n:t?n:o;case"left":case"right":return t?s:r;default:return[]}}function ol(e,t,i,n){const o=ji(e);let s=nl(gt(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(dn)))),s}function xi(e){return e.replace(/left|right|bottom|top/g,t=>Ka[t])}function sl(e){return{top:0,right:0,bottom:0,left:0,...e}}function gs(e){return typeof e!="number"?sl(e):{top:e,right:e,bottom:e,left:e}}function re(e){const{x:t,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:t,right:t+n,bottom:i+o,x:t,y:i}}function fo(e,t,i){let{reference:n,floating:o}=e;const s=Ut(t),r=fs(t),a=bs(r),l=gt(t),d=s==="y",u=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2,h=n[a]/2-o[a]/2;let p;switch(l){case"top":p={x:u,y:n.y-o.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:c};break;case"left":p={x:n.x-o.width,y:c};break;default:p={x:n.x,y:n.y}}switch(ji(t)){case"start":p[r]-=h*(i&&d?-1:1);break;case"end":p[r]+=h*(i&&d?-1:1);break}return p}const rl=async(e,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,a=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:c}=fo(d,n,l),h=n,p={},f=0;for(let w=0;w<a.length;w++){const{name:v,fn:b}=a[w],{x:y,y:_,data:x,reset:A}=await b({x:u,y:c,initialPlacement:n,placement:h,strategy:o,middlewareData:p,rects:d,platform:r,elements:{reference:e,floating:t}});u=y??u,c=_??c,p={...p,[v]:{...p[v],...x}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(d=A.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):A.rects),{x:u,y:c}=fo(d,h,l)),w=-1)}return{x:u,y:c,placement:h,strategy:o,middlewareData:p}};async function vs(e,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:s,rects:r,elements:a,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:c="floating",altBoundary:h=!1,padding:p=0}=Xe(t,e),f=gs(p),w=a[h?c==="floating"?"reference":"floating":c],v=re(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(w)))==null||i?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:d,rootBoundary:u,strategy:l})),b=c==="floating"?{x:n,y:o,width:r.floating.width,height:r.floating.height}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),_=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},x=re(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:y,strategy:l}):b);return{top:(v.top-x.top+f.top)/_.y,bottom:(x.bottom-v.bottom+f.bottom)/_.y,left:(v.left-x.left+f.left)/_.x,right:(x.right-v.right+f.right)/_.x}}const al=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:a,platform:l,elements:d}=t,{mainAxis:u=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:w=!0,...v}=Xe(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const b=gt(o),y=Ut(a),_=gt(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(d.floating)),A=h||(_||!w?[xi(a)]:il(a)),C=f!=="none";!h&&C&&A.push(...ol(a,w,f,x));const I=[a,...A],M=await vs(t,v),S=[];let E=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&S.push(M[b]),c){const $=el(o,r,x);S.push(M[$[0]],M[$[1]])}if(E=[...E,{placement:o,overflows:S}],!S.every($=>$<=0)){var B,q;const $=(((B=s.flip)==null?void 0:B.index)||0)+1,R=I[$];if(R)return{data:{index:$,overflows:E},reset:{placement:R}};let V=(q=E.filter(tt=>tt.overflows[0]<=0).sort((tt,et)=>tt.overflows[1]-et.overflows[1])[0])==null?void 0:q.placement;if(!V)switch(p){case"bestFit":{var W;const tt=(W=E.filter(et=>{if(C){const dt=Ut(et.placement);return dt===y||dt==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(dt=>dt>0).reduce((dt,$e)=>dt+$e,0)]).sort((et,dt)=>et[1]-dt[1])[0])==null?void 0:W[0];tt&&(V=tt);break}case"initialPlacement":V=a;break}if(o!==V)return{reset:{placement:V}}}return{}}}};function ys(e){const t=se(...e.map(s=>s.left)),i=se(...e.map(s=>s.top)),n=ft(...e.map(s=>s.right)),o=ft(...e.map(s=>s.bottom));return{x:t,y:i,width:n-t,height:o-i}}function ll(e){const t=e.slice().sort((o,s)=>o.y-s.y),i=[];let n=null;for(let o=0;o<t.length;o++){const s=t[o];!n||s.y-n.y>n.height/2?i.push([s]):i[i.length-1].push(s),n=s}return i.map(o=>re(ys(o)))}const cl=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:n,rects:o,platform:s,strategy:r}=t,{padding:a=2,x:l,y:d}=Xe(e,t),u=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(n.reference))||[]),c=ll(u),h=re(ys(u)),p=gs(a);function f(){if(c.length===2&&c[0].left>c[1].right&&l!=null&&d!=null)return c.find(v=>l>v.left-p.left&&l<v.right+p.right&&d>v.top-p.top&&d<v.bottom+p.bottom)||h;if(c.length>=2){if(Ut(i)==="y"){const E=c[0],B=c[c.length-1],q=gt(i)==="top",W=E.top,$=B.bottom,R=q?E.left:B.left,V=q?E.right:B.right,tt=V-R,et=$-W;return{top:W,bottom:$,left:R,right:V,width:tt,height:et,x:R,y:W}}const v=gt(i)==="left",b=ft(...c.map(E=>E.right)),y=se(...c.map(E=>E.left)),_=c.filter(E=>v?E.left===y:E.right===b),x=_[0].top,A=_[_.length-1].bottom,C=y,I=b,M=I-C,S=A-x;return{top:x,bottom:A,left:C,right:I,width:M,height:S,x:C,y:x}}return h}const w=await s.getElementRects({reference:{getBoundingClientRect:f},floating:n.floating,strategy:r});return o.reference.x!==w.reference.x||o.reference.y!==w.reference.y||o.reference.width!==w.reference.width||o.reference.height!==w.reference.height?{reset:{rects:w}}:{}}}};async function dl(e,t){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),r=gt(i),a=ji(i),l=Ut(i)==="y",d=["left","top"].includes(r)?-1:1,u=s&&l?-1:1,c=Xe(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&typeof f=="number"&&(p=a==="end"?f*-1:f),l?{x:p*u,y:h*d}:{x:h*d,y:p*u}}const _s=function(e){return{name:"offset",options:e,async fn(t){var i,n;const{x:o,y:s,placement:r,middlewareData:a}=t,l=await dl(t,e);return r===((i=a.offset)==null?void 0:i.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:r}}}}},ul=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:o}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:v=>{let{x:b,y}=v;return{x:b,y}}},...l}=Xe(e,t),d={x:i,y:n},u=await vs(t,l),c=Ut(gt(o)),h=ms(c);let p=d[h],f=d[c];if(s){const v=h==="y"?"top":"left",b=h==="y"?"bottom":"right",y=p+u[v],_=p-u[b];p=bo(y,p,_)}if(r){const v=c==="y"?"top":"left",b=c==="y"?"bottom":"right",y=f+u[v],_=f-u[b];f=bo(y,f,_)}const w=a.fn({...t,[h]:p,[c]:f});return{...w,data:{x:w.x-i,y:w.y-n,enabled:{[h]:s,[c]:r}}}}}};function zi(){return typeof window<"u"}function Et(e){return ws(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kt(e){var t;return(t=(ws(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ws(e){return zi()?e instanceof Node||e instanceof Q(e).Node:!1}function ht(e){return zi()?e instanceof Element||e instanceof Q(e).Element:!1}function pt(e){return zi()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function go(e){return!zi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function Je(e){const{overflow:t,overflowX:i,overflowY:n,display:o}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(o)}function hl(e){return["table","td","th"].includes(Et(e))}function pl(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ln(e){const t=Rn(),i=ht(e)?it(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function ml(e){let t=ae(e);for(;pt(t)&&!Di(t);){if(Ln(t))return t;if(pl(t))return null;t=ae(t)}return null}function Rn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Di(e){return["html","body","#document"].includes(Et(e))}function it(e){return Q(e).getComputedStyle(e)}function Fi(e){return ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ae(e){if(Et(e)==="html")return e;const t=e.assignedSlot||e.parentNode||go(e)&&e.host||kt(e);return go(t)?t.host:t}function xs(e){const t=ae(e);return Di(t)?e.ownerDocument?e.ownerDocument.body:e.body:pt(t)&&Je(t)?t:xs(t)}function un(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const o=xs(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=Q(o);if(s){const a=bl(r);return t.concat(r,r.visualViewport||[],Je(o)?o:[],a&&i?un(a):[])}return t.concat(o,un(o,[],i))}function bl(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $s(e){const t=it(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=pt(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,a=wi(i)!==s||wi(n)!==r;return a&&(i=s,n=r),{width:i,height:n,$:a}}function Cs(e){return ht(e)?e:e.contextElement}function Qt(e){const t=Cs(e);if(!pt(t))return At(1);const i=t.getBoundingClientRect(),{width:n,height:o,$:s}=$s(t);let r=(s?wi(i.width):i.width)/n,a=(s?wi(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const fl=At(0);function As(e){const t=Q(e);return!Rn()||!t.visualViewport?fl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function gl(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Q(e)?!1:t}function De(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=Cs(e);let r=At(1);t&&(n?ht(n)&&(r=Qt(n)):r=Qt(e));const a=gl(s,i,n)?As(s):At(0);let l=(o.left+a.x)/r.x,d=(o.top+a.y)/r.y,u=o.width/r.x,c=o.height/r.y;if(s){const h=Q(s),p=n&&ht(n)?Q(n):n;let f=h,w=f.frameElement;for(;w&&n&&p!==f;){const v=Qt(w),b=w.getBoundingClientRect(),y=it(w),_=b.left+(w.clientLeft+parseFloat(y.paddingLeft))*v.x,x=b.top+(w.clientTop+parseFloat(y.paddingTop))*v.y;l*=v.x,d*=v.y,u*=v.x,c*=v.y,l+=_,d+=x,f=Q(w),w=f.frameElement}}return re({width:u,height:c,x:l,y:d})}const vl=[":popover-open",":modal"];function Es(e){return vl.some(t=>{try{return e.matches(t)}catch{return!1}})}function yl(e){let{elements:t,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=kt(n),a=t?Es(t.floating):!1;if(n===r||a&&s)return i;let l={scrollLeft:0,scrollTop:0},d=At(1);const u=At(0),c=pt(n);if((c||!c&&!s)&&((Et(n)!=="body"||Je(r))&&(l=Fi(n)),pt(n))){const h=De(n);d=Qt(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-l.scrollLeft*d.x+u.x,y:i.y*d.y-l.scrollTop*d.y+u.y}}function _l(e){return Array.from(e.getClientRects())}function Ss(e){return De(kt(e)).left+Fi(e).scrollLeft}function wl(e){const t=kt(e),i=Fi(e),n=e.ownerDocument.body,o=ft(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=ft(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+Ss(e);const a=-i.scrollTop;return it(n).direction==="rtl"&&(r+=ft(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:a}}function xl(e,t){const i=Q(e),n=kt(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,a=0,l=0;if(o){s=o.width,r=o.height;const d=Rn();(!d||d&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:s,height:r,x:a,y:l}}function $l(e,t){const i=De(e,!0,t==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=pt(e)?Qt(e):At(1),r=e.clientWidth*s.x,a=e.clientHeight*s.y,l=o*s.x,d=n*s.y;return{width:r,height:a,x:l,y:d}}function vo(e,t,i){let n;if(t==="viewport")n=xl(e,i);else if(t==="document")n=wl(kt(e));else if(ht(t))n=$l(t,i);else{const o=As(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return re(n)}function ks(e,t){const i=ae(e);return i===t||!ht(i)||Di(i)?!1:it(i).position==="fixed"||ks(i,t)}function Cl(e,t){const i=t.get(e);if(i)return i;let n=un(e,[],!1).filter(a=>ht(a)&&Et(a)!=="body"),o=null;const s=it(e).position==="fixed";let r=s?ae(e):e;for(;ht(r)&&!Di(r);){const a=it(r),l=Ln(r);!l&&a.position==="fixed"&&(o=null),(s?!l&&!o:!l&&a.position==="static"&&o&&["absolute","fixed"].includes(o.position)||Je(r)&&!l&&ks(e,r))?n=n.filter(d=>d!==r):o=a,r=ae(r)}return t.set(e,n),n}function Al(e){let{element:t,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?Cl(t,this._c):[].concat(i),n],r=s[0],a=s.reduce((l,d)=>{const u=vo(t,d,o);return l.top=ft(u.top,l.top),l.right=se(u.right,l.right),l.bottom=se(u.bottom,l.bottom),l.left=ft(u.left,l.left),l},vo(t,r,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function El(e){const{width:t,height:i}=$s(e);return{width:t,height:i}}function Sl(e,t,i){const n=pt(t),o=kt(t),s=i==="fixed",r=De(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=At(0);if(n||!n&&!s)if((Et(t)!=="body"||Je(o))&&(a=Fi(t)),n){const c=De(t,!0,s,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else o&&(l.x=Ss(o));const d=r.left+a.scrollLeft-l.x,u=r.top+a.scrollTop-l.y;return{x:d,y:u,width:r.width,height:r.height}}function yo(e,t){return!pt(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ts(e,t){const i=Q(e);if(!pt(e)||Es(e))return i;let n=yo(e,t);for(;n&&hl(n)&&it(n).position==="static";)n=yo(n,t);return n&&(Et(n)==="html"||Et(n)==="body"&&it(n).position==="static"&&!Ln(n))?i:n||ml(e)||i}const kl=async function(e){const t=this.getOffsetParent||Ts,i=this.getDimensions;return{reference:Sl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function Tl(e){return it(e).direction==="rtl"}const Ol={convertOffsetParentRelativeRectToViewportRelativeRect:yl,getDocumentElement:kt,getClippingRect:Al,getOffsetParent:Ts,getElementRects:kl,getClientRects:_l,getDimensions:El,getScale:Qt,isElement:ht,isRTL:Tl},Os=ul,Is=al,Ns=cl,Ms=(e,t,i)=>{const n=new Map,o={platform:Ol,...i},s={...o.platform,_c:n};return rl(e,t,{...o,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mi=globalThis,jn=mi.ShadowRoot&&(mi.ShadyCSS===void 0||mi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ps=Symbol(),_o=new WeakMap;let Il=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ps)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(jn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=_o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&_o.set(t,e))}return e}toString(){return this.cssText}};const Nl=e=>new Il(typeof e=="string"?e:e+"",void 0,Ps),Ml=(e,t)=>{if(jn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=mi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},wo=jn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Nl(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pl,defineProperty:Ll,getOwnPropertyDescriptor:Rl,getOwnPropertyNames:jl,getOwnPropertySymbols:zl,getPrototypeOf:Dl}=Object,le=globalThis,xo=le.trustedTypes,Fl=xo?xo.emptyScript:"",$o=le.reactiveElementPolyfillSupport,Ne=(e,t)=>e,$i={toAttribute(e,t){switch(t){case Boolean:e=e?Fl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},zn=(e,t)=>!Pl(e,t),Co={attribute:!0,type:String,converter:$i,reflect:!1,hasChanged:zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),le.litPropertyMetadata??(le.litPropertyMetadata=new WeakMap);class Se extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Co){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&Ll(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=Rl(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const a=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Co}static _$Ei(){if(this.hasOwnProperty(Ne("elementProperties")))return;const t=Dl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ne("properties"))){const i=this.properties,n=[...jl(i),...zl(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(wo(o))}else t!==void 0&&i.push(wo(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ml(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:$i).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:$i;this._$Em=s,this[s]=a.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??zn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Se[Ne("elementProperties")]=new Map,Se[Ne("finalized")]=new Map,$o==null||$o({ReactiveElement:Se}),(le.reactiveElementVersions??(le.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hl={attribute:!0,type:String,converter:$i,reflect:!1,hasChanged:zn},Bl=(e=Hl,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,e)},init(a){return a!==void 0&&this.P(r,void 0,e),a}}}if(n==="setter"){const{name:r}=i;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,e)}}throw Error("Unsupported decorator location: "+n)};function g(e){return(t,i)=>typeof i=="object"?Bl(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=globalThis,Ai=Ci.trustedTypes,Ao=Ai?Ai.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ls="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Rs="?"+Ct,Ul=`<${Rs}>`,Vt=document,Ei=()=>Vt.createComment(""),Fe=e=>e===null||typeof e!="object"&&typeof e!="function",Dn=Array.isArray,Vl=e=>Dn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",en=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Eo=/-->/g,So=/>/g,jt=RegExp(`>|${en}(?:([^\\s"'>=/]+)(${en}*=${en}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ko=/'/g,To=/"/g,js=/^(?:script|style|textarea|title)$/i,ce=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Oo=new WeakMap,Dt=Vt.createTreeWalker(Vt,129);function zs(e,t){if(!Dn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ao!==void 0?Ao.createHTML(t):t}const Wl=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=ke;for(let a=0;a<i;a++){const l=e[a];let d,u,c=-1,h=0;for(;h<l.length&&(r.lastIndex=h,u=r.exec(l),u!==null);)h=r.lastIndex,r===ke?u[1]==="!--"?r=Eo:u[1]!==void 0?r=So:u[2]!==void 0?(js.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=jt):u[3]!==void 0&&(r=jt):r===jt?u[0]===">"?(r=o??ke,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?jt:u[3]==='"'?To:ko):r===To||r===ko?r=jt:r===Eo||r===So?r=ke:(r=jt,o=void 0);const p=r===jt&&e[a+1].startsWith("/>")?" ":"";s+=r===ke?l+Ul:c>=0?(n.push(d),l.slice(0,c)+Ls+l.slice(c)+Ct+p):l+Ct+(c===-2?a:p)}return[zs(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class He{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[d,u]=Wl(t,i);if(this.el=He.createElement(d,n),Dt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=Dt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Ls)){const h=u[r++],p=o.getAttribute(c).split(Ct),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?ql:f[1]==="?"?Yl:f[1]==="@"?Xl:Bi}),o.removeAttribute(c)}else c.startsWith(Ct)&&(l.push({type:6,index:s}),o.removeAttribute(c));if(js.test(o.tagName)){const c=o.textContent.split(Ct),h=c.length-1;if(h>0){o.textContent=Ai?Ai.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],Ei()),Dt.nextNode(),l.push({type:2,index:++s});o.append(c[h],Ei())}}}else if(o.nodeType===8)if(o.data===Rs)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Ct,c+1))!==-1;)l.push({type:7,index:s}),c+=Ct.length-1}s++}}static createElement(t,i){const n=Vt.createElement("template");return n.innerHTML=t,n}}function de(e,t,i=e,n){var o,s;if(t===ce)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const a=Fe(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),a===void 0?r=void 0:(r=new a(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=de(e,r._$AS(e,t.values),r,n)),t}class Gl{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Vt).importNode(i,!0);Dt.currentNode=o;let s=Dt.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let d;l.type===2?d=new Hi(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new Jl(s,this,t)),this._$AV.push(d),l=n[++a]}r!==(l==null?void 0:l.index)&&(s=Dt.nextNode(),r++)}return Dt.currentNode=Vt,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class Hi{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=de(this,t,i),Fe(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==ce&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&Fe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=He.createElement(zs(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new Gl(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let i=Oo.get(t.strings);return i===void 0&&Oo.set(t.strings,i=new He(t)),i}k(t){Dn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new Hi(this.O(Ei()),this.O(Ei()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Bi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=de(this,t,i,0),r=!Fe(t)||t!==this._$AH&&t!==ce,r&&(this._$AH=t);else{const a=t;let l,d;for(t=s[0],l=0;l<s.length-1;l++)d=de(this,a[n+l],i,l),d===ce&&(d=this._$AH[l]),r||(r=!Fe(d)||d!==this._$AH[l]),d===L?t=L:t!==L&&(t+=(d??"")+s[l+1]),this._$AH[l]=d}r&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ql extends Bi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class Yl extends Bi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class Xl extends Bi{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=de(this,t,i,0)??L)===ce)return;const n=this._$AH,o=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==L&&(n===L||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Jl{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){de(this,t)}}const Io=Ci.litHtmlPolyfillSupport;Io==null||Io(He,Hi),(Ci.litHtmlVersions??(Ci.litHtmlVersions=[])).push("3.2.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ql=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ds={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Fs=e=>(...t)=>({_$litDirective$:e,values:t});let Hs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Me(o,t);return!0},Si=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Bs=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),tc(t)}};function Zl(e){this._$AN!==void 0?(Si(this),this._$AM=e,Bs(this)):this._$AM=e}function Kl(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Me(n[s],!1),Si(n[s]);else n!=null&&(Me(n,!1),Si(n));else Me(this,e)}const tc=e=>{e.type==Ds.CHILD&&(e._$AP??(e._$AP=Kl),e._$AQ??(e._$AQ=Zl))};class ec extends Hs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Bs(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(Me(this,t),Si(this))}setValue(t){if(Ql(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=()=>new ic;class ic{}const nn=new WeakMap,G=Fs(class extends ec{render(e){return L}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),L}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=nn.get(t);i===void 0&&(i=new WeakMap,nn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=nn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Us=Object.freeze({left:0,top:0,width:16,height:16}),ki=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Qe=Object.freeze({...Us,...ki}),hn=Object.freeze({...Qe,body:"",hidden:!1}),nc=Object.freeze({width:null,height:null}),Vs=Object.freeze({...nc,...ki});function oc(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function n(o){for(;o<0;)o+=4;return o%4}if(i===""){const o=parseInt(e);return isNaN(o)?0:n(o)}else if(i!==e){let o=0;switch(i){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-i.length));return isNaN(s)?0:(s=s/o,s%1===0?n(s):0)}}return t}const sc=/[\s,]+/;function rc(e,t){t.split(sc).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Ws={...Vs,preserveAspectRatio:""};function No(e){const t={...Ws},i=(n,o)=>e.getAttribute(n)||o;return t.width=i("width",null),t.height=i("height",null),t.rotate=oc(i("rotate","")),rc(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function ac(e,t){for(const i in Ws)if(e[i]!==t[i])return!0;return!1}const Pe=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ze=(e,t,i,n="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),d={provider:o.length>0?o[0]:n,prefix:l,name:a};return t&&!bi(d)?null:d}const s=o[0],r=s.split("-");if(r.length>1){const a={provider:n,prefix:r.shift(),name:r.join("-")};return t&&!bi(a)?null:a}if(i&&n===""){const a={provider:n,prefix:"",name:s};return t&&!bi(a,i)?null:a}return null},bi=(e,t)=>e?!!((e.provider===""||e.provider.match(Pe))&&(t&&e.prefix===""||e.prefix.match(Pe))&&e.name.match(Pe)):!1;function lc(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(i.rotate=n),i}function Mo(e,t){const i=lc(e,t);for(const n in hn)n in ki?n in e&&!(n in i)&&(i[n]=ki[n]):n in t?i[n]=t[n]:n in e&&(i[n]=e[n]);return i}function cc(e,t){const i=e.icons,n=e.aliases||Object.create(null),o=Object.create(null);function s(r){if(i[r])return o[r]=[];if(!(r in o)){o[r]=null;const a=n[r]&&n[r].parent,l=a&&s(a);l&&(o[r]=[a].concat(l))}return o[r]}return Object.keys(i).concat(Object.keys(n)).forEach(s),o}function dc(e,t,i){const n=e.icons,o=e.aliases||Object.create(null);let s={};function r(a){s=Mo(n[a]||o[a],s)}return r(t),i.forEach(r),Mo(e,s)}function Gs(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),i.push(o)});const n=cc(e);for(const o in n){const s=n[o];s&&(t(o,dc(e,o,s)),i.push(o))}return i}const uc={provider:"",aliases:{},not_found:{},...Us};function on(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function qs(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!on(e,uc))return null;const i=t.icons;for(const o in i){const s=i[o];if(!o.match(Pe)||typeof s.body!="string"||!on(s,hn))return null}const n=t.aliases||Object.create(null);for(const o in n){const s=n[o],r=s.parent;if(!o.match(Pe)||typeof r!="string"||!i[r]&&!n[r]||!on(s,hn))return null}return t}const Ti=Object.create(null);function hc(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function St(e,t){const i=Ti[e]||(Ti[e]=Object.create(null));return i[t]||(i[t]=hc(e,t))}function Fn(e,t){return qs(t)?Gs(t,(i,n)=>{n?e.icons[i]=n:e.missing.add(i)}):[]}function pc(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function mc(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Ti)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Ti[n]||{})).forEach(o=>{const s=St(n,o);i=i.concat(Object.keys(s.icons).map(r=>(n!==""?"@"+n+":":"")+o+":"+r))})}),i}let Be=!1;function Ys(e){return typeof e=="boolean"&&(Be=e),Be}function Ue(e){const t=typeof e=="string"?Ze(e,!0,Be):e;if(t){const i=St(t.provider,t.prefix),n=t.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function Xs(e,t){const i=Ze(e,!0,Be);if(!i)return!1;const n=St(i.provider,i.prefix);return pc(n,i.name,t)}function Po(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Be&&!t&&!e.prefix){let o=!1;return qs(e)&&(e.prefix="",Gs(e,(s,r)=>{r&&Xs(s,r)&&(o=!0)})),o}const i=e.prefix;if(!bi({provider:t,prefix:i,name:"a"}))return!1;const n=St(t,i);return!!Fn(n,e)}function Lo(e){return!!Ue(e)}function bc(e){const t=Ue(e);return t?{...Qe,...t}:null}function fc(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return e.forEach(o=>{if(n.name===o.name&&n.prefix===o.prefix&&n.provider===o.provider)return;n=o;const s=o.provider,r=o.prefix,a=o.name,l=i[s]||(i[s]=Object.create(null)),d=l[r]||(l[r]=St(s,r));let u;a in d.icons?u=t.loaded:r===""||d.missing.has(a)?u=t.missing:u=t.pending;const c={provider:s,prefix:r,name:a};u.push(c)}),t}function Js(e,t){e.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(o=>o.id!==t))})}function gc(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const n=e.provider,o=e.prefix;t.forEach(s=>{const r=s.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==o)return!0;const d=l.name;if(e.icons[d])r.loaded.push({provider:n,prefix:o,name:d});else if(e.missing.has(d))r.missing.push({provider:n,prefix:o,name:d});else return i=!0,!0;return!1}),r.pending.length!==a&&(i||Js([e],s.id),s.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),s.abort))})}))}let vc=0;function yc(e,t,i){const n=vc++,o=Js.bind(null,i,n);if(!t.pending.length)return o;const s={id:n,icons:t,callback:e,abort:o};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(s)}),o}const pn=Object.create(null);function Ro(e,t){pn[e]=t}function mn(e){return pn[e]||pn[""]}function _c(e,t=!0,i=!1){const n=[];return e.forEach(o=>{const s=typeof o=="string"?Ze(o,t,i):o;s&&n.push(s)}),n}var wc={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function xc(e,t,i,n){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let r;if(e.random){let C=e.resources.slice(0);for(r=[];C.length>1;){const I=Math.floor(Math.random()*C.length);r.push(C[I]),C=C.slice(0,I).concat(C.slice(I+1))}r=r.concat(C)}else r=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",d=0,u,c=null,h=[],p=[];typeof n=="function"&&p.push(n);function f(){c&&(clearTimeout(c),c=null)}function w(){l==="pending"&&(l="aborted"),f(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function v(C,I){I&&(p=[]),typeof C=="function"&&p.push(C)}function b(){return{startTime:a,payload:t,status:l,queriesSent:d,queriesPending:h.length,subscribe:v,abort:w}}function y(){l="failed",p.forEach(C=>{C(void 0,u)})}function _(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function x(C,I,M){const S=I!=="success";switch(h=h.filter(E=>E!==C),l){case"pending":break;case"failed":if(S||!e.dataAfterTimeout)return;break;default:return}if(I==="abort"){u=M,y();return}if(S){u=M,h.length||(r.length?A():y());return}if(f(),_(),!e.random){const E=e.resources.indexOf(C.resource);E!==-1&&E!==e.index&&(e.index=E)}l="completed",p.forEach(E=>{E(M)})}function A(){if(l!=="pending")return;f();const C=r.shift();if(C===void 0){if(h.length){c=setTimeout(()=>{f(),l==="pending"&&(_(),y())},e.timeout);return}y();return}const I={status:"pending",resource:C,callback:(M,S)=>{x(I,M,S)}};h.push(I),d++,c=setTimeout(A,e.rotate),i(C,t,I.callback)}return setTimeout(A),b}function Qs(e){const t={...wc,...e};let i=[];function n(){i=i.filter(r=>r().status==="pending")}function o(r,a,l){const d=xc(t,r,a,(u,c)=>{n(),l&&l(u,c)});return i.push(d),d}function s(r){return i.find(a=>r(a))||null}return{query:o,find:s,setIndex:r=>{t.index=r},getIndex:()=>t.index,cleanup:n}}function Hn(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Ui=Object.create(null),ci=["https://api.simplesvg.com","https://api.unisvg.com"],bn=[];for(;ci.length>0;)ci.length===1||Math.random()>.5?bn.push(ci.shift()):bn.push(ci.pop());Ui[""]=Hn({resources:["https://api.iconify.design"].concat(bn)});function jo(e,t){const i=Hn(t);return i===null?!1:(Ui[e]=i,!0)}function Vi(e){return Ui[e]}function $c(){return Object.keys(Ui)}function zo(){}const sn=Object.create(null);function Cc(e){if(!sn[e]){const t=Vi(e);if(!t)return;const i=Qs(t),n={config:t,redundancy:i};sn[e]=n}return sn[e]}function Zs(e,t,i){let n,o;if(typeof e=="string"){const s=mn(e);if(!s)return i(void 0,424),zo;o=s.send;const r=Cc(e);r&&(n=r.redundancy)}else{const s=Hn(e);if(s){n=Qs(s);const r=e.resources?e.resources[0]:"",a=mn(r);a&&(o=a.send)}}return!n||!o?(i(void 0,424),zo):n.query(t,o,i)().abort}const Do="iconify2",Ve="iconify",Ks=Ve+"-count",Fo=Ve+"-version",tr=36e5,Ac=168,Ec=50;function fn(e,t){try{return e.getItem(t)}catch{}}function Bn(e,t,i){try{return e.setItem(t,i),!0}catch{}}function Ho(e,t){try{e.removeItem(t)}catch{}}function gn(e,t){return Bn(e,Ks,t.toString())}function vn(e){return parseInt(fn(e,Ks))||0}const Ft={local:!0,session:!0},er={local:new Set,session:new Set};let Un=!1;function Sc(e){Un=e}let di=typeof window>"u"?{}:window;function ir(e){const t=e+"Storage";try{if(di&&di[t]&&typeof di[t].length=="number")return di[t]}catch{}Ft[e]=!1}function nr(e,t){const i=ir(e);if(!i)return;const n=fn(i,Fo);if(n!==Do){if(n){const a=vn(i);for(let l=0;l<a;l++)Ho(i,Ve+l.toString())}Bn(i,Fo,Do),gn(i,0);return}const o=Math.floor(Date.now()/tr)-Ac,s=a=>{const l=Ve+a.toString(),d=fn(i,l);if(typeof d=="string"){try{const u=JSON.parse(d);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}Ho(i,l)}};let r=vn(i);for(let a=r-1;a>=0;a--)s(a)||(a===r-1?(r--,gn(i,r)):er[e].add(a))}function or(){if(!Un){Sc(!0);for(const e in Ft)nr(e,t=>{const i=t.data,n=t.provider,o=i.prefix,s=St(n,o);if(!Fn(s,i).length)return!1;const r=i.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,r):r,!0})}}function kc(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const n in Ft)nr(n,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function Tc(e,t){Un||or();function i(n){let o;if(!Ft[n]||!(o=ir(n)))return;const s=er[n];let r;if(s.size)s.delete(r=Array.from(s).shift());else if(r=vn(o),r>=Ec||!gn(o,r+1))return;const a={cached:Math.floor(Date.now()/tr),provider:e.provider,data:t};return Bn(o,Ve+r.toString(),JSON.stringify(a))}t.lastModified&&!kc(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function Bo(){}function Oc(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,gc(e)}))}function Ic(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:n}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;!o||!(s=mn(i))||s.prepare(i,n,o).forEach(r=>{Zs(i,r,a=>{if(typeof a!="object")r.icons.forEach(l=>{e.missing.add(l)});else try{const l=Fn(e,a);if(!l.length)return;const d=e.pendingIcons;d&&l.forEach(u=>{d.delete(u)}),Tc(e,a)}catch(l){console.error(l)}Oc(e)})})}))}const Vn=(e,t)=>{const i=_c(e,!0,Ys()),n=fc(i);if(!n.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(n.loaded,n.missing,n.pending,Bo)}),()=>{l=!1}}const o=Object.create(null),s=[];let r,a;return n.pending.forEach(l=>{const{provider:d,prefix:u}=l;if(u===a&&d===r)return;r=d,a=u,s.push(St(d,u));const c=o[d]||(o[d]=Object.create(null));c[u]||(c[u]=[])}),n.pending.forEach(l=>{const{provider:d,prefix:u,name:c}=l,h=St(d,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(c)||(p.add(c),o[d][u].push(c))}),s.forEach(l=>{const{provider:d,prefix:u}=l;o[d][u].length&&Ic(l,o[d][u])}),t?yc(t,n,s):Bo},Nc=e=>new Promise((t,i)=>{const n=typeof e=="string"?Ze(e,!0):e;if(!n){i(e);return}Vn([n||e],o=>{if(o.length&&n){const s=Ue(n);if(s){t({...Qe,...s});return}}i(e)})});function Mc(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function Pc(e,t){const i=typeof e=="string"?Ze(e,!0,!0):null;if(!i){const s=Mc(e);return{value:e,data:s}}const n=Ue(i);if(n!==void 0||!i.prefix)return{value:e,name:i,data:n};const o=Vn([i],()=>t(e,i,Ue(i)));return{value:e,name:i,loading:o}}function rn(e){return e.hasAttribute("inline")}let sr=!1;try{sr=navigator.vendor.indexOf("Apple")===0}catch{}function Lc(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(sr||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const Rc=/(-?[0-9.]*[0-9]+[0-9.]*)/g,jc=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function yn(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const n=e.split(Rc);if(n===null||!n.length)return e;const o=[];let s=n.shift(),r=jc.test(s);for(;;){if(r){const a=parseFloat(s);isNaN(a)?o.push(s):o.push(Math.ceil(a*t*i)/i)}else o.push(s);if(s=n.shift(),s===void 0)return o.join("");r=!r}}function zc(e,t="defs"){let i="";const n=e.indexOf("<"+t);for(;n>=0;){const o=e.indexOf(">",n),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const r=e.indexOf(">",s);if(r===-1)break;i+=e.slice(o+1,s).trim(),e=e.slice(0,n).trim()+e.slice(r+1)}return{defs:i,content:e}}function Dc(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Fc(e,t,i){const n=zc(e);return Dc(n.defs,t+n.content+i)}const Hc=e=>e==="unset"||e==="undefined"||e==="none";function rr(e,t){const i={...Qe,...e},n={...Vs,...t},o={left:i.left,top:i.top,width:i.width,height:i.height};let s=i.body;[i,n].forEach(w=>{const v=[],b=w.hFlip,y=w.vFlip;let _=w.rotate;b?y?_+=2:(v.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),v.push("scale(-1 1)"),o.top=o.left=0):y&&(v.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),v.push("scale(1 -1)"),o.top=o.left=0);let x;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:x=o.height/2+o.top,v.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:v.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:x=o.width/2+o.left,v.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}_%2===1&&(o.left!==o.top&&(x=o.left,o.left=o.top,o.top=x),o.width!==o.height&&(x=o.width,o.width=o.height,o.height=x)),v.length&&(s=Fc(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const r=n.width,a=n.height,l=o.width,d=o.height;let u,c;r===null?(c=a===null?"1em":a==="auto"?d:a,u=yn(c,l/d)):(u=r==="auto"?l:r,c=a===null?yn(u,d/l):a==="auto"?d:a);const h={},p=(w,v)=>{Hc(v)||(h[w]=v.toString())};p("width",u),p("height",c);const f=[o.left,o.top,l,d];return h.viewBox=f.join(" "),{attributes:h,viewBox:f,body:s}}function Wn(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)i+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function Bc(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Uc(e){return"data:image/svg+xml,"+Bc(e)}function ar(e){return'url("'+Uc(e)+'")'}const Vc=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Oi=Vc();function Wc(e){Oi=e}function Gc(){return Oi}function qc(e,t){const i=Vi(e);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let o=0;i.resources.forEach(r=>{o=Math.max(o,r.length)});const s=t+".json?icons=";n=i.maxURL-o-i.path.length-s.length}return n}function Yc(e){return e===404}const Xc=(e,t,i)=>{const n=[],o=qc(e,t),s="icons";let r={type:s,provider:e,prefix:t,icons:[]},a=0;return i.forEach((l,d)=>{a+=l.length+1,a>=o&&d>0&&(n.push(r),r={type:s,provider:e,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),n.push(r),n};function Jc(e){if(typeof e=="string"){const t=Vi(e);if(t)return t.path}return"/"}const Qc=(e,t,i)=>{if(!Oi){i("abort",424);return}let n=Jc(t.provider);switch(t.type){case"icons":{const s=t.prefix,r=t.icons.join(","),a=new URLSearchParams({icons:r});n+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:i("abort",400);return}let o=503;Oi(e+n).then(s=>{const r=s.status;if(r!==200){setTimeout(()=>{i(Yc(r)?"abort":"next",r)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?i("abort",s):i("next",o)});return}setTimeout(()=>{i("success",s)})}).catch(()=>{i("next",o)})},Zc={prepare:Xc,send:Qc};function Uo(e,t){switch(e){case"local":case"session":Ft[e]=t;break;case"all":for(const i in Ft)Ft[i]=t;break}}const an="data-style";let lr="";function Kc(e){lr=e}function Vo(e,t){let i=Array.from(e.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(an));i||(i=document.createElement("style"),i.setAttribute(an,an),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+lr}function cr(){Ro("",Zc),Ys(!0);let e;try{e=window}catch{}if(e){if(or(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Po(n))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const n="IconifyProviders["+i+"] is invalid.";try{const o=t[i];if(typeof o!="object"||!o||o.resources===void 0)continue;jo(i,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:t=>Uo(t,!0),disableCache:t=>Uo(t,!1),iconLoaded:Lo,iconExists:Lo,getIcon:bc,listIcons:mc,addIcon:Xs,addCollection:Po,calculateSize:yn,buildIcon:rr,iconToHTML:Wn,svgToURL:ar,loadIcons:Vn,loadIcon:Nc,addAPIProvider:jo,appendCustomStyle:Kc,_api:{getAPIConfig:Vi,setAPIModule:Ro,sendAPIQuery:Zs,setFetch:Wc,getFetch:Gc,listAPIProviders:$c}}}const _n={"background-color":"currentColor"},dr={"background-color":"transparent"},Wo={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Go={"-webkit-mask":_n,mask:_n,background:dr};for(const e in Go){const t=Go[e];for(const i in Wo)t[e+"-"+i]=Wo[i]}function qo(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function td(e,t,i){const n=document.createElement("span");let o=e.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const s=e.attributes,r=Wn(o,{...s,width:t.width+"",height:t.height+""}),a=ar(r),l=n.style,d={"--svg":a,width:qo(s.width),height:qo(s.height),...i?_n:dr};for(const u in d)l.setProperty(u,d[u]);return n}let Le;function ed(){try{Le=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Le=null}}function id(e){return Le===void 0&&ed(),Le?Le.createHTML(e):e}function nd(e){const t=document.createElement("span"),i=e.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const o=Wn(e.body,i);return t.innerHTML=id(o),t.firstChild}function wn(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function Yo(e,t){const i=t.icon.data,n=t.customisations,o=rr(i,n);n.preserveAspectRatio&&(o.attributes.preserveAspectRatio=n.preserveAspectRatio);const s=t.renderedMode;let r;switch(s){case"svg":r=nd(o);break;default:r=td(o,{...Qe,...i},s==="mask")}const a=wn(e);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):e.replaceChild(r,a):e.appendChild(r)}function Xo(e,t,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:n}}function od(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const n=t.get(e);if(n)return n;const o=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends i{constructor(){super(),Rt(this,"_shadowRoot"),Rt(this,"_initialised",!1),Rt(this,"_state"),Rt(this,"_checkQueued",!1),Rt(this,"_connected",!1),Rt(this,"_observer",null),Rt(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=rn(this);Vo(a,l),this._state=Xo({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=rn(this),d=this._state;l!==d.inline&&(d.inline=l,Vo(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return rn(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}Yo(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const d=this.getAttribute("mode"),u=No(this);(a.attrMode!==d||ac(a.customisations,u)||!wn(this._shadowRoot))&&this._renderIcon(a.icon,u,d)}_iconChanged(a){const l=Pc(a,(d,u,c)=>{const h=this._state;if(h.rendered||this.getAttribute("icon")!==d)return;const p={value:d,name:u,data:c};p.data?this._gotIconData(p):h.icon=p});l.data?this._gotIconData(l):this._state=Xo(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=wn(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,No(this),this.getAttribute("mode"))}_renderIcon(a,l,d){const u=Lc(a.data.body,d),c=this._state.inline;Yo(this._shadowRoot,this._state={rendered:!0,icon:a,inline:c,customisations:l,attrMode:d,renderedMode:u})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(d=>d.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};o.forEach(a=>{a in s.prototype||Object.defineProperty(s.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=cr();for(const a in r)s[a]=s.prototype[a]=r[a];return t.define(e,s),s}od()||cr();const sd=O`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_main-base), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,rd=O`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-3: hsl(210 10% 30%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
    --bim-ui_gray-7: hsl(210 10% 70%);
    --bim-ui_gray-8: hsl(210 10% 80%);
    --bim-ui_gray-9: hsl(210 10% 90%);
    --bim-ui_gray-10: hsl(210 10% 95%);

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem;
    --bim-ui_size-3xs: 0.5rem;
    --bim-ui_size-2xs: 0.625rem;
    --bim-ui_size-xs: 0.75rem;
    --bim-ui_size-sm: 0.875rem;
    --bim-ui_size-base: 1rem;
    --bim-ui_size-lg: 1.125rem;
    --bim-ui_size-xl: 1.25rem;
    --bim-ui_size-2xl: 1.375rem;
    --bim-ui_size-3xl: 1.5rem;
    --bim-ui_size-4xl: 1.625rem;
    --bim-ui_size-5xl: 1.75rem;
    --bim-ui_size-6xl: 1.875rem;
    --bim-ui_size-7xl: 2rem;
    --bim-ui_size-8xl: 2.125rem;
    --bim-ui_size-9xl: 2.25rem;
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-10);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,Tt={scrollbar:sd,globalStyles:rd},ur=class T{static set config(t){this._config={...T._config,...t}}static get config(){return T._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Tt.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){T.init()}static init(){T.addGlobalStyles(),T.defineCustomElement("bim-button",hd),T.defineCustomElement("bim-checkbox",be),T.defineCustomElement("bim-color-input",Gt),T.defineCustomElement("bim-context-menu",$n),T.defineCustomElement("bim-dropdown",vt),T.defineCustomElement("bim-grid",qn),T.defineCustomElement("bim-icon",_d),T.defineCustomElement("bim-input",ti),T.defineCustomElement("bim-label",ge),T.defineCustomElement("bim-number-input",K),T.defineCustomElement("bim-option",H),T.defineCustomElement("bim-panel",qt),T.defineCustomElement("bim-panel-section",ve),T.defineCustomElement("bim-selector",ye),T.defineCustomElement("bim-table",st),T.defineCustomElement("bim-tabs",Nt),T.defineCustomElement("bim-tab",X),T.defineCustomElement("bim-table-cell",Er),T.defineCustomElement("bim-table-children",kr),T.defineCustomElement("bim-table-group",Or),T.defineCustomElement("bim-table-row",Yt),T.defineCustomElement("bim-text-input",rt),T.defineCustomElement("bim-toolbar",Ji),T.defineCustomElement("bim-toolbar-group",Yi),T.defineCustomElement("bim-toolbar-section",xe),T.defineCustomElement("bim-viewport",Hr)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const o=Math.floor(Math.random()*t.length);i+=t.charAt(o)}return i}};ur._config={sectionLabelOnVerticalToolbar:!1};let Z=ur;class z extends k{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const n of t)this.elements.add(n);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const o=n.target;t.unobserve(o);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][s];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&t.observe(n)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const n=document.createDocumentFragment();if(t.length===0)return oe(t(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let o=i;const s=t,r=l=>(o={...o,...l},oe(s(o,r),n),o);r(i);const a=()=>o;return[n.firstElementChild,r,a]}}const We=(e,t={},i=!0)=>{let n={};for(const o of e.children){const s=o,r=s.getAttribute("name")||s.getAttribute("label"),a=t[r];if(r){if("value"in s&&typeof s.value<"u"&&s.value!==null){const l=s.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;n[r]=a?a(s.value):s.value}else if(i){const l=We(s,t);if(Object.keys(l).length===0)continue;n[r]=a?a(l):l}}else i&&(n={...n,...We(s,t)})}return n},Wi=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,ad=[">=","<=","=",">","<","?","/","#"];function Jo(e){const t=ad.find(r=>e.split(r).length===2),i=e.split(t).map(r=>r.trim()),[n,o]=i,s=o.startsWith("'")&&o.endsWith("'")?o.replace(/'/g,""):Wi(o);return{key:n,condition:t,value:s}}const xn=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const o=!n.startsWith("(")&&!n.endsWith(")"),s=n.startsWith("(")&&n.endsWith(")");if(o){const r=Jo(n);t.push(r)}if(s){const r={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const d=Jo(a);return l>0&&(d.operator="&"),d})};t.push(r)}}return t}catch{return null}},Qo=(e,t,i)=>{let n=!1;switch(t){case"=":n=e===i;break;case"?":n=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(n=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(n=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(n=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(n=e>=i);break;case"/":n=String(e).startsWith(String(i));break}return n};var ld=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,hr=(e,t,i,n)=>{for(var o=cd(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&ld(t,i,o),o},F;const Gn=(F=class extends k{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of F.menus)e instanceof F&&(e.visible=!1);F.dialog.close(),F.dialog.remove()}get visible(){return this._visible}set visible(e){var t;this._visible=e,e?(F.dialog.parentElement||document.body.append(F.dialog),this._previousContainer=this.parentElement,F.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,F.dialog.append(this),F.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await Ms(this._previousContainer,this,{placement:e,middleware:[_s(10),Ns(),Is(),Os({padding:5})]}),{x:i,y:n}=t;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),F.menus.push(this)}render(){return m` <slot></slot> `}},F.styles=[Tt.scrollbar,O`
      :host {
        pointer-events: auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        flex-direction: column;
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        padding: 0.5rem;
        border-radius: var(--bim-ui_size-4xs);
        display: flex;
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host(:not([visible])) {
        display: none;
      }
    `],F.dialog=z.create(()=>m` <dialog
      @click=${e=>{e.target===F.dialog&&F.removeMenus()}}
      @cancel=${()=>F.removeMenus()}
      data-context-dialog
      style="
      width: 0;
      height: 0;
      position: relative;
      padding: 0;
      border: none;
      outline: none;
      margin: none;
      overflow: visible;
      background-color: transparent;
    "
    ></dialog>`),F.menus=[],F);hr([g({type:String,reflect:!0})],Gn.prototype,"placement");hr([g({type:Boolean,reflect:!0})],Gn.prototype,"visible");let $n=Gn;var dd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,lt=(e,t,i,n)=>{for(var o=n>1?void 0:n?ud(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&dd(t,i,o),o},Te;const nt=(Te=class extends k{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=ue(),this._tooltip=ue(),this._mouseLeave=!1,this.onClick=e=>{e.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const e=this._contextMenu;if(e){const t=this.getAttribute("data-context-group");t&&e.setAttribute("data-context-group",t),this.closeNestedContexts();const i=Z.newRandomId();for(const n of e.children)n instanceof Te&&n.setAttribute("data-context-group",i);e.visible=!0}},this.mouseLeave=!0}set loading(e){if(this._loading=e,e)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=e,this.icon="eos-icons:loading";else{const{disabled:t,icon:i}=this._stateBeforeLoading;this.disabled=t,this.icon=i}}get loading(){return this._loading}set mouseLeave(e){this._mouseLeave=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&Ms(e,t,{placement:"bottom",middleware:[_s(10),Ns(),Is(),Os({padding:5})]}).then(i=>{const{x:n,y:o}=i;Object.assign(t.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of $n.dialog.children){const i=t.getAttribute("data-context-group");if(t instanceof $n&&i===e){t.visible=!1,t.removeAttribute("data-context-group");for(const n of t.children)n instanceof Te&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const e=m`
      <div ${G(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?m`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?m`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return m`
      <div ${G(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?m`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?t:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?e:null}
      </div>
      <slot></slot>
    `}},Te.styles=O`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-icon--c: var(--bim-label--c);
      position: relative;
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
    }

    .children {
      padding: 0 0.375rem;
      position: absolute;
      height: 100%;
      right: 0;
    }

    :host(:not([label-hidden])[icon][vertical]) .parent {
      min-height: 2.5rem;
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover),
    :host([active]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
    }

    :host([disabled]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80) !important;
      background-color: gray !important;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    .tooltip {
      position: absolute;
      padding: 0.75rem;
      z-index: 99;
      display: flex;
      flex-flow: column;
      row-gap: 0.375rem;
      box-shadow: 0 0 10px 3px rgba(0 0 0 / 20%);
      outline: 1px solid var(--bim-ui_bg-contrast-40);
      font-size: var(--bim-ui_size-xs);
      border-radius: var(--bim-ui_size-4xs);
      background-color: var(--bim-ui_bg-contrast-20);
      color: var(--bim-ui_bg-contrast-100);
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      display: none;
    }
  `,Te);lt([g({type:String,reflect:!0})],nt.prototype,"label",2);lt([g({type:Boolean,attribute:"label-hidden",reflect:!0})],nt.prototype,"labelHidden",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"active",2);lt([g({type:Boolean,reflect:!0,attribute:"disabled"})],nt.prototype,"disabled",2);lt([g({type:String,reflect:!0})],nt.prototype,"icon",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"vertical",2);lt([g({type:Number,attribute:"tooltip-time",reflect:!0})],nt.prototype,"tooltipTime",2);lt([g({type:Boolean,attribute:"tooltip-visible",reflect:!0})],nt.prototype,"tooltipVisible",2);lt([g({type:String,attribute:"tooltip-title",reflect:!0})],nt.prototype,"tooltipTitle",2);lt([g({type:String,attribute:"tooltip-text",reflect:!0})],nt.prototype,"tooltipText",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"loading",1);let hd=nt;var pd=Object.defineProperty,Ke=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&pd(t,i,o),o};const pr=class extends k{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(e){e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
      <div class="parent">
        ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};pr.styles=O`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.25rem;
      width: 100%;
      align-items: center;
      transition: all 0.15s;
    }

    :host([inverted]) .parent {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
      transition: all 0.15s;
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }
  `;let be=pr;Ke([g({type:String,reflect:!0})],be.prototype,"icon");Ke([g({type:String,reflect:!0})],be.prototype,"name");Ke([g({type:String,reflect:!0})],be.prototype,"label");Ke([g({type:Boolean,reflect:!0})],be.prototype,"checked");Ke([g({type:Boolean,reflect:!0})],be.prototype,"inverted");var md=Object.defineProperty,fe=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&md(t,i,o),o};const mr=class extends k{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=ue(),this._textInput=ue(),this.onValueChange=new Event("input"),this.onOpacityInput=e=>{const t=e.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(e){const{color:t,opacity:i}=e;this.color=t,i&&(this.opacity=i)}get value(){const e={color:this.color};return this.opacity&&(e.opacity=this.opacity),e}onColorInput(e){e.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(e){e.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:i}=t;let n=i.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),t.value=n.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:e}=this._colorInput;e&&e.click()}render(){return m`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1; padding: 0 0.5rem;"
            >
              <input
                ${G(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${G(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?m`<bim-number-input
                  @change=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};mr.styles=O`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    .parent {
      display: flex;
      gap: 0.375rem;
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      border-radius: var(--bim-color-input--bdrs, var(--bim-ui_size-4xs));
    }

    .color-container input[type="color"] {
      position: absolute;
      bottom: -0.25rem;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .color-container .sample {
      width: 1rem;
      height: 1rem;
      border-radius: 0.125rem;
      background-color: #fff;
    }

    .color-container input[type="text"] {
      height: 100%;
      flex: 1;
      width: 3.25rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let Gt=mr;fe([g({type:String,reflect:!0})],Gt.prototype,"name");fe([g({type:String,reflect:!0})],Gt.prototype,"label");fe([g({type:String,reflect:!0})],Gt.prototype,"icon");fe([g({type:Boolean,reflect:!0})],Gt.prototype,"vertical");fe([g({type:Number,reflect:!0})],Gt.prototype,"opacity");fe([g({type:String,reflect:!0})],Gt.prototype,"color");var bd=Object.defineProperty,fd=Object.getOwnPropertyDescriptor,Ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?fd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&bd(t,i,o),o};const br=class extends k{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Wi(this.label):this.label}set value(e){this._value=e}render(){return m`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?m` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?m`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .icon=${this.icon}
                .img=${this.img}
                >${this.label}</bim-label
              >
            </div>`:null}
        ${!this.checkbox&&!this.noMark&&this.checked?m`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
        <slot></slot>
      </div>
    `}};br.styles=O`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_main-base) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
    }

    .parent {
      box-sizing: border-box;
      display: flex;
      justify-content: var(--bim-option--jc, space-between);
      column-gap: 0.5rem;
      align-items: center;
      min-height: 1.75rem;
      height: 100%;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_main-base));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }

    bim-label {
      pointer-events: none;
    }
  `;let H=br;Ot([g({type:String,reflect:!0})],H.prototype,"img",2);Ot([g({type:String,reflect:!0})],H.prototype,"label",2);Ot([g({type:String,reflect:!0})],H.prototype,"icon",2);Ot([g({type:Boolean,reflect:!0})],H.prototype,"checked",2);Ot([g({type:Boolean,reflect:!0})],H.prototype,"checkbox",2);Ot([g({type:Boolean,attribute:"no-mark",reflect:!0})],H.prototype,"noMark",2);Ot([g({converter:{fromAttribute(e){return e&&Wi(e)}}})],H.prototype,"value",1);Ot([g({type:Boolean,reflect:!0})],H.prototype,"vertical",2);var gd=Object.defineProperty,vd=Object.getOwnPropertyDescriptor,It=(e,t,i,n)=>{for(var o=n>1?void 0:n?vd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&gd(t,i,o),o};const fr=class extends z{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=ue(),this.onOptionClick=e=>{const t=e.target,i=this._value.has(t);if(!this.multiple&&!this.required&&!i)this._value=new Set([t]);else if(!this.multiple&&!this.required&&i)this._value=new Set([]);else if(!this.multiple&&this.required&&!i)this._value=new Set([t]);else if(this.multiple&&!this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&i){const n=[...this._value].filter(o=>o!==t);this._value=new Set(n)}else if(this.multiple&&this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&i){const n=[...this._value].filter(s=>s!==t),o=new Set(n);o.size!==0&&(this._value=o)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(e){if(e){const{value:t}=this._contextMenu;if(!t)return;for(const i of this.elements)t.append(i);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(e){if(this.required&&Object.keys(e).length===0)return;const t=new Set;for(const i of e){const n=this.findOption(i);if(n&&(t.add(n),!this.multiple&&Object.keys(e).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof H&&e.checked).map(e=>e.value)}get _options(){const e=new Set([...this.elements]);for(const t of this.children)t instanceof H&&e.add(t);return[...e]}onSlotChange(e){const t=e.target.assignedElements();this.observe(t);const i=new Set;for(const n of this.elements){if(!(n instanceof H)){n.remove();continue}n.checked&&i.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=i}updateOptionsState(){for(const e of this._options)e instanceof H&&(e.checked=this._value.has(e))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}render(){let e,t,i;if(this._value.size===0)e="Select an option...";else if(this._value.size===1){const n=[...this._value][0];e=(n==null?void 0:n.label)||(n==null?void 0:n.value),t=n==null?void 0:n.img,i=n==null?void 0:n.icon}else e=`Multiple (${this._value.size})`;return m`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${t}
            .icon=${i}
            style="overflow: hidden;"
            >${e}</bim-label
          >
          <svg
            style="flex-shrink: 0; fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100))"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
          <bim-context-menu
            ${G(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};fr.styles=[Tt.scrollbar,O`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
        height: 100%;
        display: flex;
        flex: 1;
        overflow: hidden;
        column-gap: 0.25rem;
        outline: none;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 0.5rem;
      }

      bim-label {
        pointer-events: none;
      }
    `];let vt=fr;It([g({type:String,reflect:!0})],vt.prototype,"name",2);It([g({type:String,reflect:!0})],vt.prototype,"icon",2);It([g({type:String,reflect:!0})],vt.prototype,"label",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"multiple",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"required",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"vertical",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"visible",1);It([me()],vt.prototype,"_value",2);var yd=Object.defineProperty,gr=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&yd(t,i,o),o};const vr=class extends k{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(e){this._layouts=e;const t={};for(const[i,n]of Object.entries(e))for(const o in n.elements)t[i]||(t[i]={}),t[i][o]=s=>{const r=this._updateFunctions[i];if(!r)return;const a=r[o];a&&a(s)};this.updateComponent=t}get layouts(){return this._layouts}getLayoutAreas(e){const{template:t}=e,i=t.split(`
`).map(n=>n.trim()).map(n=>n.split('"')[1]).filter(n=>n!==void 0).flatMap(n=>n.split(/\s+/));return[...new Set(i)].filter(n=>n!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const e=this._updateFunctions[this.layout],t=this.layouts[this.layout],i=this.getLayoutAreas(t).map(n=>{const o=t.elements[n];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=n,o;if("template"in o){const{template:s,initialState:r}=o,[a,l]=z.create(s,r);return a.style.gridArea=n,e[n]=l,a}return z.create(o)}).filter(n=>!!n);this.style.gridTemplate=t.template,this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};vr.styles=O`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    /* :host(:not([layout])) {
      display: none;
    } */

    :host([floating]) {
      --bim-panel--bdrs: var(--bim-ui_size-4xs);
      background-color: transparent;
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `;let qn=vr;gr([g({type:Boolean,reflect:!0})],qn.prototype,"floating");gr([g({type:String,reflect:!0})],qn.prototype,"layout");const Cn=class extends k{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};Cn.styles=O`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
    }
  `,Cn.properties={icon:{type:String}};let _d=Cn;var wd=Object.defineProperty,Gi=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&wd(t,i,o),o};const yr=class extends k{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const e={};for(const t of this.children){const i=t;"value"in i?e[i.name||i.label]=i.value:"checked"in i&&(e[i.name||i.label]=i.checked)}return e}set value(e){const t=[...this.children];for(const i in e){const n=t.find(r=>{const a=r;return a.name===i||a.label===i});if(!n)continue;const o=n,s=e[i];typeof s=="boolean"?o.checked=s:o.value=s}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};yr.styles=O`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      column-gap: 1rem;
      row-gap: 0.375rem;
      user-select: none;
      flex: 1;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let ti=yr;Gi([g({type:String,reflect:!0})],ti.prototype,"name");Gi([g({type:String,reflect:!0})],ti.prototype,"label");Gi([g({type:String,reflect:!0})],ti.prototype,"icon");Gi([g({type:Boolean,reflect:!0})],ti.prototype,"vertical");var xd=Object.defineProperty,ei=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&xd(t,i,o),o};const _r=class extends k{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Wi(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};_r.styles=O`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
      display: block;
      white-space: nowrap;
      line-height: 1.1rem;
      transition: all 0.15s;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
      user-select: none;
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: flex;
      align-items: center;
      gap: 0.125rem;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: 100%;
      margin-right: 0.125rem;
    }

    :host(:not([vertical])) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let ge=_r;ei([g({type:String,reflect:!0})],ge.prototype,"img");ei([g({type:Boolean,attribute:"label-hidden",reflect:!0})],ge.prototype,"labelHidden");ei([g({type:String,reflect:!0})],ge.prototype,"icon");ei([g({type:Boolean,attribute:"icon-hidden",reflect:!0})],ge.prototype,"iconHidden");ei([g({type:Boolean,reflect:!0})],ge.prototype,"vertical");var $d=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?Cd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&$d(t,i,o),o};const wr=class extends k{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=ue(),this.onValueChange=new Event("change")}set value(e){this.setValue(e.toString())}get value(){return this._value}onChange(e){e.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(e){const{value:t}=this._input;let i=e;if(i=i.replace(/[^0-9.-]/g,""),i=i.replace(/(\..*)\./g,"$1"),i.endsWith(".")||(i.lastIndexOf("-")>0&&(i=i[0]+i.substring(1).replace(/-/g,"")),i==="-"||i==="-0"))return;let n=Number(i);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:e}=this._input;e&&Number.isNaN(Number(e.value))&&(e.value=this.value.toString())}onSliderMouseDown(e){document.body.style.cursor="w-resize";const{clientX:t}=e,i=this.value;let n=!1;const o=a=>{var l;n=!0;const{clientX:d}=a,u=this.step??1,c=((l=u.toString().split(".")[1])==null?void 0:l.length)||0,h=1/(this.sensitivity??1),p=(d-t)/h;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const f=i+p*u;this.setValue(f.toFixed(c))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},r=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)}onFocus(e){e.stopPropagation();const t=i=>{i.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:e}=this._input;e&&e.focus()}render(){const e=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${G(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${r=>r.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,t=this.min??-1/0,i=this.max??1/0,n=100*(this.value-t)/(i-t),o=m`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?m`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?m`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,s=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return m`
      <bim-input
        title=${s}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:e}
      </bim-input>
    `}};wr.styles=O`
    :host {
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_accent-base)
      );
    }

    :host(:not([slider])) bim-label {
      --bim-label--c: var(
        --bim-number-input_affixes--c,
        var(--bim-ui_bg-contrast-60)
      );
      --bim-label--fz: var(
        --bim-number-input_affixes--fz,
        var(--bim-ui_size-xs)
      );
    }

    p {
      margin: 0;
      padding: 0;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      padding: 0;
      flex-grow: 1;
      text-align: right;
      font-family: inherit;
      font-feature-settings: inherit;
      font-variation-settings: inherit;
      font-size: var(--bim-number-input--fz, var(--bim-ui_size-xs));
      color: var(--bim-number-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([suffix]:not([pref])) input {
      text-align: left;
    }

    :host([slider]) {
      --bim-input--p: 0;
    }

    :host([slider]) .slider {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .slider {
      position: relative;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 0 0.5rem;
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_main-base);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let K=wr;ot([g({type:String,reflect:!0})],K.prototype,"name",2);ot([g({type:String,reflect:!0})],K.prototype,"icon",2);ot([g({type:String,reflect:!0})],K.prototype,"label",2);ot([g({type:String,reflect:!0})],K.prototype,"pref",2);ot([g({type:Number,reflect:!0})],K.prototype,"min",2);ot([g({type:Number,reflect:!0})],K.prototype,"value",1);ot([g({type:Number,reflect:!0})],K.prototype,"step",2);ot([g({type:Number,reflect:!0})],K.prototype,"sensitivity",2);ot([g({type:Number,reflect:!0})],K.prototype,"max",2);ot([g({type:String,reflect:!0})],K.prototype,"suffix",2);ot([g({type:Boolean,reflect:!0})],K.prototype,"vertical",2);ot([g({type:Boolean,reflect:!0})],K.prototype,"slider",2);var Ad=Object.defineProperty,Ed=Object.getOwnPropertyDescriptor,ii=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ed(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Ad(t,i,o),o};const xr=class extends k{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(e){this._hidden=e,this.activationButton.active=!e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return We(this,this.valueTransform)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};xr.styles=[Tt.scrollbar,O`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        overflow: auto;
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([header-hidden]) .parent bim-label {
        display: none;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let qt=xr;ii([g({type:String,reflect:!0})],qt.prototype,"icon",2);ii([g({type:String,reflect:!0})],qt.prototype,"name",2);ii([g({type:String,reflect:!0})],qt.prototype,"label",2);ii([g({type:Boolean,reflect:!0})],qt.prototype,"hidden",1);ii([g({type:Boolean,attribute:"header-hidden",reflect:!0})],qt.prototype,"headerHidden",2);var Sd=Object.defineProperty,ni=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Sd(t,i,o),o};const $r=class extends k{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const e=this.parentElement;let t;return e instanceof qt&&(t=e.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),We(this,t)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const e=this.label||this.icon||this.name||this.fixed,t=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,i=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=this.collapsed?t:i,o=m`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return m`
      <div class="parent">
        ${e?o:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};$r.styles=[Tt.scrollbar,O`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .header svg {
        fill: var(--bim-ui_bg-contrast-80);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }
    `];let ve=$r;ni([g({type:String,reflect:!0})],ve.prototype,"icon");ni([g({type:String,reflect:!0})],ve.prototype,"label");ni([g({type:String,reflect:!0})],ve.prototype,"name");ni([g({type:Boolean,reflect:!0})],ve.prototype,"fixed");ni([g({type:Boolean,reflect:!0})],ve.prototype,"collapsed");var kd=Object.defineProperty,oi=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&kd(t,i,o),o};const Cr=class extends k{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=e=>{this._value=e.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof H&&(t.checked=t===e.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(e){const t=this.findOption(e);if(t){for(const i of this._options)i.checked=i===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(e){const t=e.target.assignedElements();for(const i of t)i instanceof H&&(i.noMark=!0,i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}firstUpdated(){const e=[...this.children].find(t=>t instanceof H&&t.checked);e&&(this._value=e)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Cr.styles=O`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }
  `;let ye=Cr;oi([g({type:String,reflect:!0})],ye.prototype,"name");oi([g({type:String,reflect:!0})],ye.prototype,"icon");oi([g({type:String,reflect:!0})],ye.prototype,"label");oi([g({type:Boolean,reflect:!0})],ye.prototype,"vertical");oi([me()],ye.prototype,"_value");const Td=()=>m`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-10);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-20);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div style="display: flex; flex-direction: column;">
      <div data-type="row" style="gap: 2rem">
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 2"></div>
        <div data-type="cell" style="flex: 1"></div>
        <div data-type="cell" style="flex: 0.5"></div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
      </div>
      <div style="display: flex;">
        <div data-type="row" style="flex: 1">
          <div data-type="cell"></div>
        </div>
        <div data-type="row" style="flex: 2">
          <div data-type="cell" style="flex: 0.5"></div>
        </div>
        <div data-type="row" style="flex: 1">
          <div data-type="cell" style="flex: 0.75"></div>
        </div>
        <div data-type="row" style="flex: 0.5">
          <div data-type="cell" style="flex: 0.7s5"></div>
        </div>
      </div>
    </div>
  `,Od=()=>m`
    <style>
      .loader {
        grid-area: Processing;
        position: relative;
        padding: 0.125rem;
      }
      .loader:before {
        content: "";
        position: absolute;
      }
      .loader .loaderBar {
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        left: 0;
        background: var(--bim-ui_main-base);
        /* width: 25%; */
        width: 0;
        animation: borealisBar 2s linear infinite;
      }

      @keyframes borealisBar {
        0% {
          left: 0%;
          right: 100%;
          width: 0%;
        }
        10% {
          left: 0%;
          right: 75%;
          width: 25%;
        }
        90% {
          right: 0%;
          left: 75%;
          width: 25%;
        }
        100% {
          left: 100%;
          right: 0%;
          width: 0%;
        }
      }
    </style>
    <div class="loader">
      <div class="loaderBar"></div>
    </div>
  `;var Id=Object.defineProperty,Nd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Id(t,i,o),o};const Ar=class extends k{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Ar.styles=O`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]) {
      justify-content: normal;
    }

    :host([data-column-index="0"]:not([data-cell-header]))
      ::slotted(bim-label) {
      text-align: left;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }

    ::slotted(bim-label) {
      white-space: normal;
      text-align: center;
    }
  `;let Er=Ar;Nd([g({type:String,reflect:!0})],Er.prototype,"column");var Md=Object.defineProperty,Pd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Md(t,i,o),o};const Sr=class extends k{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(e,t=!1){for(const i of this._groups)i.childrenHidden=typeof e>"u"?!i.childrenHidden:!e,t&&i.toggleChildren(e,t)}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(e=>{const t=document.createElement("bim-table-group");return this._groups.push(t),t.table=this.table,t.data=e,t})}
    `}};Sr.styles=O`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let kr=Sr;Pd([g({type:Array,attribute:!1})],kr.prototype,"data");var Ld=Object.defineProperty,Rd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Ld(t,i,o),o};const Tr=class extends k{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(e,t=!1){this._children&&(this.childrenHidden=typeof e>"u"?!this.childrenHidden:!e,t&&this._children.toggleGroups(e,t))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const e=this.table.getGroupIndentation(this.data)??0,t=m`
      ${this.table.noIndentation?null:m`
            <style>
              .branch-vertical {
                left: ${e+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,i=document.createDocumentFragment();oe(t,i);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${e-1+(this.table.selectableRows?2.05:.5625)}rem`);let o=null;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("height","9.5"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.3333333");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(l);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("height","6.5"),d.setAttribute("width","9.5"),d.setAttribute("viewBox","0 0 5.9111118 5.0175439");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),d.append(u),o=document.createElement("div"),o.addEventListener("click",c=>{c.stopPropagation(),this.toggleChildren()}),o.classList.add("caret"),o.style.left=`${(this.table.selectableRows?1.5:.125)+e}rem`,this.childrenHidden?o.append(a):o.append(d)}const s=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&s.append(i),s.table=this.table,s.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:s}})),o&&this.data.children&&s.append(o),e!==0&&(!this.data.children||this.childrenHidden)&&n&&s.append(n);let r;if(this.data.children){r=document.createElement("bim-table-children"),this._children=r,r.table=this.table,r.data=this.data.children;const a=document.createDocumentFragment();oe(t,a),r.append(a)}return m`
      <div class="parent">${s} ${this.childrenHidden?null:r}</div>
    `}};Tr.styles=O`
    :host {
      position: relative;
    }

    .parent {
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      border-left: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .caret {
      position: absolute;
      z-index: 2;
      transform: translateY(-50%) rotate(0deg);
      top: 50%;
      display: flex;
      width: 0.95rem;
      height: 0.95rem;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let Or=Tr;Rd([g({type:Boolean,attribute:"children-hidden",reflect:!0})],Or.prototype,"childrenHidden");var jd=Object.defineProperty,_e=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&jd(t,i,o),o};const Ir=class extends k{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(e=>{this._intersecting=e[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.name)}get _columnWidths(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.width)}get _isSelected(){var e;return(e=this.table)==null?void 0:e.selection.has(this.data)}onSelectionChange(e){if(!this.table)return;const t=e.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const e=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,i=[];for(const n in t){if(this.hiddenColumns.includes(n))continue;const o=t[n];let s;if(typeof o=="string"||typeof o=="boolean"||typeof o=="number"?(s=document.createElement("bim-label"),s.textContent=String(o)):o instanceof HTMLElement?s=o:(s=document.createDocumentFragment(),oe(o,s)),!s)continue;const r=document.createElement("bim-table-cell");r.append(s),r.column=n,this._columnNames.indexOf(n)===0&&(r.style.marginLeft=`${this.table.noIndentation?0:e+.75}rem`);const a=this._columnNames.indexOf(n);r.setAttribute("data-column-index",String(a)),r.toggleAttribute("data-no-indentation",a===0&&this.table.noIndentation),r.toggleAttribute("data-cell-header",this.isHeader),r.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:r}})),i.push(r)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,m`
      ${!this.isHeader&&this.table.selectableRows?m`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${i}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};Ir.styles=O`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      transition: all 0.15s;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(
        in lab,
        var(--bim-ui_bg-contrast-20) 30%,
        var(--bim-ui_main-base) 10%
      );
    }
  `;let Yt=Ir;_e([g({type:Boolean,reflect:!0})],Yt.prototype,"selected");_e([g({attribute:!1})],Yt.prototype,"columns");_e([g({attribute:!1})],Yt.prototype,"hiddenColumns");_e([g({attribute:!1})],Yt.prototype,"data");_e([g({type:Boolean,attribute:"is-header",reflect:!0})],Yt.prototype,"isHeader");_e([me()],Yt.prototype,"_intersecting");var zd=Object.defineProperty,Dd=Object.getOwnPropertyDescriptor,ct=(e,t,i,n)=>{for(var o=n>1?void 0:n?Dd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&zd(t,i,o),o};const Nr=class extends k{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(e,t)=>Object.values(t.data).some(i=>String(i).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,t)=>{let i=!1;const n=xn(e)??[];for(const o of n){if("queries"in o){i=!1;break}const{condition:s,value:r}=o;let{key:a}=o;if(a.startsWith("[")&&a.endsWith("]")){const l=a.replace("[","").replace("]","");a=l,i=Object.keys(t.data).filter(d=>d.includes(l)).map(d=>Qo(t.data[d],s,r)).some(d=>d)}else i=Qo(t.data[a],s,r);if(!i)break}return i}}set columns(e){const t=[];for(const i of e){const n=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;t.push(n)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const t of this.columns){const{name:i}=t;e[i]=String(i)}return e}get value(){return this._filteredData}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateFilteredData(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set hiddenColumns(e){this._hiddenColumns=e,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(xn(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(e){let t=!1;for(const i of e){const{children:n,data:o}=i;for(const s in o)this._columns.map(r=>typeof r=="string"?r:r.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(n){const s=this.computeMissingColumns(n);s&&!t&&(t=s)}}return t}generateText(e="comma",t=this.value,i="",n=!0){const o=this._textDelimiters[e];let s="";const r=this.columns.map(a=>a.name);if(n){this.indentationInText&&(s+=`Indentation${o}`);const a=`${r.join(o)}
`;s+=a}for(const[a,l]of t.entries()){const{data:d,children:u}=l,c=this.indentationInText?`${i}${a+1}${o}`:"",h=r.map(f=>d[f]??""),p=`${c}${h.join(o)}
`;s+=p,u&&(s+=this.generateText(e,l.children,`${i}${a+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(e){const t={};for(const n of Object.keys(this.dataTransform)){const o=this.columns.find(s=>s.name===n);o&&o.forceDataTransform&&(n in e||(e[n]=""))}const i=e;for(const n in i){const o=this.dataTransform[n];o?t[n]=o(i[n],e):t[n]=e[n]}return t}downloadData(e="BIM Table Data",t="json"){let i=null;if(t==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),t==="csv"&&(i=new File([this.csv],`${e}.csv`)),t==="tsv"&&(i=new File([this.tsv],`${e}.tsv`)),!i)return;const n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=i.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(e,t=this.value,i=0){for(const n of t){if(n.data===e)return i;if(n.children){const o=this.getRowIndentation(e,n.children,i+1);if(o!==null)return o}}return null}getGroupIndentation(e,t=this.value,i=0){for(const n of t){if(n===e)return i;if(n.children){const o=this.getGroupIndentation(e,n.children,i+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._filteredData.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){if(this.loading=!1,this._filteredData.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),n=i==null?void 0:i.querySelector("[data-table-element='error-message']");return t instanceof Error&&n&&t.message.trim()!==""&&(n.textContent=t.message),this._errorLoading=!0,!1}}filter(e,t=this.filterFunction??this._stringFilterFunction,i=this.data){const n=[];for(const o of i)if(t(e,o)){if(this.preserveStructureOnFilter){const s={data:o.data};if(o.children){const r=this.filter(e,t,o.children);r.length&&(s.children=r)}n.push(s)}else if(n.push({data:o.data}),o.children){const s=this.filter(e,t,o.children);n.push(...s)}}else if(o.children){const s=this.filter(e,t,o.children);this.preserveStructureOnFilter&&s.length?n.push({data:o.data,children:s}):n.push(...s)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return Td();if(this._errorLoading)return m`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return m`<slot name="missing-data"></slot>`;const e=document.createElement("bim-table-row");e.table=this,e.isHeader=!0,e.data=this._headerRowData,e.style.gridArea="Header",e.style.position="sticky",e.style.top="0",e.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:e} ${Od()}
        <div style="overflow-x: hidden; grid-area: Body">${t}</div>
      </div>
    `}};Nr.styles=[Tt.scrollbar,O`
      :host {
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      :host(:not([data-processing])) .loader {
        display: none;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
          "Processing" auto
          "Body" 1fr
          "Footer" auto;
        overflow: auto;
        height: 100%;
      }

      .parent > bim-table-row[is-header] {
        color: var(--bim-table_header--c, var(--bim-ui_bg-contrast-100));
        background-color: var(
          --bim-table_header--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `];let st=Nr;ct([me()],st.prototype,"_filteredData",2);ct([g({type:Boolean,attribute:"headers-hidden",reflect:!0})],st.prototype,"headersHidden",2);ct([g({type:String,attribute:"min-col-width",reflect:!0})],st.prototype,"minColWidth",2);ct([g({type:Array,attribute:!1})],st.prototype,"columns",1);ct([g({type:Array,attribute:!1})],st.prototype,"data",1);ct([g({type:Boolean,reflect:!0})],st.prototype,"expanded",2);ct([g({type:Boolean,reflect:!0,attribute:"selectable-rows"})],st.prototype,"selectableRows",2);ct([g({attribute:!1})],st.prototype,"selection",2);ct([g({type:Boolean,attribute:"no-indentation",reflect:!0})],st.prototype,"noIndentation",2);ct([g({type:Boolean,reflect:!0})],st.prototype,"loading",2);ct([me()],st.prototype,"_errorLoading",2);var Fd=Object.defineProperty,Hd=Object.getOwnPropertyDescriptor,we=(e,t,i,n)=>{for(var o=n>1?void 0:n?Hd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Fd(t,i,o),o};const Mr=class extends k{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=e=>{const t=e.target;t instanceof X&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(e){this._tab=e;const t=[...this.children],i=t.find(n=>n instanceof X&&n.name===e);for(const n of t){if(!(n instanceof X))continue;n.hidden=i!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(e){return this._switchers.find(t=>t.getAttribute("data-name")===e)}createSwitchers(){this._switchers=[];for(const e of this.children){if(!(e instanceof X))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===e.name?this.toggleAttribute("tab",!1):this.tab=e.name}),t.setAttribute("data-name",e.name),t.className="switcher";const i=document.createElement("bim-label");i.textContent=e.label??null,i.icon=e.icon,t.append(i),this._switchers.push(t)}}updateSwitchers(){for(const e of this.children){if(!(e instanceof X))continue;const t=this._switchers.find(n=>n.getAttribute("data-name")===e.name);if(!t)continue;const i=t.querySelector("bim-label");i&&(i.textContent=e.label??null,i.icon=e.icon)}}onSlotChange(e){this.createSwitchers();const t=e.target.assignedElements(),i=t.find(n=>n instanceof X?this.tab?n.name===this.tab:!n.hidden:!1);i&&i instanceof X&&(this.tab=i.name);for(const n of t){if(!(n instanceof X)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),i!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Mr.styles=[Tt.scrollbar,O`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-base);
        display: block;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: var(--bim-ui_bg-base);
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        transition: all 0.15s;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_main-base);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        grid-area: content;
        overflow: auto;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        border-left: 1px solid var(--bim-ui_bg-contrast-20);
        border-right: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([tab])) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom]:not([tab])) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let Nt=Mr;we([me()],Nt.prototype,"_switchers",2);we([g({type:Boolean,reflect:!0})],Nt.prototype,"bottom",2);we([g({type:Boolean,attribute:"switchers-hidden",reflect:!0})],Nt.prototype,"switchersHidden",2);we([g({type:Boolean,reflect:!0})],Nt.prototype,"floating",2);we([g({type:String,reflect:!0})],Nt.prototype,"tab",1);we([g({type:Boolean,attribute:"switchers-full",reflect:!0})],Nt.prototype,"switchersFull",2);var Bd=Object.defineProperty,Ud=Object.getOwnPropertyDescriptor,qi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ud(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Bd(t,i,o),o};const Pr=class extends k{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(e){this._label=e;const t=this.parentElement;t instanceof Nt&&t.updateSwitchers()}get label(){return this._label}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:e}=this;if(e&&this.name===this._defaultName){const t=[...e.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return m` <slot></slot> `}};Pr.styles=O`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let X=Pr;qi([g({type:String,reflect:!0})],X.prototype,"name",2);qi([g({type:String,reflect:!0})],X.prototype,"label",1);qi([g({type:String,reflect:!0})],X.prototype,"icon",2);qi([g({type:Boolean,reflect:!0})],X.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=e=>e??L;var Vd=Object.defineProperty,Wd=Object.getOwnPropertyDescriptor,yt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Wd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Vd(t,i,o),o};const Lr=class extends k{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(e){this._inputTypes.includes(e)&&(this._type=e)}get type(){return this._type}get query(){return xn(this.value)}onInputChange(e){e.stopPropagation();const t=e.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return m`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?m` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              placeholder=${Zo(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:m` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Zo(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Lr.styles=[Tt.scrollbar,O`
      :host {
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        flex: 1;
        display: block;
      }

      input,
      textarea {
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: var(--bim-ui_size-3xs);
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        height: 100%;
        padding: 0 var(--bim-ui_size-3xs); /* Override padding */
        border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      }

      textarea {
        line-height: 1.1rem;
        resize: vertical;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let rt=Lr;yt([g({type:String,reflect:!0})],rt.prototype,"icon",2);yt([g({type:String,reflect:!0})],rt.prototype,"label",2);yt([g({type:String,reflect:!0})],rt.prototype,"name",2);yt([g({type:String,reflect:!0})],rt.prototype,"placeholder",2);yt([g({type:String,reflect:!0})],rt.prototype,"value",2);yt([g({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);yt([g({type:Number,reflect:!0})],rt.prototype,"debounce",2);yt([g({type:Number,reflect:!0})],rt.prototype,"rows",2);yt([g({type:String,reflect:!0})],rt.prototype,"type",1);var Gd=Object.defineProperty,qd=Object.getOwnPropertyDescriptor,Rr=(e,t,i,n)=>{for(var o=n>1?void 0:n?qd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Gd(t,i,o),o};const jr=class extends k{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const e=this.children;for(const t of e)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};jr.styles=O`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let Yi=jr;Rr([g({type:Number,reflect:!0})],Yi.prototype,"rows",2);Rr([g({type:Boolean,reflect:!0})],Yi.prototype,"vertical",1);var Yd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,Xi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Xd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Yd(t,i,o),o};const zr=class extends k{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(e){this._labelHidden=e,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const e=this.children;for(const t of e)t instanceof Yi&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};zr.styles=O`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      display: block;
      flex: 1;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    ::slotted(bim-button) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: tb;
    }

    .children {
      display: flex;
      gap: 0.25rem;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let xe=zr;Xi([g({type:String,reflect:!0})],xe.prototype,"label",2);Xi([g({type:String,reflect:!0})],xe.prototype,"icon",2);Xi([g({type:Boolean,reflect:!0})],xe.prototype,"vertical",1);Xi([g({type:Boolean,attribute:"label-hidden",reflect:!0})],xe.prototype,"labelHidden",1);var Jd=Object.defineProperty,Qd=Object.getOwnPropertyDescriptor,Yn=(e,t,i,n)=>{for(var o=n>1?void 0:n?Qd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Jd(t,i,o),o};const Dr=class extends k{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(e){this._vertical=e,this.updateSections()}get vertical(){return this._vertical}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const e=this.children;for(const t of e)t instanceof xe&&(t.labelHidden=this.vertical&&!Z.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Dr.styles=O`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-2xs);
      display: block;
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: min-content;
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: min-content;
      border-radius: var(--bim-ui_size-2xs);
      border: 1px solid var(--bim-ui_bg-contrast-20);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `;let Ji=Dr;Yn([g({type:String,reflect:!0})],Ji.prototype,"icon",2);Yn([g({type:Boolean,attribute:"labels-hidden",reflect:!0})],Ji.prototype,"labelsHidden",2);Yn([g({type:Boolean,reflect:!0})],Ji.prototype,"vertical",1);var Zd=Object.defineProperty,Kd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Zd(t,i,o),o};const Fr=class extends k{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Fr.styles=O`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let Hr=Fr;Kd([g({type:String,reflect:!0})],Hr.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Br="important",tu=" !"+Br,Ht=Fs(class extends Hs{constructor(e){var t;if(super(e),e.type!==Ds.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ft.add(n);const s=typeof o=="string"&&o.endsWith(tu);n.includes("-")||s?i.setProperty(n,s?o.slice(0,-11):o,s?Br:""):i[n]=o}}return ce}}),eu=e=>{const{components:t}=e,i=t.get(ts);return m`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const n=document.createElement("input");n.type="file",n.accept=".ifc",n.onchange=async()=>{if(n.files===null||n.files.length===0)return;const o=n.files[0],s=o.name.replace(".ifc","");n.remove();const r=await o.arrayBuffer(),a=new Uint8Array(r);await i.load(a,!0,s)},n.click()}}
    ></bim-button>
  `},iu=e=>z.create(eu,e),nu=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:iu},Symbol.toStringTag,{value:"Module"}));({...nu});const ou=e=>{const{components:t,actions:i,tags:n}=e,o=(i==null?void 0:i.dispose)??!0,s=(i==null?void 0:i.download)??!0,r=(i==null?void 0:i.visibility)??!0,a=(n==null?void 0:n.schema)??!0,l=(n==null?void 0:n.viewDefinition)??!0,d=t.get(Wt),u=({detail:c})=>{const{cell:h}=c;h.style.padding="0.25rem 0"};return m`
    <bim-table ${G(c=>{if(!c)return;const h=c;h.hiddenColumns=["modelID"];const p=[];for(const[,f]of d.groups){if(!f)continue;const w={data:{Name:f.name||f.uuid,modelID:f.uuid}};p.push(w)}h.dataTransform={Name:(f,w)=>{const{modelID:v}=w;if(typeof v!="string")return f;const b=d.groups.get(v);if(!b)return v;const y={};for(const S of b.items)y[S.id]=S.ids;let _;const{schema:x}=b.ifcMetadata;a&&x&&(_=m`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${x}</bim-label>
            `);let A;if(l&&"viewDefinition"in b.ifcMetadata){const S=b.ifcMetadata.viewDefinition;A=m`
            ${S.split(",").map(E=>m`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${E}</bim-label>`)}
          `}let C;o&&(C=m`<bim-button @click=${()=>d.disposeGroup(b)} icon="mdi:delete"></bim-button>`);let I;r&&(I=m`<bim-button @click=${S=>{const E=t.get(es),B=S.target;E.set(B.hasAttribute("data-model-hidden"),y),B.toggleAttribute("data-model-hidden"),B.icon=B.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let M;return s&&(M=m`<bim-button @click=${()=>{const S=document.createElement("input");S.type="file",S.accept=".ifc",S.multiple=!1,S.addEventListener("change",async()=>{if(!(S.files&&S.files.length===1))return;const E=S.files[0],B=await E.arrayBuffer(),q=await t.get(ma).saveToIfc(b,new Uint8Array(B)),W=new File([q],E.name),$=document.createElement("a");$.href=URL.createObjectURL(W),$.download=W.name,$.click(),URL.revokeObjectURL($.href)}),S.click()}} icon="flowbite:download-solid"></bim-button>`),m`
         <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
            <div style="min-height: 1.75rem; overflow: auto; display: flex;">
              <bim-label style="white-space: normal;">${f}</bim-label>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
              ${_}
              ${A}
            </div>
          </div>
          <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
            ${M}
            ${I}
            ${C}
          </div>
         </div>
        `}},h.data=p})} @cellcreated=${u} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},su=(e,t=!0)=>{const i=z.create(ou,e);if(t){const{components:n}=e,o=n.get(Wt),[,s]=i;o.onFragmentsLoaded.add(()=>setTimeout(()=>s())),o.onFragmentsDisposed.add(()=>s())}return i},ru=Object.freeze(Object.defineProperty({__proto__:null,modelsList:su},Symbol.toStringTag,{value:"Module"})),Ur=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",e=>e.includes("Value"),e=>e.startsWith("Material"),e=>e.startsWith("Relating"),e=>{const t=["IsGroupedBy","IsDecomposedBy"];return e.startsWith("Is")&&!t.includes(e)}];async function fi(e,t,i,n=Ur,o=!1){const s=e.get(mt),r=await t.getProperties(i);if(!r)return{data:{Entity:`${i} properties not found...`}};const a=s.relationMaps[t.uuid],l={data:{}};for(const d in r){const u=n.map(h=>typeof h=="string"?d===h:h(d)).includes(!0);if(!(d==="type"||u))continue;const c=r[d];if(c)if(c.type===5){l.children||(l.children=[]);const h=await fi(e,t,c.value,n,o);l.children.push(h)}else if(typeof c=="object"&&!Array.isArray(c)){const{value:h,type:p}=c;if(o)p===1||p===2||p===3||(l.data[d]=h);else{const f=typeof h=="number"?Number(h.toFixed(3)):h;l.data[d]=f}}else if(Array.isArray(c))for(const h of c){if(h.type!==5)continue;l.children||(l.children=[]);const p=await fi(e,t,h.value,n,o);l.children.push(p)}else if(d==="type"){const h=gi[c];l.data.Entity=h}else l.data[d]=c}if(a&&a.get(r.expressID)){const d=a.get(r.expressID);for(const u of n){const c=[];if(typeof u=="string"){const h=s._inverseAttributes.indexOf(u);h!==-1&&c.push(h)}else{const h=s._inverseAttributes.filter(p=>u(p));for(const p of h){const f=s._inverseAttributes.indexOf(p);c.push(f)}}for(const h of c){const p=d.get(h);if(p)for(const f of p){const w=await fi(e,t,f,n,o);l.children||(l.children=[]),l.children.push(w)}}}}return l}const au=e=>{const{components:t,fragmentIdMap:i,attributesToInclude:n,editable:o,tableDefinition:s}=e,r=t.get(Wt);let a;return typeof n=="function"?a=n(Ur):a=n,m`<bim-table ${G(async l=>{if(!l)return;const d=l,u=[],c=[];for(const h in i){const p=r.list.get(h);if(!(p&&p.group))continue;const f=p.group,w=c.find(v=>v.model===f);if(w)for(const v of i[h])w.expressIDs.add(v);else{const v={model:f,expressIDs:new Set(i[h])};c.push(v)}}for(const h of c){const{model:p,expressIDs:f}=h;for(const w of f){const v=await fi(t,p,w,a,o);u.push(v)}}d.dataTransform=s,d.data=u,d.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},lu=e=>z.create(au,e),cu=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:lu},Symbol.toStringTag,{value:"Module"}));let wt;const du=e=>{const{components:t,classifications:i}=e,n=t.get(ba),o=t.get(es);wt||(wt=document.createElement("bim-table"),wt.headersHidden=!0,wt.hiddenColumns=["system"],wt.columns=["Name",{name:"Actions",width:"auto"}],wt.dataTransform={Actions:(r,a)=>{const{system:l,Name:d}=a;if(!(typeof l=="string"&&typeof d=="string"))return r;const u=n.list[l];if(!(u&&u[d]))return r;const c=u[d],{map:h}=c;return m`
          <div>
            <bim-checkbox checked @change=${p=>{const f=p.target;o.set(f.value,h)}}></bim-checkbox>
          </div>
        `}});const s=[];for(const r of i){const a=typeof r=="string"?r:r.system,l=typeof r=="string"?r:r.label,d=n.list[a];d&&s.push({data:{Name:l,system:a},children:Object.keys(d).map(u=>({data:{Name:u,system:a,Actions:""}}))})}return wt.data=s,m`${wt}`},uu=(e,t=!0)=>{const i=z.create(du,e);if(t){const{components:n}=e,o=n.get(Wt),[,s]=i;o.onFragmentsDisposed.add(()=>s())}return i},hu=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:uu},Symbol.toStringTag,{value:"Module"})),Vr=async(e,t,i)=>{var n,o,s,r;const a=e.get(mt),l={data:{Name:(n=i.Name)==null?void 0:n.value},children:[{data:{Name:"Identification",Value:(o=i.Identification)==null?void 0:o.value}},{data:{Name:"Name",Value:(s=i.Name)==null?void 0:s.value}},{data:{Name:"Description",Value:(r=i.Description)==null?void 0:r.value}}]},d=a.getEntityRelations(t,i.expressID,"IsNestedBy");if(!d)return l;l.children||(l.children=[]);const u=[];l.children.push({data:{Name:"Tasks"},children:u});for(const c of d){const h=await t.getProperties(c);if(!h)continue;const p=await Vr(e,t,h);u.push(p)}return l},pu=async(e,t,i)=>{const n=[];for(const o of i){const s=await Vr(e,t,o);n.push(s)}return{data:{Name:"Tasks"},children:n}},mu=async(e,t)=>{var i,n,o,s;const r={data:{Name:"Classifications"}};for(const a of t){const{value:l}=a.ReferencedSource,d=await e.getProperties(l);if(!d)continue;const u={data:{Name:(i=d.Name)==null?void 0:i.value},children:[{data:{Name:"Identification",Value:((n=a.Identification)==null?void 0:n.value)||((o=a.ItemReference)==null?void 0:o.value)}},{data:{Name:"Name",Value:(s=a.Name)==null?void 0:s.value}}]};r.children||(r.children=[]),r.children.push(u)}return r},bu=async(e,t)=>{var i,n,o,s,r,a;const l={data:{Name:"Materials"}};for(const d of t){if(d.type===os){const u=(i=d.ForLayerSet)==null?void 0:i.value,c=await e.getProperties(u);if(!c)continue;for(const h of c.MaterialLayers){const{value:p}=h,f=await e.getProperties(p);if(!f)continue;const w=await e.getProperties((n=f.Material)==null?void 0:n.value);if(!w)continue;const v={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:(o=f.LayerThickness)==null?void 0:o.value}},{data:{Name:"Material",Value:(s=w.Name)==null?void 0:s.value}}]};l.children||(l.children=[]),l.children.push(v)}}if(d.type===rs)for(const u of d.Materials){const{value:c}=u,h=await e.getProperties(c);if(!h)continue;const p={data:{Name:"Name",Value:(r=h.Name)==null?void 0:r.value}};l.children||(l.children=[]),l.children.push(p)}if(d.type===ss){const u={data:{Name:"Name",Value:(a=d.Name)==null?void 0:a.value}};l.children||(l.children=[]),l.children.push(u)}}return l},fu={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},gu={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},Wr=async(e,t)=>{var i,n,o;const s=Object.values(await e.getAllPropertiesOfType(ka))[0];let r;for(const a of s.Units){const l=await e.getProperties(a.value);if(l&&((i=l.UnitType)==null?void 0:i.value)===fu[t]){r=`${((n=l.Prefix)==null?void 0:n.value)??""}${((o=l.Name)==null?void 0:o.value)??""}`;break}}return r?gu[r]:null},vu=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"PropertySets"}};for(const a of t){const l={data:{Name:(n=a.Name)==null?void 0:n.value}};if(a.type===is){for(const d of a.HasProperties){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,f="";if(s){const{name:v}=c[h],b=await Wr(e,v)??{};f=b.symbol,p=c[h].value,typeof p=="number"&&b.digits&&(p=p.toFixed(b.digits))}const w={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${f??""}`}};l.children||(l.children=[]),l.children.push(w)}l.children&&(r.children||(r.children=[]),r.children.push(l))}}return r},yu=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"QuantitySets"}};for(const a of t){const l={data:{Name:(n=a.Name)==null?void 0:n.value}};if(a.type===ns){for(const d of a.Quantities){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,f="";if(s){const{name:v}=c[h],b=await Wr(e,v)??{};f=b.symbol,p=c[h].value,typeof p=="number"&&b.digits&&(p=p.toFixed(b.digits))}const w={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${f??""}`}};l.children||(l.children=[]),l.children.push(w)}l.children&&(r.children||(r.children=[]),r.children.push(l))}}return r},_u=["OwnerHistory","ObjectPlacement","CompositionType"],Gr=async(e,t)=>{const i={groupName:"Attributes",includeClass:!1,...t},{groupName:n,includeClass:o}=i,s={data:{Name:n}};o&&(s.children||(s.children=[]),s.children.push({data:{Name:"Class",Value:gi[e.type]}}));for(const r in e){if(_u.includes(r))continue;const a=e[r];if(a&&typeof a=="object"&&!Array.isArray(a)){if(a.type===$a)continue;const l={data:{Name:r,Value:a.value}};s.children||(s.children=[]),s.children.push(l)}}return s},he=(e,...t)=>{e.children||(e.children=[]),e.children.push(...t)},wu=async(e,t,i,n,o)=>{const s=e.get(mt).getEntityRelations(t,i,"IsDefinedBy");if(s){const r=[],a=[];for(const u of s){const c=await t.getProperties(u);c&&(c.type===is&&r.push(c),c.type===ns&&a.push(c))}const l=await vu(t,r,o);l.children&&he(n,l);const d=await yu(t,a,o);d.children&&he(n,d)}},xu=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssociations");if(o){const s=[],r=[];for(const d of o){const u=await t.getProperties(d);u&&(u.type===Ca&&s.push(u),(u.type===os||u.type===Aa||u.type===Ea||u.type===ss||u.type===rs)&&r.push(u))}const a=await mu(t,s);a.children&&he(n,a);const l=await bu(t,r);l.children&&he(n,l)}},$u=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssignments");if(o){const s=[];for(const a of o){const l=await t.getProperties(a);l&&l.type===Sa&&s.push(l)}const r=await pu(e,t,s);r.children&&he(n,r)}},Cu=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"ContainedInStructure");if(o&&o[0]){const s=o[0],r=await t.getProperties(s);if(r){const a=await Gr(r,{groupName:"SpatialContainer"});he(n,a)}}};let ui={};const Au=async(e,t,i)=>{var n;const o=e.get(mt),s=e.get(Wt),r=s.getModelIdMap(t);Object.keys(t).length===0&&(ui={});const a=[];for(const l in r){const d=s.groups.get(l);if(!d)continue;const u=o.relationMaps[d.uuid];if(!u)continue;l in ui||(ui[l]=new Map);const c=ui[l],h=r[l];for(const p of h){let f=c.get(p);if(f){a.push(f);continue}const w=await d.getProperties(p);if(!w)continue;f={data:{Name:(n=w.Name)==null?void 0:n.value}},a.push(f),c.set(p,f);const v=await Gr(w,{includeClass:!0});f.children||(f.children=[]),f.children.push(v),u.get(p)&&(await wu(e,d,p,f,i),await xu(e,d,p,f),await $u(e,d,p,f),await Cu(e,d,p,f))}}return a},Eu=e=>{const t={emptySelectionWarning:!0,...e},{components:i,fragmentIdMap:n,emptySelectionWarning:o}=t;return m`
    <bim-table @cellcreated=${({detail:s})=>{const{cell:r}=s;r.column==="Name"&&!("Value"in r.rowData)&&(r.style.gridColumn="1 / -1")}} ${G(async s=>{if(!s)return;const r=s;r.columns=[{name:"Name",width:"12rem"}],r.headersHidden=!0,r.loadFunction=()=>Au(i,n,e),await r.loadData(!0)&&r.dispatchEvent(new Event("datacomputed"))})}>
      ${o?m`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},Su=e=>z.create(Eu,e),ku=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:Su},Symbol.toStringTag,{value:"Module"})),An=async(e,t,i,n)=>{var o;const s=[],r=e.get(mt),a=await t.getProperties(i);if(!a)return s;const{type:l}=a,d={data:{Entity:gi[l],Name:(o=a.Name)==null?void 0:o.value,modelID:t.uuid,expressID:i}};for(const u of n){const c=r.getEntityRelations(t,i,u);if(!c)continue;d.children||(d.children=[]),d.data.relations=JSON.stringify(c);const h={};for(const p of c){const f=await An(e,t,p,n);for(const w of f)if(w.data.relations)d.children.push(w);else{const v=t.data.get(p);if(!v){d.children.push(w);continue}const b=v[1][1],y=gi[b];y in h||(h[y]=[]),w.data.Entity=w.data.Name,delete w.data.Name,h[y].push(w)}}for(const p in h){const f=h[p],w=f.map(b=>b.data.expressID),v={data:{Entity:p,modelID:t.uuid,relations:JSON.stringify(w)},children:f};d.children.push(v)}}return s.push(d),s},Tu=async(e,t,i,n)=>{const o=e.get(mt),s=[];for(const r of t){let a;if(n)a={data:{Entity:r.name!==""?r.name:r.uuid},children:await An(e,r,n,i)};else{const l=o.relationMaps[r.uuid],d=await r.getAllPropertiesOfType(xa);if(!(l&&d))continue;const{expressID:u}=Object.values(d)[0];a={data:{Entity:r.name!==""?r.name:r.uuid},children:await An(e,r,u,i)}}s.push(a)}return s};let bt;const Ou=(e,t)=>{const i=e.get(Wt),{modelID:n,expressID:o,relations:s}=t;if(!n)return null;const r=i.groups.get(n);return r?r.getFragmentMap([o,...JSON.parse(s??"[]")]):null},Iu=e=>{const{components:t,models:i,expressID:n}=e,o=e.selectHighlighterName??"select",s=e.hoverHighlighterName??"hover";bt||(bt=document.createElement("bim-table"),bt.hiddenColumns=["modelID","expressID","relations"],bt.columns=["Entity","Name"],bt.headersHidden=!0,bt.addEventListener("cellcreated",({detail:a})=>{const{cell:l}=a;l.column==="Entity"&&!("Name"in l.rowData)&&(l.style.gridColumn="1 / -1")})),bt.addEventListener("rowcreated",a=>{a.stopImmediatePropagation();const{row:l}=a.detail,d=t.get(fa),u=Ou(t,l.data);u&&Object.keys(u).length!==0&&(l.onmouseover=()=>{s&&(l.style.backgroundColor="var(--bim-ui_bg-contrast-20)",d.highlightByID(s,u,!0,!1,d.selection[o]??{}))},l.onmouseout=()=>{l.style.backgroundColor="",d.clear(s)},l.onclick=()=>{o&&d.highlightByID(o,u,!0,!0)})});const r=e.inverseAttributes??["IsDecomposedBy","ContainsElements"];return Tu(t,i,r,n).then(a=>bt.data=a),m`${bt}`},Nu=(e,t=!0)=>{const i=z.create(Iu,e);if(t){const[,n]=i,{components:o}=e,s=o.get(Wt),r=o.get(mt),a=()=>n({models:s.groups.values()});r.onRelationsIndexed.add(a),s.onFragmentsDisposed.add(a)}return i},Mu=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:Nu},Symbol.toStringTag,{value:"Module"})),Oe=(e,t)=>[...e.get(Tn).list.values()].find(i=>i.world===t),Pu=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target;e.color=new pe(n.color)}} color=${t}></bim-color-input>
  `,Lu=(e,t)=>{const{postproduction:i}=e,n=i.n8ao.configuration;return m`
    <bim-color-input @input=${o=>{const s=o.target;n.color=new pe(s.color)}} color=${t}></bim-color-input>
  `},Ru=(e,t)=>{const{color:i,opacity:n}=JSON.parse(t),{postproduction:o}=e,{customEffects:s}=o;return m`
    <bim-color-input @input=${r=>{const{color:a,opacity:l}=r.target;s.lineColor=new pe(a).getHex(),l&&(s.opacity=l/100)}} color=${i} opacity=${n*100}></bim-color-input>
  `},ju=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target,o=new pe(n.color);e.material.uniforms.uColor.value=o}} color=${t}></bim-color-input>
  `,zu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({ao:o.checked})}} .checked=${t}></bim-checkbox>
  `},Du=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({gamma:o.checked})}} .checked=${t}></bim-checkbox>
  `},Fu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({custom:o.checked})}} .checked=${t}></bim-checkbox>
  `},xt=(e,t,i,n=()=>{})=>m`
    <bim-checkbox .checked="${i}" @change="${o=>{const s=o.target.checked;e[t]=s,n(s)}}"></bim-checkbox> 
  `,N=(e,t,i,n)=>{const o={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...n},{slider:s,min:r,max:a,step:l,suffix:d,prefix:u,onInputSet:c}=o;return m`
    <bim-number-input
      .pref=${u}
      .suffix=${d}
      .slider=${s} 
      min=${r} 
      value="${i}" 
      max=${a} 
      step=${l} 
      @change="${h=>{const p=h.target.value;e[t]=p,c(p)}}"
    ></bim-number-input> 
  `},Hu=e=>{const{components:t}=e,i=t.get(Ge);return m`
    <bim-table @cellcreated=${({detail:n})=>{const o=n.cell.parentNode;if(!o)return;const s=o.querySelector("bim-table-cell[column='Name']"),r=o.querySelector("bim-table-cell[column='Value']");s&&!r&&(s.style.gridColumn="1 / -1")}} ${G(async n=>{var o,s,r,a,l;if(!n)return;const d=n;d.preserveStructureOnFilter=!0,d.dataTransform={Value:(c,h)=>{const p=h.World,f=i.list.get(p);if(!f)return c;const{scene:w,camera:v,renderer:b}=f,y=h.Name;if(y==="Grid"&&h.IsGridConfig&&typeof c=="boolean"){const _=Oe(t,f);return _?xt(_,"visible",c):c}if(y==="Color"&&h.IsGridConfig&&typeof c=="string"){const _=Oe(t,f);return _?ju(_,c):c}if(y==="Distance"&&h.IsGridConfig&&typeof c=="number"){const _=Oe(t,f);return _?N(_.material.uniforms.uDistance,"value",c,{slider:!0,min:300,max:1e3}):c}if(y==="Size"&&h.IsGridConfig&&typeof c=="string"){const _=Oe(t,f);if(!_)return c;const{x,y:A}=JSON.parse(c),C=N(_.material.uniforms.uSize1,"value",x,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),I=N(_.material.uniforms.uSize2,"value",A,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${C}${I}</div>
          `}if(y==="Near Frustum"&&v.three instanceof li&&typeof c=="number"){const _=v.three;return N(v.three,"near",c,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Far Frustum"&&v.three instanceof li&&typeof c=="number"){const _=v.three;return N(v.three,"far",c,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Field of View"&&v.three instanceof li&&typeof c=="number"){const _=v.three;return N(v.three,"fov",c,{slider:!0,min:10,max:120,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Invert Drag"&&v.hasCameraControls()&&typeof c=="boolean")return xt(v.controls,"dollyDragInverted",c);if(y==="Dolly Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"dollySpeed",c,{slider:!0,min:.5,max:3,step:.1});if(y==="Truck Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"truckSpeed",c,{slider:!0,min:.5,max:6,step:.1});if(y==="Smooth Time"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"smoothTime",c,{slider:!0,min:.01,max:2,step:.01});if(y==="Intensity"&&typeof c=="number"){if(h.Light&&typeof h.Light=="string"){const _=w.three.children.find(x=>x.uuid===h.Light);return _&&_ instanceof Ae?N(_,"intensity",c,{slider:!0,min:0,max:10,step:.1}):c}if(h.IsAOConfig&&b instanceof P)return N(b.postproduction.n8ao.configuration,"intensity",c,{slider:!0,max:16,step:.1})}if(y==="Color"&&typeof c=="string"){const _=h.Light,x=w.three.children.find(A=>A.uuid===_);if(x&&x instanceof Ae)return Pu(x,c);if(h.IsAOConfig&&b instanceof P)return Lu(b,c)}if(y==="Ambient Oclussion"&&typeof c=="boolean"&&h.IsAOConfig&&b instanceof P)return zu(b,c);if(y==="Half Resolution"&&h.IsAOConfig&&b instanceof P&&typeof c=="boolean")return xt(b.postproduction.n8ao.configuration,"halfRes",c);if(y==="Screen Space Radius"&&h.IsAOConfig&&b instanceof P&&typeof c=="boolean")return xt(b.postproduction.n8ao.configuration,"screenSpaceRadius",c);if(y==="Radius"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"aoRadius",c,{slider:!0,max:2,step:.1});if(y==="Denoise Samples"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"denoiseSamples",c,{slider:!0,min:1,max:16});if(y==="Samples"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"aoSamples",c,{slider:!0,min:1,max:16});if(y==="Denoise Radius"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"denoiseRadius",c,{slider:!0,min:0,max:16,step:.1});if(y==="Distance Falloff"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"distanceFalloff",c,{slider:!0,min:0,max:4,step:.1});if(y==="Directional Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find(x=>x.uuid===h.Light);return _&&_ instanceof Ae?xt(_,"visible",c):c}if(y==="Ambient Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find(x=>x.uuid===h.Light);return _&&_ instanceof Ae?xt(_,"visible",c):c}if(y==="Position"&&h.Light&&typeof h.Light=="string"&&typeof c=="string"){const _=w.three.children.find(E=>E.uuid===h.Light);if(!(_&&_ instanceof Ae))return c;const{x,y:A,z:C}=JSON.parse(c),I=N(_.position,"x",x,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),M=N(_.position,"y",A,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),S=N(_.position,"z",C,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${I}${M}${S}</div>
          `}return y==="Custom Effects"&&h.IsCEConfig&&b instanceof P&&typeof c=="boolean"?Fu(b,c):y==="Color"&&h.IsOutlineConfig&&b instanceof P&&typeof c=="string"?Ru(b,c):y==="Tolerance"&&h.IsOutlineConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"tolerance",c,{slider:!0,min:0,max:6,step:.01}):y==="Outline"&&h.IsOutlineConfig&&b instanceof P&&typeof c=="boolean"?xt(b.postproduction.customEffects,"outlineEnabled",c):y==="Gloss"&&h.IsGlossConfig&&b instanceof P&&typeof c=="boolean"?xt(b.postproduction.customEffects,"glossEnabled",c):y==="Min"&&h.IsGlossConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"minGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Max"&&h.IsGlossConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"maxGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Exponent"&&h.IsGlossConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"glossExponent",c,{slider:!0,min:0,max:5,step:.01}):y==="Gamma Correction"&&h.IsGammaConfig&&b instanceof P&&typeof c=="boolean"?Du(b,c):c}};const u=[];for(const[,c]of i.list){const{scene:h,camera:p,renderer:f}=c,w=Oe(t,c),v={data:{Name:c instanceof ga&&c.name||c.uuid},children:[]};if(h){const b={data:{Name:"Scene"}};if(w){const x=`#${w.material.uniforms.uColor.value.getHexString()}`,A=JSON.stringify({x:w.material.uniforms.uSize1.value,y:w.material.uniforms.uSize2.value}),C={data:{Name:"Grid",Value:w.three.visible,World:c.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",Value:x,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Size",Value:A,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:w.material.uniforms.uDistance.value,World:c.uuid,IsGridConfig:!0}}]};b.children||(b.children=[]),b.children.push(C)}const y=h.three.children.filter(x=>x instanceof va);for(const x of y){const A={data:{Name:"Directional Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(x.position),World:c.uuid,Light:x.uuid}},{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};b.children||(b.children=[]),b.children.push(A)}const _=h.three.children.filter(x=>x instanceof ya);for(const x of _){const A={data:{Name:"Ambient Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};b.children||(b.children=[]),b.children.push(A)}b.children&&((o=b.children)==null?void 0:o.length)>0&&((s=v.children)==null||s.push(b))}if(p.three instanceof li){const b={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:p.three.near,World:c.uuid}},{data:{Name:"Far Frustum",Value:p.three.far,World:c.uuid}},{data:{Name:"Field of View",Value:p.three.fov,World:c.uuid}}]};if(p.hasCameraControls()){const{controls:y}=p,_={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const x in _){const A=y[x];A!=null&&((r=b.children)==null||r.push({data:{Name:_[x],Value:A,World:c.uuid}}))}}(a=v.children)==null||a.push(b)}if(f instanceof P){const{postproduction:b}=f,y=b.n8ao.configuration,_={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:b.settings.gamma??!1,World:c.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:b.settings.ao??!1,World:c.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:y.aoSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${y.color.getHexString()}`,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:y.halfRes,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:y.screenSpaceRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:y.aoRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:y.intensity,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:y.distanceFalloff,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:y.denoiseSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:y.denoiseRadius,World:c.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:b.settings.custom??!1,World:c.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:b.customEffects.glossEnabled,World:c.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:b.customEffects.minGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:b.customEffects.maxGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:b.customEffects.glossExponent,World:c.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:b.customEffects.outlineEnabled,World:c.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const x=new pe(b.customEffects.lineColor),A=b.customEffects.opacity;return JSON.stringify({color:`#${x.getHexString()}`,opacity:A})},World:c.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:b.customEffects.tolerance,World:c.uuid,IsOutlineConfig:!0}}]}]}]};(l=v.children)==null||l.push(_)}u.push(v)}d.columns=[{name:"Name",width:"11rem"}],d.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],d.data=u})} headers-hidden expanded>
     <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No worlds to configure
      </bim-label>
    </bim-table>
  `},Bu=(e,t=!0)=>{const i=z.create(Hu,e);if(t){const[,n]=i,{components:o}=e;o.get(Ge).list.onItemDeleted.add(()=>n())}return i},Uu=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:Bu},Symbol.toStringTag,{value:"Module"})),Zt=(e,t)=>{const i=t[e],n=(i==null?void 0:i.name)??e,o=n.trim().split(/\s+/);let s,r;return o[0]&&o[0][0]&&(s=o[0][0].toUpperCase(),o[0][1]&&(r=o[0][1].toUpperCase())),o[1]&&o[1][0]&&(r=o[1][0].toUpperCase()),m`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(i!=null&&i.picture)&&(s||r)?m`
        <bim-label
          style=${Ht({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${r}</bim-label>
        `:null}
      <bim-label .img=${i==null?void 0:i.picture}>${n}</bim-label>
    </div>
  `},J={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},Kt={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vu=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wu={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gu=e=>(...t)=>({_$litDirective$:e,values:t});class qu{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Re(o,t);return!0},Ii=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},qr=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ju(t)}};function Yu(e){this._$AN!==void 0?(Ii(this),this._$AM=e,qr(this)):this._$AM=e}function Xu(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Re(n[s],!1),Ii(n[s]);else n!=null&&(Re(n,!1),Ii(n));else Re(this,e)}const Ju=e=>{e.type==Wu.CHILD&&(e._$AP??(e._$AP=Xu),e._$AQ??(e._$AQ=Yu))};class Qu extends qu{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),qr(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(Re(this,t),Ii(this))}setValue(t){if(Vu(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En=()=>new Zu;class Zu{}const ln=new WeakMap,Ku=Gu(class extends Qu{render(e){return j}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),j}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=ln.get(t);i===void 0&&(i=new WeakMap,ln.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=ln.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),th={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},Yr=e=>{const{components:t,topic:i,value:n,onCancel:o,onSubmit:s,styles:r}=e,a=s??(()=>{}),l=t.get(qe),d=(n==null?void 0:n.title)??(i==null?void 0:i.title)??_t.default.title,u=(n==null?void 0:n.status)??(i==null?void 0:i.status)??_t.default.status,c=(n==null?void 0:n.type)??(i==null?void 0:i.type)??_t.default.type,h=(n==null?void 0:n.priority)??(i==null?void 0:i.priority)??_t.default.priority,p=(n==null?void 0:n.assignedTo)??(i==null?void 0:i.assignedTo)??_t.default.assignedTo,f=(n==null?void 0:n.labels)??(i==null?void 0:i.labels)??_t.default.labels,w=(n==null?void 0:n.stage)??(i==null?void 0:i.stage)??_t.default.stage,v=(n==null?void 0:n.description)??(i==null?void 0:i.description)??_t.default.description,b=i!=null&&i.dueDate?i.dueDate.toISOString().split("T")[0]:null,y=new Set([...l.config.statuses]);u&&y.add(u);const _=new Set([...l.config.types]);c&&_.add(c);const x=new Set([...l.config.priorities]);h&&x.add(h);const A=new Set([...l.config.users]);p&&A.add(p);const C=new Set([...l.config.labels]);if(f)for(const $ of f)C.add($);const I=new Set([...l.config.stages]);w&&I.add(w);const M=En(),S=async()=>{const{value:$}=M;if(!$)return;const R=We($,th);if(i)i.set(R),await a(i);else{const V=l.create(R);await a(V)}},E=En(),B=$=>{const{value:R}=E;if(!R)return;const V=$.target;R.disabled=V.value.trim()===""},q=`btn-${Z.newRandomId()}`,W=`btn-${Z.newRandomId()}`;return m`
    <div ${G(M)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${B} vertical label="Title" name="title" .value=${d}></bim-text-input>
        ${i?m`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...y].map($=>m`<bim-option label=${$} .checked=${u===$}></bim-option>`)}
            </bim-dropdown>`:m``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[..._].map($=>m`<bim-option label=${$} .checked=${c===$}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...x].map($=>m`<bim-option label=${$} .checked=${h===$}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...C].map($=>m`<bim-option label=${$} .checked=${f?[...f].includes($):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...A].map($=>{const R=r!=null&&r.users?r.users[$]:null,V=R?R.name:$,tt=R==null?void 0:R.picture;return m`<bim-option label=${V} value=${$} .img=${tt} .checked=${p===$}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${b}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...I].map($=>m`<bim-option label=${$} .checked=${w===$}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${v??null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${W} {
            background-color: transparent;
          }

          #${W}:hover {
            --bim-label--c: #FF5252;
          }

          #${q}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${W} style="flex: 0" @click=${o} label="Cancel"></bim-button>
        <bim-button id=${q} style="flex: 0" @click=${S} ${G(E)} label=${i?"Update Topic":"Add Topic"} icon=${i?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},eh=e=>{const{components:t,dataStyles:i,onTopicEnter:n}=e,o=t.get(qe),s=e.topics??o.list.values();return m`
    <bim-table no-indentation ${G(r=>{if(!r)return;const a=r;a.hiddenColumns.length===0&&(a.hiddenColumns=["Guid"]),a.columns=["Title"],a.dataTransform={Title:(l,d)=>{const{Guid:u}=d;if(typeof u!="string")return l;const c=o.list.get(u);if(!c)return l;const h=`btn-${Z.newRandomId()}`;return m`
          <div style="display: flex; overflow: hidden;">
            <style>
              #${h} {
                background-color: transparent
              }

              #${h}:hover {
                --bim-label--c: var(--bim-ui_accent-base)
              }
            </style>
            <bim-button @click=${()=>{n&&n(c)}} id=${h} icon="iconamoon:enter-duotone"></bim-button>
            <bim-label>${l}</bim-label>
          </div>
        `},Priority:l=>{if(typeof l!="string")return l;const d=((i==null?void 0:i.priorities)??J.priorities)[l];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ht({...Kt,...d==null?void 0:d.style})}
          >${l}
          </bim-label>
        `},Status:l=>{if(typeof l!="string")return l;const d=((i==null?void 0:i.statuses)??J.statuses)[l];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ht({...Kt,...d==null?void 0:d.style})}
          >${l}
          </bim-label>
        `},Type:l=>{if(typeof l!="string")return l;const d=((i==null?void 0:i.types)??J.types)[l];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ht({...Kt,...d==null?void 0:d.style})}
          >${l}
          </bim-label>
        `},Author:l=>typeof l!="string"?l:Zt(l,(i==null?void 0:i.users)??J.users),Assignee:l=>typeof l!="string"?l:Zt(l,(i==null?void 0:i.users)??J.users)},a.data=[...s].map(l=>{var d;return{data:{Guid:l.guid,Title:l.title,Status:l.status,Description:l.description??"",Author:l.creationAuthor,Assignee:l.assignedTo??"",Date:l.creationDate.toDateString(),DueDate:((d=l.dueDate)==null?void 0:d.toDateString())??"",Type:l.type,Priority:l.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>
  `},Xr=(e,t=!0)=>{const i=z.create(eh,e);if(t){const{components:n,topics:o}=e,[,s]=i,r=n.get(qe);if(r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),o)for(const a of o)a.relatedTopics.onItemAdded.add(()=>s()),a.relatedTopics.onItemDeleted.add(()=>s()),a.relatedTopics.onCleared.add(()=>s());else r.list.onItemSet.add(()=>s())}return i},ih=Object.freeze(Object.defineProperty({__proto__:null,topicsList:Xr},Symbol.toStringTag,{value:"Module"})),nh=e=>{const{topic:t,styles:i,viewpoint:n}=e,o={delete:!0,...e.actions};return m`
    <bim-table no-indentation ${G(s=>{if(!s)return;const r=s;r.headersHidden=!0,r.hiddenColumns=["guid","author"],r.dataTransform={Comment:(l,d)=>{const{guid:u}=d;if(typeof u!="string")return l;const c=t.comments.get(u);if(!c)return l;const h=()=>{t.comments.delete(u)},p=`btn-${Z.newRandomId()}`;return m`
          <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; gap: 0.375rem;">
                ${Zt(c.author,i??J.users)}
                <bim-label style="color: var(--bim-ui_bg-contrast-40)">@ ${c.date.toDateString()}</bim-label>
              </div>
              <div>
                <style>
                  #${p} {
                    background-color: transparent;
                    --bim-label--c: var(--bim-ui_bg-contrast-60)
                  }

                  #${p}:hover {
                    --bim-label--c: #FF5252;
                  }
                </style>
                ${o!=null&&o.delete?m`<bim-button @click=${h} id=${p} icon="majesticons:delete-bin"></bim-button>`:null}
              </div>
            </div>
            <bim-label style="margin-left: 1.7rem; white-space: normal">${c.comment}</bim-label>
          </div>
        `}};let a=t.comments.values();n&&(a=[...t.comments.values()].filter(l=>l.viewpoint===n)),r.data=[...a].map(l=>({data:{guid:l.guid,Comment:l.comment,author:(()=>{const d=i;if(!d)return l.author;const u=d[l.author];return(u==null?void 0:u.name)??l.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label>
    </bim-table>
  `},Jr=(e,t=!0)=>{const i=z.create(nh,e);if(t){const{topic:n}=e,[o,s]=i;n.comments.onItemSet.add(()=>s()),n.comments.onItemUpdated.add(()=>s()),n.comments.onItemDeleted.add(()=>s()),n.comments.onCleared.add(()=>s())}return i},oh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Jr},Symbol.toStringTag,{value:"Module"})),sh=e=>{var t;const{components:i,topic:n}=e,o={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!n,...e.actions},s=i.get(Li),r=((t=e.topic)==null?void 0:t.viewpoints)??s.list.keys(),a=[];for(const l of r){const d=s.list.get(l);d&&a.push(d)}return m`
    <bim-table no-indentation ${G(l=>{if(!l)return;const d=l;d.addEventListener("cellcreated",({detail:u})=>{const{cell:c}=u;c.style.padding="0.25rem"}),d.headersHidden=!0,d.hiddenColumns=["Guid"],d.columns=["Title",{name:"Actions",width:"auto"}],d.dataTransform={Actions:(u,c)=>{const{Guid:h}=c;if(!(h&&typeof h=="string"))return h||"";const p=s.list.get(h);return p?m`
          <bim-button icon="ph:eye-fill" @click=${()=>p.go()}></bim-button>
          ${Object.values(o).includes(!0)?m`
                <bim-button icon="prime:ellipsis-v">
                  <bim-context-menu>
                    ${o.selectComponents?m`<bim-button label="Select Components" @click=${()=>console.log(p.selection)}></bim-button> `:null}
                    ${o.colorizeComponent?m`<bim-button label="Colorize Components" @click=${()=>p.applyColors()}></bim-button> `:null}
                    ${o.resetColors?m`<bim-button label="Reset Colors" @click=${()=>p.resetColors()}></bim-button> `:null}
                    ${o.updateCamera?m`<bim-button label="Update Camera" @click=${()=>p.updateCamera()}></bim-button> `:null}
                    ${o.unlink?m`<bim-button .disabled=${!n} label="Unlink" @click=${()=>n==null?void 0:n.viewpoints.delete(p.guid)}></bim-button> `:null}
                    ${o.delete?m`<bim-button label="Delete" @click=${()=>s.list.delete(p.guid)}></bim-button>`:null}
                  </bim-context-menu>
                </bim-button>
              `:null}
        `:h}},d.data=a.map((u,c)=>({data:{Guid:u.guid,Title:u.title??`Viewpoint ${e.topic?c+1:""}`,Actions:""}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No viewpoints to show</bim-label>
    </bim-table>
  `},Qr=(e,t=!0)=>{const i=z.create(sh,e),{components:n,topic:o}=e;if(t){const[,s]=i,r=n.get(Li);r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),r.list.onCleared.add(()=>s()),o?(o.viewpoints.onItemAdded.add(()=>s()),o.viewpoints.onItemDeleted.add(()=>s()),o.viewpoints.onCleared.add(()=>s())):r.list.onItemSet.add(()=>s())}return i},rh=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:Qr},Symbol.toStringTag,{value:"Module"})),ah={...ru,...cu,...hu,...ku,...Mu,...Uu,...ih,...oh,...rh},lh=e=>m`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${Yr(e)}
    </bim-panel-section>
  `,ch=e=>z.create(lh,e),dh=Object.freeze(Object.defineProperty({__proto__:null,topic:ch},Symbol.toStringTag,{value:"Module"})),uh={...dh},hh=(e,t)=>{const{components:i,editing:n,topic:o,styles:s}=e,r={update:!0,...e.actions},a=(s==null?void 0:s.priorities)??J.priorities,l=(s==null?void 0:s.statuses)??J.statuses,d=(s==null?void 0:s.types)??J.types;let u;o!=null&&o.priority&&(u=a[o.priority]);let c;o!=null&&o.type&&(c=d[o.type]);let h;o!=null&&o.type&&(h=l[o.status]);let p,f;return n?p=Yr({components:i,topic:o,styles:s,onSubmit:()=>{t({editing:!1})},onCancel:()=>{t({editing:!1})}}):f=m`
      <div>
        <bim-label>Title</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.title}</bim-label>
      </div>

      ${o.description?m`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${o.description}</bim-label>
            </div>
          `:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label>
        <bim-label .icon=${h==null?void 0:h.icon} style=${Ht({...Kt,...h==null?void 0:h.style})}
        >${o.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${c==null?void 0:c.icon} style=${Ht({...Kt,...c==null?void 0:c.style})}
        >${o.type}
        </bim-label>
      </div>

      ${o.priority?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${u==null?void 0:u.icon} style=${Ht({...Kt,...u==null?void 0:u.style})}
              >${o.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${Zt(o.creationAuthor,(s==null?void 0:s.users)??J.users)}
      </div>

      ${o.assignedTo?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${Zt(o.assignedTo,(s==null?void 0:s.users)??J.users)}
          </div>`:null}

      ${o.dueDate?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${o.modifiedAuthor?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${Zt(o.modifiedAuthor,(s==null?void 0:s.users)??J.users)}
          </div>`:null}

      ${o.modifiedDate?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.modifiedDate.toDateString()}</bim-label>
            </div>`:null}

      ${o.labels.size!==0?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${[...o.labels].join(", ")}</bim-label>
          </div>`:null}

      ${r.update?m`
              <bim-button @click=${()=>t({editing:!0})} label="Update Information" icon="tabler:refresh"></bim-button> 
            `:null}
    `,m`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${n?p:f}
    </div>
  `},ph=e=>z.create(hh,e),mh=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:ph},Symbol.toStringTag,{value:"Module"})),bh=(e,t)=>{const{showInput:i,topic:n,styles:o}=e,s={add:!0,delete:!0,...e.actions},r=`input-${Z.newRandomId()}`,a=`btn-${Z.newRandomId()}`,l=`btn-${Z.newRandomId()}`,d=()=>document.getElementById(a),u=()=>document.getElementById(r),c=()=>{const _=u();return _?_.value.trim().length>0:!1},h=()=>{t({showInput:!0})},p=()=>{const _=u(),x=c();_&&x&&(n.createComment(_.value),t({showInput:!1}))},f=()=>{t({showInput:!1})},w=()=>{const _=d();if(_){if(!u()){_.disabled=!0;return}_.disabled=!c()}},v=m`
    ${s.add?m`<bim-button @click=${h} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,b=m`
    <bim-text-input id=${r} @input=${w} @keypress=${_=>{_.code==="Enter"&&_.ctrlKey&&p()}} type="area"></bim-text-input>

    <div style="justify-content: right; display: flex; gap: 0.375rem">
      <style>
        #${a} {
          background-color: #329936;
        }  

        #${l} {
          background-color: transparent;
        }

        #${l}:hover {
          --bim-label--c: #FF5252;
        }
      </style>

      <bim-button style="flex: 0" id=${l} @click=${f} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${a} @click=${p} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[y]=Jr({topic:n,actions:s,styles:o??J.users});return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${y}
      ${i?b:v}
    </div>
  `},fh=e=>z.create(bh,e),gh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:fh},Symbol.toStringTag,{value:"Module"})),vh=(e,t)=>{const{components:i,topic:n,linking:o}=e,s=i.get(qe),r={link:!0,...e.actions},[a,l]=Xr({components:i,topics:[...n.relatedTopics].map(h=>s.list.get(h)).map(h=>h)});a.headersHidden=!0,a.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const d=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${h=>{const p=h.target;p instanceof rt&&(a.queryString=p.value)}}></bim-text-input> 
    `;let u,c;if(o){a.selectableRows=!0,l({topics:void 0});const h=a.data.filter(b=>{const{Guid:y}=b.data;return typeof y!="string"?!1:n.relatedTopics.has(y)}).map(b=>b.data);a.selection=new Set(h);const p=()=>{const b=[...a.selection].map(({Guid:y})=>typeof y!="string"?null:s.list.has(y)?y:null).map(y=>y);n.relatedTopics.clear(),n.relatedTopics.add(...b),t({linking:!1})},f=()=>{t({linking:!1})},w=`btn-${Z.newRandomId()}`,v=`btn-${Z.newRandomId()}`;u=m`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${w}:hover {
            background-color: #329936;
          }  

          #${v} {
            background-color: transparent;
          }

          #${v}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${d()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${v} @click=${f} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${w} @click=${p} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{a.selectableRows=!1;const h=()=>{t({linking:!0})};c=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${d()}
        ${r.link?m`<bim-button style="flex: 0" @click=${h} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${c}
      ${u}
      ${a}
    </div> 
  `},yh=e=>z.create(vh,e),_h=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:yh},Symbol.toStringTag,{value:"Module"})),wh=(e,t)=>{const{components:i,topic:n,world:o,linking:s}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},a=i.get(Li),[l,d]=Qr({components:i,topic:n,actions:r}),u=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${p=>{const f=p.target;f instanceof rt&&(l.queryString=f.value)}}></bim-text-input> 
    `;let c,h;if(s){l.selectableRows=!0,d({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const p=l.data.filter(y=>{const{Guid:_}=y.data;return typeof _!="string"?!1:n.viewpoints.has(_)}).map(y=>y.data);l.selection=new Set(p);const f=()=>{const y=[...l.selection].map(({Guid:_})=>typeof _!="string"?null:a.list.has(_)?_:null).map(_=>_);n.viewpoints.clear(),n.viewpoints.add(...y),t({linking:!1})},w=()=>{t({linking:!1})},v=`btn-${Z.newRandomId()}`,b=`btn-${Z.newRandomId()}`;c=m`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${v}:hover {
            background-color: #329936;
          }  

          #${b} {
            background-color: transparent;
          }

          #${b}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${u()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${b} @click=${w} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${v} @click=${f} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{l.selectableRows=!1,d({topic:n,actions:r});const p=()=>{if(!(n&&o&&r.add&&!s))return;const b=a.create(o);n.viewpoints.add(b.guid)},f=()=>{t({linking:!0})},w=m`<bim-button style="flex: 0" @click=${p} .disabled=${!o} icon="mi:add"></bim-button>`,v=m`<bim-button style="flex: 0" @click=${f} icon="tabler:link"></bim-button>`;h=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${u()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          ${r.add?w:null}
          ${r.link?v:null}
        </div>
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${h}
      ${c}
      ${l}
    </div> 
  `},xh=e=>z.create(wh,e),$h=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:xh},Symbol.toStringTag,{value:"Module"})),hi={...mh,...gh,..._h,...$h};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ch={attribute:!0,type:String,converter:vi,reflect:!1,hasChanged:Nn},Ah=(e=Ch,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,e)},init(a){return a!==void 0&&this.P(r,void 0,e),a}}}if(n==="setter"){const{name:r}=i;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,e)}}throw Error("Unsupported decorator location: "+n)};function Y(e){return(t,i)=>typeof i=="object"?Ah(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Eh(e){return Y({...e,state:!0,attribute:!1})}class Sh extends _a{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new wa(.5,.5),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof Element&&i.element.parentNode!==null&&i.element.parentNode.removeChild(i.element)})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new Sn;new Pi;new Pi;new Sn;new Sn;class kh{constructor(t,i){this._group=new Zn,this._frustum=new da,this._frustumMat=new Pi,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new ua({color:"#2e3338"}),this.numbers=new Zn,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=i;const n=this.newGrid(-1),o=this.newGrid(-2);this.grids={main:n,secondary:o},this._group.add(o,n,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:i}=this.grids;t.removeFromParent(),i.removeFromParent(),t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:i}=this._frustum,n=i[0].constant*-i[0].normal.x,o=i[1].constant*-i[1].normal.x,s=i[2].constant*-i[2].normal.y,r=i[3].constant*-i[3].normal.y,a=Math.abs(n-o),l=Math.abs(r-s),{clientWidth:d,clientHeight:u}=this._container,c=Math.max(d,u),h=Math.max(a,l)/c,p=Math.ceil(Math.log10(a/this.scaleX)),f=Math.ceil(Math.log10(l/this.scaleY)),w=10**(p-2)*this.scaleX,v=10**(f-2)*this.scaleY,b=w*this.gridsFactor,y=v*this.gridsFactor,_=Math.ceil(l/y),x=Math.ceil(a/b),A=Math.ceil(l/v),C=Math.ceil(a/w),I=w*Math.ceil(o/w),M=v*Math.ceil(s/v),S=b*Math.ceil(o/b),E=y*Math.ceil(s/y),B=[...this.numbers.children];for(const U of B)U.removeFromParent();this.numbers.children=[];const q=[],W=9*h,$=1e4,R=S+this._offsetX,V=Math.round(Math.abs(R/this.scaleX)*$)/$,tt=(x-1)*b,et=Math.round(Math.abs((R+tt)/this.scaleX)*$)/$,dt=Math.max(V,et).toString().length*W;let $e=Math.ceil(dt/b)*b;for(let U=0;U<x;U++){let D=S+U*b;q.push(D,r,0,D,s,0),D=Math.round(D*$)/$,$e=Math.round($e*$)/$;const Ce=D%$e;if(!(b<1||y<1)&&Math.abs(Ce)>.01)continue;const ai=this.newNumber((D+this._offsetX)/this.scaleX),Ki=12*h;ai.position.set(D,s+Ki,0)}for(let U=0;U<_;U++){const D=E+U*y;q.push(o,D,0,n,D,0);const Ce=this.newNumber(D/this.scaleY);let ai=12;Ce.element.textContent&&(ai+=4*Ce.element.textContent.length);const Ki=ai*h;Ce.position.set(o+Ki,D,0)}const Zi=[];for(let U=0;U<C;U++){const D=I+U*w;Zi.push(D,r,0,D,s,0)}for(let U=0;U<A;U++){const D=M+U*v;Zi.push(o,D,0,n,D,0)}const sa=new Kn(new Float32Array(q),3),ra=new Kn(new Float32Array(Zi),3),{main:aa,secondary:la}=this.grids;aa.geometry.setAttribute("position",sa),la.geometry.setAttribute("position",ra)}newNumber(t){const i=document.createElement("bim-label");i.textContent=String(Math.round(t*100)/100);const n=new Sh(i);return this.numbers.add(n),n}newGrid(t){const i=new ha,n=new pa(i,this.material);return n.frustumCulled=!1,n.renderOrder=t,n}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let i=0;i<t.length;i++){const n=t[i];if(Number.isNaN(n))return!1}return!0}}var Th=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,si=(e,t,i,n)=>{for(var o=Oh(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Th(t,i,o),o};const Zr=class extends k{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const i=Number(t.replace("#","0x"));Number.isNaN(i)||this._grid.material.color.setHex(i)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(Ge).create();this._world=i,i.scene=new kn(t),i.scene.setup(),i.renderer=new ca(t,this);const n=new Ko(t);i.camera=n;const o=new kh(n.threeOrtho,this);this._grid=o,i.scene.three.add(o.get()),n.controls.addEventListener("update",()=>o.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),n.set("Plan"),await n.controls.setLookAt(0,0,100,0,0,0),await n.projection.set("Orthographic"),n.controls.dollySpeed=3,n.controls.draggingSmoothTime=.085,n.controls.maxZoom=1e3,n.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return m`<slot></slot>`}};Zr.styles=O`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let ri=Zr;si([Y({type:String,attribute:"grid-color",reflect:!0})],ri.prototype,"gridColor");si([Y({type:Number,attribute:"grid-scale-x",reflect:!0})],ri.prototype,"gridScaleX");si([Y({type:Number,attribute:"grid-scale-y",reflect:!0})],ri.prototype,"gridScaleY");si([Y({type:Number,attribute:"grid-offset-x",reflect:!0})],ri.prototype,"gridOffsetX");si([Y({type:Number,attribute:"grid-offset-y",reflect:!0})],ri.prototype,"gridOffsetY");var Ih=Object.defineProperty,Mt=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Ih(t,i,o),o};const Kr=class extends k{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new Pi,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
      ${this._epsilon(t[0])},
      ${this._epsilon(-t[1])},
      ${this._epsilon(t[2])},
      ${this._epsilon(t[3])},
      ${this._epsilon(t[4])},
      ${this._epsilon(-t[5])},
      ${this._epsilon(t[6])},
      ${this._epsilon(t[7])},
      ${this._epsilon(t[8])},
      ${this._epsilon(-t[9])},
      ${this._epsilon(t[10])},
      ${this._epsilon(t[11])},
      ${this._epsilon(t[12])},
      ${this._epsilon(-t[13])},
      ${this._epsilon(t[14])},
      ${this._epsilon(t[15])})
    `}render(){const t=this.size??this._defaults.size;return m`
      <style>
        .face,
        .cube {
          width: ${t}px;
          height: ${t}px;
          transform: translateZ(-300px) ${this._cssMatrix3D};
        }

        .face-right {
          translate: ${t/2}px 0 0;
        }

        .face-left {
          translate: ${-t/2}px 0 0;
        }

        .face-top {
          translate: 0 ${t/2}px 0;
        }

        .face-bottom {
          translate: 0 ${-t/2}px 0;
        }

        .face-front {
          translate: 0 0 ${t/2}px;
        }

        .face-back {
          translate: 0 0 ${-t/2}px;
        }
      </style>
      <div class="parent">
        <div class="cube">
          <div
            class="face x-direction face-right"
            @click=${()=>this.dispatchEvent(this._onRightClick)}
          >
            ${this.rightText}
          </div>
          <div
            class="face x-direction face-left"
            @click=${()=>this.dispatchEvent(this._onLeftClick)}
          >
            ${this.leftText}
          </div>
          <div
            class="face y-direction face-top"
            @click=${()=>this.dispatchEvent(this._onTopClick)}
          >
            ${this.topText}
          </div>
          <div
            class="face y-direction face-bottom"
            @click=${()=>this.dispatchEvent(this._onBottomClick)}
          >
            ${this.bottomText}
          </div>
          <div
            class="face z-direction face-front"
            @click=${()=>this.dispatchEvent(this._onFrontClick)}
          >
            ${this.frontText}
          </div>
          <div
            class="face z-direction face-back"
            @click=${()=>this.dispatchEvent(this._onBackClick)}
          >
            ${this.backText}
          </div>
        </div>
      </div>
    `}};Kr.styles=O`
    :host {
      position: absolute;
      z-index: 999;
      bottom: 1rem;
      right: 1rem;
    }

    .parent {
      perspective: 400px;
    }

    .cube {
      position: relative;
      transform-style: preserve-3d;
    }

    .face {
      position: absolute;
      display: flex;
      justify-content: center;
      user-select: none;
      align-items: center;
      cursor: pointer;
      text-align: center;
      transition: all 0.2s;
      color: var(--bim-view-cube--c, white);
      font-size: var(--bim-view-cube--fz, --bim-ui_size-2xl);
    }

    .x-direction {
      // background-color: var(--bim-view-cube_x--bgc, #c93830DD);
      background-color: var(--bim-view-cube_x--bgc, #01a6bcde);
    }

    .x-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .y-direction {
      // background-color: var(--bim-view-cube_y--bgc, #54ff19DD);
      background-color: var(--bim-view-cube_y--bgc, #8d0ec8de);
    }

    .y-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .z-direction {
      // background-color: var(--bim-view-cube_z--bgc, #3041c9DD);
      background-color: var(--bim-view-cube_z--bgc, #2718afde);
    }

    .z-direction:hover {
      background-color: var(--bim-ui_accent-base, white);
    }

    .face-front {
      transform: rotateX(180deg);
    }

    .face-back {
      transform: rotateZ(180deg);
    }

    .face-top {
      transform: rotateX(90deg);
    }

    .face-bottom {
      transform: rotateX(270deg);
    }

    .face-right {
      transform: rotateY(-270deg) rotateX(180deg);
    }

    .face-left {
      transform: rotateY(-90deg) rotateX(180deg);
    }
  `;let Pt=Kr;Mt([Y({type:Number,reflect:!0})],Pt.prototype,"size");Mt([Y({type:String,attribute:"right-text",reflect:!0})],Pt.prototype,"rightText");Mt([Y({type:String,attribute:"left-text",reflect:!0})],Pt.prototype,"leftText");Mt([Y({type:String,attribute:"top-text",reflect:!0})],Pt.prototype,"topText");Mt([Y({type:String,attribute:"bottom-text",reflect:!0})],Pt.prototype,"bottomText");Mt([Y({type:String,attribute:"front-text",reflect:!0})],Pt.prototype,"frontText");Mt([Y({type:String,attribute:"back-text",reflect:!0})],Pt.prototype,"backText");Mt([Eh()],Pt.prototype,"_cssMatrix3D");var Nh=Object.defineProperty,Mh=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Nh(t,i,o),o};const ta=class extends k{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=En()}set components(t){var i;if(this._components=t,this.components){const n=this.components.get(Ge);this.world=n.create(),this.world.name=this.name}else(i=this.world)==null||i.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const i=new kn(this.components);this.world.scene=i,i.setup(),i.three.background=null;const n=new P(this.components,t);this.world.renderer=n;const{postproduction:o}=n,s=new Ko(this.components);this.world.camera=s;const r=this.components.get(Tn).create(this.world);r.material.uniforms.uColor.value=new pe(4342338),r.material.uniforms.uSize1.value=2,r.material.uniforms.uSize2.value=8,o.enabled=!0,o.customEffects.excludedMeshes.push(r.three),o.setPasses({custom:!0,ao:!0,gamma:!0}),o.customEffects.lineColor=1513756}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return m` <bim-viewport ${Ku(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};ta.styles=O``;let Ph=ta;Mh([Y({type:String,reflect:!0})],Ph.prototype,"name");Ta.init();const Xn=document.createElement("bim-viewport"),at=new Oa,Lh=at.get(Ge),Xt=Lh.create(),ea=new kn(at);ea.setup();Xt.scene=ea;const ia=new Ia(at,Xn);Xt.renderer=ia;const Jn=new Na(at);Xt.camera=Jn;Jn.controls.setLookAt(10,5.5,5,-4,-1,-6.5);Xn.addEventListener("resize",()=>{ia.resize(),Jn.updateAspect()});at.init();const Rh=at.get(Tn);Rh.create(Xt);const na=at.get(ts);await na.setup();const jh=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),zh=await jh.arrayBuffer(),Dh=new Uint8Array(zh),Fh=await na.load(Dh);Xt.scene.three.add(Fh);const Qi={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},te=at.get(qe);te.setup({users:new Set(Object.keys(Qi)),labels:new Set(["Architecture","Structure","MEP"])});const Hh=at.get(Li);te.list.onItemSet.add(({value:e})=>{const t=Hh.create(Xt);e.viewpoints.add(t.guid)});const[Ni,Bh]=ah.topicsList({components:at,dataStyles:{users:Qi}});Ni.selectableRows=!0;const[Uh,Vh]=uh.topic({components:at,styles:{users:Qi}}),Mi=Ye.create(()=>ut`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${Uh}
     </bim-panel> 
    </dialog>
  `);document.body.append(Mi);const Wh=Ye.create(()=>ut`
    <bim-button style="flex: 0" @click=${()=>{Mi.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);Vh({onCancel:()=>{Mi.close()},onSubmit:()=>{Mi.close()}});const[Gh,oa]=Ye.create(e=>{const{components:t,topic:i,world:n,actions:o,styles:s}=e;let r,a;if(i){const[l]=hi.topicInformation({components:t,topic:i,actions:o==null?void 0:o.information,styles:s}),[d]=hi.topicViewpoints({components:t,topic:i,world:n,actions:o==null?void 0:o.viewpoints}),[u]=hi.topicRelations({components:t,topic:i,actions:o==null?void 0:o.relatedTopics}),[c]=hi.topicComments({topic:i,actions:o==null?void 0:o.comments,styles:s==null?void 0:s.users}),h=()=>{window.alert(`An email will be sent to ${i.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=ut`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${l}
        </bim-panel-section>
        <bim-panel-section label="Comments" icon="majesticons:comment-line">
          ${c}
        </bim-panel-section>
        <bim-panel-section label="Viewpoints" icon="tabler:camera">
          ${d}
        </bim-panel-section>
        <bim-panel-section label="Related Topics" icon="tabler:link">
          ${u}
        </bim-panel-section>
        <!-- This is a custom section where you can add any functionality you like -->
        <bim-panel-section label="Communication" icon="tabler:link">
          ${i.assignedTo?ut`
                <bim-button @click=${h} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `:ut`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `}
        </bim-panel-section>
      `}else a=ut`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${i?null:ut`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return ut`
      <bim-panel>
        ${a}
        ${r}
      </bim-panel> 
    `},{components:at,world:Xt,styles:{users:Qi}});te.list.onItemUpdated.add(()=>oa());Bh({onTopicEnter:e=>{oa({topic:e})}});const qh=Ye.create(()=>ut`<bim-button style="flex: 0" @click=${async()=>{const t=[...Ni.selection].map(({Guid:r})=>r&&typeof r=="string"?te.list.get(r):null).filter(r=>r),i=t.length>0?t:[...te.list.values()];if(i.length===0)return;const n=await te.export(i),o=new File([n],"topics.bcf"),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=o.name,s.click(),URL.revokeObjectURL(s.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),Yh=Ye.create(()=>ut`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${t=>{const i=t.target;Ni.queryString=i.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${Wh}
            ${qh}
          </div> 
        </div> 
        ${Ni}
      </bim-panel-section>
    </bim-panel>
  `),Qn=document.createElement("bim-grid");Qn.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,elements:{bcfPanel:Yh,viewport:Xn,customTopicPanel:Gh}}};Qn.layout="main";document.body.append(Qn);
