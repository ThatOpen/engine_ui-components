var Fn=Object.defineProperty;var Vn=(i,t,e)=>t in i?Fn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var K=(i,t,e)=>(Vn(i,typeof t!="symbol"?t+"":t,e),e);import{T as Te,s as E,i as C,x as m,n as h,j as Pe,r as Nt}from"./state-HK6D0hVF.js";const Ct=Math.min,U=Math.max,ie=Math.round,et=i=>({x:i,y:i}),qn={left:"right",right:"left",bottom:"top",top:"bottom"},Wn={start:"end",end:"start"};function Si(i,t,e){return U(i,Ct(t,e))}function Ht(i,t){return typeof i=="function"?i(t):i}function Q(i){return i.split("-")[0]}function me(i){return i.split("-")[1]}function Ji(i){return i==="x"?"y":"x"}function Ki(i){return i==="y"?"height":"width"}function Ft(i){return["top","bottom"].includes(Q(i))?"y":"x"}function Zi(i){return Ji(Ft(i))}function Un(i,t,e){e===void 0&&(e=!1);const s=me(i),n=Zi(i),o=Ki(n);let r=n==="x"?s===(e?"end":"start")?"right":"left":s==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=ne(r)),[r,ne(r)]}function Qn(i){const t=ne(i);return[Le(i),t,Le(t)]}function Le(i){return i.replace(/start|end/g,t=>Wn[t])}function Yn(i,t,e){const s=["left","right"],n=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(i){case"top":case"bottom":return e?t?n:s:t?s:n;case"left":case"right":return t?o:r;default:return[]}}function Gn(i,t,e,s){const n=me(i);let o=Yn(Q(i),e==="start",s);return n&&(o=o.map(r=>r+"-"+n),t&&(o=o.concat(o.map(Le)))),o}function ne(i){return i.replace(/left|right|bottom|top/g,t=>qn[t])}function Xn(i){return{top:0,right:0,bottom:0,left:0,...i}}function tn(i){return typeof i!="number"?Xn(i):{top:i,right:i,bottom:i,left:i}}function $t(i){const{x:t,y:e,width:s,height:n}=i;return{width:s,height:n,top:e,left:t,right:t+s,bottom:e+n,x:t,y:e}}function ki(i,t,e){let{reference:s,floating:n}=i;const o=Ft(t),r=Zi(t),a=Ki(r),l=Q(t),c=o==="y",u=s.x+s.width/2-n.width/2,d=s.y+s.height/2-n.height/2,f=s[a]/2-n[a]/2;let p;switch(l){case"top":p={x:u,y:s.y-n.height};break;case"bottom":p={x:u,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-n.width,y:d};break;default:p={x:s.x,y:s.y}}switch(me(t)){case"start":p[r]-=f*(e&&c?-1:1);break;case"end":p[r]+=f*(e&&c?-1:1);break}return p}const Jn=async(i,t,e)=>{const{placement:s="bottom",strategy:n="absolute",middleware:o=[],platform:r}=e,a=o.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:i,floating:t,strategy:n}),{x:u,y:d}=ki(c,s,l),f=s,p={},b=0;for(let v=0;v<a.length;v++){const{name:g,fn:S}=a[v],{x:$,y:x,data:w,reset:k}=await S({x:u,y:d,initialPlacement:s,placement:f,strategy:n,middlewareData:p,rects:c,platform:r,elements:{reference:i,floating:t}});u=$??u,d=x??d,p={...p,[g]:{...p[g],...w}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(f=k.placement),k.rects&&(c=k.rects===!0?await r.getElementRects({reference:i,floating:t,strategy:n}):k.rects),{x:u,y:d}=ki(c,f,l)),v=-1)}return{x:u,y:d,placement:f,strategy:n,middlewareData:p}};async function Ue(i,t){var e;t===void 0&&(t={});const{x:s,y:n,platform:o,rects:r,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=Ht(t,i),b=tn(p),g=a[f?d==="floating"?"reference":"floating":d],S=$t(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(g)))==null||e?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),$=d==="floating"?{x:s,y:n,width:r.floating.width,height:r.floating.height}:r.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),w=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},k=$t(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:$,offsetParent:x,strategy:l}):$);return{top:(S.top-k.top+b.top)/w.y,bottom:(k.bottom-S.bottom+b.bottom)/w.y,left:(S.left-k.left+b.left)/w.x,right:(k.right-S.right+b.right)/w.x}}const Kn=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,s;const{placement:n,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:v=!0,...g}=Ht(i,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const S=Q(n),$=Q(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),w=f||($||!v?[ne(a)]:Qn(a));!f&&b!=="none"&&w.push(...Gn(a,v,b,x));const k=[a,...w],y=await Ue(t,g),T=[];let z=((s=o.flip)==null?void 0:s.overflows)||[];if(u&&T.push(y[S]),d){const N=Un(n,r,x);T.push(y[N[0]],y[N[1]])}if(z=[...z,{placement:n,overflows:T}],!T.every(N=>N<=0)){var q,O;const N=(((q=o.flip)==null?void 0:q.index)||0)+1,xt=k[N];if(xt)return{data:{index:N,overflows:z},reset:{placement:xt}};let J=(O=z.filter(H=>H.overflows[0]<=0).sort((H,W)=>H.overflows[1]-W.overflows[1])[0])==null?void 0:O.placement;if(!J)switch(p){case"bestFit":{var _t;const H=(_t=z.map(W=>[W.placement,W.overflows.filter(bt=>bt>0).reduce((bt,$e)=>bt+$e,0)]).sort((W,bt)=>W[1]-bt[1])[0])==null?void 0:_t[0];H&&(J=H);break}case"initialPlacement":J=a;break}if(n!==J)return{reset:{placement:J}}}return{}}}};function en(i){const t=Ct(...i.map(o=>o.left)),e=Ct(...i.map(o=>o.top)),s=U(...i.map(o=>o.right)),n=U(...i.map(o=>o.bottom));return{x:t,y:e,width:s-t,height:n-e}}function Zn(i){const t=i.slice().sort((n,o)=>n.y-o.y),e=[];let s=null;for(let n=0;n<t.length;n++){const o=t[n];!s||o.y-s.y>s.height/2?e.push([o]):e[e.length-1].push(o),s=o}return e.map(n=>$t(en(n)))}const ts=function(i){return i===void 0&&(i={}),{name:"inline",options:i,async fn(t){const{placement:e,elements:s,rects:n,platform:o,strategy:r}=t,{padding:a=2,x:l,y:c}=Ht(i,t),u=Array.from(await(o.getClientRects==null?void 0:o.getClientRects(s.reference))||[]),d=Zn(u),f=$t(en(u)),p=tn(a);function b(){if(d.length===2&&d[0].left>d[1].right&&l!=null&&c!=null)return d.find(g=>l>g.left-p.left&&l<g.right+p.right&&c>g.top-p.top&&c<g.bottom+p.bottom)||f;if(d.length>=2){if(Ft(e)==="y"){const O=d[0],_t=d[d.length-1],N=Q(e)==="top",xt=O.top,J=_t.bottom,H=N?O.left:_t.left,W=N?O.right:_t.right,bt=W-H,$e=J-xt;return{top:xt,bottom:J,left:H,right:W,width:bt,height:$e,x:H,y:xt}}const g=Q(e)==="left",S=U(...d.map(O=>O.right)),$=Ct(...d.map(O=>O.left)),x=d.filter(O=>g?O.left===$:O.right===S),w=x[0].top,k=x[x.length-1].bottom,y=$,T=S,z=T-y,q=k-w;return{top:w,bottom:k,left:y,right:T,width:z,height:q,x:y,y:w}}return f}const v=await o.getElementRects({reference:{getBoundingClientRect:b},floating:s.floating,strategy:r});return n.reference.x!==v.reference.x||n.reference.y!==v.reference.y||n.reference.width!==v.reference.width||n.reference.height!==v.reference.height?{reset:{rects:v}}:{}}}};async function es(i,t){const{placement:e,platform:s,elements:n}=i,o=await(s.isRTL==null?void 0:s.isRTL(n.floating)),r=Q(e),a=me(e),l=Ft(e)==="y",c=["left","top"].includes(r)?-1:1,u=o&&l?-1:1,d=Ht(t,i);let{mainAxis:f,crossAxis:p,alignmentAxis:b}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return a&&typeof b=="number"&&(p=a==="end"?b*-1:b),l?{x:p*u,y:f*c}:{x:f*c,y:p*u}}const nn=function(i){return{name:"offset",options:i,async fn(t){var e,s;const{x:n,y:o,placement:r,middlewareData:a}=t,l=await es(t,i);return r===((e=a.offset)==null?void 0:e.placement)&&(s=a.arrow)!=null&&s.alignmentOffset?{}:{x:n+l.x,y:o+l.y,data:{...l,placement:r}}}}},is=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){const{x:e,y:s,placement:n}=t,{mainAxis:o=!0,crossAxis:r=!1,limiter:a={fn:g=>{let{x:S,y:$}=g;return{x:S,y:$}}},...l}=Ht(i,t),c={x:e,y:s},u=await Ue(t,l),d=Ft(Q(n)),f=Ji(d);let p=c[f],b=c[d];if(o){const g=f==="y"?"top":"left",S=f==="y"?"bottom":"right",$=p+u[g],x=p-u[S];p=Si($,p,x)}if(r){const g=d==="y"?"top":"left",S=d==="y"?"bottom":"right",$=b+u[g],x=b-u[S];b=Si($,b,x)}const v=a.fn({...t,[f]:p,[d]:b});return{...v,data:{x:v.x-e,y:v.y-s}}}}};function it(i){return sn(i)?(i.nodeName||"").toLowerCase():"#document"}function I(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function dt(i){var t;return(t=(sn(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function sn(i){return i instanceof Node||i instanceof I(i).Node}function Y(i){return i instanceof Element||i instanceof I(i).Element}function F(i){return i instanceof HTMLElement||i instanceof I(i).HTMLElement}function Oi(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof I(i).ShadowRoot}function Vt(i){const{overflow:t,overflowX:e,overflowY:s,display:n}=j(i);return/auto|scroll|overlay|hidden|clip/.test(t+s+e)&&!["inline","contents"].includes(n)}function ns(i){return["table","td","th"].includes(it(i))}function Qe(i){const t=Ye(),e=j(i);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(s=>(e.willChange||"").includes(s))||["paint","layout","strict","content"].some(s=>(e.contain||"").includes(s))}function ss(i){let t=Et(i);for(;F(t)&&!be(t);){if(Qe(t))return t;t=Et(t)}return null}function Ye(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function be(i){return["html","body","#document"].includes(it(i))}function j(i){return I(i).getComputedStyle(i)}function ge(i){return Y(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function Et(i){if(it(i)==="html")return i;const t=i.assignedSlot||i.parentNode||Oi(i)&&i.host||dt(i);return Oi(t)?t.host:t}function on(i){const t=Et(i);return be(t)?i.ownerDocument?i.ownerDocument.body:i.body:F(t)&&Vt(t)?t:on(t)}function ze(i,t,e){var s;t===void 0&&(t=[]),e===void 0&&(e=!0);const n=on(i),o=n===((s=i.ownerDocument)==null?void 0:s.body),r=I(n);return o?t.concat(r,r.visualViewport||[],Vt(n)?n:[],r.frameElement&&e?ze(r.frameElement):[]):t.concat(n,ze(n,[],e))}function rn(i){const t=j(i);let e=parseFloat(t.width)||0,s=parseFloat(t.height)||0;const n=F(i),o=n?i.offsetWidth:e,r=n?i.offsetHeight:s,a=ie(e)!==o||ie(s)!==r;return a&&(e=o,s=r),{width:e,height:s,$:a}}function ln(i){return Y(i)?i:i.contextElement}function wt(i){const t=ln(i);if(!F(t))return et(1);const e=t.getBoundingClientRect(),{width:s,height:n,$:o}=rn(t);let r=(o?ie(e.width):e.width)/s,a=(o?ie(e.height):e.height)/n;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const os=et(0);function an(i){const t=I(i);return!Ye()||!t.visualViewport?os:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function rs(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==I(i)?!1:t}function jt(i,t,e,s){t===void 0&&(t=!1),e===void 0&&(e=!1);const n=i.getBoundingClientRect(),o=ln(i);let r=et(1);t&&(s?Y(s)&&(r=wt(s)):r=wt(i));const a=rs(o,e,s)?an(o):et(0);let l=(n.left+a.x)/r.x,c=(n.top+a.y)/r.y,u=n.width/r.x,d=n.height/r.y;if(o){const f=I(o),p=s&&Y(s)?I(s):s;let b=f,v=b.frameElement;for(;v&&s&&p!==b;){const g=wt(v),S=v.getBoundingClientRect(),$=j(v),x=S.left+(v.clientLeft+parseFloat($.paddingLeft))*g.x,w=S.top+(v.clientTop+parseFloat($.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=x,c+=w,b=I(v),v=b.frameElement}}return $t({width:u,height:d,x:l,y:c})}const ls=[":popover-open",":modal"];function cn(i){return ls.some(t=>{try{return i.matches(t)}catch{return!1}})}function as(i){let{elements:t,rect:e,offsetParent:s,strategy:n}=i;const o=n==="fixed",r=dt(s),a=t?cn(t.floating):!1;if(s===r||a&&o)return e;let l={scrollLeft:0,scrollTop:0},c=et(1);const u=et(0),d=F(s);if((d||!d&&!o)&&((it(s)!=="body"||Vt(r))&&(l=ge(s)),F(s))){const f=jt(s);c=wt(s),u.x=f.x+s.clientLeft,u.y=f.y+s.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x,y:e.y*c.y-l.scrollTop*c.y+u.y}}function cs(i){return Array.from(i.getClientRects())}function un(i){return jt(dt(i)).left+ge(i).scrollLeft}function us(i){const t=dt(i),e=ge(i),s=i.ownerDocument.body,n=U(t.scrollWidth,t.clientWidth,s.scrollWidth,s.clientWidth),o=U(t.scrollHeight,t.clientHeight,s.scrollHeight,s.clientHeight);let r=-e.scrollLeft+un(i);const a=-e.scrollTop;return j(s).direction==="rtl"&&(r+=U(t.clientWidth,s.clientWidth)-n),{width:n,height:o,x:r,y:a}}function hs(i,t){const e=I(i),s=dt(i),n=e.visualViewport;let o=s.clientWidth,r=s.clientHeight,a=0,l=0;if(n){o=n.width,r=n.height;const c=Ye();(!c||c&&t==="fixed")&&(a=n.offsetLeft,l=n.offsetTop)}return{width:o,height:r,x:a,y:l}}function ds(i,t){const e=jt(i,!0,t==="fixed"),s=e.top+i.clientTop,n=e.left+i.clientLeft,o=F(i)?wt(i):et(1),r=i.clientWidth*o.x,a=i.clientHeight*o.y,l=n*o.x,c=s*o.y;return{width:r,height:a,x:l,y:c}}function Ai(i,t,e){let s;if(t==="viewport")s=hs(i,e);else if(t==="document")s=us(dt(i));else if(Y(t))s=ds(t,e);else{const n=an(i);s={...t,x:t.x-n.x,y:t.y-n.y}}return $t(s)}function hn(i,t){const e=Et(i);return e===t||!Y(e)||be(e)?!1:j(e).position==="fixed"||hn(e,t)}function fs(i,t){const e=t.get(i);if(e)return e;let s=ze(i,[],!1).filter(a=>Y(a)&&it(a)!=="body"),n=null;const o=j(i).position==="fixed";let r=o?Et(i):i;for(;Y(r)&&!be(r);){const a=j(r),l=Qe(r);!l&&a.position==="fixed"&&(n=null),(o?!l&&!n:!l&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Vt(r)&&!l&&hn(i,r))?s=s.filter(u=>u!==r):n=a,r=Et(r)}return t.set(i,s),s}function ps(i){let{element:t,boundary:e,rootBoundary:s,strategy:n}=i;const r=[...e==="clippingAncestors"?fs(t,this._c):[].concat(e),s],a=r[0],l=r.reduce((c,u)=>{const d=Ai(t,u,n);return c.top=U(d.top,c.top),c.right=Ct(d.right,c.right),c.bottom=Ct(d.bottom,c.bottom),c.left=U(d.left,c.left),c},Ai(t,a,n));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ms(i){const{width:t,height:e}=rn(i);return{width:t,height:e}}function bs(i,t,e){const s=F(t),n=dt(t),o=e==="fixed",r=jt(i,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=et(0);if(s||!s&&!o)if((it(t)!=="body"||Vt(n))&&(a=ge(t)),s){const d=jt(t,!0,o,t);l.x=d.x+t.clientLeft,l.y=d.y+t.clientTop}else n&&(l.x=un(n));const c=r.left+a.scrollLeft-l.x,u=r.top+a.scrollTop-l.y;return{x:c,y:u,width:r.width,height:r.height}}function Ti(i,t){return!F(i)||j(i).position==="fixed"?null:t?t(i):i.offsetParent}function dn(i,t){const e=I(i);if(!F(i)||cn(i))return e;let s=Ti(i,t);for(;s&&ns(s)&&j(s).position==="static";)s=Ti(s,t);return s&&(it(s)==="html"||it(s)==="body"&&j(s).position==="static"&&!Qe(s))?e:s||ss(i)||e}const gs=async function(i){const t=this.getOffsetParent||dn,e=this.getDimensions;return{reference:bs(i.reference,await t(i.floating),i.strategy),floating:{x:0,y:0,...await e(i.floating)}}};function vs(i){return j(i).direction==="rtl"}const ys={convertOffsetParentRelativeRectToViewportRelativeRect:as,getDocumentElement:dt,getClippingRect:ps,getOffsetParent:dn,getElementRects:gs,getClientRects:cs,getDimensions:ms,getScale:wt,isElement:Y,isRTL:vs},fn=is,pn=Kn,mn=ts,bn=(i,t,e)=>{const s=new Map,n={platform:ys,...e},o={...n.platform,_c:s};return Jn(i,t,{...n,platform:o})};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ws=i=>(...t)=>({_$litDirective$:i,values:t});class Cs{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lt=(i,t)=>{var s;const e=i._$AN;if(e===void 0)return!1;for(const n of e)(s=n._$AO)==null||s.call(n,t,!1),Lt(n,t);return!0},se=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while((e==null?void 0:e.size)===0)},gn=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Ss(t)}};function $s(i){this._$AN!==void 0?(se(this),this._$AM=i,gn(this)):this._$AM=i}function Es(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let o=e;o<s.length;o++)Lt(s[o],!1),se(s[o]);else s!=null&&(Lt(s,!1),se(s));else Lt(this,i)}const Ss=i=>{i.type==xs.CHILD&&(i._$AP??(i._$AP=Es),i._$AQ??(i._$AQ=$s))};class ks extends Cs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),gn(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,n;t!==this.isConnected&&(this.isConnected=t,t?(s=this.reconnected)==null||s.call(this):(n=this.disconnected)==null||n.call(this)),e&&(Lt(this,t),se(this))}setValue(t){if(_s(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=()=>new Os;class Os{}const Ee=new WeakMap,tt=ws(class extends ks{render(i){return Te}update(i,[t]){var s;const e=t!==this.Y;return e&&this.Y!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=t,this.ht=(s=i.options)==null?void 0:s.host,this.rt(this.ct=i.element)),Te}rt(i){if(typeof this.Y=="function"){const t=this.ht??globalThis;let e=Ee.get(t);e===void 0&&(e=new WeakMap,Ee.set(t,e)),e.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),e.set(this.Y,i),i!==void 0&&this.Y.call(this.ht,i)}else this.Y.value=i}get lt(){var i,t;return typeof this.Y=="function"?(i=Ee.get(this.ht??globalThis))==null?void 0:i.get(this.Y):(t=this.Y)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const vn=Object.freeze({left:0,top:0,width:16,height:16}),oe=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),qt=Object.freeze({...vn,...oe}),Ie=Object.freeze({...qt,body:"",hidden:!1}),As=Object.freeze({width:null,height:null}),yn=Object.freeze({...As,...oe});function Ts(i,t=0){const e=i.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(e===""){const n=parseInt(i);return isNaN(n)?0:s(n)}else if(e!==i){let n=0;switch(e){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(i.slice(0,i.length-e.length));return isNaN(o)?0:(o=o/n,o%1===0?s(o):0)}}return t}const Ps=/[\s,]+/;function Ls(i,t){t.split(Ps).forEach(e=>{switch(e.trim()){case"horizontal":i.hFlip=!0;break;case"vertical":i.vFlip=!0;break}})}const _n={...yn,preserveAspectRatio:""};function Pi(i){const t={..._n},e=(s,n)=>i.getAttribute(s)||n;return t.width=e("width",null),t.height=e("height",null),t.rotate=Ts(e("rotate","")),Ls(t,e("flip","")),t.preserveAspectRatio=e("preserveAspectRatio",e("preserveaspectratio","")),t}function zs(i,t){for(const e in _n)if(i[e]!==t[e])return!0;return!1}const zt=/^[a-z0-9]+(-[a-z0-9]+)*$/,Wt=(i,t,e,s="")=>{const n=i.split(":");if(i.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const a=n.pop(),l=n.pop(),c={provider:n.length>0?n[0]:s,prefix:l,name:a};return t&&!te(c)?null:c}const o=n[0],r=o.split("-");if(r.length>1){const a={provider:s,prefix:r.shift(),name:r.join("-")};return t&&!te(a)?null:a}if(e&&s===""){const a={provider:s,prefix:"",name:o};return t&&!te(a,e)?null:a}return null},te=(i,t)=>i?!!((i.provider===""||i.provider.match(zt))&&(t&&i.prefix===""||i.prefix.match(zt))&&i.name.match(zt)):!1;function Is(i,t){const e={};!i.hFlip!=!t.hFlip&&(e.hFlip=!0),!i.vFlip!=!t.vFlip&&(e.vFlip=!0);const s=((i.rotate||0)+(t.rotate||0))%4;return s&&(e.rotate=s),e}function Li(i,t){const e=Is(i,t);for(const s in Ie)s in oe?s in i&&!(s in e)&&(e[s]=oe[s]):s in t?e[s]=t[s]:s in i&&(e[s]=i[s]);return e}function js(i,t){const e=i.icons,s=i.aliases||Object.create(null),n=Object.create(null);function o(r){if(e[r])return n[r]=[];if(!(r in n)){n[r]=null;const a=s[r]&&s[r].parent,l=a&&o(a);l&&(n[r]=[a].concat(l))}return n[r]}return Object.keys(e).concat(Object.keys(s)).forEach(o),n}function Ms(i,t,e){const s=i.icons,n=i.aliases||Object.create(null);let o={};function r(a){o=Li(s[a]||n[a],o)}return r(t),e.forEach(r),Li(i,o)}function xn(i,t){const e=[];if(typeof i!="object"||typeof i.icons!="object")return e;i.not_found instanceof Array&&i.not_found.forEach(n=>{t(n,null),e.push(n)});const s=js(i);for(const n in s){const o=s[n];o&&(t(n,Ms(i,n,o)),e.push(n))}return e}const Rs={provider:"",aliases:{},not_found:{},...vn};function Se(i,t){for(const e in t)if(e in i&&typeof i[e]!=typeof t[e])return!1;return!0}function wn(i){if(typeof i!="object"||i===null)return null;const t=i;if(typeof t.prefix!="string"||!i.icons||typeof i.icons!="object"||!Se(i,Rs))return null;const e=t.icons;for(const n in e){const o=e[n];if(!n.match(zt)||typeof o.body!="string"||!Se(o,Ie))return null}const s=t.aliases||Object.create(null);for(const n in s){const o=s[n],r=o.parent;if(!n.match(zt)||typeof r!="string"||!e[r]&&!s[r]||!Se(o,Ie))return null}return t}const re=Object.create(null);function Bs(i,t){return{provider:i,prefix:t,icons:Object.create(null),missing:new Set}}function nt(i,t){const e=re[i]||(re[i]=Object.create(null));return e[t]||(e[t]=Bs(i,t))}function Ge(i,t){return wn(t)?xn(t,(e,s)=>{s?i.icons[e]=s:i.missing.add(e)}):[]}function Ds(i,t,e){try{if(typeof e.body=="string")return i.icons[t]={...e},!0}catch{}return!1}function Ns(i,t){let e=[];return(typeof i=="string"?[i]:Object.keys(re)).forEach(n=>{(typeof n=="string"&&typeof t=="string"?[t]:Object.keys(re[n]||{})).forEach(r=>{const a=nt(n,r);e=e.concat(Object.keys(a.icons).map(l=>(n!==""?"@"+n+":":"")+r+":"+l))})}),e}let Mt=!1;function Cn(i){return typeof i=="boolean"&&(Mt=i),Mt}function Rt(i){const t=typeof i=="string"?Wt(i,!0,Mt):i;if(t){const e=nt(t.provider,t.prefix),s=t.name;return e.icons[s]||(e.missing.has(s)?null:void 0)}}function $n(i,t){const e=Wt(i,!0,Mt);if(!e)return!1;const s=nt(e.provider,e.prefix);return Ds(s,e.name,t)}function zi(i,t){if(typeof i!="object")return!1;if(typeof t!="string"&&(t=i.provider||""),Mt&&!t&&!i.prefix){let n=!1;return wn(i)&&(i.prefix="",xn(i,(o,r)=>{r&&$n(o,r)&&(n=!0)})),n}const e=i.prefix;if(!te({provider:t,prefix:e,name:"a"}))return!1;const s=nt(t,e);return!!Ge(s,i)}function Ii(i){return!!Rt(i)}function Hs(i){const t=Rt(i);return t?{...qt,...t}:null}function Fs(i){const t={loaded:[],missing:[],pending:[]},e=Object.create(null);i.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let s={provider:"",prefix:"",name:""};return i.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const o=n.provider,r=n.prefix,a=n.name,l=e[o]||(e[o]=Object.create(null)),c=l[r]||(l[r]=nt(o,r));let u;a in c.icons?u=t.loaded:r===""||c.missing.has(a)?u=t.missing:u=t.pending;const d={provider:o,prefix:r,name:a};u.push(d)}),t}function En(i,t){i.forEach(e=>{const s=e.loaderCallbacks;s&&(e.loaderCallbacks=s.filter(n=>n.id!==t))})}function Vs(i){i.pendingCallbacksFlag||(i.pendingCallbacksFlag=!0,setTimeout(()=>{i.pendingCallbacksFlag=!1;const t=i.loaderCallbacks?i.loaderCallbacks.slice(0):[];if(!t.length)return;let e=!1;const s=i.provider,n=i.prefix;t.forEach(o=>{const r=o.icons,a=r.pending.length;r.pending=r.pending.filter(l=>{if(l.prefix!==n)return!0;const c=l.name;if(i.icons[c])r.loaded.push({provider:s,prefix:n,name:c});else if(i.missing.has(c))r.missing.push({provider:s,prefix:n,name:c});else return e=!0,!0;return!1}),r.pending.length!==a&&(e||En([i],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let qs=0;function Ws(i,t,e){const s=qs++,n=En.bind(null,e,s);if(!t.pending.length)return n;const o={id:s,icons:t,callback:i,abort:n};return e.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),n}const je=Object.create(null);function ji(i,t){je[i]=t}function Me(i){return je[i]||je[""]}function Us(i,t=!0,e=!1){const s=[];return i.forEach(n=>{const o=typeof n=="string"?Wt(n,t,e):n;o&&s.push(o)}),s}var Qs={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Ys(i,t,e,s){const n=i.resources.length,o=i.random?Math.floor(Math.random()*n):i.index;let r;if(i.random){let y=i.resources.slice(0);for(r=[];y.length>1;){const T=Math.floor(Math.random()*y.length);r.push(y[T]),y=y.slice(0,T).concat(y.slice(T+1))}r=r.concat(y)}else r=i.resources.slice(o).concat(i.resources.slice(0,o));const a=Date.now();let l="pending",c=0,u,d=null,f=[],p=[];typeof s=="function"&&p.push(s);function b(){d&&(clearTimeout(d),d=null)}function v(){l==="pending"&&(l="aborted"),b(),f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function g(y,T){T&&(p=[]),typeof y=="function"&&p.push(y)}function S(){return{startTime:a,payload:t,status:l,queriesSent:c,queriesPending:f.length,subscribe:g,abort:v}}function $(){l="failed",p.forEach(y=>{y(void 0,u)})}function x(){f.forEach(y=>{y.status==="pending"&&(y.status="aborted")}),f=[]}function w(y,T,z){const q=T!=="success";switch(f=f.filter(O=>O!==y),l){case"pending":break;case"failed":if(q||!i.dataAfterTimeout)return;break;default:return}if(T==="abort"){u=z,$();return}if(q){u=z,f.length||(r.length?k():$());return}if(b(),x(),!i.random){const O=i.resources.indexOf(y.resource);O!==-1&&O!==i.index&&(i.index=O)}l="completed",p.forEach(O=>{O(z)})}function k(){if(l!=="pending")return;b();const y=r.shift();if(y===void 0){if(f.length){d=setTimeout(()=>{b(),l==="pending"&&(x(),$())},i.timeout);return}$();return}const T={status:"pending",resource:y,callback:(z,q)=>{w(T,z,q)}};f.push(T),c++,d=setTimeout(k,i.rotate),e(y,t,T.callback)}return setTimeout(k),S}function Sn(i){const t={...Qs,...i};let e=[];function s(){e=e.filter(a=>a().status==="pending")}function n(a,l,c){const u=Ys(t,a,l,(d,f)=>{s(),c&&c(d,f)});return e.push(u),u}function o(a){return e.find(l=>a(l))||null}return{query:n,find:o,setIndex:a=>{t.index=a},getIndex:()=>t.index,cleanup:s}}function Xe(i){let t;if(typeof i.resources=="string")t=[i.resources];else if(t=i.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:i.path||"/",maxURL:i.maxURL||500,rotate:i.rotate||750,timeout:i.timeout||5e3,random:i.random===!0,index:i.index||0,dataAfterTimeout:i.dataAfterTimeout!==!1}}const ve=Object.create(null),Pt=["https://api.simplesvg.com","https://api.unisvg.com"],ee=[];for(;Pt.length>0;)Pt.length===1||Math.random()>.5?ee.push(Pt.shift()):ee.push(Pt.pop());ve[""]=Xe({resources:["https://api.iconify.design"].concat(ee)});function Mi(i,t){const e=Xe(t);return e===null?!1:(ve[i]=e,!0)}function ye(i){return ve[i]}function Gs(){return Object.keys(ve)}function Ri(){}const ke=Object.create(null);function Xs(i){if(!ke[i]){const t=ye(i);if(!t)return;const e=Sn(t),s={config:t,redundancy:e};ke[i]=s}return ke[i]}function kn(i,t,e){let s,n;if(typeof i=="string"){const o=Me(i);if(!o)return e(void 0,424),Ri;n=o.send;const r=Xs(i);r&&(s=r.redundancy)}else{const o=Xe(i);if(o){s=Sn(o);const r=i.resources?i.resources[0]:"",a=Me(r);a&&(n=a.send)}}return!s||!n?(e(void 0,424),Ri):s.query(t,n,e)().abort}const Bi="iconify2",Bt="iconify",On=Bt+"-count",Di=Bt+"-version",An=36e5,Js=168,Ks=50;function Re(i,t){try{return i.getItem(t)}catch{}}function Je(i,t,e){try{return i.setItem(t,e),!0}catch{}}function Ni(i,t){try{i.removeItem(t)}catch{}}function Be(i,t){return Je(i,On,t.toString())}function De(i){return parseInt(Re(i,On))||0}const gt={local:!0,session:!0},Tn={local:new Set,session:new Set};let Ke=!1;function Zs(i){Ke=i}let Zt=typeof window>"u"?{}:window;function Pn(i){const t=i+"Storage";try{if(Zt&&Zt[t]&&typeof Zt[t].length=="number")return Zt[t]}catch{}gt[i]=!1}function Ln(i,t){const e=Pn(i);if(!e)return;const s=Re(e,Di);if(s!==Bi){if(s){const a=De(e);for(let l=0;l<a;l++)Ni(e,Bt+l.toString())}Je(e,Di,Bi),Be(e,0);return}const n=Math.floor(Date.now()/An)-Js,o=a=>{const l=Bt+a.toString(),c=Re(e,l);if(typeof c=="string"){try{const u=JSON.parse(c);if(typeof u=="object"&&typeof u.cached=="number"&&u.cached>n&&typeof u.provider=="string"&&typeof u.data=="object"&&typeof u.data.prefix=="string"&&t(u,a))return!0}catch{}Ni(e,l)}};let r=De(e);for(let a=r-1;a>=0;a--)o(a)||(a===r-1?(r--,Be(e,r)):Tn[i].add(a))}function zn(){if(!Ke){Zs(!0);for(const i in gt)Ln(i,t=>{const e=t.data,s=t.provider,n=e.prefix,o=nt(s,n);if(!Ge(o,e).length)return!1;const r=e.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,r):r,!0})}}function to(i,t){const e=i.lastModifiedCached;if(e&&e>=t)return e===t;if(i.lastModifiedCached=t,e)for(const s in gt)Ln(s,n=>{const o=n.data;return n.provider!==i.provider||o.prefix!==i.prefix||o.lastModified===t});return!0}function eo(i,t){Ke||zn();function e(s){let n;if(!gt[s]||!(n=Pn(s)))return;const o=Tn[s];let r;if(o.size)o.delete(r=Array.from(o).shift());else if(r=De(n),r>=Ks||!Be(n,r+1))return;const a={cached:Math.floor(Date.now()/An),provider:i.provider,data:t};return Je(n,Bt+r.toString(),JSON.stringify(a))}t.lastModified&&!to(i,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),e("local")||e("session"))}function Hi(){}function io(i){i.iconsLoaderFlag||(i.iconsLoaderFlag=!0,setTimeout(()=>{i.iconsLoaderFlag=!1,Vs(i)}))}function no(i,t){i.iconsToLoad?i.iconsToLoad=i.iconsToLoad.concat(t).sort():i.iconsToLoad=t,i.iconsQueueFlag||(i.iconsQueueFlag=!0,setTimeout(()=>{i.iconsQueueFlag=!1;const{provider:e,prefix:s}=i,n=i.iconsToLoad;delete i.iconsToLoad;let o;if(!n||!(o=Me(e)))return;o.prepare(e,s,n).forEach(a=>{kn(e,a,l=>{if(typeof l!="object")a.icons.forEach(c=>{i.missing.add(c)});else try{const c=Ge(i,l);if(!c.length)return;const u=i.pendingIcons;u&&c.forEach(d=>{u.delete(d)}),eo(i,l)}catch(c){console.error(c)}io(i)})})}))}const Ze=(i,t)=>{const e=Us(i,!0,Cn()),s=Fs(e);if(!s.pending.length){let l=!0;return t&&setTimeout(()=>{l&&t(s.loaded,s.missing,s.pending,Hi)}),()=>{l=!1}}const n=Object.create(null),o=[];let r,a;return s.pending.forEach(l=>{const{provider:c,prefix:u}=l;if(u===a&&c===r)return;r=c,a=u,o.push(nt(c,u));const d=n[c]||(n[c]=Object.create(null));d[u]||(d[u]=[])}),s.pending.forEach(l=>{const{provider:c,prefix:u,name:d}=l,f=nt(c,u),p=f.pendingIcons||(f.pendingIcons=new Set);p.has(d)||(p.add(d),n[c][u].push(d))}),o.forEach(l=>{const{provider:c,prefix:u}=l;n[c][u].length&&no(l,n[c][u])}),t?Ws(t,s,o):Hi},so=i=>new Promise((t,e)=>{const s=typeof i=="string"?Wt(i,!0):i;if(!s){e(i);return}Ze([s||i],n=>{if(n.length&&s){const o=Rt(s);if(o){t({...qt,...o});return}}e(i)})});function oo(i){try{const t=typeof i=="string"?JSON.parse(i):i;if(typeof t.body=="string")return{...t}}catch{}}function ro(i,t){const e=typeof i=="string"?Wt(i,!0,!0):null;if(!e){const o=oo(i);return{value:i,data:o}}const s=Rt(e);if(s!==void 0||!e.prefix)return{value:i,name:e,data:s};const n=Ze([e],()=>t(i,e,Rt(e)));return{value:i,name:e,loading:n}}function Oe(i){return i.hasAttribute("inline")}let In=!1;try{In=navigator.vendor.indexOf("Apple")===0}catch{}function lo(i,t){switch(t){case"svg":case"bg":case"mask":return t}return t!=="style"&&(In||i.indexOf("<a")===-1)?"svg":i.indexOf("currentColor")===-1?"bg":"mask"}const ao=/(-?[0-9.]*[0-9]+[0-9.]*)/g,co=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Ne(i,t,e){if(t===1)return i;if(e=e||100,typeof i=="number")return Math.ceil(i*t*e)/e;if(typeof i!="string")return i;const s=i.split(ao);if(s===null||!s.length)return i;const n=[];let o=s.shift(),r=co.test(o);for(;;){if(r){const a=parseFloat(o);isNaN(a)?n.push(o):n.push(Math.ceil(a*t*e)/e)}else n.push(o);if(o=s.shift(),o===void 0)return n.join("");r=!r}}function uo(i,t="defs"){let e="";const s=i.indexOf("<"+t);for(;s>=0;){const n=i.indexOf(">",s),o=i.indexOf("</"+t);if(n===-1||o===-1)break;const r=i.indexOf(">",o);if(r===-1)break;e+=i.slice(n+1,o).trim(),i=i.slice(0,s).trim()+i.slice(r+1)}return{defs:e,content:i}}function ho(i,t){return i?"<defs>"+i+"</defs>"+t:t}function fo(i,t,e){const s=uo(i);return ho(s.defs,t+s.content+e)}const po=i=>i==="unset"||i==="undefined"||i==="none";function jn(i,t){const e={...qt,...i},s={...yn,...t},n={left:e.left,top:e.top,width:e.width,height:e.height};let o=e.body;[e,s].forEach(v=>{const g=[],S=v.hFlip,$=v.vFlip;let x=v.rotate;S?$?x+=2:(g.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),g.push("scale(-1 1)"),n.top=n.left=0):$&&(g.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),g.push("scale(1 -1)"),n.top=n.left=0);let w;switch(x<0&&(x-=Math.floor(x/4)*4),x=x%4,x){case 1:w=n.height/2+n.top,g.unshift("rotate(90 "+w.toString()+" "+w.toString()+")");break;case 2:g.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:w=n.width/2+n.left,g.unshift("rotate(-90 "+w.toString()+" "+w.toString()+")");break}x%2===1&&(n.left!==n.top&&(w=n.left,n.left=n.top,n.top=w),n.width!==n.height&&(w=n.width,n.width=n.height,n.height=w)),g.length&&(o=fo(o,'<g transform="'+g.join(" ")+'">',"</g>"))});const r=s.width,a=s.height,l=n.width,c=n.height;let u,d;r===null?(d=a===null?"1em":a==="auto"?c:a,u=Ne(d,l/c)):(u=r==="auto"?l:r,d=a===null?Ne(u,c/l):a==="auto"?c:a);const f={},p=(v,g)=>{po(g)||(f[v]=g.toString())};p("width",u),p("height",d);const b=[n.left,n.top,l,c];return f.viewBox=b.join(" "),{attributes:f,viewBox:b,body:o}}function ti(i,t){let e=i.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in t)e+=" "+s+'="'+t[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+e+">"+i+"</svg>"}function mo(i){return i.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function bo(i){return"data:image/svg+xml,"+mo(i)}function Mn(i){return'url("'+bo(i)+'")'}const go=()=>{let i;try{if(i=fetch,typeof i=="function")return i}catch{}};let le=go();function vo(i){le=i}function yo(){return le}function _o(i,t){const e=ye(i);if(!e)return 0;let s;if(!e.maxURL)s=0;else{let n=0;e.resources.forEach(r=>{n=Math.max(n,r.length)});const o=t+".json?icons=";s=e.maxURL-n-e.path.length-o.length}return s}function xo(i){return i===404}const wo=(i,t,e)=>{const s=[],n=_o(i,t),o="icons";let r={type:o,provider:i,prefix:t,icons:[]},a=0;return e.forEach((l,c)=>{a+=l.length+1,a>=n&&c>0&&(s.push(r),r={type:o,provider:i,prefix:t,icons:[]},a=l.length),r.icons.push(l)}),s.push(r),s};function Co(i){if(typeof i=="string"){const t=ye(i);if(t)return t.path}return"/"}const $o=(i,t,e)=>{if(!le){e("abort",424);return}let s=Co(t.provider);switch(t.type){case"icons":{const o=t.prefix,a=t.icons.join(","),l=new URLSearchParams({icons:a});s+=o+".json?"+l.toString();break}case"custom":{const o=t.uri;s+=o.slice(0,1)==="/"?o.slice(1):o;break}default:e("abort",400);return}let n=503;le(i+s).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{e(xo(r)?"abort":"next",r)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?e("abort",o):e("next",n)});return}setTimeout(()=>{e("success",o)})}).catch(()=>{e("next",n)})},Eo={prepare:wo,send:$o};function Fi(i,t){switch(i){case"local":case"session":gt[i]=t;break;case"all":for(const e in gt)gt[e]=t;break}}const Ae="data-style";let Rn="";function So(i){Rn=i}function Vi(i,t){let e=Array.from(i.childNodes).find(s=>s.hasAttribute&&s.hasAttribute(Ae));e||(e=document.createElement("style"),e.setAttribute(Ae,Ae),i.appendChild(e)),e.textContent=":host{display:inline-block;vertical-align:"+(t?"-0.125em":"0")+"}span,svg{display:block}"+Rn}function Bn(){ji("",Eo),Cn(!0);let i;try{i=window}catch{}if(i){if(zn(),i.IconifyPreload!==void 0){const e=i.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(n=>{try{(typeof n!="object"||n===null||n instanceof Array||typeof n.icons!="object"||typeof n.prefix!="string"||!zi(n))&&console.error(s)}catch{console.error(s)}})}if(i.IconifyProviders!==void 0){const e=i.IconifyProviders;if(typeof e=="object"&&e!==null)for(const s in e){const n="IconifyProviders["+s+"] is invalid.";try{const o=e[s];if(typeof o!="object"||!o||o.resources===void 0)continue;Mi(s,o)||console.error(n)}catch{console.error(n)}}}}return{enableCache:e=>Fi(e,!0),disableCache:e=>Fi(e,!1),iconLoaded:Ii,iconExists:Ii,getIcon:Hs,listIcons:Ns,addIcon:$n,addCollection:zi,calculateSize:Ne,buildIcon:jn,iconToHTML:ti,svgToURL:Mn,loadIcons:Ze,loadIcon:so,addAPIProvider:Mi,appendCustomStyle:So,_api:{getAPIConfig:ye,setAPIModule:ji,sendAPIQuery:kn,setFetch:vo,getFetch:yo,listAPIProviders:Gs}}}const He={"background-color":"currentColor"},Dn={"background-color":"transparent"},qi={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Wi={"-webkit-mask":He,mask:He,background:Dn};for(const i in Wi){const t=Wi[i];for(const e in qi)t[i+"-"+e]=qi[e]}function Ui(i){return i?i+(i.match(/^[-0-9.]+$/)?"px":""):"inherit"}function ko(i,t,e){const s=document.createElement("span");let n=i.body;n.indexOf("<a")!==-1&&(n+="<!-- "+Date.now()+" -->");const o=i.attributes,r=ti(n,{...o,width:t.width+"",height:t.height+""}),a=Mn(r),l=s.style,c={"--svg":a,width:Ui(o.width),height:Ui(o.height),...e?He:Dn};for(const u in c)l.setProperty(u,c[u]);return s}let It;function Oo(){try{It=window.trustedTypes.createPolicy("iconify",{createHTML:i=>i})}catch{It=null}}function Ao(i){return It===void 0&&Oo(),It?It.createHTML(i):i}function To(i){const t=document.createElement("span"),e=i.attributes;let s="";e.width||(s="width: inherit;"),e.height||(s+="height: inherit;"),s&&(e.style=s);const n=ti(i.body,e);return t.innerHTML=Ao(n),t.firstChild}function Fe(i){return Array.from(i.childNodes).find(t=>{const e=t.tagName&&t.tagName.toUpperCase();return e==="SPAN"||e==="SVG"})}function Qi(i,t){const e=t.icon.data,s=t.customisations,n=jn(e,s);s.preserveAspectRatio&&(n.attributes.preserveAspectRatio=s.preserveAspectRatio);const o=t.renderedMode;let r;switch(o){case"svg":r=To(n);break;default:r=ko(n,{...qt,...e},o==="mask")}const a=Fe(i);a?r.tagName==="SPAN"&&a.tagName===r.tagName?a.setAttribute("style",r.getAttribute("style")):i.replaceChild(r,a):i.appendChild(r)}function Yi(i,t,e){const s=e&&(e.rendered?e:e.lastRender);return{rendered:!1,inline:t,icon:i,lastRender:s}}function Po(i="iconify-icon"){let t,e;try{t=window.customElements,e=window.HTMLElement}catch{return}if(!t||!e)return;const s=t.get(i);if(s)return s;const n=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends e{constructor(){super();K(this,"_shadowRoot");K(this,"_initialised",!1);K(this,"_state");K(this,"_checkQueued",!1);K(this,"_connected",!1);K(this,"_observer",null);K(this,"_visible",!0);const l=this._shadowRoot=this.attachShadow({mode:"open"}),c=Oe(this);Vi(l,c),this._state=Yi({value:""},c),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return n.slice(0)}attributeChangedCallback(l){switch(l){case"inline":{const c=Oe(this),u=this._state;c!==u.inline&&(u.inline=c,Vi(this._shadowRoot,c));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const l=this.getAttribute("icon");if(l&&l.slice(0,1)==="{")try{return JSON.parse(l)}catch{}return l}set icon(l){typeof l=="object"&&(l=JSON.stringify(l)),this.setAttribute("icon",l)}get inline(){return Oe(this)}set inline(l){l?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(l){l?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const l=this._state;if(l.rendered){const c=this._shadowRoot;if(l.renderedMode==="svg")try{c.lastChild.setCurrentTime(0);return}catch{}Qi(c,l)}}get status(){const l=this._state;return l.rendered?"rendered":l.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const l=this._state,c=this.getAttribute("icon");if(c!==l.icon.value){this._iconChanged(c);return}if(!l.rendered||!this._visible)return;const u=this.getAttribute("mode"),d=Pi(this);(l.attrMode!==u||zs(l.customisations,d)||!Fe(this._shadowRoot))&&this._renderIcon(l.icon,d,u)}_iconChanged(l){const c=ro(l,(u,d,f)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==u)return;const b={value:u,name:d,data:f};b.data?this._gotIconData(b):p.icon=b});c.data?this._gotIconData(c):this._state=Yi(c,this._state.inline,this._state)}_forceRender(){if(!this._visible){const l=Fe(this._shadowRoot);l&&this._shadowRoot.removeChild(l);return}this._queueCheck()}_gotIconData(l){this._checkQueued=!1,this._renderIcon(l,Pi(this),this.getAttribute("mode"))}_renderIcon(l,c,u){const d=lo(l.data.body,u),f=this._state.inline;Qi(this._shadowRoot,this._state={rendered:!0,icon:l,inline:f,customisations:c,attrMode:u,renderedMode:d})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(l=>{const c=l.some(u=>u.isIntersecting);c!==this._visible&&(this._visible=c,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};n.forEach(a=>{a in o.prototype||Object.defineProperty(o.prototype,a,{get:function(){return this.getAttribute(a)},set:function(l){l!==null?this.setAttribute(a,l):this.removeAttribute(a)}})});const r=Bn();for(const a in r)o[a]=o.prototype[a]=r[a];return t.define(i,o),o}Po()||Bn();var Lo=Object.defineProperty,V=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Lo(t,e,n),n},Ot;const D=(Ot=class extends E{constructor(){super(),this.labelHidden=!1,this.active=!1,this.disabled=!1,this.vertical=!1,this.tooltipVisible=!1,this._parent=Z(),this._tooltip=Z(),this._contextMenu=Z(),this._mouseLeave=!1,this.onWindowMouseUp=t=>{const{value:e}=this._contextMenu;!this.contains(t.target)&&e&&(e.visible=!1)},this.mouseLeave=!0,this.addEventListener("click",t=>t.stopPropagation())}set mouseLeave(t){this._mouseLeave=t,t&&(this.tooltipVisible=!1,clearTimeout(this.timeoutID))}get mouseLeave(){return this._mouseLeave}computeTooltipPosition(){const{value:t}=this._parent,{value:e}=this._tooltip;t&&e&&bn(t,e,{placement:"bottom",middleware:[nn(10),mn(),pn(),fn({padding:5})]}).then(s=>{const{x:n,y:o}=s;Object.assign(e.style,{left:`${n}px`,top:`${o}px`})})}onMouseEnter(){if(!(this.tooltipTitle||this.tooltipText))return;this.mouseLeave=!1;const t=this.tooltipTime??700;this.timeoutID=setTimeout(()=>{this.mouseLeave||(this.computeTooltipPosition(),this.tooltipVisible=!0)},t)}onChildrenClick(t){t.stopPropagation();const{value:e}=this._contextMenu;e&&(e.visible=!e.visible)}onSlotChange(t){const{value:e}=this._contextMenu,s=t.target.assignedElements();for(const n of s){if(!(n instanceof Ot)){n.remove(),console.warn("Only bim-button is allowed inside bim-button. Child has been removed.");continue}n.addEventListener("click",()=>e==null?void 0:e.updatePosition())}this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){const t=m`
      <div ${tt(this._tooltip)} class="tooltip">
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
      <div ${tt(this._parent)} class="parent">
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
                  >${this.label}</bim-label
                >
              </div>
            `:null}
        ${this.tooltipTitle||this.tooltipText?t:null}
        ${e?m`
              <div class="children" @click=${this.onChildrenClick}>
                <bim-icon .icon=${"ic:round-plus"}></bim-icon>
              </div>
            `:null}
        <bim-context-menu
          ${tt(this._contextMenu)}
          style="row-gap: var(--bim-ui_size-4xs)"
        >
          <slot @slotchange=${this.onSlotChange}></slot>
        </bim-context-menu>
      </div>
    `}},Ot.styles=C`
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
      padding: 0 0.5rem;
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
  `,Ot);V([h({type:String,reflect:!0})],D.prototype,"label");V([h({type:Boolean,attribute:"label-hidden",reflect:!0})],D.prototype,"labelHidden");V([h({type:Boolean,reflect:!0})],D.prototype,"active");V([h({type:Boolean,reflect:!0,attribute:"disabled"})],D.prototype,"disabled");V([h({type:String,reflect:!0})],D.prototype,"icon");V([h({type:Boolean,reflect:!0})],D.prototype,"vertical");V([h({type:Number,attribute:"tooltip-time",reflect:!0})],D.prototype,"tooltipTime");V([h({type:Boolean,attribute:"tooltip-visible",reflect:!0})],D.prototype,"tooltipVisible");V([h({type:String,attribute:"tooltip-title",reflect:!0})],D.prototype,"tooltipTitle");V([h({type:String,attribute:"tooltip-text",reflect:!0})],D.prototype,"tooltipText");let zo=D;var Io=Object.defineProperty,Ut=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Io(t,e,n),n};const ii=class ii extends E{constructor(){super(...arguments),this.checked=!1,this.inverted=!1,this.onValueChange=new Event("change")}get value(){return this.checked}onChange(t){t.stopPropagation(),this.checked=t.target.checked,this.dispatchEvent(this.onValueChange)}render(){return m`
      <div class="parent">
        ${this.label?m`<bim-label .icon="${this.icon}">${this.label}</bim-label> `:null}
        <input
          type="checkbox"
          aria-label=${this.label||this.name||"Checkbox Input"}
          @change="${this.onChange}"
          .checked="${this.checked}"
        />
      </div>
    `}};ii.styles=C`
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
  `;let st=ii;Ut([h({type:String,reflect:!0})],st.prototype,"icon");Ut([h({type:String,reflect:!0})],st.prototype,"name");Ut([h({type:String,reflect:!0})],st.prototype,"label");Ut([h({type:Boolean,reflect:!0})],st.prototype,"checked");Ut([h({type:Boolean,reflect:!0})],st.prototype,"inverted");var jo=Object.defineProperty,At=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&jo(t,e,n),n};const ni=class ni extends E{constructor(){super(...arguments),this.vertical=!1,this.color="#bcf124",this._colorInput=Z(),this._textInput=Z(),this.onValueChange=new Event("input"),this.onOpacityInput=t=>{const e=t.target;this.opacity=e.value,this.dispatchEvent(this.onValueChange)}}set value(t){const{color:e,opacity:s}=t;this.color=e,s&&(this.opacity=s)}get value(){const t={color:this.color};return this.opacity&&(t.opacity=this.opacity),t}onColorInput(t){t.stopPropagation();const{value:e}=this._colorInput;e&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}onTextInput(t){t.stopPropagation();const{value:e}=this._textInput;if(!e)return;const{value:s}=e;let n=s.replace(/[^a-fA-F0-9]/g,"");n.startsWith("#")||(n=`#${n}`),e.value=n.slice(0,7),e.value.length===7&&(this.color=e.value,this.dispatchEvent(this.onValueChange))}focus(){const{value:t}=this._colorInput;t&&t.click()}render(){return m`
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
                ${tt(this._colorInput)}
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
                ${tt(this._textInput)}
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
    `}};ni.styles=C`
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
  `;let G=ni;At([h({type:String,reflect:!0})],G.prototype,"name");At([h({type:String,reflect:!0})],G.prototype,"label");At([h({type:String,reflect:!0})],G.prototype,"icon");At([h({type:Boolean,reflect:!0})],G.prototype,"vertical");At([h({type:Number,reflect:!0})],G.prototype,"opacity");At([h({type:String,reflect:!0})],G.prototype,"color");const Mo=C`
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
`,Ro=C`
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
`,yt={scrollbar:Mo,globalStyles:Ro};var Bo=Object.defineProperty,Do=Object.getOwnPropertyDescriptor,No=(i,t,e,s)=>{for(var n=Do(t,e),o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Bo(t,e,n),n};const si=class si extends E{constructor(){super(...arguments),this._visible=!1,this._middleware={name:"middleware",async fn(t){const{right:e,top:s}=await Ue(t);return t.x-=Math.sign(e)===1?e+5:0,t.y-=Math.sign(s)===1?s+5:0,t}}}get visible(){return this._visible}set visible(t){this._visible=t,t&&this.updatePosition()}async updatePosition(t){const e=t||this.parentNode;if(!e){this.visible=!1,console.warn("No target element found for context-menu.");return}const s=await bn(e,this,{placement:"right",middleware:[nn(10),mn(),pn(),fn({padding:5}),this._middleware]}),{x:n,y:o}=s;this.style.left=`${n}px`,this.style.top=`${o}px`}render(){return m` <slot></slot> `}};si.styles=[yt.scrollbar,C`
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
    `];let ae=si;No([h({type:Boolean,reflect:!0})],ae.prototype,"visible");class Ho extends E{constructor(){super(...arguments),this._lazyLoadObserver=null,this._visibleElements=[],this.ELEMENTS_BEFORE_OBSERVER=20,this.useObserver=!1,this.elements=new Set,this.observe=t=>{if(!this.useObserver)return;for(const s of t)this.elements.add(s);const e=t.slice(this.ELEMENTS_BEFORE_OBSERVER);for(const s of e)s.remove();this.observeLastElement()}}set visibleElements(t){this._visibleElements=this.useObserver?t:[],this.requestUpdate()}get visibleElements(){return this._visibleElements}getLazyObserver(){if(!this.useObserver)return null;if(this._lazyLoadObserver)return this._lazyLoadObserver;const t=new IntersectionObserver(e=>{const s=e[0];if(!s.isIntersecting)return;const n=s.target;t.unobserve(n);const o=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length,r=[...this.elements][o];r&&(this.visibleElements=[...this.visibleElements,r],t.observe(r))},{threshold:.5});return t}observeLastElement(){const t=this.getLazyObserver();if(!t)return;const e=this.ELEMENTS_BEFORE_OBSERVER+this.visibleElements.length-1,s=[...this.elements][e];s&&t.observe(s)}resetVisibleElements(){const t=this.getLazyObserver();if(t){for(const e of this.elements)t.unobserve(e);this.visibleElements=[],this.observeLastElement()}}static create(t,e){const s=document.createDocumentFragment();if(t.length===0)return Pe(t(),s),s.firstElementChild;if(!e)throw new Error("UIComponent: Initial state is required for statefull components.");let n=e;const o=t,r=l=>(n={...n,...l},Pe(o(n),s),n);return r(e),[s.firstElementChild,r]}}const ce=(i,t=!0)=>{let e={};for(const s of i.children){const n=s,o=n.getAttribute("name")||n.getAttribute("label");if(o){if("value"in n){const r=n.value;if(typeof r=="object"&&!Array.isArray(r)&&Object.keys(r).length===0)continue;e[o]=n.value}else if(t){const r=ce(n);if(Object.keys(r).length===0)continue;e[o]=r}}else t&&(e={...e,...ce(n)})}return e},_e=i=>i==="true"||i==="false"?i==="true":i&&!isNaN(Number(i))&&i.trim()!==""?Number(i):i,Fo=[">=","<=","=",">","<","?","/","#"];function Gi(i){const t=Fo.find(a=>i.split(a).length===2),e=i.split(t).map(a=>a.trim()),[s,n]=e,o=n.startsWith("'")&&n.endsWith("'")?n.replace(/'/g,""):_e(n);return{key:s,condition:t,value:o}}const Ve=i=>{try{const t=[],e=i.split(/&(?![^()]*\))/).map(s=>s.trim());for(const s of e){const n=!s.startsWith("(")&&!s.endsWith(")"),o=s.startsWith("(")&&s.endsWith(")");if(n){const r=Gi(s);t.push(r)}if(o){const c={operator:"&",queries:s.replace(/^(\()|(\))$/g,"").split("&").map(u=>u.trim()).map((u,d)=>{const f=Gi(u);return d>0&&(f.operator="&"),f})};t.push(c)}}return t}catch{return null}},Xi=(i,t,e)=>{let s=!1;switch(t){case"=":s=i===e;break;case"?":s=String(i).includes(String(e));break;case"<":(typeof i=="number"||typeof e=="number")&&(s=i<e);break;case"<=":(typeof i=="number"||typeof e=="number")&&(s=i<=e);break;case">":(typeof i=="number"||typeof e=="number")&&(s=i>e);break;case">=":(typeof i=="number"||typeof e=="number")&&(s=i>=e);break;case"/":s=String(i).startsWith(String(e));break}return s};var Vo=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,ft=(i,t,e,s)=>{for(var n=s>1?void 0:s?qo(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Vo(t,e,n),n};const oi=class oi extends E{constructor(){super(...arguments),this.checked=!1,this.checkbox=!1,this.noMark=!1,this.vertical=!1}get value(){return this._value!==void 0?this._value:this.label?_e(this.label):this.label}set value(t){this._value=t}render(){return m`
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
    `}};oi.styles=C`
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
  `;let A=oi;ft([h({type:String,reflect:!0})],A.prototype,"img",2);ft([h({type:String,reflect:!0})],A.prototype,"label",2);ft([h({type:String,reflect:!0})],A.prototype,"icon",2);ft([h({type:Boolean,reflect:!0})],A.prototype,"checked",2);ft([h({type:Boolean,reflect:!0})],A.prototype,"checkbox",2);ft([h({type:Boolean,attribute:"no-mark",reflect:!0})],A.prototype,"noMark",2);ft([h({converter:{fromAttribute(i){return i&&_e(i)}}})],A.prototype,"value",1);ft([h({type:Boolean,reflect:!0})],A.prototype,"vertical",2);var Wo=Object.defineProperty,Uo=Object.getOwnPropertyDescriptor,pt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Uo(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Wo(t,e,n),n};const ri=class ri extends Ho{constructor(){super(),this.multiple=!1,this.required=!1,this.vertical=!1,this._inputContainer=Z(),this._listElement=Z(),this._visible=!1,this._value=[],this.onValueChange=new Event("change"),this.onWindowMouseUp=t=>{this.visible&&(this.contains(t.target)||(this.visible=!1))},this.onOptionClick=t=>{const e=t.target,s=this._value.includes(e);if(!this.multiple&&!this.required&&!s)this._value=[e];else if(!this.multiple&&!this.required&&s)this._value=[];else if(!this.multiple&&this.required&&!s)this._value=[e];else if(this.multiple&&!this.required&&!s)this._value=[...this._value,e];else if(this.multiple&&!this.required&&s)this._value=this._value.filter(n=>n!==e);else if(this.multiple&&this.required&&!s)this._value=[...this._value,e];else if(this.multiple&&this.required&&s){const n=this._value.filter(o=>o!==e);n.length!==0&&(this._value=n)}this.updateOptionsState(),this.dispatchEvent(this.onValueChange)},this.useObserver=!0}set visible(t){this._visible=t,t||this.resetVisibleElements()}get visible(){return this._visible}set value(t){if(this.required&&Object.keys(t).length===0)return;const e=[];for(const s of t){const n=this.findOption(s);if(n&&(e.push(n),!this.multiple&&Object.keys(t).length>1))break}this._value=e,this.updateOptionsState(),this.dispatchEvent(this.onValueChange)}get value(){return this._value.filter(e=>e instanceof A&&e.checked).map(e=>e.value)}get _options(){const t=[...this.elements];for(const e of this.children)e instanceof A&&t.push(e);return t}onSlotChange(t){const e=t.target.assignedElements();this.observe(e);for(const s of e){if(!(s instanceof A)){s.remove();continue}s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick)}}updateOptionsState(){for(const t of this._options)t instanceof A&&(this._value.includes(t)?t.checked=!0:t.checked=!1)}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.onWindowMouseUp)}firstUpdated(){for(const t of this.children)t instanceof A&&t.checked&&this._value.push(t)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.onWindowMouseUp)}render(){let t,e,s;if(this._value.length===0)t="Select an option...";else if(this._value.length===1){const n=this._value[0];t=(n==null?void 0:n.label)||(n==null?void 0:n.value),e=n==null?void 0:n.img,s=n==null?void 0:n.icon}else t=`Multiple (${this._value.length})`;return m`
      <bim-input
        title=${this.label??""}
        .label=${this.label}
        .icon=${this.icon}
        .vertical=${this.vertical}
      >
        <div
          ${tt(this._inputContainer)}
          class="input"
          @click=${()=>this.visible=!this.visible}
        >
          <bim-label
            .img=${e}
            .icon=${s}
            style="overflow: hidden;"
            >${t}</bim-label
          >
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
        <bim-context-menu ${tt(this._listElement)} .visible=${this.visible}>
          <slot @slotchange=${this.onSlotChange}></slot>
          ${this.visibleElements.map(n=>n)}
        </bim-context-menu>
      </bim-input>
    `}};ri.styles=[yt.scrollbar,C`
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
    `];let R=ri;pt([h({type:String,reflect:!0})],R.prototype,"name",2);pt([h({type:String,reflect:!0})],R.prototype,"icon",2);pt([h({type:String,reflect:!0})],R.prototype,"label",2);pt([h({type:Boolean,reflect:!0})],R.prototype,"multiple",2);pt([h({type:Boolean,reflect:!0})],R.prototype,"required",2);pt([h({type:Boolean,reflect:!0})],R.prototype,"vertical",2);pt([h({type:Boolean,reflect:!0})],R.prototype,"visible",1);pt([Nt()],R.prototype,"_value",2);var Qo=Object.defineProperty,Nn=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Qo(t,e,n),n};const li=class li extends E{constructor(){super(...arguments),this.floating=!1,this.layouts={}}getUniqueAreasFromTemplate(t){const n=t.split(`
`).map(r=>r.trim()).map(r=>r.split('"')[1]).filter(r=>r!==void 0).flatMap(r=>r.split(/\s+/));return[...new Set(n)].filter(r=>r!=="")}firstUpdated(){this._onLayoutChange=new Event("layoutchange")}render(){if(this.layout){if(this.layouts[this.layout]){this.innerHTML="";const t=this.layouts[this.layout],s=this.getUniqueAreasFromTemplate(t.template).map(n=>{const o=t.elements[n];return o&&(o.style.gridArea=n),o}).filter(n=>!!n);this.style.gridTemplate=t.template,this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange),this.append(...s)}}else this.innerHTML="",this.style.gridTemplate="",this._onLayoutChange&&this.dispatchEvent(this._onLayoutChange);return m`<slot></slot>`}};li.styles=C`
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
  `;let Dt=li;Nn([h({type:Boolean,reflect:!0})],Dt.prototype,"floating");Nn([h({type:String,reflect:!0})],Dt.prototype,"layout");const pe=class pe extends E{render(){return m`
      <iconify-icon .icon=${this.icon} height="none"></iconify-icon>
    `}};pe.styles=C`
    :host {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
    }

    iconify-icon {
      height: var(--bim-icon--fz, var(--bim-ui_size-sm));
      width: var(--bim-icon--fz, var(--bim-ui_size-sm));
      color: var(--bim-icon--c);
    }
  `,pe.properties={icon:{type:String}};let qe=pe;var Yo=Object.defineProperty,xe=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Yo(t,e,n),n};const ai=class ai extends E{constructor(){super(),this.onValueChange=new Event("change"),this.vertical=!1}get value(){const t={};for(const e of this.children){const s=e;"value"in s?t[s.name||s.label]=s.value:"checked"in s&&(t[s.name||s.label]=s.checked)}return t}set value(t){const e=[...this.children];for(const s in t){const n=e.find(a=>{const l=a;return l.name===s||l.label===s});if(!n)continue;const o=n,r=t[s];typeof r=="boolean"?o.checked=r:o.value=r}}render(){return m`
      <div class="parent">
        ${this.label||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
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
    }

    :host(:not([vertical])) .input {
      flex: 1;
      justify-content: flex-end;
    }

    :host(:not([vertical])[label]) .input {
      max-width: fit-content;
    }
  `;let vt=ai;xe([h({type:String,reflect:!0})],vt.prototype,"name");xe([h({type:String,reflect:!0})],vt.prototype,"label");xe([h({type:String,reflect:!0})],vt.prototype,"icon");xe([h({type:Boolean,reflect:!0})],vt.prototype,"vertical");var Go=Object.defineProperty,Qt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&Go(t,e,n),n};const ci=class ci extends E{constructor(){super(...arguments),this.labelHidden=!1,this.iconHidden=!1,this.vertical=!1}get value(){return this.textContent?_e(this.textContent):this.textContent}render(){return m`
      <div class="parent" .title=${this.textContent??""}>
        ${this.img?m`<img .src=${this.img} .alt=${this.textContent||""} />`:null}
        ${!this.iconHidden&&this.icon?m`<bim-icon .icon=${this.icon}></bim-icon>`:null}
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
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 1.5)
      );
    }

    :host([vertical]) img {
      max-height: var(
        --bim-label_icon--sz,
        calc(var(--bim-label--fz, var(--bim-ui_size-xs)) * 4)
      );
    }
  `;let ot=ci;Qt([h({type:String,reflect:!0})],ot.prototype,"img");Qt([h({type:Boolean,attribute:"label-hidden",reflect:!0})],ot.prototype,"labelHidden");Qt([h({type:String,reflect:!0})],ot.prototype,"icon");Qt([h({type:Boolean,attribute:"icon-hidden",reflect:!0})],ot.prototype,"iconHidden");Qt([h({type:Boolean,reflect:!0})],ot.prototype,"vertical");var Xo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,M=(i,t,e,s)=>{for(var n=s>1?void 0:s?Jo(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Xo(t,e,n),n};const ui=class ui extends E{constructor(){super(...arguments),this._value=0,this.vertical=!1,this.slider=!1,this._input=Z(),this.onValueChange=new Event("change")}set value(t){this.setValue(t.toString())}get value(){return this._value}onChange(t){t.stopPropagation();const{value:e}=this._input;e&&this.setValue(e.value)}setValue(t){const{value:e}=this._input;let s=t;if(s=s.replace(/[^0-9.-]/g,""),s=s.replace(/(\..*)\./g,"$1"),s.endsWith(".")||(s.lastIndexOf("-")>0&&(s=s[0]+s.substring(1).replace(/-/g,"")),s==="-"||s==="-0"))return;let n=Number(s);Number.isNaN(n)||(n=this.min!==void 0?Math.max(n,this.min):n,n=this.max!==void 0?Math.min(n,this.max):n,this.value!==n&&(this._value=n,e&&(e.value=this.value.toString()),this.requestUpdate(),this.dispatchEvent(this.onValueChange)))}onBlur(){const{value:t}=this._input;t&&Number.isNaN(Number(t.value))&&(t.value=this.value.toString())}onSliderMouseDown(t){document.body.style.cursor="w-resize";const{clientX:e}=t,s=this.value;let n=!1;const o=l=>{var v;n=!0;const{clientX:c}=l,u=this.step??1,d=((v=u.toString().split(".")[1])==null?void 0:v.length)||0,f=1/(this.sensitivity??1),p=(c-e)/f;if(Math.floor(Math.abs(p))!==Math.abs(p))return;const b=s+p*u;this.setValue(b.toFixed(d))},r=()=>{this.slider=!0,this.removeEventListener("blur",r)},a=()=>{document.removeEventListener("mousemove",o),document.body.style.cursor="default",n?n=!1:(this.addEventListener("blur",r),this.slider=!1,requestAnimationFrame(()=>this.focus())),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",a)}onFocus(t){t.stopPropagation();const e=s=>{s.key==="Escape"&&(this.blur(),window.removeEventListener("keydown",e))};window.addEventListener("keydown",e)}connectedCallback(){super.connectedCallback(),this.min&&this.min>this.value&&(this._value=this.min),this.max&&this.max<this.value&&(this._value=this.max)}focus(){const{value:t}=this._input;t&&t.focus()}render(){const t=m`
      ${this.pref||this.icon?m`<bim-label
            style="pointer-events: auto"
            @mousedown=${this.onSliderMouseDown}
            .icon=${this.icon}
            >${this.pref}</bim-label
          >`:null}
      <input
        ${tt(this._input)}
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
            >${this.suffix}</bim-label
          >`:null}
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
              .icon=${this.icon}
              >${`${this.pref}: `}</bim-label
            >`:null}
        <bim-label style="z-index: 1;">${this.value}</bim-label>
        ${this.suffix?m`<bim-label style="z-index: 1;">${this.suffix}</bim-label>`:null}
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
      padding: 0 0.5rem;
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
  `;let P=ui;M([h({type:String,reflect:!0})],P.prototype,"name",2);M([h({type:String,reflect:!0})],P.prototype,"icon",2);M([h({type:String,reflect:!0})],P.prototype,"label",2);M([h({type:String,reflect:!0})],P.prototype,"pref",2);M([h({type:Number,reflect:!0})],P.prototype,"min",2);M([h({type:Number,reflect:!0})],P.prototype,"value",1);M([h({type:Number,reflect:!0})],P.prototype,"step",2);M([h({type:Number,reflect:!0})],P.prototype,"sensitivity",2);M([h({type:Number,reflect:!0})],P.prototype,"max",2);M([h({type:String,reflect:!0})],P.prototype,"suffix",2);M([h({type:Boolean,reflect:!0})],P.prototype,"vertical",2);M([h({type:Boolean,reflect:!0})],P.prototype,"slider",2);var Ko=Object.defineProperty,Zo=Object.getOwnPropertyDescriptor,Yt=(i,t,e,s)=>{for(var n=s>1?void 0:s?Zo(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&Ko(t,e,n),n};const hi=class hi extends E{constructor(){super(...arguments),this.onValueChange=new Event("change"),this._hidden=!1,this.headerHidden=!1,this.activationButton=document.createElement("bim-button")}set hidden(t){this._hidden=t,this.activationButton.active=!t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}get value(){return ce(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}connectedCallback(){super.connectedCallback(),this.activationButton.active=!this.hidden,this.activationButton.onclick=()=>this.hidden=!this.hidden}disconnectedCallback(){super.disconnectedCallback(),this.activationButton.remove()}collapseSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!0}expandSections(){const t=this.querySelectorAll("bim-panel-section");for(const e of t)e.collapsed=!1}render(){return this.activationButton.icon=this.icon,this.activationButton.label=this.label||this.name,this.activationButton.tooltipTitle=this.label||this.name,m`
      <div class="parent">
        ${this.label||this.name||this.icon?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        <div class="sections">
          <slot></slot>
        </div>
      </div>
    `}};hi.styles=[yt.scrollbar,C`
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
    `];let rt=hi;Yt([h({type:String,reflect:!0})],rt.prototype,"icon",2);Yt([h({type:String,reflect:!0})],rt.prototype,"name",2);Yt([h({type:String,reflect:!0})],rt.prototype,"label",2);Yt([h({type:Boolean,reflect:!0})],rt.prototype,"hidden",1);Yt([h({type:Boolean,attribute:"header-hidden",reflect:!0})],rt.prototype,"headerHidden",2);var tr=Object.defineProperty,Gt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&tr(t,e,n),n};const di=class di extends E{constructor(){super(...arguments),this.onValueChange=new Event("change")}get value(){return ce(this)}set value(t){const e=[...this.children];for(const s in t){const n=e.find(r=>{const a=r;return a.name===s||a.label===s});if(!n)continue;const o=n;o.value=t[s]}}onHeaderClick(){this.fixed||(this.collapsed=!this.collapsed)}render(){const t=this.label||this.icon||this.name||this.fixed,e=m`<svg
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
        ${this.label||this.icon||this.name?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
        ${this.fixed?null:n}
      </div>
    `;return m`
      <div class="parent">
        ${t?o:null}
        <div class="components">
          <slot></slot>
        </div>
      </div>
    `}};di.styles=[yt.scrollbar,C`
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
    `];let lt=di;Gt([h({type:String,reflect:!0})],lt.prototype,"icon");Gt([h({type:String,reflect:!0})],lt.prototype,"label");Gt([h({type:String,reflect:!0})],lt.prototype,"name");Gt([h({type:Boolean,reflect:!0})],lt.prototype,"fixed");Gt([h({type:Boolean,reflect:!0})],lt.prototype,"collapsed");var er=Object.defineProperty,Xt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&er(t,e,n),n};const fi=class fi extends E{constructor(){super(...arguments),this.vertical=!1,this.onValueChange=new Event("change"),this._canEmitEvents=!1,this._value=document.createElement("bim-option"),this.onOptionClick=t=>{this._value=t.target,this.dispatchEvent(this.onValueChange);for(const e of this.children)e instanceof A&&(e.checked=e===t.target)}}get _options(){return[...this.querySelectorAll("bim-option")]}set value(t){const e=this.findOption(t);if(e){for(const s of this._options)s.checked=s===e;this._value=e,this._canEmitEvents&&this.dispatchEvent(this.onValueChange)}}get value(){return this._value.value}onSlotChange(t){const e=t.target.assignedElements();for(const s of e)s instanceof A&&(s.noMark=!0,s.removeEventListener("click",this.onOptionClick),s.addEventListener("click",this.onOptionClick))}findOption(t){return this._options.find(s=>s instanceof A?s.label===t||s.value===t:!1)}firstUpdated(){const t=[...this.children].find(e=>e instanceof A&&e.checked);t&&(this._value=t)}render(){return m`
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
      --bim-label--c: white;
      background-color: var(--bim-ui_color-main);
    }
  `;let at=fi;Xt([h({type:String,reflect:!0})],at.prototype,"name");Xt([h({type:String,reflect:!0})],at.prototype,"icon");Xt([h({type:String,reflect:!0})],at.prototype,"label");Xt([h({type:Boolean,reflect:!0})],at.prototype,"vertical");Xt([Nt()],at.prototype,"_value");var ir=Object.defineProperty,nr=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&ir(t,e,n),n};const pi=class pi extends E{constructor(){super(...arguments),this.column="",this.columnIndex=0,this.rowData={}}get data(){return this.column?this.rowData[this.column]:null}render(){return m`
      <style>
        :host {
          grid-area: ${this.column??"unset"};
        }
      </style>
      <slot></slot>
    `}};pi.styles=C`
    :host {
      padding: 0.25rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([data-column-index="0"]:not([data-cell-header])) {
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
  `;let ue=pi;nr([h({type:String,reflect:!0})],ue.prototype,"column");var sr=Object.defineProperty,or=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&sr(t,e,n),n};const mi=class mi extends E{constructor(){super(...arguments),this._groups=[],this.data=[],this.table=this.closest("bim-table")}toggleGroups(t,e=!1){for(const s of this._groups)s.childrenHidden=typeof t>"u"?!s.childrenHidden:!t,e&&s.toggleChildren(t,e)}render(){return this._groups=[],m`
      ${this.data.map(t=>{const e=document.createElement("bim-table-group");return this._groups.push(e),e.table=this.table,e.data=t,e})}
    `}};mi.styles=C`
    :host {
      position: relative;
      grid-area: Children;
    }

    :host([hidden]) {
      display: none;
    }
  `;let he=mi;or([h({type:Array,attribute:!1})],he.prototype,"data");var rr=Object.defineProperty,lr=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&rr(t,e,n),n};const bi=class bi extends E{constructor(){super(...arguments),this.data={data:{}},this.childrenHidden=!0,this.table=this.closest("bim-table")}connectedCallback(){super.connectedCallback(),this.table&&this.table.expanded?this.childrenHidden=!1:this.childrenHidden=!0}toggleChildren(t,e=!1){this._children&&(this.childrenHidden=typeof t>"u"?!this.childrenHidden:!t,e&&this._children.toggleGroups(t,e))}render(){var d,f;const t=((d=this.table)==null?void 0:d.getGroupIndentation(this.data))??0,e=m`
      <style>
        .branch-vertical {
          left: ${t+.5625}rem;
        }
      </style>
      <div class="branch branch-vertical"></div>
    `,s=document.createElement("div");s.classList.add("branch","branch-horizontal"),s.style.left=`${t-1+.5625}rem`;const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("height","9.5"),n.setAttribute("width","7.5"),n.setAttribute("viewBox","0 0 4.6666672 7.3333333");const o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d","m 1.7470835,6.9583848 2.5899999,-2.59 c 0.39,-0.39 0.39,-1.02 0,-1.41 L 1.7470835,0.36838483 c -0.63,-0.62000003 -1.71000005,-0.18 -1.71000005,0.70999997 v 5.17 c 0,0.9 1.08000005,1.34 1.71000005,0.71 z"),n.append(o);const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("height","6.5"),r.setAttribute("width","9.5"),r.setAttribute("viewBox","0 0 5.9111118 5.0175439");const a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d","M -0.33616196,1.922522 2.253838,4.5125219 c 0.39,0.39 1.02,0.39 1.41,0 L 6.2538379,1.922522 c 0.6200001,-0.63 0.18,-1.71000007 -0.7099999,-1.71000007 H 0.37383804 c -0.89999997,0 -1.33999997,1.08000007 -0.71,1.71000007 z"),r.append(a);const l=document.createElement("div");l.addEventListener("click",p=>{p.stopPropagation(),this.toggleChildren()}),l.classList.add("caret"),l.style.left=`${.125+t}rem`,this.childrenHidden?l.append(n):l.append(r);const c=document.createElement("bim-table-row");c.table=this.table,c.data=this.data.data,(f=this.table)==null||f.dispatchEvent(new CustomEvent("rowcreated",{detail:{row:c}})),this.data.children&&c.append(l),t!==0&&(!this.data.children||this.childrenHidden)&&c.append(s);let u;return this.data.children&&(u=document.createElement("bim-table-children"),this._children=u,u.table=this.table,u.data=this.data.children),m`
      <div class="parent">
        ${this.data.children&&!this.childrenHidden?e:null}
        ${c} ${this.childrenHidden?null:u}
      </div>
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
      top: 1.125rem;
      bottom: 1.125rem;
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
  `;let de=bi;lr([h({type:Boolean,attribute:"children-hidden",reflect:!0})],de.prototype,"childrenHidden");var ar=Object.defineProperty,Jt=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&ar(t,e,n),n};const gi=class gi extends E{constructor(){super(...arguments),this.columns=[],this.hiddenColumns=[],this.data={},this.isHeader=!1,this.table=this.closest("bim-table"),this.onTableColumnsChange=()=>{this.table&&(this.columns=this.table.columns)},this.onTableColumnsHidden=()=>{this.table&&(this.hiddenColumns=this.table.hiddenColumns)},this._observer=new IntersectionObserver(t=>{this._intersecting=t[0].isIntersecting},{rootMargin:"36px"})}get _columnNames(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.name)}get _columnWidths(){return this.columns.filter(s=>!this.hiddenColumns.includes(s.name)).map(s=>s.width)}connectedCallback(){super.connectedCallback(),this._observer.observe(this),this.table&&(this.columns=this.table.columns,this.hiddenColumns=this.table.hiddenColumns,this.table.addEventListener("columnschange",this.onTableColumnsChange),this.table.addEventListener("columnshidden",this.onTableColumnsHidden))}disconnectedCallback(){super.disconnectedCallback(),this._observer.unobserve(this),this.table&&(this.columns=[],this.hiddenColumns=[],this.table.removeEventListener("columnschange",this.onTableColumnsChange),this.table.removeEventListener("columnshidden",this.onTableColumnsHidden))}compute(){var n,o,r;const t=((n=this.table)==null?void 0:n.getRowIndentation(this.data))??0,e=this.isHeader?this.data:((o=this.table)==null?void 0:o.computeRowDeclaration(this.data))??this.data,s=[];for(const a in e){if(this.hiddenColumns.includes(a))continue;const l=e[a];let c;if(typeof l=="string"||typeof l=="boolean"||typeof l=="number"?(c=document.createElement("bim-label"),c.textContent=String(l)):l instanceof HTMLElement?c=l:(c=document.createDocumentFragment(),Pe(l,c)),!c)continue;const u=document.createElement("bim-table-cell");u.append(c),u.column=a,this._columnNames.indexOf(a)===0&&!this.isHeader&&(u.style.marginLeft=`${t+.125}rem`);const d=this._columnNames.indexOf(a);u.setAttribute("data-column-index",String(d)),u.toggleAttribute("data-cell-header",this.isHeader),u.rowData=this.data,(r=this.table)==null||r.dispatchEvent(new CustomEvent("cellcreated",{detail:{cell:u}})),s.push(u)}return this.style.gridTemplateAreas=`"${this._columnNames.join(" ")}"`,this.style.gridTemplateColumns=`${this._columnWidths.join(" ")}`,m`
      ${s}
      <slot></slot>
    `}render(){return m`${this._intersecting?this.compute():m``}`}};gi.styles=C`
    :host {
      position: relative;
      grid-area: Data;
      display: grid;
      min-height: 2.25rem;
    }
  `;let ct=gi;Jt([h({attribute:!1})],ct.prototype,"columns");Jt([h({attribute:!1})],ct.prototype,"hiddenColumns");Jt([h({attribute:!1})],ct.prototype,"data");Jt([h({type:Boolean,attribute:"is-header",reflect:!0})],ct.prototype,"isHeader");Jt([Nt()],ct.prototype,"_intersecting");var cr=Object.defineProperty,ur=Object.getOwnPropertyDescriptor,Tt=(i,t,e,s)=>{for(var n=s>1?void 0:s?ur(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&cr(t,e,n),n};const vi=class vi extends E{constructor(){super(...arguments),this._columnsChange=new Event("columnschange"),this._filteredData=[],this.headersHidden=!1,this.minColWidth="4rem",this._columns=[],this._textDelimiters={comma:",",tab:"	"},this._queryString=null,this._data=[],this.expanded=!1,this.preserveStructureOnFilter=!1,this.indentationInText=!1,this.dataTransform={},this._onColumnsHidden=new Event("columnshidden"),this._hiddenColumns=[],this._stringFilterFunction=(t,e)=>Object.values(e.data).some(n=>String(n).toLowerCase().includes(t.toLowerCase())),this._queryFilterFunction=(t,e)=>{let s=!1;const n=Ve(t)??[];for(const o of n){if("queries"in o){s=!1;break}const{condition:r,value:a}=o;let{key:l}=o;if(l.startsWith("[")&&l.endsWith("]")){const c=l.replace("[","").replace("]","");l=c,s=Object.keys(e.data).filter(f=>f.includes(c)).map(f=>Xi(e.data[f],r,a)).some(f=>f)}else s=Xi(e.data[l],r,a);if(!s)break}return s}}set columns(t){const e=[];for(const s of t){const n=typeof s=="string"?{name:s,width:`minmax(${this.minColWidth}, 1fr)`}:s;e.push(n)}this._columns=e,this.computeMissingColumns(this.data),this.dispatchEvent(this._columnsChange)}get columns(){return this._columns}get _headerRowData(){const t={};for(const e of this.columns)if(typeof e=="string")t[e]=e;else{const{name:s}=e;t[s]=s}return t}get value(){return this._filteredData}set queryString(t){this._queryString=t&&t.trim()!==""?t.trim():null,this.updateFilteredData()}get queryString(){return this._queryString}set data(t){this._data=t,this.updateFilteredData(),this.computeMissingColumns(t)&&(this.columns=this._columns)}get data(){return this._data}get dataAsync(){return new Promise(t=>{setTimeout(()=>{t(this.data)})})}set hiddenColumns(t){this._hiddenColumns=t,setTimeout(()=>{this.dispatchEvent(this._onColumnsHidden)})}get hiddenColumns(){return this._hiddenColumns}updateFilteredData(){this.queryString?(Ve(this.queryString)?(this.filterFunction=this._queryFilterFunction,this._filteredData=this.filter(this.queryString)):(this.filterFunction=this._stringFilterFunction,this._filteredData=this.filter(this.queryString)),this.preserveStructureOnFilter&&(this._expandedBeforeFilter===void 0&&(this._expandedBeforeFilter=this.expanded),this.expanded=!0)):(this.preserveStructureOnFilter&&this._expandedBeforeFilter!==void 0&&(this.expanded=this._expandedBeforeFilter,this._expandedBeforeFilter=void 0),this._filteredData=this.data)}computeMissingColumns(t){let e=!1;for(const s of t){const{children:n,data:o}=s;for(const r in o)this._columns.map(l=>typeof l=="string"?l:l.name).includes(r)||(this._columns.push({name:r,width:`minmax(${this.minColWidth}, 1fr)`}),e=!0);if(n){const r=this.computeMissingColumns(n);r&&!e&&(e=r)}}return e}generateText(t="comma",e=this.value,s="",n=!0){const o=this._textDelimiters[t];let r="";const a=this.columns.map(l=>l.name);if(n){this.indentationInText&&(r+=`Indentation${o}`);const l=`${a.join(o)}
`;r+=l}for(const[l,c]of e.entries()){const{data:u,children:d}=c,f=this.indentationInText?`${s}${l+1}${o}`:"",p=a.map(v=>u[v]??""),b=`${f}${p.join(o)}
`;r+=b,d&&(r+=this.generateText(t,c.children,`${s}${l+1}.`,!1))}return r}get csv(){return this.generateText("comma")}get tsv(){return this.generateText("tab")}computeRowDeclaration(t){const e={};for(const s in t){const n=this.dataTransform[s];n?e[s]=n(t[s],t):e[s]=t[s]}return e}downloadData(t="BIM Table Data",e="json"){let s=null;if(e==="json"&&(s=new File([JSON.stringify(this.value,void 0,2)],`${t}.json`)),e==="csv"&&(s=new File([this.csv],`${t}.csv`)),e==="tsv"&&(s=new File([this.tsv],`${t}.tsv`)),!s)return;const n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=s.name,n.click(),URL.revokeObjectURL(n.href)}getRowIndentation(t,e=this.value,s=0){for(const n of e){if(n.data===t)return s;if(n.children){const o=this.getRowIndentation(t,n.children,s+1);if(o!==null)return o}}return null}getGroupIndentation(t,e=this.value,s=0){for(const n of e){if(n===t)return s;if(n.children){const o=this.getGroupIndentation(t,n.children,s+1);if(o!==null)return o}}return null}connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event("connected"))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event("disconnected"))}filter(t,e=this.filterFunction??this._stringFilterFunction,s=this.data){const n=[];for(const o of s)if(e(t,o)){if(this.preserveStructureOnFilter){const a={data:o.data};if(o.children){const l=this.filter(t,e,o.children);l.length&&(a.children=l)}n.push(a)}else if(n.push({data:o.data}),o.children){const a=this.filter(t,e,o.children);n.push(...a)}}else if(o.children){const a=this.filter(t,e,o.children);this.preserveStructureOnFilter&&a.length?n.push({data:o.data,children:a}):n.push(...a)}return n}render(){const t=document.createElement("bim-table-row");t.table=this,t.isHeader=!0,t.data=this._headerRowData,t.style.gridArea="Header",t.style.position="sticky",t.style.top="0",t.style.zIndex="5";const e=document.createElement("bim-table-children");return e.table=this,e.data=this.value,e.style.gridArea="Body",e.style.backgroundColor="transparent",m`
      <div class="parent">
        ${this.headersHidden?null:t}
        <div style="overflow-x: hidden; grid-area: Body">${e}</div>
      </div>
    `}};vi.styles=[yt.scrollbar,C`
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
    `];let X=vi;Tt([Nt()],X.prototype,"_filteredData",2);Tt([h({type:Boolean,attribute:"headers-hidden",reflect:!0})],X.prototype,"headersHidden",2);Tt([h({type:String,attribute:"min-col-width",reflect:!0})],X.prototype,"minColWidth",2);Tt([h({type:Array,attribute:!1})],X.prototype,"columns",1);Tt([h({type:Array,attribute:!1})],X.prototype,"data",1);Tt([h({type:Boolean,reflect:!0})],X.prototype,"expanded",2);var hr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,we=(i,t,e,s)=>{for(var n=s>1?void 0:s?dr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&hr(t,e,n),n};const yi=class yi extends E{constructor(){super(...arguments),this._defaultName="__unnamed__",this.name=this._defaultName,this._hidden=!1}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}connectedCallback(){super.connectedCallback();const{parentElement:t}=this;if(t&&this.name===this._defaultName){const e=[...t.children].indexOf(this);this.name=`${this._defaultName}${e}`}}render(){return m` <slot></slot> `}};yi.styles=C`
    :host {
      display: block;
      height: 100%;
    }

    :host([hidden]) {
      display: none;
    }
  `;let L=yi;we([h({type:String,reflect:!0})],L.prototype,"name",2);we([h({type:String,reflect:!0})],L.prototype,"label",2);we([h({type:String,reflect:!0})],L.prototype,"icon",2);we([h({type:Boolean,reflect:!0})],L.prototype,"hidden",1);var fr=Object.defineProperty,pr=Object.getOwnPropertyDescriptor,Kt=(i,t,e,s)=>{for(var n=s>1?void 0:s?pr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&fr(t,e,n),n};const _i=class _i extends E{constructor(){super(...arguments),this._switchers=[],this.bottom=!1,this.switchersHidden=!1,this.floating=!1,this.onTabHiddenChange=t=>{const e=t.target;e instanceof L&&!e.hidden&&(e.removeEventListener("hiddenchange",this.onTabHiddenChange),this.tab=e.name,e.addEventListener("hiddenchange",this.onTabHiddenChange))}}set tab(t){this._tab=t;const e=[...this.children],s=e.find(n=>n instanceof L&&n.name===t);for(const n of e){if(!(n instanceof L))continue;n.hidden=s!==n;const o=this.getTabSwitcher(n.name);o&&o.toggleAttribute("data-active",!n.hidden)}}get tab(){return this._tab}getTabSwitcher(t){return this._switchers.find(s=>s.getAttribute("data-name")===t)}createSwitchers(){this._switchers=[];for(const t of this.children){if(!(t instanceof L))continue;const e=document.createElement("div");e.addEventListener("click",()=>{this.tab===t.name?this.toggleAttribute("tab",!1):this.tab=t.name}),e.setAttribute("data-name",t.name),e.className="switcher";const s=document.createElement("bim-label");s.textContent=t.label??"",s.icon=t.icon,e.append(s),this._switchers.push(e)}}onSlotChange(t){this.createSwitchers();const e=t.target.assignedElements(),s=e.find(n=>n instanceof L?this.tab?n.name===this.tab:!n.hidden:!1);s&&s instanceof L&&(this.tab=s.name);for(const n of e){if(!(n instanceof L)){n.remove();continue}n.removeEventListener("hiddenchange",this.onTabHiddenChange),s!==n&&(n.hidden=!0),n.addEventListener("hiddenchange",this.onTabHiddenChange)}}render(){return m`
      <div class="parent">
        <div class="switchers">${this._switchers}</div>
        <div class="content">
          <slot @slotchange=${this.onSlotChange}></slot>
        </div>
      </div>
    `}};_i.styles=[yt.scrollbar,C`
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
        display: flex;
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
    `];let ut=_i;Kt([Nt()],ut.prototype,"_switchers",2);Kt([h({type:Boolean,reflect:!0})],ut.prototype,"bottom",2);Kt([h({type:Boolean,attribute:"switchers-hidden",reflect:!0})],ut.prototype,"switchersHidden",2);Kt([h({type:Boolean,reflect:!0})],ut.prototype,"floating",2);Kt([h({type:String,reflect:!0})],ut.prototype,"tab",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mr=i=>i??Te;var br=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,mt=(i,t,e,s)=>{for(var n=s>1?void 0:s?gr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&br(t,e,n),n};const xi=class xi extends E{constructor(){super(...arguments),this._inputTypes=["date","datetime-local","email","month","password","search","tel","text","time","url","week"],this.value="",this.vertical=!1,this._type="text",this.onValueChange=new Event("input")}set type(t){this._inputTypes.includes(t)&&(this._type=t)}get type(){return this._type}get query(){return Ve(this.value)}onInputChange(t){t.stopPropagation();const e=t.target;clearTimeout(this._debounceTimeoutID),this._debounceTimeoutID=setTimeout(()=>{this.value=e.value,this.dispatchEvent(this.onValueChange)},this.debounce)}render(){return m`
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
          placeholder=${mr(this.placeholder)}
          @input=${this.onInputChange}
        />
      </bim-input>
    `}};xi.styles=C`
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
  `;let B=xi;mt([h({type:String,reflect:!0})],B.prototype,"icon",2);mt([h({type:String,reflect:!0})],B.prototype,"label",2);mt([h({type:String,reflect:!0})],B.prototype,"name",2);mt([h({type:String,reflect:!0})],B.prototype,"placeholder",2);mt([h({type:String,reflect:!0})],B.prototype,"value",2);mt([h({type:Boolean,reflect:!0})],B.prototype,"vertical",2);mt([h({type:Number,reflect:!0})],B.prototype,"debounce",2);mt([h({type:String,reflect:!0})],B.prototype,"type",1);var vr=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,Hn=(i,t,e,s)=>{for(var n=s>1?void 0:s?yr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&vr(t,e,n),n};const wi=class wi extends E{constructor(){super(...arguments),this.rows=2,this._vertical=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}updateChildren(){const t=this.children;for(const e of t)this.vertical?e.setAttribute("label-hidden",""):e.removeAttribute("label-hidden")}render(){return m`
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
  `;let St=wi;Hn([h({type:Number,reflect:!0})],St.prototype,"rows",2);Hn([h({type:Boolean,reflect:!0})],St.prototype,"vertical",1);var _r=Object.defineProperty,xr=Object.getOwnPropertyDescriptor,Ce=(i,t,e,s)=>{for(var n=s>1?void 0:s?xr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&_r(t,e,n),n};const Ci=class Ci extends E{constructor(){super(...arguments),this._vertical=!1,this._labelHidden=!1}set vertical(t){this._vertical=t,this.updateChildren()}get vertical(){return this._vertical}set labelHidden(t){this._labelHidden=t,this.updateChildren()}get labelHidden(){return this._labelHidden}updateChildren(){const t=this.children;for(const e of t)e instanceof St&&(e.vertical=this.vertical),e.toggleAttribute("label-hidden",this.vertical)}render(){return m`
      <div class="parent">
        <div class="children">
          <slot @slotchange=${this.updateChildren}></slot>
        </div>
        ${!this.labelHidden&&(this.label||this.icon)?m`<bim-label .icon=${this.icon}>${this.label}</bim-label>`:null}
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
  `;let ht=Ci;Ce([h({type:String,reflect:!0})],ht.prototype,"label",2);Ce([h({type:String,reflect:!0})],ht.prototype,"icon",2);Ce([h({type:Boolean,reflect:!0})],ht.prototype,"vertical",1);Ce([h({type:Boolean,attribute:"label-hidden",reflect:!0})],ht.prototype,"labelHidden",1);const _=class _{static set config(t){this._config={..._._config,...t}}static get config(){return _._config}static addGlobalStyles(){let t=document.querySelector("style[id='bim-ui']");if(t)return;t=document.createElement("style"),t.id="bim-ui",t.textContent=yt.globalStyles.cssText;const e=document.head.firstChild;e?document.head.insertBefore(t,e):document.head.append(t)}static defineCustomElement(t,e){customElements.get(t)||customElements.define(t,e)}static registerComponents(){_.init()}static init(){_.addGlobalStyles(),_.defineCustomElement("bim-button",zo),_.defineCustomElement("bim-checkbox",st),_.defineCustomElement("bim-color-input",G),_.defineCustomElement("bim-context-menu",ae),_.defineCustomElement("bim-dropdown",R),_.defineCustomElement("bim-grid",Dt),_.defineCustomElement("bim-icon",qe),_.defineCustomElement("bim-input",vt),_.defineCustomElement("bim-label",ot),_.defineCustomElement("bim-number-input",P),_.defineCustomElement("bim-option",A),_.defineCustomElement("bim-panel",rt),_.defineCustomElement("bim-panel-section",lt),_.defineCustomElement("bim-selector",at),_.defineCustomElement("bim-table",X),_.defineCustomElement("bim-tabs",ut),_.defineCustomElement("bim-tab",L),_.defineCustomElement("bim-table-cell",ue),_.defineCustomElement("bim-table-children",he),_.defineCustomElement("bim-table-group",de),_.defineCustomElement("bim-table-row",ct),_.defineCustomElement("bim-text-input",B),_.defineCustomElement("bim-toolbar",kt),_.defineCustomElement("bim-toolbar-group",St),_.defineCustomElement("bim-toolbar-section",ht),_.defineCustomElement("bim-viewport",fe)}static newRandomId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="";for(let s=0;s<10;s++){const n=Math.floor(Math.random()*t.length);e+=t.charAt(n)}return e}};_._config={sectionLabelOnVerticalToolbar:!1};let We=_;var wr=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,ei=(i,t,e,s)=>{for(var n=s>1?void 0:s?Cr(t,e):t,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=(s?r(t,e,n):r(n))||n);return s&&n&&wr(t,e,n),n};const $i=class $i extends E{constructor(){super(...arguments),this.labelsHidden=!1,this._vertical=!1,this._hidden=!1}set vertical(t){this._vertical=t,this.updateSections()}get vertical(){return this._vertical}set hidden(t){this._hidden=t,this.dispatchEvent(new Event("hiddenchange"))}get hidden(){return this._hidden}updateSections(){const t=this.children;for(const e of t)e instanceof ht&&(e.labelHidden=this.vertical&&!We.config.sectionLabelOnVerticalToolbar,e.vertical=this.vertical)}render(){return m`
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
  `;let kt=$i;ei([h({type:String,reflect:!0})],kt.prototype,"icon",2);ei([h({type:Boolean,attribute:"labels-hidden",reflect:!0})],kt.prototype,"labelsHidden",2);ei([h({type:Boolean,reflect:!0})],kt.prototype,"vertical",1);var $r=Object.defineProperty,Er=(i,t,e,s)=>{for(var n=void 0,o=i.length-1,r;o>=0;o--)(r=i[o])&&(n=r(t,e,n)||n);return n&&$r(t,e,n),n};const Ei=class Ei extends E{constructor(){super(),this._onResize=new Event("resize"),new ResizeObserver(()=>{setTimeout(()=>{this.dispatchEvent(this._onResize)})}).observe(this)}render(){return m`
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
  `;let fe=Ei;Er([h({type:String,reflect:!0})],fe.prototype,"name");export{Ho as C,We as M,ws as e,Cs as i,tt as n,xs as t};
