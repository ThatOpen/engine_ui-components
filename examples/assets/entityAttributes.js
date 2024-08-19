import"./lit-html-DcU_S_gY.js";import{d as v,o as k,a as T,L as A,M as P,N as E,l as $,E as L,J as N,r as W,R as M,m as p,W as b,h as R,I as H}from"./template-DUn1E-Qh.js";import{t as O}from"./index-BeGjUNvO.js";v.init();const o=new k,V=o.get(T),a=V.create(),w=new A(o);w.setup();a.scene=w;const d=document.createElement("bim-viewport"),S=new P(o,d);a.renderer=S;const u=new E(o);a.camera=u;u.controls.setLookAt(10,5.5,5,-4,-1,-6.5);d.addEventListener("resize",()=>{S.resize(),u.updateAspect()});o.init();const J=o.get($);J.create(a);const x=o.get(L);await x.setup();const B=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),D=await B.arrayBuffer(),F=new Uint8Array(D),C=await x.load(F);a.scene.three.add(C);const z=o.get(N);await z.process(C);const l={padding:"0.25rem",borderRadius:"0.25rem"},G={Entity:e=>{let t={};return e===R[H]&&(t={...l,backgroundColor:"purple",color:"white"}),String(e).includes("IFCWALL")&&(t={...l,backgroundColor:"green",color:"white"}),p`<bim-label style=${b(t)}>${e}</bim-label>`},PredefinedType:e=>{const t=["#1c8d83","#3c1c8d","#386c19","#837c24"],c=Math.floor(Math.random()*t.length),g=t[c],f={...l,backgroundColor:g,color:"white"};return p`<bim-label style=${b(f)}>${e}</bim-label>`},NominalValue:e=>{let t={};return typeof e=="boolean"&&e===!1&&(t={...l,backgroundColor:"#b13535",color:"white"}),typeof e=="boolean"&&e===!0&&(t={...l,backgroundColor:"#18882c",color:"white"}),p`<bim-label style=${b(t)}>${e}</bim-label>`}},[i,m]=O.entityAttributes({components:o,fragmentIdMap:{},tableDefinition:G,attributesToInclude:()=>["Name","ContainedInStructure","HasProperties","HasPropertySets",t=>t.includes("Value"),t=>t.startsWith("Material"),t=>t.startsWith("Relating"),t=>{const c=["IsGroupedBy","IsDecomposedBy"];return t.startsWith("Is")&&!c.includes(t)}]});i.expanded=!0;i.indentationInText=!0;i.preserveStructureOnFilter=!0;const h=o.get(W);h.setup({world:a});h.events.select.onHighlight.add(e=>{m({fragmentIdMap:e})});h.events.select.onClear.add(()=>m({fragmentIdMap:{}}));const j=M.create(()=>p`
    <bim-panel>
      <bim-panel-section label="Entity Attributes" fixed>
        <div style="display: flex; gap: 0.5rem; justify-content: space-between;">
          <div style="display: flex; gap: 0.5rem;">
            <bim-text-input @input=${r=>{const s=r.target;i.queryString=s.value}} type="search" placeholder="Search" debounce="250"></bim-text-input>
            <bim-checkbox @change=${r=>{const s=r.target;i.preserveStructureOnFilter=s.checked}} label="Preserve Structure" inverted checked></bim-checkbox>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <bim-dropdown @change=${r=>{const s=r.target;m({attributesToInclude:()=>[...s.value,n=>n.includes("Value"),n=>n.startsWith("Material"),n=>n.startsWith("Relating"),n=>{const I=["IsGroupedBy","IsDecomposedBy"];return n.startsWith("Is")&&!I.includes(n)}]})}} multiple>
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
            <bim-button @click=${async()=>{await navigator.clipboard.writeText(i.tsv),alert("Table data copied as TSV in clipboard! Try to paste it in a spreadsheet app.")}} icon="solar:copy-bold" tooltip-title="Copy TSV" tooltip-text="Copy the table contents as tab separated text values, so you can copy them into a spreadsheet."></bim-button>
            <bim-button @click=${()=>{i.downloadData("entities-attributes")}} icon="ph:export-fill" tooltip-title="Export JSON" tooltip-text="Download the table contents as a JSON file."></bim-button>
          </div>
        </div>
        ${i}
      </bim-panel-section>
    </bim-panel>
  `),y=document.createElement("bim-grid");y.layouts={main:{template:`
      "viewport" 1fr
      "entityAttributesPanel" 1fr
    `,elements:{entityAttributesPanel:j,viewport:d}}};y.layout="main";document.body.append(y);
