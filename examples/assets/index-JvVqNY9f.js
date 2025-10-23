var Xn=Object.defineProperty;var Kn=(i,t,e)=>t in i?Xn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var lt=(i,t,e)=>(Kn(i,typeof t!="symbol"?t+"":t,e),e);import{a as S,i as k,n as d,e as Pt,b as G,r as $t,c as Jn,d as Zn,t as ts}from"./ref-CLKbrLVk.js";import{B as ki,x as f,E as Tt,T as es}from"./lit-html-BUQgm8fs.js";const It=Math.min,et=Math.max,ce=Math.round,ct=i=>({x:i,y:i}),is={left:"right",right:"left",bottom:"top",top:"bottom"},ns={start:"end",end:"start"};function Ei(i,t,e){return et(i,It(t,e))}function Xt(i,t){return typeof i=="function"?i(t):i}function it(i){return i.split("-")[0]}function ye(i){return i.split("-")[1]}function en(i){return i==="x"?"y":"x"}function nn(i){return i==="y"?"height":"width"}const ss=new Set(["top","bottom"]);function tt(i){return ss.has(it(i))?"y":"x"}function sn(i){return en(tt(i))}function rs(i,t,e){e===void 0&&(e=!1);const s=ye(i),n=sn(i),r=nn(n);let o=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=ue(o)),[o,ue(o)]}function os(i){const t=ue(i);return[Le(i),t,Le(t)]}function Le(i){return i.replace(/start|end/g,t=>ns[t])}const Ai=["left","right"],Oi=["right","left"],as=["top","bottom"],ls=["bottom","top"];function cs(i,t,e){switch(i){case"top":case"bottom":return e?t?Oi:Ai:t?Ai:Oi;case"left":case"right":return t?as:ls;default:return[]}}function us(i,t,e,s){const n=ye(i);let r=cs(it(i),e==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(Le)))),r}function ue(i){return i.replace(/left|right|bottom|top/g,t=>is[t])}function ds(i){return{top:0,right:0,bottom:0,left:0,...i}}function rn(i){return typeof i!="number"?ds(i):{top:i,right:i,bottom:i,left:i}}function Lt(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function Pi(i,t,e){let{reference:s,floating:n}=i;const r=tt(t),o=sn(t),a=nn(o),l=it(t),c=r==="y",u=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,p=s[a]/2-n[a]/2;let b;switch(l){case"top":b={x:u,y:s.y-n.height};break;case"bottom":b={x:u,y:s.y+s.height};break;case"right":b={x:s.x+s.width,y:h};break;case"left":b={x:s.x-n.width,y:h};break;default:b={x:s.x,y:s.y}}switch(ye(t)){case"start":b[o]-=p*(e&&c?-1:1);break;case"end":b[o]+=p*(e&&c?-1:1);break}return b}const hs=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=e,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:u,y:h}=Pi(c,s,l),p=s,b={},g=0;for(let v=0;v<a.length;v++){const{name:m,fn:w}=a[v],{x:y,y:_,data:$,reset:A}=await w({x:u,y:h,initialPlacement:s,placement:p,strategy:n,middlewareData:b,rects:c,platform:o,elements:{reference:i,floating:t}});u=y??u,h=_??h,b={...b,[m]:{...b[m],...$}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(p=A.placement),A.rects&&(c=A.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):A.rects),{x:u,y:h}=Pi(c,p,l)),v=-1)}return{x:u,y:h,placement:p,strategy:n,middlewareData:b}};async function on(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:p=!1,padding:b=0}=Xt(t,i),g=rn(b),m=a[p?h==="floating"?"reference":"floating":h],w=Lt(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(m)))==null||e?m:m.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),y=h==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),$=await(r.isElement==null?void 0:r.isElement(_))?await(r.getScale==null?void 0:r.getScale(_))||{x:1,y:1}:{x:1,y:1},A=Lt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:_,strategy:l}):y);return{top:(w.top-A.top+g.top)/$.y,bottom:(A.bottom-w.bottom+g.bottom)/$.y,left:(w.left-A.left+g.left)/$.x,right:(A.right-w.right+g.right)/$.x}}const fs=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:b="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...m}=Xt(i,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const w=it(n),y=tt(a),_=it(a)===a,$=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=p||(_||!v?[ue(a)]:os(a)),C=g!=="none";!p&&C&&A.push(...us(a,v,g,$));const T=[a,...A],N=await on(t,m),V=[];let E=((s=r.flip)==null?void 0:s.overflows)||[];if(u&&V.push(N[w]),h){const Q=rs(n,o,$);V.push(N[Q[0]],N[Q[1]])}if(E=[...E,{placement:n,overflows:V}],!V.every(Q=>Q<=0)){var kt,Mt;const Q=(((kt=r.flip)==null?void 0:kt.index)||0)+1,xt=T[Q];if(xt&&(!(h==="alignment"?y!==tt(xt):!1)||E.every(B=>B.overflows[0]>0&&tt(B.placement)===y)))return{data:{index:Q,overflows:E},reset:{placement:xt}};let ot=(Mt=E.filter(Z=>Z.overflows[0]<=0).sort((Z,B)=>Z.overflows[1]-B.overflows[1])[0])==null?void 0:Mt.placement;if(!ot)switch(b){case"bestFit":{var Et;const Z=(Et=E.filter(B=>{if(C){const at=tt(B.placement);return at===y||at==="y"}return!0}).map(B=>[B.placement,B.overflows.filter(at=>at>0).reduce((at,Gn)=>at+Gn,0)]).sort((B,at)=>B[1]-at[1])[0])==null?void 0:Et[0];Z&&(ot=Z);break}case"initialPlacement":ot=a;break}if(n!==ot)return{reset:{placement:ot}}}return{}}}};function an(i){const t=It(...i.map(r=>r.left)),e=It(...i.map(r=>r.top)),s=et(...i.map(r=>r.right)),n=et(...i.map(r=>r.bottom));return{x:t,y:e,width:s-t,height:n-e}}function ps(i){const t=i.slice().sort((n,r)=>n.y-r.y),e=[];let s=null;for(let n=0;n<t.length;n++){const r=t[n];!s||r.y-s.y>s.height/2?e.push([r]):e[e.length-1].push(r),s=r}return e.map(n=>Lt(an(n)))}const ms=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:r,strategy:o}=t,{padding:a=2,x:l,y:c}=Xt(i,t),u=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(s.reference))||[]),h=ps(u),p=Lt(an(u)),b=rn(a);function g(){if(h.length===2&&h[0].left>h[1].right&&l!=null&&c!=null)return h.find(m=>l>m.left-b.left&&l<m.right+b.right&&c>m.top-b.top&&c<m.bottom+b.bottom)||p;if(h.length>=2){if(tt(e)==="y"){const E=h[0],kt=h[h.length-1],Mt=it(e)==="top",Et=E.top,Q=kt.bottom,xt=Mt?E.left:kt.left,ot=Mt?E.right:kt.right,Z=ot-xt,B=Q-Et;return{top:Et,bottom:Q,left:xt,right:ot,width:Z,height:B,x:xt,y:Et}}const m=it(e)==="left",w=et(...h.map(E=>E.right)),y=It(...h.map(E=>E.left)),_=h.filter(E=>m?E.left===y:E.right===w),$=_[0].top,A=_[_.length-1].bottom,C=y,T=w,N=T-C,V=A-$;return{top:$,bottom:A,left:C,right:T,width:N,height:V,x:C,y:$}}return p}const v=await r.getElementRects({reference:{getBoundingClientRect:g},floating:s.floating,strategy:o});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}},bs=new Set(["left","top"]);async function gs(i,t){const{placement:e,platform:s,elements:n}=i,r=await(s.isRTL==null?void 0:s.isRTL(n.floating)),o=it(e),a=ye(e),l=tt(e)==="y",c=bs.has(o)?-1:1,u=r&&l?-1:1,h=Xt(t,i);let{mainAxis:p,crossAxis:b,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(b=a==="end"?g*-1:g),l?{x:b*u,y:p*c}:{x:p*c,y:b*u}}const ln=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:r,placement:o,middlewareData:a}=t,l=await gs(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:o}}}}},vs=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:w,y}=m;return{x:w,y}}},...l}=Xt(i,t),c={x:e,y:s},u=await on(t,l),h=tt(it(n)),p=en(h);let b=c[p],g=c[h];if(r){const m=p==="y"?"top":"left",w=p==="y"?"bottom":"right",y=b+u[m],_=b-u[w];b=Ei(y,b,_)}if(o){const m=h==="y"?"top":"left",w=h==="y"?"bottom":"right",y=g+u[m],_=g-u[w];g=Ei(y,g,_)}const v=a.fn({...t,[p]:b,[h]:g});return{...v,data:{x:v.x-e,y:v.y-s,enabled:{[p]:r,[h]:o}}}}}};function xe(){return typeof window<"u"}function ut(i){return cn(i)?(i.nodeName||"").toLowerCase():"#document"}function j(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function gt(i){var t;return(t=(cn(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function cn(i){return xe()?i instanceof Node||i instanceof j(i).Node:!1}function X(i){return xe()?i instanceof Element||i instanceof j(i).Element:!1}function K(i){return xe()?i instanceof HTMLElement||i instanceof j(i).HTMLElement:!1}function Ti(i){return!xe()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof j(i).ShadowRoot}const ys=new Set(["inline","contents"]);function Kt(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=D(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!ys.has(n)}const xs=new Set(["table","td","th"]);function ws(i){return xs.has(ut(i))}const _s=[":popover-open",":modal"];function Cs(i){return _s.some(t=>{try{return i.matches(t)}catch{return!1}})}const $s=["transform","translate","scale","rotate","perspective"],Ss=["transform","translate","scale","rotate","perspective","filter"],ks=["paint","layout","strict","content"];function Ue(i){const t=Qe(),e=X(i)?D(i):i;return $s.some(s=>e[s]?e[s]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||Ss.some(s=>(e.willChange||"").includes(s))||ks.some(s=>(e.contain||"").includes(s))}function Es(i){let t=zt(i);for(;K(t)&&!we(t);){if(Ue(t))return t;if(Cs(t))return null;t=zt(t)}return null}function Qe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const As=new Set(["html","body","#document"]);function we(i){return As.has(ut(i))}function D(i){return j(i).getComputedStyle(i)}function _e(i){return X(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function zt(i){if(ut(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Ti(i)&&i.host||gt(i);return Ti(t)?t.host:t}function un(i){const t=zt(i);return we(t)?i.ownerDocument?i.ownerDocument.body:i.body:K(t)&&Kt(t)?t:un(t)}function dn(i,t,e){var s;t===void 0&&(t=[]);const n=un(i),r=n===((s=i.ownerDocument)==null?void 0:s.body),o=j(n);return r?(Os(o),t.concat(o,o.visualViewport||[],Kt(n)?n:[],[])):t.concat(n,dn(n,[]))}function Os(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function hn(i){const t=D(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=K(i),r=n?i.offsetWidth:e,o=n?i.offsetHeight:s,a=ce(e)!==r||ce(s)!==o;return a&&(e=r,s=o),{width:e,height:s,$:a}}function fn(i){return X(i)?i:i.contextElement}function At(i){const t=fn(i);if(!K(t))return ct(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:r}=hn(t);let o=(r?ce(e.width):e.width)/s,a=(r?ce(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Ps=ct(0);function pn(i){const t=j(i);return!Qe()||!t.visualViewport?Ps:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ts(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==j(i)?!1:t}function Vt(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),r=fn(i);let o=ct(1);t&&(s?X(s)&&(o=At(s)):o=At(i));const a=Ts(r,e,s)?pn(r):ct(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,u=n.width/o.x,h=n.height/o.y;if(r){const p=j(r),b=s&&X(s)?j(s):s;let g=p,v=g.frameElement;for(;v&&s&&b!==g;){const m=At(v),w=v.getBoundingClientRect(),y=D(v),_=w.left+(v.clientLeft+parseFloat(y.paddingLeft))*m.x,$=w.top+(v.clientTop+parseFloat(y.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,h*=m.y,l+=_,c+=$,g=j(v),v=g.frameElement}}return Lt({width:u,height:h,x:l,y:c})}const Is=[":popover-open",":modal"];function mn(i){return Is.some(t=>{try{return i.matches(t)}catch{return!1}})}function Ls(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const r=n==="fixed",o=gt(s),a=t?mn(t.floating):!1;if(s===o||a&&r)return e;let l={scrollLeft:0,scrollTop:0},c=ct(1);const u=ct(0),h=K(s);if((h||!h&&!r)&&((ut(s)!=="body"||Kt(o))&&(l=_e(s)),K(s))){const p=Vt(s);c=At(s),u.x=p.x+s.clientLeft,u.y=p.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x,y:e.y*c.y-l.scrollTop*c.y+u.y}}function zs(i){return Array.from(i.getClientRects())}function bn(i){return Vt(gt(i)).left+_e(i).scrollLeft}function Rs(i){const t=gt(i),e=_e(i),s=i.ownerDocument.body,n=et(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=et(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-e.scrollLeft+bn(i);const a=-e.scrollTop;return D(s).direction==="rtl"&&(o+=et(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:a}}function Bs(i,t){const e=j(i),s=gt(i),n=e.visualViewport;let r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const c=Qe();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:o,x:a,y:l}}function js(i,t){const e=Vt(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,r=K(i)?At(i):ct(1),o=i.clientWidth*r.x,a=i.clientHeight*r.y,l=n*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function Ii(i,t,e){let s;if(t==="viewport")s=Bs(i,e);else if(t==="document")s=Rs(gt(i));else if(X(t))s=js(t,e);else{const n=pn(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return Lt(s)}function gn(i,t){const e=zt(i);return e===t||!X(e)||we(e)?!1:D(e).position==="fixed"||gn(e,t)}function Ds(i,t){const e=t.get(i);if(e)return e;let s=dn(i,[]).filter(a=>X(a)&&ut(a)!=="body"),n=null;const r=D(i).position==="fixed";let o=r?zt(i):i;for(;X(o)&&!we(o);){const a=D(o),l=Ue(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Kt(o)&&!l&&gn(i,o))?s=s.filter(u=>u!==o):n=a,o=zt(o)}return t.set(i,s),s}function Fs(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const o=[...e==="clippingAncestors"?Ds(t,this._c):[].concat(e),s],a=o[0],l=o.reduce((c,u)=>{const h=Ii(t,u,n);return c.top=et(h.top,c.top),c.right=It(h.right,c.right),c.bottom=It(h.bottom,c.bottom),c.left=et(h.left,c.left),c},Ii(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ms(i){const{width:t,height:e}=hn(i);return{width:t,height:e}}function qs(i,t,e){const s=K(t),n=gt(t),r=e==="fixed",o=Vt(i,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ct(0);if(s||!s&&!r)if((ut(t)!=="body"||Kt(n))&&(a=_e(t)),s){const h=Vt(t,!0,r,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else n&&(l.x=bn(n));const c=o.left+a.scrollLeft-l.x,u=o.top+a.scrollTop-l.y;return{x:c,y:u,width:o.width,height:o.height}}function Li(i,t){return!K(i)||D(i).position==="fixed"?null:t?t(i):i.offsetParent}function vn(i,t){const e=j(i);if(!K(i)||mn(i))return e;let s=Li(i,t);for(;s&&ws(s)&&D(s).position==="static";)s=Li(s,t);return s&&(ut(s)==="html"||ut(s)==="body"&&D(s).position==="static"&&!Ue(s))?e:s||Es(i)||e}const Hs=async function(i){const t=this.getOffsetParent||vn,e=this.getDimensions;return{reference:qs(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Ns(i){return D(i).direction==="rtl"}const Vs={convertOffsetParentRelativeRectToViewportRelativeRect:Ls,getDocumentElement:gt,getClippingRect:Fs,getOffsetParent:vn,getElementRects:Hs,getClientRects:zs,getDimensions:Ms,getScale:At,isElement:X,isRTL:Ns},yn=vs,xn=fs,wn=ms,_n=(i,t,e)=>{const s=new Map,n={platform:Vs,...e},r={...n.platform,_c:s};return hs(i,t,{...n,platform:r})};/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Cn=Object.freeze({left:0,top:0,width:16,height:16}),de=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Jt=Object.freeze({...Cn,...de}),ze=Object.freeze({...Jt,body:"",hidden:!1}),Ws=Object.freeze({width:null,height:null}),$n=Object.freeze({...Ws,...de});function Ys(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(i.slice(0,i.length-e.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}const Us=/[\s,]+/;function Qs(i,t){t.split(Us).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const Sn={...$n,preserveAspectRatio:""};function zi(i){const t={...Sn},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Ys(e("rotate","")),Qs(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Gs(i,t){for(const e in Sn)if(i[e]!==t[e])return!0;return!1}const Ht=/^[a-z0-9]+(-[a-z0-9]+)*$/,Zt=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!oe(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!oe(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:r};return t&&!oe(a,e)?null:a}return null},oe=(i,t)=>i?!!((i.provider===""||i.provider.match(Ht))&&(t&&i.prefix===""||i.prefix.match(Ht))&&i.name.match(Ht)):!1;function Xs(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Ri(i,t){const e=Xs(i,t);for(const s in ze)s in de?s in i&&!(s in e)&&(e[s]=de[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function Ks(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function r(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=s[o]&&s[o].parent,l=a&&r(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(s)).forEach(r),n}function Js(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let r={};function o(a){r=Ri(s[a]||n[a],r)}return o(t),e.forEach(o),Ri(i,r)}function kn(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=Ks(i);for(const n in s){const r=s[n];r&&(t(n,Js(i,n,r)),e.push(n))}return e}const Zs={provider:"",aliases:{},not_found:{},...Cn};function Oe(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function En(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Oe(i,Zs))return null;const e=t.icons;for(const n in e){const r=e[n];if(!n.match(Ht)||typeof r.body!="string"||!Oe(r,ze))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],o=r.parent;if(!n.match(Ht)||typeof o!="string"||!e[o]&&!s[o]||!Oe(r,ze))return null}return t}const he=Object.create(null);function tr(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function dt(i,t){const e=he[i]||(he[i]=Object.create(null));return e[t]||(e[t]=tr(i,t))}function Ge(i,t){return En(t)?kn(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function er(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function ir(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(he)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(he[n]||{})).forEach(o=>{const a=dt(n,o);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+o+":"+l))})}),e}let Wt=!1;function An(i){return typeof i=="boolean"&&(Wt=i),Wt}function Yt(i){const t=typeof i=="string"?Zt(i,!0,Wt):i;if(t){const e=dt(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function On(i,t){const e=Zt(i,!0,Wt);if(!e)return!1;const s=dt(e.provider,e.prefix);return er(s,e.name,t)}function Bi(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Wt&&!t&&!i.prefix){let n=!1;return En(i)&&(i.prefix="",kn(i,(r,o)=>{o&&On(r,o)&&(n=!0)})),n}const e=i.prefix;if(!oe({provider:t,prefix:e,name:"a"}))return!1;const s=dt(t,e);return!!Ge(s,i)}function ji(i){return!!Yt(i)}function nr(i){const t=Yt(i);return t?{...Jt,...t}:null}function sr(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,o=n.prefix,a=n.name,l=e[r]||(e[r]=Object.create(null)),c=l[o]||(l[o]=dt(r,o));let u;a in c.icons?u=t.loaded:o===""||c.missing.has(a)?u=t.missing:u=t.pending;const h={provider:r,prefix:o,name:a};u.push(h)}),t}function Pn(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function rr(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])o.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||Pn([i],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let or=0;function ar(i,t,e){const s=or++,n=Pn.bind(null,e,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}const Re=Object.create(null);function Di(i,t){Re[i]=t}function Be(i){return Re[i]||Re[""]}function lr(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const r=typeof n=="string"?Zt(n,t,e):n;r&&s.push(r)}),s}var cr={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ur(i,t,e,s){const n=i.resources.length,r=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let C=i.resources.slice(0);for(o=[];C.length>1;){const T=Math.floor(Math.random()*C.length);o.push(C[T]),C=C.slice(0,T).concat(C.slice(T+1))}o=o.concat(C)}else o=i.resources.slice(r).concat(i.resources.slice(0,r));const a=Date.now();let l="pending",c=0,u,h=null,p=[],b=[];typeof s=="function"&&b.push(s);function g(){h&&(clearTimeout(h),h=null)}function v(){l==="pending"&&(l="aborted"),g(),p.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),p=[]}function m(C,T){T&&(b=[]),typeof C=="function"&&b.push(C)}function w(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:p.length,subscribe:m,abort:v}}function y(){l="failed",b.forEach(C=>{C(void 0,u)})}function _(){p.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),p=[]}function $(C,T,N){const V=T!=="success";switch(p=p.filter(E=>E!==C),l){case"pending":break;case"failed":if(V||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){u=N,y();return}if(V){u=N,p.length||(o.length?A():y());return}if(g(),_(),!i.random){const E=i.resources.indexOf(C.resource);E!==-1&&E!==i.index&&(i.index=E)}l="completed",b.forEach(E=>{E(N)})}function A(){if(l!=="pending")return;g();const C=o.shift();if(C===void 0){if(p.length){h=setTimeout(()=>{g(),l==="pending"&&(_(),y())},i.timeout);return}y();return}const T={status:"pending",resource:C,callback:(N,V)=>{$(T,N,V)}};p.push(T),c++,h=setTimeout(A,i.rotate),e(C,t,T.callback)}return setTimeout(A),w}function Tn(i){const t={...cr,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const u=ur(t,a,l,(h,p)=>{s(),c&&c(h,p)});return e.push(u),u}function r(a){return e.find(l=>a(l))||null}return{query:n,find:r,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function Xe(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const Ce=Object.create(null),qt=["https://api.simplesvg.com","https://api.unisvg.com"],ae=[];for(;qt.length>0;)qt.length===1||Math.random()>.5?ae.push(qt.shift()):ae.push(qt.pop());Ce[""]=Xe({resources:["https://api.iconify.design"].concat(ae)});function Fi(i,t){const e=Xe(t);return e===null?!1:(Ce[i]=e,!0)}function $e(i){return Ce[i]}function dr(){return Object.keys(Ce)}function Mi(){}const Pe=Object.create(null);function hr(i){if(!Pe[i]){const t=$e(i);if(!t)return;const e=Tn(t),s={config:t,redundancy:e};Pe[i]=s}return Pe[i]}function In(i,t,e){let s,n;if(typeof i=="string"){const r=Be(i);if(!r)return e(void 0,424),Mi;n=r.send;const o=hr(i);o&&(s=o.redundancy)}else{const r=Xe(i);if(r){s=Tn(r);const o=i.resources?i.resources[0]:"",a=Be(o);a&&(n=a.send)}}return!s||!n?(e(void 0,424),Mi):s.query(t,n,e)().abort}const qi="iconify2",Ut="iconify",Ln=Ut+"-count",Hi=Ut+"-version",zn=36e5,fr=168,pr=50;function je(i,t){try{return i.getItem(t)}catch{}}function Ke(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Ni(i,t){try{i.removeItem(t)}catch{}}function De(i,t){return Ke(i,Ln,t.toString())}function Fe(i){return parseInt(je(i,Ln))||0}const wt={local:!0,session:!0},Rn={local:new Set,session:new Set};let Je=!1;function mr(i){Je=i}let re=typeof window>"u"?{}:window;function Bn(i){const t=i+"Storage";try{if(re&&re[t]&&typeof re[t].length=="number")return re[t]}catch{}wt[i]=!1}function jn(i,t){const e=Bn(i);if(!e)return;const s=je(e,Hi);if(s!==qi){if(s){const a=Fe(e);for(let l=0;l<a;l++)Ni(e,Ut+l.toString())}Ke(e,Hi,qi),De(e,0);return}const n=Math.floor(Date.now()/zn)-fr,r=a=>{const l=Ut+a.toString(),c=je(e,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}Ni(e,l)}};let o=Fe(e);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,De(e,o)):Rn[i].add(a))}function Dn(){if(!Je){mr(!0);for(const i in wt)jn(i,t=>{const e=t.data,s=t.provider,n=e.prefix,r=dt(s,n);if(!Ge(r,e).length)return!1;const o=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function br(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in wt)jn(s,n=>{const r=n.data;return n.provider!==i.provider||r.prefix!==i.prefix||r.lastModified===t});return!0}function gr(i,t){Je||Dn();function e(s){let n;if(!wt[s]||!(n=Bn(s)))return;const r=Rn[s];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=Fe(n),o>=pr||!De(n,o+1))return;const a={cached:Math.floor(Date.now()/zn),provider:i.provider,data:t};return Ke(n,Ut+o.toString(),JSON.stringify(a))}t.lastModified&&!br(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Vi(){}function vr(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,rr(i)}))}function yr(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let r;if(!n||!(r=Be(e)))return;r.prepare(e,s,n).forEach(a=>{In(e,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=Ge(i,l);if(!c.length)return;const u=i.pendingIcons;u&&c.forEach(h=>{u.delete(h)}),gr(i,l)}catch(c){console.error(c)}vr(i)})})}))}const Ze=(i,t)=>{const e=lr(i,!0,An()),s=sr(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Vi)}),()=>{l=!1}}const n=Object.create(null),r=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===o)return;o=c,a=u,r.push(dt(c,u));const h=n[c]||(n[c]=Object.create(null));h[u]||(h[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:h}=l,p=dt(c,u),b=p.pendingIcons||(p.pendingIcons=new Set);b.has(h)||(b.add(h),n[c][u].push(h))}),r.forEach(l=>{const{provider:c,prefix:u}=l;n[c][u].length&&yr(l,n[c][u])}),t?ar(t,s,r):Vi},xr=i=>new Promise((t,e)=>{const s=typeof i=="string"?Zt(i,!0):i;if(!s){e(i);return}Ze([s||i],n=>{if(n.length&&s){const r=Yt(s);if(r){t({...Jt,...r});return}}e(i)})});function wr(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function _r(i,t){const e=typeof i=="string"?Zt(i,!0,!0):null;if(!e){const r=wr(i);return{value:i,data:r}}const s=Yt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Ze([e],()=>t(i,e,Yt(e)));return{value:i,name:e,loading:n}}function Te(i){return i.hasAttribute("inline")}let Fn=!1;try{Fn=navigator.vendor.indexOf("Apple")===0}catch{}function Cr(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Fn||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const $r=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Sr=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Me(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split($r);if(s===null||!s.length)return i;const n=[];let r=s.shift(),o=Sr.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?n.push(r):n.push(Math.ceil(a*t*e)/e)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");o=!o}}function kr(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),r=i.indexOf("</"+t);if(n===-1||r===-1)break;const o=i.indexOf(">",r);if(o===-1)break;e+=i.slice(n+1,r).trim(),i=i.slice(0,s).trim()+i.slice(o+1)}return{defs:e,content:i}}function Er(i,t){return i?"<defs>"+i+"</defs>"+t:t}function Ar(i,t,e){const s=kr(i);return Er(s.defs,t+s.content+e)}const Or=i=>i==="unset"||i==="undefined"||i==="none";function Mn(i,t){const e={...Jt,...i},s={...$n,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,s].forEach(v=>{const m=[],w=v.hFlip,y=v.vFlip;let _=v.rotate;w?y?_+=2:(m.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),m.push("scale(-1 1)"),n.top=n.left=0):y&&(m.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),m.push("scale(1 -1)"),n.top=n.left=0);let $;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:$=n.height/2+n.top,m.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:m.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:$=n.width/2+n.left,m.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}_%2===1&&(n.left!==n.top&&($=n.left,n.left=n.top,n.top=$),n.width!==n.height&&($=n.width,n.width=n.height,n.height=$)),m.length&&(r=Ar(r,'<g transform="'+m.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,l=n.width,c=n.height;let u,h;o===null?(h=a===null?"1em":a==="auto"?c:a,u=Me(h,l/c)):(u=o==="auto"?l:o,h=a===null?Me(u,c/l):a==="auto"?c:a);const p={},b=(v,m)=>{Or(m)||(p[v]=m.toString())};b("width",u),b("height",h);const g=[n.left,n.top,l,c];return p.viewBox=g.join(" "),{attributes:p,viewBox:g,body:r}}function ti(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function Pr(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Tr(i){return"data:image/svg+xml,"+Pr(i)}function qn(i){return'url("'+Tr(i)+'")'}const Ir=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let fe=Ir();function Lr(i){fe=i}function zr(){return fe}function Rr(i,t){const e=$e(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const r=t+".json?icons=";s=e.maxURL-n-e.path.length-r.length}return s}function Br(i){return i===404}const jr=(i,t,e)=>{const s=[],n=Rr(i,t),r="icons";let o={type:r,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(o),o={type:r,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function Dr(i){if(typeof i=="string"){const t=$e(i);if(t)return t.path}return"/"}const Fr=(i,t,e)=>{if(!fe){e("abort",424);return}let s=Dr(t.provider);switch(t.type){case"icons":{const r=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=r+".json?"+l.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let n=503;fe(i+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{e(Br(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",n)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",n)})},Mr={prepare:jr,send:Fr};function Wi(i,t){switch(i){case"local":case"session":wt[i]=t;break;case"all":for(const e in wt)wt[e]=t;break}}const Ie="data-style";let Hn="";function qr(i){Hn=i}function Yi(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Ie));e||(e=document.createElement("style"),e.setAttribute(Ie,Ie),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Hn}function Nn(){Di("",Mr),An(!0);let i;try{i=window}catch{}if(i){if(Dn(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Bi(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const r=e[s];if(typeof r!="object"||!r||r.resources===void 0)continue;Fi(s,r)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Wi(e,!0),disableCache:e=>Wi(e,!1),iconLoaded:ji,iconExists:ji,getIcon:nr,listIcons:ir,addIcon:On,addCollection:Bi,calculateSize:Me,buildIcon:Mn,iconToHTML:ti,svgToURL:qn,loadIcons:Ze,loadIcon:xr,addAPIProvider:Fi,appendCustomStyle:qr,_api:{getAPIConfig:$e,setAPIModule:Di,sendAPIQuery:In,setFetch:Lr,getFetch:zr,listAPIProviders:dr}}}const qe={"background-color":"currentColor"},Vn={"background-color":"transparent"},Ui={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Qi={"-webkit-mask":qe,mask:qe,background:Vn};for(const i in Qi){const t=Qi[i];for(const e in Ui)t[i+"-"+e]=Ui[e]}function Gi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Hr(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=i.attributes,o=ti(n,{...r,width:t.width+"",height:t.height+""}),a=qn(o),l=s.style,c={"--svg":a,width:Gi(r.width),height:Gi(r.height),...e?qe:Vn};for(const u in c)l.setProperty(u,c[u]);return s}let Nt;function Nr(){try{Nt=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Nt=null}}function Vr(i){return Nt===void 0&&Nr(),Nt?Nt.createHTML(i):i}function Wr(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=ti(i.body,e);return t.innerHTML=Vr(n),t.firstChild}function He(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Xi(i,t){const e=t.icon.data,s=t.customisations,n=Mn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=Wr(n);break;default:o=Hr(n,{...Jt,...e},r==="mask")}const a=He(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function Ki(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Yr(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends e{constructor(){super();lt(this,"_shadowRoot");lt(this,"_initialised",!1);lt(this,"_state");lt(this,"_checkQueued",!1);lt(this,"_connected",!1);lt(this,"_observer",null);lt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=Te(this);Yi(l,c),this._state=Ki({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=Te(this),u=this._state;c!==u.inline&&(u.inline=c,Yi(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return Te(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Xi(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const u=this.getAttribute("mode"),h=zi(this);(l.attrMode!==u||Gs(l.customisations,h)||!He(this._shadowRoot))&&this._renderIcon(l.icon,h,u)}_iconChanged(l){const c=_r(l,(u,h,p)=>{const b=this._state;if(b.rendered||this.getAttribute("icon")!==u)return;const g={value:u,name:h,data:p};g.data?this._gotIconData(g):b.icon=g});c.data?this._gotIconData(c):this._state=Ki(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=He(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,zi(this),this.getAttribute("mode"))}_renderIcon(l,c,u){const h=Cr(l.data.body,u),p=this._state.inline;Xi(this._shadowRoot,this._state={rendered:!0,icon:l,inline:p,customisations:c,attrMode:u,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(u=>u.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=Nn();for(const a in o)r[a]=r.prototype[a]=o[a];return t.define(i,r),r}const Ur=Yr()||Nn(),{enableCache:Yo,disableCache:Uo,iconLoaded:Qo,iconExists:Go,getIcon:Xo,listIcons:Ko,addIcon:Jo,addCollection:Zo,calculateSize:ta,buildIcon:ea,iconToHTML:ia,svgToURL:na,loadIcons:Qr,loadIcon:sa,addAPIProvider:ra,_api:oa}=Ur,Gr=S`
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
`,Xr=S`
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
`,vt={scrollbar:Gr,globalStyles:Xr},x=class x{static set config(t){this._config={...x._config,...t}}static get config(){return x._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=vt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static preloadIcons(t,e=!1){Qr(t,(s,n,r)=>{e&&(console.log("Icons loaded:",s),n.length&&console.warn("Icons missing:",n),r.length&&console.info("Icons pending:",r))})}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){x.init()}static init(t="",e=!0){x.addGlobalStyles(),x.defineCustomElement("bim-button",io),x.defineCustomElement("bim-checkbox",ht),x.defineCustomElement("bim-color-input",J),x.defineCustomElement("bim-context-menu",le),x.defineCustomElement("bim-dropdown",F),x.defineCustomElement("bim-grid",Gt),x.defineCustomElement("bim-icon",Ve),x.defineCustomElement("bim-input",Ct),x.defineCustomElement("bim-label",ft),x.defineCustomElement("bim-number-input",L),x.defineCustomElement("bim-option",O),x.defineCustomElement("bim-panel",nt),x.defineCustomElement("bim-panel-section",pt),x.defineCustomElement("bim-selector",mt),x.defineCustomElement("bim-table",z),x.defineCustomElement("bim-tabs",W),x.defineCustomElement("bim-tab",I),x.defineCustomElement("bim-table-cell",me),x.defineCustomElement("bim-table-children",Ye),x.defineCustomElement("bim-table-group",be),x.defineCustomElement("bim-table-row",st),x.defineCustomElement("bim-text-input",R),x.defineCustomElement("bim-toolbar",jt),x.defineCustomElement("bim-toolbar-group",Bt),x.defineCustomElement("bim-toolbar-section",bt),x.defineCustomElement("bim-viewport",ge),e&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}static animateOnLoad(t=""){const e=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,s=[];function n(r,o=document,a=new Set){const l=[];return Array.from(o.querySelectorAll(r)).forEach(h=>{a.has(h)||(a.add(h),l.push(h))}),Array.from(o.querySelectorAll("*")).filter(h=>h.shadowRoot).forEach(h=>{a.has(h)||(a.add(h),l.push(...n(r,h.shadowRoot,a)))}),l}requestAnimationFrame(()=>{n(t||e).forEach(a=>{const l=a;let c="auto";c=window.getComputedStyle(l).getPropertyValue("transition"),l.style.setProperty("opacity","0"),l.style.setProperty("transition","none"),requestAnimationFrame(()=>{l.style.setProperty("transition",c)}),s.push(l)});const o=()=>{s.forEach(a=>{const l=a,c=(l.getBoundingClientRect().x+l.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),u=window.getComputedStyle(l).getPropertyValue("transform"),h=400,p=200+c*1e3;l.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:h,easing:"ease-in-out",delay:p}),setTimeout(()=>{l.style.removeProperty("opacity"),u!=="none"?l.style.setProperty("transform",u):l.style.removeProperty("transform")},p+h)})};document.readyState==="complete"?o():window.addEventListener("load",o)})}static toggleTheme(t=!0){const e=document.querySelector("html");if(!e)return;const s=()=>{e.classList.contains("bim-ui-dark")?e.classList.replace("bim-ui-dark","bim-ui-light"):e.classList.contains("bim-ui-light")?e.classList.replace("bim-ui-light","bim-ui-dark"):e.classList.add("bim-ui-light")};if(t){const r=document.createElement("div");r.classList.add("theme-transition-overlay");const o=document.createElement("div");r.appendChild(o),o.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(r),r.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),o.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{s()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(l=>{document.body.removeChild(l)})},1e3)}else s()}};x._config={sectionLabelOnVerticalToolbar:!1};let Qt=x;class Rt extends k{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return ki(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const r=t,o=c=>(n={...n,...c},ki(r(n,o),s),n);o(e);const a=()=>n;return[s.firstElementChild,o,a]}}const pe=(i,t={},e=!0)=>{let s={};for(const n of i.children){const r=n,o=r.getAttribute("name")||r.getAttribute("label"),a=o?t[o]:void 0;if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const l=r.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;s[o]=a?a(r.value):r.value}else if(e){const l=pe(r,t);if(Object.keys(l).length===0)continue;s[o]=a?a(l):l}}else e&&(s={...s,...pe(r,t)})}return s},Se=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Kr=[">=","<=","=",">","<","?","/","#"];function Ji(i){const t=Kr.find(a=>i.split(a).length===2),e=i.split(t).map(a=>a.trim()),[s,n]=e,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):Se(n);return{key:s,condition:t,value:r}}const Ne=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),r=s.startsWith("(")&&s.endsWith(")");if(n){const o=Ji(s);t.push(o)}if(r){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(u=>u.trim()).map((u,h)=>{const p=Ji(u);return h>0&&(p.operator="&"),p})};t.push(c)}}return t}catch{return null}},Zi=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var Jr=Object.defineProperty,Zr=Object.getOwnPropertyDescriptor,Wn=(i,t,e,s)=>{for(var n=Zr(t,e),r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Jr(t,e,n),n},P;const ei=(P=class extends k{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of[...P.dialog.children])t instanceof P&&(t.remove(),t.visible=!1);setTimeout(()=>{P.dialog.close(),P.dialog.remove()},310)}get visible(){return this._visible}set visible(t){this._visible=t,t?(P.dialog.parentElement||document.body.append(P.dialog),this._previousContainer=this.parentElement,P.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),P.dialog.append(this),P.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var e;(e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await _n(this._previousContainer,this,{placement:t,middleware:[ln(10),wn(),xn(),yn({padding:5})]}),{x:s,y:n}=e;this.style.left=`${s}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("display","none"),this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return f` <slot></slot> `}},P.styles=[vt.scrollbar,S`
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
        background-color: var(--bim-ui_bg-contrast-20);
        transition:
          clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
          transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      :host(:not([visible])) {
        transform: scale(0.8);
        clip-path: circle(0 at top left);
      }
    `],P.dialog=Rt.create(()=>f` <dialog
      @click=${e=>{e.target===P.dialog&&P.removeMenus()}}
      @cancel=${()=>P.removeMenus()}
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
    ></dialog>`),P);Wn([d({type:String,reflect:!0})],ei.prototype,"placement");Wn([d({type:Boolean,reflect:!0})],ei.prototype,"visible");let le=ei;var to=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,Y=(i,t,e,s)=>{for(var n=s>1?void 0:s?eo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&to(t,e,n),n},_t;const M=(_t=class extends k{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=Pt(),this._tooltip=Pt(),this._mouseLeave=!1,this.onClick=t=>{t.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{let t=this._contextMenu;if(this.contextMenuTemplate&&(t=Rt.create(()=>{const e=Rt.create(this.contextMenuTemplate);return e instanceof le?f`${e}`:f`
          <bim-context-menu>${e}</bim-context-menu>
        `}),this.append(t),t.addEventListener("hidden",()=>{t==null||t.remove()})),t){const e=this.getAttribute("data-context-group");e&&t.setAttribute("data-context-group",e),this.closeNestedContexts();const s=Qt.newRandomId();for(const n of t.children)n instanceof _t&&n.setAttribute("data-context-group",s);t.visible=!0}},this.mouseLeave=!0}set loading(t){if(this._loading=t,t)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=t,this.icon="eos-icons:loading";else{const{disabled:e,icon:s}=this._stateBeforeLoading;this.disabled=e,this.icon=s}}get loading(){return this._loading}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&_n(t,e,{placement:"bottom",middleware:[ln(10),wn(),xn(),yn({padding:5})]}).then(s=>{const{x:n,y:r}=s;Object.assign(e.style,{left:`${n}px`,top:`${r}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}closeNestedContexts(){const t=this.getAttribute("data-context-group");if(t)for(const e of le.dialog.children){const s=e.getAttribute("data-context-group");if(e instanceof le&&s===t){e.visible=!1,e.removeAttribute("data-context-group");for(const n of e.children)n instanceof _t&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const t=f`
      <div ${G(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?f`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?f`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `;let e=f`${this.label}`;if((this._contextMenu||this.contextMenuTemplate)&&this.label){const s=f`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.125rem"
        viewBox="0 0 24 24"
        width="1.125rem"
        style="fill: var(--bim-label--c)"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>`;e=f`
        <div style="display: flex; align-items: center;">
          ${this.label}
          ${s}
        </div>
      `}return f`
      <div ${G(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?f`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${e}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
      </div>
      <slot></slot>
    `}},_t.styles=S`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
    }

    :host(:not([disabled]))::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: var(--bim-ui_main-base);
      clip-path: circle(0 at center center);
      box-sizing: border-box;
      transition:
        clip-path 0.3s cubic-bezier(0.65, 0.05, 0.36, 1),
        transform 0.15s;
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
      transition: transform 0.15s;
    }

    :host(:not([label-hidden])[label]) .button {
      justify-content: var(--bim-button--jc, center);
    }

    :host(:hover)::before {
      clip-path: circle(120% at center center);
    }

    :host(:hover) {
      --bim-label--c: var(--bim-ui_main-contrast);
      z-index: 2;
    }

    :host([active]) {
      background-color: var(--bim-ui_main-base);
    }

    :host(:not([disabled]):active) {
      background: transparent;
    }

    :host(:not([disabled]):active) .button,
    :host(:not([disabled]):active)::before {
      transform: scale(0.98);
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
      animation: openTooltips 0.15s ease-out forwards;
      transition: visibility 0.2s;
    }

    .tooltip p {
      margin: 0;
      padding: 0;
    }

    :host(:not([tooltip-visible])) .tooltip {
      animation: closeTooltips 0.15s ease-in forwards;
      visibility: hidden;
      display: none;
    }

    @keyframes closeTooltips {
      0% {
        display: flex;
        padding: 0.75rem;
        transform: translateY(0);
        opacity: 1;
      }
      90% {
        padding: 0.75rem;
      }
      100% {
        display: none;
        padding: 0;
        transform: translateY(-10px);
        opacity: 0;
      }
    }

    @keyframes openTooltips {
      0% {
        display: flex;
        transform: translateY(-10px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,_t);Y([d({type:String,reflect:!0})],M.prototype,"label",2);Y([d({type:Boolean,attribute:"label-hidden",reflect:!0})],M.prototype,"labelHidden",2);Y([d({type:Boolean,reflect:!0})],M.prototype,"active",2);Y([d({type:Boolean,reflect:!0,attribute:"disabled"})],M.prototype,"disabled",2);Y([d({type:String,reflect:!0})],M.prototype,"icon",2);Y([d({type:Boolean,reflect:!0})],M.prototype,"vertical",2);Y([d({type:Number,attribute:"tooltip-time",reflect:!0})],M.prototype,"tooltipTime",2);Y([d({type:Boolean,attribute:"tooltip-visible",reflect:!0})],M.prototype,"tooltipVisible",2);Y([d({type:String,attribute:"tooltip-title",reflect:!0})],M.prototype,"tooltipTitle",2);Y([d({type:String,attribute:"tooltip-text",reflect:!0})],M.prototype,"tooltipText",2);Y([d({type:Boolean,reflect:!0})],M.prototype,"loading",1);let io=M;var no=Object.defineProperty,te=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&no(t,e,n),n};const ni=class ni extends k{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){const t=f`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return f`
      <div class="parent">
        <label class="parent-label">
          ${this.label?f`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
          <div class="input-container">
            <input
              type="checkbox"
              aria-label=${this.label||this.name||"Checkbox Input"}
              @change="${this.onChange}"
              .checked="${this.checked}"
            />
            ${t}
          </div>
        </label>
      </div>
    `}};ni.styles=S`
    :host {
      display: block;
    }

    .parent-label {
      --background: #fff;
      --border: #dfdfe6;
      --stroke: #fff;
      --border-hover: var(--bim-ui_main-base);
      --border-active: var(--bim-ui_main-base);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      width: 100%;
      height: 1.75rem;
      column-gap: 0.25rem;
      position: relative;
      cursor: pointer;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
    }

    :host([inverted]) .parent-label {
      flex-direction: row-reverse;
      justify-content: start;
    }

    input,
    svg {
      width: 1rem;
      height: 1rem;
      display: block;
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      outline: none;
      background: var(--background);
      border: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      border-radius: 4px;
      transition: box-shadow 0.3s;
      box-shadow: inset 0 0 0 var(--s, 1px) var(--b, var(--border));
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

    input:checked {
      --b: var(--border-active);
      --s: 11px;
    }

    input:checked + svg {
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
  `;let ht=ni;te([d({type:String,reflect:!0})],ht.prototype,"icon");te([d({type:String,reflect:!0})],ht.prototype,"name");te([d({type:String,reflect:!0})],ht.prototype,"label");te([d({type:Boolean,reflect:!0})],ht.prototype,"checked");te([d({type:Boolean,reflect:!0})],ht.prototype,"inverted");var so=Object.defineProperty,St=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&so(t,e,n),n};const si=class si extends k{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this.disabled=!1,this._colorInput=Pt(),this._textInput=Pt(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return f`
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
                ?disabled=${this.disabled}
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
                ?disabled=${this.disabled}
              />
            </div>
            ${this.opacity!==void 0?f`<bim-number-input
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
    `}};si.styles=S`
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

    :host([disabled]) .color-container input[type="text"] {
      color: var(--bim-ui_bg-contrast-60);
    }

    bim-number-input {
      flex-grow: 0;
    }
  `;let J=si;St([d({type:String,reflect:!0})],J.prototype,"name");St([d({type:String,reflect:!0})],J.prototype,"label");St([d({type:String,reflect:!0})],J.prototype,"icon");St([d({type:Boolean,reflect:!0})],J.prototype,"vertical");St([d({type:Number,reflect:!0})],J.prototype,"opacity");St([d({type:String,reflect:!0})],J.prototype,"color");St([d({type:Boolean,reflect:!0})],J.prototype,"disabled");var ro=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,yt=(i,t,e,s)=>{for(var n=s>1?void 0:s?oo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ro(t,e,n),n};const ri=class ri extends k{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Se(this.label):this.label}set value(t){this._value=t}render(){return f`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?f` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?f`<bim-checkbox
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
        ${!this.checkbox&&!this.noMark&&this.checked?f`<svg
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
    `}};ri.styles=S`
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
      z-index: 1;
    }
  `;let O=ri;yt([d({type:String,reflect:!0})],O.prototype,"img",2);yt([d({type:String,reflect:!0})],O.prototype,"label",2);yt([d({type:String,reflect:!0})],O.prototype,"icon",2);yt([d({type:Boolean,reflect:!0})],O.prototype,"checked",2);yt([d({type:Boolean,reflect:!0})],O.prototype,"checkbox",2);yt([d({type:Boolean,attribute:"no-mark",reflect:!0})],O.prototype,"noMark",2);yt([d({converter:{fromAttribute(i){return i&&Se(i)}}})],O.prototype,"value",1);yt([d({type:Boolean,reflect:!0})],O.prototype,"vertical",2);var ao=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,rt=(i,t,e,s)=>{for(var n=s>1?void 0:s?lo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ao(t,e,n),n};const oi=class oi extends Rt{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=Pt(),this.onOptionClick=t=>{const e=t.target,s=this._value.has(e);if(!this.multiple&&!this.required&&!s)this._value=new Set([e]);else if(!this.multiple&&!this.required&&s)this._value=new Set([]);else if(!this.multiple&&this.required&&!s)this._value=new Set([e]);else if(this.multiple&&!this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&s){const n=[...this._value].filter(r=>r!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&s){const n=[...this._value].filter(o=>o!==e),r=new Set(n);r.size!==0&&(this._value=r)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const s of this.elements)e.append(s);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const s of t){const n=this.findOption(s);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof O&&e.checked).map(e=>e.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof O&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const s=new Set;for(const n of this.elements){if(!(n instanceof O)){n.remove();continue}n.checked&&s.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=s}updateOptionsState(){for(const t of this._options)t instanceof O&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(s=>s instanceof O?s.label===t||s.value===t:!1)}render(){let t,e,s;if(this._value.size===0)t=this.placeholder??"Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.size})`;return f`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div class="input" @click=${()=>this.visible=!this.visible}>
          <bim-label
            .img=${e}
            .icon=${s}
            style="overflow: hidden;"
            >${t}</bim-label
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
    `}};oi.styles=[vt.scrollbar,S`
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
    `];let F=oi;rt([d({type:String,reflect:!0})],F.prototype,"name",2);rt([d({type:String,reflect:!0})],F.prototype,"icon",2);rt([d({type:String,reflect:!0})],F.prototype,"label",2);rt([d({type:Boolean,reflect:!0})],F.prototype,"multiple",2);rt([d({type:Boolean,reflect:!0})],F.prototype,"required",2);rt([d({type:Boolean,reflect:!0})],F.prototype,"vertical",2);rt([d({type:String,reflect:!0})],F.prototype,"placeholder",2);rt([d({type:Boolean,reflect:!0})],F.prototype,"visible",1);rt([$t()],F.prototype,"_value",2);var co=Object.defineProperty,Yn=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&co(t,e,n),n};const ai=class ai extends k{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._elements={},this._templateIds=new Map,this._updateFunctions={},this._slotNames={notAllowed:"not-allowed",notFound:"not-found",emptyLayout:"empty-layout"},this.updateComponent={},this.emitLayoutChange=()=>{this.dispatchEvent(new Event("layoutchange"))}}set layouts(t){this._layouts=t,this._templateIds.clear()}get layouts(){return this._layouts}set elements(t){this._elements=t,this.setUpdateFunctions()}get elements(){return this._elements}getLayoutAreas(t){const{template:e}=t,r=e.split(`
`).map(a=>a.trim()).map(a=>a.split('"')[1]).filter(a=>a!==void 0).flatMap(a=>a.split(/\s+/));return[...new Set(r)].filter(a=>a!=="")}setUpdateFunctions(){const t={};for(const[e,s]of Object.entries(this.elements))"template"in s&&(t[e]=n=>{var r,o;(o=(r=this._updateFunctions)[e])==null||o.call(r,n)});this.updateComponent=t}disconnectedCallback(){super.disconnectedCallback(),this._templateIds.clear(),this._updateFunctions={},this.updateComponent={}}getTemplateId(t){let e=this._templateIds.get(t);return e||(e=Qt.newRandomId(),this._templateIds.set(t,e)),e}cleanUpdateFunctions(){if(!this.layout){this._updateFunctions={};return}const t=this.layouts[this.layout],e=this.getLayoutAreas(t);for(const s in this.elements)e.includes(s)||delete this._updateFunctions[s]}clean(){this.style.gridTemplate="";for(const t of[...this.children])Object.values(this._slotNames).some(e=>t.getAttribute("slot")===e)||t.remove();this.cleanUpdateFunctions()}emitElementCreation(t){this.dispatchEvent(new CustomEvent("elementcreated",{detail:t}))}render(){if(this.layout){const t=this.layouts[this.layout];if(t){if(!(t.guard??(()=>!0))())return this.clean(),f`<slot name=${this._slotNames.notAllowed}></slot>`;const r=this.getLayoutAreas(t).map(o=>{var h;const a=((h=t.elements)==null?void 0:h[o])||this.elements[o];if(!a)return null;if(a instanceof HTMLElement)return a.style.gridArea=o,a;if("template"in a){const{template:p,initialState:b}=a,g=this.getTemplateId(p),v=this.querySelector(`[data-grid-template-id="${g}"]`);if(v)return v;const[m,w]=Rt.create(p,b);return this.emitElementCreation({name:o,element:m}),m.setAttribute("data-grid-template-id",g),m.style.gridArea=o,this._updateFunctions[o]=w,m}const l=this.getTemplateId(a),c=this.querySelector(`[data-grid-template-id="${l}"]`);if(c)return c;const u=Rt.create(a);return this.emitElementCreation({name:o,element:u}),u.setAttribute("data-grid-template-id",this.getTemplateId(a)),u.style.gridArea=o,u}).filter(o=>o!==null);this.clean(),this.style.gridTemplate=t.template,this.append(...r),this.emitLayoutChange()}else return this.clean(),f`<slot name=${this._slotNames.notFound}></slot>`}else return this.clean(),this.emitLayoutChange(),f`<slot name=${this._slotNames.emptyLayout}></slot>`;return f`${f`<slot></slot>`}`}};ai.styles=S`
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
  `;let Gt=ai;Yn([d({type:Boolean,reflect:!0})],Gt.prototype,"floating");Yn([d({type:String,reflect:!0})],Gt.prototype,"layout");const ve=class ve extends k{render(){return f`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};ve.styles=S`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
      transition: all 0.15s;
      display: flex;
    }
  `,ve.properties={icon:{type:String}};let Ve=ve;var uo=Object.defineProperty,ke=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&uo(t,e,n),n};const li=class li extends k{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const r=n,o=t[s];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return f`
      <div class="parent">
        ${this.label||this.icon?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};li.styles=S`
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
      position: relative;
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
      border: var(--bim-input--olw, 2px) solid
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
  `;let Ct=li;ke([d({type:String,reflect:!0})],Ct.prototype,"name");ke([d({type:String,reflect:!0})],Ct.prototype,"label");ke([d({type:String,reflect:!0})],Ct.prototype,"icon");ke([d({type:Boolean,reflect:!0})],Ct.prototype,"vertical");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ot(i,t,e){return i?t(i):e==null?void 0:e(i)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We=i=>i??Tt;var ho=Object.defineProperty,ee=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&ho(t,e,n),n};const ci=class ci extends k{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1,this._imgTemplate=()=>f`<img src=${We(this.img)} .alt=${this.textContent||""} />`,this._iconTemplate=()=>f`<bim-icon .icon=${this.icon}></bim-icon>`}get value(){return this.textContent?Se(this.textContent):this.textContent}render(){return f`
      <div class="parent" title=${this.textContent}>
        ${Ot(this.img,this._imgTemplate,()=>Tt)}
        ${Ot(!this.iconHidden&&this.icon,this._iconTemplate,()=>Tt)}
        <p><slot></slot></p>
      </div>
    `}};ci.styles=S`
    :host {
      --bim-icon--c: var(--bim-label--ic);
      overflow: auto;
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-60));
      font-size: var(--bim-label--fz, var(--bim-ui_size-xs));
      display: block;
      white-space: nowrap;
      transition: all 0.15s;
    }

    :host([icon]) {
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
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.8)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let ft=ci;ee([d({type:String,reflect:!0})],ft.prototype,"img");ee([d({type:Boolean,attribute:"label-hidden",reflect:!0})],ft.prototype,"labelHidden");ee([d({type:String,reflect:!0})],ft.prototype,"icon");ee([d({type:Boolean,attribute:"icon-hidden",reflect:!0})],ft.prototype,"iconHidden");ee([d({type:Boolean,reflect:!0})],ft.prototype,"vertical");var fo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,q=(i,t,e,s)=>{for(var n=s>1?void 0:s?po(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&fo(t,e,n),n};const ui=class ui extends k{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Pt(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const r=l=>{var v;n=!0;const{clientX:c}=l,u=this.step??1,h=((v=u.toString().split(".")[1])==null?void 0:v.length)||0,p=1/(this.sensitivity??1),b=(c-e)/p;if(Math.floor(Math.abs(b))!==Math.abs(b))return;const g=s+b*u;this.setValue(g.toFixed(h))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},a=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=f`
      ${this.pref||this.icon?f`<bim-label
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
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?f`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),r=f`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?f`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?f`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return f`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};ui.styles=S`
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
  `;let L=ui;q([d({type:String,reflect:!0})],L.prototype,"name",2);q([d({type:String,reflect:!0})],L.prototype,"icon",2);q([d({type:String,reflect:!0})],L.prototype,"label",2);q([d({type:String,reflect:!0})],L.prototype,"pref",2);q([d({type:Number,reflect:!0})],L.prototype,"min",2);q([d({type:Number,reflect:!0})],L.prototype,"value",1);q([d({type:Number,reflect:!0})],L.prototype,"step",2);q([d({type:Number,reflect:!0})],L.prototype,"sensitivity",2);q([d({type:Number,reflect:!0})],L.prototype,"max",2);q([d({type:String,reflect:!0})],L.prototype,"suffix",2);q([d({type:Boolean,reflect:!0})],L.prototype,"vertical",2);q([d({type:Boolean,reflect:!0})],L.prototype,"slider",2);var mo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,ie=(i,t,e,s)=>{for(var n=s>1?void 0:s?bo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&mo(t,e,n),n};const di=class di extends k{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return pe(this,this.valueTransform)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}animatePanles(){const t=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(t,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanles()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,f`
      <div class="parent">
        ${this.label||this.name||this.icon?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};di.styles=[vt.scrollbar,S`
      :host {
        display: flex;
        border-radius: var(--bim-ui_size-base);
        background-color: var(--bim-ui_bg-base);
        overflow: auto;
      }

      :host([hidden]) {
        max-height: 0;
        max-width: 0;
        opacity: 0;
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
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        flex: 1;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let nt=di;ie([d({type:String,reflect:!0})],nt.prototype,"icon",2);ie([d({type:String,reflect:!0})],nt.prototype,"name",2);ie([d({type:String,reflect:!0})],nt.prototype,"label",2);ie([d({type:Boolean,reflect:!0})],nt.prototype,"hidden",1);ie([d({type:Boolean,attribute:"header-hidden",reflect:!0})],nt.prototype,"headerHidden",2);var go=Object.defineProperty,ne=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&go(t,e,n),n};const hi=class hi extends k{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const t=this.parentElement;let e;return t instanceof nt&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),pe(this,e)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}setFlexAfterTransition(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");t&&setTimeout(()=>{this.collapsed?t.style.removeProperty("flex"):t.style.setProperty("flex","1")},150)}animateHeader(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=t.clientHeight:(t.style.setProperty("transition","none"),t.style.setProperty("height","auto"),t.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=t.clientHeight,requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),t.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(t.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0")})):(t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{t.style.setProperty("height",`${this.componentHeight}px`),t.style.setProperty("padding","0.125rem 1rem 1rem")})),this.setFlexAfterTransition()}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(t){t.target.assignedElements({flatten:!0}).forEach((n,r)=>{const o=r*.05;n.style.setProperty("transition-delay",`${o}s`)})}handlePointerEnter(){const t=this.renderRoot.querySelector(".expand-icon");this.collapsed?t==null||t.style.setProperty("animation","collapseAnim 0.5s"):t==null||t.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const t=this.renderRoot.querySelector(".expand-icon");t==null||t.style.setProperty("animation","none")}render(){const t=this.label||this.icon||this.name||this.fixed,e=f`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=f`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:e}
      </div>
    `;return f`
      <div class="parent">
        ${t?s:null}
        <div class="components" style="flex: 1;">
          <div>
            <slot @slotchange=${this.handelSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};hi.styles=[vt.scrollbar,S`
      :host {
        display: block;
        pointer-events: auto;
      }

      :host .parent {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      :host(:not([fixed])) .header:hover {
        --bim-label--c: var(--bim-ui_accent-base);
        color: var(--bim-ui_accent-base);
        cursor: pointer;
      }

      :host(:not([fixed])) .header:hover .expand-icon {
        fill: var(--bim-ui_accent-base);
      }

      .header {
        --bim-label--fz: var(--bim-ui_size-sm);
        --bim-label--c: var(
          --bim-panel-section_hc,
          var(--bim-ui_bg-contrast-80)
        );
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        height: 1.5rem;
        padding: 0.75rem 1rem;
      }

      .expand-icon {
        fill: var(--bim-ui_bg-contrast-80);
        transition: transform 0.2s;
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

      .components {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        row-gap: 0.75rem;
        padding: 0 1rem 1rem;
        box-sizing: border-box;
        transition:
          height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      .components > div {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        flex: 1;
        overflow: auto;
      }

      :host(:not([icon]):not([label])) .components {
        padding: 1rem;
      }

      :host(:not([fixed])[collapsed]) .components {
        padding: 0 1rem 0;
        height: 0px;
      }

      bim-label {
        pointer-events: none;
      }

      ::slotted(*) {
        transition:
          transform 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          opacity 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
      }

      :host(:not([fixed])[collapsed]) ::slotted(*) {
        transform: translateX(-20%);
        opacity: 0;
      }

      @keyframes expandAnim {
        0%,
        100% {
          transform: translateY(0%);
        }
        25% {
          transform: translateY(-30%);
        }
        50% {
          transform: translateY(10%);
        }
        75% {
          transform: translateY(-30%);
        }
      }

      @keyframes collapseAnim {
        0%,
        100% {
          transform: translateY(0%) rotateZ(-180deg);
        }
        25% {
          transform: translateY(30%) rotateZ(-180deg);
        }
        50% {
          transform: translateY(-10%) rotateZ(-180deg);
        }
        75% {
          transform: translateY(30%) rotateZ(-180deg);
        }
      }
    `];let pt=hi;ne([d({type:String,reflect:!0})],pt.prototype,"icon");ne([d({type:String,reflect:!0})],pt.prototype,"label");ne([d({type:String,reflect:!0})],pt.prototype,"name");ne([d({type:Boolean,reflect:!0})],pt.prototype,"fixed");ne([d({type:Boolean,reflect:!0})],pt.prototype,"collapsed");var vo=Object.defineProperty,se=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&vo(t,e,n),n};const fi=class fi extends k{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.setAnimatedBackgound(),this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof O&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this.setAnimatedBackgound(),this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof O&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof O?s.label===t||s.value===t:!1)}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){const e=this.renderRoot.querySelector(".animated-background"),s=this._value;requestAnimationFrame(()=>{var o,a,l,c;const n=(c=(l=(a=(o=s==null?void 0:s.parentElement)==null?void 0:o.shadowRoot)==null?void 0:a.querySelector("bim-input"))==null?void 0:l.shadowRoot)==null?void 0:c.querySelector(".input"),r={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((n==null?void 0:n.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((n==null?void 0:n.offsetLeft)??0)};e==null||e.style.setProperty("width",`${r.width}px`),e==null||e.style.setProperty("height",`${r.height}px`),e==null||e.style.setProperty("top",`${r.top}px`),e==null||e.style.setProperty("left",`${r.left}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const r="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${r}, height ${.3}s ${r}, top ${.3}s ${r}, left ${.3}s ${r}`)})}firstUpdated(){const t=[...this.children].find(e=>e instanceof O&&e.checked);t&&(this._value=t),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return f`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};fi.styles=S`
    :host {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
      --bim-input--g: 0;
      --bim-option--jc: center;
      flex: 1;
      display: block;
    }

    ::slotted(bim-option) {
      position: relative;
      border-radius: 0;
      overflow: hidden;
      min-width: min-content;
      min-height: min-content;
      transition: background-color 0.2s;
    }

    .animated-background {
      position: absolute;
      background: var(--bim-ui_main-base);
      width: 0;
      height: 0;
      top: 0;
      left: 0;
    }

    ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_main-contrast);
    }

    ::slotted(bim-option:not([checked]):hover) {
      background-color: #0003;
    }
  `;let mt=fi;se([d({type:String,reflect:!0})],mt.prototype,"name");se([d({type:String,reflect:!0})],mt.prototype,"icon");se([d({type:String,reflect:!0})],mt.prototype,"label");se([d({type:Boolean,reflect:!0})],mt.prototype,"vertical");se([$t()],mt.prototype,"_value");const yo=()=>f`
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
  `,xo=()=>f`
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
  `;var wo=Object.defineProperty,_o=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&wo(t,e,n),n};const pi=class pi extends k{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.table=null,this.group=null,this.row=null,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}get dataTransform(){var n,r,o,a;const t=(r=(n=this.row)==null?void 0:n.dataTransform)==null?void 0:r[this.column],e=(o=this.table)==null?void 0:o.dataTransform[this.column],s=(a=this.table)==null?void 0:a.defaultContentTemplate;return t||e||s}get templateValue(){const{data:t,rowData:e,group:s}=this,n=this.dataTransform;if(n&&t!=null&&s){const r=n(t,e,s);return typeof r=="string"||typeof r=="boolean"||typeof r=="number"?f`<bim-label>${r}</bim-label>`:r}return t!=null?f`<bim-label>${t}</bim-label>`:Tt}connectedCallback(){super.connectedCallback(),this.style.gridArea=this.column.toString()}render(){return f`${this.templateValue}`}};pi.styles=S`
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
  `;let me=pi;_o([d({type:String,reflect:!0})],me.prototype,"column");const mi=class mi extends k{constructor(){super(...arguments),this._groups=[],this.group=this.closest("bim-table-group"),this._data=[],this.table=this.closest("bim-table")}get data(){var t;return((t=this.group)==null?void 0:t.data.children)??this._data}set data(t){this._data=t}clean(){for(const t of this._groups)t.remove();this._groups=[]}render(){return this.clean(),f`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};mi.styles=S`
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
  `;let Ye=mi;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Un="important",Co=" !"+Un,tn=Jn(class extends Zn{constructor(i){var t;if(super(i),i.type!==ts.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const n=t[s];if(n!=null){this.ft.add(s);const r=typeof n=="string"&&n.endsWith(Co);s.includes("-")||r?e.setProperty(s,r?n.slice(0,-11):n,r?Un:""):e[s]=n}}return es}});var $o=Object.defineProperty,So=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&$o(t,e,n),n};const bi=class bi extends k{constructor(){super(...arguments),this.childrenHidden=!0,this.table=null,this.data={data:{}}}get rowElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-row"):null}get childrenElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-children"):null}get _isChildrenEmpty(){return!(this.data.children&&this.data.children.length!==0)}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}disconnectedCallback(){super.disconnectedCallback(),this.data={data:{}}}toggleChildren(t){this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,this.animateTableChildren(!0)}animateTableChildren(t=!0){if(!t){requestAnimationFrame(()=>{var c;const o=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(c=this.renderRoot.querySelector("bim-table-children"))==null?void 0:c.querySelector(".branch-vertical");o.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const e=500,s=0,n=200,r=350;requestAnimationFrame(()=>{var v;const o=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(v=this.renderRoot.querySelector("bim-table-children"))==null?void 0:v.querySelector(".branch-vertical"),u=()=>{var w;const m=(w=o==null?void 0:o.renderRoot)==null?void 0:w.querySelectorAll("bim-table-group");m==null||m.forEach((y,_)=>{y.style.setProperty("opacity","0"),y.style.setProperty("left","-30px");const $=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];y.animate($,{duration:e/2,delay:50+_*s,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},h=()=>{const m=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(m,{duration:r,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},p=()=>{const m=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(m,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:s,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},b=()=>{var w;const m=(w=this.renderRoot.querySelector("bim-table-row"))==null?void 0:w.querySelector(".branch-horizontal");if(m){m.style.setProperty("transform-origin","center right");const y=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];m.animate(y,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},g=()=>{const m=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];c==null||c.animate(m,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(s+n)*.7})};u(),h(),p(),b(),g()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(e=>{var s,n,r;if(!this.childrenHidden){e.style.setProperty("transform","translateY(-50%) rotate(90deg)");const a=(s=e.parentElement)==null?void 0:s.querySelector(".branch-horizontal");a&&a.style.setProperty("transform","scaleX(0)");const l=(r=(n=e.parentElement)==null?void 0:n.parentElement)==null?void 0:r.querySelectorAll(".branch-vertical");l==null||l.forEach(c=>{c.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)return f`${Tt}`;const t=this.table.getGroupIndentation(this.data)??0;let e;if(!this.table.noIndentation){const a={left:`${t-1+(this.table.selectableRows?2.05:.5625)}rem`};e=f`<div style=${tn(a)} class="branch branch-horizontal"></div>`}const s=f`
      ${this.table.noIndentation?null:f`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `;let n;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");if(a.setAttribute("height","9.9"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.7"),this.table.noCarets){const u=document.createElementNS("http://www.w3.org/2000/svg","circle");u.setAttribute("cx","2.3333336"),u.setAttribute("cy","3.85"),u.setAttribute("r","2.5"),a.append(u)}else{const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(u)}const l={left:`${(this.table.selectableRows?1.5:.125)+t}rem`,cursor:`${this.table.noCarets?"unset":"pointer"}`};n=f`<div @click=${u=>{var h;(h=this.table)!=null&&h.noCarets||(u.stopPropagation(),this.toggleChildren())}} style=${tn(l)} class="caret">${a}</div>`}let r;return!this._isChildrenEmpty&&!this.childrenHidden&&(r=f`
        <bim-table-children ${G(l=>{if(!l)return;const c=l;c.table=this.table,c.group=this})}>${s}</bim-table-children>
      `),f`
      <div class="parent">
        <bim-table-row ${G(a=>{var c;if(!a)return;const l=a;l.table=this.table,l.group=this,(c=this.table)==null||c.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:l}}))})}>
          ${Ot(!this._isChildrenEmpty,()=>s)}
          ${Ot(t!==0,()=>e)}
          ${Ot(!this.table.noIndentation&&!this._isChildrenEmpty,()=>n)}
        </bim-table-row>
        ${r}
      </div>
    `}};bi.styles=S`
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
  `;let be=bi;So([d({type:Boolean,attribute:"children-hidden",reflect:!0})],be.prototype,"childrenHidden");var ko=Object.defineProperty,Dt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&ko(t,e,n),n};const gi=class gi extends k{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.group=null,this._data={},this.isHeader=!1,this.table=null,this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._intersecting=!1,this._timeOutDelay=250,this._observer=new IntersectionObserver(t=>{window.clearTimeout(this._intersectTimeout),this._intersectTimeout=void 0,t[0].isIntersecting?this._intersectTimeout=window.setTimeout(()=>{this._intersecting=!0},this._timeOutDelay):this._intersecting=!1},{rootMargin:"36px"}),this.dataTransform=null,this._interval=null,this.clearDataTransform=()=>{this.dataTransform=null,this._interval!==null&&(clearInterval(this._interval),this._interval=null)},this._cache={}}get groupData(){var t;return(t=this.group)==null?void 0:t.data}get data(){var t;return((t=this.group)==null?void 0:t.data.data)??this._data}set data(t){this._data=t}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}firstUpdated(t){super.firstUpdated(t),this._observer.observe(this)}connectedCallback(){super.connectedCallback(),this.toggleAttribute("selected",this._isSelected),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`)}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.columns=[],this.hiddenColumns=[],this.toggleAttribute("selected",!1),this.data={},this.table&&(this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.table=null),this.clean()}applyAdaptativeDataTransform(t){this.addEventListener("pointerenter",()=>{this.dataTransform=t,this._interval=window.setInterval(()=>{this.matches(":hover")||this.clearDataTransform()},50)})}clean(){clearTimeout(this._intersectTimeout),this._intersectTimeout=void 0,this._timeOutDelay=250;for(const[,t]of Object.entries(this._cache))t.remove();this._cache={}}render(){if(!(this.table&&this._intersecting))return f`${Tt}`;const t=this.table.getRowIndentation(this.data)??0,e=[];for(const s in this.data){if(this.hiddenColumns.includes(s))continue;const n=document.createElement("bim-table-cell");n.group=this.group,n.table=this.table,n.row=this,n.column=s,this._columnNames.indexOf(s)===0&&(n.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const r=this._columnNames.indexOf(s);n.setAttribute("data-column-index",String(r)),n.toggleAttribute("data-no-indentation",r===0&&this.table.noIndentation),n.toggleAttribute("data-cell-header",this.isHeader),n.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:n}})),e.push(n)}return this._timeOutDelay=0,f`
      ${!this.isHeader&&this.table.selectableRows?f`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected??!1}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${e}
      <slot></slot>
    `}};gi.styles=S`
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
        var(--bim-ui_accent-base) 10%
      );
    }
  `;let st=gi;Dt([d({type:Boolean,reflect:!0})],st.prototype,"selected");Dt([d({attribute:!1})],st.prototype,"columns");Dt([d({attribute:!1})],st.prototype,"hiddenColumns");Dt([d({type:Boolean,attribute:"is-header",reflect:!0})],st.prototype,"isHeader");Dt([$t()],st.prototype,"_intersecting");Dt([$t()],st.prototype,"dataTransform");var Eo=Object.defineProperty,Ao=Object.getOwnPropertyDescriptor,H=(i,t,e,s)=>{for(var n=s>1?void 0:s?Ao(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Eo(t,e,n),n};const vi=class vi extends k{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.noCarets=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this.defaultContentTemplate=t=>f`<bim-label style="white-space: normal;">${t}</bim-label>`,this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=Ne(t)??[];for(const r of n){if("queries"in r){s=!1;break}const{condition:o,value:a}=r;let{key:l}=r;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(p=>p.includes(c)).map(p=>Zi(e.data[p],o,a)).some(p=>p)}else s=Zi(e.data[l],o,a);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns){const{name:s}=e;t[s]=String(s)}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Ne(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:r}=s;for(const o in r)this._columns.map(l=>typeof l=="string"?l:l.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const r=this._textDelimiters[t];let o="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(o+=`Indentation${r}`);const l=`${a.join(r)}
`;o+=l}for(const[l,c]of e.entries()){const{data:u,children:h}=c,p=this.indentationInText?`${s}${l+1}${r}`:"",b=a.map(v=>u[v]??""),g=`${p}${b.join(r)}
`;o+=g,h&&(o+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};if(!t)return e;const{data:s}=t.data;for(const r of Object.keys(this.dataTransform)){const o=this.columns.find(a=>a.name===r);o&&o.forceDataTransform&&(r in s||(s[r]=""))}const n=s;for(const r in n){const o=this.dataTransform[r];o?e[r]=o(n[r],s,t):e[r]=s[r]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const r=this.getRowIndentation(t,n.children,s+1);if(r!==null)return r}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const r=this.getGroupIndentation(t,n.children,s+1);if(r!==null)return r}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._filteredData.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-table-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const r of s)if(e(t,r)){if(this.preserveStructureOnFilter){const a={data:r.data};if(r.children){const l=this.filter(t,e,r.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:r.data}),r.children){const a=this.filter(t,e,r.children);n.push(...a)}}else if(r.children){const a=this.filter(t,e,r.children);this.preserveStructureOnFilter&&a.length?n.push({data:r.data,children:a}):n.push(...a)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return yo();if(this._errorLoading)return f`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return f`<slot name="missing-data"></slot>`;const t=s=>{if(!s)return;const n=s;n.table=this,n.data=this._headerRowData},e=s=>{if(!s)return;const n=s;n.table=this,n.data=this.value,n.requestUpdate()};return f`
      <div class="parent">
        ${xo()}
        ${Ot(!this.headersHidden,()=>f`<bim-table-row is-header style="grid-area: Header; position: sticky; top: 0; z-index: 5" ${G(t)}></bim-table-row>`)} 
        <div style="overflow-x: hidden; grid-area: Body">
          <bim-table-children ${G(e)} style="grid-area: Body; background-color: transparent"></bim-table-children>
        </div>
      </div>
    `}};vi.styles=[vt.scrollbar,S`
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
    `];let z=vi;H([$t()],z.prototype,"_filteredData",2);H([d({type:Boolean,attribute:"headers-hidden",reflect:!0})],z.prototype,"headersHidden",2);H([d({type:String,attribute:"min-col-width",reflect:!0})],z.prototype,"minColWidth",2);H([d({type:Array,attribute:!1})],z.prototype,"columns",1);H([d({type:Array,attribute:!1})],z.prototype,"data",1);H([d({type:Boolean,reflect:!0})],z.prototype,"expanded",2);H([d({type:Boolean,reflect:!0,attribute:"selectable-rows"})],z.prototype,"selectableRows",2);H([d({attribute:!1})],z.prototype,"selection",2);H([d({type:Boolean,attribute:"no-indentation",reflect:!0})],z.prototype,"noIndentation",2);H([d({type:Boolean,attribute:"no-carets",reflect:!0})],z.prototype,"noCarets",2);H([d({type:Boolean,reflect:!0})],z.prototype,"loading",2);H([$t()],z.prototype,"_errorLoading",2);var Oo=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Ft=(i,t,e,s)=>{for(var n=s>1?void 0:s?Po(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Oo(t,e,n),n};const yi=class yi extends k{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof I&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof I&&n.name===t);for(const n of e){if(!(n instanceof I))continue;n.hidden=s!==n;const r=this.getTabSwitcher(n.name);r&&r.toggleAttribute("data-active",!n.hidden)}s||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof I))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name,this.setAnimatedBackgound()}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??null,s.icon=t.icon,e.append(s),this._switchers.push(e)}}updateSwitchers(){for(const t of this.children){if(!(t instanceof I))continue;const e=this._switchers.find(n=>n.getAttribute("data-name")===t.name);if(!e)continue;const s=e.querySelector("bim-label");s&&(s.textContent=t.label??null,s.icon=t.icon)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof I?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof I&&(this.tab=s.name);for(const n of e){if(!(n instanceof I)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){var n;const e=this.renderRoot.querySelector(".animated-background"),s=[...((n=this.renderRoot.querySelector(".switchers"))==null?void 0:n.querySelectorAll(".switcher"))||[]].filter(r=>r.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var a,l,c,u;const r=(u=(c=(l=(a=s==null?void 0:s.parentElement)==null?void 0:a.shadowRoot)==null?void 0:l.querySelector("bim-input"))==null?void 0:c.shadowRoot)==null?void 0:u.querySelector(".input"),o={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((r==null?void 0:r.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((r==null?void 0:r.offsetLeft)??0)};s?(e==null||e.style.setProperty("width",`${o.width}px`),e==null||e.style.setProperty("height",`${o.height}px`),e==null||e.style.setProperty("left",`${o.left}px`)):e==null||e.style.setProperty("width","0"),this.bottom?(e==null||e.style.setProperty("top","100%"),e==null||e.style.setProperty("transform","translateY(-100%)")):e==null||e.style.setProperty("top",`${o.top}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const o="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return f`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};yi.styles=[vt.scrollbar,S`
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
        overflow: hidden;
        position: relative;
        grid-template: "switchers" auto "content" 1fr;
        height: 100%;
      }

      :host([bottom]) .parent {
        grid-template: "content" 1fr "switchers" auto;
      }

      .switchers {
        position: relative;
        display: flex;
        height: 2.25rem;
        font-weight: 600;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        background-color: transparent;
        position: relative;
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        z-index: 2;
        transition: all 0.15s;
      }

      .switcher:not([data-active]):hover {
        filter: brightness(150%);
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
      }

      .switchers bim-label {
        pointer-events: none;
      }

      :host([switchers-hidden]) .switchers {
        display: none;
      }

      .content {
        position: relative;
        display: grid;
        grid-template-columns: 1fr;
        grid-area: content;
        max-height: 100vh;
        overflow: auto;
        transition: max-height 0.2s;
      }

      :host([tab="hidden"]) .content {
        max-height: 0;
      }

      .animated-background {
        position: absolute;
        background: var(--bim-ui_main-base);
        width: 0;
        height: 0;
        top: 0;
        left: 0;
      }

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: hidden;
        background-color: var(--bim-ui_bg-base);
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

      :host([floating][tab="hidden"]) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating][bottom][tab="hidden"]) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-20);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let W=yi;Ft([$t()],W.prototype,"_switchers",2);Ft([d({type:Boolean,reflect:!0})],W.prototype,"bottom",2);Ft([d({type:Boolean,attribute:"switchers-hidden",reflect:!0})],W.prototype,"switchersHidden",2);Ft([d({type:Boolean,reflect:!0})],W.prototype,"floating",2);Ft([d({type:String,reflect:!0})],W.prototype,"tab",1);Ft([d({type:Boolean,attribute:"switchers-full",reflect:!0})],W.prototype,"switchersFull",2);var To=Object.defineProperty,Io=Object.getOwnPropertyDescriptor,Ee=(i,t,e,s)=>{for(var n=s>1?void 0:s?Io(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&To(t,e,n),n};const xi=class xi extends k{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(t){this._label=t;const e=this.parentElement;e instanceof W&&e.updateSwitchers()}get label(){return this._label}set icon(t){this._icon=t;const e=this.parentElement;e instanceof W&&e.updateSwitchers()}get icon(){return this._icon}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return f` <slot></slot> `}};xi.styles=S`
    :host {
      display: block;
      height: 100%;
      grid-row-start: 1;
      grid-column-start: 1;
      animation: openAnim 3s forwards;
      transform: translateY(0);
      max-height: 100vh;
      transition:
        opacity 0.3s ease,
        max-height 0.6s ease,
        transform 0.3s ease;
    }

    :host([hidden]) {
      transform: translateY(-20px);
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
    }
  `;let I=xi;Ee([d({type:String,reflect:!0})],I.prototype,"name",2);Ee([d({type:String,reflect:!0})],I.prototype,"label",1);Ee([d({type:String,reflect:!0})],I.prototype,"icon",1);Ee([d({type:Boolean,reflect:!0})],I.prototype,"hidden",1);var Lo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,U=(i,t,e,s)=>{for(var n=s>1?void 0:s?zo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Lo(t,e,n),n};const wi=class wi extends k{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this.disabled=!1,this.resize="vertical",this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return Ne(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return f`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?f` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              ?disabled=${this.disabled}
              placeholder=${We(this.placeholder)}
              @input=${this.onInputChange}
              style="resize: ${this.resize};"
            ></textarea>`:f` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              ?disabled=${this.disabled}
              placeholder=${We(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};wi.styles=[vt.scrollbar,S`
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

      :host([disabled]) input,
      :host([disabled]) textarea {
        color: var(--bim-ui_bg-contrast-60);
      }

      textarea {
        line-height: 1.1rem;
        outline: none;
      }

      :host(:focus) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      /* :host([disabled]) {
      --bim-input--bgc: var(--bim-ui_bg-contrast-20);
    } */
    `];let R=wi;U([d({type:String,reflect:!0})],R.prototype,"icon",2);U([d({type:String,reflect:!0})],R.prototype,"label",2);U([d({type:String,reflect:!0})],R.prototype,"name",2);U([d({type:String,reflect:!0})],R.prototype,"placeholder",2);U([d({type:String,reflect:!0})],R.prototype,"value",2);U([d({type:Boolean,reflect:!0})],R.prototype,"vertical",2);U([d({type:Number,reflect:!0})],R.prototype,"debounce",2);U([d({type:Number,reflect:!0})],R.prototype,"rows",2);U([d({type:Boolean,reflect:!0})],R.prototype,"disabled",2);U([d({type:String,reflect:!0})],R.prototype,"resize",2);U([d({type:String,reflect:!0})],R.prototype,"type",1);var Ro=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,Qn=(i,t,e,s)=>{for(var n=s>1?void 0:s?Bo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Ro(t,e,n),n};const _i=class _i extends k{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return f`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};_i.styles=S`
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
  `;let Bt=_i;Qn([d({type:Number,reflect:!0})],Bt.prototype,"rows",2);Qn([d({type:Boolean,reflect:!0})],Bt.prototype,"vertical",1);var jo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,Ae=(i,t,e,s)=>{for(var n=s>1?void 0:s?Do(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&jo(t,e,n),n};const Ci=class Ci extends k{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof Bt&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return f`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?f`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Ci.styles=S`
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
  `;let bt=Ci;Ae([d({type:String,reflect:!0})],bt.prototype,"label",2);Ae([d({type:String,reflect:!0})],bt.prototype,"icon",2);Ae([d({type:Boolean,reflect:!0})],bt.prototype,"vertical",1);Ae([d({type:Boolean,attribute:"label-hidden",reflect:!0})],bt.prototype,"labelHidden",1);var Fo=Object.defineProperty,Mo=Object.getOwnPropertyDescriptor,ii=(i,t,e,s)=>{for(var n=s>1?void 0:s?Mo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Fo(t,e,n),n};const $i=class $i extends k{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof bt&&(e.labelHidden=this.vertical&&!Qt.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return f`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};$i.styles=S`
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
      width: max-content;
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
  `;let jt=$i;ii([d({type:String,reflect:!0})],jt.prototype,"icon",2);ii([d({type:Boolean,attribute:"labels-hidden",reflect:!0})],jt.prototype,"labelsHidden",2);ii([d({type:Boolean,reflect:!0})],jt.prototype,"vertical",1);var qo=Object.defineProperty,Ho=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&qo(t,e,n),n};const Si=class Si extends k{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return f`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Si.styles=S`
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
  `;let ge=Si;Ho([d({type:String,reflect:!0})],ge.prototype,"name");export{io as B,Rt as C,Qt as M,R as T,ht as a};
