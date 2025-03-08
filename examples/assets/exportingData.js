import{x as n}from"./lit-element-BOuWA2QR.js";import{M as c,C as a,T as d,a as s}from"./index-C7jubDp1.js";import"./state-BGH1zGw6.js";import"./ref-BUnwESOR.js";c.init();const o=document.createElement("bim-table");o.expanded=!0;o.data=[{data:{Class:"IfcWall",PredefinedType:"EXTERNAL",Name:"Exterior Wall",Description:"Main structural exterior wall",LoadBearing:!0,Area:45.5},children:[{data:{Class:"IfcWindow",PredefinedType:"STANDARD",Name:"Office Window",Description:"Double-pane office window",LoadBearing:!1,Area:3.6}}]},{data:{Class:"IfcDoor",PredefinedType:"SINGLE_SWING_RIGHT",Name:"Entrance Door",Description:"Main entrance door",LoadBearing:!1,Area:2.1}},{data:{Class:"IfcColumn",PredefinedType:"ROUND",Name:"Support Column",Description:"Load-bearing column in lobby",LoadBearing:!0,Area:1.2}},{data:{Class:"IfcSlab",PredefinedType:"FLOOR",Name:"Main Floor Slab",Description:"Primary floor slab for ground level",LoadBearing:!0,Area:150}}];const p=a.create(()=>n`
   <bim-text-input @input=${e=>{const t=e.target;t instanceof d&&(o.queryString=t.value)}} placeholder="Search..."></bim-text-input> 
  `),l=a.create(()=>n`
    <bim-dropdown required style="flex: 0">
      <bim-option label="CSV" value="csv" checked></bim-option>
      <bim-option label="TSV" value="tsv"></bim-option>
      <bim-option label="JSON" value="json"></bim-option>
    </bim-dropdown> 
  `),r=a.create(()=>n`<bim-text-input value="My Data" style="width: 4rem"></bim-text-input>`),u=a.create(()=>n`
    <bim-button @click=${()=>{const e=l.value[0];if(e===void 0)return;const t=r.value.trim()!==""?r.value:void 0;o.downloadData(t,e)}} label="Download" style="flex: 0"></bim-button>
  `),m=a.create(()=>n`
   <bim-checkbox @change=${e=>{const t=e.target;t instanceof s&&(o.indentationInText=t.checked)}} label="Include Indentation" inverted></bim-checkbox> 
  `),b=a.create(()=>n`
   <bim-button @click=${async()=>{const e=l.value[0];e===void 0||e==="json"||(await navigator.clipboard.writeText(o[e]),window.alert("Table data copied as CSV in clipboard!"))}} label="Copy to Clipboard" style="flex: 0"></bim-button> 
  `),f=a.create(()=>n`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <div style="display: flex; gap: 0.5rem">
        ${p}
        ${r}
        ${l}
        ${m}
        ${u}
        ${b}
      </div> 
      ${o}
    </div>
  `);document.body.append(f);
