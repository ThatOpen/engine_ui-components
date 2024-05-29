import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,f as d,a as l,s as f,i as b,k as u,N as w,m as g,u as y,R as T,h as v,j as C}from"./index-B-aNsZHc.js";import{b as E}from"./index-Bnilb3I6.js";import{t as L}from"./index-DwzI1lTL.js";m.init();const e=new d,n=document.createElement("bim-viewport");n.name="viewer";const I=e.get(l),s=I.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,n);s.renderer=c;const r=new u(e);s.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const $=e.get(w);$.create(s);e.init();const h=e.get(g);await h.setup();const p=e.get(y);p.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[k,z]=L.classificationTree({components:e,classifications:{}}),i=e.get(T);p.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),z({classifications:{Entities:["entities","predefinedTypes"],"Predefined Types":["predefinedTypes"]}})});const F=v.create(()=>{const[t]=E.loadIfc({components:e});return C`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${k}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:F,viewport:n}}};a.layout="main";document.body.append(a);
