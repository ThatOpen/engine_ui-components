import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as c,a as m,C as p,i as l,n as d,k as b,u,R as g,b as w,J as f,g as C}from"./index-CkGX2cDx.js";import{b as L}from"./index-CJFiyFTO.js";import{t as v}from"./index-DB26NqiI.js";c.init();const e=new m,I=e.get(p),t=I.create(),s=new l(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new d(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const y=e.get(u);y.create(t);e.init();const E=e.get(g);await E.setup();const M=e.get(w);M.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[$]=v.modelsList({components:e}),k=f.create(()=>{const[n]=L.loadIfc({components:e});return C`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${$}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:k,viewport:a}}};o.layout="main";document.body.append(o);
