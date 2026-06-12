import{Q as u}from"./index-DQFDb4ne.js";import{W as w,F as b,I as h}from"./index-PQQfjRhF.js";import{b as p}from"./when-D9oPOCfO.js";const k=a=>{const{components:e,modelUserData:n,worldName:i}=a;return p`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{if(!(e&&i))return;const r=[...e.get(w).list.values()].find(c=>"name"in c&&c.name===i);if(!r)return;const t=document.createElement("input");t.type="file",t.accept=".ifc",t.onchange=async()=>{if(t.files===null||t.files.length===0)return;const c=t.files[0],l=await c.arrayBuffer(),s=new Uint8Array(l),g=c.name.replace(".ifc",""),y=e.get(b),f=e.get(h);f.settings.autoSetWasm=!1,f.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.77/",absolute:!1};const d=await f.load(s,!0,g,{userData:n});r.scene.three.add(d.object),d.useCamera(r.camera.three),y.core.update(!0)},t.click()}}
    ></bim-button>
  `},I=a=>u.create(k,a),_=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:I},Symbol.toStringTag,{value:"Module"})),C=a=>{const{components:e,world:n}=a;return p`
    <bim-button @click=${()=>{const o=document.createElement("input");o.type="file",o.accept=".frag",o.onchange=async()=>{if(o.files===null||o.files.length===0)return;const m=o.files[0],r=await m.arrayBuffer(),t=new Uint8Array(r),c=m.name.replace(".frag",""),l=e.get(b),s=await l.core.load(t,{modelId:c});n&&(n.scene.three.add(s.object),s.useCamera(n.camera.three),l.core.update(!0))},o.click()}}></bim-button>
  `},F=a=>{const e=u.create(C,a),[n]=e;return n.label="Load FRAG",n.icon="mage:box-3d-fill",e},j=Object.freeze(Object.defineProperty({__proto__:null,loadFrag:F},Symbol.toStringTag,{value:"Module"})),S={..._,...j};export{S as b};
