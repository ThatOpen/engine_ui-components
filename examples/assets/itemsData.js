import{b as f}from"./if-defined-DypSrBBK.js";import{r as h,C as v,W as x,S as y,a as C,b as S,G as L,i as k,I as F,F as I,D as T,h as E}from"./index-6HcFeNjn.js";import{b as M}from"./index-C55CQRqR.js";import{e as U}from"./index-BEcl2n9U.js";h.init();const i=document.createElement("bim-viewport"),t=new v,$=t.get(x),a=$.create();a.name="main";const p=new y(t);p.setup();a.scene=p;const d=new C(t,i);a.renderer=d;const m=new S(t);a.camera=m;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);i.addEventListener("resize",()=>{d.resize(),m.updateAspect()});t.init();const j=t.get(L);j.create(a);t.get(k).create(a);const O=t.get(F);await O.setup();const P="https://thatopen.github.io/engine_fragment/resources/worker.mjs",D=await fetch(P),A=await D.blob(),R=new File([A],"worker.mjs",{type:"text/javascript"}),z=URL.createObjectURL(R),o=t.get(I);o.init(z);a.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),o.core.update(!0)});o.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[n,u]=U.itemsData({components:t,modelIdMap:{}});n.preserveStructureOnFilter=!0;n.indentationInText=!1;const l=t.get(T);l.setup({world:a});l.events.select.onHighlight.add(e=>{u({modelIdMap:e})});l.events.select.onClear.add(()=>u({modelIdMap:{}}));const B=E.create(()=>{const[e]=M.loadFrag({components:t}),b=s=>{const r=s.target;n.queryString=r.value!==""?r.value:null},g=s=>{const r=s.target;n.expanded=!n.expanded,r.label=n.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(n.tsv)};return f`
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
    `,elements:{propertiesPanel:B,viewport:i}}};c.layout="main";document.body.append(c);
