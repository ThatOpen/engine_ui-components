import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as u,C as g,a as b,e as w,m as f,x as h,N as T,y,t as v,b as S,l as x,j as C,k as L}from"./index-ClbvSkhy.js";import{b as z}from"./index-DkQsnQD0.js";import{t as E}from"./index-qe2NVCJW.js";import"./lit-html-paDGiEfB.js";u.init();const e=new g,F=e.get(b),t=F.create(),o=new w(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new f(e,s);t.renderer=r;const c=new h(e);t.camera=c;s.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const I=e.get(T);I.create(t);e.init();const M=e.get(y);await M.setup();const i=e.get(v);i.setup({world:t});i.zoomToSelection=!0;const m=e.get(S);m.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const $=e.get(x);m.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n)});const[a]=E.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const B=C.create(()=>{const[n]=z.loadIfc({components:e});return L`
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
    `,elements:{panel:B,viewport:s}}};p.layout="main";
