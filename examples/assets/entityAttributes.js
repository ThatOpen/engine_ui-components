import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as I,a as v,C as T,i as A,n as P,k as $,u as E,R as W,W as L,S as N,J as R,h as p,D as b,j as D,I as H}from"./index-PAbzyhjP.js";import{t as O}from"./index-DCGQ8DqB.js";I.init();const o=new v,V=o.get(T),a=V.create(),w=new A(o);w.setup();a.scene=w;const d=document.createElement("bim-viewport"),S=new P(o,d);a.renderer=S;const u=new $(o);a.camera=u;u.controls.setLookAt(10,5.5,5,-4,-1,-6.5);d.addEventListener("resize",()=>{S.resize(),u.updateAspect()});o.init();const B=o.get(E);B.create(a);const C=o.get(W);await C.setup();const J=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),M=await J.arrayBuffer(),F=new Uint8Array(M),x=await C.load(F);a.scene.three.add(x);const j=o.get(L);await j.process(x);const l={padding:"0.25rem",borderRadius:"0.25rem"},z={Entity:e=>{let t={};return e===D[H]&&(t={...l,backgroundColor:"purple",color:"white"}),String(e).includes("IFCWALL")&&(t={...l,backgroundColor:"green",color:"white"}),p`<bim-label style=${b(t)}>${e}</bim-label>`},PredefinedType:e=>{const t=["#1c8d83","#3c1c8d","#386c19","#837c24"],c=Math.floor(Math.random()*t.length),g=t[c],f={...l,backgroundColor:g,color:"white"};return p`<bim-label style=${b(f)}>${e}</bim-label>`},NominalValue:e=>{let t={};return typeof e=="boolean"&&e===!1&&(t={...l,backgroundColor:"#b13535",color:"white"}),typeof e=="boolean"&&e===!0&&(t={...l,backgroundColor:"#18882c",color:"white"}),p`<bim-label style=${b(t)}>${e}</bim-label>`}},[n,m]=O.entityAttributes({components:o,fragmentIdMap:{},tableDefinition:z,attributesToInclude:()=>["Name","ContainedInStructure","HasProperties","HasPropertySets",t=>t.includes("Value"),t=>t.startsWith("Material"),t=>t.startsWith("Relating"),t=>{const c=["IsGroupedBy","IsDecomposedBy"];return t.startsWith("Is")&&!c.includes(t)}]});n.expanded=!0;n.indentationInText=!0;n.preserveStructureOnFilter=!0;const h=o.get(N);h.setup({world:a});h.events.select.onHighlight.add(e=>{m({fragmentIdMap:e})});h.events.select.onClear.add(()=>m({fragmentIdMap:{}}));const G=R.create(()=>p`
    <bim-panel>
      <bim-panel-section label="Entity Attributes" fixed>
        <div style="display: flex; gap: 0.5rem; justify-content: space-between;">
          <div style="display: flex; gap: 0.5rem;">
            <bim-text-input @input=${r=>{const s=r.target;n.queryString=s.value}} type="search" placeholder="Search" debounce="250"></bim-text-input>
            <bim-checkbox @change=${r=>{const s=r.target;n.preserveStructureOnFilter=s.checked}} label="Preserve Structure" inverted checked></bim-checkbox>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <bim-dropdown @change=${r=>{const s=r.target;m({attributesToInclude:()=>[...s.value,i=>i.includes("Value"),i=>i.startsWith("Material"),i=>i.startsWith("Relating"),i=>{const k=["IsGroupedBy","IsDecomposedBy"];return i.startsWith("Is")&&!k.includes(i)}]})}} multiple>
              <bim-option label="Name" checked></bim-option> 
              <bim-option label="ContainedInStructure" checked></bim-option>
              <bim-option label="ForLayerSet"></bim-option>
              <bim-option label="LayerThickness"></bim-option>
              <bim-option label="HasProperties" checked></bim-option>
              <bim-option label="HasAssociations"></bim-option>
              <bim-option label="HasAssignments"></bim-option>
              <bim-option label="HasPropertySets" checked></bim-option>
              <bim-option label="PredefinedType"></bim-option>
              <bim-option label="Quantities"></bim-option>
              <bim-option label="ReferencedSource"></bim-option>
              <bim-option label="Identification"></bim-option>
              <bim-option label="Prefix"></bim-option>
              <bim-option label="LongName"></bim-option>
            </bim-dropdown>
            <bim-button @click=${async()=>{await navigator.clipboard.writeText(n.tsv),alert("Table data copied as TSV in clipboard! Try to paste it in a spreadsheet app.")}} icon="solar:copy-bold" tooltip-title="Copy TSV" tooltip-text="Copy the table contents as tab separated text values, so you can copy them into a spreadsheet."></bim-button>
            <bim-button @click=${()=>{n.downloadData("entities-attributes")}} icon="ph:export-fill" tooltip-title="Export JSON" tooltip-text="Download the table contents as a JSON file."></bim-button>
          </div>
        </div>
        ${n}
      </bim-panel-section>
    </bim-panel>
  `),y=document.createElement("bim-grid");y.layouts={main:{template:`
      "viewport" 1fr
      "entityAttributesPanel" 1fr
    `,elements:{entityAttributesPanel:G,viewport:d}}};y.layout="main";document.body.append(y);
