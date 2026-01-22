import"./lit-html-CgQwCkHV.js";import{l as I,C as L,W as $,S as v,a as B,b as k,G as x,I as E,F as M,e as l,d as s,i as S}from"./index-suFrD91l.js";import{b as F}from"./index-3mhyHglm.js";import{c as h}from"./index-CccEeiOe.js";I.init();const t=new L,P=t.get($),a=P.create();a.name="main";const g=new v(t);g.setup();a.scene=g;const d=document.createElement("bim-viewport"),f=new B(t,d);a.renderer=f;const w=new k(t);a.camera=w;await a.camera.controls.setLookAt(65,19,-27,12.6,-5,-1.4);d.addEventListener("resize",()=>{f.resize(),w.updateAspect()});const A=t.get(x);A.create(a);t.init();const W=t.get(E);await W.setup({wasm:{absolute:!0,path:"https://unpkg.com/web-ifc@0.0.74/"}});const r=t.get(M);r.init("/node_modules/@thatopen/fragments/dist/Worker/worker.mjs");a.camera.controls.addEventListener("rest",()=>r.core.update(!0));const[o,G]=h.categoriesChart({type:"pie",addLabels:!0,modelIdMap:{},components:t}),[c,R]=h.categoriesChart({type:"bar",addLabels:!1,modelIdMap:{},components:t});async function j(){const e={};for(const[n,y]of r.list){const p=[],C=await y.getItemsWithGeometry();for(const b of C){if(!b)continue;const u=await b.getLocalId();u&&(p.push(u),e[n]=new Set(p))}}return e}const i=l.create(()=>s`
    <bim-chart-legend>
      <bim-label slot="no-chart" icon="ph:warning-fill" style="--bim-icon--c: gold;">No charts Attached</bim-label>
      <bim-label slot="missing-data" icon="ph:warning-fill" style="--bim-icon--c: gold;">No data to display</bim-label>
    </bim-chart-legend>`);o.addEventListener("data-loaded",()=>{i.charts=[...i.charts,o]});c.addEventListener("data-loaded",()=>{i.charts=[...i.charts,c]});a.camera.controls.addEventListener("update",()=>r.core.update(!0));r.list.onItemSet.add(async({value:e})=>{e.useCamera(a.camera.three),a.scene.three.add(e.object),await r.core.update(!0);const n=await j();G({modelIdMap:n}),R({modelIdMap:n}),o.label="Pie Chart Data",c.label="Bar Chart Data"});const z=({target:e})=>{e.loading=!0,o.highlight(({value:n})=>n>100),e.loading=!1},D=l.create(()=>s`
    <bim-button label="Highlight" @click=${z}></bim-button>
`),H=({target:e})=>{e.loading=!0,o.filterByValue(({value:n})=>n>100),e.loading=!1},N=l.create(()=>s`
    <bim-button label="Filter" @click=${H}></bim-button>
`),V=({target:e})=>{e.loading=!0,o.reset(),e.loading=!1},_=l.create(()=>s`
    <bim-button label="Reset" @click=${V}></bim-button>
`),q=l.create(()=>{const[e]=F.loadFrag({components:t});return s`
    <bim-panel style="display: flex; flex-direction: column; height: 100%;">
      <bim-panel-section label="Categories Pie Chart" icon="raphael:piechart" style="flex: 1;">
        ${o}
      </bim-panel-section>
      <bim-panel-section label="Categories Bar Chart" icon="raphael:barchart" style="flex: 1;">
        ${c}
      </bim-panel-section>
      <bim-panel-section label="Labels" icon="raphael:tag" style="flex: 0.1;">
      ${i}
      </bim-panel-section>
      <bim-panel-section label="Actions" style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${e}
        ${D}
        ${N}
        ${_}
      </bim-panel-section> 
    </bim-panel>`}),J=t.get(S);J.setup({world:a});const m=document.createElement("bim-grid");m.layouts={main:{template:`
    "chartPanel viewport 3fr"
    /25rem 1fr
    `,elements:{chartPanel:q,viewport:d}}};m.layout="main";document.body.append(m);
