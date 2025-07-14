import"./lit-html-Cs86_c16.js";import{a as u,C as g,W as b,S as w,b as S,c as h,G as v,I as f,J as C,F as y,R as F,m as T}from"./index-BgQRAdOj.js";import{b as E}from"./index-NGXf93vL.js";import{e as I}from"./index-E2Xb6mG8.js";u.init();const e=new g,L=e.get(b),t=L.create();t.name="main";const s=new w(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),i=new S(e,o);t.renderer=i;const c=new h(e);t.camera=c;o.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const z=e.get(v);z.create(t);e.init();const G=e.get(f);await G.setup();const m=e.get(C);m.setup({world:t});m.zoomToSelection=!0;const n=e.get(y);n.init("https://thatopen.github.io/engine_fragment/resources/worker.mjs");t.camera.controls.addEventListener("rest",()=>n.core.update(!0));n.list.onItemSet.add(async({value:a})=>{a.useCamera(t.camera.three),t.scene.three.add(a.object),await n.core.update(!0)});const[r]=I.spatialTree({components:e,models:[]});r.preserveStructureOnFilter=!0;const R=F.create(()=>{const[a]=E.loadFrag({components:e});return T`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${a}
      <bim-text-input @input=${l=>{const d=l.target;r.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${r}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:R,viewport:o}}};p.layout="main";
