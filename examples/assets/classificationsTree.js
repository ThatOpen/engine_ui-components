import"./modulepreload-polyfill-B5Qt9EMX.js";import{E as p,d as m,q as d,$ as f,W as u,F as b,I as g,a as w,t as C,f as I,c as v,b as y}from"./index-s2aJkd03.js";import{A as S,a as T,b as A}from"./index-DOYVmgE3.js";S.registerComponents();const n=document.querySelector("bim-grid");n.layouts={main:`
    "c-panels-left viewer"
    "c-panels-left viewer"
    / 23rem 1fr
  `};n.layout="main";const e=new p,i=document.querySelector("bim-viewport[name='viewer']"),E=e.get(m),a=E.create(),r=new d(e);r.setup();a.scene=r;const o=new f(e,i);a.renderer=o;const c=new u(e);a.camera=c;i.addEventListener("resize",()=>{o.resize(),c.updateAspect()});const L=e.get(b);L.create(a);e.init();const F=e.get(g);await F.setup();const l=e.get(w);l.onFragmentsLoaded.add(t=>{a.scene&&a.scene.three.add(t)});const[q,R]=C.classificationTree({components:e,groups:[],name:""}),s=e.get(I);l.onFragmentsLoaded.add(async t=>{await s.byIfcRel(t,v,"spatialStructures"),s.byEntity(t),R({groups:["spatialStructures","entities"],name:"Model Spatial Structure"})});const $=T.create(()=>{const[t]=y.loadIfc({components:e});return A`
   <bim-panel active label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${q}
    </bim-panel-section>
   </bim-panel> 
  `}),N=n.getContainer("panels","left");N.append($);
