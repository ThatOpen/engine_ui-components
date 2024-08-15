import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as c,a as m,C as l,O as d,b as p,H as b,u as f,R as u,h as w,j as g,m as v}from"./template-BG_ysDJ2.js";import{b as C}from"./index-BioTeGwb.js";import{t as L}from"./index-DbfqrXne.js";c.init();const e=new m,h=e.get(l),t=h.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const I=e.get(f);I.create(t);e.init();const y=e.get(u);await y.setup();const E=e.get(w);E.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[M]=L.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),$=g.create(()=>{const[n]=C.loadIfc({components:e});return v`
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
    `,elements:{panel:$,viewport:a}}};o.layout="main";document.body.append(o);
