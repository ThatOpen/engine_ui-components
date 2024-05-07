import{m as r,E as f}from"./index-RJxXwJnz.js";import{I as s}from"./index-BJN8AjRC.js";const m=t=>{const{components:n}=t,c=n.get(s);return r`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const e=document.createElement("input");e.type="file",e.accept=".ifc",e.onchange=async()=>{if(e.files===null||e.files.length===0)return;const o=e.files[0];e.remove();const a=await o.arrayBuffer(),l=new Uint8Array(a),i=await c.load(l);i.name=o.name.replace(".ifc","")},e.click()}}
    ></bim-button>
  `},u=t=>f.create(m,t),d=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:u},Symbol.toStringTag,{value:"Module"})),y={...d};export{y as b};
