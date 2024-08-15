import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as d,a as p,C as u,O as m,x as f,H as b,u as w,i as g,R as h,j as x,m as y}from"./template-BG_ysDJ2.js";import{t as v}from"./index-DbfqrXne.js";d.init();const a=document.createElement("bim-viewport"),t=new p,C=t.get(u),e=C.create();e.name="Default World";e.scene=new m(t);e.scene.three.background=null;e.scene.setup();e.renderer=new f(t,a);const{postproduction:o}=e.renderer;e.camera=new b(t);e.camera.controls.setLookAt(1.5,1.4,.12,-3.5,-.5,-7);a.addEventListener("resize",()=>{e.renderer&&e.renderer.resize(),e.camera.updateAspect()});t.init();const A=t.get(w),i=A.create(e);i.material.uniforms.uColor.value=new g("#4D4D4D");const l=t.get(h);await l.setup();const D=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),E=await D.arrayBuffer(),S=new Uint8Array(E),$=await l.load(S);e.scene.three.add($);o.enabled=!0;o.customEffects.excludedMeshes.push(i.three);o.setPasses({ao:!0});const[n]=v.worldsConfiguration({components:t}),k=x.create(()=>y`
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
    `,elements:{worldsConfigPanel:k,viewport:a}}};r.layout="main";document.body.append(r);
