import"./modulepreload-polyfill-B5Qt9EMX.js";import{E as c,d as l,q as d,$ as m,W as p,F as b,I as f,a as g,t as w,b as u}from"./index-s2aJkd03.js";import{A as v,a as C,b as I}from"./index-DOYVmgE3.js";v.registerComponents();const a=document.querySelector("bim-grid");a.layouts={main:`
    "c-panels-left viewer"
    "c-panels-left viewer"
    / 23rem 1fr
  `};a.layout="main";const e=new c,s=document.querySelector("bim-viewport[name='viewer']"),L=e.get(l),n=L.create(),o=new d(e);o.setup();n.scene=o;const r=new m(e,s);n.renderer=r;const i=new p(e);n.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const q=e.get(b);q.create(n);e.init();const y=e.get(f);await y.setup();const A=e.get(g);A.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[F]=w.modelsList({components:e}),$=C.create(()=>{const[t]=u.loadIfc({components:e});return I`
   <bim-panel active label="IFC Models">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${F}
    </bim-panel-section>
   </bim-panel> 
  `}),E=a.getContainer("panels","left");E.append($);
