<<<<<<< HEAD
import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as m,C as c,W as l,S as d,a as p,b,G as f,I as g,F as w,l as u,m as L}from"./index-C7FJVyai.js";import{b as C}from"./index-Dl6TckBh.js";import{t as v}from"./index-BpZMOeZM.js";import"./lit-html-paDGiEfB.js";m.init();const e=new c,I=e.get(l),n=I.create(),s=new d(e);s.setup();n.scene=s;const a=document.createElement("bim-viewport"),r=new p(e,a);n.renderer=r;const i=new b(e);n.camera=i;a.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const S=e.get(f);S.create(n);e.init();const F=e.get(g);await F.setup();const M=e.get(w);M.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[y]=v.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),E=u.create(()=>{const[t]=C.loadIfc({components:e});return L`
=======
import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as m,C as c,W as l,S as d,a as p,b,G as f,I as g,F as w,l as u,m as L}from"./index-N2x2mgv3.js";import{b as C}from"./index-DAXFTtA6.js";import{t as v}from"./index-BazQpUSZ.js";import"./lit-html-paDGiEfB.js";m.init();const e=new c,I=e.get(l),n=I.create(),s=new d(e);s.setup();n.scene=s;const a=document.createElement("bim-viewport"),r=new p(e,a);n.renderer=r;const i=new b(e);n.camera=i;a.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const S=e.get(f);S.create(n);e.init();const F=e.get(g);await F.setup();const M=e.get(w);M.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[y]=v.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),E=u.create(()=>{const[t]=C.loadIfc({components:e});return L`
>>>>>>> main
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
