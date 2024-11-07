import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as m,C as c,a as l,e as d,m as p,x as b,N as f,y as w,b as g,j as u,k as L}from"./index-CSvFTziO.js";import{b as v}from"./index-CL2lPize.js";import{t as C}from"./index-D495RstS.js";import"./lit-html-paDGiEfB.js";m.init();const e=new c,y=e.get(l),t=y.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),i=new p(e,a);t.renderer=i;const r=new b(e);t.camera=r;a.addEventListener("resize",()=>{i.resize(),r.updateAspect()});const I=e.get(f);I.create(t);e.init();const T=e.get(w);await T.setup();const h=e.get(g);h.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[x]=C.modelsList({components:e,tags:{schema:!0,viewDefinition:!1},actions:{download:!1}}),E=u.create(()=>{const[n]=v.loadIfc({components:e});return L`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${x}
    </bim-panel-section>
   </bim-panel> 
  `}),o=document.createElement("bim-grid");o.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:E,viewport:a}}};o.layout="main";document.body.append(o);
