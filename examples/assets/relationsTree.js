import"./lit-html-DcU_S_gY.js";import{d as u,o as g,a as b,L as w,M as f,N as h,l as v,E as y,r as L,_ as S,J as E,R as T,m as M}from"./template-DUn1E-Qh.js";import{b as x}from"./index-CrM_67hV.js";import{t as z}from"./index-BeGjUNvO.js";u.init();const e=new g,C=e.get(b),t=C.create(),s=new w(e);s.setup();t.scene=s;const o=document.createElement("bim-viewport"),r=new f(e,o);t.renderer=r;const c=new h(e);t.camera=c;o.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const F=e.get(v);F.create(t);e.init();const I=e.get(y);await I.setup();const i=e.get(L);i.setup({world:t});i.zoomToSelection=!0;const p=e.get(S);p.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const R=e.get(E);p.onFragmentsLoaded.add(async n=>{n.hasProperties&&await R.process(n)});const[a]=z.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const $=T.create(()=>{const[n]=x.loadIfc({components:e});return M`
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
    `,elements:{panel:$,viewport:o}}};l.layout="main";
