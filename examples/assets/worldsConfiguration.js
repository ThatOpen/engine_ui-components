import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as d,C as p,W as m,S as u,i as f,b,G as w,k as g,I as h,l as y,m as v}from"./index-Dx9lktJI.js";import{t as x}from"./index-CKLQOFY_.js";import"./lit-html-paDGiEfB.js";d.init();const a=document.createElement("bim-viewport"),t=new p,C=t.get(m),e=C.create();e.name="Default World";e.scene=new u(t);e.scene.three.background=null;e.scene.setup();e.renderer=new f(t,a);const{postproduction:o}=e.renderer;e.camera=new b(t);e.camera.controls.setLookAt(1.5,1.4,.12,-3.5,-.5,-7);a.addEventListener("resize",()=>{e.renderer&&e.renderer.resize(),e.camera.updateAspect()});t.init();const S=t.get(w),i=S.create(e);i.material.uniforms.uColor.value=new g("#4D4D4D");const l=t.get(h);await l.setup();const L=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),A=await L.arrayBuffer(),k=new Uint8Array(A),D=await l.load(k);e.scene.three.add(D);o.enabled=!0;o.customEffects.excludedMeshes.push(i.three);o.setPasses({ao:!0});const[n]=x.worldsConfiguration({components:t}),E=y.create(()=>v`
    <bim-panel label="App Config">
      <bim-panel-section label="Worlds">
        <div style="display: flex; gap: 0.5rem;">
          <bim-text-input @input=${c=>{const s=c.target;n.queryString=s.value!==""?s.value:null}} placeholder="Search..."></bim-text-input>
          <bim-button style="flex: 0;" @click=${()=>{n.expanded=!n.expanded}} icon="eva:expand-outline"></bim-button> 
        </div> 
        ${n}
      </bim-panel-section>
    </bim-panel>
  `),r=document.createElement("bim-grid");r.layouts={main:{template:`
    "worldsConfigPanel viewport"
    /26rem 1fr
    `,elements:{worldsConfigPanel:E,viewport:a}}};r.layout="main";document.body.append(r);
