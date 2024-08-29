import"./lit-html-DcU_S_gY.js";import{T as c,o as m,a as l,L as d,M as p,N as b,l as f,E as w,_ as g,z as u,m as L}from"./template-BHX6Qr0d.js";import{b as v}from"./index-BAwWIFSa.js";import{t as E}from"./index-CqAUTGMA.js";c.init();const e=new m,M=e.get(l),t=M.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const z=e.get(f);z.create(t);e.init();const C=e.get(w);await C.setup();const I=e.get(g);I.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[y]=E.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),h=u.create(()=>{const[n]=v.loadIfc({components:e});return L`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${y}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:h,viewport:a}}};o.layout="main";document.body.append(o);
