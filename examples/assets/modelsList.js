import{b as m}from"./if-defined-DypSrBBK.js";import{r as l,C as d,W as p,S as b,a as u,b as w,G as g,I as f,F as h,h as L}from"./index-6HcFeNjn.js";import{b as v}from"./index-C55CQRqR.js";import{e as y}from"./index-BEcl2n9U.js";l.init();const t=new d,C=t.get(p),a=C.create();a.name="main";const r=new b(t);r.setup();a.scene=r;const n=document.createElement("bim-viewport"),i=new u(t,n);a.renderer=i;const c=new w(t);a.camera=c;n.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const F=t.get(g);F.create(a);t.init();const S=t.get(f);await S.setup();const I="https://thatopen.github.io/engine_fragment/resources/worker.mjs",M=await fetch(I),U=await M.blob(),j=new File([U],"worker.mjs",{type:"text/javascript"}),k=URL.createObjectURL(j),o=t.get(h);o.init(k);a.camera.controls.addEventListener("update",()=>o.core.update());o.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await o.core.update(!0)});o.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[E]=y.modelsList({components:t,metaDataTags:["schema"],actions:{download:!0}}),O=L.create(()=>{const[e]=v.loadFrag({components:t});return m`
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
