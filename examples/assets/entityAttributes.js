import"./modulepreload-polyfill-B5Qt9EMX.js";import{p as I,f as v,a as A,s as T,i as P,k as $,N as E,m as N,A as L,e as H,g as p,t as b,h as O,I as V}from"./index-Dd0JWJAT.js";import{A as W}from"./index-BWRMmb5S.js";import{t as M}from"./index-DUwKbYHc.js";I.init();const o=new v,R=o.get(A),a=R.create(),w=new T(o);w.setup();a.scene=w;const d=document.createElement("bim-viewport"),S=new P(o,d);a.renderer=S;const m=new $(o);a.camera=m;m.controls.setLookAt(10,5.5,5,-4,-1,-6.5);d.addEventListener("resize",()=>{S.resize(),m.updateAspect()});o.init();const B=o.get(E);B.create(a);const x=o.get(N);await x.setup();const D=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),F=await D.arrayBuffer(),J=new Uint8Array(F),C=await x.load(J);a.scene.three.add(C);const z=o.get(L);await z.process(C);const l={padding:"0.25rem",borderRadius:"0.25rem"},G={Entity:e=>{let t={};return e===O[V]&&(t={...l,backgroundColor:"purple",color:"white"}),String(e).includes("IFCWALL")&&(t={...l,backgroundColor:"green",color:"white"}),p`<bim-label style=${b(t)}>${e}</bim-label>`},PredefinedType:e=>{const t=["#1c8d83","#3c1c8d","#386c19","#837c24"],c=Math.floor(Math.random()*t.length),g=t[c],f={...l,backgroundColor:g,color:"white"};return p`<bim-label style=${b(f)}>${e}</bim-label>`},NominalValue:e=>{let t={};return typeof e=="boolean"&&e===!1&&(t={...l,backgroundColor:"#b13535",color:"white"}),typeof e=="boolean"&&e===!0&&(t={...l,backgroundColor:"#18882c",color:"white"}),p`<bim-label style=${b(t)}>${e}</bim-label>`}},[n,u]=M.entityAttributes({components:o,fragmentIdMap:{},tableDefinition:G,attributesToInclude:()=>["Name","ContainedInStructure","HasProperties","HasPropertySets",t=>t.includes("Value"),t=>t.startsWith("Material"),t=>t.startsWith("Relating"),t=>{const c=["IsGroupedBy","IsDecomposedBy"];return t.startsWith("Is")&&!c.includes(t)}]});n.expanded=!0;n.indentationInText=!0;n.preserveStructureOnFilter=!0;const h=o.get(W);h.setup({world:a});h.events.select.onHighlight.add(e=>{u({fragmentIdMap:e})});h.events.select.onClear.add(()=>u({fragmentIdMap:{}}));const j=H.create(()=>p`
    <bim-panel>
      <bim-panel-section label="Entity Attributes" fixed>
        <div style="display: flex; gap: 0.5rem; justify-content: space-between;">
          <div style="display: flex; gap: 0.5rem;">
            <bim-text-input @input=${r=>{const s=r.target;n.queryString=s.value}} type="search" placeholder="Search" debounce="250"></bim-text-input>
            <bim-checkbox @change=${r=>{const s=r.target;n.preserveStructureOnFilter=s.checked}} label="Preserve Structure" inverted checked></bim-checkbox>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <bim-dropdown @change=${r=>{const s=r.target;u({attributesToInclude:()=>[...s.value,i=>i.includes("Value"),i=>i.startsWith("Material"),i=>i.startsWith("Relating"),i=>{const k=["IsGroupedBy","IsDecomposedBy"];return i.startsWith("Is")&&!k.includes(i)}]})}} multiple>
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
    `,elements:{entityAttributesPanel:j,viewport:d}}};y.layout="main";document.body.append(y);
