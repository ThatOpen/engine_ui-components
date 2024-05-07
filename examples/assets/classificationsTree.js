import"./modulepreload-polyfill-B5Qt9EMX.js";import{E as m,d as p,q as d,$ as f,W as u,F as b,I as g,c as w,t as C,f as I,e as E}from"./index-BJN8AjRC.js";import{b as y,E as S,m as T}from"./index-RJxXwJnz.js";import{b as v}from"./index-B0R8Bj5n.js";y.registerComponents();const a=document.querySelector("bim-grid");a.layouts={main:`
    "c-panels-left viewer"
    "c-panels-left viewer"
    / 23rem 1fr
  `};a.layout="main";const e=new m,i=document.querySelector("bim-viewport[name='viewer']"),L=e.get(p),n=L.create(),r=new d(e);r.setup();n.scene=r;const o=new f(e,i);n.renderer=o;const c=new u(e);n.camera=c;i.addEventListener("resize",()=>{o.resize(),c.updateAspect()});const F=e.get(b);F.create(n);e.init();const q=e.get(g);await q.setup();const l=e.get(w);l.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[A,R]=C.classificationTree({components:e,groups:[],name:""}),s=e.get(I);l.onFragmentsLoaded.add(async t=>{await s.byIfcRel(t,E,"spatialStructures"),s.byEntity(t),R({groups:["spatialStructures","entities"],name:"Model Spatial Structure"})});const $=S.create(()=>{const[t]=v.loadIfc({components:e});return T`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${A}
    </bim-panel-section>
   </bim-panel> 
  `}),N=a.getContainer("panels","left");N.append($);
