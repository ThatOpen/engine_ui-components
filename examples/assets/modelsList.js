import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as c,a as m,C as l,i as p,n as d,k as b,u,R as w,b as f,h as g,j as C}from"./index-iHSjA6qM.js";import{b as L}from"./index-B3Tx1nQG.js";import{t as v}from"./index-BdZzXOWY.js";c.init();const e=new m,I=e.get(l),t=I.create(),s=new p(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new d(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const y=e.get(u);y.create(t);e.init();const E=e.get(w);await E.setup();const M=e.get(f);M.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[$]=v.modelsList({components:e}),h=g.create(()=>{const[n]=L.loadIfc({components:e});return C`
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
    `,elements:{panel:h,viewport:a}}};o.layout="main";document.body.append(o);
