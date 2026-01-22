import"./lit-html-CgQwCkHV.js";import{l as w,C as x,W as C,S as h,a as f,b as S,G as y,g as T,I as E,F as I,f as $,e as F,d as L}from"./index-Dns8uyf5.js";import{b as P}from"./index-CxRwsq7h.js";import{e as k}from"./index-B3C-Wr2i.js";w.init();const i=document.createElement("bim-viewport"),e=new x,A=e.get(C),t=A.create();t.name="main";const c=new h(e);c.setup();t.scene=c;const d=new f(e,i);t.renderer=d;const m=new S(e);t.camera=m;await t.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);i.addEventListener("resize",()=>{d.resize(),m.updateAspect()});e.init();const M=e.get(y);M.create(t);e.get(T).create(t);const j=e.get(E);await j.setup();const o=e.get(I);o.init("https://thatopen.github.io/engine_fragment/resources/worker.mjs");t.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(({value:n})=>{n.useCamera(t.camera.three),t.scene.three.add(n.object),o.core.update(!0)});const[a,u]=k.itemsData({components:e,modelIdMap:{}});a.preserveStructureOnFilter=!0;a.indentationInText=!1;const p=e.get($);p.setup({world:t});p.events.select.onHighlight.add(n=>{u({modelIdMap:n})});p.events.select.onClear.add(()=>u({modelIdMap:{}}));const z=F.create(()=>{const[n]=P.loadFrag({components:e}),b=s=>{const r=s.target;a.queryString=r.value!==""?r.value:null},g=s=>{const r=s.target;a.expanded=!a.expanded,r.label=a.expanded?"Collapse":"Expand"},v=async()=>{await navigator.clipboard.writeText(a.tsv)};return L`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        ${n}
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${a.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${v} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${b} placeholder="Search Property" debounce="250"></bim-text-input>
        ${a}
      </bim-panel-section>
    </bim-panel>
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:z,viewport:i}}};l.layout="main";document.body.append(l);
