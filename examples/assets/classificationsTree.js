import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as l,C as p,a as d,e as f,m as b,x as y,y as w,i as g,b as u,s as T,z as C,j as v}from"./index-b5UjG9AG.js";import{b as E}from"./index-cxW_AbrR.js";import{t as z}from"./index-CagUo1tF.js";import"./lit-html-paDGiEfB.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const L=e.get(d),t=L.create(),o=new f(e);o.setup();t.scene=o;const c=new b(e,n);t.renderer=c;const r=new y(e);t.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const I=e.get(w);I.create(t);e.init();const h=e.get(g);await h.setup();const m=e.get(u);m.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[x,B]=z.classificationTree({components:e,classifications:[]}),i=e.get(T);m.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),B({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const F=C.create(()=>{const[s]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${s}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${x}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:F,viewport:n}}};a.layout="main";document.body.append(a);
