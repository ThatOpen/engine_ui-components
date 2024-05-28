import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,f as c,a as l,s as p,i as d,k as b,N as f,m as u,u as g,e as w,g as L}from"./index-Dd0JWJAT.js";import{b as v}from"./index-Ctdfb-mW.js";import{t as C}from"./index-DUwKbYHc.js";m.init();const e=new c,I=e.get(l),t=I.create(),s=new p(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new d(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const y=e.get(f);y.create(t);e.init();const E=e.get(u);await E.setup();const M=e.get(g);M.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[$]=C.modelsList({components:e}),k=w.create(()=>{const[n]=v.loadIfc({components:e});return L`
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
