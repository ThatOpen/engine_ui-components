import{b as g}from"./when-D9oPOCfO.js";import{C as b,W as f,S as w,a as S,b as h,G as v,I as y,m as C,F as s}from"./index-PQQfjRhF.js";import{a as F,Q as L}from"./index-DQFDb4ne.js";import{b as I}from"./index-BcEEKeoO.js";import{e as M}from"./index-B7cNthKr.js";F.init();const e=new b,T=e.get(f),a=T.create();a.name="main";const i=new w(e);i.setup();a.scene=i;const r=document.createElement("bim-viewport"),c=new S(e,r);a.renderer=c;const m=new h(e);a.camera=m;r.addEventListener("resize",()=>{c.resize(),m.updateAspect()});const E=e.get(v);E.create(a);e.init();const O=e.get(y);await O.setup();const p=e.get(C);p.setup({world:a});p.zoomToSelection=!0;const z=await s.getWorker(),n=e.get(s);n.init(z);a.camera.controls.addEventListener("update",()=>n.core.update());n.list.onItemSet.add(async({value:t})=>{t.useCamera(a.camera.three),a.scene.three.add(t.object),await n.core.update(!0)});n.core.models.materials.list.onItemSet.add(({value:t})=>{"isLodMaterial"in t&&t.isLodMaterial||(t.polygonOffset=!0,t.polygonOffsetUnits=1,t.polygonOffsetFactor=Math.random())});const[o]=M.spatialTree({components:e,models:[]});o.preserveStructureOnFilter=!0;const G=L.create(()=>{const[t]=I.loadFrag({components:e});return g`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${t}
      <bim-text-input @input=${d=>{const u=d.target;o.queryString=u.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${o}
    </bim-panel-section>
   </bim-panel> 
  `}),l=document.getElementById("app");l.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:G,viewport:r}}};l.layout="main";
