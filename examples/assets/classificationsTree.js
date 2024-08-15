import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as l,p,C as d,O as f,a as b,H as u,u as w,R as y,h as g,s as C,j as T,m as v}from"./template-DxT-FCmR.js";import{b as E}from"./index-DWBBPmDO.js";import{t as L}from"./index-BQgUzONZ.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const h=e.get(d),s=h.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,n);s.renderer=c;const r=new u(e);s.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const F=e.get(w);F.create(s);e.init();const I=e.get(y);await I.setup();const m=e.get(g);m.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[R,z]=L.classificationTree({components:e,classifications:[]}),i=e.get(C);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),z({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const H=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${R}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:H,viewport:n}}};a.layout="main";document.body.append(a);
