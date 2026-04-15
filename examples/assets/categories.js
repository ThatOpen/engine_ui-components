import{b as s}from"./if-defined-DypSrBBK.js";import{r as L,C as v,W as I,S as k,a as M,b as $,G as B,I as F,F as x,h as c,D as S}from"./index-6HcFeNjn.js";import{b as E}from"./index-C55CQRqR.js";import{c as h}from"./index-DicGxPVg.js";L.init();const t=new v,U=t.get(I),a=U.create();a.name="main";const g=new k(t);g.setup();a.scene=g;const d=document.createElement("bim-viewport"),f=new M(t,d);a.renderer=f;const w=new $(t);a.camera=w;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{f.resize(),w.updateAspect()});const j=t.get(B);j.create(a);t.init();const P=t.get(F);await P.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.77/"}});const R="https://thatopen.github.io/engine_fragment/resources/worker.mjs",A=await fetch(R),D=await A.blob(),O=new File([D],"worker.mjs",{type:"text/javascript"}),G=URL.createObjectURL(O),r=t.get(x);r.init(G);a.camera.controls.addEventListener("update",()=>r.core.update());r.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[n,W]=h.categoriesChart({type:"pie",addLabels:!0,modelIdMap:{},components:t}),[i,z]=h.categoriesChart({type:"bar",addLabels:!1,modelIdMap:{},components:t});n.borderColor="#00000000";i.borderColor="#00000000";async function H(){const e={};for(const[o,y]of r.list){const p=[],C=await y.getItemsWithGeometry();for(const b of C){if(!b)continue;const u=await b.getLocalId();u&&(p.push(u),e[o]=new Set(p))}}return e}const l=c.create(()=>s`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`);n.addEventListener("data-loaded",()=>{l.charts=[...l.charts,n]});i.addEventListener("data-loaded",()=>{l.charts=[...l.charts,i]});a.camera.controls.addEventListener("update",()=>r.core.update(!0));r.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await r.core.update(!0);const o=await H();W({modelIdMap:o}),z({modelIdMap:o}),n.label="Pie Chart Data",i.label="Bar Chart Data"});const N=({target:e})=>{e.loading=!0,n.highlight(o=>"value"in o?o.value>100:!1),e.loading=!1},V=c.create(()=>s`
    <bim-button label="Highlight" @click=${N}></bim-button>
`),_=({target:e})=>{e.loading=!0,n.filterByValue(o=>"value"in o?o.value>100:!1),e.loading=!1},q=c.create(()=>s`
    <bim-button label="Filter" @click=${_}></bim-button>
`),J=({target:e})=>{e.loading=!0,n.reset(),e.loading=!1},K=c.create(()=>s`
    <bim-button label="Reset" @click=${J}></bim-button>
`),Q=c.create(()=>{const[e]=E.loadFrag({components:t});return s`
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
        ${V}
        ${q}
        ${K}
      </bim-panel-section> 
    </bim-panel>`}),T=t.get(S);T.setup({world:a});const m=document.createElement("bim-grid");m.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:Q,viewport:d}}};m.layout="main";document.body.append(m);
