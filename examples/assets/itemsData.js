import"./lit-html-CgQwCkHV.js";import{l as f,C as v,W as h,S as x,a as y,b as C,G as S,f as L,I as k,F,i as I,e as T,d as E}from"./index-DPXt1yPz.js";import{b as M}from"./index-BINAE4l9.js";import{e as U}from"./index-COyobJWa.js";f.init();const i=document.createElement("bim-viewport"),t=new v,$=t.get(h),a=$.create();a.name="main";const p=new x(t);p.setup();a.scene=p;const d=new y(t,i);a.renderer=d;const m=new C(t);a.camera=m;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);i.addEventListener("resize",()=>{d.resize(),m.updateAspect()});t.init();const j=t.get(S);j.create(a);t.get(L).create(a);const O=t.get(k);await O.setup();const P="https://thatopen.github.io/engine_fragment/resources/worker.mjs",A=await fetch(P),R=await A.blob(),z=new File([R],"worker.mjs",{type:"text/javascript"}),B=URL.createObjectURL(z),o=t.get(F);o.init(B);a.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),o.core.update(!0)});o.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[n,u]=U.itemsData({components:t,modelIdMap:{}});n.preserveStructureOnFilter=!0;n.indentationInText=!1;const l=t.get(I);l.setup({world:a});l.events.select.onHighlight.add(e=>{u({modelIdMap:e})});l.events.select.onClear.add(()=>u({modelIdMap:{}}));const D=T.create(()=>{const[e]=M.loadFrag({components:t}),b=s=>{const r=s.target;n.queryString=r.value!==""?r.value:null},g=s=>{const r=s.target;n.expanded=!n.expanded,r.label=n.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(n.tsv)};return E`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        ${e}
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${n.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${w} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${b} placeholder="Search Property" debounce="250"></bim-text-input>
        ${n}
      </bim-panel-section>
    </bim-panel>
  `}),c=document.createElement("bim-grid");c.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:D,viewport:i}}};c.layout="main";document.body.append(c);
