var $s=Object.defineProperty;var Cs=(i,t,e)=>t in i?$s(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Z=(i,t,e)=>(Cs(i,typeof t!="symbol"?t+"":t,e),e);const Et=Math.min,W=Math.max,ue=Math.round,st=i=>({x:i,y:i}),Es={left:"right",right:"left",bottom:"top",top:"bottom"},As={start:"end",end:"start"};function qi(i,t,e){return W(i,Et(t,e))}function Kt(i,t){return typeof i=="function"?i(t):i}function Y(i){return i.split("-")[0]}function Be(i){return i.split("-")[1]}function Sn(i){return i==="x"?"y":"x"}function kn(i){return i==="y"?"height":"width"}function Zt(i){return["top","bottom"].includes(Y(i))?"y":"x"}function On(i){return Sn(Zt(i))}function Ss(i,t,e){e===void 0&&(e=!1);const s=Be(i),n=On(i),o=kn(n);let r=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=he(r)),[r,he(r)]}function ks(i){const t=he(i);return[ei(i),t,ei(t)]}function ei(i){return i.replace(/start|end/g,t=>As[t])}function Os(i,t,e){const s=["left","right"],n=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?o:r;default:return[]}}function Ps(i,t,e,s){const n=Be(i);let o=Os(Y(i),e==="start",s);return n&&(o=o.map(r=>r+"-"+n),t&&(o=o.concat(o.map(ei)))),o}function he(i){return i.replace(/left|right|bottom|top/g,t=>Es[t])}function Ts(i){return{top:0,right:0,bottom:0,left:0,...i}}function Pn(i){return typeof i!="number"?Ts(i):{top:i,right:i,bottom:i,left:i}}function At(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function Yi(i,t,e){let{reference:s,floating:n}=i;const o=Zt(t),r=On(t),a=kn(r),l=Y(t),c=o==="y",u=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,f=s[a]/2-n[a]/2;let p;switch(l){case"top":p={x:u,y:s.y-n.height};break;case"bottom":p={x:u,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:h};break;case"left":p={x:s.x-n.width,y:h};break;default:p={x:s.x,y:s.y}}switch(Be(t)){case"start":p[r]-=f*(e&&c?-1:1);break;case"end":p[r]+=f*(e&&c?-1:1);break}return p}const zs=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:o=[],platform:r}=e,a=o.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:i,floating:t,strategy:n}),{x:u,y:h}=Yi(c,s,l),f=s,p={},m=0;for(let v=0;v<a.length;v++){const{name:g,fn:A}=a[v],{x:C,y:w,data:x,reset:S}=await A({x:u,y:h,initialPlacement:s,placement:f,strategy:n,middlewareData:p,rects:c,platform:r,elements:{reference:i,floating:t}});u=C??u,h=w??h,p={...p,[g]:{...p[g],...x}},S&&m<=50&&(m++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await r.getElementRects({reference:i,floating:t,strategy:n}):S.rects),{x:u,y:h}=Yi(c,f,l)),v=-1)}return{x:u,y:h,placement:f,strategy:n,middlewareData:p}};async function mi(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:o,rects:r,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:f=!1,padding:p=0}=Kt(t,i),m=Pn(p),g=a[f?h==="floating"?"reference":"floating":h],A=At(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(g)))==null||e?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),C=h==="floating"?{x:s,y:n,width:r.floating.width,height:r.floating.height}:r.reference,w=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),x=await(o.isElement==null?void 0:o.isElement(w))?await(o.getScale==null?void 0:o.getScale(w))||{x:1,y:1}:{x:1,y:1},S=At(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:C,offsetParent:w,strategy:l}):C);return{top:(A.top-S.top+m.top)/x.y,bottom:(S.bottom-A.bottom+m.bottom)/x.y,left:(A.left-S.left+m.left)/x.x,right:(S.right-A.right+m.right)/x.x}}const Is=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...g}=Kt(i,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const A=Y(n),C=Y(a)===a,w=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=f||(C||!v?[he(a)]:ks(a));!f&&m!=="none"&&x.push(...Ps(a,v,m,w));const S=[a,...x],y=await mi(t,g),O=[];let I=((s=o.flip)==null?void 0:s.overflows)||[];if(u&&O.push(y[A]),h){const j=Ss(n,r,w);O.push(y[j[0]],y[j[1]])}if(I=[...I,{placement:n,overflows:O}],!O.every(j=>j<=0)){var U,k;const j=(((U=o.flip)==null?void 0:U.index)||0)+1,wt=S[j];if(wt)return{data:{index:j,overflows:I},reset:{placement:wt}};let K=(k=I.filter(N=>N.overflows[0]<=0).sort((N,F)=>N.overflows[1]-F.overflows[1])[0])==null?void 0:k.placement;if(!K)switch(p){case"bestFit":{var _t;const N=(_t=I.map(F=>[F.placement,F.overflows.filter(dt=>dt>0).reduce((dt,We)=>dt+We,0)]).sort((F,dt)=>F[1]-dt[1])[0])==null?void 0:_t[0];N&&(K=N);break}case"initialPlacement":K=a;break}if(n!==K)return{reset:{placement:K}}}return{}}}};function Tn(i){const t=Et(...i.map(o=>o.left)),e=Et(...i.map(o=>o.top)),s=W(...i.map(o=>o.right)),n=W(...i.map(o=>o.bottom));return{x:t,y:e,width:s-t,height:n-e}}function Rs(i){const t=i.slice().sort((n,o)=>n.y-o.y),e=[];let s=null;for(let n=0;n<t.length;n++){const o=t[n];!s||o.y-s.y>s.height/2?e.push([o]):e[e.length-1].push(o),s=o}return e.map(n=>At(Tn(n)))}const Ls=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:o,strategy:r}=t,{padding:a=2,x:l,y:c}=Kt(i,t),u=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(s.reference))||[]),h=Rs(u),f=At(Tn(u)),p=Pn(a);function m(){if(h.length===2&&h[0].left>h[1].right&&l!=null&&c!=null)return h.find(g=>l>g.left-p.left&&l<g.right+p.right&&c>g.top-p.top&&c<g.bottom+p.bottom)||f;if(h.length>=2){if(Zt(e)==="y"){const k=h[0],_t=h[h.length-1],j=Y(e)==="top",wt=k.top,K=_t.bottom,N=j?k.left:_t.left,F=j?k.right:_t.right,dt=F-N,We=K-wt;return{top:wt,bottom:K,left:N,right:F,width:dt,height:We,x:N,y:wt}}const g=Y(e)==="left",A=W(...h.map(k=>k.right)),C=Et(...h.map(k=>k.left)),w=h.filter(k=>g?k.left===C:k.right===A),x=w[0].top,S=w[w.length-1].bottom,y=C,O=A,I=O-y,U=S-x;return{top:x,bottom:S,left:y,right:O,width:I,height:U,x:y,y:x}}return f}const v=await o.getElementRects({reference:{getBoundingClientRect:m},floating:s.floating,strategy:r});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function Bs(i,t){const{placement:e,platform:s,elements:n}=i,o=await(s.isRTL==null?void 0:s.isRTL(n.floating)),r=Y(e),a=Be(e),l=Zt(e)==="y",c=["left","top"].includes(r)?-1:1,u=o&&l?-1:1,h=Kt(t,i);let{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return a&&typeof m=="number"&&(p=a==="end"?m*-1:m),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}const zn=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:o,placement:r,middlewareData:a}=t,l=await Bs(t,i);return r===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:o+l.y,data:{...l,placement:r}}}}},Ms=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:o=!0,crossAxis:r=!1,limiter:a={fn:g=>{let{x:A,y:C}=g;return{x:A,y:C}}},...l}=Kt(i,t),c={x:e,y:s},u=await mi(t,l),h=Zt(Y(n)),f=Sn(h);let p=c[f],m=c[h];if(o){const g=f==="y"?"top":"left",A=f==="y"?"bottom":"right",C=p+u[g],w=p-u[A];p=qi(C,p,w)}if(r){const g=h==="y"?"top":"left",A=h==="y"?"bottom":"right",C=m+u[g],w=m-u[A];m=qi(C,m,w)}const v=a.fn({...t,[f]:p,[h]:m});return{...v,data:{x:v.x-e,y:v.y-s}}}}};function ot(i){return In(i)?(i.nodeName||"").toLowerCase():"#document"}function R(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function ct(i){var t;return(t=(In(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function In(i){return i instanceof Node||i instanceof R(i).Node}function G(i){return i instanceof Element||i instanceof R(i).Element}function D(i){return i instanceof HTMLElement||i instanceof R(i).HTMLElement}function Gi(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof R(i).ShadowRoot}function te(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=L(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function js(i){return["table","td","th"].includes(ot(i))}function gi(i){const t=vi(),e=L(i);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function Ns(i){let t=St(i);for(;D(t)&&!Me(t);){if(gi(t))return t;t=St(t)}return null}function vi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Me(i){return["html","body","#document"].includes(ot(i))}function L(i){return R(i).getComputedStyle(i)}function je(i){return G(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function St(i){if(ot(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Gi(i)&&i.host||ct(i);return Gi(t)?t.host:t}function Rn(i){const t=St(i);return Me(t)?i.ownerDocument?i.ownerDocument.body:i.body:D(t)&&te(t)?t:Rn(t)}function ii(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=Rn(i),o=n===((s=i.ownerDocument)==null?void 0:s.body),r=R(n);return o?t.concat(r,r.visualViewport||[],te(n)?n:[],r.frameElement&&e?ii(r.frameElement):[]):t.concat(n,ii(n,[],e))}function Ln(i){const t=L(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=D(i),o=n?i.offsetWidth:e,r=n?i.offsetHeight:s,a=ue(e)!==o||ue(s)!==r;return a&&(e=o,s=r),{width:e,height:s,$:a}}function Bn(i){return G(i)?i:i.contextElement}function $t(i){const t=Bn(i);if(!D(t))return st(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:o}=Ln(t);let r=(o?ue(e.width):e.width)/s,a=(o?ue(e.height):e.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const Hs=st(0);function Mn(i){const t=R(i);return!vi()||!t.visualViewport?Hs:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ds(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==R(i)?!1:t}function Ft(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),o=Bn(i);let r=st(1);t&&(s?G(s)&&(r=$t(s)):r=$t(i));const a=Ds(o,e,s)?Mn(o):st(0);let l=(n.left+a.x)/r.x,c=(n.top+a.y)/r.y,u=n.width/r.x,h=n.height/r.y;if(o){const f=R(o),p=s&&G(s)?R(s):s;let m=f,v=m.frameElement;for(;v&&s&&p!==m;){const g=$t(v),A=v.getBoundingClientRect(),C=L(v),w=A.left+(v.clientLeft+parseFloat(C.paddingLeft))*g.x,x=A.top+(v.clientTop+parseFloat(C.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,h*=g.y,l+=w,c+=x,m=R(v),v=m.frameElement}}return At({width:u,height:h,x:l,y:c})}const Vs=[":popover-open",":modal"];function jn(i){return Vs.some(t=>{try{return i.matches(t)}catch{return!1}})}function Us(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const o=n==="fixed",r=ct(s),a=t?jn(t.floating):!1;if(s===r||a&&o)return e;let l={scrollLeft:0,scrollTop:0},c=st(1);const u=st(0),h=D(s);if((h||!h&&!o)&&((ot(s)!=="body"||te(r))&&(l=je(s)),D(s))){const f=Ft(s);c=$t(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x,y:e.y*c.y-l.scrollTop*c.y+u.y}}function Fs(i){return Array.from(i.getClientRects())}function Nn(i){return Ft(ct(i)).left+je(i).scrollLeft}function Ws(i){const t=ct(i),e=je(i),s=i.ownerDocument.body,n=W(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=W(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-e.scrollLeft+Nn(i);const a=-e.scrollTop;return L(s).direction==="rtl"&&(r+=W(t.clientWidth,s.clientWidth)-n),{width:n,height:o,x:r,y:a}}function qs(i,t){const e=R(i),s=ct(i),n=e.visualViewport;let o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(n){o=n.width,r=n.height;const c=vi();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:o,height:r,x:a,y:l}}function Ys(i,t){const e=Ft(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,o=D(i)?$t(i):st(1),r=i.clientWidth*o.x,a=i.clientHeight*o.y,l=n*o.x,c=s*o.y;return{width:r,height:a,x:l,y:c}}function Qi(i,t,e){let s;if(t==="viewport")s=qs(i,e);else if(t==="document")s=Ws(ct(i));else if(G(t))s=Ys(t,e);else{const n=Mn(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return At(s)}function Hn(i,t){const e=St(i);return e===t||!G(e)||Me(e)?!1:L(e).position==="fixed"||Hn(e,t)}function Gs(i,t){const e=t.get(i);if(e)return e;let s=ii(i,[],!1).filter(a=>G(a)&&ot(a)!=="body"),n=null;const o=L(i).position==="fixed";let r=o?St(i):i;for(;G(r)&&!Me(r);){const a=L(r),l=gi(r);!l&&a.position==="fixed"&&(n=null),(o?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||te(r)&&!l&&Hn(i,r))?s=s.filter(u=>u!==r):n=a,r=St(r)}return t.set(i,s),s}function Qs(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const r=[...e==="clippingAncestors"?Gs(t,this._c):[].concat(e),s],a=r[0],l=r.reduce((c,u)=>{const h=Qi(t,u,n);return c.top=W(h.top,c.top),c.right=Et(h.right,c.right),c.bottom=Et(h.bottom,c.bottom),c.left=W(h.left,c.left),c},Qi(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Xs(i){const{width:t,height:e}=Ln(i);return{width:t,height:e}}function Js(i,t,e){const s=D(t),n=ct(t),o=e==="fixed",r=Ft(i,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=st(0);if(s||!s&&!o)if((ot(t)!=="body"||te(n))&&(a=je(t)),s){const h=Ft(t,!0,o,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else n&&(l.x=Nn(n));const c=r.left+a.scrollLeft-l.x,u=r.top+a.scrollTop-l.y;return{x:c,y:u,width:r.width,height:r.height}}function Xi(i,t){return!D(i)||L(i).position==="fixed"?null:t?t(i):i.offsetParent}function Dn(i,t){const e=R(i);if(!D(i)||jn(i))return e;let s=Xi(i,t);for(;s&&js(s)&&L(s).position==="static";)s=Xi(s,t);return s&&(ot(s)==="html"||ot(s)==="body"&&L(s).position==="static"&&!gi(s))?e:s||Ns(i)||e}const Ks=async function(i){const t=this.getOffsetParent||Dn,e=this.getDimensions;return{reference:Js(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function Zs(i){return L(i).direction==="rtl"}const to={convertOffsetParentRelativeRectToViewportRelativeRect:Us,getDocumentElement:ct,getClippingRect:Qs,getOffsetParent:Dn,getElementRects:Ks,getClientRects:Fs,getDimensions:Xs,getScale:$t,isElement:G,isRTL:Zs},Vn=Ms,Un=Is,Fn=Ls,Wn=(i,t,e)=>{const s=new Map,n={platform:to,...e},o={...n.platform,_c:s};return zs(i,t,{...n,platform:o})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const le=globalThis,yi=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_i=Symbol(),Ji=new WeakMap;let qn=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==_i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yi&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Ji.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Ji.set(e,t))}return t}toString(){return this.cssText}};const eo=i=>new qn(typeof i=="string"?i:i+"",void 0,_i),$=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,n,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[o+1],i[0]);return new qn(e,i,_i)},io=(i,t)=>{if(yi)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),n=le.litNonce;n!==void 0&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}},Ki=yi?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return eo(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:no,defineProperty:so,getOwnPropertyDescriptor:oo,getOwnPropertyNames:ro,getOwnPropertySymbols:lo,getPrototypeOf:ao}=Object,it=globalThis,Zi=it.trustedTypes,co=Zi?Zi.emptyScript:"",qe=it.reactiveElementPolyfillSupport,Mt=(i,t)=>i,de={toAttribute(i,t){switch(t){case Boolean:i=i?co:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},wi=(i,t)=>!no(i,t),tn={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:wi};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),it.litPropertyMetadata??(it.litPropertyMetadata=new WeakMap);class xt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=tn){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),n=this.getPropertyDescriptor(t,s,e);n!==void 0&&so(this.prototype,t,n)}}static getPropertyDescriptor(t,e,s){const{get:n,set:o}=oo(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return n==null?void 0:n.call(this)},set(r){const a=n==null?void 0:n.call(this);o.call(this,r),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??tn}static _$Ei(){if(this.hasOwnProperty(Mt("elementProperties")))return;const t=ao(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mt("properties"))){const e=this.properties,s=[...ro(e),...lo(e)];for(const n of s)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,n]of e)this.elementProperties.set(s,n)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const n=this._$Eu(e,s);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const n of s)e.unshift(Ki(n))}else t!==void 0&&e.push(Ki(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return io(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var o;const s=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,s);if(n!==void 0&&s.reflect===!0){const r=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:de).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){var o;const s=this.constructor,n=s._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const r=s.getPropertyOptions(n),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:de;this._$Em=n,this[n]=a.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??wi)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var n;return(n=s.hostUpdated)==null?void 0:n.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}xt.elementStyles=[],xt.shadowRootOptions={mode:"open"},xt[Mt("elementProperties")]=new Map,xt[Mt("finalized")]=new Map,qe==null||qe({ReactiveElement:xt}),(it.reactiveElementVersions??(it.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=globalThis,fe=jt.trustedTypes,en=fe?fe.createPolicy("lit-html",{createHTML:i=>i}):void 0,Yn="$lit$",tt=`lit$${Math.random().toFixed(9).slice(2)}$`,Gn="?"+tt,uo=`<${Gn}>`,mt=document,Wt=()=>mt.createComment(""),qt=i=>i===null||typeof i!="object"&&typeof i!="function",Qn=Array.isArray,ho=i=>Qn(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",Ye=`[ 	
\f\r]`,Lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nn=/-->/g,sn=/>/g,ft=RegExp(`>|${Ye}(?:([^\\s"'>=/]+)(${Ye}*=${Ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),on=/'/g,rn=/"/g,Xn=/^(?:script|style|textarea|title)$/i,fo=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),b=fo(1),kt=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),ln=new WeakMap,pt=mt.createTreeWalker(mt,129);function Jn(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return en!==void 0?en.createHTML(t):t}const po=(i,t)=>{const e=i.length-1,s=[];let n,o=t===2?"<svg>":"",r=Lt;for(let a=0;a<e;a++){const l=i[a];let c,u,h=-1,f=0;for(;f<l.length&&(r.lastIndex=f,u=r.exec(l),u!==null);)f=r.lastIndex,r===Lt?u[1]==="!--"?r=nn:u[1]!==void 0?r=sn:u[2]!==void 0?(Xn.test(u[2])&&(n=RegExp("</"+u[2],"g")),r=ft):u[3]!==void 0&&(r=ft):r===ft?u[0]===">"?(r=n??Lt,h=-1):u[1]===void 0?h=-2:(h=r.lastIndex-u[2].length,c=u[1],r=u[3]===void 0?ft:u[3]==='"'?rn:on):r===rn||r===on?r=ft:r===nn||r===sn?r=Lt:(r=ft,n=void 0);const p=r===ft&&i[a+1].startsWith("/>")?" ":"";o+=r===Lt?l+uo:h>=0?(s.push(c),l.slice(0,h)+Yn+l.slice(h)+tt+p):l+tt+(h===-2?a:p)}return[Jn(i,o+(i[e]||"<?>")+(t===2?"</svg>":"")),s]};class Yt{constructor({strings:t,_$litType$:e},s){let n;this.parts=[];let o=0,r=0;const a=t.length-1,l=this.parts,[c,u]=po(t,e);if(this.el=Yt.createElement(c,s),pt.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=pt.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(Yn)){const f=u[r++],p=n.getAttribute(h).split(tt),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:m[2],strings:p,ctor:m[1]==="."?mo:m[1]==="?"?go:m[1]==="@"?vo:Ne}),n.removeAttribute(h)}else h.startsWith(tt)&&(l.push({type:6,index:o}),n.removeAttribute(h));if(Xn.test(n.tagName)){const h=n.textContent.split(tt),f=h.length-1;if(f>0){n.textContent=fe?fe.emptyScript:"";for(let p=0;p<f;p++)n.append(h[p],Wt()),pt.nextNode(),l.push({type:2,index:++o});n.append(h[f],Wt())}}}else if(n.nodeType===8)if(n.data===Gn)l.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(tt,h+1))!==-1;)l.push({type:7,index:o}),h+=tt.length-1}o++}}static createElement(t,e){const s=mt.createElement("template");return s.innerHTML=t,s}}function Ot(i,t,e=i,s){var r,a;if(t===kt)return t;let n=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const o=qt(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==o&&((a=n==null?void 0:n._$AO)==null||a.call(n,!1),o===void 0?n=void 0:(n=new o(i),n._$AT(i,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=n:e._$Cl=n),n!==void 0&&(t=Ot(i,n._$AS(i,t.values),n,s)),t}class bo{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,n=((t==null?void 0:t.creationScope)??mt).importNode(e,!0);pt.currentNode=n;let o=pt.nextNode(),r=0,a=0,l=s[0];for(;l!==void 0;){if(r===l.index){let c;l.type===2?c=new ee(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new yo(o,this,t)),this._$AV.push(c),l=s[++a]}r!==(l==null?void 0:l.index)&&(o=pt.nextNode(),r++)}return pt.currentNode=mt,n}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class ee{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,n){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ot(this,t,e),qt(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==kt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ho(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==P&&qt(this._$AH)?this._$AA.nextSibling.data=t:this.T(mt.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Yt.createElement(Jn(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===n)this._$AH.p(e);else{const r=new bo(n,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=ln.get(t.strings);return e===void 0&&ln.set(t.strings,e=new Yt(t)),e}k(t){Qn(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,n=0;for(const o of t)n===e.length?e.push(s=new ee(this.S(Wt()),this.S(Wt()),this,this.options)):s=e[n],s._$AI(o),n++;n<e.length&&(this._$AR(s&&s._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Ne{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,n,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=P}_$AI(t,e=this,s,n){const o=this.strings;let r=!1;if(o===void 0)t=Ot(this,t,e,0),r=!qt(t)||t!==this._$AH&&t!==kt,r&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Ot(this,a[s+l],e,l),c===kt&&(c=this._$AH[l]),r||(r=!qt(c)||c!==this._$AH[l]),c===P?t=P:t!==P&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}r&&!n&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class mo extends Ne{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}class go extends Ne{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==P)}}class vo extends Ne{constructor(t,e,s,n,o){super(t,e,s,n,o),this.type=5}_$AI(t,e=this){if((t=Ot(this,t,e,0)??P)===kt)return;const s=this._$AH,n=t===P&&s!==P||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==P&&(s===P||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class yo{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Ot(this,t)}}const Ge=jt.litHtmlPolyfillSupport;Ge==null||Ge(Yt,ee),(jt.litHtmlVersions??(jt.litHtmlVersions=[])).push("3.1.3");const ni=(i,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let n=s._$litPart$;if(n===void 0){const o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=n=new ee(t.insertBefore(Wt(),o),o,void 0,e??{})}return n._$AI(i),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Nt=class extends xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ni(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return kt}};var An;Nt._$litElement$=!0,Nt.finalized=!0,(An=globalThis.litElementHydrateSupport)==null||An.call(globalThis,{LitElement:Nt});const Qe=globalThis.litElementPolyfillSupport;Qe==null||Qe({LitElement:Nt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:wi},wo=(i=_o,t,e)=>{const{kind:s,metadata:n}=e;let o=globalThis.litPropertyMetadata.get(n);if(o===void 0&&globalThis.litPropertyMetadata.set(n,o=new Map),o.set(e.name,i),s==="accessor"){const{name:r}=e;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,l,i)},init(a){return a!==void 0&&this.P(r,void 0,i),a}}}if(s==="setter"){const{name:r}=e;return function(a){const l=this[r];t.call(this,a),this.requestUpdate(r,l,i)}}throw Error("Unsupported decorator location: "+s)};function d(i){return(t,e)=>typeof e=="object"?wo(i,t,e):((s,n,o)=>{const r=n.hasOwnProperty(o);return n.constructor.createProperty(o,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(n,o):void 0})(i,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xo(i){return d({...i,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Eo=i=>(...t)=>({_$litDirective$:i,values:t});class Ao{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ht=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const n of e)(s=n._$AO)==null||s.call(n,t,!1),Ht(n,t);return!0},pe=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Kn=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Oo(t)}};function So(i){this._$AN!==void 0?(pe(this),this._$AM=i,Kn(this)):this._$AM=i}function ko(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)Ht(s[o],!1),pe(s[o]);else s!=null&&(Ht(s,!1),pe(s));else Ht(this,i)}const Oo=i=>{i.type==Co.CHILD&&(i._$AP??(i._$AP=ko),i._$AQ??(i._$AQ=So))};class Po extends Ao{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Kn(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(n=this.disconnected)==null||n.call(this)),e&&(Ht(this,t),pe(this))}setValue(t){if($o(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=()=>new To;class To{}const Xe=new WeakMap,q=Eo(class extends Po{render(i){return P}update(i,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),P}rt(i){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=Xe.get(t);e===void 0&&(e=new WeakMap,Xe.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Xe.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});class E extends Nt{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][o];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return ni(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const o=t,r=l=>(n={...n,...l},ni(o(n),s),n);return r(e),[s.firstElementChild,r]}}/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const Zn=Object.freeze({left:0,top:0,width:16,height:16}),be=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ie=Object.freeze({...Zn,...be}),si=Object.freeze({...ie,body:"",hidden:!1}),zo=Object.freeze({width:null,height:null}),ts=Object.freeze({...zo,...be});function Io(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(i.slice(0,i.length-e.length));return isNaN(o)?0:(o=o/n,o%1===0?s(o):0)}}return t}const Ro=/[\s,]+/;function Lo(i,t){t.split(Ro).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const es={...ts,preserveAspectRatio:""};function an(i){const t={...es},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Io(e("rotate","")),Lo(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Bo(i,t){for(const e in es)if(i[e]!==t[e])return!0;return!1}const Dt=/^[a-z0-9]+(-[a-z0-9]+)*$/,ne=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!ae(c)?null:c}const o=n[0],r=o.split("-");if(r.length>1){const a={provider:s,prefix:r.shift(),name:r.join("-")};return t&&!ae(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:o};return t&&!ae(a,e)?null:a}return null},ae=(i,t)=>i?!!((i.provider===""||i.provider.match(Dt))&&(t&&i.prefix===""||i.prefix.match(Dt))&&i.name.match(Dt)):!1;function Mo(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function cn(i,t){const e=Mo(i,t);for(const s in si)s in be?s in i&&!(s in e)&&(e[s]=be[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function jo(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function o(r){if(e[r])return n[r]=[];if(!(r in n)){n[r]=null;const a=s[r]&&s[r].parent,l=a&&o(a);l&&(n[r]=[a].concat(l))}return n[r]}return Object.keys(e).concat(Object.keys(s)).forEach(o),n}function No(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let o={};function r(a){o=cn(s[a]||n[a],o)}return r(t),e.forEach(r),cn(i,o)}function is(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=jo(i);for(const n in s){const o=s[n];o&&(t(n,No(i,n,o)),e.push(n))}return e}const Ho={provider:"",aliases:{},not_found:{},...Zn};function Je(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function ns(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Je(i,Ho))return null;const e=t.icons;for(const n in e){const o=e[n];if(!n.match(Dt)||typeof o.body!="string"||!Je(o,si))return null}const s=t.aliases||Object.create(null);for(const n in s){const o=s[n],r=o.parent;if(!n.match(Dt)||typeof r!="string"||!e[r]&&!s[r]||!Je(o,si))return null}return t}const me=Object.create(null);function Do(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function rt(i,t){const e=me[i]||(me[i]=Object.create(null));return e[t]||(e[t]=Do(i,t))}function xi(i,t){return ns(t)?is(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Vo(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Uo(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(me)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(me[n]||{})).forEach(r=>{const a=rt(n,r);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+r+":"+l))})}),e}let Gt=!1;function ss(i){return typeof i=="boolean"&&(Gt=i),Gt}function Qt(i){const t=typeof i=="string"?ne(i,!0,Gt):i;if(t){const e=rt(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function os(i,t){const e=ne(i,!0,Gt);if(!e)return!1;const s=rt(e.provider,e.prefix);return Vo(s,e.name,t)}function un(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Gt&&!t&&!i.prefix){let n=!1;return ns(i)&&(i.prefix="",is(i,(o,r)=>{r&&os(o,r)&&(n=!0)})),n}const e=i.prefix;if(!ae({provider:t,prefix:e,name:"a"}))return!1;const s=rt(t,e);return!!xi(s,i)}function hn(i){return!!Qt(i)}function Fo(i){const t=Qt(i);return t?{...ie,...t}:null}function Wo(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const o=n.provider,r=n.prefix,a=n.name,l=e[o]||(e[o]=Object.create(null)),c=l[r]||(l[r]=rt(o,r));let u;a in c.icons?u=t.loaded:r===""||c.missing.has(a)?u=t.missing:u=t.pending;const h={provider:o,prefix:r,name:a};u.push(h)}),t}function rs(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function qo(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(o=>{const r=o.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])r.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))r.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),r.pending.length!==a&&(e||rs([i],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let Yo=0;function Go(i,t,e){const s=Yo++,n=rs.bind(null,e,s);if(!t.pending.length)return n;const o={id:s,icons:t,callback:i,abort:n};return e.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),n}const oi=Object.create(null);function dn(i,t){oi[i]=t}function ri(i){return oi[i]||oi[""]}function Qo(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const o=typeof n=="string"?ne(n,t,e):n;o&&s.push(o)}),s}var Xo={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Jo(i,t,e,s){const n=i.resources.length,o=i.random?Math.floor(Math.random()*n):i.index;let r;if(i.random){let y=i.resources.slice(0);for(r=[];y.length>1;){const O=Math.floor(Math.random()*y.length);r.push(y[O]),y=y.slice(0,O).concat(y.slice(O+1))}r=r.concat(y)}else r=i.resources.slice(o).concat(i.resources.slice(0,o));const a=Date.now();let l="pending",c=0,u,h=null,f=[],p=[];typeof s=="function"&&p.push(s);function m(){h&&(clearTimeout(h),h=null)}function v(){l==="pending"&&(l="aborted"),m(),f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function g(y,O){O&&(p=[]),typeof y=="function"&&p.push(y)}function A(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:g,abort:v}}function C(){l="failed",p.forEach(y=>{y(void 0,u)})}function w(){f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function x(y,O,I){const U=O!=="success";switch(f=f.filter(k=>k!==y),l){case"pending":break;case"failed":if(U||!i.dataAfterTimeout)return;break;default:return}if(O==="abort"){u=I,C();return}if(U){u=I,f.length||(r.length?S():C());return}if(m(),w(),!i.random){const k=i.resources.indexOf(y.resource);k!==-1&&k!==i.index&&(i.index=k)}l="completed",p.forEach(k=>{k(I)})}function S(){if(l!=="pending")return;m();const y=r.shift();if(y===void 0){if(f.length){h=setTimeout(()=>{m(),l==="pending"&&(w(),C())},i.timeout);return}C();return}const O={status:"pending",resource:y,callback:(I,U)=>{x(O,I,U)}};f.push(O),c++,h=setTimeout(S,i.rotate),e(y,t,O.callback)}return setTimeout(S),A}function ls(i){const t={...Xo,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const u=Jo(t,a,l,(h,f)=>{s(),c&&c(h,f)});return e.push(u),u}function o(a){return e.find(l=>a(l))||null}return{query:n,find:o,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function $i(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const He=Object.create(null),Bt=["https://api.simplesvg.com","https://api.unisvg.com"],ce=[];for(;Bt.length>0;)Bt.length===1||Math.random()>.5?ce.push(Bt.shift()):ce.push(Bt.pop());He[""]=$i({resources:["https://api.iconify.design"].concat(ce)});function fn(i,t){const e=$i(t);return e===null?!1:(He[i]=e,!0)}function De(i){return He[i]}function Ko(){return Object.keys(He)}function pn(){}const Ke=Object.create(null);function Zo(i){if(!Ke[i]){const t=De(i);if(!t)return;const e=ls(t),s={config:t,redundancy:e};Ke[i]=s}return Ke[i]}function as(i,t,e){let s,n;if(typeof i=="string"){const o=ri(i);if(!o)return e(void 0,424),pn;n=o.send;const r=Zo(i);r&&(s=r.redundancy)}else{const o=$i(i);if(o){s=ls(o);const r=i.resources?i.resources[0]:"",a=ri(r);a&&(n=a.send)}}return!s||!n?(e(void 0,424),pn):s.query(t,n,e)().abort}const bn="iconify2",Xt="iconify",cs=Xt+"-count",mn=Xt+"-version",us=36e5,tr=168,er=50;function li(i,t){try{return i.getItem(t)}catch{}}function Ci(i,t,e){try{return i.setItem(t,e),!0}catch{}}function gn(i,t){try{i.removeItem(t)}catch{}}function ai(i,t){return Ci(i,cs,t.toString())}function ci(i){return parseInt(li(i,cs))||0}const bt={local:!0,session:!0},hs={local:new Set,session:new Set};let Ei=!1;function ir(i){Ei=i}let re=typeof window>"u"?{}:window;function ds(i){const t=i+"Storage";try{if(re&&re[t]&&typeof re[t].length=="number")return re[t]}catch{}bt[i]=!1}function fs(i,t){const e=ds(i);if(!e)return;const s=li(e,mn);if(s!==bn){if(s){const a=ci(e);for(let l=0;l<a;l++)gn(e,Xt+l.toString())}Ci(e,mn,bn),ai(e,0);return}const n=Math.floor(Date.now()/us)-tr,o=a=>{const l=Xt+a.toString(),c=li(e,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}gn(e,l)}};let r=ci(e);for(let a=r-1;a>=0;a--)o(a)||(a===r-1?(r--,ai(e,r)):hs[i].add(a))}function ps(){if(!Ei){ir(!0);for(const i in bt)fs(i,t=>{const e=t.data,s=t.provider,n=e.prefix,o=rt(s,n);if(!xi(o,e).length)return!1;const r=e.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,r):r,!0})}}function nr(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in bt)fs(s,n=>{const o=n.data;return n.provider!==i.provider||o.prefix!==i.prefix||o.lastModified===t});return!0}function sr(i,t){Ei||ps();function e(s){let n;if(!bt[s]||!(n=ds(s)))return;const o=hs[s];let r;if(o.size)o.delete(r=Array.from(o).shift());else if(r=ci(n),r>=er||!ai(n,r+1))return;const a={cached:Math.floor(Date.now()/us),provider:i.provider,data:t};return Ci(n,Xt+r.toString(),JSON.stringify(a))}t.lastModified&&!nr(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function vn(){}function or(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,qo(i)}))}function rr(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let o;if(!n||!(o=ri(e)))return;o.prepare(e,s,n).forEach(a=>{as(e,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=xi(i,l);if(!c.length)return;const u=i.pendingIcons;u&&c.forEach(h=>{u.delete(h)}),sr(i,l)}catch(c){console.error(c)}or(i)})})}))}const Ai=(i,t)=>{const e=Qo(i,!0,ss()),s=Wo(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,vn)}),()=>{l=!1}}const n=Object.create(null),o=[];let r,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===r)return;r=c,a=u,o.push(rt(c,u));const h=n[c]||(n[c]=Object.create(null));h[u]||(h[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:h}=l,f=rt(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(h)||(p.add(h),n[c][u].push(h))}),o.forEach(l=>{const{provider:c,prefix:u}=l;n[c][u].length&&rr(l,n[c][u])}),t?Go(t,s,o):vn},lr=i=>new Promise((t,e)=>{const s=typeof i=="string"?ne(i,!0):i;if(!s){e(i);return}Ai([s||i],n=>{if(n.length&&s){const o=Qt(s);if(o){t({...ie,...o});return}}e(i)})});function ar(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function cr(i,t){const e=typeof i=="string"?ne(i,!0,!0):null;if(!e){const o=ar(i);return{value:i,data:o}}const s=Qt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Ai([e],()=>t(i,e,Qt(e)));return{value:i,name:e,loading:n}}function Ze(i){return i.hasAttribute("inline")}let bs=!1;try{bs=navigator.vendor.indexOf("Apple")===0}catch{}function ur(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(bs||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const hr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,dr=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ui(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(hr);if(s===null||!s.length)return i;const n=[];let o=s.shift(),r=dr.test(o);for(;;){if(r){const a=parseFloat(o);isNaN(a)?n.push(o):n.push(Math.ceil(a*t*e)/e)}else n.push(o);if(o=s.shift(),o===void 0)return n.join("");r=!r}}function fr(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),o=i.indexOf("</"+t);if(n===-1||o===-1)break;const r=i.indexOf(">",o);if(r===-1)break;e+=i.slice(n+1,o).trim(),i=i.slice(0,s).trim()+i.slice(r+1)}return{defs:e,content:i}}function pr(i,t){return i?"<defs>"+i+"</defs>"+t:t}function br(i,t,e){const s=fr(i);return pr(s.defs,t+s.content+e)}const mr=i=>i==="unset"||i==="undefined"||i==="none";function ms(i,t){const e={...ie,...i},s={...ts,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let o=e.body;[e,s].forEach(v=>{const g=[],A=v.hFlip,C=v.vFlip;let w=v.rotate;A?C?w+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):C&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let x;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:x=n.height/2+n.top,g.unshift("rotate(90 "+x.toString()+" "+x.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:x=n.width/2+n.left,g.unshift("rotate(-90 "+x.toString()+" "+x.toString()+")");break}w%2===1&&(n.left!==n.top&&(x=n.left,n.left=n.top,n.top=x),n.width!==n.height&&(x=n.width,n.width=n.height,n.height=x)),g.length&&(o=br(o,'<g transform="'+g.join(" ")+'">',"</g>"))});const r=s.width,a=s.height,l=n.width,c=n.height;let u,h;r===null?(h=a===null?"1em":a==="auto"?c:a,u=ui(h,l/c)):(u=r==="auto"?l:r,h=a===null?ui(u,c/l):a==="auto"?c:a);const f={},p=(v,g)=>{mr(g)||(f[v]=g.toString())};p("width",u),p("height",h);const m=[n.left,n.top,l,c];return f.viewBox=m.join(" "),{attributes:f,viewBox:m,body:o}}function Si(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function gr(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function vr(i){return"data:image/svg+xml,"+gr(i)}function gs(i){return'url("'+vr(i)+'")'}const yr=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ge=yr();function _r(i){ge=i}function wr(){return ge}function xr(i,t){const e=De(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(r=>{n=Math.max(n,r.length)});const o=t+".json?icons=";s=e.maxURL-n-e.path.length-o.length}return s}function $r(i){return i===404}const Cr=(i,t,e)=>{const s=[],n=xr(i,t),o="icons";let r={type:o,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(r),r={type:o,provider:i,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),s.push(r),s};function Er(i){if(typeof i=="string"){const t=De(i);if(t)return t.path}return"/"}const Ar=(i,t,e)=>{if(!ge){e("abort",424);return}let s=Er(t.provider);switch(t.type){case"icons":{const o=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;s+=o.slice(0,1)==="/"?o.slice(1):o;break}default:e("abort",400);return}let n=503;ge(i+s).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{e($r(r)?"abort":"next",r)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?e("abort",o):e("next",n)});return}setTimeout(()=>{e("success",o)})}).catch(()=>{e("next",n)})},Sr={prepare:Cr,send:Ar};function yn(i,t){switch(i){case"local":case"session":bt[i]=t;break;case"all":for(const e in bt)bt[e]=t;break}}const ti="data-style";let vs="";function kr(i){vs=i}function _n(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(ti));e||(e=document.createElement("style"),e.setAttribute(ti,ti),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+vs}function ys(){dn("",Sr),ss(!0);let i;try{i=window}catch{}if(i){if(ps(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!un(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const o=e[s];if(typeof o!="object"||!o||o.resources===void 0)continue;fn(s,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>yn(e,!0),disableCache:e=>yn(e,!1),iconLoaded:hn,iconExists:hn,getIcon:Fo,listIcons:Uo,addIcon:os,addCollection:un,calculateSize:ui,buildIcon:ms,iconToHTML:Si,svgToURL:gs,loadIcons:Ai,loadIcon:lr,addAPIProvider:fn,appendCustomStyle:kr,_api:{getAPIConfig:De,setAPIModule:dn,sendAPIQuery:as,setFetch:_r,getFetch:wr,listAPIProviders:Ko}}}const hi={"background-color":"currentColor"},_s={"background-color":"transparent"},wn={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},xn={"-webkit-mask":hi,mask:hi,background:_s};for(const i in xn){const t=xn[i];for(const e in wn)t[i+"-"+e]=wn[e]}function $n(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Or(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const o=i.attributes,r=Si(n,{...o,width:t.width+"",height:t.height+""}),a=gs(r),l=s.style,c={"--svg":a,width:$n(o.width),height:$n(o.height),...e?hi:_s};for(const u in c)l.setProperty(u,c[u]);return s}let Vt;function Pr(){try{Vt=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Vt=null}}function Tr(i){return Vt===void 0&&Pr(),Vt?Vt.createHTML(i):i}function zr(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=Si(i.body,e);return t.innerHTML=Tr(n),t.firstChild}function di(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Cn(i,t){const e=t.icon.data,s=t.customisations,n=ms(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const o=t.renderedMode;let r;switch(o){case"svg":r=zr(n);break;default:r=Or(n,{...ie,...e},o==="mask")}const a=di(i);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):i.replaceChild(r,a):i.appendChild(r)}function En(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Ir(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends e{constructor(){super();Z(this,"_shadowRoot");Z(this,"_initialised",!1);Z(this,"_state");Z(this,"_checkQueued",!1);Z(this,"_connected",!1);Z(this,"_observer",null);Z(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=Ze(this);_n(l,c),this._state=En({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=Ze(this),u=this._state;c!==u.inline&&(u.inline=c,_n(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return Ze(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Cn(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const u=this.getAttribute("mode"),h=an(this);(l.attrMode!==u||Bo(l.customisations,h)||!di(this._shadowRoot))&&this._renderIcon(l.icon,h,u)}_iconChanged(l){const c=cr(l,(u,h,f)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==u)return;const m={value:u,name:h,data:f};m.data?this._gotIconData(m):p.icon=m});c.data?this._gotIconData(c):this._state=En(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=di(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,an(this),this.getAttribute("mode"))}_renderIcon(l,c,u){const h=ur(l.data.body,u),f=this._state.inline;Cn(this._shadowRoot,this._state={rendered:!0,icon:l,inline:f,customisations:c,attrMode:u,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(u=>u.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in o.prototype||Object.defineProperty(o.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=ys();for(const a in r)o[a]=o.prototype[a]=r[a];return t.define(i,o),o}Ir()||ys();var Rr=Object.defineProperty,V=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Rr(t,e,n),n},Tt;const M=(Tt=class extends E{constructor(){super(),this._parent=nt(),this._tooltip=nt(),this._contextMenu=nt(),this._mouseLeave=!1,this.onWindowMouseUp=t=>{const{value:e}=this._contextMenu;!this.contains(t.target)&&e&&(e.visible=!1)},this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this.mouseLeave=!0,this.addEventListener("click",t=>t.stopPropagation())}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&Wn(t,e,{placement:"bottom",middleware:[zn(10),Fn(),Un(),Vn({padding:5})]}).then(s=>{const{x:n,y:o}=s;Object.assign(e.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}onChildrenClick(t){t.stopPropagation();const{value:e}=this._contextMenu;e&&(e.visible=!e.visible)}onSlotChange(t){const{value:e}=this._contextMenu,s=t.target.assignedElements();for(const n of s){if(!(n instanceof Tt)){n.remove(),console.warn("Only bim-button is allowed inside bim-button. Child has been removed.");continue}n.addEventListener("click",()=>e==null?void 0:e.updatePosition())}this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){const t=b`
      <div ${q(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?b`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?b`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `,e=this.children.length>0;return b`
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
      <div ${q(this._parent)} class="parent">
        ${this.label||this.icon?b`
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
        ${e?b`
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
    `}},Tt.styles=$`
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
  `,Tt);V([d({type:String,reflect:!0})],M.prototype,"label");V([d({type:Boolean,attribute:"label-hidden",reflect:!0})],M.prototype,"labelHidden");V([d({type:Boolean,reflect:!0})],M.prototype,"active");V([d({type:Boolean,reflect:!0,attribute:"disabled"})],M.prototype,"disabled");V([d({type:String,reflect:!0})],M.prototype,"icon");V([d({type:Boolean,reflect:!0})],M.prototype,"vertical");V([d({type:Number,attribute:"tooltip-time",reflect:!0})],M.prototype,"tooltipTime");V([d({type:Boolean,attribute:"tooltip-visible",reflect:!0})],M.prototype,"tooltipVisible");V([d({type:String,attribute:"tooltip-title",reflect:!0})],M.prototype,"tooltipTitle");V([d({type:String,attribute:"tooltip-text",reflect:!0})],M.prototype,"tooltipText");let Lr=M;var Br=Object.defineProperty,Ve=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Br(t,e,n),n};const zi=class zi extends E{constructor(){super(),this.onValueChange=new Event("change"),this.checked=!1}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return b`
      <div class="parent">
        ${this.label?b`<bim-label
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
    `}};zi.styles=$`
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
  `;let gt=zi;Ve([d({type:String,reflect:!0})],gt.prototype,"icon");Ve([d({type:String,reflect:!0})],gt.prototype,"name");Ve([d({type:String,reflect:!0})],gt.prototype,"label");Ve([d({type:Boolean,reflect:!0})],gt.prototype,"checked");var Mr=Object.defineProperty,zt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Mr(t,e,n),n};const Ii=class Ii extends E{constructor(){super(),this._colorInput=nt(),this._textInput=nt(),this.onValueChange=new Event("input"),this.vertical=!1,this.color="#bcf124"}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){const t=e=>{const s=e.target;this.opacity=s.value,this.dispatchEvent(this.onValueChange)};return b`
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
            ${this.opacity!==void 0?b`<bim-number-input
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
    `}};Ii.styles=$`
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
  `;let Q=Ii;zt([d({type:String,reflect:!0})],Q.prototype,"name");zt([d({type:String,reflect:!0})],Q.prototype,"label");zt([d({type:String,reflect:!0})],Q.prototype,"icon");zt([d({type:Boolean,reflect:!0})],Q.prototype,"vertical");zt([d({type:Number,reflect:!0})],Q.prototype,"opacity");zt([d({type:String,reflect:!0})],Q.prototype,"color");const jr=$`
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
`,Nr=$`
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
`,ut={scrollbar:jr,globalStyles:Nr};var Hr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,Vr=(i,t,e,s)=>{for(var n=Dr(t,e),o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Hr(t,e,n),n};const Ri=class Ri extends E{constructor(){super(...arguments),this._visible=!1,this._middleware={name:"middleware",async fn(t){const{right:e,top:s}=await mi(t);return t.x-=Math.sign(e)===1?e+5:0,t.y-=Math.sign(s)===1?s+5:0,t}}}get visible(){return this._visible}set visible(t){this._visible=t,t&&this.updatePosition()}async updatePosition(t){const e=t||this.parentNode;if(!e){this.visible=!1,console.warn("No target element found for context-menu.");return}const s=await Wn(e,this,{placement:"right",middleware:[zn(10),Fn(),Un(),Vn({padding:5}),this._middleware]}),{x:n,y:o}=s;this.style.left=`${n}px`,this.style.top=`${o}px`}render(){return b` <slot></slot> `}};Ri.styles=[ut.scrollbar,$`
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
    `];let ve=Ri;Vr([d({type:Boolean,reflect:!0})],ve.prototype,"visible");const ye=(i,t=!0)=>{let e={};for(const s of i.children){const n=s,o=n.getAttribute("name")||n.getAttribute("label");if(o){if("value"in n){const r=n.value;if(typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).length===0)continue;e[o]=n.value}else if(t){const r=ye(n);if(Object.keys(r).length===0)continue;e[o]=r}}else t&&(e={...e,...ye(n)})}return e},ki=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i;var Ur=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,ht=(i,t,e,s)=>{for(var n=s>1?void 0:s?Fr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Ur(t,e,n),n};const Li=class Li extends E{get value(){return this._value!==void 0?this._value:this.label?ki(this.label):this.label}set value(t){this._value=t}constructor(){super(),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}render(){return b`
      <div class="parent" .title=${this.label??""}>
        ${this.img||this.icon||this.label?b` <div style="display: flex; column-gap: 0.375rem">
              ${this.checkbox&&!this.noMark?b`<bim-checkbox
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
        ${!this.checkbox&&!this.noMark&&this.checked?b`<svg
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
    `}};Li.styles=$`
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
  `;let T=Li;ht([d({type:String,reflect:!0})],T.prototype,"img",2);ht([d({type:String,reflect:!0})],T.prototype,"label",2);ht([d({type:String,reflect:!0})],T.prototype,"icon",2);ht([d({type:Boolean,reflect:!0})],T.prototype,"checked",2);ht([d({type:Boolean,reflect:!0})],T.prototype,"checkbox",2);ht([d({type:Boolean,attribute:"no-mark",reflect:!0})],T.prototype,"noMark",2);ht([d({converter:{fromAttribute(i){return i&&ki(i)}}})],T.prototype,"value",1);ht([d({type:Boolean,reflect:!0})],T.prototype,"vertical",2);var Wr=Object.defineProperty,It=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Wr(t,e,n),n};const Se=class Se extends E{constructor(){super(),this._inputContainer=nt(),this._listElement=nt(),this._visible=!1,this._value=[],this.onValueChange=new Event("change"),this.onWindowMouseUp=t=>{this.contains(t.target)||(this.visible=!1)},this.onOptionClick=t=>{const s=t.target.value,n=this._value.includes(s);if(!this.multiple&&!this.required&&!n)this.value=[s];else if(!this.multiple&&!this.required&&n)this.value=[];else if(!this.multiple&&this.required&&!n)this.value=[s];else if(this.multiple&&!this.required&&!n)this.value=[...this._value,s];else if(this.multiple&&!this.required&&n)this.value=this._value.filter(o=>o!==s);else if(this.multiple&&this.required&&!n)this.value=[...this._value,s];else if(this.multiple&&this.required&&n){const o=this._value.filter(r=>r!==s);o.length!==0&&(this.value=o)}},this.useObserver=!0,this.multiple=!1,this.required=!1,this.visible=!1,this.vertical=!1}get visible(){return this._visible}set visible(t){this._visible=t,t||this.resetVisibleElements()}set value(t){if(this.required&&Object.keys(t).length===0){console.warn("bim-dropdown was set as required but not value is set. Nothing has changed.");return}const e=[];for(const s of t){const n=this.findOption(s);if(n){if(e.push(n.value),!this.multiple&&Object.keys(t).length>1){console.warn("bim-dropdown wasn't set as multiple, but provided an array of values. Only first was taken.");break}}else console.warn(`bim-dropdown doesn't have ${s} as a possible value.`)}this._value=e,this.dispatchEvent(this.onValueChange),this.updateOptionsState()}get value(){return this._value}get _options(){const t=[...this.elements];for(const e of this.children)e instanceof T&&t.push(e);return t}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);for(const s of e){if(!(s instanceof T)){console.warn("Only bim-option is allowed inside bim-dropdown. Child has been removed.");continue}s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick)}}updateOptionsState(){for(const t of this._options)t instanceof T&&(this._value.includes(t.value)?t.checked=!0:t.checked=!1)}findOption(t){return this._options.find(s=>s instanceof T?s.label===t||s.value===t:!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){let t,e,s;if(this._value.length===0)t="Select an option...";else if(this._value.length===1){const n=this.findOption(this._value[0]);t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.length})`;return b`
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
        <bim-context-menu ${q(this._listElement)} .visible=${this.visible}>
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this.visibleElements.map(n=>n)}
        </bim-context-menu>
      </bim-input>
    `}};Se.styles=[ut.scrollbar,$`
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
    `],Se.properties={visible:{type:Boolean,reflect:!0},value:{attribute:!1}};let X=Se;It([d({type:String,reflect:!0})],X.prototype,"name");It([d({type:String,reflect:!0})],X.prototype,"icon");It([d({type:String,reflect:!0})],X.prototype,"label");It([d({type:Boolean,reflect:!0})],X.prototype,"multiple");It([d({type:Boolean,reflect:!0})],X.prototype,"required");It([d({type:Boolean,reflect:!0})],X.prototype,"vertical");var qr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,ws=(i,t,e,s)=>{for(var n=s>1?void 0:s?Yr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&qr(t,e,n),n},et;const Oi=(et=class extends E{constructor(){super(),this._containers={},this._onLayoutChange=new Event("layout-change"),this.layouts={},this.childrenElements=new Set,this.floating=!1}get layout(){return this._layout}set layout(t){if(t){const e=this.layouts[t];if(!e){console.warn(`bim-grid: "${t}" layout is not defined, "${this.layout}" layout remained.`);return}this.style.gridTemplate=e,this.updateContainers()}else this.style.gridTemplate="",this.cleanup();this._layout=t,this.dispatchEvent(this._onLayoutChange)}get rows(){return this.style.gridTemplate.trim().split(/"([^"]*)"/).map((s,n)=>n%2!==0?s:null).filter(s=>s!==null)}get layoutAreas(){const t=new Set;for(const e of this.rows){const s=e.trim().split(/\s+/);for(const n of s)t.add(n)}return[...t]}static addContainerTag(t,e){et.containerTags[t]=e}onSlotChange(t){const e=t.target.assignedElements();for(const s of e){this.childrenElements.add(s),s.toggleAttribute("floating",this.floating);try{const n=this.isVerticalArea(s.style.gridArea);"horizontal"in s?s.horizontal=!n:"vertical"in s&&(s.vertical=n)}catch{}}}updateContainers(){const{layoutAreas:t}=this;for(const e of t){if(!e.startsWith("c-"))continue;const s=e.split("-")[1],n=e.split("-")[2];if(!n)throw new Error(`bim-grid: you defined a container area without an id (${e})`);this.createContainer(s,n)}this.cleanup()}cleanup(){const{layoutAreas:t}=this;for(const e of this.childrenElements){const{gridArea:s}=e.style;t.includes(s)?this.append(e):e.remove()}}createContainer(t,e){const s=`c-${t}-${e}`;t in this._containers||(this._containers[t]=[]);const n=this._containers[t];let o=n.find(r=>r.style.gridArea===s);if(!o){const r=et.containerTags[t]??"div";o=document.createElement(r),o.style.gridArea=s,n.push(o),this.childrenElements.add(o)}return o}isVerticalArea(t){const{rows:e}=this,s=e.find(a=>a.includes(t));if(!s)throw new Error(`${t} wasn't defined in the grid-template of this bim-grid`);const n=e.indexOf(s),o=n>0&&e[n-1].includes(t),r=n<e.length-1&&e[n+1].includes(t);return o||r}getContainer(t,e,s=!1){const n=`c-${t}-${e}`,o=this._containers[t];if(s)return this.createContainer(t,e);if(!o)throw new Error(`bim-grid: container of type "${t}" is not defined in this grid.`);const r=o.find(a=>a.style.gridArea===n);if(!r)throw new Error(`bim-grid: there is no container with id "${e}" in this grid.`);return r}render(){return b` <slot @slotchange=${this.onSlotChange}></slot> `}},et.styles=$`
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
  `,et.containerTags={panels:"bim-panels-container",toolbars:"bim-toolbars-container"},et);ws([d({type:Boolean,reflect:!0})],Oi.prototype,"floating",2);ws([d({type:String,reflect:!0})],Oi.prototype,"layout",1);let Gr=Oi;const ke=class ke extends E{render(){return b`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};ke.styles=$`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
    }
  `,ke.properties={icon:{type:String}};let fi=ke;var Qr=Object.defineProperty,Ue=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Qr(t,e,n),n};const Bi=class Bi extends E{constructor(){super(),this.onValueChange=new Event("change"),this.vertical=!1}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const o=n,r=t[s];typeof r=="boolean"?o.checked=r:o.value=r}}render(){return b`
      <div class="parent">
        ${this.label||this.icon?b`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};Bi.styles=$`
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
  `;let vt=Bi;Ue([d({type:String,reflect:!0})],vt.prototype,"name");Ue([d({type:String,reflect:!0})],vt.prototype,"label");Ue([d({type:String,reflect:!0})],vt.prototype,"icon");Ue([d({type:Boolean,reflect:!0})],vt.prototype,"vertical");var Xr=Object.defineProperty,Rt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Xr(t,e,n),n};const Mi=class Mi extends E{get value(){return this.label?ki(this.label):this.label}constructor(){super(),this.iconHidden=!1,this.labelHidden=!1,this.vertical=!1}render(){return b`
      <div class="parent" .title=${this.label??""}>
        ${this.img?b`<img .src=${this.img} .alt=${this.label||""} />`:null}
        ${!this.iconHidden&&this.icon?b`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        ${!this.labelHidden&&this.label?b`<label>${this.label}</label>`:null}
      </div>
    `}};Mi.styles=$`
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
  `;let J=Mi;Rt([d({type:String,reflect:!0})],J.prototype,"label");Rt([d({type:String,reflect:!0})],J.prototype,"img");Rt([d({type:Boolean,attribute:"label-hidden",reflect:!0})],J.prototype,"labelHidden");Rt([d({type:String,reflect:!0})],J.prototype,"icon");Rt([d({type:Boolean,attribute:"icon-hidden",reflect:!0})],J.prototype,"iconHidden");Rt([d({type:Boolean,reflect:!0})],J.prototype,"vertical");var Jr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,B=(i,t,e,s)=>{for(var n=s>1?void 0:s?Kr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Jr(t,e,n),n};const ji=class ji extends E{constructor(){if(super(),this._value=0,this._input=nt(),this.onValueChange=new Event("change"),this.vertical=!1,this.slider=!1,this.min&&this.max&&(this.min>this.max||this.max<this.min))throw new Error("bim-number-input min value can't be greater than max and max can't be lower than min.")}get value(){return this._value}set value(t){this.setValue(t.toString())}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const o=l=>{var v;n=!0;const{clientX:c}=l,u=this.step??1,h=((v=u.toString().split(".")[1])==null?void 0:v.length)||0,f=1/(this.sensitivity??1),p=(c-e)/f;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const m=s+p*u;this.setValue(m.toFixed(h))},r=()=>{this.slider=!0,this.removeEventListener("blur",r)},a=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",r),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=b`
      ${this.pref||this.icon?b`<bim-label
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
        @input=${a=>a.stopPropagation()}
        @change=${this.onChange}
        @blur=${this.onBlur}
        @focus=${this.onFocus}
        .value=${this.value.toString()}
      />
      ${this.sufix?b`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .label=${this.sufix}
          ></bim-label>`:null}
    `,e=this.min??-1/0,s=this.max??1/0,n=100*(this.value-e)/(s-e),o=b`
      <style>
        .slider-indicator {
          width: ${`${n}%`};
        }
      </style>
      <div class="slider" @mousedown=${this.onSliderMouseDown}>
        <div class="slider-indicator"></div>
        ${this.pref||this.icon?b`<bim-label
              style="z-index: 1; margin-right: 0.125rem"
              .label=${`${this.pref}: `}
              .icon=${this.icon}
            ></bim-label>`:null}
        <bim-label
          style="z-index: 1;"
          .label=${this.value.toString()}
        ></bim-label>
        ${this.sufix?b`<bim-label
              style="z-index: 1;"
              .label=${this.sufix}
            ></bim-label>`:null}
      </div>
    `,r=`${this.label||this.name||this.pref?`${this.label||this.name||this.pref}: `:""}${this.value}${this.sufix??""}`;return b`
      <bim-input
        title=${r}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        ${this.slider?o:t}
      </bim-input>
    `}};ji.styles=$`
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
  `;let z=ji;B([d({type:String,reflect:!0})],z.prototype,"name",2);B([d({type:String,reflect:!0})],z.prototype,"icon",2);B([d({type:String,reflect:!0})],z.prototype,"label",2);B([d({type:String,reflect:!0})],z.prototype,"pref",2);B([d({type:Number,reflect:!0})],z.prototype,"min",2);B([d({type:Number,reflect:!0})],z.prototype,"value",1);B([d({type:Number,reflect:!0})],z.prototype,"step",2);B([d({type:Number,reflect:!0})],z.prototype,"sensitivity",2);B([d({type:Number,reflect:!0})],z.prototype,"max",2);B([d({type:String,reflect:!0})],z.prototype,"sufix",2);B([d({type:Boolean,reflect:!0})],z.prototype,"vertical",2);B([d({type:Boolean,reflect:!0})],z.prototype,"slider",2);var Zr=Object.defineProperty,Pi=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Zr(t,e,n),n};const Oe=class Oe extends E{constructor(){super(),this.onValueChange=new Event("change"),this._hidden=!1,this.activationButton=document.createElement("bim-button"),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return ye(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,b`
      <div class="parent">
        ${this.label||this.name||this.icon?b`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};Oe.styles=[ut.scrollbar,$`
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

      /* :host(:not([hidden])) {
        display: none;
      } */

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
    `],Oe.properties={hidden:{type:Boolean,reflect:!0}};let H=Oe;Pi([d({type:String,reflect:!0})],H.prototype,"icon");Pi([d({type:String,reflect:!0})],H.prototype,"name");Pi([d({type:String,reflect:!0})],H.prototype,"label");var tl=Object.defineProperty,xs=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&tl(t,e,n),n};const Ni=class Ni extends E{constructor(){super(),this.onPanelHiddenChange=t=>{const e=t.target;if(e instanceof H&&!e.hidden)for(const s of this.children)!(s instanceof H)||s===e||(s.hidden=!0)},this.horizontal=!1,this.floating=!1}onSlotChange(t){const e=t.target.assignedElements(),s=e.find(n=>n instanceof H&&!n.hidden);for(const n of e)n instanceof H&&(s!==n&&(n.hidden=!0),n.removeEventListener("hiddenchange",this.onPanelHiddenChange),n.addEventListener("hiddenchange",this.onPanelHiddenChange))}render(){return b` <slot @slotchange=${this.onSlotChange}></slot> `}};Ni.styles=[ut.scrollbar,$`
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
        /* max-width: 100%; */
        flex-grow: 1;
      }
    `];let Jt=Ni;xs([d({type:Boolean,reflect:!0})],Jt.prototype,"horizontal");xs([d({type:Boolean,reflect:!0})],Jt.prototype,"floating");var el=Object.defineProperty,se=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&el(t,e,n),n};const Hi=class Hi extends E{constructor(){super(...arguments),this.onValueChange=new Event("change")}get value(){return ye(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=b`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,s=b`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=this.collapsed?e:s,o=b`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?b`<bim-label
              .label=${this.label||this.name}
              .icon=${this.icon}
            ></bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return b`
      <div class="parent">
        ${t?o:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};Hi.styles=[ut.scrollbar,$`
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
    `];let lt=Hi;se([d({type:String,reflect:!0})],lt.prototype,"icon");se([d({type:String,reflect:!0})],lt.prototype,"label");se([d({type:String,reflect:!0})],lt.prototype,"name");se([d({type:Boolean,reflect:!0})],lt.prototype,"fixed");se([d({type:Boolean,reflect:!0})],lt.prototype,"collapsed");var il=Object.defineProperty,Fe=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&il(t,e,n),n};const Pe=class Pe extends E{constructor(){super(),this.onValueChange=new Event("change"),this.onOptionClick=t=>{const e=t.target;this.value=e.value},this.vertical=!1}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this._options.find(s=>s.value===t);if(e){for(const s of this._options)s!==e&&(s.checked=!1);e.checked=!0,this._value=e.value,this.dispatchEvent(this.onValueChange)}else console.warn(`bim-selector: "${t}" doesn't correspond with any of the values in the options for this input, value remained as "${this.value}".`)}get value(){return this._value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof T&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}render(){return b`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};Pe.styles=$`
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
  `,Pe.properties={value:{attribute:!1}};let yt=Pe;Fe([d({type:String,reflect:!0})],yt.prototype,"name");Fe([d({type:String,reflect:!0})],yt.prototype,"icon");Fe([d({type:String,reflect:!0})],yt.prototype,"label");Fe([d({type:Boolean,reflect:!0})],yt.prototype,"vertical");const _=class _{static set config(t){this._config={..._._config,...t}}static get config(){return _._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=ut.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){_.addGlobalStyles(),_.defineCustomElement("bim-button",Lr),_.defineCustomElement("bim-checkbox",gt),_.defineCustomElement("bim-color-input",Q),_.defineCustomElement("bim-context-menu",ve),_.defineCustomElement("bim-dropdown",X),_.defineCustomElement("bim-grid",Gr),_.defineCustomElement("bim-icon",fi),_.defineCustomElement("bim-input",vt),_.defineCustomElement("bim-label",J),_.defineCustomElement("bim-number-input",z),_.defineCustomElement("bim-option",T),_.defineCustomElement("bim-panel",H),_.defineCustomElement("bim-panels-container",Jt),_.defineCustomElement("bim-panel-section",lt),_.defineCustomElement("bim-selector-input",yt),_.defineCustomElement("bim-table",at),_.defineCustomElement("bim-table-cell",_e),_.defineCustomElement("bim-table-children",we),_.defineCustomElement("bim-table-group",xe),_.defineCustomElement("bim-table-row",Pt),_.defineCustomElement("bim-text-input",pi),_.defineCustomElement("bim-toolbar",Ee),_.defineCustomElement("bim-toolbar-group",$e),_.defineCustomElement("bim-toolbar-section",Ce),_.defineCustomElement("bim-toolbars-container",bi),_.defineCustomElement("bim-viewport",Ae)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};_._config={sectionLabelOnVerticalToolbar:!1,multiPanels:!1,draggableToolbars:!0,draggablePanels:!0};let Ct=_;var nl=Object.defineProperty,sl=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&nl(t,e,n),n};const Di=class Di extends E{get value(){if(this.children.length===1){const s=this.children[0];return"value"in s?s.value:s.textContent}const e=[];for(const s of this.children){const n="value"in s?s.value:s.textContent;e.push(n)}return e}render(){return b`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};Di.styles=$`
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
  `;let _e=Di;sl([d({type:String,reflect:!0})],_e.prototype,"column");var ol=Object.defineProperty,rl=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&ol(t,e,n),n};const Vi=class Vi extends E{constructor(){super(...arguments),this._groups=[],this.table=this.closest("bim-table")}get value(){return new Promise(t=>{setTimeout(async()=>{const e=[];for(const s of this._groups)e.push(await s.value);t(e)})})}render(){var t;return this._groups=[],b`
      ${(t=this.groups)==null?void 0:t.map(e=>{const s=document.createElement("bim-table-group");return this._groups.push(s),s.group=e,s.table=this.table,s})}
    `}};Vi.styles=$`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }
  `;let we=Vi;rl([d({type:Array,attribute:!1})],we.prototype,"groups");var ll=Object.defineProperty,al=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&ll(t,e,n),n};const Te=class Te extends E{constructor(){super(),this._row=document.createElement("bim-table-row"),this._onChildrenExpanded=new Event("children-expanded"),this._onChildrenCollapsed=new Event("children-collapsed"),this.table=this.closest("bim-table"),this.onCaretClick=()=>{this.childrenHidden=!this.childrenHidden,this.childrenHidden?this.dispatchEvent(this._onChildrenCollapsed):this.dispatchEvent(this._onChildrenExpanded)},this.group={data:{}},this.childrenHidden=!1}get value(){return new Promise(t=>{setTimeout(async()=>{const e={data:{},id:this.group.id};e.data=await this._row.value,this._children&&(e.children=await this._children.value),t(e)})})}render(){var h;const t=((h=this.table)==null?void 0:h.getGroupIndentation(this.group))??0,e=b`
      <style>
        .branch-vertical {
          left: ${t+.5625}rem;
        }
      </style>
      <div class="branch branch-vertical"></div>
    `,s=document.createElement("div");s.classList.add("branch","branch-horizontal"),s.style.left=`${t-1+.5625}rem`;const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("height","9.5"),n.setAttribute("width","7.5"),n.setAttribute("viewBox","0 0 4.6666672 7.3333333");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),n.append(o);const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("height","6.5"),r.setAttribute("width","9.5"),r.setAttribute("viewBox","0 0 5.9111118 5.0175439");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),r.append(a);const l=document.createElement("div");l.addEventListener("click",this.onCaretClick),l.classList.add("caret"),l.style.left=`${.125+t}rem`,this.childrenHidden?l.append(n):l.append(r);const c=document.createElement("bim-table-row");c.data=this.group.data,this.group.onRowCreated&&this.group.onRowCreated(c),this._row=c,c.table=this.table,this.group.children&&c.append(l),t!==0&&(!this.group.children||this.childrenHidden)&&c.append(s);let u;return this.group.children&&(u=document.createElement("bim-table-children"),this.group.onChildrenCreated&&this.group.onChildrenCreated(u),this._children=u,u.hidden=this.childrenHidden,u.groups=this.group.children,u.table=this.table),b`
      <div class="parent">
        ${this.group.children&&!this.childrenHidden?e:null}
        ${c} ${u}
      </div>
    `}};Te.styles=$`
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
  `,Te.properties={childrenHidden:{type:Boolean,attribute:"children-hidden",reflect:!0}};let xe=Te;al([d({type:Object,attribute:!1})],xe.prototype,"group");var cl=Object.defineProperty,Ti=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&cl(t,e,n),n};const Ui=class Ui extends E{constructor(){super(),this._table=this.closest("bim-table"),this._cells=[],this.onTableIndentationColorChange=t=>{var r;if(!this.table)return;const e=t.detail,{indentationLevel:s,color:n}=e;((r=this.table)==null?void 0:r.getRowIndentation(this.data))===s&&(this.style.backgroundColor=n)},this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.columns=[],this.data={},this.isHeader=!1}get _columnNames(){return this.columns.map(e=>e.name)}get _columnWidths(){return this.columns.map(e=>e.width)}set table(t){this._table&&(this.columns=[],this._table.removeEventListener("columns-change",this.onTableColumnsChange)),this._table=t,this._table&&(this.columns=this._table.columns,this._table.addEventListener("columns-change",this.onTableColumnsChange),this._table.addEventListener("indentation",this.onTableIndentationColorChange))}get table(){return this._table}get value(){return new Promise(t=>{setTimeout(()=>{const e={};for(const s of this._cells)s.column&&(e[s.column]=s.value);t(e)})})}render(){var s;const t=((s=this.table)==null?void 0:s.getRowIndentation(this.data))??0,e=[];for(const n in this.data){const o=this.data[n];let r;typeof o=="function"?r=o(this.data):o instanceof HTMLElement?r=o:r=b`<bim-label label="${o}"></bim-label>`;const a=this._columnNames.indexOf(n)===0,l=`
        ${a&&!this.isHeader?"justify-content: normal":""};
        ${a&&!this.isHeader?`margin-left: ${t+.125}rem`:""}
      `;this._cells=[];const u=b`
        <bim-table-cell ${q(h=>{if(!h)return;const f=h;this._cells.push(f)})} style="${l}" .column=${n}
          >${r}</bim-table-cell
        >
      `;e.push(u)}return b`
      <style>
        :host {
          grid-template-areas: "${this._columnNames.join(" ")}";
          grid-template-columns: ${this._columnWidths.join(" ")};
        }
      </style>
      ${e}
      <slot></slot>
    `}};Ui.styles=$`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
      /* border-bottom: 1px solid var(--bim-ui_bg-contrast-20); */
    }
  `;let Pt=Ui;Ti([d({type:Array,attribute:!1})],Pt.prototype,"columns");Ti([d({type:Object,attribute:!1})],Pt.prototype,"data");Ti([d({type:Boolean,attribute:"is-header",reflect:!0})],Pt.prototype,"isHeader");var ul=Object.defineProperty,hl=Object.getOwnPropertyDescriptor,oe=(i,t,e,s)=>{for(var n=s>1?void 0:s?hl(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&ul(t,e,n),n};const Fi=class Fi extends E{constructor(){super(),this._children=document.createElement("bim-table-children"),this._columnsChange=new Event("columns-change"),this._filteredRows=[],this._rows=[],this._columns=[],this.minColWidth="4rem",this.headersHidden=!1}set rows(t){for(const s of t)this.assignGroupDeclarationID(s);this._rows=t,this._filteredRows=t,this.computeMissingColumns(t)&&(this.columns=this._columns)}get rows(){return this._filteredRows}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.rows),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:s}=e;t[s]=s}return t}get value(){return new Promise(t=>{setTimeout(async()=>{t(await this._children.value)})})}assignGroupDeclarationID(t){t.id||(t.id=Ct.newRandomId()),t.children&&t.children.forEach(e=>this.assignGroupDeclarationID(e))}getGroupDeclarationById(t,e=this._rows){for(const s of e){if(s.id===t)return s;if(s.children){const n=this.getGroupDeclarationById(t,s.children);if(n)return n}}}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:o}=s;for(const r in o)this._columns.map(l=>typeof l=="string"?l:l.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const r=this.computeMissingColumns(n);r&&!e&&(e=r)}}return e}async downloadData(t="BIM Table Data"){const e=await this.value,s=new File([JSON.stringify(e,void 0,2)],`${t}.json`),n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.rows,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const o=this.getRowIndentation(t,n.children,s+1);if(o!==null)return o}}return null}getGroupIndentation(t,e=this.rows,s=0){for(const n of e){if(n===t)return s;if(n.children){const o=this.getGroupIndentation(t,n.children,s+1);if(o!==null)return o}}return null}setIndentationColor(t,e){const s=new CustomEvent("indentation",{detail:{indentationLevel:t,color:e}});this.dispatchEvent(s)}async filterRowsByValue(t,e=!1,s){const n=[],o=s??await this.value;for(const r of o){const a=Object.values(r.data).some(c=>Array.isArray(c)?c.includes(t):String(c)===t),l=this.getGroupDeclarationById(r.id);if(!l)return n;if(a){if(e){const c={data:l.data};if(r.children){const u=await this.filterRowsByValue(t,!0,r.children);u.length&&(c.children=u)}n.push(c)}else if(n.push({data:l.data}),r.children){const c=await this.filterRowsByValue(t,!1,r.children);n.push(...c)}}else if(r.children){const c=await this.filterRowsByValue(t,e,r.children);e&&c.length?n.push({data:l.data,children:c}):n.push(...c)}}return n}render(){const t=document.createElement("bim-table-row");t.isHeader=!0,t.data=this._headerRowData,t.table=this,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return this._children=e,e.groups=this._filteredRows,e.table=this,e.style.gridArea="Body",e.style.backgroundColor="transparent",b`
      <div class="parent">
        ${this.headersHidden?null:t}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};Fi.styles=[ut.scrollbar,$`
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
    `];let at=Fi;oe([xo()],at.prototype,"_filteredRows",2);oe([d({type:Boolean,attribute:"headers-hidden",reflect:!0})],at.prototype,"headersHidden",2);oe([d({type:String,attribute:"min-col-width",reflect:!0})],at.prototype,"minColWidth",2);oe([d({type:Array,attribute:!1})],at.prototype,"rows",1);oe([d({type:Array,attribute:!1})],at.prototype,"columns",1);const ze=class ze extends E{constructor(){super(),this.onValueChange=new Event("input"),this.value="",this.placeholder="",this.vertical=!1}onInputChange(t){t.stopPropagation();const e=t.target;this.value=e.value,this.dispatchEvent(this.onValueChange)}render(){return b`
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
    `}};ze.styles=$`
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
  `,ze.properties={icon:{type:String,reflect:!0},label:{type:String,reflect:!0},name:{type:String,reflect:!0},placeholder:{type:String,reflect:!0},value:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0}};let pi=ze;const Ie=class Ie extends E{constructor(){super(),this._vertical=!1,this.rows=2,this.vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return b`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};Ie.styles=$`
    .parent {
      display: grid;
      gap: 0.25rem;
    }

    ::slotted(bim-button[label]:not([vertical])) {
      --bim-button--jc: flex-start;
    }
  `,Ie.properties={rows:{type:Number,reflect:!0},vertical:{type:Boolean,reflect:!0}};let $e=Ie;const Re=class Re extends E{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof $e&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}connectedCallback(){super.connectedCallback()}render(){return b`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?b`<bim-label
              .label=${this.label}
              .icon=${this.icon}
            ></bim-label>`:null}
      </div>
    `}};Re.styles=$`
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
  `,Re.properties={label:{type:String,reflect:!0},icon:{type:String,reflect:!0},vertical:{type:Boolean,reflect:!0},labelHidden:{type:Boolean,attribute:"label-hidden",reflect:!0}};let Ce=Re;const Ut=class Ut extends E{constructor(){super(),this._managerID=Ct.newRandomId(),this._active=!1,this._vertical=!1,this._gridArea="",this.activationButton=document.createElement("bim-button"),this.setActivationButton()}set active(t){var e;if(this._active=t,this.activationButton.active=t,t){const s=((e=this.parentElement)==null?void 0:e.children)??[];for(const n of s)n instanceof Ut&&n!==this&&(n.active=!1)}}get active(){return this._active}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}get gridArea(){return this._gridArea}set gridArea(t){this._gridArea=t,this.style.gridArea=`toolbar-${t}`}setActivationButton(){this.activationButton.draggable=Ct.config.draggableToolbars,this.activationButton.addEventListener("click",()=>this.active=!this.active),this.activationButton.setAttribute("data-ui-manager-id",this._managerID),this.activationButton.addEventListener("dragstart",t=>{const e=this.getAttribute("data-ui-manager-id");t.dataTransfer&&e&&(t.dataTransfer.setData("id",e),t.dataTransfer.effectAllowed="move");const s=document.querySelectorAll("bim-toolbars-container");for(const n of s)n!==this.parentElement&&(n.dropping=!0)}),this.activationButton.addEventListener("dragend",t=>{t.dataTransfer&&t.dataTransfer.clearData();const e=document.querySelectorAll("bim-toolbars-container");for(const s of e)s.dropping=!1})}updateSections(){const t=this.children;for(const e of t)e instanceof Ce&&(e.labelHidden=this.vertical&&!Ct.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}firstUpdated(){this.setAttribute("data-ui-manager-id",this._managerID)}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}render(){return this.activationButton.label=this.label,this.activationButton.active=this.active,this.activationButton.icon=this.icon,b`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};Ut.styles=$`
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
  `,Ut.properties={label:{type:String,reflect:!0},icon:{type:String,reflect:!0},labelsHidden:{type:Boolean,attribute:"labels-hidden",reflect:!0},vertical:{type:Boolean,reflect:!0},gridArea:{type:String,attribute:!1},active:{type:Boolean,reflect:!0}};let Ee=Ut;const Le=class Le extends E{constructor(){super(),this._vertical=!1,this._activationButtons=[],this.onDragOver=t=>{t.preventDefault(),t.dataTransfer&&(t.dataTransfer.effectAllowed="move")},this.onDrop=t=>{var o;t.preventDefault();const e=(o=t.dataTransfer)==null?void 0:o.getData("id");if(!e)return;const s=document.querySelector(`bim-toolbar[data-ui-manager-id='${e}']`);!s||[...this.children].includes(s)||this.append(s)},this.addEventListener("dragover",this.onDragOver),this.addEventListener("drop",this.onDrop)}set vertical(t){this._vertical=t,this.updateToolbars()}get vertical(){return this._vertical}updateToolbars(){let t=!1;for(const e of this.children)e instanceof Ee&&(t?e.active=!1:t=e.active,this._activationButtons.push(e.activationButton),e.vertical=this.vertical);this.requestUpdate()}render(){const t=b`<div class="tabs">
      ${this._activationButtons}
    </div>`,e=b`<bim-button style="flex-grow: 0;"
      >${this._activationButtons}</bim-button
    >`,s=b`<div class="drop-element"></div>`;return b`
      <div class="parent">
        ${this.vertical?null:t}
        ${this.vertical?e:null}
        ${this.dropping?s:b`
              <div class="toolbars">
                <slot @slotchange=${this.updateToolbars}></slot>
              </div>
            `}
      </div>
    `}};Le.styles=[ut.scrollbar,$`
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
    `],Le.properties={floating:{type:Boolean,reflect:!0},vertical:{type:Boolean,reflect:!0},gridArea:{type:String,attribute:!1},tabsHidden:{type:Boolean,attribute:"tabs-hidden",reflect:!0},dropping:{type:Boolean,reflect:!0}};let bi=Le;var dl=Object.defineProperty,fl=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&dl(t,e,n),n};const Wi=class Wi extends E{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>this.dispatchEvent(this._onResize)).observe(this)}firstUpdated(){this.style.gridArea===""&&this.name&&(this.style.gridArea=this.name)}render(){return b`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Wi.styles=$`
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
  `;let Ae=Wi;fl([d({type:String,reflect:!0})],Ae.prototype,"name");export{E as C,Ct as M,q as n,b as x};
