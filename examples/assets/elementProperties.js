import"./lit-html-Cs86_c16.js";import{T as f,C as x,a as y,e as h,m as v,U as T,O as C,N as E,o as P,l as k,z as A,k as S}from"./template-DD9ofnYC.js";import{t as $}from"./index-Ba8dZRJF.js";f.init();const r=document.createElement("bim-viewport"),e=new x,z=e.get(y),n=z.create(),l=new h(e);l.setup();n.scene=l;const d=new v(e,r);n.renderer=d;const i=new T(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const I=e.get(C);I.create(n);const m=e.get(E);await m.setup();const L=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),O=await L.arrayBuffer(),U=new Uint8Array(O),u=await m.load(U);n.scene.three.add(u);const M=e.get(P);await M.process(u);const[t,b]=$.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(k);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const N=A.create(()=>{const o=s=>{const a=s.target;t.queryString=a.value!==""?a.value:null},g=s=>{const a=s.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return S`
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
    `,elements:{propertiesPanel:N,viewport:r}}};c.layout="main";document.body.append(c);
