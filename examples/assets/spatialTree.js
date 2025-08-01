import"./lit-html-BUQgm8fs.js";import{l as u,C as b,W as w,S as g,a as h,b as S,G as f,I as v,J as C,F,R as y,m as L}from"./index-DMl8TH7x.js";import{b as j}from"./index-Dmq0ynaz.js";import{e as k}from"./index-CVqmvCLw.js";u.init();const e=new b,R=e.get(w),t=R.create();t.name="main";const s=new g(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),c=new h(e,o);t.renderer=c;const i=new S(e);t.camera=i;o.addEventListener("resize",()=>{c.resize(),i.updateAspect()});const T=e.get(f);T.create(t);e.init();const U=e.get(v);await U.setup();const l=e.get(C);l.setup({world:t});l.zoomToSelection=!0;const a=e.get(F),E="https://thatopen.github.io/engine_fragment/resources/worker.mjs",I=await fetch(E),x=await I.blob(),z=new File([x],"worker.mjs",{type:"text/javascript"}),B=URL.createObjectURL(z);a.init(B);t.camera.controls.addEventListener("rest",()=>a.core.update(!0));a.list.onItemSet.add(async({value:r})=>{r.useCamera(t.camera.three),t.scene.three.add(r.object),await a.core.update(!0)});const[n]=k.spatialTree({components:e,models:[]});n.preserveStructureOnFilter=!0;const G=y.create(()=>{const[r]=j.loadFrag({components:e});return L`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${r}
      <bim-text-input @input=${p=>{const d=p.target;n.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${n}
    </bim-panel-section>
   </bim-panel> 
  `}),m=document.getElementById("app");m.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:G,viewport:o}}};m.layout="main";
