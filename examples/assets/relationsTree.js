import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as u,p as g,C as b,O as w,a as h,H as f,u as v,R as y,n as S,h as C,o as T,i as L,j as R}from"./template-CWjY0OTm.js";import{b as x}from"./index-DP6Oakzh.js";import{t as z}from"./index-DWZyZK4F.js";u.init();const e=new g,E=e.get(b),t=E.create(),s=new w(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),r=new h(e,o);t.renderer=r;const i=new f(e);t.camera=i;o.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const F=e.get(v);F.create(t);e.init();const I=e.get(y);await I.setup();const c=e.get(S);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(C);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const O=e.get(T);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await O.process(n)});const[a]=z.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const $=L.create(()=>{const[n]=x.loadIfc({components:e});return R`
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
    `,elements:{panel:$,viewport:o}}};m.layout="main";
