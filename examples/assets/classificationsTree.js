import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as l,p,C as d,o as f,r as b,W as u,u as w,R as y,h as g,n as C,f as T,i as v}from"./template-RkE92Rn6.js";import{b as E}from"./index-DyU7B9dy.js";import{t as L}from"./index-DKDIl_Nk.js";l.init();const e=new p,n=document.createElement("bim-viewport");n.name="viewer";const h=e.get(d),s=h.create(),o=new f(e);o.setup();s.scene=o;const c=new b(e,n);s.renderer=c;const r=new u(e);s.camera=r;n.addEventListener("resize",()=>{c.resize(),r.updateAspect()});const I=e.get(w);I.create(s);e.init();const z=e.get(y);await z.setup();const m=e.get(g);m.onFragmentsLoaded.add(t=>{s.scene&&s.scene.three.add(t)});const[A,F]=L.classificationTree({components:e,classifications:[]}),i=e.get(C);m.onFragmentsLoaded.add(async t=>{i.byEntity(t),await i.byPredefinedType(t),F({classifications:[{system:"entities",label:"Entities"},{system:"predefinedTypes",label:"Predefined Types"}]})});const P=T.create(()=>{const[t]=E.loadIfc({components:e});return v`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${t}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${A}
    </bim-panel-section>
   </bim-panel> 
  `}),a=document.createElement("bim-grid");a.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:P,viewport:n}}};a.layout="main";document.body.append(a);
