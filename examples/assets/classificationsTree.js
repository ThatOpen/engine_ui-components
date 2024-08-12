import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as l,p,C as d,O as f,a as b,H as u,u as w,R as y,h as g,s as C,i as T,j as v}from"./template-CbfBv3iq.js";import{b as E}from"./index-DvJ5g2bG.js";import{t as L}from"./index-BiD-LIPr.js";l.init();const e=new p,a=document.createElement("bim-viewport");a.name="viewer";const h=e.get(d),s=h.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,a);s.renderer=c;const r=new u(e);s.camera=r;a.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const F=e.get(w);F.create(s);e.init();const I=e.get(y);await I.setup();const m=e.get(g);m.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[z,H]=L.classificationTree({components:e,classifications:[]}),i=e.get(C);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),H({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const O=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${z}
    </bim-panel-section>
   </bim-panel> 
  `}),n=document.createElement("bim-grid");n.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:O,viewport:a}}};n.layout="main";document.body.append(n);
