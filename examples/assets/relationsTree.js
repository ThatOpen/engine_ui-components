import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as u,p as g,C as b,o as w,r as f,W as h,u as v,R as y,A as S,h as C,j as T,f as L,i as x}from"./template-RkE92Rn6.js";import{b as z}from"./index-DyU7B9dy.js";import{t as A}from"./index-DKDIl_Nk.js";u.init();const e=new g,E=e.get(b),t=E.create(),s=new w(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),r=new f(e,o);t.renderer=r;const i=new h(e);t.camera=i;o.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const F=e.get(v);F.create(t);e.init();const I=e.get(y);await I.setup();const c=e.get(S);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(C);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const R=e.get(T);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await R.process(n)});const[a]=A.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const $=L.create(()=>{const[n]=z.loadIfc({components:e});return x`
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
