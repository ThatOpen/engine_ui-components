import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as d,C as p,a as m,e as u,g as f,x as b,y as w,h as g,i as h,z as y,j as x}from"./index-b5UjG9AG.js";import{t as v}from"./index-CagUo1tF.js";import"./lit-html-paDGiEfB.js";d.init();const a=document.createElement("bim-viewport"),t=new p,C=t.get(m),e=C.create();e.name="Default World";e.scene=new u(t);e.scene.three.background=null;e.scene.setup();e.renderer=new f(t,a);const{postproduction:o}=e.renderer;e.camera=new b(t);e.camera.controls.setLookAt(1.5,1.4,.12,-3.5,-.5,-7);a.addEventListener("resize",()=>{e.renderer&&e.renderer.resize(),e.camera.updateAspect()});t.init();const A=t.get(w),i=A.create(e);i.material.uniforms.uColor.value=new g("#4D4D4D");const c=t.get(h);await c.setup();const T=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),z=await T.arrayBuffer(),D=new Uint8Array(z),E=await c.load(D);e.scene.three.add(E);o.enabled=!0;o.customEffects.excludedMeshes.push(i.three);o.setPasses({ao:!0});const[n]=v.worldsConfiguration({components:t}),S=y.create(()=>x`
    <bim-panel label="App Config">
      <bim-panel-section label="Worlds">
        <div style="display: flex; gap: 0.5rem;">
          <bim-text-input @input=${l=>{const s=l.target;n.queryString=s.value!==""?s.value:null}} placeholder="Search..."></bim-text-input>
          <bim-button style="flex: 0;" @click=${()=>{n.expanded=!n.expanded}} icon="eva:expand-outline"></bim-button> 
        </div> 
        ${n}
      </bim-panel-section>
    </bim-panel>
  `),r=document.createElement("bim-grid");r.layouts={main:{template:`
    "worldsConfigPanel viewport"
    /26rem 1fr
    `,elements:{worldsConfigPanel:S,viewport:a}}};r.layout="main";document.body.append(r);
