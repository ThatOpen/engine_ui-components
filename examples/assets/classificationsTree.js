import"./lit-html-DcU_S_gY.js";import{T as m,a as d,h as p,M as b,v as f,N as w,b as g,g as y,_ as u,j as T,z as v,m as C}from"./template-BPcC4_4Q.js";import{b as E}from"./index-uz7T6jCB.js";import{t as h}from"./index-DLS8uYat.js";m.init();const e=new d,n=document.createElement("bim-viewport");n.name="viewer";const z=e.get(p),t=z.create(),o=new b(e);o.setup();t.scene=o;const c=new f(e,n);t.renderer=c;const r=new w(e);t.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const L=e.get(g);L.create(t);e.init();const I=e.get(y);await I.setup();const l=e.get(u);l.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[M,F]=h.classificationTree({components:e,classifications:[]}),i=e.get(T);l.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),F({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const N=v.create(()=>{const[s]=E.loadIfc({components:e});return C`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${s}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${M}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:N,viewport:n}}};a.layout="main";document.body.append(a);
