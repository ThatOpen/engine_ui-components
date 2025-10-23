import"./lit-html-BUQgm8fs.js";import{u as w,C as x,W as h,S as C,a as f,b as S,G as y,g as T,I as E,F as I,e as $,V as k,f as F}from"./index-DAd_Xb3m.js";import{b as L}from"./index-ChzsFr2R.js";import{e as P}from"./index-BnaeDa9G.js";w.init();const i=document.createElement("bim-viewport"),e=new x,V=e.get(h),t=V.create();t.name="main";const c=new C(e);c.setup();t.scene=c;const d=new f(e,i);t.renderer=d;const m=new S(e);t.camera=m;await t.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);i.addEventListener("resize",()=>{d.resize(),m.updateAspect()});e.init();const j=e.get(y);j.create(t);e.get(T).create(t);const A=e.get(E);await A.setup();const o=e.get(I);o.init("https://thatopen.github.io/engine_fragment/resources/worker.mjs/worker.mjs");t.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(({value:n})=>{n.useCamera(t.camera.three),t.scene.three.add(n.object),o.core.update(!0)});const[a,u]=P.itemsData({components:e,modelIdMap:{}});a.preserveStructureOnFilter=!0;a.indentationInText=!1;const p=e.get($);p.setup({world:t});p.events.select.onHighlight.add(n=>{u({modelIdMap:n})});p.events.select.onClear.add(()=>u({modelIdMap:{}}));const M=k.create(()=>{const[n]=L.loadFrag({components:e}),b=s=>{const r=s.target;a.queryString=r.value!==""?r.value:null},g=s=>{const r=s.target;a.expanded=!a.expanded,r.label=a.expanded?"Collapse":"Expand"},v=async()=>{await navigator.clipboard.writeText(a.tsv)};return F`
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
    `,elements:{propertiesPanel:M,viewport:i}}};l.layout="main";document.body.append(l);
