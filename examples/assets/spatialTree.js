import"./lit-html-BUQgm8fs.js";import{u,C as b,W as g,S as w,a as S,b as f,G as h,I as v,e as C,F as y,V as F,f as T}from"./index-DAd_Xb3m.js";import{b as E}from"./index-ChzsFr2R.js";import{e as I}from"./index-BnaeDa9G.js";u.init();const e=new b,L=e.get(g),t=L.create();t.name="main";const s=new w(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),i=new S(e,o);t.renderer=i;const c=new f(e);t.camera=c;o.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const z=e.get(h);z.create(t);e.init();const G=e.get(v);await G.setup();const m=e.get(C);m.setup({world:t});m.zoomToSelection=!0;const n=e.get(y);n.init("/node_modules/@thatopen-platform/fragments-beta/dist/Worker/worker.mjs");t.camera.controls.addEventListener("rest",()=>n.core.update(!0));n.list.onItemSet.add(async({value:a})=>{a.useCamera(t.camera.three),t.scene.three.add(a.object),await n.core.update(!0)});const[r]=I.spatialTree({components:e,models:[]});r.preserveStructureOnFilter=!0;const W=F.create(()=>{const[a]=E.loadFrag({components:e});return T`
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
    `,elements:{panel:W,viewport:o}}};p.layout="main";
