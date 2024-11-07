import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as x,C as y,a as f,e as h,m as v,x as T,N as C,y as E,l as P,t as A,j as S,k as $}from"./index-CSvFTziO.js";import{t as k}from"./index-D495RstS.js";import"./lit-html-paDGiEfB.js";x.init();const r=document.createElement("bim-viewport"),e=new y,I=e.get(f),n=I.create(),l=new h(e);l.setup();n.scene=l;const d=new v(e,r);n.renderer=d;const i=new T(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const L=e.get(C);L.create(n);const m=e.get(E);await m.setup();const z=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),M=await z.arrayBuffer(),N=new Uint8Array(M),u=await m.load(N);n.scene.three.add(u);const V=e.get(P);await V.process(u);const[t,b]=k.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(A);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const j=S.create(()=>{const o=s=>{const a=s.target;t.queryString=a.value!==""?a.value:null},g=s=>{const a=s.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return $`
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
    `,elements:{propertiesPanel:j,viewport:r}}};c.layout="main";document.body.append(c);
