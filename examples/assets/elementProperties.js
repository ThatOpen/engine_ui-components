import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as w,f as x,a as y,s as h,i as v,k as A,N as T,m as C,A as E,l as P,h as $,j as k}from"./index-B-aNsZHc.js";import{t as S}from"./index-DwzI1lTL.js";w.init();const r=document.createElement("bim-viewport"),e=new x,I=e.get(y),n=I.create(),c=new h(e);c.setup();n.scene=c;const d=new v(e,r);n.renderer=d;const i=new A(e);n.camera=i;i.controls.setLookAt(10,5.5,5,-4,-1,-6.5);r.addEventListener("resize",()=>{d.resize(),i.updateAspect()});e.init();const L=e.get(T);L.create(n);const m=e.get(C);await m.setup();const z=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),M=await z.arrayBuffer(),N=new Uint8Array(M),u=await m.load(N);n.scene.three.add(u);const V=e.get(E);await V.process(u);const[t,b]=S.elementProperties({components:e,fragmentIdMap:{}});t.preserveStructureOnFilter=!0;t.indentationInText=!1;const p=e.get(P);p.setup({world:n});p.events.select.onHighlight.add(s=>{b({fragmentIdMap:s})});p.events.select.onClear.add(()=>b({fragmentIdMap:{}}));const j=$.create(()=>{const s=o=>{const a=o.target;t.queryString=a.value!==""?a.value:null},g=o=>{const a=o.target;t.expanded=!t.expanded,a.label=t.expanded?"Collapse":"Expand"},f=async()=>{await navigator.clipboard.writeText(t.tsv)};return k`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${t.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${f} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${s} placeholder="Search Property"></bim-text-input>
        ${t}
      </bim-panel-section>
    </bim-panel>
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:j,viewport:r}}};l.layout="main";document.body.append(l);
