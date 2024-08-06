import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as f,p as x,C as y,o as v,r as h,W as C,u as T,R as A,j as E,A as P,f as S,i as $}from"./template-RkE92Rn6.js";import{t as I}from"./index-DKDIl_Nk.js";f.init();const s=document.createElement("bim-viewport"),e=new x,k=e.get(y),n=k.create(),l=new v(e);l.setup();n.scene=l;const d=new h(e,s);n.renderer=d;const i=new C(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);s.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const L=e.get(T);L.create(n);const m=e.get(A);await m.setup();const z=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),M=await z.arrayBuffer(),R=new Uint8Array(M),u=await m.load(R);n.scene.three.add(u);const V=e.get(E);await V.process(u);const[t,b]=I.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(P);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const W=S.create(()=>{const o=r=>{const a=r.target;t.queryString=a.value!==""?a.value:null},g=r=>{const a=r.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return $`
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
    `,elements:{propertiesPanel:W,viewport:s}}};c.layout="main";document.body.append(c);
