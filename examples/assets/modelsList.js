import{x as m}from"./lit-element-BOuWA2QR.js";import{P as c,C as l,W as d,S as p,a as b,b as f,G as g,I as w,F as u,T as C}from"./index-CXT7eChZ.js";import{b as L}from"./index-C4iIjypo.js";import{t as v}from"./index-B4KT8VJB.js";c.init();const e=new l,I=e.get(d),n=I.create(),s=new p(e);s.setup();n.scene=s;const a=document.createElement("bim-viewport"),r=new b(e,a);n.renderer=r;const i=new f(e);n.camera=i;a.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const S=e.get(g);S.create(n);e.init();const F=e.get(w);await F.setup();const M=e.get(u);M.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[y]=v.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),E=C.create(()=>{const[t]=L.loadIfc({components:e});return m`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${y}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:E,viewport:a}}};o.layout="main";document.body.append(o);
