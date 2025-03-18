import"./modulepreload-polyfill-B5Qt9EMX.js";import{T as w,C as x,W as y,S as v,a as h,b as C,G as S,I as T,p as I,u as E,l as P,m as A}from"./index-Bw1iD8pu.js";import{t as L}from"./index-CBplVn43.js";import"./lit-html-paDGiEfB.js";w.init();const s=document.createElement("bim-viewport"),e=new x,$=e.get(y),n=$.create(),c=new v(e);c.setup();n.scene=c;const d=new h(e,s);n.renderer=d;const i=new C(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);s.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const k=e.get(S);k.create(n);const m=e.get(T);await m.setup();const z=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),G=await z.arrayBuffer(),M=new Uint8Array(G),u=await m.load(M);n.scene.three.add(u);const R=e.get(I);await R.process(u);const[t,b]=L.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(E);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const V=P.create(()=>{const o=r=>{const a=r.target;t.queryString=a.value!==""?a.value:null},g=r=>{const a=r.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},f=async()=>{await navigator.clipboard.writeText(t.tsv)};return A`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${t.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${f} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${o} placeholder="Search Property" debounce="250"></bim-text-input>
        ${t}
      </bim-panel-section>
    </bim-panel>
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:V,viewport:s}}};l.layout="main";document.body.append(l);
