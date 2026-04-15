import{b as u}from"./if-defined-DypSrBBK.js";import{r as b,C as g,W as w,S as f,a as h,b as S,G as v,I as y,D as F,F as L,h as C}from"./index-6HcFeNjn.js";import{b as U}from"./index-C55CQRqR.js";import{e as j}from"./index-BEcl2n9U.js";b.init();const e=new g,k=e.get(w),n=k.create();n.name="main";const s=new f(e);s.setup();n.scene=s;const o=document.createElement("bim-viewport"),i=new h(e,o);n.renderer=i;const c=new S(e);n.camera=c;o.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const I=e.get(v);I.create(n);e.init();const M=e.get(y);await M.setup();const l=e.get(F);l.setup({world:n});l.zoomToSelection=!0;const O="https://thatopen.github.io/engine_fragment/resources/worker.mjs",T=await fetch(O),E=await T.blob(),x=new File([E],"worker.mjs",{type:"text/javascript"}),z=URL.createObjectURL(x),r=e.get(L);r.init(z);n.camera.controls.addEventListener("update",()=>r.core.update());r.list.onItemSet.add(async({value:t})=>{t.useCamera(n.camera.three),n.scene.three.add(t.object),await r.core.update(!0)});r.core.models.materials.list.onItemSet.add(({value:t})=>{"isLodMaterial"in t&&t.isLodMaterial||(t.polygonOffset=!0,t.polygonOffsetUnits=1,t.polygonOffsetFactor=Math.random())});const[a]=j.spatialTree({components:e,models:[]});a.preserveStructureOnFilter=!0;const B=C.create(()=>{const[t]=U.loadFrag({components:e});return u`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${t}
      <bim-text-input @input=${m=>{const d=m.target;a.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${a}
    </bim-panel-section>
   </bim-panel> 
  `}),p=document.getElementById("app");p.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:B,viewport:o}}};p.layout="main";
