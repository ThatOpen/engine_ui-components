import"./modulepreload-polyfill-B5Qt9EMX.js";import{p,f as m,a as l,s as d,i as f,k as b,N as w,m as g,A as u,I,e as v,g as C}from"./index-Dhy3Nnp8.js";import{b as y}from"./index-k1wvrl6r.js";import{t as A}from"./index-BQd6VEx2.js";p.init();const e=new m,E=e.get(l),t=E.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),o=new f(e,a);t.renderer=o;const i=new b(e);t.camera=i;a.addEventListener("resize",()=>{o.resize(),i.updateAspect()});const L=e.get(w);L.create(t);e.init();const T=e.get(g);await T.setup();const $=e.get(u),h=e.get(I);h.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n),t.scene&&t.scene.three.add(n)});const[r]=A.relationsTree({components:e,models:[]});r.expanded=!0;const k=v.create(()=>{const[n]=y.loadIfc({components:e});return C`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      ${r}
    </bim-panel-section>
   </bim-panel> 
  `}),c=document.getElementById("app");c.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:k,viewport:a}}};c.layout="main";
