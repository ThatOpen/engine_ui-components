var ih=Object.defineProperty;var sh=(i,t,e)=>t in i?ih(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var A=(i,t,e)=>(sh(i,typeof t!="symbol"?t+"":t,e),e);import{a as N,i as j,D as Wn,e as xe,b as C,n as Pt,c as v,A as J,d as Ti,f as nh,g as oh,r as ut,o as pe,h as ne}from"./when-D9oPOCfO.js";/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.1
*/const ll=Object.freeze({left:0,top:0,width:16,height:16}),Bs=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),is=Object.freeze({...ll,...Bs}),Un=Object.freeze({...is,body:"",hidden:!1}),rh=Object.freeze({width:null,height:null}),cl=Object.freeze({...rh,...Bs});function ah(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(i.slice(0,i.length-e.length));return isNaN(o)?0:(o=o/n,o%1===0?s(o):0)}}return t}const lh=/[\s,]+/;function ch(i,t){t.split(lh).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const hl={...cl,preserveAspectRatio:""};function dr(i){const t={...hl},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=ah(e("rotate","")),ch(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function hh(i,t){for(const e in hl)if(i[e]!==t[e])return!0;return!1}const dl=/^[a-z0-9]+(-[a-z0-9]+)*$/,ss=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!Es(c)?null:c}const o=n[0],r=o.split("-");if(r.length>1){const a={provider:s,prefix:r.shift(),name:r.join("-")};return t&&!Es(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:o};return t&&!Es(a,e)?null:a}return null},Es=(i,t)=>i?!!((t&&i.prefix===""||i.prefix)&&i.name):!1;function dh(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function o(r){if(e[r])return n[r]=[];if(!(r in n)){n[r]=null;const a=s[r]&&s[r].parent,l=a&&o(a);l&&(n[r]=[a].concat(l))}return n[r]}return Object.keys(e).concat(Object.keys(s)).forEach(o),n}function uh(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function ur(i,t){const e=uh(i,t);for(const s in Un)s in Bs?s in i&&!(s in e)&&(e[s]=Bs[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function fh(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let o={};function r(a){o=ur(s[a]||n[a],o)}return r(t),e.forEach(r),ur(i,o)}function ul(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=dh(i);for(const n in s){const o=s[n];o&&(t(n,fh(i,n,o)),e.push(n))}return e}const ph={provider:"",aliases:{},not_found:{},...ll};function Cn(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function fl(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Cn(i,ph))return null;const e=t.icons;for(const n in e){const o=e[n];if(!n||typeof o.body!="string"||!Cn(o,Un))return null}const s=t.aliases||Object.create(null);for(const n in s){const o=s[n],r=o.parent;if(!n||typeof r!="string"||!e[r]&&!s[r]||!Cn(o,Un))return null}return t}const Vs=Object.create(null);function mh(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function re(i,t){const e=Vs[i]||(Vs[i]=Object.create(null));return e[t]||(e[t]=mh(i,t))}function pl(i,t){return fl(t)?ul(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function gh(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function bh(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(Vs)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Vs[n]||{})).forEach(r=>{const a=re(n,r);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+r+":"+l))})}),e}let Ni=!1;function ml(i){return typeof i=="boolean"&&(Ni=i),Ni}function Wi(i){const t=typeof i=="string"?ss(i,!0,Ni):i;if(t){const e=re(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function gl(i,t){const e=ss(i,!0,Ni);if(!e)return!1;const s=re(e.provider,e.prefix);return t?gh(s,e.name,t):(s.missing.add(e.name),!0)}function fr(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Ni&&!t&&!i.prefix){let n=!1;return fl(i)&&(i.prefix="",ul(i,(o,r)=>{gl(o,r)&&(n=!0)})),n}const e=i.prefix;if(!Es({prefix:e,name:"a"}))return!1;const s=re(t,e);return!!pl(s,i)}function vh(i){return!!Wi(i)}function yh(i){const t=Wi(i);return t&&{...is,...t}}function bl(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function _h(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(o=>{const r=o.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])r.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))r.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),r.pending.length!==a&&(e||bl([i],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let xh=0;function wh(i,t,e){const s=xh++,n=bl.bind(null,e,s);if(!t.pending.length)return n;const o={id:s,icons:t,callback:i,abort:n};return e.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),n}function kh(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const o=n.provider,r=n.prefix,a=n.name,l=e[o]||(e[o]=Object.create(null)),c=l[r]||(l[r]=re(o,r));let h;a in c.icons?h=t.loaded:r===""||c.missing.has(a)?h=t.missing:h=t.pending;const d={provider:o,prefix:r,name:a};h.push(d)}),t}const qn=Object.create(null);function pr(i,t){qn[i]=t}function Yn(i){return qn[i]||qn[""]}function Ch(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const o=typeof n=="string"?ss(n,t,e):n;o&&s.push(o)}),s}function vo(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const rn=Object.create(null),_i=["https://api.simplesvg.com","https://api.unisvg.com"],Os=[];for(;_i.length>0;)_i.length===1||Math.random()>.5?Os.push(_i.shift()):Os.push(_i.pop());rn[""]=vo({resources:["https://api.iconify.design"].concat(Os)});function mr(i,t){const e=vo(t);return e===null?!1:(rn[i]=e,!0)}function an(i){return rn[i]}function Sh(){return Object.keys(rn)}const Mh={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ah(i,t,e,s){const n=i.resources.length,o=i.random?Math.floor(Math.random()*n):i.index;let r;if(i.random){let k=i.resources.slice(0);for(r=[];k.length>1;){const S=Math.floor(Math.random()*k.length);r.push(k[S]),k=k.slice(0,S).concat(k.slice(S+1))}r=r.concat(k)}else r=i.resources.slice(o).concat(i.resources.slice(0,o));const a=Date.now();let l="pending",c=0,h,d=null,u=[],f=[];typeof s=="function"&&f.push(s);function p(){d&&(clearTimeout(d),d=null)}function m(){l==="pending"&&(l="aborted"),p(),u.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),u=[]}function g(k,S){S&&(f=[]),typeof k=="function"&&f.push(k)}function b(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:u.length,subscribe:g,abort:m}}function y(){l="failed",f.forEach(k=>{k(void 0,h)})}function w(){u.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),u=[]}function x(k,S,M){const D=S!=="success";switch(u=u.filter(P=>P!==k),l){case"pending":break;case"failed":if(D||!i.dataAfterTimeout)return;break;default:return}if(S==="abort"){h=M,y();return}if(D){h=M,u.length||(r.length?_():y());return}if(p(),w(),!i.random){const P=i.resources.indexOf(k.resource);P!==-1&&P!==i.index&&(i.index=P)}l="completed",f.forEach(P=>{P(M)})}function _(){if(l!=="pending")return;p();const k=r.shift();if(k===void 0){if(u.length){d=setTimeout(()=>{p(),l==="pending"&&(w(),y())},i.timeout);return}y();return}const S={status:"pending",resource:k,callback:(M,D)=>{x(S,M,D)}};u.push(S),c++,d=setTimeout(_,i.rotate),e(k,t,S.callback)}return setTimeout(_),b}function vl(i){const t={...Mh,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const h=Ah(t,a,l,(d,u)=>{s(),c&&c(d,u)});return e.push(h),h}function o(a){return e.find(l=>a(l))||null}return{query:n,find:o,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function gr(){}const Sn=Object.create(null);function Dh(i){if(!Sn[i]){const t=an(i);if(!t)return;const e=vl(t),s={config:t,redundancy:e};Sn[i]=s}return Sn[i]}function yl(i,t,e){let s,n;if(typeof i=="string"){const o=Yn(i);if(!o)return e(void 0,424),gr;n=o.send;const r=Dh(i);r&&(s=r.redundancy)}else{const o=vo(i);if(o){s=vl(o);const r=i.resources?i.resources[0]:"",a=Yn(r);a&&(n=a.send)}}return!s||!n?(e(void 0,424),gr):s.query(t,n,e)().abort}function br(){}function Ph(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,_h(i)}))}function Eh(i){const t=[],e=[];return i.forEach(s=>{(s.match(dl)?t:e).push(s)}),{valid:t,invalid:e}}function xi(i,t,e){function s(){const n=i.pendingIcons;t.forEach(o=>{n&&n.delete(o),i.icons[o]||i.missing.add(o)})}if(e&&typeof e=="object")try{if(!pl(i,e).length){s();return}}catch(n){console.error(n)}s(),Ph(i)}function vr(i,t){i instanceof Promise?i.then(e=>{t(e)}).catch(()=>{t(null)}):t(i)}function Oh(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;if(delete i.iconsToLoad,!n||!n.length)return;const o=i.loadIcon;if(i.loadIcons&&(n.length>1||!o)){vr(i.loadIcons(n,s,e),h=>{xi(i,n,h)});return}if(o){n.forEach(h=>{const d=o(h,s,e);vr(d,u=>{const f=u?{prefix:s,icons:{[h]:u}}:null;xi(i,[h],f)})});return}const{valid:r,invalid:a}=Eh(n);if(a.length&&xi(i,a,null),!r.length)return;const l=s.match(dl)?Yn(e):null;if(!l){xi(i,r,null);return}l.prepare(e,s,r).forEach(h=>{yl(e,h,d=>{xi(i,h.icons,d)})})}))}const yo=(i,t)=>{const e=Ch(i,!0,ml()),s=kh(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,br)}),()=>{l=!1}}const n=Object.create(null),o=[];let r,a;return s.pending.forEach(l=>{const{provider:c,prefix:h}=l;if(h===a&&c===r)return;r=c,a=h,o.push(re(c,h));const d=n[c]||(n[c]=Object.create(null));d[h]||(d[h]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:h,name:d}=l,u=re(c,h),f=u.pendingIcons||(u.pendingIcons=new Set);f.has(d)||(f.add(d),n[c][h].push(d))}),o.forEach(l=>{const c=n[l.provider][l.prefix];c.length&&Oh(l,c)}),t?wh(t,s,o):br},Th=i=>new Promise((t,e)=>{const s=typeof i=="string"?ss(i,!0):i;if(!s){e(i);return}yo([s||i],n=>{if(n.length&&s){const o=Wi(s);if(o){t({...is,...o});return}}e(i)})});function yr(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function Lh(i,t){if(typeof i=="object")return{data:yr(i),value:i};if(typeof i!="string")return{value:i};if(i.includes("{")){const o=yr(i);if(o)return{data:o,value:i}}const e=ss(i,!0,!0);if(!e)return{value:i};const s=Wi(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=yo([e],()=>t(i,e,Wi(e)));return{value:i,name:e,loading:n}}let _l=!1;try{_l=navigator.vendor.indexOf("Apple")===0}catch{}function Rh(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(_l||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const zh=/(-?[0-9.]*[0-9]+[0-9.]*)/g,$h=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Xn(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(zh);if(s===null||!s.length)return i;const n=[];let o=s.shift(),r=$h.test(o);for(;;){if(r){const a=parseFloat(o);isNaN(a)?n.push(o):n.push(Math.ceil(a*t*e)/e)}else n.push(o);if(o=s.shift(),o===void 0)return n.join("");r=!r}}function Ih(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),o=i.indexOf("</"+t);if(n===-1||o===-1)break;const r=i.indexOf(">",o);if(r===-1)break;e+=i.slice(n+1,o).trim(),i=i.slice(0,s).trim()+i.slice(r+1)}return{defs:e,content:i}}function Fh(i,t){return i?"<defs>"+i+"</defs>"+t:t}function Bh(i,t,e){const s=Ih(i);return Fh(s.defs,t+s.content+e)}const Vh=i=>i==="unset"||i==="undefined"||i==="none";function xl(i,t){const e={...is,...i},s={...cl,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let o=e.body;[e,s].forEach(m=>{const g=[],b=m.hFlip,y=m.vFlip;let w=m.rotate;b?y?w+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):y&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=n.height/2+n.top,g.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:x=n.width/2+n.left,g.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(n.left!==n.top&&(x=n.left,n.left=n.top,n.top=x),n.width!==n.height&&(x=n.width,n.width=n.height,n.height=x)),g.length&&(o=Bh(o,'<g transform="'+g.join(" ")+'">',"</g>"))});const r=s.width,a=s.height,l=n.width,c=n.height;let h,d;r===null?(d=a===null?"1em":a==="auto"?c:a,h=Xn(d,l/c)):(h=r==="auto"?l:r,d=a===null?Xn(h,c/l):a==="auto"?c:a);const u={},f=(m,g)=>{Vh(g)||(u[m]=g.toString())};f("width",h),f("height",d);const p=[n.left,n.top,l,c];return u.viewBox=p.join(" "),{attributes:u,viewBox:p,body:o}}function _o(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function Hh(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function jh(i){return"data:image/svg+xml,"+Hh(i)}function wl(i){return'url("'+jh(i)+'")'}const Nh=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let Hs=Nh();function Wh(i){Hs=i}function Uh(){return Hs}function qh(i,t){const e=an(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(r=>{n=Math.max(n,r.length)});const o=t+".json?icons=";s=e.maxURL-n-e.path.length-o.length}return s}function Yh(i){return i===404}const Xh=(i,t,e)=>{const s=[],n=qh(i,t),o="icons";let r={type:o,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(r),r={type:o,provider:i,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),s.push(r),s};function Kh(i){if(typeof i=="string"){const t=an(i);if(t)return t.path}return"/"}const Gh=(i,t,e)=>{if(!Hs){e("abort",424);return}let s=Kh(t.provider);switch(t.type){case"icons":{const o=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;s+=o.slice(0,1)==="/"?o.slice(1):o;break}default:e("abort",400);return}let n=503;Hs(i+s).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{e(Yh(r)?"abort":"next",r)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?e("abort",o):e("next",n)});return}setTimeout(()=>{e("success",o)})}).catch(()=>{e("next",n)})},Qh={prepare:Xh,send:Gh};function Jh(i,t,e){re(e||"",t).loadIcons=i}function Zh(i,t,e){re(e||"",t).loadIcon=i}const Mn="data-style";let kl="";function td(i){kl=i}function _r(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Mn));e||(e=document.createElement("style"),e.setAttribute(Mn,Mn),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block;margin:auto}"+kl}function Cl(){pr("",Qh),ml(!0);let i;try{i=window}catch{}if(i){if(i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!fr(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const o=e[s];if(typeof o!="object"||!o||o.resources===void 0)continue;mr(s,o)||console.error(n)}catch{console.error(n)}}}}return{iconLoaded:vh,getIcon:yh,listIcons:bh,addIcon:gl,addCollection:fr,calculateSize:Xn,buildIcon:xl,iconToHTML:_o,svgToURL:wl,loadIcons:yo,loadIcon:Th,addAPIProvider:mr,setCustomIconLoader:Zh,setCustomIconsLoader:Jh,appendCustomStyle:td,_api:{getAPIConfig:an,setAPIModule:pr,sendAPIQuery:yl,setFetch:Wh,getFetch:Uh,listAPIProviders:Sh}}}const Kn={"background-color":"currentColor"},Sl={"background-color":"transparent"},xr={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},wr={"-webkit-mask":Kn,mask:Kn,background:Sl};for(const i in wr){const t=wr[i];for(const e in xr)t[i+"-"+e]=xr[e]}function kr(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function ed(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const o=i.attributes,r=_o(n,{...o,width:t.width+"",height:t.height+""}),a=wl(r),l=s.style,c={"--svg":a,width:kr(o.width),height:kr(o.height),...e?Kn:Sl};for(const h in c)l.setProperty(h,c[h]);return s}let Li;function id(){try{Li=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Li=null}}function sd(i){return Li===void 0&&id(),Li?Li.createHTML(i):i}function nd(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=_o(i.body,e);return t.innerHTML=sd(n),t.firstChild}function Gn(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Cr(i,t){const e=t.icon.data,s=t.customisations,n=xl(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const o=t.renderedMode;let r;switch(o){case"svg":r=nd(n);break;default:r=ed(n,{...is,...e},o==="mask")}const a=Gn(i);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):i.replaceChild(r,a):i.appendChild(r)}function Sr(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function od(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","noobserver","width","height","rotate","flip"],o=class extends e{constructor(){super();A(this,"_shadowRoot");A(this,"_initialised",!1);A(this,"_state");A(this,"_checkQueued",!1);A(this,"_connected",!1);A(this,"_observer",null);A(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=this.hasAttribute("inline");_r(l,c),this._state=Sr({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=this.hasAttribute("inline"),h=this._state;c!==h.inline&&(h.inline=c,_r(this._shadowRoot,c));break}case"noobserver":{this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return this.hasAttribute("inline")}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Cr(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const h=this.getAttribute("mode"),d=dr(this);(l.attrMode!==h||hh(l.customisations,d)||!Gn(this._shadowRoot))&&this._renderIcon(l.icon,d,h)}_iconChanged(l){const c=Lh(l,(h,d,u)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==h)return;const p={value:h,name:d,data:u};p.data?this._gotIconData(p):f.icon=p});c.data?this._gotIconData(c):this._state=Sr(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=Gn(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,dr(this),this.getAttribute("mode"))}_renderIcon(l,c,h){const d=Rh(l.data.body,h),u=this._state.inline;Cr(this._shadowRoot,this._state={rendered:!0,icon:l,inline:u,customisations:c,attrMode:h,renderedMode:d})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(l=>{const c=l.some(h=>h.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in o.prototype||Object.defineProperty(o.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=Cl();for(const a in r)o[a]=o.prototype[a]=r[a];return t.define(i,o),o}const rd=od()||Cl(),{iconLoaded:Wv,getIcon:Uv,listIcons:qv,addIcon:Yv,addCollection:ad,calculateSize:Xv,buildIcon:Kv,iconToHTML:Gv,svgToURL:Qv,loadIcons:ld,loadIcon:Jv,setCustomIconLoader:Zv,setCustomIconsLoader:ty,addAPIProvider:ey,_api:iy}=rd,cd=N`
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
`,hd=N`
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
`,Ae={scrollbar:cd,globalStyles:hd},$=class ${static set config(t){this._config={...$._config,...t}}static get config(){return $._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Ae.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static preloadIcons(t,e=!1){ld(t,(s,n,o)=>{e&&(console.log("Icons loaded:",s),n.length&&console.warn("Icons missing:",n),o.length&&console.info("Icons pending:",o))})}static addIconsCollection(t,e){ad({prefix:(e==null?void 0:e.prefix)??"bim",icons:t,width:24,height:24})}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){$.init()}static init(t="",e=!0){$.addGlobalStyles(),$.defineCustomElement("bim-button",md),$.defineCustomElement("bim-checkbox",Ht),$.defineCustomElement("bim-color-input",jt),$.defineCustomElement("bim-context-menu",lu),$.defineCustomElement("bim-dropdown",yt),$.defineCustomElement("bim-grid",We),$.defineCustomElement("bim-icon",qi),$.defineCustomElement("bim-input",Ue),$.defineCustomElement("bim-label",Qe),$.defineCustomElement("bim-number-input",bt),$.defineCustomElement("bim-option",Zt),$.defineCustomElement("bim-panel",le),$.defineCustomElement("bim-panel-section",Ce),$.defineCustomElement("bim-selector",Ut),$.defineCustomElement("bim-table",si),$.defineCustomElement("bim-tabs",Ot),$.defineCustomElement("bim-tab",pt),$.defineCustomElement("bim-table-cell",qs),$.defineCustomElement("bim-table-children",to),$.defineCustomElement("bim-table-group",Ys),$.defineCustomElement("bim-table-row",qe),$.defineCustomElement("bim-text-input",Yu),$.defineCustomElement("bim-toolbar",Yi),$.defineCustomElement("bim-toolbar-group",di),$.defineCustomElement("bim-toolbar-section",ce),$.defineCustomElement("bim-viewport",Xs),$.defineCustomElement("bim-chart-legend",Ks),$.defineCustomElement("bim-chart",Z),$.defineCustomElement("bim-tooltip",Fv),$.defineCustomElement("bim-slider",it),$.defineCustomElement("bim-paper-space",vt),e&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}static animateOnLoad(t=""){const e=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,s=[];function n(o,r=document,a=new Set){const l=[];return Array.from(r.querySelectorAll(o)).forEach(d=>{a.has(d)||(a.add(d),l.push(d))}),Array.from(r.querySelectorAll("*")).filter(d=>d.shadowRoot).forEach(d=>{a.has(d)||(a.add(d),l.push(...n(o,d.shadowRoot,a)))}),l}requestAnimationFrame(()=>{n(t||e).forEach(a=>{const l=a;let c="auto";c=window.getComputedStyle(l).getPropertyValue("transition"),l.style.setProperty("opacity","0"),l.style.setProperty("transition","none"),requestAnimationFrame(()=>{l.style.setProperty("transition",c)}),s.push(l)});const r=()=>{s.forEach(a=>{const l=a,c=(l.getBoundingClientRect().x+l.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),h=window.getComputedStyle(l).getPropertyValue("transform"),d=400,u=200+c*1e3;window.matchMedia("(prefers-reduced-motion: reduce)").matches||(l.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:d,easing:"ease-in-out",delay:u}),setTimeout(()=>{l.style.removeProperty("opacity"),h!=="none"?l.style.setProperty("transform",h):l.style.removeProperty("transform")},u+d))})};document.readyState==="complete"?r():window.addEventListener("load",r)})}static toggleTheme(t=!0){const e=document.querySelector("html");if(!e)return;const s=()=>{e.classList.contains("bim-ui-dark")?e.classList.replace("bim-ui-dark","bim-ui-light"):e.classList.contains("bim-ui-light")?e.classList.replace("bim-ui-light","bim-ui-dark"):e.classList.add("bim-ui-light")};if(t){const o=document.createElement("div");o.classList.add("theme-transition-overlay");const r=document.createElement("div");o.appendChild(r),r.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(o),o.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),r.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{s()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(l=>{document.body.removeChild(l)})},1e3)}else s()}};$._config={sectionLabelOnVerticalToolbar:!1,internalComponentNameAttribute:"bim-element-name"};let ai=$;class Qn extends j{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][o];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Wn(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const o=t,r=c=>(n={...n,...c},Wn(o(n,r),s),n);r(e);const a=s.firstElementChild,l={getElement:c=>a.querySelector(`[data-${ai.config.internalComponentNameAttribute}="${c}"]`),getCurrentState:()=>n,dispose:()=>{a.remove(),n={},l.updates={}},updates:{}};return[a,r,l]}}const js=(i,t={},e=!0)=>{let s={};for(const n of i.children){const o=n,r=o.getAttribute("name")||o.getAttribute("label"),a=r?t[r]:void 0;if(r){if("value"in o&&typeof o.value<"u"&&o.value!==null){const l=o.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;s[r]=a?a(o.value):o.value}else if(e){const l=js(o,t);if(Object.keys(l).length===0)continue;s[r]=a?a(l):l}}else e&&(s={...s,...js(o,t)})}return s},Ns=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,dd=[">=","<=","=",">","<","?","/","#"];function Mr(i){const t=dd.find(a=>i.split(a).length===2),e=i.split(t).map(a=>a.trim()),[s,n]=e,o=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):Ns(n);return{key:s,condition:t,value:o}}const Jn=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),o=s.startsWith("(")&&s.endsWith(")");if(n){const r=Mr(s);t.push(r)}if(o){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(h=>h.trim()).map((h,d)=>{const u=Mr(h);return d>0&&(u.operator="&"),u})};t.push(c)}}return t}catch{return null}},Ar=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};let Te=class{constructor(){this.enabled=!0,this.trigger=t=>{if(!this.enabled)return;const e=this.handlers.slice(0);for(const s of e)s(t)},this.handlers=[]}add(t){this.handlers.push(t)}remove(t){this.handlers=this.handlers.filter(e=>e!==t)}reset(){this.handlers.length=0}};class ud extends Set{constructor(t){super(t),this.onUpdated=new Te,this.onItemAdded=new Te,this.onBeforeDelete=new Te,this.onItemDeleted=new Te,this.onCleared=new Te,this.guard=()=>!0,this.deleteGuard=()=>!0}set eventsEnabled(t){this.onUpdated.enabled=t,this.onItemAdded.enabled=t,this.onItemDeleted.enabled=t,this.onBeforeDelete.enabled=t,this.onCleared.enabled=t}clear(){for(const t of this)this.onBeforeDelete.trigger(t);super.clear(),this.onCleared.trigger(),this.onUpdated.trigger()}add(...t){for(const e of t)this.has(e)||!(this.guard??(()=>!0))(e)||(super.add(e),this.onItemAdded||(this.onItemAdded=new Te),this.onItemAdded.trigger(e));return this.onUpdated||(this.onUpdated=new Te),this.onUpdated.trigger(),this}delete(t){if(!this.has(t)||!this.deleteGuard(t))return!1;this.onBeforeDelete.trigger(t);const s=super.delete(t);return s&&(this.onItemDeleted.trigger(t),this.onUpdated.trigger()),s}deleteIf(t){for(const e of this)t(e)&&this.delete(e)}getIndex(t){let e=0;for(const s of this){if(s===t)return e;e++}return-1}dispose(){this.clear(),this.onItemAdded.reset(),this.onItemDeleted.reset(),this.onCleared.reset(),this.onBeforeDelete.reset(),this.onUpdated.reset()}}var fd=Object.defineProperty,pd=Object.getOwnPropertyDescriptor,Yt=(i,t,e,s)=>{for(var n=s>1?void 0:s?pd(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&fd(t,e,n),n},Rt;const It=(Rt=class extends j{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this._loading=!1,this._menuDialog=xe(),this._movedChildren=[],this._onParentClick=t=>{t.stopPropagation(),!this.disabled&&!this._loading&&this.dispatchEvent(new Event("click"))},this._onHostClick=()=>{!this.disabled&&!this._loading&&this._hasContextMenu()&&this._openMenu()},this._onKeyDown=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this._onParentClick(t))},this._onDialogClick=t=>{t.stopPropagation(),t.target===this._menuDialog.value&&this._closeMenu()},this._onDialogCancel=t=>{t.preventDefault(),this._closeMenu()},this.hasAttribute("role")||this.setAttribute("role","button"),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0")}get tooltipTime(){return this._tooltipTime}set tooltipTime(t){const e=this._tooltipTime;this._tooltipTime=t,t!==void 0&&console.warn('[bim-button] tooltipTime is deprecated. Use <bim-tooltip timeout="..."> inside the button instead.'),this.requestUpdate("tooltipTime",e)}get tooltipTitle(){return this._tooltipTitle}set tooltipTitle(t){const e=this._tooltipTitle;this._tooltipTitle=t,t!==void 0&&console.warn("[bim-button] tooltipTitle is deprecated. Use <bim-tooltip> inside the button instead."),this.requestUpdate("tooltipTitle",e)}get tooltipText(){return this._tooltipText}set tooltipText(t){const e=this._tooltipText;this._tooltipText=t,t!==void 0&&console.warn("[bim-button] tooltipText is deprecated. Use <bim-tooltip> inside the button instead."),this.requestUpdate("tooltipText",e)}set loading(t){const e=this._loading;this._loading=t,this.requestUpdate("loading",e)}get loading(){return this._loading}_hasContextMenu(){return!!(this.querySelector("bim-context-menu")||this.contextMenuTemplate)}_updateMenuPosition(){const t=this._menuDialog.value;if(!t)return;const e=10,s=5,n=window.innerWidth,o=window.innerHeight,r=this.getBoundingClientRect(),a=t.getBoundingClientRect();let l=r.right+e,c=r.top;l+a.width>n-s&&(l=r.left-a.width-e),c+a.height>o-s&&(c=o-a.height-s),c=Math.max(s,c),t.style.left=`${l}px`,t.style.top=`${c}px`}_openMenu(){const t=this._menuDialog.value;if(!t)return;for(;t.firstChild;)t.removeChild(t.firstChild);this._movedChildren=[];const e=this.querySelector("bim-context-menu");if(this.contextMenuTemplate){const n=document.createElement("div");Wn(this.contextMenuTemplate(),n);const o=n.querySelector("bim-context-menu")??n;for(const r of[...o.children])t.append(r)}else if(e){this._movedChildren=[...e.children];for(const n of this._movedChildren)t.append(n)}if(!t.children.length)return;if(this.getAttribute("data-context-group")){this.closeNestedContexts();const n=ai.newRandomId();for(const o of t.children)o.tagName==="BIM-BUTTON"&&o.setAttribute("data-context-group",n)}Rt._openMenuButtons.add(this),t.showModal(),this._updateMenuPosition()}_closeMenu(){const t=this._menuDialog.value;if(!t||!t.open)return;t.close(),Rt._openMenuButtons.delete(this),this.dispatchEvent(new Event("menuclose",{bubbles:!0,composed:!0}));const e=this.querySelector("bim-context-menu");if(e&&this._movedChildren.length)for(const s of this._movedChildren)e.append(s);for(this._movedChildren=[];t.firstChild;)t.removeChild(t.firstChild);for(const s of[...t.children])s.tagName==="BIM-BUTTON"&&s.removeAttribute("data-context-group");this.dispatchEvent(new Event("hidden"))}closeNestedContexts(){const t=this.getAttribute("data-context-group");if(t)for(const e of Rt._openMenuButtons)e!==this&&e.getAttribute("data-context-group")===t&&(e._closeMenu(),e.removeAttribute("data-context-group"))}click(){!this.disabled&&!this._loading&&this.dispatchEvent(new Event("click"))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._onHostClick),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._onHostClick),this.removeEventListener("keydown",this._onKeyDown),this._closeMenu()}updated(t){super.updated(t),(t.has("disabled")||t.has("loading"))&&(this.disabled||this._loading?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),(t.has("label")||t.has("labelHidden")||t.has("icon")||t.has("tooltipTitle"))&&(this.labelHidden&&this.label?this.setAttribute("aria-label",this.label):!this.label&&this.icon&&this.setAttribute("aria-label",this._tooltipTitle??this.icon))}render(){const t=this._hasContextMenu(),e=this._loading?"eos-icons:loading":this.icon;let s=C`${this.label}`;return t&&this.label&&(s=C`
        <div style="display: flex; align-items: center;">
          ${this.label}
          ${Rt._chevron}
        </div>
      `),C`
      <div class="parent" @click=${this._onParentClick}>
        ${this.label||e?C`
              <div class="button">
                <bim-label
                  .icon=${e}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${s}</bim-label
                >
              </div>
            `:null}
      </div>
      <slot></slot>
      <dialog
        ${Pt(this._menuDialog)}
        @click=${this._onDialogClick}
        @cancel=${this._onDialogCancel}
      ></dialog>
    `}},Rt._chevron=C`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="1.125rem"
    viewBox="0 0 24 24"
    width="1.125rem"
    class="chevron"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </svg>`,Rt._openMenuButtons=new Set,Rt.styles=N`
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
  `,Rt);Yt([v({type:String,reflect:!0})],It.prototype,"label",2);Yt([v({type:Boolean,attribute:"label-hidden",reflect:!0})],It.prototype,"labelHidden",2);Yt([v({type:Boolean,reflect:!0})],It.prototype,"active",2);Yt([v({type:Boolean,reflect:!0,attribute:"disabled"})],It.prototype,"disabled",2);Yt([v({type:String,reflect:!0})],It.prototype,"icon",2);Yt([v({type:Boolean,reflect:!0})],It.prototype,"vertical",2);Yt([v({type:Number,attribute:"tooltip-time",reflect:!0})],It.prototype,"tooltipTime",1);Yt([v({type:String,attribute:"tooltip-title",reflect:!0})],It.prototype,"tooltipTitle",1);Yt([v({type:String,attribute:"tooltip-text",reflect:!0})],It.prototype,"tooltipText",1);Yt([v({type:Boolean,reflect:!0})],It.prototype,"loading",1);let md=It;var gd=Object.defineProperty,Ke=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&gd(t,e,n),n};const bd=C`<svg part="checkmark" viewBox="0 0 21 21"><polyline points="5 10.75 8.5 14.25 16 6"></polyline></svg>`,vd=C`<svg part="checkmark" viewBox="0 0 21 21"><line x1="5" y1="10.5" x2="16" y2="10.5"></line></svg>`,on=class on extends j{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}set value(t){this.checked=t}updated(t){super.updated(t),t.has("disabled")&&this.setAttribute("aria-disabled",String(this.disabled))}onChange(t){t.stopPropagation();const e=t.target;e&&(this.checked=e.checked,this.indeterminate=!1,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})))}render(){return C`
      <label class="parent-label">
        ${this.icon||this.label?C`<bim-label .icon="${this.icon}">${this.label??""}</bim-label>`:J}
        <div class="input-container">
          <input
            part="input"
            type="checkbox"
            name=${Ti(this.name)}
            aria-label=${this.label||this.name||"Checkbox Input"}
            @change="${this.onChange}"
            .checked="${this.checked}"
            .indeterminate="${this.indeterminate}"
            .disabled="${this.disabled}"
          />
          ${this.indeterminate?vd:bd}
        </div>
      </label>
    `}};on.shadowRootOptions={...j.shadowRootOptions,delegatesFocus:!0},on.styles=N`
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
  `;let Ht=on;Ke([v({type:String,reflect:!0})],Ht.prototype,"icon");Ke([v({type:String})],Ht.prototype,"name");Ke([v({type:String,reflect:!0})],Ht.prototype,"label");Ke([v({type:Boolean})],Ht.prototype,"checked");Ke([v({type:Boolean})],Ht.prototype,"indeterminate");Ke([v({type:Boolean,reflect:!0})],Ht.prototype,"disabled");Ke([v({type:Boolean,reflect:!0})],Ht.prototype,"inverted");var yd=Object.defineProperty,_d=Object.getOwnPropertyDescriptor,Tt=(i,t,e,s)=>{for(var n=s>1?void 0:s?_d(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&yd(t,e,n),n};const jo=class jo extends j{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=xe(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const o=l=>{var m;n=!0;const{clientX:c}=l,h=this.step??1,d=((m=h.toString().split(".")[1])==null?void 0:m.length)||0,u=1/(this.sensitivity??1),f=(c-e)/u;if(Math.floor(Math.abs(f))!==Math.abs(f))return;const p=s+f*h;this.setValue(p.toFixed(d))},r=()=>{this.slider=!0,this.removeEventListener("blur",r)},a=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",r),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=C`
      ${this.pref||this.icon?C`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Pt(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?C`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),o=C`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref?C`<bim-label style="z-index: 1; margin-right: 0.125rem"
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?C`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,r=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return C`
      <bim-input
        title=${r}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:t}
      </bim-input>
    `}};jo.styles=N`
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
  `;let bt=jo;Tt([v({type:String,reflect:!0})],bt.prototype,"name",2);Tt([v({type:String,reflect:!0})],bt.prototype,"icon",2);Tt([v({type:String,reflect:!0})],bt.prototype,"label",2);Tt([v({type:String,reflect:!0})],bt.prototype,"pref",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"min",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"value",1);Tt([v({type:Number,reflect:!0})],bt.prototype,"step",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"sensitivity",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"max",2);Tt([v({type:String,reflect:!0})],bt.prototype,"suffix",2);Tt([v({type:Boolean,reflect:!0})],bt.prototype,"vertical",2);Tt([v({type:Boolean,reflect:!0})],bt.prototype,"slider",2);var xd=Object.defineProperty,Ge=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&xd(t,e,n),n};const No=class No extends j{constructor(){super(...arguments),this.vertical=!1,this.color="#ffffff",this.disabled=!1,this._colorInput=xe(),this._textInput=xe(),this.onValueChange=new Event("input")}set value(t){const{color:e,opacity:s}=t;this.color=e,s!==void 0&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity!==void 0&&(t.opacity=this.opacity),t}updated(t){super.updated(t),t.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled"))}_onColorInput(t){t.stopPropagation();const e=this._colorInput.value;e&&(this.color=e.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))}_onTextInput(t){t.stopPropagation();const e=this._textInput.value;if(!e)return;const s="#"+e.value.replace(/[^a-fA-F0-9]/g,"").slice(0,6);e.value=s,s.length===7&&(this.color=s,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))}_onOpacityInput(t){t.target instanceof bt&&(this.opacity=Math.max(0,Math.min(100,t.target.value)),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))}focus(){var t;(t=this._textInput.value)==null||t.focus()}render(){return C`
      <div class="parent">
        ${this.label||this.icon?C`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:J}
        <div
          class="input"
          role="group"
          aria-label=${this.label||this.name||"Color input"}
          style="--_swatch-c: ${this.color}"
        >
          <input
            ${Pt(this._colorInput)}
            type="color"
            .value=${this.color}
            ?disabled=${this.disabled}
            aria-hidden="true"
            tabindex="-1"
            @input=${this._onColorInput}
          />
          <button
            class="sample"
            type="button"
            aria-label="Open color picker"
            ?disabled=${this.disabled}
            @click=${()=>{var t;return(t=this._colorInput.value)==null?void 0:t.click()}}
          ></button>
          <input
            ${Pt(this._textInput)}
            type="text"
            .value=${this.color}
            ?disabled=${this.disabled}
            aria-label=${this.label||this.name||"Hex color value (e.g. #FF0000)"}
            @input=${this._onTextInput}
          />
          ${this.opacity!==void 0?C`<bim-number-input
                label="Opacity"
                label-hidden
                suffix="%"
                min="0"
                max="100"
                slider
                .value=${this.opacity}
                @change=${this._onOpacityInput}
              ></bim-number-input>`:J}
        </div>
      </div>
    `}};No.styles=N`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      user-select: none;
    }

    :host(:not([vertical])) .parent {
      justify-content: space-between;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    bim-label {
      margin-top: var(--bim-input--label-mt, 0);
    }

    .input {
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: 25px;
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: 0 7px;
      background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-20));
      border: var(--bim-input--olw, 2px) solid var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-2xs));
      transition: border-color 0.15s;
    }

    :host(:not([vertical])) .input {
      flex: 1;
    }

    :host(:not([vertical])[label]) .input,
    :host(:not([vertical])[icon]) .input {
      max-width: var(--bim-input--maxw, fit-content);
    }

    :host(:focus-within) .input {
      border-color: var(--bim-ui_bg-contrast-40);
    }

    input[type="color"] {
      position: absolute;
      visibility: hidden;
      width: 0;
      height: 0;
    }

    .sample {
      width: var(--bim-color-input--swatch-sz, 1rem);
      height: var(--bim-color-input--swatch-sz, 1rem);
      border-radius: var(--bim-color-input--swatch-bdrs, var(--bim-ui_size-4xs));
      border: none;
      padding: 0;
      cursor: pointer;
      flex-shrink: 0;
      background-color: var(--_swatch-c);
    }

    :host([disabled]) .sample {
      cursor: default;
      pointer-events: none;
    }

    .sample:focus-visible {
      outline: 2px solid var(--bim-ui_accent-base);
      outline-offset: 1px;
    }

    input[type="text"] {
      height: 100%;
      flex: 1;
      min-width: 0;
      text-transform: uppercase;
      font-size: var(--bim-ui_size-sm);
      font-family: inherit;
      background-color: transparent;
      padding: 0;
      outline: none;
      border: none;
      color: var(--bim-color-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host([disabled]) input[type="text"] {
      color: var(--bim-ui_bg-contrast-60);
    }

    bim-number-input {
      flex-shrink: 0;
    }

    @media (prefers-reduced-motion: reduce) {
      .input {
        transition: none;
      }
    }
  `;let jt=No;Ge([v({type:String,reflect:!0})],jt.prototype,"name");Ge([v({type:String,reflect:!0})],jt.prototype,"label");Ge([v({type:String,reflect:!0})],jt.prototype,"icon");Ge([v({type:Boolean,reflect:!0})],jt.prototype,"vertical");Ge([v({type:Number})],jt.prototype,"opacity");Ge([v({type:String})],jt.prototype,"color");Ge([v({type:Boolean,reflect:!0})],jt.prototype,"disabled");const li=Math.min,oe=Math.max,Ws=Math.round,we=i=>({x:i,y:i}),wd={left:"right",right:"left",bottom:"top",top:"bottom"};function Dr(i,t,e){return oe(i,li(t,e))}function ns(i,t){return typeof i=="function"?i(t):i}function ae(i){return i.split("-")[0]}function ln(i){return i.split("-")[1]}function Ml(i){return i==="x"?"y":"x"}function Al(i){return i==="y"?"height":"width"}function Jt(i){const t=i[0];return t==="t"||t==="b"?"y":"x"}function Dl(i){return Ml(Jt(i))}function kd(i,t,e){e===void 0&&(e=!1);const s=ln(i),n=Dl(i),o=Al(n);let r=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=Us(r)),[r,Us(r)]}function Cd(i){const t=Us(i);return[Zn(i),t,Zn(t)]}function Zn(i){return i.includes("start")?i.replace("start","end"):i.replace("end","start")}const Pr=["left","right"],Er=["right","left"],Sd=["top","bottom"],Md=["bottom","top"];function Ad(i,t,e){switch(i){case"top":case"bottom":return e?t?Er:Pr:t?Pr:Er;case"left":case"right":return t?Sd:Md;default:return[]}}function Dd(i,t,e,s){const n=ln(i);let o=Ad(ae(i),e==="start",s);return n&&(o=o.map(r=>r+"-"+n),t&&(o=o.concat(o.map(Zn)))),o}function Us(i){const t=ae(i);return wd[t]+i.slice(t.length)}function Pd(i){return{top:0,right:0,bottom:0,left:0,...i}}function Pl(i){return typeof i!="number"?Pd(i):{top:i,right:i,bottom:i,left:i}}function ci(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function Or(i,t,e){let{reference:s,floating:n}=i;const o=Jt(t),r=Dl(t),a=Al(r),l=ae(t),c=o==="y",h=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,u=s[a]/2-n[a]/2;let f;switch(l){case"top":f={x:h,y:s.y-n.height};break;case"bottom":f={x:h,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:d};break;case"left":f={x:s.x-n.width,y:d};break;default:f={x:s.x,y:s.y}}switch(ln(t)){case"start":f[r]-=u*(e&&c?-1:1);break;case"end":f[r]+=u*(e&&c?-1:1);break}return f}async function Ed(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:o,rects:r,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:f=0}=ns(t,i),p=Pl(f),g=a[u?d==="floating"?"reference":"floating":d],b=ci(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(g)))==null||e?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),y=d==="floating"?{x:s,y:n,width:r.floating.width,height:r.floating.height}:r.reference,w=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),x=await(o.isElement==null?void 0:o.isElement(w))?await(o.getScale==null?void 0:o.getScale(w))||{x:1,y:1}:{x:1,y:1},_=ci(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:w,strategy:l}):y);return{top:(b.top-_.top+p.top)/x.y,bottom:(_.bottom-b.bottom+p.bottom)/x.y,left:(b.left-_.left+p.left)/x.x,right:(_.right-b.right+p.right)/x.x}}const Od=50,Td=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:o=[],platform:r}=e,a=r.detectOverflow?r:{...r,detectOverflow:Ed},l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:i,floating:t,strategy:n}),{x:h,y:d}=Or(c,s,l),u=s,f=0;const p={};for(let m=0;m<o.length;m++){const g=o[m];if(!g)continue;const{name:b,fn:y}=g,{x:w,y:x,data:_,reset:k}=await y({x:h,y:d,initialPlacement:s,placement:u,strategy:n,middlewareData:p,rects:c,platform:a,elements:{reference:i,floating:t}});h=w??h,d=x??d,p[b]={...p[b],..._},k&&f<Od&&(f++,typeof k=="object"&&(k.placement&&(u=k.placement),k.rects&&(c=k.rects===!0?await r.getElementRects({reference:i,floating:t,strategy:n}):k.rects),{x:h,y:d}=Or(c,u,l)),m=-1)}return{x:h,y:d,placement:u,strategy:n,middlewareData:p}},Ld=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=ns(i,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const b=ae(n),y=Jt(a),w=ae(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),_=u||(w||!m?[Us(a)]:Cd(a)),k=p!=="none";!u&&k&&_.push(...Dd(a,m,p,x));const S=[a,..._],M=await l.detectOverflow(t,g),D=[];let P=((s=o.flip)==null?void 0:s.overflows)||[];if(h&&D.push(M[b]),d){const B=kd(n,r,x);D.push(M[B[0]],M[B[1]])}if(P=[...P,{placement:n,overflows:D}],!D.every(B=>B<=0)){var E,O;const B=(((E=o.flip)==null?void 0:E.index)||0)+1,z=S[B];if(z&&(!(d==="alignment"?y!==Jt(z):!1)||P.every(q=>Jt(q.placement)===y?q.overflows[0]>0:!0)))return{data:{index:B,overflows:P},reset:{placement:z}};let R=(O=P.filter(V=>V.overflows[0]<=0).sort((V,q)=>V.overflows[1]-q.overflows[1])[0])==null?void 0:O.placement;if(!R)switch(f){case"bestFit":{var I;const V=(I=P.filter(q=>{if(k){const U=Jt(q.placement);return U===y||U==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(U=>U>0).reduce((U,ue)=>U+ue,0)]).sort((q,U)=>q[1]-U[1])[0])==null?void 0:I[0];V&&(R=V);break}case"initialPlacement":R=a;break}if(n!==R)return{reset:{placement:R}}}return{}}}};function El(i){const t=li(...i.map(o=>o.left)),e=li(...i.map(o=>o.top)),s=oe(...i.map(o=>o.right)),n=oe(...i.map(o=>o.bottom));return{x:t,y:e,width:s-t,height:n-e}}function Rd(i){const t=i.slice().sort((n,o)=>n.y-o.y),e=[];let s=null;for(let n=0;n<t.length;n++){const o=t[n];!s||o.y-s.y>s.height/2?e.push([o]):e[e.length-1].push(o),s=o}return e.map(n=>ci(El(n)))}const zd=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:o,strategy:r}=t,{padding:a=2,x:l,y:c}=ns(i,t),h=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(s.reference))||[]),d=Rd(h),u=ci(El(h)),f=Pl(a);function p(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(g=>l>g.left-f.left&&l<g.right+f.right&&c>g.top-f.top&&c<g.bottom+f.bottom)||u;if(d.length>=2){if(Jt(e)==="y"){const P=d[0],E=d[d.length-1],O=ae(e)==="top",I=P.top,B=E.bottom,z=O?P.left:E.left,R=O?P.right:E.right,V=R-z,q=B-I;return{top:I,bottom:B,left:z,right:R,width:V,height:q,x:z,y:I}}const g=ae(e)==="left",b=oe(...d.map(P=>P.right)),y=li(...d.map(P=>P.left)),w=d.filter(P=>g?P.left===y:P.right===b),x=w[0].top,_=w[w.length-1].bottom,k=y,S=b,M=S-k,D=_-x;return{top:x,bottom:_,left:k,right:S,width:M,height:D,x:k,y:x}}return u}const m=await o.getElementRects({reference:{getBoundingClientRect:p},floating:s.floating,strategy:r});return n.reference.x!==m.reference.x||n.reference.y!==m.reference.y||n.reference.width!==m.reference.width||n.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}},$d=new Set(["left","top"]);async function Id(i,t){const{placement:e,platform:s,elements:n}=i,o=await(s.isRTL==null?void 0:s.isRTL(n.floating)),r=ae(e),a=ln(e),l=Jt(e)==="y",c=$d.has(r)?-1:1,h=o&&l?-1:1,d=ns(t,i);let{mainAxis:u,crossAxis:f,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof p=="number"&&(f=a==="end"?p*-1:p),l?{x:f*h,y:u*c}:{x:u*c,y:f*h}}const Ol=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:o,placement:r,middlewareData:a}=t,l=await Id(t,i);return r===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:o+l.y,data:{...l,placement:r}}}}},Fd=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n,platform:o}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:b=>{let{x:y,y:w}=b;return{x:y,y:w}}},...c}=ns(i,t),h={x:e,y:s},d=await o.detectOverflow(t,c),u=Jt(ae(n)),f=Ml(u);let p=h[f],m=h[u];if(r){const b=f==="y"?"top":"left",y=f==="y"?"bottom":"right",w=p+d[b],x=p-d[y];p=Dr(w,p,x)}if(a){const b=u==="y"?"top":"left",y=u==="y"?"bottom":"right",w=m+d[b],x=m-d[y];m=Dr(w,m,x)}const g=l.fn({...t,[f]:p,[u]:m});return{...g,data:{x:g.x-e,y:g.y-s,enabled:{[f]:r,[u]:a}}}}}};function cn(){return typeof window<"u"}function ke(i){return Tl(i)?(i.nodeName||"").toLowerCase():"#document"}function St(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function De(i){var t;return(t=(Tl(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function Tl(i){return cn()?i instanceof Node||i instanceof St(i).Node:!1}function Nt(i){return cn()?i instanceof Element||i instanceof St(i).Element:!1}function Wt(i){return cn()?i instanceof HTMLElement||i instanceof St(i).HTMLElement:!1}function Tr(i){return!cn()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof St(i).ShadowRoot}function os(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=Et(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&n!=="inline"&&n!=="contents"}function Bd(i){return/^(table|td|th)$/.test(ke(i))}function Vd(i){try{if(i.matches(":popover-open"))return!0}catch{}try{return i.matches(":modal")}catch{return!1}}const Hd=/transform|translate|scale|rotate|perspective|filter/,jd=/paint|layout|strict|content/,Le=i=>!!i&&i!=="none";let An;function xo(i){const t=Nt(i)?Et(i):i;return Le(t.transform)||Le(t.translate)||Le(t.scale)||Le(t.rotate)||Le(t.perspective)||!wo()&&(Le(t.backdropFilter)||Le(t.filter))||Hd.test(t.willChange||"")||jd.test(t.contain||"")}function Nd(i){let t=hi(i);for(;Wt(t)&&!hn(t);){if(xo(t))return t;if(Vd(t))return null;t=hi(t)}return null}function wo(){return An==null&&(An=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),An}function hn(i){return/^(html|body|#document)$/.test(ke(i))}function Et(i){return St(i).getComputedStyle(i)}function dn(i){return Nt(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function hi(i){if(ke(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Tr(i)&&i.host||De(i);return Tr(t)?t.host:t}function Ll(i){const t=hi(i);return hn(t)?i.ownerDocument?i.ownerDocument.body:i.body:Wt(t)&&os(t)?t:Ll(t)}function Rl(i,t,e){var s;t===void 0&&(t=[]);const n=Ll(i),o=n===((s=i.ownerDocument)==null?void 0:s.body),r=St(n);return o?(Wd(r),t.concat(r,r.visualViewport||[],os(n)?n:[],[])):t.concat(n,Rl(n,[]))}function Wd(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function zl(i){const t=Et(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=Wt(i),o=n?i.offsetWidth:e,r=n?i.offsetHeight:s,a=Ws(e)!==o||Ws(s)!==r;return a&&(e=o,s=r),{width:e,height:s,$:a}}function $l(i){return Nt(i)?i:i.contextElement}function oi(i){const t=$l(i);if(!Wt(t))return we(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:o}=zl(t);let r=(o?Ws(e.width):e.width)/s,a=(o?Ws(e.height):e.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const Ud=we(0);function Il(i){const t=St(i);return!wo()||!t.visualViewport?Ud:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function qd(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==St(i)?!1:t}function Ui(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),o=$l(i);let r=we(1);t&&(s?Nt(s)&&(r=oi(s)):r=oi(i));const a=qd(o,e,s)?Il(o):we(0);let l=(n.left+a.x)/r.x,c=(n.top+a.y)/r.y,h=n.width/r.x,d=n.height/r.y;if(o){const u=St(o),f=s&&Nt(s)?St(s):s;let p=u,m=p.frameElement;for(;m&&s&&f!==p;){const g=oi(m),b=m.getBoundingClientRect(),y=Et(m),w=b.left+(m.clientLeft+parseFloat(y.paddingLeft))*g.x,x=b.top+(m.clientTop+parseFloat(y.paddingTop))*g.y;l*=g.x,c*=g.y,h*=g.x,d*=g.y,l+=w,c+=x,p=St(m),m=p.frameElement}}return ci({width:h,height:d,x:l,y:c})}const Yd=[":popover-open",":modal"];function Fl(i){return Yd.some(t=>{try{return i.matches(t)}catch{return!1}})}function Xd(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const o=n==="fixed",r=De(s),a=t?Fl(t.floating):!1;if(s===r||a&&o)return e;let l={scrollLeft:0,scrollTop:0},c=we(1);const h=we(0),d=Wt(s);if((d||!d&&!o)&&((ke(s)!=="body"||os(r))&&(l=dn(s)),Wt(s))){const u=Ui(s);c=oi(s),h.x=u.x+s.clientLeft,h.y=u.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+h.x,y:e.y*c.y-l.scrollTop*c.y+h.y}}function Kd(i){return Array.from(i.getClientRects())}function Bl(i){return Ui(De(i)).left+dn(i).scrollLeft}function Gd(i){const t=De(i),e=dn(i),s=i.ownerDocument.body,n=oe(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=oe(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-e.scrollLeft+Bl(i);const a=-e.scrollTop;return Et(s).direction==="rtl"&&(r+=oe(t.clientWidth,s.clientWidth)-n),{width:n,height:o,x:r,y:a}}function Qd(i,t){const e=St(i),s=De(i),n=e.visualViewport;let o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(n){o=n.width,r=n.height;const c=wo();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:o,height:r,x:a,y:l}}function Jd(i,t){const e=Ui(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,o=Wt(i)?oi(i):we(1),r=i.clientWidth*o.x,a=i.clientHeight*o.y,l=n*o.x,c=s*o.y;return{width:r,height:a,x:l,y:c}}function Lr(i,t,e){let s;if(t==="viewport")s=Qd(i,e);else if(t==="document")s=Gd(De(i));else if(Nt(t))s=Jd(t,e);else{const n=Il(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return ci(s)}function Vl(i,t){const e=hi(i);return e===t||!Nt(e)||hn(e)?!1:Et(e).position==="fixed"||Vl(e,t)}function Zd(i,t){const e=t.get(i);if(e)return e;let s=Rl(i,[]).filter(a=>Nt(a)&&ke(a)!=="body"),n=null;const o=Et(i).position==="fixed";let r=o?hi(i):i;for(;Nt(r)&&!hn(r);){const a=Et(r),l=xo(r);!l&&a.position==="fixed"&&(n=null),(o?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||os(r)&&!l&&Vl(i,r))?s=s.filter(h=>h!==r):n=a,r=hi(r)}return t.set(i,s),s}function tu(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const r=[...e==="clippingAncestors"?Zd(t,this._c):[].concat(e),s],a=r[0],l=r.reduce((c,h)=>{const d=Lr(t,h,n);return c.top=oe(d.top,c.top),c.right=li(d.right,c.right),c.bottom=li(d.bottom,c.bottom),c.left=oe(d.left,c.left),c},Lr(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function eu(i){const{width:t,height:e}=zl(i);return{width:t,height:e}}function iu(i,t,e){const s=Wt(t),n=De(t),o=e==="fixed",r=Ui(i,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=we(0);if(s||!s&&!o)if((ke(t)!=="body"||os(n))&&(a=dn(t)),s){const d=Ui(t,!0,o,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else n&&(l.x=Bl(n));const c=r.left+a.scrollLeft-l.x,h=r.top+a.scrollTop-l.y;return{x:c,y:h,width:r.width,height:r.height}}function Rr(i,t){return!Wt(i)||Et(i).position==="fixed"?null:t?t(i):i.offsetParent}function Hl(i,t){const e=St(i);if(!Wt(i)||Fl(i))return e;let s=Rr(i,t);for(;s&&Bd(s)&&Et(s).position==="static";)s=Rr(s,t);return s&&(ke(s)==="html"||ke(s)==="body"&&Et(s).position==="static"&&!xo(s))?e:s||Nd(i)||e}const su=async function(i){const t=this.getOffsetParent||Hl,e=this.getDimensions;return{reference:iu(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function nu(i){return Et(i).direction==="rtl"}const ou={convertOffsetParentRelativeRectToViewportRelativeRect:Xd,getDocumentElement:De,getClippingRect:tu,getOffsetParent:Hl,getElementRects:su,getClientRects:Kd,getDimensions:eu,getScale:oi,isElement:Nt,isRTL:nu},jl=Fd,Nl=Ld,Wl=zd,Ul=(i,t,e)=>{const s=new Map,n={platform:ou,...e},o={...n.platform,_c:s};return Td(i,t,{...n,platform:o})};var ru=Object.defineProperty,au=Object.getOwnPropertyDescriptor,ql=(i,t,e,s)=>{for(var n=au(t,e),o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&ru(t,e,n),n},at;const ko=(at=class extends j{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of[...at.dialog.children])t instanceof at&&(t.remove(),t.visible=!1);setTimeout(()=>{at.dialog.close(),at.dialog.remove()},310)}get visible(){return this._visible}set visible(t){this._visible=t,t?(at.dialog.parentElement||document.body.append(at.dialog),this._previousContainer=this.parentElement,at.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),at.dialog.append(this),at.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var e;(e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await Ul(this._previousContainer,this,{placement:t,middleware:[Ol(10),Wl(),Nl(),jl({padding:5})]}),{x:s,y:n}=e;this.style.left=`${s}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("display","none"),this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return C` <slot></slot> `}},at.styles=[Ae.scrollbar,N`
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
    `],at.dialog=Qn.create(()=>C` <dialog
      @click=${e=>{e.target===at.dialog&&at.removeMenus()}}
      @cancel=${()=>at.removeMenus()}
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
    ></dialog>`),at);ql([v({type:String,reflect:!0})],ko.prototype,"placement");ql([v({type:Boolean,reflect:!0})],ko.prototype,"visible");let lu=ko;class Zt extends HTMLElement{get label(){return this.getAttribute("label")??void 0}set label(t){t!=null?this.setAttribute("label",t):this.removeAttribute("label")}get icon(){return this.getAttribute("icon")??void 0}set icon(t){t!=null?this.setAttribute("icon",t):this.removeAttribute("icon")}get img(){return this.getAttribute("img")??void 0}set img(t){t!=null?this.setAttribute("img",t):this.removeAttribute("img")}get checked(){return this.hasAttribute("checked")}set checked(t){t?this.setAttribute("checked",""):this.removeAttribute("checked")}get noMark(){return this.hasAttribute("no-mark")}set noMark(t){t?this.setAttribute("no-mark",""):this.removeAttribute("no-mark")}get vertical(){return this.hasAttribute("vertical")}set vertical(t){t?this.setAttribute("vertical",""):this.removeAttribute("vertical")}get checkbox(){return this.hasAttribute("checkbox")}set checkbox(t){t?this.setAttribute("checkbox",""):this.removeAttribute("checkbox")}get value(){if(this._value!==void 0)return this._value;const t=this.getAttribute("value");if(t!==null)return Ns(t);if(this.label)return Ns(this.label)}set value(t){this._value=t}}var cu=Object.defineProperty,hu=Object.getOwnPropertyDescriptor,Lt=(i,t,e,s)=>{for(var n=s>1?void 0:s?hu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&cu(t,e,n),n};const Wo=class Wo extends j{constructor(){super(...arguments),this.multiple=!1,this.required=!1,this.vertical=!1,this.searchBox=!1,this._visible=!1,this._options=[],this._value=new Set,this._searchValue="",this._dirty=!1,this.onValueChange=new Event("change"),this._dialog=xe(),this._trigger=xe(),this._mutationObserver=new MutationObserver(()=>this._syncOptions()),this._onTriggerKeydown=t=>{t.key==="Enter"||t.key===" "?(t.preventDefault(),this.visible?this.visible=!1:this._openWithFocus()):t.key==="ArrowDown"?(t.preventDefault(),this.visible?this._focusOption(0):this._openWithFocus()):t.key==="ArrowUp"&&(t.preventDefault(),this.visible?this._focusOption(-1):this._openWithFocus())},this._onOptionKeydown=(t,e,s)=>{t.key==="Enter"||t.key===" "?(t.preventDefault(),this._onOptionClick(e)):t.key==="ArrowDown"?(t.preventDefault(),this._focusOption(s+1)):t.key==="ArrowUp"?(t.preventDefault(),this._focusOption(s-1)):t.key==="Home"?(t.preventDefault(),this._focusOption(0)):t.key==="End"?(t.preventDefault(),this._focusOption(-1)):t.key==="Escape"&&(t.preventDefault(),this.visible=!1)},this._onDialogClick=t=>{t.target===this._dialog.value&&(this.visible=!1)},this._onCancel=t=>{t.preventDefault(),this.visible=!1},this._onOptionClick=t=>{const e=this._value.has(t);!this.multiple&&!this.required&&!e?this._value=new Set([t]):!this.multiple&&!this.required&&e?this._value=new Set([]):!this.multiple&&this.required&&!e?this._value=new Set([t]):!this.multiple&&this.required&&e?this._value=new Set([]):this.multiple&&!this.required&&!e?this._value=new Set([...this._value,t]):this.multiple&&!this.required&&e?this._value=new Set([...this._value].filter(s=>s!==t)):this.multiple&&this.required&&!e?this._value=new Set([...this._value,t]):this.multiple&&this.required&&e&&(this._value=new Set([...this._value].filter(s=>s!==t))),this._dirty=!0,this._updateOptionsState(),this.dispatchEvent(new Event("change"))},this._onSearch=t=>{this._searchValue=(t.target.value??"").toLowerCase()}}set visible(t){var s,n;const e=this._visible;if(t!==e){if(this._visible=t,t){const o=this._dialog.value;if(!o){this._visible=!1;return}o.showModal(),this._updatePosition()}else(s=this._dialog.value)==null||s.close(),this._resetState(),(n=this._trigger.value)==null||n.focus(),this.dispatchEvent(new Event("close",{bubbles:!0,composed:!0}));this.requestUpdate("visible",e)}}get visible(){return this._visible}get validation(){return this._validation}set validation(t){this._validation=t,this.requestUpdate()}get isValid(){var t;return this._dirty?this.required&&this.value.length===0?!1:((t=this._currentValidation)==null?void 0:t.valid)??!0:!0}get _validationMessage(){var t;return this.required&&this.value.length===0?"This field is required.":(t=this._currentValidation)==null?void 0:t.message}get _hasVisibleOptions(){return this._searchValue?this._options.some(t=>(t.label??String(t.value)??"").toLowerCase().includes(this._searchValue)):this._options.length>0}set value(t){const e=new Set;for(const s of t){const n=this._findOption(s);if(n&&(e.add(n),!this.multiple&&t.length===1))break}this._value=e,this._updateOptionsState(),this.dispatchEvent(new Event("change"))}get value(){return[...this._value].filter(t=>t instanceof Zt&&t.checked).map(t=>t.value)}connectedCallback(){super.connectedCallback(),this._mutationObserver.observe(this,{childList:!0}),customElements.whenDefined("bim-option").then(()=>this._syncOptions())}disconnectedCallback(){super.disconnectedCallback(),this._mutationObserver.disconnect()}willUpdate(t){this._currentValidation=this._validation?this._validation(this.value):void 0}updated(){this.toggleAttribute("invalid",!this.isValid)}firstUpdated(){var t;this._visible&&((t=this._dialog.value)==null||t.showModal(),this._updatePosition())}_syncOptions(){const t=Array.from(this.children).filter(n=>n.tagName==="BIM-OPTION");this._options=t;const e=new Set(t.filter(n=>n.hasAttribute("checked"))),s=[...this._value].some(n=>!e.has(n));this._value=e,s&&this.dispatchEvent(new Event("change"))}_findOption(t){for(const e of Array.from(this.children))if(e instanceof Zt&&(e.label===t||e.value===t))return e}_updateOptionsState(){for(const t of Array.from(this.children))t instanceof Zt&&(t.checked=this._value.has(t))}_updatePosition(){const t=this._dialog.value,e=this._trigger.value;if(!t||!e)return;const s=4,n=5,o=window.innerWidth,r=window.innerHeight,a=e.getBoundingClientRect(),l=t.getBoundingClientRect();let c=a.left,h=a.bottom+s;h+l.height>r-n&&(h=a.top-l.height-s),c+l.width>o-n&&(c=a.right-l.width),c=Math.max(n,Math.min(c,o-l.width-n)),h=Math.max(n,Math.min(h,r-l.height-n)),t.style.minWidth=`${a.width}px`,t.style.left=`${c}px`,t.style.top=`${h}px`}_resetState(){this._searchValue="";for(const t of Array.from(this.children))t instanceof Zt&&(t.style.display="")}_focusOption(t){var n,o;const e=[...((n=this._dialog.value)==null?void 0:n.querySelectorAll(".option"))??[]];if(!e.length)return;const s=t<0?e.length+t:t;(o=e[Math.max(0,Math.min(s,e.length-1))])==null||o.focus()}_openWithFocus(){this.visible=!0,requestAnimationFrame(()=>{var n;const t=this._dialog.value;if(!t)return;const e=t.querySelector(".option.checked"),s=t.querySelector(".option");(n=e??s)==null||n.focus()})}_renderOption(t,e){const s=this._value.has(t);return(this._searchValue?!(t.label??String(t.value)??"").toLowerCase().includes(this._searchValue):!1)?J:C`
      <div
        class=${nh({option:!0,checked:s})}
        role="option"
        aria-selected=${s}
        tabindex="-1"
        @click=${()=>this._onOptionClick(t)}
        @keydown=${o=>this._onOptionKeydown(o,t,e)}
      >
        <bim-label
          .icon=${t.icon}
          .img=${t.img}
          .vertical=${t.vertical}
        >${t.label}</bim-label>
        ${s&&!t.noMark?C`<svg xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>`:J}
      </div>
    `}render(){let t,e,s;if(this._value.size===0)t=this.placeholder??"Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)??String((n==null?void 0:n.value)??""),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=this.multipleLabel?this.multipleLabel(this._value.size):`Multiple (${this._value.size})`;return C`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${Pt(this._trigger)}
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
          <bim-label aria-hidden="true" .img=${e} .icon=${s}>${t}</bim-label>
          <svg xmlns="http://www.w3.org/2000/svg" height="1.125rem" viewBox="0 0 24 24" width="1.125rem">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>
      </bim-input>
      ${!this.isValid&&this._validationMessage?C`<span class="validation-message">${this._validationMessage}</span>`:J}
      <dialog
        id="bim-dropdown-listbox"
        role="listbox"
        aria-label=${this.label??"Options"}
        aria-multiselectable=${this.multiple}
        ${Pt(this._dialog)}
        @click=${this._onDialogClick}
        @cancel=${this._onCancel}
      >
        ${this.searchBox?C`<bim-text-input
              @input=${this._onSearch}
              placeholder="Search..."
              debounce="200"
            ></bim-text-input>`:J}
        ${oh(this._options,n=>n,(n,o)=>this._renderOption(n,o))}
        ${this._hasVisibleOptions?J:C`<bim-label class="no-options">No options found...</bim-label>`}
      </dialog>
    `}};Wo.styles=[Ae.scrollbar,N`
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
    `];let yt=Wo;Lt([v({type:String,reflect:!0})],yt.prototype,"name",2);Lt([v({type:String,reflect:!0})],yt.prototype,"icon",2);Lt([v({type:String,reflect:!0})],yt.prototype,"label",2);Lt([v({type:Boolean,reflect:!0})],yt.prototype,"multiple",2);Lt([v({type:Boolean,reflect:!0})],yt.prototype,"required",2);Lt([v({type:Boolean,reflect:!0})],yt.prototype,"vertical",2);Lt([v({type:String,reflect:!0})],yt.prototype,"placeholder",2);Lt([v({type:Boolean,reflect:!0,attribute:"search-box"})],yt.prototype,"searchBox",2);Lt([v({type:Boolean,reflect:!0})],yt.prototype,"visible",1);Lt([ut()],yt.prototype,"_options",2);Lt([ut()],yt.prototype,"_value",2);Lt([ut()],yt.prototype,"_searchValue",2);function zr(i){const t=[];let e="",s=0;for(const n of i)n==="["||n==="("?(s++,e+=n):n==="]"||n===")"?(s--,e+=n):n===" "&&s===0?e!==""&&(t.push(e==="."?null:e),e=""):e+=n;return e!==""&&t.push(e==="."?null:e),t}function Yl(i){const t=[],e=/(["'])(.*?)\1/g;let s;for(;(s=e.exec(i))!==null;){const n=s[2].trim();if(n===""){t.push([]);continue}t.push(zr(n))}if(t.length===0){const n=i.split(/\r?\n/).map(o=>o.trim()).filter(Boolean);for(const o of n){const r=o.replace(/^["']|["']$/g,"").trim();r&&t.push(zr(r))}}return t}function du(i){const t=Yl(i),e=new Set;for(const s of t)for(const n of s)n!==null&&n!==""&&e.add(n);return[...e]}function uu(i){var n;const t=[],e=i.length,s=((n=i[0])==null?void 0:n.length)||0;for(let o=0;o<e;o++)for(let r=0;r<s-1;r++){const a=i[o][r],l=i[o][r+1];if(a!==l){const c=t.find(h=>h.type==="vertical"&&h.from[0]===r+1&&h.to[0]===r+1&&h.from[1]<=o&&h.to[1]>=o);c?(c.to[1]=o+1,c.left&&a&&c.left.push(a),c.right&&l&&c.right.push(l)):t.push({type:"vertical",from:[r+1,o],to:[r+1,o+1],left:a?[a]:[],right:l?[l]:[]})}}for(let o=0;o<e-1;o++)for(let r=0;r<s;r++){const a=i[o][r],l=i[o+1][r];if(a!==l){const c=t.find(h=>h.type==="horizontal"&&h.from[1]===o+1&&h.to[1]===o+1&&h.from[0]<=r&&h.to[0]>=r);c?(c.to[0]=r+1,c.above&&a&&c.above.push(a),c.below&&l&&c.below.push(l)):t.push({type:"horizontal",from:[r,o+1],to:[r+1,o+1],above:a?[a]:[],below:l?[l]:[]})}}return fu(t)}function fu(i){for(const t of i)t.left&&(t.left=[...new Set(t.left)]),t.right&&(t.right=[...new Set(t.right)]),t.above&&(t.above=[...new Set(t.above)]),t.below&&(t.below=[...new Set(t.below)]);return i}function pu(i,t,e,s){const o=(parseFloat(i.colSizesComputed[e-1])||0)+t;let r;return r=(parseFloat(i.colSizesComputed[e])||0)-t,{left:o,right:r}}function mu(i,t,e,s){const o=(parseFloat(i.rowSizesComputed[e-1])||0)+t;let r;return r=(parseFloat(i.rowSizesComputed[e])||0)-t,{top:o,bottom:r}}function gu(i,t,e,s){return!(i<s&&e<0||t<s&&e>0)}function bu(i,t,e,s){return!(i<s&&e<0||t<s&&e>0)}function vu(i,t){const[e,s]=i.from,[n,o]=i.to,r=t.gap.split(" "),a=r[1]||r[0]||"0px",l=r[0]||"0px",c=i.type==="horizontal"?"0":`calc(-50% - ${a} / 2)`,h=i.type==="horizontal"?`calc(-50% - ${l} / 2)`:"0",d={"grid-column":`${e+1} / ${n+1}`,"grid-row":`${s+1} / ${o+1}`,transform:`translate(${c}, ${h})`},u=parseFloat(t.fontSize);return i.type==="vertical"?d.width=`${Math.max(parseFloat(a),u)}px`:d.height=`${Math.max(parseFloat(l),u)}px`,d}var yu=Object.defineProperty,un=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&yu(t,e,n),n};const Uo=class Uo extends j{constructor(){super(...arguments),this.floating=!1,this.resizeableAreas=!1,this.areasResizeExceptions=[],this._layouts={},this._elements={},this.areaGroups={},this._templateIds=new Map,this._updateFunctions={},this._slotNames={notAllowed:"not-allowed",notFound:"not-found",emptyLayout:"empty-layout"},this._colSizesRaw=[],this._rowSizesRaw=[],this._colSizesComputed=[],this._rowSizesComputed=[],this._start=null,this.layoutsResize={},this._onMouseMove=t=>{if(!this._start||!this.layout)return;const e=t.clientX-this._start.x,s=t.clientY-this._start.y,n=this._start.divider,o=getComputedStyle(this),r=parseFloat(o.fontSize)*3;if(n.type==="vertical"){const a=n.from[0],c=this._colSizesRaw.length-1,h=a===c,d=pu(this._start,e,a,h);if(!gu(d.left,d.right,e,r))return;const u=Math.max(r,d.left),f=Math.max(r,d.right);this._colSizesRaw[a-1]=`${u}px`,this._colSizesRaw[a]=h?"1fr":`${f}px`,this.style.gridTemplateColumns=this._colSizesRaw.join(" ")}if(n.type==="horizontal"){const a=n.from[1],c=this._rowSizesRaw.length-1,h=a===c,d=mu(this._start,s,a,h);if(!bu(d.top,d.bottom,s,r))return;const u=Math.max(r,d.top),f=Math.max(r,d.bottom);this._rowSizesRaw[a-1]=`${u}px`,this._rowSizesRaw[a]=h?"1fr":`${f}px`,this.style.gridTemplateRows=this._rowSizesRaw.join(" ")}this.layoutsResize[this.layout]={cols:this._colSizesRaw,rows:this._rowSizesRaw}},this._onMouseUp=()=>{window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),this._start=null},this.updateComponent={},this.emitLayoutChange=()=>{this.dispatchEvent(new Event("layoutchange"))}}set layouts(t){this._layouts=t,this._templateIds.clear()}get layouts(){return this._layouts}set elements(t){this._elements=t,this.setUpdateFunctions()}get elements(){return this._elements}getLayoutAreas(t){return du(t.template)}setUpdateFunctions(){const t={};for(const[e,s]of Object.entries(this.elements))"template"in s&&(t[e]=n=>{var o,r;(r=(o=this._updateFunctions)[e])==null||r.call(o,n)});this.updateComponent=t}disconnectedCallback(){super.disconnectedCallback(),this._templateIds.clear(),this._updateFunctions={},this.updateComponent={}}getTemplateId(t){let e=this._templateIds.get(t);return e||(e=ai.newRandomId(),this._templateIds.set(t,e)),e}isAreaResizeable(t){return this.areasResizeExceptions.includes(t)?!1:this.resizeableAreas}canResizeVerticalDivider(t){const e=t.left||[],s=t.right||[];for(const n of e)if(!this.isAreaResizeable(n))return!1;for(const n of s)if(!this.isAreaResizeable(n))return!1;return!0}canResizeHorizontalDivider(t){const e=t.above||[],s=t.below||[];for(const n of e)if(!this.isAreaResizeable(n))return!1;for(const n of s)if(!this.isAreaResizeable(n))return!1;return!0}computeDividers(){var r;if(!this.layout)return;const t=(r=this.layouts[this.layout])==null?void 0:r.template;if(!t)return;const e=Yl(t),s=uu(e),n=getComputedStyle(this),o=[];for(const a of s){let l=!1;if(a.type==="vertical"?l=this.canResizeVerticalDivider(a):l=this.canResizeHorizontalDivider(a),!l)continue;const c=f=>{this._colSizesRaw=this.style.gridTemplateColumns.split(" "),this._rowSizesRaw=this.style.gridTemplateRows.split(" "),this._rowSizesComputed=n.gridTemplateRows.split(" "),this._colSizesComputed=n.gridTemplateColumns.split(" "),this._start={x:f.clientX,y:f.clientY,divider:a,colSizesRaw:[...this._colSizesRaw],rowSizesRaw:[...this._rowSizesRaw],colSizesComputed:[...this._colSizesComputed],rowSizesComputed:[...this._rowSizesComputed]},window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp)},h=f=>{f.preventDefault()},d=vu(a,n),u=C`
        <div @mousedown=${c} @contextmenu=${h} class="grid-divider divider-${a.type}" style=${pe(d)}>
          <div></div>
        </div>
      `;o.push(u)}return o}parseTabToken(t){const e=t.match(/^(\w+)\[([^\]]+)\]$/);return e?{name:e[1],keys:e[2].split(",").map(s=>s.trim())}:t}parseTabElementTokens(t){const e=[];let s="",n=0;for(const o of t)if(o==="[")n++,s+=o;else if(o==="]")n--,s+=o;else if(o===","&&n===0){const r=s.trim();r&&e.push(this.parseTabToken(r)),s=""}else s+=o;return s.trim()&&e.push(this.parseTabToken(s.trim())),e}extractElementKeys(t){const e=t.match(/^\w+:\w+\(([^)]+)\)$/);return e?this.parseTabElementTokens(e[1]).flatMap(n=>typeof n=="string"?[n]:n.keys):[t]}cleanUpdateFunctions(){if(!this.layout){this._updateFunctions={};return}const t=this.layouts[this.layout],e=this.getLayoutAreas(t).flatMap(s=>this.extractElementKeys(s));for(const s in this.elements)e.includes(s)||delete this._updateFunctions[s]}clean(){this.style.gridTemplate="";for(const t of[...this.children])Object.values(this._slotNames).some(e=>t.getAttribute("slot")===e)||t.remove();this.cleanUpdateFunctions()}emitElementCreation(t){this.dispatchEvent(new CustomEvent("elementcreated",{detail:t}))}getSanitizedLayoutTemplate(t){return t.replace(/\w+:(\w+)\([^)]*\)/g,"$1")}createElementFromDefinition(t,e){if(e instanceof HTMLElement)return e;if("template"in e){const{template:r,initialState:a}=e,l=this.getTemplateId(r),c=this.querySelector(`[data-grid-template-id="${l}"]`);if(c){let u=this._updateFunctions[t];if(!u){for(const[,f]of Object.entries(this._updateFunctions))if(this.querySelector(`[data-grid-template-id="${this.getTemplateId(r)}"]`)===c){u=f;break}}return u&&(this._updateFunctions[t]=u),c}const[h,d]=Qn.create(r,a);return h.setAttribute("data-grid-template-id",l),this._updateFunctions[t]=d,h}const s=this.getTemplateId(e),n=this.querySelector(`[data-grid-template-id="${s}"]`);if(n)return n;const o=Qn.create(e);return o.setAttribute("data-grid-template-id",this.getTemplateId(e)),o}render(){if(this.layout){const t=this.layouts[this.layout];if(t){if(!(t.guard??(()=>!0))())return this.clean(),C`<slot name=${this._slotNames.notAllowed}></slot>`;const n=this.getLayoutAreas(t),o=d=>d.split(",").map(u=>u.trim()).filter(Boolean),r=d=>{var u;return((u=t.elements)==null?void 0:u[d])||this.elements[d]},a=d=>{const u=r(d);return u&&typeof u=="object"&&"label"in u&&u.label?u.label:d},l=d=>{const u=r(d);if(u&&typeof u=="object"&&"icon"in u&&typeof u.icon=="string")return u.icon},c=n.map(d=>{const u=d.match(/^tabs:([^(]+)\(([^)]+)\)$/),f=d.match(/^panel:([^(]+)\(([^)]+)\)$/);if(!u&&!f){const x=r(d);if(!x)return null;const _=this.createElementFromDefinition(d,x);return _?(this.emitElementCreation({name:d,element:_}),_.style.gridArea=d,_):null}const p=u?u[1]:f[1],m=o(u?u[2]:f[2]);if(u){const x=`tabs-${p}`;let _=this.querySelector(`[data-grid-tabs-id="${x}"]`);_||(_=document.createElement("bim-tabs"),_.setAttribute("data-grid-tabs-id",x));const k=this.areaGroups[p];k!=null&&k.switchersFull?_.setAttribute("switchers-full",""):_.removeAttribute("switchers-full"),k!=null&&k.switchersCompact?_.setAttribute("switchers-compact",""):_.removeAttribute("switchers-compact"),_.style.gridArea=p;const S=[],M=this.parseTabElementTokens(u[2]);for(const D of M)if(typeof D=="string"){const P=r(D);if(!P)continue;const E=this.createElementFromDefinition(D,P);if(!E)continue;this.emitElementCreation({name:D,element:E});const O=`tab-${p}-${D}`;let I=_.querySelector(`[data-grid-tab-id="${O}"]`);I||(I=document.createElement("bim-tab"),I.setAttribute("data-grid-tab-id",O),I.name=D),I.label=a(D),I.icon=l(D),I.innerHTML="",I.appendChild(E),S.push(I)}else{const{name:P,keys:E}=D,O=this.areaGroups[P],I=`tab-${p}-${P}`;let B=_.querySelector(`[data-grid-tab-id="${I}"]`);B||(B=document.createElement("bim-tab"),B.setAttribute("data-grid-tab-id",I),B.name=P),B.label=(O==null?void 0:O.label)??P,B.icon=O==null?void 0:O.icon;const z=`panel-${p}-${P}`;let R=B.querySelector(`[data-grid-panel-id="${z}"]`);R||(R=document.createElement("bim-panel"),R.setAttribute("data-grid-panel-id",z)),R.innerHTML="";for(const V of E){const q=r(V);if(!q)continue;const U=this.createElementFromDefinition(V,q);U&&(this.emitElementCreation({name:V,element:U}),R.appendChild(U))}B.innerHTML="",B.appendChild(R),S.push(B)}return _.innerHTML="",_.append(...S),_}const g=`panel-${p}`;let b=this.querySelector(`[data-grid-panel-id="${g}"]`);b||(b=document.createElement("bim-panel"),b.setAttribute("data-grid-panel-id",g));const y=this.areaGroups[p];y!=null&&y.label?b.setAttribute("label",y.label):b.removeAttribute("label"),y!=null&&y.icon?b.setAttribute("icon",y.icon):b.removeAttribute("icon"),b.style.gridArea=p;const w=[];for(const x of m){const _=r(x);if(!_)continue;const k=this.createElementFromDefinition(x,_);k&&(this.emitElementCreation({name:x,element:k}),w.push(k))}return b.innerHTML="",b.append(...w),b}).filter(d=>d!==null);this.clean(),this.style.gridTemplate=this.getSanitizedLayoutTemplate(t.template);const h=this.layoutsResize[this.layout];h&&(this.style.gridTemplateColumns=h.cols.join(" "),this.style.gridTemplateRows=h.rows.join(" ")),this.append(...c),this.emitLayoutChange()}else return this.clean(),C`<slot name=${this._slotNames.notFound}></slot>`}else return this.clean(),this.emitLayoutChange(),C`<slot name=${this._slotNames.emptyLayout}></slot>`;return C`
      ${this.resizeableAreas?this.computeDividers():null}
      <slot></slot>
    `}};Uo.styles=N`
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
  `;let We=Uo;un([v({type:Boolean,reflect:!0})],We.prototype,"floating");un([v({type:String,reflect:!0})],We.prototype,"layout");un([v({type:Boolean,attribute:"areas-resizeable",reflect:!0})],We.prototype,"resizeableAreas");un([v({type:Array,attribute:!1})],We.prototype,"areasResizeExceptions");var _u=Object.defineProperty,Xl=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&_u(t,e,n),n};const qo=class qo extends j{updated(){this.ariaLabel?(this.setAttribute("role","img"),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.setAttribute("aria-hidden","true"))}render(){return this.icon?C`
      <iconify-icon
        .icon=${this.icon}
        height="none"
        aria-hidden=${this.ariaLabel?J:"true"}
      ></iconify-icon>
    `:J}};qo.styles=N`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--bim-icon--sz, var(--bim-icon--fz, var(--bim-ui_size-xl)));
      height: var(--bim-icon--sz, var(--bim-icon--fz, var(--bim-ui_size-xl)));
    }

    iconify-icon {
      width: 100%;
      height: 100%;
      color: var(--bim-icon--c, currentColor);
      transition: color 0.15s, width 0.15s, height 0.15s;
      display: flex;
    }

    @media (prefers-reduced-motion: reduce) {
      iconify-icon {
        transition: none;
      }
    }
  `;let qi=qo;Xl([v({type:String,reflect:!0})],qi.prototype,"icon");Xl([v({type:String,attribute:"aria-label",reflect:!0})],qi.prototype,"ariaLabel");var xu=Object.defineProperty,fn=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&xu(t,e,n),n};const Yo=class Yo extends j{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const o=n,r=t[s];typeof r=="boolean"?o.checked=r:o.value=r}}render(){return C`
      <div class="parent">
        ${this.label||this.icon?C`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Yo.styles=N`
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
  `;let Ue=Yo;fn([v({type:String,reflect:!0})],Ue.prototype,"name");fn([v({type:String,reflect:!0})],Ue.prototype,"label");fn([v({type:String,reflect:!0})],Ue.prototype,"icon");fn([v({type:Boolean,reflect:!0})],Ue.prototype,"vertical");var wu=Object.defineProperty,bi=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&wu(t,e,n),n},es;let Qe=(es=class extends j{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){var e;const t=(e=this.label??this.textContent)==null?void 0:e.trim();if(t)return Ns(t)}updated(){var e;const t=((e=this.label??this.textContent)==null?void 0:e.trim())??"";this.labelHidden&&t?this.setAttribute("aria-label",t):this.removeAttribute("aria-label")}render(){const t=this.label??this.textContent??"";return C`
      <div class="parent" title=${t}>
        ${ne(this.img,()=>C`<img src=${this.img} alt=${t} />`)}
        ${ne(!this.iconHidden&&this.icon,()=>C`<bim-icon .icon=${this.icon}></bim-icon>`)}
        ${this.label!==void 0?this.label?C`<p>${this.label}</p>`:J:C`<p><slot></slot></p>`}
      </div>
    `}},es.styles=N`
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
  `,es);bi([v({type:String})],Qe.prototype,"img");bi([v({type:Boolean,attribute:"label-hidden",reflect:!0})],Qe.prototype,"labelHidden");bi([v({type:String,reflect:!0})],Qe.prototype,"icon");bi([v({type:Boolean,attribute:"icon-hidden"})],Qe.prototype,"iconHidden");bi([v({type:Boolean,reflect:!0})],Qe.prototype,"vertical");bi([v({type:String})],Qe.prototype,"label");var ku=Object.defineProperty,Cu=Object.getOwnPropertyDescriptor,rs=(i,t,e,s)=>{for(var n=s>1?void 0:s?Cu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&ku(t,e,n),n};const Xo=class Xo extends j{constructor(){super(...arguments),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this._animation=null}set hidden(t){this._hidden=t,this.isConnected&&(this.animatePanel(),this.dispatchEvent(new Event("hiddenchange")))}get hidden(){return this._hidden}get value(){return js(this,this.valueTransform)}get activationButton(){console.warn("[bim-panel] activationButton is deprecated. Wire up your own bim-button instead: btn.onclick = () => (panel.hidden = !panel.hidden).")}animatePanel(){var e;const t=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];(e=this._animation)==null||e.cancel(),this._animation=this.animate(t,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}disconnectedCallback(){super.disconnectedCallback()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return C`
      <div class="parent" role="region" aria-label=${this.label||this.name||J}>
        ${this.label||this.name||this.icon?C`
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
    `}};Xo.styles=[Ae.scrollbar,N`
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

    `];let le=Xo;rs([v({type:String,reflect:!0})],le.prototype,"icon",2);rs([v({type:String,reflect:!0})],le.prototype,"name",2);rs([v({type:String,reflect:!0})],le.prototype,"label",2);rs([v({type:Boolean,reflect:!0})],le.prototype,"hidden",1);rs([v({type:Boolean,attribute:"header-hidden",reflect:!0})],le.prototype,"headerHidden",2);var Su=Object.defineProperty,as=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Su(t,e,n),n};const Ko=class Ko extends j{constructor(){super(...arguments),this.valueTransform={}}connectedCallback(){super.connectedCallback(),this.fixed===void 0&&(this.fixed=!this.closest("bim-panel"))}get value(){const t=this.parentElement;let e;return t instanceof le&&(e=t.valueTransform),Object.keys(this.valueTransform).length!==0&&(e=this.valueTransform),js(this,e)}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}onHeaderKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.onHeaderClick())}render(){const t=this.label||this.icon||this.name||this.fixed,e=C`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
      aria-hidden="true"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=C`
      <div
        class="header"
        role="button"
        tabindex=${this.fixed?-1:0}
        aria-expanded=${!this.collapsed}
        title=${this.label||J}
        @click=${this.onHeaderClick}
        @keydown=${this.onHeaderKeydown}
      >
        ${this.label||this.icon||this.name?C`<bim-label aria-hidden="true" .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="header-end">
          <slot name="header-end"></slot>
          ${this.fixed?null:e}
        </div>
      </div>
    `;return C`
      <div class="parent">
        ${t?s:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};Ko.styles=[Ae.scrollbar,N`
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

    `];let Ce=Ko;as([v({type:String,reflect:!0})],Ce.prototype,"icon");as([v({type:String,reflect:!0})],Ce.prototype,"label");as([v({type:String,reflect:!0})],Ce.prototype,"name");as([v({type:Boolean,reflect:!0})],Ce.prototype,"fixed");as([v({type:Boolean,reflect:!0})],Ce.prototype,"collapsed");var Mu=Object.defineProperty,Je=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Mu(t,e,n),n};const Go=class Go extends j{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._pendingValue=void 0,this._mutationObserver=new MutationObserver(()=>this._syncOptions()),this._options=[],this._value=null,this._onOptionClick=t=>{for(const e of Array.from(this.children))e instanceof Zt&&(e.checked=e===t);this._value=t,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},this._onKeyDown=t=>{const e=this._options;if(!e.length)return;const s=this._value?e.indexOf(this._value):0;let n=s;if(t.key==="ArrowRight"||t.key==="ArrowDown")t.preventDefault(),n=(s+1)%e.length;else if(t.key==="ArrowLeft"||t.key==="ArrowUp")t.preventDefault(),n=(s-1+e.length)%e.length;else if(t.key==="Home")t.preventDefault(),n=0;else if(t.key==="End")t.preventDefault(),n=e.length-1;else return;this._onOptionClick(e[n]),this.updateComplete.then(()=>{var r;(r=this.renderRoot.querySelectorAll(".option")[n])==null||r.focus()})}}set value(t){const e=this._findOption(t);if(!e){this._pendingValue=t;return}this._pendingValue=void 0;for(const s of Array.from(this.children))s instanceof Zt&&(s.checked=s===e);this._value=e,this._canEmitEvents&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}get value(){var t;return(t=this._value)==null?void 0:t.value}connectedCallback(){super.connectedCallback(),this._mutationObserver.observe(this,{childList:!0}),customElements.whenDefined("bim-option").then(()=>this._syncOptions())}disconnectedCallback(){super.disconnectedCallback(),this._mutationObserver.disconnect()}firstUpdated(){const t=Array.from(this.children).find(e=>e instanceof Zt&&e.checked);t&&(this._value=t),this._canEmitEvents=!0}_syncOptions(){this._options=Array.from(this.children).filter(t=>t.tagName==="BIM-OPTION"),this._pendingValue!==void 0&&(this.value=this._pendingValue)}_findOption(t){for(const e of Array.from(this.children))if(e instanceof Zt&&(e.label===t||e.value===t))return e}render(){return C`
      <bim-input .vertical=${this.vertical} .label=${this.label} .icon=${this.icon}>
        <div
          class="options"
          role="tablist"
          aria-label=${Ti(this.label)}
          @keydown=${this._onKeyDown}
        >
          ${this._options.map(t=>{const e=t===this._value;return C`
              <div
                class="option ${e?"checked":""}"
                role="tab"
                aria-selected=${e}
                tabindex=${e?0:-1}
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
    `}};Go.styles=N`
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
  `;let Ut=Go;Je([v({type:String,reflect:!0})],Ut.prototype,"name");Je([v({type:String,reflect:!0})],Ut.prototype,"icon");Je([v({type:String,reflect:!0})],Ut.prototype,"label");Je([v({type:Boolean,reflect:!0})],Ut.prototype,"vertical");Je([v({type:String,reflect:!0})],Ut.prototype,"variant");Je([ut()],Ut.prototype,"_options");Je([ut()],Ut.prototype,"_value");function Au(i,t,e){if(t.length===0||i.length===0)return i;const s=si.flattenData(i);return Co(s,t,e)}function Co(i,t,e){if(t.length===0)return i;const[s,...n]=t,o=e==null?void 0:e[s];return o?Du(i,s,o,n,e):Eu(i,s,n,e)}function Du(i,t,e,s,n){const o=new Map;for(const r of i){const a=r.data[t];if(a===void 0)continue;const l=e(a,r.data),c=l.join("|");o.has(c)||o.set(c,{path:l,rows:[]}),o.get(c).rows.push(r)}return Pu(o,t,s,n)}function Pu(i,t,e,s){const n=new Ou;for(const{path:o,rows:r}of i.values())n.addPath(o,r,t);return n.buildResult(e,s)}function Eu(i,t,e,s){const n=new Map;for(const r of i){const a=r.data[t];n.has(a)||n.set(a,[]),n.get(a).push(r)}const o=[];for(const[r,a]of n){const l=e.length>0?Co(a,e,s):a;o.push({data:{[t]:r},children:l,_isComputedGroup:!0})}return o}class Ou{constructor(){this.tree=new Map}addPath(t,e,s){let n=this.tree;for(let o=0;o<t.length;o++){const r=t[o];n.has(r)||n.set(r,{value:r,column:s,children:new Map,rows:[]});const a=n.get(r);o===t.length-1&&a.rows.push(...e),n=a.children}}buildResult(t,e){return this.convertMapToResult(this.tree,t,e)}convertMapToResult(t,e,s){const n=[];for(const o of t.values()){const r=[];if(o.children.size>0&&r.push(...this.convertMapToResult(o.children,e,s)),o.rows.length>0){const a=e.length>0?Co(o.rows,e,s):o.rows;r.push(...a)}n.push({data:{[o.column]:o.value},children:r,_isComputedGroup:!0})}return n}}const Tu=()=>C`
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
  `,Lu=()=>C`
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
  `;var Ru=Object.defineProperty,zu=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Ru(t,e,n),n};const Qo=class Qo extends j{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.table=null,this.group=null,this.row=null,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}get dataTransform(){var n,o,r,a;const t=(o=(n=this.row)==null?void 0:n.dataTransform)==null?void 0:o[this.column],e=(r=this.table)==null?void 0:r.dataTransform[this.column],s=(a=this.table)==null?void 0:a.defaultContentTemplate;return t||e||s}get headersTransform(){var t;return(t=this.table)==null?void 0:t.headersTransform[this.column]}_renderValue(t){return typeof t=="string"||typeof t=="boolean"||typeof t=="number"?C`<bim-label>${t}</bim-label>`:t}get templateValue(){var o;const{data:t,rowData:e,group:s}=this;if((o=this.row)!=null&&o.isHeader){const r=this.headersTransform;return r&&t!==null&&t!==void 0?this._renderValue(r(this.column)):t!=null?C`<bim-label>${t}</bim-label>`:J}const n=this.dataTransform;return n&&t!=null&&s?this._renderValue(n(t,e,s)):t!=null?C`<bim-label>${t}</bim-label>`:J}connectedCallback(){var t,e;super.connectedCallback(),(t=this.group)!=null&&t.data._isComputedGroup&&((e=this.table)!=null&&e.groupedBy.includes(this.column))?(this.style.gridColumn="1",this.style.gridRow="1"):this.style.gridArea=this.column.toString()}render(){return C`${this.templateValue}`}};Qo.styles=N`
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
  `;let qs=Qo;zu([v({type:String,reflect:!0})],qs.prototype,"column");const Jo=class Jo extends j{constructor(){super(...arguments),this._groups=[],this.group=this.closest("bim-table-group"),this._data=[],this.table=this.closest("bim-table")}get data(){var t;return((t=this.group)==null?void 0:t.data.children)??this._data}set data(t){this._data=t}clean(){for(const t of this._groups)t.remove();this._groups=[]}render(){return this.clean(),C`
      <slot></slot>
      ${this.data.map(t=>{var s;const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e.depth=(((s=this.group)==null?void 0:s.depth)??-1)+1,e})}
    `}};Jo.styles=N`
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
  `;let to=Jo;var $u=Object.defineProperty,Iu=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&$u(t,e,n),n};const Zo=class Zo extends j{constructor(){super(...arguments),this.childrenHidden=!0,this.table=null,this.depth=0,this.data={data:{}}}get rowElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-row"):null}get childrenElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-children"):null}get _isChildrenEmpty(){return!(this.data.children&&this.data.children.length!==0)}connectedCallback(){if(super.connectedCallback(),!this.table){this.childrenHidden=!0;return}const{expandedLevels:t}=this.table;typeof t=="number"?this.childrenHidden=this.depth>=t:this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}disconnectedCallback(){super.disconnectedCallback(),this.data={data:{}}}toggleChildren(t){this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,this.animateTableChildren(!0)}animateTableChildren(t=!0){if(!t){requestAnimationFrame(()=>{var c;const r=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(c=this.renderRoot.querySelector("bim-table-children"))==null?void 0:c.querySelector(".branch-vertical");r.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const e=500,s=0,n=200,o=350;requestAnimationFrame(()=>{var m;const r=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(m=this.renderRoot.querySelector("bim-table-children"))==null?void 0:m.querySelector(".branch-vertical"),h=()=>{var b;const g=(b=r==null?void 0:r.renderRoot)==null?void 0:b.querySelectorAll("bim-table-group");g==null||g.forEach((y,w)=>{y.style.setProperty("opacity","0"),y.style.setProperty("left","-30px");const x=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];y.animate(x,{duration:e/2,delay:50+w*s,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},d=()=>{const g=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(g,{duration:o,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},u=()=>{const g=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(g,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:s,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},f=()=>{var b;const g=(b=this.renderRoot.querySelector("bim-table-row"))==null?void 0:b.querySelector(".branch-horizontal");if(g){g.style.setProperty("transform-origin","center right");const y=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];g.animate(y,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},p=()=>{const g=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];c==null||c.animate(g,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(s+n)*.7})};h(),d(),u(),f(),p()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(e=>{var s,n,o;if(!this.childrenHidden){e.style.setProperty("transform","translateY(-50%) rotate(90deg)");const a=(s=e.parentElement)==null?void 0:s.querySelector(".branch-horizontal");a&&a.style.setProperty("transform","scaleX(0)");const l=(o=(n=e.parentElement)==null?void 0:n.parentElement)==null?void 0:o.querySelectorAll(".branch-vertical");l==null||l.forEach(c=>{c.style.setProperty("transform","scaleY(1)")})}})}render(){var c,h;if(!this.table)return C`${J}`;const t=this.table.getGroupIndentation(this.data)??0;let e;if(!this.table.noIndentation){const d={left:`calc(${t-1} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows?2.05:.5625}rem)`};e=C`<div style=${pe(d)} class="branch branch-horizontal"></div>`}const s=C`
      ${this.table.noIndentation?null:C`
            <style>
              .branch-vertical {
                left: calc(${t} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows?1.9375:.5625}rem);
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `;let n;if(!this.table.noIndentation){const d=document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.setAttribute("height","9.9"),d.setAttribute("width","7.5"),d.setAttribute("viewBox","0 0 4.6666672 7.7"),this.table.noCarets){const p=document.createElementNS("http://www.w3.org/2000/svg","circle");p.setAttribute("cx","2.3333336"),p.setAttribute("cy","3.85"),p.setAttribute("r","2.5"),d.append(p)}else{const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),d.append(p)}const u={left:`calc(${t} * var(--bim-table--indent-step, 1rem) + ${this.table.selectableRows?1.5:.125}rem)`,cursor:`${this.table.noCarets?"unset":"pointer"}`};n=C`<div @click=${p=>{var m;(m=this.table)!=null&&m.noCarets||(p.stopPropagation(),this.toggleChildren())}} style=${pe(u)} class="caret">${d}</div>`}const o=((c=this.data.children)==null?void 0:c.some(d=>d._isComputedGroup))??!1,r=!this._isChildrenEmpty&&(!((h=this.table)!=null&&h.groupsOnly)||o);let a;return r&&!this.childrenHidden&&(a=C`
        <bim-table-children ${Pt(u=>{if(!u)return;const f=u;f.table=this.table,f.group=this})}>${s}</bim-table-children>
      `),C`
      <div class="parent">
        <bim-table-row ${Pt(d=>{var f;if(!d)return;const u=d;u.table=this.table,u.group=this,(f=this.table)==null||f.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:u}}))})}>
          ${ne(r,()=>s)}
          ${ne(t!==0,()=>e)}
          ${ne(!this.table.noIndentation&&r,()=>n)}
        </bim-table-row>
        ${a}
      </div>
    `}};Zo.styles=N`
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
  `;let Ys=Zo;Iu([v({type:Boolean,attribute:"children-hidden",reflect:!0})],Ys.prototype,"childrenHidden");var Fu=Object.defineProperty,pn=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Fu(t,e,n),n};const tr=class tr extends j{constructor(){super(...arguments),this.selected=!1,this.group=null,this._data={},this.isHeader=!1,this.table=null,this.onTableColumnsChange=()=>{this.table&&this.requestUpdate()},this._intersecting=!1,this._timeOutDelay=250,this._observer=new IntersectionObserver(t=>{window.clearTimeout(this._intersectTimeout),this._intersectTimeout=void 0,t[0].isIntersecting?this._intersectTimeout=window.setTimeout(()=>{this._intersecting=!0},this._timeOutDelay):this._intersecting=!1},{rootMargin:"36px"}),this._isRangeClick=!1,this._onCheckboxClick=t=>{var s;t.stopPropagation();const e=((s=this.table)==null?void 0:s.rangeSelectKey)??"ctrlKey";this._isRangeClick=t[e]},this._headerCheckboxUpdatePending=!1,this._onDataSelected=()=>{var t;if(this.isHeader){this._updateHeaderCheckbox();return}this.toggleAttribute("selected",(t=this.table)==null?void 0:t.selection.has(this.data))},this._onDataDeselected=()=>{var t;if(this.isHeader){this._updateHeaderCheckbox();return}(t=this.table)!=null&&t.selection.has(this.data)||this.removeAttribute("selected")},this._onDataSelectionCleared=()=>{if(this.isHeader){this._updateHeaderCheckbox();return}this.removeAttribute("selected")},this.dataTransform=null,this._interval=null,this.clearDataTransform=()=>{this.dataTransform=null,this._interval!==null&&(clearInterval(this._interval),this._interval=null)}}get columns(){var t;return((t=this.table)==null?void 0:t.columns)??[]}get hiddenColumns(){var t;return((t=this.table)==null?void 0:t.hiddenColumns)??[]}get groupData(){var t;return(t=this.group)==null?void 0:t.data}get data(){var t;return((t=this.group)==null?void 0:t.data.data)??this._data}set data(t){this._data=t}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;if(this.isHeader||(this.selected=e.value),e.value)if(!this.isHeader&&this._isRangeClick&&this.table._lastSelectedData){const s=si.flattenData(this.table.value).map(r=>r.data),n=s.indexOf(this.table._lastSelectedData),o=s.indexOf(this.data);if(n!==-1&&o!==-1){const[r,a]=n<o?[n,o]:[o,n];this.table.selection.add(...s.slice(r,a+1))}}else{let s=[this.data];this.isHeader&&(s=si.flattenData(this.table.value).map(n=>n.data)),this.table.selection.add(...s),this.isHeader&&this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}})),this.isHeader||(this.table._lastSelectedData=this.data)}else this.isHeader?this.table.selection.clear():(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})));this._isRangeClick=!1}firstUpdated(t){super.firstUpdated(t),queueMicrotask(()=>{if(!this.isConnected)return;const e=this.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0&&(this._intersecting=!0),this._observer.observe(this)})}_updateHeaderCheckbox(){this._headerCheckboxUpdatePending||(this._headerCheckboxUpdatePending=!0,requestAnimationFrame(()=>{this._headerCheckboxUpdatePending=!1;const t=this.renderRoot.querySelector("bim-checkbox");if(!t||!this.table)return;const e=si.flattenData(this.table.value).map(n=>n.data),s=e.filter(n=>this.table.selection.has(n)).length;t.checked=s>0&&s===e.length,t.indeterminate=s>0&&!t.checked}))}connectedCallback(){super.connectedCallback(),this.table&&(this.table.addEventListener("dataselected",this._onDataSelected),this.table.addEventListener("datadeselected",this._onDataDeselected),this.table.addEventListener("dataselectioncleared",this._onDataSelectionCleared),this.toggleAttribute("selected",this._isSelected),this.table.addEventListener("columnschange",this.onTableColumnsChange))}disconnectedCallback(){var t,e,s;super.disconnectedCallback(),this._observer.unobserve(this),(t=this.table)==null||t.removeEventListener("dataselected",this._onDataSelected),(e=this.table)==null||e.removeEventListener("datadeselected",this._onDataDeselected),(s=this.table)==null||s.removeEventListener("dataselectioncleared",this._onDataSelectionCleared),this.data={},this.table=null}applyAdaptativeDataTransform(t){this.addEventListener("pointerenter",()=>{this.dataTransform=t,this._interval=window.setInterval(()=>{this.matches(":hover")||this.clearDataTransform()},50)})}render(){var c,h,d;if(!(this.table&&this._intersecting))return C`${J}`;const t=this.columns.filter(u=>!this.hiddenColumns.includes(u.name)),e=t.map(u=>u.name),s=t.map(u=>u.width);this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${e.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${s.join(" ")}`;let n=!1,o=!1;if(this.isHeader&&this.table.selectableRows){const u=si.flattenData(this.table.value).map(p=>p.data),f=u.filter(p=>this.table.selection.has(p)).length;n=f>0&&f===u.length,o=f>0&&!n}const r=this.table.getRowIndentation(this.data)??0,a=[];let l=this.data;if((c=this.groupData)!=null&&c._isComputedGroup){const u=this.table.dataKeys.filter(f=>{var p;return!((p=this.table)!=null&&p.hiddenColumns.includes(f))});for(const f of u)e.indexOf(f)!==0&&(l[f]="")}for(const u in l){if(!((h=this.groupData)!=null&&h._isComputedGroup)&&this.hiddenColumns.includes(u))continue;const f=document.createElement("bim-table-cell");f.group=this.group,f.table=this.table,f.row=this,f.column=u;const p=(d=this.group)!=null&&d.data._isComputedGroup&&this.table.groupedBy.includes(u)?0:e.indexOf(u);p===0&&(f.style.marginLeft=this.table.noIndentation?"0":`calc(${r} * var(--bim-table--indent-step, 1rem) + 0.9375rem)`),f.setAttribute("data-column-index",String(p)),f.toggleAttribute("data-no-indentation",p===0&&this.table.noIndentation),f.toggleAttribute("data-cell-header",this.isHeader),f.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:f}})),a.push(f)}return this._timeOutDelay=0,C`
      ${this.table.selectableRows?C`<bim-checkbox
            @click=${this._onCheckboxClick}
            @change=${this.onSelectionChange}
            .checked=${this.isHeader?n:this._isSelected??!1}
            .indeterminate=${o}
            .disabled=${this.table.rowsSelectionDisabled}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${a}
      <slot></slot>
    `}};tr.styles=N`
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
  `;let qe=tr;pn([v({type:Boolean,reflect:!0})],qe.prototype,"selected");pn([v({type:Boolean,attribute:"is-header",reflect:!0})],qe.prototype,"isHeader");pn([ut()],qe.prototype,"_intersecting");pn([ut()],qe.prototype,"dataTransform");var Bu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,rt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Vu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Bu(t,e,n),n},gi;const st=(gi=class extends j{constructor(){super(),this._value=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.headersTransform={},this.groupingTransform={},this.selectableRows=!1,this.selection=new ud,this.rowsSelectionDisabled=!1,this.noIndentation=!1,this.noCarets=!1,this.groupsOnly=!1,this.loading=!1,this._groupedBy=[],this._lastSelectedData=null,this.rangeSelectKey="ctrlKey",this._errorLoading=!1,this._defaultVisibility=!0,this._visibilityExceptions=[],this.defaultContentTemplate=t=>C`<bim-label style="white-space: normal; user-select: text;"
      >${t}</bim-label
    >`,this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=Jn(t)??[];for(const o of n){if("queries"in o){s=!1;break}const{condition:r,value:a}=o;let{key:l}=o;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(u=>u.includes(c)).map(u=>Ar(e.data[u],r,a)).some(u=>u)}else s=Ar(e.data[l],r,a);if(!s)break}return s},this.selection.deleteGuard=()=>!this.rowsSelectionDisabled,this.selection.onItemAdded.add(t=>this.emitDataSelected({data:t})),this.selection.onItemDeleted.add(t=>this.emitDataDeselected({data:t})),this.selection.onCleared.add(()=>{this.emitDataCleared(),this._lastSelectedData=null})}static flattenData(t){const e=[];for(const s of t)e.push({data:s.data}),s.children&&s.children.length>0&&e.push(...gi.flattenData(s.children));return e}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns){const{name:s}=e;t[s]=String(s)}return t}get value(){return this._value}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateValue(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateValue(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set groupedBy(t){this._groupedBy=t,this.updateValue()}get groupedBy(){return this._groupedBy}set defaultVisibility(t){this._defaultVisibility=t}get defaultVisibility(){return this._defaultVisibility}set visibilityExceptions(t){this._visibilityExceptions=t}get visibilityExceptions(){return this._visibilityExceptions}set hiddenColumns(t){this.defaultVisibility=!0,this.visibilityExceptions=t}get hiddenColumns(){const t=this.dataKeys,e=[];for(const s of t){const n=this._visibilityExceptions.includes(s);(this._defaultVisibility?n:!n)&&e.push(s)}return e}set visibleColumns(t){this.defaultVisibility=!1,this.visibilityExceptions=t}get visibleColumns(){const t=this.dataKeys,e=[];for(const s of t){const n=this._visibilityExceptions.includes(s);(this._defaultVisibility?!n:n)&&e.push(s)}return e}emitDataSelected(t){this.dispatchEvent(new CustomEvent("dataselected",{detail:t}))}emitDataDeselected(t){this.dispatchEvent(new CustomEvent("datadeselected",{detail:t}))}emitDataCleared(){this.dispatchEvent(new Event("dataselectioncleared"))}filterData(t=this.data){let e=[];if(this.queryString){let s=this.filterFunction;s||(s=Jn(this.queryString)?this._queryFilterFunction:this._stringFilterFunction),e=this.filter(this.queryString,s,t),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)}else this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),e=t;return e}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:o}=s;for(const r in o)this._columns.map(l=>typeof l=="string"?l:l.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const r=this.computeMissingColumns(n);r&&!e&&(e=r)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const o=this._textDelimiters[t];let r="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(r+=`Indentation${o}`);const l=`${a.join(o)}
`;r+=l}for(const[l,c]of e.entries()){const{data:h,children:d}=c,u=this.indentationInText?`${s}${l+1}${o}`:"",f=a.map(m=>h[m]??""),p=`${u}${f.join(o)}
`;r+=p,d&&(r+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return r}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}get dataKeys(){const t=new Set,e=s=>{for(const n of s){for(const o in n.data)t.add(o);n.children&&e(n.children)}};return e(this.data),Array.from(t)}applyDataTransform(t){const e={};if(!t)return e;const{data:s}=t.data;for(const o of Object.keys(this.dataTransform)){const r=this.columns.find(a=>a.name===o);r&&r.forceDataTransform&&(o in s||(s[o]=""))}const n=s;for(const o in n){const r=this.dataTransform[o];r?e[o]=r(n[o],s,t):e[o]=s[o]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const o=this.getRowIndentation(t,n.children,s+1);if(o!==null)return o}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const o=this.getGroupIndentation(t,n.children,s+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._value.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._value.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-table-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}groupData(t=this.data){return Au(t,this.groupedBy,this.groupingTransform)}updateValue(){const t=this.filterData(),e=this.groupData(t);this._value=e}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const o of s)if(e(t,o)){if(this.preserveStructureOnFilter){const a={data:o.data};if(o.children){const l=this.filter(t,e,o.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:o.data}),o.children){const a=this.filter(t,e,o.children);n.push(...a)}}else if(o.children){const a=this.filter(t,e,o.children);this.preserveStructureOnFilter&&a.length?n.push({data:o.data,children:a}):n.push(...a)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}getGroupingMessageTemplate(){if(this.groupedBy.length===0)return J;const t=this.groupedBy.join(" → ");return C`
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
        Grouped By: ${t}
      </bim-label>
    `}render(){if(this.loading)return Tu();if(this._errorLoading)return C`<slot name="error-loading"></slot>`;if(this._value.length===0&&this._missingDataElement)return C`<slot name="missing-data"></slot>`;const t=s=>{if(!s)return;const n=s;n.table=this,n.data=this._headerRowData,n.requestUpdate()},e=s=>{if(!s)return;const n=s;n.table=this,n.data=this.value,n.requestUpdate()};return C`
      <div class="parent">
        ${Lu()}
        <div
          style="
          grid-area: Header;
          position: sticky;
          top: 0;
          z-index: 5;
        "
        >
          ${ne(!this.headersHidden,()=>C`<bim-table-row
                is-header
                ${Pt(t)}
              ></bim-table-row>`)}
          ${this.getGroupingMessageTemplate()}
        </div>
        <div style="overflow-x: hidden; grid-area: Body">
          <bim-table-children
            ${Pt(e)}
            style="grid-area: Body; background-color: transparent"
          ></bim-table-children>
        </div>
      </div>
    `}},gi.styles=[Ae.scrollbar,N`
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
    `],gi);rt([ut()],st.prototype,"_value",2);rt([v({type:Boolean,attribute:"headers-hidden",reflect:!0})],st.prototype,"headersHidden",2);rt([v({type:String,attribute:"min-col-width",reflect:!0})],st.prototype,"minColWidth",2);rt([v({type:Array,attribute:!1})],st.prototype,"columns",1);rt([v({type:Array,attribute:!1})],st.prototype,"data",1);rt([v({type:Boolean,reflect:!0})],st.prototype,"expanded",2);rt([v({type:Number,attribute:"expanded-levels",reflect:!0})],st.prototype,"expandedLevels",2);rt([v({attribute:!1})],st.prototype,"headersTransform",2);rt([v({attribute:!1})],st.prototype,"groupingTransform",2);rt([v({type:Boolean,reflect:!0,attribute:"selectable-rows"})],st.prototype,"selectableRows",2);rt([v({type:Boolean,attribute:"rows-selection-disabled",reflect:!0})],st.prototype,"rowsSelectionDisabled",2);rt([v({type:Boolean,attribute:"no-indentation",reflect:!0})],st.prototype,"noIndentation",2);rt([v({type:Boolean,attribute:"no-carets",reflect:!0})],st.prototype,"noCarets",2);rt([v({type:Boolean,attribute:"groups-only",reflect:!0})],st.prototype,"groupsOnly",2);rt([v({type:Boolean,reflect:!0})],st.prototype,"loading",2);rt([v({type:String,attribute:"grouped-by",reflect:!0,converter:{toAttribute:i=>Array.isArray(i)&&i.length>0?i.join(","):null,fromAttribute:i=>i&&i.trim()!==""?i.split(",").map(t=>t.trim()):[]}})],st.prototype,"groupedBy",1);rt([v({type:String,attribute:"range-select-key",reflect:!0})],st.prototype,"rangeSelectKey",2);rt([ut()],st.prototype,"_errorLoading",2);rt([v({type:Boolean,attribute:"columns-hidden",reflect:!0,converter:{toAttribute:i=>i?null:"",fromAttribute:i=>i===null}})],st.prototype,"defaultVisibility",1);rt([v({type:String,attribute:"visibility-exceptions",reflect:!0,converter:{toAttribute:i=>Array.isArray(i)&&i.length>0?i.join(","):null,fromAttribute:i=>i&&i.trim()!==""?i.split(",").map(t=>t.trim()):[]}})],st.prototype,"visibilityExceptions",1);let si=st;var Hu=Object.defineProperty,ju=Object.getOwnPropertyDescriptor,mn=(i,t,e,s)=>{for(var n=s>1?void 0:s?ju(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Hu(t,e,n),n};const er=class er extends j{constructor(){super(),this._defaultName="__unnamed__",this._autoNamed=!1,this.name=this._defaultName,this._hidden=!1,this.setAttribute("role","tabpanel")}set label(t){this._label=t,this.dispatchEvent(new CustomEvent("tab-update",{bubbles:!0}))}get label(){return this._label}set icon(t){this._icon=t,this.dispatchEvent(new CustomEvent("tab-update",{bubbles:!0}))}get icon(){return this._icon}set hidden(t){const e=this._hidden;this._hidden=t,this.requestUpdate("hidden",e),this.dispatchEvent(new CustomEvent("hiddenchange",{detail:{hidden:t}}))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&(this.name===this._defaultName||this._autoNamed)){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`,this._autoNamed=!0}}render(){return C`<slot></slot>`}};er.styles=N`
    :host {
      display: block;
      height: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
    }

    :host([hidden]) {
      display: none;
    }
  `;let pt=er;mn([v({type:String,reflect:!0})],pt.prototype,"name",2);mn([v({type:String,reflect:!0})],pt.prototype,"label",1);mn([v({type:String,reflect:!0})],pt.prototype,"icon",1);mn([v({type:Boolean,reflect:!0})],pt.prototype,"hidden",1);var Nu=Object.defineProperty,Wu=Object.getOwnPropertyDescriptor,he=(i,t,e,s)=>{for(var n=s>1?void 0:s?Wu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Nu(t,e,n),n};const ir=class ir extends j{constructor(){super(...arguments),this._switcherData=[],this._useDropdown=!1,this._initialized=!1,this._updatingTab=!1,this._dialogRef=xe(),this._triggerRef=xe(),this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.switchersCompact=!1,this._onTabHiddenChange=t=>{if(this._updatingTab)return;const e=t.target;e instanceof pt&&!e.hidden&&(this.tab=e.name)},this._updateSwitchers=()=>{for(const t of this.children){if(!(t instanceof pt))continue;const e=this._switcherData.find(s=>s.name===t.name);e&&(e.label=t.label,e.icon=t.icon)}this.requestUpdate()},this._onSwitchersKeyDown=t=>{const e=[...this.renderRoot.querySelectorAll(".switcher")],s=e.length;if(!s)return;const n=e.findIndex(a=>a.getAttribute("data-name")===this._tab);let o=n;if(t.key==="ArrowRight"||t.key==="ArrowDown")t.preventDefault(),o=(n+1)%s;else if(t.key==="ArrowLeft"||t.key==="ArrowUp")t.preventDefault(),o=(n-1+s)%s;else if(t.key==="Home")t.preventDefault(),o=0;else if(t.key==="End")t.preventDefault(),o=s-1;else return;const r=e[o];r&&(this.tab=r.getAttribute("data-name")??void 0,r.focus())}}set tab(t){if(!this._initialized&&t&&t!=="hidden"){this._pendingTab=t;return}const e=this._tab,s=[...this.children],n=s.find(o=>o instanceof pt&&o.name===t);this._tab=n?t:"hidden",this._updatingTab=!0;for(const o of s)o instanceof pt&&(o.hidden=n!==o);this._updatingTab=!1,this.requestUpdate("tab",e)}get tab(){return this._tab}connectedCallback(){super.connectedCallback(),this.addEventListener("tab-update",this._updateSwitchers)}disconnectedCallback(){var t,e;super.disconnectedCallback(),this.removeEventListener("tab-update",this._updateSwitchers);for(const s of this.children)s instanceof pt&&s.removeEventListener("hiddenchange",this._onTabHiddenChange);(t=this._ro)==null||t.disconnect(),(e=this._dialogRef.value)==null||e.close()}firstUpdated(){this._ro=new ResizeObserver(()=>this._checkOverflow()),this._ro.observe(this),requestAnimationFrame(()=>this._checkOverflow())}updated(t){super.updated(t),t.has("_switcherData")&&requestAnimationFrame(()=>this._checkOverflow())}_checkOverflow(){const t=this.renderRoot.querySelector(".switchers-measure");if(!t)return;const e=t.offsetWidth,s=this.clientWidth,n=e>s;n!==this._useDropdown&&(this._useDropdown=n)}_onTriggerClick(){const t=this._dialogRef.value,e=this._triggerRef.value;if(!t||!e)return;if(t.open){t.close();return}const s=e.getBoundingClientRect();t.style.top=`${s.top}px`,t.style.left=`${s.right+4}px`,t.showModal();const n=t.getBoundingClientRect();n.right>window.innerWidth-4&&(t.style.left=`${s.left-n.width-4}px`),n.bottom>window.innerHeight-4&&(t.style.top=`${Math.max(4,window.innerHeight-n.height-4)}px`)}_onDialogClick(t){const e=t.currentTarget,s=e.getBoundingClientRect();(t.clientX<s.left||t.clientX>s.right||t.clientY<s.top||t.clientY>s.bottom)&&e.close()}_createSwitchers(){this._switcherData=[];for(const t of this.children)t instanceof pt&&(t.id||(t.id=`bim-tab-panel-${t.name}`),this._switcherData.push({name:t.name,label:t.label,icon:t.icon,panelId:t.id}))}_onSlotChange(t){this._initialized=!0,this._createSwitchers();const s=t.target.assignedElements(),n=this._pendingTab??this._tab;this._pendingTab=void 0;const o=s.find(r=>r instanceof pt?n&&n!=="hidden"?r.name===n:!r.hidden:!1);o instanceof pt&&(this.tab=o.name);for(const r of s){if(!(r instanceof pt)){console.warn("[bim-tabs] Only bim-tab elements are allowed as children. Removing:",r),r.remove();continue}r.setAttribute("aria-label",r.label||r.name||""),r.removeEventListener("hiddenchange",this._onTabHiddenChange),o!==r&&(r.hidden=!0),r.addEventListener("hiddenchange",this._onTabHiddenChange)}}render(){const t=this._switcherData.find(e=>e.name===this._tab);return C`
      <div class="parent">
        <div class="switchers-measure" aria-hidden="true">
          ${this._switcherData.map(e=>C`
              <div class="switcher-ghost">
                <bim-label .icon=${e.icon}>${e.label??""}</bim-label>
              </div>
            `)}
        </div>
        <div
          class="switchers"
          role=${this._useDropdown?J:"tablist"}
          aria-label=${this.label??J}
          @keydown=${this._useDropdown?J:this._onSwitchersKeyDown}
        >
          ${this._useDropdown?C`
                <button
                  class="tab-trigger"
                  ${Pt(this._triggerRef)}
                  @click=${this._onTriggerClick}
                  aria-haspopup="listbox"
                >
                  <bim-label .icon=${t==null?void 0:t.icon}
                    >${(t==null?void 0:t.label)??""}</bim-label
                  >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M3 6l5 5 5-5" />
                  </svg>
                </button>
                <dialog ${Pt(this._dialogRef)} @click=${this._onDialogClick}>
                  ${this._switcherData.map(e=>{const s=this._tab===e.name;return C`<div
                      class="tab-option"
                      ?data-active=${s}
                      @click=${()=>{var n;this.tab=e.name,(n=this._dialogRef.value)==null||n.close()}}
                    >
                      <bim-label .icon=${e.icon}>${e.label??""}</bim-label>
                    </div>`})}
                </dialog>
              `:this._switcherData.map(e=>{const s=this._tab===e.name;return C`<div
                  class="switcher"
                  data-name=${e.name}
                  role="tab"
                  aria-selected=${s}
                  tabindex=${s?0:-1}
                  aria-controls=${e.panelId}
                  ?data-active=${s}
                  @click=${()=>{if(this._tab===e.name){this.floating&&(this.tab=void 0);return}this.tab=e.name}}
                ><bim-label .icon=${e.icon}>${e.label??""}</bim-label></div>`})}
        </div>
        <div class="content">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
      </div>
    `}};ir.styles=[Ae.scrollbar,N`
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
        overflow: hidden;
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

      /* Invisible measure strip — always rendered to detect overflow */
      .switchers-measure {
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        visibility: hidden;
        pointer-events: none;
        display: flex;
        flex-wrap: nowrap;
      }

      .switcher-ghost {
        padding: 0 0.75rem;
        display: flex;
        align-items: center;
        min-height: var(--bim-tabs-switcher--minh, 30px);
        flex-shrink: 0;
        white-space: nowrap;
      }

      /* Overflow dropdown trigger */
      .tab-trigger {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        all: unset;
        box-sizing: border-box;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.375rem;
        padding: 0 0.75rem;
        cursor: pointer;
        min-height: var(--bim-tabs-switcher--minh, 30px);
        user-select: none;
      }

      .tab-trigger svg {
        flex-shrink: 0;
      }

      .tab-trigger:hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .tab-trigger:focus-visible {
        outline: 2px solid var(--bim-ui_accent-base);
        outline-offset: -2px;
      }

      /* Overflow dropdown dialog */
      dialog {
        position: fixed;
        margin: 0;
        padding: 0.25rem 0;
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-contrast-10);
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        overflow: auto;
        max-height: 20rem;
        min-width: 8rem;
      }

      dialog::backdrop {
        background: transparent;
      }

      .tab-option {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        display: flex;
        align-items: center;
        padding: 0 0.75rem;
        min-height: var(--bim-tabs-switcher--minh, 30px);
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
      }

      .tab-option:hover {
        background-color: var(--bim-ui_bg-contrast-20);
      }

      .tab-option[data-active] {
        --bim-label--c: var(--bim-ui_bg-contrast-100);
        background-color: var(--bim-ui_bg-contrast-30);
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
    `];let Ot=ir;he([ut()],Ot.prototype,"_switcherData",2);he([ut()],Ot.prototype,"_useDropdown",2);he([v({type:Boolean,reflect:!0})],Ot.prototype,"bottom",2);he([v({type:Boolean,attribute:"switchers-hidden",reflect:!0})],Ot.prototype,"switchersHidden",2);he([v({type:Boolean,reflect:!0})],Ot.prototype,"floating",2);he([v({type:String,reflect:!0})],Ot.prototype,"label",2);he([v({type:String,reflect:!0})],Ot.prototype,"tab",1);he([v({type:Boolean,attribute:"switchers-full",reflect:!0})],Ot.prototype,"switchersFull",2);he([v({type:Boolean,attribute:"switchers-compact",reflect:!0})],Ot.prototype,"switchersCompact",2);var Uu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,Mt=(i,t,e,s)=>{for(var n=s>1?void 0:s?qu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Uu(t,e,n),n},Ne;const kt=(Ne=class extends j{constructor(){super(...arguments),this._type="text",this._cachedQuery=void 0,this._dirty=!1,this.value="",this.vertical=!1,this.disabled=!1,this.iconInside=!1,this.resize="vertical",this.onValueChange=new Event("input")}set type(t){Ne._inputTypes.includes(t)?this._type=t:console.warn(`[bim-text-input] Unknown type "${t}". Ignored.`)}get type(){return this._type}get query(){return this._cachedQuery===void 0&&(this._cachedQuery=Jn(this.value)),this._cachedQuery}get validation(){return this._validation}set validation(t){this._validation=t,this.requestUpdate()}get isValid(){var t;return this._dirty?((t=this._currentValidation)==null?void 0:t.valid)??!0:!0}willUpdate(t){t.has("value")&&(this._cachedQuery=void 0),this._currentValidation=this._validation?this._validation(this.value):void 0}updated(){this.toggleAttribute("invalid",!this.isValid)}onInputChange(t){this._dirty=!0,t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this.debounce==null?(this.value=e.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))):this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))},this.debounce)}async focus(){var e;await this.updateComplete;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input, textarea");t==null||t.focus()}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this._debounceTimeoutID)}render(){var s;const t=this.iconInside&&this.type!=="area",e=t?void 0:this.icon;return C`
      <div class="parent">
        ${this.label||e?C`<bim-label .icon=${e}>${this.label}</bim-label>`:J}
        <div class="input">
          ${t&&this.icon?C`<bim-label .icon=${this.icon}></bim-label>`:J}
          ${this.type==="area"?C`<textarea
                aria-label=${this.label||"Text Input"}
                .value=${this.value}
                .rows=${this.rows??5}
                ?disabled=${this.disabled}
                placeholder=${Ti(this.placeholder)}
                @input=${this.onInputChange}
                style=${pe({"--bim-text-input--resize":this.resize})}
              ></textarea>`:C`<input
                aria-label=${this.label||"Text Input"}
                .type=${this.type}
                .value=${this.value}
                ?disabled=${this.disabled}
                placeholder=${Ti(this.placeholder)}
                autocomplete=${Ti(this.autocomplete)}
                @input=${this.onInputChange}
              />`}
        </div>
      </div>
      ${!this.isValid&&((s=this._currentValidation)!=null&&s.message)?C`<span class="validation-message">${this._currentValidation.message}</span>`:J}
    `}},Ne.styles=[Ae.scrollbar,N`
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
    `],Ne._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],Ne);Mt([v({type:String,reflect:!0})],kt.prototype,"icon",2);Mt([v({type:String,reflect:!0})],kt.prototype,"label",2);Mt([v({type:String,reflect:!0})],kt.prototype,"name",2);Mt([v({type:String,reflect:!0})],kt.prototype,"placeholder",2);Mt([v({type:String})],kt.prototype,"value",2);Mt([v({type:Boolean,reflect:!0})],kt.prototype,"vertical",2);Mt([v({type:Number})],kt.prototype,"debounce",2);Mt([v({type:Number})],kt.prototype,"rows",2);Mt([v({type:Boolean,reflect:!0})],kt.prototype,"disabled",2);Mt([v({type:String,reflect:!0})],kt.prototype,"autocomplete",2);Mt([v({type:Boolean,reflect:!0,attribute:"icon-inside"})],kt.prototype,"iconInside",2);Mt([v({type:String,reflect:!0})],kt.prototype,"resize",2);Mt([v({type:String,reflect:!0})],kt.prototype,"type",1);let Yu=kt;var Xu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Kl=(i,t,e,s)=>{for(var n=Ku(t,e),o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Xu(t,e,n),n};const sr=class sr extends j{constructor(){super(...arguments),this._rows=2,this._vertical=!1,this._rafId=0,this._scheduleUpdateChildren=()=>{cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(()=>this.updateChildren())}}set rows(t){this._rows=Math.max(1,Math.floor(t))}get rows(){return this._rows}set vertical(t){t!==this._vertical&&(this._vertical=t,this.updateChildren())}get vertical(){return this._vertical}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","group")}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this._rafId)}updated(){this.style.setProperty("--_flow",this.vertical?"row":"column"),this.style.setProperty("--_rows",String(this.rows))}updateChildren(){for(const t of this.children)t.tagName.startsWith("BIM-")&&t.toggleAttribute("label-hidden",this.vertical)}render(){return C`
      <div class="parent">
        <slot @slotchange=${this._scheduleUpdateChildren}></slot>
      </div>
    `}};sr.styles=N`
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
  `;let di=sr;Kl([v({type:Number,reflect:!0})],di.prototype,"rows");Kl([v({type:Boolean,reflect:!0})],di.prototype,"vertical");var Gu=Object.defineProperty,Qu=Object.getOwnPropertyDescriptor,ls=(i,t,e,s)=>{for(var n=s>1?void 0:s?Qu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Gu(t,e,n),n};const nr=class nr extends j{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1,this._rafId=0,this._scheduleUpdateChildren=()=>{cancelAnimationFrame(this._rafId),this._rafId=requestAnimationFrame(()=>this.updateChildren())}}set vertical(t){t!==this._vertical&&(this._vertical=t,this.updateChildren())}get vertical(){return this._vertical}set labelHidden(t){t!==this._labelHidden&&(this._labelHidden=t,this.updateChildren())}get labelHidden(){return this._labelHidden}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","group")}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this._rafId)}updated(){this.label&&this.setAttribute("aria-label",this.label)}updateChildren(){for(const t of this.children)t.tagName.startsWith("BIM-")&&(t instanceof di&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical))}render(){return C`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this._scheduleUpdateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?C`<bim-label class="name" .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};nr.styles=N`
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
  `;let ce=nr;ls([v({type:String,reflect:!0})],ce.prototype,"label",2);ls([v({type:String,reflect:!0})],ce.prototype,"name",2);ls([v({type:String,reflect:!0})],ce.prototype,"icon",2);ls([v({type:Boolean,reflect:!0})],ce.prototype,"vertical",1);ls([v({type:Boolean,attribute:"label-hidden",reflect:!0})],ce.prototype,"labelHidden",1);var Ju=Object.defineProperty,Gl=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Ju(t,e,n),n};const or=class or extends j{constructor(){super(...arguments),this.labelsHidden=!1,this.vertical=!1,this._onKeyDown=t=>{const e=Array.from(this.querySelectorAll("bim-button:not([disabled])"));if(!e.length)return;const s=e.indexOf(document.activeElement);if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))return;t.preventDefault();let n;t.key==="Home"?n=e[0]:t.key==="End"?n=e[e.length-1]:t.key==="ArrowRight"||t.key==="ArrowDown"?n=e[(s+1)%e.length]:n=e[(s-1+e.length)%e.length],n==null||n.focus()}}set hidden(t){super.hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return super.hidden}connectedCallback(){super.connectedCallback(),this.hasAttribute("role")||this.setAttribute("role","toolbar"),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDown)}updated(t){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal"),(t.has("vertical")||t.has("labelsHidden"))&&this.updateSections()}updateSections(){for(const t of this.children)t instanceof ce&&(t.labelHidden=this.labelsHidden||this.vertical&&!ai.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return C`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};or.styles=N`
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
  `;let Yi=or;Gl([v({type:Boolean,attribute:"labels-hidden",reflect:!0})],Yi.prototype,"labelsHidden");Gl([v({type:Boolean,reflect:!0})],Yi.prototype,"vertical");var Zu=Object.defineProperty,tf=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Zu(t,e,n),n};const rr=class rr extends j{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return C`
      <div class="parent">
        <slot></slot>
      </div>
    `}};rr.styles=N`
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
  `;let Xs=rr;tf([v({type:String,reflect:!0})],Xs.prototype,"name");var ef=Object.defineProperty,sf=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&ef(t,e,n),n};const ar=class ar extends j{constructor(){super(...arguments),this.charts=[],this._charts=[],this.labels=[]}willUpdate(t){const e=[];this.charts&&e.push(...this.charts),this._charts=[...new Set(e)]}_getLabelColorMap(t){const e={};return t.colors&&this.labels.forEach((s,n)=>{e[s]=t.colors[n%t.colors.length]}),e}_getHideEventData(){var e;const t={};for(const s in this.labels){const n=this.labels[s],o=[];for(const r of Object.values(this._charts[0].inputData.datasets))o.push((e=r[s])==null?void 0:e.data);t[n]=o}return t}render(){if(this._charts.length===0||!this._charts[0].data)return C`<slot name="no-chart"></slot>`;const t=this._charts[0];this.labels=t.inputData.labels;const e=this._getLabelColorMap(t),s=this._getHideEventData();return this.labels.length===0?C`<slot name="missing-data"></slot>`:C`
      <div class="parent">
        ${this.labels.map(n=>C`
            <div style="display: flex; gap: 0.25rem; align-items: center;">
              <span
                style="
                display: inline-block;
                width: 0.6rem;
                height: 0.6rem;
                border-radius: 50%;
                background: ${e[n]??"gray"};
              "
                aria-hidden="true"
              ></span>
              <bim-label
                @click=${o=>{const r=o.currentTarget,a=r.style.textDecoration==="line-through";r.style.textDecoration=a?"none":"line-through";const l=s[n];this.dispatchEvent(new CustomEvent("label-click",{detail:{label:n,data:l,visibility:a}}));for(const c of this._charts)c.filterByLabel(n)}}
              >
                ${n}
              </bim-label>
            </div>
          `)}
      </div>
    `}};ar.styles=N`
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
  `;let Ks=ar;sf([v({type:Array,attribute:!1,hasChanged:()=>!0})],Ks.prototype,"charts");/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function cs(i){return i+.5|0}const me=(i,t,e)=>Math.max(Math.min(i,e),t);function Di(i){return me(cs(i*2.55),0,255)}function _e(i){return me(cs(i*255),0,255)}function Qt(i){return me(cs(i/2.55)/100,0,1)}function $r(i){return me(cs(i*100),0,100)}const Dt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},eo=[..."0123456789ABCDEF"],nf=i=>eo[i&15],of=i=>eo[(i&240)>>4]+eo[i&15],us=i=>(i&240)>>4===(i&15),rf=i=>us(i.r)&&us(i.g)&&us(i.b)&&us(i.a);function af(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&Dt[i[1]]*17,g:255&Dt[i[2]]*17,b:255&Dt[i[3]]*17,a:t===5?Dt[i[4]]*17:255}:(t===7||t===9)&&(e={r:Dt[i[1]]<<4|Dt[i[2]],g:Dt[i[3]]<<4|Dt[i[4]],b:Dt[i[5]]<<4|Dt[i[6]],a:t===9?Dt[i[7]]<<4|Dt[i[8]]:255})),e}const lf=(i,t)=>i<255?t(i):"";function cf(i){var t=rf(i)?nf:of;return i?"#"+t(i.r)+t(i.g)+t(i.b)+lf(i.a,t):void 0}const hf=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Ql(i,t,e){const s=t*Math.min(e,1-e),n=(o,r=(o+i/30)%12)=>e-s*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function df(i,t,e){const s=(n,o=(n+i/60)%6)=>e-e*t*Math.max(Math.min(o,4-o,1),0);return[s(5),s(3),s(1)]}function uf(i,t,e){const s=Ql(i,1,.5);let n;for(t+e>1&&(n=1/(t+e),t*=n,e*=n),n=0;n<3;n++)s[n]*=1-t-e,s[n]+=t;return s}function ff(i,t,e,s,n){return i===n?(t-e)/s+(t<e?6:0):t===n?(e-i)/s+2:(i-t)/s+4}function So(i){const e=i.r/255,s=i.g/255,n=i.b/255,o=Math.max(e,s,n),r=Math.min(e,s,n),a=(o+r)/2;let l,c,h;return o!==r&&(h=o-r,c=a>.5?h/(2-o-r):h/(o+r),l=ff(e,s,n,h,o),l=l*60+.5),[l|0,c||0,a]}function Mo(i,t,e,s){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,s)).map(_e)}function Ao(i,t,e){return Mo(Ql,i,t,e)}function pf(i,t,e){return Mo(uf,i,t,e)}function mf(i,t,e){return Mo(df,i,t,e)}function Jl(i){return(i%360+360)%360}function gf(i){const t=hf.exec(i);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Di(+t[5]):_e(+t[5]));const n=Jl(+t[2]),o=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=pf(n,o,r):t[1]==="hsv"?s=mf(n,o,r):s=Ao(n,o,r),{r:s[0],g:s[1],b:s[2],a:e}}function bf(i,t){var e=So(i);e[0]=Jl(e[0]+t),e=Ao(e),i.r=e[0],i.g=e[1],i.b=e[2]}function vf(i){if(!i)return;const t=So(i),e=t[0],s=$r(t[1]),n=$r(t[2]);return i.a<255?`hsla(${e}, ${s}%, ${n}%, ${Qt(i.a)})`:`hsl(${e}, ${s}%, ${n}%)`}const Ir={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Fr={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function yf(){const i={},t=Object.keys(Fr),e=Object.keys(Ir);let s,n,o,r,a;for(s=0;s<t.length;s++){for(r=a=t[s],n=0;n<e.length;n++)o=e[n],a=a.replace(o,Ir[o]);o=parseInt(Fr[r],16),i[a]=[o>>16&255,o>>8&255,o&255]}return i}let fs;function _f(i){fs||(fs=yf(),fs.transparent=[0,0,0,0]);const t=fs[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const xf=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function wf(i){const t=xf.exec(i);let e=255,s,n,o;if(t){if(t[7]!==s){const r=+t[7];e=t[8]?Di(r):me(r*255,0,255)}return s=+t[1],n=+t[3],o=+t[5],s=255&(t[2]?Di(s):me(s,0,255)),n=255&(t[4]?Di(n):me(n,0,255)),o=255&(t[6]?Di(o):me(o,0,255)),{r:s,g:n,b:o,a:e}}}function kf(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Qt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Dn=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,ei=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Cf(i,t,e){const s=ei(Qt(i.r)),n=ei(Qt(i.g)),o=ei(Qt(i.b));return{r:_e(Dn(s+e*(ei(Qt(t.r))-s))),g:_e(Dn(n+e*(ei(Qt(t.g))-n))),b:_e(Dn(o+e*(ei(Qt(t.b))-o))),a:i.a+e*(t.a-i.a)}}function ps(i,t,e){if(i){let s=So(i);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Ao(s),i.r=s[0],i.g=s[1],i.b=s[2]}}function Zl(i,t){return i&&Object.assign(t||{},i)}function Br(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=_e(i[3]))):(t=Zl(i,{r:0,g:0,b:0,a:1}),t.a=_e(t.a)),t}function Sf(i){return i.charAt(0)==="r"?wf(i):gf(i)}class ui{constructor(t){if(t instanceof ui)return t;const e=typeof t;let s;e==="object"?s=Br(t):e==="string"&&(s=af(t)||_f(t)||Sf(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=Zl(this._rgb);return t&&(t.a=Qt(t.a)),t}set rgb(t){this._rgb=Br(t)}rgbString(){return this._valid?kf(this._rgb):void 0}hexString(){return this._valid?cf(this._rgb):void 0}hslString(){return this._valid?vf(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,n=t.rgb;let o;const r=e===o?.5:e,a=2*r-1,l=s.a-n.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,s.r=255&c*s.r+o*n.r+.5,s.g=255&c*s.g+o*n.g+.5,s.b=255&c*s.b+o*n.b+.5,s.a=r*s.a+(1-r)*n.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=Cf(this._rgb,t._rgb,e)),this}clone(){return new ui(this.rgb)}alpha(t){return this._rgb.a=_e(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=cs(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return ps(this._rgb,2,t),this}darken(t){return ps(this._rgb,2,-t),this}saturate(t){return ps(this._rgb,1,t),this}desaturate(t){return ps(this._rgb,1,-t),this}rotate(t){return bf(this._rgb,t),this}}function Mf(i){return new ui(i)}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function Xt(){}const Af=(()=>{let i=0;return()=>i++})();function L(i){return i==null}function K(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function F(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function tt(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function Ct(i,t){return tt(i)?i:t}function T(i,t){return typeof i>"u"?t:i}const Df=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,tc=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function Y(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function W(i,t,e,s){let n,o,r;if(K(i))for(o=i.length,n=0;n<o;n++)t.call(e,i[n],n);else if(F(i))for(r=Object.keys(i),o=r.length,n=0;n<o;n++)t.call(e,i[r[n]],r[n])}function Gs(i,t){let e,s,n,o;if(!i||!t||i.length!==t.length)return!1;for(e=0,s=i.length;e<s;++e)if(n=i[e],o=t[e],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function Qs(i){if(K(i))return i.map(Qs);if(F(i)){const t=Object.create(null),e=Object.keys(i),s=e.length;let n=0;for(;n<s;++n)t[e[n]]=Qs(i[e[n]]);return t}return i}function ec(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function Pf(i,t,e,s){if(!ec(i))return;const n=t[i],o=e[i];F(n)&&F(o)?qt(n,o,s):t[i]=Qs(o)}function qt(i,t,e){const s=K(t)?t:[t],n=s.length;if(!F(i))return i;e=e||{};const o=e.merger||Pf;let r;for(let a=0;a<n;++a){if(r=s[a],!F(r))continue;const l=Object.keys(r);for(let c=0,h=l.length;c<h;++c)o(l[c],i,r,e)}return i}function Ri(i,t){return qt(i,t,{merger:Ef})}function Ef(i,t,e){if(!ec(i))return;const s=t[i],n=e[i];F(s)&&F(n)?Ri(s,n):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Qs(n))}const Vr={"":i=>i,x:i=>i.x,y:i=>i.y};function Of(i){const t=i.split("."),e=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function Tf(i){const t=Of(i);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Se(i,t){return(Vr[t]||(Vr[t]=Tf(t)))(i)}function Do(i){return i.charAt(0).toUpperCase()+i.slice(1)}const Xi=i=>typeof i<"u",Me=i=>typeof i=="function",Hr=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function Lf(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const H=Math.PI,G=2*H,Rf=G+H,Js=Number.POSITIVE_INFINITY,zf=H/180,et=H/2,Re=H/4,jr=H*2/3,ge=Math.log10,Vt=Math.sign;function zi(i,t,e){return Math.abs(i-t)<e}function Nr(i){const t=Math.round(i);i=zi(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(ge(i))),s=i/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function $f(i){const t=[],e=Math.sqrt(i);let s;for(s=1;s<e;s++)i%s===0&&(t.push(s),t.push(i/s));return e===(e|0)&&t.push(e),t.sort((n,o)=>n-o).pop(),t}function If(i){return typeof i=="symbol"||typeof i=="object"&&i!==null&&!(Symbol.toPrimitive in i||"toString"in i||"valueOf"in i)}function fi(i){return!If(i)&&!isNaN(parseFloat(i))&&isFinite(i)}function Ff(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function ic(i,t,e){let s,n,o;for(s=0,n=i.length;s<n;s++)o=i[s][e],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function zt(i){return i*(H/180)}function Po(i){return i*(180/H)}function Wr(i){if(!tt(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function sc(i,t){const e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);let o=Math.atan2(s,e);return o<-.5*H&&(o+=G),{angle:o,distance:n}}function io(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function Bf(i,t){return(i-t+Rf)%G-H}function mt(i){return(i%G+G)%G}function Ki(i,t,e,s){const n=mt(i),o=mt(t),r=mt(e),a=mt(o-n),l=mt(r-n),c=mt(n-o),h=mt(n-r);return n===o||n===r||s&&o===r||a>l&&c<h}function ct(i,t,e){return Math.max(t,Math.min(e,i))}function Vf(i){return ct(i,-32768,32767)}function te(i,t,e,s=1e-6){return i>=Math.min(t,e)-s&&i<=Math.max(t,e)+s}function Eo(i,t,e){e=e||(r=>i[r]<t);let s=i.length-1,n=0,o;for(;s-n>1;)o=n+s>>1,e(o)?n=o:s=o;return{lo:n,hi:s}}const ee=(i,t,e,s)=>Eo(i,e,s?n=>{const o=i[n][t];return o<e||o===e&&i[n+1][t]===e}:n=>i[n][t]<e),Hf=(i,t,e)=>Eo(i,e,s=>i[s][t]>=e);function jf(i,t,e){let s=0,n=i.length;for(;s<n&&i[s]<t;)s++;for(;n>s&&i[n-1]>e;)n--;return s>0||n<i.length?i.slice(s,n):i}const nc=["push","pop","shift","splice","unshift"];function Nf(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),nc.forEach(e=>{const s="_onData"+Do(e),n=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...o){const r=n.apply(this,o);return i._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...o)}),r}})})}function Ur(i,t){const e=i._chartjs;if(!e)return;const s=e.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(nc.forEach(o=>{delete i[o]}),delete i._chartjs)}function oc(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const rc=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function ac(i,t){let e=[],s=!1;return function(...n){e=n,s||(s=!0,rc.call(window,()=>{s=!1,i.apply(t,e)}))}}function Wf(i,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(i,t,s)):i.apply(this,s),t}}const Oo=i=>i==="start"?"left":i==="end"?"right":"center",ft=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,Uf=(i,t,e,s)=>i===(s?"left":"right")?e:i==="center"?(t+e)/2:t;function lc(i,t,e){const s=t.length;let n=0,o=s;if(i._sorted){const{iScale:r,vScale:a,_parsed:l}=i,c=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null,h=r.axis,{min:d,max:u,minDefined:f,maxDefined:p}=r.getUserBounds();if(f){if(n=Math.min(ee(l,h,d).lo,e?s:ee(t,h,r.getPixelForValue(d)).lo),c){const m=l.slice(0,n+1).reverse().findIndex(g=>!L(g[a.axis]));n-=Math.max(0,m)}n=ct(n,0,s-1)}if(p){let m=Math.max(ee(l,r.axis,u,!0).hi+1,e?0:ee(t,h,r.getPixelForValue(u),!0).hi+1);if(c){const g=l.slice(m-1).findIndex(b=>!L(b[a.axis]));m+=Math.max(0,g)}o=ct(m,n,s)-n}else o=s-n}return{start:n,count:o}}function cc(i){const{xScale:t,yScale:e,_scaleRanges:s}=i,n={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return i._scaleRanges=n,!0;const o=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,n),o}const ms=i=>i===0||i===1,qr=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*G/e)),Yr=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*G/e)+1,$i={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*et)+1,easeOutSine:i=>Math.sin(i*et),easeInOutSine:i=>-.5*(Math.cos(H*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>ms(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>ms(i)?i:qr(i,.075,.3),easeOutElastic:i=>ms(i)?i:Yr(i,.075,.3),easeInOutElastic(i){return ms(i)?i:i<.5?.5*qr(i*2,.1125,.45):.5+.5*Yr(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-$i.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?$i.easeInBounce(i*2)*.5:$i.easeOutBounce(i*2-1)*.5+.5};function To(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function Xr(i){return To(i)?i:new ui(i)}function Pn(i){return To(i)?i:new ui(i).saturate(.5).darken(.1).hexString()}const qf=["x","y","borderWidth","radius","tension"],Yf=["color","borderColor","backgroundColor"];function Xf(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:Yf},numbers:{type:"number",properties:qf}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function Kf(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const Kr=new Map;function Gf(i,t){t=t||{};const e=i+JSON.stringify(t);let s=Kr.get(e);return s||(s=new Intl.NumberFormat(i,t),Kr.set(e,s)),s}function hs(i,t,e){return Gf(t,e).format(i)}const hc={values(i){return K(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const s=this.chart.options.locale;let n,o=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),o=Qf(i,e)}const r=ge(Math.abs(o)),a=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),hs(i,s,l)},logarithmic(i,t,e){if(i===0)return"0";const s=e[t].significand||i/Math.pow(10,Math.floor(ge(i)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?hc.numeric.call(this,i,t,e):""}};function Qf(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var gn={formatters:hc};function Jf(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:gn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Ye=Object.create(null),so=Object.create(null);function Ii(i,t){if(!t)return i;const e=t.split(".");for(let s=0,n=e.length;s<n;++s){const o=e[s];i=i[o]||(i[o]=Object.create(null))}return i}function En(i,t,e){return typeof t=="string"?qt(Ii(i,t),e):qt(Ii(i,""),t)}class Zf{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>Pn(n.backgroundColor),this.hoverBorderColor=(s,n)=>Pn(n.borderColor),this.hoverColor=(s,n)=>Pn(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return En(this,t,e)}get(t){return Ii(this,t)}describe(t,e){return En(so,t,e)}override(t,e){return En(Ye,t,e)}route(t,e,s,n){const o=Ii(this,t),r=Ii(this,s),a="_"+e;Object.defineProperties(o,{[a]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=r[n];return F(l)?Object.assign({},c,l):T(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var Q=new Zf({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[Xf,Kf,Jf]);function tp(i){return!i||L(i.size)||L(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Zs(i,t,e,s,n){let o=t[n];return o||(o=t[n]=i.measureText(n).width,e.push(n)),o>s&&(s=o),s}function ep(i,t,e,s){s=s||{};let n=s.data=s.data||{},o=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},o=s.garbageCollect=[],s.font=t),i.save(),i.font=t;let r=0;const a=e.length;let l,c,h,d,u;for(l=0;l<a;l++)if(d=e[l],d!=null&&!K(d))r=Zs(i,n,o,r,d);else if(K(d))for(c=0,h=d.length;c<h;c++)u=d[c],u!=null&&!K(u)&&(r=Zs(i,n,o,r,u));i.restore();const f=o.length/2;if(f>e.length){for(l=0;l<f;l++)delete n[o[l]];o.splice(0,f)}return r}function ze(i,t,e){const s=i.currentDevicePixelRatio,n=e!==0?Math.max(e/2,.5):0;return Math.round((t-n)*s)/s+n}function Gr(i,t){!t&&!i||(t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore())}function no(i,t,e,s){dc(i,t,e,s,null)}function dc(i,t,e,s,n){let o,r,a,l,c,h,d,u;const f=t.pointStyle,p=t.rotation,m=t.radius;let g=(p||0)*zf;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){i.save(),i.translate(e,s),i.rotate(g),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(m)||m<=0)){switch(i.beginPath(),f){default:n?i.ellipse(e,s,n/2,m,0,0,G):i.arc(e,s,m,0,G),i.closePath();break;case"triangle":h=n?n/2:m,i.moveTo(e+Math.sin(g)*h,s-Math.cos(g)*m),g+=jr,i.lineTo(e+Math.sin(g)*h,s-Math.cos(g)*m),g+=jr,i.lineTo(e+Math.sin(g)*h,s-Math.cos(g)*m),i.closePath();break;case"rectRounded":c=m*.516,l=m-c,r=Math.cos(g+Re)*l,d=Math.cos(g+Re)*(n?n/2-c:l),a=Math.sin(g+Re)*l,u=Math.sin(g+Re)*(n?n/2-c:l),i.arc(e-d,s-a,c,g-H,g-et),i.arc(e+u,s-r,c,g-et,g),i.arc(e+d,s+a,c,g,g+et),i.arc(e-u,s+r,c,g+et,g+H),i.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*m,h=n?n/2:l,i.rect(e-h,s-l,2*h,2*l);break}g+=Re;case"rectRot":d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+u,s-r),i.lineTo(e+d,s+a),i.lineTo(e-u,s+r),i.closePath();break;case"crossRot":g+=Re;case"cross":d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r);break;case"star":d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r),g+=Re,d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r);break;case"line":r=n?n/2:Math.cos(g)*m,a=Math.sin(g)*m,i.moveTo(e-r,s-a),i.lineTo(e+r,s+a);break;case"dash":i.moveTo(e,s),i.lineTo(e+Math.cos(g)*(n?n/2:m),s+Math.sin(g)*m);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function ie(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function bn(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function vn(i){i.restore()}function ip(i,t,e,s,n){if(!t)return i.lineTo(e.x,e.y);if(n==="middle"){const o=(t.x+e.x)/2;i.lineTo(o,t.y),i.lineTo(o,e.y)}else n==="after"!=!!s?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function sp(i,t,e,s){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function np(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),L(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function op(i,t,e,s,n){if(n.strikethrough||n.underline){const o=i.measureText(s),r=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=e-o.actualBoundingBoxAscent,c=e+o.actualBoundingBoxDescent,h=n.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=n.decorationWidth||2,i.moveTo(r,h),i.lineTo(a,h),i.stroke()}}function rp(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function Xe(i,t,e,s,n,o={}){const r=K(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(i.save(),i.font=n.string,np(i,o),l=0;l<r.length;++l)c=r[l],o.backdrop&&rp(i,o.backdrop),a&&(o.strokeColor&&(i.strokeStyle=o.strokeColor),L(o.strokeWidth)||(i.lineWidth=o.strokeWidth),i.strokeText(c,e,s,o.maxWidth)),i.fillText(c,e,s,o.maxWidth),op(i,e,s,c,o),s+=Number(n.lineHeight);i.restore()}function Gi(i,t){const{x:e,y:s,w:n,h:o,radius:r}=t;i.arc(e+r.topLeft,s+r.topLeft,r.topLeft,1.5*H,H,!0),i.lineTo(e,s+o-r.bottomLeft),i.arc(e+r.bottomLeft,s+o-r.bottomLeft,r.bottomLeft,H,et,!0),i.lineTo(e+n-r.bottomRight,s+o),i.arc(e+n-r.bottomRight,s+o-r.bottomRight,r.bottomRight,et,0,!0),i.lineTo(e+n,s+r.topRight),i.arc(e+n-r.topRight,s+r.topRight,r.topRight,0,-et,!0),i.lineTo(e+r.topLeft,s)}const ap=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,lp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function cp(i,t){const e=(""+i).match(ap);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const hp=i=>+i||0;function Lo(i,t){const e={},s=F(t),n=s?Object.keys(t):t,o=F(i)?s?r=>T(i[r],i[t[r]]):r=>i[r]:()=>i;for(const r of n)e[r]=hp(o(r));return e}function uc(i){return Lo(i,{top:"y",right:"x",bottom:"y",left:"x"})}function He(i){return Lo(i,["topLeft","topRight","bottomLeft","bottomRight"])}function dt(i){const t=uc(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function ot(i,t){i=i||{},t=t||Q.font;let e=T(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=T(i.style,t.style);s&&!(""+s).match(lp)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:T(i.family,t.family),lineHeight:cp(T(i.lineHeight,t.lineHeight),e),size:e,style:s,weight:T(i.weight,t.weight),string:""};return n.string=tp(n),n}function X(i,t,e,s){let n,o,r;for(n=0,o=i.length;n<o;++n)if(r=i[n],r!==void 0&&(t!==void 0&&typeof r=="function"&&(r=r(t)),e!==void 0&&K(r)&&(r=r[e%r.length]),r!==void 0))return r}function dp(i,t,e){const{min:s,max:n}=i,o=tc(t,(n-s)/2),r=(a,l)=>e&&a===0?0:a+l;return{min:r(s,-Math.abs(o)),max:r(n,o)}}function Pe(i,t){return Object.assign(Object.create(i),t)}function Ro(i,t=[""],e,s,n=()=>i[0]){const o=e||i;typeof s>"u"&&(s=gc("_fallback",i));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:o,_fallback:s,_getTarget:n,override:a=>Ro([a,...i],t,o,s)};return new Proxy(r,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return pc(a,l,()=>yp(l,t,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return Jr(a).includes(l)},ownKeys(a){return Jr(a)},set(a,l,c){const h=a._storage||(a._storage=n());return a[l]=h[l]=c,delete a._keys,!0}})}function pi(i,t,e,s){const n={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:fc(i,s),setContext:o=>pi(i,o,e,s),override:o=>pi(i.override(o),t,e,s)};return new Proxy(n,{deleteProperty(o,r){return delete o[r],delete i[r],!0},get(o,r,a){return pc(o,r,()=>fp(o,r,a))},getOwnPropertyDescriptor(o,r){return o._descriptors.allKeys?Reflect.has(i,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,r)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(o,r){return Reflect.has(i,r)},ownKeys(){return Reflect.ownKeys(i)},set(o,r,a){return i[r]=a,delete o[r],!0}})}function fc(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=i;return{allKeys:n,scriptable:e,indexable:s,isScriptable:Me(e)?e:()=>e,isIndexable:Me(s)?s:()=>s}}const up=(i,t)=>i?i+Do(t):t,zo=(i,t)=>F(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function pc(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t)||t==="constructor")return i[t];const s=e();return i[t]=s,s}function fp(i,t,e){const{_proxy:s,_context:n,_subProxy:o,_descriptors:r}=i;let a=s[t];return Me(a)&&r.isScriptable(t)&&(a=pp(t,a,i,e)),K(a)&&a.length&&(a=mp(t,a,i,r.isIndexable)),zo(t,a)&&(a=pi(a,n,o&&o[t],r)),a}function pp(i,t,e,s){const{_proxy:n,_context:o,_subProxy:r,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=t(o,r||s);return a.delete(i),zo(i,l)&&(l=$o(n._scopes,n,i,l)),l}function mp(i,t,e,s){const{_proxy:n,_context:o,_subProxy:r,_descriptors:a}=e;if(typeof o.index<"u"&&s(i))return t[o.index%t.length];if(F(t[0])){const l=t,c=n._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=$o(c,n,i,h);t.push(pi(d,o,r&&r[i],a))}}return t}function mc(i,t,e){return Me(i)?i(t,e):i}const gp=(i,t)=>i===!0?t:typeof i=="string"?Se(t,i):void 0;function bp(i,t,e,s,n){for(const o of t){const r=gp(e,o);if(r){i.add(r);const a=mc(r._fallback,e,n);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(r===!1&&typeof s<"u"&&e!==s)return null}return!1}function $o(i,t,e,s){const n=t._rootScopes,o=mc(t._fallback,e,s),r=[...i,...n],a=new Set;a.add(s);let l=Qr(a,r,e,o||e,s);return l===null||typeof o<"u"&&o!==e&&(l=Qr(a,r,o,l,s),l===null)?!1:Ro(Array.from(a),[""],n,o,()=>vp(t,e,s))}function Qr(i,t,e,s,n){for(;e;)e=bp(i,t,e,s,n);return e}function vp(i,t,e){const s=i._getTarget();t in s||(s[t]={});const n=s[t];return K(n)&&F(e)?e:n||{}}function yp(i,t,e,s){let n;for(const o of t)if(n=gc(up(o,i),e),typeof n<"u")return zo(i,n)?$o(e,s,i,n):n}function gc(i,t){for(const e of t){if(!e)continue;const s=e[i];if(typeof s<"u")return s}}function Jr(i){let t=i._keys;return t||(t=i._keys=_p(i._scopes)),t}function _p(i){const t=new Set;for(const e of i)for(const s of Object.keys(e).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function bc(i,t,e,s){const{iScale:n}=i,{key:o="r"}=this._parsing,r=new Array(s);let a,l,c,h;for(a=0,l=s;a<l;++a)c=a+e,h=t[c],r[a]={r:n.parse(Se(h,o),c)};return r}const xp=Number.EPSILON||1e-14,mi=(i,t)=>t<i.length&&!i[t].skip&&i[t],vc=i=>i==="x"?"y":"x";function wp(i,t,e,s){const n=i.skip?t:i,o=t,r=e.skip?t:e,a=io(o,n),l=io(r,o);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=s*c,u=s*h;return{previous:{x:o.x-d*(r.x-n.x),y:o.y-d*(r.y-n.y)},next:{x:o.x+u*(r.x-n.x),y:o.y+u*(r.y-n.y)}}}function kp(i,t,e){const s=i.length;let n,o,r,a,l,c=mi(i,0);for(let h=0;h<s-1;++h)if(l=c,c=mi(i,h+1),!(!l||!c)){if(zi(t[h],0,xp)){e[h]=e[h+1]=0;continue}n=e[h]/t[h],o=e[h+1]/t[h],a=Math.pow(n,2)+Math.pow(o,2),!(a<=9)&&(r=3/Math.sqrt(a),e[h]=n*r*t[h],e[h+1]=o*r*t[h])}}function Cp(i,t,e="x"){const s=vc(e),n=i.length;let o,r,a,l=mi(i,0);for(let c=0;c<n;++c){if(r=a,a=l,l=mi(i,c+1),!a)continue;const h=a[e],d=a[s];r&&(o=(h-r[e])/3,a[`cp1${e}`]=h-o,a[`cp1${s}`]=d-o*t[c]),l&&(o=(l[e]-h)/3,a[`cp2${e}`]=h+o,a[`cp2${s}`]=d+o*t[c])}}function Sp(i,t="x"){const e=vc(t),s=i.length,n=Array(s).fill(0),o=Array(s);let r,a,l,c=mi(i,0);for(r=0;r<s;++r)if(a=l,l=c,c=mi(i,r+1),!!l){if(c){const h=c[t]-l[t];n[r]=h!==0?(c[e]-l[e])/h:0}o[r]=a?c?Vt(n[r-1])!==Vt(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}kp(i,n,o),Cp(i,o,t)}function gs(i,t,e){return Math.max(Math.min(i,e),t)}function Mp(i,t){let e,s,n,o,r,a=ie(i[0],t);for(e=0,s=i.length;e<s;++e)r=o,o=a,a=e<s-1&&ie(i[e+1],t),o&&(n=i[e],r&&(n.cp1x=gs(n.cp1x,t.left,t.right),n.cp1y=gs(n.cp1y,t.top,t.bottom)),a&&(n.cp2x=gs(n.cp2x,t.left,t.right),n.cp2y=gs(n.cp2y,t.top,t.bottom)))}function Ap(i,t,e,s,n){let o,r,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Sp(i,n);else{let c=s?i[i.length-1]:i[0];for(o=0,r=i.length;o<r;++o)a=i[o],l=wp(c,a,i[Math.min(o+1,r-(s?0:1))%r],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&Mp(i,e)}function Io(){return typeof window<"u"&&typeof document<"u"}function Fo(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function tn(i,t,e){let s;return typeof i=="string"?(s=parseInt(i,10),i.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=i,s}const yn=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function Dp(i,t){return yn(i).getPropertyValue(t)}const Pp=["top","right","bottom","left"];function je(i,t,e){const s={};e=e?"-"+e:"";for(let n=0;n<4;n++){const o=Pp[n];s[o]=parseFloat(i[t+"-"+o+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const Ep=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function Op(i,t){const e=i.touches,s=e&&e.length?e[0]:i,{offsetX:n,offsetY:o}=s;let r=!1,a,l;if(Ep(n,o,i.target))a=n,l=o;else{const c=t.getBoundingClientRect();a=s.clientX-c.left,l=s.clientY-c.top,r=!0}return{x:a,y:l,box:r}}function Fe(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:s}=t,n=yn(e),o=n.boxSizing==="border-box",r=je(n,"padding"),a=je(n,"border","width"),{x:l,y:c,box:h}=Op(i,e),d=r.left+(h&&a.left),u=r.top+(h&&a.top);let{width:f,height:p}=t;return o&&(f-=r.width+a.width,p-=r.height+a.height),{x:Math.round((l-d)/f*e.width/s),y:Math.round((c-u)/p*e.height/s)}}function Tp(i,t,e){let s,n;if(t===void 0||e===void 0){const o=i&&Fo(i);if(!o)t=i.clientWidth,e=i.clientHeight;else{const r=o.getBoundingClientRect(),a=yn(o),l=je(a,"border","width"),c=je(a,"padding");t=r.width-c.width-l.width,e=r.height-c.height-l.height,s=tn(a.maxWidth,o,"clientWidth"),n=tn(a.maxHeight,o,"clientHeight")}}return{width:t,height:e,maxWidth:s||Js,maxHeight:n||Js}}const be=i=>Math.round(i*10)/10;function Lp(i,t,e,s){const n=yn(i),o=je(n,"margin"),r=tn(n.maxWidth,i,"clientWidth")||Js,a=tn(n.maxHeight,i,"clientHeight")||Js,l=Tp(i,t,e);let{width:c,height:h}=l;if(n.boxSizing==="content-box"){const u=je(n,"border","width"),f=je(n,"padding");c-=f.width+u.width,h-=f.height+u.height}return c=Math.max(0,c-o.width),h=Math.max(0,s?c/s:h-o.height),c=be(Math.min(c,r,l.maxWidth)),h=be(Math.min(h,a,l.maxHeight)),c&&!h&&(h=be(c/2)),(t!==void 0||e!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,c=be(Math.floor(h*s))),{width:c,height:h}}function Zr(i,t,e){const s=t||1,n=be(i.height*s),o=be(i.width*s);i.height=be(i.height),i.width=be(i.width);const r=i.canvas;return r.style&&(e||!r.style.height&&!r.style.width)&&(r.style.height=`${i.height}px`,r.style.width=`${i.width}px`),i.currentDevicePixelRatio!==s||r.height!==n||r.width!==o?(i.currentDevicePixelRatio=s,r.height=n,r.width=o,i.ctx.setTransform(s,0,0,s,0,0),!0):!1}const Rp=function(){let i=!1;try{const t={get passive(){return i=!0,!1}};Io()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return i}();function ta(i,t){const e=Dp(i,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Be(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function zp(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:s==="middle"?e<.5?i.y:t.y:s==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function $p(i,t,e,s){const n={x:i.cp2x,y:i.cp2y},o={x:t.cp1x,y:t.cp1y},r=Be(i,n,e),a=Be(n,o,e),l=Be(o,t,e),c=Be(r,a,e),h=Be(a,l,e);return Be(c,h,e)}const Ip=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Fp=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function ri(i,t,e){return i?Ip(t,e):Fp()}function yc(i,t){let e,s;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=s)}function _c(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function xc(i){return i==="angle"?{between:Ki,compare:Bf,normalize:mt}:{between:te,compare:(t,e)=>t-e,normalize:t=>t}}function ea({start:i,end:t,count:e,loop:s,style:n}){return{start:i%e,end:t%e,loop:s&&(t-i+1)%e===0,style:n}}function Bp(i,t,e){const{property:s,start:n,end:o}=e,{between:r,normalize:a}=xc(s),l=t.length;let{start:c,end:h,loop:d}=i,u,f;if(d){for(c+=l,h+=l,u=0,f=l;u<f&&r(a(t[c%l][s]),n,o);++u)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:d,style:i.style}}function wc(i,t,e){if(!e)return[i];const{property:s,start:n,end:o}=e,r=t.length,{compare:a,between:l,normalize:c}=xc(s),{start:h,end:d,loop:u,style:f}=Bp(i,t,e),p=[];let m=!1,g=null,b,y,w;const x=()=>l(n,w,b)&&a(n,w)!==0,_=()=>a(o,b)===0||l(o,w,b),k=()=>m||x(),S=()=>!m||_();for(let M=h,D=h;M<=d;++M)y=t[M%r],!y.skip&&(b=c(y[s]),b!==w&&(m=l(b,n,o),g===null&&k()&&(g=a(b,n)===0?M:D),g!==null&&S()&&(p.push(ea({start:g,end:M,loop:u,count:r,style:f})),g=null),D=M,w=b));return g!==null&&p.push(ea({start:g,end:d,loop:u,count:r,style:f})),p}function kc(i,t){const e=[],s=i.segments;for(let n=0;n<s.length;n++){const o=wc(s[n],i.points,t);o.length&&e.push(...o)}return e}function Vp(i,t,e,s){let n=0,o=t-1;if(e&&!s)for(;n<t&&!i[n].skip;)n++;for(;n<t&&i[n].skip;)n++;for(n%=t,e&&(o+=n);o>n&&i[o%t].skip;)o--;return o%=t,{start:n,end:o}}function Hp(i,t,e,s){const n=i.length,o=[];let r=t,a=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%n];c.skip||c.stop?a.skip||(s=!1,o.push({start:t%n,end:(l-1)%n,loop:s}),t=r=c.stop?l:null):(r=l,a.skip&&(t=l)),a=c}return r!==null&&o.push({start:t%n,end:r%n,loop:s}),o}function jp(i,t){const e=i.points,s=i.options.spanGaps,n=e.length;if(!n)return[];const o=!!i._loop,{start:r,end:a}=Vp(e,n,o,s);if(s===!0)return ia(i,[{start:r,end:a,loop:o}],e,t);const l=a<r?a+n:a,c=!!i._fullLoop&&r===0&&a===n-1;return ia(i,Hp(e,r,l,c),e,t)}function ia(i,t,e,s){return!s||!s.setContext||!e?t:Np(i,t,e,s)}function Np(i,t,e,s){const n=i._chart.getContext(),o=sa(i.options),{_datasetIndex:r,options:{spanGaps:a}}=i,l=e.length,c=[];let h=o,d=t[0].start,u=d;function f(p,m,g,b){const y=a?-1:1;if(p!==m){for(p+=l;e[p%l].skip;)p-=y;for(;e[m%l].skip;)m+=y;p%l!==m%l&&(c.push({start:p%l,end:m%l,loop:g,style:b}),h=b,d=m%l)}}for(const p of t){d=a?d:p.start;let m=e[d%l],g;for(u=d+1;u<=p.end;u++){const b=e[u%l];g=sa(s.setContext(Pe(n,{type:"segment",p0:m,p1:b,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:r}))),Wp(g,h)&&f(d,u-1,p.loop,h),m=b,h=g}d<u-1&&f(d,u-1,p.loop,h)}return c}function sa(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function Wp(i,t){if(!t)return!1;const e=[],s=function(n,o){return To(o)?(e.includes(o)||e.push(o),e.indexOf(o)):o};return JSON.stringify(i,s)!==JSON.stringify(t,s)}function bs(i,t,e){return i.options.clip?i[e]:t[e]}function Up(i,t){const{xScale:e,yScale:s}=i;return e&&s?{left:bs(e,t,"left"),right:bs(e,t,"right"),top:bs(s,t,"top"),bottom:bs(s,t,"bottom")}:t}function Cc(i,t){const e=t._clip;if(e.disabled)return!1;const s=Up(t,i.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?i.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?i.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class qp{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,n){const o=e.listeners[n],r=e.duration;o.forEach(a=>a({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(s-e.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=rc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const o=s.items;let r=o.length-1,a=!1,l;for(;r>=0;--r)l=o[r],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(o[r]=o[o.length-1],o.pop());a&&(n.draw(),this._notify(n,s,t,"progress")),o.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),e+=o.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Kt=new qp;const na="transparent",Yp={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const s=Xr(i||na),n=s.valid&&Xr(t||na);return n&&n.valid?n.mix(s,e).hexString():t},number(i,t,e){return i+(t-i)*e}};class Xp{constructor(t,e,s,n){const o=e[s];n=X([t.to,n,o,t.from]);const r=X([t.from,o,n]);this._active=!0,this._fn=t.fn||Yp[t.type||typeof r],this._easing=$i[t.easing]||$i.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const n=this._target[this._prop],o=s-this._start,r=this._duration-o;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=X([t.to,e,n,t.from]),this._from=X([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,n=this._prop,o=this._from,r=this._loop,a=this._to;let l;if(this._active=o!==a&&(r||e<s),!this._active){this._target[n]=a,this._notify(!0);return}if(e<0){this._target[n]=o;return}l=e/s%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][e]()}}class Sc{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!F(t))return;const e=Object.keys(Q.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const o=t[n];if(!F(o))return;const r={};for(const a of e)r[a]=o[a];(K(o.properties)&&o.properties||[n]).forEach(a=>{(a===n||!s.has(a))&&s.set(a,r)})})}_animateOptions(t,e){const s=e.options,n=Gp(t,s);if(!n)return[];const o=this._createAnimations(n,s);return s.$shared&&Kp(t.options.$animations,s).then(()=>{t.options=s},()=>{}),o}_createAnimations(t,e){const s=this._properties,n=[],o=t.$animations||(t.$animations={}),r=Object.keys(e),a=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,e));continue}const h=e[c];let d=o[c];const u=s.get(c);if(d)if(u&&d.active()){d.update(u,h,a);continue}else d.cancel();if(!u||!u.duration){t[c]=h;continue}o[c]=d=new Xp(u,t,c,h),n.push(d)}return n}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Kt.add(this._chart,s),!0}}function Kp(i,t){const e=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const o=i[s[n]];o&&o.active()&&e.push(o.wait())}return Promise.all(e)}function Gp(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function oa(i,t){const e=i&&i.options||{},s=e.reverse,n=e.min===void 0?t:0,o=e.max===void 0?t:0;return{start:s?o:n,end:s?n:o}}function Qp(i,t,e){if(e===!1)return!1;const s=oa(i,e),n=oa(t,e);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function Jp(i){let t,e,s,n;return F(i)?(t=i.top,e=i.right,s=i.bottom,n=i.left):t=e=s=n=i,{top:t,right:e,bottom:s,left:n,disabled:i===!1}}function Mc(i,t){const e=[],s=i._getSortedDatasetMetas(t);let n,o;for(n=0,o=s.length;n<o;++n)e.push(s[n].index);return e}function ra(i,t,e,s={}){const n=i.keys,o=s.mode==="single";let r,a,l,c;if(t===null)return;let h=!1;for(r=0,a=n.length;r<a;++r){if(l=+n[r],l===e){if(h=!0,s.all)continue;break}c=i.values[l],tt(c)&&(o||t===0||Vt(t)===Vt(c))&&(t+=c)}return!h&&!s.all?0:t}function Zp(i,t){const{iScale:e,vScale:s}=t,n=e.axis==="x"?"x":"y",o=s.axis==="x"?"x":"y",r=Object.keys(i),a=new Array(r.length);let l,c,h;for(l=0,c=r.length;l<c;++l)h=r[l],a[l]={[n]:h,[o]:i[h]};return a}function On(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function tm(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function em(i){const{min:t,max:e,minDefined:s,maxDefined:n}=i.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?e:Number.POSITIVE_INFINITY}}function im(i,t,e){const s=i[t]||(i[t]={});return s[e]||(s[e]={})}function aa(i,t,e,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const o=i[n.index];if(e&&o>0||!e&&o<0)return n.index}return null}function la(i,t){const{chart:e,_cachedMeta:s}=i,n=e._stacks||(e._stacks={}),{iScale:o,vScale:r,index:a}=s,l=o.axis,c=r.axis,h=tm(o,r,s),d=t.length;let u;for(let f=0;f<d;++f){const p=t[f],{[l]:m,[c]:g}=p,b=p._stacks||(p._stacks={});u=b[c]=im(n,h,m),u[a]=g,u._top=aa(u,r,!0,s.type),u._bottom=aa(u,r,!1,s.type);const y=u._visualValues||(u._visualValues={});y[a]=g}}function Tn(i,t){const e=i.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function sm(i,t){return Pe(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function nm(i,t,e){return Pe(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function wi(i,t){const e=i.controller.index,s=i.vScale&&i.vScale.axis;if(s){t=t||i._parsed;for(const n of t){const o=n._stacks;if(!o||o[s]===void 0||o[s][e]===void 0)return;delete o[s][e],o[s]._visualValues!==void 0&&o[s]._visualValues[e]!==void 0&&delete o[s]._visualValues[e]}}}const Ln=i=>i==="reset"||i==="none",ca=(i,t)=>t?i:Object.assign({},i),om=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:Mc(e,!0),values:null};class $t{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=On(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&wi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),n=(d,u,f,p)=>d==="x"?u:d==="r"?p:f,o=e.xAxisID=T(s.xAxisID,Tn(t,"x")),r=e.yAxisID=T(s.yAxisID,Tn(t,"y")),a=e.rAxisID=T(s.rAxisID,Tn(t,"r")),l=e.indexAxis,c=e.iAxisID=n(l,o,r,a),h=e.vAxisID=n(l,r,o,a);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Ur(this._data,this),t._stacked&&wi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(F(e)){const n=this._cachedMeta;this._data=Zp(e,n)}else if(s!==e){if(s){Ur(s,this);const n=this._cachedMeta;wi(n),n._parsed=[]}e&&Object.isExtensible(e)&&Nf(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const o=e._stacked;e._stacked=On(e.vScale,e),e.stack!==s.stack&&(n=!0,wi(e),e.stack=s.stack),this._resyncElements(t),(n||o!==e._stacked)&&(la(this,e._parsed),e._stacked=On(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:n}=this,{iScale:o,_stacked:r}=s,a=o.axis;let l=t===0&&e===n.length?!0:s._sorted,c=t>0&&s._parsed[t-1],h,d,u;if(this._parsing===!1)s._parsed=n,s._sorted=!0,u=n;else{K(n[t])?u=this.parseArrayData(s,n,t,e):F(n[t])?u=this.parseObjectData(s,n,t,e):u=this.parsePrimitiveData(s,n,t,e);const f=()=>d[a]===null||c&&d[a]<c[a];for(h=0;h<e;++h)s._parsed[h+t]=d=u[h],l&&(f()&&(l=!1),c=d);s._sorted=l}r&&la(this,u)}parsePrimitiveData(t,e,s,n){const{iScale:o,vScale:r}=t,a=o.axis,l=r.axis,c=o.getLabels(),h=o===r,d=new Array(n);let u,f,p;for(u=0,f=n;u<f;++u)p=u+s,d[u]={[a]:h||o.parse(c[p],p),[l]:r.parse(e[p],p)};return d}parseArrayData(t,e,s,n){const{xScale:o,yScale:r}=t,a=new Array(n);let l,c,h,d;for(l=0,c=n;l<c;++l)h=l+s,d=e[h],a[l]={x:o.parse(d[0],h),y:r.parse(d[1],h)};return a}parseObjectData(t,e,s,n){const{xScale:o,yScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(n);let h,d,u,f;for(h=0,d=n;h<d;++h)u=h+s,f=e[u],c[h]={x:o.parse(Se(f,a),u),y:r.parse(Se(f,l),u)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const n=this.chart,o=this._cachedMeta,r=e[t.axis],a={keys:Mc(n,!0),values:e._stacks[t.axis]._visualValues};return ra(a,r,o.index,{mode:s})}updateRangeFromParsed(t,e,s,n){const o=s[e.axis];let r=o===null?NaN:o;const a=n&&s._stacks[e.axis];n&&a&&(n.values=a,r=ra(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const s=this._cachedMeta,n=s._parsed,o=s._sorted&&t===s.iScale,r=n.length,a=this._getOtherScale(t),l=om(e,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=em(a);let u,f;function p(){f=n[u];const m=f[a.axis];return!tt(f[t.axis])||h>m||d<m}for(u=0;u<r&&!(!p()&&(this.updateRangeFromParsed(c,t,f,l),o));++u);if(o){for(u=r-1;u>=0;--u)if(!p()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let n,o,r;for(n=0,o=e.length;n<o;++n)r=e[n][t.axis],tt(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:s?""+s.getLabelForValue(o[s.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=Jp(T(this.options.clip,Qp(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,n=s.data||[],o=e.chartArea,r=[],a=this._drawStart||0,l=this._drawCount||n.length-a,c=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,o,a,l),h=a;h<a+l;++h){const d=n[h];d.hidden||(d.active&&c?r.push(d):d.draw(t,o))}for(h=0;h<r.length;++h)r[h].draw(t,o)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const n=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];o=r.$context||(r.$context=nm(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=n.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=sm(this.chart.getContext(),this.index)),o.dataset=n,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=s,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const n=e==="active",o=this._cachedDataOpts,r=t+"-"+e,a=o[r],l=this.enableOptionSharing&&Xi(s);if(a)return ca(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),d=n?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(this.getDataset(),h),f=Object.keys(Q.elements[t]),p=()=>this.getContext(s,n,e),m=c.resolveNamedOptions(u,f,p,d);return m.$shared&&(m.$shared=l,o[r]=Object.freeze(ca(m,l))),m}_resolveAnimations(t,e,s){const n=this.chart,o=this._cachedDataOpts,r=`animation-${e}`,a=o[r];if(a)return a;let l;if(n.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),u=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(u,this.getContext(t,s,e))}const c=new Sc(n,l&&l.animations);return l&&l._cacheable&&(o[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Ln(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),n=this._sharedOptions,o=this.getSharedOptions(s),r=this.includeOptions(e,o)||o!==n;return this.updateSharedOptions(o,e,s),{sharedOptions:o,includeOptions:r}}updateElement(t,e,s,n){Ln(n)?Object.assign(t,s):this._resolveAnimations(e,n).update(t,s)}updateSharedOptions(t,e,s){t&&!Ln(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,n){t.active=n;const o=this.getStyle(e,n);this._resolveAnimations(e,s,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const n=s.length,o=e.length,r=Math.min(o,n);r&&this.parse(0,r),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,e,s=!0){const n=this._cachedMeta,o=n.data,r=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=r;a--)c[a]=c[a-e]};for(l(o),a=t;a<r;++a)o[a]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,e),s&&this.updateElements(o,t,e,"reset")}updateElements(t,e,s,n){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,e);s._stacked&&wi(s,n)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,n]=t;this[e](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}A($t,"defaults",{}),A($t,"datasetElementType",null),A($t,"dataElementType",null);function rm(i,t){if(!i._cache.$bar){const e=i.getMatchingVisibleMetas(t);let s=[];for(let n=0,o=e.length;n<o;n++)s=s.concat(e[n].controller.getAllParsedValues(i));i._cache.$bar=oc(s.sort((n,o)=>n-o))}return i._cache.$bar}function am(i){const t=i.iScale,e=rm(t,i.type);let s=t._length,n,o,r,a;const l=()=>{r===32767||r===-32768||(Xi(a)&&(s=Math.min(s,Math.abs(r-a)||s)),a=r)};for(n=0,o=e.length;n<o;++n)r=t.getPixelForValue(e[n]),l();for(a=void 0,n=0,o=t.ticks.length;n<o;++n)r=t.getPixelForTick(n),l();return s}function lm(i,t,e,s){const n=e.barThickness;let o,r;return L(n)?(o=t.min*e.categoryPercentage,r=e.barPercentage):(o=n*s,r=1),{chunk:o/s,ratio:r,start:t.pixels[i]-o/2}}function cm(i,t,e,s){const n=t.pixels,o=n[i];let r=i>0?n[i-1]:null,a=i<n.length-1?n[i+1]:null;const l=e.categoryPercentage;r===null&&(r=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-r);const c=o-(o-Math.min(r,a))/2*l;return{chunk:Math.abs(a-r)/2*l/s,ratio:e.barPercentage,start:c}}function hm(i,t,e,s){const n=e.parse(i[0],s),o=e.parse(i[1],s),r=Math.min(n,o),a=Math.max(n,o);let l=r,c=a;Math.abs(r)>Math.abs(a)&&(l=a,c=r),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:o,min:r,max:a}}function Ac(i,t,e,s){return K(i)?hm(i,t,e,s):t[e.axis]=e.parse(i,s),t}function ha(i,t,e,s){const n=i.iScale,o=i.vScale,r=n.getLabels(),a=n===o,l=[];let c,h,d,u;for(c=e,h=e+s;c<h;++c)u=t[c],d={},d[n.axis]=a||n.parse(r[c],c),l.push(Ac(u,d,o,c));return l}function Rn(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function dm(i,t,e){return i!==0?Vt(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function um(i){let t,e,s,n,o;return i.horizontal?(t=i.base>i.x,e="left",s="right"):(t=i.base<i.y,e="bottom",s="top"),t?(n="end",o="start"):(n="start",o="end"),{start:e,end:s,reverse:t,top:n,bottom:o}}function fm(i,t,e,s){let n=t.borderSkipped;const o={};if(!n){i.borderSkipped=o;return}if(n===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:a,reverse:l,top:c,bottom:h}=um(i);n==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===s?n=c:(e._bottom||0)===s?n=h:(o[da(h,r,a,l)]=!0,n=c)),o[da(n,r,a,l)]=!0,i.borderSkipped=o}function da(i,t,e,s){return s?(i=pm(i,t,e),i=ua(i,e,t)):i=ua(i,t,e),i}function pm(i,t,e){return i===t?e:i===e?t:i}function ua(i,t,e){return i==="start"?t:i==="end"?e:i}function mm(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}class Ts extends $t{parsePrimitiveData(t,e,s,n){return ha(t,e,s,n)}parseArrayData(t,e,s,n){return ha(t,e,s,n)}parseObjectData(t,e,s,n){const{iScale:o,vScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,h=r.axis==="x"?a:l,d=[];let u,f,p,m;for(u=s,f=s+n;u<f;++u)m=e[u],p={},p[o.axis]=o.parse(Se(m,c),u),d.push(Ac(Se(m,h),p,r,u));return d}updateRangeFromParsed(t,e,s,n){super.updateRangeFromParsed(t,e,s,n);const o=s._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:n}=e,o=this.getParsed(t),r=o._custom,a=Rn(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+s.getLabelForValue(o[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,n){const o=n==="reset",{index:r,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,n);for(let f=e;f<e+s;f++){const p=this.getParsed(f),m=o||L(p[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),g=this._calculateBarIndexPixels(f,h),b=(p._stacks||{})[a.axis],y={horizontal:c,base:m.base,enableBorderRadius:!b||Rn(p._custom)||r===b._top||r===b._bottom,x:c?m.head:g.center,y:c?g.center:m.head,height:c?g.size:Math.abs(m.size),width:c?Math.abs(m.size):g.size};u&&(y.options=d||this.resolveDataElementOptions(f,t[f].active?"active":n));const w=y.options||t[f].options;fm(y,w,b,r),mm(y,w,h.ratio),this.updateElement(t[f],f,y,n)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),o=s.options.stacked,r=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[s.axis],c=h=>{const d=h._parsed.find(f=>f[s.axis]===l),u=d&&d[h.vScale.axis];if(L(u)||isNaN(u))return!0};for(const h of n)if(!(e!==void 0&&c(h))&&((o===!1||r.indexOf(h.stack)===-1||o===void 0&&h.stack===void 0)&&r.push(h.stack),h.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[T(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const n=this._getStacks(t,s),o=e!==void 0?n.indexOf(e):-1;return o===-1?n.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,n=[];let o,r;for(o=0,r=e.data.length;o<r;++o)n.push(s.getPixelForValue(this.getParsed(o)[s.axis],o));const a=t.barThickness;return{min:a||am(e),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:n},options:{base:o,minBarLength:r}}=this,a=o||0,l=this.getParsed(t),c=l._custom,h=Rn(c);let d=l[e.axis],u=0,f=s?this.applyStack(e,l,s):d,p,m;f!==d&&(u=f-d,f=d),h&&(d=c.barStart,f=c.barEnd-c.barStart,d!==0&&Vt(d)!==Vt(c.barEnd)&&(u=0),u+=d);const g=!L(o)&&!h?o:u;let b=e.getPixelForValue(g);if(this.chart.getDataVisibility(t)?p=e.getPixelForValue(u+f):p=b,m=p-b,Math.abs(m)<r){m=dm(m,e,a)*r,d===a&&(b-=m/2);const y=e.getPixelForDecimal(0),w=e.getPixelForDecimal(1),x=Math.min(y,w),_=Math.max(y,w);b=Math.max(Math.min(b,_),x),p=b+m,s&&!h&&(l._stacks[e.axis]._visualValues[n]=e.getValueForPixel(p)-e.getValueForPixel(b))}if(b===e.getPixelForValue(a)){const y=Vt(m)*e.getLineWidthForValue(a)/2;b+=y,m-=y}return{size:m,base:b,head:p,center:p+m/2}}_calculateBarIndexPixels(t,e){const s=e.scale,n=this.options,o=n.skipNull,r=T(n.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(e.grouped){const h=o?this._getStackCount(t):e.stackCount,d=n.barThickness==="flex"?cm(t,e,n,h*c):lm(t,e,n,h*c),u=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(T(u,this.getFirstScaleIdForIndexAxis())),p=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;a=d.start+d.chunk*p+d.chunk/2,l=Math.min(r,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,n=s.length;let o=0;for(;o<n;++o)this.getParsed(o)[e.axis]!==null&&!s[o].hidden&&s[o].draw(this._ctx)}}A(Ts,"id","bar"),A(Ts,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),A(Ts,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ls extends $t{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,n){const o=super.parsePrimitiveData(t,e,s,n);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+s).radius;return o}parseArrayData(t,e,s,n){const o=super.parseArrayData(t,e,s,n);for(let r=0;r<o.length;r++){const a=e[s+r];o[r]._custom=T(a[2],this.resolveDataElementOptions(r+s).radius)}return o}parseObjectData(t,e,s,n){const o=super.parseObjectData(t,e,s,n);for(let r=0;r<o.length;r++){const a=e[s+r];o[r]._custom=T(a&&a.r&&+a.r,this.resolveDataElementOptions(r+s).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:o}=e,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y),c=r._custom;return{label:s[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,n),h=r.axis,d=a.axis;for(let u=e;u<e+s;u++){const f=t[u],p=!o&&this.getParsed(u),m={},g=m[h]=o?r.getPixelForDecimal(.5):r.getPixelForValue(p[h]),b=m[d]=o?a.getBasePixel():a.getPixelForValue(p[d]);m.skip=isNaN(g)||isNaN(b),c&&(m.options=l||this.resolveDataElementOptions(u,f.active?"active":n),o&&(m.options.radius=0)),this.updateElement(f,u,m,n)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return e!=="active"&&(n.radius=0),n.radius+=T(s&&s._custom,o),n}}A(Ls,"id","bubble"),A(Ls,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),A(Ls,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function gm(i,t,e){let s=1,n=1,o=0,r=0;if(t<G){const a=i,l=a+t,c=Math.cos(a),h=Math.sin(a),d=Math.cos(l),u=Math.sin(l),f=(w,x,_)=>Ki(w,a,l,!0)?1:Math.max(x,x*e,_,_*e),p=(w,x,_)=>Ki(w,a,l,!0)?-1:Math.min(x,x*e,_,_*e),m=f(0,c,d),g=f(et,h,u),b=p(H,c,d),y=p(H+et,h,u);s=(m-b)/2,n=(g-y)/2,o=-(m+b)/2,r=-(g+y)/2}return{ratioX:s,ratioY:n,offsetX:o,offsetY:r}}class Ve extends $t{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let o=l=>+s[l];if(F(s[t])){const{key:l="value"}=this._parsing;o=c=>+Se(s[c],l)}let r,a;for(r=t,a=t+e;r<a;++r)n._parsed[r]=o(r)}}_getRotation(){return zt(this.options.rotation-90)}_getCircumference(){return zt(this.options.circumference)}_getRotationExtents(){let t=G,e=-G;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,o=n._getRotation(),r=n._getCircumference();t=Math.min(t,o),e=Math.max(e,o+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,n=this._cachedMeta,o=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min(Df(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:p,offsetY:m}=gm(d,h,l),g=(s.width-r)/u,b=(s.height-r)/f,y=Math.max(Math.min(g,b)/2,0),w=tc(this.options.radius,y),x=Math.max(w*l,0),_=(w-x)/this._getVisibleDatasetWeightTotal();this.offsetX=p*w,this.offsetY=m*w,n.total=this.calculateTotal(),this.outerRadius=w-_*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-_*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const s=this.options,n=this._cachedMeta,o=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/G)}updateElements(t,e,s,n){const o=n==="reset",r=this.chart,a=r.chartArea,c=r.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,u=o&&c.animateScale,f=u?0:this.innerRadius,p=u?0:this.outerRadius,{sharedOptions:m,includeOptions:g}=this._getSharedOptions(e,n);let b=this._getRotation(),y;for(y=0;y<e;++y)b+=this._circumference(y,o);for(y=e;y<e+s;++y){const w=this._circumference(y,o),x=t[y],_={x:h+this.offsetX,y:d+this.offsetY,startAngle:b,endAngle:b+w,circumference:w,outerRadius:p,innerRadius:f};g&&(_.options=m||this.resolveDataElementOptions(y,x.active?"active":n)),b+=w,this.updateElement(x,y,_,n)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,n;for(n=0;n<e.length;n++){const o=t._parsed[n];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(n)&&!e[n].hidden&&(s+=Math.abs(o))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?G*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],o=hs(e._parsed[t],s.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const s=this.chart;let n,o,r,a,l;if(!t){for(n=0,o=s.data.datasets.length;n<o;++n)if(s.isDatasetVisible(n)){r=s.getDatasetMeta(n),t=r.data,a=r.controller;break}}if(!t)return 0;for(n=0,o=t.length;n<o;++n)l=a.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,n=t.length;s<n;++s){const o=this.resolveDataElementOptions(s);e=Math.max(e,o.offset||0,o.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(T(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}A(Ve,"id","doughnut"),A(Ve,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),A(Ve,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),A(Ve,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,c)=>{const d=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:d.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(c),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:n,pointStyle:s,borderRadius:r&&(a||d.borderRadius),index:c}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Rs extends $t{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:n=[],_dataset:o}=e,r=this.chart._animationsDisabled;let{start:a,count:l}=lc(e,n,r);this._drawStart=a,this._drawCount=l,cc(e)&&(a=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!o._decimated,s.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:c},t),this.updateElements(n,a,l,t)}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,n),u=r.axis,f=a.axis,{spanGaps:p,segment:m}=this.options,g=fi(p)?p:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||n==="none",y=e+s,w=t.length;let x=e>0&&this.getParsed(e-1);for(let _=0;_<w;++_){const k=t[_],S=b?k:{};if(_<e||_>=y){S.skip=!0;continue}const M=this.getParsed(_),D=L(M[f]),P=S[u]=r.getPixelForValue(M[u],_),E=S[f]=o||D?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,M,l):M[f],_);S.skip=isNaN(P)||isNaN(E)||D,S.stop=_>0&&Math.abs(M[u]-x[u])>g,m&&(S.parsed=M,S.raw=c.data[_]),d&&(S.options=h||this.resolveDataElementOptions(_,k.active?"active":n)),b||this.updateElement(k,_,S,n),x=M}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const o=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}A(Rs,"id","line"),A(Rs,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),A(Rs,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class Fi extends $t{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],o=hs(e._parsed[t].r,s.options.locale);return{label:n[t]||"",value:o}}parseObjectData(t,e,s,n){return bc.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const o=this.getParsed(n).r;!isNaN(o)&&this.chart.getDataVisibility(n)&&(o<e.min&&(e.min=o),o>e.max&&(e.max=o))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(n/2,0),r=Math.max(s.cutoutPercentage?o/100*s.cutoutPercentage:1,0),a=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,n){const o=n==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,d=c.yCenter,u=c.getIndexAngle(0)-.5*H;let f=u,p;const m=360/this.countVisibleElements();for(p=0;p<e;++p)f+=this._computeAngle(p,n,m);for(p=e;p<e+s;p++){const g=t[p];let b=f,y=f+this._computeAngle(p,n,m),w=r.getDataVisibility(p)?c.getDistanceFromCenterForValue(this.getParsed(p).r):0;f=y,o&&(l.animateScale&&(w=0),l.animateRotate&&(b=y=u));const x={x:h,y:d,innerRadius:0,outerRadius:w,startAngle:b,endAngle:y,options:this.resolveDataElementOptions(p,g.active?"active":n)};this.updateElement(g,p,x,n)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?zt(this.resolveDataElementOptions(t,e).angle||s):0}}A(Fi,"id","polarArea"),A(Fi,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),A(Fi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return e.labels.map((o,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class oo extends Ve{}A(oo,"id","pie"),A(oo,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class zs extends $t{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,n){return bc.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta,s=e.dataset,n=e.data||[],o=e.iScale.getLabels();if(s.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===n.length,options:r};this.updateElement(s,void 0,a,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,s,n){const o=this._cachedMeta.rScale,r=n==="reset";for(let a=e;a<e+s;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":n),h=o.getPointPositionForValue(a,this.getParsed(a).r),d=r?o.xCenter:h.x,u=r?o.yCenter:h.y,f={x:d,y:u,angle:h.angle,skip:isNaN(d)||isNaN(u),options:c};this.updateElement(l,a,f,n)}}}A(zs,"id","radar"),A(zs,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),A(zs,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class $s extends $t{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:o}=e,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,n=this.chart._animationsDisabled;let{start:o,count:r}=lc(e,s,n);if(this._drawStart=o,this._drawCount=r,cc(e)&&(o=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,o,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,n),d=this.getSharedOptions(h),u=this.includeOptions(n,d),f=r.axis,p=a.axis,{spanGaps:m,segment:g}=this.options,b=fi(m)?m:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||o||n==="none";let w=e>0&&this.getParsed(e-1);for(let x=e;x<e+s;++x){const _=t[x],k=this.getParsed(x),S=y?_:{},M=L(k[p]),D=S[f]=r.getPixelForValue(k[f],x),P=S[p]=o||M?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,k,l):k[p],x);S.skip=isNaN(D)||isNaN(P)||M,S.stop=x>0&&Math.abs(k[f]-w[f])>b,g&&(S.parsed=k,S.raw=c.data[x]),u&&(S.options=d||this.resolveDataElementOptions(x,_.active?"active":n)),y||this.updateElement(_,x,S,n),w=k}this.updateSharedOptions(d,n,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!e.length)return n;const o=e[0].size(this.resolveDataElementOptions(0)),r=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,o,r)/2}}A($s,"id","scatter"),A($s,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),A($s,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var bm=Object.freeze({__proto__:null,BarController:Ts,BubbleController:Ls,DoughnutController:Ve,LineController:Rs,PieController:oo,PolarAreaController:Fi,RadarController:zs,ScatterController:$s});function $e(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Bo{constructor(t){A(this,"options");this.options=t||{}}static override(t){Object.assign(Bo.prototype,t)}init(){}formats(){return $e()}parse(){return $e()}format(){return $e()}add(){return $e()}diff(){return $e()}startOf(){return $e()}endOf(){return $e()}}var vm={_date:Bo};function ym(i,t,e,s){const{controller:n,data:o,_sorted:r}=i,a=n._cachedMeta.iScale,l=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&r&&o.length){const c=a._reversePixels?Hf:ee;if(s){if(n._sharedOptions){const h=o[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const u=c(o,t,e-d),f=c(o,t,e+d);return{lo:u.lo,hi:f.hi}}}}else{const h=c(o,t,e);if(l){const{vScale:d}=n._cachedMeta,{_parsed:u}=i,f=u.slice(0,h.lo+1).reverse().findIndex(m=>!L(m[d.axis]));h.lo-=Math.max(0,f);const p=u.slice(h.hi).findIndex(m=>!L(m[d.axis]));h.hi+=Math.max(0,p)}return h}}return{lo:0,hi:o.length-1}}function _n(i,t,e,s,n){const o=i.getSortedVisibleDatasetMetas(),r=e[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:h}=o[a],{lo:d,hi:u}=ym(o[a],t,r,n);for(let f=d;f<=u;++f){const p=h[f];p.skip||s(p,c,f)}}}function _m(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(s,n){const o=t?Math.abs(s.x-n.x):0,r=e?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}function zn(i,t,e,s,n){const o=[];return!n&&!i.isPointInArea(t)||_n(i,e,t,function(a,l,c){!n&&!ie(a,i.chartArea,0)||a.inRange(t.x,t.y,s)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function xm(i,t,e,s){let n=[];function o(r,a,l){const{startAngle:c,endAngle:h}=r.getProps(["startAngle","endAngle"],s),{angle:d}=sc(r,{x:t.x,y:t.y});Ki(d,c,h)&&n.push({element:r,datasetIndex:a,index:l})}return _n(i,e,t,o),n}function wm(i,t,e,s,n,o){let r=[];const a=_m(e);let l=Number.POSITIVE_INFINITY;function c(h,d,u){const f=h.inRange(t.x,t.y,n);if(s&&!f)return;const p=h.getCenterPoint(n);if(!(!!o||i.isPointInArea(p))&&!f)return;const g=a(t,p);g<l?(r=[{element:h,datasetIndex:d,index:u}],l=g):g===l&&r.push({element:h,datasetIndex:d,index:u})}return _n(i,e,t,c),r}function $n(i,t,e,s,n,o){return!o&&!i.isPointInArea(t)?[]:e==="r"&&!s?xm(i,t,e,n):wm(i,t,e,s,n,o)}function fa(i,t,e,s,n){const o=[],r=e==="x"?"inXRange":"inYRange";let a=!1;return _n(i,e,t,(l,c,h)=>{l[r]&&l[r](t[e],n)&&(o.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,n))}),s&&!a?[]:o}var km={modes:{index(i,t,e,s){const n=Fe(t,i),o=e.axis||"x",r=e.includeInvisible||!1,a=e.intersect?zn(i,n,o,s,r):$n(i,n,o,!1,s,r),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,d=c.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,s){const n=Fe(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;let a=e.intersect?zn(i,n,o,s,r):$n(i,n,o,!1,s,r);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,s){const n=Fe(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;return zn(i,n,o,s,r)},nearest(i,t,e,s){const n=Fe(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;return $n(i,n,o,e.intersect,s,r)},x(i,t,e,s){const n=Fe(t,i);return fa(i,n,"x",e.intersect,s)},y(i,t,e,s){const n=Fe(t,i);return fa(i,n,"y",e.intersect,s)}}};const Dc=["left","top","right","bottom"];function ki(i,t){return i.filter(e=>e.pos===t)}function pa(i,t){return i.filter(e=>Dc.indexOf(e.pos)===-1&&e.box.axis===t)}function Ci(i,t){return i.sort((e,s)=>{const n=t?s:e,o=t?e:s;return n.weight===o.weight?n.index-o.index:n.weight-o.weight})}function Cm(i){const t=[];let e,s,n,o,r,a;for(e=0,s=(i||[]).length;e<s;++e)n=i[e],{position:o,options:{stack:r,stackWeight:a=1}}=n,t.push({index:e,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&o+r,stackWeight:a});return t}function Sm(i){const t={};for(const e of i){const{stack:s,pos:n,stackWeight:o}=e;if(!s||!Dc.includes(n))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return t}function Mm(i,t){const e=Sm(i),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let o,r,a;for(o=0,r=i.length;o<r;++o){a=i[o];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=n):(a.width=s,a.height=h?h*n:l&&t.availableHeight)}return e}function Am(i){const t=Cm(i),e=Ci(t.filter(c=>c.box.fullSize),!0),s=Ci(ki(t,"left"),!0),n=Ci(ki(t,"right")),o=Ci(ki(t,"top"),!0),r=Ci(ki(t,"bottom")),a=pa(t,"x"),l=pa(t,"y");return{fullSize:e,leftAndTop:s.concat(o),rightAndBottom:n.concat(l).concat(r).concat(a),chartArea:ki(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:o.concat(r).concat(a)}}function ma(i,t,e,s){return Math.max(i[e],t[e])+Math.max(i[s],t[s])}function Pc(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function Dm(i,t,e,s){const{pos:n,box:o}=e,r=i.maxPadding;if(!F(n)){e.size&&(i[n]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?o.height:o.width),e.size=d.size/d.count,i[n]+=e.size}o.getPadding&&Pc(r,o.getPadding());const a=Math.max(0,t.outerWidth-ma(r,i,"left","right")),l=Math.max(0,t.outerHeight-ma(r,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function Pm(i){const t=i.maxPadding;function e(s){const n=Math.max(t[s]-i[s],0);return i[s]+=n,n}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function Em(i,t){const e=t.maxPadding;function s(n){const o={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{o[r]=Math.max(t[r],e[r])}),o}return s(i?["left","right"]:["top","bottom"])}function Pi(i,t,e,s){const n=[];let o,r,a,l,c,h;for(o=0,r=i.length,c=0;o<r;++o){a=i[o],l=a.box,l.update(a.width||t.w,a.height||t.h,Em(a.horizontal,t));const{same:d,other:u}=Dm(t,e,a,s);c|=d&&n.length,h=h||u,l.fullSize||n.push(a)}return c&&Pi(n,t,e,s)||h}function vs(i,t,e,s,n){i.top=e,i.left=t,i.right=t+s,i.bottom=e+n,i.width=s,i.height=n}function ga(i,t,e,s){const n=e.padding;let{x:o,y:r}=t;for(const a of i){const l=a.box,c=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*h,u=c.size||l.height;Xi(c.start)&&(r=c.start),l.fullSize?vs(l,n.left,r,e.outerWidth-n.right-n.left,u):vs(l,t.left+c.placed,r,d,u),c.start=r,c.placed+=d,r=l.bottom}else{const d=t.h*h,u=c.size||l.width;Xi(c.start)&&(o=c.start),l.fullSize?vs(l,o,n.top,u,e.outerHeight-n.bottom-n.top):vs(l,o,t.top+c.placed,u,d),c.start=o,c.placed+=d,o=l.right}}t.x=o,t.y=r}var gt={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,s){if(!i)return;const n=dt(i.options.layout.padding),o=Math.max(t-n.width,0),r=Math.max(e-n.height,0),a=Am(i.boxes),l=a.vertical,c=a.horizontal;W(i.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const h=l.reduce((m,g)=>g.box.options&&g.box.options.display===!1?m:m+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:n,availableWidth:o,availableHeight:r,vBoxMaxWidth:o/2/h,hBoxMaxHeight:r/2}),u=Object.assign({},n);Pc(u,dt(s));const f=Object.assign({maxPadding:u,w:o,h:r,x:n.left,y:n.top},n),p=Mm(l.concat(c),d);Pi(a.fullSize,f,d,p),Pi(l,f,d,p),Pi(c,f,d,p)&&Pi(l,f,d,p),Pm(f),ga(a.leftAndTop,f,d,p),f.x+=f.w,f.y+=f.h,ga(a.rightAndBottom,f,d,p),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},W(a.chartArea,m=>{const g=m.box;Object.assign(g,i.chartArea),g.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Ec{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,n){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):s)}}isAttached(t){return!0}updateConfig(t){}}class Om extends Ec{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Is="$chartjs",Tm={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},ba=i=>i===null||i==="";function Lm(i,t){const e=i.style,s=i.getAttribute("height"),n=i.getAttribute("width");if(i[Is]={initial:{height:s,width:n,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",ba(n)){const o=ta(i,"width");o!==void 0&&(i.width=o)}if(ba(s))if(i.style.height==="")i.height=i.width/(t||2);else{const o=ta(i,"height");o!==void 0&&(i.height=o)}return i}const Oc=Rp?{passive:!0}:!1;function Rm(i,t,e){i&&i.addEventListener(t,e,Oc)}function zm(i,t,e){i&&i.canvas&&i.canvas.removeEventListener(t,e,Oc)}function $m(i,t){const e=Tm[i.type]||i.type,{x:s,y:n}=Fe(i,t);return{type:e,chart:t,native:i,x:s!==void 0?s:null,y:n!==void 0?n:null}}function en(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function Im(i,t,e){const s=i.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||en(a.addedNodes,s),r=r&&!en(a.removedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}function Fm(i,t,e){const s=i.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||en(a.removedNodes,s),r=r&&!en(a.addedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}const Qi=new Map;let va=0;function Tc(){const i=window.devicePixelRatio;i!==va&&(va=i,Qi.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function Bm(i,t){Qi.size||window.addEventListener("resize",Tc),Qi.set(i,t)}function Vm(i){Qi.delete(i),Qi.size||window.removeEventListener("resize",Tc)}function Hm(i,t,e){const s=i.canvas,n=s&&Fo(s);if(!n)return;const o=ac((a,l)=>{const c=n.clientWidth;e(a,l),c<n.clientWidth&&e()},window),r=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||o(c,h)});return r.observe(n),Bm(i,o),r}function In(i,t,e){e&&e.disconnect(),t==="resize"&&Vm(i)}function jm(i,t,e){const s=i.canvas,n=ac(o=>{i.ctx!==null&&e($m(o,i))},i);return Rm(s,t,n),n}class Nm extends Ec{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(Lm(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Is])return!1;const s=e[Is].initial;["height","width"].forEach(o=>{const r=s[o];L(r)?e.removeAttribute(o):e.setAttribute(o,r)});const n=s.style||{};return Object.keys(n).forEach(o=>{e.style[o]=n[o]}),e.width=e.width,delete e[Is],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),r={attach:Im,detach:Fm,resize:Hm}[e]||jm;n[e]=r(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),n=s[e];if(!n)return;({attach:In,detach:In,resize:In}[e]||zm)(t,e,n),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,n){return Lp(t,e,s,n)}isAttached(t){const e=t&&Fo(t);return!!(e&&e.isConnected)}}function Wm(i){return!Io()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Om:Nm}var Ps;let de=(Ps=class{constructor(){A(this,"x");A(this,"y");A(this,"active",!1);A(this,"options");A(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return fi(this.x)&&fi(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const n={};return t.forEach(o=>{n[o]=s[o]&&s[o].active()?s[o]._to:this[o]}),n}},A(Ps,"defaults",{}),A(Ps,"defaultRoutes"),Ps);function Um(i,t){const e=i.options.ticks,s=qm(i),n=Math.min(e.maxTicksLimit||s,s),o=e.major.enabled?Xm(t):[],r=o.length,a=o[0],l=o[r-1],c=[];if(r>n)return Km(t,c,o,r/n),c;const h=Ym(o,t,n);if(r>0){let d,u;const f=r>1?Math.round((l-a)/(r-1)):null;for(ys(t,c,h,L(f)?0:a-f,a),d=0,u=r-1;d<u;d++)ys(t,c,h,o[d],o[d+1]);return ys(t,c,h,l,L(f)?t.length:l+f),c}return ys(t,c,h),c}function qm(i){const t=i.options.offset,e=i._tickSize(),s=i._length/e+(t?0:1),n=i._maxLength/e;return Math.floor(Math.min(s,n))}function Ym(i,t,e){const s=Gm(i),n=t.length/e;if(!s)return Math.max(n,1);const o=$f(s);for(let r=0,a=o.length-1;r<a;r++){const l=o[r];if(l>n)return l}return Math.max(n,1)}function Xm(i){const t=[];let e,s;for(e=0,s=i.length;e<s;e++)i[e].major&&t.push(e);return t}function Km(i,t,e,s){let n=0,o=e[0],r;for(s=Math.ceil(s),r=0;r<i.length;r++)r===o&&(t.push(i[r]),n++,o=e[n*s])}function ys(i,t,e,s,n){const o=T(s,0),r=Math.min(T(n,i.length),i.length);let a=0,l,c,h;for(e=Math.ceil(e),n&&(l=n-s,e=l/Math.floor(l/e)),h=o;h<0;)a++,h=Math.round(o+a*e);for(c=Math.max(o,0);c<r;c++)c===h&&(t.push(i[c]),a++,h=Math.round(o+a*e))}function Gm(i){const t=i.length;let e,s;if(t<2)return!1;for(s=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==s)return!1;return s}const Qm=i=>i==="left"?"right":i==="right"?"left":i,ya=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,_a=(i,t)=>Math.min(t||i,i);function xa(i,t){const e=[],s=i.length/t,n=i.length;let o=0;for(;o<n;o+=s)e.push(i[Math.floor(o)]);return e}function Jm(i,t,e){const s=i.ticks.length,n=Math.min(t,s-1),o=i._startPixel,r=i._endPixel,a=1e-6;let l=i.getPixelForTick(n),c;if(!(e&&(s===1?c=Math.max(l-o,r-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<o-a||l>r+a)))return l}function Zm(i,t){W(i,e=>{const s=e.gc,n=s.length/2;let o;if(n>t){for(o=0;o<n;++o)delete e.data[s[o]];s.splice(0,n)}})}function Si(i){return i.drawTicks?i.tickLength:0}function wa(i,t){if(!i.display)return 0;const e=ot(i.font,t),s=dt(i.padding);return(K(i.text)?i.text.length:1)*e.lineHeight+s.height}function tg(i,t){return Pe(i,{scale:t,type:"scale"})}function eg(i,t,e){return Pe(i,{tick:e,index:t,type:"tick"})}function ig(i,t,e){let s=Oo(i);return(e&&t!=="right"||!e&&t==="right")&&(s=Qm(s)),s}function sg(i,t,e,s){const{top:n,left:o,bottom:r,right:a,chart:l}=i,{chartArea:c,scales:h}=l;let d=0,u,f,p;const m=r-n,g=a-o;if(i.isHorizontal()){if(f=ft(s,o,a),F(e)){const b=Object.keys(e)[0],y=e[b];p=h[b].getPixelForValue(y)+m-t}else e==="center"?p=(c.bottom+c.top)/2+m-t:p=ya(i,e,t);u=a-o}else{if(F(e)){const b=Object.keys(e)[0],y=e[b];f=h[b].getPixelForValue(y)-g+t}else e==="center"?f=(c.left+c.right)/2-g+t:f=ya(i,e,t);p=ft(s,r,n),d=e==="left"?-et:et}return{titleX:f,titleY:p,maxWidth:u,rotation:d}}class Ze extends de{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:n}=this;return t=Ct(t,Number.POSITIVE_INFINITY),e=Ct(e,Number.NEGATIVE_INFINITY),s=Ct(s,Number.POSITIVE_INFINITY),n=Ct(n,Number.NEGATIVE_INFINITY),{min:Ct(t,s),max:Ct(e,n),minDefined:tt(t),maxDefined:tt(e)}}getMinMax(t){let{min:e,max:s,minDefined:n,maxDefined:o}=this.getUserBounds(),r;if(n&&o)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)r=a[l].controller.getMinMax(this,t),n||(e=Math.min(e,r.min)),o||(s=Math.max(s,r.max));return e=o&&e>s?s:e,s=n&&e>s?e:s,{min:Ct(e,Ct(s,e)),max:Ct(s,Ct(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){Y(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:n,grace:o,ticks:r}=this.options,a=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=dp(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?xa(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=Um(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){Y(this.options.afterUpdate,[this])}beforeSetDimensions(){Y(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){Y(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),Y(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){Y(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s],o.label=Y(e.callback,[o.value,s,t],this)}afterTickToLabelConversion(){Y(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){Y(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=_a(this.ticks.length,t.ticks.maxTicksLimit),n=e.minRotation||0,o=e.maxRotation;let r=n,a,l,c;if(!this._isVisible()||!e.display||n>=o||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const h=this._getLabelSizes(),d=h.widest.width,u=h.highest.height,f=ct(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:f/(s-1),d+6>a&&(a=f/(s-(t.offset?.5:1)),l=this.maxHeight-Si(t.grid)-e.padding-wa(t.title,this.chart.options.font),c=Math.sqrt(d*d+u*u),r=Po(Math.min(Math.asin(ct((h.highest.height+6)/a,-1,1)),Math.asin(ct(l/c,-1,1))-Math.asin(ct(u/c,-1,1)))),r=Math.max(n,Math.min(o,r))),this.labelRotation=r}afterCalculateLabelRotation(){Y(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){Y(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:n,grid:o}}=this,r=this._isVisible(),a=this.isHorizontal();if(r){const l=wa(n,e.options.font);if(a?(t.width=this.maxWidth,t.height=Si(o)+l):(t.height=this.maxHeight,t.width=Si(o)+l),s.display&&this.ticks.length){const{first:c,last:h,widest:d,highest:u}=this._getLabelSizes(),f=s.padding*2,p=zt(this.labelRotation),m=Math.cos(p),g=Math.sin(p);if(a){const b=s.mirror?0:g*d.width+m*u.height;t.height=Math.min(this.maxHeight,t.height+b+f)}else{const b=s.mirror?0:m*d.width+g*u.height;t.width=Math.min(this.maxWidth,t.width+b+f)}this._calculatePadding(c,h,g,m)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,n){const{ticks:{align:o,padding:r},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let u=0,f=0;l?c?(u=n*t.width,f=s*e.height):(u=s*t.height,f=n*e.width):o==="start"?f=e.width:o==="end"?u=t.width:o!=="inner"&&(u=t.width/2,f=e.width/2),this.paddingLeft=Math.max((u-h+r)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-d+r)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;o==="start"?(h=0,d=t.height):o==="end"&&(h=e.height,d=0),this.paddingTop=h+r,this.paddingBottom=d+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){Y(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)L(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=xa(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:n,_longestTextCache:o}=this,r=[],a=[],l=Math.floor(e/_a(e,s));let c=0,h=0,d,u,f,p,m,g,b,y,w,x,_;for(d=0;d<e;d+=l){if(p=t[d].label,m=this._resolveTickFontOptions(d),n.font=g=m.string,b=o[g]=o[g]||{data:{},gc:[]},y=m.lineHeight,w=x=0,!L(p)&&!K(p))w=Zs(n,b.data,b.gc,w,p),x=y;else if(K(p))for(u=0,f=p.length;u<f;++u)_=p[u],!L(_)&&!K(_)&&(w=Zs(n,b.data,b.gc,w,_),x+=y);r.push(w),a.push(x),c=Math.max(w,c),h=Math.max(x,h)}Zm(o,e);const k=r.indexOf(c),S=a.indexOf(h),M=D=>({width:r[D]||0,height:a[D]||0});return{first:M(0),last:M(e-1),widest:M(k),highest:M(S),widths:r,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Vf(this._alignToPixels?ze(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=eg(this.getContext(),t,s))}return this.$context||(this.$context=tg(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=zt(this.labelRotation),s=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,a=o?o.widest.width+r:0,l=o?o.highest.height+r:0;return this.isHorizontal()?l*s>a*n?a/s:l/n:l*n<a*s?l/s:a/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,n=this.options,{grid:o,position:r,border:a}=n,l=o.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),u=Si(o),f=[],p=a.setContext(this.getContext()),m=p.display?p.width:0,g=m/2,b=function(R){return ze(s,R,m)};let y,w,x,_,k,S,M,D,P,E,O,I;if(r==="top")y=b(this.bottom),S=this.bottom-u,D=y-g,E=b(t.top)+g,I=t.bottom;else if(r==="bottom")y=b(this.top),E=t.top,I=b(t.bottom)-g,S=y+g,D=this.top+u;else if(r==="left")y=b(this.right),k=this.right-u,M=y-g,P=b(t.left)+g,O=t.right;else if(r==="right")y=b(this.left),P=t.left,O=b(t.right)-g,k=y+g,M=this.left+u;else if(e==="x"){if(r==="center")y=b((t.top+t.bottom)/2+.5);else if(F(r)){const R=Object.keys(r)[0],V=r[R];y=b(this.chart.scales[R].getPixelForValue(V))}E=t.top,I=t.bottom,S=y+g,D=S+u}else if(e==="y"){if(r==="center")y=b((t.left+t.right)/2);else if(F(r)){const R=Object.keys(r)[0],V=r[R];y=b(this.chart.scales[R].getPixelForValue(V))}k=y-g,M=k-u,P=t.left,O=t.right}const B=T(n.ticks.maxTicksLimit,d),z=Math.max(1,Math.ceil(d/B));for(w=0;w<d;w+=z){const R=this.getContext(w),V=o.setContext(R),q=a.setContext(R),U=V.lineWidth,ue=V.color,ds=q.dash||[],ti=q.dashOffset,vi=V.tickWidth,Ee=V.tickColor,yi=V.tickBorderDash||[],Oe=V.tickBorderDashOffset;x=Jm(this,w,l),x!==void 0&&(_=ze(s,x,U),c?k=M=P=O=_:S=D=E=I=_,f.push({tx1:k,ty1:S,tx2:M,ty2:D,x1:P,y1:E,x2:O,y2:I,width:U,color:ue,borderDash:ds,borderDashOffset:ti,tickWidth:vi,tickColor:Ee,tickBorderDash:yi,tickBorderDashOffset:Oe}))}return this._ticksLength=d,this._borderValue=y,f}_computeLabelItems(t){const e=this.axis,s=this.options,{position:n,ticks:o}=s,r=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:d}=o,u=Si(s.grid),f=u+h,p=d?-h:f,m=-zt(this.labelRotation),g=[];let b,y,w,x,_,k,S,M,D,P,E,O,I="middle";if(n==="top")k=this.bottom-p,S=this._getXAxisLabelAlignment();else if(n==="bottom")k=this.top+p,S=this._getXAxisLabelAlignment();else if(n==="left"){const z=this._getYAxisLabelAlignment(u);S=z.textAlign,_=z.x}else if(n==="right"){const z=this._getYAxisLabelAlignment(u);S=z.textAlign,_=z.x}else if(e==="x"){if(n==="center")k=(t.top+t.bottom)/2+f;else if(F(n)){const z=Object.keys(n)[0],R=n[z];k=this.chart.scales[z].getPixelForValue(R)+f}S=this._getXAxisLabelAlignment()}else if(e==="y"){if(n==="center")_=(t.left+t.right)/2-f;else if(F(n)){const z=Object.keys(n)[0],R=n[z];_=this.chart.scales[z].getPixelForValue(R)}S=this._getYAxisLabelAlignment(u).textAlign}e==="y"&&(l==="start"?I="top":l==="end"&&(I="bottom"));const B=this._getLabelSizes();for(b=0,y=a.length;b<y;++b){w=a[b],x=w.label;const z=o.setContext(this.getContext(b));M=this.getPixelForTick(b)+o.labelOffset,D=this._resolveTickFontOptions(b),P=D.lineHeight,E=K(x)?x.length:1;const R=E/2,V=z.color,q=z.textStrokeColor,U=z.textStrokeWidth;let ue=S;r?(_=M,S==="inner"&&(b===y-1?ue=this.options.reverse?"left":"right":b===0?ue=this.options.reverse?"right":"left":ue="center"),n==="top"?c==="near"||m!==0?O=-E*P+P/2:c==="center"?O=-B.highest.height/2-R*P+P:O=-B.highest.height+P/2:c==="near"||m!==0?O=P/2:c==="center"?O=B.highest.height/2-R*P:O=B.highest.height-E*P,d&&(O*=-1),m!==0&&!z.showLabelBackdrop&&(_+=P/2*Math.sin(m))):(k=M,O=(1-E)*P/2);let ds;if(z.showLabelBackdrop){const ti=dt(z.backdropPadding),vi=B.heights[b],Ee=B.widths[b];let yi=O-ti.top,Oe=0-ti.left;switch(I){case"middle":yi-=vi/2;break;case"bottom":yi-=vi;break}switch(S){case"center":Oe-=Ee/2;break;case"right":Oe-=Ee;break;case"inner":b===y-1?Oe-=Ee:b>0&&(Oe-=Ee/2);break}ds={left:Oe,top:yi,width:Ee+ti.width,height:vi+ti.height,color:z.backdropColor}}g.push({label:x,font:D,textOffset:O,options:{rotation:m,color:V,strokeColor:q,strokeWidth:U,textAlign:ue,textBaseline:I,translation:[_,k],backdrop:ds}})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-zt(this.labelRotation))return t==="top"?"left":"right";let n="center";return e.align==="start"?n="left":e.align==="end"?n="right":e.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:n,padding:o}}=this.options,r=this._getLabelSizes(),a=t+o,l=r.widest.width;let c,h;return e==="left"?n?(h=this.right+o,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?n?(h=this.left+o,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:n,width:o,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,n,o,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex(o=>o.value===t);return n>=0?e.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const a=(l,c,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(e.display)for(o=0,r=n.length;o<r;++o){const l=n[o];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:n}}=this,o=s.setContext(this.getContext()),r=s.display?o.width:0;if(!r)return;const a=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,d,u;this.isHorizontal()?(c=ze(t,this.left,r)-r/2,h=ze(t,this.right,a)+a/2,d=u=l):(d=ze(t,this.top,r)-r/2,u=ze(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(c,d),e.lineTo(h,u),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,n=this._computeLabelArea();n&&bn(s,n);const o=this.getLabelItems(t);for(const r of o){const a=r.options,l=r.font,c=r.label,h=r.textOffset;Xe(s,c,0,h,l,a)}n&&vn(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:n}}=this;if(!s.display)return;const o=ot(s.font),r=dt(s.padding),a=s.align;let l=o.lineHeight/2;e==="bottom"||e==="center"||F(e)?(l+=r.bottom,K(s.text)&&(l+=o.lineHeight*(s.text.length-1))):l+=r.top;const{titleX:c,titleY:h,maxWidth:d,rotation:u}=sg(this,l,e,a);Xe(t,s.text,0,0,o,{color:s.color,maxWidth:d,rotation:u,textAlign:ig(a,e,n),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=T(t.grid&&t.grid.z,-1),n=T(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ze.prototype.draw?[{z:e,draw:o=>{this.draw(o)}}]:[{z:s,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let o,r;for(o=0,r=e.length;o<r;++o){const a=e[o];a[s]===this.id&&(!t||a.type===t)&&n.push(a)}return n}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return ot(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class _s{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;rg(e)&&(s=this.register(e));const n=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in n||(n[o]=t,ng(t,r,s),this.override&&Q.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,n=this.scope;s in e&&delete e[s],n&&s in Q[n]&&(delete Q[n][s],this.override&&delete Ye[s])}}function ng(i,t,e){const s=qt(Object.create(null),[e?Q.get(e):{},Q.get(t),i.defaults]);Q.set(t,s),i.defaultRoutes&&og(t,i.defaultRoutes),i.descriptors&&Q.describe(t,i.descriptors)}function og(i,t){Object.keys(t).forEach(e=>{const s=e.split("."),n=s.pop(),o=[i].concat(s).join("."),r=t[e].split("."),a=r.pop(),l=r.join(".");Q.route(o,n,l,a)})}function rg(i){return"id"in i&&"defaults"in i}class ag{constructor(){this.controllers=new _s($t,"datasets",!0),this.elements=new _s(de,"elements"),this.plugins=new _s(Object,"plugins"),this.scales=new _s(Ze,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(n=>{const o=s||this._getRegistryForType(n);s||o.isForType(n)||o===this.plugins&&n.id?this._exec(t,o,n):W(n,r=>{const a=s||this._getRegistryForType(r);this._exec(t,a,r)})})}_exec(t,e,s){const n=Do(t);Y(s["before"+n],[],s),e[t](s),Y(s["after"+n],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const n=e.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var Bt=new ag;class lg{constructor(){this._init=void 0}notify(t,e,s,n){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(o,t,e,s);return e==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,e,s,n){n=n||{};for(const o of t){const r=o.plugin,a=r[s],l=[e,n,o.options];if(Y(a,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){L(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,n=T(s.options&&s.options.plugins,{}),o=cg(s);return n===!1&&!e?[]:dg(t,o,n,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,n=(o,r)=>o.filter(a=>!r.some(l=>a.plugin.id===l.plugin.id));this._notify(n(e,s),t,"stop"),this._notify(n(s,e),t,"start")}}function cg(i){const t={},e=[],s=Object.keys(Bt.plugins.items);for(let o=0;o<s.length;o++)e.push(Bt.getPlugin(s[o]));const n=i.plugins||[];for(let o=0;o<n.length;o++){const r=n[o];e.indexOf(r)===-1&&(e.push(r),t[r.id]=!0)}return{plugins:e,localIds:t}}function hg(i,t){return!t&&i===!1?null:i===!0?{}:i}function dg(i,{plugins:t,localIds:e},s,n){const o=[],r=i.getContext();for(const a of t){const l=a.id,c=hg(s[l],n);c!==null&&o.push({plugin:a,options:ug(i.config,{plugin:a,local:e[l]},c,r)})}return o}function ug(i,{plugin:t,local:e},s,n){const o=i.pluginScopeKeys(t),r=i.getOptionScopes(s,o);return e&&t.defaults&&r.push(t.defaults),i.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function ro(i,t){const e=Q.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function fg(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function pg(i,t){return i===t?"_index_":"_value_"}function ka(i){if(i==="x"||i==="y"||i==="r")return i}function mg(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function ao(i,...t){if(ka(i))return i;for(const e of t){const s=e.axis||mg(e.position)||i.length>1&&ka(i[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Ca(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function gg(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===i||s.yAxisID===i);if(e.length)return Ca(i,"x",e[0])||Ca(i,"y",e[0])}return{}}function bg(i,t){const e=Ye[i.type]||{scales:{}},s=t.scales||{},n=ro(i.type,t),o=Object.create(null);return Object.keys(s).forEach(r=>{const a=s[r];if(!F(a))return console.error(`Invalid scale configuration for scale: ${r}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=ao(r,a,gg(r,i),Q.scales[a.type]),c=pg(l,n),h=e.scales||{};o[r]=Ri(Object.create(null),[{axis:l},a,h[l],h[c]])}),i.data.datasets.forEach(r=>{const a=r.type||i.type,l=r.indexAxis||ro(a,t),h=(Ye[a]||{}).scales||{};Object.keys(h).forEach(d=>{const u=fg(d,l),f=r[u+"AxisID"]||u;o[f]=o[f]||Object.create(null),Ri(o[f],[{axis:u},s[f],h[d]])})}),Object.keys(o).forEach(r=>{const a=o[r];Ri(a,[Q.scales[a.type],Q.scale])}),o}function Lc(i){const t=i.options||(i.options={});t.plugins=T(t.plugins,{}),t.scales=bg(i,t)}function Rc(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function vg(i){return i=i||{},i.data=Rc(i.data),Lc(i),i}const Sa=new Map,zc=new Set;function xs(i,t){let e=Sa.get(i);return e||(e=t(),Sa.set(i,e),zc.add(e)),e}const Mi=(i,t,e)=>{const s=Se(t,e);s!==void 0&&i.add(s)};class yg{constructor(t){this._config=vg(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Rc(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Lc(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return xs(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return xs(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return xs(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return xs(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let n=s.get(t);return(!n||e)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,e,s){const{options:n,type:o}=this,r=this._cachedScopes(t,s),a=r.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Mi(l,t,d))),h.forEach(d=>Mi(l,n,d)),h.forEach(d=>Mi(l,Ye[o]||{},d)),h.forEach(d=>Mi(l,Q,d)),h.forEach(d=>Mi(l,so,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),zc.has(e)&&r.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,Ye[e]||{},Q.datasets[e]||{},{type:e},Q,so]}resolveNamedOptions(t,e,s,n=[""]){const o={$shared:!0},{resolver:r,subPrefixes:a}=Ma(this._resolverCache,t,n);let l=r;if(xg(r,e)){o.$shared=!1,s=Me(s)?s():s;const c=this.createResolver(t,s,a);l=pi(r,s,c)}for(const c of e)o[c]=l[c];return o}createResolver(t,e,s=[""],n){const{resolver:o}=Ma(this._resolverCache,t,s);return F(e)?pi(o,e,void 0,n):o}}function Ma(i,t,e){let s=i.get(t);s||(s=new Map,i.set(t,s));const n=e.join();let o=s.get(n);return o||(o={resolver:Ro(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(n,o)),o}const _g=i=>F(i)&&Object.getOwnPropertyNames(i).some(t=>Me(i[t]));function xg(i,t){const{isScriptable:e,isIndexable:s}=fc(i);for(const n of t){const o=e(n),r=s(n),a=(r||o)&&i[n];if(o&&(Me(a)||_g(a))||r&&K(a))return!0}return!1}var wg="4.5.1";const kg=["top","bottom","left","right","chartArea"];function Aa(i,t){return i==="top"||i==="bottom"||kg.indexOf(i)===-1&&t==="x"}function Da(i,t){return function(e,s){return e[i]===s[i]?e[t]-s[t]:e[i]-s[i]}}function Pa(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),Y(e&&e.onComplete,[i],t)}function Cg(i){const t=i.chart,e=t.options.animation;Y(e&&e.onProgress,[i],t)}function $c(i){return Io()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const Fs={},Ea=i=>{const t=$c(i);return Object.values(Fs).filter(e=>e.canvas===t).pop()};function Sg(i,t,e){const s=Object.keys(i);for(const n of s){const o=+n;if(o>=t){const r=i[n];delete i[n],(e>0||o>t)&&(i[o+e]=r)}}}function Mg(i,t,e,s){return!e||i.type==="mouseout"?null:s?t:i}var fe;let Ji=(fe=class{static register(...t){Bt.add(...t),Oa()}static unregister(...t){Bt.remove(...t),Oa()}constructor(t,e){const s=this.config=new yg(e),n=$c(t),o=Ea(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||Wm(n)),this.platform.updateConfig(s);const a=this.platform.acquireContext(n,r.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=Af(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new lg,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Wf(d=>this.update(d),r.resizeDelay||0),this._dataChanges=[],Fs[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Kt.listen(this,"complete",Pa),Kt.listen(this,"progress",Cg),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:n,_aspectRatio:o}=this;return L(t)?e&&o?o:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Bt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():Zr(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return Gr(this.canvas,this.ctx),this}stop(){return Kt.stop(this),this}resize(t,e){Kt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,n=this.canvas,o=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,e,o),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,Zr(this,a,!0)&&(this.notifyPlugins("resize",{size:r}),Y(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};W(e,(s,n)=>{s.id=n})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,n=Object.keys(s).reduce((r,a)=>(r[a]=!1,r),{});let o=[];e&&(o=o.concat(Object.keys(e).map(r=>{const a=e[r],l=ao(r,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),W(o,r=>{const a=r.options,l=a.id,c=ao(l,a),h=T(a.type,r.dtype);(a.position===void 0||Aa(a.position,c)!==Aa(r.dposition))&&(a.position=r.dposition),n[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const u=Bt.getScale(h);d=new u({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),W(n,(r,a)=>{r||delete s[a]}),W(s,r=>{gt.configure(this,r,r.options),gt.addBox(this,r)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((n,o)=>n.index-o.index),s>e){for(let n=e;n<s;++n)this._destroyDatasetMeta(n);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(Da("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,n)=>{e.filter(o=>o===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,n;for(this._removeUnreferencedMetasets(),s=0,n=e.length;s<n;s++){const o=e[s];let r=this.getDatasetMeta(s);const a=o.type||this.config.type;if(r.type&&r.type!==a&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=a,r.indexAxis=o.indexAxis||ro(a,this.options),r.order=o.order||0,r.index=s,r.label=""+o.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const l=Bt.getController(a),{datasetElementType:c,dataElementType:h}=Q.datasets[a];Object.assign(l,{dataElementType:Bt.getElement(h),datasetElementType:c&&Bt.getElement(c)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){W(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:d}=this.getDatasetMeta(c),u=!n&&o.indexOf(d)===-1;d.buildOrUpdateElements(u),r=Math.max(+d.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),n||W(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(Da("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){W(this.scales,t=>{gt.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Hr(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:n,count:o}of e){const r=s==="_removeElements"?-o:o;Sg(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=o=>new Set(t.filter(r=>r[0]===o).map((r,a)=>a+","+r.splice(1).join(","))),n=s(0);for(let o=1;o<e;o++)if(!Hr(n,s(o)))return;return Array.from(n).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;gt.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],W(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,o)=>{n._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,Me(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),n={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Kt.has(this)?this.attached&&!Kt.running(this)&&Kt.start(this):(this.draw(),Pa({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let n,o;for(n=0,o=e.length;n<o;++n){const r=e[n];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},n=Cc(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(n&&bn(e,n),t.controller.draw(),n&&vn(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return ie(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,n){const o=km.modes[e];return typeof o=="function"?o(this,t,s,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let n=s.filter(o=>o&&o._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=Pe(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const n=s?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,n);Xi(e)?(o.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(o,{visible:s}),this.update(a=>a.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Kt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),Gr(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Fs[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(o,r)=>{e.addEventListener(this,o,r),t[o]=r},n=(o,r,a)=>{o.offsetX=r,o.offsetY=a,this._eventHandler(o)};W(this.options.events,o=>s(o,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},n=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const a=()=>{n("attach",a),this.attached=!0,this.resize(),s("resize",o),s("detach",r)};r=()=>{this.attached=!1,n("resize",o),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():r()}unbindEvents(){W(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},W(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const n=s?"set":"remove";let o,r,a,l;for(e==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){r=t[a];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:o,index:r})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[r],index:r}});!Gs(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const n=this.options.hover,o=(l,c)=>l.filter(h=>!c.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),r=o(e,t),a=s?t:o(t,e);r.length&&this.updateHoverStyle(r,n.mode,!1),a.length&&n.mode&&this.updateHoverStyle(a,n.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;const o=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(o||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:n=[],options:o}=this,r=e,a=this._getActiveElements(t,n,s,r),l=Lf(t),c=Mg(t,this._lastEvent,s,l);s&&(this._lastEvent=null,Y(o.onHover,[t,a,this],this),l&&Y(o.onClick,[t,a,this],this));const h=!Gs(a,n);return(h||e)&&(this._active=a,this._updateHoverStyles(a,n,e)),this._lastEvent=c,h}_getActiveElements(t,e,s,n){if(t.type==="mouseout")return[];if(!s)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}},A(fe,"defaults",Q),A(fe,"instances",Fs),A(fe,"overrides",Ye),A(fe,"registry",Bt),A(fe,"version",wg),A(fe,"getChart",Ea),fe);function Oa(){return W(Ji.instances,i=>i._plugins.invalidate())}function Ag(i,t,e){const{startAngle:s,x:n,y:o,outerRadius:r,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,d=Math.min(c/r,mt(s-e));if(i.beginPath(),i.arc(n,o,r-c/2,s+d/2,e-d/2),a>0){const u=Math.min(c/a,mt(s-e));i.arc(n,o,a+c/2,e-u/2,s+u/2,!0)}else{const u=Math.min(c/2,r*mt(s-e));if(h==="round")i.arc(n,o,u,e-H/2,s+H/2,!0);else if(h==="bevel"){const f=2*u*u,p=-f*Math.cos(e+H/2)+n,m=-f*Math.sin(e+H/2)+o,g=f*Math.cos(s+H/2)+n,b=f*Math.sin(s+H/2)+o;i.lineTo(p,m),i.lineTo(g,b)}}i.closePath(),i.moveTo(0,0),i.rect(0,0,i.canvas.width,i.canvas.height),i.clip("evenodd")}function Dg(i,t,e){const{startAngle:s,pixelMargin:n,x:o,y:r,outerRadius:a,innerRadius:l}=t;let c=n/a;i.beginPath(),i.arc(o,r,a,s-c,e+c),l>n?(c=n/l,i.arc(o,r,l,e+c,s-c,!0)):i.arc(o,r,n,e+et,s-et),i.closePath(),i.clip()}function Pg(i){return Lo(i,["outerStart","outerEnd","innerStart","innerEnd"])}function Eg(i,t,e,s){const n=Pg(i.options.borderRadius),o=(e-t)/2,r=Math.min(o,s*t/2),a=l=>{const c=(e-Math.min(o,l))*s/2;return ct(l,0,Math.min(o,c))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:ct(n.innerStart,0,r),innerEnd:ct(n.innerEnd,0,r)}}function ii(i,t,e,s){return{x:e+i*Math.cos(t),y:s+i*Math.sin(t)}}function sn(i,t,e,s,n,o){const{x:r,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-c,0),u=h>0?h+s+e+c:0;let f=0;const p=n-l;if(s){const z=h>0?h-s:0,R=d>0?d-s:0,V=(z+R)/2,q=V!==0?p*V/(V+s):p;f=(p-q)/2}const m=Math.max(.001,p*d-e/H)/d,g=(p-m)/2,b=l+g+f,y=n-g-f,{outerStart:w,outerEnd:x,innerStart:_,innerEnd:k}=Eg(t,u,d,y-b),S=d-w,M=d-x,D=b+w/S,P=y-x/M,E=u+_,O=u+k,I=b+_/E,B=y-k/O;if(i.beginPath(),o){const z=(D+P)/2;if(i.arc(r,a,d,D,z),i.arc(r,a,d,z,P),x>0){const U=ii(M,P,r,a);i.arc(U.x,U.y,x,P,y+et)}const R=ii(O,y,r,a);if(i.lineTo(R.x,R.y),k>0){const U=ii(O,B,r,a);i.arc(U.x,U.y,k,y+et,B+Math.PI)}const V=(y-k/u+(b+_/u))/2;if(i.arc(r,a,u,y-k/u,V,!0),i.arc(r,a,u,V,b+_/u,!0),_>0){const U=ii(E,I,r,a);i.arc(U.x,U.y,_,I+Math.PI,b-et)}const q=ii(S,b,r,a);if(i.lineTo(q.x,q.y),w>0){const U=ii(S,D,r,a);i.arc(U.x,U.y,w,b-et,D)}}else{i.moveTo(r,a);const z=Math.cos(D)*d+r,R=Math.sin(D)*d+a;i.lineTo(z,R);const V=Math.cos(P)*d+r,q=Math.sin(P)*d+a;i.lineTo(V,q)}i.closePath()}function Og(i,t,e,s,n){const{fullCircles:o,startAngle:r,circumference:a}=t;let l=t.endAngle;if(o){sn(i,t,e,s,l,n);for(let c=0;c<o;++c)i.fill();isNaN(a)||(l=r+(a%G||G))}return sn(i,t,e,s,l,n),i.fill(),l}function Tg(i,t,e,s,n){const{fullCircles:o,startAngle:r,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:d,borderDashOffset:u,borderRadius:f}=l,p=l.borderAlign==="inner";if(!c)return;i.setLineDash(d||[]),i.lineDashOffset=u,p?(i.lineWidth=c*2,i.lineJoin=h||"round"):(i.lineWidth=c,i.lineJoin=h||"bevel");let m=t.endAngle;if(o){sn(i,t,e,s,m,n);for(let g=0;g<o;++g)i.stroke();isNaN(a)||(m=r+(a%G||G))}p&&Dg(i,t,m),l.selfJoin&&m-r>=H&&f===0&&h!=="miter"&&Ag(i,t,m),o||(sn(i,t,e,s,m,n),i.stroke())}class ni extends de{constructor(e){super();A(this,"circumference");A(this,"endAngle");A(this,"fullCircles");A(this,"innerRadius");A(this,"outerRadius");A(this,"pixelMargin");A(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,n){const o=this.getProps(["x","y"],n),{angle:r,distance:a}=sc(o,{x:e,y:s}),{startAngle:l,endAngle:c,innerRadius:h,outerRadius:d,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,p=T(u,c-l),m=Ki(r,l,c)&&l!==c,g=p>=G||m,b=te(a,h+f,d+f);return g&&b}getCenterPoint(e){const{x:s,y:n,startAngle:o,endAngle:r,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:h}=this.options,d=(o+r)/2,u=(a+l+h+c)/2;return{x:s+Math.cos(d)*u,y:n+Math.sin(d)*u}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:n}=this,o=(s.offset||0)/4,r=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>G?Math.floor(n/G):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*o,Math.sin(l)*o);const c=1-Math.sin(Math.min(H,n||0)),h=o*c;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,Og(e,this,h,r,a),Tg(e,this,h,r,a),e.restore()}}A(ni,"id","arc"),A(ni,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),A(ni,"defaultRoutes",{backgroundColor:"backgroundColor"}),A(ni,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Ic(i,t,e=t){i.lineCap=T(e.borderCapStyle,t.borderCapStyle),i.setLineDash(T(e.borderDash,t.borderDash)),i.lineDashOffset=T(e.borderDashOffset,t.borderDashOffset),i.lineJoin=T(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=T(e.borderWidth,t.borderWidth),i.strokeStyle=T(e.borderColor,t.borderColor)}function Lg(i,t,e){i.lineTo(e.x,e.y)}function Rg(i){return i.stepped?ip:i.tension||i.cubicInterpolationMode==="monotone"?sp:Lg}function Fc(i,t,e={}){const s=i.length,{start:n=0,end:o=s-1}=e,{start:r,end:a}=t,l=Math.max(n,r),c=Math.min(o,a),h=n<r&&o<r||n>a&&o>a;return{count:s,start:l,loop:t.loop,ilen:c<l&&!h?s+c-l:c-l}}function zg(i,t,e,s){const{points:n,options:o}=t,{count:r,start:a,loop:l,ilen:c}=Fc(n,e,s),h=Rg(o);let{move:d=!0,reverse:u}=s||{},f,p,m;for(f=0;f<=c;++f)p=n[(a+(u?c-f:f))%r],!p.skip&&(d?(i.moveTo(p.x,p.y),d=!1):h(i,m,p,u,o.stepped),m=p);return l&&(p=n[(a+(u?c:0))%r],h(i,m,p,u,o.stepped)),!!l}function $g(i,t,e,s){const n=t.points,{count:o,start:r,ilen:a}=Fc(n,e,s),{move:l=!0,reverse:c}=s||{};let h=0,d=0,u,f,p,m,g,b;const y=x=>(r+(c?a-x:x))%o,w=()=>{m!==g&&(i.lineTo(h,g),i.lineTo(h,m),i.lineTo(h,b))};for(l&&(f=n[y(0)],i.moveTo(f.x,f.y)),u=0;u<=a;++u){if(f=n[y(u)],f.skip)continue;const x=f.x,_=f.y,k=x|0;k===p?(_<m?m=_:_>g&&(g=_),h=(d*h+x)/++d):(w(),i.lineTo(x,_),p=k,d=0,m=g=_),b=_}w()}function lo(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?$g:zg}function Ig(i){return i.stepped?zp:i.tension||i.cubicInterpolationMode==="monotone"?$p:Be}function Fg(i,t,e,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,e,s)&&n.closePath()),Ic(i,t.options),i.stroke(n)}function Bg(i,t,e,s){const{segments:n,options:o}=t,r=lo(t);for(const a of n)Ic(i,o,a.style),i.beginPath(),r(i,t,a,{start:e,end:e+s-1})&&i.closePath(),i.stroke()}const Vg=typeof Path2D=="function";function Hg(i,t,e,s){Vg&&!t.options.segment?Fg(i,t,e,s):Bg(i,t,e,s)}class ve extends de{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;Ap(this._points,s,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=jp(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,n=t[e],o=this.points,r=kc(this,{property:e,start:n,end:n});if(!r.length)return;const a=[],l=Ig(s);let c,h;for(c=0,h=r.length;c<h;++c){const{start:d,end:u}=r[c],f=o[d],p=o[u];if(f===p){a.push(f);continue}const m=Math.abs((n-f[e])/(p[e]-f[e])),g=l(f,p,m,s.stepped);g[e]=t[e],a.push(g)}return a.length===1?a[0]:a}pathSegment(t,e,s){return lo(this)(t,this,e,s)}path(t,e,s){const n=this.segments,o=lo(this);let r=this._loop;e=e||0,s=s||this.points.length-e;for(const a of n)r&=o(t,this,a,{start:e,end:e+s-1});return!!r}draw(t,e,s,n){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),Hg(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}A(ve,"id","line"),A(ve,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),A(ve,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),A(ve,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Ta(i,t,e,s){const n=i.options,{[e]:o}=i.getProps([e],s);return Math.abs(t-o)<n.radius+n.hitRadius}class Bi extends de{constructor(e){super();A(this,"parsed");A(this,"skip");A(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,n){const o=this.options,{x:r,y:a}=this.getProps(["x","y"],n);return Math.pow(e-r,2)+Math.pow(s-a,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(e,s){return Ta(this,e,"x",s)}inYRange(e,s){return Ta(this,e,"y",s)}getCenterPoint(e){const{x:s,y:n}=this.getProps(["x","y"],e);return{x:s,y:n}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const n=s&&e.borderWidth||0;return(s+n)*2}draw(e,s){const n=this.options;this.skip||n.radius<.1||!ie(this,s,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,no(e,n,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}A(Bi,"id","point"),A(Bi,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),A(Bi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function Bc(i,t){const{x:e,y:s,base:n,width:o,height:r}=i.getProps(["x","y","base","width","height"],t);let a,l,c,h,d;return i.horizontal?(d=r/2,a=Math.min(e,n),l=Math.max(e,n),c=s-d,h=s+d):(d=o/2,a=e-d,l=e+d,c=Math.min(s,n),h=Math.max(s,n)),{left:a,top:c,right:l,bottom:h}}function ye(i,t,e,s){return i?0:ct(t,e,s)}function jg(i,t,e){const s=i.options.borderWidth,n=i.borderSkipped,o=uc(s);return{t:ye(n.top,o.top,0,e),r:ye(n.right,o.right,0,t),b:ye(n.bottom,o.bottom,0,e),l:ye(n.left,o.left,0,t)}}function Ng(i,t,e){const{enableBorderRadius:s}=i.getProps(["enableBorderRadius"]),n=i.options.borderRadius,o=He(n),r=Math.min(t,e),a=i.borderSkipped,l=s||F(n);return{topLeft:ye(!l||a.top||a.left,o.topLeft,0,r),topRight:ye(!l||a.top||a.right,o.topRight,0,r),bottomLeft:ye(!l||a.bottom||a.left,o.bottomLeft,0,r),bottomRight:ye(!l||a.bottom||a.right,o.bottomRight,0,r)}}function Wg(i){const t=Bc(i),e=t.right-t.left,s=t.bottom-t.top,n=jg(i,e/2,s/2),o=Ng(i,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:o},inner:{x:t.left+n.l,y:t.top+n.t,w:e-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,o.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(n.b,n.r))}}}}function Fn(i,t,e,s){const n=t===null,o=e===null,a=i&&!(n&&o)&&Bc(i,s);return a&&(n||te(t,a.left,a.right))&&(o||te(e,a.top,a.bottom))}function Ug(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function qg(i,t){i.rect(t.x,t.y,t.w,t.h)}function Bn(i,t,e={}){const s=i.x!==e.x?-t:0,n=i.y!==e.y?-t:0,o=(i.x+i.w!==e.x+e.w?t:0)-s,r=(i.y+i.h!==e.y+e.h?t:0)-n;return{x:i.x+s,y:i.y+n,w:i.w+o,h:i.h+r,radius:i.radius}}class Vi extends de{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:n}}=this,{inner:o,outer:r}=Wg(this),a=Ug(r.radius)?Gi:qg;t.save(),(r.w!==o.w||r.h!==o.h)&&(t.beginPath(),a(t,Bn(r,e,o)),t.clip(),a(t,Bn(o,-e,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,Bn(o,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,s){return Fn(this,t,e,s)}inXRange(t,e){return Fn(this,t,null,e)}inYRange(t,e){return Fn(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}A(Vi,"id","bar"),A(Vi,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),A(Vi,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var Yg=Object.freeze({__proto__:null,ArcElement:ni,BarElement:Vi,LineElement:ve,PointElement:Bi});const co=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],La=co.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function Vc(i){return co[i%co.length]}function Hc(i){return La[i%La.length]}function Xg(i,t){return i.borderColor=Vc(t),i.backgroundColor=Hc(t),++t}function Kg(i,t){return i.backgroundColor=i.data.map(()=>Vc(t++)),t}function Gg(i,t){return i.backgroundColor=i.data.map(()=>Hc(t++)),t}function Qg(i){let t=0;return(e,s)=>{const n=i.getDatasetMeta(s).controller;n instanceof Ve?t=Kg(e,t):n instanceof Fi?t=Gg(e,t):n&&(t=Xg(e,t))}}function Ra(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function Jg(i){return i&&(i.borderColor||i.backgroundColor)}function Zg(){return Q.borderColor!=="rgba(0,0,0,0.1)"||Q.backgroundColor!=="rgba(0,0,0,0.1)"}var tb={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;const{data:{datasets:s},options:n}=i.config,{elements:o}=n,r=Ra(s)||Jg(n)||o&&Ra(o)||Zg();if(!e.forceOverride&&r)return;const a=Qg(i);s.forEach(a)}};function eb(i,t,e,s,n){const o=n.samples||s;if(o>=e)return i.slice(t,t+e);const r=[],a=(e-2)/(o-2);let l=0;const c=t+e-1;let h=t,d,u,f,p,m;for(r[l++]=i[h],d=0;d<o-2;d++){let g=0,b=0,y;const w=Math.floor((d+1)*a)+1+t,x=Math.min(Math.floor((d+2)*a)+1,e)+t,_=x-w;for(y=w;y<x;y++)g+=i[y].x,b+=i[y].y;g/=_,b/=_;const k=Math.floor(d*a)+1+t,S=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:M,y:D}=i[h];for(f=p=-1,y=k;y<S;y++)p=.5*Math.abs((M-g)*(i[y].y-D)-(M-i[y].x)*(b-D)),p>f&&(f=p,u=i[y],m=y);r[l++]=u,h=m}return r[l++]=i[c],r}function ib(i,t,e,s){let n=0,o=0,r,a,l,c,h,d,u,f,p,m;const g=[],b=t+e-1,y=i[t].x,x=i[b].x-y;for(r=t;r<t+e;++r){a=i[r],l=(a.x-y)/x*s,c=a.y;const _=l|0;if(_===h)c<p?(p=c,d=r):c>m&&(m=c,u=r),n=(o*n+a.x)/++o;else{const k=r-1;if(!L(d)&&!L(u)){const S=Math.min(d,u),M=Math.max(d,u);S!==f&&S!==k&&g.push({...i[S],x:n}),M!==f&&M!==k&&g.push({...i[M],x:n})}r>0&&k!==f&&g.push(i[k]),g.push(a),h=_,o=0,p=m=c,d=u=f=r}}return g}function jc(i){if(i._decimated){const t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function za(i){i.data.datasets.forEach(t=>{jc(t)})}function sb(i,t){const e=t.length;let s=0,n;const{iScale:o}=i,{min:r,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(s=ct(ee(t,o.axis,r).lo,0,e-1)),c?n=ct(ee(t,o.axis,a).hi+1,s,e)-s:n=e-s,{start:s,count:n}}var nb={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){za(i);return}const s=i.width;i.data.datasets.forEach((n,o)=>{const{_data:r,indexAxis:a}=n,l=i.getDatasetMeta(o),c=r||n.data;if(X([a,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=i.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||i.options.parsing)return;let{start:d,count:u}=sb(l,c);const f=e.threshold||4*s;if(u<=f){jc(n);return}L(r)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let p;switch(e.algorithm){case"lttb":p=eb(c,d,u,s,e);break;case"min-max":p=ib(c,d,u,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}n._decimated=p})},destroy(i){za(i)}};function ob(i,t,e){const s=i.segments,n=i.points,o=t.points,r=[];for(const a of s){let{start:l,end:c}=a;c=xn(l,c,n);const h=ho(e,n[l],n[c],a.loop);if(!t.segments){r.push({source:a,target:h,start:n[l],end:n[c]});continue}const d=kc(t,h);for(const u of d){const f=ho(e,o[u.start],o[u.end],u.loop),p=wc(a,n,f);for(const m of p)r.push({source:m,target:u,start:{[e]:$a(h,f,"start",Math.max)},end:{[e]:$a(h,f,"end",Math.min)}})}}return r}function ho(i,t,e,s){if(s)return;let n=t[i],o=e[i];return i==="angle"&&(n=mt(n),o=mt(o)),{property:i,start:n,end:o}}function rb(i,t){const{x:e=null,y:s=null}=i||{},n=t.points,o=[];return t.segments.forEach(({start:r,end:a})=>{a=xn(r,a,n);const l=n[r],c=n[a];s!==null?(o.push({x:l.x,y:s}),o.push({x:c.x,y:s})):e!==null&&(o.push({x:e,y:l.y}),o.push({x:e,y:c.y}))}),o}function xn(i,t,e){for(;t>i;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function $a(i,t,e,s){return i&&t?s(i[e],t[e]):i?i[e]:t?t[e]:0}function Nc(i,t){let e=[],s=!1;return K(i)?(s=!0,e=i):e=rb(i,t),e.length?new ve({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Ia(i){return i&&i.fill!==!1}function ab(i,t,e){let n=i[t].fill;const o=[t];let r;if(!e)return n;for(;n!==!1&&o.indexOf(n)===-1;){if(!tt(n))return n;if(r=i[n],!r)return!1;if(r.visible)return n;o.push(n),n=r.fill}return!1}function lb(i,t,e){const s=ub(i);if(F(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return tt(n)&&Math.floor(n)===n?cb(s[0],t,n,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function cb(i,t,e,s){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function hb(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:F(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function db(i,t,e){let s;return i==="start"?s=e:i==="end"?s=t.options.reverse?t.min:t.max:F(i)?s=i.value:s=t.getBaseValue(),s}function ub(i){const t=i.options,e=t.fill;let s=T(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function fb(i){const{scale:t,index:e,line:s}=i,n=[],o=s.segments,r=s.points,a=pb(t,e);a.push(Nc({x:null,y:t.bottom},s));for(let l=0;l<o.length;l++){const c=o[l];for(let h=c.start;h<=c.end;h++)mb(n,r[h],a)}return new ve({points:n,options:{}})}function pb(i,t){const e=[],s=i.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const o=s[n];if(o.index===t)break;o.hidden||e.unshift(o.dataset)}return e}function mb(i,t,e){const s=[];for(let n=0;n<e.length;n++){const o=e[n],{first:r,last:a,point:l}=gb(o,t,"x");if(!(!l||r&&a)){if(r)s.unshift(l);else if(i.push(l),!a)break}}i.push(...s)}function gb(i,t,e){const s=i.interpolate(t,e);if(!s)return{};const n=s[e],o=i.segments,r=i.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const h=o[c],d=r[h.start][e],u=r[h.end][e];if(te(n,d,u)){a=n===d,l=n===u;break}}return{first:a,last:l,point:s}}class Wc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:n,y:o,radius:r}=this;return e=e||{start:0,end:G},t.arc(n,o,r,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:s+Math.sin(o)*n,angle:o}}}function bb(i){const{chart:t,fill:e,line:s}=i;if(tt(e))return vb(t,e);if(e==="stack")return fb(i);if(e==="shape")return!0;const n=yb(i);return n instanceof Wc?n:Nc(n,s)}function vb(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function yb(i){return(i.scale||{}).getPointPositionForValue?xb(i):_b(i)}function _b(i){const{scale:t={},fill:e}=i,s=hb(e,t);if(tt(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function xb(i){const{scale:t,fill:e}=i,s=t.options,n=t.getLabels().length,o=s.reverse?t.max:t.min,r=db(e,t,o),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,o);return new Wc({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)a.push(t.getPointPositionForValue(l,r));return a}function Vn(i,t,e){const s=bb(t),{chart:n,index:o,line:r,scale:a,axis:l}=t,c=r.options,h=c.fill,d=c.backgroundColor,{above:u=d,below:f=d}=h||{},p=n.getDatasetMeta(o),m=Cc(n,p);s&&r.points.length&&(bn(i,e),wb(i,{line:r,target:s,above:u,below:f,area:e,scale:a,axis:l,clip:m}),vn(i))}function wb(i,t){const{line:e,target:s,above:n,below:o,area:r,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;i.save();let h=o;o!==n&&(c==="x"?(Fa(i,s,r.top),Hn(i,{line:e,target:s,color:n,scale:a,property:c,clip:l}),i.restore(),i.save(),Fa(i,s,r.bottom)):c==="y"&&(Ba(i,s,r.left),Hn(i,{line:e,target:s,color:o,scale:a,property:c,clip:l}),i.restore(),i.save(),Ba(i,s,r.right),h=n)),Hn(i,{line:e,target:s,color:h,scale:a,property:c,clip:l}),i.restore()}function Fa(i,t,e){const{segments:s,points:n}=t;let o=!0,r=!1;i.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[xn(l,c,n)];o?(i.moveTo(h.x,h.y),o=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),r=!!t.pathSegment(i,a,{move:r}),r?i.closePath():i.lineTo(d.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function Ba(i,t,e){const{segments:s,points:n}=t;let o=!0,r=!1;i.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[xn(l,c,n)];o?(i.moveTo(h.x,h.y),o=!1):(i.lineTo(e,h.y),i.lineTo(h.x,h.y)),r=!!t.pathSegment(i,a,{move:r}),r?i.closePath():i.lineTo(e,d.y)}i.lineTo(e,t.first().y),i.closePath(),i.clip()}function Hn(i,t){const{line:e,target:s,property:n,color:o,scale:r,clip:a}=t,l=ob(e,s,n);for(const{source:c,target:h,start:d,end:u}of l){const{style:{backgroundColor:f=o}={}}=c,p=s!==!0;i.save(),i.fillStyle=f,kb(i,r,a,p&&ho(n,d,u)),i.beginPath();const m=!!e.pathSegment(i,c);let g;if(p){m?i.closePath():Va(i,s,u,n);const b=!!s.pathSegment(i,h,{move:m,reverse:!0});g=m&&b,g||Va(i,s,d,n)}i.closePath(),i.fill(g?"evenodd":"nonzero"),i.restore()}}function kb(i,t,e,s){const n=t.chart.chartArea,{property:o,start:r,end:a}=s||{};if(o==="x"||o==="y"){let l,c,h,d;o==="x"?(l=r,c=n.top,h=a,d=n.bottom):(l=n.left,c=r,h=n.right,d=a),i.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),d=Math.min(d,e.bottom)),i.rect(l,c,h-l,d-c),i.clip()}}function Va(i,t,e,s){const n=t.interpolate(e,s);n&&i.lineTo(n.x,n.y)}var Cb={id:"filler",afterDatasetsUpdate(i,t,e){const s=(i.data.datasets||[]).length,n=[];let o,r,a,l;for(r=0;r<s;++r)o=i.getDatasetMeta(r),a=o.dataset,l=null,a&&a.options&&a instanceof ve&&(l={visible:i.isDatasetVisible(r),index:r,fill:lb(a,r,s),chart:i,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,n.push(l);for(r=0;r<s;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=ab(n,r,e.propagate))},beforeDraw(i,t,e){const s=e.drawTime==="beforeDraw",n=i.getSortedVisibleDatasetMetas(),o=i.chartArea;for(let r=n.length-1;r>=0;--r){const a=n[r].$filler;a&&(a.line.updateControlPoints(o,a.axis),s&&a.fill&&Vn(i.ctx,a,o))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=i.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const o=s[n].$filler;Ia(o)&&Vn(i.ctx,o,i.chartArea)}},beforeDatasetDraw(i,t,e){const s=t.meta.$filler;!Ia(s)||e.drawTime!=="beforeDatasetDraw"||Vn(i.ctx,s,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Ha=(i,t)=>{let{boxHeight:e=t,boxWidth:s=t}=i;return i.usePointStyle&&(e=Math.min(e,t),s=i.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},Sb=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class ja extends de{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=Y(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=ot(s.font),o=n.size,r=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Ha(s,o);let c,h;e.font=n.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(r,o,a,l)+10):(h=this.maxHeight,c=this._fitCols(r,n,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,n){const{ctx:o,maxWidth:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=n+a;let d=t;o.textAlign="left",o.textBaseline="middle";let u=-1,f=-h;return this.legendItems.forEach((p,m)=>{const g=s+e/2+o.measureText(p.text).width;(m===0||c[c.length-1]+g+2*a>r)&&(d+=h,c[c.length-(m>0?0:1)]=0,f+=h,u++),l[m]={left:0,top:f,row:u,width:g,height:n},c[c.length-1]+=g+a}),d}_fitCols(t,e,s,n){const{ctx:o,maxHeight:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=r-t;let d=a,u=0,f=0,p=0,m=0;return this.legendItems.forEach((g,b)=>{const{itemWidth:y,itemHeight:w}=Mb(s,e,o,g,n);b>0&&f+w+2*a>h&&(d+=u+a,c.push({width:u,height:f}),p+=u+a,m++,u=f=0),l[b]={left:p,top:f,col:m,width:y,height:w},u=Math.max(u,y),f+=w+a}),d+=u,c.push({width:u,height:f}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:n},rtl:o}}=this,r=ri(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=ft(s,this.left+n,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=ft(s,this.left+n,this.right-this.lineWidths[a])),c.top+=this.top+t+n,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+n}else{let a=0,l=ft(s,this.top+t+n,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=ft(s,this.top+t+n,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+n,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;bn(t,this),this._draw(),vn(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:n}=this,{align:o,labels:r}=t,a=Q.color,l=ri(t.rtl,this.left,this.width),c=ot(r.font),{padding:h}=r,d=c.size,u=d/2;let f;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:p,boxHeight:m,itemHeight:g}=Ha(r,d),b=function(k,S,M){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;n.save();const D=T(M.lineWidth,1);if(n.fillStyle=T(M.fillStyle,a),n.lineCap=T(M.lineCap,"butt"),n.lineDashOffset=T(M.lineDashOffset,0),n.lineJoin=T(M.lineJoin,"miter"),n.lineWidth=D,n.strokeStyle=T(M.strokeStyle,a),n.setLineDash(T(M.lineDash,[])),r.usePointStyle){const P={radius:m*Math.SQRT2/2,pointStyle:M.pointStyle,rotation:M.rotation,borderWidth:D},E=l.xPlus(k,p/2),O=S+u;dc(n,P,E,O,r.pointStyleWidth&&p)}else{const P=S+Math.max((d-m)/2,0),E=l.leftForLtr(k,p),O=He(M.borderRadius);n.beginPath(),Object.values(O).some(I=>I!==0)?Gi(n,{x:E,y:P,w:p,h:m,radius:O}):n.rect(E,P,p,m),n.fill(),D!==0&&n.stroke()}n.restore()},y=function(k,S,M){Xe(n,M.text,k,S+g/2,c,{strikethrough:M.hidden,textAlign:l.textAlign(M.textAlign)})},w=this.isHorizontal(),x=this._computeTitleHeight();w?f={x:ft(o,this.left+h,this.right-s[0]),y:this.top+h+x,line:0}:f={x:this.left+h,y:ft(o,this.top+x+h,this.bottom-e[0].height),line:0},yc(this.ctx,t.textDirection);const _=g+h;this.legendItems.forEach((k,S)=>{n.strokeStyle=k.fontColor,n.fillStyle=k.fontColor;const M=n.measureText(k.text).width,D=l.textAlign(k.textAlign||(k.textAlign=r.textAlign)),P=p+u+M;let E=f.x,O=f.y;l.setWidth(this.width),w?S>0&&E+P+h>this.right&&(O=f.y+=_,f.line++,E=f.x=ft(o,this.left+h,this.right-s[f.line])):S>0&&O+_>this.bottom&&(E=f.x=E+e[f.line].width+h,f.line++,O=f.y=ft(o,this.top+x+h,this.bottom-e[f.line].height));const I=l.x(E);if(b(I,O,k),E=Uf(D,E+p+u,w?E+P:this.right,t.rtl),y(l.x(E),O,k),w)f.x+=P+h;else if(typeof k.text!="string"){const B=c.lineHeight;f.y+=Uc(k,B)+h}else f.y+=_}),_c(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=ot(e.font),n=dt(e.padding);if(!e.display)return;const o=ri(t.rtl,this.left,this.width),r=this.ctx,a=e.position,l=s.size/2,c=n.top+l;let h,d=this.left,u=this.width;if(this.isHorizontal())u=Math.max(...this.lineWidths),h=this.top+c,d=ft(t.align,d,this.right-u);else{const p=this.columnSizes.reduce((m,g)=>Math.max(m,g.height),0);h=c+ft(t.align,this.top,this.bottom-p-t.labels.padding-this._computeTitleHeight())}const f=ft(a,d,d+u);r.textAlign=o.textAlign(Oo(a)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=s.string,Xe(r,e.text,f,h,s)}_computeTitleHeight(){const t=this.options.title,e=ot(t.font),s=dt(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,n,o;if(te(t,this.left,this.right)&&te(e,this.top,this.bottom)){for(o=this.legendHitBoxes,s=0;s<o.length;++s)if(n=o[s],te(t,n.left,n.left+n.width)&&te(e,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!Pb(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,o=Sb(n,s);n&&!o&&Y(e.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!o&&Y(e.onHover,[t,s,this],this)}else s&&Y(e.onClick,[t,s,this],this)}}function Mb(i,t,e,s,n){const o=Ab(s,i,t,e),r=Db(n,s,t.lineHeight);return{itemWidth:o,itemHeight:r}}function Ab(i,t,e,s){let n=i.text;return n&&typeof n!="string"&&(n=n.reduce((o,r)=>o.length>r.length?o:r)),t+e.size/2+s.measureText(n).width}function Db(i,t,e){let s=i;return typeof t.text!="string"&&(s=Uc(t,e)),s}function Uc(i,t){const e=i.text?i.text.length:0;return t*e}function Pb(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var Eb={id:"legend",_element:ja,start(i,t,e){const s=i.legend=new ja({ctx:i.ctx,options:e,chart:i});gt.configure(i,s,e),gt.addBox(i,s)},stop(i){gt.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const s=i.legend;gt.configure(i,s,e),s.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const s=t.datasetIndex,n=e.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=dt(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:s||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:r&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class Vo extends de{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const n=K(s.text)?s.text.length:1;this._padding=dt(s.padding);const o=n*ot(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:n,right:o,options:r}=this,a=r.align;let l=0,c,h,d;return this.isHorizontal()?(h=ft(a,s,o),d=e+t,c=o-s):(r.position==="left"?(h=s+t,d=ft(a,n,e),l=H*-.5):(h=o-t,d=ft(a,e,n),l=H*.5),c=n-e),{titleX:h,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=ot(e.font),o=s.lineHeight/2+this._padding.top,{titleX:r,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);Xe(t,e.text,0,0,s,{color:e.color,maxWidth:l,rotation:c,textAlign:Oo(e.align),textBaseline:"middle",translation:[r,a]})}}function Ob(i,t){const e=new Vo({ctx:i.ctx,options:t,chart:i});gt.configure(i,e,t),gt.addBox(i,e),i.titleBlock=e}var Tb={id:"title",_element:Vo,start(i,t,e){Ob(i,e)},stop(i){const t=i.titleBlock;gt.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){const s=i.titleBlock;gt.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ws=new WeakMap;var Lb={id:"subtitle",start(i,t,e){const s=new Vo({ctx:i.ctx,options:e,chart:i});gt.configure(i,s,e),gt.addBox(i,s),ws.set(i,s)},stop(i){gt.removeBox(i,ws.get(i)),ws.delete(i)},beforeUpdate(i,t,e){const s=ws.get(i);gt.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ei={average(i){if(!i.length)return!1;let t,e,s=new Set,n=0,o=0;for(t=0,e=i.length;t<e;++t){const a=i[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),n+=l.y,++o}}return o===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:n/o}},nearest(i,t){if(!i.length)return!1;let e=t.x,s=t.y,n=Number.POSITIVE_INFINITY,o,r,a;for(o=0,r=i.length;o<r;++o){const l=i[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=io(t,c);h<n&&(n=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function Ft(i,t){return t&&(K(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function Gt(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Rb(i,t){const{element:e,datasetIndex:s,index:n}=t,o=i.getDatasetMeta(s).controller,{label:r,value:a}=o.getLabelAndValue(n);return{chart:i,label:r,parsed:o.getParsed(n),raw:i.data.datasets[s].data[n],formattedValue:a,dataset:o.getDataset(),dataIndex:n,datasetIndex:s,element:e}}function Na(i,t){const e=i.chart.ctx,{body:s,footer:n,title:o}=i,{boxWidth:r,boxHeight:a}=t,l=ot(t.bodyFont),c=ot(t.titleFont),h=ot(t.footerFont),d=o.length,u=n.length,f=s.length,p=dt(t.padding);let m=p.height,g=0,b=s.reduce((x,_)=>x+_.before.length+_.lines.length+_.after.length,0);if(b+=i.beforeBody.length+i.afterBody.length,d&&(m+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),b){const x=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;m+=f*x+(b-f)*l.lineHeight+(b-1)*t.bodySpacing}u&&(m+=t.footerMarginTop+u*h.lineHeight+(u-1)*t.footerSpacing);let y=0;const w=function(x){g=Math.max(g,e.measureText(x).width+y)};return e.save(),e.font=c.string,W(i.title,w),e.font=l.string,W(i.beforeBody.concat(i.afterBody),w),y=t.displayColors?r+2+t.boxPadding:0,W(s,x=>{W(x.before,w),W(x.lines,w),W(x.after,w)}),y=0,e.font=h.string,W(i.footer,w),e.restore(),g+=p.width,{width:g,height:m}}function zb(i,t){const{y:e,height:s}=t;return e<s/2?"top":e>i.height-s/2?"bottom":"center"}function $b(i,t,e,s){const{x:n,width:o}=s,r=e.caretSize+e.caretPadding;if(i==="left"&&n+o+r>t.width||i==="right"&&n-o-r<0)return!0}function Ib(i,t,e,s){const{x:n,width:o}=e,{width:r,chartArea:{left:a,right:l}}=i;let c="center";return s==="center"?c=n<=(a+l)/2?"left":"right":n<=o/2?c="left":n>=r-o/2&&(c="right"),$b(c,i,t,e)&&(c="center"),c}function Wa(i,t,e){const s=e.yAlign||t.yAlign||zb(i,e);return{xAlign:e.xAlign||t.xAlign||Ib(i,t,e,s),yAlign:s}}function Fb(i,t){let{x:e,width:s}=i;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function Bb(i,t,e){let{y:s,height:n}=i;return t==="top"?s+=e:t==="bottom"?s-=n+e:s-=n/2,s}function Ua(i,t,e,s){const{caretSize:n,caretPadding:o,cornerRadius:r}=i,{xAlign:a,yAlign:l}=e,c=n+o,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:f}=He(r);let p=Fb(t,a);const m=Bb(t,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(h,u)+n:a==="right"&&(p+=Math.max(d,f)+n),{x:ct(p,0,s.width-t.width),y:ct(m,0,s.height-t.height)}}function ks(i,t,e){const s=dt(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-s.right:i.x+s.left}function qa(i){return Ft([],Gt(i))}function Vb(i,t,e){return Pe(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function Ya(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const qc={beforeTitle:Xt,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:Xt,beforeBody:Xt,beforeLabel:Xt,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return L(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:Xt,afterBody:Xt,beforeFooter:Xt,footer:Xt,afterFooter:Xt};function _t(i,t,e,s){const n=i[t].call(e,s);return typeof n>"u"?qc[t].call(e,s):n}var Nn;let Xa=(Nn=class extends de{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&e.options.animation&&s.animations,o=new Sc(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=Vb(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,n=_t(s,"beforeTitle",this,t),o=_t(s,"title",this,t),r=_t(s,"afterTitle",this,t);let a=[];return a=Ft(a,Gt(n)),a=Ft(a,Gt(o)),a=Ft(a,Gt(r)),a}getBeforeBody(t,e){return qa(_t(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,n=[];return W(t,o=>{const r={before:[],lines:[],after:[]},a=Ya(s,o);Ft(r.before,Gt(_t(a,"beforeLabel",this,o))),Ft(r.lines,_t(a,"label",this,o)),Ft(r.after,Gt(_t(a,"afterLabel",this,o))),n.push(r)}),n}getAfterBody(t,e){return qa(_t(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,n=_t(s,"beforeFooter",this,t),o=_t(s,"footer",this,t),r=_t(s,"afterFooter",this,t);let a=[];return a=Ft(a,Gt(n)),a=Ft(a,Gt(o)),a=Ft(a,Gt(r)),a}_createItems(t){const e=this._active,s=this.chart.data,n=[],o=[],r=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(Rb(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,u)=>t.filter(h,d,u,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),W(a,h=>{const d=Ya(t.callbacks,h);n.push(_t(d,"labelColor",this,h)),o.push(_t(d,"labelPointStyle",this,h)),r.push(_t(d,"labelTextColor",this,h))}),this.labelColors=n,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),n=this._active;let o,r=[];if(!n.length)this.opacity!==0&&(o={opacity:0});else{const a=Ei[s.position].call(this,n,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const l=this._size=Na(this,s),c=Object.assign({},a,l),h=Wa(this.chart,s,c),d=Ua(s,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,o={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,n){const o=this.getCaretPosition(t,s,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,s){const{xAlign:n,yAlign:o}=this,{caretSize:r,cornerRadius:a}=s,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:d}=He(a),{x:u,y:f}=t,{width:p,height:m}=e;let g,b,y,w,x,_;return o==="center"?(x=f+m/2,n==="left"?(g=u,b=g-r,w=x+r,_=x-r):(g=u+p,b=g+r,w=x-r,_=x+r),y=g):(n==="left"?b=u+Math.max(l,h)+r:n==="right"?b=u+p-Math.max(c,d)-r:b=this.caretX,o==="top"?(w=f,x=w-r,g=b-r,y=b+r):(w=f+m,x=w+r,g=b+r,y=b-r),_=w),{x1:g,x2:b,x3:y,y1:w,y2:x,y3:_}}drawTitle(t,e,s){const n=this.title,o=n.length;let r,a,l;if(o){const c=ri(s.rtl,this.x,this.width);for(t.x=ks(this,s.titleAlign,s),e.textAlign=c.textAlign(s.titleAlign),e.textBaseline="middle",r=ot(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=r.string,l=0;l<o;++l)e.fillText(n[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+a,l+1===o&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,n,o){const r=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:c}=o,h=ot(o.bodyFont),d=ks(this,"left",o),u=n.x(d),f=l<h.lineHeight?(h.lineHeight-l)/2:0,p=e.y+f;if(o.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},g=n.leftForLtr(u,c)+c/2,b=p+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,no(t,m,g,b),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,no(t,m,g,b)}else{t.lineWidth=F(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const m=n.leftForLtr(u,c),g=n.leftForLtr(n.xPlus(u,1),c-2),b=He(r.borderRadius);Object.values(b).some(y=>y!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,Gi(t,{x:m,y:p,w:c,h:l,radius:b}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),Gi(t,{x:g,y:p+1,w:c-2,h:l-2,radius:b}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(m,p,c,l),t.strokeRect(m,p,c,l),t.fillStyle=r.backgroundColor,t.fillRect(g,p+1,c-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:n}=this,{bodySpacing:o,bodyAlign:r,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=s,d=ot(s.bodyFont);let u=d.lineHeight,f=0;const p=ri(s.rtl,this.x,this.width),m=function(M){e.fillText(M,p.x(t.x+f),t.y+u/2),t.y+=u+o},g=p.textAlign(r);let b,y,w,x,_,k,S;for(e.textAlign=r,e.textBaseline="middle",e.font=d.string,t.x=ks(this,g,s),e.fillStyle=s.bodyColor,W(this.beforeBody,m),f=a&&g!=="right"?r==="center"?c/2+h:c+2+h:0,x=0,k=n.length;x<k;++x){for(b=n[x],y=this.labelTextColors[x],e.fillStyle=y,W(b.before,m),w=b.lines,a&&w.length&&(this._drawColorBox(e,t,x,p,s),u=Math.max(d.lineHeight,l)),_=0,S=w.length;_<S;++_)m(w[_]),u=d.lineHeight;W(b.after,m)}f=0,u=d.lineHeight,W(this.afterBody,m),t.y-=o}drawFooter(t,e,s){const n=this.footer,o=n.length;let r,a;if(o){const l=ri(s.rtl,this.x,this.width);for(t.x=ks(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",r=ot(s.footerFont),e.fillStyle=s.footerColor,e.font=r.string,a=0;a<o;++a)e.fillText(n[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,e,s,n){const{xAlign:o,yAlign:r}=this,{x:a,y:l}=t,{width:c,height:h}=s,{topLeft:d,topRight:u,bottomLeft:f,bottomRight:p}=He(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(a+d,l),r==="top"&&this.drawCaret(t,e,s,n),e.lineTo(a+c-u,l),e.quadraticCurveTo(a+c,l,a+c,l+u),r==="center"&&o==="right"&&this.drawCaret(t,e,s,n),e.lineTo(a+c,l+h-p),e.quadraticCurveTo(a+c,l+h,a+c-p,l+h),r==="bottom"&&this.drawCaret(t,e,s,n),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),r==="center"&&o==="left"&&this.drawCaret(t,e,s,n),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,n=s&&s.x,o=s&&s.y;if(n||o){const r=Ei[t.position].call(this,this._active,this._eventPosition);if(!r)return;const a=this._size=Na(this,t),l=Object.assign({},r,this._size),c=Wa(e,t,l),h=Ua(t,l,c,e);(n._to!==h.x||o._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},o={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=dt(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(o,t,n,e),yc(t,e.textDirection),o.y+=r.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),_c(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,n=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!Gs(s,n),r=this._positionChanged(n,e);(o||r)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,o=this._active||[],r=this._getActiveElements(t,o,e,s),a=this._positionChanged(r,t),l=e||!Gs(r,o)||a;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,n){const o=this.options;if(t.type==="mouseout")return[];if(!n)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,o.mode,o,s);return o.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:s,caretY:n,options:o}=this,r=Ei[o.position].call(this,t,e);return r!==!1&&(s!==r.x||n!==r.y)}},A(Nn,"positioners",Ei),Nn);var Hb={id:"tooltip",_element:Xa,positioners:Ei,afterInit(i,t,e){e&&(i.tooltip=new Xa({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:qc},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},jb=Object.freeze({__proto__:null,Colors:tb,Decimation:nb,Filler:Cb,Legend:Eb,SubTitle:Lb,Title:Tb,Tooltip:Hb});const Nb=(i,t,e,s)=>(typeof t=="string"?(e=i.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Wb(i,t,e,s){const n=i.indexOf(t);if(n===-1)return Nb(i,t,e,s);const o=i.lastIndexOf(t);return n!==o?e:n}const Ub=(i,t)=>i===null?null:ct(Math.round(i),0,t);function Ka(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class uo extends Ze{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:n,label:o}of e)s[n]===o&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(L(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:Wb(s,t,T(e,t),this._addedLabels),Ub(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,n=[];let o=this.getLabels();o=t===0&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=e;r++)n.push({value:r});return n}getLabelForValue(t){return Ka.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}A(uo,"id","category"),A(uo,"defaults",{ticks:{callback:Ka}});function qb(i,t){const e=[],{bounds:n,step:o,min:r,max:a,precision:l,count:c,maxTicks:h,maxDigits:d,includeBounds:u}=i,f=o||1,p=h-1,{min:m,max:g}=t,b=!L(r),y=!L(a),w=!L(c),x=(g-m)/(d+1);let _=Nr((g-m)/p/f)*f,k,S,M,D;if(_<1e-14&&!b&&!y)return[{value:m},{value:g}];D=Math.ceil(g/_)-Math.floor(m/_),D>p&&(_=Nr(D*_/p/f)*f),L(l)||(k=Math.pow(10,l),_=Math.ceil(_*k)/k),n==="ticks"?(S=Math.floor(m/_)*_,M=Math.ceil(g/_)*_):(S=m,M=g),b&&y&&o&&Ff((a-r)/o,_/1e3)?(D=Math.round(Math.min((a-r)/_,h)),_=(a-r)/D,S=r,M=a):w?(S=b?r:S,M=y?a:M,D=c-1,_=(M-S)/D):(D=(M-S)/_,zi(D,Math.round(D),_/1e3)?D=Math.round(D):D=Math.ceil(D));const P=Math.max(Wr(_),Wr(S));k=Math.pow(10,L(l)?P:l),S=Math.round(S*k)/k,M=Math.round(M*k)/k;let E=0;for(b&&(u&&S!==r?(e.push({value:r}),S<r&&E++,zi(Math.round((S+E*_)*k)/k,r,Ga(r,x,i))&&E++):S<r&&E++);E<D;++E){const O=Math.round((S+E*_)*k)/k;if(y&&O>a)break;e.push({value:O})}return y&&u&&M!==a?e.length&&zi(e[e.length-1].value,a,Ga(a,x,i))?e[e.length-1].value=a:e.push({value:a}):(!y||M===a)&&e.push({value:M}),e}function Ga(i,t,{horizontal:e,minRotation:s}){const n=zt(s),o=(e?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+i).length;return Math.min(t/o,r)}class nn extends Ze{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return L(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:n,max:o}=this;const r=l=>n=e?n:l,a=l=>o=s?o:l;if(t){const l=Vt(n),c=Vt(o);l<0&&c<0?a(0):l>0&&c>0&&r(0)}if(n===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||r(n-l)}this.min=n,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e=e||11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},o=this._range||this,r=qb(n,o);return t.bounds==="ticks"&&ic(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-e)/Math.max(t.length-1,1)/2;e-=n,s+=n}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return hs(t,this.chart.options.locale,this.options.ticks.format)}}class fo extends nn{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=tt(t)?t:0,this.max=tt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=zt(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}A(fo,"id","linear"),A(fo,"defaults",{ticks:{callback:gn.formatters.numeric}});const Zi=i=>Math.floor(ge(i)),Ie=(i,t)=>Math.pow(10,Zi(i)+t);function Qa(i){return i/Math.pow(10,Zi(i))===1}function Ja(i,t,e){const s=Math.pow(10,e),n=Math.floor(i/s);return Math.ceil(t/s)-n}function Yb(i,t){const e=t-i;let s=Zi(e);for(;Ja(i,t,s)>10;)s++;for(;Ja(i,t,s)<10;)s--;return Math.min(s,Zi(i))}function Xb(i,{min:t,max:e}){t=Ct(i.min,t);const s=[],n=Zi(t);let o=Yb(t,e),r=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=n>o?Math.pow(10,n):0,c=Math.round((t-l)*r)/r,h=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-h)/Math.pow(10,o)),u=Ct(i.min,Math.round((l+h+d*Math.pow(10,o))*r)/r);for(;u<e;)s.push({value:u,major:Qa(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(o++,d=2,r=o>=0?1:r),u=Math.round((l+h+d*Math.pow(10,o))*r)/r;const f=Ct(i.max,u);return s.push({value:f,major:Qa(f),significand:d}),s}class po extends Ze{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=nn.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return tt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=tt(t)?Math.max(0,t):null,this.max=tt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!tt(this._userMin)&&(this.min=t===Ie(this.min,0)?Ie(this.min,-1):Ie(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,n=this.max;const o=a=>s=t?s:a,r=a=>n=e?n:a;s===n&&(s<=0?(o(1),r(10)):(o(Ie(s,-1)),r(Ie(n,1)))),s<=0&&o(Ie(n,-1)),n<=0&&r(Ie(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=Xb(e,this);return t.bounds==="ticks"&&ic(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":hs(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=ge(t),this._valueRange=ge(this.max)-ge(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(ge(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}A(po,"id","logarithmic"),A(po,"defaults",{ticks:{callback:gn.formatters.logarithmic,major:{enabled:!0}}});function mo(i){const t=i.ticks;if(t.display&&i.display){const e=dt(t.backdropPadding);return T(t.font&&t.font.size,Q.font.size)+e.height}return 0}function Kb(i,t,e){return e=K(e)?e:[e],{w:ep(i,t.string,e),h:e.length*t.lineHeight}}function Za(i,t,e,s,n){return i===s||i===n?{start:t-e/2,end:t+e/2}:i<s||i>n?{start:t-e,end:t}:{start:t,end:t+e}}function Gb(i){const t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),s=[],n=[],o=i._pointLabels.length,r=i.options.pointLabels,a=r.centerPointLabels?H/o:0;for(let l=0;l<o;l++){const c=r.setContext(i.getPointLabelContext(l));n[l]=c.padding;const h=i.getPointPosition(l,i.drawingArea+n[l],a),d=ot(c.font),u=Kb(i.ctx,d,i._pointLabels[l]);s[l]=u;const f=mt(i.getIndexAngle(l)+a),p=Math.round(Po(f)),m=Za(p,h.x,u.w,0,180),g=Za(p,h.y,u.h,90,270);Qb(e,t,f,m,g)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=tv(i,s,n)}function Qb(i,t,e,s,n){const o=Math.abs(Math.sin(e)),r=Math.abs(Math.cos(e));let a=0,l=0;s.start<t.l?(a=(t.l-s.start)/o,i.l=Math.min(i.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/o,i.r=Math.max(i.r,t.r+a)),n.start<t.t?(l=(t.t-n.start)/r,i.t=Math.min(i.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,i.b=Math.max(i.b,t.b+l))}function Jb(i,t,e){const s=i.drawingArea,{extra:n,additionalAngle:o,padding:r,size:a}=e,l=i.getPointPosition(t,s+n+r,o),c=Math.round(Po(mt(l.angle+et))),h=sv(l.y,a.h,c),d=ev(c),u=iv(l.x,a.w,d);return{visible:!0,x:l.x,y:h,textAlign:d,left:u,top:h,right:u+a.w,bottom:h+a.h}}function Zb(i,t){if(!t)return!0;const{left:e,top:s,right:n,bottom:o}=i;return!(ie({x:e,y:s},t)||ie({x:e,y:o},t)||ie({x:n,y:s},t)||ie({x:n,y:o},t))}function tv(i,t,e){const s=[],n=i._pointLabels.length,o=i.options,{centerPointLabels:r,display:a}=o.pointLabels,l={extra:mo(o)/2,additionalAngle:r?H/n:0};let c;for(let h=0;h<n;h++){l.padding=e[h],l.size=t[h];const d=Jb(i,h,l);s.push(d),a==="auto"&&(d.visible=Zb(d,c),d.visible&&(c=d))}return s}function ev(i){return i===0||i===180?"center":i<180?"left":"right"}function iv(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function sv(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function nv(i,t,e){const{left:s,top:n,right:o,bottom:r}=e,{backdropColor:a}=t;if(!L(a)){const l=He(t.borderRadius),c=dt(t.backdropPadding);i.fillStyle=a;const h=s-c.left,d=n-c.top,u=o-s+c.width,f=r-n+c.height;Object.values(l).some(p=>p!==0)?(i.beginPath(),Gi(i,{x:h,y:d,w:u,h:f,radius:l}),i.fill()):i.fillRect(h,d,u,f)}}function ov(i,t){const{ctx:e,options:{pointLabels:s}}=i;for(let n=t-1;n>=0;n--){const o=i._pointLabelItems[n];if(!o.visible)continue;const r=s.setContext(i.getPointLabelContext(n));nv(e,r,o);const a=ot(r.font),{x:l,y:c,textAlign:h}=o;Xe(e,i._pointLabels[n],l,c+a.lineHeight/2,a,{color:r.color,textAlign:h,textBaseline:"middle"})}}function Yc(i,t,e,s){const{ctx:n}=i;if(e)n.arc(i.xCenter,i.yCenter,t,0,G);else{let o=i.getPointPosition(0,t);n.moveTo(o.x,o.y);for(let r=1;r<s;r++)o=i.getPointPosition(r,t),n.lineTo(o.x,o.y)}}function rv(i,t,e,s,n){const o=i.ctx,r=t.circular,{color:a,lineWidth:l}=t;!r&&!s||!a||!l||e<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(n.dash||[]),o.lineDashOffset=n.dashOffset,o.beginPath(),Yc(i,e,r,s),o.closePath(),o.stroke(),o.restore())}function av(i,t,e){return Pe(i,{label:e,index:t,type:"pointLabel"})}class Oi extends nn{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=dt(mo(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=tt(t)&&!isNaN(t)?t:0,this.max=tt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/mo(this.options))}generateTickLabels(t){nn.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const n=Y(this.options.pointLabels.callback,[e,s],this);return n||n===0?n:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?Gb(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,n))}getIndexAngle(t){const e=G/(this._pointLabels.length||1),s=this.options.startAngle||0;return mt(t*e+zt(s))}getDistanceFromCenterForValue(t){if(L(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(L(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return av(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const n=this.getIndexAngle(t)-et+s;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:s,right:n,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Yc(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:n,border:o}=e,r=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&ov(this,r),n.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const u=this.getContext(d),f=n.setContext(u),p=o.setContext(u);rv(this,f,l,r,p)}}),s.display){for(t.save(),a=r-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:u}=h;!u||!d||(t.lineWidth=u,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=s.setContext(this.getContext(l)),h=ot(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,r=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=dt(c.backdropPadding);t.fillRect(-r/2-d.left,-o-h.size/2-d.top,r+d.width,h.size+d.height)}Xe(t,a.label,0,-o,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}A(Oi,"id","radialLinear"),A(Oi,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:gn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),A(Oi,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),A(Oi,"descriptors",{angleLines:{_fallback:"grid"}});const wn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},wt=Object.keys(wn);function tl(i,t){return i-t}function el(i,t){if(L(t))return null;const e=i._adapter,{parser:s,round:n,isoWeekday:o}=i._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),tt(r)||(r=typeof s=="string"?e.parse(r,s):e.parse(r)),r===null?null:(n&&(r=n==="week"&&(fi(o)||o===!0)?e.startOf(r,"isoWeek",o):e.startOf(r,n)),+r)}function il(i,t,e,s){const n=wt.length;for(let o=wt.indexOf(i);o<n-1;++o){const r=wn[wt[o]],a=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((e-t)/(a*r.size))<=s)return wt[o]}return wt[n-1]}function lv(i,t,e,s,n){for(let o=wt.length-1;o>=wt.indexOf(e);o--){const r=wt[o];if(wn[r].common&&i._adapter.diff(n,s,r)>=t-1)return r}return wt[e?wt.indexOf(e):0]}function cv(i){for(let t=wt.indexOf(i)+1,e=wt.length;t<e;++t)if(wn[wt[t]].common)return wt[t]}function sl(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:s,hi:n}=Eo(e,t),o=e[s]>=t?e[s]:e[n];i[o]=!0}}function hv(i,t,e,s){const n=i._adapter,o=+n.startOf(t[0].value,s),r=t[t.length-1].value;let a,l;for(a=o;a<=r;a=+n.add(a,1,s))l=e[a],l>=0&&(t[l].major=!0);return t}function nl(i,t,e){const s=[],n={},o=t.length;let r,a;for(r=0;r<o;++r)a=t[r],n[a]=r,s.push({value:a,major:!1});return o===0||!e?s:hv(i,s,n,e)}class ts extends Ze{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),n=this._adapter=new vm._date(t.adapters.date);n.init(e),Ri(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:el(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:n,max:o,minDefined:r,maxDefined:a}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!r||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=tt(n)&&!isNaN(n)?n:+e.startOf(Date.now(),s),o=tt(o)&&!isNaN(o)?o:+e.endOf(Date.now(),s)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const o=this.min,r=this.max,a=jf(n,o,r);return this._unit=e.unit||(s.autoSkip?il(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):lv(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:cv(this._unit),this.initOffsets(n),t.reverse&&a.reverse(),nl(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,n,o;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?e=1-n:e=(this.getDecimalForValue(t[1])-n)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?s=o:s=(o-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;e=ct(e,0,r),s=ct(s,0,r),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,n=this.options,o=n.time,r=o.unit||il(o.minUnit,e,s,this._getLabelCapacity(e)),a=T(n.ticks.stepSize,1),l=r==="week"?o.isoWeekday:!1,c=fi(l)||l===!0,h={};let d=e,u,f;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":r),t.diff(s,e,r)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+r);const p=n.ticks.source==="data"&&this.getDataTimestamps();for(u=d,f=0;u<s;u=+t.add(u,a,r),f++)sl(h,u,p);return(u===s||n.bounds==="ticks"||f===1)&&sl(h,u,p),Object.keys(h).sort(tl).map(m=>+m)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const n=this.options.time.displayFormats,o=this._unit,r=e||n[o];return this._adapter.format(t,r)}_tickFormatFunction(t,e,s,n){const o=this.options,r=o.ticks.callback;if(r)return Y(r,[t,e,s],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],d=c&&a[c],u=s[e],f=c&&d&&u&&u.major;return this._adapter.format(t,n||(f?d:h))}generateTickLabels(t){let e,s,n;for(e=0,s=t.length;e<s;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,n=zt(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(n),r=Math.sin(n),a=this._resolveTickFontOptions(0).size;return{w:s*o+a*r,h:s*r+a*o}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,n=s[e.unit]||s.millisecond,o=this._tickFormatFunction(t,0,nl(this,[t],this._majorUnit),n),r=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(e=0,s=n.length;e<s;++e)t=t.concat(n[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const n=this.getLabels();for(e=0,s=n.length;e<s;++e)t.push(el(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return oc(t.sort(tl))}}A(ts,"id","time"),A(ts,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Cs(i,t,e){let s=0,n=i.length-1,o,r,a,l;e?(t>=i[s].pos&&t<=i[n].pos&&({lo:s,hi:n}=ee(i,"pos",t)),{pos:o,time:a}=i[s],{pos:r,time:l}=i[n]):(t>=i[s].time&&t<=i[n].time&&({lo:s,hi:n}=ee(i,"time",t)),{time:o,pos:a}=i[s],{time:r,pos:l}=i[n]);const c=r-o;return c?a+(l-a)*(t-o)/c:a}class go extends ts{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Cs(e,this.min),this._tableRange=Cs(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,n=[],o=[];let r,a,l,c,h;for(r=0,a=t.length;r<a;++r)c=t[r],c>=e&&c<=s&&n.push(c);if(n.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(r=0,a=n.length;r<a;++r)h=n[r+1],l=n[r-1],c=n[r],Math.round((h+l)/2)!==c&&o.push({time:c,pos:r/(a-1)});return o}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((n,o)=>n-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(Cs(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return Cs(this._table,s*this._tableRange+this._minPos,!0)}}A(go,"id","timeseries"),A(go,"defaults",ts.defaults);var dv=Object.freeze({__proto__:null,CategoryScale:uo,LinearScale:fo,LogarithmicScale:po,RadialLinearScale:Oi,TimeScale:ts,TimeSeriesScale:go});const uv=[bm,Yg,jb,dv];Ji.register(...uv);/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */var ol=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var i=window.screen;if(i)return(i.deviceXDPI||1)/(i.logicalXDPI||1)}return 1}(),Hi={toTextLines:function(i){var t=[],e;for(i=[].concat(i);i.length;)e=i.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?i.push.apply(i,e):L(i)||t.unshift(""+e);return t},textSize:function(i,t,e){var s=[].concat(t),n=s.length,o=i.font,r=0,a;for(i.font=e.string,a=0;a<n;++a)r=Math.max(i.measureText(s[a]).width,r);return i.font=o,{height:n*e.lineHeight,width:r}},bound:function(i,t,e){return Math.max(i,Math.min(t,e))},arrayDiff:function(i,t){var e=i.slice(),s=[],n,o,r,a;for(n=0,r=t.length;n<r;++n)a=t[n],o=e.indexOf(a),o===-1?s.push([a,1]):e.splice(o,1);for(n=0,r=e.length;n<r;++n)s.push([e[n],-1]);return s},rasterize:function(i){return Math.round(i*ol)/ol}};function jn(i,t){var e=t.x,s=t.y;if(e===null)return{x:0,y:-1};if(s===null)return{x:1,y:0};var n=i.x-e,o=i.y-s,r=Math.sqrt(n*n+o*o);return{x:r?n/r:0,y:r?o/r:-1}}function fv(i,t,e,s,n){switch(n){case"center":e=s=0;break;case"bottom":e=0,s=1;break;case"right":e=1,s=0;break;case"left":e=-1,s=0;break;case"top":e=0,s=-1;break;case"start":e=-e,s=-s;break;case"end":break;default:n*=Math.PI/180,e=Math.cos(n),s=Math.sin(n);break}return{x:i,y:t,vx:e,vy:s}}var pv=0,Xc=1,Kc=2,Gc=4,Qc=8;function Ss(i,t,e){var s=pv;return i<e.left?s|=Xc:i>e.right&&(s|=Kc),t<e.top?s|=Qc:t>e.bottom&&(s|=Gc),s}function mv(i,t){for(var e=i.x0,s=i.y0,n=i.x1,o=i.y1,r=Ss(e,s,t),a=Ss(n,o,t),l,c,h;!(!(r|a)||r&a);)l=r||a,l&Qc?(c=e+(n-e)*(t.top-s)/(o-s),h=t.top):l&Gc?(c=e+(n-e)*(t.bottom-s)/(o-s),h=t.bottom):l&Kc?(h=s+(o-s)*(t.right-e)/(n-e),c=t.right):l&Xc&&(h=s+(o-s)*(t.left-e)/(n-e),c=t.left),l===r?(e=c,s=h,r=Ss(e,s,t)):(n=c,o=h,a=Ss(n,o,t));return{x0:e,x1:n,y0:s,y1:o}}function Ms(i,t){var e=t.anchor,s=i,n,o;return t.clamp&&(s=mv(s,t.area)),e==="start"?(n=s.x0,o=s.y0):e==="end"?(n=s.x1,o=s.y1):(n=(s.x0+s.x1)/2,o=(s.y0+s.y1)/2),fv(n,o,i.vx,i.vy,t.align)}var As={arc:function(i,t){var e=(i.startAngle+i.endAngle)/2,s=Math.cos(e),n=Math.sin(e),o=i.innerRadius,r=i.outerRadius;return Ms({x0:i.x+s*o,y0:i.y+n*o,x1:i.x+s*r,y1:i.y+n*r,vx:s,vy:n},t)},point:function(i,t){var e=jn(i,t.origin),s=e.x*i.options.radius,n=e.y*i.options.radius;return Ms({x0:i.x-s,y0:i.y-n,x1:i.x+s,y1:i.y+n,vx:e.x,vy:e.y},t)},bar:function(i,t){var e=jn(i,t.origin),s=i.x,n=i.y,o=0,r=0;return i.horizontal?(s=Math.min(i.x,i.base),o=Math.abs(i.base-i.x)):(n=Math.min(i.y,i.base),r=Math.abs(i.base-i.y)),Ms({x0:s,y0:n+r,x1:s+o,y1:n,vx:e.x,vy:e.y},t)},fallback:function(i,t){var e=jn(i,t.origin);return Ms({x0:i.x,y0:i.y,x1:i.x+(i.width||0),y1:i.y+(i.height||0),vx:e.x,vy:e.y},t)}},se=Hi.rasterize;function gv(i){var t=i.borderWidth||0,e=i.padding,s=i.size.height,n=i.size.width,o=-n/2,r=-s/2;return{frame:{x:o-e.left-t,y:r-e.top-t,w:n+e.width+t*2,h:s+e.height+t*2},text:{x:o,y:r,w:n,h:s}}}function bv(i,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var s=e.getBasePixel();return i.horizontal?{x:s,y:null}:{x:null,y:s}}function vv(i){return i instanceof ni?As.arc:i instanceof Bi?As.point:i instanceof Vi?As.bar:As.fallback}function yv(i,t,e,s,n,o){var r=Math.PI/2;if(o){var a=Math.min(o,n/2,s/2),l=t+a,c=e+a,h=t+s-a,d=e+n-a;i.moveTo(t,c),l<h&&c<d?(i.arc(l,c,a,-Math.PI,-r),i.arc(h,c,a,-r,0),i.arc(h,d,a,0,r),i.arc(l,d,a,r,Math.PI)):l<h?(i.moveTo(l,e),i.arc(h,c,a,-r,r),i.arc(l,c,a,r,Math.PI+r)):c<d?(i.arc(l,c,a,-Math.PI,0),i.arc(l,d,a,0,Math.PI)):i.arc(l,c,a,-Math.PI,Math.PI),i.closePath(),i.moveTo(t,e)}else i.rect(t,e,s,n)}function _v(i,t,e){var s=e.backgroundColor,n=e.borderColor,o=e.borderWidth;!s&&(!n||!o)||(i.beginPath(),yv(i,se(t.x)+o/2,se(t.y)+o/2,se(t.w)-o,se(t.h)-o,e.borderRadius),i.closePath(),s&&(i.fillStyle=s,i.fill()),n&&o&&(i.strokeStyle=n,i.lineWidth=o,i.lineJoin="miter",i.stroke()))}function xv(i,t,e){var s=e.lineHeight,n=i.w,o=i.x,r=i.y+s/2;return t==="center"?o+=n/2:(t==="end"||t==="right")&&(o+=n),{h:s,w:n,x:o,y:r}}function wv(i,t,e){var s=i.shadowBlur,n=e.stroked,o=se(e.x),r=se(e.y),a=se(e.w);n&&i.strokeText(t,o,r,a),e.filled&&(s&&n&&(i.shadowBlur=0),i.fillText(t,o,r,a),s&&n&&(i.shadowBlur=s))}function kv(i,t,e,s){var n=s.textAlign,o=s.color,r=!!o,a=s.font,l=t.length,c=s.textStrokeColor,h=s.textStrokeWidth,d=c&&h,u;if(!(!l||!r&&!d))for(e=xv(e,n,a),i.font=a.string,i.textAlign=n,i.textBaseline="middle",i.shadowBlur=s.textShadowBlur,i.shadowColor=s.textShadowColor,r&&(i.fillStyle=o),d&&(i.lineJoin="round",i.lineWidth=h,i.strokeStyle=c),u=0,l=t.length;u<l;++u)wv(i,t[u],{stroked:d,filled:r,w:e.w,x:e.x,y:e.y+e.h*u})}var Jc=function(i,t,e,s){var n=this;n._config=i,n._index=s,n._model=null,n._rects=null,n._ctx=t,n._el=e};qt(Jc.prototype,{_modelize:function(i,t,e,s){var n=this,o=n._index,r=ot(X([e.font,{}],s,o)),a=X([e.color,Q.color],s,o);return{align:X([e.align,"center"],s,o),anchor:X([e.anchor,"center"],s,o),area:s.chart.chartArea,backgroundColor:X([e.backgroundColor,null],s,o),borderColor:X([e.borderColor,null],s,o),borderRadius:X([e.borderRadius,0],s,o),borderWidth:X([e.borderWidth,0],s,o),clamp:X([e.clamp,!1],s,o),clip:X([e.clip,!1],s,o),color:a,display:i,font:r,lines:t,offset:X([e.offset,4],s,o),opacity:X([e.opacity,1],s,o),origin:bv(n._el,s),padding:dt(X([e.padding,4],s,o)),positioner:vv(n._el),rotation:X([e.rotation,0],s,o)*(Math.PI/180),size:Hi.textSize(n._ctx,t,r),textAlign:X([e.textAlign,"start"],s,o),textShadowBlur:X([e.textShadowBlur,0],s,o),textShadowColor:X([e.textShadowColor,a],s,o),textStrokeColor:X([e.textStrokeColor,a],s,o),textStrokeWidth:X([e.textStrokeWidth,0],s,o)}},update:function(i){var t=this,e=null,s=null,n=t._index,o=t._config,r,a,l,c=X([o.display,!0],i,n);c&&(r=i.dataset.data[n],a=T(Y(o.formatter,[r,i]),r),l=L(a)?[]:Hi.toTextLines(a),l.length&&(e=t._modelize(c,l,o,i),s=gv(e))),t._model=e,t._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(i,t){var e=this,s=i.ctx,n=e._model,o=e._rects,r;this.visible()&&(s.save(),n.clip&&(r=n.area,s.beginPath(),s.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),s.clip()),s.globalAlpha=Hi.bound(0,n.opacity,1),s.translate(se(t.x),se(t.y)),s.rotate(n.rotation),_v(s,o.frame,n),kv(s,n.lines,o.text,n),s.restore())}});var Cv=Number.MIN_SAFE_INTEGER||-9007199254740991,Sv=Number.MAX_SAFE_INTEGER||9007199254740991;function Ai(i,t,e){var s=Math.cos(e),n=Math.sin(e),o=t.x,r=t.y;return{x:o+s*(i.x-o)-n*(i.y-r),y:r+n*(i.x-o)+s*(i.y-r)}}function rl(i,t){var e=Sv,s=Cv,n=t.origin,o,r,a,l,c;for(o=0;o<i.length;++o)r=i[o],a=r.x-n.x,l=r.y-n.y,c=t.vx*a+t.vy*l,e=Math.min(e,c),s=Math.max(s,c);return{min:e,max:s}}function Ds(i,t){var e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);return{vx:(t.x-i.x)/n,vy:(t.y-i.y)/n,origin:i,ln:n}}var Zc=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};qt(Zc.prototype,{center:function(){var i=this._rect;return{x:i.x+i.w/2,y:i.y+i.h/2}},update:function(i,t,e){this._rotation=e,this._rect={x:t.x+i.x,y:t.y+i.y,w:t.w,h:t.h}},contains:function(i){var t=this,e=1,s=t._rect;return i=Ai(i,t.center(),-t._rotation),!(i.x<s.x-e||i.y<s.y-e||i.x>s.x+s.w+e*2||i.y>s.y+s.h+e*2)},intersects:function(i){var t=this._points(),e=i._points(),s=[Ds(t[0],t[1]),Ds(t[0],t[3])],n,o,r;for(this._rotation!==i._rotation&&s.push(Ds(e[0],e[1]),Ds(e[0],e[3])),n=0;n<s.length;++n)if(o=rl(t,s[n]),r=rl(e,s[n]),o.max<r.min||r.max<o.min)return!1;return!0},_points:function(){var i=this,t=i._rect,e=i._rotation,s=i.center();return[Ai({x:t.x,y:t.y},s,e),Ai({x:t.x+t.w,y:t.y},s,e),Ai({x:t.x+t.w,y:t.y+t.h},s,e),Ai({x:t.x,y:t.y+t.h},s,e)]}});function th(i,t,e){var s=t.positioner(i,t),n=s.vx,o=s.vy;if(!n&&!o)return{x:s.x,y:s.y};var r=e.w,a=e.h,l=t.rotation,c=Math.abs(r/2*Math.cos(l))+Math.abs(a/2*Math.sin(l)),h=Math.abs(r/2*Math.sin(l))+Math.abs(a/2*Math.cos(l)),d=1/Math.max(Math.abs(n),Math.abs(o));return c*=n*d,h*=o*d,c+=t.offset*n,h+=t.offset*o,{x:s.x+c,y:s.y+h}}function Mv(i,t){var e,s,n,o;for(e=i.length-1;e>=0;--e)for(n=i[e].$layout,s=e-1;s>=0&&n._visible;--s)o=i[s].$layout,o._visible&&n._box.intersects(o._box)&&t(n,o);return i}function Av(i){var t,e,s,n,o,r,a;for(t=0,e=i.length;t<e;++t)s=i[t],n=s.$layout,n._visible&&(a=new Proxy(s._el,{get:(l,c)=>l.getProps([c],!0)[c]}),o=s.geometry(),r=th(a,s.model(),o),n._box.update(r,o,s.rotation()));return Mv(i,function(l,c){var h=l._hidable,d=c._hidable;h&&d||d?c._visible=!1:h&&(l._visible=!1)})}var ji={prepare:function(i){var t=[],e,s,n,o,r;for(e=0,n=i.length;e<n;++e)for(s=0,o=i[e].length;s<o;++s)r=i[e][s],t.push(r),r.$layout={_box:new Zc,_hidable:!1,_visible:!0,_set:e,_idx:r._index};return t.sort(function(a,l){var c=a.$layout,h=l.$layout;return c._idx===h._idx?h._set-c._set:h._idx-c._idx}),this.update(t),t},update:function(i){var t=!1,e,s,n,o,r;for(e=0,s=i.length;e<s;++e)n=i[e],o=n.model(),r=n.$layout,r._hidable=o&&o.display==="auto",r._visible=n.visible(),t|=r._hidable;t&&Av(i)},lookup:function(i,t){var e,s;for(e=i.length-1;e>=0;--e)if(s=i[e].$layout,s&&s._visible&&s._box.contains(t))return i[e];return null},draw:function(i,t){var e,s,n,o,r,a;for(e=0,s=t.length;e<s;++e)n=t[e],o=n.$layout,o._visible&&(r=n.geometry(),a=th(n._el,n.model(),r),o._box.update(a,r,n.rotation()),n.draw(i,a))}},Dv=function(i){if(L(i))return null;var t=i,e,s,n;if(F(i))if(!L(i.label))t=i.label;else if(!L(i.r))t=i.r;else for(t="",e=Object.keys(i),n=0,s=e.length;n<s;++n)t+=(n!==0?", ":"")+e[n]+": "+i[e[n]];return""+t},Pv={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:Dv,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},xt="$datalabels",eh="$default";function Ev(i,t){var e=i.datalabels,s={},n=[],o,r;return e===!1?null:(e===!0&&(e={}),t=qt({},[t,e]),o=t.labels||{},r=Object.keys(o),delete t.labels,r.length?r.forEach(function(a){o[a]&&n.push(qt({},[t,o[a],{_key:a}]))}):n.push(t),s=n.reduce(function(a,l){return W(l.listeners||{},function(c,h){a[h]=a[h]||{},a[h][l._key||eh]=c}),delete l.listeners,a},{}),{labels:n,listeners:s})}function bo(i,t,e,s){if(t){var n=e.$context,o=e.$groups,r;t[o._set]&&(r=t[o._set][o._key],r&&Y(r,[n,s])===!0&&(i[xt]._dirty=!0,e.update(n)))}}function Ov(i,t,e,s,n){var o,r;!e&&!s||(e?s?e!==s&&(r=o=!0):r=!0:o=!0,r&&bo(i,t.leave,e,n),o&&bo(i,t.enter,s,n))}function Tv(i,t){var e=i[xt],s=e._listeners,n,o;if(!(!s.enter&&!s.leave)){if(t.type==="mousemove")o=ji.lookup(e._labels,t);else if(t.type!=="mouseout")return;n=e._hovered,e._hovered=o,Ov(i,s,n,o,t)}}function Lv(i,t){var e=i[xt],s=e._listeners.click,n=s&&ji.lookup(e._labels,t);n&&bo(i,s,n,t)}var Rv={id:"datalabels",defaults:Pv,beforeInit:function(i){i[xt]={_actives:[]}},beforeUpdate:function(i){var t=i[xt];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(i,t,e){var s=t.index,n=i[xt],o=n._datasets[s]=[],r=i.isDatasetVisible(s),a=i.data.datasets[s],l=Ev(a,e),c=t.meta.data||[],h=i.ctx,d,u,f,p,m,g,b,y;for(h.save(),d=0,f=c.length;d<f;++d)if(b=c[d],b[xt]=[],r&&b&&i.getDataVisibility(d)&&!b.skip)for(u=0,p=l.labels.length;u<p;++u)m=l.labels[u],g=m._key,y=new Jc(m,h,b,d),y.$groups={_set:s,_key:g||eh},y.$context={active:!1,chart:i,dataIndex:d,dataset:a,datasetIndex:s},y.update(y.$context),b[xt].push(y),o.push(y);h.restore(),qt(n._listeners,l.listeners,{merger:function(w,x,_){x[w]=x[w]||{},x[w][t.index]=_[w],n._listened=!0}})},afterUpdate:function(i){i[xt]._labels=ji.prepare(i[xt]._datasets)},afterDatasetsDraw:function(i){ji.draw(i,i[xt]._labels)},beforeEvent:function(i,t){if(i[xt]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":Tv(i,e);break;case"click":Lv(i,e);break}}},afterEvent:function(i){var t=i[xt],e=t._actives,s=t._actives=i.getActiveElements(),n=Hi.arrayDiff(e,s),o,r,a,l,c,h,d;for(o=0,r=n.length;o<r;++o)if(c=n[o],c[1])for(d=c[0].element[xt]||[],a=0,l=d.length;a<l;++a)h=d[a],h.$context.active=c[1]===1,h.update(h.$context);(t._dirty||n.length)&&(ji.update(t._labels),i.render()),delete t._dirty}};const zv=()=>C`
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
  `;var $v=Object.defineProperty,nt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&$v(t,e,n),n};Ji.register(Rv);const lr=class lr extends j{constructor(){super(...arguments),this.colors=Array.from({length:20},(t,e)=>this.generateColor(e)),this.type=null,this.xBeginAtZero=!0,this.yBeginAtZero=!0,this.indexAxis="x",this.loading=!1,this.hoverBorderColor="#ffffffff",this.linePointStyle="circle",this.pointRadius=10,this.lineFill=!1,this.transparentBackground=!0,this.displayLabels=!0,this.dataLabelsColor="#ffffffff",this.smoothLine=!1,this.borderColor="#000000",this.inputData={labels:[],datasets:{}},this.colorfulBars=!1,this._errorLoading=!1,this._options={responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",display:!1},datalabels:{display:this.displayLabels,color:this.dataLabelsColor,font:{weight:"bold",family:"'Plus Jakarta Sans', sans-serif, 'Fira Code'"}},title:{text:this.label,display:!0}},elements:{line:{tension:this.smoothLine?.4:0}}},this._chartCfg={type:this.type,data:{labels:[],datasets:[]},options:this._options},this._canvas=document.createElement("canvas")}generateColor(t){return`hsl(${t*137.5%360}, 70%, 50%)`}async loadData(t=!1){if(this.inputData.labels.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.inputData=e,this.loading=!1,this._errorLoading=!1,this.dispatchEvent(new Event("data-loaded")),!0}catch(e){if(this.loading=!1,this.inputData.labels.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-chart-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}get data(){return this.chart.data}_getDefaultColors(t){const e=Object.keys(t.datasets).length;return Array.from({length:e},(n,o)=>this.generateColor(o))}isScatterData(t){return"x"in t&&"y"in t}parseInputData(t){const{labels:e}=t,s=this.colors.length<Object.keys(t.datasets).length?this._getDefaultColors(t):this.colors,n=Object.entries(t.datasets).map(([o,r],a)=>{const l=s[a%s.length],c=this.type==="scatter"||this.type==="bubble",h=this.type==="bar";let d;return c||h&&!this.colorfulBars?d=this.transparentBackground?this.transparentize(l):l:d=this.transparentBackground?s.map(f=>this.transparentize(f)):s,{label:o,data:Object.values(r).map(f=>{if(c){if(this.isScatterData(f)){const p={x:f.x,y:f.y};return this.type==="bubble"&&f.r!==void 0&&(p.r=f.r),p}return{x:0,y:0}}return this.isScatterData(f)?0:f.value}),backgroundColor:d,borderColor:c?void 0:this.borderColor,pointStyle:c?void 0:this.linePointStyle,pointRadius:c?void 0:this.pointRadius,fill:c?void 0:this.lineFill,hoverBorderColor:c?void 0:this.hoverBorderColor}});return{labels:e,datasets:n}}transparentize(t,e){const s=e===void 0?.5:1-e;return Mf(t).alpha(s).rgbString()}updateFromTable(t){const e=t.data,s=[],n={},o=[];let r=0;const a=`dataset_${r}`;r++;for(const l of e){const{data:c}=l;let h,d;for(const[u,f]of Object.entries(c))u==="name"&&typeof f=="string"?h=f:typeof f=="number"&&(d=f);h&&d!==void 0&&(s.push(h),o.push({value:d}))}n[a]=o,this.inputData={labels:s,datasets:n}}highlight(t){if(!this.chart)return;const e=[],s=Object.values(this.inputData.datasets);for(const n in s){const o=s[n];for(const r in o){const a=o[r];if(!t(a))continue;const l={datasetIndex:Number(n),index:Number(r)};e.push(l)}}this.chart.setActiveElements(e),this.chart.update()}filterByValue(t){if(!this.chart)return;const e=structuredClone(this.inputData);for(const s of Object.values(e.datasets))for(const n in s)t(s[n])||delete s[n];this.chart.data=this.parseInputData(e),this.chart.update()}triggerFilter(t){this.dispatchEvent(new CustomEvent("labelfilter",{detail:t}))}filterByLabel(t){if(!this.chart||!this.chart.data.labels)return;const e=this.chart.data.labels.indexOf(t);if(e===-1)return;this.chart.toggleDataVisibility(e);const s=this.chart.data.labels.filter((o,r)=>this.chart.getDataVisibility(r)),n=this.chart.data.labels.filter((o,r)=>!this.chart.getDataVisibility(r));this.chart.update(),this.triggerFilter({label:t,visible:s,hidden:n})}reset(){this.chart.data=this.parseInputData(this.inputData),this.chart.update()}updated(t){var s,n;if(!this.chart)return;if(t.has("type")||t.has("indexAxis")||t.has("linePointStyle")||t.has("pointRadius")||t.has("lineFill")){this.chart.destroy();const o=structuredClone(this._options);this.label!==void 0&&(o.plugins||(o.plugins={}),o.plugins.title={text:this.label,display:!0}),this.indexAxis!==void 0&&(o.indexAxis=this.indexAxis),this.chart=new Ji(this._canvas,{type:this.type,data:this.parseInputData(this.inputData),options:o})}else for(const o of t.keys())switch(o){case"label":this.chart.options.plugins.title={text:this.label,display:this.label!==void 0};break;case"inputData":this.chart.data=this.parseInputData(this.inputData);break;case"smoothLine":this.chart.options.elements&&this.chart.options.elements.line&&(this.chart.options.elements.line.tension=this.smoothLine?.4:0);break;case"dataLabelsColor":this.chart.options.plugins.datalabels.color=this.dataLabelsColor;break;case"displayLabels":this.chart.options.plugins.datalabels.display=this.displayLabels;break;case"borderColor":this.chart.data.datasets.forEach(r=>{r.borderColor=this.borderColor});break;case"xStacked":this.type==="bar"&&((s=this.chart.options.scales)!=null&&s.x)&&Object.assign(this.chart.options.scales.x,{stacked:this.xStacked});break;case"yStacked":this.type==="bar"&&((n=this.chart.options.scales)!=null&&n.y)&&Object.assign(this.chart.options.scales.y,{stacked:this.yStacked});break;case"transparentBackground":{const r=this.colors||this._getDefaultColors(this.inputData),a=this.type==="scatter"||this.type==="bubble",l=this.type==="bar";this.chart.data.datasets.forEach((c,h)=>{const d=r[h%r.length];let u;a||l&&!this.colorfulBars?u=this.transparentBackground?this.transparentize(d):d:u=this.transparentBackground?r.map(f=>this.transparentize(f)):r,c.backgroundColor=u});break}case"colors":{const r=this.colors||this._getDefaultColors(this.inputData),a=this.type==="scatter"||this.type==="bubble",l=this.type==="bar";this.chart.data.datasets.forEach((c,h)=>{const d=r[h%r.length];let u;a||l&&!this.colorfulBars?u=this.transparentBackground?this.transparentize(d):d:u=this.transparentBackground?r.map(f=>this.transparentize(f)):r,c.backgroundColor=u});break}}this.chart.update(),this.chart.resize()}updateChartTitle(){if(this.chart)try{const t=this.chart.options;t&&t.plugins&&t.plugins.title&&(t.plugins.title.text=this.label,this.chart.update())}catch(t){console.warn("Chart: failed to update chart title",t)}}firstUpdated(){this.chart=new Ji(this._canvas,this._chartCfg);const t=this.renderRoot.querySelector(".parent");t&&new ResizeObserver(()=>this.chart.resize()).observe(t),this._canvas.onclick=e=>{if(this.inputData.labels.length===0)return;const s=this.chart.getElementsAtEventForMode(e,"point",{intersect:!0},!1);for(const n of s){const{index:o,datasetIndex:r}=n,a=this.inputData.labels[o],l=[];for(const d of Object.values(this.inputData.datasets))l.push(d[o]);const c={datasetIndex:r,index:o,values:l,label:a,value:{value:0}},h=()=>{var d,u;return(u=(d=Object.values(this.inputData.datasets))==null?void 0:d[r])==null?void 0:u[o]};Object.defineProperty(c,"value",{get:()=>h()}),this.dispatchEvent(new CustomEvent("sectionclick",{detail:c}))}}}render(){if(this.loading)return zv();if(this._errorLoading)return C`<slot name="error-loading"></slot>`;let t;return this.inputData.labels.length===0?(this._canvas.style.display="none",t=C`
        <slot name="missing-data">
          <bim-label>No data to display in this chart.</bim-label>
        </slot>
      `):this._canvas.style.display="block",C`
      <div class="parent">
        ${t} ${this._canvas}
        <slot name="labels"></slot>
      </div>
    `}};lr.styles=N`
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
  `;let Z=lr;nt([v({type:Array})],Z.prototype,"colors");nt([v({type:String,reflect:!0})],Z.prototype,"type");nt([v({type:Boolean,reflect:!0,attribute:"x-zero"})],Z.prototype,"xBeginAtZero");nt([v({type:Boolean,reflect:!0,attribute:"y-zero"})],Z.prototype,"yBeginAtZero");nt([v({type:String,reflect:!0,attribute:"index-axis"})],Z.prototype,"indexAxis");nt([v({type:Boolean,reflect:!0,attribute:"x-stacked"})],Z.prototype,"xStacked");nt([v({type:Boolean,reflect:!0,attribute:"y-stacked"})],Z.prototype,"yStacked");nt([v({type:Boolean,reflect:!0})],Z.prototype,"loading");nt([v({type:String,reflect:!1})],Z.prototype,"hoverBorderColor");nt([v({type:String,reflect:!0})],Z.prototype,"label");nt([v({type:String,reflect:!0,attribute:"point-style"})],Z.prototype,"linePointStyle");nt([v({type:Number,reflect:!0})],Z.prototype,"pointRadius");nt([v({type:String,reflect:!0})],Z.prototype,"lineFill");nt([v({type:Boolean,reflect:!0,attribute:"transparent-background"})],Z.prototype,"transparentBackground");nt([v({type:Boolean,reflect:!0})],Z.prototype,"displayLabels");nt([v({type:String,reflect:!0,attribute:"data-label-color"})],Z.prototype,"dataLabelsColor");nt([v({type:Boolean,reflect:!0})],Z.prototype,"smoothLine");nt([v({type:String,reflect:!0})],Z.prototype,"borderColor");nt([v({type:Object,attribute:!1})],Z.prototype,"inputData");nt([v({type:Boolean,reflect:!0})],Z.prototype,"colorfulBars");nt([ut()],Z.prototype,"_errorLoading");var Iv=Object.defineProperty,Ho=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Iv(t,e,n),n},lt;const kn=(lt=class extends j{constructor(){super(...arguments),this.visible=!1,this._previousContainer=null,this._showToolTip=async()=>{this.timeoutId=setTimeout(async()=>{if(this.visible=!0,!lt.container.parentElement){const t=document.querySelector("[data-context-dialog]");t?t.append(lt.container):document.body.append(lt.container)}this._previousContainer=this.parentElement,lt.container.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,lt.container.append(this),await this.computePosition()},this.timeout===void 0?800:this.timeout)},this._hideToolTip=()=>{clearTimeout(this.timeoutId),this.visible=!1,this._previousContainer&&(this._previousContainer.append(this),this._previousContainer=null),lt.container.children.length===0&&lt.container.parentElement&&lt.container.remove()}}static get container(){return lt._container||(lt._container=document.createElement("div"),lt._container.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        overflow: visible;
        pointer-events: none;
        z-index: 9999;
      `),lt._container}async computePosition(){const t=this._previousContainer||this.parentElement;if(!t)return;const e=this.style.display;this.style.display="block",this.style.visibility="hidden",await new Promise(requestAnimationFrame);const{x:s,y:n}=await Ul(t,this,{placement:this.placement,middleware:[Ol(10),Nl(),jl({padding:8}),Wl()]});Object.assign(this.style,{left:`${s}px`,top:`${n}px`,display:e,visibility:""})}connectedCallback(){super.connectedCallback();const t=this.parentElement;t&&(t.addEventListener("mouseenter",this._showToolTip),t.addEventListener("mouseleave",this._hideToolTip))}disconnectedCallback(){super.disconnectedCallback();const t=this.parentElement;t&&(t.removeEventListener("mouseenter",this._showToolTip),t.removeEventListener("mouseleave",this._hideToolTip))}render(){return C`<div><slot></slot></div>`}},lt.styles=N`
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
  `,lt._container=null,lt);Ho([v({type:Boolean,reflect:!0})],kn.prototype,"visible");Ho([v({type:Number,reflect:!0})],kn.prototype,"timeout");Ho([v({type:String,reflect:!0})],kn.prototype,"placement");let Fv=kn;var Bv=Object.defineProperty,Vv=Object.getOwnPropertyDescriptor,ht=(i,t,e,s)=>{for(var n=s>1?void 0:s?Vv(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Bv(t,e,n),n};const cr=class cr extends j{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.shiftStep=10,this.marks=[],this.showMarks=!1,this._value=0,this.valueLabelDisplay="auto",this.disableSwap=!1,this.disabled=!1,this.vertical=!1,this.markLabelOrientation="horizontal",this._activeThumb=-1,this.onValueChange=new Event("change"),this.onChangeCommitted=new Event("changecommitted")}set value(t){this._value=Array.isArray(t)?[this._clamp(t[0]),this._clamp(t[1])].sort((e,s)=>e-s):this._clamp(t),this.requestUpdate()}get value(){return this._value}_clamp(t){return Math.min(Math.max(t,this.min),this.max)}_valueToPercent(t){return(t-this.min)*100/(this.max-this.min)}_percentToValue(t){return(this.max-this.min)*t+this.min}_roundToStep(t,e){const s=Math.round((t-this.min)/e)*e+this.min,n=(e.toString().split(".")[1]??"").length;return Number(s.toFixed(n))}_findClosest(t,e){return t.reduce((s,n,o)=>Math.abs(n-e)<Math.abs(t[s]-e)?o:s,0)}_getSnappedValue(t){let e=this._percentToValue(t);if(this.step!==null)e=this._roundToStep(e,this.step);else if(this.marks.length>0){const s=this.marks.map(n=>n.value);e=s[this._findClosest(s,e)]}return this._clamp(e)}_formatValue(t){const e=this.scale?this.scale(t):t;return typeof this.valueLabelFormat=="function"?this.valueLabelFormat(e):typeof this.valueLabelFormat=="string"?this.valueLabelFormat:String(e)}_getFraction(t,e){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector(".track-wrapper");if(!s)return 0;const n=s.getBoundingClientRect();return this.vertical?1-(e-n.top)/n.height:(t-n.left)/n.width}_onPointerDown(t){if(this.disabled||t instanceof MouseEvent&&t.button!==0)return;const{clientX:e,clientY:s}=t instanceof TouchEvent?t.changedTouches[0]:t,n=this._getFraction(e,s),o=this._getSnappedValue(n);let r=0;if(Array.isArray(this._value)){const c=this._value.map(h=>Math.abs(h-o));r=c[0]<=c[1]?0:1}this._activeThumb=r,this._updateValue(o,r);const a=c=>{const{clientX:h,clientY:d}=c instanceof TouchEvent?c.changedTouches[0]:c,u=this._getFraction(h,d),f=this._getSnappedValue(u);this._updateValue(f,r)},l=()=>{this._activeThumb=-1,this.dispatchEvent(this.onChangeCommitted),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",l)};document.addEventListener("mousemove",a,{passive:!0}),document.addEventListener("mouseup",l),document.addEventListener("touchmove",a,{passive:!0}),document.addEventListener("touchend",l)}_updateValue(t,e){if(Array.isArray(this._value)){const s=[...this._value];s[e]=t,this.disableSwap||s.sort((n,o)=>n-o),this._value=s}else this._value=t;this.requestUpdate(),this.dispatchEvent(this.onValueChange)}_onKeyDown(t,e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(t.key))return;t.preventDefault();const n=Array.isArray(this._value)?this._value[e]:this._value,o=this.step??1,r=this.shiftStep,a=t.shiftKey;let l=null;const c=this.marks.map(h=>h.value);if(this.step!==null){const h=a?r:o;switch(t.key){case"ArrowRight":case"ArrowUp":l=this._clamp(n+h);break;case"ArrowLeft":case"ArrowDown":l=this._clamp(n-h);break;case"PageUp":l=this._clamp(n+r);break;case"PageDown":l=this._clamp(n-r);break;case"Home":l=this.min;break;case"End":l=this.max;break}}else if(c.length>0){const h=this._findClosest(c,n);switch(t.key){case"ArrowRight":case"ArrowUp":l=c[Math.min(h+1,c.length-1)];break;case"ArrowLeft":case"ArrowDown":l=c[Math.max(h-1,0)];break;case"Home":l=c[0];break;case"End":l=c[c.length-1];break}}l!==null&&(this._updateValue(l,e),this.dispatchEvent(this.onChangeCommitted))}render(){const t=Array.isArray(this._value),e=t?this._value:[this._value],s=t?this._valueToPercent(e[0]):0,n=this._valueToPercent(e[e.length-1]),o=this.vertical?{bottom:`${s}%`,height:`${n-s}%`}:{left:`${s}%`,width:`${n-s}%`},r=this.showMarks&&this.step!==null?Array.from({length:Math.floor((this.max-this.min)/this.step)+1},(a,l)=>({value:this.min+this.step*l})):this.marks;return C`
      ${ne(this.label||this.icon,()=>C`
          <bim-input .label=${this.label} .icon=${this.icon}></bim-input>
        `)}

      <div
        class="track-wrapper"
        @mousedown=${this._onPointerDown}
        @touchstart=${this._onPointerDown}
      >
        <div class="rail"></div>
        <div class="track" style=${pe(o)}></div>

        ${r.map(a=>{const l=this._valueToPercent(a.value),c=t?a.value>=e[0]&&a.value<=e[1]:a.value<=e[0];return C`
            <div
              class="mark"
              ?data-active=${c}
              style=${pe(this.vertical?{bottom:`${l}%`}:{left:`${l}%`})}
            ></div>
            ${ne(a.label,()=>C`
                <span
                  class="mark-label"
                  style=${pe(this.vertical?{bottom:`${l}%`}:{left:`${l}%`})}
                >
                  ${a.label}
                </span>
              `)}
          `})}
        ${e.map((a,l)=>{const c=this._valueToPercent(a),h=this._activeThumb===l;return C`
            <div
              class="thumb"
              ?data-active=${h||this.valueLabelDisplay==="on"}
              style=${pe(this.vertical?{bottom:`${c}%`,left:"50%"}:{left:`${c}%`,top:"50%"})}
            >
              ${ne(this.valueLabelDisplay!=="off",()=>C`
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
    `}};cr.styles=N`
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
  `;let it=cr;ht([v({type:String,reflect:!0})],it.prototype,"name",2);ht([v({type:String,reflect:!0})],it.prototype,"label",2);ht([v({type:String,reflect:!0})],it.prototype,"icon",2);ht([v({type:Number,reflect:!0})],it.prototype,"min",2);ht([v({type:Number,reflect:!0})],it.prototype,"max",2);ht([v({type:Number,reflect:!0})],it.prototype,"step",2);ht([v({type:Number,attribute:"shift-step",reflect:!0})],it.prototype,"shiftStep",2);ht([v({type:Array})],it.prototype,"marks",2);ht([v({type:Boolean,attribute:"show-marks",reflect:!0})],it.prototype,"showMarks",2);ht([v({attribute:!1})],it.prototype,"value",1);ht([v({type:String,attribute:"value-label-display",reflect:!0})],it.prototype,"valueLabelDisplay",2);ht([v({attribute:!1})],it.prototype,"valueLabelFormat",2);ht([v({attribute:!1})],it.prototype,"scale",2);ht([v({type:Boolean,attribute:"disable-swap",reflect:!0})],it.prototype,"disableSwap",2);ht([v({type:Boolean,reflect:!0})],it.prototype,"disabled",2);ht([v({type:Boolean,reflect:!0})],it.prototype,"vertical",2);ht([v({type:String,attribute:"mark-label-orientation",reflect:!0})],it.prototype,"markLabelOrientation",2);ht([ut()],it.prototype,"_activeThumb",2);var Hv=Object.defineProperty,At=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Hv(t,e,n),n};const al={A0:{width:841,height:1189},A1:{width:594,height:841},A2:{width:420,height:594},A3:{width:297,height:420},A4:{width:210,height:297}},hr=class hr extends j{constructor(){super(...arguments),this.label="",this.sheetNumber="",this.size="A4",this.orientation="portrait",this.margin=10,this.debug=!1,this.ruler=!1,this.rulerLength=100,this._pxPerMm=3.7795275591,this._rulerPosition={x:20,y:20},this._rulerDragging=!1,this._rulerOrientation="horizontal",this._mediaQueryList=null,this._mediaQueryListener=null,this._rulerDragStart={x:0,y:0},this.handleRulerMouseMove=t=>{this._rulerDragging&&(this._rulerPosition={x:t.clientX-this._rulerDragStart.x,y:t.clientY-this._rulerDragStart.y},this.requestUpdate())},this.handleRulerMouseUp=()=>{this._rulerDragging=!1,this.removeRulerDragListeners()}}get widthMm(){const t=al[this.size];return this.orientation==="portrait"?t.width:t.height}get heightMm(){const t=al[this.size];return this.orientation==="portrait"?t.height:t.width}get pxPerMm(){return this._pxPerMm}get drawingAreaEl(){return this.shadowRoot.querySelector(".printable-area")}get drawingSlotEl(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".drawing-slot"))??null}mmToPx(t){return t*this._pxPerMm}mm(t){return`${this.mmToPx(t)}px`}calibrate(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".calibration-ruler");if(!t)return;t.offsetHeight;const e=t.getBoundingClientRect().width;e>0&&(this._pxPerMm=e/100)}setupDPRListener(){const t=window.devicePixelRatio||1;this._mediaQueryList=window.matchMedia(`(resolution: ${t}dppx)`),this._mediaQueryListener=()=>{this.calibrate(),this.requestUpdate(),this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),this.setupDPRListener()},this._mediaQueryList.addEventListener("change",this._mediaQueryListener)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.calibrate(),this.setupDPRListener()})}disconnectedCallback(){super.disconnectedCallback(),this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),this._mediaQueryList=null,this._mediaQueryListener=null,this.removeRulerDragListeners()}handleRulerMouseDown(t){t.preventDefault(),this._rulerDragging=!0,this._rulerDragStart={x:t.clientX-this._rulerPosition.x,y:t.clientY-this._rulerPosition.y},document.addEventListener("mousemove",this.handleRulerMouseMove),document.addEventListener("mouseup",this.handleRulerMouseUp)}removeRulerDragListeners(){document.removeEventListener("mousemove",this.handleRulerMouseMove),document.removeEventListener("mouseup",this.handleRulerMouseUp)}toggleRulerOrientation(t){t.stopPropagation(),this._rulerOrientation=this._rulerOrientation==="horizontal"?"vertical":"horizontal"}renderRulerGizmo(){if(!this.ruler)return null;const t=this.mmToPx(this.rulerLength),e=Math.floor(this.rulerLength/10),s=this._rulerOrientation==="horizontal";return C`
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
          ${Array.from({length:e+1},(n,o)=>{const r=o/e*100,a=o%1===0,l=o*10/10;return C`
              <div
                class="ruler-tick ${this._rulerOrientation} ${a?"cm-marker":""}"
                style="${s?`left: ${r}%`:`top: ${r}%`};"
              >
                ${a?C`<div class="ruler-cm-label ${this._rulerOrientation}">
                      ${l}
                    </div>`:null}
              </div>
            `})}
        </div>
      </div>
    `}render(){const t=this.mmToPx(this.widthMm),e=this.mmToPx(this.heightMm);return this.style.width=`${t}px`,this.style.height=`${e}px`,this.style.padding=this.mm(this.margin),C`
      <!-- Calibration ruler: hidden element used to measure mm→px -->
      <div class="calibration-ruler"></div>

      <!-- Ruler gizmo for scale validation -->
      ${this.renderRulerGizmo()}

      <!-- Printable area -->
      <div class="printable-area ${this.debug?"debug":""}">
        <!-- Title block template or drawing area slot -->
        ${this.titleBlockTemplate?this.titleBlockTemplate(this.mm.bind(this),C`<div class="drawing-slot"><slot></slot></div>`,{label:this.label,sheetNumber:this.sheetNumber}):C`<div class="drawing-slot"><slot></slot></div>`}
      </div>
    `}};hr.styles=N`
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
  `;let vt=hr;At([v({type:String})],vt.prototype,"label");At([v({type:String})],vt.prototype,"sheetNumber");At([v({type:String})],vt.prototype,"size");At([v({type:String})],vt.prototype,"orientation");At([v({type:Number})],vt.prototype,"margin");At([v({type:Boolean})],vt.prototype,"debug");At([v({type:Boolean,attribute:"ruler"})],vt.prototype,"ruler");At([v({type:Number,attribute:"ruler-length"})],vt.prototype,"rulerLength");At([v({attribute:!1})],vt.prototype,"titleBlockTemplate");At([ut()],vt.prototype,"_pxPerMm");At([ut()],vt.prototype,"_rulerPosition");At([ut()],vt.prototype,"_rulerDragging");At([ut()],vt.prototype,"_rulerOrientation");export{md as B,Qn as C,ai as M,Yu as T,Ht as a,lu as b};
