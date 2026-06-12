import{b as w}from"./when-D9oPOCfO.js";import{a as x,Q as y}from"./index-DQFDb4ne.js";import{C,W as S,S as h,a as I,b as T,G as E,g as L,I as F,F as c,m as M}from"./index-PQQfjRhF.js";import{b as $}from"./index-BcEEKeoO.js";import{e as k}from"./index-B7cNthKr.js";x.init();const i=document.createElement("bim-viewport"),t=new C,P=t.get(S),a=P.create();a.name="main";const d=new h(t);d.setup();a.scene=d;const m=new I(t,i);a.renderer=m;const u=new T(t);a.camera=u;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);i.addEventListener("resize",()=>{m.resize(),u.updateAspect()});t.init();const O=t.get(E);O.create(a);t.get(L).create(a);const A=t.get(F);await A.setup();const W=await c.getWorker(),o=t.get(c);o.init(W);a.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),o.core.update(!0)});o.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[n,b]=k.itemsData({components:t,modelIdMap:{}});n.preserveStructureOnFilter=!0;n.indentationInText=!1;const p=t.get(M);p.setup({world:a});p.events.select.onHighlight.add(e=>{b({modelIdMap:e})});p.events.select.onClear.add(()=>b({modelIdMap:{}}));const z=y.create(()=>{const[e]=$.loadFrag({components:t}),g=s=>{const r=s.target;n.queryString=r.value!==""?r.value:null},f=s=>{const r=s.target;n.expanded=!n.expanded,r.label=n.expanded?"Collapse":"Expand"},v=async()=>{await navigator.clipboard.writeText(n.tsv)};return w`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        ${e}
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${f} label=${n.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${v} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${g} placeholder="Search Property" debounce="250"></bim-text-input>
        ${n}
      </bim-panel-section>
    </bim-panel>
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:z,viewport:i}}};l.layout="main";document.body.append(l);
