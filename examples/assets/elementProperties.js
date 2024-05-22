import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as w,f as x,a as y,s as v,i as h,k as A,N as T,m as C,A as E,e as P,g as $}from"./index-Dhy3Nnp8.js";import{A as k}from"./index-L7zXnaxf.js";import{t as S}from"./index-BQd6VEx2.js";w.init();const o=document.createElement("bim-viewport"),e=new x,I=e.get(y),a=I.create(),c=new v(e);c.setup();a.scene=c;const d=new h(e,o);a.renderer=d;const i=new A(e);a.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);o.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const L=e.get(T);L.create(a);const m=e.get(C);await m.setup();const z=await fetch("/resources/small.ifc"),M=await z.arrayBuffer(),N=new Uint8Array(M),u=await m.load(N);a.scene.three.add(u);const V=e.get(E);await V.process(u);const[t,b]=S.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(k);p.setup({world:a});p.events.select.onHighlight.add(r=>{b({fragmentIdMap:r})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const q=P.create(()=>{const r=s=>{const n=s.target;t.queryString=n.value!==""?n.value:null},g=s=>{const n=s.target;t.expanded=!t.expanded,n.label=t.expanded?"Collapse":"Expand"},f=async()=>{await navigator.clipboard.writeText(t.tsv)};return $`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${t.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${f} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${r} placeholder="Search Property"></bim-text-input>
        ${t}
      </bim-panel-section>
    </bim-panel>
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:q,viewport:o}}};l.layout="main";document.body.append(l);
