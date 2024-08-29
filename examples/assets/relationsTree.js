import"./lit-html-DcU_S_gY.js";import{T as u,o as g,a as b,L as w,M as f,N as h,l as v,E as T,r as y,_ as L,J as S,z,m as E}from"./template-BHX6Qr0d.js";import{b as M}from"./index-BAwWIFSa.js";import{t as x}from"./index-CqAUTGMA.js";u.init();const e=new g,C=e.get(b),t=C.create(),s=new w(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),r=new f(e,o);t.renderer=r;const c=new h(e);t.camera=c;o.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const F=e.get(v);F.create(t);e.init();const I=e.get(T);await I.setup();const i=e.get(y);i.setup({world:t});i.zoomToSelection=!0;const p=e.get(L);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const $=e.get(S);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n)});const[a]=x.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const B=z.create(()=>{const[n]=M.loadIfc({components:e});return E`
   <bim-panel label="Relations Tree">
    <bim-panel-section label="Model Tree">
      ${n}
      <bim-text-input @input=${m=>{const d=m.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),l=document.getElementById("app");l.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:B,viewport:o}}};l.layout="main";
