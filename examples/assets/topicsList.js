import{i as T,x as m,r as I,B as Pe}from"./lit-element-CToom8Wf.js";import{M as Pi,d as Sn,W as We,S as kn,j as na,O as Xo,i as P,G as Tn,k as ce,F as Vt,l as pt,m as Ge,p as Li,e as Jn,f as oa,L as sa,B as Qn,g as ra,h as aa,I as Jo,H as Qo,q as la,r as ca,s as da,t as ai,u as we,v as ua,D as ha,A as pa,c as ma,V as ba,w as fi,x as fa,y as yt,R as ga,z as Zo,E as Ko,J as va,K as ts,N as ya,Q as _a,U as es,X as is,Y as wa,Z as xa,P as $a,C as Ca,a as Aa,b as Ea,T as qe}from"./index-BJ_2_yvW.js";var Sa=Object.defineProperty,ka=(e,t,i)=>t in e?Sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Pt=(e,t,i)=>(ka(e,typeof t!="symbol"?t+"":t,i),i);const Kt=Math.min,bt=Math.max,gi=Math.round,Ct=e=>({x:e,y:e}),Ta={left:"right",right:"left",bottom:"top",top:"bottom"},Oa={start:"end",end:"start"};function Zn(e,t,i){return bt(e,Kt(t,i))}function Ye(e,t){return typeof e=="function"?e(t):e}function ft(e){return e.split("-")[0]}function Ri(e){return e.split("-")[1]}function ns(e){return e==="x"?"y":"x"}function os(e){return e==="y"?"height":"width"}function Ht(e){return["top","bottom"].includes(ft(e))?"y":"x"}function ss(e){return ns(Ht(e))}function Ia(e,t,i){i===void 0&&(i=!1);const n=Ri(e),o=ss(e),s=os(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=vi(r)),[r,vi(r)]}function Na(e){const t=vi(e);return[dn(e),t,dn(t)]}function dn(e){return e.replace(/start|end/g,t=>Oa[t])}function Ma(e,t,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?t?o:n:t?n:o;case"left":case"right":return t?s:r;default:return[]}}function Pa(e,t,i,n){const o=Ri(e);let s=Ma(ft(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(dn)))),s}function vi(e){return e.replace(/left|right|bottom|top/g,t=>Ta[t])}function La(e){return{top:0,right:0,bottom:0,left:0,...e}}function rs(e){return typeof e!="number"?La(e):{top:e,right:e,bottom:e,left:e}}function te(e){const{x:t,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:t,right:t+n,bottom:i+o,x:t,y:i}}function Kn(e,t,i){let{reference:n,floating:o}=e;const s=Ht(t),r=ss(t),l=os(r),a=ft(t),d=s==="y",u=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2,h=n[l]/2-o[l]/2;let p;switch(a){case"top":p={x:u,y:n.y-o.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:c};break;case"left":p={x:n.x-o.width,y:c};break;default:p={x:n.x,y:n.y}}switch(Ri(t)){case"start":p[r]-=h*(i&&d?-1:1);break;case"end":p[r]+=h*(i&&d?-1:1);break}return p}const Ra=async(e,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:c}=Kn(d,n,a),h=n,p={},f=0;for(let w=0;w<l.length;w++){const{name:v,fn:b}=l[w],{x:y,y:_,data:x,reset:A}=await b({x:u,y:c,initialPlacement:n,placement:h,strategy:o,middlewareData:p,rects:d,platform:r,elements:{reference:e,floating:t}});u=y??u,c=_??c,p={...p,[v]:{...p[v],...x}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(d=A.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):A.rects),{x:u,y:c}=Kn(d,h,a)),w=-1)}return{x:u,y:c,placement:h,strategy:o,middlewareData:p}};async function as(e,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:s,rects:r,elements:l,strategy:a}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:c="floating",altBoundary:h=!1,padding:p=0}=Ye(t,e),f=rs(p),w=l[h?c==="floating"?"reference":"floating":c],v=te(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(w)))==null||i?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:a})),b=c==="floating"?{x:n,y:o,width:r.floating.width,height:r.floating.height}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),_=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},x=te(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:y,strategy:a}):b);return{top:(v.top-x.top+f.top)/_.y,bottom:(x.bottom-v.bottom+f.bottom)/_.y,left:(v.left-x.left+f.left)/_.x,right:(x.right-v.right+f.right)/_.x}}const ja=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:d}=t,{mainAxis:u=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:w=!0,...v}=Ye(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const b=ft(o),y=Ht(l),_=ft(l)===l,x=await(a.isRTL==null?void 0:a.isRTL(d.floating)),A=h||(_||!w?[vi(l)]:Na(l)),C=f!=="none";!h&&C&&A.push(...Pa(l,w,f,x));const O=[l,...A],M=await as(t,v),S=[];let E=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&S.push(M[b]),c){const $=Ia(o,r,x);S.push(M[$[0]],M[$[1]])}if(E=[...E,{placement:o,overflows:S}],!S.every($=>$<=0)){var B,q;const $=(((B=s.flip)==null?void 0:B.index)||0)+1,R=O[$];if(R)return{data:{index:$,overflows:E},reset:{placement:R}};let V=(q=E.filter(tt=>tt.overflows[0]<=0).sort((tt,et)=>tt.overflows[1]-et.overflows[1])[0])==null?void 0:q.placement;if(!V)switch(p){case"bestFit":{var W;const tt=(W=E.filter(et=>{if(C){const dt=Ht(et.placement);return dt===y||dt==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(dt=>dt>0).reduce((dt,ye)=>dt+ye,0)]).sort((et,dt)=>et[1]-dt[1])[0])==null?void 0:W[0];tt&&(V=tt);break}case"initialPlacement":V=l;break}if(o!==V)return{reset:{placement:V}}}return{}}}};function ls(e){const t=Kt(...e.map(s=>s.left)),i=Kt(...e.map(s=>s.top)),n=bt(...e.map(s=>s.right)),o=bt(...e.map(s=>s.bottom));return{x:t,y:i,width:n-t,height:o-i}}function za(e){const t=e.slice().sort((o,s)=>o.y-s.y),i=[];let n=null;for(let o=0;o<t.length;o++){const s=t[o];!n||s.y-n.y>n.height/2?i.push([s]):i[i.length-1].push(s),n=s}return i.map(o=>te(ls(o)))}const Da=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:n,rects:o,platform:s,strategy:r}=t,{padding:l=2,x:a,y:d}=Ye(e,t),u=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(n.reference))||[]),c=za(u),h=te(ls(u)),p=rs(l);function f(){if(c.length===2&&c[0].left>c[1].right&&a!=null&&d!=null)return c.find(v=>a>v.left-p.left&&a<v.right+p.right&&d>v.top-p.top&&d<v.bottom+p.bottom)||h;if(c.length>=2){if(Ht(i)==="y"){const E=c[0],B=c[c.length-1],q=ft(i)==="top",W=E.top,$=B.bottom,R=q?E.left:B.left,V=q?E.right:B.right,tt=V-R,et=$-W;return{top:W,bottom:$,left:R,right:V,width:tt,height:et,x:R,y:W}}const v=ft(i)==="left",b=bt(...c.map(E=>E.right)),y=Kt(...c.map(E=>E.left)),_=c.filter(E=>v?E.left===y:E.right===b),x=_[0].top,A=_[_.length-1].bottom,C=y,O=b,M=O-C,S=A-x;return{top:x,bottom:A,left:C,right:O,width:M,height:S,x:C,y:x}}return h}const w=await s.getElementRects({reference:{getBoundingClientRect:f},floating:n.floating,strategy:r});return o.reference.x!==w.reference.x||o.reference.y!==w.reference.y||o.reference.width!==w.reference.width||o.reference.height!==w.reference.height?{reset:{rects:w}}:{}}}};async function Fa(e,t){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),r=ft(i),l=Ri(i),a=Ht(i)==="y",d=["left","top"].includes(r)?-1:1,u=s&&a?-1:1,c=Ye(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof f=="number"&&(p=l==="end"?f*-1:f),a?{x:p*u,y:h*d}:{x:h*d,y:p*u}}const cs=function(e){return{name:"offset",options:e,async fn(t){var i,n;const{x:o,y:s,placement:r,middlewareData:l}=t,a=await Fa(t,e);return r===((i=l.offset)==null?void 0:i.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:o+a.x,y:s+a.y,data:{...a,placement:r}}}}},Ha=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:o}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:v=>{let{x:b,y}=v;return{x:b,y}}},...a}=Ye(e,t),d={x:i,y:n},u=await as(t,a),c=Ht(ft(o)),h=ns(c);let p=d[h],f=d[c];if(s){const v=h==="y"?"top":"left",b=h==="y"?"bottom":"right",y=p+u[v],_=p-u[b];p=Zn(y,p,_)}if(r){const v=c==="y"?"top":"left",b=c==="y"?"bottom":"right",y=f+u[v],_=f-u[b];f=Zn(y,f,_)}const w=l.fn({...t,[h]:p,[c]:f});return{...w,data:{x:w.x-i,y:w.y-n,enabled:{[h]:s,[c]:r}}}}}};function ji(){return typeof window<"u"}function At(e){return ds(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function St(e){var t;return(t=(ds(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ds(e){return ji()?e instanceof Node||e instanceof Q(e).Node:!1}function ut(e){return ji()?e instanceof Element||e instanceof Q(e).Element:!1}function ht(e){return ji()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function to(e){return!ji()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function Xe(e){const{overflow:t,overflowX:i,overflowY:n,display:o}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(o)}function Ba(e){return["table","td","th"].includes(At(e))}function Ua(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function On(e){const t=In(),i=ut(e)?it(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function Va(e){let t=ee(e);for(;ht(t)&&!zi(t);){if(On(t))return t;if(Ua(t))return null;t=ee(t)}return null}function In(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function zi(e){return["html","body","#document"].includes(At(e))}function it(e){return Q(e).getComputedStyle(e)}function Di(e){return ut(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ee(e){if(At(e)==="html")return e;const t=e.assignedSlot||e.parentNode||to(e)&&e.host||St(e);return to(t)?t.host:t}function us(e){const t=ee(e);return zi(t)?e.ownerDocument?e.ownerDocument.body:e.body:ht(t)&&Xe(t)?t:us(t)}function un(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const o=us(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=Q(o);if(s){const l=Wa(r);return t.concat(r,r.visualViewport||[],Xe(o)?o:[],l&&i?un(l):[])}return t.concat(o,un(o,[],i))}function Wa(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function hs(e){const t=it(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=ht(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,l=gi(i)!==s||gi(n)!==r;return l&&(i=s,n=r),{width:i,height:n,$:l}}function ps(e){return ut(e)?e:e.contextElement}function Xt(e){const t=ps(e);if(!ht(t))return Ct(1);const i=t.getBoundingClientRect(),{width:n,height:o,$:s}=hs(t);let r=(s?gi(i.width):i.width)/n,l=(s?gi(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Ga=Ct(0);function ms(e){const t=Q(e);return!In()||!t.visualViewport?Ga:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function qa(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Q(e)?!1:t}function Le(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=ps(e);let r=Ct(1);t&&(n?ut(n)&&(r=Xt(n)):r=Xt(e));const l=qa(s,i,n)?ms(s):Ct(0);let a=(o.left+l.x)/r.x,d=(o.top+l.y)/r.y,u=o.width/r.x,c=o.height/r.y;if(s){const h=Q(s),p=n&&ut(n)?Q(n):n;let f=h,w=f.frameElement;for(;w&&n&&p!==f;){const v=Xt(w),b=w.getBoundingClientRect(),y=it(w),_=b.left+(w.clientLeft+parseFloat(y.paddingLeft))*v.x,x=b.top+(w.clientTop+parseFloat(y.paddingTop))*v.y;a*=v.x,d*=v.y,u*=v.x,c*=v.y,a+=_,d+=x,f=Q(w),w=f.frameElement}}return te({width:u,height:c,x:a,y:d})}const Ya=[":popover-open",":modal"];function bs(e){return Ya.some(t=>{try{return e.matches(t)}catch{return!1}})}function Xa(e){let{elements:t,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=St(n),l=t?bs(t.floating):!1;if(n===r||l&&s)return i;let a={scrollLeft:0,scrollTop:0},d=Ct(1);const u=Ct(0),c=ht(n);if((c||!c&&!s)&&((At(n)!=="body"||Xe(r))&&(a=Di(n)),ht(n))){const h=Le(n);d=Xt(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-a.scrollLeft*d.x+u.x,y:i.y*d.y-a.scrollTop*d.y+u.y}}function Ja(e){return Array.from(e.getClientRects())}function fs(e){return Le(St(e)).left+Di(e).scrollLeft}function Qa(e){const t=St(e),i=Di(e),n=e.ownerDocument.body,o=bt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=bt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+fs(e);const l=-i.scrollTop;return it(n).direction==="rtl"&&(r+=bt(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:l}}function Za(e,t){const i=Q(e),n=St(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,l=0,a=0;if(o){s=o.width,r=o.height;const d=In();(!d||d&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}return{width:s,height:r,x:l,y:a}}function Ka(e,t){const i=Le(e,!0,t==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=ht(e)?Xt(e):Ct(1),r=e.clientWidth*s.x,l=e.clientHeight*s.y,a=o*s.x,d=n*s.y;return{width:r,height:l,x:a,y:d}}function eo(e,t,i){let n;if(t==="viewport")n=Za(e,i);else if(t==="document")n=Qa(St(e));else if(ut(t))n=Ka(t,i);else{const o=ms(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return te(n)}function gs(e,t){const i=ee(e);return i===t||!ut(i)||zi(i)?!1:it(i).position==="fixed"||gs(i,t)}function tl(e,t){const i=t.get(e);if(i)return i;let n=un(e,[],!1).filter(l=>ut(l)&&At(l)!=="body"),o=null;const s=it(e).position==="fixed";let r=s?ee(e):e;for(;ut(r)&&!zi(r);){const l=it(r),a=On(r);!a&&l.position==="fixed"&&(o=null),(s?!a&&!o:!a&&l.position==="static"&&o&&["absolute","fixed"].includes(o.position)||Xe(r)&&!a&&gs(e,r))?n=n.filter(d=>d!==r):o=l,r=ee(r)}return t.set(e,n),n}function el(e){let{element:t,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?tl(t,this._c):[].concat(i),n],r=s[0],l=s.reduce((a,d)=>{const u=eo(t,d,o);return a.top=bt(u.top,a.top),a.right=Kt(u.right,a.right),a.bottom=Kt(u.bottom,a.bottom),a.left=bt(u.left,a.left),a},eo(t,r,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function il(e){const{width:t,height:i}=hs(e);return{width:t,height:i}}function nl(e,t,i){const n=ht(t),o=St(t),s=i==="fixed",r=Le(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=Ct(0);if(n||!n&&!s)if((At(t)!=="body"||Xe(o))&&(l=Di(t)),n){const c=Le(t,!0,s,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else o&&(a.x=fs(o));const d=r.left+l.scrollLeft-a.x,u=r.top+l.scrollTop-a.y;return{x:d,y:u,width:r.width,height:r.height}}function io(e,t){return!ht(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function vs(e,t){const i=Q(e);if(!ht(e)||bs(e))return i;let n=io(e,t);for(;n&&Ba(n)&&it(n).position==="static";)n=io(n,t);return n&&(At(n)==="html"||At(n)==="body"&&it(n).position==="static"&&!On(n))?i:n||Va(e)||i}const ol=async function(e){const t=this.getOffsetParent||vs,i=this.getDimensions;return{reference:nl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function sl(e){return it(e).direction==="rtl"}const rl={convertOffsetParentRelativeRectToViewportRelativeRect:Xa,getDocumentElement:St,getClippingRect:el,getOffsetParent:vs,getElementRects:ol,getClientRects:Ja,getDimensions:il,getScale:Xt,isElement:ut,isRTL:sl},ys=Ha,_s=ja,ws=Da,xs=(e,t,i)=>{const n=new Map,o={platform:rl,...i},s={...o.platform,_c:n};return Ra(e,t,{...o,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hi=globalThis,Nn=hi.ShadowRoot&&(hi.ShadyCSS===void 0||hi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$s=Symbol(),no=new WeakMap;let al=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==$s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Nn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=no.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&no.set(t,e))}return e}toString(){return this.cssText}};const ll=e=>new al(typeof e=="string"?e:e+"",void 0,$s),cl=(e,t)=>{if(Nn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=hi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},oo=Nn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return ll(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dl,defineProperty:ul,getOwnPropertyDescriptor:hl,getOwnPropertyNames:pl,getOwnPropertySymbols:ml,getPrototypeOf:bl}=Object,ie=globalThis,so=ie.trustedTypes,fl=so?so.emptyScript:"",ro=ie.reactiveElementPolyfillSupport,ke=(e,t)=>e,yi={toAttribute(e,t){switch(t){case Boolean:e=e?fl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Mn=(e,t)=>!dl(e,t),ao={attribute:!0,type:String,converter:yi,reflect:!1,hasChanged:Mn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ie.litPropertyMetadata??(ie.litPropertyMetadata=new WeakMap);class xe extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=ao){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&ul(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=hl(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const l=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ao}static _$Ei(){if(this.hasOwnProperty(ke("elementProperties")))return;const t=bl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ke("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ke("properties"))){const i=this.properties,n=[...pl(i),...ml(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(oo(o))}else t!==void 0&&i.push(oo(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:yi).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:yi;this._$Em=s,this[s]=l.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Mn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}xe.elementStyles=[],xe.shadowRootOptions={mode:"open"},xe[ke("elementProperties")]=new Map,xe[ke("finalized")]=new Map,ro==null||ro({ReactiveElement:xe}),(ie.reactiveElementVersions??(ie.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gl={attribute:!0,type:String,converter:yi,reflect:!1,hasChanged:Mn},vl=(e=gl,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,e)},init(l){return l!==void 0&&this.P(r,void 0,e),l}}}if(n==="setter"){const{name:r}=i;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+n)};function g(e){return(t,i)=>typeof i=="object"?vl(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _i=globalThis,wi=_i.trustedTypes,lo=wi?wi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Cs="$lit$",xt=`lit$${Math.random().toFixed(9).slice(2)}$`,As="?"+xt,yl=`<${As}>`,Bt=document,xi=()=>Bt.createComment(""),Re=e=>e===null||typeof e!="object"&&typeof e!="function",Pn=Array.isArray,_l=e=>Pn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",en=`[ 	
\f\r]`,$e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,co=/-->/g,uo=/>/g,Lt=RegExp(`>|${en}(?:([^\\s"'>=/]+)(${en}*=${en}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ho=/'/g,po=/"/g,Es=/^(?:script|style|textarea|title)$/i,ne=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),mo=new WeakMap,jt=Bt.createTreeWalker(Bt,129);function Ss(e,t){if(!Pn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return lo!==void 0?lo.createHTML(t):t}const wl=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=$e;for(let l=0;l<i;l++){const a=e[l];let d,u,c=-1,h=0;for(;h<a.length&&(r.lastIndex=h,u=r.exec(a),u!==null);)h=r.lastIndex,r===$e?u[1]==="!--"?r=co:u[1]!==void 0?r=uo:u[2]!==void 0?(Es.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=Lt):u[3]!==void 0&&(r=Lt):r===Lt?u[0]===">"?(r=o??$e,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?Lt:u[3]==='"'?po:ho):r===po||r===ho?r=Lt:r===co||r===uo?r=$e:(r=Lt,o=void 0);const p=r===Lt&&e[l+1].startsWith("/>")?" ":"";s+=r===$e?a+yl:c>=0?(n.push(d),a.slice(0,c)+Cs+a.slice(c)+xt+p):a+xt+(c===-2?l:p)}return[Ss(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class je{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const l=t.length-1,a=this.parts,[d,u]=wl(t,i);if(this.el=je.createElement(d,n),jt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=jt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Cs)){const h=u[r++],p=o.getAttribute(c).split(xt),f=/([.?@])?(.*)/.exec(h);a.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?$l:f[1]==="?"?Cl:f[1]==="@"?Al:Hi}),o.removeAttribute(c)}else c.startsWith(xt)&&(a.push({type:6,index:s}),o.removeAttribute(c));if(Es.test(o.tagName)){const c=o.textContent.split(xt),h=c.length-1;if(h>0){o.textContent=wi?wi.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],xi()),jt.nextNode(),a.push({type:2,index:++s});o.append(c[h],xi())}}}else if(o.nodeType===8)if(o.data===As)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(xt,c+1))!==-1;)a.push({type:7,index:s}),c+=xt.length-1}s++}}static createElement(t,i){const n=Bt.createElement("template");return n.innerHTML=t,n}}function oe(e,t,i=e,n){var o,s;if(t===ne)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const l=Re(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),l===void 0?r=void 0:(r=new l(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=oe(e,r._$AS(e,t.values),r,n)),t}class xl{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Bt).importNode(i,!0);jt.currentNode=o;let s=jt.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new Fi(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new El(s,this,t)),this._$AV.push(d),a=n[++l]}r!==(a==null?void 0:a.index)&&(s=jt.nextNode(),r++)}return jt.currentNode=Bt,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class Fi{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=oe(this,t,i),Re(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==ne&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_l(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&Re(this._$AH)?this._$AA.nextSibling.data=t:this.T(Bt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=je.createElement(Ss(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new xl(s,this),l=r.u(this.options);r.p(n),this.T(l),this._$AH=r}}_$AC(t){let i=mo.get(t.strings);return i===void 0&&mo.set(t.strings,i=new je(t)),i}k(t){Pn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new Fi(this.O(xi()),this.O(xi()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Hi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=oe(this,t,i,0),r=!Re(t)||t!==this._$AH&&t!==ne,r&&(this._$AH=t);else{const l=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=oe(this,l[n+a],i,a),d===ne&&(d=this._$AH[a]),r||(r=!Re(d)||d!==this._$AH[a]),d===L?t=L:t!==L&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class $l extends Hi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class Cl extends Hi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class Al extends Hi{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=oe(this,t,i,0)??L)===ne)return;const n=this._$AH,o=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==L&&(n===L||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class El{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){oe(this,t)}}const bo=_i.litHtmlPolyfillSupport;bo==null||bo(je,Fi),(_i.litHtmlVersions??(_i.litHtmlVersions=[])).push("3.2.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ts=e=>(...t)=>({_$litDirective$:e,values:t});let Os=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Te(o,t);return!0},$i=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Is=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ol(t)}};function kl(e){this._$AN!==void 0?($i(this),this._$AM=e,Is(this)):this._$AM=e}function Tl(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Te(n[s],!1),$i(n[s]);else n!=null&&(Te(n,!1),$i(n));else Te(this,e)}const Ol=e=>{e.type==ks.CHILD&&(e._$AP??(e._$AP=Tl),e._$AQ??(e._$AQ=kl))};class Il extends Os{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Is(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(Te(this,t),$i(this))}setValue(t){if(Sl(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=()=>new Nl;class Nl{}const nn=new WeakMap,G=Ts(class extends Il{render(e){return L}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),L}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=nn.get(t);i===void 0&&(i=new WeakMap,nn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=nn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Ns=Object.freeze({left:0,top:0,width:16,height:16}),Ci=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Je=Object.freeze({...Ns,...Ci}),hn=Object.freeze({...Je,body:"",hidden:!1}),Ml=Object.freeze({width:null,height:null}),Ms=Object.freeze({...Ml,...Ci});function Pl(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function n(o){for(;o<0;)o+=4;return o%4}if(i===""){const o=parseInt(e);return isNaN(o)?0:n(o)}else if(i!==e){let o=0;switch(i){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-i.length));return isNaN(s)?0:(s=s/o,s%1===0?n(s):0)}}return t}const Ll=/[\s,]+/;function Rl(e,t){t.split(Ll).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Ps={...Ms,preserveAspectRatio:""};function fo(e){const t={...Ps},i=(n,o)=>e.getAttribute(n)||o;return t.width=i("width",null),t.height=i("height",null),t.rotate=Pl(i("rotate","")),Rl(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function jl(e,t){for(const i in Ps)if(e[i]!==t[i])return!0;return!1}const Oe=/^[a-z0-9]+(-[a-z0-9]+)*$/,Qe=(e,t,i,n="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),a=o.pop(),d={provider:o.length>0?o[0]:n,prefix:a,name:l};return t&&!pi(d)?null:d}const s=o[0],r=s.split("-");if(r.length>1){const l={provider:n,prefix:r.shift(),name:r.join("-")};return t&&!pi(l)?null:l}if(i&&n===""){const l={provider:n,prefix:"",name:s};return t&&!pi(l,i)?null:l}return null},pi=(e,t)=>e?!!((e.provider===""||e.provider.match(Oe))&&(t&&e.prefix===""||e.prefix.match(Oe))&&e.name.match(Oe)):!1;function zl(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(i.rotate=n),i}function go(e,t){const i=zl(e,t);for(const n in hn)n in Ci?n in e&&!(n in i)&&(i[n]=Ci[n]):n in t?i[n]=t[n]:n in e&&(i[n]=e[n]);return i}function Dl(e,t){const i=e.icons,n=e.aliases||Object.create(null),o=Object.create(null);function s(r){if(i[r])return o[r]=[];if(!(r in o)){o[r]=null;const l=n[r]&&n[r].parent,a=l&&s(l);a&&(o[r]=[l].concat(a))}return o[r]}return Object.keys(i).concat(Object.keys(n)).forEach(s),o}function Fl(e,t,i){const n=e.icons,o=e.aliases||Object.create(null);let s={};function r(l){s=go(n[l]||o[l],s)}return r(t),i.forEach(r),go(e,s)}function Ls(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),i.push(o)});const n=Dl(e);for(const o in n){const s=n[o];s&&(t(o,Fl(e,o,s)),i.push(o))}return i}const Hl={provider:"",aliases:{},not_found:{},...Ns};function on(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Rs(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!on(e,Hl))return null;const i=t.icons;for(const o in i){const s=i[o];if(!o.match(Oe)||typeof s.body!="string"||!on(s,hn))return null}const n=t.aliases||Object.create(null);for(const o in n){const s=n[o],r=s.parent;if(!o.match(Oe)||typeof r!="string"||!i[r]&&!n[r]||!on(s,hn))return null}return t}const Ai=Object.create(null);function Bl(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function Et(e,t){const i=Ai[e]||(Ai[e]=Object.create(null));return i[t]||(i[t]=Bl(e,t))}function Ln(e,t){return Rs(t)?Ls(t,(i,n)=>{n?e.icons[i]=n:e.missing.add(i)}):[]}function Ul(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function Vl(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Ai)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Ai[n]||{})).forEach(o=>{const s=Et(n,o);i=i.concat(Object.keys(s.icons).map(r=>(n!==""?"@"+n+":":"")+o+":"+r))})}),i}let ze=!1;function js(e){return typeof e=="boolean"&&(ze=e),ze}function De(e){const t=typeof e=="string"?Qe(e,!0,ze):e;if(t){const i=Et(t.provider,t.prefix),n=t.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function zs(e,t){const i=Qe(e,!0,ze);if(!i)return!1;const n=Et(i.provider,i.prefix);return Ul(n,i.name,t)}function vo(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),ze&&!t&&!e.prefix){let o=!1;return Rs(e)&&(e.prefix="",Ls(e,(s,r)=>{r&&zs(s,r)&&(o=!0)})),o}const i=e.prefix;if(!pi({provider:t,prefix:i,name:"a"}))return!1;const n=Et(t,i);return!!Ln(n,e)}function yo(e){return!!De(e)}function Wl(e){const t=De(e);return t?{...Je,...t}:null}function Gl(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return e.forEach(o=>{if(n.name===o.name&&n.prefix===o.prefix&&n.provider===o.provider)return;n=o;const s=o.provider,r=o.prefix,l=o.name,a=i[s]||(i[s]=Object.create(null)),d=a[r]||(a[r]=Et(s,r));let u;l in d.icons?u=t.loaded:r===""||d.missing.has(l)?u=t.missing:u=t.pending;const c={provider:s,prefix:r,name:l};u.push(c)}),t}function Ds(e,t){e.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(o=>o.id!==t))})}function ql(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const n=e.provider,o=e.prefix;t.forEach(s=>{const r=s.icons,l=r.pending.length;r.pending=r.pending.filter(a=>{if(a.prefix!==o)return!0;const d=a.name;if(e.icons[d])r.loaded.push({provider:n,prefix:o,name:d});else if(e.missing.has(d))r.missing.push({provider:n,prefix:o,name:d});else return i=!0,!0;return!1}),r.pending.length!==l&&(i||Ds([e],s.id),s.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),s.abort))})}))}let Yl=0;function Xl(e,t,i){const n=Yl++,o=Ds.bind(null,i,n);if(!t.pending.length)return o;const s={id:n,icons:t,callback:e,abort:o};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(s)}),o}const pn=Object.create(null);function _o(e,t){pn[e]=t}function mn(e){return pn[e]||pn[""]}function Jl(e,t=!0,i=!1){const n=[];return e.forEach(o=>{const s=typeof o=="string"?Qe(o,t,i):o;s&&n.push(s)}),n}var Ql={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Zl(e,t,i,n){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let r;if(e.random){let C=e.resources.slice(0);for(r=[];C.length>1;){const O=Math.floor(Math.random()*C.length);r.push(C[O]),C=C.slice(0,O).concat(C.slice(O+1))}r=r.concat(C)}else r=e.resources.slice(s).concat(e.resources.slice(0,s));const l=Date.now();let a="pending",d=0,u,c=null,h=[],p=[];typeof n=="function"&&p.push(n);function f(){c&&(clearTimeout(c),c=null)}function w(){a==="pending"&&(a="aborted"),f(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function v(C,O){O&&(p=[]),typeof C=="function"&&p.push(C)}function b(){return{startTime:l,payload:t,status:a,queriesSent:d,queriesPending:h.length,subscribe:v,abort:w}}function y(){a="failed",p.forEach(C=>{C(void 0,u)})}function _(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function x(C,O,M){const S=O!=="success";switch(h=h.filter(E=>E!==C),a){case"pending":break;case"failed":if(S||!e.dataAfterTimeout)return;break;default:return}if(O==="abort"){u=M,y();return}if(S){u=M,h.length||(r.length?A():y());return}if(f(),_(),!e.random){const E=e.resources.indexOf(C.resource);E!==-1&&E!==e.index&&(e.index=E)}a="completed",p.forEach(E=>{E(M)})}function A(){if(a!=="pending")return;f();const C=r.shift();if(C===void 0){if(h.length){c=setTimeout(()=>{f(),a==="pending"&&(_(),y())},e.timeout);return}y();return}const O={status:"pending",resource:C,callback:(M,S)=>{x(O,M,S)}};h.push(O),d++,c=setTimeout(A,e.rotate),i(C,t,O.callback)}return setTimeout(A),b}function Fs(e){const t={...Ql,...e};let i=[];function n(){i=i.filter(r=>r().status==="pending")}function o(r,l,a){const d=Zl(t,r,l,(u,c)=>{n(),a&&a(u,c)});return i.push(d),d}function s(r){return i.find(l=>r(l))||null}return{query:o,find:s,setIndex:r=>{t.index=r},getIndex:()=>t.index,cleanup:n}}function Rn(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Bi=Object.create(null),li=["https://api.simplesvg.com","https://api.unisvg.com"],bn=[];for(;li.length>0;)li.length===1||Math.random()>.5?bn.push(li.shift()):bn.push(li.pop());Bi[""]=Rn({resources:["https://api.iconify.design"].concat(bn)});function wo(e,t){const i=Rn(t);return i===null?!1:(Bi[e]=i,!0)}function Ui(e){return Bi[e]}function Kl(){return Object.keys(Bi)}function xo(){}const sn=Object.create(null);function tc(e){if(!sn[e]){const t=Ui(e);if(!t)return;const i=Fs(t),n={config:t,redundancy:i};sn[e]=n}return sn[e]}function Hs(e,t,i){let n,o;if(typeof e=="string"){const s=mn(e);if(!s)return i(void 0,424),xo;o=s.send;const r=tc(e);r&&(n=r.redundancy)}else{const s=Rn(e);if(s){n=Fs(s);const r=e.resources?e.resources[0]:"",l=mn(r);l&&(o=l.send)}}return!n||!o?(i(void 0,424),xo):n.query(t,o,i)().abort}const $o="iconify2",Fe="iconify",Bs=Fe+"-count",Co=Fe+"-version",Us=36e5,ec=168,ic=50;function fn(e,t){try{return e.getItem(t)}catch{}}function jn(e,t,i){try{return e.setItem(t,i),!0}catch{}}function Ao(e,t){try{e.removeItem(t)}catch{}}function gn(e,t){return jn(e,Bs,t.toString())}function vn(e){return parseInt(fn(e,Bs))||0}const Dt={local:!0,session:!0},Vs={local:new Set,session:new Set};let zn=!1;function nc(e){zn=e}let ci=typeof window>"u"?{}:window;function Ws(e){const t=e+"Storage";try{if(ci&&ci[t]&&typeof ci[t].length=="number")return ci[t]}catch{}Dt[e]=!1}function Gs(e,t){const i=Ws(e);if(!i)return;const n=fn(i,Co);if(n!==$o){if(n){const l=vn(i);for(let a=0;a<l;a++)Ao(i,Fe+a.toString())}jn(i,Co,$o),gn(i,0);return}const o=Math.floor(Date.now()/Us)-ec,s=l=>{const a=Fe+l.toString(),d=fn(i,a);if(typeof d=="string"){try{const u=JSON.parse(d);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,l))return!0}catch{}Ao(i,a)}};let r=vn(i);for(let l=r-1;l>=0;l--)s(l)||(l===r-1?(r--,gn(i,r)):Vs[e].add(l))}function qs(){if(!zn){nc(!0);for(const e in Dt)Gs(e,t=>{const i=t.data,n=t.provider,o=i.prefix,s=Et(n,o);if(!Ln(s,i).length)return!1;const r=i.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,r):r,!0})}}function oc(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const n in Dt)Gs(n,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function sc(e,t){zn||qs();function i(n){let o;if(!Dt[n]||!(o=Ws(n)))return;const s=Vs[n];let r;if(s.size)s.delete(r=Array.from(s).shift());else if(r=vn(o),r>=ic||!gn(o,r+1))return;const l={cached:Math.floor(Date.now()/Us),provider:e.provider,data:t};return jn(o,Fe+r.toString(),JSON.stringify(l))}t.lastModified&&!oc(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function Eo(){}function rc(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,ql(e)}))}function ac(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:n}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;!o||!(s=mn(i))||s.prepare(i,n,o).forEach(r=>{Hs(i,r,l=>{if(typeof l!="object")r.icons.forEach(a=>{e.missing.add(a)});else try{const a=Ln(e,l);if(!a.length)return;const d=e.pendingIcons;d&&a.forEach(u=>{d.delete(u)}),sc(e,l)}catch(a){console.error(a)}rc(e)})})}))}const Dn=(e,t)=>{const i=Jl(e,!0,js()),n=Gl(i);if(!n.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(n.loaded,n.missing,n.pending,Eo)}),()=>{a=!1}}const o=Object.create(null),s=[];let r,l;return n.pending.forEach(a=>{const{provider:d,prefix:u}=a;if(u===l&&d===r)return;r=d,l=u,s.push(Et(d,u));const c=o[d]||(o[d]=Object.create(null));c[u]||(c[u]=[])}),n.pending.forEach(a=>{const{provider:d,prefix:u,name:c}=a,h=Et(d,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(c)||(p.add(c),o[d][u].push(c))}),s.forEach(a=>{const{provider:d,prefix:u}=a;o[d][u].length&&ac(a,o[d][u])}),t?Xl(t,n,s):Eo},lc=e=>new Promise((t,i)=>{const n=typeof e=="string"?Qe(e,!0):e;if(!n){i(e);return}Dn([n||e],o=>{if(o.length&&n){const s=De(n);if(s){t({...Je,...s});return}}i(e)})});function cc(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function dc(e,t){const i=typeof e=="string"?Qe(e,!0,!0):null;if(!i){const s=cc(e);return{value:e,data:s}}const n=De(i);if(n!==void 0||!i.prefix)return{value:e,name:i,data:n};const o=Dn([i],()=>t(e,i,De(i)));return{value:e,name:i,loading:o}}function rn(e){return e.hasAttribute("inline")}let Ys=!1;try{Ys=navigator.vendor.indexOf("Apple")===0}catch{}function uc(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Ys||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const hc=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pc=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function yn(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const n=e.split(hc);if(n===null||!n.length)return e;const o=[];let s=n.shift(),r=pc.test(s);for(;;){if(r){const l=parseFloat(s);isNaN(l)?o.push(s):o.push(Math.ceil(l*t*i)/i)}else o.push(s);if(s=n.shift(),s===void 0)return o.join("");r=!r}}function mc(e,t="defs"){let i="";const n=e.indexOf("<"+t);for(;n>=0;){const o=e.indexOf(">",n),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const r=e.indexOf(">",s);if(r===-1)break;i+=e.slice(o+1,s).trim(),e=e.slice(0,n).trim()+e.slice(r+1)}return{defs:i,content:e}}function bc(e,t){return e?"<defs>"+e+"</defs>"+t:t}function fc(e,t,i){const n=mc(e);return bc(n.defs,t+n.content+i)}const gc=e=>e==="unset"||e==="undefined"||e==="none";function Xs(e,t){const i={...Je,...e},n={...Ms,...t},o={left:i.left,top:i.top,width:i.width,height:i.height};let s=i.body;[i,n].forEach(w=>{const v=[],b=w.hFlip,y=w.vFlip;let _=w.rotate;b?y?_+=2:(v.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),v.push("scale(-1 1)"),o.top=o.left=0):y&&(v.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),v.push("scale(1 -1)"),o.top=o.left=0);let x;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:x=o.height/2+o.top,v.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:v.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:x=o.width/2+o.left,v.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}_%2===1&&(o.left!==o.top&&(x=o.left,o.left=o.top,o.top=x),o.width!==o.height&&(x=o.width,o.width=o.height,o.height=x)),v.length&&(s=fc(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const r=n.width,l=n.height,a=o.width,d=o.height;let u,c;r===null?(c=l===null?"1em":l==="auto"?d:l,u=yn(c,a/d)):(u=r==="auto"?a:r,c=l===null?yn(u,d/a):l==="auto"?d:l);const h={},p=(w,v)=>{gc(v)||(h[w]=v.toString())};p("width",u),p("height",c);const f=[o.left,o.top,a,d];return h.viewBox=f.join(" "),{attributes:h,viewBox:f,body:s}}function Fn(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)i+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function vc(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function yc(e){return"data:image/svg+xml,"+vc(e)}function Js(e){return'url("'+yc(e)+'")'}const _c=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ei=_c();function wc(e){Ei=e}function xc(){return Ei}function $c(e,t){const i=Ui(e);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let o=0;i.resources.forEach(r=>{o=Math.max(o,r.length)});const s=t+".json?icons=";n=i.maxURL-o-i.path.length-s.length}return n}function Cc(e){return e===404}const Ac=(e,t,i)=>{const n=[],o=$c(e,t),s="icons";let r={type:s,provider:e,prefix:t,icons:[]},l=0;return i.forEach((a,d)=>{l+=a.length+1,l>=o&&d>0&&(n.push(r),r={type:s,provider:e,prefix:t,icons:[]},l=a.length),r.icons.push(a)}),n.push(r),n};function Ec(e){if(typeof e=="string"){const t=Ui(e);if(t)return t.path}return"/"}const Sc=(e,t,i)=>{if(!Ei){i("abort",424);return}let n=Ec(t.provider);switch(t.type){case"icons":{const s=t.prefix,r=t.icons.join(","),l=new URLSearchParams({icons:r});n+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:i("abort",400);return}let o=503;Ei(e+n).then(s=>{const r=s.status;if(r!==200){setTimeout(()=>{i(Cc(r)?"abort":"next",r)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?i("abort",s):i("next",o)});return}setTimeout(()=>{i("success",s)})}).catch(()=>{i("next",o)})},kc={prepare:Ac,send:Sc};function So(e,t){switch(e){case"local":case"session":Dt[e]=t;break;case"all":for(const i in Dt)Dt[i]=t;break}}const an="data-style";let Qs="";function Tc(e){Qs=e}function ko(e,t){let i=Array.from(e.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(an));i||(i=document.createElement("style"),i.setAttribute(an,an),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Qs}function Zs(){_o("",kc),js(!0);let e;try{e=window}catch{}if(e){if(qs(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!vo(n))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const n="IconifyProviders["+i+"] is invalid.";try{const o=t[i];if(typeof o!="object"||!o||o.resources===void 0)continue;wo(i,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:t=>So(t,!0),disableCache:t=>So(t,!1),iconLoaded:yo,iconExists:yo,getIcon:Wl,listIcons:Vl,addIcon:zs,addCollection:vo,calculateSize:yn,buildIcon:Xs,iconToHTML:Fn,svgToURL:Js,loadIcons:Dn,loadIcon:lc,addAPIProvider:wo,appendCustomStyle:Tc,_api:{getAPIConfig:Ui,setAPIModule:_o,sendAPIQuery:Hs,setFetch:wc,getFetch:xc,listAPIProviders:Kl}}}const _n={"background-color":"currentColor"},Ks={"background-color":"transparent"},To={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Oo={"-webkit-mask":_n,mask:_n,background:Ks};for(const e in Oo){const t=Oo[e];for(const i in To)t[e+"-"+i]=To[i]}function Io(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Oc(e,t,i){const n=document.createElement("span");let o=e.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const s=e.attributes,r=Fn(o,{...s,width:t.width+"",height:t.height+""}),l=Js(r),a=n.style,d={"--svg":l,width:Io(s.width),height:Io(s.height),...i?_n:Ks};for(const u in d)a.setProperty(u,d[u]);return n}let Ie;function Ic(){try{Ie=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Ie=null}}function Nc(e){return Ie===void 0&&Ic(),Ie?Ie.createHTML(e):e}function Mc(e){const t=document.createElement("span"),i=e.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const o=Fn(e.body,i);return t.innerHTML=Nc(o),t.firstChild}function wn(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function No(e,t){const i=t.icon.data,n=t.customisations,o=Xs(i,n);n.preserveAspectRatio&&(o.attributes.preserveAspectRatio=n.preserveAspectRatio);const s=t.renderedMode;let r;switch(s){case"svg":r=Mc(o);break;default:r=Oc(o,{...Je,...i},s==="mask")}const l=wn(e);l?r.tagName==="SPAN"&&l.tagName===r.tagName?l.setAttribute("style",r.getAttribute("style")):e.replaceChild(r,l):e.appendChild(r)}function Mo(e,t,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:n}}function Pc(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const n=t.get(e);if(n)return n;const o=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends i{constructor(){super(),Pt(this,"_shadowRoot"),Pt(this,"_initialised",!1),Pt(this,"_state"),Pt(this,"_checkQueued",!1),Pt(this,"_connected",!1),Pt(this,"_observer",null),Pt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),a=rn(this);ko(l,a),this._state=Mo({value:""},a),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const a=rn(this),d=this._state;a!==d.inline&&(d.inline=a,ko(this._shadowRoot,a));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return rn(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const a=this._shadowRoot;if(l.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}No(a,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,a=this.getAttribute("icon");if(a!==l.icon.value){this._iconChanged(a);return}if(!l.rendered||!this._visible)return;const d=this.getAttribute("mode"),u=fo(this);(l.attrMode!==d||jl(l.customisations,u)||!wn(this._shadowRoot))&&this._renderIcon(l.icon,u,d)}_iconChanged(l){const a=dc(l,(d,u,c)=>{const h=this._state;if(h.rendered||this.getAttribute("icon")!==d)return;const p={value:d,name:u,data:c};p.data?this._gotIconData(p):h.icon=p});a.data?this._gotIconData(a):this._state=Mo(a,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=wn(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,fo(this),this.getAttribute("mode"))}_renderIcon(l,a,d){const u=uc(l.data.body,d),c=this._state.inline;No(this._shadowRoot,this._state={rendered:!0,icon:l,inline:c,customisations:a,attrMode:d,renderedMode:u})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const a=l.some(d=>d.isIntersecting);a!==this._visible&&(this._visible=a,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};o.forEach(l=>{l in s.prototype||Object.defineProperty(s.prototype,l,{get:function(){return this.getAttribute(l)},set:function(a){a!==null?this.setAttribute(l,a):this.removeAttribute(l)}})});const r=Zs();for(const l in r)s[l]=s.prototype[l]=r[l];return t.define(e,s),s}Pc()||Zs();const Lc=T`
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
`,Rc=T`
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
`,kt={scrollbar:Lc,globalStyles:Rc},tr=class k{static set config(t){this._config={...k._config,...t}}static get config(){return k._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=kt.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){k.init()}static init(){k.addGlobalStyles(),k.defineCustomElement("bim-button",Bc),k.defineCustomElement("bim-checkbox",ue),k.defineCustomElement("bim-color-input",Wt),k.defineCustomElement("bim-context-menu",$n),k.defineCustomElement("bim-dropdown",gt),k.defineCustomElement("bim-grid",Bn),k.defineCustomElement("bim-icon",Jc),k.defineCustomElement("bim-input",Ke),k.defineCustomElement("bim-label",pe),k.defineCustomElement("bim-number-input",K),k.defineCustomElement("bim-option",H),k.defineCustomElement("bim-panel",Gt),k.defineCustomElement("bim-panel-section",me),k.defineCustomElement("bim-selector",be),k.defineCustomElement("bim-table",st),k.defineCustomElement("bim-tabs",It),k.defineCustomElement("bim-tab",X),k.defineCustomElement("bim-table-cell",br),k.defineCustomElement("bim-table-children",gr),k.defineCustomElement("bim-table-group",yr),k.defineCustomElement("bim-table-row",qt),k.defineCustomElement("bim-text-input",rt),k.defineCustomElement("bim-toolbar",Xi),k.defineCustomElement("bim-toolbar-group",qi),k.defineCustomElement("bim-toolbar-section",ve),k.defineCustomElement("bim-viewport",Or)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const o=Math.floor(Math.random()*t.length);i+=t.charAt(o)}return i}};tr._config={sectionLabelOnVerticalToolbar:!1};let Z=tr;class z extends I{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const n of t)this.elements.add(n);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const o=n.target;t.unobserve(o);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][s];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&t.observe(n)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const n=document.createDocumentFragment();if(t.length===0)return Pe(t(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let o=i;const s=t,r=a=>(o={...o,...a},Pe(s(o,r),n),o);r(i);const l=()=>o;return[n.firstElementChild,r,l]}}const He=(e,t={},i=!0)=>{let n={};for(const o of e.children){const s=o,r=s.getAttribute("name")||s.getAttribute("label"),l=t[r];if(r){if("value"in s&&typeof s.value<"u"&&s.value!==null){const a=s.value;if(typeof a=="object"&&!Array.isArray(a)&&Object.keys(a).length===0)continue;n[r]=l?l(s.value):s.value}else if(i){const a=He(s,t);if(Object.keys(a).length===0)continue;n[r]=l?l(a):a}}else i&&(n={...n,...He(s,t)})}return n},Vi=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,jc=[">=","<=","=",">","<","?","/","#"];function Po(e){const t=jc.find(r=>e.split(r).length===2),i=e.split(t).map(r=>r.trim()),[n,o]=i,s=o.startsWith("'")&&o.endsWith("'")?o.replace(/'/g,""):Vi(o);return{key:n,condition:t,value:s}}const xn=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const o=!n.startsWith("(")&&!n.endsWith(")"),s=n.startsWith("(")&&n.endsWith(")");if(o){const r=Po(n);t.push(r)}if(s){const r={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(l=>l.trim()).map((l,a)=>{const d=Po(l);return a>0&&(d.operator="&"),d})};t.push(r)}}return t}catch{return null}},Lo=(e,t,i)=>{let n=!1;switch(t){case"=":n=e===i;break;case"?":n=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(n=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(n=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(n=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(n=e>=i);break;case"/":n=String(e).startsWith(String(i));break}return n};var zc=Object.defineProperty,Dc=Object.getOwnPropertyDescriptor,er=(e,t,i,n)=>{for(var o=Dc(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&zc(t,i,o),o},F;const Hn=(F=class extends I{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of F.menus)e instanceof F&&(e.visible=!1);F.dialog.close(),F.dialog.remove()}get visible(){return this._visible}set visible(e){var t;this._visible=e,e?(F.dialog.parentElement||document.body.append(F.dialog),this._previousContainer=this.parentElement,F.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,F.dialog.append(this),F.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await xs(this._previousContainer,this,{placement:e,middleware:[cs(10),ws(),_s(),ys({padding:5})]}),{x:i,y:n}=t;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),F.menus.push(this)}render(){return m` <slot></slot> `}},F.styles=[kt.scrollbar,T`
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
    ></dialog>`),F.menus=[],F);er([g({type:String,reflect:!0})],Hn.prototype,"placement");er([g({type:Boolean,reflect:!0})],Hn.prototype,"visible");let $n=Hn;var Fc=Object.defineProperty,Hc=Object.getOwnPropertyDescriptor,lt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Hc(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Fc(t,i,o),o},Ce;const nt=(Ce=class extends I{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=se(),this._tooltip=se(),this._mouseLeave=!1,this.onClick=e=>{e.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const e=this._contextMenu;if(e){const t=this.getAttribute("data-context-group");t&&e.setAttribute("data-context-group",t),this.closeNestedContexts();const i=Z.newRandomId();for(const n of e.children)n instanceof Ce&&n.setAttribute("data-context-group",i);e.visible=!0}},this.mouseLeave=!0}set loading(e){if(this._loading=e,e)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=e,this.icon="eos-icons:loading";else{const{disabled:t,icon:i}=this._stateBeforeLoading;this.disabled=t,this.icon=i}}get loading(){return this._loading}set mouseLeave(e){this._mouseLeave=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&xs(e,t,{placement:"bottom",middleware:[cs(10),ws(),_s(),ys({padding:5})]}).then(i=>{const{x:n,y:o}=i;Object.assign(t.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of $n.dialog.children){const i=t.getAttribute("data-context-group");if(t instanceof $n&&i===e){t.visible=!1,t.removeAttribute("data-context-group");for(const n of t.children)n instanceof Ce&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const e=m`
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
    `}},Ce.styles=T`
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
  `,Ce);lt([g({type:String,reflect:!0})],nt.prototype,"label",2);lt([g({type:Boolean,attribute:"label-hidden",reflect:!0})],nt.prototype,"labelHidden",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"active",2);lt([g({type:Boolean,reflect:!0,attribute:"disabled"})],nt.prototype,"disabled",2);lt([g({type:String,reflect:!0})],nt.prototype,"icon",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"vertical",2);lt([g({type:Number,attribute:"tooltip-time",reflect:!0})],nt.prototype,"tooltipTime",2);lt([g({type:Boolean,attribute:"tooltip-visible",reflect:!0})],nt.prototype,"tooltipVisible",2);lt([g({type:String,attribute:"tooltip-title",reflect:!0})],nt.prototype,"tooltipTitle",2);lt([g({type:String,attribute:"tooltip-text",reflect:!0})],nt.prototype,"tooltipText",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"loading",1);let Bc=nt;var Uc=Object.defineProperty,Ze=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Uc(t,i,o),o};const ir=class extends I{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(e){e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
      <div class="parent">
        ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};ir.styles=T`
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
  `;let ue=ir;Ze([g({type:String,reflect:!0})],ue.prototype,"icon");Ze([g({type:String,reflect:!0})],ue.prototype,"name");Ze([g({type:String,reflect:!0})],ue.prototype,"label");Ze([g({type:Boolean,reflect:!0})],ue.prototype,"checked");Ze([g({type:Boolean,reflect:!0})],ue.prototype,"inverted");var Vc=Object.defineProperty,he=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Vc(t,i,o),o};const nr=class extends I{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=se(),this._textInput=se(),this.onValueChange=new Event("input"),this.onOpacityInput=e=>{const t=e.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(e){const{color:t,opacity:i}=e;this.color=t,i&&(this.opacity=i)}get value(){const e={color:this.color};return this.opacity&&(e.opacity=this.opacity),e}onColorInput(e){e.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(e){e.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:i}=t;let n=i.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),t.value=n.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:e}=this._colorInput;e&&e.click()}render(){return m`
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
    `}};nr.styles=T`
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
  `;let Wt=nr;he([g({type:String,reflect:!0})],Wt.prototype,"name");he([g({type:String,reflect:!0})],Wt.prototype,"label");he([g({type:String,reflect:!0})],Wt.prototype,"icon");he([g({type:Boolean,reflect:!0})],Wt.prototype,"vertical");he([g({type:Number,reflect:!0})],Wt.prototype,"opacity");he([g({type:String,reflect:!0})],Wt.prototype,"color");var Wc=Object.defineProperty,Gc=Object.getOwnPropertyDescriptor,Tt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Gc(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Wc(t,i,o),o};const or=class extends I{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Vi(this.label):this.label}set value(e){this._value=e}render(){return m`
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
    `}};or.styles=T`
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
  `;let H=or;Tt([g({type:String,reflect:!0})],H.prototype,"img",2);Tt([g({type:String,reflect:!0})],H.prototype,"label",2);Tt([g({type:String,reflect:!0})],H.prototype,"icon",2);Tt([g({type:Boolean,reflect:!0})],H.prototype,"checked",2);Tt([g({type:Boolean,reflect:!0})],H.prototype,"checkbox",2);Tt([g({type:Boolean,attribute:"no-mark",reflect:!0})],H.prototype,"noMark",2);Tt([g({converter:{fromAttribute(e){return e&&Vi(e)}}})],H.prototype,"value",1);Tt([g({type:Boolean,reflect:!0})],H.prototype,"vertical",2);var qc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,Ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?Yc(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&qc(t,i,o),o};const sr=class extends z{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=se(),this.onOptionClick=e=>{const t=e.target,i=this._value.has(t);if(!this.multiple&&!this.required&&!i)this._value=new Set([t]);else if(!this.multiple&&!this.required&&i)this._value=new Set([]);else if(!this.multiple&&this.required&&!i)this._value=new Set([t]);else if(this.multiple&&!this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&i){const n=[...this._value].filter(o=>o!==t);this._value=new Set(n)}else if(this.multiple&&this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&i){const n=[...this._value].filter(s=>s!==t),o=new Set(n);o.size!==0&&(this._value=o)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(e){if(e){const{value:t}=this._contextMenu;if(!t)return;for(const i of this.elements)t.append(i);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(e){if(this.required&&Object.keys(e).length===0)return;const t=new Set;for(const i of e){const n=this.findOption(i);if(n&&(t.add(n),!this.multiple&&Object.keys(e).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof H&&e.checked).map(e=>e.value)}get _options(){const e=new Set([...this.elements]);for(const t of this.children)t instanceof H&&e.add(t);return[...e]}onSlotChange(e){const t=e.target.assignedElements();this.observe(t);const i=new Set;for(const n of this.elements){if(!(n instanceof H)){n.remove();continue}n.checked&&i.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=i}updateOptionsState(){for(const e of this._options)e instanceof H&&(e.checked=this._value.has(e))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}render(){let e,t,i;if(this._value.size===0)e="Select an option...";else if(this._value.size===1){const n=[...this._value][0];e=(n==null?void 0:n.label)||(n==null?void 0:n.value),t=n==null?void 0:n.img,i=n==null?void 0:n.icon}else e=`Multiple (${this._value.size})`;return m`
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
    `}};sr.styles=[kt.scrollbar,T`
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
    `];let gt=sr;Ot([g({type:String,reflect:!0})],gt.prototype,"name",2);Ot([g({type:String,reflect:!0})],gt.prototype,"icon",2);Ot([g({type:String,reflect:!0})],gt.prototype,"label",2);Ot([g({type:Boolean,reflect:!0})],gt.prototype,"multiple",2);Ot([g({type:Boolean,reflect:!0})],gt.prototype,"required",2);Ot([g({type:Boolean,reflect:!0})],gt.prototype,"vertical",2);Ot([g({type:Boolean,reflect:!0})],gt.prototype,"visible",1);Ot([de()],gt.prototype,"_value",2);var Xc=Object.defineProperty,rr=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Xc(t,i,o),o};const ar=class extends I{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(e){this._layouts=e;const t={};for(const[i,n]of Object.entries(e))for(const o in n.elements)t[i]||(t[i]={}),t[i][o]=s=>{const r=this._updateFunctions[i];if(!r)return;const l=r[o];l&&l(s)};this.updateComponent=t}get layouts(){return this._layouts}getLayoutAreas(e){const{template:t}=e,i=t.split(`
`).map(n=>n.trim()).map(n=>n.split('"')[1]).filter(n=>n!==void 0).flatMap(n=>n.split(/\s+/));return[...new Set(i)].filter(n=>n!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const e=this._updateFunctions[this.layout],t=this.layouts[this.layout],i=this.getLayoutAreas(t).map(n=>{const o=t.elements[n];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=n,o;if("template"in o){const{template:s,initialState:r}=o,[l,a]=z.create(s,r);return l.style.gridArea=n,e[n]=a,l}return z.create(o)}).filter(n=>!!n);this.style.gridTemplate=t.template,this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};ar.styles=T`
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
  `;let Bn=ar;rr([g({type:Boolean,reflect:!0})],Bn.prototype,"floating");rr([g({type:String,reflect:!0})],Bn.prototype,"layout");const Cn=class extends I{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};Cn.styles=T`
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
  `,Cn.properties={icon:{type:String}};let Jc=Cn;var Qc=Object.defineProperty,Wi=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Qc(t,i,o),o};const lr=class extends I{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const e={};for(const t of this.children){const i=t;"value"in i?e[i.name||i.label]=i.value:"checked"in i&&(e[i.name||i.label]=i.checked)}return e}set value(e){const t=[...this.children];for(const i in e){const n=t.find(r=>{const l=r;return l.name===i||l.label===i});if(!n)continue;const o=n,s=e[i];typeof s=="boolean"?o.checked=s:o.value=s}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};lr.styles=T`
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
  `;let Ke=lr;Wi([g({type:String,reflect:!0})],Ke.prototype,"name");Wi([g({type:String,reflect:!0})],Ke.prototype,"label");Wi([g({type:String,reflect:!0})],Ke.prototype,"icon");Wi([g({type:Boolean,reflect:!0})],Ke.prototype,"vertical");var Zc=Object.defineProperty,ti=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Zc(t,i,o),o};const cr=class extends I{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Vi(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};cr.styles=T`
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
      user-select: text;
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
  `;let pe=cr;ti([g({type:String,reflect:!0})],pe.prototype,"img");ti([g({type:Boolean,attribute:"label-hidden",reflect:!0})],pe.prototype,"labelHidden");ti([g({type:String,reflect:!0})],pe.prototype,"icon");ti([g({type:Boolean,attribute:"icon-hidden",reflect:!0})],pe.prototype,"iconHidden");ti([g({type:Boolean,reflect:!0})],pe.prototype,"vertical");var Kc=Object.defineProperty,td=Object.getOwnPropertyDescriptor,ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?td(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Kc(t,i,o),o};const dr=class extends I{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=se(),this.onValueChange=new Event("change")}set value(e){this.setValue(e.toString())}get value(){return this._value}onChange(e){e.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(e){const{value:t}=this._input;let i=e;if(i=i.replace(/[^0-9.-]/g,""),i=i.replace(/(\..*)\./g,"$1"),i.endsWith(".")||(i.lastIndexOf("-")>0&&(i=i[0]+i.substring(1).replace(/-/g,"")),i==="-"||i==="-0"))return;let n=Number(i);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:e}=this._input;e&&Number.isNaN(Number(e.value))&&(e.value=this.value.toString())}onSliderMouseDown(e){document.body.style.cursor="w-resize";const{clientX:t}=e,i=this.value;let n=!1;const o=l=>{var a;n=!0;const{clientX:d}=l,u=this.step??1,c=((a=u.toString().split(".")[1])==null?void 0:a.length)||0,h=1/(this.sensitivity??1),p=(d-t)/h;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const f=i+p*u;this.setValue(f.toFixed(c))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},r=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)}onFocus(e){e.stopPropagation();const t=i=>{i.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:e}=this._input;e&&e.focus()}render(){const e=m`
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
    `}};dr.styles=T`
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
  `;let K=dr;ot([g({type:String,reflect:!0})],K.prototype,"name",2);ot([g({type:String,reflect:!0})],K.prototype,"icon",2);ot([g({type:String,reflect:!0})],K.prototype,"label",2);ot([g({type:String,reflect:!0})],K.prototype,"pref",2);ot([g({type:Number,reflect:!0})],K.prototype,"min",2);ot([g({type:Number,reflect:!0})],K.prototype,"value",1);ot([g({type:Number,reflect:!0})],K.prototype,"step",2);ot([g({type:Number,reflect:!0})],K.prototype,"sensitivity",2);ot([g({type:Number,reflect:!0})],K.prototype,"max",2);ot([g({type:String,reflect:!0})],K.prototype,"suffix",2);ot([g({type:Boolean,reflect:!0})],K.prototype,"vertical",2);ot([g({type:Boolean,reflect:!0})],K.prototype,"slider",2);var ed=Object.defineProperty,id=Object.getOwnPropertyDescriptor,ei=(e,t,i,n)=>{for(var o=n>1?void 0:n?id(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ed(t,i,o),o};const ur=class extends I{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(e){this._hidden=e,this.activationButton.active=!e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return He(this,this.valueTransform)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};ur.styles=[kt.scrollbar,T`
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
    `];let Gt=ur;ei([g({type:String,reflect:!0})],Gt.prototype,"icon",2);ei([g({type:String,reflect:!0})],Gt.prototype,"name",2);ei([g({type:String,reflect:!0})],Gt.prototype,"label",2);ei([g({type:Boolean,reflect:!0})],Gt.prototype,"hidden",1);ei([g({type:Boolean,attribute:"header-hidden",reflect:!0})],Gt.prototype,"headerHidden",2);var nd=Object.defineProperty,ii=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&nd(t,i,o),o};const hr=class extends I{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const e=this.parentElement;let t;return e instanceof Gt&&(t=e.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),He(this,t)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const e=this.label||this.icon||this.name||this.fixed,t=m`<svg
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
    `}};hr.styles=[kt.scrollbar,T`
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
    `];let me=hr;ii([g({type:String,reflect:!0})],me.prototype,"icon");ii([g({type:String,reflect:!0})],me.prototype,"label");ii([g({type:String,reflect:!0})],me.prototype,"name");ii([g({type:Boolean,reflect:!0})],me.prototype,"fixed");ii([g({type:Boolean,reflect:!0})],me.prototype,"collapsed");var od=Object.defineProperty,ni=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&od(t,i,o),o};const pr=class extends I{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=e=>{this._value=e.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof H&&(t.checked=t===e.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(e){const t=this.findOption(e);if(t){for(const i of this._options)i.checked=i===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(e){const t=e.target.assignedElements();for(const i of t)i instanceof H&&(i.noMark=!0,i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}firstUpdated(){const e=[...this.children].find(t=>t instanceof H&&t.checked);e&&(this._value=e)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};pr.styles=T`
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
  `;let be=pr;ni([g({type:String,reflect:!0})],be.prototype,"name");ni([g({type:String,reflect:!0})],be.prototype,"icon");ni([g({type:String,reflect:!0})],be.prototype,"label");ni([g({type:Boolean,reflect:!0})],be.prototype,"vertical");ni([de()],be.prototype,"_value");const sd=()=>m`
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
  `,rd=()=>m`
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
  `;var ad=Object.defineProperty,ld=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&ad(t,i,o),o};const mr=class extends I{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};mr.styles=T`
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
  `;let br=mr;ld([g({type:String,reflect:!0})],br.prototype,"column");var cd=Object.defineProperty,dd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&cd(t,i,o),o};const fr=class extends I{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(e,t=!1){for(const i of this._groups)i.childrenHidden=typeof e>"u"?!i.childrenHidden:!e,t&&i.toggleChildren(e,t)}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(e=>{const t=document.createElement("bim-table-group");return this._groups.push(t),t.table=this.table,t.data=e,t})}
    `}};fr.styles=T`
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
  `;let gr=fr;dd([g({type:Array,attribute:!1})],gr.prototype,"data");var ud=Object.defineProperty,hd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&ud(t,i,o),o};const vr=class extends I{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(e,t=!1){this._children&&(this.childrenHidden=typeof e>"u"?!this.childrenHidden:!e,t&&this._children.toggleGroups(e,t))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const e=this.table.getGroupIndentation(this.data)??0,t=m`
      ${this.table.noIndentation?null:m`
            <style>
              .branch-vertical {
                left: ${e+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,i=document.createDocumentFragment();Pe(t,i);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${e-1+(this.table.selectableRows?2.05:.5625)}rem`);let o=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(a);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("height","6.5"),d.setAttribute("width","9.5"),d.setAttribute("viewBox","0 0 5.9111118 5.0175439");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),d.append(u),o=document.createElement("div"),o.addEventListener("click",c=>{c.stopPropagation(),this.toggleChildren()}),o.classList.add("caret"),o.style.left=`${(this.table.selectableRows?1.5:.125)+e}rem`,this.childrenHidden?o.append(l):o.append(d)}const s=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&s.append(i),s.table=this.table,s.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:s}})),o&&this.data.children&&s.append(o),e!==0&&(!this.data.children||this.childrenHidden)&&n&&s.append(n);let r;if(this.data.children){r=document.createElement("bim-table-children"),this._children=r,r.table=this.table,r.data=this.data.children;const l=document.createDocumentFragment();Pe(t,l),r.append(l)}return m`
      <div class="parent">${s} ${this.childrenHidden?null:r}</div>
    `}};vr.styles=T`
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
  `;let yr=vr;hd([g({type:Boolean,attribute:"children-hidden",reflect:!0})],yr.prototype,"childrenHidden");var pd=Object.defineProperty,fe=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&pd(t,i,o),o};const _r=class extends I{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(e=>{this._intersecting=e[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.name)}get _columnWidths(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.width)}get _isSelected(){var e;return(e=this.table)==null?void 0:e.selection.has(this.data)}onSelectionChange(e){if(!this.table)return;const t=e.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const e=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,i=[];for(const n in t){if(this.hiddenColumns.includes(n))continue;const o=t[n];let s;if(typeof o=="string"||typeof o=="boolean"||typeof o=="number"?(s=document.createElement("bim-label"),s.textContent=String(o)):o instanceof HTMLElement?s=o:(s=document.createDocumentFragment(),Pe(o,s)),!s)continue;const r=document.createElement("bim-table-cell");r.append(s),r.column=n,this._columnNames.indexOf(n)===0&&(r.style.marginLeft=`${this.table.noIndentation?0:e+.75}rem`);const l=this._columnNames.indexOf(n);r.setAttribute("data-column-index",String(l)),r.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),r.toggleAttribute("data-cell-header",this.isHeader),r.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:r}})),i.push(r)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,m`
      ${!this.isHeader&&this.table.selectableRows?m`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${i}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};_r.styles=T`
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
  `;let qt=_r;fe([g({type:Boolean,reflect:!0})],qt.prototype,"selected");fe([g({attribute:!1})],qt.prototype,"columns");fe([g({attribute:!1})],qt.prototype,"hiddenColumns");fe([g({attribute:!1})],qt.prototype,"data");fe([g({type:Boolean,attribute:"is-header",reflect:!0})],qt.prototype,"isHeader");fe([de()],qt.prototype,"_intersecting");var md=Object.defineProperty,bd=Object.getOwnPropertyDescriptor,ct=(e,t,i,n)=>{for(var o=n>1?void 0:n?bd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&md(t,i,o),o};const wr=class extends I{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(e,t)=>Object.values(t.data).some(i=>String(i).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,t)=>{let i=!1;const n=xn(e)??[];for(const o of n){if("queries"in o){i=!1;break}const{condition:s,value:r}=o;let{key:l}=o;if(l.startsWith("[")&&l.endsWith("]")){const a=l.replace("[","").replace("]","");l=a,i=Object.keys(t.data).filter(d=>d.includes(a)).map(d=>Lo(t.data[d],s,r)).some(d=>d)}else i=Lo(t.data[l],s,r);if(!i)break}return i}}set columns(e){const t=[];for(const i of e){const n=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;t.push(n)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const t of this.columns){const{name:i}=t;e[i]=String(i)}return e}get value(){return this._filteredData}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateFilteredData(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set hiddenColumns(e){this._hiddenColumns=e,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(xn(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(e){let t=!1;for(const i of e){const{children:n,data:o}=i;for(const s in o)this._columns.map(r=>typeof r=="string"?r:r.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(n){const s=this.computeMissingColumns(n);s&&!t&&(t=s)}}return t}generateText(e="comma",t=this.value,i="",n=!0){const o=this._textDelimiters[e];let s="";const r=this.columns.map(l=>l.name);if(n){this.indentationInText&&(s+=`Indentation${o}`);const l=`${r.join(o)}
`;s+=l}for(const[l,a]of t.entries()){const{data:d,children:u}=a,c=this.indentationInText?`${i}${l+1}${o}`:"",h=r.map(f=>d[f]??""),p=`${c}${h.join(o)}
`;s+=p,u&&(s+=this.generateText(e,a.children,`${i}${l+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(e){const t={};for(const n of Object.keys(this.dataTransform)){const o=this.columns.find(s=>s.name===n);o&&o.forceDataTransform&&(n in e||(e[n]=""))}const i=e;for(const n in i){const o=this.dataTransform[n];o?t[n]=o(i[n],e):t[n]=e[n]}return t}downloadData(e="BIM Table Data",t="json"){let i=null;if(t==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),t==="csv"&&(i=new File([this.csv],`${e}.csv`)),t==="tsv"&&(i=new File([this.tsv],`${e}.tsv`)),!i)return;const n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=i.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(e,t=this.value,i=0){for(const n of t){if(n.data===e)return i;if(n.children){const o=this.getRowIndentation(e,n.children,i+1);if(o!==null)return o}}return null}getGroupIndentation(e,t=this.value,i=0){for(const n of t){if(n===e)return i;if(n.children){const o=this.getGroupIndentation(e,n.children,i+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._filteredData.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){if(this.loading=!1,this._filteredData.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),n=i==null?void 0:i.querySelector("[data-table-element='error-message']");return t instanceof Error&&n&&t.message.trim()!==""&&(n.textContent=t.message),this._errorLoading=!0,!1}}filter(e,t=this.filterFunction??this._stringFilterFunction,i=this.data){const n=[];for(const o of i)if(t(e,o)){if(this.preserveStructureOnFilter){const s={data:o.data};if(o.children){const r=this.filter(e,t,o.children);r.length&&(s.children=r)}n.push(s)}else if(n.push({data:o.data}),o.children){const s=this.filter(e,t,o.children);n.push(...s)}}else if(o.children){const s=this.filter(e,t,o.children);this.preserveStructureOnFilter&&s.length?n.push({data:o.data,children:s}):n.push(...s)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return sd();if(this._errorLoading)return m`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return m`<slot name="missing-data"></slot>`;const e=document.createElement("bim-table-row");e.table=this,e.isHeader=!0,e.data=this._headerRowData,e.style.gridArea="Header",e.style.position="sticky",e.style.top="0",e.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:e} ${rd()}
        <div style="overflow-x: hidden; grid-area: Body">${t}</div>
      </div>
    `}};wr.styles=[kt.scrollbar,T`
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
    `];let st=wr;ct([de()],st.prototype,"_filteredData",2);ct([g({type:Boolean,attribute:"headers-hidden",reflect:!0})],st.prototype,"headersHidden",2);ct([g({type:String,attribute:"min-col-width",reflect:!0})],st.prototype,"minColWidth",2);ct([g({type:Array,attribute:!1})],st.prototype,"columns",1);ct([g({type:Array,attribute:!1})],st.prototype,"data",1);ct([g({type:Boolean,reflect:!0})],st.prototype,"expanded",2);ct([g({type:Boolean,reflect:!0,attribute:"selectable-rows"})],st.prototype,"selectableRows",2);ct([g({attribute:!1})],st.prototype,"selection",2);ct([g({type:Boolean,attribute:"no-indentation",reflect:!0})],st.prototype,"noIndentation",2);ct([g({type:Boolean,reflect:!0})],st.prototype,"loading",2);ct([de()],st.prototype,"_errorLoading",2);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,ge=(e,t,i,n)=>{for(var o=n>1?void 0:n?gd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&fd(t,i,o),o};const xr=class extends I{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=e=>{const t=e.target;t instanceof X&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(e){this._tab=e;const t=[...this.children],i=t.find(n=>n instanceof X&&n.name===e);for(const n of t){if(!(n instanceof X))continue;n.hidden=i!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(e){return this._switchers.find(t=>t.getAttribute("data-name")===e)}createSwitchers(){this._switchers=[];for(const e of this.children){if(!(e instanceof X))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===e.name?this.toggleAttribute("tab",!1):this.tab=e.name}),t.setAttribute("data-name",e.name),t.className="switcher";const i=document.createElement("bim-label");i.textContent=e.label??null,i.icon=e.icon,t.append(i),this._switchers.push(t)}}updateSwitchers(){for(const e of this.children){if(!(e instanceof X))continue;const t=this._switchers.find(n=>n.getAttribute("data-name")===e.name);if(!t)continue;const i=t.querySelector("bim-label");i&&(i.textContent=e.label??null,i.icon=e.icon)}}onSlotChange(e){this.createSwitchers();const t=e.target.assignedElements(),i=t.find(n=>n instanceof X?this.tab?n.name===this.tab:!n.hidden:!1);i&&i instanceof X&&(this.tab=i.name);for(const n of t){if(!(n instanceof X)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),i!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};xr.styles=[kt.scrollbar,T`
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
    `];let It=xr;ge([de()],It.prototype,"_switchers",2);ge([g({type:Boolean,reflect:!0})],It.prototype,"bottom",2);ge([g({type:Boolean,attribute:"switchers-hidden",reflect:!0})],It.prototype,"switchersHidden",2);ge([g({type:Boolean,reflect:!0})],It.prototype,"floating",2);ge([g({type:String,reflect:!0})],It.prototype,"tab",1);ge([g({type:Boolean,attribute:"switchers-full",reflect:!0})],It.prototype,"switchersFull",2);var vd=Object.defineProperty,yd=Object.getOwnPropertyDescriptor,Gi=(e,t,i,n)=>{for(var o=n>1?void 0:n?yd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&vd(t,i,o),o};const $r=class extends I{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(e){this._label=e;const t=this.parentElement;t instanceof It&&t.updateSwitchers()}get label(){return this._label}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:e}=this;if(e&&this.name===this._defaultName){const t=[...e.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return m` <slot></slot> `}};$r.styles=T`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let X=$r;Gi([g({type:String,reflect:!0})],X.prototype,"name",2);Gi([g({type:String,reflect:!0})],X.prototype,"label",1);Gi([g({type:String,reflect:!0})],X.prototype,"icon",2);Gi([g({type:Boolean,reflect:!0})],X.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ro=e=>e??L;var _d=Object.defineProperty,wd=Object.getOwnPropertyDescriptor,vt=(e,t,i,n)=>{for(var o=n>1?void 0:n?wd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&_d(t,i,o),o};const Cr=class extends I{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(e){this._inputTypes.includes(e)&&(this._type=e)}get type(){return this._type}get query(){return xn(this.value)}onInputChange(e){e.stopPropagation();const t=e.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return m`
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
              placeholder=${Ro(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:m` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Ro(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Cr.styles=[kt.scrollbar,T`
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
    `];let rt=Cr;vt([g({type:String,reflect:!0})],rt.prototype,"icon",2);vt([g({type:String,reflect:!0})],rt.prototype,"label",2);vt([g({type:String,reflect:!0})],rt.prototype,"name",2);vt([g({type:String,reflect:!0})],rt.prototype,"placeholder",2);vt([g({type:String,reflect:!0})],rt.prototype,"value",2);vt([g({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);vt([g({type:Number,reflect:!0})],rt.prototype,"debounce",2);vt([g({type:Number,reflect:!0})],rt.prototype,"rows",2);vt([g({type:String,reflect:!0})],rt.prototype,"type",1);var xd=Object.defineProperty,$d=Object.getOwnPropertyDescriptor,Ar=(e,t,i,n)=>{for(var o=n>1?void 0:n?$d(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&xd(t,i,o),o};const Er=class extends I{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const e=this.children;for(const t of e)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Er.styles=T`
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
  `;let qi=Er;Ar([g({type:Number,reflect:!0})],qi.prototype,"rows",2);Ar([g({type:Boolean,reflect:!0})],qi.prototype,"vertical",1);var Cd=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,Yi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ad(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Cd(t,i,o),o};const Sr=class extends I{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(e){this._labelHidden=e,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const e=this.children;for(const t of e)t instanceof qi&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Sr.styles=T`
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
  `;let ve=Sr;Yi([g({type:String,reflect:!0})],ve.prototype,"label",2);Yi([g({type:String,reflect:!0})],ve.prototype,"icon",2);Yi([g({type:Boolean,reflect:!0})],ve.prototype,"vertical",1);Yi([g({type:Boolean,attribute:"label-hidden",reflect:!0})],ve.prototype,"labelHidden",1);var Ed=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Un=(e,t,i,n)=>{for(var o=n>1?void 0:n?Sd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Ed(t,i,o),o};const kr=class extends I{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(e){this._vertical=e,this.updateSections()}get vertical(){return this._vertical}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const e=this.children;for(const t of e)t instanceof ve&&(t.labelHidden=this.vertical&&!Z.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};kr.styles=T`
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
  `;let Xi=kr;Un([g({type:String,reflect:!0})],Xi.prototype,"icon",2);Un([g({type:Boolean,attribute:"labels-hidden",reflect:!0})],Xi.prototype,"labelsHidden",2);Un([g({type:Boolean,reflect:!0})],Xi.prototype,"vertical",1);var kd=Object.defineProperty,Td=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&kd(t,i,o),o};const Tr=class extends I{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Tr.styles=T`
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
  `;let Or=Tr;Td([g({type:String,reflect:!0})],Or.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ir="important",Od=" !"+Ir,Ft=Ts(class extends Os{constructor(e){var t;if(super(e),e.type!==ks.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ft.add(n);const s=typeof o=="string"&&o.endsWith(Od);n.includes("-")||s?i.setProperty(n,s?o.slice(0,-11):o,s?Ir:""):i[n]=o}}return ne}}),Id=e=>{const{components:t}=e,i=t.get(Jo);return m`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const n=document.createElement("input");n.type="file",n.accept=".ifc",n.onchange=async()=>{if(n.files===null||n.files.length===0)return;const o=n.files[0],s=o.name.replace(".ifc","");n.remove();const r=await o.arrayBuffer(),l=new Uint8Array(r);await i.load(l,!0,s)},n.click()}}
    ></bim-button>
  `},Nd=e=>z.create(Id,e),Md=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:Nd},Symbol.toStringTag,{value:"Module"}));({...Md});const Pd=e=>{const{components:t,actions:i,tags:n}=e,o=(i==null?void 0:i.dispose)??!0,s=(i==null?void 0:i.download)??!0,r=(i==null?void 0:i.visibility)??!0,l=(n==null?void 0:n.schema)??!0,a=(n==null?void 0:n.viewDefinition)??!0,d=t.get(Vt),u=({detail:c})=>{const{cell:h}=c;h.style.padding="0.25rem 0"};return m`
    <bim-table ${G(c=>{if(!c)return;const h=c;h.hiddenColumns=["modelID"];const p=[];for(const[,f]of d.groups){if(!f)continue;const w={data:{Name:f.name||f.uuid,modelID:f.uuid}};p.push(w)}h.dataTransform={Name:(f,w)=>{const{modelID:v}=w;if(typeof v!="string")return f;const b=d.groups.get(v);if(!b)return v;const y={};for(const S of b.items)y[S.id]=S.ids;let _;const{schema:x}=b.ifcMetadata;l&&x&&(_=m`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${x}</bim-label>
            `);let A;if(a&&"viewDefinition"in b.ifcMetadata){const S=b.ifcMetadata.viewDefinition;A=m`
            ${S.split(",").map(E=>m`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${E}</bim-label>`)}
          `}let C;o&&(C=m`<bim-button @click=${()=>d.disposeGroup(b)} icon="mdi:delete"></bim-button>`);let O;r&&(O=m`<bim-button @click=${S=>{const E=t.get(Qo),B=S.target;E.set(B.hasAttribute("data-model-hidden"),y),B.toggleAttribute("data-model-hidden"),B.icon=B.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let M;return s&&(M=m`<bim-button @click=${()=>{const S=document.createElement("input");S.type="file",S.accept=".ifc",S.multiple=!1,S.addEventListener("change",async()=>{if(!(S.files&&S.files.length===1))return;const E=S.files[0],B=await E.arrayBuffer(),q=await t.get(la).saveToIfc(b,new Uint8Array(B)),W=new File([q],E.name),$=document.createElement("a");$.href=URL.createObjectURL(W),$.download=W.name,$.click(),URL.revokeObjectURL($.href)}),S.click()}} icon="flowbite:download-solid"></bim-button>`),m`
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
            ${O}
            ${C}
          </div>
         </div>
        `}},h.data=p})} @cellcreated=${u} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},Ld=(e,t=!0)=>{const i=z.create(Pd,e);if(t){const{components:n}=e,o=n.get(Vt),[,s]=i;o.onFragmentsLoaded.add(()=>setTimeout(()=>s())),o.onFragmentsDisposed.add(()=>s())}return i},Rd=Object.freeze(Object.defineProperty({__proto__:null,modelsList:Ld},Symbol.toStringTag,{value:"Module"})),Nr=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",e=>e.includes("Value"),e=>e.startsWith("Material"),e=>e.startsWith("Relating"),e=>{const t=["IsGroupedBy","IsDecomposedBy"];return e.startsWith("Is")&&!t.includes(e)}];async function mi(e,t,i,n=Nr,o=!1){const s=e.get(pt),r=await t.getProperties(i);if(!r)return{data:{Entity:`${i} properties not found...`}};const l=s.relationMaps[t.uuid],a={data:{}};for(const d in r){const u=n.map(h=>typeof h=="string"?d===h:h(d)).includes(!0);if(!(d==="type"||u))continue;const c=r[d];if(c)if(c.type===5){a.children||(a.children=[]);const h=await mi(e,t,c.value,n,o);a.children.push(h)}else if(typeof c=="object"&&!Array.isArray(c)){const{value:h,type:p}=c;if(o)p===1||p===2||p===3||(a.data[d]=h);else{const f=typeof h=="number"?Number(h.toFixed(3)):h;a.data[d]=f}}else if(Array.isArray(c))for(const h of c){if(h.type!==5)continue;a.children||(a.children=[]);const p=await mi(e,t,h.value,n,o);a.children.push(p)}else if(d==="type"){const h=fi[c];a.data.Entity=h}else a.data[d]=c}if(l&&l.get(r.expressID)){const d=l.get(r.expressID);for(const u of n){const c=[];if(typeof u=="string"){const h=s._inverseAttributes.indexOf(u);h!==-1&&c.push(h)}else{const h=s._inverseAttributes.filter(p=>u(p));for(const p of h){const f=s._inverseAttributes.indexOf(p);c.push(f)}}for(const h of c){const p=d.get(h);if(p)for(const f of p){const w=await mi(e,t,f,n,o);a.children||(a.children=[]),a.children.push(w)}}}}return a}const jd=e=>{const{components:t,fragmentIdMap:i,attributesToInclude:n,editable:o,tableDefinition:s}=e,r=t.get(Vt);let l;return typeof n=="function"?l=n(Nr):l=n,m`<bim-table ${G(async a=>{if(!a)return;const d=a,u=[],c=[];for(const h in i){const p=r.list.get(h);if(!(p&&p.group))continue;const f=p.group,w=c.find(v=>v.model===f);if(w)for(const v of i[h])w.expressIDs.add(v);else{const v={model:f,expressIDs:new Set(i[h])};c.push(v)}}for(const h of c){const{model:p,expressIDs:f}=h;for(const w of f){const v=await mi(t,p,w,l,o);u.push(v)}}d.dataTransform=s,d.data=u,d.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},zd=e=>z.create(jd,e),Dd=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:zd},Symbol.toStringTag,{value:"Module"}));let _t;const Fd=e=>{const{components:t,classifications:i}=e,n=t.get(ca),o=t.get(Qo);_t||(_t=document.createElement("bim-table"),_t.headersHidden=!0,_t.hiddenColumns=["system"],_t.columns=["Name",{name:"Actions",width:"auto"}],_t.dataTransform={Actions:(r,l)=>{const{system:a,Name:d}=l;if(!(typeof a=="string"&&typeof d=="string"))return r;const u=n.list[a];if(!(u&&u[d]))return r;const c=u[d],{map:h}=c;return m`
          <div>
            <bim-checkbox checked @change=${p=>{const f=p.target;o.set(f.value,h)}}></bim-checkbox>
          </div>
        `}});const s=[];for(const r of i){const l=typeof r=="string"?r:r.system,a=typeof r=="string"?r:r.label,d=n.list[l];d&&s.push({data:{Name:a,system:l},children:Object.keys(d).map(u=>({data:{Name:u,system:l,Actions:""}}))})}return _t.data=s,m`${_t}`},Hd=(e,t=!0)=>{const i=z.create(Fd,e);if(t){const{components:n}=e,o=n.get(Vt),[,s]=i;o.onFragmentsDisposed.add(()=>s())}return i},Bd=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:Hd},Symbol.toStringTag,{value:"Module"})),Mr=async(e,t,i)=>{var n,o,s,r;const l=e.get(pt),a={data:{Name:(n=i.Name)==null?void 0:n.value},children:[{data:{Name:"Identification",Value:(o=i.Identification)==null?void 0:o.value}},{data:{Name:"Name",Value:(s=i.Name)==null?void 0:s.value}},{data:{Name:"Description",Value:(r=i.Description)==null?void 0:r.value}}]},d=l.getEntityRelations(t,i.expressID,"IsNestedBy");if(!d)return a;a.children||(a.children=[]);const u=[];a.children.push({data:{Name:"Tasks"},children:u});for(const c of d){const h=await t.getProperties(c);if(!h)continue;const p=await Mr(e,t,h);u.push(p)}return a},Ud=async(e,t,i)=>{const n=[];for(const o of i){const s=await Mr(e,t,o);n.push(s)}return{data:{Name:"Tasks"},children:n}},Vd=async(e,t)=>{var i,n,o,s;const r={data:{Name:"Classifications"}};for(const l of t){const{value:a}=l.ReferencedSource,d=await e.getProperties(a);if(!d)continue;const u={data:{Name:(i=d.Name)==null?void 0:i.value},children:[{data:{Name:"Identification",Value:((n=l.Identification)==null?void 0:n.value)||((o=l.ItemReference)==null?void 0:o.value)}},{data:{Name:"Name",Value:(s=l.Name)==null?void 0:s.value}}]};r.children||(r.children=[]),r.children.push(u)}return r},Wd=async(e,t)=>{var i,n,o,s,r,l;const a={data:{Name:"Materials"}};for(const d of t){if(d.type===ts){const u=(i=d.ForLayerSet)==null?void 0:i.value,c=await e.getProperties(u);if(!c)continue;for(const h of c.MaterialLayers){const{value:p}=h,f=await e.getProperties(p);if(!f)continue;const w=await e.getProperties((n=f.Material)==null?void 0:n.value);if(!w)continue;const v={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:(o=f.LayerThickness)==null?void 0:o.value}},{data:{Name:"Material",Value:(s=w.Name)==null?void 0:s.value}}]};a.children||(a.children=[]),a.children.push(v)}}if(d.type===is)for(const u of d.Materials){const{value:c}=u,h=await e.getProperties(c);if(!h)continue;const p={data:{Name:"Name",Value:(r=h.Name)==null?void 0:r.value}};a.children||(a.children=[]),a.children.push(p)}if(d.type===es){const u={data:{Name:"Name",Value:(l=d.Name)==null?void 0:l.value}};a.children||(a.children=[]),a.children.push(u)}}return a},Gd={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},qd={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},Pr=async(e,t)=>{var i,n,o;const s=Object.values(await e.getAllPropertiesOfType(xa))[0];let r;for(const l of s.Units){const a=await e.getProperties(l.value);if(a&&((i=a.UnitType)==null?void 0:i.value)===Gd[t]){r=`${((n=a.Prefix)==null?void 0:n.value)??""}${((o=a.Name)==null?void 0:o.value)??""}`;break}}return r?qd[r]:null},Yd=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"PropertySets"}};for(const l of t){const a={data:{Name:(n=l.Name)==null?void 0:n.value}};if(l.type===Zo){for(const d of l.HasProperties){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,f="";if(s){const{name:v}=c[h],b=await Pr(e,v)??{};f=b.symbol,p=c[h].value,typeof p=="number"&&b.digits&&(p=p.toFixed(b.digits))}const w={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${f??""}`}};a.children||(a.children=[]),a.children.push(w)}a.children&&(r.children||(r.children=[]),r.children.push(a))}}return r},Xd=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"QuantitySets"}};for(const l of t){const a={data:{Name:(n=l.Name)==null?void 0:n.value}};if(l.type===Ko){for(const d of l.Quantities){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,f="";if(s){const{name:v}=c[h],b=await Pr(e,v)??{};f=b.symbol,p=c[h].value,typeof p=="number"&&b.digits&&(p=p.toFixed(b.digits))}const w={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${f??""}`}};a.children||(a.children=[]),a.children.push(w)}a.children&&(r.children||(r.children=[]),r.children.push(a))}}return r},Jd=["OwnerHistory","ObjectPlacement","CompositionType"],Lr=async(e,t)=>{const i={groupName:"Attributes",includeClass:!1,...t},{groupName:n,includeClass:o}=i,s={data:{Name:n}};o&&(s.children||(s.children=[]),s.children.push({data:{Name:"Class",Value:fi[e.type]}}));for(const r in e){if(Jd.includes(r))continue;const l=e[r];if(l&&typeof l=="object"&&!Array.isArray(l)){if(l.type===ga)continue;const a={data:{Name:r,Value:l.value}};s.children||(s.children=[]),s.children.push(a)}}return s},re=(e,...t)=>{e.children||(e.children=[]),e.children.push(...t)},Qd=async(e,t,i,n,o)=>{const s=e.get(pt).getEntityRelations(t,i,"IsDefinedBy");if(s){const r=[],l=[];for(const u of s){const c=await t.getProperties(u);c&&(c.type===Zo&&r.push(c),c.type===Ko&&l.push(c))}const a=await Yd(t,r,o);a.children&&re(n,a);const d=await Xd(t,l,o);d.children&&re(n,d)}},Zd=async(e,t,i,n)=>{const o=e.get(pt).getEntityRelations(t,i,"HasAssociations");if(o){const s=[],r=[];for(const d of o){const u=await t.getProperties(d);u&&(u.type===va&&s.push(u),(u.type===ts||u.type===ya||u.type===_a||u.type===es||u.type===is)&&r.push(u))}const l=await Vd(t,s);l.children&&re(n,l);const a=await Wd(t,r);a.children&&re(n,a)}},Kd=async(e,t,i,n)=>{const o=e.get(pt).getEntityRelations(t,i,"HasAssignments");if(o){const s=[];for(const l of o){const a=await t.getProperties(l);a&&a.type===wa&&s.push(a)}const r=await Ud(e,t,s);r.children&&re(n,r)}},tu=async(e,t,i,n)=>{const o=e.get(pt).getEntityRelations(t,i,"ContainedInStructure");if(o&&o[0]){const s=o[0],r=await t.getProperties(s);if(r){const l=await Lr(r,{groupName:"SpatialContainer"});re(n,l)}}};let di={};const eu=async(e,t,i)=>{var n;const o=e.get(pt),s=e.get(Vt),r=s.getModelIdMap(t);Object.keys(t).length===0&&(di={});const l=[];for(const a in r){const d=s.groups.get(a);if(!d)continue;const u=o.relationMaps[d.uuid];if(!u)continue;a in di||(di[a]=new Map);const c=di[a],h=r[a];for(const p of h){let f=c.get(p);if(f){l.push(f);continue}const w=await d.getProperties(p);if(!w)continue;f={data:{Name:(n=w.Name)==null?void 0:n.value}},l.push(f),c.set(p,f);const v=await Lr(w,{includeClass:!0});f.children||(f.children=[]),f.children.push(v),u.get(p)&&(await Qd(e,d,p,f,i),await Zd(e,d,p,f),await Kd(e,d,p,f),await tu(e,d,p,f))}}return l},iu=e=>{const t={emptySelectionWarning:!0,...e},{components:i,fragmentIdMap:n,emptySelectionWarning:o}=t;return m`
    <bim-table @cellcreated=${({detail:s})=>{const{cell:r}=s;r.column==="Name"&&!("Value"in r.rowData)&&(r.style.gridColumn="1 / -1")}} ${G(async s=>{if(!s)return;const r=s;r.columns=[{name:"Name",width:"12rem"}],r.headersHidden=!0,r.loadFunction=()=>eu(i,n,e),await r.loadData(!0)&&r.dispatchEvent(new Event("datacomputed"))})}>
      ${o?m`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},nu=e=>z.create(iu,e),ou=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:nu},Symbol.toStringTag,{value:"Module"})),An=async(e,t,i,n)=>{var o;const s=[],r=e.get(pt),l=await t.getProperties(i);if(!l)return s;const{type:a}=l,d={data:{Entity:fi[a],Name:(o=l.Name)==null?void 0:o.value,modelID:t.uuid,expressID:i}};for(const u of n){const c=r.getEntityRelations(t,i,u);if(!c)continue;d.children||(d.children=[]),d.data.relations=JSON.stringify(c);const h={};for(const p of c){const f=await An(e,t,p,n);for(const w of f)if(w.data.relations)d.children.push(w);else{const v=t.data.get(p);if(!v){d.children.push(w);continue}const b=v[1][1],y=fi[b];y in h||(h[y]=[]),w.data.Entity=w.data.Name,delete w.data.Name,h[y].push(w)}}for(const p in h){const f=h[p],w=f.map(b=>b.data.expressID),v={data:{Entity:p,modelID:t.uuid,relations:JSON.stringify(w)},children:f};d.children.push(v)}}return s.push(d),s},su=async(e,t,i,n)=>{const o=e.get(pt),s=[];for(const r of t){let l;if(n)l={data:{Entity:r.name!==""?r.name:r.uuid},children:await An(e,r,n,i)};else{const a=o.relationMaps[r.uuid],d=await r.getAllPropertiesOfType(fa);if(!(a&&d))continue;const{expressID:u}=Object.values(d)[0];l={data:{Entity:r.name!==""?r.name:r.uuid},children:await An(e,r,u,i)}}s.push(l)}return s};let mt;const ru=(e,t)=>{const i=e.get(Vt),{modelID:n,expressID:o,relations:s}=t;if(!n)return null;const r=i.groups.get(n);return r?r.getFragmentMap([o,...JSON.parse(s??"[]")]):null},au=e=>{const{components:t,models:i,expressID:n}=e,o=e.selectHighlighterName??"select",s=e.hoverHighlighterName??"hover";mt||(mt=document.createElement("bim-table"),mt.hiddenColumns=["modelID","expressID","relations"],mt.columns=["Entity","Name"],mt.headersHidden=!0,mt.addEventListener("cellcreated",({detail:l})=>{const{cell:a}=l;a.column==="Entity"&&!("Name"in a.rowData)&&(a.style.gridColumn="1 / -1")})),mt.addEventListener("rowcreated",l=>{l.stopImmediatePropagation();const{row:a}=l.detail,d=t.get(da),u=ru(t,a.data);u&&Object.keys(u).length!==0&&(a.onmouseover=()=>{s&&(a.style.backgroundColor="var(--bim-ui_bg-contrast-20)",d.highlightByID(s,u,!0,!1,d.selection[o]??{}))},a.onmouseout=()=>{a.style.backgroundColor="",d.clear(s)},a.onclick=()=>{o&&d.highlightByID(o,u,!0,!0)})});const r=e.inverseAttributes??["IsDecomposedBy","ContainsElements"];return su(t,i,r,n).then(l=>mt.data=l),m`${mt}`},lu=(e,t=!0)=>{const i=z.create(au,e);if(t){const[,n]=i,{components:o}=e,s=o.get(Vt),r=o.get(pt),l=()=>n({models:s.groups.values()});r.onRelationsIndexed.add(l),s.onFragmentsDisposed.add(l)}return i},cu=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:lu},Symbol.toStringTag,{value:"Module"})),Ae=(e,t)=>[...e.get(Tn).list.values()].find(i=>i.world===t),du=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target;e.color=new ce(n.color)}} color=${t}></bim-color-input>
  `,uu=(e,t)=>{const{postproduction:i}=e,n=i.n8ao.configuration;return m`
    <bim-color-input @input=${o=>{const s=o.target;n.color=new ce(s.color)}} color=${t}></bim-color-input>
  `},hu=(e,t)=>{const{color:i,opacity:n}=JSON.parse(t),{postproduction:o}=e,{customEffects:s}=o;return m`
    <bim-color-input @input=${r=>{const{color:l,opacity:a}=r.target;s.lineColor=new ce(l).getHex(),a&&(s.opacity=a/100)}} color=${i} opacity=${n*100}></bim-color-input>
  `},pu=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target,o=new ce(n.color);e.material.uniforms.uColor.value=o}} color=${t}></bim-color-input>
  `,mu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({ao:o.checked})}} .checked=${t}></bim-checkbox>
  `},bu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({gamma:o.checked})}} .checked=${t}></bim-checkbox>
  `},fu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({custom:o.checked})}} .checked=${t}></bim-checkbox>
  `},wt=(e,t,i,n=()=>{})=>m`
    <bim-checkbox .checked="${i}" @change="${o=>{const s=o.target.checked;e[t]=s,n(s)}}"></bim-checkbox> 
  `,N=(e,t,i,n)=>{const o={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...n},{slider:s,min:r,max:l,step:a,suffix:d,prefix:u,onInputSet:c}=o;return m`
    <bim-number-input
      .pref=${u}
      .suffix=${d}
      .slider=${s} 
      min=${r} 
      value="${i}" 
      max=${l} 
      step=${a} 
      @change="${h=>{const p=h.target.value;e[t]=p,c(p)}}"
    ></bim-number-input> 
  `},gu=e=>{const{components:t}=e,i=t.get(We);return m`
    <bim-table @cellcreated=${({detail:n})=>{const o=n.cell.parentNode;if(!o)return;const s=o.querySelector("bim-table-cell[column='Name']"),r=o.querySelector("bim-table-cell[column='Value']");s&&!r&&(s.style.gridColumn="1 / -1")}} ${G(async n=>{var o,s,r,l,a;if(!n)return;const d=n;d.preserveStructureOnFilter=!0,d.dataTransform={Value:(c,h)=>{const p=h.World,f=i.list.get(p);if(!f)return c;const{scene:w,camera:v,renderer:b}=f,y=h.Name;if(y==="Grid"&&h.IsGridConfig&&typeof c=="boolean"){const _=Ae(t,f);return _?wt(_,"visible",c):c}if(y==="Color"&&h.IsGridConfig&&typeof c=="string"){const _=Ae(t,f);return _?pu(_,c):c}if(y==="Distance"&&h.IsGridConfig&&typeof c=="number"){const _=Ae(t,f);return _?N(_.material.uniforms.uDistance,"value",c,{slider:!0,min:300,max:1e3}):c}if(y==="Size"&&h.IsGridConfig&&typeof c=="string"){const _=Ae(t,f);if(!_)return c;const{x,y:A}=JSON.parse(c),C=N(_.material.uniforms.uSize1,"value",x,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),O=N(_.material.uniforms.uSize2,"value",A,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${C}${O}</div>
          `}if(y==="Near Frustum"&&v.three instanceof ai&&typeof c=="number"){const _=v.three;return N(v.three,"near",c,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Far Frustum"&&v.three instanceof ai&&typeof c=="number"){const _=v.three;return N(v.three,"far",c,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Field of View"&&v.three instanceof ai&&typeof c=="number"){const _=v.three;return N(v.three,"fov",c,{slider:!0,min:10,max:120,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Invert Drag"&&v.hasCameraControls()&&typeof c=="boolean")return wt(v.controls,"dollyDragInverted",c);if(y==="Dolly Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"dollySpeed",c,{slider:!0,min:.5,max:3,step:.1});if(y==="Truck Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"truckSpeed",c,{slider:!0,min:.5,max:6,step:.1});if(y==="Smooth Time"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"smoothTime",c,{slider:!0,min:.01,max:2,step:.01});if(y==="Intensity"&&typeof c=="number"){if(h.Light&&typeof h.Light=="string"){const _=w.three.children.find(x=>x.uuid===h.Light);return _&&_ instanceof we?N(_,"intensity",c,{slider:!0,min:0,max:10,step:.1}):c}if(h.IsAOConfig&&b instanceof P)return N(b.postproduction.n8ao.configuration,"intensity",c,{slider:!0,max:16,step:.1})}if(y==="Color"&&typeof c=="string"){const _=h.Light,x=w.three.children.find(A=>A.uuid===_);if(x&&x instanceof we)return du(x,c);if(h.IsAOConfig&&b instanceof P)return uu(b,c)}if(y==="Ambient Oclussion"&&typeof c=="boolean"&&h.IsAOConfig&&b instanceof P)return mu(b,c);if(y==="Half Resolution"&&h.IsAOConfig&&b instanceof P&&typeof c=="boolean")return wt(b.postproduction.n8ao.configuration,"halfRes",c);if(y==="Screen Space Radius"&&h.IsAOConfig&&b instanceof P&&typeof c=="boolean")return wt(b.postproduction.n8ao.configuration,"screenSpaceRadius",c);if(y==="Radius"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"aoRadius",c,{slider:!0,max:2,step:.1});if(y==="Denoise Samples"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"denoiseSamples",c,{slider:!0,min:1,max:16});if(y==="Samples"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"aoSamples",c,{slider:!0,min:1,max:16});if(y==="Denoise Radius"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"denoiseRadius",c,{slider:!0,min:0,max:16,step:.1});if(y==="Distance Falloff"&&h.IsAOConfig&&b instanceof P&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"distanceFalloff",c,{slider:!0,min:0,max:4,step:.1});if(y==="Directional Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find(x=>x.uuid===h.Light);return _&&_ instanceof we?wt(_,"visible",c):c}if(y==="Ambient Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find(x=>x.uuid===h.Light);return _&&_ instanceof we?wt(_,"visible",c):c}if(y==="Position"&&h.Light&&typeof h.Light=="string"&&typeof c=="string"){const _=w.three.children.find(E=>E.uuid===h.Light);if(!(_&&_ instanceof we))return c;const{x,y:A,z:C}=JSON.parse(c),O=N(_.position,"x",x,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),M=N(_.position,"y",A,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),S=N(_.position,"z",C,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${O}${M}${S}</div>
          `}return y==="Custom Effects"&&h.IsCEConfig&&b instanceof P&&typeof c=="boolean"?fu(b,c):y==="Color"&&h.IsOutlineConfig&&b instanceof P&&typeof c=="string"?hu(b,c):y==="Tolerance"&&h.IsOutlineConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"tolerance",c,{slider:!0,min:0,max:6,step:.01}):y==="Outline"&&h.IsOutlineConfig&&b instanceof P&&typeof c=="boolean"?wt(b.postproduction.customEffects,"outlineEnabled",c):y==="Gloss"&&h.IsGlossConfig&&b instanceof P&&typeof c=="boolean"?wt(b.postproduction.customEffects,"glossEnabled",c):y==="Min"&&h.IsGlossConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"minGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Max"&&h.IsGlossConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"maxGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Exponent"&&h.IsGlossConfig&&b instanceof P&&typeof c=="number"?N(b.postproduction.customEffects,"glossExponent",c,{slider:!0,min:0,max:5,step:.01}):y==="Gamma Correction"&&h.IsGammaConfig&&b instanceof P&&typeof c=="boolean"?bu(b,c):c}};const u=[];for(const[,c]of i.list){const{scene:h,camera:p,renderer:f}=c,w=Ae(t,c),v={data:{Name:c instanceof ua&&c.name||c.uuid},children:[]};if(h){const b={data:{Name:"Scene"}};if(w){const x=`#${w.material.uniforms.uColor.value.getHexString()}`,A=JSON.stringify({x:w.material.uniforms.uSize1.value,y:w.material.uniforms.uSize2.value}),C={data:{Name:"Grid",Value:w.three.visible,World:c.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",Value:x,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Size",Value:A,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:w.material.uniforms.uDistance.value,World:c.uuid,IsGridConfig:!0}}]};b.children||(b.children=[]),b.children.push(C)}const y=h.three.children.filter(x=>x instanceof ha);for(const x of y){const A={data:{Name:"Directional Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(x.position),World:c.uuid,Light:x.uuid}},{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};b.children||(b.children=[]),b.children.push(A)}const _=h.three.children.filter(x=>x instanceof pa);for(const x of _){const A={data:{Name:"Ambient Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};b.children||(b.children=[]),b.children.push(A)}b.children&&((o=b.children)==null?void 0:o.length)>0&&((s=v.children)==null||s.push(b))}if(p.three instanceof ai){const b={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:p.three.near,World:c.uuid}},{data:{Name:"Far Frustum",Value:p.three.far,World:c.uuid}},{data:{Name:"Field of View",Value:p.three.fov,World:c.uuid}}]};if(p.hasCameraControls()){const{controls:y}=p,_={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const x in _){const A=y[x];A!=null&&((r=b.children)==null||r.push({data:{Name:_[x],Value:A,World:c.uuid}}))}}(l=v.children)==null||l.push(b)}if(f instanceof P){const{postproduction:b}=f,y=b.n8ao.configuration,_={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:b.settings.gamma??!1,World:c.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:b.settings.ao??!1,World:c.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:y.aoSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${y.color.getHexString()}`,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:y.halfRes,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:y.screenSpaceRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:y.aoRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:y.intensity,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:y.distanceFalloff,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:y.denoiseSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:y.denoiseRadius,World:c.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:b.settings.custom??!1,World:c.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:b.customEffects.glossEnabled,World:c.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:b.customEffects.minGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:b.customEffects.maxGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:b.customEffects.glossExponent,World:c.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:b.customEffects.outlineEnabled,World:c.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const x=new ce(b.customEffects.lineColor),A=b.customEffects.opacity;return JSON.stringify({color:`#${x.getHexString()}`,opacity:A})},World:c.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:b.customEffects.tolerance,World:c.uuid,IsOutlineConfig:!0}}]}]}]};(a=v.children)==null||a.push(_)}u.push(v)}d.columns=[{name:"Name",width:"11rem"}],d.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],d.data=u})} headers-hidden expanded>
     <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No worlds to configure
      </bim-label>
    </bim-table>
  `},vu=(e,t=!0)=>{const i=z.create(gu,e);if(t){const[,n]=i,{components:o}=e;o.get(We).list.onItemDeleted.add(()=>n())}return i},yu=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:vu},Symbol.toStringTag,{value:"Module"})),Jt=(e,t)=>{const i=t[e],n=(i==null?void 0:i.name)??e,o=n.trim().split(/\s+/);let s,r;return o[0]&&o[0][0]&&(s=o[0][0].toUpperCase(),o[0][1]&&(r=o[0][1].toUpperCase())),o[1]&&o[1][0]&&(r=o[1][0].toUpperCase()),m`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(i!=null&&i.picture)&&(s||r)?m`
        <bim-label
          style=${Ft({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${r}</bim-label>
        `:null}
      <bim-label .img=${i==null?void 0:i.picture}>${n}</bim-label>
    </div>
  `},J={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},Qt={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=globalThis,ki=Si.trustedTypes,jo=ki?ki.createPolicy("lit-html",{createHTML:e=>e}):void 0,Rr="$lit$",$t=`lit$${Math.random().toFixed(9).slice(2)}$`,jr="?"+$t,_u=`<${jr}>`,Ut=document,Ti=()=>Ut.createComment(""),Be=e=>e===null||typeof e!="object"&&typeof e!="function",Vn=Array.isArray,wu=e=>Vn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ln=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zo=/-->/g,Do=/>/g,Rt=RegExp(`>|${ln}(?:([^\\s"'>=/]+)(${ln}*=${ln}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fo=/'/g,Ho=/"/g,zr=/^(?:script|style|textarea|title)$/i,Ue=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Bo=new WeakMap,zt=Ut.createTreeWalker(Ut,129);function Dr(e,t){if(!Vn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return jo!==void 0?jo.createHTML(t):t}const xu=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=Ee;for(let l=0;l<i;l++){const a=e[l];let d,u,c=-1,h=0;for(;h<a.length&&(r.lastIndex=h,u=r.exec(a),u!==null);)h=r.lastIndex,r===Ee?u[1]==="!--"?r=zo:u[1]!==void 0?r=Do:u[2]!==void 0?(zr.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=Rt):u[3]!==void 0&&(r=Rt):r===Rt?u[0]===">"?(r=o??Ee,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?Rt:u[3]==='"'?Ho:Fo):r===Ho||r===Fo?r=Rt:r===zo||r===Do?r=Ee:(r=Rt,o=void 0);const p=r===Rt&&e[l+1].startsWith("/>")?" ":"";s+=r===Ee?a+_u:c>=0?(n.push(d),a.slice(0,c)+Rr+a.slice(c)+$t+p):a+$t+(c===-2?l:p)}return[Dr(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Ve{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const l=t.length-1,a=this.parts,[d,u]=xu(t,i);if(this.el=Ve.createElement(d,n),zt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=zt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Rr)){const h=u[r++],p=o.getAttribute(c).split($t),f=/([.?@])?(.*)/.exec(h);a.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?Cu:f[1]==="?"?Au:f[1]==="@"?Eu:Qi}),o.removeAttribute(c)}else c.startsWith($t)&&(a.push({type:6,index:s}),o.removeAttribute(c));if(zr.test(o.tagName)){const c=o.textContent.split($t),h=c.length-1;if(h>0){o.textContent=ki?ki.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],Ti()),zt.nextNode(),a.push({type:2,index:++s});o.append(c[h],Ti())}}}else if(o.nodeType===8)if(o.data===jr)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf($t,c+1))!==-1;)a.push({type:7,index:s}),c+=$t.length-1}s++}}static createElement(t,i){const n=Ut.createElement("template");return n.innerHTML=t,n}}function ae(e,t,i=e,n){var o,s;if(t===Ue)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const l=Be(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),l===void 0?r=void 0:(r=new l(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=ae(e,r._$AS(e,t.values),r,n)),t}class $u{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Ut).importNode(i,!0);zt.currentNode=o;let s=zt.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new Ji(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new Su(s,this,t)),this._$AV.push(d),a=n[++l]}r!==(a==null?void 0:a.index)&&(s=zt.nextNode(),r++)}return zt.currentNode=Ut,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class Ji{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=ae(this,t,i),Be(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==Ue&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):wu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&Be(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ut.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ve.createElement(Dr(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new $u(s,this),l=r.u(this.options);r.p(n),this.T(l),this._$AH=r}}_$AC(t){let i=Bo.get(t.strings);return i===void 0&&Bo.set(t.strings,i=new Ve(t)),i}k(t){Vn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new Ji(this.O(Ti()),this.O(Ti()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Qi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=ae(this,t,i,0),r=!Be(t)||t!==this._$AH&&t!==Ue,r&&(this._$AH=t);else{const l=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=ae(this,l[n+a],i,a),d===Ue&&(d=this._$AH[a]),r||(r=!Be(d)||d!==this._$AH[a]),d===j?t=j:t!==j&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!o&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Cu extends Qi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class Au extends Qi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class Eu extends Qi{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=ae(this,t,i,0)??j)===Ue)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Su{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ae(this,t)}}const Uo=Si.litHtmlPolyfillSupport;Uo==null||Uo(Ve,Ji),(Si.litHtmlVersions??(Si.litHtmlVersions=[])).push("3.2.1");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ku=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tu={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ou=e=>(...t)=>({_$litDirective$:e,values:t});let Iu=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Ne(o,t);return!0},Oi=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Fr=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Pu(t)}};function Nu(e){this._$AN!==void 0?(Oi(this),this._$AM=e,Fr(this)):this._$AM=e}function Mu(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Ne(n[s],!1),Oi(n[s]);else n!=null&&(Ne(n,!1),Oi(n));else Ne(this,e)}const Pu=e=>{e.type==Tu.CHILD&&(e._$AP??(e._$AP=Mu),e._$AQ??(e._$AQ=Nu))};let Lu=class extends Iu{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Fr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(Ne(this,e),Oi(this))}setValue(e){if(ku(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const En=()=>new Ru;let Ru=class{};const cn=new WeakMap,ju=Ou(class extends Lu{render(e){return j}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),j}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=cn.get(t);i===void 0&&(i=new WeakMap,cn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=cn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),zu={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},Hr=e=>{const{components:t,topic:i,value:n,onCancel:o,onSubmit:s,styles:r}=e,l=s??(()=>{}),a=t.get(Ge),d=(n==null?void 0:n.title)??(i==null?void 0:i.title)??yt.default.title,u=(n==null?void 0:n.status)??(i==null?void 0:i.status)??yt.default.status,c=(n==null?void 0:n.type)??(i==null?void 0:i.type)??yt.default.type,h=(n==null?void 0:n.priority)??(i==null?void 0:i.priority)??yt.default.priority,p=(n==null?void 0:n.assignedTo)??(i==null?void 0:i.assignedTo)??yt.default.assignedTo,f=(n==null?void 0:n.labels)??(i==null?void 0:i.labels)??yt.default.labels,w=(n==null?void 0:n.stage)??(i==null?void 0:i.stage)??yt.default.stage,v=(n==null?void 0:n.description)??(i==null?void 0:i.description)??yt.default.description,b=i!=null&&i.dueDate?i.dueDate.toISOString().split("T")[0]:null,y=new Set([...a.config.statuses]);u&&y.add(u);const _=new Set([...a.config.types]);c&&_.add(c);const x=new Set([...a.config.priorities]);h&&x.add(h);const A=new Set([...a.config.users]);p&&A.add(p);const C=new Set([...a.config.labels]);if(f)for(const $ of f)C.add($);const O=new Set([...a.config.stages]);w&&O.add(w);const M=En(),S=async()=>{const{value:$}=M;if(!$)return;const R=He($,zu);if(i)i.set(R),await l(i);else{const V=a.create(R);await l(V)}},E=En(),B=$=>{const{value:R}=E;if(!R)return;const V=$.target;R.disabled=V.value.trim()===""},q=`btn-${Z.newRandomId()}`,W=`btn-${Z.newRandomId()}`;return m`
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
          ${[...O].map($=>m`<bim-option label=${$} .checked=${w===$}></bim-option>`)}
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
  `},Du=e=>{const{components:t,dataStyles:i,onTopicEnter:n}=e,o=t.get(Ge),s=e.topics??o.list.values();return m`
    <bim-table no-indentation ${G(r=>{if(!r)return;const l=r;l.hiddenColumns.length===0&&(l.hiddenColumns=["Guid"]),l.columns=["Title"],l.dataTransform={Title:(a,d)=>{const{Guid:u}=d;if(typeof u!="string")return a;const c=o.list.get(u);if(!c)return a;const h=`btn-${Z.newRandomId()}`;return m`
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
            <bim-label>${a}</bim-label>
          </div>
        `},Priority:a=>{if(typeof a!="string")return a;const d=((i==null?void 0:i.priorities)??J.priorities)[a];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ft({...Qt,...d==null?void 0:d.style})}
          >${a}
          </bim-label>
        `},Status:a=>{if(typeof a!="string")return a;const d=((i==null?void 0:i.statuses)??J.statuses)[a];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ft({...Qt,...d==null?void 0:d.style})}
          >${a}
          </bim-label>
        `},Type:a=>{if(typeof a!="string")return a;const d=((i==null?void 0:i.types)??J.types)[a];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ft({...Qt,...d==null?void 0:d.style})}
          >${a}
          </bim-label>
        `},Author:a=>typeof a!="string"?a:Jt(a,(i==null?void 0:i.users)??J.users),Assignee:a=>typeof a!="string"?a:Jt(a,(i==null?void 0:i.users)??J.users)},l.data=[...s].map(a=>{var d;return{data:{Guid:a.guid,Title:a.title,Status:a.status,Description:a.description??"",Author:a.creationAuthor,Assignee:a.assignedTo??"",Date:a.creationDate.toDateString(),DueDate:((d=a.dueDate)==null?void 0:d.toDateString())??"",Type:a.type,Priority:a.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>
  `},Br=(e,t=!0)=>{const i=z.create(Du,e);if(t){const{components:n,topics:o}=e,[,s]=i,r=n.get(Ge);if(r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),o)for(const l of o)l.relatedTopics.onItemAdded.add(()=>s()),l.relatedTopics.onItemDeleted.add(()=>s()),l.relatedTopics.onCleared.add(()=>s());else r.list.onItemSet.add(()=>s())}return i},Fu=Object.freeze(Object.defineProperty({__proto__:null,topicsList:Br},Symbol.toStringTag,{value:"Module"})),Hu=e=>{const{topic:t,styles:i,viewpoint:n}=e,o={delete:!0,...e.actions};return m`
    <bim-table no-indentation ${G(s=>{if(!s)return;const r=s;r.headersHidden=!0,r.hiddenColumns=["guid","author"],r.dataTransform={Comment:(a,d)=>{const{guid:u}=d;if(typeof u!="string")return a;const c=t.comments.get(u);if(!c)return a;const h=()=>{t.comments.delete(u)},p=`btn-${Z.newRandomId()}`;return m`
          <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; gap: 0.375rem;">
                ${Jt(c.author,i??J.users)}
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
        `}};let l=t.comments.values();n&&(l=[...t.comments.values()].filter(a=>a.viewpoint===n)),r.data=[...l].map(a=>({data:{guid:a.guid,Comment:a.comment,author:(()=>{const d=i;if(!d)return a.author;const u=d[a.author];return(u==null?void 0:u.name)??a.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label>
    </bim-table>
  `},Ur=(e,t=!0)=>{const i=z.create(Hu,e);if(t){const{topic:n}=e,[o,s]=i;n.comments.onItemSet.add(()=>s()),n.comments.onItemUpdated.add(()=>s()),n.comments.onItemDeleted.add(()=>s()),n.comments.onCleared.add(()=>s())}return i},Bu=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Ur},Symbol.toStringTag,{value:"Module"})),Uu=e=>{var t;const{components:i,topic:n}=e,o={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!n,...e.actions},s=i.get(Li),r=((t=e.topic)==null?void 0:t.viewpoints)??s.list.keys(),l=[];for(const a of r){const d=s.list.get(a);d&&l.push(d)}return m`
    <bim-table no-indentation ${G(a=>{if(!a)return;const d=a;d.addEventListener("cellcreated",({detail:u})=>{const{cell:c}=u;c.style.padding="0.25rem"}),d.headersHidden=!0,d.hiddenColumns=["Guid"],d.columns=["Title",{name:"Actions",width:"auto"}],d.dataTransform={Actions:(u,c)=>{const{Guid:h}=c;if(!(h&&typeof h=="string"))return h||"";const p=s.list.get(h);return p?m`
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
        `:h}},d.data=l.map((u,c)=>({data:{Guid:u.guid,Title:u.title??`Viewpoint ${e.topic?c+1:""}`,Actions:""}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No viewpoints to show</bim-label>
    </bim-table>
  `},Vr=(e,t=!0)=>{const i=z.create(Uu,e),{components:n,topic:o}=e;if(t){const[,s]=i,r=n.get(Li);r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),r.list.onCleared.add(()=>s()),o?(o.viewpoints.onItemAdded.add(()=>s()),o.viewpoints.onItemDeleted.add(()=>s()),o.viewpoints.onCleared.add(()=>s())):r.list.onItemSet.add(()=>s())}return i},Vu=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:Vr},Symbol.toStringTag,{value:"Module"})),Wu={...Rd,...Dd,...Bd,...ou,...cu,...yu,...Fu,...Bu,...Vu},Gu=e=>m`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${Hr(e)}
    </bim-panel-section>
  `,qu=e=>z.create(Gu,e),Yu=Object.freeze(Object.defineProperty({__proto__:null,topic:qu},Symbol.toStringTag,{value:"Module"})),Xu={...Yu},Ju=(e,t)=>{const{components:i,editing:n,topic:o,styles:s}=e,r={update:!0,...e.actions},l=(s==null?void 0:s.priorities)??J.priorities,a=(s==null?void 0:s.statuses)??J.statuses,d=(s==null?void 0:s.types)??J.types;let u;o!=null&&o.priority&&(u=l[o.priority]);let c;o!=null&&o.type&&(c=d[o.type]);let h;o!=null&&o.type&&(h=a[o.status]);let p,f;return n?p=Hr({components:i,topic:o,styles:s,onSubmit:()=>{t({editing:!1})},onCancel:()=>{t({editing:!1})}}):f=m`
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
        <bim-label .icon=${h==null?void 0:h.icon} style=${Ft({...Qt,...h==null?void 0:h.style})}
        >${o.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${c==null?void 0:c.icon} style=${Ft({...Qt,...c==null?void 0:c.style})}
        >${o.type}
        </bim-label>
      </div>

      ${o.priority?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${u==null?void 0:u.icon} style=${Ft({...Qt,...u==null?void 0:u.style})}
              >${o.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${Jt(o.creationAuthor,(s==null?void 0:s.users)??J.users)}
      </div>

      ${o.assignedTo?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${Jt(o.assignedTo,(s==null?void 0:s.users)??J.users)}
          </div>`:null}

      ${o.dueDate?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${o.modifiedAuthor?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${Jt(o.modifiedAuthor,(s==null?void 0:s.users)??J.users)}
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
  `},Qu=e=>z.create(Ju,e),Zu=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:Qu},Symbol.toStringTag,{value:"Module"})),Ku=(e,t)=>{const{showInput:i,topic:n,styles:o}=e,s={add:!0,delete:!0,...e.actions},r=`input-${Z.newRandomId()}`,l=`btn-${Z.newRandomId()}`,a=`btn-${Z.newRandomId()}`,d=()=>document.getElementById(l),u=()=>document.getElementById(r),c=()=>{const _=u();return _?_.value.trim().length>0:!1},h=()=>{t({showInput:!0})},p=()=>{const _=u(),x=c();_&&x&&(n.createComment(_.value),t({showInput:!1}))},f=()=>{t({showInput:!1})},w=()=>{const _=d();if(_){if(!u()){_.disabled=!0;return}_.disabled=!c()}},v=m`
    ${s.add?m`<bim-button @click=${h} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,b=m`
    <bim-text-input id=${r} @input=${w} @keypress=${_=>{_.code==="Enter"&&_.ctrlKey&&p()}} type="area"></bim-text-input>

    <div style="justify-content: right; display: flex; gap: 0.375rem">
      <style>
        #${l} {
          background-color: #329936;
        }  

        #${a} {
          background-color: transparent;
        }

        #${a}:hover {
          --bim-label--c: #FF5252;
        }
      </style>

      <bim-button style="flex: 0" id=${a} @click=${f} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${l} @click=${p} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[y]=Ur({topic:n,actions:s,styles:o??J.users});return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${y}
      ${i?b:v}
    </div>
  `},th=e=>z.create(Ku,e),eh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:th},Symbol.toStringTag,{value:"Module"})),ih=(e,t)=>{const{components:i,topic:n,linking:o}=e,s=i.get(Ge),r={link:!0,...e.actions},[l,a]=Br({components:i,topics:[...n.relatedTopics].map(h=>s.list.get(h)).map(h=>h)});l.headersHidden=!0,l.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const d=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${h=>{const p=h.target;p instanceof rt&&(l.queryString=p.value)}}></bim-text-input> 
    `;let u,c;if(o){l.selectableRows=!0,a({topics:void 0});const h=l.data.filter(b=>{const{Guid:y}=b.data;return typeof y!="string"?!1:n.relatedTopics.has(y)}).map(b=>b.data);l.selection=new Set(h);const p=()=>{const b=[...l.selection].map(({Guid:y})=>typeof y!="string"?null:s.list.has(y)?y:null).map(y=>y);n.relatedTopics.clear(),n.relatedTopics.add(...b),t({linking:!1})},f=()=>{t({linking:!1})},w=`btn-${Z.newRandomId()}`,v=`btn-${Z.newRandomId()}`;u=m`
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
    `}else{l.selectableRows=!1;const h=()=>{t({linking:!0})};c=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${d()}
        ${r.link?m`<bim-button style="flex: 0" @click=${h} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${c}
      ${u}
      ${l}
    </div> 
  `},nh=e=>z.create(ih,e),oh=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:nh},Symbol.toStringTag,{value:"Module"})),sh=(e,t)=>{const{components:i,topic:n,world:o,linking:s}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},l=i.get(Li),[a,d]=Vr({components:i,topic:n,actions:r}),u=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${p=>{const f=p.target;f instanceof rt&&(a.queryString=f.value)}}></bim-text-input> 
    `;let c,h;if(s){a.selectableRows=!0,d({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const p=a.data.filter(y=>{const{Guid:_}=y.data;return typeof _!="string"?!1:n.viewpoints.has(_)}).map(y=>y.data);a.selection=new Set(p);const f=()=>{const y=[...a.selection].map(({Guid:_})=>typeof _!="string"?null:l.list.has(_)?_:null).map(_=>_);n.viewpoints.clear(),n.viewpoints.add(...y),t({linking:!1})},w=()=>{t({linking:!1})},v=`btn-${Z.newRandomId()}`,b=`btn-${Z.newRandomId()}`;c=m`
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
    `}else{a.selectableRows=!1,d({topic:n,actions:r});const p=()=>{if(!(n&&o&&r.add&&!s))return;const b=l.create(o);n.viewpoints.add(b.guid)},f=()=>{t({linking:!0})},w=m`<bim-button style="flex: 0" @click=${p} .disabled=${!o} icon="mi:add"></bim-button>`,v=m`<bim-button style="flex: 0" @click=${f} icon="tabler:link"></bim-button>`;h=m`
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
      ${a}
    </div> 
  `},rh=e=>z.create(sh,e),ah=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:rh},Symbol.toStringTag,{value:"Module"})),ui={...Zu,...eh,...oh,...ah};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bi=globalThis,Wn=bi.ShadowRoot&&(bi.ShadyCSS===void 0||bi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wr=Symbol(),Vo=new WeakMap;let lh=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Wr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Wn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Vo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Vo.set(t,e))}return e}toString(){return this.cssText}};const ch=e=>new lh(typeof e=="string"?e:e+"",void 0,Wr),dh=(e,t)=>{if(Wn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=bi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},Wo=Wn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return ch(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:uh,defineProperty:hh,getOwnPropertyDescriptor:ph,getOwnPropertyNames:mh,getOwnPropertySymbols:bh,getPrototypeOf:fh}=Object,le=globalThis,Go=le.trustedTypes,gh=Go?Go.emptyScript:"",qo=le.reactiveElementPolyfillSupport,Me=(e,t)=>e,Ii={toAttribute(e,t){switch(t){case Boolean:e=e?gh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Gn=(e,t)=>!uh(e,t),Yo={attribute:!0,type:String,converter:Ii,reflect:!1,hasChanged:Gn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),le.litPropertyMetadata??(le.litPropertyMetadata=new WeakMap);class Se extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Yo){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&hh(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=ph(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const l=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Yo}static _$Ei(){if(this.hasOwnProperty(Me("elementProperties")))return;const t=fh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Me("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Me("properties"))){const i=this.properties,n=[...mh(i),...bh(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(Wo(o))}else t!==void 0&&i.push(Wo(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dh(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Ii).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Ii;this._$Em=s,this[s]=l.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Gn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},Se[Me("elementProperties")]=new Map,Se[Me("finalized")]=new Map,qo==null||qo({ReactiveElement:Se}),(le.reactiveElementVersions??(le.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vh={attribute:!0,type:String,converter:Ii,reflect:!1,hasChanged:Gn},yh=(e=vh,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,e)},init(l){return l!==void 0&&this.P(r,void 0,e),l}}}if(n==="setter"){const{name:r}=i;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+n)};function Y(e){return(t,i)=>typeof i=="object"?yh(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _h(e){return Y({...e,state:!0,attribute:!1})}class wh extends ma{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ba(.5,.5),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof Element&&i.element.parentNode!==null&&i.element.parentNode.removeChild(i.element)})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new Sn;new Pi;new Pi;new Sn;new Sn;class xh{constructor(t,i){this._group=new Jn,this._frustum=new oa,this._frustumMat=new Pi,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new sa({color:"#2e3338"}),this.numbers=new Jn,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=i;const n=this.newGrid(-1),o=this.newGrid(-2);this.grids={main:n,secondary:o},this._group.add(o,n,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:i}=this.grids;t.removeFromParent(),i.removeFromParent(),t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:i}=this._frustum,n=i[0].constant*-i[0].normal.x,o=i[1].constant*-i[1].normal.x,s=i[2].constant*-i[2].normal.y,r=i[3].constant*-i[3].normal.y,l=Math.abs(n-o),a=Math.abs(r-s),{clientWidth:d,clientHeight:u}=this._container,c=Math.max(d,u),h=Math.max(l,a)/c,p=Math.ceil(Math.log10(l/this.scaleX)),f=Math.ceil(Math.log10(a/this.scaleY)),w=10**(p-2)*this.scaleX,v=10**(f-2)*this.scaleY,b=w*this.gridsFactor,y=v*this.gridsFactor,_=Math.ceil(a/y),x=Math.ceil(l/b),A=Math.ceil(a/v),C=Math.ceil(l/w),O=w*Math.ceil(o/w),M=v*Math.ceil(s/v),S=b*Math.ceil(o/b),E=y*Math.ceil(s/y),B=[...this.numbers.children];for(const U of B)U.removeFromParent();this.numbers.children=[];const q=[],W=9*h,$=1e4,R=S+this._offsetX,V=Math.round(Math.abs(R/this.scaleX)*$)/$,tt=(x-1)*b,et=Math.round(Math.abs((R+tt)/this.scaleX)*$)/$,dt=Math.max(V,et).toString().length*W;let ye=Math.ceil(dt/b)*b;for(let U=0;U<x;U++){let D=S+U*b;q.push(D,r,0,D,s,0),D=Math.round(D*$)/$,ye=Math.round(ye*$)/$;const _e=D%ye;if(!(b<1||y<1)&&Math.abs(_e)>.01)continue;const ri=this.newNumber((D+this._offsetX)/this.scaleX),tn=12*h;ri.position.set(D,s+tn,0)}for(let U=0;U<_;U++){const D=E+U*y;q.push(o,D,0,n,D,0);const _e=this.newNumber(D/this.scaleY);let ri=12;_e.element.textContent&&(ri+=4*_e.element.textContent.length);const tn=ri*h;_e.position.set(o+tn,D,0)}const Ki=[];for(let U=0;U<C;U++){const D=O+U*w;Ki.push(D,r,0,D,s,0)}for(let U=0;U<A;U++){const D=M+U*v;Ki.push(o,D,0,n,D,0)}const Kr=new Qn(new Float32Array(q),3),ta=new Qn(new Float32Array(Ki),3),{main:ea,secondary:ia}=this.grids;ea.geometry.setAttribute("position",Kr),ia.geometry.setAttribute("position",ta)}newNumber(t){const i=document.createElement("bim-label");i.textContent=String(Math.round(t*100)/100);const n=new wh(i);return this.numbers.add(n),n}newGrid(t){const i=new ra,n=new aa(i,this.material);return n.frustumCulled=!1,n.renderOrder=t,n}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let i=0;i<t.length;i++){const n=t[i];if(Number.isNaN(n))return!1}return!0}}var $h=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,oi=(e,t,i,n)=>{for(var o=Ch(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&$h(t,i,o),o};const Gr=class extends I{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const i=Number(t.replace("#","0x"));Number.isNaN(i)||this._grid.material.color.setHex(i)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(We).create();this._world=i,i.scene=new kn(t),i.scene.setup(),i.renderer=new na(t,this);const n=new Xo(t);i.camera=n;const o=new xh(n.threeOrtho,this);this._grid=o,i.scene.three.add(o.get()),n.controls.addEventListener("update",()=>o.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),n.set("Plan"),await n.controls.setLookAt(0,0,100,0,0,0),await n.projection.set("Orthographic"),n.controls.dollySpeed=3,n.controls.draggingSmoothTime=.085,n.controls.maxZoom=1e3,n.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return m`<slot></slot>`}};Gr.styles=T`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let si=Gr;oi([Y({type:String,attribute:"grid-color",reflect:!0})],si.prototype,"gridColor");oi([Y({type:Number,attribute:"grid-scale-x",reflect:!0})],si.prototype,"gridScaleX");oi([Y({type:Number,attribute:"grid-scale-y",reflect:!0})],si.prototype,"gridScaleY");oi([Y({type:Number,attribute:"grid-offset-x",reflect:!0})],si.prototype,"gridOffsetX");oi([Y({type:Number,attribute:"grid-offset-y",reflect:!0})],si.prototype,"gridOffsetY");var Ah=Object.defineProperty,Nt=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Ah(t,i,o),o};const qr=class extends I{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new Pi,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}};qr.styles=T`
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
  `;let Mt=qr;Nt([Y({type:Number,reflect:!0})],Mt.prototype,"size");Nt([Y({type:String,attribute:"right-text",reflect:!0})],Mt.prototype,"rightText");Nt([Y({type:String,attribute:"left-text",reflect:!0})],Mt.prototype,"leftText");Nt([Y({type:String,attribute:"top-text",reflect:!0})],Mt.prototype,"topText");Nt([Y({type:String,attribute:"bottom-text",reflect:!0})],Mt.prototype,"bottomText");Nt([Y({type:String,attribute:"front-text",reflect:!0})],Mt.prototype,"frontText");Nt([Y({type:String,attribute:"back-text",reflect:!0})],Mt.prototype,"backText");Nt([_h()],Mt.prototype,"_cssMatrix3D");var Eh=Object.defineProperty,Sh=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Eh(t,i,o),o};const Yr=class extends I{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=En()}set components(t){var i;if(this._components=t,this.components){const n=this.components.get(We);this.world=n.create(),this.world.name=this.name}else(i=this.world)==null||i.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const i=new kn(this.components);this.world.scene=i,i.setup(),i.three.background=null;const n=new P(this.components,t);this.world.renderer=n;const{postproduction:o}=n,s=new Xo(this.components);this.world.camera=s;const r=this.components.get(Tn).create(this.world);r.material.uniforms.uColor.value=new ce(4342338),r.material.uniforms.uSize1.value=2,r.material.uniforms.uSize2.value=8,o.enabled=!0,o.customEffects.excludedMeshes.push(r.three),o.setPasses({custom:!0,ao:!0,gamma:!0}),o.customEffects.lineColor=1513756}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return m` <bim-viewport ${ju(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};Yr.styles=T``;let kh=Yr;Sh([Y({type:String,reflect:!0})],kh.prototype,"name");$a.init();const qn=document.createElement("bim-viewport"),at=new Ca,Th=at.get(We),Yt=Th.create(),Xr=new kn(at);Xr.setup();Yt.scene=Xr;const Jr=new Aa(at,qn);Yt.renderer=Jr;const Yn=new Ea(at);Yt.camera=Yn;Yn.controls.setLookAt(10,5.5,5,-4,-1,-6.5);qn.addEventListener("resize",()=>{Jr.resize(),Yn.updateAspect()});at.init();const Oh=at.get(Tn);Oh.create(Yt);const Qr=at.get(Jo);await Qr.setup();const Ih=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),Nh=await Ih.arrayBuffer(),Mh=new Uint8Array(Nh),Ph=await Qr.load(Mh);Yt.scene.three.add(Ph);const Zi={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},Zt=at.get(Ge);Zt.setup({users:new Set(Object.keys(Zi)),labels:new Set(["Architecture","Structure","MEP"])});const Lh=at.get(Li);Zt.list.onItemSet.add(({value:e})=>{const t=Lh.create(Yt);e.viewpoints.add(t.guid)});const[Ni,Rh]=Wu.topicsList({components:at,dataStyles:{users:Zi}});Ni.selectableRows=!0;const[jh,zh]=Xu.topic({components:at,styles:{users:Zi}}),Mi=qe.create(()=>m`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${jh}
     </bim-panel> 
    </dialog>
  `);document.body.append(Mi);const Dh=qe.create(()=>m`
    <bim-button style="flex: 0" @click=${()=>{Mi.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);zh({onCancel:()=>{Mi.close()},onSubmit:()=>{Mi.close()}});const[Fh,Zr]=qe.create(e=>{const{components:t,topic:i,world:n,actions:o,styles:s}=e;let r,l;if(i){const[a]=ui.topicInformation({components:t,topic:i,actions:o==null?void 0:o.information,styles:s}),[d]=ui.topicViewpoints({components:t,topic:i,world:n,actions:o==null?void 0:o.viewpoints}),[u]=ui.topicRelations({components:t,topic:i,actions:o==null?void 0:o.relatedTopics}),[c]=ui.topicComments({topic:i,actions:o==null?void 0:o.comments,styles:s==null?void 0:s.users}),h=()=>{window.alert(`An email will be sent to ${i.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=m`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${a}
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
          ${i.assignedTo?m`
                <bim-button @click=${h} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `:m`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `}
        </bim-panel-section>
      `}else l=m`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${i?null:m`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return m`
      <bim-panel>
        ${l}
        ${r}
      </bim-panel> 
    `},{components:at,world:Yt,styles:{users:Zi}});Zt.list.onItemUpdated.add(()=>Zr());Rh({onTopicEnter:e=>{Zr({topic:e})}});const Hh=qe.create(()=>m`<bim-button style="flex: 0" @click=${async()=>{const t=[...Ni.selection].map(({Guid:r})=>r&&typeof r=="string"?Zt.list.get(r):null).filter(r=>r),i=t.length>0?t:[...Zt.list.values()];if(i.length===0)return;const n=await Zt.export(i),o=new File([n],"topics.bcf"),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=o.name,s.click(),URL.revokeObjectURL(s.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),Bh=qe.create(()=>m`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${t=>{const i=t.target;Ni.queryString=i.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${Dh}
            ${Hh}
          </div> 
        </div> 
        ${Ni}
      </bim-panel-section>
    </bim-panel>
  `),Xn=document.createElement("bim-grid");Xn.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,elements:{bcfPanel:Bh,viewport:qn,customTopicPanel:Fh}}};Xn.layout="main";document.body.append(Xn);
