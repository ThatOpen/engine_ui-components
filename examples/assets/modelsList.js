import"./modulepreload-polyfill-B5Qt9EMX.js";import{m,p as c,C as d,s as l,i as p,H as b,d as g,R as w,h as f,t as u,g as C}from"./template-DPyExspr.js";import{b as L}from"./index-NwPu_Sub.js";import{t as v}from"./index-DTh-BaZi.js";m.init();const e=new c,I=e.get(d),t=I.create(),s=new l(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const h=e.get(g);h.create(t);e.init();const y=e.get(w);await y.setup();const E=e.get(f);E.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[M]=v.modelsList({components:e}),z=u.create(()=>{const[n]=L.loadIfc({components:e});return C`
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
