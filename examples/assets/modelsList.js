import"./modulepreload-polyfill-B5Qt9EMX.js";import{m,p as c,C as d,s as l,i as p,H as b,d as u,R as w,u as f,t as g,h as C}from"./template-1aA_fGv-.js";import{b as L}from"./index-D0HARS57.js";import{t as v}from"./index-CEeB810x.js";m.init();const e=new c,I=e.get(d),t=I.create(),s=new l(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const y=e.get(u);y.create(t);e.init();const E=e.get(w);await E.setup();const M=e.get(f);M.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[h]=v.modelsList({components:e}),z=g.create(()=>{const[n]=L.loadIfc({components:e});return C`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${h}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:z,viewport:a}}};o.layout="main";document.body.append(o);
