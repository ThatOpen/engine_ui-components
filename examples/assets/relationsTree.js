import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as u,C as g,W as b,S as f,a as w,b as S,G as h,I,s as v,F as T,o as y,k as C,m as L}from"./index-DIiSmYK8.js";import{b as F}from"./index-DpalgvWh.js";import{t as x}from"./index-O2YoEc54.js";import"./lit-html-CuBe1DX_.js";u.init();const e=new g,z=e.get(b),t=z.create(),o=new f(e);o.setup();t.scene=o;const r=document.createElement("bim-viewport"),s=new w(e,r);t.renderer=s;const i=new S(e);t.camera=i;r.addEventListener("resize",()=>{s.resize(),i.updateAspect()});const E=e.get(h);E.create(t);e.init();const G=e.get(I);await G.setup();const c=e.get(v);c.setup({world:t});c.zoomToSelection=!0;const m=e.get(T);m.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const M=e.get(y);m.onFragmentsLoaded.add(async n=>{n.hasProperties&&await M.process(n)});const[a]=x.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const R=C.create(()=>{const[n]=F.loadIfc({components:e});return L`
   <bim-panel label="Relations Tree">
    <bim-panel-section label="Model Tree">
      ${n}
      <bim-text-input @input=${l=>{const d=l.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:R,viewport:r}}};p.layout="main";
