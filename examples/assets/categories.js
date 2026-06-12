import{b as s}from"./when-D9oPOCfO.js";import{C as v,W as L,S as M,a as $,b as B,G as S,I as k,F as h,m as x}from"./index-PQQfjRhF.js";import{a as E,Q as c}from"./index-DQFDb4ne.js";import{b as F}from"./index-BcEEKeoO.js";import{c as g}from"./index-D_X4r63z.js";E.init();const t=new v,P=t.get(L),a=P.create();a.name="main";const f=new M(t);f.setup();a.scene=f;const d=document.createElement("bim-viewport"),w=new $(t,d);a.renderer=w;const y=new B(t);a.camera=y;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{w.resize(),y.updateAspect()});const A=t.get(S);A.create(a);t.init();const W=t.get(k);await W.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.77/"}});const G=await h.getWorker(),r=t.get(h);r.init(G);a.camera.controls.addEventListener("update",()=>r.core.update());r.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[n,O]=g.categoriesChart({type:"pie",addLabels:!0,modelIdMap:{},components:t}),[i,R]=g.categoriesChart({type:"bar",addLabels:!1,modelIdMap:{},components:t});n.borderColor="#00000000";i.borderColor="#00000000";async function z(){const e={};for(const[o,C]of r.list){const p=[],I=await C.getItemsWithGeometry();for(const b of I){if(!b)continue;const u=await b.getLocalId();u&&(p.push(u),e[o]=new Set(p))}}return e}const l=c.create(()=>s`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`);n.addEventListener("data-loaded",()=>{l.charts=[...l.charts,n]});i.addEventListener("data-loaded",()=>{l.charts=[...l.charts,i]});a.camera.controls.addEventListener("update",()=>r.core.update(!0));r.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await r.core.update(!0);const o=await z();O({modelIdMap:o}),R({modelIdMap:o}),n.label="Pie Chart Data",i.label="Bar Chart Data"});const D=({target:e})=>{e.loading=!0,n.highlight(o=>"value"in o?o.value>100:!1),e.loading=!1},H=c.create(()=>s`
    <bim-button label="Highlight" @click=${D}></bim-button>
`),N=({target:e})=>{e.loading=!0,n.filterByValue(o=>"value"in o?o.value>100:!1),e.loading=!1},Q=c.create(()=>s`
    <bim-button label="Filter" @click=${N}></bim-button>
`),U=({target:e})=>{e.loading=!0,n.reset(),e.loading=!1},j=c.create(()=>s`
    <bim-button label="Reset" @click=${U}></bim-button>
`),V=c.create(()=>{const[e]=F.loadFrag({components:t});return s`
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
        ${H}
        ${Q}
        ${j}
      </bim-panel-section> 
    </bim-panel>`}),q=t.get(x);q.setup({world:a});const m=document.createElement("bim-grid");m.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:V,viewport:d}}};m.layout="main";document.body.append(m);
