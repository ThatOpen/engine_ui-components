var nh=Object.defineProperty;var oh=(i,t,e)=>t in i?nh(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var P=(i,t,e)=>(oh(i,typeof t!="symbol"?t+"":t,e),e);import{a as j,i as H,n as v,e as ei,b as Vt,r as kt,c as rh,d as ah,t as lh}from"./ref-B0YVjWyu.js";import{D as br,b as S,A as ie,E as ch}from"./lit-html-CgQwCkHV.js";const ii=Math.min,te=Math.max,$s=Math.round,ge=i=>({x:i,y:i}),hh={left:"right",right:"left",bottom:"top",top:"bottom"},dh={start:"end",end:"start"};function yr(i,t,e){return te(i,ii(t,e))}function Qi(i,t){return typeof i=="function"?i(t):i}function se(i){return i.split("-")[0]}function sn(i){return i.split("-")[1]}function ml(i){return i==="x"?"y":"x"}function gl(i){return i==="y"?"height":"width"}const uh=new Set(["top","bottom"]);function Gt(i){return uh.has(se(i))?"y":"x"}function bl(i){return ml(Gt(i))}function fh(i,t,e){e===void 0&&(e=!1);const s=sn(i),n=bl(i),o=gl(n);let r=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=Is(r)),[r,Is(r)]}function ph(i){const t=Is(i);return[Nn(i),t,Nn(t)]}function Nn(i){return i.replace(/start|end/g,t=>dh[t])}const vr=["left","right"],xr=["right","left"],mh=["top","bottom"],gh=["bottom","top"];function bh(i,t,e){switch(i){case"top":case"bottom":return e?t?xr:vr:t?vr:xr;case"left":case"right":return t?mh:gh;default:return[]}}function yh(i,t,e,s){const n=sn(i);let o=bh(se(i),e==="start",s);return n&&(o=o.map(r=>r+"-"+n),t&&(o=o.concat(o.map(Nn)))),o}function Is(i){return i.replace(/left|right|bottom|top/g,t=>hh[t])}function vh(i){return{top:0,right:0,bottom:0,left:0,...i}}function yl(i){return typeof i!="number"?vh(i):{top:i,right:i,bottom:i,left:i}}function si(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function _r(i,t,e){let{reference:s,floating:n}=i;const o=Gt(t),r=bl(t),a=gl(r),l=se(t),c=o==="y",h=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,u=s[a]/2-n[a]/2;let f;switch(l){case"top":f={x:h,y:s.y-n.height};break;case"bottom":f={x:h,y:s.y+s.height};break;case"right":f={x:s.x+s.width,y:d};break;case"left":f={x:s.x-n.width,y:d};break;default:f={x:s.x,y:s.y}}switch(sn(t)){case"start":f[r]-=u*(e&&c?-1:1);break;case"end":f[r]+=u*(e&&c?-1:1);break}return f}const xh=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:o=[],platform:r}=e,a=o.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:i,floating:t,strategy:n}),{x:h,y:d}=_r(c,s,l),u=s,f={},p=0;for(let m=0;m<a.length;m++){const{name:g,fn:b}=a[m],{x:y,y:w,data:_,reset:x}=await b({x:h,y:d,initialPlacement:s,placement:u,strategy:n,middlewareData:f,rects:c,platform:r,elements:{reference:i,floating:t}});h=y??h,d=w??d,f={...f,[g]:{...f[g],..._}},x&&p<=50&&(p++,typeof x=="object"&&(x.placement&&(u=x.placement),x.rects&&(c=x.rects===!0?await r.getElementRects({reference:i,floating:t,strategy:n}):x.rects),{x:h,y:d}=_r(c,u,l)),m=-1)}return{x:h,y:d,placement:u,strategy:n,middlewareData:f}};async function vl(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:o,rects:r,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:f=0}=Qi(t,i),p=yl(f),g=a[u?d==="floating"?"reference":"floating":d],b=si(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(g)))==null||e?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),y=d==="floating"?{x:s,y:n,width:r.floating.width,height:r.floating.height}:r.reference,w=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),_=await(o.isElement==null?void 0:o.isElement(w))?await(o.getScale==null?void 0:o.getScale(w))||{x:1,y:1}:{x:1,y:1},x=si(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:w,strategy:l}):y);return{top:(b.top-x.top+p.top)/_.y,bottom:(x.bottom-b.bottom+p.bottom)/_.y,left:(b.left-x.left+p.left)/_.x,right:(x.right-b.right+p.right)/_.x}}const _h=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...g}=Qi(i,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const b=se(n),y=Gt(a),w=se(a)===a,_=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=u||(w||!m?[Is(a)]:ph(a)),k=p!=="none";!u&&k&&x.push(...yh(a,m,p,_));const C=[a,...x],M=await vl(t,g),A=[];let D=((s=o.flip)==null?void 0:s.overflows)||[];if(h&&A.push(M[b]),d){const B=fh(n,r,_);A.push(M[B[0]],M[B[1]])}if(D=[...D,{placement:n,overflows:A}],!A.every(B=>B<=0)){var E,T;const B=(((E=o.flip)==null?void 0:E.index)||0)+1,z=C[B];if(z&&(!(d==="alignment"?y!==Gt(z):!1)||D.every(Y=>Gt(Y.placement)===y?Y.overflows[0]>0:!0)))return{data:{index:B,overflows:D},reset:{placement:z}};let R=(T=D.filter(V=>V.overflows[0]<=0).sort((V,Y)=>V.overflows[1]-Y.overflows[1])[0])==null?void 0:T.placement;if(!R)switch(f){case"bestFit":{var I;const V=(I=D.filter(Y=>{if(k){const q=Gt(Y.placement);return q===y||q==="y"}return!0}).map(Y=>[Y.placement,Y.overflows.filter(q=>q>0).reduce((q,le)=>q+le,0)]).sort((Y,q)=>Y[1]-q[1])[0])==null?void 0:I[0];V&&(R=V);break}case"initialPlacement":R=a;break}if(n!==R)return{reset:{placement:R}}}return{}}}};function xl(i){const t=ii(...i.map(o=>o.left)),e=ii(...i.map(o=>o.top)),s=te(...i.map(o=>o.right)),n=te(...i.map(o=>o.bottom));return{x:t,y:e,width:s-t,height:n-e}}function wh(i){const t=i.slice().sort((n,o)=>n.y-o.y),e=[];let s=null;for(let n=0;n<t.length;n++){const o=t[n];!s||o.y-s.y>s.height/2?e.push([o]):e[e.length-1].push(o),s=o}return e.map(n=>si(xl(n)))}const kh=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:o,strategy:r}=t,{padding:a=2,x:l,y:c}=Qi(i,t),h=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(s.reference))||[]),d=wh(h),u=si(xl(h)),f=yl(a);function p(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(g=>l>g.left-f.left&&l<g.right+f.right&&c>g.top-f.top&&c<g.bottom+f.bottom)||u;if(d.length>=2){if(Gt(e)==="y"){const D=d[0],E=d[d.length-1],T=se(e)==="top",I=D.top,B=E.bottom,z=T?D.left:E.left,R=T?D.right:E.right,V=R-z,Y=B-I;return{top:I,bottom:B,left:z,right:R,width:V,height:Y,x:z,y:I}}const g=se(e)==="left",b=te(...d.map(D=>D.right)),y=ii(...d.map(D=>D.left)),w=d.filter(D=>g?D.left===y:D.right===b),_=w[0].top,x=w[w.length-1].bottom,k=y,C=b,M=C-k,A=x-_;return{top:_,bottom:x,left:k,right:C,width:M,height:A,x:k,y:_}}return u}const m=await o.getElementRects({reference:{getBoundingClientRect:p},floating:s.floating,strategy:r});return n.reference.x!==m.reference.x||n.reference.y!==m.reference.y||n.reference.width!==m.reference.width||n.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}},Sh=new Set(["left","top"]);async function Ch(i,t){const{placement:e,platform:s,elements:n}=i,o=await(s.isRTL==null?void 0:s.isRTL(n.floating)),r=se(e),a=sn(e),l=Gt(e)==="y",c=Sh.has(r)?-1:1,h=o&&l?-1:1,d=Qi(t,i);let{mainAxis:u,crossAxis:f,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&typeof p=="number"&&(f=a==="end"?p*-1:p),l?{x:f*h,y:u*c}:{x:u*c,y:f*h}}const go=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:o,placement:r,middlewareData:a}=t,l=await Ch(t,i);return r===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:o+l.y,data:{...l,placement:r}}}}},Mh=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:o=!0,crossAxis:r=!1,limiter:a={fn:g=>{let{x:b,y}=g;return{x:b,y}}},...l}=Qi(i,t),c={x:e,y:s},h=await vl(t,l),d=Gt(se(n)),u=ml(d);let f=c[u],p=c[d];if(o){const g=u==="y"?"top":"left",b=u==="y"?"bottom":"right",y=f+h[g],w=f-h[b];f=yr(y,f,w)}if(r){const g=d==="y"?"top":"left",b=d==="y"?"bottom":"right",y=p+h[g],w=p-h[b];p=yr(y,p,w)}const m=a.fn({...t,[u]:f,[d]:p});return{...m,data:{x:m.x-e,y:m.y-s,enabled:{[u]:o,[d]:r}}}}}};function nn(){return typeof window<"u"}function be(i){return _l(i)?(i.nodeName||"").toLowerCase():"#document"}function Ct(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function ke(i){var t;return(t=(_l(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function _l(i){return nn()?i instanceof Node||i instanceof Ct(i).Node:!1}function jt(i){return nn()?i instanceof Element||i instanceof Ct(i).Element:!1}function Nt(i){return nn()?i instanceof HTMLElement||i instanceof Ct(i).HTMLElement:!1}function wr(i){return!nn()||typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof Ct(i).ShadowRoot}const Ph=new Set(["inline","contents"]);function Zi(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=At(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!Ph.has(n)}const Ah=new Set(["table","td","th"]);function Dh(i){return Ah.has(be(i))}const Eh=[":popover-open",":modal"];function Th(i){return Eh.some(t=>{try{return i.matches(t)}catch{return!1}})}const Oh=["transform","translate","scale","rotate","perspective"],Lh=["transform","translate","scale","rotate","perspective","filter"],Rh=["paint","layout","strict","content"];function bo(i){const t=yo(),e=jt(i)?At(i):i;return Oh.some(s=>e[s]?e[s]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||Lh.some(s=>(e.willChange||"").includes(s))||Rh.some(s=>(e.contain||"").includes(s))}function zh(i){let t=ni(i);for(;Nt(t)&&!on(t);){if(bo(t))return t;if(Th(t))return null;t=ni(t)}return null}function yo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const $h=new Set(["html","body","#document"]);function on(i){return $h.has(be(i))}function At(i){return Ct(i).getComputedStyle(i)}function rn(i){return jt(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function ni(i){if(be(i)==="html")return i;const t=i.assignedSlot||i.parentNode||wr(i)&&i.host||ke(i);return wr(t)?t.host:t}function wl(i){const t=ni(i);return on(t)?i.ownerDocument?i.ownerDocument.body:i.body:Nt(t)&&Zi(t)?t:wl(t)}function kl(i,t,e){var s;t===void 0&&(t=[]);const n=wl(i),o=n===((s=i.ownerDocument)==null?void 0:s.body),r=Ct(n);return o?(Ih(r),t.concat(r,r.visualViewport||[],Zi(n)?n:[],[])):t.concat(n,kl(n,[]))}function Ih(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function Sl(i){const t=At(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=Nt(i),o=n?i.offsetWidth:e,r=n?i.offsetHeight:s,a=$s(e)!==o||$s(s)!==r;return a&&(e=o,s=r),{width:e,height:s,$:a}}function Cl(i){return jt(i)?i:i.contextElement}function Je(i){const t=Cl(i);if(!Nt(t))return ge(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:o}=Sl(t);let r=(o?$s(e.width):e.width)/s,a=(o?$s(e.height):e.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const Fh=ge(0);function Ml(i){const t=Ct(i);return!yo()||!t.visualViewport?Fh:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bh(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==Ct(i)?!1:t}function Vi(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),o=Cl(i);let r=ge(1);t&&(s?jt(s)&&(r=Je(s)):r=Je(i));const a=Bh(o,e,s)?Ml(o):ge(0);let l=(n.left+a.x)/r.x,c=(n.top+a.y)/r.y,h=n.width/r.x,d=n.height/r.y;if(o){const u=Ct(o),f=s&&jt(s)?Ct(s):s;let p=u,m=p.frameElement;for(;m&&s&&f!==p;){const g=Je(m),b=m.getBoundingClientRect(),y=At(m),w=b.left+(m.clientLeft+parseFloat(y.paddingLeft))*g.x,_=b.top+(m.clientTop+parseFloat(y.paddingTop))*g.y;l*=g.x,c*=g.y,h*=g.x,d*=g.y,l+=w,c+=_,p=Ct(m),m=p.frameElement}}return si({width:h,height:d,x:l,y:c})}const Vh=[":popover-open",":modal"];function Pl(i){return Vh.some(t=>{try{return i.matches(t)}catch{return!1}})}function jh(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const o=n==="fixed",r=ke(s),a=t?Pl(t.floating):!1;if(s===r||a&&o)return e;let l={scrollLeft:0,scrollTop:0},c=ge(1);const h=ge(0),d=Nt(s);if((d||!d&&!o)&&((be(s)!=="body"||Zi(r))&&(l=rn(s)),Nt(s))){const u=Vi(s);c=Je(s),h.x=u.x+s.clientLeft,h.y=u.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+h.x,y:e.y*c.y-l.scrollTop*c.y+h.y}}function Nh(i){return Array.from(i.getClientRects())}function Al(i){return Vi(ke(i)).left+rn(i).scrollLeft}function Hh(i){const t=ke(i),e=rn(i),s=i.ownerDocument.body,n=te(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=te(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-e.scrollLeft+Al(i);const a=-e.scrollTop;return At(s).direction==="rtl"&&(r+=te(t.clientWidth,s.clientWidth)-n),{width:n,height:o,x:r,y:a}}function Wh(i,t){const e=Ct(i),s=ke(i),n=e.visualViewport;let o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(n){o=n.width,r=n.height;const c=yo();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:o,height:r,x:a,y:l}}function qh(i,t){const e=Vi(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,o=Nt(i)?Je(i):ge(1),r=i.clientWidth*o.x,a=i.clientHeight*o.y,l=n*o.x,c=s*o.y;return{width:r,height:a,x:l,y:c}}function kr(i,t,e){let s;if(t==="viewport")s=Wh(i,e);else if(t==="document")s=Hh(ke(i));else if(jt(t))s=qh(t,e);else{const n=Ml(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return si(s)}function Dl(i,t){const e=ni(i);return e===t||!jt(e)||on(e)?!1:At(e).position==="fixed"||Dl(e,t)}function Yh(i,t){const e=t.get(i);if(e)return e;let s=kl(i,[]).filter(a=>jt(a)&&be(a)!=="body"),n=null;const o=At(i).position==="fixed";let r=o?ni(i):i;for(;jt(r)&&!on(r);){const a=At(r),l=bo(r);!l&&a.position==="fixed"&&(n=null),(o?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Zi(r)&&!l&&Dl(i,r))?s=s.filter(h=>h!==r):n=a,r=ni(r)}return t.set(i,s),s}function Uh(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const r=[...e==="clippingAncestors"?Yh(t,this._c):[].concat(e),s],a=r[0],l=r.reduce((c,h)=>{const d=kr(t,h,n);return c.top=te(d.top,c.top),c.right=ii(d.right,c.right),c.bottom=ii(d.bottom,c.bottom),c.left=te(d.left,c.left),c},kr(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Xh(i){const{width:t,height:e}=Sl(i);return{width:t,height:e}}function Gh(i,t,e){const s=Nt(t),n=ke(t),o=e==="fixed",r=Vi(i,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=ge(0);if(s||!s&&!o)if((be(t)!=="body"||Zi(n))&&(a=rn(t)),s){const d=Vi(t,!0,o,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else n&&(l.x=Al(n));const c=r.left+a.scrollLeft-l.x,h=r.top+a.scrollTop-l.y;return{x:c,y:h,width:r.width,height:r.height}}function Sr(i,t){return!Nt(i)||At(i).position==="fixed"?null:t?t(i):i.offsetParent}function El(i,t){const e=Ct(i);if(!Nt(i)||Pl(i))return e;let s=Sr(i,t);for(;s&&Dh(s)&&At(s).position==="static";)s=Sr(s,t);return s&&(be(s)==="html"||be(s)==="body"&&At(s).position==="static"&&!bo(s))?e:s||zh(i)||e}const Kh=async function(i){const t=this.getOffsetParent||El,e=this.getDimensions;return{reference:Gh(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Qh(i){return At(i).direction==="rtl"}const Zh={convertOffsetParentRelativeRectToViewportRelativeRect:jh,getDocumentElement:ke,getClippingRect:Uh,getOffsetParent:El,getElementRects:Kh,getClientRects:Nh,getDimensions:Xh,getScale:Je,isElement:jt,isRTL:Qh},vo=Mh,xo=_h,_o=kh,wo=(i,t,e)=>{const s=new Map,n={platform:Zh,...e},o={...n.platform,_c:s};return xh(i,t,{...n,platform:o})};/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 3.0.1
*/const Tl=Object.freeze({left:0,top:0,width:16,height:16}),Fs=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Ji=Object.freeze({...Tl,...Fs}),Hn=Object.freeze({...Ji,body:"",hidden:!1}),Jh=Object.freeze({width:null,height:null}),Ol=Object.freeze({...Jh,...Fs});function td(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(i.slice(0,i.length-e.length));return isNaN(o)?0:(o=o/n,o%1===0?s(o):0)}}return t}const ed=/[\s,]+/;function id(i,t){t.split(ed).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const Ll={...Ol,preserveAspectRatio:""};function Cr(i){const t={...Ll},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=td(e("rotate","")),id(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function sd(i,t){for(const e in Ll)if(i[e]!==t[e])return!0;return!1}const Rl=/^[a-z0-9]+(-[a-z0-9]+)*$/,ts=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!Ms(c)?null:c}const o=n[0],r=o.split("-");if(r.length>1){const a={provider:s,prefix:r.shift(),name:r.join("-")};return t&&!Ms(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:o};return t&&!Ms(a,e)?null:a}return null},Ms=(i,t)=>i?!!((t&&i.prefix===""||i.prefix)&&i.name):!1;function nd(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function o(r){if(e[r])return n[r]=[];if(!(r in n)){n[r]=null;const a=s[r]&&s[r].parent,l=a&&o(a);l&&(n[r]=[a].concat(l))}return n[r]}return Object.keys(e).concat(Object.keys(s)).forEach(o),n}function od(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Mr(i,t){const e=od(i,t);for(const s in Hn)s in Fs?s in i&&!(s in e)&&(e[s]=Fs[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function rd(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let o={};function r(a){o=Mr(s[a]||n[a],o)}return r(t),e.forEach(r),Mr(i,o)}function zl(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=nd(i);for(const n in s){const o=s[n];o&&(t(n,rd(i,n,o)),e.push(n))}return e}const ad={provider:"",aliases:{},not_found:{},...Tl};function kn(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function $l(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!kn(i,ad))return null;const e=t.icons;for(const n in e){const o=e[n];if(!n||typeof o.body!="string"||!kn(o,Hn))return null}const s=t.aliases||Object.create(null);for(const n in s){const o=s[n],r=o.parent;if(!n||typeof r!="string"||!e[r]&&!s[r]||!kn(o,Hn))return null}return t}const Bs=Object.create(null);function ld(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function ne(i,t){const e=Bs[i]||(Bs[i]=Object.create(null));return e[t]||(e[t]=ld(i,t))}function Il(i,t){return $l(t)?zl(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function cd(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function hd(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(Bs)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Bs[n]||{})).forEach(r=>{const a=ne(n,r);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+r+":"+l))})}),e}let ji=!1;function Fl(i){return typeof i=="boolean"&&(ji=i),ji}function Ni(i){const t=typeof i=="string"?ts(i,!0,ji):i;if(t){const e=ne(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function Bl(i,t){const e=ts(i,!0,ji);if(!e)return!1;const s=ne(e.provider,e.prefix);return t?cd(s,e.name,t):(s.missing.add(e.name),!0)}function Pr(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),ji&&!t&&!i.prefix){let n=!1;return $l(i)&&(i.prefix="",zl(i,(o,r)=>{Bl(o,r)&&(n=!0)})),n}const e=i.prefix;if(!Ms({prefix:e,name:"a"}))return!1;const s=ne(t,e);return!!Il(s,i)}function dd(i){return!!Ni(i)}function ud(i){const t=Ni(i);return t&&{...Ji,...t}}function Vl(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function fd(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(o=>{const r=o.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])r.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))r.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),r.pending.length!==a&&(e||Vl([i],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let pd=0;function md(i,t,e){const s=pd++,n=Vl.bind(null,e,s);if(!t.pending.length)return n;const o={id:s,icons:t,callback:i,abort:n};return e.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),n}function gd(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const o=n.provider,r=n.prefix,a=n.name,l=e[o]||(e[o]=Object.create(null)),c=l[r]||(l[r]=ne(o,r));let h;a in c.icons?h=t.loaded:r===""||c.missing.has(a)?h=t.missing:h=t.pending;const d={provider:o,prefix:r,name:a};h.push(d)}),t}const Wn=Object.create(null);function Ar(i,t){Wn[i]=t}function qn(i){return Wn[i]||Wn[""]}function bd(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const o=typeof n=="string"?ts(n,t,e):n;o&&s.push(o)}),s}function ko(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const an=Object.create(null),yi=["https://api.simplesvg.com","https://api.unisvg.com"],Ps=[];for(;yi.length>0;)yi.length===1||Math.random()>.5?Ps.push(yi.shift()):Ps.push(yi.pop());an[""]=ko({resources:["https://api.iconify.design"].concat(Ps)});function Dr(i,t){const e=ko(t);return e===null?!1:(an[i]=e,!0)}function ln(i){return an[i]}function yd(){return Object.keys(an)}const vd={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function xd(i,t,e,s){const n=i.resources.length,o=i.random?Math.floor(Math.random()*n):i.index;let r;if(i.random){let k=i.resources.slice(0);for(r=[];k.length>1;){const C=Math.floor(Math.random()*k.length);r.push(k[C]),k=k.slice(0,C).concat(k.slice(C+1))}r=r.concat(k)}else r=i.resources.slice(o).concat(i.resources.slice(0,o));const a=Date.now();let l="pending",c=0,h,d=null,u=[],f=[];typeof s=="function"&&f.push(s);function p(){d&&(clearTimeout(d),d=null)}function m(){l==="pending"&&(l="aborted"),p(),u.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),u=[]}function g(k,C){C&&(f=[]),typeof k=="function"&&f.push(k)}function b(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:u.length,subscribe:g,abort:m}}function y(){l="failed",f.forEach(k=>{k(void 0,h)})}function w(){u.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),u=[]}function _(k,C,M){const A=C!=="success";switch(u=u.filter(D=>D!==k),l){case"pending":break;case"failed":if(A||!i.dataAfterTimeout)return;break;default:return}if(C==="abort"){h=M,y();return}if(A){h=M,u.length||(r.length?x():y());return}if(p(),w(),!i.random){const D=i.resources.indexOf(k.resource);D!==-1&&D!==i.index&&(i.index=D)}l="completed",f.forEach(D=>{D(M)})}function x(){if(l!=="pending")return;p();const k=r.shift();if(k===void 0){if(u.length){d=setTimeout(()=>{p(),l==="pending"&&(w(),y())},i.timeout);return}y();return}const C={status:"pending",resource:k,callback:(M,A)=>{_(C,M,A)}};u.push(C),c++,d=setTimeout(x,i.rotate),e(k,t,C.callback)}return setTimeout(x),b}function jl(i){const t={...vd,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const h=xd(t,a,l,(d,u)=>{s(),c&&c(d,u)});return e.push(h),h}function o(a){return e.find(l=>a(l))||null}return{query:n,find:o,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function Er(){}const Sn=Object.create(null);function _d(i){if(!Sn[i]){const t=ln(i);if(!t)return;const e=jl(t),s={config:t,redundancy:e};Sn[i]=s}return Sn[i]}function Nl(i,t,e){let s,n;if(typeof i=="string"){const o=qn(i);if(!o)return e(void 0,424),Er;n=o.send;const r=_d(i);r&&(s=r.redundancy)}else{const o=ko(i);if(o){s=jl(o);const r=i.resources?i.resources[0]:"",a=qn(r);a&&(n=a.send)}}return!s||!n?(e(void 0,424),Er):s.query(t,n,e)().abort}function Tr(){}function wd(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,fd(i)}))}function kd(i){const t=[],e=[];return i.forEach(s=>{(s.match(Rl)?t:e).push(s)}),{valid:t,invalid:e}}function vi(i,t,e){function s(){const n=i.pendingIcons;t.forEach(o=>{n&&n.delete(o),i.icons[o]||i.missing.add(o)})}if(e&&typeof e=="object")try{if(!Il(i,e).length){s();return}}catch(n){console.error(n)}s(),wd(i)}function Or(i,t){i instanceof Promise?i.then(e=>{t(e)}).catch(()=>{t(null)}):t(i)}function Sd(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;if(delete i.iconsToLoad,!n||!n.length)return;const o=i.loadIcon;if(i.loadIcons&&(n.length>1||!o)){Or(i.loadIcons(n,s,e),h=>{vi(i,n,h)});return}if(o){n.forEach(h=>{const d=o(h,s,e);Or(d,u=>{const f=u?{prefix:s,icons:{[h]:u}}:null;vi(i,[h],f)})});return}const{valid:r,invalid:a}=kd(n);if(a.length&&vi(i,a,null),!r.length)return;const l=s.match(Rl)?qn(e):null;if(!l){vi(i,r,null);return}l.prepare(e,s,r).forEach(h=>{Nl(e,h,d=>{vi(i,h.icons,d)})})}))}const So=(i,t)=>{const e=bd(i,!0,Fl()),s=gd(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Tr)}),()=>{l=!1}}const n=Object.create(null),o=[];let r,a;return s.pending.forEach(l=>{const{provider:c,prefix:h}=l;if(h===a&&c===r)return;r=c,a=h,o.push(ne(c,h));const d=n[c]||(n[c]=Object.create(null));d[h]||(d[h]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:h,name:d}=l,u=ne(c,h),f=u.pendingIcons||(u.pendingIcons=new Set);f.has(d)||(f.add(d),n[c][h].push(d))}),o.forEach(l=>{const c=n[l.provider][l.prefix];c.length&&Sd(l,c)}),t?md(t,s,o):Tr},Cd=i=>new Promise((t,e)=>{const s=typeof i=="string"?ts(i,!0):i;if(!s){e(i);return}So([s||i],n=>{if(n.length&&s){const o=Ni(s);if(o){t({...Ji,...o});return}}e(i)})});function Lr(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function Md(i,t){if(typeof i=="object")return{data:Lr(i),value:i};if(typeof i!="string")return{value:i};if(i.includes("{")){const o=Lr(i);if(o)return{data:o,value:i}}const e=ts(i,!0,!0);if(!e)return{value:i};const s=Ni(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=So([e],()=>t(i,e,Ni(e)));return{value:i,name:e,loading:n}}let Hl=!1;try{Hl=navigator.vendor.indexOf("Apple")===0}catch{}function Pd(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Hl||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const Ad=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Dd=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Yn(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(Ad);if(s===null||!s.length)return i;const n=[];let o=s.shift(),r=Dd.test(o);for(;;){if(r){const a=parseFloat(o);isNaN(a)?n.push(o):n.push(Math.ceil(a*t*e)/e)}else n.push(o);if(o=s.shift(),o===void 0)return n.join("");r=!r}}function Ed(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),o=i.indexOf("</"+t);if(n===-1||o===-1)break;const r=i.indexOf(">",o);if(r===-1)break;e+=i.slice(n+1,o).trim(),i=i.slice(0,s).trim()+i.slice(r+1)}return{defs:e,content:i}}function Td(i,t){return i?"<defs>"+i+"</defs>"+t:t}function Od(i,t,e){const s=Ed(i);return Td(s.defs,t+s.content+e)}const Ld=i=>i==="unset"||i==="undefined"||i==="none";function Wl(i,t){const e={...Ji,...i},s={...Ol,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let o=e.body;[e,s].forEach(m=>{const g=[],b=m.hFlip,y=m.vFlip;let w=m.rotate;b?y?w+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):y&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let _;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:_=n.height/2+n.top,g.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:_=n.width/2+n.left,g.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}w%2===1&&(n.left!==n.top&&(_=n.left,n.left=n.top,n.top=_),n.width!==n.height&&(_=n.width,n.width=n.height,n.height=_)),g.length&&(o=Od(o,'<g transform="'+g.join(" ")+'">',"</g>"))});const r=s.width,a=s.height,l=n.width,c=n.height;let h,d;r===null?(d=a===null?"1em":a==="auto"?c:a,h=Yn(d,l/c)):(h=r==="auto"?l:r,d=a===null?Yn(h,c/l):a==="auto"?c:a);const u={},f=(m,g)=>{Ld(g)||(u[m]=g.toString())};f("width",h),f("height",d);const p=[n.left,n.top,l,c];return u.viewBox=p.join(" "),{attributes:u,viewBox:p,body:o}}function Co(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function Rd(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function zd(i){return"data:image/svg+xml,"+Rd(i)}function ql(i){return'url("'+zd(i)+'")'}const $d=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let Vs=$d();function Id(i){Vs=i}function Fd(){return Vs}function Bd(i,t){const e=ln(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(r=>{n=Math.max(n,r.length)});const o=t+".json?icons=";s=e.maxURL-n-e.path.length-o.length}return s}function Vd(i){return i===404}const jd=(i,t,e)=>{const s=[],n=Bd(i,t),o="icons";let r={type:o,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(r),r={type:o,provider:i,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),s.push(r),s};function Nd(i){if(typeof i=="string"){const t=ln(i);if(t)return t.path}return"/"}const Hd=(i,t,e)=>{if(!Vs){e("abort",424);return}let s=Nd(t.provider);switch(t.type){case"icons":{const o=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;s+=o.slice(0,1)==="/"?o.slice(1):o;break}default:e("abort",400);return}let n=503;Vs(i+s).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{e(Vd(r)?"abort":"next",r)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?e("abort",o):e("next",n)});return}setTimeout(()=>{e("success",o)})}).catch(()=>{e("next",n)})},Wd={prepare:jd,send:Hd};function qd(i,t,e){ne(e||"",t).loadIcons=i}function Yd(i,t,e){ne(e||"",t).loadIcon=i}const Cn="data-style";let Yl="";function Ud(i){Yl=i}function Rr(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Cn));e||(e=document.createElement("style"),e.setAttribute(Cn,Cn),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block;margin:auto}"+Yl}function Ul(){Ar("",Wd),Fl(!0);let i;try{i=window}catch{}if(i){if(i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Pr(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const o=e[s];if(typeof o!="object"||!o||o.resources===void 0)continue;Dr(s,o)||console.error(n)}catch{console.error(n)}}}}return{iconLoaded:dd,getIcon:ud,listIcons:hd,addIcon:Bl,addCollection:Pr,calculateSize:Yn,buildIcon:Wl,iconToHTML:Co,svgToURL:ql,loadIcons:So,loadIcon:Cd,addAPIProvider:Dr,setCustomIconLoader:Yd,setCustomIconsLoader:qd,appendCustomStyle:Ud,_api:{getAPIConfig:ln,setAPIModule:Ar,sendAPIQuery:Nl,setFetch:Id,getFetch:Fd,listAPIProviders:yd}}}const Un={"background-color":"currentColor"},Xl={"background-color":"transparent"},zr={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},$r={"-webkit-mask":Un,mask:Un,background:Xl};for(const i in $r){const t=$r[i];for(const e in zr)t[i+"-"+e]=zr[e]}function Ir(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Xd(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const o=i.attributes,r=Co(n,{...o,width:t.width+"",height:t.height+""}),a=ql(r),l=s.style,c={"--svg":a,width:Ir(o.width),height:Ir(o.height),...e?Un:Xl};for(const h in c)l.setProperty(h,c[h]);return s}let Ei;function Gd(){try{Ei=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Ei=null}}function Kd(i){return Ei===void 0&&Gd(),Ei?Ei.createHTML(i):i}function Qd(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=Co(i.body,e);return t.innerHTML=Kd(n),t.firstChild}function Xn(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Fr(i,t){const e=t.icon.data,s=t.customisations,n=Wl(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const o=t.renderedMode;let r;switch(o){case"svg":r=Qd(n);break;default:r=Xd(n,{...Ji,...e},o==="mask")}const a=Xn(i);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):i.replaceChild(r,a):i.appendChild(r)}function Br(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Zd(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","noobserver","width","height","rotate","flip"],o=class extends e{constructor(){super();P(this,"_shadowRoot");P(this,"_initialised",!1);P(this,"_state");P(this,"_checkQueued",!1);P(this,"_connected",!1);P(this,"_observer",null);P(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=this.hasAttribute("inline");Rr(l,c),this._state=Br({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=this.hasAttribute("inline"),h=this._state;c!==h.inline&&(h.inline=c,Rr(this._shadowRoot,c));break}case"noobserver":{this.hasAttribute("noobserver")?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return this.hasAttribute("inline")}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Fr(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const h=this.getAttribute("mode"),d=Cr(this);(l.attrMode!==h||sd(l.customisations,d)||!Xn(this._shadowRoot))&&this._renderIcon(l.icon,d,h)}_iconChanged(l){const c=Md(l,(h,d,u)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==h)return;const p={value:h,name:d,data:u};p.data?this._gotIconData(p):f.icon=p});c.data?this._gotIconData(c):this._state=Br(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=Xn(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Cr(this),this.getAttribute("mode"))}_renderIcon(l,c,h){const d=Pd(l.data.body,h),u=this._state.inline;Fr(this._shadowRoot,this._state={rendered:!0,icon:l,inline:u,customisations:c,attrMode:h,renderedMode:d})}startObserver(){if(!this._observer&&!this.hasAttribute("noobserver"))try{this._observer=new IntersectionObserver(l=>{const c=l.some(h=>h.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in o.prototype||Object.defineProperty(o.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=Ul();for(const a in r)o[a]=o.prototype[a]=r[a];return t.define(i,o),o}const Jd=Zd()||Ul(),{iconLoaded:Jy,getIcon:tv,listIcons:ev,addIcon:iv,addCollection:tu,calculateSize:sv,buildIcon:nv,iconToHTML:ov,svgToURL:rv,loadIcons:eu,loadIcon:av,setCustomIconLoader:lv,setCustomIconsLoader:cv,addAPIProvider:hv,_api:dv}=Jd,iu=j`
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
    background-color: var(--bim-scrollbar--bgc, var(--bim-ui_bg-contrast-40));
  }
`,su=j`
  :root {
    /* Grayscale Colors */
    --bim-ui_gray-0: #19191E; /* app background */
    --bim-ui_gray-1: #262528; /* bg dark search */
    --bim-ui_gray-2: #262629; /* card background */
    --bim-ui_gray-3: #2E2E2E; /* dark background */
    --bim-ui_gray-4: #323237; /* bg default tabs */
    --bim-ui_gray-5: #353538; /* tooltip windows */
    --bim-ui_gray-6: #3C3C41; /* button grey bg */
    --bim-ui_gray-7: #787878; /* default */
    --bim-ui_gray-8: #ADADAD; /* icon - secondary text */
    --bim-ui_gray-9: #d5d5d5;
    --bim-ui_gray-10: #f1f2f4;

    /* Brand Colors */
    --bim-ui_main-base: #6528d7;
    --bim-ui_accent-base: #bcf124;

    /* Brand Colors Contrasts */
    --bim-ui_main-contrast: var(--bim-ui_gray-10);
    --bim-ui_accent-contrast: var(--bim-ui_gray-0);

    /* Sizes */
    --bim-ui_size-4xs: 0.375rem; /* 6px */
    --bim-ui_size-3xs: 0.375rem; /* 6px */
    --bim-ui_size-2xs: 0.5rem; /* 8px */
    --bim-ui_size-xs: 0.625rem; /* 10px */
    --bim-ui_size-sm: 0.75rem; /* 12px */
    --bim-ui_size-base: 0.875rem; /* 14px */
    --bim-ui_size-lg: 1rem; /* 16px */
    --bim-ui_size-xl: 1.125rem; /* 18px */
    --bim-ui_size-2xl: 1.25rem; /* 20px */
    --bim-ui_size-3xl: 1.375rem; /* 22px */
    --bim-ui_size-4xl: 1.5rem; /* 24px */
    --bim-ui_size-5xl: 1.625rem; /* 26px */
    --bim-ui_size-6xl: 1.75rem; /* 28px */
    --bim-ui_size-7xl: 1.875rem; /* 30px */
    --bim-ui_size-8xl: 2rem; /* 32px */
    --bim-ui_size-9xl: 2.125rem; /* 34px */
    --bim-ui_size-10xl: 2.25rem; /* 36px */
    --bim-ui_size-11xl: 2.375rem; /* 38px */
    --bim-ui_size-12xl: 2.5rem; /* 40px */
    --bim-ui_size-13xl: 2.625rem; /* 42px */
    --bim-ui_size-14xl: 2.75rem; /* 44px */
    --bim-ui_size-15xl: 2.875rem; /* 46px */
    --bim-ui_size-16xl: 3rem; /* 48px */
    --bim-ui_size-17xl: 3.125rem; /* 50px */
    --bim-ui_size-18xl: 3.25rem; /* 52px */
    --bim-ui_size-19xl: 3.375rem; /* 54px */
    --bim-ui_size-20xl: 3.5rem; /* 56px */
    --bim-ui_size-21xl: 3.625rem; /* 58px */
    --bim-ui_size-22xl: 3.75rem; /* 60px */
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
`,Se={scrollbar:iu,globalStyles:su},$=class ${static set config(t){this._config={...$._config,...t}}static get config(){return $._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Se.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static preloadIcons(t,e=!1){eu(t,(s,n,o)=>{e&&(console.log("Icons loaded:",s),n.length&&console.warn("Icons missing:",n),o.length&&console.info("Icons pending:",o))})}static addIconsCollection(t,e){tu({prefix:(e==null?void 0:e.prefix)??"bim",icons:t,width:24,height:24})}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){$.init()}static init(t="",e=!0){$.addGlobalStyles(),$.defineCustomElement("bim-button",hu),$.defineCustomElement("bim-checkbox",ye),$.defineCustomElement("bim-color-input",Ht),$.defineCustomElement("bim-context-menu",As),$.defineCustomElement("bim-dropdown",_t),$.defineCustomElement("bim-grid",je),$.defineCustomElement("bim-icon",Kn),$.defineCustomElement("bim-input",Ne),$.defineCustomElement("bim-label",pi),$.defineCustomElement("bim-number-input",bt),$.defineCustomElement("bim-option",J),$.defineCustomElement("bim-panel",oe),$.defineCustomElement("bim-panel-section",ve),$.defineCustomElement("bim-selector",re),$.defineCustomElement("bim-table",Ws),$.defineCustomElement("bim-tabs",Dt),$.defineCustomElement("bim-tab",gt),$.defineCustomElement("bim-table-cell",Ns),$.defineCustomElement("bim-table-children",Zn),$.defineCustomElement("bim-table-group",Hs),$.defineCustomElement("bim-table-row",He),$.defineCustomElement("bim-text-input",wt),$.defineCustomElement("bim-toolbar",li),$.defineCustomElement("bim-toolbar-group",ai),$.defineCustomElement("bim-toolbar-section",xe),$.defineCustomElement("bim-viewport",qs),$.defineCustomElement("bim-chart-legend",Ys),$.defineCustomElement("bim-chart",Z),$.defineCustomElement("bim-tooltip",Yy),$.defineCustomElement("bim-slider",it),$.defineCustomElement("bim-paper-space",pt),e&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}static animateOnLoad(t=""){const e=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,s=[];function n(o,r=document,a=new Set){const l=[];return Array.from(r.querySelectorAll(o)).forEach(d=>{a.has(d)||(a.add(d),l.push(d))}),Array.from(r.querySelectorAll("*")).filter(d=>d.shadowRoot).forEach(d=>{a.has(d)||(a.add(d),l.push(...n(o,d.shadowRoot,a)))}),l}requestAnimationFrame(()=>{n(t||e).forEach(a=>{const l=a;let c="auto";c=window.getComputedStyle(l).getPropertyValue("transition"),l.style.setProperty("opacity","0"),l.style.setProperty("transition","none"),requestAnimationFrame(()=>{l.style.setProperty("transition",c)}),s.push(l)});const r=()=>{s.forEach(a=>{const l=a,c=(l.getBoundingClientRect().x+l.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),h=window.getComputedStyle(l).getPropertyValue("transform"),d=400,u=200+c*1e3;l.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:d,easing:"ease-in-out",delay:u}),setTimeout(()=>{l.style.removeProperty("opacity"),h!=="none"?l.style.setProperty("transform",h):l.style.removeProperty("transform")},u+d)})};document.readyState==="complete"?r():window.addEventListener("load",r)})}static toggleTheme(t=!0){const e=document.querySelector("html");if(!e)return;const s=()=>{e.classList.contains("bim-ui-dark")?e.classList.replace("bim-ui-dark","bim-ui-light"):e.classList.contains("bim-ui-light")?e.classList.replace("bim-ui-light","bim-ui-dark"):e.classList.add("bim-ui-light")};if(t){const o=document.createElement("div");o.classList.add("theme-transition-overlay");const r=document.createElement("div");o.appendChild(r),r.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(o),o.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),r.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{s()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(l=>{document.body.removeChild(l)})},1e3)}else s()}};$._config={sectionLabelOnVerticalToolbar:!1,internalComponentNameAttribute:"bim-element-name"};let oi=$;class ri extends H{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][o];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return br(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const o=t,r=c=>(n={...n,...c},br(o(n,r),s),n);r(e);const a=s.firstElementChild,l={getElement:c=>a.querySelector(`[data-${oi.config.internalComponentNameAttribute}="${c}"]`),getCurrentState:()=>n,dispose:()=>{a.remove(),n={},l.updates={}},updates:{}};return[a,r,l]}}const js=(i,t={},e=!0)=>{let s={};for(const n of i.children){const o=n,r=o.getAttribute("name")||o.getAttribute("label"),a=r?t[r]:void 0;if(r){if("value"in o&&typeof o.value<"u"&&o.value!==null){const l=o.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;s[r]=a?a(o.value):o.value}else if(e){const l=js(o,t);if(Object.keys(l).length===0)continue;s[r]=a?a(l):l}}else e&&(s={...s,...js(o,t)})}return s},cn=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,nu=[">=","<=","=",">","<","?","/","#"];function Vr(i){const t=nu.find(a=>i.split(a).length===2),e=i.split(t).map(a=>a.trim()),[s,n]=e,o=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):cn(n);return{key:s,condition:t,value:o}}const Gn=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),o=s.startsWith("(")&&s.endsWith(")");if(n){const r=Vr(s);t.push(r)}if(o){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(h=>h.trim()).map((h,d)=>{const u=Vr(h);return d>0&&(u.operator="&"),u})};t.push(c)}}return t}catch{return null}},jr=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};let De=class{constructor(){this.enabled=!0,this.trigger=t=>{if(!this.enabled)return;const e=this.handlers.slice(0);for(const s of e)s(t)},this.handlers=[]}add(t){this.handlers.push(t)}remove(t){this.handlers=this.handlers.filter(e=>e!==t)}reset(){this.handlers.length=0}};class ou extends Set{constructor(t){super(t),this.onUpdated=new De,this.onItemAdded=new De,this.onBeforeDelete=new De,this.onItemDeleted=new De,this.onCleared=new De,this.guard=()=>!0,this.deleteGuard=()=>!0}set eventsEnabled(t){this.onUpdated.enabled=t,this.onItemAdded.enabled=t,this.onItemDeleted.enabled=t,this.onBeforeDelete.enabled=t,this.onCleared.enabled=t}clear(){for(const t of this)this.onBeforeDelete.trigger(t);super.clear(),this.onCleared.trigger(),this.onUpdated.trigger()}add(...t){for(const e of t)this.has(e)||!(this.guard??(()=>!0))(e)||(super.add(e),this.onItemAdded||(this.onItemAdded=new De),this.onItemAdded.trigger(e));return this.onUpdated||(this.onUpdated=new De),this.onUpdated.trigger(),this}delete(t){if(!this.has(t)||!this.deleteGuard(t))return!1;this.onBeforeDelete.trigger(t);const s=super.delete(t);return s&&(this.onItemDeleted.trigger(t),this.onUpdated.trigger()),s}deleteIf(t){for(const e of this)t(e)&&this.delete(e)}getIndex(t){let e=0;for(const s of this){if(s===t)return e;e++}return-1}dispose(){this.clear(),this.onItemAdded.reset(),this.onItemDeleted.reset(),this.onCleared.reset(),this.onBeforeDelete.reset(),this.onUpdated.reset()}}var ru=Object.defineProperty,au=Object.getOwnPropertyDescriptor,Gl=(i,t,e,s)=>{for(var n=au(t,e),o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&ru(t,e,n),n},ot;const Mo=(ot=class extends H{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of[...ot.dialog.children])t instanceof ot&&(t.remove(),t.visible=!1);setTimeout(()=>{ot.dialog.close(),ot.dialog.remove()},310)}get visible(){return this._visible}set visible(t){this._visible=t,t?(ot.dialog.parentElement||document.body.append(ot.dialog),this._previousContainer=this.parentElement,ot.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),ot.dialog.append(this),ot.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var e;(e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await wo(this._previousContainer,this,{placement:t,middleware:[go(10),_o(),xo(),vo({padding:5})]}),{x:s,y:n}=e;this.style.left=`${s}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("display","none"),this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return S` <slot></slot> `}},ot.styles=[Se.scrollbar,j`
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
    `],ot.dialog=ri.create(()=>S` <dialog
      @click=${e=>{e.target===ot.dialog&&ot.removeMenus()}}
      @cancel=${()=>ot.removeMenus()}
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
    ></dialog>`),ot);Gl([v({type:String,reflect:!0})],Mo.prototype,"placement");Gl([v({type:Boolean,reflect:!0})],Mo.prototype,"visible");let As=Mo;var lu=Object.defineProperty,cu=Object.getOwnPropertyDescriptor,Rt=(i,t,e,s)=>{for(var n=s>1?void 0:s?cu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&lu(t,e,n),n},Ve;const Et=(Ve=class extends H{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=ei(),this._tooltip=ei(),this._mouseLeave=!1,this.onClick=t=>{t.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{let t=this._contextMenu;if(this.contextMenuTemplate){const e=this.disabled;this.disabled=!0,t=ri.create(()=>{const s=ri.create(this.contextMenuTemplate);return s instanceof As?S`${s}`:S`
          <bim-context-menu>${s}</bim-context-menu>
          `}),this.append(t),t.addEventListener("hidden",()=>{t==null||t.remove()}),this.disabled=e}if(t){const e=this.getAttribute("data-context-group");e&&t.setAttribute("data-context-group",e),this.closeNestedContexts();const s=oi.newRandomId();for(const n of t.children)n instanceof Ve&&n.setAttribute("data-context-group",s);t.visible=!0}},this.mouseLeave=!0}set loading(t){if(this._loading=t,t)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=t,this.icon="eos-icons:loading";else{const{disabled:e,icon:s}=this._stateBeforeLoading;this.disabled=e,this.icon=s}}get loading(){return this._loading}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&wo(t,e,{placement:"bottom",middleware:[go(10),_o(),xo(),vo({padding:5})]}).then(s=>{const{x:n,y:o}=s;Object.assign(e.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}closeNestedContexts(){const t=this.getAttribute("data-context-group");if(t)for(const e of As.dialog.children){const s=e.getAttribute("data-context-group");if(e instanceof As&&s===t){e.visible=!1,e.removeAttribute("data-context-group");for(const n of e.children)n instanceof Ve&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const t=S`
      <div ${Vt(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?S`<bim-label style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </bim-label>`:null}
        ${this.tooltipText?S`<bim-label style="width: 9rem; white-space: normal;">${this.tooltipText}</bim-label>`:null}
      </div>
    `;let e=S`${this.label}`;if((this._contextMenu||this.contextMenuTemplate)&&this.label){const s=S`<svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.125rem"
        viewBox="0 0 24 24"
        width="1.125rem"
        style="fill: var(--bim-label--c)"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>`;e=S`
        <div style="display: flex; align-items: center;">
          ${this.label}
          ${s}
        </div>
      `}return S`
      <div ${Vt(this._parent)} class="parent" @click=${this.onClick}>
        ${this.label||this.icon?S`
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
    `}},Ve.styles=j`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-60));
      border-radius: var(--bim-ui_size-2xs);
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
      min-height: var(--bim-ui_size-10xl);
      min-width: var(--bim-ui_size-10xl);
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
      padding: 0 var(--bim-ui_size-sm);
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
      background-color: var(--bim-ui_bg-contrast-50);
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
  `,Ve);Rt([v({type:String,reflect:!0})],Et.prototype,"label",2);Rt([v({type:Boolean,attribute:"label-hidden",reflect:!0})],Et.prototype,"labelHidden",2);Rt([v({type:Boolean,reflect:!0})],Et.prototype,"active",2);Rt([v({type:Boolean,reflect:!0,attribute:"disabled"})],Et.prototype,"disabled",2);Rt([v({type:String,reflect:!0})],Et.prototype,"icon",2);Rt([v({type:Boolean,reflect:!0})],Et.prototype,"vertical",2);Rt([v({type:Number,attribute:"tooltip-time",reflect:!0})],Et.prototype,"tooltipTime",2);Rt([v({type:Boolean,attribute:"tooltip-visible",reflect:!0})],Et.prototype,"tooltipVisible",2);Rt([v({type:String,attribute:"tooltip-title",reflect:!0})],Et.prototype,"tooltipTitle",2);Rt([v({type:String,attribute:"tooltip-text",reflect:!0})],Et.prototype,"tooltipText",2);Rt([v({type:Boolean,reflect:!0})],Et.prototype,"loading",1);let hu=Et;var du=Object.defineProperty,es=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&du(t,e,n),n};const Yo=class Yo extends H{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){const t=S`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return S`
      <div class="parent">
        <label class="parent-label">
          ${this.label?S`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
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
    `}};Yo.styles=j`
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
  `;let ye=Yo;es([v({type:String,reflect:!0})],ye.prototype,"icon");es([v({type:String,reflect:!0})],ye.prototype,"name");es([v({type:String,reflect:!0})],ye.prototype,"label");es([v({type:Boolean,reflect:!0})],ye.prototype,"checked");es([v({type:Boolean,reflect:!0})],ye.prototype,"inverted");var uu=Object.defineProperty,Ye=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&uu(t,e,n),n};const Uo=class Uo extends H{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this.disabled=!1,this._colorInput=ei(),this._textInput=ei(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return S`
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
                ${Vt(this._colorInput)}
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
                ${Vt(this._textInput)}
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
    `}};Uo.styles=j`
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
  `;let Ht=Uo;Ye([v({type:String,reflect:!0})],Ht.prototype,"name");Ye([v({type:String,reflect:!0})],Ht.prototype,"label");Ye([v({type:String,reflect:!0})],Ht.prototype,"icon");Ye([v({type:Boolean,reflect:!0})],Ht.prototype,"vertical");Ye([v({type:Number,reflect:!0})],Ht.prototype,"opacity");Ye([v({type:String,reflect:!0})],Ht.prototype,"color");Ye([v({type:Boolean,reflect:!0})],Ht.prototype,"disabled");var fu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,Ce=(i,t,e,s)=>{for(var n=s>1?void 0:s?pu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&fu(t,e,n),n};const Xo=class Xo extends H{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?cn(this.label):this.label}set value(t){this._value=t}render(){return S`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?S` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?S`<bim-checkbox
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
        ${!this.checkbox&&!this.noMark&&this.checked?S`<svg
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
    `}};Xo.styles=j`
    :host {
      display: block;
      box-sizing: border-box;
      flex: 1;
      padding: 0rem 0.5rem;
      border-radius: var(--bim-ui_size-4xs);
      transition: all 0.15s;
      height: 100%;
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
  `;let J=Xo;Ce([v({type:String,reflect:!0})],J.prototype,"img",2);Ce([v({type:String,reflect:!0})],J.prototype,"label",2);Ce([v({type:String,reflect:!0})],J.prototype,"icon",2);Ce([v({type:Boolean,reflect:!0})],J.prototype,"checked",2);Ce([v({type:Boolean,reflect:!0})],J.prototype,"checkbox",2);Ce([v({type:Boolean,attribute:"no-mark",reflect:!0})],J.prototype,"noMark",2);Ce([v({converter:{fromAttribute(i){return i&&cn(i)}}})],J.prototype,"value",1);Ce([v({type:Boolean,reflect:!0})],J.prototype,"vertical",2);var mu=Object.defineProperty,gu=Object.getOwnPropertyDescriptor,zt=(i,t,e,s)=>{for(var n=s>1?void 0:s?gu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&mu(t,e,n),n};const Go=class Go extends ri{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this._hasVisibleOptions=!0,this.onValueChange=new Event("change"),this._contextMenu=ei(),this.onOptionClick=t=>{const e=t.target,s=this._value.has(e);if(!this.multiple&&!this.required&&!s)this._value=new Set([e]);else if(!this.multiple&&!this.required&&s)this._value=new Set([]);else if(!this.multiple&&this.required&&!s)this._value=new Set([e]);else if(this.multiple&&!this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&s){const n=[...this._value].filter(o=>o!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&s){const n=[...this._value].filter(r=>r!==e),o=new Set(n);o.size!==0&&(this._value=o)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.onSearch=({target:t})=>{const e=t.value.toLowerCase();let s=0;for(const n of this._options){if(!(n instanceof J))continue;(n.label||n.value||"").toLowerCase().includes(e)?(n.style.display="",s++):n.style.display="none"}this._hasVisibleOptions=s>0},this.useObserver=!0}set visible(t){var e;if(t){const{value:s}=this._contextMenu;if(!s)return;for(const n of this.elements)s.append(n);this._visible=!0}else{for(const n of this.elements)this.append(n);this._visible=!1,this.resetVisibleElements();for(const n of this._options)n instanceof J&&(n.style.display="");const s=(e=this._contextMenu.value)==null?void 0:e.querySelector("bim-text-input");s&&(s.value=""),this._hasVisibleOptions=!0}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const s of t){const n=this.findOption(s);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof J&&e.checked).map(e=>e.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof J&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const s=new Set;for(const n of this.elements){if(!(n instanceof J)){n.remove();continue}n.checked&&s.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=s}updateOptionsState(){for(const t of this._options)t instanceof J&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(s=>s instanceof J?s.label===t||s.value===t:!1)}render(){let t,e,s;if(this._value.size===0)t=this.placeholder??"Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.size})`;return S`
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
            ${Vt(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            ${this.searchBox?S`<bim-text-input @input=${this.onSearch} placeholder="Search..." debounce=200 style="--bim-input--bgc: var(--bim-ui_bg-contrast-30)"></bim-text-input>`:ie}
            <slot @slotchange=${this.onSlotChange}></slot>
            ${this._hasVisibleOptions?ie:S`<bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-60); padding: 0.5rem;">No options found...</bim-label>`}
          </bim-context-menu>
        </div>
      </bim-input>
    `}};Go.styles=[Se.scrollbar,j`
      :host {
        --bim-input--olw: 2px;
        --bim-input--olc: transparent;
        --bim-input--bdrs: var(--bim-ui_size-4xs);
        /* flex: 1; */
        display: block;
      }

      :host([visible]) {
        --bim-input--olc: var(--bim-ui_accent-base);
      }

      .input {
        --bim-label--fz: var(--bim-ui_size-sm);
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
    `];let _t=Go;zt([v({type:String,reflect:!0})],_t.prototype,"name",2);zt([v({type:String,reflect:!0})],_t.prototype,"icon",2);zt([v({type:String,reflect:!0})],_t.prototype,"label",2);zt([v({type:Boolean,reflect:!0})],_t.prototype,"multiple",2);zt([v({type:Boolean,reflect:!0})],_t.prototype,"required",2);zt([v({type:Boolean,reflect:!0})],_t.prototype,"vertical",2);zt([v({type:String,reflect:!0})],_t.prototype,"placeholder",2);zt([v({type:Boolean,reflect:!0,attribute:"search-box"})],_t.prototype,"searchBox",2);zt([v({type:Boolean,reflect:!0})],_t.prototype,"visible",1);zt([kt()],_t.prototype,"_value",2);zt([kt()],_t.prototype,"_hasVisibleOptions",2);function Nr(i){const t=[];let e="",s=0;for(const n of i)n==="["||n==="("?(s++,e+=n):n==="]"||n===")"?(s--,e+=n):n===" "&&s===0?e!==""&&(t.push(e==="."?null:e),e=""):e+=n;return e!==""&&t.push(e==="."?null:e),t}function Kl(i){const t=[],e=/(["'])(.*?)\1/g;let s;for(;(s=e.exec(i))!==null;){const n=s[2].trim();if(n===""){t.push([]);continue}t.push(Nr(n))}if(t.length===0){const n=i.split(/\r?\n/).map(o=>o.trim()).filter(Boolean);for(const o of n){const r=o.replace(/^["']|["']$/g,"").trim();r&&t.push(Nr(r))}}return t}function bu(i){const t=Kl(i),e=new Set;for(const s of t)for(const n of s)n!==null&&n!==""&&e.add(n);return[...e]}function yu(i){var n;const t=[],e=i.length,s=((n=i[0])==null?void 0:n.length)||0;for(let o=0;o<e;o++)for(let r=0;r<s-1;r++){const a=i[o][r],l=i[o][r+1];if(a!==l){const c=t.find(h=>h.type==="vertical"&&h.from[0]===r+1&&h.to[0]===r+1&&h.from[1]<=o&&h.to[1]>=o);c?(c.to[1]=o+1,c.left&&a&&c.left.push(a),c.right&&l&&c.right.push(l)):t.push({type:"vertical",from:[r+1,o],to:[r+1,o+1],left:a?[a]:[],right:l?[l]:[]})}}for(let o=0;o<e-1;o++)for(let r=0;r<s;r++){const a=i[o][r],l=i[o+1][r];if(a!==l){const c=t.find(h=>h.type==="horizontal"&&h.from[1]===o+1&&h.to[1]===o+1&&h.from[0]<=r&&h.to[0]>=r);c?(c.to[0]=r+1,c.above&&a&&c.above.push(a),c.below&&l&&c.below.push(l)):t.push({type:"horizontal",from:[r,o+1],to:[r+1,o+1],above:a?[a]:[],below:l?[l]:[]})}}return vu(t)}function vu(i){for(const t of i)t.left&&(t.left=[...new Set(t.left)]),t.right&&(t.right=[...new Set(t.right)]),t.above&&(t.above=[...new Set(t.above)]),t.below&&(t.below=[...new Set(t.below)]);return i}function xu(i,t,e,s){const o=(parseFloat(i.colSizesComputed[e-1])||0)+t;let r;return r=(parseFloat(i.colSizesComputed[e])||0)-t,{left:o,right:r}}function _u(i,t,e,s){const o=(parseFloat(i.rowSizesComputed[e-1])||0)+t;let r;return r=(parseFloat(i.rowSizesComputed[e])||0)-t,{top:o,bottom:r}}function wu(i,t,e,s){return!(i<s&&e<0||t<s&&e>0)}function ku(i,t,e,s){return!(i<s&&e<0||t<s&&e>0)}function Su(i,t){const[e,s]=i.from,[n,o]=i.to,r=t.gap.split(" "),a=r[1]||r[0]||"0px",l=r[0]||"0px",c=i.type==="horizontal"?"0":`calc(-50% - ${a} / 2)`,h=i.type==="horizontal"?`calc(-50% - ${l} / 2)`:"0",d={"grid-column":`${e+1} / ${n+1}`,"grid-row":`${s+1} / ${o+1}`,transform:`translate(${c}, ${h})`},u=parseFloat(t.fontSize);return i.type==="vertical"?d.width=`${Math.max(parseFloat(a),u)}px`:d.height=`${Math.max(parseFloat(l),u)}px`,d}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ql="important",Cu=" !"+Ql,$e=rh(class extends ah{constructor(i){var t;if(super(i),i.type!==lh.ATTRIBUTE||i.name!=="style"||((t=i.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{const s=i[e];return s==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(i,[t]){const{style:e}=i.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const s of this.ft)t[s]==null&&(this.ft.delete(s),s.includes("-")?e.removeProperty(s):e[s]=null);for(const s in t){const n=t[s];if(n!=null){this.ft.add(s);const o=typeof n=="string"&&n.endsWith(Cu);s.includes("-")||o?e.setProperty(s,o?n.slice(0,-11):n,o?Ql:""):e[s]=n}}return ch}});var Mu=Object.defineProperty,hn=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Mu(t,e,n),n};const Ko=class Ko extends H{constructor(){super(...arguments),this.floating=!1,this.resizeableAreas=!1,this.areasResizeExceptions=[],this._layouts={},this._elements={},this.areaGroups={},this._templateIds=new Map,this._updateFunctions={},this._slotNames={notAllowed:"not-allowed",notFound:"not-found",emptyLayout:"empty-layout"},this._colSizesRaw=[],this._rowSizesRaw=[],this._colSizesComputed=[],this._rowSizesComputed=[],this._start=null,this.layoutsResize={},this._onMouseMove=t=>{if(!this._start||!this.layout)return;const e=t.clientX-this._start.x,s=t.clientY-this._start.y,n=this._start.divider,o=getComputedStyle(this),r=parseFloat(o.fontSize)*3;if(n.type==="vertical"){const a=n.from[0],c=this._colSizesRaw.length-1,h=a===c,d=xu(this._start,e,a,h);if(!wu(d.left,d.right,e,r))return;const u=Math.max(r,d.left),f=Math.max(r,d.right);this._colSizesRaw[a-1]=`${u}px`,this._colSizesRaw[a]=h?"1fr":`${f}px`,this.style.gridTemplateColumns=this._colSizesRaw.join(" ")}if(n.type==="horizontal"){const a=n.from[1],c=this._rowSizesRaw.length-1,h=a===c,d=_u(this._start,s,a,h);if(!ku(d.top,d.bottom,s,r))return;const u=Math.max(r,d.top),f=Math.max(r,d.bottom);this._rowSizesRaw[a-1]=`${u}px`,this._rowSizesRaw[a]=h?"1fr":`${f}px`,this.style.gridTemplateRows=this._rowSizesRaw.join(" ")}this.layoutsResize[this.layout]={cols:this._colSizesRaw,rows:this._rowSizesRaw}},this._onMouseUp=()=>{window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),this._start=null},this.updateComponent={},this.emitLayoutChange=()=>{this.dispatchEvent(new Event("layoutchange"))}}set layouts(t){this._layouts=t,this._templateIds.clear()}get layouts(){return this._layouts}set elements(t){this._elements=t,this.setUpdateFunctions()}get elements(){return this._elements}getLayoutAreas(t){return bu(t.template)}setUpdateFunctions(){const t={};for(const[e,s]of Object.entries(this.elements))"template"in s&&(t[e]=n=>{var o,r;(r=(o=this._updateFunctions)[e])==null||r.call(o,n)});this.updateComponent=t}disconnectedCallback(){super.disconnectedCallback(),this._templateIds.clear(),this._updateFunctions={},this.updateComponent={}}getTemplateId(t){let e=this._templateIds.get(t);return e||(e=oi.newRandomId(),this._templateIds.set(t,e)),e}isAreaResizeable(t){return this.areasResizeExceptions.includes(t)?!1:this.resizeableAreas}canResizeVerticalDivider(t){const e=t.left||[],s=t.right||[];for(const n of e)if(!this.isAreaResizeable(n))return!1;for(const n of s)if(!this.isAreaResizeable(n))return!1;return!0}canResizeHorizontalDivider(t){const e=t.above||[],s=t.below||[];for(const n of e)if(!this.isAreaResizeable(n))return!1;for(const n of s)if(!this.isAreaResizeable(n))return!1;return!0}computeDividers(){var r;if(!this.layout)return;const t=(r=this.layouts[this.layout])==null?void 0:r.template;if(!t)return;const e=Kl(t),s=yu(e),n=getComputedStyle(this),o=[];for(const a of s){let l=!1;if(a.type==="vertical"?l=this.canResizeVerticalDivider(a):l=this.canResizeHorizontalDivider(a),!l)continue;const c=f=>{this._colSizesRaw=this.style.gridTemplateColumns.split(" "),this._rowSizesRaw=this.style.gridTemplateRows.split(" "),this._rowSizesComputed=n.gridTemplateRows.split(" "),this._colSizesComputed=n.gridTemplateColumns.split(" "),this._start={x:f.clientX,y:f.clientY,divider:a,colSizesRaw:[...this._colSizesRaw],rowSizesRaw:[...this._rowSizesRaw],colSizesComputed:[...this._colSizesComputed],rowSizesComputed:[...this._rowSizesComputed]},window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp)},h=f=>{f.preventDefault()},d=Su(a,n),u=S`
        <div @mousedown=${c} @contextmenu=${h} class="grid-divider divider-${a.type}" style=${$e(d)}>
          <div></div>
        </div>
      `;o.push(u)}return o}parseTabToken(t){const e=t.match(/^(\w+)\[([^\]]+)\]$/);return e?{name:e[1],keys:e[2].split(",").map(s=>s.trim())}:t}parseTabElementTokens(t){const e=[];let s="",n=0;for(const o of t)if(o==="[")n++,s+=o;else if(o==="]")n--,s+=o;else if(o===","&&n===0){const r=s.trim();r&&e.push(this.parseTabToken(r)),s=""}else s+=o;return s.trim()&&e.push(this.parseTabToken(s.trim())),e}extractElementKeys(t){const e=t.match(/^\w+:\w+\(([^)]+)\)$/);return e?this.parseTabElementTokens(e[1]).flatMap(n=>typeof n=="string"?[n]:n.keys):[t]}cleanUpdateFunctions(){if(!this.layout){this._updateFunctions={};return}const t=this.layouts[this.layout],e=this.getLayoutAreas(t).flatMap(s=>this.extractElementKeys(s));for(const s in this.elements)e.includes(s)||delete this._updateFunctions[s]}clean(){this.style.gridTemplate="";for(const t of[...this.children])Object.values(this._slotNames).some(e=>t.getAttribute("slot")===e)||t.remove();this.cleanUpdateFunctions()}emitElementCreation(t){this.dispatchEvent(new CustomEvent("elementcreated",{detail:t}))}getSanitizedLayoutTemplate(t){return t.replace(/\w+:(\w+)\([^)]*\)/g,"$1")}createElementFromDefinition(t,e){if(e instanceof HTMLElement)return e;if("template"in e){const{template:r,initialState:a}=e,l=this.getTemplateId(r),c=this.querySelector(`[data-grid-template-id="${l}"]`);if(c){let u=this._updateFunctions[t];if(!u){for(const[,f]of Object.entries(this._updateFunctions))if(this.querySelector(`[data-grid-template-id="${this.getTemplateId(r)}"]`)===c){u=f;break}}return u&&(this._updateFunctions[t]=u),c}const[h,d]=ri.create(r,a);return h.setAttribute("data-grid-template-id",l),this._updateFunctions[t]=d,h}const s=this.getTemplateId(e),n=this.querySelector(`[data-grid-template-id="${s}"]`);if(n)return n;const o=ri.create(e);return o.setAttribute("data-grid-template-id",this.getTemplateId(e)),o}render(){if(this.layout){const t=this.layouts[this.layout];if(t){if(!(t.guard??(()=>!0))())return this.clean(),S`<slot name=${this._slotNames.notAllowed}></slot>`;const n=this.getLayoutAreas(t),o=d=>d.split(",").map(u=>u.trim()).filter(Boolean),r=d=>{var u;return((u=t.elements)==null?void 0:u[d])||this.elements[d]},a=d=>{const u=r(d);return u&&typeof u=="object"&&"label"in u&&u.label?u.label:d},l=d=>{const u=r(d);if(u&&typeof u=="object"&&"icon"in u&&typeof u.icon=="string")return u.icon},c=n.map(d=>{const u=d.match(/^tabs:([^(]+)\(([^)]+)\)$/),f=d.match(/^panel:([^(]+)\(([^)]+)\)$/);if(!u&&!f){const _=r(d);if(!_)return null;const x=this.createElementFromDefinition(d,_);return x?(this.emitElementCreation({name:d,element:x}),x.style.gridArea=d,x):null}const p=u?u[1]:f[1],m=o(u?u[2]:f[2]);if(u){const _=`tabs-${p}`;let x=this.querySelector(`[data-grid-tabs-id="${_}"]`);x||(x=document.createElement("bim-tabs"),x.setAttribute("data-grid-tabs-id",_));const k=this.areaGroups[p];k!=null&&k.switchersFull?x.setAttribute("switchers-full",""):x.removeAttribute("switchers-full"),k!=null&&k.switchersCompact?x.setAttribute("switchers-compact",""):x.removeAttribute("switchers-compact"),x.style.gridArea=p;const C=[],M=this.parseTabElementTokens(u[2]);for(const A of M)if(typeof A=="string"){const D=r(A);if(!D)continue;const E=this.createElementFromDefinition(A,D);if(!E)continue;this.emitElementCreation({name:A,element:E});const T=`tab-${p}-${A}`;let I=x.querySelector(`[data-grid-tab-id="${T}"]`);I||(I=document.createElement("bim-tab"),I.setAttribute("data-grid-tab-id",T),I.name=A),I.label=a(A),I.icon=l(A),I.innerHTML="",I.appendChild(E),C.push(I)}else{const{name:D,keys:E}=A,T=this.areaGroups[D],I=`tab-${p}-${D}`;let B=x.querySelector(`[data-grid-tab-id="${I}"]`);B||(B=document.createElement("bim-tab"),B.setAttribute("data-grid-tab-id",I),B.name=D),B.label=(T==null?void 0:T.label)??D,B.icon=T==null?void 0:T.icon;const z=`panel-${p}-${D}`;let R=B.querySelector(`[data-grid-panel-id="${z}"]`);R||(R=document.createElement("bim-panel"),R.setAttribute("data-grid-panel-id",z)),R.innerHTML="";for(const V of E){const Y=r(V);if(!Y)continue;const q=this.createElementFromDefinition(V,Y);q&&(this.emitElementCreation({name:V,element:q}),R.appendChild(q))}B.innerHTML="",B.appendChild(R),C.push(B)}return x.innerHTML="",x.append(...C),x}const g=`panel-${p}`;let b=this.querySelector(`[data-grid-panel-id="${g}"]`);b||(b=document.createElement("bim-panel"),b.setAttribute("data-grid-panel-id",g));const y=this.areaGroups[p];y!=null&&y.label?b.setAttribute("label",y.label):b.removeAttribute("label"),y!=null&&y.icon?b.setAttribute("icon",y.icon):b.removeAttribute("icon"),b.style.gridArea=p;const w=[];for(const _ of m){const x=r(_);if(!x)continue;const k=this.createElementFromDefinition(_,x);k&&(this.emitElementCreation({name:_,element:k}),w.push(k))}return b.innerHTML="",b.append(...w),b}).filter(d=>d!==null);this.clean(),this.style.gridTemplate=this.getSanitizedLayoutTemplate(t.template);const h=this.layoutsResize[this.layout];h&&(this.style.gridTemplateColumns=h.cols.join(" "),this.style.gridTemplateRows=h.rows.join(" ")),this.append(...c),this.emitLayoutChange()}else return this.clean(),S`<slot name=${this._slotNames.notFound}></slot>`}else return this.clean(),this.emitLayoutChange(),S`<slot name=${this._slotNames.emptyLayout}></slot>`;return S`
      ${this.resizeableAreas?this.computeDividers():null}
      <slot></slot>
    `}};Ko.styles=j`
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
  `;let je=Ko;hn([v({type:Boolean,reflect:!0})],je.prototype,"floating");hn([v({type:String,reflect:!0})],je.prototype,"layout");hn([v({type:Boolean,attribute:"areas-resizeable",reflect:!0})],je.prototype,"resizeableAreas");hn([v({type:Array,attribute:!1})],je.prototype,"areasResizeExceptions");const en=class en extends H{render(){return S`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};en.styles=j`
    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-base));
      width: var(--bim-icon--fz, var(--bim-ui_size-base));
      color: var(--bim-icon--c);
      transition: all 0.15s;
      display: flex;
    }
  `,en.properties={icon:{type:String}};let Kn=en;var Pu=Object.defineProperty,dn=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Pu(t,e,n),n};const Qo=class Qo extends H{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const o=n,r=t[s];typeof r=="boolean"?o.checked=r:o.value=r}}render(){return S`
      <div class="parent">
        ${this.label||this.icon?S`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Qo.styles=j`
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
      min-height: var(--bim-ui_size-11xl);
      min-width: 3rem;
      gap: var(--bim-input--g, var(--bim-ui_size-4xs));
      padding: var(--bim-input--p, 0);
      background-color: var(--bim-input--bgc, var(--bim-ui_bg-contrast-50));
      border: var(--bim-input--olw, 2px) solid
        var(--bim-input--olc, transparent);
      border-radius: var(--bim-input--bdrs, var(--bim-ui_size-4xs));
      transition: all 0.15s;
      --bim-label--fz: var(--bim-ui_size-sm);
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let Ne=Qo;dn([v({type:String,reflect:!0})],Ne.prototype,"name");dn([v({type:String,reflect:!0})],Ne.prototype,"label");dn([v({type:String,reflect:!0})],Ne.prototype,"icon");dn([v({type:Boolean,reflect:!0})],Ne.prototype,"vertical");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ee(i,t,e){return i?t(i):e==null?void 0:e(i)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=i=>i??ie;var Au=Object.defineProperty,is=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Au(t,e,n),n},Ki;let pi=(Ki=class extends H{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1,this._imgTemplate=()=>S`<img src=${Qn(this.img)} .alt=${this.textContent||""} />`,this._iconTemplate=()=>S`<bim-icon .icon=${this.icon}></bim-icon>`}get value(){return this.textContent?cn(this.textContent):this.textContent}render(){return S`
      <div class="parent" title=${this.textContent}>
        ${ee(this.img,this._imgTemplate,()=>ie)}
        ${ee(!this.iconHidden&&this.icon,this._iconTemplate,()=>ie)}
        <p><slot></slot></p>
      </div>
    `}},Ki.styles=j`
    :host {
      --bim-icon--c: var(--bim-label--ic);
      color: var(--bim-label--c, var(--bim-ui_bg-contrast-80));
      font-size: var(--bim-label--fz, var(--bim-ui_size-base));
      display: block;
      white-space: nowrap;
      transition: all 0.15s;
      user-select: none;
    }

    :host([icon]) {
      line-height: 1.1rem;
    }

    .parent {
      display: flex;
      align-items: center;
      column-gap: 0.25rem;
      row-gap: 0.125rem;
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
  `,Ki);is([v({type:String,reflect:!0})],pi.prototype,"img");is([v({type:Boolean,attribute:"label-hidden",reflect:!0})],pi.prototype,"labelHidden");is([v({type:String,reflect:!0})],pi.prototype,"icon");is([v({type:Boolean,attribute:"icon-hidden",reflect:!0})],pi.prototype,"iconHidden");is([v({type:Boolean,reflect:!0})],pi.prototype,"vertical");var Du=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,Tt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Eu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Du(t,e,n),n};const Zo=class Zo extends H{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=ei(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const o=l=>{var m;n=!0;const{clientX:c}=l,h=this.step??1,d=((m=h.toString().split(".")[1])==null?void 0:m.length)||0,u=1/(this.sensitivity??1),f=(c-e)/u;if(Math.floor(Math.abs(f))!==Math.abs(f))return;const p=s+f*h;this.setValue(p.toFixed(d))},r=()=>{this.slider=!0,this.removeEventListener("blur",r)},a=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",r),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=S`
      ${this.pref||this.icon?S`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${Vt(this._input)}
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
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),o=S`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?S`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?S`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
      </div>
    `,r=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.suffix??""}`;return S`
      <bim-input
        title=${r}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:t}
      </bim-input>
    `}};Zo.styles=j`
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
      font-size: var(--bim-ui_size-sm);
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
  `;let bt=Zo;Tt([v({type:String,reflect:!0})],bt.prototype,"name",2);Tt([v({type:String,reflect:!0})],bt.prototype,"icon",2);Tt([v({type:String,reflect:!0})],bt.prototype,"label",2);Tt([v({type:String,reflect:!0})],bt.prototype,"pref",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"min",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"value",1);Tt([v({type:Number,reflect:!0})],bt.prototype,"step",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"sensitivity",2);Tt([v({type:Number,reflect:!0})],bt.prototype,"max",2);Tt([v({type:String,reflect:!0})],bt.prototype,"suffix",2);Tt([v({type:Boolean,reflect:!0})],bt.prototype,"vertical",2);Tt([v({type:Boolean,reflect:!0})],bt.prototype,"slider",2);var Tu=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,ss=(i,t,e,s)=>{for(var n=s>1?void 0:s?Ou(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Tu(t,e,n),n};const Jo=class Jo extends H{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button"),this._sectionsObserver=null}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return js(this,this.valueTransform)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}animatePanles(){const t=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(t,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}updateSectionsHeight(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("slot");if(!t)return;const e=t.assignedElements({flatten:!0}).filter(o=>o.tagName==="BIM-PANEL-SECTION"),s=e.filter(o=>!o.hasAttribute("collapsed"));for(const o of e)o.style.height="auto";s.length>0?s[s.length-1].style.height="100%":e.length>0&&(e[e.length-1].style.height="100%")}handleSlotChange(t){var n;const s=t.target.assignedElements({flatten:!0}).filter(o=>o.tagName==="BIM-PANEL-SECTION");(n=this._sectionsObserver)==null||n.disconnect(),this._sectionsObserver=new MutationObserver(()=>this.updateSectionsHeight());for(const o of s)this._sectionsObserver.observe(o,{attributes:!0,attributeFilter:["collapsed"]});this.updateSectionsHeight()}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanles()}}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._sectionsObserver)==null||t.disconnect(),this._sectionsObserver=null,this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,S`
      <div class="parent">
        ${this.label||this.name||this.icon?S`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `}};Jo.styles=[Se.scrollbar,j`
      :host {
        display: flex;
        height: 100%;
        background-color: var(--bim-ui_bg-contrast-20);
        overflow: auto;
        border: var(--bim-panel--border, 1px solid var(--bim-ui_bg-contrast-40));
        --bim-panel-section--header-display: flex;
        --bim-panel-section--border: none;
        --bim-panel-section--bdrs: 0;
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
        --bim-label--c: var(--bim-panel--c, var(--bim-ui_bg-contrast-100));
        --bim-label--fz: var(--bim-panel--fz, var(--bim-ui_size-lg));
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

    `];let oe=Jo;ss([v({type:String,reflect:!0})],oe.prototype,"icon",2);ss([v({type:String,reflect:!0})],oe.prototype,"name",2);ss([v({type:String,reflect:!0})],oe.prototype,"label",2);ss([v({type:Boolean,reflect:!0})],oe.prototype,"hidden",1);ss([v({type:Boolean,attribute:"header-hidden",reflect:!0})],oe.prototype,"headerHidden",2);var Lu=Object.defineProperty,ns=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Lu(t,e,n),n};const tr=class tr extends H{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}connectedCallback(){super.connectedCallback(),this.hasAttribute("fixed")||(this.fixed=!this.closest("bim-panel"))}get value(){const t=this.parentElement;let e;return t instanceof oe&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),js(this,e)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}setFlexAfterTransition(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");t&&setTimeout(()=>{this.collapsed?t.style.removeProperty("flex"):t.style.setProperty("flex","1")},150)}animateHeader(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=t.clientHeight:(t.style.setProperty("transition","none"),t.style.setProperty("height","auto"),t.style.setProperty("padding","1rem"),this.componentHeight=t.clientHeight,requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0"),t.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(t.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0")})):(t.style.setProperty("height","0px"),t.style.setProperty("padding","0"),requestAnimationFrame(()=>{t.style.setProperty("height",`${this.componentHeight}px`),t.style.setProperty("padding","1rem")})),this.setFlexAfterTransition()}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(t){t.target.assignedElements({flatten:!0}).forEach((n,o)=>{const r=o*.05;n.style.setProperty("transition-delay",`${r}s`)})}handlePointerEnter(){const t=this.renderRoot.querySelector(".expand-icon");this.collapsed?t==null||t.style.setProperty("animation","collapseAnim 0.5s"):t==null||t.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const t=this.renderRoot.querySelector(".expand-icon");t==null||t.style.setProperty("animation","none")}render(){const t=this.label||this.icon||this.name||this.fixed,e=S`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,s=S`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?S`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:e}
      </div>
    `;return S`
      <div class="parent">
        ${t?s:null}
        <div class="components" style="flex: 1;">
          <div>
            <slot @slotchange=${this.handelSlotChange}></slot>
          </div>
        </div>
      </div>
    `}};tr.styles=[Se.scrollbar,j`
      :host {
        display: block;
        height: 100%;
        pointer-events: auto;
        background-color: var(--bim-ui_bg-contrast-20);
        border: var(--bim-panel-section--border, 1px solid var(--bim-ui_bg-contrast-40));
        border-radius: var(--bim-panel-section--bdrs, var(--bim-ui_size-4xs));
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
        --bim-label--fz: var(--bim-ui_size-lg);
        --bim-label--c: var(
          --bim-panel-section_hc,
          var(--bim-ui_bg-contrast-100)
        );
        display: var(--bim-panel-section--header-display, flex);
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

      .header {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-40);
      }

      :host(:last-child[collapsed]) .header {
        border-bottom: none;
      }

      .components {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        row-gap: 0.75rem;
        padding: 1rem;
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

      :host(:not([fixed])[collapsed]) .components {
        padding: 0;
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
    `];let ve=tr;ns([v({type:String,reflect:!0})],ve.prototype,"icon");ns([v({type:String,reflect:!0})],ve.prototype,"label");ns([v({type:String,reflect:!0})],ve.prototype,"name");ns([v({type:Boolean,reflect:!0})],ve.prototype,"fixed");ns([v({type:Boolean,reflect:!0})],ve.prototype,"collapsed");var Ru=Object.defineProperty,mi=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Ru(t,e,n),n};const er=class er extends H{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.setAnimatedBackgound(),this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof J&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this.setAnimatedBackgound(),this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof J&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof J?s.label===t||s.value===t:!1)}doubleRequestAnimationFrames(t){requestAnimationFrame(()=>requestAnimationFrame(t))}setAnimatedBackgound(t=!1){const e=this.renderRoot.querySelector(".animated-background"),s=this._value;requestAnimationFrame(()=>{var r,a,l,c;const n=(c=(l=(a=(r=s==null?void 0:s.parentElement)==null?void 0:r.shadowRoot)==null?void 0:a.querySelector("bim-input"))==null?void 0:l.shadowRoot)==null?void 0:c.querySelector(".input"),o={width:s==null?void 0:s.clientWidth,height:s==null?void 0:s.clientHeight,top:((s==null?void 0:s.offsetTop)??0)-((n==null?void 0:n.offsetTop)??0),left:((s==null?void 0:s.offsetLeft)??0)-((n==null?void 0:n.offsetLeft)??0)};e==null||e.style.setProperty("width",`${o.width}px`),e==null||e.style.setProperty("height",`${o.height}px`),e==null||e.style.setProperty("top",`${o.top}px`),e==null||e.style.setProperty("left",`${o.left}px`)}),t&&this.doubleRequestAnimationFrames(()=>{const o="ease";e==null||e.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){const t=[...this.children].find(e=>e instanceof J&&e.checked);t&&(this._value=t),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return S`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};er.styles=j`
    :host {
      --bim-input--g: 0;
      --bim-option--jc: center;
      /* flex: 1; */
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

    bim-input {
      --bim-input--olw: 0px;
    }

    /* ── Underline variant ── */

    :host([variant="underline"]) {
      --bim-input--bgc: transparent;
      --bim-input--olw: 0;
    }

    :host([variant="underline"]) .animated-background {
      display: none;
    }

    :host([variant="underline"]) ::slotted(bim-option) {
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      border-bottom: 2px solid transparent;
      transition:
        border-color 0.15s,
        color 0.15s;
    }

    :host([variant="underline"]) ::slotted(bim-option[checked]) {
      --bim-label--c: var(--bim-ui_accent-base);
      border-bottom-color: var(--bim-ui_accent-base);
    }

    :host([variant="underline"]) ::slotted(bim-option:not([checked]):hover) {
      background-color: transparent;
      --bim-label--c: var(--bim-ui_bg-contrast-80);
    }
  `;let re=er;mi([v({type:String,reflect:!0})],re.prototype,"name");mi([v({type:String,reflect:!0})],re.prototype,"icon");mi([v({type:String,reflect:!0})],re.prototype,"label");mi([v({type:Boolean,reflect:!0})],re.prototype,"vertical");mi([v({type:String,reflect:!0})],re.prototype,"variant");mi([kt()],re.prototype,"_value");function zu(i,t,e){if(t.length===0||i.length===0)return i;const s=Ws.flattenData(i);return Po(s,t,e)}function Po(i,t,e){if(t.length===0)return i;const[s,...n]=t,o=e==null?void 0:e[s];return o?$u(i,s,o,n,e):Fu(i,s,n,e)}function $u(i,t,e,s,n){const o=new Map;for(const r of i){const a=r.data[t];if(a===void 0)continue;const l=e(a,r.data),c=l.join("|");o.has(c)||o.set(c,{path:l,rows:[]}),o.get(c).rows.push(r)}return Iu(o,t,s,n)}function Iu(i,t,e,s){const n=new Bu;for(const{path:o,rows:r}of i.values())n.addPath(o,r,t);return n.buildResult(e,s)}function Fu(i,t,e,s){const n=new Map;for(const r of i){const a=r.data[t];n.has(a)||n.set(a,[]),n.get(a).push(r)}const o=[];for(const[r,a]of n){const l=e.length>0?Po(a,e,s):a;o.push({data:{[t]:r},children:l,_isComputedGroup:!0})}return o}class Bu{constructor(){this.tree=new Map}addPath(t,e,s){let n=this.tree;for(let o=0;o<t.length;o++){const r=t[o];n.has(r)||n.set(r,{value:r,column:s,children:new Map,rows:[]});const a=n.get(r);o===t.length-1&&a.rows.push(...e),n=a.children}}buildResult(t,e){return this.convertMapToResult(this.tree,t,e)}convertMapToResult(t,e,s){const n=[];for(const o of t.values()){const r=[];if(o.children.size>0&&r.push(...this.convertMapToResult(o.children,e,s)),o.rows.length>0){const a=e.length>0?Po(o.rows,e,s):o.rows;r.push(...a)}n.push({data:{[o.column]:o.value},children:r,_isComputedGroup:!0})}return n}}const Vu=()=>S`
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
  `,ju=()=>S`
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
  `;var Nu=Object.defineProperty,Hu=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Nu(t,e,n),n};const ir=class ir extends H{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.table=null,this.group=null,this.row=null,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}get dataTransform(){var n,o,r,a;const t=(o=(n=this.row)==null?void 0:n.dataTransform)==null?void 0:o[this.column],e=(r=this.table)==null?void 0:r.dataTransform[this.column],s=(a=this.table)==null?void 0:a.defaultContentTemplate;return t||e||s}get templateValue(){const{data:t,rowData:e,group:s}=this,n=this.dataTransform;if(n&&t!=null&&s){const o=n(t,e,s);return typeof o=="string"||typeof o=="boolean"||typeof o=="number"?S`<bim-label>${o}</bim-label>`:o}return t!=null?S`<bim-label>${t}</bim-label>`:ie}connectedCallback(){var t,e;super.connectedCallback(),(t=this.group)!=null&&t.data._isComputedGroup&&((e=this.table)!=null&&e.groupedBy.includes(this.column))?(this.style.gridColumn="1",this.style.gridRow="1"):this.style.gridArea=this.column.toString()}render(){return S`${this.templateValue}`}};ir.styles=j`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100);
      padding: 0.375rem;
      display: flex;
      align-items: center;
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
  `;let Ns=ir;Hu([v({type:String,reflect:!0})],Ns.prototype,"column");const sr=class sr extends H{constructor(){super(...arguments),this._groups=[],this.group=this.closest("bim-table-group"),this._data=[],this.table=this.closest("bim-table")}get data(){var t;return((t=this.group)==null?void 0:t.data.children)??this._data}set data(t){this._data=t}clean(){for(const t of this._groups)t.remove();this._groups=[]}render(){return this.clean(),S`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};sr.styles=j`
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
  `;let Zn=sr;var Wu=Object.defineProperty,qu=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Wu(t,e,n),n};const nr=class nr extends H{constructor(){super(...arguments),this.childrenHidden=!0,this.table=null,this.data={data:{}}}get rowElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-row"):null}get childrenElement(){const t=this.shadowRoot;return t?t.querySelector("bim-table-children"):null}get _isChildrenEmpty(){return!(this.data.children&&this.data.children.length!==0)}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}disconnectedCallback(){super.disconnectedCallback(),this.data={data:{}}}toggleChildren(t){this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,this.animateTableChildren(!0)}animateTableChildren(t=!0){if(!t){requestAnimationFrame(()=>{var c;const r=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(c=this.renderRoot.querySelector("bim-table-children"))==null?void 0:c.querySelector(".branch-vertical");r.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const e=500,s=0,n=200,o=350;requestAnimationFrame(()=>{var m;const r=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),c=(m=this.renderRoot.querySelector("bim-table-children"))==null?void 0:m.querySelector(".branch-vertical"),h=()=>{var b;const g=(b=r==null?void 0:r.renderRoot)==null?void 0:b.querySelectorAll("bim-table-group");g==null||g.forEach((y,w)=>{y.style.setProperty("opacity","0"),y.style.setProperty("left","-30px");const _=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];y.animate(_,{duration:e/2,delay:50+w*s,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},d=()=>{const g=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(g,{duration:o,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},u=()=>{const g=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(g,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:s,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},f=()=>{var b;const g=(b=this.renderRoot.querySelector("bim-table-row"))==null?void 0:b.querySelector(".branch-horizontal");if(g){g.style.setProperty("transform-origin","center right");const y=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];g.animate(y,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},p=()=>{const g=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];c==null||c.animate(g,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(s+n)*.7})};h(),d(),u(),f(),p()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(e=>{var s,n,o;if(!this.childrenHidden){e.style.setProperty("transform","translateY(-50%) rotate(90deg)");const a=(s=e.parentElement)==null?void 0:s.querySelector(".branch-horizontal");a&&a.style.setProperty("transform","scaleX(0)");const l=(o=(n=e.parentElement)==null?void 0:n.parentElement)==null?void 0:o.querySelectorAll(".branch-vertical");l==null||l.forEach(c=>{c.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)return S`${ie}`;const t=this.table.getGroupIndentation(this.data)??0;let e;if(!this.table.noIndentation){const a={left:`${t-1+(this.table.selectableRows?2.05:.5625)}rem`};e=S`<div style=${$e(a)} class="branch branch-horizontal"></div>`}const s=S`
      ${this.table.noIndentation?null:S`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `;let n;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");if(a.setAttribute("height","9.9"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.7"),this.table.noCarets){const h=document.createElementNS("http://www.w3.org/2000/svg","circle");h.setAttribute("cx","2.3333336"),h.setAttribute("cy","3.85"),h.setAttribute("r","2.5"),a.append(h)}else{const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(h)}const l={left:`${(this.table.selectableRows?1.5:.125)+t}rem`,cursor:`${this.table.noCarets?"unset":"pointer"}`};n=S`<div @click=${h=>{var d;(d=this.table)!=null&&d.noCarets||(h.stopPropagation(),this.toggleChildren())}} style=${$e(l)} class="caret">${a}</div>`}let o;return!this._isChildrenEmpty&&!this.childrenHidden&&(o=S`
        <bim-table-children ${Vt(l=>{if(!l)return;const c=l;c.table=this.table,c.group=this})}>${s}</bim-table-children>
      `),S`
      <div class="parent">
        <bim-table-row ${Vt(a=>{var c;if(!a)return;const l=a;l.table=this.table,l.group=this,(c=this.table)==null||c.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:l}}))})}>
          ${ee(!this._isChildrenEmpty,()=>s)}
          ${ee(t!==0,()=>e)}
          ${ee(!this.table.noIndentation&&!this._isChildrenEmpty,()=>n)}
        </bim-table-row>
        ${o}
      </div>
    `}};nr.styles=j`
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
  `;let Hs=nr;qu([v({type:Boolean,attribute:"children-hidden",reflect:!0})],Hs.prototype,"childrenHidden");var Yu=Object.defineProperty,un=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Yu(t,e,n),n};const or=class or extends H{constructor(){super(...arguments),this.selected=!1,this.group=null,this._data={},this.isHeader=!1,this.table=null,this.onTableColumnsChange=()=>{this.table&&this.requestUpdate()},this._intersecting=!1,this._timeOutDelay=250,this._observer=new IntersectionObserver(t=>{window.clearTimeout(this._intersectTimeout),this._intersectTimeout=void 0,t[0].isIntersecting?this._intersectTimeout=window.setTimeout(()=>{this._intersecting=!0},this._timeOutDelay):this._intersecting=!1},{rootMargin:"36px"}),this._isRangeClick=!1,this._onCheckboxClick=t=>{var s;const e=((s=this.table)==null?void 0:s.rangeSelectKey)??"ctrlKey";this._isRangeClick=t[e]},this._onDataSelected=()=>{var t;this.toggleAttribute("selected",(t=this.table)==null?void 0:t.selection.has(this.data))},this._onDataDeselected=()=>{var t;(t=this.table)!=null&&t.selection.has(this.data)||this.removeAttribute("selected")},this._onDataSelectionCleared=()=>{this.removeAttribute("selected")},this.dataTransform=null,this._interval=null,this.clearDataTransform=()=>{this.dataTransform=null,this._interval!==null&&(clearInterval(this._interval),this._interval=null)}}get columns(){var t;return((t=this.table)==null?void 0:t.columns)??[]}get hiddenColumns(){var t;return((t=this.table)==null?void 0:t.hiddenColumns)??[]}get groupData(){var t;return(t=this.group)==null?void 0:t.data}get data(){var t;return((t=this.group)==null?void 0:t.data.data)??this._data}set data(t){this._data=t}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;if(this.selected=e.value,e.value)if(!this.isHeader&&this._isRangeClick&&this.table._lastSelectedData){const s=Ws.flattenData(this.table.value).map(r=>r.data),n=s.indexOf(this.table._lastSelectedData),o=s.indexOf(this.data);if(n!==-1&&o!==-1){const[r,a]=n<o?[n,o]:[o,n];this.table.selection.add(...s.slice(r,a+1))}}else{let s=[this.data];this.isHeader&&(s=Ws.flattenData(this.table.data).map(n=>n.data)),this.table.selection.add(...s),this.isHeader&&this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}})),this.isHeader||(this.table._lastSelectedData=this.data)}else this.isHeader?this.table.selection.clear():(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})));this._isRangeClick=!1}firstUpdated(t){super.firstUpdated(t),this._observer.observe(this)}connectedCallback(){super.connectedCallback(),this.table&&(this.table.addEventListener("dataselected",this._onDataSelected),this.table.addEventListener("datadeselected",this._onDataDeselected),this.table.addEventListener("dataselectioncleared",this._onDataSelectionCleared),this.toggleAttribute("selected",this._isSelected),this.table.addEventListener("columnschange",this.onTableColumnsChange))}disconnectedCallback(){var t,e,s;super.disconnectedCallback(),this._observer.unobserve(this),(t=this.table)==null||t.removeEventListener("dataselected",this._onDataSelected),(e=this.table)==null||e.removeEventListener("datadeselected",this._onDataDeselected),(s=this.table)==null||s.removeEventListener("dataselectioncleared",this._onDataSelectionCleared),this.data={},this.table=null}applyAdaptativeDataTransform(t){this.addEventListener("pointerenter",()=>{this.dataTransform=t,this._interval=window.setInterval(()=>{this.matches(":hover")||this.clearDataTransform()},50)})}render(){var n,o,r;if(!(this.table&&this._intersecting))return S`${ie}`;this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`;const t=this.table.getRowIndentation(this.data)??0,e=[];let s=this.data;if((n=this.groupData)!=null&&n._isComputedGroup){const a=this.table.dataKeys.filter(l=>{var c;return!((c=this.table)!=null&&c.hiddenColumns.includes(l))});for(const l of a)this._columnNames.indexOf(l)!==0&&(s[l]="")}for(const a in s){if(!((o=this.groupData)!=null&&o._isComputedGroup)&&this.hiddenColumns.includes(a))continue;const l=document.createElement("bim-table-cell");l.group=this.group,l.table=this.table,l.row=this,l.column=a;const c=(r=this.group)!=null&&r.data._isComputedGroup&&this.table.groupedBy.includes(a)?0:this._columnNames.indexOf(a);c===0&&(l.style.marginLeft=`${this.table.noIndentation?0:t+.75}rem`),l.setAttribute("data-column-index",String(c)),l.toggleAttribute("data-no-indentation",c===0&&this.table.noIndentation),l.toggleAttribute("data-cell-header",this.isHeader),l.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:l}})),e.push(l)}return this._timeOutDelay=0,S`
      ${this.table.selectableRows?S`<bim-checkbox
            @click=${this._onCheckboxClick}
            @change=${this.onSelectionChange}
            .checked=${this._isSelected??!1}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${e}
      <slot></slot>
    `}};or.styles=j`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: var(--bim-ui_size-16xl);
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

    :host([is-header]) {
      min-height: auto;
      height: var(--bim-ui_size-10xl);
      border-bottom: 1px solid var(--bim-ui_bg-contrast-60);
    }
  `;let He=or;un([v({type:Boolean,reflect:!0})],He.prototype,"selected");un([v({type:Boolean,attribute:"is-header",reflect:!0})],He.prototype,"isHeader");un([kt()],He.prototype,"_intersecting");un([kt()],He.prototype,"dataTransform");var Uu=Object.defineProperty,Xu=Object.getOwnPropertyDescriptor,mt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Xu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Uu(t,e,n),n},fi;const ht=(fi=class extends H{constructor(){super(),this._value=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.groupingTransform={},this.selectableRows=!1,this.selection=new ou,this.noIndentation=!1,this.noCarets=!1,this.loading=!1,this._groupedBy=[],this._lastSelectedData=null,this.rangeSelectKey="ctrlKey",this._errorLoading=!1,this._defaultVisibility=!0,this._visibilityExceptions=[],this.defaultContentTemplate=t=>S`<bim-label style="white-space: normal; user-select: text;"
      >${t}</bim-label
    >`,this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=Gn(t)??[];for(const o of n){if("queries"in o){s=!1;break}const{condition:r,value:a}=o;let{key:l}=o;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(u=>u.includes(c)).map(u=>jr(e.data[u],r,a)).some(u=>u)}else s=jr(e.data[l],r,a);if(!s)break}return s},this.selection.onItemAdded.add(t=>this.emitDataSelected({data:t})),this.selection.onItemDeleted.add(t=>this.emitDataDeselected({data:t})),this.selection.onCleared.add(()=>{this.emitDataCleared(),this._lastSelectedData=null})}static flattenData(t){const e=[];for(const s of t)e.push({data:s.data}),s.children&&s.children.length>0&&e.push(...fi.flattenData(s.children));return e}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns){const{name:s}=e;t[s]=String(s)}return t}get value(){return this._value}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateValue(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateValue(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set groupedBy(t){this._groupedBy=t,this.updateValue()}get groupedBy(){return this._groupedBy}set defaultVisibility(t){this._defaultVisibility=t}get defaultVisibility(){return this._defaultVisibility}set visibilityExceptions(t){this._visibilityExceptions=t}get visibilityExceptions(){return this._visibilityExceptions}set hiddenColumns(t){this.defaultVisibility=!0,this.visibilityExceptions=t}get hiddenColumns(){const t=this.dataKeys,e=[];for(const s of t){const n=this._visibilityExceptions.includes(s);(this._defaultVisibility?n:!n)&&e.push(s)}return e}set visibleColumns(t){this.defaultVisibility=!1,this.visibilityExceptions=t}get visibleColumns(){const t=this.dataKeys,e=[];for(const s of t){const n=this._visibilityExceptions.includes(s);(this._defaultVisibility?!n:n)&&e.push(s)}return e}emitDataSelected(t){this.dispatchEvent(new CustomEvent("dataselected",{detail:t}))}emitDataDeselected(t){this.dispatchEvent(new CustomEvent("datadeselected",{detail:t}))}emitDataCleared(){this.dispatchEvent(new Event("dataselectioncleared"))}filterData(t=this.data){let e=[];if(this.queryString){let s=this.filterFunction;s||(s=Gn(this.queryString)?this._queryFilterFunction:this._stringFilterFunction),e=this.filter(this.queryString,s,t),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)}else this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),e=t;return e}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:o}=s;for(const r in o)this._columns.map(l=>typeof l=="string"?l:l.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const r=this.computeMissingColumns(n);r&&!e&&(e=r)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const o=this._textDelimiters[t];let r="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(r+=`Indentation${o}`);const l=`${a.join(o)}
`;r+=l}for(const[l,c]of e.entries()){const{data:h,children:d}=c,u=this.indentationInText?`${s}${l+1}${o}`:"",f=a.map(m=>h[m]??""),p=`${u}${f.join(o)}
`;r+=p,d&&(r+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return r}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}get dataKeys(){const t=new Set,e=s=>{for(const n of s){for(const o in n.data)t.add(o);n.children&&e(n.children)}};return e(this.data),Array.from(t)}applyDataTransform(t){const e={};if(!t)return e;const{data:s}=t.data;for(const o of Object.keys(this.dataTransform)){const r=this.columns.find(a=>a.name===o);r&&r.forceDataTransform&&(o in s||(s[o]=""))}const n=s;for(const o in n){const r=this.dataTransform[o];r?e[o]=r(n[o],s,t):e[o]=s[o]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const o=this.getRowIndentation(t,n.children,s+1);if(o!==null)return o}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const o=this.getGroupIndentation(t,n.children,s+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._value.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){if(this.loading=!1,this._value.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-table-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}groupData(t=this.data){return zu(t,this.groupedBy,this.groupingTransform)}updateValue(){const t=this.filterData(),e=this.groupData(t);this._value=e}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const o of s)if(e(t,o)){if(this.preserveStructureOnFilter){const a={data:o.data};if(o.children){const l=this.filter(t,e,o.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:o.data}),o.children){const a=this.filter(t,e,o.children);n.push(...a)}}else if(o.children){const a=this.filter(t,e,o.children);this.preserveStructureOnFilter&&a.length?n.push({data:o.data,children:a}):n.push(...a)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}getGroupingMessageTemplate(){if(this.groupedBy.length===0)return ie;const t=this.groupedBy.join(" → ");return S`
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
    `}render(){if(this.loading)return Vu();if(this._errorLoading)return S`<slot name="error-loading"></slot>`;if(this._value.length===0&&this._missingDataElement)return S`<slot name="missing-data"></slot>`;const t=s=>{if(!s)return;const n=s;n.table=this,n.data=this._headerRowData,n.requestUpdate()},e=s=>{if(!s)return;const n=s;n.table=this,n.data=this.value,n.requestUpdate()};return S`
      <div class="parent">
        ${ju()}
        <div
          style="
          grid-area: Header;
          position: sticky;
          top: 0;
          z-index: 5;
        "
        >
          ${ee(!this.headersHidden,()=>S`<bim-table-row
                is-header
                style="background-color: var(--bim-ui_bg-contrast-20);"
                ${Vt(t)}
              ></bim-table-row>`)}
          ${this.getGroupingMessageTemplate()}
        </div>
        <div style="overflow-x: hidden; grid-area: Body">
          <bim-table-children
            ${Vt(e)}
            style="grid-area: Body; background-color: transparent"
          ></bim-table-children>
        </div>
      </div>
    `}},fi.styles=[Se.scrollbar,j`
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
    `],fi);mt([kt()],ht.prototype,"_value",2);mt([v({type:Boolean,attribute:"headers-hidden",reflect:!0})],ht.prototype,"headersHidden",2);mt([v({type:String,attribute:"min-col-width",reflect:!0})],ht.prototype,"minColWidth",2);mt([v({type:Array,attribute:!1})],ht.prototype,"columns",1);mt([v({type:Array,attribute:!1})],ht.prototype,"data",1);mt([v({type:Boolean,reflect:!0})],ht.prototype,"expanded",2);mt([v({attribute:!1})],ht.prototype,"groupingTransform",2);mt([v({type:Boolean,reflect:!0,attribute:"selectable-rows"})],ht.prototype,"selectableRows",2);mt([v({type:Boolean,attribute:"no-indentation",reflect:!0})],ht.prototype,"noIndentation",2);mt([v({type:Boolean,attribute:"no-carets",reflect:!0})],ht.prototype,"noCarets",2);mt([v({type:Boolean,reflect:!0})],ht.prototype,"loading",2);mt([v({type:String,attribute:"grouped-by",reflect:!0,converter:{toAttribute:i=>Array.isArray(i)&&i.length>0?i.join(","):null,fromAttribute:i=>i&&i.trim()!==""?i.split(",").map(t=>t.trim()):[]}})],ht.prototype,"groupedBy",1);mt([v({type:String,attribute:"range-select-key",reflect:!0})],ht.prototype,"rangeSelectKey",2);mt([kt()],ht.prototype,"_errorLoading",2);mt([v({type:Boolean,attribute:"columns-hidden",reflect:!0,converter:{toAttribute:i=>i?null:"",fromAttribute:i=>i===null}})],ht.prototype,"defaultVisibility",1);mt([v({type:String,attribute:"visibility-exceptions",reflect:!0,converter:{toAttribute:i=>Array.isArray(i)&&i.length>0?i.join(","):null,fromAttribute:i=>i&&i.trim()!==""?i.split(",").map(t=>t.trim()):[]}})],ht.prototype,"visibilityExceptions",1);let Ws=ht;var Gu=Object.defineProperty,Ku=Object.getOwnPropertyDescriptor,Ue=(i,t,e,s)=>{for(var n=s>1?void 0:s?Ku(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Gu(t,e,n),n};const rr=class rr extends H{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.switchersCompact=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof gt&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof gt&&n.name===t);for(const n of e){if(!(n instanceof gt))continue;n.hidden=s!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}s||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof gt))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??null,s.icon=t.icon,e.append(s),this._switchers.push(e)}}updateSwitchers(){for(const t of this.children){if(!(t instanceof gt))continue;const e=this._switchers.find(n=>n.getAttribute("data-name")===t.name);if(!e)continue;const s=e.querySelector("bim-label");s&&(s.textContent=t.label??null,s.icon=t.icon)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof gt?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof gt&&(this.tab=s.name);for(const n of e){if(!(n instanceof gt)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return S`
      <div class="parent">
        <div class="switchers">
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};rr.styles=[Se.scrollbar,j`
      * {
        box-sizing: border-box;
      }

      :host {
        background-color: var(--bim-ui_bg-contrast-20);
        display: block;
        overflow: auto;
        border: var(--bim-tabs--border, 1px solid var(--bim-ui_bg-contrast-40));
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
        border-bottom: 1px solid var(--bim-ui_bg-contrast-60);
        position: relative;
        display: flex;
        flex-wrap: wrap;
        min-height: 2.25rem;
        grid-area: switchers;
      }

      .switcher {
        --bim-label--c: var(--bim-ui_bg-contrast-80);
        position: relative;
        cursor: pointer;
        pointer-events: auto;
        padding: 0rem 0.75rem;
        display: flex;
        justify-content: center;
        z-index: 2;
        transition: all 0.15s;
        min-height: 2.25rem;
        min-width: 8rem;
      }

      .switcher:not([data-active]):hover {
        filter: brightness(150%);
      }

      :host([switchers-full]) .switcher {
        flex: 1;
      }

      :host([switchers-compact]) .switchers {
        width: fit-content;
        border-bottom: none;
        padding: 0;
        margin: var(--bim-ui_size-lg);
        gap: 0;
        overflow: auto;
        border-radius: var(--bim-ui_size-2xs);
      }

      :host([switchers-compact]) .switcher {
        min-width: unset;
        padding: 0 var(--bim-ui_size-sm);
        border-radius: 0;
        background-color: var(--bim-ui_bg-contrast-40);
      }

      :host([switchers-compact]) .switcher[data-active] {
        background-color: var(--bim-ui_bg-contrast-60);
      }

      :host([floating][switchers-compact]) .switchers {
        width: unset;
        border-bottom: unset;
        margin: 0;
        gap: unset;
        border-radius: unset;
      }

      :host([floating][switchers-compact]) .switcher {
        min-width: 8rem;
        padding: 0rem 0.75rem;
        border-radius: 0;
        background-color: unset;
      }

      :host([floating][switchers-compact]) .switcher[data-active] {
        background-color: unset;
      }

      .switcher[data-active] {
        --bim-label--c: var(--bim-ui_main-contrast);
        background-color: var(--bim-ui_bg-contrast-60);
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

      :host(:not([bottom])) .content {
        border-top: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([bottom]) .content {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }

      :host([floating]) {
        background-color: transparent;
        border: none;
        --bim-toolbar--w: 100%;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: hidden;
        background-color: var(--bim-ui_bg-contrast-20);
      }

      :host([floating]:not([bottom])) .switchers {
        border-radius: var(--bim-ui_size-2xs) var(--bim-ui_size-2xs) 0 0;
        border-top: 1px solid var(--bim-ui_bg-contrast-40);
        border-left: 1px solid var(--bim-ui_bg-contrast-40);
        border-right: 1px solid var(--bim-ui_bg-contrast-40);
        border-bottom: none;
      }

      :host([floating][bottom]) .switchers {
        border-radius: 0 0 var(--bim-ui_size-2xs) var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-40);
        border-left: 1px solid var(--bim-ui_bg-contrast-40);
        border-right: 1px solid var(--bim-ui_bg-contrast-40);
        border-top: none;
      }

      :host([floating][tab="hidden"]) .switchers {
        border-radius: var(--bim-ui_size-2xs);
        border-bottom: 1px solid var(--bim-ui_bg-contrast-40);
      }

      :host([floating][bottom][tab="hidden"]) .switchers {
        border-top: 1px solid var(--bim-ui_bg-contrast-40);
      }

      :host([floating][tab="hidden"]) .content {
        border: none;
      }

      :host([floating]) .content {
        border: 1px solid var(--bim-ui_bg-contrast-40);
        border-radius: var(--bim-ui_size-2xs);
        background-color: var(--bim-ui_bg-base);
      }
    `];let Dt=rr;Ue([kt()],Dt.prototype,"_switchers",2);Ue([v({type:Boolean,reflect:!0})],Dt.prototype,"bottom",2);Ue([v({type:Boolean,attribute:"switchers-hidden",reflect:!0})],Dt.prototype,"switchersHidden",2);Ue([v({type:Boolean,reflect:!0})],Dt.prototype,"floating",2);Ue([v({type:String,reflect:!0})],Dt.prototype,"tab",1);Ue([v({type:Boolean,attribute:"switchers-full",reflect:!0})],Dt.prototype,"switchersFull",2);Ue([v({type:Boolean,attribute:"switchers-compact",reflect:!0})],Dt.prototype,"switchersCompact",2);var Qu=Object.defineProperty,Zu=Object.getOwnPropertyDescriptor,fn=(i,t,e,s)=>{for(var n=s>1?void 0:s?Zu(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Qu(t,e,n),n};const ar=class ar extends H{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(t){this._label=t;const e=this.parentElement;e instanceof Dt&&e.updateSwitchers()}get label(){return this._label}set icon(t){this._icon=t;const e=this.parentElement;e instanceof Dt&&e.updateSwitchers()}get icon(){return this._icon}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return S` <slot></slot> `}};ar.styles=j`
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
      --bim-panel-section--header-display: none;
      --bim-panel-section--border: none;
      --bim-panel--border: none;
      --bim-tabs--border: none;
      --bim-toolbar--border: none;

    }

    :host([hidden]) {
      transform: translateY(-20px);
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      visibility: hidden;
    }
  `;let gt=ar;fn([v({type:String,reflect:!0})],gt.prototype,"name",2);fn([v({type:String,reflect:!0})],gt.prototype,"label",1);fn([v({type:String,reflect:!0})],gt.prototype,"icon",1);fn([v({type:Boolean,reflect:!0})],gt.prototype,"hidden",1);var Ju=Object.defineProperty,tf=Object.getOwnPropertyDescriptor,$t=(i,t,e,s)=>{for(var n=s>1?void 0:s?tf(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Ju(t,e,n),n};const lr=class lr extends H{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this.disabled=!1,this.resize="vertical",this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return Gn(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return S`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        ${this.type==="area"?S` <textarea
              aria-label=${this.label||this.name||"Text Input"}
              .value=${this.value}
              .rows=${this.rows??5}
              ?disabled=${this.disabled}
              placeholder=${Qn(this.placeholder)}
              @input=${this.onInputChange}
              style="resize: ${this.resize};"
            ></textarea>`:S` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              ?disabled=${this.disabled}
              placeholder=${Qn(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};lr.styles=[Se.scrollbar,j`
      :host {
        /* flex: 1; */
        display: block;
      }

      input,
      textarea {
        font-size: var(--bim-ui_size-sm);
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
    `];let wt=lr;$t([v({type:String,reflect:!0})],wt.prototype,"icon",2);$t([v({type:String,reflect:!0})],wt.prototype,"label",2);$t([v({type:String,reflect:!0})],wt.prototype,"name",2);$t([v({type:String,reflect:!0})],wt.prototype,"placeholder",2);$t([v({type:String,reflect:!0})],wt.prototype,"value",2);$t([v({type:Boolean,reflect:!0})],wt.prototype,"vertical",2);$t([v({type:Number,reflect:!0})],wt.prototype,"debounce",2);$t([v({type:Number,reflect:!0})],wt.prototype,"rows",2);$t([v({type:Boolean,reflect:!0})],wt.prototype,"disabled",2);$t([v({type:String,reflect:!0})],wt.prototype,"resize",2);$t([v({type:String,reflect:!0})],wt.prototype,"type",1);var ef=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,Zl=(i,t,e,s)=>{for(var n=s>1?void 0:s?sf(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&ef(t,e,n),n};const cr=class cr extends H{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return S`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};cr.styles=j`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `;let ai=cr;Zl([v({type:Number,reflect:!0})],ai.prototype,"rows",2);Zl([v({type:Boolean,reflect:!0})],ai.prototype,"vertical",1);var nf=Object.defineProperty,of=Object.getOwnPropertyDescriptor,pn=(i,t,e,s)=>{for(var n=s>1?void 0:s?of(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&nf(t,e,n),n};const hr=class hr extends H{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof ai&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return S`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?S`<bim-label class="name" .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};hr.styles=j`
    :host {
      background-color: var(--bim-ui_bg-contrast-20);
      --bim-label--c: var(--bim-ui_bg-contrast-80);
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

    .name {
      font-size: var(--bim-ui_size-sm);
      flex-shrink: 0;
    }

    .children {
      display: flex;
      gap: var(--bim-ui_size-2xs);
      height: 100%;
    }

    :host([vertical]) .children {
      flex-direction: column;
    }
  `;let xe=hr;pn([v({type:String,reflect:!0})],xe.prototype,"label",2);pn([v({type:String,reflect:!0})],xe.prototype,"icon",2);pn([v({type:Boolean,reflect:!0})],xe.prototype,"vertical",1);pn([v({type:Boolean,attribute:"label-hidden",reflect:!0})],xe.prototype,"labelHidden",1);var rf=Object.defineProperty,af=Object.getOwnPropertyDescriptor,Ao=(i,t,e,s)=>{for(var n=s>1?void 0:s?af(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&rf(t,e,n),n};const dr=class dr extends H{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof xe&&(e.labelHidden=this.vertical&&!oi.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return S`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};dr.styles=j`
    :host {
      --bim-button--bgc: transparent;
      overflow: auto;
      display: block;
      border: var(--bim-toolbar--border, 1px solid var(--bim-ui_bg-contrast-40));
      border-radius: var(--bim-toolbar--bdrs, 0);
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
      width: min-content;
    }

    ::slotted(bim-toolbar-section:not(:last-child)) {
      border-right: 1px solid var(--bim-ui_bg-contrast-60);
      border-bottom: none;
    }

    :host([vertical]) ::slotted(bim-toolbar-section:not(:last-child)) {
      border-bottom: 1px solid var(--bim-ui_bg-contrast-60);
      border-right: none;
    }
  `;let li=dr;Ao([v({type:String,reflect:!0})],li.prototype,"icon",2);Ao([v({type:Boolean,attribute:"labels-hidden",reflect:!0})],li.prototype,"labelsHidden",2);Ao([v({type:Boolean,reflect:!0})],li.prototype,"vertical",1);var lf=Object.defineProperty,cf=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&lf(t,e,n),n};const ur=class ur extends H{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return S`
      <div class="parent">
        <slot></slot>
      </div>
    `}};ur.styles=j`
    :host {
      display: grid;
      min-width: 0;
      min-height: 0;
      height: 100%;
      border: 1px solid var(--bim-ui_bg-contrast-40);
    }

    .parent {
      overflow: hidden;
      position: relative;
    }
  `;let qs=ur;cf([v({type:String,reflect:!0})],qs.prototype,"name");var hf=Object.defineProperty,df=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&hf(t,e,n),n};const fr=class fr extends H{constructor(){super(...arguments),this.charts=[],this._charts=[],this.labels=[]}willUpdate(t){const e=[];this.charts&&e.push(...this.charts),this._charts=[...new Set(e)]}_getLabelColorMap(t){const e={};return t.colors&&this.labels.forEach((s,n)=>{e[s]=t.colors[n%t.colors.length]}),e}_getHideEventData(){var e;const t={};for(const s in this.labels){const n=this.labels[s],o=[];for(const r of Object.values(this._charts[0].inputData.datasets))o.push((e=r[s])==null?void 0:e.data);t[n]=o}return t}render(){if(this._charts.length===0||!this._charts[0].data)return S`<slot name="no-chart"></slot>`;const t=this._charts[0];this.labels=t.inputData.labels;const e=this._getLabelColorMap(t),s=this._getHideEventData();return this.labels.length===0?S`<slot name="missing-data"></slot>`:S`
      <div class="parent">
        ${this.labels.map(n=>S`
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
    `}};fr.styles=j`
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
  `;let Ys=fr;df([v({type:Array,attribute:!1,hasChanged:()=>!0})],Ys.prototype,"charts");/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function os(i){return i+.5|0}const he=(i,t,e)=>Math.max(Math.min(i,e),t);function Mi(i){return he(os(i*2.55),0,255)}function me(i){return he(os(i*255),0,255)}function Xt(i){return he(os(i/2.55)/100,0,1)}function Hr(i){return he(os(i*100),0,100)}const Pt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Jn=[..."0123456789ABCDEF"],uf=i=>Jn[i&15],ff=i=>Jn[(i&240)>>4]+Jn[i&15],ls=i=>(i&240)>>4===(i&15),pf=i=>ls(i.r)&&ls(i.g)&&ls(i.b)&&ls(i.a);function mf(i){var t=i.length,e;return i[0]==="#"&&(t===4||t===5?e={r:255&Pt[i[1]]*17,g:255&Pt[i[2]]*17,b:255&Pt[i[3]]*17,a:t===5?Pt[i[4]]*17:255}:(t===7||t===9)&&(e={r:Pt[i[1]]<<4|Pt[i[2]],g:Pt[i[3]]<<4|Pt[i[4]],b:Pt[i[5]]<<4|Pt[i[6]],a:t===9?Pt[i[7]]<<4|Pt[i[8]]:255})),e}const gf=(i,t)=>i<255?t(i):"";function bf(i){var t=pf(i)?uf:ff;return i?"#"+t(i.r)+t(i.g)+t(i.b)+gf(i.a,t):void 0}const yf=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Jl(i,t,e){const s=t*Math.min(e,1-e),n=(o,r=(o+i/30)%12)=>e-s*Math.max(Math.min(r-3,9-r,1),-1);return[n(0),n(8),n(4)]}function vf(i,t,e){const s=(n,o=(n+i/60)%6)=>e-e*t*Math.max(Math.min(o,4-o,1),0);return[s(5),s(3),s(1)]}function xf(i,t,e){const s=Jl(i,1,.5);let n;for(t+e>1&&(n=1/(t+e),t*=n,e*=n),n=0;n<3;n++)s[n]*=1-t-e,s[n]+=t;return s}function _f(i,t,e,s,n){return i===n?(t-e)/s+(t<e?6:0):t===n?(e-i)/s+2:(i-t)/s+4}function Do(i){const e=i.r/255,s=i.g/255,n=i.b/255,o=Math.max(e,s,n),r=Math.min(e,s,n),a=(o+r)/2;let l,c,h;return o!==r&&(h=o-r,c=a>.5?h/(2-o-r):h/(o+r),l=_f(e,s,n,h,o),l=l*60+.5),[l|0,c||0,a]}function Eo(i,t,e,s){return(Array.isArray(t)?i(t[0],t[1],t[2]):i(t,e,s)).map(me)}function To(i,t,e){return Eo(Jl,i,t,e)}function wf(i,t,e){return Eo(xf,i,t,e)}function kf(i,t,e){return Eo(vf,i,t,e)}function tc(i){return(i%360+360)%360}function Sf(i){const t=yf.exec(i);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?Mi(+t[5]):me(+t[5]));const n=tc(+t[2]),o=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=wf(n,o,r):t[1]==="hsv"?s=kf(n,o,r):s=To(n,o,r),{r:s[0],g:s[1],b:s[2],a:e}}function Cf(i,t){var e=Do(i);e[0]=tc(e[0]+t),e=To(e),i.r=e[0],i.g=e[1],i.b=e[2]}function Mf(i){if(!i)return;const t=Do(i),e=t[0],s=Hr(t[1]),n=Hr(t[2]);return i.a<255?`hsla(${e}, ${s}%, ${n}%, ${Xt(i.a)})`:`hsl(${e}, ${s}%, ${n}%)`}const Wr={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},qr={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function Pf(){const i={},t=Object.keys(qr),e=Object.keys(Wr);let s,n,o,r,a;for(s=0;s<t.length;s++){for(r=a=t[s],n=0;n<e.length;n++)o=e[n],a=a.replace(o,Wr[o]);o=parseInt(qr[r],16),i[a]=[o>>16&255,o>>8&255,o&255]}return i}let cs;function Af(i){cs||(cs=Pf(),cs.transparent=[0,0,0,0]);const t=cs[i.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const Df=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function Ef(i){const t=Df.exec(i);let e=255,s,n,o;if(t){if(t[7]!==s){const r=+t[7];e=t[8]?Mi(r):he(r*255,0,255)}return s=+t[1],n=+t[3],o=+t[5],s=255&(t[2]?Mi(s):he(s,0,255)),n=255&(t[4]?Mi(n):he(n,0,255)),o=255&(t[6]?Mi(o):he(o,0,255)),{r:s,g:n,b:o,a:e}}}function Tf(i){return i&&(i.a<255?`rgba(${i.r}, ${i.g}, ${i.b}, ${Xt(i.a)})`:`rgb(${i.r}, ${i.g}, ${i.b})`)}const Mn=i=>i<=.0031308?i*12.92:Math.pow(i,1/2.4)*1.055-.055,Ke=i=>i<=.04045?i/12.92:Math.pow((i+.055)/1.055,2.4);function Of(i,t,e){const s=Ke(Xt(i.r)),n=Ke(Xt(i.g)),o=Ke(Xt(i.b));return{r:me(Mn(s+e*(Ke(Xt(t.r))-s))),g:me(Mn(n+e*(Ke(Xt(t.g))-n))),b:me(Mn(o+e*(Ke(Xt(t.b))-o))),a:i.a+e*(t.a-i.a)}}function hs(i,t,e){if(i){let s=Do(i);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=To(s),i.r=s[0],i.g=s[1],i.b=s[2]}}function ec(i,t){return i&&Object.assign(t||{},i)}function Yr(i){var t={r:0,g:0,b:0,a:255};return Array.isArray(i)?i.length>=3&&(t={r:i[0],g:i[1],b:i[2],a:255},i.length>3&&(t.a=me(i[3]))):(t=ec(i,{r:0,g:0,b:0,a:1}),t.a=me(t.a)),t}function Lf(i){return i.charAt(0)==="r"?Ef(i):Sf(i)}class ci{constructor(t){if(t instanceof ci)return t;const e=typeof t;let s;e==="object"?s=Yr(t):e==="string"&&(s=mf(t)||Af(t)||Lf(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=ec(this._rgb);return t&&(t.a=Xt(t.a)),t}set rgb(t){this._rgb=Yr(t)}rgbString(){return this._valid?Tf(this._rgb):void 0}hexString(){return this._valid?bf(this._rgb):void 0}hslString(){return this._valid?Mf(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,n=t.rgb;let o;const r=e===o?.5:e,a=2*r-1,l=s.a-n.a,c=((a*l===-1?a:(a+l)/(1+a*l))+1)/2;o=1-c,s.r=255&c*s.r+o*n.r+.5,s.g=255&c*s.g+o*n.g+.5,s.b=255&c*s.b+o*n.b+.5,s.a=r*s.a+(1-r)*n.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=Of(this._rgb,t._rgb,e)),this}clone(){return new ci(this.rgb)}alpha(t){return this._rgb.a=me(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=os(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return hs(this._rgb,2,t),this}darken(t){return hs(this._rgb,2,-t),this}saturate(t){return hs(this._rgb,1,t),this}desaturate(t){return hs(this._rgb,1,-t),this}rotate(t){return Cf(this._rgb,t),this}}function Rf(i){return new ci(i)}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function qt(){}const zf=(()=>{let i=0;return()=>i++})();function L(i){return i==null}function G(i){if(Array.isArray&&Array.isArray(i))return!0;const t=Object.prototype.toString.call(i);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function F(i){return i!==null&&Object.prototype.toString.call(i)==="[object Object]"}function tt(i){return(typeof i=="number"||i instanceof Number)&&isFinite(+i)}function St(i,t){return tt(i)?i:t}function O(i,t){return typeof i>"u"?t:i}const $f=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100:+i/t,ic=(i,t)=>typeof i=="string"&&i.endsWith("%")?parseFloat(i)/100*t:+i;function U(i,t,e){if(i&&typeof i.call=="function")return i.apply(e,t)}function W(i,t,e,s){let n,o,r;if(G(i))for(o=i.length,n=0;n<o;n++)t.call(e,i[n],n);else if(F(i))for(r=Object.keys(i),o=r.length,n=0;n<o;n++)t.call(e,i[r[n]],r[n])}function Us(i,t){let e,s,n,o;if(!i||!t||i.length!==t.length)return!1;for(e=0,s=i.length;e<s;++e)if(n=i[e],o=t[e],n.datasetIndex!==o.datasetIndex||n.index!==o.index)return!1;return!0}function Xs(i){if(G(i))return i.map(Xs);if(F(i)){const t=Object.create(null),e=Object.keys(i),s=e.length;let n=0;for(;n<s;++n)t[e[n]]=Xs(i[e[n]]);return t}return i}function sc(i){return["__proto__","prototype","constructor"].indexOf(i)===-1}function If(i,t,e,s){if(!sc(i))return;const n=t[i],o=e[i];F(n)&&F(o)?Wt(n,o,s):t[i]=Xs(o)}function Wt(i,t,e){const s=G(t)?t:[t],n=s.length;if(!F(i))return i;e=e||{};const o=e.merger||If;let r;for(let a=0;a<n;++a){if(r=s[a],!F(r))continue;const l=Object.keys(r);for(let c=0,h=l.length;c<h;++c)o(l[c],i,r,e)}return i}function Ti(i,t){return Wt(i,t,{merger:Ff})}function Ff(i,t,e){if(!sc(i))return;const s=t[i],n=e[i];F(s)&&F(n)?Ti(s,n):Object.prototype.hasOwnProperty.call(t,i)||(t[i]=Xs(n))}const Ur={"":i=>i,x:i=>i.x,y:i=>i.y};function Bf(i){const t=i.split("."),e=[];let s="";for(const n of t)s+=n,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function Vf(i){const t=Bf(i);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function _e(i,t){return(Ur[t]||(Ur[t]=Vf(t)))(i)}function Oo(i){return i.charAt(0).toUpperCase()+i.slice(1)}const Hi=i=>typeof i<"u",we=i=>typeof i=="function",Xr=(i,t)=>{if(i.size!==t.size)return!1;for(const e of i)if(!t.has(e))return!1;return!0};function jf(i){return i.type==="mouseup"||i.type==="click"||i.type==="contextmenu"}const N=Math.PI,K=2*N,Nf=K+N,Gs=Number.POSITIVE_INFINITY,Hf=N/180,et=N/2,Ee=N/4,Gr=N*2/3,de=Math.log10,Bt=Math.sign;function Oi(i,t,e){return Math.abs(i-t)<e}function Kr(i){const t=Math.round(i);i=Oi(i,t,i/1e3)?t:i;const e=Math.pow(10,Math.floor(de(i))),s=i/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function Wf(i){const t=[],e=Math.sqrt(i);let s;for(s=1;s<e;s++)i%s===0&&(t.push(s),t.push(i/s));return e===(e|0)&&t.push(e),t.sort((n,o)=>n-o).pop(),t}function qf(i){return typeof i=="symbol"||typeof i=="object"&&i!==null&&!(Symbol.toPrimitive in i||"toString"in i||"valueOf"in i)}function hi(i){return!qf(i)&&!isNaN(parseFloat(i))&&isFinite(i)}function Yf(i,t){const e=Math.round(i);return e-t<=i&&e+t>=i}function nc(i,t,e){let s,n,o;for(s=0,n=i.length;s<n;s++)o=i[s][e],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function Ot(i){return i*(N/180)}function Lo(i){return i*(180/N)}function Qr(i){if(!tt(i))return;let t=1,e=0;for(;Math.round(i*t)/t!==i;)t*=10,e++;return e}function oc(i,t){const e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);let o=Math.atan2(s,e);return o<-.5*N&&(o+=K),{angle:o,distance:n}}function to(i,t){return Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2))}function Uf(i,t){return(i-t+Nf)%K-N}function ut(i){return(i%K+K)%K}function Wi(i,t,e,s){const n=ut(i),o=ut(t),r=ut(e),a=ut(o-n),l=ut(r-n),c=ut(n-o),h=ut(n-r);return n===o||n===r||s&&o===r||a>l&&c<h}function at(i,t,e){return Math.max(t,Math.min(e,i))}function Xf(i){return at(i,-32768,32767)}function Kt(i,t,e,s=1e-6){return i>=Math.min(t,e)-s&&i<=Math.max(t,e)+s}function Ro(i,t,e){e=e||(r=>i[r]<t);let s=i.length-1,n=0,o;for(;s-n>1;)o=n+s>>1,e(o)?n=o:s=o;return{lo:n,hi:s}}const Qt=(i,t,e,s)=>Ro(i,e,s?n=>{const o=i[n][t];return o<e||o===e&&i[n+1][t]===e}:n=>i[n][t]<e),Gf=(i,t,e)=>Ro(i,e,s=>i[s][t]>=e);function Kf(i,t,e){let s=0,n=i.length;for(;s<n&&i[s]<t;)s++;for(;n>s&&i[n-1]>e;)n--;return s>0||n<i.length?i.slice(s,n):i}const rc=["push","pop","shift","splice","unshift"];function Qf(i,t){if(i._chartjs){i._chartjs.listeners.push(t);return}Object.defineProperty(i,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),rc.forEach(e=>{const s="_onData"+Oo(e),n=i[e];Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value(...o){const r=n.apply(this,o);return i._chartjs.listeners.forEach(a=>{typeof a[s]=="function"&&a[s](...o)}),r}})})}function Zr(i,t){const e=i._chartjs;if(!e)return;const s=e.listeners,n=s.indexOf(t);n!==-1&&s.splice(n,1),!(s.length>0)&&(rc.forEach(o=>{delete i[o]}),delete i._chartjs)}function ac(i){const t=new Set(i);return t.size===i.length?i:Array.from(t)}const lc=function(){return typeof window>"u"?function(i){return i()}:window.requestAnimationFrame}();function cc(i,t){let e=[],s=!1;return function(...n){e=n,s||(s=!0,lc.call(window,()=>{s=!1,i.apply(t,e)}))}}function Zf(i,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(i,t,s)):i.apply(this,s),t}}const zo=i=>i==="start"?"left":i==="end"?"right":"center",dt=(i,t,e)=>i==="start"?t:i==="end"?e:(t+e)/2,Jf=(i,t,e,s)=>i===(s?"left":"right")?e:i==="center"?(t+e)/2:t;function hc(i,t,e){const s=t.length;let n=0,o=s;if(i._sorted){const{iScale:r,vScale:a,_parsed:l}=i,c=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null,h=r.axis,{min:d,max:u,minDefined:f,maxDefined:p}=r.getUserBounds();if(f){if(n=Math.min(Qt(l,h,d).lo,e?s:Qt(t,h,r.getPixelForValue(d)).lo),c){const m=l.slice(0,n+1).reverse().findIndex(g=>!L(g[a.axis]));n-=Math.max(0,m)}n=at(n,0,s-1)}if(p){let m=Math.max(Qt(l,r.axis,u,!0).hi+1,e?0:Qt(t,h,r.getPixelForValue(u),!0).hi+1);if(c){const g=l.slice(m-1).findIndex(b=>!L(b[a.axis]));m+=Math.max(0,g)}o=at(m,n,s)-n}else o=s-n}return{start:n,count:o}}function dc(i){const{xScale:t,yScale:e,_scaleRanges:s}=i,n={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return i._scaleRanges=n,!0;const o=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,n),o}const ds=i=>i===0||i===1,Jr=(i,t,e)=>-(Math.pow(2,10*(i-=1))*Math.sin((i-t)*K/e)),ta=(i,t,e)=>Math.pow(2,-10*i)*Math.sin((i-t)*K/e)+1,Li={linear:i=>i,easeInQuad:i=>i*i,easeOutQuad:i=>-i*(i-2),easeInOutQuad:i=>(i/=.5)<1?.5*i*i:-.5*(--i*(i-2)-1),easeInCubic:i=>i*i*i,easeOutCubic:i=>(i-=1)*i*i+1,easeInOutCubic:i=>(i/=.5)<1?.5*i*i*i:.5*((i-=2)*i*i+2),easeInQuart:i=>i*i*i*i,easeOutQuart:i=>-((i-=1)*i*i*i-1),easeInOutQuart:i=>(i/=.5)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2),easeInQuint:i=>i*i*i*i*i,easeOutQuint:i=>(i-=1)*i*i*i*i+1,easeInOutQuint:i=>(i/=.5)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2),easeInSine:i=>-Math.cos(i*et)+1,easeOutSine:i=>Math.sin(i*et),easeInOutSine:i=>-.5*(Math.cos(N*i)-1),easeInExpo:i=>i===0?0:Math.pow(2,10*(i-1)),easeOutExpo:i=>i===1?1:-Math.pow(2,-10*i)+1,easeInOutExpo:i=>ds(i)?i:i<.5?.5*Math.pow(2,10*(i*2-1)):.5*(-Math.pow(2,-10*(i*2-1))+2),easeInCirc:i=>i>=1?i:-(Math.sqrt(1-i*i)-1),easeOutCirc:i=>Math.sqrt(1-(i-=1)*i),easeInOutCirc:i=>(i/=.5)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1),easeInElastic:i=>ds(i)?i:Jr(i,.075,.3),easeOutElastic:i=>ds(i)?i:ta(i,.075,.3),easeInOutElastic(i){return ds(i)?i:i<.5?.5*Jr(i*2,.1125,.45):.5+.5*ta(i*2-1,.1125,.45)},easeInBack(i){return i*i*((1.70158+1)*i-1.70158)},easeOutBack(i){return(i-=1)*i*((1.70158+1)*i+1.70158)+1},easeInOutBack(i){let t=1.70158;return(i/=.5)<1?.5*(i*i*(((t*=1.525)+1)*i-t)):.5*((i-=2)*i*(((t*=1.525)+1)*i+t)+2)},easeInBounce:i=>1-Li.easeOutBounce(1-i),easeOutBounce(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},easeInOutBounce:i=>i<.5?Li.easeInBounce(i*2)*.5:Li.easeOutBounce(i*2-1)*.5+.5};function $o(i){if(i&&typeof i=="object"){const t=i.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function ea(i){return $o(i)?i:new ci(i)}function Pn(i){return $o(i)?i:new ci(i).saturate(.5).darken(.1).hexString()}const tp=["x","y","borderWidth","radius","tension"],ep=["color","borderColor","backgroundColor"];function ip(i){i.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),i.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),i.set("animations",{colors:{type:"color",properties:ep},numbers:{type:"number",properties:tp}}),i.describe("animations",{_fallback:"animation"}),i.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function sp(i){i.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const ia=new Map;function np(i,t){t=t||{};const e=i+JSON.stringify(t);let s=ia.get(e);return s||(s=new Intl.NumberFormat(i,t),ia.set(e,s)),s}function rs(i,t,e){return np(t,e).format(i)}const uc={values(i){return G(i)?i:""+i},numeric(i,t,e){if(i===0)return"0";const s=this.chart.options.locale;let n,o=i;if(e.length>1){const c=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(c<1e-4||c>1e15)&&(n="scientific"),o=op(i,e)}const r=de(Math.abs(o)),a=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),l={notation:n,minimumFractionDigits:a,maximumFractionDigits:a};return Object.assign(l,this.options.ticks.format),rs(i,s,l)},logarithmic(i,t,e){if(i===0)return"0";const s=e[t].significand||i/Math.pow(10,Math.floor(de(i)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?uc.numeric.call(this,i,t,e):""}};function op(i,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&i!==Math.floor(i)&&(e=i-Math.floor(i)),e}var mn={formatters:uc};function rp(i){i.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:mn.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),i.route("scale.ticks","color","","color"),i.route("scale.grid","color","","borderColor"),i.route("scale.border","color","","borderColor"),i.route("scale.title","color","","color"),i.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),i.describe("scales",{_fallback:"scale"}),i.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const We=Object.create(null),eo=Object.create(null);function Ri(i,t){if(!t)return i;const e=t.split(".");for(let s=0,n=e.length;s<n;++s){const o=e[s];i=i[o]||(i[o]=Object.create(null))}return i}function An(i,t,e){return typeof t=="string"?Wt(Ri(i,t),e):Wt(Ri(i,""),t)}class ap{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,n)=>Pn(n.backgroundColor),this.hoverBorderColor=(s,n)=>Pn(n.borderColor),this.hoverColor=(s,n)=>Pn(n.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return An(this,t,e)}get(t){return Ri(this,t)}describe(t,e){return An(eo,t,e)}override(t,e){return An(We,t,e)}route(t,e,s,n){const o=Ri(this,t),r=Ri(this,s),a="_"+e;Object.defineProperties(o,{[a]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const l=this[a],c=r[n];return F(l)?Object.assign({},c,l):O(l,c)},set(l){this[a]=l}}})}apply(t){t.forEach(e=>e(this))}}var Q=new ap({_scriptable:i=>!i.startsWith("on"),_indexable:i=>i!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[ip,sp,rp]);function lp(i){return!i||L(i.size)||L(i.family)?null:(i.style?i.style+" ":"")+(i.weight?i.weight+" ":"")+i.size+"px "+i.family}function Ks(i,t,e,s,n){let o=t[n];return o||(o=t[n]=i.measureText(n).width,e.push(n)),o>s&&(s=o),s}function cp(i,t,e,s){s=s||{};let n=s.data=s.data||{},o=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(n=s.data={},o=s.garbageCollect=[],s.font=t),i.save(),i.font=t;let r=0;const a=e.length;let l,c,h,d,u;for(l=0;l<a;l++)if(d=e[l],d!=null&&!G(d))r=Ks(i,n,o,r,d);else if(G(d))for(c=0,h=d.length;c<h;c++)u=d[c],u!=null&&!G(u)&&(r=Ks(i,n,o,r,u));i.restore();const f=o.length/2;if(f>e.length){for(l=0;l<f;l++)delete n[o[l]];o.splice(0,f)}return r}function Te(i,t,e){const s=i.currentDevicePixelRatio,n=e!==0?Math.max(e/2,.5):0;return Math.round((t-n)*s)/s+n}function sa(i,t){!t&&!i||(t=t||i.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,i.width,i.height),t.restore())}function io(i,t,e,s){fc(i,t,e,s,null)}function fc(i,t,e,s,n){let o,r,a,l,c,h,d,u;const f=t.pointStyle,p=t.rotation,m=t.radius;let g=(p||0)*Hf;if(f&&typeof f=="object"&&(o=f.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){i.save(),i.translate(e,s),i.rotate(g),i.drawImage(f,-f.width/2,-f.height/2,f.width,f.height),i.restore();return}if(!(isNaN(m)||m<=0)){switch(i.beginPath(),f){default:n?i.ellipse(e,s,n/2,m,0,0,K):i.arc(e,s,m,0,K),i.closePath();break;case"triangle":h=n?n/2:m,i.moveTo(e+Math.sin(g)*h,s-Math.cos(g)*m),g+=Gr,i.lineTo(e+Math.sin(g)*h,s-Math.cos(g)*m),g+=Gr,i.lineTo(e+Math.sin(g)*h,s-Math.cos(g)*m),i.closePath();break;case"rectRounded":c=m*.516,l=m-c,r=Math.cos(g+Ee)*l,d=Math.cos(g+Ee)*(n?n/2-c:l),a=Math.sin(g+Ee)*l,u=Math.sin(g+Ee)*(n?n/2-c:l),i.arc(e-d,s-a,c,g-N,g-et),i.arc(e+u,s-r,c,g-et,g),i.arc(e+d,s+a,c,g,g+et),i.arc(e-u,s+r,c,g+et,g+N),i.closePath();break;case"rect":if(!p){l=Math.SQRT1_2*m,h=n?n/2:l,i.rect(e-h,s-l,2*h,2*l);break}g+=Ee;case"rectRot":d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+u,s-r),i.lineTo(e+d,s+a),i.lineTo(e-u,s+r),i.closePath();break;case"crossRot":g+=Ee;case"cross":d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r);break;case"star":d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r),g+=Ee,d=Math.cos(g)*(n?n/2:m),r=Math.cos(g)*m,a=Math.sin(g)*m,u=Math.sin(g)*(n?n/2:m),i.moveTo(e-d,s-a),i.lineTo(e+d,s+a),i.moveTo(e+u,s-r),i.lineTo(e-u,s+r);break;case"line":r=n?n/2:Math.cos(g)*m,a=Math.sin(g)*m,i.moveTo(e-r,s-a),i.lineTo(e+r,s+a);break;case"dash":i.moveTo(e,s),i.lineTo(e+Math.cos(g)*(n?n/2:m),s+Math.sin(g)*m);break;case!1:i.closePath();break}i.fill(),t.borderWidth>0&&i.stroke()}}function Zt(i,t,e){return e=e||.5,!t||i&&i.x>t.left-e&&i.x<t.right+e&&i.y>t.top-e&&i.y<t.bottom+e}function gn(i,t){i.save(),i.beginPath(),i.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),i.clip()}function bn(i){i.restore()}function hp(i,t,e,s,n){if(!t)return i.lineTo(e.x,e.y);if(n==="middle"){const o=(t.x+e.x)/2;i.lineTo(o,t.y),i.lineTo(o,e.y)}else n==="after"!=!!s?i.lineTo(t.x,e.y):i.lineTo(e.x,t.y);i.lineTo(e.x,e.y)}function dp(i,t,e,s){if(!t)return i.lineTo(e.x,e.y);i.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function up(i,t){t.translation&&i.translate(t.translation[0],t.translation[1]),L(t.rotation)||i.rotate(t.rotation),t.color&&(i.fillStyle=t.color),t.textAlign&&(i.textAlign=t.textAlign),t.textBaseline&&(i.textBaseline=t.textBaseline)}function fp(i,t,e,s,n){if(n.strikethrough||n.underline){const o=i.measureText(s),r=t-o.actualBoundingBoxLeft,a=t+o.actualBoundingBoxRight,l=e-o.actualBoundingBoxAscent,c=e+o.actualBoundingBoxDescent,h=n.strikethrough?(l+c)/2:c;i.strokeStyle=i.fillStyle,i.beginPath(),i.lineWidth=n.decorationWidth||2,i.moveTo(r,h),i.lineTo(a,h),i.stroke()}}function pp(i,t){const e=i.fillStyle;i.fillStyle=t.color,i.fillRect(t.left,t.top,t.width,t.height),i.fillStyle=e}function qe(i,t,e,s,n,o={}){const r=G(t)?t:[t],a=o.strokeWidth>0&&o.strokeColor!=="";let l,c;for(i.save(),i.font=n.string,up(i,o),l=0;l<r.length;++l)c=r[l],o.backdrop&&pp(i,o.backdrop),a&&(o.strokeColor&&(i.strokeStyle=o.strokeColor),L(o.strokeWidth)||(i.lineWidth=o.strokeWidth),i.strokeText(c,e,s,o.maxWidth)),i.fillText(c,e,s,o.maxWidth),fp(i,e,s,c,o),s+=Number(n.lineHeight);i.restore()}function qi(i,t){const{x:e,y:s,w:n,h:o,radius:r}=t;i.arc(e+r.topLeft,s+r.topLeft,r.topLeft,1.5*N,N,!0),i.lineTo(e,s+o-r.bottomLeft),i.arc(e+r.bottomLeft,s+o-r.bottomLeft,r.bottomLeft,N,et,!0),i.lineTo(e+n-r.bottomRight,s+o),i.arc(e+n-r.bottomRight,s+o-r.bottomRight,r.bottomRight,et,0,!0),i.lineTo(e+n,s+r.topRight),i.arc(e+n-r.topRight,s+r.topRight,r.topRight,0,-et,!0),i.lineTo(e+r.topLeft,s)}const mp=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,gp=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function bp(i,t){const e=(""+i).match(mp);if(!e||e[1]==="normal")return t*1.2;switch(i=+e[2],e[3]){case"px":return i;case"%":i/=100;break}return t*i}const yp=i=>+i||0;function Io(i,t){const e={},s=F(t),n=s?Object.keys(t):t,o=F(i)?s?r=>O(i[r],i[t[r]]):r=>i[r]:()=>i;for(const r of n)e[r]=yp(o(r));return e}function pc(i){return Io(i,{top:"y",right:"x",bottom:"y",left:"x"})}function Fe(i){return Io(i,["topLeft","topRight","bottomLeft","bottomRight"])}function ct(i){const t=pc(i);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function nt(i,t){i=i||{},t=t||Q.font;let e=O(i.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=O(i.style,t.style);s&&!(""+s).match(gp)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const n={family:O(i.family,t.family),lineHeight:bp(O(i.lineHeight,t.lineHeight),e),size:e,style:s,weight:O(i.weight,t.weight),string:""};return n.string=lp(n),n}function X(i,t,e,s){let n,o,r;for(n=0,o=i.length;n<o;++n)if(r=i[n],r!==void 0&&(t!==void 0&&typeof r=="function"&&(r=r(t)),e!==void 0&&G(r)&&(r=r[e%r.length]),r!==void 0))return r}function vp(i,t,e){const{min:s,max:n}=i,o=ic(t,(n-s)/2),r=(a,l)=>e&&a===0?0:a+l;return{min:r(s,-Math.abs(o)),max:r(n,o)}}function Me(i,t){return Object.assign(Object.create(i),t)}function Fo(i,t=[""],e,s,n=()=>i[0]){const o=e||i;typeof s>"u"&&(s=yc("_fallback",i));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:i,_rootScopes:o,_fallback:s,_getTarget:n,override:a=>Fo([a,...i],t,o,s)};return new Proxy(r,{deleteProperty(a,l){return delete a[l],delete a._keys,delete i[0][l],!0},get(a,l){return gc(a,l,()=>Pp(l,t,i,a))},getOwnPropertyDescriptor(a,l){return Reflect.getOwnPropertyDescriptor(a._scopes[0],l)},getPrototypeOf(){return Reflect.getPrototypeOf(i[0])},has(a,l){return oa(a).includes(l)},ownKeys(a){return oa(a)},set(a,l,c){const h=a._storage||(a._storage=n());return a[l]=h[l]=c,delete a._keys,!0}})}function di(i,t,e,s){const n={_cacheable:!1,_proxy:i,_context:t,_subProxy:e,_stack:new Set,_descriptors:mc(i,s),setContext:o=>di(i,o,e,s),override:o=>di(i.override(o),t,e,s)};return new Proxy(n,{deleteProperty(o,r){return delete o[r],delete i[r],!0},get(o,r,a){return gc(o,r,()=>_p(o,r,a))},getOwnPropertyDescriptor(o,r){return o._descriptors.allKeys?Reflect.has(i,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(i,r)},getPrototypeOf(){return Reflect.getPrototypeOf(i)},has(o,r){return Reflect.has(i,r)},ownKeys(){return Reflect.ownKeys(i)},set(o,r,a){return i[r]=a,delete o[r],!0}})}function mc(i,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:n=t.allKeys}=i;return{allKeys:n,scriptable:e,indexable:s,isScriptable:we(e)?e:()=>e,isIndexable:we(s)?s:()=>s}}const xp=(i,t)=>i?i+Oo(t):t,Bo=(i,t)=>F(t)&&i!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function gc(i,t,e){if(Object.prototype.hasOwnProperty.call(i,t)||t==="constructor")return i[t];const s=e();return i[t]=s,s}function _p(i,t,e){const{_proxy:s,_context:n,_subProxy:o,_descriptors:r}=i;let a=s[t];return we(a)&&r.isScriptable(t)&&(a=wp(t,a,i,e)),G(a)&&a.length&&(a=kp(t,a,i,r.isIndexable)),Bo(t,a)&&(a=di(a,n,o&&o[t],r)),a}function wp(i,t,e,s){const{_proxy:n,_context:o,_subProxy:r,_stack:a}=e;if(a.has(i))throw new Error("Recursion detected: "+Array.from(a).join("->")+"->"+i);a.add(i);let l=t(o,r||s);return a.delete(i),Bo(i,l)&&(l=Vo(n._scopes,n,i,l)),l}function kp(i,t,e,s){const{_proxy:n,_context:o,_subProxy:r,_descriptors:a}=e;if(typeof o.index<"u"&&s(i))return t[o.index%t.length];if(F(t[0])){const l=t,c=n._scopes.filter(h=>h!==l);t=[];for(const h of l){const d=Vo(c,n,i,h);t.push(di(d,o,r&&r[i],a))}}return t}function bc(i,t,e){return we(i)?i(t,e):i}const Sp=(i,t)=>i===!0?t:typeof i=="string"?_e(t,i):void 0;function Cp(i,t,e,s,n){for(const o of t){const r=Sp(e,o);if(r){i.add(r);const a=bc(r._fallback,e,n);if(typeof a<"u"&&a!==e&&a!==s)return a}else if(r===!1&&typeof s<"u"&&e!==s)return null}return!1}function Vo(i,t,e,s){const n=t._rootScopes,o=bc(t._fallback,e,s),r=[...i,...n],a=new Set;a.add(s);let l=na(a,r,e,o||e,s);return l===null||typeof o<"u"&&o!==e&&(l=na(a,r,o,l,s),l===null)?!1:Fo(Array.from(a),[""],n,o,()=>Mp(t,e,s))}function na(i,t,e,s,n){for(;e;)e=Cp(i,t,e,s,n);return e}function Mp(i,t,e){const s=i._getTarget();t in s||(s[t]={});const n=s[t];return G(n)&&F(e)?e:n||{}}function Pp(i,t,e,s){let n;for(const o of t)if(n=yc(xp(o,i),e),typeof n<"u")return Bo(i,n)?Vo(e,s,i,n):n}function yc(i,t){for(const e of t){if(!e)continue;const s=e[i];if(typeof s<"u")return s}}function oa(i){let t=i._keys;return t||(t=i._keys=Ap(i._scopes)),t}function Ap(i){const t=new Set;for(const e of i)for(const s of Object.keys(e).filter(n=>!n.startsWith("_")))t.add(s);return Array.from(t)}function vc(i,t,e,s){const{iScale:n}=i,{key:o="r"}=this._parsing,r=new Array(s);let a,l,c,h;for(a=0,l=s;a<l;++a)c=a+e,h=t[c],r[a]={r:n.parse(_e(h,o),c)};return r}const Dp=Number.EPSILON||1e-14,ui=(i,t)=>t<i.length&&!i[t].skip&&i[t],xc=i=>i==="x"?"y":"x";function Ep(i,t,e,s){const n=i.skip?t:i,o=t,r=e.skip?t:e,a=to(o,n),l=to(r,o);let c=a/(a+l),h=l/(a+l);c=isNaN(c)?0:c,h=isNaN(h)?0:h;const d=s*c,u=s*h;return{previous:{x:o.x-d*(r.x-n.x),y:o.y-d*(r.y-n.y)},next:{x:o.x+u*(r.x-n.x),y:o.y+u*(r.y-n.y)}}}function Tp(i,t,e){const s=i.length;let n,o,r,a,l,c=ui(i,0);for(let h=0;h<s-1;++h)if(l=c,c=ui(i,h+1),!(!l||!c)){if(Oi(t[h],0,Dp)){e[h]=e[h+1]=0;continue}n=e[h]/t[h],o=e[h+1]/t[h],a=Math.pow(n,2)+Math.pow(o,2),!(a<=9)&&(r=3/Math.sqrt(a),e[h]=n*r*t[h],e[h+1]=o*r*t[h])}}function Op(i,t,e="x"){const s=xc(e),n=i.length;let o,r,a,l=ui(i,0);for(let c=0;c<n;++c){if(r=a,a=l,l=ui(i,c+1),!a)continue;const h=a[e],d=a[s];r&&(o=(h-r[e])/3,a[`cp1${e}`]=h-o,a[`cp1${s}`]=d-o*t[c]),l&&(o=(l[e]-h)/3,a[`cp2${e}`]=h+o,a[`cp2${s}`]=d+o*t[c])}}function Lp(i,t="x"){const e=xc(t),s=i.length,n=Array(s).fill(0),o=Array(s);let r,a,l,c=ui(i,0);for(r=0;r<s;++r)if(a=l,l=c,c=ui(i,r+1),!!l){if(c){const h=c[t]-l[t];n[r]=h!==0?(c[e]-l[e])/h:0}o[r]=a?c?Bt(n[r-1])!==Bt(n[r])?0:(n[r-1]+n[r])/2:n[r-1]:n[r]}Tp(i,n,o),Op(i,o,t)}function us(i,t,e){return Math.max(Math.min(i,e),t)}function Rp(i,t){let e,s,n,o,r,a=Zt(i[0],t);for(e=0,s=i.length;e<s;++e)r=o,o=a,a=e<s-1&&Zt(i[e+1],t),o&&(n=i[e],r&&(n.cp1x=us(n.cp1x,t.left,t.right),n.cp1y=us(n.cp1y,t.top,t.bottom)),a&&(n.cp2x=us(n.cp2x,t.left,t.right),n.cp2y=us(n.cp2y,t.top,t.bottom)))}function zp(i,t,e,s,n){let o,r,a,l;if(t.spanGaps&&(i=i.filter(c=>!c.skip)),t.cubicInterpolationMode==="monotone")Lp(i,n);else{let c=s?i[i.length-1]:i[0];for(o=0,r=i.length;o<r;++o)a=i[o],l=Ep(c,a,i[Math.min(o+1,r-(s?0:1))%r],t.tension),a.cp1x=l.previous.x,a.cp1y=l.previous.y,a.cp2x=l.next.x,a.cp2y=l.next.y,c=a}t.capBezierPoints&&Rp(i,e)}function jo(){return typeof window<"u"&&typeof document<"u"}function No(i){let t=i.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function Qs(i,t,e){let s;return typeof i=="string"?(s=parseInt(i,10),i.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=i,s}const yn=i=>i.ownerDocument.defaultView.getComputedStyle(i,null);function $p(i,t){return yn(i).getPropertyValue(t)}const Ip=["top","right","bottom","left"];function Be(i,t,e){const s={};e=e?"-"+e:"";for(let n=0;n<4;n++){const o=Ip[n];s[o]=parseFloat(i[t+"-"+o+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const Fp=(i,t,e)=>(i>0||t>0)&&(!e||!e.shadowRoot);function Bp(i,t){const e=i.touches,s=e&&e.length?e[0]:i,{offsetX:n,offsetY:o}=s;let r=!1,a,l;if(Fp(n,o,i.target))a=n,l=o;else{const c=t.getBoundingClientRect();a=s.clientX-c.left,l=s.clientY-c.top,r=!0}return{x:a,y:l,box:r}}function Re(i,t){if("native"in i)return i;const{canvas:e,currentDevicePixelRatio:s}=t,n=yn(e),o=n.boxSizing==="border-box",r=Be(n,"padding"),a=Be(n,"border","width"),{x:l,y:c,box:h}=Bp(i,e),d=r.left+(h&&a.left),u=r.top+(h&&a.top);let{width:f,height:p}=t;return o&&(f-=r.width+a.width,p-=r.height+a.height),{x:Math.round((l-d)/f*e.width/s),y:Math.round((c-u)/p*e.height/s)}}function Vp(i,t,e){let s,n;if(t===void 0||e===void 0){const o=i&&No(i);if(!o)t=i.clientWidth,e=i.clientHeight;else{const r=o.getBoundingClientRect(),a=yn(o),l=Be(a,"border","width"),c=Be(a,"padding");t=r.width-c.width-l.width,e=r.height-c.height-l.height,s=Qs(a.maxWidth,o,"clientWidth"),n=Qs(a.maxHeight,o,"clientHeight")}}return{width:t,height:e,maxWidth:s||Gs,maxHeight:n||Gs}}const ue=i=>Math.round(i*10)/10;function jp(i,t,e,s){const n=yn(i),o=Be(n,"margin"),r=Qs(n.maxWidth,i,"clientWidth")||Gs,a=Qs(n.maxHeight,i,"clientHeight")||Gs,l=Vp(i,t,e);let{width:c,height:h}=l;if(n.boxSizing==="content-box"){const u=Be(n,"border","width"),f=Be(n,"padding");c-=f.width+u.width,h-=f.height+u.height}return c=Math.max(0,c-o.width),h=Math.max(0,s?c/s:h-o.height),c=ue(Math.min(c,r,l.maxWidth)),h=ue(Math.min(h,a,l.maxHeight)),c&&!h&&(h=ue(c/2)),(t!==void 0||e!==void 0)&&s&&l.height&&h>l.height&&(h=l.height,c=ue(Math.floor(h*s))),{width:c,height:h}}function ra(i,t,e){const s=t||1,n=ue(i.height*s),o=ue(i.width*s);i.height=ue(i.height),i.width=ue(i.width);const r=i.canvas;return r.style&&(e||!r.style.height&&!r.style.width)&&(r.style.height=`${i.height}px`,r.style.width=`${i.width}px`),i.currentDevicePixelRatio!==s||r.height!==n||r.width!==o?(i.currentDevicePixelRatio=s,r.height=n,r.width=o,i.ctx.setTransform(s,0,0,s,0,0),!0):!1}const Np=function(){let i=!1;try{const t={get passive(){return i=!0,!1}};jo()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return i}();function aa(i,t){const e=$p(i,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function ze(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:i.y+e*(t.y-i.y)}}function Hp(i,t,e,s){return{x:i.x+e*(t.x-i.x),y:s==="middle"?e<.5?i.y:t.y:s==="after"?e<1?i.y:t.y:e>0?t.y:i.y}}function Wp(i,t,e,s){const n={x:i.cp2x,y:i.cp2y},o={x:t.cp1x,y:t.cp1y},r=ze(i,n,e),a=ze(n,o,e),l=ze(o,t,e),c=ze(r,a,e),h=ze(a,l,e);return ze(c,h,e)}const qp=function(i,t){return{x(e){return i+i+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},Yp=function(){return{x(i){return i},setWidth(i){},textAlign(i){return i},xPlus(i,t){return i+t},leftForLtr(i,t){return i}}};function ti(i,t,e){return i?qp(t,e):Yp()}function _c(i,t){let e,s;(t==="ltr"||t==="rtl")&&(e=i.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),i.prevTextDirection=s)}function wc(i,t){t!==void 0&&(delete i.prevTextDirection,i.canvas.style.setProperty("direction",t[0],t[1]))}function kc(i){return i==="angle"?{between:Wi,compare:Uf,normalize:ut}:{between:Kt,compare:(t,e)=>t-e,normalize:t=>t}}function la({start:i,end:t,count:e,loop:s,style:n}){return{start:i%e,end:t%e,loop:s&&(t-i+1)%e===0,style:n}}function Up(i,t,e){const{property:s,start:n,end:o}=e,{between:r,normalize:a}=kc(s),l=t.length;let{start:c,end:h,loop:d}=i,u,f;if(d){for(c+=l,h+=l,u=0,f=l;u<f&&r(a(t[c%l][s]),n,o);++u)c--,h--;c%=l,h%=l}return h<c&&(h+=l),{start:c,end:h,loop:d,style:i.style}}function Sc(i,t,e){if(!e)return[i];const{property:s,start:n,end:o}=e,r=t.length,{compare:a,between:l,normalize:c}=kc(s),{start:h,end:d,loop:u,style:f}=Up(i,t,e),p=[];let m=!1,g=null,b,y,w;const _=()=>l(n,w,b)&&a(n,w)!==0,x=()=>a(o,b)===0||l(o,w,b),k=()=>m||_(),C=()=>!m||x();for(let M=h,A=h;M<=d;++M)y=t[M%r],!y.skip&&(b=c(y[s]),b!==w&&(m=l(b,n,o),g===null&&k()&&(g=a(b,n)===0?M:A),g!==null&&C()&&(p.push(la({start:g,end:M,loop:u,count:r,style:f})),g=null),A=M,w=b));return g!==null&&p.push(la({start:g,end:d,loop:u,count:r,style:f})),p}function Cc(i,t){const e=[],s=i.segments;for(let n=0;n<s.length;n++){const o=Sc(s[n],i.points,t);o.length&&e.push(...o)}return e}function Xp(i,t,e,s){let n=0,o=t-1;if(e&&!s)for(;n<t&&!i[n].skip;)n++;for(;n<t&&i[n].skip;)n++;for(n%=t,e&&(o+=n);o>n&&i[o%t].skip;)o--;return o%=t,{start:n,end:o}}function Gp(i,t,e,s){const n=i.length,o=[];let r=t,a=i[t],l;for(l=t+1;l<=e;++l){const c=i[l%n];c.skip||c.stop?a.skip||(s=!1,o.push({start:t%n,end:(l-1)%n,loop:s}),t=r=c.stop?l:null):(r=l,a.skip&&(t=l)),a=c}return r!==null&&o.push({start:t%n,end:r%n,loop:s}),o}function Kp(i,t){const e=i.points,s=i.options.spanGaps,n=e.length;if(!n)return[];const o=!!i._loop,{start:r,end:a}=Xp(e,n,o,s);if(s===!0)return ca(i,[{start:r,end:a,loop:o}],e,t);const l=a<r?a+n:a,c=!!i._fullLoop&&r===0&&a===n-1;return ca(i,Gp(e,r,l,c),e,t)}function ca(i,t,e,s){return!s||!s.setContext||!e?t:Qp(i,t,e,s)}function Qp(i,t,e,s){const n=i._chart.getContext(),o=ha(i.options),{_datasetIndex:r,options:{spanGaps:a}}=i,l=e.length,c=[];let h=o,d=t[0].start,u=d;function f(p,m,g,b){const y=a?-1:1;if(p!==m){for(p+=l;e[p%l].skip;)p-=y;for(;e[m%l].skip;)m+=y;p%l!==m%l&&(c.push({start:p%l,end:m%l,loop:g,style:b}),h=b,d=m%l)}}for(const p of t){d=a?d:p.start;let m=e[d%l],g;for(u=d+1;u<=p.end;u++){const b=e[u%l];g=ha(s.setContext(Me(n,{type:"segment",p0:m,p1:b,p0DataIndex:(u-1)%l,p1DataIndex:u%l,datasetIndex:r}))),Zp(g,h)&&f(d,u-1,p.loop,h),m=b,h=g}d<u-1&&f(d,u-1,p.loop,h)}return c}function ha(i){return{backgroundColor:i.backgroundColor,borderCapStyle:i.borderCapStyle,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderJoinStyle:i.borderJoinStyle,borderWidth:i.borderWidth,borderColor:i.borderColor}}function Zp(i,t){if(!t)return!1;const e=[],s=function(n,o){return $o(o)?(e.includes(o)||e.push(o),e.indexOf(o)):o};return JSON.stringify(i,s)!==JSON.stringify(t,s)}function fs(i,t,e){return i.options.clip?i[e]:t[e]}function Jp(i,t){const{xScale:e,yScale:s}=i;return e&&s?{left:fs(e,t,"left"),right:fs(e,t,"right"),top:fs(s,t,"top"),bottom:fs(s,t,"bottom")}:t}function Mc(i,t){const e=t._clip;if(e.disabled)return!1;const s=Jp(t,i.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?i.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?i.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class tm{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,n){const o=e.listeners[n],r=e.duration;o.forEach(a=>a({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(s-e.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=lc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,n)=>{if(!s.running||!s.items.length)return;const o=s.items;let r=o.length-1,a=!1,l;for(;r>=0;--r)l=o[r],l._active?(l._total>s.duration&&(s.duration=l._total),l.tick(t),a=!0):(o[r]=o[o.length-1],o.pop());a&&(n.draw(),this._notify(n,s,t,"progress")),o.length||(s.running=!1,this._notify(n,s,t,"complete"),s.initial=!1),e+=o.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,n)=>Math.max(s,n._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let n=s.length-1;for(;n>=0;--n)s[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var Yt=new tm;const da="transparent",em={boolean(i,t,e){return e>.5?t:i},color(i,t,e){const s=ea(i||da),n=s.valid&&ea(t||da);return n&&n.valid?n.mix(s,e).hexString():t},number(i,t,e){return i+(t-i)*e}};class im{constructor(t,e,s,n){const o=e[s];n=X([t.to,n,o,t.from]);const r=X([t.from,o,n]);this._active=!0,this._fn=t.fn||em[t.type||typeof r],this._easing=Li[t.easing]||Li.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=r,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const n=this._target[this._prop],o=s-this._start,r=this._duration-o;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=X([t.to,e,n,t.from]),this._from=X([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,n=this._prop,o=this._from,r=this._loop,a=this._to;let l;if(this._active=o!==a&&(r||e<s),!this._active){this._target[n]=a,this._notify(!0);return}if(e<0){this._target[n]=o;return}l=e/s%2,l=r&&l>1?2-l:l,l=this._easing(Math.min(1,Math.max(0,l))),this._target[n]=this._fn(o,a,l)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let n=0;n<s.length;n++)s[n][e]()}}class Pc{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!F(t))return;const e=Object.keys(Q.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(n=>{const o=t[n];if(!F(o))return;const r={};for(const a of e)r[a]=o[a];(G(o.properties)&&o.properties||[n]).forEach(a=>{(a===n||!s.has(a))&&s.set(a,r)})})}_animateOptions(t,e){const s=e.options,n=nm(t,s);if(!n)return[];const o=this._createAnimations(n,s);return s.$shared&&sm(t.options.$animations,s).then(()=>{t.options=s},()=>{}),o}_createAnimations(t,e){const s=this._properties,n=[],o=t.$animations||(t.$animations={}),r=Object.keys(e),a=Date.now();let l;for(l=r.length-1;l>=0;--l){const c=r[l];if(c.charAt(0)==="$")continue;if(c==="options"){n.push(...this._animateOptions(t,e));continue}const h=e[c];let d=o[c];const u=s.get(c);if(d)if(u&&d.active()){d.update(u,h,a);continue}else d.cancel();if(!u||!u.duration){t[c]=h;continue}o[c]=d=new im(u,t,c,h),n.push(d)}return n}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return Yt.add(this._chart,s),!0}}function sm(i,t){const e=[],s=Object.keys(t);for(let n=0;n<s.length;n++){const o=i[s[n]];o&&o.active()&&e.push(o.wait())}return Promise.all(e)}function nm(i,t){if(!t)return;let e=i.options;if(!e){i.options=t;return}return e.$shared&&(i.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function ua(i,t){const e=i&&i.options||{},s=e.reverse,n=e.min===void 0?t:0,o=e.max===void 0?t:0;return{start:s?o:n,end:s?n:o}}function om(i,t,e){if(e===!1)return!1;const s=ua(i,e),n=ua(t,e);return{top:n.end,right:s.end,bottom:n.start,left:s.start}}function rm(i){let t,e,s,n;return F(i)?(t=i.top,e=i.right,s=i.bottom,n=i.left):t=e=s=n=i,{top:t,right:e,bottom:s,left:n,disabled:i===!1}}function Ac(i,t){const e=[],s=i._getSortedDatasetMetas(t);let n,o;for(n=0,o=s.length;n<o;++n)e.push(s[n].index);return e}function fa(i,t,e,s={}){const n=i.keys,o=s.mode==="single";let r,a,l,c;if(t===null)return;let h=!1;for(r=0,a=n.length;r<a;++r){if(l=+n[r],l===e){if(h=!0,s.all)continue;break}c=i.values[l],tt(c)&&(o||t===0||Bt(t)===Bt(c))&&(t+=c)}return!h&&!s.all?0:t}function am(i,t){const{iScale:e,vScale:s}=t,n=e.axis==="x"?"x":"y",o=s.axis==="x"?"x":"y",r=Object.keys(i),a=new Array(r.length);let l,c,h;for(l=0,c=r.length;l<c;++l)h=r[l],a[l]={[n]:h,[o]:i[h]};return a}function Dn(i,t){const e=i&&i.options.stacked;return e||e===void 0&&t.stack!==void 0}function lm(i,t,e){return`${i.id}.${t.id}.${e.stack||e.type}`}function cm(i){const{min:t,max:e,minDefined:s,maxDefined:n}=i.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:n?e:Number.POSITIVE_INFINITY}}function hm(i,t,e){const s=i[t]||(i[t]={});return s[e]||(s[e]={})}function pa(i,t,e,s){for(const n of t.getMatchingVisibleMetas(s).reverse()){const o=i[n.index];if(e&&o>0||!e&&o<0)return n.index}return null}function ma(i,t){const{chart:e,_cachedMeta:s}=i,n=e._stacks||(e._stacks={}),{iScale:o,vScale:r,index:a}=s,l=o.axis,c=r.axis,h=lm(o,r,s),d=t.length;let u;for(let f=0;f<d;++f){const p=t[f],{[l]:m,[c]:g}=p,b=p._stacks||(p._stacks={});u=b[c]=hm(n,h,m),u[a]=g,u._top=pa(u,r,!0,s.type),u._bottom=pa(u,r,!1,s.type);const y=u._visualValues||(u._visualValues={});y[a]=g}}function En(i,t){const e=i.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function dm(i,t){return Me(i,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function um(i,t,e){return Me(i,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function xi(i,t){const e=i.controller.index,s=i.vScale&&i.vScale.axis;if(s){t=t||i._parsed;for(const n of t){const o=n._stacks;if(!o||o[s]===void 0||o[s][e]===void 0)return;delete o[s][e],o[s]._visualValues!==void 0&&o[s]._visualValues[e]!==void 0&&delete o[s]._visualValues[e]}}}const Tn=i=>i==="reset"||i==="none",ga=(i,t)=>t?i:Object.assign({},i),fm=(i,t,e)=>i&&!t.hidden&&t._stacked&&{keys:Ac(e,!0),values:null};class Lt{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=Dn(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&xi(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),n=(d,u,f,p)=>d==="x"?u:d==="r"?p:f,o=e.xAxisID=O(s.xAxisID,En(t,"x")),r=e.yAxisID=O(s.yAxisID,En(t,"y")),a=e.rAxisID=O(s.rAxisID,En(t,"r")),l=e.indexAxis,c=e.iAxisID=n(l,o,r,a),h=e.vAxisID=n(l,r,o,a);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(a),e.iScale=this.getScaleForId(c),e.vScale=this.getScaleForId(h)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Zr(this._data,this),t._stacked&&xi(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(F(e)){const n=this._cachedMeta;this._data=am(e,n)}else if(s!==e){if(s){Zr(s,this);const n=this._cachedMeta;xi(n),n._parsed=[]}e&&Object.isExtensible(e)&&Qf(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let n=!1;this._dataCheck();const o=e._stacked;e._stacked=Dn(e.vScale,e),e.stack!==s.stack&&(n=!0,xi(e),e.stack=s.stack),this._resyncElements(t),(n||o!==e._stacked)&&(ma(this,e._parsed),e._stacked=Dn(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:n}=this,{iScale:o,_stacked:r}=s,a=o.axis;let l=t===0&&e===n.length?!0:s._sorted,c=t>0&&s._parsed[t-1],h,d,u;if(this._parsing===!1)s._parsed=n,s._sorted=!0,u=n;else{G(n[t])?u=this.parseArrayData(s,n,t,e):F(n[t])?u=this.parseObjectData(s,n,t,e):u=this.parsePrimitiveData(s,n,t,e);const f=()=>d[a]===null||c&&d[a]<c[a];for(h=0;h<e;++h)s._parsed[h+t]=d=u[h],l&&(f()&&(l=!1),c=d);s._sorted=l}r&&ma(this,u)}parsePrimitiveData(t,e,s,n){const{iScale:o,vScale:r}=t,a=o.axis,l=r.axis,c=o.getLabels(),h=o===r,d=new Array(n);let u,f,p;for(u=0,f=n;u<f;++u)p=u+s,d[u]={[a]:h||o.parse(c[p],p),[l]:r.parse(e[p],p)};return d}parseArrayData(t,e,s,n){const{xScale:o,yScale:r}=t,a=new Array(n);let l,c,h,d;for(l=0,c=n;l<c;++l)h=l+s,d=e[h],a[l]={x:o.parse(d[0],h),y:r.parse(d[1],h)};return a}parseObjectData(t,e,s,n){const{xScale:o,yScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=new Array(n);let h,d,u,f;for(h=0,d=n;h<d;++h)u=h+s,f=e[u],c[h]={x:o.parse(_e(f,a),u),y:r.parse(_e(f,l),u)};return c}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const n=this.chart,o=this._cachedMeta,r=e[t.axis],a={keys:Ac(n,!0),values:e._stacks[t.axis]._visualValues};return fa(a,r,o.index,{mode:s})}updateRangeFromParsed(t,e,s,n){const o=s[e.axis];let r=o===null?NaN:o;const a=n&&s._stacks[e.axis];n&&a&&(n.values=a,r=fa(n,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const s=this._cachedMeta,n=s._parsed,o=s._sorted&&t===s.iScale,r=n.length,a=this._getOtherScale(t),l=fm(e,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:h,max:d}=cm(a);let u,f;function p(){f=n[u];const m=f[a.axis];return!tt(f[t.axis])||h>m||d<m}for(u=0;u<r&&!(!p()&&(this.updateRangeFromParsed(c,t,f,l),o));++u);if(o){for(u=r-1;u>=0;--u)if(!p()){this.updateRangeFromParsed(c,t,f,l);break}}return c}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let n,o,r;for(n=0,o=e.length;n<o;++n)r=e[n][t.axis],tt(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,n=e.vScale,o=this.getParsed(t);return{label:s?""+s.getLabelForValue(o[s.axis]):"",value:n?""+n.getLabelForValue(o[n.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=rm(O(this.options.clip,om(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,n=s.data||[],o=e.chartArea,r=[],a=this._drawStart||0,l=this._drawCount||n.length-a,c=this.options.drawActiveElementsOnTop;let h;for(s.dataset&&s.dataset.draw(t,o,a,l),h=a;h<a+l;++h){const d=n[h];d.hidden||(d.active&&c?r.push(d):d.draw(t,o))}for(h=0;h<r.length;++h)r[h].draw(t,o)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const n=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];o=r.$context||(r.$context=um(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=n.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=dm(this.chart.getContext(),this.index)),o.dataset=n,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=s,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const n=e==="active",o=this._cachedDataOpts,r=t+"-"+e,a=o[r],l=this.enableOptionSharing&&Hi(s);if(a)return ga(a,l);const c=this.chart.config,h=c.datasetElementScopeKeys(this._type,t),d=n?[`${t}Hover`,"hover",t,""]:[t,""],u=c.getOptionScopes(this.getDataset(),h),f=Object.keys(Q.elements[t]),p=()=>this.getContext(s,n,e),m=c.resolveNamedOptions(u,f,p,d);return m.$shared&&(m.$shared=l,o[r]=Object.freeze(ga(m,l))),m}_resolveAnimations(t,e,s){const n=this.chart,o=this._cachedDataOpts,r=`animation-${e}`,a=o[r];if(a)return a;let l;if(n.options.animation!==!1){const h=this.chart.config,d=h.datasetAnimationScopeKeys(this._type,e),u=h.getOptionScopes(this.getDataset(),d);l=h.createResolver(u,this.getContext(t,s,e))}const c=new Pc(n,l&&l.animations);return l&&l._cacheable&&(o[r]=Object.freeze(c)),c}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Tn(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),n=this._sharedOptions,o=this.getSharedOptions(s),r=this.includeOptions(e,o)||o!==n;return this.updateSharedOptions(o,e,s),{sharedOptions:o,includeOptions:r}}updateElement(t,e,s,n){Tn(n)?Object.assign(t,s):this._resolveAnimations(e,n).update(t,s)}updateSharedOptions(t,e,s){t&&!Tn(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,n){t.active=n;const o=this.getStyle(e,n);this._resolveAnimations(e,s,n).update(t,{options:!n&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[a,l,c]of this._syncList)this[a](l,c);this._syncList=[];const n=s.length,o=e.length,r=Math.min(o,n);r&&this.parse(0,r),o>n?this._insertElements(n,o-n,t):o<n&&this._removeElements(o,n-o)}_insertElements(t,e,s=!0){const n=this._cachedMeta,o=n.data,r=t+e;let a;const l=c=>{for(c.length+=e,a=c.length-1;a>=r;a--)c[a]=c[a-e]};for(l(o),a=t;a<r;++a)o[a]=new this.dataElementType;this._parsing&&l(n._parsed),this.parse(t,e),s&&this.updateElements(o,t,e,"reset")}updateElements(t,e,s,n){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const n=s._parsed.splice(t,e);s._stacked&&xi(s,n)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,n]=t;this[e](s,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}P(Lt,"defaults",{}),P(Lt,"datasetElementType",null),P(Lt,"dataElementType",null);function pm(i,t){if(!i._cache.$bar){const e=i.getMatchingVisibleMetas(t);let s=[];for(let n=0,o=e.length;n<o;n++)s=s.concat(e[n].controller.getAllParsedValues(i));i._cache.$bar=ac(s.sort((n,o)=>n-o))}return i._cache.$bar}function mm(i){const t=i.iScale,e=pm(t,i.type);let s=t._length,n,o,r,a;const l=()=>{r===32767||r===-32768||(Hi(a)&&(s=Math.min(s,Math.abs(r-a)||s)),a=r)};for(n=0,o=e.length;n<o;++n)r=t.getPixelForValue(e[n]),l();for(a=void 0,n=0,o=t.ticks.length;n<o;++n)r=t.getPixelForTick(n),l();return s}function gm(i,t,e,s){const n=e.barThickness;let o,r;return L(n)?(o=t.min*e.categoryPercentage,r=e.barPercentage):(o=n*s,r=1),{chunk:o/s,ratio:r,start:t.pixels[i]-o/2}}function bm(i,t,e,s){const n=t.pixels,o=n[i];let r=i>0?n[i-1]:null,a=i<n.length-1?n[i+1]:null;const l=e.categoryPercentage;r===null&&(r=o-(a===null?t.end-t.start:a-o)),a===null&&(a=o+o-r);const c=o-(o-Math.min(r,a))/2*l;return{chunk:Math.abs(a-r)/2*l/s,ratio:e.barPercentage,start:c}}function ym(i,t,e,s){const n=e.parse(i[0],s),o=e.parse(i[1],s),r=Math.min(n,o),a=Math.max(n,o);let l=r,c=a;Math.abs(r)>Math.abs(a)&&(l=a,c=r),t[e.axis]=c,t._custom={barStart:l,barEnd:c,start:n,end:o,min:r,max:a}}function Dc(i,t,e,s){return G(i)?ym(i,t,e,s):t[e.axis]=e.parse(i,s),t}function ba(i,t,e,s){const n=i.iScale,o=i.vScale,r=n.getLabels(),a=n===o,l=[];let c,h,d,u;for(c=e,h=e+s;c<h;++c)u=t[c],d={},d[n.axis]=a||n.parse(r[c],c),l.push(Dc(u,d,o,c));return l}function On(i){return i&&i.barStart!==void 0&&i.barEnd!==void 0}function vm(i,t,e){return i!==0?Bt(i):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function xm(i){let t,e,s,n,o;return i.horizontal?(t=i.base>i.x,e="left",s="right"):(t=i.base<i.y,e="bottom",s="top"),t?(n="end",o="start"):(n="start",o="end"),{start:e,end:s,reverse:t,top:n,bottom:o}}function _m(i,t,e,s){let n=t.borderSkipped;const o={};if(!n){i.borderSkipped=o;return}if(n===!0){i.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:a,reverse:l,top:c,bottom:h}=xm(i);n==="middle"&&e&&(i.enableBorderRadius=!0,(e._top||0)===s?n=c:(e._bottom||0)===s?n=h:(o[ya(h,r,a,l)]=!0,n=c)),o[ya(n,r,a,l)]=!0,i.borderSkipped=o}function ya(i,t,e,s){return s?(i=wm(i,t,e),i=va(i,e,t)):i=va(i,t,e),i}function wm(i,t,e){return i===t?e:i===e?t:i}function va(i,t,e){return i==="start"?t:i==="end"?e:i}function km(i,{inflateAmount:t},e){i.inflateAmount=t==="auto"?e===1?.33:0:t}class Ds extends Lt{parsePrimitiveData(t,e,s,n){return ba(t,e,s,n)}parseArrayData(t,e,s,n){return ba(t,e,s,n)}parseObjectData(t,e,s,n){const{iScale:o,vScale:r}=t,{xAxisKey:a="x",yAxisKey:l="y"}=this._parsing,c=o.axis==="x"?a:l,h=r.axis==="x"?a:l,d=[];let u,f,p,m;for(u=s,f=s+n;u<f;++u)m=e[u],p={},p[o.axis]=o.parse(_e(m,c),u),d.push(Dc(_e(m,h),p,r,u));return d}updateRangeFromParsed(t,e,s,n){super.updateRangeFromParsed(t,e,s,n);const o=s._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:n}=e,o=this.getParsed(t),r=o._custom,a=On(r)?"["+r.start+", "+r.end+"]":""+n.getLabelForValue(o[n.axis]);return{label:""+s.getLabelForValue(o[s.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,n){const o=n==="reset",{index:r,_cachedMeta:{vScale:a}}=this,l=a.getBasePixel(),c=a.isHorizontal(),h=this._getRuler(),{sharedOptions:d,includeOptions:u}=this._getSharedOptions(e,n);for(let f=e;f<e+s;f++){const p=this.getParsed(f),m=o||L(p[a.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),g=this._calculateBarIndexPixels(f,h),b=(p._stacks||{})[a.axis],y={horizontal:c,base:m.base,enableBorderRadius:!b||On(p._custom)||r===b._top||r===b._bottom,x:c?m.head:g.center,y:c?g.center:m.head,height:c?g.size:Math.abs(m.size),width:c?Math.abs(m.size):g.size};u&&(y.options=d||this.resolveDataElementOptions(f,t[f].active?"active":n));const w=y.options||t[f].options;_m(y,w,b,r),km(y,w,h.ratio),this.updateElement(t[f],f,y,n)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,n=s.getMatchingVisibleMetas(this._type).filter(h=>h.controller.options.grouped),o=s.options.stacked,r=[],a=this._cachedMeta.controller.getParsed(e),l=a&&a[s.axis],c=h=>{const d=h._parsed.find(f=>f[s.axis]===l),u=d&&d[h.vScale.axis];if(L(u)||isNaN(u))return!0};for(const h of n)if(!(e!==void 0&&c(h))&&((o===!1||r.indexOf(h.stack)===-1||o===void 0&&h.stack===void 0)&&r.push(h.stack),h.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[O(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const n=this._getStacks(t,s),o=e!==void 0?n.indexOf(e):-1;return o===-1?n.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,n=[];let o,r;for(o=0,r=e.data.length;o<r;++o)n.push(s.getPixelForValue(this.getParsed(o)[s.axis],o));const a=t.barThickness;return{min:a||mm(e),pixels:n,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:a?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:n},options:{base:o,minBarLength:r}}=this,a=o||0,l=this.getParsed(t),c=l._custom,h=On(c);let d=l[e.axis],u=0,f=s?this.applyStack(e,l,s):d,p,m;f!==d&&(u=f-d,f=d),h&&(d=c.barStart,f=c.barEnd-c.barStart,d!==0&&Bt(d)!==Bt(c.barEnd)&&(u=0),u+=d);const g=!L(o)&&!h?o:u;let b=e.getPixelForValue(g);if(this.chart.getDataVisibility(t)?p=e.getPixelForValue(u+f):p=b,m=p-b,Math.abs(m)<r){m=vm(m,e,a)*r,d===a&&(b-=m/2);const y=e.getPixelForDecimal(0),w=e.getPixelForDecimal(1),_=Math.min(y,w),x=Math.max(y,w);b=Math.max(Math.min(b,x),_),p=b+m,s&&!h&&(l._stacks[e.axis]._visualValues[n]=e.getValueForPixel(p)-e.getValueForPixel(b))}if(b===e.getPixelForValue(a)){const y=Bt(m)*e.getLineWidthForValue(a)/2;b+=y,m-=y}return{size:m,base:b,head:p,center:p+m/2}}_calculateBarIndexPixels(t,e){const s=e.scale,n=this.options,o=n.skipNull,r=O(n.maxBarThickness,1/0);let a,l;const c=this._getAxisCount();if(e.grouped){const h=o?this._getStackCount(t):e.stackCount,d=n.barThickness==="flex"?bm(t,e,n,h*c):gm(t,e,n,h*c),u=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,f=this._getAxis().indexOf(O(u,this.getFirstScaleIdForIndexAxis())),p=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+f;a=d.start+d.chunk*p+d.chunk/2,l=Math.min(r,d.chunk*d.ratio)}else a=s.getPixelForValue(this.getParsed(t)[s.axis],t),l=Math.min(r,e.min*e.ratio);return{base:a-l/2,head:a+l/2,center:a,size:l}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,n=s.length;let o=0;for(;o<n;++o)this.getParsed(o)[e.axis]!==null&&!s[o].hidden&&s[o].draw(this._ctx)}}P(Ds,"id","bar"),P(Ds,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),P(Ds,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Es extends Lt{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,n){const o=super.parsePrimitiveData(t,e,s,n);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+s).radius;return o}parseArrayData(t,e,s,n){const o=super.parseArrayData(t,e,s,n);for(let r=0;r<o.length;r++){const a=e[s+r];o[r]._custom=O(a[2],this.resolveDataElementOptions(r+s).radius)}return o}parseObjectData(t,e,s,n){const o=super.parseObjectData(t,e,s,n);for(let r=0;r<o.length;r++){const a=e[s+r];o[r]._custom=O(a&&a.r&&+a.r,this.resolveDataElementOptions(r+s).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:o}=e,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y),c=r._custom;return{label:s[t]||"",value:"("+a+", "+l+(c?", "+c:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a}=this._cachedMeta,{sharedOptions:l,includeOptions:c}=this._getSharedOptions(e,n),h=r.axis,d=a.axis;for(let u=e;u<e+s;u++){const f=t[u],p=!o&&this.getParsed(u),m={},g=m[h]=o?r.getPixelForDecimal(.5):r.getPixelForValue(p[h]),b=m[d]=o?a.getBasePixel():a.getPixelForValue(p[d]);m.skip=isNaN(g)||isNaN(b),c&&(m.options=l||this.resolveDataElementOptions(u,f.active?"active":n),o&&(m.options.radius=0)),this.updateElement(f,u,m,n)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));const o=n.radius;return e!=="active"&&(n.radius=0),n.radius+=O(s&&s._custom,o),n}}P(Es,"id","bubble"),P(Es,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),P(Es,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function Sm(i,t,e){let s=1,n=1,o=0,r=0;if(t<K){const a=i,l=a+t,c=Math.cos(a),h=Math.sin(a),d=Math.cos(l),u=Math.sin(l),f=(w,_,x)=>Wi(w,a,l,!0)?1:Math.max(_,_*e,x,x*e),p=(w,_,x)=>Wi(w,a,l,!0)?-1:Math.min(_,_*e,x,x*e),m=f(0,c,d),g=f(et,h,u),b=p(N,c,d),y=p(N+et,h,u);s=(m-b)/2,n=(g-y)/2,o=-(m+b)/2,r=-(g+y)/2}return{ratioX:s,ratioY:n,offsetX:o,offsetY:r}}class Ie extends Lt{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,n=this._cachedMeta;if(this._parsing===!1)n._parsed=s;else{let o=l=>+s[l];if(F(s[t])){const{key:l="value"}=this._parsing;o=c=>+_e(s[c],l)}let r,a;for(r=t,a=t+e;r<a;++r)n._parsed[r]=o(r)}}_getRotation(){return Ot(this.options.rotation-90)}_getCircumference(){return Ot(this.options.circumference)}_getRotationExtents(){let t=K,e=-K;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const n=this.chart.getDatasetMeta(s).controller,o=n._getRotation(),r=n._getCircumference();t=Math.min(t,o),e=Math.max(e,o+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,n=this._cachedMeta,o=n.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,a=Math.max((Math.min(s.width,s.height)-r)/2,0),l=Math.min($f(this.options.cutout,a),1),c=this._getRingWeight(this.index),{circumference:h,rotation:d}=this._getRotationExtents(),{ratioX:u,ratioY:f,offsetX:p,offsetY:m}=Sm(d,h,l),g=(s.width-r)/u,b=(s.height-r)/f,y=Math.max(Math.min(g,b)/2,0),w=ic(this.options.radius,y),_=Math.max(w*l,0),x=(w-_)/this._getVisibleDatasetWeightTotal();this.offsetX=p*w,this.offsetY=m*w,n.total=this.calculateTotal(),this.outerRadius=w-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*c,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const s=this.options,n=this._cachedMeta,o=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||n._parsed[t]===null||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*o/K)}updateElements(t,e,s,n){const o=n==="reset",r=this.chart,a=r.chartArea,c=r.options.animation,h=(a.left+a.right)/2,d=(a.top+a.bottom)/2,u=o&&c.animateScale,f=u?0:this.innerRadius,p=u?0:this.outerRadius,{sharedOptions:m,includeOptions:g}=this._getSharedOptions(e,n);let b=this._getRotation(),y;for(y=0;y<e;++y)b+=this._circumference(y,o);for(y=e;y<e+s;++y){const w=this._circumference(y,o),_=t[y],x={x:h+this.offsetX,y:d+this.offsetY,startAngle:b,endAngle:b+w,circumference:w,outerRadius:p,innerRadius:f};g&&(x.options=m||this.resolveDataElementOptions(y,_.active?"active":n)),b+=w,this.updateElement(_,y,x,n)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,n;for(n=0;n<e.length;n++){const o=t._parsed[n];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(n)&&!e[n].hidden&&(s+=Math.abs(o))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?K*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],o=rs(e._parsed[t],s.options.locale);return{label:n[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const s=this.chart;let n,o,r,a,l;if(!t){for(n=0,o=s.data.datasets.length;n<o;++n)if(s.isDatasetVisible(n)){r=s.getDatasetMeta(n),t=r.data,a=r.controller;break}}if(!t)return 0;for(n=0,o=t.length;n<o;++n)l=a.resolveDataElementOptions(n),l.borderAlign!=="inner"&&(e=Math.max(e,l.borderWidth||0,l.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,n=t.length;s<n;++s){const o=this.resolveDataElementOptions(s);e=Math.max(e,o.offset||0,o.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(O(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}P(Ie,"id","doughnut"),P(Ie,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),P(Ie,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),P(Ie,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((l,c)=>{const d=t.getDatasetMeta(0).controller.getStyle(c);return{text:l,fillStyle:d.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(c),lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:d.borderWidth,strokeStyle:d.borderColor,textAlign:n,pointStyle:s,borderRadius:r&&(a||d.borderRadius),index:c}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class Ts extends Lt{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:n=[],_dataset:o}=e,r=this.chart._animationsDisabled;let{start:a,count:l}=hc(e,n,r);this._drawStart=a,this._drawCount=l,dc(e)&&(a=0,l=n.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!o._decimated,s.points=n;const c=this.resolveDatasetElementOptions(t);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:c},t),this.updateElements(n,a,l,t)}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,n),u=r.axis,f=a.axis,{spanGaps:p,segment:m}=this.options,g=hi(p)?p:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||o||n==="none",y=e+s,w=t.length;let _=e>0&&this.getParsed(e-1);for(let x=0;x<w;++x){const k=t[x],C=b?k:{};if(x<e||x>=y){C.skip=!0;continue}const M=this.getParsed(x),A=L(M[f]),D=C[u]=r.getPixelForValue(M[u],x),E=C[f]=o||A?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,M,l):M[f],x);C.skip=isNaN(D)||isNaN(E)||A,C.stop=x>0&&Math.abs(M[u]-_[u])>g,m&&(C.parsed=M,C.raw=c.data[x]),d&&(C.options=h||this.resolveDataElementOptions(x,k.active?"active":n)),b||this.updateElement(k,x,C,n),_=M}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return s;const o=n[0].size(this.resolveDataElementOptions(0)),r=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(s,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}P(Ts,"id","line"),P(Ts,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),P(Ts,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class zi extends Lt{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,n=s.data.labels||[],o=rs(e._parsed[t].r,s.options.locale);return{label:n[t]||"",value:o}}parseObjectData(t,e,s,n){return vc.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,n)=>{const o=this.getParsed(n).r;!isNaN(o)&&this.chart.getDataVisibility(n)&&(o<e.min&&(e.min=o),o>e.max&&(e.max=o))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(n/2,0),r=Math.max(s.cutoutPercentage?o/100*s.cutoutPercentage:1,0),a=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,s,n){const o=n==="reset",r=this.chart,l=r.options.animation,c=this._cachedMeta.rScale,h=c.xCenter,d=c.yCenter,u=c.getIndexAngle(0)-.5*N;let f=u,p;const m=360/this.countVisibleElements();for(p=0;p<e;++p)f+=this._computeAngle(p,n,m);for(p=e;p<e+s;p++){const g=t[p];let b=f,y=f+this._computeAngle(p,n,m),w=r.getDataVisibility(p)?c.getDistanceFromCenterForValue(this.getParsed(p).r):0;f=y,o&&(l.animateScale&&(w=0),l.animateRotate&&(b=y=u));const _={x:h,y:d,innerRadius:0,outerRadius:w,startAngle:b,endAngle:y,options:this.resolveDataElementOptions(p,g.active?"active":n)};this.updateElement(g,p,_,n)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?Ot(this.resolveDataElementOptions(t,e).angle||s):0}}P(zi,"id","polarArea"),P(zi,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),P(zi,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:n}}=t.legend.options;return e.labels.map((o,r)=>{const l=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:l.backgroundColor,strokeStyle:l.borderColor,fontColor:n,lineWidth:l.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class so extends Ie{}P(so,"id","pie"),P(so,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class Os extends Lt{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,n){return vc.bind(this)(t,e,s,n)}update(t){const e=this._cachedMeta,s=e.dataset,n=e.data||[],o=e.iScale.getLabels();if(s.points=n,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const a={_loop:!0,_fullLoop:o.length===n.length,options:r};this.updateElement(s,void 0,a,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,s,n){const o=this._cachedMeta.rScale,r=n==="reset";for(let a=e;a<e+s;a++){const l=t[a],c=this.resolveDataElementOptions(a,l.active?"active":n),h=o.getPointPositionForValue(a,this.getParsed(a).r),d=r?o.xCenter:h.x,u=r?o.yCenter:h.y,f={x:d,y:u,angle:h.angle,skip:isNaN(d)||isNaN(u),options:c};this.updateElement(l,a,f,n)}}}P(Os,"id","radar"),P(Os,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),P(Os,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ls extends Lt{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:n,yScale:o}=e,r=this.getParsed(t),a=n.getLabelForValue(r.x),l=o.getLabelForValue(r.y);return{label:s[t]||"",value:"("+a+", "+l+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,n=this.chart._animationsDisabled;let{start:o,count:r}=hc(e,s,n);if(this._drawStart=o,this._drawCount=r,dc(e)&&(o=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:a,_dataset:l}=e;a._chart=this.chart,a._datasetIndex=this.index,a._decimated=!!l._decimated,a.points=s;const c=this.resolveDatasetElementOptions(t);c.segment=this.options.segment,this.updateElement(a,void 0,{animated:!n,options:c},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,o,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,n){const o=n==="reset",{iScale:r,vScale:a,_stacked:l,_dataset:c}=this._cachedMeta,h=this.resolveDataElementOptions(e,n),d=this.getSharedOptions(h),u=this.includeOptions(n,d),f=r.axis,p=a.axis,{spanGaps:m,segment:g}=this.options,b=hi(m)?m:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||o||n==="none";let w=e>0&&this.getParsed(e-1);for(let _=e;_<e+s;++_){const x=t[_],k=this.getParsed(_),C=y?x:{},M=L(k[p]),A=C[f]=r.getPixelForValue(k[f],_),D=C[p]=o||M?a.getBasePixel():a.getPixelForValue(l?this.applyStack(a,k,l):k[p],_);C.skip=isNaN(A)||isNaN(D)||M,C.stop=_>0&&Math.abs(k[f]-w[f])>b,g&&(C.parsed=k,C.raw=c.data[_]),u&&(C.options=d||this.resolveDataElementOptions(_,x.active?"active":n)),y||this.updateElement(x,_,C,n),w=k}this.updateSharedOptions(d,n,h)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let a=0;for(let l=e.length-1;l>=0;--l)a=Math.max(a,e[l].size(this.resolveDataElementOptions(l))/2);return a>0&&a}const s=t.dataset,n=s.options&&s.options.borderWidth||0;if(!e.length)return n;const o=e[0].size(this.resolveDataElementOptions(0)),r=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,o,r)/2}}P(Ls,"id","scatter"),P(Ls,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),P(Ls,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Cm=Object.freeze({__proto__:null,BarController:Ds,BubbleController:Es,DoughnutController:Ie,LineController:Ts,PieController:so,PolarAreaController:zi,RadarController:Os,ScatterController:Ls});function Oe(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class Ho{constructor(t){P(this,"options");this.options=t||{}}static override(t){Object.assign(Ho.prototype,t)}init(){}formats(){return Oe()}parse(){return Oe()}format(){return Oe()}add(){return Oe()}diff(){return Oe()}startOf(){return Oe()}endOf(){return Oe()}}var Mm={_date:Ho};function Pm(i,t,e,s){const{controller:n,data:o,_sorted:r}=i,a=n._cachedMeta.iScale,l=i.dataset&&i.dataset.options?i.dataset.options.spanGaps:null;if(a&&t===a.axis&&t!=="r"&&r&&o.length){const c=a._reversePixels?Gf:Qt;if(s){if(n._sharedOptions){const h=o[0],d=typeof h.getRange=="function"&&h.getRange(t);if(d){const u=c(o,t,e-d),f=c(o,t,e+d);return{lo:u.lo,hi:f.hi}}}}else{const h=c(o,t,e);if(l){const{vScale:d}=n._cachedMeta,{_parsed:u}=i,f=u.slice(0,h.lo+1).reverse().findIndex(m=>!L(m[d.axis]));h.lo-=Math.max(0,f);const p=u.slice(h.hi).findIndex(m=>!L(m[d.axis]));h.hi+=Math.max(0,p)}return h}}return{lo:0,hi:o.length-1}}function vn(i,t,e,s,n){const o=i.getSortedVisibleDatasetMetas(),r=e[t];for(let a=0,l=o.length;a<l;++a){const{index:c,data:h}=o[a],{lo:d,hi:u}=Pm(o[a],t,r,n);for(let f=d;f<=u;++f){const p=h[f];p.skip||s(p,c,f)}}}function Am(i){const t=i.indexOf("x")!==-1,e=i.indexOf("y")!==-1;return function(s,n){const o=t?Math.abs(s.x-n.x):0,r=e?Math.abs(s.y-n.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}function Ln(i,t,e,s,n){const o=[];return!n&&!i.isPointInArea(t)||vn(i,e,t,function(a,l,c){!n&&!Zt(a,i.chartArea,0)||a.inRange(t.x,t.y,s)&&o.push({element:a,datasetIndex:l,index:c})},!0),o}function Dm(i,t,e,s){let n=[];function o(r,a,l){const{startAngle:c,endAngle:h}=r.getProps(["startAngle","endAngle"],s),{angle:d}=oc(r,{x:t.x,y:t.y});Wi(d,c,h)&&n.push({element:r,datasetIndex:a,index:l})}return vn(i,e,t,o),n}function Em(i,t,e,s,n,o){let r=[];const a=Am(e);let l=Number.POSITIVE_INFINITY;function c(h,d,u){const f=h.inRange(t.x,t.y,n);if(s&&!f)return;const p=h.getCenterPoint(n);if(!(!!o||i.isPointInArea(p))&&!f)return;const g=a(t,p);g<l?(r=[{element:h,datasetIndex:d,index:u}],l=g):g===l&&r.push({element:h,datasetIndex:d,index:u})}return vn(i,e,t,c),r}function Rn(i,t,e,s,n,o){return!o&&!i.isPointInArea(t)?[]:e==="r"&&!s?Dm(i,t,e,n):Em(i,t,e,s,n,o)}function xa(i,t,e,s,n){const o=[],r=e==="x"?"inXRange":"inYRange";let a=!1;return vn(i,e,t,(l,c,h)=>{l[r]&&l[r](t[e],n)&&(o.push({element:l,datasetIndex:c,index:h}),a=a||l.inRange(t.x,t.y,n))}),s&&!a?[]:o}var Tm={modes:{index(i,t,e,s){const n=Re(t,i),o=e.axis||"x",r=e.includeInvisible||!1,a=e.intersect?Ln(i,n,o,s,r):Rn(i,n,o,!1,s,r),l=[];return a.length?(i.getSortedVisibleDatasetMetas().forEach(c=>{const h=a[0].index,d=c.data[h];d&&!d.skip&&l.push({element:d,datasetIndex:c.index,index:h})}),l):[]},dataset(i,t,e,s){const n=Re(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;let a=e.intersect?Ln(i,n,o,s,r):Rn(i,n,o,!1,s,r);if(a.length>0){const l=a[0].datasetIndex,c=i.getDatasetMeta(l).data;a=[];for(let h=0;h<c.length;++h)a.push({element:c[h],datasetIndex:l,index:h})}return a},point(i,t,e,s){const n=Re(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;return Ln(i,n,o,s,r)},nearest(i,t,e,s){const n=Re(t,i),o=e.axis||"xy",r=e.includeInvisible||!1;return Rn(i,n,o,e.intersect,s,r)},x(i,t,e,s){const n=Re(t,i);return xa(i,n,"x",e.intersect,s)},y(i,t,e,s){const n=Re(t,i);return xa(i,n,"y",e.intersect,s)}}};const Ec=["left","top","right","bottom"];function _i(i,t){return i.filter(e=>e.pos===t)}function _a(i,t){return i.filter(e=>Ec.indexOf(e.pos)===-1&&e.box.axis===t)}function wi(i,t){return i.sort((e,s)=>{const n=t?s:e,o=t?e:s;return n.weight===o.weight?n.index-o.index:n.weight-o.weight})}function Om(i){const t=[];let e,s,n,o,r,a;for(e=0,s=(i||[]).length;e<s;++e)n=i[e],{position:o,options:{stack:r,stackWeight:a=1}}=n,t.push({index:e,box:n,pos:o,horizontal:n.isHorizontal(),weight:n.weight,stack:r&&o+r,stackWeight:a});return t}function Lm(i){const t={};for(const e of i){const{stack:s,pos:n,stackWeight:o}=e;if(!s||!Ec.includes(n))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return t}function Rm(i,t){const e=Lm(i),{vBoxMaxWidth:s,hBoxMaxHeight:n}=t;let o,r,a;for(o=0,r=i.length;o<r;++o){a=i[o];const{fullSize:l}=a.box,c=e[a.stack],h=c&&a.stackWeight/c.weight;a.horizontal?(a.width=h?h*s:l&&t.availableWidth,a.height=n):(a.width=s,a.height=h?h*n:l&&t.availableHeight)}return e}function zm(i){const t=Om(i),e=wi(t.filter(c=>c.box.fullSize),!0),s=wi(_i(t,"left"),!0),n=wi(_i(t,"right")),o=wi(_i(t,"top"),!0),r=wi(_i(t,"bottom")),a=_a(t,"x"),l=_a(t,"y");return{fullSize:e,leftAndTop:s.concat(o),rightAndBottom:n.concat(l).concat(r).concat(a),chartArea:_i(t,"chartArea"),vertical:s.concat(n).concat(l),horizontal:o.concat(r).concat(a)}}function wa(i,t,e,s){return Math.max(i[e],t[e])+Math.max(i[s],t[s])}function Tc(i,t){i.top=Math.max(i.top,t.top),i.left=Math.max(i.left,t.left),i.bottom=Math.max(i.bottom,t.bottom),i.right=Math.max(i.right,t.right)}function $m(i,t,e,s){const{pos:n,box:o}=e,r=i.maxPadding;if(!F(n)){e.size&&(i[n]-=e.size);const d=s[e.stack]||{size:0,count:1};d.size=Math.max(d.size,e.horizontal?o.height:o.width),e.size=d.size/d.count,i[n]+=e.size}o.getPadding&&Tc(r,o.getPadding());const a=Math.max(0,t.outerWidth-wa(r,i,"left","right")),l=Math.max(0,t.outerHeight-wa(r,i,"top","bottom")),c=a!==i.w,h=l!==i.h;return i.w=a,i.h=l,e.horizontal?{same:c,other:h}:{same:h,other:c}}function Im(i){const t=i.maxPadding;function e(s){const n=Math.max(t[s]-i[s],0);return i[s]+=n,n}i.y+=e("top"),i.x+=e("left"),e("right"),e("bottom")}function Fm(i,t){const e=t.maxPadding;function s(n){const o={left:0,top:0,right:0,bottom:0};return n.forEach(r=>{o[r]=Math.max(t[r],e[r])}),o}return s(i?["left","right"]:["top","bottom"])}function Pi(i,t,e,s){const n=[];let o,r,a,l,c,h;for(o=0,r=i.length,c=0;o<r;++o){a=i[o],l=a.box,l.update(a.width||t.w,a.height||t.h,Fm(a.horizontal,t));const{same:d,other:u}=$m(t,e,a,s);c|=d&&n.length,h=h||u,l.fullSize||n.push(a)}return c&&Pi(n,t,e,s)||h}function ps(i,t,e,s,n){i.top=e,i.left=t,i.right=t+s,i.bottom=e+n,i.width=s,i.height=n}function ka(i,t,e,s){const n=e.padding;let{x:o,y:r}=t;for(const a of i){const l=a.box,c=s[a.stack]||{placed:0,weight:1},h=a.stackWeight/c.weight||1;if(a.horizontal){const d=t.w*h,u=c.size||l.height;Hi(c.start)&&(r=c.start),l.fullSize?ps(l,n.left,r,e.outerWidth-n.right-n.left,u):ps(l,t.left+c.placed,r,d,u),c.start=r,c.placed+=d,r=l.bottom}else{const d=t.h*h,u=c.size||l.width;Hi(c.start)&&(o=c.start),l.fullSize?ps(l,o,n.top,u,e.outerHeight-n.bottom-n.top):ps(l,o,t.top+c.placed,u,d),c.start=o,c.placed+=d,o=l.right}}t.x=o,t.y=r}var ft={addBox(i,t){i.boxes||(i.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},i.boxes.push(t)},removeBox(i,t){const e=i.boxes?i.boxes.indexOf(t):-1;e!==-1&&i.boxes.splice(e,1)},configure(i,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(i,t,e,s){if(!i)return;const n=ct(i.options.layout.padding),o=Math.max(t-n.width,0),r=Math.max(e-n.height,0),a=zm(i.boxes),l=a.vertical,c=a.horizontal;W(i.boxes,m=>{typeof m.beforeLayout=="function"&&m.beforeLayout()});const h=l.reduce((m,g)=>g.box.options&&g.box.options.display===!1?m:m+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:e,padding:n,availableWidth:o,availableHeight:r,vBoxMaxWidth:o/2/h,hBoxMaxHeight:r/2}),u=Object.assign({},n);Tc(u,ct(s));const f=Object.assign({maxPadding:u,w:o,h:r,x:n.left,y:n.top},n),p=Rm(l.concat(c),d);Pi(a.fullSize,f,d,p),Pi(l,f,d,p),Pi(c,f,d,p)&&Pi(l,f,d,p),Im(f),ka(a.leftAndTop,f,d,p),f.x+=f.w,f.y+=f.h,ka(a.rightAndBottom,f,d,p),i.chartArea={left:f.left,top:f.top,right:f.left+f.w,bottom:f.top+f.h,height:f.h,width:f.w},W(a.chartArea,m=>{const g=m.box;Object.assign(g,i.chartArea),g.update(f.w,f.h,{left:0,top:0,right:0,bottom:0})})}};class Oc{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,n){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):s)}}isAttached(t){return!0}updateConfig(t){}}class Bm extends Oc{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Rs="$chartjs",Vm={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},Sa=i=>i===null||i==="";function jm(i,t){const e=i.style,s=i.getAttribute("height"),n=i.getAttribute("width");if(i[Rs]={initial:{height:s,width:n,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",Sa(n)){const o=aa(i,"width");o!==void 0&&(i.width=o)}if(Sa(s))if(i.style.height==="")i.height=i.width/(t||2);else{const o=aa(i,"height");o!==void 0&&(i.height=o)}return i}const Lc=Np?{passive:!0}:!1;function Nm(i,t,e){i&&i.addEventListener(t,e,Lc)}function Hm(i,t,e){i&&i.canvas&&i.canvas.removeEventListener(t,e,Lc)}function Wm(i,t){const e=Vm[i.type]||i.type,{x:s,y:n}=Re(i,t);return{type:e,chart:t,native:i,x:s!==void 0?s:null,y:n!==void 0?n:null}}function Zs(i,t){for(const e of i)if(e===t||e.contains(t))return!0}function qm(i,t,e){const s=i.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||Zs(a.addedNodes,s),r=r&&!Zs(a.removedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}function Ym(i,t,e){const s=i.canvas,n=new MutationObserver(o=>{let r=!1;for(const a of o)r=r||Zs(a.removedNodes,s),r=r&&!Zs(a.addedNodes,s);r&&e()});return n.observe(document,{childList:!0,subtree:!0}),n}const Yi=new Map;let Ca=0;function Rc(){const i=window.devicePixelRatio;i!==Ca&&(Ca=i,Yi.forEach((t,e)=>{e.currentDevicePixelRatio!==i&&t()}))}function Um(i,t){Yi.size||window.addEventListener("resize",Rc),Yi.set(i,t)}function Xm(i){Yi.delete(i),Yi.size||window.removeEventListener("resize",Rc)}function Gm(i,t,e){const s=i.canvas,n=s&&No(s);if(!n)return;const o=cc((a,l)=>{const c=n.clientWidth;e(a,l),c<n.clientWidth&&e()},window),r=new ResizeObserver(a=>{const l=a[0],c=l.contentRect.width,h=l.contentRect.height;c===0&&h===0||o(c,h)});return r.observe(n),Um(i,o),r}function zn(i,t,e){e&&e.disconnect(),t==="resize"&&Xm(i)}function Km(i,t,e){const s=i.canvas,n=cc(o=>{i.ctx!==null&&e(Wm(o,i))},i);return Nm(s,t,n),n}class Qm extends Oc{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?(jm(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Rs])return!1;const s=e[Rs].initial;["height","width"].forEach(o=>{const r=s[o];L(r)?e.removeAttribute(o):e.setAttribute(o,r)});const n=s.style||{};return Object.keys(n).forEach(o=>{e.style[o]=n[o]}),e.width=e.width,delete e[Rs],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const n=t.$proxies||(t.$proxies={}),r={attach:qm,detach:Ym,resize:Gm}[e]||Km;n[e]=r(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),n=s[e];if(!n)return;({attach:zn,detach:zn,resize:zn}[e]||Hm)(t,e,n),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,n){return jp(t,e,s,n)}isAttached(t){const e=t&&No(t);return!!(e&&e.isConnected)}}function Zm(i){return!jo()||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas?Bm:Qm}var Cs;let ae=(Cs=class{constructor(){P(this,"x");P(this,"y");P(this,"active",!1);P(this,"options");P(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return hi(this.x)&&hi(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const n={};return t.forEach(o=>{n[o]=s[o]&&s[o].active()?s[o]._to:this[o]}),n}},P(Cs,"defaults",{}),P(Cs,"defaultRoutes"),Cs);function Jm(i,t){const e=i.options.ticks,s=tg(i),n=Math.min(e.maxTicksLimit||s,s),o=e.major.enabled?ig(t):[],r=o.length,a=o[0],l=o[r-1],c=[];if(r>n)return sg(t,c,o,r/n),c;const h=eg(o,t,n);if(r>0){let d,u;const f=r>1?Math.round((l-a)/(r-1)):null;for(ms(t,c,h,L(f)?0:a-f,a),d=0,u=r-1;d<u;d++)ms(t,c,h,o[d],o[d+1]);return ms(t,c,h,l,L(f)?t.length:l+f),c}return ms(t,c,h),c}function tg(i){const t=i.options.offset,e=i._tickSize(),s=i._length/e+(t?0:1),n=i._maxLength/e;return Math.floor(Math.min(s,n))}function eg(i,t,e){const s=ng(i),n=t.length/e;if(!s)return Math.max(n,1);const o=Wf(s);for(let r=0,a=o.length-1;r<a;r++){const l=o[r];if(l>n)return l}return Math.max(n,1)}function ig(i){const t=[];let e,s;for(e=0,s=i.length;e<s;e++)i[e].major&&t.push(e);return t}function sg(i,t,e,s){let n=0,o=e[0],r;for(s=Math.ceil(s),r=0;r<i.length;r++)r===o&&(t.push(i[r]),n++,o=e[n*s])}function ms(i,t,e,s,n){const o=O(s,0),r=Math.min(O(n,i.length),i.length);let a=0,l,c,h;for(e=Math.ceil(e),n&&(l=n-s,e=l/Math.floor(l/e)),h=o;h<0;)a++,h=Math.round(o+a*e);for(c=Math.max(o,0);c<r;c++)c===h&&(t.push(i[c]),a++,h=Math.round(o+a*e))}function ng(i){const t=i.length;let e,s;if(t<2)return!1;for(s=i[0],e=1;e<t;++e)if(i[e]-i[e-1]!==s)return!1;return s}const og=i=>i==="left"?"right":i==="right"?"left":i,Ma=(i,t,e)=>t==="top"||t==="left"?i[t]+e:i[t]-e,Pa=(i,t)=>Math.min(t||i,i);function Aa(i,t){const e=[],s=i.length/t,n=i.length;let o=0;for(;o<n;o+=s)e.push(i[Math.floor(o)]);return e}function rg(i,t,e){const s=i.ticks.length,n=Math.min(t,s-1),o=i._startPixel,r=i._endPixel,a=1e-6;let l=i.getPixelForTick(n),c;if(!(e&&(s===1?c=Math.max(l-o,r-l):t===0?c=(i.getPixelForTick(1)-l)/2:c=(l-i.getPixelForTick(n-1))/2,l+=n<t?c:-c,l<o-a||l>r+a)))return l}function ag(i,t){W(i,e=>{const s=e.gc,n=s.length/2;let o;if(n>t){for(o=0;o<n;++o)delete e.data[s[o]];s.splice(0,n)}})}function ki(i){return i.drawTicks?i.tickLength:0}function Da(i,t){if(!i.display)return 0;const e=nt(i.font,t),s=ct(i.padding);return(G(i.text)?i.text.length:1)*e.lineHeight+s.height}function lg(i,t){return Me(i,{scale:t,type:"scale"})}function cg(i,t,e){return Me(i,{tick:e,index:t,type:"tick"})}function hg(i,t,e){let s=zo(i);return(e&&t!=="right"||!e&&t==="right")&&(s=og(s)),s}function dg(i,t,e,s){const{top:n,left:o,bottom:r,right:a,chart:l}=i,{chartArea:c,scales:h}=l;let d=0,u,f,p;const m=r-n,g=a-o;if(i.isHorizontal()){if(f=dt(s,o,a),F(e)){const b=Object.keys(e)[0],y=e[b];p=h[b].getPixelForValue(y)+m-t}else e==="center"?p=(c.bottom+c.top)/2+m-t:p=Ma(i,e,t);u=a-o}else{if(F(e)){const b=Object.keys(e)[0],y=e[b];f=h[b].getPixelForValue(y)-g+t}else e==="center"?f=(c.left+c.right)/2-g+t:f=Ma(i,e,t);p=dt(s,r,n),d=e==="left"?-et:et}return{titleX:f,titleY:p,maxWidth:u,rotation:d}}class Xe extends ae{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:n}=this;return t=St(t,Number.POSITIVE_INFINITY),e=St(e,Number.NEGATIVE_INFINITY),s=St(s,Number.POSITIVE_INFINITY),n=St(n,Number.NEGATIVE_INFINITY),{min:St(t,s),max:St(e,n),minDefined:tt(t),maxDefined:tt(e)}}getMinMax(t){let{min:e,max:s,minDefined:n,maxDefined:o}=this.getUserBounds(),r;if(n&&o)return{min:e,max:s};const a=this.getMatchingVisibleMetas();for(let l=0,c=a.length;l<c;++l)r=a[l].controller.getMinMax(this,t),n||(e=Math.min(e,r.min)),o||(s=Math.max(s,r.max));return e=o&&e>s?s:e,s=n&&e>s?e:s,{min:St(e,St(s,e)),max:St(s,St(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){U(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:n,grace:o,ticks:r}=this.options,a=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=vp(this,o,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const l=a<this.ticks.length;this._convertTicksToLabels(l?Aa(this.ticks,a):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=Jm(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){U(this.options.afterUpdate,[this])}beforeSetDimensions(){U(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){U(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),U(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){U(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,n,o;for(s=0,n=t.length;s<n;s++)o=t[s],o.label=U(e.callback,[o.value,s,t],this)}afterTickToLabelConversion(){U(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){U(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=Pa(this.ticks.length,t.ticks.maxTicksLimit),n=e.minRotation||0,o=e.maxRotation;let r=n,a,l,c;if(!this._isVisible()||!e.display||n>=o||s<=1||!this.isHorizontal()){this.labelRotation=n;return}const h=this._getLabelSizes(),d=h.widest.width,u=h.highest.height,f=at(this.chart.width-d,0,this.maxWidth);a=t.offset?this.maxWidth/s:f/(s-1),d+6>a&&(a=f/(s-(t.offset?.5:1)),l=this.maxHeight-ki(t.grid)-e.padding-Da(t.title,this.chart.options.font),c=Math.sqrt(d*d+u*u),r=Lo(Math.min(Math.asin(at((h.highest.height+6)/a,-1,1)),Math.asin(at(l/c,-1,1))-Math.asin(at(u/c,-1,1)))),r=Math.max(n,Math.min(o,r))),this.labelRotation=r}afterCalculateLabelRotation(){U(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){U(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:n,grid:o}}=this,r=this._isVisible(),a=this.isHorizontal();if(r){const l=Da(n,e.options.font);if(a?(t.width=this.maxWidth,t.height=ki(o)+l):(t.height=this.maxHeight,t.width=ki(o)+l),s.display&&this.ticks.length){const{first:c,last:h,widest:d,highest:u}=this._getLabelSizes(),f=s.padding*2,p=Ot(this.labelRotation),m=Math.cos(p),g=Math.sin(p);if(a){const b=s.mirror?0:g*d.width+m*u.height;t.height=Math.min(this.maxHeight,t.height+b+f)}else{const b=s.mirror?0:m*d.width+g*u.height;t.width=Math.min(this.maxWidth,t.width+b+f)}this._calculatePadding(c,h,g,m)}}this._handleMargins(),a?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,n){const{ticks:{align:o,padding:r},position:a}=this.options,l=this.labelRotation!==0,c=a!=="top"&&this.axis==="x";if(this.isHorizontal()){const h=this.getPixelForTick(0)-this.left,d=this.right-this.getPixelForTick(this.ticks.length-1);let u=0,f=0;l?c?(u=n*t.width,f=s*e.height):(u=s*t.height,f=n*e.width):o==="start"?f=e.width:o==="end"?u=t.width:o!=="inner"&&(u=t.width/2,f=e.width/2),this.paddingLeft=Math.max((u-h+r)*this.width/(this.width-h),0),this.paddingRight=Math.max((f-d+r)*this.width/(this.width-d),0)}else{let h=e.height/2,d=t.height/2;o==="start"?(h=0,d=t.height):o==="end"&&(h=e.height,d=0),this.paddingTop=h+r,this.paddingBottom=d+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){U(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)L(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=Aa(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:n,_longestTextCache:o}=this,r=[],a=[],l=Math.floor(e/Pa(e,s));let c=0,h=0,d,u,f,p,m,g,b,y,w,_,x;for(d=0;d<e;d+=l){if(p=t[d].label,m=this._resolveTickFontOptions(d),n.font=g=m.string,b=o[g]=o[g]||{data:{},gc:[]},y=m.lineHeight,w=_=0,!L(p)&&!G(p))w=Ks(n,b.data,b.gc,w,p),_=y;else if(G(p))for(u=0,f=p.length;u<f;++u)x=p[u],!L(x)&&!G(x)&&(w=Ks(n,b.data,b.gc,w,x),_+=y);r.push(w),a.push(_),c=Math.max(w,c),h=Math.max(_,h)}ag(o,e);const k=r.indexOf(c),C=a.indexOf(h),M=A=>({width:r[A]||0,height:a[A]||0});return{first:M(0),last:M(e-1),widest:M(k),highest:M(C),widths:r,heights:a}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return Xf(this._alignToPixels?Te(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=cg(this.getContext(),t,s))}return this.$context||(this.$context=lg(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=Ot(this.labelRotation),s=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,a=o?o.widest.width+r:0,l=o?o.highest.height+r:0;return this.isHorizontal()?l*s>a*n?a/s:l/n:l*n<a*s?l/s:a/n}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,n=this.options,{grid:o,position:r,border:a}=n,l=o.offset,c=this.isHorizontal(),d=this.ticks.length+(l?1:0),u=ki(o),f=[],p=a.setContext(this.getContext()),m=p.display?p.width:0,g=m/2,b=function(R){return Te(s,R,m)};let y,w,_,x,k,C,M,A,D,E,T,I;if(r==="top")y=b(this.bottom),C=this.bottom-u,A=y-g,E=b(t.top)+g,I=t.bottom;else if(r==="bottom")y=b(this.top),E=t.top,I=b(t.bottom)-g,C=y+g,A=this.top+u;else if(r==="left")y=b(this.right),k=this.right-u,M=y-g,D=b(t.left)+g,T=t.right;else if(r==="right")y=b(this.left),D=t.left,T=b(t.right)-g,k=y+g,M=this.left+u;else if(e==="x"){if(r==="center")y=b((t.top+t.bottom)/2+.5);else if(F(r)){const R=Object.keys(r)[0],V=r[R];y=b(this.chart.scales[R].getPixelForValue(V))}E=t.top,I=t.bottom,C=y+g,A=C+u}else if(e==="y"){if(r==="center")y=b((t.left+t.right)/2);else if(F(r)){const R=Object.keys(r)[0],V=r[R];y=b(this.chart.scales[R].getPixelForValue(V))}k=y-g,M=k-u,D=t.left,T=t.right}const B=O(n.ticks.maxTicksLimit,d),z=Math.max(1,Math.ceil(d/B));for(w=0;w<d;w+=z){const R=this.getContext(w),V=o.setContext(R),Y=a.setContext(R),q=V.lineWidth,le=V.color,as=Y.dash||[],Ge=Y.dashOffset,gi=V.tickWidth,Pe=V.tickColor,bi=V.tickBorderDash||[],Ae=V.tickBorderDashOffset;_=rg(this,w,l),_!==void 0&&(x=Te(s,_,q),c?k=M=D=T=x:C=A=E=I=x,f.push({tx1:k,ty1:C,tx2:M,ty2:A,x1:D,y1:E,x2:T,y2:I,width:q,color:le,borderDash:as,borderDashOffset:Ge,tickWidth:gi,tickColor:Pe,tickBorderDash:bi,tickBorderDashOffset:Ae}))}return this._ticksLength=d,this._borderValue=y,f}_computeLabelItems(t){const e=this.axis,s=this.options,{position:n,ticks:o}=s,r=this.isHorizontal(),a=this.ticks,{align:l,crossAlign:c,padding:h,mirror:d}=o,u=ki(s.grid),f=u+h,p=d?-h:f,m=-Ot(this.labelRotation),g=[];let b,y,w,_,x,k,C,M,A,D,E,T,I="middle";if(n==="top")k=this.bottom-p,C=this._getXAxisLabelAlignment();else if(n==="bottom")k=this.top+p,C=this._getXAxisLabelAlignment();else if(n==="left"){const z=this._getYAxisLabelAlignment(u);C=z.textAlign,x=z.x}else if(n==="right"){const z=this._getYAxisLabelAlignment(u);C=z.textAlign,x=z.x}else if(e==="x"){if(n==="center")k=(t.top+t.bottom)/2+f;else if(F(n)){const z=Object.keys(n)[0],R=n[z];k=this.chart.scales[z].getPixelForValue(R)+f}C=this._getXAxisLabelAlignment()}else if(e==="y"){if(n==="center")x=(t.left+t.right)/2-f;else if(F(n)){const z=Object.keys(n)[0],R=n[z];x=this.chart.scales[z].getPixelForValue(R)}C=this._getYAxisLabelAlignment(u).textAlign}e==="y"&&(l==="start"?I="top":l==="end"&&(I="bottom"));const B=this._getLabelSizes();for(b=0,y=a.length;b<y;++b){w=a[b],_=w.label;const z=o.setContext(this.getContext(b));M=this.getPixelForTick(b)+o.labelOffset,A=this._resolveTickFontOptions(b),D=A.lineHeight,E=G(_)?_.length:1;const R=E/2,V=z.color,Y=z.textStrokeColor,q=z.textStrokeWidth;let le=C;r?(x=M,C==="inner"&&(b===y-1?le=this.options.reverse?"left":"right":b===0?le=this.options.reverse?"right":"left":le="center"),n==="top"?c==="near"||m!==0?T=-E*D+D/2:c==="center"?T=-B.highest.height/2-R*D+D:T=-B.highest.height+D/2:c==="near"||m!==0?T=D/2:c==="center"?T=B.highest.height/2-R*D:T=B.highest.height-E*D,d&&(T*=-1),m!==0&&!z.showLabelBackdrop&&(x+=D/2*Math.sin(m))):(k=M,T=(1-E)*D/2);let as;if(z.showLabelBackdrop){const Ge=ct(z.backdropPadding),gi=B.heights[b],Pe=B.widths[b];let bi=T-Ge.top,Ae=0-Ge.left;switch(I){case"middle":bi-=gi/2;break;case"bottom":bi-=gi;break}switch(C){case"center":Ae-=Pe/2;break;case"right":Ae-=Pe;break;case"inner":b===y-1?Ae-=Pe:b>0&&(Ae-=Pe/2);break}as={left:Ae,top:bi,width:Pe+Ge.width,height:gi+Ge.height,color:z.backdropColor}}g.push({label:_,font:A,textOffset:T,options:{rotation:m,color:V,strokeColor:Y,strokeWidth:q,textAlign:le,textBaseline:I,translation:[x,k],backdrop:as}})}return g}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-Ot(this.labelRotation))return t==="top"?"left":"right";let n="center";return e.align==="start"?n="left":e.align==="end"?n="right":e.align==="inner"&&(n="inner"),n}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:n,padding:o}}=this.options,r=this._getLabelSizes(),a=t+o,l=r.widest.width;let c,h;return e==="left"?n?(h=this.right+o,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h+=l)):(h=this.right-a,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h=this.left)):e==="right"?n?(h=this.left+o,s==="near"?c="right":s==="center"?(c="center",h-=l/2):(c="left",h-=l)):(h=this.left+a,s==="near"?c="left":s==="center"?(c="center",h+=l/2):(c="right",h=this.right)):c="right",{textAlign:c,x:h}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:n,width:o,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,n,o,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const n=this.ticks.findIndex(o=>o.value===t);return n>=0?e.setContext(this.getContext(n)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,n=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const a=(l,c,h)=>{!h.width||!h.color||(s.save(),s.lineWidth=h.width,s.strokeStyle=h.color,s.setLineDash(h.borderDash||[]),s.lineDashOffset=h.borderDashOffset,s.beginPath(),s.moveTo(l.x,l.y),s.lineTo(c.x,c.y),s.stroke(),s.restore())};if(e.display)for(o=0,r=n.length;o<r;++o){const l=n[o];e.drawOnChartArea&&a({x:l.x1,y:l.y1},{x:l.x2,y:l.y2},l),e.drawTicks&&a({x:l.tx1,y:l.ty1},{x:l.tx2,y:l.ty2},{color:l.tickColor,width:l.tickWidth,borderDash:l.tickBorderDash,borderDashOffset:l.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:n}}=this,o=s.setContext(this.getContext()),r=s.display?o.width:0;if(!r)return;const a=n.setContext(this.getContext(0)).lineWidth,l=this._borderValue;let c,h,d,u;this.isHorizontal()?(c=Te(t,this.left,r)-r/2,h=Te(t,this.right,a)+a/2,d=u=l):(d=Te(t,this.top,r)-r/2,u=Te(t,this.bottom,a)+a/2,c=h=l),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(c,d),e.lineTo(h,u),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,n=this._computeLabelArea();n&&gn(s,n);const o=this.getLabelItems(t);for(const r of o){const a=r.options,l=r.font,c=r.label,h=r.textOffset;qe(s,c,0,h,l,a)}n&&bn(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:n}}=this;if(!s.display)return;const o=nt(s.font),r=ct(s.padding),a=s.align;let l=o.lineHeight/2;e==="bottom"||e==="center"||F(e)?(l+=r.bottom,G(s.text)&&(l+=o.lineHeight*(s.text.length-1))):l+=r.top;const{titleX:c,titleY:h,maxWidth:d,rotation:u}=dg(this,l,e,a);qe(t,s.text,0,0,o,{color:s.color,maxWidth:d,rotation:u,textAlign:hg(a,e,n),textBaseline:"middle",translation:[c,h]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=O(t.grid&&t.grid.z,-1),n=O(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Xe.prototype.draw?[{z:e,draw:o=>{this.draw(o)}}]:[{z:s,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:n,draw:()=>{this.drawBorder()}},{z:e,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",n=[];let o,r;for(o=0,r=e.length;o<r;++o){const a=e[o];a[s]===this.id&&(!t||a.type===t)&&n.push(a)}return n}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return nt(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class gs{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;pg(e)&&(s=this.register(e));const n=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in n||(n[o]=t,ug(t,r,s),this.override&&Q.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,n=this.scope;s in e&&delete e[s],n&&s in Q[n]&&(delete Q[n][s],this.override&&delete We[s])}}function ug(i,t,e){const s=Wt(Object.create(null),[e?Q.get(e):{},Q.get(t),i.defaults]);Q.set(t,s),i.defaultRoutes&&fg(t,i.defaultRoutes),i.descriptors&&Q.describe(t,i.descriptors)}function fg(i,t){Object.keys(t).forEach(e=>{const s=e.split("."),n=s.pop(),o=[i].concat(s).join("."),r=t[e].split("."),a=r.pop(),l=r.join(".");Q.route(o,n,l,a)})}function pg(i){return"id"in i&&"defaults"in i}class mg{constructor(){this.controllers=new gs(Lt,"datasets",!0),this.elements=new gs(ae,"elements"),this.plugins=new gs(Object,"plugins"),this.scales=new gs(Xe,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(n=>{const o=s||this._getRegistryForType(n);s||o.isForType(n)||o===this.plugins&&n.id?this._exec(t,o,n):W(n,r=>{const a=s||this._getRegistryForType(r);this._exec(t,a,r)})})}_exec(t,e,s){const n=Oo(t);U(s["before"+n],[],s),e[t](s),U(s["after"+n],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const n=e.get(t);if(n===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return n}}var Ft=new mg;class gg{constructor(){this._init=void 0}notify(t,e,s,n){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=n?this._descriptors(t).filter(n):this._descriptors(t),r=this._notify(o,t,e,s);return e==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,e,s,n){n=n||{};for(const o of t){const r=o.plugin,a=r[s],l=[e,n,o.options];if(U(a,l,r)===!1&&n.cancelable)return!1}return!0}invalidate(){L(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,n=O(s.options&&s.options.plugins,{}),o=bg(s);return n===!1&&!e?[]:vg(t,o,n,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,n=(o,r)=>o.filter(a=>!r.some(l=>a.plugin.id===l.plugin.id));this._notify(n(e,s),t,"stop"),this._notify(n(s,e),t,"start")}}function bg(i){const t={},e=[],s=Object.keys(Ft.plugins.items);for(let o=0;o<s.length;o++)e.push(Ft.getPlugin(s[o]));const n=i.plugins||[];for(let o=0;o<n.length;o++){const r=n[o];e.indexOf(r)===-1&&(e.push(r),t[r.id]=!0)}return{plugins:e,localIds:t}}function yg(i,t){return!t&&i===!1?null:i===!0?{}:i}function vg(i,{plugins:t,localIds:e},s,n){const o=[],r=i.getContext();for(const a of t){const l=a.id,c=yg(s[l],n);c!==null&&o.push({plugin:a,options:xg(i.config,{plugin:a,local:e[l]},c,r)})}return o}function xg(i,{plugin:t,local:e},s,n){const o=i.pluginScopeKeys(t),r=i.getOptionScopes(s,o);return e&&t.defaults&&r.push(t.defaults),i.createResolver(r,n,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function no(i,t){const e=Q.datasets[i]||{};return((t.datasets||{})[i]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function _g(i,t){let e=i;return i==="_index_"?e=t:i==="_value_"&&(e=t==="x"?"y":"x"),e}function wg(i,t){return i===t?"_index_":"_value_"}function Ea(i){if(i==="x"||i==="y"||i==="r")return i}function kg(i){if(i==="top"||i==="bottom")return"x";if(i==="left"||i==="right")return"y"}function oo(i,...t){if(Ea(i))return i;for(const e of t){const s=e.axis||kg(e.position)||i.length>1&&Ea(i[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)}function Ta(i,t,e){if(e[t+"AxisID"]===i)return{axis:t}}function Sg(i,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===i||s.yAxisID===i);if(e.length)return Ta(i,"x",e[0])||Ta(i,"y",e[0])}return{}}function Cg(i,t){const e=We[i.type]||{scales:{}},s=t.scales||{},n=no(i.type,t),o=Object.create(null);return Object.keys(s).forEach(r=>{const a=s[r];if(!F(a))return console.error(`Invalid scale configuration for scale: ${r}`);if(a._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const l=oo(r,a,Sg(r,i),Q.scales[a.type]),c=wg(l,n),h=e.scales||{};o[r]=Ti(Object.create(null),[{axis:l},a,h[l],h[c]])}),i.data.datasets.forEach(r=>{const a=r.type||i.type,l=r.indexAxis||no(a,t),h=(We[a]||{}).scales||{};Object.keys(h).forEach(d=>{const u=_g(d,l),f=r[u+"AxisID"]||u;o[f]=o[f]||Object.create(null),Ti(o[f],[{axis:u},s[f],h[d]])})}),Object.keys(o).forEach(r=>{const a=o[r];Ti(a,[Q.scales[a.type],Q.scale])}),o}function zc(i){const t=i.options||(i.options={});t.plugins=O(t.plugins,{}),t.scales=Cg(i,t)}function $c(i){return i=i||{},i.datasets=i.datasets||[],i.labels=i.labels||[],i}function Mg(i){return i=i||{},i.data=$c(i.data),zc(i),i}const Oa=new Map,Ic=new Set;function bs(i,t){let e=Oa.get(i);return e||(e=t(),Oa.set(i,e),Ic.add(e)),e}const Si=(i,t,e)=>{const s=_e(t,e);s!==void 0&&i.add(s)};class Pg{constructor(t){this._config=Mg(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=$c(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),zc(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return bs(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return bs(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return bs(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return bs(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let n=s.get(t);return(!n||e)&&(n=new Map,s.set(t,n)),n}getOptionScopes(t,e,s){const{options:n,type:o}=this,r=this._cachedScopes(t,s),a=r.get(e);if(a)return a;const l=new Set;e.forEach(h=>{t&&(l.add(t),h.forEach(d=>Si(l,t,d))),h.forEach(d=>Si(l,n,d)),h.forEach(d=>Si(l,We[o]||{},d)),h.forEach(d=>Si(l,Q,d)),h.forEach(d=>Si(l,eo,d))});const c=Array.from(l);return c.length===0&&c.push(Object.create(null)),Ic.has(e)&&r.set(e,c),c}chartOptionScopes(){const{options:t,type:e}=this;return[t,We[e]||{},Q.datasets[e]||{},{type:e},Q,eo]}resolveNamedOptions(t,e,s,n=[""]){const o={$shared:!0},{resolver:r,subPrefixes:a}=La(this._resolverCache,t,n);let l=r;if(Dg(r,e)){o.$shared=!1,s=we(s)?s():s;const c=this.createResolver(t,s,a);l=di(r,s,c)}for(const c of e)o[c]=l[c];return o}createResolver(t,e,s=[""],n){const{resolver:o}=La(this._resolverCache,t,s);return F(e)?di(o,e,void 0,n):o}}function La(i,t,e){let s=i.get(t);s||(s=new Map,i.set(t,s));const n=e.join();let o=s.get(n);return o||(o={resolver:Fo(t,e),subPrefixes:e.filter(a=>!a.toLowerCase().includes("hover"))},s.set(n,o)),o}const Ag=i=>F(i)&&Object.getOwnPropertyNames(i).some(t=>we(i[t]));function Dg(i,t){const{isScriptable:e,isIndexable:s}=mc(i);for(const n of t){const o=e(n),r=s(n),a=(r||o)&&i[n];if(o&&(we(a)||Ag(a))||r&&G(a))return!0}return!1}var Eg="4.5.1";const Tg=["top","bottom","left","right","chartArea"];function Ra(i,t){return i==="top"||i==="bottom"||Tg.indexOf(i)===-1&&t==="x"}function za(i,t){return function(e,s){return e[i]===s[i]?e[t]-s[t]:e[i]-s[i]}}function $a(i){const t=i.chart,e=t.options.animation;t.notifyPlugins("afterRender"),U(e&&e.onComplete,[i],t)}function Og(i){const t=i.chart,e=t.options.animation;U(e&&e.onProgress,[i],t)}function Fc(i){return jo()&&typeof i=="string"?i=document.getElementById(i):i&&i.length&&(i=i[0]),i&&i.canvas&&(i=i.canvas),i}const zs={},Ia=i=>{const t=Fc(i);return Object.values(zs).filter(e=>e.canvas===t).pop()};function Lg(i,t,e){const s=Object.keys(i);for(const n of s){const o=+n;if(o>=t){const r=i[n];delete i[n],(e>0||o>t)&&(i[o+e]=r)}}}function Rg(i,t,e,s){return!e||i.type==="mouseout"?null:s?t:i}var ce;let Ui=(ce=class{static register(...t){Ft.add(...t),Fa()}static unregister(...t){Ft.remove(...t),Fa()}constructor(t,e){const s=this.config=new Pg(e),n=Fc(t),o=Ia(n);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||Zm(n)),this.platform.updateConfig(s);const a=this.platform.acquireContext(n,r.aspectRatio),l=a&&a.canvas,c=l&&l.height,h=l&&l.width;if(this.id=zf(),this.ctx=a,this.canvas=l,this.width=h,this.height=c,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new gg,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Zf(d=>this.update(d),r.resizeDelay||0),this._dataChanges=[],zs[this.id]=this,!a||!l){console.error("Failed to create chart: can't acquire context from the given item");return}Yt.listen(this,"complete",$a),Yt.listen(this,"progress",Og),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:n,_aspectRatio:o}=this;return L(t)?e&&o?o:n?s/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return Ft}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():ra(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return sa(this.canvas,this.ctx),this}stop(){return Yt.stop(this),this}resize(t,e){Yt.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,n=this.canvas,o=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(n,t,e,o),a=s.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,ra(this,a,!0)&&(this.notifyPlugins("resize",{size:r}),U(s.onResize,[this,r],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};W(e,(s,n)=>{s.id=n})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,n=Object.keys(s).reduce((r,a)=>(r[a]=!1,r),{});let o=[];e&&(o=o.concat(Object.keys(e).map(r=>{const a=e[r],l=oo(r,a),c=l==="r",h=l==="x";return{options:a,dposition:c?"chartArea":h?"bottom":"left",dtype:c?"radialLinear":h?"category":"linear"}}))),W(o,r=>{const a=r.options,l=a.id,c=oo(l,a),h=O(a.type,r.dtype);(a.position===void 0||Ra(a.position,c)!==Ra(r.dposition))&&(a.position=r.dposition),n[l]=!0;let d=null;if(l in s&&s[l].type===h)d=s[l];else{const u=Ft.getScale(h);d=new u({id:l,type:h,ctx:this.ctx,chart:this}),s[d.id]=d}d.init(a,t)}),W(n,(r,a)=>{r||delete s[a]}),W(s,r=>{ft.configure(this,r,r.options),ft.addBox(this,r)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((n,o)=>n.index-o.index),s>e){for(let n=e;n<s;++n)this._destroyDatasetMeta(n);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(za("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,n)=>{e.filter(o=>o===s._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,n;for(this._removeUnreferencedMetasets(),s=0,n=e.length;s<n;s++){const o=e[s];let r=this.getDatasetMeta(s);const a=o.type||this.config.type;if(r.type&&r.type!==a&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=a,r.indexAxis=o.indexAxis||no(a,this.options),r.order=o.order||0,r.index=s,r.label=""+o.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const l=Ft.getController(a),{datasetElementType:c,dataElementType:h}=Q.datasets[a];Object.assign(l,{dataElementType:Ft.getElement(h),datasetElementType:c&&Ft.getElement(c)}),r.controller=new l(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){W(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let c=0,h=this.data.datasets.length;c<h;c++){const{controller:d}=this.getDatasetMeta(c),u=!n&&o.indexOf(d)===-1;d.buildOrUpdateElements(u),r=Math.max(+d.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),n||W(o,c=>{c.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(za("z","_idx"));const{_active:a,_lastEvent:l}=this;l?this._eventHandler(l,!0):a.length&&this._updateHoverStyles(a,a,!0),this.render()}_updateScales(){W(this.scales,t=>{ft.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Xr(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:n,count:o}of e){const r=s==="_removeElements"?-o:o;Lg(t,n,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=o=>new Set(t.filter(r=>r[0]===o).map((r,a)=>a+","+r.splice(1).join(","))),n=s(0);for(let o=1;o<e;o++)if(!Xr(n,s(o)))return;return Array.from(n).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;ft.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],W(this.boxes,n=>{s&&n.position==="chartArea"||(n.configure&&n.configure(),this._layers.push(...n._layers()))},this),this._layers.forEach((n,o)=>{n._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,we(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),n={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",n)!==!1&&(s.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(Yt.has(this)?this.attached&&!Yt.running(this)&&Yt.start(this):(this.draw(),$a({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:n}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,n)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let n,o;for(n=0,o=e.length;n<o;++n){const r=e[n];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},n=Mc(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(n&&gn(e,n),t.controller.draw(),n&&bn(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return Zt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,n){const o=Tm.modes[e];return typeof o=="function"?o(this,t,s,n):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let n=s.filter(o=>o&&o._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(n)),n}getContext(){return this.$context||(this.$context=Me(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const n=s?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,n);Hi(e)?(o.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(o,{visible:s}),this.update(a=>a.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),Yt.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),sa(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete zs[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(o,r)=>{e.addEventListener(this,o,r),t[o]=r},n=(o,r,a)=>{o.offsetX=r,o.offsetY=a,this._eventHandler(o)};W(this.options.events,o=>s(o,n))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(l,c)=>{e.addEventListener(this,l,c),t[l]=c},n=(l,c)=>{t[l]&&(e.removeEventListener(this,l,c),delete t[l])},o=(l,c)=>{this.canvas&&this.resize(l,c)};let r;const a=()=>{n("attach",a),this.attached=!0,this.resize(),s("resize",o),s("detach",r)};r=()=>{this.attached=!1,n("resize",o),this._stop(),this._resize(0,0),s("attach",a)},e.isAttached(this.canvas)?a():r()}unbindEvents(){W(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},W(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const n=s?"set":"remove";let o,r,a,l;for(e==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+n+"DatasetHoverStyle"]()),a=0,l=t.length;a<l;++a){r=t[a];const c=r&&this.getDatasetMeta(r.datasetIndex).controller;c&&c[n+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:o,index:r})=>{const a=this.getDatasetMeta(o);if(!a)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:a.data[r],index:r}});!Us(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const n=this.options.hover,o=(l,c)=>l.filter(h=>!c.some(d=>h.datasetIndex===d.datasetIndex&&h.index===d.index)),r=o(e,t),a=s?t:o(t,e);r.length&&this.updateHoverStyle(r,n.mode,!1),a.length&&n.mode&&this.updateHoverStyle(a,n.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,n)===!1)return;const o=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,n),(o||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:n=[],options:o}=this,r=e,a=this._getActiveElements(t,n,s,r),l=jf(t),c=Rg(t,this._lastEvent,s,l);s&&(this._lastEvent=null,U(o.onHover,[t,a,this],this),l&&U(o.onClick,[t,a,this],this));const h=!Us(a,n);return(h||e)&&(this._active=a,this._updateHoverStyles(a,n,e)),this._lastEvent=c,h}_getActiveElements(t,e,s,n){if(t.type==="mouseout")return[];if(!s)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,n)}},P(ce,"defaults",Q),P(ce,"instances",zs),P(ce,"overrides",We),P(ce,"registry",Ft),P(ce,"version",Eg),P(ce,"getChart",Ia),ce);function Fa(){return W(Ui.instances,i=>i._plugins.invalidate())}function zg(i,t,e){const{startAngle:s,x:n,y:o,outerRadius:r,innerRadius:a,options:l}=t,{borderWidth:c,borderJoinStyle:h}=l,d=Math.min(c/r,ut(s-e));if(i.beginPath(),i.arc(n,o,r-c/2,s+d/2,e-d/2),a>0){const u=Math.min(c/a,ut(s-e));i.arc(n,o,a+c/2,e-u/2,s+u/2,!0)}else{const u=Math.min(c/2,r*ut(s-e));if(h==="round")i.arc(n,o,u,e-N/2,s+N/2,!0);else if(h==="bevel"){const f=2*u*u,p=-f*Math.cos(e+N/2)+n,m=-f*Math.sin(e+N/2)+o,g=f*Math.cos(s+N/2)+n,b=f*Math.sin(s+N/2)+o;i.lineTo(p,m),i.lineTo(g,b)}}i.closePath(),i.moveTo(0,0),i.rect(0,0,i.canvas.width,i.canvas.height),i.clip("evenodd")}function $g(i,t,e){const{startAngle:s,pixelMargin:n,x:o,y:r,outerRadius:a,innerRadius:l}=t;let c=n/a;i.beginPath(),i.arc(o,r,a,s-c,e+c),l>n?(c=n/l,i.arc(o,r,l,e+c,s-c,!0)):i.arc(o,r,n,e+et,s-et),i.closePath(),i.clip()}function Ig(i){return Io(i,["outerStart","outerEnd","innerStart","innerEnd"])}function Fg(i,t,e,s){const n=Ig(i.options.borderRadius),o=(e-t)/2,r=Math.min(o,s*t/2),a=l=>{const c=(e-Math.min(o,l))*s/2;return at(l,0,Math.min(o,c))};return{outerStart:a(n.outerStart),outerEnd:a(n.outerEnd),innerStart:at(n.innerStart,0,r),innerEnd:at(n.innerEnd,0,r)}}function Qe(i,t,e,s){return{x:e+i*Math.cos(t),y:s+i*Math.sin(t)}}function Js(i,t,e,s,n,o){const{x:r,y:a,startAngle:l,pixelMargin:c,innerRadius:h}=t,d=Math.max(t.outerRadius+s+e-c,0),u=h>0?h+s+e+c:0;let f=0;const p=n-l;if(s){const z=h>0?h-s:0,R=d>0?d-s:0,V=(z+R)/2,Y=V!==0?p*V/(V+s):p;f=(p-Y)/2}const m=Math.max(.001,p*d-e/N)/d,g=(p-m)/2,b=l+g+f,y=n-g-f,{outerStart:w,outerEnd:_,innerStart:x,innerEnd:k}=Fg(t,u,d,y-b),C=d-w,M=d-_,A=b+w/C,D=y-_/M,E=u+x,T=u+k,I=b+x/E,B=y-k/T;if(i.beginPath(),o){const z=(A+D)/2;if(i.arc(r,a,d,A,z),i.arc(r,a,d,z,D),_>0){const q=Qe(M,D,r,a);i.arc(q.x,q.y,_,D,y+et)}const R=Qe(T,y,r,a);if(i.lineTo(R.x,R.y),k>0){const q=Qe(T,B,r,a);i.arc(q.x,q.y,k,y+et,B+Math.PI)}const V=(y-k/u+(b+x/u))/2;if(i.arc(r,a,u,y-k/u,V,!0),i.arc(r,a,u,V,b+x/u,!0),x>0){const q=Qe(E,I,r,a);i.arc(q.x,q.y,x,I+Math.PI,b-et)}const Y=Qe(C,b,r,a);if(i.lineTo(Y.x,Y.y),w>0){const q=Qe(C,A,r,a);i.arc(q.x,q.y,w,b-et,A)}}else{i.moveTo(r,a);const z=Math.cos(A)*d+r,R=Math.sin(A)*d+a;i.lineTo(z,R);const V=Math.cos(D)*d+r,Y=Math.sin(D)*d+a;i.lineTo(V,Y)}i.closePath()}function Bg(i,t,e,s,n){const{fullCircles:o,startAngle:r,circumference:a}=t;let l=t.endAngle;if(o){Js(i,t,e,s,l,n);for(let c=0;c<o;++c)i.fill();isNaN(a)||(l=r+(a%K||K))}return Js(i,t,e,s,l,n),i.fill(),l}function Vg(i,t,e,s,n){const{fullCircles:o,startAngle:r,circumference:a,options:l}=t,{borderWidth:c,borderJoinStyle:h,borderDash:d,borderDashOffset:u,borderRadius:f}=l,p=l.borderAlign==="inner";if(!c)return;i.setLineDash(d||[]),i.lineDashOffset=u,p?(i.lineWidth=c*2,i.lineJoin=h||"round"):(i.lineWidth=c,i.lineJoin=h||"bevel");let m=t.endAngle;if(o){Js(i,t,e,s,m,n);for(let g=0;g<o;++g)i.stroke();isNaN(a)||(m=r+(a%K||K))}p&&$g(i,t,m),l.selfJoin&&m-r>=N&&f===0&&h!=="miter"&&zg(i,t,m),o||(Js(i,t,e,s,m,n),i.stroke())}class Ze extends ae{constructor(e){super();P(this,"circumference");P(this,"endAngle");P(this,"fullCircles");P(this,"innerRadius");P(this,"outerRadius");P(this,"pixelMargin");P(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,n){const o=this.getProps(["x","y"],n),{angle:r,distance:a}=oc(o,{x:e,y:s}),{startAngle:l,endAngle:c,innerRadius:h,outerRadius:d,circumference:u}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],n),f=(this.options.spacing+this.options.borderWidth)/2,p=O(u,c-l),m=Wi(r,l,c)&&l!==c,g=p>=K||m,b=Kt(a,h+f,d+f);return g&&b}getCenterPoint(e){const{x:s,y:n,startAngle:o,endAngle:r,innerRadius:a,outerRadius:l}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:c,spacing:h}=this.options,d=(o+r)/2,u=(a+l+h+c)/2;return{x:s+Math.cos(d)*u,y:n+Math.sin(d)*u}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:n}=this,o=(s.offset||0)/4,r=(s.spacing||0)/2,a=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=n>K?Math.floor(n/K):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const l=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(l)*o,Math.sin(l)*o);const c=1-Math.sin(Math.min(N,n||0)),h=o*c;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,Bg(e,this,h,r,a),Vg(e,this,h,r,a),e.restore()}}P(Ze,"id","arc"),P(Ze,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),P(Ze,"defaultRoutes",{backgroundColor:"backgroundColor"}),P(Ze,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Bc(i,t,e=t){i.lineCap=O(e.borderCapStyle,t.borderCapStyle),i.setLineDash(O(e.borderDash,t.borderDash)),i.lineDashOffset=O(e.borderDashOffset,t.borderDashOffset),i.lineJoin=O(e.borderJoinStyle,t.borderJoinStyle),i.lineWidth=O(e.borderWidth,t.borderWidth),i.strokeStyle=O(e.borderColor,t.borderColor)}function jg(i,t,e){i.lineTo(e.x,e.y)}function Ng(i){return i.stepped?hp:i.tension||i.cubicInterpolationMode==="monotone"?dp:jg}function Vc(i,t,e={}){const s=i.length,{start:n=0,end:o=s-1}=e,{start:r,end:a}=t,l=Math.max(n,r),c=Math.min(o,a),h=n<r&&o<r||n>a&&o>a;return{count:s,start:l,loop:t.loop,ilen:c<l&&!h?s+c-l:c-l}}function Hg(i,t,e,s){const{points:n,options:o}=t,{count:r,start:a,loop:l,ilen:c}=Vc(n,e,s),h=Ng(o);let{move:d=!0,reverse:u}=s||{},f,p,m;for(f=0;f<=c;++f)p=n[(a+(u?c-f:f))%r],!p.skip&&(d?(i.moveTo(p.x,p.y),d=!1):h(i,m,p,u,o.stepped),m=p);return l&&(p=n[(a+(u?c:0))%r],h(i,m,p,u,o.stepped)),!!l}function Wg(i,t,e,s){const n=t.points,{count:o,start:r,ilen:a}=Vc(n,e,s),{move:l=!0,reverse:c}=s||{};let h=0,d=0,u,f,p,m,g,b;const y=_=>(r+(c?a-_:_))%o,w=()=>{m!==g&&(i.lineTo(h,g),i.lineTo(h,m),i.lineTo(h,b))};for(l&&(f=n[y(0)],i.moveTo(f.x,f.y)),u=0;u<=a;++u){if(f=n[y(u)],f.skip)continue;const _=f.x,x=f.y,k=_|0;k===p?(x<m?m=x:x>g&&(g=x),h=(d*h+_)/++d):(w(),i.lineTo(_,x),p=k,d=0,m=g=x),b=x}w()}function ro(i){const t=i.options,e=t.borderDash&&t.borderDash.length;return!i._decimated&&!i._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?Wg:Hg}function qg(i){return i.stepped?Hp:i.tension||i.cubicInterpolationMode==="monotone"?Wp:ze}function Yg(i,t,e,s){let n=t._path;n||(n=t._path=new Path2D,t.path(n,e,s)&&n.closePath()),Bc(i,t.options),i.stroke(n)}function Ug(i,t,e,s){const{segments:n,options:o}=t,r=ro(t);for(const a of n)Bc(i,o,a.style),i.beginPath(),r(i,t,a,{start:e,end:e+s-1})&&i.closePath(),i.stroke()}const Xg=typeof Path2D=="function";function Gg(i,t,e,s){Xg&&!t.options.segment?Yg(i,t,e,s):Ug(i,t,e,s)}class fe extends ae{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const n=s.spanGaps?this._loop:this._fullLoop;zp(this._points,s,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=Kp(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,n=t[e],o=this.points,r=Cc(this,{property:e,start:n,end:n});if(!r.length)return;const a=[],l=qg(s);let c,h;for(c=0,h=r.length;c<h;++c){const{start:d,end:u}=r[c],f=o[d],p=o[u];if(f===p){a.push(f);continue}const m=Math.abs((n-f[e])/(p[e]-f[e])),g=l(f,p,m,s.stepped);g[e]=t[e],a.push(g)}return a.length===1?a[0]:a}pathSegment(t,e,s){return ro(this)(t,this,e,s)}path(t,e,s){const n=this.segments,o=ro(this);let r=this._loop;e=e||0,s=s||this.points.length-e;for(const a of n)r&=o(t,this,a,{start:e,end:e+s-1});return!!r}draw(t,e,s,n){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),Gg(t,this,s,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}P(fe,"id","line"),P(fe,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),P(fe,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),P(fe,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function Ba(i,t,e,s){const n=i.options,{[e]:o}=i.getProps([e],s);return Math.abs(t-o)<n.radius+n.hitRadius}class $i extends ae{constructor(e){super();P(this,"parsed");P(this,"skip");P(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,n){const o=this.options,{x:r,y:a}=this.getProps(["x","y"],n);return Math.pow(e-r,2)+Math.pow(s-a,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(e,s){return Ba(this,e,"x",s)}inYRange(e,s){return Ba(this,e,"y",s)}getCenterPoint(e){const{x:s,y:n}=this.getProps(["x","y"],e);return{x:s,y:n}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const n=s&&e.borderWidth||0;return(s+n)*2}draw(e,s){const n=this.options;this.skip||n.radius<.1||!Zt(this,s,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,io(e,n,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}P($i,"id","point"),P($i,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),P($i,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function jc(i,t){const{x:e,y:s,base:n,width:o,height:r}=i.getProps(["x","y","base","width","height"],t);let a,l,c,h,d;return i.horizontal?(d=r/2,a=Math.min(e,n),l=Math.max(e,n),c=s-d,h=s+d):(d=o/2,a=e-d,l=e+d,c=Math.min(s,n),h=Math.max(s,n)),{left:a,top:c,right:l,bottom:h}}function pe(i,t,e,s){return i?0:at(t,e,s)}function Kg(i,t,e){const s=i.options.borderWidth,n=i.borderSkipped,o=pc(s);return{t:pe(n.top,o.top,0,e),r:pe(n.right,o.right,0,t),b:pe(n.bottom,o.bottom,0,e),l:pe(n.left,o.left,0,t)}}function Qg(i,t,e){const{enableBorderRadius:s}=i.getProps(["enableBorderRadius"]),n=i.options.borderRadius,o=Fe(n),r=Math.min(t,e),a=i.borderSkipped,l=s||F(n);return{topLeft:pe(!l||a.top||a.left,o.topLeft,0,r),topRight:pe(!l||a.top||a.right,o.topRight,0,r),bottomLeft:pe(!l||a.bottom||a.left,o.bottomLeft,0,r),bottomRight:pe(!l||a.bottom||a.right,o.bottomRight,0,r)}}function Zg(i){const t=jc(i),e=t.right-t.left,s=t.bottom-t.top,n=Kg(i,e/2,s/2),o=Qg(i,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:o},inner:{x:t.left+n.l,y:t.top+n.t,w:e-n.l-n.r,h:s-n.t-n.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(n.t,n.l)),topRight:Math.max(0,o.topRight-Math.max(n.t,n.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(n.b,n.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(n.b,n.r))}}}}function $n(i,t,e,s){const n=t===null,o=e===null,a=i&&!(n&&o)&&jc(i,s);return a&&(n||Kt(t,a.left,a.right))&&(o||Kt(e,a.top,a.bottom))}function Jg(i){return i.topLeft||i.topRight||i.bottomLeft||i.bottomRight}function tb(i,t){i.rect(t.x,t.y,t.w,t.h)}function In(i,t,e={}){const s=i.x!==e.x?-t:0,n=i.y!==e.y?-t:0,o=(i.x+i.w!==e.x+e.w?t:0)-s,r=(i.y+i.h!==e.y+e.h?t:0)-n;return{x:i.x+s,y:i.y+n,w:i.w+o,h:i.h+r,radius:i.radius}}class Ii extends ae{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:n}}=this,{inner:o,outer:r}=Zg(this),a=Jg(r.radius)?qi:tb;t.save(),(r.w!==o.w||r.h!==o.h)&&(t.beginPath(),a(t,In(r,e,o)),t.clip(),a(t,In(o,-e,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),a(t,In(o,e)),t.fillStyle=n,t.fill(),t.restore()}inRange(t,e,s){return $n(this,t,e,s)}inXRange(t,e){return $n(this,t,null,e)}inYRange(t,e){return $n(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:n,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+n)/2:e,y:o?s:(s+n)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}P(Ii,"id","bar"),P(Ii,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),P(Ii,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var eb=Object.freeze({__proto__:null,ArcElement:Ze,BarElement:Ii,LineElement:fe,PointElement:$i});const ao=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],Va=ao.map(i=>i.replace("rgb(","rgba(").replace(")",", 0.5)"));function Nc(i){return ao[i%ao.length]}function Hc(i){return Va[i%Va.length]}function ib(i,t){return i.borderColor=Nc(t),i.backgroundColor=Hc(t),++t}function sb(i,t){return i.backgroundColor=i.data.map(()=>Nc(t++)),t}function nb(i,t){return i.backgroundColor=i.data.map(()=>Hc(t++)),t}function ob(i){let t=0;return(e,s)=>{const n=i.getDatasetMeta(s).controller;n instanceof Ie?t=sb(e,t):n instanceof zi?t=nb(e,t):n&&(t=ib(e,t))}}function ja(i){let t;for(t in i)if(i[t].borderColor||i[t].backgroundColor)return!0;return!1}function rb(i){return i&&(i.borderColor||i.backgroundColor)}function ab(){return Q.borderColor!=="rgba(0,0,0,0.1)"||Q.backgroundColor!=="rgba(0,0,0,0.1)"}var lb={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(i,t,e){if(!e.enabled)return;const{data:{datasets:s},options:n}=i.config,{elements:o}=n,r=ja(s)||rb(n)||o&&ja(o)||ab();if(!e.forceOverride&&r)return;const a=ob(i);s.forEach(a)}};function cb(i,t,e,s,n){const o=n.samples||s;if(o>=e)return i.slice(t,t+e);const r=[],a=(e-2)/(o-2);let l=0;const c=t+e-1;let h=t,d,u,f,p,m;for(r[l++]=i[h],d=0;d<o-2;d++){let g=0,b=0,y;const w=Math.floor((d+1)*a)+1+t,_=Math.min(Math.floor((d+2)*a)+1,e)+t,x=_-w;for(y=w;y<_;y++)g+=i[y].x,b+=i[y].y;g/=x,b/=x;const k=Math.floor(d*a)+1+t,C=Math.min(Math.floor((d+1)*a)+1,e)+t,{x:M,y:A}=i[h];for(f=p=-1,y=k;y<C;y++)p=.5*Math.abs((M-g)*(i[y].y-A)-(M-i[y].x)*(b-A)),p>f&&(f=p,u=i[y],m=y);r[l++]=u,h=m}return r[l++]=i[c],r}function hb(i,t,e,s){let n=0,o=0,r,a,l,c,h,d,u,f,p,m;const g=[],b=t+e-1,y=i[t].x,_=i[b].x-y;for(r=t;r<t+e;++r){a=i[r],l=(a.x-y)/_*s,c=a.y;const x=l|0;if(x===h)c<p?(p=c,d=r):c>m&&(m=c,u=r),n=(o*n+a.x)/++o;else{const k=r-1;if(!L(d)&&!L(u)){const C=Math.min(d,u),M=Math.max(d,u);C!==f&&C!==k&&g.push({...i[C],x:n}),M!==f&&M!==k&&g.push({...i[M],x:n})}r>0&&k!==f&&g.push(i[k]),g.push(a),h=x,o=0,p=m=c,d=u=f=r}}return g}function Wc(i){if(i._decimated){const t=i._data;delete i._decimated,delete i._data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Na(i){i.data.datasets.forEach(t=>{Wc(t)})}function db(i,t){const e=t.length;let s=0,n;const{iScale:o}=i,{min:r,max:a,minDefined:l,maxDefined:c}=o.getUserBounds();return l&&(s=at(Qt(t,o.axis,r).lo,0,e-1)),c?n=at(Qt(t,o.axis,a).hi+1,s,e)-s:n=e-s,{start:s,count:n}}var ub={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(i,t,e)=>{if(!e.enabled){Na(i);return}const s=i.width;i.data.datasets.forEach((n,o)=>{const{_data:r,indexAxis:a}=n,l=i.getDatasetMeta(o),c=r||n.data;if(X([a,i.options.indexAxis])==="y"||!l.controller.supportsDecimation)return;const h=i.scales[l.xAxisID];if(h.type!=="linear"&&h.type!=="time"||i.options.parsing)return;let{start:d,count:u}=db(l,c);const f=e.threshold||4*s;if(u<=f){Wc(n);return}L(r)&&(n._data=c,delete n.data,Object.defineProperty(n,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(m){this._data=m}}));let p;switch(e.algorithm){case"lttb":p=cb(c,d,u,s,e);break;case"min-max":p=hb(c,d,u,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}n._decimated=p})},destroy(i){Na(i)}};function fb(i,t,e){const s=i.segments,n=i.points,o=t.points,r=[];for(const a of s){let{start:l,end:c}=a;c=xn(l,c,n);const h=lo(e,n[l],n[c],a.loop);if(!t.segments){r.push({source:a,target:h,start:n[l],end:n[c]});continue}const d=Cc(t,h);for(const u of d){const f=lo(e,o[u.start],o[u.end],u.loop),p=Sc(a,n,f);for(const m of p)r.push({source:m,target:u,start:{[e]:Ha(h,f,"start",Math.max)},end:{[e]:Ha(h,f,"end",Math.min)}})}}return r}function lo(i,t,e,s){if(s)return;let n=t[i],o=e[i];return i==="angle"&&(n=ut(n),o=ut(o)),{property:i,start:n,end:o}}function pb(i,t){const{x:e=null,y:s=null}=i||{},n=t.points,o=[];return t.segments.forEach(({start:r,end:a})=>{a=xn(r,a,n);const l=n[r],c=n[a];s!==null?(o.push({x:l.x,y:s}),o.push({x:c.x,y:s})):e!==null&&(o.push({x:e,y:l.y}),o.push({x:e,y:c.y}))}),o}function xn(i,t,e){for(;t>i;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function Ha(i,t,e,s){return i&&t?s(i[e],t[e]):i?i[e]:t?t[e]:0}function qc(i,t){let e=[],s=!1;return G(i)?(s=!0,e=i):e=pb(i,t),e.length?new fe({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function Wa(i){return i&&i.fill!==!1}function mb(i,t,e){let n=i[t].fill;const o=[t];let r;if(!e)return n;for(;n!==!1&&o.indexOf(n)===-1;){if(!tt(n))return n;if(r=i[n],!r)return!1;if(r.visible)return n;o.push(n),n=r.fill}return!1}function gb(i,t,e){const s=xb(i);if(F(s))return isNaN(s.value)?!1:s;let n=parseFloat(s);return tt(n)&&Math.floor(n)===n?bb(s[0],t,n,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function bb(i,t,e,s){return(i==="-"||i==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function yb(i,t){let e=null;return i==="start"?e=t.bottom:i==="end"?e=t.top:F(i)?e=t.getPixelForValue(i.value):t.getBasePixel&&(e=t.getBasePixel()),e}function vb(i,t,e){let s;return i==="start"?s=e:i==="end"?s=t.options.reverse?t.min:t.max:F(i)?s=i.value:s=t.getBaseValue(),s}function xb(i){const t=i.options,e=t.fill;let s=O(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function _b(i){const{scale:t,index:e,line:s}=i,n=[],o=s.segments,r=s.points,a=wb(t,e);a.push(qc({x:null,y:t.bottom},s));for(let l=0;l<o.length;l++){const c=o[l];for(let h=c.start;h<=c.end;h++)kb(n,r[h],a)}return new fe({points:n,options:{}})}function wb(i,t){const e=[],s=i.getMatchingVisibleMetas("line");for(let n=0;n<s.length;n++){const o=s[n];if(o.index===t)break;o.hidden||e.unshift(o.dataset)}return e}function kb(i,t,e){const s=[];for(let n=0;n<e.length;n++){const o=e[n],{first:r,last:a,point:l}=Sb(o,t,"x");if(!(!l||r&&a)){if(r)s.unshift(l);else if(i.push(l),!a)break}}i.push(...s)}function Sb(i,t,e){const s=i.interpolate(t,e);if(!s)return{};const n=s[e],o=i.segments,r=i.points;let a=!1,l=!1;for(let c=0;c<o.length;c++){const h=o[c],d=r[h.start][e],u=r[h.end][e];if(Kt(n,d,u)){a=n===d,l=n===u;break}}return{first:a,last:l,point:s}}class Yc{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:n,y:o,radius:r}=this;return e=e||{start:0,end:K},t.arc(n,o,r,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:n}=this,o=t.angle;return{x:e+Math.cos(o)*n,y:s+Math.sin(o)*n,angle:o}}}function Cb(i){const{chart:t,fill:e,line:s}=i;if(tt(e))return Mb(t,e);if(e==="stack")return _b(i);if(e==="shape")return!0;const n=Pb(i);return n instanceof Yc?n:qc(n,s)}function Mb(i,t){const e=i.getDatasetMeta(t);return e&&i.isDatasetVisible(t)?e.dataset:null}function Pb(i){return(i.scale||{}).getPointPositionForValue?Db(i):Ab(i)}function Ab(i){const{scale:t={},fill:e}=i,s=yb(e,t);if(tt(s)){const n=t.isHorizontal();return{x:n?s:null,y:n?null:s}}return null}function Db(i){const{scale:t,fill:e}=i,s=t.options,n=t.getLabels().length,o=s.reverse?t.max:t.min,r=vb(e,t,o),a=[];if(s.grid.circular){const l=t.getPointPositionForValue(0,o);return new Yc({x:l.x,y:l.y,radius:t.getDistanceFromCenterForValue(r)})}for(let l=0;l<n;++l)a.push(t.getPointPositionForValue(l,r));return a}function Fn(i,t,e){const s=Cb(t),{chart:n,index:o,line:r,scale:a,axis:l}=t,c=r.options,h=c.fill,d=c.backgroundColor,{above:u=d,below:f=d}=h||{},p=n.getDatasetMeta(o),m=Mc(n,p);s&&r.points.length&&(gn(i,e),Eb(i,{line:r,target:s,above:u,below:f,area:e,scale:a,axis:l,clip:m}),bn(i))}function Eb(i,t){const{line:e,target:s,above:n,below:o,area:r,scale:a,clip:l}=t,c=e._loop?"angle":t.axis;i.save();let h=o;o!==n&&(c==="x"?(qa(i,s,r.top),Bn(i,{line:e,target:s,color:n,scale:a,property:c,clip:l}),i.restore(),i.save(),qa(i,s,r.bottom)):c==="y"&&(Ya(i,s,r.left),Bn(i,{line:e,target:s,color:o,scale:a,property:c,clip:l}),i.restore(),i.save(),Ya(i,s,r.right),h=n)),Bn(i,{line:e,target:s,color:h,scale:a,property:c,clip:l}),i.restore()}function qa(i,t,e){const{segments:s,points:n}=t;let o=!0,r=!1;i.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[xn(l,c,n)];o?(i.moveTo(h.x,h.y),o=!1):(i.lineTo(h.x,e),i.lineTo(h.x,h.y)),r=!!t.pathSegment(i,a,{move:r}),r?i.closePath():i.lineTo(d.x,e)}i.lineTo(t.first().x,e),i.closePath(),i.clip()}function Ya(i,t,e){const{segments:s,points:n}=t;let o=!0,r=!1;i.beginPath();for(const a of s){const{start:l,end:c}=a,h=n[l],d=n[xn(l,c,n)];o?(i.moveTo(h.x,h.y),o=!1):(i.lineTo(e,h.y),i.lineTo(h.x,h.y)),r=!!t.pathSegment(i,a,{move:r}),r?i.closePath():i.lineTo(e,d.y)}i.lineTo(e,t.first().y),i.closePath(),i.clip()}function Bn(i,t){const{line:e,target:s,property:n,color:o,scale:r,clip:a}=t,l=fb(e,s,n);for(const{source:c,target:h,start:d,end:u}of l){const{style:{backgroundColor:f=o}={}}=c,p=s!==!0;i.save(),i.fillStyle=f,Tb(i,r,a,p&&lo(n,d,u)),i.beginPath();const m=!!e.pathSegment(i,c);let g;if(p){m?i.closePath():Ua(i,s,u,n);const b=!!s.pathSegment(i,h,{move:m,reverse:!0});g=m&&b,g||Ua(i,s,d,n)}i.closePath(),i.fill(g?"evenodd":"nonzero"),i.restore()}}function Tb(i,t,e,s){const n=t.chart.chartArea,{property:o,start:r,end:a}=s||{};if(o==="x"||o==="y"){let l,c,h,d;o==="x"?(l=r,c=n.top,h=a,d=n.bottom):(l=n.left,c=r,h=n.right,d=a),i.beginPath(),e&&(l=Math.max(l,e.left),h=Math.min(h,e.right),c=Math.max(c,e.top),d=Math.min(d,e.bottom)),i.rect(l,c,h-l,d-c),i.clip()}}function Ua(i,t,e,s){const n=t.interpolate(e,s);n&&i.lineTo(n.x,n.y)}var Ob={id:"filler",afterDatasetsUpdate(i,t,e){const s=(i.data.datasets||[]).length,n=[];let o,r,a,l;for(r=0;r<s;++r)o=i.getDatasetMeta(r),a=o.dataset,l=null,a&&a.options&&a instanceof fe&&(l={visible:i.isDatasetVisible(r),index:r,fill:gb(a,r,s),chart:i,axis:o.controller.options.indexAxis,scale:o.vScale,line:a}),o.$filler=l,n.push(l);for(r=0;r<s;++r)l=n[r],!(!l||l.fill===!1)&&(l.fill=mb(n,r,e.propagate))},beforeDraw(i,t,e){const s=e.drawTime==="beforeDraw",n=i.getSortedVisibleDatasetMetas(),o=i.chartArea;for(let r=n.length-1;r>=0;--r){const a=n[r].$filler;a&&(a.line.updateControlPoints(o,a.axis),s&&a.fill&&Fn(i.ctx,a,o))}},beforeDatasetsDraw(i,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=i.getSortedVisibleDatasetMetas();for(let n=s.length-1;n>=0;--n){const o=s[n].$filler;Wa(o)&&Fn(i.ctx,o,i.chartArea)}},beforeDatasetDraw(i,t,e){const s=t.meta.$filler;!Wa(s)||e.drawTime!=="beforeDatasetDraw"||Fn(i.ctx,s,i.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const Xa=(i,t)=>{let{boxHeight:e=t,boxWidth:s=t}=i;return i.usePointStyle&&(e=Math.min(e,t),s=i.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},Lb=(i,t)=>i!==null&&t!==null&&i.datasetIndex===t.datasetIndex&&i.index===t.index;class Ga extends ae{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=U(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,n)=>t.sort(s,n,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,n=nt(s.font),o=n.size,r=this._computeTitleHeight(),{boxWidth:a,itemHeight:l}=Xa(s,o);let c,h;e.font=n.string,this.isHorizontal()?(c=this.maxWidth,h=this._fitRows(r,o,a,l)+10):(h=this.maxHeight,c=this._fitCols(r,n,a,l)+10),this.width=Math.min(c,t.maxWidth||this.maxWidth),this.height=Math.min(h,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,n){const{ctx:o,maxWidth:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.lineWidths=[0],h=n+a;let d=t;o.textAlign="left",o.textBaseline="middle";let u=-1,f=-h;return this.legendItems.forEach((p,m)=>{const g=s+e/2+o.measureText(p.text).width;(m===0||c[c.length-1]+g+2*a>r)&&(d+=h,c[c.length-(m>0?0:1)]=0,f+=h,u++),l[m]={left:0,top:f,row:u,width:g,height:n},c[c.length-1]+=g+a}),d}_fitCols(t,e,s,n){const{ctx:o,maxHeight:r,options:{labels:{padding:a}}}=this,l=this.legendHitBoxes=[],c=this.columnSizes=[],h=r-t;let d=a,u=0,f=0,p=0,m=0;return this.legendItems.forEach((g,b)=>{const{itemWidth:y,itemHeight:w}=Rb(s,e,o,g,n);b>0&&f+w+2*a>h&&(d+=u+a,c.push({width:u,height:f}),p+=u+a,m++,u=f=0),l[b]={left:p,top:f,col:m,width:y,height:w},u=Math.max(u,y),f+=w+a}),d+=u,c.push({width:u,height:f}),d}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:n},rtl:o}}=this,r=ti(o,this.left,this.width);if(this.isHorizontal()){let a=0,l=dt(s,this.left+n,this.right-this.lineWidths[a]);for(const c of e)a!==c.row&&(a=c.row,l=dt(s,this.left+n,this.right-this.lineWidths[a])),c.top+=this.top+t+n,c.left=r.leftForLtr(r.x(l),c.width),l+=c.width+n}else{let a=0,l=dt(s,this.top+t+n,this.bottom-this.columnSizes[a].height);for(const c of e)c.col!==a&&(a=c.col,l=dt(s,this.top+t+n,this.bottom-this.columnSizes[a].height)),c.top=l,c.left+=this.left+n,c.left=r.leftForLtr(r.x(c.left),c.width),l+=c.height+n}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;gn(t,this),this._draw(),bn(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:n}=this,{align:o,labels:r}=t,a=Q.color,l=ti(t.rtl,this.left,this.width),c=nt(r.font),{padding:h}=r,d=c.size,u=d/2;let f;this.drawTitle(),n.textAlign=l.textAlign("left"),n.textBaseline="middle",n.lineWidth=.5,n.font=c.string;const{boxWidth:p,boxHeight:m,itemHeight:g}=Xa(r,d),b=function(k,C,M){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;n.save();const A=O(M.lineWidth,1);if(n.fillStyle=O(M.fillStyle,a),n.lineCap=O(M.lineCap,"butt"),n.lineDashOffset=O(M.lineDashOffset,0),n.lineJoin=O(M.lineJoin,"miter"),n.lineWidth=A,n.strokeStyle=O(M.strokeStyle,a),n.setLineDash(O(M.lineDash,[])),r.usePointStyle){const D={radius:m*Math.SQRT2/2,pointStyle:M.pointStyle,rotation:M.rotation,borderWidth:A},E=l.xPlus(k,p/2),T=C+u;fc(n,D,E,T,r.pointStyleWidth&&p)}else{const D=C+Math.max((d-m)/2,0),E=l.leftForLtr(k,p),T=Fe(M.borderRadius);n.beginPath(),Object.values(T).some(I=>I!==0)?qi(n,{x:E,y:D,w:p,h:m,radius:T}):n.rect(E,D,p,m),n.fill(),A!==0&&n.stroke()}n.restore()},y=function(k,C,M){qe(n,M.text,k,C+g/2,c,{strikethrough:M.hidden,textAlign:l.textAlign(M.textAlign)})},w=this.isHorizontal(),_=this._computeTitleHeight();w?f={x:dt(o,this.left+h,this.right-s[0]),y:this.top+h+_,line:0}:f={x:this.left+h,y:dt(o,this.top+_+h,this.bottom-e[0].height),line:0},_c(this.ctx,t.textDirection);const x=g+h;this.legendItems.forEach((k,C)=>{n.strokeStyle=k.fontColor,n.fillStyle=k.fontColor;const M=n.measureText(k.text).width,A=l.textAlign(k.textAlign||(k.textAlign=r.textAlign)),D=p+u+M;let E=f.x,T=f.y;l.setWidth(this.width),w?C>0&&E+D+h>this.right&&(T=f.y+=x,f.line++,E=f.x=dt(o,this.left+h,this.right-s[f.line])):C>0&&T+x>this.bottom&&(E=f.x=E+e[f.line].width+h,f.line++,T=f.y=dt(o,this.top+_+h,this.bottom-e[f.line].height));const I=l.x(E);if(b(I,T,k),E=Jf(A,E+p+u,w?E+D:this.right,t.rtl),y(l.x(E),T,k),w)f.x+=D+h;else if(typeof k.text!="string"){const B=c.lineHeight;f.y+=Uc(k,B)+h}else f.y+=x}),wc(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=nt(e.font),n=ct(e.padding);if(!e.display)return;const o=ti(t.rtl,this.left,this.width),r=this.ctx,a=e.position,l=s.size/2,c=n.top+l;let h,d=this.left,u=this.width;if(this.isHorizontal())u=Math.max(...this.lineWidths),h=this.top+c,d=dt(t.align,d,this.right-u);else{const p=this.columnSizes.reduce((m,g)=>Math.max(m,g.height),0);h=c+dt(t.align,this.top,this.bottom-p-t.labels.padding-this._computeTitleHeight())}const f=dt(a,d,d+u);r.textAlign=o.textAlign(zo(a)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=s.string,qe(r,e.text,f,h,s)}_computeTitleHeight(){const t=this.options.title,e=nt(t.font),s=ct(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,n,o;if(Kt(t,this.left,this.right)&&Kt(e,this.top,this.bottom)){for(o=this.legendHitBoxes,s=0;s<o.length;++s)if(n=o[s],Kt(t,n.left,n.left+n.width)&&Kt(e,n.top,n.top+n.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!Ib(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const n=this._hoveredItem,o=Lb(n,s);n&&!o&&U(e.onLeave,[t,n,this],this),this._hoveredItem=s,s&&!o&&U(e.onHover,[t,s,this],this)}else s&&U(e.onClick,[t,s,this],this)}}function Rb(i,t,e,s,n){const o=zb(s,i,t,e),r=$b(n,s,t.lineHeight);return{itemWidth:o,itemHeight:r}}function zb(i,t,e,s){let n=i.text;return n&&typeof n!="string"&&(n=n.reduce((o,r)=>o.length>r.length?o:r)),t+e.size/2+s.measureText(n).width}function $b(i,t,e){let s=i;return typeof t.text!="string"&&(s=Uc(t,e)),s}function Uc(i,t){const e=i.text?i.text.length:0;return t*e}function Ib(i,t){return!!((i==="mousemove"||i==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(i==="click"||i==="mouseup"))}var Fb={id:"legend",_element:Ga,start(i,t,e){const s=i.legend=new Ga({ctx:i.ctx,options:e,chart:i});ft.configure(i,s,e),ft.addBox(i,s)},stop(i){ft.removeBox(i,i.legend),delete i.legend},beforeUpdate(i,t,e){const s=i.legend;ft.configure(i,s,e),s.options=e},afterUpdate(i){const t=i.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(i,t){t.replay||i.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(i,t,e){const s=t.datasetIndex,n=e.chart;n.isDatasetVisible(s)?(n.hide(s),t.hidden=!0):(n.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:i=>i.chart.options.color,boxWidth:40,padding:10,generateLabels(i){const t=i.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:n,color:o,useBorderRadius:r,borderRadius:a}}=i.legend.options;return i._getSortedDatasetMetas().map(l=>{const c=l.controller.getStyle(e?0:void 0),h=ct(c.borderWidth);return{text:t[l.index].label,fillStyle:c.backgroundColor,fontColor:o,hidden:!l.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(h.width+h.height)/4,strokeStyle:c.borderColor,pointStyle:s||c.pointStyle,rotation:c.rotation,textAlign:n||c.textAlign,borderRadius:r&&(a||c.borderRadius),datasetIndex:l.index}},this)}},title:{color:i=>i.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:i=>!i.startsWith("on"),labels:{_scriptable:i=>!["generateLabels","filter","sort"].includes(i)}}};class Wo extends ae{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const n=G(s.text)?s.text.length:1;this._padding=ct(s.padding);const o=n*nt(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:n,right:o,options:r}=this,a=r.align;let l=0,c,h,d;return this.isHorizontal()?(h=dt(a,s,o),d=e+t,c=o-s):(r.position==="left"?(h=s+t,d=dt(a,n,e),l=N*-.5):(h=o-t,d=dt(a,e,n),l=N*.5),c=n-e),{titleX:h,titleY:d,maxWidth:c,rotation:l}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=nt(e.font),o=s.lineHeight/2+this._padding.top,{titleX:r,titleY:a,maxWidth:l,rotation:c}=this._drawArgs(o);qe(t,e.text,0,0,s,{color:e.color,maxWidth:l,rotation:c,textAlign:zo(e.align),textBaseline:"middle",translation:[r,a]})}}function Bb(i,t){const e=new Wo({ctx:i.ctx,options:t,chart:i});ft.configure(i,e,t),ft.addBox(i,e),i.titleBlock=e}var Vb={id:"title",_element:Wo,start(i,t,e){Bb(i,e)},stop(i){const t=i.titleBlock;ft.removeBox(i,t),delete i.titleBlock},beforeUpdate(i,t,e){const s=i.titleBlock;ft.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const ys=new WeakMap;var jb={id:"subtitle",start(i,t,e){const s=new Wo({ctx:i.ctx,options:e,chart:i});ft.configure(i,s,e),ft.addBox(i,s),ys.set(i,s)},stop(i){ft.removeBox(i,ys.get(i)),ys.delete(i)},beforeUpdate(i,t,e){const s=ys.get(i);ft.configure(i,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Ai={average(i){if(!i.length)return!1;let t,e,s=new Set,n=0,o=0;for(t=0,e=i.length;t<e;++t){const a=i[t].element;if(a&&a.hasValue()){const l=a.tooltipPosition();s.add(l.x),n+=l.y,++o}}return o===0||s.size===0?!1:{x:[...s].reduce((a,l)=>a+l)/s.size,y:n/o}},nearest(i,t){if(!i.length)return!1;let e=t.x,s=t.y,n=Number.POSITIVE_INFINITY,o,r,a;for(o=0,r=i.length;o<r;++o){const l=i[o].element;if(l&&l.hasValue()){const c=l.getCenterPoint(),h=to(t,c);h<n&&(n=h,a=l)}}if(a){const l=a.tooltipPosition();e=l.x,s=l.y}return{x:e,y:s}}};function It(i,t){return t&&(G(t)?Array.prototype.push.apply(i,t):i.push(t)),i}function Ut(i){return(typeof i=="string"||i instanceof String)&&i.indexOf(`
`)>-1?i.split(`
`):i}function Nb(i,t){const{element:e,datasetIndex:s,index:n}=t,o=i.getDatasetMeta(s).controller,{label:r,value:a}=o.getLabelAndValue(n);return{chart:i,label:r,parsed:o.getParsed(n),raw:i.data.datasets[s].data[n],formattedValue:a,dataset:o.getDataset(),dataIndex:n,datasetIndex:s,element:e}}function Ka(i,t){const e=i.chart.ctx,{body:s,footer:n,title:o}=i,{boxWidth:r,boxHeight:a}=t,l=nt(t.bodyFont),c=nt(t.titleFont),h=nt(t.footerFont),d=o.length,u=n.length,f=s.length,p=ct(t.padding);let m=p.height,g=0,b=s.reduce((_,x)=>_+x.before.length+x.lines.length+x.after.length,0);if(b+=i.beforeBody.length+i.afterBody.length,d&&(m+=d*c.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),b){const _=t.displayColors?Math.max(a,l.lineHeight):l.lineHeight;m+=f*_+(b-f)*l.lineHeight+(b-1)*t.bodySpacing}u&&(m+=t.footerMarginTop+u*h.lineHeight+(u-1)*t.footerSpacing);let y=0;const w=function(_){g=Math.max(g,e.measureText(_).width+y)};return e.save(),e.font=c.string,W(i.title,w),e.font=l.string,W(i.beforeBody.concat(i.afterBody),w),y=t.displayColors?r+2+t.boxPadding:0,W(s,_=>{W(_.before,w),W(_.lines,w),W(_.after,w)}),y=0,e.font=h.string,W(i.footer,w),e.restore(),g+=p.width,{width:g,height:m}}function Hb(i,t){const{y:e,height:s}=t;return e<s/2?"top":e>i.height-s/2?"bottom":"center"}function Wb(i,t,e,s){const{x:n,width:o}=s,r=e.caretSize+e.caretPadding;if(i==="left"&&n+o+r>t.width||i==="right"&&n-o-r<0)return!0}function qb(i,t,e,s){const{x:n,width:o}=e,{width:r,chartArea:{left:a,right:l}}=i;let c="center";return s==="center"?c=n<=(a+l)/2?"left":"right":n<=o/2?c="left":n>=r-o/2&&(c="right"),Wb(c,i,t,e)&&(c="center"),c}function Qa(i,t,e){const s=e.yAlign||t.yAlign||Hb(i,e);return{xAlign:e.xAlign||t.xAlign||qb(i,t,e,s),yAlign:s}}function Yb(i,t){let{x:e,width:s}=i;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function Ub(i,t,e){let{y:s,height:n}=i;return t==="top"?s+=e:t==="bottom"?s-=n+e:s-=n/2,s}function Za(i,t,e,s){const{caretSize:n,caretPadding:o,cornerRadius:r}=i,{xAlign:a,yAlign:l}=e,c=n+o,{topLeft:h,topRight:d,bottomLeft:u,bottomRight:f}=Fe(r);let p=Yb(t,a);const m=Ub(t,l,c);return l==="center"?a==="left"?p+=c:a==="right"&&(p-=c):a==="left"?p-=Math.max(h,u)+n:a==="right"&&(p+=Math.max(d,f)+n),{x:at(p,0,s.width-t.width),y:at(m,0,s.height-t.height)}}function vs(i,t,e){const s=ct(e.padding);return t==="center"?i.x+i.width/2:t==="right"?i.x+i.width-s.right:i.x+s.left}function Ja(i){return It([],Ut(i))}function Xb(i,t,e){return Me(i,{tooltip:t,tooltipItems:e,type:"tooltip"})}function tl(i,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?i.override(e):i}const Xc={beforeTitle:qt,title(i){if(i.length>0){const t=i[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:qt,beforeBody:qt,beforeLabel:qt,label(i){if(this&&this.options&&this.options.mode==="dataset")return i.label+": "+i.formattedValue||i.formattedValue;let t=i.dataset.label||"";t&&(t+=": ");const e=i.formattedValue;return L(e)||(t+=e),t},labelColor(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(i){const e=i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:qt,afterBody:qt,beforeFooter:qt,footer:qt,afterFooter:qt};function yt(i,t,e,s){const n=i[t].call(e,s);return typeof n>"u"?Xc[t].call(e,s):n}var jn;let el=(jn=class extends ae{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),n=s.enabled&&e.options.animation&&s.animations,o=new Pc(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=Xb(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,n=yt(s,"beforeTitle",this,t),o=yt(s,"title",this,t),r=yt(s,"afterTitle",this,t);let a=[];return a=It(a,Ut(n)),a=It(a,Ut(o)),a=It(a,Ut(r)),a}getBeforeBody(t,e){return Ja(yt(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,n=[];return W(t,o=>{const r={before:[],lines:[],after:[]},a=tl(s,o);It(r.before,Ut(yt(a,"beforeLabel",this,o))),It(r.lines,yt(a,"label",this,o)),It(r.after,Ut(yt(a,"afterLabel",this,o))),n.push(r)}),n}getAfterBody(t,e){return Ja(yt(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,n=yt(s,"beforeFooter",this,t),o=yt(s,"footer",this,t),r=yt(s,"afterFooter",this,t);let a=[];return a=It(a,Ut(n)),a=It(a,Ut(o)),a=It(a,Ut(r)),a}_createItems(t){const e=this._active,s=this.chart.data,n=[],o=[],r=[];let a=[],l,c;for(l=0,c=e.length;l<c;++l)a.push(Nb(this.chart,e[l]));return t.filter&&(a=a.filter((h,d,u)=>t.filter(h,d,u,s))),t.itemSort&&(a=a.sort((h,d)=>t.itemSort(h,d,s))),W(a,h=>{const d=tl(t.callbacks,h);n.push(yt(d,"labelColor",this,h)),o.push(yt(d,"labelPointStyle",this,h)),r.push(yt(d,"labelTextColor",this,h))}),this.labelColors=n,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=a,a}update(t,e){const s=this.options.setContext(this.getContext()),n=this._active;let o,r=[];if(!n.length)this.opacity!==0&&(o={opacity:0});else{const a=Ai[s.position].call(this,n,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const l=this._size=Ka(this,s),c=Object.assign({},a,l),h=Qa(this.chart,s,c),d=Za(s,c,h,this.chart);this.xAlign=h.xAlign,this.yAlign=h.yAlign,o={opacity:1,x:d.x,y:d.y,width:l.width,height:l.height,caretX:a.x,caretY:a.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,n){const o=this.getCaretPosition(t,s,n);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,s){const{xAlign:n,yAlign:o}=this,{caretSize:r,cornerRadius:a}=s,{topLeft:l,topRight:c,bottomLeft:h,bottomRight:d}=Fe(a),{x:u,y:f}=t,{width:p,height:m}=e;let g,b,y,w,_,x;return o==="center"?(_=f+m/2,n==="left"?(g=u,b=g-r,w=_+r,x=_-r):(g=u+p,b=g+r,w=_-r,x=_+r),y=g):(n==="left"?b=u+Math.max(l,h)+r:n==="right"?b=u+p-Math.max(c,d)-r:b=this.caretX,o==="top"?(w=f,_=w-r,g=b-r,y=b+r):(w=f+m,_=w+r,g=b+r,y=b-r),x=w),{x1:g,x2:b,x3:y,y1:w,y2:_,y3:x}}drawTitle(t,e,s){const n=this.title,o=n.length;let r,a,l;if(o){const c=ti(s.rtl,this.x,this.width);for(t.x=vs(this,s.titleAlign,s),e.textAlign=c.textAlign(s.titleAlign),e.textBaseline="middle",r=nt(s.titleFont),a=s.titleSpacing,e.fillStyle=s.titleColor,e.font=r.string,l=0;l<o;++l)e.fillText(n[l],c.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+a,l+1===o&&(t.y+=s.titleMarginBottom-a)}}_drawColorBox(t,e,s,n,o){const r=this.labelColors[s],a=this.labelPointStyles[s],{boxHeight:l,boxWidth:c}=o,h=nt(o.bodyFont),d=vs(this,"left",o),u=n.x(d),f=l<h.lineHeight?(h.lineHeight-l)/2:0,p=e.y+f;if(o.usePointStyle){const m={radius:Math.min(c,l)/2,pointStyle:a.pointStyle,rotation:a.rotation,borderWidth:1},g=n.leftForLtr(u,c)+c/2,b=p+l/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,io(t,m,g,b),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,io(t,m,g,b)}else{t.lineWidth=F(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const m=n.leftForLtr(u,c),g=n.leftForLtr(n.xPlus(u,1),c-2),b=Fe(r.borderRadius);Object.values(b).some(y=>y!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,qi(t,{x:m,y:p,w:c,h:l,radius:b}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),qi(t,{x:g,y:p+1,w:c-2,h:l-2,radius:b}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(m,p,c,l),t.strokeRect(m,p,c,l),t.fillStyle=r.backgroundColor,t.fillRect(g,p+1,c-2,l-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:n}=this,{bodySpacing:o,bodyAlign:r,displayColors:a,boxHeight:l,boxWidth:c,boxPadding:h}=s,d=nt(s.bodyFont);let u=d.lineHeight,f=0;const p=ti(s.rtl,this.x,this.width),m=function(M){e.fillText(M,p.x(t.x+f),t.y+u/2),t.y+=u+o},g=p.textAlign(r);let b,y,w,_,x,k,C;for(e.textAlign=r,e.textBaseline="middle",e.font=d.string,t.x=vs(this,g,s),e.fillStyle=s.bodyColor,W(this.beforeBody,m),f=a&&g!=="right"?r==="center"?c/2+h:c+2+h:0,_=0,k=n.length;_<k;++_){for(b=n[_],y=this.labelTextColors[_],e.fillStyle=y,W(b.before,m),w=b.lines,a&&w.length&&(this._drawColorBox(e,t,_,p,s),u=Math.max(d.lineHeight,l)),x=0,C=w.length;x<C;++x)m(w[x]),u=d.lineHeight;W(b.after,m)}f=0,u=d.lineHeight,W(this.afterBody,m),t.y-=o}drawFooter(t,e,s){const n=this.footer,o=n.length;let r,a;if(o){const l=ti(s.rtl,this.x,this.width);for(t.x=vs(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=l.textAlign(s.footerAlign),e.textBaseline="middle",r=nt(s.footerFont),e.fillStyle=s.footerColor,e.font=r.string,a=0;a<o;++a)e.fillText(n[a],l.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,e,s,n){const{xAlign:o,yAlign:r}=this,{x:a,y:l}=t,{width:c,height:h}=s,{topLeft:d,topRight:u,bottomLeft:f,bottomRight:p}=Fe(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(a+d,l),r==="top"&&this.drawCaret(t,e,s,n),e.lineTo(a+c-u,l),e.quadraticCurveTo(a+c,l,a+c,l+u),r==="center"&&o==="right"&&this.drawCaret(t,e,s,n),e.lineTo(a+c,l+h-p),e.quadraticCurveTo(a+c,l+h,a+c-p,l+h),r==="bottom"&&this.drawCaret(t,e,s,n),e.lineTo(a+f,l+h),e.quadraticCurveTo(a,l+h,a,l+h-f),r==="center"&&o==="left"&&this.drawCaret(t,e,s,n),e.lineTo(a,l+d),e.quadraticCurveTo(a,l,a+d,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,n=s&&s.x,o=s&&s.y;if(n||o){const r=Ai[t.position].call(this,this._active,this._eventPosition);if(!r)return;const a=this._size=Ka(this,t),l=Object.assign({},r,this._size),c=Qa(e,t,l),h=Za(t,l,c,e);(n._to!==h.x||o._to!==h.y)&&(this.xAlign=c.xAlign,this.yAlign=c.yAlign,this.width=a.width,this.height=a.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,h))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const n={width:this.width,height:this.height},o={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=ct(e.padding),a=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&a&&(t.save(),t.globalAlpha=s,this.drawBackground(o,t,n,e),_c(t,e.textDirection),o.y+=r.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),wc(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,n=t.map(({datasetIndex:a,index:l})=>{const c=this.chart.getDatasetMeta(a);if(!c)throw new Error("Cannot find a dataset at index "+a);return{datasetIndex:a,element:c.data[l],index:l}}),o=!Us(s,n),r=this._positionChanged(n,e);(o||r)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const n=this.options,o=this._active||[],r=this._getActiveElements(t,o,e,s),a=this._positionChanged(r,t),l=e||!Us(r,o)||a;return l&&(this._active=r,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,s,n){const o=this.options;if(t.type==="mouseout")return[];if(!n)return e.filter(a=>this.chart.data.datasets[a.datasetIndex]&&this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,o.mode,o,s);return o.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:s,caretY:n,options:o}=this,r=Ai[o.position].call(this,t,e);return r!==!1&&(s!==r.x||n!==r.y)}},P(jn,"positioners",Ai),jn);var Gb={id:"tooltip",_element:el,positioners:Ai,afterInit(i,t,e){e&&(i.tooltip=new el({chart:i,options:e}))},beforeUpdate(i,t,e){i.tooltip&&i.tooltip.initialize(e)},reset(i,t,e){i.tooltip&&i.tooltip.initialize(e)},afterDraw(i){const t=i.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(i.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(i.ctx),i.notifyPlugins("afterTooltipDraw",e)}},afterEvent(i,t){if(i.tooltip){const e=t.replay;i.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(i,t)=>t.bodyFont.size,boxWidth:(i,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:Xc},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:i=>i!=="filter"&&i!=="itemSort"&&i!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},Kb=Object.freeze({__proto__:null,Colors:lb,Decimation:ub,Filler:Ob,Legend:Fb,SubTitle:jb,Title:Vb,Tooltip:Gb});const Qb=(i,t,e,s)=>(typeof t=="string"?(e=i.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function Zb(i,t,e,s){const n=i.indexOf(t);if(n===-1)return Qb(i,t,e,s);const o=i.lastIndexOf(t);return n!==o?e:n}const Jb=(i,t)=>i===null?null:at(Math.round(i),0,t);function il(i){const t=this.getLabels();return i>=0&&i<t.length?t[i]:i}class co extends Xe{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:n,label:o}of e)s[n]===o&&s.splice(n,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(L(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:Zb(s,t,O(e,t),this._addedLabels),Jb(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:n}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(n=this.getLabels().length-1)),this.min=s,this.max=n}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,n=[];let o=this.getLabels();o=t===0&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=e;r++)n.push({value:r});return n}getLabelForValue(t){return il.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}P(co,"id","category"),P(co,"defaults",{ticks:{callback:il}});function ty(i,t){const e=[],{bounds:n,step:o,min:r,max:a,precision:l,count:c,maxTicks:h,maxDigits:d,includeBounds:u}=i,f=o||1,p=h-1,{min:m,max:g}=t,b=!L(r),y=!L(a),w=!L(c),_=(g-m)/(d+1);let x=Kr((g-m)/p/f)*f,k,C,M,A;if(x<1e-14&&!b&&!y)return[{value:m},{value:g}];A=Math.ceil(g/x)-Math.floor(m/x),A>p&&(x=Kr(A*x/p/f)*f),L(l)||(k=Math.pow(10,l),x=Math.ceil(x*k)/k),n==="ticks"?(C=Math.floor(m/x)*x,M=Math.ceil(g/x)*x):(C=m,M=g),b&&y&&o&&Yf((a-r)/o,x/1e3)?(A=Math.round(Math.min((a-r)/x,h)),x=(a-r)/A,C=r,M=a):w?(C=b?r:C,M=y?a:M,A=c-1,x=(M-C)/A):(A=(M-C)/x,Oi(A,Math.round(A),x/1e3)?A=Math.round(A):A=Math.ceil(A));const D=Math.max(Qr(x),Qr(C));k=Math.pow(10,L(l)?D:l),C=Math.round(C*k)/k,M=Math.round(M*k)/k;let E=0;for(b&&(u&&C!==r?(e.push({value:r}),C<r&&E++,Oi(Math.round((C+E*x)*k)/k,r,sl(r,_,i))&&E++):C<r&&E++);E<A;++E){const T=Math.round((C+E*x)*k)/k;if(y&&T>a)break;e.push({value:T})}return y&&u&&M!==a?e.length&&Oi(e[e.length-1].value,a,sl(a,_,i))?e[e.length-1].value=a:e.push({value:a}):(!y||M===a)&&e.push({value:M}),e}function sl(i,t,{horizontal:e,minRotation:s}){const n=Ot(s),o=(e?Math.sin(n):Math.cos(n))||.001,r=.75*t*(""+i).length;return Math.min(t/o,r)}class tn extends Xe{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return L(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:n,max:o}=this;const r=l=>n=e?n:l,a=l=>o=s?o:l;if(t){const l=Bt(n),c=Bt(o);l<0&&c<0?a(0):l>0&&c>0&&r(0)}if(n===o){let l=o===0?1:Math.abs(o*.05);a(o+l),t||r(n-l)}this.min=n,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,n;return s?(n=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e=e||11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const n={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},o=this._range||this,r=ty(n,o);return t.bounds==="ticks"&&nc(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const n=(s-e)/Math.max(t.length-1,1)/2;e-=n,s+=n}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return rs(t,this.chart.options.locale,this.options.ticks.format)}}class ho extends tn{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=tt(t)?t:0,this.max=tt(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=Ot(this.options.ticks.minRotation),n=(t?Math.sin(s):Math.cos(s))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/n))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}P(ho,"id","linear"),P(ho,"defaults",{ticks:{callback:mn.formatters.numeric}});const Xi=i=>Math.floor(de(i)),Le=(i,t)=>Math.pow(10,Xi(i)+t);function nl(i){return i/Math.pow(10,Xi(i))===1}function ol(i,t,e){const s=Math.pow(10,e),n=Math.floor(i/s);return Math.ceil(t/s)-n}function ey(i,t){const e=t-i;let s=Xi(e);for(;ol(i,t,s)>10;)s++;for(;ol(i,t,s)<10;)s--;return Math.min(s,Xi(i))}function iy(i,{min:t,max:e}){t=St(i.min,t);const s=[],n=Xi(t);let o=ey(t,e),r=o<0?Math.pow(10,Math.abs(o)):1;const a=Math.pow(10,o),l=n>o?Math.pow(10,n):0,c=Math.round((t-l)*r)/r,h=Math.floor((t-l)/a/10)*a*10;let d=Math.floor((c-h)/Math.pow(10,o)),u=St(i.min,Math.round((l+h+d*Math.pow(10,o))*r)/r);for(;u<e;)s.push({value:u,major:nl(u),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(o++,d=2,r=o>=0?1:r),u=Math.round((l+h+d*Math.pow(10,o))*r)/r;const f=St(i.max,u);return s.push({value:f,major:nl(f),significand:d}),s}class uo extends Xe{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=tn.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return tt(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=tt(t)?Math.max(0,t):null,this.max=tt(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!tt(this._userMin)&&(this.min=t===Le(this.min,0)?Le(this.min,-1):Le(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,n=this.max;const o=a=>s=t?s:a,r=a=>n=e?n:a;s===n&&(s<=0?(o(1),r(10)):(o(Le(s,-1)),r(Le(n,1)))),s<=0&&o(Le(n,-1)),n<=0&&r(Le(s,1)),this.min=s,this.max=n}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=iy(e,this);return t.bounds==="ticks"&&nc(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":rs(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=de(t),this._valueRange=de(this.max)-de(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(de(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}P(uo,"id","logarithmic"),P(uo,"defaults",{ticks:{callback:mn.formatters.logarithmic,major:{enabled:!0}}});function fo(i){const t=i.ticks;if(t.display&&i.display){const e=ct(t.backdropPadding);return O(t.font&&t.font.size,Q.font.size)+e.height}return 0}function sy(i,t,e){return e=G(e)?e:[e],{w:cp(i,t.string,e),h:e.length*t.lineHeight}}function rl(i,t,e,s,n){return i===s||i===n?{start:t-e/2,end:t+e/2}:i<s||i>n?{start:t-e,end:t}:{start:t,end:t+e}}function ny(i){const t={l:i.left+i._padding.left,r:i.right-i._padding.right,t:i.top+i._padding.top,b:i.bottom-i._padding.bottom},e=Object.assign({},t),s=[],n=[],o=i._pointLabels.length,r=i.options.pointLabels,a=r.centerPointLabels?N/o:0;for(let l=0;l<o;l++){const c=r.setContext(i.getPointLabelContext(l));n[l]=c.padding;const h=i.getPointPosition(l,i.drawingArea+n[l],a),d=nt(c.font),u=sy(i.ctx,d,i._pointLabels[l]);s[l]=u;const f=ut(i.getIndexAngle(l)+a),p=Math.round(Lo(f)),m=rl(p,h.x,u.w,0,180),g=rl(p,h.y,u.h,90,270);oy(e,t,f,m,g)}i.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),i._pointLabelItems=ly(i,s,n)}function oy(i,t,e,s,n){const o=Math.abs(Math.sin(e)),r=Math.abs(Math.cos(e));let a=0,l=0;s.start<t.l?(a=(t.l-s.start)/o,i.l=Math.min(i.l,t.l-a)):s.end>t.r&&(a=(s.end-t.r)/o,i.r=Math.max(i.r,t.r+a)),n.start<t.t?(l=(t.t-n.start)/r,i.t=Math.min(i.t,t.t-l)):n.end>t.b&&(l=(n.end-t.b)/r,i.b=Math.max(i.b,t.b+l))}function ry(i,t,e){const s=i.drawingArea,{extra:n,additionalAngle:o,padding:r,size:a}=e,l=i.getPointPosition(t,s+n+r,o),c=Math.round(Lo(ut(l.angle+et))),h=dy(l.y,a.h,c),d=cy(c),u=hy(l.x,a.w,d);return{visible:!0,x:l.x,y:h,textAlign:d,left:u,top:h,right:u+a.w,bottom:h+a.h}}function ay(i,t){if(!t)return!0;const{left:e,top:s,right:n,bottom:o}=i;return!(Zt({x:e,y:s},t)||Zt({x:e,y:o},t)||Zt({x:n,y:s},t)||Zt({x:n,y:o},t))}function ly(i,t,e){const s=[],n=i._pointLabels.length,o=i.options,{centerPointLabels:r,display:a}=o.pointLabels,l={extra:fo(o)/2,additionalAngle:r?N/n:0};let c;for(let h=0;h<n;h++){l.padding=e[h],l.size=t[h];const d=ry(i,h,l);s.push(d),a==="auto"&&(d.visible=ay(d,c),d.visible&&(c=d))}return s}function cy(i){return i===0||i===180?"center":i<180?"left":"right"}function hy(i,t,e){return e==="right"?i-=t:e==="center"&&(i-=t/2),i}function dy(i,t,e){return e===90||e===270?i-=t/2:(e>270||e<90)&&(i-=t),i}function uy(i,t,e){const{left:s,top:n,right:o,bottom:r}=e,{backdropColor:a}=t;if(!L(a)){const l=Fe(t.borderRadius),c=ct(t.backdropPadding);i.fillStyle=a;const h=s-c.left,d=n-c.top,u=o-s+c.width,f=r-n+c.height;Object.values(l).some(p=>p!==0)?(i.beginPath(),qi(i,{x:h,y:d,w:u,h:f,radius:l}),i.fill()):i.fillRect(h,d,u,f)}}function fy(i,t){const{ctx:e,options:{pointLabels:s}}=i;for(let n=t-1;n>=0;n--){const o=i._pointLabelItems[n];if(!o.visible)continue;const r=s.setContext(i.getPointLabelContext(n));uy(e,r,o);const a=nt(r.font),{x:l,y:c,textAlign:h}=o;qe(e,i._pointLabels[n],l,c+a.lineHeight/2,a,{color:r.color,textAlign:h,textBaseline:"middle"})}}function Gc(i,t,e,s){const{ctx:n}=i;if(e)n.arc(i.xCenter,i.yCenter,t,0,K);else{let o=i.getPointPosition(0,t);n.moveTo(o.x,o.y);for(let r=1;r<s;r++)o=i.getPointPosition(r,t),n.lineTo(o.x,o.y)}}function py(i,t,e,s,n){const o=i.ctx,r=t.circular,{color:a,lineWidth:l}=t;!r&&!s||!a||!l||e<0||(o.save(),o.strokeStyle=a,o.lineWidth=l,o.setLineDash(n.dash||[]),o.lineDashOffset=n.dashOffset,o.beginPath(),Gc(i,e,r,s),o.closePath(),o.stroke(),o.restore())}function my(i,t,e){return Me(i,{label:e,index:t,type:"pointLabel"})}class Di extends tn{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=ct(fo(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=tt(t)&&!isNaN(t)?t:0,this.max=tt(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/fo(this.options))}generateTickLabels(t){tn.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const n=U(this.options.pointLabels.callback,[e,s],this);return n||n===0?n:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?ny(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,n))}getIndexAngle(t){const e=K/(this._pointLabels.length||1),s=this.options.startAngle||0;return ut(t*e+Ot(s))}getDistanceFromCenterForValue(t){if(L(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(L(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return my(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const n=this.getIndexAngle(t)-et+s;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:n,bottom:o}=this._pointLabelItems[t];return{left:e,top:s,right:n,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),Gc(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:n,border:o}=e,r=this._pointLabels.length;let a,l,c;if(e.pointLabels.display&&fy(this,r),n.display&&this.ticks.forEach((h,d)=>{if(d!==0||d===0&&this.min<0){l=this.getDistanceFromCenterForValue(h.value);const u=this.getContext(d),f=n.setContext(u),p=o.setContext(u);py(this,f,l,r,p)}}),s.display){for(t.save(),a=r-1;a>=0;a--){const h=s.setContext(this.getPointLabelContext(a)),{color:d,lineWidth:u}=h;!u||!d||(t.lineWidth=u,t.strokeStyle=d,t.setLineDash(h.borderDash),t.lineDashOffset=h.borderDashOffset,l=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),c=this.getPointPosition(a,l),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(c.x,c.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const n=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(n),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((a,l)=>{if(l===0&&this.min>=0&&!e.reverse)return;const c=s.setContext(this.getContext(l)),h=nt(c.font);if(o=this.getDistanceFromCenterForValue(this.ticks[l].value),c.showLabelBackdrop){t.font=h.string,r=t.measureText(a.label).width,t.fillStyle=c.backdropColor;const d=ct(c.backdropPadding);t.fillRect(-r/2-d.left,-o-h.size/2-d.top,r+d.width,h.size+d.height)}qe(t,a.label,0,-o,h,{color:c.color,strokeColor:c.textStrokeColor,strokeWidth:c.textStrokeWidth})}),t.restore()}drawTitle(){}}P(Di,"id","radialLinear"),P(Di,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:mn.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),P(Di,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),P(Di,"descriptors",{angleLines:{_fallback:"grid"}});const _n={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},xt=Object.keys(_n);function al(i,t){return i-t}function ll(i,t){if(L(t))return null;const e=i._adapter,{parser:s,round:n,isoWeekday:o}=i._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),tt(r)||(r=typeof s=="string"?e.parse(r,s):e.parse(r)),r===null?null:(n&&(r=n==="week"&&(hi(o)||o===!0)?e.startOf(r,"isoWeek",o):e.startOf(r,n)),+r)}function cl(i,t,e,s){const n=xt.length;for(let o=xt.indexOf(i);o<n-1;++o){const r=_n[xt[o]],a=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((e-t)/(a*r.size))<=s)return xt[o]}return xt[n-1]}function gy(i,t,e,s,n){for(let o=xt.length-1;o>=xt.indexOf(e);o--){const r=xt[o];if(_n[r].common&&i._adapter.diff(n,s,r)>=t-1)return r}return xt[e?xt.indexOf(e):0]}function by(i){for(let t=xt.indexOf(i)+1,e=xt.length;t<e;++t)if(_n[xt[t]].common)return xt[t]}function hl(i,t,e){if(!e)i[t]=!0;else if(e.length){const{lo:s,hi:n}=Ro(e,t),o=e[s]>=t?e[s]:e[n];i[o]=!0}}function yy(i,t,e,s){const n=i._adapter,o=+n.startOf(t[0].value,s),r=t[t.length-1].value;let a,l;for(a=o;a<=r;a=+n.add(a,1,s))l=e[a],l>=0&&(t[l].major=!0);return t}function dl(i,t,e){const s=[],n={},o=t.length;let r,a;for(r=0;r<o;++r)a=t[r],n[a]=r,s.push({value:a,major:!1});return o===0||!e?s:yy(i,s,n,e)}class Gi extends Xe{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),n=this._adapter=new Mm._date(t.adapters.date);n.init(e),Ti(s.displayFormats,n.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:ll(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:n,max:o,minDefined:r,maxDefined:a}=this.getUserBounds();function l(c){!r&&!isNaN(c.min)&&(n=Math.min(n,c.min)),!a&&!isNaN(c.max)&&(o=Math.max(o,c.max))}(!r||!a)&&(l(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&l(this.getMinMax(!1))),n=tt(n)&&!isNaN(n)?n:+e.startOf(Date.now(),s),o=tt(o)&&!isNaN(o)?o:+e.endOf(Date.now(),s)+1,this.min=Math.min(n,o-1),this.max=Math.max(n+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,n=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);const o=this.min,r=this.max,a=Kf(n,o,r);return this._unit=e.unit||(s.autoSkip?cl(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):gy(this,a.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:by(this._unit),this.initOffsets(n),t.reverse&&a.reverse(),dl(this,a,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,n,o;this.options.offset&&t.length&&(n=this.getDecimalForValue(t[0]),t.length===1?e=1-n:e=(this.getDecimalForValue(t[1])-n)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?s=o:s=(o-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;e=at(e,0,r),s=at(s,0,r),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,n=this.options,o=n.time,r=o.unit||cl(o.minUnit,e,s,this._getLabelCapacity(e)),a=O(n.ticks.stepSize,1),l=r==="week"?o.isoWeekday:!1,c=hi(l)||l===!0,h={};let d=e,u,f;if(c&&(d=+t.startOf(d,"isoWeek",l)),d=+t.startOf(d,c?"day":r),t.diff(s,e,r)>1e5*a)throw new Error(e+" and "+s+" are too far apart with stepSize of "+a+" "+r);const p=n.ticks.source==="data"&&this.getDataTimestamps();for(u=d,f=0;u<s;u=+t.add(u,a,r),f++)hl(h,u,p);return(u===s||n.bounds==="ticks"||f===1)&&hl(h,u,p),Object.keys(h).sort(al).map(m=>+m)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const n=this.options.time.displayFormats,o=this._unit,r=e||n[o];return this._adapter.format(t,r)}_tickFormatFunction(t,e,s,n){const o=this.options,r=o.ticks.callback;if(r)return U(r,[t,e,s],this);const a=o.time.displayFormats,l=this._unit,c=this._majorUnit,h=l&&a[l],d=c&&a[c],u=s[e],f=c&&d&&u&&u.major;return this._adapter.format(t,n||(f?d:h))}generateTickLabels(t){let e,s,n;for(e=0,s=t.length;e<s;++e)n=t[e],n.label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,n=Ot(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(n),r=Math.sin(n),a=this._resolveTickFontOptions(0).size;return{w:s*o+a*r,h:s*r+a*o}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,n=s[e.unit]||s.millisecond,o=this._tickFormatFunction(t,0,dl(this,[t],this._majorUnit),n),r=this._getLabelSize(o),a=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return a>0?a:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(e=0,s=n.length;e<s;++e)t=t.concat(n[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const n=this.getLabels();for(e=0,s=n.length;e<s;++e)t.push(ll(this,n[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return ac(t.sort(al))}}P(Gi,"id","time"),P(Gi,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function xs(i,t,e){let s=0,n=i.length-1,o,r,a,l;e?(t>=i[s].pos&&t<=i[n].pos&&({lo:s,hi:n}=Qt(i,"pos",t)),{pos:o,time:a}=i[s],{pos:r,time:l}=i[n]):(t>=i[s].time&&t<=i[n].time&&({lo:s,hi:n}=Qt(i,"time",t)),{time:o,pos:a}=i[s],{time:r,pos:l}=i[n]);const c=r-o;return c?a+(l-a)*(t-o)/c:a}class po extends Gi{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=xs(e,this.min),this._tableRange=xs(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,n=[],o=[];let r,a,l,c,h;for(r=0,a=t.length;r<a;++r)c=t[r],c>=e&&c<=s&&n.push(c);if(n.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(r=0,a=n.length;r<a;++r)h=n[r+1],l=n[r-1],c=n[r],Math.round((h+l)/2)!==c&&o.push({time:c,pos:r/(a-1)});return o}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((n,o)=>n-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(xs(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return xs(this._table,s*this._tableRange+this._minPos,!0)}}P(po,"id","timeseries"),P(po,"defaults",Gi.defaults);var vy=Object.freeze({__proto__:null,CategoryScale:co,LinearScale:ho,LogarithmicScale:uo,RadialLinearScale:Di,TimeScale:Gi,TimeSeriesScale:po});const xy=[Cm,eb,Kb,vy];Ui.register(...xy);/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */var ul=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var i=window.screen;if(i)return(i.deviceXDPI||1)/(i.logicalXDPI||1)}return 1}(),Fi={toTextLines:function(i){var t=[],e;for(i=[].concat(i);i.length;)e=i.pop(),typeof e=="string"?t.unshift.apply(t,e.split(`
`)):Array.isArray(e)?i.push.apply(i,e):L(i)||t.unshift(""+e);return t},textSize:function(i,t,e){var s=[].concat(t),n=s.length,o=i.font,r=0,a;for(i.font=e.string,a=0;a<n;++a)r=Math.max(i.measureText(s[a]).width,r);return i.font=o,{height:n*e.lineHeight,width:r}},bound:function(i,t,e){return Math.max(i,Math.min(t,e))},arrayDiff:function(i,t){var e=i.slice(),s=[],n,o,r,a;for(n=0,r=t.length;n<r;++n)a=t[n],o=e.indexOf(a),o===-1?s.push([a,1]):e.splice(o,1);for(n=0,r=e.length;n<r;++n)s.push([e[n],-1]);return s},rasterize:function(i){return Math.round(i*ul)/ul}};function Vn(i,t){var e=t.x,s=t.y;if(e===null)return{x:0,y:-1};if(s===null)return{x:1,y:0};var n=i.x-e,o=i.y-s,r=Math.sqrt(n*n+o*o);return{x:r?n/r:0,y:r?o/r:-1}}function _y(i,t,e,s,n){switch(n){case"center":e=s=0;break;case"bottom":e=0,s=1;break;case"right":e=1,s=0;break;case"left":e=-1,s=0;break;case"top":e=0,s=-1;break;case"start":e=-e,s=-s;break;case"end":break;default:n*=Math.PI/180,e=Math.cos(n),s=Math.sin(n);break}return{x:i,y:t,vx:e,vy:s}}var wy=0,Kc=1,Qc=2,Zc=4,Jc=8;function _s(i,t,e){var s=wy;return i<e.left?s|=Kc:i>e.right&&(s|=Qc),t<e.top?s|=Jc:t>e.bottom&&(s|=Zc),s}function ky(i,t){for(var e=i.x0,s=i.y0,n=i.x1,o=i.y1,r=_s(e,s,t),a=_s(n,o,t),l,c,h;!(!(r|a)||r&a);)l=r||a,l&Jc?(c=e+(n-e)*(t.top-s)/(o-s),h=t.top):l&Zc?(c=e+(n-e)*(t.bottom-s)/(o-s),h=t.bottom):l&Qc?(h=s+(o-s)*(t.right-e)/(n-e),c=t.right):l&Kc&&(h=s+(o-s)*(t.left-e)/(n-e),c=t.left),l===r?(e=c,s=h,r=_s(e,s,t)):(n=c,o=h,a=_s(n,o,t));return{x0:e,x1:n,y0:s,y1:o}}function ws(i,t){var e=t.anchor,s=i,n,o;return t.clamp&&(s=ky(s,t.area)),e==="start"?(n=s.x0,o=s.y0):e==="end"?(n=s.x1,o=s.y1):(n=(s.x0+s.x1)/2,o=(s.y0+s.y1)/2),_y(n,o,i.vx,i.vy,t.align)}var ks={arc:function(i,t){var e=(i.startAngle+i.endAngle)/2,s=Math.cos(e),n=Math.sin(e),o=i.innerRadius,r=i.outerRadius;return ws({x0:i.x+s*o,y0:i.y+n*o,x1:i.x+s*r,y1:i.y+n*r,vx:s,vy:n},t)},point:function(i,t){var e=Vn(i,t.origin),s=e.x*i.options.radius,n=e.y*i.options.radius;return ws({x0:i.x-s,y0:i.y-n,x1:i.x+s,y1:i.y+n,vx:e.x,vy:e.y},t)},bar:function(i,t){var e=Vn(i,t.origin),s=i.x,n=i.y,o=0,r=0;return i.horizontal?(s=Math.min(i.x,i.base),o=Math.abs(i.base-i.x)):(n=Math.min(i.y,i.base),r=Math.abs(i.base-i.y)),ws({x0:s,y0:n+r,x1:s+o,y1:n,vx:e.x,vy:e.y},t)},fallback:function(i,t){var e=Vn(i,t.origin);return ws({x0:i.x,y0:i.y,x1:i.x+(i.width||0),y1:i.y+(i.height||0),vx:e.x,vy:e.y},t)}},Jt=Fi.rasterize;function Sy(i){var t=i.borderWidth||0,e=i.padding,s=i.size.height,n=i.size.width,o=-n/2,r=-s/2;return{frame:{x:o-e.left-t,y:r-e.top-t,w:n+e.width+t*2,h:s+e.height+t*2},text:{x:o,y:r,w:n,h:s}}}function Cy(i,t){var e=t.chart.getDatasetMeta(t.datasetIndex).vScale;if(!e)return null;if(e.xCenter!==void 0&&e.yCenter!==void 0)return{x:e.xCenter,y:e.yCenter};var s=e.getBasePixel();return i.horizontal?{x:s,y:null}:{x:null,y:s}}function My(i){return i instanceof Ze?ks.arc:i instanceof $i?ks.point:i instanceof Ii?ks.bar:ks.fallback}function Py(i,t,e,s,n,o){var r=Math.PI/2;if(o){var a=Math.min(o,n/2,s/2),l=t+a,c=e+a,h=t+s-a,d=e+n-a;i.moveTo(t,c),l<h&&c<d?(i.arc(l,c,a,-Math.PI,-r),i.arc(h,c,a,-r,0),i.arc(h,d,a,0,r),i.arc(l,d,a,r,Math.PI)):l<h?(i.moveTo(l,e),i.arc(h,c,a,-r,r),i.arc(l,c,a,r,Math.PI+r)):c<d?(i.arc(l,c,a,-Math.PI,0),i.arc(l,d,a,0,Math.PI)):i.arc(l,c,a,-Math.PI,Math.PI),i.closePath(),i.moveTo(t,e)}else i.rect(t,e,s,n)}function Ay(i,t,e){var s=e.backgroundColor,n=e.borderColor,o=e.borderWidth;!s&&(!n||!o)||(i.beginPath(),Py(i,Jt(t.x)+o/2,Jt(t.y)+o/2,Jt(t.w)-o,Jt(t.h)-o,e.borderRadius),i.closePath(),s&&(i.fillStyle=s,i.fill()),n&&o&&(i.strokeStyle=n,i.lineWidth=o,i.lineJoin="miter",i.stroke()))}function Dy(i,t,e){var s=e.lineHeight,n=i.w,o=i.x,r=i.y+s/2;return t==="center"?o+=n/2:(t==="end"||t==="right")&&(o+=n),{h:s,w:n,x:o,y:r}}function Ey(i,t,e){var s=i.shadowBlur,n=e.stroked,o=Jt(e.x),r=Jt(e.y),a=Jt(e.w);n&&i.strokeText(t,o,r,a),e.filled&&(s&&n&&(i.shadowBlur=0),i.fillText(t,o,r,a),s&&n&&(i.shadowBlur=s))}function Ty(i,t,e,s){var n=s.textAlign,o=s.color,r=!!o,a=s.font,l=t.length,c=s.textStrokeColor,h=s.textStrokeWidth,d=c&&h,u;if(!(!l||!r&&!d))for(e=Dy(e,n,a),i.font=a.string,i.textAlign=n,i.textBaseline="middle",i.shadowBlur=s.textShadowBlur,i.shadowColor=s.textShadowColor,r&&(i.fillStyle=o),d&&(i.lineJoin="round",i.lineWidth=h,i.strokeStyle=c),u=0,l=t.length;u<l;++u)Ey(i,t[u],{stroked:d,filled:r,w:e.w,x:e.x,y:e.y+e.h*u})}var th=function(i,t,e,s){var n=this;n._config=i,n._index=s,n._model=null,n._rects=null,n._ctx=t,n._el=e};Wt(th.prototype,{_modelize:function(i,t,e,s){var n=this,o=n._index,r=nt(X([e.font,{}],s,o)),a=X([e.color,Q.color],s,o);return{align:X([e.align,"center"],s,o),anchor:X([e.anchor,"center"],s,o),area:s.chart.chartArea,backgroundColor:X([e.backgroundColor,null],s,o),borderColor:X([e.borderColor,null],s,o),borderRadius:X([e.borderRadius,0],s,o),borderWidth:X([e.borderWidth,0],s,o),clamp:X([e.clamp,!1],s,o),clip:X([e.clip,!1],s,o),color:a,display:i,font:r,lines:t,offset:X([e.offset,4],s,o),opacity:X([e.opacity,1],s,o),origin:Cy(n._el,s),padding:ct(X([e.padding,4],s,o)),positioner:My(n._el),rotation:X([e.rotation,0],s,o)*(Math.PI/180),size:Fi.textSize(n._ctx,t,r),textAlign:X([e.textAlign,"start"],s,o),textShadowBlur:X([e.textShadowBlur,0],s,o),textShadowColor:X([e.textShadowColor,a],s,o),textStrokeColor:X([e.textStrokeColor,a],s,o),textStrokeWidth:X([e.textStrokeWidth,0],s,o)}},update:function(i){var t=this,e=null,s=null,n=t._index,o=t._config,r,a,l,c=X([o.display,!0],i,n);c&&(r=i.dataset.data[n],a=O(U(o.formatter,[r,i]),r),l=L(a)?[]:Fi.toTextLines(a),l.length&&(e=t._modelize(c,l,o,i),s=Sy(e))),t._model=e,t._rects=s},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(i,t){var e=this,s=i.ctx,n=e._model,o=e._rects,r;this.visible()&&(s.save(),n.clip&&(r=n.area,s.beginPath(),s.rect(r.left,r.top,r.right-r.left,r.bottom-r.top),s.clip()),s.globalAlpha=Fi.bound(0,n.opacity,1),s.translate(Jt(t.x),Jt(t.y)),s.rotate(n.rotation),Ay(s,o.frame,n),Ty(s,n.lines,o.text,n),s.restore())}});var Oy=Number.MIN_SAFE_INTEGER||-9007199254740991,Ly=Number.MAX_SAFE_INTEGER||9007199254740991;function Ci(i,t,e){var s=Math.cos(e),n=Math.sin(e),o=t.x,r=t.y;return{x:o+s*(i.x-o)-n*(i.y-r),y:r+n*(i.x-o)+s*(i.y-r)}}function fl(i,t){var e=Ly,s=Oy,n=t.origin,o,r,a,l,c;for(o=0;o<i.length;++o)r=i[o],a=r.x-n.x,l=r.y-n.y,c=t.vx*a+t.vy*l,e=Math.min(e,c),s=Math.max(s,c);return{min:e,max:s}}function Ss(i,t){var e=t.x-i.x,s=t.y-i.y,n=Math.sqrt(e*e+s*s);return{vx:(t.x-i.x)/n,vy:(t.y-i.y)/n,origin:i,ln:n}}var eh=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};Wt(eh.prototype,{center:function(){var i=this._rect;return{x:i.x+i.w/2,y:i.y+i.h/2}},update:function(i,t,e){this._rotation=e,this._rect={x:t.x+i.x,y:t.y+i.y,w:t.w,h:t.h}},contains:function(i){var t=this,e=1,s=t._rect;return i=Ci(i,t.center(),-t._rotation),!(i.x<s.x-e||i.y<s.y-e||i.x>s.x+s.w+e*2||i.y>s.y+s.h+e*2)},intersects:function(i){var t=this._points(),e=i._points(),s=[Ss(t[0],t[1]),Ss(t[0],t[3])],n,o,r;for(this._rotation!==i._rotation&&s.push(Ss(e[0],e[1]),Ss(e[0],e[3])),n=0;n<s.length;++n)if(o=fl(t,s[n]),r=fl(e,s[n]),o.max<r.min||r.max<o.min)return!1;return!0},_points:function(){var i=this,t=i._rect,e=i._rotation,s=i.center();return[Ci({x:t.x,y:t.y},s,e),Ci({x:t.x+t.w,y:t.y},s,e),Ci({x:t.x+t.w,y:t.y+t.h},s,e),Ci({x:t.x,y:t.y+t.h},s,e)]}});function ih(i,t,e){var s=t.positioner(i,t),n=s.vx,o=s.vy;if(!n&&!o)return{x:s.x,y:s.y};var r=e.w,a=e.h,l=t.rotation,c=Math.abs(r/2*Math.cos(l))+Math.abs(a/2*Math.sin(l)),h=Math.abs(r/2*Math.sin(l))+Math.abs(a/2*Math.cos(l)),d=1/Math.max(Math.abs(n),Math.abs(o));return c*=n*d,h*=o*d,c+=t.offset*n,h+=t.offset*o,{x:s.x+c,y:s.y+h}}function Ry(i,t){var e,s,n,o;for(e=i.length-1;e>=0;--e)for(n=i[e].$layout,s=e-1;s>=0&&n._visible;--s)o=i[s].$layout,o._visible&&n._box.intersects(o._box)&&t(n,o);return i}function zy(i){var t,e,s,n,o,r,a;for(t=0,e=i.length;t<e;++t)s=i[t],n=s.$layout,n._visible&&(a=new Proxy(s._el,{get:(l,c)=>l.getProps([c],!0)[c]}),o=s.geometry(),r=ih(a,s.model(),o),n._box.update(r,o,s.rotation()));return Ry(i,function(l,c){var h=l._hidable,d=c._hidable;h&&d||d?c._visible=!1:h&&(l._visible=!1)})}var Bi={prepare:function(i){var t=[],e,s,n,o,r;for(e=0,n=i.length;e<n;++e)for(s=0,o=i[e].length;s<o;++s)r=i[e][s],t.push(r),r.$layout={_box:new eh,_hidable:!1,_visible:!0,_set:e,_idx:r._index};return t.sort(function(a,l){var c=a.$layout,h=l.$layout;return c._idx===h._idx?h._set-c._set:h._idx-c._idx}),this.update(t),t},update:function(i){var t=!1,e,s,n,o,r;for(e=0,s=i.length;e<s;++e)n=i[e],o=n.model(),r=n.$layout,r._hidable=o&&o.display==="auto",r._visible=n.visible(),t|=r._hidable;t&&zy(i)},lookup:function(i,t){var e,s;for(e=i.length-1;e>=0;--e)if(s=i[e].$layout,s&&s._visible&&s._box.contains(t))return i[e];return null},draw:function(i,t){var e,s,n,o,r,a;for(e=0,s=t.length;e<s;++e)n=t[e],o=n.$layout,o._visible&&(r=n.geometry(),a=ih(n._el,n.model(),r),o._box.update(a,r,n.rotation()),n.draw(i,a))}},$y=function(i){if(L(i))return null;var t=i,e,s,n;if(F(i))if(!L(i.label))t=i.label;else if(!L(i.r))t=i.r;else for(t="",e=Object.keys(i),n=0,s=e.length;n<s;++n)t+=(n!==0?", ":"")+e[n]+": "+i[e[n]];return""+t},Iy={align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:$y,labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},vt="$datalabels",sh="$default";function Fy(i,t){var e=i.datalabels,s={},n=[],o,r;return e===!1?null:(e===!0&&(e={}),t=Wt({},[t,e]),o=t.labels||{},r=Object.keys(o),delete t.labels,r.length?r.forEach(function(a){o[a]&&n.push(Wt({},[t,o[a],{_key:a}]))}):n.push(t),s=n.reduce(function(a,l){return W(l.listeners||{},function(c,h){a[h]=a[h]||{},a[h][l._key||sh]=c}),delete l.listeners,a},{}),{labels:n,listeners:s})}function mo(i,t,e,s){if(t){var n=e.$context,o=e.$groups,r;t[o._set]&&(r=t[o._set][o._key],r&&U(r,[n,s])===!0&&(i[vt]._dirty=!0,e.update(n)))}}function By(i,t,e,s,n){var o,r;!e&&!s||(e?s?e!==s&&(r=o=!0):r=!0:o=!0,r&&mo(i,t.leave,e,n),o&&mo(i,t.enter,s,n))}function Vy(i,t){var e=i[vt],s=e._listeners,n,o;if(!(!s.enter&&!s.leave)){if(t.type==="mousemove")o=Bi.lookup(e._labels,t);else if(t.type!=="mouseout")return;n=e._hovered,e._hovered=o,By(i,s,n,o,t)}}function jy(i,t){var e=i[vt],s=e._listeners.click,n=s&&Bi.lookup(e._labels,t);n&&mo(i,s,n,t)}var Ny={id:"datalabels",defaults:Iy,beforeInit:function(i){i[vt]={_actives:[]}},beforeUpdate:function(i){var t=i[vt];t._listened=!1,t._listeners={},t._datasets=[],t._labels=[]},afterDatasetUpdate:function(i,t,e){var s=t.index,n=i[vt],o=n._datasets[s]=[],r=i.isDatasetVisible(s),a=i.data.datasets[s],l=Fy(a,e),c=t.meta.data||[],h=i.ctx,d,u,f,p,m,g,b,y;for(h.save(),d=0,f=c.length;d<f;++d)if(b=c[d],b[vt]=[],r&&b&&i.getDataVisibility(d)&&!b.skip)for(u=0,p=l.labels.length;u<p;++u)m=l.labels[u],g=m._key,y=new th(m,h,b,d),y.$groups={_set:s,_key:g||sh},y.$context={active:!1,chart:i,dataIndex:d,dataset:a,datasetIndex:s},y.update(y.$context),b[vt].push(y),o.push(y);h.restore(),Wt(n._listeners,l.listeners,{merger:function(w,_,x){_[w]=_[w]||{},_[w][t.index]=x[w],n._listened=!0}})},afterUpdate:function(i){i[vt]._labels=Bi.prepare(i[vt]._datasets)},afterDatasetsDraw:function(i){Bi.draw(i,i[vt]._labels)},beforeEvent:function(i,t){if(i[vt]._listened){var e=t.event;switch(e.type){case"mousemove":case"mouseout":Vy(i,e);break;case"click":jy(i,e);break}}},afterEvent:function(i){var t=i[vt],e=t._actives,s=t._actives=i.getActiveElements(),n=Fi.arrayDiff(e,s),o,r,a,l,c,h,d;for(o=0,r=n.length;o<r;++o)if(c=n[o],c[1])for(d=c[0].element[vt]||[],a=0,l=d.length;a<l;++a)h=d[a],h.$context.active=c[1]===1,h.update(h.$context);(t._dirty||n.length)&&(Bi.update(t._labels),i.render()),delete t._dirty}};const Hy=()=>S`
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
  `;var Wy=Object.defineProperty,st=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Wy(t,e,n),n};Ui.register(Ny);const pr=class pr extends H{constructor(){super(...arguments),this.colors=Array.from({length:20},(t,e)=>this.generateColor(e)),this.type=null,this.xBeginAtZero=!0,this.yBeginAtZero=!0,this.indexAxis="x",this.loading=!1,this.hoverBorderColor="#ffffffff",this.linePointStyle="circle",this.pointRadius=10,this.lineFill=!1,this.transparentBackground=!0,this.displayLabels=!0,this.dataLabelsColor="#ffffffff",this.smoothLine=!1,this.borderColor="#000000",this.inputData={labels:[],datasets:{}},this.colorfulBars=!1,this._errorLoading=!1,this._options={responsive:!1,maintainAspectRatio:!1,plugins:{legend:{position:"bottom",display:!1},datalabels:{display:this.displayLabels,color:this.dataLabelsColor,font:{weight:"bold",family:"'Plus Jakarta Sans', sans-serif, 'Fira Code'"}},title:{text:this.label,display:!0}},elements:{line:{tension:this.smoothLine?.4:0}}},this._chartCfg={type:this.type,data:{labels:[],datasets:[]},options:this._options},this._canvas=document.createElement("canvas")}generateColor(t){return`hsl(${t*137.5%360}, 70%, 50%)`}async loadData(t=!1){if(this.inputData.labels.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.inputData=e,this.loading=!1,this._errorLoading=!1,this.dispatchEvent(new Event("data-loaded")),!0}catch(e){if(this.loading=!1,this.inputData.labels.length!==0)return!1;const s=this.querySelector("[slot='error-loading']"),n=s==null?void 0:s.querySelector("[data-chart-element='error-message']");return e instanceof Error&&n&&e.message.trim()!==""&&(n.textContent=e.message),this._errorLoading=!0,!1}}get data(){return this.chart.data}_getDefaultColors(t){const e=Object.keys(t.datasets).length;return Array.from({length:e},(n,o)=>this.generateColor(o))}isScatterData(t){return"x"in t&&"y"in t}parseInputData(t){const{labels:e}=t,s=this.colors.length<Object.keys(t.datasets).length?this._getDefaultColors(t):this.colors,n=Object.entries(t.datasets).map(([o,r],a)=>{const l=s[a%s.length],c=this.type==="scatter"||this.type==="bubble",h=this.type==="bar";let d;return c||h&&!this.colorfulBars?d=this.transparentBackground?this.transparentize(l):l:d=this.transparentBackground?s.map(f=>this.transparentize(f)):s,{label:o,data:Object.values(r).map(f=>{if(c){if(this.isScatterData(f)){const p={x:f.x,y:f.y};return this.type==="bubble"&&f.r!==void 0&&(p.r=f.r),p}return{x:0,y:0}}return this.isScatterData(f)?0:f.value}),backgroundColor:d,borderColor:c?void 0:this.borderColor,pointStyle:c?void 0:this.linePointStyle,pointRadius:c?void 0:this.pointRadius,fill:c?void 0:this.lineFill,hoverBorderColor:c?void 0:this.hoverBorderColor}});return{labels:e,datasets:n}}transparentize(t,e){const s=e===void 0?.5:1-e;return Rf(t).alpha(s).rgbString()}updateFromTable(t){const e=t.data,s=[],n={},o=[];let r=0;const a=`dataset_${r}`;r++;for(const l of e){const{data:c}=l;let h,d;for(const[u,f]of Object.entries(c))u==="name"&&typeof f=="string"?h=f:typeof f=="number"&&(d=f);h&&d!==void 0&&(s.push(h),o.push({value:d}))}n[a]=o,this.inputData={labels:s,datasets:n}}highlight(t){if(!this.chart)return;const e=[],s=Object.values(this.inputData.datasets);for(const n in s){const o=s[n];for(const r in o){const a=o[r];if(!t(a))continue;const l={datasetIndex:Number(n),index:Number(r)};e.push(l)}}this.chart.setActiveElements(e),this.chart.update()}filterByValue(t){if(!this.chart)return;const e=structuredClone(this.inputData);for(const s of Object.values(e.datasets))for(const n in s)t(s[n])||delete s[n];this.chart.data=this.parseInputData(e),this.chart.update()}triggerFilter(t){this.dispatchEvent(new CustomEvent("labelfilter",{detail:t}))}filterByLabel(t){if(!this.chart||!this.chart.data.labels)return;const e=this.chart.data.labels.indexOf(t);if(e===-1)return;this.chart.toggleDataVisibility(e);const s=this.chart.data.labels.filter((o,r)=>this.chart.getDataVisibility(r)),n=this.chart.data.labels.filter((o,r)=>!this.chart.getDataVisibility(r));this.chart.update(),this.triggerFilter({label:t,visible:s,hidden:n})}reset(){this.chart.data=this.parseInputData(this.inputData),this.chart.update()}updated(t){var s,n;if(!this.chart)return;if(t.has("type")||t.has("indexAxis")||t.has("linePointStyle")||t.has("pointRadius")||t.has("lineFill")){this.chart.destroy();const o=structuredClone(this._options);this.label!==void 0&&(o.plugins||(o.plugins={}),o.plugins.title={text:this.label,display:!0}),this.indexAxis!==void 0&&(o.indexAxis=this.indexAxis),this.chart=new Ui(this._canvas,{type:this.type,data:this.parseInputData(this.inputData),options:o})}else for(const o of t.keys())switch(o){case"label":this.chart.options.plugins.title={text:this.label,display:this.label!==void 0};break;case"inputData":this.chart.data=this.parseInputData(this.inputData);break;case"smoothLine":this.chart.options.elements&&this.chart.options.elements.line&&(this.chart.options.elements.line.tension=this.smoothLine?.4:0);break;case"dataLabelsColor":this.chart.options.plugins.datalabels.color=this.dataLabelsColor;break;case"displayLabels":this.chart.options.plugins.datalabels.display=this.displayLabels;break;case"borderColor":this.chart.data.datasets.forEach(r=>{r.borderColor=this.borderColor});break;case"xStacked":this.type==="bar"&&((s=this.chart.options.scales)!=null&&s.x)&&Object.assign(this.chart.options.scales.x,{stacked:this.xStacked});break;case"yStacked":this.type==="bar"&&((n=this.chart.options.scales)!=null&&n.y)&&Object.assign(this.chart.options.scales.y,{stacked:this.yStacked});break;case"transparentBackground":{const r=this.colors||this._getDefaultColors(this.inputData),a=this.type==="scatter"||this.type==="bubble",l=this.type==="bar";this.chart.data.datasets.forEach((c,h)=>{const d=r[h%r.length];let u;a||l&&!this.colorfulBars?u=this.transparentBackground?this.transparentize(d):d:u=this.transparentBackground?r.map(f=>this.transparentize(f)):r,c.backgroundColor=u});break}case"colors":{const r=this.colors||this._getDefaultColors(this.inputData),a=this.type==="scatter"||this.type==="bubble",l=this.type==="bar";this.chart.data.datasets.forEach((c,h)=>{const d=r[h%r.length];let u;a||l&&!this.colorfulBars?u=this.transparentBackground?this.transparentize(d):d:u=this.transparentBackground?r.map(f=>this.transparentize(f)):r,c.backgroundColor=u});break}}this.chart.update(),this.chart.resize()}updateChartTitle(){if(this.chart)try{const t=this.chart.options;t&&t.plugins&&t.plugins.title&&(t.plugins.title.text=this.label,this.chart.update())}catch(t){console.warn("Chart: failed to update chart title",t)}}firstUpdated(){this.chart=new Ui(this._canvas,this._chartCfg);const t=this.renderRoot.querySelector(".parent");t&&new ResizeObserver(()=>this.chart.resize()).observe(t),this._canvas.onclick=e=>{if(this.inputData.labels.length===0)return;const s=this.chart.getElementsAtEventForMode(e,"point",{intersect:!0},!1);for(const n of s){const{index:o,datasetIndex:r}=n,a=this.inputData.labels[o],l=[];for(const d of Object.values(this.inputData.datasets))l.push(d[o]);const c={datasetIndex:r,index:o,values:l,label:a,value:{value:0}},h=()=>{var d,u;return(u=(d=Object.values(this.inputData.datasets))==null?void 0:d[r])==null?void 0:u[o]};Object.defineProperty(c,"value",{get:()=>h()}),this.dispatchEvent(new CustomEvent("sectionclick",{detail:c}))}}}render(){if(this.loading)return Hy();if(this._errorLoading)return S`<slot name="error-loading"></slot>`;let t;return this.inputData.labels.length===0?(this._canvas.style.display="none",t=S`
        <slot name="missing-data">
          <bim-label>No data to display in this chart.</bim-label>
        </slot>
      `):this._canvas.style.display="block",S`
      <div class="parent">
        ${t} ${this._canvas}
        <slot name="labels"></slot>
      </div>
    `}};pr.styles=j`
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
  `;let Z=pr;st([v({type:Array})],Z.prototype,"colors");st([v({type:String,reflect:!0})],Z.prototype,"type");st([v({type:Boolean,reflect:!0,attribute:"x-zero"})],Z.prototype,"xBeginAtZero");st([v({type:Boolean,reflect:!0,attribute:"y-zero"})],Z.prototype,"yBeginAtZero");st([v({type:String,reflect:!0,attribute:"index-axis"})],Z.prototype,"indexAxis");st([v({type:Boolean,reflect:!0,attribute:"x-stacked"})],Z.prototype,"xStacked");st([v({type:Boolean,reflect:!0,attribute:"y-stacked"})],Z.prototype,"yStacked");st([v({type:Boolean,reflect:!0})],Z.prototype,"loading");st([v({type:String,reflect:!1})],Z.prototype,"hoverBorderColor");st([v({type:String,reflect:!0})],Z.prototype,"label");st([v({type:String,reflect:!0,attribute:"point-style"})],Z.prototype,"linePointStyle");st([v({type:Number,reflect:!0})],Z.prototype,"pointRadius");st([v({type:String,reflect:!0})],Z.prototype,"lineFill");st([v({type:Boolean,reflect:!0,attribute:"transparent-background"})],Z.prototype,"transparentBackground");st([v({type:Boolean,reflect:!0})],Z.prototype,"displayLabels");st([v({type:String,reflect:!0,attribute:"data-label-color"})],Z.prototype,"dataLabelsColor");st([v({type:Boolean,reflect:!0})],Z.prototype,"smoothLine");st([v({type:String,reflect:!0})],Z.prototype,"borderColor");st([v({type:Object,attribute:!1})],Z.prototype,"inputData");st([v({type:Boolean,reflect:!0})],Z.prototype,"colorfulBars");st([kt()],Z.prototype,"_errorLoading");var qy=Object.defineProperty,qo=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&qy(t,e,n),n},rt;const wn=(rt=class extends H{constructor(){super(...arguments),this.visible=!1,this._previousContainer=null,this._showToolTip=async()=>{this.timeoutId=setTimeout(async()=>{if(this.visible=!0,!rt.container.parentElement){const t=document.querySelector("[data-context-dialog]");t?t.append(rt.container):document.body.append(rt.container)}this._previousContainer=this.parentElement,rt.container.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,rt.container.append(this),await this.computePosition()},this.timeout===void 0?800:this.timeout)},this._hideToolTip=()=>{clearTimeout(this.timeoutId),this.visible=!1,this._previousContainer&&(this._previousContainer.append(this),this._previousContainer=null),rt.container.children.length===0&&rt.container.parentElement&&rt.container.remove()}}static get container(){return rt._container||(rt._container=document.createElement("div"),rt._container.style.cssText=`
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        overflow: visible;
        pointer-events: none;
        z-index: 9999;
      `),rt._container}async computePosition(){const t=this._previousContainer||this.parentElement;if(!t)return;const e=this.style.display;this.style.display="block",this.style.visibility="hidden",await new Promise(requestAnimationFrame);const{x:s,y:n}=await wo(t,this,{placement:this.placement,middleware:[go(10),xo(),vo({padding:8}),_o()]});Object.assign(this.style,{left:`${s}px`,top:`${n}px`,display:e,visibility:""})}connectedCallback(){super.connectedCallback();const t=this.parentElement;t&&(t.addEventListener("mouseenter",this._showToolTip),t.addEventListener("mouseleave",this._hideToolTip))}disconnectedCallback(){super.disconnectedCallback();const t=this.parentElement;t&&(t.removeEventListener("mouseenter",this._showToolTip),t.removeEventListener("mouseleave",this._hideToolTip))}render(){return S`<div><slot></slot></div>`}},rt.styles=j`
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
  `,rt._container=null,rt);qo([v({type:Boolean,reflect:!0})],wn.prototype,"visible");qo([v({type:Number,reflect:!0})],wn.prototype,"timeout");qo([v({type:String,reflect:!0})],wn.prototype,"placement");let Yy=wn;var Uy=Object.defineProperty,Xy=Object.getOwnPropertyDescriptor,lt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Xy(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Uy(t,e,n),n};const mr=class mr extends H{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.shiftStep=10,this.marks=[],this.showMarks=!1,this._value=0,this.valueLabelDisplay="auto",this.disableSwap=!1,this.disabled=!1,this.vertical=!1,this.markLabelOrientation="horizontal",this._activeThumb=-1,this.onValueChange=new Event("change"),this.onChangeCommitted=new Event("changecommitted")}set value(t){this._value=Array.isArray(t)?[this._clamp(t[0]),this._clamp(t[1])].sort((e,s)=>e-s):this._clamp(t),this.requestUpdate()}get value(){return this._value}_clamp(t){return Math.min(Math.max(t,this.min),this.max)}_valueToPercent(t){return(t-this.min)*100/(this.max-this.min)}_percentToValue(t){return(this.max-this.min)*t+this.min}_roundToStep(t,e){const s=Math.round((t-this.min)/e)*e+this.min,n=(e.toString().split(".")[1]??"").length;return Number(s.toFixed(n))}_findClosest(t,e){return t.reduce((s,n,o)=>Math.abs(n-e)<Math.abs(t[s]-e)?o:s,0)}_getSnappedValue(t){let e=this._percentToValue(t);if(this.step!==null)e=this._roundToStep(e,this.step);else if(this.marks.length>0){const s=this.marks.map(n=>n.value);e=s[this._findClosest(s,e)]}return this._clamp(e)}_formatValue(t){const e=this.scale?this.scale(t):t;return typeof this.valueLabelFormat=="function"?this.valueLabelFormat(e):typeof this.valueLabelFormat=="string"?this.valueLabelFormat:String(e)}_getFraction(t,e){var o;const s=(o=this.shadowRoot)==null?void 0:o.querySelector(".track-wrapper");if(!s)return 0;const n=s.getBoundingClientRect();return this.vertical?1-(e-n.top)/n.height:(t-n.left)/n.width}_onPointerDown(t){if(this.disabled||t instanceof MouseEvent&&t.button!==0)return;const{clientX:e,clientY:s}=t instanceof TouchEvent?t.changedTouches[0]:t,n=this._getFraction(e,s),o=this._getSnappedValue(n);let r=0;if(Array.isArray(this._value)){const c=this._value.map(h=>Math.abs(h-o));r=c[0]<=c[1]?0:1}this._activeThumb=r,this._updateValue(o,r);const a=c=>{const{clientX:h,clientY:d}=c instanceof TouchEvent?c.changedTouches[0]:c,u=this._getFraction(h,d),f=this._getSnappedValue(u);this._updateValue(f,r)},l=()=>{this._activeThumb=-1,this.dispatchEvent(this.onChangeCommitted),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",l)};document.addEventListener("mousemove",a,{passive:!0}),document.addEventListener("mouseup",l),document.addEventListener("touchmove",a,{passive:!0}),document.addEventListener("touchend",l)}_updateValue(t,e){if(Array.isArray(this._value)){const s=[...this._value];s[e]=t,this.disableSwap||s.sort((n,o)=>n-o),this._value=s}else this._value=t;this.requestUpdate(),this.dispatchEvent(this.onValueChange)}_onKeyDown(t,e){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(t.key))return;t.preventDefault();const n=Array.isArray(this._value)?this._value[e]:this._value,o=this.step??1,r=this.shiftStep,a=t.shiftKey;let l=null;const c=this.marks.map(h=>h.value);if(this.step!==null){const h=a?r:o;switch(t.key){case"ArrowRight":case"ArrowUp":l=this._clamp(n+h);break;case"ArrowLeft":case"ArrowDown":l=this._clamp(n-h);break;case"PageUp":l=this._clamp(n+r);break;case"PageDown":l=this._clamp(n-r);break;case"Home":l=this.min;break;case"End":l=this.max;break}}else if(c.length>0){const h=this._findClosest(c,n);switch(t.key){case"ArrowRight":case"ArrowUp":l=c[Math.min(h+1,c.length-1)];break;case"ArrowLeft":case"ArrowDown":l=c[Math.max(h-1,0)];break;case"Home":l=c[0];break;case"End":l=c[c.length-1];break}}l!==null&&(this._updateValue(l,e),this.dispatchEvent(this.onChangeCommitted))}render(){const t=Array.isArray(this._value),e=t?this._value:[this._value],s=t?this._valueToPercent(e[0]):0,n=this._valueToPercent(e[e.length-1]),o=this.vertical?{bottom:`${s}%`,height:`${n-s}%`}:{left:`${s}%`,width:`${n-s}%`},r=this.showMarks&&this.step!==null?Array.from({length:Math.floor((this.max-this.min)/this.step)+1},(a,l)=>({value:this.min+this.step*l})):this.marks;return S`
      ${ee(this.label||this.icon,()=>S`
          <bim-input .label=${this.label} .icon=${this.icon}></bim-input>
        `)}

      <div
        class="track-wrapper"
        @mousedown=${this._onPointerDown}
        @touchstart=${this._onPointerDown}
      >
        <div class="rail"></div>
        <div class="track" style=${$e(o)}></div>

        ${r.map(a=>{const l=this._valueToPercent(a.value),c=t?a.value>=e[0]&&a.value<=e[1]:a.value<=e[0];return S`
            <div
              class="mark"
              ?data-active=${c}
              style=${$e(this.vertical?{bottom:`${l}%`}:{left:`${l}%`})}
            ></div>
            ${ee(a.label,()=>S`
                <span
                  class="mark-label"
                  style=${$e(this.vertical?{bottom:`${l}%`}:{left:`${l}%`})}
                >
                  ${a.label}
                </span>
              `)}
          `})}
        ${e.map((a,l)=>{const c=this._valueToPercent(a),h=this._activeThumb===l;return S`
            <div
              class="thumb"
              ?data-active=${h||this.valueLabelDisplay==="on"}
              style=${$e(this.vertical?{bottom:`${c}%`,left:"50%"}:{left:`${c}%`,top:"50%"})}
            >
              ${ee(this.valueLabelDisplay!=="off",()=>S`
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
    `}};mr.styles=j`
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
  `;let it=mr;lt([v({type:String,reflect:!0})],it.prototype,"name",2);lt([v({type:String,reflect:!0})],it.prototype,"label",2);lt([v({type:String,reflect:!0})],it.prototype,"icon",2);lt([v({type:Number,reflect:!0})],it.prototype,"min",2);lt([v({type:Number,reflect:!0})],it.prototype,"max",2);lt([v({type:Number,reflect:!0})],it.prototype,"step",2);lt([v({type:Number,attribute:"shift-step",reflect:!0})],it.prototype,"shiftStep",2);lt([v({type:Array})],it.prototype,"marks",2);lt([v({type:Boolean,attribute:"show-marks",reflect:!0})],it.prototype,"showMarks",2);lt([v({attribute:!1})],it.prototype,"value",1);lt([v({type:String,attribute:"value-label-display",reflect:!0})],it.prototype,"valueLabelDisplay",2);lt([v({attribute:!1})],it.prototype,"valueLabelFormat",2);lt([v({attribute:!1})],it.prototype,"scale",2);lt([v({type:Boolean,attribute:"disable-swap",reflect:!0})],it.prototype,"disableSwap",2);lt([v({type:Boolean,reflect:!0})],it.prototype,"disabled",2);lt([v({type:Boolean,reflect:!0})],it.prototype,"vertical",2);lt([v({type:String,attribute:"mark-label-orientation",reflect:!0})],it.prototype,"markLabelOrientation",2);lt([kt()],it.prototype,"_activeThumb",2);var Gy=Object.defineProperty,Mt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Gy(t,e,n),n};const pl={A0:{width:841,height:1189},A1:{width:594,height:841},A2:{width:420,height:594},A3:{width:297,height:420},A4:{width:210,height:297}},gr=class gr extends H{constructor(){super(...arguments),this.label="",this.sheetNumber="",this.size="A4",this.orientation="portrait",this.margin=10,this.debug=!1,this.ruler=!1,this.rulerLength=100,this._pxPerMm=3.7795275591,this._rulerPosition={x:20,y:20},this._rulerDragging=!1,this._rulerOrientation="horizontal",this._mediaQueryList=null,this._mediaQueryListener=null,this._rulerDragStart={x:0,y:0},this.handleRulerMouseMove=t=>{this._rulerDragging&&(this._rulerPosition={x:t.clientX-this._rulerDragStart.x,y:t.clientY-this._rulerDragStart.y},this.requestUpdate())},this.handleRulerMouseUp=()=>{this._rulerDragging=!1,this.removeRulerDragListeners()}}get widthMm(){const t=pl[this.size];return this.orientation==="portrait"?t.width:t.height}get heightMm(){const t=pl[this.size];return this.orientation==="portrait"?t.height:t.width}get pxPerMm(){return this._pxPerMm}get drawingAreaEl(){return this.shadowRoot.querySelector(".printable-area")}get drawingSlotEl(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector(".drawing-slot"))??null}mmToPx(t){return t*this._pxPerMm}mm(t){return`${this.mmToPx(t)}px`}calibrate(){var s;const t=(s=this.shadowRoot)==null?void 0:s.querySelector(".calibration-ruler");if(!t)return;t.offsetHeight;const e=t.getBoundingClientRect().width;e>0&&(this._pxPerMm=e/100)}setupDPRListener(){const t=window.devicePixelRatio||1;this._mediaQueryList=window.matchMedia(`(resolution: ${t}dppx)`),this._mediaQueryListener=()=>{this.calibrate(),this.requestUpdate(),this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),this.setupDPRListener()},this._mediaQueryList.addEventListener("change",this._mediaQueryListener)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.calibrate(),this.setupDPRListener()})}disconnectedCallback(){super.disconnectedCallback(),this._mediaQueryList&&this._mediaQueryListener&&this._mediaQueryList.removeEventListener("change",this._mediaQueryListener),this._mediaQueryList=null,this._mediaQueryListener=null,this.removeRulerDragListeners()}handleRulerMouseDown(t){t.preventDefault(),this._rulerDragging=!0,this._rulerDragStart={x:t.clientX-this._rulerPosition.x,y:t.clientY-this._rulerPosition.y},document.addEventListener("mousemove",this.handleRulerMouseMove),document.addEventListener("mouseup",this.handleRulerMouseUp)}removeRulerDragListeners(){document.removeEventListener("mousemove",this.handleRulerMouseMove),document.removeEventListener("mouseup",this.handleRulerMouseUp)}toggleRulerOrientation(t){t.stopPropagation(),this._rulerOrientation=this._rulerOrientation==="horizontal"?"vertical":"horizontal"}renderRulerGizmo(){if(!this.ruler)return null;const t=this.mmToPx(this.rulerLength),e=Math.floor(this.rulerLength/10),s=this._rulerOrientation==="horizontal";return S`
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
          ${Array.from({length:e+1},(n,o)=>{const r=o/e*100,a=o%1===0,l=o*10/10;return S`
              <div
                class="ruler-tick ${this._rulerOrientation} ${a?"cm-marker":""}"
                style="${s?`left: ${r}%`:`top: ${r}%`};"
              >
                ${a?S`<div class="ruler-cm-label ${this._rulerOrientation}">
                      ${l}
                    </div>`:null}
              </div>
            `})}
        </div>
      </div>
    `}render(){const t=this.mmToPx(this.widthMm),e=this.mmToPx(this.heightMm);return this.style.width=`${t}px`,this.style.height=`${e}px`,this.style.padding=this.mm(this.margin),S`
      <!-- Calibration ruler: hidden element used to measure mm→px -->
      <div class="calibration-ruler"></div>

      <!-- Ruler gizmo for scale validation -->
      ${this.renderRulerGizmo()}

      <!-- Printable area -->
      <div class="printable-area ${this.debug?"debug":""}">
        <!-- Title block template or drawing area slot -->
        ${this.titleBlockTemplate?this.titleBlockTemplate(this.mm.bind(this),S`<div class="drawing-slot"><slot></slot></div>`,{label:this.label,sheetNumber:this.sheetNumber}):S`<div class="drawing-slot"><slot></slot></div>`}
      </div>
    `}};gr.styles=j`
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
  `;let pt=gr;Mt([v({type:String})],pt.prototype,"label");Mt([v({type:String})],pt.prototype,"sheetNumber");Mt([v({type:String})],pt.prototype,"size");Mt([v({type:String})],pt.prototype,"orientation");Mt([v({type:Number})],pt.prototype,"margin");Mt([v({type:Boolean})],pt.prototype,"debug");Mt([v({type:Boolean,attribute:"ruler"})],pt.prototype,"ruler");Mt([v({type:Number,attribute:"ruler-length"})],pt.prototype,"rulerLength");Mt([v({attribute:!1})],pt.prototype,"titleBlockTemplate");Mt([kt()],pt.prototype,"_pxPerMm");Mt([kt()],pt.prototype,"_rulerPosition");Mt([kt()],pt.prototype,"_rulerDragging");Mt([kt()],pt.prototype,"_rulerOrientation");export{hu as B,ri as C,oi as M,wt as T,ye as a,As as b,$e as o};
