import"./lit-html-CgQwCkHV.js";import{h as u,C as g,W as b,S as h,a as w,b as S,G as f,I as v,n as C,F as y,U as F,f as T}from"./index-CDIUJH9Y.js";import{b as E}from"./index-DlBGeWdd.js";import{e as I}from"./index-D3M56kln.js";u.init();const e=new g,L=e.get(b),t=L.create();t.name="main";const s=new h(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),i=new w(e,o);t.renderer=i;const c=new S(e);t.camera=c;o.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const z=e.get(f);z.create(t);e.init();const G=e.get(v);await G.setup();const m=e.get(C);m.setup({world:t});m.zoomToSelection=!0;const a=e.get(y);a.init("https://thatopen.github.io/engine_fragment/resources/worker.mjs");t.camera.controls.addEventListener("rest",()=>a.core.update(!0));a.list.onItemSet.add(async({value:n})=>{n.useCamera(t.camera.three),t.scene.three.add(n.object),await a.core.update(!0)});const[r]=I.spatialTree({components:e,models:[]});r.preserveStructureOnFilter=!0;const $=F.create(()=>{const[n]=E.loadFrag({components:e});return T`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${n}
      <bim-text-input @input=${l=>{const d=l.target;r.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${r}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:$,viewport:o}}};p.layout="main";
