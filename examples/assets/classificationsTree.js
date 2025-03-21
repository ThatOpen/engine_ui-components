import{x as l}from"./lit-element-CToom8Wf.js";import{P as p,C as d,W as f,S as b,a as g,b as w,G as y,I as u,F as C,r as T,T as v}from"./index-DNiVoluI.js";import{b as E}from"./index-CqhcBaEU.js";import{t as I}from"./index-kdXv3cq4.js";p.init();const e=new d,t=document.createElement("bim-viewport");t.name="viewer";const L=e.get(f),n=L.create(),o=new b(e);o.setup();n.scene=o;const r=new g(e,t);n.renderer=r;const c=new w(e);n.camera=c;t.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const S=e.get(y);S.create(n);e.init();const F=e.get(u);await F.setup();const m=e.get(C);m.onFragmentsLoaded.add(s=>{n.scene&&n.scene.three.add(s)});const[P,G]=I.classificationTree({components:e,classifications:[]}),i=e.get(T);m.onFragmentsLoaded.add(async s=>{i.byEntity(s),await i.byPredefinedType(s),G({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const z=v.create(()=>{const[s]=E.loadIfc({components:e});return l`
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
