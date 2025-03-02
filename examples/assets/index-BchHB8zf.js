import{I as r,T as f}from"./index-BJ_2_yvW.js";import{x as s}from"./lit-element-CToom8Wf.js";const m=t=>{const{components:o}=t,c=o.get(r);return s`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const e=document.createElement("input");e.type="file",e.accept=".ifc",e.onchange=async()=>{if(e.files===null||e.files.length===0)return;const n=e.files[0],a=n.name.replace(".ifc","");e.remove();const l=await n.arrayBuffer(),i=new Uint8Array(l);await c.load(i,!0,a)},e.click()}}
    ></bim-button>
  `},u=t=>f.create(m,t),d=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:u},Symbol.toStringTag,{value:"Module"})),y={...d};export{y as b};
