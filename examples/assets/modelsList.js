import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as m,C as c,W as l,S as d,a as p,b,G as f,I as g,F as w,k as u,m as C}from"./index-DIiSmYK8.js";import{b as I}from"./index-DpalgvWh.js";import{t as L}from"./index-O2YoEc54.js";import"./lit-html-CuBe1DX_.js";m.init();const e=new c,v=e.get(l),n=v.create(),s=new d(e);s.setup();n.scene=s;const a=document.createElement("bim-viewport"),r=new p(e,a);n.renderer=r;const i=new b(e);n.camera=i;a.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const S=e.get(f);S.create(n);e.init();const F=e.get(g);await F.setup();const M=e.get(w);M.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[y]=L.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),E=u.create(()=>{const[t]=I.loadIfc({components:e});return C`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${y}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:E,viewport:a}}};o.layout="main";document.body.append(o);
