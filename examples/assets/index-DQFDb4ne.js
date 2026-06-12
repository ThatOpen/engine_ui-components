import{a as F,b as S,c as v,i as V,r as gt,e as ti,D as $n,n as Bt,A as ot,d as Mi,f as th,g as eh,h as te,o as le}from"./when-D9oPOCfO.js";var ih=Object.defineProperty,sh=(e,t,i)=>t in e?ih(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,E=(e,t,i)=>(sh(e,typeof t!="symbol"?t+"":t,i),i);/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.1
*/const za=Object.freeze({left:0,top:0,width:16,height:16}),zs=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),qi=Object.freeze({...za,...zs}),In=Object.freeze({...qi,body:"",hidden:!1}),nh=Object.freeze({width:null,height:null}),La=Object.freeze({...nh,...zs});function rh(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(i===""){const n=parseInt(e);return isNaN(n)?0:s(n)}else if(i!==e){let n=0;switch(i){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(e.slice(0,e.length-i.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}const oh=/[\s,]+/;function ah(e,t){t.split(oh).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Ra={...La,preserveAspectRatio:""};function $r(e){const t={...Ra},i=(s,n)=>e.getAttribute(s)||n;return t.width=i("width",null),t.height=i("height",null),t.rotate=rh(i("rotate","")),ah(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function lh(e,t){for(const i in Ra)if(e[i]!==t[i])return!0;return!1}const $a=/^[a-z0-9]+(-[a-z0-9]+)*$/,Yi=(e,t,i,s="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!Ms(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!Ms(a)?null:a}if(i&&s===""){const a={provider:s,prefix:"",name:r};return t&&!Ms(a,i)?null:a}return null},Ms=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1;function ch(e,t){const i=e.icons,s=e.aliases||Object.create(null),n=Object.create(null);function r(o){if(i[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=s[o]&&s[o].parent,l=a&&r(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(i).concat(Object.keys(s)).forEach(r),n}function hh(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const s=((e.rotate||0)+(t.rotate||0))%4;return s&&(i.rotate=s),i}function Ir(e,t){const i=hh(e,t);for(const s in In)s in zs?s in e&&!(s in i)&&(i[s]=zs[s]):s in t?i[s]=t[s]:s in e&&(i[s]=e[s]);return i}function dh(e,t,i){const s=e.icons,n=e.aliases||Object.create(null);let r={};function o(a){r=Ir(s[a]||n[a],r)}return o(t),i.forEach(o),Ir(e,r)}function Ia(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),i.push(n)});const s=ch(e);for(const n in s){const r=s[n];r&&(t(n,dh(e,n,r)),i.push(n))}return i}const uh={provider:"",aliases:{},not_found:{},...za};function gn(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Ba(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!gn(e,uh))return null;const i=t.icons;for(const n in i){const r=i[n];if(!n||typeof r.body!="string"||!gn(r,In))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],o=r.parent;if(!n||typeof o!="string"||!i[o]&&!s[o]||!gn(r,In))return null}return t}const Ls=Object.create(null);function ph(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function ie(e,t){const i=Ls[e]||(Ls[e]=Object.create(null));return i[t]||(i[t]=ph(e,t))}function Fa(e,t){return Ba(t)?Ia(t,(i,s)=>{s?e.icons[i]=s:e.missing.add(i)}):[]}function fh(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function gh(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Ls)).forEach(s=>{(typeof s=="string"&&typeof t=="string"?[t]:Object.keys(Ls[s]||{})).forEach(n=>{const r=ie(s,n);i=i.concat(Object.keys(r.icons).map(o=>(s!==""?"@"+s+":":"")+n+":"+o))})}),i}let $i=!1;function Va(e){return typeof e=="boolean"&&($i=e),$i}function Ii(e){const t=typeof e=="string"?Yi(e,!0,$i):e;if(t){const i=ie(t.provider,t.prefix),s=t.name;return i.icons[s]||(i.missing.has(s)?null:void 0)}}function ja(e,t){const i=Yi(e,!0,$i);if(!i)return!1;const s=ie(i.provider,i.prefix);return t?fh(s,i.name,t):(s.missing.add(i.name),!0)}function Br(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),$i&&!t&&!e.prefix){let n=!1;return Ba(e)&&(e.prefix="",Ia(e,(r,o)=>{ja(r,o)&&(n=!0)})),n}const i=e.prefix;if(!Ms({prefix:i,name:"a"}))return!1;const s=ie(t,i);return!!Fa(s,e)}function bh(e){return!!Ii(e)}function mh(e){const t=Ii(e);return t&&{...qi,...t}}function Ha(e,t){e.forEach(i=>{const s=i.loaderCallbacks;s&&(i.loaderCallbacks=s.filter(n=>n.id!==t))})}function vh(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const s=e.provider,n=e.prefix;t.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(e.icons[c])o.loaded.push({provider:s,prefix:n,name:c});else if(e.missing.has(c))o.missing.push({provider:s,prefix:n,name:c});else return i=!0,!0;return!1}),o.pending.length!==a&&(i||Ha([e],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let yh=0;function xh(e,t,i){const s=yh++,n=Ha.bind(null,i,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:e,abort:n};return i.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}function _h(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return e.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,o=n.prefix,a=n.name,l=i[r]||(i[r]=Object.create(null)),c=l[o]||(l[o]=ie(r,o));let h;a in c.icons?h=t.loaded:o===""||c.missing.has(a)?h=t.missing:h=t.pending;const d={provider:r,prefix:o,name:a};h.push(d)}),t}const Bn=Object.create(null);function Fr(e,t){Bn[e]=t}function Fn(e){return Bn[e]||Bn[""]}function wh(e,t=!0,i=!1){const s=[];return e.forEach(n=>{const r=typeof n=="string"?Yi(n,t,i):n;r&&s.push(r)}),s}function dr(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Xs=Object.create(null),rs=["https://api.simplesvg.com","https://api.unisvg.com"],Vn=[];for(;rs.length>0;)rs.length===1||Math.random()>.5?Vn.push(rs.shift()):Vn.push(rs.pop());Xs[""]=dr({resources:["https://api.iconify.design"].concat(Vn)});function Vr(e,t){const i=dr(t);return i===null?!1:(Xs[e]=i,!0)}function Ks(e){return Xs[e]}function kh(){return Object.keys(Xs)}const Sh={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Mh(e,t,i,s){const n=e.resources.length,r=e.random?Math.floor(Math.random()*n):e.index;let o;if(e.random){let w=e.resources.slice(0);for(o=[];w.length>1;){const M=Math.floor(Math.random()*w.length);o.push(w[M]),w=w.slice(0,M).concat(w.slice(M+1))}o=o.concat(w)}else o=e.resources.slice(r).concat(e.resources.slice(0,r));const a=Date.now();let l="pending",c=0,h,d=null,u=[],p=[];typeof s=="function"&&p.push(s);function g(){d&&(clearTimeout(d),d=null)}function f(){l==="pending"&&(l="aborted"),g(),u.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),u=[]}function b(w,M){M&&(p=[]),typeof w=="function"&&p.push(w)}function m(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:u.length,subscribe:b,abort:f}}function y(){l="failed",p.forEach(w=>{w(void 0,h)})}function x(){u.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),u=[]}function _(w,M,C){const A=M!=="success";switch(u=u.filter(D=>D!==w),l){case"pending":break;case"failed":if(A||!e.dataAfterTimeout)return;break;default:return}if(M==="abort"){h=C,y();return}if(A){h=C,u.length||(o.length?k():y());return}if(g(),x(),!e.random){const D=e.resources.indexOf(w.resource);D!==-1&&D!==e.index&&(e.index=D)}l="completed",p.forEach(D=>{D(C)})}function k(){if(l!=="pending")return;g();const w=o.shift();if(w===void 0){if(u.length){d=setTimeout(()=>{g(),l==="pending"&&(x(),y())},e.timeout);return}y();return}const M={status:"pending",resource:w,callback:(C,A)=>{_(M,C,A)}};u.push(M),c++,d=setTimeout(k,e.rotate),i(w,t,M.callback)}return setTimeout(k),m}function Na(e){const t={...Sh,...e};let i=[];function s(){i=i.filter(o=>o().status==="pending")}function n(o,a,l){const c=Mh(t,o,a,(h,d)=>{s(),l&&l(h,d)});return i.push(c),c}function r(o){return i.find(a=>o(a))||null}return{query:n,find:r,setIndex:o=>{t.index=o},getIndex:()=>t.index,cleanup:s}}function jr(){}const bn=Object.create(null);function Ch(e){if(!bn[e]){const t=Ks(e);if(!t)return;const i=Na(t),s={config:t,redundancy:i};bn[e]=s}return bn[e]}function Wa(e,t,i){let s,n;if(typeof e=="string"){const r=Fn(e);if(!r)return i(void 0,424),jr;n=r.send;const o=Ch(e);o&&(s=o.redundancy)}else{const r=dr(e);if(r){s=Na(r);const o=e.resources?e.resources[0]:"",a=Fn(o);a&&(n=a.send)}}return!s||!n?(i(void 0,424),jr):s.query(t,n,i)().abort}function Hr(){}function Eh(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,vh(e)}))}function Dh(e){const t=[],i=[];return e.forEach(s=>{(s.match($a)?t:i).push(s)}),{valid:t,invalid:i}}function pi(e,t,i){function s(){const n=e.pendingIcons;t.forEach(r=>{n&&n.delete(r),e.icons[r]||e.missing.add(r)})}if(i&&typeof i=="object")try{if(!Fa(e,i).length){s();return}}catch(n){console.error(n)}s(),Eh(e)}function Nr(e,t){e instanceof Promise?e.then(i=>{t(i)}).catch(()=>{t(null)}):t(e)}function Ah(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:s}=e,n=e.iconsToLoad;if(delete e.iconsToLoad,!n||!n.length)return;const r=e.loadIcon;if(e.loadIcons&&(n.length>1||!r)){Nr(e.loadIcons(n,s,i),c=>{pi(e,n,c)});return}if(r){n.forEach(c=>{const h=r(c,s,i);Nr(h,d=>{const u=d?{prefix:s,icons:{[c]:d}}:null;pi(e,[c],u)})});return}const{valid:o,invalid:a}=Dh(n);if(a.length&&pi(e,a,null),!o.length)return;const l=s.match($a)?Fn(i):null;if(!l){pi(e,o,null);return}l.prepare(i,s,o).forEach(c=>{Wa(i,c,h=>{pi(e,c.icons,h)})})}))}const ur=(e,t)=>{const i=wh(e,!0,Va()),s=_h(i);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Hr)}),()=>{l=!1}}const n=Object.create(null),r=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:h}=l;if(h===a&&c===o)return;o=c,a=h,r.push(ie(c,h));const d=n[c]||(n[c]=Object.create(null));d[h]||(d[h]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:h,name:d}=l,u=ie(c,h),p=u.pendingIcons||(u.pendingIcons=new Set);p.has(d)||(p.add(d),n[c][h].push(d))}),r.forEach(l=>{const c=n[l.provider][l.prefix];c.length&&Ah(l,c)}),t?xh(t,s,r):Hr},Ph=e=>new Promise((t,i)=>{const s=typeof e=="string"?Yi(e,!0):e;if(!s){i(e);return}ur([s||e],n=>{if(n.length&&s){const r=Ii(s);if(r){t({...qi,...r});return}}i(e)})});function Wr(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function Oh(e,t){if(typeof e=="object")return{data:Wr(e),value:e};if(typeof e!="string")return{value:e};if(e.includes("{")){const r=Wr(e);if(r)return{data:r,value:e}}const i=Yi(e,!0,!0);if(!i)return{value:e};const s=Ii(i);if(s!==void 0||!i.prefix)return{value:e,name:i,data:s};const n=ur([i],()=>t(e,i,Ii(i)));return{value:e,name:i,loading:n}}let Ua=!1;try{Ua=navigator.vendor.indexOf("Apple")===0}catch{}function Th(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Ua||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const zh=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Lh=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function jn(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const s=e.split(zh);if(s===null||!s.length)return e;const n=[];let r=s.shift(),o=Lh.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?n.push(r):n.push(Math.ceil(a*t*i)/i)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");o=!o}}function Rh(e,t="defs"){let i="";const s=e.indexOf("<"+t);for(;s>=0;){const n=e.indexOf(">",s),r=e.indexOf("</"+t);if(n===-1||r===-1)break;const o=e.indexOf(">",r);if(o===-1)break;i+=e.slice(n+1,r).trim(),e=e.slice(0,s).trim()+e.slice(o+1)}return{defs:i,content:e}}function $h(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ih(e,t,i){const s=Rh(e);return $h(s.defs,t+s.content+i)}const Bh=e=>e==="unset"||e==="undefined"||e==="none";function qa(e,t){const i={...qi,...e},s={...La,...t},n={left:i.left,top:i.top,width:i.width,height:i.height};let r=i.body;[i,s].forEach(f=>{const b=[],m=f.hFlip,y=f.vFlip;let x=f.rotate;m?y?x+=2:(b.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),b.push("scale(-1 1)"),n.top=n.left=0):y&&(b.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),b.push("scale(1 -1)"),n.top=n.left=0);let _;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:_=n.height/2+n.top,b.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:b.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:_=n.width/2+n.left,b.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}x%2===1&&(n.left!==n.top&&(_=n.left,n.left=n.top,n.top=_),n.width!==n.height&&(_=n.width,n.width=n.height,n.height=_)),b.length&&(r=Ih(r,'<g transform="'+b.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,l=n.width,c=n.height;let h,d;o===null?(d=a===null?"1em":a==="auto"?c:a,h=jn(d,l/c)):(h=o==="auto"?l:o,d=a===null?jn(h,c/l):a==="auto"?c:a);const u={},p=(f,b)=>{Bh(b)||(u[f]=b.toString())};p("width",h),p("height",d);const g=[n.left,n.top,l,c];return u.viewBox=g.join(" "),{attributes:u,viewBox:g,body:r}}function pr(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)i+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function Fh(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Vh(e){return"data:image/svg+xml,"+Fh(e)}function Ya(e){return'url("'+Vh(e)+'")'}const jh=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Rs=jh();function Hh(e){Rs=e}function Nh(){return Rs}function Wh(e,t){const i=Ks(e);if(!i)return 0;let s;if(!i.maxURL)s=0;else{let n=0;i.resources.forEach(o=>{n=Math.max(n,o.length)});const r=t+".json?icons=";s=i.maxURL-n-i.path.length-r.length}return s}function Uh(e){return e===404}const qh=(e,t,i)=>{const s=[],n=Wh(e,t),r="icons";let o={type:r,provider:e,prefix:t,icons:[]},a=0;return i.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(o),o={type:r,provider:e,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function Yh(e){if(typeof e=="string"){const t=Ks(e);if(t)return t.path}return"/"}const Xh=(e,t,i)=>{if(!Rs){i("abort",424);return}let s=Yh(t.provider);switch(t.type){case"icons":{const r=t.prefix,o=t.icons.join(","),a=new URLSearchParams({icons:o});s+=r+".json?"+a.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:i("abort",400);return}let n=503;Rs(e+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{i(Uh(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?i("abort",r):i("next",n)});return}setTimeout(()=>{i("success",r)})}).catch(()=>{i("next",n)})},Kh={prepare:qh,send:Xh};function Gh(e,t,i){ie(i||"",t).loadIcons=e}function Qh(e,t,i){ie(i||"",t).loadIcon=e}const mn="data-style";let Xa="";function Jh(e){Xa=e}function Ur(e,t){let i=Array.from(e.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(mn));i||(i=document.createElement("style"),i.setAttribute(mn,mn),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block;margin:auto}"+Xa}function Ka(){Fr("",Kh),Va(!0);let e;try{e=window}catch{}if(e){if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!Br(s))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const s="IconifyProviders["+i+"] is invalid.";try{const n=t[i];if(typeof n!="object"||!n||n.resources===void 0)continue;Vr(i,n)||console.error(s)}catch{console.error(s)}}}}return{iconLoaded:bh,getIcon:mh,listIcons:gh,addIcon:ja,addCollection:Br,calculateSize:jn,buildIcon:qa,iconToHTML:pr,svgToURL:Ya,loadIcons:ur,loadIcon:Ph,addAPIProvider:Vr,setCustomIconLoader:Qh,setCustomIconsLoader:Gh,appendCustomStyle:Jh,_api:{getAPIConfig:Ks,setAPIModule:Fr,sendAPIQuery:Wa,setFetch:Hh,getFetch:Nh,listAPIProviders:kh}}}const Hn={"background-color":"currentColor"},Ga={"background-color":"transparent"},qr={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Yr={"-webkit-mask":Hn,mask:Hn,background:Ga};for(const e in Yr){const t=Yr[e];for(const i in qr)t[e+"-"+i]=qr[i]}function Xr(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Zh(e,t,i){const s=document.createElement("span");let n=e.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=e.attributes,o=pr(n,{...r,width:t.width+"",height:t.height+""}),a=Ya(o),l=s.style,c={"--svg":a,width:Xr(r.width),height:Xr(r.height),...i?Hn:Ga};for(const h in c)l.setProperty(h,c[h]);return s}let Ci;function td(){try{Ci=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Ci=null}}function ed(e){return Ci===void 0&&td(),Ci?Ci.createHTML(e):e}function id(e){const t=document.createElement("span"),i=e.attributes;let s="";i.width||(s="width: inherit;"),i.height||(s+="height: inherit;"),s&&(i.style=s);const n=pr(e.body,i);return t.innerHTML=ed(n),t.firstChild}function Nn(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function Kr(e,t){const i=t.icon.data,s=t.customisations,n=qa(i,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=id(n);break;default:o=Zh(n,{...qi,...i},r==="mask")}const a=Nn(e);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):e.replaceChild(o,a):e.appendChild(o)}function Gr(e,t,i){const s=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:s}}function sd(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const s=t.get(e);if(s)return s;const n=["icon","mode","inline","noobserver","width","height","rotate","flip"],r=class extends i{constructor(){super(),E(this,"_shadowRoot"),E(this,"_initialised",!1),E(this,"_state"),E(this,"_checkQueued",!1),E(this,"_connected",!1),E(this,"_observer",null),E(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=this.hasAttribute("inline");Ur(a,l),this._state=Gr({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=this.hasAttribute("inline"),c=this._state;l!==c.inline&&(c.inline=l,Ur(this._shadowRoot,l));break}case"noobserver":{this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return this.hasAttribute("inline")}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}Kr(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const c=this.getAttribute("mode"),h=$r(this);(a.attrMode!==c||lh(a.customisations,h)||!Nn(this._shadowRoot))&&this._renderIcon(a.icon,h,c)}_iconChanged(a){const l=Oh(a,(c,h,d)=>{const u=this._state;if(u.rendered||this.getAttribute("icon")!==c)return;const p={value:c,name:h,data:d};p.data?this._gotIconData(p):u.icon=p});l.data?this._gotIconData(l):this._state=Gr(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=Nn(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,$r(this),this.getAttribute("mode"))}_renderIcon(a,l,c){const h=Th(a.data.body,c),d=this._state.inline;Kr(this._shadowRoot,this._state={rendered:!0,icon:a,inline:d,customisations:l,attrMode:c,renderedMode:h})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(a=>{const l=a.some(c=>c.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=Ka();for(const a in o)r[a]=r.prototype[a]=o[a];return t.define(e,r),r}const nd=sd()||Ka(),{iconLoaded:Hv,getIcon:Nv,listIcons:Wv,addIcon:Uv,addCollection:rd,calculateSize:qv,buildIcon:Yv,iconToHTML:Xv,svgToURL:Kv,loadIcons:od,loadIcon:Gv,setCustomIconLoader:Qv,setCustomIconsLoader:Jv,addAPIProvider:Zv,_api:ty}=nd,ad=F`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      var(--bim-ui_bg-contrast-60)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-contrast-40));
  }
`,ld=F`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: #19191E; /* app background */
    --bim-ui_gray-1: #262629; /* card / elevated surface */
    --bim-ui_gray-2: #3C3C41; /* button bg / component surface */
    --bim-ui_gray-3: #46464B; /* button hover */
    --bim-ui_gray-4: #5F5F64;
    --bim-ui_gray-5: #76767B;
    --bim-ui_gray-6: #909095;
    --bim-ui_gray-7: #A7A7AB; /* icon / secondary text */
    --bim-ui_gray-8: #BEBEC2;
    --bim-ui_gray-9: #D7D7DA;
    --bim-ui_gray-10: #F0F0F0; /* near-white text / light bg */

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Status Colors */
    --bim-ui_danger-base: #f04f4f;
    --bim-ui_danger-contrast: var(--bim-ui_gray-10);
    --bim-ui_warning-base: #f0a030;
    --bim-ui_warning-contrast: var(--bim-ui_gray-0);
    --bim-ui_success-base: #4caf72;
    --bim-ui_success-contrast: var(--bim-ui_gray-0);
    --bim-ui_info-base: #4a90d9;
    --bim-ui_info-contrast: var(--bim-ui_gray-10);

    /* Sizes */
    --bim-ui_size-4xs: 0.0625rem; /* 1px */
    --bim-ui_size-3xs: 0.1875rem; /* 3px */
    --bim-ui_size-2xs: 0.3125rem; /* 5px */
    --bim-ui_size-xs: 0.4375rem; /* 7px */
    --bim-ui_size-sm: 0.5625rem; /* 9px */
    --bim-ui_size-base: 0.6875rem; /* 11px */
    --bim-ui_size-lg: 0.8125rem; /* 13px */
    --bim-ui_size-xl: 0.9375rem; /* 15px */
    --bim-ui_size-2xl: 1.0625rem; /* 17px */
    --bim-ui_size-3xl: 1.1875rem; /* 19px */
    --bim-ui_size-4xl: 1.3125rem; /* 21px */
    --bim-ui_size-5xl: 1.4375rem; /* 23px */
    --bim-ui_size-6xl: 1.5625rem; /* 25px */
    --bim-ui_size-7xl: 1.6875rem; /* 27px */
    --bim-ui_size-8xl: 1.8125rem; /* 29px */
    --bim-ui_size-9xl: 1.9375rem; /* 31px */
    --bim-ui_size-10xl: 2.0625rem; /* 33px */
    --bim-ui_size-11xl: 2.1875rem; /* 35px */
    --bim-ui_size-12xl: 2.3125rem; /* 37px */
    --bim-ui_size-13xl: 2.4375rem; /* 39px */
    --bim-ui_size-14xl: 2.5625rem; /* 41px */
    --bim-ui_size-15xl: 2.6875rem; /* 43px */
    --bim-ui_size-16xl: 2.8125rem; /* 45px */
    --bim-ui_size-17xl: 2.9375rem; /* 47px */
    --bim-ui_size-18xl: 3.0625rem; /* 49px */
    --bim-ui_size-19xl: 3.1875rem; /* 51px */
    --bim-ui_size-20xl: 3.3125rem; /* 53px */
    --bim-ui_size-21xl: 3.4375rem; /* 55px */
    --bim-ui_size-22xl: 3.5625rem; /* 57px */
  }

  /* Background Colors */
  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: var(--bim-ui_gray-0);
      --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
      --bim-ui_bg-contrast-70: var(--bim-ui_gray-7);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
      --bim-ui_bg-contrast-90: var(--bim-ui_gray-9);
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
      --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
      --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
      --bim-ui_bg-contrast-70: var(--bim-ui_gray-3);
      --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
      --bim-ui_bg-contrast-90: var(--bim-ui_gray-1);
      --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
      --bim-ui_accent-base: #6528d7;
    }
  }

  .theme-transition-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    filter: drop-shadow(0 0 10px var(--bim-ui_bg-base));
    z-index: 9999;
  }

  .theme-transition-overlay > div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bim-ui_bg-base);
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: var(--bim-ui_gray-0);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-70: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-90: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-30: var(--bim-ui_gray-7);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-50: var(--bim-ui_gray-5);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-70: var(--bim-ui_gray-3);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-90: var(--bim-ui_gray-1);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }

  @keyframes toggleOverlay {
    0%,
    99% {
      display: block;
    }

    100% {
      display: none;
    }
  }

  @keyframes toggleThemeAnimation {
    0% {
      clip-path: circle(0% at center top);
    }
    45%,
    55% {
      clip-path: circle(150% at center center);
    }
    100% {
      clip-path: circle(0% at center bottom);
    }
  }

  [data-context-dialog]::backdrop {
    background-color: transparent;
  }
`,ye={scrollbar:ad,globalStyles:ld},Qa=class I{static set config(t){this._config={...I._config,...t}}static get config(){return I._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=ye.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static preloadIcons(t,i=!1){od(t,(s,n,r)=>{i&&(console.log("Icons loaded:",s),n.length&&console.warn("Icons missing:",n),r.length&&console.info("Icons pending:",r))})}static addIconsCollection(t,i){rd({prefix:(i==null?void 0:i.prefix)??"bim",icons:t,width:24,height:24})}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){I.init()}static init(t="",i=!0){I.addGlobalStyles(),I.defineCustomElement("bim-button",pd),I.defineCustomElement("bim-checkbox",xe),I.defineCustomElement("bim-color-input",_e),I.defineCustomElement("bim-context-menu",nu),I.defineCustomElement("bim-dropdown",St),I.defineCustomElement("bim-grid",Gi),I.defineCustomElement("bim-icon",bu),I.defineCustomElement("bim-input",Qi),I.defineCustomElement("bim-label",He),I.defineCustomElement("bim-number-input",Mt),I.defineCustomElement("bim-option",Kt),I.defineCustomElement("bim-panel",Ne),I.defineCustomElement("bim-panel-section",ci),I.defineCustomElement("bim-selector",ke),I.defineCustomElement("bim-table",Ge),I.defineCustomElement("bim-tabs",ne),I.defineCustomElement("bim-tab",vt),I.defineCustomElement("bim-table-cell",Al),I.defineCustomElement("bim-table-children",Lu),I.defineCustomElement("bim-table-group",Tl),I.defineCustomElement("bim-table-row",ts),I.defineCustomElement("bim-text-input",qu),I.defineCustomElement("bim-toolbar",vr),I.defineCustomElement("bim-toolbar-group",on),I.defineCustomElement("bim-toolbar-section",Ue),I.defineCustomElement("bim-viewport",Hl),I.defineCustomElement("bim-chart-legend",Wl),I.defineCustomElement("bim-chart",Z),I.defineCustomElement("bim-tooltip",Iv),I.defineCustomElement("bim-slider",rt),I.defineCustomElement("bim-paper-space",_t),i&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);i+=t.charAt(n)}return i}static animateOnLoad(t=""){const i=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,s=[];function n(r,o=document,a=new Set){const l=[];return Array.from(o.querySelectorAll(r)).forEach(c=>{a.has(c)||(a.add(c),l.push(c))}),Array.from(o.querySelectorAll("*")).filter(c=>c.shadowRoot).forEach(c=>{a.has(c)||(a.add(c),l.push(...n(r,c.shadowRoot,a)))}),l}requestAnimationFrame(()=>{n(t||i).forEach(o=>{const a=o;let l="auto";l=window.getComputedStyle(a).getPropertyValue("transition"),a.style.setProperty("opacity","0"),a.style.setProperty("transition","none"),requestAnimationFrame(()=>{a.style.setProperty("transition",l)}),s.push(a)});const r=()=>{s.forEach(o=>{const a=o,l=(a.getBoundingClientRect().x+a.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),c=window.getComputedStyle(a).getPropertyValue("transform"),h=400,d=200+l*1e3;window.matchMedia("(prefers-reduced-motion: reduce)").matches||(a.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:h,easing:"ease-in-out",delay:d}),setTimeout(()=>{a.style.removeProperty("opacity"),c!=="none"?a.style.setProperty("transform",c):a.style.removeProperty("transform")},d+h))})};document.readyState==="complete"?r():window.addEventListener("load",r)})}static toggleTheme(t=!0){const i=document.querySelector("html");if(!i)return;const s=()=>{i.classList.contains("bim-ui-dark")?i.classList.replace("bim-ui-dark","bim-ui-light"):i.classList.contains("bim-ui-light")?i.classList.replace("bim-ui-light","bim-ui-dark"):i.classList.add("bim-ui-light")};if(t){const n=document.createElement("div");n.classList.add("theme-transition-overlay");const r=document.createElement("div");n.appendChild(r),r.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(n),n.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),r.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{s()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(o=>{document.body.removeChild(o)})},1e3)}else s()}};Qa._config={sectionLabelOnVerticalToolbar:!1,internalComponentNameAttribute:"bim-element-name"};let Gs=Qa;class Wn extends V{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of i)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const s=i[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][i];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const s=document.createDocumentFragment();if(t.length===0)return $n(t(),s),s.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let n=i;const r=t,o=c=>(n={...n,...c},$n(r(n,o),s),n);o(i);const a=s.firstElementChild,l={getElement:c=>a.querySelector(`[data-${Gs.config.internalComponentNameAttribute}="${c}"]`),getCurrentState:()=>n,dispose:()=>{a.remove(),n={},l.updates={}},updates:{}};return[a,o,l]}}const $s=(e,t={},i=!0)=>{let s={};for(const n of e.children){const r=n,o=r.getAttribute("name")||r.getAttribute("label"),a=o?t[o]:void 0;if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const l=r.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;s[o]=a?a(r.value):r.value}else if(i){const l=$s(r,t);if(Object.keys(l).length===0)continue;s[o]=a?a(l):l}}else i&&(s={...s,...$s(r,t)})}return s},Is=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,cd=[">=","<=","=",">","<","?","/","#"];function Qr(e){const t=cd.find(o=>e.split(o).length===2),i=e.split(t).map(o=>o.trim()),[s,n]=i,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):Is(n);return{key:s,condition:t,value:r}}const Un=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of i){const n=!s.startsWith("(")&&!s.endsWith(")"),r=s.startsWith("(")&&s.endsWith(")");if(n){const o=Qr(s);t.push(o)}if(r){const o={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const c=Qr(a);return l>0&&(c.operator="&"),c})};t.push(o)}}return t}catch{return null}},Jr=(e,t,i)=>{let s=!1;switch(t){case"=":s=e===i;break;case"?":s=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(s=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(s=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(s=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(s=e>=i);break;case"/":s=String(e).startsWith(String(i));break}return s};let Ee=class{constructor(){this.enabled=!0,this.trigger=e=>{if(!this.enabled)return;const t=this.handlers.slice(0);for(const i of t)i(e)},this.handlers=[]}add(e){this.handlers.push(e)}remove(e){this.handlers=this.handlers.filter(t=>t!==e)}reset(){this.handlers.length=0}};class hd extends Set{constructor(t){super(t),this.onUpdated=new Ee,this.onItemAdded=new Ee,this.onBeforeDelete=new Ee,this.onItemDeleted=new Ee,this.onCleared=new Ee,this.guard=()=>!0,this.deleteGuard=()=>!0}set eventsEnabled(t){this.onUpdated.enabled=t,this.onItemAdded.enabled=t,this.onItemDeleted.enabled=t,this.onBeforeDelete.enabled=t,this.onCleared.enabled=t}clear(){for(const t of this)this.onBeforeDelete.trigger(t);super.clear(),this.onCleared.trigger(),this.onUpdated.trigger()}add(...t){for(const i of t)this.has(i)||!(this.guard??(()=>!0))(i)||(super.add(i),this.onItemAdded||(this.onItemAdded=new Ee),this.onItemAdded.trigger(i));return this.onUpdated||(this.onUpdated=new Ee),this.onUpdated.trigger(),this}delete(t){if(!this.has(t)||!this.deleteGuard(t))return!1;this.onBeforeDelete.trigger(t);const i=super.delete(t);return i&&(this.onItemDeleted.trigger(t),this.onUpdated.trigger()),i}deleteIf(t){for(const i of this)t(i)&&this.delete(i)}getIndex(t){let i=0;for(const s of this){if(s===t)return i;i++}return-1}dispose(){this.clear(),this.onItemAdded.reset(),this.onItemDeleted.reset(),this.onCleared.reset(),this.onBeforeDelete.reset(),this.onUpdated.reset()}}var dd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,Ht=(e,t,i,s)=>{for(var n=s>1?void 0:s?ud(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&dd(t,i,n),n},Nt;const Lt=(Nt=class extends V{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this._loading=!1,this._menuDialog=ti(),this._movedChildren=[],this._onParentClick=e=>{e.stopPropagation(),!this.disabled&&!this._loading&&this.dispatchEvent(new Event("click"))},this._onHostClick=()=>{!this.disabled&&!this._loading&&this._hasContextMenu()&&this._openMenu()},this._onKeyDown=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this._onParentClick(e))},this._onDialogClick=e=>{e.stopPropagation(),e.target===this._menuDialog.value&&this._closeMenu()},this._onDialogCancel=e=>{e.preventDefault(),this._closeMenu()},this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}get tooltipTime(){return this._tooltipTime}set tooltipTime(e){const t=this._tooltipTime;this._tooltipTime=e,e!==void 0&&console.warn('[bim-button] tooltipTime is deprecated. Use <bim-tooltip timeout="..."> inside the button instead.'),this.requestUpdate("tooltipTime",t)}get tooltipTitle(){return this._tooltipTitle}set tooltipTitle(e){const t=this._tooltipTitle;this._tooltipTitle=e,e!==void 0&&console.warn("[bim-button] tooltipTitle is deprecated. Use <bim-tooltip> inside the button instead."),this.requestUpdate("tooltipTitle",t)}get tooltipText(){return this._tooltipText}set tooltipText(e){const t=this._tooltipText;this._tooltipText=e,e!==void 0&&console.warn("[bim-button] tooltipText is deprecated. Use <bim-tooltip> inside the button instead."),this.requestUpdate("tooltipText",t)}set loading(e){const t=this._loading;this._loading=e,this.requestUpdate("loading",t)}get loading(){return this._loading}_hasContextMenu(){return!!(this.querySelector("bim-context-menu")||this.contextMenuTemplate)}_updateMenuPosition(){const e=this._menuDialog.value;if(!e)return;const t=10,i=5,s=window.innerWidth,n=window.innerHeight,r=this.getBoundingClientRect(),o=e.getBoundingClientRect();let a=r.right+t,l=r.top;a+o.width>s-i&&(a=r.left-o.width-t),l+o.height>n-i&&(l=n-o.height-i),l=Math.max(i,l),e.style.left=`${a}px`,e.style.top=`${l}px`}_openMenu(){const e=this._menuDialog.value;if(!e)return;for(;e.firstChild;)e.removeChild(e.firstChild);this._movedChildren=[];const t=this.querySelector("bim-context-menu");if(this.contextMenuTemplate){const i=document.createElement("div");$n(this.contextMenuTemplate(),i);const s=i.querySelector("bim-context-menu")??i;for(const n of[...s.children])e.append(n)}else if(t){this._movedChildren=[...t.children];for(const i of this._movedChildren)e.append(i)}if(e.children.length){if(this.getAttribute("data-context-group")){this.closeNestedContexts();const i=Gs.newRandomId();for(const s of e.children)s.tagName==="BIM-BUTTON"&&s.setAttribute("data-context-group",i)}Nt._openMenuButtons.add(this),e.showModal(),this._updateMenuPosition()}}_closeMenu(){const e=this._menuDialog.value;if(!e||!e.open)return;e.close(),Nt._openMenuButtons.delete(this),this.dispatchEvent(new Event("menuclose",{bubbles:!0,composed:!0}));const t=this.querySelector("bim-context-menu");if(t&&this._movedChildren.length)for(const i of this._movedChildren)t.append(i);for(this._movedChildren=[];e.firstChild;)e.removeChild(e.firstChild);for(const i of[...e.children])i.tagName==="BIM-BUTTON"&&i.removeAttribute("data-context-group");this.dispatchEvent(new Event("hidden"))}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of Nt._openMenuButtons)t!==this&&t.getAttribute("data-context-group")===e&&(t._closeMenu(),t.removeAttribute("data-context-group"))}click(){!this.disabled&&!this._loading&&this.dispatchEvent(new Event("click"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onHostClick),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._onHostClick),this.removeEventListener("keydown",this._onKeyDown),this._closeMenu()}updated(e){super.updated(e),(e.has("disabled")||e.has("loading"))&&(this.disabled||this._loading?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),(e.has("label")||e.has("labelHidden")||e.has("icon")||e.has("tooltipTitle"))&&(this.labelHidden&&this.label?this.setAttribute("aria-label",this.label):!this.label&&this.icon&&this.setAttribute("aria-label",this._tooltipTitle??this.icon))}render(){const e=this._hasContextMenu(),t=this._loading?"eos-icons:loading":this.icon;let i=S`${this.label}`;return e&&this.label&&(i=S`
        <div style="display: flex; align-items: center;">
          ${this.label}
          ${Nt._chevron}
        </div>
      `),S`
      <div class="parent" @click=${this._onParentClick}>
        ${this.label||t?S`
              <div class="button">
                <bim-label
                  .icon=${t}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${i}</bim-label
                >
              </div>
            `:null}
      </div>
      <slot></slot>
      <dialog
        ${Bt(this._menuDialog)}
        @click=${this._onDialogClick}
        @cancel=${this._onDialogCancel}
      ></dialog>
    `}},Nt._chevron=S`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.125rem"
    viewBox="0 0 24 24"
    width="1.125rem"
    class="chevron"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>`,Nt._openMenuButtons=new Set,Nt.styles=F`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-2xs);
      transition: background-color 0.15s;
    }

    :host(:not([disabled]):not([loading]):hover) {
      background-color: var(--bim-button--bgc-h, var(--bim-ui_bg-contrast-30));
      cursor: pointer;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--bim-ui_main-base);
      outline-offset: 2px;
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
      min-height: 25px;
      min-width: 25px;
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
      min-height: var(--bim-ui_size-10xl);
      min-width: var(--bim-ui_size-10xl);
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

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
      padding: 0 6px;
    }

    :host([disabled]),
    :host([loading]) {
      --bim-label--c: var(--bim-ui_bg-contrast-50);
      background-color: var(--bim-button--disabled-bgc, var(--bim-ui_bg-contrast-10));
    }

    .chevron {
      fill: var(--bim-label--c);
      flex-shrink: 0;
    }

    /* Buttons inside the context menu dialog */
    dialog bim-button {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bdrs: var(--bim-ui_size-4xs);
      --bim-button--bgc: transparent;
      --bim-button--bgc-h: var(--bim-ui_bg-contrast-20);
      --bim-button--olw: 0;
      --bim-button--olc: transparent;
    }

    dialog {
      position: fixed;
      margin: 0;
      padding: 0.375rem;
      border: none;
      outline: none;
      border-radius: 4px;
      background-color: var(--bim-ui_bg-contrast-10);
      box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      overflow: auto;
      max-height: 20rem;
      min-width: 3rem;
      display: none;
      flex-direction: column;
      pointer-events: auto;
    }

    dialog[open] {
      display: flex;
    }

    dialog::backdrop {
      background: transparent;
      pointer-events: auto;
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }
  `,Nt);Ht([v({type:String,reflect:!0})],Lt.prototype,"label",2);Ht([v({type:Boolean,attribute:"label-hidden",reflect:!0})],Lt.prototype,"labelHidden",2);Ht([v({type:Boolean,reflect:!0})],Lt.prototype,"active",2);Ht([v({type:Boolean,reflect:!0,attribute:"disabled"})],Lt.prototype,"disabled",2);Ht([v({type:String,reflect:!0})],Lt.prototype,"icon",2);Ht([v({type:Boolean,reflect:!0})],Lt.prototype,"vertical",2);Ht([v({type:Number,attribute:"tooltip-time",reflect:!0})],Lt.prototype,"tooltipTime",1);Ht([v({type:String,attribute:"tooltip-title",reflect:!0})],Lt.prototype,"tooltipTitle",1);Ht([v({type:String,attribute:"tooltip-text",reflect:!0})],Lt.prototype,"tooltipText",1);Ht([v({type:Boolean,reflect:!0})],Lt.prototype,"loading",1);let pd=Lt;var fd=Object.defineProperty,Ve=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&fd(t,i,n),n};const gd=S`<svg part="checkmark" viewBox="0 0 21 21"><polyline points="5 10.75 8.5 14.25 16 6"></polyline></svg>`,bd=S`<svg part="checkmark" viewBox="0 0 21 21"><line x1="5" y1="10.5" x2="16" y2="10.5"></line></svg>`,qn=class extends V{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}set value(t){this.checked=t}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",String(this.disabled))}onChange(t){t.stopPropagation();const i=t.target;i&&(this.checked=i.checked,this.indeterminate=!1,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}render(){return S`
      <label class="parent-label">
        ${this.icon||this.label?S`<bim-label .icon="${this.icon}">${this.label??""}</bim-label>`:ot}
        <div class="input-container">
          <input
            part="input"
            type="checkbox"
            name=${Mi(this.name)}
            aria-label=${this.label||this.name||"Checkbox Input"}
            @change="${this.onChange}"
            .checked="${this.checked}"
            .indeterminate="${this.indeterminate}"
            .disabled="${this.disabled}"
          />
          ${this.indeterminate?bd:gd}
        </div>
      </label>
    `}};qn.shadowRootOptions={...V.shadowRootOptions,delegatesFocus:!0},qn.styles=F`
    :host {
      display: block;
    }

    .parent-label {
      --background: var(--bim-checkbox--bg, var(--bim-ui_bg-contrast-30));
      --border: var(--bim-checkbox--bd-c, var(--bim-ui_bg-contrast-50));
      --stroke: var(--bim-checkbox--stroke-c, var(--bim-ui_main-contrast));
      --border-hover: var(--bim-checkbox--bd-h-c, var(--bim-ui_bg-contrast-70));
      --border-active: var(--bim-checkbox--bd-active-c, var(--bim-ui_main-base));
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 1.75rem;
      column-gap: 0.25rem;
      position: relative;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    :host([inverted]) .parent-label {
      flex-direction: row-reverse;
      justify-content: start;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    :host([disabled]) .parent-label {
      pointer-events: none;
      opacity: 0.4;
    }

    input,
    svg {
      width: 1rem;
      height: 1rem;
      display: block;
    }

    .input-container {
      position: relative;
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: var(--bim-checkbox--bdrs, 4px);
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
    }

    input:focus-visible {
      outline: 2px solid var(--bim-ui_main-base);
      outline-offset: 2px;
    }

    svg {
      pointer-events: none;
      fill: none;
      stroke-width: 2.2px;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: var(--stroke, var(--border-active));
      transform: translateY(-100%) scale(0);
      position: absolute;
      width: 1rem;
      height: 1rem;
    }

    input:hover {
      --s: 2px;
      --b: var(--border-hover);
    }

    input:checked,
    input:indeterminate {
      --b: var(--border-active);
      --s: 11px;
    }

    input:checked + svg,
    input:indeterminate + svg {
      -webkit-animation: bounce 0.4s linear forwards 0.2s;
      animation: bounce 0.4s linear forwards 0.2s;
    }

    @keyframes bounce {
      0% {
        transform: translateY(-100%) scale(0);
      }
      50% {
        transform: translateY(-100%) scale(1.2);
      }
      75% {
        transform: translateY(-100%) scale(0.9);
      }
      100% {
        transform: translateY(-100%) scale(1);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      input:checked + svg,
      input:indeterminate + svg {
        animation: none;
        transform: translateY(-100%) scale(1);
      }
    }
  `;let xe=qn;Ve([v({type:String,reflect:!0})],xe.prototype,"icon");Ve([v({type:String})],xe.prototype,"name");Ve([v({type:String,reflect:!0})],xe.prototype,"label");Ve([v({type:Boolean})],xe.prototype,"checked");Ve([v({type:Boolean})],xe.prototype,"indeterminate");Ve([v({type:Boolean,reflect:!0})],xe.prototype,"disabled");Ve([v({type:Boolean,reflect:!0})],xe.prototype,"inverted");var md=Object.defineProperty,je=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&md(t,i,n),n};const Ja=class extends V{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this.disabled=!1,this._colorInput=ti(),this._textInput=ti(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const i=t.target;this.opacity=i.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:i,opacity:s}=t;this.color=i,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:i}=this._colorInput;i&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:i}=this._textInput;if(!i)return;const{value:s}=i;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),i.value=n.slice(0,7),i.value.length===7&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return S`
      <div class="parent">
        <bim-input
          .label=${this.label}
          .icon=${this.icon}
          .vertical="${this.vertical}"
        >
          <div class="color-container">
            <div
              style="display: flex; align-items: center; gap: .375rem; height: 100%; flex: 1;"
            >
              <input
                ${Bt(this._colorInput)}
                @input="${this.onColorInput}"
                type="color"
                aria-label=${this.label||this.name||"Color Input"}
                value="${this.color}"
                ?disabled=${this.disabled}
              />
              <div
                @click=${this.focus}
                class="sample"
                style="background-color: ${this.color}"
              ></div>
              <input
                ${Bt(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
                ?disabled=${this.disabled}
              />
            </div>
            ${this.opacity!==void 0?S`<bim-number-input
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
    `}};Ja.styles=F`
    :host {
      /* flex: 1; */
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
      font-size: var(--bim-ui_size-sm);
      background-color: transparent;
      padding: 0%;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([disabled]) .color-container input[type="text"] {
      color: var(--bim-ui_bg-contrast-60);
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let _e=Ja;je([v({type:String,reflect:!0})],_e.prototype,"name");je([v({type:String,reflect:!0})],_e.prototype,"label");je([v({type:String,reflect:!0})],_e.prototype,"icon");je([v({type:Boolean,reflect:!0})],_e.prototype,"vertical");je([v({type:Number,reflect:!0})],_e.prototype,"opacity");je([v({type:String,reflect:!0})],_e.prototype,"color");je([v({type:Boolean,reflect:!0})],_e.prototype,"disabled");const ei=Math.min,ee=Math.max,Bs=Math.round,ge=e=>({x:e,y:e}),vd={left:"right",right:"left",bottom:"top",top:"bottom"};function Zr(e,t,i){return ee(e,ei(t,i))}function Xi(e,t){return typeof e=="function"?e(t):e}function se(e){return e.split("-")[0]}function Qs(e){return e.split("-")[1]}function Za(e){return e==="x"?"y":"x"}function tl(e){return e==="y"?"height":"width"}function Xt(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function el(e){return Za(Xt(e))}function yd(e,t,i){i===void 0&&(i=!1);const s=Qs(e),n=el(e),r=tl(n);let o=n==="x"?s===(i?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=Fs(o)),[o,Fs(o)]}function xd(e){const t=Fs(e);return[Yn(e),t,Yn(t)]}function Yn(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const to=["left","right"],eo=["right","left"],_d=["top","bottom"],wd=["bottom","top"];function kd(e,t,i){switch(e){case"top":case"bottom":return i?t?eo:to:t?to:eo;case"left":case"right":return t?_d:wd;default:return[]}}function Sd(e,t,i,s){const n=Qs(e);let r=kd(se(e),i==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(Yn)))),r}function Fs(e){const t=se(e);return vd[t]+e.slice(t.length)}function Md(e){return{top:0,right:0,bottom:0,left:0,...e}}function il(e){return typeof e!="number"?Md(e):{top:e,right:e,bottom:e,left:e}}function ii(e){const{x:t,y:i,width:s,height:n}=e;return{width:s,height:n,top:i,left:t,right:t+s,bottom:i+n,x:t,y:i}}function io(e,t,i){let{reference:s,floating:n}=e;const r=Xt(t),o=el(t),a=tl(o),l=se(t),c=r==="y",h=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,u=s[a]/2-n[a]/2;let p;switch(l){case"top":p={x:h,y:s.y-n.height};break;case"bottom":p={x:h,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-n.width,y:d};break;default:p={x:s.x,y:s.y}}switch(Qs(t)){case"start":p[o]-=u*(i&&c?-1:1);break;case"end":p[o]+=u*(i&&c?-1:1);break}return p}async function Cd(e,t){var i;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=Xi(t,e),g=il(p),f=a[u?d==="floating"?"reference":"floating":d],b=ii(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(f)))==null||i?f:f.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),m=d==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),x=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},_=ii(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:y,strategy:l}):m);return{top:(b.top-_.top+g.top)/x.y,bottom:(_.bottom-b.bottom+g.bottom)/x.y,left:(b.left-_.left+g.left)/x.x,right:(_.right-b.right+g.right)/x.x}}const Ed=50,Dd=async(e,t,i)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=i,a=o.detectOverflow?o:{...o,detectOverflow:Cd},l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:d}=io(c,s,l),u=s,p=0;const g={};for(let f=0;f<r.length;f++){const b=r[f];if(!b)continue;const{name:m,fn:y}=b,{x,y:_,data:k,reset:w}=await y({x:h,y:d,initialPlacement:s,placement:u,strategy:n,middlewareData:g,rects:c,platform:a,elements:{reference:e,floating:t}});h=x??h,d=_??d,g[m]={...g[m],...k},w&&p<Ed&&(p++,typeof w=="object"&&(w.placement&&(u=w.placement),w.rects&&(c=w.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:n}):w.rects),{x:h,y:d}=io(c,u,l)),f=-1)}return{x:h,y:d,placement:u,strategy:n,middlewareData:g}},Ad=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:f=!0,...b}=Xi(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const m=se(n),y=Xt(a),x=se(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),k=u||(x||!f?[Fs(a)]:xd(a)),w=g!=="none";!u&&w&&k.push(...Sd(a,f,g,_));const M=[a,...k],C=await l.detectOverflow(t,b),A=[];let D=((s=r.flip)==null?void 0:s.overflows)||[];if(h&&A.push(C[m]),d){const j=yd(n,o,_);A.push(C[j[0]],C[j[1]])}if(D=[...D,{placement:n,overflows:A}],!A.every(j=>j<=0)){var P,T;const j=(((P=r.flip)==null?void 0:P.index)||0)+1,O=M[j];if(O&&(!(d==="alignment"&&y!==Xt(O))||D.every(N=>Xt(N.placement)===y?N.overflows[0]>0:!0)))return{data:{index:j,overflows:D},reset:{placement:O}};let $=(T=D.filter(N=>N.overflows[0]<=0).sort((N,Q)=>N.overflows[1]-Q.overflows[1])[0])==null?void 0:T.placement;if(!$)switch(p){case"bestFit":{var G;const N=(G=D.filter(Q=>{if(w){const K=Xt(Q.placement);return K===y||K==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(K=>K>0).reduce((K,oe)=>K+oe,0)]).sort((Q,K)=>Q[1]-K[1])[0])==null?void 0:G[0];N&&($=N);break}case"initialPlacement":$=a;break}if(n!==$)return{reset:{placement:$}}}return{}}}};function sl(e){const t=ei(...e.map(r=>r.left)),i=ei(...e.map(r=>r.top)),s=ee(...e.map(r=>r.right)),n=ee(...e.map(r=>r.bottom));return{x:t,y:i,width:s-t,height:n-i}}function Pd(e){const t=e.slice().sort((n,r)=>n.y-r.y),i=[];let s=null;for(let n=0;n<t.length;n++){const r=t[n];!s||r.y-s.y>s.height/2?i.push([r]):i[i.length-1].push(r),s=r}return i.map(n=>ii(sl(n)))}const Od=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:s,rects:n,platform:r,strategy:o}=t,{padding:a=2,x:l,y:c}=Xi(e,t),h=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(s.reference))||[]),d=Pd(h),u=ii(sl(h)),p=il(a);function g(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(b=>l>b.left-p.left&&l<b.right+p.right&&c>b.top-p.top&&c<b.bottom+p.bottom)||u;if(d.length>=2){if(Xt(i)==="y"){const D=d[0],P=d[d.length-1],T=se(i)==="top",G=D.top,j=P.bottom,O=T?D.left:P.left,$=T?D.right:P.right,N=$-O,Q=j-G;return{top:G,bottom:j,left:O,right:$,width:N,height:Q,x:O,y:G}}const b=se(i)==="left",m=ee(...d.map(D=>D.right)),y=ei(...d.map(D=>D.left)),x=d.filter(D=>b?D.left===y:D.right===m),_=x[0].top,k=x[x.length-1].bottom,w=y,M=m,C=M-w,A=k-_;return{top:_,bottom:k,left:w,right:M,width:C,height:A,x:w,y:_}}return u}const f=await r.getElementRects({reference:{getBoundingClientRect:g},floating:s.floating,strategy:o});return n.reference.x!==f.reference.x||n.reference.y!==f.reference.y||n.reference.width!==f.reference.width||n.reference.height!==f.reference.height?{reset:{rects:f}}:{}}}},Td=new Set(["left","top"]);async function zd(e,t){const{placement:i,platform:s,elements:n}=e,r=await(s.isRTL==null?void 0:s.isRTL(n.floating)),o=se(i),a=Qs(i),l=Xt(i)==="y",c=Td.has(o)?-1:1,h=r&&l?-1:1,d=Xi(t,e);let{mainAxis:u,crossAxis:p,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof g=="number"&&(p=a==="end"?g*-1:g),l?{x:p*h,y:u*c}:{x:u*c,y:p*h}}const nl=function(e){return{name:"offset",options:e,async fn(t){var i,s;const{x:n,y:r,placement:o,middlewareData:a}=t,l=await zd(t,e);return o===((i=a.offset)==null?void 0:i.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:o}}}}},Ld=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:s,placement:n,platform:r}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:m=>{let{x:y,y:x}=m;return{x:y,y:x}}},...c}=Xi(e,t),h={x:i,y:s},d=await r.detectOverflow(t,c),u=Xt(se(n)),p=Za(u);let g=h[p],f=h[u];if(o){const m=p==="y"?"top":"left",y=p==="y"?"bottom":"right",x=g+d[m],_=g-d[y];g=Zr(x,g,_)}if(a){const m=u==="y"?"top":"left",y=u==="y"?"bottom":"right",x=f+d[m],_=f-d[y];f=Zr(x,f,_)}const b=l.fn({...t,[p]:g,[u]:f});return{...b,data:{x:b.x-i,y:b.y-s,enabled:{[p]:o,[u]:a}}}}}};function Js(){return typeof window<"u"}function be(e){return rl(e)?(e.nodeName||"").toLowerCase():"#document"}function kt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function we(e){var t;return(t=(rl(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function rl(e){return Js()?e instanceof Node||e instanceof kt(e).Node:!1}function Ft(e){return Js()?e instanceof Element||e instanceof kt(e).Element:!1}function Vt(e){return Js()?e instanceof HTMLElement||e instanceof kt(e).HTMLElement:!1}function so(e){return!Js()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof kt(e).ShadowRoot}function Ki(e){const{overflow:t,overflowX:i,overflowY:s,display:n}=At(e);return/auto|scroll|overlay|hidden|clip/.test(t+s+i)&&n!=="inline"&&n!=="contents"}function Rd(e){return/^(table|td|th)$/.test(be(e))}function $d(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const Id=/transform|translate|scale|rotate|perspective|filter/,Bd=/paint|layout|strict|content/,De=e=>!!e&&e!=="none";let vn;function fr(e){const t=Ft(e)?At(e):e;return De(t.transform)||De(t.translate)||De(t.scale)||De(t.rotate)||De(t.perspective)||!gr()&&(De(t.backdropFilter)||De(t.filter))||Id.test(t.willChange||"")||Bd.test(t.contain||"")}function Fd(e){let t=si(e);for(;Vt(t)&&!Zs(t);){if(fr(t))return t;if($d(t))return null;t=si(t)}return null}function gr(){return vn==null&&(vn=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),vn}function Zs(e){return/^(html|body|#document)$/.test(be(e))}function At(e){return kt(e).getComputedStyle(e)}function tn(e){return Ft(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function si(e){if(be(e)==="html")return e;const t=e.assignedSlot||e.parentNode||so(e)&&e.host||we(e);return so(t)?t.host:t}function ol(e){const t=si(e);return Zs(t)?e.ownerDocument?e.ownerDocument.body:e.body:Vt(t)&&Ki(t)?t:ol(t)}function al(e,t,i){var s;t===void 0&&(t=[]);const n=ol(e),r=n===((s=e.ownerDocument)==null?void 0:s.body),o=kt(n);return r?(Vd(o),t.concat(o,o.visualViewport||[],Ki(n)?n:[],[])):t.concat(n,al(n,[]))}function Vd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ll(e){const t=At(e);let i=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=Vt(e),r=n?e.offsetWidth:i,o=n?e.offsetHeight:s,a=Bs(i)!==r||Bs(s)!==o;return a&&(i=r,s=o),{width:i,height:s,$:a}}function cl(e){return Ft(e)?e:e.contextElement}function Je(e){const t=cl(e);if(!Vt(t))return ge(1);const i=t.getBoundingClientRect(),{width:s,height:n,$:r}=ll(t);let o=(r?Bs(i.width):i.width)/s,a=(r?Bs(i.height):i.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const jd=ge(0);function hl(e){const t=kt(e);return!gr()||!t.visualViewport?jd:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Hd(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==kt(e)?!1:t}function Bi(e,t,i,s){t===void 0&&(t=!1),i===void 0&&(i=!1);const n=e.getBoundingClientRect(),r=cl(e);let o=ge(1);t&&(s?Ft(s)&&(o=Je(s)):o=Je(e));const a=Hd(r,i,s)?hl(r):ge(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,h=n.width/o.x,d=n.height/o.y;if(r){const u=kt(r),p=s&&Ft(s)?kt(s):s;let g=u,f=g.frameElement;for(;f&&s&&p!==g;){const b=Je(f),m=f.getBoundingClientRect(),y=At(f),x=m.left+(f.clientLeft+parseFloat(y.paddingLeft))*b.x,_=m.top+(f.clientTop+parseFloat(y.paddingTop))*b.y;l*=b.x,c*=b.y,h*=b.x,d*=b.y,l+=x,c+=_,g=kt(f),f=g.frameElement}}return ii({width:h,height:d,x:l,y:c})}const Nd=[":popover-open",":modal"];function dl(e){return Nd.some(t=>{try{return e.matches(t)}catch{return!1}})}function Wd(e){let{elements:t,rect:i,offsetParent:s,strategy:n}=e;const r=n==="fixed",o=we(s),a=t?dl(t.floating):!1;if(s===o||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=ge(1);const h=ge(0),d=Vt(s);if((d||!d&&!r)&&((be(s)!=="body"||Ki(o))&&(l=tn(s)),Vt(s))){const u=Bi(s);c=Je(s),h.x=u.x+s.clientLeft,h.y=u.y+s.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x,y:i.y*c.y-l.scrollTop*c.y+h.y}}function Ud(e){return Array.from(e.getClientRects())}function ul(e){return Bi(we(e)).left+tn(e).scrollLeft}function qd(e){const t=we(e),i=tn(e),s=e.ownerDocument.body,n=ee(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=ee(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-i.scrollLeft+ul(e);const a=-i.scrollTop;return At(s).direction==="rtl"&&(o+=ee(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:a}}function Yd(e,t){const i=kt(e),s=we(e),n=i.visualViewport;let r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const c=gr();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:o,x:a,y:l}}function Xd(e,t){const i=Bi(e,!0,t==="fixed"),s=i.top+e.clientTop,n=i.left+e.clientLeft,r=Vt(e)?Je(e):ge(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=n*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function no(e,t,i){let s;if(t==="viewport")s=Yd(e,i);else if(t==="document")s=qd(we(e));else if(Ft(t))s=Xd(t,i);else{const n=hl(e);s={...t,x:t.x-n.x,y:t.y-n.y}}return ii(s)}function pl(e,t){const i=si(e);return i===t||!Ft(i)||Zs(i)?!1:At(i).position==="fixed"||pl(i,t)}function Kd(e,t){const i=t.get(e);if(i)return i;let s=al(e,[]).filter(a=>Ft(a)&&be(a)!=="body"),n=null;const r=At(e).position==="fixed";let o=r?si(e):e;for(;Ft(o)&&!Zs(o);){const a=At(o),l=fr(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&n&&["absolute","fixed"].includes(n.position)||Ki(o)&&!l&&pl(e,o))?s=s.filter(c=>c!==o):n=a,o=si(o)}return t.set(e,s),s}function Gd(e){let{element:t,boundary:i,rootBoundary:s,strategy:n}=e;const r=[...i==="clippingAncestors"?Kd(t,this._c):[].concat(i),s],o=r[0],a=r.reduce((l,c)=>{const h=no(t,c,n);return l.top=ee(h.top,l.top),l.right=ei(h.right,l.right),l.bottom=ei(h.bottom,l.bottom),l.left=ee(h.left,l.left),l},no(t,o,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Qd(e){const{width:t,height:i}=ll(e);return{width:t,height:i}}function Jd(e,t,i){const s=Vt(t),n=we(t),r=i==="fixed",o=Bi(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ge(0);if(s||!s&&!r)if((be(t)!=="body"||Ki(n))&&(a=tn(t)),s){const d=Bi(t,!0,r,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else n&&(l.x=ul(n));const c=o.left+a.scrollLeft-l.x,h=o.top+a.scrollTop-l.y;return{x:c,y:h,width:o.width,height:o.height}}function ro(e,t){return!Vt(e)||At(e).position==="fixed"?null:t?t(e):e.offsetParent}function fl(e,t){const i=kt(e);if(!Vt(e)||dl(e))return i;let s=ro(e,t);for(;s&&Rd(s)&&At(s).position==="static";)s=ro(s,t);return s&&(be(s)==="html"||be(s)==="body"&&At(s).position==="static"&&!fr(s))?i:s||Fd(e)||i}const Zd=async function(e){const t=this.getOffsetParent||fl,i=this.getDimensions;return{reference:Jd(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function tu(e){return At(e).direction==="rtl"}const eu={convertOffsetParentRelativeRectToViewportRelativeRect:Wd,getDocumentElement:we,getClippingRect:Gd,getOffsetParent:fl,getElementRects:Zd,getClientRects:Ud,getDimensions:Qd,getScale:Je,isElement:Ft,isRTL:tu},gl=Ld,bl=Ad,ml=Od,vl=(e,t,i)=>{const s=new Map,n={platform:eu,...i},r={...n.platform,_c:s};return Dd(e,t,{...n,platform:r})};var iu=Object.defineProperty,su=Object.getOwnPropertyDescriptor,yl=(e,t,i,s)=>{for(var n=su(t,i),r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&iu(t,i,n),n},ht;const br=(ht=class extends V{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of[...ht.dialog.children])e instanceof ht&&(e.remove(),e.visible=!1);setTimeout(()=>{ht.dialog.close(),ht.dialog.remove()},310)}get visible(){return this._visible}set visible(e){this._visible=e,e?(ht.dialog.parentElement||document.body.append(ht.dialog),this._previousContainer=this.parentElement,ht.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),ht.dialog.append(this),ht.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var t;(t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await vl(this._previousContainer,this,{placement:e,middleware:[nl(10),ml(),bl(),gl({padding:5})]}),{x:i,y:s}=t;this.style.left=`${i}px`,this.style.top=`${s}px`}connectedCallback(){super.connectedCallback(),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("display","none"),this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return S` <slot></slot> `}},ht.styles=[ye.scrollbar,F`
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
        transform-origin: top left;
        transform: scale(1);
        clip-path: circle(150% at top left);
        background-color: var(--bim-ui_bg-contrast-50);
        transition:
          clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
          transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      ::slotted(bim-button) {
        background-color: transparent;
      }

      :host(:not([visible])) {
        transform: scale(0.8);
        clip-path: circle(0 at top left);
      }
    `],ht.dialog=Wn.create(()=>S` <dialog
      @click=${e=>{e.target===ht.dialog&&ht.removeMenus()}}
      @cancel=${()=>ht.removeMenus()}
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
    ></dialog>`),ht);yl([v({type:String,reflect:!0})],br.prototype,"placement");yl([v({type:Boolean,reflect:!0})],br.prototype,"visible");let nu=br;class Kt extends HTMLElement{get label(){return this.getAttribute("label")??void 0}set label(t){t!=null?this.setAttribute("label",t):this.removeAttribute("label")}get icon(){return this.getAttribute("icon")??void 0}set icon(t){t!=null?this.setAttribute("icon",t):this.removeAttribute("icon")}get img(){return this.getAttribute("img")??void 0}set img(t){t!=null?this.setAttribute("img",t):this.removeAttribute("img")}get checked(){return this.hasAttribute("checked")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get noMark(){return this.hasAttribute("no-mark")}set noMark(t){t?this.setAttribute("no-mark",""):this.removeAttribute("no-mark")}get vertical(){return this.hasAttribute("vertical")}set vertical(t){t?this.setAttribute("vertical",""):this.removeAttribute("vertical")}get checkbox(){return this.hasAttribute("checkbox")}set checkbox(t){t?this.setAttribute("checkbox",""):this.removeAttribute("checkbox")}get value(){if(this._value!==void 0)return this._value;const t=this.getAttribute("value");if(t!==null)return Is(t);if(this.label)return Is(this.label)}set value(t){this._value=t}}var ru=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,Pt=(e,t,i,s)=>{for(var n=s>1?void 0:s?ou(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&ru(t,i,n),n};const xl=class extends V{constructor(){super(...arguments),this.multiple=!1,this.required=!1,this.vertical=!1,this.searchBox=!1,this._visible=!1,this._options=[],this._value=new Set,this._searchValue="",this._dirty=!1,this.onValueChange=new Event("change"),this._dialog=ti(),this._trigger=ti(),this._mutationObserver=new MutationObserver(()=>this._syncOptions()),this._onTriggerKeydown=t=>{t.key==="Enter"||t.key===" "?(t.preventDefault(),this.visible?this.visible=!1:this._openWithFocus()):t.key==="ArrowDown"?(t.preventDefault(),this.visible?this._focusOption(0):this._openWithFocus()):t.key==="ArrowUp"&&(t.preventDefault(),this.visible?this._focusOption(-1):this._openWithFocus())},this._onOptionKeydown=(t,i,s)=>{t.key==="Enter"||t.key===" "?(t.preventDefault(),this._onOptionClick(i)):t.key==="ArrowDown"?(t.preventDefault(),this._focusOption(s+1)):t.key==="ArrowUp"?(t.preventDefault(),this._focusOption(s-1)):t.key==="Home"?(t.preventDefault(),this._focusOption(0)):t.key==="End"?(t.preventDefault(),this._focusOption(-1)):t.key==="Escape"&&(t.preventDefault(),this.visible=!1)},this._onDialogClick=t=>{t.target===this._dialog.value&&(this.visible=!1)},this._onCancel=t=>{t.preventDefault(),this.visible=!1},this._onOptionClick=t=>{const i=this._value.has(t);!this.multiple&&!this.required&&!i?this._value=new Set([t]):!this.multiple&&!this.required&&i?this._value=new Set([]):!this.multiple&&this.required&&!i?this._value=new Set([t]):!this.multiple&&this.required&&i?this._value=new Set([]):this.multiple&&!this.required&&!i?this._value=new Set([...this._value,t]):this.multiple&&!this.required&&i?this._value=new Set([...this._value].filter(s=>s!==t)):this.multiple&&this.required&&!i?this._value=new Set([...this._value,t]):this.multiple&&this.required&&i&&(this._value=new Set([...this._value].filter(s=>s!==t))),this._dirty=!0,this._updateOptionsState(),this.dispatchEvent(new Event("change"))},this._onSearch=t=>{this._searchValue=(t.target.value??"").toLowerCase()}}set visible(t){var i,s;const n=this._visible;if(t!==n){if(this._visible=t,t){const r=this._dialog.value;if(!r){this._visible=!1;return}r.showModal(),this._updatePosition()}else(i=this._dialog.value)==null||i.close(),this._resetState(),(s=this._trigger.value)==null||s.focus(),this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0}));this.requestUpdate("visible",n)}}get visible(){return this._visible}get validation(){return this._validation}set validation(t){this._validation=t,this.requestUpdate()}get isValid(){var t;return this._dirty?this.required&&this.value.length===0?!1:((t=this._currentValidation)==null?void 0:t.valid)??!0:!0}get _validationMessage(){var t;return this.required&&this.value.length===0?"This field is required.":(t=this._currentValidation)==null?void 0:t.message}get _hasVisibleOptions(){return this._searchValue?this._options.some(t=>(t.label??String(t.value)??"").toLowerCase().includes(this._searchValue)):this._options.length>0}set value(t){const i=new Set;for(const s of t){const n=this._findOption(s);if(n&&(i.add(n),!this.multiple&&t.length===1))break}this._value=i,this._updateOptionsState(),this.dispatchEvent(new Event("change"))}get value(){return[...this._value].filter(t=>t instanceof Kt&&t.checked).map(t=>t.value)}connectedCallback(){super.connectedCallback(),this._mutationObserver.observe(this,{childList:!0}),customElements.whenDefined("bim-option").then(()=>this._syncOptions())}disconnectedCallback(){super.disconnectedCallback(),this._mutationObserver.disconnect()}willUpdate(t){this._currentValidation=this._validation?this._validation(this.value):void 0}updated(){this.toggleAttribute("invalid",!this.isValid)}firstUpdated(){var t;this._visible&&((t=this._dialog.value)==null||t.showModal(),this._updatePosition())}_syncOptions(){const t=Array.from(this.children).filter(n=>n.tagName==="BIM-OPTION");this._options=t;const i=new Set(t.filter(n=>n.hasAttribute("checked"))),s=[...this._value].some(n=>!i.has(n));this._value=i,s&&this.dispatchEvent(new Event("change"))}_findOption(t){for(const i of Array.from(this.children))if(i instanceof Kt&&(i.label===t||i.value===t))return i}_updateOptionsState(){for(const t of Array.from(this.children))t instanceof Kt&&(t.checked=this._value.has(t))}_updatePosition(){const t=this._dialog.value,i=this._trigger.value;if(!t||!i)return;const s=4,n=5,r=window.innerWidth,o=window.innerHeight,a=i.getBoundingClientRect(),l=t.getBoundingClientRect();let c=a.left,h=a.bottom+s;h+l.height>o-n&&(h=a.top-l.height-s),c+l.width>r-n&&(c=a.right-l.width),c=Math.max(n,Math.min(c,r-l.width-n)),h=Math.max(n,Math.min(h,o-l.height-n)),t.style.minWidth=`${a.width}px`,t.style.left=`${c}px`,t.style.top=`${h}px`}_resetState(){this._searchValue="";for(const t of Array.from(this.children))t instanceof Kt&&(t.style.display="")}_focusOption(t){var i,s;const n=[...((i=this._dialog.value)==null?void 0:i.querySelectorAll(".option"))??[]];if(!n.length)return;const r=t<0?n.length+t:t;(s=n[Math.max(0,Math.min(r,n.length-1))])==null||s.focus()}_openWithFocus(){this.visible=!0,requestAnimationFrame(()=>{var t;const i=this._dialog.value;if(!i)return;const s=i.querySelector(".option.checked"),n=i.querySelector(".option");(t=s??n)==null||t.focus()})}_renderOption(t,i){const s=this._value.has(t);return this._searchValue&&!(t.label??String(t.value)??"").toLowerCase().includes(this._searchValue)?ot:S`
      <div
        class=${th({option:!0,checked:s})}
        role="option"
        aria-selected=${s}
        tabindex="-1"
        @click=${()=>this._onOptionClick(t)}
        @keydown=${n=>this._onOptionKeydown(n,t,i)}
      >
        <bim-label
          .icon=${t.icon}
          .img=${t.img}
          .vertical=${t.vertical}
        >${t.label}</bim-label>
        ${s&&!t.noMark?S`<svg xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>`:ot}
      </div>
    `}render(){let t,i,s;if(this._value.size===0)t=this.placeholder??"Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)??String((n==null?void 0:n.value)??""),i=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=this.multipleLabel?this.multipleLabel(this._value.size):`Multiple (${this._value.size})`;return S`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${Bt(this._trigger)}
          class="input"
          tabindex="0"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded=${this.visible}
          aria-controls="bim-dropdown-listbox"
          aria-label=${this.label??"Dropdown"}
          @click=${()=>this.visible=!this.visible}
          @keydown=${this._onTriggerKeydown}
        >
          <bim-label aria-hidden="true" .img=${i} .icon=${s}>${t}</bim-label>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </bim-input>
      ${!this.isValid&&this._validationMessage?S`<span class="validation-message">${this._validationMessage}</span>`:ot}
      <dialog
        id="bim-dropdown-listbox"
        role="listbox"
        aria-label=${this.label??"Options"}
        aria-multiselectable=${this.multiple}
        ${Bt(this._dialog)}
        @click=${this._onDialogClick}
        @cancel=${this._onCancel}
      >
        ${this.searchBox?S`<bim-text-input
              @input=${this._onSearch}
              placeholder="Search..."
              debounce="200"
            ></bim-text-input>`:ot}
        ${eh(this._options,n=>n,(n,r)=>this._renderOption(n,r))}
        ${this._hasVisibleOptions?ot:S`<bim-label class="no-options">No options found...</bim-label>`}
      </dialog>
    `}};xl.styles=[ye.scrollbar,F`
      :host {
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-2xs);
        --bim-input--bgc: var(--bim-ui_bg-contrast-20);
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      :host(:focus-within:not([visible])) {
        --bim-input--olc: var(--bim-ui_bg-contrast-40);
      }

      /* --bim-dropdown--c: color of the trigger label and chevron. Default: --bim-ui_bg-contrast-100 */
      .input {
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
      }

      .input bim-label {
        pointer-events: none;
        overflow: hidden;
      }

      .input svg {
        flex-shrink: 0;
        fill: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
      }

      dialog {
        position: fixed;
        margin: 0;
        padding: 0.375rem 0;
        border: none;
        outline: none;
        border-radius: 4px;
        background-color: var(--bim-ui_bg-contrast-10);
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        overflow: auto;
        max-height: 20rem;
        min-width: 3rem;
        display: none;
        flex-direction: column;
        transform-origin: top left;
      }

      dialog[open] {
        display: flex;
        animation: bim-dropdown-open 0.15s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      dialog::backdrop {
        background: transparent;
      }

      dialog bim-text-input {
        --bim-input--bgc: var(--bim-ui_bg-contrast-30);
        margin: 0 0.375rem 0.125rem;
      }

      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 0.5rem;
        padding: 0 0.5rem;
        min-height: 1.75rem;
        cursor: pointer;
        user-select: none;
        box-sizing: border-box;
      }

      .option:hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .option:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      .option.checked {
        --bim-label--c: color-mix(in lab, var(--bim-ui_main-base), white 30%);
      }

      .option.checked svg {
        flex-shrink: 0;
        fill: color-mix(in lab, var(--bim-ui_main-base), white 30%);
      }

      .no-options {
        --bim-label--c: var(--bim-ui_bg-contrast-60);
        padding: 0.25rem 0.5rem;
      }

      :host([invalid]) {
        --bim-input--olc: var(--bim-ui_danger-base);
      }

      .validation-message {
        display: block;
        font-size: var(--bim-ui_size-base);
        color: var(--bim-ui_danger-base);
        padding: 2px var(--bim-ui_size-xs);
      }

      :host(:not([vertical])) .validation-message {
        text-align: right;
      }

      @keyframes bim-dropdown-open {
        from { opacity: 0; transform: scale(0.95); }
        to   { opacity: 1; transform: scale(1); }
      }

      @media (prefers-reduced-motion: reduce) {
        dialog[open] { animation: none; }
      }
    `];let St=xl;Pt([v({type:String,reflect:!0})],St.prototype,"name",2);Pt([v({type:String,reflect:!0})],St.prototype,"icon",2);Pt([v({type:String,reflect:!0})],St.prototype,"label",2);Pt([v({type:Boolean,reflect:!0})],St.prototype,"multiple",2);Pt([v({type:Boolean,reflect:!0})],St.prototype,"required",2);Pt([v({type:Boolean,reflect:!0})],St.prototype,"vertical",2);Pt([v({type:String,reflect:!0})],St.prototype,"placeholder",2);Pt([v({type:Boolean,reflect:!0,attribute:"search-box"})],St.prototype,"searchBox",2);Pt([v({type:Boolean,reflect:!0})],St.prototype,"visible",1);Pt([gt()],St.prototype,"_options",2);Pt([gt()],St.prototype,"_value",2);Pt([gt()],St.prototype,"_searchValue",2);function oo(e){const t=[];let i="",s=0;for(const n of e)n==="["||n==="("?(s++,i+=n):n==="]"||n===")"?(s--,i+=n):n===" "&&s===0?i!==""&&(t.push(i==="."?null:i),i=""):i+=n;return i!==""&&t.push(i==="."?null:i),t}function _l(e){const t=[],i=/(["'])(.*?)\1/g;let s;for(;(s=i.exec(e))!==null;){const n=s[2].trim();if(n===""){t.push([]);continue}t.push(oo(n))}if(t.length===0){const n=e.split(/\r?\n/).map(r=>r.trim()).filter(Boolean);for(const r of n){const o=r.replace(/^["']|["']$/g,"").trim();o&&t.push(oo(o))}}return t}function au(e){const t=_l(e),i=new Set;for(const s of t)for(const n of s)n!==null&&n!==""&&i.add(n);return[...i]}function lu(e){var t;const i=[],s=e.length,n=((t=e[0])==null?void 0:t.length)||0;for(let r=0;r<s;r++)for(let o=0;o<n-1;o++){const a=e[r][o],l=e[r][o+1];if(a!==l){const c=i.find(h=>h.type==="vertical"&&h.from[0]===o+1&&h.to[0]===o+1&&h.from[1]<=r&&h.to[1]>=r);c?(c.to[1]=r+1,c.left&&a&&c.left.push(a),c.right&&l&&c.right.push(l)):i.push({type:"vertical",from:[o+1,r],to:[o+1,r+1],left:a?[a]:[],right:l?[l]:[]})}}for(let r=0;r<s-1;r++)for(let o=0;o<n;o++){const a=e[r][o],l=e[r+1][o];if(a!==l){const c=i.find(h=>h.type==="horizontal"&&h.from[1]===r+1&&h.to[1]===r+1&&h.from[0]<=o&&h.to[0]>=o);c?(c.to[0]=o+1,c.above&&a&&c.above.push(a),c.below&&l&&c.below.push(l)):i.push({type:"horizontal",from:[o,r+1],to:[o+1,r+1],above:a?[a]:[],below:l?[l]:[]})}}return cu(i)}function cu(e){for(const t of e)t.left&&(t.left=[...new Set(t.left)]),t.right&&(t.right=[...new Set(t.right)]),t.above&&(t.above=[...new Set(t.above)]),t.below&&(t.below=[...new Set(t.below)]);return e}function hu(e,t,i,s){const n=(parseFloat(e.colSizesComputed[i-1])||0)+t;let r;return r=(parseFloat(e.colSizesComputed[i])||0)-t,{left:n,right:r}}function du(e,t,i,s){const n=(parseFloat(e.rowSizesComputed[i-1])||0)+t;let r;return r=(parseFloat(e.rowSizesComputed[i])||0)-t,{top:n,bottom:r}}function uu(e,t,i,s){return!(e<s&&i<0||t<s&&i>0)}function pu(e,t,i,s){return!(e<s&&i<0||t<s&&i>0)}function fu(e,t){const[i,s]=e.from,[n,r]=e.to,o=t.gap.split(" "),a=o[1]||o[0]||"0px",l=o[0]||"0px",c=e.type==="horizontal"?"0":`calc(-50% - ${a} / 2)`,h=e.type==="horizontal"?`calc(-50% - ${l} / 2)`:"0",d={"grid-column":`${i+1} / ${n+1}`,"grid-row":`${s+1} / ${r+1}`,transform:`translate(${c}, ${h})`},u=parseFloat(t.fontSize);return e.type==="vertical"?d.width=`${Math.max(parseFloat(a),u)}px`:d.height=`${Math.max(parseFloat(l),u)}px`,d}var gu=Object.defineProperty,en=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&gu(t,i,n),n};const wl=class extends V{constructor(){super(...arguments),this.floating=!1,this.resizeableAreas=!1,this.areasResizeExceptions=[],this._layouts={},this._elements={},this.areaGroups={},this._templateIds=new Map,this._updateFunctions={},this._slotNames={notAllowed:"not-allowed",notFound:"not-found",emptyLayout:"empty-layout"},this._colSizesRaw=[],this._rowSizesRaw=[],this._colSizesComputed=[],this._rowSizesComputed=[],this._start=null,this.layoutsResize={},this._onMouseMove=t=>{if(!this._start||!this.layout)return;const i=t.clientX-this._start.x,s=t.clientY-this._start.y,n=this._start.divider,r=getComputedStyle(this),o=parseFloat(r.fontSize)*3;if(n.type==="vertical"){const a=n.from[0],l=this._colSizesRaw.length-1,c=a===l,h=hu(this._start,i,a);if(!uu(h.left,h.right,i,o))return;const d=Math.max(o,h.left),u=Math.max(o,h.right);this._colSizesRaw[a-1]=`${d}px`,this._colSizesRaw[a]=c?"1fr":`${u}px`,this.style.gridTemplateColumns=this._colSizesRaw.join(" ")}if(n.type==="horizontal"){const a=n.from[1],l=this._rowSizesRaw.length-1,c=a===l,h=du(this._start,s,a);if(!pu(h.top,h.bottom,s,o))return;const d=Math.max(o,h.top),u=Math.max(o,h.bottom);this._rowSizesRaw[a-1]=`${d}px`,this._rowSizesRaw[a]=c?"1fr":`${u}px`,this.style.gridTemplateRows=this._rowSizesRaw.join(" ")}this.layoutsResize[this.layout]={cols:this._colSizesRaw,rows:this._rowSizesRaw}},this._onMouseUp=()=>{window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),this._start=null},this.updateComponent={},this.emitLayoutChange=()=>{this.dispatchEvent(new Event("layoutchange"))}}set layouts(t){this._layouts=t,this._templateIds.clear()}get layouts(){return this._layouts}set elements(t){this._elements=t,this.setUpdateFunctions()}get elements(){return this._elements}getLayoutAreas(t){return au(t.template)}setUpdateFunctions(){const t={};for(const[i,s]of Object.entries(this.elements))"template"in s&&(t[i]=n=>{var r,o;(o=(r=this._updateFunctions)[i])==null||o.call(r,n)});this.updateComponent=t}disconnectedCallback(){super.disconnectedCallback(),this._templateIds.clear(),this._updateFunctions={},this.updateComponent={}}getTemplateId(t){let i=this._templateIds.get(t);return i||(i=Gs.newRandomId(),this._templateIds.set(t,i)),i}isAreaResizeable(t){return this.areasResizeExceptions.includes(t)?!1:this.resizeableAreas}canResizeVerticalDivider(t){const i=t.left||[],s=t.right||[];for(const n of i)if(!this.isAreaResizeable(n))return!1;for(const n of s)if(!this.isAreaResizeable(n))return!1;return!0}canResizeHorizontalDivider(t){const i=t.above||[],s=t.below||[];for(const n of i)if(!this.isAreaResizeable(n))return!1;for(const n of s)if(!this.isAreaResizeable(n))return!1;return!0}computeDividers(){var t;if(!this.layout)return;const i=(t=this.layouts[this.layout])==null?void 0:t.template;if(!i)return;const s=_l(i),n=lu(s),r=getComputedStyle(this),o=[];for(const a of n){let l=!1;if(a.type==="vertical"?l=this.canResizeVerticalDivider(a):l=this.canResizeHorizontalDivider(a),!l)continue;const c=p=>{this._colSizesRaw=this.style.gridTemplateColumns.split(" "),this._rowSizesRaw=this.style.gridTemplateRows.split(" "),this._rowSizesComputed=r.gridTemplateRows.split(" "),this._colSizesComputed=r.gridTemplateColumns.split(" "),this._start={x:p.clientX,y:p.clientY,divider:a,colSizesRaw:[...this._colSizesRaw],rowSizesRaw:[...this._rowSizesRaw],colSizesComputed:[...this._colSizesComputed],rowSizesComputed:[...this._rowSizesComputed]},window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp)},h=p=>{p.preventDefault()},d=fu(a,r),u=S`
        <div @mousedown=${c} @contextmenu=${h} class="grid-divider divider-${a.type}" style=${le(d)}>
          <div></div>
        </div>
      `;o.push(u)}return o}parseTabToken(t){const i=t.match(/^(\w+)\[([^\]]+)\]$/);return i?{name:i[1],keys:i[2].split(",").map(s=>s.trim())}:t}parseTabElementTokens(t){const i=[];let s="",n=0;for(const r of t)if(r==="[")n++,s+=r;else if(r==="]")n--,s+=r;else if(r===","&&n===0){const o=s.trim();o&&i.push(this.parseTabToken(o)),s=""}else s+=r;return s.trim()&&i.push(this.parseTabToken(s.trim())),i}extractElementKeys(t){const i=t.match(/^\w+:\w+\(([^)]+)\)$/);return i?this.parseTabElementTokens(i[1]).flatMap(s=>typeof s=="string"?[s]:s.keys):[t]}cleanUpdateFunctions(){if(!this.layout){this._updateFunctions={};return}const t=this.layouts[this.layout],i=this.getLayoutAreas(t).flatMap(s=>this.extractElementKeys(s));for(const s in this.elements)i.includes(s)||delete this._updateFunctions[s]}clean(){this.style.gridTemplate="";for(const t of[...this.children])Object.values(this._slotNames).some(i=>t.getAttribute("slot")===i)||t.remove();this.cleanUpdateFunctions()}emitElementCreation(t){this.dispatchEvent(new CustomEvent("elementcreated",{detail:t}))}getSanitizedLayoutTemplate(t){return t.replace(/\w+:(\w+)\([^)]*\)/g,"$1")}createElementFromDefinition(t,i){if(i instanceof HTMLElement)return i;if("template"in i){const{template:o,initialState:a}=i,l=this.getTemplateId(o),c=this.querySelector(`[data-grid-template-id="${l}"]`);if(c){let u=this._updateFunctions[t];if(!u){for(const[,p]of Object.entries(this._updateFunctions))if(this.querySelector(`[data-grid-template-id="${this.getTemplateId(o)}"]`)===c){u=p;break}}return u&&(this._updateFunctions[t]=u),c}const[h,d]=Wn.create(o,a);return h.setAttribute("data-grid-template-id",l),this._updateFunctions[t]=d,h}const s=this.getTemplateId(i),n=this.querySelector(`[data-grid-template-id="${s}"]`);if(n)return n;const r=Wn.create(i);return r.setAttribute("data-grid-template-id",this.getTemplateId(i)),r}render(){if(this.layout){const t=this.layouts[this.layout];if(t){if(!(t.guard??(()=>!0))())return this.clean(),S`<slot name=${this._slotNames.notAllowed}></slot>`;const i=this.getLayoutAreas(t),s=c=>c.split(",").map(h=>h.trim()).filter(Boolean),n=c=>{var h;return((h=t.elements)==null?void 0:h[c])||this.elements[c]},r=c=>{const h=n(c);return h&&typeof h=="object"&&"label"in h&&h.label?h.label:c},o=c=>{const h=n(c);if(h&&typeof h=="object"&&"icon"in h&&typeof h.icon=="string")return h.icon},a=i.map(c=>{const h=c.match(/^tabs:([^(]+)\(([^)]+)\)$/),d=c.match(/^panel:([^(]+)\(([^)]+)\)$/);if(!h&&!d){const y=n(c);if(!y)return null;const x=this.createElementFromDefinition(c,y);return x?(this.emitElementCreation({name:c,element:x}),x.style.gridArea=c,x):null}const u=h?h[1]:d[1],p=s(h?h[2]:d[2]);if(h){const y=`tabs-${u}`;let x=this.querySelector(`[data-grid-tabs-id="${y}"]`);x||(x=document.createElement("bim-tabs"),x.setAttribute("data-grid-tabs-id",y));const _=this.areaGroups[u];_!=null&&_.switchersFull?x.setAttribute("switchers-full",""):x.removeAttribute("switchers-full"),_!=null&&_.switchersCompact?x.setAttribute("switchers-compact",""):x.removeAttribute("switchers-compact"),x.style.gridArea=u;const k=[],w=this.parseTabElementTokens(h[2]);for(const M of w)if(typeof M=="string"){const C=n(M);if(!C)continue;const A=this.createElementFromDefinition(M,C);if(!A)continue;this.emitElementCreation({name:M,element:A});const D=`tab-${u}-${M}`;let P=x.querySelector(`[data-grid-tab-id="${D}"]`);P||(P=document.createElement("bim-tab"),P.setAttribute("data-grid-tab-id",D),P.name=M),P.label=r(M),P.icon=o(M),P.innerHTML="",P.appendChild(A),k.push(P)}else{const{name:C,keys:A}=M,D=this.areaGroups[C],P=`tab-${u}-${C}`;let T=x.querySelector(`[data-grid-tab-id="${P}"]`);T||(T=document.createElement("bim-tab"),T.setAttribute("data-grid-tab-id",P),T.name=C),T.label=(D==null?void 0:D.label)??C,T.icon=D==null?void 0:D.icon;const G=`panel-${u}-${C}`;let j=T.querySelector(`[data-grid-panel-id="${G}"]`);j||(j=document.createElement("bim-panel"),j.setAttribute("data-grid-panel-id",G)),j.innerHTML="";for(const O of A){const $=n(O);if(!$)continue;const N=this.createElementFromDefinition(O,$);N&&(this.emitElementCreation({name:O,element:N}),j.appendChild(N))}T.innerHTML="",T.appendChild(j),k.push(T)}return x.innerHTML="",x.append(...k),x}const g=`panel-${u}`;let f=this.querySelector(`[data-grid-panel-id="${g}"]`);f||(f=document.createElement("bim-panel"),f.setAttribute("data-grid-panel-id",g));const b=this.areaGroups[u];b!=null&&b.label?f.setAttribute("label",b.label):f.removeAttribute("label"),b!=null&&b.icon?f.setAttribute("icon",b.icon):f.removeAttribute("icon"),f.style.gridArea=u;const m=[];for(const y of p){const x=n(y);if(!x)continue;const _=this.createElementFromDefinition(y,x);_&&(this.emitElementCreation({name:y,element:_}),m.push(_))}return f.innerHTML="",f.append(...m),f}).filter(c=>c!==null);this.clean(),this.style.gridTemplate=this.getSanitizedLayoutTemplate(t.template);const l=this.layoutsResize[this.layout];l&&(this.style.gridTemplateColumns=l.cols.join(" "),this.style.gridTemplateRows=l.rows.join(" ")),this.append(...a),this.emitLayoutChange()}else return this.clean(),S`<slot name=${this._slotNames.notFound}></slot>`}else return this.clean(),this.emitLayoutChange(),S`<slot name=${this._slotNames.emptyLayout}></slot>`;return S`
      ${this.resizeableAreas?this.computeDividers():null}
      <slot></slot>
    `}};wl.styles=F`
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
      padding: 1rem;
      gap: 1rem;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
    }

    :host(:not([floating])) {
      --bim-panel--bdrs: 0;
      /* background-color: var(--bim-ui_bg-base); */
      gap: 1px;
    }

    .grid-divider {
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      user-select: none;
    }

    .grid-divider > div {
      transition: background-color 150ms ease-in-out;
    }
    
    .grid-divider:hover > div {
      background-color: var(--bim-ui_accent-base);
    }
    
    .divider-horizontal {
      /* background-color: #ff00003d; */
      transform: translateY(-50%);
      cursor: n-resize;
    }
    
    .divider-horizontal > div {
      height: 3px;
      width: 100%;
      /* transform: translateY(-50%); */
    }
    
    .divider-vertical {
      /* background-color: #ff00003d; */
      transform: translateX(-50%);
      cursor: e-resize;
    }
    
    .divider-vertical > div {
      width: 3px;
      height: 100%;
      /* transform: translateX(-50%); */
    }
  `;let Gi=wl;en([v({type:Boolean,reflect:!0})],Gi.prototype,"floating");en([v({type:String,reflect:!0})],Gi.prototype,"layout");en([v({type:Boolean,attribute:"areas-resizeable",reflect:!0})],Gi.prototype,"resizeableAreas");en([v({type:Array,attribute:!1})],Gi.prototype,"areasResizeExceptions");const Xn=class extends V{render(){return S`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};Xn.styles=F`
    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-xl));
      width: var(--bim-icon--fz, var(--bim-ui_size-xl));
      color: var(--bim-icon--c);
      transition: all 0.15s;
      display: flex;
    }
  `,Xn.properties={icon:{type:String}};let bu=Xn;var mu=Object.defineProperty,sn=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&mu(t,i,n),n};const kl=class extends V{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const i of this.children){const s=i;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const i=[...this.children];for(const s in t){const n=i.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const r=n,o=t[s];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return S`
      <div class="parent">
        ${this.label||this.icon?S`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};kl.styles=F`
    :host {
      flex: 1;
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      user-select: none;
      flex: 1;
      align-items: var(--bim-input--ai, normal);
    }

    bim-label {
      margin-top: var(--bim-input--label-mt, 0);
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .input {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 25px;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0 12px);
      background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-50));
      border: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
      transition: all 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: var(--bim-input--maxw, fit-content);
    }
  `;let Qi=kl;sn([v({type:String,reflect:!0})],Qi.prototype,"name");sn([v({type:String,reflect:!0})],Qi.prototype,"label");sn([v({type:String,reflect:!0})],Qi.prototype,"icon");sn([v({type:Boolean,reflect:!0})],Qi.prototype,"vertical");var vu=Object.defineProperty,li=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&vu(t,i,n),n},yn;let He=(yn=class extends V{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){var e;const t=(e=this.label??this.textContent)==null?void 0:e.trim();if(t)return Is(t)}updated(){var e;const t=((e=this.label??this.textContent)==null?void 0:e.trim())??"";this.labelHidden&&t?this.setAttribute("aria-label",t):this.removeAttribute("aria-label")}render(){const e=this.label??this.textContent??"";return S`
      <div class="parent" title=${e}>
        ${te(this.img,()=>S`<img src=${this.img} alt=${e} />`)}
        ${te(!this.iconHidden&&this.icon,()=>S`<bim-icon .icon=${this.icon}></bim-icon>`)}
        ${this.label!==void 0?this.label?S`<p>${this.label}</p>`:ot:S`<p><slot></slot></p>`}
      </div>
    `}},yn.styles=F`
    :host {
      --bim-icon--c: var(--bim-label--ic);
      box-sizing: border-box;
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-80));
      font-size: var(--bim-label--fz, var(--bim-ui_size-base));
      display: block;
      white-space: nowrap;
      transition: color var(--bim-ui_duration-fast, 0.15s),
                  opacity var(--bim-ui_duration-fast, 0.15s);
      user-select: var(--bim-label--us, none);
      overflow: hidden;
    }

    @media (prefers-reduced-motion: reduce) {
      :host {
        transition: none;
      }
    }

    /* :host([icon]) {
      line-height: 1;
    } */

    .parent {
      display: flex;
      align-items: center;
      gap: var(--bim-label--gap, 0.375rem);
      height: 100%;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    .parent p {
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    :host([label-hidden]) .parent p,
    :host(:empty) .parent p {
      display: none;
    }

    img {
      height: 100%;
      aspect-ratio: 1;
      border-radius: var(--bim-label_img--bdrs, 100%);
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
  `,yn);li([v({type:String})],He.prototype,"img");li([v({type:Boolean,attribute:"label-hidden",reflect:!0})],He.prototype,"labelHidden");li([v({type:String,reflect:!0})],He.prototype,"icon");li([v({type:Boolean,attribute:"icon-hidden"})],He.prototype,"iconHidden");li([v({type:Boolean,reflect:!0})],He.prototype,"vertical");li([v({type:String})],He.prototype,"label");var yu=Object.defineProperty,xu=Object.getOwnPropertyDescriptor,Ot=(e,t,i,s)=>{for(var n=s>1?void 0:s?xu(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&yu(t,i,n),n};const Sl=class extends V{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=ti(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:i}=this._input;i&&this.setValue(i.value)}setValue(t){const{value:i}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,i&&(i.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:i}=t,s=this.value;let n=!1;const r=l=>{var c;n=!0;const{clientX:h}=l,d=this.step??1,u=((c=d.toString().split(".")[1])==null?void 0:c.length)||0,p=1/(this.sensitivity??1),g=(h-i)/p;if(Math.floor(Math.abs(g))!==Math.abs(g))return;const f=s+g*d;this.setValue(f.toFixed(u))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},a=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const i=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",i))};window.addEventListener("keydown",i)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=S`
      ${this.pref||this.icon?S`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Bt(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?S`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,i=this.min??-1/0,s=this.max??1/0,n=100*(this.value-i)/(s-i),r=S`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref?S`<bim-label style="z-index: 1; margin-right: 0.125rem"
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?S`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return S`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};Sl.styles=F`
    :host {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
      /* flex: 1; */
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
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      --bim-label--fz: var(--bim-ui_size-sm);
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
      font-size: var(--bim-ui_size-base);
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
  `;let Mt=Sl;Ot([v({type:String,reflect:!0})],Mt.prototype,"name",2);Ot([v({type:String,reflect:!0})],Mt.prototype,"icon",2);Ot([v({type:String,reflect:!0})],Mt.prototype,"label",2);Ot([v({type:String,reflect:!0})],Mt.prototype,"pref",2);Ot([v({type:Number,reflect:!0})],Mt.prototype,"min",2);Ot([v({type:Number,reflect:!0})],Mt.prototype,"value",1);Ot([v({type:Number,reflect:!0})],Mt.prototype,"step",2);Ot([v({type:Number,reflect:!0})],Mt.prototype,"sensitivity",2);Ot([v({type:Number,reflect:!0})],Mt.prototype,"max",2);Ot([v({type:String,reflect:!0})],Mt.prototype,"suffix",2);Ot([v({type:Boolean,reflect:!0})],Mt.prototype,"vertical",2);Ot([v({type:Boolean,reflect:!0})],Mt.prototype,"slider",2);var _u=Object.defineProperty,wu=Object.getOwnPropertyDescriptor,Ji=(e,t,i,s)=>{for(var n=s>1?void 0:s?wu(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&_u(t,i,n),n};const Ml=class extends V{constructor(){super(...arguments),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this._animation=null}set hidden(t){this._hidden=t,this.isConnected&&(this.animatePanel(),this.dispatchEvent(new Event("hiddenchange")))}get hidden(){return this._hidden}get value(){return $s(this,this.valueTransform)}get activationButton(){console.warn("[bim-panel] activationButton is deprecated. Wire up your own bim-button instead: btn.onclick = () => (panel.hidden = !panel.hidden).")}animatePanel(){var t;const i=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];(t=this._animation)==null||t.cancel(),this._animation=this.animate(i,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}disconnectedCallback(){super.disconnectedCallback()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const i of t)i.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const i of t)i.collapsed=!1}render(){return S`
      <div class="parent" role="region" aria-label=${this.label||this.name||ot}>
        ${this.label||this.name||this.icon?S`
            <div class="header">
              <bim-label .icon=${this.icon}>${this.label||this.name}</bim-label>
              <div class="header-end">
                <slot name="header-end"></slot>
              </div>
            </div>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};Ml.styles=[ye.scrollbar,F`
      :host {
        flex: 1;
        /* display: flex; */
        display: block;
        height: 100%;
        background-color: var(--bim-panel--bg, var(--bim-ui_bg-contrast-10));
        overflow: auto;
        border-radius: 0.75rem;
        border: var(--bim-panel--border, 1px solid var(--bim-ui_bg-contrast-20));
        --bim-panel-section--header-display: flex;
        --bim-panel-section--border: none;
        --bim-panel-section--bdrs: 0;
        --bim-panel-section--bg: transparent;
      }

      :host([hidden]) {
        max-height: 0;
        max-width: 0;
        opacity: 0;
      }

      .parent {
        /* display: flex; */
        display: grid;
        grid-template: "header" auto "content" minmax(0, 1fr);
        height: 100%;
        /* flex: 1; */
        /* flex-direction: column; */
        /* pointer-events: auto; */
        /* overflow: auto; */
      }

      .header {
        grid-area: header;
        display: var(--bim-panel--header-display, flex);
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        height: 2rem;
        padding: 5px 10px;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      .header bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-100));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-lg));
        pointer-events: none;
      }

      .header-end {
        display: flex;
        align-items: center;
        gap: 0.375rem;
      }

      :host([header-hidden]) .header {
        display: none;
      }

      .sections {
        grid-area: content;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex: 1;
      }

    `];let Ne=Ml;Ji([v({type:String,reflect:!0})],Ne.prototype,"icon",2);Ji([v({type:String,reflect:!0})],Ne.prototype,"name",2);Ji([v({type:String,reflect:!0})],Ne.prototype,"label",2);Ji([v({type:Boolean,reflect:!0})],Ne.prototype,"hidden",1);Ji([v({type:Boolean,attribute:"header-hidden",reflect:!0})],Ne.prototype,"headerHidden",2);var ku=Object.defineProperty,Zi=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&ku(t,i,n),n};const Cl=class extends V{constructor(){super(...arguments),this.valueTransform={}}connectedCallback(){super.connectedCallback(),this.fixed===void 0&&(this.fixed=!this.closest("bim-panel"))}get value(){const t=this.parentElement;let i;return t instanceof Ne&&(i=t.valueTransform),Object.keys(this.valueTransform).length!==0&&(i=this.valueTransform),$s(this,i)}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}onHeaderKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.onHeaderClick())}render(){const t=this.label||this.icon||this.name||this.fixed,i=S`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=S`
      <div
        class="header"
        role="button"
        tabindex=${this.fixed?-1:0}
        aria-expanded=${!this.collapsed}
        title=${this.label||ot}
        @click=${this.onHeaderClick}
        @keydown=${this.onHeaderKeydown}
      >
        ${this.label||this.icon||this.name?S`<bim-label aria-hidden="true" .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="header-end">
          <slot name="header-end"></slot>
          ${this.fixed?null:i}
        </div>
      </div>
    `;return S`
      <div class="parent">
        ${t?s:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};Cl.styles=[ye.scrollbar,F`
      :host {
        /* flex: 1; */
        display: block;
        pointer-events: auto;
        background-color: var(--bim-panel-section--bg, var(--bim-ui_bg-contrast-10));
        border: var(--bim-panel-section--border, 1px solid var(--bim-ui_bg-contrast-20));
        border-radius: var(--bim-panel-section--bdrs, 0.75rem);
      }

      :host(:last-child:not([collapsed])) {
        flex: 1;
      }

      :host .parent {
        display: grid;
        grid-template: "header" auto "content" minmax(0, 1fr);
        height: 100%;
        /* display: flex; */
        /* flex-direction: column; */
        /* height: 100%; */
      }

      :host(:not([fixed])) .header:hover {
        cursor: pointer;
      }

      :host(:not([fixed])) .header:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      @media (prefers-reduced-motion: reduce) {
        .expand-icon {
          transition: none;
        }
      }

      :host(:not([fixed])) .header:hover > bim-label {
        --bim-label--c: var(--bim-ui_accent-base);
      }

      :host(:not([fixed])) .header:hover .expand-icon {
        fill: var(--bim-ui_accent-base);
      }

      .header > bim-label {
        --bim-label--fz: var(--bim-ui_size-lg);
        --bim-label--c: var(
          --bim-panel-section_hc,
          var(--bim-ui_bg-contrast-100)
        );
      }

      .header {
        grid-area: "header";
        display: var(--bim-panel-section--header-display, flex);
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 2rem;
        padding: 5px 10px;
      }

      .expand-icon {
        fill: var(--bim-ui_bg-contrast-80);
        transition: transform 0.2s, fill 0.15s;
      }

      :host([collapsed]) .expand-icon {
        transform: rotateZ(-180deg);
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-ui_size-sm);
      }

      .header {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:last-child[collapsed]) .header {
        border-bottom: none;
      }

      .components {
        grid-area: content;
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 10px;
        gap: 0.75rem;
        box-sizing: border-box;
        overflow: auto;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
      }

      .header-end {
        display: flex;
        align-items: center;
        gap: 0.375rem;
      }

      bim-label {
        pointer-events: none;
      }

    `];let ci=Cl;Zi([v({type:String,reflect:!0})],ci.prototype,"icon");Zi([v({type:String,reflect:!0})],ci.prototype,"label");Zi([v({type:String,reflect:!0})],ci.prototype,"name");Zi([v({type:Boolean,reflect:!0})],ci.prototype,"fixed");Zi([v({type:Boolean,reflect:!0})],ci.prototype,"collapsed");var Su=Object.defineProperty,We=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Su(t,i,n),n};const El=class extends V{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._pendingValue=void 0,this._mutationObserver=new MutationObserver(()=>this._syncOptions()),this._options=[],this._value=null,this._onOptionClick=t=>{for(const i of Array.from(this.children))i instanceof Kt&&(i.checked=i===t);this._value=t,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this._onKeyDown=t=>{const i=this._options;if(!i.length)return;const s=this._value?i.indexOf(this._value):0;let n=s;if(t.key==="ArrowRight"||t.key==="ArrowDown")t.preventDefault(),n=(s+1)%i.length;else if(t.key==="ArrowLeft"||t.key==="ArrowUp")t.preventDefault(),n=(s-1+i.length)%i.length;else if(t.key==="Home")t.preventDefault(),n=0;else if(t.key==="End")t.preventDefault(),n=i.length-1;else return;this._onOptionClick(i[n]),this.updateComplete.then(()=>{var r;(r=this.renderRoot.querySelectorAll(".option")[n])==null||r.focus()})}}set value(t){const i=this._findOption(t);if(!i){this._pendingValue=t;return}this._pendingValue=void 0;for(const s of Array.from(this.children))s instanceof Kt&&(s.checked=s===i);this._value=i,this._canEmitEvents&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}get value(){var t;return(t=this._value)==null?void 0:t.value}connectedCallback(){super.connectedCallback(),this._mutationObserver.observe(this,{childList:!0}),customElements.whenDefined("bim-option").then(()=>this._syncOptions())}disconnectedCallback(){super.disconnectedCallback(),this._mutationObserver.disconnect()}firstUpdated(){const t=Array.from(this.children).find(i=>i instanceof Kt&&i.checked);t&&(this._value=t),this._canEmitEvents=!0}_syncOptions(){this._options=Array.from(this.children).filter(t=>t.tagName==="BIM-OPTION"),this._pendingValue!==void 0&&(this.value=this._pendingValue)}_findOption(t){for(const i of Array.from(this.children))if(i instanceof Kt&&(i.label===t||i.value===t))return i}render(){return S`
      <bim-input .vertical=${this.vertical} .label=${this.label} .icon=${this.icon}>
        <div
          class="options"
          role="tablist"
          aria-label=${Mi(this.label)}
          @keydown=${this._onKeyDown}
        >
          ${this._options.map(t=>{const i=t===this._value;return S`
              <div
                class="option ${i?"checked":""}"
                role="tab"
                aria-selected=${i}
                tabindex=${i?0:-1}
                @click=${()=>this._onOptionClick(t)}
              >
                <bim-label
                  .icon=${t.icon}
                  .img=${t.img}

                  .vertical=${t.vertical}
                >${t.label}</bim-label>
              </div>
            `})}
        </div>
      </bim-input>
    `}};El.styles=F`
    :host {
      --bim-input--g: 0;
      --bim-input--p: 0;
      --bim-input--olw: 0;
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      display: block;
    }

    .options {
      display: flex;
      flex: 1;
      align-self: stretch;
    }

    .option {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 0 0.5rem;
      cursor: pointer;
      user-select: none;
      transition: background-color 0.15s;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    .option:not(.checked):hover {
      background-color: var(--bim-selector--option-hover-bgc, var(--bim-ui_bg-contrast-30));
    }

    .option.checked {
      background-color: var(--bim-selector--option-checked-bgc, var(--bim-ui_bg-contrast-40));
      --bim-label--c: var(--bim-ui_bg-contrast-100);
    }

    .option:focus-visible {
      outline: 2px solid var(--bim-ui_main-base);
      outline-offset: -2px;
    }

    /* ── Underline variant ── */

    :host([variant="underline"]) {
      --bim-input--bgc: transparent;
      --bim-input--olw: 0;
      --bim-input--bdrs: 0;
    }

    :host([variant="underline"]) .option {
      border-radius: 0;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      border-bottom: 2px solid transparent;
      transition: border-color 0.15s;
    }

    :host([variant="underline"]) .option.checked {
      background-color: transparent;
      --bim-label--c: var(--bim-ui_accent-base);
      border-bottom-color: var(--bim-ui_accent-base);
    }

    :host([variant="underline"]) .option:not(.checked):hover {
      background-color: transparent;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }

    :host([variant="underline"]) .option:focus-visible {
      outline-offset: -3px;
    }

    @media (prefers-reduced-motion: reduce) {
      .option,
      :host([variant="underline"]) .option {
        transition: none;
      }
    }
  `;let ke=El;We([v({type:String,reflect:!0})],ke.prototype,"name");We([v({type:String,reflect:!0})],ke.prototype,"icon");We([v({type:String,reflect:!0})],ke.prototype,"label");We([v({type:Boolean,reflect:!0})],ke.prototype,"vertical");We([v({type:String,reflect:!0})],ke.prototype,"variant");We([gt()],ke.prototype,"_options");We([gt()],ke.prototype,"_value");function Mu(e,t,i){if(t.length===0||e.length===0)return e;const s=Ge.flattenData(e);return mr(s,t,i)}function mr(e,t,i){if(t.length===0)return e;const[s,...n]=t,r=i==null?void 0:i[s];return r?Cu(e,s,r,n,i):Du(e,s,n,i)}function Cu(e,t,i,s,n){const r=new Map;for(const o of e){const a=o.data[t];if(a===void 0)continue;const l=i(a,o.data),c=l.join("|");r.has(c)||r.set(c,{path:l,rows:[]}),r.get(c).rows.push(o)}return Eu(r,t,s,n)}function Eu(e,t,i,s){const n=new Au;for(const{path:r,rows:o}of e.values())n.addPath(r,o,t);return n.buildResult(i,s)}function Du(e,t,i,s){const n=new Map;for(const o of e){const a=o.data[t];n.has(a)||n.set(a,[]),n.get(a).push(o)}const r=[];for(const[o,a]of n){const l=i.length>0?mr(a,i,s):a;r.push({data:{[t]:o},children:l,_isComputedGroup:!0})}return r}class Au{constructor(){this.tree=new Map}addPath(t,i,s){let n=this.tree;for(let r=0;r<t.length;r++){const o=t[r];n.has(o)||n.set(o,{value:o,column:s,children:new Map,rows:[]});const a=n.get(o);r===t.length-1&&a.rows.push(...i),n=a.children}}buildResult(t,i){return this.convertMapToResult(this.tree,t,i)}convertMapToResult(t,i,s){const n=[];for(const r of t.values()){const o=[];if(r.children.size>0&&o.push(...this.convertMapToResult(r.children,i,s)),r.rows.length>0){const a=i.length>0?mr(r.rows,i,s):r.rows;o.push(...a)}n.push({data:{[r.column]:r.value},children:o,_isComputedGroup:!0})}return n}}const Pu=()=>S`
    <style>
      div {
        display: flex;
        gap: 0.375rem;
        border-radius: 0.25rem;
        min-height: 1.25rem;
      }

      [data-type="row"] {
        background-color: var(--bim-ui_bg-contrast-20);
        animation: row-loading 1s linear infinite alternate;
        padding: 0.5rem;
      }

      [data-type="cell"] {
        background-color: var(--bim-ui_bg-contrast-40);
        flex: 0.25;
      }

      @keyframes row-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-40);
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
  `,Ou=()=>S`
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
  `;var Tu=Object.defineProperty,zu=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Tu(t,i,n),n};const Dl=class extends V{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.table=null,this.group=null,this.row=null,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}get dataTransform(){var t,i,s,n;const r=(i=(t=this.row)==null?void 0:t.dataTransform)==null?void 0:i[this.column],o=(s=this.table)==null?void 0:s.dataTransform[this.column],a=(n=this.table)==null?void 0:n.defaultContentTemplate;return r||o||a}get headersTransform(){var t;return(t=this.table)==null?void 0:t.headersTransform[this.column]}_renderValue(t){return typeof t=="string"||typeof t=="boolean"||typeof t=="number"?S`<bim-label>${t}</bim-label>`:t}get templateValue(){var t;const{data:i,rowData:s,group:n}=this;if((t=this.row)!=null&&t.isHeader){const o=this.headersTransform;return o&&i!==null&&i!==void 0?this._renderValue(o(this.column)):i!=null?S`<bim-label>${i}</bim-label>`:ot}const r=this.dataTransform;return r&&i!=null&&n?this._renderValue(r(i,s,n)):i!=null?S`<bim-label>${i}</bim-label>`:ot}connectedCallback(){var t,i;super.connectedCallback(),(t=this.group)!=null&&t.data._isComputedGroup&&(i=this.table)!=null&&i.groupedBy.includes(this.column)?(this.style.gridColumn="1",this.style.gridRow="1"):this.style.gridArea=this.column.toString()}render(){return S`${this.templateValue}`}};Dl.styles=F`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      padding: var(--bim-table-cell--padding, 4px);
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    
    :host([data-cell-header]) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
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
  `;let Al=Dl;zu([v({type:String,reflect:!0})],Al.prototype,"column");const Pl=class extends V{constructor(){super(...arguments),this._groups=[],this.group=this.closest("bim-table-group"),this._data=[],this.table=this.closest("bim-table")}get data(){var t;return((t=this.group)==null?void 0:t.data.children)??this._data}set data(t){this._data=t}clean(){for(const t of this._groups)t.remove();this._groups=[]}render(){return this.clean(),S`
      <slot></slot>
      ${this.data.map(t=>{var i;const s=document.createElement("bim-table-group");return this._groups.push(s),s.table=this.table,s.data=t,s.depth=(((i=this.group)==null?void 0:i.depth)??-1)+1,s})}
    `}};Pl.styles=F`
    :host {
      --bim-button--bgc: transparent;
      position: relative;
      display: block;
      overflow: hidden;
      grid-area: Children;
    }

    :host([hidden]) {
      height: 0;
      opacity: 0;
    }

    ::slotted(.branch.branch-vertical) {
      top: 0;
      bottom: 1.125rem;
    }
  `;let Lu=Pl;var Ru=Object.defineProperty,$u=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Ru(t,i,n),n};const Ol=class extends V{constructor(){super(...arguments),this.childrenHidden=!0,this.table=null,this.depth=0,this.data={data:{}}}get rowElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-row"):null}get childrenElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-children"):null}get _isChildrenEmpty(){return!(this.data.children&&this.data.children.length!==0)}connectedCallback(){if(super.connectedCallback(),!this.table){this.childrenHidden=!0;return}const{expandedLevels:t}=this.table;typeof t=="number"?this.childrenHidden=this.depth>=t:this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}disconnectedCallback(){super.disconnectedCallback(),this.data={data:{}}}toggleChildren(t){this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,this.animateTableChildren(!0)}animateTableChildren(t=!0){if(!t){requestAnimationFrame(()=>{var o;const a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(o=this.renderRoot.querySelector("bim-table-children"))==null?void 0:o.querySelector(".branch-vertical");a.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),c==null||c.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const i=500,s=0,n=200,r=350;requestAnimationFrame(()=>{var o;const a=this.renderRoot.querySelector("bim-table-children"),l=this.renderRoot.querySelector(".caret"),c=this.renderRoot.querySelector(".branch-vertical"),h=(o=this.renderRoot.querySelector("bim-table-children"))==null?void 0:o.querySelector(".branch-vertical"),d=()=>{var b;const m=(b=a==null?void 0:a.renderRoot)==null?void 0:b.querySelectorAll("bim-table-group");m==null||m.forEach((y,x)=>{y.style.setProperty("opacity","0"),y.style.setProperty("left","-30px");const _=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];y.animate(_,{duration:i/2,delay:50+x*s,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},u=()=>{const b=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];l==null||l.animate(b,{duration:r,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},p=()=>{const b=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];c==null||c.animate(b,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:s,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},g=()=>{var b;const m=(b=this.renderRoot.querySelector("bim-table-row"))==null?void 0:b.querySelector(".branch-horizontal");if(m){m.style.setProperty("transform-origin","center right");const y=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];m.animate(y,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},f=()=>{const b=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];h==null||h.animate(b,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(s+n)*.7})};d(),u(),p(),g(),f()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(t=>{var i,s,n;if(!this.childrenHidden){t.style.setProperty("transform","translateY(-50%) rotate(90deg)");const r=(i=t.parentElement)==null?void 0:i.querySelector(".branch-horizontal");r&&r.style.setProperty("transform","scaleX(0)");const o=(n=(s=t.parentElement)==null?void 0:s.parentElement)==null?void 0:n.querySelectorAll(".branch-vertical");o==null||o.forEach(a=>{a.style.setProperty("transform","scaleY(1)")})}})}render(){var t,i;if(!this.table)return S`${ot}`;const s=this.table.getGroupIndentation(this.data)??0;let n;if(!this.table.noIndentation){const h={left:`calc(${s-1} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows?2.05:.5625}rem)`};n=S`<div style=${le(h)} class="branch branch-horizontal"></div>`}const r=S`
      ${this.table.noIndentation?null:S`
            <style>
              .branch-vertical {
                left: calc(${s} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows?1.9375:.5625}rem);
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `;let o;if(!this.table.noIndentation){const h=document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.setAttribute("height","9.9"),h.setAttribute("width","7.5"),h.setAttribute("viewBox","0 0 4.6666672 7.7"),this.table.noCarets){const u=document.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("cx","2.3333336"),u.setAttribute("cy","3.85"),u.setAttribute("r","2.5"),h.append(u)}else{const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),h.append(u)}const d={left:`calc(${s} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows?1.5:.125}rem)`,cursor:`${this.table.noCarets?"unset":"pointer"}`};o=S`<div @click=${u=>{var p;(p=this.table)!=null&&p.noCarets||(u.stopPropagation(),this.toggleChildren())}} style=${le(d)} class="caret">${h}</div>`}const a=((t=this.data.children)==null?void 0:t.some(h=>h._isComputedGroup))??!1,l=!this._isChildrenEmpty&&(!((i=this.table)!=null&&i.groupsOnly)||a);let c;return l&&!this.childrenHidden&&(c=S`
        <bim-table-children ${Bt(h=>{if(!h)return;const d=h;d.table=this.table,d.group=this})}>${r}</bim-table-children>
      `),S`
      <div class="parent">
        <bim-table-row ${Bt(h=>{var d;if(!h)return;const u=h;u.table=this.table,u.group=this,(d=this.table)==null||d.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:u}}))})}>
          ${te(l,()=>r)}
          ${te(s!==0,()=>n)}
          ${te(!this.table.noIndentation&&l,()=>o)}
        </bim-table-row>
        ${c}
      </div>
    `}};Ol.styles=F`
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
      transform-origin: top center;
      transform: scaleY(0);
    }

    .branch-horizontal {
      top: 50%;
      width: 1rem;
      border-bottom: 1px dotted var(--bim-ui_bg-contrast-40);
    }

    .branch-horizontal {
      transform-origin: center left;
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
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let Tl=Ol;$u([v({type:Boolean,attribute:"children-hidden",reflect:!0})],Tl.prototype,"childrenHidden");var Iu=Object.defineProperty,nn=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Iu(t,i,n),n};const zl=class extends V{constructor(){super(...arguments),this.selected=!1,this.group=null,this._data={},this.isHeader=!1,this.table=null,this.onTableColumnsChange=()=>{this.table&&this.requestUpdate()},this._intersecting=!1,this._timeOutDelay=250,this._observer=new IntersectionObserver(t=>{window.clearTimeout(this._intersectTimeout),this._intersectTimeout=void 0,t[0].isIntersecting?this._intersectTimeout=window.setTimeout(()=>{this._intersecting=!0},this._timeOutDelay):this._intersecting=!1},{rootMargin:"36px"}),this._isRangeClick=!1,this._onCheckboxClick=t=>{var i;t.stopPropagation();const s=((i=this.table)==null?void 0:i.rangeSelectKey)??"ctrlKey";this._isRangeClick=t[s]},this._headerCheckboxUpdatePending=!1,this._onDataSelected=()=>{var t;if(this.isHeader){this._updateHeaderCheckbox();return}this.toggleAttribute("selected",(t=this.table)==null?void 0:t.selection.has(this.data))},this._onDataDeselected=()=>{var t;if(this.isHeader){this._updateHeaderCheckbox();return}(t=this.table)!=null&&t.selection.has(this.data)||this.removeAttribute("selected")},this._onDataSelectionCleared=()=>{if(this.isHeader){this._updateHeaderCheckbox();return}this.removeAttribute("selected")},this.dataTransform=null,this._interval=null,this.clearDataTransform=()=>{this.dataTransform=null,this._interval!==null&&(clearInterval(this._interval),this._interval=null)}}get columns(){var t;return((t=this.table)==null?void 0:t.columns)??[]}get hiddenColumns(){var t;return((t=this.table)==null?void 0:t.hiddenColumns)??[]}get groupData(){var t;return(t=this.group)==null?void 0:t.data}get data(){var t;return((t=this.group)==null?void 0:t.data.data)??this._data}set data(t){this._data=t}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const i=t.target;if(this.isHeader||(this.selected=i.value),i.value)if(!this.isHeader&&this._isRangeClick&&this.table._lastSelectedData){const s=Ge.flattenData(this.table.value).map(o=>o.data),n=s.indexOf(this.table._lastSelectedData),r=s.indexOf(this.data);if(n!==-1&&r!==-1){const[o,a]=n<r?[n,r]:[r,n];this.table.selection.add(...s.slice(o,a+1))}}else{let s=[this.data];this.isHeader&&(s=Ge.flattenData(this.table.value).map(n=>n.data)),this.table.selection.add(...s),this.isHeader&&this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}})),this.isHeader||(this.table._lastSelectedData=this.data)}else this.isHeader?this.table.selection.clear():(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})));this._isRangeClick=!1}firstUpdated(t){super.firstUpdated(t),queueMicrotask(()=>{if(!this.isConnected)return;const i=this.getBoundingClientRect();i.top<window.innerHeight&&i.bottom>0&&(this._intersecting=!0),this._observer.observe(this)})}_updateHeaderCheckbox(){this._headerCheckboxUpdatePending||(this._headerCheckboxUpdatePending=!0,requestAnimationFrame(()=>{this._headerCheckboxUpdatePending=!1;const t=this.renderRoot.querySelector("bim-checkbox");if(!t||!this.table)return;const i=Ge.flattenData(this.table.value).map(n=>n.data),s=i.filter(n=>this.table.selection.has(n)).length;t.checked=s>0&&s===i.length,t.indeterminate=s>0&&!t.checked}))}connectedCallback(){super.connectedCallback(),this.table&&(this.table.addEventListener("dataselected",this._onDataSelected),this.table.addEventListener("datadeselected",this._onDataDeselected),this.table.addEventListener("dataselectioncleared",this._onDataSelectionCleared),this.toggleAttribute("selected",this._isSelected),this.table.addEventListener("columnschange",this.onTableColumnsChange))}disconnectedCallback(){var t,i,s;super.disconnectedCallback(),this._observer.unobserve(this),(t=this.table)==null||t.removeEventListener("dataselected",this._onDataSelected),(i=this.table)==null||i.removeEventListener("datadeselected",this._onDataDeselected),(s=this.table)==null||s.removeEventListener("dataselectioncleared",this._onDataSelectionCleared),this.data={},this.table=null}applyAdaptativeDataTransform(t){this.addEventListener("pointerenter",()=>{this.dataTransform=t,this._interval=window.setInterval(()=>{this.matches(":hover")||this.clearDataTransform()},50)})}render(){var t,i,s;if(!(this.table&&this._intersecting))return S`${ot}`;const n=this.columns.filter(u=>!this.hiddenColumns.includes(u.name)),r=n.map(u=>u.name),o=n.map(u=>u.width);this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${r.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${o.join(" ")}`;let a=!1,l=!1;if(this.isHeader&&this.table.selectableRows){const u=Ge.flattenData(this.table.value).map(g=>g.data),p=u.filter(g=>this.table.selection.has(g)).length;a=p>0&&p===u.length,l=p>0&&!a}const c=this.table.getRowIndentation(this.data)??0,h=[];let d=this.data;if((t=this.groupData)!=null&&t._isComputedGroup){const u=this.table.dataKeys.filter(p=>{var g;return!((g=this.table)!=null&&g.hiddenColumns.includes(p))});for(const p of u)r.indexOf(p)!==0&&(d[p]="")}for(const u in d){if(!((i=this.groupData)!=null&&i._isComputedGroup)&&this.hiddenColumns.includes(u))continue;const p=document.createElement("bim-table-cell");p.group=this.group,p.table=this.table,p.row=this,p.column=u;const g=(s=this.group)!=null&&s.data._isComputedGroup&&this.table.groupedBy.includes(u)?0:r.indexOf(u);g===0&&(p.style.marginLeft=this.table.noIndentation?"0":`calc(${c} * var(--bim-table--indent-step, 1rem) + 0.9375rem)`),p.setAttribute("data-column-index",String(g)),p.toggleAttribute("data-no-indentation",g===0&&this.table.noIndentation),p.toggleAttribute("data-cell-header",this.isHeader),p.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:p}})),h.push(p)}return this._timeOutDelay=0,S`
      ${this.table.selectableRows?S`<bim-checkbox
            @click=${this._onCheckboxClick}
            @change=${this.onSelectionChange}
            .checked=${this.isHeader?a:this._isSelected??!1}
            .indeterminate=${l}
            .disabled=${this.table.rowsSelectionDisabled}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${h}
      <slot></slot>
    `}};zl.styles=F`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: var(--bim-table-row--min-h, 30px);
      transition: all 0.15s;
      gap: var(--bim-table-row--gap, 4px);
      /* Off by default; consumers opt into row dividers by setting the
         bim-table-row--border-bottom token on the bim-table host
         (e.g. 1px solid #2d2d33). */
      border-bottom: var(--bim-table-row--border-bottom, none);
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }

    :host([selected]) {
      background-color: color-mix(in lab, var(--bim-ui_bg-contrast-20) 30%, var(--bim-ui_bg-contrast-70) 10%);
    }

    :host([is-header]) {
      min-height: auto;
      height: var(--bim-ui_size-10xl);
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
    }
  `;let ts=zl;nn([v({type:Boolean,reflect:!0})],ts.prototype,"selected");nn([v({type:Boolean,attribute:"is-header",reflect:!0})],ts.prototype,"isHeader");nn([gt()],ts.prototype,"_intersecting");nn([gt()],ts.prototype,"dataTransform");var Bu=Object.defineProperty,Fu=Object.getOwnPropertyDescriptor,nt=(e,t,i,s)=>{for(var n=s>1?void 0:s?Fu(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Bu(t,i,n),n},os;const et=(os=class extends V{constructor(){super(),this._value=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.headersTransform={},this.groupingTransform={},this.selectableRows=!1,this.selection=new hd,this.rowsSelectionDisabled=!1,this.noIndentation=!1,this.noCarets=!1,this.groupsOnly=!1,this.loading=!1,this._groupedBy=[],this._lastSelectedData=null,this.rangeSelectKey="ctrlKey",this._errorLoading=!1,this._defaultVisibility=!0,this._visibilityExceptions=[],this.defaultContentTemplate=e=>S`<bim-label style="white-space: normal; user-select: text;"
      >${e}</bim-label
    >`,this._stringFilterFunction=(e,t)=>Object.values(t.data).some(i=>String(i).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,t)=>{let i=!1;const s=Un(e)??[];for(const n of s){if("queries"in n){i=!1;break}const{condition:r,value:o}=n;let{key:a}=n;if(a.startsWith("[")&&a.endsWith("]")){const l=a.replace("[","").replace("]","");a=l,i=Object.keys(t.data).filter(c=>c.includes(l)).map(c=>Jr(t.data[c],r,o)).some(c=>c)}else i=Jr(t.data[a],r,o);if(!i)break}return i},this.selection.deleteGuard=()=>!this.rowsSelectionDisabled,this.selection.onItemAdded.add(e=>this.emitDataSelected({data:e})),this.selection.onItemDeleted.add(e=>this.emitDataDeselected({data:e})),this.selection.onCleared.add(()=>{this.emitDataCleared(),this._lastSelectedData=null})}static flattenData(e){const t=[];for(const i of e)t.push({data:i.data}),i.children&&i.children.length>0&&t.push(...os.flattenData(i.children));return t}set columns(e){const t=[];for(const i of e){const s=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;t.push(s)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const t of this.columns){const{name:i}=t;e[i]=String(i)}return e}get value(){return this._value}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateValue(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateValue(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set groupedBy(e){this._groupedBy=e,this.updateValue()}get groupedBy(){return this._groupedBy}set defaultVisibility(e){this._defaultVisibility=e}get defaultVisibility(){return this._defaultVisibility}set visibilityExceptions(e){this._visibilityExceptions=e}get visibilityExceptions(){return this._visibilityExceptions}set hiddenColumns(e){this.defaultVisibility=!0,this.visibilityExceptions=e}get hiddenColumns(){const e=this.dataKeys,t=[];for(const i of e){const s=this._visibilityExceptions.includes(i);(this._defaultVisibility?s:!s)&&t.push(i)}return t}set visibleColumns(e){this.defaultVisibility=!1,this.visibilityExceptions=e}get visibleColumns(){const e=this.dataKeys,t=[];for(const i of e){const s=this._visibilityExceptions.includes(i);(this._defaultVisibility?!s:s)&&t.push(i)}return t}emitDataSelected(e){this.dispatchEvent(new CustomEvent("dataselected",{detail:e}))}emitDataDeselected(e){this.dispatchEvent(new CustomEvent("datadeselected",{detail:e}))}emitDataCleared(){this.dispatchEvent(new Event("dataselectioncleared"))}filterData(e=this.data){let t=[];if(this.queryString){let i=this.filterFunction;i||(i=Un(this.queryString)?this._queryFilterFunction:this._stringFilterFunction),t=this.filter(this.queryString,i,e),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)}else this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),t=e;return t}computeMissingColumns(e){let t=!1;for(const i of e){const{children:s,data:n}=i;for(const r in n)this._columns.map(o=>typeof o=="string"?o:o.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(s){const r=this.computeMissingColumns(s);r&&!t&&(t=r)}}return t}generateText(e="comma",t=this.value,i="",s=!0){const n=this._textDelimiters[e];let r="";const o=this.columns.map(a=>a.name);if(s){this.indentationInText&&(r+=`Indentation${n}`);const a=`${o.join(n)}
`;r+=a}for(const[a,l]of t.entries()){const{data:c,children:h}=l,d=this.indentationInText?`${i}${a+1}${n}`:"",u=o.map(g=>c[g]??""),p=`${d}${u.join(n)}
`;r+=p,h&&(r+=this.generateText(e,l.children,`${i}${a+1}.`,!1))}return r}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}get dataKeys(){const e=new Set,t=i=>{for(const s of i){for(const n in s.data)e.add(n);s.children&&t(s.children)}};return t(this.data),Array.from(e)}applyDataTransform(e){const t={};if(!e)return t;const{data:i}=e.data;for(const n of Object.keys(this.dataTransform)){const r=this.columns.find(o=>o.name===n);r&&r.forceDataTransform&&(n in i||(i[n]=""))}const s=i;for(const n in s){const r=this.dataTransform[n];r?t[n]=r(s[n],i,e):t[n]=i[n]}return t}downloadData(e="BIM Table Data",t="json"){let i=null;if(t==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),t==="csv"&&(i=new File([this.csv],`${e}.csv`)),t==="tsv"&&(i=new File([this.tsv],`${e}.tsv`)),!i)return;const s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=i.name,s.click(),URL.revokeObjectURL(s.href)}getRowIndentation(e,t=this.value,i=0){for(const s of t){if(s.data===e)return i;if(s.children){const n=this.getRowIndentation(e,s.children,i+1);if(n!==null)return n}}return null}getGroupIndentation(e,t=this.value,i=0){for(const s of t){if(s===e)return i;if(s.children){const n=this.getGroupIndentation(e,s.children,i+1);if(n!==null)return n}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._value.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){if(this.loading=!1,this._value.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),s=i==null?void 0:i.querySelector("[data-table-element='error-message']");return t instanceof Error&&s&&t.message.trim()!==""&&(s.textContent=t.message),this._errorLoading=!0,!1}}groupData(e=this.data){return Mu(e,this.groupedBy,this.groupingTransform)}updateValue(){const e=this.filterData(),t=this.groupData(e);this._value=t}filter(e,t=this.filterFunction??this._stringFilterFunction,i=this.data){const s=[];for(const n of i)if(t(e,n)){if(this.preserveStructureOnFilter){const r={data:n.data};if(n.children){const o=this.filter(e,t,n.children);o.length&&(r.children=o)}s.push(r)}else if(s.push({data:n.data}),n.children){const r=this.filter(e,t,n.children);s.push(...r)}}else if(n.children){const r=this.filter(e,t,n.children);this.preserveStructureOnFilter&&r.length?s.push({data:n.data,children:r}):s.push(...r)}return s}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}getGroupingMessageTemplate(){if(this.groupedBy.length===0)return ot;const e=this.groupedBy.join(" → ");return S`
      <bim-label
        part="grouping-message"
        style="
        background-color: var(--bim-ui_bg-contrast-10);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        padding: 0.5rem 0.75rem;
        font-weight: 500;
        display: block;
      "
      >
        Grouped By: ${e}
      </bim-label>
    `}render(){if(this.loading)return Pu();if(this._errorLoading)return S`<slot name="error-loading"></slot>`;if(this._value.length===0&&this._missingDataElement)return S`<slot name="missing-data"></slot>`;const e=i=>{if(!i)return;const s=i;s.table=this,s.data=this._headerRowData,s.requestUpdate()},t=i=>{if(!i)return;const s=i;s.table=this,s.data=this.value,s.requestUpdate()};return S`
      <div class="parent">
        ${Ou()}
        <div
          style="
          grid-area: Header;
          position: sticky;
          top: 0;
          z-index: 5;
        "
        >
          ${te(!this.headersHidden,()=>S`<bim-table-row
                is-header
                ${Bt(e)}
              ></bim-table-row>`)}
          ${this.getGroupingMessageTemplate()}
        </div>
        <div style="overflow-x: hidden; grid-area: Body">
          <bim-table-children
            ${Bt(t)}
            style="grid-area: Body; background-color: transparent"
          ></bim-table-children>
        </div>
      </div>
    `}},os.styles=[ye.scrollbar,F`
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
      }

      .controls {
        display: flex;
        gap: 0.375rem;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      }
    `],os);nt([gt()],et.prototype,"_value",2);nt([v({type:Boolean,attribute:"headers-hidden",reflect:!0})],et.prototype,"headersHidden",2);nt([v({type:String,attribute:"min-col-width",reflect:!0})],et.prototype,"minColWidth",2);nt([v({type:Array,attribute:!1})],et.prototype,"columns",1);nt([v({type:Array,attribute:!1})],et.prototype,"data",1);nt([v({type:Boolean,reflect:!0})],et.prototype,"expanded",2);nt([v({type:Number,attribute:"expanded-levels",reflect:!0})],et.prototype,"expandedLevels",2);nt([v({attribute:!1})],et.prototype,"headersTransform",2);nt([v({attribute:!1})],et.prototype,"groupingTransform",2);nt([v({type:Boolean,reflect:!0,attribute:"selectable-rows"})],et.prototype,"selectableRows",2);nt([v({type:Boolean,attribute:"rows-selection-disabled",reflect:!0})],et.prototype,"rowsSelectionDisabled",2);nt([v({type:Boolean,attribute:"no-indentation",reflect:!0})],et.prototype,"noIndentation",2);nt([v({type:Boolean,attribute:"no-carets",reflect:!0})],et.prototype,"noCarets",2);nt([v({type:Boolean,attribute:"groups-only",reflect:!0})],et.prototype,"groupsOnly",2);nt([v({type:Boolean,reflect:!0})],et.prototype,"loading",2);nt([v({type:String,attribute:"grouped-by",reflect:!0,converter:{toAttribute:e=>Array.isArray(e)&&e.length>0?e.join(","):null,fromAttribute:e=>e&&e.trim()!==""?e.split(",").map(t=>t.trim()):[]}})],et.prototype,"groupedBy",1);nt([v({type:String,attribute:"range-select-key",reflect:!0})],et.prototype,"rangeSelectKey",2);nt([gt()],et.prototype,"_errorLoading",2);nt([v({type:Boolean,attribute:"columns-hidden",reflect:!0,converter:{toAttribute:e=>e?null:"",fromAttribute:e=>e===null}})],et.prototype,"defaultVisibility",1);nt([v({type:String,attribute:"visibility-exceptions",reflect:!0,converter:{toAttribute:e=>Array.isArray(e)&&e.length>0?e.join(","):null,fromAttribute:e=>e&&e.trim()!==""?e.split(",").map(t=>t.trim()):[]}})],et.prototype,"visibilityExceptions",1);let Ge=et;var Vu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,rn=(e,t,i,s)=>{for(var n=s>1?void 0:s?ju(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Vu(t,i,n),n};const Ll=class extends V{constructor(){super(),this._defaultName="__unnamed__",this._autoNamed=!1,this.name=this._defaultName,this._hidden=!1,this.setAttribute("role","tabpanel")}set label(t){this._label=t,this.dispatchEvent(new CustomEvent("tab-update",{bubbles:!0}))}get label(){return this._label}set icon(t){this._icon=t,this.dispatchEvent(new CustomEvent("tab-update",{bubbles:!0}))}get icon(){return this._icon}set hidden(t){const i=this._hidden;this._hidden=t,this.requestUpdate("hidden",i),this.dispatchEvent(new CustomEvent("hiddenchange",{detail:{hidden:t}}))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&(this.name===this._defaultName||this._autoNamed)){const i=[...t.children].indexOf(this);this.name=`${this._defaultName}${i}`,this._autoNamed=!0}}render(){return S`<slot></slot>`}};Ll.styles=F`
    :host {
      display: block;
      height: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
    }

    :host([hidden]) {
      display: none;
    }
  `;let vt=Ll;rn([v({type:String,reflect:!0})],vt.prototype,"name",2);rn([v({type:String,reflect:!0})],vt.prototype,"label",1);rn([v({type:String,reflect:!0})],vt.prototype,"icon",1);rn([v({type:Boolean,reflect:!0})],vt.prototype,"hidden",1);var Hu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,Se=(e,t,i,s)=>{for(var n=s>1?void 0:s?Nu(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Hu(t,i,n),n};const Rl=class extends V{constructor(){super(...arguments),this._switcherData=[],this._initialized=!1,this._updatingTab=!1,this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.switchersCompact=!1,this._onTabHiddenChange=t=>{if(this._updatingTab)return;const i=t.target;i instanceof vt&&!i.hidden&&(this.tab=i.name)},this._updateSwitchers=()=>{for(const t of this.children){if(!(t instanceof vt))continue;const i=this._switcherData.find(s=>s.name===t.name);i&&(i.label=t.label,i.icon=t.icon)}this.requestUpdate()},this._onSwitchersKeyDown=t=>{const i=[...this.renderRoot.querySelectorAll(".switcher")],s=i.length;if(!s)return;const n=i.findIndex(a=>a.getAttribute("data-name")===this._tab);let r=n;if(t.key==="ArrowRight"||t.key==="ArrowDown")t.preventDefault(),r=(n+1)%s;else if(t.key==="ArrowLeft"||t.key==="ArrowUp")t.preventDefault(),r=(n-1+s)%s;else if(t.key==="Home")t.preventDefault(),r=0;else if(t.key==="End")t.preventDefault(),r=s-1;else return;const o=i[r];o&&(this.tab=o.getAttribute("data-name")??void 0,o.focus())}}set tab(t){if(!this._initialized&&t&&t!=="hidden"){this._pendingTab=t;return}const i=this._tab,s=[...this.children],n=s.find(r=>r instanceof vt&&r.name===t);this._tab=n?t:"hidden",this._updatingTab=!0;for(const r of s)r instanceof vt&&(r.hidden=n!==r);this._updatingTab=!1,this.requestUpdate("tab",i)}get tab(){return this._tab}connectedCallback(){super.connectedCallback(),this.addEventListener("tab-update",this._updateSwitchers)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("tab-update",this._updateSwitchers);for(const t of this.children)t instanceof vt&&t.removeEventListener("hiddenchange",this._onTabHiddenChange)}_createSwitchers(){this._switcherData=[];for(const t of this.children)t instanceof vt&&(t.id||(t.id=`bim-tab-panel-${t.name}`),this._switcherData.push({name:t.name,label:t.label,icon:t.icon,panelId:t.id}))}_onSlotChange(t){this._initialized=!0,this._createSwitchers();const i=t.target.assignedElements(),s=this._pendingTab??this._tab;this._pendingTab=void 0;const n=i.find(r=>r instanceof vt?s&&s!=="hidden"?r.name===s:!r.hidden:!1);n instanceof vt&&(this.tab=n.name);for(const r of i){if(!(r instanceof vt)){console.warn("[bim-tabs] Only bim-tab elements are allowed as children. Removing:",r),r.remove();continue}r.setAttribute("aria-label",r.label||r.name||""),r.removeEventListener("hiddenchange",this._onTabHiddenChange),n!==r&&(r.hidden=!0),r.addEventListener("hiddenchange",this._onTabHiddenChange)}}render(){return S`
      <div class="parent">
        <div
          class="switchers"
          role="tablist"
          aria-label=${this.label??ot}
          @keydown=${this._onSwitchersKeyDown}
        >
          ${this._switcherData.map(t=>{const i=this._tab===t.name;return S`<div
              class="switcher"
              data-name=${t.name}
              role="tab"
              aria-selected=${i}
              tabindex=${i?0:-1}
              aria-controls=${t.panelId}
              ?data-active=${i}
              @click=${()=>{if(this._tab===t.name){this.floating&&(this.tab=void 0);return}this.tab=t.name}}
            ><bim-label .icon=${t.icon}>${t.label??""}</bim-label></div>`})}
        </div>
        <div class="content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `}};Rl.styles=[ye.scrollbar,F`
      * {
        box-sizing: border-box;
      }

      :host {
        flex: 1;
        display: block;
        height: 100%;
        background-color: var(--bim-tabs--bg, var(--bim-ui_bg-contrast-10));
        overflow: auto;
        border: var(--bim-tabs--border, 1px solid var(--bim-ui_bg-contrast-20));
        border-radius: 0.75rem;
        --bim-panel--header-display: none;
        --bim-panel-section--header-display: none;
        --bim-panel-section--border: none;
        --bim-panel-section--bdrs: 0;
        --bim-panel-section--bg: transparent;
        --bim-panel--border: none;
        --bim-toolbar--border: none;
        --bim-toolbar--bdrs: 0;
      }

      .parent {
        display: grid;
        overflow: hidden;
        position: relative;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
        position: relative;
        display: flex;
        flex-wrap: wrap;
        grid-area: switchers;
      }

      :host([bottom]) .switchers {
        border-bottom: none;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        position: relative;
        cursor: pointer;
        pointer-events: auto;
        padding: 0 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: var(--bim-tabs-switcher--z, 2);
        transition: background-color 0.15s;
        min-height: var(--bim-tabs-switcher--minh, 30px);
      }

      .switcher:not([data-active]):hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_bg-contrast-100);
        background-color: var(--bim-ui_bg-contrast-30);
      }

      .switcher:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      :host([switchers-compact]) .switchers {
        width: fit-content;
        border-bottom: none;
        padding: 0;
        margin: var(--bim-ui_size-sm);
        gap: 0;
        overflow: auto;
        border-radius: var(--bim-ui_size-2xs);
      }

      :host([switchers-compact]) .switcher {
        min-width: unset;
        padding: 0 var(--bim-ui_size-sm);
        border-radius: 0;
        background-color: var(--bim-ui_bg-contrast-20);
      }

      :host([switchers-compact]) .switcher[data-active] {
        background-color: var(--bim-ui_bg-contrast-40);
      }

      .content {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-area: content;
        overflow: auto;
      }

      :host([tab="hidden"]) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
        border: none;
        --bim-toolbar--w: 100%;
        overflow: visible;
      }

      :host([floating]) .parent {
        overflow: visible;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: hidden;
        background-color: var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border: 1px solid var(--bim-ui_bg-contrast-40);
        border-bottom: none;
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border: 1px solid var(--bim-ui_bg-contrast-40);
        border-top: none;
      }

      :host([floating][tab="hidden"]) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border: 1px solid var(--bim-ui_bg-contrast-40);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-40);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }

      :host([floating][tab="hidden"]) .content {
        border: none;
      }

      @media (prefers-reduced-motion: reduce) {
        .switcher {
          transition: none;
        }
      }
    `];let ne=Rl;Se([gt()],ne.prototype,"_switcherData",2);Se([v({type:Boolean,reflect:!0})],ne.prototype,"bottom",2);Se([v({type:Boolean,attribute:"switchers-hidden",reflect:!0})],ne.prototype,"switchersHidden",2);Se([v({type:Boolean,reflect:!0})],ne.prototype,"floating",2);Se([v({type:String,reflect:!0})],ne.prototype,"label",2);Se([v({type:String,reflect:!0})],ne.prototype,"tab",1);Se([v({type:Boolean,attribute:"switchers-full",reflect:!0})],ne.prototype,"switchersFull",2);Se([v({type:Boolean,attribute:"switchers-compact",reflect:!0})],ne.prototype,"switchersCompact",2);var Wu=Object.defineProperty,Uu=Object.getOwnPropertyDescriptor,Ct=(e,t,i,s)=>{for(var n=s>1?void 0:s?Uu(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Wu(t,i,n),n},fi;const xt=(fi=class extends V{constructor(){super(...arguments),this._type="text",this._cachedQuery=void 0,this._dirty=!1,this.value="",this.vertical=!1,this.disabled=!1,this.iconInside=!1,this.resize="vertical",this.onValueChange=new Event("input")}set type(e){fi._inputTypes.includes(e)?this._type=e:console.warn(`[bim-text-input] Unknown type "${e}". Ignored.`)}get type(){return this._type}get query(){return this._cachedQuery===void 0&&(this._cachedQuery=Un(this.value)),this._cachedQuery}get validation(){return this._validation}set validation(e){this._validation=e,this.requestUpdate()}get isValid(){var e;return this._dirty?((e=this._currentValidation)==null?void 0:e.valid)??!0:!0}willUpdate(e){e.has("value")&&(this._cachedQuery=void 0),this._currentValidation=this._validation?this._validation(this.value):void 0}updated(){this.toggleAttribute("invalid",!this.isValid)}onInputChange(e){this._dirty=!0,e.stopPropagation();const t=e.target;clearTimeout(this._debounceTimeoutID),this.debounce==null?(this.value=t.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))):this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))},this.debounce)}async focus(){var e;await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input, textarea");t==null||t.focus()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._debounceTimeoutID)}render(){var e;const t=this.iconInside&&this.type!=="area",i=t?void 0:this.icon;return S`
      <div class="parent">
        ${this.label||i?S`<bim-label .icon=${i}>${this.label}</bim-label>`:ot}
        <div class="input">
          ${t&&this.icon?S`<bim-label .icon=${this.icon}></bim-label>`:ot}
          ${this.type==="area"?S`<textarea
                aria-label=${this.label||"Text Input"}
                .value=${this.value}
                .rows=${this.rows??5}
                ?disabled=${this.disabled}
                placeholder=${Mi(this.placeholder)}
                @input=${this.onInputChange}
                style=${le({"--bim-text-input--resize":this.resize})}
              ></textarea>`:S`<input
                aria-label=${this.label||"Text Input"}
                .type=${this.type}
                .value=${this.value}
                ?disabled=${this.disabled}
                placeholder=${Mi(this.placeholder)}
                autocomplete=${Mi(this.autocomplete)}
                @input=${this.onInputChange}
              />`}
        </div>
      </div>
      ${!this.isValid&&(e=this._currentValidation)!=null&&e.message?S`<span class="validation-message">${this._currentValidation.message}</span>`:ot}
    `}},fi.styles=[ye.scrollbar,F`
      :host {
        display: block;
      }

      .parent {
        display: flex;
        flex-wrap: wrap;
        gap: 0.375rem;
        user-select: none;
        flex: 1;
        align-items: normal;
      }

      :host(:not([vertical])) .parent {
        justify-content: space-between;
      }

      :host([vertical]) .parent {
        flex-direction: column;
      }

      :host(:not([vertical])[type="area"]) .parent {
        align-items: flex-start;
      }

      bim-label {
        margin-top: var(--bim-input--label-mt, 0);
      }

      :host(:not([vertical])[type="area"]) bim-label {
        margin-top: 4px;
      }

      .input {
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        height: 25px;
        min-width: 3rem;
        gap: var(--bim-input--g, var(--bim-ui_size-4xs));
        padding: 0 7px;
        background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-20));
        border: var(--bim-input--olw, 2px) solid var(--bim-input--olc, transparent);
        border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
        transition: border-color 0.15s;
      }

      :host([type="area"]) .input {
        height: auto;
        min-height: 25px;
        align-items: flex-start;
        padding: 4px 7px;
      }

      :host(:not([vertical])) .input {
        flex: 1;
        justify-content: flex-end;
      }

      :host(:not([vertical])[label]) .input {
        max-width: var(--bim-input--maxw, fit-content);
      }

      :host(:focus-within) .input {
        border-color: var(--bim-ui_bg-contrast-40);
      }

      :host([invalid]) .input {
        border-color: var(--bim-ui_danger-base);
      }

      input,
      textarea {
        font-size: var(--bim-ui_size-base);
        font-family: inherit;
        background-color: transparent;
        border: none;
        width: 100%;
        color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
      }

      input {
        outline: none;
        color-scheme: dark;
      }

      :host-context(html.bim-ui-light) input {
        color-scheme: light;
      }

      @media (prefers-color-scheme: light) {
        input {
          color-scheme: light;
        }
      }

      :host([disabled]) input,
      :host([disabled]) textarea {
        color: var(--bim-text-input--disabled-c, var(--bim-ui_bg-contrast-60));
      }

      textarea {
        line-height: 1.1rem;
        outline: none;
        resize: var(--bim-text-input--resize, vertical);
      }

      .validation-message {
        display: block;
        font-size: var(--bim-ui_size-base);
        color: var(--bim-ui_danger-base);
        padding: 2px var(--bim-ui_size-xs);
      }

      :host(:not([vertical])) .validation-message {
        text-align: right;
      }

      :host([icon-inside]) input,
      :host([icon-inside]) textarea {
        width: auto;
        flex: 1;
        min-width: 0;
      }

      @media (prefers-reduced-motion: reduce) {
        .input {
          transition: none;
        }
      }
    `],fi._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],fi);Ct([v({type:String,reflect:!0})],xt.prototype,"icon",2);Ct([v({type:String,reflect:!0})],xt.prototype,"label",2);Ct([v({type:String,reflect:!0})],xt.prototype,"name",2);Ct([v({type:String,reflect:!0})],xt.prototype,"placeholder",2);Ct([v({type:String})],xt.prototype,"value",2);Ct([v({type:Boolean,reflect:!0})],xt.prototype,"vertical",2);Ct([v({type:Number})],xt.prototype,"debounce",2);Ct([v({type:Number})],xt.prototype,"rows",2);Ct([v({type:Boolean,reflect:!0})],xt.prototype,"disabled",2);Ct([v({type:String,reflect:!0})],xt.prototype,"autocomplete",2);Ct([v({type:Boolean,reflect:!0,attribute:"icon-inside"})],xt.prototype,"iconInside",2);Ct([v({type:String,reflect:!0})],xt.prototype,"resize",2);Ct([v({type:String,reflect:!0})],xt.prototype,"type",1);let qu=xt;var Yu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,$l=(e,t,i,s)=>{for(var n=Xu(t,i),r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Yu(t,i,n),n};const Il=class extends V{constructor(){super(...arguments),this._rows=2,this._vertical=!1,this._rafId=0,this._scheduleUpdateChildren=()=>{cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(()=>this.updateChildren())}}set rows(t){this._rows=Math.max(1,Math.floor(t))}get rows(){return this._rows}set vertical(t){t!==this._vertical&&(this._vertical=t,this.updateChildren())}get vertical(){return this._vertical}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","group")}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this._rafId)}updated(){this.style.setProperty("--_flow",this.vertical?"row":"column"),this.style.setProperty("--_rows",String(this.rows))}updateChildren(){for(const t of this.children)t.tagName.startsWith("BIM-")&&t.toggleAttribute("label-hidden",this.vertical)}render(){return S`
      <div class="parent">
        <slot @slotchange=${this._scheduleUpdateChildren}></slot>
      </div>
    `}};Il.styles=F`
    :host(:focus-visible) {
      outline: 2px solid var(--bim-ui_accent-base);
      outline-offset: -2px;
    }

    .parent {
      display: grid;
      gap: 0.25rem;
      grid-auto-flow: var(--_flow, column);
      grid-template-rows: repeat(var(--_rows, 2), 1fr);
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `;let on=Il;$l([v({type:Number,reflect:!0})],on.prototype,"rows");$l([v({type:Boolean,reflect:!0})],on.prototype,"vertical");var Ku=Object.defineProperty,Gu=Object.getOwnPropertyDescriptor,es=(e,t,i,s)=>{for(var n=s>1?void 0:s?Gu(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Ku(t,i,n),n};const Bl=class extends V{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1,this._rafId=0,this._scheduleUpdateChildren=()=>{cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(()=>this.updateChildren())}}set vertical(t){t!==this._vertical&&(this._vertical=t,this.updateChildren())}get vertical(){return this._vertical}set labelHidden(t){t!==this._labelHidden&&(this._labelHidden=t,this.updateChildren())}get labelHidden(){return this._labelHidden}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","group")}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this._rafId)}updated(){this.label&&this.setAttribute("aria-label",this.label)}updateChildren(){for(const t of this.children)t.tagName.startsWith("BIM-")&&(t instanceof on&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical))}render(){return S`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this._scheduleUpdateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?S`<bim-label class="name" .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Bl.styles=F`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      display: block;
      flex: 1;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--bim-ui_accent-base);
      outline-offset: -2px;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    .parent {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1px;
      height: 100%;
      box-sizing: border-box;
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: row-reverse;
    }

    :host([vertical]) .parent > bim-label {
      writing-mode: vertical-rl;
    }

    .name {
      height: 20px;
      padding: 0 10px;
      font-size: var(--bim-ui_size-sm);
      flex-shrink: 0;
    }

    .children {
      display: flex;
      gap: var(--bim-toolbar-section--gap, 6px);
      height: 100%;
      padding: var(--bim-toolbar-section--p, 4px);
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let Ue=Bl;es([v({type:String,reflect:!0})],Ue.prototype,"label",2);es([v({type:String,reflect:!0})],Ue.prototype,"name",2);es([v({type:String,reflect:!0})],Ue.prototype,"icon",2);es([v({type:Boolean,reflect:!0})],Ue.prototype,"vertical",1);es([v({type:Boolean,attribute:"label-hidden",reflect:!0})],Ue.prototype,"labelHidden",1);var Qu=Object.defineProperty,Fl=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Qu(t,i,n),n};const Vl=class extends V{constructor(){super(...arguments),this.labelsHidden=!1,this.vertical=!1,this._onKeyDown=t=>{const i=Array.from(this.querySelectorAll("bim-button:not([disabled])"));if(!i.length)return;const s=i.indexOf(document.activeElement);if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))return;t.preventDefault();let n;t.key==="Home"?n=i[0]:t.key==="End"?n=i[i.length-1]:t.key==="ArrowRight"||t.key==="ArrowDown"?n=i[(s+1)%i.length]:n=i[(s-1+i.length)%i.length],n==null||n.focus()}}set hidden(t){super.hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return super.hidden}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","toolbar"),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDown)}updated(t){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal"),(t.has("vertical")||t.has("labelsHidden"))&&this.updateSections()}updateSections(){for(const t of this.children)t instanceof Ue&&(t.labelHidden=this.labelsHidden||this.vertical&&!Gs.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return S`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Vl.styles=F`
    :host {
      --bim-button--bgc: transparent;
      overflow: auto;
      display: block;
      contain: layout style;
      background-color: var(--bim-toolbar--bgc, var(--bim-ui_bg-contrast-10));
      border: var(--bim-toolbar--border, 1px solid var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-toolbar--bdrs, var(--bim-ui_size-2xs));
    }

    :host([hidden]) {
      display: none;
    }

    .parent {
      display: flex;
      width: var(--bim-toolbar--w, max-content);
      pointer-events: auto;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    :host([vertical]) {
      width: var(--bim-toolbar--vertical-w, min-content);
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: var(--bim-toolbar--divider, 1px solid var(--bim-ui_bg-contrast-20));
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: var(--bim-toolbar--divider, 1px solid var(--bim-ui_bg-contrast-20));
      border-right: none;
    }
  `;let vr=Vl;Fl([v({type:Boolean,attribute:"labels-hidden",reflect:!0})],vr.prototype,"labelsHidden");Fl([v({type:Boolean,reflect:!0})],vr.prototype,"vertical");var Ju=Object.defineProperty,Zu=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Ju(t,i,n),n};const jl=class extends V{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return S`
      <div class="parent">
        <slot></slot>
      </div>
    `}};jl.styles=F`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
      /* border: 1px solid var(--bim-ui_bg-contrast-40); */
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let Hl=jl;Zu([v({type:String,reflect:!0})],Hl.prototype,"name");var tp=Object.defineProperty,ep=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&tp(t,i,n),n};const Nl=class extends V{constructor(){super(...arguments),this.charts=[],this._charts=[],this.labels=[]}willUpdate(t){const i=[];this.charts&&i.push(...this.charts),this._charts=[...new Set(i)]}_getLabelColorMap(t){const i={};return t.colors&&this.labels.forEach((s,n)=>{i[s]=t.colors[n%t.colors.length]}),i}_getHideEventData(){var t;const i={};for(const s in this.labels){const n=this.labels[s],r=[];for(const o of Object.values(this._charts[0].inputData.datasets))r.push((t=o[s])==null?void 0:t.data);i[n]=r}return i}render(){if(this._charts.length===0||!this._charts[0].data)return S`<slot name="no-chart"></slot>`;const t=this._charts[0];this.labels=t.inputData.labels;const i=this._getLabelColorMap(t),s=this._getHideEventData();return this.labels.length===0?S`<slot name="missing-data"></slot>`:S`
      <div class="parent">
        ${this.labels.map(n=>S`
            <div style="display: flex; gap: 0.25rem; align-items: center;">
              <span
                style="
                display: inline-block;
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                background: ${i[n]??"gray"};
              "
                aria-hidden="true"
              ></span>
              <bim-label
                @click=${r=>{const o=r.currentTarget,a=o.style.textDecoration==="line-through";o.style.textDecoration=a?"none":"line-through";const l=s[n];this.dispatchEvent(new CustomEvent("label-click",{detail:{label:n,data:l,visibility:a}}));for(const c of this._charts)c.filterByLabel(n)}}
              >
                ${n}
              </bim-label>
            </div>
          `)}
      </div>
    `}};Nl.styles=F`
    :host {
      display: block;
      box-sizing: border-box;
      padding: 0.5rem;
    }

    .parent {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      justify-content: center;
      /* height: 100%;
      width: 100%; */
    }
  `;let Wl=Nl;ep([v({type:Array,attribute:!1,hasChanged:()=>!0})],Wl.prototype,"charts");/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function is(e){return e+.5|0}const ce=(e,t,i)=>Math.max(Math.min(e,i),t);function _i(e){return ce(is(e*2.55),0,255)}function fe(e){return ce(is(e*255),0,255)}function Yt(e){return ce(is(e/2.55)/100,0,1)}function ao(e){return ce(is(e*100),0,100)}const Dt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Kn=[..."0123456789ABCDEF"],ip=e=>Kn[e&15],sp=e=>Kn[(e&240)>>4]+Kn[e&15],as=e=>(e&240)>>4===(e&15),np=e=>as(e.r)&&as(e.g)&&as(e.b)&&as(e.a);function rp(e){var t=e.length,i;return e[0]==="#"&&(t===4||t===5?i={r:255&Dt[e[1]]*17,g:255&Dt[e[2]]*17,b:255&Dt[e[3]]*17,a:t===5?Dt[e[4]]*17:255}:(t===7||t===9)&&(i={r:Dt[e[1]]<<4|Dt[e[2]],g:Dt[e[3]]<<4|Dt[e[4]],b:Dt[e[5]]<<4|Dt[e[6]],a:t===9?Dt[e[7]]<<4|Dt[e[8]]:255})),i}const op=(e,t)=>e<255?t(e):"";function ap(e){var t=np(e)?ip:sp;return e?"#"+t(e.r)+t(e.g)+t(e.b)+op(e.a,t):void 0}const lp=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ul(e,t,i){const s=t*Math.min(i,1-i),n=(r,o=(r+e/30)%12)=>i-s*Math.max(Math.min(o-3,9-o,1),-1);return[n(0),n(8),n(4)]}function cp(e,t,i){const s=(n,r=(n+e/60)%6)=>i-i*t*Math.max(Math.min(r,4-r,1),0);return[s(5),s(3),s(1)]}function hp(e,t,i){const s=Ul(e,1,.5);let n;for(t+i>1&&(n=1/(t+i),t*=n,i*=n),n=0;n<3;n++)s[n]*=1-t-i,s[n]+=t;return s}function dp(e,t,i,s,n){return e===n?(t-i)/s+(t<i?6:0):t===n?(i-e)/s+2:(e-t)/s+4}function yr(e){const t=e.r/255,i=e.g/255,s=e.b/255,n=Math.max(t,i,s),r=Math.min(t,i,s),o=(n+r)/2;let a,l,c;return n!==r&&(c=n-r,l=o>.5?c/(2-n-r):c/(n+r),a=dp(t,i,s,c,n),a=a*60+.5),[a|0,l||0,o]}function xr(e,t,i,s){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,i,s)).map(fe)}function _r(e,t,i){return xr(Ul,e,t,i)}function up(e,t,i){return xr(hp,e,t,i)}function pp(e,t,i){return xr(cp,e,t,i)}function ql(e){return(e%360+360)%360}function fp(e){const t=lp.exec(e);let i=255,s;if(!t)return;t[5]!==s&&(i=t[6]?_i(+t[5]):fe(+t[5]));const n=ql(+t[2]),r=+t[3]/100,o=+t[4]/100;return t[1]==="hwb"?s=up(n,r,o):t[1]==="hsv"?s=pp(n,r,o):s=_r(n,r,o),{r:s[0],g:s[1],b:s[2],a:i}}function gp(e,t){var i=yr(e);i[0]=ql(i[0]+t),i=_r(i),e.r=i[0],e.g=i[1],e.b=i[2]}function bp(e){if(!e)return;const t=yr(e),i=t[0],s=ao(t[1]),n=ao(t[2]);return e.a<255?`hsla(${i}, ${s}%, ${n}%, ${Yt(e.a)})`:`hsl(${i}, ${s}%, ${n}%)`}const lo={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},co={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function mp(){const e={},t=Object.keys(co),i=Object.keys(lo);let s,n,r,o,a;for(s=0;s<t.length;s++){for(o=a=t[s],n=0;n<i.length;n++)r=i[n],a=a.replace(r,lo[r]);r=parseInt(co[o],16),e[a]=[r>>16&255,r>>8&255,r&255]}return e}let ls;function vp(e){ls||(ls=mp(),ls.transparent=[0,0,0,0]);const t=ls[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const yp=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function xp(e){const t=yp.exec(e);let i=255,s,n,r;if(t){if(t[7]!==s){const o=+t[7];i=t[8]?_i(o):ce(o*255,0,255)}return s=+t[1],n=+t[3],r=+t[5],s=255&(t[2]?_i(s):ce(s,0,255)),n=255&(t[4]?_i(n):ce(n,0,255)),r=255&(t[6]?_i(r):ce(r,0,255)),{r:s,g:n,b:r,a:i}}}function _p(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Yt(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}const xn=e=>e<=.0031308?e*12.92:Math.pow(e,1/2.4)*1.055-.055,Xe=e=>e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4);function wp(e,t,i){const s=Xe(Yt(e.r)),n=Xe(Yt(e.g)),r=Xe(Yt(e.b));return{r:fe(xn(s+i*(Xe(Yt(t.r))-s))),g:fe(xn(n+i*(Xe(Yt(t.g))-n))),b:fe(xn(r+i*(Xe(Yt(t.b))-r))),a:e.a+i*(t.a-e.a)}}function cs(e,t,i){if(e){let s=yr(e);s[t]=Math.max(0,Math.min(s[t]+s[t]*i,t===0?360:1)),s=_r(s),e.r=s[0],e.g=s[1],e.b=s[2]}}function Yl(e,t){return e&&Object.assign(t||{},e)}function ho(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=fe(e[3]))):(t=Yl(e,{r:0,g:0,b:0,a:1}),t.a=fe(t.a)),t}function kp(e){return e.charAt(0)==="r"?xp(e):fp(e)}class ni{constructor(t){if(t instanceof ni)return t;const i=typeof t;let s;i==="object"?s=ho(t):i==="string"&&(s=rp(t)||vp(t)||kp(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Yl(this._rgb);return t&&(t.a=Yt(t.a)),t}set rgb(t){this._rgb=ho(t)}rgbString(){return this._valid?_p(this._rgb):void 0}hexString(){return this._valid?ap(this._rgb):void 0}hslString(){return this._valid?bp(this._rgb):void 0}mix(t,i){if(t){const s=this.rgb,n=t.rgb;let r;const o=i===r?.5:i,a=2*o-1,l=s.a-n.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;r=1-c,s.r=255&c*s.r+r*n.r+.5,s.g=255&c*s.g+r*n.g+.5,s.b=255&c*s.b+r*n.b+.5,s.a=o*s.a+(1-o)*n.a,this.rgb=s}return this}interpolate(t,i){return t&&(this._rgb=wp(this._rgb,t._rgb,i)),this}clone(){return new ni(this.rgb)}alpha(t){return this._rgb.a=fe(t),this}clearer(t){const i=this._rgb;return i.a*=1-t,this}greyscale(){const t=this._rgb,i=is(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=i,this}opaquer(t){const i=this._rgb;return i.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return cs(this._rgb,2,t),this}darken(t){return cs(this._rgb,2,-t),this}saturate(t){return cs(this._rgb,1,t),this}desaturate(t){return cs(this._rgb,1,-t),this}rotate(t){return gp(this._rgb,t),this}}function Sp(e){return new ni(e)}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Wt(){}const Mp=(()=>{let e=0;return()=>e++})();function L(e){return e==null}function q(e){if(Array.isArray&&Array.isArray(e))return!0;const t=Object.prototype.toString.call(e);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function R(e){return e!==null&&Object.prototype.toString.call(e)==="[object Object]"}function J(e){return(typeof e=="number"||e instanceof Number)&&isFinite(+e)}function wt(e,t){return J(e)?e:t}function z(e,t){return typeof e>"u"?t:e}const Cp=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100:+e/t,Xl=(e,t)=>typeof e=="string"&&e.endsWith("%")?parseFloat(e)/100*t:+e;function W(e,t,i){if(e&&typeof e.call=="function")return e.apply(i,t)}function H(e,t,i,s){let n,r,o;if(q(e))for(r=e.length,n=0;n<r;n++)t.call(i,e[n],n);else if(R(e))for(o=Object.keys(e),r=o.length,n=0;n<r;n++)t.call(i,e[o[n]],o[n])}function Vs(e,t){let i,s,n,r;if(!e||!t||e.length!==t.length)return!1;for(i=0,s=e.length;i<s;++i)if(n=e[i],r=t[i],n.datasetIndex!==r.datasetIndex||n.index!==r.index)return!1;return!0}function js(e){if(q(e))return e.map(js);if(R(e)){const t=Object.create(null),i=Object.keys(e),s=i.length;let n=0;for(;n<s;++n)t[i[n]]=js(e[i[n]]);return t}return e}function Kl(e){return["__proto__","prototype","constructor"].indexOf(e)===-1}function Ep(e,t,i,s){if(!Kl(e))return;const n=t[e],r=i[e];R(n)&&R(r)?jt(n,r,s):t[e]=js(r)}function jt(e,t,i){const s=q(t)?t:[t],n=s.length;if(!R(e))return e;i=i||{};const r=i.merger||Ep;let o;for(let a=0;a<n;++a){if(o=s[a],!R(o))continue;const l=Object.keys(o);for(let c=0,h=l.length;c<h;++c)r(l[c],e,o,i)}return e}function Ei(e,t){return jt(e,t,{merger:Dp})}function Dp(e,t,i){if(!Kl(e))return;const s=t[e],n=i[e];R(s)&&R(n)?Ei(s,n):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=js(n))}const uo={"":e=>e,x:e=>e.x,y:e=>e.y};function Ap(e){const t=e.split("."),i=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(i.push(s),s="");return i}function Pp(e){const t=Ap(e);return i=>{for(const s of t){if(s==="")break;i=i&&i[s]}return i}}function me(e,t){return(uo[t]||(uo[t]=Pp(t)))(e)}function wr(e){return e.charAt(0).toUpperCase()+e.slice(1)}const Fi=e=>typeof e<"u",ve=e=>typeof e=="function",po=(e,t)=>{if(e.size!==t.size)return!1;for(const i of e)if(!t.has(i))return!1;return!0};function Op(e){return e.type==="mouseup"||e.type==="click"||e.type==="contextmenu"}const B=Math.PI,Y=2*B,Tp=Y+B,Hs=Number.POSITIVE_INFINITY,zp=B/180,tt=B/2,Ae=B/4,fo=B*2/3,he=Math.log10,It=Math.sign;function Di(e,t,i){return Math.abs(e-t)<i}function go(e){const t=Math.round(e);e=Di(e,t,e/1e3)?t:e;const i=Math.pow(10,Math.floor(he(e))),s=e/i;return(s<=1?1:s<=2?2:s<=5?5:10)*i}function Lp(e){const t=[],i=Math.sqrt(e);let s;for(s=1;s<i;s++)e%s===0&&(t.push(s),t.push(e/s));return i===(i|0)&&t.push(i),t.sort((n,r)=>n-r).pop(),t}function Rp(e){return typeof e=="symbol"||typeof e=="object"&&e!==null&&!(Symbol.toPrimitive in e||"toString"in e||"valueOf"in e)}function ri(e){return!Rp(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function $p(e,t){const i=Math.round(e);return i-t<=e&&i+t>=e}function Gl(e,t,i){let s,n,r;for(s=0,n=e.length;s<n;s++)r=e[s][i],isNaN(r)||(t.min=Math.min(t.min,r),t.max=Math.max(t.max,r))}function Tt(e){return e*(B/180)}function kr(e){return e*(180/B)}function bo(e){if(!J(e))return;let t=1,i=0;for(;Math.round(e*t)/t!==e;)t*=10,i++;return i}function Ql(e,t){const i=t.x-e.x,s=t.y-e.y,n=Math.sqrt(i*i+s*s);let r=Math.atan2(s,i);return r<-.5*B&&(r+=Y),{angle:r,distance:n}}function Gn(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function Ip(e,t){return(e-t+Tp)%Y-B}function pt(e){return(e%Y+Y)%Y}function Vi(e,t,i,s){const n=pt(e),r=pt(t),o=pt(i),a=pt(r-n),l=pt(o-n),c=pt(n-r),h=pt(n-o);return n===r||n===o||s&&r===o||a>l&&c<h}function at(e,t,i){return Math.max(t,Math.min(i,e))}function Bp(e){return at(e,-32768,32767)}function Gt(e,t,i,s=1e-6){return e>=Math.min(t,i)-s&&e<=Math.max(t,i)+s}function Sr(e,t,i){i=i||(o=>e[o]<t);let s=e.length-1,n=0,r;for(;s-n>1;)r=n+s>>1,i(r)?n=r:s=r;return{lo:n,hi:s}}const Qt=(e,t,i,s)=>Sr(e,i,s?n=>{const r=e[n][t];return r<i||r===i&&e[n+1][t]===i}:n=>e[n][t]<i),Fp=(e,t,i)=>Sr(e,i,s=>e[s][t]>=i);function Vp(e,t,i){let s=0,n=e.length;for(;s<n&&e[s]<t;)s++;for(;n>s&&e[n-1]>i;)n--;return s>0||n<e.length?e.slice(s,n):e}const Jl=["push","pop","shift","splice","unshift"];function jp(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Jl.forEach(i=>{const s="_onData"+wr(i),n=e[i];Object.defineProperty(e,i,{configurable:!0,enumerable:!1,value(...r){const o=n.apply(this,r);return e._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...r)}),o}})})}function mo(e,t){const i=e._chartjs;if(!i)return;const s=i.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(Jl.forEach(r=>{delete e[r]}),delete e._chartjs)}function Zl(e){const t=new Set(e);return t.size===e.length?e:Array.from(t)}const tc=function(){return typeof window>"u"?function(e){return e()}:window.requestAnimationFrame}();function ec(e,t){let i=[],s=!1;return function(...n){i=n,s||(s=!0,tc.call(window,()=>{s=!1,e.apply(t,i)}))}}function Hp(e,t){let i;return function(...s){return t?(clearTimeout(i),i=setTimeout(e,t,s)):e.apply(this,s),t}}const Mr=e=>e==="start"?"left":e==="end"?"right":"center",ut=(e,t,i)=>e==="start"?t:e==="end"?i:(t+i)/2,Np=(e,t,i,s)=>e===(s?"left":"right")?i:e==="center"?(t+i)/2:t;function ic(e,t,i){const s=t.length;let n=0,r=s;if(e._sorted){const{iScale:o,vScale:a,_parsed:l}=e,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,h=o.axis,{min:d,max:u,minDefined:p,maxDefined:g}=o.getUserBounds();if(p){if(n=Math.min(Qt(l,h,d).lo,i?s:Qt(t,h,o.getPixelForValue(d)).lo),c){const f=l.slice(0,n+1).reverse().findIndex(b=>!L(b[a.axis]));n-=Math.max(0,f)}n=at(n,0,s-1)}if(g){let f=Math.max(Qt(l,o.axis,u,!0).hi+1,i?0:Qt(t,h,o.getPixelForValue(u),!0).hi+1);if(c){const b=l.slice(f-1).findIndex(m=>!L(m[a.axis]));f+=Math.max(0,b)}r=at(f,n,s)-n}else r=s-n}return{start:n,count:r}}function sc(e){const{xScale:t,yScale:i,_scaleRanges:s}=e,n={xmin:t.min,xmax:t.max,ymin:i.min,ymax:i.max};if(!s)return e._scaleRanges=n,!0;const r=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==i.min||s.ymax!==i.max;return Object.assign(s,n),r}const hs=e=>e===0||e===1,vo=(e,t,i)=>-(Math.pow(2,10*(e-=1))*Math.sin((e-t)*Y/i)),yo=(e,t,i)=>Math.pow(2,-10*e)*Math.sin((e-t)*Y/i)+1,Ai={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>(e-=1)*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-((e-=1)*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>(e-=1)*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*tt)+1,easeOutSine:e=>Math.sin(e*tt),easeInOutSine:e=>-.5*(Math.cos(B*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>hs(e)?e:e<.5?.5*Math.pow(2,10*(e*2-1)):.5*(-Math.pow(2,-10*(e*2-1))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-(e-=1)*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>hs(e)?e:vo(e,.075,.3),easeOutElastic:e=>hs(e)?e:yo(e,.075,.3),easeInOutElastic(e){return hs(e)?e:e<.5?.5*vo(e*2,.1125,.45):.5+.5*yo(e*2-1,.1125,.45)},easeInBack(e){return e*e*((1.70158+1)*e-1.70158)},easeOutBack(e){return(e-=1)*e*((1.70158+1)*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Ai.easeOutBounce(1-e),easeOutBounce(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},easeInOutBounce:e=>e<.5?Ai.easeInBounce(e*2)*.5:Ai.easeOutBounce(e*2-1)*.5+.5};function Cr(e){if(e&&typeof e=="object"){const t=e.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function xo(e){return Cr(e)?e:new ni(e)}function _n(e){return Cr(e)?e:new ni(e).saturate(.5).darken(.1).hexString()}const Wp=["x","y","borderWidth","radius","tension"],Up=["color","borderColor","backgroundColor"];function qp(e){e.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),e.set("animations",{colors:{type:"color",properties:Up},numbers:{type:"number",properties:Wp}}),e.describe("animations",{_fallback:"animation"}),e.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Yp(e){e.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const _o=new Map;function Xp(e,t){t=t||{};const i=e+JSON.stringify(t);let s=_o.get(i);return s||(s=new Intl.NumberFormat(e,t),_o.set(i,s)),s}function ss(e,t,i){return Xp(t,i).format(e)}const nc={values(e){return q(e)?e:""+e},numeric(e,t,i){if(e===0)return"0";const s=this.chart.options.locale;let n,r=e;if(i.length>1){const c=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),r=Kp(e,i)}const o=he(Math.abs(r)),a=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),ss(e,s,l)},logarithmic(e,t,i){if(e===0)return"0";const s=i[t].significand||e/Math.pow(10,Math.floor(he(e)));return[1,2,3,5,10,15].includes(s)||t>.8*i.length?nc.numeric.call(this,e,t,i):""}};function Kp(e,t){let i=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(i)>=1&&e!==Math.floor(e)&&(i=e-Math.floor(e)),i}var an={formatters:nc};function Gp(e){e.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,i)=>i.lineWidth,tickColor:(t,i)=>i.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:an.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),e.route("scale.ticks","color","","color"),e.route("scale.grid","color","","borderColor"),e.route("scale.border","color","","borderColor"),e.route("scale.title","color","","color"),e.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),e.describe("scales",{_fallback:"scale"}),e.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Be=Object.create(null),Qn=Object.create(null);function Pi(e,t){if(!t)return e;const i=t.split(".");for(let s=0,n=i.length;s<n;++s){const r=i[s];e=e[r]||(e[r]=Object.create(null))}return e}function wn(e,t,i){return typeof t=="string"?jt(Pi(e,t),i):jt(Pi(e,""),t)}class Qp{constructor(t,i){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>_n(n.backgroundColor),this.hoverBorderColor=(s,n)=>_n(n.borderColor),this.hoverColor=(s,n)=>_n(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(i)}set(t,i){return wn(this,t,i)}get(t){return Pi(this,t)}describe(t,i){return wn(Qn,t,i)}override(t,i){return wn(Be,t,i)}route(t,i,s,n){const r=Pi(this,t),o=Pi(this,s),a="_"+i;Object.defineProperties(r,{[a]:{value:r[i],writable:!0},[i]:{enumerable:!0,get(){const l=this[a],c=o[n];return R(l)?Object.assign({},c,l):z(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(i=>i(this))}}var X=new Qp({_scriptable:e=>!e.startsWith("on"),_indexable:e=>e!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[qp,Yp,Gp]);function Jp(e){return!e||L(e.size)||L(e.family)?null:(e.style?e.style+" ":"")+(e.weight?e.weight+" ":"")+e.size+"px "+e.family}function Ns(e,t,i,s,n){let r=t[n];return r||(r=t[n]=e.measureText(n).width,i.push(n)),r>s&&(s=r),s}function Zp(e,t,i,s){s=s||{};let n=s.data=s.data||{},r=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},r=s.garbageCollect=[],s.font=t),e.save(),e.font=t;let o=0;const a=i.length;let l,c,h,d,u;for(l=0;l<a;l++)if(d=i[l],d!=null&&!q(d))o=Ns(e,n,r,o,d);else if(q(d))for(c=0,h=d.length;c<h;c++)u=d[c],u!=null&&!q(u)&&(o=Ns(e,n,r,o,u));e.restore();const p=r.length/2;if(p>i.length){for(l=0;l<p;l++)delete n[r[l]];r.splice(0,p)}return o}function Pe(e,t,i){const s=e.currentDevicePixelRatio,n=i!==0?Math.max(i/2,.5):0;return Math.round((t-n)*s)/s+n}function wo(e,t){!t&&!e||(t=t||e.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function Jn(e,t,i,s){rc(e,t,i,s,null)}function rc(e,t,i,s,n){let r,o,a,l,c,h,d,u;const p=t.pointStyle,g=t.rotation,f=t.radius;let b=(g||0)*zp;if(p&&typeof p=="object"&&(r=p.toString(),r==="[object HTMLImageElement]"||r==="[object HTMLCanvasElement]")){e.save(),e.translate(i,s),e.rotate(b),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(f)||f<=0)){switch(e.beginPath(),p){default:n?e.ellipse(i,s,n/2,f,0,0,Y):e.arc(i,s,f,0,Y),e.closePath();break;case"triangle":h=n?n/2:f,e.moveTo(i+Math.sin(b)*h,s-Math.cos(b)*f),b+=fo,e.lineTo(i+Math.sin(b)*h,s-Math.cos(b)*f),b+=fo,e.lineTo(i+Math.sin(b)*h,s-Math.cos(b)*f),e.closePath();break;case"rectRounded":c=f*.516,l=f-c,o=Math.cos(b+Ae)*l,d=Math.cos(b+Ae)*(n?n/2-c:l),a=Math.sin(b+Ae)*l,u=Math.sin(b+Ae)*(n?n/2-c:l),e.arc(i-d,s-a,c,b-B,b-tt),e.arc(i+u,s-o,c,b-tt,b),e.arc(i+d,s+a,c,b,b+tt),e.arc(i-u,s+o,c,b+tt,b+B),e.closePath();break;case"rect":if(!g){l=Math.SQRT1_2*f,h=n?n/2:l,e.rect(i-h,s-l,2*h,2*l);break}b+=Ae;case"rectRot":d=Math.cos(b)*(n?n/2:f),o=Math.cos(b)*f,a=Math.sin(b)*f,u=Math.sin(b)*(n?n/2:f),e.moveTo(i-d,s-a),e.lineTo(i+u,s-o),e.lineTo(i+d,s+a),e.lineTo(i-u,s+o),e.closePath();break;case"crossRot":b+=Ae;case"cross":d=Math.cos(b)*(n?n/2:f),o=Math.cos(b)*f,a=Math.sin(b)*f,u=Math.sin(b)*(n?n/2:f),e.moveTo(i-d,s-a),e.lineTo(i+d,s+a),e.moveTo(i+u,s-o),e.lineTo(i-u,s+o);break;case"star":d=Math.cos(b)*(n?n/2:f),o=Math.cos(b)*f,a=Math.sin(b)*f,u=Math.sin(b)*(n?n/2:f),e.moveTo(i-d,s-a),e.lineTo(i+d,s+a),e.moveTo(i+u,s-o),e.lineTo(i-u,s+o),b+=Ae,d=Math.cos(b)*(n?n/2:f),o=Math.cos(b)*f,a=Math.sin(b)*f,u=Math.sin(b)*(n?n/2:f),e.moveTo(i-d,s-a),e.lineTo(i+d,s+a),e.moveTo(i+u,s-o),e.lineTo(i-u,s+o);break;case"line":o=n?n/2:Math.cos(b)*f,a=Math.sin(b)*f,e.moveTo(i-o,s-a),e.lineTo(i+o,s+a);break;case"dash":e.moveTo(i,s),e.lineTo(i+Math.cos(b)*(n?n/2:f),s+Math.sin(b)*f);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function Jt(e,t,i){return i=i||.5,!t||e&&e.x>t.left-i&&e.x<t.right+i&&e.y>t.top-i&&e.y<t.bottom+i}function ln(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function cn(e){e.restore()}function tf(e,t,i,s,n){if(!t)return e.lineTo(i.x,i.y);if(n==="middle"){const r=(t.x+i.x)/2;e.lineTo(r,t.y),e.lineTo(r,i.y)}else n==="after"!=!!s?e.lineTo(t.x,i.y):e.lineTo(i.x,t.y);e.lineTo(i.x,i.y)}function ef(e,t,i,s){if(!t)return e.lineTo(i.x,i.y);e.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?i.cp2x:i.cp1x,s?i.cp2y:i.cp1y,i.x,i.y)}function sf(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),L(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function nf(e,t,i,s,n){if(n.strikethrough||n.underline){const r=e.measureText(s),o=t-r.actualBoundingBoxLeft,a=t+r.actualBoundingBoxRight,l=i-r.actualBoundingBoxAscent,c=i+r.actualBoundingBoxDescent,h=n.strikethrough?(l+c)/2:c;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=n.decorationWidth||2,e.moveTo(o,h),e.lineTo(a,h),e.stroke()}}function rf(e,t){const i=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=i}function Fe(e,t,i,s,n,r={}){const o=q(t)?t:[t],a=r.strokeWidth>0&&r.strokeColor!=="";let l,c;for(e.save(),e.font=n.string,sf(e,r),l=0;l<o.length;++l)c=o[l],r.backdrop&&rf(e,r.backdrop),a&&(r.strokeColor&&(e.strokeStyle=r.strokeColor),L(r.strokeWidth)||(e.lineWidth=r.strokeWidth),e.strokeText(c,i,s,r.maxWidth)),e.fillText(c,i,s,r.maxWidth),nf(e,i,s,c,r),s+=Number(n.lineHeight);e.restore()}function ji(e,t){const{x:i,y:s,w:n,h:r,radius:o}=t;e.arc(i+o.topLeft,s+o.topLeft,o.topLeft,1.5*B,B,!0),e.lineTo(i,s+r-o.bottomLeft),e.arc(i+o.bottomLeft,s+r-o.bottomLeft,o.bottomLeft,B,tt,!0),e.lineTo(i+n-o.bottomRight,s+r),e.arc(i+n-o.bottomRight,s+r-o.bottomRight,o.bottomRight,tt,0,!0),e.lineTo(i+n,s+o.topRight),e.arc(i+n-o.topRight,s+o.topRight,o.topRight,0,-tt,!0),e.lineTo(i+o.topLeft,s)}const of=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,af=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function lf(e,t){const i=(""+e).match(of);if(!i||i[1]==="normal")return t*1.2;switch(e=+i[2],i[3]){case"px":return e;case"%":e/=100;break}return t*e}const cf=e=>+e||0;function Er(e,t){const i={},s=R(t),n=s?Object.keys(t):t,r=R(e)?s?o=>z(e[o],e[t[o]]):o=>e[o]:()=>e;for(const o of n)i[o]=cf(r(o));return i}function oc(e){return Er(e,{top:"y",right:"x",bottom:"y",left:"x"})}function $e(e){return Er(e,["topLeft","topRight","bottomLeft","bottomRight"])}function ct(e){const t=oc(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function st(e,t){e=e||{},t=t||X.font;let i=z(e.size,t.size);typeof i=="string"&&(i=parseInt(i,10));let s=z(e.style,t.style);s&&!(""+s).match(af)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:z(e.family,t.family),lineHeight:lf(z(e.lineHeight,t.lineHeight),i),size:i,style:s,weight:z(e.weight,t.weight),string:""};return n.string=Jp(n),n}function U(e,t,i,s){let n,r,o;for(n=0,r=e.length;n<r;++n)if(o=e[n],o!==void 0&&(t!==void 0&&typeof o=="function"&&(o=o(t)),i!==void 0&&q(o)&&(o=o[i%o.length]),o!==void 0))return o}function hf(e,t,i){const{min:s,max:n}=e,r=Xl(t,(n-s)/2),o=(a,l)=>i&&a===0?0:a+l;return{min:o(s,-Math.abs(r)),max:o(n,r)}}function Me(e,t){return Object.assign(Object.create(e),t)}function Dr(e,t=[""],i,s,n=()=>e[0]){const r=i||e;typeof s>"u"&&(s=hc("_fallback",e));const o={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:e,_rootScopes:r,_fallback:s,_getTarget:n,override:a=>Dr([a,...e],t,r,s)};return new Proxy(o,{deleteProperty(a,l){return delete a[l],delete a._keys,delete e[0][l],!0},get(a,l){return lc(a,l,()=>vf(l,t,e,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(a,l){return So(a).includes(l)},ownKeys(a){return So(a)},set(a,l,c){const h=a._storage||(a._storage=n());return a[l]=h[l]=c,delete a._keys,!0}})}function oi(e,t,i,s){const n={_cacheable:!1,_proxy:e,_context:t,_subProxy:i,_stack:new Set,_descriptors:ac(e,s),setContext:r=>oi(e,r,i,s),override:r=>oi(e.override(r),t,i,s)};return new Proxy(n,{deleteProperty(r,o){return delete r[o],delete e[o],!0},get(r,o,a){return lc(r,o,()=>uf(r,o,a))},getOwnPropertyDescriptor(r,o){return r._descriptors.allKeys?Reflect.has(e,o)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,o)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(r,o){return Reflect.has(e,o)},ownKeys(){return Reflect.ownKeys(e)},set(r,o,a){return e[o]=a,delete r[o],!0}})}function ac(e,t={scriptable:!0,indexable:!0}){const{_scriptable:i=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=e;return{allKeys:n,scriptable:i,indexable:s,isScriptable:ve(i)?i:()=>i,isIndexable:ve(s)?s:()=>s}}const df=(e,t)=>e?e+wr(t):t,Ar=(e,t)=>R(t)&&e!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function lc(e,t,i){if(Object.prototype.hasOwnProperty.call(e,t)||t==="constructor")return e[t];const s=i();return e[t]=s,s}function uf(e,t,i){const{_proxy:s,_context:n,_subProxy:r,_descriptors:o}=e;let a=s[t];return ve(a)&&o.isScriptable(t)&&(a=pf(t,a,e,i)),q(a)&&a.length&&(a=ff(t,a,e,o.isIndexable)),Ar(t,a)&&(a=oi(a,n,r&&r[t],o)),a}function pf(e,t,i,s){const{_proxy:n,_context:r,_subProxy:o,_stack:a}=i;if(a.has(e))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+e);a.add(e);let l=t(r,o||s);return a.delete(e),Ar(e,l)&&(l=Pr(n._scopes,n,e,l)),l}function ff(e,t,i,s){const{_proxy:n,_context:r,_subProxy:o,_descriptors:a}=i;if(typeof r.index<"u"&&s(e))return t[r.index%t.length];if(R(t[0])){const l=t,c=n._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=Pr(c,n,e,h);t.push(oi(d,r,o&&o[e],a))}}return t}function cc(e,t,i){return ve(e)?e(t,i):e}const gf=(e,t)=>e===!0?t:typeof e=="string"?me(t,e):void 0;function bf(e,t,i,s,n){for(const r of t){const o=gf(i,r);if(o){e.add(o);const a=cc(o._fallback,i,n);if(typeof a<"u"&&a!==i&&a!==s)return a}else if(o===!1&&typeof s<"u"&&i!==s)return null}return!1}function Pr(e,t,i,s){const n=t._rootScopes,r=cc(t._fallback,i,s),o=[...e,...n],a=new Set;a.add(s);let l=ko(a,o,i,r||i,s);return l===null||typeof r<"u"&&r!==i&&(l=ko(a,o,r,l,s),l===null)?!1:Dr(Array.from(a),[""],n,r,()=>mf(t,i,s))}function ko(e,t,i,s,n){for(;i;)i=bf(e,t,i,s,n);return i}function mf(e,t,i){const s=e._getTarget();t in s||(s[t]={});const n=s[t];return q(n)&&R(i)?i:n||{}}function vf(e,t,i,s){let n;for(const r of t)if(n=hc(df(r,e),i),typeof n<"u")return Ar(e,n)?Pr(i,s,e,n):n}function hc(e,t){for(const i of t){if(!i)continue;const s=i[e];if(typeof s<"u")return s}}function So(e){let t=e._keys;return t||(t=e._keys=yf(e._scopes)),t}function yf(e){const t=new Set;for(const i of e)for(const s of Object.keys(i).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function dc(e,t,i,s){const{iScale:n}=e,{key:r="r"}=this._parsing,o=new Array(s);let a,l,c,h;for(a=0,l=s;a<l;++a)c=a+i,h=t[c],o[a]={r:n.parse(me(h,r),c)};return o}const xf=Number.EPSILON||1e-14,ai=(e,t)=>t<e.length&&!e[t].skip&&e[t],uc=e=>e==="x"?"y":"x";function _f(e,t,i,s){const n=e.skip?t:e,r=t,o=i.skip?t:i,a=Gn(r,n),l=Gn(o,r);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=s*c,u=s*h;return{previous:{x:r.x-d*(o.x-n.x),y:r.y-d*(o.y-n.y)},next:{x:r.x+u*(o.x-n.x),y:r.y+u*(o.y-n.y)}}}function wf(e,t,i){const s=e.length;let n,r,o,a,l,c=ai(e,0);for(let h=0;h<s-1;++h)if(l=c,c=ai(e,h+1),!(!l||!c)){if(Di(t[h],0,xf)){i[h]=i[h+1]=0;continue}n=i[h]/t[h],r=i[h+1]/t[h],a=Math.pow(n,2)+Math.pow(r,2),!(a<=9)&&(o=3/Math.sqrt(a),i[h]=n*o*t[h],i[h+1]=r*o*t[h])}}function kf(e,t,i="x"){const s=uc(i),n=e.length;let r,o,a,l=ai(e,0);for(let c=0;c<n;++c){if(o=a,a=l,l=ai(e,c+1),!a)continue;const h=a[i],d=a[s];o&&(r=(h-o[i])/3,a[`cp1${i}`]=h-r,a[`cp1${s}`]=d-r*t[c]),l&&(r=(l[i]-h)/3,a[`cp2${i}`]=h+r,a[`cp2${s}`]=d+r*t[c])}}function Sf(e,t="x"){const i=uc(t),s=e.length,n=Array(s).fill(0),r=Array(s);let o,a,l,c=ai(e,0);for(o=0;o<s;++o)if(a=l,l=c,c=ai(e,o+1),!!l){if(c){const h=c[t]-l[t];n[o]=h!==0?(c[i]-l[i])/h:0}r[o]=a?c?It(n[o-1])!==It(n[o])?0:(n[o-1]+n[o])/2:n[o-1]:n[o]}wf(e,n,r),kf(e,r,t)}function ds(e,t,i){return Math.max(Math.min(e,i),t)}function Mf(e,t){let i,s,n,r,o,a=Jt(e[0],t);for(i=0,s=e.length;i<s;++i)o=r,r=a,a=i<s-1&&Jt(e[i+1],t),r&&(n=e[i],o&&(n.cp1x=ds(n.cp1x,t.left,t.right),n.cp1y=ds(n.cp1y,t.top,t.bottom)),a&&(n.cp2x=ds(n.cp2x,t.left,t.right),n.cp2y=ds(n.cp2y,t.top,t.bottom)))}function Cf(e,t,i,s,n){let r,o,a,l;if(t.spanGaps&&(e=e.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Sf(e,n);else{let c=s?e[e.length-1]:e[0];for(r=0,o=e.length;r<o;++r)a=e[r],l=_f(c,a,e[Math.min(r+1,o-(s?0:1))%o],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&Mf(e,i)}function Or(){return typeof window<"u"&&typeof document<"u"}function Tr(e){let t=e.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Ws(e,t,i){let s;return typeof e=="string"?(s=parseInt(e,10),e.indexOf("%")!==-1&&(s=s/100*t.parentNode[i])):s=e,s}const hn=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function Ef(e,t){return hn(e).getPropertyValue(t)}const Df=["top","right","bottom","left"];function Ie(e,t,i){const s={};i=i?"-"+i:"";for(let n=0;n<4;n++){const r=Df[n];s[r]=parseFloat(e[t+"-"+r+i])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const Af=(e,t,i)=>(e>0||t>0)&&(!i||!i.shadowRoot);function Pf(e,t){const i=e.touches,s=i&&i.length?i[0]:e,{offsetX:n,offsetY:r}=s;let o=!1,a,l;if(Af(n,r,e.target))a=n,l=r;else{const c=t.getBoundingClientRect();a=s.clientX-c.left,l=s.clientY-c.top,o=!0}return{x:a,y:l,box:o}}function ze(e,t){if("native"in e)return e;const{canvas:i,currentDevicePixelRatio:s}=t,n=hn(i),r=n.boxSizing==="border-box",o=Ie(n,"padding"),a=Ie(n,"border","width"),{x:l,y:c,box:h}=Pf(e,i),d=o.left+(h&&a.left),u=o.top+(h&&a.top);let{width:p,height:g}=t;return r&&(p-=o.width+a.width,g-=o.height+a.height),{x:Math.round((l-d)/p*i.width/s),y:Math.round((c-u)/g*i.height/s)}}function Of(e,t,i){let s,n;if(t===void 0||i===void 0){const r=e&&Tr(e);if(!r)t=e.clientWidth,i=e.clientHeight;else{const o=r.getBoundingClientRect(),a=hn(r),l=Ie(a,"border","width"),c=Ie(a,"padding");t=o.width-c.width-l.width,i=o.height-c.height-l.height,s=Ws(a.maxWidth,r,"clientWidth"),n=Ws(a.maxHeight,r,"clientHeight")}}return{width:t,height:i,maxWidth:s||Hs,maxHeight:n||Hs}}const de=e=>Math.round(e*10)/10;function Tf(e,t,i,s){const n=hn(e),r=Ie(n,"margin"),o=Ws(n.maxWidth,e,"clientWidth")||Hs,a=Ws(n.maxHeight,e,"clientHeight")||Hs,l=Of(e,t,i);let{width:c,height:h}=l;if(n.boxSizing==="content-box"){const d=Ie(n,"border","width"),u=Ie(n,"padding");c-=u.width+d.width,h-=u.height+d.height}return c=Math.max(0,c-r.width),h=Math.max(0,s?c/s:h-r.height),c=de(Math.min(c,o,l.maxWidth)),h=de(Math.min(h,a,l.maxHeight)),c&&!h&&(h=de(c/2)),(t!==void 0||i!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,c=de(Math.floor(h*s))),{width:c,height:h}}function Mo(e,t,i){const s=t||1,n=de(e.height*s),r=de(e.width*s);e.height=de(e.height),e.width=de(e.width);const o=e.canvas;return o.style&&(i||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==s||o.height!==n||o.width!==r?(e.currentDevicePixelRatio=s,o.height=n,o.width=r,e.ctx.setTransform(s,0,0,s,0,0),!0):!1}const zf=function(){let e=!1;try{const t={get passive(){return e=!0,!1}};Or()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return e}();function Co(e,t){const i=Ef(e,t),s=i&&i.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Le(e,t,i,s){return{x:e.x+i*(t.x-e.x),y:e.y+i*(t.y-e.y)}}function Lf(e,t,i,s){return{x:e.x+i*(t.x-e.x),y:s==="middle"?i<.5?e.y:t.y:s==="after"?i<1?e.y:t.y:i>0?t.y:e.y}}function Rf(e,t,i,s){const n={x:e.cp2x,y:e.cp2y},r={x:t.cp1x,y:t.cp1y},o=Le(e,n,i),a=Le(n,r,i),l=Le(r,t,i),c=Le(o,a,i),h=Le(a,l,i);return Le(c,h,i)}const $f=function(e,t){return{x(i){return e+e+t-i},setWidth(i){t=i},textAlign(i){return i==="center"?i:i==="right"?"left":"right"},xPlus(i,s){return i-s},leftForLtr(i,s){return i-s}}},If=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function Ze(e,t,i){return e?$f(t,i):If()}function pc(e,t){let i,s;(t==="ltr"||t==="rtl")&&(i=e.canvas.style,s=[i.getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",t,"important"),e.prevTextDirection=s)}function fc(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty("direction",t[0],t[1]))}function gc(e){return e==="angle"?{between:Vi,compare:Ip,normalize:pt}:{between:Gt,compare:(t,i)=>t-i,normalize:t=>t}}function Eo({start:e,end:t,count:i,loop:s,style:n}){return{start:e%i,end:t%i,loop:s&&(t-e+1)%i===0,style:n}}function Bf(e,t,i){const{property:s,start:n,end:r}=i,{between:o,normalize:a}=gc(s),l=t.length;let{start:c,end:h,loop:d}=e,u,p;if(d){for(c+=l,h+=l,u=0,p=l;u<p&&o(a(t[c%l][s]),n,r);++u)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:d,style:e.style}}function bc(e,t,i){if(!i)return[e];const{property:s,start:n,end:r}=i,o=t.length,{compare:a,between:l,normalize:c}=gc(s),{start:h,end:d,loop:u,style:p}=Bf(e,t,i),g=[];let f=!1,b=null,m,y,x;const _=()=>l(n,x,m)&&a(n,x)!==0,k=()=>a(r,m)===0||l(r,x,m),w=()=>f||_(),M=()=>!f||k();for(let C=h,A=h;C<=d;++C)y=t[C%o],!y.skip&&(m=c(y[s]),m!==x&&(f=l(m,n,r),b===null&&w()&&(b=a(m,n)===0?C:A),b!==null&&M()&&(g.push(Eo({start:b,end:C,loop:u,count:o,style:p})),b=null),A=C,x=m));return b!==null&&g.push(Eo({start:b,end:d,loop:u,count:o,style:p})),g}function mc(e,t){const i=[],s=e.segments;for(let n=0;n<s.length;n++){const r=bc(s[n],e.points,t);r.length&&i.push(...r)}return i}function Ff(e,t,i,s){let n=0,r=t-1;if(i&&!s)for(;n<t&&!e[n].skip;)n++;for(;n<t&&e[n].skip;)n++;for(n%=t,i&&(r+=n);r>n&&e[r%t].skip;)r--;return r%=t,{start:n,end:r}}function Vf(e,t,i,s){const n=e.length,r=[];let o=t,a=e[t],l;for(l=t+1;l<=i;++l){const c=e[l%n];c.skip||c.stop?a.skip||(s=!1,r.push({start:t%n,end:(l-1)%n,loop:s}),t=o=c.stop?l:null):(o=l,a.skip&&(t=l)),a=c}return o!==null&&r.push({start:t%n,end:o%n,loop:s}),r}function jf(e,t){const i=e.points,s=e.options.spanGaps,n=i.length;if(!n)return[];const r=!!e._loop,{start:o,end:a}=Ff(i,n,r,s);if(s===!0)return Do(e,[{start:o,end:a,loop:r}],i,t);const l=a<o?a+n:a,c=!!e._fullLoop&&o===0&&a===n-1;return Do(e,Vf(i,o,l,c),i,t)}function Do(e,t,i,s){return!s||!s.setContext||!i?t:Hf(e,t,i,s)}function Hf(e,t,i,s){const n=e._chart.getContext(),r=Ao(e.options),{_datasetIndex:o,options:{spanGaps:a}}=e,l=i.length,c=[];let h=r,d=t[0].start,u=d;function p(g,f,b,m){const y=a?-1:1;if(g!==f){for(g+=l;i[g%l].skip;)g-=y;for(;i[f%l].skip;)f+=y;g%l!==f%l&&(c.push({start:g%l,end:f%l,loop:b,style:m}),h=m,d=f%l)}}for(const g of t){d=a?d:g.start;let f=i[d%l],b;for(u=d+1;u<=g.end;u++){const m=i[u%l];b=Ao(s.setContext(Me(n,{type:"segment",p0:f,p1:m,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:o}))),Nf(b,h)&&p(d,u-1,g.loop,h),f=m,h=b}d<u-1&&p(d,u-1,g.loop,h)}return c}function Ao(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Nf(e,t){if(!t)return!1;const i=[],s=function(n,r){return Cr(r)?(i.includes(r)||i.push(r),i.indexOf(r)):r};return JSON.stringify(e,s)!==JSON.stringify(t,s)}function us(e,t,i){return e.options.clip?e[i]:t[i]}function Wf(e,t){const{xScale:i,yScale:s}=e;return i&&s?{left:us(i,t,"left"),right:us(i,t,"right"),top:us(s,t,"top"),bottom:us(s,t,"bottom")}:t}function vc(e,t){const i=t._clip;if(i.disabled)return!1;const s=Wf(t,e.chartArea);return{left:i.left===!1?0:s.left-(i.left===!0?0:i.left),right:i.right===!1?e.width:s.right+(i.right===!0?0:i.right),top:i.top===!1?0:s.top-(i.top===!0?0:i.top),bottom:i.bottom===!1?e.height:s.bottom+(i.bottom===!0?0:i.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class Uf{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,i,s,n){const r=i.listeners[n],o=i.duration;r.forEach(a=>a({chart:t,initial:i.initial,numSteps:o,currentStep:Math.min(s-i.start,o)}))}_refresh(){this._request||(this._running=!0,this._request=tc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let i=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const r=s.items;let o=r.length-1,a=!1,l;for(;o>=0;--o)l=r[o],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(r[o]=r[r.length-1],r.pop());a&&(n.draw(),this._notify(n,s,t,"progress")),r.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),i+=r.length}),this._lastDate=t,i===0&&(this._running=!1)}_getAnims(t){const i=this._charts;let s=i.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},i.set(t,s)),s}listen(t,i,s){this._getAnims(t).listeners[i].push(s)}add(t,i){!i||!i.length||this._getAnims(t).items.push(...i)}has(t){return this._getAnims(t).items.length>0}start(t){const i=this._charts.get(t);i&&(i.running=!0,i.start=Date.now(),i.duration=i.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const i=this._charts.get(t);return!(!i||!i.running||!i.items.length)}stop(t){const i=this._charts.get(t);if(!i||!i.items.length)return;const s=i.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();i.items=[],this._notify(t,i,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Ut=new Uf;const Po="transparent",qf={boolean(e,t,i){return i>.5?t:e},color(e,t,i){const s=xo(e||Po),n=s.valid&&xo(t||Po);return n&&n.valid?n.mix(s,i).hexString():t},number(e,t,i){return e+(t-e)*i}};class Yf{constructor(t,i,s,n){const r=i[s];n=U([t.to,n,r,t.from]);const o=U([t.from,r,n]);this._active=!0,this._fn=t.fn||qf[t.type||typeof o],this._easing=Ai[t.easing]||Ai.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=i,this._prop=s,this._from=o,this._to=n,this._promises=void 0}active(){return this._active}update(t,i,s){if(this._active){this._notify(!1);const n=this._target[this._prop],r=s-this._start,o=this._duration-r;this._start=s,this._duration=Math.floor(Math.max(o,t.duration)),this._total+=r,this._loop=!!t.loop,this._to=U([t.to,i,n,t.from]),this._from=U([t.from,n,i])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const i=t-this._start,s=this._duration,n=this._prop,r=this._from,o=this._loop,a=this._to;let l;if(this._active=r!==a&&(o||i<s),!this._active){this._target[n]=a,this._notify(!0);return}if(i<0){this._target[n]=r;return}l=i/s%2,l=o&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(r,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((i,s)=>{t.push({res:i,rej:s})})}_notify(t){const i=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][i]()}}class yc{constructor(t,i){this._chart=t,this._properties=new Map,this.configure(i)}configure(t){if(!R(t))return;const i=Object.keys(X.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const r=t[n];if(!R(r))return;const o={};for(const a of i)o[a]=r[a];(q(r.properties)&&r.properties||[n]).forEach(a=>{(a===n||!s.has(a))&&s.set(a,o)})})}_animateOptions(t,i){const s=i.options,n=Kf(t,s);if(!n)return[];const r=this._createAnimations(n,s);return s.$shared&&Xf(t.options.$animations,s).then(()=>{t.options=s},()=>{}),r}_createAnimations(t,i){const s=this._properties,n=[],r=t.$animations||(t.$animations={}),o=Object.keys(i),a=Date.now();let l;for(l=o.length-1;l>=0;--l){const c=o[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,i));continue}const h=i[c];let d=r[c];const u=s.get(c);if(d)if(u&&d.active()){d.update(u,h,a);continue}else d.cancel();if(!u||!u.duration){t[c]=h;continue}r[c]=d=new Yf(u,t,c,h),n.push(d)}return n}update(t,i){if(this._properties.size===0){Object.assign(t,i);return}const s=this._createAnimations(t,i);if(s.length)return Ut.add(this._chart,s),!0}}function Xf(e,t){const i=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const r=e[s[n]];r&&r.active()&&i.push(r.wait())}return Promise.all(i)}function Kf(e,t){if(!t)return;let i=e.options;if(!i){e.options=t;return}return i.$shared&&(e.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}function Oo(e,t){const i=e&&e.options||{},s=i.reverse,n=i.min===void 0?t:0,r=i.max===void 0?t:0;return{start:s?r:n,end:s?n:r}}function Gf(e,t,i){if(i===!1)return!1;const s=Oo(e,i),n=Oo(t,i);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function Qf(e){let t,i,s,n;return R(e)?(t=e.top,i=e.right,s=e.bottom,n=e.left):t=i=s=n=e,{top:t,right:i,bottom:s,left:n,disabled:e===!1}}function xc(e,t){const i=[],s=e._getSortedDatasetMetas(t);let n,r;for(n=0,r=s.length;n<r;++n)i.push(s[n].index);return i}function To(e,t,i,s={}){const n=e.keys,r=s.mode==="single";let o,a,l,c;if(t===null)return;let h=!1;for(o=0,a=n.length;o<a;++o){if(l=+n[o],l===i){if(h=!0,s.all)continue;break}c=e.values[l],J(c)&&(r||t===0||It(t)===It(c))&&(t+=c)}return!h&&!s.all?0:t}function Jf(e,t){const{iScale:i,vScale:s}=t,n=i.axis==="x"?"x":"y",r=s.axis==="x"?"x":"y",o=Object.keys(e),a=new Array(o.length);let l,c,h;for(l=0,c=o.length;l<c;++l)h=o[l],a[l]={[n]:h,[r]:e[h]};return a}function kn(e,t){const i=e&&e.options.stacked;return i||i===void 0&&t.stack!==void 0}function Zf(e,t,i){return`${e.id}.${t.id}.${i.stack||i.type}`}function tg(e){const{min:t,max:i,minDefined:s,maxDefined:n}=e.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?i:Number.POSITIVE_INFINITY}}function eg(e,t,i){const s=e[t]||(e[t]={});return s[i]||(s[i]={})}function zo(e,t,i,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const r=e[n.index];if(i&&r>0||!i&&r<0)return n.index}return null}function Lo(e,t){const{chart:i,_cachedMeta:s}=e,n=i._stacks||(i._stacks={}),{iScale:r,vScale:o,index:a}=s,l=r.axis,c=o.axis,h=Zf(r,o,s),d=t.length;let u;for(let p=0;p<d;++p){const g=t[p],{[l]:f,[c]:b}=g,m=g._stacks||(g._stacks={});u=m[c]=eg(n,h,f),u[a]=b,u._top=zo(u,o,!0,s.type),u._bottom=zo(u,o,!1,s.type);const y=u._visualValues||(u._visualValues={});y[a]=b}}function Sn(e,t){const i=e.scales;return Object.keys(i).filter(s=>i[s].axis===t).shift()}function ig(e,t){return Me(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function sg(e,t,i){return Me(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:i,index:t,mode:"default",type:"data"})}function gi(e,t){const i=e.controller.index,s=e.vScale&&e.vScale.axis;if(s){t=t||e._parsed;for(const n of t){const r=n._stacks;if(!r||r[s]===void 0||r[s][i]===void 0)return;delete r[s][i],r[s]._visualValues!==void 0&&r[s]._visualValues[i]!==void 0&&delete r[s]._visualValues[i]}}}const Mn=e=>e==="reset"||e==="none",Ro=(e,t)=>t?e:Object.assign({},e),ng=(e,t,i)=>e&&!t.hidden&&t._stacked&&{keys:xc(i,!0),values:null};class zt{constructor(t,i){this.chart=t,this._ctx=t.ctx,this.index=i,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=kn(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&gi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,i=this._cachedMeta,s=this.getDataset(),n=(d,u,p,g)=>d==="x"?u:d==="r"?g:p,r=i.xAxisID=z(s.xAxisID,Sn(t,"x")),o=i.yAxisID=z(s.yAxisID,Sn(t,"y")),a=i.rAxisID=z(s.rAxisID,Sn(t,"r")),l=i.indexAxis,c=i.iAxisID=n(l,r,o,a),h=i.vAxisID=n(l,o,r,a);i.xScale=this.getScaleForId(r),i.yScale=this.getScaleForId(o),i.rScale=this.getScaleForId(a),i.iScale=this.getScaleForId(c),i.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const i=this._cachedMeta;return t===i.iScale?i.vScale:i.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&mo(this._data,this),t._stacked&&gi(t)}_dataCheck(){const t=this.getDataset(),i=t.data||(t.data=[]),s=this._data;if(R(i)){const n=this._cachedMeta;this._data=Jf(i,n)}else if(s!==i){if(s){mo(s,this);const n=this._cachedMeta;gi(n),n._parsed=[]}i&&Object.isExtensible(i)&&jp(i,this),this._syncList=[],this._data=i}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const i=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const r=i._stacked;i._stacked=kn(i.vScale,i),i.stack!==s.stack&&(n=!0,gi(i),i.stack=s.stack),this._resyncElements(t),(n||r!==i._stacked)&&(Lo(this,i._parsed),i._stacked=kn(i.vScale,i))}configure(){const t=this.chart.config,i=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),i,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,i){const{_cachedMeta:s,_data:n}=this,{iScale:r,_stacked:o}=s,a=r.axis;let l=t===0&&i===n.length?!0:s._sorted,c=t>0&&s._parsed[t-1],h,d,u;if(this._parsing===!1)s._parsed=n,s._sorted=!0,u=n;else{q(n[t])?u=this.parseArrayData(s,n,t,i):R(n[t])?u=this.parseObjectData(s,n,t,i):u=this.parsePrimitiveData(s,n,t,i);const p=()=>d[a]===null||c&&d[a]<c[a];for(h=0;h<i;++h)s._parsed[h+t]=d=u[h],l&&(p()&&(l=!1),c=d);s._sorted=l}o&&Lo(this,u)}parsePrimitiveData(t,i,s,n){const{iScale:r,vScale:o}=t,a=r.axis,l=o.axis,c=r.getLabels(),h=r===o,d=new Array(n);let u,p,g;for(u=0,p=n;u<p;++u)g=u+s,d[u]={[a]:h||r.parse(c[g],g),[l]:o.parse(i[g],g)};return d}parseArrayData(t,i,s,n){const{xScale:r,yScale:o}=t,a=new Array(n);let l,c,h,d;for(l=0,c=n;l<c;++l)h=l+s,d=i[h],a[l]={x:r.parse(d[0],h),y:o.parse(d[1],h)};return a}parseObjectData(t,i,s,n){const{xScale:r,yScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(n);let h,d,u,p;for(h=0,d=n;h<d;++h)u=h+s,p=i[u],c[h]={x:r.parse(me(p,a),u),y:o.parse(me(p,l),u)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,i,s){const n=this.chart,r=this._cachedMeta,o=i[t.axis],a={keys:xc(n,!0),values:i._stacks[t.axis]._visualValues};return To(a,o,r.index,{mode:s})}updateRangeFromParsed(t,i,s,n){const r=s[i.axis];let o=r===null?NaN:r;const a=n&&s._stacks[i.axis];n&&a&&(n.values=a,o=To(n,r,this._cachedMeta.index)),t.min=Math.min(t.min,o),t.max=Math.max(t.max,o)}getMinMax(t,i){const s=this._cachedMeta,n=s._parsed,r=s._sorted&&t===s.iScale,o=n.length,a=this._getOtherScale(t),l=ng(i,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=tg(a);let u,p;function g(){p=n[u];const f=p[a.axis];return!J(p[t.axis])||h>f||d<f}for(u=0;u<o&&!(!g()&&(this.updateRangeFromParsed(c,t,p,l),r));++u);if(r){for(u=o-1;u>=0;--u)if(!g()){this.updateRangeFromParsed(c,t,p,l);break}}return c}getAllParsedValues(t){const i=this._cachedMeta._parsed,s=[];let n,r,o;for(n=0,r=i.length;n<r;++n)o=i[n][t.axis],J(o)&&s.push(o);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const i=this._cachedMeta,s=i.iScale,n=i.vScale,r=this.getParsed(t);return{label:s?""+s.getLabelForValue(r[s.axis]):"",value:n?""+n.getLabelForValue(r[n.axis]):""}}_update(t){const i=this._cachedMeta;this.update(t||"default"),i._clip=Qf(z(this.options.clip,Gf(i.xScale,i.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,i=this.chart,s=this._cachedMeta,n=s.data||[],r=i.chartArea,o=[],a=this._drawStart||0,l=this._drawCount||n.length-a,c=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,r,a,l),h=a;h<a+l;++h){const d=n[h];d.hidden||(d.active&&c?o.push(d):d.draw(t,r))}for(h=0;h<o.length;++h)o[h].draw(t,r)}getStyle(t,i){const s=i?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,i,s){const n=this.getDataset();let r;if(t>=0&&t<this._cachedMeta.data.length){const o=this._cachedMeta.data[t];r=o.$context||(o.$context=sg(this.getContext(),t,o)),r.parsed=this.getParsed(t),r.raw=n.data[t],r.index=r.dataIndex=t}else r=this.$context||(this.$context=ig(this.chart.getContext(),this.index)),r.dataset=n,r.index=r.datasetIndex=this.index;return r.active=!!i,r.mode=s,r}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,i){return this._resolveElementOptions(this.dataElementType.id,i,t)}_resolveElementOptions(t,i="default",s){const n=i==="active",r=this._cachedDataOpts,o=t+"-"+i,a=r[o],l=this.enableOptionSharing&&Fi(s);if(a)return Ro(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),d=n?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(this.getDataset(),h),p=Object.keys(X.elements[t]),g=()=>this.getContext(s,n,i),f=c.resolveNamedOptions(u,p,g,d);return f.$shared&&(f.$shared=l,r[o]=Object.freeze(Ro(f,l))),f}_resolveAnimations(t,i,s){const n=this.chart,r=this._cachedDataOpts,o=`animation-${i}`,a=r[o];if(a)return a;let l;if(n.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,i),u=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(u,this.getContext(t,s,i))}const c=new yc(n,l&&l.animations);return l&&l._cacheable&&(r[o]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,i){return!i||Mn(t)||this.chart._animationsDisabled}_getSharedOptions(t,i){const s=this.resolveDataElementOptions(t,i),n=this._sharedOptions,r=this.getSharedOptions(s),o=this.includeOptions(i,r)||r!==n;return this.updateSharedOptions(r,i,s),{sharedOptions:r,includeOptions:o}}updateElement(t,i,s,n){Mn(n)?Object.assign(t,s):this._resolveAnimations(i,n).update(t,s)}updateSharedOptions(t,i,s){t&&!Mn(i)&&this._resolveAnimations(void 0,i).update(t,s)}_setStyle(t,i,s,n){t.active=n;const r=this.getStyle(i,n);this._resolveAnimations(i,s,n).update(t,{options:!n&&this.getSharedOptions(r)||r})}removeHoverStyle(t,i,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,i,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const i=this._data,s=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const n=s.length,r=i.length,o=Math.min(r,n);o&&this.parse(0,o),r>n?this._insertElements(n,r-n,t):r<n&&this._removeElements(r,n-r)}_insertElements(t,i,s=!0){const n=this._cachedMeta,r=n.data,o=t+i;let a;const l=c=>{for(c.length+=i,a=c.length-1;a>=o;a--)c[a]=c[a-i]};for(l(r),a=t;a<o;++a)r[a]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,i),s&&this.updateElements(r,t,i,"reset")}updateElements(t,i,s,n){}_removeElements(t,i){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,i);s._stacked&&gi(s,n)}s.data.splice(t,i)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[i,s,n]=t;this[i](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,i){i&&this._sync(["_removeElements",t,i]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}E(zt,"defaults",{}),E(zt,"datasetElementType",null),E(zt,"dataElementType",null);function rg(e,t){if(!e._cache.$bar){const i=e.getMatchingVisibleMetas(t);let s=[];for(let n=0,r=i.length;n<r;n++)s=s.concat(i[n].controller.getAllParsedValues(e));e._cache.$bar=Zl(s.sort((n,r)=>n-r))}return e._cache.$bar}function og(e){const t=e.iScale,i=rg(t,e.type);let s=t._length,n,r,o,a;const l=()=>{o===32767||o===-32768||(Fi(a)&&(s=Math.min(s,Math.abs(o-a)||s)),a=o)};for(n=0,r=i.length;n<r;++n)o=t.getPixelForValue(i[n]),l();for(a=void 0,n=0,r=t.ticks.length;n<r;++n)o=t.getPixelForTick(n),l();return s}function ag(e,t,i,s){const n=i.barThickness;let r,o;return L(n)?(r=t.min*i.categoryPercentage,o=i.barPercentage):(r=n*s,o=1),{chunk:r/s,ratio:o,start:t.pixels[e]-r/2}}function lg(e,t,i,s){const n=t.pixels,r=n[e];let o=e>0?n[e-1]:null,a=e<n.length-1?n[e+1]:null;const l=i.categoryPercentage;o===null&&(o=r-(a===null?t.end-t.start:a-r)),a===null&&(a=r+r-o);const c=r-(r-Math.min(o,a))/2*l;return{chunk:Math.abs(a-o)/2*l/s,ratio:i.barPercentage,start:c}}function cg(e,t,i,s){const n=i.parse(e[0],s),r=i.parse(e[1],s),o=Math.min(n,r),a=Math.max(n,r);let l=o,c=a;Math.abs(o)>Math.abs(a)&&(l=a,c=o),t[i.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:r,min:o,max:a}}function _c(e,t,i,s){return q(e)?cg(e,t,i,s):t[i.axis]=i.parse(e,s),t}function $o(e,t,i,s){const n=e.iScale,r=e.vScale,o=n.getLabels(),a=n===r,l=[];let c,h,d,u;for(c=i,h=i+s;c<h;++c)u=t[c],d={},d[n.axis]=a||n.parse(o[c],c),l.push(_c(u,d,r,c));return l}function Cn(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function hg(e,t,i){return e!==0?It(e):(t.isHorizontal()?1:-1)*(t.min>=i?1:-1)}function dg(e){let t,i,s,n,r;return e.horizontal?(t=e.base>e.x,i="left",s="right"):(t=e.base<e.y,i="bottom",s="top"),t?(n="end",r="start"):(n="start",r="end"),{start:i,end:s,reverse:t,top:n,bottom:r}}function ug(e,t,i,s){let n=t.borderSkipped;const r={};if(!n){e.borderSkipped=r;return}if(n===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:o,end:a,reverse:l,top:c,bottom:h}=dg(e);n==="middle"&&i&&(e.enableBorderRadius=!0,(i._top||0)===s?n=c:(i._bottom||0)===s?n=h:(r[Io(h,o,a,l)]=!0,n=c)),r[Io(n,o,a,l)]=!0,e.borderSkipped=r}function Io(e,t,i,s){return s?(e=pg(e,t,i),e=Bo(e,i,t)):e=Bo(e,t,i),e}function pg(e,t,i){return e===t?i:e===i?t:e}function Bo(e,t,i){return e==="start"?t:e==="end"?i:e}function fg(e,{inflateAmount:t},i){e.inflateAmount=t==="auto"?i===1?.33:0:t}class Cs extends zt{parsePrimitiveData(t,i,s,n){return $o(t,i,s,n)}parseArrayData(t,i,s,n){return $o(t,i,s,n)}parseObjectData(t,i,s,n){const{iScale:r,vScale:o}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=r.axis==="x"?a:l,h=o.axis==="x"?a:l,d=[];let u,p,g,f;for(u=s,p=s+n;u<p;++u)f=i[u],g={},g[r.axis]=r.parse(me(f,c),u),d.push(_c(me(f,h),g,o,u));return d}updateRangeFromParsed(t,i,s,n){super.updateRangeFromParsed(t,i,s,n);const r=s._custom;r&&i===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const i=this._cachedMeta,{iScale:s,vScale:n}=i,r=this.getParsed(t),o=r._custom,a=Cn(o)?"["+o.start+", "+o.end+"]":""+n.getLabelForValue(r[n.axis]);return{label:""+s.getLabelForValue(r[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const i=this._cachedMeta;this.updateElements(i.data,0,i.data.length,t)}updateElements(t,i,s,n){const r=n==="reset",{index:o,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:u}=this._getSharedOptions(i,n);for(let p=i;p<i+s;p++){const g=this.getParsed(p),f=r||L(g[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(p),b=this._calculateBarIndexPixels(p,h),m=(g._stacks||{})[a.axis],y={horizontal:c,base:f.base,enableBorderRadius:!m||Cn(g._custom)||o===m._top||o===m._bottom,x:c?f.head:b.center,y:c?b.center:f.head,height:c?b.size:Math.abs(f.size),width:c?Math.abs(f.size):b.size};u&&(y.options=d||this.resolveDataElementOptions(p,t[p].active?"active":n));const x=y.options||t[p].options;ug(y,x,m,o),fg(y,x,h.ratio),this.updateElement(t[p],p,y,n)}}_getStacks(t,i){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),r=s.options.stacked,o=[],a=this._cachedMeta.controller.getParsed(i),l=a&&a[s.axis],c=h=>{const d=h._parsed.find(p=>p[s.axis]===l),u=d&&d[h.vScale.axis];if(L(u)||isNaN(u))return!0};for(const h of n)if(!(i!==void 0&&c(h))&&((r===!1||o.indexOf(h.stack)===-1||r===void 0&&h.stack===void 0)&&o.push(h.stack),h.index===t))break;return o.length||o.push(void 0),o}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,i=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===i).shift()}_getAxis(){const t={},i=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[z(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,i)]=!0;return Object.keys(t)}_getStackIndex(t,i,s){const n=this._getStacks(t,s),r=i!==void 0?n.indexOf(i):-1;return r===-1?n.length-1:r}_getRuler(){const t=this.options,i=this._cachedMeta,s=i.iScale,n=[];let r,o;for(r=0,o=i.data.length;r<o;++r)n.push(s.getPixelForValue(this.getParsed(r)[s.axis],r));const a=t.barThickness;return{min:a||og(i),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:i,_stacked:s,index:n},options:{base:r,minBarLength:o}}=this,a=r||0,l=this.getParsed(t),c=l._custom,h=Cn(c);let d=l[i.axis],u=0,p=s?this.applyStack(i,l,s):d,g,f;p!==d&&(u=p-d,p=d),h&&(d=c.barStart,p=c.barEnd-c.barStart,d!==0&&It(d)!==It(c.barEnd)&&(u=0),u+=d);const b=!L(r)&&!h?r:u;let m=i.getPixelForValue(b);if(this.chart.getDataVisibility(t)?g=i.getPixelForValue(u+p):g=m,f=g-m,Math.abs(f)<o){f=hg(f,i,a)*o,d===a&&(m-=f/2);const y=i.getPixelForDecimal(0),x=i.getPixelForDecimal(1),_=Math.min(y,x),k=Math.max(y,x);m=Math.max(Math.min(m,k),_),g=m+f,s&&!h&&(l._stacks[i.axis]._visualValues[n]=i.getValueForPixel(g)-i.getValueForPixel(m))}if(m===i.getPixelForValue(a)){const y=It(f)*i.getLineWidthForValue(a)/2;m+=y,f-=y}return{size:f,base:m,head:g,center:g+f/2}}_calculateBarIndexPixels(t,i){const s=i.scale,n=this.options,r=n.skipNull,o=z(n.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(i.grouped){const h=r?this._getStackCount(t):i.stackCount,d=n.barThickness==="flex"?lg(t,i,n,h*c):ag(t,i,n,h*c),u=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,p=this._getAxis().indexOf(z(u,this.getFirstScaleIdForIndexAxis())),g=this._getStackIndex(this.index,this._cachedMeta.stack,r?t:void 0)+p;a=d.start+d.chunk*g+d.chunk/2,l=Math.min(o,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(o,i.min*i.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,i=t.vScale,s=t.data,n=s.length;let r=0;for(;r<n;++r)this.getParsed(r)[i.axis]!==null&&!s[r].hidden&&s[r].draw(this._ctx)}}E(Cs,"id","bar"),E(Cs,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),E(Cs,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Es extends zt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,i,s,n){const r=super.parsePrimitiveData(t,i,s,n);for(let o=0;o<r.length;o++)r[o]._custom=this.resolveDataElementOptions(o+s).radius;return r}parseArrayData(t,i,s,n){const r=super.parseArrayData(t,i,s,n);for(let o=0;o<r.length;o++){const a=i[s+o];r[o]._custom=z(a[2],this.resolveDataElementOptions(o+s).radius)}return r}parseObjectData(t,i,s,n){const r=super.parseObjectData(t,i,s,n);for(let o=0;o<r.length;o++){const a=i[s+o];r[o]._custom=z(a&&a.r&&+a.r,this.resolveDataElementOptions(o+s).radius)}return r}getMaxOverflow(){const t=this._cachedMeta.data;let i=0;for(let s=t.length-1;s>=0;--s)i=Math.max(i,t[s].size(this.resolveDataElementOptions(s))/2);return i>0&&i}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:r}=i,o=this.getParsed(t),a=n.getLabelForValue(o.x),l=r.getLabelForValue(o.y),c=o._custom;return{label:s[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const i=this._cachedMeta.data;this.updateElements(i,0,i.length,t)}updateElements(t,i,s,n){const r=n==="reset",{iScale:o,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(i,n),h=o.axis,d=a.axis;for(let u=i;u<i+s;u++){const p=t[u],g=!r&&this.getParsed(u),f={},b=f[h]=r?o.getPixelForDecimal(.5):o.getPixelForValue(g[h]),m=f[d]=r?a.getBasePixel():a.getPixelForValue(g[d]);f.skip=isNaN(b)||isNaN(m),c&&(f.options=l||this.resolveDataElementOptions(u,p.active?"active":n),r&&(f.options.radius=0)),this.updateElement(p,u,f,n)}}resolveDataElementOptions(t,i){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,i);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const r=n.radius;return i!=="active"&&(n.radius=0),n.radius+=z(s&&s._custom,r),n}}E(Es,"id","bubble"),E(Es,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),E(Es,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function gg(e,t,i){let s=1,n=1,r=0,o=0;if(t<Y){const a=e,l=a+t,c=Math.cos(a),h=Math.sin(a),d=Math.cos(l),u=Math.sin(l),p=(x,_,k)=>Vi(x,a,l,!0)?1:Math.max(_,_*i,k,k*i),g=(x,_,k)=>Vi(x,a,l,!0)?-1:Math.min(_,_*i,k,k*i),f=p(0,c,d),b=p(tt,h,u),m=g(B,c,d),y=g(B+tt,h,u);s=(f-m)/2,n=(b-y)/2,r=-(f+m)/2,o=-(b+y)/2}return{ratioX:s,ratioY:n,offsetX:r,offsetY:o}}class Re extends zt{constructor(t,i){super(t,i),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,i){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let r=l=>+s[l];if(R(s[t])){const{key:l="value"}=this._parsing;r=c=>+me(s[c],l)}let o,a;for(o=t,a=t+i;o<a;++o)n._parsed[o]=r(o)}}_getRotation(){return Tt(this.options.rotation-90)}_getCircumference(){return Tt(this.options.circumference)}_getRotationExtents(){let t=Y,i=-Y;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,r=n._getRotation(),o=n._getCircumference();t=Math.min(t,r),i=Math.max(i,r+o)}return{rotation:t,circumference:i-t}}update(t){const i=this.chart,{chartArea:s}=i,n=this._cachedMeta,r=n.data,o=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-o)/2,0),l=Math.min(Cp(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:u,ratioY:p,offsetX:g,offsetY:f}=gg(d,h,l),b=(s.width-o)/u,m=(s.height-o)/p,y=Math.max(Math.min(b,m)/2,0),x=Xl(this.options.radius,y),_=Math.max(x*l,0),k=(x-_)/this._getVisibleDatasetWeightTotal();this.offsetX=g*x,this.offsetY=f*x,n.total=this.calculateTotal(),this.outerRadius=x-k*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-k*c,0),this.updateElements(r,0,r.length,t)}_circumference(t,i){const s=this.options,n=this._cachedMeta,r=this._getCircumference();return i&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*r/Y)}updateElements(t,i,s,n){const r=n==="reset",o=this.chart,a=o.chartArea,l=o.options.animation,c=(a.left+a.right)/2,h=(a.top+a.bottom)/2,d=r&&l.animateScale,u=d?0:this.innerRadius,p=d?0:this.outerRadius,{sharedOptions:g,includeOptions:f}=this._getSharedOptions(i,n);let b=this._getRotation(),m;for(m=0;m<i;++m)b+=this._circumference(m,r);for(m=i;m<i+s;++m){const y=this._circumference(m,r),x=t[m],_={x:c+this.offsetX,y:h+this.offsetY,startAngle:b,endAngle:b+y,circumference:y,outerRadius:p,innerRadius:u};f&&(_.options=g||this.resolveDataElementOptions(m,x.active?"active":n)),b+=y,this.updateElement(x,m,_,n)}}calculateTotal(){const t=this._cachedMeta,i=t.data;let s=0,n;for(n=0;n<i.length;n++){const r=t._parsed[n];r!==null&&!isNaN(r)&&this.chart.getDataVisibility(n)&&!i[n].hidden&&(s+=Math.abs(r))}return s}calculateCircumference(t){const i=this._cachedMeta.total;return i>0&&!isNaN(t)?Y*(Math.abs(t)/i):0}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart,n=s.data.labels||[],r=ss(i._parsed[t],s.options.locale);return{label:n[t]||"",value:r}}getMaxBorderWidth(t){let i=0;const s=this.chart;let n,r,o,a,l;if(!t){for(n=0,r=s.data.datasets.length;n<r;++n)if(s.isDatasetVisible(n)){o=s.getDatasetMeta(n),t=o.data,a=o.controller;break}}if(!t)return 0;for(n=0,r=t.length;n<r;++n)l=a.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(i=Math.max(i,l.borderWidth||0,l.hoverBorderWidth||0));return i}getMaxOffset(t){let i=0;for(let s=0,n=t.length;s<n;++s){const r=this.resolveDataElementOptions(s);i=Math.max(i,r.offset||0,r.hoverOffset||0)}return i}_getRingWeightOffset(t){let i=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(i+=this._getRingWeight(s));return i}_getRingWeight(t){return Math.max(z(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}E(Re,"id","doughnut"),E(Re,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),E(Re,"descriptors",{_scriptable:e=>e!=="spacing",_indexable:e=>e!=="spacing"&&!e.startsWith("borderDash")&&!e.startsWith("hoverBorderDash")}),E(Re,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data,{labels:{pointStyle:i,textAlign:s,color:n,useBorderRadius:r,borderRadius:o}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((a,l)=>{const c=e.getDatasetMeta(0).controller.getStyle(l);return{text:a,fillStyle:c.backgroundColor,fontColor:n,hidden:!e.getDataVisibility(l),lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:c.borderWidth,strokeStyle:c.borderColor,textAlign:s,pointStyle:i,borderRadius:r&&(o||c.borderRadius),index:l}}):[]}},onClick(e,t,i){i.chart.toggleDataVisibility(t.index),i.chart.update()}}}});class Ds extends zt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const i=this._cachedMeta,{dataset:s,data:n=[],_dataset:r}=i,o=this.chart._animationsDisabled;let{start:a,count:l}=ic(i,n,o);this._drawStart=a,this._drawCount=l,sc(i)&&(a=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!r._decimated,s.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!o,options:c},t),this.updateElements(n,a,l,t)}updateElements(t,i,s,n){const r=n==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(i,n),u=o.axis,p=a.axis,{spanGaps:g,segment:f}=this.options,b=ri(g)?g:Number.POSITIVE_INFINITY,m=this.chart._animationsDisabled||r||n==="none",y=i+s,x=t.length;let _=i>0&&this.getParsed(i-1);for(let k=0;k<x;++k){const w=t[k],M=m?w:{};if(k<i||k>=y){M.skip=!0;continue}const C=this.getParsed(k),A=L(C[p]),D=M[u]=o.getPixelForValue(C[u],k),P=M[p]=r||A?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,C,l):C[p],k);M.skip=isNaN(D)||isNaN(P)||A,M.stop=k>0&&Math.abs(C[u]-_[u])>b,f&&(M.parsed=C,M.raw=c.data[k]),d&&(M.options=h||this.resolveDataElementOptions(k,w.active?"active":n)),m||this.updateElement(w,k,M,n),_=C}}getMaxOverflow(){const t=this._cachedMeta,i=t.dataset,s=i.options&&i.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const r=n[0].size(this.resolveDataElementOptions(0)),o=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,r,o)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}E(Ds,"id","line"),E(Ds,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),E(Ds,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Oi extends zt{constructor(t,i){super(t,i),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const i=this._cachedMeta,s=this.chart,n=s.data.labels||[],r=ss(i._parsed[t].r,s.options.locale);return{label:n[t]||"",value:r}}parseObjectData(t,i,s,n){return dc.bind(this)(t,i,s,n)}update(t){const i=this._cachedMeta.data;this._updateRadius(),this.updateElements(i,0,i.length,t)}getMinMax(){const t=this._cachedMeta,i={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<i.min&&(i.min=r),r>i.max&&(i.max=r))}),i}_updateRadius(){const t=this.chart,i=t.chartArea,s=t.options,n=Math.min(i.right-i.left,i.bottom-i.top),r=Math.max(n/2,0),o=Math.max(s.cutoutPercentage?r/100*s.cutoutPercentage:1,0),a=(r-o)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,i,s,n){const r=n==="reset",o=this.chart,a=o.options.animation,l=this._cachedMeta.rScale,c=l.xCenter,h=l.yCenter,d=l.getIndexAngle(0)-.5*B;let u=d,p;const g=360/this.countVisibleElements();for(p=0;p<i;++p)u+=this._computeAngle(p,n,g);for(p=i;p<i+s;p++){const f=t[p];let b=u,m=u+this._computeAngle(p,n,g),y=o.getDataVisibility(p)?l.getDistanceFromCenterForValue(this.getParsed(p).r):0;u=m,r&&(a.animateScale&&(y=0),a.animateRotate&&(b=m=d));const x={x:c,y:h,innerRadius:0,outerRadius:y,startAngle:b,endAngle:m,options:this.resolveDataElementOptions(p,f.active?"active":n)};this.updateElement(f,p,x,n)}}countVisibleElements(){const t=this._cachedMeta;let i=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&i++}),i}_computeAngle(t,i,s){return this.chart.getDataVisibility(t)?Tt(this.resolveDataElementOptions(t,i).angle||s):0}}E(Oi,"id","polarArea"),E(Oi,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),E(Oi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){const t=e.data;if(t.labels.length&&t.datasets.length){const{labels:{pointStyle:i,color:s}}=e.legend.options;return t.labels.map((n,r)=>{const o=e.getDatasetMeta(0).controller.getStyle(r);return{text:n,fillStyle:o.backgroundColor,strokeStyle:o.borderColor,fontColor:s,lineWidth:o.borderWidth,pointStyle:i,hidden:!e.getDataVisibility(r),index:r}})}return[]}},onClick(e,t,i){i.chart.toggleDataVisibility(t.index),i.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Zn extends Re{}E(Zn,"id","pie"),E(Zn,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class As extends zt{getLabelAndValue(t){const i=this._cachedMeta.vScale,s=this.getParsed(t);return{label:i.getLabels()[t],value:""+i.getLabelForValue(s[i.axis])}}parseObjectData(t,i,s,n){return dc.bind(this)(t,i,s,n)}update(t){const i=this._cachedMeta,s=i.dataset,n=i.data||[],r=i.iScale.getLabels();if(s.points=n,t!=="resize"){const o=this.resolveDatasetElementOptions(t);this.options.showLine||(o.borderWidth=0);const a={_loop:!0,_fullLoop:r.length===n.length,options:o};this.updateElement(s,void 0,a,t)}this.updateElements(n,0,n.length,t)}updateElements(t,i,s,n){const r=this._cachedMeta.rScale,o=n==="reset";for(let a=i;a<i+s;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":n),h=r.getPointPositionForValue(a,this.getParsed(a).r),d=o?r.xCenter:h.x,u=o?r.yCenter:h.y,p={x:d,y:u,angle:h.angle,skip:isNaN(d)||isNaN(u),options:c};this.updateElement(l,a,p,n)}}}E(As,"id","radar"),E(As,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),E(As,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ps extends zt{getLabelAndValue(t){const i=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:r}=i,o=this.getParsed(t),a=n.getLabelForValue(o.x),l=r.getLabelForValue(o.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const i=this._cachedMeta,{data:s=[]}=i,n=this.chart._animationsDisabled;let{start:r,count:o}=ic(i,s,n);if(this._drawStart=r,this._drawCount=o,sc(i)&&(r=0,o=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=i;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete i.dataset,this.datasetElementType=!1);this.updateElements(s,r,o,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,i,s,n){const r=n==="reset",{iScale:o,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(i,n),d=this.getSharedOptions(h),u=this.includeOptions(n,d),p=o.axis,g=a.axis,{spanGaps:f,segment:b}=this.options,m=ri(f)?f:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||r||n==="none";let x=i>0&&this.getParsed(i-1);for(let _=i;_<i+s;++_){const k=t[_],w=this.getParsed(_),M=y?k:{},C=L(w[g]),A=M[p]=o.getPixelForValue(w[p],_),D=M[g]=r||C?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,w,l):w[g],_);M.skip=isNaN(A)||isNaN(D)||C,M.stop=_>0&&Math.abs(w[p]-x[p])>m,b&&(M.parsed=w,M.raw=c.data[_]),u&&(M.options=d||this.resolveDataElementOptions(_,k.active?"active":n)),y||this.updateElement(k,_,M,n),x=w}this.updateSharedOptions(d,n,h)}getMaxOverflow(){const t=this._cachedMeta,i=t.data||[];if(!this.options.showLine){let a=0;for(let l=i.length-1;l>=0;--l)a=Math.max(a,i[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!i.length)return n;const r=i[0].size(this.resolveDataElementOptions(0)),o=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(n,r,o)/2}}E(Ps,"id","scatter"),E(Ps,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),E(Ps,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var bg=Object.freeze({__proto__:null,BarController:Cs,BubbleController:Es,DoughnutController:Re,LineController:Ds,PieController:Zn,PolarAreaController:Oi,RadarController:As,ScatterController:Ps});function Oe(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class zr{constructor(t){E(this,"options"),this.options=t||{}}static override(t){Object.assign(zr.prototype,t)}init(){}formats(){return Oe()}parse(){return Oe()}format(){return Oe()}add(){return Oe()}diff(){return Oe()}startOf(){return Oe()}endOf(){return Oe()}}var mg={_date:zr};function vg(e,t,i,s){const{controller:n,data:r,_sorted:o}=e,a=n._cachedMeta.iScale,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&o&&r.length){const c=a._reversePixels?Fp:Qt;if(s){if(n._sharedOptions){const h=r[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const u=c(r,t,i-d),p=c(r,t,i+d);return{lo:u.lo,hi:p.hi}}}}else{const h=c(r,t,i);if(l){const{vScale:d}=n._cachedMeta,{_parsed:u}=e,p=u.slice(0,h.lo+1).reverse().findIndex(f=>!L(f[d.axis]));h.lo-=Math.max(0,p);const g=u.slice(h.hi).findIndex(f=>!L(f[d.axis]));h.hi+=Math.max(0,g)}return h}}return{lo:0,hi:r.length-1}}function dn(e,t,i,s,n){const r=e.getSortedVisibleDatasetMetas(),o=i[t];for(let a=0,l=r.length;a<l;++a){const{index:c,data:h}=r[a],{lo:d,hi:u}=vg(r[a],t,o,n);for(let p=d;p<=u;++p){const g=h[p];g.skip||s(g,c,p)}}}function yg(e){const t=e.indexOf("x")!==-1,i=e.indexOf("y")!==-1;return function(s,n){const r=t?Math.abs(s.x-n.x):0,o=i?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))}}function En(e,t,i,s,n){const r=[];return!n&&!e.isPointInArea(t)||dn(e,i,t,function(o,a,l){!n&&!Jt(o,e.chartArea,0)||o.inRange(t.x,t.y,s)&&r.push({element:o,datasetIndex:a,index:l})},!0),r}function xg(e,t,i,s){let n=[];function r(o,a,l){const{startAngle:c,endAngle:h}=o.getProps(["startAngle","endAngle"],s),{angle:d}=Ql(o,{x:t.x,y:t.y});Vi(d,c,h)&&n.push({element:o,datasetIndex:a,index:l})}return dn(e,i,t,r),n}function _g(e,t,i,s,n,r){let o=[];const a=yg(i);let l=Number.POSITIVE_INFINITY;function c(h,d,u){const p=h.inRange(t.x,t.y,n);if(s&&!p)return;const g=h.getCenterPoint(n);if(!(r||e.isPointInArea(g))&&!p)return;const f=a(t,g);f<l?(o=[{element:h,datasetIndex:d,index:u}],l=f):f===l&&o.push({element:h,datasetIndex:d,index:u})}return dn(e,i,t,c),o}function Dn(e,t,i,s,n,r){return!r&&!e.isPointInArea(t)?[]:i==="r"&&!s?xg(e,t,i,n):_g(e,t,i,s,n,r)}function Fo(e,t,i,s,n){const r=[],o=i==="x"?"inXRange":"inYRange";let a=!1;return dn(e,i,t,(l,c,h)=>{l[o]&&l[o](t[i],n)&&(r.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,n))}),s&&!a?[]:r}var wg={modes:{index(e,t,i,s){const n=ze(t,e),r=i.axis||"x",o=i.includeInvisible||!1,a=i.intersect?En(e,n,r,s,o):Dn(e,n,r,!1,s,o),l=[];return a.length?(e.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,d=c.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:h})}),l):[]},dataset(e,t,i,s){const n=ze(t,e),r=i.axis||"xy",o=i.includeInvisible||!1;let a=i.intersect?En(e,n,r,s,o):Dn(e,n,r,!1,s,o);if(a.length>0){const l=a[0].datasetIndex,c=e.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(e,t,i,s){const n=ze(t,e),r=i.axis||"xy",o=i.includeInvisible||!1;return En(e,n,r,s,o)},nearest(e,t,i,s){const n=ze(t,e),r=i.axis||"xy",o=i.includeInvisible||!1;return Dn(e,n,r,i.intersect,s,o)},x(e,t,i,s){const n=ze(t,e);return Fo(e,n,"x",i.intersect,s)},y(e,t,i,s){const n=ze(t,e);return Fo(e,n,"y",i.intersect,s)}}};const wc=["left","top","right","bottom"];function bi(e,t){return e.filter(i=>i.pos===t)}function Vo(e,t){return e.filter(i=>wc.indexOf(i.pos)===-1&&i.box.axis===t)}function mi(e,t){return e.sort((i,s)=>{const n=t?s:i,r=t?i:s;return n.weight===r.weight?n.index-r.index:n.weight-r.weight})}function kg(e){const t=[];let i,s,n,r,o,a;for(i=0,s=(e||[]).length;i<s;++i)n=e[i],{position:r,options:{stack:o,stackWeight:a=1}}=n,t.push({index:i,box:n,pos:r,horizontal:n.isHorizontal(),weight:n.weight,stack:o&&r+o,stackWeight:a});return t}function Sg(e){const t={};for(const i of e){const{stack:s,pos:n,stackWeight:r}=i;if(!s||!wc.includes(n))continue;const o=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});o.count++,o.weight+=r}return t}function Mg(e,t){const i=Sg(e),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let r,o,a;for(r=0,o=e.length;r<o;++r){a=e[r];const{fullSize:l}=a.box,c=i[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=n):(a.width=s,a.height=h?h*n:l&&t.availableHeight)}return i}function Cg(e){const t=kg(e),i=mi(t.filter(c=>c.box.fullSize),!0),s=mi(bi(t,"left"),!0),n=mi(bi(t,"right")),r=mi(bi(t,"top"),!0),o=mi(bi(t,"bottom")),a=Vo(t,"x"),l=Vo(t,"y");return{fullSize:i,leftAndTop:s.concat(r),rightAndBottom:n.concat(l).concat(o).concat(a),chartArea:bi(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:r.concat(o).concat(a)}}function jo(e,t,i,s){return Math.max(e[i],t[i])+Math.max(e[s],t[s])}function kc(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function Eg(e,t,i,s){const{pos:n,box:r}=i,o=e.maxPadding;if(!R(n)){i.size&&(e[n]-=i.size);const d=s[i.stack]||{size:0,count:1};d.size=Math.max(d.size,i.horizontal?r.height:r.width),i.size=d.size/d.count,e[n]+=i.size}r.getPadding&&kc(o,r.getPadding());const a=Math.max(0,t.outerWidth-jo(o,e,"left","right")),l=Math.max(0,t.outerHeight-jo(o,e,"top","bottom")),c=a!==e.w,h=l!==e.h;return e.w=a,e.h=l,i.horizontal?{same:c,other:h}:{same:h,other:c}}function Dg(e){const t=e.maxPadding;function i(s){const n=Math.max(t[s]-e[s],0);return e[s]+=n,n}e.y+=i("top"),e.x+=i("left"),i("right"),i("bottom")}function Ag(e,t){const i=t.maxPadding;function s(n){const r={left:0,top:0,right:0,bottom:0};return n.forEach(o=>{r[o]=Math.max(t[o],i[o])}),r}return s(e?["left","right"]:["top","bottom"])}function wi(e,t,i,s){const n=[];let r,o,a,l,c,h;for(r=0,o=e.length,c=0;r<o;++r){a=e[r],l=a.box,l.update(a.width||t.w,a.height||t.h,Ag(a.horizontal,t));const{same:d,other:u}=Eg(t,i,a,s);c|=d&&n.length,h=h||u,l.fullSize||n.push(a)}return c&&wi(n,t,i,s)||h}function ps(e,t,i,s,n){e.top=i,e.left=t,e.right=t+s,e.bottom=i+n,e.width=s,e.height=n}function Ho(e,t,i,s){const n=i.padding;let{x:r,y:o}=t;for(const a of e){const l=a.box,c=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*h,u=c.size||l.height;Fi(c.start)&&(o=c.start),l.fullSize?ps(l,n.left,o,i.outerWidth-n.right-n.left,u):ps(l,t.left+c.placed,o,d,u),c.start=o,c.placed+=d,o=l.bottom}else{const d=t.h*h,u=c.size||l.width;Fi(c.start)&&(r=c.start),l.fullSize?ps(l,r,n.top,u,i.outerHeight-n.bottom-n.top):ps(l,r,t.top+c.placed,u,d),c.start=r,c.placed+=d,r=l.right}}t.x=r,t.y=o}var ft={addBox(e,t){e.boxes||(e.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(i){t.draw(i)}}]},e.boxes.push(t)},removeBox(e,t){const i=e.boxes?e.boxes.indexOf(t):-1;i!==-1&&e.boxes.splice(i,1)},configure(e,t,i){t.fullSize=i.fullSize,t.position=i.position,t.weight=i.weight},update(e,t,i,s){if(!e)return;const n=ct(e.options.layout.padding),r=Math.max(t-n.width,0),o=Math.max(i-n.height,0),a=Cg(e.boxes),l=a.vertical,c=a.horizontal;H(e.boxes,f=>{typeof f.beforeLayout=="function"&&f.beforeLayout()});const h=l.reduce((f,b)=>b.box.options&&b.box.options.display===!1?f:f+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:i,padding:n,availableWidth:r,availableHeight:o,vBoxMaxWidth:r/2/h,hBoxMaxHeight:o/2}),u=Object.assign({},n);kc(u,ct(s));const p=Object.assign({maxPadding:u,w:r,h:o,x:n.left,y:n.top},n),g=Mg(l.concat(c),d);wi(a.fullSize,p,d,g),wi(l,p,d,g),wi(c,p,d,g)&&wi(l,p,d,g),Dg(p),Ho(a.leftAndTop,p,d,g),p.x+=p.w,p.y+=p.h,Ho(a.rightAndBottom,p,d,g),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},H(a.chartArea,f=>{const b=f.box;Object.assign(b,e.chartArea),b.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class Sc{acquireContext(t,i){}releaseContext(t){return!1}addEventListener(t,i,s){}removeEventListener(t,i,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,i,s,n){return i=Math.max(0,i||t.width),s=s||t.height,{width:i,height:Math.max(0,n?Math.floor(i/n):s)}}isAttached(t){return!0}updateConfig(t){}}class Pg extends Sc{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Os="$chartjs",Og={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},No=e=>e===null||e==="";function Tg(e,t){const i=e.style,s=e.getAttribute("height"),n=e.getAttribute("width");if(e[Os]={initial:{height:s,width:n,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",No(n)){const r=Co(e,"width");r!==void 0&&(e.width=r)}if(No(s))if(e.style.height==="")e.height=e.width/(t||2);else{const r=Co(e,"height");r!==void 0&&(e.height=r)}return e}const Mc=zf?{passive:!0}:!1;function zg(e,t,i){e&&e.addEventListener(t,i,Mc)}function Lg(e,t,i){e&&e.canvas&&e.canvas.removeEventListener(t,i,Mc)}function Rg(e,t){const i=Og[e.type]||e.type,{x:s,y:n}=ze(e,t);return{type:i,chart:t,native:e,x:s!==void 0?s:null,y:n!==void 0?n:null}}function Us(e,t){for(const i of e)if(i===t||i.contains(t))return!0}function $g(e,t,i){const s=e.canvas,n=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Us(a.addedNodes,s),o=o&&!Us(a.removedNodes,s);o&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}function Ig(e,t,i){const s=e.canvas,n=new MutationObserver(r=>{let o=!1;for(const a of r)o=o||Us(a.removedNodes,s),o=o&&!Us(a.addedNodes,s);o&&i()});return n.observe(document,{childList:!0,subtree:!0}),n}const Hi=new Map;let Wo=0;function Cc(){const e=window.devicePixelRatio;e!==Wo&&(Wo=e,Hi.forEach((t,i)=>{i.currentDevicePixelRatio!==e&&t()}))}function Bg(e,t){Hi.size||window.addEventListener("resize",Cc),Hi.set(e,t)}function Fg(e){Hi.delete(e),Hi.size||window.removeEventListener("resize",Cc)}function Vg(e,t,i){const s=e.canvas,n=s&&Tr(s);if(!n)return;const r=ec((a,l)=>{const c=n.clientWidth;i(a,l),c<n.clientWidth&&i()},window),o=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||r(c,h)});return o.observe(n),Bg(e,r),o}function An(e,t,i){i&&i.disconnect(),t==="resize"&&Fg(e)}function jg(e,t,i){const s=e.canvas,n=ec(r=>{e.ctx!==null&&i(Rg(r,e))},e);return zg(s,t,n),n}class Hg extends Sc{acquireContext(t,i){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(Tg(t,i),s):null}releaseContext(t){const i=t.canvas;if(!i[Os])return!1;const s=i[Os].initial;["height","width"].forEach(r=>{const o=s[r];L(o)?i.removeAttribute(r):i.setAttribute(r,o)});const n=s.style||{};return Object.keys(n).forEach(r=>{i.style[r]=n[r]}),i.width=i.width,delete i[Os],!0}addEventListener(t,i,s){this.removeEventListener(t,i);const n=t.$proxies||(t.$proxies={}),r={attach:$g,detach:Ig,resize:Vg}[i]||jg;n[i]=r(t,i,s)}removeEventListener(t,i){const s=t.$proxies||(t.$proxies={}),n=s[i];n&&(({attach:An,detach:An,resize:An}[i]||Lg)(t,i,n),s[i]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,i,s,n){return Tf(t,i,s,n)}isAttached(t){const i=t&&Tr(t);return!!(i&&i.isConnected)}}function Ng(e){return!Or()||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas?Pg:Hg}var fs;let re=(fs=class{constructor(){E(this,"x"),E(this,"y"),E(this,"active",!1),E(this,"options"),E(this,"$animations")}tooltipPosition(e){const{x:t,y:i}=this.getProps(["x","y"],e);return{x:t,y:i}}hasValue(){return ri(this.x)&&ri(this.y)}getProps(e,t){const i=this.$animations;if(!t||!i)return this;const s={};return e.forEach(n=>{s[n]=i[n]&&i[n].active()?i[n]._to:this[n]}),s}},E(fs,"defaults",{}),E(fs,"defaultRoutes"),fs);function Wg(e,t){const i=e.options.ticks,s=Ug(e),n=Math.min(i.maxTicksLimit||s,s),r=i.major.enabled?Yg(t):[],o=r.length,a=r[0],l=r[o-1],c=[];if(o>n)return Xg(t,c,r,o/n),c;const h=qg(r,t,n);if(o>0){let d,u;const p=o>1?Math.round((l-a)/(o-1)):null;for(gs(t,c,h,L(p)?0:a-p,a),d=0,u=o-1;d<u;d++)gs(t,c,h,r[d],r[d+1]);return gs(t,c,h,l,L(p)?t.length:l+p),c}return gs(t,c,h),c}function Ug(e){const t=e.options.offset,i=e._tickSize(),s=e._length/i+(t?0:1),n=e._maxLength/i;return Math.floor(Math.min(s,n))}function qg(e,t,i){const s=Kg(e),n=t.length/i;if(!s)return Math.max(n,1);const r=Lp(s);for(let o=0,a=r.length-1;o<a;o++){const l=r[o];if(l>n)return l}return Math.max(n,1)}function Yg(e){const t=[];let i,s;for(i=0,s=e.length;i<s;i++)e[i].major&&t.push(i);return t}function Xg(e,t,i,s){let n=0,r=i[0],o;for(s=Math.ceil(s),o=0;o<e.length;o++)o===r&&(t.push(e[o]),n++,r=i[n*s])}function gs(e,t,i,s,n){const r=z(s,0),o=Math.min(z(n,e.length),e.length);let a=0,l,c,h;for(i=Math.ceil(i),n&&(l=n-s,i=l/Math.floor(l/i)),h=r;h<0;)a++,h=Math.round(r+a*i);for(c=Math.max(r,0);c<o;c++)c===h&&(t.push(e[c]),a++,h=Math.round(r+a*i))}function Kg(e){const t=e.length;let i,s;if(t<2)return!1;for(s=e[0],i=1;i<t;++i)if(e[i]-e[i-1]!==s)return!1;return s}const Gg=e=>e==="left"?"right":e==="right"?"left":e,Uo=(e,t,i)=>t==="top"||t==="left"?e[t]+i:e[t]-i,qo=(e,t)=>Math.min(t||e,e);function Yo(e,t){const i=[],s=e.length/t,n=e.length;let r=0;for(;r<n;r+=s)i.push(e[Math.floor(r)]);return i}function Qg(e,t,i){const s=e.ticks.length,n=Math.min(t,s-1),r=e._startPixel,o=e._endPixel,a=1e-6;let l=e.getPixelForTick(n),c;if(!(i&&(s===1?c=Math.max(l-r,o-l):t===0?c=(e.getPixelForTick(1)-l)/2:c=(l-e.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<r-a||l>o+a)))return l}function Jg(e,t){H(e,i=>{const s=i.gc,n=s.length/2;let r;if(n>t){for(r=0;r<n;++r)delete i.data[s[r]];s.splice(0,n)}})}function vi(e){return e.drawTicks?e.tickLength:0}function Xo(e,t){if(!e.display)return 0;const i=st(e.font,t),s=ct(e.padding);return(q(e.text)?e.text.length:1)*i.lineHeight+s.height}function Zg(e,t){return Me(e,{scale:t,type:"scale"})}function tb(e,t,i){return Me(e,{tick:i,index:t,type:"tick"})}function eb(e,t,i){let s=Mr(e);return(i&&t!=="right"||!i&&t==="right")&&(s=Gg(s)),s}function ib(e,t,i,s){const{top:n,left:r,bottom:o,right:a,chart:l}=e,{chartArea:c,scales:h}=l;let d=0,u,p,g;const f=o-n,b=a-r;if(e.isHorizontal()){if(p=ut(s,r,a),R(i)){const m=Object.keys(i)[0],y=i[m];g=h[m].getPixelForValue(y)+f-t}else i==="center"?g=(c.bottom+c.top)/2+f-t:g=Uo(e,i,t);u=a-r}else{if(R(i)){const m=Object.keys(i)[0],y=i[m];p=h[m].getPixelForValue(y)-b+t}else i==="center"?p=(c.left+c.right)/2-b+t:p=Uo(e,i,t);g=ut(s,o,n),d=i==="left"?-tt:tt}return{titleX:p,titleY:g,maxWidth:u,rotation:d}}class qe extends re{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,i){return t}getUserBounds(){let{_userMin:t,_userMax:i,_suggestedMin:s,_suggestedMax:n}=this;return t=wt(t,Number.POSITIVE_INFINITY),i=wt(i,Number.NEGATIVE_INFINITY),s=wt(s,Number.POSITIVE_INFINITY),n=wt(n,Number.NEGATIVE_INFINITY),{min:wt(t,s),max:wt(i,n),minDefined:J(t),maxDefined:J(i)}}getMinMax(t){let{min:i,max:s,minDefined:n,maxDefined:r}=this.getUserBounds(),o;if(n&&r)return{min:i,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)o=a[l].controller.getMinMax(this,t),n||(i=Math.min(i,o.min)),r||(s=Math.max(s,o.max));return i=r&&i>s?s:i,s=n&&i>s?i:s,{min:wt(i,wt(s,i)),max:wt(s,wt(i,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){W(this.options.beforeUpdate,[this])}update(t,i,s){const{beginAtZero:n,grace:r,ticks:o}=this.options,a=o.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=i,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=hf(this,r,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Yo(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),o.display&&(o.autoSkip||o.source==="auto")&&(this.ticks=Wg(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,i,s;this.isHorizontal()?(i=this.left,s=this.right):(i=this.top,s=this.bottom,t=!t),this._startPixel=i,this._endPixel=s,this._reversePixels=t,this._length=s-i,this._alignToPixels=this.options.alignToPixels}afterUpdate(){W(this.options.afterUpdate,[this])}beforeSetDimensions(){W(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){W(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),W(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){W(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const i=this.options.ticks;let s,n,r;for(s=0,n=t.length;s<n;s++)r=t[s],r.label=W(i.callback,[r.value,s,t],this)}afterTickToLabelConversion(){W(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){W(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,i=t.ticks,s=qo(this.ticks.length,t.ticks.maxTicksLimit),n=i.minRotation||0,r=i.maxRotation;let o=n,a,l,c;if(!this._isVisible()||!i.display||n>=r||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const h=this._getLabelSizes(),d=h.widest.width,u=h.highest.height,p=at(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:p/(s-1),d+6>a&&(a=p/(s-(t.offset?.5:1)),l=this.maxHeight-vi(t.grid)-i.padding-Xo(t.title,this.chart.options.font),c=Math.sqrt(d*d+u*u),o=kr(Math.min(Math.asin(at((h.highest.height+6)/a,-1,1)),Math.asin(at(l/c,-1,1))-Math.asin(at(u/c,-1,1)))),o=Math.max(n,Math.min(r,o))),this.labelRotation=o}afterCalculateLabelRotation(){W(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){W(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:i,options:{ticks:s,title:n,grid:r}}=this,o=this._isVisible(),a=this.isHorizontal();if(o){const l=Xo(n,i.options.font);if(a?(t.width=this.maxWidth,t.height=vi(r)+l):(t.height=this.maxHeight,t.width=vi(r)+l),s.display&&this.ticks.length){const{first:c,last:h,widest:d,highest:u}=this._getLabelSizes(),p=s.padding*2,g=Tt(this.labelRotation),f=Math.cos(g),b=Math.sin(g);if(a){const m=s.mirror?0:b*d.width+f*u.height;t.height=Math.min(this.maxHeight,t.height+m+p)}else{const m=s.mirror?0:f*d.width+b*u.height;t.width=Math.min(this.maxWidth,t.width+m+p)}this._calculatePadding(c,h,b,f)}}this._handleMargins(),a?(this.width=this._length=i.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=i.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,i,s,n){const{ticks:{align:r,padding:o},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let u=0,p=0;l?c?(u=n*t.width,p=s*i.height):(u=s*t.height,p=n*i.width):r==="start"?p=i.width:r==="end"?u=t.width:r!=="inner"&&(u=t.width/2,p=i.width/2),this.paddingLeft=Math.max((u-h+o)*this.width/(this.width-h),0),this.paddingRight=Math.max((p-d+o)*this.width/(this.width-d),0)}else{let h=i.height/2,d=t.height/2;r==="start"?(h=0,d=t.height):r==="end"&&(h=i.height,d=0),this.paddingTop=h+o,this.paddingBottom=d+o}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){W(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:i}=this.options;return i==="top"||i==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let i,s;for(i=0,s=t.length;i<s;i++)L(t[i].label)&&(t.splice(i,1),s--,i--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const i=this.options.ticks.sampleSize;let s=this.ticks;i<s.length&&(s=Yo(s,i)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,i,s){const{ctx:n,_longestTextCache:r}=this,o=[],a=[],l=Math.floor(i/qo(i,s));let c=0,h=0,d,u,p,g,f,b,m,y,x,_,k;for(d=0;d<i;d+=l){if(g=t[d].label,f=this._resolveTickFontOptions(d),n.font=b=f.string,m=r[b]=r[b]||{data:{},gc:[]},y=f.lineHeight,x=_=0,!L(g)&&!q(g))x=Ns(n,m.data,m.gc,x,g),_=y;else if(q(g))for(u=0,p=g.length;u<p;++u)k=g[u],!L(k)&&!q(k)&&(x=Ns(n,m.data,m.gc,x,k),_+=y);o.push(x),a.push(_),c=Math.max(x,c),h=Math.max(_,h)}Jg(r,i);const w=o.indexOf(c),M=a.indexOf(h),C=A=>({width:o[A]||0,height:a[A]||0});return{first:C(0),last:C(i-1),widest:C(w),highest:C(M),widths:o,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,i){return NaN}getValueForPixel(t){}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const i=this._startPixel+t*this._length;return Bp(this._alignToPixels?Pe(this.chart,i,0):i)}getDecimalForPixel(t){const i=(t-this._startPixel)/this._length;return this._reversePixels?1-i:i}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:i}=this;return t<0&&i<0?i:t>0&&i>0?t:0}getContext(t){const i=this.ticks||[];if(t>=0&&t<i.length){const s=i[t];return s.$context||(s.$context=tb(this.getContext(),t,s))}return this.$context||(this.$context=Zg(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,i=Tt(this.labelRotation),s=Math.abs(Math.cos(i)),n=Math.abs(Math.sin(i)),r=this._getLabelSizes(),o=t.autoSkipPadding||0,a=r?r.widest.width+o:0,l=r?r.highest.height+o:0;return this.isHorizontal()?l*s>a*n?a/s:l/n:l*n<a*s?l/s:a/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const i=this.axis,s=this.chart,n=this.options,{grid:r,position:o,border:a}=n,l=r.offset,c=this.isHorizontal(),h=this.ticks.length+(l?1:0),d=vi(r),u=[],p=a.setContext(this.getContext()),g=p.display?p.width:0,f=g/2,b=function(O){return Pe(s,O,g)};let m,y,x,_,k,w,M,C,A,D,P,T;if(o==="top")m=b(this.bottom),w=this.bottom-d,C=m-f,D=b(t.top)+f,T=t.bottom;else if(o==="bottom")m=b(this.top),D=t.top,T=b(t.bottom)-f,w=m+f,C=this.top+d;else if(o==="left")m=b(this.right),k=this.right-d,M=m-f,A=b(t.left)+f,P=t.right;else if(o==="right")m=b(this.left),A=t.left,P=b(t.right)-f,k=m+f,M=this.left+d;else if(i==="x"){if(o==="center")m=b((t.top+t.bottom)/2+.5);else if(R(o)){const O=Object.keys(o)[0],$=o[O];m=b(this.chart.scales[O].getPixelForValue($))}D=t.top,T=t.bottom,w=m+f,C=w+d}else if(i==="y"){if(o==="center")m=b((t.left+t.right)/2);else if(R(o)){const O=Object.keys(o)[0],$=o[O];m=b(this.chart.scales[O].getPixelForValue($))}k=m-f,M=k-d,A=t.left,P=t.right}const G=z(n.ticks.maxTicksLimit,h),j=Math.max(1,Math.ceil(h/G));for(y=0;y<h;y+=j){const O=this.getContext(y),$=r.setContext(O),N=a.setContext(O),Q=$.lineWidth,K=$.color,oe=N.dash||[],ns=N.dashOffset,Ye=$.tickWidth,hi=$.tickColor,Ce=$.tickBorderDash||[],di=$.tickBorderDashOffset;x=Qg(this,y,l),x!==void 0&&(_=Pe(s,x,Q),c?k=M=A=P=_:w=C=D=T=_,u.push({tx1:k,ty1:w,tx2:M,ty2:C,x1:A,y1:D,x2:P,y2:T,width:Q,color:K,borderDash:oe,borderDashOffset:ns,tickWidth:Ye,tickColor:hi,tickBorderDash:Ce,tickBorderDashOffset:di}))}return this._ticksLength=h,this._borderValue=m,u}_computeLabelItems(t){const i=this.axis,s=this.options,{position:n,ticks:r}=s,o=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:d}=r,u=vi(s.grid),p=u+h,g=d?-h:p,f=-Tt(this.labelRotation),b=[];let m,y,x,_,k,w,M,C,A,D,P,T,G="middle";if(n==="top")w=this.bottom-g,M=this._getXAxisLabelAlignment();else if(n==="bottom")w=this.top+g,M=this._getXAxisLabelAlignment();else if(n==="left"){const O=this._getYAxisLabelAlignment(u);M=O.textAlign,k=O.x}else if(n==="right"){const O=this._getYAxisLabelAlignment(u);M=O.textAlign,k=O.x}else if(i==="x"){if(n==="center")w=(t.top+t.bottom)/2+p;else if(R(n)){const O=Object.keys(n)[0],$=n[O];w=this.chart.scales[O].getPixelForValue($)+p}M=this._getXAxisLabelAlignment()}else if(i==="y"){if(n==="center")k=(t.left+t.right)/2-p;else if(R(n)){const O=Object.keys(n)[0],$=n[O];k=this.chart.scales[O].getPixelForValue($)}M=this._getYAxisLabelAlignment(u).textAlign}i==="y"&&(l==="start"?G="top":l==="end"&&(G="bottom"));const j=this._getLabelSizes();for(m=0,y=a.length;m<y;++m){x=a[m],_=x.label;const O=r.setContext(this.getContext(m));C=this.getPixelForTick(m)+r.labelOffset,A=this._resolveTickFontOptions(m),D=A.lineHeight,P=q(_)?_.length:1;const $=P/2,N=O.color,Q=O.textStrokeColor,K=O.textStrokeWidth;let oe=M;o?(k=C,M==="inner"&&(m===y-1?oe=this.options.reverse?"left":"right":m===0?oe=this.options.reverse?"right":"left":oe="center"),n==="top"?c==="near"||f!==0?T=-P*D+D/2:c==="center"?T=-j.highest.height/2-$*D+D:T=-j.highest.height+D/2:c==="near"||f!==0?T=D/2:c==="center"?T=j.highest.height/2-$*D:T=j.highest.height-P*D,d&&(T*=-1),f!==0&&!O.showLabelBackdrop&&(k+=D/2*Math.sin(f))):(w=C,T=(1-P)*D/2);let ns;if(O.showLabelBackdrop){const Ye=ct(O.backdropPadding),hi=j.heights[m],Ce=j.widths[m];let di=T-Ye.top,ui=0-Ye.left;switch(G){case"middle":di-=hi/2;break;case"bottom":di-=hi;break}switch(M){case"center":ui-=Ce/2;break;case"right":ui-=Ce;break;case"inner":m===y-1?ui-=Ce:m>0&&(ui-=Ce/2);break}ns={left:ui,top:di,width:Ce+Ye.width,height:hi+Ye.height,color:O.backdropColor}}b.push({label:_,font:A,textOffset:T,options:{rotation:f,color:N,strokeColor:Q,strokeWidth:K,textAlign:oe,textBaseline:G,translation:[k,w],backdrop:ns}})}return b}_getXAxisLabelAlignment(){const{position:t,ticks:i}=this.options;if(-Tt(this.labelRotation))return t==="top"?"left":"right";let s="center";return i.align==="start"?s="left":i.align==="end"?s="right":i.align==="inner"&&(s="inner"),s}_getYAxisLabelAlignment(t){const{position:i,ticks:{crossAlign:s,mirror:n,padding:r}}=this.options,o=this._getLabelSizes(),a=t+r,l=o.widest.width;let c,h;return i==="left"?n?(h=this.right+r,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h=this.left)):i==="right"?n?(h=this.left+r,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,i=this.options.position;if(i==="left"||i==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(i==="top"||i==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:i},left:s,top:n,width:r,height:o}=this;i&&(t.save(),t.fillStyle=i,t.fillRect(s,n,r,o),t.restore())}getLineWidthForValue(t){const i=this.options.grid;if(!this._isVisible()||!i.display)return 0;const s=this.ticks.findIndex(n=>n.value===t);return s>=0?i.setContext(this.getContext(s)).lineWidth:0}drawGrid(t){const i=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let r,o;const a=(l,c,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(i.display)for(r=0,o=n.length;r<o;++r){const l=n[r];i.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),i.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:i,options:{border:s,grid:n}}=this,r=s.setContext(this.getContext()),o=s.display?r.width:0;if(!o)return;const a=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,d,u;this.isHorizontal()?(c=Pe(t,this.left,o)-o/2,h=Pe(t,this.right,a)+a/2,d=u=l):(d=Pe(t,this.top,o)-o/2,u=Pe(t,this.bottom,a)+a/2,c=h=l),i.save(),i.lineWidth=r.width,i.strokeStyle=r.color,i.beginPath(),i.moveTo(c,d),i.lineTo(h,u),i.stroke(),i.restore()}drawLabels(t){if(!this.options.ticks.display)return;const i=this.ctx,s=this._computeLabelArea();s&&ln(i,s);const n=this.getLabelItems(t);for(const r of n){const o=r.options,a=r.font,l=r.label,c=r.textOffset;Fe(i,l,0,c,a,o)}s&&cn(i)}drawTitle(){const{ctx:t,options:{position:i,title:s,reverse:n}}=this;if(!s.display)return;const r=st(s.font),o=ct(s.padding),a=s.align;let l=r.lineHeight/2;i==="bottom"||i==="center"||R(i)?(l+=o.bottom,q(s.text)&&(l+=r.lineHeight*(s.text.length-1))):l+=o.top;const{titleX:c,titleY:h,maxWidth:d,rotation:u}=ib(this,l,i,a);Fe(t,s.text,0,0,r,{color:s.color,maxWidth:d,rotation:u,textAlign:eb(a,i,n),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,i=t.ticks&&t.ticks.z||0,s=z(t.grid&&t.grid.z,-1),n=z(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==qe.prototype.draw?[{z:i,draw:r=>{this.draw(r)}}]:[{z:s,draw:r=>{this.drawBackground(),this.drawGrid(r),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:i,draw:r=>{this.drawLabels(r)}}]}getMatchingVisibleMetas(t){const i=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let r,o;for(r=0,o=i.length;r<o;++r){const a=i[r];a[s]===this.id&&(!t||a.type===t)&&n.push(a)}return n}_resolveTickFontOptions(t){const i=this.options.ticks.setContext(this.getContext(t));return st(i.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class bs{constructor(t,i,s){this.type=t,this.scope=i,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const i=Object.getPrototypeOf(t);let s;rb(i)&&(s=this.register(i));const n=this.items,r=t.id,o=this.scope+"."+r;if(!r)throw new Error("class does not have id: "+t);return r in n||(n[r]=t,sb(t,o,s),this.override&&X.override(t.id,t.overrides)),o}get(t){return this.items[t]}unregister(t){const i=this.items,s=t.id,n=this.scope;s in i&&delete i[s],n&&s in X[n]&&(delete X[n][s],this.override&&delete Be[s])}}function sb(e,t,i){const s=jt(Object.create(null),[i?X.get(i):{},X.get(t),e.defaults]);X.set(t,s),e.defaultRoutes&&nb(t,e.defaultRoutes),e.descriptors&&X.describe(t,e.descriptors)}function nb(e,t){Object.keys(t).forEach(i=>{const s=i.split("."),n=s.pop(),r=[e].concat(s).join("."),o=t[i].split("."),a=o.pop(),l=o.join(".");X.route(r,n,l,a)})}function rb(e){return"id"in e&&"defaults"in e}class ob{constructor(){this.controllers=new bs(zt,"datasets",!0),this.elements=new bs(re,"elements"),this.plugins=new bs(Object,"plugins"),this.scales=new bs(qe,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,i,s){[...i].forEach(n=>{const r=s||this._getRegistryForType(n);s||r.isForType(n)||r===this.plugins&&n.id?this._exec(t,r,n):H(n,o=>{const a=s||this._getRegistryForType(o);this._exec(t,a,o)})})}_exec(t,i,s){const n=wr(t);W(s["before"+n],[],s),i[t](s),W(s["after"+n],[],s)}_getRegistryForType(t){for(let i=0;i<this._typedRegistries.length;i++){const s=this._typedRegistries[i];if(s.isForType(t))return s}return this.plugins}_get(t,i,s){const n=i.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var $t=new ob;class ab{constructor(){this._init=void 0}notify(t,i,s,n){if(i==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const r=n?this._descriptors(t).filter(n):this._descriptors(t),o=this._notify(r,t,i,s);return i==="afterDestroy"&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),o}_notify(t,i,s,n){n=n||{};for(const r of t){const o=r.plugin,a=o[s],l=[i,n,r.options];if(W(a,l,o)===!1&&n.cancelable)return!1}return!0}invalidate(){L(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const i=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),i}_createDescriptors(t,i){const s=t&&t.config,n=z(s.options&&s.options.plugins,{}),r=lb(s);return n===!1&&!i?[]:hb(t,r,n,i)}_notifyStateChanges(t){const i=this._oldCache||[],s=this._cache,n=(r,o)=>r.filter(a=>!o.some(l=>a.plugin.id===l.plugin.id));this._notify(n(i,s),t,"stop"),this._notify(n(s,i),t,"start")}}function lb(e){const t={},i=[],s=Object.keys($t.plugins.items);for(let r=0;r<s.length;r++)i.push($t.getPlugin(s[r]));const n=e.plugins||[];for(let r=0;r<n.length;r++){const o=n[r];i.indexOf(o)===-1&&(i.push(o),t[o.id]=!0)}return{plugins:i,localIds:t}}function cb(e,t){return!t&&e===!1?null:e===!0?{}:e}function hb(e,{plugins:t,localIds:i},s,n){const r=[],o=e.getContext();for(const a of t){const l=a.id,c=cb(s[l],n);c!==null&&r.push({plugin:a,options:db(e.config,{plugin:a,local:i[l]},c,o)})}return r}function db(e,{plugin:t,local:i},s,n){const r=e.pluginScopeKeys(t),o=e.getOptionScopes(s,r);return i&&t.defaults&&o.push(t.defaults),e.createResolver(o,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function tr(e,t){const i=X.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||i.indexAxis||"x"}function ub(e,t){let i=e;return e==="_index_"?i=t:e==="_value_"&&(i=t==="x"?"y":"x"),i}function pb(e,t){return e===t?"_index_":"_value_"}function Ko(e){if(e==="x"||e==="y"||e==="r")return e}function fb(e){if(e==="top"||e==="bottom")return"x";if(e==="left"||e==="right")return"y"}function er(e,...t){if(Ko(e))return e;for(const i of t){const s=i.axis||fb(i.position)||e.length>1&&Ko(e[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function Go(e,t,i){if(i[t+"AxisID"]===e)return{axis:t}}function gb(e,t){if(t.data&&t.data.datasets){const i=t.data.datasets.filter(s=>s.xAxisID===e||s.yAxisID===e);if(i.length)return Go(e,"x",i[0])||Go(e,"y",i[0])}return{}}function bb(e,t){const i=Be[e.type]||{scales:{}},s=t.scales||{},n=tr(e.type,t),r=Object.create(null);return Object.keys(s).forEach(o=>{const a=s[o];if(!R(a))return console.error(`Invalid scale configuration for scale: ${o}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${o}`);const l=er(o,a,gb(o,e),X.scales[a.type]),c=pb(l,n),h=i.scales||{};r[o]=Ei(Object.create(null),[{axis:l},a,h[l],h[c]])}),e.data.datasets.forEach(o=>{const a=o.type||e.type,l=o.indexAxis||tr(a,t),c=(Be[a]||{}).scales||{};Object.keys(c).forEach(h=>{const d=ub(h,l),u=o[d+"AxisID"]||d;r[u]=r[u]||Object.create(null),Ei(r[u],[{axis:d},s[u],c[h]])})}),Object.keys(r).forEach(o=>{const a=r[o];Ei(a,[X.scales[a.type],X.scale])}),r}function Ec(e){const t=e.options||(e.options={});t.plugins=z(t.plugins,{}),t.scales=bb(e,t)}function Dc(e){return e=e||{},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function mb(e){return e=e||{},e.data=Dc(e.data),Ec(e),e}const Qo=new Map,Ac=new Set;function ms(e,t){let i=Qo.get(e);return i||(i=t(),Qo.set(e,i),Ac.add(i)),i}const yi=(e,t,i)=>{const s=me(t,i);s!==void 0&&e.add(s)};class vb{constructor(t){this._config=mb(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Dc(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Ec(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return ms(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,i){return ms(`${t}.transition.${i}`,()=>[[`datasets.${t}.transitions.${i}`,`transitions.${i}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,i){return ms(`${t}-${i}`,()=>[[`datasets.${t}.elements.${i}`,`datasets.${t}`,`elements.${i}`,""]])}pluginScopeKeys(t){const i=t.id,s=this.type;return ms(`${s}-plugin-${i}`,()=>[[`plugins.${i}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,i){const s=this._scopeCache;let n=s.get(t);return(!n||i)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,i,s){const{options:n,type:r}=this,o=this._cachedScopes(t,s),a=o.get(i);if(a)return a;const l=new Set;i.forEach(h=>{t&&(l.add(t),h.forEach(d=>yi(l,t,d))),h.forEach(d=>yi(l,n,d)),h.forEach(d=>yi(l,Be[r]||{},d)),h.forEach(d=>yi(l,X,d)),h.forEach(d=>yi(l,Qn,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Ac.has(i)&&o.set(i,c),c}chartOptionScopes(){const{options:t,type:i}=this;return[t,Be[i]||{},X.datasets[i]||{},{type:i},X,Qn]}resolveNamedOptions(t,i,s,n=[""]){const r={$shared:!0},{resolver:o,subPrefixes:a}=Jo(this._resolverCache,t,n);let l=o;if(xb(o,i)){r.$shared=!1,s=ve(s)?s():s;const c=this.createResolver(t,s,a);l=oi(o,s,c)}for(const c of i)r[c]=l[c];return r}createResolver(t,i,s=[""],n){const{resolver:r}=Jo(this._resolverCache,t,s);return R(i)?oi(r,i,void 0,n):r}}function Jo(e,t,i){let s=e.get(t);s||(s=new Map,e.set(t,s));const n=i.join();let r=s.get(n);return r||(r={resolver:Dr(t,i),subPrefixes:i.filter(o=>!o.toLowerCase().includes("hover"))},s.set(n,r)),r}const yb=e=>R(e)&&Object.getOwnPropertyNames(e).some(t=>ve(e[t]));function xb(e,t){const{isScriptable:i,isIndexable:s}=ac(e);for(const n of t){const r=i(n),o=s(n),a=(o||r)&&e[n];if(r&&(ve(a)||yb(a))||o&&q(a))return!0}return!1}var _b="4.5.1";const wb=["top","bottom","left","right","chartArea"];function Zo(e,t){return e==="top"||e==="bottom"||wb.indexOf(e)===-1&&t==="x"}function ta(e,t){return function(i,s){return i[e]===s[e]?i[t]-s[t]:i[e]-s[e]}}function ea(e){const t=e.chart,i=t.options.animation;t.notifyPlugins("afterRender"),W(i&&i.onComplete,[e],t)}function kb(e){const t=e.chart,i=t.options.animation;W(i&&i.onProgress,[e],t)}function Pc(e){return Or()&&typeof e=="string"?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}const Ts={},ia=e=>{const t=Pc(e);return Object.values(Ts).filter(i=>i.canvas===t).pop()};function Sb(e,t,i){const s=Object.keys(e);for(const n of s){const r=+n;if(r>=t){const o=e[n];delete e[n],(i>0||r>t)&&(e[r+i]=o)}}}function Mb(e,t,i,s){return!i||e.type==="mouseout"?null:s?t:e}var ae;let Ni=(ae=class{static register(...e){$t.add(...e),sa()}static unregister(...e){$t.remove(...e),sa()}constructor(e,t){const i=this.config=new vb(t),s=Pc(e),n=ia(s);if(n)throw new Error("Canvas is already in use. Chart with ID '"+n.id+"' must be destroyed before the canvas with ID '"+n.canvas.id+"' can be reused.");const r=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||Ng(s)),this.platform.updateConfig(i);const o=this.platform.acquireContext(s,r.aspectRatio),a=o&&o.canvas,l=a&&a.height,c=a&&a.width;if(this.id=Mp(),this.ctx=o,this.canvas=a,this.width=c,this.height=l,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new ab,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Hp(h=>this.update(h),r.resizeDelay||0),this._dataChanges=[],Ts[this.id]=this,!o||!a){console.error("Failed to create chart: can't acquire context from the given item");return}Ut.listen(this,"complete",ea),Ut.listen(this,"progress",kb),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:e,maintainAspectRatio:t},width:i,height:s,_aspectRatio:n}=this;return L(e)?t&&n?n:s?i/s:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return $t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Mo(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return wo(this.canvas,this.ctx),this}stop(){return Ut.stop(this),this}resize(e,t){Ut.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){const i=this.options,s=this.canvas,n=i.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(s,e,t,n),o=i.devicePixelRatio||this.platform.getDevicePixelRatio(),a=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Mo(this,o,!0)&&(this.notifyPlugins("resize",{size:r}),W(i.onResize,[this,r],this),this.attached&&this._doResize(a)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};H(e,(t,i)=>{t.id=i})}buildOrUpdateScales(){const e=this.options,t=e.scales,i=this.scales,s=Object.keys(i).reduce((r,o)=>(r[o]=!1,r),{});let n=[];t&&(n=n.concat(Object.keys(t).map(r=>{const o=t[r],a=er(r,o),l=a==="r",c=a==="x";return{options:o,dposition:l?"chartArea":c?"bottom":"left",dtype:l?"radialLinear":c?"category":"linear"}}))),H(n,r=>{const o=r.options,a=o.id,l=er(a,o),c=z(o.type,r.dtype);(o.position===void 0||Zo(o.position,l)!==Zo(r.dposition))&&(o.position=r.dposition),s[a]=!0;let h=null;if(a in i&&i[a].type===c)h=i[a];else{const d=$t.getScale(c);h=new d({id:a,type:c,ctx:this.ctx,chart:this}),i[h.id]=h}h.init(o,e)}),H(s,(r,o)=>{r||delete i[o]}),H(i,r=>{ft.configure(this,r,r.options),ft.addBox(this,r)})}_updateMetasets(){const e=this._metasets,t=this.data.datasets.length,i=e.length;if(e.sort((s,n)=>s.index-n.index),i>t){for(let s=t;s<i;++s)this._destroyDatasetMeta(s);e.splice(t,i-t)}this._sortedMetasets=e.slice(0).sort(ta("order","index"))}_removeUnreferencedMetasets(){const{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((i,s)=>{t.filter(n=>n===i._dataset).length===0&&this._destroyDatasetMeta(s)})}buildOrUpdateControllers(){const e=[],t=this.data.datasets;let i,s;for(this._removeUnreferencedMetasets(),i=0,s=t.length;i<s;i++){const n=t[i];let r=this.getDatasetMeta(i);const o=n.type||this.config.type;if(r.type&&r.type!==o&&(this._destroyDatasetMeta(i),r=this.getDatasetMeta(i)),r.type=o,r.indexAxis=n.indexAxis||tr(o,this.options),r.order=n.order||0,r.index=i,r.label=""+n.label,r.visible=this.isDatasetVisible(i),r.controller)r.controller.updateIndex(i),r.controller.linkScales();else{const a=$t.getController(o),{datasetElementType:l,dataElementType:c}=X.datasets[o];Object.assign(a,{dataElementType:$t.getElement(c),datasetElementType:l&&$t.getElement(l)}),r.controller=new a(this,i),e.push(r.controller)}}return this._updateMetasets(),e}_resetElements(){H(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(e){const t=this.config;t.update();const i=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),s=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:e,cancelable:!0})===!1)return;const n=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let l=0,c=this.data.datasets.length;l<c;l++){const{controller:h}=this.getDatasetMeta(l),d=!s&&n.indexOf(h)===-1;h.buildOrUpdateElements(d),r=Math.max(+h.getMaxOverflow(),r)}r=this._minPadding=i.layout.autoPadding?r:0,this._updateLayout(r),s||H(n,l=>{l.reset()}),this._updateDatasets(e),this.notifyPlugins("afterUpdate",{mode:e}),this._layers.sort(ta("z","_idx"));const{_active:o,_lastEvent:a}=this;a?this._eventHandler(a,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){H(this.scales,e=>{ft.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const e=this.options,t=new Set(Object.keys(this._listeners)),i=new Set(e.events);(!po(t,i)||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(const{method:i,start:s,count:n}of t){const r=i==="_removeElements"?-n:n;Sb(e,s,r)}}_getUniformDataChanges(){const e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];const t=this.data.datasets.length,i=n=>new Set(e.filter(r=>r[0]===n).map((r,o)=>o+","+r.splice(1).join(","))),s=i(0);for(let n=1;n<t;n++)if(!po(s,i(n)))return;return Array.from(s).map(n=>n.split(",")).map(n=>({method:n[1],start:+n[2],count:+n[3]}))}_updateLayout(e){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ft.update(this,this.width,this.height,e);const t=this.chartArea,i=t.width<=0||t.height<=0;this._layers=[],H(this.boxes,s=>{i&&s.position==="chartArea"||(s.configure&&s.configure(),this._layers.push(...s._layers()))},this),this._layers.forEach((s,n)=>{s._idx=n}),this.notifyPlugins("afterLayout")}_updateDatasets(e){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:e,cancelable:!0})!==!1){for(let t=0,i=this.data.datasets.length;t<i;++t)this.getDatasetMeta(t).controller.configure();for(let t=0,i=this.data.datasets.length;t<i;++t)this._updateDataset(t,ve(e)?e({datasetIndex:t}):e);this.notifyPlugins("afterDatasetsUpdate",{mode:e})}}_updateDataset(e,t){const i=this.getDatasetMeta(e),s={meta:i,index:e,mode:t,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",s)!==!1&&(i.controller._update(t),s.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",s))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Ut.has(this)?this.attached&&!Ut.running(this)&&Ut.start(this):(this.draw(),ea({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){const{width:i,height:s}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(i,s)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(e){const t=this._sortedMetasets,i=[];let s,n;for(s=0,n=t.length;s<n;++s){const r=t[s];(!e||r.visible)&&i.push(r)}return i}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(e){const t=this.ctx,i={meta:e,index:e.index,cancelable:!0},s=vc(this,e);this.notifyPlugins("beforeDatasetDraw",i)!==!1&&(s&&ln(t,s),e.controller.draw(),s&&cn(t),i.cancelable=!1,this.notifyPlugins("afterDatasetDraw",i))}isPointInArea(e){return Jt(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,i,s){const n=wg.modes[t];return typeof n=="function"?n(this,e,i,s):[]}getDatasetMeta(e){const t=this.data.datasets[e],i=this._metasets;let s=i.filter(n=>n&&n._dataset===t).pop();return s||(s={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},i.push(s)),s}getContext(){return this.$context||(this.$context=Me(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){const t=this.data.datasets[e];if(!t)return!1;const i=this.getDatasetMeta(e);return typeof i.hidden=="boolean"?!i.hidden:!t.hidden}setDatasetVisibility(e,t){const i=this.getDatasetMeta(e);i.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,i){const s=i?"show":"hide",n=this.getDatasetMeta(e),r=n.controller._resolveAnimations(void 0,s);Fi(t)?(n.data[t].hidden=!i,this.update()):(this.setDatasetVisibility(e,i),r.update(n,{visible:i}),this.update(o=>o.datasetIndex===e?s:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){const t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Ut.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),wo(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Ts[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const e=this._listeners,t=this.platform,i=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},s=(n,r,o)=>{n.offsetX=r,n.offsetY=o,this._eventHandler(n)};H(this.options.events,n=>i(n,s))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const e=this._responsiveListeners,t=this.platform,i=(a,l)=>{t.addEventListener(this,a,l),e[a]=l},s=(a,l)=>{e[a]&&(t.removeEventListener(this,a,l),delete e[a])},n=(a,l)=>{this.canvas&&this.resize(a,l)};let r;const o=()=>{s("attach",o),this.attached=!0,this.resize(),i("resize",n),i("detach",r)};r=()=>{this.attached=!1,s("resize",n),this._stop(),this._resize(0,0),i("attach",o)},t.isAttached(this.canvas)?o():r()}unbindEvents(){H(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},H(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,i){const s=i?"set":"remove";let n,r,o,a;for(t==="dataset"&&(n=this.getDatasetMeta(e[0].datasetIndex),n.controller["_"+s+"DatasetHoverStyle"]()),o=0,a=e.length;o<a;++o){r=e[o];const l=r&&this.getDatasetMeta(r.datasetIndex).controller;l&&l[s+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){const t=this._active||[],i=e.map(({datasetIndex:s,index:n})=>{const r=this.getDatasetMeta(s);if(!r)throw new Error("No dataset found at index "+s);return{datasetIndex:s,element:r.data[n],index:n}});!Vs(i,t)&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,t))}notifyPlugins(e,t,i){return this._plugins.notify(this,e,t,i)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,i){const s=this.options.hover,n=(a,l)=>a.filter(c=>!l.some(h=>c.datasetIndex===h.datasetIndex&&c.index===h.index)),r=n(t,e),o=i?e:n(e,t);r.length&&this.updateHoverStyle(r,s.mode,!1),o.length&&s.mode&&this.updateHoverStyle(o,s.mode,!0)}_eventHandler(e,t){const i={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},s=r=>(r.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins("beforeEvent",i,s)===!1)return;const n=this._handleEvent(e,t,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,s),(n||i.changed)&&this.render(),this}_handleEvent(e,t,i){const{_active:s=[],options:n}=this,r=t,o=this._getActiveElements(e,s,i,r),a=Op(e),l=Mb(e,this._lastEvent,i,a);i&&(this._lastEvent=null,W(n.onHover,[e,o,this],this),a&&W(n.onClick,[e,o,this],this));const c=!Vs(o,s);return(c||t)&&(this._active=o,this._updateHoverStyles(o,s,t)),this._lastEvent=l,c}_getActiveElements(e,t,i,s){if(e.type==="mouseout")return[];if(!i)return t;const n=this.options.hover;return this.getElementsAtEventForMode(e,n.mode,n,s)}},E(ae,"defaults",X),E(ae,"instances",Ts),E(ae,"overrides",Be),E(ae,"registry",$t),E(ae,"version",_b),E(ae,"getChart",ia),ae);function sa(){return H(Ni.instances,e=>e._plugins.invalidate())}function Cb(e,t,i){const{startAngle:s,x:n,y:r,outerRadius:o,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,d=Math.min(c/o,pt(s-i));if(e.beginPath(),e.arc(n,r,o-c/2,s+d/2,i-d/2),a>0){const u=Math.min(c/a,pt(s-i));e.arc(n,r,a+c/2,i-u/2,s+u/2,!0)}else{const u=Math.min(c/2,o*pt(s-i));if(h==="round")e.arc(n,r,u,i-B/2,s+B/2,!0);else if(h==="bevel"){const p=2*u*u,g=-p*Math.cos(i+B/2)+n,f=-p*Math.sin(i+B/2)+r,b=p*Math.cos(s+B/2)+n,m=p*Math.sin(s+B/2)+r;e.lineTo(g,f),e.lineTo(b,m)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip("evenodd")}function Eb(e,t,i){const{startAngle:s,pixelMargin:n,x:r,y:o,outerRadius:a,innerRadius:l}=t;let c=n/a;e.beginPath(),e.arc(r,o,a,s-c,i+c),l>n?(c=n/l,e.arc(r,o,l,i+c,s-c,!0)):e.arc(r,o,n,i+tt,s-tt),e.closePath(),e.clip()}function Db(e){return Er(e,["outerStart","outerEnd","innerStart","innerEnd"])}function Ab(e,t,i,s){const n=Db(e.options.borderRadius),r=(i-t)/2,o=Math.min(r,s*t/2),a=l=>{const c=(i-Math.min(r,l))*s/2;return at(l,0,Math.min(r,c))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:at(n.innerStart,0,o),innerEnd:at(n.innerEnd,0,o)}}function Ke(e,t,i,s){return{x:i+e*Math.cos(t),y:s+e*Math.sin(t)}}function qs(e,t,i,s,n,r){const{x:o,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,d=Math.max(t.outerRadius+s+i-c,0),u=h>0?h+s+i+c:0;let p=0;const g=n-l;if(s){const O=h>0?h-s:0,$=d>0?d-s:0,N=(O+$)/2,Q=N!==0?g*N/(N+s):g;p=(g-Q)/2}const f=Math.max(.001,g*d-i/B)/d,b=(g-f)/2,m=l+b+p,y=n-b-p,{outerStart:x,outerEnd:_,innerStart:k,innerEnd:w}=Ab(t,u,d,y-m),M=d-x,C=d-_,A=m+x/M,D=y-_/C,P=u+k,T=u+w,G=m+k/P,j=y-w/T;if(e.beginPath(),r){const O=(A+D)/2;if(e.arc(o,a,d,A,O),e.arc(o,a,d,O,D),_>0){const K=Ke(C,D,o,a);e.arc(K.x,K.y,_,D,y+tt)}const $=Ke(T,y,o,a);if(e.lineTo($.x,$.y),w>0){const K=Ke(T,j,o,a);e.arc(K.x,K.y,w,y+tt,j+Math.PI)}const N=(y-w/u+(m+k/u))/2;if(e.arc(o,a,u,y-w/u,N,!0),e.arc(o,a,u,N,m+k/u,!0),k>0){const K=Ke(P,G,o,a);e.arc(K.x,K.y,k,G+Math.PI,m-tt)}const Q=Ke(M,m,o,a);if(e.lineTo(Q.x,Q.y),x>0){const K=Ke(M,A,o,a);e.arc(K.x,K.y,x,m-tt,A)}}else{e.moveTo(o,a);const O=Math.cos(A)*d+o,$=Math.sin(A)*d+a;e.lineTo(O,$);const N=Math.cos(D)*d+o,Q=Math.sin(D)*d+a;e.lineTo(N,Q)}e.closePath()}function Pb(e,t,i,s,n){const{fullCircles:r,startAngle:o,circumference:a}=t;let l=t.endAngle;if(r){qs(e,t,i,s,l,n);for(let c=0;c<r;++c)e.fill();isNaN(a)||(l=o+(a%Y||Y))}return qs(e,t,i,s,l,n),e.fill(),l}function Ob(e,t,i,s,n){const{fullCircles:r,startAngle:o,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:d,borderDashOffset:u,borderRadius:p}=l,g=l.borderAlign==="inner";if(!c)return;e.setLineDash(d||[]),e.lineDashOffset=u,g?(e.lineWidth=c*2,e.lineJoin=h||"round"):(e.lineWidth=c,e.lineJoin=h||"bevel");let f=t.endAngle;if(r){qs(e,t,i,s,f,n);for(let b=0;b<r;++b)e.stroke();isNaN(a)||(f=o+(a%Y||Y))}g&&Eb(e,t,f),l.selfJoin&&f-o>=B&&p===0&&h!=="miter"&&Cb(e,t,f),r||(qs(e,t,i,s,f,n),e.stroke())}class Qe extends re{constructor(t){super(),E(this,"circumference"),E(this,"endAngle"),E(this,"fullCircles"),E(this,"innerRadius"),E(this,"outerRadius"),E(this,"pixelMargin"),E(this,"startAngle"),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,i,s){const n=this.getProps(["x","y"],s),{angle:r,distance:o}=Ql(n,{x:t,y:i}),{startAngle:a,endAngle:l,innerRadius:c,outerRadius:h,circumference:d}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],s),u=(this.options.spacing+this.options.borderWidth)/2,p=z(d,l-a),g=Vi(r,a,l)&&a!==l,f=p>=Y||g,b=Gt(o,c+u,h+u);return f&&b}getCenterPoint(t){const{x:i,y:s,startAngle:n,endAngle:r,innerRadius:o,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],t),{offset:l,spacing:c}=this.options,h=(n+r)/2,d=(o+a+c+l)/2;return{x:i+Math.cos(h)*d,y:s+Math.sin(h)*d}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){const{options:i,circumference:s}=this,n=(i.offset||0)/4,r=(i.spacing||0)/2,o=i.circular;if(this.pixelMargin=i.borderAlign==="inner"?.33:0,this.fullCircles=s>Y?Math.floor(s/Y):0,s===0||this.innerRadius<0||this.outerRadius<0)return;t.save();const a=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(a)*n,Math.sin(a)*n);const l=1-Math.sin(Math.min(B,s||0)),c=n*l;t.fillStyle=i.backgroundColor,t.strokeStyle=i.borderColor,Pb(t,this,c,r,o),Ob(t,this,c,r,o),t.restore()}}E(Qe,"id","arc"),E(Qe,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),E(Qe,"defaultRoutes",{backgroundColor:"backgroundColor"}),E(Qe,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Oc(e,t,i=t){e.lineCap=z(i.borderCapStyle,t.borderCapStyle),e.setLineDash(z(i.borderDash,t.borderDash)),e.lineDashOffset=z(i.borderDashOffset,t.borderDashOffset),e.lineJoin=z(i.borderJoinStyle,t.borderJoinStyle),e.lineWidth=z(i.borderWidth,t.borderWidth),e.strokeStyle=z(i.borderColor,t.borderColor)}function Tb(e,t,i){e.lineTo(i.x,i.y)}function zb(e){return e.stepped?tf:e.tension||e.cubicInterpolationMode==="monotone"?ef:Tb}function Tc(e,t,i={}){const s=e.length,{start:n=0,end:r=s-1}=i,{start:o,end:a}=t,l=Math.max(n,o),c=Math.min(r,a),h=n<o&&r<o||n>a&&r>a;return{count:s,start:l,loop:t.loop,ilen:c<l&&!h?s+c-l:c-l}}function Lb(e,t,i,s){const{points:n,options:r}=t,{count:o,start:a,loop:l,ilen:c}=Tc(n,i,s),h=zb(r);let{move:d=!0,reverse:u}=s||{},p,g,f;for(p=0;p<=c;++p)g=n[(a+(u?c-p:p))%o],!g.skip&&(d?(e.moveTo(g.x,g.y),d=!1):h(e,f,g,u,r.stepped),f=g);return l&&(g=n[(a+(u?c:0))%o],h(e,f,g,u,r.stepped)),!!l}function Rb(e,t,i,s){const n=t.points,{count:r,start:o,ilen:a}=Tc(n,i,s),{move:l=!0,reverse:c}=s||{};let h=0,d=0,u,p,g,f,b,m;const y=_=>(o+(c?a-_:_))%r,x=()=>{f!==b&&(e.lineTo(h,b),e.lineTo(h,f),e.lineTo(h,m))};for(l&&(p=n[y(0)],e.moveTo(p.x,p.y)),u=0;u<=a;++u){if(p=n[y(u)],p.skip)continue;const _=p.x,k=p.y,w=_|0;w===g?(k<f?f=k:k>b&&(b=k),h=(d*h+_)/++d):(x(),e.lineTo(_,k),g=w,d=0,f=b=k),m=k}x()}function ir(e){const t=e.options,i=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!i?Rb:Lb}function $b(e){return e.stepped?Lf:e.tension||e.cubicInterpolationMode==="monotone"?Rf:Le}function Ib(e,t,i,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,i,s)&&n.closePath()),Oc(e,t.options),e.stroke(n)}function Bb(e,t,i,s){const{segments:n,options:r}=t,o=ir(t);for(const a of n)Oc(e,r,a.style),e.beginPath(),o(e,t,a,{start:i,end:i+s-1})&&e.closePath(),e.stroke()}const Fb=typeof Path2D=="function";function Vb(e,t,i,s){Fb&&!t.options.segment?Ib(e,t,i,s):Bb(e,t,i,s)}class ue extends re{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,i){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;Cf(this._points,s,t,n,i),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=jf(this,this.options.segment))}first(){const t=this.segments,i=this.points;return t.length&&i[t[0].start]}last(){const t=this.segments,i=this.points,s=t.length;return s&&i[t[s-1].end]}interpolate(t,i){const s=this.options,n=t[i],r=this.points,o=mc(this,{property:i,start:n,end:n});if(!o.length)return;const a=[],l=$b(s);let c,h;for(c=0,h=o.length;c<h;++c){const{start:d,end:u}=o[c],p=r[d],g=r[u];if(p===g){a.push(p);continue}const f=Math.abs((n-p[i])/(g[i]-p[i])),b=l(p,g,f,s.stepped);b[i]=t[i],a.push(b)}return a.length===1?a[0]:a}pathSegment(t,i,s){return ir(this)(t,this,i,s)}path(t,i,s){const n=this.segments,r=ir(this);let o=this._loop;i=i||0,s=s||this.points.length-i;for(const a of n)o&=r(t,this,a,{start:i,end:i+s-1});return!!o}draw(t,i,s,n){const r=this.options||{};(this.points||[]).length&&r.borderWidth&&(t.save(),Vb(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}E(ue,"id","line"),E(ue,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),E(ue,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),E(ue,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"&&e!=="fill"});function na(e,t,i,s){const n=e.options,{[i]:r}=e.getProps([i],s);return Math.abs(t-r)<n.radius+n.hitRadius}class Ti extends re{constructor(t){super(),E(this,"parsed"),E(this,"skip"),E(this,"stop"),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,i,s){const n=this.options,{x:r,y:o}=this.getProps(["x","y"],s);return Math.pow(t-r,2)+Math.pow(i-o,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,i){return na(this,t,"x",i)}inYRange(t,i){return na(this,t,"y",i)}getCenterPoint(t){const{x:i,y:s}=this.getProps(["x","y"],t);return{x:i,y:s}}size(t){t=t||this.options||{};let i=t.radius||0;i=Math.max(i,i&&t.hoverRadius||0);const s=i&&t.borderWidth||0;return(i+s)*2}draw(t,i){const s=this.options;this.skip||s.radius<.1||!Jt(this,i,this.size(s)/2)||(t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.fillStyle=s.backgroundColor,Jn(t,s,this.x,this.y))}getRange(){const t=this.options||{};return t.radius+t.hitRadius}}E(Ti,"id","point"),E(Ti,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),E(Ti,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function zc(e,t){const{x:i,y:s,base:n,width:r,height:o}=e.getProps(["x","y","base","width","height"],t);let a,l,c,h,d;return e.horizontal?(d=o/2,a=Math.min(i,n),l=Math.max(i,n),c=s-d,h=s+d):(d=r/2,a=i-d,l=i+d,c=Math.min(s,n),h=Math.max(s,n)),{left:a,top:c,right:l,bottom:h}}function pe(e,t,i,s){return e?0:at(t,i,s)}function jb(e,t,i){const s=e.options.borderWidth,n=e.borderSkipped,r=oc(s);return{t:pe(n.top,r.top,0,i),r:pe(n.right,r.right,0,t),b:pe(n.bottom,r.bottom,0,i),l:pe(n.left,r.left,0,t)}}function Hb(e,t,i){const{enableBorderRadius:s}=e.getProps(["enableBorderRadius"]),n=e.options.borderRadius,r=$e(n),o=Math.min(t,i),a=e.borderSkipped,l=s||R(n);return{topLeft:pe(!l||a.top||a.left,r.topLeft,0,o),topRight:pe(!l||a.top||a.right,r.topRight,0,o),bottomLeft:pe(!l||a.bottom||a.left,r.bottomLeft,0,o),bottomRight:pe(!l||a.bottom||a.right,r.bottomRight,0,o)}}function Nb(e){const t=zc(e),i=t.right-t.left,s=t.bottom-t.top,n=jb(e,i/2,s/2),r=Hb(e,i/2,s/2);return{outer:{x:t.left,y:t.top,w:i,h:s,radius:r},inner:{x:t.left+n.l,y:t.top+n.t,w:i-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,r.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,r.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,r.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,r.bottomRight-Math.max(n.b,n.r))}}}}function Pn(e,t,i,s){const n=t===null,r=i===null,o=e&&!(n&&r)&&zc(e,s);return o&&(n||Gt(t,o.left,o.right))&&(r||Gt(i,o.top,o.bottom))}function Wb(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function Ub(e,t){e.rect(t.x,t.y,t.w,t.h)}function On(e,t,i={}){const s=e.x!==i.x?-t:0,n=e.y!==i.y?-t:0,r=(e.x+e.w!==i.x+i.w?t:0)-s,o=(e.y+e.h!==i.y+i.h?t:0)-n;return{x:e.x+s,y:e.y+n,w:e.w+r,h:e.h+o,radius:e.radius}}class zi extends re{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:i,options:{borderColor:s,backgroundColor:n}}=this,{inner:r,outer:o}=Nb(this),a=Wb(o.radius)?ji:Ub;t.save(),(o.w!==r.w||o.h!==r.h)&&(t.beginPath(),a(t,On(o,i,r)),t.clip(),a(t,On(r,-i,o)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,On(r,i)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,i,s){return Pn(this,t,i,s)}inXRange(t,i){return Pn(this,t,null,i)}inYRange(t,i){return Pn(this,null,t,i)}getCenterPoint(t){const{x:i,y:s,base:n,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(i+n)/2:i,y:r?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}E(zi,"id","bar"),E(zi,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),E(zi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var qb=Object.freeze({__proto__:null,ArcElement:Qe,BarElement:zi,LineElement:ue,PointElement:Ti});const sr=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],ra=sr.map(e=>e.replace("rgb(","rgba(").replace(")",", 0.5)"));function Lc(e){return sr[e%sr.length]}function Rc(e){return ra[e%ra.length]}function Yb(e,t){return e.borderColor=Lc(t),e.backgroundColor=Rc(t),++t}function Xb(e,t){return e.backgroundColor=e.data.map(()=>Lc(t++)),t}function Kb(e,t){return e.backgroundColor=e.data.map(()=>Rc(t++)),t}function Gb(e){let t=0;return(i,s)=>{const n=e.getDatasetMeta(s).controller;n instanceof Re?t=Xb(i,t):n instanceof Oi?t=Kb(i,t):n&&(t=Yb(i,t))}}function oa(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Qb(e){return e&&(e.borderColor||e.backgroundColor)}function Jb(){return X.borderColor!=="rgba(0,0,0,0.1)"||X.backgroundColor!=="rgba(0,0,0,0.1)"}var Zb={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,i){if(!i.enabled)return;const{data:{datasets:s},options:n}=e.config,{elements:r}=n,o=oa(s)||Qb(n)||r&&oa(r)||Jb();if(!i.forceOverride&&o)return;const a=Gb(e);s.forEach(a)}};function tm(e,t,i,s,n){const r=n.samples||s;if(r>=i)return e.slice(t,t+i);const o=[],a=(i-2)/(r-2);let l=0;const c=t+i-1;let h=t,d,u,p,g,f;for(o[l++]=e[h],d=0;d<r-2;d++){let b=0,m=0,y;const x=Math.floor((d+1)*a)+1+t,_=Math.min(Math.floor((d+2)*a)+1,i)+t,k=_-x;for(y=x;y<_;y++)b+=e[y].x,m+=e[y].y;b/=k,m/=k;const w=Math.floor(d*a)+1+t,M=Math.min(Math.floor((d+1)*a)+1,i)+t,{x:C,y:A}=e[h];for(p=g=-1,y=w;y<M;y++)g=.5*Math.abs((C-b)*(e[y].y-A)-(C-e[y].x)*(m-A)),g>p&&(p=g,u=e[y],f=y);o[l++]=u,h=f}return o[l++]=e[c],o}function em(e,t,i,s){let n=0,r=0,o,a,l,c,h,d,u,p,g,f;const b=[],m=t+i-1,y=e[t].x,x=e[m].x-y;for(o=t;o<t+i;++o){a=e[o],l=(a.x-y)/x*s,c=a.y;const _=l|0;if(_===h)c<g?(g=c,d=o):c>f&&(f=c,u=o),n=(r*n+a.x)/++r;else{const k=o-1;if(!L(d)&&!L(u)){const w=Math.min(d,u),M=Math.max(d,u);w!==p&&w!==k&&b.push({...e[w],x:n}),M!==p&&M!==k&&b.push({...e[M],x:n})}o>0&&k!==p&&b.push(e[k]),b.push(a),h=_,r=0,g=f=c,d=u=p=o}}return b}function $c(e){if(e._decimated){const t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function aa(e){e.data.datasets.forEach(t=>{$c(t)})}function im(e,t){const i=t.length;let s=0,n;const{iScale:r}=e,{min:o,max:a,minDefined:l,maxDefined:c}=r.getUserBounds();return l&&(s=at(Qt(t,r.axis,o).lo,0,i-1)),c?n=at(Qt(t,r.axis,a).hi+1,s,i)-s:n=i-s,{start:s,count:n}}var sm={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(e,t,i)=>{if(!i.enabled){aa(e);return}const s=e.width;e.data.datasets.forEach((n,r)=>{const{_data:o,indexAxis:a}=n,l=e.getDatasetMeta(r),c=o||n.data;if(U([a,e.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=e.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||e.options.parsing)return;let{start:d,count:u}=im(l,c);const p=i.threshold||4*s;if(u<=p){$c(n);return}L(o)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(f){this._data=f}}));let g;switch(i.algorithm){case"lttb":g=tm(c,d,u,s,i);break;case"min-max":g=em(c,d,u,s);break;default:throw new Error(`Unsupported decimation algorithm '${i.algorithm}'`)}n._decimated=g})},destroy(e){aa(e)}};function nm(e,t,i){const s=e.segments,n=e.points,r=t.points,o=[];for(const a of s){let{start:l,end:c}=a;c=un(l,c,n);const h=nr(i,n[l],n[c],a.loop);if(!t.segments){o.push({source:a,target:h,start:n[l],end:n[c]});continue}const d=mc(t,h);for(const u of d){const p=nr(i,r[u.start],r[u.end],u.loop),g=bc(a,n,p);for(const f of g)o.push({source:f,target:u,start:{[i]:la(h,p,"start",Math.max)},end:{[i]:la(h,p,"end",Math.min)}})}}return o}function nr(e,t,i,s){if(s)return;let n=t[e],r=i[e];return e==="angle"&&(n=pt(n),r=pt(r)),{property:e,start:n,end:r}}function rm(e,t){const{x:i=null,y:s=null}=e||{},n=t.points,r=[];return t.segments.forEach(({start:o,end:a})=>{a=un(o,a,n);const l=n[o],c=n[a];s!==null?(r.push({x:l.x,y:s}),r.push({x:c.x,y:s})):i!==null&&(r.push({x:i,y:l.y}),r.push({x:i,y:c.y}))}),r}function un(e,t,i){for(;t>e;t--){const s=i[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function la(e,t,i,s){return e&&t?s(e[i],t[i]):e?e[i]:t?t[i]:0}function Ic(e,t){let i=[],s=!1;return q(e)?(s=!0,i=e):i=rm(e,t),i.length?new ue({points:i,options:{tension:0},_loop:s,_fullLoop:s}):null}function ca(e){return e&&e.fill!==!1}function om(e,t,i){let s=e[t].fill;const n=[t];let r;if(!i)return s;for(;s!==!1&&n.indexOf(s)===-1;){if(!J(s))return s;if(r=e[s],!r)return!1;if(r.visible)return s;n.push(s),s=r.fill}return!1}function am(e,t,i){const s=dm(e);if(R(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return J(n)&&Math.floor(n)===n?lm(s[0],t,n,i):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function lm(e,t,i,s){return(e==="-"||e==="+")&&(i=t+i),i===t||i<0||i>=s?!1:i}function cm(e,t){let i=null;return e==="start"?i=t.bottom:e==="end"?i=t.top:R(e)?i=t.getPixelForValue(e.value):t.getBasePixel&&(i=t.getBasePixel()),i}function hm(e,t,i){let s;return e==="start"?s=i:e==="end"?s=t.options.reverse?t.min:t.max:R(e)?s=e.value:s=t.getBaseValue(),s}function dm(e){const t=e.options,i=t.fill;let s=z(i&&i.target,i);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function um(e){const{scale:t,index:i,line:s}=e,n=[],r=s.segments,o=s.points,a=pm(t,i);a.push(Ic({x:null,y:t.bottom},s));for(let l=0;l<r.length;l++){const c=r[l];for(let h=c.start;h<=c.end;h++)fm(n,o[h],a)}return new ue({points:n,options:{}})}function pm(e,t){const i=[],s=e.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const r=s[n];if(r.index===t)break;r.hidden||i.unshift(r.dataset)}return i}function fm(e,t,i){const s=[];for(let n=0;n<i.length;n++){const r=i[n],{first:o,last:a,point:l}=gm(r,t,"x");if(!(!l||o&&a)){if(o)s.unshift(l);else if(e.push(l),!a)break}}e.push(...s)}function gm(e,t,i){const s=e.interpolate(t,i);if(!s)return{};const n=s[i],r=e.segments,o=e.points;let a=!1,l=!1;for(let c=0;c<r.length;c++){const h=r[c],d=o[h.start][i],u=o[h.end][i];if(Gt(n,d,u)){a=n===d,l=n===u;break}}return{first:a,last:l,point:s}}class Bc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,i,s){const{x:n,y:r,radius:o}=this;return i=i||{start:0,end:Y},t.arc(n,r,o,i.end,i.start,!0),!s.bounds}interpolate(t){const{x:i,y:s,radius:n}=this,r=t.angle;return{x:i+Math.cos(r)*n,y:s+Math.sin(r)*n,angle:r}}}function bm(e){const{chart:t,fill:i,line:s}=e;if(J(i))return mm(t,i);if(i==="stack")return um(e);if(i==="shape")return!0;const n=vm(e);return n instanceof Bc?n:Ic(n,s)}function mm(e,t){const i=e.getDatasetMeta(t);return i&&e.isDatasetVisible(t)?i.dataset:null}function vm(e){return(e.scale||{}).getPointPositionForValue?xm(e):ym(e)}function ym(e){const{scale:t={},fill:i}=e,s=cm(i,t);if(J(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function xm(e){const{scale:t,fill:i}=e,s=t.options,n=t.getLabels().length,r=s.reverse?t.max:t.min,o=hm(i,t,r),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,r);return new Bc({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(o)})}for(let l=0;l<n;++l)a.push(t.getPointPositionForValue(l,o));return a}function Tn(e,t,i){const s=bm(t),{chart:n,index:r,line:o,scale:a,axis:l}=t,c=o.options,h=c.fill,d=c.backgroundColor,{above:u=d,below:p=d}=h||{},g=n.getDatasetMeta(r),f=vc(n,g);s&&o.points.length&&(ln(e,i),_m(e,{line:o,target:s,above:u,below:p,area:i,scale:a,axis:l,clip:f}),cn(e))}function _m(e,t){const{line:i,target:s,above:n,below:r,area:o,scale:a,clip:l}=t,c=i._loop?"angle":t.axis;e.save();let h=r;r!==n&&(c==="x"?(ha(e,s,o.top),zn(e,{line:i,target:s,color:n,scale:a,property:c,clip:l}),e.restore(),e.save(),ha(e,s,o.bottom)):c==="y"&&(da(e,s,o.left),zn(e,{line:i,target:s,color:r,scale:a,property:c,clip:l}),e.restore(),e.save(),da(e,s,o.right),h=n)),zn(e,{line:i,target:s,color:h,scale:a,property:c,clip:l}),e.restore()}function ha(e,t,i){const{segments:s,points:n}=t;let r=!0,o=!1;e.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[un(l,c,n)];r?(e.moveTo(h.x,h.y),r=!1):(e.lineTo(h.x,i),e.lineTo(h.x,h.y)),o=!!t.pathSegment(e,a,{move:o}),o?e.closePath():e.lineTo(d.x,i)}e.lineTo(t.first().x,i),e.closePath(),e.clip()}function da(e,t,i){const{segments:s,points:n}=t;let r=!0,o=!1;e.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[un(l,c,n)];r?(e.moveTo(h.x,h.y),r=!1):(e.lineTo(i,h.y),e.lineTo(h.x,h.y)),o=!!t.pathSegment(e,a,{move:o}),o?e.closePath():e.lineTo(i,d.y)}e.lineTo(i,t.first().y),e.closePath(),e.clip()}function zn(e,t){const{line:i,target:s,property:n,color:r,scale:o,clip:a}=t,l=nm(i,s,n);for(const{source:c,target:h,start:d,end:u}of l){const{style:{backgroundColor:p=r}={}}=c,g=s!==!0;e.save(),e.fillStyle=p,wm(e,o,a,g&&nr(n,d,u)),e.beginPath();const f=!!i.pathSegment(e,c);let b;if(g){f?e.closePath():ua(e,s,u,n);const m=!!s.pathSegment(e,h,{move:f,reverse:!0});b=f&&m,b||ua(e,s,d,n)}e.closePath(),e.fill(b?"evenodd":"nonzero"),e.restore()}}function wm(e,t,i,s){const n=t.chart.chartArea,{property:r,start:o,end:a}=s||{};if(r==="x"||r==="y"){let l,c,h,d;r==="x"?(l=o,c=n.top,h=a,d=n.bottom):(l=n.left,c=o,h=n.right,d=a),e.beginPath(),i&&(l=Math.max(l,i.left),h=Math.min(h,i.right),c=Math.max(c,i.top),d=Math.min(d,i.bottom)),e.rect(l,c,h-l,d-c),e.clip()}}function ua(e,t,i,s){const n=t.interpolate(i,s);n&&e.lineTo(n.x,n.y)}var km={id:"filler",afterDatasetsUpdate(e,t,i){const s=(e.data.datasets||[]).length,n=[];let r,o,a,l;for(o=0;o<s;++o)r=e.getDatasetMeta(o),a=r.dataset,l=null,a&&a.options&&a instanceof ue&&(l={visible:e.isDatasetVisible(o),index:o,fill:am(a,o,s),chart:e,axis:r.controller.options.indexAxis,scale:r.vScale,line:a}),r.$filler=l,n.push(l);for(o=0;o<s;++o)l=n[o],!(!l||l.fill===!1)&&(l.fill=om(n,o,i.propagate))},beforeDraw(e,t,i){const s=i.drawTime==="beforeDraw",n=e.getSortedVisibleDatasetMetas(),r=e.chartArea;for(let o=n.length-1;o>=0;--o){const a=n[o].$filler;a&&(a.line.updateControlPoints(r,a.axis),s&&a.fill&&Tn(e.ctx,a,r))}},beforeDatasetsDraw(e,t,i){if(i.drawTime!=="beforeDatasetsDraw")return;const s=e.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const r=s[n].$filler;ca(r)&&Tn(e.ctx,r,e.chartArea)}},beforeDatasetDraw(e,t,i){const s=t.meta.$filler;!ca(s)||i.drawTime!=="beforeDatasetDraw"||Tn(e.ctx,s,e.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const pa=(e,t)=>{let{boxHeight:i=t,boxWidth:s=t}=e;return e.usePointStyle&&(i=Math.min(i,t),s=e.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:i,itemHeight:Math.max(t,i)}},Sm=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index;class fa extends re{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,i,s){this.maxWidth=t,this.maxHeight=i,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let i=W(t.generateLabels,[this.chart],this)||[];t.filter&&(i=i.filter(s=>t.filter(s,this.chart.data))),t.sort&&(i=i.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&i.reverse(),this.legendItems=i}fit(){const{options:t,ctx:i}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=st(s.font),r=n.size,o=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=pa(s,r);let c,h;i.font=n.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(o,r,a,l)+10):(h=this.maxHeight,c=this._fitCols(o,n,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,i,s,n){const{ctx:r,maxWidth:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=n+a;let d=t;r.textAlign="left",r.textBaseline="middle";let u=-1,p=-h;return this.legendItems.forEach((g,f)=>{const b=s+i/2+r.measureText(g.text).width;(f===0||c[c.length-1]+b+2*a>o)&&(d+=h,c[c.length-(f>0?0:1)]=0,p+=h,u++),l[f]={left:0,top:p,row:u,width:b,height:n},c[c.length-1]+=b+a}),d}_fitCols(t,i,s,n){const{ctx:r,maxHeight:o,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=o-t;let d=a,u=0,p=0,g=0,f=0;return this.legendItems.forEach((b,m)=>{const{itemWidth:y,itemHeight:x}=Mm(s,i,r,b,n);m>0&&p+x+2*a>h&&(d+=u+a,c.push({width:u,height:p}),g+=u+a,f++,u=p=0),l[m]={left:g,top:p,col:f,width:y,height:x},u=Math.max(u,y),p+=x+a}),d+=u,c.push({width:u,height:p}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:i,options:{align:s,labels:{padding:n},rtl:r}}=this,o=Ze(r,this.left,this.width);if(this.isHorizontal()){let a=0,l=ut(s,this.left+n,this.right-this.lineWidths[a]);for(const c of i)a!==c.row&&(a=c.row,l=ut(s,this.left+n,this.right-this.lineWidths[a])),c.top+=this.top+t+n,c.left=o.leftForLtr(o.x(l),c.width),l+=c.width+n}else{let a=0,l=ut(s,this.top+t+n,this.bottom-this.columnSizes[a].height);for(const c of i)c.col!==a&&(a=c.col,l=ut(s,this.top+t+n,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+n,c.left=o.leftForLtr(o.x(c.left),c.width),l+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;ln(t,this),this._draw(),cn(t)}}_draw(){const{options:t,columnSizes:i,lineWidths:s,ctx:n}=this,{align:r,labels:o}=t,a=X.color,l=Ze(t.rtl,this.left,this.width),c=st(o.font),{padding:h}=o,d=c.size,u=d/2;let p;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:g,boxHeight:f,itemHeight:b}=pa(o,d),m=function(w,M,C){if(isNaN(g)||g<=0||isNaN(f)||f<0)return;n.save();const A=z(C.lineWidth,1);if(n.fillStyle=z(C.fillStyle,a),n.lineCap=z(C.lineCap,"butt"),n.lineDashOffset=z(C.lineDashOffset,0),n.lineJoin=z(C.lineJoin,"miter"),n.lineWidth=A,n.strokeStyle=z(C.strokeStyle,a),n.setLineDash(z(C.lineDash,[])),o.usePointStyle){const D={radius:f*Math.SQRT2/2,pointStyle:C.pointStyle,rotation:C.rotation,borderWidth:A},P=l.xPlus(w,g/2),T=M+u;rc(n,D,P,T,o.pointStyleWidth&&g)}else{const D=M+Math.max((d-f)/2,0),P=l.leftForLtr(w,g),T=$e(C.borderRadius);n.beginPath(),Object.values(T).some(G=>G!==0)?ji(n,{x:P,y:D,w:g,h:f,radius:T}):n.rect(P,D,g,f),n.fill(),A!==0&&n.stroke()}n.restore()},y=function(w,M,C){Fe(n,C.text,w,M+b/2,c,{strikethrough:C.hidden,textAlign:l.textAlign(C.textAlign)})},x=this.isHorizontal(),_=this._computeTitleHeight();x?p={x:ut(r,this.left+h,this.right-s[0]),y:this.top+h+_,line:0}:p={x:this.left+h,y:ut(r,this.top+_+h,this.bottom-i[0].height),line:0},pc(this.ctx,t.textDirection);const k=b+h;this.legendItems.forEach((w,M)=>{n.strokeStyle=w.fontColor,n.fillStyle=w.fontColor;const C=n.measureText(w.text).width,A=l.textAlign(w.textAlign||(w.textAlign=o.textAlign)),D=g+u+C;let P=p.x,T=p.y;l.setWidth(this.width),x?M>0&&P+D+h>this.right&&(T=p.y+=k,p.line++,P=p.x=ut(r,this.left+h,this.right-s[p.line])):M>0&&T+k>this.bottom&&(P=p.x=P+i[p.line].width+h,p.line++,T=p.y=ut(r,this.top+_+h,this.bottom-i[p.line].height));const G=l.x(P);if(m(G,T,w),P=Np(A,P+g+u,x?P+D:this.right,t.rtl),y(l.x(P),T,w),x)p.x+=D+h;else if(typeof w.text!="string"){const j=c.lineHeight;p.y+=Fc(w,j)+h}else p.y+=k}),fc(this.ctx,t.textDirection)}drawTitle(){const t=this.options,i=t.title,s=st(i.font),n=ct(i.padding);if(!i.display)return;const r=Ze(t.rtl,this.left,this.width),o=this.ctx,a=i.position,l=s.size/2,c=n.top+l;let h,d=this.left,u=this.width;if(this.isHorizontal())u=Math.max(...this.lineWidths),h=this.top+c,d=ut(t.align,d,this.right-u);else{const g=this.columnSizes.reduce((f,b)=>Math.max(f,b.height),0);h=c+ut(t.align,this.top,this.bottom-g-t.labels.padding-this._computeTitleHeight())}const p=ut(a,d,d+u);o.textAlign=r.textAlign(Mr(a)),o.textBaseline="middle",o.strokeStyle=i.color,o.fillStyle=i.color,o.font=s.string,Fe(o,i.text,p,h,s)}_computeTitleHeight(){const t=this.options.title,i=st(t.font),s=ct(t.padding);return t.display?i.lineHeight+s.height:0}_getLegendItemAt(t,i){let s,n,r;if(Gt(t,this.left,this.right)&&Gt(i,this.top,this.bottom)){for(r=this.legendHitBoxes,s=0;s<r.length;++s)if(n=r[s],Gt(t,n.left,n.left+n.width)&&Gt(i,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const i=this.options;if(!Dm(t.type,i))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,r=Sm(n,s);n&&!r&&W(i.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!r&&W(i.onHover,[t,s,this],this)}else s&&W(i.onClick,[t,s,this],this)}}function Mm(e,t,i,s,n){const r=Cm(s,e,t,i),o=Em(n,s,t.lineHeight);return{itemWidth:r,itemHeight:o}}function Cm(e,t,i,s){let n=e.text;return n&&typeof n!="string"&&(n=n.reduce((r,o)=>r.length>o.length?r:o)),t+i.size/2+s.measureText(n).width}function Em(e,t,i){let s=e;return typeof t.text!="string"&&(s=Fc(t,i)),s}function Fc(e,t){const i=e.text?e.text.length:0;return t*i}function Dm(e,t){return!!((e==="mousemove"||e==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(e==="click"||e==="mouseup"))}var Am={id:"legend",_element:fa,start(e,t,i){const s=e.legend=new fa({ctx:e.ctx,options:i,chart:e});ft.configure(e,s,i),ft.addBox(e,s)},stop(e){ft.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,i){const s=e.legend;ft.configure(e,s,i),s.options=i},afterUpdate(e){const t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,i){const s=t.datasetIndex,n=i.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){const t=e.data.datasets,{labels:{usePointStyle:i,pointStyle:s,textAlign:n,color:r,useBorderRadius:o,borderRadius:a}}=e.legend.options;return e._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(i?0:void 0),h=ct(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:r,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:s||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:o&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:e=>!e.startsWith("on"),labels:{_scriptable:e=>!["generateLabels","filter","sort"].includes(e)}}};class Lr extends re{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,i){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=i;const n=q(s.text)?s.text.length:1;this._padding=ct(s.padding);const r=n*st(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=r:this.width=r}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:i,left:s,bottom:n,right:r,options:o}=this,a=o.align;let l=0,c,h,d;return this.isHorizontal()?(h=ut(a,s,r),d=i+t,c=r-s):(o.position==="left"?(h=s+t,d=ut(a,n,i),l=B*-.5):(h=r-t,d=ut(a,i,n),l=B*.5),c=n-i),{titleX:h,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,i=this.options;if(!i.display)return;const s=st(i.font),n=s.lineHeight/2+this._padding.top,{titleX:r,titleY:o,maxWidth:a,rotation:l}=this._drawArgs(n);Fe(t,i.text,0,0,s,{color:i.color,maxWidth:a,rotation:l,textAlign:Mr(i.align),textBaseline:"middle",translation:[r,o]})}}function Pm(e,t){const i=new Lr({ctx:e.ctx,options:t,chart:e});ft.configure(e,i,t),ft.addBox(e,i),e.titleBlock=i}var Om={id:"title",_element:Lr,start(e,t,i){Pm(e,i)},stop(e){const t=e.titleBlock;ft.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,i){const s=e.titleBlock;ft.configure(e,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const vs=new WeakMap;var Tm={id:"subtitle",start(e,t,i){const s=new Lr({ctx:e.ctx,options:i,chart:e});ft.configure(e,s,i),ft.addBox(e,s),vs.set(e,s)},stop(e){ft.removeBox(e,vs.get(e)),vs.delete(e)},beforeUpdate(e,t,i){const s=vs.get(e);ft.configure(e,s,i),s.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ki={average(e){if(!e.length)return!1;let t,i,s=new Set,n=0,r=0;for(t=0,i=e.length;t<i;++t){const o=e[t].element;if(o&&o.hasValue()){const a=o.tooltipPosition();s.add(a.x),n+=a.y,++r}}return r===0||s.size===0?!1:{x:[...s].reduce((o,a)=>o+a)/s.size,y:n/r}},nearest(e,t){if(!e.length)return!1;let i=t.x,s=t.y,n=Number.POSITIVE_INFINITY,r,o,a;for(r=0,o=e.length;r<o;++r){const l=e[r].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=Gn(t,c);h<n&&(n=h,a=l)}}if(a){const l=a.tooltipPosition();i=l.x,s=l.y}return{x:i,y:s}}};function Rt(e,t){return t&&(q(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function qt(e){return(typeof e=="string"||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function zm(e,t){const{element:i,datasetIndex:s,index:n}=t,r=e.getDatasetMeta(s).controller,{label:o,value:a}=r.getLabelAndValue(n);return{chart:e,label:o,parsed:r.getParsed(n),raw:e.data.datasets[s].data[n],formattedValue:a,dataset:r.getDataset(),dataIndex:n,datasetIndex:s,element:i}}function ga(e,t){const i=e.chart.ctx,{body:s,footer:n,title:r}=e,{boxWidth:o,boxHeight:a}=t,l=st(t.bodyFont),c=st(t.titleFont),h=st(t.footerFont),d=r.length,u=n.length,p=s.length,g=ct(t.padding);let f=g.height,b=0,m=s.reduce((_,k)=>_+k.before.length+k.lines.length+k.after.length,0);if(m+=e.beforeBody.length+e.afterBody.length,d&&(f+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),m){const _=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;f+=p*_+(m-p)*l.lineHeight+(m-1)*t.bodySpacing}u&&(f+=t.footerMarginTop+u*h.lineHeight+(u-1)*t.footerSpacing);let y=0;const x=function(_){b=Math.max(b,i.measureText(_).width+y)};return i.save(),i.font=c.string,H(e.title,x),i.font=l.string,H(e.beforeBody.concat(e.afterBody),x),y=t.displayColors?o+2+t.boxPadding:0,H(s,_=>{H(_.before,x),H(_.lines,x),H(_.after,x)}),y=0,i.font=h.string,H(e.footer,x),i.restore(),b+=g.width,{width:b,height:f}}function Lm(e,t){const{y:i,height:s}=t;return i<s/2?"top":i>e.height-s/2?"bottom":"center"}function Rm(e,t,i,s){const{x:n,width:r}=s,o=i.caretSize+i.caretPadding;if(e==="left"&&n+r+o>t.width||e==="right"&&n-r-o<0)return!0}function $m(e,t,i,s){const{x:n,width:r}=i,{width:o,chartArea:{left:a,right:l}}=e;let c="center";return s==="center"?c=n<=(a+l)/2?"left":"right":n<=r/2?c="left":n>=o-r/2&&(c="right"),Rm(c,e,t,i)&&(c="center"),c}function ba(e,t,i){const s=i.yAlign||t.yAlign||Lm(e,i);return{xAlign:i.xAlign||t.xAlign||$m(e,t,i,s),yAlign:s}}function Im(e,t){let{x:i,width:s}=e;return t==="right"?i-=s:t==="center"&&(i-=s/2),i}function Bm(e,t,i){let{y:s,height:n}=e;return t==="top"?s+=i:t==="bottom"?s-=n+i:s-=n/2,s}function ma(e,t,i,s){const{caretSize:n,caretPadding:r,cornerRadius:o}=e,{xAlign:a,yAlign:l}=i,c=n+r,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:p}=$e(o);let g=Im(t,a);const f=Bm(t,l,c);return l==="center"?a==="left"?g+=c:a==="right"&&(g-=c):a==="left"?g-=Math.max(h,u)+n:a==="right"&&(g+=Math.max(d,p)+n),{x:at(g,0,s.width-t.width),y:at(f,0,s.height-t.height)}}function ys(e,t,i){const s=ct(i.padding);return t==="center"?e.x+e.width/2:t==="right"?e.x+e.width-s.right:e.x+s.left}function va(e){return Rt([],qt(e))}function Fm(e,t,i){return Me(e,{tooltip:t,tooltipItems:i,type:"tooltip"})}function ya(e,t){const i=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return i?e.override(i):e}const Vc={beforeTitle:Wt,title(e){if(e.length>0){const t=e[0],i=t.chart.data.labels,s=i?i.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return i[t.dataIndex]}return""},afterTitle:Wt,beforeBody:Wt,beforeLabel:Wt,label(e){if(this&&this.options&&this.options.mode==="dataset")return e.label+": "+e.formattedValue||e.formattedValue;let t=e.dataset.label||"";t&&(t+=": ");const i=e.formattedValue;return L(i)||(t+=i),t},labelColor(e){const t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){const t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:Wt,afterBody:Wt,beforeFooter:Wt,footer:Wt,afterFooter:Wt};function bt(e,t,i,s){const n=e[t].call(i,s);return typeof n>"u"?Vc[t].call(i,s):n}var Ln;let xa=(Ln=class extends re{constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const e=this._cachedAnimations;if(e)return e;const t=this.chart,i=this.options.setContext(this.getContext()),s=i.enabled&&t.options.animation&&i.animations,n=new yc(this.chart,s);return s._cacheable&&(this._cachedAnimations=Object.freeze(n)),n}getContext(){return this.$context||(this.$context=Fm(this.chart.getContext(),this,this._tooltipItems))}getTitle(e,t){const{callbacks:i}=t,s=bt(i,"beforeTitle",this,e),n=bt(i,"title",this,e),r=bt(i,"afterTitle",this,e);let o=[];return o=Rt(o,qt(s)),o=Rt(o,qt(n)),o=Rt(o,qt(r)),o}getBeforeBody(e,t){return va(bt(t.callbacks,"beforeBody",this,e))}getBody(e,t){const{callbacks:i}=t,s=[];return H(e,n=>{const r={before:[],lines:[],after:[]},o=ya(i,n);Rt(r.before,qt(bt(o,"beforeLabel",this,n))),Rt(r.lines,bt(o,"label",this,n)),Rt(r.after,qt(bt(o,"afterLabel",this,n))),s.push(r)}),s}getAfterBody(e,t){return va(bt(t.callbacks,"afterBody",this,e))}getFooter(e,t){const{callbacks:i}=t,s=bt(i,"beforeFooter",this,e),n=bt(i,"footer",this,e),r=bt(i,"afterFooter",this,e);let o=[];return o=Rt(o,qt(s)),o=Rt(o,qt(n)),o=Rt(o,qt(r)),o}_createItems(e){const t=this._active,i=this.chart.data,s=[],n=[],r=[];let o=[],a,l;for(a=0,l=t.length;a<l;++a)o.push(zm(this.chart,t[a]));return e.filter&&(o=o.filter((c,h,d)=>e.filter(c,h,d,i))),e.itemSort&&(o=o.sort((c,h)=>e.itemSort(c,h,i))),H(o,c=>{const h=ya(e.callbacks,c);s.push(bt(h,"labelColor",this,c)),n.push(bt(h,"labelPointStyle",this,c)),r.push(bt(h,"labelTextColor",this,c))}),this.labelColors=s,this.labelPointStyles=n,this.labelTextColors=r,this.dataPoints=o,o}update(e,t){const i=this.options.setContext(this.getContext()),s=this._active;let n,r=[];if(!s.length)this.opacity!==0&&(n={opacity:0});else{const o=ki[i.position].call(this,s,this._eventPosition);r=this._createItems(i),this.title=this.getTitle(r,i),this.beforeBody=this.getBeforeBody(r,i),this.body=this.getBody(r,i),this.afterBody=this.getAfterBody(r,i),this.footer=this.getFooter(r,i);const a=this._size=ga(this,i),l=Object.assign({},o,a),c=ba(this.chart,i,l),h=ma(i,l,c,this.chart);this.xAlign=c.xAlign,this.yAlign=c.yAlign,n={opacity:1,x:h.x,y:h.y,width:a.width,height:a.height,caretX:o.x,caretY:o.y}}this._tooltipItems=r,this.$context=void 0,n&&this._resolveAnimations().update(this,n),e&&i.external&&i.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,i,s){const n=this.getCaretPosition(e,i,s);t.lineTo(n.x1,n.y1),t.lineTo(n.x2,n.y2),t.lineTo(n.x3,n.y3)}getCaretPosition(e,t,i){const{xAlign:s,yAlign:n}=this,{caretSize:r,cornerRadius:o}=i,{topLeft:a,topRight:l,bottomLeft:c,bottomRight:h}=$e(o),{x:d,y:u}=e,{width:p,height:g}=t;let f,b,m,y,x,_;return n==="center"?(x=u+g/2,s==="left"?(f=d,b=f-r,y=x+r,_=x-r):(f=d+p,b=f+r,y=x-r,_=x+r),m=f):(s==="left"?b=d+Math.max(a,c)+r:s==="right"?b=d+p-Math.max(l,h)-r:b=this.caretX,n==="top"?(y=u,x=y-r,f=b-r,m=b+r):(y=u+g,x=y+r,f=b+r,m=b-r),_=y),{x1:f,x2:b,x3:m,y1:y,y2:x,y3:_}}drawTitle(e,t,i){const s=this.title,n=s.length;let r,o,a;if(n){const l=Ze(i.rtl,this.x,this.width);for(e.x=ys(this,i.titleAlign,i),t.textAlign=l.textAlign(i.titleAlign),t.textBaseline="middle",r=st(i.titleFont),o=i.titleSpacing,t.fillStyle=i.titleColor,t.font=r.string,a=0;a<n;++a)t.fillText(s[a],l.x(e.x),e.y+r.lineHeight/2),e.y+=r.lineHeight+o,a+1===n&&(e.y+=i.titleMarginBottom-o)}}_drawColorBox(e,t,i,s,n){const r=this.labelColors[i],o=this.labelPointStyles[i],{boxHeight:a,boxWidth:l}=n,c=st(n.bodyFont),h=ys(this,"left",n),d=s.x(h),u=a<c.lineHeight?(c.lineHeight-a)/2:0,p=t.y+u;if(n.usePointStyle){const g={radius:Math.min(l,a)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},f=s.leftForLtr(d,l)+l/2,b=p+a/2;e.strokeStyle=n.multiKeyBackground,e.fillStyle=n.multiKeyBackground,Jn(e,g,f,b),e.strokeStyle=r.borderColor,e.fillStyle=r.backgroundColor,Jn(e,g,f,b)}else{e.lineWidth=R(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,e.strokeStyle=r.borderColor,e.setLineDash(r.borderDash||[]),e.lineDashOffset=r.borderDashOffset||0;const g=s.leftForLtr(d,l),f=s.leftForLtr(s.xPlus(d,1),l-2),b=$e(r.borderRadius);Object.values(b).some(m=>m!==0)?(e.beginPath(),e.fillStyle=n.multiKeyBackground,ji(e,{x:g,y:p,w:l,h:a,radius:b}),e.fill(),e.stroke(),e.fillStyle=r.backgroundColor,e.beginPath(),ji(e,{x:f,y:p+1,w:l-2,h:a-2,radius:b}),e.fill()):(e.fillStyle=n.multiKeyBackground,e.fillRect(g,p,l,a),e.strokeRect(g,p,l,a),e.fillStyle=r.backgroundColor,e.fillRect(f,p+1,l-2,a-2))}e.fillStyle=this.labelTextColors[i]}drawBody(e,t,i){const{body:s}=this,{bodySpacing:n,bodyAlign:r,displayColors:o,boxHeight:a,boxWidth:l,boxPadding:c}=i,h=st(i.bodyFont);let d=h.lineHeight,u=0;const p=Ze(i.rtl,this.x,this.width),g=function(M){t.fillText(M,p.x(e.x+u),e.y+d/2),e.y+=d+n},f=p.textAlign(r);let b,m,y,x,_,k,w;for(t.textAlign=r,t.textBaseline="middle",t.font=h.string,e.x=ys(this,f,i),t.fillStyle=i.bodyColor,H(this.beforeBody,g),u=o&&f!=="right"?r==="center"?l/2+c:l+2+c:0,x=0,k=s.length;x<k;++x){for(b=s[x],m=this.labelTextColors[x],t.fillStyle=m,H(b.before,g),y=b.lines,o&&y.length&&(this._drawColorBox(t,e,x,p,i),d=Math.max(h.lineHeight,a)),_=0,w=y.length;_<w;++_)g(y[_]),d=h.lineHeight;H(b.after,g)}u=0,d=h.lineHeight,H(this.afterBody,g),e.y-=n}drawFooter(e,t,i){const s=this.footer,n=s.length;let r,o;if(n){const a=Ze(i.rtl,this.x,this.width);for(e.x=ys(this,i.footerAlign,i),e.y+=i.footerMarginTop,t.textAlign=a.textAlign(i.footerAlign),t.textBaseline="middle",r=st(i.footerFont),t.fillStyle=i.footerColor,t.font=r.string,o=0;o<n;++o)t.fillText(s[o],a.x(e.x),e.y+r.lineHeight/2),e.y+=r.lineHeight+i.footerSpacing}}drawBackground(e,t,i,s){const{xAlign:n,yAlign:r}=this,{x:o,y:a}=e,{width:l,height:c}=i,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:p}=$e(s.cornerRadius);t.fillStyle=s.backgroundColor,t.strokeStyle=s.borderColor,t.lineWidth=s.borderWidth,t.beginPath(),t.moveTo(o+h,a),r==="top"&&this.drawCaret(e,t,i,s),t.lineTo(o+l-d,a),t.quadraticCurveTo(o+l,a,o+l,a+d),r==="center"&&n==="right"&&this.drawCaret(e,t,i,s),t.lineTo(o+l,a+c-p),t.quadraticCurveTo(o+l,a+c,o+l-p,a+c),r==="bottom"&&this.drawCaret(e,t,i,s),t.lineTo(o+u,a+c),t.quadraticCurveTo(o,a+c,o,a+c-u),r==="center"&&n==="left"&&this.drawCaret(e,t,i,s),t.lineTo(o,a+h),t.quadraticCurveTo(o,a,o+h,a),t.closePath(),t.fill(),s.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){const t=this.chart,i=this.$animations,s=i&&i.x,n=i&&i.y;if(s||n){const r=ki[e.position].call(this,this._active,this._eventPosition);if(!r)return;const o=this._size=ga(this,e),a=Object.assign({},r,this._size),l=ba(t,e,a),c=ma(e,a,l,t);(s._to!==c.x||n._to!==c.y)&&(this.xAlign=l.xAlign,this.yAlign=l.yAlign,this.width=o.width,this.height=o.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){const t=this.options.setContext(this.getContext());let i=this.opacity;if(!i)return;this._updateAnimationTarget(t);const s={width:this.width,height:this.height},n={x:this.x,y:this.y};i=Math.abs(i)<.001?0:i;const r=ct(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=i,this.drawBackground(n,e,s,t),pc(e,t.textDirection),n.y+=r.top,this.drawTitle(n,e,t),this.drawBody(n,e,t),this.drawFooter(n,e,t),fc(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){const i=this._active,s=e.map(({datasetIndex:o,index:a})=>{const l=this.chart.getDatasetMeta(o);if(!l)throw new Error("Cannot find a dataset at index "+o);return{datasetIndex:o,element:l.data[a],index:a}}),n=!Vs(i,s),r=this._positionChanged(s,t);(n||r)&&(this._active=s,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,i=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const s=this.options,n=this._active||[],r=this._getActiveElements(e,n,t,i),o=this._positionChanged(r,e),a=t||!Vs(r,n)||o;return a&&(this._active=r,(s.enabled||s.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),a}_getActiveElements(e,t,i,s){const n=this.options;if(e.type==="mouseout")return[];if(!s)return t.filter(o=>this.chart.data.datasets[o.datasetIndex]&&this.chart.getDatasetMeta(o.datasetIndex).controller.getParsed(o.index)!==void 0);const r=this.chart.getElementsAtEventForMode(e,n.mode,n,i);return n.reverse&&r.reverse(),r}_positionChanged(e,t){const{caretX:i,caretY:s,options:n}=this,r=ki[n.position].call(this,e,t);return r!==!1&&(i!==r.x||s!==r.y)}},E(Ln,"positioners",ki),Ln);var Vm={id:"tooltip",_element:xa,positioners:ki,afterInit(e,t,i){i&&(e.tooltip=new xa({chart:e,options:i}))},beforeUpdate(e,t,i){e.tooltip&&e.tooltip.initialize(i)},reset(e,t,i){e.tooltip&&e.tooltip.initialize(i)},afterDraw(e){const t=e.tooltip;if(t&&t._willRender()){const i={tooltip:t};if(e.notifyPlugins("beforeTooltipDraw",{...i,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins("afterTooltipDraw",i)}},afterEvent(e,t){if(e.tooltip){const i=t.replay;e.tooltip.handleEvent(t.event,i,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Vc},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:e=>e!=="filter"&&e!=="itemSort"&&e!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},jm=Object.freeze({__proto__:null,Colors:Zb,Decimation:sm,Filler:km,Legend:Am,SubTitle:Tm,Title:Om,Tooltip:Vm});const Hm=(e,t,i,s)=>(typeof t=="string"?(i=e.push(t)-1,s.unshift({index:i,label:t})):isNaN(t)&&(i=null),i);function Nm(e,t,i,s){const n=e.indexOf(t);if(n===-1)return Hm(e,t,i,s);const r=e.lastIndexOf(t);return n!==r?i:n}const Wm=(e,t)=>e===null?null:at(Math.round(e),0,t);function jc(e){const t=this.getLabels();return e>=0&&e<t.length?t[e]:e}class rr extends qe{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const i=this._addedLabels;if(i.length){const s=this.getLabels();for(const{index:n,label:r}of i)s[n]===r&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,i){if(L(t))return null;const s=this.getLabels();return i=isFinite(i)&&s[i]===t?i:Nm(s,t,z(i,t),this._addedLabels),Wm(i,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:i}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),i||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,i=this.max,s=this.options.offset,n=[];let r=this.getLabels();r=t===0&&i===r.length-1?r:r.slice(t,i+1),this._valueRange=Math.max(r.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let o=t;o<=i;o++)n.push({value:o});return n}getLabelForValue(t){return jc.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const i=this.ticks;return t<0||t>i.length-1?null:this.getPixelForValue(i[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}E(rr,"id","category"),E(rr,"defaults",{ticks:{callback:jc}});function Um(e,t){const i=[],{bounds:s,step:n,min:r,max:o,precision:a,count:l,maxTicks:c,maxDigits:h,includeBounds:d}=e,u=n||1,p=c-1,{min:g,max:f}=t,b=!L(r),m=!L(o),y=!L(l),x=(f-g)/(h+1);let _=go((f-g)/p/u)*u,k,w,M,C;if(_<1e-14&&!b&&!m)return[{value:g},{value:f}];C=Math.ceil(f/_)-Math.floor(g/_),C>p&&(_=go(C*_/p/u)*u),L(a)||(k=Math.pow(10,a),_=Math.ceil(_*k)/k),s==="ticks"?(w=Math.floor(g/_)*_,M=Math.ceil(f/_)*_):(w=g,M=f),b&&m&&n&&$p((o-r)/n,_/1e3)?(C=Math.round(Math.min((o-r)/_,c)),_=(o-r)/C,w=r,M=o):y?(w=b?r:w,M=m?o:M,C=l-1,_=(M-w)/C):(C=(M-w)/_,Di(C,Math.round(C),_/1e3)?C=Math.round(C):C=Math.ceil(C));const A=Math.max(bo(_),bo(w));k=Math.pow(10,L(a)?A:a),w=Math.round(w*k)/k,M=Math.round(M*k)/k;let D=0;for(b&&(d&&w!==r?(i.push({value:r}),w<r&&D++,Di(Math.round((w+D*_)*k)/k,r,_a(r,x,e))&&D++):w<r&&D++);D<C;++D){const P=Math.round((w+D*_)*k)/k;if(m&&P>o)break;i.push({value:P})}return m&&d&&M!==o?i.length&&Di(i[i.length-1].value,o,_a(o,x,e))?i[i.length-1].value=o:i.push({value:o}):(!m||M===o)&&i.push({value:M}),i}function _a(e,t,{horizontal:i,minRotation:s}){const n=Tt(s),r=(i?Math.sin(n):Math.cos(n))||.001,o=.75*t*(""+e).length;return Math.min(t/r,o)}class Ys extends qe{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,i){return L(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:i,maxDefined:s}=this.getUserBounds();let{min:n,max:r}=this;const o=l=>n=i?n:l,a=l=>r=s?r:l;if(t){const l=It(n),c=It(r);l<0&&c<0?a(0):l>0&&c>0&&o(0)}if(n===r){let l=r===0?1:Math.abs(r*.05);a(r+l),t||o(n-l)}this.min=n,this.max=r}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:i,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),i=i||11),i&&(n=Math.min(i,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,i=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:i.precision,step:i.stepSize,count:i.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:i.minRotation||0,includeBounds:i.includeBounds!==!1},r=this._range||this,o=Um(n,r);return t.bounds==="ticks"&&Gl(o,this,"value"),t.reverse?(o.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),o}configure(){const t=this.ticks;let i=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-i)/Math.max(t.length-1,1)/2;i-=n,s+=n}this._startValue=i,this._endValue=s,this._valueRange=s-i}getLabelForValue(t){return ss(t,this.chart.options.locale,this.options.ticks.format)}}class or extends Ys{determineDataLimits(){const{min:t,max:i}=this.getMinMax(!0);this.min=J(t)?t:0,this.max=J(i)?i:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),i=t?this.width:this.height,s=Tt(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,r=this._resolveTickFontOptions(0);return Math.ceil(i/Math.min(40,r.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}E(or,"id","linear"),E(or,"defaults",{ticks:{callback:an.formatters.numeric}});const Wi=e=>Math.floor(he(e)),Te=(e,t)=>Math.pow(10,Wi(e)+t);function wa(e){return e/Math.pow(10,Wi(e))===1}function ka(e,t,i){const s=Math.pow(10,i),n=Math.floor(e/s);return Math.ceil(t/s)-n}function qm(e,t){const i=t-e;let s=Wi(i);for(;ka(e,t,s)>10;)s++;for(;ka(e,t,s)<10;)s--;return Math.min(s,Wi(e))}function Ym(e,{min:t,max:i}){t=wt(e.min,t);const s=[],n=Wi(t);let r=qm(t,i),o=r<0?Math.pow(10,Math.abs(r)):1;const a=Math.pow(10,r),l=n>r?Math.pow(10,n):0,c=Math.round((t-l)*o)/o,h=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-h)/Math.pow(10,r)),u=wt(e.min,Math.round((l+h+d*Math.pow(10,r))*o)/o);for(;u<i;)s.push({value:u,major:wa(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(r++,d=2,o=r>=0?1:o),u=Math.round((l+h+d*Math.pow(10,r))*o)/o;const p=wt(e.max,u);return s.push({value:p,major:wa(p),significand:d}),s}class ar extends qe{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,i){const s=Ys.prototype.parse.apply(this,[t,i]);if(s===0){this._zero=!0;return}return J(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:i}=this.getMinMax(!0);this.min=J(t)?Math.max(0,t):null,this.max=J(i)?Math.max(0,i):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!J(this._userMin)&&(this.min=t===Te(this.min,0)?Te(this.min,-1):Te(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:i}=this.getUserBounds();let s=this.min,n=this.max;const r=a=>s=t?s:a,o=a=>n=i?n:a;s===n&&(s<=0?(r(1),o(10)):(r(Te(s,-1)),o(Te(n,1)))),s<=0&&r(Te(n,-1)),n<=0&&o(Te(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,i={min:this._userMin,max:this._userMax},s=Ym(i,this);return t.bounds==="ticks"&&Gl(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":ss(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=he(t),this._valueRange=he(this.max)-he(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(he(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const i=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+i*this._valueRange)}}E(ar,"id","logarithmic"),E(ar,"defaults",{ticks:{callback:an.formatters.logarithmic,major:{enabled:!0}}});function lr(e){const t=e.ticks;if(t.display&&e.display){const i=ct(t.backdropPadding);return z(t.font&&t.font.size,X.font.size)+i.height}return 0}function Xm(e,t,i){return i=q(i)?i:[i],{w:Zp(e,t.string,i),h:i.length*t.lineHeight}}function Sa(e,t,i,s,n){return e===s||e===n?{start:t-i/2,end:t+i/2}:e<s||e>n?{start:t-i,end:t}:{start:t,end:t+i}}function Km(e){const t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},i=Object.assign({},t),s=[],n=[],r=e._pointLabels.length,o=e.options.pointLabels,a=o.centerPointLabels?B/r:0;for(let l=0;l<r;l++){const c=o.setContext(e.getPointLabelContext(l));n[l]=c.padding;const h=e.getPointPosition(l,e.drawingArea+n[l],a),d=st(c.font),u=Xm(e.ctx,d,e._pointLabels[l]);s[l]=u;const p=pt(e.getIndexAngle(l)+a),g=Math.round(kr(p)),f=Sa(g,h.x,u.w,0,180),b=Sa(g,h.y,u.h,90,270);Gm(i,t,p,f,b)}e.setCenterPoint(t.l-i.l,i.r-t.r,t.t-i.t,i.b-t.b),e._pointLabelItems=Zm(e,s,n)}function Gm(e,t,i,s,n){const r=Math.abs(Math.sin(i)),o=Math.abs(Math.cos(i));let a=0,l=0;s.start<t.l?(a=(t.l-s.start)/r,e.l=Math.min(e.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/r,e.r=Math.max(e.r,t.r+a)),n.start<t.t?(l=(t.t-n.start)/o,e.t=Math.min(e.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/o,e.b=Math.max(e.b,t.b+l))}function Qm(e,t,i){const s=e.drawingArea,{extra:n,additionalAngle:r,padding:o,size:a}=i,l=e.getPointPosition(t,s+n+o,r),c=Math.round(kr(pt(l.angle+tt))),h=iv(l.y,a.h,c),d=tv(c),u=ev(l.x,a.w,d);return{visible:!0,x:l.x,y:h,textAlign:d,left:u,top:h,right:u+a.w,bottom:h+a.h}}function Jm(e,t){if(!t)return!0;const{left:i,top:s,right:n,bottom:r}=e;return!(Jt({x:i,y:s},t)||Jt({x:i,y:r},t)||Jt({x:n,y:s},t)||Jt({x:n,y:r},t))}function Zm(e,t,i){const s=[],n=e._pointLabels.length,r=e.options,{centerPointLabels:o,display:a}=r.pointLabels,l={extra:lr(r)/2,additionalAngle:o?B/n:0};let c;for(let h=0;h<n;h++){l.padding=i[h],l.size=t[h];const d=Qm(e,h,l);s.push(d),a==="auto"&&(d.visible=Jm(d,c),d.visible&&(c=d))}return s}function tv(e){return e===0||e===180?"center":e<180?"left":"right"}function ev(e,t,i){return i==="right"?e-=t:i==="center"&&(e-=t/2),e}function iv(e,t,i){return i===90||i===270?e-=t/2:(i>270||i<90)&&(e-=t),e}function sv(e,t,i){const{left:s,top:n,right:r,bottom:o}=i,{backdropColor:a}=t;if(!L(a)){const l=$e(t.borderRadius),c=ct(t.backdropPadding);e.fillStyle=a;const h=s-c.left,d=n-c.top,u=r-s+c.width,p=o-n+c.height;Object.values(l).some(g=>g!==0)?(e.beginPath(),ji(e,{x:h,y:d,w:u,h:p,radius:l}),e.fill()):e.fillRect(h,d,u,p)}}function nv(e,t){const{ctx:i,options:{pointLabels:s}}=e;for(let n=t-1;n>=0;n--){const r=e._pointLabelItems[n];if(!r.visible)continue;const o=s.setContext(e.getPointLabelContext(n));sv(i,o,r);const a=st(o.font),{x:l,y:c,textAlign:h}=r;Fe(i,e._pointLabels[n],l,c+a.lineHeight/2,a,{color:o.color,textAlign:h,textBaseline:"middle"})}}function Hc(e,t,i,s){const{ctx:n}=e;if(i)n.arc(e.xCenter,e.yCenter,t,0,Y);else{let r=e.getPointPosition(0,t);n.moveTo(r.x,r.y);for(let o=1;o<s;o++)r=e.getPointPosition(o,t),n.lineTo(r.x,r.y)}}function rv(e,t,i,s,n){const r=e.ctx,o=t.circular,{color:a,lineWidth:l}=t;!o&&!s||!a||!l||i<0||(r.save(),r.strokeStyle=a,r.lineWidth=l,r.setLineDash(n.dash||[]),r.lineDashOffset=n.dashOffset,r.beginPath(),Hc(e,i,o,s),r.closePath(),r.stroke(),r.restore())}function ov(e,t,i){return Me(e,{label:i,index:t,type:"pointLabel"})}class Si extends Ys{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ct(lr(this.options)/2),i=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+i/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(i,s)/2)}determineDataLimits(){const{min:t,max:i}=this.getMinMax(!1);this.min=J(t)&&!isNaN(t)?t:0,this.max=J(i)&&!isNaN(i)?i:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/lr(this.options))}generateTickLabels(t){Ys.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((i,s)=>{const n=W(this.options.pointLabels.callback,[i,s],this);return n||n===0?n:""}).filter((i,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?Km(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,i,s,n){this.xCenter+=Math.floor((t-i)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,i,s,n))}getIndexAngle(t){const i=Y/(this._pointLabels.length||1),s=this.options.startAngle||0;return pt(t*i+Tt(s))}getDistanceFromCenterForValue(t){if(L(t))return NaN;const i=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*i:(t-this.min)*i}getValueForDistanceFromCenter(t){if(L(t))return NaN;const i=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-i:this.min+i}getPointLabelContext(t){const i=this._pointLabels||[];if(t>=0&&t<i.length){const s=i[t];return ov(this.getContext(),t,s)}}getPointPosition(t,i,s=0){const n=this.getIndexAngle(t)-tt+s;return{x:Math.cos(n)*i+this.xCenter,y:Math.sin(n)*i+this.yCenter,angle:n}}getPointPositionForValue(t,i){return this.getPointPosition(t,this.getDistanceFromCenterForValue(i))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:i,top:s,right:n,bottom:r}=this._pointLabelItems[t];return{left:i,top:s,right:n,bottom:r}}drawBackground(){const{backgroundColor:t,grid:{circular:i}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Hc(this,this.getDistanceFromCenterForValue(this._endValue),i,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,i=this.options,{angleLines:s,grid:n,border:r}=i,o=this._pointLabels.length;let a,l,c;if(i.pointLabels.display&&nv(this,o),n.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const u=this.getContext(d),p=n.setContext(u),g=r.setContext(u);rv(this,p,l,o,g)}}),s.display){for(t.save(),a=o-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:u}=h;!u||!d||(t.lineWidth=u,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(i.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,i=this.options,s=i.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let r,o;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!i.reverse)return;const c=s.setContext(this.getContext(l)),h=st(c.font);if(r=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,o=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=ct(c.backdropPadding);t.fillRect(-o/2-d.left,-r-h.size/2-d.top,o+d.width,h.size+d.height)}Fe(t,a.label,0,-r,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}E(Si,"id","radialLinear"),E(Si,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:an.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}}),E(Si,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),E(Si,"descriptors",{angleLines:{_fallback:"grid"}});const pn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},yt=Object.keys(pn);function Ma(e,t){return e-t}function Ca(e,t){if(L(t))return null;const i=e._adapter,{parser:s,round:n,isoWeekday:r}=e._parseOpts;let o=t;return typeof s=="function"&&(o=s(o)),J(o)||(o=typeof s=="string"?i.parse(o,s):i.parse(o)),o===null?null:(n&&(o=n==="week"&&(ri(r)||r===!0)?i.startOf(o,"isoWeek",r):i.startOf(o,n)),+o)}function Ea(e,t,i,s){const n=yt.length;for(let r=yt.indexOf(e);r<n-1;++r){const o=pn[yt[r]],a=o.steps?o.steps:Number.MAX_SAFE_INTEGER;if(o.common&&Math.ceil((i-t)/(a*o.size))<=s)return yt[r]}return yt[n-1]}function av(e,t,i,s,n){for(let r=yt.length-1;r>=yt.indexOf(i);r--){const o=yt[r];if(pn[o].common&&e._adapter.diff(n,s,o)>=t-1)return o}return yt[i?yt.indexOf(i):0]}function lv(e){for(let t=yt.indexOf(e)+1,i=yt.length;t<i;++t)if(pn[yt[t]].common)return yt[t]}function Da(e,t,i){if(!i)e[t]=!0;else if(i.length){const{lo:s,hi:n}=Sr(i,t),r=i[s]>=t?i[s]:i[n];e[r]=!0}}function cv(e,t,i,s){const n=e._adapter,r=+n.startOf(t[0].value,s),o=t[t.length-1].value;let a,l;for(a=r;a<=o;a=+n.add(a,1,s))l=i[a],l>=0&&(t[l].major=!0);return t}function Aa(e,t,i){const s=[],n={},r=t.length;let o,a;for(o=0;o<r;++o)a=t[o],n[a]=o,s.push({value:a,major:!1});return r===0||!i?s:cv(e,s,n,i)}class Ui extends qe{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,i={}){const s=t.time||(t.time={}),n=this._adapter=new mg._date(t.adapters.date);n.init(i),Ei(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=i.normalized}parse(t,i){return t===void 0?null:Ca(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,i=this._adapter,s=t.time.unit||"day";let{min:n,max:r,minDefined:o,maxDefined:a}=this.getUserBounds();function l(c){!o&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!a&&!isNaN(c.max)&&(r=Math.max(r,c.max))}(!o||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=J(n)&&!isNaN(n)?n:+i.startOf(Date.now(),s),r=J(r)&&!isNaN(r)?r:+i.endOf(Date.now(),s)+1,this.min=Math.min(n,r-1),this.max=Math.max(n+1,r)}_getLabelBounds(){const t=this.getLabelTimestamps();let i=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(i=t[0],s=t[t.length-1]),{min:i,max:s}}buildTicks(){const t=this.options,i=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const r=this.min,o=this.max,a=Vp(n,r,o);return this._unit=i.unit||(s.autoSkip?Ea(i.minUnit,this.min,this.max,this._getLabelCapacity(r)):av(this,a.length,i.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:lv(this._unit),this.initOffsets(n),t.reverse&&a.reverse(),Aa(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let i=0,s=0,n,r;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?i=1-n:i=(this.getDecimalForValue(t[1])-n)/2,r=this.getDecimalForValue(t[t.length-1]),t.length===1?s=r:s=(r-this.getDecimalForValue(t[t.length-2]))/2);const o=t.length<3?.5:.25;i=at(i,0,o),s=at(s,0,o),this._offsets={start:i,end:s,factor:1/(i+1+s)}}_generate(){const t=this._adapter,i=this.min,s=this.max,n=this.options,r=n.time,o=r.unit||Ea(r.minUnit,i,s,this._getLabelCapacity(i)),a=z(n.ticks.stepSize,1),l=o==="week"?r.isoWeekday:!1,c=ri(l)||l===!0,h={};let d=i,u,p;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":o),t.diff(s,i,o)>1e5*a)throw new Error(i+" and "+s+" are too far apart with stepSize of "+a+" "+o);const g=n.ticks.source==="data"&&this.getDataTimestamps();for(u=d,p=0;u<s;u=+t.add(u,a,o),p++)Da(h,u,g);return(u===s||n.bounds==="ticks"||p===1)&&Da(h,u,g),Object.keys(h).sort(Ma).map(f=>+f)}getLabelForValue(t){const i=this._adapter,s=this.options.time;return s.tooltipFormat?i.format(t,s.tooltipFormat):i.format(t,s.displayFormats.datetime)}format(t,i){const s=this.options.time.displayFormats,n=this._unit,r=i||s[n];return this._adapter.format(t,r)}_tickFormatFunction(t,i,s,n){const r=this.options,o=r.ticks.callback;if(o)return W(o,[t,i,s],this);const a=r.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],d=c&&a[c],u=s[i],p=c&&d&&u&&u.major;return this._adapter.format(t,n||(p?d:h))}generateTickLabels(t){let i,s,n;for(i=0,s=t.length;i<s;++i)n=t[i],n.label=this._tickFormatFunction(n.value,i,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const i=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((i.start+s)*i.factor)}getValueForPixel(t){const i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const i=this.options.ticks,s=this.ctx.measureText(t).width,n=Tt(this.isHorizontal()?i.maxRotation:i.minRotation),r=Math.cos(n),o=Math.sin(n),a=this._resolveTickFontOptions(0).size;return{w:s*r+a*o,h:s*o+a*r}}_getLabelCapacity(t){const i=this.options.time,s=i.displayFormats,n=s[i.unit]||s.millisecond,r=this._tickFormatFunction(t,0,Aa(this,[t],this._majorUnit),n),o=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/o.w:this.height/o.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],i,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(i=0,s=n.length;i<s;++i)t=t.concat(n[i].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let i,s;if(t.length)return t;const n=this.getLabels();for(i=0,s=n.length;i<s;++i)t.push(Ca(this,n[i]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return Zl(t.sort(Ma))}}E(Ui,"id","time"),E(Ui,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function xs(e,t,i){let s=0,n=e.length-1,r,o,a,l;i?(t>=e[s].pos&&t<=e[n].pos&&({lo:s,hi:n}=Qt(e,"pos",t)),{pos:r,time:a}=e[s],{pos:o,time:l}=e[n]):(t>=e[s].time&&t<=e[n].time&&({lo:s,hi:n}=Qt(e,"time",t)),{time:r,pos:a}=e[s],{time:o,pos:l}=e[n]);const c=o-r;return c?a+(l-a)*(t-r)/c:a}class cr extends Ui{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),i=this._table=this.buildLookupTable(t);this._minPos=xs(i,this.min),this._tableRange=xs(i,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:i,max:s}=this,n=[],r=[];let o,a,l,c,h;for(o=0,a=t.length;o<a;++o)c=t[o],c>=i&&c<=s&&n.push(c);if(n.length<2)return[{time:i,pos:0},{time:s,pos:1}];for(o=0,a=n.length;o<a;++o)h=n[o+1],l=n[o-1],c=n[o],Math.round((h+l)/2)!==c&&r.push({time:c,pos:o/(a-1)});return r}_generate(){const t=this.min,i=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(i)||s.length===1)&&s.push(i),s.sort((n,r)=>n-r)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const i=this.getDataTimestamps(),s=this.getLabelTimestamps();return i.length&&s.length?t=this.normalize(i.concat(s)):t=i.length?i:s,t=this._cache.all=t,t}getDecimalForValue(t){return(xs(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const i=this._offsets,s=this.getDecimalForPixel(t)/i.factor-i.end;return xs(this._table,s*this._tableRange+this._minPos,!0)}}E(cr,"id","timeseries"),E(cr,"defaults",Ui.defaults);var hv=Object.freeze({__proto__:null,CategoryScale:rr,LinearScale:or,LogarithmicScale:ar,RadialLinearScale:Si,TimeScale:Ui,TimeSeriesScale:cr});const dv=[bg,qb,jm,hv];Ni.register(...dv);/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */var Pa=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var e=window.screen;if(e)return(e.deviceXDPI||1)/(e.logicalXDPI||1)}return 1}(),Li={toTextLines:function(e){var t=[],i;for(e=[].concat(e);e.length;)i=e.pop(),typeof i=="string"?t.unshift.apply(t,i.split(`
`)):Array.isArray(i)?e.push.apply(e,i):L(e)||t.unshift(""+i);return t},textSize:function(e,t,i){var s=[].concat(t),n=s.length,r=e.font,o=0,a;for(e.font=i.string,a=0;a<n;++a)o=Math.max(e.measureText(s[a]).width,o);return e.font=r,{height:n*i.lineHeight,width:o}},bound:function(e,t,i){return Math.max(e,Math.min(t,i))},arrayDiff:function(e,t){var i=e.slice(),s=[],n,r,o,a;for(n=0,o=t.length;n<o;++n)a=t[n],r=i.indexOf(a),r===-1?s.push([a,1]):i.splice(r,1);for(n=0,o=i.length;n<o;++n)s.push([i[n],-1]);return s},rasterize:function(e){return Math.round(e*Pa)/Pa}};function Rn(e,t){var i=t.x,s=t.y;if(i===null)return{x:0,y:-1};if(s===null)return{x:1,y:0};var n=e.x-i,r=e.y-s,o=Math.sqrt(n*n+r*r);return{x:o?n/o:0,y:o?r/o:-1}}function uv(e,t,i,s,n){switch(n){case"center":i=s=0;break;case"bottom":i=0,s=1;break;case"right":i=1,s=0;break;case"left":i=-1,s=0;break;case"top":i=0,s=-1;break;case"start":i=-i,s=-s;break;case"end":break;default:n*=Math.PI/180,i=Math.cos(n),s=Math.sin(n);break}return{x:e,y:t,vx:i,vy:s}}var pv=0,Nc=1,Wc=2,Uc=4,qc=8;function _s(e,t,i){var s=pv;return e<i.left?s|=Nc:e>i.right&&(s|=Wc),t<i.top?s|=qc:t>i.bottom&&(s|=Uc),s}function fv(e,t){for(var i=e.x0,s=e.y0,n=e.x1,r=e.y1,o=_s(i,s,t),a=_s(n,r,t),l,c,h;!(!(o|a)||o&a);)l=o||a,l&qc?(c=i+(n-i)*(t.top-s)/(r-s),h=t.top):l&Uc?(c=i+(n-i)*(t.bottom-s)/(r-s),h=t.bottom):l&Wc?(h=s+(r-s)*(t.right-i)/(n-i),c=t.right):l&Nc&&(h=s+(r-s)*(t.left-i)/(n-i),c=t.left),l===o?(i=c,s=h,o=_s(i,s,t)):(n=c,r=h,a=_s(n,r,t));return{x0:i,x1:n,y0:s,y1:r}}function ws(e,t){var i=t.anchor,s=e,n,r;return t.clamp&&(s=fv(s,t.area)),i==="start"?(n=s.x0,r=s.y0):i==="end"?(n=s.x1,r=s.y1):(n=(s.x0+s.x1)/2,r=(s.y0+s.y1)/2),uv(n,r,e.vx,e.vy,t.align)}var ks={arc:function(e,t){var i=(e.startAngle+e.endAngle)/2,s=Math.cos(i),n=Math.sin(i),r=e.innerRadius,o=e.outerRadius;return ws({x0:e.x+s*r,y0:e.y+n*r,x1:e.x+s*o,y1:e.y+n*o,vx:s,vy:n},t)},point:function(e,t){var i=Rn(e,t.origin),s=i.x*e.options.radius,n=i.y*e.options.radius;return ws({x0:e.x-s,y0:e.y-n,x1:e.x+s,y1:e.y+n,vx:i.x,vy:i.y},t)},bar:function(e,t){var i=Rn(e,t.origin),s=e.x,n=e.y,r=0,o=0;return e.horizontal?(s=Math.min(e.x,e.base),r=Math.abs(e.base-e.x)):(n=Math.min(e.y,e.base),o=Math.abs(e.base-e.y)),ws({x0:s,y0:n+o,x1:s+r,y1:n,vx:i.x,vy:i.y},t)},fallback:function(e,t){var i=Rn(e,t.origin);return ws({x0:e.x,y0:e.y,x1:e.x+(e.width||0),y1:e.y+(e.height||0),vx:i.x,vy:i.y},t)}},Zt=Li.rasterize;function gv(e){var t=e.borderWidth||0,i=e.padding,s=e.size.height,n=e.size.width,r=-n/2,o=-s/2;return{frame:{x:r-i.left-t,y:o-i.top-t,w:n+i.width+t*2,h:s+i.height+t*2},text:{x:r,y:o,w:n,h:s}}}function bv(e,t){var i=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!i)return null;if(i.xCenter!==void 0&&i.yCenter!==void 0)return{x:i.xCenter,y:i.yCenter};var s=i.getBasePixel();return e.horizontal?{x:s,y:null}:{x:null,y:s}}function mv(e){return e instanceof Qe?ks.arc:e instanceof Ti?ks.point:e instanceof zi?ks.bar:ks.fallback}function vv(e,t,i,s,n,r){var o=Math.PI/2;if(r){var a=Math.min(r,n/2,s/2),l=t+a,c=i+a,h=t+s-a,d=i+n-a;e.moveTo(t,c),l<h&&c<d?(e.arc(l,c,a,-Math.PI,-o),e.arc(h,c,a,-o,0),e.arc(h,d,a,0,o),e.arc(l,d,a,o,Math.PI)):l<h?(e.moveTo(l,i),e.arc(h,c,a,-o,o),e.arc(l,c,a,o,Math.PI+o)):c<d?(e.arc(l,c,a,-Math.PI,0),e.arc(l,d,a,0,Math.PI)):e.arc(l,c,a,-Math.PI,Math.PI),e.closePath(),e.moveTo(t,i)}else e.rect(t,i,s,n)}function yv(e,t,i){var s=i.backgroundColor,n=i.borderColor,r=i.borderWidth;!s&&(!n||!r)||(e.beginPath(),vv(e,Zt(t.x)+r/2,Zt(t.y)+r/2,Zt(t.w)-r,Zt(t.h)-r,i.borderRadius),e.closePath(),s&&(e.fillStyle=s,e.fill()),n&&r&&(e.strokeStyle=n,e.lineWidth=r,e.lineJoin="miter",e.stroke()))}function xv(e,t,i){var s=i.lineHeight,n=e.w,r=e.x,o=e.y+s/2;return t==="center"?r+=n/2:(t==="end"||t==="right")&&(r+=n),{h:s,w:n,x:r,y:o}}function _v(e,t,i){var s=e.shadowBlur,n=i.stroked,r=Zt(i.x),o=Zt(i.y),a=Zt(i.w);n&&e.strokeText(t,r,o,a),i.filled&&(s&&n&&(e.shadowBlur=0),e.fillText(t,r,o,a),s&&n&&(e.shadowBlur=s))}function wv(e,t,i,s){var n=s.textAlign,r=s.color,o=!!r,a=s.font,l=t.length,c=s.textStrokeColor,h=s.textStrokeWidth,d=c&&h,u;if(!(!l||!o&&!d))for(i=xv(i,n,a),e.font=a.string,e.textAlign=n,e.textBaseline="middle",e.shadowBlur=s.textShadowBlur,e.shadowColor=s.textShadowColor,o&&(e.fillStyle=r),d&&(e.lineJoin="round",e.lineWidth=h,e.strokeStyle=c),u=0,l=t.length;u<l;++u)_v(e,t[u],{stroked:d,filled:o,w:i.w,x:i.x,y:i.y+i.h*u})}var Yc=function(e,t,i,s){var n=this;n._config=e,n._index=s,n._model=null,n._rects=null,n._ctx=t,n._el=i};jt(Yc.prototype,{_modelize:function(e,t,i,s){var n=this,r=n._index,o=st(U([i.font,{}],s,r)),a=U([i.color,X.color],s,r);return{align:U([i.align,"center"],s,r),anchor:U([i.anchor,"center"],s,r),area:s.chart.chartArea,backgroundColor:U([i.backgroundColor,null],s,r),borderColor:U([i.borderColor,null],s,r),borderRadius:U([i.borderRadius,0],s,r),borderWidth:U([i.borderWidth,0],s,r),clamp:U([i.clamp,!1],s,r),clip:U([i.clip,!1],s,r),color:a,display:e,font:o,lines:t,offset:U([i.offset,4],s,r),opacity:U([i.opacity,1],s,r),origin:bv(n._el,s),padding:ct(U([i.padding,4],s,r)),positioner:mv(n._el),rotation:U([i.rotation,0],s,r)*(Math.PI/180),size:Li.textSize(n._ctx,t,o),textAlign:U([i.textAlign,"start"],s,r),textShadowBlur:U([i.textShadowBlur,0],s,r),textShadowColor:U([i.textShadowColor,a],s,r),textStrokeColor:U([i.textStrokeColor,a],s,r),textStrokeWidth:U([i.textStrokeWidth,0],s,r)}},update:function(e){var t=this,i=null,s=null,n=t._index,r=t._config,o,a,l,c=U([r.display,!0],e,n);c&&(o=e.dataset.data[n],a=z(W(r.formatter,[o,e]),o),l=L(a)?[]:Li.toTextLines(a),l.length&&(i=t._modelize(c,l,r,e),s=gv(i))),t._model=i,t._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(e,t){var i=this,s=e.ctx,n=i._model,r=i._rects,o;this.visible()&&(s.save(),n.clip&&(o=n.area,s.beginPath(),s.rect(o.left,o.top,o.right-o.left,o.bottom-o.top),s.clip()),s.globalAlpha=Li.bound(0,n.opacity,1),s.translate(Zt(t.x),Zt(t.y)),s.rotate(n.rotation),yv(s,r.frame,n),wv(s,n.lines,r.text,n),s.restore())}});var kv=Number.MIN_SAFE_INTEGER||-9007199254740991,Sv=Number.MAX_SAFE_INTEGER||9007199254740991;function xi(e,t,i){var s=Math.cos(i),n=Math.sin(i),r=t.x,o=t.y;return{x:r+s*(e.x-r)-n*(e.y-o),y:o+n*(e.x-r)+s*(e.y-o)}}function Oa(e,t){var i=Sv,s=kv,n=t.origin,r,o,a,l,c;for(r=0;r<e.length;++r)o=e[r],a=o.x-n.x,l=o.y-n.y,c=t.vx*a+t.vy*l,i=Math.min(i,c),s=Math.max(s,c);return{min:i,max:s}}function Ss(e,t){var i=t.x-e.x,s=t.y-e.y,n=Math.sqrt(i*i+s*s);return{vx:(t.x-e.x)/n,vy:(t.y-e.y)/n,origin:e,ln:n}}var Xc=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};jt(Xc.prototype,{center:function(){var e=this._rect;return{x:e.x+e.w/2,y:e.y+e.h/2}},update:function(e,t,i){this._rotation=i,this._rect={x:t.x+e.x,y:t.y+e.y,w:t.w,h:t.h}},contains:function(e){var t=this,i=1,s=t._rect;return e=xi(e,t.center(),-t._rotation),!(e.x<s.x-i||e.y<s.y-i||e.x>s.x+s.w+i*2||e.y>s.y+s.h+i*2)},intersects:function(e){var t=this._points(),i=e._points(),s=[Ss(t[0],t[1]),Ss(t[0],t[3])],n,r,o;for(this._rotation!==e._rotation&&s.push(Ss(i[0],i[1]),Ss(i[0],i[3])),n=0;n<s.length;++n)if(r=Oa(t,s[n]),o=Oa(i,s[n]),r.max<o.min||o.max<r.min)return!1;return!0},_points:function(){var e=this,t=e._rect,i=e._rotation,s=e.center();return[xi({x:t.x,y:t.y},s,i),xi({x:t.x+t.w,y:t.y},s,i),xi({x:t.x+t.w,y:t.y+t.h},s,i),xi({x:t.x,y:t.y+t.h},s,i)]}});function Kc(e,t,i){var s=t.positioner(e,t),n=s.vx,r=s.vy;if(!n&&!r)return{x:s.x,y:s.y};var o=i.w,a=i.h,l=t.rotation,c=Math.abs(o/2*Math.cos(l))+Math.abs(a/2*Math.sin(l)),h=Math.abs(o/2*Math.sin(l))+Math.abs(a/2*Math.cos(l)),d=1/Math.max(Math.abs(n),Math.abs(r));return c*=n*d,h*=r*d,c+=t.offset*n,h+=t.offset*r,{x:s.x+c,y:s.y+h}}function Mv(e,t){var i,s,n,r;for(i=e.length-1;i>=0;--i)for(n=e[i].$layout,s=i-1;s>=0&&n._visible;--s)r=e[s].$layout,r._visible&&n._box.intersects(r._box)&&t(n,r);return e}function Cv(e){var t,i,s,n,r,o,a;for(t=0,i=e.length;t<i;++t)s=e[t],n=s.$layout,n._visible&&(a=new Proxy(s._el,{get:(l,c)=>l.getProps([c],!0)[c]}),r=s.geometry(),o=Kc(a,s.model(),r),n._box.update(o,r,s.rotation()));return Mv(e,function(l,c){var h=l._hidable,d=c._hidable;h&&d||d?c._visible=!1:h&&(l._visible=!1)})}var Ri={prepare:function(e){var t=[],i,s,n,r,o;for(i=0,n=e.length;i<n;++i)for(s=0,r=e[i].length;s<r;++s)o=e[i][s],t.push(o),o.$layout={_box:new Xc,_hidable:!1,_visible:!0,_set:i,_idx:o._index};return t.sort(function(a,l){var c=a.$layout,h=l.$layout;return c._idx===h._idx?h._set-c._set:h._idx-c._idx}),this.update(t),t},update:function(e){var t=!1,i,s,n,r,o;for(i=0,s=e.length;i<s;++i)n=e[i],r=n.model(),o=n.$layout,o._hidable=r&&r.display==="auto",o._visible=n.visible(),t|=o._hidable;t&&Cv(e)},lookup:function(e,t){var i,s;for(i=e.length-1;i>=0;--i)if(s=e[i].$layout,s&&s._visible&&s._box.contains(t))return e[i];return null},draw:function(e,t){var i,s,n,r,o,a;for(i=0,s=t.length;i<s;++i)n=t[i],r=n.$layout,r._visible&&(o=n.geometry(),a=Kc(n._el,n.model(),o),r._box.update(a,o,n.rotation()),n.draw(e,a))}},Ev=function(e){if(L(e))return null;var t=e,i,s,n;if(R(e))if(!L(e.label))t=e.label;else if(!L(e.r))t=e.r;else for(t="",i=Object.keys(e),n=0,s=i.length;n<s;++n)t+=(n!==0?", ":"")+i[n]+": "+e[i[n]];return""+t},Dv={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:Ev,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},mt="$datalabels",Gc="$default";function Av(e,t){var i=e.datalabels,s={},n=[],r,o;return i===!1?null:(i===!0&&(i={}),t=jt({},[t,i]),r=t.labels||{},o=Object.keys(r),delete t.labels,o.length?o.forEach(function(a){r[a]&&n.push(jt({},[t,r[a],{_key:a}]))}):n.push(t),s=n.reduce(function(a,l){return H(l.listeners||{},function(c,h){a[h]=a[h]||{},a[h][l._key||Gc]=c}),delete l.listeners,a},{}),{labels:n,listeners:s})}function hr(e,t,i,s){if(t){var n=i.$context,r=i.$groups,o;t[r._set]&&(o=t[r._set][r._key],o&&W(o,[n,s])===!0&&(e[mt]._dirty=!0,i.update(n)))}}function Pv(e,t,i,s,n){var r,o;!i&&!s||(i?s?i!==s&&(o=r=!0):o=!0:r=!0,o&&hr(e,t.leave,i,n),r&&hr(e,t.enter,s,n))}function Ov(e,t){var i=e[mt],s=i._listeners,n,r;if(!(!s.enter&&!s.leave)){if(t.type==="mousemove")r=Ri.lookup(i._labels,t);else if(t.type!=="mouseout")return;n=i._hovered,i._hovered=r,Pv(e,s,n,r,t)}}function Tv(e,t){var i=e[mt],s=i._listeners.click,n=s&&Ri.lookup(i._labels,t);n&&hr(e,s,n,t)}var zv={id:"datalabels",defaults:Dv,beforeInit:function(e){e[mt]={_actives:[]}},beforeUpdate:function(e){var t=e[mt];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(e,t,i){var s=t.index,n=e[mt],r=n._datasets[s]=[],o=e.isDatasetVisible(s),a=e.data.datasets[s],l=Av(a,i),c=t.meta.data||[],h=e.ctx,d,u,p,g,f,b,m,y;for(h.save(),d=0,p=c.length;d<p;++d)if(m=c[d],m[mt]=[],o&&m&&e.getDataVisibility(d)&&!m.skip)for(u=0,g=l.labels.length;u<g;++u)f=l.labels[u],b=f._key,y=new Yc(f,h,m,d),y.$groups={_set:s,_key:b||Gc},y.$context={active:!1,chart:e,dataIndex:d,dataset:a,datasetIndex:s},y.update(y.$context),m[mt].push(y),r.push(y);h.restore(),jt(n._listeners,l.listeners,{merger:function(x,_,k){_[x]=_[x]||{},_[x][t.index]=k[x],n._listened=!0}})},afterUpdate:function(e){e[mt]._labels=Ri.prepare(e[mt]._datasets)},afterDatasetsDraw:function(e){Ri.draw(e,e[mt]._labels)},beforeEvent:function(e,t){if(e[mt]._listened){var i=t.event;switch(i.type){case"mousemove":case"mouseout":Ov(e,i);break;case"click":Tv(e,i);break}}},afterEvent:function(e){var t=e[mt],i=t._actives,s=t._actives=e.getActiveElements(),n=Li.arrayDiff(i,s),r,o,a,l,c,h,d;for(r=0,o=n.length;r<o;++r)if(c=n[r],c[1])for(d=c[0].element[mt]||[],a=0,l=d.length;a<l;++a)h=d[a],h.$context.active=c[1]===1,h.update(h.$context);(t._dirty||n.length)&&(Ri.update(t._labels),e.render()),delete t._dirty}};const Lv=()=>S`
    <style>
      .chart-skeleton {
        display: flex;
        gap: 1rem;
        height: 100%;
        width: 100%;
      }

      .y-axis {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 2.25rem; /* Space for x-axis labels and gap */
      }

      .y-label {
        height: 1rem;
        border-radius: 0.25rem;
        background-color: var(--bim-ui_bg-contrast-10);
        animation: bar-loading 1s linear infinite alternate;
      }

      .main-chart-area {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .bars-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        flex-grow: 1;
        gap: 0.5rem;
        padding: 0 1rem;
        border-left: 2px solid var(--bim-ui_bg-contrast-20);
        border-bottom: 2px solid var(--bim-ui_bg-contrast-20);
        position: relative;
      }

      .grid-lines {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .grid-line {
        width: 100%;
        height: 1px;
        background-color: var(--bim-ui_bg-contrast-10);
        opacity: 0.5;
      }

      .bar {
        flex: 1;
        background-color: var(--bim-ui_bg-contrast-10);
        animation: bar-loading 1s linear infinite alternate;
        z-index: 1; /* To appear above grid lines */
      }

      .x-axis {
        display: flex;
        justify-content: space-around;
        gap: 0.5rem;
        padding: 0 1rem;
        height: 1.25rem;
        margin-top: 1rem;
      }

      .x-label {
        flex: 1;
        height: 100%;
        border-radius: 0.25rem;
        background-color: var(--bim-ui_bg-contrast-10);
        animation: bar-loading 1s linear infinite alternate;
      }

      @keyframes bar-loading {
        0% {
          background-color: var(--bim-ui_bg-contrast-10);
        }
        100% {
          background-color: var(--bim-ui_bg-contrast-20);
        }
      }
    </style>
    <div class="chart-skeleton">
      <div class="y-axis">
        <div class="y-label" style="width: 2.5rem"></div>
        <div class="y-label" style="width: 1.5rem"></div>
        <div class="y-label" style="width: 2rem"></div>
        <div class="y-label" style="width: 1rem"></div>
      </div>
      <div class="main-chart-area">
        <div class="bars-container">
          <div class="grid-lines">
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
            <div class="grid-line"></div>
          </div>
          <div class="bar" style="height: 60%"></div>
          <div class="bar" style="height: 30%"></div>
          <div class="bar" style="height: 80%"></div>
          <div class="bar" style="height: 50%"></div>
          <div class="bar" style="height: 90%"></div>
        </div>
        <div class="x-axis">
          <div class="x-label"></div>
          <div class="x-label"></div>
          <div class="x-label"></div>
          <div class="x-label"></div>
          <div class="x-label"></div>
        </div>
      </div>
    </div>
  `;var Rv=Object.defineProperty,it=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Rv(t,i,n),n};Ni.register(zv);const Qc=class extends V{constructor(){super(...arguments),this.colors=Array.from({length:20},(t,i)=>this.generateColor(i)),this.type=null,this.xBeginAtZero=!0,this.yBeginAtZero=!0,this.indexAxis="x",this.loading=!1,this.hoverBorderColor="#ffffffff",this.linePointStyle="circle",this.pointRadius=10,this.lineFill=!1,this.transparentBackground=!0,this.displayLabels=!0,this.dataLabelsColor="#ffffffff",this.smoothLine=!1,this.borderColor="#000000",this.inputData={labels:[],datasets:{}},this.colorfulBars=!1,this._errorLoading=!1,this._options={responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",display:!1},datalabels:{display:this.displayLabels,color:this.dataLabelsColor,font:{weight:"bold",family:"'Plus Jakarta Sans', sans-serif, 'Fira Code'"}},title:{text:this.label,display:!0}},elements:{line:{tension:this.smoothLine?.4:0}}},this._chartCfg={type:this.type,data:{labels:[],datasets:[]},options:this._options},this._canvas=document.createElement("canvas")}generateColor(t){return`hsl(${t*137.5%360}, 70%, 50%)`}async loadData(t=!1){if(this.inputData.labels.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const i=await this.loadFunction();return this.inputData=i,this.loading=!1,this._errorLoading=!1,this.dispatchEvent(new Event("data-loaded")),!0}catch(i){if(this.loading=!1,this.inputData.labels.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-chart-element='error-message']");return i instanceof Error&&n&&i.message.trim()!==""&&(n.textContent=i.message),this._errorLoading=!0,!1}}get data(){return this.chart.data}_getDefaultColors(t){const i=Object.keys(t.datasets).length;return Array.from({length:i},(s,n)=>this.generateColor(n))}isScatterData(t){return"x"in t&&"y"in t}parseInputData(t){const{labels:i}=t,s=this.colors.length<Object.keys(t.datasets).length?this._getDefaultColors(t):this.colors,n=Object.entries(t.datasets).map(([r,o],a)=>{const l=s[a%s.length],c=this.type==="scatter"||this.type==="bubble",h=this.type==="bar";let d;return c||h&&!this.colorfulBars?d=this.transparentBackground?this.transparentize(l):l:d=this.transparentBackground?s.map(u=>this.transparentize(u)):s,{label:r,data:Object.values(o).map(u=>{if(c){if(this.isScatterData(u)){const p={x:u.x,y:u.y};return this.type==="bubble"&&u.r!==void 0&&(p.r=u.r),p}return{x:0,y:0}}return this.isScatterData(u)?0:u.value}),backgroundColor:d,borderColor:c?void 0:this.borderColor,pointStyle:c?void 0:this.linePointStyle,pointRadius:c?void 0:this.pointRadius,fill:c?void 0:this.lineFill,hoverBorderColor:c?void 0:this.hoverBorderColor}});return{labels:i,datasets:n}}transparentize(t,i){const s=i===void 0?.5:1-i;return Sp(t).alpha(s).rgbString()}updateFromTable(t){const i=t.data,s=[],n={},r=[];let o=0;const a=`dataset_${o}`;o++;for(const l of i){const{data:c}=l;let h,d;for(const[u,p]of Object.entries(c))u==="name"&&typeof p=="string"?h=p:typeof p=="number"&&(d=p);h&&d!==void 0&&(s.push(h),r.push({value:d}))}n[a]=r,this.inputData={labels:s,datasets:n}}highlight(t){if(!this.chart)return;const i=[],s=Object.values(this.inputData.datasets);for(const n in s){const r=s[n];for(const o in r){const a=r[o];if(!t(a))continue;const l={datasetIndex:Number(n),index:Number(o)};i.push(l)}}this.chart.setActiveElements(i),this.chart.update()}filterByValue(t){if(!this.chart)return;const i=structuredClone(this.inputData);for(const s of Object.values(i.datasets))for(const n in s)t(s[n])||delete s[n];this.chart.data=this.parseInputData(i),this.chart.update()}triggerFilter(t){this.dispatchEvent(new CustomEvent("labelfilter",{detail:t}))}filterByLabel(t){if(!this.chart||!this.chart.data.labels)return;const i=this.chart.data.labels.indexOf(t);if(i===-1)return;this.chart.toggleDataVisibility(i);const s=this.chart.data.labels.filter((r,o)=>this.chart.getDataVisibility(o)),n=this.chart.data.labels.filter((r,o)=>!this.chart.getDataVisibility(o));this.chart.update(),this.triggerFilter({label:t,visible:s,hidden:n})}reset(){this.chart.data=this.parseInputData(this.inputData),this.chart.update()}updated(t){var i,s;if(this.chart){if(t.has("type")||t.has("indexAxis")||t.has("linePointStyle")||t.has("pointRadius")||t.has("lineFill")){this.chart.destroy();const n=structuredClone(this._options);this.label!==void 0&&(n.plugins||(n.plugins={}),n.plugins.title={text:this.label,display:!0}),this.indexAxis!==void 0&&(n.indexAxis=this.indexAxis),this.chart=new Ni(this._canvas,{type:this.type,data:this.parseInputData(this.inputData),options:n})}else for(const n of t.keys())switch(n){case"label":this.chart.options.plugins.title={text:this.label,display:this.label!==void 0};break;case"inputData":this.chart.data=this.parseInputData(this.inputData);break;case"smoothLine":this.chart.options.elements&&this.chart.options.elements.line&&(this.chart.options.elements.line.tension=this.smoothLine?.4:0);break;case"dataLabelsColor":this.chart.options.plugins.datalabels.color=this.dataLabelsColor;break;case"displayLabels":this.chart.options.plugins.datalabels.display=this.displayLabels;break;case"borderColor":this.chart.data.datasets.forEach(r=>{r.borderColor=this.borderColor});break;case"xStacked":this.type==="bar"&&(i=this.chart.options.scales)!=null&&i.x&&Object.assign(this.chart.options.scales.x,{stacked:this.xStacked});break;case"yStacked":this.type==="bar"&&(s=this.chart.options.scales)!=null&&s.y&&Object.assign(this.chart.options.scales.y,{stacked:this.yStacked});break;case"transparentBackground":{const r=this.colors||this._getDefaultColors(this.inputData),o=this.type==="scatter"||this.type==="bubble",a=this.type==="bar";this.chart.data.datasets.forEach((l,c)=>{const h=r[c%r.length];let d;o||a&&!this.colorfulBars?d=this.transparentBackground?this.transparentize(h):h:d=this.transparentBackground?r.map(u=>this.transparentize(u)):r,l.backgroundColor=d});break}case"colors":{const r=this.colors||this._getDefaultColors(this.inputData),o=this.type==="scatter"||this.type==="bubble",a=this.type==="bar";this.chart.data.datasets.forEach((l,c)=>{const h=r[c%r.length];let d;o||a&&!this.colorfulBars?d=this.transparentBackground?this.transparentize(h):h:d=this.transparentBackground?r.map(u=>this.transparentize(u)):r,l.backgroundColor=d});break}}this.chart.update(),this.chart.resize()}}updateChartTitle(){if(this.chart)try{const t=this.chart.options;t&&t.plugins&&t.plugins.title&&(t.plugins.title.text=this.label,this.chart.update())}catch(t){console.warn("Chart: failed to update chart title",t)}}firstUpdated(){this.chart=new Ni(this._canvas,this._chartCfg);const t=this.renderRoot.querySelector(".parent");t&&new ResizeObserver(()=>this.chart.resize()).observe(t),this._canvas.onclick=i=>{if(this.inputData.labels.length===0)return;const s=this.chart.getElementsAtEventForMode(i,"point",{intersect:!0},!1);for(const n of s){const{index:r,datasetIndex:o}=n,a=this.inputData.labels[r],l=[];for(const d of Object.values(this.inputData.datasets))l.push(d[r]);const c={datasetIndex:o,index:r,values:l,label:a,value:{value:0}},h=()=>{var d,u;return(u=(d=Object.values(this.inputData.datasets))==null?void 0:d[o])==null?void 0:u[r]};Object.defineProperty(c,"value",{get:()=>h()}),this.dispatchEvent(new CustomEvent("sectionclick",{detail:c}))}}}render(){if(this.loading)return Lv();if(this._errorLoading)return S`<slot name="error-loading"></slot>`;let t;return this.inputData.labels.length===0?(this._canvas.style.display="none",t=S`
        <slot name="missing-data">
          <bim-label>No data to display in this chart.</bim-label>
        </slot>
      `):this._canvas.style.display="block",S`
      <div class="parent">
        ${t} ${this._canvas}
        <slot name="labels"></slot>
      </div>
    `}};Qc.styles=F`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      min-width: 10rem;
      min-height: 10rem;
      padding: 1rem;
      box-sizing: border-box;
      flex: 1;
    }

    .parent {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;let Z=Qc;it([v({type:Array})],Z.prototype,"colors");it([v({type:String,reflect:!0})],Z.prototype,"type");it([v({type:Boolean,reflect:!0,attribute:"x-zero"})],Z.prototype,"xBeginAtZero");it([v({type:Boolean,reflect:!0,attribute:"y-zero"})],Z.prototype,"yBeginAtZero");it([v({type:String,reflect:!0,attribute:"index-axis"})],Z.prototype,"indexAxis");it([v({type:Boolean,reflect:!0,attribute:"x-stacked"})],Z.prototype,"xStacked");it([v({type:Boolean,reflect:!0,attribute:"y-stacked"})],Z.prototype,"yStacked");it([v({type:Boolean,reflect:!0})],Z.prototype,"loading");it([v({type:String,reflect:!1})],Z.prototype,"hoverBorderColor");it([v({type:String,reflect:!0})],Z.prototype,"label");it([v({type:String,reflect:!0,attribute:"point-style"})],Z.prototype,"linePointStyle");it([v({type:Number,reflect:!0})],Z.prototype,"pointRadius");it([v({type:String,reflect:!0})],Z.prototype,"lineFill");it([v({type:Boolean,reflect:!0,attribute:"transparent-background"})],Z.prototype,"transparentBackground");it([v({type:Boolean,reflect:!0})],Z.prototype,"displayLabels");it([v({type:String,reflect:!0,attribute:"data-label-color"})],Z.prototype,"dataLabelsColor");it([v({type:Boolean,reflect:!0})],Z.prototype,"smoothLine");it([v({type:String,reflect:!0})],Z.prototype,"borderColor");it([v({type:Object,attribute:!1})],Z.prototype,"inputData");it([v({type:Boolean,reflect:!0})],Z.prototype,"colorfulBars");it([gt()],Z.prototype,"_errorLoading");var $v=Object.defineProperty,Rr=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&$v(t,i,n),n},dt;const fn=(dt=class extends V{constructor(){super(...arguments),this.visible=!1,this._previousContainer=null,this._showToolTip=async()=>{this.timeoutId=setTimeout(async()=>{if(this.visible=!0,!dt.container.parentElement){const e=document.querySelector("[data-context-dialog]");e?e.append(dt.container):document.body.append(dt.container)}this._previousContainer=this.parentElement,dt.container.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,dt.container.append(this),await this.computePosition()},this.timeout===void 0?800:this.timeout)},this._hideToolTip=()=>{clearTimeout(this.timeoutId),this.visible=!1,this._previousContainer&&(this._previousContainer.append(this),this._previousContainer=null),dt.container.children.length===0&&dt.container.parentElement&&dt.container.remove()}}static get container(){return dt._container||(dt._container=document.createElement("div"),dt._container.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        overflow: visible;
        pointer-events: none;
        z-index: 9999;
      `),dt._container}async computePosition(){const e=this._previousContainer||this.parentElement;if(!e)return;const t=this.style.display;this.style.display="block",this.style.visibility="hidden",await new Promise(requestAnimationFrame);const{x:i,y:s}=await vl(e,this,{placement:this.placement,middleware:[nl(10),bl(),gl({padding:8}),ml()]});Object.assign(this.style,{left:`${i}px`,top:`${s}px`,display:t,visibility:""})}connectedCallback(){super.connectedCallback();const e=this.parentElement;e&&(e.addEventListener("mouseenter",this._showToolTip),e.addEventListener("mouseleave",this._hideToolTip))}disconnectedCallback(){super.disconnectedCallback();const e=this.parentElement;e&&(e.removeEventListener("mouseenter",this._showToolTip),e.removeEventListener("mouseleave",this._hideToolTip))}render(){return S`<div><slot></slot></div>`}},dt.styles=F`
    :host {
      position: absolute;
      background: var(--bim-ui_bg-contrast-50);
      border-radius: var(--bim-ui_size-4xs, 4px);
      box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
      padding: 0.75rem;
      font-size: var(--bim-ui_size-xs, 0.875rem);
      display: none;
    }
    :host([visible]) {
      display: flex;
    }
  `,dt._container=null,dt);Rr([v({type:Boolean,reflect:!0})],fn.prototype,"visible");Rr([v({type:Number,reflect:!0})],fn.prototype,"timeout");Rr([v({type:String,reflect:!0})],fn.prototype,"placement");let Iv=fn;var Bv=Object.defineProperty,Fv=Object.getOwnPropertyDescriptor,lt=(e,t,i,s)=>{for(var n=s>1?void 0:s?Fv(t,i):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Bv(t,i,n),n};const Jc=class extends V{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.shiftStep=10,this.marks=[],this.showMarks=!1,this._value=0,this.valueLabelDisplay="auto",this.disableSwap=!1,this.disabled=!1,this.vertical=!1,this.markLabelOrientation="horizontal",this._activeThumb=-1,this.onValueChange=new Event("change"),this.onChangeCommitted=new Event("changecommitted")}set value(t){this._value=Array.isArray(t)?[this._clamp(t[0]),this._clamp(t[1])].sort((i,s)=>i-s):this._clamp(t),this.requestUpdate()}get value(){return this._value}_clamp(t){return Math.min(Math.max(t,this.min),this.max)}_valueToPercent(t){return(t-this.min)*100/(this.max-this.min)}_percentToValue(t){return(this.max-this.min)*t+this.min}_roundToStep(t,i){const s=Math.round((t-this.min)/i)*i+this.min,n=(i.toString().split(".")[1]??"").length;return Number(s.toFixed(n))}_findClosest(t,i){return t.reduce((s,n,r)=>Math.abs(n-i)<Math.abs(t[s]-i)?r:s,0)}_getSnappedValue(t){let i=this._percentToValue(t);if(this.step!==null)i=this._roundToStep(i,this.step);else if(this.marks.length>0){const s=this.marks.map(n=>n.value);i=s[this._findClosest(s,i)]}return this._clamp(i)}_formatValue(t){const i=this.scale?this.scale(t):t;return typeof this.valueLabelFormat=="function"?this.valueLabelFormat(i):typeof this.valueLabelFormat=="string"?this.valueLabelFormat:String(i)}_getFraction(t,i){var s;const n=(s=this.shadowRoot)==null?void 0:s.querySelector(".track-wrapper");if(!n)return 0;const r=n.getBoundingClientRect();return this.vertical?1-(i-r.top)/r.height:(t-r.left)/r.width}_onPointerDown(t){if(this.disabled||t instanceof MouseEvent&&t.button!==0)return;const{clientX:i,clientY:s}=t instanceof TouchEvent?t.changedTouches[0]:t,n=this._getFraction(i,s),r=this._getSnappedValue(n);let o=0;if(Array.isArray(this._value)){const c=this._value.map(h=>Math.abs(h-r));o=c[0]<=c[1]?0:1}this._activeThumb=o,this._updateValue(r,o);const a=c=>{const{clientX:h,clientY:d}=c instanceof TouchEvent?c.changedTouches[0]:c,u=this._getFraction(h,d),p=this._getSnappedValue(u);this._updateValue(p,o)},l=()=>{this._activeThumb=-1,this.dispatchEvent(this.onChangeCommitted),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",l)};document.addEventListener("mousemove",a,{passive:!0}),document.addEventListener("mouseup",l),document.addEventListener("touchmove",a,{passive:!0}),document.addEventListener("touchend",l)}_updateValue(t,i){if(Array.isArray(this._value)){const s=[...this._value];s[i]=t,this.disableSwap||s.sort((n,r)=>n-r),this._value=s}else this._value=t;this.requestUpdate(),this.dispatchEvent(this.onValueChange)}_onKeyDown(t,i){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(t.key))return;t.preventDefault();const s=Array.isArray(this._value)?this._value[i]:this._value,n=this.step??1,r=this.shiftStep,o=t.shiftKey;let a=null;const l=this.marks.map(c=>c.value);if(this.step!==null){const c=o?r:n;switch(t.key){case"ArrowRight":case"ArrowUp":a=this._clamp(s+c);break;case"ArrowLeft":case"ArrowDown":a=this._clamp(s-c);break;case"PageUp":a=this._clamp(s+r);break;case"PageDown":a=this._clamp(s-r);break;case"Home":a=this.min;break;case"End":a=this.max;break}}else if(l.length>0){const c=this._findClosest(l,s);switch(t.key){case"ArrowRight":case"ArrowUp":a=l[Math.min(c+1,l.length-1)];break;case"ArrowLeft":case"ArrowDown":a=l[Math.max(c-1,0)];break;case"Home":a=l[0];break;case"End":a=l[l.length-1];break}}a!==null&&(this._updateValue(a,i),this.dispatchEvent(this.onChangeCommitted))}render(){const t=Array.isArray(this._value),i=t?this._value:[this._value],s=t?this._valueToPercent(i[0]):0,n=this._valueToPercent(i[i.length-1]),r=this.vertical?{bottom:`${s}%`,height:`${n-s}%`}:{left:`${s}%`,width:`${n-s}%`},o=this.showMarks&&this.step!==null?Array.from({length:Math.floor((this.max-this.min)/this.step)+1},(a,l)=>({value:this.min+this.step*l})):this.marks;return S`
      ${te(this.label||this.icon,()=>S`
          <bim-input .label=${this.label} .icon=${this.icon}></bim-input>
        `)}

      <div
        class="track-wrapper"
        @mousedown=${this._onPointerDown}
        @touchstart=${this._onPointerDown}
      >
        <div class="rail"></div>
        <div class="track" style=${le(r)}></div>

        ${o.map(a=>{const l=this._valueToPercent(a.value),c=t?a.value>=i[0]&&a.value<=i[1]:a.value<=i[0];return S`
            <div
              class="mark"
              ?data-active=${c}
              style=${le(this.vertical?{bottom:`${l}%`}:{left:`${l}%`})}
            ></div>
            ${te(a.label,()=>S`
                <span
                  class="mark-label"
                  style=${le(this.vertical?{bottom:`${l}%`}:{left:`${l}%`})}
                >
                  ${a.label}
                </span>
              `)}
          `})}
        ${i.map((a,l)=>{const c=this._valueToPercent(a),h=this._activeThumb===l;return S`
            <div
              class="thumb"
              ?data-active=${h||this.valueLabelDisplay==="on"}
              style=${le(this.vertical?{bottom:`${c}%`,left:"50%"}:{left:`${c}%`,top:"50%"})}
            >
              ${te(this.valueLabelDisplay!=="off",()=>S`
                  <div class="value-label">${this._formatValue(a)}</div>
                `)}
            </div>

            <input
              type="range"
              .min=${String(this.min)}
              .max=${String(this.max)}
              .step=${this.step!==null?String(this.step):"any"}
              .value=${String(a)}
              aria-label=${this.label??(t?`Thumb ${l+1}`:"Slider")}
              aria-valuemin=${this.min}
              aria-valuemax=${this.max}
              aria-valuenow=${a}
              data-index=${l}
              ?disabled=${this.disabled}
              @keydown=${d=>this._onKeyDown(d,l)}
            />
          `})}
      </div>
    `}};Jc.styles=F`
    :host {
      display: block;
      flex: 1;
      user-select: none;
    }

    /* ── Track wrapper ────────────────────────────────────────── */
    .track-wrapper {
      position: relative;
      height: var(--bim-slider_track--h, 0.25rem);
      margin: 0.75rem var(--bim-slider--mx, 0.5rem);
      display: flex;
      align-items: center;
    }

    /* ── Rail ─────────────────────────────────────────────────── */
    .rail {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--bim-slider_rail--bdrs, var(--bim-ui_size-4xs));
      background-color: var(
        --bim-slider_rail--bgc,
        var(--bim-ui_bg-contrast-20)
      );
    }

    /* ── Track (filled portion) ───────────────────────────────── */
    .track {
      position: absolute;
      height: 100%;
      border-radius: var(--bim-slider_track--bdrs, var(--bim-ui_size-4xs));
      background-color: var(--bim-slider_track--bgc, var(--bim-ui_main-base));
      pointer-events: none;
    }

    /* ── Thumb ────────────────────────────────────────────────── */
    .thumb {
      position: absolute;
      width: var(--bim-slider_thumb--sz, 0.875rem);
      height: var(--bim-slider_thumb--sz, 0.875rem);
      border-radius: 50%;
      background-color: var(--bim-slider_thumb--bgc, var(--bim-ui_main-base));
      transform: translate(-50%, -50%);
      top: 50%;
      cursor: pointer;
      transition: box-shadow 0.15s;
      z-index: 2;
    }

    .thumb:hover,
    .thumb[data-active] {
      box-shadow: 0 0 0 0.5rem
        var(
          --bim-slider_thumb-focus--shadow,
          color-mix(in srgb, var(--bim-ui_main-base) 20%, transparent)
        );
    }

    /* ── Value label (tooltip) ────────────────────────────────── */
    .value-label {
      position: absolute;
      bottom: calc(100% + 0.5rem);
      left: 50%;
      transform: translateX(-50%);
      background-color: var(
        --bim-slider_value-label--bgc,
        var(--bim-ui_bg-contrast-80)
      );
      color: var(--bim-slider_value-label--c, var(--bim-ui_bg-base));
      font-size: var(--bim-slider_value-label--fz, var(--bim-ui_size-xs));
      padding: 0.125rem 0.375rem;
      border-radius: var(
        --bim-slider_value-label--bdrs,
        var(--bim-ui_size-4xs)
      );
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s;
    }

    .thumb:hover .value-label,
    .thumb[data-active] .value-label {
      opacity: 1;
    }

    /* ── Marks ────────────────────────────────────────────────── */
    .mark {
      position: absolute;
      width: var(--bim-slider_mark--sz, 0.25rem);
      height: var(--bim-slider_mark--sz, 0.25rem);
      border-radius: 50%;
      background-color: var(
        --bim-slider_mark--bgc,
        var(--bim-ui_bg-contrast-40)
      );
      transform: translateX(-50%);
      pointer-events: none;
      z-index: 1;
    }

    .mark[data-active] {
      background-color: var(
        --bim-slider_mark-active--bgc,
        var(--bim-ui_bg-base)
      );
    }

    .mark-label {
      position: absolute;
      top: calc(100% + 0.375rem);
      transform: translateX(-50%);
      font-size: var(--bim-slider_mark-label--fz, var(--bim-ui_size-xs));
      color: var(--bim-slider_mark-label--c, var(--bim-ui_bg-contrast-60));
      white-space: nowrap;
      pointer-events: none;
      transform-origin: top left;
    }

    /* ── Mark label orientations ───────────────────────────────── */
    :host([mark-label-orientation="vertical"]) .mark-label {
      transform: rotate(90deg);
      transform-origin: top left;
    }

    :host([mark-label-orientation="diagonal"]) .mark-label {
      transform: translateX(-100%) rotate(-45deg);
      transform-origin: top right;
    }

    /* ── Hidden native input (a11y + keyboard) ────────────────── */
    input[type="range"] {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;
      margin: 0;
    }

    /* ── Disabled state ───────────────────────────────────────── */
    :host([disabled]) {
      opacity: 0.4;
      pointer-events: none;
    }

    /* ── Vertical orientation ─────────────────────────────────── */
    :host([vertical]) .track-wrapper {
      width: var(--bim-slider_track--h, 0.25rem);
      height: 100%;
      flex-direction: column;
      margin: var(--bim-slider--mx, 0.5rem) 0.75rem;
    }
  `;let rt=Jc;lt([v({type:String,reflect:!0})],rt.prototype,"name",2);lt([v({type:String,reflect:!0})],rt.prototype,"label",2);lt([v({type:String,reflect:!0})],rt.prototype,"icon",2);lt([v({type:Number,reflect:!0})],rt.prototype,"min",2);lt([v({type:Number,reflect:!0})],rt.prototype,"max",2);lt([v({type:Number,reflect:!0})],rt.prototype,"step",2);lt([v({type:Number,attribute:"shift-step",reflect:!0})],rt.prototype,"shiftStep",2);lt([v({type:Array})],rt.prototype,"marks",2);lt([v({type:Boolean,attribute:"show-marks",reflect:!0})],rt.prototype,"showMarks",2);lt([v({attribute:!1})],rt.prototype,"value",1);lt([v({type:String,attribute:"value-label-display",reflect:!0})],rt.prototype,"valueLabelDisplay",2);lt([v({attribute:!1})],rt.prototype,"valueLabelFormat",2);lt([v({attribute:!1})],rt.prototype,"scale",2);lt([v({type:Boolean,attribute:"disable-swap",reflect:!0})],rt.prototype,"disableSwap",2);lt([v({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);lt([v({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);lt([v({type:String,attribute:"mark-label-orientation",reflect:!0})],rt.prototype,"markLabelOrientation",2);lt([gt()],rt.prototype,"_activeThumb",2);var Vv=Object.defineProperty,Et=(e,t,i,s)=>{for(var n=void 0,r=e.length-1,o;r>=0;r--)(o=e[r])&&(n=o(t,i,n)||n);return n&&Vv(t,i,n),n};const Ta={A0:{width:841,height:1189},A1:{width:594,height:841},A2:{width:420,height:594},A3:{width:297,height:420},A4:{width:210,height:297}},Zc=class extends V{constructor(){super(...arguments),this.label="",this.sheetNumber="",this.size="A4",this.orientation="portrait",this.margin=10,this.debug=!1,this.ruler=!1,this.rulerLength=100,this._pxPerMm=3.7795275591,this._rulerPosition={x:20,y:20},this._rulerDragging=!1,this._rulerOrientation="horizontal",this._mediaQueryList=null,this._mediaQueryListener=null,this._rulerDragStart={x:0,y:0},this.handleRulerMouseMove=t=>{this._rulerDragging&&(this._rulerPosition={x:t.clientX-this._rulerDragStart.x,y:t.clientY-this._rulerDragStart.y},this.requestUpdate())},this.handleRulerMouseUp=()=>{this._rulerDragging=!1,this.removeRulerDragListeners()}}get widthMm(){const t=Ta[this.size];return this.orientation==="portrait"?t.width:t.height}get heightMm(){const t=Ta[this.size];return this.orientation==="portrait"?t.height:t.width}get pxPerMm(){return this._pxPerMm}get drawingAreaEl(){return this.shadowRoot.querySelector(".printable-area")}get drawingSlotEl(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".drawing-slot"))??null}mmToPx(t){return t*this._pxPerMm}mm(t){return`${this.mmToPx(t)}px`}calibrate(){var t;const i=(t=this.shadowRoot)==null?void 0:t.querySelector(".calibration-ruler");if(!i)return;i.offsetHeight;const s=i.getBoundingClientRect().width;s>0&&(this._pxPerMm=s/100)}setupDPRListener(){const t=window.devicePixelRatio||1;this._mediaQueryList=window.matchMedia(`(resolution: ${t}dppx)`),this._mediaQueryListener=()=>{this.calibrate(),this.requestUpdate(),this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),this.setupDPRListener()},this._mediaQueryList.addEventListener("change",this._mediaQueryListener)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.calibrate(),this.setupDPRListener()})}disconnectedCallback(){super.disconnectedCallback(),this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),this._mediaQueryList=null,this._mediaQueryListener=null,this.removeRulerDragListeners()}handleRulerMouseDown(t){t.preventDefault(),this._rulerDragging=!0,this._rulerDragStart={x:t.clientX-this._rulerPosition.x,y:t.clientY-this._rulerPosition.y},document.addEventListener("mousemove",this.handleRulerMouseMove),document.addEventListener("mouseup",this.handleRulerMouseUp)}removeRulerDragListeners(){document.removeEventListener("mousemove",this.handleRulerMouseMove),document.removeEventListener("mouseup",this.handleRulerMouseUp)}toggleRulerOrientation(t){t.stopPropagation(),this._rulerOrientation=this._rulerOrientation==="horizontal"?"vertical":"horizontal"}renderRulerGizmo(){if(!this.ruler)return null;const t=this.mmToPx(this.rulerLength),i=Math.floor(this.rulerLength/10),s=this._rulerOrientation==="horizontal";return S`
      <div
        class="ruler-gizmo ${this._rulerOrientation}"
        style="left: ${this._rulerPosition.x}px; top: ${this._rulerPosition.y}px;"
        @mousedown=${this.handleRulerMouseDown}
      >
        <div class="ruler-label">${this.rulerLength}mm</div>
        <button
          class="ruler-rotate-btn"
          @click=${this.toggleRulerOrientation}
          title="Toggle horizontal/vertical"
        >
          ${s?"⇅":"⇄"}
        </button>
        <div
          class="ruler-line ${this._rulerOrientation}"
          style="${s?`width: ${t}px`:`height: ${t}px`};"
        >
          ${Array.from({length:i+1},(n,r)=>{const o=r/i*100,a=r%1===0,l=r*10/10;return S`
              <div
                class="ruler-tick ${this._rulerOrientation} ${a?"cm-marker":""}"
                style="${s?`left: ${o}%`:`top: ${o}%`};"
              >
                ${a?S`<div class="ruler-cm-label ${this._rulerOrientation}">
                      ${l}
                    </div>`:null}
              </div>
            `})}
        </div>
      </div>
    `}render(){const t=this.mmToPx(this.widthMm),i=this.mmToPx(this.heightMm);return this.style.width=`${t}px`,this.style.height=`${i}px`,this.style.padding=this.mm(this.margin),S`
      <!-- Calibration ruler: hidden element used to measure mm→px -->
      <div class="calibration-ruler"></div>

      <!-- Ruler gizmo for scale validation -->
      ${this.renderRulerGizmo()}

      <!-- Printable area -->
      <div class="printable-area ${this.debug?"debug":""}">
        <!-- Title block template or drawing area slot -->
        ${this.titleBlockTemplate?this.titleBlockTemplate(this.mm.bind(this),S`<div class="drawing-slot"><slot></slot></div>`,{label:this.label,sheetNumber:this.sheetNumber}):S`<div class="drawing-slot"><slot></slot></div>`}
      </div>
    `}};Zc.styles=F`
    :host {
      display: inline-block;
      position: relative;
      overflow: visible;
      background: white;
      box-sizing: border-box;
    }

    .printable-area {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .drawing-slot {
      display: block;
      width: 100%;
      height: 100%;
      min-height: 0;
      min-width: 0;
      overflow: hidden;
    }

    .printable-area.debug {
      border: 1px dashed #999;
    }

    .calibration-ruler {
      position: absolute;
      top: -9999px;
      left: -9999px;
      width: 100mm;
      height: 100mm;
      visibility: hidden;
      pointer-events: none;
    }

    .ruler-gizmo {
      position: absolute;
      background: rgba(255, 255, 0, 0.15);
      border: 1px solid #ff9800;
      cursor: move;
      user-select: none;
      z-index: 1000;
      padding: 4px 8px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .ruler-gizmo.vertical {
      flex-direction: column;
    }

    .ruler-gizmo:active {
      background: rgba(255, 255, 0, 0.3);
      cursor: grabbing;
    }

    .ruler-line {
      position: relative;
      background: #ff9800;
      border-radius: 2px;
    }

    .ruler-line.horizontal {
      height: 3px;
    }

    .ruler-line.vertical {
      width: 3px;
    }

    .ruler-tick {
      position: absolute;
      background: #ff9800;
    }

    .ruler-tick.horizontal {
      width: 1px;
      height: 8px;
      top: -2.5px;
    }

    .ruler-tick.vertical {
      width: 8px;
      height: 1px;
      left: -2.5px;
    }

    .ruler-tick.cm-marker.horizontal {
      height: 12px;
      top: -4.5px;
      width: 2px;
    }

    .ruler-tick.cm-marker.vertical {
      width: 12px;
      left: -4.5px;
      height: 2px;
    }

    .ruler-cm-label {
      position: absolute;
      color: #ff9800;
      font-weight: bold;
      font-size: 9px;
    }

    .ruler-cm-label.horizontal {
      top: -18px;
      transform: translateX(-50%);
    }

    .ruler-cm-label.vertical {
      left: -22px;
      transform: translateY(-50%);
    }

    .ruler-label {
      color: #ff9800;
      font-weight: bold;
      white-space: nowrap;
    }

    .ruler-rotate-btn {
      background: #ff9800;
      color: white;
      border: none;
      border-radius: 3px;
      padding: 4px 6px;
      cursor: pointer;
      font-size: 10px;
      font-weight: bold;
      line-height: 1;
    }

    .ruler-rotate-btn:hover {
      background: #f57c00;
    }

    .ruler-rotate-btn:active {
      background: #ef6c00;
    }
  `;let _t=Zc;Et([v({type:String})],_t.prototype,"label");Et([v({type:String})],_t.prototype,"sheetNumber");Et([v({type:String})],_t.prototype,"size");Et([v({type:String})],_t.prototype,"orientation");Et([v({type:Number})],_t.prototype,"margin");Et([v({type:Boolean})],_t.prototype,"debug");Et([v({type:Boolean,attribute:"ruler"})],_t.prototype,"ruler");Et([v({type:Number,attribute:"ruler-length"})],_t.prototype,"rulerLength");Et([v({attribute:!1})],_t.prototype,"titleBlockTemplate");Et([gt()],_t.prototype,"_pxPerMm");Et([gt()],_t.prototype,"_rulerPosition");Et([gt()],_t.prototype,"_rulerDragging");Et([gt()],_t.prototype,"_rulerOrientation");export{$s as H,Wn as Q,qu as U,Gs as a,nu as o,St as v};
