import"./modulepreload-polyfill-B5Qt9EMX.js";import{E as c,d as l,q as m,$ as d,W as p,F as b,I as f,c as g,t as w}from"./index-BJN8AjRC.js";import{b as u,E as C,m as v}from"./index-RJxXwJnz.js";import{b as I}from"./index-B0R8Bj5n.js";u.registerComponents();const o=document.querySelector("bim-grid");o.layouts={main:`
    "c-panels-left viewer"
    "c-panels-left viewer"
    / 23rem 1fr
  `};o.layout="main";const e=new c,s=document.querySelector("bim-viewport[name='viewer']"),L=e.get(l),n=L.create(),a=new m(e);a.setup();n.scene=a;const r=new d(e,s);n.renderer=r;const i=new p(e);n.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const E=e.get(b);E.create(n);e.init();const q=e.get(f);await q.setup();const y=e.get(g);y.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[F]=w.modelsList({components:e}),$=C.create(()=>{const[t]=I.loadIfc({components:e});return v`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${F}
    </bim-panel-section>
   </bim-panel> 
  `}),M=o.getContainer("panels","left");M.append($);
