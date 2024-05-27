import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as w,f as x,a as y,s as v,i as h,k as A,N as T,m as C,A as E,e as P,g as $}from"./index-B0-P1mHm.js";import{A as k}from"./index-fPhLdcPC.js";import{t as S}from"./index-DRtlnmbb.js";w.init();const r=document.createElement("bim-viewport"),e=new x,I=e.get(y),n=I.create(),l=new v(e);l.setup();n.scene=l;const m=new h(e,r);n.renderer=m;const i=new A(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{m.resize(),i.updateAspect()});e.init();const L=e.get(T);L.create(n);const d=e.get(C);await d.setup();const z=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),M=await z.arrayBuffer(),N=new Uint8Array(M),u=await d.load(N);n.scene.three.add(u);const V=e.get(E);await V.process(u);const[t,b]=S.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(k);p.setup({world:n});p.events.select.onHighlight.add(o=>{b({fragmentIdMap:o})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const q=P.create(()=>{const o=s=>{const a=s.target;t.queryString=a.value!==""?a.value:null},g=s=>{const a=s.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},f=async()=>{await navigator.clipboard.writeText(t.tsv)};return $`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${t.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${f} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${o} placeholder="Search Property"></bim-text-input>
        ${t}
      </bim-panel-section>
    </bim-panel>
  `}),c=document.createElement("bim-grid");c.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:q,viewport:r}}};c.layout="main";document.body.append(c);
