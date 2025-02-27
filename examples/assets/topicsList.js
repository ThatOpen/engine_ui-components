import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as zi,d as Tn,W as Xe,S as On,j as pa,O as ss,i as M,G as In,k as be,F as Gt,p as mt,q as Je,r as Di,e as io,f as ma,L as ba,B as no,g as fa,h as ga,I as rs,H as as,s as va,t as ya,u as _a,P as pi,v as Se,w as wa,D as $a,A as xa,c as Ca,V as Aa,x as $i,y as Ea,z as _t,R as Sa,E as ls,J as cs,K as ka,N as ds,Q as Ta,U as Oa,X as us,Y as hs,Z as Ia,_ as Na,T as Pa,C as Ma,a as Ra,b as La,l as Qe,m as ut}from"./index-Dx9lktJI.js";var ja=Object.defineProperty,za=(e,t,i)=>t in e?ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Mt=(e,t,i)=>(za(e,typeof t!="symbol"?t+"":t,i),i);const oe=Math.min,ft=Math.max,xi=Math.round,At=e=>({x:e,y:e}),Da={left:"right",right:"left",bottom:"top",top:"bottom"},Fa={start:"end",end:"start"};function oo(e,t,i){return ft(e,oe(t,i))}function Ze(e,t){return typeof e=="function"?e(t):e}function gt(e){return e.split("-")[0]}function Fi(e){return e.split("-")[1]}function ps(e){return e==="x"?"y":"x"}function ms(e){return e==="y"?"height":"width"}function Bt(e){return["top","bottom"].includes(gt(e))?"y":"x"}function bs(e){return ps(Bt(e))}function Ha(e,t,i){i===void 0&&(i=!1);const n=Fi(e),o=bs(e),s=ms(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=Ci(r)),[r,Ci(r)]}function Ba(e){const t=Ci(e);return[hn(e),t,hn(t)]}function hn(e){return e.replace(/start|end/g,t=>Fa[t])}function Ua(e,t,i){const n=["left","right"],o=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return i?t?o:n:t?n:o;case"left":case"right":return t?s:r;default:return[]}}function Va(e,t,i,n){const o=Fi(e);let s=Ua(gt(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(hn)))),s}function Ci(e){return e.replace(/left|right|bottom|top/g,t=>Da[t])}function Wa(e){return{top:0,right:0,bottom:0,left:0,...e}}function fs(e){return typeof e!="number"?Wa(e):{top:e,right:e,bottom:e,left:e}}function se(e){const{x:t,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:t,right:t+n,bottom:i+o,x:t,y:i}}function so(e,t,i){let{reference:n,floating:o}=e;const s=Bt(t),r=bs(t),l=ms(r),a=gt(t),d=s==="y",u=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2,h=n[l]/2-o[l]/2;let p;switch(a){case"top":p={x:u,y:n.y-o.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:c};break;case"left":p={x:n.x-o.width,y:c};break;default:p={x:n.x,y:n.y}}switch(Fi(t)){case"start":p[r]-=h*(i&&d?-1:1);break;case"end":p[r]+=h*(i&&d?-1:1);break}return p}const Ga=async(e,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let d=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:c}=so(d,n,a),h=n,p={},f=0;for(let w=0;w<l.length;w++){const{name:v,fn:b}=l[w],{x:y,y:_,data:$,reset:A}=await b({x:u,y:c,initialPlacement:n,placement:h,strategy:o,middlewareData:p,rects:d,platform:r,elements:{reference:e,floating:t}});u=y??u,c=_??c,p={...p,[v]:{...p[v],...$}},A&&f<=50&&(f++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(d=A.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):A.rects),{x:u,y:c}=so(d,h,a)),w=-1)}return{x:u,y:c,placement:h,strategy:o,middlewareData:p}};async function gs(e,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:s,rects:r,elements:l,strategy:a}=e,{boundary:d="clippingAncestors",rootBoundary:u="viewport",elementContext:c="floating",altBoundary:h=!1,padding:p=0}=Ze(t,e),f=fs(p),w=l[h?c==="floating"?"reference":"floating":c],v=se(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(w)))==null||i?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:d,rootBoundary:u,strategy:a})),b=c==="floating"?{x:n,y:o,width:r.floating.width,height:r.floating.height}:r.reference,y=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),_=await(s.isElement==null?void 0:s.isElement(y))?await(s.getScale==null?void 0:s.getScale(y))||{x:1,y:1}:{x:1,y:1},$=se(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:y,strategy:a}):b);return{top:(v.top-$.top+f.top)/_.y,bottom:($.bottom-v.bottom+f.bottom)/_.y,left:(v.left-$.left+f.left)/_.x,right:($.right-v.right+f.right)/_.x}}const Ya=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:d}=t,{mainAxis:u=!0,crossAxis:c=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:w=!0,...v}=Ze(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const b=gt(o),y=Bt(l),_=gt(l)===l,$=await(a.isRTL==null?void 0:a.isRTL(d.floating)),A=h||(_||!w?[Ci(l)]:Ba(l)),C=f!=="none";!h&&C&&A.push(...Va(l,w,f,$));const O=[l,...A],P=await gs(t,v),S=[];let E=((n=s.flip)==null?void 0:n.overflows)||[];if(u&&S.push(P[b]),c){const x=Ha(o,r,$);S.push(P[x[0]],P[x[1]])}if(E=[...E,{placement:o,overflows:S}],!S.every(x=>x<=0)){var B,Y;const x=(((B=s.flip)==null?void 0:B.index)||0)+1,L=O[x];if(L)return{data:{index:x,overflows:E},reset:{placement:L}};let V=(Y=E.filter(K=>K.overflows[0]<=0).sort((K,tt)=>K.overflows[1]-tt.overflows[1])[0])==null?void 0:Y.placement;if(!V)switch(p){case"bestFit":{var W;const K=(W=E.filter(tt=>{if(C){const dt=Bt(tt.placement);return dt===y||dt==="y"}return!0}).map(tt=>[tt.placement,tt.overflows.filter(dt=>dt>0).reduce((dt,Ae)=>dt+Ae,0)]).sort((tt,dt)=>tt[1]-dt[1])[0])==null?void 0:W[0];K&&(V=K);break}case"initialPlacement":V=l;break}if(o!==V)return{reset:{placement:V}}}return{}}}};function vs(e){const t=oe(...e.map(s=>s.left)),i=oe(...e.map(s=>s.top)),n=ft(...e.map(s=>s.right)),o=ft(...e.map(s=>s.bottom));return{x:t,y:i,width:n-t,height:o-i}}function qa(e){const t=e.slice().sort((o,s)=>o.y-s.y),i=[];let n=null;for(let o=0;o<t.length;o++){const s=t[o];!n||s.y-n.y>n.height/2?i.push([s]):i[i.length-1].push(s),n=s}return i.map(o=>se(vs(o)))}const Xa=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:n,rects:o,platform:s,strategy:r}=t,{padding:l=2,x:a,y:d}=Ze(e,t),u=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(n.reference))||[]),c=qa(u),h=se(vs(u)),p=fs(l);function f(){if(c.length===2&&c[0].left>c[1].right&&a!=null&&d!=null)return c.find(v=>a>v.left-p.left&&a<v.right+p.right&&d>v.top-p.top&&d<v.bottom+p.bottom)||h;if(c.length>=2){if(Bt(i)==="y"){const E=c[0],B=c[c.length-1],Y=gt(i)==="top",W=E.top,x=B.bottom,L=Y?E.left:B.left,V=Y?E.right:B.right,K=V-L,tt=x-W;return{top:W,bottom:x,left:L,right:V,width:K,height:tt,x:L,y:W}}const v=gt(i)==="left",b=ft(...c.map(E=>E.right)),y=oe(...c.map(E=>E.left)),_=c.filter(E=>v?E.left===y:E.right===b),$=_[0].top,A=_[_.length-1].bottom,C=y,O=b,P=O-C,S=A-$;return{top:$,bottom:A,left:C,right:O,width:P,height:S,x:C,y:$}}return h}const w=await s.getElementRects({reference:{getBoundingClientRect:f},floating:n.floating,strategy:r});return o.reference.x!==w.reference.x||o.reference.y!==w.reference.y||o.reference.width!==w.reference.width||o.reference.height!==w.reference.height?{reset:{rects:w}}:{}}}};async function Ja(e,t){const{placement:i,platform:n,elements:o}=e,s=await(n.isRTL==null?void 0:n.isRTL(o.floating)),r=gt(i),l=Fi(i),a=Bt(i)==="y",d=["left","top"].includes(r)?-1:1,u=s&&a?-1:1,c=Ze(t,e);let{mainAxis:h,crossAxis:p,alignmentAxis:f}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof f=="number"&&(p=l==="end"?f*-1:f),a?{x:p*u,y:h*d}:{x:h*d,y:p*u}}const ys=function(e){return{name:"offset",options:e,async fn(t){var i,n;const{x:o,y:s,placement:r,middlewareData:l}=t,a=await Ja(t,e);return r===((i=l.offset)==null?void 0:i.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:o+a.x,y:s+a.y,data:{...a,placement:r}}}}},Qa=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:o}=t,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:v=>{let{x:b,y}=v;return{x:b,y}}},...a}=Ze(e,t),d={x:i,y:n},u=await gs(t,a),c=Bt(gt(o)),h=ps(c);let p=d[h],f=d[c];if(s){const v=h==="y"?"top":"left",b=h==="y"?"bottom":"right",y=p+u[v],_=p-u[b];p=oo(y,p,_)}if(r){const v=c==="y"?"top":"left",b=c==="y"?"bottom":"right",y=f+u[v],_=f-u[b];f=oo(y,f,_)}const w=l.fn({...t,[h]:p,[c]:f});return{...w,data:{x:w.x-i,y:w.y-n,enabled:{[h]:s,[c]:r}}}}}};function Hi(){return typeof window<"u"}function Et(e){return _s(e)?(e.nodeName||"").toLowerCase():"#document"}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kt(e){var t;return(t=(_s(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function _s(e){return Hi()?e instanceof Node||e instanceof J(e).Node:!1}function ht(e){return Hi()?e instanceof Element||e instanceof J(e).Element:!1}function pt(e){return Hi()?e instanceof HTMLElement||e instanceof J(e).HTMLElement:!1}function ro(e){return!Hi()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}function Ke(e){const{overflow:t,overflowX:i,overflowY:n,display:o}=it(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(o)}function Za(e){return["table","td","th"].includes(Et(e))}function Ka(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Nn(e){const t=Pn(),i=ht(e)?it(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function tl(e){let t=re(e);for(;pt(t)&&!Bi(t);){if(Nn(t))return t;if(Ka(t))return null;t=re(t)}return null}function Pn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Bi(e){return["html","body","#document"].includes(Et(e))}function it(e){return J(e).getComputedStyle(e)}function Ui(e){return ht(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function re(e){if(Et(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ro(e)&&e.host||kt(e);return ro(t)?t.host:t}function ws(e){const t=re(e);return Bi(t)?e.ownerDocument?e.ownerDocument.body:e.body:pt(t)&&Ke(t)?t:ws(t)}function pn(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const o=ws(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=J(o);if(s){const l=el(r);return t.concat(r,r.visualViewport||[],Ke(o)?o:[],l&&i?pn(l):[])}return t.concat(o,pn(o,[],i))}function el(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $s(e){const t=it(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=pt(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,l=xi(i)!==s||xi(n)!==r;return l&&(i=s,n=r),{width:i,height:n,$:l}}function xs(e){return ht(e)?e:e.contextElement}function te(e){const t=xs(e);if(!pt(t))return At(1);const i=t.getBoundingClientRect(),{width:n,height:o,$:s}=$s(t);let r=(s?xi(i.width):i.width)/n,l=(s?xi(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const il=At(0);function Cs(e){const t=J(e);return!Pn()||!t.visualViewport?il:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function nl(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==J(e)?!1:t}function ze(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=xs(e);let r=At(1);t&&(n?ht(n)&&(r=te(n)):r=te(e));const l=nl(s,i,n)?Cs(s):At(0);let a=(o.left+l.x)/r.x,d=(o.top+l.y)/r.y,u=o.width/r.x,c=o.height/r.y;if(s){const h=J(s),p=n&&ht(n)?J(n):n;let f=h,w=f.frameElement;for(;w&&n&&p!==f;){const v=te(w),b=w.getBoundingClientRect(),y=it(w),_=b.left+(w.clientLeft+parseFloat(y.paddingLeft))*v.x,$=b.top+(w.clientTop+parseFloat(y.paddingTop))*v.y;a*=v.x,d*=v.y,u*=v.x,c*=v.y,a+=_,d+=$,f=J(w),w=f.frameElement}}return se({width:u,height:c,x:a,y:d})}const ol=[":popover-open",":modal"];function As(e){return ol.some(t=>{try{return e.matches(t)}catch{return!1}})}function sl(e){let{elements:t,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=kt(n),l=t?As(t.floating):!1;if(n===r||l&&s)return i;let a={scrollLeft:0,scrollTop:0},d=At(1);const u=At(0),c=pt(n);if((c||!c&&!s)&&((Et(n)!=="body"||Ke(r))&&(a=Ui(n)),pt(n))){const h=ze(n);d=te(n),u.x=h.x+n.clientLeft,u.y=h.y+n.clientTop}return{width:i.width*d.x,height:i.height*d.y,x:i.x*d.x-a.scrollLeft*d.x+u.x,y:i.y*d.y-a.scrollTop*d.y+u.y}}function rl(e){return Array.from(e.getClientRects())}function Es(e){return ze(kt(e)).left+Ui(e).scrollLeft}function al(e){const t=kt(e),i=Ui(e),n=e.ownerDocument.body,o=ft(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=ft(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+Es(e);const l=-i.scrollTop;return it(n).direction==="rtl"&&(r+=ft(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:l}}function ll(e,t){const i=J(e),n=kt(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,l=0,a=0;if(o){s=o.width,r=o.height;const d=Pn();(!d||d&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}return{width:s,height:r,x:l,y:a}}function cl(e,t){const i=ze(e,!0,t==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=pt(e)?te(e):At(1),r=e.clientWidth*s.x,l=e.clientHeight*s.y,a=o*s.x,d=n*s.y;return{width:r,height:l,x:a,y:d}}function ao(e,t,i){let n;if(t==="viewport")n=ll(e,i);else if(t==="document")n=al(kt(e));else if(ht(t))n=cl(t,i);else{const o=Cs(e);n={...t,x:t.x-o.x,y:t.y-o.y}}return se(n)}function Ss(e,t){const i=re(e);return i===t||!ht(i)||Bi(i)?!1:it(i).position==="fixed"||Ss(i,t)}function dl(e,t){const i=t.get(e);if(i)return i;let n=pn(e,[],!1).filter(l=>ht(l)&&Et(l)!=="body"),o=null;const s=it(e).position==="fixed";let r=s?re(e):e;for(;ht(r)&&!Bi(r);){const l=it(r),a=Nn(r);!a&&l.position==="fixed"&&(o=null),(s?!a&&!o:!a&&l.position==="static"&&o&&["absolute","fixed"].includes(o.position)||Ke(r)&&!a&&Ss(e,r))?n=n.filter(d=>d!==r):o=l,r=re(r)}return t.set(e,n),n}function ul(e){let{element:t,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?dl(t,this._c):[].concat(i),n],r=s[0],l=s.reduce((a,d)=>{const u=ao(t,d,o);return a.top=ft(u.top,a.top),a.right=oe(u.right,a.right),a.bottom=oe(u.bottom,a.bottom),a.left=ft(u.left,a.left),a},ao(t,r,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hl(e){const{width:t,height:i}=$s(e);return{width:t,height:i}}function pl(e,t,i){const n=pt(t),o=kt(t),s=i==="fixed",r=ze(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=At(0);if(n||!n&&!s)if((Et(t)!=="body"||Ke(o))&&(l=Ui(t)),n){const c=ze(t,!0,s,t);a.x=c.x+t.clientLeft,a.y=c.y+t.clientTop}else o&&(a.x=Es(o));const d=r.left+l.scrollLeft-a.x,u=r.top+l.scrollTop-a.y;return{x:d,y:u,width:r.width,height:r.height}}function lo(e,t){return!pt(e)||it(e).position==="fixed"?null:t?t(e):e.offsetParent}function ks(e,t){const i=J(e);if(!pt(e)||As(e))return i;let n=lo(e,t);for(;n&&Za(n)&&it(n).position==="static";)n=lo(n,t);return n&&(Et(n)==="html"||Et(n)==="body"&&it(n).position==="static"&&!Nn(n))?i:n||tl(e)||i}const ml=async function(e){const t=this.getOffsetParent||ks,i=this.getDimensions;return{reference:pl(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function bl(e){return it(e).direction==="rtl"}const fl={convertOffsetParentRelativeRectToViewportRelativeRect:sl,getDocumentElement:kt,getClippingRect:ul,getOffsetParent:ks,getElementRects:ml,getClientRects:rl,getDimensions:hl,getScale:te,isElement:ht,isRTL:bl},Ts=Qa,Os=Ya,Is=Xa,Ns=(e,t,i)=>{const n=new Map,o={platform:fl,...i},s={...o.platform,_c:n};return Ga(e,t,{...o,platform:s})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vi=globalThis,Mn=vi.ShadowRoot&&(vi.ShadyCSS===void 0||vi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rn=Symbol(),co=new WeakMap;let Ps=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Rn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Mn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=co.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&co.set(t,e))}return e}toString(){return this.cssText}};const gl=e=>new Ps(typeof e=="string"?e:e+"",void 0,Rn),I=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new Ps(i,e,Rn)},vl=(e,t)=>{if(Mn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=vi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},uo=Mn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return gl(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yl,defineProperty:_l,getOwnPropertyDescriptor:wl,getOwnPropertyNames:$l,getOwnPropertySymbols:xl,getPrototypeOf:Cl}=Object,ae=globalThis,ho=ae.trustedTypes,Al=ho?ho.emptyScript:"",po=ae.reactiveElementPolyfillSupport,Ne=(e,t)=>e,Ai={toAttribute(e,t){switch(t){case Boolean:e=e?Al:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Ln=(e,t)=>!yl(e,t),mo={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Ln};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ae.litPropertyMetadata??(ae.litPropertyMetadata=new WeakMap);class Zt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=mo){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&_l(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=wl(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const l=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mo}static _$Ei(){if(this.hasOwnProperty(Ne("elementProperties")))return;const t=Cl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ne("properties"))){const i=this.properties,n=[...$l(i),...xl(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(uo(o))}else t!==void 0&&i.push(uo(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vl(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Ai).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Ai;this._$Em=s,this[s]=l.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Ln)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Zt.elementStyles=[],Zt.shadowRootOptions={mode:"open"},Zt[Ne("elementProperties")]=new Map,Zt[Ne("finalized")]=new Map,po==null||po({ReactiveElement:Zt}),(ae.reactiveElementVersions??(ae.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=globalThis,Si=Ei.trustedTypes,bo=Si?Si.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ms="$lit$",xt=`lit$${Math.random().toFixed(9).slice(2)}$`,Rs="?"+xt,El=`<${Rs}>`,Ut=document,De=()=>Ut.createComment(""),Fe=e=>e===null||typeof e!="object"&&typeof e!="function",jn=Array.isArray,Sl=e=>jn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",on=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fo=/-->/g,go=/>/g,Rt=RegExp(`>|${on}(?:([^\\s"'>=/]+)(${on}*=${on}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vo=/'/g,yo=/"/g,Ls=/^(?:script|style|textarea|title)$/i,kl=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),m=kl(1),Vt=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),_o=new WeakMap,jt=Ut.createTreeWalker(Ut,129);function js(e,t){if(!jn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bo!==void 0?bo.createHTML(t):t}const Tl=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=ke;for(let l=0;l<i;l++){const a=e[l];let d,u,c=-1,h=0;for(;h<a.length&&(r.lastIndex=h,u=r.exec(a),u!==null);)h=r.lastIndex,r===ke?u[1]==="!--"?r=fo:u[1]!==void 0?r=go:u[2]!==void 0?(Ls.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=Rt):u[3]!==void 0&&(r=Rt):r===Rt?u[0]===">"?(r=o??ke,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?Rt:u[3]==='"'?yo:vo):r===yo||r===vo?r=Rt:r===fo||r===go?r=ke:(r=Rt,o=void 0);const p=r===Rt&&e[l+1].startsWith("/>")?" ":"";s+=r===ke?a+El:c>=0?(n.push(d),a.slice(0,c)+Ms+a.slice(c)+xt+p):a+xt+(c===-2?l:p)}return[js(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class He{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const l=t.length-1,a=this.parts,[d,u]=Tl(t,i);if(this.el=He.createElement(d,n),jt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=jt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Ms)){const h=u[r++],p=o.getAttribute(c).split(xt),f=/([.?@])?(.*)/.exec(h);a.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?Il:f[1]==="?"?Nl:f[1]==="@"?Pl:Vi}),o.removeAttribute(c)}else c.startsWith(xt)&&(a.push({type:6,index:s}),o.removeAttribute(c));if(Ls.test(o.tagName)){const c=o.textContent.split(xt),h=c.length-1;if(h>0){o.textContent=Si?Si.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],De()),jt.nextNode(),a.push({type:2,index:++s});o.append(c[h],De())}}}else if(o.nodeType===8)if(o.data===Rs)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(xt,c+1))!==-1;)a.push({type:7,index:s}),c+=xt.length-1}s++}}static createElement(t,i){const n=Ut.createElement("template");return n.innerHTML=t,n}}function le(e,t,i=e,n){var o,s;if(t===Vt)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const l=Fe(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),l===void 0?r=void 0:(r=new l(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=le(e,r._$AS(e,t.values),r,n)),t}class Ol{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Ut).importNode(i,!0);jt.currentNode=o;let s=jt.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new ti(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new Ml(s,this,t)),this._$AV.push(d),a=n[++l]}r!==(a==null?void 0:a.index)&&(s=jt.nextNode(),r++)}return jt.currentNode=Ut,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ti{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=le(this,t,i),Fe(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Vt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Sl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==R&&Fe(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ut.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=He.createElement(js(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new Ol(s,this),l=r.u(this.options);r.p(n),this.T(l),this._$AH=r}}_$AC(t){let i=_o.get(t.strings);return i===void 0&&_o.set(t.strings,i=new He(t)),i}k(t){jn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new ti(this.O(De()),this.O(De()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Vi{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=le(this,t,i,0),r=!Fe(t)||t!==this._$AH&&t!==Vt,r&&(this._$AH=t);else{const l=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=le(this,l[n+a],i,a),d===Vt&&(d=this._$AH[a]),r||(r=!Fe(d)||d!==this._$AH[a]),d===R?t=R:t!==R&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!o&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Il extends Vi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}class Nl extends Vi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==R)}}class Pl extends Vi{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=le(this,t,i,0)??R)===Vt)return;const n=this._$AH,o=t===R&&n!==R||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==R&&(n===R||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class Ml{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){le(this,t)}}const wo=Ei.litHtmlPolyfillSupport;wo==null||wo(He,ti),(Ei.litHtmlVersions??(Ei.litHtmlVersions=[])).push("3.2.1");const ce=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new ti(t.insertBefore(De(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends Zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ce(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Vt}};var $o;T._$litElement$=!0,T.finalized=!0,($o=globalThis.litElementHydrateSupport)==null||$o.call(globalThis,{LitElement:T});const xo=globalThis.litElementPolyfillSupport;xo==null||xo({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rl={attribute:!0,type:String,converter:Ai,reflect:!1,hasChanged:Ln},Ll=(e=Rl,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,e)},init(l){return l!==void 0&&this.P(r,void 0,e),l}}}if(n==="setter"){const{name:r}=i;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+n)};function g(e){return(t,i)=>typeof i=="object"?Ll(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return g({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ds=e=>(...t)=>({_$litDirective$:e,values:t});let Fs=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Pe(o,t);return!0},ki=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Hs=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Fl(t)}};function zl(e){this._$AN!==void 0?(ki(this),this._$AM=e,Hs(this)):this._$AM=e}function Dl(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Pe(n[s],!1),ki(n[s]);else n!=null&&(Pe(n,!1),ki(n));else Pe(this,e)}const Fl=e=>{e.type==zs.CHILD&&(e._$AP??(e._$AP=Dl),e._$AQ??(e._$AQ=zl))};class Hl extends Fs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Hs(this),this.isConnected=t._$AU}_$AO(t,i=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),i&&(Pe(this,t),ki(this))}setValue(t){if(jl(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const de=()=>new Bl;class Bl{}const sn=new WeakMap,G=Ds(class extends Hl{render(e){return R}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),R}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=sn.get(t);i===void 0&&(i=new WeakMap,sn.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=sn.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Bs=Object.freeze({left:0,top:0,width:16,height:16}),Ti=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ei=Object.freeze({...Bs,...Ti}),mn=Object.freeze({...ei,body:"",hidden:!1}),Ul=Object.freeze({width:null,height:null}),Us=Object.freeze({...Ul,...Ti});function Vl(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function n(o){for(;o<0;)o+=4;return o%4}if(i===""){const o=parseInt(e);return isNaN(o)?0:n(o)}else if(i!==e){let o=0;switch(i){case"%":o=25;break;case"deg":o=90}if(o){let s=parseFloat(e.slice(0,e.length-i.length));return isNaN(s)?0:(s=s/o,s%1===0?n(s):0)}}return t}const Wl=/[\s,]+/;function Gl(e,t){t.split(Wl).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Vs={...Us,preserveAspectRatio:""};function Co(e){const t={...Vs},i=(n,o)=>e.getAttribute(n)||o;return t.width=i("width",null),t.height=i("height",null),t.rotate=Vl(i("rotate","")),Gl(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function Yl(e,t){for(const i in Vs)if(e[i]!==t[i])return!0;return!1}const Me=/^[a-z0-9]+(-[a-z0-9]+)*$/,ii=(e,t,i,n="")=>{const o=e.split(":");if(e.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;n=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const l=o.pop(),a=o.pop(),d={provider:o.length>0?o[0]:n,prefix:a,name:l};return t&&!yi(d)?null:d}const s=o[0],r=s.split("-");if(r.length>1){const l={provider:n,prefix:r.shift(),name:r.join("-")};return t&&!yi(l)?null:l}if(i&&n===""){const l={provider:n,prefix:"",name:s};return t&&!yi(l,i)?null:l}return null},yi=(e,t)=>e?!!((e.provider===""||e.provider.match(Me))&&(t&&e.prefix===""||e.prefix.match(Me))&&e.name.match(Me)):!1;function ql(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const n=((e.rotate||0)+(t.rotate||0))%4;return n&&(i.rotate=n),i}function Ao(e,t){const i=ql(e,t);for(const n in mn)n in Ti?n in e&&!(n in i)&&(i[n]=Ti[n]):n in t?i[n]=t[n]:n in e&&(i[n]=e[n]);return i}function Xl(e,t){const i=e.icons,n=e.aliases||Object.create(null),o=Object.create(null);function s(r){if(i[r])return o[r]=[];if(!(r in o)){o[r]=null;const l=n[r]&&n[r].parent,a=l&&s(l);a&&(o[r]=[l].concat(a))}return o[r]}return Object.keys(i).concat(Object.keys(n)).forEach(s),o}function Jl(e,t,i){const n=e.icons,o=e.aliases||Object.create(null);let s={};function r(l){s=Ao(n[l]||o[l],s)}return r(t),i.forEach(r),Ao(e,s)}function Ws(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(o=>{t(o,null),i.push(o)});const n=Xl(e);for(const o in n){const s=n[o];s&&(t(o,Jl(e,o,s)),i.push(o))}return i}const Ql={provider:"",aliases:{},not_found:{},...Bs};function rn(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Gs(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!rn(e,Ql))return null;const i=t.icons;for(const o in i){const s=i[o];if(!o.match(Me)||typeof s.body!="string"||!rn(s,mn))return null}const n=t.aliases||Object.create(null);for(const o in n){const s=n[o],r=s.parent;if(!o.match(Me)||typeof r!="string"||!i[r]&&!n[r]||!rn(s,mn))return null}return t}const Oi=Object.create(null);function Zl(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function St(e,t){const i=Oi[e]||(Oi[e]=Object.create(null));return i[t]||(i[t]=Zl(e,t))}function zn(e,t){return Gs(t)?Ws(t,(i,n)=>{n?e.icons[i]=n:e.missing.add(i)}):[]}function Kl(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function tc(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(Oi)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(Oi[n]||{})).forEach(o=>{const s=St(n,o);i=i.concat(Object.keys(s.icons).map(r=>(n!==""?"@"+n+":":"")+o+":"+r))})}),i}let Be=!1;function Ys(e){return typeof e=="boolean"&&(Be=e),Be}function Ue(e){const t=typeof e=="string"?ii(e,!0,Be):e;if(t){const i=St(t.provider,t.prefix),n=t.name;return i.icons[n]||(i.missing.has(n)?null:void 0)}}function qs(e,t){const i=ii(e,!0,Be);if(!i)return!1;const n=St(i.provider,i.prefix);return Kl(n,i.name,t)}function Eo(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),Be&&!t&&!e.prefix){let o=!1;return Gs(e)&&(e.prefix="",Ws(e,(s,r)=>{r&&qs(s,r)&&(o=!0)})),o}const i=e.prefix;if(!yi({provider:t,prefix:i,name:"a"}))return!1;const n=St(t,i);return!!zn(n,e)}function So(e){return!!Ue(e)}function ec(e){const t=Ue(e);return t?{...ei,...t}:null}function ic(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((o,s)=>o.provider!==s.provider?o.provider.localeCompare(s.provider):o.prefix!==s.prefix?o.prefix.localeCompare(s.prefix):o.name.localeCompare(s.name));let n={provider:"",prefix:"",name:""};return e.forEach(o=>{if(n.name===o.name&&n.prefix===o.prefix&&n.provider===o.provider)return;n=o;const s=o.provider,r=o.prefix,l=o.name,a=i[s]||(i[s]=Object.create(null)),d=a[r]||(a[r]=St(s,r));let u;l in d.icons?u=t.loaded:r===""||d.missing.has(l)?u=t.missing:u=t.pending;const c={provider:s,prefix:r,name:l};u.push(c)}),t}function Xs(e,t){e.forEach(i=>{const n=i.loaderCallbacks;n&&(i.loaderCallbacks=n.filter(o=>o.id!==t))})}function nc(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const n=e.provider,o=e.prefix;t.forEach(s=>{const r=s.icons,l=r.pending.length;r.pending=r.pending.filter(a=>{if(a.prefix!==o)return!0;const d=a.name;if(e.icons[d])r.loaded.push({provider:n,prefix:o,name:d});else if(e.missing.has(d))r.missing.push({provider:n,prefix:o,name:d});else return i=!0,!0;return!1}),r.pending.length!==l&&(i||Xs([e],s.id),s.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),s.abort))})}))}let oc=0;function sc(e,t,i){const n=oc++,o=Xs.bind(null,i,n);if(!t.pending.length)return o;const s={id:n,icons:t,callback:e,abort:o};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(s)}),o}const bn=Object.create(null);function ko(e,t){bn[e]=t}function fn(e){return bn[e]||bn[""]}function rc(e,t=!0,i=!1){const n=[];return e.forEach(o=>{const s=typeof o=="string"?ii(o,t,i):o;s&&n.push(s)}),n}var ac={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function lc(e,t,i,n){const o=e.resources.length,s=e.random?Math.floor(Math.random()*o):e.index;let r;if(e.random){let C=e.resources.slice(0);for(r=[];C.length>1;){const O=Math.floor(Math.random()*C.length);r.push(C[O]),C=C.slice(0,O).concat(C.slice(O+1))}r=r.concat(C)}else r=e.resources.slice(s).concat(e.resources.slice(0,s));const l=Date.now();let a="pending",d=0,u,c=null,h=[],p=[];typeof n=="function"&&p.push(n);function f(){c&&(clearTimeout(c),c=null)}function w(){a==="pending"&&(a="aborted"),f(),h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function v(C,O){O&&(p=[]),typeof C=="function"&&p.push(C)}function b(){return{startTime:l,payload:t,status:a,queriesSent:d,queriesPending:h.length,subscribe:v,abort:w}}function y(){a="failed",p.forEach(C=>{C(void 0,u)})}function _(){h.forEach(C=>{C.status==="pending"&&(C.status="aborted")}),h=[]}function $(C,O,P){const S=O!=="success";switch(h=h.filter(E=>E!==C),a){case"pending":break;case"failed":if(S||!e.dataAfterTimeout)return;break;default:return}if(O==="abort"){u=P,y();return}if(S){u=P,h.length||(r.length?A():y());return}if(f(),_(),!e.random){const E=e.resources.indexOf(C.resource);E!==-1&&E!==e.index&&(e.index=E)}a="completed",p.forEach(E=>{E(P)})}function A(){if(a!=="pending")return;f();const C=r.shift();if(C===void 0){if(h.length){c=setTimeout(()=>{f(),a==="pending"&&(_(),y())},e.timeout);return}y();return}const O={status:"pending",resource:C,callback:(P,S)=>{$(O,P,S)}};h.push(O),d++,c=setTimeout(A,e.rotate),i(C,t,O.callback)}return setTimeout(A),b}function Js(e){const t={...ac,...e};let i=[];function n(){i=i.filter(r=>r().status==="pending")}function o(r,l,a){const d=lc(t,r,l,(u,c)=>{n(),a&&a(u,c)});return i.push(d),d}function s(r){return i.find(l=>r(l))||null}return{query:o,find:s,setIndex:r=>{t.index=r},getIndex:()=>t.index,cleanup:n}}function Dn(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Wi=Object.create(null),mi=["https://api.simplesvg.com","https://api.unisvg.com"],gn=[];for(;mi.length>0;)mi.length===1||Math.random()>.5?gn.push(mi.shift()):gn.push(mi.pop());Wi[""]=Dn({resources:["https://api.iconify.design"].concat(gn)});function To(e,t){const i=Dn(t);return i===null?!1:(Wi[e]=i,!0)}function Gi(e){return Wi[e]}function cc(){return Object.keys(Wi)}function Oo(){}const an=Object.create(null);function dc(e){if(!an[e]){const t=Gi(e);if(!t)return;const i=Js(t),n={config:t,redundancy:i};an[e]=n}return an[e]}function Qs(e,t,i){let n,o;if(typeof e=="string"){const s=fn(e);if(!s)return i(void 0,424),Oo;o=s.send;const r=dc(e);r&&(n=r.redundancy)}else{const s=Dn(e);if(s){n=Js(s);const r=e.resources?e.resources[0]:"",l=fn(r);l&&(o=l.send)}}return!n||!o?(i(void 0,424),Oo):n.query(t,o,i)().abort}const Io="iconify2",Ve="iconify",Zs=Ve+"-count",No=Ve+"-version",Ks=36e5,uc=168,hc=50;function vn(e,t){try{return e.getItem(t)}catch{}}function Fn(e,t,i){try{return e.setItem(t,i),!0}catch{}}function Po(e,t){try{e.removeItem(t)}catch{}}function yn(e,t){return Fn(e,Zs,t.toString())}function _n(e){return parseInt(vn(e,Zs))||0}const Dt={local:!0,session:!0},tr={local:new Set,session:new Set};let Hn=!1;function pc(e){Hn=e}let bi=typeof window>"u"?{}:window;function er(e){const t=e+"Storage";try{if(bi&&bi[t]&&typeof bi[t].length=="number")return bi[t]}catch{}Dt[e]=!1}function ir(e,t){const i=er(e);if(!i)return;const n=vn(i,No);if(n!==Io){if(n){const l=_n(i);for(let a=0;a<l;a++)Po(i,Ve+a.toString())}Fn(i,No,Io),yn(i,0);return}const o=Math.floor(Date.now()/Ks)-uc,s=l=>{const a=Ve+l.toString(),d=vn(i,a);if(typeof d=="string"){try{const u=JSON.parse(d);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>o&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,l))return!0}catch{}Po(i,a)}};let r=_n(i);for(let l=r-1;l>=0;l--)s(l)||(l===r-1?(r--,yn(i,r)):tr[e].add(l))}function nr(){if(!Hn){pc(!0);for(const e in Dt)ir(e,t=>{const i=t.data,n=t.provider,o=i.prefix,s=St(n,o);if(!zn(s,i).length)return!1;const r=i.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,r):r,!0})}}function mc(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const n in Dt)ir(n,o=>{const s=o.data;return o.provider!==e.provider||s.prefix!==e.prefix||s.lastModified===t});return!0}function bc(e,t){Hn||nr();function i(n){let o;if(!Dt[n]||!(o=er(n)))return;const s=tr[n];let r;if(s.size)s.delete(r=Array.from(s).shift());else if(r=_n(o),r>=hc||!yn(o,r+1))return;const l={cached:Math.floor(Date.now()/Ks),provider:e.provider,data:t};return Fn(o,Ve+r.toString(),JSON.stringify(l))}t.lastModified&&!mc(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function Mo(){}function fc(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,nc(e)}))}function gc(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:n}=e,o=e.iconsToLoad;delete e.iconsToLoad;let s;!o||!(s=fn(i))||s.prepare(i,n,o).forEach(r=>{Qs(i,r,l=>{if(typeof l!="object")r.icons.forEach(a=>{e.missing.add(a)});else try{const a=zn(e,l);if(!a.length)return;const d=e.pendingIcons;d&&a.forEach(u=>{d.delete(u)}),bc(e,l)}catch(a){console.error(a)}fc(e)})})}))}const Bn=(e,t)=>{const i=rc(e,!0,Ys()),n=ic(i);if(!n.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(n.loaded,n.missing,n.pending,Mo)}),()=>{a=!1}}const o=Object.create(null),s=[];let r,l;return n.pending.forEach(a=>{const{provider:d,prefix:u}=a;if(u===l&&d===r)return;r=d,l=u,s.push(St(d,u));const c=o[d]||(o[d]=Object.create(null));c[u]||(c[u]=[])}),n.pending.forEach(a=>{const{provider:d,prefix:u,name:c}=a,h=St(d,u),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(c)||(p.add(c),o[d][u].push(c))}),s.forEach(a=>{const{provider:d,prefix:u}=a;o[d][u].length&&gc(a,o[d][u])}),t?sc(t,n,s):Mo},vc=e=>new Promise((t,i)=>{const n=typeof e=="string"?ii(e,!0):e;if(!n){i(e);return}Bn([n||e],o=>{if(o.length&&n){const s=Ue(n);if(s){t({...ei,...s});return}}i(e)})});function yc(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function _c(e,t){const i=typeof e=="string"?ii(e,!0,!0):null;if(!i){const s=yc(e);return{value:e,data:s}}const n=Ue(i);if(n!==void 0||!i.prefix)return{value:e,name:i,data:n};const o=Bn([i],()=>t(e,i,Ue(i)));return{value:e,name:i,loading:o}}function ln(e){return e.hasAttribute("inline")}let or=!1;try{or=navigator.vendor.indexOf("Apple")===0}catch{}function wc(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(or||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const $c=/(-?[0-9.]*[0-9]+[0-9.]*)/g,xc=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function wn(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const n=e.split($c);if(n===null||!n.length)return e;const o=[];let s=n.shift(),r=xc.test(s);for(;;){if(r){const l=parseFloat(s);isNaN(l)?o.push(s):o.push(Math.ceil(l*t*i)/i)}else o.push(s);if(s=n.shift(),s===void 0)return o.join("");r=!r}}function Cc(e,t="defs"){let i="";const n=e.indexOf("<"+t);for(;n>=0;){const o=e.indexOf(">",n),s=e.indexOf("</"+t);if(o===-1||s===-1)break;const r=e.indexOf(">",s);if(r===-1)break;i+=e.slice(o+1,s).trim(),e=e.slice(0,n).trim()+e.slice(r+1)}return{defs:i,content:e}}function Ac(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Ec(e,t,i){const n=Cc(e);return Ac(n.defs,t+n.content+i)}const Sc=e=>e==="unset"||e==="undefined"||e==="none";function sr(e,t){const i={...ei,...e},n={...Us,...t},o={left:i.left,top:i.top,width:i.width,height:i.height};let s=i.body;[i,n].forEach(w=>{const v=[],b=w.hFlip,y=w.vFlip;let _=w.rotate;b?y?_+=2:(v.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),v.push("scale(-1 1)"),o.top=o.left=0):y&&(v.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),v.push("scale(1 -1)"),o.top=o.left=0);let $;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:$=o.height/2+o.top,v.unshift("rotate(90 "+$.toString()+" "+$.toString()+")");break;case 2:v.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:$=o.width/2+o.left,v.unshift("rotate(-90 "+$.toString()+" "+$.toString()+")");break}_%2===1&&(o.left!==o.top&&($=o.left,o.left=o.top,o.top=$),o.width!==o.height&&($=o.width,o.width=o.height,o.height=$)),v.length&&(s=Ec(s,'<g transform="'+v.join(" ")+'">',"</g>"))});const r=n.width,l=n.height,a=o.width,d=o.height;let u,c;r===null?(c=l===null?"1em":l==="auto"?d:l,u=wn(c,a/d)):(u=r==="auto"?a:r,c=l===null?wn(u,d/a):l==="auto"?d:l);const h={},p=(w,v)=>{Sc(v)||(h[w]=v.toString())};p("width",u),p("height",c);const f=[o.left,o.top,a,d];return h.viewBox=f.join(" "),{attributes:h,viewBox:f,body:s}}function Un(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const n in t)i+=" "+n+'="'+t[n]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function kc(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Tc(e){return"data:image/svg+xml,"+kc(e)}function rr(e){return'url("'+Tc(e)+'")'}const Oc=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ii=Oc();function Ic(e){Ii=e}function Nc(){return Ii}function Pc(e,t){const i=Gi(e);if(!i)return 0;let n;if(!i.maxURL)n=0;else{let o=0;i.resources.forEach(r=>{o=Math.max(o,r.length)});const s=t+".json?icons=";n=i.maxURL-o-i.path.length-s.length}return n}function Mc(e){return e===404}const Rc=(e,t,i)=>{const n=[],o=Pc(e,t),s="icons";let r={type:s,provider:e,prefix:t,icons:[]},l=0;return i.forEach((a,d)=>{l+=a.length+1,l>=o&&d>0&&(n.push(r),r={type:s,provider:e,prefix:t,icons:[]},l=a.length),r.icons.push(a)}),n.push(r),n};function Lc(e){if(typeof e=="string"){const t=Gi(e);if(t)return t.path}return"/"}const jc=(e,t,i)=>{if(!Ii){i("abort",424);return}let n=Lc(t.provider);switch(t.type){case"icons":{const s=t.prefix,r=t.icons.join(","),l=new URLSearchParams({icons:r});n+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;n+=s.slice(0,1)==="/"?s.slice(1):s;break}default:i("abort",400);return}let o=503;Ii(e+n).then(s=>{const r=s.status;if(r!==200){setTimeout(()=>{i(Mc(r)?"abort":"next",r)});return}return o=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?i("abort",s):i("next",o)});return}setTimeout(()=>{i("success",s)})}).catch(()=>{i("next",o)})},zc={prepare:Rc,send:jc};function Ro(e,t){switch(e){case"local":case"session":Dt[e]=t;break;case"all":for(const i in Dt)Dt[i]=t;break}}const cn="data-style";let ar="";function Dc(e){ar=e}function Lo(e,t){let i=Array.from(e.childNodes).find(n=>n.hasAttribute&&n.hasAttribute(cn));i||(i=document.createElement("style"),i.setAttribute(cn,cn),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+ar}function lr(){ko("",zc),Ys(!0);let e;try{e=window}catch{}if(e){if(nr(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Eo(n))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const n="IconifyProviders["+i+"] is invalid.";try{const o=t[i];if(typeof o!="object"||!o||o.resources===void 0)continue;To(i,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:t=>Ro(t,!0),disableCache:t=>Ro(t,!1),iconLoaded:So,iconExists:So,getIcon:ec,listIcons:tc,addIcon:qs,addCollection:Eo,calculateSize:wn,buildIcon:sr,iconToHTML:Un,svgToURL:rr,loadIcons:Bn,loadIcon:vc,addAPIProvider:To,appendCustomStyle:Dc,_api:{getAPIConfig:Gi,setAPIModule:ko,sendAPIQuery:Qs,setFetch:Ic,getFetch:Nc,listAPIProviders:cc}}}const $n={"background-color":"currentColor"},cr={"background-color":"transparent"},jo={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},zo={"-webkit-mask":$n,mask:$n,background:cr};for(const e in zo){const t=zo[e];for(const i in jo)t[e+"-"+i]=jo[i]}function Do(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Fc(e,t,i){const n=document.createElement("span");let o=e.body;o.indexOf("<a")!==-1&&(o+="<!-- "+Date.now()+" -->");const s=e.attributes,r=Un(o,{...s,width:t.width+"",height:t.height+""}),l=rr(r),a=n.style,d={"--svg":l,width:Do(s.width),height:Do(s.height),...i?$n:cr};for(const u in d)a.setProperty(u,d[u]);return n}let Re;function Hc(){try{Re=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Re=null}}function Bc(e){return Re===void 0&&Hc(),Re?Re.createHTML(e):e}function Uc(e){const t=document.createElement("span"),i=e.attributes;let n="";i.width||(n="width: inherit;"),i.height||(n+="height: inherit;"),n&&(i.style=n);const o=Un(e.body,i);return t.innerHTML=Bc(o),t.firstChild}function xn(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function Fo(e,t){const i=t.icon.data,n=t.customisations,o=sr(i,n);n.preserveAspectRatio&&(o.attributes.preserveAspectRatio=n.preserveAspectRatio);const s=t.renderedMode;let r;switch(s){case"svg":r=Uc(o);break;default:r=Fc(o,{...ei,...i},s==="mask")}const l=xn(e);l?r.tagName==="SPAN"&&l.tagName===r.tagName?l.setAttribute("style",r.getAttribute("style")):e.replaceChild(r,l):e.appendChild(r)}function Ho(e,t,i){const n=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:n}}function Vc(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const n=t.get(e);if(n)return n;const o=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends i{constructor(){super(),Mt(this,"_shadowRoot"),Mt(this,"_initialised",!1),Mt(this,"_state"),Mt(this,"_checkQueued",!1),Mt(this,"_connected",!1),Mt(this,"_observer",null),Mt(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),a=ln(this);Lo(l,a),this._state=Ho({value:""},a),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return o.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const a=ln(this),d=this._state;a!==d.inline&&(d.inline=a,Lo(this._shadowRoot,a));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return ln(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const a=this._shadowRoot;if(l.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}Fo(a,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,a=this.getAttribute("icon");if(a!==l.icon.value){this._iconChanged(a);return}if(!l.rendered||!this._visible)return;const d=this.getAttribute("mode"),u=Co(this);(l.attrMode!==d||Yl(l.customisations,u)||!xn(this._shadowRoot))&&this._renderIcon(l.icon,u,d)}_iconChanged(l){const a=_c(l,(d,u,c)=>{const h=this._state;if(h.rendered||this.getAttribute("icon")!==d)return;const p={value:d,name:u,data:c};p.data?this._gotIconData(p):h.icon=p});a.data?this._gotIconData(a):this._state=Ho(a,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=xn(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Co(this),this.getAttribute("mode"))}_renderIcon(l,a,d){const u=wc(l.data.body,d),c=this._state.inline;Fo(this._shadowRoot,this._state={rendered:!0,icon:l,inline:c,customisations:a,attrMode:d,renderedMode:u})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const a=l.some(d=>d.isIntersecting);a!==this._visible&&(this._visible=a,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};o.forEach(l=>{l in s.prototype||Object.defineProperty(s.prototype,l,{get:function(){return this.getAttribute(l)},set:function(a){a!==null?this.setAttribute(l,a):this.removeAttribute(l)}})});const r=lr();for(const l in r)s[l]=s.prototype[l]=r[l];return t.define(e,s),s}Vc()||lr();const Wc=I`
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
`,Gc=I`
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
`,Tt={scrollbar:Wc,globalStyles:Gc},dr=class k{static set config(t){this._config={...k._config,...t}}static get config(){return k._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=Tt.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){k.init()}static init(){k.addGlobalStyles(),k.defineCustomElement("bim-button",Zc),k.defineCustomElement("bim-checkbox",ge),k.defineCustomElement("bim-color-input",Yt),k.defineCustomElement("bim-context-menu",An),k.defineCustomElement("bim-dropdown",vt),k.defineCustomElement("bim-grid",Wn),k.defineCustomElement("bim-icon",rd),k.defineCustomElement("bim-input",oi),k.defineCustomElement("bim-label",ye),k.defineCustomElement("bim-number-input",Z),k.defineCustomElement("bim-option",H),k.defineCustomElement("bim-panel",qt),k.defineCustomElement("bim-panel-section",_e),k.defineCustomElement("bim-selector",we),k.defineCustomElement("bim-table",st),k.defineCustomElement("bim-tabs",Jt),k.defineCustomElement("bim-tab",et),k.defineCustomElement("bim-table-cell",Ar),k.defineCustomElement("bim-table-children",Sr),k.defineCustomElement("bim-table-group",Tr),k.defineCustomElement("bim-table-row",Xt),k.defineCustomElement("bim-text-input",rt),k.defineCustomElement("bim-toolbar",Zi),k.defineCustomElement("bim-toolbar-group",Ji),k.defineCustomElement("bim-toolbar-section",Ce),k.defineCustomElement("bim-viewport",Fr)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let n=0;n<10;n++){const o=Math.floor(Math.random()*t.length);i+=t.charAt(o)}return i}};dr._config={sectionLabelOnVerticalToolbar:!1};let Q=dr;class z extends T{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const n of t)this.elements.add(n);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const n of i)n.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const n=i[0];if(!n.isIntersecting)return;const o=n.target;t.unobserve(o);const s=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][s];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,n=[...this.elements][i];n&&t.observe(n)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const n=document.createDocumentFragment();if(t.length===0)return ce(t(),n),n.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let o=i;const s=t,r=a=>(o={...o,...a},ce(s(o,r),n),o);r(i);const l=()=>o;return[n.firstElementChild,r,l]}}const We=(e,t={},i=!0)=>{let n={};for(const o of e.children){const s=o,r=s.getAttribute("name")||s.getAttribute("label"),l=t[r];if(r){if("value"in s&&typeof s.value<"u"&&s.value!==null){const a=s.value;if(typeof a=="object"&&!Array.isArray(a)&&Object.keys(a).length===0)continue;n[r]=l?l(s.value):s.value}else if(i){const a=We(s,t);if(Object.keys(a).length===0)continue;n[r]=l?l(a):a}}else i&&(n={...n,...We(s,t)})}return n},Yi=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e,Yc=[">=","<=","=",">","<","?","/","#"];function Bo(e){const t=Yc.find(r=>e.split(r).length===2),i=e.split(t).map(r=>r.trim()),[n,o]=i,s=o.startsWith("'")&&o.endsWith("'")?o.replace(/'/g,""):Yi(o);return{key:n,condition:t,value:s}}const Cn=e=>{try{const t=[],i=e.split(/&(?![^()]*\))/).map(n=>n.trim());for(const n of i){const o=!n.startsWith("(")&&!n.endsWith(")"),s=n.startsWith("(")&&n.endsWith(")");if(o){const r=Bo(n);t.push(r)}if(s){const r={operator:"&",queries:n.replace(/^(\()|(\))$/g,"").split("&").map(l=>l.trim()).map((l,a)=>{const d=Bo(l);return a>0&&(d.operator="&"),d})};t.push(r)}}return t}catch{return null}},Uo=(e,t,i)=>{let n=!1;switch(t){case"=":n=e===i;break;case"?":n=String(e).includes(String(i));break;case"<":(typeof e=="number"||typeof i=="number")&&(n=e<i);break;case"<=":(typeof e=="number"||typeof i=="number")&&(n=e<=i);break;case">":(typeof e=="number"||typeof i=="number")&&(n=e>i);break;case">=":(typeof e=="number"||typeof i=="number")&&(n=e>=i);break;case"/":n=String(e).startsWith(String(i));break}return n};var qc=Object.defineProperty,Xc=Object.getOwnPropertyDescriptor,ur=(e,t,i,n)=>{for(var o=Xc(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&qc(t,i,o),o},F;const Vn=(F=class extends T{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(e){this._placement=e,this.updatePosition()}static removeMenus(){for(const e of F.menus)e instanceof F&&(e.visible=!1);F.dialog.close(),F.dialog.remove()}get visible(){return this._visible}set visible(e){var t;this._visible=e,e?(F.dialog.parentElement||document.body.append(F.dialog),this._previousContainer=this.parentElement,F.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,F.dialog.append(this),F.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((t=this._previousContainer)==null||t.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const e=this.placement??"right",t=await Ns(this._previousContainer,this,{placement:e,middleware:[ys(10),Is(),Os(),Ts({padding:5})]}),{x:i,y:n}=t;this.style.left=`${i}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),F.menus.push(this)}render(){return m` <slot></slot> `}},F.styles=[Tt.scrollbar,I`
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
    ></dialog>`),F.menus=[],F);ur([g({type:String,reflect:!0})],Vn.prototype,"placement");ur([g({type:Boolean,reflect:!0})],Vn.prototype,"visible");let An=Vn;var Jc=Object.defineProperty,Qc=Object.getOwnPropertyDescriptor,lt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Qc(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Jc(t,i,o),o},Te;const nt=(Te=class extends T{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=de(),this._tooltip=de(),this._mouseLeave=!1,this.onClick=e=>{e.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const e=this._contextMenu;if(e){const t=this.getAttribute("data-context-group");t&&e.setAttribute("data-context-group",t),this.closeNestedContexts();const i=Q.newRandomId();for(const n of e.children)n instanceof Te&&n.setAttribute("data-context-group",i);e.visible=!0}},this.mouseLeave=!0}set loading(e){if(this._loading=e,e)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=e,this.icon="eos-icons:loading";else{const{disabled:t,icon:i}=this._stateBeforeLoading;this.disabled=t,this.icon=i}}get loading(){return this._loading}set mouseLeave(e){this._mouseLeave=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&Ns(e,t,{placement:"bottom",middleware:[ys(10),Is(),Os(),Ts({padding:5})]}).then(i=>{const{x:n,y:o}=i;Object.assign(t.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}closeNestedContexts(){const e=this.getAttribute("data-context-group");if(e)for(const t of An.dialog.children){const i=t.getAttribute("data-context-group");if(t instanceof An&&i===e){t.visible=!1,t.removeAttribute("data-context-group");for(const n of t.children)n instanceof Te&&(n.closeNestedContexts(),n.removeAttribute("data-context-group"))}}}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const e=m`
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
  `,Te);lt([g({type:String,reflect:!0})],nt.prototype,"label",2);lt([g({type:Boolean,attribute:"label-hidden",reflect:!0})],nt.prototype,"labelHidden",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"active",2);lt([g({type:Boolean,reflect:!0,attribute:"disabled"})],nt.prototype,"disabled",2);lt([g({type:String,reflect:!0})],nt.prototype,"icon",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"vertical",2);lt([g({type:Number,attribute:"tooltip-time",reflect:!0})],nt.prototype,"tooltipTime",2);lt([g({type:Boolean,attribute:"tooltip-visible",reflect:!0})],nt.prototype,"tooltipVisible",2);lt([g({type:String,attribute:"tooltip-title",reflect:!0})],nt.prototype,"tooltipTitle",2);lt([g({type:String,attribute:"tooltip-text",reflect:!0})],nt.prototype,"tooltipText",2);lt([g({type:Boolean,reflect:!0})],nt.prototype,"loading",1);let Zc=nt;var Kc=Object.defineProperty,ni=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Kc(t,i,o),o};const hr=class extends T{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(e){e.stopPropagation(),this.checked=e.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
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
  `;let ge=hr;ni([g({type:String,reflect:!0})],ge.prototype,"icon");ni([g({type:String,reflect:!0})],ge.prototype,"name");ni([g({type:String,reflect:!0})],ge.prototype,"label");ni([g({type:Boolean,reflect:!0})],ge.prototype,"checked");ni([g({type:Boolean,reflect:!0})],ge.prototype,"inverted");var td=Object.defineProperty,ve=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&td(t,i,o),o};const pr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=de(),this._textInput=de(),this.onValueChange=new Event("input"),this.onOpacityInput=e=>{const t=e.target;this.opacity=t.value,this.dispatchEvent(this.onValueChange)}}set value(e){const{color:t,opacity:i}=e;this.color=t,i&&(this.opacity=i)}get value(){const e={color:this.color};return this.opacity&&(e.opacity=this.opacity),e}onColorInput(e){e.stopPropagation();const{value:t}=this._colorInput;t&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}onTextInput(e){e.stopPropagation();const{value:t}=this._textInput;if(!t)return;const{value:i}=t;let n=i.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),t.value=n.slice(0,7),t.value.length===7&&(this.color=t.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:e}=this._colorInput;e&&e.click()}render(){return m`
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
  `;let Yt=pr;ve([g({type:String,reflect:!0})],Yt.prototype,"name");ve([g({type:String,reflect:!0})],Yt.prototype,"label");ve([g({type:String,reflect:!0})],Yt.prototype,"icon");ve([g({type:Boolean,reflect:!0})],Yt.prototype,"vertical");ve([g({type:Number,reflect:!0})],Yt.prototype,"opacity");ve([g({type:String,reflect:!0})],Yt.prototype,"color");var ed=Object.defineProperty,id=Object.getOwnPropertyDescriptor,Ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?id(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ed(t,i,o),o};const mr=class extends T{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?Yi(this.label):this.label}set value(e){this._value=e}render(){return m`
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
  `;let H=mr;Ot([g({type:String,reflect:!0})],H.prototype,"img",2);Ot([g({type:String,reflect:!0})],H.prototype,"label",2);Ot([g({type:String,reflect:!0})],H.prototype,"icon",2);Ot([g({type:Boolean,reflect:!0})],H.prototype,"checked",2);Ot([g({type:Boolean,reflect:!0})],H.prototype,"checkbox",2);Ot([g({type:Boolean,attribute:"no-mark",reflect:!0})],H.prototype,"noMark",2);Ot([g({converter:{fromAttribute(e){return e&&Yi(e)}}})],H.prototype,"value",1);Ot([g({type:Boolean,reflect:!0})],H.prototype,"vertical",2);var nd=Object.defineProperty,od=Object.getOwnPropertyDescriptor,It=(e,t,i,n)=>{for(var o=n>1?void 0:n?od(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&nd(t,i,o),o};const br=class extends z{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=de(),this.onOptionClick=e=>{const t=e.target,i=this._value.has(t);if(!this.multiple&&!this.required&&!i)this._value=new Set([t]);else if(!this.multiple&&!this.required&&i)this._value=new Set([]);else if(!this.multiple&&this.required&&!i)this._value=new Set([t]);else if(this.multiple&&!this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&!this.required&&i){const n=[...this._value].filter(o=>o!==t);this._value=new Set(n)}else if(this.multiple&&this.required&&!i)this._value=new Set([...this._value,t]);else if(this.multiple&&this.required&&i){const n=[...this._value].filter(s=>s!==t),o=new Set(n);o.size!==0&&(this._value=o)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(e){if(e){const{value:t}=this._contextMenu;if(!t)return;for(const i of this.elements)t.append(i);this._visible=!0}else{for(const t of this.elements)this.append(t);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(e){if(this.required&&Object.keys(e).length===0)return;const t=new Set;for(const i of e){const n=this.findOption(i);if(n&&(t.add(n),!this.multiple&&Object.keys(e).length===1))break}this._value=t,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof H&&e.checked).map(e=>e.value)}get _options(){const e=new Set([...this.elements]);for(const t of this.children)t instanceof H&&e.add(t);return[...e]}onSlotChange(e){const t=e.target.assignedElements();this.observe(t);const i=new Set;for(const n of this.elements){if(!(n instanceof H)){n.remove();continue}n.checked&&i.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=i}updateOptionsState(){for(const e of this._options)e instanceof H&&(e.checked=this._value.has(e))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}render(){let e,t,i;if(this._value.size===0)e="Select an option...";else if(this._value.size===1){const n=[...this._value][0];e=(n==null?void 0:n.label)||(n==null?void 0:n.value),t=n==null?void 0:n.img,i=n==null?void 0:n.icon}else e=`Multiple (${this._value.size})`;return m`
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
    `}};br.styles=[Tt.scrollbar,I`
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
    `];let vt=br;It([g({type:String,reflect:!0})],vt.prototype,"name",2);It([g({type:String,reflect:!0})],vt.prototype,"icon",2);It([g({type:String,reflect:!0})],vt.prototype,"label",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"multiple",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"required",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"vertical",2);It([g({type:Boolean,reflect:!0})],vt.prototype,"visible",1);It([fe()],vt.prototype,"_value",2);var sd=Object.defineProperty,fr=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&sd(t,i,o),o};const gr=class extends T{constructor(){super(...arguments),this.floating=!1,this._layouts={},this._updateFunctions={}}set layouts(e){this._layouts=e;const t={};for(const[i,n]of Object.entries(e))for(const o in n.elements)t[i]||(t[i]={}),t[i][o]=s=>{const r=this._updateFunctions[i];if(!r)return;const l=r[o];l&&l(s)};this.updateComponent=t}get layouts(){return this._layouts}getLayoutAreas(e){const{template:t}=e,i=t.split(`
`).map(n=>n.trim()).map(n=>n.split('"')[1]).filter(n=>n!==void 0).flatMap(n=>n.split(/\s+/));return[...new Set(i)].filter(n=>n!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this._updateFunctions={},this.layouts[this.layout]){this.innerHTML="",this._updateFunctions[this.layout]={};const e=this._updateFunctions[this.layout],t=this.layouts[this.layout],i=this.getLayoutAreas(t).map(n=>{const o=t.elements[n];if(!o)return null;if(o instanceof HTMLElement)return o.style.gridArea=n,o;if("template"in o){const{template:s,initialState:r}=o,[l,a]=z.create(s,r);return l.style.gridArea=n,e[n]=a,l}return z.create(o)}).filter(n=>!!n);this.style.gridTemplate=t.template,this.append(...i),this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange)}}else this._updateFunctions={},this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};gr.styles=I`
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
  `;let Wn=gr;fr([g({type:Boolean,reflect:!0})],Wn.prototype,"floating");fr([g({type:String,reflect:!0})],Wn.prototype,"layout");const En=class extends T{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};En.styles=I`
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
  `,En.properties={icon:{type:String}};let rd=En;var ad=Object.defineProperty,qi=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&ad(t,i,o),o};const vr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const e={};for(const t of this.children){const i=t;"value"in i?e[i.name||i.label]=i.value:"checked"in i&&(e[i.name||i.label]=i.checked)}return e}set value(e){const t=[...this.children];for(const i in e){const n=t.find(r=>{const l=r;return l.name===i||l.label===i});if(!n)continue;const o=n,s=e[i];typeof s=="boolean"?o.checked=s:o.value=s}}render(){return m`
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
  `;let oi=vr;qi([g({type:String,reflect:!0})],oi.prototype,"name");qi([g({type:String,reflect:!0})],oi.prototype,"label");qi([g({type:String,reflect:!0})],oi.prototype,"icon");qi([g({type:Boolean,reflect:!0})],oi.prototype,"vertical");var ld=Object.defineProperty,si=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&ld(t,i,o),o};const yr=class extends T{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?Yi(this.textContent):this.textContent}render(){return m`
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
  `;let ye=yr;si([g({type:String,reflect:!0})],ye.prototype,"img");si([g({type:Boolean,attribute:"label-hidden",reflect:!0})],ye.prototype,"labelHidden");si([g({type:String,reflect:!0})],ye.prototype,"icon");si([g({type:Boolean,attribute:"icon-hidden",reflect:!0})],ye.prototype,"iconHidden");si([g({type:Boolean,reflect:!0})],ye.prototype,"vertical");var cd=Object.defineProperty,dd=Object.getOwnPropertyDescriptor,ot=(e,t,i,n)=>{for(var o=n>1?void 0:n?dd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&cd(t,i,o),o};const _r=class extends T{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=de(),this.onValueChange=new Event("change")}set value(e){this.setValue(e.toString())}get value(){return this._value}onChange(e){e.stopPropagation();const{value:t}=this._input;t&&this.setValue(t.value)}setValue(e){const{value:t}=this._input;let i=e;if(i=i.replace(/[^0-9.-]/g,""),i=i.replace(/(\..*)\./g,"$1"),i.endsWith(".")||(i.lastIndexOf("-")>0&&(i=i[0]+i.substring(1).replace(/-/g,"")),i==="-"||i==="-0"))return;let n=Number(i);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,t&&(t.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:e}=this._input;e&&Number.isNaN(Number(e.value))&&(e.value=this.value.toString())}onSliderMouseDown(e){document.body.style.cursor="w-resize";const{clientX:t}=e,i=this.value;let n=!1;const o=l=>{var a;n=!0;const{clientX:d}=l,u=this.step??1,c=((a=u.toString().split(".")[1])==null?void 0:a.length)||0,h=1/(this.sensitivity??1),p=(d-t)/h;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const f=i+p*u;this.setValue(f.toFixed(c))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},r=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",r)}onFocus(e){e.stopPropagation();const t=i=>{i.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",t))};window.addEventListener("keydown",t)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:e}=this._input;e&&e.focus()}render(){const e=m`
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
  `;let Z=_r;ot([g({type:String,reflect:!0})],Z.prototype,"name",2);ot([g({type:String,reflect:!0})],Z.prototype,"icon",2);ot([g({type:String,reflect:!0})],Z.prototype,"label",2);ot([g({type:String,reflect:!0})],Z.prototype,"pref",2);ot([g({type:Number,reflect:!0})],Z.prototype,"min",2);ot([g({type:Number,reflect:!0})],Z.prototype,"value",1);ot([g({type:Number,reflect:!0})],Z.prototype,"step",2);ot([g({type:Number,reflect:!0})],Z.prototype,"sensitivity",2);ot([g({type:Number,reflect:!0})],Z.prototype,"max",2);ot([g({type:String,reflect:!0})],Z.prototype,"suffix",2);ot([g({type:Boolean,reflect:!0})],Z.prototype,"vertical",2);ot([g({type:Boolean,reflect:!0})],Z.prototype,"slider",2);var ud=Object.defineProperty,hd=Object.getOwnPropertyDescriptor,ri=(e,t,i,n)=>{for(var o=n>1?void 0:n?hd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&ud(t,i,o),o};const wr=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(e){this._hidden=e,this.activationButton.active=!e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return We(this,this.valueTransform)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
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
    `];let qt=wr;ri([g({type:String,reflect:!0})],qt.prototype,"icon",2);ri([g({type:String,reflect:!0})],qt.prototype,"name",2);ri([g({type:String,reflect:!0})],qt.prototype,"label",2);ri([g({type:Boolean,reflect:!0})],qt.prototype,"hidden",1);ri([g({type:Boolean,attribute:"header-hidden",reflect:!0})],qt.prototype,"headerHidden",2);var pd=Object.defineProperty,ai=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&pd(t,i,o),o};const $r=class extends T{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const e=this.parentElement;let t;return e instanceof qt&&(t=e.valueTransform),Object.values(this.valueTransform).length!==0&&(t=this.valueTransform),We(this,t)}set value(e){const t=[...this.children];for(const i in e){const n=t.find(s=>{const r=s;return r.name===i||r.label===i});if(!n)continue;const o=n;o.value=e[i]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const e=this.label||this.icon||this.name||this.fixed,t=m`<svg
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
    `];let _e=$r;ai([g({type:String,reflect:!0})],_e.prototype,"icon");ai([g({type:String,reflect:!0})],_e.prototype,"label");ai([g({type:String,reflect:!0})],_e.prototype,"name");ai([g({type:Boolean,reflect:!0})],_e.prototype,"fixed");ai([g({type:Boolean,reflect:!0})],_e.prototype,"collapsed");var md=Object.defineProperty,li=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&md(t,i,o),o};const xr=class extends T{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=e=>{this._value=e.target,this.dispatchEvent(this.onValueChange);for(const t of this.children)t instanceof H&&(t.checked=t===e.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(e){const t=this.findOption(e);if(t){for(const i of this._options)i.checked=i===t;this._value=t,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(e){const t=e.target.assignedElements();for(const i of t)i instanceof H&&(i.noMark=!0,i.removeEventListener("click",this.onOptionClick),i.addEventListener("click",this.onOptionClick))}findOption(e){return this._options.find(t=>t instanceof H?t.label===e||t.value===e:!1)}firstUpdated(){const e=[...this.children].find(t=>t instanceof H&&t.checked);e&&(this._value=e)}render(){return m`
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
  `;let we=xr;li([g({type:String,reflect:!0})],we.prototype,"name");li([g({type:String,reflect:!0})],we.prototype,"icon");li([g({type:String,reflect:!0})],we.prototype,"label");li([g({type:Boolean,reflect:!0})],we.prototype,"vertical");li([fe()],we.prototype,"_value");const bd=()=>m`
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
  `,fd=()=>m`
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
  `;var gd=Object.defineProperty,vd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&gd(t,i,o),o};const Cr=class extends T{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
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
  `;let Ar=Cr;vd([g({type:String,reflect:!0})],Ar.prototype,"column");var yd=Object.defineProperty,_d=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&yd(t,i,o),o};const Er=class extends T{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(e,t=!1){for(const i of this._groups)i.childrenHidden=typeof e>"u"?!i.childrenHidden:!e,t&&i.toggleChildren(e,t)}render(){return this._groups=[],m`
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
  `;let Sr=Er;_d([g({type:Array,attribute:!1})],Sr.prototype,"data");var wd=Object.defineProperty,$d=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&wd(t,i,o),o};const kr=class extends T{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(e,t=!1){this._children&&(this.childrenHidden=typeof e>"u"?!this.childrenHidden:!e,t&&this._children.toggleGroups(e,t))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const e=this.table.getGroupIndentation(this.data)??0,t=m`
      ${this.table.noIndentation?null:m`
            <style>
              .branch-vertical {
                left: ${e+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,i=document.createDocumentFragment();ce(t,i);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${e-1+(this.table.selectableRows?2.05:.5625)}rem`);let o=null;if(!this.table.noIndentation){const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","9.5"),l.setAttribute("width","7.5"),l.setAttribute("viewBox","0 0 4.6666672 7.3333333");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),l.append(a);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("height","6.5"),d.setAttribute("width","9.5"),d.setAttribute("viewBox","0 0 5.9111118 5.0175439");const u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),d.append(u),o=document.createElement("div"),o.addEventListener("click",c=>{c.stopPropagation(),this.toggleChildren()}),o.classList.add("caret"),o.style.left=`${(this.table.selectableRows?1.5:.125)+e}rem`,this.childrenHidden?o.append(l):o.append(d)}const s=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&s.append(i),s.table=this.table,s.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:s}})),o&&this.data.children&&s.append(o),e!==0&&(!this.data.children||this.childrenHidden)&&n&&s.append(n);let r;if(this.data.children){r=document.createElement("bim-table-children"),this._children=r,r.table=this.table,r.data=this.data.children;const l=document.createDocumentFragment();ce(t,l),r.append(l)}return m`
      <div class="parent">${s} ${this.childrenHidden?null:r}</div>
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
  `;let Tr=kr;$d([g({type:Boolean,attribute:"children-hidden",reflect:!0})],Tr.prototype,"childrenHidden");var xd=Object.defineProperty,$e=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&xd(t,i,o),o};const Or=class extends T{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(e=>{this._intersecting=e[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.name)}get _columnWidths(){return this.columns.filter(e=>!this.hiddenColumns.includes(e.name)).map(e=>e.width)}get _isSelected(){var e;return(e=this.table)==null?void 0:e.selection.has(this.data)}onSelectionChange(e){if(!this.table)return;const t=e.target;this.selected=t.value,t.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const e=this.table.getRowIndentation(this.data)??0,t=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,i=[];for(const n in t){if(this.hiddenColumns.includes(n))continue;const o=t[n];let s;if(typeof o=="string"||typeof o=="boolean"||typeof o=="number"?(s=document.createElement("bim-label"),s.textContent=String(o)):o instanceof HTMLElement?s=o:(s=document.createDocumentFragment(),ce(o,s)),!s)continue;const r=document.createElement("bim-table-cell");r.append(s),r.column=n,this._columnNames.indexOf(n)===0&&(r.style.marginLeft=`${this.table.noIndentation?0:e+.75}rem`);const l=this._columnNames.indexOf(n);r.setAttribute("data-column-index",String(l)),r.toggleAttribute("data-no-indentation",l===0&&this.table.noIndentation),r.toggleAttribute("data-cell-header",this.isHeader),r.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:r}})),i.push(r)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,m`
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
  `;let Xt=Or;$e([g({type:Boolean,reflect:!0})],Xt.prototype,"selected");$e([g({attribute:!1})],Xt.prototype,"columns");$e([g({attribute:!1})],Xt.prototype,"hiddenColumns");$e([g({attribute:!1})],Xt.prototype,"data");$e([g({type:Boolean,attribute:"is-header",reflect:!0})],Xt.prototype,"isHeader");$e([fe()],Xt.prototype,"_intersecting");var Cd=Object.defineProperty,Ad=Object.getOwnPropertyDescriptor,ct=(e,t,i,n)=>{for(var o=n>1?void 0:n?Ad(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Cd(t,i,o),o};const Ir=class extends T{constructor(){super(...arguments),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(e,t)=>Object.values(t.data).some(i=>String(i).toLowerCase().includes(e.toLowerCase())),this._queryFilterFunction=(e,t)=>{let i=!1;const n=Cn(e)??[];for(const o of n){if("queries"in o){i=!1;break}const{condition:s,value:r}=o;let{key:l}=o;if(l.startsWith("[")&&l.endsWith("]")){const a=l.replace("[","").replace("]","");l=a,i=Object.keys(t.data).filter(d=>d.includes(a)).map(d=>Uo(t.data[d],s,r)).some(d=>d)}else i=Uo(t.data[l],s,r);if(!i)break}return i}}set columns(e){const t=[];for(const i of e){const n=typeof i=="string"?{name:i,width:`minmax(${this.minColWidth}, 1fr)`}:i;t.push(n)}this._columns=t,this.computeMissingColumns(this.data),this.dispatchEvent(new Event("columnschange"))}get columns(){return this._columns}get _headerRowData(){const e={};for(const t of this.columns){const{name:i}=t;e[i]=String(i)}return e}get value(){return this._filteredData}set queryString(e){this.toggleAttribute("data-processing",!0),this._queryString=e&&e.trim()!==""?e.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(e){this._data=e,this.updateFilteredData(),this.computeMissingColumns(e)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(e=>{setTimeout(()=>{e(this.data)})})}set hiddenColumns(e){this._hiddenColumns=e,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Cn(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(e){let t=!1;for(const i of e){const{children:n,data:o}=i;for(const s in o)this._columns.map(r=>typeof r=="string"?r:r.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),t=!0);if(n){const s=this.computeMissingColumns(n);s&&!t&&(t=s)}}return t}generateText(e="comma",t=this.value,i="",n=!0){const o=this._textDelimiters[e];let s="";const r=this.columns.map(l=>l.name);if(n){this.indentationInText&&(s+=`Indentation${o}`);const l=`${r.join(o)}
`;s+=l}for(const[l,a]of t.entries()){const{data:d,children:u}=a,c=this.indentationInText?`${i}${l+1}${o}`:"",h=r.map(f=>d[f]??""),p=`${c}${h.join(o)}
`;s+=p,u&&(s+=this.generateText(e,a.children,`${i}${l+1}.`,!1))}return s}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(e){const t={};for(const n of Object.keys(this.dataTransform)){const o=this.columns.find(s=>s.name===n);o&&o.forceDataTransform&&(n in e||(e[n]=""))}const i=e;for(const n in i){const o=this.dataTransform[n];o?t[n]=o(i[n],e):t[n]=e[n]}return t}downloadData(e="BIM Table Data",t="json"){let i=null;if(t==="json"&&(i=new File([JSON.stringify(this.value,void 0,2)],`${e}.json`)),t==="csv"&&(i=new File([this.csv],`${e}.csv`)),t==="tsv"&&(i=new File([this.tsv],`${e}.tsv`)),!i)return;const n=document.createElement("a");n.href=URL.createObjectURL(i),n.download=i.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(e,t=this.value,i=0){for(const n of t){if(n.data===e)return i;if(n.children){const o=this.getRowIndentation(e,n.children,i+1);if(o!==null)return o}}return null}getGroupIndentation(e,t=this.value,i=0){for(const n of t){if(n===e)return i;if(n.children){const o=this.getGroupIndentation(e,n.children,i+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(e=!1){if(this._filteredData.length!==0&&!e||!this.loadFunction)return!1;this.loading=!0;try{const t=await this.loadFunction();return this.data=t,this.loading=!1,this._errorLoading=!1,!0}catch(t){if(this.loading=!1,this._filteredData.length!==0)return!1;const i=this.querySelector("[slot='error-loading']"),n=i==null?void 0:i.querySelector("[data-table-element='error-message']");return t instanceof Error&&n&&t.message.trim()!==""&&(n.textContent=t.message),this._errorLoading=!0,!1}}filter(e,t=this.filterFunction??this._stringFilterFunction,i=this.data){const n=[];for(const o of i)if(t(e,o)){if(this.preserveStructureOnFilter){const s={data:o.data};if(o.children){const r=this.filter(e,t,o.children);r.length&&(s.children=r)}n.push(s)}else if(n.push({data:o.data}),o.children){const s=this.filter(e,t,o.children);n.push(...s)}}else if(o.children){const s=this.filter(e,t,o.children);this.preserveStructureOnFilter&&s.length?n.push({data:o.data,children:s}):n.push(...s)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return bd();if(this._errorLoading)return m`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return m`<slot name="missing-data"></slot>`;const e=document.createElement("bim-table-row");e.table=this,e.isHeader=!0,e.data=this._headerRowData,e.style.gridArea="Header",e.style.position="sticky",e.style.top="0",e.style.zIndex="5";const t=document.createElement("bim-table-children");return t.table=this,t.data=this.value,t.style.gridArea="Body",t.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:e} ${fd()}
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
    `];let st=Ir;ct([fe()],st.prototype,"_filteredData",2);ct([g({type:Boolean,attribute:"headers-hidden",reflect:!0})],st.prototype,"headersHidden",2);ct([g({type:String,attribute:"min-col-width",reflect:!0})],st.prototype,"minColWidth",2);ct([g({type:Array,attribute:!1})],st.prototype,"columns",1);ct([g({type:Array,attribute:!1})],st.prototype,"data",1);ct([g({type:Boolean,reflect:!0})],st.prototype,"expanded",2);ct([g({type:Boolean,reflect:!0,attribute:"selectable-rows"})],st.prototype,"selectableRows",2);ct([g({attribute:!1})],st.prototype,"selection",2);ct([g({type:Boolean,attribute:"no-indentation",reflect:!0})],st.prototype,"noIndentation",2);ct([g({type:Boolean,reflect:!0})],st.prototype,"loading",2);ct([fe()],st.prototype,"_errorLoading",2);var Ed=Object.defineProperty,Sd=Object.getOwnPropertyDescriptor,Xi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Sd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Ed(t,i,o),o};const Nr=class extends T{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:e}=this;if(e&&this.name===this._defaultName){const t=[...e.children].indexOf(this);this.name=`${this._defaultName}${t}`}}render(){return m` <slot></slot> `}};Nr.styles=I`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let et=Nr;Xi([g({type:String,reflect:!0})],et.prototype,"name",2);Xi([g({type:String,reflect:!0})],et.prototype,"label",2);Xi([g({type:String,reflect:!0})],et.prototype,"icon",2);Xi([g({type:Boolean,reflect:!0})],et.prototype,"hidden",1);var kd=Object.defineProperty,Td=Object.getOwnPropertyDescriptor,xe=(e,t,i,n)=>{for(var o=n>1?void 0:n?Td(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&kd(t,i,o),o};const Pr=class extends T{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=e=>{const t=e.target;t instanceof et&&!t.hidden&&(t.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=t.name,t.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(e){this._tab=e;const t=[...this.children],i=t.find(n=>n instanceof et&&n.name===e);for(const n of t){if(!(n instanceof et))continue;n.hidden=i!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(e){return this._switchers.find(t=>t.getAttribute("data-name")===e)}createSwitchers(){this._switchers=[];for(const e of this.children){if(!(e instanceof et))continue;const t=document.createElement("div");t.addEventListener("click",()=>{this.tab===e.name?this.toggleAttribute("tab",!1):this.tab=e.name}),t.setAttribute("data-name",e.name),t.className="switcher";const i=document.createElement("bim-label");i.textContent=e.label??"",i.icon=e.icon,t.append(i),this._switchers.push(t)}}onSlotChange(e){this.createSwitchers();const t=e.target.assignedElements(),i=t.find(n=>n instanceof et?this.tab?n.name===this.tab:!n.hidden:!1);i&&i instanceof et&&(this.tab=i.name);for(const n of t){if(!(n instanceof et)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),i!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};Pr.styles=[Tt.scrollbar,I`
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
    `];let Jt=Pr;xe([fe()],Jt.prototype,"_switchers",2);xe([g({type:Boolean,reflect:!0})],Jt.prototype,"bottom",2);xe([g({type:Boolean,attribute:"switchers-hidden",reflect:!0})],Jt.prototype,"switchersHidden",2);xe([g({type:Boolean,reflect:!0})],Jt.prototype,"floating",2);xe([g({type:String,reflect:!0})],Jt.prototype,"tab",1);xe([g({type:Boolean,attribute:"switchers-full",reflect:!0})],Jt.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=e=>e??R;var Od=Object.defineProperty,Id=Object.getOwnPropertyDescriptor,yt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Id(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Od(t,i,o),o};const Mr=class extends T{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(e){this._inputTypes.includes(e)&&(this._type=e)}get type(){return this._type}get query(){return Cn(this.value)}onInputChange(e){e.stopPropagation();const t=e.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=t.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return m`
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
              placeholder=${Vo(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:m` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Vo(this.placeholder)}
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
    `];let rt=Mr;yt([g({type:String,reflect:!0})],rt.prototype,"icon",2);yt([g({type:String,reflect:!0})],rt.prototype,"label",2);yt([g({type:String,reflect:!0})],rt.prototype,"name",2);yt([g({type:String,reflect:!0})],rt.prototype,"placeholder",2);yt([g({type:String,reflect:!0})],rt.prototype,"value",2);yt([g({type:Boolean,reflect:!0})],rt.prototype,"vertical",2);yt([g({type:Number,reflect:!0})],rt.prototype,"debounce",2);yt([g({type:Number,reflect:!0})],rt.prototype,"rows",2);yt([g({type:String,reflect:!0})],rt.prototype,"type",1);var Nd=Object.defineProperty,Pd=Object.getOwnPropertyDescriptor,Rr=(e,t,i,n)=>{for(var o=n>1?void 0:n?Pd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Nd(t,i,o),o};const Lr=class extends T{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const e=this.children;for(const t of e)this.vertical?t.setAttribute("label-hidden",""):t.removeAttribute("label-hidden")}render(){return m`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Lr.styles=I`
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
  `;let Ji=Lr;Rr([g({type:Number,reflect:!0})],Ji.prototype,"rows",2);Rr([g({type:Boolean,reflect:!0})],Ji.prototype,"vertical",1);var Md=Object.defineProperty,Rd=Object.getOwnPropertyDescriptor,Qi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Rd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Md(t,i,o),o};const jr=class extends T{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(e){this._vertical=e,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(e){this._labelHidden=e,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const e=this.children;for(const t of e)t instanceof Ji&&(t.vertical=this.vertical),t.toggleAttribute("label-hidden",this.vertical)}render(){return m`
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
  `;let Ce=jr;Qi([g({type:String,reflect:!0})],Ce.prototype,"label",2);Qi([g({type:String,reflect:!0})],Ce.prototype,"icon",2);Qi([g({type:Boolean,reflect:!0})],Ce.prototype,"vertical",1);Qi([g({type:Boolean,attribute:"label-hidden",reflect:!0})],Ce.prototype,"labelHidden",1);var Ld=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Gn=(e,t,i,n)=>{for(var o=n>1?void 0:n?jd(t,i):t,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=(n?r(t,i,o):r(o))||o);return n&&o&&Ld(t,i,o),o};const zr=class extends T{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(e){this._vertical=e,this.updateSections()}get vertical(){return this._vertical}set hidden(e){this._hidden=e,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const e=this.children;for(const t of e)t instanceof Ce&&(t.labelHidden=this.vertical&&!Q.config.sectionLabelOnVerticalToolbar,t.vertical=this.vertical)}render(){return m`
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
  `;let Zi=zr;Gn([g({type:String,reflect:!0})],Zi.prototype,"icon",2);Gn([g({type:Boolean,attribute:"labels-hidden",reflect:!0})],Zi.prototype,"labelsHidden",2);Gn([g({type:Boolean,reflect:!0})],Zi.prototype,"vertical",1);var zd=Object.defineProperty,Dd=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&zd(t,i,o),o};const Dr=class extends T{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
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
  `;let Fr=Dr;Dd([g({type:String,reflect:!0})],Fr.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr="important",Fd=" !"+Hr,Ft=Ds(class extends Fs{constructor(e){var t;if(super(e),e.type!==zs.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ft.add(n);const s=typeof o=="string"&&o.endsWith(Fd);n.includes("-")||s?i.setProperty(n,s?o.slice(0,-11):o,s?Hr:""):i[n]=o}}return Vt}}),Hd=e=>{const{components:t}=e,i=t.get(rs);return m`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const n=document.createElement("input");n.type="file",n.accept=".ifc",n.onchange=async()=>{if(n.files===null||n.files.length===0)return;const o=n.files[0],s=o.name.replace(".ifc","");n.remove();const r=await o.arrayBuffer(),l=new Uint8Array(r);await i.load(l,!0,s)},n.click()}}
    ></bim-button>
  `},Bd=e=>z.create(Hd,e),Ud=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:Bd},Symbol.toStringTag,{value:"Module"}));({...Ud});const Vd=e=>{const{components:t,actions:i,tags:n}=e,o=(i==null?void 0:i.dispose)??!0,s=(i==null?void 0:i.download)??!0,r=(i==null?void 0:i.visibility)??!0,l=(n==null?void 0:n.schema)??!0,a=(n==null?void 0:n.viewDefinition)??!0,d=t.get(Gt),u=({detail:c})=>{const{cell:h}=c;h.style.padding="0.25rem 0"};return m`
    <bim-table ${G(c=>{if(!c)return;const h=c;h.hiddenColumns=["modelID"];const p=[];for(const[,f]of d.groups){if(!f)continue;const w={data:{Name:f.name||f.uuid,modelID:f.uuid}};p.push(w)}h.dataTransform={Name:(f,w)=>{const{modelID:v}=w;if(typeof v!="string")return f;const b=d.groups.get(v);if(!b)return v;const y={};for(const S of b.items)y[S.id]=S.ids;let _;const{schema:$}=b.ifcMetadata;l&&$&&(_=m`
            <bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${$}</bim-label>
            `);let A;if(a&&"viewDefinition"in b.ifcMetadata){const S=b.ifcMetadata.viewDefinition;A=m`
            ${S.split(",").map(E=>m`<bim-label style="background-color: var(--bim-ui_main-base); padding: 0 0.25rem; color: var(--bim-ui_main-contrast); border-radius: 0.25rem;">${E}</bim-label>`)}
          `}let C;o&&(C=m`<bim-button @click=${()=>d.disposeGroup(b)} icon="mdi:delete"></bim-button>`);let O;r&&(O=m`<bim-button @click=${S=>{const E=t.get(as),B=S.target;E.set(B.hasAttribute("data-model-hidden"),y),B.toggleAttribute("data-model-hidden"),B.icon=B.hasAttribute("data-model-hidden")?"mdi:eye-off":"mdi:eye"}} icon="mdi:eye"></bim-button>`);let P;return s&&(P=m`<bim-button @click=${()=>{const S=document.createElement("input");S.type="file",S.accept=".ifc",S.multiple=!1,S.addEventListener("change",async()=>{if(!(S.files&&S.files.length===1))return;const E=S.files[0],B=await E.arrayBuffer(),Y=await t.get(va).saveToIfc(b,new Uint8Array(B)),W=new File([Y],E.name),x=document.createElement("a");x.href=URL.createObjectURL(W),x.download=W.name,x.click(),URL.revokeObjectURL(x.href)}),S.click()}} icon="flowbite:download-solid"></bim-button>`),m`
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
            ${P}
            ${O}
            ${C}
          </div>
         </div>
        `}},h.data=p})} @cellcreated=${u} headers-hidden no-indentation>
      <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No models has been loaded yet
      </bim-label>
    </bim-table>
  `},Wd=(e,t=!0)=>{const i=z.create(Vd,e);if(t){const{components:n}=e,o=n.get(Gt),[,s]=i;o.onFragmentsLoaded.add(()=>setTimeout(()=>s())),o.onFragmentsDisposed.add(()=>s())}return i},Gd=Object.freeze(Object.defineProperty({__proto__:null,modelsList:Wd},Symbol.toStringTag,{value:"Module"})),Br=["Name","ContainedInStructure","ForLayerSet","LayerThickness","HasProperties","HasAssociations","HasAssignments","HasPropertySets","PredefinedType","Quantities","ReferencedSource","Identification",e=>e.includes("Value"),e=>e.startsWith("Material"),e=>e.startsWith("Relating"),e=>{const t=["IsGroupedBy","IsDecomposedBy"];return e.startsWith("Is")&&!t.includes(e)}];async function _i(e,t,i,n=Br,o=!1){const s=e.get(mt),r=await t.getProperties(i);if(!r)return{data:{Entity:`${i} properties not found...`}};const l=s.relationMaps[t.uuid],a={data:{}};for(const d in r){const u=n.map(h=>typeof h=="string"?d===h:h(d)).includes(!0);if(!(d==="type"||u))continue;const c=r[d];if(c)if(c.type===5){a.children||(a.children=[]);const h=await _i(e,t,c.value,n,o);a.children.push(h)}else if(typeof c=="object"&&!Array.isArray(c)){const{value:h,type:p}=c;if(o)p===1||p===2||p===3||(a.data[d]=h);else{const f=typeof h=="number"?Number(h.toFixed(3)):h;a.data[d]=f}}else if(Array.isArray(c))for(const h of c){if(h.type!==5)continue;a.children||(a.children=[]);const p=await _i(e,t,h.value,n,o);a.children.push(p)}else if(d==="type"){const h=$i[c];a.data.Entity=h}else a.data[d]=c}if(l&&l.get(r.expressID)){const d=l.get(r.expressID);for(const u of n){const c=[];if(typeof u=="string"){const h=s._inverseAttributes.indexOf(u);h!==-1&&c.push(h)}else{const h=s._inverseAttributes.filter(p=>u(p));for(const p of h){const f=s._inverseAttributes.indexOf(p);c.push(f)}}for(const h of c){const p=d.get(h);if(p)for(const f of p){const w=await _i(e,t,f,n,o);a.children||(a.children=[]),a.children.push(w)}}}}return a}const Yd=e=>{const{components:t,fragmentIdMap:i,attributesToInclude:n,editable:o,tableDefinition:s}=e,r=t.get(Gt);let l;return typeof n=="function"?l=n(Br):l=n,m`<bim-table ${G(async a=>{if(!a)return;const d=a,u=[],c=[];for(const h in i){const p=r.list.get(h);if(!(p&&p.group))continue;const f=p.group,w=c.find(v=>v.model===f);if(w)for(const v of i[h])w.expressIDs.add(v);else{const v={model:f,expressIDs:new Set(i[h])};c.push(v)}}for(const h of c){const{model:p,expressIDs:f}=h;for(const w of f){const v=await _i(t,p,w,l,o);u.push(v)}}d.dataTransform=s,d.data=u,d.columns=[{name:"Entity",width:"minmax(15rem, 1fr)"}]})}></bim-table>`},qd=e=>z.create(Yd,e),Xd=Object.freeze(Object.defineProperty({__proto__:null,entityAttributes:qd},Symbol.toStringTag,{value:"Module"}));let wt;const Jd=e=>{const{components:t,classifications:i}=e,n=t.get(ya),o=t.get(as);wt||(wt=document.createElement("bim-table"),wt.headersHidden=!0,wt.hiddenColumns=["system"],wt.columns=["Name",{name:"Actions",width:"auto"}],wt.dataTransform={Actions:(r,l)=>{const{system:a,Name:d}=l;if(!(typeof a=="string"&&typeof d=="string"))return r;const u=n.list[a];if(!(u&&u[d]))return r;const c=u[d],{map:h}=c;return m`
          <div>
            <bim-checkbox checked @change=${p=>{const f=p.target;o.set(f.value,h)}}></bim-checkbox>
          </div>
        `}});const s=[];for(const r of i){const l=typeof r=="string"?r:r.system,a=typeof r=="string"?r:r.label,d=n.list[l];d&&s.push({data:{Name:a,system:l},children:Object.keys(d).map(u=>({data:{Name:u,system:l,Actions:""}}))})}return wt.data=s,m`${wt}`},Qd=(e,t=!0)=>{const i=z.create(Jd,e);if(t){const{components:n}=e,o=n.get(Gt),[,s]=i;o.onFragmentsDisposed.add(()=>s())}return i},Zd=Object.freeze(Object.defineProperty({__proto__:null,classificationTree:Qd},Symbol.toStringTag,{value:"Module"})),Ur=async(e,t,i)=>{var n,o,s,r;const l=e.get(mt),a={data:{Name:(n=i.Name)==null?void 0:n.value},children:[{data:{Name:"Identification",Value:(o=i.Identification)==null?void 0:o.value}},{data:{Name:"Name",Value:(s=i.Name)==null?void 0:s.value}},{data:{Name:"Description",Value:(r=i.Description)==null?void 0:r.value}}]},d=l.getEntityRelations(t,i.expressID,"IsNestedBy");if(!d)return a;a.children||(a.children=[]);const u=[];a.children.push({data:{Name:"Tasks"},children:u});for(const c of d){const h=await t.getProperties(c);if(!h)continue;const p=await Ur(e,t,h);u.push(p)}return a},Kd=async(e,t,i)=>{const n=[];for(const o of i){const s=await Ur(e,t,o);n.push(s)}return{data:{Name:"Tasks"},children:n}},tu=async(e,t)=>{var i,n,o,s;const r={data:{Name:"Classifications"}};for(const l of t){const{value:a}=l.ReferencedSource,d=await e.getProperties(a);if(!d)continue;const u={data:{Name:(i=d.Name)==null?void 0:i.value},children:[{data:{Name:"Identification",Value:((n=l.Identification)==null?void 0:n.value)||((o=l.ItemReference)==null?void 0:o.value)}},{data:{Name:"Name",Value:(s=l.Name)==null?void 0:s.value}}]};r.children||(r.children=[]),r.children.push(u)}return r},eu=async(e,t)=>{var i,n,o,s,r,l;const a={data:{Name:"Materials"}};for(const d of t){if(d.type===ds){const u=(i=d.ForLayerSet)==null?void 0:i.value,c=await e.getProperties(u);if(!c)continue;for(const h of c.MaterialLayers){const{value:p}=h,f=await e.getProperties(p);if(!f)continue;const w=await e.getProperties((n=f.Material)==null?void 0:n.value);if(!w)continue;const v={data:{Name:"Layer"},children:[{data:{Name:"Thickness",Value:(o=f.LayerThickness)==null?void 0:o.value}},{data:{Name:"Material",Value:(s=w.Name)==null?void 0:s.value}}]};a.children||(a.children=[]),a.children.push(v)}}if(d.type===hs)for(const u of d.Materials){const{value:c}=u,h=await e.getProperties(c);if(!h)continue;const p={data:{Name:"Name",Value:(r=h.Name)==null?void 0:r.value}};a.children||(a.children=[]),a.children.push(p)}if(d.type===us){const u={data:{Name:"Name",Value:(l=d.Name)==null?void 0:l.value}};a.children||(a.children=[]),a.children.push(u)}}return a},iu={IFCLENGTHMEASURE:"LENGTHUNIT",IFCAREAMEASURE:"AREAUNIT",IFCVOLUMEMEASURE:"VOLUMEUNIT",IFCPLANEANGLEMEASURE:"PLANEANGLEUNIT"},nu={MILLIMETRE:{symbol:"mm",digits:0},METRE:{symbol:"m",digits:2},KILOMETRE:{symbol:"km",digits:2},SQUARE_METRE:{symbol:"m²",digits:2},CUBIC_METRE:{symbol:"m³",digits:2},DEGREE:{symbol:"°",digits:2},RADIAN:{symbol:"rad",digits:2},GRAM:{symbol:"g",digits:0},KILOGRAM:{symbol:"kg",digits:2},MILLISECOND:{symbol:"ms",digits:0},SECOND:{symbol:"s",digits:0}},Vr=async(e,t)=>{var i,n,o;const s=Object.values(await e.getAllPropertiesOfType(Na))[0];let r;for(const l of s.Units){const a=await e.getProperties(l.value);if(a&&((i=a.UnitType)==null?void 0:i.value)===iu[t]){r=`${((n=a.Prefix)==null?void 0:n.value)??""}${((o=a.Name)==null?void 0:o.value)??""}`;break}}return r?nu[r]:null},ou=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"PropertySets"}};for(const l of t){const a={data:{Name:(n=l.Name)==null?void 0:n.value}};if(l.type===ls){for(const d of l.HasProperties){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,f="";if(s){const{name:v}=c[h],b=await Vr(e,v)??{};f=b.symbol,p=c[h].value,typeof p=="number"&&b.digits&&(p=p.toFixed(b.digits))}const w={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${f??""}`}};a.children||(a.children=[]),a.children.push(w)}a.children&&(r.children||(r.children=[]),r.children.push(a))}}return r},su=async(e,t,i)=>{var n,o;const{displayUnits:s}=i,r={data:{Name:"QuantitySets"}};for(const l of t){const a={data:{Name:(n=l.Name)==null?void 0:n.value}};if(l.type===cs){for(const d of l.Quantities){const{value:u}=d,c=await e.getProperties(u);if(!c)continue;const h=Object.keys(c).find(v=>v.includes("Value"));if(!(h&&c[h]))continue;let p=c[h].value,f="";if(s){const{name:v}=c[h],b=await Vr(e,v)??{};f=b.symbol,p=c[h].value,typeof p=="number"&&b.digits&&(p=p.toFixed(b.digits))}const w={data:{Name:(o=c.Name)==null?void 0:o.value,Value:`${p} ${f??""}`}};a.children||(a.children=[]),a.children.push(w)}a.children&&(r.children||(r.children=[]),r.children.push(a))}}return r},ru=["OwnerHistory","ObjectPlacement","CompositionType"],Wr=async(e,t)=>{const i={groupName:"Attributes",includeClass:!1,...t},{groupName:n,includeClass:o}=i,s={data:{Name:n}};o&&(s.children||(s.children=[]),s.children.push({data:{Name:"Class",Value:$i[e.type]}}));for(const r in e){if(ru.includes(r))continue;const l=e[r];if(l&&typeof l=="object"&&!Array.isArray(l)){if(l.type===Sa)continue;const a={data:{Name:r,Value:l.value}};s.children||(s.children=[]),s.children.push(a)}}return s},ue=(e,...t)=>{e.children||(e.children=[]),e.children.push(...t)},au=async(e,t,i,n,o)=>{const s=e.get(mt).getEntityRelations(t,i,"IsDefinedBy");if(s){const r=[],l=[];for(const u of s){const c=await t.getProperties(u);c&&(c.type===ls&&r.push(c),c.type===cs&&l.push(c))}const a=await ou(t,r,o);a.children&&ue(n,a);const d=await su(t,l,o);d.children&&ue(n,d)}},lu=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssociations");if(o){const s=[],r=[];for(const d of o){const u=await t.getProperties(d);u&&(u.type===ka&&s.push(u),(u.type===ds||u.type===Ta||u.type===Oa||u.type===us||u.type===hs)&&r.push(u))}const l=await tu(t,s);l.children&&ue(n,l);const a=await eu(t,r);a.children&&ue(n,a)}},cu=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"HasAssignments");if(o){const s=[];for(const l of o){const a=await t.getProperties(l);a&&a.type===Ia&&s.push(a)}const r=await Kd(e,t,s);r.children&&ue(n,r)}},du=async(e,t,i,n)=>{const o=e.get(mt).getEntityRelations(t,i,"ContainedInStructure");if(o&&o[0]){const s=o[0],r=await t.getProperties(s);if(r){const l=await Wr(r,{groupName:"SpatialContainer"});ue(n,l)}}};let fi={};const uu=async(e,t,i)=>{var n;const o=e.get(mt),s=e.get(Gt),r=s.getModelIdMap(t);Object.keys(t).length===0&&(fi={});const l=[];for(const a in r){const d=s.groups.get(a);if(!d)continue;const u=o.relationMaps[d.uuid];if(!u)continue;a in fi||(fi[a]=new Map);const c=fi[a],h=r[a];for(const p of h){let f=c.get(p);if(f){l.push(f);continue}const w=await d.getProperties(p);if(!w)continue;f={data:{Name:(n=w.Name)==null?void 0:n.value}},l.push(f),c.set(p,f);const v=await Wr(w,{includeClass:!0});f.children||(f.children=[]),f.children.push(v),u.get(p)&&(await au(e,d,p,f,i),await lu(e,d,p,f),await cu(e,d,p,f),await du(e,d,p,f))}}return l},hu=e=>{const t={emptySelectionWarning:!0,...e},{components:i,fragmentIdMap:n,emptySelectionWarning:o}=t;return m`
    <bim-table @cellcreated=${({detail:s})=>{const{cell:r}=s;r.column==="Name"&&!("Value"in r.rowData)&&(r.style.gridColumn="1 / -1")}} ${G(async s=>{if(!s)return;const r=s;r.columns=[{name:"Name",width:"12rem"}],r.headersHidden=!0,r.loadFunction=()=>uu(i,n,e),await r.loadData(!0)&&r.dispatchEvent(new Event("datacomputed"))})}>
      ${o?m`
            <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
              Select some elements to display its properties
            </bim-label>
            `:null}
      <bim-label slot="error-loading" style="--bim-icon--c: #e72e2e" icon="bxs:error-alt">
        Something went wrong with the properties
      </bim-label>
    </bim-table>
  `},pu=e=>z.create(hu,e),mu=Object.freeze(Object.defineProperty({__proto__:null,elementProperties:pu},Symbol.toStringTag,{value:"Module"})),Sn=async(e,t,i,n)=>{var o;const s=[],r=e.get(mt),l=await t.getProperties(i);if(!l)return s;const{type:a}=l,d={data:{Entity:$i[a],Name:(o=l.Name)==null?void 0:o.value,modelID:t.uuid,expressID:i}};for(const u of n){const c=r.getEntityRelations(t,i,u);if(!c)continue;d.children||(d.children=[]),d.data.relations=JSON.stringify(c);const h={};for(const p of c){const f=await Sn(e,t,p,n);for(const w of f)if(w.data.relations)d.children.push(w);else{const v=t.data.get(p);if(!v){d.children.push(w);continue}const b=v[1][1],y=$i[b];y in h||(h[y]=[]),w.data.Entity=w.data.Name,delete w.data.Name,h[y].push(w)}}for(const p in h){const f=h[p],w=f.map(b=>b.data.expressID),v={data:{Entity:p,modelID:t.uuid,relations:JSON.stringify(w)},children:f};d.children.push(v)}}return s.push(d),s},bu=async(e,t,i,n)=>{const o=e.get(mt),s=[];for(const r of t){let l;if(n)l={data:{Entity:r.name!==""?r.name:r.uuid},children:await Sn(e,r,n,i)};else{const a=o.relationMaps[r.uuid],d=await r.getAllPropertiesOfType(Ea);if(!(a&&d))continue;const{expressID:u}=Object.values(d)[0];l={data:{Entity:r.name!==""?r.name:r.uuid},children:await Sn(e,r,u,i)}}s.push(l)}return s};let bt;const fu=(e,t)=>{const i=e.get(Gt),{modelID:n,expressID:o,relations:s}=t;if(!n)return null;const r=i.groups.get(n);return r?r.getFragmentMap([o,...JSON.parse(s??"[]")]):null},gu=e=>{const{components:t,models:i,expressID:n}=e,o=e.selectHighlighterName??"select",s=e.hoverHighlighterName??"hover";bt||(bt=document.createElement("bim-table"),bt.hiddenColumns=["modelID","expressID","relations"],bt.columns=["Entity","Name"],bt.headersHidden=!0,bt.addEventListener("cellcreated",({detail:l})=>{const{cell:a}=l;a.column==="Entity"&&!("Name"in a.rowData)&&(a.style.gridColumn="1 / -1")})),bt.addEventListener("rowcreated",l=>{l.stopImmediatePropagation();const{row:a}=l.detail,d=t.get(_a),u=fu(t,a.data);u&&Object.keys(u).length!==0&&(a.onmouseover=()=>{s&&(a.style.backgroundColor="var(--bim-ui_bg-contrast-20)",d.highlightByID(s,u,!0,!1,d.selection[o]??{}))},a.onmouseout=()=>{a.style.backgroundColor="",d.clear(s)},a.onclick=()=>{o&&d.highlightByID(o,u,!0,!0)})});const r=e.inverseAttributes??["IsDecomposedBy","ContainsElements"];return bu(t,i,r,n).then(l=>bt.data=l),m`${bt}`},vu=(e,t=!0)=>{const i=z.create(gu,e);if(t){const[,n]=i,{components:o}=e,s=o.get(Gt),r=o.get(mt),l=()=>n({models:s.groups.values()});r.onRelationsIndexed.add(l),s.onFragmentsDisposed.add(l)}return i},yu=Object.freeze(Object.defineProperty({__proto__:null,relationsTree:vu},Symbol.toStringTag,{value:"Module"})),Oe=(e,t)=>[...e.get(In).list.values()].find(i=>i.world===t),_u=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target;e.color=new be(n.color)}} color=${t}></bim-color-input>
  `,wu=(e,t)=>{const{postproduction:i}=e,n=i.n8ao.configuration;return m`
    <bim-color-input @input=${o=>{const s=o.target;n.color=new be(s.color)}} color=${t}></bim-color-input>
  `},$u=(e,t)=>{const{color:i,opacity:n}=JSON.parse(t),{postproduction:o}=e,{customEffects:s}=o;return m`
    <bim-color-input @input=${r=>{const{color:l,opacity:a}=r.target;s.lineColor=new be(l).getHex(),a&&(s.opacity=a/100)}} color=${i} opacity=${n*100}></bim-color-input>
  `},xu=(e,t)=>m`
    <bim-color-input @input=${i=>{const n=i.target,o=new be(n.color);e.material.uniforms.uColor.value=o}} color=${t}></bim-color-input>
  `,Cu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({ao:o.checked})}} .checked=${t}></bim-checkbox>
  `},Au=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({gamma:o.checked})}} .checked=${t}></bim-checkbox>
  `},Eu=(e,t)=>{const{postproduction:i}=e;return m`
    <bim-checkbox @change=${n=>{const o=n.target;i.setPasses({custom:o.checked})}} .checked=${t}></bim-checkbox>
  `},$t=(e,t,i,n=()=>{})=>m`
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
  `},Su=e=>{const{components:t}=e,i=t.get(Xe);return m`
    <bim-table @cellcreated=${({detail:n})=>{const o=n.cell.parentNode;if(!o)return;const s=o.querySelector("bim-table-cell[column='Name']"),r=o.querySelector("bim-table-cell[column='Value']");s&&!r&&(s.style.gridColumn="1 / -1")}} ${G(async n=>{var o,s,r,l,a;if(!n)return;const d=n;d.preserveStructureOnFilter=!0,d.dataTransform={Value:(c,h)=>{const p=h.World,f=i.list.get(p);if(!f)return c;const{scene:w,camera:v,renderer:b}=f,y=h.Name;if(y==="Grid"&&h.IsGridConfig&&typeof c=="boolean"){const _=Oe(t,f);return _?$t(_,"visible",c):c}if(y==="Color"&&h.IsGridConfig&&typeof c=="string"){const _=Oe(t,f);return _?xu(_,c):c}if(y==="Distance"&&h.IsGridConfig&&typeof c=="number"){const _=Oe(t,f);return _?N(_.material.uniforms.uDistance,"value",c,{slider:!0,min:300,max:1e3}):c}if(y==="Size"&&h.IsGridConfig&&typeof c=="string"){const _=Oe(t,f);if(!_)return c;const{x:$,y:A}=JSON.parse(c),C=N(_.material.uniforms.uSize1,"value",$,{slider:!0,suffix:"m",prefix:"A",min:1,max:20}),O=N(_.material.uniforms.uSize2,"value",A,{slider:!0,suffix:"m",prefix:"B",min:1,max:20});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${C}${O}</div>
          `}if(y==="Near Frustum"&&v.three instanceof pi&&typeof c=="number"){const _=v.three;return N(v.three,"near",c,{slider:!0,min:.1,max:10,step:.1,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Far Frustum"&&v.three instanceof pi&&typeof c=="number"){const _=v.three;return N(v.three,"far",c,{slider:!0,min:300,max:2e3,step:10,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Field of View"&&v.three instanceof pi&&typeof c=="number"){const _=v.three;return N(v.three,"fov",c,{slider:!0,min:10,max:120,onInputSet:()=>_.updateProjectionMatrix()})}if(y==="Invert Drag"&&v.hasCameraControls()&&typeof c=="boolean")return $t(v.controls,"dollyDragInverted",c);if(y==="Dolly Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"dollySpeed",c,{slider:!0,min:.5,max:3,step:.1});if(y==="Truck Speed"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"truckSpeed",c,{slider:!0,min:.5,max:6,step:.1});if(y==="Smooth Time"&&v.hasCameraControls()&&typeof c=="number")return N(v.controls,"smoothTime",c,{slider:!0,min:.01,max:2,step:.01});if(y==="Intensity"&&typeof c=="number"){if(h.Light&&typeof h.Light=="string"){const _=w.three.children.find($=>$.uuid===h.Light);return _&&_ instanceof Se?N(_,"intensity",c,{slider:!0,min:0,max:10,step:.1}):c}if(h.IsAOConfig&&b instanceof M)return N(b.postproduction.n8ao.configuration,"intensity",c,{slider:!0,max:16,step:.1})}if(y==="Color"&&typeof c=="string"){const _=h.Light,$=w.three.children.find(A=>A.uuid===_);if($&&$ instanceof Se)return _u($,c);if(h.IsAOConfig&&b instanceof M)return wu(b,c)}if(y==="Ambient Oclussion"&&typeof c=="boolean"&&h.IsAOConfig&&b instanceof M)return Cu(b,c);if(y==="Half Resolution"&&h.IsAOConfig&&b instanceof M&&typeof c=="boolean")return $t(b.postproduction.n8ao.configuration,"halfRes",c);if(y==="Screen Space Radius"&&h.IsAOConfig&&b instanceof M&&typeof c=="boolean")return $t(b.postproduction.n8ao.configuration,"screenSpaceRadius",c);if(y==="Radius"&&h.IsAOConfig&&b instanceof M&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"aoRadius",c,{slider:!0,max:2,step:.1});if(y==="Denoise Samples"&&h.IsAOConfig&&b instanceof M&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"denoiseSamples",c,{slider:!0,min:1,max:16});if(y==="Samples"&&h.IsAOConfig&&b instanceof M&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"aoSamples",c,{slider:!0,min:1,max:16});if(y==="Denoise Radius"&&h.IsAOConfig&&b instanceof M&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"denoiseRadius",c,{slider:!0,min:0,max:16,step:.1});if(y==="Distance Falloff"&&h.IsAOConfig&&b instanceof M&&typeof c=="number")return N(b.postproduction.n8ao.configuration,"distanceFalloff",c,{slider:!0,min:0,max:4,step:.1});if(y==="Directional Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find($=>$.uuid===h.Light);return _&&_ instanceof Se?$t(_,"visible",c):c}if(y==="Ambient Light"&&h.Light&&typeof h.Light=="string"&&typeof c=="boolean"){const _=w.three.children.find($=>$.uuid===h.Light);return _&&_ instanceof Se?$t(_,"visible",c):c}if(y==="Position"&&h.Light&&typeof h.Light=="string"&&typeof c=="string"){const _=w.three.children.find(E=>E.uuid===h.Light);if(!(_&&_ instanceof Se))return c;const{x:$,y:A,z:C}=JSON.parse(c),O=N(_.position,"x",$,{slider:!0,prefix:"X",suffix:"m",min:-50,max:50}),P=N(_.position,"y",A,{slider:!0,prefix:"Y",suffix:"m",min:-50,max:50}),S=N(_.position,"z",C,{slider:!0,prefix:"Z",suffix:"m",min:-50,max:50});return m`
            <div style="display: flex; gap: 0.25rem; width: 100%; flex-wrap: wrap">${O}${P}${S}</div>
          `}return y==="Custom Effects"&&h.IsCEConfig&&b instanceof M&&typeof c=="boolean"?Eu(b,c):y==="Color"&&h.IsOutlineConfig&&b instanceof M&&typeof c=="string"?$u(b,c):y==="Tolerance"&&h.IsOutlineConfig&&b instanceof M&&typeof c=="number"?N(b.postproduction.customEffects,"tolerance",c,{slider:!0,min:0,max:6,step:.01}):y==="Outline"&&h.IsOutlineConfig&&b instanceof M&&typeof c=="boolean"?$t(b.postproduction.customEffects,"outlineEnabled",c):y==="Gloss"&&h.IsGlossConfig&&b instanceof M&&typeof c=="boolean"?$t(b.postproduction.customEffects,"glossEnabled",c):y==="Min"&&h.IsGlossConfig&&b instanceof M&&typeof c=="number"?N(b.postproduction.customEffects,"minGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Max"&&h.IsGlossConfig&&b instanceof M&&typeof c=="number"?N(b.postproduction.customEffects,"maxGloss",c,{slider:!0,min:-.5,max:.5,step:.01}):y==="Exponent"&&h.IsGlossConfig&&b instanceof M&&typeof c=="number"?N(b.postproduction.customEffects,"glossExponent",c,{slider:!0,min:0,max:5,step:.01}):y==="Gamma Correction"&&h.IsGammaConfig&&b instanceof M&&typeof c=="boolean"?Au(b,c):c}};const u=[];for(const[,c]of i.list){const{scene:h,camera:p,renderer:f}=c,w=Oe(t,c),v={data:{Name:c instanceof wa&&c.name||c.uuid},children:[]};if(h){const b={data:{Name:"Scene"}};if(w){const $=`#${w.material.uniforms.uColor.value.getHexString()}`,A=JSON.stringify({x:w.material.uniforms.uSize1.value,y:w.material.uniforms.uSize2.value}),C={data:{Name:"Grid",Value:w.three.visible,World:c.uuid,IsGridConfig:!0},children:[{data:{Name:"Color",Value:$,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Size",Value:A,World:c.uuid,IsGridConfig:!0}},{data:{Name:"Distance",Value:w.material.uniforms.uDistance.value,World:c.uuid,IsGridConfig:!0}}]};b.children||(b.children=[]),b.children.push(C)}const y=h.three.children.filter($=>$ instanceof $a);for(const $ of y){const A={data:{Name:"Directional Light",Value:$.visible,World:c.uuid,Light:$.uuid},children:[{data:{Name:"Position",Value:JSON.stringify($.position),World:c.uuid,Light:$.uuid}},{data:{Name:"Intensity",Value:$.intensity,World:c.uuid,Light:$.uuid}},{data:{Name:"Color",Value:`#${$.color.getHexString()}`,World:c.uuid,Light:$.uuid}}]};b.children||(b.children=[]),b.children.push(A)}const _=h.three.children.filter($=>$ instanceof xa);for(const $ of _){const A={data:{Name:"Ambient Light",Value:$.visible,World:c.uuid,Light:$.uuid},children:[{data:{Name:"Intensity",Value:$.intensity,World:c.uuid,Light:$.uuid}},{data:{Name:"Color",Value:`#${$.color.getHexString()}`,World:c.uuid,Light:$.uuid}}]};b.children||(b.children=[]),b.children.push(A)}b.children&&((o=b.children)==null?void 0:o.length)>0&&((s=v.children)==null||s.push(b))}if(p.three instanceof pi){const b={data:{Name:"Perspective Camera"},children:[{data:{Name:"Near Frustum",Value:p.three.near,World:c.uuid}},{data:{Name:"Far Frustum",Value:p.three.far,World:c.uuid}},{data:{Name:"Field of View",Value:p.three.fov,World:c.uuid}}]};if(p.hasCameraControls()){const{controls:y}=p,_={dollyDragInverted:"Invert Drag",dollySpeed:"Dolly Speed",truckSpeed:"Truck Speed",smoothTime:"Smooth Time"};for(const $ in _){const A=y[$];A!=null&&((r=b.children)==null||r.push({data:{Name:_[$],Value:A,World:c.uuid}}))}}(l=v.children)==null||l.push(b)}if(f instanceof M){const{postproduction:b}=f,y=b.n8ao.configuration,_={data:{Name:"Renderer"},children:[{data:{Name:"Gamma Correction",Value:b.settings.gamma??!1,World:c.uuid,IsGammaConfig:!0}},{data:{Name:"Ambient Oclussion",Value:b.settings.ao??!1,World:c.uuid,IsAOConfig:!0},children:[{data:{Name:"Samples",Value:y.aoSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Color",Value:`#${y.color.getHexString()}`,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Half Resolution",Value:y.halfRes,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Screen Space Radius",Value:y.screenSpaceRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Radius",Value:y.aoRadius,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Intensity",Value:y.intensity,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Distance Falloff",Value:y.distanceFalloff,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Samples",Value:y.denoiseSamples,World:c.uuid,IsAOConfig:!0}},{data:{Name:"Denoise Radius",Value:y.denoiseRadius,World:c.uuid,IsAOConfig:!0}}]},{data:{Name:"Custom Effects",Value:b.settings.custom??!1,World:c.uuid,IsCEConfig:!0},children:[{data:{Name:"Gloss",Value:b.customEffects.glossEnabled,World:c.uuid,IsGlossConfig:!0},children:[{data:{Name:"Min",Value:b.customEffects.minGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Max",Value:b.customEffects.maxGloss,World:c.uuid,IsGlossConfig:!0}},{data:{Name:"Exponent",Value:b.customEffects.glossExponent,World:c.uuid,IsGlossConfig:!0}}]},{data:{Name:"Outline",Value:b.customEffects.outlineEnabled,World:c.uuid,IsOutlineConfig:!0},children:[{data:{Name:"Color",get Value(){const $=new be(b.customEffects.lineColor),A=b.customEffects.opacity;return JSON.stringify({color:`#${$.getHexString()}`,opacity:A})},World:c.uuid,IsOutlineConfig:!0}},{data:{Name:"Tolerance",Value:b.customEffects.tolerance,World:c.uuid,IsOutlineConfig:!0}}]}]}]};(a=v.children)==null||a.push(_)}u.push(v)}d.columns=[{name:"Name",width:"11rem"}],d.hiddenColumns=["World","Light","IsAOConfig","IsCEConfig","IsGlossConfig","IsOutlineConfig","IsGammaConfig","IsGridConfig"],d.data=u})} headers-hidden expanded>
     <bim-label slot="missing-data" style="--bim-icon--c: gold" icon="ic:round-warning">
        No worlds to configure
      </bim-label>
    </bim-table>
  `},ku=(e,t=!0)=>{const i=z.create(Su,e);if(t){const[,n]=i,{components:o}=e;o.get(Xe).list.onItemDeleted.add(()=>n())}return i},Tu=Object.freeze(Object.defineProperty({__proto__:null,worldsConfiguration:ku},Symbol.toStringTag,{value:"Module"})),ee=(e,t)=>{const i=t[e],n=(i==null?void 0:i.name)??e,o=n.trim().split(/\s+/);let s,r;return o[0]&&o[0][0]&&(s=o[0][0].toUpperCase(),o[0][1]&&(r=o[0][1].toUpperCase())),o[1]&&o[1][0]&&(r=o[1][0].toUpperCase()),m`
    <div style="display: flex; gap: 0.25rem; overflow: hidden;">
      ${!(i!=null&&i.picture)&&(s||r)?m`
        <bim-label
          style=${Ft({borderRadius:"999px",padding:"0.375rem",backgroundColor:"var(--bim-ui_bg-contrast-20)",aspectRatio:"1",fontSize:"0.7rem"})}>${s}${r}</bim-label>
        `:null}
      <bim-label .img=${i==null?void 0:i.picture}>${n}</bim-label>
    </div>
  `},X={users:{"jhon.doe@example.com":{name:"Jhon Doe"}},priorities:{"On hold":{icon:"flowbite:circle-pause-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#767676"}},Minor:{icon:"mingcute:arrows-down-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#4CAF50"}},Normal:{icon:"fa6-solid:grip-lines",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Major:{icon:"mingcute:arrows-up-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Critical:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}}},statuses:{Active:{icon:"prime:circle-fill",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)"}},"In Progress":{icon:"prime:circle-fill",style:{backgroundColor:"#fa89004d","--bim-label--c":"#FB8C00","--bim-icon--c":"#FB8C00"}},"In Review":{icon:"prime:circle-fill",style:{backgroundColor:"#9c6bff4d","--bim-label--c":"#9D6BFF","--bim-icon--c":"#9D6BFF"}},Done:{icon:"prime:circle-fill",style:{backgroundColor:"#4CAF504D","--bim-label--c":"#4CAF50","--bim-icon--c":"#4CAF50"}},Closed:{icon:"prime:circle-fill",style:{backgroundColor:"#414141","--bim-label--c":"#727272","--bim-icon--c":"#727272"}}},types:{Clash:{icon:"gg:close-r",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Issue:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Failure:{icon:"mdi:bug-outline",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Inquiry:{icon:"majesticons:comment-line",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Fault:{icon:"ph:warning",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FF5252"}},Remark:{icon:"ph:note-blank-bold",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#FB8C00"}},Request:{icon:"mynaui:edit-one",style:{backgroundColor:"var(--bim-ui_bg-contrast-20)","--bim-icon--c":"#9D6BFF"}}}},ie={padding:"0.25rem 0.5rem",borderRadius:"999px","--bim-label--c":"var(--bim-ui_bg-contrast-100)"};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=globalThis,Pi=Ni.trustedTypes,Wo=Pi?Pi.createPolicy("lit-html",{createHTML:e=>e}):void 0,Gr="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Yr="?"+Ct,Ou=`<${Yr}>`,Wt=document,Ge=()=>Wt.createComment(""),Ye=e=>e===null||typeof e!="object"&&typeof e!="function",Yn=Array.isArray,Iu=e=>Yn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",dn=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Go=/-->/g,Yo=/>/g,Lt=RegExp(`>|${dn}(?:([^\\s"'>=/]+)(${dn}*=${dn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qo=/'/g,Xo=/"/g,qr=/^(?:script|style|textarea|title)$/i,Nu=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),qn=Nu(1),he=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),Jo=new WeakMap,zt=Wt.createTreeWalker(Wt,129);function Xr(e,t){if(!Yn(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wo!==void 0?Wo.createHTML(t):t}const Pu=(e,t)=>{const i=e.length-1,n=[];let o,s=t===2?"<svg>":t===3?"<math>":"",r=Ie;for(let l=0;l<i;l++){const a=e[l];let d,u,c=-1,h=0;for(;h<a.length&&(r.lastIndex=h,u=r.exec(a),u!==null);)h=r.lastIndex,r===Ie?u[1]==="!--"?r=Go:u[1]!==void 0?r=Yo:u[2]!==void 0?(qr.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=Lt):u[3]!==void 0&&(r=Lt):r===Lt?u[0]===">"?(r=o??Ie,c=-1):u[1]===void 0?c=-2:(c=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?Lt:u[3]==='"'?Xo:qo):r===Xo||r===qo?r=Lt:r===Go||r===Yo?r=Ie:(r=Lt,o=void 0);const p=r===Lt&&e[l+1].startsWith("/>")?" ":"";s+=r===Ie?a+Ou:c>=0?(n.push(d),a.slice(0,c)+Gr+a.slice(c)+Ct+p):a+Ct+(c===-2?l:p)}return[Xr(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class qe{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let s=0,r=0;const l=t.length-1,a=this.parts,[d,u]=Pu(t,i);if(this.el=qe.createElement(d,n),zt.currentNode=this.el.content,i===2||i===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=zt.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Gr)){const h=u[r++],p=o.getAttribute(c).split(Ct),f=/([.?@])?(.*)/.exec(h);a.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?Ru:f[1]==="?"?Lu:f[1]==="@"?ju:Ki}),o.removeAttribute(c)}else c.startsWith(Ct)&&(a.push({type:6,index:s}),o.removeAttribute(c));if(qr.test(o.tagName)){const c=o.textContent.split(Ct),h=c.length-1;if(h>0){o.textContent=Pi?Pi.emptyScript:"";for(let p=0;p<h;p++)o.append(c[p],Ge()),zt.nextNode(),a.push({type:2,index:++s});o.append(c[h],Ge())}}}else if(o.nodeType===8)if(o.data===Yr)a.push({type:2,index:s});else{let c=-1;for(;(c=o.data.indexOf(Ct,c+1))!==-1;)a.push({type:7,index:s}),c+=Ct.length-1}s++}}static createElement(t,i){const n=Wt.createElement("template");return n.innerHTML=t,n}}function pe(e,t,i=e,n){var o,s;if(t===he)return t;let r=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const l=Ye(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),l===void 0?r=void 0:(r=new l(e),r._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=r:i._$Cl=r),r!==void 0&&(t=pe(e,r._$AS(e,t.values),r,n)),t}class Mu{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??Wt).importNode(i,!0);zt.currentNode=o;let s=zt.nextNode(),r=0,l=0,a=n[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new ci(s,s.nextSibling,this,t):a.type===1?d=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(d=new zu(s,this,t)),this._$AV.push(d),a=n[++l]}r!==(a==null?void 0:a.index)&&(s=zt.nextNode(),r++)}return zt.currentNode=Wt,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ci{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=pe(this,t,i),Ye(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==he&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Iu(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==j&&Ye(this._$AH)?this._$AA.nextSibling.data=t:this.T(Wt.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=qe.createElement(Xr(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(n);else{const r=new Mu(s,this),l=r.u(this.options);r.p(n),this.T(l),this._$AH=r}}_$AC(t){let i=Jo.get(t.strings);return i===void 0&&Jo.set(t.strings,i=new qe(t)),i}k(t){Yn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const s of t)o===i.length?i.push(n=new ci(this.O(Ge()),this.O(Ge()),this,this.options)):n=i[o],n._$AI(s),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Ki{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=j}_$AI(t,i=this,n,o){const s=this.strings;let r=!1;if(s===void 0)t=pe(this,t,i,0),r=!Ye(t)||t!==this._$AH&&t!==he,r&&(this._$AH=t);else{const l=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=pe(this,l[n+a],i,a),d===he&&(d=this._$AH[a]),r||(r=!Ye(d)||d!==this._$AH[a]),d===j?t=j:t!==j&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!o&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ru extends Ki{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}}class Lu extends Ki{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==j)}}class ju extends Ki{constructor(t,i,n,o,s){super(t,i,n,o,s),this.type=5}_$AI(t,i=this){if((t=pe(this,t,i,0)??j)===he)return;const n=this._$AH,o=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==j&&(n===j||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class zu{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){pe(this,t)}}const Qo=Ni.litHtmlPolyfillSupport;Qo==null||Qo(qe,ci),(Ni.litHtmlVersions??(Ni.litHtmlVersions=[])).push("3.2.1");const Du=(e,t,i)=>{const n=(i==null?void 0:i.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const s=(i==null?void 0:i.renderBefore)??null;n._$litPart$=o=new ci(t.insertBefore(Ge(),s),s,void 0,i??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fu=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hu={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bu=e=>(...t)=>({_$litDirective$:e,values:t});let Uu=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=(e,t)=>{var i;const n=e._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,t,!1),Le(o,t);return!0},Mi=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Jr=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Gu(t)}};function Vu(e){this._$AN!==void 0?(Mi(this),this._$AM=e,Jr(this)):this._$AM=e}function Wu(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)Le(n[s],!1),Mi(n[s]);else n!=null&&(Le(n,!1),Mi(n));else Le(this,e)}const Gu=e=>{e.type==Hu.CHILD&&(e._$AP??(e._$AP=Wu),e._$AQ??(e._$AQ=Vu))};let Yu=class extends Uu{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Jr(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(n=this.disconnected)==null||n.call(this)),t&&(Le(this,e),Mi(this))}setValue(e){if(Fu(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kn=()=>new qu;let qu=class{};const un=new WeakMap,Xu=Bu(class extends Yu{render(e){return j}update(e,[t]){var i;const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),j}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let i=un.get(t);i===void 0&&(i=new WeakMap,un.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=un.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Ju={dueDate:e=>{if(typeof e=="string"&&e.trim()!=="")return new Date(e)},status:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},type:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},priority:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},stage:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},assignedTo:e=>{if(Array.isArray(e)&&e.length!==0)return e[0]},labels:e=>{if(Array.isArray(e))return new Set(e)}},Qr=e=>{const{components:t,topic:i,value:n,onCancel:o,onSubmit:s,styles:r}=e,l=s??(()=>{}),a=t.get(Je),d=(n==null?void 0:n.title)??(i==null?void 0:i.title)??_t.default.title,u=(n==null?void 0:n.status)??(i==null?void 0:i.status)??_t.default.status,c=(n==null?void 0:n.type)??(i==null?void 0:i.type)??_t.default.type,h=(n==null?void 0:n.priority)??(i==null?void 0:i.priority)??_t.default.priority,p=(n==null?void 0:n.assignedTo)??(i==null?void 0:i.assignedTo)??_t.default.assignedTo,f=(n==null?void 0:n.labels)??(i==null?void 0:i.labels)??_t.default.labels,w=(n==null?void 0:n.stage)??(i==null?void 0:i.stage)??_t.default.stage,v=(n==null?void 0:n.description)??(i==null?void 0:i.description)??_t.default.description,b=i!=null&&i.dueDate?i.dueDate.toISOString().split("T")[0]:null,y=new Set([...a.config.statuses]);u&&y.add(u);const _=new Set([...a.config.types]);c&&_.add(c);const $=new Set([...a.config.priorities]);h&&$.add(h);const A=new Set([...a.config.users]);p&&A.add(p);const C=new Set([...a.config.labels]);if(f)for(const x of f)C.add(x);const O=new Set([...a.config.stages]);w&&O.add(w);const P=kn(),S=async()=>{const{value:x}=P;if(!x)return;const L=We(x,Ju);if(i)i.set(L),await l(i);else{const V=a.create(L);await l(V)}},E=kn(),B=x=>{const{value:L}=E;if(!L)return;const V=x.target;L.disabled=V.value.trim()===""},Y=`btn-${Q.newRandomId()}`,W=`btn-${Q.newRandomId()}`;return m`
    <div ${G(P)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${B} vertical label="Title" name="title" .value=${d}></bim-text-input>
        ${i?m`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...y].map(x=>m`<bim-option label=${x} .checked=${u===x}></bim-option>`)}
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
          ${[...C].map(x=>m`<bim-option label=${x} .checked=${f?[...f].includes(x):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...A].map(x=>{const L=r!=null&&r.users?r.users[x]:null,V=L?L.name:x,K=L==null?void 0:L.picture;return m`<bim-option label=${V} value=${x} .img=${K} .checked=${p===x}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${b}></bim-text-input> 
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

          #${Y}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${W} style="flex: 0" @click=${o} label="Cancel"></bim-button>
        <bim-button id=${Y} style="flex: 0" @click=${S} ${G(E)} label=${i?"Update Topic":"Add Topic"} icon=${i?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},Qu=e=>{const{components:t,dataStyles:i,onTopicEnter:n}=e,o=t.get(Je),s=e.topics??o.list.values();return m`
    <bim-table no-indentation ${G(r=>{if(!r)return;const l=r;l.hiddenColumns.length===0&&(l.hiddenColumns=["Guid"]),l.columns=["Title"],l.dataTransform={Title:(a,d)=>{const{Guid:u}=d;if(typeof u!="string")return a;const c=o.list.get(u);if(!c)return a;const h=`btn-${Q.newRandomId()}`;return m`
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
        `},Priority:a=>{if(typeof a!="string")return a;const d=((i==null?void 0:i.priorities)??X.priorities)[a];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ft({...ie,...d==null?void 0:d.style})}
          >${a}
          </bim-label>
        `},Status:a=>{if(typeof a!="string")return a;const d=((i==null?void 0:i.statuses)??X.statuses)[a];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ft({...ie,...d==null?void 0:d.style})}
          >${a}
          </bim-label>
        `},Type:a=>{if(typeof a!="string")return a;const d=((i==null?void 0:i.types)??X.types)[a];return m`
          <bim-label
            .icon=${d==null?void 0:d.icon}
            style=${Ft({...ie,...d==null?void 0:d.style})}
          >${a}
          </bim-label>
        `},Author:a=>typeof a!="string"?a:ee(a,(i==null?void 0:i.users)??X.users),Assignee:a=>typeof a!="string"?a:ee(a,(i==null?void 0:i.users)??X.users)},l.data=[...s].map(a=>{var d;return{data:{Guid:a.guid,Title:a.title,Status:a.status,Description:a.description??"",Author:a.creationAuthor,Assignee:a.assignedTo??"",Date:a.creationDate.toDateString(),DueDate:((d=a.dueDate)==null?void 0:d.toDateString())??"",Type:a.type,Priority:a.priority??""}}})})}>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">There are no topics to display</bim-label>
    </bim-table>
  `},Zr=(e,t=!0)=>{const i=z.create(Qu,e);if(t){const{components:n,topics:o}=e,[,s]=i,r=n.get(Je);if(r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),o)for(const l of o)l.relatedTopics.onItemAdded.add(()=>s()),l.relatedTopics.onItemDeleted.add(()=>s()),l.relatedTopics.onCleared.add(()=>s());else r.list.onItemSet.add(()=>s())}return i},Zu=Object.freeze(Object.defineProperty({__proto__:null,topicsList:Zr},Symbol.toStringTag,{value:"Module"})),Ku=e=>{const{topic:t,styles:i,viewpoint:n}=e,o={delete:!0,...e.actions};return m`
    <bim-table no-indentation ${G(s=>{if(!s)return;const r=s;r.headersHidden=!0,r.hiddenColumns=["guid","author"],r.dataTransform={Comment:(a,d)=>{const{guid:u}=d;if(typeof u!="string")return a;const c=t.comments.get(u);if(!c)return a;const h=()=>{t.comments.delete(u)},p=`btn-${Q.newRandomId()}`;return m`
          <div style="display: flex; flex-direction: column; gap: 0.25rem; flex: 1">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; gap: 0.375rem;">
                ${ee(c.author,i??X.users)}
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
  `},Kr=(e,t=!0)=>{const i=z.create(Ku,e);if(t){const{topic:n}=e,[o,s]=i;n.comments.onItemSet.add(()=>s()),n.comments.onItemUpdated.add(()=>s()),n.comments.onItemDeleted.add(()=>s()),n.comments.onCleared.add(()=>s())}return i},th=Object.freeze(Object.defineProperty({__proto__:null,topicComments:Kr},Symbol.toStringTag,{value:"Module"})),eh=e=>{var t;const{components:i,topic:n}=e,o={selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!!n,...e.actions},s=i.get(Di),r=((t=e.topic)==null?void 0:t.viewpoints)??s.list.keys(),l=[];for(const a of r){const d=s.list.get(a);d&&l.push(d)}return m`
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
  `},ta=(e,t=!0)=>{const i=z.create(eh,e),{components:n,topic:o}=e;if(t){const[,s]=i,r=n.get(Di);r.list.onItemUpdated.add(()=>s()),r.list.onItemDeleted.add(()=>s()),r.list.onCleared.add(()=>s()),o?(o.viewpoints.onItemAdded.add(()=>s()),o.viewpoints.onItemDeleted.add(()=>s()),o.viewpoints.onCleared.add(()=>s())):r.list.onItemSet.add(()=>s())}return i},ih=Object.freeze(Object.defineProperty({__proto__:null,viewpointsList:ta},Symbol.toStringTag,{value:"Module"})),nh={...Gd,...Xd,...Zd,...mu,...yu,...Tu,...Zu,...th,...ih},oh=e=>m`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${Qr(e)}
    </bim-panel-section>
  `,sh=e=>z.create(oh,e),rh=Object.freeze(Object.defineProperty({__proto__:null,topic:sh},Symbol.toStringTag,{value:"Module"})),ah={...rh},lh=(e,t)=>{const{components:i,editing:n,topic:o,styles:s}=e,r={update:!0,...e.actions},l=(s==null?void 0:s.priorities)??X.priorities,a=(s==null?void 0:s.statuses)??X.statuses,d=(s==null?void 0:s.types)??X.types;let u;o!=null&&o.priority&&(u=l[o.priority]);let c;o!=null&&o.type&&(c=d[o.type]);let h;o!=null&&o.type&&(h=a[o.status]);let p,f;return n?p=Qr({components:i,topic:o,styles:s,onSubmit:()=>{t({editing:!1})},onCancel:()=>{t({editing:!1})}}):f=m`
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
        <bim-label .icon=${h==null?void 0:h.icon} style=${Ft({...ie,...h==null?void 0:h.style})}
        >${o.status}
        </bim-label>
      </div>

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Type</bim-label>
        <bim-label .icon=${c==null?void 0:c.icon} style=${Ft({...ie,...c==null?void 0:c.style})}
        >${o.type}
        </bim-label>
      </div>

      ${o.priority?m`
            <div style="display: flex; gap: 0.375rem">
              <bim-label>Priority</bim-label>
              <bim-label .icon=${u==null?void 0:u.icon} style=${Ft({...ie,...u==null?void 0:u.style})}
              >${o.priority}
              </bim-label>
            </div>`:null}

      <div style="display: flex; gap: 0.375rem">
        <bim-label>Author</bim-label>
        ${ee(o.creationAuthor,(s==null?void 0:s.users)??X.users)}
      </div>

      ${o.assignedTo?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Assignee</bim-label>
            ${ee(o.assignedTo,(s==null?void 0:s.users)??X.users)}
          </div>`:null}

      ${o.dueDate?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Due Date</bim-label>
            <bim-label style="--bim-label--c: var(--bim-ui_bg-contrast-100)">${o.dueDate.toDateString()}</bim-label>
          </div>`:null}

      ${o.modifiedAuthor?m`
          <div style="display: flex; gap: 0.375rem">
            <bim-label>Modified By</bim-label>
            ${ee(o.modifiedAuthor,(s==null?void 0:s.users)??X.users)}
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
  `},ch=e=>z.create(lh,e),dh=Object.freeze(Object.defineProperty({__proto__:null,topicInformation:ch},Symbol.toStringTag,{value:"Module"})),uh=(e,t)=>{const{showInput:i,topic:n,styles:o}=e,s={add:!0,delete:!0,...e.actions},r=`input-${Q.newRandomId()}`,l=`btn-${Q.newRandomId()}`,a=`btn-${Q.newRandomId()}`,d=()=>document.getElementById(l),u=()=>document.getElementById(r),c=()=>{const _=u();return _?_.value.trim().length>0:!1},h=()=>{t({showInput:!0})},p=()=>{const _=u(),$=c();_&&$&&(n.createComment(_.value),t({showInput:!1}))},f=()=>{t({showInput:!1})},w=()=>{const _=d();if(_){if(!u()){_.disabled=!0;return}_.disabled=!c()}},v=m`
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
  `,[y]=Kr({topic:n,actions:s,styles:o??X.users});return m`
    <div style="display: flex; flex-direction: column; gap: 0.5rem">
      ${y}
      ${i?b:v}
    </div>
  `},hh=e=>z.create(uh,e),ph=Object.freeze(Object.defineProperty({__proto__:null,topicComments:hh},Symbol.toStringTag,{value:"Module"})),mh=(e,t)=>{const{components:i,topic:n,linking:o}=e,s=i.get(Je),r={link:!0,...e.actions},[l,a]=Zr({components:i,topics:[...n.relatedTopics].map(h=>s.list.get(h)).map(h=>h)});l.headersHidden=!0,l.hiddenColumns=["Guid","Status","Description","Author","Assignee","Date","DueDate","Type","Priority"];const d=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${h=>{const p=h.target;p instanceof rt&&(l.queryString=p.value)}}></bim-text-input> 
    `;let u,c;if(o){l.selectableRows=!0,a({topics:void 0});const h=l.data.filter(b=>{const{Guid:y}=b.data;return typeof y!="string"?!1:n.relatedTopics.has(y)}).map(b=>b.data);l.selection=new Set(h);const p=()=>{const b=[...l.selection].map(({Guid:y})=>typeof y!="string"?null:s.list.has(y)?y:null).map(y=>y);n.relatedTopics.clear(),n.relatedTopics.add(...b),t({linking:!1})},f=()=>{t({linking:!1})},w=`btn-${Q.newRandomId()}`,v=`btn-${Q.newRandomId()}`;u=m`
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
  `},bh=e=>z.create(mh,e),fh=Object.freeze(Object.defineProperty({__proto__:null,topicRelations:bh},Symbol.toStringTag,{value:"Module"})),gh=(e,t)=>{const{components:i,topic:n,world:o,linking:s}=e,r={add:!0,link:!0,selectComponents:!0,colorizeComponent:!0,resetColors:!0,updateCamera:!0,delete:!0,unlink:!0,...e.actions},l=i.get(Di),[a,d]=ta({components:i,topic:n,actions:r}),u=()=>m`
      <bim-text-input placeholder="Search..." debounce="100" @input=${p=>{const f=p.target;f instanceof rt&&(a.queryString=f.value)}}></bim-text-input> 
    `;let c,h;if(s){a.selectableRows=!0,d({topic:void 0,actions:{delete:!1,updateCamera:!1,colorizeComponent:!1,resetColors:!1}});const p=a.data.filter(y=>{const{Guid:_}=y.data;return typeof _!="string"?!1:n.viewpoints.has(_)}).map(y=>y.data);a.selection=new Set(p);const f=()=>{const y=[...a.selection].map(({Guid:_})=>typeof _!="string"?null:l.list.has(_)?_:null).map(_=>_);n.viewpoints.clear(),n.viewpoints.add(...y),t({linking:!1})},w=()=>{t({linking:!1})},v=`btn-${Q.newRandomId()}`,b=`btn-${Q.newRandomId()}`;c=m`
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
  `},vh=e=>z.create(gh,e),yh=Object.freeze(Object.defineProperty({__proto__:null,topicViewpoints:vh},Symbol.toStringTag,{value:"Module"})),gi={...dh,...ph,...fh,...yh};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=globalThis,Xn=wi.ShadowRoot&&(wi.ShadyCSS===void 0||wi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jn=Symbol(),Zo=new WeakMap;let ea=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Jn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Xn&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Zo.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Zo.set(t,e))}return e}toString(){return this.cssText}};const _h=e=>new ea(typeof e=="string"?e:e+"",void 0,Jn),Qn=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,s)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[s+1],e[0]);return new ea(i,e,Jn)},wh=(e,t)=>{if(Xn)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=wi.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},Ko=Xn?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return _h(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$h,defineProperty:xh,getOwnPropertyDescriptor:Ch,getOwnPropertyNames:Ah,getOwnPropertySymbols:Eh,getPrototypeOf:Sh}=Object,me=globalThis,ts=me.trustedTypes,kh=ts?ts.emptyScript:"",es=me.reactiveElementPolyfillSupport,je=(e,t)=>e,Ri={toAttribute(e,t){switch(t){case Boolean:e=e?kh:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Zn=(e,t)=>!$h(e,t),is={attribute:!0,type:String,converter:Ri,reflect:!1,hasChanged:Zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),me.litPropertyMetadata??(me.litPropertyMetadata=new WeakMap);class Kt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=is){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,i);o!==void 0&&xh(this.prototype,t,o)}}static getPropertyDescriptor(t,i,n){const{get:o,set:s}=Ch(this.prototype,t)??{get(){return this[i]},set(r){this[i]=r}};return{get(){return o==null?void 0:o.call(this)},set(r){const l=o==null?void 0:o.call(this);s.call(this,r),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??is}static _$Ei(){if(this.hasOwnProperty(je("elementProperties")))return;const t=Sh(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(je("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(je("properties"))){const i=this.properties,n=[...Ah(i),...Eh(i)];for(const o of n)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[i,n]of this.elementProperties){const o=this._$Eu(i,n);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)i.unshift(Ko(o))}else t!==void 0&&i.push(Ko(t));return i}static _$Eu(t,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wh(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(t,i,n){this._$AK(t,n)}_$EC(t,i){var n;const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const r=(((n=o.converter)==null?void 0:n.toAttribute)!==void 0?o.converter:Ri).toAttribute(i,o.type);this._$Em=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$Em=null}}_$AK(t,i){var n;const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const r=o.getPropertyOptions(s),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)==null?void 0:n.fromAttribute)!==void 0?r.converter:Ri;this._$Em=s,this[s]=l.fromAttribute(i,r.type),this._$Em=null}}requestUpdate(t,i,n){if(t!==void 0){if(n??(n=this.constructor.getPropertyOptions(t)),!(n.hasChanged??Zn)(this[t],i))return;this.P(t,i,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,n){this._$AL.has(t)||this._$AL.set(t,i),n.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,r]of o)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let i=!1;const n=this._$AL;try{i=this.shouldUpdate(n),i?(this.willUpdate(n),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(n)):this._$EU()}catch(o){throw i=!1,this._$EU(),o}i&&this._$AE(n)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[je("elementProperties")]=new Map,Kt[je("finalized")]=new Map,es==null||es({ReactiveElement:Kt}),(me.reactiveElementVersions??(me.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ht=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Du(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return he}};var ns;Ht._$litElement$=!0,Ht.finalized=!0,(ns=globalThis.litElementHydrateSupport)==null||ns.call(globalThis,{LitElement:Ht});const os=globalThis.litElementPolyfillSupport;os==null||os({LitElement:Ht});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Th={attribute:!0,type:String,converter:Ri,reflect:!1,hasChanged:Zn},Oh=(e=Th,t,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),s.set(i.name,e),n==="accessor"){const{name:r}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,e)},init(l){return l!==void 0&&this.P(r,void 0,e),l}}}if(n==="setter"){const{name:r}=i;return function(l){const a=this[r];t.call(this,l),this.requestUpdate(r,a,e)}}throw Error("Unsupported decorator location: "+n)};function q(e){return(t,i)=>typeof i=="object"?Oh(e,t,i):((n,o,s)=>{const r=o.hasOwnProperty(s);return o.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(o,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ih(e){return q({...e,state:!0,attribute:!1})}class Nh extends Ca{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Aa(.5,.5),this.addEventListener("removed",function(){this.traverse(function(i){i.element instanceof Element&&i.element.parentNode!==null&&i.element.parentNode.removeChild(i.element)})})}copy(t,i){return super.copy(t,i),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new Tn;new zi;new zi;new Tn;new Tn;class Ph{constructor(t,i){this._group=new io,this._frustum=new ma,this._frustumMat=new zi,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new ba({color:"#2e3338"}),this.numbers=new io,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=i;const n=this.newGrid(-1),o=this.newGrid(-2);this.grids={main:n,secondary:o},this._group.add(o,n,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:i}=this.grids;t.removeFromParent(),i.removeFromParent(),t.geometry.dispose(),t.material.dispose(),i.geometry.dispose(),i.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const t=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(t);const{planes:i}=this._frustum,n=i[0].constant*-i[0].normal.x,o=i[1].constant*-i[1].normal.x,s=i[2].constant*-i[2].normal.y,r=i[3].constant*-i[3].normal.y,l=Math.abs(n-o),a=Math.abs(r-s),{clientWidth:d,clientHeight:u}=this._container,c=Math.max(d,u),h=Math.max(l,a)/c,p=Math.ceil(Math.log10(l/this.scaleX)),f=Math.ceil(Math.log10(a/this.scaleY)),w=10**(p-2)*this.scaleX,v=10**(f-2)*this.scaleY,b=w*this.gridsFactor,y=v*this.gridsFactor,_=Math.ceil(a/y),$=Math.ceil(l/b),A=Math.ceil(a/v),C=Math.ceil(l/w),O=w*Math.ceil(o/w),P=v*Math.ceil(s/v),S=b*Math.ceil(o/b),E=y*Math.ceil(s/y),B=[...this.numbers.children];for(const U of B)U.removeFromParent();this.numbers.children=[];const Y=[],W=9*h,x=1e4,L=S+this._offsetX,V=Math.round(Math.abs(L/this.scaleX)*x)/x,K=($-1)*b,tt=Math.round(Math.abs((L+K)/this.scaleX)*x)/x,dt=Math.max(V,tt).toString().length*W;let Ae=Math.ceil(dt/b)*b;for(let U=0;U<$;U++){let D=S+U*b;Y.push(D,r,0,D,s,0),D=Math.round(D*x)/x,Ae=Math.round(Ae*x)/x;const Ee=D%Ae;if(!(b<1||y<1)&&Math.abs(Ee)>.01)continue;const hi=this.newNumber((D+this._offsetX)/this.scaleX),nn=12*h;hi.position.set(D,s+nn,0)}for(let U=0;U<_;U++){const D=E+U*y;Y.push(o,D,0,n,D,0);const Ee=this.newNumber(D/this.scaleY);let hi=12;Ee.element.textContent&&(hi+=4*Ee.element.textContent.length);const nn=hi*h;Ee.position.set(o+nn,D,0)}const en=[];for(let U=0;U<C;U++){const D=O+U*w;en.push(D,r,0,D,s,0)}for(let U=0;U<A;U++){const D=P+U*v;en.push(o,D,0,n,D,0)}const ca=new no(new Float32Array(Y),3),da=new no(new Float32Array(en),3),{main:ua,secondary:ha}=this.grids;ua.geometry.setAttribute("position",ca),ha.geometry.setAttribute("position",da)}newNumber(t){const i=document.createElement("bim-label");i.textContent=String(Math.round(t*100)/100);const n=new Nh(i);return this.numbers.add(n),n}newGrid(t){const i=new fa,n=new ga(i,this.material);return n.frustumCulled=!1,n.renderOrder=t,n}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let i=0;i<t.length;i++){const n=t[i];if(Number.isNaN(n))return!1}return!0}}var Mh=Object.defineProperty,Rh=Object.getOwnPropertyDescriptor,di=(e,t,i,n)=>{for(var o=Rh(t,i),s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Mh(t,i,o),o};const ia=class extends Ht{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const i=Number(t.replace("#","0x"));Number.isNaN(i)||this._grid.material.color.setHex(i)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(Xe).create();this._world=i,i.scene=new On(t),i.scene.setup(),i.renderer=new pa(t,this);const n=new ss(t);i.camera=n;const o=new Ph(n.threeOrtho,this);this._grid=o,i.scene.three.add(o.get()),n.controls.addEventListener("update",()=>o.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),n.set("Plan"),await n.controls.setLookAt(0,0,100,0,0,0),await n.projection.set("Orthographic"),n.controls.dollySpeed=3,n.controls.draggingSmoothTime=.085,n.controls.maxZoom=1e3,n.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return qn`<slot></slot>`}};ia.styles=Qn`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let ui=ia;di([q({type:String,attribute:"grid-color",reflect:!0})],ui.prototype,"gridColor");di([q({type:Number,attribute:"grid-scale-x",reflect:!0})],ui.prototype,"gridScaleX");di([q({type:Number,attribute:"grid-scale-y",reflect:!0})],ui.prototype,"gridScaleY");di([q({type:Number,attribute:"grid-offset-x",reflect:!0})],ui.prototype,"gridOffsetX");di([q({type:Number,attribute:"grid-offset-y",reflect:!0})],ui.prototype,"gridOffsetY");var Lh=Object.defineProperty,Nt=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&Lh(t,i,o),o};const na=class extends Ht{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new zi,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}};na.styles=Qn`
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
  `;let Pt=na;Nt([q({type:Number,reflect:!0})],Pt.prototype,"size");Nt([q({type:String,attribute:"right-text",reflect:!0})],Pt.prototype,"rightText");Nt([q({type:String,attribute:"left-text",reflect:!0})],Pt.prototype,"leftText");Nt([q({type:String,attribute:"top-text",reflect:!0})],Pt.prototype,"topText");Nt([q({type:String,attribute:"bottom-text",reflect:!0})],Pt.prototype,"bottomText");Nt([q({type:String,attribute:"front-text",reflect:!0})],Pt.prototype,"frontText");Nt([q({type:String,attribute:"back-text",reflect:!0})],Pt.prototype,"backText");Nt([Ih()],Pt.prototype,"_cssMatrix3D");var jh=Object.defineProperty,zh=(e,t,i,n)=>{for(var o=void 0,s=e.length-1,r;s>=0;s--)(r=e[s])&&(o=r(t,i,o)||o);return o&&jh(t,i,o),o};const oa=class extends Ht{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=kn()}set components(t){var i;if(this._components=t,this.components){const n=this.components.get(Xe);this.world=n.create(),this.world.name=this.name}else(i=this.world)==null||i.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const i=new On(this.components);this.world.scene=i,i.setup(),i.three.background=null;const n=new M(this.components,t);this.world.renderer=n;const{postproduction:o}=n,s=new ss(this.components);this.world.camera=s;const r=this.components.get(In).create(this.world);r.material.uniforms.uColor.value=new be(4342338),r.material.uniforms.uSize1.value=2,r.material.uniforms.uSize2.value=8,o.enabled=!0,o.customEffects.excludedMeshes.push(r.three),o.setPasses({custom:!0,ao:!0,gamma:!0}),o.customEffects.lineColor=1513756}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return qn` <bim-viewport ${Xu(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};oa.styles=Qn``;let Dh=oa;zh([q({type:String,reflect:!0})],Dh.prototype,"name");Pa.init();const Kn=document.createElement("bim-viewport"),at=new Ma,Fh=at.get(Xe),Qt=Fh.create(),sa=new On(at);sa.setup();Qt.scene=sa;const ra=new Ra(at,Kn);Qt.renderer=ra;const to=new La(at);Qt.camera=to;to.controls.setLookAt(10,5.5,5,-4,-1,-6.5);Kn.addEventListener("resize",()=>{ra.resize(),to.updateAspect()});at.init();const Hh=at.get(In);Hh.create(Qt);const aa=at.get(rs);await aa.setup();const Bh=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),Uh=await Bh.arrayBuffer(),Vh=new Uint8Array(Uh),Wh=await aa.load(Vh);Qt.scene.three.add(Wh);const tn={"jhon.doe@example.com":{name:"Jhon Doe",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"},"user_a@something.com":{name:"User A",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/Portrait-Photography.jpg"},"user_b@something.com":{name:"User B",picture:"https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Portrait.jpg"}},ne=at.get(Je);ne.setup({users:new Set(Object.keys(tn)),labels:new Set(["Architecture","Structure","MEP"])});const Gh=at.get(Di);ne.list.onItemSet.add(({value:e})=>{const t=Gh.create(Qt);e.viewpoints.add(t.guid)});const[Li,Yh]=nh.topicsList({components:at,dataStyles:{users:tn}});Li.selectableRows=!0;const[qh,Xh]=ah.topic({components:at,styles:{users:tn}}),ji=Qe.create(()=>ut`
    <dialog class="form-dialog">
     <bim-panel style="border-radius: var(--bim-ui_size-base); width: 22rem;">
      ${qh}
     </bim-panel> 
    </dialog>
  `);document.body.append(ji);const Jh=Qe.create(()=>ut`
    <bim-button style="flex: 0" @click=${()=>{ji.showModal()}} label="Create Topic" icon="material-symbols:task"></bim-button>
  `);Xh({onCancel:()=>{ji.close()},onSubmit:()=>{ji.close()}});const[Qh,la]=Qe.create(e=>{const{components:t,topic:i,world:n,actions:o,styles:s}=e;let r,l;if(i){const[a]=gi.topicInformation({components:t,topic:i,actions:o==null?void 0:o.information,styles:s}),[d]=gi.topicViewpoints({components:t,topic:i,world:n,actions:o==null?void 0:o.viewpoints}),[u]=gi.topicRelations({components:t,topic:i,actions:o==null?void 0:o.relatedTopics}),[c]=gi.topicComments({topic:i,actions:o==null?void 0:o.comments,styles:s==null?void 0:s.users}),h=()=>{window.alert(`An email will be sent to ${i.assignedTo}! (obviosuly not, this is just for demo purposes)`)};r=ut`
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
          ${i.assignedTo?ut`
                <bim-button @click=${h} label="Send Mail Reminder" icon="mingcute:send-fill"></bim-button> 
              `:ut`
                <bim-label style="white-space: normal">The topic must have an assignee to use the communication tools. Update the topic with a new assignee!</bim-label>
              `}
        </bim-panel-section>
      `}else l=ut`
        <bim-panel-section label="Missing Topic" icon="material-symbols:chat-error">
          ${i?null:ut`<bim-label>There is no topic to display in this panel!</bim-label>`}
        </bim-panel-section> 
      `;return ut`
      <bim-panel>
        ${l}
        ${r}
      </bim-panel> 
    `},{components:at,world:Qt,styles:{users:tn}});ne.list.onItemUpdated.add(()=>la());Yh({onTopicEnter:e=>{la({topic:e})}});const Zh=Qe.create(()=>ut`<bim-button style="flex: 0" @click=${async()=>{const t=[...Li.selection].map(({Guid:r})=>r&&typeof r=="string"?ne.list.get(r):null).filter(r=>r),i=t.length>0?t:[...ne.list.values()];if(i.length===0)return;const n=await ne.export(i),o=new File([n],"topics.bcf"),s=document.createElement("a");s.href=URL.createObjectURL(o),s.download=o.name,s.click(),URL.revokeObjectURL(s.href)}} label="Download BCF" icon="material-symbols:download"></bim-button> `),Kh=Qe.create(()=>ut`
    <bim-panel>
      <bim-panel-section label="BCF" fixed>
        <div style="display: flex; justify-content: space-between; gap: 0.5rem">
          <bim-text-input style="flex-grow: 0; flex-basis: 15rem" @input=${t=>{const i=t.target;Li.queryString=i.value}} placeholder="Search a topic..." debounce="100"></bim-text-input>
          <div style="display: flex; gap: 0.5rem">
            ${Jh}
            ${Zh}
          </div> 
        </div> 
        ${Li}
      </bim-panel-section>
    </bim-panel>
  `),eo=document.createElement("bim-grid");eo.layouts={main:{template:`
    "customTopicPanel viewport"
    "customTopicPanel bcfPanel" 25rem
    /24rem 1fr
    `,elements:{bcfPanel:Kh,viewport:Kn,customTopicPanel:Qh}}};eo.layout="main";document.body.append(eo);
