import{b as a}from"./when-D9oPOCfO.js";import{M as b,C as c,a as d,T as f}from"./index-CICXNLO4.js";b.init();const m=[{data:{Class:"IfcWall",PredefinedType:"EXTERNAL",Name:"Exterior Wall",Description:"Main structural exterior wall",LoadBearing:!0,Area:45.5}},{data:{Class:"IfcDoor",PredefinedType:"SINGLE_SWING_RIGHT",Name:"Entrance Door",Description:"Main entrance door",LoadBearing:!1,Area:2.1}},{data:{Class:"IfcWindow",PredefinedType:"STANDARD",Name:"Office Window",Description:"Double-pane office window",LoadBearing:!1,Area:3.6}},{data:{Class:"IfcColumn",PredefinedType:"ROUND",Name:"Support Column",Description:"Load-bearing column in lobby",LoadBearing:!0,Area:1.2}},{data:{Class:"IfcSlab",PredefinedType:"FLOOR",Name:"Main Floor Slab",Description:"Primary floor slab for ground level",LoadBearing:!0,Area:150}}],o=document.createElement("bim-table");o.data=m;const i=document.createElement("bim-table");i.data=m;i.dataTransform.Area=e=>`${e} m²`;i.dataTransform.LoadBearing=(e,r)=>a`
   <bim-checkbox @change=${l=>{const n=l.target;n instanceof d&&(r.LoadBearing=n.checked,window.alert(`${r.Name} changed to LoadBearing = ${n.checked}`),o.requestUpdate())}} .checked=${e}></bim-checkbox> 
  `;i.dataTransform.Class=e=>{const r="padding: 0.125rem 0.375rem; border-radius: 999px";return e==="IfcDoor"||e==="IfcSlab"?a`
      <bim-label style="${r}; background-color: #ff000054; color: #d54f4f;">
        ${e}
      </bim-label> 
    `:e==="IfcColumn"||e==="IfcWall"?a`
      <bim-label style="${r}; background-color: #c700ff54; color: #c167da;">
        ${e}
      </bim-label> 
    `:e};i.dataTransform.Description=(e,r)=>{const{Class:t}=r;return t==="IfcDoor"?a`
      <bim-text-input @input=${n=>{const s=n.target;s instanceof f&&(r.Description=s.value,o.requestUpdate())}} value=${e} debounce=350></bim-text-input>
    `:e};i.headersTransform={Class:()=>a`<bim-label icon="material-symbols:category">Class</bim-label>`,PredefinedType:()=>a`<bim-label icon="material-symbols:sell">Predefined Type</bim-label>`,Name:()=>a`<bim-label icon="material-symbols:badge">Name</bim-label>`,Description:()=>a`<bim-label icon="material-symbols:info">Description</bim-label>`,LoadBearing:()=>a`<bim-label icon="material-symbols:verified">Load Bearing</bim-label>`,Area:()=>a`<bim-label icon="material-symbols:straighten">Area</bim-label>`};const p=c.create(()=>a`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <bim-label style="font-size: 1.375rem; line-height: normal;">Without Data Transform</bim-label>
      ${o}
      <bim-label style="font-size: 1.375rem; line-height: normal;">Data Transform applied!</bim-label>
      ${i}
    </div>
  `);document.body.append(p);
