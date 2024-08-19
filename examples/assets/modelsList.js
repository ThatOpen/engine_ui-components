import"./lit-html-DcU_S_gY.js";import{d as c,o as m,a as l,L as d,M as p,N as b,l as f,E as w,_ as g,R as u,m as L}from"./template-DUn1E-Qh.js";import{b as v}from"./index-CrM_67hV.js";import{t as E}from"./index-BeGjUNvO.js";c.init();const e=new m,M=e.get(l),t=M.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const C=e.get(f);C.create(t);e.init();const I=e.get(w);await I.setup();const y=e.get(g);y.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[h]=E.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),z=u.create(()=>{const[n]=v.loadIfc({components:e});return L`
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
