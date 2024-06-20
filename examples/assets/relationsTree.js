import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as u,a as b,C as g,i as f,n as w,k as h,u as S,R as v,S as C,b as y,W as I,J as L,h as T}from"./template-Cjrp5NH8.js";import{b as $}from"./index-B09cy6IV.js";import{t as x}from"./index-BulqlRzf.js";u.init();const e=new b,z=e.get(g),t=z.create(),o=new f(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new w(e,s);t.renderer=r;const i=new h(e);t.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const E=e.get(S);E.create(t);e.init();const F=e.get(v);await F.setup();const c=e.get(C);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(y);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const k=e.get(I);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await k.process(n)});const[a]=x.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const B=L.create(()=>{const[n]=$.loadIfc({components:e});return T`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      <bim-text-input @input=${l=>{const d=l.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),m=document.getElementById("app");m.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:B,viewport:s}}};m.layout="main";
