import"./modulepreload-polyfill-B5Qt9EMX.js";import{M as s,C as m,a as f,T as b}from"./index-DF44z90o.js";import"./state-DYefyXr3.js";import{x as t}from"./lit-html-paDGiEfB.js";import"./ref-CInB0H-f.js";s.init();const d=[{data:{Class:"IfcWall",PredefinedType:"EXTERNAL",Name:"Exterior Wall",Description:"Main structural exterior wall",LoadBearing:!0,Area:45.5}},{data:{Class:"IfcDoor",PredefinedType:"SINGLE_SWING_RIGHT",Name:"Entrance Door",Description:"Main entrance door",LoadBearing:!1,Area:2.1}},{data:{Class:"IfcWindow",PredefinedType:"STANDARD",Name:"Office Window",Description:"Double-pane office window",LoadBearing:!1,Area:3.6}},{data:{Class:"IfcColumn",PredefinedType:"ROUND",Name:"Support Column",Description:"Load-bearing column in lobby",LoadBearing:!0,Area:1.2}},{data:{Class:"IfcSlab",PredefinedType:"FLOOR",Name:"Main Floor Slab",Description:"Primary floor slab for ground level",LoadBearing:!0,Area:150}}],o=document.createElement("bim-table");o.data=d;const r=document.createElement("bim-table");r.data=d;r.dataTransform.Area=e=>`${e} m²`;r.dataTransform.LoadBearing=(e,a)=>t`
   <bim-checkbox @change=${l=>{const n=l.target;n instanceof f&&(a.LoadBearing=n.checked,window.alert(`${a.Name} changed to LoadBearing = ${n.checked}`),o.requestUpdate())}} .checked=${e}></bim-checkbox> 
  `;r.dataTransform.Class=e=>{const a="padding: 0.125rem 0.375rem; border-radius: 999px";return e==="IfcDoor"||e==="IfcSlab"?t`
      <bim-label style="${a}; background-color: #ff000054; color: #d54f4f;">
        ${e}
      </bim-label> 
    `:e==="IfcColumn"||e==="IfcWall"?t`
      <bim-label style="${a}; background-color: #c700ff54; color: #c167da;">
        ${e}
      </bim-label> 
    `:e};r.dataTransform.Description=(e,a)=>{const{Class:i}=a;return i==="IfcDoor"?t`
      <bim-text-input @input=${n=>{const c=n.target;c instanceof b&&(a.Description=c.value,o.requestUpdate())}} value=${e} debounce=350></bim-text-input>
    `:e};const p=m.create(()=>t`
    <div style="display: flex; flex-direction: column; gap: 0.75rem; height: 100%;">
      <bim-label style="font-size: 1.375rem; line-height: normal;">Without Data Transform</bim-label>
      ${o}
      <bim-label style="font-size: 1.375rem; line-height: normal;">Data Transform applied!</bim-label>
      ${r}
    </div>
  `);document.body.append(p);
