import{I as r,m as f,l as s}from"./index-Bw1iD8pu.js";const m=t=>{const{components:n}=t,c=n.get(r);return f`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{const e=document.createElement("input");e.type="file",e.accept=".ifc",e.onchange=async()=>{if(e.files===null||e.files.length===0)return;const o=e.files[0],a=o.name.replace(".ifc","");e.remove();const l=await o.arrayBuffer(),i=new Uint8Array(l);await c.load(i,!0,a)},e.click()}}
    ></bim-button>
  `},u=t=>s.create(m,t),d=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:u},Symbol.toStringTag,{value:"Module"})),g={...d};export{g as b};
