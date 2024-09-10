import"./lit-html-DcU_S_gY.js";import{T as u,a as g,h as b,M as h,v as w,N as f,b as v,g as T,o as y,_ as S,x,z,m as L}from"./template-BPcC4_4Q.js";import{b as M}from"./index-uz7T6jCB.js";import{t as C}from"./index-DLS8uYat.js";u.init();const e=new g,E=e.get(b),t=E.create(),s=new h(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),r=new w(e,o);t.renderer=r;const c=new f(e);t.camera=c;o.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const F=e.get(v);F.create(t);e.init();const I=e.get(T);await I.setup();const i=e.get(y);i.setup({world:t});i.zoomToSelection=!0;const p=e.get(S);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const $=e.get(x);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n)});const[a]=C.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const B=z.create(()=>{const[n]=M.loadIfc({components:e});return L`
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
    `,elements:{panel:B,viewport:o}}};m.layout="main";
