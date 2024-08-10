import"./modulepreload-polyfill-B5Qt9EMX.js";import{m,p as c,C as l,O as d,a as p,H as b,u as f,R as u,h as w,i as g,j as v}from"./template-DMFEDxph.js";import{b as C}from"./index-CVZ3O0Dy.js";import{t as L}from"./index-Du0rpbBE.js";m.init();const e=new c,h=e.get(l),t=h.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const I=e.get(f);I.create(t);e.init();const y=e.get(u);await y.setup();const E=e.get(w);E.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[M]=L.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),z=g.create(()=>{const[n]=C.loadIfc({components:e});return v`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${M}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:z,viewport:a}}};o.layout="main";document.body.append(o);
