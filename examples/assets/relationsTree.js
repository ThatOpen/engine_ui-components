import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as u,C as g,a as b,e as w,m as f,x as h,y,i as T,t as v,b as S,k as x,z,j as C}from"./index-b5UjG9AG.js";import{b as L}from"./index-cxW_AbrR.js";import{t as E}from"./index-CagUo1tF.js";import"./lit-html-paDGiEfB.js";u.init();const e=new g,F=e.get(b),t=F.create(),o=new w(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new f(e,s);t.renderer=r;const i=new h(e);t.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const I=e.get(y);I.create(t);e.init();const $=e.get(T);await $.setup();const c=e.get(v);c.setup({world:t});c.zoomToSelection=!0;const m=e.get(S);m.onFragmentsLoaded.add(async n=>{t.scene&&t.scene.three.add(n)});const B=e.get(x);m.onFragmentsLoaded.add(async n=>{n.hasProperties&&await B.process(n)});const[a]=E.relationsTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const G=z.create(()=>{const[n]=L.loadIfc({components:e});return C`
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
    `,elements:{panel:G,viewport:s}}};p.layout="main";
