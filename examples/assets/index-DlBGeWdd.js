import{f as u,W as w,F as b,I as h,U as g}from"./index-CDIUJH9Y.js";const k=o=>{const{components:e,modelUserData:n,worldName:i}=o;return u`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{if(!(e&&i))return;const r=[...e.get(w).list.values()].find(c=>"name"in c&&c.name===i);if(!r)return;const t=document.createElement("input");t.type="file",t.accept=".ifc",t.onchange=async()=>{if(t.files===null||t.files.length===0)return;const c=t.files[0],l=await c.arrayBuffer(),s=new Uint8Array(l),p=c.name.replace(".ifc",""),y=e.get(b),d=e.get(h);d.settings.autoSetWasm=!1,d.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.72/",absolute:!1};const m=await d.load(s,!0,p,{userData:n});r.scene.three.add(m.object),m.useCamera(r.camera.three),y.core.update(!0)},t.click()}}
    ></bim-button>
  `},I=o=>g.create(k,o),_=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:I},Symbol.toStringTag,{value:"Module"})),C=o=>{const{components:e,world:n}=o;return u`
    <bim-button @click=${()=>{const a=document.createElement("input");a.type="file",a.accept=".frag",a.onchange=async()=>{if(a.files===null||a.files.length===0)return;const f=a.files[0],r=await f.arrayBuffer(),t=new Uint8Array(r),c=f.name.replace(".frag",""),l=e.get(b),s=await l.core.load(t,{modelId:c});n&&(n.scene.three.add(s.object),s.useCamera(n.camera.three),l.core.update(!0))},a.click()}}></bim-button>
  `},F=o=>{const e=g.create(C,o),[n]=e;return n.label="Load FRAG",n.icon="mage:box-3d-fill",e},j=Object.freeze(Object.defineProperty({__proto__:null,loadFrag:F},Symbol.toStringTag,{value:"Module"})),L={..._,...j};export{L as b};
