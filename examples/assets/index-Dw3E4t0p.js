var Un=Object.defineProperty;var Yn=(i,t,e)=>t in i?Un(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var rt=(i,t,e)=>(Yn(i,typeof t!="symbol"?t+"":t,e),e);import{h as E,i as C,n as u,r as It}from"./state-PLJivh1p.js";import{D as Pe,k as p,Q as Nt}from"./lit-html-DcU_S_gY.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gn=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Kn=i=>(...t)=>({_$litDirective$:i,values:t});class Jn{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const n of e)(s=n._$AO)==null||s.call(n,t,!1),Mt(n,t);return!0},re=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},Ji=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),es(t)}};function Zn(i){this._$AN!==void 0?(re(this),this._$AM=i,Ji(this)):this._$AM=i}function ts(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=e;r<s.length;r++)Mt(s[r],!1),re(s[r]);else s!=null&&(Mt(s,!1),re(s));else Mt(this,i)}const es=i=>{i.type==Xn.CHILD&&(i._$AP??(i._$AP=ts),i._$AQ??(i._$AQ=Zn))};class is extends Jn{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Ji(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(n=this.disconnected)==null||n.call(this)),e&&(Mt(this,t),re(this))}setValue(t){if(Gn(this.t))this.t._$AI(t,this);else{const e=[...this.t._$AH];e[this.i]=t,this.t._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=()=>new ns;class ns{}const Se=new WeakMap,St=Kn(class extends is{render(i){return Pe}update(i,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),Pe}rt(i){if(this.isConnected||(i=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let e=Se.get(t);e===void 0&&(e=new WeakMap,Se.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Se.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),kt=Math.min,G=Math.max,oe=Math.round,ot=i=>({x:i,y:i}),ss={left:"right",right:"left",bottom:"top",top:"bottom"},rs={start:"end",end:"start"};function Si(i,t,e){return G(i,kt(t,e))}function Ut(i,t){return typeof i=="function"?i(t):i}function X(i){return i.split("-")[0]}function ge(i){return i.split("-")[1]}function Zi(i){return i==="x"?"y":"x"}function tn(i){return i==="y"?"height":"width"}function yt(i){return["top","bottom"].includes(X(i))?"y":"x"}function en(i){return Zi(yt(i))}function os(i,t,e){e===void 0&&(e=!1);const s=ge(i),n=en(i),r=tn(n);let o=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=le(o)),[o,le(o)]}function ls(i){const t=le(i);return[Ie(i),t,Ie(t)]}function Ie(i){return i.replace(/start|end/g,t=>rs[t])}function as(i,t,e){const s=["left","right"],n=["right","left"],r=["top","bottom"],o=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?r:o;default:return[]}}function cs(i,t,e,s){const n=ge(i);let r=as(X(i),e==="start",s);return n&&(r=r.map(o=>o+"-"+n),t&&(r=r.concat(r.map(Ie)))),r}function le(i){return i.replace(/left|right|bottom|top/g,t=>ss[t])}function us(i){return{top:0,right:0,bottom:0,left:0,...i}}function nn(i){return typeof i!="number"?us(i):{top:i,right:i,bottom:i,left:i}}function Ot(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function ki(i,t,e){let{reference:s,floating:n}=i;const r=yt(t),o=en(t),l=tn(o),a=X(t),c=r==="y",d=s.x+s.width/2-n.width/2,h=s.y+s.height/2-n.height/2,f=s[l]/2-n[l]/2;let m;switch(a){case"top":m={x:d,y:s.y-n.height};break;case"bottom":m={x:d,y:s.y+s.height};break;case"right":m={x:s.x+s.width,y:h};break;case"left":m={x:s.x-n.width,y:h};break;default:m={x:s.x,y:s.y}}switch(ge(t)){case"start":m[o]-=f*(e&&c?-1:1);break;case"end":m[o]+=f*(e&&c?-1:1);break}return m}const ds=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:r=[],platform:o}=e,l=r.filter(Boolean),a=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:i,floating:t,strategy:n}),{x:d,y:h}=ki(c,s,a),f=s,m={},b=0;for(let v=0;v<l.length;v++){const{name:g,fn:S}=l[v],{x:$,y:_,data:w,reset:O}=await S({x:d,y:h,initialPlacement:s,placement:f,strategy:n,middlewareData:m,rects:c,platform:o,elements:{reference:i,floating:t}});d=$??d,h=_??h,m={...m,[g]:{...m[g],...w}},O&&b<=50&&(b++,typeof O=="object"&&(O.placement&&(f=O.placement),O.rects&&(c=O.rects===!0?await o.getElementRects({reference:i,floating:t,strategy:n}):O.rects),{x:d,y:h}=ki(c,f,a)),v=-1)}return{x:d,y:h,placement:f,strategy:n,middlewareData:m}};async function sn(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:r,rects:o,elements:l,strategy:a}=i,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=Ut(t,i),b=nn(m),g=l[f?h==="floating"?"reference":"floating":h],S=Ot(await r.getClippingRect({element:(e=await(r.isElement==null?void 0:r.isElement(g)))==null||e?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),$=h==="floating"?{x:s,y:n,width:o.floating.width,height:o.floating.height}:o.reference,_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),w=await(r.isElement==null?void 0:r.isElement(_))?await(r.getScale==null?void 0:r.getScale(_))||{x:1,y:1}:{x:1,y:1},O=Ot(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:$,offsetParent:_,strategy:a}):$);return{top:(S.top-O.top+b.top)/w.y,bottom:(O.bottom-S.bottom+b.bottom)/w.y,left:(S.left-O.left+b.left)/w.x,right:(O.right-S.right+b.right)/w.x}}const hs=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:r,rects:o,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...g}=Ut(i,t);if((e=r.arrow)!=null&&e.alignmentOffset)return{};const S=X(n),$=yt(l),_=X(l)===l,w=await(a.isRTL==null?void 0:a.isRTL(c.floating)),O=f||(_||!v?[le(l)]:ls(l)),x=b!=="none";!f&&x&&O.push(...cs(l,v,b,w));const P=[l,...O],F=await sn(t,g),N=[];let k=((s=r.flip)==null?void 0:s.overflows)||[];if(d&&N.push(F[S]),h){const W=os(n,o,w);N.push(F[W[0]],F[W[1]])}if(k=[...k,{placement:n,overflows:N}],!N.every(W=>W<=0)){var _t,Bt;const W=(((_t=r.flip)==null?void 0:_t.index)||0)+1,Ct=P[W];if(Ct)return{data:{index:W,overflows:k},reset:{placement:Ct}};let it=(Bt=k.filter(nt=>nt.overflows[0]<=0).sort((nt,Q)=>nt.overflows[1]-Q.overflows[1])[0])==null?void 0:Bt.placement;if(!it)switch(m){case"bestFit":{var wt;const nt=(wt=k.filter(Q=>{if(x){const st=yt(Q.placement);return st===$||st==="y"}return!0}).map(Q=>[Q.placement,Q.overflows.filter(st=>st>0).reduce((st,Qn)=>st+Qn,0)]).sort((Q,st)=>Q[1]-st[1])[0])==null?void 0:wt[0];nt&&(it=nt);break}case"initialPlacement":it=l;break}if(n!==it)return{reset:{placement:it}}}return{}}}};function rn(i){const t=kt(...i.map(r=>r.left)),e=kt(...i.map(r=>r.top)),s=G(...i.map(r=>r.right)),n=G(...i.map(r=>r.bottom));return{x:t,y:e,width:s-t,height:n-e}}function fs(i){const t=i.slice().sort((n,r)=>n.y-r.y),e=[];let s=null;for(let n=0;n<t.length;n++){const r=t[n];!s||r.y-s.y>s.height/2?e.push([r]):e[e.length-1].push(r),s=r}return e.map(n=>Ot(rn(n)))}const ps=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:r,strategy:o}=t,{padding:l=2,x:a,y:c}=Ut(i,t),d=Array.from(await(r.getClientRects==null?void 0:r.getClientRects(s.reference))||[]),h=fs(d),f=Ot(rn(d)),m=nn(l);function b(){if(h.length===2&&h[0].left>h[1].right&&a!=null&&c!=null)return h.find(g=>a>g.left-m.left&&a<g.right+m.right&&c>g.top-m.top&&c<g.bottom+m.bottom)||f;if(h.length>=2){if(yt(e)==="y"){const k=h[0],_t=h[h.length-1],Bt=X(e)==="top",wt=k.top,W=_t.bottom,Ct=Bt?k.left:_t.left,it=Bt?k.right:_t.right,nt=it-Ct,Q=W-wt;return{top:wt,bottom:W,left:Ct,right:it,width:nt,height:Q,x:Ct,y:wt}}const g=X(e)==="left",S=G(...h.map(k=>k.right)),$=kt(...h.map(k=>k.left)),_=h.filter(k=>g?k.left===$:k.right===S),w=_[0].top,O=_[_.length-1].bottom,x=$,P=S,F=P-x,N=O-w;return{top:w,bottom:O,left:x,right:P,width:F,height:N,x,y:w}}return f}const v=await r.getElementRects({reference:{getBoundingClientRect:b},floating:s.floating,strategy:o});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function ms(i,t){const{placement:e,platform:s,elements:n}=i,r=await(s.isRTL==null?void 0:s.isRTL(n.floating)),o=X(e),l=ge(e),a=yt(e)==="y",c=["left","top"].includes(o)?-1:1,d=r&&a?-1:1,h=Ut(t,i);let{mainAxis:f,crossAxis:m,alignmentAxis:b}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...h};return l&&typeof b=="number"&&(m=l==="end"?b*-1:b),a?{x:m*d,y:f*c}:{x:f*c,y:m*d}}const on=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:r,placement:o,middlewareData:l}=t,a=await ms(t,i);return o===((e=l.offset)==null?void 0:e.placement)&&(s=l.arrow)!=null&&s.alignmentOffset?{}:{x:n+a.x,y:r+a.y,data:{...a,placement:o}}}}},bs=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:l={fn:g=>{let{x:S,y:$}=g;return{x:S,y:$}}},...a}=Ut(i,t),c={x:e,y:s},d=await sn(t,a),h=yt(X(n)),f=Zi(h);let m=c[f],b=c[h];if(r){const g=f==="y"?"top":"left",S=f==="y"?"bottom":"right",$=m+d[g],_=m-d[S];m=Si($,m,_)}if(o){const g=h==="y"?"top":"left",S=h==="y"?"bottom":"right",$=b+d[g],_=b-d[S];b=Si($,b,_)}const v=l.fn({...t,[f]:m,[h]:b});return{...v,data:{x:v.x-e,y:v.y-s}}}}};function lt(i){return ln(i)?(i.nodeName||"").toLowerCase():"#document"}function B(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function pt(i){var t;return(t=(ln(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function ln(i){return i instanceof Node||i instanceof B(i).Node}function U(i){return i instanceof Element||i instanceof B(i).Element}function Y(i){return i instanceof HTMLElement||i instanceof B(i).HTMLElement}function Oi(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof B(i).ShadowRoot}function Yt(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=R(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function gs(i){return["table","td","th"].includes(lt(i))}function vs(i){return[":popover-open",":modal"].some(t=>{try{return i.matches(t)}catch{return!1}})}function Qe(i){const t=Ue(),e=U(i)?R(i):i;return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function ys(i){let t=At(i);for(;Y(t)&&!ve(t);){if(Qe(t))return t;if(vs(t))return null;t=At(t)}return null}function Ue(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ve(i){return["html","body","#document"].includes(lt(i))}function R(i){return B(i).getComputedStyle(i)}function ye(i){return U(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.scrollX,scrollTop:i.scrollY}}function At(i){if(lt(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Oi(i)&&i.host||pt(i);return Oi(t)?t.host:t}function an(i){const t=At(i);return ve(t)?i.ownerDocument?i.ownerDocument.body:i.body:Y(t)&&Yt(t)?t:an(t)}function Le(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=an(i),r=n===((s=i.ownerDocument)==null?void 0:s.body),o=B(n);if(r){const l=xs(o);return t.concat(o,o.visualViewport||[],Yt(n)?n:[],l&&e?Le(l):[])}return t.concat(n,Le(n,[],e))}function xs(i){return i.parent&&Object.getPrototypeOf(i.parent)?i.frameElement:null}function cn(i){const t=R(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=Y(i),r=n?i.offsetWidth:e,o=n?i.offsetHeight:s,l=oe(e)!==r||oe(s)!==o;return l&&(e=r,s=o),{width:e,height:s,$:l}}function un(i){return U(i)?i:i.contextElement}function $t(i){const t=un(i);if(!Y(t))return ot(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:r}=cn(t);let o=(r?oe(e.width):e.width)/s,l=(r?oe(e.height):e.height)/n;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const _s=ot(0);function dn(i){const t=B(i);return!Ue()||!t.visualViewport?_s:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ws(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==B(i)?!1:t}function Ht(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),r=un(i);let o=ot(1);t&&(s?U(s)&&(o=$t(s)):o=$t(i));const l=ws(r,e,s)?dn(r):ot(0);let a=(n.left+l.x)/o.x,c=(n.top+l.y)/o.y,d=n.width/o.x,h=n.height/o.y;if(r){const f=B(r),m=s&&U(s)?B(s):s;let b=f,v=b.frameElement;for(;v&&s&&m!==b;){const g=$t(v),S=v.getBoundingClientRect(),$=R(v),_=S.left+(v.clientLeft+parseFloat($.paddingLeft))*g.x,w=S.top+(v.clientTop+parseFloat($.paddingTop))*g.y;a*=g.x,c*=g.y,d*=g.x,h*=g.y,a+=_,c+=w,b=B(v),v=b.frameElement}}return Ot({width:d,height:h,x:a,y:c})}const Cs=[":popover-open",":modal"];function hn(i){return Cs.some(t=>{try{return i.matches(t)}catch{return!1}})}function $s(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const r=n==="fixed",o=pt(s),l=t?hn(t.floating):!1;if(s===o||l&&r)return e;let a={scrollLeft:0,scrollTop:0},c=ot(1);const d=ot(0),h=Y(s);if((h||!h&&!r)&&((lt(s)!=="body"||Yt(o))&&(a=ye(s)),Y(s))){const f=Ht(s);c=$t(s),d.x=f.x+s.clientLeft,d.y=f.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-a.scrollLeft*c.x+d.x,y:e.y*c.y-a.scrollTop*c.y+d.y}}function Es(i){return Array.from(i.getClientRects())}function fn(i){return Ht(pt(i)).left+ye(i).scrollLeft}function Ss(i){const t=pt(i),e=ye(i),s=i.ownerDocument.body,n=G(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),r=G(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let o=-e.scrollLeft+fn(i);const l=-e.scrollTop;return R(s).direction==="rtl"&&(o+=G(t.clientWidth,s.clientWidth)-n),{width:n,height:r,x:o,y:l}}function ks(i,t){const e=B(i),s=pt(i),n=e.visualViewport;let r=s.clientWidth,o=s.clientHeight,l=0,a=0;if(n){r=n.width,o=n.height;const c=Ue();(!c||c&&t==="fixed")&&(l=n.offsetLeft,a=n.offsetTop)}return{width:r,height:o,x:l,y:a}}function Os(i,t){const e=Ht(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,r=Y(i)?$t(i):ot(1),o=i.clientWidth*r.x,l=i.clientHeight*r.y,a=n*r.x,c=s*r.y;return{width:o,height:l,x:a,y:c}}function Ai(i,t,e){let s;if(t==="viewport")s=ks(i,e);else if(t==="document")s=Ss(pt(i));else if(U(t))s=Os(t,e);else{const n=dn(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return Ot(s)}function pn(i,t){const e=At(i);return e===t||!U(e)||ve(e)?!1:R(e).position==="fixed"||pn(e,t)}function As(i,t){const e=t.get(i);if(e)return e;let s=Le(i,[],!1).filter(l=>U(l)&&lt(l)!=="body"),n=null;const r=R(i).position==="fixed";let o=r?At(i):i;for(;U(o)&&!ve(o);){const l=R(o),a=Qe(o);!a&&l.position==="fixed"&&(n=null),(r?!a&&!n:!a&&l.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Yt(o)&&!a&&pn(i,o))?s=s.filter(d=>d!==o):n=l,o=At(o)}return t.set(i,s),s}function Ts(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const o=[...e==="clippingAncestors"?As(t,this._c):[].concat(e),s],l=o[0],a=o.reduce((c,d)=>{const h=Ai(t,d,n);return c.top=G(h.top,c.top),c.right=kt(h.right,c.right),c.bottom=kt(h.bottom,c.bottom),c.left=G(h.left,c.left),c},Ai(t,l,n));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Ps(i){const{width:t,height:e}=cn(i);return{width:t,height:e}}function Is(i,t,e){const s=Y(t),n=pt(t),r=e==="fixed",o=Ht(i,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=ot(0);if(s||!s&&!r)if((lt(t)!=="body"||Yt(n))&&(l=ye(t)),s){const h=Ht(t,!0,r,t);a.x=h.x+t.clientLeft,a.y=h.y+t.clientTop}else n&&(a.x=fn(n));const c=o.left+l.scrollLeft-a.x,d=o.top+l.scrollTop-a.y;return{x:c,y:d,width:o.width,height:o.height}}function Ti(i,t){return!Y(i)||R(i).position==="fixed"?null:t?t(i):i.offsetParent}function mn(i,t){const e=B(i);if(!Y(i)||hn(i))return e;let s=Ti(i,t);for(;s&&gs(s)&&R(s).position==="static";)s=Ti(s,t);return s&&(lt(s)==="html"||lt(s)==="body"&&R(s).position==="static"&&!Qe(s))?e:s||ys(i)||e}const Ls=async function(i){const t=this.getOffsetParent||mn,e=this.getDimensions;return{reference:Is(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function zs(i){return R(i).direction==="rtl"}const js={convertOffsetParentRelativeRectToViewportRelativeRect:$s,getDocumentElement:pt,getClippingRect:Ts,getOffsetParent:mn,getElementRects:Ls,getClientRects:Es,getDimensions:Ps,getScale:$t,isElement:U,isRTL:zs},bn=bs,gn=hs,vn=ps,yn=(i,t,e)=>{const s=new Map,n={platform:js,...e},r={...n.platform,_c:s};return ds(i,t,{...n,platform:r})};/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const xn=Object.freeze({left:0,top:0,width:16,height:16}),ae=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Gt=Object.freeze({...xn,...ae}),ze=Object.freeze({...Gt,body:"",hidden:!1}),Bs=Object.freeze({width:null,height:null}),_n=Object.freeze({...Bs,...ae});function Rs(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let r=parseFloat(i.slice(0,i.length-e.length));return isNaN(r)?0:(r=r/n,r%1===0?s(r):0)}}return t}const Ms=/[\s,]+/;function Ds(i,t){t.split(Ms).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const wn={..._n,preserveAspectRatio:""};function Pi(i){const t={...wn},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Rs(e("rotate","")),Ds(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function Fs(i,t){for(const e in wn)if(i[e]!==t[e])return!0;return!1}const Dt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xt=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:s,prefix:a,name:l};return t&&!ne(c)?null:c}const r=n[0],o=r.split("-");if(o.length>1){const l={provider:s,prefix:o.shift(),name:o.join("-")};return t&&!ne(l)?null:l}if(e&&s===""){const l={provider:s,prefix:"",name:r};return t&&!ne(l,e)?null:l}return null},ne=(i,t)=>i?!!((i.provider===""||i.provider.match(Dt))&&(t&&i.prefix===""||i.prefix.match(Dt))&&i.name.match(Dt)):!1;function Ns(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Ii(i,t){const e=Ns(i,t);for(const s in ze)s in ae?s in i&&!(s in e)&&(e[s]=ae[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function Hs(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function r(o){if(e[o])return n[o]=[];if(!(o in n)){n[o]=null;const l=s[o]&&s[o].parent,a=l&&r(l);a&&(n[o]=[l].concat(a))}return n[o]}return Object.keys(e).concat(Object.keys(s)).forEach(r),n}function Vs(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let r={};function o(l){r=Ii(s[l]||n[l],r)}return o(t),e.forEach(o),Ii(i,r)}function Cn(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=Hs(i);for(const n in s){const r=s[n];r&&(t(n,Vs(i,n,r)),e.push(n))}return e}const qs={provider:"",aliases:{},not_found:{},...xn};function ke(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function $n(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!ke(i,qs))return null;const e=t.icons;for(const n in e){const r=e[n];if(!n.match(Dt)||typeof r.body!="string"||!ke(r,ze))return null}const s=t.aliases||Object.create(null);for(const n in s){const r=s[n],o=r.parent;if(!n.match(Dt)||typeof o!="string"||!e[o]&&!s[o]||!ke(r,ze))return null}return t}const ce=Object.create(null);function Ws(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function at(i,t){const e=ce[i]||(ce[i]=Object.create(null));return e[t]||(e[t]=Ws(i,t))}function Ye(i,t){return $n(t)?Cn(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Qs(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Us(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(ce)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(ce[n]||{})).forEach(o=>{const l=at(n,o);e=e.concat(Object.keys(l.icons).map(a=>(n!==""?"@"+n+":":"")+o+":"+a))})}),e}let Vt=!1;function En(i){return typeof i=="boolean"&&(Vt=i),Vt}function qt(i){const t=typeof i=="string"?Xt(i,!0,Vt):i;if(t){const e=at(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function Sn(i,t){const e=Xt(i,!0,Vt);if(!e)return!1;const s=at(e.provider,e.prefix);return Qs(s,e.name,t)}function Li(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Vt&&!t&&!i.prefix){let n=!1;return $n(i)&&(i.prefix="",Cn(i,(r,o)=>{o&&Sn(r,o)&&(n=!0)})),n}const e=i.prefix;if(!ne({provider:t,prefix:e,name:"a"}))return!1;const s=at(t,e);return!!Ye(s,i)}function zi(i){return!!qt(i)}function Ys(i){const t=qt(i);return t?{...Gt,...t}:null}function Gs(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,r)=>n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const r=n.provider,o=n.prefix,l=n.name,a=e[r]||(e[r]=Object.create(null)),c=a[o]||(a[o]=at(r,o));let d;l in c.icons?d=t.loaded:o===""||c.missing.has(l)?d=t.missing:d=t.pending;const h={provider:r,prefix:o,name:l};d.push(h)}),t}function kn(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function Xs(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(r=>{const o=r.icons,l=o.pending.length;o.pending=o.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(i.icons[c])o.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))o.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),o.pending.length!==l&&(e||kn([i],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let Ks=0;function Js(i,t,e){const s=Ks++,n=kn.bind(null,e,s);if(!t.pending.length)return n;const r={id:s,icons:t,callback:i,abort:n};return e.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),n}const je=Object.create(null);function ji(i,t){je[i]=t}function Be(i){return je[i]||je[""]}function Zs(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const r=typeof n=="string"?Xt(n,t,e):n;r&&s.push(r)}),s}var tr={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function er(i,t,e,s){const n=i.resources.length,r=i.random?Math.floor(Math.random()*n):i.index;let o;if(i.random){let x=i.resources.slice(0);for(o=[];x.length>1;){const P=Math.floor(Math.random()*x.length);o.push(x[P]),x=x.slice(0,P).concat(x.slice(P+1))}o=o.concat(x)}else o=i.resources.slice(r).concat(i.resources.slice(0,r));const l=Date.now();let a="pending",c=0,d,h=null,f=[],m=[];typeof s=="function"&&m.push(s);function b(){h&&(clearTimeout(h),h=null)}function v(){a==="pending"&&(a="aborted"),b(),f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function g(x,P){P&&(m=[]),typeof x=="function"&&m.push(x)}function S(){return{startTime:l,payload:t,status:a,queriesSent:c,queriesPending:f.length,subscribe:g,abort:v}}function $(){a="failed",m.forEach(x=>{x(void 0,d)})}function _(){f.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),f=[]}function w(x,P,F){const N=P!=="success";switch(f=f.filter(k=>k!==x),a){case"pending":break;case"failed":if(N||!i.dataAfterTimeout)return;break;default:return}if(P==="abort"){d=F,$();return}if(N){d=F,f.length||(o.length?O():$());return}if(b(),_(),!i.random){const k=i.resources.indexOf(x.resource);k!==-1&&k!==i.index&&(i.index=k)}a="completed",m.forEach(k=>{k(F)})}function O(){if(a!=="pending")return;b();const x=o.shift();if(x===void 0){if(f.length){h=setTimeout(()=>{b(),a==="pending"&&(_(),$())},i.timeout);return}$();return}const P={status:"pending",resource:x,callback:(F,N)=>{w(P,F,N)}};f.push(P),c++,h=setTimeout(O,i.rotate),e(x,t,P.callback)}return setTimeout(O),S}function On(i){const t={...tr,...i};let e=[];function s(){e=e.filter(l=>l().status==="pending")}function n(l,a,c){const d=er(t,l,a,(h,f)=>{s(),c&&c(h,f)});return e.push(d),d}function r(l){return e.find(a=>l(a))||null}return{query:n,find:r,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:s}}function Ge(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const xe=Object.create(null),Rt=["https://api.simplesvg.com","https://api.unisvg.com"],se=[];for(;Rt.length>0;)Rt.length===1||Math.random()>.5?se.push(Rt.shift()):se.push(Rt.pop());xe[""]=Ge({resources:["https://api.iconify.design"].concat(se)});function Bi(i,t){const e=Ge(t);return e===null?!1:(xe[i]=e,!0)}function _e(i){return xe[i]}function ir(){return Object.keys(xe)}function Ri(){}const Oe=Object.create(null);function nr(i){if(!Oe[i]){const t=_e(i);if(!t)return;const e=On(t),s={config:t,redundancy:e};Oe[i]=s}return Oe[i]}function An(i,t,e){let s,n;if(typeof i=="string"){const r=Be(i);if(!r)return e(void 0,424),Ri;n=r.send;const o=nr(i);o&&(s=o.redundancy)}else{const r=Ge(i);if(r){s=On(r);const o=i.resources?i.resources[0]:"",l=Be(o);l&&(n=l.send)}}return!s||!n?(e(void 0,424),Ri):s.query(t,n,e)().abort}const Mi="iconify2",Wt="iconify",Tn=Wt+"-count",Di=Wt+"-version",Pn=36e5,sr=168,rr=50;function Re(i,t){try{return i.getItem(t)}catch{}}function Xe(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Fi(i,t){try{i.removeItem(t)}catch{}}function Me(i,t){return Xe(i,Tn,t.toString())}function De(i){return parseInt(Re(i,Tn))||0}const vt={local:!0,session:!0},In={local:new Set,session:new Set};let Ke=!1;function or(i){Ke=i}let ie=typeof window>"u"?{}:window;function Ln(i){const t=i+"Storage";try{if(ie&&ie[t]&&typeof ie[t].length=="number")return ie[t]}catch{}vt[i]=!1}function zn(i,t){const e=Ln(i);if(!e)return;const s=Re(e,Di);if(s!==Mi){if(s){const l=De(e);for(let a=0;a<l;a++)Fi(e,Wt+a.toString())}Xe(e,Di,Mi),Me(e,0);return}const n=Math.floor(Date.now()/Pn)-sr,r=l=>{const a=Wt+l.toString(),c=Re(e,a);if(typeof c=="string"){try{const d=JSON.parse(c);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&t(d,l))return!0}catch{}Fi(e,a)}};let o=De(e);for(let l=o-1;l>=0;l--)r(l)||(l===o-1?(o--,Me(e,o)):In[i].add(l))}function jn(){if(!Ke){or(!0);for(const i in vt)zn(i,t=>{const e=t.data,s=t.provider,n=e.prefix,r=at(s,n);if(!Ye(r,e).length)return!1;const o=e.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function lr(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in vt)zn(s,n=>{const r=n.data;return n.provider!==i.provider||r.prefix!==i.prefix||r.lastModified===t});return!0}function ar(i,t){Ke||jn();function e(s){let n;if(!vt[s]||!(n=Ln(s)))return;const r=In[s];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=De(n),o>=rr||!Me(n,o+1))return;const l={cached:Math.floor(Date.now()/Pn),provider:i.provider,data:t};return Xe(n,Wt+o.toString(),JSON.stringify(l))}t.lastModified&&!lr(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Ni(){}function cr(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Xs(i)}))}function ur(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let r;if(!n||!(r=Be(e)))return;r.prepare(e,s,n).forEach(l=>{An(e,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{i.missing.add(c)});else try{const c=Ye(i,a);if(!c.length)return;const d=i.pendingIcons;d&&c.forEach(h=>{d.delete(h)}),ar(i,a)}catch(c){console.error(c)}cr(i)})})}))}const Je=(i,t)=>{const e=Zs(i,!0,En()),s=Gs(e);if(!s.pending.length){let a=!0;return t&&setTimeout(()=>{a&&t(s.loaded,s.missing,s.pending,Ni)}),()=>{a=!1}}const n=Object.create(null),r=[];let o,l;return s.pending.forEach(a=>{const{provider:c,prefix:d}=a;if(d===l&&c===o)return;o=c,l=d,r.push(at(c,d));const h=n[c]||(n[c]=Object.create(null));h[d]||(h[d]=[])}),s.pending.forEach(a=>{const{provider:c,prefix:d,name:h}=a,f=at(c,d),m=f.pendingIcons||(f.pendingIcons=new Set);m.has(h)||(m.add(h),n[c][d].push(h))}),r.forEach(a=>{const{provider:c,prefix:d}=a;n[c][d].length&&ur(a,n[c][d])}),t?Js(t,s,r):Ni},dr=i=>new Promise((t,e)=>{const s=typeof i=="string"?Xt(i,!0):i;if(!s){e(i);return}Je([s||i],n=>{if(n.length&&s){const r=qt(s);if(r){t({...Gt,...r});return}}e(i)})});function hr(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function fr(i,t){const e=typeof i=="string"?Xt(i,!0,!0):null;if(!e){const r=hr(i);return{value:i,data:r}}const s=qt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Je([e],()=>t(i,e,qt(e)));return{value:i,name:e,loading:n}}function Ae(i){return i.hasAttribute("inline")}let Bn=!1;try{Bn=navigator.vendor.indexOf("Apple")===0}catch{}function pr(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(Bn||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const mr=/(-?[0-9.]*[0-9]+[0-9.]*)/g,br=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Fe(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(mr);if(s===null||!s.length)return i;const n=[];let r=s.shift(),o=br.test(r);for(;;){if(o){const l=parseFloat(r);isNaN(l)?n.push(r):n.push(Math.ceil(l*t*e)/e)}else n.push(r);if(r=s.shift(),r===void 0)return n.join("");o=!o}}function gr(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),r=i.indexOf("</"+t);if(n===-1||r===-1)break;const o=i.indexOf(">",r);if(o===-1)break;e+=i.slice(n+1,r).trim(),i=i.slice(0,s).trim()+i.slice(o+1)}return{defs:e,content:i}}function vr(i,t){return i?"<defs>"+i+"</defs>"+t:t}function yr(i,t,e){const s=gr(i);return vr(s.defs,t+s.content+e)}const xr=i=>i==="unset"||i==="undefined"||i==="none";function Rn(i,t){const e={...Gt,...i},s={..._n,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let r=e.body;[e,s].forEach(v=>{const g=[],S=v.hFlip,$=v.vFlip;let _=v.rotate;S?$?_+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):$&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let w;switch(_<0&&(_-=Math.floor(_/4)*4),_=_%4,_){case 1:w=n.height/2+n.top,g.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,g.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}_%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),g.length&&(r=yr(r,'<g transform="'+g.join(" ")+'">',"</g>"))});const o=s.width,l=s.height,a=n.width,c=n.height;let d,h;o===null?(h=l===null?"1em":l==="auto"?c:l,d=Fe(h,a/c)):(d=o==="auto"?a:o,h=l===null?Fe(d,c/a):l==="auto"?c:l);const f={},m=(v,g)=>{xr(g)||(f[v]=g.toString())};m("width",d),m("height",h);const b=[n.left,n.top,a,c];return f.viewBox=b.join(" "),{attributes:f,viewBox:b,body:r}}function Ze(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function _r(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function wr(i){return"data:image/svg+xml,"+_r(i)}function Mn(i){return'url("'+wr(i)+'")'}const Cr=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let ue=Cr();function $r(i){ue=i}function Er(){return ue}function Sr(i,t){const e=_e(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(o=>{n=Math.max(n,o.length)});const r=t+".json?icons=";s=e.maxURL-n-e.path.length-r.length}return s}function kr(i){return i===404}const Or=(i,t,e)=>{const s=[],n=Sr(i,t),r="icons";let o={type:r,provider:i,prefix:t,icons:[]},l=0;return e.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(s.push(o),o={type:r,provider:i,prefix:t,icons:[]},l=a.length),o.icons.push(a)}),s.push(o),s};function Ar(i){if(typeof i=="string"){const t=_e(i);if(t)return t.path}return"/"}const Tr=(i,t,e)=>{if(!ue){e("abort",424);return}let s=Ar(t.provider);switch(t.type){case"icons":{const r=t.prefix,l=t.icons.join(","),a=new URLSearchParams({icons:l});s+=r+".json?"+a.toString();break}case"custom":{const r=t.uri;s+=r.slice(0,1)==="/"?r.slice(1):r;break}default:e("abort",400);return}let n=503;ue(i+s).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{e(kr(o)?"abort":"next",o)});return}return n=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?e("abort",r):e("next",n)});return}setTimeout(()=>{e("success",r)})}).catch(()=>{e("next",n)})},Pr={prepare:Or,send:Tr};function Hi(i,t){switch(i){case"local":case"session":vt[i]=t;break;case"all":for(const e in vt)vt[e]=t;break}}const Te="data-style";let Dn="";function Ir(i){Dn=i}function Vi(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Te));e||(e=document.createElement("style"),e.setAttribute(Te,Te),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Dn}function Fn(){ji("",Pr),En(!0);let i;try{i=window}catch{}if(i){if(jn(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!Li(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const r=e[s];if(typeof r!="object"||!r||r.resources===void 0)continue;Bi(s,r)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Hi(e,!0),disableCache:e=>Hi(e,!1),iconLoaded:zi,iconExists:zi,getIcon:Ys,listIcons:Us,addIcon:Sn,addCollection:Li,calculateSize:Fe,buildIcon:Rn,iconToHTML:Ze,svgToURL:Mn,loadIcons:Je,loadIcon:dr,addAPIProvider:Bi,appendCustomStyle:Ir,_api:{getAPIConfig:_e,setAPIModule:ji,sendAPIQuery:An,setFetch:$r,getFetch:Er,listAPIProviders:ir}}}const Ne={"background-color":"currentColor"},Nn={"background-color":"transparent"},qi={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Wi={"-webkit-mask":Ne,mask:Ne,background:Nn};for(const i in Wi){const t=Wi[i];for(const e in qi)t[i+"-"+e]=qi[e]}function Qi(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Lr(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const r=i.attributes,o=Ze(n,{...r,width:t.width+"",height:t.height+""}),l=Mn(o),a=s.style,c={"--svg":l,width:Qi(r.width),height:Qi(r.height),...e?Ne:Nn};for(const d in c)a.setProperty(d,c[d]);return s}let Ft;function zr(){try{Ft=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{Ft=null}}function jr(i){return Ft===void 0&&zr(),Ft?Ft.createHTML(i):i}function Br(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=Ze(i.body,e);return t.innerHTML=jr(n),t.firstChild}function He(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Ui(i,t){const e=t.icon.data,s=t.customisations,n=Rn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const r=t.renderedMode;let o;switch(r){case"svg":o=Br(n);break;default:o=Lr(n,{...Gt,...e},r==="mask")}const l=He(i);l?o.tagName==="SPAN"&&l.tagName===o.tagName?l.setAttribute("style",o.getAttribute("style")):i.replaceChild(o,l):i.appendChild(o)}function Yi(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Rr(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends e{constructor(){super();rt(this,"_shadowRoot");rt(this,"_initialised",!1);rt(this,"_state");rt(this,"_checkQueued",!1);rt(this,"_connected",!1);rt(this,"_observer",null);rt(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),c=Ae(this);Vi(a,c),this._state=Yi({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const c=Ae(this),d=this._state;c!==d.inline&&(d.inline=c,Vi(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return Ae(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const c=this._shadowRoot;if(a.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Ui(c,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,c=this.getAttribute("icon");if(c!==a.icon.value){this._iconChanged(c);return}if(!a.rendered||!this._visible)return;const d=this.getAttribute("mode"),h=Pi(this);(a.attrMode!==d||Fs(a.customisations,h)||!He(this._shadowRoot))&&this._renderIcon(a.icon,h,d)}_iconChanged(a){const c=fr(a,(d,h,f)=>{const m=this._state;if(m.rendered||this.getAttribute("icon")!==d)return;const b={value:d,name:h,data:f};b.data?this._gotIconData(b):m.icon=b});c.data?this._gotIconData(c):this._state=Yi(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=He(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,Pi(this),this.getAttribute("mode"))}_renderIcon(a,c,d){const h=pr(a.data.body,d),f=this._state.inline;Ui(this._shadowRoot,this._state={rendered:!0,icon:a,inline:f,customisations:c,attrMode:d,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const c=a.some(d=>d.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(l=>{l in r.prototype||Object.defineProperty(r.prototype,l,{get:function(){return this.getAttribute(l)},set:function(a){a!==null?this.setAttribute(l,a):this.removeAttribute(l)}})});const o=Fn();for(const l in o)r[l]=r.prototype[l]=o[l];return t.define(i,r),r}Rr()||Fn();var Mr=Object.defineProperty,Dr=Object.getOwnPropertyDescriptor,V=(i,t,e,s)=>{for(var n=s>1?void 0:s?Dr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Mr(t,e,n),n};const ii=class ii extends E{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._stateBeforeLoading={disabled:!1,icon:""},this._loading=!1,this._parent=Et(),this._tooltip=Et(),this._mouseLeave=!1,this.onClick=t=>{t.stopPropagation(),this.disabled||this.dispatchEvent(new Event("click"))},this.showContextMenu=()=>{const t=this._contextMenu;t&&(t.visible=!0)},this.mouseLeave=!0}set loading(t){if(this._loading=t,t)this._stateBeforeLoading={disabled:this.disabled,icon:this.icon},this.disabled=t,this.icon="eos-icons:loading";else{const{disabled:e,icon:s}=this._stateBeforeLoading;this.disabled=e,this.icon=s}}get loading(){return this._loading}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&yn(t,e,{placement:"bottom",middleware:[on(10),vn(),gn(),bn({padding:5})]}).then(s=>{const{x:n,y:r}=s;Object.assign(e.style,{left:`${n}px`,top:`${r}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}click(){this.disabled||super.click()}get _contextMenu(){return this.querySelector("bim-context-menu")}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.showContextMenu)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.showContextMenu)}render(){const t=p`
      <div ${St(this._tooltip)} class="tooltip">
        ${this.tooltipTitle?p`<p style="text-wrap: nowrap;">
              <strong>${this.tooltipTitle}</strong>
            </p>`:null}
        ${this.tooltipText?p`<p style="width: 9rem;">${this.tooltipText}</p>`:null}
      </div>
    `;return p`
      <div ${St(this._parent)} class="parent" @click=${this.onClick}>
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
                  >${this.label}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
      </div>
      <slot></slot>
    `}};ii.styles=C`
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
      --bim-label--c: var(--bim-ui_bg-contrast-80);
      background-color: gray;
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
  `;let z=ii;V([u({type:String,reflect:!0})],z.prototype,"label",2);V([u({type:Boolean,attribute:"label-hidden",reflect:!0})],z.prototype,"labelHidden",2);V([u({type:Boolean,reflect:!0})],z.prototype,"active",2);V([u({type:Boolean,reflect:!0,attribute:"disabled"})],z.prototype,"disabled",2);V([u({type:String,reflect:!0})],z.prototype,"icon",2);V([u({type:Boolean,reflect:!0})],z.prototype,"vertical",2);V([u({type:Number,attribute:"tooltip-time",reflect:!0})],z.prototype,"tooltipTime",2);V([u({type:Boolean,attribute:"tooltip-visible",reflect:!0})],z.prototype,"tooltipVisible",2);V([u({type:String,attribute:"tooltip-title",reflect:!0})],z.prototype,"tooltipTitle",2);V([u({type:String,attribute:"tooltip-text",reflect:!0})],z.prototype,"tooltipText",2);V([u({type:Boolean,reflect:!0})],z.prototype,"loading",1);var Fr=Object.defineProperty,Kt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Fr(t,e,n),n};const ni=class ni extends E{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return p`
      <div class="parent">
        ${this.label?p`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
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
  `;let ct=ni;Kt([u({type:String,reflect:!0})],ct.prototype,"icon");Kt([u({type:String,reflect:!0})],ct.prototype,"name");Kt([u({type:String,reflect:!0})],ct.prototype,"label");Kt([u({type:Boolean,reflect:!0})],ct.prototype,"checked");Kt([u({type:Boolean,reflect:!0})],ct.prototype,"inverted");var Nr=Object.defineProperty,Lt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Nr(t,e,n),n};const si=class si extends E{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=Et(),this._textInput=Et(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return p`
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
                ${St(this._colorInput)}
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
                ${St(this._textInput)}
                @input="${this.onTextInput}"
                value="${this.color}"
                type="text"
                aria-label=${this.label||this.name||"Text Color Input"}
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
  `;let K=si;Lt([u({type:String,reflect:!0})],K.prototype,"name");Lt([u({type:String,reflect:!0})],K.prototype,"label");Lt([u({type:String,reflect:!0})],K.prototype,"icon");Lt([u({type:Boolean,reflect:!0})],K.prototype,"vertical");Lt([u({type:Number,reflect:!0})],K.prototype,"opacity");Lt([u({type:String,reflect:!0})],K.prototype,"color");const Hr=C`
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
`,Vr=C`
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
`,mt={scrollbar:Hr,globalStyles:Vr},y=class y{static set config(t){this._config={...y._config,...t}}static get config(){return y._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=mt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){y.init()}static init(){y.addGlobalStyles(),y.defineCustomElement("bim-button",z),y.defineCustomElement("bim-checkbox",ct),y.defineCustomElement("bim-color-input",K),y.defineCustomElement("bim-context-menu",Qr),y.defineCustomElement("bim-dropdown",H),y.defineCustomElement("bim-grid",Qt),y.defineCustomElement("bim-icon",We),y.defineCustomElement("bim-input",xt),y.defineCustomElement("bim-label",ut),y.defineCustomElement("bim-number-input",I),y.defineCustomElement("bim-option",T),y.defineCustomElement("bim-panel",J),y.defineCustomElement("bim-panel-section",dt),y.defineCustomElement("bim-selector",ht),y.defineCustomElement("bim-table",j),y.defineCustomElement("bim-tabs",tt),y.defineCustomElement("bim-tab",L),y.defineCustomElement("bim-table-cell",he),y.defineCustomElement("bim-table-children",fe),y.defineCustomElement("bim-table-group",pe),y.defineCustomElement("bim-table-row",Z),y.defineCustomElement("bim-text-input",M),y.defineCustomElement("bim-toolbar",Pt),y.defineCustomElement("bim-toolbar-group",Tt),y.defineCustomElement("bim-toolbar-section",ft),y.defineCustomElement("bim-viewport",me)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};y._config={sectionLabelOnVerticalToolbar:!1};let Ve=y;class Hn extends E{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const r=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,o=[...this.elements][r];o&&(this.visibleElements=[...this.visibleElements,o],t.observe(o))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Nt(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const r=t,o=c=>(n={...n,...c},Nt(r(n),s),n);o(e);const l=()=>n;return[s.firstElementChild,o,l]}}var qr=Object.defineProperty,Wr=Object.getOwnPropertyDescriptor,Vn=(i,t,e,s)=>{for(var n=Wr(t,e),r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&qr(t,e,n),n},A;const ti=(A=class extends E{constructor(){super(...arguments),this._previousContainer=null,this._visible=!1}get placement(){return this._placement}set placement(t){this._placement=t,this.updatePosition()}static removeMenus(){for(const t of A.menus)t instanceof A&&(t.visible=!1);A.dialog.close(),A.dialog.remove()}get visible(){return this._visible}set visible(t){var e;this._visible=t,t?(A.dialog.parentElement||document.body.append(A.dialog),this._previousContainer=this.parentElement,A.dialog.style.top=`${window.scrollY||document.documentElement.scrollTop}px`,A.dialog.append(this),A.dialog.showModal(),this.updatePosition(),this.dispatchEvent(new Event("visible"))):((e=this._previousContainer)==null||e.append(this),this._previousContainer=null,this.dispatchEvent(new Event("hidden")))}async updatePosition(){if(!(this.visible&&this._previousContainer))return;const t=this.placement??"right",e=await yn(this._previousContainer,this,{placement:t,middleware:[on(10),vn(),gn(),bn({padding:5})]}),{x:s,y:n}=e;this.style.left=`${s}px`,this.style.top=`${n}px`}connectedCallback(){super.connectedCallback(),A.menus.push(this)}render(){return p` <slot></slot> `}},A.styles=[mt.scrollbar,C`
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
    `],A.dialog=Hn.create(()=>p` <dialog
      @click=${e=>{e.target===A.dialog&&A.removeMenus()}}
      @cancel=${()=>A.removeMenus()}
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
    ></dialog>`),A.menus=[],A);Vn([u({type:String,reflect:!0})],ti.prototype,"placement");Vn([u({type:Boolean,reflect:!0})],ti.prototype,"visible");let Qr=ti;const de=(i,t={},e=!0)=>{let s={};for(const n of i.children){const r=n,o=r.getAttribute("name")||r.getAttribute("label"),l=t[o];if(o){if("value"in r&&typeof r.value<"u"&&r.value!==null){const a=r.value;if(typeof a=="object"&&!Array.isArray(a)&&Object.keys(a).length===0)continue;s[o]=l?l(r.value):r.value}else if(e){const a=de(r,t);if(Object.keys(a).length===0)continue;s[o]=l?l(a):a}}else e&&(s={...s,...de(r,t)})}return s},we=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Ur=[">=","<=","=",">","<","?","/","#"];function Gi(i){const t=Ur.find(l=>i.split(l).length===2),e=i.split(t).map(l=>l.trim()),[s,n]=e,r=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):we(n);return{key:s,condition:t,value:r}}const qe=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),r=s.startsWith("(")&&s.endsWith(")");if(n){const o=Gi(s);t.push(o)}if(r){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(d=>d.trim()).map((d,h)=>{const f=Gi(d);return h>0&&(f.operator="&"),f})};t.push(c)}}return t}catch{return null}},Xi=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var Yr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,bt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Gr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Yr(t,e,n),n};const ri=class ri extends E{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?we(this.label):this.label}set value(t){this._value=t}render(){return p`
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
    `}};ri.styles=C`
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
  `;let T=ri;bt([u({type:String,reflect:!0})],T.prototype,"img",2);bt([u({type:String,reflect:!0})],T.prototype,"label",2);bt([u({type:String,reflect:!0})],T.prototype,"icon",2);bt([u({type:Boolean,reflect:!0})],T.prototype,"checked",2);bt([u({type:Boolean,reflect:!0})],T.prototype,"checkbox",2);bt([u({type:Boolean,attribute:"no-mark",reflect:!0})],T.prototype,"noMark",2);bt([u({converter:{fromAttribute(i){return i&&we(i)}}})],T.prototype,"value",1);bt([u({type:Boolean,reflect:!0})],T.prototype,"vertical",2);var Xr=Object.defineProperty,Kr=Object.getOwnPropertyDescriptor,gt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Kr(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Xr(t,e,n),n};const oi=class oi extends Hn{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._visible=!1,this._value=new Set,this.onValueChange=new Event("change"),this._contextMenu=Et(),this.onOptionClick=t=>{const e=t.target,s=this._value.has(e);if(!this.multiple&&!this.required&&!s)this._value=new Set([e]);else if(!this.multiple&&!this.required&&s)this._value=new Set([]);else if(!this.multiple&&this.required&&!s)this._value=new Set([e]);else if(this.multiple&&!this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&!this.required&&s){const n=[...this._value].filter(r=>r!==e);this._value=new Set(n)}else if(this.multiple&&this.required&&!s)this._value=new Set([...this._value,e]);else if(this.multiple&&this.required&&s){const n=[...this._value].filter(o=>o!==e),r=new Set(n);r.size!==0&&(this._value=r)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){if(t){const{value:e}=this._contextMenu;if(!e)return;for(const s of this.elements)e.append(s);this._visible=!0}else{for(const e of this.elements)this.append(e);this._visible=!1,this.resetVisibleElements()}}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=new Set;for(const s of t){const n=this.findOption(s);if(n&&(e.add(n),!this.multiple&&Object.keys(t).length===1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return[...this._value].filter(e=>e instanceof T&&e.checked).map(e=>e.value)}get _options(){const t=new Set([...this.elements]);for(const e of this.children)e instanceof T&&t.add(e);return[...t]}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);const s=new Set;for(const n of this.elements){if(!(n instanceof T)){n.remove();continue}n.checked&&s.add(n),n.removeEventListener("click",this.onOptionClick),n.addEventListener("click",this.onOptionClick)}this._value=s}updateOptionsState(){for(const t of this._options)t instanceof T&&(t.checked=this._value.has(t))}findOption(t){return this._options.find(s=>s instanceof T?s.label===t||s.value===t:!1)}render(){let t,e,s;if(this._value.size===0)t="Select an option...";else if(this._value.size===1){const n=[...this._value][0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.size})`;return p`
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
            ${St(this._contextMenu)}
            .visible=${this.visible}
            @hidden=${()=>{this.visible&&(this.visible=!1)}}
          >
            <slot @slotchange=${this.onSlotChange}></slot>
          </bim-context-menu>
        </div>
      </bim-input>
    `}};oi.styles=[mt.scrollbar,C`
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
    `];let H=oi;gt([u({type:String,reflect:!0})],H.prototype,"name",2);gt([u({type:String,reflect:!0})],H.prototype,"icon",2);gt([u({type:String,reflect:!0})],H.prototype,"label",2);gt([u({type:Boolean,reflect:!0})],H.prototype,"multiple",2);gt([u({type:Boolean,reflect:!0})],H.prototype,"required",2);gt([u({type:Boolean,reflect:!0})],H.prototype,"vertical",2);gt([u({type:Boolean,reflect:!0})],H.prototype,"visible",1);gt([It()],H.prototype,"_value",2);var Jr=Object.defineProperty,qn=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Jr(t,e,n),n};const li=class li extends E{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(t){const n=t.split(`
`).map(o=>o.trim()).map(o=>o.split('"')[1]).filter(o=>o!==void 0).flatMap(o=>o.split(/\s+/));return[...new Set(n)].filter(o=>o!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const t=this.layouts[this.layout],s=this.getUniqueAreasFromTemplate(t.template).map(n=>{const r=t.elements[n];return r&&(r.style.gridArea=n),r}).filter(n=>!!n);this.style.gridTemplate=t.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...s)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return p`<slot></slot>`}};li.styles=C`
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
  `;let Qt=li;qn([u({type:Boolean,reflect:!0})],Qt.prototype,"floating");qn([u({type:String,reflect:!0})],Qt.prototype,"layout");const be=class be extends E{render(){return p`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};be.styles=C`
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
  `,be.properties={icon:{type:String}};let We=be;var Zr=Object.defineProperty,Ce=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Zr(t,e,n),n};const ai=class ai extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change")}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(l=>{const a=l;return a.name===s||a.label===s});if(!n)continue;const r=n,o=t[s];typeof o=="boolean"?r.checked=o:r.value=o}}render(){return p`
      <div class="parent">
        ${this.label||this.icon?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="input">
          <slot></slot>
        </div>
      </div>
    `}};ai.styles=C`
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
  `;let xt=ai;Ce([u({type:String,reflect:!0})],xt.prototype,"name");Ce([u({type:String,reflect:!0})],xt.prototype,"label");Ce([u({type:String,reflect:!0})],xt.prototype,"icon");Ce([u({type:Boolean,reflect:!0})],xt.prototype,"vertical");var to=Object.defineProperty,Jt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&to(t,e,n),n};const ci=class ci extends E{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?we(this.textContent):this.textContent}render(){return p`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?p`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?p`<bim-icon .icon=${this.icon}></bim-icon>`:null}
        <p><slot></slot></p>
      </div>
    `}};ci.styles=C`
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
  `;let ut=ci;Jt([u({type:String,reflect:!0})],ut.prototype,"img");Jt([u({type:Boolean,attribute:"label-hidden",reflect:!0})],ut.prototype,"labelHidden");Jt([u({type:String,reflect:!0})],ut.prototype,"icon");Jt([u({type:Boolean,attribute:"icon-hidden",reflect:!0})],ut.prototype,"iconHidden");Jt([u({type:Boolean,reflect:!0})],ut.prototype,"vertical");var eo=Object.defineProperty,io=Object.getOwnPropertyDescriptor,D=(i,t,e,s)=>{for(var n=s>1?void 0:s?io(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&eo(t,e,n),n};const ui=class ui extends E{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Et(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const r=a=>{var v;n=!0;const{clientX:c}=a,d=this.step??1,h=((v=d.toString().split(".")[1])==null?void 0:v.length)||0,f=1/(this.sensitivity??1),m=(c-e)/f;if(Math.floor(Math.abs(m))!==Math.abs(m))return;const b=s+m*d;this.setValue(b.toFixed(h))},o=()=>{this.slider=!0,this.removeEventListener("blur",o)},l=()=>{document.removeEventListener("mousemove",r),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",o),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",l)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=p`
      ${this.pref||this.icon?p`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${St(this._input)}
        type="text"
        aria-label=${this.label||this.name||"Number Input"}
        size="1"
        @input=${l=>l.stopPropagation()}
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
    `}};ui.styles=C`
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
  `;let I=ui;D([u({type:String,reflect:!0})],I.prototype,"name",2);D([u({type:String,reflect:!0})],I.prototype,"icon",2);D([u({type:String,reflect:!0})],I.prototype,"label",2);D([u({type:String,reflect:!0})],I.prototype,"pref",2);D([u({type:Number,reflect:!0})],I.prototype,"min",2);D([u({type:Number,reflect:!0})],I.prototype,"value",1);D([u({type:Number,reflect:!0})],I.prototype,"step",2);D([u({type:Number,reflect:!0})],I.prototype,"sensitivity",2);D([u({type:Number,reflect:!0})],I.prototype,"max",2);D([u({type:String,reflect:!0})],I.prototype,"suffix",2);D([u({type:Boolean,reflect:!0})],I.prototype,"vertical",2);D([u({type:Boolean,reflect:!0})],I.prototype,"slider",2);var no=Object.defineProperty,so=Object.getOwnPropertyDescriptor,Zt=(i,t,e,s)=>{for(var n=s>1?void 0:s?so(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&no(t,e,n),n};const di=class di extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.valueTransform={},this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return de(this,this.valueTransform)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const l=o;return l.name===s||l.label===s});if(!n)continue;const r=n;r.value=t[s]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,p`
      <div class="parent">
        ${this.label||this.name||this.icon?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};di.styles=[mt.scrollbar,C`
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
    `];let J=di;Zt([u({type:String,reflect:!0})],J.prototype,"icon",2);Zt([u({type:String,reflect:!0})],J.prototype,"name",2);Zt([u({type:String,reflect:!0})],J.prototype,"label",2);Zt([u({type:Boolean,reflect:!0})],J.prototype,"hidden",1);Zt([u({type:Boolean,attribute:"header-hidden",reflect:!0})],J.prototype,"headerHidden",2);var ro=Object.defineProperty,te=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&ro(t,e,n),n};const hi=class hi extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this.valueTransform={}}get value(){const t=this.parentElement;let e;return t instanceof J&&(e=t.valueTransform),Object.values(this.valueTransform).length!==0&&(e=this.valueTransform),de(this,e)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(o=>{const l=o;return l.name===s||l.label===s});if(!n)continue;const r=n;r.value=t[s]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>`,s=p`<svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.125rem"
      viewBox="0 0 24 24"
      width="1.125rem"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
    </svg>`,n=this.collapsed?e:s,r=p`
      <div
        class="header"
        title=${this.label??""}
        @click=${this.onHeaderClick}
      >
        ${this.label||this.icon||this.name?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return p`
      <div class="parent">
        ${t?r:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};hi.styles=[mt.scrollbar,C`
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
    `];let dt=hi;te([u({type:String,reflect:!0})],dt.prototype,"icon");te([u({type:String,reflect:!0})],dt.prototype,"label");te([u({type:String,reflect:!0})],dt.prototype,"name");te([u({type:Boolean,reflect:!0})],dt.prototype,"fixed");te([u({type:Boolean,reflect:!0})],dt.prototype,"collapsed");var oo=Object.defineProperty,ee=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&oo(t,e,n),n};const fi=class fi extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof T&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof T&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof T?s.label===t||s.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof T&&e.checked);t&&(this._value=t)}render(){return p`
      <bim-input
        .vertical=${this.vertical}
        .label=${this.label}
        .icon=${this.icon}
      >
        <slot @slotchange=${this.onSlotChange}></slot>
      </bim-input>
    `}};fi.styles=C`
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
  `;let ht=fi;ee([u({type:String,reflect:!0})],ht.prototype,"name");ee([u({type:String,reflect:!0})],ht.prototype,"icon");ee([u({type:String,reflect:!0})],ht.prototype,"label");ee([u({type:Boolean,reflect:!0})],ht.prototype,"vertical");ee([It()],ht.prototype,"_value");const lo=()=>p`
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
  `,ao=()=>p`
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
  `;var co=Object.defineProperty,uo=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&co(t,e,n),n};const pi=class pi extends E{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return p`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};pi.styles=C`
    :host {
      padding: 0.375rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]:not([data-no-indentation])) {
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
  `;let he=pi;uo([u({type:String,reflect:!0})],he.prototype,"column");var ho=Object.defineProperty,fo=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&ho(t,e,n),n};const mi=class mi extends E{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const s of this._groups)s.childrenHidden=typeof t>"u"?!s.childrenHidden:!t,e&&s.toggleChildren(t,e)}render(){return this._groups=[],p`
      <slot></slot>
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};mi.styles=C`
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
  `;let fe=mi;fo([u({type:Array,attribute:!1})],fe.prototype,"data");var po=Object.defineProperty,mo=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&po(t,e,n),n};const bi=class bi extends E{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){if(!this.table)throw new Error("TableGroup: parent table wasn't found!");const t=this.table.getGroupIndentation(this.data)??0,e=p`
      ${this.table.noIndentation?null:p`
            <style>
              .branch-vertical {
                left: ${t+(this.table.selectableRows?1.9375:.5625)}rem;
              }
            </style>
            <div class="branch branch-vertical"></div>
          `}
    `,s=document.createDocumentFragment();Nt(e,s);let n=null;this.table.noIndentation||(n=document.createElement("div"),n.classList.add("branch","branch-horizontal"),n.style.left=`${t-1+(this.table.selectableRows?2.05:.5625)}rem`);let r=null;if(!this.table.noIndentation){const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("height","9.5"),a.setAttribute("width","7.5"),a.setAttribute("viewBox","0 0 4.6666672 7.3333333");const c=document.createElementNS("http://www.w3.org/2000/svg","path");c.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),a.append(c);const d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.setAttribute("height","6.5"),d.setAttribute("width","9.5"),d.setAttribute("viewBox","0 0 5.9111118 5.0175439");const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),d.append(h),r=document.createElement("div"),r.addEventListener("click",f=>{f.stopPropagation(),this.toggleChildren()}),r.classList.add("caret"),r.style.left=`${(this.table.selectableRows?1.5:.125)+t}rem`,this.childrenHidden?r.append(a):r.append(d)}const o=document.createElement("bim-table-row");this.data.children&&!this.childrenHidden&&o.append(s),o.table=this.table,o.data=this.data.data,this.table.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:o}})),r&&this.data.children&&o.append(r),t!==0&&(!this.data.children||this.childrenHidden)&&n&&o.append(n);let l;if(this.data.children){l=document.createElement("bim-table-children"),this._children=l,l.table=this.table,l.data=this.data.children;const a=document.createDocumentFragment();Nt(e,a),l.append(a)}return p`
      <div class="parent">${o} ${this.childrenHidden?null:l}</div>
    `}};bi.styles=C`
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
  `;let pe=bi;mo([u({type:Boolean,attribute:"children-hidden",reflect:!0})],pe.prototype,"childrenHidden");var bo=Object.defineProperty,zt=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&bo(t,e,n),n};const gi=class gi extends E{constructor(){super(...arguments),this.selected=!1,this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}get _isSelected(){var t;return(t=this.table)==null?void 0:t.selection.has(this.data)}onSelectionChange(t){if(!this.table)return;const e=t.target;this.selected=e.value,e.value?(this.table.selection.add(this.data),this.table.dispatchEvent(new CustomEvent("rowselected",{detail:{data:this.data}}))):(this.table.selection.delete(this.data),this.table.dispatchEvent(new CustomEvent("rowdeselected",{detail:{data:this.data}})))}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",this._isSelected))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden),this.toggleAttribute("selected",!1))}compute(){if(!this.table)throw new Error("TableRow: parent table wasn't found!");const t=this.table.getRowIndentation(this.data)??0,e=this.isHeader?this.data:this.table.applyDataTransform(this.data)??this.data,s=[];for(const n in e){if(this.hiddenColumns.includes(n))continue;const r=e[n];let o;if(typeof r=="string"||typeof r=="boolean"||typeof r=="number"?(o=document.createElement("bim-label"),o.textContent=String(r)):r instanceof HTMLElement?o=r:(o=document.createDocumentFragment(),Nt(r,o)),!o)continue;const l=document.createElement("bim-table-cell");l.append(o),l.column=n,this._columnNames.indexOf(n)===0&&!this.isHeader&&(l.style.marginLeft=`${(this.table.noIndentation?0:t)+.75}rem`);const a=this._columnNames.indexOf(n);l.setAttribute("data-column-index",String(a)),l.toggleAttribute("data-no-indentation",a===0&&this.table.noIndentation),l.toggleAttribute("data-cell-header",this.isHeader),l.rowData=this.data,this.table.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:l}})),s.push(l)}return this.style.gridTemplateAreas=`"${this.table.selectableRows?"Selection":""} ${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this.table.selectableRows?"1.6rem":""} ${this._columnWidths.join(" ")}`,p`
      ${!this.isHeader&&this.table.selectableRows?p`<bim-checkbox
            @change=${this.onSelectionChange}
            .checked=${this._isSelected}
            style="align-self: center; justify-self: center"
          ></bim-checkbox>`:null}
      ${s}
      <slot></slot>
    `}render(){return p`${this._intersecting?this.compute():p``}`}};gi.styles=C`
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
  `;let Z=gi;zt([u({type:Boolean,reflect:!0})],Z.prototype,"selected");zt([u({attribute:!1})],Z.prototype,"columns");zt([u({attribute:!1})],Z.prototype,"hiddenColumns");zt([u({attribute:!1})],Z.prototype,"data");zt([u({type:Boolean,attribute:"is-header",reflect:!0})],Z.prototype,"isHeader");zt([It()],Z.prototype,"_intersecting");var go=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,q=(i,t,e,s)=>{for(var n=s>1?void 0:s?vo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&go(t,e,n),n};const vi=class vi extends E{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this.selectableRows=!1,this.selection=new Set,this.noIndentation=!1,this.loading=!1,this._errorLoading=!1,this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this.loadingErrorElement=null,this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=qe(t)??[];for(const r of n){if("queries"in r){s=!1;break}const{condition:o,value:l}=r;let{key:a}=r;if(a.startsWith("[")&&a.endsWith("]")){const c=a.replace("[","").replace("]","");a=c,s=Object.keys(e.data).filter(f=>f.includes(c)).map(f=>Xi(e.data[f],o,l)).some(f=>f)}else s=Xi(e.data[a],o,l);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:s}=e;t[s]=s}return t}get value(){return this._filteredData}set queryString(t){this.toggleAttribute("data-processing",!0),this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData(),this.toggleAttribute("data-processing",!1)}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(qe(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:r}=s;for(const o in r)this._columns.map(a=>typeof a=="string"?a:a.name).includes(o)||(this._columns.push({name:o,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const o=this.computeMissingColumns(n);o&&!e&&(e=o)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const r=this._textDelimiters[t];let o="";const l=this.columns.map(a=>a.name);if(n){this.indentationInText&&(o+=`Indentation${r}`);const a=`${l.join(r)}
`;o+=a}for(const[a,c]of e.entries()){const{data:d,children:h}=c,f=this.indentationInText?`${s}${a+1}${r}`:"",m=l.map(v=>d[v]??""),b=`${f}${m.join(r)}
`;o+=b,h&&(o+=this.generateText(t,c.children,`${s}${a+1}.`,!1))}return o}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}applyDataTransform(t){const e={};for(const s of Object.keys(this.dataTransform)){const n=this.columns.find(r=>r.name===s);n&&n.forceDataTransform&&(s in t||(t[s]=""))}for(const s in t){const n=this.dataTransform[s];n?e[s]=n(t[s],t):e[s]=t[s]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const r=this.getRowIndentation(t,n.children,s+1);if(r!==null)return r}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const r=this.getGroupIndentation(t,n.children,s+1);if(r!==null)return r}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}async loadData(t=!1){if(this._filteredData.length!==0&&!t||!this.loadFunction)return!1;this.loading=!0;try{const e=await this.loadFunction();return this.data=e,this.loading=!1,this._errorLoading=!1,!0}catch(e){return this.loading=!1,this._filteredData.length!==0||(e instanceof Error&&this.loadingErrorElement&&e.message.trim()!==""&&(this.loadingErrorElement.textContent=e.message),this._errorLoading=!0),!1}}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const r of s)if(e(t,r)){if(this.preserveStructureOnFilter){const l={data:r.data};if(r.children){const a=this.filter(t,e,r.children);a.length&&(l.children=a)}n.push(l)}else if(n.push({data:r.data}),r.children){const l=this.filter(t,e,r.children);n.push(...l)}}else if(r.children){const l=this.filter(t,e,r.children);this.preserveStructureOnFilter&&l.length?n.push({data:r.data,children:l}):n.push(...l)}return n}get _missingDataElement(){return this.querySelector("[slot='missing-data']")}render(){if(this.loading)return lo();if(this._errorLoading)return p`<slot name="error-loading"></slot>`;if(this._filteredData.length===0&&this._missingDataElement)return p`<slot name="missing-data"></slot>`;const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",p`
      <div class="parent">
        ${this.headersHidden?null:t} ${ao()}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};vi.styles=[mt.scrollbar,C`
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
    `];let j=vi;q([It()],j.prototype,"_filteredData",2);q([u({type:Boolean,attribute:"headers-hidden",reflect:!0})],j.prototype,"headersHidden",2);q([u({type:String,attribute:"min-col-width",reflect:!0})],j.prototype,"minColWidth",2);q([u({type:Array,attribute:!1})],j.prototype,"columns",1);q([u({type:Array,attribute:!1})],j.prototype,"data",1);q([u({type:Boolean,reflect:!0})],j.prototype,"expanded",2);q([u({type:Boolean,reflect:!0,attribute:"selectable-rows"})],j.prototype,"selectableRows",2);q([u({attribute:!1})],j.prototype,"selection",2);q([u({type:Boolean,attribute:"no-indentation",reflect:!0})],j.prototype,"noIndentation",2);q([u({type:Boolean,reflect:!0})],j.prototype,"loading",2);q([It()],j.prototype,"_errorLoading",2);var yo=Object.defineProperty,xo=Object.getOwnPropertyDescriptor,$e=(i,t,e,s)=>{for(var n=s>1?void 0:s?xo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&yo(t,e,n),n};const yi=class yi extends E{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return p` <slot></slot> `}};yi.styles=C`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let L=yi;$e([u({type:String,reflect:!0})],L.prototype,"name",2);$e([u({type:String,reflect:!0})],L.prototype,"label",2);$e([u({type:String,reflect:!0})],L.prototype,"icon",2);$e([u({type:Boolean,reflect:!0})],L.prototype,"hidden",1);var _o=Object.defineProperty,wo=Object.getOwnPropertyDescriptor,jt=(i,t,e,s)=>{for(var n=s>1?void 0:s?wo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&_o(t,e,n),n};const xi=class xi extends E{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.switchersFull=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof L&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof L&&n.name===t);for(const n of e){if(!(n instanceof L))continue;n.hidden=s!==n;const r=this.getTabSwitcher(n.name);r&&r.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof L))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??"",s.icon=t.icon,e.append(s),this._switchers.push(e)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof L?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof L&&(this.tab=s.name);for(const n of e){if(!(n instanceof L)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return p`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};xi.styles=[mt.scrollbar,C`
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
    `];let tt=xi;jt([It()],tt.prototype,"_switchers",2);jt([u({type:Boolean,reflect:!0})],tt.prototype,"bottom",2);jt([u({type:Boolean,attribute:"switchers-hidden",reflect:!0})],tt.prototype,"switchersHidden",2);jt([u({type:Boolean,reflect:!0})],tt.prototype,"floating",2);jt([u({type:String,reflect:!0})],tt.prototype,"tab",1);jt([u({type:Boolean,attribute:"switchers-full",reflect:!0})],tt.prototype,"switchersFull",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ki=i=>i??Pe;var Co=Object.defineProperty,$o=Object.getOwnPropertyDescriptor,et=(i,t,e,s)=>{for(var n=s>1?void 0:s?$o(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Co(t,e,n),n};const _i=class _i extends E{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week","area"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return qe(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}focus(){setTimeout(()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("input");t==null||t.focus()})}render(){return p`
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
              placeholder=${Ki(this.placeholder)}
              @input=${this.onInputChange}
            ></textarea>`:p` <input
              aria-label=${this.label||this.name||"Text Input"}
              .type=${this.type}
              .value=${this.value}
              placeholder=${Ki(this.placeholder)}
              @input=${this.onInputChange}
            />`}
      </bim-input>
    `}};_i.styles=[mt.scrollbar,C`
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
    `];let M=_i;et([u({type:String,reflect:!0})],M.prototype,"icon",2);et([u({type:String,reflect:!0})],M.prototype,"label",2);et([u({type:String,reflect:!0})],M.prototype,"name",2);et([u({type:String,reflect:!0})],M.prototype,"placeholder",2);et([u({type:String,reflect:!0})],M.prototype,"value",2);et([u({type:Boolean,reflect:!0})],M.prototype,"vertical",2);et([u({type:Number,reflect:!0})],M.prototype,"debounce",2);et([u({type:Number,reflect:!0})],M.prototype,"rows",2);et([u({type:String,reflect:!0})],M.prototype,"type",1);var Eo=Object.defineProperty,So=Object.getOwnPropertyDescriptor,Wn=(i,t,e,s)=>{for(var n=s>1?void 0:s?So(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Eo(t,e,n),n};const wi=class wi extends E{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return p`
      <style>
        .parent {
          grid-auto-flow: ${this.vertical?"row":"column"};
          grid-template-rows: repeat(${this.rows}, 1fr);
        }
      </style>
      <div class="parent">
        <slot @slotchange=${this.updateChildren}></slot>
      </div>
    `}};wi.styles=C`
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
  `;let Tt=wi;Wn([u({type:Number,reflect:!0})],Tt.prototype,"rows",2);Wn([u({type:Boolean,reflect:!0})],Tt.prototype,"vertical",1);var ko=Object.defineProperty,Oo=Object.getOwnPropertyDescriptor,Ee=(i,t,e,s)=>{for(var n=s>1?void 0:s?Oo(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&ko(t,e,n),n};const Ci=class Ci extends E{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof Tt&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return p`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?p`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
      </div>
    `}};Ci.styles=C`
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
  `;let ft=Ci;Ee([u({type:String,reflect:!0})],ft.prototype,"label",2);Ee([u({type:String,reflect:!0})],ft.prototype,"icon",2);Ee([u({type:Boolean,reflect:!0})],ft.prototype,"vertical",1);Ee([u({type:Boolean,attribute:"label-hidden",reflect:!0})],ft.prototype,"labelHidden",1);var Ao=Object.defineProperty,To=Object.getOwnPropertyDescriptor,ei=(i,t,e,s)=>{for(var n=s>1?void 0:s?To(t,e):t,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=(s?o(t,e,n):o(n))||n);return s&&n&&Ao(t,e,n),n};const $i=class $i extends E{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof ft&&(e.labelHidden=this.vertical&&!Ve.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return p`
      <div class="parent">
        <slot @slotchange=${this.updateSections}></slot>
      </div>
    `}};$i.styles=C`
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
  `;let Pt=$i;ei([u({type:String,reflect:!0})],Pt.prototype,"icon",2);ei([u({type:Boolean,attribute:"labels-hidden",reflect:!0})],Pt.prototype,"labelsHidden",2);ei([u({type:Boolean,reflect:!0})],Pt.prototype,"vertical",1);var Po=Object.defineProperty,Io=(i,t,e,s)=>{for(var n=void 0,r=i.length-1,o;r>=0;r--)(o=i[r])&&(n=o(t,e,n)||n);return n&&Po(t,e,n),n};const Ei=class Ei extends E{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return p`
      <div class="parent">
        <slot></slot>
      </div>
    `}};Ei.styles=C`
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
  `;let me=Ei;Io([u({type:String,reflect:!0})],me.prototype,"name");export{Hn as C,St as K,Ve as M,Kn as e,Jn as i,Xn as t};
