var So=Object.defineProperty,Oo=(e,t,i)=>t in e?So(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,ot=(e,t,i)=>(Oo(e,typeof t!="symbol"?t+"":t,i),i);const vt=Math.min,F=Math.max,re=Math.round,X=e=>({x:e,y:e}),zo={left:"right",right:"left",bottom:"top",top:"bottom"},To={start:"end",end:"start"};function _i(e,t,i){return F(e,vt(t,i))}function Ut(e,t){return typeof e=="function"?e(t):e}function W(e){return e.split("-")[0]}function be(e){return e.split("-")[1]}function on(e){return e==="x"?"y":"x"}function rn(e){return e==="y"?"height":"width"}function Vt(e){return["top","bottom"].includes(W(e))?"y":"x"}function sn(e){return on(Vt(e))}function Po(e,t,i){i===void 0&&(i=!1);const o=be(e),n=sn(e),r=rn(n);let s=n==="x"?o===(i?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=se(s)),[s,se(s)]}function jo(e){const t=se(e);return[Pe(e),t,Pe(t)]}function Pe(e){return e.replace(/start|end/g,t=>To[t])}function Lo(e,t,i){const o=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return i?t?n:o:t?o:n;case"left":case"right":return t?r:s;default:return[]}}function Ro(e,t,i,o){const n=be(e);let r=Lo(W(e),i==="start",o);return n&&(r=r.map(s=>s+"-"+n),t&&(r=r.concat(r.map(Pe)))),r}function se(e){return e.replace(/left|right|bottom|top/g,t=>zo[t])}function Mo(e){return{top:0,right:0,bottom:0,left:0,...e}}function ln(e){return typeof e!="number"?Mo(e):{top:e,right:e,bottom:e,left:e}}function yt(e){const{x:t,y:i,width:o,height:n}=e;return{width:o,height:n,top:i,left:t,right:t+o,bottom:i+n,x:t,y:i}}function xi(e,t,i){let{reference:o,floating:n}=e;const r=Vt(t),s=sn(t),l=rn(s),a=W(t),c=r==="y",h=o.x+o.width/2-n.width/2,u=o.y+o.height/2-n.height/2,b=o[l]/2-n[l]/2;let p;switch(a){case"top":p={x:h,y:o.y-n.height};break;case"bottom":p={x:h,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:u};break;case"left":p={x:o.x-n.width,y:u};break;default:p={x:o.x,y:o.y}}switch(be(t)){case"start":p[s]-=b*(i&&c?-1:1);break;case"end":p[s]+=b*(i&&c?-1:1);break}return p}const Bo=async(e,t,i)=>{const{placement:o="bottom",strategy:n="absolute",middleware:r=[],platform:s}=i,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(t));let c=await s.getElementRects({reference:e,floating:t,strategy:n}),{x:h,y:u}=xi(c,o,a),b=o,p={},m=0;for(let v=0;v<l.length;v++){const{name:g,fn:C}=l[v],{x:E,y:_,data:w,reset:z}=await C({x:h,y:u,initialPlacement:o,placement:b,strategy:n,middlewareData:p,rects:c,platform:s,elements:{reference:e,floating:t}});h=E??h,u=_??u,p={...p,[g]:{...p[g],...w}},z&&m<=50&&(m++,typeof z=="object"&&(z.placement&&(b=z.placement),z.rects&&(c=z.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:n}):z.rects),{x:h,y:u}=xi(c,b,a)),v=-1)}return{x:h,y:u,placement:b,strategy:n,middlewareData:p}};async function oi(e,t){var i;t===void 0&&(t={});const{x:o,y:n,platform:r,rects:s,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:b=!1,padding:p=0}=Ut(t,e),m=ln(p),v=l[b?u==="floating"?"reference":"floating":u],g=yt(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(v)))==null||i?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),C=u==="floating"?{x:o,y:n,width:s.floating.width,height:s.floating.height}:s.reference,E=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),_=await(r.isElement==null?void 0:r.isElement(E))?await(r.getScale==null?void 0:r.getScale(E))||{x:1,y:1}:{x:1,y:1},w=yt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:C,offsetParent:E,strategy:a}):C);return{top:(g.top-w.top+m.top)/_.y,bottom:(w.bottom-g.bottom+m.bottom)/_.y,left:(g.left-w.left+m.left)/_.x,right:(w.right-g.right+m.right)/_.x}}const No=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,o;const{placement:n,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:b,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...g}=Ut(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const C=W(n),E=W(l)===l,_=await(a.isRTL==null?void 0:a.isRTL(c.floating)),w=b||(E||!v?[se(l)]:jo(l));!b&&m!=="none"&&w.push(...Ro(l,v,m,_));const z=[l,...w],y=await oi(t,g),S=[];let P=((o=r.flip)==null?void 0:o.overflows)||[];if(h&&S.push(y[C]),u){const N=Po(n,s,_);S.push(y[N[0]],y[N[1]])}if(P=[...P,{placement:n,overflows:S}],!S.every(N=>N<=0)){var U,k;const N=(((U=r.flip)==null?void 0:U.index)||0)+1,bt=z[N];if(bt)return{data:{index:N,overflows:P},reset:{placement:bt}};let G=(k=P.filter(I=>I.overflows[0]<=0).sort((I,V)=>I.overflows[1]-V.overflows[1])[0])==null?void 0:k.placement;if(!G)switch(p){case"bestFit":{var pt;const I=(pt=P.map(V=>[V.placement,V.overflows.filter(nt=>nt>0).reduce((nt,Ae)=>nt+Ae,0)]).sort((V,nt)=>V[1]-nt[1])[0])==null?void 0:pt[0];I&&(G=I);break}case"initialPlacement":G=l;break}if(n!==G)return{reset:{placement:G}}}return{}}}};function an(e){const t=vt(...e.map(r=>r.left)),i=vt(...e.map(r=>r.top)),o=F(...e.map(r=>r.right)),n=F(...e.map(r=>r.bottom));return{x:t,y:i,width:o-t,height:n-i}}function Io(e){const t=e.slice().sort((n,r)=>n.y-r.y),i=[];let o=null;for(let n=0;n<t.length;n++){const r=t[n];!o||r.y-o.y>o.height/2?i.push([r]):i[i.length-1].push(r),o=r}return i.map(n=>yt(an(n)))}const Ho=function(e){return e===void 0&&(e={}),{name:"inline",options:e,async fn(t){const{placement:i,elements:o,rects:n,platform:r,strategy:s}=t,{padding:l=2,x:a,y:c}=Ut(e,t),h=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(o.reference))||[]),u=Io(h),b=yt(an(h)),p=ln(l);function m(){if(u.length===2&&u[0].left>u[1].right&&a!=null&&c!=null)return u.find(g=>a>g.left-p.left&&a<g.right+p.right&&c>g.top-p.top&&c<g.bottom+p.bottom)||b;if(u.length>=2){if(Vt(i)==="y"){const k=u[0],pt=u[u.length-1],N=W(i)==="top",bt=k.top,G=pt.bottom,I=N?k.left:pt.left,V=N?k.right:pt.right,nt=V-I,Ae=G-bt;return{top:bt,bottom:G,left:I,right:V,width:nt,height:Ae,x:I,y:bt}}const g=W(i)==="left",C=F(...u.map(k=>k.right)),E=vt(...u.map(k=>k.left)),_=u.filter(k=>g?k.left===E:k.right===C),w=_[0].top,z=_[_.length-1].bottom,y=E,S=C,P=S-y,U=z-w;return{top:w,bottom:z,left:y,right:S,width:P,height:U,x:y,y:w}}return b}const v=await r.getElementRects({reference:{getBoundingClientRect:m},floating:o.floating,strategy:s});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function Do(e,t){const{placement:i,platform:o,elements:n}=e,r=await(o.isRTL==null?void 0:o.isRTL(n.floating)),s=W(i),l=be(i),a=Vt(i)==="y",c=["left","top"].includes(s)?-1:1,h=r&&a?-1:1,u=Ut(t,e);let{mainAxis:b,crossAxis:p,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof m=="number"&&(p=l==="end"?m*-1:m),a?{x:p*h,y:b*c}:{x:b*c,y:p*h}}const cn=function(e){return{name:"offset",options:e,async fn(t){var i,o;const{x:n,y:r,placement:s,middlewareData:l}=t,a=await Do(t,e);return s===((i=l.offset)==null?void 0:i.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:n+a.x,y:r+a.y,data:{...a,placement:s}}}}},Uo=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:o,placement:n}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:g=>{let{x:C,y:E}=g;return{x:C,y:E}}},...a}=Ut(e,t),c={x:i,y:o},h=await oi(t,a),u=Vt(W(n)),b=on(u);let p=c[b],m=c[u];if(r){const g=b==="y"?"top":"left",C=b==="y"?"bottom":"right",E=p+h[g],_=p-h[C];p=_i(E,p,_)}if(s){const g=u==="y"?"top":"left",C=u==="y"?"bottom":"right",E=m+h[g],_=m-h[C];m=_i(E,m,_)}const v=l.fn({...t,[b]:p,[u]:m});return{...v,data:{x:v.x-i,y:v.y-o}}}}};function Z(e){return hn(e)?(e.nodeName||"").toLowerCase():"#document"}function j(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function tt(e){var t;return(t=(hn(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function hn(e){return e instanceof Node||e instanceof j(e).Node}function Y(e){return e instanceof Element||e instanceof j(e).Element}function H(e){return e instanceof HTMLElement||e instanceof j(e).HTMLElement}function wi(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof j(e).ShadowRoot}function Ft(e){const{overflow:t,overflowX:i,overflowY:o,display:n}=R(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+i)&&!["inline","contents"].includes(n)}function Vo(e){return["table","td","th"].includes(Z(e))}function ri(e){const t=si(),i=R(e);return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(i.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(i.contain||"").includes(o))}function Fo(e){let t=_t(e);for(;H(t)&&!fe(t);){if(ri(t))return t;t=_t(t)}return null}function si(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fe(e){return["html","body","#document"].includes(Z(e))}function R(e){return j(e).getComputedStyle(e)}function me(e){return Y(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function _t(e){if(Z(e)==="html")return e;const t=e.assignedSlot||e.parentNode||wi(e)&&e.host||tt(e);return wi(t)?t.host:t}function un(e){const t=_t(e);return fe(t)?e.ownerDocument?e.ownerDocument.body:e.body:H(t)&&Ft(t)?t:un(t)}function je(e,t,i){var o;t===void 0&&(t=[]),i===void 0&&(i=!0);const n=un(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),s=j(n);return r?t.concat(s,s.visualViewport||[],Ft(n)?n:[],s.frameElement&&i?je(s.frameElement):[]):t.concat(n,je(n,[],i))}function dn(e){const t=R(e);let i=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const n=H(e),r=n?e.offsetWidth:i,s=n?e.offsetHeight:o,l=re(i)!==r||re(o)!==s;return l&&(i=r,o=s),{width:i,height:o,$:l}}function pn(e){return Y(e)?e:e.contextElement}function gt(e){const t=pn(e);if(!H(t))return X(1);const i=t.getBoundingClientRect(),{width:o,height:n,$:r}=dn(t);let s=(r?re(i.width):i.width)/o,l=(r?re(i.height):i.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const qo=X(0);function bn(e){const t=j(e);return!si()||!t.visualViewport?qo:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wo(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==j(e)?!1:t}function Rt(e,t,i,o){t===void 0&&(t=!1),i===void 0&&(i=!1);const n=e.getBoundingClientRect(),r=pn(e);let s=X(1);t&&(o?Y(o)&&(s=gt(o)):s=gt(e));const l=Wo(r,i,o)?bn(r):X(0);let a=(n.left+l.x)/s.x,c=(n.top+l.y)/s.y,h=n.width/s.x,u=n.height/s.y;if(r){const b=j(r),p=o&&Y(o)?j(o):o;let m=b,v=m.frameElement;for(;v&&o&&p!==m;){const g=gt(v),C=v.getBoundingClientRect(),E=R(v),_=C.left+(v.clientLeft+parseFloat(E.paddingLeft))*g.x,w=C.top+(v.clientTop+parseFloat(E.paddingTop))*g.y;a*=g.x,c*=g.y,h*=g.x,u*=g.y,a+=_,c+=w,m=j(v),v=m.frameElement}}return yt({width:h,height:u,x:a,y:c})}const Yo=[":popover-open",":modal"];function fn(e){return Yo.some(t=>{try{return e.matches(t)}catch{return!1}})}function Go(e){let{elements:t,rect:i,offsetParent:o,strategy:n}=e;const r=n==="fixed",s=tt(o),l=t?fn(t.floating):!1;if(o===s||l&&r)return i;let a={scrollLeft:0,scrollTop:0},c=X(1);const h=X(0),u=H(o);if((u||!u&&!r)&&((Z(o)!=="body"||Ft(s))&&(a=me(o)),H(o))){const b=Rt(o);c=gt(o),h.x=b.x+o.clientLeft,h.y=b.y+o.clientTop}return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+h.x,y:i.y*c.y-a.scrollTop*c.y+h.y}}function Qo(e){return Array.from(e.getClientRects())}function mn(e){return Rt(tt(e)).left+me(e).scrollLeft}function Jo(e){const t=tt(e),i=me(e),o=e.ownerDocument.body,n=F(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=F(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let s=-i.scrollLeft+mn(e);const l=-i.scrollTop;return R(o).direction==="rtl"&&(s+=F(t.clientWidth,o.clientWidth)-n),{width:n,height:r,x:s,y:l}}function Xo(e,t){const i=j(e),o=tt(e),n=i.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,a=0;if(n){r=n.width,s=n.height;const c=si();(!c||c&&t==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:r,height:s,x:l,y:a}}function Zo(e,t){const i=Rt(e,!0,t==="fixed"),o=i.top+e.clientTop,n=i.left+e.clientLeft,r=H(e)?gt(e):X(1),s=e.clientWidth*r.x,l=e.clientHeight*r.y,a=n*r.x,c=o*r.y;return{width:s,height:l,x:a,y:c}}function $i(e,t,i){let o;if(t==="viewport")o=Xo(e,i);else if(t==="document")o=Jo(tt(e));else if(Y(t))o=Zo(t,i);else{const n=bn(e);o={...t,x:t.x-n.x,y:t.y-n.y}}return yt(o)}function gn(e,t){const i=_t(e);return i===t||!Y(i)||fe(i)?!1:R(i).position==="fixed"||gn(i,t)}function Ko(e,t){const i=t.get(e);if(i)return i;let o=je(e,[],!1).filter(l=>Y(l)&&Z(l)!=="body"),n=null;const r=R(e).position==="fixed";let s=r?_t(e):e;for(;Y(s)&&!fe(s);){const l=R(s),a=ri(s);!a&&l.position==="fixed"&&(n=null),(r?!a&&!n:!a&&l.position==="static"&&n&&["absolute","fixed"].includes(n.position)||Ft(s)&&!a&&gn(e,s))?o=o.filter(c=>c!==s):n=l,s=_t(s)}return t.set(e,o),o}function tr(e){let{element:t,boundary:i,rootBoundary:o,strategy:n}=e;const r=[...i==="clippingAncestors"?Ko(t,this._c):[].concat(i),o],s=r[0],l=r.reduce((a,c)=>{const h=$i(t,c,n);return a.top=F(h.top,a.top),a.right=vt(h.right,a.right),a.bottom=vt(h.bottom,a.bottom),a.left=F(h.left,a.left),a},$i(t,s,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function er(e){const{width:t,height:i}=dn(e);return{width:t,height:i}}function ir(e,t,i){const o=H(t),n=tt(t),r=i==="fixed",s=Rt(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=X(0);if(o||!o&&!r)if((Z(t)!=="body"||Ft(n))&&(l=me(t)),o){const u=Rt(t,!0,r,t);a.x=u.x+t.clientLeft,a.y=u.y+t.clientTop}else n&&(a.x=mn(n));const c=s.left+l.scrollLeft-a.x,h=s.top+l.scrollTop-a.y;return{x:c,y:h,width:s.width,height:s.height}}function Ei(e,t){return!H(e)||R(e).position==="fixed"?null:t?t(e):e.offsetParent}function vn(e,t){const i=j(e);if(!H(e)||fn(e))return i;let o=Ei(e,t);for(;o&&Vo(o)&&R(o).position==="static";)o=Ei(o,t);return o&&(Z(o)==="html"||Z(o)==="body"&&R(o).position==="static"&&!ri(o))?i:o||Fo(e)||i}const nr=async function(e){const t=this.getOffsetParent||vn,i=this.getDimensions;return{reference:ir(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,...await i(e.floating)}}};function or(e){return R(e).direction==="rtl"}const rr={convertOffsetParentRelativeRectToViewportRelativeRect:Go,getDocumentElement:tt,getClippingRect:tr,getOffsetParent:vn,getElementRects:nr,getClientRects:Qo,getDimensions:er,getScale:gt,isElement:Y,isRTL:or},yn=Uo,_n=No,xn=Ho,wn=(e,t,i)=>{const o=new Map,n={platform:rr,...i},r={...n.platform,_c:o};return Bo(e,t,{...n,platform:r})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,li=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ai=Symbol(),Ai=new WeakMap;let $n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ai)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(li&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ai.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ai.set(t,e))}return e}toString(){return this.cssText}};const sr=e=>new $n(typeof e=="string"?e:e+"",void 0,ai),$=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]);return new $n(i,e,ai)},lr=(e,t)=>{if(li)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),n=ie.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=i.cssText,e.appendChild(o)}},Ci=li?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return sr(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ar,defineProperty:cr,getOwnPropertyDescriptor:hr,getOwnPropertyNames:ur,getOwnPropertySymbols:dr,getPrototypeOf:pr}=Object,xt=globalThis,ki=xt.trustedTypes,br=ki?ki.emptyScript:"",Si=xt.reactiveElementPolyfillSupport,zt=(e,t)=>e,le={toAttribute(e,t){switch(t){case Boolean:e=e?br:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},ci=(e,t)=>!ar(e,t),Oi={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ci};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),xt.litPropertyMetadata??(xt.litPropertyMetadata=new WeakMap);class mt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Oi){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(t,o,i);n!==void 0&&cr(this.prototype,t,n)}}static getPropertyDescriptor(t,i,o){const{get:n,set:r}=hr(this.prototype,t)??{get(){return this[i]},set(s){this[i]=s}};return{get(){return n==null?void 0:n.call(this)},set(s){const l=n==null?void 0:n.call(this);r.call(this,s),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Oi}static _$Ei(){if(this.hasOwnProperty(zt("elementProperties")))return;const t=pr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(zt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zt("properties"))){const i=this.properties,o=[...ur(i),...dr(i)];for(const n of o)this.createProperty(n,i[n])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,n]of i)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const n=this._$Eu(i,o);n!==void 0&&this._$Eh.set(n,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)i.unshift(Ci(n))}else t!==void 0&&i.push(Ci(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(i=>i(this))}addController(t){var i;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)==null||i.call(t))}removeController(t){var i;(i=this._$EO)==null||i.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return lr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostConnected)==null?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(i=>{var o;return(o=i.hostDisconnected)==null?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EC(t,i){var o;const n=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,n);if(r!==void 0&&n.reflect===!0){const s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:le).toAttribute(i,n.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,i){var o;const n=this.constructor,r=n._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:le;this._$Em=r,this[r]=l.fromAttribute(i,s.type),this._$Em=null}}requestUpdate(t,i,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??ci)(this[t],i))return;this.P(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,i,o){this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,s]of n)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let i=!1;const o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(o)):this._$EU()}catch(n){throw i=!1,this._$EU(),n}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$EO)==null||i.forEach(o=>{var n;return(n=o.hostUpdated)==null?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(i=>this._$EC(i,this[i]))),this._$EU()}updated(t){}firstUpdated(t){}}mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[zt("elementProperties")]=new Map,mt[zt("finalized")]=new Map,Si==null||Si({ReactiveElement:mt}),(xt.reactiveElementVersions??(xt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=globalThis,ce=ae.trustedTypes,zi=ce?ce.createPolicy("lit-html",{createHTML:e=>e}):void 0,En="$lit$",Q=`lit$${Math.random().toFixed(9).slice(2)}$`,An="?"+Q,fr=`<${An}>`,at=document,Mt=()=>at.createComment(""),Bt=e=>e===null||typeof e!="object"&&typeof e!="function",Cn=Array.isArray,mr=e=>Cn(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ce=`[ 	
\f\r]`,St=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ti=/-->/g,Pi=/>/g,rt=RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ji=/'/g,Li=/"/g,kn=/^(?:script|style|textarea|title)$/i,gr=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),f=gr(1),ct=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Ri=new WeakMap,st=at.createTreeWalker(at,129);function Sn(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zi!==void 0?zi.createHTML(t):t}const vr=(e,t)=>{const i=e.length-1,o=[];let n,r=t===2?"<svg>":"",s=St;for(let l=0;l<i;l++){const a=e[l];let c,h,u=-1,b=0;for(;b<a.length&&(s.lastIndex=b,h=s.exec(a),h!==null);)b=s.lastIndex,s===St?h[1]==="!--"?s=Ti:h[1]!==void 0?s=Pi:h[2]!==void 0?(kn.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=rt):h[3]!==void 0&&(s=rt):s===rt?h[0]===">"?(s=n??St,u=-1):h[1]===void 0?u=-2:(u=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?rt:h[3]==='"'?Li:ji):s===Li||s===ji?s=rt:s===Ti||s===Pi?s=St:(s=rt,n=void 0);const p=s===rt&&e[l+1].startsWith("/>")?" ":"";r+=s===St?a+fr:u>=0?(o.push(c),a.slice(0,u)+En+a.slice(u)+Q+p):a+Q+(u===-2?l:p)}return[Sn(e,r+(e[i]||"<?>")+(t===2?"</svg>":"")),o]};class Nt{constructor({strings:t,_$litType$:i},o){let n;this.parts=[];let r=0,s=0;const l=t.length-1,a=this.parts,[c,h]=vr(t,i);if(this.el=Nt.createElement(c,o),st.currentNode=this.el.content,i===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(n=st.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes())for(const u of n.getAttributeNames())if(u.endsWith(En)){const b=h[s++],p=n.getAttribute(u).split(Q),m=/([.?@])?(.*)/.exec(b);a.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?_r:m[1]==="?"?xr:m[1]==="@"?wr:ge}),n.removeAttribute(u)}else u.startsWith(Q)&&(a.push({type:6,index:r}),n.removeAttribute(u));if(kn.test(n.tagName)){const u=n.textContent.split(Q),b=u.length-1;if(b>0){n.textContent=ce?ce.emptyScript:"";for(let p=0;p<b;p++)n.append(u[p],Mt()),st.nextNode(),a.push({type:2,index:++r});n.append(u[b],Mt())}}}else if(n.nodeType===8)if(n.data===An)a.push({type:2,index:r});else{let u=-1;for(;(u=n.data.indexOf(Q,u+1))!==-1;)a.push({type:7,index:r}),u+=Q.length-1}r++}}static createElement(t,i){const o=at.createElement("template");return o.innerHTML=t,o}}function wt(e,t,i=e,o){var n,r;if(t===ct)return t;let s=o!==void 0?(n=i._$Co)==null?void 0:n[o]:i._$Cl;const l=Bt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((r=s==null?void 0:s._$AO)==null||r.call(s,!1),l===void 0?s=void 0:(s=new l(e),s._$AT(e,i,o)),o!==void 0?(i._$Co??(i._$Co=[]))[o]=s:i._$Cl=s),s!==void 0&&(t=wt(e,s._$AS(e,t.values),s,o)),t}class yr{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,n=((t==null?void 0:t.creationScope)??at).importNode(i,!0);st.currentNode=n;let r=st.nextNode(),s=0,l=0,a=o[0];for(;a!==void 0;){if(s===a.index){let c;a.type===2?c=new qt(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new $r(r,this,t)),this._$AV.push(c),a=o[++l]}s!==(a==null?void 0:a.index)&&(r=st.nextNode(),s++)}return st.currentNode=at,n}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}}class qt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,o,n){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=wt(this,t,i),Bt(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==ct&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):mr(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==O&&Bt(this._$AH)?this._$AA.nextSibling.data=t:this.T(at.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Nt.createElement(Sn(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(o);else{const s=new yr(r,this),l=s.u(this.options);s.p(o),this.T(l),this._$AH=s}}_$AC(t){let i=Ri.get(t.strings);return i===void 0&&Ri.set(t.strings,i=new Nt(t)),i}k(t){Cn(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,n=0;for(const r of t)n===i.length?i.push(o=new qt(this.S(Mt()),this.S(Mt()),this,this.options)):o=i[n],o._$AI(r),n++;n<i.length&&(this._$AR(o&&o._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,i);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,n,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=O}_$AI(t,i=this,o,n){const r=this.strings;let s=!1;if(r===void 0)t=wt(this,t,i,0),s=!Bt(t)||t!==this._$AH&&t!==ct,s&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=wt(this,l[o+a],i,a),c===ct&&(c=this._$AH[a]),s||(s=!Bt(c)||c!==this._$AH[a]),c===O?t=O:t!==O&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}s&&!n&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _r extends ge{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}class xr extends ge{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==O)}}class wr extends ge{constructor(t,i,o,n,r){super(t,i,o,n,r),this.type=5}_$AI(t,i=this){if((t=wt(this,t,i,0)??O)===ct)return;const o=this._$AH,n=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==O&&(o===O||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class $r{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){wt(this,t)}}const Mi=ae.litHtmlPolyfillSupport;Mi==null||Mi(Nt,qt),(ae.litHtmlVersions??(ae.litHtmlVersions=[])).push("3.1.3");const Le=(e,t,i)=>{const o=(i==null?void 0:i.renderBefore)??t;let n=o._$litPart$;if(n===void 0){const r=(i==null?void 0:i.renderBefore)??null;o._$litPart$=n=new qt(t.insertBefore(Mt(),r),r,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Tt=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ct}};var Bi;Tt._$litElement$=!0,Tt.finalized=!0,(Bi=globalThis.litElementHydrateSupport)==null||Bi.call(globalThis,{LitElement:Tt});const Ni=globalThis.litElementPolyfillSupport;Ni==null||Ni({LitElement:Tt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ci},Ar=(e=Er,t,i)=>{const{kind:o,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,e),o==="accessor"){const{name:s}=i;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,e)},init(l){return l!==void 0&&this.P(s,void 0,e),l}}}if(o==="setter"){const{name:s}=i;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,e)}}throw Error("Unsupported decorator location: "+o)};function d(e){return(t,i)=>typeof i=="object"?Ar(e,t,i):((o,n,r)=>{const s=n.hasOwnProperty(r);return n.constructor.createProperty(r,s?{...o,wrapped:!0}:o),s?Object.getOwnPropertyDescriptor(n,r):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Cr(e){return d({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kr=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const On={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zn=e=>(...t)=>({_$litDirective$:e,values:t});let Tn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=(e,t)=>{var i;const o=e._$AN;if(o===void 0)return!1;for(const n of o)(i=n._$AO)==null||i.call(n,t,!1),Pt(n,t);return!0},he=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},Pn=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),zr(t)}};function Sr(e){this._$AN!==void 0?(he(this),this._$AM=e,Pn(this)):this._$AM=e}function Or(e,t=!1,i=0){const o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let r=i;r<o.length;r++)Pt(o[r],!1),he(o[r]);else o!=null&&(Pt(o,!1),he(o));else Pt(this,e)}const zr=e=>{e.type==On.CHILD&&(e._$AP??(e._$AP=Or),e._$AQ??(e._$AQ=Sr))};class Tr extends Tn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),Pn(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,n;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(n=this.disconnected)==null||n.call(this)),i&&(Pt(this,t),he(this))}setValue(t){if(kr(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=()=>new Pr;class Pr{}const ke=new WeakMap,q=zn(class extends Tr{render(e){return O}update(e,[t]){var i;const o=t!==this.Y;return o&&this.Y!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.Y=t,this.ht=(i=e.options)==null?void 0:i.host,this.rt(this.ct=e.element)),O}rt(e){if(typeof this.Y=="function"){const t=this.ht??globalThis;let i=ke.get(t);i===void 0&&(i=new WeakMap,ke.set(t,i)),i.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),i.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return typeof this.Y=="function"?(e=ke.get(this.ht??globalThis))==null?void 0:e.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class A extends Tt{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const o of t)this.elements.add(o);const i=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const o of i)o.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(i=>{const o=i[0];if(!o.isIntersecting)return;const n=o.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,s=[...this.elements][r];s&&(this.visibleElements=[...this.visibleElements,s],t.observe(s))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const i=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,o=[...this.elements][i];o&&t.observe(o)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const i of this.elements)t.unobserve(i);this.visibleElements=[],this.observeLastElement()}}static create(t,i){const o=document.createDocumentFragment();if(t.length===0)return Le(t(),o),o.firstElementChild;if(!i)throw new Error("UIComponent: Initial state is required for statefull components.");let n=i;const r=t,s=l=>(n={...n,...l},Le(r(n),o),n);return s(i),[o.firstElementChild,s]}}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const jn=Object.freeze({left:0,top:0,width:16,height:16}),ue=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Wt=Object.freeze({...jn,...ue}),Re=Object.freeze({...Wt,body:"",hidden:!1}),jr=Object.freeze({width:null,height:null}),Ln=Object.freeze({...jr,...ue});function Lr(e,t=0){const i=e.replace(/^-?[0-9.]*/,"");function o(n){for(;n<0;)n+=4;return n%4}if(i===""){const n=parseInt(e);return isNaN(n)?0:o(n)}else if(i!==e){let n=0;switch(i){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(e.slice(0,e.length-i.length));return isNaN(r)?0:(r=r/n,r%1===0?o(r):0)}}return t}const Rr=/[\s,]+/;function Mr(e,t){t.split(Rr).forEach(i=>{switch(i.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}const Rn={...Ln,preserveAspectRatio:""};function Ii(e){const t={...Rn},i=(o,n)=>e.getAttribute(o)||n;return t.width=i("width",null),t.height=i("height",null),t.rotate=Lr(i("rotate","")),Mr(t,i("flip","")),t.preserveAspectRatio=i("preserveAspectRatio",i("preserveaspectratio","")),t}function Br(e,t){for(const i in Rn)if(e[i]!==t[i])return!0;return!1}const jt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Yt=(e,t,i,o="")=>{const n=e.split(":");if(e.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;o=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:o,prefix:a,name:l};return t&&!ne(c)?null:c}const r=n[0],s=r.split("-");if(s.length>1){const l={provider:o,prefix:s.shift(),name:s.join("-")};return t&&!ne(l)?null:l}if(i&&o===""){const l={provider:o,prefix:"",name:r};return t&&!ne(l,i)?null:l}return null},ne=(e,t)=>e?!!((e.provider===""||e.provider.match(jt))&&(t&&e.prefix===""||e.prefix.match(jt))&&e.name.match(jt)):!1;function Nr(e,t){const i={};!e.hFlip!=!t.hFlip&&(i.hFlip=!0),!e.vFlip!=!t.vFlip&&(i.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(i.rotate=o),i}function Hi(e,t){const i=Nr(e,t);for(const o in Re)o in ue?o in e&&!(o in i)&&(i[o]=ue[o]):o in t?i[o]=t[o]:o in e&&(i[o]=e[o]);return i}function Ir(e,t){const i=e.icons,o=e.aliases||Object.create(null),n=Object.create(null);function r(s){if(i[s])return n[s]=[];if(!(s in n)){n[s]=null;const l=o[s]&&o[s].parent,a=l&&r(l);a&&(n[s]=[l].concat(a))}return n[s]}return Object.keys(i).concat(Object.keys(o)).forEach(r),n}function Hr(e,t,i){const o=e.icons,n=e.aliases||Object.create(null);let r={};function s(l){r=Hi(o[l]||n[l],r)}return s(t),i.forEach(s),Hi(e,r)}function Mn(e,t){const i=[];if(typeof e!="object"||typeof e.icons!="object")return i;e.not_found instanceof Array&&e.not_found.forEach(n=>{t(n,null),i.push(n)});const o=Ir(e);for(const n in o){const r=o[n];r&&(t(n,Hr(e,n,r)),i.push(n))}return i}const Dr={provider:"",aliases:{},not_found:{},...jn};function Se(e,t){for(const i in t)if(i in e&&typeof e[i]!=typeof t[i])return!1;return!0}function Bn(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!Se(e,Dr))return null;const i=t.icons;for(const n in i){const r=i[n];if(!n.match(jt)||typeof r.body!="string"||!Se(r,Re))return null}const o=t.aliases||Object.create(null);for(const n in o){const r=o[n],s=r.parent;if(!n.match(jt)||typeof s!="string"||!i[s]&&!o[s]||!Se(r,Re))return null}return t}const de=Object.create(null);function Ur(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function K(e,t){const i=de[e]||(de[e]=Object.create(null));return i[t]||(i[t]=Ur(e,t))}function hi(e,t){return Bn(t)?Mn(t,(i,o)=>{o?e.icons[i]=o:e.missing.add(i)}):[]}function Vr(e,t,i){try{if(typeof i.body=="string")return e.icons[t]={...i},!0}catch{}return!1}function Fr(e,t){let i=[];return(typeof e=="string"?[e]:Object.keys(de)).forEach(o=>{(typeof o=="string"&&typeof t=="string"?[t]:Object.keys(de[o]||{})).forEach(n=>{const r=K(o,n);i=i.concat(Object.keys(r.icons).map(s=>(o!==""?"@"+o+":":"")+n+":"+s))})}),i}let It=!1;function Nn(e){return typeof e=="boolean"&&(It=e),It}function Ht(e){const t=typeof e=="string"?Yt(e,!0,It):e;if(t){const i=K(t.provider,t.prefix),o=t.name;return i.icons[o]||(i.missing.has(o)?null:void 0)}}function In(e,t){const i=Yt(e,!0,It);if(!i)return!1;const o=K(i.provider,i.prefix);return Vr(o,i.name,t)}function Di(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),It&&!t&&!e.prefix){let n=!1;return Bn(e)&&(e.prefix="",Mn(e,(r,s)=>{s&&In(r,s)&&(n=!0)})),n}const i=e.prefix;if(!ne({provider:t,prefix:i,name:"a"}))return!1;const o=K(t,i);return!!hi(o,e)}function Ui(e){return!!Ht(e)}function qr(e){const t=Ht(e);return t?{...Wt,...t}:null}function Wr(e){const t={loaded:[],missing:[],pending:[]},i=Object.create(null);e.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let o={provider:"",prefix:"",name:""};return e.forEach(n=>{if(o.name===n.name&&o.prefix===n.prefix&&o.provider===n.provider)return;o=n;const r=n.provider,s=n.prefix,l=n.name,a=i[r]||(i[r]=Object.create(null)),c=a[s]||(a[s]=K(r,s));let h;l in c.icons?h=t.loaded:s===""||c.missing.has(l)?h=t.missing:h=t.pending;const u={provider:r,prefix:s,name:l};h.push(u)}),t}function Hn(e,t){e.forEach(i=>{const o=i.loaderCallbacks;o&&(i.loaderCallbacks=o.filter(n=>n.id!==t))})}function Yr(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let i=!1;const o=e.provider,n=e.prefix;t.forEach(r=>{const s=r.icons,l=s.pending.length;s.pending=s.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(e.icons[c])s.loaded.push({provider:o,prefix:n,name:c});else if(e.missing.has(c))s.missing.push({provider:o,prefix:n,name:c});else return i=!0,!0;return!1}),s.pending.length!==l&&(i||Hn([e],r.id),r.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),r.abort))})}))}let Gr=0;function Qr(e,t,i){const o=Gr++,n=Hn.bind(null,i,o);if(!t.pending.length)return n;const r={id:o,icons:t,callback:e,abort:n};return i.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(r)}),n}const Me=Object.create(null);function Vi(e,t){Me[e]=t}function Be(e){return Me[e]||Me[""]}function Jr(e,t=!0,i=!1){const o=[];return e.forEach(n=>{const r=typeof n=="string"?Yt(n,t,i):n;r&&o.push(r)}),o}var Xr={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Zr(e,t,i,o){const n=e.resources.length,r=e.random?Math.floor(Math.random()*n):e.index;let s;if(e.random){let y=e.resources.slice(0);for(s=[];y.length>1;){const S=Math.floor(Math.random()*y.length);s.push(y[S]),y=y.slice(0,S).concat(y.slice(S+1))}s=s.concat(y)}else s=e.resources.slice(r).concat(e.resources.slice(0,r));const l=Date.now();let a="pending",c=0,h,u=null,b=[],p=[];typeof o=="function"&&p.push(o);function m(){u&&(clearTimeout(u),u=null)}function v(){a==="pending"&&(a="aborted"),m(),b.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),b=[]}function g(y,S){S&&(p=[]),typeof y=="function"&&p.push(y)}function C(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:b.length,subscribe:g,abort:v}}function E(){a="failed",p.forEach(y=>{y(void 0,h)})}function _(){b.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),b=[]}function w(y,S,P){const U=S!=="success";switch(b=b.filter(k=>k!==y),a){case"pending":break;case"failed":if(U||!e.dataAfterTimeout)return;break;default:return}if(S==="abort"){h=P,E();return}if(U){h=P,b.length||(s.length?z():E());return}if(m(),_(),!e.random){const k=e.resources.indexOf(y.resource);k!==-1&&k!==e.index&&(e.index=k)}a="completed",p.forEach(k=>{k(P)})}function z(){if(a!=="pending")return;m();const y=s.shift();if(y===void 0){if(b.length){u=setTimeout(()=>{m(),a==="pending"&&(_(),E())},e.timeout);return}E();return}const S={status:"pending",resource:y,callback:(P,U)=>{w(S,P,U)}};b.push(S),c++,u=setTimeout(z,e.rotate),i(y,t,S.callback)}return setTimeout(z),C}function Dn(e){const t={...Xr,...e};let i=[];function o(){i=i.filter(s=>s().status==="pending")}function n(s,l,a){const c=Zr(t,s,l,(h,u)=>{o(),a&&a(h,u)});return i.push(c),c}function r(s){return i.find(l=>s(l))||null}return{query:n,find:r,setIndex:s=>{t.index=s},getIndex:()=>t.index,cleanup:o}}function ui(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const ve=Object.create(null),Kt=["https://api.simplesvg.com","https://api.unisvg.com"],Ne=[];for(;Kt.length>0;)Kt.length===1||Math.random()>.5?Ne.push(Kt.shift()):Ne.push(Kt.pop());ve[""]=ui({resources:["https://api.iconify.design"].concat(Ne)});function Fi(e,t){const i=ui(t);return i===null?!1:(ve[e]=i,!0)}function ye(e){return ve[e]}function Kr(){return Object.keys(ve)}function qi(){}const Oe=Object.create(null);function ts(e){if(!Oe[e]){const t=ye(e);if(!t)return;const i=Dn(t),o={config:t,redundancy:i};Oe[e]=o}return Oe[e]}function Un(e,t,i){let o,n;if(typeof e=="string"){const r=Be(e);if(!r)return i(void 0,424),qi;n=r.send;const s=ts(e);s&&(o=s.redundancy)}else{const r=ui(e);if(r){o=Dn(r);const s=e.resources?e.resources[0]:"",l=Be(s);l&&(n=l.send)}}return!o||!n?(i(void 0,424),qi):o.query(t,n,i)().abort}const Wi="iconify2",Dt="iconify",Vn=Dt+"-count",Yi=Dt+"-version",Fn=36e5,es=168,is=50;function Ie(e,t){try{return e.getItem(t)}catch{}}function di(e,t,i){try{return e.setItem(t,i),!0}catch{}}function Gi(e,t){try{e.removeItem(t)}catch{}}function He(e,t){return di(e,Vn,t.toString())}function De(e){return parseInt(Ie(e,Vn))||0}const lt={local:!0,session:!0},qn={local:new Set,session:new Set};let pi=!1;function ns(e){pi=e}let te=typeof window>"u"?{}:window;function Wn(e){const t=e+"Storage";try{if(te&&te[t]&&typeof te[t].length=="number")return te[t]}catch{}lt[e]=!1}function Yn(e,t){const i=Wn(e);if(!i)return;const o=Ie(i,Yi);if(o!==Wi){if(o){const l=De(i);for(let a=0;a<l;a++)Gi(i,Dt+a.toString())}di(i,Yi,Wi),He(i,0);return}const n=Math.floor(Date.now()/Fn)-es,r=l=>{const a=Dt+l.toString(),c=Ie(i,a);if(typeof c=="string"){try{const h=JSON.parse(c);if(typeof h=="object"&&typeof h.cached=="number"&&h.cached>n&&typeof h.provider=="string"&&typeof h.data=="object"&&typeof h.data.prefix=="string"&&t(h,l))return!0}catch{}Gi(i,a)}};let s=De(i);for(let l=s-1;l>=0;l--)r(l)||(l===s-1?(s--,He(i,s)):qn[e].add(l))}function Gn(){if(!pi){ns(!0);for(const e in lt)Yn(e,t=>{const i=t.data,o=t.provider,n=i.prefix,r=K(o,n);if(!hi(r,i).length)return!1;const s=i.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,s):s,!0})}}function os(e,t){const i=e.lastModifiedCached;if(i&&i>=t)return i===t;if(e.lastModifiedCached=t,i)for(const o in lt)Yn(o,n=>{const r=n.data;return n.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===t});return!0}function rs(e,t){pi||Gn();function i(o){let n;if(!lt[o]||!(n=Wn(o)))return;const r=qn[o];let s;if(r.size)r.delete(s=Array.from(r).shift());else if(s=De(n),s>=is||!He(n,s+1))return;const l={cached:Math.floor(Date.now()/Fn),provider:e.provider,data:t};return di(n,Dt+s.toString(),JSON.stringify(l))}t.lastModified&&!os(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),i("local")||i("session"))}function Qi(){}function ss(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,Yr(e)}))}function ls(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:i,prefix:o}=e,n=e.iconsToLoad;delete e.iconsToLoad;let r;!n||!(r=Be(i))||r.prepare(i,o,n).forEach(s=>{Un(i,s,l=>{if(typeof l!="object")s.icons.forEach(a=>{e.missing.add(a)});else try{const a=hi(e,l);if(!a.length)return;const c=e.pendingIcons;c&&a.forEach(h=>{c.delete(h)}),rs(e,l)}catch(a){console.error(a)}ss(e)})})}))}const bi=(e,t)=>{const i=Jr(e,!0,Nn()),o=Wr(i);if(!o.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(o.loaded,o.missing,o.pending,Qi)}),()=>{a=!1}}const n=Object.create(null),r=[];let s,l;return o.pending.forEach(a=>{const{provider:c,prefix:h}=a;if(h===l&&c===s)return;s=c,l=h,r.push(K(c,h));const u=n[c]||(n[c]=Object.create(null));u[h]||(u[h]=[])}),o.pending.forEach(a=>{const{provider:c,prefix:h,name:u}=a,b=K(c,h),p=b.pendingIcons||(b.pendingIcons=new Set);p.has(u)||(p.add(u),n[c][h].push(u))}),r.forEach(a=>{const{provider:c,prefix:h}=a;n[c][h].length&&ls(a,n[c][h])}),t?Qr(t,o,r):Qi},as=e=>new Promise((t,i)=>{const o=typeof e=="string"?Yt(e,!0):e;if(!o){i(e);return}bi([o||e],n=>{if(n.length&&o){const r=Ht(o);if(r){t({...Wt,...r});return}}i(e)})});function cs(e){try{const t=typeof e=="string"?JSON.parse(e):e;if(typeof t.body=="string")return{...t}}catch{}}function hs(e,t){const i=typeof e=="string"?Yt(e,!0,!0):null;if(!i){const r=cs(e);return{value:e,data:r}}const o=Ht(i);if(o!==void 0||!i.prefix)return{value:e,name:i,data:o};const n=bi([i],()=>t(e,i,Ht(i)));return{value:e,name:i,loading:n}}function ze(e){return e.hasAttribute("inline")}let Qn=!1;try{Qn=navigator.vendor.indexOf("Apple")===0}catch{}function us(e,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Qn||e.indexOf("<a")===-1)?"svg":e.indexOf("currentColor")===-1?"bg":"mask"}const ds=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ps=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ue(e,t,i){if(t===1)return e;if(i=i||100,typeof e=="number")return Math.ceil(e*t*i)/i;if(typeof e!="string")return e;const o=e.split(ds);if(o===null||!o.length)return e;const n=[];let r=o.shift(),s=ps.test(r);for(;;){if(s){const l=parseFloat(r);isNaN(l)?n.push(r):n.push(Math.ceil(l*t*i)/i)}else n.push(r);if(r=o.shift(),r===void 0)return n.join("");s=!s}}function bs(e,t="defs"){let i="";const o=e.indexOf("<"+t);for(;o>=0;){const n=e.indexOf(">",o),r=e.indexOf("</"+t);if(n===-1||r===-1)break;const s=e.indexOf(">",r);if(s===-1)break;i+=e.slice(n+1,r).trim(),e=e.slice(0,o).trim()+e.slice(s+1)}return{defs:i,content:e}}function fs(e,t){return e?"<defs>"+e+"</defs>"+t:t}function ms(e,t,i){const o=bs(e);return fs(o.defs,t+o.content+i)}const gs=e=>e==="unset"||e==="undefined"||e==="none";function Jn(e,t){const i={...Wt,...e},o={...Ln,...t},n={left:i.left,top:i.top,width:i.width,height:i.height};let r=i.body;[i,o].forEach(v=>{const g=[],C=v.hFlip,E=v.vFlip;let _=v.rotate;C?E?_+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):E&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let w;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:w=n.height/2+n.top,g.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,g.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}_%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),g.length&&(r=ms(r,'<g transform="'+g.join(" ")+'">',"</g>"))});const s=o.width,l=o.height,a=n.width,c=n.height;let h,u;s===null?(u=l===null?"1em":l==="auto"?c:l,h=Ue(u,a/c)):(h=s==="auto"?a:s,u=l===null?Ue(h,c/a):l==="auto"?c:l);const b={},p=(v,g)=>{gs(g)||(b[v]=g.toString())};p("width",h),p("height",u);const m=[n.left,n.top,a,c];return b.viewBox=m.join(" "),{attributes:b,viewBox:m,body:r}}function fi(e,t){let i=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)i+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+e+"</svg>"}function vs(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function ys(e){return"data:image/svg+xml,"+vs(e)}function Xn(e){return'url("'+ys(e)+'")'}const _s=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let pe=_s();function xs(e){pe=e}function ws(){return pe}function $s(e,t){const i=ye(e);if(!i)return 0;let o;if(!i.maxURL)o=0;else{let n=0;i.resources.forEach(s=>{n=Math.max(n,s.length)});const r=t+".json?icons=";o=i.maxURL-n-i.path.length-r.length}return o}function Es(e){return e===404}const As=(e,t,i)=>{const o=[],n=$s(e,t),r="icons";let s={type:r,provider:e,prefix:t,icons:[]},l=0;return i.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(o.push(s),s={type:r,provider:e,prefix:t,icons:[]},l=a.length),s.icons.push(a)}),o.push(s),o};function Cs(e){if(typeof e=="string"){const t=ye(e);if(t)return t.path}return"/"}const ks=(e,t,i)=>{if(!pe){i("abort",424);return}let o=Cs(t.provider);switch(t.type){case"icons":{const r=t.prefix,s=t.icons.join(","),l=new URLSearchParams({icons:s});o+=r+".json?"+l.toString();break}case"custom":{const r=t.uri;o+=r.slice(0,1)==="/"?r.slice(1):r;break}default:i("abort",400);return}let n=503;pe(e+o).then(r=>{const s=r.status;if(s!==200){setTimeout(()=>{i(Es(s)?"abort":"next",s)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?i("abort",r):i("next",n)});return}setTimeout(()=>{i("success",r)})}).catch(()=>{i("next",n)})},Ss={prepare:As,send:ks};function Ji(e,t){switch(e){case"local":case"session":lt[e]=t;break;case"all":for(const i in lt)lt[i]=t;break}}const Te="data-style";let Zn="";function Os(e){Zn=e}function Xi(e,t){let i=Array.from(e.childNodes).find(o=>o.hasAttribute&&o.hasAttribute(Te));i||(i=document.createElement("style"),i.setAttribute(Te,Te),e.appendChild(i)),i.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Zn}function Kn(){Vi("",Ss),Nn(!0);let e;try{e=window}catch{}if(e){if(Gn(),e.IconifyPreload!==void 0){const t=e.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Di(o))&&console.error(i)}catch{console.error(i)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(const i in t){const o="IconifyProviders["+i+"] is invalid.";try{const n=t[i];if(typeof n!="object"||!n||n.resources===void 0)continue;Fi(i,n)||console.error(o)}catch{console.error(o)}}}}return{enableCache:t=>Ji(t,!0),disableCache:t=>Ji(t,!1),iconLoaded:Ui,iconExists:Ui,getIcon:qr,listIcons:Fr,addIcon:In,addCollection:Di,calculateSize:Ue,buildIcon:Jn,iconToHTML:fi,svgToURL:Xn,loadIcons:bi,loadIcon:as,addAPIProvider:Fi,appendCustomStyle:Os,_api:{getAPIConfig:ye,setAPIModule:Vi,sendAPIQuery:Un,setFetch:xs,getFetch:ws,listAPIProviders:Kr}}}const Ve={"background-color":"currentColor"},to={"background-color":"transparent"},Zi={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Ki={"-webkit-mask":Ve,mask:Ve,background:to};for(const e in Ki){const t=Ki[e];for(const i in Zi)t[e+"-"+i]=Zi[i]}function tn(e){return e?e+(e.match(/^[-0-9.]+$/)?"px":""):"inherit"}function zs(e,t,i){const o=document.createElement("span");let n=e.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=e.attributes,s=fi(n,{...r,width:t.width+"",height:t.height+""}),l=Xn(s),a=o.style,c={"--svg":l,width:tn(r.width),height:tn(r.height),...i?Ve:to};for(const h in c)a.setProperty(h,c[h]);return o}let Lt;function Ts(){try{Lt=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{Lt=null}}function Ps(e){return Lt===void 0&&Ts(),Lt?Lt.createHTML(e):e}function js(e){const t=document.createElement("span"),i=e.attributes;let o="";i.width||(o="width: inherit;"),i.height||(o+="height: inherit;"),o&&(i.style=o);const n=fi(e.body,i);return t.innerHTML=Ps(n),t.firstChild}function Fe(e){return Array.from(e.childNodes).find(t=>{const i=t.tagName&&t.tagName.toUpperCase();return i==="SPAN"||i==="SVG"})}function en(e,t){const i=t.icon.data,o=t.customisations,n=Jn(i,o);o.preserveAspectRatio&&(n.attributes.preserveAspectRatio=o.preserveAspectRatio);const r=t.renderedMode;let s;switch(r){case"svg":s=js(n);break;default:s=zs(n,{...Wt,...i},r==="mask")}const l=Fe(e);l?s.tagName==="SPAN"&&l.tagName===s.tagName?l.setAttribute("style",s.getAttribute("style")):e.replaceChild(s,l):e.appendChild(s)}function nn(e,t,i){const o=i&&(i.rendered?i:i.lastRender);return{rendered:!1,inline:t,icon:e,lastRender:o}}function Ls(e="iconify-icon"){let t,i;try{t=window.customElements,i=window.HTMLElement}catch{return}if(!t||!i)return;const o=t.get(e);if(o)return o;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends i{constructor(){super(),ot(this,"_shadowRoot"),ot(this,"_initialised",!1),ot(this,"_state"),ot(this,"_checkQueued",!1),ot(this,"_connected",!1),ot(this,"_observer",null),ot(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),a=ze(this);Xi(l,a),this._state=nn({value:""},a),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const a=ze(this),c=this._state;a!==c.inline&&(c.inline=a,Xi(this._shadowRoot,a));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return ze(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const a=this._shadowRoot;if(l.renderedMode==="svg")try{a.lastChild.setCurrentTime(0);return}catch{}en(a,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,a=this.getAttribute("icon");if(a!==l.icon.value){this._iconChanged(a);return}if(!l.rendered||!this._visible)return;const c=this.getAttribute("mode"),h=Ii(this);(l.attrMode!==c||Br(l.customisations,h)||!Fe(this._shadowRoot))&&this._renderIcon(l.icon,h,c)}_iconChanged(l){const a=hs(l,(c,h,u)=>{const b=this._state;if(b.rendered||this.getAttribute("icon")!==c)return;const p={value:c,name:h,data:u};p.data?this._gotIconData(p):b.icon=p});a.data?this._gotIconData(a):this._state=nn(a,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=Fe(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Ii(this),this.getAttribute("mode"))}_renderIcon(l,a,c){const h=us(l.data.body,c),u=this._state.inline;en(this._shadowRoot,this._state={rendered:!0,icon:l,inline:u,customisations:a,attrMode:c,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const a=l.some(c=>c.isIntersecting);a!==this._visible&&(this._visible=a,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(l=>{l in r.prototype||Object.defineProperty(r.prototype,l,{get:function(){return this.getAttribute(l)},set:function(a){a!==null?this.setAttribute(l,a):this.removeAttribute(l)}})});const s=Kn();for(const l in s)r[l]=r.prototype[l]=s[l];return t.define(e,r),r}Ls()||Kn();var Rs=Object.defineProperty,D=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&Rs(t,i,n),n},ee;const B=(ee=class extends A{constructor(){super(),this._parent=J(),this._tooltip=J(),this._contextMenu=J(),this._mouseLeave=!1,this.onWindowMouseUp=e=>{const{value:t}=this._contextMenu;!this.contains(e.target)&&t&&(t.visible=!1)},this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this.mouseLeave=!0,this.addEventListener("click",e=>e.stopPropagation())}set mouseLeave(e){this._mouseLeave=e,e&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:e}=this._parent,{value:t}=this._tooltip;e&&t&&wn(e,t,{placement:"bottom",middleware:[cn(10),xn(),_n(),yn({padding:5})]}).then(i=>{const{x:o,y:n}=i;Object.assign(t.style,{left:`${o}px`,top:`${n}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const e=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},e)}onChildrenClick(e){e.stopPropagation();const{value:t}=this._contextMenu;t&&(t.visible=!t.visible)}onSlotChange(e){const{value:t}=this._contextMenu,i=e.target.assignedElements();for(const o of i){if(!(o instanceof ee)){o.remove(),console.warn("Only bim-button is allowed inside bim-button. Child has been removed.");continue}o.addEventListener("click",()=>t==null?void 0:t.updatePosition())}this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){const e=f`
      <div ${q(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?f`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?f`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,t=this.children.length>0;return f`
      <style>
        .button {
          border-radius: var(
            --bim-button--bdrs,
            ${t?"var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs)":"var(--bim-ui_size-4xs)"}
          );
        }
        .children {
          border-radius: var(
            --bim-button--bdrs,
            ${t?"0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0":"var(--bim-ui_size-4xs)"}
          );
        }
      </style>
      <div ${q(this._parent)} class="parent">
        ${this.label||this.icon?f`
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
        ${this.tooltipTitle||this.tooltipText?e:null}
        ${t?f`
              <div class="children" @click=${this.onChildrenClick}>
                <bim-icon .icon=${"ic:round-plus"}></bim-icon>
              </div>
            `:null}
        <bim-context-menu
          ${q(this._contextMenu)}
          style="row-gap: var(--bim-ui_size-4xs)"
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </bim-context-menu>
      </div>
    `}},ee.styles=$`
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
  `,ee);D([d({type:String,reflect:!0})],B.prototype,"label");D([d({type:Boolean,attribute:"label-hidden",reflect:!0})],B.prototype,"labelHidden");D([d({type:Boolean,reflect:!0})],B.prototype,"active");D([d({type:Boolean,reflect:!0,attribute:"disabled"})],B.prototype,"disabled");D([d({type:String,reflect:!0})],B.prototype,"icon");D([d({type:Boolean,reflect:!0})],B.prototype,"vertical");D([d({type:Number,attribute:"tooltip-time",reflect:!0})],B.prototype,"tooltipTime");D([d({type:Boolean,attribute:"tooltip-visible",reflect:!0})],B.prototype,"tooltipVisible");D([d({type:String,attribute:"tooltip-title",reflect:!0})],B.prototype,"tooltipTitle");D([d({type:String,attribute:"tooltip-text",reflect:!0})],B.prototype,"tooltipText");let Ms=B;var Bs=Object.defineProperty,_e=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&Bs(t,i,n),n};const eo=class extends A{constructor(){super(),this.onValueChange=new Event("change"),this.checked=!1}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return f`
      <div class="parent">
        ${this.label?f`<bim-label
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
    `}};eo.styles=$`
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
  `;let Gt=eo;_e([d({type:String,reflect:!0})],Gt.prototype,"icon");_e([d({type:String,reflect:!0})],Gt.prototype,"name");_e([d({type:String,reflect:!0})],Gt.prototype,"label");_e([d({type:Boolean,reflect:!0})],Gt.prototype,"checked");var Ns=Object.defineProperty,$t=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&Ns(t,i,n),n};const io=class extends A{constructor(){super(),this._colorInput=J(),this._textInput=J(),this.onValueChange=new Event("input"),this.vertical=!1,this.color="#bcf124"}set value(t){const{color:i,opacity:o}=t;this.color=i,o&&(this.opacity=o)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:i}=this._colorInput;i&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:i}=this._textInput;if(!i)return;const{value:o}=i;let n=o.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),i.value=n.slice(0,7),i.value.length===7&&(this.color=i.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){const t=i=>{const o=i.target;this.opacity=o.value,this.dispatchEvent(this.onValueChange)};return f`
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
                ${q(this._colorInput)}
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
                ${q(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
              />
            </div>
            ${this.opacity!==void 0?f`<bim-number-input
                  @input=${t}
                  slider
                  sufix="%"
                  min="0"
                  value=${this.opacity}
                  max="100"
                ></bim-number-input>`:null}
          </div>
        </bim-input>
      </div>
    `}};io.styles=$`
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
  `;let ht=io;$t([d({type:String,reflect:!0})],ht.prototype,"name");$t([d({type:String,reflect:!0})],ht.prototype,"label");$t([d({type:String,reflect:!0})],ht.prototype,"icon");$t([d({type:Boolean,reflect:!0})],ht.prototype,"vertical");$t([d({type:Number,reflect:!0})],ht.prototype,"opacity");$t([d({type:String,reflect:!0})],ht.prototype,"color");const Is=$`
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
`,Hs=$`
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
`,et={scrollbar:Is,globalStyles:Hs};var Ds=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Vs=(e,t,i,o)=>{for(var n=Us(t,i),r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&Ds(t,i,n),n};const no=class extends A{constructor(){super(...arguments),this._visible=!1,this._middleware={name:"middleware",async fn(t){const{right:i,top:o}=await oi(t);return t.x-=Math.sign(i)===1?i+5:0,t.y-=Math.sign(o)===1?o+5:0,t}}}get visible(){return this._visible}set visible(t){this._visible=t,t&&this.updatePosition()}async updatePosition(t){const i=t||this.parentNode;if(!i){this.visible=!1,console.warn("No target element found for context-menu.");return}const o=await wn(i,this,{placement:"right",middleware:[cn(10),xn(),_n(),yn({padding:5}),this._middleware]}),{x:n,y:r}=o;this.style.left=`${n}px`,this.style.top=`${r}px`}render(){return f` <slot></slot> `}};no.styles=[et.scrollbar,$`
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
    `];let oo=no;Vs([d({type:Boolean,reflect:!0})],oo.prototype,"visible");const qe=(e,t=!0)=>{let i={};for(const o of e.children){const n=o,r=n.getAttribute("name")||n.getAttribute("label");if(r){if("value"in n){const s=n.value;if(typeof s=="object"&&!Array.isArray(s)&&Object.keys(s).length===0)continue;i[r]=n.value}else if(t){const s=qe(n);if(Object.keys(s).length===0)continue;i[r]=s}}else t&&(i={...i,...qe(n)})}return i},mi=e=>e==="true"||e==="false"?e==="true":e&&!isNaN(Number(e))&&e.trim()!==""?Number(e):e;var Fs=Object.defineProperty,qs=Object.getOwnPropertyDescriptor,it=(e,t,i,o)=>{for(var n=o>1?void 0:o?qs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=(o?s(t,i,n):s(n))||n);return o&&n&&Fs(t,i,n),n};const ro=class extends A{get value(){return this._value!==void 0?this._value:this.label?mi(this.label):this.label}set value(t){this._value=t}constructor(){super(),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}render(){return f`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?f` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?f`<bim-checkbox
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
    `}};ro.styles=$`
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
        var(--bim-selector-input--bgc, var(--bim-ui_bg-contrast-20)),
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
  `;let T=ro;it([d({type:String,reflect:!0})],T.prototype,"img",2);it([d({type:String,reflect:!0})],T.prototype,"label",2);it([d({type:String,reflect:!0})],T.prototype,"icon",2);it([d({type:Boolean,reflect:!0})],T.prototype,"checked",2);it([d({type:Boolean,reflect:!0})],T.prototype,"checkbox",2);it([d({type:Boolean,attribute:"no-mark",reflect:!0})],T.prototype,"noMark",2);it([d({converter:{fromAttribute(e){return e&&mi(e)}}})],T.prototype,"value",1);it([d({type:Boolean,reflect:!0})],T.prototype,"vertical",2);var Ws=Object.defineProperty,Et=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&Ws(t,i,n),n};const We=class extends A{constructor(){super(),this._inputContainer=J(),this._listElement=J(),this._visible=!1,this._value=[],this.onValueChange=new Event("change"),this.onWindowMouseUp=t=>{this.contains(t.target)||(this.visible=!1)},this.onOptionClick=t=>{const i=t.target.value,o=this._value.includes(i);if(!this.multiple&&!this.required&&!o)this.value=[i];else if(!this.multiple&&!this.required&&o)this.value=[];else if(!this.multiple&&this.required&&!o)this.value=[i];else if(this.multiple&&!this.required&&!o)this.value=[...this._value,i];else if(this.multiple&&!this.required&&o)this.value=this._value.filter(n=>n!==i);else if(this.multiple&&this.required&&!o)this.value=[...this._value,i];else if(this.multiple&&this.required&&o){const n=this._value.filter(r=>r!==i);n.length!==0&&(this.value=n)}},this.useObserver=!0,this.multiple=!1,this.required=!1,this.visible=!1,this.vertical=!1}get visible(){return this._visible}set visible(t){this._visible=t,t||this.resetVisibleElements()}set value(t){if(this.required&&Object.keys(t).length===0){console.warn("bim-dropdown was set as required but not value is set. Nothing has changed.");return}const i=[];for(const o of t){const n=this.findOption(o);if(n){if(i.push(n.value),!this.multiple&&Object.keys(t).length>1){console.warn("bim-dropdown wasn't set as multiple, but provided an array of values. Only first was taken.");break}}else console.warn(`bim-dropdown doesn't have ${o} as a possible value.`)}this._value=i,this.dispatchEvent(this.onValueChange),this.updateOptionsState()}get value(){return this._value}get _options(){const t=[...this.elements];for(const i of this.children)i instanceof T&&t.push(i);return t}onSlotChange(t){const i=t.target.assignedElements();this.observe(i);for(const o of i){if(!(o instanceof T)){console.warn("Only bim-option is allowed inside bim-dropdown. Child has been removed.");continue}o.removeEventListener("click",this.onOptionClick),o.addEventListener("click",this.onOptionClick)}}updateOptionsState(){for(const t of this._options)t instanceof T&&(this._value.includes(t.value)?t.checked=!0:t.checked=!1)}findOption(t){return this._options.find(i=>i instanceof T?i.label===t||i.value===t:!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){let t,i,o;if(this._value.length===0)t="Select an option...";else if(this._value.length===1){const n=this.findOption(this._value[0]);t=(n==null?void 0:n.label)||(n==null?void 0:n.value),i=n==null?void 0:n.img,o=n==null?void 0:n.icon}else t=`Multiple (${this._value.length})`;return f`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${q(this._inputContainer)}
          class="input"
          @click=${()=>this.visible=!this.visible}
        >
          <bim-label
            label=${t}
            .img=${i}
            .icon=${o}
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
        <bim-context-menu ${q(this._listElement)} .visible=${this.visible}>
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this.visibleElements.map(n=>n)}
        </bim-context-menu>
      </bim-input>
    `}};We.styles=[et.scrollbar,$`
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
    `],We.properties={visible:{type:Boolean,reflect:!0},value:{attribute:!1}};let ut=We;Et([d({type:String,reflect:!0})],ut.prototype,"name");Et([d({type:String,reflect:!0})],ut.prototype,"icon");Et([d({type:String,reflect:!0})],ut.prototype,"label");Et([d({type:Boolean,reflect:!0})],ut.prototype,"multiple");Et([d({type:Boolean,reflect:!0})],ut.prototype,"required");Et([d({type:Boolean,reflect:!0})],ut.prototype,"vertical");var Ys=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,so=(e,t,i,o)=>{for(var n=o>1?void 0:o?Gs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=(o?s(t,i,n):s(n))||n);return o&&n&&Ys(t,i,n),n},ft;const gi=(ft=class extends A{constructor(){super(),this._containers={},this._onLayoutChange=new Event("layout-change"),this.layouts={},this.childrenElements=new Set,this.floating=!1}get layout(){return this._layout}set layout(e){if(e){const t=this.layouts[e];if(!t){console.warn(`bim-grid: "${e}" layout is not defined, "${this.layout}" layout remained.`);return}this.style.gridTemplate=t,this.updateContainers()}else this.style.gridTemplate="",this.cleanup();this._layout=e,this.dispatchEvent(this._onLayoutChange)}get rows(){return this.style.gridTemplate.trim().split(/"([^"]*)"/).map((e,t)=>t%2!==0?e:null).filter(e=>e!==null)}get layoutAreas(){const e=new Set;for(const t of this.rows){const i=t.trim().split(/\s+/);for(const o of i)e.add(o)}return[...e]}static addContainerTag(e,t){ft.containerTags[e]=t}onSlotChange(e){const t=e.target.assignedElements();for(const i of t){this.childrenElements.add(i),i.toggleAttribute("floating",this.floating);try{const o=this.isVerticalArea(i.style.gridArea);"horizontal"in i?i.horizontal=!o:"vertical"in i&&(i.vertical=o)}catch{}}}updateContainers(){const{layoutAreas:e}=this;for(const t of e){if(!t.startsWith("c-"))continue;const i=t.split("-")[1],o=t.split("-")[2];if(!o)throw new Error(`bim-grid: you defined a container area without an id (${t})`);this.createContainer(i,o)}this.cleanup()}cleanup(){const{layoutAreas:e}=this;for(const t of this.childrenElements){const{gridArea:i}=t.style;e.includes(i)?this.append(t):t.remove()}}createContainer(e,t){const i=`c-${e}-${t}`;e in this._containers||(this._containers[e]=[]);const o=this._containers[e];let n=o.find(r=>r.style.gridArea===i);if(!n){const r=ft.containerTags[e]??"div";n=document.createElement(r),n.style.gridArea=i,o.push(n),this.childrenElements.add(n)}return n}isVerticalArea(e){const{rows:t}=this,i=t.find(s=>s.includes(e));if(!i)throw new Error(`${e} wasn't defined in the grid-template of this bim-grid`);const o=t.indexOf(i),n=o>0&&t[o-1].includes(e),r=o<t.length-1&&t[o+1].includes(e);return n||r}getContainer(e,t,i=!1){const o=`c-${e}-${t}`,n=this._containers[e];if(i)return this.createContainer(e,t);if(!n)throw new Error(`bim-grid: container of type "${e}" is not defined in this grid.`);const r=n.find(s=>s.style.gridArea===o);if(!r)throw new Error(`bim-grid: there is no container with id "${t}" in this grid.`);return r}render(){return f` <slot @slotchange=${this.onSlotChange}></slot> `}},ft.styles=$`
    :host {
      display: grid;
      height: 100%;
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
    }

    :host(:not([layout])) {
      display: none;
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
  `,ft.containerTags={panels:"bim-panels-container",toolbars:"bim-toolbars-container"},ft);so([d({type:Boolean,reflect:!0})],gi.prototype,"floating",2);so([d({type:String,reflect:!0})],gi.prototype,"layout",1);let Qs=gi;const Ye=class extends A{render(){return f`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};Ye.styles=$`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
    }
  `,Ye.properties={icon:{type:String}};let Js=Ye;var Xs=Object.defineProperty,xe=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&Xs(t,i,n),n};const lo=class extends A{constructor(){super(),this.onValueChange=new Event("change"),this.vertical=!1}get value(){const t={};for(const i of this.children){const o=i;"value"in o?t[o.name||o.label]=o.value:"checked"in o&&(t[o.name||o.label]=o.checked)}return t}set value(t){const i=[...this.children];for(const o in t){const n=i.find(l=>{const a=l;return a.name===o||a.label===o});if(!n)continue;const r=n,s=t[o];typeof s=="boolean"?r.checked=s:r.value=s}}render(){return f`
      <div class="parent">
        ${this.label||this.icon?f`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};lo.styles=$`
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
  `;let Qt=lo;xe([d({type:String,reflect:!0})],Qt.prototype,"name");xe([d({type:String,reflect:!0})],Qt.prototype,"label");xe([d({type:String,reflect:!0})],Qt.prototype,"icon");xe([d({type:Boolean,reflect:!0})],Qt.prototype,"vertical");var Zs=Object.defineProperty,At=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&Zs(t,i,n),n};const ao=class extends A{get value(){return this.label?mi(this.label):this.label}constructor(){super(),this.iconHidden=!1,this.labelHidden=!1,this.vertical=!1}render(){return f`
      <div class="parent" .title=${this.label??""}>
        ${this.img?f`<img .src=${this.img} .alt=${this.label||""} />`:null}
        ${!this.iconHidden&&this.icon?f`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        ${!this.labelHidden&&this.label?f`<label>${this.label}</label>`:null}
      </div>
    `}};ao.styles=$`
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
  `;let dt=ao;At([d({type:String,reflect:!0})],dt.prototype,"label");At([d({type:String,reflect:!0})],dt.prototype,"img");At([d({type:Boolean,attribute:"label-hidden",reflect:!0})],dt.prototype,"labelHidden");At([d({type:String,reflect:!0})],dt.prototype,"icon");At([d({type:Boolean,attribute:"icon-hidden",reflect:!0})],dt.prototype,"iconHidden");At([d({type:Boolean,reflect:!0})],dt.prototype,"vertical");var Ks=Object.defineProperty,tl=Object.getOwnPropertyDescriptor,M=(e,t,i,o)=>{for(var n=o>1?void 0:o?tl(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=(o?s(t,i,n):s(n))||n);return o&&n&&Ks(t,i,n),n};const co=class extends A{constructor(){if(super(),this._value=0,this._input=J(),this.onValueChange=new Event("change"),this.vertical=!1,this.slider=!1,this.min&&this.max&&(this.min>this.max||this.max<this.min))throw new Error("bim-number-input min value can't be greater than max and max can't be lower than min.")}get value(){return this._value}set value(t){this.setValue(t.toString())}onChange(t){t.stopPropagation();const{value:i}=this._input;i&&this.setValue(i.value)}setValue(t){const{value:i}=this._input;let o=t;if(o=o.replace(/[^0-9.-]/g,""),o=o.replace(/(\..*)\./g,"$1"),o.endsWith(".")||(o.lastIndexOf("-")>0&&(o=o[0]+o.substring(1).replace(/-/g,"")),o==="-"||o==="-0"))return;let n=Number(o);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,i&&(i.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:i}=t,o=this.value;let n=!1;const r=a=>{var c;n=!0;const{clientX:h}=a,u=this.step??1,b=((c=u.toString().split(".")[1])==null?void 0:c.length)||0,p=1/(this.sensitivity??1),m=(h-i)/p;if(Math.floor(Math.abs(m))!==Math.abs(m))return;const v=o+m*u;this.setValue(v.toFixed(b))},s=()=>{this.slider=!0,this.removeEventListener("blur",s)},l=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",s),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",l)}onFocus(t){t.stopPropagation();const i=o=>{o.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",i))};window.addEventListener("keydown",i)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=f`
      ${this.pref||this.icon?f`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.pref}
            .icon=${this.icon}
          ></bim-label>`:null}
      <input
        ${q(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${l=>l.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.sufix?f`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.sufix}
          ></bim-label>`:null}
    `,i=this.min??-1/0,o=this.max??1/0,n=100*(this.value-i)/(o-i),r=f`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?f`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .label=${`${this.pref}: `}
              .icon=${this.icon}
            ></bim-label>`:null}
        <bim-label
          style="z-index: 1;"
          .label=${this.value.toString()}
        ></bim-label>
        ${this.sufix?f`<bim-label
              style="z-index: 1;"
              .label=${this.sufix}
            ></bim-label>`:null}
      </div>
    `,s=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.sufix??""}`;return f`
      <bim-input
        title=${s}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?r:t}
      </bim-input>
    `}};co.styles=$`
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

    bim-input {
      display: flex;
    }

    bim-label {
      pointer-events: none;
    }
  `;let L=co;M([d({type:String,reflect:!0})],L.prototype,"name",2);M([d({type:String,reflect:!0})],L.prototype,"icon",2);M([d({type:String,reflect:!0})],L.prototype,"label",2);M([d({type:String,reflect:!0})],L.prototype,"pref",2);M([d({type:Number,reflect:!0})],L.prototype,"min",2);M([d({type:Number,reflect:!0})],L.prototype,"value",1);M([d({type:Number,reflect:!0})],L.prototype,"step",2);M([d({type:Number,reflect:!0})],L.prototype,"sensitivity",2);M([d({type:Number,reflect:!0})],L.prototype,"max",2);M([d({type:String,reflect:!0})],L.prototype,"sufix",2);M([d({type:Boolean,reflect:!0})],L.prototype,"vertical",2);M([d({type:Boolean,reflect:!0})],L.prototype,"slider",2);var el=Object.defineProperty,vi=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&el(t,i,n),n},Ot;const we=(Ot=class extends A{constructor(){super(),this.onValueChange=new Event("change"),this._active=!1,this.activationButton=document.createElement("bim-button"),this.activationButton.onclick=()=>this.active=!this.active}set active(e){var t;if(this._active=e,this.activationButton.active=e,e){const i=((t=this.parentElement)==null?void 0:t.children)??[];for(const o of i)o instanceof Ot&&o!==this&&(o.active=!1)}}get active(){return this._active}get value(){return qe(this)}set value(e){const t=[...this.children];for(const i in e){const o=t.find(r=>{const s=r;return s.name===i||s.label===i});if(!o)continue;const n=o;n.value=e[i]}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!0}expandSections(){const e=this.querySelectorAll("bim-panel-section");for(const t of e)t.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,f`
      <div class="parent">
        ${this.label||this.name||this.icon?f`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}},Ot.styles=[et.scrollbar,$`
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
    `],Ot.properties={active:{type:Boolean,reflect:!0}},Ot);vi([d({type:String,reflect:!0})],we.prototype,"icon");vi([d({type:String,reflect:!0})],we.prototype,"name");vi([d({type:String,reflect:!0})],we.prototype,"label");let Ge=we;var il=Object.defineProperty,nl=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&il(t,i,n),n};const Qe=class extends A{constructor(){super(),this.horizontal=!1}onSlotChange(t){const i=t.target.assignedElements(),o=i[i.length-1];for(const n of i)n instanceof Ge&&o instanceof Ge&&o.active&&n!==o&&(n.active=!1)}render(){return f` <slot @slotchange=${this.onSlotChange}></slot> `}};Qe.styles=[et.scrollbar,$`
      :host {
        display: flex;
        flex-direction: column;
        pointer-events: none;
        gap: 0.5rem;
        overflow: auto;
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
    `],Qe.properties={gridArea:{attribute:!1}};let ho=Qe;nl([d({type:Boolean,reflect:!0})],ho.prototype,"horizontal");var ol=Object.defineProperty,Jt=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&ol(t,i,n),n};const Je=(e,t=!0)=>{let i={};for(const o of e.children){const n=o,r=n.getAttribute("name")||n.getAttribute("label");if(r){if("value"in n){const s=n.value;if(typeof s=="object"&&!Array.isArray(s)&&Object.keys(s).length===0)continue;i[r]=n.value}else if(t){const s=Je(n);if(Object.keys(s).length===0)continue;i[r]=s}}else t&&(i={...i,...Je(n)})}return i},uo=class extends A{constructor(){super(...arguments),this.onValueChange=new Event("change")}get value(){return Je(this)}set value(t){const i=[...this.children];for(const o in t){const n=i.find(s=>{const l=s;return l.name===o||l.label===o});if(!n)continue;const r=n;r.value=t[o]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,i=f`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,o=f`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=this.collapsed?i:o,r=f`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?f`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return f`
      ${t?r:null}
      <div class="components">
        <slot></slot>
      </div>
    `}};uo.styles=[et.scrollbar,$`
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
    `];let Ct=uo;Jt([d({type:String,reflect:!0})],Ct.prototype,"icon");Jt([d({type:String,reflect:!0})],Ct.prototype,"label");Jt([d({type:String,reflect:!0})],Ct.prototype,"name");Jt([d({type:Boolean,reflect:!0})],Ct.prototype,"fixed");Jt([d({type:Boolean,reflect:!0})],Ct.prototype,"collapsed");var rl=Object.defineProperty,$e=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&rl(t,i,n),n};const Xe=class extends A{constructor(){super(),this.onValueChange=new Event("change"),this.onOptionClick=t=>{const i=t.target;this.value=i.value},this.vertical=!1}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const i=this._options.find(o=>o.value===t);if(i){for(const o of this._options)o!==i&&(o.checked=!1);i.checked=!0,this._value=i.value,this.dispatchEvent(this.onValueChange)}else console.warn(`bim-selector: "${t}" doesn't correspond with any of the values in the options for this input, value remained as "${this.value}".`)}get value(){return this._value}onSlotChange(t){const i=t.target.assignedElements();for(const o of i)o instanceof T&&(o.noMark=!0,o.removeEventListener("click",this.onOptionClick),o.addEventListener("click",this.onOptionClick))}render(){return f`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Xe.styles=$`
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

    /* ::slotted(bim-option:first-child) {
      border-radius: var(--bim-ui_size-4xs) 0 0 var(--bim-ui_size-4xs);
    } */

    /* ::slotted(bim-option:last-child) {
      border-radius: 0 var(--bim-ui_size-4xs) var(--bim-ui_size-4xs) 0;
    } */
  `,Xe.properties={value:{attribute:!1}};let Xt=Xe;$e([d({type:String,reflect:!0})],Xt.prototype,"name");$e([d({type:String,reflect:!0})],Xt.prototype,"icon");$e([d({type:String,reflect:!0})],Xt.prototype,"label");$e([d({type:Boolean,reflect:!0})],Xt.prototype,"vertical");const po=class x{static set config(t){this._config={...x._config,...t}}static get config(){return x._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=et.globalStyles.cssText;const i=document.head.firstChild;i?document.head.insertBefore(t,i):document.head.append(t)}static defineCustomElement(t,i){customElements.get(t)||customElements.define(t,i)}static registerComponents(){x.addGlobalStyles(),x.defineCustomElement("bim-button",Ms),x.defineCustomElement("bim-checkbox",Gt),x.defineCustomElement("bim-color-input",ht),x.defineCustomElement("bim-context-menu",oo),x.defineCustomElement("bim-dropdown",ut),x.defineCustomElement("bim-grid",Qs),x.defineCustomElement("bim-icon",Js),x.defineCustomElement("bim-input",Qt),x.defineCustomElement("bim-label",dt),x.defineCustomElement("bim-number-input",L),x.defineCustomElement("bim-option",T),x.defineCustomElement("bim-panel",Ge),x.defineCustomElement("bim-panels-container",ho),x.defineCustomElement("bim-panel-section",Ct),x.defineCustomElement("bim-selector-input",Xt),x.defineCustomElement("bim-table",kt),x.defineCustomElement("bim-table-cell",fo),x.defineCustomElement("bim-table-children",go),x.defineCustomElement("bim-table-group",vo),x.defineCustomElement("bim-table-row",Ee),x.defineCustomElement("bim-text-input",fl),x.defineCustomElement("bim-toolbar",Eo),x.defineCustomElement("bim-toolbar-group",xo),x.defineCustomElement("bim-toolbar-section",wo),x.defineCustomElement("bim-toolbars-container",ml),x.defineCustomElement("bim-viewport",Co)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let i="";for(let o=0;o<10;o++){const n=Math.floor(Math.random()*t.length);i+=t.charAt(n)}return i}};po._config={sectionLabelOnVerticalToolbar:!1,multiPanels:!1,draggableToolbars:!0,draggablePanels:!0};let oe=po;var sl=Object.defineProperty,ll=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&sl(t,i,n),n};const bo=class extends A{get value(){if(this.children.length===1){const i=this.children[0];return"value"in i?i.value:i.textContent}const t=[];for(const i of this.children){const o="value"in i?i.value:i.textContent;t.push(o)}return t}render(){return f`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};bo.styles=$`
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
  `;let fo=bo;ll([d({type:String,reflect:!0})],fo.prototype,"column");var al=Object.defineProperty,cl=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&al(t,i,n),n};const mo=class extends A{constructor(){super(...arguments),this._groups=[],this.table=this.closest("bim-table")}get value(){return new Promise(t=>{setTimeout(async()=>{const i=[];for(const o of this._groups)i.push(await o.value);t(i)})})}render(){var t;return this._groups=[],f`
      ${(t=this.groups)==null?void 0:t.map(i=>{const o=document.createElement("bim-table-group");return this._groups.push(o),o.group=i,o.table=this.table,o})}
    `}};mo.styles=$`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }
  `;let go=mo;cl([d({type:Array,attribute:!1})],go.prototype,"groups");var hl=Object.defineProperty,ul=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&hl(t,i,n),n};const Ze=class extends A{constructor(){super(),this._row=document.createElement("bim-table-row"),this._onChildrenExpanded=new Event("children-expanded"),this._onChildrenCollapsed=new Event("children-collapsed"),this.table=this.closest("bim-table"),this.onCaretClick=()=>{this.childrenHidden=!this.childrenHidden,this.childrenHidden?this.dispatchEvent(this._onChildrenCollapsed):this.dispatchEvent(this._onChildrenExpanded)},this.group={data:{}},this.childrenHidden=!1}get value(){return new Promise(t=>{setTimeout(async()=>{const i={data:{},id:this.group.id};i.data=await this._row.value,this._children&&(i.children=await this._children.value),t(i)})})}render(){var t;const i=((t=this.table)==null?void 0:t.getGroupIndentation(this.group))??0,o=f`
      <style>
        .branch-vertical {
          left: ${i+.5625}rem;
        }
      </style>
      <div class="branch branch-vertical"></div>
    `,n=document.createElement("div");n.classList.add("branch","branch-horizontal"),n.style.left=`${i-1+.5625}rem`;const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("height","9.5"),r.setAttribute("width","7.5"),r.setAttribute("viewBox","0 0 4.6666672 7.3333333");const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),r.append(s);const l=document.createElementNS("http://www.w3.org/2000/svg","svg");l.setAttribute("height","6.5"),l.setAttribute("width","9.5"),l.setAttribute("viewBox","0 0 5.9111118 5.0175439");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),l.append(a);const c=document.createElement("div");c.addEventListener("click",this.onCaretClick),c.classList.add("caret"),c.style.left=`${.125+i}rem`,this.childrenHidden?c.append(r):c.append(l);const h=document.createElement("bim-table-row");h.data=this.group.data,this.group.onRowCreated&&this.group.onRowCreated(h),this._row=h,h.table=this.table,this.group.children&&h.append(c),i!==0&&(!this.group.children||this.childrenHidden)&&h.append(n);let u;return this.group.children&&(u=document.createElement("bim-table-children"),this.group.onChildrenCreated&&this.group.onChildrenCreated(u),this._children=u,u.hidden=this.childrenHidden,u.groups=this.group.children,u.table=this.table),f`
      <div class="parent">
        ${this.group.children&&!this.childrenHidden?o:null}
        ${h} ${u}
      </div>
    `}};Ze.styles=$`
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
  `,Ze.properties={childrenHidden:{type:Boolean,attribute:"children-hidden",reflect:!0}};let vo=Ze;ul([d({type:Object,attribute:!1})],vo.prototype,"group");var dl=Object.defineProperty,yi=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&dl(t,i,n),n};const yo=class extends A{constructor(){super(),this._table=this.closest("bim-table"),this._cells=[],this.onTableIndentationColorChange=t=>{var i;if(!this.table)return;const o=t.detail,{indentationLevel:n,color:r}=o;((i=this.table)==null?void 0:i.getRowIndentation(this.data))===n&&(this.style.backgroundColor=r)},this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.columns=[],this.data={},this.isHeader=!1}get _columnNames(){return this.columns.map(t=>t.name)}get _columnWidths(){return this.columns.map(t=>t.width)}set table(t){this._table&&(this.columns=[],this._table.removeEventListener("columns-change",this.onTableColumnsChange)),this._table=t,this._table&&(this.columns=this._table.columns,this._table.addEventListener("columns-change",this.onTableColumnsChange),this._table.addEventListener("indentation",this.onTableIndentationColorChange))}get table(){return this._table}get value(){return new Promise(t=>{setTimeout(()=>{const i={};for(const o of this._cells)o.column&&(i[o.column]=o.value);t(i)})})}render(){var t;const i=((t=this.table)==null?void 0:t.getRowIndentation(this.data))??0,o=[];for(const n in this.data){const r=this.data[n];let s;typeof r=="function"?s=r(this.data):r instanceof HTMLElement?s=r:s=f`<bim-label label="${r}"></bim-label>`;const l=this._columnNames.indexOf(n)===0,a=`
        ${l&&!this.isHeader?"justify-content: normal":""};
        ${l&&!this.isHeader?`margin-left: ${i+.125}rem`:""}
      `;this._cells=[];const c=f`
        <bim-table-cell ${q(h=>{if(!h)return;const u=h;this._cells.push(u)})} style="${a}" .column=${n}
          >${s}</bim-table-cell
        >
      `;o.push(c)}return f`
      <style>
        :host {
          grid-template-areas: "${this._columnNames.join(" ")}";
          grid-template-columns: ${this._columnWidths.join(" ")};
        }
      </style>
      ${o}
      <slot></slot>
    `}};yo.styles=$`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      /* border-bottom: 1px solid var(--bim-ui_bg-contrast-20); */
    }
  `;let Ee=yo;yi([d({type:Array,attribute:!1})],Ee.prototype,"columns");yi([d({type:Object,attribute:!1})],Ee.prototype,"data");yi([d({type:Boolean,attribute:"is-header",reflect:!0})],Ee.prototype,"isHeader");var pl=Object.defineProperty,bl=Object.getOwnPropertyDescriptor,Zt=(e,t,i,o)=>{for(var n=o>1?void 0:o?bl(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=(o?s(t,i,n):s(n))||n);return o&&n&&pl(t,i,n),n};const _o=class extends A{constructor(){super(),this._children=document.createElement("bim-table-children"),this._columnsChange=new Event("columns-change"),this._filteredRows=[],this._rows=[],this._columns=[],this.minColWidth="4rem",this.headersHidden=!1}set rows(t){for(const i of t)this.assignGroupDeclarationID(i);this._rows=t,this._filteredRows=t,this.computeMissingColumns(t)&&(this.columns=this._columns)}get rows(){return this._filteredRows}set columns(t){const i=[];for(const o of t){const n=typeof o=="string"?{name:o,width:`minmax(${this.minColWidth}, 1fr)`}:o;i.push(n)}this._columns=i,this.computeMissingColumns(this.rows),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const i of this.columns)if(typeof i=="string")t[i]=i;else{const{name:o}=i;t[o]=o}return t}get value(){return new Promise(t=>{setTimeout(async()=>{t(await this._children.value)})})}assignGroupDeclarationID(t){t.id||(t.id=oe.newRandomId()),t.children&&t.children.forEach(i=>this.assignGroupDeclarationID(i))}getGroupDeclarationById(t,i=this._rows){for(const o of i){if(o.id===t)return o;if(o.children){const n=this.getGroupDeclarationById(t,o.children);if(n)return n}}}computeMissingColumns(t){let i=!1;for(const o of t){const{children:n,data:r}=o;for(const s in r)this._columns.map(l=>typeof l=="string"?l:l.name).includes(s)||(this._columns.push({name:s,width:`minmax(${this.minColWidth}, 1fr)`}),i=!0);if(n){const s=this.computeMissingColumns(n);s&&!i&&(i=s)}}return i}async downloadData(t="BIM Table Data"){const i=await this.value,o=new File([JSON.stringify(i,void 0,2)],`${t}.json`),n=document.createElement("a");n.href=URL.createObjectURL(o),n.download=o.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,i=this.rows,o=0){for(const n of i){if(n.data===t)return o;if(n.children){const r=this.getRowIndentation(t,n.children,o+1);if(r!==null)return r}}return null}getGroupIndentation(t,i=this.rows,o=0){for(const n of i){if(n===t)return o;if(n.children){const r=this.getGroupIndentation(t,n.children,o+1);if(r!==null)return r}}return null}setIndentationColor(t,i){const o=new CustomEvent("indentation",{detail:{indentationLevel:t,color:i}});this.dispatchEvent(o)}async filterRowsByValue(t,i=!1,o){const n=[],r=o??await this.value;for(const s of r){const l=Object.values(s.data).some(c=>Array.isArray(c)?c.includes(t):String(c)===t),a=this.getGroupDeclarationById(s.id);if(!a)return n;if(l){if(i){const c={data:a.data};if(s.children){const h=await this.filterRowsByValue(t,!0,s.children);h.length&&(c.children=h)}n.push(c)}else if(n.push({data:a.data}),s.children){const c=await this.filterRowsByValue(t,!1,s.children);n.push(...c)}}else if(s.children){const c=await this.filterRowsByValue(t,i,s.children);i&&c.length?n.push({data:a.data,children:c}):n.push(...c)}}return n}render(){const t=document.createElement("bim-table-row");t.isHeader=!0,t.data=this._headerRowData,t.table=this,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const i=document.createElement("bim-table-children");return this._children=i,i.groups=this._filteredRows,i.table=this,i.style.gridArea="Body",i.style.backgroundColor="transparent",f`
      <div class="parent">
        ${this.headersHidden?null:t}
        <div style="overflow-x: hidden; grid-area: Body">${i}</div>
      </div>
    `}};_o.styles=[et.scrollbar,$`
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
    `];let kt=_o;Zt([Cr()],kt.prototype,"_filteredRows",2);Zt([d({type:Boolean,attribute:"headers-hidden",reflect:!0})],kt.prototype,"headersHidden",2);Zt([d({type:String,attribute:"min-col-width",reflect:!0})],kt.prototype,"minColWidth",2);Zt([d({type:Array,attribute:!1})],kt.prototype,"rows",1);Zt([d({type:Array,attribute:!1})],kt.prototype,"columns",1);const Ke=class extends A{constructor(){super(),this.onValueChange=new Event("input"),this.value="",this.placeholder="",this.vertical=!1}onInputChange(t){t.stopPropagation();const i=t.target;this.value=i.value,this.dispatchEvent(this.onValueChange)}render(){return f`
      <bim-input
        .name=${this.name}
        .icon=${this.icon}
        .label=${this.label}
        .vertical=${this.vertical}
      >
        <input
          aria-label=${this.label||this.name||"Checkbox Input"}
          type="text"
          .value=${this.value}
          .placeholder=${this.placeholder}
          @change=${this.onInputChange}
          @input=${this.onInputChange}
        />
      </bim-input>
    `}};Ke.styles=$`
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

    :host([disabled]) {
      /* --bim-input--bgc: var(--bim-ui_bg-) */
    }
  `,Ke.properties={icon:{type:String,reflect:!0},label:{type:String,reflect:!0},name:{type:String,reflect:!0},placeholder:{type:String,reflect:!0},value:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0}};let fl=Ke;const ti=class extends A{constructor(){super(),this._vertical=!1,this.rows=2,this.vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const i of t)this.vertical?i.setAttribute("label-hidden",""):i.removeAttribute("label-hidden")}render(){return f`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};ti.styles=$`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `,ti.properties={rows:{type:Number,reflect:!0},vertical:{type:Boolean,reflect:!0}};let xo=ti;const ei=class extends A{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const i of t)i instanceof xo&&(i.vertical=this.vertical),i.toggleAttribute("label-hidden",this.vertical)}connectedCallback(){super.connectedCallback()}render(){return f`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?f`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
      </div>
    `}};ei.styles=$`
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
  `,ei.properties={label:{type:String,reflect:!0},icon:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0},labelHidden:{type:Boolean,attribute:"label-hidden",reflect:!0}};let wo=ei;const ii=class $o extends A{constructor(){super(),this._managerID=oe.newRandomId(),this._active=!1,this._vertical=!1,this._gridArea="",this.activationButton=document.createElement("bim-button"),this.setActivationButton()}set active(t){var i;if(this._active=t,this.activationButton.active=t,t){const o=((i=this.parentElement)==null?void 0:i.children)??[];for(const n of o)n instanceof $o&&n!==this&&(n.active=!1)}}get active(){return this._active}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}get gridArea(){return this._gridArea}set gridArea(t){this._gridArea=t,this.style.gridArea=`toolbar-${t}`}setActivationButton(){this.activationButton.draggable=oe.config.draggableToolbars,this.activationButton.addEventListener("click",()=>this.active=!this.active),this.activationButton.setAttribute("data-ui-manager-id",this._managerID),this.activationButton.addEventListener("dragstart",t=>{const i=this.getAttribute("data-ui-manager-id");t.dataTransfer&&i&&(t.dataTransfer.setData("id",i),t.dataTransfer.effectAllowed="move");const o=document.querySelectorAll("bim-toolbars-container");for(const n of o)n!==this.parentElement&&(n.dropping=!0)}),this.activationButton.addEventListener("dragend",t=>{t.dataTransfer&&t.dataTransfer.clearData();const i=document.querySelectorAll("bim-toolbars-container");for(const o of i)o.dropping=!1})}updateSections(){const t=this.children;for(const i of t)i instanceof wo&&(i.labelHidden=this.vertical&&!oe.config.sectionLabelOnVerticalToolbar,i.vertical=this.vertical)}firstUpdated(){this.setAttribute("data-ui-manager-id",this._managerID)}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}render(){return this.activationButton.label=this.label,this.activationButton.active=this.active,this.activationButton.icon=this.icon,f`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};ii.styles=$`
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
  `,ii.properties={label:{type:String,reflect:!0},icon:{type:String,reflect:!0},labelsHidden:{type:Boolean,attribute:"labels-hidden",reflect:!0},vertical:{type:Boolean,reflect:!0},gridArea:{type:String,attribute:!1},active:{type:Boolean,reflect:!0}};let Eo=ii;const ni=class extends A{constructor(){super(),this._vertical=!1,this._activationButtons=[],this.onDragOver=t=>{t.preventDefault(),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")},this.onDrop=t=>{var i;t.preventDefault();const o=(i=t.dataTransfer)==null?void 0:i.getData("id");if(!o)return;const n=document.querySelector(`bim-toolbar[data-ui-manager-id='${o}']`);!n||[...this.children].includes(n)||this.append(n)},this.addEventListener("dragover",this.onDragOver),this.addEventListener("drop",this.onDrop)}set vertical(t){this._vertical=t,this.updateToolbars()}get vertical(){return this._vertical}updateToolbars(){let t=!1;for(const i of this.children)i instanceof Eo&&(t?i.active=!1:t=i.active,this._activationButtons.push(i.activationButton),i.vertical=this.vertical);this.requestUpdate()}render(){const t=f`<div class="tabs">
      ${this._activationButtons}
    </div>`,i=f`<bim-button style="flex-grow: 0;"
      >${this._activationButtons}</bim-button
    >`,o=f`<div class="drop-element"></div>`;return f`
      <div class="parent">
        ${this.vertical?null:t}
        ${this.vertical?i:null}
        ${this.dropping?o:f`
              <div class="toolbars">
                <slot @slotchange=${this.updateToolbars}></slot>
              </div>
            `}
      </div>
    `}};ni.styles=[et.scrollbar,$`
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
    `],ni.properties={floating:{type:Boolean,reflect:!0},vertical:{type:Boolean,reflect:!0},gridArea:{type:String,attribute:!1},tabsHidden:{type:Boolean,attribute:"tabs-hidden",reflect:!0},dropping:{type:Boolean,reflect:!0}};let ml=ni;var gl=Object.defineProperty,vl=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&gl(t,i,n),n};const Ao=class extends A{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>this.dispatchEvent(this._onResize)).observe(this)}firstUpdated(){this.style.gridArea===""&&this.name&&(this.style.gridArea=this.name)}render(){return f`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Ao.styles=$`
    :host {
      position: relative;
      display: block;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }

    .parent {
      position: relative;
      height: 100%;
    }
  `;let Co=Ao;vl([d({type:String,reflect:!0})],Co.prototype,"name");/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko="important",yl=" !"+ko,Ul=zn(class extends Tn{constructor(e){var t;if(super(e),e.type!==On.ATTRIBUTE||e.name!=="style"||((t=e.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return o==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?i.removeProperty(o):i[o]=null);for(const o in t){const n=t[o];if(n!=null){this.ft.add(o);const r=typeof n=="string"&&n.endsWith(yl);o.includes("-")||r?i.setProperty(o,r?n.slice(0,-11):n,r?ko:""):i[o]=n}}return ct}});export{oe as A,q as W,A as a,f as b,kt as l,Ul as x};
