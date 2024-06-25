var qn=Object.defineProperty;var Wn=(i,t,e)=>t in i?qn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var tt=(i,t,e)=>(Wn(i,typeof t!="symbol"?t+"":t,e),e);import{T as Le,s as E,i as C,x as m,n as h,j as Dt,r as Wt}from"./state--sg4lz7-.js";const Et=Math.min,W=Math.max,re=Math.round,nt=i=>({x:i,y:i}),Un={left:"right",right:"left",bottom:"top",top:"bottom"},Qn={start:"end",end:"start"};function ki(i,t,e){return W(i,Et(t,e))}function Ut(i,t){return typeof i=="function"?i(t):i}function U(i){return i.split("-")[0]}function ve(i){return i.split("-")[1]}function Ki(i){return i==="x"?"y":"x"}function Zi(i){return i==="y"?"height":"width"}function vt(i){return["top","bottom"].includes(U(i))?"y":"x"}function tn(i){return Ki(vt(i))}function Yn(i,t,e){e===void 0&&(e=!1);const s=ve(i),n=tn(i),r=Zi(n);let o=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=oe(o)),[o,oe(o)]}function Gn(i){const t=oe(i);return[Ie(i),t,Ie(t)]}function Ie(i){return i.replace(/start|end/g,t=>Qn[t])}function Xn(i,t,e){const s=["left","right"],n=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?r:o;default:return[]}}function Jn(i,t,e,s){const n=ve(i);let r=Xn(U(i),e==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(Ie)))),r}function oe(i){return i.replace(/left|right|bottom|top/g,t=>Un[t])}function Kn(i){return{top:0,right:0,bottom:0,left:0,...i}}function en(i){return typeof i!="number"?Kn(i):{top:i,right:i,bottom:i,left:i}}function St(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function Oi(i,t,e){let{reference:s,floating:n}=i;const r=vt(t),o=tn(t),l=Zi(o),a=U(t),c=r==="y",u=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,f=s[l]/2-n[l]/2;let p;switch(a){case"top":p={x:u,y:s.y-n.height};break;case"bottom":p={x:u,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-n.width,y:d};break;default:p={x:s.x,y:s.y}}switch(ve(t)){case"start":p[o]-=f*(e&&c?-1:1);break;case"end":p[o]+=f*(e&&c?-1:1);break}return p}const Zn=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=e,l=r.filter(Boolean),a=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:u,y:d}=Oi(c,s,a),f=s,p={},b=0;for(let v=0;v<l.length;v++){const{name:g,fn:S}=l[v],{x:$,y:x,data:w,reset:O}=await S({x:u,y:d,initialPlacement:s,placement:f,strategy:n,middlewareData:p,rects:c,platform:o,elements:{reference:i,floating:t}});u=$??u,d=x??d,p={...p,[g]:{...p[g],...w}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(f=O.placement),O.rects&&(c=O.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):O.rects),{x:u,y:d}=Oi(c,f,a)),v=-1)}return{x:u,y:d,placement:f,strategy:n,middlewareData:p}};async function Qe(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:l,strategy:a}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Ut(t,i),b=en(p),g=l[f?d==="floating"?"reference":"floating":d],S=St(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(g)))==null||e?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),$=d==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),w=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},O=St(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:$,offsetParent:x,strategy:a}):$);return{top:(S.top-O.top+b.top)/w.y,bottom:(O.bottom-S.bottom+b.bottom)/w.y,left:(S.left-O.left+b.left)/w.x,right:(O.right-S.right+b.right)/w.x}}const ts=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...g}=Ut(i,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const S=U(n),$=vt(l),x=U(l)===l,w=await(a.isRTL==null?void 0:a.isRTL(c.floating)),O=f||(x||!v?[oe(l)]:Gn(l)),_=b!=="none";!f&&_&&O.push(...Jn(l,v,b,w));const T=[l,...O],R=await Qe(t,g),B=[];let k=((s=r.flip)==null?void 0:s.overflows)||[];if(u&&B.push(R[S]),d){const N=Yn(n,o,w);B.push(R[N[0]],R[N[1]])}if(k=[...k,{placement:n,overflows:B}],!B.every(N=>N<=0)){var xt,zt;const N=(((xt=r.flip)==null?void 0:xt.index)||0)+1,Ct=T[N];if(Ct)return{data:{index:N,overflows:k},reset:{placement:Ct}};let J=(zt=k.filter(K=>K.overflows[0]<=0).sort((K,H)=>K.overflows[1]-H.overflows[1])[0])==null?void 0:zt.placement;if(!J)switch(p){case"bestFit":{var wt;const K=(wt=k.filter(H=>{if(_){const Z=vt(H.placement);return Z===$||Z==="y"}return!0}).map(H=>[H.placement,H.overflows.filter(Z=>Z>0).reduce((Z,Vn)=>Z+Vn,0)]).sort((H,Z)=>H[1]-Z[1])[0])==null?void 0:wt[0];K&&(J=K);break}case"initialPlacement":J=l;break}if(n!==J)return{reset:{placement:J}}}return{}}}};function nn(i){const t=Et(...i.map(r=>r.left)),e=Et(...i.map(r=>r.top)),s=W(...i.map(r=>r.right)),n=W(...i.map(r=>r.bottom));return{x:t,y:e,width:s-t,height:n-e}}function es(i){const t=i.slice().sort((n,r)=>n.y-r.y),e=[];let s=null;for(let n=0;n<t.length;n++){const r=t[n];!s||r.y-s.y>s.height/2?e.push([r]):e[e.length-1].push(r),s=r}return e.map(n=>St(nn(n)))}const is=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:r,strategy:o}=t,{padding:l=2,x:a,y:c}=Ut(i,t),u=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(s.reference))||[]),d=es(u),f=St(nn(u)),p=en(l);function b(){if(d.length===2&&d[0].left>d[1].right&&a!=null&&c!=null)return d.find(g=>a>g.left-p.left&&a<g.right+p.right&&c>g.top-p.top&&c<g.bottom+p.bottom)||f;if(d.length>=2){if(vt(e)==="y"){const k=d[0],xt=d[d.length-1],zt=U(e)==="top",wt=k.top,N=xt.bottom,Ct=zt?k.left:xt.left,J=zt?k.right:xt.right,K=J-Ct,H=N-wt;return{top:wt,bottom:N,left:Ct,right:J,width:K,height:H,x:Ct,y:wt}}const g=U(e)==="left",S=W(...d.map(k=>k.right)),$=Et(...d.map(k=>k.left)),x=d.filter(k=>g?k.left===$:k.right===S),w=x[0].top,O=x[x.length-1].bottom,_=$,T=S,R=T-_,B=O-w;return{top:w,bottom:O,left:_,right:T,width:R,height:B,x:_,y:w}}return f}const v=await r.getElementRects({reference:{getBoundingClientRect:b},floating:s.floating,strategy:o});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function ns(i,t){const{placement:e,platform:s,elements:n}=i,r=await(s.isRTL==null?void 0:s.isRTL(n.floating)),o=U(e),l=ve(e),a=vt(e)==="y",c=["left","top"].includes(o)?-1:1,u=r&&a?-1:1,d=Ut(t,i);let{mainAxis:f,crossAxis:p,alignmentAxis:b}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return l&&typeof b=="number"&&(p=l==="end"?b*-1:b),a?{x:p*u,y:f*c}:{x:f*c,y:p*u}}const sn=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:r,placement:o,middlewareData:l}=t,a=await ns(t,i);return o===((e=l.offset)==null?void 0:e.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:n+a.x,y:r+a.y,data:{...a,placement:o}}}}},ss=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:l={fn:g=>{let{x:S,y:$}=g;return{x:S,y:$}}},...a}=Ut(i,t),c={x:e,y:s},u=await Qe(t,a),d=vt(U(n)),f=Ki(d);let p=c[f],b=c[d];if(r){const g=f==="y"?"top":"left",S=f==="y"?"bottom":"right",$=p+u[g],x=p-u[S];p=ki($,p,x)}if(o){const g=d==="y"?"top":"left",S=d==="y"?"bottom":"right",$=b+u[g],x=b-u[S];b=ki($,b,x)}const v=l.fn({...t,[f]:p,[d]:b});return{...v,data:{x:v.x-e,y:v.y-s}}}}};function st(i){return rn(i)?(i.nodeName||"").toLowerCase():"#document"}function I(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function ft(i){var t;return(t=(rn(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function rn(i){return i instanceof Node||i instanceof I(i).Node}function Q(i){return i instanceof Element||i instanceof I(i).Element}function V(i){return i instanceof HTMLElement||i instanceof I(i).HTMLElement}function Ai(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof I(i).ShadowRoot}function Qt(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=z(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function rs(i){return["table","td","th"].includes(st(i))}function os(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function Ye(i){const t=Ge(),e=z(i);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function ls(i){let t=kt(i);for(;V(t)&&!ye(t);){if(os(t))return null;if(Ye(t))return t;t=kt(t)}return null}function Ge(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ye(i){return["html","body","#document"].includes(st(i))}function z(i){return I(i).getComputedStyle(i)}function _e(i){return Q(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function kt(i){if(st(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Ai(i)&&i.host||ft(i);return Ai(t)?t.host:t}function on(i){const t=kt(i);return ye(t)?i.ownerDocument?i.ownerDocument.body:i.body:V(t)&&Qt(t)?t:on(t)}function ze(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=on(i),r=n===((s=i.ownerDocument)==null?void 0:s.body),o=I(n);return r?t.concat(o,o.visualViewport||[],Qt(n)?n:[],o.frameElement&&e?ze(o.frameElement):[]):t.concat(n,ze(n,[],e))}function ln(i){const t=z(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=V(i),r=n?i.offsetWidth:e,o=n?i.offsetHeight:s,l=re(e)!==r||re(s)!==o;return l&&(e=r,s=o),{width:e,height:s,$:l}}function an(i){return Q(i)?i:i.contextElement}function $t(i){const t=an(i);if(!V(t))return nt(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:r}=ln(t);let o=(r?re(e.width):e.width)/s,l=(r?re(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const as=nt(0);function cn(i){const t=I(i);return!Ge()||!t.visualViewport?as:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cs(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==I(i)?!1:t}function Ft(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),r=an(i);let o=nt(1);t&&(s?Q(s)&&(o=$t(s)):o=$t(i));const l=cs(r,e,s)?cn(r):nt(0);let a=(n.left+l.x)/o.x,c=(n.top+l.y)/o.y,u=n.width/o.x,d=n.height/o.y;if(r){const f=I(r),p=s&&Q(s)?I(s):s;let b=f,v=b.frameElement;for(;v&&s&&p!==b;){const g=$t(v),S=v.getBoundingClientRect(),$=z(v),x=S.left+(v.clientLeft+parseFloat($.paddingLeft))*g.x,w=S.top+(v.clientTop+parseFloat($.paddingTop))*g.y;a*=g.x,c*=g.y,u*=g.x,d*=g.y,a+=x,c+=w,b=I(v),v=b.frameElement}}return St({width:u,height:d,x:a,y:c})}const us=[":popover-open",":modal"];function un(i){return us.some(t=>{try{return i.matches(t)}catch{return!1}})}function hs(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const r=n==="fixed",o=ft(s),l=t?un(t.floating):!1;if(s===o||l&&r)return e;let a={scrollLeft:0,scrollTop:0},c=nt(1);const u=nt(0),d=V(s);if((d||!d&&!r)&&((st(s)!=="body"||Qt(o))&&(a=_e(s)),V(s))){const f=Ft(s);c=$t(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-a.scrollLeft*c.x+u.x,y:e.y*c.y-a.scrollTop*c.y+u.y}}function ds(i){return Array.from(i.getClientRects())}function hn(i){return Ft(ft(i)).left+_e(i).scrollLeft}function fs(i){const t=ft(i),e=_e(i),s=i.ownerDocument.body,n=W(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=W(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-e.scrollLeft+hn(i);const l=-e.scrollTop;return z(s).direction==="rtl"&&(o+=W(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:l}}function ps(i,t){const e=I(i),s=ft(i),n=e.visualViewport;let r=s.clientWidth,o=s.clientHeight,l=0,a=0;if(n){r=n.width,o=n.height;const c=Ge();(!c||c&&t==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:r,height:o,x:l,y:a}}function ms(i,t){const e=Ft(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,r=V(i)?$t(i):nt(1),o=i.clientWidth*r.x,l=i.clientHeight*r.y,a=n*r.x,c=s*r.y;return{width:o,height:l,x:a,y:c}}function Ti(i,t,e){let s;if(t==="viewport")s=ps(i,e);else if(t==="document")s=fs(ft(i));else if(Q(t))s=ms(t,e);else{const n=cn(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return St(s)}function dn(i,t){const e=kt(i);return e===t||!Q(e)||ye(e)?!1:z(e).position==="fixed"||dn(e,t)}function bs(i,t){const e=t.get(i);if(e)return e;let s=ze(i,[],!1).filter(l=>Q(l)&&st(l)!=="body"),n=null;const r=z(i).position==="fixed";let o=r?kt(i):i;for(;Q(o)&&!ye(o);){const l=z(o),a=Ye(o);!a&&l.position==="fixed"&&(n=null),(r?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Qt(o)&&!a&&dn(i,o))?s=s.filter(u=>u!==o):n=l,o=kt(o)}return t.set(i,s),s}function gs(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const o=[...e==="clippingAncestors"?bs(t,this._c):[].concat(e),s],l=o[0],a=o.reduce((c,u)=>{const d=Ti(t,u,n);return c.top=W(d.top,c.top),c.right=Et(d.right,c.right),c.bottom=Et(d.bottom,c.bottom),c.left=W(d.left,c.left),c},Ti(t,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function vs(i){const{width:t,height:e}=ln(i);return{width:t,height:e}}function ys(i,t,e){const s=V(t),n=ft(t),r=e==="fixed",o=Ft(i,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=nt(0);if(s||!s&&!r)if((st(t)!=="body"||Qt(n))&&(l=_e(t)),s){const d=Ft(t,!0,r,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else n&&(a.x=hn(n));const c=o.left+l.scrollLeft-a.x,u=o.top+l.scrollTop-a.y;return{x:c,y:u,width:o.width,height:o.height}}function Pi(i,t){return!V(i)||z(i).position==="fixed"?null:t?t(i):i.offsetParent}function fn(i,t){const e=I(i);if(!V(i)||un(i))return e;let s=Pi(i,t);for(;s&&rs(s)&&z(s).position==="static";)s=Pi(s,t);return s&&(st(s)==="html"||st(s)==="body"&&z(s).position==="static"&&!Ye(s))?e:s||ls(i)||e}const _s=async function(i){const t=this.getOffsetParent||fn,e=this.getDimensions;return{reference:ys(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function xs(i){return z(i).direction==="rtl"}const ws={convertOffsetParentRelativeRectToViewportRelativeRect:hs,getDocumentElement:ft,getClippingRect:gs,getOffsetParent:fn,getElementRects:_s,getClientRects:ds,getDimensions:vs,getScale:$t,isElement:Q,isRTL:xs},pn=ss,mn=ts,bn=is,gn=(i,t,e)=>{const s=new Map,n={platform:ws,...e},r={...n.platform,_c:s};return Zn(i,t,{...n,platform:r})};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Cs=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Es=i=>(...t)=>({_$litDirective$:i,values:t});class Ss{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rt=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const n of e)(s=n._$AO)==null||s.call(n,t,!1),Rt(n,t);return!0},le=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},vn=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),As(t)}};function ks(i){this._$AN!==void 0?(le(this),this._$AM=i,vn(this)):this._$AM=i}function Os(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=e;r<s.length;r++)Rt(s[r],!1),le(s[r]);else s!=null&&(Rt(s,!1),le(s));else Rt(this,i)}const As=i=>{i.type==$s.CHILD&&(i._$AP??(i._$AP=Os),i._$AQ??(i._$AQ=ks))};class Ts extends Ss{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),vn(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(n=this.disconnected)==null||n.call(this)),e&&(Rt(this,t),le(this))}setValue(t){if(Cs(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=()=>new Ps;class Ps{}const ke=new WeakMap,it=Es(class extends Ts{render(i){return Le}update(i,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),Le}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=ke.get(t);e===void 0&&(e=new WeakMap,ke.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=ke.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const yn=Object.freeze({left:0,top:0,width:16,height:16}),ae=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Yt=Object.freeze({...yn,...ae}),je=Object.freeze({...Yt,body:"",hidden:!1}),Ls=Object.freeze({width:null,height:null}),_n=Object.freeze({...Ls,...ae});function Is(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(i.slice(0,i.length-e.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}const zs=/[\s,]+/;function js(i,t){t.split(zs).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const xn={..._n,preserveAspectRatio:""};function Li(i){const t={...xn},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Is(e("rotate","")),js(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Rs(i,t){for(const e in xn)if(i[e]!==t[e])return!0;return!1}const Bt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Gt=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:s,prefix:a,name:l};return t&&!ne(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const l={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!ne(l)?null:l}if(e&&s===""){const l={provider:s,prefix:"",name:r};return t&&!ne(l,e)?null:l}return null},ne=(i,t)=>i?!!((i.provider===""||i.provider.match(Bt))&&(t&&i.prefix===""||i.prefix.match(Bt))&&i.name.match(Bt)):!1;function Bs(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Ii(i,t){const e=Bs(i,t);for(const s in je)s in ae?s in i&&!(s in e)&&(e[s]=ae[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function Ms(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function r(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const l=s[o]&&s[o].parent,a=l&&r(l);a&&(n[o]=[l].concat(a))}return n[o]}return Object.keys(e).concat(Object.keys(s)).forEach(r),n}function Ds(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let r={};function o(l){r=Ii(s[l]||n[l],r)}return o(t),e.forEach(o),Ii(i,r)}function wn(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=Ms(i);for(const n in s){const r=s[n];r&&(t(n,Ds(i,n,r)),e.push(n))}return e}const Fs={provider:"",aliases:{},not_found:{},...yn};function Oe(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function Cn(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Oe(i,Fs))return null;const e=t.icons;for(const n in e){const r=e[n];if(!n.match(Bt)||typeof r.body!="string"||!Oe(r,je))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],o=r.parent;if(!n.match(Bt)||typeof o!="string"||!e[o]&&!s[o]||!Oe(r,je))return null}return t}const ce=Object.create(null);function Ns(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function rt(i,t){const e=ce[i]||(ce[i]=Object.create(null));return e[t]||(e[t]=Ns(i,t))}function Xe(i,t){return Cn(t)?wn(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Hs(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Vs(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(ce)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(ce[n]||{})).forEach(o=>{const l=rt(n,o);e=e.concat(Object.keys(l.icons).map(a=>(n!==""?"@"+n+":":"")+o+":"+a))})}),e}let Nt=!1;function $n(i){return typeof i=="boolean"&&(Nt=i),Nt}function Ht(i){const t=typeof i=="string"?Gt(i,!0,Nt):i;if(t){const e=rt(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function En(i,t){const e=Gt(i,!0,Nt);if(!e)return!1;const s=rt(e.provider,e.prefix);return Hs(s,e.name,t)}function zi(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Nt&&!t&&!i.prefix){let n=!1;return Cn(i)&&(i.prefix="",wn(i,(r,o)=>{o&&En(r,o)&&(n=!0)})),n}const e=i.prefix;if(!ne({provider:t,prefix:e,name:"a"}))return!1;const s=rt(t,e);return!!Xe(s,i)}function ji(i){return!!Ht(i)}function qs(i){const t=Ht(i);return t?{...Yt,...t}:null}function Ws(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,o=n.prefix,l=n.name,a=e[r]||(e[r]=Object.create(null)),c=a[o]||(a[o]=rt(r,o));let u;l in c.icons?u=t.loaded:o===""||c.missing.has(l)?u=t.missing:u=t.pending;const d={provider:r,prefix:o,name:l};u.push(d)}),t}function Sn(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function Us(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(r=>{const o=r.icons,l=o.pending.length;o.pending=o.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(i.icons[c])o.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==l&&(e||Sn([i],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let Qs=0;function Ys(i,t,e){const s=Qs++,n=Sn.bind(null,e,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}const Re=Object.create(null);function Ri(i,t){Re[i]=t}function Be(i){return Re[i]||Re[""]}function Gs(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const r=typeof n=="string"?Gt(n,t,e):n;r&&s.push(r)}),s}var Xs={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Js(i,t,e,s){const n=i.resources.length,r=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let _=i.resources.slice(0);for(o=[];_.length>1;){const T=Math.floor(Math.random()*_.length);o.push(_[T]),_=_.slice(0,T).concat(_.slice(T+1))}o=o.concat(_)}else o=i.resources.slice(r).concat(i.resources.slice(0,r));const l=Date.now();let a="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function b(){d&&(clearTimeout(d),d=null)}function v(){a==="pending"&&(a="aborted"),b(),f.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),f=[]}function g(_,T){T&&(p=[]),typeof _=="function"&&p.push(_)}function S(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:f.length,subscribe:g,abort:v}}function $(){a="failed",p.forEach(_=>{_(void 0,u)})}function x(){f.forEach(_=>{_.status==="pending"&&(_.status="aborted")}),f=[]}function w(_,T,R){const B=T!=="success";switch(f=f.filter(k=>k!==_),a){case"pending":break;case"failed":if(B||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){u=R,$();return}if(B){u=R,f.length||(o.length?O():$());return}if(b(),x(),!i.random){const k=i.resources.indexOf(_.resource);k!==-1&&k!==i.index&&(i.index=k)}a="completed",p.forEach(k=>{k(R)})}function O(){if(a!=="pending")return;b();const _=o.shift();if(_===void 0){if(f.length){d=setTimeout(()=>{b(),a==="pending"&&(x(),$())},i.timeout);return}$();return}const T={status:"pending",resource:_,callback:(R,B)=>{w(T,R,B)}};f.push(T),c++,d=setTimeout(O,i.rotate),e(_,t,T.callback)}return setTimeout(O),S}function kn(i){const t={...Xs,...i};let e=[];function s(){e=e.filter(l=>l().status==="pending")}function n(l,a,c){const u=Js(t,l,a,(d,f)=>{s(),c&&c(d,f)});return e.push(u),u}function r(l){return e.find(a=>l(a))||null}return{query:n,find:r,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:s}}function Je(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const xe=Object.create(null),jt=["https://api.simplesvg.com","https://api.unisvg.com"],se=[];for(;jt.length>0;)jt.length===1||Math.random()>.5?se.push(jt.shift()):se.push(jt.pop());xe[""]=Je({resources:["https://api.iconify.design"].concat(se)});function Bi(i,t){const e=Je(t);return e===null?!1:(xe[i]=e,!0)}function we(i){return xe[i]}function Ks(){return Object.keys(xe)}function Mi(){}const Ae=Object.create(null);function Zs(i){if(!Ae[i]){const t=we(i);if(!t)return;const e=kn(t),s={config:t,redundancy:e};Ae[i]=s}return Ae[i]}function On(i,t,e){let s,n;if(typeof i=="string"){const r=Be(i);if(!r)return e(void 0,424),Mi;n=r.send;const o=Zs(i);o&&(s=o.redundancy)}else{const r=Je(i);if(r){s=kn(r);const o=i.resources?i.resources[0]:"",l=Be(o);l&&(n=l.send)}}return!s||!n?(e(void 0,424),Mi):s.query(t,n,e)().abort}const Di="iconify2",Vt="iconify",An=Vt+"-count",Fi=Vt+"-version",Tn=36e5,tr=168,er=50;function Me(i,t){try{return i.getItem(t)}catch{}}function Ke(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Ni(i,t){try{i.removeItem(t)}catch{}}function De(i,t){return Ke(i,An,t.toString())}function Fe(i){return parseInt(Me(i,An))||0}const gt={local:!0,session:!0},Pn={local:new Set,session:new Set};let Ze=!1;function ir(i){Ze=i}let ie=typeof window>"u"?{}:window;function Ln(i){const t=i+"Storage";try{if(ie&&ie[t]&&typeof ie[t].length=="number")return ie[t]}catch{}gt[i]=!1}function In(i,t){const e=Ln(i);if(!e)return;const s=Me(e,Fi);if(s!==Di){if(s){const l=Fe(e);for(let a=0;a<l;a++)Ni(e,Vt+a.toString())}Ke(e,Fi,Di),De(e,0);return}const n=Math.floor(Date.now()/Tn)-tr,r=l=>{const a=Vt+l.toString(),c=Me(e,a);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,l))return!0}catch{}Ni(e,a)}};let o=Fe(e);for(let l=o-1;l>=0;l--)r(l)||(l===o-1?(o--,De(e,o)):Pn[i].add(l))}function zn(){if(!Ze){ir(!0);for(const i in gt)In(i,t=>{const e=t.data,s=t.provider,n=e.prefix,r=rt(s,n);if(!Xe(r,e).length)return!1;const o=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function nr(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in gt)In(s,n=>{const r=n.data;return n.provider!==i.provider||r.prefix!==i.prefix||r.lastModified===t});return!0}function sr(i,t){Ze||zn();function e(s){let n;if(!gt[s]||!(n=Ln(s)))return;const r=Pn[s];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=Fe(n),o>=er||!De(n,o+1))return;const l={cached:Math.floor(Date.now()/Tn),provider:i.provider,data:t};return Ke(n,Vt+o.toString(),JSON.stringify(l))}t.lastModified&&!nr(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Hi(){}function rr(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Us(i)}))}function or(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let r;if(!n||!(r=Be(e)))return;r.prepare(e,s,n).forEach(l=>{On(e,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{i.missing.add(c)});else try{const c=Xe(i,a);if(!c.length)return;const u=i.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),sr(i,a)}catch(c){console.error(c)}rr(i)})})}))}const ti=(i,t)=>{const e=Gs(i,!0,$n()),s=Ws(e);if(!s.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(s.loaded,s.missing,s.pending,Hi)}),()=>{a=!1}}const n=Object.create(null),r=[];let o,l;return s.pending.forEach(a=>{const{provider:c,prefix:u}=a;if(u===l&&c===o)return;o=c,l=u,r.push(rt(c,u));const d=n[c]||(n[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(a=>{const{provider:c,prefix:u,name:d}=a,f=rt(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),n[c][u].push(d))}),r.forEach(a=>{const{provider:c,prefix:u}=a;n[c][u].length&&or(a,n[c][u])}),t?Ys(t,s,r):Hi},lr=i=>new Promise((t,e)=>{const s=typeof i=="string"?Gt(i,!0):i;if(!s){e(i);return}ti([s||i],n=>{if(n.length&&s){const r=Ht(s);if(r){t({...Yt,...r});return}}e(i)})});function ar(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function cr(i,t){const e=typeof i=="string"?Gt(i,!0,!0):null;if(!e){const r=ar(i);return{value:i,data:r}}const s=Ht(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=ti([e],()=>t(i,e,Ht(e)));return{value:i,name:e,loading:n}}function Te(i){return i.hasAttribute("inline")}let jn=!1;try{jn=navigator.vendor.indexOf("Apple")===0}catch{}function ur(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(jn||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const hr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,dr=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ne(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(hr);if(s===null||!s.length)return i;const n=[];let r=s.shift(),o=dr.test(r);for(;;){if(o){const l=parseFloat(r);isNaN(l)?n.push(r):n.push(Math.ceil(l*t*e)/e)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");o=!o}}function fr(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),r=i.indexOf("</"+t);if(n===-1||r===-1)break;const o=i.indexOf(">",r);if(o===-1)break;e+=i.slice(n+1,r).trim(),i=i.slice(0,s).trim()+i.slice(o+1)}return{defs:e,content:i}}function pr(i,t){return i?"<defs>"+i+"</defs>"+t:t}function mr(i,t,e){const s=fr(i);return pr(s.defs,t+s.content+e)}const br=i=>i==="unset"||i==="undefined"||i==="none";function Rn(i,t){const e={...Yt,...i},s={..._n,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,s].forEach(v=>{const g=[],S=v.hFlip,$=v.vFlip;let x=v.rotate;S?$?x+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):$&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let w;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:w=n.height/2+n.top,g.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,g.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}x%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),g.length&&(r=mr(r,'<g transform="'+g.join(" ")+'">',"</g>"))});const o=s.width,l=s.height,a=n.width,c=n.height;let u,d;o===null?(d=l===null?"1em":l==="auto"?c:l,u=Ne(d,a/c)):(u=o==="auto"?a:o,d=l===null?Ne(u,c/a):l==="auto"?c:l);const f={},p=(v,g)=>{br(g)||(f[v]=g.toString())};p("width",u),p("height",d);const b=[n.left,n.top,a,c];return f.viewBox=b.join(" "),{attributes:f,viewBox:b,body:r}}function ei(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function gr(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function vr(i){return"data:image/svg+xml,"+gr(i)}function Bn(i){return'url("'+vr(i)+'")'}const yr=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ue=yr();function _r(i){ue=i}function xr(){return ue}function wr(i,t){const e=we(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const r=t+".json?icons=";s=e.maxURL-n-e.path.length-r.length}return s}function Cr(i){return i===404}const $r=(i,t,e)=>{const s=[],n=wr(i,t),r="icons";let o={type:r,provider:i,prefix:t,icons:[]},l=0;return e.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(s.push(o),o={type:r,provider:i,prefix:t,icons:[]},l=a.length),o.icons.push(a)}),s.push(o),s};function Er(i){if(typeof i=="string"){const t=we(i);if(t)return t.path}return"/"}const Sr=(i,t,e)=>{if(!ue){e("abort",424);return}let s=Er(t.provider);switch(t.type){case"icons":{const r=t.prefix,l=t.icons.join(","),a=new URLSearchParams({icons:l});s+=r+".json?"+a.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let n=503;ue(i+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{e(Cr(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",n)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",n)})},kr={prepare:$r,send:Sr};function Vi(i,t){switch(i){case"local":case"session":gt[i]=t;break;case"all":for(const e in gt)gt[e]=t;break}}const Pe="data-style";let Mn="";function Or(i){Mn=i}function qi(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Pe));e||(e=document.createElement("style"),e.setAttribute(Pe,Pe),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Mn}function Dn(){Ri("",kr),$n(!0);let i;try{i=window}catch{}if(i){if(zn(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!zi(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const r=e[s];if(typeof r!="object"||!r||r.resources===void 0)continue;Bi(s,r)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Vi(e,!0),disableCache:e=>Vi(e,!1),iconLoaded:ji,iconExists:ji,getIcon:qs,listIcons:Vs,addIcon:En,addCollection:zi,calculateSize:Ne,buildIcon:Rn,iconToHTML:ei,svgToURL:Bn,loadIcons:ti,loadIcon:lr,addAPIProvider:Bi,appendCustomStyle:Or,_api:{getAPIConfig:we,setAPIModule:Ri,sendAPIQuery:On,setFetch:_r,getFetch:xr,listAPIProviders:Ks}}}const He={"background-color":"currentColor"},Fn={"background-color":"transparent"},Wi={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ui={"-webkit-mask":He,mask:He,background:Fn};for(const i in Ui){const t=Ui[i];for(const e in Wi)t[i+"-"+e]=Wi[e]}function Qi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Ar(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=i.attributes,o=ei(n,{...r,width:t.width+"",height:t.height+""}),l=Bn(o),a=s.style,c={"--svg":l,width:Qi(r.width),height:Qi(r.height),...e?He:Fn};for(const u in c)a.setProperty(u,c[u]);return s}let Mt;function Tr(){try{Mt=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Mt=null}}function Pr(i){return Mt===void 0&&Tr(),Mt?Mt.createHTML(i):i}function Lr(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=ei(i.body,e);return t.innerHTML=Pr(n),t.firstChild}function Ve(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Yi(i,t){const e=t.icon.data,s=t.customisations,n=Rn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=Lr(n);break;default:o=Ar(n,{...Yt,...e},r==="mask")}const l=Ve(i);l?o.tagName==="SPAN"&&l.tagName===o.tagName?l.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,l):i.appendChild(o)}function Gi(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Ir(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends e{constructor(){super();tt(this,"_shadowRoot");tt(this,"_initialised",!1);tt(this,"_state");tt(this,"_checkQueued",!1);tt(this,"_connected",!1);tt(this,"_observer",null);tt(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),c=Te(this);qi(a,c),this._state=Gi({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const c=Te(this),u=this._state;c!==u.inline&&(u.inline=c,qi(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Te(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const c=this._shadowRoot;if(a.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Yi(c,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,c=this.getAttribute("icon");if(c!==a.icon.value){this._iconChanged(c);return}if(!a.rendered||!this._visible)return;const u=this.getAttribute("mode"),d=Li(this);(a.attrMode!==u||Rs(a.customisations,d)||!Ve(this._shadowRoot))&&this._renderIcon(a.icon,d,u)}_iconChanged(a){const c=cr(a,(u,d,f)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==u)return;const b={value:u,name:d,data:f};b.data?this._gotIconData(b):p.icon=b});c.data?this._gotIconData(c):this._state=Gi(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=Ve(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Li(this),this.getAttribute("mode"))}_renderIcon(a,c,u){const d=ur(a.data.body,u),f=this._state.inline;Yi(this._shadowRoot,this._state={rendered:!0,icon:a,inline:f,customisations:c,attrMode:u,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const c=a.some(u=>u.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(l=>{l in r.prototype||Object.defineProperty(r.prototype,l,{get:function(){return this.getAttribute(l)},set:function(a){a!==null?this.setAttribute(l,a):this.removeAttribute(l)}})});const o=Dn();for(const l in o)r[l]=r.prototype[l]=o[l];return t.define(i,r),r}Ir()||Dn();var zr=Object.defineProperty,q=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&zr(t,e,n),n},Tt;const F=(Tt=class extends E{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._parent=et(),this._tooltip=et(),this._contextMenu=et(),this._mouseLeave=!1,this.onWindowMouseUp=t=>{const{value:e}=this._contextMenu;!this.contains(t.target)&&e&&(e.visible=!1)},this.mouseLeave=!0,this.addEventListener("click",t=>t.stopPropagation())}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&gn(t,e,{placement:"bottom",middleware:[sn(10),bn(),mn(),pn({padding:5})]}).then(s=>{const{x:n,y:r}=s;Object.assign(e.style,{left:`${n}px`,top:`${r}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}onChildrenClick(t){t.stopPropagation();const{value:e}=this._contextMenu;e&&(e.visible=!e.visible)}onSlotChange(t){const{value:e}=this._contextMenu,s=t.target.assignedElements();for(const n of s){if(!(n instanceof Tt)){n.remove(),console.warn("Only bim-button is allowed inside bim-button. Child has been removed.");continue}n.addEventListener("click",()=>e==null?void 0:e.updatePosition())}this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){const t=m`
      <div ${it(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?m`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?m`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,e=this.children.length>0;return m`
      <style>
        .button {
          border-radius: var(
            --bim-button--bdrs,
            ${e?"var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs)":"var(--bim-ui_size-4xs)"}
          );
        }
        .children {
          border-radius: var(
            --bim-button--bdrs,
            ${e?"0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0":"var(--bim-ui_size-4xs)"}
          );
        }
      </style>
      <div ${it(this._parent)} class="parent">
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
                  >${this.label}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
        ${e?m`
              <div class="children" @click=${this.onChildrenClick}>
                <bim-icon .icon=${"ic:round-plus"}></bim-icon>
              </div>
            `:null}
        <bim-context-menu
          ${it(this._contextMenu)}
          style="row-gap: var(--bim-ui_size-4xs)"
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </bim-context-menu>
      </div>
    `}},Tt.styles=C`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
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
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
      fill: white;
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([active]) .button {
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
      background-color: var(--bim-ui_main-base);
    }

    :host([vertical]) .parent {
      justify-content: center;
    }

    :host(:not([label-hidden])[label]) .button {
      padding: 0 0.5rem;
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
  `,Tt);q([h({type:String,reflect:!0})],F.prototype,"label");q([h({type:Boolean,attribute:"label-hidden",reflect:!0})],F.prototype,"labelHidden");q([h({type:Boolean,reflect:!0})],F.prototype,"active");q([h({type:Boolean,reflect:!0,attribute:"disabled"})],F.prototype,"disabled");q([h({type:String,reflect:!0})],F.prototype,"icon");q([h({type:Boolean,reflect:!0})],F.prototype,"vertical");q([h({type:Number,attribute:"tooltip-time",reflect:!0})],F.prototype,"tooltipTime");q([h({type:Boolean,attribute:"tooltip-visible",reflect:!0})],F.prototype,"tooltipVisible");q([h({type:String,attribute:"tooltip-title",reflect:!0})],F.prototype,"tooltipTitle");q([h({type:String,attribute:"tooltip-text",reflect:!0})],F.prototype,"tooltipText");let jr=F;var Rr=Object.defineProperty,Xt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Rr(t,e,n),n};const ni=class ni extends E{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
      <div class="parent">
        ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};ni.styles=C`
    :host {
      display: block;
    }

    .parent {
      display: flex;
      justify-content: space-between;
      height: 1.75rem;
      column-gap: 0.5rem;
      width: 100%;
      align-items: center;
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
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_accent-base));
    }
  `;let ot=ni;Xt([h({type:String,reflect:!0})],ot.prototype,"icon");Xt([h({type:String,reflect:!0})],ot.prototype,"name");Xt([h({type:String,reflect:!0})],ot.prototype,"label");Xt([h({type:Boolean,reflect:!0})],ot.prototype,"checked");Xt([h({type:Boolean,reflect:!0})],ot.prototype,"inverted");var Br=Object.defineProperty,Pt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Br(t,e,n),n};const si=class si extends E{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=et(),this._textInput=et(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return m`
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
                ${it(this._colorInput)}
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
                ${it(this._textInput)}
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
    `}};si.styles=C`
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
  `;let Y=si;Pt([h({type:String,reflect:!0})],Y.prototype,"name");Pt([h({type:String,reflect:!0})],Y.prototype,"label");Pt([h({type:String,reflect:!0})],Y.prototype,"icon");Pt([h({type:Boolean,reflect:!0})],Y.prototype,"vertical");Pt([h({type:Number,reflect:!0})],Y.prototype,"opacity");Pt([h({type:String,reflect:!0})],Y.prototype,"color");const Mr=C`
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
`,Dr=C`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: hsl(210 10% 5%);
    --bim-ui_gray-1: hsl(210 10% 10%);
    --bim-ui_gray-2: hsl(210 10% 20%);
    --bim-ui_gray-4: hsl(210 10% 40%);
    --bim-ui_gray-6: hsl(210 10% 60%);
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
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-10);
  }

  html.bim-ui-light {
    --bim-ui_bg-base: var(--bim-ui_gray-10);
    --bim-ui_bg-contrast-10: var(--bim-ui_gray-9);
    --bim-ui_bg-contrast-20: var(--bim-ui_gray-8);
    --bim-ui_bg-contrast-40: var(--bim-ui_gray-6);
    --bim-ui_bg-contrast-60: var(--bim-ui_gray-4);
    --bim-ui_bg-contrast-80: var(--bim-ui_gray-2);
    --bim-ui_bg-contrast-100: var(--bim-ui_gray-0);
    --bim-ui_accent-base: #6528d7;
  }
`,_t={scrollbar:Mr,globalStyles:Dr};var Fr=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Hr=(i,t,e,s)=>{for(var n=Nr(t,e),r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Fr(t,e,n),n};const ri=class ri extends E{constructor(){super(...arguments),this._visible=!1,this._middleware={name:"middleware",async fn(t){const{right:e,top:s}=await Qe(t);return t.x-=Math.sign(e)===1?e+5:0,t.y-=Math.sign(s)===1?s+5:0,t}}}get visible(){return this._visible}set visible(t){this._visible=t,t&&this.updatePosition()}async updatePosition(t){const e=t||this.parentNode;if(!e){this.visible=!1,console.warn("No target element found for context-menu.");return}const s=await gn(e,this,{placement:"right",middleware:[sn(10),bn(),mn(),pn({padding:5}),this._middleware]}),{x:n,y:r}=s;this.style.left=`${n}px`,this.style.top=`${r}px`}render(){return m` <slot></slot> `}};ri.styles=[_t.scrollbar,C`
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
    `];let he=ri;Hr([h({type:Boolean,reflect:!0})],he.prototype,"visible");class Vr extends E{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Dt(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const r=t,o=a=>(n={...n,...a},Dt(r(n),s),n);return o(e),[s.firstElementChild,o]}}const de=(i,t=!0)=>{let e={};for(const s of i.children){const n=s,r=n.getAttribute("name")||n.getAttribute("label");if(r){if("value"in n){const o=n.value;if(typeof o=="object"&&!Array.isArray(o)&&Object.keys(o).length===0)continue;e[r]=n.value}else if(t){const o=de(n);if(Object.keys(o).length===0)continue;e[r]=o}}else t&&(e={...e,...de(n)})}return e},Ce=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,qr=[">=","<=","=",">","<","?","/","#"];function Xi(i){const t=qr.find(l=>i.split(l).length===2),e=i.split(t).map(l=>l.trim()),[s,n]=e,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):Ce(n);return{key:s,condition:t,value:r}}const qe=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),r=s.startsWith("(")&&s.endsWith(")");if(n){const o=Xi(s);t.push(o)}if(r){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(u=>u.trim()).map((u,d)=>{const f=Xi(u);return d>0&&(f.operator="&"),f})};t.push(c)}}return t}catch{return null}},Ji=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var Wr=Object.defineProperty,Ur=Object.getOwnPropertyDescriptor,pt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Ur(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Wr(t,e,n),n};const oi=class oi extends E{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Ce(this.label):this.label}set value(t){this._value=t}render(){return m`
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
    `}};oi.styles=C`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
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
  `;let A=oi;pt([h({type:String,reflect:!0})],A.prototype,"img",2);pt([h({type:String,reflect:!0})],A.prototype,"label",2);pt([h({type:String,reflect:!0})],A.prototype,"icon",2);pt([h({type:Boolean,reflect:!0})],A.prototype,"checked",2);pt([h({type:Boolean,reflect:!0})],A.prototype,"checkbox",2);pt([h({type:Boolean,attribute:"no-mark",reflect:!0})],A.prototype,"noMark",2);pt([h({converter:{fromAttribute(i){return i&&Ce(i)}}})],A.prototype,"value",1);pt([h({type:Boolean,reflect:!0})],A.prototype,"vertical",2);var Qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,mt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Yr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Qr(t,e,n),n};const li=class li extends Vr{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._inputContainer=et(),this._listElement=et(),this._visible=!1,this._value=[],this.onValueChange=new Event("change"),this.onWindowMouseUp=t=>{this.visible&&(this.contains(t.target)||(this.visible=!1))},this.onOptionClick=t=>{const e=t.target,s=this._value.includes(e);if(!this.multiple&&!this.required&&!s)this._value=[e];else if(!this.multiple&&!this.required&&s)this._value=[];else if(!this.multiple&&this.required&&!s)this._value=[e];else if(this.multiple&&!this.required&&!s)this._value=[...this._value,e];else if(this.multiple&&!this.required&&s)this._value=this._value.filter(n=>n!==e);else if(this.multiple&&this.required&&!s)this._value=[...this._value,e];else if(this.multiple&&this.required&&s){const n=this._value.filter(r=>r!==e);n.length!==0&&(this._value=n)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){this._visible=t,t||this.resetVisibleElements()}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=[];for(const s of t){const n=this.findOption(s);if(n&&(e.push(n),!this.multiple&&Object.keys(t).length>1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return this._value.filter(e=>e instanceof A&&e.checked).map(e=>e.value)}get _options(){const t=[...this.elements];for(const e of this.children)e instanceof A&&t.push(e);return t}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);for(const s of e){if(!(s instanceof A)){s.remove();continue}s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick)}}updateOptionsState(){for(const t of this._options)t instanceof A&&(this._value.includes(t)?t.checked=!0:t.checked=!1)}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}firstUpdated(){for(const t of this.children)t instanceof A&&t.checked&&this._value.push(t)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){let t,e,s;if(this._value.length===0)t="Select an option...";else if(this._value.length===1){const n=this._value[0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.length})`;return m`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${it(this._inputContainer)}
          class="input"
          @click=${()=>this.visible=!this.visible}
        >
          <bim-label
            .img=${e}
            .icon=${s}
            style="overflow: hidden;"
            >${t}</bim-label
          >
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
        <bim-context-menu ${it(this._listElement)} .visible=${this.visible}>
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this.visibleElements.map(n=>n)}
        </bim-context-menu>
      </bim-input>
    `}};li.styles=[_t.scrollbar,C`
      :host {
        --bim-input--bgc: var(
          --bim-dropdown--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        --bim-input--olw: var(--bim-dropdown--olw, 2px);
        --bim-input--olc: var(--bim-dropdown--olc, transparent);
        --bim-input--bdrs: var(--bim-dropdown--bdrs, var(--bim-ui_size-4xs));
        flex: 1;
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(
          --bim-dropdown¡focus--c,
          var(--bim-ui_accent-base)
        );
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
    `];let M=li;mt([h({type:String,reflect:!0})],M.prototype,"name",2);mt([h({type:String,reflect:!0})],M.prototype,"icon",2);mt([h({type:String,reflect:!0})],M.prototype,"label",2);mt([h({type:Boolean,reflect:!0})],M.prototype,"multiple",2);mt([h({type:Boolean,reflect:!0})],M.prototype,"required",2);mt([h({type:Boolean,reflect:!0})],M.prototype,"vertical",2);mt([h({type:Boolean,reflect:!0})],M.prototype,"visible",1);mt([Wt()],M.prototype,"_value",2);var Gr=Object.defineProperty,Nn=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Gr(t,e,n),n};const ai=class ai extends E{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(t){const n=t.split(`
`).map(o=>o.trim()).map(o=>o.split('"')[1]).filter(o=>o!==void 0).flatMap(o=>o.split(/\s+/));return[...new Set(n)].filter(o=>o!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const t=this.layouts[this.layout],s=this.getUniqueAreasFromTemplate(t.template).map(n=>{const r=t.elements[n];return r&&(r.style.gridArea=n),r}).filter(n=>!!n);this.style.gridTemplate=t.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...s)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};ai.styles=C`
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
  `;let qt=ai;Nn([h({type:Boolean,reflect:!0})],qt.prototype,"floating");Nn([h({type:String,reflect:!0})],qt.prototype,"layout");const ge=class ge extends E{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};ge.styles=C`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
    }
  `,ge.properties={icon:{type:String}};let We=ge;var Xr=Object.defineProperty,$e=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Xr(t,e,n),n};const ci=class ci extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(l=>{const a=l;return a.name===s||a.label===s});if(!n)continue;const r=n,o=t[s];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};ci.styles=C`
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
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let yt=ci;$e([h({type:String,reflect:!0})],yt.prototype,"name");$e([h({type:String,reflect:!0})],yt.prototype,"label");$e([h({type:String,reflect:!0})],yt.prototype,"icon");$e([h({type:Boolean,reflect:!0})],yt.prototype,"vertical");var Jr=Object.defineProperty,Jt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Jr(t,e,n),n};const ui=class ui extends E{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Ce(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};ui.styles=C`
    :host {
      --bim-icon--c: var(--bim-label--c);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      overflow: hidden;
      display: block;
      white-space: nowrap;
      line-height: 1.1rem;
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
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.5)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let lt=ui;Jt([h({type:String,reflect:!0})],lt.prototype,"img");Jt([h({type:Boolean,attribute:"label-hidden",reflect:!0})],lt.prototype,"labelHidden");Jt([h({type:String,reflect:!0})],lt.prototype,"icon");Jt([h({type:Boolean,attribute:"icon-hidden",reflect:!0})],lt.prototype,"iconHidden");Jt([h({type:Boolean,reflect:!0})],lt.prototype,"vertical");var Kr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,j=(i,t,e,s)=>{for(var n=s>1?void 0:s?Zr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Kr(t,e,n),n};const hi=class hi extends E{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=et(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const r=a=>{var v;n=!0;const{clientX:c}=a,u=this.step??1,d=((v=u.toString().split(".")[1])==null?void 0:v.length)||0,f=1/(this.sensitivity??1),p=(c-e)/f;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const b=s+p*u;this.setValue(b.toFixed(d))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},l=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",l)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${it(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${l=>l.stopPropagation()}
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
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),r=m`
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
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return m`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};hi.styles=C`
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
  `;let P=hi;j([h({type:String,reflect:!0})],P.prototype,"name",2);j([h({type:String,reflect:!0})],P.prototype,"icon",2);j([h({type:String,reflect:!0})],P.prototype,"label",2);j([h({type:String,reflect:!0})],P.prototype,"pref",2);j([h({type:Number,reflect:!0})],P.prototype,"min",2);j([h({type:Number,reflect:!0})],P.prototype,"value",1);j([h({type:Number,reflect:!0})],P.prototype,"step",2);j([h({type:Number,reflect:!0})],P.prototype,"sensitivity",2);j([h({type:Number,reflect:!0})],P.prototype,"max",2);j([h({type:String,reflect:!0})],P.prototype,"suffix",2);j([h({type:Boolean,reflect:!0})],P.prototype,"vertical",2);j([h({type:Boolean,reflect:!0})],P.prototype,"slider",2);var to=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,Kt=(i,t,e,s)=>{for(var n=s>1?void 0:s?eo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&to(t,e,n),n};const di=class di extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return de(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const l=o;return l.name===s||l.label===s});if(!n)continue;const r=n;r.value=t[s]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};di.styles=[_t.scrollbar,C`
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
    `];let at=di;Kt([h({type:String,reflect:!0})],at.prototype,"icon",2);Kt([h({type:String,reflect:!0})],at.prototype,"name",2);Kt([h({type:String,reflect:!0})],at.prototype,"label",2);Kt([h({type:Boolean,reflect:!0})],at.prototype,"hidden",1);Kt([h({type:Boolean,attribute:"header-hidden",reflect:!0})],at.prototype,"headerHidden",2);var io=Object.defineProperty,Zt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&io(t,e,n),n};const fi=class fi extends E{constructor(){super(...arguments),this.onValueChange=new Event("change")}get value(){return de(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const l=o;return l.name===s||l.label===s});if(!n)continue;const r=n;r.value=t[s]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,s=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=this.collapsed?e:s,r=m`
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
        ${t?r:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};fi.styles=[_t.scrollbar,C`
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
      }

      bim-label {
        pointer-events: none;
      }
    `];let ct=fi;Zt([h({type:String,reflect:!0})],ct.prototype,"icon");Zt([h({type:String,reflect:!0})],ct.prototype,"label");Zt([h({type:String,reflect:!0})],ct.prototype,"name");Zt([h({type:Boolean,reflect:!0})],ct.prototype,"fixed");Zt([h({type:Boolean,reflect:!0})],ct.prototype,"collapsed");var no=Object.defineProperty,te=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&no(t,e,n),n};const pi=class pi extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof A&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof A&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof A&&e.checked);t&&(this._value=t)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};pi.styles=C`
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
  `;let ut=pi;te([h({type:String,reflect:!0})],ut.prototype,"name");te([h({type:String,reflect:!0})],ut.prototype,"icon");te([h({type:String,reflect:!0})],ut.prototype,"label");te([h({type:Boolean,reflect:!0})],ut.prototype,"vertical");te([Wt()],ut.prototype,"_value");var so=Object.defineProperty,ro=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&so(t,e,n),n};const mi=class mi extends E{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};mi.styles=C`
    :host {
      padding: 0.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]:not([data-cell-header])) {
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
  `;let fe=mi;ro([h({type:String,reflect:!0})],fe.prototype,"column");var oo=Object.defineProperty,lo=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&oo(t,e,n),n};const bi=class bi extends E{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const s of this._groups)s.childrenHidden=typeof t>"u"?!s.childrenHidden:!t,e&&s.toggleChildren(t,e)}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};bi.styles=C`
    :host {
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
  `;let pe=bi;lo([h({type:Array,attribute:!1})],pe.prototype,"data");var ao=Object.defineProperty,co=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&ao(t,e,n),n};const gi=class gi extends E{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){var f,p;const t=((f=this.table)==null?void 0:f.getGroupIndentation(this.data))??0,e=m`
      <style>
        .branch-vertical {
          left: ${t+.5625}rem;
        }
      </style>
      <div class="branch branch-vertical"></div>
    `,s=document.createDocumentFragment();Dt(e,s);const n=document.createElement("div");n.classList.add("branch","branch-horizontal"),n.style.left=`${t-1+.5625}rem`;const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("height","9.5"),r.setAttribute("width","7.5"),r.setAttribute("viewBox","0 0 4.6666672 7.3333333");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),r.append(o);const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","6.5"),l.setAttribute("width","9.5"),l.setAttribute("viewBox","0 0 5.9111118 5.0175439");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),l.append(a);const c=document.createElement("div");c.addEventListener("click",b=>{b.stopPropagation(),this.toggleChildren()}),c.classList.add("caret"),c.style.left=`${.125+t}rem`,this.childrenHidden?c.append(r):c.append(l);const u=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&u.append(s),u.table=this.table,u.data=this.data.data,(p=this.table)==null||p.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:u}})),this.data.children&&u.append(c),t!==0&&(!this.data.children||this.childrenHidden)&&u.append(n);let d;if(this.data.children){d=document.createElement("bim-table-children"),this._children=d,d.table=this.table,d.data=this.data.children;const b=document.createDocumentFragment();Dt(e,b),d.append(b)}return m`
      <div class="parent">${u} ${this.childrenHidden?null:d}</div>
    `}};gi.styles=C`
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
  `;let me=gi;co([h({type:Boolean,attribute:"children-hidden",reflect:!0})],me.prototype,"childrenHidden");var uo=Object.defineProperty,ee=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&uo(t,e,n),n};const vi=class vi extends E{constructor(){super(...arguments),this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden))}compute(){var n,r,o;const t=((n=this.table)==null?void 0:n.getRowIndentation(this.data))??0,e=this.isHeader?this.data:((r=this.table)==null?void 0:r.computeRowDeclaration(this.data))??this.data,s=[];for(const l in e){if(this.hiddenColumns.includes(l))continue;const a=e[l];let c;if(typeof a=="string"||typeof a=="boolean"||typeof a=="number"?(c=document.createElement("bim-label"),c.textContent=String(a)):a instanceof HTMLElement?c=a:(c=document.createDocumentFragment(),Dt(a,c)),!c)continue;const u=document.createElement("bim-table-cell");u.append(c),u.column=l,this._columnNames.indexOf(l)===0&&!this.isHeader&&(u.style.marginLeft=`${t+.125}rem`);const d=this._columnNames.indexOf(l);u.setAttribute("data-column-index",String(d)),u.toggleAttribute("data-cell-header",this.isHeader),u.rowData=this.data,(o=this.table)==null||o.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:u}})),s.push(u)}return this.style.gridTemplateAreas=`"${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this._columnWidths.join(" ")}`,m`
      ${s}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};vi.styles=C`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
    }

    ::slotted(.branch.branch-vertical) {
      top: 50%;
      bottom: 0;
    }
  `;let ht=vi;ee([h({attribute:!1})],ht.prototype,"columns");ee([h({attribute:!1})],ht.prototype,"hiddenColumns");ee([h({attribute:!1})],ht.prototype,"data");ee([h({type:Boolean,attribute:"is-header",reflect:!0})],ht.prototype,"isHeader");ee([Wt()],ht.prototype,"_intersecting");var ho=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,Lt=(i,t,e,s)=>{for(var n=s>1?void 0:s?fo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ho(t,e,n),n};const yi=class yi extends E{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=qe(t)??[];for(const r of n){if("queries"in r){s=!1;break}const{condition:o,value:l}=r;let{key:a}=r;if(a.startsWith("[")&&a.endsWith("]")){const c=a.replace("[","").replace("]","");a=c,s=Object.keys(e.data).filter(f=>f.includes(c)).map(f=>Ji(e.data[f],o,l)).some(f=>f)}else s=Ji(e.data[a],o,l);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:s}=e;t[s]=s}return t}get value(){return this._filteredData}set queryString(t){this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData()}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(qe(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:r}=s;for(const o in r)this._columns.map(a=>typeof a=="string"?a:a.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const r=this._textDelimiters[t];let o="";const l=this.columns.map(a=>a.name);if(n){this.indentationInText&&(o+=`Indentation${r}`);const a=`${l.join(r)}
`;o+=a}for(const[a,c]of e.entries()){const{data:u,children:d}=c,f=this.indentationInText?`${s}${a+1}${r}`:"",p=l.map(v=>u[v]??""),b=`${f}${p.join(r)}
`;o+=b,d&&(o+=this.generateText(t,c.children,`${s}${a+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}computeRowDeclaration(t){const e={};for(const s in t){const n=this.dataTransform[s];n?e[s]=n(t[s],t):e[s]=t[s]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const r=this.getRowIndentation(t,n.children,s+1);if(r!==null)return r}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const r=this.getGroupIndentation(t,n.children,s+1);if(r!==null)return r}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const r of s)if(e(t,r)){if(this.preserveStructureOnFilter){const l={data:r.data};if(r.children){const a=this.filter(t,e,r.children);a.length&&(l.children=a)}n.push(l)}else if(n.push({data:r.data}),r.children){const l=this.filter(t,e,r.children);n.push(...l)}}else if(r.children){const l=this.filter(t,e,r.children);this.preserveStructureOnFilter&&l.length?n.push({data:r.data,children:l}):n.push(...l)}return n}render(){const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:t}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};yi.styles=[_t.scrollbar,C`
      :host {
        --bim-button--bgc: transparent;
        position: relative;
        overflow: auto;
        display: block;
        pointer-events: auto;
      }

      .parent {
        display: grid;
        grid-template:
          "Header" auto
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
    `];let G=yi;Lt([Wt()],G.prototype,"_filteredData",2);Lt([h({type:Boolean,attribute:"headers-hidden",reflect:!0})],G.prototype,"headersHidden",2);Lt([h({type:String,attribute:"min-col-width",reflect:!0})],G.prototype,"minColWidth",2);Lt([h({type:Array,attribute:!1})],G.prototype,"columns",1);Lt([h({type:Array,attribute:!1})],G.prototype,"data",1);Lt([h({type:Boolean,reflect:!0})],G.prototype,"expanded",2);var po=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,Ee=(i,t,e,s)=>{for(var n=s>1?void 0:s?mo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&po(t,e,n),n};const _i=class _i extends E{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return m` <slot></slot> `}};_i.styles=C`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let L=_i;Ee([h({type:String,reflect:!0})],L.prototype,"name",2);Ee([h({type:String,reflect:!0})],L.prototype,"label",2);Ee([h({type:String,reflect:!0})],L.prototype,"icon",2);Ee([h({type:Boolean,reflect:!0})],L.prototype,"hidden",1);var bo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,It=(i,t,e,s)=>{for(var n=s>1?void 0:s?go(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&bo(t,e,n),n};const xi=class xi extends E{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof L&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof L&&n.name===t);for(const n of e){if(!(n instanceof L))continue;n.hidden=s!==n;const r=this.getTabSwitcher(n.name);r&&r.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof L))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??"",s.icon=t.icon,e.append(s),this._switchers.push(e)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof L?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof L&&(this.tab=s.name);for(const n of e){if(!(n instanceof L)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};xi.styles=[_t.scrollbar,C`
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
    `];let X=xi;It([Wt()],X.prototype,"_switchers",2);It([h({type:Boolean,reflect:!0})],X.prototype,"bottom",2);It([h({type:Boolean,attribute:"switchers-hidden",reflect:!0})],X.prototype,"switchersHidden",2);It([h({type:Boolean,reflect:!0})],X.prototype,"floating",2);It([h({type:String,reflect:!0})],X.prototype,"tab",1);It([h({type:Boolean,attribute:"switchers-full",reflect:!0})],X.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vo=i=>i??Le;var yo=Object.defineProperty,_o=Object.getOwnPropertyDescriptor,bt=(i,t,e,s)=>{for(var n=s>1?void 0:s?_o(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&yo(t,e,n),n};const wi=class wi extends E{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return qe(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return m`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        <input
          aria-label=${this.label||this.name||"Text Input"}
          .type=${this.type}
          .value=${this.value}
          placeholder=${vo(this.placeholder)}
          @input=${this.onInputChange}
        />
      </bim-input>
    `}};wi.styles=C`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    input {
      background-color: transparent;
      outline: none;
      border: none;
      width: 100%;
      height: 100%;
      padding: 0 var(--bim-ui_size-3xs);
      border-radius: var(--bim-text-input--bdrs, var(--bim-ui_size-4xs));
      color: var(--bim-text-input--c, var(--bim-ui_bg-contrast-100));
    }

    :host(:focus) {
      --bim-input--olc: var(--bim-ui_accent-base);
    }

    /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
  `;let D=wi;bt([h({type:String,reflect:!0})],D.prototype,"icon",2);bt([h({type:String,reflect:!0})],D.prototype,"label",2);bt([h({type:String,reflect:!0})],D.prototype,"name",2);bt([h({type:String,reflect:!0})],D.prototype,"placeholder",2);bt([h({type:String,reflect:!0})],D.prototype,"value",2);bt([h({type:Boolean,reflect:!0})],D.prototype,"vertical",2);bt([h({type:Number,reflect:!0})],D.prototype,"debounce",2);bt([h({type:String,reflect:!0})],D.prototype,"type",1);var xo=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,Hn=(i,t,e,s)=>{for(var n=s>1?void 0:s?wo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&xo(t,e,n),n};const Ci=class Ci extends E{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Ci.styles=C`
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
  `;let Ot=Ci;Hn([h({type:Number,reflect:!0})],Ot.prototype,"rows",2);Hn([h({type:Boolean,reflect:!0})],Ot.prototype,"vertical",1);var Co=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,Se=(i,t,e,s)=>{for(var n=s>1?void 0:s?$o(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Co(t,e,n),n};const $i=class $i extends E{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof Ot&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};$i.styles=C`
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
  `;let dt=$i;Se([h({type:String,reflect:!0})],dt.prototype,"label",2);Se([h({type:String,reflect:!0})],dt.prototype,"icon",2);Se([h({type:Boolean,reflect:!0})],dt.prototype,"vertical",1);Se([h({type:Boolean,attribute:"label-hidden",reflect:!0})],dt.prototype,"labelHidden",1);const y=class y{static set config(t){this._config={...y._config,...t}}static get config(){return y._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=_t.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){y.init()}static init(){y.addGlobalStyles(),y.defineCustomElement("bim-button",jr),y.defineCustomElement("bim-checkbox",ot),y.defineCustomElement("bim-color-input",Y),y.defineCustomElement("bim-context-menu",he),y.defineCustomElement("bim-dropdown",M),y.defineCustomElement("bim-grid",qt),y.defineCustomElement("bim-icon",We),y.defineCustomElement("bim-input",yt),y.defineCustomElement("bim-label",lt),y.defineCustomElement("bim-number-input",P),y.defineCustomElement("bim-option",A),y.defineCustomElement("bim-panel",at),y.defineCustomElement("bim-panel-section",ct),y.defineCustomElement("bim-selector",ut),y.defineCustomElement("bim-table",G),y.defineCustomElement("bim-tabs",X),y.defineCustomElement("bim-tab",L),y.defineCustomElement("bim-table-cell",fe),y.defineCustomElement("bim-table-children",pe),y.defineCustomElement("bim-table-group",me),y.defineCustomElement("bim-table-row",ht),y.defineCustomElement("bim-text-input",D),y.defineCustomElement("bim-toolbar",At),y.defineCustomElement("bim-toolbar-group",Ot),y.defineCustomElement("bim-toolbar-section",dt),y.defineCustomElement("bim-viewport",be)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};y._config={sectionLabelOnVerticalToolbar:!1};let Ue=y;var Eo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,ii=(i,t,e,s)=>{for(var n=s>1?void 0:s?So(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Eo(t,e,n),n};const Ei=class Ei extends E{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof dt&&(e.labelHidden=this.vertical&&!Ue.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Ei.styles=C`
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
  `;let At=Ei;ii([h({type:String,reflect:!0})],At.prototype,"icon",2);ii([h({type:Boolean,attribute:"labels-hidden",reflect:!0})],At.prototype,"labelsHidden",2);ii([h({type:Boolean,reflect:!0})],At.prototype,"vertical",1);var ko=Object.defineProperty,Oo=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&ko(t,e,n),n};const Si=class Si extends E{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Si.styles=C`
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
  `;let be=Si;Oo([h({type:String,reflect:!0})],be.prototype,"name");export{Vr as C,Ue as M,Es as e,Ss as i,it as n,$s as t};
