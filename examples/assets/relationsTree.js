import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as u,a as g,C as b,O as w,b as h,H as f,u as v,R as y,n as S,h as C,o as T,j as L,m as R}from"./template-BG_ysDJ2.js";import{b as $}from"./index-BioTeGwb.js";import{t as x}from"./index-DbfqrXne.js";u.init();const e=new g,z=e.get(b),t=z.create(),s=new w(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),r=new h(e,o);t.renderer=r;const i=new f(e);t.camera=i;o.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const E=e.get(v);E.create(t);e.init();const F=e.get(y);await F.setup();const c=e.get(S);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(C);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const I=e.get(T);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await I.process(n)});const[a]=x.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const O=L.create(()=>{const[n]=$.loadIfc({components:e});return R`
   <bim-panel label="Relations Tree">
    <bim-panel-section label="Model Tree">
      ${n}
      <bim-text-input @input=${l=>{const d=l.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),m=document.getElementById("app");m.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:O,viewport:o}}};m.layout="main";
