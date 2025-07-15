import"./lit-html-Cs86_c16.js";import{a as m,C as l,W as p,S as d,b,c as w,G as u,I as g,F as f,R as h,m as L}from"./index-BgQRAdOj.js";import{b as v}from"./index-NGXf93vL.js";import{e as C}from"./index-E2Xb6mG8.js";m.init();const e=new l,F=e.get(p),t=F.create();t.name="main";const s=new d(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),c=new b(e,o);t.renderer=c;const i=new w(e);t.camera=i;o.addEventListener("resize",()=>{c.resize(),i.updateAspect()});const S=e.get(u);S.create(t);e.init();const j=e.get(g);await j.setup();const n=e.get(f),k="https://thatopen.github.io/engine_fragment/resources/worker.mjs",y=await fetch(k),I=await y.blob(),R=new File([I],"worker.mjs",{type:"text/javascript"}),U=URL.createObjectURL(R);n.init(U);t.camera.controls.addEventListener("rest",()=>n.core.update(!0));n.list.onItemSet.add(async({value:a})=>{a.useCamera(t.camera.three),t.scene.three.add(a.object),await n.core.update(!0)});const[E]=C.modelsList({components:e,metaDataTags:["schema"],actions:{download:!0}}),G=h.create(()=>{const[a]=v.loadFrag({components:e});return L`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${a}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${E}
    </bim-panel-section>
   </bim-panel> 
  `}),r=document.createElement("bim-grid");r.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:G,viewport:o}}};r.layout="main";document.body.append(r);
