import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as kn,M as zi,W as Xe,S as Tn,X as pa,O as no,i as M,G as On,j as fe,l as Di,n as Je,F as qt,o as mt,e as es,f as ma,L as fa,B as is,g as ba,h as ga,I as so,P as pi,p as Se,q as va,D as ya,r as _a,s as wa,t as $a,H as oo,u as xa,c as Ca,V as Aa,v as Ea,w as $i,x as _t,R as Sa,z as ro,E as ao,J as ka,K as lo,N as Ta,Q as Oa,U as co,Y as uo,Z as Ia,_ as Na,T as Pa,C as Ma,a as La,b as Ra,k as Qe,m as dt}from"./index-DIiSmYK8.js";var ja=Object.defineProperty,za=(e,t,i)=>t in e?ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Lt=(e,t,i)=>(za(e,typeof t!="symbol"?t+"":t,i),i);const se=Math.min,bt=Math.max,xi=Math.round,At=e=>({x:e,y:e}),Da={left:"right",right:"left",bottom:"top",top:"bottom"},Fa={start:"end",end:"start"};function ns(e,t,i){return bt(e,se(t,i))}function Ze(e,t){return typeof e=="function"?e(t):e}function gt(e){return e.split("-")[0]}function Fi(e){return e.split("-")[1]}function ho(e){return e==="x"?"y":"x"}function po(e){return e==="y"?"height":"width"}function Ut(e){return["top","bottom"].includes(gt(e))?"y":"x"}function mo(e){return ho(Ut(e))}function Ha(e,t,i){i===void 0&&(i=!1);const n=Fi(e),s=mo(e),o=po(s);let r=s==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=Ci(r)),[r,Ci(r)]}function Ba(e){const t=Ci(e);return[hn(e),t,hn(t)]}function hn(e){return e.replace(/start|end/g,t=>Fa[t])}function Ua(e,t,i){const n=["left","right"],s=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?t?s:n:t?n:s;case"left":case"right":return t?o:r;default:return[]}}function Va(e,t,i,n){const s=Fi(e);let o=Ua(gt(e),i==="start",n);return s&&(o=o.map(r=>r+"-"+s),t&&(o=o.concat(o.map(hn)))),o}function Ci(e){return e.replace(/left|right|bottom|top/g,t=>Da[t])}function Wa(e){return{top:0,right:0,bottom:0,left:0,...e}}function fo(e){return typeof e!="number"?Wa(e):{top:e,right:e,bottom:e,left:e}}function oe(e){const{x:t,y:i,width:n,height:s}=e;return{width:n,height:s,top:i,left:t,right:t+n,bottom:i+s,x:t,y:i}}function ss(e,t,i){let{reference:n,floating:s}=e;const o=Ut(t),r=mo(t),l=po(r),a=gt(t),u=o==="y",d=n.x+n.width/2-s.width/2,c=n.y+n.height/2-s.height/2,h=n[l]/2-s[l]/2;let p;switch(a){case"top":p={x:d,y:n.y-s.height};break;case"bottom":p={x:d,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:c};break;case"left":p={x:n.x-s.width,y:c};break;default:p={x:n.x,y:n.y}}switch(Fi(t)){case"start":p[r]-=h*(i&&u?-1:1);break;case"end":p[r]+=h*(i&&u?-1:1);break}return p}const Ga=async(e,t,i)=>{const{placement:n="bottom",strategy:s="absolute",middleware:o=[],platform:r}=i,l=o.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let u=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:d,y:c}=ss(u,n,a),h=n,p={},b=0;for(let w=0;w<l.length;w++){const{name:v,fn:f}=l[w],{x:y,y:_,data:$,reset:A}=await f({x:d,y:c,initialPlacement:n,placement:h,strategy:s,middlewareData:p,rects:u,platform:r,elements:{reference:e,floating:t}});d=y??d,c=_??c,p={...p,[v]:{...p[v],...$}},A&&b<=50&&(b++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(u=A.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):A.rects),{x:d,y:c}=ss(u,h,a)),w=-1)}return{x:d,y:c,placement:h,strategy:s,middlewareData:p}};async function bo(e,t){var i;t===void 0&&(t={});const{x:n,y:s,platform:o,rects:r,elements:l,strategy:a}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:c="floating",altBoundary:h=!1,padding:p=0}=Ze(t,e),b=fo(p),w=l[h?c==="floating"?"reference":"floating":c],v=oe(await o.getClippingRect({element:(i=await(o.isElement==null?void 0:o.isElement(w)))==null||i?w:w.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:a})),f=c==="floating"?{x:n,y:s,width:r.floating.width,height:r.floating.height}:r.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),_=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},$=oe(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:f,offsetParent:y,strategy:a}):f);return{top:(v.top-$.top+b.top)/_.y,bottom:($.bottom-v.bottom+b.bottom)/_.y,left:(v.left-$.left+b.left)/_.x,right:($.right-v.right+b.right)/_.x}}const qa=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:s,middlewareData:o,rects:r,initialPlacement:l,platform:a,elements:u}=t,{mainAxis:d=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:w=!0,...v}=Ze(e,t);if((i=o.arrow)!=null&&i.alignmentOffset)return{};const f=gt(s),y=Ut(l),_=gt(l)===l,$=await(a.isRTL==null?void 0:a.isRTL(u.floating)),A=h||(_||!w?[Ci(l)]:Ba(l)),C=b!=="none";!h&&C&&A.push(...Va(l,w,b,$));const O=[l,...A],P=await bo(t,v),S=[];let E=((n=o.flip)==null?void 0:n.overflows)||[];if(d&&S.push(P[f]),c){const x=Ha(s,r,$);S.push(P[x[0]],P[x[1]])}if(E=[...E,{placement:s,overflows:S}],!S.every(x=>x<=0)){var B,q;const x=(((B=o.flip)==null?void 0:B.index)||0)+1,R=O[x];if(R)return{data:{index:x,overflows:E},reset:{placement:R}};let V=(q=E.filter(tt=>tt.overflows[0]<=0).sort((tt,et)=>tt.overflows[1]-et.overflows[1])[0])==null?void 0:q.placement;if(!V)switch(p){case"bestFit":{var W;const tt=(W=E.filter(et=>{if(C){const ut=Ut(et.placement);return ut===y||ut==="y"}return!0}).map(et=>[et.placement,et.overflows.filter(ut=>ut>0).reduce((ut,Ae)=>ut+Ae,0)]).sort((et,ut)=>et[1]-ut[1])[0])==null?void 0:W[0];tt&&(V=tt);break}case"initialPlacement":V=l;break}if(s!==V)return{reset:{placement:V}}}return{}}}};function go(e){const t=se(...e.map(o=>o.left)),i=se(...e.map(o=>o.top)),n=bt(...e.map(o=>o.right)),s=bt(...e.map(o=>o.bottom));return{x:t,y:i,width:n-t,height:s-i}}function Ya(e){const t=e.slice().sort((s,o)=>s.y-o.y),i=[];let n=null;for(let s=0;s<t.length;s++){const o=t[s];!n||o.y-n.y>n.height/2?i.push([o]):i[i.length-1].push(o),n=o}return i.map(s=>oe(go(s)))}const Xa=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:n,rects:s,platform:o,strategy:r}=t,{padding:l=2,x:a,y:u}=Ze(e,t),d=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(n.reference))||[]),c=Ya(d),h=oe(go(d)),p=fo(l);function b(){if(c.length===2&&c[0].left>c[1].right&&a!=null&&u!=null)return c.find(v=>a>v.left-p.left&&a<v.right+p.right&&u>v.top-p.top&&u<v.bottom+p.bottom)||h;if(c.length>=2){if(Ut(i)==="y"){const E=c[0],B=c[c.length-1],q=gt(i)==="top",W=E.top,x=B.bottom,R=q?E.left:B.left,V=q?E.right:B.right,tt=V-R,et=x-W;return{top:W,bottom:x,left:R,right:V,width:tt,height:et,x:R,y:W}}const v=gt(i)==="left",f=bt(...c.map(E=>E.right)),y=se(...c.map(E=>E.left)),_=c.filter(E=>v?E.left===y:E.right===f),$=_[0].top,A=_[_.length-1].bottom,C=y,O=f,P=O-C,S=A-$;return{top:$,bottom:A,left:C,right:O,width:P,height:S,x:C,y:$}}return h}const w=await o.getElementRects({reference:{getBoundingClientRect:b},floating:n.floating,strategy:r});return s.reference.x!==w.reference.x||s.reference.y!==w.reference.y||s.reference.width!==w.reference.width||s.reference.height!==w.reference.height?{reset:{rects:w}}:{}}}};async function Ja(e,t){const{placement:i,platform:n,elements:s}=e,o=await(n.isRTL==null?void 0:n.isRTL(s.floating)),r=gt(i),l=Fi(i),a=Ut(i)==="y",u=["left","top"].includes(r)?-1:1,d=o&&a?-1:1,c=Ze(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:b}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof b=="number"&&(p=l==="end"?b*-1:b),a?{x:p*d,y:h*u}:{x:h*u,y:p*d}}const vo=function(e){return{name:"offset",options:e,async fn(t){var i,n;const{x:s,y:o,placement:r,middlewareData:l}=t,a=await Ja(t,e);return r===((i=l.offset)==null?void 0:i.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:s+a.x,y:o+a.y,data:{...a,placement:r}}}}},Qa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:s}=t,{mainAxis:o=!0,crossAxis:r=!1,limiter:l={fn:v=>{let{x:f,y}=v;return{x:f,y}}},...a}=Ze(e,t),u={x:i,y:n},d=await bo(t,a),c=Ut(gt(s)),h=ho(c);let p=u[h],b=u[c];if(o){const v=h==="y"?"top":"left",f=h==="y"?"bottom":"right",y=p+d[v],_=p-d[f];p=ns(y,p,_)}if(r){const v=c==="y"?"top":"left",f=c==="y"?"bottom":"right",y=b+d[v],_=b-d[f];b=ns(y,b,_)}const w=l.fn({...t,[h]:p,[c]:b});return{...w,data:{x:w.x-i,y:w.y-n,enabled:{[h]:o,[c]:r}}}}}};function Hi(){return typeof window<"u"}function Et(e){return yo(e)?(e.nodeName||"").toLowerCase():"#document"}function Q(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kt(e){var t;return(t=(yo(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function yo(e){return Hi()?e instanceof Node||e instanceof Q(e).Node:!1}function ht(e){return Hi()?e instanceof Element||e instanceof Q(e).Element:!1}function pt(e){return Hi()?e instanceof HTMLElement||e instanceof Q(e).HTMLElement:!1}function os(e){return!Hi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Q(e).ShadowRoot}function Ke(e){const{overflow:t,overflowX:i,overflowY:n,display:s}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(s)}function Za(e){return["table","td","th"].includes(Et(e))}function Ka(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function In(e){const t=Nn(),i=ht(e)?it(e):e;return["transform","translate","scale","rotate","perspective"].some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function tl(e){let t=re(e);for(;pt(t)&&!Bi(t);){if(In(t))return t;if(Ka(t))return null;t=re(t)}return null}function Nn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bi(e){return["html","body","#document"].includes(Et(e))}function it(e){return Q(e).getComputedStyle(e)}function Ui(e){return ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function re(e){if(Et(e)==="html")return e;const t=e.assignedSlot||e.parentNode||os(e)&&e.host||kt(e);return os(t)?t.host:t}function _o(e){const t=re(e);return Bi(t)?e.ownerDocument?e.ownerDocument.body:e.body:pt(t)&&Ke(t)?t:_o(t)}function wo(e,t,i){var n;t===void 0&&(t=[]);const s=_o(e),o=s===((n=e.ownerDocument)==null?void 0:n.body),r=Q(s);return o?(el(r),t.concat(r,r.visualViewport||[],Ke(s)?s:[],[])):t.concat(s,wo(s,[]))}function el(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $o(e){const t=it(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=pt(e),o=s?e.offsetWidth:i,r=s?e.offsetHeight:n,l=xi(i)!==o||xi(n)!==r;return l&&(i=o,n=r),{width:i,height:n,$:l}}function xo(e){return ht(e)?e:e.contextElement}function te(e){const t=xo(e);if(!pt(t))return At(1);const i=t.getBoundingClientRect(),{width:n,height:s,$:o}=$o(t);let r=(o?xi(i.width):i.width)/n,l=(o?xi(i.height):i.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const il=At(0);function Co(e){const t=Q(e);return!Nn()||!t.visualViewport?il:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nl(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==Q(e)?!1:t}function ze(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const s=e.getBoundingClientRect(),o=xo(e);let r=At(1);t&&(n?ht(n)&&(r=te(n)):r=te(e));const l=nl(o,i,n)?Co(o):At(0);let a=(s.left+l.x)/r.x,u=(s.top+l.y)/r.y,d=s.width/r.x,c=s.height/r.y;if(o){const h=Q(o),p=n&&ht(n)?Q(n):n;let b=h,w=b.frameElement;for(;w&&n&&p!==b;){const v=te(w),f=w.getBoundingClientRect(),y=it(w),_=f.left+(w.clientLeft+parseFloat(y.paddingLeft))*v.x,$=f.top+(w.clientTop+parseFloat(y.paddingTop))*v.y;a*=v.x,u*=v.y,d*=v.x,c*=v.y,a+=_,u+=$,b=Q(w),w=b.frameElement}}return oe({width:d,height:c,x:a,y:u})}const sl=[":popover-open",":modal"];function Ao(e){return sl.some(t=>{try{return e.matches(t)}catch{return!1}})}function ol(e){let{elements:t,rect:i,offsetParent:n,strategy:s}=e;const o=s==="fixed",r=kt(n),l=t?Ao(t.floating):!1;if(n===r||l&&o)return i;let a={scrollLeft:0,scrollTop:0},u=At(1);const d=At(0),c=pt(n);if((c||!c&&!o)&&((Et(n)!=="body"||Ke(r))&&(a=Ui(n)),pt(n))){const h=ze(n);u=te(n),d.x=h.x+n.clientLeft,d.y=h.y+n.clientTop}return{width:i.width*u.x,height:i.height*u.y,x:i.x*u.x-a.scrollLeft*u.x+d.x,y:i.y*u.y-a.scrollTop*u.y+d.y}}function rl(e){return Array.from(e.getClientRects())}function Eo(e){return ze(kt(e)).left+Ui(e).scrollLeft}function al(e){const t=kt(e),i=Ui(e),n=e.ownerDocument.body,s=bt(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=bt(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+Eo(e);const l=-i.scrollTop;return it(n).direction==="rtl"&&(r+=bt(t.clientWidth,n.clientWidth)-s),{width:s,height:o,x:r,y:l}}function ll(e,t){const i=Q(e),n=kt(e),s=i.visualViewport;let o=n.clientWidth,r=n.clientHeight,l=0,a=0;if(s){o=s.width,r=s.height;const u=Nn();(!u||u&&t==="fixed")&&(l=s.offsetLeft,a=s.offsetTop)}return{width:o,height:r,x:l,y:a}}function cl(e,t){const i=ze(e,!0,t==="fixed"),n=i.top+e.clientTop,s=i.left+e.clientLeft,o=pt(e)?te(e):At(1),r=e.clientWidth*o.x,l=e.clientHeight*o.y,a=s*o.x,u=n*o.y;return{width:r,height:l,x:a,y:u}}function rs(e,t,i){let n;if(t==="viewport")n=ll(e,i);else if(t==="document")n=al(kt(e));else if(ht(t))n=cl(t,i);else{const s=Co(e);n={...t,x:t.x-s.x,y:t.y-s.y}}return oe(n)}function So(e,t){const i=re(e);return i===t||!ht(i)||Bi(i)?!1:it(i).position==="fixed"||So(i,t)}function ul(e,t){const i=t.get(e);if(i)return i;let n=wo(e,[]).filter(l=>ht(l)&&Et(l)!=="body"),s=null;const o=it(e).position==="fixed";let r=o?re(e):e;for(;ht(r)&&!Bi(r);){const l=it(r),a=In(r);!a&&l.position==="fixed"&&(s=null),(o?!a&&!s:!a&&l.position==="static"&&s&&["absolute","fixed"].includes(s.position)||Ke(r)&&!a&&So(e,r))?n=n.filter(u=>u!==r):s=l,r=re(r)}return t.set(e,n),n}function dl(e){let{element:t,boundary:i,rootBoundary:n,strategy:s}=e;const o=[...i==="clippingAncestors"?ul(t,this._c):[].concat(i),n],r=o[0],l=o.reduce((a,u)=>{const d=rs(t,u,s);return a.top=bt(d.top,a.top),a.right=se(d.right,a.right),a.bottom=se(d.bottom,a.bottom),a.left=bt(d.left,a.left),a},rs(t,r,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hl(e){const{width:t,height:i}=$o(e);return{width:t,height:i}}function pl(e,t,i){const n=pt(t),s=kt(t),o=i==="fixed",r=ze(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=At(0);if(n||!n&&!o)if((Et(t)!=="body"||Ke(s))&&(l=Ui(t)),n){const c=ze(t,!0,o,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else s&&(a.x=Eo(s));const u=r.left+l.scrollLeft-a.x,d=r.top+l.scrollTop-a.y;return{x:u,y:d,width:r.width,height:r.height}}function as(e,t){return!pt(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function ko(e,t){const i=Q(e);if(!pt(e)||Ao(e))return i;let n=as(e,t);for(;n&&Za(n)&&it(n).position==="static";)n=as(n,t);return n&&(Et(n)==="html"||Et(n)==="body"&&it(n).position==="static"&&!In(n))?i:n||tl(e)||i}const ml=async function(e){const t=this.getOffsetParent||ko,i=this.getDimensions;return{reference:pl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function fl(e){return it(e).direction==="rtl"}const bl={convertOffsetParentRelativeRectToViewportRelativeRect:ol,getDocumentElement:kt,getClippingRect:dl,getOffsetParent:ko,getElementRects:ml,getClientRects:rl,getDimensions:hl,getScale:te,isElement:ht,isRTL:fl},To=Qa,Oo=qa,Io=Xa,No=(e,t,i)=>{const n=new Map,s={platform:bl,...i},o={...s.platform,_c:n};return Ga(e,t,{...s,platform:o})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=globalThis,Pn=vi.ShadowRoot&&(vi.ShadyCSS===void 0||vi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mn=Symbol(),ls=new WeakMap;let Po=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Mn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Pn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ls.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ls.set(t,e))}return e}toString(){return this.cssText}};const gl=e=>new Po(typeof e=="string"?e:e+"",void 0,Mn),I=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new Po(i,e,Mn)},vl=(e,t)=>{if(Pn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),s=vi.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=i.cssText,e.appendChild(n)}},cs=Pn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return gl(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yl,defineProperty:_l,getOwnPropertyDescriptor:wl,getOwnPropertyNames:$l,getOwnPropertySymbols:xl,getPrototypeOf:Cl}=Object,ae=globalThis,us=ae.trustedTypes,Al=us?us.emptyScript:"",ds=ae.reactiveElementPolyfillSupport,Ne=(e,t)=>e,Ai={toAttribute(e,t){switch(t){case Boolean:e=e?Al:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ln=(e,t)=>!yl(e,t),hs={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Ln};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ae.litPropertyMetadata??(ae.litPropertyMetadata=new WeakMap);class Zt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=hs){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,i);s!==void 0&&_l(this.prototype,t,s)}}static getPropertyDescriptor(t,i,n){const{get:s,set:o}=wl(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const l=s==null?void 0:s.call(this);o.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??hs}static _$Ei(){if(this.hasOwnProperty(Ne("elementProperties")))return;const t=Cl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ne("properties"))){const i=this.properties,n=[...$l(i),...xl(i)];for(const s of n)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,s]of i)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const s=this._$Eu(i,n);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)i.unshift(cs(s))}else t!==void 0&&i.push(cs(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:Ai).toAttribute(i,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,i){var n;const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=s.getPropertyOptions(o),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Ai;this._$Em=o,this[o]=l.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Ln)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(n)):this._$EU()}catch(s){throw i=!1,this._$EU(),s}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},Zt[Ne("elementProperties")]=new Map,Zt[Ne("finalized")]=new Map,ds==null||ds({ReactiveElement:Zt}),(ae.reactiveElementVersions??(ae.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=globalThis,Si=Ei.trustedTypes,ps=Si?Si.createPolicy("lit-html",{createHTML:e=>e}):void 0,Mo="$lit$",xt=`lit$${Math.random().toFixed(9).slice(2)}$`,Lo="?"+xt,El=`<${Lo}>`,Vt=document,De=()=>Vt.createComment(""),Fe=e=>e===null||typeof e!="object"&&typeof e!="function",Rn=Array.isArray,Sl=e=>Rn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",sn=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ms=/-->/g,fs=/>/g,Rt=RegExp(`>|${sn}(?:([^\\s"'>=/]+)(${sn}*=${sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bs=/'/g,gs=/"/g,Ro=/^(?:script|style|textarea|title)$/i,kl=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),m=kl(1),Wt=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),vs=new WeakMap,zt=Vt.createTreeWalker(Vt,129);function jo(e,t){if(!Rn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ps!==void 0?ps.createHTML(t):t}const Tl=(e,t)=>{const i=e.length-1,n=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=ke;for(let l=0;l<i;l++){const a=e[l];let u,d,c=-1,h=0;for(;h<a.length&&(r.lastIndex=h,d=r.exec(a),d!==null);)h=r.lastIndex,r===ke?d[1]==="!--"?r=ms:d[1]!==void 0?r=fs:d[2]!==void 0?(Ro.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=Rt):d[3]!==void 0&&(r=Rt):r===Rt?d[0]===">"?(r=s??ke,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?Rt:d[3]==='"'?gs:bs):r===gs||r===bs?r=Rt:r===ms||r===fs?r=ke:(r=Rt,s=void 0);const p=r===Rt&&e[l+1].startsWith("/>")?" ":"";o+=r===ke?a+El:c>=0?(n.push(u),a.slice(0,c)+Mo+a.slice(c)+xt+p):a+xt+(c===-2?l:p)}return[jo(e,o+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class He{constructor({strings:t,_$litType$:i},n){let s;this.parts=[];let o=0,r=0;const l=t.length-1,a=this.parts,[u,d]=Tl(t,i);if(this.el=He.createElement(u,n),zt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=zt.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Mo)){const h=d[r++],p=s.getAttribute(c).split(xt),b=/([.?@])?(.*)/.exec(h);a.push({type:1,index:o,name:b[2],strings:p,ctor:b[1]==="."?Il:b[1]==="?"?Nl:b[1]==="@"?Pl:Vi}),s.removeAttribute(c)}else c.startsWith(xt)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(Ro.test(s.tagName)){const c=s.textContent.split(xt),h=c.length-1;if(h>0){s.textContent=Si?Si.emptyScript:"";for(let p=0;p<h;p++)s.append(c[p],De()),zt.nextNode(),a.push({type:2,index:++o});s.append(c[h],De())}}}else if(s.nodeType===8)if(s.data===Lo)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(xt,c+1))!==-1;)a.push({type:7,index:o}),c+=xt.length-1}o++}}static createElement(t,i){const n=Vt.createElement("template");return n.innerHTML=t,n}}function le(e,t,i=e,n){var s,o;if(t===Wt)return t;let r=n!==void 0?(s=i._$Co)==null?void 0:s[n]:i._$Cl;const l=Fe(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((o=r==null?void 0:r._$AO)==null||o.call(r,!1),l===void 0?r=void 0:(r=new l(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=le(e,r._$AS(e,t.values),r,n)),t}class Ol{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,s=((t==null?void 0:t.creationScope)??Vt).importNode(i,!0);zt.currentNode=s;let o=zt.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let u;a.type===2?u=new ti(o,o.nextSibling,this,t):a.type===1?u=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(u=new Ml(o,this,t)),this._$AV.push(u),a=n[++l]}r!==(a==null?void 0:a.index)&&(o=zt.nextNode(),r++)}return zt.currentNode=Vt,s}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ti{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,s){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=le(this,t,i),Fe(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==Wt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&Fe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Vt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=He.createElement(jo(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const r=new Ol(o,this),l=r.u(this.options);r.p(n),this.T(l),this._$AH=r}}_$AC(t){let i=vs.get(t.strings);return i===void 0&&vs.set(t.strings,i=new He(t)),i}k(t){Rn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,s=0;for(const o of t)s===i.length?i.push(n=new ti(this.O(De()),this.O(De()),this,this.options)):n=i[s],n._$AI(o),s++;s<i.length&&(this._$AR(n&&n._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Vi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,s,o){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(t,i=this,n,s){const o=this.strings;let r=!1;if(o===void 0)t=le(this,t,i,0),r=!Fe(t)||t!==this._$AH&&t!==Wt,r&&(this._$AH=t);else{const l=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=le(this,l[n+a],i,a),u===Wt&&(u=this._$AH[a]),r||(r=!Fe(u)||u!==this._$AH[a]),u===L?t=L:t!==L&&(t+=(u??"")+o[a+1]),this._$AH[a]=u}r&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Il extends Vi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class Nl extends Vi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class Pl extends Vi{constructor(t,i,n,s,o){super(t,i,n,s,o),this.type=5}_$AI(t,i=this){if((t=le(this,t,i,0)??L)===Wt)return;const n=this._$AH,s=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==L&&(n===L||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Ml{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){le(this,t)}}const ys=Ei.litHtmlPolyfillSupport;ys==null||ys(He,ti),(Ei.litHtmlVersions??(Ei.litHtmlVersions=[])).push("3.2.1");const ce=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let s=n._$litPart$;if(s===void 0){const o=(i==null?void 0:i.renderBefore)??null;n._$litPart$=s=new ti(t.insertBefore(De(),o),o,void 0,i??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Wt}};var _s;T._$litElement$=!0,T.finalized=!0,(_s=globalThis.litElementHydrateSupport)==null||_s.call(globalThis,{LitElement:T});const ws=globalThis.litElementPolyfillSupport;ws==null||ws({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ll={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Ln},Rl=(e=Ll,t,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,e)},init(l){return l!==void 0&&this.P(r,void 0,e),l}}}if(n==="setter"){const{name:r}=i;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+n)};function g(e){return(t,i)=>typeof i=="object"?Rl(e,t,i):((n,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function be(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo={ATTRIBUTE:1,CHILD:2},Do=e=>(...t)=>({_$litDirective$:e,values:t});let Fo=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const s of n)(i=s._$AO)==null||i.call(s,t,!1),Pe(s,t);return!0},ki=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Ho=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Fl(t)}};function zl(e){this._$AN!==void 0?(ki(this),this._$AM=e,Ho(this)):this._$AM=e}function Dl(e,t=!1,i=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(n))for(let o=i;o<n.length;o++)Pe(n[o],!1),ki(n[o]);else n!=null&&(Pe(n,!1),ki(n));else Pe(this,e)}const Fl=e=>{e.type==zo.CHILD&&(e._$AP??(e._$AP=Dl),e._$AQ??(e._$AQ=zl))};class Hl extends Fo{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Ho(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,s;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(s=this.disconnected)==null||s.call(this)),i&&(Pe(this,t),ki(this))}setValue(t){if(jl(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=()=>new Bl;class Bl{}const on=new WeakMap,G=Do(class extends Hl{render(e){return L}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),L}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=on.get(t);i===void 0&&(i=new WeakMap,on.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=on.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Bo=Object.freeze({left:0,top:0,width:16,height:16}),Ti=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ei=Object.freeze({...Bo,...Ti}),pn=Object.freeze({...ei,body:"",hidden:!1}),Ul=Object.freeze({width:null,height:null}),Uo=Object.freeze({...Ul,...Ti});function Vl(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function n(s){for(;s<0;)s+=4;return s%4}if(i===""){const s=parseInt(e);return isNaN(s)?0:n(s)}else if(i!==e){let s=0;switch(i){case"%":s=25;break;case"deg":s=90}if(s){let o=parseFloat(e.slice(0,e.length-i.length));return isNaN(o)?0:(o=o/s,o%1===0?n(o):0)}}return t}const Wl=/[\s,]+/;function Gl(e,t){t.split(Wl).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Vo={...Uo,preserveAspectRatio:""};function $s(e){const t={...Vo},i=(n,s)=>e.getAttribute(n)||s;return t.width=i("width",null),t.height=i("height",null),t.rotate=Vl(i("rotate","")),Gl(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function ql(e,t){for(const i in Vo)if(e[i]!==t[i])return!0;return!1}const Me=/^[a-z0-9]+(-[a-z0-9]+)*$/,ii=(e,t,i,n="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;n=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),a=s.pop(),u={provider:s.length>0?s[0]:n,prefix:a,name:l};return t&&!yi(u)?null:u}const o=s[0],r=o.split("-");if(r.length>1){const l={provider:n,prefix:r.shift(),name:r.join("-")};return t&&!yi(l)?null:l}if(i&&n===""){const l={provider:n,prefix:"",name:o};return t&&!yi(l,i)?null:l}return null},yi=(e,t)=>e?!!((e.provider===""||e.provider.match(Me))&&(t&&e.prefix===""||e.prefix.match(Me))&&e.name.match(Me)):!1;function Yl(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(i.rotate=n),i}function xs(e,t){const i=Yl(e,t);for(const n in pn)n in Ti?n in e&&!(n in i)&&(i[n]=Ti[n]):n in t?i[n]=t[n]:n in e&&(i[n]=e[n]);return i}function Xl(e,t){const i=e.icons,n=e.aliases||Object.create(null),s=Object.create(null);function o(r){if(i[r])return s[r]=[];if(!(r in s)){s[r]=null;const l=n[r]&&n[r].parent,a=l&&o(l);a&&(s[r]=[l].concat(a))}return s[r]}return Object.keys(i).concat(Object.keys(n)).forEach(o),s}function Jl(e,t,i){const n=e.icons,s=e.aliases||Object.create(null);let o={};function r(l){o=xs(n[l]||s[l],o)}return r(t),i.forEach(r),xs(e,o)}function Wo(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),i.push(s)});const n=Xl(e);for(const s in n){const o=n[s];o&&(t(s,Jl(e,s,o)),i.push(s))}return i}const Ql={provider:"",aliases:{},not_found:{},...Bo};function rn(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Go(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!rn(e,Ql))return null;const i=t.icons;for(const s in i){const o=i[s];if(!s.match(Me)||typeof o.body!="string"||!rn(o,pn))return null}const n=t.aliases||Object.create(null);for(const s in n){const o=n[s],r=o.parent;if(!s.match(Me)||typeof r!="string"||!i[r]&&!n[r]||!rn(o,pn))return null}return t}const Oi=Object.create(null);function Zl(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function St(e,t){const i=Oi[e]||(Oi[e]=Object.create(null));return i[t]||(i[t]=Zl(e,t))}function jn(e,t){return Go(t)?Wo(t,(i,n)=>{n?e.icons[i]=n:e.missing.add(i)}):[]}function Kl(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function tc(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Oi)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Oi[n]||{})).forEach(s=>{const o=St(n,s);i=i.concat(Object.keys(o.icons).map(r=>(n!==""?"@"+n+":":"")+s+":"+r))})}),i}let Be=!1;function qo(e){return typeof e=="boolean"&&(Be=e),Be}function Ue(e){const t=typeof e=="string"?ii(e,!0,Be):e;if(t){const i=St(t.provider,t.prefix),n=t.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function Yo(e,t){const i=ii(e,!0,Be);if(!i)return!1;const n=St(i.provider,i.prefix);return Kl(n,i.name,t)}function Cs(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Be&&!t&&!e.prefix){let s=!1;return Go(e)&&(e.prefix="",Wo(e,(o,r)=>{r&&Yo(o,r)&&(s=!0)})),s}const i=e.prefix;if(!yi({provider:t,prefix:i,name:"a"}))return!1;const n=St(t,i);return!!jn(n,e)}function As(e){return!!Ue(e)}function ec(e){const t=Ue(e);return t?{...ei,...t}:null}function ic(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((s,o)=>s.provider!==o.provider?s.provider.localeCompare(o.provider):s.prefix!==o.prefix?s.prefix.localeCompare(o.prefix):s.name.localeCompare(o.name));let n={provider:"",prefix:"",name:""};return e.forEach(s=>{if(n.name===s.name&&n.prefix===s.prefix&&n.provider===s.provider)return;n=s;const o=s.provider,r=s.prefix,l=s.name,a=i[o]||(i[o]=Object.create(null)),u=a[r]||(a[r]=St(o,r));let d;l in u.icons?d=t.loaded:r===""||u.missing.has(l)?d=t.missing:d=t.pending;const c={provider:o,prefix:r,name:l};d.push(c)}),t}function Xo(e,t){e.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(s=>s.id!==t))})}function nc(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const n=e.provider,s=e.prefix;t.forEach(o=>{const r=o.icons,l=r.pending.length;r.pending=r.pending.filter(a=>{if(a.prefix!==s)return!0;const u=a.name;if(e.icons[u])r.loaded.push({provider:n,prefix:s,name:u});else if(e.missing.has(u))r.missing.push({provider:n,prefix:s,name:u});else return i=!0,!0;return!1}),r.pending.length!==l&&(i||Xo([e],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let sc=0;function oc(e,t,i){const n=sc++,s=Xo.bind(null,i,n);if(!t.pending.length)return s;const o={id:n,icons:t,callback:e,abort:s};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),s}const mn=Object.create(null);function Es(e,t){mn[e]=t}function fn(e){return mn[e]||mn[""]}function rc(e,t=!0,i=!1){const n=[];return e.forEach(s=>{const o=typeof s=="string"?ii(s,t,i):s;o&&n.push(o)}),n}var ac={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function lc(e,t,i,n){const s=e.resources.length,o=e.random?Math.floor(Math.random()*s):e.index;let r;if(e.random){let C=e.resources.slice(0);for(r=[];C.length>1;){const O=Math.floor(Math.random()*C.length);r.push(C[O]),C=C.slice(0,O).concat(C.slice(O+1))}r=r.concat(C)}else r=e.resources.slice(o).concat(e.resources.slice(0,o));const l=Date.now();let a="pending",u=0,d,c=null,h=[],p=[];typeof n=="function"&&p.push(n);function b(){c&&(clearTimeout(c),c=null)}function w(){a==="pending"&&(a="aborted"),b(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function v(C,O){O&&(p=[]),typeof C=="function"&&p.push(C)}function f(){return{startTime:l,payload:t,status:a,queriesSent:u,queriesPending:h.length,subscribe:v,abort:w}}function y(){a="failed",p.forEach(C=>{C(void 0,d)})}function _(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function $(C,O,P){const S=O!=="success";switch(h=h.filter(E=>E!==C),a){case"pending":break;case"failed":if(S||!e.dataAfterTimeout)return;break;default:return}if(O==="abort"){d=P,y();return}if(S){d=P,h.length||(r.length?A():y());return}if(b(),_(),!e.random){const E=e.resources.indexOf(C.resource);E!==-1&&E!==e.index&&(e.index=E)}a="completed",p.forEach(E=>{E(P)})}function A(){if(a!=="pending")return;b();const C=r.shift();if(C===void 0){if(h.length){c=setTimeout(()=>{b(),a==="pending"&&(_(),y())},e.timeout);return}y();return}const O={status:"pending",resource:C,callback:(P,S)=>{$(O,P,S)}};h.push(O),u++,c=setTimeout(A,e.rotate),i(C,t,O.callback)}return setTimeout(A),f}function Jo(e){const t={...ac,...e};let i=[];function n(){i=i.filter(r=>r().status==="pending")}function s(r,l,a){const u=lc(t,r,l,(d,c)=>{n(),a&&a(d,c)});return i.push(u),u}function o(r){return i.find(l=>r(l))||null}return{query:s,find:o,setIndex:r=>{t.index=r},getIndex:()=>t.index,cleanup:n}}function zn(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Wi=Object.create(null),mi=["https://api.simplesvg.com","https://api.unisvg.com"],bn=[];for(;mi.length>0;)mi.length===1||Math.random()>.5?bn.push(mi.shift()):bn.push(mi.pop());Wi[""]=zn({resources:["https://api.iconify.design"].concat(bn)});function Ss(e,t){const i=zn(t);return i===null?!1:(Wi[e]=i,!0)}function Gi(e){return Wi[e]}function cc(){return Object.keys(Wi)}function ks(){}const an=Object.create(null);function uc(e){if(!an[e]){const t=Gi(e);if(!t)return;const i=Jo(t),n={config:t,redundancy:i};an[e]=n}return an[e]}function Qo(e,t,i){let n,s;if(typeof e=="string"){const o=fn(e);if(!o)return i(void 0,424),ks;s=o.send;const r=uc(e);r&&(n=r.redundancy)}else{const o=zn(e);if(o){n=Jo(o);const r=e.resources?e.resources[0]:"",l=fn(r);l&&(s=l.send)}}return!n||!s?(i(void 0,424),ks):n.query(t,s,i)().abort}const Ts="iconify2",Ve="iconify",Zo=Ve+"-count",Os=Ve+"-version",Ko=36e5,dc=168,hc=50;function gn(e,t){try{return e.getItem(t)}catch{}}function Dn(e,t,i){try{return e.setItem(t,i),!0}catch{}}function Is(e,t){try{e.removeItem(t)}catch{}}function vn(e,t){return Dn(e,Zo,t.toString())}function yn(e){return parseInt(gn(e,Zo))||0}const Ft={local:!0,session:!0},tr={local:new Set,session:new Set};let Fn=!1;function pc(e){Fn=e}let fi=typeof window>"u"?{}:window;function er(e){const t=e+"Storage";try{if(fi&&fi[t]&&typeof fi[t].length=="number")return fi[t]}catch{}Ft[e]=!1}function ir(e,t){const i=er(e);if(!i)return;const n=gn(i,Os);if(n!==Ts){if(n){const l=yn(i);for(let a=0;a<l;a++)Is(i,Ve+a.toString())}Dn(i,Os,Ts),vn(i,0);return}const s=Math.floor(Date.now()/Ko)-dc,o=l=>{const a=Ve+l.toString(),u=gn(i,a);if(typeof u=="string"){try{const d=JSON.parse(u);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>s&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,l))return!0}catch{}Is(i,a)}};let r=yn(i);for(let l=r-1;l>=0;l--)o(l)||(l===r-1?(r--,vn(i,r)):tr[e].add(l))}function nr(){if(!Fn){pc(!0);for(const e in Ft)ir(e,t=>{const i=t.data,n=t.provider,s=i.prefix,o=St(n,s);if(!jn(o,i).length)return!1;const r=i.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,r):r,!0})}}function mc(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const n in Ft)ir(n,s=>{const o=s.data;return s.provider!==e.provider||o.prefix!==e.prefix||o.lastModified===t});return!0}function fc(e,t){Fn||nr();function i(n){let s;if(!Ft[n]||!(s=er(n)))return;const o=tr[n];let r;if(o.size)o.delete(r=Array.from(o).shift());else if(r=yn(s),r>=hc||!vn(s,r+1))return;const l={cached:Math.floor(Date.now()/Ko),provider:e.provider,data:t};return Dn(s,Ve+r.toString(),JSON.stringify(l))}t.lastModified&&!mc(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function Ns(){}function bc(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,nc(e)}))}function gc(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:n}=e,s=e.iconsToLoad;delete e.iconsToLoad;let o;!s||!(o=fn(i))||o.prepare(i,n,s).forEach(r=>{Qo(i,r,l=>{if(typeof l!="object")r.icons.forEach(a=>{e.missing.add(a)});else try{const a=jn(e,l);if(!a.length)return;const u=e.pendingIcons;u&&a.forEach(d=>{u.delete(d)}),fc(e,l)}catch(a){console.error(a)}bc(e)})})}))}const Hn=(e,t)=>{const i=rc(e,!0,qo()),n=ic(i);if(!n.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(n.loaded,n.missing,n.pending,Ns)}),()=>{a=!1}}const s=Object.create(null),o=[];let r,l;return n.pending.forEach(a=>{const{provider:u,prefix:d}=a;if(d===l&&u===r)return;r=u,l=d,o.push(St(u,d));const c=s[u]||(s[u]=Object.create(null));c[d]||(c[d]=[])}),n.pending.forEach(a=>{const{provider:u,prefix:d,name:c}=a,h=St(u,d),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(c)||(p.add(c),s[u][d].push(c))}),o.forEach(a=>{const{provider:u,prefix:d}=a;s[u][d].length&&gc(a,s[u][d])}),t?oc(t,n,o):Ns},vc=e=>new Promise((t,i)=>{const n=typeof e=="string"?ii(e,!0):e;if(!n){i(e);return}Hn([n||e],s=>{if(s.length&&n){const o=Ue(n);if(o){t({...ei,...o});return}}i(e)})});function yc(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function _c(e,t){const i=typeof e=="string"?ii(e,!0,!0):null;if(!i){const o=yc(e);return{value:e,data:o}}const n=Ue(i);if(n!==void 0||!i.prefix)return{value:e,name:i,data:n};const s=Hn([i],()=>t(e,i,Ue(i)));return{value:e,name:i,loading:s}}function ln(e){return e.hasAttribute("inline")}let sr=!1;try{sr=navigator.vendor.indexOf("Apple")===0}catch{}function wc(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(sr||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const $c=/(-?[0-9.]*[0-9]+[0-9.]*)/g,xc=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function _n(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const n=e.split($c);if(n===null||!n.length)return e;const s=[];let o=n.shift(),r=xc.test(o);for(;;){if(r){const l=parseFloat(o);isNaN(l)?s.push(o):s.push(Math.ceil(l*t*i)/i)}else s.push(o);if(o=n.shift(),o===void 0)return s.join("");r=!r}}function Cc(e,t="defs"){let i="";const n=e.indexOf("<"+t);for(;n>=0;){const s=e.indexOf(">",n),o=e.indexOf("</"+t);if(s===-1||o===-1)break;const r=e.indexOf(">",o);if(r===-1)break;i+=e.slice(s+1,o).trim(),e=e.slice(0,n).trim()+e.slice(r+1)}return{defs:i,content:e}}function Ac(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ec(e,t,i){const n=Cc(e);return Ac(n.defs,t+n.content+i)}const Sc=e=>e==="unset"||e==="undefined"||e==="none";function or(e,t){const i={...ei,...e},n={...Uo,...t},s={left:i.left,top:i.top,width:i.width,height:i.height};let o=i.body;[i,n].forEach(w=>{const v=[],f=w.hFlip,y=w.vFlip;let _=w.rotate;f?y?_+=2:(v.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),v.push("scale(-1 1)"),s.top=s.left=0):y&&(v.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),v.push("scale(1 -1)"),s.top=s.left=0);let $;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:$=s.height/2+s.top,v.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:v.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:$=s.width/2+s.left,v.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}_%2===1&&(s.left!==s.top&&($=s.left,s.left=s.top,s.top=$),s.width!==s.height&&($=s.width,s.width=s.height,s.height=$)),v.length&&(o=Ec(o,'<g transform="'+v.join(" ")+'">',"</g>"))});const r=n.width,l=n.height,a=s.width,u=s.height;let d,c;r===null?(c=l===null?"1em":l==="auto"?u:l,d=_n(c,a/u)):(d=r==="auto"?a:r,c=l===null?_n(d,u/a):l==="auto"?u:l);const h={},p=(w,v)=>{Sc(v)||(h[w]=v.toString())};p("width",d),p("height",c);const b=[s.left,s.top,a,u];return h.viewBox=b.join(" "),{attributes:h,viewBox:b,body:o}}function Bn(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)i+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function kc(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Tc(e){return"data:image/svg+xml,"+kc(e)}function rr(e){return'url("'+Tc(e)+'")'}const Oc=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ii=Oc();function Ic(e){Ii=e}function Nc(){return Ii}function Pc(e,t){const i=Gi(e);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let s=0;i.resources.forEach(r=>{s=Math.max(s,r.length)});const o=t+".json?icons=";n=i.maxURL-s-i.path.length-o.length}return n}function Mc(e){return e===404}const Lc=(e,t,i)=>{const n=[],s=Pc(e,t),o="icons";let r={type:o,provider:e,prefix:t,icons:[]},l=0;return i.forEach((a,u)=>{l+=a.length+1,l>=s&&u>0&&(n.push(r),r={type:o,provider:e,prefix:t,icons:[]},l=a.length),r.icons.push(a)}),n.push(r),n};function Rc(e){if(typeof e=="string"){const t=Gi(e);if(t)return t.path}return"/"}const jc=(e,t,i)=>{if(!Ii){i("abort",424);return}let n=Rc(t.provider);switch(t.type){case"icons":{const o=t.prefix,r=t.icons.join(","),l=new URLSearchParams({icons:r});n+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;n+=o.slice(0,1)==="/"?o.slice(1):o;break}default:i("abort",400);return}let s=503;Ii(e+n).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{i(Mc(r)?"abort":"next",r)});return}return s=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?i("abort",o):i("next",s)});return}setTimeout(()=>{i("success",o)})}).catch(()=>{i("next",s)})},zc={prepare:Lc,send:jc};function Ps(e,t){switch(e){case"local":case"session":Ft[e]=t;break;case"all":for(const i in Ft)Ft[i]=t;break}}const cn="data-style";let ar="";function Dc(e){ar=e}function Ms(e,t){let i=Array.from(e.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(cn));i||(i=document.createElement("style"),i.setAttribute(cn,cn),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+ar}function lr(){Es("",zc),qo(!0);let e;try{e=window}catch{}if(e){if(nr(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Cs(n))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const n="IconifyProviders["+i+"] is invalid.";try{const s=t[i];if(typeof s!="object"||!s||s.resources===void 0)continue;Ss(i,s)||console.error(n)}catch{console.error(n)}}}}return{enableCache:t=>Ps(t,!0),disableCache:t=>Ps(t,!1),iconLoaded:As,iconExists:As,getIcon:ec,listIcons:tc,addIcon:Yo,addCollection:Cs,calculateSize:_n,buildIcon:or,iconToHTML:Bn,svgToURL:rr,loadIcons:Hn,loadIcon:vc,addAPIProvider:Ss,appendCustomStyle:Dc,_api:{getAPIConfig:Gi,setAPIModule:Es,sendAPIQuery:Qo,setFetch:Ic,getFetch:Nc,listAPIProviders:cc}}}const wn={"background-color":"currentColor"},cr={"background-color":"transparent"},Ls={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Rs={"-webkit-mask":wn,mask:wn,background:cr};for(const e in Rs){const t=Rs[e];for(const i in Ls)t[e+"-"+i]=Ls[i]}function js(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Fc(e,t,i){const n=document.createElement("span");let s=e.body;s.indexOf("<a")!==-1&&(s+="<!-- "+Date.now()+" -->");const o=e.attributes,r=Bn(s,{...o,width:t.width+"",height:t.height+""}),l=rr(r),a=n.style,u={"--svg":l,width:js(o.width),height:js(o.height),...i?wn:cr};for(const d in u)a.setProperty(d,u[d]);return n}let Le;function Hc(){try{Le=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Le=null}}function Bc(e){return Le===void 0&&Hc(),Le?Le.createHTML(e):e}function Uc(e){const t=document.createElement("span"),i=e.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const s=Bn(e.body,i);return t.innerHTML=Bc(s),t.firstChild}function $n(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function zs(e,t){const i=t.icon.data,n=t.customisations,s=or(i,n);n.preserveAspectRatio&&(s.attributes.preserveAspectRatio=n.preserveAspectRatio);const o=t.renderedMode;let r;switch(o){case"svg":r=Uc(s);break;default:r=Fc(s,{...ei,...i},o==="mask")}const l=$n(e);l?r.tagName==="SPAN"&&l.tagName===r.tagName?l.setAttribute("style",r.getAttribute("style")):e.replaceChild(r,l):e.appendChild(r)}function Ds(e,t,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:n}}function Vc(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const n=t.get(e);if(n)return n;const s=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends i{constructor(){super(),Lt(this,"_shadowRoot"),Lt(this,"_initialised",!1),Lt(this,"_state"),Lt(this,"_checkQueued",!1),Lt(this,"_connected",!1),Lt(this,"_observer",null),Lt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),a=ln(this);Ms(l,a),this._state=Ds({value:""},a),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return s.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const a=ln(this),u=this._state;a!==u.inline&&(u.inline=a,Ms(this._shadowRoot,a));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return ln(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const a=this._shadowRoot;if(l.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}zs(a,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,a=this.getAttribute("icon");if(a!==l.icon.value){this._iconChanged(a);return}if(!l.rendered||!this._visible)return;const u=this.getAttribute("mode"),d=$s(this);(l.attrMode!==u||ql(l.customisations,d)||!$n(this._shadowRoot))&&this._renderIcon(l.icon,d,u)}_iconChanged(l){const a=_c(l,(u,d,c)=>{const h=this._state;if(h.rendered||this.getAttribute("icon")!==u)return;const p={value:u,name:d,data:c};p.data?this._gotIconData(p):h.icon=p});a.data?this._gotIconData(a):this._state=Ds(a,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=$n(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,$s(this),this.getAttribute("mode"))}_renderIcon(l,a,u){const d=wc(l.data.body,u),c=this._state.inline;zs(this._shadowRoot,this._state={rendered:!0,icon:l,inline:c,customisations:a,attrMode:u,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const a=l.some(u=>u.isIntersecting);a!==this._visible&&(this._visible=a,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};s.forEach(l=>{l in o.prototype||Object.defineProperty(o.prototype,l,{get:function(){return this.getAttribute(l)},set:function(a){a!==null?this.setAttribute(l,a):this.removeAttribute(l)}})});const r=lr();for(const l in r)o[l]=o.prototype[l]=r[l];return t.define(e,o),o}const Wc=Vc()||lr(),{enableCache:np,disableCache:sp,iconLoaded:op,iconExists:rp,getIcon:ap,listIcons:lp,addIcon:cp,addCollection:up,calculateSize:dp,buildIcon:hp,iconToHTML:pp,svgToURL:mp,loadIcons:fp,loadIcon:bp,addAPIProvider:gp,_api:vp}=Wc,Gc=I`
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
`,qc=I`
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
`,Tt={scrollbar:Gc,globalStyles:qc},ur=class k{static set config(t){this._config={...k._config,...t}}static get config(){return k._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Tt.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){k.init()}static init(){k.addGlobalStyles(),k.defineCustomElement("bim-button",Kc),k.defineCustomElement("bim-checkbox",ge),k.defineCustomElement("bim-color-input",Yt),k.defineCustomElement("bim-context-menu",Cn),k.defineCustomElement("bim-dropdown",vt),k.defineCustomElement("bim-grid",Vn),k.defineCustomElement("bim-icon",au),k.defineCustomElement("bim-input",si),k.defineCustomElement("bim-label",ye),k.defineCustomElement("bim-number-input",K),k.defineCustomElement("bim-option",H),k.defineCustomElement("bim-panel",Xt),k.defineCustomElement("bim-panel-section",_e),k.defineCustomElement("bim-selector",we),k.defineCustomElement("bim-table",ot),k.defineCustomElement("bim-tabs",Nt),k.defineCustomElement("bim-tab",X),k.defineCustomElement("bim-table-cell",Ar),k.defineCustomElement("bim-table-children",Sr),k.defineCustomElement("bim-table-group",Tr),k.defineCustomElement("bim-table-row",Jt),k.defineCustomElement("bim-text-input",rt),k.defineCustomElement("bim-toolbar",Zi),k.defineCustomElement("bim-toolbar-group",Ji),k.defineCustomElement("bim-toolbar-section",Ce),k.defineCustomElement("bim-viewport",Fr)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const s=Math.floor(Math.random()*t.length);i+=t.charAt(s)}return i}};ur._config={sectionLabelOnVerticalToolbar:!1};let Z=ur;class z extends T{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const n of t)this.elements.add(n);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const s=n.target;t.unobserve(s);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][o];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&t.observe(n)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const n=document.createDocumentFragment();if(t.length===0)return ce(t(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let s=i;const o=t,r=a=>(s={...s,...a},ce(o(s,r),n),s);r(i);const l=()=>s;return[n.firstElementChild,r,l]}}const We=(e,t={},i=!0)=>{let n={};for(const s of e.children){const o=s,r=o.getAttribute("name")||o.getAttribute("label"),l=t[r];if(r){if("value"in o&&typeof o.value<"u"&&o.value!==null){const a=o.value;if(typeof a=="object"&&!Array.isArray(a)&&Object.keys(a).length===0)continue;n[r]=l?l(o.value):o.value}else if(i){const a=We(o,t);if(Object.keys(a).length===0)continue;n[r]=l?l(a):a}}else i&&(n={...n,...We(o,t)})}return n},qi=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,Yc=[">=","<=","=",">","<","?","/","#"];function Fs(e){const t=Yc.find(r=>e.split(r).length===2),i=e.split(t).map(r=>r.trim()),[n,s]=i,o=s.startsWith("'")&&s.endsWith("'")?s.replace(/'/g,""):qi(s);return{key:n,condition:t,value:o}}const xn=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const s=!n.startsWith("(")&&!n.endsWith(")"),o=n.startsWith("(")&&n.endsWith(")");if(s){const r=Fs(n);t.push(r)}if(o){const r={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(l=>l.trim()).map((l,a)=>{const u=Fs(l);return a>0&&(u.operator="&"),u})};t.push(r)}}return t}catch{return null}},Hs=(e,t,i)=>{let n=!1;switch(t){case"=":n=e===i;break;case"?":n=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(n=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(n=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(n=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(n=e>=i);break;case"/":n=String(e).startsWith(String(i));break}return n};var Xc=Object.defineProperty,Jc=Object.getOwnPropertyDescriptor,dr=(e,t,i,n)=>{for(var s=Jc(t,i),o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&Xc(t,i,s),s},F;const Un=(F=class extends T{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of F.menus)e instanceof F&&(e.visible=!1);F.dialog.close(),F.dialog.remove()}get visible(){return this._visible}set visible(e){var t;this._visible=e,e?(F.dialog.parentElement||document.body.append(F.dialog),this._previousContainer=this.parentElement,F.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,F.dialog.append(this),F.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await No(this._previousContainer,this,{placement:e,middleware:[vo(10),Io(),Oo(),To({padding:5})]}),{x:i,y:n}=t;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),F.menus.push(this)}render(){return m` <slot></slot> `}},F.styles=[Tt.scrollbar,I`
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
    ></dialog>`),F.menus=[],F);dr([g({type:String,reflect:!0})],Un.prototype,"placement");dr([g({type:Boolean,reflect:!0})],Un.prototype,"visible");let Cn=Un;var Qc=Object.defineProperty,Zc=Object.getOwnPropertyDescriptor,lt=(e,t,i,n)=>{for(var s=n>1?void 0:n?Zc(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Qc(t,i,s),s},Te;const nt=(Te=class extends T{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=ue(),this._tooltip=ue(),this._mouseLeave=!1,this.onClick=e=>{e.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const e=this._contextMenu;if(e){const t=this.getAttribute("data-context-group");t&&e.setAttribute("data-context-group",t),this.closeNestedContexts();const i=Z.newRandomId();for(const n of e.children)n instanceof Te&&n.setAttribute("data-context-group",i);e.visible=!0}},this.mouseLeave=!0}set loading(e){if(this._loading=e,e)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=e,this.icon="eos-icons:loading";else{const{disabled:t,icon:i}=this._stateBeforeLoading;this.disabled=t,this.icon=i}}get loading(){return this._loading}set mouseLeave(e){this._mouseLeave=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&No(e,t,{placement:"bottom",middleware:[vo(10),Io(),Oo(),To({padding:5})]}).then(i=>{const{x:n,y:s}=i;Object.assign(t.style,{left:`${n}px`,top:`${s}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of Cn.dialog.children){const i=t.getAttribute("data-context-group");if(t instanceof Cn&&i===e){t.visible=!1,t.removeAttribute("data-context-group");for(const n of t.children)n instanceof Te&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const e=m`
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
    `}},Te.styles=I`
    :host {
      --bim-label--c: var(--bim-ui_bg-contrast-100, white);
      position: relative;
      display: block;
      flex: 1;
      pointer-events: none;
      background-color: var(--bim-button--bgc, var(--bim-ui_bg-contrast-20));
      border-radius: var(--bim-ui_size-4xs);
      overflow: hidden;
      transition: all 0.15s;
    }

    :host:before,
    :host:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      box-sizing: border-box;
    }

    :host(:not([disabled])):before {
      content: "";
      background: var(--bim-ui_main-base);
      border-radius: 50%;
      top: 150%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s cubic-bezier(0.72, 0.1, 0.43, 0.93);
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

    :host(:hover):before {
      top: 50%;
      transform: translate(-50%, -50%) scale(200%);
      // clip-path: circle(100%);
      // clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }

    :host(:hover),
    :host([active]) {
      --bim-label--c: var(--bim-ui_main-contrast);
      // background-color: var(--bim-ui_main-base);
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
  `,Te);lt([g({type:String,reflect:!0})],nt.prototype,"label",2);lt([g({type:Boolean,attribute:"label-hidden",reflect:!0})],nt.prototype,"labelHidden",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"active",2);lt([g({type:Boolean,reflect:!0,attribute:"disabled"})],nt.prototype,"disabled",2);lt([g({type:String,reflect:!0})],nt.prototype,"icon",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"vertical",2);lt([g({type:Number,attribute:"tooltip-time",reflect:!0})],nt.prototype,"tooltipTime",2);lt([g({type:Boolean,attribute:"tooltip-visible",reflect:!0})],nt.prototype,"tooltipVisible",2);lt([g({type:String,attribute:"tooltip-title",reflect:!0})],nt.prototype,"tooltipTitle",2);lt([g({type:String,attribute:"tooltip-text",reflect:!0})],nt.prototype,"tooltipText",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"loading",1);let Kc=nt;var tu=Object.defineProperty,ni=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&tu(t,i,s),s};const hr=class extends T{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(e){e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
      <div class="parent">
        ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};hr.styles=I`
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
  `;let ge=hr;ni([g({type:String,reflect:!0})],ge.prototype,"icon");ni([g({type:String,reflect:!0})],ge.prototype,"name");ni([g({type:String,reflect:!0})],ge.prototype,"label");ni([g({type:Boolean,reflect:!0})],ge.prototype,"checked");ni([g({type:Boolean,reflect:!0})],ge.prototype,"inverted");var eu=Object.defineProperty,ve=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&eu(t,i,s),s};const pr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=ue(),this._textInput=ue(),this.onValueChange=new Event("input"),this.onOpacityInput=e=>{const t=e.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(e){const{color:t,opacity:i}=e;this.color=t,i&&(this.opacity=i)}get value(){const e={color:this.color};return this.opacity&&(e.opacity=this.opacity),e}onColorInput(e){e.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(e){e.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:i}=t;let n=i.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),t.value=n.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:e}=this._colorInput;e&&e.click()}render(){return m`
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
    `}};pr.styles=I`
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
  `;let Yt=pr;ve([g({type:String,reflect:!0})],Yt.prototype,"name");ve([g({type:String,reflect:!0})],Yt.prototype,"label");ve([g({type:String,reflect:!0})],Yt.prototype,"icon");ve([g({type:Boolean,reflect:!0})],Yt.prototype,"vertical");ve([g({type:Number,reflect:!0})],Yt.prototype,"opacity");ve([g({type:String,reflect:!0})],Yt.prototype,"color");var iu=Object.defineProperty,nu=Object.getOwnPropertyDescriptor,Ot=(e,t,i,n)=>{for(var s=n>1?void 0:n?nu(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&iu(t,i,s),s};const mr=class extends T{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?qi(this.label):this.label}set value(e){this._value=e}render(){return m`
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
    `}};mr.styles=I`
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
  `;let H=mr;Ot([g({type:String,reflect:!0})],H.prototype,"img",2);Ot([g({type:String,reflect:!0})],H.prototype,"label",2);Ot([g({type:String,reflect:!0})],H.prototype,"icon",2);Ot([g({type:Boolean,reflect:!0})],H.prototype,"checked",2);Ot([g({type:Boolean,reflect:!0})],H.prototype,"checkbox",2);Ot([g({type:Boolean,attribute:"no-mark",reflect:!0})],H.prototype,"noMark",2);Ot([g({converter:{fromAttribute(e){return e&&qi(e)}}})],H.prototype,"value",1);Ot([g({type:Boolean,reflect:!0})],H.prototype,"vertical",2);var su=Object.defineProperty,ou=Object.getOwnPropertyDescriptor,It=(e,t,i,n)=>{for(var s=n>1?void 0:n?ou(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&su(t,i,s),s};const fr=class extends z{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=ue(),this.onOptionClick=e=>{const t=e.target,i=this._value.has(t);if(!this.multiple&&!this.required&&!i)this._value=new Set([t]);else if(!this.multiple&&!this.required&&i)this._value=new Set([]);else if(!this.multiple&&this.required&&!i)this._value=new Set([t]);else if(this.multiple&&!this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&i){const n=[...this._value].filter(s=>s!==t);this._value=new Set(n)}else if(this.multiple&&this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&i){const n=[...this._value].filter(o=>o!==t),s=new Set(n);s.size!==0&&(this._value=s)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(e){if(e){const{value:t}=this._contextMenu;if(!t)return;for(const i of this.elements)t.append(i);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(e){if(this.required&&Object.keys(e).length===0)return;const t=new Set;for(const i of e){const n=this.findOption(i);if(n&&(t.add(n),!this.multiple&&Object.keys(e).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof H&&e.checked).map(e=>e.value)}get _options(){const e=new Set([...this.elements]);for(const t of this.children)t instanceof H&&e.add(t);return[...e]}onSlotChange(e){const t=e.target.assignedElements();this.observe(t);const i=new Set;for(const n of this.elements){if(!(n instanceof H)){n.remove();continue}n.checked&&i.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=i}updateOptionsState(){for(const e of this._options)e instanceof H&&(e.checked=this._value.has(e))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}render(){let e,t,i;if(this._value.size===0)e="Select an option...";else if(this._value.size===1){const n=[...this._value][0];e=(n==null?void 0:n.label)||(n==null?void 0:n.value),t=n==null?void 0:n.img,i=n==null?void 0:n.icon}else e=`Multiple (${this._value.size})`;return m`
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
    `}};fr.styles=[Tt.scrollbar,I`
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
    `];let vt=fr;It([g({type:String,reflect:!0})],vt.prototype,"name",2);It([g({type:String,reflect:!0})],vt.prototype,"icon",2);It([g({type:String,reflect:!0})],vt.prototype,"label",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"multiple",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"required",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"vertical",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"visible",1);It([be()],vt.prototype,"_value",2);var ru=Object.defineProperty,br=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&ru(t,i,s),s};const gr=class extends T{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(e){this._layouts=e;const t={};for(const[i,n]of Object.entries(e))for(const s in n.elements)t[i]||(t[i]={}),t[i][s]=o=>{const r=this._updateFunctions[i];if(!r)return;const l=r[s];l&&l(o)};this.updateComponent=t}get layouts(){return this._layouts}getLayoutAreas(e){const{template:t}=e,i=t.split(`
`).map(n=>n.trim()).map(n=>n.split('"')[1]).filter(n=>n!==void 0).flatMap(n=>n.split(/\s+/));return[...new Set(i)].filter(n=>n!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const e=this._updateFunctions[this.layout],t=this.layouts[this.layout],i=this.getLayoutAreas(t).map(n=>{const s=t.elements[n];if(!s)return null;if(s instanceof HTMLElement)return s.style.gridArea=n,s;if("template"in s){const{template:o,initialState:r}=s,[l,a]=z.create(o,r);return l.style.gridArea=n,e[n]=a,l}return z.create(s)}).filter(n=>!!n);this.style.gridTemplate=t.template,this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};gr.styles=I`
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
  `;let Vn=gr;br([g({type:Boolean,reflect:!0})],Vn.prototype,"floating");br([g({type:String,reflect:!0})],Vn.prototype,"layout");const An=class extends T{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};An.styles=I`
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
  `,An.properties={icon:{type:String}};let au=An;var lu=Object.defineProperty,Yi=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&lu(t,i,s),s};const vr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const e={};for(const t of this.children){const i=t;"value"in i?e[i.name||i.label]=i.value:"checked"in i&&(e[i.name||i.label]=i.checked)}return e}set value(e){const t=[...this.children];for(const i in e){const n=t.find(r=>{const l=r;return l.name===i||l.label===i});if(!n)continue;const s=n,o=e[i];typeof o=="boolean"?s.checked=o:s.value=o}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};vr.styles=I`
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
  `;let si=vr;Yi([g({type:String,reflect:!0})],si.prototype,"name");Yi([g({type:String,reflect:!0})],si.prototype,"label");Yi([g({type:String,reflect:!0})],si.prototype,"icon");Yi([g({type:Boolean,reflect:!0})],si.prototype,"vertical");var cu=Object.defineProperty,oi=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&cu(t,i,s),s};const yr=class extends T{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?qi(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};yr.styles=I`
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
  `;let ye=yr;oi([g({type:String,reflect:!0})],ye.prototype,"img");oi([g({type:Boolean,attribute:"label-hidden",reflect:!0})],ye.prototype,"labelHidden");oi([g({type:String,reflect:!0})],ye.prototype,"icon");oi([g({type:Boolean,attribute:"icon-hidden",reflect:!0})],ye.prototype,"iconHidden");oi([g({type:Boolean,reflect:!0})],ye.prototype,"vertical");var uu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,st=(e,t,i,n)=>{for(var s=n>1?void 0:n?du(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&uu(t,i,s),s};const _r=class extends T{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=ue(),this.onValueChange=new Event("change")}set value(e){this.setValue(e.toString())}get value(){return this._value}onChange(e){e.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(e){const{value:t}=this._input;let i=e;if(i=i.replace(/[^0-9.-]/g,""),i=i.replace(/(\..*)\./g,"$1"),i.endsWith(".")||(i.lastIndexOf("-")>0&&(i=i[0]+i.substring(1).replace(/-/g,"")),i==="-"||i==="-0"))return;let n=Number(i);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:e}=this._input;e&&Number.isNaN(Number(e.value))&&(e.value=this.value.toString())}onSliderMouseDown(e){document.body.style.cursor="w-resize";const{clientX:t}=e,i=this.value;let n=!1;const s=l=>{var a;n=!0;const{clientX:u}=l,d=this.step??1,c=((a=d.toString().split(".")[1])==null?void 0:a.length)||0,h=1/(this.sensitivity??1),p=(u-t)/h;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const b=i+p*d;this.setValue(b.toFixed(c))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},r=()=>{document.removeEventListener("mousemove",s),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",s),document.addEventListener("mouseup",r)}onFocus(e){e.stopPropagation();const t=i=>{i.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:e}=this._input;e&&e.focus()}render(){const e=m`
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
    `,t=this.min??-1/0,i=this.max??1/0,n=100*(this.value-t)/(i-t),s=m`
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
        ${this.slider?s:e}
      </bim-input>
    `}};_r.styles=I`
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
  `;let K=_r;st([g({type:String,reflect:!0})],K.prototype,"name",2);st([g({type:String,reflect:!0})],K.prototype,"icon",2);st([g({type:String,reflect:!0})],K.prototype,"label",2);st([g({type:String,reflect:!0})],K.prototype,"pref",2);st([g({type:Number,reflect:!0})],K.prototype,"min",2);st([g({type:Number,reflect:!0})],K.prototype,"value",1);st([g({type:Number,reflect:!0})],K.prototype,"step",2);st([g({type:Number,reflect:!0})],K.prototype,"sensitivity",2);st([g({type:Number,reflect:!0})],K.prototype,"max",2);st([g({type:String,reflect:!0})],K.prototype,"suffix",2);st([g({type:Boolean,reflect:!0})],K.prototype,"vertical",2);st([g({type:Boolean,reflect:!0})],K.prototype,"slider",2);var hu=Object.defineProperty,pu=Object.getOwnPropertyDescriptor,ri=(e,t,i,n)=>{for(var s=n>1?void 0:n?pu(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&hu(t,i,s),s};const wr=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(e){this._hidden=e,this.activationButton.active=!e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return We(this,this.valueTransform)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(o=>{const r=o;return r.name===i||r.label===i});if(!n)continue;const s=n;s.value=e[i]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};wr.styles=[Tt.scrollbar,I`
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
    `];let Xt=wr;ri([g({type:String,reflect:!0})],Xt.prototype,"icon",2);ri([g({type:String,reflect:!0})],Xt.prototype,"name",2);ri([g({type:String,reflect:!0})],Xt.prototype,"label",2);ri([g({type:Boolean,reflect:!0})],Xt.prototype,"hidden",1);ri([g({type:Boolean,attribute:"header-hidden",reflect:!0})],Xt.prototype,"headerHidden",2);var mu=Object.defineProperty,ai=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&mu(t,i,s),s};const $r=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const e=this.parentElement;let t;return e instanceof Xt&&(t=e.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),We(this,t)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(o=>{const r=o;return r.name===i||r.label===i});if(!n)continue;const s=n;s.value=e[i]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const e=this.label||this.icon||this.name||this.fixed,t=m`<svg
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
    </svg>`,n=this.collapsed?t:i,s=m`
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
        ${e?s:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};$r.styles=[Tt.scrollbar,I`
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
    `];let _e=$r;ai([g({type:String,reflect:!0})],_e.prototype,"icon");ai([g({type:String,reflect:!0})],_e.prototype,"label");ai([g({type:String,reflect:!0})],_e.prototype,"name");ai([g({type:Boolean,reflect:!0})],_e.prototype,"fixed");ai([g({type:Boolean,reflect:!0})],_e.prototype,"collapsed");var fu=Object.defineProperty,li=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&fu(t,i,s),s};const xr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=e=>{this._value=e.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof H&&(t.checked=t===e.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(e){const t=this.findOption(e);if(t){for(const i of this._options)i.checked=i===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(e){const t=e.target.assignedElements();for(const i of t)i instanceof H&&(i.noMark=!0,i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}firstUpdated(){const e=[...this.children].find(t=>t instanceof H&&t.checked);e&&(this._value=e)}render(){return m`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};xr.styles=I`
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
  `;let we=xr;li([g({type:String,reflect:!0})],we.prototype,"name");li([g({type:String,reflect:!0})],we.prototype,"icon");li([g({type:String,reflect:!0})],we.prototype,"label");li([g({type:Boolean,reflect:!0})],we.prototype,"vertical");li([be()],we.prototype,"_value");const bu=()=>m`
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
  `;var vu=Object.defineProperty,yu=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&vu(t,i,s),s};const Cr=class extends T{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Cr.styles=I`
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
  `;let Ar=Cr;yu([g({type:String,reflect:!0})],Ar.prototype,"column");var _u=Object.defineProperty,wu=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&_u(t,i,s),s};const Er=class extends T{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(e,t=!1){for(const i of this._groups)i.childrenHidden=typeof e>"u"?!i.childrenHidden:!e,t&&i.toggleChildren(e,t)}render(){return this._groups=[],m`
      <slot></slot>
      ${this.data.map(e=>{const t=document.createElement("bim-table-group");return this._groups.push(t),t.table=this.table,t.data=e,t})}
    `}};Er.styles=I`
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
  `;let Sr=Er;wu([g({type:Array,attribute:!1})],Sr.prototype,"data");var $u=Object.defineProperty,xu=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&$u(t,i,s),s};const kr=class extends T{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(e,t=!1){this._children&&(this.childrenHidden=typeof e>"u"?!this.childrenHidden:!e,t&&this._children.toggleGroups(e,t))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const e=this.table.getGroupIndentation(this.data)??0,t=m`
      ${this.table.noIndentation?null:m`
            <style>
              .branch-vertical {
                left: ${e+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,i=document.createDocumentFragment();ce(t,i);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${e-1+(this.table.selectableRows?2.05:.5625)}rem`);let s=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(a);const u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.setAttribute("height","6.5"),u.setAttribute("width","9.5"),u.setAttribute("viewBox","0 0 5.9111118 5.0175439");const d=document.createElementNS("http://www.w3.org/2000/svg","path");d.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),u.append(d),s=document.createElement("div"),s.addEventListener("click",c=>{c.stopPropagation(),this.toggleChildren()}),s.classList.add("caret"),s.style.left=`${(this.table.selectableRows?1.5:.125)+e}rem`,this.childrenHidden?s.append(l):s.append(u)}const o=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&o.append(i),o.table=this.table,o.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),s&&this.data.children&&o.append(s),e!==0&&(!this.data.children||this.childrenHidden)&&n&&o.append(n);let r;if(this.data.children){r=document.createElement("bim-table-children"),this._children=r,r.table=this.table,r.data=this.data.children;const l=document.createDocumentFragment();ce(t,l),r.append(l)}return m`
      <div class="parent">${o} ${this.childrenHidden?null:r}</div>
    `}};kr.styles=I`
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
  `;let Tr=kr;xu([g({type:Boolean,attribute:"children-hidden",reflect:!0})],Tr.prototype,"childrenHidden");var Cu=Object.defineProperty,$e=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&Cu(t,i,s),s};const Or=class extends T{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(e=>{this._intersecting=e[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.name)}get _columnWidths(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.width)}get _isSelected(){var e;return(e=this.table)==null?void 0:e.selection.has(this.data)}onSelectionChange(e){if(!this.table)return;const t=e.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const e=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,i=[];for(const n in t){if(this.hiddenColumns.includes(n))continue;const s=t[n];let o;if(typeof s=="string"||typeof s=="boolean"||typeof s=="number"?(o=document.createElement("bim-label"),o.textContent=String(s)):s instanceof HTMLElement?o=s:(o=document.createDocumentFragment(),ce(s,o)),!o)continue;const r=document.createElement("bim-table-cell");r.append(o),r.column=n,this._columnNames.indexOf(n)===0&&(r.style.marginLeft=`${this.table.noIndentation?0:e+.75}rem`);const l=this._columnNames.indexOf(n);r.setAttribute("data-column-index",String(l)),r.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),r.toggleAttribute("data-cell-header",this.isHeader),r.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:r}})),i.push(r)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,m`
      ${!this.isHeader&&this.table.selectableRows?m`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${i}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};Or.styles=I`
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
  `;let Jt=Or;$e([g({type:Boolean,reflect:!0})],Jt.prototype,"selected");$e([g({attribute:!1})],Jt.prototype,"columns");$e([g({attribute:!1})],Jt.prototype,"hiddenColumns");$e([g({attribute:!1})],Jt.prototype,"data");$e([g({type:Boolean,attribute:"is-header",reflect:!0})],Jt.prototype,"isHeader");$e([be()],Jt.prototype,"_intersecting");var Au=Object.defineProperty,Eu=Object.getOwnPropertyDescriptor,ct=(e,t,i,n)=>{for(var s=n>1?void 0:n?Eu(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Au(t,i,s),s};const Ir=class extends T{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(e,t)=>Object.values(t.data).some(i=>String(i).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,t)=>{let i=!1;const n=xn(e)??[];for(const s of n){if("queries"in s){i=!1;break}const{condition:o,value:r}=s;let{key:l}=s;if(l.startsWith("[")&&l.endsWith("]")){const a=l.replace("[","").replace("]","");l=a,i=Object.keys(t.data).filter(u=>u.includes(a)).map(u=>Hs(t.data[u],o,r)).some(u=>u)}else i=Hs(t.data[l],o,r);if(!i)break}return i}}set columns(e){const t=[];for(const i of e){const n=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;t.push(n)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const t of this.columns){const{name:i}=t;e[i]=String(i)}return e}get value(){return this._filteredData}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateFilteredData(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set hiddenColumns(e){this._hiddenColumns=e,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(xn(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(e){let t=!1;for(const i of e){const{children:n,data:s}=i;for(const o in s)this._columns.map(r=>typeof r=="string"?r:r.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(n){const o=this.computeMissingColumns(n);o&&!t&&(t=o)}}return t}generateText(e="comma",t=this.value,i="",n=!0){const s=this._textDelimiters[e];let o="";const r=this.columns.map(l=>l.name);if(n){this.indentationInText&&(o+=`Indentation${s}`);const l=`${r.join(s)}
`;o+=l}for(const[l,a]of t.entries()){const{data:u,children:d}=a,c=this.indentationInText?`${i}${l+1}${s}`:"",h=r.map(b=>u[b]??""),p=`${c}${h.join(s)}
`;o+=p,d&&(o+=this.generateText(e,a.children,`${i}${l+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(e){const t={};for(const n of Object.keys(this.dataTransform)){const s=this.columns.find(o=>o.name===n);s&&s.forceDataTransform&&(n in e||(e[n]=""))}const i=e;for(const n in i){const s=this.dataTransform[n];s?t[n]=s(i[n],e):t[n]=e[n]}return t}downloadData(e="BIM Table Data",t="json"){let i=null;if(t==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),t==="csv"&&(i=new File([this.csv],`${e}.csv`)),t==="tsv"&&(i=new File([this.tsv],`${e}.tsv`)),!i)return;const n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=i.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(e,t=this.value,i=0){for(const n of t){if(n.data===e)return i;if(n.children){const s=this.getRowIndentation(e,n.children,i+1);if(s!==null)return s}}return null}getGroupIndentation(e,t=this.value,i=0){for(const n of t){if(n===e)return i;if(n.children){const s=this.getGroupIndentation(e,n.children,i+1);if(s!==null)return s}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._filteredData.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){if(this.loading=!1,this._filteredData.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),n=i==null?void 0:i.querySelector("[data-table-element='error-message']");return t instanceof Error&&n&&t.message.trim()!==""&&(n.textContent=t.message),this._errorLoading=!0,!1}}filter(e,t=this.filterFunction??this._stringFilterFunction,i=this.data){const n=[];for(const s of i)if(t(e,s)){if(this.preserveStructureOnFilter){const o={data:s.data};if(s.children){const r=this.filter(e,t,s.children);r.length&&(o.children=r)}n.push(o)}else if(n.push({data:s.data}),s.children){const o=this.filter(e,t,s.children);n.push(...o)}}else if(s.children){const o=this.filter(e,t,s.children);this.preserveStructureOnFilter&&o.length?n.push({data:s.data,children:o}):n.push(...o)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return bu();if(this._errorLoading)return m`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return m`<slot name="missing-data"></slot>`;const e=document.createElement("bim-table-row");e.table=this,e.isHeader=!0,e.data=this._headerRowData,e.style.gridArea="Header",e.style.position="sticky",e.style.top="0",e.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:e} ${gu()}
        <div style="overflow-x: hidden; grid-area: Body">${t}</div>
      </div>
    `}};Ir.styles=[Tt.scrollbar,I`
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
    `];let ot=Ir;ct([be()],ot.prototype,"_filteredData",2);ct([g({type:Boolean,attribute:"headers-hidden",reflect:!0})],ot.prototype,"headersHidden",2);ct([g({type:String,attribute:"min-col-width",reflect:!0})],ot.prototype,"minColWidth",2);ct([g({type:Array,attribute:!1})],ot.prototype,"columns",1);ct([g({type:Array,attribute:!1})],ot.prototype,"data",1);ct([g({type:Boolean,reflect:!0})],ot.prototype,"expanded",2);ct([g({type:Boolean,reflect:!0,attribute:"selectable-rows"})],ot.prototype,"selectableRows",2);ct([g({attribute:!1})],ot.prototype,"selection",2);ct([g({type:Boolean,attribute:"no-indentation",reflect:!0})],ot.prototype,"noIndentation",2);ct([g({type:Boolean,reflect:!0})],ot.prototype,"loading",2);ct([be()],ot.prototype,"_errorLoading",2);var Su=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,xe=(e,t,i,n)=>{for(var s=n>1?void 0:n?ku(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Su(t,i,s),s};const Nr=class extends T{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=e=>{const t=e.target;t instanceof X&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(e){this._tab=e;const t=[...this.children],i=t.find(n=>n instanceof X&&n.name===e);for(const n of t){if(!(n instanceof X))continue;n.hidden=i!==n;const s=this.getTabSwitcher(n.name);s&&s.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(e){return this._switchers.find(t=>t.getAttribute("data-name")===e)}createSwitchers(){this._switchers=[];for(const e of this.children){if(!(e instanceof X))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===e.name?this.toggleAttribute("tab",!1):this.tab=e.name}),t.setAttribute("data-name",e.name),t.className="switcher";const i=document.createElement("bim-label");i.textContent=e.label??null,i.icon=e.icon,t.append(i),this._switchers.push(t)}}updateSwitchers(){for(const e of this.children){if(!(e instanceof X))continue;const t=this._switchers.find(n=>n.getAttribute("data-name")===e.name);if(!t)continue;const i=t.querySelector("bim-label");i&&(i.textContent=e.label??null,i.icon=e.icon)}}onSlotChange(e){this.createSwitchers();const t=e.target.assignedElements(),i=t.find(n=>n instanceof X?this.tab?n.name===this.tab:!n.hidden:!1);i&&i instanceof X&&(this.tab=i.name);for(const n of t){if(!(n instanceof X)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),i!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Nr.styles=[Tt.scrollbar,I`
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
    `];let Nt=Nr;xe([be()],Nt.prototype,"_switchers",2);xe([g({type:Boolean,reflect:!0})],Nt.prototype,"bottom",2);xe([g({type:Boolean,attribute:"switchers-hidden",reflect:!0})],Nt.prototype,"switchersHidden",2);xe([g({type:Boolean,reflect:!0})],Nt.prototype,"floating",2);xe([g({type:String,reflect:!0})],Nt.prototype,"tab",1);xe([g({type:Boolean,attribute:"switchers-full",reflect:!0})],Nt.prototype,"switchersFull",2);var Tu=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,Xi=(e,t,i,n)=>{for(var s=n>1?void 0:n?Ou(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Tu(t,i,s),s};const Pr=class extends T{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set label(e){this._label=e;const t=this.parentElement;t instanceof Nt&&t.updateSwitchers()}get label(){return this._label}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:e}=this;if(e&&this.name===this._defaultName){const t=[...e.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return m` <slot></slot> `}};Pr.styles=I`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let X=Pr;Xi([g({type:String,reflect:!0})],X.prototype,"name",2);Xi([g({type:String,reflect:!0})],X.prototype,"label",1);Xi([g({type:String,reflect:!0})],X.prototype,"icon",2);Xi([g({type:Boolean,reflect:!0})],X.prototype,"hidden",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bs=e=>e??L;var Iu=Object.defineProperty,Nu=Object.getOwnPropertyDescriptor,yt=(e,t,i,n)=>{for(var s=n>1?void 0:n?Nu(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Iu(t,i,s),s};const Mr=class extends T{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(e){this._inputTypes.includes(e)&&(this._type=e)}get type(){return this._type}get query(){return xn(this.value)}onInputChange(e){e.stopPropagation();const t=e.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return m`
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
              placeholder=${Bs(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:m` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Bs(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};Mr.styles=[Tt.scrollbar,I`
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
    `];let rt=Mr;yt([g({type:String,reflect:!0})],rt.prototype,"icon",2);yt([g({type:String,reflect:!0})],rt.prototype,"label",2);yt([g({type:String,reflect:!0})],rt.prototype,"name",2);yt([g({type:String,reflect:!0})],rt.prototype,"placeholder",2);yt([g({type:String,reflect:!0})],rt.prototype,"value",2);yt([g({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);yt([g({type:Number,reflect:!0})],rt.prototype,"debounce",2);yt([g({type:Number,reflect:!0})],rt.prototype,"rows",2);yt([g({type:String,reflect:!0})],rt.prototype,"type",1);var Pu=Object.defineProperty,Mu=Object.getOwnPropertyDescriptor,Lr=(e,t,i,n)=>{for(var s=n>1?void 0:n?Mu(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Pu(t,i,s),s};const Rr=class extends T{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const e=this.children;for(const t of e)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Rr.styles=I`
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
  `;let Ji=Rr;Lr([g({type:Number,reflect:!0})],Ji.prototype,"rows",2);Lr([g({type:Boolean,reflect:!0})],Ji.prototype,"vertical",1);var Lu=Object.defineProperty,Ru=Object.getOwnPropertyDescriptor,Qi=(e,t,i,n)=>{for(var s=n>1?void 0:n?Ru(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&Lu(t,i,s),s};const jr=class extends T{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(e){this._labelHidden=e,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const e=this.children;for(const t of e)t instanceof Ji&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};jr.styles=I`
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
  `;let Ce=jr;Qi([g({type:String,reflect:!0})],Ce.prototype,"label",2);Qi([g({type:String,reflect:!0})],Ce.prototype,"icon",2);Qi([g({type:Boolean,reflect:!0})],Ce.prototype,"vertical",1);Qi([g({type:Boolean,attribute:"label-hidden",reflect:!0})],Ce.prototype,"labelHidden",1);var ju=Object.defineProperty,zu=Object.getOwnPropertyDescriptor,Wn=(e,t,i,n)=>{for(var s=n>1?void 0:n?zu(t,i):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(n?r(t,i,s):r(s))||s);return n&&s&&ju(t,i,s),s};const zr=class extends T{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(e){this._vertical=e,this.updateSections()}get vertical(){return this._vertical}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const e=this.children;for(const t of e)t instanceof Ce&&(t.labelHidden=this.vertical&&!Z.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return m`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};zr.styles=I`
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
  `;let Zi=zr;Wn([g({type:String,reflect:!0})],Zi.prototype,"icon",2);Wn([g({type:Boolean,attribute:"labels-hidden",reflect:!0})],Zi.prototype,"labelsHidden",2);Wn([g({type:Boolean,reflect:!0})],Zi.prototype,"vertical",1);var Du=Object.defineProperty,Fu=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&Du(t,i,s),s};const Dr=class extends T{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Dr.styles=I`
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
  `;let Fr=Dr;Fu([g({type:String,reflect:!0})],Fr.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr="important",Hu=" !"+Hr,Ht=Do(class extends Fo{constructor(e){var t;if(super(e),e.type!==zo.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const s=t[n];if(s!=null){this.ft.add(n);const o=typeof s=="string"&&s.endsWith(Hu);n.includes("-")||o?i.setProperty(n,o?s.slice(0,-11):s,o?Hr:""):i[n]=s}}return Wt}}),Bu=e=>{const{components:t}=e,i=t.get(so);return m`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const n=document.createElement("input");n.type="file",n.accept=".ifc",n.onchange=async()=>{if(n.files===null||n.files.length===0)return;const s=n.files[0],o=s.name.replace(".ifc","");n.remove();const r=await s.arrayBuffer(),l=new Uint8Array(r);await i.load(l,!0,o)},n.click()}}
    ></bim-button>
  `},Uu=e=>z.create(Bu,e),Vu=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:Uu},Symbol.toStringTag,{value:"Module"}));({...Vu});const Wu=e=>{const{components:t,actions:i,tags:n}=e,s=(i==null?void 0:i.dispose)??!0,o=(i==null?void 0:i.download)??!0,r=(i==null?void 0:i.visibility)??!0,l=(n==null?void 0:n.schema)??!0,a=(n==null?void 0:n.viewDefinition)??!0,u=t.get(qt),d=({detail:c})=>{const{cell:h}=c;h.style.padding="0.25rem 0"};return m`
    <bim-table ${G(c=>{if(!c)return;const h=c;h.hiddenColumns=["modelID"];const p=[];for(const[,b]of u.groups){if(!b)continue;const w={data:{Name:b.name||b.uuid,modelID:b.uuid}};p.push(w)}h.dataTransform={Name:(b,w)=>{const{modelID:v}=w;if(typeof v!="string")return b;const f=u.groups.get(v);if(!f)return v;const y={};for(const S of f.items)y[S.id]=S.ids;let _;const{schema:$}=f.ifcMetadata;l&&$&&(_=m`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${$}</bim-label>
            `);let A;if(a&&"viewDefinition"in f.ifcMetadata){const S=f.ifcMetadata.viewDefinition;A=m`
            ${S.split(",").map(E=>m`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${E}</bim-label>`)}
          `}let C;s&&(C=m`<bim-button @click=${()=>u.disposeGroup(f)} icon="mdi:delete"></bim-button>`);let O;r&&(O=m`<bim-button @click=${S=>{const E=t.get(oo),B=S.target;E.set(B.hasAttribute("data-model-hidden"),y),B.toggleAttribute("data-model-hidden"),B.icon=B.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let P;return o&&(P=m`<bim-button @click=${()=>{const S=document.createElement("input");S.type="file",S.accept=".ifc",S.multiple=!1,S.addEventListener("change",async()=>{if(!(S.files&&S.files.length===1))return;const E=S.files[0],B=await E.arrayBuffer(),q=await t.get(xa).saveToIfc(f,new Uint8Array(B)),W=new File([q],E.name),x=document.createElement("a");x.href=URL.createObjectURL(W),x.download=W.name,x.click(),URL.revokeObjectURL(x.href)}),S.click()}} icon="flowbite:download-solid"></bim-button>`),m`
         <div style="display: flex; flex: 1; gap: var(--bim-ui_size-4xs); justify-content: space-between; overflow: auto;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0 var(--bim-ui_size-4xs); flex-grow: 1; overflow: auto;">
            <div style="min-height: 1.75rem; overflow: auto; display: flex;">
              <bim-label style="white-space: normal;">${b}</bim-label>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: var(--bim-ui_size-4xs); overflow: auto;">
              ${_}
              ${A}
            </div>
          </div>
          <div style="display: flex; align-self: flex-start; flex-shrink: 0;">
            ${P}
            ${O}
            ${C}
          </div>
         </div>
        `}},h.data=p})} @cellcreated=${d} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},Gu=(e,t=!0)=>{const i=z.create(Wu,e);if(t){const{components:n}=e,s=n.get(qt),[,o]=i;s.onFragmentsLoaded.add(()=>setTimeout(()=>o())),s.onFragmentsDisposed.add(()=>o())}return i},qu=Object.freeze(Object.defineProperty({__proto__:null,modelsList:Gu},Symbol.toStringTag,{value:"Module"})),Br=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",e=>e.includes("Value"),e=>e.startsWith("Material"),e=>e.startsWith("Relating"),e=>{const t=["IsGroupedBy","IsDecomposedBy"];return e.startsWith("Is")&&!t.includes(e)}];async function _i(e,t,i,n=Br,s=!1){const o=e.get(mt),r=await t.getProperties(i);if(!r)return{data:{Entity:`${i} properties not found...`}};const l=o.relationMaps[t.uuid],a={data:{}};for(const u in r){const d=n.map(h=>typeof h=="string"?u===h:h(u)).includes(!0);if(!(u==="type"||d))continue;const c=r[u];if(c)if(c.type===5){a.children||(a.children=[]);const h=await _i(e,t,c.value,n,s);a.children.push(h)}else if(typeof c=="object"&&!Array.isArray(c)){const{value:h,type:p}=c;if(s)p===1||p===2||p===3||(a.data[u]=h);else{const b=typeof h=="number"?Number(h.toFixed(3)):h;a.data[u]=b}}else if(Array.isArray(c))for(const h of c){if(h.type!==5)continue;a.children||(a.children=[]);const p=await _i(e,t,h.value,n,s);a.children.push(p)}else if(u==="type"){const h=$i[c];a.data.Entity=h}else a.data[u]=c}if(l&&l.get(r.expressID)){const u=l.get(r.expressID);for(const d of n){const c=[];if(typeof d=="string"){const h=o._inverseAttributes.indexOf(d);h!==-1&&c.push(h)}else{const h=o._inverseAttributes.filter(p=>d(p));for(const p of h){const b=o._inverseAttributes.indexOf(p);c.push(b)}}for(const h of c){const p=u.get(h);if(p)for(const b of p){const w=await _i(e,t,b,n,s);a.children||(a.children=[]),a.children.push(w)}}}}return a}const Yu=e=>{const{components:t,fragmentIdMap:i,attributesToInclude:n,editable:s,tableDefinition:o}=e,r=t.get(qt);let l;return typeof n=="function"?l=n(Br):l=n,m`<bim-table ${G(async a=>{if(!a)return;const u=a,d=[],c=[];for(const h in i){const p=r.list.get(h);if(!(p&&p.group))continue;const b=p.group,w=c.find(v=>v.model===b);if(w)for(const v of i[h])w.expressIDs.add(v);else{const v={model:b,expressIDs:new Set(i[h])};c.push(v)}}for(const h of c){const{model:p,expressIDs:b}=h;for(const w of b){const v=await _i(t,p,w,l,s);d.push(v)}}u.dataTransform=o,u.data=d,u.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},Xu=e=>z.create(Yu,e),Ju=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:Xu},Symbol.toStringTag,{value:"Module"}));let wt;const Qu=e=>{const{components:t,classifications:i}=e,n=t.get($a),s=t.get(oo);wt||(wt=document.createElement("bim-table"),wt.headersHidden=!0,wt.hiddenColumns=["system"],wt.columns=["Name",{name:"Actions",width:"auto"}],wt.dataTransform={Actions:(r,l)=>{const{system:a,Name:u}=l;if(!(typeof a=="string"&&typeof u=="string"))return r;const d=n.list[a];if(!(d&&d[u]))return r;const c=d[u],{map:h}=c;return m`
          <div>
            <bim-checkbox checked @change=${p=>{const b=p.target;s.set(b.value,h)}}></bim-checkbox>
          </div>
        `}});const o=[];for(const r of i){const l=typeof r=="string"?r:r.system,a=typeof r=="string"?r:r.label,u=n.list[l];u&&o.push({data:{Name:a,system:l},children:Object.keys(u).map(d=>({data:{Name:d,system:l,Actions:""}}))})}return wt.data=o,m`${wt}`},Zu=(e,t=!0)=>{const i=z.create(Qu,e);if(t){const{components:n}=e,s=n.get(qt),[,o]=i;s.onFragmentsDisposed.add(()=>o())}return i},Ku=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:Zu},Symbol.toStringTag,{value:"Module"})),Ur=async(e,t,i)=>{var n,s,o,r;const l=e.get(mt),a={data:{Name:(n=i.Name)==null?void 0:n.value},children:[{data:{Name:"Identification",Value:(s=i.Identification)==null?void 0:s.value}},{data:{Name:"Name",Value:(o=i.Name)==null?void 0:o.value}},{data:{Name:"Description",Value:(r=i.Description)==null?void 0:r.value}}]},u=l.getEntityRelations(t,i.expressID,"IsNestedBy");if(!u)return a;a.children||(a.children=[]);const d=[];a.children.push({data:{Name:"Tasks"},children:d});for(const c of u){const h=await t.getProperties(c);if(!h)continue;const p=await Ur(e,t,h);d.push(p)}return a},td=async(e,t,i)=>{const n=[];for(const s of i){const o=await Ur(e,t,s);n.push(o)}return{data:{Name:"Tasks"},children:n}},ed=async(e,t)=>{var i,n,s,o;const r={data:{Name:"Classifications"}};for(const l of t){const{value:a}=l.ReferencedSource,u=await e.getProperties(a);if(!u)continue;const d={data:{Name:(i=u.Name)==null?void 0:i.value},children:[{data:{Name:"Identification",Value:((n=l.Identification)==null?void 0:n.value)||((s=l.ItemReference)==null?void 0:s.value)}},{data:{Name:"Name",Value:(o=l.Name)==null?void 0:o.value}}]};r.children||(r.children=[]),r.children.push(d)}return r},id=async(e,t)=>{var i,n,s,o,r,l;const a={data:{Name:"Materials"}};for(const u of t){if(u.type===lo){const d=(i=u.ForLayerSet)==null?void 0:i.value,c=await e.getProperties(d);if(!c)continue;for(const h of c.MaterialLayers){const{value:p}=h,b=await e.getProperties(p);if(!b)continue;const w=await e.getProperties((n=b.Material)==null?void 0:n.value);if(!w)continue;const v={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:(s=b.LayerThickness)==null?void 0:s.value}},{data:{Name:"Material",Value:(o=w.Name)==null?void 0:o.value}}]};a.children||(a.children=[]),a.children.push(v)}}if(u.type===uo)for(const d of u.Materials){const{value:c}=d,h=await e.getProperties(c);if(!h)continue;const p={data:{Name:"Name",Value:(r=h.Name)==null?void 0:r.value}};a.children||(a.children=[]),a.children.push(p)}if(u.type===co){const d={data:{Name:"Name",Value:(l=u.Name)==null?void 0:l.value}};a.children||(a.children=[]),a.children.push(d)}}return a},nd={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},sd={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},Vr=async(e,t)=>{var i,n,s;const o=Object.values(await e.getAllPropertiesOfType(Na))[0];let r;for(const l of o.Units){const a=await e.getProperties(l.value);if(a&&((i=a.UnitType)==null?void 0:i.value)===nd[t]){r=`${((n=a.Prefix)==null?void 0:n.value)??""}${((s=a.Name)==null?void 0:s.value)??""}`;break}}return r?sd[r]:null},od=async(e,t,i)=>{var n,s;const{displayUnits:o}=i,r={data:{Name:"PropertySets"}};for(const l of t){const a={data:{Name:(n=l.Name)==null?void 0:n.value}};if(l.type===ro){for(const u of l.HasProperties){const{value:d}=u,c=await e.getProperties(d);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,b="";if(o){const{name:v}=c[h],f=await Vr(e,v)??{};b=f.symbol,p=c[h].value,typeof p=="number"&&f.digits&&(p=p.toFixed(f.digits))}const w={data:{Name:(s=c.Name)==null?void 0:s.value,Value:`${p} ${b??""}`}};a.children||(a.children=[]),a.children.push(w)}a.children&&(r.children||(r.children=[]),r.children.push(a))}}return r},rd=async(e,t,i)=>{var n,s;const{displayUnits:o}=i,r={data:{Name:"QuantitySets"}};for(const l of t){const a={data:{Name:(n=l.Name)==null?void 0:n.value}};if(l.type===ao){for(const u of l.Quantities){const{value:d}=u,c=await e.getProperties(d);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,b="";if(o){const{name:v}=c[h],f=await Vr(e,v)??{};b=f.symbol,p=c[h].value,typeof p=="number"&&f.digits&&(p=p.toFixed(f.digits))}const w={data:{Name:(s=c.Name)==null?void 0:s.value,Value:`${p} ${b??""}`}};a.children||(a.children=[]),a.children.push(w)}a.children&&(r.children||(r.children=[]),r.children.push(a))}}return r},ad=["OwnerHistory","ObjectPlacement","CompositionType"],Wr=async(e,t)=>{const i={groupName:"Attributes",includeClass:!1,...t},{groupName:n,includeClass:s}=i,o={data:{Name:n}};s&&(o.children||(o.children=[]),o.children.push({data:{Name:"Class",Value:$i[e.type]}}));for(const r in e){if(ad.includes(r))continue;const l=e[r];if(l&&typeof l=="object"&&!Array.isArray(l)){if(l.type===Sa)continue;const a={data:{Name:r,Value:l.value}};o.children||(o.children=[]),o.children.push(a)}}return o},de=(e,...t)=>{e.children||(e.children=[]),e.children.push(...t)},ld=async(e,t,i,n,s)=>{const o=e.get(mt).getEntityRelations(t,i,"IsDefinedBy");if(o){const r=[],l=[];for(const d of o){const c=await t.getProperties(d);c&&(c.type===ro&&r.push(c),c.type===ao&&l.push(c))}const a=await od(t,r,s);a.children&&de(n,a);const u=await rd(t,l,s);u.children&&de(n,u)}},cd=async(e,t,i,n)=>{const s=e.get(mt).getEntityRelations(t,i,"HasAssociations");if(s){const o=[],r=[];for(const u of s){const d=await t.getProperties(u);d&&(d.type===ka&&o.push(d),(d.type===lo||d.type===Ta||d.type===Oa||d.type===co||d.type===uo)&&r.push(d))}const l=await ed(t,o);l.children&&de(n,l);const a=await id(t,r);a.children&&de(n,a)}},ud=async(e,t,i,n)=>{const s=e.get(mt).getEntityRelations(t,i,"HasAssignments");if(s){const o=[];for(const l of s){const a=await t.getProperties(l);a&&a.type===Ia&&o.push(a)}const r=await td(e,t,o);r.children&&de(n,r)}},dd=async(e,t,i,n)=>{const s=e.get(mt).getEntityRelations(t,i,"ContainedInStructure");if(s&&s[0]){const o=s[0],r=await t.getProperties(o);if(r){const l=await Wr(r,{groupName:"SpatialContainer"});de(n,l)}}};let bi={};const hd=async(e,t,i)=>{var n;const s=e.get(mt),o=e.get(qt),r=o.getModelIdMap(t);Object.keys(t).length===0&&(bi={});const l=[];for(const a in r){const u=o.groups.get(a);if(!u)continue;const d=s.relationMaps[u.uuid];if(!d)continue;a in bi||(bi[a]=new Map);const c=bi[a],h=r[a];for(const p of h){let b=c.get(p);if(b){l.push(b);continue}const w=await u.getProperties(p);if(!w)continue;b={data:{Name:(n=w.Name)==null?void 0:n.value}},l.push(b),c.set(p,b);const v=await Wr(w,{includeClass:!0});b.children||(b.children=[]),b.children.push(v),d.get(p)&&(await ld(e,u,p,b,i),await cd(e,u,p,b),await ud(e,u,p,b),await dd(e,u,p,b))}}return l},pd=e=>{const t={emptySelectionWarning:!0,...e},{components:i,fragmentIdMap:n,emptySelectionWarning:s}=t;return m`
    <bim-table @cellcreated=${({detail:o})=>{const{cell:r}=o;r.column==="Name"&&!("Value"in r.rowData)&&(r.style.gridColumn="1 / -1")}} ${G(async o=>{if(!o)return;const r=o;r.columns=[{name:"Name",width:"12rem"}],r.headersHidden=!0,r.loadFunction=()=>hd(i,n,e),await r.loadData(!0)&&r.dispatchEvent(new Event("datacomputed"))})}>
      ${s?m`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},md=e=>z.create(pd,e),fd=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:md},Symbol.toStringTag,{value:"Module"})),En=async(e,t,i,n)=>{var s;const o=[],r=e.get(mt),l=await t.getProperties(i);if(!l)return o;const{type:a}=l,u={data:{Entity:$i[a],Name:(s=l.Name)==null?void 0:s.value,modelID:t.uuid,expressID:i}};for(const d of n){const c=r.getEntityRelations(t,i,d);if(!c)continue;u.children||(u.children=[]),u.data.relations=JSON.stringify(c);const h={};for(const p of c){const b=await En(e,t,p,n);for(const w of b)if(w.data.relations)u.children.push(w);else{const v=t.data.get(p);if(!v){u.children.push(w);continue}const f=v[1][1],y=$i[f];y in h||(h[y]=[]),w.data.Entity=w.data.Name,delete w.data.Name,h[y].push(w)}}for(const p in h){const b=h[p],w=b.map(f=>f.data.expressID),v={data:{Entity:p,modelID:t.uuid,relations:JSON.stringify(w)},children:b};u.children.push(v)}}return o.push(u),o},bd=async(e,t,i,n)=>{const s=e.get(mt),o=[];for(const r of t){let l;if(n)l={data:{Entity:r.name!==""?r.name:r.uuid},children:await En(e,r,n,i)};else{const a=s.relationMaps[r.uuid],u=await r.getAllPropertiesOfType(Ea);if(!(a&&u))continue;const{expressID:d}=Object.values(u)[0];l={data:{Entity:r.name!==""?r.name:r.uuid},children:await En(e,r,d,i)}}o.push(l)}return o};let ft;const gd=(e,t)=>{const i=e.get(qt),{modelID:n,expressID:s,relations:o}=t;if(!n)return null;const r=i.groups.get(n);return r?r.getFragmentMap([s,...JSON.parse(o??"[]")]):null},vd=e=>{const{components:t,models:i,expressID:n}=e,s=e.selectHighlighterName??"select",o=e.hoverHighlighterName??"hover";ft||(ft=document.createElement("bim-table"),ft.hiddenColumns=["modelID","expressID","relations"],ft.columns=["Entity","Name"],ft.headersHidden=!0,ft.addEventListener("cellcreated",({detail:l})=>{const{cell:a}=l;a.column==="Entity"&&!("Name"in a.rowData)&&(a.style.gridColumn="1 / -1")})),ft.addEventListener("rowcreated",l=>{l.stopImmediatePropagation();const{row:a}=l.detail,u=t.get(wa),d=gd(t,a.data);d&&Object.keys(d).length!==0&&(a.onmouseover=()=>{o&&(a.style.backgroundColor="var(--bim-ui_bg-contrast-20)",u.highlightByID(o,d,!0,!1,u.selection[s]??{}))},a.onmouseout=()=>{a.style.backgroundColor="",u.clear(o)},a.onclick=()=>{s&&u.highlightByID(s,d,!0,!0)})});const r=e.inverseAttributes??["IsDecomposedBy","ContainsElements"];return bd(t,i,r,n).then(l=>ft.data=l),m`${ft}`},yd=(e,t=!0)=>{const i=z.create(vd,e);if(t){const[,n]=i,{components:s}=e,o=s.get(qt),r=s.get(mt),l=()=>n({models:o.groups.values()});r.onRelationsIndexed.add(l),o.onFragmentsDisposed.add(l)}return i},_d=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:yd},Symbol.toStringTag,{value:"Module"})),Oe=(e,t)=>[...e.get(On).list.values()].find(i=>i.world===t),wd=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target;e.color=new fe(n.color)}} color=${t}></bim-color-input>
  `,$d=(e,t)=>{const{postproduction:i}=e,n=i.n8ao.configuration;return m`
    <bim-color-input @input=${s=>{const o=s.target;n.color=new fe(o.color)}} color=${t}></bim-color-input>
  `},xd=(e,t)=>{const{color:i,opacity:n}=JSON.parse(t),{postproduction:s}=e,{customEffects:o}=s;return m`
    <bim-color-input @input=${r=>{const{color:l,opacity:a}=r.target;o.lineColor=new fe(l).getHex(),a&&(o.opacity=a/100)}} color=${i} opacity=${n*100}></bim-color-input>
  `},Cd=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target,s=new fe(n.color);e.material.uniforms.uColor.value=s}} color=${t}></bim-color-input>
  `,Ad=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const s=n.target;i.setPasses({ao:s.checked})}} .checked=${t}></bim-checkbox>
  `},Ed=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const s=n.target;i.setPasses({gamma:s.checked})}} .checked=${t}></bim-checkbox>
  `},Sd=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const s=n.target;i.setPasses({custom:s.checked})}} .checked=${t}></bim-checkbox>
  `},$t=(e,t,i,n=()=>{})=>m`
    <bim-checkbox .checked="${i}" @change="${s=>{const o=s.target.checked;e[t]=o,n(o)}}"></bim-checkbox> 
  `,N=(e,t,i,n)=>{const s={slider:!1,min:0,max:100,step:1,prefix:null,suffix:null,onInputSet:()=>{},...n},{slider:o,min:r,max:l,step:a,suffix:u,prefix:d,onInputSet:c}=s;return m`
    <bim-number-input
      .pref=${d}
      .suffix=${u}
      .slider=${o} 
      min=${r} 
      value="${i}" 
      max=${l} 
      step=${a} 
      @change="${h=>{const p=h.target.value;e[t]=p,c(p)}}"
    ></bim-number-input> 
  `},kd=e=>{const{components:t}=e,i=t.get(Xe);return m`
    <bim-table @cellcreated=${({detail:n})=>{const s=n.cell.parentNode;if(!s)return;const o=s.querySelector("bim-table-cell[column='Name']"),r=s.querySelector("bim-table-cell[column='Value']");o&&!r&&(o.style.gridColumn="1 / -1")}} ${G(async n=>{var s,o,r,l,a;if(!n)return;const u=n;u.preserveStructureOnFilter=!0,u.dataTransform={Value:(c,h)=>{const p=h.World,b=i.list.get(p);if(!b)return c;const{scene:w,camera:v,renderer:f}=b,y=h.Name;if(y==="Grid"&&h.IsGridConfig&&typeof c=="boolean"){const _=Oe(t,b);return _?$t(_,"visible",c):c}if(y==="Color"&&h.IsGridConfig&&typeof c=="string"){const _=Oe(t,b);return _?Cd(_,c):c}if(y==="Distance"&&h.IsGridConfig&&typeof c=="number"){const _=Oe(t,b);return _?N(_.material.uniforms.uDistance,"value",c,{slider:!0,min:300,max:1e3}):c}if(y==="Size"&&h.IsGridConfig&&typeof c=="string"){const _=Oe(t,b);if(!_)return c;const{x:$,y:A}=JSON.parse(c),C=N(_.material.uniforms.uSize1,"value",$,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),O=N(_.material.uniforms.uSize2,"value",A,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${C}${O}</div>
          `}if(y==="Near Frustum"&&v.three instanceof pi&&typeof c=="number"){const _=v.three;return N(v.three,"near",c,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Far Frustum"&&v.three instanceof pi&&typeof c=="number"){const _=v.three;return N(v.three,"far",c,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Field of View"&&v.three instanceof pi&&typeof c=="number"){const _=v.three;return N(v.three,"fov",c,{slider:!0,min:10,max:120,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Invert Drag"&&v.hasCameraControls()&&typeof c=="boolean")return $t(v.controls,"dollyDragInverted",c);if(y==="Dolly Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"dollySpeed",c,{slider:!0,min:.5,max:3,step:.1});if(y==="Truck Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"truckSpeed",c,{slider:!0,min:.5,max:6,step:.1});if(y==="Smooth Time"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"smoothTime",c,{slider:!0,min:.01,max:2,step:.01});if(y==="Intensity"&&typeof c=="number"){if(h.Light&&typeof h.Light=="string"){const _=w.three.children.find($=>$.uuid===h.Light);return _&&_ instanceof Se?N(_,"intensity",c,{slider:!0,min:0,max:10,step:.1}):c}if(h.IsAOConfig&&f instanceof M)return N(f.postproduction.n8ao.configuration,"intensity",c,{slider:!0,max:16,step:.1})}if(y==="Color"&&typeof c=="string"){const _=h.Light,$=w.three.children.find(A=>A.uuid===_);if($&&$ instanceof Se)return wd($,c);if(h.IsAOConfig&&f instanceof M)return $d(f,c)}if(y==="Ambient Oclussion"&&typeof c=="boolean"&&h.IsAOConfig&&f instanceof M)return Ad(f,c);if(y==="Half Resolution"&&h.IsAOConfig&&f instanceof M&&typeof c=="boolean")return $t(f.postproduction.n8ao.configuration,"halfRes",c);if(y==="Screen Space Radius"&&h.IsAOConfig&&f instanceof M&&typeof c=="boolean")return $t(f.postproduction.n8ao.configuration,"screenSpaceRadius",c);if(y==="Radius"&&h.IsAOConfig&&f instanceof M&&typeof c=="number")return N(f.postproduction.n8ao.configuration,"aoRadius",c,{slider:!0,max:2,step:.1});if(y==="Denoise Samples"&&h.IsAOConfig&&f instanceof M&&typeof c=="number")return N(f.postproduction.n8ao.configuration,"denoiseSamples",c,{slider:!0,min:1,max:16});if(y==="Samples"&&h.IsAOConfig&&f instanceof M&&typeof c=="number")return N(f.postproduction.n8ao.configuration,"aoSamples",c,{slider:!0,min:1,max:16});if(y==="Denoise Radius"&&h.IsAOConfig&&f instanceof M&&typeof c=="number")return N(f.postproduction.n8ao.configuration,"denoiseRadius",c,{slider:!0,min:0,max:16,step:.1});if(y==="Distance Falloff"&&h.IsAOConfig&&f instanceof M&&typeof c=="number")return N(f.postproduction.n8ao.configuration,"distanceFalloff",c,{slider:!0,min:0,max:4,step:.1});if(y==="Directional Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find($=>$.uuid===h.Light);return _&&_ instanceof Se?$t(_,"visible",c):c}if(y==="Ambient Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find($=>$.uuid===h.Light);return _&&_ instanceof Se?$t(_,"visible",c):c}if(y==="Position"&&h.Light&&typeof h.Light=="string"&&typeof c=="string"){const _=w.three.children.find(E=>E.uuid===h.Light);if(!(_&&_ instanceof Se))return c;const{x:$,y:A,z:C}=JSON.parse(c),O=N(_.position,"x",$,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),P=N(_.position,"y",A,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),S=N(_.position,"z",C,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${O}${P}${S}</div>
          `}return y==="Custom Effects"&&h.IsCEConfig&&f instanceof M&&typeof c=="boolean"?Sd(f,c):y==="Color"&&h.IsOutlineConfig&&f instanceof M&&typeof c=="string"?xd(f,c):y==="Tolerance"&&h.IsOutlineConfig&&f instanceof M&&typeof c=="number"?N(f.postproduction.customEffects,"tolerance",c,{slider:!0,min:0,max:6,step:.01}):y==="Outline"&&h.IsOutlineConfig&&f instanceof M&&typeof c=="boolean"?$t(f.postproduction.customEffects,"outlineEnabled",c):y==="Gloss"&&h.IsGlossConfig&&f instanceof M&&typeof c=="boolean"?$t(f.postproduction.customEffects,"glossEnabled",c):y==="Min"&&h.IsGlossConfig&&f instanceof M&&typeof c=="number"?N(f.postproduction.customEffects,"minGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Max"&&h.IsGlossConfig&&f instanceof M&&typeof c=="number"?N(f.postproduction.customEffects,"maxGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Exponent"&&h.IsGlossConfig&&f instanceof M&&typeof c=="number"?N(f.postproduction.customEffects,"glossExponent",c,{slider:!0,min:0,max:5,step:.01}):y==="Gamma Correction"&&h.IsGammaConfig&&f instanceof M&&typeof c=="boolean"?Ed(f,c):c}};const d=[];for(const[,c]of i.list){const{scene:h,camera:p,renderer:b}=c,w=Oe(t,c),v={data:{Name:c instanceof va&&c.name||c.uuid},children:[]};if(h){const f={data:{Name:"Scene"}};if(w){const $=`#${w.material.uniforms.uColor.value.getHexString()}`,A=JSON.stringify({x:w.material.uniforms.uSize1.value,y:w.material.uniforms.uSize2.value}),C={data:{Name:"Grid",Value:w.three.visible,World:c.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",Value:$,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Size",Value:A,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:w.material.uniforms.uDistance.value,World:c.uuid,IsGridConfig:!0}}]};f.children||(f.children=[]),f.children.push(C)}const y=h.three.children.filter($=>$ instanceof ya);for(const $ of y){const A={data:{Name:"Directional Light",Value:$.visible,World:c.uuid,Light:$.uuid},children:[{data:{Name:"Position",Value:JSON.stringify($.position),World:c.uuid,Light:$.uuid}},{data:{Name:"Intensity",Value:$.intensity,World:c.uuid,Light:$.uuid}},{data:{Name:"Color",Value:`#${$.color.getHexString()}`,World:c.uuid,Light:$.uuid}}]};f.children||(f.children=[]),f.children.push(A)}const _=h.three.children.filter($=>$ instanceof _a);for(const $ of _){const A={data:{Name:"Ambient Light",Value:$.visible,World:c.uuid,Light:$.uuid},children:[{data:{Name:"Intensity",Value:$.intensity,World:c.uuid,Light:$.uuid}},{data:{Name:"Color",Value:`#${$.color.getHexString()}`,World:c.uuid,Light:$.uuid}}]};f.children||(f.children=[]),f.children.push(A)}f.children&&((s=f.children)==null?void 0:s.length)>0&&((o=v.children)==null||o.push(f))}if(p.three instanceof pi){const f={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:p.three.near,World:c.uuid}},{data:{Name:"Far Frustum",Value:p.three.far,World:c.uuid}},{data:{Name:"Field of View",Value:p.three.fov,World:c.uuid}}]};if(p.hasCameraControls()){const{controls:y}=p,_={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const $ in _){const A=y[$];A!=null&&((r=f.children)==null||r.push({data:{Name:_[$],Value:A,World:c.uuid}}))}}(l=v.children)==null||l.push(f)}if(b instanceof M){const{postproduction:f}=b,y=f.n8ao.configuration,_={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:f.settings.gamma??!1,World:c.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:f.settings.ao??!1,World:c.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:y.aoSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${y.color.getHexString()}`,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:y.halfRes,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:y.screenSpaceRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:y.aoRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:y.intensity,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:y.distanceFalloff,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:y.denoiseSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:y.denoiseRadius,World:c.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:f.settings.custom??!1,World:c.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:f.customEffects.glossEnabled,World:c.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:f.customEffects.minGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:f.customEffects.maxGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:f.customEffects.glossExponent,World:c.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:f.customEffects.outlineEnabled,World:c.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const $=new fe(f.customEffects.lineColor),A=f.customEffects.opacity;return JSON.stringify({color:`#${$.getHexString()}`,opacity:A})},World:c.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:f.customEffects.tolerance,World:c.uuid,IsOutlineConfig:!0}}]}]}]};(a=v.children)==null||a.push(_)}d.push(v)}u.columns=[{name:"Name",width:"11rem"}],u.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],u.data=d})} headers-hidden expanded>
     <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No worlds to configure
      </bim-label>
    </bim-table>
  `},Td=(e,t=!0)=>{const i=z.create(kd,e);if(t){const[,n]=i,{components:s}=e;s.get(Xe).list.onItemDeleted.add(()=>n())}return i},Od=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:Td},Symbol.toStringTag,{value:"Module"})),ee=(e,t)=>{const i=t[e],n=(i==null?void 0:i.name)??e,s=n.trim().split(/\s+/);let o,r;return s[0]&&s[0][0]&&(o=s[0][0].toUpperCase(),s[0][1]&&(r=s[0][1].toUpperCase())),s[1]&&s[1][0]&&(r=s[1][0].toUpperCase()),m`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(i!=null&&i.picture)&&(o||r)?m`
        <bim-label
          style=${Ht({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${o}${r}</bim-label>
        `:null}
      <bim-label .img=${i==null?void 0:i.picture}>${n}</bim-label>
    </div>
  `},J={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},ie={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=globalThis,Pi=Ni.trustedTypes,Us=Pi?Pi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Gr="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,qr="?"+Ct,Id=`<${qr}>`,Gt=document,Ge=()=>Gt.createComment(""),qe=e=>e===null||typeof e!="object"&&typeof e!="function",Gn=Array.isArray,Nd=e=>Gn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",un=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vs=/-->/g,Ws=/>/g,jt=RegExp(`>|${un}(?:([^\\s"'>=/]+)(${un}*=${un}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gs=/'/g,qs=/"/g,Yr=/^(?:script|style|textarea|title)$/i,Pd=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),qn=Pd(1),he=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Ys=new WeakMap,Dt=Gt.createTreeWalker(Gt,129);function Xr(e,t){if(!Gn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Us!==void 0?Us.createHTML(t):t}const Md=(e,t)=>{const i=e.length-1,n=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=Ie;for(let l=0;l<i;l++){const a=e[l];let u,d,c=-1,h=0;for(;h<a.length&&(r.lastIndex=h,d=r.exec(a),d!==null);)h=r.lastIndex,r===Ie?d[1]==="!--"?r=Vs:d[1]!==void 0?r=Ws:d[2]!==void 0?(Yr.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=jt):d[3]!==void 0&&(r=jt):r===jt?d[0]===">"?(r=s??Ie,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,u=d[1],r=d[3]===void 0?jt:d[3]==='"'?qs:Gs):r===qs||r===Gs?r=jt:r===Vs||r===Ws?r=Ie:(r=jt,s=void 0);const p=r===jt&&e[l+1].startsWith("/>")?" ":"";o+=r===Ie?a+Id:c>=0?(n.push(u),a.slice(0,c)+Gr+a.slice(c)+Ct+p):a+Ct+(c===-2?l:p)}return[Xr(e,o+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class Ye{constructor({strings:t,_$litType$:i},n){let s;this.parts=[];let o=0,r=0;const l=t.length-1,a=this.parts,[u,d]=Md(t,i);if(this.el=Ye.createElement(u,n),Dt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=Dt.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Gr)){const h=d[r++],p=s.getAttribute(c).split(Ct),b=/([.?@])?(.*)/.exec(h);a.push({type:1,index:o,name:b[2],strings:p,ctor:b[1]==="."?Rd:b[1]==="?"?jd:b[1]==="@"?zd:Ki}),s.removeAttribute(c)}else c.startsWith(Ct)&&(a.push({type:6,index:o}),s.removeAttribute(c));if(Yr.test(s.tagName)){const c=s.textContent.split(Ct),h=c.length-1;if(h>0){s.textContent=Pi?Pi.emptyScript:"";for(let p=0;p<h;p++)s.append(c[p],Ge()),Dt.nextNode(),a.push({type:2,index:++o});s.append(c[h],Ge())}}}else if(s.nodeType===8)if(s.data===qr)a.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf(Ct,c+1))!==-1;)a.push({type:7,index:o}),c+=Ct.length-1}o++}}static createElement(t,i){const n=Gt.createElement("template");return n.innerHTML=t,n}}function pe(e,t,i=e,n){var s,o;if(t===he)return t;let r=n!==void 0?(s=i._$Co)==null?void 0:s[n]:i._$Cl;const l=qe(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((o=r==null?void 0:r._$AO)==null||o.call(r,!1),l===void 0?r=void 0:(r=new l(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=pe(e,r._$AS(e,t.values),r,n)),t}class Ld{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,s=((t==null?void 0:t.creationScope)??Gt).importNode(i,!0);Dt.currentNode=s;let o=Dt.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let u;a.type===2?u=new ci(o,o.nextSibling,this,t):a.type===1?u=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(u=new Dd(o,this,t)),this._$AV.push(u),a=n[++l]}r!==(a==null?void 0:a.index)&&(o=Dt.nextNode(),r++)}return Dt.currentNode=Gt,s}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ci{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,s){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=pe(this,t,i),qe(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==he&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nd(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&qe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Gt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ye.createElement(Xr(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(n);else{const r=new Ld(o,this),l=r.u(this.options);r.p(n),this.T(l),this._$AH=r}}_$AC(t){let i=Ys.get(t.strings);return i===void 0&&Ys.set(t.strings,i=new Ye(t)),i}k(t){Gn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,s=0;for(const o of t)s===i.length?i.push(n=new ci(this.O(Ge()),this.O(Ge()),this,this.options)):n=i[s],n._$AI(o),s++;s<i.length&&(this._$AR(n&&n._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Ki{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(t,i=this,n,s){const o=this.strings;let r=!1;if(o===void 0)t=pe(this,t,i,0),r=!qe(t)||t!==this._$AH&&t!==he,r&&(this._$AH=t);else{const l=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=pe(this,l[n+a],i,a),u===he&&(u=this._$AH[a]),r||(r=!qe(u)||u!==this._$AH[a]),u===j?t=j:t!==j&&(t+=(u??"")+o[a+1]),this._$AH[a]=u}r&&!s&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rd extends Ki{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class jd extends Ki{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class zd extends Ki{constructor(t,i,n,s,o){super(t,i,n,s,o),this.type=5}_$AI(t,i=this){if((t=pe(this,t,i,0)??j)===he)return;const n=this._$AH,s=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==j&&(n===j||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Dd{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){pe(this,t)}}const Xs=Ni.litHtmlPolyfillSupport;Xs==null||Xs(Ye,ci),(Ni.litHtmlVersions??(Ni.litHtmlVersions=[])).push("3.2.1");const Fd=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let s=n._$litPart$;if(s===void 0){const o=(i==null?void 0:i.renderBefore)??null;n._$litPart$=s=new ci(t.insertBefore(Ge(),o),o,void 0,i??{})}return s._$AI(e),s};/**
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
 */const Re=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const s of n)(i=s._$AO)==null||i.call(s,t,!1),Re(s,t);return!0},Mi=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Jr=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),qd(t)}};function Wd(e){this._$AN!==void 0?(Mi(this),this._$AM=e,Jr(this)):this._$AM=e}function Gd(e,t=!1,i=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(n))for(let o=i;o<n.length;o++)Re(n[o],!1),Mi(n[o]);else n!=null&&(Re(n,!1),Mi(n));else Re(this,e)}const qd=e=>{e.type==Bd.CHILD&&(e._$AP??(e._$AP=Gd),e._$AQ??(e._$AQ=Wd))};let Yd=class extends Vd{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Jr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(Re(this,e),Mi(this))}setValue(e){if(Hd(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sn=()=>new Xd;let Xd=class{};const dn=new WeakMap,Jd=Ud(class extends Yd{render(e){return j}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),j}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=dn.get(t);i===void 0&&(i=new WeakMap,dn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=dn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qd={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},Qr=e=>{const{components:t,topic:i,value:n,onCancel:s,onSubmit:o,styles:r}=e,l=o??(()=>{}),a=t.get(Je),u=(n==null?void 0:n.title)??(i==null?void 0:i.title)??_t.default.title,d=(n==null?void 0:n.status)??(i==null?void 0:i.status)??_t.default.status,c=(n==null?void 0:n.type)??(i==null?void 0:i.type)??_t.default.type,h=(n==null?void 0:n.priority)??(i==null?void 0:i.priority)??_t.default.priority,p=(n==null?void 0:n.assignedTo)??(i==null?void 0:i.assignedTo)??_t.default.assignedTo,b=(n==null?void 0:n.labels)??(i==null?void 0:i.labels)??_t.default.labels,w=(n==null?void 0:n.stage)??(i==null?void 0:i.stage)??_t.default.stage,v=(n==null?void 0:n.description)??(i==null?void 0:i.description)??_t.default.description,f=i!=null&&i.dueDate?i.dueDate.toISOString().split("T")[0]:null,y=new Set([...a.config.statuses]);d&&y.add(d);const _=new Set([...a.config.types]);c&&_.add(c);const $=new Set([...a.config.priorities]);h&&$.add(h);const A=new Set([...a.config.users]);p&&A.add(p);const C=new Set([...a.config.labels]);if(b)for(const x of b)C.add(x);const O=new Set([...a.config.stages]);w&&O.add(w);const P=Sn(),S=async()=>{const{value:x}=P;if(!x)return;const R=We(x,Qd);if(i)i.set(R),await l(i);else{const V=a.create(R);await l(V)}},E=Sn(),B=x=>{const{value:R}=E;if(!R)return;const V=x.target;R.disabled=V.value.trim()===""},q=`btn-${Z.newRandomId()}`,W=`btn-${Z.newRandomId()}`;return m`
    <div ${G(P)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${B} vertical label="Title" name="title" .value=${u}></bim-text-input>
        ${i?m`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...y].map(x=>m`<bim-option label=${x} .checked=${d===x}></bim-option>`)}
            </bim-dropdown>`:m``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[..._].map(x=>m`<bim-option label=${x} .checked=${c===x}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...$].map(x=>m`<bim-option label=${x} .checked=${h===x}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...C].map(x=>m`<bim-option label=${x} .checked=${b?[...b].includes(x):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...A].map(x=>{const R=r!=null&&r.users?r.users[x]:null,V=R?R.name:x,tt=R==null?void 0:R.picture;return m`<bim-option label=${V} value=${x} .img=${tt} .checked=${p===x}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${f}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...O].map(x=>m`<bim-option label=${x} .checked=${w===x}></bim-option>`)}
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
        <bim-button id=${W} style="flex: 0" @click=${s} label="Cancel"></bim-button>
        <bim-button id=${q} style="flex: 0" @click=${S} ${G(E)} label=${i?"Update Topic":"Add Topic"} icon=${i?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},Zd=e=>{const{components:t,dataStyles:i,onTopicEnter:n}=e,s=t.get(Je),o=e.topics??s.list.values();return m`
    <bim-table no-indentation ${G(r=>{if(!r)return;const l=r;l.hiddenColumns.length===0&&(l.hiddenColumns=["Guid"]),l.columns=["Title"],l.dataTransform={Title:(a,u)=>{const{Guid:d}=u;if(typeof d!="string")return a;const c=s.list.get(d);if(!c)return a;const h=`btn-${Z.newRandomId()}`;return m`
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
        `},Priority:a=>{if(typeof a!="string")return a;const u=((i==null?void 0:i.priorities)??J.priorities)[a];return m`
          <bim-label
            .icon=${u==null?void 0:u.icon}
            style=${Ht({...ie,...u==null?void 0:u.style})}
          >${a}
          </bim-label>
        `},Status:a=>{if(typeof a!="string")return a;const u=((i==null?void 0:i.statuses)??J.statuses)[a];return m`
          <bim-label
            .icon=${u==null?void 0:u.icon}
            style=${Ht({...ie,...u==null?void 0:u.style})}
          >${a}
          </bim-label>
        `},Type:a=>{if(typeof a!="string")return a;const u=((i==null?void 0:i.types)??J.types)[a];return m`
          <bim-label
            .icon=${u==null?void 0:u.icon}
            style=${Ht({...ie,...u==null?void 0:u.style})}
          >${a}
          </bim-label>
        `},Author:a=>typeof a!="string"?a:ee(a,(i==null?void 0:i.users)??J.users),Assignee:a=>typeof a!="string"?a:ee(a,(i==null?void 0:i.users)??J.users)},l.data=[...o].map(a=>{var u;return{data:{Guid:a.guid,Title:a.title,Status:a.status,Description:a.description??"",Author:a.creationAuthor,Assignee:a.assignedTo??"",Date:a.creationDate.toDateString(),DueDate:((u=a.dueDate)==null?void 0:u.toDateString())??"",Type:a.type,Priority:a.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>
  `},Zr=(e,t=!0)=>{const i=z.create(Zd,e);if(t){const{components:n,topics:s}=e,[,o]=i,r=n.get(Je);if(r.list.onItemUpdated.add(()=>o()),r.list.onItemDeleted.add(()=>o()),s)for(const l of s)l.relatedTopics.onItemAdded.add(()=>o()),l.relatedTopics.onItemDeleted.add(()=>o()),l.relatedTopics.onCleared.add(()=>o());else r.list.onItemSet.add(()=>o())}return i},Kd=Object.freeze(Object.defineProperty({__proto__:null,topicsList:Zr},Symbol.toStringTag,{value:"Module"})),th=e=>{const{topic:t,styles:i,viewpoint:n}=e,s={delete:!0,...e.actions};return m`
    <bim-table no-indentation ${G(o=>{if(!o)return;const r=o;r.headersHidden=!0,r.hiddenColumns=["guid","author"],r.dataTransform={Comment:(a,u)=>{const{guid:d}=u;if(typeof d!="string")return a;const c=t.comments.get(d);if(!c)return a;const h=()=>{t.comments.delete(d)},p=`btn-${Z.newRandomId()}`;return m`
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
                ${s!=null&&s.delete?m`<bim-button @click=${h} id=${p} icon="majesticons:delete-bin"></bim-button>`:null}
              </div>
            </div>
            <bim-label style="margin-left: 1.7rem; white-space: normal">${c.comment}</bim-label>
          </div>
        `}};let l=t.comments.values();n&&(l=[...t.comments.values()].filter(a=>a.viewpoint===n)),r.data=[...l].map(a=>({data:{guid:a.guid,Comment:a.comment,author:(()=>{const u=i;if(!u)return a.author;const d=u[a.author];return(d==null?void 0:d.name)??a.author})()}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">This topic has no comments</bim-label>
    </bim-table>
  `},Kr=(e,t=!0)=>{const i=z.create(th,e);if(t){const{topic:n}=e,[s,o]=i;n.comments.onItemSet.add(()=>o()),n.comments.onItemUpdated.add(()=>o()),n.comments.onItemDeleted.add(()=>o()),n.comments.onCleared.add(()=>o())}return i},eh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Kr},Symbol.toStringTag,{value:"Module"})),ih=e=>{var t;const{components:i,topic:n}=e,s={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!n,...e.actions},o=i.get(Di),r=((t=e.topic)==null?void 0:t.viewpoints)??o.list.keys(),l=[];for(const a of r){const u=o.list.get(a);u&&l.push(u)}return m`
    <bim-table no-indentation ${G(a=>{if(!a)return;const u=a;u.addEventListener("cellcreated",({detail:d})=>{const{cell:c}=d;c.style.padding="0.25rem"}),u.headersHidden=!0,u.hiddenColumns=["Guid"],u.columns=["Title",{name:"Actions",width:"auto"}],u.dataTransform={Actions:(d,c)=>{const{Guid:h}=c;if(!(h&&typeof h=="string"))return h||"";const p=o.list.get(h);return p?m`
          <bim-button icon="ph:eye-fill" @click=${()=>p.go()}></bim-button>
          ${Object.values(s).includes(!0)?m`
                <bim-button icon="prime:ellipsis-v">
                  <bim-context-menu>
                    ${s.selectComponents?m`<bim-button label="Select Components" @click=${()=>console.log(p.selection)}></bim-button> `:null}
                    ${s.colorizeComponent?m`<bim-button label="Colorize Components" @click=${()=>p.applyColors()}></bim-button> `:null}
                    ${s.resetColors?m`<bim-button label="Reset Colors" @click=${()=>p.resetColors()}></bim-button> `:null}
                    ${s.updateCamera?m`<bim-button label="Update Camera" @click=${()=>p.updateCamera()}></bim-button> `:null}
                    ${s.unlink?m`<bim-button .disabled=${!n} label="Unlink" @click=${()=>n==null?void 0:n.viewpoints.delete(p.guid)}></bim-button> `:null}
                    ${s.delete?m`<bim-button label="Delete" @click=${()=>o.list.delete(p.guid)}></bim-button>`:null}
                  </bim-context-menu>
                </bim-button>
              `:null}
        `:h}},u.data=l.map((d,c)=>({data:{Guid:d.guid,Title:d.title??`Viewpoint ${e.topic?c+1:""}`,Actions:""}}))})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No viewpoints to show</bim-label>
    </bim-table>
  `},ta=(e,t=!0)=>{const i=z.create(ih,e),{components:n,topic:s}=e;if(t){const[,o]=i,r=n.get(Di);r.list.onItemUpdated.add(()=>o()),r.list.onItemDeleted.add(()=>o()),r.list.onCleared.add(()=>o()),s?(s.viewpoints.onItemAdded.add(()=>o()),s.viewpoints.onItemDeleted.add(()=>o()),s.viewpoints.onCleared.add(()=>o())):r.list.onItemSet.add(()=>o())}return i},nh=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ta},Symbol.toStringTag,{value:"Module"})),sh={...qu,...Ju,...Ku,...fd,..._d,...Od,...Kd,...eh,...nh},oh=e=>m`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${Qr(e)}
    </bim-panel-section>
  `,rh=e=>z.create(oh,e),ah=Object.freeze(Object.defineProperty({__proto__:null,topic:rh},Symbol.toStringTag,{value:"Module"})),lh={...ah},ch=(e,t)=>{const{components:i,editing:n,topic:s,styles:o}=e,r={update:!0,...e.actions},l=(o==null?void 0:o.priorities)??J.priorities,a=(o==null?void 0:o.statuses)??J.statuses,u=(o==null?void 0:o.types)??J.types;let d;s!=null&&s.priority&&(d=l[s.priority]);let c;s!=null&&s.type&&(c=u[s.type]);let h;s!=null&&s.type&&(h=a[s.status]);let p,b;return n?p=Qr({components:i,topic:s,styles:o,onSubmit:()=>{t({editing:!1})},onCancel:()=>{t({editing:!1})}}):b=m`
      <div>
        <bim-label>Title</bim-label>
        <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${s.title}</bim-label>
      </div>

      ${s.description?m`
            <div>
              <bim-label>Description</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100); white-space: normal">${s.description}</bim-label>
            </div>
          `:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Status</bim-label>
        <bim-label .icon=${h==null?void 0:h.icon} style=${Ht({...ie,...h==null?void 0:h.style})}
        >${s.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${c==null?void 0:c.icon} style=${Ht({...ie,...c==null?void 0:c.style})}
        >${s.type}
        </bim-label>
      </div>

      ${s.priority?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${d==null?void 0:d.icon} style=${Ht({...ie,...d==null?void 0:d.style})}
              >${s.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${ee(s.creationAuthor,(o==null?void 0:o.users)??J.users)}
      </div>

      ${s.assignedTo?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${ee(s.assignedTo,(o==null?void 0:o.users)??J.users)}
          </div>`:null}

      ${s.dueDate?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${s.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${s.modifiedAuthor?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${ee(s.modifiedAuthor,(o==null?void 0:o.users)??J.users)}
          </div>`:null}

      ${s.modifiedDate?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Modified Date</bim-label>
              <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${s.modifiedDate.toDateString()}</bim-label>
            </div>`:null}

      ${s.labels.size!==0?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Labels</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${[...s.labels].join(", ")}</bim-label>
          </div>`:null}

      ${r.update?m`
              <bim-button @click=${()=>t({editing:!0})} label="Update Information" icon="tabler:refresh"></bim-button> 
            `:null}
    `,m`
    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${n?p:b}
    </div>
  `},uh=e=>z.create(ch,e),dh=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:uh},Symbol.toStringTag,{value:"Module"})),hh=(e,t)=>{const{showInput:i,topic:n,styles:s}=e,o={add:!0,delete:!0,...e.actions},r=`input-${Z.newRandomId()}`,l=`btn-${Z.newRandomId()}`,a=`btn-${Z.newRandomId()}`,u=()=>document.getElementById(l),d=()=>document.getElementById(r),c=()=>{const _=d();return _?_.value.trim().length>0:!1},h=()=>{t({showInput:!0})},p=()=>{const _=d(),$=c();_&&$&&(n.createComment(_.value),t({showInput:!1}))},b=()=>{t({showInput:!1})},w=()=>{const _=u();if(_){if(!d()){_.disabled=!0;return}_.disabled=!c()}},v=m`
    ${o.add?m`<bim-button @click=${h} label="Add Comment" icon="majesticons:comment-line"></bim-button>`:null}
  `,f=m`
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

      <bim-button style="flex: 0" id=${a} @click=${b} label="Cancel"></bim-button>
      <bim-button style="flex: 0" id=${l} @click=${p} label="Accept" icon="material-symbols:check" disabled></bim-button>
    </div>
  `,[y]=Kr({topic:n,actions:o,styles:s??J.users});return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${y}
      ${i?f:v}
    </div>
  `},ph=e=>z.create(hh,e),mh=Object.freeze(Object.defineProperty({__proto__:null,topicComments:ph},Symbol.toStringTag,{value:"Module"})),fh=(e,t)=>{const{components:i,topic:n,linking:s}=e,o=i.get(Je),r={link:!0,...e.actions},[l,a]=Zr({components:i,topics:[...n.relatedTopics].map(h=>o.list.get(h)).map(h=>h)});l.headersHidden=!0,l.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const u=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${h=>{const p=h.target;p instanceof rt&&(l.queryString=p.value)}}></bim-text-input> 
    `;let d,c;if(s){l.selectableRows=!0,a({topics:void 0});const h=l.data.filter(f=>{const{Guid:y}=f.data;return typeof y!="string"?!1:n.relatedTopics.has(y)}).map(f=>f.data);l.selection=new Set(h);const p=()=>{const f=[...l.selection].map(({Guid:y})=>typeof y!="string"?null:o.list.has(y)?y:null).map(y=>y);n.relatedTopics.clear(),n.relatedTopics.add(...f),t({linking:!1})},b=()=>{t({linking:!1})},w=`btn-${Z.newRandomId()}`,v=`btn-${Z.newRandomId()}`;d=m`
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
        ${u()}
        <div style="display: flex; justify-content: right; gap: 0.25rem">
          <bim-button id=${v} @click=${b} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${w} @click=${p} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{l.selectableRows=!1;const h=()=>{t({linking:!0})};c=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${u()}
        ${r.link?m`<bim-button style="flex: 0" @click=${h} icon="tabler:link"></bim-button>`:null}
      </div> 
    `}return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      ${c}
      ${d}
      ${l}
    </div> 
  `},bh=e=>z.create(fh,e),gh=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:bh},Symbol.toStringTag,{value:"Module"})),vh=(e,t)=>{const{components:i,topic:n,world:s,linking:o}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},l=i.get(Di),[a,u]=ta({components:i,topic:n,actions:r}),d=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${p=>{const b=p.target;b instanceof rt&&(a.queryString=b.value)}}></bim-text-input> 
    `;let c,h;if(o){a.selectableRows=!0,u({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const p=a.data.filter(y=>{const{Guid:_}=y.data;return typeof _!="string"?!1:n.viewpoints.has(_)}).map(y=>y.data);a.selection=new Set(p);const b=()=>{const y=[...a.selection].map(({Guid:_})=>typeof _!="string"?null:l.list.has(_)?_:null).map(_=>_);n.viewpoints.clear(),n.viewpoints.add(...y),t({linking:!1})},w=()=>{t({linking:!1})},v=`btn-${Z.newRandomId()}`,f=`btn-${Z.newRandomId()}`;c=m`
      <div style="display: flex; gap: 0.25rem">
        <style>
          #${v}:hover {
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
          <bim-button id=${f} @click=${w} style="flex: 0" label="Cancel" icon="material-symbols:close"></bim-button>
          <bim-button id=${v} @click=${b} style="flex: 0" label="Accept" icon="material-symbols:check"></bim-button>
        </div>
      </div> 
    `}else{a.selectableRows=!1,u({topic:n,actions:r});const p=()=>{if(!(n&&s&&r.add&&!o))return;const f=l.create(s);n.viewpoints.add(f.guid)},b=()=>{t({linking:!0})},w=m`<bim-button style="flex: 0" @click=${p} .disabled=${!s} icon="mi:add"></bim-button>`,v=m`<bim-button style="flex: 0" @click=${b} icon="tabler:link"></bim-button>`;h=m`
      <div style="display: flex; justify-content: right; gap: 0.25rem">
        ${d()}
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
  `},yh=e=>z.create(vh,e),_h=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:yh},Symbol.toStringTag,{value:"Module"})),gi={...dh,...mh,...gh,..._h};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=globalThis,Yn=wi.ShadowRoot&&(wi.ShadyCSS===void 0||wi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xn=Symbol(),Js=new WeakMap;let ea=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Xn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Yn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Js.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Js.set(t,e))}return e}toString(){return this.cssText}};const wh=e=>new ea(typeof e=="string"?e:e+"",void 0,Xn),Jn=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,s,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1],e[0]);return new ea(i,e,Xn)},$h=(e,t)=>{if(Yn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),s=wi.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=i.cssText,e.appendChild(n)}},Qs=Yn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return wh(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:xh,defineProperty:Ch,getOwnPropertyDescriptor:Ah,getOwnPropertyNames:Eh,getOwnPropertySymbols:Sh,getPrototypeOf:kh}=Object,me=globalThis,Zs=me.trustedTypes,Th=Zs?Zs.emptyScript:"",Ks=me.reactiveElementPolyfillSupport,je=(e,t)=>e,Li={toAttribute(e,t){switch(t){case Boolean:e=e?Th:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Qn=(e,t)=>!xh(e,t),to={attribute:!0,type:String,converter:Li,reflect:!1,hasChanged:Qn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);class Kt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=to){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,i);s!==void 0&&Ch(this.prototype,t,s)}}static getPropertyDescriptor(t,i,n){const{get:s,set:o}=Ah(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return s==null?void 0:s.call(this)},set(r){const l=s==null?void 0:s.call(this);o.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??to}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const t=kh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const i=this.properties,n=[...Eh(i),...Sh(i)];for(const s of n)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,s]of i)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const s=this._$Eu(i,n);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const s of n)i.unshift(Qs(s))}else t!==void 0&&i.push(Qs(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $h(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const r=(((n=s.converter)==null?void 0:n.toAttribute)!==void 0?s.converter:Li).toAttribute(i,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,i){var n;const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=s.getPropertyOptions(o),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Li;this._$Em=o,this[o]=l.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Qn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(n)):this._$EU()}catch(s){throw i=!1,this._$EU(),s}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var s;return(s=n.hostUpdated)==null?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[je("elementProperties")]=new Map,Kt[je("finalized")]=new Map,Ks==null||Ks({ReactiveElement:Kt}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bt=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fd(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return he}};var eo;Bt._$litElement$=!0,Bt.finalized=!0,(eo=globalThis.litElementHydrateSupport)==null||eo.call(globalThis,{LitElement:Bt});const io=globalThis.litElementPolyfillSupport;io==null||io({LitElement:Bt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oh={attribute:!0,type:String,converter:Li,reflect:!1,hasChanged:Qn},Ih=(e=Oh,t,i)=>{const{kind:n,metadata:s}=i;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,e)},init(l){return l!==void 0&&this.P(r,void 0,e),l}}}if(n==="setter"){const{name:r}=i;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+n)};function Y(e){return(t,i)=>typeof i=="object"?Ih(e,t,i):((n,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(s,o):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nh(e){return Y({...e,state:!0,attribute:!1})}class Ph extends Ca{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Aa(.5,.5),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof Element&&i.element.parentNode!==null&&i.element.parentNode.removeChild(i.element)})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new kn;new zi;new zi;new kn;new kn;class Mh{constructor(t,i){this._group=new es,this._frustum=new ma,this._frustumMat=new zi,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new fa({color:"#2e3338"}),this.numbers=new es,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=i;const n=this.newGrid(-1),s=this.newGrid(-2);this.grids={main:n,secondary:s},this._group.add(s,n,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:i}=this.grids;t.removeFromParent(),i.removeFromParent(),t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:i}=this._frustum,n=i[0].constant*-i[0].normal.x,s=i[1].constant*-i[1].normal.x,o=i[2].constant*-i[2].normal.y,r=i[3].constant*-i[3].normal.y,l=Math.abs(n-s),a=Math.abs(r-o),{clientWidth:u,clientHeight:d}=this._container,c=Math.max(u,d),h=Math.max(l,a)/c,p=Math.ceil(Math.log10(l/this.scaleX)),b=Math.ceil(Math.log10(a/this.scaleY)),w=10**(p-2)*this.scaleX,v=10**(b-2)*this.scaleY,f=w*this.gridsFactor,y=v*this.gridsFactor,_=Math.ceil(a/y),$=Math.ceil(l/f),A=Math.ceil(a/v),C=Math.ceil(l/w),O=w*Math.ceil(s/w),P=v*Math.ceil(o/v),S=f*Math.ceil(s/f),E=y*Math.ceil(o/y),B=[...this.numbers.children];for(const U of B)U.removeFromParent();this.numbers.children=[];const q=[],W=9*h,x=1e4,R=S+this._offsetX,V=Math.round(Math.abs(R/this.scaleX)*x)/x,tt=($-1)*f,et=Math.round(Math.abs((R+tt)/this.scaleX)*x)/x,ut=Math.max(V,et).toString().length*W;let Ae=Math.ceil(ut/f)*f;for(let U=0;U<$;U++){let D=S+U*f;q.push(D,r,0,D,o,0),D=Math.round(D*x)/x,Ae=Math.round(Ae*x)/x;const Ee=D%Ae;if(!(f<1||y<1)&&Math.abs(Ee)>.01)continue;const hi=this.newNumber((D+this._offsetX)/this.scaleX),nn=12*h;hi.position.set(D,o+nn,0)}for(let U=0;U<_;U++){const D=E+U*y;q.push(s,D,0,n,D,0);const Ee=this.newNumber(D/this.scaleY);let hi=12;Ee.element.textContent&&(hi+=4*Ee.element.textContent.length);const nn=hi*h;Ee.position.set(s+nn,D,0)}const en=[];for(let U=0;U<C;U++){const D=O+U*w;en.push(D,r,0,D,o,0)}for(let U=0;U<A;U++){const D=P+U*v;en.push(s,D,0,n,D,0)}const ca=new is(new Float32Array(q),3),ua=new is(new Float32Array(en),3),{main:da,secondary:ha}=this.grids;da.geometry.setAttribute("position",ca),ha.geometry.setAttribute("position",ua)}newNumber(t){const i=document.createElement("bim-label");i.textContent=String(Math.round(t*100)/100);const n=new Ph(i);return this.numbers.add(n),n}newGrid(t){const i=new ba,n=new ga(i,this.material);return n.frustumCulled=!1,n.renderOrder=t,n}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let i=0;i<t.length;i++){const n=t[i];if(Number.isNaN(n))return!1}return!0}}var Lh=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,ui=(e,t,i,n)=>{for(var s=Rh(t,i),o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&Lh(t,i,s),s};const ia=class extends Bt{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const i=Number(t.replace("#","0x"));Number.isNaN(i)||this._grid.material.color.setHex(i)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(Xe).create();this._world=i,i.scene=new Tn(t),i.scene.setup(),i.renderer=new pa(t,this);const n=new no(t);i.camera=n;const s=new Mh(n.threeOrtho,this);this._grid=s,i.scene.three.add(s.get()),n.controls.addEventListener("update",()=>s.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),n.set("Plan"),await n.controls.setLookAt(0,0,100,0,0,0),await n.projection.set("Orthographic"),n.controls.dollySpeed=3,n.controls.draggingSmoothTime=.085,n.controls.maxZoom=1e3,n.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return qn`<slot></slot>`}};ia.styles=Jn`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let di=ia;ui([Y({type:String,attribute:"grid-color",reflect:!0})],di.prototype,"gridColor");ui([Y({type:Number,attribute:"grid-scale-x",reflect:!0})],di.prototype,"gridScaleX");ui([Y({type:Number,attribute:"grid-scale-y",reflect:!0})],di.prototype,"gridScaleY");ui([Y({type:Number,attribute:"grid-offset-x",reflect:!0})],di.prototype,"gridOffsetX");ui([Y({type:Number,attribute:"grid-offset-y",reflect:!0})],di.prototype,"gridOffsetY");var jh=Object.defineProperty,Pt=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&jh(t,i,s),s};const na=class extends Bt{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new zi,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}render(){const t=this.size??this._defaults.size;return qn`
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
  `;let Mt=na;Pt([Y({type:Number,reflect:!0})],Mt.prototype,"size");Pt([Y({type:String,attribute:"right-text",reflect:!0})],Mt.prototype,"rightText");Pt([Y({type:String,attribute:"left-text",reflect:!0})],Mt.prototype,"leftText");Pt([Y({type:String,attribute:"top-text",reflect:!0})],Mt.prototype,"topText");Pt([Y({type:String,attribute:"bottom-text",reflect:!0})],Mt.prototype,"bottomText");Pt([Y({type:String,attribute:"front-text",reflect:!0})],Mt.prototype,"frontText");Pt([Y({type:String,attribute:"back-text",reflect:!0})],Mt.prototype,"backText");Pt([Nh()],Mt.prototype,"_cssMatrix3D");var zh=Object.defineProperty,Dh=(e,t,i,n)=>{for(var s=void 0,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=r(t,i,s)||s);return s&&zh(t,i,s),s};const sa=class extends Bt{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=Sn()}set components(t){var i;if(this._components=t,this.components){const n=this.components.get(Xe);this.world=n.create(),this.world.name=this.name}else(i=this.world)==null||i.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const i=new Tn(this.components);this.world.scene=i,i.setup(),i.three.background=null;const n=new M(this.components,t);this.world.renderer=n;const{postproduction:s}=n,o=new no(this.components);this.world.camera=o;const r=this.components.get(On).create(this.world);r.material.uniforms.uColor.value=new fe(4342338),r.material.uniforms.uSize1.value=2,r.material.uniforms.uSize2.value=8,s.enabled=!0,s.customEffects.excludedMeshes.push(r.three),s.setPasses({custom:!0,ao:!0,gamma:!0}),s.customEffects.lineColor=1513756}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return qn` <bim-viewport ${Jd(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};sa.styles=Jn``;let Fh=sa;Dh([Y({type:String,reflect:!0})],Fh.prototype,"name");Pa.init();const Zn=document.createElement("bim-viewport"),at=new Ma,Hh=at.get(Xe),Qt=Hh.create(),oa=new Tn(at);oa.setup();Qt.scene=oa;const ra=new La(at,Zn);Qt.renderer=ra;const Kn=new Ra(at);Qt.camera=Kn;Kn.controls.setLookAt(10,5.5,5,-4,-1,-6.5);Zn.addEventListener("resize",()=>{ra.resize(),Kn.updateAspect()});at.init();const Bh=at.get(On);Bh.create(Qt);const aa=at.get(so);await aa.setup();const Uh=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),Vh=await Uh.arrayBuffer(),Wh=new Uint8Array(Vh),Gh=await aa.load(Wh);Qt.scene.three.add(Gh);const tn={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},ne=at.get(Je);ne.setup({users:new Set(Object.keys(tn)),labels:new Set(["Architecture","Structure","MEP"])});const qh=at.get(Di);ne.list.onItemSet.add(({value:e})=>{const t=qh.create(Qt);e.viewpoints.add(t.guid)});const[Ri,Yh]=sh.topicsList({components:at,dataStyles:{users:tn}});Ri.selectableRows=!0;const[Xh,Jh]=lh.topic({components:at,styles:{users:tn}}),ji=Qe.create(()=>dt`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${Xh}
     </bim-panel> 
    </dialog>
  `);document.body.append(ji);const Qh=Qe.create(()=>dt`
    <bim-button style="flex: 0" @click=${()=>{ji.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);Jh({onCancel:()=>{ji.close()},onSubmit:()=>{ji.close()}});const[Zh,la]=Qe.create(e=>{const{components:t,topic:i,world:n,actions:s,styles:o}=e;let r,l;if(i){const[a]=gi.topicInformation({components:t,topic:i,actions:s==null?void 0:s.information,styles:o}),[u]=gi.topicViewpoints({components:t,topic:i,world:n,actions:s==null?void 0:s.viewpoints}),[d]=gi.topicRelations({components:t,topic:i,actions:s==null?void 0:s.relatedTopics}),[c]=gi.topicComments({topic:i,actions:s==null?void 0:s.comments,styles:o==null?void 0:o.users}),h=()=>{window.alert(`An email will be sent to ${i.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=dt`
        <bim-panel-section label="Information" icon="ph:info-bold">
          ${a}
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
      `}else l=dt`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${i?null:dt`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return dt`
      <bim-panel>
        ${l}
        ${r}
      </bim-panel> 
    `},{components:at,world:Qt,styles:{users:tn}});ne.list.onItemUpdated.add(()=>la());Yh({onTopicEnter:e=>{la({topic:e})}});const Kh=Qe.create(()=>dt`<bim-button style="flex: 0" @click=${async()=>{const t=[...Ri.selection].map(({Guid:r})=>r&&typeof r=="string"?ne.list.get(r):null).filter(r=>r),i=t.length>0?t:[...ne.list.values()];if(i.length===0)return;const n=await ne.export(i),s=new File([n],"topics.bcf"),o=document.createElement("a");o.href=URL.createObjectURL(s),o.download=s.name,o.click(),URL.revokeObjectURL(o.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),tp=Qe.create(()=>dt`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${t=>{const i=t.target;Ri.queryString=i.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${Qh}
            ${Kh}
          </div> 
        </div> 
        ${Ri}
      </bim-panel-section>
    </bim-panel>
  `),ts=document.createElement("bim-grid");ts.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,elements:{bcfPanel:tp,viewport:Zn,customTopicPanel:Zh}}};ts.layout="main";document.body.append(ts);
