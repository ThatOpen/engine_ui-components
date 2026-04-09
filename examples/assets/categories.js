import"./lit-html-CgQwCkHV.js";import{p as L,C as v,W as I,S as k,a as M,b as $,G as B,I as F,F as S,m as s,e as c,n as x}from"./index-Be3le0As.js";import{b as E}from"./index-BKQ5ms4X.js";import{c as h}from"./index-DQ4IzPx3.js";L.init();const t=new v,U=t.get(I),a=U.create();a.name="main";const g=new k(t);g.setup();a.scene=g;const d=document.createElement("bim-viewport"),f=new M(t,d);a.renderer=f;const w=new $(t);a.camera=w;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{f.resize(),w.updateAspect()});const j=t.get(B);j.create(a);t.init();const P=t.get(F);await P.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.77/"}});const R="https://thatopen.github.io/engine_fragment/resources/worker.mjs",A=await fetch(R),O=await A.blob(),G=new File([O],"worker.mjs",{type:"text/javascript"}),W=URL.createObjectURL(G),r=t.get(S);r.init(W);a.camera.controls.addEventListener("update",()=>r.core.update());r.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[n,z]=h.categoriesChart({type:"pie",addLabels:!0,modelIdMap:{},components:t}),[i,D]=h.categoriesChart({type:"bar",addLabels:!1,modelIdMap:{},components:t});n.borderColor="#00000000";i.borderColor="#00000000";async function H(){const e={};for(const[o,y]of r.list){const p=[],C=await y.getItemsWithGeometry();for(const b of C){if(!b)continue;const u=await b.getLocalId();u&&(p.push(u),e[o]=new Set(p))}}return e}const l=s.create(()=>c`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`);n.addEventListener("data-loaded",()=>{l.charts=[...l.charts,n]});i.addEventListener("data-loaded",()=>{l.charts=[...l.charts,i]});a.camera.controls.addEventListener("update",()=>r.core.update(!0));r.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await r.core.update(!0);const o=await H();z({modelIdMap:o}),D({modelIdMap:o}),n.label="Pie Chart Data",i.label="Bar Chart Data"});const N=({target:e})=>{e.loading=!0,n.highlight(o=>"value"in o?o.value>100:!1),e.loading=!1},T=s.create(()=>c`
    <bim-button label="Highlight" @click=${N}></bim-button>
`),V=({target:e})=>{e.loading=!0,n.filterByValue(o=>"value"in o?o.value>100:!1),e.loading=!1},_=s.create(()=>c`
    <bim-button label="Filter" @click=${V}></bim-button>
`),q=({target:e})=>{e.loading=!0,n.reset(),e.loading=!1},J=s.create(()=>c`
    <bim-button label="Reset" @click=${q}></bim-button>
`),K=s.create(()=>{const[e]=E.loadFrag({components:t});return c`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Categories Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${n}
      </bim-panel-section>
      <bim-panel-section label="Categories Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${i}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${l}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${e}
        ${T}
        ${_}
        ${J}
      </bim-panel-section> 
    </bim-panel>`}),Q=t.get(x);Q.setup({world:a});const m=document.createElement("bim-grid");m.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:K,viewport:d}}};m.layout="main";document.body.append(m);
