import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,f as d,a as l,s as f,i as b,k as u,N as w,m as g,u as y,b2 as T,e as v,g as C}from"./index-B0-P1mHm.js";import{b as E}from"./index-BILClfca.js";import{t as L}from"./index-CMACVayo.js";m.init();const e=new d,n=document.createElement("bim-viewport");n.name="viewer";const I=e.get(l),s=I.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,n);s.renderer=c;const r=new u(e);s.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const $=e.get(w);$.create(s);e.init();const k=e.get(g);await k.setup();const p=e.get(y);p.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[z,F]=L.classificationTree({components:e,classifications:{}}),i=e.get(T);p.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),F({classifications:{Entities:["entities","predefinedTypes"],"Predefined Types":["predefinedTypes"]}})});const N=v.create(()=>{const[t]=E.loadIfc({components:e});return C`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${z}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:N,viewport:n}}};a.layout="main";document.body.append(a);
