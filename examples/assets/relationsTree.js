import"./modulepreload-polyfill-B5Qt9EMX.js";import{p,f as m,a as l,s as d,i as f,k as b,N as u,m as w,A as g,u as v,h as C,j as y}from"./index-B-aNsZHc.js";import{b as I}from"./index-Bnilb3I6.js";import{t as h}from"./index-DwzI1lTL.js";p.init();const e=new m,A=e.get(l),t=A.create(),s=new d(e);s.setup();t.scene=s;const a=document.createElement("bim-viewport"),o=new f(e,a);t.renderer=o;const i=new b(e);t.camera=i;a.addEventListener("resize",()=>{o.resize(),i.updateAspect()});const E=e.get(u);E.create(t);e.init();const L=e.get(w);await L.setup();const T=e.get(g),$=e.get(v);$.onFragmentsLoaded.add(async n=>{n.hasProperties&&await T.process(n),t.scene&&t.scene.three.add(n)});const[r]=h.relationsTree({components:e,models:[]});r.expanded=!0;const k=C.create(()=>{const[n]=I.loadIfc({components:e});return y`
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
