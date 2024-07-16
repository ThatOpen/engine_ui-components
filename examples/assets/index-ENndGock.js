import{O as ht,V as dt,b as Y,M as w,G as P,F as ft,L as ut,B as N,c as mt,e as gt,C as pt,s as bt,U as _t,n as xt,m as B}from"./template-DPyExspr.js";import{s as G,i as F,x as R,n as c,r as vt}from"./state--sg4lz7-.js";class yt extends ht{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new dt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new Y;new w;new w;new Y;new Y;class wt{constructor(t,e){this._group=new P,this._frustum=new ft,this._frustumMat=new w,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new ut({color:"#2e3338"}),this.numbers=new P,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=e;const i=this.newGrid(-1),s=this.newGrid(-2);this.grids={main:i,secondary:s},this._group.add(s,i,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:e}=this.grids;t.removeFromParent(),e.removeFromParent(),t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const e=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(e);const{planes:i}=this._frustum,s=i[0].constant*-i[0].normal.x,r=i[1].constant*-i[1].normal.x,a=i[2].constant*-i[2].normal.y,M=i[3].constant*-i[3].normal.y,v=Math.abs(s-r),y=Math.abs(M-a),{clientWidth:A,clientHeight:j}=this._container,H=Math.max(A,j),k=Math.max(v,y)/H,V=Math.ceil(Math.log10(v/this.scaleX)),U=Math.ceil(Math.log10(y/this.scaleY)),g=10**(V-2)*this.scaleX,p=10**(U-2)*this.scaleY,d=g*this.gridsFactor,b=p*this.gridsFactor,W=Math.ceil(y/b),T=Math.ceil(v/d),Z=Math.ceil(y/p),I=Math.ceil(v/g),q=g*Math.ceil(r/g),J=p*Math.ceil(a/p),E=d*Math.ceil(r/d),K=b*Math.ceil(a/b),Q=[...this.numbers.children];for(const n of Q)n.removeFromParent();this.numbers.children=[];const C=[],tt=9*k,f=1e4,L=E+this._offsetX,et=Math.round(Math.abs(L/this.scaleX)*f)/f,st=(T-1)*d,it=Math.round(Math.abs((L+st)/this.scaleX)*f)/f,rt=Math.max(et,it).toString().length*tt;let $=Math.ceil(rt/d)*d;for(let n=0;n<T;n++){let o=E+n*d;C.push(o,M,0,o,a,0),o=Math.round(o*f)/f,$=Math.round($*f)/f;const _=o%$;if(!(d<1||b<1)&&Math.abs(_)>.01)continue;const S=this.newNumber((o+this._offsetX)/this.scaleX),lt=12*k;S.position.set(o,a+lt,0)}for(let n=0;n<W;n++){const o=K+n*b;C.push(r,o,0,s,o,0);const _=this.newNumber(o/this.scaleY);let O=12;_.element.textContent&&(O+=4*_.element.textContent.length);const S=O*k;_.position.set(r+S,o,0)}const X=[];for(let n=0;n<I;n++){const o=q+n*g;X.push(o,M,0,o,a,0)}for(let n=0;n<Z;n++){const o=J+n*p;X.push(r,o,0,s,o,0)}const ot=new N(new Float32Array(C),3),nt=new N(new Float32Array(X),3),{main:at,secondary:ct}=this.grids;at.geometry.setAttribute("position",ot),ct.geometry.setAttribute("position",nt)}newNumber(t){const e=document.createElement("bim-label");e.textContent=String(Math.round(t*100)/100);const i=new yt(e);return this.numbers.add(i),i}newGrid(t){const e=new mt,i=new gt(e,this.material);return i.frustumCulled=!1,i.renderOrder=t,i}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let e=0;e<t.length;e++){const i=t[e];if(Number.isNaN(i))return!1}return!0}}var Mt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,x=(h,t,e,i)=>{for(var s=kt(t,e),r=h.length-1,a;r>=0;r--)(a=h[r])&&(s=a(t,e,s)||s);return s&&Mt(t,e,s),s};const D=class D extends G{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const e=Number(t.replace("#","0x"));Number.isNaN(e)||this._grid.material.color.setHex(e)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(pt).create();this._world=i,i.scene=new bt(t),i.scene.setup(),i.renderer=new _t(t,this);const s=new xt(t);i.camera=s;const r=new wt(s.threeOrtho,this);this._grid=r,i.scene.three.add(r.get()),s.controls.addEventListener("update",()=>r.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),s.set("Plan"),await s.controls.setLookAt(0,0,100,0,0,0),await s.projection.set("Orthographic"),s.controls.dollySpeed=3,s.controls.draggingSmoothTime=.085,s.controls.maxZoom=1e3,s.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return R`<slot></slot>`}};D.styles=F`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let u=D;x([c({type:String,attribute:"grid-color",reflect:!0})],u.prototype,"gridColor");x([c({type:Number,attribute:"grid-scale-x",reflect:!0})],u.prototype,"gridScaleX");x([c({type:Number,attribute:"grid-scale-y",reflect:!0})],u.prototype,"gridScaleY");x([c({type:Number,attribute:"grid-offset-x",reflect:!0})],u.prototype,"gridOffsetX");x([c({type:Number,attribute:"grid-offset-y",reflect:!0})],u.prototype,"gridOffsetY");var Ct=Object.defineProperty,m=(h,t,e,i)=>{for(var s=void 0,r=h.length-1,a;r>=0;r--)(a=h[r])&&(s=a(t,e,s)||s);return s&&Ct(t,e,s),s};const z=class z extends G{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new w,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}render(){const t=this.size??this._defaults.size;return R`
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
    `}};z.styles=F`
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
  `;let l=z;m([c({type:Number,reflect:!0})],l.prototype,"size");m([c({type:String,attribute:"right-text",reflect:!0})],l.prototype,"rightText");m([c({type:String,attribute:"left-text",reflect:!0})],l.prototype,"leftText");m([c({type:String,attribute:"top-text",reflect:!0})],l.prototype,"topText");m([c({type:String,attribute:"bottom-text",reflect:!0})],l.prototype,"bottomText");m([c({type:String,attribute:"front-text",reflect:!0})],l.prototype,"frontText");m([c({type:String,attribute:"back-text",reflect:!0})],l.prototype,"backText");m([vt()],l.prototype,"_cssMatrix3D");class zt{static init(){B.defineCustomElement("bim-view-cube",l),B.defineCustomElement("bim-world-2d",u)}}export{zt as M};
