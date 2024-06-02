import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as f,a as x,C as y,i as h,n as v,k as C,u as T,R as S,W as E,S as P,J as $,h as k}from"./index-B_4Q7ifa.js";import{t as A}from"./index-_gEx1QOr.js";f.init();const r=document.createElement("bim-viewport"),e=new x,I=e.get(y),n=I.create(),l=new h(e);l.setup();n.scene=l;const d=new v(e,r);n.renderer=d;const i=new C(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const L=e.get(T);L.create(n);const m=e.get(S);await m.setup();const z=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),J=await z.arrayBuffer(),M=new Uint8Array(J),u=await m.load(M);n.scene.three.add(u);const R=e.get(E);await R.process(u);const[t,b]=A.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(P);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const V=$.create(()=>{const o=s=>{const a=s.target;t.queryString=a.value!==""?a.value:null},g=s=>{const a=s.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return k`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${t.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${w} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${o} placeholder="Search Property" debounce="250"></bim-text-input>
        ${t}
      </bim-panel-section>
    </bim-panel>
  `}),c=document.createElement("bim-grid");c.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:V,viewport:r}}};c.layout="main";document.body.append(c);
