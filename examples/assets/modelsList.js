import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,f as c,a as l,s as p,i as d,k as b,N as f,m as g,I as w,e as u,g as I}from"./index-Dhy3Nnp8.js";import{b as L}from"./index-k1wvrl6r.js";import{t as v}from"./index-BQd6VEx2.js";m.init();const e=new c,C=e.get(l),t=C.create(),s=new p(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new d(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const y=e.get(f);y.create(t);e.init();const E=e.get(g);await E.setup();const M=e.get(w);M.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[$]=v.modelsList({components:e}),k=u.create(()=>{const[n]=L.loadIfc({components:e});return I`
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
