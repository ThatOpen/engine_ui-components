import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,a as p,C as d,O as f,b,H as u,u as w,R as y,h as g,t as C,j as T,m as v}from"./template-BG_ysDJ2.js";import{b as E}from"./index-BioTeGwb.js";import{t as L}from"./index-DbfqrXne.js";m.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const h=e.get(d),s=h.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,n);s.renderer=c;const r=new u(e);s.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const F=e.get(w);F.create(s);e.init();const I=e.get(y);await I.setup();const l=e.get(g);l.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[$,z]=L.classificationTree({components:e,classifications:[]}),i=e.get(C);l.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),z({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const H=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${$}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:H,viewport:n}}};a.layout="main";document.body.append(a);
