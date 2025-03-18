import{x as p}from"./lit-element-CToom8Wf.js";import{P as v,C as T,W as k,S as P,a as A,b as $,G as E,I as L,l as W,s as N,T as R,_ as b,w as H,z as M}from"./index-rdG5sBXa.js";import{t as O}from"./index-CZbBbHQ3.js";v.init();const o=new T,V=o.get(k),a=V.create(),S=new P(o);S.setup();a.scene=S;const d=document.createElement("bim-viewport"),w=new A(o,d);a.renderer=w;const m=new $(o);a.camera=m;m.controls.setLookAt(10,5.5,5,-4,-1,-6.5);d.addEventListener("resize",()=>{w.resize(),m.updateAspect()});o.init();const B=o.get(E);B.create(a);const C=o.get(L);await C.setup();const D=await fetch("https://thatopen.github.io/engine_ui-components/resources/small.ifc"),F=await D.arrayBuffer(),G=new Uint8Array(F),x=await C.load(G);a.scene.three.add(x);const J=o.get(W);await J.process(x);const l={padding:"0.25rem",borderRadius:"0.25rem"},z={Entity:t=>{let e={};return t===H[M]&&(e={...l,backgroundColor:"purple",color:"white"}),String(t).includes("IFCWALL")&&(e={...l,backgroundColor:"green",color:"white"}),p`<bim-label style=${b(e)}>${t}</bim-label>`},PredefinedType:t=>{const e=["#1c8d83","#3c1c8d","#386c19","#837c24"],c=Math.floor(Math.random()*e.length),g=e[c],f={...l,backgroundColor:g,color:"white"};return p`<bim-label style=${b(f)}>${t}</bim-label>`},NominalValue:t=>{let e={};return typeof t=="boolean"&&t===!1&&(e={...l,backgroundColor:"#b13535",color:"white"}),typeof t=="boolean"&&t===!0&&(e={...l,backgroundColor:"#18882c",color:"white"}),p`<bim-label style=${b(e)}>${t}</bim-label>`}},[i,u]=O.entityAttributes({components:o,fragmentIdMap:{},tableDefinition:z,attributesToInclude:()=>["Name","ContainedInStructure","HasProperties","HasPropertySets",e=>e.includes("Value"),e=>e.startsWith("Material"),e=>e.startsWith("Relating"),e=>{const c=["IsGroupedBy","IsDecomposedBy"];return e.startsWith("Is")&&!c.includes(e)}]});i.expanded=!0;i.indentationInText=!0;i.preserveStructureOnFilter=!0;const h=o.get(N);h.setup({world:a});h.events.select.onHighlight.add(t=>{u({fragmentIdMap:t})});h.events.select.onClear.add(()=>u({fragmentIdMap:{}}));const Q=R.create(()=>p`
    <bim-panel>
      <bim-panel-section label="Entity Attributes" fixed>
        <div style="display: flex; gap: 0.5rem; justify-content: space-between;">
          <div style="display: flex; gap: 0.5rem;">
            <bim-text-input @input=${r=>{const s=r.target;i.queryString=s.value}} type="search" placeholder="Search" debounce="250"></bim-text-input>
            <bim-checkbox @change=${r=>{const s=r.target;i.preserveStructureOnFilter=s.checked}} label="Preserve Structure" inverted checked></bim-checkbox>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <bim-dropdown @change=${r=>{const s=r.target;u({attributesToInclude:()=>[...s.value,n=>n.includes("Value"),n=>n.startsWith("Material"),n=>n.startsWith("Relating"),n=>{const I=["IsGroupedBy","IsDecomposedBy"];return n.startsWith("Is")&&!I.includes(n)}]})}} multiple>
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
    `,elements:{entityAttributesPanel:Q,viewport:d}}};y.layout="main";document.body.append(y);
