import"./lit-html-CgQwCkHV.js";import{l as u,C as g,W as b,S as w,a as f,b as h,G as S,I as v,i as y,F as C,e as F,d as L}from"./index-DPXt1yPz.js";import{b as U}from"./index-BINAE4l9.js";import{e as j}from"./index-COyobJWa.js";u.init();const e=new g,k=e.get(b),n=k.create();n.name="main";const s=new w(e);s.setup();n.scene=s;const o=document.createElement("bim-viewport"),i=new f(e,o);n.renderer=i;const c=new h(e);n.camera=c;o.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const I=e.get(S);I.create(n);e.init();const M=e.get(v);await M.setup();const l=e.get(y);l.setup({world:n});l.zoomToSelection=!0;const O="https://thatopen.github.io/engine_fragment/resources/worker.mjs",T=await fetch(O),E=await T.blob(),x=new File([E],"worker.mjs",{type:"text/javascript"}),z=URL.createObjectURL(x),a=e.get(C);a.init(z);n.camera.controls.addEventListener("update",()=>a.core.update());a.list.onItemSet.add(async({value:t})=>{t.useCamera(n.camera.three),n.scene.three.add(t.object),await a.core.update(!0)});a.core.models.materials.list.onItemSet.add(({value:t})=>{"isLodMaterial"in t&&t.isLodMaterial||(t.polygonOffset=!0,t.polygonOffsetUnits=1,t.polygonOffsetFactor=Math.random())});const[r]=j.spatialTree({components:e,models:[]});r.preserveStructureOnFilter=!0;const B=F.create(()=>{const[t]=U.loadFrag({components:e});return L`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${t}
      <bim-text-input @input=${m=>{const d=m.target;r.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${r}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:B,viewport:o}}};p.layout="main";
