import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as u,a as d,C as b,i as g,n as f,k as w,u as h,R as S,S as v,W as C,b as y,J as x,g as I}from"./index-CkGX2cDx.js";import{b as T}from"./index-CJFiyFTO.js";import{t as $}from"./index-DB26NqiI.js";u.init();const e=new d,z=e.get(b),t=z.create(),o=new g(e);o.setup();t.scene=o;const s=document.createElement("bim-viewport"),r=new f(e,s);t.renderer=r;const i=new w(e);t.camera=i;s.addEventListener("resize",()=>{r.resize(),i.updateAspect()});const E=e.get(h);E.create(t);e.init();const L=e.get(S);await L.setup();const c=e.get(v);c.setup({world:t});c.zoomToSelection=!0;const k=e.get(C),B=e.get(y);B.onFragmentsLoaded.add(async n=>{n.hasProperties&&await k.process(n),t.scene&&t.scene.three.add(n)});const[a]=$.relationsTree({components:e,models:[]});a.expanded=!0;a.preserveStructureOnFilter=!0;const F=x.create(()=>{const[n]=T.loadIfc({components:e});return I`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      <bim-text-input @input=${m=>{const l=m.target;a.queryString=l.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:F,viewport:s}}};p.layout="main";
