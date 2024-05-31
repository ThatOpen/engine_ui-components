import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as m,a as l,C as d,i as g,n as u,k as b,u as f,R as h,S as w,W as v,b as C,J as y,h as I}from"./index-DDfImu0-.js";import{b as T}from"./index-OdW2YDQM.js";import{t as z}from"./index-gLC8fJ24.js";m.init();const e=new l,E=e.get(d),t=E.create(),s=new g(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),o=new u(e,a);t.renderer=o;const i=new b(e);t.camera=i;a.addEventListener("resize",()=>{o.resize(),i.updateAspect()});const L=e.get(f);L.create(t);e.init();const S=e.get(h);await S.setup();const r=e.get(w);r.setup({world:t});r.zoomToSelection=!0;const $=e.get(v),k=e.get(C);k.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n),t.scene&&t.scene.three.add(n)});const[c]=z.relationsTree({components:e,selectHighlighterName:"select",hoverHighlighterName:"hover",models:[]});c.expanded=!0;const x=y.create(()=>{const[n]=T.loadIfc({components:e});return I`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${c}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:x,viewport:a}}};p.layout="main";
