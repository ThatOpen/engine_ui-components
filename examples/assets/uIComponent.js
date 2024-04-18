var Nn=Object.defineProperty;var Hn=(i,e,t)=>e in i?Nn(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var u=(i,e,t)=>(Hn(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const ut=Math.min,V=Math.max,Ft=Math.round,Q=i=>({x:i,y:i}),jn={left:"right",right:"left",bottom:"top",top:"bottom"},Dn={start:"end",end:"start"};function ri(i,e,t){return V(i,ut(e,t))}function Rt(i,e){return typeof i=="function"?i(e):i}function U(i){return i.split("-")[0]}function ee(i){return i.split("-")[1]}function Di(i){return i==="x"?"y":"x"}function Vi(i){return i==="y"?"height":"width"}function Pt(i){return["top","bottom"].includes(U(i))?"y":"x"}function Ui(i){return Di(Pt(i))}function Vn(i,e,t){t===void 0&&(t=!1);const n=ee(i),s=Ui(i),o=Vi(s);let r=s==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[o]>e.floating[o]&&(r=Wt(r)),[r,Wt(r)]}function Un(i){const e=Wt(i);return[ge(i),e,ge(e)]}function ge(i){return i.replace(/start|end/g,e=>Dn[e])}function Fn(i,e,t){const n=["left","right"],s=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(i){case"top":case"bottom":return t?e?s:n:e?n:s;case"left":case"right":return e?o:r;default:return[]}}function Wn(i,e,t,n){const s=ee(i);let o=Fn(U(i),t==="start",n);return s&&(o=o.map(r=>r+"-"+s),e&&(o=o.concat(o.map(ge)))),o}function Wt(i){return i.replace(/left|right|bottom|top/g,e=>jn[e])}function qn(i){return{top:0,right:0,bottom:0,left:0,...i}}function Fi(i){return typeof i!="number"?qn(i):{top:i,right:i,bottom:i,left:i}}function ht(i){return{...i,top:i.y,left:i.x,right:i.x+i.width,bottom:i.y+i.height}}function li(i,e,t){let{reference:n,floating:s}=i;const o=Pt(e),r=Ui(e),a=Vi(r),l=U(e),c=o==="y",h=n.x+n.width/2-s.width/2,d=n.y+n.height/2-s.height/2,f=n[a]/2-s[a]/2;let b;switch(l){case"top":b={x:h,y:n.y-s.height};break;case"bottom":b={x:h,y:n.y+n.height};break;case"right":b={x:n.x+n.width,y:d};break;case"left":b={x:n.x-s.width,y:d};break;default:b={x:n.x,y:n.y}}switch(ee(e)){case"start":b[r]-=f*(t&&c?-1:1);break;case"end":b[r]+=f*(t&&c?-1:1);break}return b}const Yn=async(i,e,t)=>{const{placement:n="bottom",strategy:s="absolute",middleware:o=[],platform:r}=t,a=o.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:i,floating:e,strategy:s}),{x:h,y:d}=li(c,n,l),f=n,b={},m=0;for(let v=0;v<a.length;v++){const{name:g,fn:E}=a[v],{x:A,y:_,data:$,reset:S}=await E({x:h,y:d,initialPlacement:n,placement:f,strategy:s,middlewareData:b,rects:c,platform:r,elements:{reference:i,floating:e}});h=A??h,d=_??d,b={...b,[g]:{...b[g],...$}},S&&m<=50&&(m++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await r.getElementRects({reference:i,floating:e,strategy:s}):S.rects),{x:h,y:d}=li(c,f,l)),v=-1)}return{x:h,y:d,placement:f,strategy:s,middlewareData:b}};async function Wi(i,e){var t;e===void 0&&(e={});const{x:n,y:s,platform:o,rects:r,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:f=!1,padding:b=0}=Rt(e,i),m=Fi(b),g=a[f?d==="floating"?"reference":"floating":d],E=ht(await o.getClippingRect({element:(t=await(o.isElement==null?void 0:o.isElement(g)))==null||t?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),A=d==="floating"?{...r.floating,x:n,y:s}:r.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),$=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},S=ht(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:A,offsetParent:_,strategy:l}):A);return{top:(E.top-S.top+m.top)/$.y,bottom:(S.bottom-E.bottom+m.bottom)/$.y,left:(E.left-S.left+m.left)/$.x,right:(S.right-E.right+m.right)/$.x}}const Qn=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(e){var t,n;const{placement:s,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...g}=Rt(i,e);if((t=o.arrow)!=null&&t.alignmentOffset)return{};const E=U(s),A=U(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),$=f||(A||!v?[Wt(a)]:Un(a));!f&&m!=="none"&&$.push(...Wn(a,v,m,_));const S=[a,...$],y=await Wi(e,g),T=[];let z=((n=o.flip)==null?void 0:n.overflows)||[];if(h&&T.push(y[E]),d){const B=Vn(s,r,_);T.push(y[B[0]],y[B[1]])}if(z=[...z,{placement:s,overflows:T}],!T.every(B=>B<=0)){var H,k;const B=(((H=o.flip)==null?void 0:H.index)||0)+1,rt=S[B];if(rt)return{data:{index:B,overflows:z},reset:{placement:rt}};let W=(k=z.filter(M=>M.overflows[0]<=0).sort((M,j)=>M.overflows[1]-j.overflows[1])[0])==null?void 0:k.placement;if(!W)switch(b){case"bestFit":{var ot;const M=(ot=z.map(j=>[j.placement,j.overflows.filter(Z=>Z>0).reduce((Z,le)=>Z+le,0)]).sort((j,Z)=>j[1]-Z[1])[0])==null?void 0:ot[0];M&&(W=M);break}case"initialPlacement":W=a;break}if(s!==W)return{reset:{placement:W}}}return{}}}};function qi(i){const e=ut(...i.map(o=>o.left)),t=ut(...i.map(o=>o.top)),n=V(...i.map(o=>o.right)),s=V(...i.map(o=>o.bottom));return{x:e,y:t,width:n-e,height:s-t}}function Gn(i){const e=i.slice().sort((s,o)=>s.y-o.y),t=[];let n=null;for(let s=0;s<e.length;s++){const o=e[s];!n||o.y-n.y>n.height/2?t.push([o]):t[t.length-1].push(o),n=o}return t.map(s=>ht(qi(s)))}const Xn=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(e){const{placement:t,elements:n,rects:s,platform:o,strategy:r}=e,{padding:a=2,x:l,y:c}=Rt(i,e),h=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(n.reference))||[]),d=Gn(h),f=ht(qi(h)),b=Fi(a);function m(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(g=>l>g.left-b.left&&l<g.right+b.right&&c>g.top-b.top&&c<g.bottom+b.bottom)||f;if(d.length>=2){if(Pt(t)==="y"){const k=d[0],ot=d[d.length-1],B=U(t)==="top",rt=k.top,W=ot.bottom,M=B?k.left:ot.left,j=B?k.right:ot.right,Z=j-M,le=W-rt;return{top:rt,bottom:W,left:M,right:j,width:Z,height:le,x:M,y:rt}}const g=U(t)==="left",E=V(...d.map(k=>k.right)),A=ut(...d.map(k=>k.left)),_=d.filter(k=>g?k.left===A:k.right===E),$=_[0].top,S=_[_.length-1].bottom,y=A,T=E,z=T-y,H=S-$;return{top:$,bottom:S,left:y,right:T,width:z,height:H,x:y,y:$}}return f}const v=await o.getElementRects({reference:{getBoundingClientRect:m},floating:n.floating,strategy:r});return s.reference.x!==v.reference.x||s.reference.y!==v.reference.y||s.reference.width!==v.reference.width||s.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function Kn(i,e){const{placement:t,platform:n,elements:s}=i,o=await(n.isRTL==null?void 0:n.isRTL(s.floating)),r=U(t),a=ee(t),l=Pt(t)==="y",c=["left","top"].includes(r)?-1:1,h=o&&l?-1:1,d=Rt(e,i);let{mainAxis:f,crossAxis:b,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof m=="number"&&(b=a==="end"?m*-1:m),l?{x:b*h,y:f*c}:{x:f*c,y:b*h}}const Yi=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(e){var t,n;const{x:s,y:o,placement:r,middlewareData:a}=e,l=await Kn(e,i);return r===((t=a.offset)==null?void 0:t.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:s+l.x,y:o+l.y,data:{...l,placement:r}}}}},Jn=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(e){const{x:t,y:n,placement:s}=e,{mainAxis:o=!0,crossAxis:r=!1,limiter:a={fn:g=>{let{x:E,y:A}=g;return{x:E,y:A}}},...l}=Rt(i,e),c={x:t,y:n},h=await Wi(e,l),d=Pt(U(s)),f=Di(d);let b=c[f],m=c[d];if(o){const g=f==="y"?"top":"left",E=f==="y"?"bottom":"right",A=b+h[g],_=b-h[E];b=ri(A,b,_)}if(r){const g=d==="y"?"top":"left",E=d==="y"?"bottom":"right",A=m+h[g],_=m-h[E];m=ri(A,m,_)}const v=a.fn({...e,[f]:b,[d]:m});return{...v,data:{x:v.x-t,y:v.y-n}}}}};function G(i){return Qi(i)?(i.nodeName||"").toLowerCase():"#document"}function I(i){var e;return(i==null||(e=i.ownerDocument)==null?void 0:e.defaultView)||window}function K(i){var e;return(e=(Qi(i)?i.ownerDocument:i.document)||window.document)==null?void 0:e.documentElement}function Qi(i){return i instanceof Node||i instanceof I(i).Node}function F(i){return i instanceof Element||i instanceof I(i).Element}function N(i){return i instanceof HTMLElement||i instanceof I(i).HTMLElement}function ai(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof I(i).ShadowRoot}function Bt(i){const{overflow:e,overflowX:t,overflowY:n,display:s}=P(i);return/auto|scroll|overlay|hidden|clip/.test(e+n+t)&&!["inline","contents"].includes(s)}function Zn(i){return["table","td","th"].includes(G(i))}function Xe(i){const e=Ke(),t=P(i);return t.transform!=="none"||t.perspective!=="none"||(t.containerType?t.containerType!=="normal":!1)||!e&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!e&&(t.filter?t.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(t.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(t.contain||"").includes(n))}function ts(i){let e=dt(i);for(;N(e)&&!ie(e);){if(Xe(e))return e;e=dt(e)}return null}function Ke(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ie(i){return["html","body","#document"].includes(G(i))}function P(i){return I(i).getComputedStyle(i)}function ne(i){return F(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function dt(i){if(G(i)==="html")return i;const e=i.assignedSlot||i.parentNode||ai(i)&&i.host||K(i);return ai(e)?e.host:e}function Gi(i){const e=dt(i);return ie(e)?i.ownerDocument?i.ownerDocument.body:i.body:N(e)&&Bt(e)?e:Gi(e)}function ve(i,e,t){var n;e===void 0&&(e=[]),t===void 0&&(t=!0);const s=Gi(i),o=s===((n=i.ownerDocument)==null?void 0:n.body),r=I(s);return o?e.concat(r,r.visualViewport||[],Bt(s)?s:[],r.frameElement&&t?ve(r.frameElement):[]):e.concat(s,ve(s,[],t))}function Xi(i){const e=P(i);let t=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const s=N(i),o=s?i.offsetWidth:t,r=s?i.offsetHeight:n,a=Ft(t)!==o||Ft(n)!==r;return a&&(t=o,n=r),{width:t,height:n,$:a}}function Ki(i){return F(i)?i:i.contextElement}function at(i){const e=Ki(i);if(!N(e))return Q(1);const t=e.getBoundingClientRect(),{width:n,height:s,$:o}=Xi(e);let r=(o?Ft(t.width):t.width)/n,a=(o?Ft(t.height):t.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const es=Q(0);function Ji(i){const e=I(i);return!Ke()||!e.visualViewport?es:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function is(i,e,t){return e===void 0&&(e=!1),!t||e&&t!==I(i)?!1:e}function Et(i,e,t,n){e===void 0&&(e=!1),t===void 0&&(t=!1);const s=i.getBoundingClientRect(),o=Ki(i);let r=Q(1);e&&(n?F(n)&&(r=at(n)):r=at(i));const a=is(o,t,n)?Ji(o):Q(0);let l=(s.left+a.x)/r.x,c=(s.top+a.y)/r.y,h=s.width/r.x,d=s.height/r.y;if(o){const f=I(o),b=n&&F(n)?I(n):n;let m=f,v=m.frameElement;for(;v&&n&&b!==m;){const g=at(v),E=v.getBoundingClientRect(),A=P(v),_=E.left+(v.clientLeft+parseFloat(A.paddingLeft))*g.x,$=E.top+(v.clientTop+parseFloat(A.paddingTop))*g.y;l*=g.x,c*=g.y,h*=g.x,d*=g.y,l+=_,c+=$,m=I(v),v=m.frameElement}}return ht({width:h,height:d,x:l,y:c})}const ns=[":popover-open",":modal"];function Zi(i){return ns.some(e=>{try{return i.matches(e)}catch{return!1}})}function ss(i){let{elements:e,rect:t,offsetParent:n,strategy:s}=i;const o=s==="fixed",r=K(n),a=e?Zi(e.floating):!1;if(n===r||a&&o)return t;let l={scrollLeft:0,scrollTop:0},c=Q(1);const h=Q(0),d=N(n);if((d||!d&&!o)&&((G(n)!=="body"||Bt(r))&&(l=ne(n)),N(n))){const f=Et(n);c=at(n),h.x=f.x+n.clientLeft,h.y=f.y+n.clientTop}return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-l.scrollLeft*c.x+h.x,y:t.y*c.y-l.scrollTop*c.y+h.y}}function os(i){return Array.from(i.getClientRects())}function tn(i){return Et(K(i)).left+ne(i).scrollLeft}function rs(i){const e=K(i),t=ne(i),n=i.ownerDocument.body,s=V(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),o=V(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-t.scrollLeft+tn(i);const a=-t.scrollTop;return P(n).direction==="rtl"&&(r+=V(e.clientWidth,n.clientWidth)-s),{width:s,height:o,x:r,y:a}}function ls(i,e){const t=I(i),n=K(i),s=t.visualViewport;let o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;const c=Ke();(!c||c&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a,y:l}}function as(i,e){const t=Et(i,!0,e==="fixed"),n=t.top+i.clientTop,s=t.left+i.clientLeft,o=N(i)?at(i):Q(1),r=i.clientWidth*o.x,a=i.clientHeight*o.y,l=s*o.x,c=n*o.y;return{width:r,height:a,x:l,y:c}}function ci(i,e,t){let n;if(e==="viewport")n=ls(i,t);else if(e==="document")n=rs(K(i));else if(F(e))n=as(e,t);else{const s=Ji(i);n={...e,x:e.x-s.x,y:e.y-s.y}}return ht(n)}function en(i,e){const t=dt(i);return t===e||!F(t)||ie(t)?!1:P(t).position==="fixed"||en(t,e)}function cs(i,e){const t=e.get(i);if(t)return t;let n=ve(i,[],!1).filter(a=>F(a)&&G(a)!=="body"),s=null;const o=P(i).position==="fixed";let r=o?dt(i):i;for(;F(r)&&!ie(r);){const a=P(r),l=Xe(r);!l&&a.position==="fixed"&&(s=null),(o?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Bt(r)&&!l&&en(i,r))?n=n.filter(h=>h!==r):s=a,r=dt(r)}return e.set(i,n),n}function us(i){let{element:e,boundary:t,rootBoundary:n,strategy:s}=i;const r=[...t==="clippingAncestors"?cs(e,this._c):[].concat(t),n],a=r[0],l=r.reduce((c,h)=>{const d=ci(e,h,s);return c.top=V(d.top,c.top),c.right=ut(d.right,c.right),c.bottom=ut(d.bottom,c.bottom),c.left=V(d.left,c.left),c},ci(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hs(i){const{width:e,height:t}=Xi(i);return{width:e,height:t}}function ds(i,e,t){const n=N(e),s=K(e),o=t==="fixed",r=Et(i,!0,o,e);let a={scrollLeft:0,scrollTop:0};const l=Q(0);if(n||!n&&!o)if((G(e)!=="body"||Bt(s))&&(a=ne(e)),n){const d=Et(e,!0,o,e);l.x=d.x+e.clientLeft,l.y=d.y+e.clientTop}else s&&(l.x=tn(s));const c=r.left+a.scrollLeft-l.x,h=r.top+a.scrollTop-l.y;return{x:c,y:h,width:r.width,height:r.height}}function ui(i,e){return!N(i)||P(i).position==="fixed"?null:e?e(i):i.offsetParent}function nn(i,e){const t=I(i);if(!N(i)||Zi(i))return t;let n=ui(i,e);for(;n&&Zn(n)&&P(n).position==="static";)n=ui(n,e);return n&&(G(n)==="html"||G(n)==="body"&&P(n).position==="static"&&!Xe(n))?t:n||ts(i)||t}const fs=async function(i){const e=this.getOffsetParent||nn,t=this.getDimensions;return{reference:ds(i.reference,await e(i.floating),i.strategy),floating:{x:0,y:0,...await t(i.floating)}}};function ps(i){return P(i).direction==="rtl"}const bs={convertOffsetParentRelativeRectToViewportRelativeRect:ss,getDocumentElement:K,getClippingRect:us,getOffsetParent:nn,getElementRects:fs,getClientRects:os,getDimensions:hs,getScale:at,isElement:F,isRTL:ps},sn=Jn,on=Qn,rn=Xn,ln=(i,e,t)=>{const n=new Map,s={platform:bs,...t},o={...s.platform,_c:n};return Yn(i,e,{...s,platform:o})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis,Je=Dt.ShadowRoot&&(Dt.ShadyCSS===void 0||Dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol(),hi=new WeakMap;let an=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Je&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=hi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&hi.set(t,e))}return e}toString(){return this.cssText}};const ms=i=>new an(typeof i=="string"?i:i+"",void 0,Ze),C=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new an(t,i,Ze)},gs=(i,e)=>{if(Je)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),s=Dt.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)}},di=Je?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return ms(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vs,defineProperty:ys,getOwnPropertyDescriptor:xs,getOwnPropertyNames:_s,getOwnPropertySymbols:ws,getPrototypeOf:$s}=Object,Y=globalThis,fi=Y.trustedTypes,Cs=fi?fi.emptyScript:"",ae=Y.reactiveElementPolyfillSupport,gt=(i,e)=>i,ye={toAttribute(i,e){switch(e){case Boolean:i=i?Cs:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},cn=(i,e)=>!vs(i,e),pi={attribute:!0,type:String,converter:ye,reflect:!1,hasChanged:cn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Y.litPropertyMetadata??(Y.litPropertyMetadata=new WeakMap);class lt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pi){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&ys(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){const{get:s,set:o}=xs(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const a=s==null?void 0:s.call(this);o.call(this,r),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pi}static _$Ei(){if(this.hasOwnProperty(gt("elementProperties")))return;const e=$s(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gt("properties"))){const t=this.properties,n=[..._s(t),...ws(t)];for(const s of n)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(di(s))}else e!==void 0&&t.push(di(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var o;const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const r=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:ye).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(e,t){var o;const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const r=n.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:ye;this._$Em=s,this[s]=a.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??cn)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},lt[gt("elementProperties")]=new Map,lt[gt("finalized")]=new Map,ae==null||ae({ReactiveElement:lt}),(Y.reactiveElementVersions??(Y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=globalThis,qt=vt.trustedTypes,bi=qt?qt.createPolicy("lit-html",{createHTML:i=>i}):void 0,un="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,hn="?"+q,As=`<${hn}>`,st=document,St=()=>st.createComment(""),kt=i=>i===null||typeof i!="object"&&typeof i!="function",dn=Array.isArray,Es=i=>dn(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ce=`[ 	
\f\r]`,bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mi=/-->/g,gi=/>/g,tt=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vi=/'/g,yi=/"/g,fn=/^(?:script|style|textarea|title)$/i,Ss=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=Ss(1),ft=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),xi=new WeakMap,it=st.createTreeWalker(st,129);function pn(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return bi!==void 0?bi.createHTML(e):e}const ks=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":"",r=bt;for(let a=0;a<t;a++){const l=i[a];let c,h,d=-1,f=0;for(;f<l.length&&(r.lastIndex=f,h=r.exec(l),h!==null);)f=r.lastIndex,r===bt?h[1]==="!--"?r=mi:h[1]!==void 0?r=gi:h[2]!==void 0?(fn.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=tt):h[3]!==void 0&&(r=tt):r===tt?h[0]===">"?(r=s??bt,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,c=h[1],r=h[3]===void 0?tt:h[3]==='"'?yi:vi):r===yi||r===vi?r=tt:r===mi||r===gi?r=bt:(r=tt,s=void 0);const b=r===tt&&i[a+1].startsWith("/>")?" ":"";o+=r===bt?l+As:d>=0?(n.push(c),l.slice(0,d)+un+l.slice(d)+q+b):l+q+(d===-2?a:b)}return[pn(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class Tt{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,r=0;const a=e.length-1,l=this.parts,[c,h]=ks(e,t);if(this.el=Tt.createElement(c,n),it.currentNode=this.el.content,t===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=it.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(un)){const f=h[r++],b=s.getAttribute(d).split(q),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:m[2],strings:b,ctor:m[1]==="."?Os:m[1]==="?"?zs:m[1]==="@"?Is:se}),s.removeAttribute(d)}else d.startsWith(q)&&(l.push({type:6,index:o}),s.removeAttribute(d));if(fn.test(s.tagName)){const d=s.textContent.split(q),f=d.length-1;if(f>0){s.textContent=qt?qt.emptyScript:"";for(let b=0;b<f;b++)s.append(d[b],St()),it.nextNode(),l.push({type:2,index:++o});s.append(d[f],St())}}}else if(s.nodeType===8)if(s.data===hn)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(q,d+1))!==-1;)l.push({type:7,index:o}),d+=q.length-1}o++}}static createElement(e,t){const n=st.createElement("template");return n.innerHTML=e,n}}function pt(i,e,t=i,n){var r,a;if(e===ft)return e;let s=n!==void 0?(r=t._$Co)==null?void 0:r[n]:t._$Cl;const o=kt(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=s:t._$Cl=s),s!==void 0&&(e=pt(i,s._$AS(i,e.values),s,n)),e}class Ts{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,s=((e==null?void 0:e.creationScope)??st).importNode(t,!0);it.currentNode=s;let o=it.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new Mt(o,o.nextSibling,this,e):l.type===1?c=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(c=new Ls(o,this,e)),this._$AV.push(c),l=n[++a]}r!==(l==null?void 0:l.index)&&(o=it.nextNode(),r++)}return it.currentNode=st,s}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Mt{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pt(this,e,t),kt(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==ft&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Es(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==O&&kt(this._$AH)?this._$AA.nextSibling.data=e:this.T(st.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Tt.createElement(pn(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const r=new Ts(s,this),a=r.u(this.options);r.p(t),this.T(a),this._$AH=r}}_$AC(e){let t=xi.get(e.strings);return t===void 0&&xi.set(e.strings,t=new Tt(e)),t}k(e){dn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new Mt(this.S(St()),this.S(St()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=O}_$AI(e,t=this,n,s){const o=this.strings;let r=!1;if(o===void 0)e=pt(this,e,t,0),r=!kt(e)||e!==this._$AH&&e!==ft,r&&(this._$AH=e);else{const a=e;let l,c;for(e=o[0],l=0;l<o.length-1;l++)c=pt(this,a[n+l],t,l),c===ft&&(c=this._$AH[l]),r||(r=!kt(c)||c!==this._$AH[l]),c===O?e=O:e!==O&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Os extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}}class zs extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}}class Is extends se{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){if((e=pt(this,e,t,0)??O)===ft)return;const n=this._$AH,s=e===O&&n!==O||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==O&&(n===O||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ls{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){pt(this,e)}}const ue=vt.litHtmlPolyfillSupport;ue==null||ue(Tt,Mt),(vt.litHtmlVersions??(vt.litHtmlVersions=[])).push("3.1.2");const xe=(i,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let s=n._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;n._$litPart$=s=new Mt(e.insertBefore(St(),o),o,void 0,t??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yt=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ft}};var ji;yt._$litElement$=!0,yt.finalized=!0,(ji=globalThis.litElementHydrateSupport)==null||ji.call(globalThis,{LitElement:yt});const he=globalThis.litElementPolyfillSupport;he==null||he({LitElement:yt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rs=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bs=i=>(...e)=>({_$litDirective$:i,values:e});class Ms{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=(i,e)=>{var n;const t=i._$AN;if(t===void 0)return!1;for(const s of t)(n=s._$AO)==null||n.call(s,e,!1),xt(s,e);return!0},Yt=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while((t==null?void 0:t.size)===0)},bn=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),js(e)}};function Ns(i){this._$AN!==void 0?(Yt(this),this._$AM=i,bn(this)):this._$AM=i}function Hs(i,e=!1,t=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)xt(n[o],!1),Yt(n[o]);else n!=null&&(xt(n,!1),Yt(n));else xt(this,i)}const js=i=>{i.type==Ps.CHILD&&(i._$AP??(i._$AP=Hs),i._$AQ??(i._$AQ=Ns))};class Ds extends Ms{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),bn(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,s;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(s=this.disconnected)==null||s.call(this)),t&&(xt(this,e),Yt(this))}setValue(e){if(Rs(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=()=>new Vs;class Vs{}const de=new WeakMap,R=Bs(class extends Ds{render(i){return O}update(i,[e]){var n;const t=e!==this.Y;return t&&this.Y!==void 0&&this.rt(void 0),(t||this.lt!==this.ct)&&(this.Y=e,this.ht=(n=i.options)==null?void 0:n.host,this.rt(this.ct=i.element)),O}rt(i){if(typeof this.Y=="function"){const e=this.ht??globalThis;let t=de.get(e);t===void 0&&(t=new WeakMap,de.set(e,t)),t.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),t.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,e;return typeof this.Y=="function"?(i=de.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class w extends yt{constructor(){super(...arguments);u(this,"_lazyLoadObserver",null);u(this,"_visibleElements",[]);u(this,"ELEMENTS_BEFORE_OBSERVER",20);u(this,"useObserver",!1);u(this,"elements",new Set);u(this,"observe",t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const n=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of n)s.remove();this.observeLastElement()})}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(n=>{const s=n[0];if(!s.isIntersecting)return;const o=s.target;t.unobserve(o);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,a=[...this.elements][r];a&&(this.visibleElements=[...this.visibleElements,a],t.observe(a))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const n=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][n];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const n of this.elements)t.unobserve(n);this.visibleElements=[],this.observeLastElement()}}static create(t,n){const s=document.createDocumentFragment();if(t.length===0)return xe(t(),s),s.firstElementChild;if(!n)throw new Error("UIComponent: Initial state is required for statefull components.");let o=n;const r=t,a=c=>(o={...o,...c},xe(r(o),s),o);return a(n),[s.firstElementChild,a]}}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const mn=Object.freeze({left:0,top:0,width:16,height:16}),Qt=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Nt=Object.freeze({...mn,...Qt}),_e=Object.freeze({...Nt,body:"",hidden:!1}),Us=Object.freeze({width:null,height:null}),gn=Object.freeze({...Us,...Qt});function Fs(i,e=0){const t=i.replace(/^-?[0-9.]*/,"");function n(s){for(;s<0;)s+=4;return s%4}if(t===""){const s=parseInt(i);return isNaN(s)?0:n(s)}else if(t!==i){let s=0;switch(t){case"%":s=25;break;case"deg":s=90}if(s){let o=parseFloat(i.slice(0,i.length-t.length));return isNaN(o)?0:(o=o/s,o%1===0?n(o):0)}}return e}const Ws=/[\s,]+/;function qs(i,e){e.split(Ws).forEach(t=>{switch(t.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const vn={...gn,preserveAspectRatio:""};function _i(i){const e={...vn},t=(n,s)=>i.getAttribute(n)||s;return e.width=t("width",null),e.height=t("height",null),e.rotate=Fs(t("rotate","")),qs(e,t("flip","")),e.preserveAspectRatio=t("preserveAspectRatio",t("preserveaspectratio","")),e}function Ys(i,e){for(const t in vn)if(i[t]!==e[t])return!0;return!1}const _t=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ht=(i,e,t,n="")=>{const s=i.split(":");if(i.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;n=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),l=s.pop(),c={provider:s.length>0?s[0]:n,prefix:l,name:a};return e&&!Vt(c)?null:c}const o=s[0],r=o.split("-");if(r.length>1){const a={provider:n,prefix:r.shift(),name:r.join("-")};return e&&!Vt(a)?null:a}if(t&&n===""){const a={provider:n,prefix:"",name:o};return e&&!Vt(a,t)?null:a}return null},Vt=(i,e)=>i?!!((i.provider===""||i.provider.match(_t))&&(e&&i.prefix===""||i.prefix.match(_t))&&i.name.match(_t)):!1;function Qs(i,e){const t={};!i.hFlip!=!e.hFlip&&(t.hFlip=!0),!i.vFlip!=!e.vFlip&&(t.vFlip=!0);const n=((i.rotate||0)+(e.rotate||0))%4;return n&&(t.rotate=n),t}function wi(i,e){const t=Qs(i,e);for(const n in _e)n in Qt?n in i&&!(n in t)&&(t[n]=Qt[n]):n in e?t[n]=e[n]:n in i&&(t[n]=i[n]);return t}function Gs(i,e){const t=i.icons,n=i.aliases||Object.create(null),s=Object.create(null);function o(r){if(t[r])return s[r]=[];if(!(r in s)){s[r]=null;const a=n[r]&&n[r].parent,l=a&&o(a);l&&(s[r]=[a].concat(l))}return s[r]}return(e||Object.keys(t).concat(Object.keys(n))).forEach(o),s}function Xs(i,e,t){const n=i.icons,s=i.aliases||Object.create(null);let o={};function r(a){o=wi(n[a]||s[a],o)}return r(e),t.forEach(r),wi(i,o)}function yn(i,e){const t=[];if(typeof i!="object"||typeof i.icons!="object")return t;i.not_found instanceof Array&&i.not_found.forEach(s=>{e(s,null),t.push(s)});const n=Gs(i);for(const s in n){const o=n[s];o&&(e(s,Xs(i,s,o)),t.push(s))}return t}const Ks={provider:"",aliases:{},not_found:{},...mn};function fe(i,e){for(const t in e)if(t in i&&typeof i[t]!=typeof e[t])return!1;return!0}function xn(i){if(typeof i!="object"||i===null)return null;const e=i;if(typeof e.prefix!="string"||!i.icons||typeof i.icons!="object"||!fe(i,Ks))return null;const t=e.icons;for(const s in t){const o=t[s];if(!s.match(_t)||typeof o.body!="string"||!fe(o,_e))return null}const n=e.aliases||Object.create(null);for(const s in n){const o=n[s],r=o.parent;if(!s.match(_t)||typeof r!="string"||!t[r]&&!n[r]||!fe(o,_e))return null}return e}const Gt=Object.create(null);function Js(i,e){return{provider:i,prefix:e,icons:Object.create(null),missing:new Set}}function X(i,e){const t=Gt[i]||(Gt[i]=Object.create(null));return t[e]||(t[e]=Js(i,e))}function ti(i,e){return xn(e)?yn(e,(t,n)=>{n?i.icons[t]=n:i.missing.add(t)}):[]}function Zs(i,e,t){try{if(typeof t.body=="string")return i.icons[e]={...t},!0}catch{}return!1}function to(i,e){let t=[];return(typeof i=="string"?[i]:Object.keys(Gt)).forEach(s=>{(typeof s=="string"&&typeof e=="string"?[e]:Object.keys(Gt[s]||{})).forEach(r=>{const a=X(s,r);t=t.concat(Object.keys(a.icons).map(l=>(s!==""?"@"+s+":":"")+r+":"+l))})}),t}let Ot=!1;function _n(i){return typeof i=="boolean"&&(Ot=i),Ot}function zt(i){const e=typeof i=="string"?Ht(i,!0,Ot):i;if(e){const t=X(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function wn(i,e){const t=Ht(i,!0,Ot);if(!t)return!1;const n=X(t.provider,t.prefix);return Zs(n,t.name,e)}function $i(i,e){if(typeof i!="object")return!1;if(typeof e!="string"&&(e=i.provider||""),Ot&&!e&&!i.prefix){let s=!1;return xn(i)&&(i.prefix="",yn(i,(o,r)=>{r&&wn(o,r)&&(s=!0)})),s}const t=i.prefix;if(!Vt({provider:e,prefix:t,name:"a"}))return!1;const n=X(e,t);return!!ti(n,i)}function Ci(i){return!!zt(i)}function eo(i){const e=zt(i);return e?{...Nt,...e}:null}function io(i){const e={loaded:[],missing:[],pending:[]},t=Object.create(null);i.sort((s,o)=>s.provider!==o.provider?s.provider.localeCompare(o.provider):s.prefix!==o.prefix?s.prefix.localeCompare(o.prefix):s.name.localeCompare(o.name));let n={provider:"",prefix:"",name:""};return i.forEach(s=>{if(n.name===s.name&&n.prefix===s.prefix&&n.provider===s.provider)return;n=s;const o=s.provider,r=s.prefix,a=s.name,l=t[o]||(t[o]=Object.create(null)),c=l[r]||(l[r]=X(o,r));let h;a in c.icons?h=e.loaded:r===""||c.missing.has(a)?h=e.missing:h=e.pending;const d={provider:o,prefix:r,name:a};h.push(d)}),e}function $n(i,e){i.forEach(t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter(s=>s.id!==e))})}function no(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const e=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!e.length)return;let t=!1;const n=i.provider,s=i.prefix;e.forEach(o=>{const r=o.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==s)return!0;const c=l.name;if(i.icons[c])r.loaded.push({provider:n,prefix:s,name:c});else if(i.missing.has(c))r.missing.push({provider:n,prefix:s,name:c});else return t=!0,!0;return!1}),r.pending.length!==a&&(t||$n([i],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let so=0;function oo(i,e,t){const n=so++,s=$n.bind(null,t,n);if(!e.pending.length)return s;const o={id:n,icons:e,callback:i,abort:s};return t.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),s}const we=Object.create(null);function Ai(i,e){we[i]=e}function $e(i){return we[i]||we[""]}function ro(i,e=!0,t=!1){const n=[];return i.forEach(s=>{const o=typeof s=="string"?Ht(s,e,t):s;o&&n.push(o)}),n}var lo={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ao(i,e,t,n){const s=i.resources.length,o=i.random?Math.floor(Math.random()*s):i.index;let r;if(i.random){let y=i.resources.slice(0);for(r=[];y.length>1;){const T=Math.floor(Math.random()*y.length);r.push(y[T]),y=y.slice(0,T).concat(y.slice(T+1))}r=r.concat(y)}else r=i.resources.slice(o).concat(i.resources.slice(0,o));const a=Date.now();let l="pending",c=0,h,d=null,f=[],b=[];typeof n=="function"&&b.push(n);function m(){d&&(clearTimeout(d),d=null)}function v(){l==="pending"&&(l="aborted"),m(),f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function g(y,T){T&&(b=[]),typeof y=="function"&&b.push(y)}function E(){return{startTime:a,payload:e,status:l,queriesSent:c,queriesPending:f.length,subscribe:g,abort:v}}function A(){l="failed",b.forEach(y=>{y(void 0,h)})}function _(){f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function $(y,T,z){const H=T!=="success";switch(f=f.filter(k=>k!==y),l){case"pending":break;case"failed":if(H||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){h=z,A();return}if(H){h=z,f.length||(r.length?S():A());return}if(m(),_(),!i.random){const k=i.resources.indexOf(y.resource);k!==-1&&k!==i.index&&(i.index=k)}l="completed",b.forEach(k=>{k(z)})}function S(){if(l!=="pending")return;m();const y=r.shift();if(y===void 0){if(f.length){d=setTimeout(()=>{m(),l==="pending"&&(_(),A())},i.timeout);return}A();return}const T={status:"pending",resource:y,callback:(z,H)=>{$(T,z,H)}};f.push(T),c++,d=setTimeout(S,i.rotate),t(y,e,T.callback)}return setTimeout(S),E}function Cn(i){const e={...lo,...i};let t=[];function n(){t=t.filter(a=>a().status==="pending")}function s(a,l,c){const h=ao(e,a,l,(d,f)=>{n(),c&&c(d,f)});return t.push(h),h}function o(a){return t.find(l=>a(l))||null}return{query:s,find:o,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:n}}function ei(i){let e;if(typeof i.resources=="string")e=[i.resources];else if(e=i.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const oe=Object.create(null),mt=["https://api.simplesvg.com","https://api.unisvg.com"],Ut=[];for(;mt.length>0;)mt.length===1||Math.random()>.5?Ut.push(mt.shift()):Ut.push(mt.pop());oe[""]=ei({resources:["https://api.iconify.design"].concat(Ut)});function Ei(i,e){const t=ei(e);return t===null?!1:(oe[i]=t,!0)}function re(i){return oe[i]}function co(){return Object.keys(oe)}function Si(){}const pe=Object.create(null);function uo(i){if(!pe[i]){const e=re(i);if(!e)return;const t=Cn(e),n={config:e,redundancy:t};pe[i]=n}return pe[i]}function An(i,e,t){let n,s;if(typeof i=="string"){const o=$e(i);if(!o)return t(void 0,424),Si;s=o.send;const r=uo(i);r&&(n=r.redundancy)}else{const o=ei(i);if(o){n=Cn(o);const r=i.resources?i.resources[0]:"",a=$e(r);a&&(s=a.send)}}return!n||!s?(t(void 0,424),Si):n.query(e,s,t)().abort}const ki="iconify2",It="iconify",En=It+"-count",Ti=It+"-version",Sn=36e5,ho=168,fo=50;function Ce(i,e){try{return i.getItem(e)}catch{}}function ii(i,e,t){try{return i.setItem(e,t),!0}catch{}}function Oi(i,e){try{i.removeItem(e)}catch{}}function Ae(i,e){return ii(i,En,e.toString())}function Ee(i){return parseInt(Ce(i,En))||0}const nt={local:!0,session:!0},kn={local:new Set,session:new Set};let ni=!1;function po(i){ni=i}let jt=typeof window>"u"?{}:window;function Tn(i){const e=i+"Storage";try{if(jt&&jt[e]&&typeof jt[e].length=="number")return jt[e]}catch{}nt[i]=!1}function On(i,e){const t=Tn(i);if(!t)return;const n=Ce(t,Ti);if(n!==ki){if(n){const a=Ee(t);for(let l=0;l<a;l++)Oi(t,It+l.toString())}ii(t,Ti,ki),Ae(t,0);return}const s=Math.floor(Date.now()/Sn)-ho,o=a=>{const l=It+a.toString(),c=Ce(t,l);if(typeof c=="string"){try{const h=JSON.parse(c);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>s&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&e(h,a))return!0}catch{}Oi(t,l)}};let r=Ee(t);for(let a=r-1;a>=0;a--)o(a)||(a===r-1?(r--,Ae(t,r)):kn[i].add(a))}function zn(){if(!ni){po(!0);for(const i in nt)On(i,e=>{const t=e.data,n=e.provider,s=t.prefix,o=X(n,s);if(!ti(o,t).length)return!1;const r=t.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,r):r,!0})}}function bo(i,e){const t=i.lastModifiedCached;if(t&&t>=e)return t===e;if(i.lastModifiedCached=e,t)for(const n in nt)On(n,s=>{const o=s.data;return s.provider!==i.provider||o.prefix!==i.prefix||o.lastModified===e});return!0}function mo(i,e){ni||zn();function t(n){let s;if(!nt[n]||!(s=Tn(n)))return;const o=kn[n];let r;if(o.size)o.delete(r=Array.from(o).shift());else if(r=Ee(s),r>=fo||!Ae(s,r+1))return;const a={cached:Math.floor(Date.now()/Sn),provider:i.provider,data:e};return ii(s,It+r.toString(),JSON.stringify(a))}e.lastModified&&!bo(i,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),t("local")||t("session"))}function zi(){}function go(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,no(i)}))}function vo(i,e){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(e).sort():i.iconsToLoad=e,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:t,prefix:n}=i,s=i.iconsToLoad;delete i.iconsToLoad;let o;if(!s||!(o=$e(t)))return;o.prepare(t,n,s).forEach(a=>{An(t,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=ti(i,l);if(!c.length)return;const h=i.pendingIcons;h&&c.forEach(d=>{h.delete(d)}),mo(i,l)}catch(c){console.error(c)}go(i)})})}))}const si=(i,e)=>{const t=ro(i,!0,_n()),n=io(t);if(!n.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(n.loaded,n.missing,n.pending,zi)}),()=>{l=!1}}const s=Object.create(null),o=[];let r,a;return n.pending.forEach(l=>{const{provider:c,prefix:h}=l;if(h===a&&c===r)return;r=c,a=h,o.push(X(c,h));const d=s[c]||(s[c]=Object.create(null));d[h]||(d[h]=[])}),n.pending.forEach(l=>{const{provider:c,prefix:h,name:d}=l,f=X(c,h),b=f.pendingIcons||(f.pendingIcons=new Set);b.has(d)||(b.add(d),s[c][h].push(d))}),o.forEach(l=>{const{provider:c,prefix:h}=l;s[c][h].length&&vo(l,s[c][h])}),e?oo(e,n,o):zi},yo=i=>new Promise((e,t)=>{const n=typeof i=="string"?Ht(i,!0):i;if(!n){t(i);return}si([n||i],s=>{if(s.length&&n){const o=zt(n);if(o){e({...Nt,...o});return}}t(i)})});function xo(i){try{const e=typeof i=="string"?JSON.parse(i):i;if(typeof e.body=="string")return{...e}}catch{}}function _o(i,e){const t=typeof i=="string"?Ht(i,!0,!0):null;if(!t){const o=xo(i);return{value:i,data:o}}const n=zt(t);if(n!==void 0||!t.prefix)return{value:i,name:t,data:n};const s=si([t],()=>e(i,t,zt(t)));return{value:i,name:t,loading:s}}function be(i){return i.hasAttribute("inline")}let In=!1;try{In=navigator.vendor.indexOf("Apple")===0}catch{}function wo(i,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(In||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const $o=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Co=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Se(i,e,t){if(e===1)return i;if(t=t||100,typeof i=="number")return Math.ceil(i*e*t)/t;if(typeof i!="string")return i;const n=i.split($o);if(n===null||!n.length)return i;const s=[];let o=n.shift(),r=Co.test(o);for(;;){if(r){const a=parseFloat(o);isNaN(a)?s.push(o):s.push(Math.ceil(a*e*t)/t)}else s.push(o);if(o=n.shift(),o===void 0)return s.join("");r=!r}}function Ao(i,e="defs"){let t="";const n=i.indexOf("<"+e);for(;n>=0;){const s=i.indexOf(">",n),o=i.indexOf("</"+e);if(s===-1||o===-1)break;const r=i.indexOf(">",o);if(r===-1)break;t+=i.slice(s+1,o).trim(),i=i.slice(0,n).trim()+i.slice(r+1)}return{defs:t,content:i}}function Eo(i,e){return i?"<defs>"+i+"</defs>"+e:e}function So(i,e,t){const n=Ao(i);return Eo(n.defs,e+n.content+t)}const ko=i=>i==="unset"||i==="undefined"||i==="none";function Ln(i,e){const t={...Nt,...i},n={...gn,...e},s={left:t.left,top:t.top,width:t.width,height:t.height};let o=t.body;[t,n].forEach(v=>{const g=[],E=v.hFlip,A=v.vFlip;let _=v.rotate;E?A?_+=2:(g.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),g.push("scale(-1 1)"),s.top=s.left=0):A&&(g.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),g.push("scale(1 -1)"),s.top=s.left=0);let $;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:$=s.height/2+s.top,g.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:g.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:$=s.width/2+s.left,g.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}_%2===1&&(s.left!==s.top&&($=s.left,s.left=s.top,s.top=$),s.width!==s.height&&($=s.width,s.width=s.height,s.height=$)),g.length&&(o=So(o,'<g transform="'+g.join(" ")+'">',"</g>"))});const r=n.width,a=n.height,l=s.width,c=s.height;let h,d;r===null?(d=a===null?"1em":a==="auto"?c:a,h=Se(d,l/c)):(h=r==="auto"?l:r,d=a===null?Se(h,c/l):a==="auto"?c:a);const f={},b=(v,g)=>{ko(g)||(f[v]=g.toString())};b("width",h),b("height",d);const m=[s.left,s.top,l,c];return f.viewBox=m.join(" "),{attributes:f,viewBox:m,body:o}}function oi(i,e){let t=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in e)t+=" "+n+'="'+e[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+i+"</svg>"}function To(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Oo(i){return"data:image/svg+xml,"+To(i)}function Rn(i){return'url("'+Oo(i)+'")'}const zo=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let Xt=zo();function Io(i){Xt=i}function Lo(){return Xt}function Ro(i,e){const t=re(i);if(!t)return 0;let n;if(!t.maxURL)n=0;else{let s=0;t.resources.forEach(r=>{s=Math.max(s,r.length)});const o=e+".json?icons=";n=t.maxURL-s-t.path.length-o.length}return n}function Po(i){return i===404}const Bo=(i,e,t)=>{const n=[],s=Ro(i,e),o="icons";let r={type:o,provider:i,prefix:e,icons:[]},a=0;return t.forEach((l,c)=>{a+=l.length+1,a>=s&&c>0&&(n.push(r),r={type:o,provider:i,prefix:e,icons:[]},a=l.length),r.icons.push(l)}),n.push(r),n};function Mo(i){if(typeof i=="string"){const e=re(i);if(e)return e.path}return"/"}const No=(i,e,t)=>{if(!Xt){t("abort",424);return}let n=Mo(e.provider);switch(e.type){case"icons":{const o=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});n+=o+".json?"+l.toString();break}case"custom":{const o=e.uri;n+=o.slice(0,1)==="/"?o.slice(1):o;break}default:t("abort",400);return}let s=503;Xt(i+n).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{t(Po(r)?"abort":"next",r)});return}return s=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?t("abort",o):t("next",s)});return}setTimeout(()=>{t("success",o)})}).catch(()=>{t("next",s)})},Ho={prepare:Bo,send:No};function Ii(i,e){switch(i){case"local":case"session":nt[i]=e;break;case"all":for(const t in nt)nt[t]=e;break}}const me="data-style";let Pn="";function jo(i){Pn=i}function Li(i,e){let t=Array.from(i.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(me));t||(t=document.createElement("style"),t.setAttribute(me,me),i.appendChild(t)),t.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+Pn}function Bn(){Ai("",Ho),_n(!0);let i;try{i=window}catch{}if(i){if(zn(),i.IconifyPreload!==void 0){const t=i.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!$i(s))&&console.error(n)}catch{console.error(n)}})}if(i.IconifyProviders!==void 0){const t=i.IconifyProviders;if(typeof t=="object"&&t!==null)for(const n in t){const s="IconifyProviders["+n+"] is invalid.";try{const o=t[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Ei(n,o)||console.error(s)}catch{console.error(s)}}}}return{enableCache:t=>Ii(t,!0),disableCache:t=>Ii(t,!1),iconLoaded:Ci,iconExists:Ci,getIcon:eo,listIcons:to,addIcon:wn,addCollection:$i,calculateSize:Se,buildIcon:Ln,iconToHTML:oi,svgToURL:Rn,loadIcons:si,loadIcon:yo,addAPIProvider:Ei,appendCustomStyle:jo,_api:{getAPIConfig:re,setAPIModule:Ai,sendAPIQuery:An,setFetch:Io,getFetch:Lo,listAPIProviders:co}}}const ke={"background-color":"currentColor"},Mn={"background-color":"transparent"},Ri={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Pi={"-webkit-mask":ke,mask:ke,background:Mn};for(const i in Pi){const e=Pi[i];for(const t in Ri)e[i+"-"+t]=Ri[t]}function Bi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Do(i,e,t){const n=document.createElement("span");let s=i.body;s.indexOf("<a")!==-1&&(s+="<!-- "+Date.now()+" -->");const o=i.attributes,r=oi(s,{...o,width:e.width+"",height:e.height+""}),a=Rn(r),l=n.style,c={"--svg":a,width:Bi(o.width),height:Bi(o.height),...t?ke:Mn};for(const h in c)l.setProperty(h,c[h]);return n}let wt;function Vo(){try{wt=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{wt=null}}function Uo(i){return wt===void 0&&Vo(),wt?wt.createHTML(i):i}function Fo(i){const e=document.createElement("span"),t=i.attributes;let n="";t.width||(n="width: inherit;"),t.height||(n+="height: inherit;"),n&&(t.style=n);const s=oi(i.body,t);return e.innerHTML=Uo(s),e.firstChild}function Te(i){return Array.from(i.childNodes).find(e=>{const t=e.tagName&&e.tagName.toUpperCase();return t==="SPAN"||t==="SVG"})}function Mi(i,e){const t=e.icon.data,n=e.customisations,s=Ln(t,n);n.preserveAspectRatio&&(s.attributes.preserveAspectRatio=n.preserveAspectRatio);const o=e.renderedMode;let r;switch(o){case"svg":r=Fo(s);break;default:r=Do(s,{...Nt,...t},o==="mask")}const a=Te(i);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):i.replaceChild(r,a):i.appendChild(r)}function Ni(i,e,t){const n=t&&(t.rendered?t:t.lastRender);return{rendered:!1,inline:e,icon:i,lastRender:n}}function Wo(i="iconify-icon"){let e,t;try{e=window.customElements,t=window.HTMLElement}catch{return}if(!e||!t)return;const n=e.get(i);if(n)return n;const s=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends t{constructor(){super();u(this,"_shadowRoot");u(this,"_initialised",!1);u(this,"_state");u(this,"_checkQueued",!1);u(this,"_connected",!1);u(this,"_observer",null);u(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=be(this);Li(l,c),this._state=Ni({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return s.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=be(this),h=this._state;c!==h.inline&&(h.inline=c,Li(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return be(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Mi(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const h=this.getAttribute("mode"),d=_i(this);(l.attrMode!==h||Ys(l.customisations,d)||!Te(this._shadowRoot))&&this._renderIcon(l.icon,d,h)}_iconChanged(l){const c=_o(l,(h,d,f)=>{const b=this._state;if(b.rendered||this.getAttribute("icon")!==h)return;const m={value:h,name:d,data:f};m.data?this._gotIconData(m):b.icon=m});c.data?this._gotIconData(c):this._state=Ni(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=Te(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,_i(this),this.getAttribute("mode"))}_renderIcon(l,c,h){const d=wo(l.data.body,h),f=this._state.inline;Mi(this._shadowRoot,this._state={rendered:!0,icon:l,inline:f,customisations:c,attrMode:h,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(h=>h.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};s.forEach(a=>{a in o.prototype||Object.defineProperty(o.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=Bn();for(const a in r)o[a]=o.prototype[a]=r[a];return e.define(i,o),o}Wo()||Bn();const $t=class $t extends w{constructor(){super();u(this,"_parent",L());u(this,"_tooltip",L());u(this,"_contextMenu",L());u(this,"timeoutID");u(this,"_mouseLeave",!1);u(this,"onWindowMouseUp",t=>{const{value:n}=this._contextMenu;!this.contains(t.target)&&n&&(n.visible=!1)});this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this.tooltipTime=700,this.mouseLeave=!0,this.addEventListener("click",t=>t.stopPropagation())}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:n}=this._tooltip;t&&n&&ln(t,n,{placement:"bottom",middleware:[Yi(10),rn(),on(),sn({padding:5})]}).then(s=>{const{x:o,y:r}=s;Object.assign(n.style,{left:`${o}px`,top:`${r}px`})})}onMouseEnter(){(this.tooltipTitle||this.tooltipText)&&(this.mouseLeave=!1,this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},this.tooltipTime))}onChildrenClick(t){t.stopPropagation();const{value:n}=this._contextMenu;n&&(n.visible=!n.visible)}onSlotChange(t){const{value:n}=this._contextMenu,s=t.target.assignedElements();for(const o of s){if(!(o instanceof $t)){o.remove(),console.warn("Only bim-button is allowed inside bim-button. Child has been removed.");continue}o.addEventListener("click",()=>n==null?void 0:n.updatePosition())}this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){const t=p`
      <div ${R(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?p`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?p`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,n=this.children.length>0;return p`
      <style>
        .button {
          border-radius: var(
            --bim-button--bdrs,
            ${n?"var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs)":"var(--bim-ui_size-4xs)"}
          );
        }
        .children {
          border-radius: var(
            --bim-button--bdrs,
            ${n?"0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0":"var(--bim-ui_size-4xs)"}
          );
        }
      </style>
      <div ${R(this._parent)} class="parent">
        ${this.label||this.icon?p`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .label=${this.label}
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                ></bim-label>
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
        ${n?p`
              <div class="children" @click=${this.onChildrenClick}>
                <bim-icon icon="ic:round-plus"></bim-icon>
              </div>
            `:null}
        <bim-context-menu
          ${R(this._contextMenu)}
          style="row-gap: var(--bim-ui_size-4xs)"
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </bim-context-menu>
      </div>
    `}};u($t,"styles",C`
    :host {
      flex: 1;
      pointer-events: none;
    }

    :host(:not([disabled]):hover) {
      cursor: pointer;
    }

    bim-label {
      pointer-events: none;
    }

    .parent {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-icon--c: var(--bim-label--c);
      display: flex;
      height: 100%;
      user-select: none;
      row-gap: 0.125rem;
      column-gap: 0.125rem;
    }

    .button,
    .children {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: auto;
      min-height: var(--bim-ui_size-5xl);
      min-width: var(--bim-ui_size-5xl);
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      outline: var(--bim-button--olw) solid var(--bim-button--olc);
    }

    .button {
      flex-grow: 1;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover) .button,
    :host(:hover) .children {
      --bim-label--c: white;
      --bim-icon--c: white;
      fill: white;
      background-color: var(--bim-ui_color-main);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([active]) .button {
      --bim-label--c: white;
      background-color: var(--bim-ui_color-main);
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.75rem;
    }

    :host([disabled]) .parent {
      background-color: gray;
    }

    .children {
      --bim-icon--fz: var(--bim-ui_size-base);
      padding: 0 0.125rem;
    }

    ::slotted(bim-button) {
      --bim-icon--fz: var(--bim-ui_size-base);
      --bim-button--bgc: var(
        --bim-context-menu--bgc,
        var(--bim-ui_bg-contrast-20)
      );
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
  `),u($t,"properties",{label:{type:String,reflect:!0},labelHidden:{type:Boolean,attribute:"label-hidden",reflect:!0},active:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0},icon:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0},tooltipTime:{type:Number,attribute:"tooltip-time",reflect:!0},tooltipVisible:{type:Boolean,attribute:"tooltip-visible",reflect:!0},tooltipTitle:{type:String,attribute:"tooltip-title",reflect:!0},tooltipText:{type:String,attribute:"tooltip-text",reflect:!0}});let Oe=$t;class ze extends w{constructor(){super();u(this,"onValueChange",new Event("change"));this.checked=!1}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return p`
      <div class="host">
        ${this.label?p`<bim-label
              .label="${this.label}"
              .icon="${this.icon}"
            ></bim-label> `:null}
        <input
          type="checkbox"
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}}u(ze,"styles",C`
    .host {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
    }

    input {
      height: 1rem;
      width: 1rem;
      cursor: pointer;
      border: none;
      outline: none;
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_color-accent));
    }
  `),u(ze,"properties",{icon:{type:String,reflect:!0},name:{type:String,reflect:!0},label:{type:String,reflect:!0},checked:{type:Boolean,reflect:!0}});class Ie extends w{constructor(){super(...arguments);u(this,"_colorInput",L());u(this,"_textInput",L());u(this,"onValueChange",new Event("input"))}set value(t){const{color:n,opacity:s}=t;this.color=n,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:n}=this._colorInput;n&&(this.color=n.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:n}=this._textInput;if(!n)return;const{value:s}=n;let o=s.replace(/[^a-fA-F0-9]/g,"");o.startsWith("#")||(o=`#${o}`),n.value=o.slice(0,7),n.value.length===7&&(this.color=n.value,this.dispatchEvent(this.onValueChange))}connectedCallback(){super.connectedCallback(),this.color||(this.color="#bcf124"),this.vertical===void 0&&(this.vertical=!1)}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return p`
      <bim-input
        .label=${this.label}
        .icon=${this.icon}
        .vertical="${this.vertical}"
      >
        <div class="color-container">
          <input
            ${R(this._colorInput)}
            @input="${this.onColorInput}"
            type="color"
            .value="${this.color}"
          />
          <div
            @click=${this.focus}
            class="sample"
            style="background-color: ${this.color}"
          ></div>
          <input
            ${R(this._textInput)}
            @input="${this.onTextInput}"
            .value="${this.color}"
            type="text"
          />
        </div>
        ${this.opacity?p`<bim-number-input
              sufix="%"
              .value=${this.opacity}
            ></bim-number-input>`:null}
      </bim-input>
    `}}u(Ie,"styles",C`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_color-accent);
    }

    .color-container {
      position: relative;
      outline: none;
      display: flex;
      height: 100%;
      gap: 0.5rem;
      justify-content: flex-start;
      padding-left: 0.5rem;
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
      width: 1.25rem;
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
  `),u(Ie,"properties",{name:{type:String,reflect:!0},icon:{type:String,reflect:!0},label:{type:String,reflect:!0},color:{type:String,reflect:!0},opacity:{type:Number,reflect:!0},vertical:{type:Boolean,reflect:!0}});const qo=C`
  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.25rem;
    background-color: var(
      --bim-scrollbar--c,
      color-mix(in lab, var(--bim-ui_color-main), white 15%)
    );
  }

  ::-webkit-scrollbar-track {
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-base));
  }
`,Yo=C`
  :root {
    /* Backgrounds */
    --bim-ui_bg-base: hsl(210 10% 5%);
    --bim-ui_bg-contrast-10: hsl(210 10% 10%);
    --bim-ui_bg-contrast-20: hsl(210 10% 20%);
    --bim-ui_bg-contrast-40: hsl(210 10% 40%);
    --bim-ui_bg-contrast-60: hsl(210 10% 60%);
    --bim-ui_bg-contrast-80: hsl(210 10% 80%);
    --bim-ui_bg-contrast-100: hsl(210 10% 95%);

    /* Colors */
    --bim-ui_color-main: #6528d7;
    --bim-ui_color-accent: #bcf124;

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

  @media (prefers-color-scheme: dark) {
    :root {
      --bim-ui_bg-base: hsl(210 10% 5%);
      --bim-ui_bg-contrast-10: hsl(210 10% 10%);
      --bim-ui_bg-contrast-20: hsl(210 10% 20%);
      --bim-ui_bg-contrast-40: hsl(210 10% 40%);
      --bim-ui_bg-contrast-60: hsl(210 10% 60%);
      --bim-ui_bg-contrast-80: hsl(210 10% 80%);
      --bim-ui_bg-contrast-100: hsl(210 10% 95%);
    }
  }

  @media (prefers-color-scheme: light) {
    :root {
      --bim-ui_bg-base: hsl(210 10% 95%);
      --bim-ui_bg-contrast-10: hsl(210 10% 90%);
      --bim-ui_bg-contrast-20: hsl(210 10% 85%);
      --bim-ui_bg-contrast-40: hsl(210 10% 60%);
      --bim-ui_bg-contrast-60: hsl(210 10% 40%);
      --bim-ui_bg-contrast-80: hsl(210 10% 20%);
      --bim-ui_bg-contrast-100: hsl(210 10% 5%);

      --bim-ui_color-main: #6528d7;
      --bim-ui_color-accent: #6528d7;
    }
  }

  html.bim-ui-dark {
    --bim-ui_bg-base: hsl(210 10% 5%);
    --bim-ui_bg-contrast-10: hsl(210 10% 10%);
    --bim-ui_bg-contrast-20: hsl(210 10% 20%);
    --bim-ui_bg-contrast-40: hsl(210 10% 40%);
    --bim-ui_bg-contrast-60: hsl(210 10% 60%);
    --bim-ui_bg-contrast-80: hsl(210 10% 80%);
    --bim-ui_bg-contrast-100: hsl(210 10% 95%);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: hsl(210 10% 95%);
    --bim-ui_bg-contrast-10: hsl(210 10% 90%);
    --bim-ui_bg-contrast-20: hsl(210 10% 85%);
    --bim-ui_bg-contrast-40: hsl(210 10% 60%);
    --bim-ui_bg-contrast-60: hsl(210 10% 40%);
    --bim-ui_bg-contrast-80: hsl(210 10% 20%);
    --bim-ui_bg-contrast-100: hsl(210 10% 5%);

    --bim-ui_color-main: #6528d7;
    --bim-ui_color-accent: #6528d7;
  }

  bim-grid:not([floating]) bim-toolbars-container {
    background-color: var(--bim-ui_bg-base);
  }

  bim-grid[floating] bim-toolbars-container {
    background-color: transparent;
  }
`,J={scrollbar:qo,globalStyles:Yo};class Le extends w{constructor(){super();u(this,"_visible",!1);this.visible=!1,this.parentElement&&this.updatePosition()}set visible(t){this._visible=t,t&&this.updatePosition()}get visible(){return this._visible}updatePosition(t){const n=t||this.parentNode;if(!n){this.visible=!1,console.warn("No target element found for context-menu.");return}setTimeout(async()=>{const s=await ln(n,this,{placement:"right",middleware:[Yi(10),rn(),on(),sn({padding:5})]}),{x:o,y:r}=s;this.style.left=`${o}px`,this.style.top=`${r}px`})}render(){return p` <slot></slot> `}}u(Le,"styles",[J.scrollbar,C`
      :host {
        --bim-label--fz: var(--bim-ui_size-xs);
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
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
      }

      :host([visible]) {
        display: flex;
      }

      :host(:not([visible])) {
        display: none;
      }
    `]),u(Le,"properties",{visible:{type:Boolean,reflect:!0}});class D extends w{constructor(){super(),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}render(){return p`
      <div class="parent" .title=${this.label??""}>
        <div style="display: flex; column-gap: 0.375rem">
          ${this.checkbox&&!this.noMark?p`<bim-checkbox
                style="pointer-events: none"
                .checked=${this.checked}
              ></bim-checkbox>`:null}
          <bim-label
            .vertical=${this.vertical}
            .label=${this.label}
            .icon=${this.icon}
            .img=${this.img}
          ></bim-label>
        </div>
        ${!this.checkbox&&!this.noMark&&this.checked?p`<svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.125rem"
              viewBox="0 0 24 24"
              width="1.125rem"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>`:null}
      </div>
    `}}u(D,"styles",C`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.75rem;
      border-radius: var(--bim-ui_size-4xs);
    }

    :host(:hover) {
      cursor: pointer;
      background-color: color-mix(
        in lab,
        var(--bim-selector-input--bgc, var(--bim-ui_bg-contrast-20)),
        var(--bim-ui_color-main) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_color-main), white 30%);
      font-weight: 600;
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_color-main), white 30%);
    }

    .parent {
      box-sizing: border-box;
      padding: 0.375rem 0;
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
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_color-accent));
    }

    bim-label {
      pointer-events: none;
    }
  `),u(D,"properties",{img:{type:String,reflect:!0},label:{type:String,reflect:!0},value:{attribute:!1},icon:{type:String,reflect:!0},checked:{type:Boolean,reflect:!0},checkbox:{type:Boolean,reflect:!0},noMark:{type:Boolean,attribute:"no-mark",reflect:!0},vertical:{type:Boolean,reflect:!0}});class Re extends w{constructor(){super();u(this,"_inputContainer",L());u(this,"_listElement",L());u(this,"onValueChange",new Event("change"));u(this,"_visible",!1);u(this,"_value",[]);u(this,"onWindowMouseUp",t=>{this.contains(t.target)||(this.visible=!1)});u(this,"onOptionClick",t=>{const n=t.target,s=n.value||n.label,o=this._value.includes(s);if(!this.multiple&&!this.required&&!o)this.value=[s];else if(!this.multiple&&!this.required&&o)this.value=[];else if(!this.multiple&&this.required&&!o)this.value=[s];else if(this.multiple&&!this.required&&!o)this.value=[...this._value,s];else if(this.multiple&&!this.required&&o)this.value=this._value.filter(r=>r!==s);else if(this.multiple&&this.required&&!o)this.value=[...this._value,s];else if(this.multiple&&this.required&&o){const r=this._value.filter(a=>a!==s);r.length!==0&&(this.value=r)}this.dispatchEvent(this.onValueChange)});this.useObserver=!0,this.multiple=!1,this.required=!1,this.visible=!1,this.vertical=!1,this.searchBox=!1}get visible(){return this._visible}set visible(t){this._visible=t,t||this.resetVisibleElements()}set value(t){if(this.required&&Object.keys(t).length===0){console.warn("bim-dropdown was set as required but not value is set. Nothing has changed.");return}const n=[];for(const s of t){const o=this.findOption(s);if(o){if(n.push(o.value||o.label),!this.multiple&&Object.keys(t).length>1){console.warn("bim-dropdown wasn't set as multiple, but provided an array of values. Only first was taken.");break}}else console.warn(`bim-dropdown doesn't have ${s} as a possible value.`)}this._value=n,this.updateOptionsState()}get value(){return this._value}get _options(){const t=[...this.elements];for(const n of this.children)n instanceof D&&t.push(n);return t}onSlotChange(t){const n=t.target.assignedElements();this.observe(n);for(const s of n){if(!(s instanceof D)){console.warn("Only bim-option is allowed inside bim-dropdown. Child has been removed.");continue}s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick)}}updateOptionsState(){for(const t of this._options)t instanceof D&&(this._value.includes(t.value||t.label)?t.checked=!0:t.checked=!1)}findOption(t){return this._options.find(s=>s instanceof D?s.label===t||s.value===t:!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){let t,n,s;if(this._value.length===0)t="Select an option...";else if(this._value.length===1){const o=this.findOption(this._value[0]);t=(o==null?void 0:o.label)||(o==null?void 0:o.value),n=o==null?void 0:o.img,s=o==null?void 0:o.icon}else t=`Multiple (${this._value.length})`;return p`
      <bim-input
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${R(this._inputContainer)}
          class="input"
          @click=${()=>this.visible=!this.visible}
        >
          <bim-label
            .label=${t}
            .img=${n}
            .icon=${s}
            style="overflow: hidden;"
          ></bim-label>
          <svg
            style="flex-shrink: 0"
            xmlns="http://www.w3.org/2000/svg"
            height="1.125rem"
            viewBox="0 0 24 24"
            width="1.125rem"
            fill="#9ca3af"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
        <bim-context-menu ${R(this._listElement)} .visible=${this.visible}>
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this.visibleElements.map(o=>o)}
        </bim-context-menu>
      </bim-input>
    `}}u(Re,"styles",[J.scrollbar,C`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: var(--bim-dropdown--olw, 2px);
        --bim-input--olc: var(--bim-dropdown--olc, transparent);
        --bim-input--bdrs: var(--bim-dropdown--bdrs, var(--bim-ui_size-4xs));
        flex: 1;
      }

      :host([visible]) {
        --bim-input--olc: var(
          --bim-dropdown¡focus--c,
          var(--bim-ui_color-accent)
        );
      }

      .input {
        --bim-label--fz: var(--bim-drodown--fz, var(--bim-ui_size-xs));
        --bim-label--c: var(--bim-dropdown--c, var(--bim-ui_bg-contrast-100));
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
    `]),u(Re,"properties",{name:{type:String,reflect:!0},icon:{type:String,reflect:!0},label:{type:String,reflect:!0},multiple:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},visible:{type:Boolean,reflect:!0},searchBox:{type:Boolean,reflect:!0,attribute:"search-box"},vertical:{type:Boolean,reflect:!0},value:{attribute:!1}});const et=class et extends w{constructor(){super();u(this,"_containers",{});u(this,"_onLayoutChange",new Event("layout-change"));u(this,"layouts",{});u(this,"childrenElements",new Set);this.floating=!1}get rows(){return this.style.gridTemplate.trim().split(/"([^"]*)"/).map((s,o)=>o%2!==0?s:null).filter(s=>s!==null)}get layoutAreas(){const t=new Set;for(const n of this.rows){const s=n.trim().split(/\s+/);for(const o of s)t.add(o)}return[...t]}static addContainerTag(t,n){et.containerTags[t]=n}onSlotChange(t){const n=t.target.assignedElements();for(const s of n){this.childrenElements.add(s),s.toggleAttribute("floating",this.floating);try{const o=this.isVerticalArea(s.style.gridArea);"horizontal"in s?s.horizontal=!o:"vertical"in s&&(s.vertical=o)}catch{}}}updateContainers(){const{layoutAreas:t}=this;for(const n of t){if(!n.startsWith("c-"))continue;const s=n.split("-")[1],o=n.split("-")[2];if(!o)throw new Error(`bim-grid: you defined a container area without an id (${n})`);this.createContainer(s,o)}this.cleanup()}cleanup(){const{layoutAreas:t}=this;for(const n of this.childrenElements){const{gridArea:s}=n.style;t.includes(s)?this.append(n):n.remove()}}createContainer(t,n){const s=`c-${t}-${n}`;t in this._containers||(this._containers[t]=[]);const o=this._containers[t];let r=o.find(a=>a.style.gridArea===s);if(!r){const a=et.containerTags[t]??"div";r=document.createElement(a),r.style.gridArea=s,o.push(r),this.childrenElements.add(r)}return r}setLayout(t){const n=this.layouts[t];if(!n){console.warn(`bim-grid: ${t} layout is not defined.`);return}this.style.gridTemplate=n,this.updateContainers(),this.dispatchEvent(this._onLayoutChange)}isVerticalArea(t){const{rows:n}=this,s=n.find(l=>l.includes(t));if(!s)throw new Error(`${t} wasn't defined in the grid-template of this bim-grid`);const o=n.indexOf(s),r=o>0&&n[o-1].includes(t),a=o<n.length-1&&n[o+1].includes(t);return r||a}getContainer(t,n,s=!0){const o=`c-${t}-${n}`,r=this._containers[t];if(s)return this.createContainer(t,n);if(!r)throw new Error(`bim-grid: container of type "${t}" is not defined in this grid.`);const a=r.find(l=>l.style.gridArea===o);if(!a)throw new Error(`bim-grid: there is no container with id "${n}" in this grid.`);return a}render(){return p` <slot @slotchange=${this.onSlotChange}></slot> `}};u(et,"styles",C`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    :host([floating]) {
      --bim-toolbars-container--olw: 1px;
      --bim-toolbars-container--olc: var(--bim-ui_bg-contrast-20);
      --bim-toolbars-container--js: center;
      --bim-toolbars-container--as: start;
      --bim-toolbars-container_tabs--bgc: transparent;
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
      --bim-toolbars-container--js: auto;
      --bim-toolbars-container--as: auto;
      --bim-toolbars-container_tabs--bgc: var(--bim-ui_bg-base);
      --bim-panel--bdrs: 0;
      background-color: var(--bim-ui_bg-contrast-20);
      gap: 1px;
    }
  `),u(et,"properties",{floating:{type:Boolean,reflect:!0}}),u(et,"containerTags",{panels:"bim-panels-container",toolbars:"bim-toolbars-container"});let Kt=et;class Pe extends w{render(){return p`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}}u(Pe,"styles",C`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
    }
  `),u(Pe,"properties",{icon:{type:String}});class Be extends w{constructor(){super();u(this,"onValueChange",new Event("change"));this.labelInside=!1,this.vertical=!1}get value(){const t={};for(const n of this.children){const s=n;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const n=[...this.children];for(const s in t){const o=n.find(l=>{const c=l;return c.name===s||c.label===s});if(!o)continue;const r=o,a=t[s];typeof a=="boolean"?r.checked=a:r.value=a}}render(){return p`
      <div class="parent">
        ${this.label||this.icon?p`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}}u(Be,"styles",C`
    :host {
      flex: 1;
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
      /* overflow: hidden; */
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      min-height: 1.75rem;
      min-width: 4rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, transparent);
      outline: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: 13rem;
    }
  `),u(Be,"properties",{name:{type:String,reflect:!0},label:{type:String,reflect:!0},labelInside:{type:Boolean,attribute:"label-inside",reflect:!0},icon:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0}});class Me extends w{connectedCallback(){super.connectedCallback(),this.iconHidden===void 0&&(this.iconHidden=!1),this.labelHidden===void 0&&(this.labelHidden=!1),this.vertical===void 0&&(this.vertical=!1)}render(){return p`
      <div class="parent" title=${this.label}>
        ${this.img?p`<img .src=${this.img} .alt=${this.label||""} />`:null}
        ${!this.iconHidden&&this.icon?p`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        ${!this.labelHidden&&this.label?p`<label>${this.label}</label>`:null}
      </div>
    `}}u(Me,"styles",C`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
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

    label {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
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
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.5)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `),u(Me,"properties",{label:{type:String,reflect:!0},img:{type:String,reflect:!0},labelHidden:{type:Boolean,attribute:"label-hidden",reflect:!0},icon:{type:String,reflect:!0},iconHidden:{type:Boolean,attribute:"icon-hidden",reflect:!0},vertical:{type:Boolean,reflect:!0}});class Ne extends w{constructor(){super();u(this,"_input",L());u(this,"onValueChange",new Event("input"));if(this.value=0,this.vertical=!1,this.slider=!1,this.min&&this.max&&(this.min>this.max||this.max<this.min))throw new Error("bim-number-input min value can't be greater than max and max can't be lower than min.")}onInput(t){t.stopPropagation();const{value:n}=this._input;n&&this.setValue(n.value)}setValue(t){const{value:n}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),n&&(n.value=s),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),n&&(n.value=s),s==="-"||s==="-0"))return;let o=Number(s);Number.isNaN(o)||(o=this.min!==void 0?Math.max(o,this.min):o,o=this.max!==void 0?Math.min(o,this.max):o,this.value=o,n&&(n.value=this.value.toString()),this.dispatchEvent(this.onValueChange))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:n}=t,s=this.value,o=r=>{var b;const{clientX:a}=r,l=this.step??1,c=((b=l.toString().split(".")[1])==null?void 0:b.length)||0,h=1/(this.sensitivity??1),d=(a-n)/h;if(Math.floor(Math.abs(d))!==Math.abs(d))return;const f=s+d*l;this.setValue(f.toFixed(c))};document.addEventListener("mousemove",o),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default"})}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=p`
      ${this.pref||this.icon?p`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.pref}
            .icon=${this.icon}
          ></bim-label>`:null}
      <input
        ${R(this._input)}
        type="text"
        size="1"
        @input=${this.onInput}
        @change=${this.onInput}
        @blur=${this.onBlur}
        .value=${this.value.toString()}
      />
      ${this.sufix?p`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.sufix}
          ></bim-label>`:null}
    `,n=this.min??-1/0,s=this.max??1/0,o=100*(this.value-n)/(s-n),r=p`
      <style>
        .slider-indicator {
          width: ${`${o}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?p`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .label=${`${this.pref}: `}
              .icon=${this.icon}
            ></bim-label>`:null}
        <bim-label
          style="z-index: 1;"
          .label=${this.value.toString()}
        ></bim-label>
        ${this.sufix?p`<bim-label
              style="z-index: 1;"
              .label=${this.sufix}
            ></bim-label>`:null}
      </div>
    `;return p`
      <bim-input
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}}u(Ne,"styles",C`
    :host {
      flex: 1;
      --bim-input--bgc: var(
        --bim-number-input--bgc,
        var(--bim-ui_bg-contrast-20)
      );
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-number-input--olc, transparent);
      --bim-input--bdrs: var(--bim-number-input--bdrs, var(--bim-ui_size-4xs));
      --bim-input--p: 0 0.375rem;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(
        --bim-number-input¡focus--c,
        var(--bim-ui_color-accent)
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

    :host([sufix]:not([pref])) input {
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
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_color-main);
      position: absolute;
      top: 0;
      left: 0;
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
    }
  `),u(Ne,"properties",{name:{type:String,reflect:!0},icon:{type:String,reflect:!0},label:{type:String,reflect:!0},pref:{type:String,reflect:!0},min:{type:Number,reflect:!0},value:{type:Number,reflect:!0},step:{type:Number,reflect:!0},sensitivity:{type:Number,reflect:!0},max:{type:Number,reflect:!0},sufix:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0},slider:{type:Boolean,reflect:!0}});const Ct=class Ct extends w{constructor(){super();u(this,"onValueChange",new Event("change"));u(this,"_active",!1);u(this,"activationButton",document.createElement("bim-button"));this.activationButton.onclick=()=>this.active=!this.active}set active(t){var n;if(this._active=t,this.activationButton.active=t,t){const s=((n=this.parentElement)==null?void 0:n.children)??[];for(const o of s)o instanceof Ct&&o!==this&&(o.active=!1)}}get active(){return this._active}get value(){const t={};for(const n of this.children){const s=n;"value"in s&&(t[s.name||s.label]=s.value)}return t}set value(t){const n=[...this.children];for(const s in t){const o=n.find(a=>{const l=a;return l.name===s||l.label===s});if(!o)continue;const r=o;r.value=t[s]}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const n of t)n.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const n of t)n.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,!this.label&&this.name&&(this.activationButton.tooltipTitle=this.label||this.name),p`
      <div class="parent">
        ${this.label||this.name||this.icon?p`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};u(Ct,"styles",[J.scrollbar,C`
      :host {
        min-width: 20rem;
        overflow: auto;
      }

      :host([active]) {
        display: flex;
      }

      :host(:not([active])) {
        display: none;
      }

      .parent {
        display: flex;
        flex: 1;
        flex-direction: column;
        pointer-events: auto;
        border-radius: var(--bim-panel--bdrs, var(--bim-ui_size-base));
        background-color: var(--bim-panel--bgc, var(--bim-ui_bg-base));
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `]),u(Ct,"properties",{icon:{type:String,reflect:!0},name:{type:String,reflect:!0},label:{type:String,reflect:!0},active:{type:Boolean,reflect:!0}});let Lt=Ct;class He extends w{constructor(){super(),this.horizontal=!1}onSlotChange(e){const t=e.target.assignedElements(),n=t[t.length-1];for(const s of t)s instanceof Lt&&n instanceof Lt&&n.active&&s!==n&&(s.active=!1)}render(){return p` <slot @slotchange=${this.onSlotChange}></slot> `}}u(He,"styles",[J.scrollbar,C`
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        gap: 0.5rem;
      }

      :host(:not([floating])) {
        background-color: var(--bim-ui_bg-base);
      }

      :host([horizontal]) {
        flex-direction: row;
      }

      :host([horizontal]) ::slotted(bim-panel) {
        max-width: 100%;
        flex-grow: 1;
      }
    `]),u(He,"properties",{horizontal:{type:Boolean,reflect:!0},gridArea:{attribute:!1}});class je extends w{constructor(){super(...arguments);u(this,"onValueChange",new Event("change"))}get value(){const t={};for(const n of this.children){const s=n;"value"in s&&(t[s.name||s.label]=s.value)}return t}set value(t){const n=[...this.children];for(const s in t){const o=n.find(a=>{const l=a;return l.name===s||l.label===s});if(!o)continue;const r=o;r.value=t[s]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,n=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,s=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,o=this.collapsed?n:s,r=p`
      <div class="header" @click=${this.onHeaderClick}>
        ${this.label||this.icon||this.name?p`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        ${this.fixed?null:o}
      </div>
    `;return p`
      ${t?r:null}
      <div class="components">
        <slot></slot>
      </div>
    `}}u(je,"styles",[J.scrollbar,C`
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        pointer-events: auto;
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(
          --bim-panel-section¡hover,
          var(--bim-ui_color-accent)
        );
        cursor: pointer;
        color: var(--bim-panel-section¡hover, var(--bim-ui_color-accent));
      }

      :host(:not([fixed])) .header:hover svg {
        fill: var(--bim-panel-section¡hover, var(--bim-ui_color-accent));
      }

      .header {
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        z-index: 3;
        flex-shrink: 0;
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        user-select: none;
        height: 1.5rem;
        padding: 0.75rem 1rem;
        background-color: var(--bim-panel-section--bgc, var(--bim-ui_bg-base));
        color: var(--bim-panel-section--c, var(--bim-ui_bg-contrast-80));
      }

      .header svg {
        fill: var(--bim-panel-section--c, var(--bim-ui_bg-contrast-80));
      }

      .title {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }

      .title p {
        font-size: var(--bim-panel-section--fz, var(--bim-ui_size-sm));
      }

      .components {
        display: flex;
        flex-direction: column;
        row-gap: 0.75rem;
        padding: 0.125rem 1rem 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        display: none;
      }

      bim-label {
        pointer-events: none;
      }
    `]),u(je,"properties",{icon:{type:String,reflect:!0},label:{type:String,reflect:!0},name:{type:String,reflect:!0},fixed:{type:Boolean,reflect:!0},collapsed:{type:Boolean,reflect:!0}});class De extends w{constructor(){super();u(this,"_value");u(this,"onValueChange",new Event("change"));u(this,"onOptionClick",t=>{const n=t.target,s=n.value||n.label;this.value=s,this.dispatchEvent(this.onValueChange)});this.vertical=!1}get _options(){const t=[];for(const n of this.children)n instanceof D&&t.push(n);return t}set value(t){let n=!1;for(const s of this._options){const o=s.value||s.label;o===t?(s.checked=!0,this._value=o,n=!0):s.checked=!1}n||console.warn(`${t} is not in the options list for this bim-selector-input.`)}get value(){return this._value}onSlotChange(t){const n=t.target.assignedElements();for(const s of n)s instanceof D&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}render(){return p`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}}u(De,"styles",C`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
    }

    ::slotted(bim-option) {
      border-radius: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: white;
      font-weight: normal;
      background-color: var(--bim-ui_color-main);
    }

    ::slotted(bim-option:first-child) {
      border-radius: var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs);
    }

    ::slotted(bim-option:last-child) {
      border-radius: 0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0;
    }
  `),u(De,"properties",{name:{type:String,reflect:!0},icon:{type:String,reflect:!0},label:{type:String,reflect:!0},value:{attribute:!1},vertical:{type:Boolean,reflect:!0}});class Ve extends w{constructor(){super(...arguments);u(this,"table",this.closest("bim-table"))}render(){return p`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}}u(Ve,"styles",C`
    :host {
      padding: 0.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ::slotted(*) {
      --bim-input--bgc: transparent;
      --bim-input--olc: var(--bim-ui_bg-contrast-20);
      --bim-input--olw: 1px;
    }

    ::slotted(bim-input) {
      --bim-input--olw: 0;
    }
  `),u(Ve,"properties",{column:{type:String,reflect:!0}});class Ue extends w{constructor(){super(...arguments);u(this,"table",this.closest("bim-table"))}render(){var t;return p`
      ${(t=this.groups)==null?void 0:t.map(n=>{const s=document.createElement("bim-table-group");return s.group=n,s.table=this.table,s})}
    `}}u(Ue,"styles",C`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }
  `),u(Ue,"properties",{groups:{type:Array,attribute:!1}});class Fe extends w{constructor(){super();u(this,"_row",L());u(this,"_children",L());u(this,"_branch",L());u(this,"table",this.closest("bim-table"));this.group={data:{}},this.childrenHidden=!1}firstUpdated(){const{value:t}=this._row;t&&(t.data=this.group.data,t.table=this.table);const{value:n}=this._children;n&&(n.groups=this.group.children,n.table=this.table)}render(){var c;const t=((c=this.table)==null?void 0:c.getGroupIndentation(this.group))??0,n=p`
      <bim-table-children
        ${R(this._children)}
        .hidden=${this.childrenHidden}
      ></bim-table-children>
    `,s=p`
      <style>
        .branch-vertical {
          left: ${t+.5625}rem;
        }
      </style>
      <div class="branch branch-vertical" ${R(this._branch)}></div>
    `,o=p`
      <style>
        .branch-horizontal {
          left: ${t-1+.5625}rem;
        }
      </style>
      <div class="branch branch-horizontal"></div>
    `,r=p`
      <svg
        height="9.5"
        width="7.5"
        viewBox="0 0 4.6666672 7.3333333"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"
        />
      </svg>
    `,a=p`
      <svg
        height="6.5"
        width="9.5"
        viewBox="0 0 5.9111118 5.0175439"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"
        />
      </svg>
    `,l=p`
      <style>
        .caret {
          left: ${.125+t}rem;
        }
      </style>
      <div
        class="caret"
        @click=${()=>this.childrenHidden=!this.childrenHidden}
      >
        ${this.childrenHidden?r:a}
      </div>
    `;return p`
      ${this.group.children&&!this.childrenHidden?s:null}
      <bim-table-row ${R(this._row)}>
        ${this.group.children?l:null}
        ${t===0||this.group.children&&!this.childrenHidden?null:o}
      </bim-table-row>
      ${this.group.children?n:null}
    `}}u(Fe,"styles",C`
    :host {
      position: relative;
      display: grid;
      grid-template-areas: "Data" "Children";
    }

    .branch {
      position: absolute;
      z-index: 1;
    }

    .branch-vertical {
      top: 1rem;
      bottom: 1rem;
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
  `),u(Fe,"properties",{group:{type:Object,attribute:!1},childrenHidden:{type:Boolean,attribute:"children-hidden",reflect:!0}});class We extends w{constructor(){super();u(this,"_table",this.closest("bim-table"));u(this,"onTableIndentationColorChange",t=>{var a;if(!this.table)return;const n=t.detail,{indentationLevel:s,color:o}=n;((a=this.table)==null?void 0:a.getRowIndentation(this.data))===s&&(this.style.backgroundColor=o)});u(this,"onTableColumnsChange",()=>{this.table&&(this.columns=this.table.columns)});this.columns=[],this.data={},this.isHeader=!1}get _columnNames(){return this.columns.map(n=>n.name)}get _columnWidths(){return this.columns.map(n=>n.width)}set table(t){this._table&&(this.columns=[],this._table.removeEventListener("columns-change",this.onTableColumnsChange)),this._table=t,this._table&&(this.columns=this._table.columns,this._table.addEventListener("columns-change",this.onTableColumnsChange),this._table.addEventListener("indentation",this.onTableIndentationColorChange))}get table(){return this._table}render(){var s;const t=((s=this.table)==null?void 0:s.getRowIndentation(this.data))??0,n=[];for(const o in this.data){const r=this.data[o];let a;if(typeof r=="string")a=document.createElement("bim-label"),a.label=r;else{const{template:h,onCreated:d}=r,f=document.createElement("div");f.innerHTML=h,a=f.firstElementChild,f.remove(),d&&d(a)}const l=document.createElement("bim-table-cell");this._columnNames.indexOf(o)===0&&!this.isHeader&&(l.style.justifyContent="normal",l.style.marginLeft=`${t+.125}rem`),l.column=o,l.append(a),l.table=this.table,n.push(l)}return p`
      <style>
        :host {
          grid-template-areas: "${this._columnNames.join(" ")}";
          grid-template-columns: ${this._columnWidths.join(" ")};
        }
      </style>
      ${n}
      <slot></slot>
    `}}u(We,"styles",C`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      /* border-bottom: 1px solid var(--bim-ui_bg-contrast-20); */
    }
  `),u(We,"properties",{columns:{type:Object,attribute:!1},data:{type:Object,attribute:!1},isHeader:{type:Boolean,attribute:"is-header",reflect:!0}});class qe extends w{constructor(){super();u(this,"_children",L());u(this,"_headerRow",L());u(this,"_columnsChange",new Event("columns-change"));u(this,"_rows",[]);u(this,"_columns",[]);this.columns=[],this.minColWidth="4rem",this.headersHidden=!1,this.striped=!0,this.firstColCenter=!1}set rows(t){this._rows=t,this._value=t,this._columns=[],this.computeMissingColumns(t)&&(this.columns=this._columns)}get rows(){return this._rows}set columns(t){const n=[];for(const s of t){const o=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;n.push(o)}this._columns=n,this.computeMissingColumns(this.rows),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const n of this.columns)if(typeof n=="string")t[n]=n;else{const{name:s}=n;t[s]=s}return t}computeMissingColumns(t){let n=!1;for(const s of t){const{children:o,data:r}=s;for(const a in r)this._columns.map(c=>typeof c=="string"?c:c.name).includes(a)||(this._columns.push({name:a,width:`minmax(${this.minColWidth}, 1fr)`}),n=!0);if(o){const a=this.computeMissingColumns(o);a&&!n&&(n=a)}}return n}getRowIndentation(t,n=this.rows,s=0){for(const o of n){if(o.data===t)return s;if(o.children){const r=this.getRowIndentation(t,o.children,s+1);if(r!==null)return r}}return null}getGroupIndentation(t,n=this.rows,s=0){for(const o of n){if(o===t)return s;if(o.children){const r=this.getGroupIndentation(t,o.children,s+1);if(r!==null)return r}}return null}setIndentationColor(t,n){const s=new CustomEvent("indentation",{detail:{indentationLevel:t,color:n}});this.dispatchEvent(s)}updated(){const{value:t}=this._headerRow;t&&(t.isHeader=!0,t.data=this._headerRowData,t.table=this,t.style.gridArea="Header");const{value:n}=this._children;n&&(n.groups=this._value,n.table=this,n.style.gridArea="Body",n.style.backgroundColor="transparent")}filter(){this._value=[this._rows[0]],this.requestUpdate()}render(){const t=p`
      <bim-table-row ${R(this._headerRow)}></bim-table-row>
    `;return p`
      <div class="parent">
        <div class="controls" style="display: none;">
          <!-- <bim-text-input></bim-text-input> -->
          <div style="display: flex; gap: 0.375rem; width: 15rem;">
            <bim-button icon="solar:filter-bold" label="Filter"></bim-button>
            <bim-button
              icon="solar:sort-vertical-bold"
              label="Sort"
            ></bim-button>
            <bim-button
              icon="material-symbols:ad-group-outline-rounded"
              label="Group"
            ></bim-button>
          </div>
        </div>
        ${this.headersHidden?null:t}
        <bim-table-children ${R(this._children)}></bim-table-children>
      </div>
    `}}u(qe,"styles",[J.scrollbar,C`
      :host {
        --bim-button--bgc: transparent;
        position: relative;
        overflow: auto;
      }

      .parent {
        display: grid;
        grid-template-areas: "Header" "Body";
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
    `]),u(qe,"properties",{_value:{type:Object,state:!0},columns:{type:Array,attribute:!1},rows:{type:Object,attribute:!1},branches:{type:Boolean,reflect:!0},striped:{type:Boolean,reflect:!0},headersHidden:{type:Boolean,attribute:"headers-hidden",reflect:!0},firstColCenter:{type:Boolean,attribute:"first-col-center",reflect:!0},minColWidth:{type:String,attribute:"min-col-width",reflect:!0}});class Ye extends w{constructor(){super();u(this,"onValueChange",new Event("input"));this.value="",this.placeholder="",this.vertical=!1}onInputChange(t){t.stopPropagation();const n=t.target;this.value=n.value,this.dispatchEvent(this.onValueChange)}render(){return p`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        <input
          type="text"
          .value=${this.value}
          .placeholder=${this.placeholder}
          @change=${this.onInputChange}
          @input=${this.onInputChange}
        />
      </bim-input>
    `}}u(Ye,"styles",C`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      padding: 0 var(--bim-ui_size-3xs);
      border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host(:focus) {
      --bim-input--olc: var(--bim-ui_color-accent);
    }

    :host([disabled]) {
      /* --bim-input--bgc: var(--bim-ui_bg-) */
    }
  `),u(Ye,"properties",{icon:{type:String,reflect:!0},label:{type:String,reflect:!0},name:{type:String,reflect:!0},placeholder:{type:String,reflect:!0},value:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0}});class Jt extends w{constructor(){super();u(this,"_vertical",!1);this.rows=2,this.vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const n of t)this.vertical?n.setAttribute("label-hidden",""):n.removeAttribute("label-hidden")}render(){return p`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}}u(Jt,"styles",C`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `),u(Jt,"properties",{rows:{type:Number,reflect:!0},vertical:{type:Boolean,reflect:!0}});class Zt extends w{constructor(){super(...arguments);u(this,"_vertical",!1);u(this,"_labelHidden",!1)}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const n of t)n instanceof Jt&&(n.vertical=this.vertical),n.toggleAttribute("label-hidden",this.vertical)}connectedCallback(){super.connectedCallback()}render(){return p`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?p`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
      </div>
    `}}u(Zt,"styles",C`
    :host {
      --bim-label--fz: var(--bim-ui_size-xs);
      --bim-label--c: var(--bim-ui_bg-contrast-60);
      width: 100%;
      height: 100%;
    }

    :host(:not([vertical])) ::slotted(bim-button[vertical]) {
      --bim-icon--fz: var(--bim-ui_size-5xl);
      min-height: 3.75rem;
    }

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
      height: 100%;
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
  `),u(Zt,"properties",{label:{type:String,reflect:!0},icon:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0},labelHidden:{type:Boolean,attribute:"label-hidden",reflect:!0}});const x=class x{static set config(e){this._config={...x._config,...e}}static get config(){return x._config}static addGlobalStyles(){let e=document.querySelector("style[id='bim-ui']");if(e)return;e=document.createElement("style"),e.id="bim-ui",e.textContent=J.globalStyles.cssText;const t=document.head.firstChild;t?document.head.insertBefore(e,t):document.head.append(e)}static defineCustomElement(e,t){customElements.get(e)||customElements.define(e,t)}static registerComponents(){x.addGlobalStyles(),x.defineCustomElement("bim-button",Oe),x.defineCustomElement("bim-checkbox",ze),x.defineCustomElement("bim-color-input",Ie),x.defineCustomElement("bim-context-menu",Le),x.defineCustomElement("bim-dropdown",Re),x.defineCustomElement("bim-grid",Kt),x.defineCustomElement("bim-icon",Pe),x.defineCustomElement("bim-input",Be),x.defineCustomElement("bim-label",Me),x.defineCustomElement("bim-number-input",Ne),x.defineCustomElement("bim-option",D),x.defineCustomElement("bim-panel",Lt),x.defineCustomElement("bim-panels-container",He),x.defineCustomElement("bim-panel-section",je),x.defineCustomElement("bim-selector-input",De),x.defineCustomElement("bim-table",qe),x.defineCustomElement("bim-table-cell",Ve),x.defineCustomElement("bim-table-children",Ue),x.defineCustomElement("bim-table-group",Fe),x.defineCustomElement("bim-table-row",We),x.defineCustomElement("bim-text-input",Ye),x.defineCustomElement("bim-toolbar",te),x.defineCustomElement("bim-toolbar-group",Jt),x.defineCustomElement("bim-toolbar-section",Zt),x.defineCustomElement("bim-toolbars-container",Qe),x.defineCustomElement("bim-viewport",Ge)}static newRandomId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";for(let n=0;n<10;n++){const s=Math.floor(Math.random()*e.length);t+=e.charAt(s)}return t}};u(x,"_config",{sectionLabelOnVerticalToolbar:!1,multiPanels:!1,draggableToolbars:!0,draggablePanels:!0});let ct=x;const At=class At extends w{constructor(){super();u(this,"_managerID",ct.newRandomId());u(this,"_active",!1);u(this,"_vertical",!1);u(this,"_gridArea","");u(this,"activationButton",document.createElement("bim-button"));this.setActivationButton()}set active(t){var n;if(this._active=t,this.activationButton.active=t,t){const s=((n=this.parentElement)==null?void 0:n.children)??[];for(const o of s)o instanceof At&&o!==this&&(o.active=!1)}}get active(){return this._active}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}get gridArea(){return this._gridArea}set gridArea(t){this._gridArea=t,this.style.gridArea=`toolbar-${t}`}setActivationButton(){this.activationButton.draggable=ct.config.draggableToolbars,this.activationButton.addEventListener("click",()=>this.active=!this.active),this.activationButton.setAttribute("data-ui-manager-id",this._managerID),this.activationButton.addEventListener("dragstart",t=>{const n=this.getAttribute("data-ui-manager-id");t.dataTransfer&&n&&(t.dataTransfer.setData("id",n),t.dataTransfer.effectAllowed="move");const s=document.querySelectorAll("bim-toolbars-container");for(const o of s)o!==this.parentElement&&(o.dropping=!0)}),this.activationButton.addEventListener("dragend",t=>{t.dataTransfer&&t.dataTransfer.clearData();const n=document.querySelectorAll("bim-toolbars-container");for(const s of n)s.dropping=!1})}updateSections(){const t=this.children;for(const n of t)n instanceof Zt&&(n.labelHidden=this.vertical&&!ct.config.sectionLabelOnVerticalToolbar,n.vertical=this.vertical)}firstUpdated(){this.setAttribute("data-ui-manager-id",this._managerID)}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}render(){return this.activationButton.label=this.label,this.activationButton.active=this.active,this.activationButton.icon=this.icon,p`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};u(At,"styles",C`
    :host {
      --bim-button--bgc: transparent;
      background-color: var(--bim-ui_bg-base);
      border-radius: var(--bim-ui_size-4xs);
    }

    :host([active]) {
      display: block;
    }

    :host(:not([active])) {
      display: none;
    }

    .parent {
      display: flex;
      align-items: center;
    }

    :host([vertical]) .parent {
      flex-direction: column;
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-20);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      border-right: none;
    }
  `),u(At,"properties",{label:{type:String,reflect:!0},icon:{type:String,reflect:!0},labelsHidden:{type:Boolean,attribute:"labels-hidden",reflect:!0},vertical:{type:Boolean,reflect:!0},gridArea:{type:String,attribute:!1},active:{type:Boolean,reflect:!0}});let te=At;class Qe extends w{constructor(){super();u(this,"_vertical",!1);u(this,"_activationButtons",[]);u(this,"onDragOver",t=>{t.preventDefault(),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")});u(this,"onDrop",t=>{var r;t.preventDefault();const n=(r=t.dataTransfer)==null?void 0:r.getData("id");if(!n)return;const s=document.querySelector(`bim-toolbar[data-ui-manager-id='${n}']`);!s||[...this.children].includes(s)||this.append(s)});this.addEventListener("dragover",this.onDragOver),this.addEventListener("drop",this.onDrop)}set vertical(t){this._vertical=t,this.updateToolbars()}get vertical(){return this._vertical}updateToolbars(){let t=!1;for(const n of this.children)n instanceof te&&(t?n.active=!1:t=n.active,this._activationButtons.push(n.activationButton),n.vertical=this.vertical);this.requestUpdate()}render(){const t=p`<div class="tabs">
      ${this._activationButtons}
    </div>`,n=p`<bim-button style="flex-grow: 0;"
      >${this._activationButtons}</bim-button
    >`,s=p`<div class="drop-element"></div>`;return p`
      <div class="parent">
        ${this.vertical?null:t}
        ${this.vertical?n:null}
        ${this.dropping?s:p`
              <div class="toolbars">
                <slot @slotchange=${this.updateToolbars}></slot>
              </div>
            `}
      </div>
    `}}u(Qe,"styles",[J.scrollbar,C`
      :host {
        justify-self: var(--bim-toolbars-container--js);
        align-self: var(--bim-toolbars-container--as);
      }

      :host([dropping]) {
        justify-self: auto;
        align-self: auto;
      }

      /* Parent */

      .parent {
        display: flex;
        pointer-events: auto;
      }

      :host([floating]) .parent {
        align-items: center;
      }

      :host([vertical]) .parent {
        height: 100%;
        flex-direction: column;
      }

      :host(:not([vertical])) .parent {
        flex-direction: column;
      }

      /* Tabs container */

      .tabs {
        --bim-label--fz: var(--bim-ui_size-xs);
        --bim-label--c: var(--bim-ui_bg-contrast-100);
        --bim-button--bdrs: 0;
        --bim-button--bgc: var(--bim-ui_bg-base);
        display: flex;
        width: fit-content;
      }

      :host([tabs-hidden]) .tabs {
        display: none;
      }

      :host([floating]) .tabs {
        overflow: hidden;
        border-top-left-radius: var(
          --bim-toolbars-container--bdrs,
          var(--bim-ui_size-4xs)
        );
        border-top-right-radius: var(
          --bim-toolbars-container--bdrs,
          var(--bim-ui_size-4xs)
        );
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
        outline: var(--bim-toolbars-container--olw) solid
          var(--bim-toolbars-container--olc);
      }

      :host([vertical]) .tabs {
        display: none;
        writing-mode: tb;
      }

      .tabs bim-button {
        font-weight: 600;
        height: var(--bim-ui_size-9xl);
      }

      .tabs bim-button:hover,
      .tabs bim-button[active] {
        --bim-label--c: white;
        background-color: var(--bim-ui_color-main);
      }

      /* Toolbars container */

      .toolbars {
        overflow: auto;
        display: flex;
        flex: 1;
        background-color: var(
          --bim-toolbars-container--bgc,
          var(--bim-ui_bg-base)
        );
      }

      :host([floating]:not([vertical])) .toolbars {
        width: 120%;
        justify-content: center;
      }

      :host([floating]) .toolbars {
        outline: var(--bim-toolbars-container--olw) solid
          var(--bim-toolbars-container--olc);
        border-radius: var(
          --bim-toolbars-container--bdrs,
          var(--bim-ui_size-4xs)
        );
        box-shadow: 1px 2px 8px 2px rgba(0, 0, 0, 0.15);
      }

      :host([floating][vertical]) .toolbars {
        border-radius: var(
          --bim-toolbars-container--bdrs,
          0 0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs)
        );
      }

      :host([vertical]) .toolbars {
        flex-direction: column;
      }

      :host([tabs]) .toolbars {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }

      :host(:not([tabs-hidden]):not([floating])) .toolbars {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      /* More toolbars button */
      .parent > bim-button {
        --bim-button--bgc: var(--bim-ui_bg-base);
        --bim-button--bdrs: var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0 0;
        --bim-button--olw: 1px;
        --bim-button--olc: var(--bim-ui_bg-contrast-20);
        width: 100%;
      }

      :host(:not([floating])) .parent > bim-button {
        --bim-button--bdrs: 0;
      }

      /* Drop element */

      .drop-element {
        box-sizing: border-box;
        min-width: 2.75rem;
        width: 100%;
        min-height: 2.75rem;
        height: 100%;
        background-color: #6528d70d;
        border: 2px dashed var(--bim-ui_color-main);
        border-radius: 1rem;
        z-index: 1000;
      }
    `]),u(Qe,"properties",{floating:{type:Boolean,reflect:!0},vertical:{type:Boolean,reflect:!0},gridArea:{type:String,attribute:!1},tabsHidden:{type:Boolean,attribute:"tabs-hidden",reflect:!0},dropping:{type:Boolean,reflect:!0}});class Ge extends w{constructor(){super();u(this,"_onViewportResize",new Event("resize"));u(this,"grid",new Kt);new ResizeObserver(()=>this.dispatchEvent(this._onViewportResize)).observe(this),this.append(this.grid)}firstUpdated(){this.style.gridArea="viewport",this.grid.floating=!0}render(){return p`
      <div class="parent">
        <slot></slot>
      </div>
    `}}u(Ge,"styles",C`
    :host {
      position: relative;
      display: block;
      min-width: 0;
      min-height: 0;
    }

    .parent {
      position: relative;
      height: 100%;
    }
  `),u(Ge,"properties",{});ct.registerComponents();const Qo=w.create(()=>p`
    <bim-panel-section label="Stateless Panel Section">
      <bim-color-input label="Color"></bim-color-input>
    </bim-panel-section>
  `),[Go,Hi]=w.create(i=>{const{label:e,counter:t}=i,n=`This panel section has been updated ${t} ${t===1?"time":"times"}`;return p`
      <bim-panel-section label=${e}>
        <bim-label label=${n}></bim-label>
      </bim-panel-section>
    `},{label:"Statefull Panel Section",counter:0}),Xo=w.create(()=>{let i=0;return p`
    <bim-panel label="My Panel" active>
      <bim-panel-section label="Update Functions">
        <bim-button @click=${()=>{i++,i>=5?Hi({label:"Powered Statefull Panel Section 💪",counter:i}):Hi({counter:i})}} label="Update Statefull Section"></bim-button>
      </bim-panel-section>
      ${Qo}
      ${Go}
    </bim-panel>
  `});document.body.append(Xo);
