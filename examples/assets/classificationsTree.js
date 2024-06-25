import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as p,p as d,C as l,s as f,i as b,H as u,d as w,R as g,u as y,A as C,t as T,h as v}from"./template-96LIshqX.js";import{b as E}from"./index-pJJ_YfO_.js";import{t as L}from"./index-C1QNbT2t.js";p.init();const e=new d,s=document.createElement("bim-viewport");s.name="viewer";const A=e.get(l),n=A.create(),o=new f(e);o.setup();n.scene=o;const c=new b(e,s);n.renderer=c;const r=new u(e);n.camera=r;s.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const I=e.get(w);I.create(n);e.init();const h=e.get(g);await h.setup();const m=e.get(y);m.onFragmentsLoaded.add(t=>{n.scene&&n.scene.three.add(t)});const[z,F]=L.classificationTree({components:e,classifications:{}}),i=e.get(C);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),F({classifications:{Entities:["entities"],"Predefined Types":["predefinedTypes"]}})});const H=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
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
