var Xn=Object.defineProperty;var Jn=(i,t,e)=>t in i?Xn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var tt=(i,t,e)=>(Jn(i,typeof t!="symbol"?t+"":t,e),e);import{z as Kn,T as te,s as E,i as $,x as m,n as h,j as Te,r as Ht}from"./state-CdSmRkb4.js";const Ct=Math.min,Q=Math.max,ee=Math.round,it=i=>({x:i,y:i}),Zn={left:"right",right:"left",bottom:"top",top:"bottom"},ts={start:"end",end:"start"};function Si(i,t,e){return Q(i,Ct(t,e))}function Ft(i,t){return typeof i=="function"?i(t):i}function G(i){return i.split("-")[0]}function pe(i){return i.split("-")[1]}function sn(i){return i==="x"?"y":"x"}function on(i){return i==="y"?"height":"width"}function Vt(i){return["top","bottom"].includes(G(i))?"y":"x"}function rn(i){return sn(Vt(i))}function es(i,t,e){e===void 0&&(e=!1);const s=pe(i),n=rn(i),o=on(n);let r=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=ie(r)),[r,ie(r)]}function is(i){const t=ie(i);return[Ie(i),t,Ie(t)]}function Ie(i){return i.replace(/start|end/g,t=>ts[t])}function ns(i,t,e){const s=["left","right"],n=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?o:r;default:return[]}}function ss(i,t,e,s){const n=pe(i);let o=ns(G(i),e==="start",s);return n&&(o=o.map(r=>r+"-"+n),t&&(o=o.concat(o.map(Ie)))),o}function ie(i){return i.replace(/left|right|bottom|top/g,t=>Zn[t])}function os(i){return{top:0,right:0,bottom:0,left:0,...i}}function ln(i){return typeof i!="number"?os(i):{top:i,right:i,bottom:i,left:i}}function Et(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function ki(i,t,e){let{reference:s,floating:n}=i;const o=Vt(t),r=rn(t),a=on(r),l=G(t),c=o==="y",u=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,f=s[a]/2-n[a]/2;let p;switch(l){case"top":p={x:u,y:s.y-n.height};break;case"bottom":p={x:u,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-n.width,y:d};break;default:p={x:s.x,y:s.y}}switch(pe(t)){case"start":p[r]-=f*(e&&c?-1:1);break;case"end":p[r]+=f*(e&&c?-1:1);break}return p}const rs=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:o=[],platform:r}=e,a=o.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:i,floating:t,strategy:n}),{x:u,y:d}=ki(c,s,l),f=s,p={},b=0;for(let g=0;g<a.length;g++){const{name:v,fn:S}=a[g],{x:C,y:x,data:w,reset:k}=await S({x:u,y:d,initialPlacement:s,placement:f,strategy:n,middlewareData:p,rects:c,platform:r,elements:{reference:i,floating:t}});u=C??u,d=x??d,p={...p,[v]:{...p[v],...w}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(f=k.placement),k.rects&&(c=k.rects===!0?await r.getElementRects({reference:i,floating:t,strategy:n}):k.rects),{x:u,y:d}=ki(c,f,l)),g=-1)}return{x:u,y:d,placement:f,strategy:n,middlewareData:p}};async function Ue(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:o,rects:r,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Ft(t,i),b=ln(p),v=a[f?d==="floating"?"reference":"floating":d],S=Et(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(v)))==null||e?v:v.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),C=d==="floating"?{x:s,y:n,width:r.floating.width,height:r.floating.height}:r.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),w=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},k=Et(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:x,strategy:l}):C);return{top:(S.top-k.top+b.top)/w.y,bottom:(k.bottom-S.bottom+b.bottom)/w.y,left:(S.left-k.left+b.left)/w.x,right:(k.right-S.right+b.right)/w.x}}const ls=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:g=!0,...v}=Ft(i,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const S=G(n),C=G(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=f||(C||!g?[ie(a)]:is(a));!f&&b!=="none"&&w.push(...ss(a,g,b,x));const k=[a,...w],y=await Ue(t,v),P=[];let L=((s=o.flip)==null?void 0:s.overflows)||[];if(u&&P.push(y[S]),d){const N=es(n,r,x);P.push(y[N[0]],y[N[1]])}if(L=[...L,{placement:n,overflows:P}],!P.every(N=>N<=0)){var W,O;const N=(((W=o.flip)==null?void 0:W.index)||0)+1,wt=k[N];if(wt)return{data:{index:N,overflows:L},reset:{placement:wt}};let Z=(O=L.filter(H=>H.overflows[0]<=0).sort((H,U)=>H.overflows[1]-U.overflows[1])[0])==null?void 0:O.placement;if(!Z)switch(p){case"bestFit":{var xt;const H=(xt=L.map(U=>[U.placement,U.overflows.filter(pt=>pt>0).reduce((pt,Ee)=>pt+Ee,0)]).sort((U,pt)=>U[1]-pt[1])[0])==null?void 0:xt[0];H&&(Z=H);break}case"initialPlacement":Z=a;break}if(n!==Z)return{reset:{placement:Z}}}return{}}}};function an(i){const t=Ct(...i.map(o=>o.left)),e=Ct(...i.map(o=>o.top)),s=Q(...i.map(o=>o.right)),n=Q(...i.map(o=>o.bottom));return{x:t,y:e,width:s-t,height:n-e}}function as(i){const t=i.slice().sort((n,o)=>n.y-o.y),e=[];let s=null;for(let n=0;n<t.length;n++){const o=t[n];!s||o.y-s.y>s.height/2?e.push([o]):e[e.length-1].push(o),s=o}return e.map(n=>Et(an(n)))}const cs=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:o,strategy:r}=t,{padding:a=2,x:l,y:c}=Ft(i,t),u=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(s.reference))||[]),d=as(u),f=Et(an(u)),p=ln(a);function b(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(v=>l>v.left-p.left&&l<v.right+p.right&&c>v.top-p.top&&c<v.bottom+p.bottom)||f;if(d.length>=2){if(Vt(e)==="y"){const O=d[0],xt=d[d.length-1],N=G(e)==="top",wt=O.top,Z=xt.bottom,H=N?O.left:xt.left,U=N?O.right:xt.right,pt=U-H,Ee=Z-wt;return{top:wt,bottom:Z,left:H,right:U,width:pt,height:Ee,x:H,y:wt}}const v=G(e)==="left",S=Q(...d.map(O=>O.right)),C=Ct(...d.map(O=>O.left)),x=d.filter(O=>v?O.left===C:O.right===S),w=x[0].top,k=x[x.length-1].bottom,y=C,P=S,L=P-y,W=k-w;return{top:w,bottom:k,left:y,right:P,width:L,height:W,x:y,y:w}}return f}const g=await o.getElementRects({reference:{getBoundingClientRect:b},floating:s.floating,strategy:r});return n.reference.x!==g.reference.x||n.reference.y!==g.reference.y||n.reference.width!==g.reference.width||n.reference.height!==g.reference.height?{reset:{rects:g}}:{}}}};async function us(i,t){const{placement:e,platform:s,elements:n}=i,o=await(s.isRTL==null?void 0:s.isRTL(n.floating)),r=G(e),a=pe(e),l=Vt(e)==="y",c=["left","top"].includes(r)?-1:1,u=o&&l?-1:1,d=Ft(t,i);let{mainAxis:f,crossAxis:p,alignmentAxis:b}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof b=="number"&&(p=a==="end"?b*-1:b),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}const cn=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:o,placement:r,middlewareData:a}=t,l=await us(t,i);return r===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:o+l.y,data:{...l,placement:r}}}}},hs=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:o=!0,crossAxis:r=!1,limiter:a={fn:v=>{let{x:S,y:C}=v;return{x:S,y:C}}},...l}=Ft(i,t),c={x:e,y:s},u=await Ue(t,l),d=Vt(G(n)),f=sn(d);let p=c[f],b=c[d];if(o){const v=f==="y"?"top":"left",S=f==="y"?"bottom":"right",C=p+u[v],x=p-u[S];p=Si(C,p,x)}if(r){const v=d==="y"?"top":"left",S=d==="y"?"bottom":"right",C=b+u[v],x=b-u[S];b=Si(C,b,x)}const g=a.fn({...t,[f]:p,[d]:b});return{...g,data:{x:g.x-e,y:g.y-s}}}}};function nt(i){return un(i)?(i.nodeName||"").toLowerCase():"#document"}function z(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function ut(i){var t;return(t=(un(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function un(i){return i instanceof Node||i instanceof z(i).Node}function X(i){return i instanceof Element||i instanceof z(i).Element}function F(i){return i instanceof HTMLElement||i instanceof z(i).HTMLElement}function Oi(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof z(i).ShadowRoot}function qt(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=j(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function ds(i){return["table","td","th"].includes(nt(i))}function Qe(i){const t=Ye(),e=j(i);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function fs(i){let t=St(i);for(;F(t)&&!me(t);){if(Qe(t))return t;t=St(t)}return null}function Ye(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function me(i){return["html","body","#document"].includes(nt(i))}function j(i){return z(i).getComputedStyle(i)}function be(i){return X(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function St(i){if(nt(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Oi(i)&&i.host||ut(i);return Oi(t)?t.host:t}function hn(i){const t=St(i);return me(t)?i.ownerDocument?i.ownerDocument.body:i.body:F(t)&&qt(t)?t:hn(t)}function Le(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=hn(i),o=n===((s=i.ownerDocument)==null?void 0:s.body),r=z(n);return o?t.concat(r,r.visualViewport||[],qt(n)?n:[],r.frameElement&&e?Le(r.frameElement):[]):t.concat(n,Le(n,[],e))}function dn(i){const t=j(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=F(i),o=n?i.offsetWidth:e,r=n?i.offsetHeight:s,a=ee(e)!==o||ee(s)!==r;return a&&(e=o,s=r),{width:e,height:s,$:a}}function fn(i){return X(i)?i:i.contextElement}function $t(i){const t=fn(i);if(!F(t))return it(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:o}=dn(t);let r=(o?ee(e.width):e.width)/s,a=(o?ee(e.height):e.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const ps=it(0);function pn(i){const t=z(i);return!Ye()||!t.visualViewport?ps:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ms(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==z(i)?!1:t}function Mt(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),o=fn(i);let r=it(1);t&&(s?X(s)&&(r=$t(s)):r=$t(i));const a=ms(o,e,s)?pn(o):it(0);let l=(n.left+a.x)/r.x,c=(n.top+a.y)/r.y,u=n.width/r.x,d=n.height/r.y;if(o){const f=z(o),p=s&&X(s)?z(s):s;let b=f,g=b.frameElement;for(;g&&s&&p!==b;){const v=$t(g),S=g.getBoundingClientRect(),C=j(g),x=S.left+(g.clientLeft+parseFloat(C.paddingLeft))*v.x,w=S.top+(g.clientTop+parseFloat(C.paddingTop))*v.y;l*=v.x,c*=v.y,u*=v.x,d*=v.y,l+=x,c+=w,b=z(g),g=b.frameElement}}return Et({width:u,height:d,x:l,y:c})}const bs=[":popover-open",":modal"];function mn(i){return bs.some(t=>{try{return i.matches(t)}catch{return!1}})}function gs(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const o=n==="fixed",r=ut(s),a=t?mn(t.floating):!1;if(s===r||a&&o)return e;let l={scrollLeft:0,scrollTop:0},c=it(1);const u=it(0),d=F(s);if((d||!d&&!o)&&((nt(s)!=="body"||qt(r))&&(l=be(s)),F(s))){const f=Mt(s);c=$t(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x,y:e.y*c.y-l.scrollTop*c.y+u.y}}function vs(i){return Array.from(i.getClientRects())}function bn(i){return Mt(ut(i)).left+be(i).scrollLeft}function ys(i){const t=ut(i),e=be(i),s=i.ownerDocument.body,n=Q(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=Q(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-e.scrollLeft+bn(i);const a=-e.scrollTop;return j(s).direction==="rtl"&&(r+=Q(t.clientWidth,s.clientWidth)-n),{width:n,height:o,x:r,y:a}}function _s(i,t){const e=z(i),s=ut(i),n=e.visualViewport;let o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(n){o=n.width,r=n.height;const c=Ye();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:o,height:r,x:a,y:l}}function xs(i,t){const e=Mt(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,o=F(i)?$t(i):it(1),r=i.clientWidth*o.x,a=i.clientHeight*o.y,l=n*o.x,c=s*o.y;return{width:r,height:a,x:l,y:c}}function Ai(i,t,e){let s;if(t==="viewport")s=_s(i,e);else if(t==="document")s=ys(ut(i));else if(X(t))s=xs(t,e);else{const n=pn(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return Et(s)}function gn(i,t){const e=St(i);return e===t||!X(e)||me(e)?!1:j(e).position==="fixed"||gn(e,t)}function ws(i,t){const e=t.get(i);if(e)return e;let s=Le(i,[],!1).filter(a=>X(a)&&nt(a)!=="body"),n=null;const o=j(i).position==="fixed";let r=o?St(i):i;for(;X(r)&&!me(r);){const a=j(r),l=Qe(r);!l&&a.position==="fixed"&&(n=null),(o?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||qt(r)&&!l&&gn(i,r))?s=s.filter(u=>u!==r):n=a,r=St(r)}return t.set(i,s),s}function $s(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const r=[...e==="clippingAncestors"?ws(t,this._c):[].concat(e),s],a=r[0],l=r.reduce((c,u)=>{const d=Ai(t,u,n);return c.top=Q(d.top,c.top),c.right=Ct(d.right,c.right),c.bottom=Ct(d.bottom,c.bottom),c.left=Q(d.left,c.left),c},Ai(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Cs(i){const{width:t,height:e}=dn(i);return{width:t,height:e}}function Es(i,t,e){const s=F(t),n=ut(t),o=e==="fixed",r=Mt(i,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=it(0);if(s||!s&&!o)if((nt(t)!=="body"||qt(n))&&(a=be(t)),s){const d=Mt(t,!0,o,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else n&&(l.x=bn(n));const c=r.left+a.scrollLeft-l.x,u=r.top+a.scrollTop-l.y;return{x:c,y:u,width:r.width,height:r.height}}function Pi(i,t){return!F(i)||j(i).position==="fixed"?null:t?t(i):i.offsetParent}function vn(i,t){const e=z(i);if(!F(i)||mn(i))return e;let s=Pi(i,t);for(;s&&ds(s)&&j(s).position==="static";)s=Pi(s,t);return s&&(nt(s)==="html"||nt(s)==="body"&&j(s).position==="static"&&!Qe(s))?e:s||fs(i)||e}const Ss=async function(i){const t=this.getOffsetParent||vn,e=this.getDimensions;return{reference:Es(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function ks(i){return j(i).direction==="rtl"}const Os={convertOffsetParentRelativeRectToViewportRelativeRect:gs,getDocumentElement:ut,getClippingRect:$s,getOffsetParent:vn,getElementRects:Ss,getClientRects:vs,getDimensions:Cs,getScale:$t,isElement:X,isRTL:ks},yn=hs,_n=ls,xn=cs,wn=(i,t,e)=>{const s=new Map,n={platform:Os,...e},o={...n.platform,_c:s};return rs(i,t,{...n,platform:o})};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:As}=Kn,Ti=(i,t)=>(i==null?void 0:i._$litType$)!==void 0,Ps=i=>{var t;return((t=i==null?void 0:i._$litType$)==null?void 0:t.h)!=null},Ts=i=>i.strings===void 0,Ii=()=>document.createComment(""),Li=(i,t,e)=>{var o;const s=i._$AA.parentNode,n=i._$AB;if(e===void 0){const r=s.insertBefore(Ii(),n),a=s.insertBefore(Ii(),n);e=new As(r,a,i,i.options)}else{const r=e._$AB.nextSibling,a=e._$AM,l=a!==i;if(l){let c;(o=e._$AQ)==null||o.call(e,i),e._$AM=i,e._$AP!==void 0&&(c=i._$AU)!==a._$AU&&e._$AP(c)}if(r!==n||l){let c=e._$AA;for(;c!==r;){const u=c.nextSibling;s.insertBefore(c,n),c=u}}}return e},Is={},zi=(i,t=Is)=>i._$AH=t,ji=i=>i._$AH,Ls=i=>{i._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},$n=i=>(...t)=>({_$litDirective$:i,values:t});class Cn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const n of e)(s=n._$AO)==null||s.call(n,t,!1),Lt(n,t);return!0},ne=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},En=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Rs(t)}};function js(i){this._$AN!==void 0?(ne(this),this._$AM=i,En(this)):this._$AM=i}function Ms(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)Lt(s[o],!1),ne(s[o]);else s!=null&&(Lt(s,!1),ne(s));else Lt(this,i)}const Rs=i=>{i.type==zs.CHILD&&(i._$AP??(i._$AP=Ms),i._$AQ??(i._$AQ=js))};class Bs extends Cn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),En(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(n=this.disconnected)==null||n.call(this)),e&&(Lt(this,t),ne(this))}setValue(t){if(Ts(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=()=>new Ds;let Ds=class{};const Se=new WeakMap,Y=$n(class extends Bs{render(i){return te}update(i,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),te}rt(i){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=Se.get(t);e===void 0&&(e=new WeakMap,Se.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Se.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Sn=Object.freeze({left:0,top:0,width:16,height:16}),se=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Wt=Object.freeze({...Sn,...se}),ze=Object.freeze({...Wt,body:"",hidden:!1}),Ns=Object.freeze({width:null,height:null}),kn=Object.freeze({...Ns,...se});function Hs(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(i.slice(0,i.length-e.length));return isNaN(o)?0:(o=o/n,o%1===0?s(o):0)}}return t}const Fs=/[\s,]+/;function Vs(i,t){t.split(Fs).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const On={...kn,preserveAspectRatio:""};function Mi(i){const t={...On},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Hs(e("rotate","")),Vs(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function qs(i,t){for(const e in On)if(i[e]!==t[e])return!0;return!1}const zt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ut=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!Kt(c)?null:c}const o=n[0],r=o.split("-");if(r.length>1){const a={provider:s,prefix:r.shift(),name:r.join("-")};return t&&!Kt(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:o};return t&&!Kt(a,e)?null:a}return null},Kt=(i,t)=>i?!!((i.provider===""||i.provider.match(zt))&&(t&&i.prefix===""||i.prefix.match(zt))&&i.name.match(zt)):!1;function Ws(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Ri(i,t){const e=Ws(i,t);for(const s in ze)s in se?s in i&&!(s in e)&&(e[s]=se[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function Us(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function o(r){if(e[r])return n[r]=[];if(!(r in n)){n[r]=null;const a=s[r]&&s[r].parent,l=a&&o(a);l&&(n[r]=[a].concat(l))}return n[r]}return Object.keys(e).concat(Object.keys(s)).forEach(o),n}function Qs(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let o={};function r(a){o=Ri(s[a]||n[a],o)}return r(t),e.forEach(r),Ri(i,o)}function An(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=Us(i);for(const n in s){const o=s[n];o&&(t(n,Qs(i,n,o)),e.push(n))}return e}const Ys={provider:"",aliases:{},not_found:{},...Sn};function ke(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function Pn(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!ke(i,Ys))return null;const e=t.icons;for(const n in e){const o=e[n];if(!n.match(zt)||typeof o.body!="string"||!ke(o,ze))return null}const s=t.aliases||Object.create(null);for(const n in s){const o=s[n],r=o.parent;if(!n.match(zt)||typeof r!="string"||!e[r]&&!s[r]||!ke(o,ze))return null}return t}const oe=Object.create(null);function Gs(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function st(i,t){const e=oe[i]||(oe[i]=Object.create(null));return e[t]||(e[t]=Gs(i,t))}function Ge(i,t){return Pn(t)?An(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Xs(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Js(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(oe)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(oe[n]||{})).forEach(r=>{const a=st(n,r);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+r+":"+l))})}),e}let Rt=!1;function Tn(i){return typeof i=="boolean"&&(Rt=i),Rt}function Bt(i){const t=typeof i=="string"?Ut(i,!0,Rt):i;if(t){const e=st(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function In(i,t){const e=Ut(i,!0,Rt);if(!e)return!1;const s=st(e.provider,e.prefix);return Xs(s,e.name,t)}function Bi(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Rt&&!t&&!i.prefix){let n=!1;return Pn(i)&&(i.prefix="",An(i,(o,r)=>{r&&In(o,r)&&(n=!0)})),n}const e=i.prefix;if(!Kt({provider:t,prefix:e,name:"a"}))return!1;const s=st(t,e);return!!Ge(s,i)}function Di(i){return!!Bt(i)}function Ks(i){const t=Bt(i);return t?{...Wt,...t}:null}function Zs(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const o=n.provider,r=n.prefix,a=n.name,l=e[o]||(e[o]=Object.create(null)),c=l[r]||(l[r]=st(o,r));let u;a in c.icons?u=t.loaded:r===""||c.missing.has(a)?u=t.missing:u=t.pending;const d={provider:o,prefix:r,name:a};u.push(d)}),t}function Ln(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function to(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(o=>{const r=o.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])r.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))r.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),r.pending.length!==a&&(e||Ln([i],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let eo=0;function io(i,t,e){const s=eo++,n=Ln.bind(null,e,s);if(!t.pending.length)return n;const o={id:s,icons:t,callback:i,abort:n};return e.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),n}const je=Object.create(null);function Ni(i,t){je[i]=t}function Me(i){return je[i]||je[""]}function no(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const o=typeof n=="string"?Ut(n,t,e):n;o&&s.push(o)}),s}var so={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function oo(i,t,e,s){const n=i.resources.length,o=i.random?Math.floor(Math.random()*n):i.index;let r;if(i.random){let y=i.resources.slice(0);for(r=[];y.length>1;){const P=Math.floor(Math.random()*y.length);r.push(y[P]),y=y.slice(0,P).concat(y.slice(P+1))}r=r.concat(y)}else r=i.resources.slice(o).concat(i.resources.slice(0,o));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function b(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),b(),f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function v(y,P){P&&(p=[]),typeof y=="function"&&p.push(y)}function S(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:v,abort:g}}function C(){l="failed",p.forEach(y=>{y(void 0,u)})}function x(){f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function w(y,P,L){const W=P!=="success";switch(f=f.filter(O=>O!==y),l){case"pending":break;case"failed":if(W||!i.dataAfterTimeout)return;break;default:return}if(P==="abort"){u=L,C();return}if(W){u=L,f.length||(r.length?k():C());return}if(b(),x(),!i.random){const O=i.resources.indexOf(y.resource);O!==-1&&O!==i.index&&(i.index=O)}l="completed",p.forEach(O=>{O(L)})}function k(){if(l!=="pending")return;b();const y=r.shift();if(y===void 0){if(f.length){d=setTimeout(()=>{b(),l==="pending"&&(x(),C())},i.timeout);return}C();return}const P={status:"pending",resource:y,callback:(L,W)=>{w(P,L,W)}};f.push(P),c++,d=setTimeout(k,i.rotate),e(y,t,P.callback)}return setTimeout(k),S}function zn(i){const t={...so,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const u=oo(t,a,l,(d,f)=>{s(),c&&c(d,f)});return e.push(u),u}function o(a){return e.find(l=>a(l))||null}return{query:n,find:o,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function Xe(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const ge=Object.create(null),It=["https://api.simplesvg.com","https://api.unisvg.com"],Zt=[];for(;It.length>0;)It.length===1||Math.random()>.5?Zt.push(It.shift()):Zt.push(It.pop());ge[""]=Xe({resources:["https://api.iconify.design"].concat(Zt)});function Hi(i,t){const e=Xe(t);return e===null?!1:(ge[i]=e,!0)}function ve(i){return ge[i]}function ro(){return Object.keys(ge)}function Fi(){}const Oe=Object.create(null);function lo(i){if(!Oe[i]){const t=ve(i);if(!t)return;const e=zn(t),s={config:t,redundancy:e};Oe[i]=s}return Oe[i]}function jn(i,t,e){let s,n;if(typeof i=="string"){const o=Me(i);if(!o)return e(void 0,424),Fi;n=o.send;const r=lo(i);r&&(s=r.redundancy)}else{const o=Xe(i);if(o){s=zn(o);const r=i.resources?i.resources[0]:"",a=Me(r);a&&(n=a.send)}}return!s||!n?(e(void 0,424),Fi):s.query(t,n,e)().abort}const Vi="iconify2",Dt="iconify",Mn=Dt+"-count",qi=Dt+"-version",Rn=36e5,ao=168,co=50;function Re(i,t){try{return i.getItem(t)}catch{}}function Je(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Wi(i,t){try{i.removeItem(t)}catch{}}function Be(i,t){return Je(i,Mn,t.toString())}function De(i){return parseInt(Re(i,Mn))||0}const mt={local:!0,session:!0},Bn={local:new Set,session:new Set};let Ke=!1;function uo(i){Ke=i}let Jt=typeof window>"u"?{}:window;function Dn(i){const t=i+"Storage";try{if(Jt&&Jt[t]&&typeof Jt[t].length=="number")return Jt[t]}catch{}mt[i]=!1}function Nn(i,t){const e=Dn(i);if(!e)return;const s=Re(e,qi);if(s!==Vi){if(s){const a=De(e);for(let l=0;l<a;l++)Wi(e,Dt+l.toString())}Je(e,qi,Vi),Be(e,0);return}const n=Math.floor(Date.now()/Rn)-ao,o=a=>{const l=Dt+a.toString(),c=Re(e,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}Wi(e,l)}};let r=De(e);for(let a=r-1;a>=0;a--)o(a)||(a===r-1?(r--,Be(e,r)):Bn[i].add(a))}function Hn(){if(!Ke){uo(!0);for(const i in mt)Nn(i,t=>{const e=t.data,s=t.provider,n=e.prefix,o=st(s,n);if(!Ge(o,e).length)return!1;const r=e.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,r):r,!0})}}function ho(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in mt)Nn(s,n=>{const o=n.data;return n.provider!==i.provider||o.prefix!==i.prefix||o.lastModified===t});return!0}function fo(i,t){Ke||Hn();function e(s){let n;if(!mt[s]||!(n=Dn(s)))return;const o=Bn[s];let r;if(o.size)o.delete(r=Array.from(o).shift());else if(r=De(n),r>=co||!Be(n,r+1))return;const a={cached:Math.floor(Date.now()/Rn),provider:i.provider,data:t};return Je(n,Dt+r.toString(),JSON.stringify(a))}t.lastModified&&!ho(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Ui(){}function po(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,to(i)}))}function mo(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let o;if(!n||!(o=Me(e)))return;o.prepare(e,s,n).forEach(a=>{jn(e,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=Ge(i,l);if(!c.length)return;const u=i.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),fo(i,l)}catch(c){console.error(c)}po(i)})})}))}const Ze=(i,t)=>{const e=no(i,!0,Tn()),s=Zs(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Ui)}),()=>{l=!1}}const n=Object.create(null),o=[];let r,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===r)return;r=c,a=u,o.push(st(c,u));const d=n[c]||(n[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=st(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),n[c][u].push(d))}),o.forEach(l=>{const{provider:c,prefix:u}=l;n[c][u].length&&mo(l,n[c][u])}),t?io(t,s,o):Ui},bo=i=>new Promise((t,e)=>{const s=typeof i=="string"?Ut(i,!0):i;if(!s){e(i);return}Ze([s||i],n=>{if(n.length&&s){const o=Bt(s);if(o){t({...Wt,...o});return}}e(i)})});function go(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function vo(i,t){const e=typeof i=="string"?Ut(i,!0,!0):null;if(!e){const o=go(i);return{value:i,data:o}}const s=Bt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Ze([e],()=>t(i,e,Bt(e)));return{value:i,name:e,loading:n}}function Ae(i){return i.hasAttribute("inline")}let Fn=!1;try{Fn=navigator.vendor.indexOf("Apple")===0}catch{}function yo(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Fn||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const _o=/(-?[0-9.]*[0-9]+[0-9.]*)/g,xo=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ne(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(_o);if(s===null||!s.length)return i;const n=[];let o=s.shift(),r=xo.test(o);for(;;){if(r){const a=parseFloat(o);isNaN(a)?n.push(o):n.push(Math.ceil(a*t*e)/e)}else n.push(o);if(o=s.shift(),o===void 0)return n.join("");r=!r}}function wo(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),o=i.indexOf("</"+t);if(n===-1||o===-1)break;const r=i.indexOf(">",o);if(r===-1)break;e+=i.slice(n+1,o).trim(),i=i.slice(0,s).trim()+i.slice(r+1)}return{defs:e,content:i}}function $o(i,t){return i?"<defs>"+i+"</defs>"+t:t}function Co(i,t,e){const s=wo(i);return $o(s.defs,t+s.content+e)}const Eo=i=>i==="unset"||i==="undefined"||i==="none";function Vn(i,t){const e={...Wt,...i},s={...kn,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let o=e.body;[e,s].forEach(g=>{const v=[],S=g.hFlip,C=g.vFlip;let x=g.rotate;S?C?x+=2:(v.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),v.push("scale(-1 1)"),n.top=n.left=0):C&&(v.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),v.push("scale(1 -1)"),n.top=n.left=0);let w;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:w=n.height/2+n.top,v.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:v.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,v.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}x%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),v.length&&(o=Co(o,'<g transform="'+v.join(" ")+'">',"</g>"))});const r=s.width,a=s.height,l=n.width,c=n.height;let u,d;r===null?(d=a===null?"1em":a==="auto"?c:a,u=Ne(d,l/c)):(u=r==="auto"?l:r,d=a===null?Ne(u,c/l):a==="auto"?c:a);const f={},p=(g,v)=>{Eo(v)||(f[g]=v.toString())};p("width",u),p("height",d);const b=[n.left,n.top,l,c];return f.viewBox=b.join(" "),{attributes:f,viewBox:b,body:o}}function ti(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function So(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ko(i){return"data:image/svg+xml,"+So(i)}function qn(i){return'url("'+ko(i)+'")'}const Oo=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let re=Oo();function Ao(i){re=i}function Po(){return re}function To(i,t){const e=ve(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(r=>{n=Math.max(n,r.length)});const o=t+".json?icons=";s=e.maxURL-n-e.path.length-o.length}return s}function Io(i){return i===404}const Lo=(i,t,e)=>{const s=[],n=To(i,t),o="icons";let r={type:o,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(r),r={type:o,provider:i,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),s.push(r),s};function zo(i){if(typeof i=="string"){const t=ve(i);if(t)return t.path}return"/"}const jo=(i,t,e)=>{if(!re){e("abort",424);return}let s=zo(t.provider);switch(t.type){case"icons":{const o=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;s+=o.slice(0,1)==="/"?o.slice(1):o;break}default:e("abort",400);return}let n=503;re(i+s).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{e(Io(r)?"abort":"next",r)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?e("abort",o):e("next",n)});return}setTimeout(()=>{e("success",o)})}).catch(()=>{e("next",n)})},Mo={prepare:Lo,send:jo};function Qi(i,t){switch(i){case"local":case"session":mt[i]=t;break;case"all":for(const e in mt)mt[e]=t;break}}const Pe="data-style";let Wn="";function Ro(i){Wn=i}function Yi(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Pe));e||(e=document.createElement("style"),e.setAttribute(Pe,Pe),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Wn}function Un(){Ni("",Mo),Tn(!0);let i;try{i=window}catch{}if(i){if(Hn(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Bi(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const o=e[s];if(typeof o!="object"||!o||o.resources===void 0)continue;Hi(s,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Qi(e,!0),disableCache:e=>Qi(e,!1),iconLoaded:Di,iconExists:Di,getIcon:Ks,listIcons:Js,addIcon:In,addCollection:Bi,calculateSize:Ne,buildIcon:Vn,iconToHTML:ti,svgToURL:qn,loadIcons:Ze,loadIcon:bo,addAPIProvider:Hi,appendCustomStyle:Ro,_api:{getAPIConfig:ve,setAPIModule:Ni,sendAPIQuery:jn,setFetch:Ao,getFetch:Po,listAPIProviders:ro}}}const He={"background-color":"currentColor"},Qn={"background-color":"transparent"},Gi={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Xi={"-webkit-mask":He,mask:He,background:Qn};for(const i in Xi){const t=Xi[i];for(const e in Gi)t[i+"-"+e]=Gi[e]}function Ji(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Bo(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const o=i.attributes,r=ti(n,{...o,width:t.width+"",height:t.height+""}),a=qn(r),l=s.style,c={"--svg":a,width:Ji(o.width),height:Ji(o.height),...e?He:Qn};for(const u in c)l.setProperty(u,c[u]);return s}let jt;function Do(){try{jt=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{jt=null}}function No(i){return jt===void 0&&Do(),jt?jt.createHTML(i):i}function Ho(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=ti(i.body,e);return t.innerHTML=No(n),t.firstChild}function Fe(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Ki(i,t){const e=t.icon.data,s=t.customisations,n=Vn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const o=t.renderedMode;let r;switch(o){case"svg":r=Ho(n);break;default:r=Bo(n,{...Wt,...e},o==="mask")}const a=Fe(i);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):i.replaceChild(r,a):i.appendChild(r)}function Zi(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Fo(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends e{constructor(){super();tt(this,"_shadowRoot");tt(this,"_initialised",!1);tt(this,"_state");tt(this,"_checkQueued",!1);tt(this,"_connected",!1);tt(this,"_observer",null);tt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=Ae(this);Yi(l,c),this._state=Zi({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=Ae(this),u=this._state;c!==u.inline&&(u.inline=c,Yi(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return Ae(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Ki(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const u=this.getAttribute("mode"),d=Mi(this);(l.attrMode!==u||qs(l.customisations,d)||!Fe(this._shadowRoot))&&this._renderIcon(l.icon,d,u)}_iconChanged(l){const c=vo(l,(u,d,f)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==u)return;const b={value:u,name:d,data:f};b.data?this._gotIconData(b):p.icon=b});c.data?this._gotIconData(c):this._state=Zi(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=Fe(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Mi(this),this.getAttribute("mode"))}_renderIcon(l,c,u){const d=yo(l.data.body,u),f=this._state.inline;Ki(this._shadowRoot,this._state={rendered:!0,icon:l,inline:f,customisations:c,attrMode:u,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(u=>u.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in o.prototype||Object.defineProperty(o.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=Un();for(const a in r)o[a]=o.prototype[a]=r[a];return t.define(i,o),o}Fo()||Un();var Vo=Object.defineProperty,q=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Vo(t,e,n),n},At;const D=(At=class extends E{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._parent=et(),this._tooltip=et(),this._contextMenu=et(),this._mouseLeave=!1,this.onWindowMouseUp=t=>{const{value:e}=this._contextMenu;!this.contains(t.target)&&e&&(e.visible=!1)},this.mouseLeave=!0,this.addEventListener("click",t=>t.stopPropagation())}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&wn(t,e,{placement:"bottom",middleware:[cn(10),xn(),_n(),yn({padding:5})]}).then(s=>{const{x:n,y:o}=s;Object.assign(e.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}onChildrenClick(t){t.stopPropagation();const{value:e}=this._contextMenu;e&&(e.visible=!e.visible)}onSlotChange(t){const{value:e}=this._contextMenu,s=t.target.assignedElements();for(const n of s){if(!(n instanceof At)){n.remove(),console.warn("Only bim-button is allowed inside bim-button. Child has been removed.");continue}n.addEventListener("click",()=>e==null?void 0:e.updatePosition())}this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){const t=m`
      <div ${Y(this._tooltip)} class="tooltip">
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
      <div ${Y(this._parent)} class="parent">
        ${this.label||this.icon?m`
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
        ${e?m`
              <div class="children" @click=${this.onChildrenClick}>
                <bim-icon .icon=${"ic:round-plus"}></bim-icon>
              </div>
            `:null}
        <bim-context-menu
          ${Y(this._contextMenu)}
          style="row-gap: var(--bim-ui_size-4xs)"
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </bim-context-menu>
      </div>
    `}},At.styles=$`
    :host {
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
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
      fill: white;
      background-color: var(--bim-ui_color-main);
    }

    :host(:not([label]):not([icon])) .children {
      flex: 1;
    }

    :host([active]) .button {
      --bim-label--c: var(--bim-ui_main-contrast);
      --bim-icon--c: var(--bim-ui_main-contrast);
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
  `,At);q([h({type:String,reflect:!0})],D.prototype,"label");q([h({type:Boolean,attribute:"label-hidden",reflect:!0})],D.prototype,"labelHidden");q([h({type:Boolean,reflect:!0})],D.prototype,"active");q([h({type:Boolean,reflect:!0,attribute:"disabled"})],D.prototype,"disabled");q([h({type:String,reflect:!0})],D.prototype,"icon");q([h({type:Boolean,reflect:!0})],D.prototype,"vertical");q([h({type:Number,attribute:"tooltip-time",reflect:!0})],D.prototype,"tooltipTime");q([h({type:Boolean,attribute:"tooltip-visible",reflect:!0})],D.prototype,"tooltipVisible");q([h({type:String,attribute:"tooltip-title",reflect:!0})],D.prototype,"tooltipTitle");q([h({type:String,attribute:"tooltip-text",reflect:!0})],D.prototype,"tooltipText");let qo=D;var Wo=Object.defineProperty,Qt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Wo(t,e,n),n};const ii=class ii extends E{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
      <div class="parent">
        ${this.label?m`<bim-label
              label="${this.label}"
              .icon="${this.icon}"
            ></bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};ii.styles=$`
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
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_color-accent));
    }
  `;let ot=ii;Qt([h({type:String,reflect:!0})],ot.prototype,"icon");Qt([h({type:String,reflect:!0})],ot.prototype,"name");Qt([h({type:String,reflect:!0})],ot.prototype,"label");Qt([h({type:Boolean,reflect:!0})],ot.prototype,"checked");Qt([h({type:Boolean,reflect:!0})],ot.prototype,"inverted");var Uo=Object.defineProperty,Pt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Uo(t,e,n),n};const ni=class ni extends E{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=et(),this._textInput=et(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return m`
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
                ${Y(this._colorInput)}
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
                ${Y(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?m`<bim-number-input
                  @input=${this.onOpacityInput}
                  slider
                  suffix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};ni.styles=$`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      flex: 1;
      display: block;
    }

    :host(:focus) {
      --bim-input--olw: var(--bim-number-input--olw, 2px);
      --bim-input--olc: var(--bim-ui_color-accent);
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
  `;let J=ni;Pt([h({type:String,reflect:!0})],J.prototype,"name");Pt([h({type:String,reflect:!0})],J.prototype,"label");Pt([h({type:String,reflect:!0})],J.prototype,"icon");Pt([h({type:Boolean,reflect:!0})],J.prototype,"vertical");Pt([h({type:Number,reflect:!0})],J.prototype,"opacity");Pt([h({type:String,reflect:!0})],J.prototype,"color");const Qo=$`
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
`,Yo=$`
  :root {
    /* Backgrounds */
    --bim-ui_bg-base: hsl(210 10% 5%);
    --bim-ui_bg-contrast-10: hsl(210 10% 10%);
    --bim-ui_bg-contrast-20: hsl(210 10% 20%);
    --bim-ui_bg-contrast-40: hsl(210 10% 40%);
    --bim-ui_bg-contrast-60: hsl(210 10% 60%);
    --bim-ui_bg-contrast-80: hsl(210 10% 80%);
    --bim-ui_bg-contrast-100: hsl(210 10% 95%);

    /* Main/accent app color that contrasts with bg-base */
    --bim-ui_bg-main-contrast: #6528d7;
    --bim-ui_bg-accent-contrast: #6528d7;

    /* Colors */
    --bim-ui_color-main: #6528d7;
    --bim-ui_color-accent: #bcf124;

    --bim-ui_main-base: #6528d7;
    --bim-ui_main-contrast: hsl(210 10% 95%);
    --bim-ui_accent-base: #bcf124;
    --bim-ui_accent-contrast: hsl(210 10% 5%);

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
`,yt={scrollbar:Qo,globalStyles:Yo};var Go=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,Jo=(i,t,e,s)=>{for(var n=Xo(t,e),o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Go(t,e,n),n};const si=class si extends E{constructor(){super(...arguments),this._visible=!1,this._middleware={name:"middleware",async fn(t){const{right:e,top:s}=await Ue(t);return t.x-=Math.sign(e)===1?e+5:0,t.y-=Math.sign(s)===1?s+5:0,t}}}get visible(){return this._visible}set visible(t){this._visible=t,t&&this.updatePosition()}async updatePosition(t){const e=t||this.parentNode;if(!e){this.visible=!1,console.warn("No target element found for context-menu.");return}const s=await wn(e,this,{placement:"right",middleware:[cn(10),xn(),_n(),yn({padding:5}),this._middleware]}),{x:n,y:o}=s;this.style.left=`${n}px`,this.style.top=`${o}px`}render(){return m` <slot></slot> `}};si.styles=[yt.scrollbar,$`
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
    `];let le=si;Jo([h({type:Boolean,reflect:!0})],le.prototype,"visible");class Ko extends E{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][o];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Te(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const o=t,r=l=>(n={...n,...l},Te(o(n),s),n);return r(e),[s.firstElementChild,r]}}const ae=(i,t=!0)=>{let e={};for(const s of i.children){const n=s,o=n.getAttribute("name")||n.getAttribute("label");if(o){if("value"in n){const r=n.value;if(typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).length===0)continue;e[o]=n.value}else if(t){const r=ae(n);if(Object.keys(r).length===0)continue;e[o]=r}}else t&&(e={...e,...ae(n)})}return e},ye=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Zo=["=",">",">=","<","<=","?","/","#"];function tn(i){const t=Zo.filter(a=>i.split(a).length===2)[0],e=i.split(t).map(a=>a.trim()),[s,n]=e,o=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):ye(n);return{key:s,condition:t,value:o}}const Ve=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),o=s.startsWith("(")&&s.endsWith(")");if(n){const r=tn(s);t.push(r)}if(o){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(u=>u.trim()).map((u,d)=>{const f=tn(u);return d>0&&(f.operator="&"),f})};t.push(c)}}return t}catch{return null}},en=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var tr=Object.defineProperty,er=Object.getOwnPropertyDescriptor,ht=(i,t,e,s)=>{for(var n=s>1?void 0:s?er(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&tr(t,e,n),n};const oi=class oi extends E{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?ye(this.label):this.label}set value(t){this._value=t}render(){return m`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?m` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?m`<bim-checkbox
                    style="pointer-events: none"
                    .checked=${this.checked}
                  ></bim-checkbox>`:null}
              <bim-label
                .vertical=${this.vertical}
                .label=${this.label}
                .icon=${this.icon}
                .img=${this.img}
              ></bim-label>
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
    `}};oi.styles=$`
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
        var(--bim-ui_color-main) 10%
      );
    }

    :host([checked]) {
      --bim-label--c: color-mix(in lab, var(--bim-ui_color-main), white 30%);
    }

    :host([checked]) svg {
      fill: color-mix(in lab, var(--bim-ui_color-main), white 30%);
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
      accent-color: var(--bim-checkbox--c, var(--bim-ui_color-main));
    }

    input:focus {
      outline: var(--bim-checkbox--olw, 2px) solid
        var(--bim-checkbox--olc, var(--bim-ui_color-accent));
    }

    bim-label {
      pointer-events: none;
    }
  `;let A=oi;ht([h({type:String,reflect:!0})],A.prototype,"img",2);ht([h({type:String,reflect:!0})],A.prototype,"label",2);ht([h({type:String,reflect:!0})],A.prototype,"icon",2);ht([h({type:Boolean,reflect:!0})],A.prototype,"checked",2);ht([h({type:Boolean,reflect:!0})],A.prototype,"checkbox",2);ht([h({type:Boolean,attribute:"no-mark",reflect:!0})],A.prototype,"noMark",2);ht([h({converter:{fromAttribute(i){return i&&ye(i)}}})],A.prototype,"value",1);ht([h({type:Boolean,reflect:!0})],A.prototype,"vertical",2);var ir=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,dt=(i,t,e,s)=>{for(var n=s>1?void 0:s?nr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&ir(t,e,n),n};const ri=class ri extends Ko{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._inputContainer=et(),this._listElement=et(),this._visible=!1,this._value=[],this.onValueChange=new Event("change"),this.onWindowMouseUp=t=>{this.visible&&(this.contains(t.target)||(this.visible=!1))},this.onOptionClick=t=>{const e=t.target,s=this._value.includes(e);if(!this.multiple&&!this.required&&!s)this._value=[e];else if(!this.multiple&&!this.required&&s)this._value=[];else if(!this.multiple&&this.required&&!s)this._value=[e];else if(this.multiple&&!this.required&&!s)this._value=[...this._value,e];else if(this.multiple&&!this.required&&s)this._value=this._value.filter(n=>n!==e);else if(this.multiple&&this.required&&!s)this._value=[...this._value,e];else if(this.multiple&&this.required&&s){const n=this._value.filter(o=>o!==e);n.length!==0&&(this._value=n)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){this._visible=t,t||this.resetVisibleElements()}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=[];for(const s of t){const n=this.findOption(s);if(n&&(e.push(n),!this.multiple&&Object.keys(t).length>1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return this._value.filter(e=>e instanceof A&&e.checked).map(e=>e.value)}get _options(){const t=[...this.elements];for(const e of this.children)e instanceof A&&t.push(e);return t}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);for(const s of e){if(!(s instanceof A)){s.remove();continue}s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick)}}updateOptionsState(){for(const t of this._options)t instanceof A&&(this._value.includes(t)?t.checked=!0:t.checked=!1)}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}firstUpdated(){for(const t of this.children)t instanceof A&&t.checked&&this._value.push(t)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){let t,e,s;if(this._value.length===0)t="Select an option...";else if(this._value.length===1){const n=this._value[0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.length})`;return m`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${Y(this._inputContainer)}
          class="input"
          @click=${()=>this.visible=!this.visible}
        >
          <bim-label
            label=${t}
            .img=${e}
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
        <bim-context-menu ${Y(this._listElement)} .visible=${this.visible}>
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this.visibleElements.map(n=>n)}
        </bim-context-menu>
      </bim-input>
    `}};ri.styles=[yt.scrollbar,$`
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
          var(--bim-ui_color-accent)
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
    `];let R=ri;dt([h({type:String,reflect:!0})],R.prototype,"name",2);dt([h({type:String,reflect:!0})],R.prototype,"icon",2);dt([h({type:String,reflect:!0})],R.prototype,"label",2);dt([h({type:Boolean,reflect:!0})],R.prototype,"multiple",2);dt([h({type:Boolean,reflect:!0})],R.prototype,"required",2);dt([h({type:Boolean,reflect:!0})],R.prototype,"vertical",2);dt([h({type:Boolean,reflect:!0})],R.prototype,"visible",1);dt([Ht()],R.prototype,"_value",2);var sr=Object.defineProperty,Yn=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&sr(t,e,n),n};const li=class li extends E{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(t){const n=t.split(`
`).map(r=>r.trim()).map(r=>r.split('"')[1]).filter(r=>r!==void 0).flatMap(r=>r.split(/\s+/));return[...new Set(n)].filter(r=>r!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const t=this.layouts[this.layout],s=this.getUniqueAreasFromTemplate(t.template).map(n=>{const o=t.elements[n];return o&&(o.style.gridArea=n),o}).filter(n=>!!n);this.style.gridTemplate=t.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...s)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};li.styles=$`
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
  `;let Nt=li;Yn([h({type:Boolean,reflect:!0})],Nt.prototype,"floating");Yn([h({type:String,reflect:!0})],Nt.prototype,"layout");const fe=class fe extends E{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};fe.styles=$`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
    }
  `,fe.properties={icon:{type:String}};let qe=fe;var or=Object.defineProperty,_e=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&or(t,e,n),n};const ai=class ai extends E{constructor(){super(),this.onValueChange=new Event("change"),this.vertical=!1}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const o=n,r=t[s];typeof r=="boolean"?o.checked=r:o.value=r}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};ai.styles=$`
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
  `;let bt=ai;_e([h({type:String,reflect:!0})],bt.prototype,"name");_e([h({type:String,reflect:!0})],bt.prototype,"label");_e([h({type:String,reflect:!0})],bt.prototype,"icon");_e([h({type:Boolean,reflect:!0})],bt.prototype,"vertical");var rr=Object.defineProperty,Tt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&rr(t,e,n),n};const ci=class ci extends E{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.label?ye(this.label):this.label}render(){return m`
      <div class="parent" .title=${this.label??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.label||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        ${!this.labelHidden&&this.label?m`<label>${this.label}</label>`:null}
      </div>
    `}};ci.styles=$`
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
  `;let K=ci;Tt([h({type:String,reflect:!0})],K.prototype,"label");Tt([h({type:String,reflect:!0})],K.prototype,"img");Tt([h({type:Boolean,attribute:"label-hidden",reflect:!0})],K.prototype,"labelHidden");Tt([h({type:String,reflect:!0})],K.prototype,"icon");Tt([h({type:Boolean,attribute:"icon-hidden",reflect:!0})],K.prototype,"iconHidden");Tt([h({type:Boolean,reflect:!0})],K.prototype,"vertical");var lr=Object.defineProperty,ar=Object.getOwnPropertyDescriptor,M=(i,t,e,s)=>{for(var n=s>1?void 0:s?ar(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&lr(t,e,n),n};const ui=class ui extends E{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=et(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const o=l=>{var g;n=!0;const{clientX:c}=l,u=this.step??1,d=((g=u.toString().split(".")[1])==null?void 0:g.length)||0,f=1/(this.sensitivity??1),p=(c-e)/f;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const b=s+p*u;this.setValue(b.toFixed(d))},r=()=>{this.slider=!0,this.removeEventListener("blur",r)},a=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",r),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.pref}
            .icon=${this.icon}
          ></bim-label>`:null}
      <input
        ${Y(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.suffix}
          ></bim-label>`:null}
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),o=m`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?m`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .label=${`${this.pref}: `}
              .icon=${this.icon}
            ></bim-label>`:null}
        <bim-label
          style="z-index: 1;"
          .label=${this.value.toString()}
        ></bim-label>
        ${this.suffix?m`<bim-label
              style="z-index: 1;"
              .label=${this.suffix}
            ></bim-label>`:null}
      </div>
    `,r=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return m`
      <bim-input
        title=${r}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:t}
      </bim-input>
    `}};ui.styles=$`
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
    }

    .slider-indicator {
      height: 100%;
      background-color: var(--bim-ui_color-main);
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
  `;let T=ui;M([h({type:String,reflect:!0})],T.prototype,"name",2);M([h({type:String,reflect:!0})],T.prototype,"icon",2);M([h({type:String,reflect:!0})],T.prototype,"label",2);M([h({type:String,reflect:!0})],T.prototype,"pref",2);M([h({type:Number,reflect:!0})],T.prototype,"min",2);M([h({type:Number,reflect:!0})],T.prototype,"value",1);M([h({type:Number,reflect:!0})],T.prototype,"step",2);M([h({type:Number,reflect:!0})],T.prototype,"sensitivity",2);M([h({type:Number,reflect:!0})],T.prototype,"max",2);M([h({type:String,reflect:!0})],T.prototype,"suffix",2);M([h({type:Boolean,reflect:!0})],T.prototype,"vertical",2);M([h({type:Boolean,reflect:!0})],T.prototype,"slider",2);var cr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,xe=(i,t,e,s)=>{for(var n=s>1?void 0:s?ur(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&cr(t,e,n),n};const hi=class hi extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return ae(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};hi.styles=[yt.scrollbar,$`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        min-width: 20rem;
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
      }

      .parent bim-label {
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-80));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-sm));
        font-weight: 600;
        padding: 1rem;
        flex-shrink: 0;
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      .sections {
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let gt=hi;xe([h({type:String,reflect:!0})],gt.prototype,"icon",2);xe([h({type:String,reflect:!0})],gt.prototype,"name",2);xe([h({type:String,reflect:!0})],gt.prototype,"label",2);xe([h({type:Boolean,reflect:!0})],gt.prototype,"hidden",1);var hr=Object.defineProperty,Yt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&hr(t,e,n),n};const di=class di extends E{constructor(){super(...arguments),this.onValueChange=new Event("change")}get value(){return ae(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=m`<svg
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
    </svg>`,n=this.collapsed?e:s,o=m`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?m`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return m`
      <div class="parent">
        ${t?o:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};di.styles=[yt.scrollbar,$`
      :host {
        display: block;
        /* height: 100%; */
        pointer-events: auto;
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
        /* position: sticky;
        top: 0; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        user-select: none;
        height: 1.5rem;
        padding: 0.75rem 1rem;
        /* background-color: var(--bim-panel-section--bgc, var(--bim-ui_bg-base)); */
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
    `];let rt=di;Yt([h({type:String,reflect:!0})],rt.prototype,"icon");Yt([h({type:String,reflect:!0})],rt.prototype,"label");Yt([h({type:String,reflect:!0})],rt.prototype,"name");Yt([h({type:Boolean,reflect:!0})],rt.prototype,"fixed");Yt([h({type:Boolean,reflect:!0})],rt.prototype,"collapsed");var dr=Object.defineProperty,Gt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&dr(t,e,n),n};const fi=class fi extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof A&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof A&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof A&&e.checked);t&&(this._value=t)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};fi.styles=$`
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
      --bim-label--c: white;
      background-color: var(--bim-ui_color-main);
    }
  `;let lt=fi;Gt([h({type:String,reflect:!0})],lt.prototype,"name");Gt([h({type:String,reflect:!0})],lt.prototype,"icon");Gt([h({type:String,reflect:!0})],lt.prototype,"label");Gt([h({type:Boolean,reflect:!0})],lt.prototype,"vertical");Gt([Ht()],lt.prototype,"_value");var fr=Object.defineProperty,pr=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&fr(t,e,n),n};const pi=class pi extends E{constructor(){super(...arguments),this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};pi.styles=$`
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
  `;let ce=pi;pr([h({type:String,reflect:!0})],ce.prototype,"column");var mr=Object.defineProperty,br=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&mr(t,e,n),n};const mi=class mi extends E{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const s of this._groups)s.childrenHidden=typeof t>"u"?!s.childrenHidden:!t,e&&s.toggleChildren(t,e)}render(){return this._groups=[],m`
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};mi.styles=$`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }
  `;let ue=mi;br([h({type:Array,attribute:!1})],ue.prototype,"data");var gr=Object.defineProperty,vr=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&gr(t,e,n),n};const bi=class bi extends E{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){var d,f;const t=((d=this.table)==null?void 0:d.getGroupIndentation(this.data))??0,e=m`
      <style>
        .branch-vertical {
          left: ${t+.5625}rem;
        }
      </style>
      <div class="branch branch-vertical"></div>
    `,s=document.createElement("div");s.classList.add("branch","branch-horizontal"),s.style.left=`${t-1+.5625}rem`;const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("height","9.5"),n.setAttribute("width","7.5"),n.setAttribute("viewBox","0 0 4.6666672 7.3333333");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),n.append(o);const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("height","6.5"),r.setAttribute("width","9.5"),r.setAttribute("viewBox","0 0 5.9111118 5.0175439");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),r.append(a);const l=document.createElement("div");l.addEventListener("click",()=>this.toggleChildren()),l.classList.add("caret"),l.style.left=`${.125+t}rem`,this.childrenHidden?l.append(n):l.append(r);const c=document.createElement("bim-table-row");c.table=this.table,c.data=this.data.data,(f=this.table)==null||f.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:c}})),this.data.children&&c.append(l),t!==0&&(!this.data.children||this.childrenHidden)&&c.append(s);let u;return this.data.children&&(u=document.createElement("bim-table-children"),this._children=u,u.table=this.table,u.data=this.data.children),m`
      <div class="parent">
        ${this.data.children&&!this.childrenHidden?e:null}
        ${c} ${this.childrenHidden?null:u}
      </div>
    `}};bi.styles=$`
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
  `;let he=bi;vr([h({type:Boolean,attribute:"children-hidden",reflect:!0})],he.prototype,"childrenHidden");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nn=i=>Ps(i)?i._$litType$.h:i.strings,yr=$n(class extends Cn{constructor(i){super(i),this.et=new WeakMap}render(i){return[i]}update(i,[t]){const e=Ti(this.it)?nn(this.it):null,s=Ti(t)?nn(t):null;if(e!==null&&(s===null||e!==s)){const n=ji(i).pop();let o=this.et.get(e);if(o===void 0){const r=document.createDocumentFragment();o=Te(te,r),o.setConnected(!1),this.et.set(e,o)}zi(o,[n]),Li(o,void 0,n)}if(s!==null){if(e===null||e!==s){const n=this.et.get(s);if(n!==void 0){const o=ji(n).pop();Ls(i),Li(i,void 0,o),zi(i,[o])}}this.it=t}else this.it=void 0;return this.render(t)}});var _r=Object.defineProperty,we=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&_r(t,e,n),n};const gi=class gi extends E{constructor(){super(),this.data={},this._table=this.closest("bim-table"),this.onTableIndentationColorChange=t=>{var r;if(!this.table)return;const e=t.detail,{indentationLevel:s,color:n}=e;((r=this.table)==null?void 0:r.getRowIndentation(this.data))===s&&(this.style.backgroundColor=n)},this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"10px"}),this.columns=[],this.isHeader=!1}get _columnNames(){return this.columns.map(e=>e.name)}get _columnWidths(){return this.columns.map(e=>e.width)}set table(t){this._table&&(this.columns=[],this._table.removeEventListener("columnschange",this.onTableColumnsChange)),this._table=t,this._table&&(this.columns=this._table.columns,this._table.addEventListener("columnschange",this.onTableColumnsChange),this._table.addEventListener("indentation",this.onTableIndentationColorChange))}get table(){return this._table}connectedCallback(){super.connectedCallback(),this._observer.observe(this)}compute(){var n,o;const t=((n=this.table)==null?void 0:n.getRowIndentation(this.data))??0,e=this.isHeader?this.data:((o=this.table)==null?void 0:o.computeRowDeclaration(this.data))??this.data,s=[];for(const r in e){const a=e[r];let l;typeof a=="string"||typeof a=="boolean"||typeof a=="number"?l=m`<bim-label label="${a}"></bim-label>`:l=a;const c=this._columnNames.indexOf(r)===0,u=`
        ${c&&!this.isHeader?"justify-content: normal":""};
        ${c&&!this.isHeader?`margin-left: ${t+.125}rem`:""}
      `,f=m`
        <bim-table-cell ${Y(p=>{if(!p)return;const b=p;b.rowData=this.data,setTimeout(()=>{var g;(g=this.table)==null||g.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:b}}))})})} style="${u}" .column=${r}
          >${l}</bim-table-cell
        >
      `;s.push(f)}return m`
      <style>
        :host {
          grid-template-areas: "${this._columnNames.join(" ")}";
          grid-template-columns: ${this._columnWidths.join(" ")};
        }
      </style>
      ${s}
      <slot></slot>
    `}render(){return m`${yr(this._intersecting?this.compute():m``)}`}};gi.styles=$`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      /* border-bottom: 1px solid var(--bim-ui_bg-contrast-20); */
    }
  `;let vt=gi;we([h({type:Array,attribute:!1})],vt.prototype,"columns");we([h({type:Object,attribute:!1})],vt.prototype,"data");we([h({type:Boolean,attribute:"is-header",reflect:!0})],vt.prototype,"isHeader");we([Ht()],vt.prototype,"_intersecting");var xr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,_t=(i,t,e,s)=>{for(var n=s>1?void 0:s?wr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&xr(t,e,n),n};const vi=class vi extends E{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.definition={},this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=Ve(t)??[];for(const o of n){if("queries"in o){s=!1;break}const{condition:r,value:a}=o;let{key:l}=o;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(f=>f.includes(c)).map(f=>en(e.data[f],r,a)).some(f=>f)}else s=en(e.data[l],r,a);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:s}=e;t[s]=s}return t}get value(){return this.queryString?this._filteredData:this.data}set queryString(t){const e=t&&t.trim()!==""?t.trim():null;this._queryString=e,e?(Ve(e)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(e)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(e)),this.preserveStructureOnFilter&&(this._expandedBeforeSearch===void 0&&(this._expandedBeforeSearch=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeSearch!==void 0&&(this.expanded=this._expandedBeforeSearch,this._expandedBeforeSearch=void 0),this._filteredData=this.data)}get queryString(){return this._queryString}set data(t){this._data=t,this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:o}=s;for(const r in o)this._columns.map(l=>typeof l=="string"?l:l.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const r=this.computeMissingColumns(n);r&&!e&&(e=r)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const o=this._textDelimiters[t];let r="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(r+=`Indentation${o}`);const l=`${a.join(o)}
`;r+=l}for(const[l,c]of e.entries()){const{data:u,children:d}=c,f=this.indentationInText?`${s}${l+1}${o}`:"",p=a.map(g=>u[g]??""),b=`${f}${p.join(o)}
`;r+=b,d&&(r+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return r}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}computeRowDeclaration(t){const e={};for(const s in t){const n=this.definition[s];n?e[s]=n(t[s],t):e[s]=t[s]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const o=this.getRowIndentation(t,n.children,s+1);if(o!==null)return o}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const o=this.getGroupIndentation(t,n.children,s+1);if(o!==null)return o}}return null}setIndentationColor(t,e){const s=new CustomEvent("indentation",{detail:{indentationLevel:t,color:e}});this.dispatchEvent(s)}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const o of s)if(e(t,o)){if(this.preserveStructureOnFilter){const a={data:o.data};if(o.children){const l=this.filter(t,e,o.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:o.data}),o.children){const a=this.filter(t,e,o.children);n.push(...a)}}else if(o.children){const a=this.filter(t,e,o.children);this.preserveStructureOnFilter&&a.length?n.push({data:o.data,children:a}):n.push(...a)}return n}render(){const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:t}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};vi.styles=[yt.scrollbar,$`
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
    `];let V=vi;_t([Ht()],V.prototype,"_filteredData",2);_t([h({type:Boolean,attribute:"headers-hidden",reflect:!0})],V.prototype,"headersHidden",2);_t([h({type:String,attribute:"min-col-width",reflect:!0})],V.prototype,"minColWidth",2);_t([h({type:Array,attribute:!1})],V.prototype,"columns",1);_t([h({type:String,attribute:"search-string",reflect:!0})],V.prototype,"queryString",1);_t([h({type:Array,attribute:!1})],V.prototype,"data",1);_t([h({type:Boolean,reflect:!0})],V.prototype,"expanded",2);var $r=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,$e=(i,t,e,s)=>{for(var n=s>1?void 0:s?Cr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&$r(t,e,n),n};const yi=class yi extends E{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return m` <slot></slot> `}};yi.styles=$`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let I=yi;$e([h({type:String,reflect:!0})],I.prototype,"name",2);$e([h({type:String,reflect:!0})],I.prototype,"label",2);$e([h({type:String,reflect:!0})],I.prototype,"icon",2);$e([h({type:Boolean,reflect:!0})],I.prototype,"hidden",1);var Er=Object.defineProperty,Sr=Object.getOwnPropertyDescriptor,Xt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Sr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Er(t,e,n),n};const _i=class _i extends E{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof I&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof I&&n.name===t);for(const n of e){if(!(n instanceof I))continue;n.hidden=s!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof I))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.label=t.label,s.icon=t.icon,e.append(s),this._switchers.push(e)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof I?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof I&&(this.tab=s.name);for(const n of e){if(!(n instanceof I)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};_i.styles=[yt.scrollbar,$`
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
        cursor: pointer;
        pointer-events: auto;
        background-color: var(--bim-ui_bg-base);
        padding: 0rem 0.75rem;
        color: var(--bim-ui_bg-contrast-60);
      }

      .switcher:hover,
      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_color-main);
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
    `];let at=_i;Xt([Ht()],at.prototype,"_switchers",2);Xt([h({type:Boolean,reflect:!0})],at.prototype,"bottom",2);Xt([h({type:Boolean,attribute:"switchers-hidden",reflect:!0})],at.prototype,"switchersHidden",2);Xt([h({type:Boolean,reflect:!0})],at.prototype,"floating",2);Xt([h({type:String,reflect:!0})],at.prototype,"tab",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=i=>i??te;var Or=Object.defineProperty,Ar=Object.getOwnPropertyDescriptor,ft=(i,t,e,s)=>{for(var n=s>1?void 0:s?Ar(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Or(t,e,n),n};const xi=class xi extends E{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return Ve(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}render(){return m`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        <input
          aria-label=${this.label||this.name||"Checkbox Input"}
          .type=${this.type}
          .value=${this.value}
          placeholder=${kr(this.placeholder)}
          @input=${this.onInputChange}
        />
      </bim-input>
    `}};xi.styles=$`
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
      --bim-input--olc: var(--bim-ui_color-accent);
    }

    /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
  `;let B=xi;ft([h({type:String,reflect:!0})],B.prototype,"icon",2);ft([h({type:String,reflect:!0})],B.prototype,"label",2);ft([h({type:String,reflect:!0})],B.prototype,"name",2);ft([h({type:String,reflect:!0})],B.prototype,"placeholder",2);ft([h({type:String,reflect:!0})],B.prototype,"value",2);ft([h({type:Boolean,reflect:!0})],B.prototype,"vertical",2);ft([h({type:Number,reflect:!0})],B.prototype,"debounce",2);ft([h({type:String,reflect:!0})],B.prototype,"type",1);var Pr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Gn=(i,t,e,s)=>{for(var n=s>1?void 0:s?Tr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Pr(t,e,n),n};const wi=class wi extends E{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};wi.styles=$`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `;let kt=wi;Gn([h({type:Number,reflect:!0})],kt.prototype,"rows",2);Gn([h({type:Boolean,reflect:!0})],kt.prototype,"vertical",1);var Ir=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,Ce=(i,t,e,s)=>{for(var n=s>1?void 0:s?Lr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Ir(t,e,n),n};const $i=class $i extends E{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof kt&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
      </div>
    `}};$i.styles=$`
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

    .parent {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
      padding: 0.5rem;
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
  `;let ct=$i;Ce([h({type:String,reflect:!0})],ct.prototype,"label",2);Ce([h({type:String,reflect:!0})],ct.prototype,"icon",2);Ce([h({type:Boolean,reflect:!0})],ct.prototype,"vertical",1);Ce([h({type:Boolean,attribute:"label-hidden",reflect:!0})],ct.prototype,"labelHidden",1);const _=class _{static set config(t){this._config={..._._config,...t}}static get config(){return _._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=yt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){_.init()}static init(){_.addGlobalStyles(),_.defineCustomElement("bim-button",qo),_.defineCustomElement("bim-checkbox",ot),_.defineCustomElement("bim-color-input",J),_.defineCustomElement("bim-context-menu",le),_.defineCustomElement("bim-dropdown",R),_.defineCustomElement("bim-grid",Nt),_.defineCustomElement("bim-icon",qe),_.defineCustomElement("bim-input",bt),_.defineCustomElement("bim-label",K),_.defineCustomElement("bim-number-input",T),_.defineCustomElement("bim-option",A),_.defineCustomElement("bim-panel",gt),_.defineCustomElement("bim-panel-section",rt),_.defineCustomElement("bim-selector",lt),_.defineCustomElement("bim-table",V),_.defineCustomElement("bim-tabs",at),_.defineCustomElement("bim-tab",I),_.defineCustomElement("bim-table-cell",ce),_.defineCustomElement("bim-table-children",ue),_.defineCustomElement("bim-table-group",he),_.defineCustomElement("bim-table-row",vt),_.defineCustomElement("bim-text-input",B),_.defineCustomElement("bim-toolbar",Ot),_.defineCustomElement("bim-toolbar-group",kt),_.defineCustomElement("bim-toolbar-section",ct),_.defineCustomElement("bim-viewport",de)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};_._config={sectionLabelOnVerticalToolbar:!1};let We=_;var zr=Object.defineProperty,jr=Object.getOwnPropertyDescriptor,ei=(i,t,e,s)=>{for(var n=s>1?void 0:s?jr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&zr(t,e,n),n};const Ci=class Ci extends E{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof ct&&(e.labelHidden=this.vertical&&!We.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Ci.styles=$`
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
  `;let Ot=Ci;ei([h({type:String,reflect:!0})],Ot.prototype,"icon",2);ei([h({type:Boolean,attribute:"labels-hidden",reflect:!0})],Ot.prototype,"labelsHidden",2);ei([h({type:Boolean,reflect:!0})],Ot.prototype,"vertical",1);var Mr=Object.defineProperty,Rr=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Mr(t,e,n),n};const Ei=class Ei extends E{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Ei.styles=$`
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
  `;let de=Ei;Rr([h({type:String,reflect:!0})],de.prototype,"name");export{Ko as C,We as M,$n as e,Cn as i,Y as n,zs as t};
