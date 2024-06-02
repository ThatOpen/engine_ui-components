import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as u,a as d,C as g,i as b,n as h,k as f,u as w,R as v,S,W as C,b as y,J as x,h as I}from"./index-B_4Q7ifa.js";import{b as T}from"./index-BxZdmNVY.js";import{t as $}from"./index-_gEx1QOr.js";u.init();const e=new d,z=e.get(g),t=z.create(),r=new b(e);r.setup();t.scene=r;const s=document.createElement("bim-viewport"),o=new h(e,s);t.renderer=o;const i=new f(e);t.camera=i;s.addEventListener("resize",()=>{o.resize(),i.updateAspect()});const E=e.get(w);E.create(t);e.init();const L=e.get(v);await L.setup();const c=e.get(S);c.setup({world:t});c.zoomToSelection=!0;const k=e.get(C),B=e.get(y);B.onFragmentsLoaded.add(async n=>{n.hasProperties&&await k.process(n),t.scene&&t.scene.three.add(n)});const[a]=$.relationsTree({components:e,selectHighlighterName:"select",hoverHighlighterName:"hover",models:[]});a.expanded=!0;a.preserveStructureOnFilter=!0;const F=x.create(()=>{const[n]=T.loadIfc({components:e});return I`
   <bim-panel label="Classifications Tree">
    <bim-panel-section label="Importing">
      ${n}
    </bim-panel-section>
    <bim-panel-section label="Classifications">
      <bim-text-input @input=${l=>{const m=l.target;a.queryString=m.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:F,viewport:s}}};p.layout="main";
