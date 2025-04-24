import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as kn,M as zi,W as Xe,S as Tn,X as pa,O as os,i as R,G as On,j as fe,l as Di,n as Je,F as Yt,o as mt,e as eo,f as ma,L as fa,B as io,g as ba,h as ga,I as ss,P as pi,p as Se,q as va,D as ya,r as _a,s as wa,t as xa,H as rs,u as $a,c as Ca,V as Aa,v as Ea,w as xi,x as _t,R as Sa,z as as,E as ls,J as ka,K as cs,N as Ta,Q as Oa,U as us,Y as ds,Z as Pa,_ as Ia,T as Na,C as Ra,a as Ma,b as La,k as Qe,m as dt}from"./index-DQz7evTe.js";var ja=Object.defineProperty,za=(e,t,i)=>t in e?ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Mt=(e,t,i)=>(za(e,typeof t!="symbol"?t+"":t,i),i);const oe=Math.min,bt=Math.max,$i=Math.round,At=e=>({x:e,y:e}),Da={left:"right",right:"left",bottom:"top",top:"bottom"},Fa={start:"end",end:"start"};function no(e,t,i){return bt(e,oe(t,i))}function Ze(e,t){return typeof e=="function"?e(t):e}function gt(e){return e.split("-")[0]}function Fi(e){return e.split("-")[1]}function hs(e){return e==="x"?"y":"x"}function ps(e){return e==="y"?"height":"width"}function Ut(e){return["top","bottom"].includes(gt(e))?"y":"x"}function ms(e){return hs(Ut(e))}function Ha(e,t,i){i===void 0&&(i=!1);const n=Fi(e),o=ms(e),s=ps(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=Ci(r)),[r,Ci(r)]}function Ba(e){const t=Ci(e);return[hn(e),t,hn(t)]}function hn(e){return e.replace(/start|end/g,t=>Fa[t])}function Ua(e,t,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?t?o:n:t?n:o;case"left":case"right":return t?s:r;default:return[]}}function Va(e,t,i,n){const o=Fi(e);let s=Ua(gt(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(hn)))),s}function Ci(e){return e.replace(/left|right|bottom|top/g,t=>Da[t])}function qa(e){return{top:0,right:0,bottom:0,left:0,...e}}function fs(e){return typeof e!="number"?qa(e):{top:e,right:e,bottom:e,left:e}}function se(e){const{x:t,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:t,right:t+n,bottom:i+o,x:t,y:i}}function oo(e,t,i){let{reference:n,floating:o}=e;const s=Ut(t),r=ms(t),a=ps(r),l=gt(t),u=s==="y",d=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2,h=n[a]/2-o[a]/2;let p;switch(l){case"top":p={x:d,y:n.y-o.height};break;case"bottom":p={x:d,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:c};break;case"left":p={x:n.x-o.width,y:c};break;default:p={x:n.x,y:n.y}}switch(Fi(t)){case"start":p[r]-=h*(i&&u?-1:1);break;case"end":p[r]+=h*(i&&u?-1:1);break}return p}const Wa=async(e,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,a=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let u=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:d,y:c}=oo(u,n,l),h=n,p={},b=0;for(let y=0;y<a.length;y++){const{name:g,fn:f}=a[y],{x:_,y:w,data:x,reset:A}=await f({x:d,y:c,initialPlacement:n,placement:h,strategy:o,middlewareData:p,rects:u,platform:r,elements:{reference:e,floating:t}});d=_??d,c=w??c,p={...p,[g]:{...p[g],...x}},A&&b<=50&&(b++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(u=A.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):A.rects),{x:d,y:c}=oo(u,h,l)),y=-1)}return{x:d,y:c,placement:h,strategy:o,middlewareData:p}};async function bs(e,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:s,rects:r,elements:a,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:h=!1,padding:p=0}=Ze(t,e),b=fs(p),y=a[h?c==="floating"?"reference":"floating":c],g=se(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(y)))==null||i?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:u,rootBoundary:d,strategy:l})),f=c==="floating"?{x:n,y:o,width:r.floating.width,height:r.floating.height}:r.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),w=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=se(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:f,offsetParent:_,strategy:l}):f);return{top:(g.top-x.top+b.top)/w.y,bottom:(x.bottom-g.bottom+b.bottom)/w.y,left:(g.left-x.left+b.left)/w.x,right:(x.right-g.right+b.right)/w.x}}const Ya=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:a,platform:l,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:y=!0,...g}=Ze(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const f=gt(o),_=Ut(a),w=gt(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(u.floating)),A=h||(w||!y?[Ci(a)]:Ba(a)),C=b!=="none";!h&&C&&A.push(...Va(a,y,b,x));const O=[a,...A],N=await bs(t,g),S=[];let E=((n=s.flip)==null?void 0:n.overflows)||[];if(d&&S.push(N[f]),c){const $=Ha(o,r,x);S.push(N[$[0]],N[$[1]])}if(E=[...E,{placement:o,overflows:S}],!S.every($=>$<=0)){var B,Y;const $=(((B=s.flip)==null?void 0:B.index)||0)+1,L=O[$];if(L)return{data:{index:$,overflows:E},reset:{placement:L}};let V=(Y=E.filter(tt=>tt.overflows[0]<=0).sort((tt,et)=>tt.overflows[1]-et.overflows[1])[0])==null?void 0:Y.placement;if(!V)switch(p){case"bestFit":{var q;const tt=(q=E.filter(et=>{if(C){const ut=Ut(et.placement);return ut===_||ut==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(ut=>ut>0).reduce((ut,Ae)=>ut+Ae,0)]).sort((et,ut)=>et[1]-ut[1])[0])==null?void 0:q[0];tt&&(V=tt);break}case"initialPlacement":V=a;break}if(o!==V)return{reset:{placement:V}}}return{}}}};function gs(e){const t=oe(...e.map(s=>s.left)),i=oe(...e.map(s=>s.top)),n=bt(...e.map(s=>s.right)),o=bt(...e.map(s=>s.bottom));return{x:t,y:i,width:n-t,height:o-i}}function Ga(e){const t=e.slice().sort((o,s)=>o.y-s.y),i=[];let n=null;for(let o=0;o<t.length;o++){const s=t[o];!n||s.y-n.y>n.height/2?i.push([s]):i[i.length-1].push(s),n=s}return i.map(o=>se(gs(o)))}const Xa=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:n,rects:o,platform:s,strategy:r}=t,{padding:a=2,x:l,y:u}=Ze(e,t),d=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(n.reference))||[]),c=Ga(d),h=se(gs(d)),p=fs(a);function b(){if(c.length===2&&c[0].left>c[1].right&&l!=null&&u!=null)return c.find(g=>l>g.left-p.left&&l<g.right+p.right&&u>g.top-p.top&&u<g.bottom+p.bottom)||h;if(c.length>=2){if(Ut(i)==="y"){const E=c[0],B=c[c.length-1],Y=gt(i)==="top",q=E.top,$=B.bottom,L=Y?E.left:B.left,V=Y?E.right:B.right,tt=V-L,et=$-q;return{top:q,bottom:$,left:L,right:V,width:tt,height:et,x:L,y:q}}const g=gt(i)==="left",f=bt(...c.map(E=>E.right)),_=oe(...c.map(E=>E.left)),w=c.filter(E=>g?E.left===_:E.right===f),x=w[0].top,A=w[w.length-1].bottom,C=_,O=f,N=O-C,S=A-x;return{top:x,bottom:A,left:C,right:O,width:N,height:S,x:C,y:x}}return h}const y=await s.getElementRects({reference:{getBoundingClientRect:b},floating:n.floating,strategy:r});return o.reference.x!==y.reference.x||o.reference.y!==y.reference.y||o.reference.width!==y.reference.width||o.reference.height!==y.reference.height?{reset:{rects:y}}:{}}}};async function Ja(e,t){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),r=gt(i),a=Fi(i),l=Ut(i)==="y",u=["left","top"].includes(r)?-1:1,d=s&&l?-1:1,c=Ze(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return a&&typeof b=="number"&&(p=a==="end"?b*-1:b),l?{x:p*d,y:h*u}:{x:h*u,y:p*d}}const vs=function(e){return{name:"offset",options:e,async fn(t){var i,n;const{x:o,y:s,placement:r,middlewareData:a}=t,l=await Ja(t,e);return r===((i=a.offset)==null?void 0:i.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:o+l.x,y:s+l.y,data:{...l,placement:r}}}}},Qa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:o}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:a={fn:g=>{let{x:f,y:_}=g;return{x:f,y:_}}},...l}=Ze(e,t),u={x:i,y:n},d=await bs(t,l),c=Ut(gt(o)),h=hs(c);let p=u[h],b=u[c];if(s){const g=h==="y"?"top":"left",f=h==="y"?"bottom":"right",_=p+d[g],w=p-d[f];p=no(_,p,w)}if(r){const g=c==="y"?"top":"left",f=c==="y"?"bottom":"right",_=b+d[g],w=b-d[f];b=no(_,b,w)}const y=a.fn({...t,[h]:p,[c]:b});return{...y,data:{x:y.x-i,y:y.y-n,enabled:{[h]:s,[c]:r}}}}}};function Hi(){return typeof window<"u"}function Et(e){return ys(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kt(e){var t;return(t=(ys(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function ys(e){return Hi()?e instanceof Node||e instanceof Q(e).Node:!1}function ht(e){return Hi()?e instanceof Element||e instanceof Q(e).Element:!1}function pt(e){return Hi()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function so(e){return!Hi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function Ke(e){const{overflow:t,overflowX:i,overflowY:n,display:o}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(o)}function Za(e){return["table","td","th"].includes(Et(e))}function Ka(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Pn(e){const t=In(),i=ht(e)?it(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function tl(e){let t=re(e);for(;pt(t)&&!Bi(t);){if(Pn(t))return t;if(Ka(t))return null;t=re(t)}return null}function In(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bi(e){return["html","body","#document"].includes(Et(e))}function it(e){return Q(e).getComputedStyle(e)}function Ui(e){return ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function re(e){if(Et(e)==="html")return e;const t=e.assignedSlot||e.parentNode||so(e)&&e.host||kt(e);return so(t)?t.host:t}function _s(e){const t=re(e);return Bi(t)?e.ownerDocument?e.ownerDocument.body:e.body:pt(t)&&Ke(t)?t:_s(t)}function ws(e,t,i){var n;t===void 0&&(t=[]);const o=_s(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=Q(o);return s?(el(r),t.concat(r,r.visualViewport||[],Ke(o)?o:[],[])):t.concat(o,ws(o,[]))}function el(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function xs(e){const t=it(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=pt(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,a=$i(i)!==s||$i(n)!==r;return a&&(i=s,n=r),{width:i,height:n,$:a}}function $s(e){return ht(e)?e:e.contextElement}function te(e){const t=$s(e);if(!pt(t))return At(1);const i=t.getBoundingClientRect(),{width:n,height:o,$:s}=xs(t);let r=(s?$i(i.width):i.width)/n,a=(s?$i(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const il=At(0);function Cs(e){const t=Q(e);return!In()||!t.visualViewport?il:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nl(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Q(e)?!1:t}function ze(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=$s(e);let r=At(1);t&&(n?ht(n)&&(r=te(n)):r=te(e));const a=nl(s,i,n)?Cs(s):At(0);let l=(o.left+a.x)/r.x,u=(o.top+a.y)/r.y,d=o.width/r.x,c=o.height/r.y;if(s){const h=Q(s),p=n&&ht(n)?Q(n):n;let b=h,y=b.frameElement;for(;y&&n&&p!==b;){const g=te(y),f=y.getBoundingClientRect(),_=it(y),w=f.left+(y.clientLeft+parseFloat(_.paddingLeft))*g.x,x=f.top+(y.clientTop+parseFloat(_.paddingTop))*g.y;l*=g.x,u*=g.y,d*=g.x,c*=g.y,l+=w,u+=x,b=Q(y),y=b.frameElement}}return se({width:d,height:c,x:l,y:u})}const ol=[":popover-open",":modal"];function As(e){return ol.some(t=>{try{return e.matches(t)}catch{return!1}})}function sl(e){let{elements:t,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=kt(n),a=t?As(t.floating):!1;if(n===r||a&&s)return i;let l={scrollLeft:0,scrollTop:0},u=At(1);const d=At(0),c=pt(n);if((c||!c&&!s)&&((Et(n)!=="body"||Ke(r))&&(l=Ui(n)),pt(n))){const h=ze(n);u=te(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}return{width:i.width*u.x,height:i.height*u.y,x:i.x*u.x-l.scrollLeft*u.x+d.x,y:i.y*u.y-l.scrollTop*u.y+d.y}}function rl(e){return Array.from(e.getClientRects())}function Es(e){return ze(kt(e)).left+Ui(e).scrollLeft}function al(e){const t=kt(e),i=Ui(e),n=e.ownerDocument.body,o=bt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=bt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+Es(e);const a=-i.scrollTop;return it(n).direction==="rtl"&&(r+=bt(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:a}}function ll(e,t){const i=Q(e),n=kt(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,a=0,l=0;if(o){s=o.width,r=o.height;const u=In();(!u||u&&t==="fixed")&&(a=o.offsetLeft,l=o.offsetTop)}return{width:s,height:r,x:a,y:l}}function cl(e,t){const i=ze(e,!0,t==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=pt(e)?te(e):At(1),r=e.clientWidth*s.x,a=e.clientHeight*s.y,l=o*s.x,u=n*s.y;return{width:r,height:a,x:l,y:u}}function ro(e,t,i){let n;if(t==="viewport")n=ll(e,i);else if(t==="document")n=al(kt(e));else if(ht(t))n=cl(t,i);else{const o=Cs(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return se(n)}function Ss(e,t){const i=re(e);return i===t||!ht(i)||Bi(i)?!1:it(i).position==="fixed"||Ss(i,t)}function ul(e,t){const i=t.get(e);if(i)return i;let n=ws(e,[]).filter(a=>ht(a)&&Et(a)!=="body"),o=null;const s=it(e).position==="fixed";let r=s?re(e):e;for(;ht(r)&&!Bi(r);){const a=it(r),l=Pn(r);!l&&a.position==="fixed"&&(o=null),(s?!l&&!o:!l&&a.position==="static"&&o&&["absolute","fixed"].includes(o.position)||Ke(r)&&!l&&Ss(e,r))?n=n.filter(u=>u!==r):o=a,r=re(r)}return t.set(e,n),n}function dl(e){let{element:t,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?ul(t,this._c):[].concat(i),n],r=s[0],a=s.reduce((l,u)=>{const d=ro(t,u,o);return l.top=bt(d.top,l.top),l.right=oe(d.right,l.right),l.bottom=oe(d.bottom,l.bottom),l.left=bt(d.left,l.left),l},ro(t,r,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function hl(e){const{width:t,height:i}=xs(e);return{width:t,height:i}}function pl(e,t,i){const n=pt(t),o=kt(t),s=i==="fixed",r=ze(e,!0,s,t);let a={scrollLeft:0,scrollTop:0};const l=At(0);if(n||!n&&!s)if((Et(t)!=="body"||Ke(o))&&(a=Ui(t)),n){const c=ze(t,!0,s,t);l.x=c.x+t.clientLeft,l.y=c.y+t.clientTop}else o&&(l.x=Es(o));const u=r.left+a.scrollLeft-l.x,d=r.top+a.scrollTop-l.y;return{x:u,y:d,width:r.width,height:r.height}}function ao(e,t){return!pt(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function ks(e,t){const i=Q(e);if(!pt(e)||As(e))return i;let n=ao(e,t);for(;n&&Za(n)&&it(n).position==="static";)n=ao(n,t);return n&&(Et(n)==="html"||Et(n)==="body"&&it(n).position==="static"&&!Pn(n))?i:n||tl(e)||i}const ml=async function(e){const t=this.getOffsetParent||ks,i=this.getDimensions;return{reference:pl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function fl(e){return it(e).direction==="rtl"}const bl={convertOffsetParentRelativeRectToViewportRelativeRect:sl,getDocumentElement:kt,getClippingRect:dl,getOffsetParent:ks,getElementRects:ml,getClientRects:rl,getDimensions:hl,getScale:te,isElement:ht,isRTL:fl},Ts=Qa,Os=Ya,Ps=Xa,Is=(e,t,i)=>{const n=new Map,o={platform:bl,...i},s={...o.platform,_c:n};return Wa(e,t,{...o,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=globalThis,Nn=vi.ShadowRoot&&(vi.ShadyCSS===void 0||vi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rn=Symbol(),lo=new WeakMap;let Ns=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Rn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Nn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=lo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&lo.set(t,e))}return e}toString(){return this.cssText}};const gl=e=>new Ns(typeof e=="string"?e:e+"",void 0,Rn),P=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Ns(i,e,Rn)},vl=(e,t)=>{if(Nn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=vi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},co=Nn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return gl(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yl,defineProperty:_l,getOwnPropertyDescriptor:wl,getOwnPropertyNames:xl,getOwnPropertySymbols:$l,getPrototypeOf:Cl}=Object,ae=globalThis,uo=ae.trustedTypes,Al=uo?uo.emptyScript:"",ho=ae.reactiveElementPolyfillSupport,Ie=(e,t)=>e,Ai={toAttribute(e,t){switch(t){case Boolean:e=e?Al:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Mn=(e,t)=>!yl(e,t),po={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Mn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ae.litPropertyMetadata??(ae.litPropertyMetadata=new WeakMap);class Zt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=po){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&_l(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=wl(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const a=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??po}static _$Ei(){if(this.hasOwnProperty(Ie("elementProperties")))return;const t=Cl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ie("properties"))){const i=this.properties,n=[...xl(i),...$l(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(co(o))}else t!==void 0&&i.push(co(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Ai).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Ai;this._$Em=s,this[s]=a.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Mn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},Zt[Ie("elementProperties")]=new Map,Zt[Ie("finalized")]=new Map,ho==null||ho({ReactiveElement:Zt}),(ae.reactiveElementVersions??(ae.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=globalThis,Si=Ei.trustedTypes,mo=Si?Si.createPolicy("lit-html",{createHTML:e=>e}):void 0,Rs="$lit$",$t=`lit$${Math.random().toFixed(9).slice(2)}$`,Ms="?"+$t,El=`<${Ms}>`,Vt=document,De=()=>Vt.createComment(""),Fe=e=>e===null||typeof e!="object"&&typeof e!="function",Ln=Array.isArray,Sl=e=>Ln(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",on=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fo=/-->/g,bo=/>/g,Lt=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),go=/'/g,vo=/"/g,Ls=/^(?:script|style|textarea|title)$/i,kl=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),m=kl(1),qt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),yo=new WeakMap,zt=Vt.createTreeWalker(Vt,129);function js(e,t){if(!Ln(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return mo!==void 0?mo.createHTML(t):t}const Tl=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=ke;for(let a=0;a<i;a++){const l=e[a];let u,d,c=-1,h=0;for(;h<l.length&&(r.lastIndex=h,d=r.exec(l),d!==null);)h=r.lastIndex,r===ke?d[1]==="!--"?r=fo:d[1]!==void 0?r=bo:d[2]!==void 0?(Ls.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=Lt):d[3]!==void 0&&(r=Lt):r===Lt?d[0]===">"?(r=o??ke,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?Lt:d[3]==='"'?vo:go):r===vo||r===go?r=Lt:r===fo||r===bo?r=ke:(r=Lt,o=void 0);const p=r===Lt&&e[a+1].startsWith("/>")?" ":"";s+=r===ke?l+El:c>=0?(n.push(u),l.slice(0,c)+Rs+l.slice(c)+$t+p):l+$t+(c===-2?a:p)}return[js(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class He{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[u,d]=Tl(t,i);if(this.el=He.createElement(u,n),zt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=zt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Rs)){const h=d[r++],p=o.getAttribute(c).split($t),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:b[2],strings:p,ctor:b[1]==="."?Pl:b[1]==="?"?Il:b[1]==="@"?Nl:Vi}),o.removeAttribute(c)}else c.startsWith($t)&&(l.push({type:6,index:s}),o.removeAttribute(c));if(Ls.test(o.tagName)){const c=o.textContent.split($t),h=c.length-1;if(h>0){o.textContent=Si?Si.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],De()),zt.nextNode(),l.push({type:2,index:++s});o.append(c[h],De())}}}else if(o.nodeType===8)if(o.data===Ms)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf($t,c+1))!==-1;)l.push({type:7,index:s}),c+=$t.length-1}s++}}static createElement(t,i){const n=Vt.createElement("template");return n.innerHTML=t,n}}function le(e,t,i=e,n){var o,s;if(t===qt)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const a=Fe(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),a===void 0?r=void 0:(r=new a(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=le(e,r._$AS(e,t.values),r,n)),t}class Ol{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Vt).importNode(i,!0);zt.currentNode=o;let s=zt.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let u;l.type===2?u=new ti(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Rl(s,this,t)),this._$AV.push(u),l=n[++a]}r!==(l==null?void 0:l.index)&&(s=zt.nextNode(),r++)}return zt.currentNode=Vt,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ti{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=le(this,t,i),Fe(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==qt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==M&&Fe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=He.createElement(js(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new Ol(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let i=yo.get(t.strings);return i===void 0&&yo.set(t.strings,i=new He(t)),i}k(t){Ln(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new ti(this.O(De()),this.O(De()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Vi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=M}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=le(this,t,i,0),r=!Fe(t)||t!==this._$AH&&t!==qt,r&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=le(this,a[n+l],i,l),u===qt&&(u=this._$AH[l]),r||(r=!Fe(u)||u!==this._$AH[l]),u===M?t=M:t!==M&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}r&&!o&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pl extends Vi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}class Il extends Vi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==M)}}class Nl extends Vi{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=le(this,t,i,0)??M)===qt)return;const n=this._$AH,o=t===M&&n!==M||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==M&&(n===M||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Rl{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){le(this,t)}}const _o=Ei.litHtmlPolyfillSupport;_o==null||_o(He,ti),(Ei.litHtmlVersions??(Ei.litHtmlVersions=[])).push("3.2.1");const ce=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new ti(t.insertBefore(De(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return qt}};var wo;T._$litElement$=!0,T.finalized=!0,(wo=globalThis.litElementHydrateSupport)==null||wo.call(globalThis,{LitElement:T});const xo=globalThis.litElementPolyfillSupport;xo==null||xo({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ml={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Mn},Ll=(e=Ml,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,e)},init(a){return a!==void 0&&this.P(r,void 0,e),a}}}if(n==="setter"){const{name:r}=i;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,e)}}throw Error("Unsupported decorator location: "+n)};function v(e){return(t,i)=>typeof i=="object"?Ll(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(e){return v({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs={ATTRIBUTE:1,CHILD:2},Ds=e=>(...t)=>({_$litDirective$:e,values:t});let Fs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Ne(o,t);return!0},ki=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Hs=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Fl(t)}};function zl(e){this._$AN!==void 0?(ki(this),this._$AM=e,Hs(this)):this._$AM=e}function Dl(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Ne(n[s],!1),ki(n[s]);else n!=null&&(Ne(n,!1),ki(n));else Ne(this,e)}const Fl=e=>{e.type==zs.CHILD&&(e._$AP??(e._$AP=Dl),e._$AQ??(e._$AQ=zl))};class Hl extends Fs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Hs(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(Ne(this,t),ki(this))}setValue(t){if(jl(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=()=>new Bl;class Bl{}const sn=new WeakMap,W=Ds(class extends Hl{render(e){return M}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),M}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=sn.get(t);i===void 0&&(i=new WeakMap,sn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=sn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Bs=Object.freeze({left:0,top:0,width:16,height:16}),Ti=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ei=Object.freeze({...Bs,...Ti}),pn=Object.freeze({...ei,body:"",hidden:!1}),Ul=Object.freeze({width:null,height:null}),Us=Object.freeze({...Ul,...Ti});function Vl(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function n(o){for(;o<0;)o+=4;return o%4}if(i===""){const o=parseInt(e);return isNaN(o)?0:n(o)}else if(i!==e){let o=0;switch(i){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-i.length));return isNaN(s)?0:(s=s/o,s%1===0?n(s):0)}}return t}const ql=/[\s,]+/;function Wl(e,t){t.split(ql).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Vs={...Us,preserveAspectRatio:""};function $o(e){const t={...Vs},i=(n,o)=>e.getAttribute(n)||o;return t.width=i("width",null),t.height=i("height",null),t.rotate=Vl(i("rotate","")),Wl(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function Yl(e,t){for(const i in Vs)if(e[i]!==t[i])return!0;return!1}const Re=/^[a-z0-9]+(-[a-z0-9]+)*$/,ii=(e,t,i,n="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const a=o.pop(),l=o.pop(),u={provider:o.length>0?o[0]:n,prefix:l,name:a};return t&&!yi(u)?null:u}const s=o[0],r=s.split("-");if(r.length>1){const a={provider:n,prefix:r.shift(),name:r.join("-")};return t&&!yi(a)?null:a}if(i&&n===""){const a={provider:n,prefix:"",name:s};return t&&!yi(a,i)?null:a}return null},yi=(e,t)=>e?!!((e.provider===""||e.provider.match(Re))&&(t&&e.prefix===""||e.prefix.match(Re))&&e.name.match(Re)):!1;function Gl(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(i.rotate=n),i}function Co(e,t){const i=Gl(e,t);for(const n in pn)n in Ti?n in e&&!(n in i)&&(i[n]=Ti[n]):n in t?i[n]=t[n]:n in e&&(i[n]=e[n]);return i}function Xl(e,t){const i=e.icons,n=e.aliases||Object.create(null),o=Object.create(null);function s(r){if(i[r])return o[r]=[];if(!(r in o)){o[r]=null;const a=n[r]&&n[r].parent,l=a&&s(a);l&&(o[r]=[a].concat(l))}return o[r]}return Object.keys(i).concat(Object.keys(n)).forEach(s),o}function Jl(e,t,i){const n=e.icons,o=e.aliases||Object.create(null);let s={};function r(a){s=Co(n[a]||o[a],s)}return r(t),i.forEach(r),Co(e,s)}function qs(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),i.push(o)});const n=Xl(e);for(const o in n){const s=n[o];s&&(t(o,Jl(e,o,s)),i.push(o))}return i}const Ql={provider:"",aliases:{},not_found:{},...Bs};function rn(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Ws(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!rn(e,Ql))return null;const i=t.icons;for(const o in i){const s=i[o];if(!o.match(Re)||typeof s.body!="string"||!rn(s,pn))return null}const n=t.aliases||Object.create(null);for(const o in n){const s=n[o],r=s.parent;if(!o.match(Re)||typeof r!="string"||!i[r]&&!n[r]||!rn(s,pn))return null}return t}const Oi=Object.create(null);function Zl(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function St(e,t){const i=Oi[e]||(Oi[e]=Object.create(null));return i[t]||(i[t]=Zl(e,t))}function jn(e,t){return Ws(t)?qs(t,(i,n)=>{n?e.icons[i]=n:e.missing.add(i)}):[]}function Kl(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function tc(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Oi)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Oi[n]||{})).forEach(o=>{const s=St(n,o);i=i.concat(Object.keys(s.icons).map(r=>(n!==""?"@"+n+":":"")+o+":"+r))})}),i}let Be=!1;function Ys(e){return typeof e=="boolean"&&(Be=e),Be}function Ue(e){const t=typeof e=="string"?ii(e,!0,Be):e;if(t){const i=St(t.provider,t.prefix),n=t.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function Gs(e,t){const i=ii(e,!0,Be);if(!i)return!1;const n=St(i.provider,i.prefix);return Kl(n,i.name,t)}function Ao(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Be&&!t&&!e.prefix){let o=!1;return Ws(e)&&(e.prefix="",qs(e,(s,r)=>{r&&Gs(s,r)&&(o=!0)})),o}const i=e.prefix;if(!yi({provider:t,prefix:i,name:"a"}))return!1;const n=St(t,i);return!!jn(n,e)}function Eo(e){return!!Ue(e)}function ec(e){const t=Ue(e);return t?{...ei,...t}:null}function ic(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return e.forEach(o=>{if(n.name===o.name&&n.prefix===o.prefix&&n.provider===o.provider)return;n=o;const s=o.provider,r=o.prefix,a=o.name,l=i[s]||(i[s]=Object.create(null)),u=l[r]||(l[r]=St(s,r));let d;a in u.icons?d=t.loaded:r===""||u.missing.has(a)?d=t.missing:d=t.pending;const c={provider:s,prefix:r,name:a};d.push(c)}),t}function Xs(e,t){e.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(o=>o.id!==t))})}function nc(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const n=e.provider,o=e.prefix;t.forEach(s=>{const r=s.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==o)return!0;const u=l.name;if(e.icons[u])r.loaded.push({provider:n,prefix:o,name:u});else if(e.missing.has(u))r.missing.push({provider:n,prefix:o,name:u});else return i=!0,!0;return!1}),r.pending.length!==a&&(i||Xs([e],s.id),s.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),s.abort))})}))}let oc=0;function sc(e,t,i){const n=oc++,o=Xs.bind(null,i,n);if(!t.pending.length)return o;const s={id:n,icons:t,callback:e,abort:o};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(s)}),o}const mn=Object.create(null);function So(e,t){mn[e]=t}function fn(e){return mn[e]||mn[""]}function rc(e,t=!0,i=!1){const n=[];return e.forEach(o=>{const s=typeof o=="string"?ii(o,t,i):o;s&&n.push(s)}),n}var ac={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function lc(e,t,i,n){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let r;if(e.random){let C=e.resources.slice(0);for(r=[];C.length>1;){const O=Math.floor(Math.random()*C.length);r.push(C[O]),C=C.slice(0,O).concat(C.slice(O+1))}r=r.concat(C)}else r=e.resources.slice(s).concat(e.resources.slice(0,s));const a=Date.now();let l="pending",u=0,d,c=null,h=[],p=[];typeof n=="function"&&p.push(n);function b(){c&&(clearTimeout(c),c=null)}function y(){l==="pending"&&(l="aborted"),b(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function g(C,O){O&&(p=[]),typeof C=="function"&&p.push(C)}function f(){return{startTime:a,payload:t,status:l,queriesSent:u,queriesPending:h.length,subscribe:g,abort:y}}function _(){l="failed",p.forEach(C=>{C(void 0,d)})}function w(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function x(C,O,N){const S=O!=="success";switch(h=h.filter(E=>E!==C),l){case"pending":break;case"failed":if(S||!e.dataAfterTimeout)return;break;default:return}if(O==="abort"){d=N,_();return}if(S){d=N,h.length||(r.length?A():_());return}if(b(),w(),!e.random){const E=e.resources.indexOf(C.resource);E!==-1&&E!==e.index&&(e.index=E)}l="completed",p.forEach(E=>{E(N)})}function A(){if(l!=="pending")return;b();const C=r.shift();if(C===void 0){if(h.length){c=setTimeout(()=>{b(),l==="pending"&&(w(),_())},e.timeout);return}_();return}const O={status:"pending",resource:C,callback:(N,S)=>{x(O,N,S)}};h.push(O),u++,c=setTimeout(A,e.rotate),i(C,t,O.callback)}return setTimeout(A),f}function Js(e){const t={...ac,...e};let i=[];function n(){i=i.filter(r=>r().status==="pending")}function o(r,a,l){const u=lc(t,r,a,(d,c)=>{n(),l&&l(d,c)});return i.push(u),u}function s(r){return i.find(a=>r(a))||null}return{query:o,find:s,setIndex:r=>{t.index=r},getIndex:()=>t.index,cleanup:n}}function zn(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const qi=Object.create(null),mi=["https://api.simplesvg.com","https://api.unisvg.com"],bn=[];for(;mi.length>0;)mi.length===1||Math.random()>.5?bn.push(mi.shift()):bn.push(mi.pop());qi[""]=zn({resources:["https://api.iconify.design"].concat(bn)});function ko(e,t){const i=zn(t);return i===null?!1:(qi[e]=i,!0)}function Wi(e){return qi[e]}function cc(){return Object.keys(qi)}function To(){}const an=Object.create(null);function uc(e){if(!an[e]){const t=Wi(e);if(!t)return;const i=Js(t),n={config:t,redundancy:i};an[e]=n}return an[e]}function Qs(e,t,i){let n,o;if(typeof e=="string"){const s=fn(e);if(!s)return i(void 0,424),To;o=s.send;const r=uc(e);r&&(n=r.redundancy)}else{const s=zn(e);if(s){n=Js(s);const r=e.resources?e.resources[0]:"",a=fn(r);a&&(o=a.send)}}return!n||!o?(i(void 0,424),To):n.query(t,o,i)().abort}const Oo="iconify2",Ve="iconify",Zs=Ve+"-count",Po=Ve+"-version",Ks=36e5,dc=168,hc=50;function gn(e,t){try{return e.getItem(t)}catch{}}function Dn(e,t,i){try{return e.setItem(t,i),!0}catch{}}function Io(e,t){try{e.removeItem(t)}catch{}}function vn(e,t){return Dn(e,Zs,t.toString())}function yn(e){return parseInt(gn(e,Zs))||0}const Ft={local:!0,session:!0},tr={local:new Set,session:new Set};let Fn=!1;function pc(e){Fn=e}let fi=typeof window>"u"?{}:window;function er(e){const t=e+"Storage";try{if(fi&&fi[t]&&typeof fi[t].length=="number")return fi[t]}catch{}Ft[e]=!1}function ir(e,t){const i=er(e);if(!i)return;const n=gn(i,Po);if(n!==Oo){if(n){const a=yn(i);for(let l=0;l<a;l++)Io(i,Ve+l.toString())}Dn(i,Po,Oo),vn(i,0);return}const o=Math.floor(Date.now()/Ks)-dc,s=a=>{const l=Ve+a.toString(),u=gn(i,l);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>o&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,a))return!0}catch{}Io(i,l)}};let r=yn(i);for(let a=r-1;a>=0;a--)s(a)||(a===r-1?(r--,vn(i,r)):tr[e].add(a))}function nr(){if(!Fn){pc(!0);for(const e in Ft)ir(e,t=>{const i=t.data,n=t.provider,o=i.prefix,s=St(n,o);if(!jn(s,i).length)return!1;const r=i.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,r):r,!0})}}function mc(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const n in Ft)ir(n,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function fc(e,t){Fn||nr();function i(n){let o;if(!Ft[n]||!(o=er(n)))return;const s=tr[n];let r;if(s.size)s.delete(r=Array.from(s).shift());else if(r=yn(o),r>=hc||!vn(o,r+1))return;const a={cached:Math.floor(Date.now()/Ks),provider:e.provider,data:t};return Dn(o,Ve+r.toString(),JSON.stringify(a))}t.lastModified&&!mc(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function No(){}function bc(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,nc(e)}))}function gc(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:n}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;!o||!(s=fn(i))||s.prepare(i,n,o).forEach(r=>{Qs(i,r,a=>{if(typeof a!="object")r.icons.forEach(l=>{e.missing.add(l)});else try{const l=jn(e,a);if(!l.length)return;const u=e.pendingIcons;u&&l.forEach(d=>{u.delete(d)}),fc(e,a)}catch(l){console.error(l)}bc(e)})})}))}const Hn=(e,t)=>{const i=rc(e,!0,Ys()),n=ic(i);if(!n.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(n.loaded,n.missing,n.pending,No)}),()=>{l=!1}}const o=Object.create(null),s=[];let r,a;return n.pending.forEach(l=>{const{provider:u,prefix:d}=l;if(d===a&&u===r)return;r=u,a=d,s.push(St(u,d));const c=o[u]||(o[u]=Object.create(null));c[d]||(c[d]=[])}),n.pending.forEach(l=>{const{provider:u,prefix:d,name:c}=l,h=St(u,d),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(c)||(p.add(c),o[u][d].push(c))}),s.forEach(l=>{const{provider:u,prefix:d}=l;o[u][d].length&&gc(l,o[u][d])}),t?sc(t,n,s):No},vc=e=>new Promise((t,i)=>{const n=typeof e=="string"?ii(e,!0):e;if(!n){i(e);return}Hn([n||e],o=>{if(o.length&&n){const s=Ue(n);if(s){t({...ei,...s});return}}i(e)})});function yc(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function _c(e,t){const i=typeof e=="string"?ii(e,!0,!0):null;if(!i){const s=yc(e);return{value:e,data:s}}const n=Ue(i);if(n!==void 0||!i.prefix)return{value:e,name:i,data:n};const o=Hn([i],()=>t(e,i,Ue(i)));return{value:e,name:i,loading:o}}function ln(e){return e.hasAttribute("inline")}let or=!1;try{or=navigator.vendor.indexOf("Apple")===0}catch{}function wc(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(or||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const xc=/(-?[0-9.]*[0-9]+[0-9.]*)/g,$c=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function _n(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const n=e.split(xc);if(n===null||!n.length)return e;const o=[];let s=n.shift(),r=$c.test(s);for(;;){if(r){const a=parseFloat(s);isNaN(a)?o.push(s):o.push(Math.ceil(a*t*i)/i)}else o.push(s);if(s=n.shift(),s===void 0)return o.join("");r=!r}}function Cc(e,t="defs"){let i="";const n=e.indexOf("<"+t);for(;n>=0;){const o=e.indexOf(">",n),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const r=e.indexOf(">",s);if(r===-1)break;i+=e.slice(o+1,s).trim(),e=e.slice(0,n).trim()+e.slice(r+1)}return{defs:i,content:e}}function Ac(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ec(e,t,i){const n=Cc(e);return Ac(n.defs,t+n.content+i)}const Sc=e=>e==="unset"||e==="undefined"||e==="none";function sr(e,t){const i={...ei,...e},n={...Us,...t},o={left:i.left,top:i.top,width:i.width,height:i.height};let s=i.body;[i,n].forEach(y=>{const g=[],f=y.hFlip,_=y.vFlip;let w=y.rotate;f?_?w+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):_&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=o.height/2+o.top,g.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:x=o.width/2+o.left,g.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(o.left!==o.top&&(x=o.left,o.left=o.top,o.top=x),o.width!==o.height&&(x=o.width,o.width=o.height,o.height=x)),g.length&&(s=Ec(s,'<g transform="'+g.join(" ")+'">',"</g>"))});const r=n.width,a=n.height,l=o.width,u=o.height;let d,c;r===null?(c=a===null?"1em":a==="auto"?u:a,d=_n(c,l/u)):(d=r==="auto"?l:r,c=a===null?_n(d,u/l):a==="auto"?u:a);const h={},p=(y,g)=>{Sc(g)||(h[y]=g.toString())};p("width",d),p("height",c);const b=[o.left,o.top,l,u];return h.viewBox=b.join(" "),{attributes:h,viewBox:b,body:s}}function Bn(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)i+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function kc(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Tc(e){return"data:image/svg+xml,"+kc(e)}function rr(e){return'url("'+Tc(e)+'")'}const Oc=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Pi=Oc();function Pc(e){Pi=e}function Ic(){return Pi}function Nc(e,t){const i=Wi(e);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let o=0;i.resources.forEach(r=>{o=Math.max(o,r.length)});const s=t+".json?icons=";n=i.maxURL-o-i.path.length-s.length}return n}function Rc(e){return e===404}const Mc=(e,t,i)=>{const n=[],o=Nc(e,t),s="icons";let r={type:s,provider:e,prefix:t,icons:[]},a=0;return i.forEach((l,u)=>{a+=l.length+1,a>=o&&u>0&&(n.push(r),r={type:s,provider:e,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),n.push(r),n};function Lc(e){if(typeof e=="string"){const t=Wi(e);if(t)return t.path}return"/"}const jc=(e,t,i)=>{if(!Pi){i("abort",424);return}let n=Lc(t.provider);switch(t.type){case"icons":{const s=t.prefix,r=t.icons.join(","),a=new URLSearchParams({icons:r});n+=s+".json?"+a.toString();break}case"custom":{const s=t.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:i("abort",400);return}let o=503;Pi(e+n).then(s=>{const r=s.status;if(r!==200){setTimeout(()=>{i(Rc(r)?"abort":"next",r)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?i("abort",s):i("next",o)});return}setTimeout(()=>{i("success",s)})}).catch(()=>{i("next",o)})},zc={prepare:Mc,send:jc};function Ro(e,t){switch(e){case"local":case"session":Ft[e]=t;break;case"all":for(const i in Ft)Ft[i]=t;break}}const cn="data-style";let ar="";function Dc(e){ar=e}function Mo(e,t){let i=Array.from(e.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(cn));i||(i=document.createElement("style"),i.setAttribute(cn,cn),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+ar}function lr(){So("",zc),Ys(!0);let e;try{e=window}catch{}if(e){if(nr(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Ao(n))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const n="IconifyProviders["+i+"] is invalid.";try{const o=t[i];if(typeof o!="object"||!o||o.resources===void 0)continue;ko(i,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:t=>Ro(t,!0),disableCache:t=>Ro(t,!1),iconLoaded:Eo,iconExists:Eo,getIcon:ec,listIcons:tc,addIcon:Gs,addCollection:Ao,calculateSize:_n,buildIcon:sr,iconToHTML:Bn,svgToURL:rr,loadIcons:Hn,loadIcon:vc,addAPIProvider:ko,appendCustomStyle:Dc,_api:{getAPIConfig:Wi,setAPIModule:So,sendAPIQuery:Qs,setFetch:Pc,getFetch:Ic,listAPIProviders:cc}}}const wn={"background-color":"currentColor"},cr={"background-color":"transparent"},Lo={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},jo={"-webkit-mask":wn,mask:wn,background:cr};for(const e in jo){const t=jo[e];for(const i in Lo)t[e+"-"+i]=Lo[i]}function zo(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Fc(e,t,i){const n=document.createElement("span");let o=e.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const s=e.attributes,r=Bn(o,{...s,width:t.width+"",height:t.height+""}),a=rr(r),l=n.style,u={"--svg":a,width:zo(s.width),height:zo(s.height),...i?wn:cr};for(const d in u)l.setProperty(d,u[d]);return n}let Me;function Hc(){try{Me=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Me=null}}function Bc(e){return Me===void 0&&Hc(),Me?Me.createHTML(e):e}function Uc(e){const t=document.createElement("span"),i=e.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const o=Bn(e.body,i);return t.innerHTML=Bc(o),t.firstChild}function xn(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function Do(e,t){const i=t.icon.data,n=t.customisations,o=sr(i,n);n.preserveAspectRatio&&(o.attributes.preserveAspectRatio=n.preserveAspectRatio);const s=t.renderedMode;let r;switch(s){case"svg":r=Uc(o);break;default:r=Fc(o,{...ei,...i},s==="mask")}const a=xn(e);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):e.replaceChild(r,a):e.appendChild(r)}function Fo(e,t,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:n}}function Vc(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const n=t.get(e);if(n)return n;const o=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends i{constructor(){super(),Mt(this,"_shadowRoot"),Mt(this,"_initialised",!1),Mt(this,"_state"),Mt(this,"_checkQueued",!1),Mt(this,"_connected",!1),Mt(this,"_observer",null),Mt(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=ln(this);Mo(a,l),this._state=Fo({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=ln(this),u=this._state;l!==u.inline&&(u.inline=l,Mo(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return ln(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}Do(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const u=this.getAttribute("mode"),d=$o(this);(a.attrMode!==u||Yl(a.customisations,d)||!xn(this._shadowRoot))&&this._renderIcon(a.icon,d,u)}_iconChanged(a){const l=_c(a,(u,d,c)=>{const h=this._state;if(h.rendered||this.getAttribute("icon")!==u)return;const p={value:u,name:d,data:c};p.data?this._gotIconData(p):h.icon=p});l.data?this._gotIconData(l):this._state=Fo(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=xn(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,$o(this),this.getAttribute("mode"))}_renderIcon(a,l,u){const d=wc(a.data.body,u),c=this._state.inline;Do(this._shadowRoot,this._state={rendered:!0,icon:a,inline:c,customisations:l,attrMode:u,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(u=>u.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};o.forEach(a=>{a in s.prototype||Object.defineProperty(s.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=lr();for(const a in r)s[a]=s.prototype[a]=r[a];return t.define(e,s),s}const qc=Vc()||lr(),{enableCache:np,disableCache:op,iconLoaded:sp,iconExists:rp,getIcon:ap,listIcons:lp,addIcon:cp,addCollection:up,calculateSize:dp,buildIcon:hp,iconToHTML:pp,svgToURL:mp,loadIcons:fp,loadIcon:bp,addAPIProvider:gp,_api:vp}=qc,Wc=P`
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
`,Yc=P`
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
`,Tt={scrollbar:Wc,globalStyles:Yc},ur=class k{static set config(t){this._config={...k._config,...t}}static get config(){return k._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Tt.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){k.init()}static init(t="",i=!0){k.addGlobalStyles(),k.defineCustomElement("bim-button",Kc),k.defineCustomElement("bim-checkbox",ge),k.defineCustomElement("bim-color-input",Gt),k.defineCustomElement("bim-context-menu",Cn),k.defineCustomElement("bim-dropdown",vt),k.defineCustomElement("bim-grid",Vn),k.defineCustomElement("bim-icon",au),k.defineCustomElement("bim-input",oi),k.defineCustomElement("bim-label",ye),k.defineCustomElement("bim-number-input",K),k.defineCustomElement("bim-option",H),k.defineCustomElement("bim-panel",Xt),k.defineCustomElement("bim-panel-section",_e),k.defineCustomElement("bim-selector",we),k.defineCustomElement("bim-table",st),k.defineCustomElement("bim-tabs",It),k.defineCustomElement("bim-tab",X),k.defineCustomElement("bim-table-cell",Ar),k.defineCustomElement("bim-table-children",Sr),k.defineCustomElement("bim-table-group",Tr),k.defineCustomElement("bim-table-row",Jt),k.defineCustomElement("bim-text-input",rt),k.defineCustomElement("bim-toolbar",Zi),k.defineCustomElement("bim-toolbar-group",Ji),k.defineCustomElement("bim-toolbar-section",Ce),k.defineCustomElement("bim-viewport",Fr),i&&this.animateOnLoad(t)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const o=Math.floor(Math.random()*t.length);i+=t.charAt(o)}return i}static animateOnLoad(t=""){const i=`
      bim-input,
      bim-button,
      bim-checkbox,
      bim-selector,
      bim-label,
      bim-table-row,
      bim-panel-section,
      bim-table-children .branch-vertical,
      .switchers
    `,n=[];function o(s,r=document,a=new Set){const l=[];return Array.from(r.querySelectorAll(s)).forEach(u=>{a.has(u)||(a.add(u),l.push(u))}),Array.from(r.querySelectorAll("*")).filter(u=>u.shadowRoot).forEach(u=>{a.has(u)||(a.add(u),l.push(...o(s,u.shadowRoot,a)))}),l}requestAnimationFrame(()=>{o(t||i).forEach(r=>{const a=r;let l="auto";l=window.getComputedStyle(a).getPropertyValue("transition"),a.style.setProperty("opacity","0"),a.style.setProperty("transition","none"),requestAnimationFrame(()=>{a.style.setProperty("transition",l)}),n.push(a)});const s=()=>{n.forEach(r=>{const a=r,l=(a.getBoundingClientRect().x+a.getBoundingClientRect().y)/(window.innerWidth+window.innerHeight),u=window.getComputedStyle(a).getPropertyValue("transform"),d=400,c=200+l*1e3;a.animate([{transform:"translateY(-20px)",opacity:"0"},{transform:"translateY(0)",opacity:"1"}],{duration:d,easing:"ease-in-out",delay:c}),setTimeout(()=>{a.style.removeProperty("opacity"),u!=="none"?a.style.setProperty("transform",u):a.style.removeProperty("transform")},c+d)})};document.readyState==="complete"?s():window.addEventListener("load",s)})}static toggleTheme(t=!0){const i=document.querySelector("html");if(!i)return;const n=()=>{i.classList.contains("bim-ui-dark")?i.classList.replace("bim-ui-dark","bim-ui-light"):i.classList.contains("bim-ui-light")?i.classList.replace("bim-ui-light","bim-ui-dark"):i.classList.add("bim-ui-light")};if(t){const o=document.createElement("div");o.classList.add("theme-transition-overlay");const s=document.createElement("div");o.appendChild(s),s.style.setProperty("transition",`background-color ${1e3/3200}s`),document.body.appendChild(o),o.style.setProperty("animation",`toggleOverlay ${1e3/1e3}s ease-in forwards`),s.style.setProperty("animation",`toggleThemeAnimation ${1e3/1e3}s ease forwards`),setTimeout(()=>{n()},1e3/4),setTimeout(()=>{document.body.querySelectorAll(".theme-transition-overlay").forEach(r=>{document.body.removeChild(r)})},1e3)}else n()}};ur._config={sectionLabelOnVerticalToolbar:!1};let Z=ur;class z extends T{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const n of t)this.elements.add(n);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const o=n.target;t.unobserve(o);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][s];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&t.observe(n)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const n=document.createDocumentFragment();if(t.length===0)return ce(t(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let o=i;const s=t,r=l=>(o={...o,...l},ce(s(o,r),n),o);r(i);const a=()=>o;return[n.firstElementChild,r,a]}}const qe=(e,t={},i=!0)=>{let n={};for(const o of e.children){const s=o,r=s.getAttribute("name")||s.getAttribute("label"),a=t[r];if(r){if("value"in s&&typeof s.value<"u"&&s.value!==null){const l=s.value;if(typeof l=="object"&&!Array.isArray(l)&&Object.keys(l).length===0)continue;n[r]=a?a(s.value):s.value}else if(i){const l=qe(s,t);if(Object.keys(l).length===0)continue;n[r]=a?a(l):l}}else i&&(n={...n,...qe(s,t)})}return n},Yi=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,Gc=[">=","<=","=",">","<","?","/","#"];function Ho(e){const t=Gc.find(r=>e.split(r).length===2),i=e.split(t).map(r=>r.trim()),[n,o]=i,s=o.startsWith("'")&&o.endsWith("'")?o.replace(/'/g,""):Yi(o);return{key:n,condition:t,value:s}}const $n=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const o=!n.startsWith("(")&&!n.endsWith(")"),s=n.startsWith("(")&&n.endsWith(")");if(o){const r=Ho(n);t.push(r)}if(s){const r={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(a=>a.trim()).map((a,l)=>{const u=Ho(a);return l>0&&(u.operator="&"),u})};t.push(r)}}return t}catch{return null}},Bo=(e,t,i)=>{let n=!1;switch(t){case"=":n=e===i;break;case"?":n=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(n=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(n=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(n=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(n=e>=i);break;case"/":n=String(e).startsWith(String(i));break}return n};var Xc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,dr=(e,t,i,n)=>{for(var o=Jc(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Xc(t,i,o),o},F;const Un=(F=class extends T{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of F.menus)e instanceof F&&(e.visible=!1);setTimeout(()=>{F.dialog.close(),F.dialog.remove()},310)}get visible(){return this._visible}set visible(e){this._visible=e,e?(F.dialog.parentElement||document.body.append(F.dialog),this._previousContainer=this.parentElement,F.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,this.style.setProperty("display","flex"),F.dialog.append(this),F.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):setTimeout(()=>{var t;(t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.style.setProperty("display","none"),this.dispatchEvent(new Event("hidden"))},310)}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await Is(this._previousContainer,this,{placement:e,middleware:[vs(10),Ps(),Os(),Ts({padding:5})]}),{x:i,y:n}=t;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),F.menus.push(this),this.visible?(this.style.setProperty("width","auto"),this.style.setProperty("height","auto")):(this.style.setProperty("width","0"),this.style.setProperty("height","0"))}render(){return m` <slot></slot> `}},F.styles=[Tt.scrollbar,P`
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
        background-color: var(
          --bim-context-menu--bgc,
          var(--bim-ui_bg-contrast-20)
        );
        transition:
          clip-path 0.2s cubic-bezier(0.72, 0.1, 0.43, 0.93),
          transform 0.3s cubic-bezier(0.72, 0.1, 0.45, 2.35);
      }

      :host(:not([visible])) {
        transform: scale(0.8);
        clip-path: circle(0 at top left);
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
    ></dialog>`),F.menus=[],F);dr([v({type:String,reflect:!0})],Un.prototype,"placement");dr([v({type:Boolean,reflect:!0})],Un.prototype,"visible");let Cn=Un;var Qc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,lt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Zc(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Qc(t,i,o),o},Te;const nt=(Te=class extends T{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=ue(),this._tooltip=ue(),this._mouseLeave=!1,this.onClick=e=>{e.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const e=this._contextMenu;if(e){const t=this.getAttribute("data-context-group");t&&e.setAttribute("data-context-group",t),this.closeNestedContexts();const i=Z.newRandomId();for(const n of e.children)n instanceof Te&&n.setAttribute("data-context-group",i);e.visible=!0}},this.mouseLeave=!0}set loading(e){if(this._loading=e,e)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=e,this.icon="eos-icons:loading";else{const{disabled:t,icon:i}=this._stateBeforeLoading;this.disabled=t,this.icon=i}}get loading(){return this._loading}set mouseLeave(e){this._mouseLeave=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&Is(e,t,{placement:"bottom",middleware:[vs(10),Ps(),Os(),Ts({padding:5})]}).then(i=>{const{x:n,y:o}=i;Object.assign(t.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of Cn.dialog.children){const i=t.getAttribute("data-context-group");if(t instanceof Cn&&i===e){t.visible=!1,t.removeAttribute("data-context-group");for(const n of t.children)n instanceof Te&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const e=m`
      <div ${W(this._tooltip)} class="tooltip">
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
      <div ${W(this._parent)} class="parent" @click=${this.onClick}>
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
    `}},Te.styles=P`
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
  `,Te);lt([v({type:String,reflect:!0})],nt.prototype,"label",2);lt([v({type:Boolean,attribute:"label-hidden",reflect:!0})],nt.prototype,"labelHidden",2);lt([v({type:Boolean,reflect:!0})],nt.prototype,"active",2);lt([v({type:Boolean,reflect:!0,attribute:"disabled"})],nt.prototype,"disabled",2);lt([v({type:String,reflect:!0})],nt.prototype,"icon",2);lt([v({type:Boolean,reflect:!0})],nt.prototype,"vertical",2);lt([v({type:Number,attribute:"tooltip-time",reflect:!0})],nt.prototype,"tooltipTime",2);lt([v({type:Boolean,attribute:"tooltip-visible",reflect:!0})],nt.prototype,"tooltipVisible",2);lt([v({type:String,attribute:"tooltip-title",reflect:!0})],nt.prototype,"tooltipTitle",2);lt([v({type:String,attribute:"tooltip-text",reflect:!0})],nt.prototype,"tooltipText",2);lt([v({type:Boolean,reflect:!0})],nt.prototype,"loading",1);let Kc=nt;var tu=Object.defineProperty,ni=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&tu(t,i,o),o};const hr=class extends T{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(e){e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(this.onValueChange)}render(){const e=m`
      <svg viewBox="0 0 21 21">
        <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
      </svg>
    `;return m`
      <div class="parent">
        <label class="parent-label">
          ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
          <div class="input-container">
            <input
              type="checkbox"
              aria-label=${this.label||this.name||"Checkbox Input"}
              @change="${this.onChange}"
              .checked="${this.checked}"
            />
            ${e}
          </div>
        </label>
      </div>
    `}};hr.styles=P`
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
  `;let ge=hr;ni([v({type:String,reflect:!0})],ge.prototype,"icon");ni([v({type:String,reflect:!0})],ge.prototype,"name");ni([v({type:String,reflect:!0})],ge.prototype,"label");ni([v({type:Boolean,reflect:!0})],ge.prototype,"checked");ni([v({type:Boolean,reflect:!0})],ge.prototype,"inverted");var eu=Object.defineProperty,ve=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&eu(t,i,o),o};const pr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=ue(),this._textInput=ue(),this.onValueChange=new Event("input"),this.onOpacityInput=e=>{const t=e.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(e){const{color:t,opacity:i}=e;this.color=t,i&&(this.opacity=i)}get value(){const e={color:this.color};return this.opacity&&(e.opacity=this.opacity),e}onColorInput(e){e.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(e){e.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:i}=t;let n=i.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),t.value=n.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:e}=this._colorInput;e&&e.click()}render(){return m`
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
                ${W(this._colorInput)}
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
                ${W(this._textInput)}
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
    `}};pr.styles=P`
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
  `;let Gt=pr;ve([v({type:String,reflect:!0})],Gt.prototype,"name");ve([v({type:String,reflect:!0})],Gt.prototype,"label");ve([v({type:String,reflect:!0})],Gt.prototype,"icon");ve([v({type:Boolean,reflect:!0})],Gt.prototype,"vertical");ve([v({type:Number,reflect:!0})],Gt.prototype,"opacity");ve([v({type:String,reflect:!0})],Gt.prototype,"color");var iu=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,Ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?nu(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&iu(t,i,o),o};const mr=class extends T{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Yi(this.label):this.label}set value(e){this._value=e}render(){return m`
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
    `}};mr.styles=P`
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
  `;let H=mr;Ot([v({type:String,reflect:!0})],H.prototype,"img",2);Ot([v({type:String,reflect:!0})],H.prototype,"label",2);Ot([v({type:String,reflect:!0})],H.prototype,"icon",2);Ot([v({type:Boolean,reflect:!0})],H.prototype,"checked",2);Ot([v({type:Boolean,reflect:!0})],H.prototype,"checkbox",2);Ot([v({type:Boolean,attribute:"no-mark",reflect:!0})],H.prototype,"noMark",2);Ot([v({converter:{fromAttribute(e){return e&&Yi(e)}}})],H.prototype,"value",1);Ot([v({type:Boolean,reflect:!0})],H.prototype,"vertical",2);var ou=Object.defineProperty,su=Object.getOwnPropertyDescriptor,Pt=(e,t,i,n)=>{for(var o=n>1?void 0:n?su(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ou(t,i,o),o};const fr=class extends z{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=ue(),this.onOptionClick=e=>{const t=e.target,i=this._value.has(t);if(!this.multiple&&!this.required&&!i)this._value=new Set([t]);else if(!this.multiple&&!this.required&&i)this._value=new Set([]);else if(!this.multiple&&this.required&&!i)this._value=new Set([t]);else if(this.multiple&&!this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&i){const n=[...this._value].filter(o=>o!==t);this._value=new Set(n)}else if(this.multiple&&this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&i){const n=[...this._value].filter(s=>s!==t),o=new Set(n);o.size!==0&&(this._value=o)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(e){if(e){const{value:t}=this._contextMenu;if(!t)return;for(const i of this.elements)t.append(i);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(e){if(this.required&&Object.keys(e).length===0)return;const t=new Set;for(const i of e){const n=this.findOption(i);if(n&&(t.add(n),!this.multiple&&Object.keys(e).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof H&&e.checked).map(e=>e.value)}get _options(){const e=new Set([...this.elements]);for(const t of this.children)t instanceof H&&e.add(t);return[...e]}onSlotChange(e){const t=e.target.assignedElements();this.observe(t);const i=new Set;for(const n of this.elements){if(!(n instanceof H)){n.remove();continue}n.checked&&i.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=i}updateOptionsState(){for(const e of this._options)e instanceof H&&(e.checked=this._value.has(e))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}render(){let e,t,i;if(this._value.size===0)e="Select an option...";else if(this._value.size===1){const n=[...this._value][0];e=(n==null?void 0:n.label)||(n==null?void 0:n.value),t=n==null?void 0:n.img,i=n==null?void 0:n.icon}else e=`Multiple (${this._value.size})`;return m`
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
            ${W(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};fr.styles=[Tt.scrollbar,P`
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
    `];let vt=fr;Pt([v({type:String,reflect:!0})],vt.prototype,"name",2);Pt([v({type:String,reflect:!0})],vt.prototype,"icon",2);Pt([v({type:String,reflect:!0})],vt.prototype,"label",2);Pt([v({type:Boolean,reflect:!0})],vt.prototype,"multiple",2);Pt([v({type:Boolean,reflect:!0})],vt.prototype,"required",2);Pt([v({type:Boolean,reflect:!0})],vt.prototype,"vertical",2);Pt([v({type:Boolean,reflect:!0})],vt.prototype,"visible",1);Pt([be()],vt.prototype,"_value",2);var ru=Object.defineProperty,br=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&ru(t,i,o),o};const gr=class extends T{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(e){this._layouts=e;const t={};for(const[i,n]of Object.entries(e))for(const o in n.elements)t[i]||(t[i]={}),t[i][o]=s=>{const r=this._updateFunctions[i];if(!r)return;const a=r[o];a&&a(s)};this.updateComponent=t}get layouts(){return this._layouts}getLayoutAreas(e){const{template:t}=e,i=t.split(`
`).map(n=>n.trim()).map(n=>n.split('"')[1]).filter(n=>n!==void 0).flatMap(n=>n.split(/\s+/));return[...new Set(i)].filter(n=>n!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const e=this._updateFunctions[this.layout],t=this.layouts[this.layout],i=this.getLayoutAreas(t).map(n=>{const o=t.elements[n];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=n,o;if("template"in o){const{template:s,initialState:r}=o,[a,l]=z.create(s,r);return a.style.gridArea=n,e[n]=l,a}return z.create(o)}).filter(n=>!!n);this.style.gridTemplate=t.template,this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};gr.styles=P`
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
  `;let Vn=gr;br([v({type:Boolean,reflect:!0})],Vn.prototype,"floating");br([v({type:String,reflect:!0})],Vn.prototype,"layout");const An=class extends T{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};An.styles=P`
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
  `,An.properties={icon:{type:String}};let au=An;var lu=Object.defineProperty,Gi=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&lu(t,i,o),o};const vr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const e={};for(const t of this.children){const i=t;"value"in i?e[i.name||i.label]=i.value:"checked"in i&&(e[i.name||i.label]=i.checked)}return e}set value(e){const t=[...this.children];for(const i in e){const n=t.find(r=>{const a=r;return a.name===i||a.label===i});if(!n)continue;const o=n,s=e[i];typeof s=="boolean"?o.checked=s:o.value=s}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};vr.styles=P`
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
  `;let oi=vr;Gi([v({type:String,reflect:!0})],oi.prototype,"name");Gi([v({type:String,reflect:!0})],oi.prototype,"label");Gi([v({type:String,reflect:!0})],oi.prototype,"icon");Gi([v({type:Boolean,reflect:!0})],oi.prototype,"vertical");var cu=Object.defineProperty,si=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&cu(t,i,o),o};const yr=class extends T{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Yi(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};yr.styles=P`
    :host {
      --bim-icon--c: var(--bim-label--c);
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
  `;let ye=yr;si([v({type:String,reflect:!0})],ye.prototype,"img");si([v({type:Boolean,attribute:"label-hidden",reflect:!0})],ye.prototype,"labelHidden");si([v({type:String,reflect:!0})],ye.prototype,"icon");si([v({type:Boolean,attribute:"icon-hidden",reflect:!0})],ye.prototype,"iconHidden");si([v({type:Boolean,reflect:!0})],ye.prototype,"vertical");var uu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?du(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&uu(t,i,o),o};const _r=class extends T{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=ue(),this.onValueChange=new Event("change")}set value(e){this.setValue(e.toString())}get value(){return this._value}onChange(e){e.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(e){const{value:t}=this._input;let i=e;if(i=i.replace(/[^0-9.-]/g,""),i=i.replace(/(\..*)\./g,"$1"),i.endsWith(".")||(i.lastIndexOf("-")>0&&(i=i[0]+i.substring(1).replace(/-/g,"")),i==="-"||i==="-0"))return;let n=Number(i);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:e}=this._input;e&&Number.isNaN(Number(e.value))&&(e.value=this.value.toString())}onSliderMouseDown(e){document.body.style.cursor="w-resize";const{clientX:t}=e,i=this.value;let n=!1;const o=a=>{var l;n=!0;const{clientX:u}=a,d=this.step??1,c=((l=d.toString().split(".")[1])==null?void 0:l.length)||0,h=1/(this.sensitivity??1),p=(u-t)/h;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const b=i+p*d;this.setValue(b.toFixed(c))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},r=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)}onFocus(e){e.stopPropagation();const t=i=>{i.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:e}=this._input;e&&e.focus()}render(){const e=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${W(this._input)}
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
    `}};_r.styles=P`
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
  `;let K=_r;ot([v({type:String,reflect:!0})],K.prototype,"name",2);ot([v({type:String,reflect:!0})],K.prototype,"icon",2);ot([v({type:String,reflect:!0})],K.prototype,"label",2);ot([v({type:String,reflect:!0})],K.prototype,"pref",2);ot([v({type:Number,reflect:!0})],K.prototype,"min",2);ot([v({type:Number,reflect:!0})],K.prototype,"value",1);ot([v({type:Number,reflect:!0})],K.prototype,"step",2);ot([v({type:Number,reflect:!0})],K.prototype,"sensitivity",2);ot([v({type:Number,reflect:!0})],K.prototype,"max",2);ot([v({type:String,reflect:!0})],K.prototype,"suffix",2);ot([v({type:Boolean,reflect:!0})],K.prototype,"vertical",2);ot([v({type:Boolean,reflect:!0})],K.prototype,"slider",2);var hu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,ri=(e,t,i,n)=>{for(var o=n>1?void 0:n?pu(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&hu(t,i,o),o};const wr=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(e){this._hidden=e,this.activationButton.active=!e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return qe(this,this.valueTransform)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}animatePanles(){const e=[{maxHeight:"100vh",maxWidth:"100vw",opacity:1},{maxHeight:"100vh",maxWidth:"100vw",opacity:0},{maxHeight:0,maxWidth:0,opacity:0}];this.animate(e,{duration:300,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",direction:this.hidden?"normal":"reverse",fill:"forwards"})}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>{this.hidden=!this.hidden,this.animatePanles()}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};wr.styles=[Tt.scrollbar,P`
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
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      ::slotted(bim-panel-section:not(:last-child)) {
        border-bottom: 1px solid var(--bim-ui_bg-contrast-20);
      }
    `];let Xt=wr;ri([v({type:String,reflect:!0})],Xt.prototype,"icon",2);ri([v({type:String,reflect:!0})],Xt.prototype,"name",2);ri([v({type:String,reflect:!0})],Xt.prototype,"label",2);ri([v({type:Boolean,reflect:!0})],Xt.prototype,"hidden",1);ri([v({type:Boolean,attribute:"header-hidden",reflect:!0})],Xt.prototype,"headerHidden",2);var mu=Object.defineProperty,ai=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&mu(t,i,o),o};const xr=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={},this.componentHeight=-1}get value(){const e=this.parentElement;let t;return e instanceof Xt&&(t=e.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),qe(this,t)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}animateHeader(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".components");this.componentHeight<0&&(this.collapsed?this.componentHeight=t.clientHeight:(t.style.setProperty("transition","none"),t.style.setProperty("height","auto"),t.style.setProperty("padding","0.125rem 1rem 1rem"),this.componentHeight=t.clientHeight,requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),t.style.setProperty("transition","height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1), padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1)")}))),this.collapsed?(t.style.setProperty("height",`${this.componentHeight}px`),requestAnimationFrame(()=>{t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0")})):(t.style.setProperty("height","0px"),t.style.setProperty("padding","0 1rem 0"),requestAnimationFrame(()=>{t.style.setProperty("height",`${this.componentHeight}px`),t.style.setProperty("padding","0.125rem 1rem 1rem")}))}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed,this.animateHeader())}handelSlotChange(e){e.target.assignedElements({flatten:!0}).forEach((t,i)=>{const n=i*.05;t.style.setProperty("transition-delay",`${n}s`)})}handlePointerEnter(){const e=this.renderRoot.querySelector(".expand-icon");this.collapsed?e==null||e.style.setProperty("animation","collapseAnim 0.5s"):e==null||e.style.setProperty("animation","expandAnim 0.5s")}handlePointerLeave(){const e=this.renderRoot.querySelector(".expand-icon");e==null||e.style.setProperty("animation","none")}render(){const e=this.label||this.icon||this.name||this.fixed,t=m`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
      class="expand-icon"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,i=m`
      <div
        class="header"
        title=${this.label??""}
        @pointerenter=${this.handlePointerEnter}
        @pointerleave=${this.handlePointerLeave}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:t}
      </div>
    `;return m`
      <div class="parent">
        ${e?i:null}
        <div class="components">
          <slot @slotchange=${this.handelSlotChange}></slot>
        </div>
      </div>
    `}};xr.styles=[Tt.scrollbar,P`
      :host {
        display: block;
        pointer-events: auto;
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
        --bim-label--c: var(--bim-ui_bg-contrast-80);
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
        padding: 0.125rem 1rem 1rem;
        box-sizing: border-box;
        transition:
          height 0.25s cubic-bezier(0.65, 0.05, 0.36, 1),
          padding 0.25s cubic-bezier(0.65, 0.05, 0.36, 1);
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
    `];let _e=xr;ai([v({type:String,reflect:!0})],_e.prototype,"icon");ai([v({type:String,reflect:!0})],_e.prototype,"label");ai([v({type:String,reflect:!0})],_e.prototype,"name");ai([v({type:Boolean,reflect:!0})],_e.prototype,"fixed");ai([v({type:Boolean,reflect:!0})],_e.prototype,"collapsed");var fu=Object.defineProperty,li=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&fu(t,i,o),o};const $r=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=e=>{this._value=e.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof H&&(t.checked=t===e.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(e){const t=this.findOption(e);if(t){for(const i of this._options)i.checked=i===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(e){const t=e.target.assignedElements();for(const i of t)i instanceof H&&(i.noMark=!0,i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}doubleRequestAnimationFrames(e){requestAnimationFrame(()=>requestAnimationFrame(e))}setAnimatedBackgound(e=!1){var t,i;const n=this.renderRoot.querySelector(".animated-background"),o=(i=(t=this.shadowRoot)==null?void 0:t.querySelector("slot"))==null?void 0:i.assignedElements({flatten:!0}).filter(s=>s.hasAttribute("checked"))[0];requestAnimationFrame(()=>{var s,r,a,l;const u=(l=(a=(r=(s=o==null?void 0:o.parentElement)==null?void 0:s.shadowRoot)==null?void 0:r.querySelector("bim-input"))==null?void 0:a.shadowRoot)==null?void 0:l.querySelector(".input"),d={width:o==null?void 0:o.clientWidth,height:o==null?void 0:o.clientHeight,top:((o==null?void 0:o.offsetTop)??0)-((u==null?void 0:u.offsetTop)??0),left:((o==null?void 0:o.offsetLeft)??0)-((u==null?void 0:u.offsetLeft)??0)};n==null||n.style.setProperty("width",`${d.width}px`),n==null||n.style.setProperty("height",`${d.height}px`),n==null||n.style.setProperty("top",`${d.top}px`),n==null||n.style.setProperty("left",`${d.left}px`)}),e&&this.doubleRequestAnimationFrames(()=>{const s="ease";n==null||n.style.setProperty("transition",`width ${.3}s ${s}, height ${.3}s ${s}, top ${.3}s ${s}, left ${.3}s ${s}`)})}firstUpdated(){const e=[...this.children].find(t=>t instanceof H&&t.checked);e&&(this._value=e),window.addEventListener("load",()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
        @click=${this.setAnimatedBackgound}
      >
        <div class="animated-background"></div>
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};$r.styles=P`
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
  `;let we=$r;li([v({type:String,reflect:!0})],we.prototype,"name");li([v({type:String,reflect:!0})],we.prototype,"icon");li([v({type:String,reflect:!0})],we.prototype,"label");li([v({type:Boolean,reflect:!0})],we.prototype,"vertical");li([be()],we.prototype,"_value");const bu=()=>m`
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
  `,gu=()=>m`
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
  `;var vu=Object.defineProperty,yu=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&vu(t,i,o),o};const Cr=class extends T{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Cr.styles=P`
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
  `;let Ar=Cr;yu([v({type:String,reflect:!0})],Ar.prototype,"column");var _u=Object.defineProperty,wu=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&_u(t,i,o),o};const Er=class extends T{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(e,t=!1){for(const i of this._groups)i.childrenHidden=typeof e>"u"?!i.childrenHidden:!e,t&&i.toggleChildren(e,t)}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(e=>{const t=document.createElement("bim-table-group");return this._groups.push(t),t.table=this.table,t.data=e,t})}
    `}};Er.styles=P`
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
  `;let Sr=Er;wu([v({type:Array,attribute:!1})],Sr.prototype,"data");var xu=Object.defineProperty,$u=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&xu(t,i,o),o};const kr=class extends T{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(e,t=!1){this._children&&(this.childrenHidden=typeof e>"u"?!this.childrenHidden:!e,t&&this._children.toggleGroups(e,t),this.animateTableChildren(!0))}animateTableChildren(e=!0){if(!e){requestAnimationFrame(()=>{var s;const r=this.renderRoot.querySelector(".caret"),a=this.renderRoot.querySelector(".branch-vertical"),l=(s=this.renderRoot.querySelector("bim-table-children"))==null?void 0:s.querySelector(".branch-vertical");r.style.setProperty("transform",`translateY(-50%) rotate(${this.childrenHidden?"0":"90"}deg)`),a.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`),l==null||l.style.setProperty("transform",`scaleY(${this.childrenHidden?"0":"1"})`)});return}const t=900,i=50,n=350,o=350;requestAnimationFrame(()=>{var s;const r=this.renderRoot.querySelector("bim-table-children"),a=this.renderRoot.querySelector(".caret"),l=this.renderRoot.querySelector(".branch-vertical"),u=(s=this.renderRoot.querySelector("bim-table-children"))==null?void 0:s.querySelector(".branch-vertical"),d=()=>{const y=r==null?void 0:r.renderRoot.querySelectorAll("bim-table-group");y==null||y.forEach((g,f)=>{g.style.setProperty("opacity","0"),g.style.setProperty("left","-30px");const _=[{opacity:"0",left:"-30px"},{opacity:"1",left:"0"}];g.animate(_,{duration:t/2,delay:50+f*i,easing:"cubic-bezier(0.65, 0.05, 0.36, 1)",fill:"forwards"})})},c=()=>{const y=[{transform:"translateY(-50%) rotate(90deg)"},{transform:"translateY(-50%) rotate(0deg)"}];a==null||a.animate(y,{duration:o,easing:"cubic-bezier(0.68, -0.55, 0.27, 1.55)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},h=()=>{const y=[{transform:"scaleY(1)"},{transform:"scaleY(0)"}];l==null||l.animate(y,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",delay:i,fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})},p=()=>{var y;const g=(y=this.renderRoot.querySelector("bim-table-row"))==null?void 0:y.querySelector(".branch-horizontal");if(g){g.style.setProperty("transform-origin","center right");const f=[{transform:"scaleX(0)"},{transform:"scaleX(1)"}];g.animate(f,{duration:n,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",direction:this.childrenHidden?"normal":"reverse"})}},b=()=>{const y=[{transform:"scaleY(0)"},{transform:"scaleY(1)"}];u==null||u.animate(y,{duration:n*1.2,easing:"cubic-bezier(0.4, 0, 0.2, 1)",fill:"forwards",delay:(i+n)*.7})};d(),c(),h(),p(),b()})}firstUpdated(){this.renderRoot.querySelectorAll(".caret").forEach(e=>{var t,i,n;if(!this.childrenHidden){e.style.setProperty("transform","translateY(-50%) rotate(90deg)");const o=(t=e.parentElement)==null?void 0:t.querySelector(".branch-horizontal");o&&o.style.setProperty("transform","scaleX(0)");const s=(n=(i=e.parentElement)==null?void 0:i.parentElement)==null?void 0:n.querySelectorAll(".branch-vertical");s==null||s.forEach(r=>{r.style.setProperty("transform","scaleY(1)")})}})}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const e=this.table.getGroupIndentation(this.data)??0,t=m`
      ${this.table.noIndentation?null:m`
            <style>
              .branch-vertical {
                left: ${e+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,i=document.createDocumentFragment();ce(t,i);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${e-1+(this.table.selectableRows?2.05:.5625)}rem`);let o=null;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("height","9.9"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.7");const l=document.createElementNS("http://www.w3.org/2000/svg","path");l.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(l),o=document.createElement("div"),o.addEventListener("click",u=>{u.stopPropagation(),this.toggleChildren()}),o.classList.add("caret"),o.style.left=`${(this.table.selectableRows?1.5:.125)+e}rem`,o.append(a)}const s=document.createElement("bim-table-row");this.data.children&&s.append(i),s.table=this.table,s.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:s}})),o&&this.data.children&&s.append(o),e!==0&&n&&s.append(n);let r;if(this.data.children){r=document.createElement("bim-table-children"),this._children=r,r.table=this.table,r.data=this.data.children;const a=document.createDocumentFragment();ce(t,a),r.append(a),this.childrenHidden&&r.setAttribute("hidden","")}return m`
      <div class="parent">${s} ${this.childrenHidden?null:r}</div>
    `}};kr.styles=P`
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
      cursor: pointer;
    }

    .caret svg {
      fill: var(--bim-ui_bg-contrast-60);
    }
  `;let Tr=kr;$u([v({type:Boolean,attribute:"children-hidden",reflect:!0})],Tr.prototype,"childrenHidden");var Cu=Object.defineProperty,xe=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Cu(t,i,o),o};const Or=class extends T{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(e=>{this._intersecting=e[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.name)}get _columnWidths(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.width)}get _isSelected(){var e;return(e=this.table)==null?void 0:e.selection.has(this.data)}onSelectionChange(e){if(!this.table)return;const t=e.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const e=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,i=[];for(const n in t){if(this.hiddenColumns.includes(n))continue;const o=t[n];let s;if(typeof o=="string"||typeof o=="boolean"||typeof o=="number"?(s=document.createElement("bim-label"),s.textContent=String(o)):o instanceof HTMLElement?s=o:(s=document.createDocumentFragment(),ce(o,s)),!s)continue;const r=document.createElement("bim-table-cell");r.append(s),r.column=n,this._columnNames.indexOf(n)===0&&(r.style.marginLeft=`${this.table.noIndentation?0:e+.75}rem`);const a=this._columnNames.indexOf(n);r.setAttribute("data-column-index",String(a)),r.toggleAttribute("data-no-indentation",a===0&&this.table.noIndentation),r.toggleAttribute("data-cell-header",this.isHeader),r.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:r}})),i.push(r)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,m`
      ${!this.isHeader&&this.table.selectableRows?m`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${i}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};Or.styles=P`
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
  `;let Jt=Or;xe([v({type:Boolean,reflect:!0})],Jt.prototype,"selected");xe([v({attribute:!1})],Jt.prototype,"columns");xe([v({attribute:!1})],Jt.prototype,"hiddenColumns");xe([v({attribute:!1})],Jt.prototype,"data");xe([v({type:Boolean,attribute:"is-header",reflect:!0})],Jt.prototype,"isHeader");xe([be()],Jt.prototype,"_intersecting");var Au=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,ct=(e,t,i,n)=>{for(var o=n>1?void 0:n?Eu(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Au(t,i,o),o};const Pr=class extends T{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(e,t)=>Object.values(t.data).some(i=>String(i).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,t)=>{let i=!1;const n=$n(e)??[];for(const o of n){if("queries"in o){i=!1;break}const{condition:s,value:r}=o;let{key:a}=o;if(a.startsWith("[")&&a.endsWith("]")){const l=a.replace("[","").replace("]","");a=l,i=Object.keys(t.data).filter(u=>u.includes(l)).map(u=>Bo(t.data[u],s,r)).some(u=>u)}else i=Bo(t.data[a],s,r);if(!i)break}return i}}set columns(e){const t=[];for(const i of e){const n=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;t.push(n)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const t of this.columns){const{name:i}=t;e[i]=String(i)}return e}get value(){return this._filteredData}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateFilteredData(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set hiddenColumns(e){this._hiddenColumns=e,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?($n(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(e){let t=!1;for(const i of e){const{children:n,data:o}=i;for(const s in o)this._columns.map(r=>typeof r=="string"?r:r.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(n){const s=this.computeMissingColumns(n);s&&!t&&(t=s)}}return t}generateText(e="comma",t=this.value,i="",n=!0){const o=this._textDelimiters[e];let s="";const r=this.columns.map(a=>a.name);if(n){this.indentationInText&&(s+=`Indentation${o}`);const a=`${r.join(o)}
`;s+=a}for(const[a,l]of t.entries()){const{data:u,children:d}=l,c=this.indentationInText?`${i}${a+1}${o}`:"",h=r.map(b=>u[b]??""),p=`${c}${h.join(o)}
`;s+=p,d&&(s+=this.generateText(e,l.children,`${i}${a+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(e){const t={};for(const n of Object.keys(this.dataTransform)){const o=this.columns.find(s=>s.name===n);o&&o.forceDataTransform&&(n in e||(e[n]=""))}const i=e;for(const n in i){const o=this.dataTransform[n];o?t[n]=o(i[n],e):t[n]=e[n]}return t}downloadData(e="BIM Table Data",t="json"){let i=null;if(t==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),t==="csv"&&(i=new File([this.csv],`${e}.csv`)),t==="tsv"&&(i=new File([this.tsv],`${e}.tsv`)),!i)return;const n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=i.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(e,t=this.value,i=0){for(const n of t){if(n.data===e)return i;if(n.children){const o=this.getRowIndentation(e,n.children,i+1);if(o!==null)return o}}return null}getGroupIndentation(e,t=this.value,i=0){for(const n of t){if(n===e)return i;if(n.children){const o=this.getGroupIndentation(e,n.children,i+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._filteredData.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){if(this.loading=!1,this._filteredData.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),n=i==null?void 0:i.querySelector("[data-table-element='error-message']");return t instanceof Error&&n&&t.message.trim()!==""&&(n.textContent=t.message),this._errorLoading=!0,!1}}filter(e,t=this.filterFunction??this._stringFilterFunction,i=this.data){const n=[];for(const o of i)if(t(e,o)){if(this.preserveStructureOnFilter){const s={data:o.data};if(o.children){const r=this.filter(e,t,o.children);r.length&&(s.children=r)}n.push(s)}else if(n.push({data:o.data}),o.children){const s=this.filter(e,t,o.children);n.push(...s)}}else if(o.children){const s=this.filter(e,t,o.children);this.preserveStructureOnFilter&&s.length?n.push({data:o.data,children:s}):n.push(...s)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return bu();if(this._errorLoading)return m`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return m`<slot name="missing-data"></slot>`;const e=document.createElement("bim-table-row");e.table=this,e.isHeader=!0,e.data=this._headerRowData,e.style.gridArea="Header",e.style.position="sticky",e.style.top="0",e.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:e} ${gu()}
        <div style="overflow-x: hidden; grid-area: Body">${t}</div>
      </div>
    `}};Pr.styles=[Tt.scrollbar,P`
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
    `];let st=Pr;ct([be()],st.prototype,"_filteredData",2);ct([v({type:Boolean,attribute:"headers-hidden",reflect:!0})],st.prototype,"headersHidden",2);ct([v({type:String,attribute:"min-col-width",reflect:!0})],st.prototype,"minColWidth",2);ct([v({type:Array,attribute:!1})],st.prototype,"columns",1);ct([v({type:Array,attribute:!1})],st.prototype,"data",1);ct([v({type:Boolean,reflect:!0})],st.prototype,"expanded",2);ct([v({type:Boolean,reflect:!0,attribute:"selectable-rows"})],st.prototype,"selectableRows",2);ct([v({attribute:!1})],st.prototype,"selection",2);ct([v({type:Boolean,attribute:"no-indentation",reflect:!0})],st.prototype,"noIndentation",2);ct([v({type:Boolean,reflect:!0})],st.prototype,"loading",2);ct([be()],st.prototype,"_errorLoading",2);var Su=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,$e=(e,t,i,n)=>{for(var o=n>1?void 0:n?ku(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Su(t,i,o),o};const Ir=class extends T{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=e=>{const t=e.target;t instanceof X&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(e){this._tab=e;const t=[...this.children],i=t.find(n=>n instanceof X&&n.name===e);for(const n of t){if(!(n instanceof X))continue;n.hidden=i!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}i||(this._tab="hidden",this.setAttribute("tab","hidden"))}get tab(){return this._tab}getTabSwitcher(e){return this._switchers.find(t=>t.getAttribute("data-name")===e)}createSwitchers(){this._switchers=[];for(const e of this.children){if(!(e instanceof X))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===e.name?this.toggleAttribute("tab",!1):this.tab=e.name,this.setAnimatedBackgound()}),t.setAttribute("data-name",e.name),t.className="switcher";const i=document.createElement("bim-label");i.textContent=e.label??null,i.icon=e.icon,t.append(i),this._switchers.push(t)}}updateSwitchers(){for(const e of this.children){if(!(e instanceof X))continue;const t=this._switchers.find(n=>n.getAttribute("data-name")===e.name);if(!t)continue;const i=t.querySelector("bim-label");i&&(i.textContent=e.label??null,i.icon=e.icon)}}onSlotChange(e){this.createSwitchers();const t=e.target.assignedElements(),i=t.find(n=>n instanceof X?this.tab?n.name===this.tab:!n.hidden:!1);i&&i instanceof X&&(this.tab=i.name);for(const n of t){if(!(n instanceof X)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),i!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}doubleRequestAnimationFrames(e){requestAnimationFrame(()=>requestAnimationFrame(e))}setAnimatedBackgound(e=!1){var t;const i=this.renderRoot.querySelector(".animated-background"),n=[...((t=this.renderRoot.querySelector(".switchers"))==null?void 0:t.querySelectorAll(".switcher"))||[]].filter(o=>o.hasAttribute("data-active"))[0];requestAnimationFrame(()=>{var o,s,r,a;const l=(a=(r=(s=(o=n==null?void 0:n.parentElement)==null?void 0:o.shadowRoot)==null?void 0:s.querySelector("bim-input"))==null?void 0:r.shadowRoot)==null?void 0:a.querySelector(".input"),u={width:n==null?void 0:n.clientWidth,height:n==null?void 0:n.clientHeight,top:((n==null?void 0:n.offsetTop)??0)-((l==null?void 0:l.offsetTop)??0),left:((n==null?void 0:n.offsetLeft)??0)-((l==null?void 0:l.offsetLeft)??0)};n?(i==null||i.style.setProperty("width",`${u.width}px`),i==null||i.style.setProperty("height",`${u.height}px`),i==null||i.style.setProperty("left",`${u.left}px`)):i==null||i.style.setProperty("width","0"),this.bottom?(i==null||i.style.setProperty("top","100%"),i==null||i.style.setProperty("transform","translateY(-100%)")):i==null||i.style.setProperty("top",`${u.top}px`)}),e&&this.doubleRequestAnimationFrames(()=>{const o="ease";i==null||i.style.setProperty("transition",`width ${.3}s ${o}, height ${.3}s ${o}, top ${.3}s ${o}, left ${.3}s ${o}`)})}firstUpdated(){requestAnimationFrame(()=>{this.setAnimatedBackgound(!0)}),new ResizeObserver(()=>{this.setAnimatedBackgound()}).observe(this)}render(){return m`
      <div class="parent">
        <div class="switchers">
          <div class="animated-background"></div>
          ${this._switchers}
        </div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Ir.styles=[Tt.scrollbar,P`
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

      :host(:not([tab])) .content {
        display: none;
      }

      :host([floating]) {
        background-color: transparent;
      }

      :host([floating]) .switchers {
        justify-self: center;
        overflow: auto;
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
    `];let It=Ir;$e([be()],It.prototype,"_switchers",2);$e([v({type:Boolean,reflect:!0})],It.prototype,"bottom",2);$e([v({type:Boolean,attribute:"switchers-hidden",reflect:!0})],It.prototype,"switchersHidden",2);$e([v({type:Boolean,reflect:!0})],It.prototype,"floating",2);$e([v({type:String,reflect:!0})],It.prototype,"tab",1);$e([v({type:Boolean,attribute:"switchers-full",reflect:!0})],It.prototype,"switchersFull",2);var Tu=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,Xi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ou(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Tu(t,i,o),o};const Nr=class extends T{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(e){this._label=e;const t=this.parentElement;t instanceof It&&t.updateSwitchers()}get label(){return this._label}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:e}=this;if(e&&this.name===this._defaultName){const t=[...e.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return m` <slot></slot> `}};Nr.styles=P`
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
  `;let X=Nr;Xi([v({type:String,reflect:!0})],X.prototype,"name",2);Xi([v({type:String,reflect:!0})],X.prototype,"label",1);Xi([v({type:String,reflect:!0})],X.prototype,"icon",2);Xi([v({type:Boolean,reflect:!0})],X.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo=e=>e??M;var Pu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,yt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Iu(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Pu(t,i,o),o};const Rr=class extends T{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(e){this._inputTypes.includes(e)&&(this._type=e)}get type(){return this._type}get query(){return $n(this.value)}onInputChange(e){e.stopPropagation();const t=e.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return m`
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
              placeholder=${Uo(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:m` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Uo(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Rr.styles=[Tt.scrollbar,P`
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
    `];let rt=Rr;yt([v({type:String,reflect:!0})],rt.prototype,"icon",2);yt([v({type:String,reflect:!0})],rt.prototype,"label",2);yt([v({type:String,reflect:!0})],rt.prototype,"name",2);yt([v({type:String,reflect:!0})],rt.prototype,"placeholder",2);yt([v({type:String,reflect:!0})],rt.prototype,"value",2);yt([v({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);yt([v({type:Number,reflect:!0})],rt.prototype,"debounce",2);yt([v({type:Number,reflect:!0})],rt.prototype,"rows",2);yt([v({type:String,reflect:!0})],rt.prototype,"type",1);var Nu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,Mr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ru(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Nu(t,i,o),o};const Lr=class extends T{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const e=this.children;for(const t of e)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Lr.styles=P`
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
  `;let Ji=Lr;Mr([v({type:Number,reflect:!0})],Ji.prototype,"rows",2);Mr([v({type:Boolean,reflect:!0})],Ji.prototype,"vertical",1);var Mu=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Qi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Lu(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Mu(t,i,o),o};const jr=class extends T{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(e){this._labelHidden=e,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const e=this.children;for(const t of e)t instanceof Ji&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};jr.styles=P`
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
  `;let Ce=jr;Qi([v({type:String,reflect:!0})],Ce.prototype,"label",2);Qi([v({type:String,reflect:!0})],Ce.prototype,"icon",2);Qi([v({type:Boolean,reflect:!0})],Ce.prototype,"vertical",1);Qi([v({type:Boolean,attribute:"label-hidden",reflect:!0})],Ce.prototype,"labelHidden",1);var ju=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,qn=(e,t,i,n)=>{for(var o=n>1?void 0:n?zu(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ju(t,i,o),o};const zr=class extends T{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(e){this._vertical=e,this.updateSections()}get vertical(){return this._vertical}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const e=this.children;for(const t of e)t instanceof Ce&&(t.labelHidden=this.vertical&&!Z.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};zr.styles=P`
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
  `;let Zi=zr;qn([v({type:String,reflect:!0})],Zi.prototype,"icon",2);qn([v({type:Boolean,attribute:"labels-hidden",reflect:!0})],Zi.prototype,"labelsHidden",2);qn([v({type:Boolean,reflect:!0})],Zi.prototype,"vertical",1);var Du=Object.defineProperty,Fu=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Du(t,i,o),o};const Dr=class extends T{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Dr.styles=P`
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
  `;let Fr=Dr;Fu([v({type:String,reflect:!0})],Fr.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr="important",Hu=" !"+Hr,Ht=Ds(class extends Fs{constructor(e){var t;if(super(e),e.type!==zs.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ft.add(n);const s=typeof o=="string"&&o.endsWith(Hu);n.includes("-")||s?i.setProperty(n,s?o.slice(0,-11):o,s?Hr:""):i[n]=o}}return qt}}),Bu=e=>{const{components:t}=e,i=t.get(ss);return m`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const n=document.createElement("input");n.type="file",n.accept=".ifc",n.onchange=async()=>{if(n.files===null||n.files.length===0)return;const o=n.files[0],s=o.name.replace(".ifc","");n.remove();const r=await o.arrayBuffer(),a=new Uint8Array(r);await i.load(a,!0,s)},n.click()}}
    ></bim-button>
  `},Uu=e=>z.create(Bu,e),Vu=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:Uu},Symbol.toStringTag,{value:"Module"}));({...Vu});const qu=e=>{const{components:t,actions:i,tags:n}=e,o=(i==null?void 0:i.dispose)??!0,s=(i==null?void 0:i.download)??!0,r=(i==null?void 0:i.visibility)??!0,a=(n==null?void 0:n.schema)??!0,l=(n==null?void 0:n.viewDefinition)??!0,u=t.get(Yt),d=({detail:c})=>{const{cell:h}=c;h.style.padding="0.25rem 0"};return m`
    <bim-table ${W(c=>{if(!c)return;const h=c;h.hiddenColumns=["modelID"];const p=[];for(const[,b]of u.groups){if(!b)continue;const y={data:{Name:b.name||b.uuid,modelID:b.uuid}};p.push(y)}h.dataTransform={Name:(b,y)=>{const{modelID:g}=y;if(typeof g!="string")return b;const f=u.groups.get(g);if(!f)return g;const _={};for(const S of f.items)_[S.id]=S.ids;let w;const{schema:x}=f.ifcMetadata;a&&x&&(w=m`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${x}</bim-label>
            `);let A;if(l&&"viewDefinition"in f.ifcMetadata){const S=f.ifcMetadata.viewDefinition;A=m`
            ${S.split(",").map(E=>m`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${E}</bim-label>`)}
          `}let C;o&&(C=m`<bim-button @click=${()=>u.disposeGroup(f)} icon="mdi:delete"></bim-button>`);let O;r&&(O=m`<bim-button @click=${S=>{const E=t.get(rs),B=S.target;E.set(B.hasAttribute("data-model-hidden"),_),B.toggleAttribute("data-model-hidden"),B.icon=B.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let N;return s&&(N=m`<bim-button @click=${()=>{const S=document.createElement("input");S.type="file",S.accept=".ifc",S.multiple=!1,S.addEventListener("change",async()=>{if(!(S.files&&S.files.length===1))return;const E=S.files[0],B=await E.arrayBuffer(),Y=await t.get($a).saveToIfc(f,new Uint8Array(B)),q=new File([Y],E.name),$=document.createElement("a");$.href=URL.createObjectURL(q),$.download=q.name,$.click(),URL.revokeObjectURL($.href)}),S.click()}} icon="flowbite:download-solid"></bim-button>`),m`
         <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
            <div style="min-height: 1.75rem; overflow: auto; display: flex;">
              <bim-label style="white-space: normal;">${b}</bim-label>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
              ${w}
              ${A}
            </div>
          </div>
          <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
            ${N}
            ${O}
            ${C}
          </div>
         </div>
        `}},h.data=p})} @cellcreated=${d} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},Wu=(e,t=!0)=>{const i=z.create(qu,e);if(t){const{components:n}=e,o=n.get(Yt),[,s]=i;o.onFragmentsLoaded.add(()=>setTimeout(()=>s())),o.onFragmentsDisposed.add(()=>s())}return i},Yu=Object.freeze(Object.defineProperty({__proto__:null,modelsList:Wu},Symbol.toStringTag,{value:"Module"})),Br=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",e=>e.includes("Value"),e=>e.startsWith("Material"),e=>e.startsWith("Relating"),e=>{const t=["IsGroupedBy","IsDecomposedBy"];return e.startsWith("Is")&&!t.includes(e)}];async function _i(e,t,i,n=Br,o=!1){const s=e.get(mt),r=await t.getProperties(i);if(!r)return{data:{Entity:`${i} properties not found...`}};const a=s.relationMaps[t.uuid],l={data:{}};for(const u in r){const d=n.map(h=>typeof h=="string"?u===h:h(u)).includes(!0);if(!(u==="type"||d))continue;const c=r[u];if(c)if(c.type===5){l.children||(l.children=[]);const h=await _i(e,t,c.value,n,o);l.children.push(h)}else if(typeof c=="object"&&!Array.isArray(c)){const{value:h,type:p}=c;if(o)p===1||p===2||p===3||(l.data[u]=h);else{const b=typeof h=="number"?Number(h.toFixed(3)):h;l.data[u]=b}}else if(Array.isArray(c))for(const h of c){if(h.type!==5)continue;l.children||(l.children=[]);const p=await _i(e,t,h.value,n,o);l.children.push(p)}else if(u==="type"){const h=xi[c];l.data.Entity=h}else l.data[u]=c}if(a&&a.get(r.expressID)){const u=a.get(r.expressID);for(const d of n){const c=[];if(typeof d=="string"){const h=s._inverseAttributes.indexOf(d);h!==-1&&c.push(h)}else{const h=s._inverseAttributes.filter(p=>d(p));for(const p of h){const b=s._inverseAttributes.indexOf(p);c.push(b)}}for(const h of c){const p=u.get(h);if(p)for(const b of p){const y=await _i(e,t,b,n,o);l.children||(l.children=[]),l.children.push(y)}}}}return l}const Gu=e=>{const{components:t,fragmentIdMap:i,attributesToInclude:n,editable:o,tableDefinition:s}=e,r=t.get(Yt);let a;return typeof n=="function"?a=n(Br):a=n,m`<bim-table ${W(async l=>{if(!l)return;const u=l,d=[],c=[];for(const h in i){const p=r.list.get(h);if(!(p&&p.group))continue;const b=p.group,y=c.find(g=>g.model===b);if(y)for(const g of i[h])y.expressIDs.add(g);else{const g={model:b,expressIDs:new Set(i[h])};c.push(g)}}for(const h of c){const{model:p,expressIDs:b}=h;for(const y of b){const g=await _i(t,p,y,a,o);d.push(g)}}u.dataTransform=s,u.data=d,u.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},Xu=e=>z.create(Gu,e),Ju=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:Xu},Symbol.toStringTag,{value:"Module"}));let wt;const Qu=e=>{const{components:t,classifications:i}=e,n=t.get(xa),o=t.get(rs);wt||(wt=document.createElement("bim-table"),wt.headersHidden=!0,wt.hiddenColumns=["system"],wt.columns=["Name",{name:"Actions",width:"auto"}],wt.dataTransform={Actions:(r,a)=>{const{system:l,Name:u}=a;if(!(typeof l=="string"&&typeof u=="string"))return r;const d=n.list[l];if(!(d&&d[u]))return r;const c=d[u],{map:h}=c;return m`
          <div>
            <bim-checkbox checked @change=${p=>{const b=p.target;o.set(b.value,h)}}></bim-checkbox>
          </div>
        `}});const s=[];for(const r of i){const a=typeof r=="string"?r:r.system,l=typeof r=="string"?r:r.label,u=n.list[a];u&&s.push({data:{Name:l,system:a},children:Object.keys(u).map(d=>({data:{Name:d,system:a,Actions:""}}))})}return wt.data=s,m`${wt}`},Zu=(e,t=!0)=>{const i=z.create(Qu,e);if(t){const{components:n}=e,o=n.get(Yt),[,s]=i;o.onFragmentsDisposed.add(()=>s())}return i},Ku=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:Zu},Symbol.toStringTag,{value:"Module"})),Ur=async(e,t,i)=>{var n,o,s,r;const a=e.get(mt),l={data:{Name:(n=i.Name)==null?void 0:n.value},children:[{data:{Name:"Identification",Value:(o=i.Identification)==null?void 0:o.value}},{data:{Name:"Name",Value:(s=i.Name)==null?void 0:s.value}},{data:{Name:"Description",Value:(r=i.Description)==null?void 0:r.value}}]},u=a.getEntityRelations(t,i.expressID,"IsNestedBy");if(!u)return l;l.children||(l.children=[]);const d=[];l.children.push({data:{Name:"Tasks"},children:d});for(const c of u){const h=await t.getProperties(c);if(!h)continue;const p=await Ur(e,t,h);d.push(p)}return l},td=async(e,t,i)=>{const n=[];for(const o of i){const s=await Ur(e,t,o);n.push(s)}return{data:{Name:"Tasks"},children:n}},ed=async(e,t)=>{var i,n,o,s;const r={data:{Name:"Classifications"}};for(const a of t){const{value:l}=a.ReferencedSource,u=await e.getProperties(l);if(!u)continue;const d={data:{Name:(i=u.Name)==null?void 0:i.value},children:[{data:{Name:"Identification",Value:((n=a.Identification)==null?void 0:n.value)||((o=a.ItemReference)==null?void 0:o.value)}},{data:{Name:"Name",Value:(s=a.Name)==null?void 0:s.value}}]};r.children||(r.children=[]),r.children.push(d)}return r},id=async(e,t)=>{var i,n,o,s,r,a;const l={data:{Name:"Materials"}};for(const u of t){if(u.type===cs){const d=(i=u.ForLayerSet)==null?void 0:i.value,c=await e.getProperties(d);if(!c)continue;for(const h of c.MaterialLayers){const{value:p}=h,b=await e.getProperties(p);if(!b)continue;const y=await e.getProperties((n=b.Material)==null?void 0:n.value);if(!y)continue;const g={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:(o=b.LayerThickness)==null?void 0:o.value}},{data:{Name:"Material",Value:(s=y.Name)==null?void 0:s.value}}]};l.children||(l.children=[]),l.children.push(g)}}if(u.type===ds)for(const d of u.Materials){const{value:c}=d,h=await e.getProperties(c);if(!h)continue;const p={data:{Name:"Name",Value:(r=h.Name)==null?void 0:r.value}};l.children||(l.children=[]),l.children.push(p)}if(u.type===us){const d={data:{Name:"Name",Value:(a=u.Name)==null?void 0:a.value}};l.children||(l.children=[]),l.children.push(d)}}return l},nd={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},od={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},Vr=async(e,t)=>{var i,n,o;const s=Object.values(await e.getAllPropertiesOfType(Ia))[0];let r;for(const a of s.Units){const l=await e.getProperties(a.value);if(l&&((i=l.UnitType)==null?void 0:i.value)===nd[t]){r=`${((n=l.Prefix)==null?void 0:n.value)??""}${((o=l.Name)==null?void 0:o.value)??""}`;break}}return r?od[r]:null},sd=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"PropertySets"}};for(const a of t){const l={data:{Name:(n=a.Name)==null?void 0:n.value}};if(a.type===as){for(const u of a.HasProperties){const{value:d}=u,c=await e.getProperties(d);if(!c)continue;const h=Object.keys(c).find(g=>g.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,b="";if(s){const{name:g}=c[h],f=await Vr(e,g)??{};b=f.symbol,p=c[h].value,typeof p=="number"&&f.digits&&(p=p.toFixed(f.digits))}const y={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${b??""}`}};l.children||(l.children=[]),l.children.push(y)}l.children&&(r.children||(r.children=[]),r.children.push(l))}}return r},rd=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"QuantitySets"}};for(const a of t){const l={data:{Name:(n=a.Name)==null?void 0:n.value}};if(a.type===ls){for(const u of a.Quantities){const{value:d}=u,c=await e.getProperties(d);if(!c)continue;const h=Object.keys(c).find(g=>g.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,b="";if(s){const{name:g}=c[h],f=await Vr(e,g)??{};b=f.symbol,p=c[h].value,typeof p=="number"&&f.digits&&(p=p.toFixed(f.digits))}const y={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${b??""}`}};l.children||(l.children=[]),l.children.push(y)}l.children&&(r.children||(r.children=[]),r.children.push(l))}}return r},ad=["OwnerHistory","ObjectPlacement","CompositionType"],qr=async(e,t)=>{const i={groupName:"Attributes",includeClass:!1,...t},{groupName:n,includeClass:o}=i,s={data:{Name:n}};o&&(s.children||(s.children=[]),s.children.push({data:{Name:"Class",Value:xi[e.type]}}));for(const r in e){if(ad.includes(r))continue;const a=e[r];if(a&&typeof a=="object"&&!Array.isArray(a)){if(a.type===Sa)continue;const l={data:{Name:r,Value:a.value}};s.children||(s.children=[]),s.children.push(l)}}return s},de=(e,...t)=>{e.children||(e.children=[]),e.children.push(...t)},ld=async(e,t,i,n,o)=>{const s=e.get(mt).getEntityRelations(t,i,"IsDefinedBy");if(s){const r=[],a=[];for(const d of s){const c=await t.getProperties(d);c&&(c.type===as&&r.push(c),c.type===ls&&a.push(c))}const l=await sd(t,r,o);l.children&&de(n,l);const u=await rd(t,a,o);u.children&&de(n,u)}},cd=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssociations");if(o){const s=[],r=[];for(const u of o){const d=await t.getProperties(u);d&&(d.type===ka&&s.push(d),(d.type===cs||d.type===Ta||d.type===Oa||d.type===us||d.type===ds)&&r.push(d))}const a=await ed(t,s);a.children&&de(n,a);const l=await id(t,r);l.children&&de(n,l)}},ud=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssignments");if(o){const s=[];for(const a of o){const l=await t.getProperties(a);l&&l.type===Pa&&s.push(l)}const r=await td(e,t,s);r.children&&de(n,r)}},dd=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"ContainedInStructure");if(o&&o[0]){const s=o[0],r=await t.getProperties(s);if(r){const a=await qr(r,{groupName:"SpatialContainer"});de(n,a)}}};let bi={};const hd=async(e,t,i)=>{var n;const o=e.get(mt),s=e.get(Yt),r=s.getModelIdMap(t);Object.keys(t).length===0&&(bi={});const a=[];for(const l in r){const u=s.groups.get(l);if(!u)continue;const d=o.relationMaps[u.uuid];if(!d)continue;l in bi||(bi[l]=new Map);const c=bi[l],h=r[l];for(const p of h){let b=c.get(p);if(b){a.push(b);continue}const y=await u.getProperties(p);if(!y)continue;b={data:{Name:(n=y.Name)==null?void 0:n.value}},a.push(b),c.set(p,b);const g=await qr(y,{includeClass:!0});b.children||(b.children=[]),b.children.push(g),d.get(p)&&(await ld(e,u,p,b,i),await cd(e,u,p,b),await ud(e,u,p,b),await dd(e,u,p,b))}}return a},pd=e=>{const t={emptySelectionWarning:!0,...e},{components:i,fragmentIdMap:n,emptySelectionWarning:o}=t;return m`
    <bim-table @cellcreated=${({detail:s})=>{const{cell:r}=s;r.column==="Name"&&!("Value"in r.rowData)&&(r.style.gridColumn="1 / -1")}} ${W(async s=>{if(!s)return;const r=s;r.columns=[{name:"Name",width:"12rem"}],r.headersHidden=!0,r.loadFunction=()=>hd(i,n,e),await r.loadData(!0)&&r.dispatchEvent(new Event("datacomputed"))})}>
      ${o?m`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},md=e=>z.create(pd,e),fd=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:md},Symbol.toStringTag,{value:"Module"})),En=async(e,t,i,n)=>{var o;const s=[],r=e.get(mt),a=await t.getProperties(i);if(!a)return s;const{type:l}=a,u={data:{Entity:xi[l],Name:(o=a.Name)==null?void 0:o.value,modelID:t.uuid,expressID:i}};for(const d of n){const c=r.getEntityRelations(t,i,d);if(!c)continue;u.children||(u.children=[]),u.data.relations=JSON.stringify(c);const h={};for(const p of c){const b=await En(e,t,p,n);for(const y of b)if(y.data.relations)u.children.push(y);else{const g=t.data.get(p);if(!g){u.children.push(y);continue}const f=g[1][1],_=xi[f];_ in h||(h[_]=[]),y.data.Entity=y.data.Name,delete y.data.Name,h[_].push(y)}}for(const p in h){const b=h[p],y=b.map(f=>f.data.expressID),g={data:{Entity:p,modelID:t.uuid,relations:JSON.stringify(y)},children:b};u.children.push(g)}}return s.push(u),s},bd=async(e,t,i,n)=>{const o=e.get(mt),s=[];for(const r of t){let a;if(n)a={data:{Entity:r.name!==""?r.name:r.uuid},children:await En(e,r,n,i)};else{const l=o.relationMaps[r.uuid],u=await r.getAllPropertiesOfType(Ea);if(!(l&&u))continue;const{expressID:d}=Object.values(u)[0];a={data:{Entity:r.name!==""?r.name:r.uuid},children:await En(e,r,d,i)}}s.push(a)}return s};let ft;const gd=(e,t)=>{const i=e.get(Yt),{modelID:n,expressID:o,relations:s}=t;if(!n)return null;const r=i.groups.get(n);return r?r.getFragmentMap([o,...JSON.parse(s??"[]")]):null},vd=e=>{const{components:t,models:i,expressID:n}=e,o=e.selectHighlighterName??"select",s=e.hoverHighlighterName??"hover";ft||(ft=document.createElement("bim-table"),ft.hiddenColumns=["modelID","expressID","relations"],ft.columns=["Entity","Name"],ft.headersHidden=!0,ft.addEventListener("cellcreated",({detail:a})=>{const{cell:l}=a;l.column==="Entity"&&!("Name"in l.rowData)&&(l.style.gridColumn="1 / -1")})),ft.addEventListener("rowcreated",a=>{a.stopImmediatePropagation();const{row:l}=a.detail,u=t.get(wa),d=gd(t,l.data);d&&Object.keys(d).length!==0&&(l.onmouseover=()=>{s&&(l.style.backgroundColor="var(--bim-ui_bg-contrast-20)",u.highlightByID(s,d,!0,!1,u.selection[o]??{}))},l.onmouseout=()=>{l.style.backgroundColor="",u.clear(s)},l.onclick=()=>{o&&u.highlightByID(o,d,!0,!0)})});const r=e.inverseAttributes??["IsDecomposedBy","ContainsElements"];return bd(t,i,r,n).then(a=>ft.data=a),m`${ft}`},yd=(e,t=!0)=>{const i=z.create(vd,e);if(t){const[,n]=i,{components:o}=e,s=o.get(Yt),r=o.get(mt),a=()=>n({models:s.groups.values()});r.onRelationsIndexed.add(a),s.onFragmentsDisposed.add(a)}return i},_d=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:yd},Symbol.toStringTag,{value:"Module"})),Oe=(e,t)=>[...e.get(On).list.values()].find(i=>i.world===t),wd=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target;e.color=new fe(n.color)}} color=${t}></bim-color-input>
  `,xd=(e,t)=>{const{postproduction:i}=e,n=i.n8ao.configuration;return m`
    <bim-color-input @input=${o=>{const s=o.target;n.color=new fe(s.color)}} color=${t}></bim-color-input>
  `},$d=(e,t)=>{const{color:i,opacity:n}=JSON.parse(t),{postproduction:o}=e,{customEffects:s}=o;return m`
    <bim-color-input @input=${r=>{const{color:a,opacity:l}=r.target;s.lineColor=new fe(a).getHex(),l&&(s.opacity=l/100)}} color=${i} opacity=${n*100}></bim-color-input>
  `},Cd=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target,o=new fe(n.color);e.material.uniforms.uColor.value=o}} color=${t}></bim-color-input>
  `,Ad=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({ao:o.checked})}} .checked=${t}></bim-checkbox>
  `},Ed=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({gamma:o.checked})}} .checked=${t}></bim-checkbox>
  `},Sd=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({custom:o.checked})}} .checked=${t}></bim-checkbox>
  `},xt=(e,t,i,n=()=>{})=>m`
    <bim-checkbox .checked="${i}" @change="${o=>{const s=o.target.checked;e[t]=s,n(s)}}"></bim-checkbox> 
  `,I=(e,t,i,n)=>{const o={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...n},{slider:s,min:r,max:a,step:l,suffix:u,prefix:d,onInputSet:c}=o;return m`
    <bim-number-input
      .pref=${d}
      .suffix=${u}
      .slider=${s} 
      min=${r} 
      value="${i}" 
      max=${a} 
      step=${l} 
      @change="${h=>{const p=h.target.value;e[t]=p,c(p)}}"
    ></bim-number-input> 
  `},kd=e=>{const{components:t}=e,i=t.get(Xe);return m`
    <bim-table @cellcreated=${({detail:n})=>{const o=n.cell.parentNode;if(!o)return;const s=o.querySelector("bim-table-cell[column='Name']"),r=o.querySelector("bim-table-cell[column='Value']");s&&!r&&(s.style.gridColumn="1 / -1")}} ${W(async n=>{var o,s,r,a,l;if(!n)return;const u=n;u.preserveStructureOnFilter=!0,u.dataTransform={Value:(c,h)=>{const p=h.World,b=i.list.get(p);if(!b)return c;const{scene:y,camera:g,renderer:f}=b,_=h.Name;if(_==="Grid"&&h.IsGridConfig&&typeof c=="boolean"){const w=Oe(t,b);return w?xt(w,"visible",c):c}if(_==="Color"&&h.IsGridConfig&&typeof c=="string"){const w=Oe(t,b);return w?Cd(w,c):c}if(_==="Distance"&&h.IsGridConfig&&typeof c=="number"){const w=Oe(t,b);return w?I(w.material.uniforms.uDistance,"value",c,{slider:!0,min:300,max:1e3}):c}if(_==="Size"&&h.IsGridConfig&&typeof c=="string"){const w=Oe(t,b);if(!w)return c;const{x,y:A}=JSON.parse(c),C=I(w.material.uniforms.uSize1,"value",x,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),O=I(w.material.uniforms.uSize2,"value",A,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${C}${O}</div>
          `}if(_==="Near Frustum"&&g.three instanceof pi&&typeof c=="number"){const w=g.three;return I(g.three,"near",c,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Far Frustum"&&g.three instanceof pi&&typeof c=="number"){const w=g.three;return I(g.three,"far",c,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Field of View"&&g.three instanceof pi&&typeof c=="number"){const w=g.three;return I(g.three,"fov",c,{slider:!0,min:10,max:120,onInputSet:()=>w.updateProjectionMatrix()})}if(_==="Invert Drag"&&g.hasCameraControls()&&typeof c=="boolean")return xt(g.controls,"dollyDragInverted",c);if(_==="Dolly Speed"&&g.hasCameraControls()&&typeof c=="number")return I(g.controls,"dollySpeed",c,{slider:!0,min:.5,max:3,step:.1});if(_==="Truck Speed"&&g.hasCameraControls()&&typeof c=="number")return I(g.controls,"truckSpeed",c,{slider:!0,min:.5,max:6,step:.1});if(_==="Smooth Time"&&g.hasCameraControls()&&typeof c=="number")return I(g.controls,"smoothTime",c,{slider:!0,min:.01,max:2,step:.01});if(_==="Intensity"&&typeof c=="number"){if(h.Light&&typeof h.Light=="string"){const w=y.three.children.find(x=>x.uuid===h.Light);return w&&w instanceof Se?I(w,"intensity",c,{slider:!0,min:0,max:10,step:.1}):c}if(h.IsAOConfig&&f instanceof R)return I(f.postproduction.n8ao.configuration,"intensity",c,{slider:!0,max:16,step:.1})}if(_==="Color"&&typeof c=="string"){const w=h.Light,x=y.three.children.find(A=>A.uuid===w);if(x&&x instanceof Se)return wd(x,c);if(h.IsAOConfig&&f instanceof R)return xd(f,c)}if(_==="Ambient Oclussion"&&typeof c=="boolean"&&h.IsAOConfig&&f instanceof R)return Ad(f,c);if(_==="Half Resolution"&&h.IsAOConfig&&f instanceof R&&typeof c=="boolean")return xt(f.postproduction.n8ao.configuration,"halfRes",c);if(_==="Screen Space Radius"&&h.IsAOConfig&&f instanceof R&&typeof c=="boolean")return xt(f.postproduction.n8ao.configuration,"screenSpaceRadius",c);if(_==="Radius"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"aoRadius",c,{slider:!0,max:2,step:.1});if(_==="Denoise Samples"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"denoiseSamples",c,{slider:!0,min:1,max:16});if(_==="Samples"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"aoSamples",c,{slider:!0,min:1,max:16});if(_==="Denoise Radius"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"denoiseRadius",c,{slider:!0,min:0,max:16,step:.1});if(_==="Distance Falloff"&&h.IsAOConfig&&f instanceof R&&typeof c=="number")return I(f.postproduction.n8ao.configuration,"distanceFalloff",c,{slider:!0,min:0,max:4,step:.1});if(_==="Directional Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const w=y.three.children.find(x=>x.uuid===h.Light);return w&&w instanceof Se?xt(w,"visible",c):c}if(_==="Ambient Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const w=y.three.children.find(x=>x.uuid===h.Light);return w&&w instanceof Se?xt(w,"visible",c):c}if(_==="Position"&&h.Light&&typeof h.Light=="string"&&typeof c=="string"){const w=y.three.children.find(E=>E.uuid===h.Light);if(!(w&&w instanceof Se))return c;const{x,y:A,z:C}=JSON.parse(c),O=I(w.position,"x",x,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),N=I(w.position,"y",A,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),S=I(w.position,"z",C,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${O}${N}${S}</div>
          `}return _==="Custom Effects"&&h.IsCEConfig&&f instanceof R&&typeof c=="boolean"?Sd(f,c):_==="Color"&&h.IsOutlineConfig&&f instanceof R&&typeof c=="string"?$d(f,c):_==="Tolerance"&&h.IsOutlineConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"tolerance",c,{slider:!0,min:0,max:6,step:.01}):_==="Outline"&&h.IsOutlineConfig&&f instanceof R&&typeof c=="boolean"?xt(f.postproduction.customEffects,"outlineEnabled",c):_==="Gloss"&&h.IsGlossConfig&&f instanceof R&&typeof c=="boolean"?xt(f.postproduction.customEffects,"glossEnabled",c):_==="Min"&&h.IsGlossConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"minGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):_==="Max"&&h.IsGlossConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"maxGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):_==="Exponent"&&h.IsGlossConfig&&f instanceof R&&typeof c=="number"?I(f.postproduction.customEffects,"glossExponent",c,{slider:!0,min:0,max:5,step:.01}):_==="Gamma Correction"&&h.IsGammaConfig&&f instanceof R&&typeof c=="boolean"?Ed(f,c):c}};const d=[];for(const[,c]of i.list){const{scene:h,camera:p,renderer:b}=c,y=Oe(t,c),g={data:{Name:c instanceof va&&c.name||c.uuid},children:[]};if(h){const f={data:{Name:"Scene"}};if(y){const x=`#${y.material.uniforms.uColor.value.getHexString()}`,A=JSON.stringify({x:y.material.uniforms.uSize1.value,y:y.material.uniforms.uSize2.value}),C={data:{Name:"Grid",Value:y.three.visible,World:c.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",Value:x,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Size",Value:A,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:y.material.uniforms.uDistance.value,World:c.uuid,IsGridConfig:!0}}]};f.children||(f.children=[]),f.children.push(C)}const _=h.three.children.filter(x=>x instanceof ya);for(const x of _){const A={data:{Name:"Directional Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Position",Value:JSON.stringify(x.position),World:c.uuid,Light:x.uuid}},{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};f.children||(f.children=[]),f.children.push(A)}const w=h.three.children.filter(x=>x instanceof _a);for(const x of w){const A={data:{Name:"Ambient Light",Value:x.visible,World:c.uuid,Light:x.uuid},children:[{data:{Name:"Intensity",Value:x.intensity,World:c.uuid,Light:x.uuid}},{data:{Name:"Color",Value:`#${x.color.getHexString()}`,World:c.uuid,Light:x.uuid}}]};f.children||(f.children=[]),f.children.push(A)}f.children&&((o=f.children)==null?void 0:o.length)>0&&((s=g.children)==null||s.push(f))}if(p.three instanceof pi){const f={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:p.three.near,World:c.uuid}},{data:{Name:"Far Frustum",Value:p.three.far,World:c.uuid}},{data:{Name:"Field of View",Value:p.three.fov,World:c.uuid}}]};if(p.hasCameraControls()){const{controls:_}=p,w={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const x in w){const A=_[x];A!=null&&((r=f.children)==null||r.push({data:{Name:w[x],Value:A,World:c.uuid}}))}}(a=g.children)==null||a.push(f)}if(b instanceof R){const{postproduction:f}=b,_=f.n8ao.configuration,w={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:f.settings.gamma??!1,World:c.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:f.settings.ao??!1,World:c.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:_.aoSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${_.color.getHexString()}`,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:_.halfRes,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:_.screenSpaceRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:_.aoRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:_.intensity,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:_.distanceFalloff,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:_.denoiseSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:_.denoiseRadius,World:c.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:f.settings.custom??!1,World:c.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:f.customEffects.glossEnabled,World:c.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:f.customEffects.minGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:f.customEffects.maxGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:f.customEffects.glossExponent,World:c.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:f.customEffects.outlineEnabled,World:c.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const x=new fe(f.customEffects.lineColor),A=f.customEffects.opacity;return JSON.stringify({color:`#${x.getHexString()}`,opacity:A})},World:c.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:f.customEffects.tolerance,World:c.uuid,IsOutlineConfig:!0}}]}]}]};(l=g.children)==null||l.push(w)}d.push(g)}u.columns=[{name:"Name",width:"11rem"}],u.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],u.data=d})} headers-hidden expanded>
     <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No worlds to configure
      </bim-label>
    </bim-table>
  `},Td=(e,t=!0)=>{const i=z.create(kd,e);if(t){const[,n]=i,{components:o}=e;o.get(Xe).list.onItemDeleted.add(()=>n())}return i},Od=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:Td},Symbol.toStringTag,{value:"Module"})),ee=(e,t)=>{const i=t[e],n=(i==null?void 0:i.name)??e,o=n.trim().split(/\s+/);let s,r;return o[0]&&o[0][0]&&(s=o[0][0].toUpperCase(),o[0][1]&&(r=o[0][1].toUpperCase())),o[1]&&o[1][0]&&(r=o[1][0].toUpperCase()),m`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(i!=null&&i.picture)&&(s||r)?m`
        <bim-label
          style=${Ht({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${r}</bim-label>
        `:null}
      <bim-label .img=${i==null?void 0:i.picture}>${n}</bim-label>
    </div>
  `},J={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},ie={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ii=globalThis,Ni=Ii.trustedTypes,Vo=Ni?Ni.createPolicy("lit-html",{createHTML:e=>e}):void 0,Wr="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Yr="?"+Ct,Pd=`<${Yr}>`,Wt=document,We=()=>Wt.createComment(""),Ye=e=>e===null||typeof e!="object"&&typeof e!="function",Wn=Array.isArray,Id=e=>Wn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",un=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qo=/-->/g,Wo=/>/g,jt=RegExp(`>|${un}(?:([^\\s"'>=/]+)(${un}*=${un}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yo=/'/g,Go=/"/g,Gr=/^(?:script|style|textarea|title)$/i,Nd=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Yn=Nd(1),he=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Xo=new WeakMap,Dt=Wt.createTreeWalker(Wt,129);function Xr(e,t){if(!Wn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vo!==void 0?Vo.createHTML(t):t}const Rd=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=Pe;for(let a=0;a<i;a++){const l=e[a];let u,d,c=-1,h=0;for(;h<l.length&&(r.lastIndex=h,d=r.exec(l),d!==null);)h=r.lastIndex,r===Pe?d[1]==="!--"?r=qo:d[1]!==void 0?r=Wo:d[2]!==void 0?(Gr.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=jt):d[3]!==void 0&&(r=jt):r===jt?d[0]===">"?(r=o??Pe,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?jt:d[3]==='"'?Go:Yo):r===Go||r===Yo?r=jt:r===qo||r===Wo?r=Pe:(r=jt,o=void 0);const p=r===jt&&e[a+1].startsWith("/>")?" ":"";s+=r===Pe?l+Pd:c>=0?(n.push(u),l.slice(0,c)+Wr+l.slice(c)+Ct+p):l+Ct+(c===-2?a:p)}return[Xr(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Ge{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const a=t.length-1,l=this.parts,[u,d]=Rd(t,i);if(this.el=Ge.createElement(u,n),Dt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=Dt.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Wr)){const h=d[r++],p=o.getAttribute(c).split(Ct),b=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:b[2],strings:p,ctor:b[1]==="."?Ld:b[1]==="?"?jd:b[1]==="@"?zd:Ki}),o.removeAttribute(c)}else c.startsWith(Ct)&&(l.push({type:6,index:s}),o.removeAttribute(c));if(Gr.test(o.tagName)){const c=o.textContent.split(Ct),h=c.length-1;if(h>0){o.textContent=Ni?Ni.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],We()),Dt.nextNode(),l.push({type:2,index:++s});o.append(c[h],We())}}}else if(o.nodeType===8)if(o.data===Yr)l.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Ct,c+1))!==-1;)l.push({type:7,index:s}),c+=Ct.length-1}s++}}static createElement(t,i){const n=Wt.createElement("template");return n.innerHTML=t,n}}function pe(e,t,i=e,n){var o,s;if(t===he)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const a=Ye(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),a===void 0?r=void 0:(r=new a(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=pe(e,r._$AS(e,t.values),r,n)),t}class Md{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Wt).importNode(i,!0);Dt.currentNode=o;let s=Dt.nextNode(),r=0,a=0,l=n[0];for(;l!==void 0;){if(r===l.index){let u;l.type===2?u=new ci(s,s.nextSibling,this,t):l.type===1?u=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(u=new Dd(s,this,t)),this._$AV.push(u),l=n[++a]}r!==(l==null?void 0:l.index)&&(s=Dt.nextNode(),r++)}return Dt.currentNode=Wt,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ci{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=pe(this,t,i),Ye(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==he&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Id(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&Ye(this._$AH)?this._$AA.nextSibling.data=t:this.T(Wt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Ge.createElement(Xr(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new Md(s,this),a=r.u(this.options);r.p(n),this.T(a),this._$AH=r}}_$AC(t){let i=Xo.get(t.strings);return i===void 0&&Xo.set(t.strings,i=new Ge(t)),i}k(t){Wn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new ci(this.O(We()),this.O(We()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Ki{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=pe(this,t,i,0),r=!Ye(t)||t!==this._$AH&&t!==he,r&&(this._$AH=t);else{const a=t;let l,u;for(t=s[0],l=0;l<s.length-1;l++)u=pe(this,a[n+l],i,l),u===he&&(u=this._$AH[l]),r||(r=!Ye(u)||u!==this._$AH[l]),u===j?t=j:t!==j&&(t+=(u??"")+s[l+1]),this._$AH[l]=u}r&&!o&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ld extends Ki{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class jd extends Ki{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class zd extends Ki{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=pe(this,t,i,0)??j)===he)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Dd{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){pe(this,t)}}const Jo=Ii.litHtmlPolyfillSupport;Jo==null||Jo(Ge,ci),(Ii.litHtmlVersions??(Ii.litHtmlVersions=[])).push("3.2.1");const Fd=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new ci(t.insertBefore(We(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hd=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bd={CHILD:2},Ud=e=>(...t)=>({_$litDirective$:e,values:t});let Vd=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Le(o,t);return!0},Ri=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Jr=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Yd(t)}};function qd(e){this._$AN!==void 0?(Ri(this),this._$AM=e,Jr(this)):this._$AM=e}function Wd(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Le(n[s],!1),Ri(n[s]);else n!=null&&(Le(n,!1),Ri(n));else Le(this,e)}const Yd=e=>{e.type==Bd.CHILD&&(e._$AP??(e._$AP=Wd),e._$AQ??(e._$AQ=qd))};let Gd=class extends Vd{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Jr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(Le(this,e),Ri(this))}setValue(e){if(Hd(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=()=>new Xd;let Xd=class{};const dn=new WeakMap,Jd=Ud(class extends Gd{render(e){return j}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),j}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=dn.get(t);i===void 0&&(i=new WeakMap,dn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=dn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qd={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},Qr=e=>{const{components:t,topic:i,value:n,onCancel:o,onSubmit:s,styles:r}=e,a=s??(()=>{}),l=t.get(Je),u=(n==null?void 0:n.title)??(i==null?void 0:i.title)??_t.default.title,d=(n==null?void 0:n.status)??(i==null?void 0:i.status)??_t.default.status,c=(n==null?void 0:n.type)??(i==null?void 0:i.type)??_t.default.type,h=(n==null?void 0:n.priority)??(i==null?void 0:i.priority)??_t.default.priority,p=(n==null?void 0:n.assignedTo)??(i==null?void 0:i.assignedTo)??_t.default.assignedTo,b=(n==null?void 0:n.labels)??(i==null?void 0:i.labels)??_t.default.labels,y=(n==null?void 0:n.stage)??(i==null?void 0:i.stage)??_t.default.stage,g=(n==null?void 0:n.description)??(i==null?void 0:i.description)??_t.default.description,f=i!=null&&i.dueDate?i.dueDate.toISOString().split("T")[0]:null,_=new Set([...l.config.statuses]);d&&_.add(d);const w=new Set([...l.config.types]);c&&w.add(c);const x=new Set([...l.config.priorities]);h&&x.add(h);const A=new Set([...l.config.users]);p&&A.add(p);const C=new Set([...l.config.labels]);if(b)for(const $ of b)C.add($);const O=new Set([...l.config.stages]);y&&O.add(y);const N=Sn(),S=async()=>{const{value:$}=N;if(!$)return;const L=qe($,Qd);if(i)i.set(L),await a(i);else{const V=l.create(L);await a(V)}},E=Sn(),B=$=>{const{value:L}=E;if(!L)return;const V=$.target;L.disabled=V.value.trim()===""},Y=`btn-${Z.newRandomId()}`,q=`btn-${Z.newRandomId()}`;return m`
    <div ${W(N)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${B} vertical label="Title" name="title" .value=${u}></bim-text-input>
        ${i?m`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[..._].map($=>m`<bim-option label=${$} .checked=${d===$}></bim-option>`)}
            </bim-dropdown>`:m``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[...w].map($=>m`<bim-option label=${$} .checked=${c===$}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...x].map($=>m`<bim-option label=${$} .checked=${h===$}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...C].map($=>m`<bim-option label=${$} .checked=${b?[...b].includes($):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...A].map($=>{const L=r!=null&&r.users?r.users[$]:null,V=L?L.name:$,tt=L==null?void 0:L.picture;return m`<bim-option label=${V} value=${$} .img=${tt} .checked=${p===$}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${f}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...O].map($=>m`<bim-option label=${$} .checked=${y===$}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${g??null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${q} {
            background-color: transparent;
          }

          #${q}:hover {
            --bim-label--c: #FF5252;
          }

          #${Y}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${q} style="flex: 0" @click=${o} label="Cancel"></bim-button>
        <bim-button id=${Y} style="flex: 0" @click=${S} ${W(E)} label=${i?"Update Topic":"Add Topic"} icon=${i?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},Zd=e=>{const{components:t,dataStyles:i,onTopicEnter:n}=e,o=t.get(Je),s=e.topics??o.list.values();return m`
    <bim-table no-indentation ${W(r=>{if(!r)return;const a=r;a.hiddenColumns.length===0&&(a.hiddenColumns=["Guid"]),a.columns=["Title"],a.dataTransform={Title:(l,u)=>{const{Guid:d}=u;if(typeof d!="string")return l;const c=o.list.get(d);if(!c)return l;const h=`btn-${Z.newRandomId()}`;return m`
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
        `},Priority:l=>{if(typeof l!="string")return l;const u=((i==null?void 0:i.priorities)??J.priorities)[l];return m`
          <bim-label
            .icon=${u==null?void 0:u.icon}
            style=${Ht({...ie,...u==null?void 0:u.style})}
          >${l}
          </bim-label>
        `},Status:l=>{if(typeof l!="string")return l;const u=((i==null?void 0:i.statuses)??J.statuses)[l];return m`
          <bim-label
            .icon=${u==null?void 0:u.icon}
            style=${Ht({...ie,...u==null?void 0:u.style})}
          >${l}
          </bim-label>
        `},Type:l=>{if(typeof l!="string")return l;const u=((i==null?void 0:i.types)??J.types)[l];return m`
          <bim-label
            .icon=${u==null?void 0:u.icon}
            style=${Ht({...ie,...u==null?void 0:u.style})}
          >${l}
          </bim-label>
        `},Author:l=>typeof l!="string"?l:ee(l,(i==null?void 0:i.users)??J.users),Assignee:l=>typeof l!="string"?l:ee(l,(i==null?void 0:i.users)??J.users)},a.data=[...s].map(l=>{var u;return{data:{Guid:l.guid,Title:l.title,Status:l.status,Description:l.description??"",Author:l.creationAuthor,Assignee:l.assignedTo??"",Date:l.creationDate.toDateString(),DueDate:((u=l.dueDate)==null?void 0:u.toDateString())??"",Type:l.type,Priority:l.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>
  `},Zr=(e,t=!0)=>{const i=z.create(Zd,e);if(t){const{components:n,topics:o}=e,[,s]=i,r=n.get(Je);if(r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),o)for(const a of o)a.relatedTopics.onItemAdded.add(()=>s()),a.relatedTopics.onItemDeleted.add(()=>s()),a.relatedTopics.onCleared.add(()=>s());else r.list.onItemSet.add(()=>s())}return i},Kd=Object.freeze(Object.defineProperty({__proto__:null,topicsList:Zr},Symbol.toStringTag,{value:"Module"})),th=e=>{const{topic:t,styles:i,viewpoint:n}=e,o={delete:!0,...e.actions};return m`
    <bim-table no-indentation ${W(s=>{if(!s)return;const r=s;r.headersHidden=!0,r.hiddenColumns=["guid","author"],r.dataTransform={Comment:(l,u)=>{const{guid:d}=u;if(typeof d!="string")return l;const c=t.comments.get(d);if(!c)return l;const h=()=>{t.comments.delete(d)},p=`btn-${Z.newRandomId()}`;return m`
          <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; gap: 0.375rem;">
                ${ee(c.author,i??J.users)}
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
        `}};let a=t.comments.values();n&&(a=[...t.comments.values()].filter(l=>l.viewpoint===n)),r.data=[...a].map(l=>({data:{guid:l.guid,Comment:l.comment,author:(()=>{const u=i;if(!u)return l.author;const d=u[l.author];return(d==null?void 0:d.name)??l.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label>
    </bim-table>
  `},Kr=(e,t=!0)=>{const i=z.create(th,e);if(t){const{topic:n}=e,[o,s]=i;n.comments.onItemSet.add(()=>s()),n.comments.onItemUpdated.add(()=>s()),n.comments.onItemDeleted.add(()=>s()),n.comments.onCleared.add(()=>s())}return i},eh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Kr},Symbol.toStringTag,{value:"Module"})),ih=e=>{var t;const{components:i,topic:n}=e,o={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!n,...e.actions},s=i.get(Di),r=((t=e.topic)==null?void 0:t.viewpoints)??s.list.keys(),a=[];for(const l of r){const u=s.list.get(l);u&&a.push(u)}return m`
    <bim-table no-indentation ${W(l=>{if(!l)return;const u=l;u.addEventListener("cellcreated",({detail:d})=>{const{cell:c}=d;c.style.padding="0.25rem"}),u.headersHidden=!0,u.hiddenColumns=["Guid"],u.columns=["Title",{name:"Actions",width:"auto"}],u.dataTransform={Actions:(d,c)=>{const{Guid:h}=c;if(!(h&&typeof h=="string"))return h||"";const p=s.list.get(h);return p?m`
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
        `:h}},u.data=a.map((d,c)=>({data:{Guid:d.guid,Title:d.title??`Viewpoint ${e.topic?c+1:""}`,Actions:""}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No viewpoints to show</bim-label>
    </bim-table>
  `},ta=(e,t=!0)=>{const i=z.create(ih,e),{components:n,topic:o}=e;if(t){const[,s]=i,r=n.get(Di);r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),r.list.onCleared.add(()=>s()),o?(o.viewpoints.onItemAdded.add(()=>s()),o.viewpoints.onItemDeleted.add(()=>s()),o.viewpoints.onCleared.add(()=>s())):r.list.onItemSet.add(()=>s())}return i},nh=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ta},Symbol.toStringTag,{value:"Module"})),oh={...Yu,...Ju,...Ku,...fd,..._d,...Od,...Kd,...eh,...nh},sh=e=>m`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${Qr(e)}
    </bim-panel-section>
  `,rh=e=>z.create(sh,e),ah=Object.freeze(Object.defineProperty({__proto__:null,topic:rh},Symbol.toStringTag,{value:"Module"})),lh={...ah},ch=(e,t)=>{const{components:i,editing:n,topic:o,styles:s}=e,r={update:!0,...e.actions},a=(s==null?void 0:s.priorities)??J.priorities,l=(s==null?void 0:s.statuses)??J.statuses,u=(s==null?void 0:s.types)??J.types;let d;o!=null&&o.priority&&(d=a[o.priority]);let c;o!=null&&o.type&&(c=u[o.type]);let h;o!=null&&o.type&&(h=l[o.status]);let p,b;return n?p=Qr({components:i,topic:o,styles:s,onSubmit:()=>{t({editing:!1})},onCancel:()=>{t({editing:!1})}}):b=m`
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
        <bim-label .icon=${h==null?void 0:h.icon} style=${Ht({...ie,...h==null?void 0:h.style})}
        >${o.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${c==null?void 0:c.icon} style=${Ht({...ie,...c==null?void 0:c.style})}
        >${o.type}
        </bim-label>
      </div>

      ${o.priority?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${d==null?void 0:d.icon} style=${Ht({...ie,...d==null?void 0:d.style})}
              >${o.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${ee(o.creationAuthor,(s==null?void 0:s.users)??J.users)}
      </div>

      ${o.assignedTo?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${ee(o.assignedTo,(s==null?void 0:s.users)??J.users)}
          </div>`:null}

      ${o.dueDate?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${o.modifiedAuthor?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${ee(o.modifiedAuthor,(s==null?void 0:s.users)??J.users)}
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
      ${n?p:b}
    </div>
  `},uh=e=>z.create(ch,e),dh=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:uh},Symbol.toStringTag,{value:"Module"})),hh=(e,t)=>{const{showInput:i,topic:n,styles:o}=e,s={add:!0,delete:!0,...e.actions},r=`input-${Z.newRandomId()}`,a=`btn-${Z.newRandomId()}`,l=`btn-${Z.newRandomId()}`,u=()=>document.getElementById(a),d=()=>document.getElementById(r),c=()=>{const w=d();return w?w.value.trim().length>0:!1},h=()=>{t({showInput:!0})},p=()=>{const w=d(),x=c();w&&x&&(n.createComment(w.value),t({showInput:!1}))},b=()=>{t({showInput:!1})},y=()=>{const w=u();if(w){if(!d()){w.disabled=!0;return}w.disabled=!c()}},g=m`
    ${s.add?m`<bim-button @click=${h} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,f=m`
    <bim-text-input id=${r} @input=${y} @keypress=${w=>{w.code==="Enter"&&w.ctrlKey&&p()}} type="area"></bim-text-input>

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

      <bim-button style="flex: 0" id=${l} @click=${b} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${a} @click=${p} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[_]=Kr({topic:n,actions:s,styles:o??J.users});return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${_}
      ${i?f:g}
    </div>
  `},ph=e=>z.create(hh,e),mh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:ph},Symbol.toStringTag,{value:"Module"})),fh=(e,t)=>{const{components:i,topic:n,linking:o}=e,s=i.get(Je),r={link:!0,...e.actions},[a,l]=Zr({components:i,topics:[...n.relatedTopics].map(h=>s.list.get(h)).map(h=>h)});a.headersHidden=!0,a.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const u=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${h=>{const p=h.target;p instanceof rt&&(a.queryString=p.value)}}></bim-text-input> 
    `;let d,c;if(o){a.selectableRows=!0,l({topics:void 0});const h=a.data.filter(f=>{const{Guid:_}=f.data;return typeof _!="string"?!1:n.relatedTopics.has(_)}).map(f=>f.data);a.selection=new Set(h);const p=()=>{const f=[...a.selection].map(({Guid:_})=>typeof _!="string"?null:s.list.has(_)?_:null).map(_=>_);n.relatedTopics.clear(),n.relatedTopics.add(...f),t({linking:!1})},b=()=>{t({linking:!1})},y=`btn-${Z.newRandomId()}`,g=`btn-${Z.newRandomId()}`;d=m`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${y}:hover {
            background-color: #329936;
          }  

          #${g} {
            background-color: transparent;
          }

          #${g}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${u()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${g} @click=${b} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${y} @click=${p} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{a.selectableRows=!1;const h=()=>{t({linking:!0})};c=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${u()}
        ${r.link?m`<bim-button style="flex: 0" @click=${h} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${c}
      ${d}
      ${a}
    </div> 
  `},bh=e=>z.create(fh,e),gh=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:bh},Symbol.toStringTag,{value:"Module"})),vh=(e,t)=>{const{components:i,topic:n,world:o,linking:s}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},a=i.get(Di),[l,u]=ta({components:i,topic:n,actions:r}),d=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${p=>{const b=p.target;b instanceof rt&&(l.queryString=b.value)}}></bim-text-input> 
    `;let c,h;if(s){l.selectableRows=!0,u({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const p=l.data.filter(_=>{const{Guid:w}=_.data;return typeof w!="string"?!1:n.viewpoints.has(w)}).map(_=>_.data);l.selection=new Set(p);const b=()=>{const _=[...l.selection].map(({Guid:w})=>typeof w!="string"?null:a.list.has(w)?w:null).map(w=>w);n.viewpoints.clear(),n.viewpoints.add(..._),t({linking:!1})},y=()=>{t({linking:!1})},g=`btn-${Z.newRandomId()}`,f=`btn-${Z.newRandomId()}`;c=m`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${g}:hover {
            background-color: #329936;
          }  

          #${f} {
            background-color: transparent;
          }

          #${f}:hover {
            --bim-label--c: #FF5252;
          }
        </style>
        ${d()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${f} @click=${y} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${g} @click=${b} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{l.selectableRows=!1,u({topic:n,actions:r});const p=()=>{if(!(n&&o&&r.add&&!s))return;const f=a.create(o);n.viewpoints.add(f.guid)},b=()=>{t({linking:!0})},y=m`<bim-button style="flex: 0" @click=${p} .disabled=${!o} icon="mi:add"></bim-button>`,g=m`<bim-button style="flex: 0" @click=${b} icon="tabler:link"></bim-button>`;h=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${d()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          ${r.add?y:null}
          ${r.link?g:null}
        </div>
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${h}
      ${c}
      ${l}
    </div> 
  `},yh=e=>z.create(vh,e),_h=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:yh},Symbol.toStringTag,{value:"Module"})),gi={...dh,...mh,...gh,..._h};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=globalThis,Gn=wi.ShadowRoot&&(wi.ShadyCSS===void 0||wi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xn=Symbol(),Qo=new WeakMap;let ea=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Xn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Gn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Qo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Qo.set(t,e))}return e}toString(){return this.cssText}};const wh=e=>new ea(typeof e=="string"?e:e+"",void 0,Xn),Jn=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new ea(i,e,Xn)},xh=(e,t)=>{if(Gn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=wi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},Zo=Gn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return wh(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$h,defineProperty:Ch,getOwnPropertyDescriptor:Ah,getOwnPropertyNames:Eh,getOwnPropertySymbols:Sh,getPrototypeOf:kh}=Object,me=globalThis,Ko=me.trustedTypes,Th=Ko?Ko.emptyScript:"",ts=me.reactiveElementPolyfillSupport,je=(e,t)=>e,Mi={toAttribute(e,t){switch(t){case Boolean:e=e?Th:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Qn=(e,t)=>!$h(e,t),es={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:Qn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);class Kt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=es){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&Ch(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=Ah(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const a=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??es}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const t=kh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const i=this.properties,n=[...Eh(i),...Sh(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(Zo(o))}else t!==void 0&&i.push(Zo(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xh(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Mi).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Mi;this._$Em=s,this[s]=a.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Qn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[je("elementProperties")]=new Map,Kt[je("finalized")]=new Map,ts==null||ts({ReactiveElement:Kt}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bt=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fd(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return he}};var is;Bt._$litElement$=!0,Bt.finalized=!0,(is=globalThis.litElementHydrateSupport)==null||is.call(globalThis,{LitElement:Bt});const ns=globalThis.litElementPolyfillSupport;ns==null||ns({LitElement:Bt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oh={attribute:!0,type:String,converter:Mi,reflect:!1,hasChanged:Qn},Ph=(e=Oh,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,e)},init(a){return a!==void 0&&this.P(r,void 0,e),a}}}if(n==="setter"){const{name:r}=i;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,e)}}throw Error("Unsupported decorator location: "+n)};function G(e){return(t,i)=>typeof i=="object"?Ph(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ih(e){return G({...e,state:!0,attribute:!1})}class Nh extends Ca{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Aa(.5,.5),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof Element&&i.element.parentNode!==null&&i.element.parentNode.removeChild(i.element)})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new kn;new zi;new zi;new kn;new kn;class Rh{constructor(t,i){this._group=new eo,this._frustum=new ma,this._frustumMat=new zi,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new fa({color:"#2e3338"}),this.numbers=new eo,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=i;const n=this.newGrid(-1),o=this.newGrid(-2);this.grids={main:n,secondary:o},this._group.add(o,n,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:i}=this.grids;t.removeFromParent(),i.removeFromParent(),t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:i}=this._frustum,n=i[0].constant*-i[0].normal.x,o=i[1].constant*-i[1].normal.x,s=i[2].constant*-i[2].normal.y,r=i[3].constant*-i[3].normal.y,a=Math.abs(n-o),l=Math.abs(r-s),{clientWidth:u,clientHeight:d}=this._container,c=Math.max(u,d),h=Math.max(a,l)/c,p=Math.ceil(Math.log10(a/this.scaleX)),b=Math.ceil(Math.log10(l/this.scaleY)),y=10**(p-2)*this.scaleX,g=10**(b-2)*this.scaleY,f=y*this.gridsFactor,_=g*this.gridsFactor,w=Math.ceil(l/_),x=Math.ceil(a/f),A=Math.ceil(l/g),C=Math.ceil(a/y),O=y*Math.ceil(o/y),N=g*Math.ceil(s/g),S=f*Math.ceil(o/f),E=_*Math.ceil(s/_),B=[...this.numbers.children];for(const U of B)U.removeFromParent();this.numbers.children=[];const Y=[],q=9*h,$=1e4,L=S+this._offsetX,V=Math.round(Math.abs(L/this.scaleX)*$)/$,tt=(x-1)*f,et=Math.round(Math.abs((L+tt)/this.scaleX)*$)/$,ut=Math.max(V,et).toString().length*q;let Ae=Math.ceil(ut/f)*f;for(let U=0;U<x;U++){let D=S+U*f;Y.push(D,r,0,D,s,0),D=Math.round(D*$)/$,Ae=Math.round(Ae*$)/$;const Ee=D%Ae;if(!(f<1||_<1)&&Math.abs(Ee)>.01)continue;const hi=this.newNumber((D+this._offsetX)/this.scaleX),nn=12*h;hi.position.set(D,s+nn,0)}for(let U=0;U<w;U++){const D=E+U*_;Y.push(o,D,0,n,D,0);const Ee=this.newNumber(D/this.scaleY);let hi=12;Ee.element.textContent&&(hi+=4*Ee.element.textContent.length);const nn=hi*h;Ee.position.set(o+nn,D,0)}const en=[];for(let U=0;U<C;U++){const D=O+U*y;en.push(D,r,0,D,s,0)}for(let U=0;U<A;U++){const D=N+U*g;en.push(o,D,0,n,D,0)}const ca=new io(new Float32Array(Y),3),ua=new io(new Float32Array(en),3),{main:da,secondary:ha}=this.grids;da.geometry.setAttribute("position",ca),ha.geometry.setAttribute("position",ua)}newNumber(t){const i=document.createElement("bim-label");i.textContent=String(Math.round(t*100)/100);const n=new Nh(i);return this.numbers.add(n),n}newGrid(t){const i=new ba,n=new ga(i,this.material);return n.frustumCulled=!1,n.renderOrder=t,n}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let i=0;i<t.length;i++){const n=t[i];if(Number.isNaN(n))return!1}return!0}}var Mh=Object.defineProperty,Lh=Object.getOwnPropertyDescriptor,ui=(e,t,i,n)=>{for(var o=Lh(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Mh(t,i,o),o};const ia=class extends Bt{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const i=Number(t.replace("#","0x"));Number.isNaN(i)||this._grid.material.color.setHex(i)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(Xe).create();this._world=i,i.scene=new Tn(t),i.scene.setup(),i.renderer=new pa(t,this);const n=new os(t);i.camera=n;const o=new Rh(n.threeOrtho,this);this._grid=o,i.scene.three.add(o.get()),n.controls.addEventListener("update",()=>o.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),n.set("Plan"),await n.controls.setLookAt(0,0,100,0,0,0),await n.projection.set("Orthographic"),n.controls.dollySpeed=3,n.controls.draggingSmoothTime=.085,n.controls.maxZoom=1e3,n.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return Yn`<slot></slot>`}};ia.styles=Jn`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let di=ia;ui([G({type:String,attribute:"grid-color",reflect:!0})],di.prototype,"gridColor");ui([G({type:Number,attribute:"grid-scale-x",reflect:!0})],di.prototype,"gridScaleX");ui([G({type:Number,attribute:"grid-scale-y",reflect:!0})],di.prototype,"gridScaleY");ui([G({type:Number,attribute:"grid-offset-x",reflect:!0})],di.prototype,"gridOffsetX");ui([G({type:Number,attribute:"grid-offset-y",reflect:!0})],di.prototype,"gridOffsetY");var jh=Object.defineProperty,Nt=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&jh(t,i,o),o};const na=class extends Bt{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new zi,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}render(){const t=this.size??this._defaults.size;return Yn`
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
    `}};na.styles=Jn`
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
  `;let Rt=na;Nt([G({type:Number,reflect:!0})],Rt.prototype,"size");Nt([G({type:String,attribute:"right-text",reflect:!0})],Rt.prototype,"rightText");Nt([G({type:String,attribute:"left-text",reflect:!0})],Rt.prototype,"leftText");Nt([G({type:String,attribute:"top-text",reflect:!0})],Rt.prototype,"topText");Nt([G({type:String,attribute:"bottom-text",reflect:!0})],Rt.prototype,"bottomText");Nt([G({type:String,attribute:"front-text",reflect:!0})],Rt.prototype,"frontText");Nt([G({type:String,attribute:"back-text",reflect:!0})],Rt.prototype,"backText");Nt([Ih()],Rt.prototype,"_cssMatrix3D");var zh=Object.defineProperty,Dh=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&zh(t,i,o),o};const oa=class extends Bt{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=Sn()}set components(t){var i;if(this._components=t,this.components){const n=this.components.get(Xe);this.world=n.create(),this.world.name=this.name}else(i=this.world)==null||i.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const i=new Tn(this.components);this.world.scene=i,i.setup(),i.three.background=null;const n=new R(this.components,t);this.world.renderer=n;const{postproduction:o}=n,s=new os(this.components);this.world.camera=s;const r=this.components.get(On).create(this.world);r.material.uniforms.uColor.value=new fe(4342338),r.material.uniforms.uSize1.value=2,r.material.uniforms.uSize2.value=8,o.enabled=!0,o.customEffects.excludedMeshes.push(r.three),o.setPasses({custom:!0,ao:!0,gamma:!0}),o.customEffects.lineColor=1513756}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return Yn` <bim-viewport ${Jd(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};oa.styles=Jn``;let Fh=oa;Dh([G({type:String,reflect:!0})],Fh.prototype,"name");Na.init();const Zn=document.createElement("bim-viewport"),at=new Ra,Hh=at.get(Xe),Qt=Hh.create(),sa=new Tn(at);sa.setup();Qt.scene=sa;const ra=new Ma(at,Zn);Qt.renderer=ra;const Kn=new La(at);Qt.camera=Kn;Kn.controls.setLookAt(10,5.5,5,-4,-1,-6.5);Zn.addEventListener("resize",()=>{ra.resize(),Kn.updateAspect()});at.init();const Bh=at.get(On);Bh.create(Qt);const aa=at.get(ss);await aa.setup();const Uh=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),Vh=await Uh.arrayBuffer(),qh=new Uint8Array(Vh),Wh=await aa.load(qh);Qt.scene.three.add(Wh);const tn={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},ne=at.get(Je);ne.setup({users:new Set(Object.keys(tn)),labels:new Set(["Architecture","Structure","MEP"])});const Yh=at.get(Di);ne.list.onItemSet.add(({value:e})=>{const t=Yh.create(Qt);e.viewpoints.add(t.guid)});const[Li,Gh]=oh.topicsList({components:at,dataStyles:{users:tn}});Li.selectableRows=!0;const[Xh,Jh]=lh.topic({components:at,styles:{users:tn}}),ji=Qe.create(()=>dt`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${Xh}
     </bim-panel> 
    </dialog>
  `);document.body.append(ji);const Qh=Qe.create(()=>dt`
    <bim-button style="flex: 0" @click=${()=>{ji.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);Jh({onCancel:()=>{ji.close()},onSubmit:()=>{ji.close()}});const[Zh,la]=Qe.create(e=>{const{components:t,topic:i,world:n,actions:o,styles:s}=e;let r,a;if(i){const[l]=gi.topicInformation({components:t,topic:i,actions:o==null?void 0:o.information,styles:s}),[u]=gi.topicViewpoints({components:t,topic:i,world:n,actions:o==null?void 0:o.viewpoints}),[d]=gi.topicRelations({components:t,topic:i,actions:o==null?void 0:o.relatedTopics}),[c]=gi.topicComments({topic:i,actions:o==null?void 0:o.comments,styles:s==null?void 0:s.users}),h=()=>{window.alert(`An email will be sent to ${i.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=dt`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${l}
        </bim-panel-section>
        <bim-panel-section label="Comments" icon="majesticons:comment-line">
          ${c}
        </bim-panel-section>
        <bim-panel-section label="Viewpoints" icon="tabler:camera">
          ${u}
        </bim-panel-section>
        <bim-panel-section label="Related Topics" icon="tabler:link">
          ${d}
        </bim-panel-section>
        <!-- This is a custom section where you can add any functionality you like -->
        <bim-panel-section label="Communication" icon="tabler:link">
          ${i.assignedTo?dt`
                <bim-button @click=${h} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `:dt`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `}
        </bim-panel-section>
      `}else a=dt`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${i?null:dt`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return dt`
      <bim-panel>
        ${a}
        ${r}
      </bim-panel> 
    `},{components:at,world:Qt,styles:{users:tn}});ne.list.onItemUpdated.add(()=>la());Gh({onTopicEnter:e=>{la({topic:e})}});const Kh=Qe.create(()=>dt`<bim-button style="flex: 0" @click=${async()=>{const t=[...Li.selection].map(({Guid:r})=>r&&typeof r=="string"?ne.list.get(r):null).filter(r=>r),i=t.length>0?t:[...ne.list.values()];if(i.length===0)return;const n=await ne.export(i),o=new File([n],"topics.bcf"),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=o.name,s.click(),URL.revokeObjectURL(s.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),tp=Qe.create(()=>dt`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${t=>{const i=t.target;Li.queryString=i.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${Qh}
            ${Kh}
          </div> 
        </div> 
        ${Li}
      </bim-panel-section>
    </bim-panel>
  `),to=document.createElement("bim-grid");to.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,elements:{bcfPanel:tp,viewport:Zn,customTopicPanel:Zh}}};to.layout="main";document.body.append(to);
