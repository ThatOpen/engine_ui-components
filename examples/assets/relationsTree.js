import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as u,p as b,C as g,s as f,i as w,H as h,d as v,R as C,j as y,u as S,k as x,t as I,h as L}from"./template-96LIshqX.js";import{b as T}from"./index-pJJ_YfO_.js";import{t as z}from"./index-C1QNbT2t.js";u.init();const e=new b,E=e.get(g),t=E.create(),o=new f(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new w(e,s);t.renderer=r;const i=new h(e);t.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const F=e.get(v);F.create(t);e.init();const $=e.get(C);await $.setup();const c=e.get(y);c.setup({world:t});c.zoomToSelection=!0;const p=e.get(S);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const k=e.get(x);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await k.process(n)});const[a]=z.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const B=I.create(()=>{const[n]=T.loadIfc({components:e});return L`
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
