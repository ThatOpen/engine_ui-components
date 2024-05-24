import"./modulepreload-polyfill-B5Qt9EMX.js";import{p,f as m,a as l,s as d,i as f,k as b,N as u,m as w,A as g,u as v,e as C,g as y}from"./index-B0-P1mHm.js";import{b as I}from"./index-BILClfca.js";import{t as A}from"./index-CMACVayo.js";p.init();const e=new m,E=e.get(l),t=E.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),o=new f(e,a);t.renderer=o;const i=new b(e);t.camera=i;a.addEventListener("resize",()=>{o.resize(),i.updateAspect()});const L=e.get(u);L.create(t);e.init();const T=e.get(w);await T.setup();const $=e.get(g),h=e.get(v);h.onFragmentsLoaded.add(async n=>{n.hasProperties&&await $.process(n),t.scene&&t.scene.three.add(n)});const[r]=A.relationsTree({components:e,models:[]});r.expanded=!0;const k=C.create(()=>{const[n]=I.loadIfc({components:e});return y`
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
