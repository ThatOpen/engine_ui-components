var Vn=Object.defineProperty;var Wn=(i,t,e)=>t in i?Vn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var rt=(i,t,e)=>(Wn(i,typeof t!="symbol"?t+"":t,e),e);import{i as S,r as E,n as u,e as kt,b as At,a as It}from"./ref-DXXV_dKT.js";import{B as Mt,x as p,E as Yn}from"./lit-html-Cs86_c16.js";const Ot=Math.min,J=Math.max,oe=Math.round,ot=i=>({x:i,y:i}),Qn={left:"right",right:"left",bottom:"top",top:"bottom"},Un={start:"end",end:"start"};function Si(i,t,e){return J(i,Ot(t,e))}function Qt(i,t){return typeof i=="function"?i(t):i}function Z(i){return i.split("-")[0]}function ge(i){return i.split("-")[1]}function Ki(i){return i==="x"?"y":"x"}function Ji(i){return i==="y"?"height":"width"}function xt(i){return["top","bottom"].includes(Z(i))?"y":"x"}function Zi(i){return Ki(xt(i))}function Gn(i,t,e){e===void 0&&(e=!1);const s=ge(i),n=Zi(i),r=Ji(n);let o=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=ae(o)),[o,ae(o)]}function Xn(i){const t=ae(i);return[Te(i),t,Te(t)]}function Te(i){return i.replace(/start|end/g,t=>Un[t])}function Kn(i,t,e){const s=["left","right"],n=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?r:o;default:return[]}}function Jn(i,t,e,s){const n=ge(i);let r=Kn(Z(i),e==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(Te)))),r}function ae(i){return i.replace(/left|right|bottom|top/g,t=>Qn[t])}function Zn(i){return{top:0,right:0,bottom:0,left:0,...i}}function tn(i){return typeof i!="number"?Zn(i):{top:i,right:i,bottom:i,left:i}}function Pt(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function Ei(i,t,e){let{reference:s,floating:n}=i;const r=xt(t),o=Zi(t),a=Ji(o),l=Z(t),c=r==="y",d=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,f=s[a]/2-n[a]/2;let m;switch(l){case"top":m={x:d,y:s.y-n.height};break;case"bottom":m={x:d,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:h};break;case"left":m={x:s.x-n.width,y:h};break;default:m={x:s.x,y:s.y}}switch(ge(t)){case"start":m[o]-=f*(e&&c?-1:1);break;case"end":m[o]+=f*(e&&c?-1:1);break}return m}const ts=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=e,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:d,y:h}=Ei(c,s,l),f=s,m={},g=0;for(let v=0;v<a.length;v++){const{name:b,fn:_}=a[v],{x:C,y:x,data:$,reset:A}=await _({x:d,y:h,initialPlacement:s,placement:f,strategy:n,middlewareData:m,rects:c,platform:o,elements:{reference:i,floating:t}});d=C??d,h=x??h,m={...m,[b]:{...m[b],...$}},A&&g<=50&&(g++,typeof A=="object"&&(A.placement&&(f=A.placement),A.rects&&(c=A.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):A.rects),{x:d,y:h}=Ei(c,f,l)),v=-1)}return{x:d,y:h,placement:f,strategy:n,middlewareData:m}};async function en(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=Qt(t,i),g=tn(m),b=a[f?h==="floating"?"reference":"floating":h],_=Pt(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(b)))==null||e?b:b.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:d,strategy:l})),C=h==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,x=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),$=await(r.isElement==null?void 0:r.isElement(x))?await(r.getScale==null?void 0:r.getScale(x))||{x:1,y:1}:{x:1,y:1},A=Pt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:x,strategy:l}):C);return{top:(_.top-A.top+g.top)/$.y,bottom:(A.bottom-_.bottom+g.bottom)/$.y,left:(_.left-A.left+g.left)/$.x,right:(A.right-_.right+g.right)/$.x}}const es=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...b}=Qt(i,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const _=Z(n),C=xt(a),x=Z(a)===a,$=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=f||(x||!v?[ae(a)]:Xn(a)),w=g!=="none";!f&&w&&A.push(...Jn(a,v,g,$));const T=[a,...A],q=await en(t,b),N=[];let k=((s=r.flip)==null?void 0:s.overflows)||[];if(d&&N.push(q[_]),h){const Q=Gn(n,o,$);N.push(q[Q[0]],q[Q[1]])}if(k=[...k,{placement:n,overflows:N}],!N.every(Q=>Q<=0)){var Ct,Bt;const Q=(((Ct=r.flip)==null?void 0:Ct.index)||0)+1,St=T[Q];if(St)return{data:{index:Q,overflows:k},reset:{placement:St}};let it=(Bt=k.filter(nt=>nt.overflows[0]<=0).sort((nt,U)=>nt.overflows[1]-U.overflows[1])[0])==null?void 0:Bt.placement;if(!it)switch(m){case"bestFit":{var $t;const nt=($t=k.filter(U=>{if(w){const st=xt(U.placement);return st===C||st==="y"}return!0}).map(U=>[U.placement,U.overflows.filter(st=>st>0).reduce((st,Nn)=>st+Nn,0)]).sort((U,st)=>U[1]-st[1])[0])==null?void 0:$t[0];nt&&(it=nt);break}case"initialPlacement":it=a;break}if(n!==it)return{reset:{placement:it}}}return{}}}};function nn(i){const t=Ot(...i.map(r=>r.left)),e=Ot(...i.map(r=>r.top)),s=J(...i.map(r=>r.right)),n=J(...i.map(r=>r.bottom));return{x:t,y:e,width:s-t,height:n-e}}function is(i){const t=i.slice().sort((n,r)=>n.y-r.y),e=[];let s=null;for(let n=0;n<t.length;n++){const r=t[n];!s||r.y-s.y>s.height/2?e.push([r]):e[e.length-1].push(r),s=r}return e.map(n=>Pt(nn(n)))}const ns=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:r,strategy:o}=t,{padding:a=2,x:l,y:c}=Qt(i,t),d=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(s.reference))||[]),h=is(d),f=Pt(nn(d)),m=tn(a);function g(){if(h.length===2&&h[0].left>h[1].right&&l!=null&&c!=null)return h.find(b=>l>b.left-m.left&&l<b.right+m.right&&c>b.top-m.top&&c<b.bottom+m.bottom)||f;if(h.length>=2){if(xt(e)==="y"){const k=h[0],Ct=h[h.length-1],Bt=Z(e)==="top",$t=k.top,Q=Ct.bottom,St=Bt?k.left:Ct.left,it=Bt?k.right:Ct.right,nt=it-St,U=Q-$t;return{top:$t,bottom:Q,left:St,right:it,width:nt,height:U,x:St,y:$t}}const b=Z(e)==="left",_=J(...h.map(k=>k.right)),C=Ot(...h.map(k=>k.left)),x=h.filter(k=>b?k.left===C:k.right===_),$=x[0].top,A=x[x.length-1].bottom,w=C,T=_,q=T-w,N=A-$;return{top:$,bottom:A,left:w,right:T,width:q,height:N,x:w,y:$}}return f}const v=await r.getElementRects({reference:{getBoundingClientRect:g},floating:s.floating,strategy:o});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function ss(i,t){const{placement:e,platform:s,elements:n}=i,r=await(s.isRTL==null?void 0:s.isRTL(n.floating)),o=Z(e),a=ge(e),l=xt(e)==="y",c=["left","top"].includes(o)?-1:1,d=r&&l?-1:1,h=Qt(t,i);let{mainAxis:f,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*d,y:f*c}:{x:f*c,y:m*d}}const sn=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:r,placement:o,middlewareData:a}=t,l=await ss(t,i);return o===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:r+l.y,data:{...l,placement:o}}}}},rs=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:b=>{let{x:_,y:C}=b;return{x:_,y:C}}},...l}=Qt(i,t),c={x:e,y:s},d=await en(t,l),h=xt(Z(n)),f=Ki(h);let m=c[f],g=c[h];if(r){const b=f==="y"?"top":"left",_=f==="y"?"bottom":"right",C=m+d[b],x=m-d[_];m=Si(C,m,x)}if(o){const b=h==="y"?"top":"left",_=h==="y"?"bottom":"right",C=g+d[b],x=g-d[_];g=Si(C,g,x)}const v=a.fn({...t,[f]:m,[h]:g});return{...v,data:{x:v.x-e,y:v.y-s,enabled:{[f]:r,[h]:o}}}}}};function ve(){return typeof window<"u"}function at(i){return rn(i)?(i.nodeName||"").toLowerCase():"#document"}function B(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function mt(i){var t;return(t=(rn(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function rn(i){return ve()?i instanceof Node||i instanceof B(i).Node:!1}function G(i){return ve()?i instanceof Element||i instanceof B(i).Element:!1}function X(i){return ve()?i instanceof HTMLElement||i instanceof B(i).HTMLElement:!1}function ki(i){return!ve()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof B(i).ShadowRoot}function Ut(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=j(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function os(i){return["table","td","th"].includes(at(i))}function as(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function Ye(i){const t=Qe(),e=G(i)?j(i):i;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function ls(i){let t=Tt(i);for(;X(t)&&!ye(t);){if(Ye(t))return t;if(as(t))return null;t=Tt(t)}return null}function Qe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ye(i){return["html","body","#document"].includes(at(i))}function j(i){return B(i).getComputedStyle(i)}function xe(i){return G(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function Tt(i){if(at(i)==="html")return i;const t=i.assignedSlot||i.parentNode||ki(i)&&i.host||mt(i);return ki(t)?t.host:t}function on(i){const t=Tt(i);return ye(t)?i.ownerDocument?i.ownerDocument.body:i.body:X(t)&&Ut(t)?t:on(t)}function Le(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=on(i),r=n===((s=i.ownerDocument)==null?void 0:s.body),o=B(n);if(r){const a=cs(o);return t.concat(o,o.visualViewport||[],Ut(n)?n:[],a&&e?Le(a):[])}return t.concat(n,Le(n,[],e))}function cs(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function an(i){const t=j(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=X(i),r=n?i.offsetWidth:e,o=n?i.offsetHeight:s,a=oe(e)!==r||oe(s)!==o;return a&&(e=r,s=o),{width:e,height:s,$:a}}function ln(i){return G(i)?i:i.contextElement}function Et(i){const t=ln(i);if(!X(t))return ot(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:r}=an(t);let o=(r?oe(e.width):e.width)/s,a=(r?oe(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const us=ot(0);function cn(i){const t=B(i);return!Qe()||!t.visualViewport?us:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ds(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==B(i)?!1:t}function Ht(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),r=ln(i);let o=ot(1);t&&(s?G(s)&&(o=Et(s)):o=Et(i));const a=ds(r,e,s)?cn(r):ot(0);let l=(n.left+a.x)/o.x,c=(n.top+a.y)/o.y,d=n.width/o.x,h=n.height/o.y;if(r){const f=B(r),m=s&&G(s)?B(s):s;let g=f,v=g.frameElement;for(;v&&s&&m!==g;){const b=Et(v),_=v.getBoundingClientRect(),C=j(v),x=_.left+(v.clientLeft+parseFloat(C.paddingLeft))*b.x,$=_.top+(v.clientTop+parseFloat(C.paddingTop))*b.y;l*=b.x,c*=b.y,d*=b.x,h*=b.y,l+=x,c+=$,g=B(v),v=g.frameElement}}return Pt({width:d,height:h,x:l,y:c})}const hs=[":popover-open",":modal"];function un(i){return hs.some(t=>{try{return i.matches(t)}catch{return!1}})}function fs(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const r=n==="fixed",o=mt(s),a=t?un(t.floating):!1;if(s===o||a&&r)return e;let l={scrollLeft:0,scrollTop:0},c=ot(1);const d=ot(0),h=X(s);if((h||!h&&!r)&&((at(s)!=="body"||Ut(o))&&(l=xe(s)),X(s))){const f=Ht(s);c=Et(s),d.x=f.x+s.clientLeft,d.y=f.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+d.x,y:e.y*c.y-l.scrollTop*c.y+d.y}}function ps(i){return Array.from(i.getClientRects())}function dn(i){return Ht(mt(i)).left+xe(i).scrollLeft}function ms(i){const t=mt(i),e=xe(i),s=i.ownerDocument.body,n=J(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=J(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-e.scrollLeft+dn(i);const a=-e.scrollTop;return j(s).direction==="rtl"&&(o+=J(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:a}}function bs(i,t){const e=B(i),s=mt(i),n=e.visualViewport;let r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(n){r=n.width,o=n.height;const c=Qe();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:r,height:o,x:a,y:l}}function gs(i,t){const e=Ht(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,r=X(i)?Et(i):ot(1),o=i.clientWidth*r.x,a=i.clientHeight*r.y,l=n*r.x,c=s*r.y;return{width:o,height:a,x:l,y:c}}function Ai(i,t,e){let s;if(t==="viewport")s=bs(i,e);else if(t==="document")s=ms(mt(i));else if(G(t))s=gs(t,e);else{const n=cn(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return Pt(s)}function hn(i,t){const e=Tt(i);return e===t||!G(e)||ye(e)?!1:j(e).position==="fixed"||hn(e,t)}function vs(i,t){const e=t.get(i);if(e)return e;let s=Le(i,[],!1).filter(a=>G(a)&&at(a)!=="body"),n=null;const r=j(i).position==="fixed";let o=r?Tt(i):i;for(;G(o)&&!ye(o);){const a=j(o),l=Ye(o);!l&&a.position==="fixed"&&(n=null),(r?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Ut(o)&&!l&&hn(i,o))?s=s.filter(d=>d!==o):n=a,o=Tt(o)}return t.set(i,s),s}function ys(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const o=[...e==="clippingAncestors"?vs(t,this._c):[].concat(e),s],a=o[0],l=o.reduce((c,d)=>{const h=Ai(t,d,n);return c.top=J(h.top,c.top),c.right=Ot(h.right,c.right),c.bottom=Ot(h.bottom,c.bottom),c.left=J(h.left,c.left),c},Ai(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xs(i){const{width:t,height:e}=an(i);return{width:t,height:e}}function ws(i,t,e){const s=X(t),n=mt(t),r=e==="fixed",o=Ht(i,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=ot(0);if(s||!s&&!r)if((at(t)!=="body"||Ut(n))&&(a=xe(t)),s){const h=Ht(t,!0,r,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else n&&(l.x=dn(n));const c=o.left+a.scrollLeft-l.x,d=o.top+a.scrollTop-l.y;return{x:c,y:d,width:o.width,height:o.height}}function Oi(i,t){return!X(i)||j(i).position==="fixed"?null:t?t(i):i.offsetParent}function fn(i,t){const e=B(i);if(!X(i)||un(i))return e;let s=Oi(i,t);for(;s&&os(s)&&j(s).position==="static";)s=Oi(s,t);return s&&(at(s)==="html"||at(s)==="body"&&j(s).position==="static"&&!Ye(s))?e:s||ls(i)||e}const _s=async function(i){const t=this.getOffsetParent||fn,e=this.getDimensions;return{reference:ws(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Cs(i){return j(i).direction==="rtl"}const $s={convertOffsetParentRelativeRectToViewportRelativeRect:fs,getDocumentElement:mt,getClippingRect:ys,getOffsetParent:fn,getElementRects:_s,getClientRects:ps,getDimensions:xs,getScale:Et,isElement:G,isRTL:Cs},pn=rs,mn=es,bn=ns,gn=(i,t,e)=>{const s=new Map,n={platform:$s,...e},r={...n.platform,_c:s};return ts(i,t,{...n,platform:r})};/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const vn=Object.freeze({left:0,top:0,width:16,height:16}),le=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Gt=Object.freeze({...vn,...le}),ze=Object.freeze({...Gt,body:"",hidden:!1}),Ss=Object.freeze({width:null,height:null}),yn=Object.freeze({...Ss,...le});function Es(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(i.slice(0,i.length-e.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}const ks=/[\s,]+/;function As(i,t){t.split(ks).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const xn={...yn,preserveAspectRatio:""};function Pi(i){const t={...xn},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Es(e("rotate","")),As(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Os(i,t){for(const e in xn)if(i[e]!==t[e])return!0;return!1}const Ft=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xt=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!se(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!se(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:r};return t&&!se(a,e)?null:a}return null},se=(i,t)=>i?!!((i.provider===""||i.provider.match(Ft))&&(t&&i.prefix===""||i.prefix.match(Ft))&&i.name.match(Ft)):!1;function Ps(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Ti(i,t){const e=Ps(i,t);for(const s in ze)s in le?s in i&&!(s in e)&&(e[s]=le[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function Ts(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function r(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const a=s[o]&&s[o].parent,l=a&&r(a);l&&(n[o]=[a].concat(l))}return n[o]}return Object.keys(e).concat(Object.keys(s)).forEach(r),n}function Ls(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let r={};function o(a){r=Ti(s[a]||n[a],r)}return o(t),e.forEach(o),Ti(i,r)}function wn(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=Ts(i);for(const n in s){const r=s[n];r&&(t(n,Ls(i,n,r)),e.push(n))}return e}const zs={provider:"",aliases:{},not_found:{},...vn};function ke(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function _n(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!ke(i,zs))return null;const e=t.icons;for(const n in e){const r=e[n];if(!n.match(Ft)||typeof r.body!="string"||!ke(r,ze))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],o=r.parent;if(!n.match(Ft)||typeof o!="string"||!e[o]&&!s[o]||!ke(r,ze))return null}return t}const ce=Object.create(null);function Is(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function lt(i,t){const e=ce[i]||(ce[i]=Object.create(null));return e[t]||(e[t]=Is(i,t))}function Ue(i,t){return _n(t)?wn(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Rs(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Bs(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(ce)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(ce[n]||{})).forEach(o=>{const a=lt(n,o);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+o+":"+l))})}),e}let qt=!1;function Cn(i){return typeof i=="boolean"&&(qt=i),qt}function Nt(i){const t=typeof i=="string"?Xt(i,!0,qt):i;if(t){const e=lt(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function $n(i,t){const e=Xt(i,!0,qt);if(!e)return!1;const s=lt(e.provider,e.prefix);return Rs(s,e.name,t)}function Li(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),qt&&!t&&!i.prefix){let n=!1;return _n(i)&&(i.prefix="",wn(i,(r,o)=>{o&&$n(r,o)&&(n=!0)})),n}const e=i.prefix;if(!se({provider:t,prefix:e,name:"a"}))return!1;const s=lt(t,e);return!!Ue(s,i)}function zi(i){return!!Nt(i)}function js(i){const t=Nt(i);return t?{...Gt,...t}:null}function Fs(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,o=n.prefix,a=n.name,l=e[r]||(e[r]=Object.create(null)),c=l[o]||(l[o]=lt(r,o));let d;a in c.icons?d=t.loaded:o===""||c.missing.has(a)?d=t.missing:d=t.pending;const h={provider:r,prefix:o,name:a};d.push(h)}),t}function Sn(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function Ds(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])o.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==a&&(e||Sn([i],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let Ms=0;function Hs(i,t,e){const s=Ms++,n=Sn.bind(null,e,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}const Ie=Object.create(null);function Ii(i,t){Ie[i]=t}function Re(i){return Ie[i]||Ie[""]}function qs(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const r=typeof n=="string"?Xt(n,t,e):n;r&&s.push(r)}),s}var Ns={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Vs(i,t,e,s){const n=i.resources.length,r=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let w=i.resources.slice(0);for(o=[];w.length>1;){const T=Math.floor(Math.random()*w.length);o.push(w[T]),w=w.slice(0,T).concat(w.slice(T+1))}o=o.concat(w)}else o=i.resources.slice(r).concat(i.resources.slice(0,r));const a=Date.now();let l="pending",c=0,d,h=null,f=[],m=[];typeof s=="function"&&m.push(s);function g(){h&&(clearTimeout(h),h=null)}function v(){l==="pending"&&(l="aborted"),g(),f.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),f=[]}function b(w,T){T&&(m=[]),typeof w=="function"&&m.push(w)}function _(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:b,abort:v}}function C(){l="failed",m.forEach(w=>{w(void 0,d)})}function x(){f.forEach(w=>{w.status==="pending"&&(w.status="aborted")}),f=[]}function $(w,T,q){const N=T!=="success";switch(f=f.filter(k=>k!==w),l){case"pending":break;case"failed":if(N||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){d=q,C();return}if(N){d=q,f.length||(o.length?A():C());return}if(g(),x(),!i.random){const k=i.resources.indexOf(w.resource);k!==-1&&k!==i.index&&(i.index=k)}l="completed",m.forEach(k=>{k(q)})}function A(){if(l!=="pending")return;g();const w=o.shift();if(w===void 0){if(f.length){h=setTimeout(()=>{g(),l==="pending"&&(x(),C())},i.timeout);return}C();return}const T={status:"pending",resource:w,callback:(q,N)=>{$(T,q,N)}};f.push(T),c++,h=setTimeout(A,i.rotate),e(w,t,T.callback)}return setTimeout(A),_}function En(i){const t={...Ns,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const d=Vs(t,a,l,(h,f)=>{s(),c&&c(h,f)});return e.push(d),d}function r(a){return e.find(l=>a(l))||null}return{query:n,find:r,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function Ge(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const we=Object.create(null),jt=["https://api.simplesvg.com","https://api.unisvg.com"],re=[];for(;jt.length>0;)jt.length===1||Math.random()>.5?re.push(jt.shift()):re.push(jt.pop());we[""]=Ge({resources:["https://api.iconify.design"].concat(re)});function Ri(i,t){const e=Ge(t);return e===null?!1:(we[i]=e,!0)}function _e(i){return we[i]}function Ws(){return Object.keys(we)}function Bi(){}const Ae=Object.create(null);function Ys(i){if(!Ae[i]){const t=_e(i);if(!t)return;const e=En(t),s={config:t,redundancy:e};Ae[i]=s}return Ae[i]}function kn(i,t,e){let s,n;if(typeof i=="string"){const r=Re(i);if(!r)return e(void 0,424),Bi;n=r.send;const o=Ys(i);o&&(s=o.redundancy)}else{const r=Ge(i);if(r){s=En(r);const o=i.resources?i.resources[0]:"",a=Re(o);a&&(n=a.send)}}return!s||!n?(e(void 0,424),Bi):s.query(t,n,e)().abort}const ji="iconify2",Vt="iconify",An=Vt+"-count",Fi=Vt+"-version",On=36e5,Qs=168,Us=50;function Be(i,t){try{return i.getItem(t)}catch{}}function Xe(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Di(i,t){try{i.removeItem(t)}catch{}}function je(i,t){return Xe(i,An,t.toString())}function Fe(i){return parseInt(Be(i,An))||0}const vt={local:!0,session:!0},Pn={local:new Set,session:new Set};let Ke=!1;function Gs(i){Ke=i}let ne=typeof window>"u"?{}:window;function Tn(i){const t=i+"Storage";try{if(ne&&ne[t]&&typeof ne[t].length=="number")return ne[t]}catch{}vt[i]=!1}function Ln(i,t){const e=Tn(i);if(!e)return;const s=Be(e,Fi);if(s!==ji){if(s){const a=Fe(e);for(let l=0;l<a;l++)Di(e,Vt+l.toString())}Xe(e,Fi,ji),je(e,0);return}const n=Math.floor(Date.now()/On)-Qs,r=a=>{const l=Vt+a.toString(),c=Be(e,l);if(typeof c=="string"){try{const d=JSON.parse(c);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}Di(e,l)}};let o=Fe(e);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,je(e,o)):Pn[i].add(a))}function zn(){if(!Ke){Gs(!0);for(const i in vt)Ln(i,t=>{const e=t.data,s=t.provider,n=e.prefix,r=lt(s,n);if(!Ue(r,e).length)return!1;const o=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function Xs(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in vt)Ln(s,n=>{const r=n.data;return n.provider!==i.provider||r.prefix!==i.prefix||r.lastModified===t});return!0}function Ks(i,t){Ke||zn();function e(s){let n;if(!vt[s]||!(n=Tn(s)))return;const r=Pn[s];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=Fe(n),o>=Us||!je(n,o+1))return;const a={cached:Math.floor(Date.now()/On),provider:i.provider,data:t};return Xe(n,Vt+o.toString(),JSON.stringify(a))}t.lastModified&&!Xs(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Mi(){}function Js(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Ds(i)}))}function Zs(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let r;if(!n||!(r=Re(e)))return;r.prepare(e,s,n).forEach(a=>{kn(e,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=Ue(i,l);if(!c.length)return;const d=i.pendingIcons;d&&c.forEach(h=>{d.delete(h)}),Ks(i,l)}catch(c){console.error(c)}Js(i)})})}))}const Je=(i,t)=>{const e=qs(i,!0,Cn()),s=Fs(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Mi)}),()=>{l=!1}}const n=Object.create(null),r=[];let o,a;return s.pending.forEach(l=>{const{provider:c,prefix:d}=l;if(d===a&&c===o)return;o=c,a=d,r.push(lt(c,d));const h=n[c]||(n[c]=Object.create(null));h[d]||(h[d]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:d,name:h}=l,f=lt(c,d),m=f.pendingIcons||(f.pendingIcons=new Set);m.has(h)||(m.add(h),n[c][d].push(h))}),r.forEach(l=>{const{provider:c,prefix:d}=l;n[c][d].length&&Zs(l,n[c][d])}),t?Hs(t,s,r):Mi},tr=i=>new Promise((t,e)=>{const s=typeof i=="string"?Xt(i,!0):i;if(!s){e(i);return}Je([s||i],n=>{if(n.length&&s){const r=Nt(s);if(r){t({...Gt,...r});return}}e(i)})});function er(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function ir(i,t){const e=typeof i=="string"?Xt(i,!0,!0):null;if(!e){const r=er(i);return{value:i,data:r}}const s=Nt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Je([e],()=>t(i,e,Nt(e)));return{value:i,name:e,loading:n}}function Oe(i){return i.hasAttribute("inline")}let In=!1;try{In=navigator.vendor.indexOf("Apple")===0}catch{}function nr(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(In||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const sr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,rr=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function De(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(sr);if(s===null||!s.length)return i;const n=[];let r=s.shift(),o=rr.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?n.push(r):n.push(Math.ceil(a*t*e)/e)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");o=!o}}function or(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),r=i.indexOf("</"+t);if(n===-1||r===-1)break;const o=i.indexOf(">",r);if(o===-1)break;e+=i.slice(n+1,r).trim(),i=i.slice(0,s).trim()+i.slice(o+1)}return{defs:e,content:i}}function ar(i,t){return i?"<defs>"+i+"</defs>"+t:t}function lr(i,t,e){const s=or(i);return ar(s.defs,t+s.content+e)}const cr=i=>i==="unset"||i==="undefined"||i==="none";function Rn(i,t){const e={...Gt,...i},s={...yn,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,s].forEach(v=>{const b=[],_=v.hFlip,C=v.vFlip;let x=v.rotate;_?C?x+=2:(b.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),b.push("scale(-1 1)"),n.top=n.left=0):C&&(b.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),b.push("scale(1 -1)"),n.top=n.left=0);let $;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:$=n.height/2+n.top,b.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:b.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:$=n.width/2+n.left,b.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}x%2===1&&(n.left!==n.top&&($=n.left,n.left=n.top,n.top=$),n.width!==n.height&&($=n.width,n.width=n.height,n.height=$)),b.length&&(r=lr(r,'<g transform="'+b.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,l=n.width,c=n.height;let d,h;o===null?(h=a===null?"1em":a==="auto"?c:a,d=De(h,l/c)):(d=o==="auto"?l:o,h=a===null?De(d,c/l):a==="auto"?c:a);const f={},m=(v,b)=>{cr(b)||(f[v]=b.toString())};m("width",d),m("height",h);const g=[n.left,n.top,l,c];return f.viewBox=g.join(" "),{attributes:f,viewBox:g,body:r}}function Ze(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function ur(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function dr(i){return"data:image/svg+xml,"+ur(i)}function Bn(i){return'url("'+dr(i)+'")'}const hr=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ue=hr();function fr(i){ue=i}function pr(){return ue}function mr(i,t){const e=_e(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const r=t+".json?icons=";s=e.maxURL-n-e.path.length-r.length}return s}function br(i){return i===404}const gr=(i,t,e)=>{const s=[],n=mr(i,t),r="icons";let o={type:r,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(o),o={type:r,provider:i,prefix:t,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function vr(i){if(typeof i=="string"){const t=_e(i);if(t)return t.path}return"/"}const yr=(i,t,e)=>{if(!ue){e("abort",424);return}let s=vr(t.provider);switch(t.type){case"icons":{const r=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=r+".json?"+l.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let n=503;ue(i+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{e(br(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",n)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",n)})},xr={prepare:gr,send:yr};function Hi(i,t){switch(i){case"local":case"session":vt[i]=t;break;case"all":for(const e in vt)vt[e]=t;break}}const Pe="data-style";let jn="";function wr(i){jn=i}function qi(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Pe));e||(e=document.createElement("style"),e.setAttribute(Pe,Pe),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+jn}function Fn(){Ii("",xr),Cn(!0);let i;try{i=window}catch{}if(i){if(zn(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Li(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const r=e[s];if(typeof r!="object"||!r||r.resources===void 0)continue;Ri(s,r)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Hi(e,!0),disableCache:e=>Hi(e,!1),iconLoaded:zi,iconExists:zi,getIcon:js,listIcons:Bs,addIcon:$n,addCollection:Li,calculateSize:De,buildIcon:Rn,iconToHTML:Ze,svgToURL:Bn,loadIcons:Je,loadIcon:tr,addAPIProvider:Ri,appendCustomStyle:wr,_api:{getAPIConfig:_e,setAPIModule:Ii,sendAPIQuery:kn,setFetch:fr,getFetch:pr,listAPIProviders:Ws}}}const Me={"background-color":"currentColor"},Dn={"background-color":"transparent"},Ni={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Vi={"-webkit-mask":Me,mask:Me,background:Dn};for(const i in Vi){const t=Vi[i];for(const e in Ni)t[i+"-"+e]=Ni[e]}function Wi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function _r(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=i.attributes,o=Ze(n,{...r,width:t.width+"",height:t.height+""}),a=Bn(o),l=s.style,c={"--svg":a,width:Wi(r.width),height:Wi(r.height),...e?Me:Dn};for(const d in c)l.setProperty(d,c[d]);return s}let Dt;function Cr(){try{Dt=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Dt=null}}function $r(i){return Dt===void 0&&Cr(),Dt?Dt.createHTML(i):i}function Sr(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=Ze(i.body,e);return t.innerHTML=$r(n),t.firstChild}function He(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Yi(i,t){const e=t.icon.data,s=t.customisations,n=Rn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=Sr(n);break;default:o=_r(n,{...Gt,...e},r==="mask")}const a=He(i);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,a):i.appendChild(o)}function Qi(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Er(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends e{constructor(){super();rt(this,"_shadowRoot");rt(this,"_initialised",!1);rt(this,"_state");rt(this,"_checkQueued",!1);rt(this,"_connected",!1);rt(this,"_observer",null);rt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=Oe(this);qi(l,c),this._state=Qi({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=Oe(this),d=this._state;c!==d.inline&&(d.inline=c,qi(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return Oe(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Yi(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const d=this.getAttribute("mode"),h=Pi(this);(l.attrMode!==d||Os(l.customisations,h)||!He(this._shadowRoot))&&this._renderIcon(l.icon,h,d)}_iconChanged(l){const c=ir(l,(d,h,f)=>{const m=this._state;if(m.rendered||this.getAttribute("icon")!==d)return;const g={value:d,name:h,data:f};g.data?this._gotIconData(g):m.icon=g});c.data?this._gotIconData(c):this._state=Qi(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=He(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Pi(this),this.getAttribute("mode"))}_renderIcon(l,c,d){const h=nr(l.data.body,d),f=this._state.inline;Yi(this._shadowRoot,this._state={rendered:!0,icon:l,inline:f,customisations:c,attrMode:d,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(d=>d.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const o=Fn();for(const a in o)r[a]=r.prototype[a]=o[a];return t.define(i,r),r}Er()||Fn();const kr=S`
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
`,Ar=S`
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
`,bt={scrollbar:kr,globalStyles:Ar},y=class y{static set config(t){this._config={...y._config,...t}}static get config(){return y._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=bt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){y.init()}static init(t="",e=!0){y.addGlobalStyles(),y.defineCustomElement("bim-button",Ir),y.defineCustomElement("bim-checkbox",ct),y.defineCustomElement("bim-color-input",K),y.defineCustomElement("bim-context-menu",Ne),y.defineCustomElement("bim-dropdown",F),y.defineCustomElement("bim-grid",Yt),y.defineCustomElement("bim-icon",Ve),y.defineCustomElement("bim-input",wt),y.defineCustomElement("bim-label",ut),y.defineCustomElement("bim-number-input",z),y.defineCustomElement("bim-option",P),y.defineCustomElement("bim-panel",tt),y.defineCustomElement("bim-panel-section",dt),y.defineCustomElement("bim-selector",ht),y.defineCustomElement("bim-table",I),y.defineCustomElement("bim-tabs",V),y.defineCustomElement("bim-tab",L),y.defineCustomElement("bim-table-cell",fe),y.defineCustomElement("bim-table-children",We),y.defineCustomElement("bim-table-group",pe),y.defineCustomElement("bim-table-row",ft),y.defineCustomElement("bim-text-input",R),y.defineCustomElement("bim-toolbar",zt),y.defineCustomElement("bim-toolbar-group",Lt),y.defineCustomElement("bim-toolbar-section",pt),y.defineCustomElement("bim-viewport",me),e&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}static animateOnLoad(t=""){const e=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,s=[];function n(r,o=document,a=new Set){const l=[];return Array.from(o.querySelectorAll(r)).forEach(h=>{a.has(h)||(a.add(h),l.push(h))}),Array.from(o.querySelectorAll("*")).filter(h=>h.shadowRoot).forEach(h=>{a.has(h)||(a.add(h),l.push(...n(r,h.shadowRoot,a)))}),l}requestAnimationFrame(()=>{n(t||e).forEach(a=>{const l=a;let c="auto";c=window.getComputedStyle(l).getPropertyValue("transition"),l.style.setProperty("opacity","0"),l.style.setProperty("transition","none"),requestAnimationFrame(()=>{l.style.setProperty("transition",c)}),s.push(l)});const o=()=>{s.forEach(a=>{const l=a,c=(l.getBoundingClientRect().x+l.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),d=window.getComputedStyle(l).getPropertyValue("transform"),h=400,f=200+c*1e3;l.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:h,easing:"ease-in-out",delay:f}),setTimeout(()=>{l.style.removeProperty("opacity"),d!=="none"?l.style.setProperty("transform",d):l.style.removeProperty("transform")},f+h)})};document.readyState==="complete"?o():window.addEventListener("load",o)})}static toggleTheme(t=!0){const e=document.querySelector("html");if(!e)return;const s=()=>{e.classList.contains("bim-ui-dark")?e.classList.replace("bim-ui-dark","bim-ui-light"):e.classList.contains("bim-ui-light")?e.classList.replace("bim-ui-light","bim-ui-dark"):e.classList.add("bim-ui-light")};if(t){const r=document.createElement("div");r.classList.add("theme-transition-overlay");const o=document.createElement("div");r.appendChild(o),o.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(r),r.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),o.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{s()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(l=>{document.body.removeChild(l)})},1e3)}else s()}};y._config={sectionLabelOnVerticalToolbar:!1};let Wt=y;class de extends E{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Mt(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const r=t,o=c=>(n={...n,...c},Mt(r(n,o),s),n);o(e);const a=()=>n;return[s.firstElementChild,o,a]}}const he=(i,t={},e=!0)=>{let s={};for(const n of i.children){const r=n,o=r.getAttribute("name")||r.getAttribute("label"),a=o?t[o]:void 0;if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const l=r.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;s[o]=a?a(r.value):r.value}else if(e){const l=he(r,t);if(Object.keys(l).length===0)continue;s[o]=a?a(l):l}}else e&&(s={...s,...he(r,t)})}return s},Ce=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Or=[">=","<=","=",">","<","?","/","#"];function Ui(i){const t=Or.find(a=>i.split(a).length===2),e=i.split(t).map(a=>a.trim()),[s,n]=e,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):Ce(n);return{key:s,condition:t,value:r}}const qe=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),r=s.startsWith("(")&&s.endsWith(")");if(n){const o=Ui(s);t.push(o)}if(r){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(d=>d.trim()).map((d,h)=>{const f=Ui(d);return h>0&&(f.operator="&"),f})};t.push(c)}}return t}catch{return null}},Gi=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var Pr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,Mn=(i,t,e,s)=>{for(var n=Tr(t,e),r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Pr(t,e,n),n},O;const ti=(O=class extends E{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of O.menus)t instanceof O&&(t.visible=!1);setTimeout(()=>{O.dialog.close(),O.dialog.remove()},310)}get visible(){return this._visible}set visible(t){this._visible=t,t?(O.dialog.parentElement||document.body.append(O.dialog),this._previousContainer=this.parentElement,O.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),O.dialog.append(this),O.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var e;(e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await gn(this._previousContainer,this,{placement:t,middleware:[sn(10),bn(),mn(),pn({padding:5})]}),{x:s,y:n}=e;this.style.left=`${s}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),O.menus.push(this),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("display","none"),this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return p` <slot></slot> `}},O.styles=[bt.scrollbar,S`
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
    `],O.dialog=de.create(()=>p` <dialog
      @click=${e=>{e.target===O.dialog&&O.removeMenus()}}
      @cancel=${()=>O.removeMenus()}
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
    ></dialog>`),O.menus=[],O);Mn([u({type:String,reflect:!0})],ti.prototype,"placement");Mn([u({type:Boolean,reflect:!0})],ti.prototype,"visible");let Ne=ti;var Lr=Object.defineProperty,zr=Object.getOwnPropertyDescriptor,W=(i,t,e,s)=>{for(var n=s>1?void 0:s?zr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Lr(t,e,n),n},yt;const D=(yt=class extends E{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=kt(),this._tooltip=kt(),this._mouseLeave=!1,this.onClick=t=>{t.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const t=this._contextMenu;if(t){const e=this.getAttribute("data-context-group");e&&t.setAttribute("data-context-group",e),this.closeNestedContexts();const s=Wt.newRandomId();for(const n of t.children)n instanceof yt&&n.setAttribute("data-context-group",s);t.visible=!0}},this.mouseLeave=!0}set loading(t){if(this._loading=t,t)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=t,this.icon="eos-icons:loading";else{const{disabled:e,icon:s}=this._stateBeforeLoading;this.disabled=e,this.icon=s}}get loading(){return this._loading}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&gn(t,e,{placement:"bottom",middleware:[sn(10),bn(),mn(),pn({padding:5})]}).then(s=>{const{x:n,y:r}=s;Object.assign(e.style,{left:`${n}px`,top:`${r}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}closeNestedContexts(){const t=this.getAttribute("data-context-group");if(t)for(const e of Ne.dialog.children){const s=e.getAttribute("data-context-group");if(e instanceof Ne&&s===t){e.visible=!1,e.removeAttribute("data-context-group");for(const n of e.children)n instanceof yt&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const t=p`
      <div ${At(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?p`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?p`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,e=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      style="fill: var(--bim-label--c)"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`;return p`
      <div ${At(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?p`
              <div
                class="button"
                @mouseenter=${this.onMouseEnter}
                @mouseleave=${()=>this.mouseLeave=!0}
              >
                <bim-label
                  .icon=${this.icon}
                  .vertical=${this.vertical}
                  .labelHidden=${this.labelHidden}
                  >${this.label}${this.label&&this._contextMenu?e:null}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
      </div>
      <slot></slot>
    `}},yt.styles=S`
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
  `,yt);W([u({type:String,reflect:!0})],D.prototype,"label",2);W([u({type:Boolean,attribute:"label-hidden",reflect:!0})],D.prototype,"labelHidden",2);W([u({type:Boolean,reflect:!0})],D.prototype,"active",2);W([u({type:Boolean,reflect:!0,attribute:"disabled"})],D.prototype,"disabled",2);W([u({type:String,reflect:!0})],D.prototype,"icon",2);W([u({type:Boolean,reflect:!0})],D.prototype,"vertical",2);W([u({type:Number,attribute:"tooltip-time",reflect:!0})],D.prototype,"tooltipTime",2);W([u({type:Boolean,attribute:"tooltip-visible",reflect:!0})],D.prototype,"tooltipVisible",2);W([u({type:String,attribute:"tooltip-title",reflect:!0})],D.prototype,"tooltipTitle",2);W([u({type:String,attribute:"tooltip-text",reflect:!0})],D.prototype,"tooltipText",2);W([u({type:Boolean,reflect:!0})],D.prototype,"loading",1);let Ir=D;var Rr=Object.defineProperty,Kt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Rr(t,e,n),n};const ii=class ii extends E{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){const t=p`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return p`
      <div class="parent">
        <label class="parent-label">
          ${this.label?p`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
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
    `}};ii.styles=S`
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
  `;let ct=ii;Kt([u({type:String,reflect:!0})],ct.prototype,"icon");Kt([u({type:String,reflect:!0})],ct.prototype,"name");Kt([u({type:String,reflect:!0})],ct.prototype,"label");Kt([u({type:Boolean,reflect:!0})],ct.prototype,"checked");Kt([u({type:Boolean,reflect:!0})],ct.prototype,"inverted");var Br=Object.defineProperty,_t=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Br(t,e,n),n};const ni=class ni extends E{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this.disabled=!1,this._colorInput=kt(),this._textInput=kt(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return p`
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
                ${At(this._colorInput)}
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
                ${At(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
                ?disabled=${this.disabled}
              />
            </div>
            ${this.opacity!==void 0?p`<bim-number-input
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
    `}};ni.styles=S`
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
  `;let K=ni;_t([u({type:String,reflect:!0})],K.prototype,"name");_t([u({type:String,reflect:!0})],K.prototype,"label");_t([u({type:String,reflect:!0})],K.prototype,"icon");_t([u({type:Boolean,reflect:!0})],K.prototype,"vertical");_t([u({type:Number,reflect:!0})],K.prototype,"opacity");_t([u({type:String,reflect:!0})],K.prototype,"color");_t([u({type:Boolean,reflect:!0})],K.prototype,"disabled");var jr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,gt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Fr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&jr(t,e,n),n};const si=class si extends E{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Ce(this.label):this.label}set value(t){this._value=t}render(){return p`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?p` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?p`<bim-checkbox
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
        <slot></slot>
      </div>
    `}};si.styles=S`
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
  `;let P=si;gt([u({type:String,reflect:!0})],P.prototype,"img",2);gt([u({type:String,reflect:!0})],P.prototype,"label",2);gt([u({type:String,reflect:!0})],P.prototype,"icon",2);gt([u({type:Boolean,reflect:!0})],P.prototype,"checked",2);gt([u({type:Boolean,reflect:!0})],P.prototype,"checkbox",2);gt([u({type:Boolean,attribute:"no-mark",reflect:!0})],P.prototype,"noMark",2);gt([u({converter:{fromAttribute(i){return i&&Ce(i)}}})],P.prototype,"value",1);gt([u({type:Boolean,reflect:!0})],P.prototype,"vertical",2);var Dr=Object.defineProperty,Mr=Object.getOwnPropertyDescriptor,et=(i,t,e,s)=>{for(var n=s>1?void 0:s?Mr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Dr(t,e,n),n};const ri=class ri extends de{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=kt(),this.onOptionClick=t=>{const e=t.target,s=this._value.has(e);if(!this.multiple&&!this.required&&!s)this._value=new Set([e]);else if(!this.multiple&&!this.required&&s)this._value=new Set([]);else if(!this.multiple&&this.required&&!s)this._value=new Set([e]);else if(this.multiple&&!this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&s){const n=[...this._value].filter(r=>r!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&s){const n=[...this._value].filter(o=>o!==e),r=new Set(n);r.size!==0&&(this._value=r)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const s of this.elements)e.append(s);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const s of t){const n=this.findOption(s);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof P&&e.checked).map(e=>e.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof P&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const s=new Set;for(const n of this.elements){if(!(n instanceof P)){n.remove();continue}n.checked&&s.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=s}updateOptionsState(){for(const t of this._options)t instanceof P&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(s=>s instanceof P?s.label===t||s.value===t:!1)}render(){let t,e,s;if(this._value.size===0)t=this.placeholder??"Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.size})`;return p`
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
            ${At(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};ri.styles=[bt.scrollbar,S`
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
    `];let F=ri;et([u({type:String,reflect:!0})],F.prototype,"name",2);et([u({type:String,reflect:!0})],F.prototype,"icon",2);et([u({type:String,reflect:!0})],F.prototype,"label",2);et([u({type:Boolean,reflect:!0})],F.prototype,"multiple",2);et([u({type:Boolean,reflect:!0})],F.prototype,"required",2);et([u({type:Boolean,reflect:!0})],F.prototype,"vertical",2);et([u({type:String,reflect:!0})],F.prototype,"placeholder",2);et([u({type:Boolean,reflect:!0})],F.prototype,"visible",1);et([It()],F.prototype,"_value",2);var Hr=Object.defineProperty,Hn=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Hr(t,e,n),n};const oi=class oi extends E{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._elements={},this._templateIds=new Map,this._updateFunctions={},this.updateComponent={}}set layouts(t){this._layouts=t,this._templateIds.clear()}get layouts(){return this._layouts}set elements(t){this._elements=t;const e={};for(const[s,n]of Object.entries(this.elements))"template"in n&&(e[s]=r=>{const o=this._updateFunctions[s];o&&o(r)});this.updateComponent=e}get elements(){return this._elements}getLayoutAreas(t){const{template:e}=t,r=e.split(`
`).map(a=>a.trim()).map(a=>a.split('"')[1]).filter(a=>a!==void 0).flatMap(a=>a.split(/\s+/));return[...new Set(r)].filter(a=>a!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}getTemplateId(t){let e=this._templateIds.get(t);return e||(e=Wt.newRandomId(),this._templateIds.set(t,e)),e}cleanUpdateFunctions(){if(!this.layout){this._updateFunctions={};return}const t=this.layouts[this.layout],e=this.getLayoutAreas(t);for(const s in this.elements)e.includes(s)||delete this._updateFunctions[s]}render(){if(this.layout){if(this.layouts[this.layout]){const t=this.layouts[this.layout],s=this.getLayoutAreas(t).map(n=>{var c;const r=((c=t.elements)==null?void 0:c[n])||this.elements[n];if(!r)return null;if(r instanceof HTMLElement)return r.style.gridArea=n,r;if("template"in r){const{template:d,initialState:h}=r,f=this.getTemplateId(d),m=this.querySelector(`[data-grid-template-id="${f}"]`);if(m)return m;const[g,v]=de.create(d,h);return g.setAttribute("data-grid-template-id",f),g.style.gridArea=n,this._updateFunctions[n]=v,g}const o=this.getTemplateId(r),a=this.querySelector(`[data-grid-template-id="${o}"]`);if(a)return a;const l=de.create(r);return l.setAttribute("data-grid-template-id",this.getTemplateId(r)),l.style.gridArea=n,l}).filter(n=>n!==null);this.innerHTML="",this.style.gridTemplate=t.template,this.append(...s),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return this.cleanUpdateFunctions(),p`<slot></slot>`}};oi.styles=S`
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
  `;let Yt=oi;Hn([u({type:Boolean,reflect:!0})],Yt.prototype,"floating");Hn([u({type:String,reflect:!0})],Yt.prototype,"layout");const be=class be extends E{render(){return p`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};be.styles=S`
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
  `,be.properties={icon:{type:String}};let Ve=be;var qr=Object.defineProperty,$e=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&qr(t,e,n),n};const ai=class ai extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const r=n,o=t[s];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return p`
      <div class="parent">
        ${this.label||this.icon?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};ai.styles=S`
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
  `;let wt=ai;$e([u({type:String,reflect:!0})],wt.prototype,"name");$e([u({type:String,reflect:!0})],wt.prototype,"label");$e([u({type:String,reflect:!0})],wt.prototype,"icon");$e([u({type:Boolean,reflect:!0})],wt.prototype,"vertical");var Nr=Object.defineProperty,Jt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Nr(t,e,n),n};const li=class li extends E{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Ce(this.textContent):this.textContent}render(){return p`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?p`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?p`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};li.styles=S`
    :host {
      --bim-icon--c: var(--bim-label--c);
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
      display: flex;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
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
  `;let ut=li;Jt([u({type:String,reflect:!0})],ut.prototype,"img");Jt([u({type:Boolean,attribute:"label-hidden",reflect:!0})],ut.prototype,"labelHidden");Jt([u({type:String,reflect:!0})],ut.prototype,"icon");Jt([u({type:Boolean,attribute:"icon-hidden",reflect:!0})],ut.prototype,"iconHidden");Jt([u({type:Boolean,reflect:!0})],ut.prototype,"vertical");var Vr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,M=(i,t,e,s)=>{for(var n=s>1?void 0:s?Wr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Vr(t,e,n),n};const ci=class ci extends E{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=kt(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const r=l=>{var v;n=!0;const{clientX:c}=l,d=this.step??1,h=((v=d.toString().split(".")[1])==null?void 0:v.length)||0,f=1/(this.sensitivity??1),m=(c-e)/f;if(Math.floor(Math.abs(m))!==Math.abs(m))return;const g=s+m*d;this.setValue(g.toFixed(h))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},a=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=p`
      ${this.pref||this.icon?p`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${At(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.suffix?p`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            >${this.suffix}</bim-label
          >`:null}
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),r=p`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?p`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?p`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,o=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return p`
      <bim-input
        title=${o}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};ci.styles=S`
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
  `;let z=ci;M([u({type:String,reflect:!0})],z.prototype,"name",2);M([u({type:String,reflect:!0})],z.prototype,"icon",2);M([u({type:String,reflect:!0})],z.prototype,"label",2);M([u({type:String,reflect:!0})],z.prototype,"pref",2);M([u({type:Number,reflect:!0})],z.prototype,"min",2);M([u({type:Number,reflect:!0})],z.prototype,"value",1);M([u({type:Number,reflect:!0})],z.prototype,"step",2);M([u({type:Number,reflect:!0})],z.prototype,"sensitivity",2);M([u({type:Number,reflect:!0})],z.prototype,"max",2);M([u({type:String,reflect:!0})],z.prototype,"suffix",2);M([u({type:Boolean,reflect:!0})],z.prototype,"vertical",2);M([u({type:Boolean,reflect:!0})],z.prototype,"slider",2);var Yr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Zt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Qr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Yr(t,e,n),n};const ui=class ui extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return he(this,this.valueTransform)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}animatePanles(){const t=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(t,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanles()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,p`
      <div class="parent">
        ${this.label||this.name||this.icon?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};ui.styles=[bt.scrollbar,S`
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
    `];let tt=ui;Zt([u({type:String,reflect:!0})],tt.prototype,"icon",2);Zt([u({type:String,reflect:!0})],tt.prototype,"name",2);Zt([u({type:String,reflect:!0})],tt.prototype,"label",2);Zt([u({type:Boolean,reflect:!0})],tt.prototype,"hidden",1);Zt([u({type:Boolean,attribute:"header-hidden",reflect:!0})],tt.prototype,"headerHidden",2);var Ur=Object.defineProperty,te=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Ur(t,e,n),n};const di=class di extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const t=this.parentElement;let e;return t instanceof tt&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),he(this,e)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const a=o;return a.name===s||a.label===s});if(!n)continue;const r=n;r.value=t[s]}}setFlexAfterTransition(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");t&&setTimeout(()=>{this.collapsed?t.style.removeProperty("flex"):t.style.setProperty("flex","1")},150)}animateHeader(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=t.clientHeight:(t.style.setProperty("transition","none"),t.style.setProperty("height","auto"),t.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=t.clientHeight,requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),t.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(t.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0")})):(t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{t.style.setProperty("height",`${this.componentHeight}px`),t.style.setProperty("padding","0.125rem 1rem 1rem")})),this.setFlexAfterTransition()}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(t){t.target.assignedElements({flatten:!0}).forEach((n,r)=>{const o=r*.05;n.style.setProperty("transition-delay",`${o}s`)})}handlePointerEnter(){const t=this.renderRoot.querySelector(".expand-icon");this.collapsed?t==null||t.style.setProperty("animation","collapseAnim 0.5s"):t==null||t.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const t=this.renderRoot.querySelector(".expand-icon");t==null||t.style.setProperty("animation","none")}render(){const t=this.label||this.icon||this.name||this.fixed,e=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=p`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:e}
      </div>
    `;return p`
      <div class="parent">
        ${t?s:null}
        <div class="components" style="flex: 1;">
          <div>
            <slot @slotchange=${this.handelSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};di.styles=[bt.scrollbar,S`
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
    `];let dt=di;te([u({type:String,reflect:!0})],dt.prototype,"icon");te([u({type:String,reflect:!0})],dt.prototype,"label");te([u({type:String,reflect:!0})],dt.prototype,"name");te([u({type:Boolean,reflect:!0})],dt.prototype,"fixed");te([u({type:Boolean,reflect:!0})],dt.prototype,"collapsed");var Gr=Object.defineProperty,ee=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Gr(t,e,n),n};const hi=class hi extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.setAnimatedBackgound(),this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof P&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this.setAnimatedBackgound(),this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof P&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof P?s.label===t||s.value===t:!1)}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){const e=this.renderRoot.querySelector(".animated-background"),s=this._value;requestAnimationFrame(()=>{var o,a,l,c;const n=(c=(l=(a=(o=s==null?void 0:s.parentElement)==null?void 0:o.shadowRoot)==null?void 0:a.querySelector("bim-input"))==null?void 0:l.shadowRoot)==null?void 0:c.querySelector(".input"),r={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((n==null?void 0:n.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((n==null?void 0:n.offsetLeft)??0)};e==null||e.style.setProperty("width",`${r.width}px`),e==null||e.style.setProperty("height",`${r.height}px`),e==null||e.style.setProperty("top",`${r.top}px`),e==null||e.style.setProperty("left",`${r.left}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const r="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${r}, height ${.3}s ${r}, top ${.3}s ${r}, left ${.3}s ${r}`)})}firstUpdated(){const t=[...this.children].find(e=>e instanceof P&&e.checked);t&&(this._value=t),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return p`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};hi.styles=S`
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
  `;let ht=hi;ee([u({type:String,reflect:!0})],ht.prototype,"name");ee([u({type:String,reflect:!0})],ht.prototype,"icon");ee([u({type:String,reflect:!0})],ht.prototype,"label");ee([u({type:Boolean,reflect:!0})],ht.prototype,"vertical");ee([It()],ht.prototype,"_value");const Xr=()=>p`
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
  `,Kr=()=>p`
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
  `;var Jr=Object.defineProperty,Zr=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Jr(t,e,n),n};const fi=class fi extends E{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return p`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};fi.styles=S`
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
  `;let fe=fi;Zr([u({type:String,reflect:!0})],fe.prototype,"column");const pi=class pi extends E{constructor(){super(...arguments),this._groups=[],this.group=this.closest("bim-table-group"),this._data=[],this.table=this.closest("bim-table")}get data(){var t;return((t=this.group)==null?void 0:t.data.children)??this._data}set data(t){this._data=t}render(){return this._groups=[],p`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};pi.styles=S`
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
  `;let We=pi;var to=Object.defineProperty,eo=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&to(t,e,n),n};const mi=class mi extends E{constructor(){super(...arguments),this.childrenHidden=!0,this.table=this.closest("bim-table"),this.data={data:{}}}get rowElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-row"):null}get childrenElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-children"):null}get _isChildrenEmpty(){return!(this.data.children&&this.data.children.length!==0)}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t){this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,this.animateTableChildren(!0)}animateTableChildren(t=!0){if(!t){requestAnimationFrame(()=>{var c;const o=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(c=this.renderRoot.querySelector("bim-table-children"))==null?void 0:c.querySelector(".branch-vertical");o.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const e=500,s=0,n=200,r=350;requestAnimationFrame(()=>{var v;const o=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(v=this.renderRoot.querySelector("bim-table-children"))==null?void 0:v.querySelector(".branch-vertical"),d=()=>{const b=o==null?void 0:o.renderRoot.querySelectorAll("bim-table-group");b==null||b.forEach((_,C)=>{_.style.setProperty("opacity","0"),_.style.setProperty("left","-30px");const x=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];_.animate(x,{duration:e/2,delay:50+C*s,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},h=()=>{const b=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(b,{duration:r,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},f=()=>{const b=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(b,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:s,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},m=()=>{var _;const b=(_=this.renderRoot.querySelector("bim-table-row"))==null?void 0:_.querySelector(".branch-horizontal");if(b){b.style.setProperty("transform-origin","center right");const C=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];b.animate(C,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},g=()=>{const b=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];c==null||c.animate(b,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(s+n)*.7})};d(),h(),f(),m(),g()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(e=>{var s,n,r;if(!this.childrenHidden){e.style.setProperty("transform","translateY(-50%) rotate(90deg)");const a=(s=e.parentElement)==null?void 0:s.querySelector(".branch-horizontal");a&&a.style.setProperty("transform","scaleX(0)");const l=(r=(n=e.parentElement)==null?void 0:n.parentElement)==null?void 0:r.querySelectorAll(".branch-vertical");l==null||l.forEach(c=>{c.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,e=p`
      ${this.table.noIndentation?null:p`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `;let s=null;this.table.noIndentation||(s=document.createElement("div"),s.classList.add("branch","branch-horizontal"),s.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let n=null;if(!this.table.noIndentation){n=document.createElement("div");const a=document.createElementNS("http://www.w3.org/2000/svg","svg");if(a.setAttribute("height","9.9"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.7"),this.table.noCarets){const l=document.createElementNS("http://www.w3.org/2000/svg","circle");l.setAttribute("cx","2.3333336"),l.setAttribute("cy","3.85"),l.setAttribute("r","2.5"),a.append(l)}else{const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(l),n.style.cursor="pointer",n.addEventListener("click",c=>{c.stopPropagation(),this.toggleChildren()})}n.classList.add("caret"),n.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,n.append(a)}const r=document.createElement("bim-table-row");if(!this._isChildrenEmpty){const a=document.createDocumentFragment();Mt(e,a),r.append(a)}r.table=this.table,r.group=this,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:r}})),n&&!this._isChildrenEmpty&&r.append(n),t!==0&&s&&r.append(s);let o;if(!this._isChildrenEmpty&&!this.childrenHidden){o=document.createElement("bim-table-children"),o.table=this.table,o.group=this;const a=document.createDocumentFragment();Mt(e,a),o.append(a),this.animateTableChildren()}return p`<div class="parent">${r} ${o}</div>`}};mi.styles=S`
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
  `;let pe=mi;eo([u({type:Boolean,attribute:"children-hidden",reflect:!0})],pe.prototype,"childrenHidden");var io=Object.defineProperty,ie=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&io(t,e,n),n};const bi=class bi extends E{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.group=this.closest("bim-table-group"),this._data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get groupData(){var t;return(t=this.group)==null?void 0:t.data}get data(){var t;return((t=this.group)==null?void 0:t.data.data)??this._data}set data(t){this._data=t}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,e=this.isHeader?this.data:this.table.applyDataTransform(this.group)??this.data,s=[];for(const n in e){if(this.hiddenColumns.includes(n))continue;const r=e[n];let o;if(typeof r=="string"||typeof r=="boolean"||typeof r=="number"?(o=document.createElement("bim-label"),o.textContent=String(r)):r instanceof HTMLElement?o=r:(o=document.createDocumentFragment(),Mt(r,o)),!o)continue;const a=document.createElement("bim-table-cell");a.append(o),a.column=n,this._columnNames.indexOf(n)===0&&(a.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`);const l=this._columnNames.indexOf(n);a.setAttribute("data-column-index",String(l)),a.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),a.toggleAttribute("data-cell-header",this.isHeader),a.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:a}})),s.push(a)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,p`
      ${!this.isHeader&&this.table.selectableRows?p`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${s}
      <slot></slot>
    `}render(){return p`${this._intersecting?this.compute():p``}`}};bi.styles=S`
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
  `;let ft=bi;ie([u({type:Boolean,reflect:!0})],ft.prototype,"selected");ie([u({attribute:!1})],ft.prototype,"columns");ie([u({attribute:!1})],ft.prototype,"hiddenColumns");ie([u({type:Boolean,attribute:"is-header",reflect:!0})],ft.prototype,"isHeader");ie([It()],ft.prototype,"_intersecting");var no=Object.defineProperty,so=Object.getOwnPropertyDescriptor,H=(i,t,e,s)=>{for(var n=s>1?void 0:s?so(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&no(t,e,n),n};const gi=class gi extends E{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.noCarets=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=qe(t)??[];for(const r of n){if("queries"in r){s=!1;break}const{condition:o,value:a}=r;let{key:l}=r;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(f=>f.includes(c)).map(f=>Gi(e.data[f],o,a)).some(f=>f)}else s=Gi(e.data[l],o,a);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns){const{name:s}=e;t[s]=String(s)}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(qe(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:r}=s;for(const o in r)this._columns.map(l=>typeof l=="string"?l:l.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const r=this._textDelimiters[t];let o="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(o+=`Indentation${r}`);const l=`${a.join(r)}
`;o+=l}for(const[l,c]of e.entries()){const{data:d,children:h}=c,f=this.indentationInText?`${s}${l+1}${r}`:"",m=a.map(v=>d[v]??""),g=`${f}${m.join(r)}
`;o+=g,h&&(o+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};if(!t)return e;const{data:s}=t.data;for(const r of Object.keys(this.dataTransform)){const o=this.columns.find(a=>a.name===r);o&&o.forceDataTransform&&(r in s||(s[r]=""))}const n=s;for(const r in n){const o=this.dataTransform[r];o?e[r]=o(n[r],s,t):e[r]=s[r]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const r=this.getRowIndentation(t,n.children,s+1);if(r!==null)return r}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const r=this.getGroupIndentation(t,n.children,s+1);if(r!==null)return r}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._filteredData.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-table-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const r of s)if(e(t,r)){if(this.preserveStructureOnFilter){const a={data:r.data};if(r.children){const l=this.filter(t,e,r.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:r.data}),r.children){const a=this.filter(t,e,r.children);n.push(...a)}}else if(r.children){const a=this.filter(t,e,r.children);this.preserveStructureOnFilter&&a.length?n.push({data:r.data,children:a}):n.push(...a)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return Xr();if(this._errorLoading)return p`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return p`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",p`
      <div class="parent">
        ${this.headersHidden?null:t} ${Kr()}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};gi.styles=[bt.scrollbar,S`
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
    `];let I=gi;H([It()],I.prototype,"_filteredData",2);H([u({type:Boolean,attribute:"headers-hidden",reflect:!0})],I.prototype,"headersHidden",2);H([u({type:String,attribute:"min-col-width",reflect:!0})],I.prototype,"minColWidth",2);H([u({type:Array,attribute:!1})],I.prototype,"columns",1);H([u({type:Array,attribute:!1})],I.prototype,"data",1);H([u({type:Boolean,reflect:!0})],I.prototype,"expanded",2);H([u({type:Boolean,reflect:!0,attribute:"selectable-rows"})],I.prototype,"selectableRows",2);H([u({attribute:!1})],I.prototype,"selection",2);H([u({type:Boolean,attribute:"no-indentation",reflect:!0})],I.prototype,"noIndentation",2);H([u({type:Boolean,attribute:"no-carets",reflect:!0})],I.prototype,"noCarets",2);H([u({type:Boolean,reflect:!0})],I.prototype,"loading",2);H([It()],I.prototype,"_errorLoading",2);var ro=Object.defineProperty,oo=Object.getOwnPropertyDescriptor,Rt=(i,t,e,s)=>{for(var n=s>1?void 0:s?oo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ro(t,e,n),n};const vi=class vi extends E{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof L&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof L&&n.name===t);for(const n of e){if(!(n instanceof L))continue;n.hidden=s!==n;const r=this.getTabSwitcher(n.name);r&&r.toggleAttribute("data-active",!n.hidden)}s||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof L))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name,this.setAnimatedBackgound()}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??null,s.icon=t.icon,e.append(s),this._switchers.push(e)}}updateSwitchers(){for(const t of this.children){if(!(t instanceof L))continue;const e=this._switchers.find(n=>n.getAttribute("data-name")===t.name);if(!e)continue;const s=e.querySelector("bim-label");s&&(s.textContent=t.label??null,s.icon=t.icon)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof L?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof L&&(this.tab=s.name);for(const n of e){if(!(n instanceof L)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){var n;const e=this.renderRoot.querySelector(".animated-background"),s=[...((n=this.renderRoot.querySelector(".switchers"))==null?void 0:n.querySelectorAll(".switcher"))||[]].filter(r=>r.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var a,l,c,d;const r=(d=(c=(l=(a=s==null?void 0:s.parentElement)==null?void 0:a.shadowRoot)==null?void 0:l.querySelector("bim-input"))==null?void 0:c.shadowRoot)==null?void 0:d.querySelector(".input"),o={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((r==null?void 0:r.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((r==null?void 0:r.offsetLeft)??0)};s?(e==null||e.style.setProperty("width",`${o.width}px`),e==null||e.style.setProperty("height",`${o.height}px`),e==null||e.style.setProperty("left",`${o.left}px`)):e==null||e.style.setProperty("width","0"),this.bottom?(e==null||e.style.setProperty("top","100%"),e==null||e.style.setProperty("transform","translateY(-100%)")):e==null||e.style.setProperty("top",`${o.top}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const o="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return p`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};vi.styles=[bt.scrollbar,S`
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
    `];let V=vi;Rt([It()],V.prototype,"_switchers",2);Rt([u({type:Boolean,reflect:!0})],V.prototype,"bottom",2);Rt([u({type:Boolean,attribute:"switchers-hidden",reflect:!0})],V.prototype,"switchersHidden",2);Rt([u({type:Boolean,reflect:!0})],V.prototype,"floating",2);Rt([u({type:String,reflect:!0})],V.prototype,"tab",1);Rt([u({type:Boolean,attribute:"switchers-full",reflect:!0})],V.prototype,"switchersFull",2);var ao=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,Se=(i,t,e,s)=>{for(var n=s>1?void 0:s?lo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ao(t,e,n),n};const yi=class yi extends E{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(t){this._label=t;const e=this.parentElement;e instanceof V&&e.updateSwitchers()}get label(){return this._label}set icon(t){this._icon=t;const e=this.parentElement;e instanceof V&&e.updateSwitchers()}get icon(){return this._icon}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return p` <slot></slot> `}};yi.styles=S`
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
  `;let L=yi;Se([u({type:String,reflect:!0})],L.prototype,"name",2);Se([u({type:String,reflect:!0})],L.prototype,"label",1);Se([u({type:String,reflect:!0})],L.prototype,"icon",1);Se([u({type:Boolean,reflect:!0})],L.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=i=>i??Yn;var co=Object.defineProperty,uo=Object.getOwnPropertyDescriptor,Y=(i,t,e,s)=>{for(var n=s>1?void 0:s?uo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&co(t,e,n),n};const xi=class xi extends E{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this.disabled=!1,this.resize="vertical",this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return qe(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return p`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?p` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              ?disabled=${this.disabled}
              placeholder=${Xi(this.placeholder)}
              @input=${this.onInputChange}
              style="resize: ${this.resize};"
            ></textarea>`:p` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              ?disabled=${this.disabled}
              placeholder=${Xi(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};xi.styles=[bt.scrollbar,S`
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
    `];let R=xi;Y([u({type:String,reflect:!0})],R.prototype,"icon",2);Y([u({type:String,reflect:!0})],R.prototype,"label",2);Y([u({type:String,reflect:!0})],R.prototype,"name",2);Y([u({type:String,reflect:!0})],R.prototype,"placeholder",2);Y([u({type:String,reflect:!0})],R.prototype,"value",2);Y([u({type:Boolean,reflect:!0})],R.prototype,"vertical",2);Y([u({type:Number,reflect:!0})],R.prototype,"debounce",2);Y([u({type:Number,reflect:!0})],R.prototype,"rows",2);Y([u({type:Boolean,reflect:!0})],R.prototype,"disabled",2);Y([u({type:String,reflect:!0})],R.prototype,"resize",2);Y([u({type:String,reflect:!0})],R.prototype,"type",1);var ho=Object.defineProperty,fo=Object.getOwnPropertyDescriptor,qn=(i,t,e,s)=>{for(var n=s>1?void 0:s?fo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ho(t,e,n),n};const wi=class wi extends E{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return p`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};wi.styles=S`
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
  `;let Lt=wi;qn([u({type:Number,reflect:!0})],Lt.prototype,"rows",2);qn([u({type:Boolean,reflect:!0})],Lt.prototype,"vertical",1);var po=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,Ee=(i,t,e,s)=>{for(var n=s>1?void 0:s?mo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&po(t,e,n),n};const _i=class _i extends E{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof Lt&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return p`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};_i.styles=S`
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
  `;let pt=_i;Ee([u({type:String,reflect:!0})],pt.prototype,"label",2);Ee([u({type:String,reflect:!0})],pt.prototype,"icon",2);Ee([u({type:Boolean,reflect:!0})],pt.prototype,"vertical",1);Ee([u({type:Boolean,attribute:"label-hidden",reflect:!0})],pt.prototype,"labelHidden",1);var bo=Object.defineProperty,go=Object.getOwnPropertyDescriptor,ei=(i,t,e,s)=>{for(var n=s>1?void 0:s?go(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&bo(t,e,n),n};const Ci=class Ci extends E{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof pt&&(e.labelHidden=this.vertical&&!Wt.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return p`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Ci.styles=S`
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
  `;let zt=Ci;ei([u({type:String,reflect:!0})],zt.prototype,"icon",2);ei([u({type:Boolean,attribute:"labels-hidden",reflect:!0})],zt.prototype,"labelsHidden",2);ei([u({type:Boolean,reflect:!0})],zt.prototype,"vertical",1);var vo=Object.defineProperty,yo=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&vo(t,e,n),n};const $i=class $i extends E{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return p`
      <div class="parent">
        <slot></slot>
      </div>
    `}};$i.styles=S`
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
  `;let me=$i;yo([u({type:String,reflect:!0})],me.prototype,"name");export{Ir as B,de as C,Wt as M,R as T,ct as a};
