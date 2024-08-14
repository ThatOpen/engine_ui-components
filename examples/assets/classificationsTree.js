import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as l,p,C as d,O as f,a as b,H as u,u as w,R as y,h as g,s as C,n as T,i as v}from"./template-Bn7OLCvH.js";import{b as E}from"./index-CYQfIqx8.js";import{t as L}from"./index-CSqPp3v-.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const h=e.get(d),s=h.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,n);s.renderer=c;const r=new u(e);s.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const F=e.get(w);F.create(s);e.init();const I=e.get(y);await I.setup();const m=e.get(g);m.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[z,H]=L.classificationTree({components:e,classifications:[]}),i=e.get(C);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),H({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const O=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
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
    `,elements:{panel:O,viewport:n}}};a.layout="main";document.body.append(a);
