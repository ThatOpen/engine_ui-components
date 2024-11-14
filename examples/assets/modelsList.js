import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as m,C as c,a as l,e as d,m as p,x as b,y as f,i as w,b as g,z as u,j as v}from"./index-b5UjG9AG.js";import{b as y}from"./index-cxW_AbrR.js";import{t as C}from"./index-CagUo1tF.js";import"./lit-html-paDGiEfB.js";m.init();const e=new c,L=e.get(l),t=L.create(),o=new d(e);o.setup();t.scene=o;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const z=e.get(f);z.create(t);e.init();const I=e.get(w);await I.setup();const T=e.get(g);T.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[h]=C.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),x=u.create(()=>{const[n]=y.loadIfc({components:e});return v`
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
