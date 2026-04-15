import{W as w,F as u,I as h,h as b}from"./index-6HcFeNjn.js";import{b as p}from"./if-defined-DypSrBBK.js";const k=a=>{const{components:e,modelUserData:n,worldName:i}=a;return p`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{if(!(e&&i))return;const r=[...e.get(w).list.values()].find(c=>"name"in c&&c.name===i);if(!r)return;const t=document.createElement("input");t.type="file",t.accept=".ifc",t.onchange=async()=>{if(t.files===null||t.files.length===0)return;const c=t.files[0],l=await c.arrayBuffer(),s=new Uint8Array(l),g=c.name.replace(".ifc",""),y=e.get(u),m=e.get(h);m.settings.autoSetWasm=!1,m.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.77/",absolute:!1};const d=await m.load(s,!0,g,{userData:n});r.scene.three.add(d.object),d.useCamera(r.camera.three),y.core.update(!0)},t.click()}}
    ></bim-button>
  `},I=a=>b.create(k,a),_=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:I},Symbol.toStringTag,{value:"Module"})),C=a=>{const{components:e,world:n}=a;return p`
    <bim-button @click=${()=>{const o=document.createElement("input");o.type="file",o.accept=".frag",o.onchange=async()=>{if(o.files===null||o.files.length===0)return;const f=o.files[0],r=await f.arrayBuffer(),t=new Uint8Array(r),c=f.name.replace(".frag",""),l=e.get(u),s=await l.core.load(t,{modelId:c});n&&(n.scene.three.add(s.object),s.useCamera(n.camera.three),l.core.update(!0))},o.click()}}></bim-button>
  `},F=a=>{const e=b.create(C,a),[n]=e;return n.label="Load FRAG",n.icon="mage:box-3d-fill",e},j=Object.freeze(Object.defineProperty({__proto__:null,loadFrag:F},Symbol.toStringTag,{value:"Module"})),O={..._,...j};export{O as b};
