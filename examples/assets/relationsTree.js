import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as u,p as g,C as b,s as w,i as h,H as f,d as v,R as S,j as y,h as C,k as T,t as L,g as x}from"./template-CjtT_YCH.js";import{b as z}from"./index-GI6aOwIt.js";import{t as E}from"./index-BiwU9ezV.js";u.init();const e=new g,F=e.get(b),t=F.create(),o=new w(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new h(e,s);t.renderer=r;const i=new f(e);t.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const I=e.get(v);I.create(t);e.init();const R=e.get(S);await R.setup();const c=e.get(y);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(C);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const $=e.get(T);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n)});const[a]=E.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const k=L.create(()=>{const[n]=z.loadIfc({components:e});return x`
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
    `,elements:{panel:k,viewport:s}}};m.layout="main";
