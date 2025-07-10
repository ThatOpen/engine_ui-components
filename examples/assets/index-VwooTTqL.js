import{i as mt,j as pt,k as Y,M as y,l as F,n as gt,o as bt,p as j,q as _t,r as xt,W as A,S as H,B as vt,O as V,b as wt,G as yt,s as kt}from"./index-BgQRAdOj.js";import{r as z,i as P,n as c,a as Ct,e as Mt,b as $t}from"./ref-DXXV_dKT.js";import{x as T}from"./lit-html-Cs86_c16.js";class St extends mt{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new pt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new Y;new y;new y;new Y;new Y;class Xt{constructor(t,e){this._group=new F,this._frustum=new gt,this._frustumMat=new y,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new bt({color:"#2e3338"}),this.numbers=new F,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=e;const r=this.newGrid(-1),s=this.newGrid(-2);this.grids={main:r,secondary:s},this._group.add(s,r,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:e}=this.grids;t.removeFromParent(),e.removeFromParent(),t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const e=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(e);const{planes:r}=this._frustum,s=r[0].constant*-r[0].normal.x,i=r[1].constant*-r[1].normal.x,a=r[2].constant*-r[2].normal.y,k=r[3].constant*-r[3].normal.y,v=Math.abs(s-i),w=Math.abs(k-a),{clientWidth:W,clientHeight:Z}=this._container,I=Math.max(W,Z),C=Math.max(v,w)/I,U=Math.ceil(Math.log10(v/this.scaleX)),q=Math.ceil(Math.log10(w/this.scaleY)),p=10**(U-2)*this.scaleX,g=10**(q-2)*this.scaleY,d=p*this.gridsFactor,b=g*this.gridsFactor,J=Math.ceil(w/b),G=Math.ceil(v/d),K=Math.ceil(w/g),Q=Math.ceil(v/p),tt=p*Math.ceil(i/p),et=g*Math.ceil(a/g),B=d*Math.ceil(i/d),st=b*Math.ceil(a/b),rt=[...this.numbers.children];for(const n of rt)n.removeFromParent();this.numbers.children=[];const M=[],it=9*C,u=1e4,R=B+this._offsetX,ot=Math.round(Math.abs(R/this.scaleX)*u)/u,nt=(G-1)*d,at=Math.round(Math.abs((R+nt)/this.scaleX)*u)/u,ct=Math.max(ot,at).toString().length*it;let $=Math.ceil(ct/d)*d;for(let n=0;n<G;n++){let o=B+n*d;M.push(o,k,0,o,a,0),o=Math.round(o*u)/u,$=Math.round($*u)/u;const _=o%$;if(!(d<1||b<1)&&Math.abs(_)>.01)continue;const O=this.newNumber((o+this._offsetX)/this.scaleX),ft=12*C;O.position.set(o,a+ft,0)}for(let n=0;n<J;n++){const o=st+n*b;M.push(i,o,0,s,o,0);const _=this.newNumber(o/this.scaleY);let X=12;_.element.textContent&&(X+=4*_.element.textContent.length);const O=X*C;_.position.set(i+O,o,0)}const S=[];for(let n=0;n<Q;n++){const o=tt+n*p;S.push(o,k,0,o,a,0)}for(let n=0;n<K;n++){const o=et+n*g;S.push(i,o,0,s,o,0)}const lt=new j(new Float32Array(M),3),ht=new j(new Float32Array(S),3),{main:dt,secondary:ut}=this.grids;dt.geometry.setAttribute("position",lt),ut.geometry.setAttribute("position",ht)}newNumber(t){const e=document.createElement("bim-label");e.textContent=String(Math.round(t*100)/100);const r=new St(e);return this.numbers.add(r),r}newGrid(t){const e=new _t,r=new xt(e,this.material);return r.frustumCulled=!1,r.renderOrder=t,r}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let e=0;e<t.length;e++){const r=t[e];if(Number.isNaN(r))return!1}return!0}}var Ot=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,x=(l,t,e,r)=>{for(var s=Dt(t,e),i=l.length-1,a;i>=0;i--)(a=l[i])&&(s=a(t,e,s)||s);return s&&Ot(t,e,s),s};const E=class E extends z{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const e=Number(t.replace("#","0x"));Number.isNaN(e)||this._grid.material.color.setHex(e)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const r=t.get(A).create();this._world=r,r.scene=new H(t),r.scene.setup(),r.renderer=new vt(t,this);const s=new V(t);r.camera=s;const i=new Xt(s.threeOrtho,this);this._grid=i,r.scene.three.add(i.get()),s.controls.addEventListener("update",()=>i.regenerate()),setTimeout(async()=>{r.camera.updateAspect(),s.set("Plan"),await s.controls.setLookAt(0,0,100,0,0,0),await s.projection.set("Orthographic"),s.controls.dollySpeed=3,s.controls.draggingSmoothTime=.085,s.controls.maxZoom=1e3,s.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return T`<slot></slot>`}};E.styles=P`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let m=E;x([c({type:String,attribute:"grid-color",reflect:!0})],m.prototype,"gridColor");x([c({type:Number,attribute:"grid-scale-x",reflect:!0})],m.prototype,"gridScaleX");x([c({type:Number,attribute:"grid-scale-y",reflect:!0})],m.prototype,"gridScaleY");x([c({type:Number,attribute:"grid-offset-x",reflect:!0})],m.prototype,"gridOffsetX");x([c({type:Number,attribute:"grid-offset-y",reflect:!0})],m.prototype,"gridOffsetY");var Yt=Object.defineProperty,f=(l,t,e,r)=>{for(var s=void 0,i=l.length-1,a;i>=0;i--)(a=l[i])&&(s=a(t,e,s)||s);return s&&Yt(t,e,s),s};const L=class L extends z{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new y,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}render(){const t=this.size??this._defaults.size;return T`
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
    `}};L.styles=P`
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
  `;let h=L;f([c({type:Number,reflect:!0})],h.prototype,"size");f([c({type:String,attribute:"right-text",reflect:!0})],h.prototype,"rightText");f([c({type:String,attribute:"left-text",reflect:!0})],h.prototype,"leftText");f([c({type:String,attribute:"top-text",reflect:!0})],h.prototype,"topText");f([c({type:String,attribute:"bottom-text",reflect:!0})],h.prototype,"bottomText");f([c({type:String,attribute:"front-text",reflect:!0})],h.prototype,"frontText");f([c({type:String,attribute:"back-text",reflect:!0})],h.prototype,"backText");f([Ct()],h.prototype,"_cssMatrix3D");var zt=Object.defineProperty,Pt=(l,t,e,r)=>{for(var s=void 0,i=l.length-1,a;i>=0;i--)(a=l[i])&&(s=a(t,e,s)||s);return s&&zt(t,e,s),s};const N=class N extends z{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=Mt()}set components(t){var e;if(this._components=t,this.components){const r=this.components.get(A);this.world=r.create(),this.world.name=this.name}else(e=this.world)==null||e.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const e=new H(this.components);this.world.scene=e,e.setup(),e.three.background=null;const r=new wt(this.components,t);this.world.renderer=r;const s=new V(this.components);this.world.camera=s;const i=this.components.get(yt).create(this.world);i.material.uniforms.uColor.value=new kt(4342338),i.material.uniforms.uSize1.value=2,i.material.uniforms.uSize2.value=8}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return T` <bim-viewport ${$t(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};N.styles=P``;let D=N;Pt([c({type:String,reflect:!0})],D.prototype,"name");export{h as V,m as W,D as a};
