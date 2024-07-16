import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as p,p as d,C as l,s as f,i as b,H as w,d as g,R as u,h as y,A as C,t as T,g as v}from"./template-DPyExspr.js";import{b as E}from"./index-NwPu_Sub.js";import{t as L}from"./index-DTh-BaZi.js";p.init();const e=new d,s=document.createElement("bim-viewport");s.name="viewer";const h=e.get(l),n=h.create(),o=new f(e);o.setup();n.scene=o;const c=new b(e,s);n.renderer=c;const r=new w(e);n.camera=r;s.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const A=e.get(g);A.create(n);e.init();const I=e.get(u);await I.setup();const m=e.get(y);m.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[z,F]=L.classificationTree({components:e,classifications:{}}),i=e.get(C);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),F({classifications:{Entities:["entities"],"Predefined Types":["predefinedTypes"]}})});const H=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
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
    `,elements:{panel:H,viewport:s}}};a.layout="main";document.body.append(a);
