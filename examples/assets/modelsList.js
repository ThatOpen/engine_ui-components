import"./modulepreload-polyfill-B5Qt9EMX.js";import{m,p as c,C as l,s as d,i as p,H as b,d as f,R as w,h as g,t as u,g as v}from"./template-CjtT_YCH.js";import{b as C}from"./index-GI6aOwIt.js";import{t as L}from"./index-BiwU9ezV.js";m.init();const e=new c,h=e.get(l),t=h.create(),o=new d(e);o.setup();t.scene=o;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const I=e.get(f);I.create(t);e.init();const y=e.get(w);await y.setup();const E=e.get(g);E.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[M]=L.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),z=u.create(()=>{const[n]=C.loadIfc({components:e});return v`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${M}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:z,viewport:a}}};s.layout="main";document.body.append(s);
