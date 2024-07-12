import"./modulepreload-polyfill-B5Qt9EMX.js";import{m as f,p as x,C as y,s as v,i as h,H as C,d as T,R as E,k as P,j as S,t as k,g as A}from"./template-DWsy8vKF.js";import{t as $}from"./index-DpvWeUsp.js";f.init();const r=document.createElement("bim-viewport"),e=new x,I=e.get(y),n=I.create(),l=new v(e);l.setup();n.scene=l;const d=new h(e,r);n.renderer=d;const i=new C(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const H=e.get(T);H.create(n);const m=e.get(E);await m.setup();const L=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),z=await L.arrayBuffer(),M=new Uint8Array(z),u=await m.load(M);n.scene.three.add(u);const R=e.get(P);await R.process(u);const[t,b]=$.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(S);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const V=k.create(()=>{const o=s=>{const a=s.target;t.queryString=a.value!==""?a.value:null},g=s=>{const a=s.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(t.tsv)};return A`
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
