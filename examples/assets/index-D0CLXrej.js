import{O as pt,V as gt,d as z,M as C,G as A,F as bt,L as _t,B as j,f as xt,g as vt,a as H,e as V,n as wt,P as Z,h as yt,N as Ct,i as kt,T as D}from"./index-CSvFTziO.js";import{r as E,i as T,n as c,a as Mt}from"./state-DYefyXr3.js";import{x as P}from"./lit-html-paDGiEfB.js";import{e as $t,n as St}from"./ref-BHy2zXYh.js";class Xt extends pt{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new gt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element instanceof Element&&e.element.parentNode!==null&&e.element.parentNode.removeChild(e.element)})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new z;new C;new C;new z;new z;class Ot{constructor(t,e){this._group=new A,this._frustum=new bt,this._frustumMat=new C,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new _t({color:"#2e3338"}),this.numbers=new A,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=e;const i=this.newGrid(-1),s=this.newGrid(-2);this.grids={main:i,secondary:s},this._group.add(s,i,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:e}=this.grids;t.removeFromParent(),e.removeFromParent(),t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const e=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(e);const{planes:i}=this._frustum,s=i[0].constant*-i[0].normal.x,r=i[1].constant*-i[1].normal.x,o=i[2].constant*-i[2].normal.y,k=i[3].constant*-i[3].normal.y,v=Math.abs(s-r),w=Math.abs(k-o),{clientWidth:I,clientHeight:U}=this._container,W=Math.max(I,U),M=Math.max(v,w)/W,q=Math.ceil(Math.log10(v/this.scaleX)),J=Math.ceil(Math.log10(w/this.scaleY)),p=10**(q-2)*this.scaleX,g=10**(J-2)*this.scaleY,d=p*this.gridsFactor,b=g*this.gridsFactor,K=Math.ceil(w/b),B=Math.ceil(v/d),Q=Math.ceil(w/g),tt=Math.ceil(v/p),et=p*Math.ceil(r/p),st=g*Math.ceil(o/g),F=d*Math.ceil(r/d),it=b*Math.ceil(o/b),rt=[...this.numbers.children];for(const a of rt)a.removeFromParent();this.numbers.children=[];const $=[],ot=9*M,u=1e4,R=F+this._offsetX,nt=Math.round(Math.abs(R/this.scaleX)*u)/u,at=(B-1)*d,ct=Math.round(Math.abs((R+at)/this.scaleX)*u)/u,lt=Math.max(nt,ct).toString().length*ot;let S=Math.ceil(lt/d)*d;for(let a=0;a<B;a++){let n=F+a*d;$.push(n,k,0,n,o,0),n=Math.round(n*u)/u,S=Math.round(S*u)/u;const _=n%S;if(!(d<1||b<1)&&Math.abs(_)>.01)continue;const Y=this.newNumber((n+this._offsetX)/this.scaleX),mt=12*M;Y.position.set(n,o+mt,0)}for(let a=0;a<K;a++){const n=it+a*b;$.push(r,n,0,s,n,0);const _=this.newNumber(n/this.scaleY);let O=12;_.element.textContent&&(O+=4*_.element.textContent.length);const Y=O*M;_.position.set(r+Y,n,0)}const X=[];for(let a=0;a<tt;a++){const n=et+a*p;X.push(n,k,0,n,o,0)}for(let a=0;a<Q;a++){const n=st+a*g;X.push(r,n,0,s,n,0)}const ht=new j(new Float32Array($),3),dt=new j(new Float32Array(X),3),{main:ut,secondary:ft}=this.grids;ut.geometry.setAttribute("position",ht),ft.geometry.setAttribute("position",dt)}newNumber(t){const e=document.createElement("bim-label");e.textContent=String(Math.round(t*100)/100);const i=new Xt(e);return this.numbers.add(i),i}newGrid(t){const e=new xt,i=new vt(e,this.material);return i.frustumCulled=!1,i.renderOrder=t,i}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let e=0;e<t.length;e++){const i=t[e];if(Number.isNaN(i))return!1}return!0}}var Yt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,x=(l,t,e,i)=>{for(var s=Dt(t,e),r=l.length-1,o;r>=0;r--)(o=l[r])&&(s=o(t,e,s)||s);return s&&Yt(t,e,s),s};const N=class N extends E{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const e=Number(t.replace("#","0x"));Number.isNaN(e)||this._grid.material.color.setHex(e)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const i=t.get(H).create();this._world=i,i.scene=new V(t),i.scene.setup(),i.renderer=new wt(t,this);const s=new Z(t);i.camera=s;const r=new Ot(s.threeOrtho,this);this._grid=r,i.scene.three.add(r.get()),s.controls.addEventListener("update",()=>r.regenerate()),setTimeout(async()=>{i.camera.updateAspect(),s.set("Plan"),await s.controls.setLookAt(0,0,100,0,0,0),await s.projection.set("Orthographic"),s.controls.dollySpeed=3,s.controls.draggingSmoothTime=.085,s.controls.maxZoom=1e3,s.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return P`<slot></slot>`}};N.styles=T`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let f=N;x([c({type:String,attribute:"grid-color",reflect:!0})],f.prototype,"gridColor");x([c({type:Number,attribute:"grid-scale-x",reflect:!0})],f.prototype,"gridScaleX");x([c({type:Number,attribute:"grid-scale-y",reflect:!0})],f.prototype,"gridScaleY");x([c({type:Number,attribute:"grid-offset-x",reflect:!0})],f.prototype,"gridOffsetX");x([c({type:Number,attribute:"grid-offset-y",reflect:!0})],f.prototype,"gridOffsetY");var zt=Object.defineProperty,m=(l,t,e,i)=>{for(var s=void 0,r=l.length-1,o;r>=0;r--)(o=l[r])&&(s=o(t,e,s)||s);return s&&zt(t,e,s),s};const L=class L extends E{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new C,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}render(){const t=this.size??this._defaults.size;return P`
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
    `}};L.styles=T`
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
  `;let h=L;m([c({type:Number,reflect:!0})],h.prototype,"size");m([c({type:String,attribute:"right-text",reflect:!0})],h.prototype,"rightText");m([c({type:String,attribute:"left-text",reflect:!0})],h.prototype,"leftText");m([c({type:String,attribute:"top-text",reflect:!0})],h.prototype,"topText");m([c({type:String,attribute:"bottom-text",reflect:!0})],h.prototype,"bottomText");m([c({type:String,attribute:"front-text",reflect:!0})],h.prototype,"frontText");m([c({type:String,attribute:"back-text",reflect:!0})],h.prototype,"backText");m([Mt()],h.prototype,"_cssMatrix3D");var Et=Object.defineProperty,Tt=(l,t,e,i)=>{for(var s=void 0,r=l.length-1,o;r>=0;r--)(o=l[r])&&(s=o(t,e,s)||s);return s&&Et(t,e,s),s};const G=class G extends E{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=$t()}set components(t){var e;if(this._components=t,this.components){const i=this.components.get(H);this.world=i.create(),this.world.name=this.name}else(e=this.world)==null||e.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const e=new V(this.components);this.world.scene=e,e.setup(),e.three.background=null;const i=new yt(this.components,t);this.world.renderer=i;const{postproduction:s}=i,r=new Z(this.components);this.world.camera=r;const o=this.components.get(Ct).create(this.world);o.material.uniforms.uColor.value=new kt(4342338),o.material.uniforms.uSize1.value=2,o.material.uniforms.uSize2.value=8,s.enabled=!0,s.customEffects.excludedMeshes.push(o.three),s.setPasses({custom:!0,ao:!0,gamma:!0}),s.customEffects.lineColor=1513756}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return P` <bim-viewport ${St(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};G.styles=T``;let y=G;Tt([c({type:String,reflect:!0})],y.prototype,"name");class jt{static init(){D.defineCustomElement("bim-view-cube",h),D.defineCustomElement("bim-world-2d",f),D.defineCustomElement("bim-world",y)}}export{jt as M};
