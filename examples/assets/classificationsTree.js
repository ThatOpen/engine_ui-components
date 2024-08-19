import"./lit-html-DcU_S_gY.js";import{d as m,o as d,a as p,L as f,M as b,N as w,l as y,E as g,_ as u,j as E,R as T,m as v}from"./template-DUn1E-Qh.js";import{b as C}from"./index-CrM_67hV.js";import{t as L}from"./index-BeGjUNvO.js";m.init();const e=new d,n=document.createElement("bim-viewport");n.name="viewer";const I=e.get(p),t=I.create(),o=new f(e);o.setup();t.scene=o;const c=new b(e,n);t.renderer=c;const r=new w(e);t.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const M=e.get(y);M.create(t);e.init();const z=e.get(g);await z.setup();const l=e.get(u);l.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[F,N]=L.classificationTree({components:e,classifications:[]}),i=e.get(E);l.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),N({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const P=T.create(()=>{const[s]=C.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${s}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${F}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:P,viewport:n}}};a.layout="main";document.body.append(a);
