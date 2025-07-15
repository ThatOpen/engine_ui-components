import"./lit-html-Cs86_c16.js";import{a as v,C as h,W as x,S as f,b as C,c as y,G as S,g as k,I as T,F as E,J as F,R as I,m as L}from"./index-BgQRAdOj.js";import{b as $}from"./index-NGXf93vL.js";import{e as j}from"./index-E2Xb6mG8.js";v.init();const i=document.createElement("bim-viewport"),e=new h,P=e.get(x),t=P.create();t.name="main";const p=new f(e);p.setup();t.scene=p;const d=new C(e,i);t.renderer=d;const m=new y(e);t.camera=m;await t.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);i.addEventListener("resize",()=>{d.resize(),m.updateAspect()});e.init();const R=e.get(S);R.create(t);e.get(k).create(t);const U=e.get(T);await U.setup();const o=e.get(E),A="https://thatopen.github.io/engine_fragment/resources/worker.mjs",M=await fetch(A),z=await M.blob(),B=new File([z],"worker.mjs",{type:"text/javascript"}),D=URL.createObjectURL(B);o.init(D);t.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(({value:n})=>{n.useCamera(t.camera.three),t.scene.three.add(n.object),o.core.update(!0)});const[a,u]=j.itemsData({components:e,modelIdMap:{}});a.preserveStructureOnFilter=!0;a.indentationInText=!1;const c=e.get(F);c.setup({world:t});c.events.select.onHighlight.add(n=>{u({modelIdMap:n})});c.events.select.onClear.add(()=>u({modelIdMap:{}}));const G=I.create(()=>{const[n]=$.loadFrag({components:e}),b=s=>{const r=s.target;a.queryString=r.value!==""?r.value:null},g=s=>{const r=s.target;a.expanded=!a.expanded,r.label=a.expanded?"Collapse":"Expand"},w=async()=>{await navigator.clipboard.writeText(a.tsv)};return L`
    <bim-panel label="Properties">
      <bim-panel-section label="Element Data">
        ${n}
        <div style="display: flex; gap: 0.5rem;">
          <bim-button @click=${g} label=${a.expanded?"Collapse":"Expand"}></bim-button> 
          <bim-button @click=${w} label="Copy as TSV"></bim-button> 
        </div> 
        <bim-text-input @input=${b} placeholder="Search Property" debounce="250"></bim-text-input>
        ${a}
      </bim-panel-section>
    </bim-panel>
  `}),l=document.createElement("bim-grid");l.layouts={main:{template:`
    "propertiesPanel viewport"
    /25rem 1fr
    `,elements:{propertiesPanel:G,viewport:i}}};l.layout="main";document.body.append(l);
