import{b as d}from"./when-D9oPOCfO.js";import{C as l,W as p,S as b,a as u,b as f,G as g,I as w,F as r}from"./index-PQQfjRhF.js";import{a as L,Q as v}from"./index-DQFDb4ne.js";import{b as C}from"./index-BcEEKeoO.js";import{e as y}from"./index-B7cNthKr.js";L.init();const t=new l,S=t.get(p),a=S.create();a.name="main";const i=new b(t);i.setup();a.scene=i;const o=document.createElement("bim-viewport"),m=new u(t,o);a.renderer=m;const c=new f(t);a.camera=c;o.addEventListener("resize",()=>{m.resize(),c.updateAspect()});const F=t.get(g);F.create(a);t.init();const I=t.get(w);await I.setup();const M=await r.getWorker(),n=t.get(r);n.init(M);a.camera.controls.addEventListener("update",()=>n.core.update());n.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await n.core.update(!0)});n.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[h]=y.modelsList({components:t,metaDataTags:["schema"],actions:{download:!0}}),E=v.create(()=>{const[e]=C.loadFrag({components:t});return d`
   <bim-panel label="IFC Models">
    <bim-panel-section label="Importing">
      ${e}
    </bim-panel-section>
    <bim-panel-section icon="mage:box-3d-fill" label="Loaded Models">
      ${h}
    </bim-panel-section>
   </bim-panel> 
  `}),s=document.createElement("bim-grid");s.layouts={main:{template:`
      "panel viewport"
      / 23rem 1fr
    `,elements:{panel:E,viewport:o}}};s.layout="main";document.body.append(s);
