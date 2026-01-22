import{d as u,W as w,F as b,I as h,e as g}from"./index-suFrD91l.js";const k=o=>{const{components:e,modelUserData:n,worldName:i}=o;return u`
    <bim-button
      data-ui-id="import-ifc"
      label="Load IFC"
      icon="mage:box-3d-fill"
      @click=${()=>{if(!(e&&i))return;const r=[...e.get(w).list.values()].find(c=>"name"in c&&c.name===i);if(!r)return;const t=document.createElement("input");t.type="file",t.accept=".ifc",t.onchange=async()=>{if(t.files===null||t.files.length===0)return;const c=t.files[0],l=await c.arrayBuffer(),s=new Uint8Array(l),p=c.name.replace(".ifc",""),y=e.get(b),f=e.get(h);f.settings.autoSetWasm=!1,f.settings.wasm={path:"https://unpkg.com/web-ifc@0.0.74/",absolute:!1};const m=await f.load(s,!0,p,{userData:n});r.scene.three.add(m.object),m.useCamera(r.camera.three),y.core.update(!0)},t.click()}}
    ></bim-button>
  `},C=o=>g.create(k,o),I=Object.freeze(Object.defineProperty({__proto__:null,loadIfc:C},Symbol.toStringTag,{value:"Module"})),_=o=>{const{components:e,world:n}=o;return u`
    <bim-button @click=${()=>{const a=document.createElement("input");a.type="file",a.accept=".frag",a.onchange=async()=>{if(a.files===null||a.files.length===0)return;const d=a.files[0],r=await d.arrayBuffer(),t=new Uint8Array(r),c=d.name.replace(".frag",""),l=e.get(b),s=await l.core.load(t,{modelId:c});n&&(n.scene.three.add(s.object),s.useCamera(n.camera.three),l.core.update(!0))},a.click()}}></bim-button>
  `},F=o=>{const e=g.create(_,o),[n]=e;return n.label="Load FRAG",n.icon="mage:box-3d-fill",e},j=Object.freeze(Object.defineProperty({__proto__:null,loadFrag:F},Symbol.toStringTag,{value:"Module"})),L={...I,...j};export{L as b};
