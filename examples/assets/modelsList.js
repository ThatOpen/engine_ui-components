import"./lit-html-CgQwCkHV.js";import{l,C as m,W as d,S as p,a as b,b as u,G as w,I as g,F as f,e as L,d as h}from"./index-DPXt1yPz.js";import{b as v}from"./index-BINAE4l9.js";import{e as C}from"./index-COyobJWa.js";l.init();const t=new m,y=t.get(d),a=y.create();a.name="main";const r=new p(t);r.setup();a.scene=r;const n=document.createElement("bim-viewport"),i=new b(t,n);a.renderer=i;const c=new u(t);a.camera=c;n.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const F=t.get(w);F.create(a);t.init();const S=t.get(g);await S.setup();const I="https://thatopen.github.io/engine_fragment/resources/worker.mjs",M=await fetch(I),U=await M.blob(),j=new File([U],"worker.mjs",{type:"text/javascript"}),k=URL.createObjectURL(j),o=t.get(f);o.init(k);a.camera.controls.addEventListener("update",()=>o.core.update());o.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await o.core.update(!0)});o.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[E]=C.modelsList({components:t,metaDataTags:["schema"],actions:{download:!0}}),O=L.create(()=>{const[e]=v.loadFrag({components:t});return h`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${e}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${E}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:O,viewport:n}}};s.layout="main";document.body.append(s);
