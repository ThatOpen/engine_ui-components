import"./lit-html-Cs86_c16.js";import{T as l,C as p,a as d,e as f,m as b,U as w,O as y,N as g,b as u,x as T,z as C,k as v}from"./template-DD9ofnYC.js";import{b as E}from"./index-DqIjaxVa.js";import{t as z}from"./index-Ba8dZRJF.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const L=e.get(d),t=L.create(),o=new f(e);o.setup();t.scene=o;const c=new b(e,n);t.renderer=c;const r=new w(e);t.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const I=e.get(y);I.create(t);e.init();const h=e.get(g);await h.setup();const m=e.get(u);m.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[x,F]=z.classificationTree({components:e,classifications:[]}),i=e.get(T);m.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),F({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const N=C.create(()=>{const[s]=E.loadIfc({components:e});return v`
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
    `,elements:{panel:N,viewport:n}}};a.layout="main";document.body.append(a);
