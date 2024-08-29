import"./lit-html-DcU_S_gY.js";import{T as m,o as p,a as d,L as f,M as b,N as w,l as y,E as g,_ as u,h as T,z as E,m as v}from"./template-DTiLmea8.js";import{b as C}from"./index-CVROKlLD.js";import{t as L}from"./index-DI3VGGLp.js";m.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const z=e.get(d),t=z.create(),o=new f(e);o.setup();t.scene=o;const c=new b(e,n);t.renderer=c;const r=new w(e);t.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const I=e.get(y);I.create(t);e.init();const M=e.get(g);await M.setup();const l=e.get(u);l.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[h,F]=L.classificationTree({components:e,classifications:[]}),i=e.get(T);l.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),F({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const N=E.create(()=>{const[s]=C.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${s}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${h}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:N,viewport:n}}};a.layout="main";document.body.append(a);
