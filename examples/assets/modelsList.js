import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as m,C as c,a as l,e as d,m as p,x as b,N as f,y as w,b as g,j as u,k as v}from"./index-ClbvSkhy.js";import{b as C}from"./index-DkQsnQD0.js";import{t as L}from"./index-qe2NVCJW.js";import"./lit-html-paDGiEfB.js";m.init();const e=new c,y=e.get(l),t=y.create(),o=new d(e);o.setup();t.scene=o;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const I=e.get(f);I.create(t);e.init();const M=e.get(w);await M.setup();const T=e.get(g);T.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[h]=L.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),x=u.create(()=>{const[n]=C.loadIfc({components:e});return v`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${h}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:x,viewport:a}}};s.layout="main";document.body.append(s);
