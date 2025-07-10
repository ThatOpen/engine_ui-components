import"./lit-html-Cs86_c16.js";import{a as w,C as x,W as C,S as f,b as S,c as h,G as y,g as T,I as E,F as I,J as $,R as k,m as F}from"./index-BgQRAdOj.js";import{b as L}from"./index-NGXf93vL.js";import{e as P}from"./index-E2Xb6mG8.js";w.init();const i=document.createElement("bim-viewport"),e=new x,A=e.get(C),t=A.create();t.name="main";const c=new f(e);c.setup();t.scene=c;const d=new S(e,i);t.renderer=d;const m=new h(e);t.camera=m;await t.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);i.addEventListener("resize",()=>{d.resize(),m.updateAspect()});e.init();const M=e.get(y);M.create(t);e.get(T).create(t);const R=e.get(E);await R.setup();const o=e.get(I);o.init("/node_modules/@thatopen-platform/fragments-beta/dist/Worker/worker.mjs");t.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(({value:n})=>{n.useCamera(t.camera.three),t.scene.three.add(n.object),o.core.update(!0)});const[a,u]=P.itemsData({components:e,modelIdMap:{}});a.preserveStructureOnFilter=!0;a.indentationInText=!1;const p=e.get($);p.setup({world:t});p.events.select.onHighlight.add(n=>{u({modelIdMap:n})});p.events.select.onClear.add(()=>u({modelIdMap:{}}));const W=k.create(()=>{const[n]=L.loadFrag({components:e}),b=s=>{const r=s.target;a.queryString=r.value!==""?r.value:null},g=s=>{const r=s.target;a.expanded=!a.expanded,r.label=a.expanded?"Collapse":"Expand"},v=async()=>{await navigator.clipboard.writeText(a.tsv)};return F`
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
    `,elements:{propertiesPanel:W,viewport:i}}};l.layout="main";document.body.append(l);
