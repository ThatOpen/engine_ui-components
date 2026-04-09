import"./lit-html-CgQwCkHV.js";import{p as u,C as g,W as b,S as w,a as f,b as h,G as S,I as v,n as y,F,m as L,e as C}from"./index-DNriEO-H.js";import{b as T}from"./index-BvAr0qOT.js";import{e as U}from"./index-C0cKEegq.js";u.init();const e=new g,j=e.get(b),n=j.create();n.name="main";const s=new w(e);s.setup();n.scene=s;const o=document.createElement("bim-viewport"),i=new f(e,o);n.renderer=i;const c=new h(e);n.camera=c;o.addEventListener("resize",()=>{i.resize(),c.updateAspect()});const k=e.get(S);k.create(n);e.init();const I=e.get(v);await I.setup();const p=e.get(y);p.setup({world:n});p.zoomToSelection=!0;const M="https://thatopen.github.io/engine_fragment/resources/worker.mjs",O=await fetch(M),E=await O.blob(),x=new File([E],"worker.mjs",{type:"text/javascript"}),z=URL.createObjectURL(x),a=e.get(F);a.init(z);n.camera.controls.addEventListener("update",()=>a.core.update());a.list.onItemSet.add(async({value:t})=>{t.useCamera(n.camera.three),n.scene.three.add(t.object),await a.core.update(!0)});a.core.models.materials.list.onItemSet.add(({value:t})=>{"isLodMaterial"in t&&t.isLodMaterial||(t.polygonOffset=!0,t.polygonOffsetUnits=1,t.polygonOffsetFactor=Math.random())});const[r]=U.spatialTree({components:e,models:[]});r.preserveStructureOnFilter=!0;const B=L.create(()=>{const[t]=T.loadFrag({components:e});return C`
   <bim-panel label="Spatial Tree">
    <bim-panel-section label="Model Tree">
      ${t}
      <bim-text-input @input=${m=>{const d=m.target;r.queryString=d.value}} placeholder="Search..." debounce="200"></bim-text-input>
      ${r}
    </bim-panel-section>
   </bim-panel> 
  `}),l=document.getElementById("app");l.layouts={main:{template:`
      "panel viewport"
      / 30rem 1fr
    `,elements:{panel:B,viewport:o}}};l.layout="main";
