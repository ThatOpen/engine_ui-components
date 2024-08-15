import"./modulepreload-polyfill-B5Qt9EMX.js";import{d as f,p as x,C as y,O as v,a as h,H as C,u as T,R as E,o as P,n as A,j as S,m as $}from"./template-DxT-FCmR.js";import{t as I}from"./index-BQgUzONZ.js";f.init();const r=document.createElement("bim-viewport"),e=new x,R=e.get(y),n=R.create(),l=new v(e);l.setup();n.scene=l;const d=new h(e,r);n.renderer=d;const i=new C(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const k=e.get(T);k.create(n);const m=e.get(E);await m.setup();const H=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),L=await H.arrayBuffer(),O=new Uint8Array(L),u=await m.load(O);n.scene.three.add(u);const z=e.get(P);await z.process(u);const[t,b]=I.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(A);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const M=S.create(()=>{const o=s=>{const a=s.target;t.queryString=a.value!==""?a.value:null},g=s=>{const a=s.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return $`
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
    `,elements:{propertiesPanel:M,viewport:r}}};c.layout="main";document.body.append(c);
