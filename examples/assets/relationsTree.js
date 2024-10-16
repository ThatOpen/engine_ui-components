import"./lit-html-Cs86_c16.js";import{T as u,C as g,a as b,e as w,m as f,U as h,O as T,N as v,l as y,b as S,o as z,z as C,k as L}from"./template-DD9ofnYC.js";import{b as x}from"./index-DqIjaxVa.js";import{t as E}from"./index-Ba8dZRJF.js";u.init();const e=new g,F=e.get(b),t=F.create(),o=new w(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new f(e,s);t.renderer=r;const c=new h(e);t.camera=c;s.addEventListener("resize",()=>{r.resize(),c.updateAspect()});const I=e.get(T);I.create(t);e.init();const O=e.get(v);await O.setup();const i=e.get(y);i.setup({world:t});i.zoomToSelection=!0;const m=e.get(S);m.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const $=e.get(z);m.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n)});const[a]=E.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const k=C.create(()=>{const[n]=x.loadIfc({components:e});return L`
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
    `,elements:{panel:k,viewport:s}}};p.layout="main";
