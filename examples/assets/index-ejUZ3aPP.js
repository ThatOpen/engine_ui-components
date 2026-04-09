import{x as xt,y as yt,z as K,A as Y,E as rt,J as St,d as Et,c as ot,B as Mt,L as Ct,W as lt,S as ct,K as Pt,O as ht,a as Rt,G as Tt,v as $t,T as Z,P as zt,Q as nt,R as kt}from"./index-Be3le0As.js";import{i as B,a as N,n as b,r as Dt,e as R,b as T}from"./ref-B0YVjWyu.js";import{b as V}from"./lit-html-CgQwCkHV.js";class Ot extends xt{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new yt(.5,.5),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this}}new K;new Y;new Y;new K;new K;class Lt{constructor(t,e){this._group=new rt,this._frustum=new St,this._frustumMat=new Y,this._regenerateDelay=200,this._regenerateCounter=0,this.material=new Et({color:"#2e3338"}),this.numbers=new rt,this.maxRegenerateRetrys=4,this.gridsFactor=5,this._scaleX=1,this._scaleY=1,this._offsetX=0,this._offsetY=0,this._camera=t,this._container=e;const s=this.newGrid(-1),i=this.newGrid(-2);this.grids={main:s,secondary:i},this._group.add(i,s,this.numbers)}set scaleX(t){this._scaleX=t,this.regenerate()}get scaleX(){return this._scaleX}set scaleY(t){this._scaleY=t,this.regenerate()}get scaleY(){return this._scaleY}set offsetX(t){this._offsetX=t,this.regenerate()}get offsetX(){return this._offsetX}set offsetY(t){this._offsetY=t,this.regenerate()}get offsetY(){return this._offsetY}get(){return this._group}dispose(){const{main:t,secondary:e}=this.grids;t.removeFromParent(),e.removeFromParent(),t.geometry.dispose(),t.material.dispose(),e.geometry.dispose(),e.material.dispose()}regenerate(){if(!this.isGridReady()){if(this._regenerateCounter++,this._regenerateCounter>this.maxRegenerateRetrys)throw new Error("Grid could not be regenerated");setTimeout(()=>this.regenerate,this._regenerateDelay);return}this._regenerateCounter=0,this._camera.updateMatrix(),this._camera.updateMatrixWorld();const e=this._frustumMat.multiplyMatrices(this._camera.projectionMatrix,this._camera.matrixWorldInverse);this._frustum.setFromProjectionMatrix(e);const{planes:s}=this._frustum,i=s[0].constant*-s[0].normal.x,o=s[1].constant*-s[1].normal.x,r=s[2].constant*-s[2].normal.y,n=s[3].constant*-s[3].normal.y,a=Math.abs(i-o),l=Math.abs(n-r),{clientWidth:c,clientHeight:f}=this._container,v=Math.max(c,f),d=Math.max(a,l)/v,h=Math.ceil(Math.log10(a/this.scaleX)),y=Math.ceil(Math.log10(l/this.scaleY)),m=10**(h-2)*this.scaleX,g=10**(y-2)*this.scaleY,p=m*this.gridsFactor,S=g*this.gridsFactor,k=Math.ceil(l/S),P=Math.ceil(a/p),A=Math.ceil(l/g),F=Math.ceil(a/m),G=m*Math.ceil(o/m),W=g*Math.ceil(r/g),D=p*Math.ceil(o/p),I=S*Math.ceil(r/S),X=[...this.numbers.children];for(const _ of X)_.removeFromParent();this.numbers.children=[];const z=[],dt=9*d,M=1e4,it=D+this._offsetX,pt=Math.round(Math.abs(it/this.scaleX)*M)/M,ut=(P-1)*p,ft=Math.round(Math.abs((it+ut)/this.scaleX)*M)/M,_t=Math.max(pt,ft).toString().length*dt;let H=Math.ceil(_t/p)*p;for(let _=0;_<P;_++){let u=D+_*p;z.push(u,n,0,u,r,0),u=Math.round(u*M)/M,H=Math.round(H*M)/M;const O=u%H;if(!(p<1||S<1)&&Math.abs(O)>.01)continue;const U=this.newNumber((u+this._offsetX)/this.scaleX),wt=12*d;U.position.set(u,r+wt,0)}for(let _=0;_<k;_++){const u=I+_*S;z.push(o,u,0,i,u,0);const O=this.newNumber(u/this.scaleY);let q=12;O.element.textContent&&(q+=4*O.element.textContent.length);const U=q*d;O.position.set(o+U,u,0)}const j=[];for(let _=0;_<F;_++){const u=G+_*m;j.push(u,n,0,u,r,0)}for(let _=0;_<A;_++){const u=W+_*g;j.push(o,u,0,i,u,0)}const mt=new ot(new Float32Array(z),3),gt=new ot(new Float32Array(j),3),{main:bt,secondary:vt}=this.grids;bt.geometry.setAttribute("position",mt),vt.geometry.setAttribute("position",gt)}newNumber(t){const e=document.createElement("bim-label");e.textContent=String(Math.round(t*100)/100);const s=new Ot(e);return this.numbers.add(s),s}newGrid(t){const e=new Mt,s=new Ct(e,this.material);return s.frustumCulled=!1,s.renderOrder=t,s}isGridReady(){const t=this._camera.projectionMatrix.elements;for(let e=0;e<t.length;e++){const s=t[e];if(Number.isNaN(s))return!1}return!0}}var It=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,L=(x,t,e,s)=>{for(var i=Xt(t,e),o=x.length-1,r;o>=0;o--)(r=x[o])&&(i=r(t,e,i)||i);return i&&It(t,e,i),i};const Q=class Q extends B{constructor(){super(...arguments),this._grid=null,this._world=null,this.resize=()=>{this._world&&this._grid&&this._grid.regenerate()}}set gridColor(t){if(this._gridColor=t,!(t&&this._grid))return;const e=Number(t.replace("#","0x"));Number.isNaN(e)||this._grid.material.color.setHex(e)}get gridColor(){return this._gridColor}set gridScaleX(t){this._gridScaleX=t,t&&this._grid&&(this._grid.scaleX=t)}get gridScaleX(){return this._gridScaleX}set gridScaleY(t){this._gridScaleY=t,t&&this._grid&&(this._grid.scaleY=t)}get gridScaleY(){return this._gridScaleY}get gridOffsetX(){var t;return((t=this._grid)==null?void 0:t.offsetX)||0}set gridOffsetX(t){this._grid&&(this._grid.offsetX=t)}get gridOffsetY(){var t;return((t=this._grid)==null?void 0:t.offsetY)||0}set gridOffsetY(t){this._grid&&(this._grid.offsetY=t)}set components(t){this.dispose();const s=t.get(lt).create();this._world=s,s.scene=new ct(t),s.scene.setup(),s.renderer=new Pt(t,this);const i=new ht(t);s.camera=i;const o=new Lt(i.threeOrtho,this);this._grid=o,s.scene.three.add(o.get()),i.controls.addEventListener("update",()=>o.regenerate()),setTimeout(async()=>{s.camera.updateAspect(),i.set("Plan"),await i.controls.setLookAt(0,0,100,0,0,0),await i.projection.set("Orthographic"),i.controls.dollySpeed=3,i.controls.draggingSmoothTime=.085,i.controls.maxZoom=1e3,i.controls.zoom(4)})}get world(){return this._world}dispose(){var t;(t=this.world)==null||t.dispose(),this._world=null,this._grid=null}connectedCallback(){super.connectedCallback(),new ResizeObserver(this.resize).observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.dispose()}render(){return V`<slot></slot>`}};Q.styles=N`
    :host {
      position: relative;
      display: flex;
      min-width: 0px;
      height: 100%;
      background-color: var(--bim-ui_bg-base);
    }
  `;let $=Q;L([b({type:String,attribute:"grid-color",reflect:!0})],$.prototype,"gridColor");L([b({type:Number,attribute:"grid-scale-x",reflect:!0})],$.prototype,"gridScaleX");L([b({type:Number,attribute:"grid-scale-y",reflect:!0})],$.prototype,"gridScaleY");L([b({type:Number,attribute:"grid-offset-x",reflect:!0})],$.prototype,"gridOffsetX");L([b({type:Number,attribute:"grid-offset-y",reflect:!0})],$.prototype,"gridOffsetY");var Yt=Object.defineProperty,C=(x,t,e,s)=>{for(var i=void 0,o=x.length-1,r;o>=0;o--)(r=x[o])&&(i=r(t,e,i)||i);return i&&Yt(t,e,i),i};const tt=class tt extends B{constructor(){super(...arguments),this._defaults={size:60},this._cssMatrix3D="",this._matrix=new Y,this._onRightClick=new Event("rightclick"),this._onLeftClick=new Event("leftclick"),this._onTopClick=new Event("topclick"),this._onBottomClick=new Event("bottomclick"),this._onFrontClick=new Event("frontclick"),this._onBackClick=new Event("backclick"),this._camera=null,this._epsilon=t=>Math.abs(t)<1e-10?0:t}set camera(t){this._camera=t,this.updateOrientation()}get camera(){return this._camera}updateOrientation(){if(!this.camera)return;this._matrix.extractRotation(this.camera.matrixWorldInverse);const{elements:t}=this._matrix;this._cssMatrix3D=`matrix3d(
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
    `}render(){const t=this.size??this._defaults.size;return V`
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
    `}};tt.styles=N`
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
  `;let E=tt;C([b({type:Number,reflect:!0})],E.prototype,"size");C([b({type:String,attribute:"right-text",reflect:!0})],E.prototype,"rightText");C([b({type:String,attribute:"left-text",reflect:!0})],E.prototype,"leftText");C([b({type:String,attribute:"top-text",reflect:!0})],E.prototype,"topText");C([b({type:String,attribute:"bottom-text",reflect:!0})],E.prototype,"bottomText");C([b({type:String,attribute:"front-text",reflect:!0})],E.prototype,"frontText");C([b({type:String,attribute:"back-text",reflect:!0})],E.prototype,"backText");C([Dt()],E.prototype,"_cssMatrix3D");var Bt=Object.defineProperty,Nt=(x,t,e,s)=>{for(var i=void 0,o=x.length-1,r;o>=0;o--)(r=x[o])&&(i=r(t,e,i)||i);return i&&Bt(t,e,i),i};const et=class et extends B{constructor(){super(...arguments),this.world=null,this._components=null,this._viewport=R()}set components(t){var e;if(this._components=t,this.components){const s=this.components.get(lt);this.world=s.create(),this.world.name=this.name}else(e=this.world)==null||e.dispose(),this.world=null}get components(){return this._components}connectedCallback(){super.connectedCallback(),this.world&&(this.world.enabled=!0)}disconnectedCallback(){super.disconnectedCallback(),this.world&&(this.world.enabled=!1)}dispose(){this.components=null,this.remove()}firstUpdated(){const{value:t}=this._viewport;if(!(this.components&&t&&this.world))return;const e=new ct(this.components);this.world.scene=e,e.setup(),e.three.background=null;const s=new Rt(this.components,t);this.world.renderer=s;const i=new ht(this.components);this.world.camera=i;const o=this.components.get(Tt).create(this.world);o.material.uniforms.uColor.value=new $t(4342338),o.material.uniforms.uSize1.value=2,o.material.uniforms.uSize2.value=8}onSlotChange(){const t=new Event("slotchange");this.dispatchEvent(t)}render(){return V` <bim-viewport ${T(this._viewport)}>
      <slot @slotchange=${this.onSlotChange}></slot>
    </bim-viewport>`}};et.styles=N``;let J=et;Nt([b({type:String,reflect:!0})],J.prototype,"name");const st=class st extends B{constructor(){super(...arguments),this._canvasRef=R(),this._worldRef=R(),this._overlaysRef=R(),this._toolbarContainerRef=R(),this._vpToolbarRef=R(),this._paperToolbarRef=R(),this._renderer=null,this._resizeObserver=null,this._slots=new Map,this._paperLabels=new Map,this._renderPending=!1,this._pan={x:40,y:40},this._zoom=.5,this._panning=!1,this._panStart={x:0,y:0},this._panOrigin={x:0,y:0},this._editingSlot=null,this._selectedSlot=null,this._selectedPaper=null,this._vpSection=null,this._vpNameInput=null,this._vpScaleDropdown=null,this._paperSection=null,this._paperSheetInput=null,this._paperLabelInput=null,this._paperSizeDropdown=null,this._paperOrientDropdown=null,this._dragSlot=null,this._dragType=null,this._dragStartClient={x:0,y:0},this._dragTotalMovement=0,this._dragOrigin=null,this._dragPaper=null,this._dragPaperStartClient={x:0,y:0},this._dragPaperOrigin={x:0,y:0},this._dragPaperTotalMovement=0,this.components=null,this._onWheel=t=>{t.preventDefault();const e=this.getBoundingClientRect(),s=t.clientX-e.left,i=t.clientY-e.top,o=Math.pow(.999,t.deltaY),r=Math.max(.05,Math.min(10,this._zoom*o));this._pan.x=s-(s-this._pan.x)*(r/this._zoom),this._pan.y=i-(i-this._pan.y)*(r/this._zoom),this._zoom=r,this._applyTransform(),this.requestRender()},this._onMouseDown=t=>{if(t.button===0&&!this._editingSlot){const e=t.composedPath().find(s=>s instanceof Element&&s.tagName==="BIM-PAPER-SPACE");e?(this._dragPaper=e,this._dragPaperStartClient={x:t.clientX,y:t.clientY},this._dragPaperOrigin={x:e.offsetLeft,y:e.offsetTop},this._dragPaperTotalMovement=0):(this._selectedSlot&&this._selectSlot(null),this._selectedPaper&&this._selectPaper(null))}t.button!==1&&t.button!==2||(t.preventDefault(),this._panning=!0,this._panStart={x:t.clientX,y:t.clientY},this._panOrigin={...this._pan},this.style.cursor="grabbing")},this._onMouseMove=t=>{if(this._panning&&(this._pan.x=this._panOrigin.x+(t.clientX-this._panStart.x),this._pan.y=this._panOrigin.y+(t.clientY-this._panStart.y),this._applyTransform(),this.requestRender()),this._dragSlot&&this._dragType&&this._dragOrigin){const e=t.clientX-this._dragStartClient.x,s=t.clientY-this._dragStartClient.y;this._dragTotalMovement=Math.max(this._dragTotalMovement,Math.abs(e)+Math.abs(s)),this._dragType==="move"?this._applyMoveDrag(e,s):this._applyResizeDrag(this._dragType,e,s),this.requestRender()}if(this._dragPaper){const e=t.clientX-this._dragPaperStartClient.x,s=t.clientY-this._dragPaperStartClient.y;this._dragPaperTotalMovement=Math.max(this._dragPaperTotalMovement,Math.abs(e)+Math.abs(s)),this._dragPaper.style.left=`${this._dragPaperOrigin.x+e/this._zoom}px`,this._dragPaper.style.top=`${this._dragPaperOrigin.y+s/this._zoom}px`,this.requestRender()}},this._onMouseUp=t=>{if(this._panning&&(t.button===1||t.button===2)&&(this._panning=!1,this.style.cursor="default"),this._dragSlot&&t.button===0){const e=this._dragTotalMovement<4,s=this._dragSlot;this._dragSlot=null,this._dragType=null,this._dragOrigin=null,e&&this._handleSlotClick(s,t)}if(this._dragPaper&&t.button===0){const e=this._dragPaperTotalMovement<4,s=this._dragPaper;this._dragPaper=null,e&&this._selectPaper(this._selectedPaper===s?null:s)}},this._onContextMenu=t=>t.preventDefault()}addViewport(t,e,s,i){var r;const o={drawingId:e,viewportId:s,paper:t,x:i.x,y:i.y,borderEl:null,nameEl:null,handles:null};this._createBorderEl(o),(r=this._overlaysRef.value)==null||r.appendChild(o.borderEl),this._slots.has(t)||(this._slots.set(t,[]),this._createPaperLabel(t)),this._slots.get(t).push(o),this.requestRender()}getViewportElement(t,e){var s;return((s=this._findSlot(t,e))==null?void 0:s.borderEl)??null}getSlotsForPaper(t){return(this._slots.get(t)??[]).map(e=>({drawingId:e.drawingId,viewportId:e.viewportId,x:e.x,y:e.y}))}enterEditMode(t,e){const s=this._findSlot(t,e);if(s){this._editingSlot&&this.exitEditMode(),this._editingSlot=s,s.borderEl.style.border="2px dashed rgba(255,140,0,0.9)",s.borderEl.style.boxShadow="0 0 0 1px rgba(255,140,0,0.3)",s.borderEl.style.cursor="crosshair";for(const i of Object.values(s.handles))i.style.display="none"}}exitEditMode(){if(!this._editingSlot)return;const t=this._editingSlot;if(this._editingSlot=null,this._selectedSlot===t){t.borderEl.style.border="2px solid rgba(0,136,255,1)",t.borderEl.style.boxShadow="0 0 0 1px rgba(0,136,255,0.3)",t.borderEl.style.cursor="move";for(const e of Object.values(t.handles))e.style.display="block"}else t.borderEl.style.border="1.5px solid rgba(0,136,255,0.7)",t.borderEl.style.boxShadow="",t.borderEl.style.cursor="pointer"}removeViewport(t,e,s){var r;const i=this._slots.get(t);if(!i)return;const o=i.findIndex(n=>n.drawingId===e&&n.viewportId===s);o!==-1&&(i[o]===this._selectedSlot&&this._selectSlot(null),i[o].borderEl.remove(),i.splice(o,1),i.length===0&&(this._slots.delete(t),(r=this._paperLabels.get(t))==null||r.remove(),this._paperLabels.delete(t)),this.requestRender())}requestRender(){this._renderPending||(this._renderPending=!0,requestAnimationFrame(()=>{this._renderPending=!1,this._doRender()}))}_createPaperLabel(t){var s;const e=document.createElement("bim-label");e.style.cssText="position:absolute;pointer-events:none;transition:none;--bim-label--c:var(--bim-ui_bg-contrast-100);--bim-label--fz:1.5rem;",(s=this._overlaysRef.value)==null||s.appendChild(e),this._paperLabels.set(t,e)}_createBorderEl(t){const e=document.createElement("div");e.style.cssText="position:absolute;box-sizing:border-box;border:1.5px solid rgba(0,136,255,0.7);pointer-events:auto;cursor:pointer;";const s=[{pos:"TL",left:"0%",top:"0%",cursor:"nwse-resize"},{pos:"T",left:"50%",top:"0%",cursor:"ns-resize"},{pos:"TR",left:"100%",top:"0%",cursor:"nesw-resize"},{pos:"L",left:"0%",top:"50%",cursor:"ew-resize"},{pos:"R",left:"100%",top:"50%",cursor:"ew-resize"},{pos:"BL",left:"0%",top:"100%",cursor:"nesw-resize"},{pos:"B",left:"50%",top:"100%",cursor:"ns-resize"},{pos:"BR",left:"100%",top:"100%",cursor:"nwse-resize"}],i={};for(const r of s){const n=document.createElement("div");n.style.cssText=`position:absolute;width:8px;height:8px;background:#fff;border:1.5px solid rgba(0,136,255,0.9);border-radius:2px;transform:translate(-50%,-50%);display:none;pointer-events:none;left:${r.left};top:${r.top};cursor:${r.cursor};`,n.addEventListener("mousedown",a=>this._onHandleMouseDown(t,r.pos,a)),e.appendChild(n),i[r.pos]=n}e.addEventListener("mousedown",r=>this._onBorderMouseDown(t,r));const o=document.createElement("bim-label");o.textContent=this._nameLabel(this._resolveVp(t)),o.style.cssText="position:absolute;top:-18px;left:0;pointer-events:none;--bim-label--c:rgba(0,136,255,0.85);",e.appendChild(o),t.borderEl=e,t.nameEl=o,t.handles=i}_selectSlot(t){if(this._selectedSlot){const e=this._selectedSlot;e.borderEl.style.border="1.5px solid rgba(0,136,255,0.7)",e.borderEl.style.boxShadow="",e.borderEl.style.cursor="pointer";for(const s of Object.values(e.handles))s.style.display="none",s.style.pointerEvents="none";this.dispatchEvent(new CustomEvent("viewportdeselect",{detail:{paper:e.paper,drawingId:e.drawingId,viewportId:e.viewportId},bubbles:!0,composed:!0}))}if(t&&this._selectPaper(null),this._selectedSlot=t,t){t.borderEl.style.border="2px solid rgba(0,136,255,1)",t.borderEl.style.boxShadow="0 0 0 1px rgba(0,136,255,0.3)",t.borderEl.style.cursor="move";for(const e of Object.values(t.handles))e.style.display="block",e.style.pointerEvents="auto";this._showVpToolbar(this._resolveVp(t)),this.dispatchEvent(new CustomEvent("viewportselect",{detail:{paper:t.paper,drawingId:t.drawingId,viewportId:t.viewportId},bubbles:!0,composed:!0}))}else this._hideToolbar()}_selectPaper(t){if(this._selectedPaper){const e=this._selectedPaper;e.style.outline="",e.style.outlineOffset="",this._selectedPaper=null,this.dispatchEvent(new CustomEvent("paperdeselect",{detail:{paper:e},bubbles:!0,composed:!0}))}t&&this._selectSlot(null),this._selectedPaper=t,t?(t.style.outline="5px solid rgba(255,140,0,0.9)",t.style.outlineOffset="6px",this._showPaperToolbar(t),this.dispatchEvent(new CustomEvent("paperselect",{detail:{paper:t},bubbles:!0,composed:!0}))):this._selectedSlot||this._hideToolbar()}_showVpToolbar(t){this._vpSection&&(this._vpSection.label=(t==null?void 0:t.name)||"Viewport"),this._vpNameInput&&(this._vpNameInput.value=(t==null?void 0:t.name)??""),this._vpScaleDropdown&&(this._vpScaleDropdown.value=[String((t==null?void 0:t.drawingScale)??100)]),this._vpToolbarRef.value&&(this._vpToolbarRef.value.style.display=""),this._paperToolbarRef.value&&(this._paperToolbarRef.value.style.display="none");const e=this._toolbarContainerRef.value;e&&(e.style.display="block")}_showPaperToolbar(t){this._paperSection&&(this._paperSection.label=t.label||`${t.size} · ${t.orientation}`),this._paperSheetInput&&(this._paperSheetInput.value=t.sheetNumber),this._paperLabelInput&&(this._paperLabelInput.value=t.label),this._paperSizeDropdown&&(this._paperSizeDropdown.value=[t.size]),this._paperOrientDropdown&&(this._paperOrientDropdown.value=[t.orientation]),this._vpToolbarRef.value&&(this._vpToolbarRef.value.style.display="none"),this._paperToolbarRef.value&&(this._paperToolbarRef.value.style.display="");const e=this._toolbarContainerRef.value;e&&(e.style.display="block")}_hideToolbar(){const t=this._toolbarContainerRef.value;t&&(t.style.display="none")}_onBorderMouseDown(t,e){e.button===0&&t!==this._editingSlot&&(e.stopPropagation(),this._startDrag(t,"move",e))}_onHandleMouseDown(t,e,s){s.button===0&&t!==this._editingSlot&&(s.stopPropagation(),this._startDrag(t,e,s))}_startDrag(t,e,s){const i=this._resolveVp(t);i&&(this._dragSlot=t,this._dragType=e,this._dragStartClient={x:s.clientX,y:s.clientY},this._dragTotalMovement=0,this._dragOrigin={x:t.x,y:t.y,left:i.left,right:i.right,top:i.top,bottom:i.bottom})}_findSlot(t,e){for(const s of this._slots.values()){const i=s.find(o=>o.drawingId===t&&o.viewportId===e);if(i)return i}return null}_resolveVp(t){if(!this.components)return null;const e=this.components.get(Z).list.get(t.drawingId);return(e==null?void 0:e.viewports.get(t.viewportId))??null}_getPxPerMm(t){return t.drawingAreaEl.getBoundingClientRect().width/(t.widthMm-2*t.margin)}_applyMoveDrag(t,e){const s=this._dragSlot,i=this._dragOrigin,o=this._resolveVp(s);if(!o)return;const r=s.paper,n=this._getPxPerMm(r),l=(r.drawingSlotEl??r.drawingAreaEl).getBoundingClientRect(),c=l.width/n,f=l.height/n,v=(o.right-o.left)*(1e3/o.drawingScale),w=(o.top-o.bottom)*(1e3/o.drawingScale);s.x=Math.max(0,Math.min(c-v,i.x+t/n)),s.y=Math.max(0,Math.min(f-w,i.y+e/n))}_applyResizeDrag(t,e,s){const i=this._dragSlot,o=this._dragOrigin,r=this._resolveVp(i);if(!r)return;const n=i.paper,a=this._getPxPerMm(n)*(1e3/r.drawingScale),l=e/a,c=s/a;t.includes("L")&&(r.left=o.left+l),t.includes("R")&&(r.right=o.right+l),t.includes("T")&&(r.top=o.top-c),t.includes("B")&&(r.bottom=o.bottom-c);const f=r.drawingScale,v=this._getPxPerMm(n),d=(n.drawingSlotEl??n.drawingAreaEl).getBoundingClientRect(),h=d.width/v,y=d.height/v,m=(h-i.x)*f/1e3,g=(y-i.y)*f/1e3,p=.1;t.includes("L")&&(r.left=Math.max(r.left,r.right-m),r.left=Math.min(r.left,r.right-p)),t.includes("R")&&(r.right=Math.min(r.right,r.left+m),r.right=Math.max(r.right,r.left+p)),t.includes("T")&&(r.top=Math.min(r.top,r.bottom+g),r.top=Math.max(r.top,r.bottom+p)),t.includes("B")&&(r.bottom=Math.max(r.bottom,r.top-g),r.bottom=Math.min(r.bottom,r.top-p))}_nameLabel(t){if(!t)return"";const e=t.name??"",s=`1:${t.drawingScale}`;return e?`${e} - ${s}`:s}_sceneOf(t){let e=t.camera;for(;e;){if(e instanceof zt)return e;e=e.parent}return null}_doRender(){const t=this._renderer;if(!t||this._slots.size===0)return;const e=this.getBoundingClientRect(),s=e.width,i=e.height,o=window.devicePixelRatio;t.setScissorTest(!1),t.setClearColor(0,0),t.clear(),t.setScissorTest(!0);for(const[r,n]of this._slots){const a=this._paperLabels.get(r);if(a){const d=r.getBoundingClientRect(),h=(d.left-e.left-this._pan.x)/this._zoom,y=(d.top-e.top-this._pan.y)/this._zoom-42;a.style.left=`${h}px`,a.style.top=`${y}px`;const m=[r.sheetNumber,r.label].filter(Boolean);a.textContent=m.length?m.join(": "):""}const l=r.drawingAreaEl;if(!l)continue;const c=l.getBoundingClientRect(),f=c.width/(r.widthMm-2*r.margin),v=r.drawingSlotEl??l,w=v!==l?v.getBoundingClientRect():c;for(const d of n){const h=this._resolveVp(d),y=h?this._sceneOf(h):null,m=h?(h.right-h.left)*(1e3/h.drawingScale):0,g=h?(h.top-h.bottom)*(1e3/h.drawingScale):0,p=w.left-e.left+d.x*f,S=w.top-e.top+d.y*f,k=m*f,P=g*f,A=(p-this._pan.x)/this._zoom,F=(S-this._pan.y)/this._zoom,G=k/this._zoom,W=P/this._zoom;if(d.borderEl.style.left=`${A}px`,d.borderEl.style.top=`${F}px`,d.borderEl.style.width=`${G}px`,d.borderEl.style.height=`${W}px`,d.nameEl.textContent=this._nameLabel(h),!y||!h||p+k<=0||p>=s||S+P<=0||S>=i)continue;const D=Math.round(p*o),I=Math.round((i-S-P)*o),X=Math.round(k*o),z=Math.round(P*o);t.setScissor(D,I,X,z),t.setViewport(D,I,X,z),t.setClearColor(16777215,1),t.clear(),t.render(y,h.camera)}}t.setScissorTest(!1)}_applyTransform(){const t=`translate(${this._pan.x}px,${this._pan.y}px) scale(${this._zoom})`;this._worldRef.value&&(this._worldRef.value.style.transform=t),this._overlaysRef.value&&(this._overlaysRef.value.style.transform=t)}_handleSlotClick(t,e){e.detail>=2?this.dispatchEvent(new CustomEvent("viewportactivate",{detail:{paper:t.paper,drawingId:t.drawingId,viewportId:t.viewportId},bubbles:!0,composed:!0})):this._selectSlot(this._selectedSlot===t?null:t)}connectedCallback(){super.connectedCallback(),this.addEventListener("wheel",this._onWheel,{passive:!1}),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("contextmenu",this._onContextMenu),window.addEventListener("mousemove",this._onMouseMove),window.addEventListener("mouseup",this._onMouseUp)}disconnectedCallback(){var t,e;super.disconnectedCallback(),this.removeEventListener("wheel",this._onWheel),this.removeEventListener("mousedown",this._onMouseDown),this.removeEventListener("contextmenu",this._onContextMenu),window.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("mouseup",this._onMouseUp),(t=this._resizeObserver)==null||t.disconnect(),(e=this._renderer)==null||e.dispose(),this._renderer=null}_buildVpToolbar(){const t=this._vpToolbarRef.value;if(!t)return;const e=document.createElement("bim-dropdown");e.label="Scale",e.vertical=!0,e.style.width="140px";for(const n of[25,50,100,200,500]){const a=document.createElement("bim-option");a.label=`1:${n}`,a.value=String(n),e.appendChild(a)}e.addEventListener("change",()=>{if(!this._selectedSlot)return;const n=this._resolveVp(this._selectedSlot);if(!n)return;const a=Number(e.value[0]);Number.isNaN(a)||(n.drawingScale=a,this.requestRender())});const s=document.createElement("bim-text-input");s.label="Name",s.vertical=!0,s.placeholder="Viewport name...",s.style.width="140px",s.addEventListener("input",()=>{if(!this._selectedSlot)return;const n=this._resolveVp(this._selectedSlot);n&&(n.name=s.value,this._vpSection&&(this._vpSection.label=s.value||"Viewport"),this.requestRender())});const i=document.createElement("bim-button");i.label="Export DXF",i.icon="mingcute:file-export-line",i.vertical=!0,i.addEventListener("click",()=>{if(!this._selectedSlot||!this.components)return;const n=this._resolveVp(this._selectedSlot);if(!n)return;const l=this.components.get(Z).list.get(this._selectedSlot.drawingId);if(!l)return;const c=this.components.get(nt).exporter.export([{drawing:l,viewports:[{viewport:n}]}]);this.dispatchEvent(new CustomEvent("viewportdxfexport",{detail:{drawingId:this._selectedSlot.drawingId,viewportId:this._selectedSlot.viewportId,dxf:c},bubbles:!0,composed:!0}))});const o=document.createElement("bim-toolbar-section");o.appendChild(s),o.appendChild(e),t.appendChild(o);const r=document.createElement("bim-toolbar-section");r.label="Export",r.appendChild(i),t.appendChild(r),this._vpSection=o,this._vpNameInput=s,this._vpScaleDropdown=e}_buildPaperToolbar(){const t=this._paperToolbarRef.value;if(!t)return;const e=document.createElement("bim-text-input");e.label="Sheet",e.vertical=!0,e.placeholder="A-01...",e.style.width="100px",e.addEventListener("input",()=>{this._selectedPaper&&(this._selectedPaper.sheetNumber=e.value,this.requestRender())});const s=document.createElement("bim-text-input");s.label="Label",s.vertical=!0,s.placeholder="Sheet label...",s.style.width="160px",s.addEventListener("input",()=>{this._selectedPaper&&(this._selectedPaper.label=s.value,this._paperSection&&(this._paperSection.label=s.value||`${this._selectedPaper.size} · ${this._selectedPaper.orientation}`),this.requestRender())});const i=document.createElement("bim-dropdown");i.label="Size",i.vertical=!0;for(const l of["A0","A1","A2","A3","A4"]){const c=document.createElement("bim-option");c.label=l,c.value=l,i.appendChild(c)}i.addEventListener("change",()=>{this._selectedPaper&&(this._selectedPaper.size=i.value[0],this.requestRender())});const o=document.createElement("bim-dropdown");o.label="Orientation",o.vertical=!0;for(const[l,c]of[["Landscape","landscape"],["Portrait","portrait"]]){const f=document.createElement("bim-option");f.label=l,f.value=c,o.appendChild(f)}o.addEventListener("change",()=>{this._selectedPaper&&(this._selectedPaper.orientation=o.value[0],this.requestRender())});const r=document.createElement("bim-button");r.label="Export DXF",r.icon="mingcute:file-export-line",r.vertical=!0,r.addEventListener("click",()=>{var v;if(!this._selectedPaper||!this.components)return;const l=this.components.get(Z),c=new Map;for(const{drawingId:w,viewportId:d,x:h,y}of this.getSlotsForPaper(this._selectedPaper)){if(!c.has(w)){const g=l.list.get(w);if(!g)continue;c.set(w,{drawing:g,viewports:[]})}const m=(v=l.list.get(w))==null?void 0:v.viewports.get(d);m&&c.get(w).viewports.push({viewport:m,x:h,y})}const f=this.components.get(nt).exporter.export([...c.values()],{widthMm:this._selectedPaper.widthMm,heightMm:this._selectedPaper.heightMm,margin:this._selectedPaper.margin});this.dispatchEvent(new CustomEvent("paperdxfexport",{detail:{paper:this._selectedPaper,dxf:f},bubbles:!0,composed:!0}))});const n=document.createElement("bim-toolbar-section");n.appendChild(e),n.appendChild(s),n.appendChild(i),n.appendChild(o),t.appendChild(n);const a=document.createElement("bim-toolbar-section");a.label="Export",a.appendChild(r),t.appendChild(a),this._paperSection=n,this._paperSheetInput=e,this._paperLabelInput=s,this._paperSizeDropdown=i,this._paperOrientDropdown=o}firstUpdated(){var t;(t=this._toolbarContainerRef.value)==null||t.addEventListener("mousedown",e=>e.stopPropagation()),this._buildVpToolbar(),this._buildPaperToolbar(),this._applyTransform(),this._renderer=new kt({canvas:this._canvasRef.value,antialias:!0,alpha:!0}),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.autoClear=!1,this._renderer.setSize(this.clientWidth,this.clientHeight),this._resizeObserver=new ResizeObserver(()=>{var e;(e=this._renderer)==null||e.setSize(this.clientWidth,this.clientHeight),this.requestRender()}),this._resizeObserver.observe(this)}render(){return V`
      <div class="world" ${T(this._worldRef)}>
        <slot></slot>
      </div>
      <canvas ${T(this._canvasRef)}></canvas>
      <div class="overlays" ${T(this._overlaysRef)}></div>
      <div class="toolbar-container" ${T(this._toolbarContainerRef)}>
        <bim-toolbar style="border: 1px solid var(--bim-ui_bg-contrast-20); box-shadow: 0 2px 8px rgba(0,0,0,0.25);" ${T(this._vpToolbarRef)}></bim-toolbar>
        <bim-toolbar style="border: 1px solid var(--bim-ui_bg-contrast-20); box-shadow: 0 2px 8px rgba(0,0,0,0.25); display: none;" ${T(this._paperToolbarRef)}></bim-toolbar>
      </div>
    `}};st.styles=N`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
      background-color: var(--bim-ui_bg-base);
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 24px 24px;
      cursor: default;
      user-select: none;
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .world,
    .overlays {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: 0 0;
    }

    .overlays {
      pointer-events: none;
    }

    .toolbar-container {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      z-index: 10;
    }
  `;let at=st;export{at as S,E as V,$ as W,J as a};
