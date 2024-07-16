import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as u,p as g,C as b,s as f,i as w,H as h,d as v,R as C,j as S,h as y,k as I,t as L,g as T}from"./template-DPyExspr.js";import{b as x}from"./index-NwPu_Sub.js";import{t as z}from"./index-DTh-BaZi.js";u.init();const e=new g,E=e.get(b),t=E.create(),o=new f(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new w(e,s);t.renderer=r;const i=new h(e);t.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const F=e.get(v);F.create(t);e.init();const $=e.get(C);await $.setup();const c=e.get(S);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(y);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const k=e.get(I);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await k.process(n)});const[a]=z.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const B=L.create(()=>{const[n]=x.loadIfc({components:e});return T`
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
