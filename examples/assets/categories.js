import"./lit-html-CgQwCkHV.js";import{l as L,C as v,W as I,S as k,a as M,b as $,G as B,I as F,F as x,e as l,d as s,i as S}from"./index-DPXt1yPz.js";import{b as E}from"./index-BINAE4l9.js";import{c as h}from"./index-W5lz_szl.js";L.init();const t=new v,U=t.get(I),a=U.create();a.name="main";const g=new k(t);g.setup();a.scene=g;const d=document.createElement("bim-viewport"),f=new M(t,d);a.renderer=f;const w=new $(t);a.camera=w;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{f.resize(),w.updateAspect()});const j=t.get(B);j.create(a);t.init();const P=t.get(F);await P.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.74/"}});const R="https://thatopen.github.io/engine_fragment/resources/worker.mjs",A=await fetch(R),O=await A.blob(),G=new File([O],"worker.mjs",{type:"text/javascript"}),W=URL.createObjectURL(G),o=t.get(x);o.init(W);a.camera.controls.addEventListener("update",()=>o.core.update());o.core.models.materials.list.onItemSet.add(({value:e})=>{"isLodMaterial"in e&&e.isLodMaterial||(e.polygonOffset=!0,e.polygonOffsetUnits=1,e.polygonOffsetFactor=Math.random())});const[i,z]=h.categoriesChart({type:"pie",addLabels:!0,modelIdMap:{},components:t}),[c,D]=h.categoriesChart({type:"bar",addLabels:!1,modelIdMap:{},components:t});async function H(){const e={};for(const[n,y]of o.list){const p=[],C=await y.getItemsWithGeometry();for(const b of C){if(!b)continue;const u=await b.getLocalId();u&&(p.push(u),e[n]=new Set(p))}}return e}const r=l.create(()=>s`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`);i.addEventListener("data-loaded",()=>{r.charts=[...r.charts,i]});c.addEventListener("data-loaded",()=>{r.charts=[...r.charts,c]});a.camera.controls.addEventListener("update",()=>o.core.update(!0));o.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await o.core.update(!0);const n=await H();z({modelIdMap:n}),D({modelIdMap:n}),i.label="Pie Chart Data",c.label="Bar Chart Data"});const N=({target:e})=>{e.loading=!0,i.highlight(n=>"value"in n?n.value>100:!1),e.loading=!1},V=l.create(()=>s`
    <bim-button label="Highlight" @click=${N}></bim-button>
`),_=({target:e})=>{e.loading=!0,i.filterByValue(n=>"value"in n?n.value>100:!1),e.loading=!1},q=l.create(()=>s`
    <bim-button label="Filter" @click=${_}></bim-button>
`),J=({target:e})=>{e.loading=!0,i.reset(),e.loading=!1},K=l.create(()=>s`
    <bim-button label="Reset" @click=${J}></bim-button>
`),Q=l.create(()=>{const[e]=E.loadFrag({components:t});return s`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Categories Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${i}
      </bim-panel-section>
      <bim-panel-section label="Categories Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${c}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${r}
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
