import"./lit-html-Cs86_c16.js";import{T as c,C as m,a as l,e as d,m as p,U as b,O as f,N as w,b as g,z as u,k as v}from"./template-DD9ofnYC.js";import{b as C}from"./index-DqIjaxVa.js";import{t as L}from"./index-Ba8dZRJF.js";c.init();const e=new m,z=e.get(l),t=z.create(),o=new d(e);o.setup();t.scene=o;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const I=e.get(f);I.create(t);e.init();const T=e.get(w);await T.setup();const h=e.get(g);h.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[y]=L.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),E=u.create(()=>{const[n]=C.loadIfc({components:e});return v`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${y}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:E,viewport:a}}};s.layout="main";document.body.append(s);
