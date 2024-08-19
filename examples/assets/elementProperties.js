import"./lit-html-DcU_S_gY.js";import{d as f,o as x,a as y,L as h,M as v,N as E,l as T,E as C,J as P,r as A,R as L,m as S}from"./template-DUn1E-Qh.js";import{t as $}from"./index-BeGjUNvO.js";f.init();const s=document.createElement("bim-viewport"),e=new x,I=e.get(y),n=I.create(),c=new h(e);c.setup();n.scene=c;const d=new v(e,s);n.renderer=d;const i=new E(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);s.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const M=e.get(T);M.create(n);const m=e.get(C);await m.setup();const k=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),z=await k.arrayBuffer(),J=new Uint8Array(z),u=await m.load(J);n.scene.three.add(u);const N=e.get(P);await N.process(u);const[t,b]=$.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(A);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const R=L.create(()=>{const o=r=>{const a=r.target;t.queryString=a.value!==""?a.value:null},g=r=>{const a=r.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return S`
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
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:R,viewport:s}}};l.layout="main";document.body.append(l);
