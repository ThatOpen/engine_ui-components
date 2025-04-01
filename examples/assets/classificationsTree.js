<<<<<<< HEAD
import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as l,C as p,W as d,S as f,a as b,b as g,G as w,I as y,F as u,t as C,l as T,m as v}from"./index-N2x2mgv3.js";import{b as L}from"./index-DAXFTtA6.js";import{t as E}from"./index-BazQpUSZ.js";import"./lit-html-paDGiEfB.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const I=e.get(d),t=I.create(),o=new f(e);o.setup();t.scene=o;const r=new b(e,n);t.renderer=r;const c=new g(e);t.camera=c;n.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const S=e.get(w);S.create(t);e.init();const F=e.get(y);await F.setup();const m=e.get(u);m.onFragmentsLoaded.add(s=>{t.scene&&t.scene.three.add(s)});const[G,z]=E.classificationTree({components:e,classifications:[]}),i=e.get(C);m.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),z({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const M=T.create(()=>{const[s]=L.loadIfc({components:e});return v`
=======
import{x as l}from"./lit-element-CToom8Wf.js";import{P as p,C as d,W as f,S as b,a as g,b as w,G as y,I as u,F as C,r as T,T as v}from"./index-DNiVoluI.js";import{b as E}from"./index-CqhcBaEU.js";import{t as I}from"./index-kdXv3cq4.js";p.init();const e=new d,t=document.createElement("bim-viewport");t.name="viewer";const L=e.get(f),n=L.create(),o=new b(e);o.setup();n.scene=o;const r=new g(e,t);n.renderer=r;const c=new w(e);n.camera=c;t.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const S=e.get(y);S.create(n);e.init();const F=e.get(u);await F.setup();const m=e.get(C);m.onFragmentsLoaded.add(s=>{n.scene&&n.scene.three.add(s)});const[P,G]=I.classificationTree({components:e,classifications:[]}),i=e.get(T);m.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),G({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const z=v.create(()=>{const[s]=E.loadIfc({components:e});return l`
>>>>>>> main
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${s}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${P}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:z,viewport:t}}};a.layout="main";document.body.append(a);
