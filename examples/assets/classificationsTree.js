import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as l,C as p,a as d,e as f,m as b,x as y,N as w,y as g,b as u,s as T,j as C,k as v}from"./index-ClbvSkhy.js";import{b as E}from"./index-DkQsnQD0.js";import{t as L}from"./index-qe2NVCJW.js";import"./lit-html-paDGiEfB.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const I=e.get(d),t=I.create(),o=new f(e);o.setup();t.scene=o;const c=new b(e,n);t.renderer=c;const r=new y(e);t.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const h=e.get(w);h.create(t);e.init();const x=e.get(g);await x.setup();const m=e.get(u);m.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[z,B]=L.classificationTree({components:e,classifications:[]}),i=e.get(T);m.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),B({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const F=C.create(()=>{const[s]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${s}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${z}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:F,viewport:n}}};a.layout="main";document.body.append(a);
