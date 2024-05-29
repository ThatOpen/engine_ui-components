import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as d,f as m,a as u,s as b,e as f,k as w,N as g,m as y,h,j as v}from"./index-B-aNsZHc.js";import{t as x}from"./index-DwzI1lTL.js";d.init();const a=document.createElement("bim-viewport"),e=new m,C=e.get(u),t=C.create(),c=new b(e);c.setup();t.scene=c;const o=new f(e,a);t.renderer=o;const s=new w(e);t.camera=s;s.controls.setLookAt(10,5.5,5,-4,-1,-6.5);a.addEventListener("resize",()=>{o.resize(),s.updateAspect()});e.init();o.postproduction.enabled=!0;o.postproduction.setPasses({ao:!0});const A=e.get(g);A.create(t);const l=e.get(y);await l.setup();const k=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),S=await k.arrayBuffer(),$=new Uint8Array(S),E=await l.load($);t.scene.three.add(E);const[n]=x.worldsConfiguration({components:e}),L=h.create(()=>v`
    <bim-panel label="App Config">
      <bim-panel-section label="Worlds">
        <div style="display: flex; gap: 0.5rem;">
          <bim-text-input @input=${p=>{const r=p.target;n.queryString=r.value!==""?r.value:null}} placeholder="Search..."></bim-text-input>
          <bim-button style="flex: 0;" @click=${()=>{n.expanded=!n.expanded}} icon="eva:expand-outline"></bim-button> 
        </div> 
        ${n}
      </bim-panel-section>
    </bim-panel>
  `),i=document.createElement("bim-grid");i.layouts={main:{template:`
    "worldsConfigPanel viewport"
    /24rem 1fr
    `,elements:{worldsConfigPanel:L,viewport:a}}};i.layout="main";document.body.append(i);
