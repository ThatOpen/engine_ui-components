import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,a as d,C as l,i as f,n as b,k as u,u as w,R as g,b as y,A as C,J as T,g as v}from"./index-CkGX2cDx.js";import{b as E}from"./index-CJFiyFTO.js";import{t as L}from"./index-DB26NqiI.js";m.init();const e=new d,a=document.createElement("bim-viewport");a.name="viewer";const A=e.get(l),t=A.create(),o=new f(e);o.setup();t.scene=o;const c=new b(e,a);t.renderer=c;const r=new u(e);t.camera=r;a.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const I=e.get(w);I.create(t);e.init();const $=e.get(g);await $.setup();const p=e.get(y);p.onFragmentsLoaded.add(n=>{t.scene&&t.scene.three.add(n)});const[k,z]=L.classificationTree({components:e,classifications:{}}),i=e.get(C);p.onFragmentsLoaded.add(async n=>{i.byEntity(n),await i.byPredefinedType(n),z({classifications:{Entities:["entities"],"Predefined Types":["predefinedTypes"]}})});const F=T.create(()=>{const[n]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${k}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:F,viewport:a}}};s.layout="main";document.body.append(s);
